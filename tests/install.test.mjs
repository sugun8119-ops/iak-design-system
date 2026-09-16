import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../", import.meta.url));
test("install, unchanged, update, backup and failed validation preserve existing skill", async () => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), "iak-test-"));
  try {
    const skill = path.join(temp, "SKILL.md"),
      registry = path.join(temp, "registry.json"),
      target = path.join(temp, "target");
    const write = async (content) => {
      await fs.writeFile(skill, content);
      await fs.writeFile(
        registry,
        JSON.stringify({
          name: "iak-design-system",
          version: "0.2.0",
          file: "SKILL.md",
          sha256: crypto.createHash("sha256").update(content).digest("hex"),
        }),
      );
    };
    const run = () =>
      spawnSync(
        process.execPath,
        [path.join(root, "scripts/install.mjs"), registry, "--target", target],
        { encoding: "utf8" },
      );
    const a =
      "---\nname: iak-design-system\ndescription: Test skill\n---\nOriginal";
    await write(a);
    assert.equal(run().status, 0);
    const dest = path.join(target, "SKILL.md"),
      time = (await fs.stat(dest)).mtimeMs;
    assert.equal(run().status, 0);
    assert.equal((await fs.stat(dest)).mtimeMs, time);
    const b = a + " updated";
    await write(b);
    assert.equal(run().status, 0);
    assert.equal(await fs.readFile(dest, "utf8"), b);
    assert.equal(
      await fs.readFile(path.join(target, "SKILL.md.bak"), "utf8"),
      a,
    );
    await fs.writeFile(skill, "broken");
    assert.notEqual(run().status, 0);
    assert.equal(await fs.readFile(dest, "utf8"), b);
    await fs.writeFile(registry, "invalid");
    assert.notEqual(run().status, 0);
    assert.equal(await fs.readFile(dest, "utf8"), b);
    await fs.rm(registry);
    assert.notEqual(run().status, 0);
    assert.equal(await fs.readFile(dest, "utf8"), b);
  } finally {
    await fs.rm(temp, { recursive: true, force: true });
  }
});
test("different skills are not overwritten", async () => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), "iak-conflict-"));
  try {
    const content = "---\nname: iak-design-system\ndescription: Test\n---\n";
    await fs.writeFile(path.join(temp, "source.md"), content);
    await fs.writeFile(
      path.join(temp, "registry.json"),
      JSON.stringify({
        name: "iak-design-system",
        version: "test",
        file: "source.md",
        sha256: crypto.createHash("sha256").update(content).digest("hex"),
      }),
    );
    await fs.writeFile(path.join(temp, "SKILL.md"), "another skill");
    const r = spawnSync(process.execPath, [
      path.join(root, "scripts/install.mjs"),
      path.join(temp, "registry.json"),
      "--target",
      temp,
    ]);
    assert.notEqual(r.status, 0);
    assert.equal(
      await fs.readFile(path.join(temp, "SKILL.md"), "utf8"),
      "another skill",
    );
  } finally {
    await fs.rm(temp, { recursive: true, force: true });
  }
});
