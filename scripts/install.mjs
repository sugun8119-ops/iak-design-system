import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
// Standalone: usable as a local file or curl | node --input-type=module - <registry-url>.
import {existsSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
export function resolveTarget(args,{home=os.homedir(),codexHome=process.env.CODEX_HOME,exists=existsSync,cwd=process.cwd(),skill='iak-design-system'}={}) {
 let tool='codex',target; const seen=new Set();
 for(let i=0;i<args.length;i+=2){const flag=args[i],value=args[i+1];if(!['--tool','--target'].includes(flag)||!value||value.startsWith('--')||seen.has(flag))throw Error('Usage: install.mjs <registry> [--tool codex|claude] [--target directory]');seen.add(flag);if(flag==='--tool')tool=value;else target=value;}
 if(!['codex','claude'].includes(tool))throw Error('Unknown tool: '+tool);
 if(target)return path.resolve(cwd,target);
 if(tool==='claude')return path.join(home,'.claude','skills',skill);
 const legacy=path.join(codexHome||path.join(home,'.codex'),'skills',skill);
 // Keep existing users on the same file; fresh installs follow current Codex docs.
 return exists(path.join(legacy,'SKILL.md'))?legacy:path.join(home,'.agents','skills',skill);
}
async function install(){
const args=process.argv.slice(2),source=args.shift();
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
    !["iak-design-system","iak-add-template","iak-refine-template"].includes(registry.name) ||
    !/^\w[\w.-]*\.md$/.test(registry.file) ||
    !/^\w[\w.-]*$/.test(registry.version) ||
    !/^[a-f0-9]{64}$/.test(registry.sha256)
  )
    throw Error("Invalid registry");
  const target=resolveTarget(args,{skill:registry.name});
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
    !content.startsWith(`---\nname: ${registry.name}\n`) ||
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
  if (previous && !previous.split("\n").includes(`name: ${registry.name}`))
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

}
if(process.argv[1]==='-'||(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href))await install();
