import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID,randomBytes,createHash} from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {testStore} from './database-helper.mjs';
import {createServer} from '../src/platform/server.mjs';
import {importAccounts,importCourses} from '../scripts/db-import.mjs';
import {migrate} from '../scripts/db-migrate.mjs';

test('two app instances serialize account writes and reject stale progress without partial mutations',async()=>{
 const fixture=await testStore(),servers=[createServer({store:fixture.store}),createServer({store:fixture.store})];
 const bases=await Promise.all(servers.map(async server=>{await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));return `http://127.0.0.1:${server.address().port}`;}));
 const request=(base,route,body,cookie)=>fetch(base+'/api/account/'+route,{method:body?'POST':'GET',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1',cookie:cookie||''},body:body?JSON.stringify(body):undefined});
 try{
  const body={username:'parallel',displayName:'Parallel',avatar:'chip',password:'a memorable test passphrase'};
  const registered=await Promise.all(bases.map(base=>request(base,'register',body)));
  assert.deepEqual(registered.map(response=>response.status).sort(),[200,409]);
  const cookie=registered.find(response=>response.status===200).headers.get('set-cookie').split(';')[0];
  const writes=await Promise.all(bases.map((base,index)=>request(base,'data',{revision:0,changes:{'csquest-theme':index?'dark':'light'}},cookie)));
  assert.deepEqual(writes.map(response=>response.status).sort(),[200,409]);
  const winner=writes.findIndex(response=>response.status===200);
  const snapshot=await (await request(bases[0],'session',null,cookie)).json();
  assert.equal(snapshot.revision,1);assert.equal(snapshot.data['csquest-theme'],winner?'dark':'light');
  assert.equal((await request(bases[1],'profile',{displayName:'Changed',avatar:'unsafe'},cookie)).status,400);
  assert.equal((await (await request(bases[0],'session',null,cookie)).json()).user.displayName,'Parallel');
 }finally{await Promise.all(servers.map(server=>new Promise(resolve=>server.close(resolve))));await fixture.dispose();}
});

test('legacy imports preserve hashes, sessions and progress and never overwrite existing accounts',async()=>{
 const fixture=await testStore(),directory=await fs.mkdtemp(path.join(os.tmpdir(),'csquest-pg-import-'));
 const token=randomBytes(32).toString('hex'),hash=createHash('sha256').update(token).digest('hex'),id=randomUUID(),now=Date.now();
 const user={id,username:'legacy',displayName:'Legacy',avatar:'chip',password:{salt:'a'.repeat(32),hash:'b'.repeat(128)},recoveryHash:'c'.repeat(64),createdAt:now,lastLoginAt:now,data:{'csquest-theme':'dark'},revision:4,updatedAt:now};
 const file=path.join(directory,'accounts.json');
 try{
  await fs.writeFile(file,JSON.stringify({version:1,users:[user],sessions:[{hash,userId:id,createdAt:now,expiresAt:now+86400000}]}));
  assert.deepEqual(await importAccounts(fixture.store.pool,file),{imported:1,skipped:0});
  const data=await fixture.store.accounts(db=>db.users[0],{sessionHash:hash,readOnly:true});
  assert.deepEqual(data,user);
  await fixture.store.accounts(db=>{db.users[0].data['csquest-theme']='light';},{sessionHash:hash});
  assert.deepEqual(await importAccounts(fixture.store.pool,file),{imported:0,skipped:1});
  assert.equal((await fixture.store.accounts(db=>db.users[0].data,{sessionHash:hash,readOnly:true}))['csquest-theme'],'light');
  await migrate(fixture.store.pool);await importCourses(fixture.store.pool);
  assert.equal((await fixture.store.courses()).length,11);
  assert.match(await fixture.store.module('coa','lessons.js'),/export/);
  assert.equal((await fixture.store.document('coa','transcripts/0.json')).id,0);
 }finally{await fixture.dispose();await fs.rm(directory,{recursive:true,force:true});}
});

test('runtime reads updated course catalogs, teaching, transcripts and status directly from PostgreSQL',async()=>{
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 try{
  const registration=await fetch(base+'/api/account/register',{method:'POST',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1'},body:JSON.stringify({username:'database_reader',displayName:'Reader',avatar:'chip',password:'a memorable test passphrase'})});
  assert.equal(registration.status,200);const cookie=registration.headers.get('set-cookie').split(';')[0];
  const request=route=>fetch(base+route,{headers:{cookie}});
  const source='export const lessons = [{id:700,title:"Database lesson"}];';
  await fixture.store.pool.query("UPDATE csquest_course_modules SET source=$1 WHERE course_id='coa' AND filename='lessons.js'",[source]);
  await fixture.store.pool.query("UPDATE csquest_courses SET manifest=jsonb_set(manifest,'{name}',$1::jsonb) WHERE id='coa'",[JSON.stringify('Database course')]);
  await fixture.store.pool.query("UPDATE csquest_course_documents SET data=$1 WHERE course_id='coa' AND path='transcripts/0.json'",[{id:0,segments:[{text:'Database transcript'}]}]);
  await fixture.store.pool.query("UPDATE csquest_course_status SET data=$1 WHERE course_id='coa'",[{total:35,completed:12,phase:'stopped'}]);
  assert.equal(await (await request('/courses/coa/lessons.js')).text(),source);
  assert.equal((await (await request('/api/subjects')).json()).find(course=>course.id==='coa').name,'Database course');
  assert.equal((await (await request('/api/transcript/0?subject=coa')).json()).segments[0].text,'Database transcript');
  assert.equal((await (await request('/api/status?subject=coa')).json()).completed,12);
  assert.equal(await fixture.store.limit('test_address'),1);
  assert.equal(await fixture.store.limit('test_address'),2);
  await fixture.store.pool.query('UPDATE csquest_login_attempts SET expires_at=0 WHERE address_hash=$1',['test_address']);
  assert.equal(await fixture.store.limit('test_address'),1);
 }finally{await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
});
