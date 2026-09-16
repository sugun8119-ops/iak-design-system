import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Client} from '@modelcontextprotocol/sdk/client/index.js';
import {StdioClientTransport} from '@modelcontextprotocol/sdk/client/stdio.js';
import {fileURLToPath} from 'node:url';
test('packaged stdio MCP exposes real data and rejects invalid lookups',async()=>{
 const client=new Client({name:'iak-test',version:'1.0.0'});
 try{
 await client.connect(new StdioClientTransport({command:process.execPath,args:[fileURLToPath(new URL('../packages/mcp/src/index.mjs',import.meta.url))]}));
 assert.equal((await client.listTools()).tools.length,10);
 const call=async(name,args={})=>client.callTool({name,arguments:args});
 const health=JSON.parse((await call('health_check')).content[0].text);assert.equal(health.components,16);assert.equal(health.icons,97);assert.equal(health.tokens,162);
 assert.equal(JSON.parse((await call('get_component',{name:'Button'})).content[0].text).name,'Button');
 for(const name of ['Dialog','Menu','Table','Pagination','Toast','AlertDialog'])assert.equal(JSON.parse((await call('get_component',{name})).content[0].text).name,name);
 const tokens=JSON.parse((await call('list_tokens')).content[0].text);assert.ok(tokens.contextOverrides.length>0);
 const icons=JSON.parse((await call('list_icons')).content[0].text);assert.equal(icons.unresolved.length,9);
 assert.equal((await call('get_icon',{name:'__proto__'})).isError,true);
 assert.equal((await call('get_component',{name:'unknown'})).isError,true);
 assert.equal((await call('health_check',{path:'/etc/passwd'})).isError,true);
 }finally{await client.close();}
});
