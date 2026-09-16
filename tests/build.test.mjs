import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../", import.meta.url));
test("Pages build uses repository subpath, generates AI template routes and supports piped installer", async () => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), "iak-build-"));
  try {
    for (const dir of ["src", "data", "scripts", "packages", "releases"])
      await fs.cp(path.join(root, dir), path.join(temp, dir), {
        recursive: true,
      });
    await fs.copyFile(path.join(root, "SKILL.md"), path.join(temp, "SKILL.md"));
    await fs.symlink(path.join(root, "node_modules"), path.join(temp, "node_modules"), "dir");
    const built = spawnSync(
      process.execPath,
      [path.join(temp, "scripts/build.mjs")],
      {
        env: {
          ...process.env,
          GITHUB_REPOSITORY: "test-owner/iak-design-system",
          SITE_URL: "https://test-owner.github.io/iak-design-system",
        },
        encoding: "utf8",
      },
    );
    assert.equal(built.status, 0, built.stderr);
    const dist = path.join(temp, "dist");
    const html = await fs.readFile(path.join(dist, 'developer/index.html'), 'utf8');
    for (const name of ['app', 'ui', 'developer']) {
      const reference = html.match(new RegExp(name + '\\.[a-f0-9]{12}\\.(?:js|css)'))?.[0];
      assert.ok(reference, 'Missing content-addressed ' + name);
      assert.ok((await fs.stat(path.join(dist, 'developer', reference))).size > 0);
    }
    const data = JSON.parse(
      await fs.readFile(path.join(dist, "site-data.json")),
    );
    assert.ok(
      data.command.includes(
        "https://test-owner.github.io/iak-design-system/registry.json",
      ),
    );
    assert.ok(data.commands.codex.endsWith('--tool codex'));
    assert.ok(data.commands.claude.endsWith('--tool claude'));
    const skill = await fs.readFile(path.join(dist, "SKILL.md"), "utf8");
    assert.ok(!skill.includes(temp));
    assert.ok(!skill.includes("/Users/"));
    const registry = JSON.parse(
      await fs.readFile(path.join(dist, "registry.json")),
    );
    assert.equal(
      registry.sha256,
      crypto.createHash("sha256").update(skill).digest("hex"),
    );
    for (const id of [
      "event-checkout",
      "studio-landing",
      "project-workspace",
    ]) {
      assert.ok(
        (
          await fs.readFile(
            path.join(dist, "templates", id, "index.html"),
            "utf8",
          )
        ).includes("../../template.js"),
      );
      assert.equal(
        JSON.parse(
          await fs.readFile(path.join(dist, "templates", id, "template.json")),
        ).id,
        id,
      );
    }
    const target = path.join(temp, "installed");
    const piped = spawnSync(
      process.execPath,
      [
        "--input-type=module",
        "-",
        path.join(dist, "registry.json"),
        "--target",
        target,
      ],
      {
        input: await fs.readFile(path.join(dist, "install.mjs"), "utf8"),
        encoding: "utf8",
      },
    );
    assert.equal(piped.status, 0, piped.stderr);
    assert.equal(
      await fs.readFile(path.join(target, "SKILL.md"), "utf8"),
      skill,
    );
  } finally {
    await fs.rm(temp, { recursive: true, force: true });
  }
});
