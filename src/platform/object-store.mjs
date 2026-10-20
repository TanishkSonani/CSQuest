import {Readable,PassThrough} from 'node:stream';
import {pipeline} from 'node:stream/promises';
import {createHash} from 'node:crypto';

// Object keys are opaque inventory UUIDs. Renaming/moving folders never copies
// multi-GB objects and no caller-controlled path can reach another bucket key.
export function createOciObjectStore(config){
 const prefix=(config.prefix||'csquest-library/').replace(/^\/+|\/+$/g,'')+'/';
 if(!/^[A-Za-z0-9/_-]+\/$/.test(prefix))throw Error('Invalid Library Object Storage prefix.');
 let pendingClient,checkedUntil=0;
 const base={namespaceName:config.namespace,bucketName:config.bucket};
 const key=async id=>{if(!/^[a-f0-9-]{36}$/.test(id))throw Error('Invalid object ID.');return await config.resolveKey?.(id)||prefix+id;};
 async function client(){
  if(!pendingClient)pendingClient=(async()=>{
   const [{default:common},{default:sdk}]=await Promise.all([import('oci-common'),import('oci-objectstorage')]);
   const provider=config.auth==='instance_principal'?await new common.InstancePrincipalsAuthenticationDetailsProviderBuilder().build():new common.ConfigFileAuthenticationDetailsProvider(config.configFile,config.profile||'DEFAULT');
   const c=new sdk.ObjectStorageClient({authenticationDetailsProvider:provider});c.regionId=config.region;return c;
  })().catch(error=>{pendingClient=null;throw error;});return pendingClient;
 }
 async function head(id){try{const r=await(await client()).headObject({...base,objectName:await key(id)});return {size:r.contentLength,mtime:new Date(r.lastModified||Date.now()),etag:r.eTag};}catch(e){if(e.statusCode===404)return null;throw e;}}
 return {
  kind:'oci',bucket:config.bucket,prefix,
  setKeyResolver(resolve){config.resolveKey=resolve;},
  async list(){const c=await client(),objects=[];let start;do{const r=await c.listObjects({...base,fields:'name,size,timeModified',start,limit:1000});objects.push(...r.listObjects.objects);start=r.listObjects.nextStartWith;}while(start);return objects;},
  async exists(objectName){try{await(await client()).headObject({...base,objectName});return true;}catch(e){if(e.statusCode===404)return false;throw e;}},
  async inspect(){if(Date.now()>checkedUntil){await(await client()).headBucket(base);checkedUntil=Date.now()+15000;}return {online:true};},
  head,
  async begin(id){
   const c=await client(),objectName=await key(id);let page;
   do{const r=await c.listMultipartUploads({...base,page});const found=r.items.find(x=>x.object===objectName);if(found)return found.uploadId;page=r.opcNextPage;}while(page);
   return (await c.createMultipartUpload({...base,createMultipartUploadDetails:{object:objectName,contentType:'application/octet-stream'}})).multipartUpload.uploadId;
  },
  async part(id,uploadId,number,data){const r=await(await client()).uploadPart({...base,objectName:await key(id),uploadId,uploadPartNum:number,uploadPartBody:data,contentLength:data.length,contentMD5:createHash('md5').update(data).digest('base64')});return r.eTag;},
  async complete(id,state,size){
   const existing=await head(id);if(existing){if(existing.size!==size)throw Error('Object size does not match its inventory.');return;}
   if(!size){await(await client()).putObject({...base,objectName:await key(id),putObjectBody:Buffer.alloc(0),contentLength:0,ifNoneMatch:'*'});return;}
   await(await client()).commitMultipartUpload({...base,objectName:await key(id),uploadId:state.uploadId,commitMultipartUploadDetails:{partsToCommit:state.parts.map(p=>({partNum:p.number,etag:p.etag}))}});
   if((await head(id))?.size!==size)throw Error('Object size does not match its inventory.');
  },
  async remove(id,state){
   const c=await client(),objectName=await key(id);const ids=new Set(state?.uploadId?[state.uploadId]:[]);
   if(objectName===prefix+id){let page;do{const r=await c.listMultipartUploads({...base,page});for(const u of r.items)if(u.object===objectName)ids.add(u.uploadId);page=r.opcNextPage;}while(page);}
   for(const uploadId of ids)try{await c.abortMultipartUpload({...base,objectName,uploadId});}catch(e){if(e.statusCode!==404)throw e;}
   try{await c.deleteObject({...base,objectName});}catch(e){if(e.statusCode!==404)throw e;}
  },
  async open(id){const info=await head(id);if(!info)throw Object.assign(Error('The stored object is missing.'),{status:409});return {
   stat:async()=>({...info,blocks:null}),close:async()=>{},
   createReadStream({start=0,end=info.size-1}={}){
    if(!info.size)return Readable.from([]);
    let source;const output=new PassThrough({highWaterMark:1024**2});output.on('close',()=>source?.destroy());
    (async()=>{const {default:common}=await import('oci-common');const r=await(await client()).getObject({...base,objectName:await key(id),range:new common.Range(start,end,null)});source=r.value instanceof Readable?r.value:Readable.fromWeb(r.value);if(output.destroyed){source.destroy();return;}await pipeline(source,output);})().catch(e=>output.destroy(e));return output;
   }
  };}
 };
}
