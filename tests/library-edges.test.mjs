import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import {fork} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {libraryFixture} from './library-fixture.mjs';

test('shortened uploads cannot be extended with silent zero bytes or published as complete',async t=>{
 const f=await libraryFixture(t),a=await f.ok(await f.req('upload',{drive:'boot',name:'short-partial.bin',size:8}));
 await f.ok(await f.req(`chunk?id=${a.id}&offset=0`,Buffer.from('abcd'),{method:'PUT'}));
 await fs.truncate(path.join(f.drives[0].root,a.id),2);
 assert.equal((await f.req(`chunk?id=${a.id}&offset=4`,Buffer.from('efgh'),{method:'PUT'})).status,409);
 const b=await f.ok(await f.req('upload',{drive:'boot',name:'short-complete.bin',size:4}));
 await f.ok(await f.req(`chunk?id=${b.id}&offset=0`,Buffer.from('abcd'),{method:'PUT'}));await fs.truncate(path.join(f.drives[0].root,b.id),2);
 assert.equal((await f.req('complete',{id:b.id})).status,409);
 assert.equal((await f.req('file?id='+b.id)).status,404);
});

test('shared filesystems account for reservations on both drives before accepting a second upload',async t=>{
 const f=await libraryFixture(t,{shared:true,quota:128,total:10000,free:1050});
 await f.ok(await f.req('upload',{drive:'boot',name:'first.bin',size:40}));
 const status=await f.ok(await f.req('storage'));assert.equal(status.drives[1].available,10);
 assert.equal((await f.req('upload',{drive:'block',name:'second.bin',size:20})).status,507);
});

test('malformed batches are client errors and do not create partial reservations',async t=>{
 const f=await libraryFixture(t);
 for(const files of [[null],[false],[{}],[{name:'bad',size:-1}],[{name:'bad',size:1.5}],[]])assert.equal((await f.req('prepare',{drive:'boot',files})).status,400);
 assert.equal((await f.db.store.pool.query('SELECT * FROM csquest_library_entries')).rowCount,0);
});

test('pending transfers can be rediscovered without browser-local state and canceled idempotently',async t=>{
 const f=await libraryFixture(t),u=await f.ok(await f.req('upload',{drive:'boot',name:'recover.bin',size:8}));
 await f.ok(await f.req(`chunk?id=${u.id}&offset=0`,Buffer.from('abcd'),{method:'PUT'}));
 const pending=await f.ok(await f.req('uploads'));assert.equal(pending.uploads.length,1);assert.equal(pending.uploads[0].uploaded,4);
 await f.ok(await f.req('cancel',{id:u.id}));await f.ok(await f.req('cancel',{id:u.id}));
 assert.deepEqual((await f.ok(await f.req('uploads'))).uploads,[]);
});

test('simultaneous chunk retries commit one copy and aborted requests do not advance offsets',async t=>{
 const f=await libraryFixture(t),at=await f.start(),u=await f.ok(await f.req('upload',{drive:'boot',name:'races.bin',size:1024}));
 const contenders=await Promise.all([f.base,at].map(base=>f.req(`chunk?id=${u.id}&offset=0`,Buffer.from('abcd'),{method:'PUT',at:base})));
 assert.deepEqual(contenders.map(r=>r.status).sort(),[200,409]);
 await new Promise(resolve=>{
  const request=http.request(f.base+`/api/library/chunk?id=${u.id}&offset=4`,{method:'PUT',headers:{cookie:'csquest_session='+f.token,'X-CSQuest-Request':'1','Content-Length':1020}});
  request.on('error',resolve);request.on('response',r=>{r.resume();r.on('end',resolve);});request.write(Buffer.from('not a full chunk'));setTimeout(()=>request.destroy(Error('simulated network disconnect')),60);
 });
 assert.equal((await f.ok(await f.req('upload?id='+u.id))).uploaded,4);
 await f.ok(await f.req(`chunk?id=${u.id}&offset=4`,Buffer.alloc(1020,7),{method:'PUT'}));await f.ok(await f.req('complete',{id:u.id}));
 assert.deepEqual(await fs.readFile(path.join(f.drives[0].root,u.id)),Buffer.concat([Buffer.from('abcd'),Buffer.alloc(1020,7)]));
});

