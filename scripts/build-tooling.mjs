import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {build} from 'esbuild';
const root=fileURLToPath(new URL('../',import.meta.url));
const at=p=>path.join(root,p);
const read=p=>fs.readFile(at(p),'utf8');
const developer=at('src/developer');
await fs.mkdir(developer,{recursive:true});
const releases=path.join(developer,'releases');
await fs.mkdir(releases,{recursive:true});
const out=at('packages/ui/dist');
await fs.rm(out,{recursive:true,force:true});await fs.mkdir(out,{recursive:true});
await build({entryPoints:[at('packages/ui/src/index.tsx')],outfile:path.join(out,'index.js'),bundle:true,platform:'neutral',format:'esm',external:['react','react/jsx-runtime','react-dom','@radix-ui/*'],jsx:'automatic',banner:{js:'"use client";'},logLevel:'warning'});
execFileSync(process.execPath,[at('node_modules/typescript/bin/tsc'),'--declaration','--emitDeclarationOnly','--jsx','react-jsx','--module','ESNext','--moduleResolution','bundler','--target','ES2022','--skipLibCheck','--strict','--outDir',out,at('packages/ui/src/index.tsx')],{cwd:root,stdio:'inherit'});
execFileSync(process.execPath,[at('node_modules/typescript/bin/tsc'),'--noEmit','--jsx','react-jsx','--module','ESNext','--moduleResolution','bundler','--target','ES2022','--skipLibCheck','--strict','--resolveJsonModule','--allowSyntheticDefaultImports',at('src/developer/playground.tsx')],{cwd:root,stdio:'inherit'});
await fs.copyFile(at('packages/ui/src/styles.css'),path.join(out,'styles.css'));
await fs.copyFile(at('packages/ui/src/styles.css'),path.join(developer,'ui.css'));
await fs.copyFile(at('src/library/claude/colors_and_type.css'),path.join(out,'tokens.css'));
await fs.cp(at('src/library/claude/fonts'),path.join(out,'fonts'),{recursive:true});
await fs.copyFile(at('src/library/Pretendard-LICENSE.txt'),path.join(out,'Pretendard-LICENSE.txt'));
const catalog=JSON.parse(await read('src/library/catalog.json'));
await fs.writeFile(path.join(out,'tokens.json'),JSON.stringify({tokens:catalog.tokens,contextOverrides:catalog.contextOverrides},null,2));
const licenses=[];
for(const prefix of ['eva','solar']){const info=JSON.parse(await read(`node_modules/@iconify-json/${prefix}/info.json`));licenses.push({name:info.name,author:info.author,license:info.license,modifications:'Unmodified SVG definitions, selected subset; rendered with currentColor.'});}
await fs.writeFile(path.join(out,'icon-licenses.json'),JSON.stringify(licenses,null,2));
await fs.copyFile(at('packages/ui/Eva-LICENSE.txt'),path.join(out,'Eva-LICENSE.txt'));
const mcpData=at('packages/mcp/data');await fs.mkdir(mcpData,{recursive:true});
await fs.copyFile(at('src/library/catalog.json'),path.join(mcpData,'catalog.json'));
await fs.writeFile(path.join(mcpData,'guide.md'),await read('src/library/guide.md')+'\n\n'+await read('data/developer/guide.md'));
await fs.copyFile(path.join(out,'icon-licenses.json'),path.join(mcpData,'icon-licenses.json'));
await fs.copyFile(path.join(out,'Eva-LICENSE.txt'),path.join(mcpData,'Eva-LICENSE.txt'));
await fs.copyFile(path.join(out,'icon-licenses.json'),path.join(developer,'icon-licenses.json'));
for(const name of ['components','icons','comparison']){await fs.copyFile(at(`data/developer/${name}.json`),path.join(mcpData,name+'.json'));await fs.copyFile(at(`data/developer/${name}.json`),path.join(developer,name+'.json'));}
const playgroundBuild=await build({metafile:true,entryPoints:[at('src/developer/playground.tsx')],outfile:path.join(developer,'app.js'),bundle:true,format:'esm',platform:'browser',jsx:'automatic',minify:true,define:{'process.env.NODE_ENV':'"production"'},legalComments:'linked',logLevel:'warning'});
const bundledPackages=new Set(Object.keys(playgroundBuild.metafile.inputs).map(p=>p.match(/(?:^|\/)node_modules\/((?:@[^/]+\/)?[^/]+)/)?.[1]).filter(Boolean));
const notices=[];
for(const name of [...bundledPackages].sort()){
 const directory=at('node_modules/'+name);const metadata=JSON.parse(await fs.readFile(path.join(directory,'package.json'),'utf8'));
 const files=(await fs.readdir(directory)).filter(name=>/^licen[cs]e(?:\..*)?$/i.test(name));
 notices.push(name+' '+metadata.version+' ('+metadata.license+')\n'+(await Promise.all(files.map(file=>fs.readFile(path.join(directory,file),'utf8')))).join('\n'));
}
await fs.writeFile(path.join(developer,'THIRD_PARTY_NOTICES.txt'),notices.join('\n\n--------------------\n\n'));
for(const pkg of ['ui','mcp'])execFileSync('npm',['pack','--pack-destination',releases,'--ignore-scripts','--silent'],{cwd:at(`packages/${pkg}`),stdio:'pipe'});
console.log('Built IAK UI, icons, playground and read-only MCP release packages.');
