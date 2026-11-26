import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash,randomUUID} from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import {libraryFixture} from './library-fixture.mjs';
import {fakeObjectStore} from './fake-object-store.mjs';
const sha=data=>createHash('sha256').update(data).digest('hex');
const manifest=chunks=>sha(chunks.map(c=>`${c.offset}:${c.length}:${c.sha256}\n`).join(''));
async function upload(f,{name='movie.mp4',drive='boot',parent,data=Buffer.from('data')}={}){
 const file=await f.ok(await f.req('upload',{drive,parent,name,size:data.length}));let offset=0;
 while(offset<data.length){const chunk=data.subarray(offset,offset+8*1024**2);await f.ok(await f.req(`chunk?id=${file.id}&offset=${offset}`,chunk,{method:'PUT',headers:{'X-CSQuest-Chunk-SHA256':sha(chunk)}}));offset+=chunk.length;}
 const state=await f.ok(await f.req('upload?id='+file.id));await f.ok(await f.req('complete',{id:file.id,checksum:manifest(state.chunks)}));return file;
}
async function learner(f,name){const response=await fetch(f.base+'/api/account/register',{method:'POST',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1'},body:JSON.stringify({username:name,displayName:name,password:'a long library features passphrase'})});const cookie=response.headers.get('set-cookie').split(';')[0],user=(await response.json()).user;return {user,req:(route,body)=>fetch(f.base+'/api/library/'+route,{method:body?'POST':'GET',headers:{cookie,'Content-Type':'application/json','X-CSQuest-Request':'1'},body:body?JSON.stringify(body):undefined})};}
test('verified uploads reject altered chunks and manifests, resume durably, and verify empty and Object files',async t=>{
 const f=await libraryFixture(t,{quota:100e6,objectStore:fakeObjectStore()}),file=await f.ok(await f.req('upload',{drive:'boot',name:'checked.bin',size:4}));
 assert.equal((await f.req(`chunk?id=${file.id}&offset=0`,Buffer.from('bad!'),{method:'PUT',headers:{'X-CSQuest-Chunk-SHA256':sha('data')}})).status,422);
 assert.equal((await f.ok(await f.req('upload?id='+file.id))).uploaded,0);
 await f.ok(await f.req(`chunk?id=${file.id}&offset=0`,Buffer.from('data'),{method:'PUT',headers:{'X-CSQuest-Chunk-SHA256':sha('data')}}));
 const restarted=await f.start(),state=await f.ok(await f.req('upload?id='+file.id,null,{at:restarted}));assert.deepEqual(state.chunks,[{offset:0,length:4,sha256:sha('data')}]);
 assert.equal((await f.req('complete',{id:file.id,checksum:'0'.repeat(64)})).status,422);assert.equal((await f.req('file?id='+file.id)).status,404);
 const ready=await f.ok(await f.req('complete',{id:file.id,checksum:manifest(state.chunks)}));assert.equal(ready.verified,true);
 assert.equal((await f.ok(await f.req('upload?id='+file.id))).verified,true);
 await upload(f,{name:'empty.bin',data:Buffer.alloc(0)});const object=await upload(f,{drive:'object',name:'object.bin',data:Buffer.alloc(8*1024**2+19,71)});assert.equal((await f.ok(await f.req('upload?id='+object.id))).chunks.length,2);
 assert.equal((await f.req('file?id='+object.id)).status,200);
 // A deployment must not strand transfers whose prefix predates checksum tracking.
 const legacy=await f.ok(await f.req('upload',{drive:'boot',name:'legacy.bin',size:4}));await fs.writeFile(path.join(f.drives[0].root,legacy.id),'da');await f.db.store.pool.query('UPDATE csquest_library_entries SET uploaded=2 WHERE id=$1',[legacy.id]);await f.ok(await f.req(`chunk?id=${legacy.id}&offset=2`,Buffer.from('ta'),{method:'PUT',headers:{'X-CSQuest-Chunk-SHA256':sha('ta')}}));const legacyState=await f.ok(await f.req('upload?id='+legacy.id));const old=await f.ok(await f.req('complete',{id:legacy.id,checksum:manifest(legacyState.chunks)}));assert.equal(old.verified,false);assert.equal(await(await f.req('file?id='+legacy.id)).text(),'data');
});

test('Continue, PDF progress and personal playlists follow current permissions and survive app restarts',async t=>{
 const f=await libraryFixture(t),reader=await learner(f,'experience_reader'),other=await learner(f,'experience_other');
 const folder=await f.ok(await f.req('folder',{drive:'boot',name:'Allowed'})),visible=await upload(f,{parent:folder.id}),hidden=await upload(f,{drive:'block',name:'private.mp4'}),pdf=await upload(f,{parent:folder.id,name:'notes.pdf'});
 const grant=await fetch(f.base+'/api/admin/library-access',{method:'POST',headers:{cookie:'csquest_session='+f.token,'Content-Type':'application/json','X-CSQuest-Request':'1'},body:JSON.stringify({userIds:[reader.user.id],enabled:true,level:'limited',scopes:[{drive:'boot',entryId:folder.id,canWrite:false}]})});assert.equal(grant.status,200);
 await f.ok(await reader.req('bookmark',{id:visible.id,position:12,speed:1.5,duration:100}));await f.ok(await reader.req('reading',{id:pdf.id,page:4,pages:10}));
 let entries=(await f.ok(await reader.req('continue'))).entries;assert.deepEqual(new Set(entries.map(e=>e.id)),new Set([visible.id,pdf.id]));assert.equal((await f.ok(await reader.req('bookmark?id='+pdf.id))).page,4);
 assert.equal((await reader.req('bookmark',{id:hidden.id,position:1})).status,404);assert.equal((await reader.req('reading',{id:pdf.id,page:11,pages:10})).status,400);
 const playlist=await f.ok(await reader.req('playlists',{name:'My lessons',ids:[visible.id]}));assert.equal((await reader.req('playlists',{name:'Escape',ids:[hidden.id]})).status,404);
 assert.equal((await other.req('playlists')).status,403);
 const restart=await f.start();assert.equal((await(await fetch(restart+'/api/library/playlists',{headers:{cookie:'csquest_session='+f.token}})).json()).playlists.length,0);
 await f.ok(await reader.req('reading',{id:pdf.id,page:10,pages:10}));await f.ok(await reader.req('bookmark',{id:visible.id,position:100,speed:1,duration:100,completed:true}));assert.equal((await f.ok(await reader.req('continue'))).entries.length,0);
 await f.db.store.pool.query('DELETE FROM csquest_library_access WHERE user_id=$1',[reader.user.id]);assert.equal((await reader.req('playlists')).status,403);
 await f.db.store.pool.query("INSERT INTO csquest_library_access(owner_id,user_id,role,level,scopes) VALUES($1,$2,'viewer','limited','[]')",[f.ownerId,reader.user.id]);assert.equal((await f.ok(await reader.req('playlists'))).playlists[0].entries.length,0);
 assert.equal((await reader.req('playlists',{id:playlist.id,name:'No hidden entries',ids:[]})).status,200);
});

test('admin insights, share caps, access simulation and audit events are scoped and do not remove files',async t=>{
 const f=await libraryFixture(t),reader=await learner(f,'audit_reader'),root=await f.ok(await f.req('folder',{drive:'boot',name:'Parent'})),child=await f.ok(await f.req('folder',{drive:'boot',parent:root.id,name:'Child'}));
 const a=await upload(f,{parent:child.id,name:'a.mp4'}),b=await upload(f,{drive:'block',name:'b.mp4'}),pending=await f.ok(await f.req('upload',{drive:'boot',name:'unfinished.bin',size:8}));
 await f.ok(await f.req('public-links',{entryId:root.id,days:1,allowUpload:true,capBytes:20}));
 let overview=await f.ok(await f.req('sharing-overview'));assert.equal(overview.links[0].used,4);assert.equal(overview.links[0].remaining,16);assert.equal(overview.links[0].entryId,root.id);assert.ok(!JSON.stringify(overview).includes('token_hash'));
 const insight=await f.ok(await f.req('storage-insights'));assert.equal(insight.folders.find(e=>e.id===root.id).size,4);assert.equal(insight.duplicates[0].verified,true);assert.equal(insight.duplicates[0].items.length,2);assert.equal(insight.pending[0].id,pending.id);
 await f.db.store.pool.query("INSERT INTO csquest_library_access(owner_id,user_id,role,level,scopes) VALUES($1,$2,'viewer','limited',$3)",[f.ownerId,reader.user.id,JSON.stringify([{drive:'boot',entryId:root.id,canWrite:false}])]);
 const preview=await f.ok(await f.req('access-preview?userId='+reader.user.id+'&drive=boot'));assert.deepEqual(preview.entries.map(e=>e.id),[root.id]);assert.equal(preview.totalVisible,3);assert.ok(!JSON.stringify(preview).includes(b.id));
 assert.equal((await f.req('access-preview?userId='+reader.user.id+'&drive=block&parent='+child.id)).status,404);
 for(const route of ['sharing-overview','storage-insights','access-preview?userId='+f.ownerId,'activity'])assert.equal((await reader.req(route)).status,403);
 await f.ok(await f.req('rename',{id:a.id,name:'renamed.mp4'}));await(await f.req('file?id='+a.id+'&download=1')).arrayBuffer();await f.ok(await f.req('delete',{id:b.id}));
 const events=(await f.ok(await f.req('activity'))).events;for(const action of ['upload_started','upload_completed','renamed','deleted','download_started','public_link_created'])assert.ok(events.some(e=>e.action===action),action);
 assert.equal(events.find(e=>e.action==='renamed').actor_name,'edge_owner');assert.equal((await f.db.store.pool.query('SELECT id FROM csquest_library_entries WHERE id=$1',[a.id])).rowCount,1);
 assert.ok(!JSON.stringify(events).includes('token_hash'));assert.equal((await f.req('activity',{})).status,405);
 const savedList=await f.ok(await f.req('playlists',{name:'Replacement stays queued',ids:[a.id]}));const replacement=await f.ok(await f.req('prepare',{drive:'boot',parent:child.id,conflict:'replace',files:[{name:'renamed.mp4',size:4}]}));const next=replacement.uploads[0];await f.ok(await f.req(`chunk?id=${next.id}&offset=0`,Buffer.from('next'),{method:'PUT'}));await f.ok(await f.req('complete',{id:next.id}));assert.ok((await f.ok(await f.req('activity?action=replaced'))).events.some(e=>e.action==='replaced'));assert.equal((await f.ok(await f.req('playlists'))).playlists.find(p=>p.id===savedList.id).entries[0].id,next.id);
 await f.db.store.pool.query("INSERT INTO csquest_library_entries(id,owner_id,drive,name,kind) SELECT gen_random_uuid(),$1,'boot','preview-'||n,'folder' FROM generate_series(1,105) n",[f.ownerId]);const first=await f.ok(await f.req('access-preview?userId='+f.ownerId+'&drive=boot'));assert.equal(first.entries.length,100);assert.equal(first.nextOffset,100);const last=await f.ok(await f.req('access-preview?userId='+f.ownerId+'&drive=boot&offset=100'));assert.ok(last.entries.length>=5);assert.equal(last.nextOffset,null);
});