test('space loss after reservation pauses a chunk without data loss and space recovery permits resuming',async t=>{
 const f=await libraryFixture(t,{quota:128,total:10000,free:10000}),u=await f.ok(await f.req('upload',{drive:'boot',name:'pressure.bin',size:8}));
 f.disk.free=1002;assert.equal((await f.req(`chunk?id=${u.id}&offset=0`,Buffer.from('abcdefgh'),{method:'PUT'})).status,507);
 assert.equal((await f.ok(await f.req('upload?id='+u.id))).uploaded,0);
 f.disk.free=10000;await f.ok(await f.req(`chunk?id=${u.id}&offset=0`,Buffer.from('abcdefgh'),{method:'PUT'}));await f.ok(await f.req('complete',{id:u.id}));
 assert.equal((await f.req('file?id='+u.id)).status,200);
});

test('directory races cannot create cycles and failed duplicate moves keep the original tree intact',async t=>{
 const f=await libraryFixture(t),a=await f.ok(await f.req('folder',{drive:'boot',name:'A'})),b=await f.ok(await f.req('folder',{drive:'boot',name:'B'}));
 const races=await Promise.all([f.req('move',{id:a.id,parent:b.id}),f.req('move',{id:b.id,parent:a.id})]);assert.deepEqual(races.map(r=>r.status).sort(),[200,400]);
 const root=await f.ok(await f.req('folder',{drive:'boot',name:'C'})),nested=await f.ok(await f.req('folder',{drive:'boot',parent:root.id,name:'Same'}));
 await f.ok(await f.req('folder',{drive:'boot',name:'Same'}));assert.equal((await f.req('move',{id:nested.id,parent:null})).status,409);
 assert.equal((await f.ok(await f.req('list?drive=boot&parent='+root.id))).entries[0].id,nested.id);
});

test('Unicode names, hostile markup and range edge cases preserve bytes and never expose uploaded HTML inline',async t=>{
 const f=await libraryFixture(t),u=await f.ok(await f.req('upload',{drive:'boot',name:'讲义 💾 "<script>.html',size:4}));
 await f.ok(await f.req(`chunk?id=${u.id}&offset=0`,Buffer.from('data'),{method:'PUT'}));await f.ok(await f.req('complete',{id:u.id}));
 const response=await f.req('file?id='+u.id);assert.equal(response.headers.get('content-type'),'application/octet-stream');assert.match(response.headers.get('content-disposition'),/^attachment/);assert.equal(await response.text(),'data');
 for(const range of ['bytes=4-','bytes=3-2','bytes=0-1,2-3','bytes=-0','not a range'])assert.equal((await f.req('file?id='+u.id,null,{headers:{Range:range}})).status,416);
 const suffix=await f.req('file?id='+u.id,null,{headers:{Range:'bytes=-2'}});assert.equal(suffix.status,206);assert.equal(await suffix.text(),'ta');
 const mismatch=await f.req('file?id='+u.id,null,{headers:{Range:'bytes=0-1','If-Range':'"stale"'}});assert.equal(mismatch.status,200);assert.equal(await mismatch.text(),'data');
 for(const name of ['..','.',String.fromCharCode(0),'a/b','a\\b',' '.repeat(3)])assert.equal((await f.req('folder',{drive:'boot',name})).status,400);
});

test('hard-linked disk objects cannot be streamed and deleting a link preserves the outside file',async t=>{
 const f=await libraryFixture(t),u=await f.ok(await f.req('upload',{drive:'boot',name:'linked.bin',size:4}));
 await f.ok(await f.req(`chunk?id=${u.id}&offset=0`,Buffer.from('data'),{method:'PUT'}));await f.ok(await f.req('complete',{id:u.id}));
 const outside=path.join(f.directory,'outside.bin');await fs.link(path.join(f.drives[0].root,u.id),outside);
 assert.equal((await f.req('file?id='+u.id)).status,403);await f.ok(await f.req('delete',{id:u.id}));assert.equal(await fs.readFile(outside,'utf8'),'data');
});

