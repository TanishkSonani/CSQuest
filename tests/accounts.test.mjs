import test from 'node:test';
import assert from 'node:assert/strict';
import {testStore} from './database-helper.mjs';
import {createServer} from '../src/platform/server.mjs';
import {courseCompletion,completeRound} from '../packages/learning/experience.js';
import {avatars,avatarIds} from '../packages/learning/avatars.js';
const password='a memorable test passphrase',newPassword='another memorable passphrase';
test('avatar identifiers preserve old icons and cover every requested character category',()=>{
 assert.equal(avatars.filter(a=>a.tile!==undefined).length,16);
 assert.equal(new Set(avatars.map(a=>a.id)).size,avatars.length);
 assert.equal(new Set(avatars.filter(a=>a.tile!==undefined).map(a=>a.tile)).size,16);
 for(const category of ['people','animals','mythic','characters','clash'])assert.ok(avatars.some(a=>a.category===category));
 for(const id of ['chip','leaf','star','rocket','book','binary','pirate','explorer-female','nerd','barbarian','archer','wizard','goblin'])assert.ok(avatarIds.has(id));
});
test('completion percentages count unique valid levels against the whole course',()=>{
 assert.deepEqual(courseCompletion({completed:[0,1,1,-1,105,'2']},105),{completed:2,total:105,percent:1.9});
 assert.equal(courseCompletion({completed:[0,1]},2).percent,100);assert.equal(courseCompletion({},0).percent,0);
});
test('round history and activity retain personal learning metrics',()=>{
 const lesson={id:0,title:'Computer components'},queue=[{lesson,key:'0:0'}];
 const {progress}=completeRound({version:1},{lesson,queue,total:1,firstCorrect:1,practice:false,xp:10,studySeconds:65,results:{'0:0':{firstCorrect:true}}});
 assert.equal(progress.history[0].xp,30);assert.equal(progress.history[0].title,'Computer components');assert.equal(Object.values(progress.dailyStats)[0].studySeconds,65);
});
test('accounts isolate data, persist across restart, reject stale updates and support recovery and deletion',async()=>{
 const fixture=await testStore();let server=createServer({store:fixture.store});
 const start=async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));return 'http://127.0.0.1:'+server.address().port;};let base=await start();
 const client=()=>({cookie:'',async request(route,body,extra={}){
  const res=await fetch(base+'/api/account/'+route,{method:body?'POST':'GET',headers:{...(body?{'Content-Type':'application/json','X-CSQuest-Request':'1'}:{}),...(this.cookie?{Cookie:this.cookie}:{}),...extra},body:body?JSON.stringify(body):undefined});
  if(res.headers.get('set-cookie')){assert.match(res.headers.get('set-cookie'),/HttpOnly; SameSite=Strict/);this.cookie=res.headers.get('set-cookie').split(';')[0];}
  return {status:res.status,data:await res.json()};
 }});
 try{
  const a=client(),b=client(),anonymous=client();
  assert.equal((await anonymous.request('export')).status,401);
  assert.equal((await anonymous.request('register',{username:'test_a',displayName:'A',password,avatar:'chip'},{Origin:'http://evil.example'})).status,403);
  const created=await a.request('register',{username:'test_a',displayName:'Learner A',password,avatar:'chip',remember:true,data:{'coa-quest-v1':JSON.stringify({version:1,xp:60,completed:[0]})}});
  assert.equal(created.status,200);assert.ok(created.data.recoveryCode);assert.equal(created.data.user.username,'test_a');assert.ok(!('password' in created.data.user));
  assert.equal((await b.request('register',{username:'test_b',displayName:'Learner B',password,avatar:'leaf'})).status,200);
  assert.deepEqual((await b.request('session')).data.data,{});
  const data={version:1,xp:120,completed:[0,1]};
  assert.equal((await a.request('data',{revision:0,changes:{'coa-quest-v1':JSON.stringify(data)}})).status,200);
  assert.equal((await a.request('data',{revision:0,changes:{'coa-quest-v1':JSON.stringify({version:1,xp:0,completed:[]})}})).status,409);
  assert.equal((await a.request('data',{revision:1,changes:{'../../escape':'bad'}})).status,400);
  assert.equal((await a.request('data',{revision:1,changes:{'coa-quest-v1':'invalid'}})).status,400);
  assert.deepEqual((await b.request('session')).data.data,{});
  const stored={users:(await fixture.store.pool.query('SELECT password FROM csquest_users')).rows,sessions:(await fixture.store.pool.query('SELECT hash FROM csquest_sessions')).rows};
  assert.ok(!JSON.stringify(stored).includes(password));assert.ok(stored.users[0].password.salt);assert.equal(stored.sessions[0].hash.length,64);
  await new Promise(r=>server.close(r));server=createServer({store:fixture.store});base=await start();
  assert.equal(JSON.parse((await a.request('session')).data.data['coa-quest-v1']).xp,120);
  const other=client();assert.equal((await other.request('login',{username:'test_a',password:'incorrect'})).status,401);
  assert.equal((await other.request('login',{username:'test_a',password})).status,200);
  assert.equal((await a.request('password',{password,newPassword})).status,200);
  assert.equal((await other.request('export')).status,401);
  assert.equal((await a.request('profile',{displayName:'New Name',avatar:'rocket'})).data.user.displayName,'New Name');
  assert.equal((await a.request('profile',{displayName:'New Name',avatar:'dragon'})).data.user.avatar,'dragon');
  assert.equal((await a.request('profile',{displayName:'Wrong Name',avatar:'../../escape'})).status,400);
  const exported=(await a.request('export')).data;assert.equal(exported.format,'csquest-account');assert.ok(!JSON.stringify(exported).includes('recoveryHash'));
  const recovery=await other.request('recover',{username:'test_a',recoveryCode:created.data.recoveryCode,password});assert.equal(recovery.status,200);assert.notEqual(recovery.data.recoveryCode,created.data.recoveryCode);
  assert.equal((await a.request('export')).status,401);
  assert.equal((await a.request('recover',{username:'test_a',recoveryCode:created.data.recoveryCode,password})).status,401);
  assert.equal((await other.request('delete',{username:'wrong',password})).status,400);
  assert.equal((await other.request('delete',{username:'test_a',password})).status,200);
  assert.equal((await other.request('export')).status,401);
  assert.deepEqual((await b.request('session')).data.data,{});
 }finally{await new Promise(r=>server.close(r));await fixture.dispose();}
});
