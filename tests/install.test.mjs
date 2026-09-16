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

test('AI tool destinations respect fresh Codex, existing legacy and Claude isolation',async()=>{
 const {resolveTarget}=await import('../scripts/install.mjs');const base={home:'/test/user',cwd:'/test/project',codexHome:undefined,exists:()=>false};
 assert.equal(resolveTarget([],base),'/test/user/.agents/skills/iak-design-system');
 assert.equal(resolveTarget(['--tool','claude'],base),'/test/user/.claude/skills/iak-design-system');
 assert.equal(resolveTarget(['--tool','codex'],{...base,exists:p=>p==='/test/user/.codex/skills/iak-design-system/SKILL.md'}),'/test/user/.codex/skills/iak-design-system');
 assert.equal(resolveTarget(['--tool','codex'],{...base,codexHome:'/custom/codex',exists:()=>true}),'/custom/codex/skills/iak-design-system');
 assert.equal(resolveTarget(['--tool','claude','--target','local'],base),'/test/project/local');
 for(const flags of [['--tool','other'],['--tool'],['--target'],['--tool','claude','--tool','codex'],['--invalid','x']])assert.throws(()=>resolveTarget(flags,base));
});
test('tool-specific prompts preserve URLs and use the correct invocation',async()=>{
 const {makePrompt}=await import('../src/install-options.js');const url='https://example.com/templates/event/';
 assert.ok(makePrompt('codex',url,'결제 화면').startsWith('$iak-design-system'));
 assert.ok(makePrompt('claude',url,'결제 화면').startsWith('/iak-design-system'));
 assert.ok(makePrompt('claude',url,'결제 화면').includes(url));
 assert.throws(()=>makePrompt('claude','javascript:alert(1)','test'));assert.throws(()=>makePrompt('codex',url,' '));
});

test('operator skills install into independent named destinations',async()=>{
 const temp=await fs.mkdtemp(path.join(os.tmpdir(),'iak-operators-'));
 try{
  for(const name of ['iak-add-template','iak-refine-template']){
   const content=`---\nname: ${name}\ndescription: Workflow\n---\nUse the repository.`;
   const registry=path.join(temp,name+'.json');await fs.writeFile(path.join(temp,'SKILL.md'),content);
   await fs.writeFile(registry,JSON.stringify({name,version:'0.13.0',file:'SKILL.md',sha256:crypto.createHash('sha256').update(content).digest('hex')}));
   const target=path.join(temp,name);
   const result=spawnSync(process.execPath,[path.join(root,'scripts/install.mjs'),registry,'--target',target],{encoding:'utf8'});assert.equal(result.status,0,result.stderr);
   assert.equal(await fs.readFile(path.join(target,'SKILL.md'),'utf8'),content);
  }
 }finally{await fs.rm(temp,{recursive:true,force:true})}
});
