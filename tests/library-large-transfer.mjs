// Explicit integration soak: writes and downloads 9 GB of temporary data.
// Kept outside npm test to avoid making ordinary CI require 12 GB of free disk.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {performance} from 'node:perf_hooks';
import {libraryFixture} from './library-fixture.mjs';
let cleanup;
const f=await libraryFixture({after:fn=>cleanup=fn},{quota:20e9,total:200e9,free:100e9});
const report={files:[],startedAt:new Date().toISOString()};let peakRss=0;
const sample=setInterval(()=>{peakRss=Math.max(peakRss,process.memoryUsage().rss);},200);
try{
 const disk=await fs.statfs(f.directory);assert.ok(Number(disk.bavail)*Number(disk.bsize)>12e9,'Large transfer soak requires at least 12 GB of free temporary disk space');
 const alternate=await f.start(),started=performance.now();
 await Promise.all([{drive:'boot',size:5e9,byte:53},{drive:'block',size:4e9,byte:74}].map(async spec=>{
  const u=await f.ok(await f.req('upload',{drive:spec.drive,name:`large-${spec.size}.bin`,size:spec.size})),data=Buffer.alloc(u.chunkBytes,spec.byte),hash=createHash('sha256');
  let switched=false,nextNotice=1e9;
  for(let offset=0;offset<spec.size;offset+=u.chunkBytes){
   const chunk=data.subarray(0,Math.min(u.chunkBytes,spec.size-offset));hash.update(chunk);
   if(!switched&&offset>2**31){
    const resumed=await f.ok(await f.req('upload?id='+u.id,null,{at:alternate}));assert.equal(resumed.uploaded,offset);assert.ok(resumed.resumeChecks.every(c=>c.length<=2*1024**2));switched=true;
   }
   const result=await f.ok(await f.req(`chunk?id=${u.id}&offset=${offset}`,chunk,{method:'PUT',at:switched?alternate:f.base}));assert.equal(result.uploaded,offset+chunk.length);
   if(result.uploaded>=nextNotice){console.log(`${spec.drive}: ${(result.uploaded/1e9).toFixed(2)} GB uploaded`);nextNotice+=1e9;}
  }
  await f.ok(await f.req('complete',{id:u.id}));
  const expected=hash.digest('hex');report.files.push({...spec,id:u.id,sha256:expected,uploadSeconds:(performance.now()-started)/1000,resumedAbove2GB:switched});
 }));
 console.log('Both large uploads complete; verifying concurrent streaming downloads.');
 await Promise.all(report.files.map(async file=>{
  const start=performance.now(),response=await f.req('file?id='+file.id+'&download=1');assert.equal(response.status,200);assert.equal(Number(response.headers.get('content-length')),file.size);
  const hash=createHash('sha256');let received=0;
  for await(const chunk of response.body){received+=chunk.length;hash.update(chunk);}
  assert.equal(received,file.size);assert.equal(hash.digest('hex'),file.sha256);file.downloadSeconds=(performance.now()-start)/1000;file.bytesVerified=received;
  const offset=file.size-32,range=await f.req('file?id='+file.id,null,{headers:{Range:`bytes=${offset}-`}});assert.equal(range.status,206);assert.deepEqual(Buffer.from(await range.arrayBuffer()),Buffer.alloc(32,file.byte));
 }));
 report.peakRssBytes=peakRss;report.elapsedSeconds=(performance.now()-started)/1000;
 assert.ok(peakRss<768*1024**2,'Memory should stay bounded independently of file sizes');
 await fs.mkdir('qa-results/library-large-transfer',{recursive:true});await fs.writeFile('qa-results/library-large-transfer/report.json',JSON.stringify(report,null,2));
 console.log(JSON.stringify(report,null,2));
}finally{clearInterval(sample);await cleanup();}
