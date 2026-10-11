import {randomUUID} from 'node:crypto';
import {transaction} from './database.mjs';
import {assertSameOrigin,readBody} from './accounts.mjs';
import {learnerMetrics,weekBounds} from './social-metrics.mjs';

export const LEAGUES=['Bronze','Silver','Gold','Sapphire','Diamond'];
const fail=(status,message)=>{throw Object.assign(new Error(message),{status});};
const uuid=value=>{if(typeof value!=='string'||!/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(value))fail(400,'Choose a valid learner or challenge.');return value.toLowerCase();};
const identity=row=>({id:row.id,username:row.username,displayName:row.display_name,avatar:row.avatar});
const pair=(a,b)=>[a,b].sort();
const friendship=async(client,a,b)=>(await client.query('SELECT * FROM csquest_friendships WHERE user_low=$1 AND user_high=$2',pair(a,b))).rows[0];
const friendIds=async(client,id)=>(await client.query("SELECT CASE WHEN user_low=$1 THEN user_high ELSE user_low END AS id FROM csquest_friendships WHERE (user_low=$1 OR user_high=$1) AND status='accepted'",[id])).rows.map(row=>row.id);
const notify=(client,userId,actorId,kind,challengeId=null)=>client.query('INSERT INTO csquest_social_notifications(user_id,actor_id,kind,challenge_id) VALUES($1,$2,$3,$4)',[userId,actorId,kind,challengeId]);
const ranked=rows=>rows.map((row,index)=>({...row,rank:1+rows.filter(other=>other.xp>row.xp).length,position:index+1}));
async function summaries(client,ids,courses,now){
 if(!ids.length)return [];
 const users=(await client.query('SELECT u.id,u.username,u.display_name,u.avatar,p.time_zone FROM csquest_users u JOIN csquest_social_profiles p ON p.user_id=u.id WHERE u.id=ANY($1::uuid[])',[ids])).rows;
 const data=(await client.query('SELECT user_id,key,value FROM csquest_user_data WHERE user_id=ANY($1::uuid[])',[ids])).rows;
 const {start,end}=weekBounds(now);
 const weekly=(await client.query('SELECT user_id,sum(xp)::integer AS xp FROM csquest_activity_events WHERE user_id=ANY($1::uuid[]) AND created_at>=$2 AND created_at<$3 GROUP BY user_id',[ids,start,end])).rows;
 return users.map(user=>({...identity(user),...learnerMetrics(Object.fromEntries(data.filter(row=>row.user_id===user.id).map(row=>[row.key,row.value])),courses,now,{timeZone:user.time_zone}),weekXP:weekly.find(row=>row.user_id===user.id)?.xp||0}));
}
async function leagueRows(client,entry){
 const {start,end}=weekBounds(Date.parse(entry.week+'T12:00:00Z'));
 const {rows}=await client.query(`SELECT u.id,u.username,u.display_name,u.avatar,coalesce(sum(a.xp),0)::integer AS xp
 FROM csquest_league_entries e JOIN csquest_users u ON u.id=e.user_id
 LEFT JOIN csquest_activity_events a ON a.user_id=u.id AND a.created_at>=$4 AND a.created_at<$5
 WHERE e.week=$1 AND e.tier=$2 AND e.cohort=$3 GROUP BY u.id ORDER BY xp DESC,u.username`,[entry.week,entry.tier,entry.cohort,start,end]);
 return ranked(rows.map(row=>({...identity(row),xp:row.xp})));
}
export async function ensureLeague(pool,userId,now=Date.now()){
 const bounds=weekBounds(now);
 return transaction(pool,async client=>{
  const profile=(await client.query('SELECT * FROM csquest_social_profiles WHERE user_id=$1 FOR UPDATE',[userId])).rows[0];
  if(!profile?.league_enabled)return null;
  const current=(await client.query('SELECT *,week::text AS week FROM csquest_league_entries WHERE user_id=$1 AND week=$2',[userId,bounds.week])).rows[0];
  if(current)return current;
  let tier=profile.tier;
  const previous=(await client.query('SELECT e.*,e.week::text AS week FROM csquest_league_entries e WHERE e.user_id=$1 AND e.week<$2 ORDER BY e.week DESC LIMIT 1',[userId,bounds.week])).rows[0];
  if(previous&&!previous.settled){
   const board=await leagueRows(client,previous),self=board.find(row=>row.id===userId);
   tier=previous.tier;
   if(board.length>=5&&self){
    if(self.xp>0&&self.rank<=Math.ceil(board.length*.2))tier=Math.min(4,tier+1);
    else if(self.rank>Math.floor(board.length*.8))tier=Math.max(0,tier-1);
   }
   await client.query('UPDATE csquest_league_entries SET settled=true WHERE user_id=$1 AND week=$2',[userId,previous.week]);
   await client.query('UPDATE csquest_social_profiles SET tier=$2 WHERE user_id=$1',[userId,tier]);
  }
  await client.query('SELECT pg_advisory_xact_lock(hashtextextended($1,0))',[`csquest:league:${bounds.week}:${tier}`]);
  const last=(await client.query('SELECT cohort,count(*)::integer AS size FROM csquest_league_entries WHERE week=$1 AND tier=$2 GROUP BY cohort ORDER BY cohort DESC LIMIT 1',[bounds.week,tier])).rows[0];
  const cohort=!last?1:last.size>=30?last.cohort+1:last.cohort;
  return (await client.query('INSERT INTO csquest_league_entries(user_id,week,tier,cohort) VALUES($1,$2,$3,$4) RETURNING *,week::text AS week',[userId,bounds.week,tier,cohort])).rows[0];
 });
}
async function challenge(client,id,actorId,now){
 const row=(await client.query(`SELECT c.*,m.state AS my_state FROM csquest_challenges c JOIN csquest_challenge_members m ON m.challenge_id=c.id WHERE c.id=$1 AND m.user_id=$2`,[id,actorId])).rows[0];
 if(!row)fail(404,'Challenge not found.');
 const {rows}=await client.query(`SELECT u.id,u.username,u.display_name,u.avatar,m.state,coalesce(sum(a.xp),0)::integer AS xp
 FROM csquest_challenge_members m JOIN csquest_users u ON u.id=m.user_id
 LEFT JOIN csquest_activity_events a ON a.user_id=m.user_id AND a.created_at>=greatest($2::timestamptz,m.joined_at)
 AND a.created_at<least($3::timestamptz,coalesce(m.left_at,$3::timestamptz)) AND m.joined_at IS NOT NULL
 WHERE m.challenge_id=$1 GROUP BY u.id,m.state ORDER BY xp DESC,u.username`,[id,row.starts_at,row.ends_at]);
 const participants=ranked(rows.map(value=>({...identity(value),state:value.state,xp:value.xp}))),total=participants.reduce((sum,value)=>sum+value.xp,0);
 const completed=new Date(row.ends_at).getTime()<=now;
 return {id:row.id,title:row.title,mode:row.mode,goal:row.goal,creatorId:row.creator_id,startsAt:row.starts_at,endsAt:row.ends_at,state:row.cancelled?'cancelled':completed?'completed':'active',myState:row.my_state,participants,total,progress:Math.min(100,Math.floor(total/row.goal*100)),achieved:row.mode==='team'&&total>=row.goal,winners:completed&&row.mode==='race'?participants.filter(value=>['joined','left'].includes(value.state)&&value.xp>0&&value.rank===1).map(value=>value.id):[]};
}

