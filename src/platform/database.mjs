import './env.mjs';
import pg from 'pg';
import {freshActivity} from './social-metrics.mjs';

export function createPool(connectionString=process.env.DATABASE_URL,options={}){
 if(!connectionString)throw new Error('Set DATABASE_URL in .env, then run npm run db:migrate and npm run db:import.');
 const pool=new pg.Pool({connectionString,max:8,connectionTimeoutMillis:10000,idleTimeoutMillis:10000,statement_timeout:15000,...options});
 pool.on('error',error=>console.error('PostgreSQL connection interrupted:',error.code||error.name));
 return pool;
}

export async function transaction(pool,task){
 const client=await pool.connect();
 try{await client.query('BEGIN');const result=await task(client);await client.query('COMMIT');return result;}
 catch(error){await client.query('ROLLBACK');throw error;}
 finally{client.release();}
}

const userOf=row=>({id:row.id,username:row.username,displayName:row.display_name,avatar:row.avatar,password:row.password,recoveryHash:row.recovery_hash,createdAt:Number(row.created_at),lastLoginAt:row.last_login_at===null?null:Number(row.last_login_at),revision:row.revision,updatedAt:Number(row.updated_at),data:{}});
const sessionOf=row=>({hash:row.hash,userId:row.user_id,createdAt:Number(row.created_at),expiresAt:Number(row.expires_at)});
export async function saveUser(client,user){
 await client.query(`INSERT INTO csquest_users(id,username,display_name,avatar,password,recovery_hash,created_at,last_login_at,revision,updated_at)
 VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) ON CONFLICT(id) DO UPDATE SET
 display_name=excluded.display_name,avatar=excluded.avatar,password=excluded.password,recovery_hash=excluded.recovery_hash,last_login_at=excluded.last_login_at,revision=excluded.revision,updated_at=excluded.updated_at`,
 [user.id,user.username,user.displayName,user.avatar,user.password,user.recoveryHash,user.createdAt,user.lastLoginAt,user.revision,user.updatedAt]);
 await client.query('INSERT INTO csquest_social_profiles(user_id) VALUES($1) ON CONFLICT(user_id) DO NOTHING',[user.id]);
 const entries=Object.entries(user.data||{});
 await client.query('DELETE FROM csquest_user_data WHERE user_id=$1 AND NOT(key=ANY($2::text[]))',[user.id,entries.map(([key])=>key)]);
 if(entries.length)await client.query(`INSERT INTO csquest_user_data(user_id,key,value)
 SELECT $1,key,value FROM jsonb_each_text($2::jsonb) ON CONFLICT(user_id,key) DO UPDATE SET value=excluded.value`,[user.id,JSON.stringify(user.data)]);
}

export function createStore(pool=createPool()){
 return {
  pool,
  async sessionUser(sessionHash){
   const row=(await pool.query(`SELECT u.id,u.username,u.display_name,u.avatar,u.created_at,u.last_login_at
    FROM csquest_sessions s JOIN csquest_users u ON u.id=s.user_id
    WHERE s.hash=$1 AND s.expires_at>$2`,[sessionHash,Date.now()])).rows[0];
   return row&&{id:row.id,username:row.username,displayName:row.display_name,avatar:row.avatar,createdAt:Number(row.created_at),lastLoginAt:row.last_login_at===null?null:Number(row.last_login_at)};
  },
  async courses(){return (await pool.query('SELECT manifest FROM csquest_courses ORDER BY sort_order,id')).rows.map(row=>row.manifest);},
  async module(courseId,filename){return (await pool.query('SELECT source FROM csquest_course_modules WHERE course_id=$1 AND filename=$2',[courseId,filename])).rows[0]?.source;},
  async document(courseId,path){return (await pool.query('SELECT data FROM csquest_course_documents WHERE course_id=$1 AND path=$2',[courseId,path])).rows[0]?.data;},
  async status(courseId){return (await pool.query('SELECT data FROM csquest_course_status WHERE course_id=$1',[courseId])).rows[0]?.data;},
  // Only load and lock the relevant account; unrelated learners remain independent.
  async accounts(task,{username,sessionHash,readOnly=false,scoreLearning=false,courses=[]}={}){
   return transaction(pool,async client=>{
    if(username)await client.query('SELECT pg_advisory_xact_lock(hashtextextended($1,0))',['csquest:username:'+username]);
    let id;
    if(username)id=(await client.query('SELECT id FROM csquest_users WHERE username=$1',[username])).rows[0]?.id;
    else if(sessionHash)id=(await client.query('SELECT user_id FROM csquest_sessions WHERE hash=$1 AND expires_at>$2',[sessionHash,Date.now()])).rows[0]?.user_id;
    const rows=id?(await client.query('SELECT * FROM csquest_users WHERE id=$1 FOR UPDATE',[id])).rows:[];
    const user=rows[0]&&userOf(rows[0]),db={version:1,users:user?[user]:[],sessions:[]};
    if(user){
     user.data=Object.fromEntries((await client.query('SELECT key,value FROM csquest_user_data WHERE user_id=$1',[id])).rows.map(row=>[row.key,row.value]));
     db.sessions=(await client.query('SELECT * FROM csquest_sessions WHERE user_id=$1',[id])).rows.map(sessionOf);
    }
    const previousData=user?structuredClone(user.data):{};
    const result=await task(db);
    if(!readOnly){
     if(user&&!db.users.some(value=>value.id===id))await client.query('DELETE FROM csquest_users WHERE id=$1',[id]);
     for(const value of db.users){
      await saveUser(client,value);
      if(scoreLearning&&user&&value.id===id)for(const event of freshActivity(previousData,value.data,courses))await client.query(`INSERT INTO csquest_activity_events(user_id,course_id,event_key,xp) VALUES($1,$2,$3,$4) ON CONFLICT(user_id,course_id,event_key) DO NOTHING`,[id,event.courseId,event.key,event.xp]);
      const sessions=db.sessions.filter(session=>session.userId===value.id&&session.expiresAt>Date.now());
      await client.query('DELETE FROM csquest_sessions WHERE user_id=$1 AND NOT(hash=ANY($2::text[]))',[value.id,sessions.map(session=>session.hash)]);
      for(const session of sessions)await client.query(`INSERT INTO csquest_sessions(hash,user_id,created_at,expires_at) VALUES($1,$2,$3,$4)
       ON CONFLICT(hash) DO UPDATE SET expires_at=excluded.expires_at`,[session.hash,session.userId,session.createdAt,session.expiresAt]);
     }
    }
    return result;
   });
  },
  async limit(addressHash){
   const now=Date.now(),until=now+15*60000;
   const {rows}=await pool.query(`INSERT INTO csquest_login_attempts(address_hash,count,expires_at) VALUES($1,1,$3)
    ON CONFLICT(address_hash) DO UPDATE SET count=CASE WHEN csquest_login_attempts.expires_at<=$2 THEN 1 ELSE csquest_login_attempts.count+1 END,
    expires_at=CASE WHEN csquest_login_attempts.expires_at<=$2 THEN $3 ELSE csquest_login_attempts.expires_at END RETURNING count`,[addressHash,now,until]);
   return rows[0].count;
  }
 };
}
