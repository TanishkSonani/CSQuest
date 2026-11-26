import {randomUUID} from 'node:crypto';
import {readBody,assertSameOrigin} from './accounts.mjs';
import {libraryScope,libraryWriteScope,assertLibraryScope,canWriteLocation} from './library-scope.mjs';
import {transaction,databaseActor} from './database.mjs';
const fail=(status,message)=>{throw Object.assign(Error(message),{status});};
const uuid=x=>typeof x==='string'&&/^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i.test(x);
const media=name=>/\.(mp4|mkv|webm|ogv|mov|mp3|m4a|aac|ogg|opus|wav|flac)$/i.test(name);
export async function recordLibraryActivity(db,{ownerId,action,entry,details={}}){
 const actor=databaseActor.getStore();await db.query('INSERT INTO csquest_library_activity(owner_id,actor_id,actor_name,action,entry_id,drive,name,details) VALUES($1,$2,$3,$4,$5,$6,$7,$8)',[ownerId,actor?.id||null,actor?.username||actor?.displayName||'Public visitor',action,entry?.id||null,entry?.drive||null,entry?.name||'',details]);
}
export function createLibraryExperience({pool,ownerId,drives,get,sharing}){
 return async({route,req,url,send,actor,role,scope})=>{
  if(!['continue','reading','playlists','sharing-overview','access-preview','storage-insights','activity'].includes(route))return false;
  const write=req.method==='POST';if(!['GET','POST'].includes(req.method)||write&&!['reading','playlists'].includes(route)||!write&&route==='reading')fail(405,'Method not allowed.');
  if(write)assertSameOrigin(req);const body=write?await readBody(req):null;
  if(['sharing-overview','access-preview','storage-insights','activity'].includes(route)&&role!=='owner')fail(403,'Administrator access is required.');
  if(route==='continue'){
   const rows=(await pool.query(`SELECT e.id,e.name,e.drive,e.parent_id AS parent,e.size::float8 AS size,p.position,p.speed,p.duration,p.document_page AS page,p.document_pages AS pages,p.last_opened AS "lastOpened" FROM csquest_library_preferences p JOIN csquest_library_entries e ON e.id=p.entry_id WHERE p.user_id=$1 AND e.owner_id=$2 AND e.status='ready' AND e.kind='file' AND NOT p.completed AND (p.position>0 OR p.document_pages>0) AND ($3::uuid[] IS NULL OR e.id=ANY($3)) ORDER BY p.last_opened DESC NULLS LAST LIMIT 50`,[actor.id,ownerId,scope?[...scope.ids]:null])).rows;
   send(200,{entries:rows});return true;
  }
  if(route==='reading'){
   const e=await get(pool,body.id,ownerId);assertLibraryScope(scope,e.id);if(e.kind!=='file'||e.status!=='ready'||!e.name.toLowerCase().endsWith('.pdf'))fail(400,'Choose a PDF document.');
   if(!Number.isInteger(body.page)||!Number.isInteger(body.pages)||body.page<1||body.pages<body.page||body.pages>1000000)fail(400,'Invalid PDF page.');
   await pool.query('INSERT INTO csquest_library_preferences(user_id,entry_id,document_page,document_pages,completed,last_opened) VALUES($1,$2,$3,$4,$5,now()) ON CONFLICT(user_id,entry_id) DO UPDATE SET document_page=excluded.document_page,document_pages=excluded.document_pages,completed=excluded.completed,last_opened=now()',[actor.id,e.id,body.page,body.pages,body.page===body.pages]);send(200,{ok:true});return true;
  }
  if(route==='playlists'){
   if(write){
    if(body.action==='delete'){if(!uuid(body.id))fail(400,'Choose a playlist.');await pool.query('DELETE FROM csquest_library_playlists WHERE id=$1 AND user_id=$2',[body.id,actor.id]);send(200,{ok:true});return true;}
    const name=typeof body.name==='string'?body.name.trim():'';if(!name||name.length>100||!Array.isArray(body.ids)||body.ids.length>500||!body.ids.every(uuid))fail(400,'Name the playlist and select up to 500 media files.');
    const ids=[...new Set(body.ids)];for(const id of ids){assertLibraryScope(scope,id);const e=await get(pool,id,ownerId);if(e.kind!=='file'||e.status!=='ready'||!media(e.name))fail(400,'Playlists support ready audio and video files.');}
    const id=body.id||randomUUID();if(!uuid(id))fail(400,'Choose a playlist.');
    if(body.id){if(!(await pool.query('UPDATE csquest_library_playlists SET name=$3,entry_ids=$4,updated_at=now() WHERE id=$1 AND user_id=$2 RETURNING id',[id,actor.id,name,ids])).rowCount)fail(404,'Playlist not found.');}
    else{if(Number((await pool.query('SELECT count(*) FROM csquest_library_playlists WHERE user_id=$1',[actor.id])).rows[0].count)>=100)fail(409,'Keep up to 100 playlists.');await pool.query('INSERT INTO csquest_library_playlists(id,user_id,name,entry_ids) VALUES($1,$2,$3,$4)',[id,actor.id,name,ids]);}
    send(200,{id});return true;
   }
   const playlists=(await pool.query('SELECT id,name,entry_ids FROM csquest_library_playlists WHERE user_id=$1 ORDER BY updated_at DESC',[actor.id])).rows;
   const items=(await pool.query("SELECT id,name,drive,parent_id AS parent FROM csquest_library_entries WHERE owner_id=$1 AND status='ready' AND id=ANY($2::uuid[])",[ownerId,playlists.flatMap(p=>p.entry_ids)])).rows.filter(e=>!scope||scope.ids.has(e.id));const lookup=new Map(items.map(e=>[e.id,e]));
   send(200,{playlists:playlists.map(p=>({id:p.id,name:p.name,entries:p.entry_ids.map(id=>lookup.get(id)).filter(Boolean)}))});return true;
  }
  if(route==='sharing-overview'){
   const {links}=await sharing.manage({route:'public-links',req:{method:'GET'},actor});
   const inventory=(await pool.query('SELECT id,parent_id,drive,kind,status,size::float8 AS size,expires_at FROM csquest_library_entries WHERE owner_id=$1',[ownerId])).rows,children=new Map();for(const e of inventory){if(!children.has(e.parent_id))children.set(e.parent_id,[]);children.get(e.parent_id).push(e.id);}
   send(200,{links:links.map(link=>{
    const ids=new Set(link.entryId?[link.entryId]:inventory.filter(e=>e.drive===link.drive).map(e=>e.id));if(link.entryId){const pending=[link.entryId];while(pending.length){const id=pending.pop();for(const child of children.get(id)||[])if(!ids.has(child)){ids.add(child);pending.push(child);}}}
    const used=inventory.filter(e=>ids.has(e.id)&&e.kind==='file'&&(e.status==='ready'||e.status==='uploading'&&new Date(e.expires_at)>new Date())).reduce((sum,e)=>sum+e.size,0);
    return {...link,used,remaining:link.capBytes==null?null:Math.max(0,link.capBytes-used)};
   })});return true;
  }
  if(route==='access-preview'){
   const id=url.searchParams.get('userId');if(!uuid(id))fail(400,'Choose a user.');const target=(await pool.query('SELECT id,username,role FROM csquest_users WHERE id=$1',[id])).rows[0];if(!target)fail(404,'User not found.');
   const targetScope=await libraryScope(pool,target,ownerId),writes=await libraryWriteScope(pool,target,ownerId);
   const inventory=(await pool.query("SELECT id,name,drive,parent_id AS parent,kind FROM csquest_library_entries WHERE owner_id=$1 AND status='ready' ORDER BY kind DESC,lower(name)",[ownerId])).rows.filter(e=>!targetScope||targetScope.ids.has(e.id));
   const drive=url.searchParams.get('drive'),parent=url.searchParams.get('parent')||null;if(parent&&!inventory.some(e=>e.id===parent&&e.kind==='folder'&&e.drive===drive))fail(404,'This user cannot access that directory.');
   const offset=Number(url.searchParams.get('offset'))||0;if(!Number.isSafeInteger(offset)||offset<0||offset>1e7)fail(400,'Invalid preview page.');const visible=inventory.filter(e=>e.drive===drive&&(e.parent===parent||!parent&&targetScope?.roots.has(e.id))),entries=visible.slice(offset,offset+100).map(e=>({...e,canWrite:canWriteLocation(writes,e.drive,e.parent)}));
   send(200,{user:target,drives:drives.filter(d=>!targetScope||targetScope.drives.has(d.id)).map(d=>({id:d.id,name:d.name,canWrite:canWriteLocation(writes,d.id,null)})),entries,totalVisible:inventory.length,parent,total:visible.length,nextOffset:offset+100<visible.length?offset+100:null});return true;
  }
  if(route==='activity'){
   const before=Number(url.searchParams.get('before'))||Number.MAX_SAFE_INTEGER,action=(url.searchParams.get('action')||'').slice(0,60);if(!Number.isSafeInteger(before)||before<1)fail(400,'Invalid activity page.');
   const events=(await pool.query('SELECT * FROM csquest_library_activity WHERE owner_id=$1 AND id<$2 AND ($3=\'\' OR action=$3) ORDER BY id DESC LIMIT 100',[ownerId,before,action])).rows;send(200,{events,next:events.length===100?events.at(-1).id:null});return true;
  }
  const inventory=(await pool.query('SELECT id,parent_id AS parent,drive,name,kind,status,size::float8 AS size,integrity_checksum,updated_at,expires_at FROM csquest_library_entries WHERE owner_id=$1',[ownerId])).rows,lookup=new Map(inventory.map(e=>[e.id,e])),sizes=new Map(),duplicates=new Map();
  for(const e of inventory){const names=[];let p=e.parent;const seen=new Set();while(p&&!seen.has(p)&&seen.size<100){seen.add(p);const parent=lookup.get(p);if(!parent)break;names.unshift(parent.name);p=parent.parent;}e.location=names.join(' / ');}
  const ready=inventory.filter(e=>e.status==='ready');for(const e of ready.filter(e=>e.kind==='file')){
   let current=e.parent;const seen=new Set();while(current&&!seen.has(current)&&seen.size<100){seen.add(current);sizes.set(current,(sizes.get(current)||0)+e.size);current=lookup.get(current)?.parent;}
   const key=e.integrity_checksum?'verified:'+e.integrity_checksum:'possible:'+e.size+':'+e.name.toLowerCase();if(!duplicates.has(key))duplicates.set(key,[]);duplicates.get(key).push(e);
  }
  send(200,{folders:ready.filter(e=>e.kind==='folder').map(e=>({...e,size:sizes.get(e.id)||0})).sort((a,b)=>b.size-a.size).slice(0,50),largest:ready.filter(e=>e.kind==='file').sort((a,b)=>b.size-a.size).slice(0,30),duplicates:[...duplicates].filter(([,items])=>items.length>1).slice(0,30).map(([key,items])=>({verified:key.startsWith('verified:'),count:items.length,items:items.slice(0,50)})),pending:inventory.filter(e=>e.status==='uploading').sort((a,b)=>new Date(a.updated_at)-new Date(b.updated_at)).slice(0,100)});return true;
 };
}
