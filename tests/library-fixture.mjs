import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {randomUUID,randomBytes,createHash} from 'node:crypto';
import {testStore} from './database-helper.mjs';
import {createServer} from '../src/platform/server.mjs';
import {inspectDrive} from '../src/platform/storage.mjs';

export async function libraryFixture(t,{shared=false,quota=8*1024**2,free=100*1024**2,total=100*1024**2,courses=false,objectStore,remoteBroker}={}){
 const db=await testStore({courses}),directory=await fs.mkdtemp(path.join(os.tmpdir(),'csquest-library-edges-')),ownerId=randomUUID(),token=randomBytes(32).toString('hex'),now=Date.now();
 await db.store.pool.query("INSERT INTO csquest_users(id,username,display_name,avatar,password,recovery_hash,created_at,revision,updated_at) VALUES($1,'edge_owner','Edge owner','chip',$2,$3,$4,0,$4)",[ownerId,{salt:'0'.repeat(32),hash:'0'.repeat(128)},'0'.repeat(64),now]);
 await db.store.pool.query('INSERT INTO csquest_sessions(hash,user_id,created_at,expires_at) VALUES($1,$2,$3,$4)',[createHash('sha256').update(token).digest('hex'),ownerId,now,now+86400000]);
 const drives=['boot','block'].map(id=>({id,name:id+' storage',root:path.join(directory,id),quota,reserve:0}));
 if(objectStore)drives.push({id:'object',name:'Object storage',kind:'object',bucket:'QA bucket',root:path.join(directory,'object-stage'),quota:20e9,reserve:0,objectStore});
 const disk={free,total,shared,online:true},servers=[];
 const inspect=async drive=>{if(!disk.online)throw Error('simulated offline volume');const measured=await inspectDrive(drive);if(drive.kind==='object')return measured;return {total:disk.total,free:disk.free,device:disk.shared?'shared':drive.id,inodesFree:disk.inodesFree,totalInodes:disk.totalInodes};};
 const options={ownerId,drives,inspect};
 async function start(){const server=createServer({store:db.store,libraryOptions:options,remoteBroker});servers.push(server);await new Promise(r=>server.listen(0,'127.0.0.1',r));return `http://127.0.0.1:${server.address().port}`;}
 const base=await start();
 const req=(route,body,{method,headers={},at=base,signal}={})=>fetch(at+'/api/library/'+route,{method:method||(body?'POST':'GET'),headers:{cookie:'csquest_session='+token,'X-CSQuest-Request':'1',...(body&&method!=='PUT'?{'Content-Type':'application/json'}:{}),...headers},body:body?(method==='PUT'?body:JSON.stringify(body)):undefined,signal});
 const ok=async response=>{if(response.status!==200)throw Error(response.status+': '+await response.text());return response.json();};
 t.after(async()=>{await Promise.all(servers.map(s=>{s.closeAllConnections();return new Promise(r=>s.close(r));}));await db.dispose();await fs.rm(directory,{recursive:true,force:true});});
 return {db,directory,ownerId,token,drives,disk,options,base,start,req,ok};
}
