import fs from 'node:fs/promises';
import path from 'node:path';
import {randomUUID,createHash} from 'node:crypto';
import {pipeline} from 'node:stream/promises';
import {readBody,assertSameOrigin} from './accounts.mjs';
import {transaction} from './database.mjs';
import {byteRange} from './podcasts.mjs';
import {libraryDrives,inspectDrive,measureLibraryDrive,openLibraryFile,libraryError,CHUNK_BYTES} from './storage.mjs';

const fail=(status,message)=>{throw libraryError(status,message);};
const uuid=value=>typeof value==='string'&&/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value);
const filename=value=>{if(typeof value!=='string'||!value.trim()||value.length>200||/[\x00-\x1f\x7f/\\]/.test(value)||['.','..'].includes(value.trim()))fail(400,'Use a name of 1–200 characters without slashes or control characters.');return value.trim();};
const publicEntry=e=>({id:e.id,drive:e.drive,parent:e.parent_id,name:e.name,kind:e.kind,size:Number(e.size),uploaded:Number(e.uploaded),status:e.status,createdAt:e.created_at,updatedAt:e.updated_at});
const types={'.mp4':'video/mp4','.mkv':'video/x-matroska','.webm':'video/webm','.ogv':'video/ogg','.mov':'video/quicktime','.mp3':'audio/mpeg','.m4a':'audio/mp4','.aac':'audio/aac','.ogg':'audio/ogg','.opus':'audio/ogg','.wav':'audio/wav','.flac':'audio/flac'};
export function createLibrary({pool,drives=libraryDrives(),ownerId=process.env.LIBRARY_OWNER_ID,inspect=inspectDrive}={}){
 const rows=async(db,drive)=>(await db.query('SELECT * FROM csquest_library_entries WHERE drive=$1',[drive])).rows;
 const get=async(db,id,owner)=>{
  if(!uuid(id))fail(400,'Invalid file or folder ID.');
  const entry=(await db.query('SELECT * FROM csquest_library_entries WHERE id=$1 AND owner_id=$2',[id,owner])).rows[0];
  if(!entry)fail(404,'File or folder not found.');return entry;
 };
 const parent=async(db,id,drive,owner)=>{if(!id)return null;const e=await get(db,id,owner);if(e.kind!=='folder'||e.status!=='ready'||e.drive!==drive)fail(400,'Choose a folder on this drive.');return e.id;};
 // A single lock also protects local roots that share one physical filesystem.
 const lock=db=>db.query("SELECT pg_advisory_xact_lock(hashtextextended('csquest:library:storage',0))");
 async function measure(db,drive){
  return measureLibraryDrive(drive,drives,(await db.query('SELECT * FROM csquest_library_entries')).rows,inspect);
 }
 async function resumeChecks(entry,drive){
  const size=Number(entry.uploaded);if(!size)return [];
  const handle=await openLibraryFile(drive,entry.id);
  try{
   if((await handle.stat()).size<size)fail(409,'Upload data is missing or shortened. Cancel this transfer and upload the original file again.');
   const ranges=[{start:0,length:Math.min(size,CHUNK_BYTES)}];
   if(size>CHUNK_BYTES)ranges.push({start:size-Math.min(size,CHUNK_BYTES),length:Math.min(size,CHUNK_BYTES)});
   for(const range of ranges){
    const data=Buffer.alloc(range.length);let read=0;
    while(read<data.length){const result=await handle.read(data,read,data.length-read,range.start+read);if(!result.bytesRead)fail(409,'Upload data changed. Cancel this transfer and retry.');read+=result.bytesRead;}
    range.sha256=createHash('sha256').update(data).digest('hex');
   }
   return ranges;
  }finally{await handle.close();}
 }
 async function cleanup(db,drive,entries){
  for(const e of entries.filter(e=>e.status==='deleting'||e.status==='uploading'&&new Date(e.expires_at).getTime()<Date.now())){
   if(e.kind==='file')await fs.unlink(path.join(drive.root,e.id)).catch(error=>{if(error.code!=='ENOENT')throw error;});
   await db.query('DELETE FROM csquest_library_entries WHERE id=$1',[e.id]);
  }
 }
 return async function handleLibrary({req,res,url,send,actor}){
  if(!url.pathname.startsWith('/api/library/'))return false;
  try{
   if(!ownerId||actor.id!==ownerId)fail(403,'This private library is available to the platform owner.');
   const route=url.pathname.slice('/api/library/'.length);
   const methods={storage:['GET'],uploads:['GET'],details:['GET'],list:['GET'],folders:['GET'],folder:['POST'],move:['POST'],prepare:['POST'],upload:['GET','POST'],chunk:['PUT'],complete:['POST'],cancel:['POST'],rename:['POST'],delete:['POST'],file:['GET','HEAD']};
   if(!methods[route])fail(404,'Library action not found.');
   if(!methods[route].includes(req.method))fail(405,'Method not allowed.');
   if(!['GET','HEAD'].includes(req.method))assertSameOrigin(req);
   if(route==='storage'){
    const volumes=[];
    for(const drive of drives){
     try{
      const volume=await transaction(pool,async db=>{
       await lock(db);
       await inspect(drive);await cleanup(db,drive,await rows(db,drive.id));
       return measure(db,drive);
      });volumes.push(volume);
     }catch(error){console.error('Library drive unavailable:',drive.id,error.code||error.message);volumes.push({id:drive.id,name:drive.name,quota:drive.quota,online:false,error:'Drive unavailable. Check its mount and service permissions.'});}
    }
    const shared=volumes.length===2&&volumes.every(v=>v.online)&&volumes[0].device===volumes[1].device;
    send(200,{drives:volumes.map(({device,...v})=>({...v,shared})),checkedAt:new Date().toISOString(),chunkBytes:CHUNK_BYTES});return true;
   }
   if(route==='uploads'){
    const pending=(await pool.query("SELECT * FROM csquest_library_entries WHERE owner_id=$1 AND status='uploading' AND expires_at>now() ORDER BY created_at",[actor.id])).rows.map(publicEntry);
    send(200,{uploads:pending});return true;
   }
   if(route==='upload'&&req.method==='GET'){
    const entry=await get(pool,url.searchParams.get('id'),actor.id);
    if(entry.kind!=='file')fail(400,'Choose an uploaded file.');
    if(entry.status!=='uploading'&&entry.status!=='ready')fail(404,'Upload is no longer available.');
    const drive=drives.find(d=>d.id===entry.drive);await inspect(drive);
    send(200,{...publicEntry(entry),chunkBytes:CHUNK_BYTES,resumeChecks:entry.status==='uploading'?await resumeChecks(entry,drive):[]});return true;
   }
   if(route==='details'){
    const entry=await get(pool,url.searchParams.get('id'),actor.id);
    if(entry.status!=='ready')fail(404,'File or folder is not ready.');
    const drive=drives.find(d=>d.id===entry.drive);await inspect(drive);
    const location=[];let ancestor=entry.parent_id;
    for(let depth=0;ancestor;depth++){if(depth>=100)fail(409,'Folder structure is invalid.');const p=await get(pool,ancestor,actor.id);location.unshift(p.name);ancestor=p.parent_id;}
    const detail={...publicEntry(entry),driveName:drive.name,location,extension:entry.kind==='file'?path.extname(entry.name).toLowerCase():null,mediaType:types[path.extname(entry.name).toLowerCase()]||null};
    if(entry.kind==='file'){
     const handle=await openLibraryFile(drive,entry.id);
     try{const stat=await handle.stat();if(stat.size!==Number(entry.size))fail(409,'Stored file size does not match its inventory.');detail.fileModifiedAt=stat.mtime.toISOString();detail.sizeOnDisk=Number.isFinite(stat.blocks)&&stat.blocks>0?stat.blocks*512:null;}finally{await handle.close();}
    }else{
     const children=(await pool.query("SELECT kind,count(*)::int AS count FROM csquest_library_entries WHERE parent_id=$1 AND owner_id=$2 AND status='ready' GROUP BY kind",[entry.id,actor.id])).rows;
     detail.fileCount=children.find(r=>r.kind==='file')?.count||0;detail.folderCount=children.find(r=>r.kind==='folder')?.count||0;
    }
    send(200,detail);return true;
   }
   if(route==='file'){
    const e=await get(pool,url.searchParams.get('id'),actor.id);
    if(e.kind!=='file'||e.status!=='ready')fail(404,'File is not ready.');
    const drive=drives.find(d=>d.id===e.drive);await inspect(drive);
    const file=await openLibraryFile(drive,e.id),stat=await file.stat(),size=stat.size;
    if(size!==Number(e.size)){await file.close();fail(409,'Stored file size does not match its inventory.');}
    const etag='"'+e.id+'-'+size+'"';
    const range=byteRange(!req.headers['if-range']||req.headers['if-range']===etag?req.headers.range:null,size);
    const type=types[path.extname(e.name).toLowerCase()],download=url.searchParams.get('download')==='1'||!type;
    const headers={'Content-Type':download?'application/octet-stream':type,'Accept-Ranges':'bytes','Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff',ETag:etag,'Content-Disposition':`${download?'attachment':'inline'}; filename="download"; filename*=UTF-8''${encodeURIComponent(e.name).replace(/[!'()*]/g,c=>'%'+c.charCodeAt(0).toString(16))}`};
    if(range===false){await file.close();res.writeHead(416,{...headers,'Content-Range':`bytes */${size}`});res.end();return true;}
    const start=range?.start??0,end=range?.end??size-1;
    res.writeHead(range?206:200,{...headers,'Content-Length':Math.max(0,end-start+1),...(range?{'Content-Range':`bytes ${start}-${end}/${size}`}:{})});
    if(req.method==='HEAD'||!size){await file.close();res.end();return true;}
    try{await pipeline(file.createReadStream({start,end}),res);}catch{res.destroy();}return true;
   }
   if(route==='folders'){
    const drive=drives.find(d=>d.id===url.searchParams.get('drive'));if(!drive)fail(400,'Choose a drive.');await inspect(drive);
    const folders=(await pool.query("SELECT * FROM csquest_library_entries WHERE owner_id=$1 AND drive=$2 AND kind='folder' AND status='ready' ORDER BY lower(name)",[actor.id,drive.id])).rows.map(publicEntry);
    send(200,{folders});return true;
   }
   if(route==='list'){
    const drive=drives.find(d=>d.id===url.searchParams.get('drive'));if(!drive)fail(400,'Choose a drive.');await inspect(drive);
    const folder=await parent(pool,url.searchParams.get('parent'),drive.id,actor.id),breadcrumbs=[];
    let ancestor=folder;
    for(let depth=0;ancestor;depth++){
     if(depth>=100)fail(400,'Folder nesting limit reached.');const e=await get(pool,ancestor,actor.id);breadcrumbs.unshift({id:e.id,name:e.name});ancestor=e.parent_id;
    }
    const entries=(await pool.query("SELECT * FROM csquest_library_entries WHERE owner_id=$1 AND drive=$2 AND parent_id IS NOT DISTINCT FROM $3::uuid AND status='ready' ORDER BY kind DESC,lower(name)",[actor.id,drive.id,folder])).rows.map(publicEntry);
    send(200,{entries,breadcrumbs});return true;
   }
   const body=route==='chunk'?null:await readBody(req);
   const result=await transaction(pool,async db=>{
    let e,drive;
    if(['folder','upload','prepare'].includes(route)){drive=drives.find(d=>d.id===body.drive);if(!drive)fail(400,'Choose a drive.');}
    else{try{e=await get(db,route==='chunk'?url.searchParams.get('id'):body.id,actor.id);}catch(error){if(error.status===404&&['delete','cancel'].includes(route))return {ok:true};throw error;}drive=drives.find(d=>d.id===e.drive);}
    await lock(db);
    await inspect(drive);await cleanup(db,drive,await rows(db,drive.id));
    if(e){try{e=await get(db,e.id,actor.id);}catch(error){if(error.status===404&&['delete','cancel'].includes(route))return {ok:true};throw error;}}
    if(route==='prepare'){
     if(!Array.isArray(body.files)||!body.files.length||body.files.length>100)fail(400,'Select between 1 and 100 files at a time.');
     const folder=await parent(db,body.parent,drive.id,actor.id);
     const files=body.files.map(f=>{if(!f||!Number.isSafeInteger(f.size)||f.size<0)fail(400,'Invalid file size.');return {name:filename(f.name),size:f.size};});
     const total=files.reduce((sum,f)=>sum+f.size,0),usage=await measure(db,drive);
     if(!usage.writable||!Number.isSafeInteger(total)||total>usage.available)fail(507,'The selected files exceed the available library space. No uploads were started.');
     const prepared=[];
     for(const file of files){
      const entry=(await db.query("INSERT INTO csquest_library_entries(id,owner_id,drive,parent_id,name,kind,size,status,expires_at) VALUES($1,$2,$3,$4,$5,'file',$6,'uploading',now()+interval '24 hours') RETURNING *",[randomUUID(),actor.id,drive.id,folder,file.name,file.size])).rows[0];
      prepared.push({...publicEntry(entry),chunkBytes:CHUNK_BYTES});
     }
     return {uploads:prepared};
    }
    if(route==='folder'||route==='upload'){
     const name=filename(body.name),folder=await parent(db,body.parent,drive.id,actor.id),id=randomUUID();
     if(route==='folder'){
      // Bound the depth of the complete tree, not just its displayed breadcrumb.
      let ancestor=folder,depth=0;while(ancestor){if(++depth>=99)fail(400,'Folder nesting limit reached.');ancestor=(await get(db,ancestor,actor.id)).parent_id;}
      const entry=(await db.query("INSERT INTO csquest_library_entries(id,owner_id,drive,parent_id,name,kind) VALUES($1,$2,$3,$4,$5,'folder') RETURNING *",[id,actor.id,drive.id,folder,name])).rows[0];return publicEntry(entry);
     }
     if(!Number.isSafeInteger(body.size)||body.size<0)fail(400,'Invalid file size.');
     const usage=await measure(db,drive);
     if(!usage.writable||body.size>usage.available)fail(507,'This file exceeds the available library space on this drive.');
     const entry=(await db.query("INSERT INTO csquest_library_entries(id,owner_id,drive,parent_id,name,kind,size,status,expires_at) VALUES($1,$2,$3,$4,$5,'file',$6,'uploading',now()+interval '24 hours') RETURNING *",[id,actor.id,drive.id,folder,name,body.size])).rows[0];
     // Inventory commits before any bytes are written. Chunks create the opaque file.
     return {...publicEntry(entry),chunkBytes:CHUNK_BYTES};
    }
    if(route==='chunk'){
     if(e.status!=='uploading')fail(409,'Upload is not active.');
     const offset=Number(url.searchParams.get('offset'));
     if(!url.searchParams.has('offset')||!Number.isSafeInteger(offset)||offset!==Number(e.uploaded))fail(409,'Upload offset changed. Resume from its saved position.');
     const chunks=[];let count=0;
     for await(const chunk of req){count+=chunk.length;if(count>CHUNK_BYTES||offset+count>Number(e.size))fail(413,'Upload chunk is too large.');chunks.push(chunk);}
     if(!count)fail(400,'Upload chunk is empty.');
     const usage=await measure(db,drive);
     if(!usage.writable||usage.free-count<usage.buffer)fail(507,'Upload paused to preserve space for the platform.');
     const location=path.join(drive.root,e.id);
     if(!offset){const fresh=await fs.open(location,'ax',0o600).catch(error=>{if(error.code!=='EEXIST')throw error;return null;});await fresh?.close();}
     const handle=await openLibraryFile(drive,e.id,'r+');
     try{if((await handle.stat()).size<offset)fail(409,'Upload data is missing or shortened. Cancel this transfer and upload the original file again.');await handle.truncate(offset);const data=Buffer.concat(chunks);let written=0;while(written<data.length){const part=await handle.write(data,written,data.length-written,offset+written);written+=part.bytesWritten;}await handle.sync();}finally{await handle.close();}
     await db.query("UPDATE csquest_library_entries SET uploaded=$2,updated_at=now(),expires_at=now()+interval '24 hours' WHERE id=$1",[e.id,offset+count]);
     return {id:e.id,uploaded:offset+count};
    }
    if(route==='complete'){
     if(e.status==='ready')return publicEntry(e);
     if(e.status!=='uploading'||Number(e.uploaded)!==Number(e.size))fail(409,'Upload has not finished.');
     if(Number(e.size)===0){const h=await fs.open(path.join(drive.root,e.id),'ax',0o600).catch(error=>{if(error.code!=='EEXIST')throw error;return null;});await h?.close();}
     const h=await openLibraryFile(drive,e.id,'r+');try{if((await h.stat()).size<Number(e.size))fail(409,'Upload data is missing or shortened. Cancel this transfer and upload the original file again.');await h.truncate(Number(e.size));await h.sync();}finally{await h.close();}
     const entry=(await db.query("UPDATE csquest_library_entries SET status='ready',expires_at=NULL,updated_at=now() WHERE id=$1 RETURNING *",[e.id])).rows[0];return publicEntry(entry);
    }
    if(route==='move'){
     if(e.status!=='ready')fail(409,'Finish the upload first.');
     const target=await parent(db,body.parent,drive.id,actor.id);let ancestor=target,depth=0;
     while(ancestor){if(ancestor===e.id)fail(400,'A folder cannot be moved inside itself or a subfolder.');if(++depth>=99)fail(400,'Folder nesting limit reached.');ancestor=(await get(db,ancestor,actor.id)).parent_id;}
     if(e.kind==='folder'){
      const height=Number((await db.query('WITH RECURSIVE subtree AS (SELECT id,0 AS depth FROM csquest_library_entries WHERE id=$1 UNION ALL SELECT e.id,s.depth+1 FROM csquest_library_entries e JOIN subtree s ON e.parent_id=s.id WHERE e.kind=\'folder\' AND s.depth<100) SELECT max(depth) AS height FROM subtree',[e.id])).rows[0].height);
      if(depth+height>=99)fail(400,'Folder nesting limit reached.');
     }
     const moved=(await db.query('UPDATE csquest_library_entries SET parent_id=$2,updated_at=now() WHERE id=$1 RETURNING *',[e.id,target])).rows[0];return publicEntry(moved);
    }
    if(route==='rename'){
     if(e.status!=='ready')fail(409,'Finish the upload first.');
     const entry=(await db.query('UPDATE csquest_library_entries SET name=$2,updated_at=now() WHERE id=$1 RETURNING *',[e.id,filename(body.name)])).rows[0];return publicEntry(entry);
    }
    if(route==='cancel'&&e.status!=='uploading')fail(409,'Upload is no longer active.');
    if(e.kind==='folder'&&(await db.query('SELECT 1 FROM csquest_library_entries WHERE parent_id=$1 LIMIT 1',[e.id])).rowCount)fail(409,'Empty this folder before deleting it.');
    // A committed tombstone makes filesystem deletion restart-safe.
    await db.query("UPDATE csquest_library_entries SET status='deleting' WHERE id=$1",[e.id]);return {ok:true};
   });
   // Perform tombstone cleanup in a new transaction after the mark is durable.
   if(['cancel','delete'].includes(route)){
    await transaction(pool,async db=>{const e=(await db.query('SELECT * FROM csquest_library_entries WHERE id=$1 AND owner_id=$2',[body.id,actor.id])).rows[0];if(!e)return;const drive=drives.find(d=>d.id===e.drive);await lock(db);await inspect(drive);await cleanup(db,drive,await rows(db,drive.id));});
   }
   send(200,result);
  }catch(error){
   if(res.headersSent){res.destroy();return true;}
   const status=error.status||(error.code==='23505'?409:503);
   if(!error.status&&error.code!=='23505')console.error('Library operation failed:',error.code||error.message);
   send(status,{error:error.status?error.message:error.code==='23505'?'A file or folder with this name already exists.':'Library storage is unavailable. Please refresh and retry.'});
  }
  return true;
 };
}
