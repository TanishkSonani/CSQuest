import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID,randomBytes,createHash} from 'node:crypto';
import {libraryFixture} from './library-fixture.mjs';
async function learner(f,name){const id=randomUUID(),token=randomBytes(32).toString('hex'),now=Date.now();await f.db.store.pool.query('INSERT INTO csquest_users(id,username,display_name,avatar,password,recovery_hash,created_at,revision,updated_at) SELECT $1,$2,$2,avatar,password,recovery_hash,$3,0,$3 FROM csquest_users WHERE id=$4',[id,name,now,f.ownerId]);await f.db.store.pool.query('INSERT INTO csquest_sessions(hash,user_id,created_at,expires_at) VALUES($1,$2,$3,$4)',[createHash('sha256').update(token).digest('hex'),id,now,now+86400000]);return {id,token};}
function request(f,user,route,body){return fetch(f.base+route,{method:body?'POST':'GET',headers:{cookie:'csquest_session='+(user?.token||f.token),...(body?{'Content-Type':'application/json','X-CSQuest-Request':'1'}:{})},body:body?JSON.stringify(body):undefined});}
async function completed(f,entry,data=Buffer.from('data')){await f.ok(await f.req(`chunk?id=${entry.id}&offset=0`,data,{method:'PUT'}));return f.ok(await f.req('complete',{id:entry.id}));}
test('signup cannot assign roles; administrators grant Library visibility to selected learners; only admins write',async t=>{
 const f=await libraryFixture(t),a=await learner(f,'learner_a'),b=await learner(f,'learner_b');
 const registered=await fetch(f.base+'/api/account/register',{method:'POST',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1'},body:JSON.stringify({username:'injected_role',displayName:'Learner',password:'a long valid signup passphrase',role:'admin',libraryAccess:true})});assert.equal(registered.status,200);const created=await registered.json();assert.equal(created.user.role,'learner');assert.equal(created.user.libraryAccess,false);
 assert.equal((await request(f,a,'/api/admin/users')).status,403);assert.equal((await request(f,a,'/api/library/storage')).status,403);
 await f.ok(await request(f,null,'/api/admin/library-access',{userIds:[a.id,b.id],enabled:true}));
 const session=await f.ok(await request(f,a,'/api/account/session'));assert.equal(session.user.role,'learner');assert.equal(session.user.libraryAccess,true);
 for(const user of [a,b]){assert.equal((await request(f,user,'/api/library/storage')).status,200);assert.equal((await request(f,user,'/api/library/folder',{drive:'boot',name:'forbidden'})).status,403);}
 assert.equal((await f.req('access',{username:'learner_a',role:'editor'})).status,400);
 const users=await f.ok(await request(f,null,'/api/admin/users?q=learner_'));assert.equal(users.users.length,2);assert.ok(users.users.every(u=>u.libraryAccess));assert.ok(!JSON.stringify(users).includes('password'));
 await f.ok(await request(f,null,'/api/admin/library-access',{userIds:[a.id,b.id],enabled:false}));assert.equal((await f.ok(await request(f,a,'/api/account/session'))).user.libraryAccess,false);
 await f.ok(await request(f,null,'/api/admin/role',{userId:a.id,role:'admin'}));assert.equal((await request(f,a,'/api/library/folder',{drive:'boot',name:'admin-created'})).status,200);assert.equal((await request(f,a,'/api/admin/role',{userId:b.id,role:'admin'})).status,200);
 assert.equal((await request(f,null,'/api/admin/role',{userId:f.ownerId,role:'learner'})).status,400);
});
test('reporters see only their reports; admin responses and priorities are visible to the reporter',async t=>{
 const f=await libraryFixture(t),a=await learner(f,'reporter_a'),b=await learner(f,'reporter_b');
 const report=await f.ok(await request(f,a,'/api/help/reports',{title:'Cannot play lesson',description:'Video stalls after seeking.',context:{courseId:'coa',lessonId:1,error:'decode failed',password:'must not be stored'}}));
 assert.equal((await f.ok(await request(f,b,'/api/help/reports'))).reports.length,0);
 const all=await f.ok(await request(f,null,'/api/admin/reports'));assert.equal(all.reports.length,1);assert.equal(all.reports[0].context.password,undefined);
 assert.equal((await request(f,a,'/api/admin/report',{id:report.id,status:'resolved',priority:'high',response:'fixed'})).status,403);
 await f.ok(await request(f,null,'/api/admin/report',{id:report.id,status:'resolved',priority:'high',response:'The playback fix is live.'}));const own=(await f.ok(await request(f,a,'/api/help/reports'))).reports[0];assert.equal(own.status,'resolved');assert.equal(own.response,'The playback fix is live.');
});
test('directory upload preflight, duplicate policies, safe replacement, favorites, bookmarks, resources, notes, ZIP and Undo work',async t=>{
 const f=await libraryFixture(t),a=await learner(f,'library_reader');await f.ok(await request(f,null,'/api/admin/library-access',{userIds:[a.id],enabled:true}));
 const batch=await f.ok(await f.req('prepare',{drive:'boot',files:[{name:'one.txt',path:'Course/Week 1/one.txt',size:4},{name:'two.txt',path:'Course/Week 2/two.txt',size:4}]}));for(const u of batch.uploads)await completed(f,u);
 const root=(await f.ok(await f.req('list?drive=boot'))).entries[0],tree=await f.ok(await f.req('folders?drive=boot'));assert.equal(tree.folders.length,3);
 const file=batch.uploads[0];const skipped=await f.ok(await f.req('prepare',{drive:'boot',parent:file.parent,conflict:'skip',files:[{name:'one.txt',size:4}]}));assert.equal(skipped.uploads[0].skipped,true);
 const kept=await f.ok(await f.req('prepare',{drive:'boot',parent:file.parent,conflict:'keep',files:[{name:'one.txt',size:4}]}));assert.equal(kept.uploads[0].name,'one (2).txt');await completed(f,kept.uploads[0]);
 await f.ok(await request(f,a,'/api/library/favorite',{id:file.id,favorite:true}));await f.ok(await request(f,a,'/api/library/bookmark',{id:file.id,position:123.5,speed:1.75}));assert.equal((await f.ok(await request(f,a,'/api/library/bookmark?id='+file.id))).position,123.5);
 const favorite=await f.ok(await request(f,a,'/api/library/browse?view=favorites'));assert.equal(favorite.entries[0].id,file.id);
 await f.ok(await f.req('resources',{id:file.id,courseId:'coa',lessonId:1}));assert.equal((await f.ok(await request(f,a,'/api/study/resources?course=coa&lesson=1'))).entries[0].id,file.id);
 await f.ok(await request(f,a,'/api/study/notes',{entryId:file.id,courseId:'coa',lessonId:1,seconds:10,body:'Revise this example'}));
 const link=await f.ok(await f.req('public-links',{entryId:file.id,days:7}));
 const replacement=await f.ok(await f.req('prepare',{drive:'boot',parent:file.parent,conflict:'replace',files:[{name:'one.txt',size:4}]}));assert.equal(await(await f.req('file?id='+file.id)).text(),'data');await completed(f,replacement.uploads[0],Buffer.from('NEW!'));assert.equal((await f.req('file?id='+file.id)).status,404);
 assert.equal(await(await fetch(f.base+'/api/library/public-file?token='+link.token)).text(),'NEW!');assert.equal((await f.ok(await request(f,a,'/api/library/bookmark?id='+replacement.uploads[0].id))).position,123.5);
 assert.equal((await f.ok(await request(f,a,'/api/study/notes'))).notes[0].entry_id,replacement.uploads[0].id);
 const renamed=await f.ok(await f.req('rename',{id:replacement.uploads[0].id,name:'renamed.txt'}));assert.ok(renamed.undoId);await f.ok(await f.req('undo',{id:renamed.undoId}));assert.equal((await f.ok(await f.req('details?id='+replacement.uploads[0].id))).name,'one.txt');assert.equal((await f.req('undo',{id:renamed.undoId})).status,409);
 const moved=await f.ok(await f.req('bulk',{ids:[replacement.uploads[0].id,kept.uploads[0].id],action:'move',parent:root.id}));await f.ok(await f.req('undo',{id:moved.undoId}));
 const zip=await request(f,a,'/api/library/archive?ids='+root.id);assert.equal(zip.status,200);const zipped=Buffer.from(await zip.arrayBuffer());assert.equal(zipped.readUInt32LE(0),0x04034b50);assert.ok(zipped.includes(Buffer.from('Course/Week 1/one.txt')));assert.ok(zipped.includes(Buffer.from('NEW!')));
 await f.ok(await f.req('bulk',{ids:[root.id],action:'delete',confirmed:true}));assert.equal((await f.ok(await f.req('list?drive=boot'))).entries.length,0);assert.equal((await f.db.store.pool.query('SELECT * FROM csquest_library_public_links')).rowCount,0);
});
test('public directory tokens can browse descendants but cannot escape to parents, other drives or private files',async t=>{
 const f=await libraryFixture(t),shared=await f.ok(await f.req('folder',{drive:'boot',name:'Shared'})),nested=await f.ok(await f.req('folder',{drive:'boot',parent:shared.id,name:'Week 1'})),outside=await f.ok(await f.req('upload',{drive:'block',name:'private.txt',size:4})),inside=await f.ok(await f.req('upload',{drive:'boot',parent:nested.id,name:'public.txt',size:4}));await completed(f,outside);await completed(f,inside);
 const link=await f.ok(await f.req('public-links',{entryId:shared.id,days:7})),base=f.base+'/api/library/';
 const info=await(await fetch(base+'public-info?token='+link.token)).json();assert.equal(info.kind,'folder');assert.equal(info.entries[0].name,'Week 1');
 const child=await(await fetch(base+'public-info?token='+link.token+'&id='+nested.id)).json();assert.deepEqual(child.breadcrumbs.map(c=>c.name),['Shared','Week 1']);assert.equal(await(await fetch(base+'public-file?token='+link.token+'&id='+inside.id)).text(),'data');
 for(const id of [outside.id,f.ownerId])assert.equal((await fetch(base+'public-file?token='+link.token+'&id='+id)).status,404);
 await f.ok(await f.req('public-link-remove',{entryId:shared.id}));assert.equal((await fetch(base+'public-info?token='+link.token+'&id='+nested.id)).status,404);
});

test('directory preflight rolls back folders, replacement protects originals under pressure, and Undo rejects newer changes',async t=>{
 const f=await libraryFixture(t,{quota:16});
 assert.equal((await f.req('prepare',{drive:'boot',files:[{name:'large.txt',path:'Rollback/Child/large.txt',size:17}]})).status,507);
 assert.equal((await f.ok(await f.req('folders?drive=boot'))).folders.length,0);
 assert.equal((await f.req('prepare',{drive:'boot',files:[{name:'bad.txt',path:'../bad.txt',size:1}]})).status,400);
 const file=await f.ok(await f.req('upload',{drive:'boot',name:'original.txt',size:12}));await completed(f,file,Buffer.from('originaldata'));
 assert.equal((await f.req('prepare',{drive:'boot',conflict:'replace',files:[{name:'original.txt',size:12}]})).status,507);assert.equal(await(await f.req('file?id='+file.id)).text(),'originaldata');
 const first=await f.ok(await f.req('rename',{id:file.id,name:'second.txt'})),second=await f.ok(await f.req('rename',{id:file.id,name:'third.txt'}));assert.equal((await f.req('undo',{id:first.undoId})).status,409);await f.ok(await f.req('undo',{id:second.undoId}));await f.ok(await f.req('undo',{id:first.undoId}));
 const root=await f.ok(await f.req('folder',{drive:'boot',name:'Shared'})),link=await f.ok(await f.req('public-links',{entryId:root.id,days:1}));await f.ok(await f.req('move',{id:file.id,parent:root.id}));assert.equal((await fetch(f.base+'/api/library/public-file?token='+link.token+'&id='+file.id)).status,200);await f.ok(await f.req('move',{id:file.id,parent:null}));assert.equal((await fetch(f.base+'/api/library/public-file?token='+link.token+'&id='+file.id)).status,404);
});
