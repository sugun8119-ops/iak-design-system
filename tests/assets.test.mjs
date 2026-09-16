import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
const base=new URL('../src/library/',import.meta.url);
test('source assets remain intact and every registered preview/font is available',async()=>{
 const c=JSON.parse(await fs.readFile(new URL('catalog.json',base)));
 assert.equal(c.cards.length,30);
 assert.equal(Object.keys(c.tokens).length,162);
 for(const f of c.files){const b=await fs.readFile(new URL('claude/'+f.path,base));assert.equal(crypto.createHash('sha256').update(b).digest('hex'),f.sha256,f.path)}
 for(const p of [...c.cards.map(x=>x.path),...c.fonts.flatMap(x=>x.files)]) assert.ok(c.files.some(x=>x.path===p),p);
 assert.equal(c.tokens['--container-pad'],'24px');
 assert.equal(c.tokens['--grid-cols'],'var(--grid-cols-desktop)');
 assert.equal(c.tokens['--motion-fast'],'120ms');
 assert.ok(c.contextOverrides.some(x=>x.condition.includes('640px')&&x.tokens['--container-pad']==='16px'));
 assert.ok(c.contextOverrides.some(x=>x.condition.includes('prefers-reduced-motion')&&x.tokens['--motion-fast']==='1ms'));
 assert.ok(!c.files.some(x=>x.path.startsWith('uploads/')));
});