export async function handleSocial({store,actor,req,url,send,courses,now=Date.now()}){
 if(!url.pathname.startsWith('/api/social/'))return false;
 try{
  const action=url.pathname.slice('/api/social/'.length),write=req.method==='POST';
  if(!write&&req.method!=='GET')fail(405,'Method not allowed');
  if(write)assertSameOrigin(req);
  const body=write?await readBody(req):{},pool=store.pool,id=actor.id;
  let result;
  if(action==='overview'&&!write){
   const relations=(await pool.query(`SELECT f.*,u.id,u.username,u.display_name,u.avatar FROM csquest_friendships f
    JOIN csquest_users u ON u.id=CASE WHEN f.user_low=$1 THEN f.user_high ELSE f.user_low END WHERE f.user_low=$1 OR f.user_high=$1 ORDER BY f.created_at DESC`,[id])).rows;
   const profile=(await pool.query('SELECT discoverable,league_enabled AS "leagueEnabled",tier FROM csquest_social_profiles WHERE user_id=$1',[id])).rows[0];
   const friends=await summaries(pool,relations.filter(row=>row.status==='accepted').map(row=>row.id),courses,now);
   const self=(await summaries(pool,[id],courses,now))[0];
   const requests=relations.filter(row=>row.status==='pending').map(row=>({...identity(row),direction:row.requested_by===id?'outgoing':'incoming'}));
   const notifications=(await pool.query(`SELECT n.id,n.kind,n.read_at AS "readAt",n.created_at AS "createdAt",n.challenge_id AS "challengeId",u.display_name AS "actorName",u.username AS "actorUsername" FROM csquest_social_notifications n LEFT JOIN csquest_users u ON u.id=n.actor_id WHERE n.user_id=$1 ORDER BY n.created_at DESC LIMIT 30`,[id])).rows;
   const challenges=[];
   for(const row of (await pool.query(`SELECT m.challenge_id FROM csquest_challenge_members m JOIN csquest_challenges c ON c.id=m.challenge_id WHERE m.user_id=$1 AND m.state!='declined' ORDER BY c.ends_at DESC LIMIT 20`,[id])).rows)challenges.push(await challenge(pool,row.challenge_id,id,now));
   const ids=friends.map(friend=>friend.id);
   const feed=(await pool.query(`SELECT u.id,u.username,u.display_name,u.avatar,a.course_id AS "courseId",sum(a.xp)::integer AS xp,date_trunc('day',a.created_at) AS day FROM csquest_activity_events a JOIN csquest_users u ON u.id=a.user_id WHERE a.user_id=ANY($1::uuid[]) AND a.created_at>=$2 GROUP BY u.id,a.course_id,date_trunc('day',a.created_at) ORDER BY day DESC,xp DESC LIMIT 12`,[ids,new Date(now-7*86400000).toISOString()])).rows.map(row=>({...identity(row),courseId:row.courseId,xp:row.xp,day:row.day}));
   result={self,profile,friends,requests,notifications,challenges,feed,week:weekBounds(now),leagues:LEAGUES};
  }else if(action==='search'&&!write){
   const query=(url.searchParams.get('q')||'').trim().toLowerCase();
   if(!/^[a-z0-9_]{3,32}$/.test(query))fail(400,'Enter at least 3 letters, numbers or underscores.');
   const rows=(await pool.query(`SELECT u.id,u.username,u.display_name,u.avatar,f.status,f.requested_by FROM csquest_users u
    JOIN csquest_social_profiles p ON p.user_id=u.id AND p.discoverable
    LEFT JOIN csquest_friendships f ON f.user_low=least(u.id,$1::uuid) AND f.user_high=greatest(u.id,$1::uuid)
    WHERE u.id!=$1 AND u.username LIKE $2 ORDER BY (u.username=$3) DESC,u.username LIMIT 20`,[id,query.replaceAll('_','\\_')+'%',query])).rows;
   result={learners:rows.map(row=>({...identity(row),relationship:row.status==='accepted'?'friend':row.status==='pending'?row.requested_by===id?'outgoing':'incoming':'none'}))};
  }else if(action==='friends/request'&&write){
   const target=uuid(body.userId);if(target===id)fail(400,'You cannot add yourself.');
   result=await transaction(pool,async client=>{
    const targetProfile=(await client.query('SELECT user_id FROM csquest_social_profiles WHERE user_id=$1 AND discoverable',[target])).rows[0];
    if(!targetProfile)fail(404,'Learner is not available for friend requests.');
    await client.query('SELECT pg_advisory_xact_lock(hashtextextended($1,0))',['csquest:friend:'+pair(id,target).join(':')]);
    if(await friendship(client,id,target))fail(409,'You already have a friendship or pending request with this learner.');
    await client.query("INSERT INTO csquest_friendships(user_low,user_high,requested_by,status) VALUES($1,$2,$3,'pending')",[...pair(id,target),id]);
    await notify(client,target,id,'friend-request');return {ok:true};
   });
  }else if(action==='friends/respond'&&write){
   const target=uuid(body.userId);if(!['accept','decline','cancel','remove'].includes(body.response))fail(400,'Choose a valid friend action.');
   result=await transaction(pool,async client=>{
    const row=(await client.query('SELECT * FROM csquest_friendships WHERE user_low=$1 AND user_high=$2 FOR UPDATE',pair(id,target))).rows[0];
    if(!row)fail(404,'Friend request not found.');
    const incoming=row.status==='pending'&&row.requested_by!==id;
    if((['accept','decline'].includes(body.response)&&!incoming)||(body.response==='cancel'&&(row.status!=='pending'||row.requested_by!==id))||(body.response==='remove'&&row.status!=='accepted'))fail(403,'This friend action is not available.');
    if(body.response==='accept'){await client.query("UPDATE csquest_friendships SET status='accepted' WHERE user_low=$1 AND user_high=$2",pair(id,target));await notify(client,target,id,'friend-accepted');}
    else await client.query('DELETE FROM csquest_friendships WHERE user_low=$1 AND user_high=$2',pair(id,target));
    return {ok:true};
   });
  }else if(action==='compare'&&!write){
   const target=uuid(url.searchParams.get('userId'));
   if(target!==id&&(await friendship(pool,id,target))?.status!=='accepted')fail(403,'Accept a friend request before comparing learning progress.');
   result={learners:await summaries(pool,[id,target],courses,now)};
  }else if(action==='settings'&&write){
   if(!Object.keys(body).length||Object.keys(body).some(key=>!['discoverable','leagueEnabled','timeZone'].includes(key))||['discoverable','leagueEnabled'].some(key=>key in body&&typeof body[key]!=='boolean'))fail(400,'Choose valid social preferences.');
   if('timeZone' in body){try{if(typeof body.timeZone!=='string'||body.timeZone.length>80)throw Error();new Intl.DateTimeFormat('en',{timeZone:body.timeZone});}catch{fail(400,'Choose a valid time zone.');}}
   await pool.query('UPDATE csquest_social_profiles SET discoverable=coalesce($2,discoverable),league_enabled=coalesce($3,league_enabled),time_zone=coalesce($4,time_zone) WHERE user_id=$1',[id,body.discoverable??null,body.leagueEnabled??null,body.timeZone??null]);
   if(body.leagueEnabled)await ensureLeague(pool,id,now);
   result={ok:true};
  }else if(action==='leaderboard'&&!write){
   const scope=url.searchParams.get('scope')||'friends';if(!['friends','community','league'].includes(scope))fail(400,'Choose a leaderboard.');
   const bounds=weekBounds(now);
   if(scope==='league'){
    const entry=await ensureLeague(pool,id,now),rows=entry?await leagueRows(pool,entry):[];
    result={scope,week:bounds,rows,myRank:rows.find(row=>row.id===id)?.rank??null,tier:entry?.tier??null,cohort:entry?.cohort??null,league:entry?LEAGUES[entry.tier]:null,eligible:rows.length>=5,promoteCount:rows.length>=5?Math.ceil(rows.length*.2):0,demoteCount:rows.length>=5?Math.ceil(rows.length*.2):0};
   }else{
    const ids=scope==='friends'?[id,...await friendIds(pool,id)]:null;
    const {rows}=await pool.query(`WITH scores AS (SELECT u.id,u.username,u.display_name,u.avatar,coalesce(sum(a.xp),0)::integer AS xp
     FROM csquest_users u JOIN csquest_social_profiles p ON p.user_id=u.id
     LEFT JOIN csquest_activity_events a ON a.user_id=u.id AND a.created_at>=$2 AND a.created_at<$3
     WHERE ($1::uuid[] IS NOT NULL AND u.id=ANY($1::uuid[])) OR ($1::uuid[] IS NULL AND p.league_enabled)
     GROUP BY u.id),ranked_scores AS (SELECT *,rank() OVER(ORDER BY xp DESC)::integer AS rank,row_number() OVER(ORDER BY xp DESC,username) AS position FROM scores)
     SELECT * FROM ranked_scores WHERE position<=100 OR id=$4 ORDER BY xp DESC,username`,[ids,bounds.start,bounds.end,id]);
    result={scope,week:bounds,rows:rows.map(row=>({...identity(row),xp:row.xp,rank:row.rank})),myRank:rows.find(row=>row.id===id)?.rank??null};
   }
  }else if(action==='challenges/create'&&write){
   const title=typeof body.title==='string'?body.title.trim():'';
   if(!title||title.length>80||!['race','team'].includes(body.mode)||![1,3,7].includes(body.days)||!Number.isInteger(body.goal)||body.goal<100||body.goal>10000||!Array.isArray(body.friendIds)||!body.friendIds.length||body.friendIds.length>10)fail(400,'Choose a title, race or shared goal, 1–7 days, 100–10,000 XP and 1–10 friends.');
   const targets=[...new Set(body.friendIds.map(uuid))];
   result=await transaction(pool,async client=>{
    const accepted=await friendIds(client,id);if(targets.some(target=>!accepted.includes(target)))fail(403,'Invite accepted friends only.');
    const challengeId=randomUUID();
    await client.query('INSERT INTO csquest_challenges(id,creator_id,title,mode,goal,starts_at,ends_at) VALUES($1,$2,$3,$4,$5,$6,$7)',[challengeId,id,title,body.mode,body.goal,new Date(now),new Date(now+body.days*86400000)]);
    await client.query("INSERT INTO csquest_challenge_members(challenge_id,user_id,state,joined_at) VALUES($1,$2,'joined',$3)",[challengeId,id,new Date(now)]);
    for(const target of targets){await client.query("INSERT INTO csquest_challenge_members(challenge_id,user_id,state) VALUES($1,$2,'invited')",[challengeId,target]);await notify(client,target,id,'challenge-invite',challengeId);}
    return await challenge(client,challengeId,id,now);
   });
  }else if(action==='challenges/respond'&&write){
   const challengeId=uuid(body.challengeId);if(!['join','decline','leave','cancel'].includes(body.response))fail(400,'Choose a valid challenge action.');
   result=await transaction(pool,async client=>{
    const row=(await client.query(`SELECT c.*,m.state FROM csquest_challenges c JOIN csquest_challenge_members m ON m.challenge_id=c.id WHERE c.id=$1 AND m.user_id=$2 FOR UPDATE OF c,m`,[challengeId,id])).rows[0];
    if(!row)fail(404,'Challenge not found.');
    if(row.cancelled||new Date(row.ends_at).getTime()<=now)fail(409,'This challenge has ended.');
    if(body.response==='cancel'){
     if(row.creator_id!==id)fail(403,'Only the creator can cancel a challenge.');await client.query('UPDATE csquest_challenges SET cancelled=true WHERE id=$1',[challengeId]);
    }else{
     if((['join','decline'].includes(body.response)&&row.state!=='invited')||(body.response==='leave'&&row.state!=='joined'))fail(409,'This challenge action is not available.');
     if(body.response==='join')await client.query("UPDATE csquest_challenge_members SET state='joined',joined_at=$3 WHERE challenge_id=$1 AND user_id=$2",[challengeId,id,new Date(now)]);
     else await client.query('UPDATE csquest_challenge_members SET state=$3,left_at=$4 WHERE challenge_id=$1 AND user_id=$2',[challengeId,id,body.response==='leave'?'left':'declined',new Date(now)]);
    }
    return {ok:true};
   });
  }else if(action==='challenges/detail'&&!write){result=await challenge(pool,uuid(url.searchParams.get('id')),id,now);
  }else if(action==='notifications/read'&&write){await pool.query('UPDATE csquest_social_notifications SET read_at=now() WHERE user_id=$1 AND read_at IS NULL',[id]);result={ok:true};
  }else fail(404,'Social action not found.');
  send(200,result);
 }catch(error){if(!error.status)console.error('Social request failed:',error.code||error.name);send(error.status||503,{error:error.status?error.message:'Social features are temporarily unavailable. Please try again.'});}
 return true;
}
