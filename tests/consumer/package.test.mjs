import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import * as UI from '@iak-design/ui';
const entry=fileURLToPath(import.meta.resolve('@iak-design/ui'));
const dist=path.dirname(entry);
test('packed public exports retain the supported API',()=>{
 assert.deepEqual(Object.keys(UI).sort(),['AlertDialog','Badge','Button','Card','Checkbox','Dialog','Icon','Menu','Pagination','Select','Skeleton','Switch','Table','TextField','Textarea','ToastProvider','useToast'].sort());
});
test('published CSS, fonts, types, tokens and client boundary are present',async()=>{
 assert.match(await fs.readFile(entry,'utf8'),/^"use client"/);
 const tokens=await fs.readFile(fileURLToPath(import.meta.resolve('@iak-design/ui/tokens.css')),'utf8');
 const urls=[...tokens.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)].map(m=>m[1]);
 assert.ok(urls.length>=9);
 for(const url of urls){assert.ok(!/^https?:/.test(url));assert.ok((await fs.stat(path.join(dist,url))).size>0)}
 assert.ok((await fs.stat(fileURLToPath(import.meta.resolve('@iak-design/ui/styles.css')))).size>0);
 assert.ok((await fs.stat(path.join(dist,'index.d.ts'))).size>0);
 assert.ok((await fs.stat(path.join(dist,'Pretendard-LICENSE.txt'))).size>0);
 const data=JSON.parse(await fs.readFile(fileURLToPath(import.meta.resolve('@iak-design/ui/tokens.json')),'utf8'));
 assert.ok(data.tokens);
});
