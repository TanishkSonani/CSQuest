import fs from 'node:fs/promises';
import path from 'node:path';
import {randomBytes,randomUUID,createHash,scrypt as derive,timingSafeEqual} from 'node:crypto';
import {promisify} from 'node:util';
import {atomicJson} from './io.mjs';
import {avatarIds} from '../../packages/learning/avatars.js';
const scrypt=promisify(derive),digest=value=>createHash('sha256').update(value).digest('hex');
const fail=(status,message,code)=>{throw Object.assign(new Error(message),{status,code});};
const passwordValid=value=>typeof value==='string'&&value.length>=15&&value.length<=128;
const usernameOf=value=>typeof value==='string'?value.trim().toLowerCase():'';
const profileOf=body=>{
 const displayName=typeof body.displayName==='string'?body.displayName.trim():'';
 if(!displayName||displayName.length>50)fail(400,'Use a display name between 1 and 50 characters.');
 if(!avatarIds.has(body.avatar))fail(400,'Choose an available avatar.');
 return {displayName,avatar:body.avatar};
};
async function hashPassword(password){
 const salt=randomBytes(16).toString('hex');
 const hash=await scrypt(password,salt,64,{N:131072,r:8,p:1,maxmem:192*1024*1024});
 return {salt,hash:hash.toString('hex')};
}
async function verifies(password,stored){
 if(typeof password!=='string'||password.length>128)return false;
 const hash=await scrypt(password,stored.salt,64,{N:131072,r:8,p:1,maxmem:192*1024*1024});
 return timingSafeEqual(hash,Buffer.from(stored.hash,'hex'));
}
async function readBody(req){
 if(!req.headers['content-type']?.startsWith('application/json'))fail(415,'Send JSON data.');
 let bytes=0,chunks=[];
 for await(const chunk of req){bytes+=chunk.length;if(bytes>4*1024*1024)fail(413,'Account data is too large.');chunks.push(chunk);}
 try{const value=JSON.parse(Buffer.concat(chunks).toString('utf8'));if(!value||typeof value!=='object'||Array.isArray(value))throw Error();return value;}catch{fail(400,'Invalid JSON data.');}
}
export function createAccounts({directory,courses}){
 const file=path.join(directory,'accounts.json');let chain=Promise.resolve(),database;
 const keys=new Set(['csquest-subject','csquest-theme','csquest-preferences',...courses.flatMap(c=>[c.storageKey,'csquest-drafts-'+c.id])]);
 const transact=(task,readOnly=false)=>{const job=chain.then(async()=>{
  if(!database){await fs.mkdir(directory,{recursive:true});try{database=JSON.parse(await fs.readFile(file,'utf8'));if(database.version!==1||!Array.isArray(database.users)||!Array.isArray(database.sessions))throw Error('Invalid account database');}catch(e){if(e.code!=='ENOENT')throw e;database={version:1,users:[],sessions:[]};}}
  // Commit only after the operation succeeds. Rejected requests never partly mutate records.
  const working=structuredClone(database),result=await task(working);
  if(!readOnly){await atomicJson(file,working);database=working;}return result;
 });chain=job.catch(()=>{});return job;};
 const publicUser=user=>({id:user.id,username:user.username,displayName:user.displayName,avatar:user.avatar,createdAt:user.createdAt,lastLoginAt:user.lastLoginAt});
 const snapshot=user=>({user:publicUser(user),data:user.data,revision:user.revision,updatedAt:user.updatedAt});
 const tokenOf=req=>{const raw=(req.headers.cookie||'').split(';').map(s=>s.trim()).find(s=>s.startsWith('csquest_session='));return raw?raw.slice('csquest_session='.length):'';};
 const authenticate=(db,req)=>{const session=db.sessions.find(s=>s.hash===digest(tokenOf(req))&&s.expiresAt>Date.now()),user=session&&db.users.find(u=>u.id===session.userId);if(!user)fail(401,'Please log in to your account.','AUTH_REQUIRED');return {user,session};};
 const cookie=(res,token,remember=false)=>res.setHeader('Set-Cookie',`csquest_session=${token}; Path=/; HttpOnly; SameSite=Strict${remember?'; Max-Age=2592000':''}`);
 const clearCookie=res=>res.setHeader('Set-Cookie','csquest_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0');
 const startSession=(db,user,res,remember)=>{const token=randomBytes(32).toString('hex'),now=Date.now();db.sessions=db.sessions.filter(s=>s.expiresAt>now);db.sessions.push({hash:digest(token),userId:user.id,createdAt:now,expiresAt:now+(remember?30:1)*86400000});user.lastLoginAt=now;cookie(res,token,remember);};
 const cleanData=input=>{
  if(!input||typeof input!=='object'||Array.isArray(input))fail(400,'Invalid learning data.');
  const output={};for(const [key,value] of Object.entries(input)){
   if(!keys.has(key)||typeof value!=='string'||value.length>1500000)fail(400,'Invalid learning data field.');
   if(key==='csquest-theme'&&!['light','dark'].includes(value))fail(400,'Invalid theme.');
   if(key==='csquest-subject'&&!courses.some(c=>c.id===value))fail(400,'Unknown subject.');
   if(!['csquest-theme','csquest-subject'].includes(key)){
    let parsed;try{parsed=JSON.parse(value);}catch{fail(400,'Invalid saved learning data.');}
    if(key.endsWith('-quest-v1')&&(!parsed||parsed.version!==1||!Array.isArray(parsed.completed)||!Number.isFinite(parsed.xp)||parsed.xp<0))fail(400,'Invalid course progress.');
    if(key.startsWith('csquest-drafts-')&&!Array.isArray(parsed))fail(400,'Invalid paused rounds.');
    if(key==='csquest-preferences'&&(!parsed||typeof parsed!=='object'||Array.isArray(parsed)))fail(400,'Invalid preferences.');
   }
   output[key]=value;
  }return output;
 };
 const attempts=new Map();
 const limit=req=>{const key=req.socket.remoteAddress||'local',now=Date.now(),record=attempts.get(key);if(record&&record.until>now&&record.count>=20)fail(429,'Too many attempts. Try again in 15 minutes.');attempts.set(key,record&&record.until>now?{...record,count:record.count+1}:{count:1,until:now+15*60000});};
 const unknownPassword={salt:'0'.repeat(32),hash:'0'.repeat(128)};
 const handle=async function(req,res,url,send){
  if(!url.pathname.startsWith('/api/account/'))return false;
  try{
   const route=url.pathname.slice('/api/account/'.length),write=req.method==='POST';
   if(!write&&req.method!=='GET'){send(405,{error:'Method not allowed'});return true;}
   if(write){
    const origin=req.headers.origin;
    if(req.headers['x-csquest-request']!=='1'||(origin&&origin!==`http://${req.headers.host}`)||req.headers['sec-fetch-site']==='cross-site')fail(403,'This request must come from CSQuest.');
   }
   const body=write?await readBody(req):{};
   if(['register','login','recover'].includes(route)&&write)limit(req);
   const result=await transact(async db=>{
    if(route==='session'&&!write){try{const {user}=authenticate(db,req);return snapshot(user);}catch(e){if(e.status!==401)throw e;return {user:null};}}
    if(route==='register'&&write){
     const username=usernameOf(body.username);if(!/^[a-z0-9_]{3,32}$/.test(username))fail(400,'Use 3–32 letters, numbers or underscores for your username.');
     if(!passwordValid(body.password))fail(400,'Use a password or passphrase between 15 and 128 characters.');
     if(db.users.some(u=>u.username===username))fail(409,'That username is already taken.');
     const profile=profileOf({...body,avatar:body.avatar||'chip'}),recoveryCode=randomBytes(18).toString('hex');
     const user={id:randomUUID(),username,...profile,password:await hashPassword(body.password),recoveryHash:digest(recoveryCode),createdAt:Date.now(),lastLoginAt:null,data:cleanData(body.data||{}),revision:0,updatedAt:Date.now()};
     db.users.push(user);startSession(db,user,res,body.remember===true);return {...snapshot(user),recoveryCode};
    }
    if(route==='login'&&write){
     const user=db.users.find(u=>u.username===usernameOf(body.username));
     if(!await verifies(body.password,user?.password||unknownPassword)||!user)fail(401,'Username or password is incorrect.');
     startSession(db,user,res,body.remember===true);return snapshot(user);
    }
    if(route==='recover'&&write){
     const user=db.users.find(u=>u.username===usernameOf(body.username)),code=typeof body.recoveryCode==='string'?body.recoveryCode.trim():'';
     if(!user||!timingSafeEqual(Buffer.from(digest(code),'hex'),Buffer.from(user.recoveryHash,'hex')))fail(401,'Username or recovery code is incorrect.');
     if(!passwordValid(body.password))fail(400,'Use a new passphrase between 15 and 128 characters.');
     user.password=await hashPassword(body.password);const recoveryCode=randomBytes(18).toString('hex');user.recoveryHash=digest(recoveryCode);db.sessions=db.sessions.filter(s=>s.userId!==user.id);startSession(db,user,res,body.remember===true);return {...snapshot(user),recoveryCode};
    }
    const {user,session}=authenticate(db,req);
    if(route==='data'&&write){
     if(body.revision!==user.revision)fail(409,'Your account was updated in another tab or browser. Export your unsaved data before loading the latest account.');
     Object.assign(user.data,cleanData(body.changes));if(JSON.stringify(user.data).length>3*1024*1024)fail(413,'Account data is too large.');
     user.revision++;user.updatedAt=Date.now();return {revision:user.revision,updatedAt:user.updatedAt};
    }
    if(route==='profile'&&write){Object.assign(user,profileOf(body));return {user:publicUser(user)};}
    if(route==='logout'&&write){db.sessions=db.sessions.filter(s=>s.hash!==session.hash);clearCookie(res);return {ok:true};}
    if(route==='export'&&!write)return {format:'csquest-account',version:1,exportedAt:new Date().toISOString(),...snapshot(user)};
    if(['password','recovery-code','logout-all','delete'].includes(route)&&write){
     if(!await verifies(body.password,user.password))fail(401,'Your current password is incorrect.');
     if(route==='password'){
      if(!passwordValid(body.newPassword))fail(400,'Use a new passphrase between 15 and 128 characters.');
      user.password=await hashPassword(body.newPassword);db.sessions=db.sessions.filter(s=>s.userId!==user.id);startSession(db,user,res,body.remember===true);return {ok:true};
     }
     if(route==='recovery-code'){const recoveryCode=randomBytes(18).toString('hex');user.recoveryHash=digest(recoveryCode);return {recoveryCode};}
     if(route==='delete'){if(body.username!==user.username)fail(400,'Type your username to confirm deletion.');db.users=db.users.filter(u=>u.id!==user.id);}
     db.sessions=db.sessions.filter(s=>s.userId!==user.id);clearCookie(res);return {ok:true};
    }
    fail(404,'Account action not found.');
   });send(200,result);
  }catch(e){send(e.status||500,{error:e.status?e.message:'Account storage is unavailable. Your browser copy has been kept.',...(e.code==='AUTH_REQUIRED'?{code:e.code}:{})});}
  return true;
 };
 handle.authorize=req=>transact(db=>{authenticate(db,req);return true;},true);
 return handle;
}
