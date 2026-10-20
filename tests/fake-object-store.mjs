import {randomUUID,createHash} from 'node:crypto';
import {Readable} from 'node:stream';
export function fakeObjectStore(initial={}){
 const objects=new Map(Object.entries(initial).map(([key,data])=>[key,Buffer.from(data)])),uploads=new Map();let resolveKey;
 const prefix='csquest-library/',key=async id=>await resolveKey?.(id)||prefix+id;
 return {
  objects,uploads,prefix,partWrites:0,failNextCommit:false,
  setKeyResolver(fn){resolveKey=fn;},inspect:async()=>({online:true}),
  list:async()=>[...objects].map(([name,data])=>({name,size:data.length,timeModified:new Date()})),exists:async name=>objects.has(name),
  async begin(id){const found=[...uploads].find(([,u])=>u.id===id);if(found)return found[0];const uploadId=randomUUID();uploads.set(uploadId,{id,parts:new Map()});return uploadId;},
  async part(id,uploadId,number,data){this.partWrites++;uploads.get(uploadId).parts.set(number,Buffer.from(data));return createHash('md5').update(data).digest('hex');},
  async complete(id,state,size){const objectKey=await key(id);if(objects.has(objectKey))return;objects.set(objectKey,size?Buffer.concat(state.parts.map(p=>uploads.get(state.uploadId).parts.get(p.number))):Buffer.alloc(0));uploads.delete(state.uploadId);if(this.failNextCommit){this.failNextCommit=false;throw Error('Simulated lost commit response');}},
  async remove(id,state){objects.delete(await key(id));if(state?.uploadId)uploads.delete(state.uploadId);for(const [uid,u] of uploads)if(u.id===id)uploads.delete(uid);},
  async open(id){const data=objects.get(await key(id));if(!data)throw Object.assign(Error('Object missing'),{status:409});return {stat:async()=>({size:data.length,mtime:new Date(),blocks:null}),close:async()=>{},createReadStream:({start=0,end=data.length-1}={})=>Readable.from([data.subarray(start,end+1)])};}
 };
}
