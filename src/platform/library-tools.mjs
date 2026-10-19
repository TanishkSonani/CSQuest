import {assertLibraryScope} from './library-scope.mjs';
import {randomUUID} from 'node:crypto';
import path from 'node:path';
import {pipeline} from 'node:stream/promises';
import yazl from 'yazl';
import {readBody,assertSameOrigin} from './accounts.mjs';
import {transaction} from './database.mjs';
import {openLibraryFile,libraryError} from './storage.mjs';
const fail=(s,m)=>{throw libraryError(s,m);};
const valid=x=>typeof x==='string'&&/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(x);
export async function recordLibraryUndo(db,actor,before,after,label){
 const id=randomUUID();await db.query('INSERT INTO csquest_library_undo(id,actor_id,before_state,after_state) VALUES($1,$2,$3,$4)',[id,actor.id,{label,entries:before},{entries:after}]);return id;
}
export function createLibraryTools({pool,ownerId,drives,inspect,lock,get,parent,cleanup,rows,sharing}){
 async function destination(db,e,target){
  const folder=await parent(db,target,e.drive,ownerId);let ancestor=folder,depth=0;
  while(ancestor){if(ancestor===e.id)fail(400,'A folder cannot move inside itself or its descendants.');if(++depth>=99)fail(400,'Folder nesting limit reached.');ancestor=(await get(db,ancestor,ownerId)).parent_id;}
  if(e.kind==='folder'){const height=Number((await db.query("WITH RECURSIVE subtree AS (SELECT id,0 AS depth FROM csquest_library_entries WHERE id=$1 UNION ALL SELECT e.id,s.depth+1 FROM csquest_library_entries e JOIN subtree s ON e.parent_id=s.id WHERE e.kind='folder' AND s.depth<100) SELECT max(depth) AS height FROM subtree",[e.id])).rows[0].height);if(depth+height>=99)fail(400,'Folder nesting limit reached.');}
  return folder;
 }
 const names=new Set(['browse','favorite','bookmark','resources','bulk','archive','history','undo']);
 return async({route,req,res,url,send,actor,role,scope})=>{
  if(!names.has(route))return false;
  const write=req.method==='POST';if(!['GET','POST'].includes(req.method))fail(405,'Method not allowed.');
  if(write)assertSameOrigin(req);
  const body=write?await readBody(req):null,admin=role==='owner';
  if(['bulk','undo'].includes(route)&&!write||['browse','archive','history'].includes(route)&&write)fail(405,'Method not allowed.');
  if(['bulk','undo','history'].includes(route)&&!admin)fail(403,'Only an administrator can manage Library files.');
  if(route==='browse'){
   const search=(url.searchParams.get('q')||'').slice(0,200),view=url.searchParams.get('view')||'all',kind=url.searchParams.get('type')||'all',offset=Math.max(0,Number(url.searchParams.get('offset'))||0),min=Math.max(0,Number(url.searchParams.get('min'))||0),max=Number(url.searchParams.get('max')||Number.MAX_SAFE_INTEGER),since=url.searchParams.get('since');
   if(!Number.isSafeInteger(offset)||offset>1e7||!Number.isFinite(max)||since&&!Number.isFinite(Date.parse(since)))fail(400,'Invalid search filters.');
   const result=(await pool.query(`SELECT e.id,e.name,e.kind,e.drive,e.parent_id AS parent,e.size::float8 AS size,e.updated_at AS "updatedAt",coalesce(p.favorite,false) AS favorite,p.last_opened AS "lastOpened" FROM csquest_library_entries e LEFT JOIN csquest_library_preferences p ON p.entry_id=e.id AND p.user_id=$2 WHERE e.owner_id=$1 AND e.status='ready' AND ($10::uuid[] IS NULL OR e.id=ANY($10)) AND position(lower($3) in lower(e.name))>0 AND ($4<>'favorites' OR p.favorite) AND ($4<>'recent' OR p.last_opened IS NOT NULL) AND e.size>=$6 AND e.size<=$7 AND ($8::timestamptz IS NULL OR e.updated_at>=$8) AND ($5='all' OR $5='folder' AND e.kind='folder' OR $5<>'folder' AND e.kind='file' AND lower(e.name) LIKE '%.'||$5) ORDER BY CASE WHEN $4='recent' THEN p.last_opened END DESC NULLS LAST,lower(e.name),e.id LIMIT 200 OFFSET $9`,[ownerId,actor.id,search,view,kind,min,max,since||null,offset,scope?[...scope.ids]:null])).rows;
   send(200,{entries:result,nextOffset:result.length===200?offset+200:null});return true;
  }
  if(route==='favorite'||route==='bookmark'){
   const id=write?body.id:url.searchParams.get('id'),e=await get(pool,id,ownerId);assertLibraryScope(scope,e.id);if(e.status!=='ready')fail(404,'File is not ready.');
   if(!write){send(200,(await pool.query('SELECT favorite,position,speed,last_opened AS "lastOpened" FROM csquest_library_preferences WHERE user_id=$1 AND entry_id=$2',[actor.id,e.id])).rows[0]||{favorite:false,position:0,speed:1});return true;}
   if(route==='favorite'){
    if(typeof body.favorite!=='boolean')fail(400,'Choose a favorite setting.');await pool.query('INSERT INTO csquest_library_preferences(user_id,entry_id,favorite) VALUES($1,$2,$3) ON CONFLICT(user_id,entry_id) DO UPDATE SET favorite=excluded.favorite',[actor.id,e.id,body.favorite]);
   }else{
    const position=Number(body.position||0),speed=Number(body.speed||1);if(!Number.isFinite(position)||position<0||position>1e8||!Number.isFinite(speed)||speed<.25||speed>3)fail(400,'Invalid playback position or speed.');
    await pool.query('INSERT INTO csquest_library_preferences(user_id,entry_id,position,speed,last_opened) VALUES($1,$2,$3,$4,now()) ON CONFLICT(user_id,entry_id) DO UPDATE SET position=excluded.position,speed=excluded.speed,last_opened=now()',[actor.id,e.id,position,speed]);
   }send(200,{ok:true});return true;
  }
  if(route==='resources'){assertLibraryScope(scope,write?body.id:url.searchParams.get('id'));
   if(!write){send(200,{resources:(await pool.query('SELECT l.* FROM csquest_lesson_resources l JOIN csquest_library_entries e ON e.id=l.entry_id WHERE e.owner_id=$1 AND e.id=$2',[ownerId,url.searchParams.get('id')])).rows});return true;}
   if(!admin)fail(403,'Administrator access is required.');const e=await get(pool,body.id,ownerId);if(e.kind!=='file'||e.status!=='ready'||!Number.isInteger(body.lessonId)||body.lessonId<0||body.lessonId>100000)fail(400,'Choose a completed file and lesson.');
   if(!(await pool.query('SELECT id FROM csquest_courses WHERE id=$1',[body.courseId])).rowCount)fail(400,'Unknown subject.');
   if(body.remove)await pool.query('DELETE FROM csquest_lesson_resources WHERE entry_id=$1 AND course_id=$2 AND lesson_id=$3',[e.id,body.courseId,body.lessonId]);else await pool.query('INSERT INTO csquest_lesson_resources(entry_id,course_id,lesson_id) VALUES($1,$2,$3) ON CONFLICT DO NOTHING',[e.id,body.courseId,body.lessonId]);send(200,{ok:true});return true;
  }
  if(route==='history'){
   send(200,{history:(await pool.query('SELECT h.id,h.before_state->>\'label\' AS label,h.created_at AS "createdAt",h.undone,u.username FROM csquest_library_undo h LEFT JOIN csquest_users u ON u.id=h.actor_id ORDER BY h.created_at DESC LIMIT 100')).rows});return true;
  }
  if(route==='undo'){
   const result=await transaction(pool,async db=>{
    await lock(db);await sharing.assertWrite(db,actor);if(!valid(body.id))fail(400,'Choose a change to undo.');
    const change=(await db.query('SELECT * FROM csquest_library_undo WHERE id=$1 FOR UPDATE',[body.id])).rows[0];if(!change||change.undone)fail(409,'This change is no longer available to undo.');
    for(const expected of change.after_state.entries){const e=await get(db,expected.id,ownerId);if(e.status!=='ready'||e.name!==expected.name||e.parent_id!==expected.parent)fail(409,'This item changed again. Undo the newer change first.');}
    for(const old of change.before_state.entries){const e=await get(db,old.id,ownerId);await destination(db,e,old.parent);await db.query('UPDATE csquest_library_entries SET name=$2,parent_id=$3,updated_at=now() WHERE id=$1',[e.id,old.name,old.parent]);}
    await db.query('UPDATE csquest_library_undo SET undone=true WHERE id=$1',[change.id]);return {ok:true};
   });send(200,result);return true;
  }
  const ids=route==='archive'?(url.searchParams.get('ids')||'').split(','):body.ids;
  if(!Array.isArray(ids)||!ids.length||ids.length>100||!ids.every(valid))fail(400,'Select 1–100 items.');
  if(route==='archive'){for(const id of ids)assertLibraryScope(scope,id);
   const entries=(await pool.query("WITH RECURSIVE files AS (SELECT e.*,e.name AS archive_name,0 AS depth FROM csquest_library_entries e WHERE e.id=ANY($1::uuid[]) AND e.owner_id=$2 AND e.status='ready' UNION ALL SELECT e.*,f.archive_name||'/'||e.name,f.depth+1 FROM csquest_library_entries e JOIN files f ON e.parent_id=f.id WHERE e.owner_id=$2 AND e.status='ready' AND f.depth<100) SELECT DISTINCT ON(id) * FROM files ORDER BY id,depth LIMIT 10001",[ids,ownerId])).rows;
   if(!entries.length)fail(404,'No files found.');if(entries.length>10000)fail(413,'Select a smaller set of folders.');
   const zip=new yazl.ZipFile(),used=new Set();let current;
   for(const e of entries){let name=e.archive_name.replaceAll('\\','_').split('/').map(n=>n==='.'||n==='..'?'_':n).join('/');if(used.has(name))name=e.id+'/'+name;used.add(name);
    if(e.kind==='folder')zip.addEmptyDirectory(name);else zip.addReadStreamLazy(name,{compress:false,size:Number(e.size)},cb=>{(async()=>{const drive=drives.find(d=>d.id===e.drive);await inspect(drive);const file=await openLibraryFile(drive,e.id);if((await file.stat()).size!==Number(e.size)){await file.close();fail(409,'Stored file size changed.');}current=file.createReadStream({highWaterMark:1024**2});cb(null,current);})().catch(cb);});
   }
   zip.on('error',()=>{current?.destroy();zip.outputStream.destroy();res.destroy();});const length=await new Promise(resolve=>zip.end({},resolve));res.writeHead(200,{'Content-Type':'application/zip','Content-Disposition':'attachment; filename="CSQuest-library.zip"','Cache-Control':'private, no-store',...(length>=0?{'Content-Length':length}:{})});try{await pipeline(zip.outputStream,res);}catch{current?.destroy();}return true;
  }
  const result=await transaction(pool,async db=>{
   await lock(db);await sharing.assertWrite(db,actor);const selected=[];for(const id of new Set(ids)){const e=await get(db,id,ownerId);if(e.status!=='ready')fail(409,'Finish pending uploads first.');selected.push(e);}
   const before=selected.map(e=>({id:e.id,name:e.name,parent:e.parent_id}));
   if(body.action==='move'){
    for(const e of selected){const target=await destination(db,e,body.parent);await db.query('UPDATE csquest_library_entries SET parent_id=$2,updated_at=now() WHERE id=$1',[e.id,target]);}
    const after=before.map(e=>({...e,parent:body.parent||null}));return {ok:true,undoId:await recordLibraryUndo(db,actor,before,after,'Move selected items')};
   }
   if(body.action!=='delete'||body.confirmed!==true)fail(400,'Confirm permanent deletion.');
   const descendants=(await db.query('WITH RECURSIVE tree AS (SELECT id FROM csquest_library_entries WHERE id=ANY($1::uuid[]) AND owner_id=$2 UNION SELECT e.id FROM csquest_library_entries e JOIN tree t ON e.parent_id=t.id WHERE e.owner_id=$2) SELECT id FROM tree',[ids,ownerId])).rows;
   await db.query("UPDATE csquest_library_entries SET status='deleting' WHERE id=ANY($1::uuid[])",[descendants.map(e=>e.id)]);return {ok:true};
  });
  if(body.action==='delete')await transaction(pool,async db=>{await lock(db);for(const drive of drives){await inspect(drive);await cleanup(db,drive,await rows(db,drive.id));}});
  send(200,result);return true;
 };
}
