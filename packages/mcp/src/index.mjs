#!/usr/bin/env node
import fs from 'node:fs/promises';
import {Server} from '@modelcontextprotocol/sdk/server/index.js';
import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js';
import {ListToolsRequestSchema,CallToolRequestSchema} from '@modelcontextprotocol/sdk/types.js';
const load=async name=>JSON.parse(await fs.readFile(new URL('../data/'+name,import.meta.url),'utf8'));
const [catalog,components,icons,comparison]=await Promise.all(['catalog.json','components.json','icons.json','comparison.json'].map(load));
const guide=await fs.readFile(new URL('../data/guide.md',import.meta.url),'utf8');
const object=properties=>({type:'object',properties,additionalProperties:false});
const query={type:'string',description:'Optional case-insensitive search'};
const definitions=[
 ['health_check','Read package version and data counts',object({})],
 ['list_components','List implemented IAK React components; source previews are separate',object({query})],
 ['get_component','Get IAK props, usage and accessibility notes', {...object({name:{type:'string'}}),required:['name']}],
 ['list_tokens','Get runtime defaults and media-query overrides without flattening',object({query})],
 ['list_icons','List locally bundled icons and unresolved original references',object({query})],
 ['get_icon','Get a bundled SVG definition by exact name',{...object({name:{type:'string'}}),required:['name']}],
 ['list_assets','Find original asset file paths and checksums',object({query})],
 ['list_templates','List original HTML layout previews',object({query})],
 ['iak_coding_guidelines','Read reconciled IAK design rules and source limitations',object({})],
 ['getting_started','Read installation instructions and remaining gaps',object({})],
];
const tools=definitions.map(([name,description,inputSchema])=>({name,description,inputSchema,annotations:{readOnlyHint:true,destructiveHint:false,openWorldHint:false}}));
const server=new Server({name:'iak-design-system',version:'0.9.0'},{capabilities:{tools:{}}});
server.setRequestHandler(ListToolsRequestSchema,async()=>({tools}));
server.setRequestHandler(CallToolRequestSchema,async req=>{
 try {
  const {name,arguments:args={}}=req.params;
  const definition=tools.find(t=>t.name===name);if(!definition) throw Error('Unknown tool');
  if(Object.keys(args).some(k=>!Object.hasOwn(definition.inputSchema.properties,k)))throw Error('Unknown argument');
  for(const [k,v] of Object.entries(args))if(typeof v!=='string'||v.length>200)throw Error('Invalid string argument: '+k);
  const q=(args.query||'').toLowerCase();
  const filter=items=>items.filter(x=>JSON.stringify(x).toLowerCase().includes(q));
  let result;
  switch(name){
   case 'health_check':result={version:'0.9.0',components:components.length,tokens:Object.keys(catalog.tokens).length,icons:Object.keys(icons.icons).length,transport:'stdio',readOnly:true};break;
   case 'list_components':result=filter(components.map(({name,group,status,description})=>({name,group,status,description})));break;
   case 'get_component':result=components.find(x=>x.name===args.name);if(!result)throw Error('Component not found');break;
   case 'list_tokens':result={defaults:Object.fromEntries(filter(Object.entries(catalog.tokens))),contextOverrides:catalog.contextOverrides};break;
   case 'list_icons':result={bundled:Object.keys(icons.icons).filter(x=>x.includes(q)),unresolved:icons.unresolved.filter(x=>x.includes(q))};break;
   case 'get_icon':result=Object.hasOwn(icons.icons,args.name)?icons.icons[args.name]:undefined;if(!result)throw Error('Icon is not bundled');break;
   case 'list_assets':result=filter(catalog.files);break;
   case 'list_templates':result=filter(catalog.cards.filter(x=>x.group.startsWith('UI Kit')));break;
   case 'iak_coding_guidelines':result=guide;break;
   case 'getting_started':result={docs:'https://sugun8119-ops.github.io/iak-design-system/developer/',uiInstall:'npm install https://sugun8119-ops.github.io/iak-design-system/developer/releases/iak-design-ui-0.9.0.tgz',status:'Preview tarball, not npm registry publication',comparison};break;
  }
  return {content:[{type:'text',text:typeof result==='string'?result:JSON.stringify(result,null,2)}]};
 }catch(error){return {isError:true,content:[{type:'text',text:error.message}]};}
});
await server.connect(new StdioServerTransport());
