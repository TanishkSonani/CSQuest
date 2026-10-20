import test from 'node:test';
import assert from 'node:assert/strict';
import {libraryFixture} from './library-fixture.mjs';

test('Library-only creation, login and scoped writes fail closed across locations and revocation',async t=>{
 const f=await libraryFixture(t),call=(path,body,cookie=f.token)=>fetch(f.base+path,{method:body?'POST':'GET',headers:{cookie:'csquest_session='+cookie,'Content-Type':'application/json','X-CSQuest-Request':'1'},body:body?JSON.stringify(body):undefined});
 const created=await f.ok(await call('/api/admin/create-user',{username:'files_only',displayName:'Files only',password:'a secure library passphrase',role:'learner',accountType:'library'}));
 const login=await call('/api/account/login',{username:'files_only',password:'a secure library passphrase'}),cookie=login.headers.get('set-cookie').match(/csquest_session=([^;]+)/)[1],session=await login.json();assert.equal(session.user.libraryOnly,true);assert.equal(session.user.libraryAccess,true);
 for(const route of ['/api/course-content?subject=coa','/api/status','/api/social/profile','/courses/coa/learning.json','/api/admin/users'])assert.equal((await call(route,null,cookie)).status,403,route);
 assert.equal((await call('/api/library/storage',null,cookie)).status,403);
 const folder=await f.ok(await f.req('folder',{drive:'block',name:'Shared'})),privateFolder=await f.ok(await f.req('folder',{drive:'block',name:'Private'}));
 const grant=async body=>f.ok(await call('/api/admin/library-access',{userIds:[created.id],enabled:true,level:'limited',scopes:[{drive:'block',entryId:folder.id,canWrite:true}],...body}));
 await grant();const mine=(r,b)=>call('/api/library/'+r,b,cookie);
 assert.deepEqual((await f.ok(await mine('storage'))).drives.map(d=>d.id),['block']);
 assert.equal((await f.ok(await mine('list?drive=block'))).canWrite,false);
 assert.equal((await f.ok(await mine('list?drive=block&parent='+folder.id))).canWrite,true);
 assert.equal((await mine('folder',{drive:'block',name:'escape'})).status,403);
 assert.equal((await mine('folder',{drive:'block',parent:privateFolder.id,name:'escape'})).status,403);
 assert.equal((await mine('rename',{id:folder.id,name:'stolen root'})).status,403);
 const child=await f.ok(await mine('folder',{drive:'block',parent:folder.id,name:'Writable child'}));
 const file=await f.ok(await mine('upload',{drive:'block',parent:child.id,name:'empty.txt',size:0}));await f.ok(await mine('complete',{id:file.id}));
 assert.equal((await mine('move',{id:file.id,parent:privateFolder.id})).status,403);
 assert.equal((await mine('bulk',{ids:[file.id,privateFolder.id],action:'delete',confirmed:true})).status,403);
 const renamed=await f.ok(await mine('rename',{id:file.id,name:'renamed.txt'}));await f.ok(await mine('undo',{id:renamed.undoId}));
 const pending=await f.ok(await mine('upload',{drive:'block',parent:child.id,name:'pending.txt',size:1}));await grant({scopes:[{drive:'block',entryId:folder.id,canWrite:false}]});
 assert.equal((await mine('cancel',{id:pending.id})).status,403);assert.equal((await mine('delete',{id:file.id})).status,403);assert.equal((await mine('file?id='+file.id)).status,200);
 const list=await f.ok(await call('/api/admin/users'));assert.equal(list.users.find(u=>u.id===created.id).accountType,'library');
 const signup=await f.ok(await call('/api/account/register',{username:'public_signup',displayName:'Learner',password:'public valid long passphrase',role:'admin',accountType:'library'}));assert.equal(signup.user.libraryOnly,false);assert.equal(signup.user.role,'learner');
});
