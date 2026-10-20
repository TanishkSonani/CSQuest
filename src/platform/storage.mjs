import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createOciObjectStore} from './object-store.mjs';

export const GiB=1024**3;
export const CHUNK_BYTES=8*1024**2;
export const RESUME_CHECK_BYTES=2*1024**2;
export const libraryError=(status,message)=>Object.assign(new Error(message),{status});
const localRoot=fileURLToPath(new URL('../../runtime/library/',import.meta.url));
export function libraryDrives(){
 const production=process.env.NODE_ENV==='production';
 const drives=[
  {id:'boot',name:'Boot storage',root:process.env.LIBRARY_BOOT_ROOT||(production?'/var/lib/csquest-library':path.join(localRoot,'boot')),quota:35*GiB,reserve:5*GiB,production},
  {id:'block',name:'Block storage',root:process.env.LIBRARY_BLOCK_ROOT||(production?'/srv/csquest-data/library':path.join(localRoot,'block')),quota:125*GiB,reserve:15*GiB,production}
 ];
 if(process.env.LIBRARY_OBJECT_BUCKET){
  const quotaGB=Number(process.env.LIBRARY_OBJECT_QUOTA_GB||20);if(!Number.isFinite(quotaGB)||quotaGB<=0||!Number.isSafeInteger(Math.round(quotaGB*1e9)))throw Error('Invalid Object Storage drive quota.');
  const config={bucket:process.env.LIBRARY_OBJECT_BUCKET,namespace:process.env.LIBRARY_OBJECT_NAMESPACE,region:process.env.LIBRARY_OBJECT_REGION,prefix:process.env.LIBRARY_OBJECT_PREFIX,auth:process.env.LIBRARY_OBJECT_AUTH||'config_file',configFile:process.env.LIBRARY_OBJECT_CONFIG_FILE,profile:process.env.LIBRARY_OBJECT_PROFILE||'DEFAULT'};
  if(!config.namespace||!config.region)throw Error('Configure Object Storage namespace and region.');
  drives.push({id:'object',name:'Object storage',kind:'object',bucket:config.bucket,root:process.env.LIBRARY_OBJECT_STAGE_ROOT||(production?path.join(drives[0].root,'.object-stage'):path.join(localRoot,'object-stage')),quota:Math.round(quotaGB*1e9),reserve:0,production,objectStore:createOciObjectStore(config)});
 }
 return drives;
}
// Roots are provisioned explicitly in production. No missing-mount fallback.
export async function inspectDrive(drive,{createLocal=true}={}){
 if(drive.kind==='object'){
  if(createLocal){await fs.mkdir(drive.root,{recursive:true,mode:0o700});const canonical=await fs.realpath(drive.root),root=path.resolve(drive.root);if(process.platform==='win32'?canonical.toLowerCase()!==root.toLowerCase():canonical!==root)throw libraryError(503,'Invalid Object Storage staging root.');}
  await drive.objectStore.inspect();return {total:drive.quota,free:drive.quota,device:'object:'+drive.bucket,kind:'object'};
 }
 if(!drive.production&&createLocal)await fs.mkdir(drive.root,{recursive:true,mode:0o700});
 const root=path.resolve(drive.root),canonical=await fs.realpath(root);
 if(process.platform==='win32'?path.normalize(canonical).toLowerCase()!==root.toLowerCase():canonical!==root)throw libraryError(503,'Library root must not contain symlinks.');
 const info=await fs.lstat(root);
 if(!info.isDirectory()||info.isSymbolicLink())throw libraryError(503,'Library drive is unavailable.');
 if(drive.production){
  if(process.platform!=='linux')throw libraryError(503,'Production library requires verified Linux mounts.');
  const system=await fs.stat('/');
  if(drive.id==='boot'){
   if(info.dev!==system.dev)throw libraryError(503,'Boot library is not on the boot filesystem.');
  }else{
   const block=await fs.stat('/srv/csquest-data');
   if(block.dev===system.dev||info.dev!==block.dev)throw libraryError(503,'Block library volume mount could not be verified.');
  }
 }
 const stat=await fs.statfs(root);
 return {total:Number(stat.blocks)*Number(stat.bsize),free:Number(stat.bavail)*Number(stat.bsize),device:String(info.dev),totalInodes:Number(stat.files),inodesFree:Number(stat.ffree)};
}
export function capacity(drive,disk,entries,sharedPending=0){
 const reserved=entries.filter(e=>e.kind==='file').reduce((n,e)=>n+Number(e.size),0);
 const used=entries.filter(e=>e.kind==='file').reduce((n,e)=>n+Number(e.uploaded),0);
 const pending=Math.max(0,reserved-used),buffer=Math.max(drive.reserve,Math.ceil(disk.total*.1));
 if(drive.kind==='object')return {id:drive.id,name:drive.name,kind:'object',bucket:drive.bucket,quota:drive.quota,used,committed:reserved,pending,sharedPending:0,total:drive.quota,free:Math.max(0,drive.quota-used),buffer:0,writable:true,available:Math.max(0,drive.quota-reserved),device:disk.device,online:true};
 const writable=!(disk.totalInodes>0&&disk.inodesFree===0);
 return {id:drive.id,name:drive.name,quota:drive.quota,used,committed:reserved,pending,sharedPending,total:disk.total,free:disk.free,buffer,writable,available:writable?Math.max(0,Math.min(drive.quota-reserved,disk.free-buffer-pending-sharedPending)):0,device:disk.device,online:true};
}
export async function measureLibraryDrive(drive,drives,inventory,inspect=inspectDrive){
 const disk=await inspect(drive);let sharedPending=0,reserve=drive.reserve;
 if(drive.kind==='object')return capacity(drive,disk,inventory.filter(e=>e.drive===drive.id));
 for(const other of drives.filter(d=>d.id!==drive.id)){
  let sibling;try{sibling=await inspect(other);}catch{continue;}
  if(sibling.device===disk.device){reserve=Math.max(reserve,other.reserve);sharedPending+=inventory.filter(e=>e.drive===other.id&&e.kind==='file').reduce((sum,e)=>sum+Math.max(0,Number(e.size)-Number(e.uploaded)),0);}
 }
 return capacity({...drive,reserve},disk,inventory.filter(e=>e.drive===drive.id),sharedPending);
}
export async function openLibraryFile(drive,id,flags='r'){
 if(!/^[a-f0-9-]{36}$/.test(id))throw libraryError(400,'Invalid file ID.');
 if(drive.kind==='object'){if(flags!=='r')throw libraryError(400,'Object files use multipart uploads.');return drive.objectStore.open(id);}
 const file=path.join(drive.root,id),stat=await fs.lstat(file).catch(error=>{if(error.code==='ENOENT')throw libraryError(409,'The stored file is missing. Restore it from backup, or cancel/delete this entry and upload the original file again.');throw error;});
 if(!stat.isFile()||stat.isSymbolicLink()||stat.nlink!==1)throw libraryError(403,'Invalid library file.');
 // The library root is service-owned and not exposed as a user filesystem.
 const handle=await fs.open(file,flags);
 const opened=await handle.stat();
 if(opened.ino!==stat.ino||opened.dev!==stat.dev){await handle.close();throw libraryError(409,'File changed. Retry the operation.');}
 return handle;
}
