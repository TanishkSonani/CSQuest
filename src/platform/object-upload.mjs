import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
export const OBJECT_PART_BYTES=16*1024**2;
const checkBytes=2*1024**2;
export async function writeObjectChunk(drive,entry,data,offset){
 const size=Number(entry.size);if(offset+data.length<size&&data.length!==8*1024**2)throw Object.assign(Error('Resume Object Storage uploads using full 8 MB chunks.'),{status:400});
 if(size>OBJECT_PART_BYTES*10000)throw Object.assign(Error('This file exceeds the Object Storage multipart limit.'),{status:413});
 const state=entry.object_upload?structuredClone(entry.object_upload):{uploadId:await drive.objectStore.begin(entry.id),parts:[],checks:[]};
 const durable=state.parts.reduce((n,p)=>n+p.size,0),staged=offset-durable;if(staged<0||staged>=OBJECT_PART_BYTES)throw Object.assign(Error('Object upload state changed. Resume again.'),{status:409});
 const file=path.join(drive.root,entry.id),disk=await fs.statfs(drive.root);if(Number(disk.bavail)*Number(disk.bsize)<OBJECT_PART_BYTES+128*1024**2)throw Object.assign(Error('Upload paused: the temporary staging buffer is full.'),{status:507});
 const fresh=await fs.open(file,'ax',0o600).catch(e=>{if(e.code!=='EEXIST')throw e;return null;});await fresh?.close();
 const before=await fs.lstat(file);if(!before.isFile()||before.isSymbolicLink()||before.nlink!==1)throw Object.assign(Error('Invalid object staging file.'),{status:403});const handle=await fs.open(file,'r+');
 try{
  const after=await handle.stat();if(before.ino!==after.ino||before.dev!==after.dev)throw Object.assign(Error('Staging file changed.'),{status:409});
  if((await handle.stat()).size<staged)throw Object.assign(Error('Upload staging data is missing. Cancel and reselect the file.'),{status:409});
  await handle.truncate(staged);let written=0;while(written<data.length){const r=await handle.write(data,written,data.length-written,staged+written);written+=r.bytesWritten;}await handle.sync();
  const length=staged+data.length;
  if(length===OBJECT_PART_BYTES||offset+data.length===size){const part=Buffer.alloc(length);let read=0;while(read<length){const r=await handle.read(part,read,length-read,read);if(!r.bytesRead)throw Error('Staged object part is incomplete.');read+=r.bytesRead;}const number=state.parts.length+1,etag=await drive.objectStore.part(entry.id,state.uploadId,number,part);state.parts.push({number,etag,size:length});}
  const lengthChecked=Math.min(data.length,checkBytes),tail={start:offset+data.length-lengthChecked,length:lengthChecked,sha256:createHash('sha256').update(data.subarray(data.length-lengthChecked)).digest('hex')};
  if(!offset)state.checks=[{start:0,length:lengthChecked,sha256:createHash('sha256').update(data.subarray(0,lengthChecked)).digest('hex')}];
  state.checks=[state.checks[0],...(state.checks.length>1?[state.checks.at(-1)]:[]),tail].filter((v,i,a)=>a.findIndex(x=>x.start===v.start&&x.length===v.length)===i);
  return state;
 }finally{await handle.close();}
}
export async function completeObjectUpload(drive,entry){
 const size=Number(entry.size),state=entry.object_upload||{parts:[]};if(size&&state.parts.reduce((n,p)=>n+p.size,0)!==size)throw Object.assign(Error('Object parts are incomplete. Resume the upload.'),{status:409});
 await drive.objectStore.complete(entry.id,state,size);
}
