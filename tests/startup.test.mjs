import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from '../src/platform/server.mjs';

test('guest startup modules work without database access and revalidate compressed public assets',async()=>{
 const store={courses(){throw new Error('Public modules must not read accounts or courses');}};
 const server=createServer({store});await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const base='http://127.0.0.1:'+server.address().port;
 try{
  const response=await fetch(base+'/shared/worked-examples.js',{headers:{'Accept-Encoding':'gzip'}});
  assert.equal(response.status,200);assert.equal(response.headers.get('content-encoding'),'gzip');
  const source=await response.text();assert.match(source,/export/);
  assert.ok(Number(response.headers.get('content-length'))<Buffer.byteLength(source)*.5);
  assert.equal(response.headers.get('cache-control'),'public, no-cache');
  const etag=response.headers.get('etag');assert.ok(etag);
  const cached=await fetch(base+'/shared/worked-examples.js',{headers:{'If-None-Match':etag}});
  assert.equal(cached.status,304);assert.equal(await cached.text(),'');
  const raw=await fetch(base+'/shared/worked-examples.js',{headers:{'Accept-Encoding':'gzip;q=0'}});
  assert.equal(raw.headers.get('content-encoding'),null);assert.equal(await raw.text(),source);
  const head=await fetch(base+'/shared/worked-examples.js',{method:'HEAD'});assert.equal(head.status,200);assert.equal(await head.text(),'');
  const index=await (await fetch(base)).text();assert.match(index,/src="\/bootstrap.js"/);
  assert.equal((await fetch(base+'/shared/not-allowed.js')).status,404);
  assert.equal((await fetch(base+'/shared/compiler-models.js')).status,200,'Compiler learning dependency stays public before login');
  for(const asset of ['/compiler-art.js','/compiler-labs.js','/compiler.css'])assert.equal((await fetch(base+asset)).status,200);
  assert.equal((await fetch(base+'/shared/activity.js')).status,200,'Calendar startup dependency stays public');
  assert.equal((await fetch(base+'/shared/lesson-journey.js')).status,200,'Learning startup dependency stays public');
  assert.equal((await fetch(base+'/shared/toc-models.js')).status,200,'TOC teaching models must load before authentication');
 }finally{await new Promise(r=>server.close(r));}
});
