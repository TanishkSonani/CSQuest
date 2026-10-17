import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {createServer} from '../src/platform/server.mjs';
import {testStore} from './database-helper.mjs';
import {ensureLeague} from '../src/platform/social.mjs';
import {freshActivity,learnerMetrics,weekBounds} from '../src/platform/social-metrics.mjs';
import {saveUser} from '../src/platform/database.mjs';

test('friend consent, private comparisons, saved-round scores, invitations and challenge outcomes',async()=>{
 const fixture=await testStore(),server=createServer({store:fixture.store});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 const client=()=>({cookie:'',revision:0,progress:{version:1,xp:0,completed:[],history:[],daily:{}},
  async request(path,body,headers={}){
   const response=await fetch(base+'/api/'+path,{method:body?'POST':'GET',headers:{cookie:this.cookie,'Content-Type':'application/json','X-CSQuest-Request':'1',...headers},body:body?JSON.stringify(body):undefined});
   if(response.headers.has('set-cookie'))this.cookie=response.headers.get('set-cookie').split(';')[0];
   return {status:response.status,data:await response.json()};
  },
  async register(username){const result=await this.request('account/register',{username,displayName:username,avatar:'chip',password:'a memorable test passphrase'});assert.equal(result.status,200);this.id=result.data.user.id;},
  async earn(xp=60,source){this.progress={...this.progress,xp:this.progress.xp+xp,history:[{at:Date.now()+this.revision,lessonId:0,practice:false,questions:4,correct:(xp-40)/5,xp},...this.progress.history]};const result=await this.request('account/data',{revision:this.revision,changes:{'coa-quest-v1':JSON.stringify(this.progress)},...(source?{source}:{})});assert.equal(result.status,200);this.revision=result.data.revision;}
 });
 try{
  const a=client(),b=client(),c=client(),guest=client();await a.register('social_alice');await b.register('social_bob');await c.register('social_cara');
  assert.equal((await guest.request('social/overview')).status,401);
  assert.equal((await guest.request('social/profile?userId='+a.id)).status,401);
  assert.equal((await a.request('social/profile?userId=invalid')).status,400);
  const publicProfile=(await a.request('social/profile?userId='+b.id)).data;
  assert.equal(publicProfile.user.id,b.id);assert.equal(publicProfile.relationship,'none');assert.equal(publicProfile.learners.length,2);assert.equal(publicProfile.canRequest,true);
  assert.equal(publicProfile.comparisonAccess,'summary');
  for(const learner of publicProfile.learners){assert.equal(learner.xp,0);assert.equal(learner.levels,0);assert.equal(learner.streak,0);for(const key of ['daily','today','courses','accuracy','minutes','rounds','studyDays'])assert.ok(!(key in learner),key+' must stay private');}
  const selfProfile=(await a.request('social/profile?userId='+a.id)).data;
  assert.equal(selfProfile.learners.length,1);assert.equal(selfProfile.relationship,'self');
  const suggestions=(await a.request('social/overview')).data.suggestions;
  assert.deepEqual(suggestions.map(user=>user.id).sort(),[b.id,c.id].sort());
  assert.deepEqual(Object.keys(suggestions[0]).sort(),['avatar','displayName','id','username']);
  assert.equal((await a.request('social/settings',{discoverable:true},{Origin:'https://other.example'})).status,403);
  assert.equal((await a.request('social/settings',{timeZone:'invalid_timezone'})).status,400);
  assert.equal((await a.request('social/compare?userId='+b.id)).status,403);
  assert.equal((await a.request('social/friends/request',{userId:a.id})).status,400);
  const search=await a.request('social/search?q=social_bob');assert.equal(search.status,200);assert.equal(search.data.learners[0].id,b.id);assert.ok(!JSON.stringify(search.data).includes('password'));
  assert.equal((await a.request('social/friends/request',{userId:b.id})).status,200);
  assert.ok(!(await a.request('social/overview')).data.suggestions.some(user=>user.id===b.id));
  assert.ok(!(await b.request('social/overview')).data.suggestions.some(user=>user.id===a.id));
  assert.equal((await a.request('social/friends/request',{userId:b.id})).status,409);
  assert.equal((await a.request('social/friends/respond',{userId:b.id,response:'accept'})).status,403);
  assert.equal((await b.request('social/friends/respond',{userId:a.id,response:'accept'})).status,200);
  assert.equal((await c.request('social/friends/respond',{userId:a.id,response:'accept'})).status,404);
  a.progress.daily={'2024-02-28':20,'2024-02-29':40};
  await a.earn();await b.earn(40);
  const friendProfile=(await b.request('social/profile?userId='+a.id)).data;
  assert.equal(friendProfile.relationship,'friend');assert.equal(friendProfile.learners.length,2);
  assert.equal(friendProfile.comparisonAccess,'full');
  assert.deepEqual(friendProfile.learners.find(user=>user.id===a.id).daily,{'2024-02-28':20,'2024-02-29':40});
  assert.ok(!JSON.stringify(friendProfile).includes('history'));assert.ok(!JSON.stringify(friendProfile).includes('password'));assert.ok(!JSON.stringify(friendProfile).includes('recovery'));
  const visitorProfile=(await c.request('social/profile?userId='+a.id)).data;
  assert.equal(visitorProfile.comparisonAccess,'summary');
  const visitorTarget=visitorProfile.learners.find(user=>user.id===a.id);
  assert.equal(visitorTarget.xp,60);assert.equal(visitorTarget.weekXP,60);assert.ok(!('daily' in visitorTarget));assert.ok(!('courses' in visitorTarget));
  const compare=await a.request('social/compare?userId='+b.id);assert.equal(compare.status,200);assert.equal(compare.data.learners.find(row=>row.id===a.id).weekXP,60);
  assert.ok(!JSON.stringify(compare.data).includes('recoveryHash'));assert.ok(!JSON.stringify(compare.data).includes('data":'));
  const board=await a.request('social/leaderboard?scope=friends');assert.equal(board.data.rows[0].id,a.id);assert.equal(board.data.rows[1].xp,40);
  assert.equal((await c.request('social/leaderboard?scope=friends')).data.rows.length,1);
  assert.equal((await a.request('social/leaderboard?scope=community')).data.rows.length,0);
  await a.request('social/settings',{leagueEnabled:true});
  assert.deepEqual((await b.request('social/leaderboard?scope=community')).data.rows.map(row=>row.id),[a.id]);
  assert.equal((await a.request('social/leaderboard?scope=league')).data.league,'Bronze');
  assert.equal((await a.request('social/challenges/create',{title:'Unauthorized',mode:'race',goal:100,days:1,friendIds:[c.id]})).status,403);
  const created=await a.request('social/challenges/create',{title:'Together',mode:'team',goal:100,days:3,friendIds:[b.id]});assert.equal(created.status,200);const challengeId=created.data.id;
  assert.equal((await c.request('social/challenges/detail?id='+challengeId)).status,404);
  assert.equal((await b.request('social/challenges/detail?id='+challengeId)).data.myState,'invited');
  assert.equal((await b.request('social/challenges/respond',{challengeId,response:'join'})).status,200);
  assert.equal((await b.request('social/challenges/respond',{challengeId,response:'join'})).status,409);
  assert.equal((await a.request('social/challenges/detail?id='+challengeId)).data.total,0);
  await a.earn();await b.earn();
  const achieved=(await a.request('social/challenges/detail?id='+challengeId)).data;assert.equal(achieved.total,120);assert.equal(achieved.achieved,true);assert.equal(achieved.progress,100);
  assert.equal((await b.request('social/challenges/respond',{challengeId,response:'cancel'})).status,403);
  assert.equal((await b.request('social/challenges/respond',{challengeId,response:'leave'})).status,200);
  await b.earn();assert.equal((await a.request('social/challenges/detail?id='+challengeId)).data.total,120);
  await a.earn(60,'backup');assert.equal((await a.request('social/leaderboard?scope=friends')).data.rows.find(row=>row.id===a.id).xp,120);
  const stale=await a.request('account/data',{revision:0,changes:{'coa-quest-v1':JSON.stringify(a.progress)}});assert.equal(stale.status,409);
  const race=(await a.request('social/challenges/create',{title:'Race',mode:'race',goal:100,days:1,friendIds:[b.id]})).data;
  await b.request('social/challenges/respond',{challengeId:race.id,response:'join'});await a.earn();await b.earn(40);
  await fixture.store.pool.query("UPDATE csquest_challenges SET ends_at=now()+interval '1 millisecond' WHERE id=$1",[race.id]);await new Promise(resolve=>setTimeout(resolve,5));
  const ended=(await b.request('social/challenges/detail?id='+race.id)).data;assert.equal(ended.state,'completed');assert.deepEqual(ended.winners,[a.id]);
  assert.equal((await a.request('social/challenges/respond',{challengeId:race.id,response:'cancel'})).status,409);
  assert.ok((await b.request('social/overview')).data.notifications.some(row=>row.kind==='challenge-invite'&&!row.readAt));
  await b.request('social/notifications/read',{});assert.ok((await b.request('social/overview')).data.notifications.every(row=>row.readAt));
  await b.request('social/settings',{discoverable:false});assert.equal((await c.request('social/search?q=social_bob')).data.learners.length,0);
  assert.equal((await c.request('social/profile?userId='+b.id)).status,404);
  assert.equal((await a.request('social/profile?userId='+b.id)).data.learners.length,2);
  assert.ok(!(await c.request('social/overview')).data.suggestions.some(user=>user.id===b.id));
  await a.request('social/friends/respond',{userId:b.id,response:'remove'});assert.equal((await a.request('social/compare?userId='+b.id)).status,403);
  assert.equal((await a.request('social/profile?userId='+b.id)).status,404);
 }finally{await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
});

test('weekly leagues settle once, promote/demote eligible cohorts, and limit each cohort to 30',async()=>{
 const fixture=await testStore(),pool=fixture.store.pool,ids=[],now=Date.now(),previous=weekBounds(now-7*86400000),current=weekBounds(now);
 try{
  for(let index=0;index<31;index++){
   const id=randomUUID();ids.push(id);
   await saveUser(pool,{id,username:'league_'+String(index).padStart(2,'0'),displayName:'League '+index,avatar:'chip',password:{salt:'test',hash:'test'},recoveryHash:'test',createdAt:now,lastLoginAt:null,revision:0,updatedAt:now,data:{}});
   await pool.query('UPDATE csquest_social_profiles SET league_enabled=true,tier=2 WHERE user_id=$1',[id]);
   if(index<5){
    await pool.query('INSERT INTO csquest_league_entries(user_id,week,tier,cohort) VALUES($1,$2,2,1)',[id,previous.week]);
    await pool.query('INSERT INTO csquest_activity_events(user_id,course_id,event_key,xp,created_at) VALUES($1,$2,$3,$4,$5)',[id,'coa','previous',150-index*30,new Date(Date.parse(previous.start)+3600000)]);
   }
  }
  assert.equal((await ensureLeague(pool,ids[0],now)).tier,3);
  assert.equal((await ensureLeague(pool,ids[4],now)).tier,1);
  assert.equal((await ensureLeague(pool,ids[2],now)).tier,2);
  const repeat=await Promise.all([ensureLeague(pool,ids[0],now),ensureLeague(pool,ids[0],now)]);assert.ok(repeat.every(row=>row.tier===3));
  // Give all 31 learners one common fresh week/tier to exercise cohort allocation.
  const later=now+14*86400000;
  await pool.query('UPDATE csquest_social_profiles SET tier=0');await pool.query('UPDATE csquest_league_entries SET settled=true');
  for(const id of ids)await ensureLeague(pool,id,later);
  const sizes=(await pool.query('SELECT count(*)::integer AS size FROM csquest_league_entries WHERE week=$1 GROUP BY cohort ORDER BY count(*) DESC',[weekBounds(later).week])).rows;
  assert.deepEqual(sizes.map(row=>row.size),[30,1]);
  assert.equal((await pool.query('SELECT count(*)::integer AS size FROM csquest_league_entries WHERE user_id=$1 AND week=$2',[ids[0],current.week])).rows[0].size,1);
 }finally{await fixture.dispose();}
});

test('round scoring ignores historic/imported XP, malformed reports and duplicate events',()=>{
 const courses=[{id:'coa',status:'available',storageKey:'coa-quest-v1',lectureCount:35,shortName:'COA'}],now=Date.now();
 const event={at:now,lessonId:0,practice:false,questions:4,correct:4,xp:60};
 const before={'coa-quest-v1':JSON.stringify({xp:500,history:[]})};
 const after={'coa-quest-v1':JSON.stringify({xp:560,history:[event,event,{...event,at:now-2*86400000},{...event,xp:9999}]})};
 assert.equal(freshActivity(before,after,courses,now).length,1);
 assert.equal(freshActivity(after,after,courses,now).length,0);
 const metrics=learnerMetrics({'coa-quest-v1':JSON.stringify({xp:10,completed:[0,0,-1,999],dailyStats:{today:{questions:2,correct:99}},daily:{}})},courses,now);
 assert.equal(metrics.levels,1);assert.equal(metrics.accuracy,100);
 assert.equal(weekBounds(Date.parse('2026-10-11T23:59:59Z')).week,'2026-10-05');
 const localProgress={'coa-quest-v1':JSON.stringify({daily:{'2026-10-11':60}})},midnight=Date.parse('2026-10-10T23:00:00Z');
 assert.equal(learnerMetrics(localProgress,courses,midnight,{timeZone:'Asia/Kolkata'}).streak,1);
 assert.equal(learnerMetrics(localProgress,courses,midnight,{timeZone:'UTC'}).streak,0);
});
