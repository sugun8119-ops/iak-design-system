import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
const idOK = v => typeof v==='string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v);
const nonempty = v => typeof v==='string' && !!v.trim();
export function validateTemplate(t,{authoring=false}={}) {
 if(!t || !idOK(t.id) || !['checkout','landing','workspace','custom'].includes(t.type)) throw Error('Invalid template id/type');
 for(const key of ['name','category','description','features']) if(!nonempty(t[key])) throw Error('Missing '+key);
 if(/[<>]/.test(t.name)) throw Error('Template name must be plain text');
 if(!nonempty(t.layout?.desktop)||!nonempty(t.layout?.mobile)||!Array.isArray(t.layout?.sections)||!t.layout.sections.length||!t.layout.sections.every(nonempty)) throw Error('Desktop/mobile layout and sections required');
 if(authoring && (!Array.isArray(t.sources)||!t.sources.length||!t.sources.every(nonempty)||!Array.isArray(t.acceptance)||!t.acceptance.length||!t.acceptance.every(nonempty))) throw Error('Sources and acceptance checks required');
 return t;
}
export function validateFeedback(f,templates){
 if(!f||!idOK(f.id)||!templates.some(t=>t.id===f.templateId)||!['draft','verified'].includes(f.status))throw Error('Invalid feedback id/template/status');
 for(const k of ['expected','actual','rule','evidence'])if(!nonempty(f[k]))throw Error('Missing '+k);
 if(f.status==='verified'&&!nonempty(f.verification))throw Error('Verified feedback requires actual verification evidence');
 if(!Array.isArray(f.regressionTests)||!f.regressionTests.every(x=>nonempty(x)&&x.startsWith('tests/')&&!x.split(/[\\/]/).includes('..')))throw Error('regressionTests must contain repository test paths');
 return f;
}
async function readJSON(p){return JSON.parse(await fs.readFile(p,'utf8'))}
async function atomic(p,data){const tmp=p+'.tmp-'+process.pid;try{await fs.writeFile(tmp,JSON.stringify(data,null,2)+'\n',{flag:'wx'});await fs.rename(tmp,p)}finally{await fs.rm(tmp,{force:true})}}
export async function run(command,file,root=process.cwd()){
 const listPath=path.join(root,'data/templates.json');const templates=await readJSON(listPath);const value=await readJSON(path.resolve(root,file));
 if(['add','update'].includes(command)){
  validateTemplate(value,{authoring:true});const index=templates.findIndex(t=>t.id===value.id);
  if(command==='add'&&index>=0)throw Error('ID already exists; use update for this template');
  if(command==='update'&&index<0)throw Error('Template does not exist');
  if(value.type==='custom')await fs.access(path.join(root,'src/template-previews',value.id,'index.html'));
  const next=[...templates];if(index<0)next.push(value);else next[index]=value;
  await atomic(listPath,next);return value.id;
 }
 if(['feedback','feedback-update'].includes(command)){
  validateFeedback(value,templates);for(const p of value.regressionTests)await fs.access(path.join(root,p));
  const feedbackPath=path.join(root,'data/template-feedback.json');const all=await readJSON(feedbackPath);const index=all.findIndex(f=>f.id===value.id);
  if(command==='feedback'&&index>=0)throw Error('Feedback exists; use feedback-update');
  if(command==='feedback-update'&&index<0)throw Error('Feedback does not exist');
  if(index<0)all.push(value);else all[index]=value;await atomic(feedbackPath,all);return value.id;
 }
 throw Error('Usage: node scripts/template-workflow.mjs add|update|feedback|feedback-update spec.json');
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){try{console.log('Saved: '+await run(process.argv[2],process.argv[3]))}catch(e){console.error(e.message);process.exitCode=1}}
