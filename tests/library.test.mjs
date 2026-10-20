import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {randomUUID} from 'node:crypto';
import {createServer} from '../src/platform/server.mjs';
import {capacity,GiB,inspectDrive,libraryDrives} from '../src/platform/storage.mjs';
import {testStore} from './database-helper.mjs';

test('library caps allocations at 35 / 125 GiB, excludes system consumption once, and protects pending transfers',()=>{
 assert.deepEqual(libraryDrives().filter(d=>d.id!=='object').map(d=>d.quota),[35*GiB,125*GiB]);
 const boot={id:'boot',name:'Boot',quota:35*GiB,reserve:5*GiB},block={id:'block',name:'Block',quota:125*GiB,reserve:15*GiB};
 assert.equal(capacity(boot,{total:50*GiB,free:43*GiB},[]).available,35*GiB);
 assert.equal(capacity(block,{total:150*GiB,free:142*GiB},[]).available,125*GiB);
 const entries=[{kind:'file',size:10*GiB,uploaded:4*GiB}];
 assert.equal(capacity(boot,{total:50*GiB,free:20*GiB},entries).available,9*GiB);
 assert.equal(capacity(boot,{total:50*GiB,free:4*GiB},entries).available,0);
});

test('library uploads, filesystem checks, authorization, reservations and range downloads work across server instances',async()=>{
 const fixture=await testStore(),directory=await fs.mkdtemp(path.join(os.tmpdir(),'csquest-library-'));
 const ownerId=randomUUID(),drives=[{id:'boot',name:'Boot storage',root:path.join(directory,'boot'),quota:128,reserve:0},{id:'block',name:'Block storage',root:path.join(directory,'block'),quota:256,reserve:0}];
 let online=true,free=10000;
 const inspect=async drive=>{if(!online&&drive.id==='block')throw Error('unmounted');await inspectDrive(drive);return {total:10000,free,device:drive.id};};
 const servers=[createServer({store:fixture.store,libraryOptions:{ownerId,drives,inspect}}),createServer({store:fixture.store,libraryOptions:{ownerId,drives,inspect}})];
 const bases=await Promise.all(servers.map(async s=>{await new Promise(r=>s.listen(0,'127.0.0.1',r));return `http://127.0.0.1:${s.address().port}`;}));
 let cookie;
 const req=(route,body,{method,headers={},base=bases[0]}={})=>fetch(base+'/api/library/'+route,{method:method||(body?'POST':'GET'),headers:{cookie:cookie||'','X-CSQuest-Request':'1',...(body&&method!=='PUT'?{'Content-Type':'application/json'}:{}),...headers},body:body?(method==='PUT'?body:JSON.stringify(body)):undefined});
 const json=async response=>{assert.equal(response.status,200,await response.clone().text());return response.json();};
 try{
  assert.equal((await req('storage')).status,401);
  const register=async username=>fetch(bases[0]+'/api/account/register',{method:'POST',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1'},body:JSON.stringify({username,displayName:'Library owner',avatar:'chip',password:'a memorable library password'})});
  const user=await register('library_owner');cookie=user.headers.get('set-cookie').split(';')[0];const account=await user.json();
  // Tests use a configured immutable ID; no first-user or username privilege fallback.
  // Seed a configured owner with the same test password and attach this session.
  await fixture.store.pool.query("INSERT INTO csquest_users(id,username,display_name,avatar,password,recovery_hash,created_at,revision,updated_at) SELECT $1,'configured_owner',display_name,avatar,password,recovery_hash,created_at,revision,updated_at FROM csquest_users WHERE id=$2 ON CONFLICT DO NOTHING",[ownerId,account.user.id]);
  await fixture.store.pool.query('UPDATE csquest_sessions SET user_id=$1 WHERE user_id=$2',[ownerId,account.user.id]);
  const storage=await json(await req('storage'));assert.deepEqual(storage.drives.map(v=>v.available),[128,256]);assert.ok(storage.checkedAt);
  assert.equal((await req('upload',{drive:'boot',name:'big.mp4',size:129})).status,507);
  assert.equal((await fixture.store.pool.query('SELECT * FROM csquest_library_entries')).rowCount,0);
  assert.deepEqual(await fs.readdir(drives[0].root),[]);
  assert.equal((await req('prepare',{drive:'boot',files:[{name:'a.mp4',size:80},{name:'b.mp4',size:80}]})).status,507);
  assert.equal((await fixture.store.pool.query('SELECT * FROM csquest_library_entries')).rowCount,0);
  assert.equal((await req('prepare',{drive:'boot',files:[{name:'same.mp4',size:1},{name:'same.mp4',size:1}]})).status,409);
  assert.equal((await fixture.store.pool.query('SELECT * FROM csquest_library_entries')).rowCount,0);
  assert.equal((await req('folder',{drive:'boot',name:'../escape'})).status,400);
  assert.equal((await req('folder',{drive:'boot',name:'bad'},{headers:{Origin:'https://other.example'}})).status,403);
  const folder=await json(await req('folder',{drive:'boot',name:'Films'}));
  const otherFolder=await json(await req('folder',{drive:'block',name:'Other'}));
  assert.equal((await req('upload',{drive:'boot',parent:otherFolder.id,name:'bad',size:1})).status,400);
  const contenders=await Promise.all(bases.map((base,i)=>req('upload',{drive:'boot',parent:folder.id,name:'film'+i+'.mkv',size:80},{base})));
  assert.deepEqual(contenders.map(r=>r.status).sort(),[200,507]);
  const upload=await contenders.find(r=>r.status===200).json();assert.equal(upload.uploaded,0);
  const protectedAccount=await fetch(bases[0]+'/api/account/delete',{method:'POST',headers:{cookie,'Content-Type':'application/json','X-CSQuest-Request':'1'},body:JSON.stringify({username:'configured_owner',password:'a memorable library password'})});assert.equal(protectedAccount.status,409);assert.match((await protectedAccount.json()).error,/Library/);assert.ok((await fixture.store.pool.query('SELECT id FROM csquest_users WHERE id=$1',[ownerId])).rowCount);
  assert.equal((await req('file?id='+upload.id)).status,404);
  const data=Buffer.from(Array.from({length:80},(_,i)=>i));
  await json(await req(`chunk?id=${upload.id}&offset=0`,data.subarray(0,40),{method:'PUT'}));
  assert.equal((await req(`chunk?id=${upload.id}&offset=0`,data.subarray(0,5),{method:'PUT'})).status,409);
  const resumed=await json(await req('upload?id='+upload.id,undefined,{base:bases[1]}));assert.equal(resumed.uploaded,40);
  assert.equal((await req('complete',{id:upload.id})).status,409);
  // Simulate an interrupted transaction that wrote beyond its committed offset.
  await fs.appendFile(path.join(drives[0].root,upload.id),'uncommitted');
  await json(await req(`chunk?id=${upload.id}&offset=40`,data.subarray(40),{method:'PUT',base:bases[1]}));
  await json(await req('complete',{id:upload.id}));
  await json(await req('complete',{id:upload.id}));
  assert.deepEqual(await fs.readFile(path.join(drives[0].root,upload.id)),data);
  const listed=await json(await req('list?drive=boot&parent='+folder.id));assert.equal(listed.entries.length,1);assert.equal(listed.breadcrumbs[0].name,'Films');
  const nested=await json(await req('folder',{drive:'boot',parent:folder.id,name:'Course'}));
  const week=await json(await req('folder',{drive:'boot',parent:nested.id,name:'Week 1'}));
  await json(await req('move',{id:upload.id,parent:week.id}));
  const tree=await json(await req('list?drive=boot&parent='+week.id));assert.deepEqual(tree.breadcrumbs.map(c=>c.name),['Films','Course','Week 1']);assert.equal(tree.entries[0].id,upload.id);
  assert.equal((await req('move',{id:nested.id,parent:week.id})).status,400);
  assert.equal((await req('move',{id:upload.id,parent:otherFolder.id})).status,400);
  const folders=await json(await req('folders?drive=boot'));assert.equal(folders.folders.length,3);
  await json(await req('move',{id:upload.id,parent:folder.id}));await json(await req('delete',{id:week.id}));await json(await req('delete',{id:nested.id}));
  const partial=await req('file?id='+upload.id,undefined,{headers:{Range:'bytes=4-19'}});assert.equal(partial.status,206);assert.equal(partial.headers.get('content-type'),'video/x-matroska');assert.equal(partial.headers.get('content-range'),'bytes 4-19/80');assert.deepEqual(Buffer.from(await partial.arrayBuffer()),data.subarray(4,20));
  assert.equal((await req('file?id='+upload.id,undefined,{headers:{Range:'bytes=80-'}})).status,416);
  const head=await req('file?id='+upload.id,undefined,{method:'HEAD'});assert.equal(head.headers.get('content-length'),'80');assert.equal((await head.arrayBuffer()).byteLength,0);
  const download=await req('file?id='+upload.id+'&download=1');assert.match(download.headers.get('content-disposition'),/^attachment/);assert.deepEqual(Buffer.from(await download.arrayBuffer()),data);
  assert.equal((await req('delete',{id:folder.id})).status,409);
  await json(await req('rename',{id:upload.id,name:'renamed.mp4'}));
  const stranger=await register('library_stranger'),strangerCookie=stranger.headers.get('set-cookie').split(';')[0];
  for(const route of ['storage','list?drive=boot','folders?drive=boot','file?id='+upload.id,'upload?id='+upload.id])assert.equal((await req(route,undefined,{headers:{cookie:strangerCookie}})).status,403);
  assert.equal((await req('delete',{id:upload.id},{headers:{cookie:strangerCookie}})).status,403);
  online=false;const unavailable=await json(await req('storage'));assert.equal(unavailable.drives[1].online,false);assert.equal((await req('folder',{drive:'block',name:'Offline'})).status,503);online=true;
  const cancel=await json(await req('upload',{drive:'block',name:'cancel.mp3',size:20}));
  await json(await req(`chunk?id=${cancel.id}&offset=0`,Buffer.from('test'),{method:'PUT'}));await json(await req('cancel',{id:cancel.id}));
  await assert.rejects(fs.access(path.join(drives[1].root,cancel.id)));
  const expired=await json(await req('upload',{drive:'block',name:'expired',size:20}));
  await fixture.store.pool.query("UPDATE csquest_library_entries SET expires_at=now()-interval '1 minute' WHERE id=$1",[expired.id]);await json(await req('storage'));assert.equal((await req('upload?id='+expired.id)).status,404);
  free=1000;const pressured=await json(await req('storage'));assert.equal(pressured.drives[0].available,0);assert.equal((await req('upload',{drive:'boot',name:'no-room',size:1})).status,507);free=10000;
  const empty=await json(await req('upload',{drive:'block',name:'empty.txt',size:0}));await json(await req('complete',{id:empty.id}));assert.equal((await req('file?id='+empty.id)).status,200);
  await json(await req('delete',{id:upload.id}));await json(await req('delete',{id:folder.id}));
  const final=await json(await req('storage'));assert.equal(final.drives[0].available,128);
 }finally{await Promise.all(servers.map(s=>new Promise(r=>s.close(r))));await fixture.dispose();await fs.rm(directory,{recursive:true,force:true});}
});
