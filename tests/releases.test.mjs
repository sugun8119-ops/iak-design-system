import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
const base=new URL('../releases/',import.meta.url);
test('retained release files match pinned checksums and remain published',async()=>{
 const manifest=JSON.parse(await fs.readFile(new URL('checksums.json',base),'utf8'));
 for(const [file,hash] of Object.entries(manifest)){
  const bytes=await fs.readFile(new URL(file,base));
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),hash);
  assert.deepEqual(await fs.readFile(new URL('../src/developer/releases/'+file,import.meta.url)),bytes);
 }
});
