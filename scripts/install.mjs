import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
// Standalone: usable as a local file or curl | node --input-type=module - <registry-url>.
const args = process.argv.slice(2);
const source = args.shift();
let target = path.join(
  process.env.CODEX_HOME || path.join(os.homedir(), ".codex"),
  "skills",
  "iak-design-system",
);
if (args.length === 2 && args[0] === "--target") target = path.resolve(args[1]);
else if (args.length)
  throw Error(
    "Usage: node install.mjs <registry.json path or HTTPS URL> [--target directory]",
  );
let tmp;
async function read(location) {
  if (/^https:\/\//.test(location)) {
    const r = await fetch(location, {
      cache: "no-store",
      signal: AbortSignal.timeout(20000),
    });
    if (!r.ok) throw Error(`HTTP ${r.status}`);
    if (!r.url.startsWith("https://")) throw Error("HTTPS required");
    const data = await r.text();
    if (data.length > 2_000_000) throw Error("Source too large");
    return data;
  }
  if (/^[a-z]+:/i.test(location)) throw Error("Remote source requires HTTPS");
  return fs.readFile(location, "utf8");
}
try {
  if (!source) throw Error("registry.json 경로나 HTTPS URL이 필요합니다.");
  const registry = JSON.parse(await read(source));
  if (
    registry.name !== "iak-design-system" ||
    !/^\w[\w.-]*\.md$/.test(registry.file) ||
    !/^\w[\w.-]*$/.test(registry.version) ||
    !/^[a-f0-9]{64}$/.test(registry.sha256)
  )
    throw Error("Invalid registry");
  const location = source.startsWith("https://")
    ? new URL(registry.file, source).href
    : path.resolve(path.dirname(source), registry.file);
  const content = await read(location);
  if (
    crypto.createHash("sha256").update(content).digest("hex") !==
    registry.sha256
  )
    throw Error("Skill checksum mismatch");
  if (
    !/^---\nname: iak-design-system\n/.test(content) ||
    !content.includes("\ndescription: ")
  )
    throw Error("Invalid SKILL.md");
  await fs.mkdir(target, { recursive: true });
  const dest = path.join(target, "SKILL.md");
  let previous;
  try {
    if ((await fs.lstat(dest)).isSymbolicLink())
      throw Error("Refusing to replace symlink");
    previous = await fs.readFile(dest, "utf8");
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
  }
  if (previous && !/^name: iak-design-system$/m.test(previous))
    throw Error("Different skill already exists");
  if (previous === content) {
    console.log("이미 최신입니다: " + dest);
    process.exit(0);
  }
  tmp = path.join(target, ".install-" + crypto.randomUUID());
  await fs.writeFile(tmp, content, { flag: "wx" });
  if (previous !== undefined)
    await fs.writeFile(path.join(target, "SKILL.md.bak"), previous);
  await fs.rename(tmp, dest);
  tmp = null;
  console.log(`IAK 스킬 ${registry.version} 설치 완료: ${dest}`);
} catch (e) {
  if (tmp) await fs.rm(tmp, { force: true });
  console.error("설치 실패 — 기존 SKILL.md 유지: " + e.message);
  process.exitCode = 1;
}
