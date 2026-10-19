import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import {libraryFixture} from './library-fixture.mjs';
import {CHUNK_BYTES} from '../src/platform/storage.mjs';

test('a slow chunk does not hold the storage lock or block other files, downloads, or cancellation',async t=>{
 const f=await libraryFixture(t),other=await f.start();
 const [slow,fast]= (await f.ok(await f.req('prepare',{drive:'boot',files:[{name:'slow.bin',size:4},{name:'fast.bin',size:4}]}))).uploads;
 let response;
 const finished=new Promise((resolve,reject)=>{
  response=http.request(f.base+`/api/library/chunk?id=${slow.id}&offset=0`,{method:'PUT',headers:{cookie:'csquest_session='+f.token,'X-CSQuest-Request':'1','Content-Length':4}},r=>{r.resume();r.on('end',()=>resolve(r.statusCode));});response.on('error',reject);
 });
 response.write('a');
 try{
  await new Promise(r=>setTimeout(r,100));
  const options={at:other,signal:AbortSignal.timeout(2500)};
  assert.equal((await f.req('storage',null,options)).status,200);
  await f.ok(await f.req(`chunk?id=${fast.id}&offset=0`,Buffer.from('fast'),{...options,method:'PUT'}));
  await f.ok(await f.req('complete',{id:fast.id},options));
  assert.equal(await (await f.req('file?id='+fast.id,null,options)).text(),'fast');
  await f.ok(await f.req('cancel',{id:slow.id},options));
 }finally{response.end('bcd');}
 assert.equal(await finished,404,'A canceled upload cannot commit a body received after cancellation');
 assert.equal((await f.ok(await f.req('uploads'))).uploads.length,0);
});

test('8 MiB chunks and parallel files retain bounded resume checks and reject oversized bodies',async t=>{
 const f=await libraryFixture(t,{quota:32*1024**2});
 const batch=await f.ok(await f.req('prepare',{drive:'boot',files:[{name:'one.bin',size:CHUNK_BYTES+5},{name:'two.bin',size:CHUNK_BYTES+5}]}));
 const data=Buffer.alloc(CHUNK_BYTES,73);
 assert.equal(CHUNK_BYTES,8*1024**2);
 await Promise.all(batch.uploads.map(async u=>{
  await f.ok(await f.req(`chunk?id=${u.id}&offset=0`,data,{method:'PUT'}));
  const resume=await f.ok(await f.req('upload?id='+u.id));assert.equal(resume.uploaded,CHUNK_BYTES);assert.deepEqual(resume.resumeChecks.map(c=>c.length),[2*1024**2,2*1024**2]);
  assert.equal((await f.req(`chunk?id=${u.id}&offset=${CHUNK_BYTES}`,Buffer.alloc(6),{method:'PUT'})).status,413);
  await f.ok(await f.req(`chunk?id=${u.id}&offset=${CHUNK_BYTES}`,Buffer.from('final'),{method:'PUT'}));
  await f.ok(await f.req('complete',{id:u.id}));
  const tail=await f.req('file?id='+u.id,null,{headers:{Range:`bytes=${CHUNK_BYTES}-`}});assert.equal(tail.status,206);assert.equal(await tail.text(),'final');
 }));
});