test('an actual server process can be killed and restarted without losing upload offsets or file bytes',async t=>{
 const f=await libraryFixture(t),children=[];
 t.after(()=>children.forEach(c=>{if(c.exitCode===null)c.kill();}));
 const schema=f.db.store.pool.options.options.match(/search_path=(\w+)/)[1];
 async function worker(){return new Promise((resolve,reject)=>{
  const child=fork(fileURLToPath(new URL('./library-server-worker.mjs',import.meta.url)),[],{execArgv:[],silent:true,env:{...process.env,CSQUEST_TEST_SCHEMA:schema,CSQUEST_TEST_OWNER:f.ownerId,CSQUEST_TEST_DRIVES:JSON.stringify(f.drives)}});children.push(child);let diagnostic='';child.stderr.on('data',data=>{diagnostic+=data;});
  const timeout=setTimeout(()=>{child.kill();reject(Error('Server worker startup timed out: '+diagnostic));},15000);
  child.once('message',message=>{clearTimeout(timeout);resolve({child,base:`http://127.0.0.1:${message.port}`});});child.once('error',reject);child.once('exit',code=>{clearTimeout(timeout);if(code)reject(Error('Server worker exited: '+diagnostic));});
 });}
 const first=await worker(),data=Buffer.alloc(4*1024**2+37,137);data.write('Restart-safe file contents');
 const upload=await f.ok(await f.req('upload',{drive:'boot',name:'restart.bin',size:data.length},{at:first.base}));
 await f.ok(await f.req(`chunk?id=${upload.id}&offset=0`,data.subarray(0,2*1024**2),{method:'PUT',at:first.base}));
 await new Promise(resolve=>{first.child.once('exit',resolve);first.child.kill();});
 const second=await worker(),resumed=await f.ok(await f.req('upload?id='+upload.id,null,{at:second.base}));assert.equal(resumed.uploaded,2*1024**2);
 assert.equal(resumed.resumeChecks[0].sha256,createHash('sha256').update(data.subarray(0,2*1024**2)).digest('hex'));
 for(let offset=resumed.uploaded;offset<data.length;offset+=2*1024**2)await f.ok(await f.req(`chunk?id=${upload.id}&offset=${offset}`,data.subarray(offset,offset+2*1024**2),{method:'PUT',at:second.base}));
 await f.ok(await f.req('complete',{id:upload.id},{at:second.base}));const download=await f.req('file?id='+upload.id,null,{at:second.base});assert.equal(download.status,200);assert.deepEqual(Buffer.from(await download.arrayBuffer()),data);
 await new Promise(resolve=>{second.child.once('exit',resolve);second.child.kill();});
});

test('missing inode capacity and missing ready files report actionable errors',async t=>{
 const f=await libraryFixture(t);f.disk.totalInodes=10;f.disk.inodesFree=0;
 assert.equal((await f.req('upload',{drive:'boot',name:'empty.bin',size:0})).status,507);
 assert.equal((await f.ok(await f.req('storage'))).drives[0].available,0);
 f.disk.inodesFree=10;
 const u=await f.ok(await f.req('upload',{drive:'boot',name:'missing.bin',size:0}));await f.ok(await f.req('complete',{id:u.id}));await fs.unlink(path.join(f.drives[0].root,u.id));
 const response=await f.req('file?id='+u.id);assert.equal(response.status,409);assert.match((await response.json()).error,/missing/i);
});

test('selected file metadata includes its persistent folder, exact size and dates without exposing host paths',async t=>{
 const f=await libraryFixture(t),folder=await f.ok(await f.req('folder',{drive:'boot',name:'Lecture notes'}));
 const u=await f.ok(await f.req('upload',{drive:'boot',parent:folder.id,name:'file.txt',size:1500}));
 assert.equal((await f.req('details?id='+u.id)).status,404);
 await f.ok(await f.req(`chunk?id=${u.id}&offset=0`,Buffer.alloc(1500,65),{method:'PUT'}));await f.ok(await f.req('complete',{id:u.id}));
 const metadata=await f.ok(await f.req('details?id='+u.id));assert.equal(metadata.size,1500);assert.deepEqual(metadata.location,['Lecture notes']);assert.equal(metadata.extension,'.txt');assert.equal(metadata.driveName,'boot storage');
 for(const key of ['createdAt','updatedAt','fileModifiedAt'])assert.ok(Number.isFinite(new Date(metadata[key]).getTime()),key);
 assert.equal(JSON.stringify(metadata).includes(f.directory),false);
 const directory=await f.ok(await f.req('details?id='+folder.id));assert.equal(directory.fileCount,1);assert.equal(directory.folderCount,0);
 const unsigned=await fetch(f.base+'/api/library/details?id='+u.id);assert.equal(unsigned.status,401);
 await f.ok(await f.req('rename',{id:u.id,name:'renamed.txt'}));assert.equal((await f.ok(await f.req('details?id='+u.id))).name,'renamed.txt');
});
