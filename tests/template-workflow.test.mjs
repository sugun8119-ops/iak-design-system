import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {run} from '../scripts/template-workflow.mjs';
test('authoring adds and updates stable IDs, preserves data on errors, and scopes verified feedback',async()=>{
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'iak-author-'));
 try {
  await fs.mkdir(path.join(root,'data'));await fs.mkdir(path.join(root,'src/template-previews/my-design'),{recursive:true});
  await fs.writeFile(path.join(root,'data/templates.json'),'[]');await fs.writeFile(path.join(root,'data/template-feedback.json'),'[]');
  const spec={id:'my-design',name:'My design',category:'예약',description:'User design',type:'custom',sources:['provided-design.html'],acceptance:['375px one column'],features:'Build booking',layout:{desktop:'2 columns',mobile:'1 column',sections:['Form','Summary']}};
  const save=async(name,value)=>fs.writeFile(path.join(root,name),JSON.stringify(value));
  await save('spec.json',spec);
  await assert.rejects(run('add','spec.json',root));assert.equal(await fs.readFile(path.join(root,'data/templates.json'),'utf8'),'[]');
  await fs.writeFile(path.join(root,'src/template-previews/my-design/index.html'),'<h1>My design</h1>');
  await run('add','spec.json',root);const before=await fs.readFile(path.join(root,'data/templates.json'),'utf8');
  await assert.rejects(run('add','spec.json',root),/already exists/);assert.equal(await fs.readFile(path.join(root,'data/templates.json'),'utf8'),before);
  await save('spec.json',{...spec,id:'../escape'});await assert.rejects(run('add','spec.json',root),/Invalid/);
  await save('spec.json',{...spec,name:'Updated'});await run('update','spec.json',root);
  const list=JSON.parse(await fs.readFile(path.join(root,'data/templates.json'),'utf8'));assert.equal(list.length,1);assert.equal(list[0].id,'my-design');assert.equal(list[0].name,'Updated');
  const f={id:'mobile-order',templateId:'my-design',expected:'Form first',actual:'Summary first',rule:'Keep form before summary on mobile',evidence:'reference comparison',status:'draft',regressionTests:[]};
  await save('feedback.json',f);await run('feedback','feedback.json',root);
  await save('feedback.json',{...f,status:'verified'});await assert.rejects(run('feedback-update','feedback.json',root),/verification/);
  await save('feedback.json',{...f,status:'verified',verification:'Checked at 375px'});await run('feedback-update','feedback.json',root);
  const stored=JSON.parse(await fs.readFile(path.join(root,'data/template-feedback.json'),'utf8'));assert.equal(stored.length,1);assert.equal(stored[0].status,'verified');
 } finally {await fs.rm(root,{recursive:true,force:true})}
});
