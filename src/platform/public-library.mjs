import {randomBytes,randomUUID,createHash} from 'node:crypto';
import path from 'node:path';
import {readBody,assertSameOrigin,hashPassword,verifies} from './accounts.mjs';
import {streamLibraryFile,libraryMediaTypes} from './library-files.mjs';
import {measureLibraryDrive} from './storage.mjs';
const hash=x=>createHash('sha256').update(x).digest('hex');
const fail=(status,message)=>{throw Object.assign(Error(message),{status});};
const uuid=x=>typeof x==='string'&&/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(x);
export function createPublicLibrary({pool,ownerId,drives,inspect}){
 const attempts=new Map();
 async function rows(db,link){return (await db.query("WITH RECURSIVE tree AS (SELECT e.*,0 AS depth FROM csquest_library_entries e WHERE e.owner_id=$1 AND (e.id=$2 OR $2::uuid IS NULL AND e.drive=$3 AND e.parent_id IS NULL) UNION ALL SELECT e.*,t.depth+1 FROM csquest_library_entries e JOIN tree t ON e.parent_id=t.id WHERE e.owner_id=$1 AND t.depth<100) SELECT * FROM tree",[ownerId,link.entry_id,link.drive])).rows;}
 async function contains(db,link,id){if(!id)return !link.entry_id;return (await rows(db,link)).some(e=>e.id===id);}
 function cookieHash(req,link){const name='csquest_public_library_'+link.id+'=',value=(req.headers.cookie||'').split(';').map(s=>s.trim()).find(s=>s.startsWith(name))?.slice(name.length);return value?hash(value):null;}
 async function session(db,req,link){const digest=cookieHash(req,link);return digest&&(await db.query('SELECT hash FROM csquest_library_public_sessions WHERE hash=$1 AND link_id=$2 AND expires_at>now()',[digest,link.id])).rows[0]?.hash;}
 async function issue(req,res,link){const token=randomBytes(32).toString('base64url'),digest=hash(token);await pool.query("DELETE FROM csquest_library_public_sessions WHERE expires_at<=now()");await pool.query("INSERT INTO csquest_library_public_sessions(hash,link_id,expires_at) VALUES($1,$2,now()+interval '24 hours')",[digest,link.id]);res.setHeader('Set-Cookie',`csquest_public_library_${link.id}=${token}; Path=/api/library/; HttpOnly; SameSite=Strict; Max-Age=86400${process.env.NODE_ENV==='production'?'; Secure':''}`);return digest;}
 async function linkFor(db,req,url,{locked=false}={}){
  const token=url.searchParams.get('token');if(!ownerId||typeof token!=='string'||!/^[A-Za-z0-9_-]{43}$/.test(token))fail(404,'This shared link is unavailable or has expired.');
  const link=(await db.query("SELECT p.*,e.drive AS entry_drive,e.name AS entry_name,e.kind AS entry_kind,e.status AS entry_status FROM csquest_library_public_links p LEFT JOIN csquest_library_entries e ON e.id=p.entry_id WHERE p.token_hash=ANY($1::text[]) AND p.owner_id=$2 AND (p.expires_at IS NULL OR p.expires_at>now())",[[hash('csquest-public-v2:'+token),hash(token)],ownerId])).rows[0];
  if(!link||link.entry_id&&link.entry_status!=='ready')fail(404,'This shared link is unavailable or has expired.');link.drive=link.drive||link.entry_drive;
  if(link.password_hash&&!locked&&!await session(db,req,link))fail(401,'This shared Library is password protected.');return link;
 }
 async function capacity(db,link){const inventory=await rows(db,link),used=inventory.filter(e=>e.kind==='file'&&(e.status==='ready'||e.status==='uploading'&&new Date(e.expires_at)>new Date())).reduce((n,e)=>n+Number(e.size),0),drive=drives.find(d=>d.id===link.drive),volume=await measureLibraryDrive(drive,drives,(await db.query('SELECT * FROM csquest_library_entries')).rows,inspect),cap=link.cap_bytes==null?drive.quota:Number(link.cap_bytes);return {cap,limited:link.cap_bytes!=null,used,available:Math.max(0,Math.min(cap-used,volume.available)),online:volume.online};}
 async function request({route,req,res,url,send}){
  if(!['public-info','public-file','public-unlock'].includes(route))return false;
  res.setHeader('Referrer-Policy','no-referrer');res.setHeader('X-Robots-Tag','noindex, nofollow, noarchive');
  if(route==='public-unlock'){
   if(req.method!=='POST')fail(405,'Method not allowed.');assertSameOrigin(req);const body=await readBody(req),link=await linkFor(pool,req,url,{locked:true});
   const key=hash(link.id+'|'+(req.headers['x-forwarded-for']?.split(',')[0]||req.socket.remoteAddress)),now=Date.now();for(const [k,v] of attempts)if(v.until<now)attempts.delete(k);if(attempts.size>10000)fail(429,'Please try again later.');const rate=attempts.get(key)||{count:0,until:now+15*60000};if(++rate.count>10)fail(429,'Too many password attempts. Try again in 15 minutes.');attempts.set(key,rate);
   if(link.password_hash&&!await verifies(body.password,link.password_hash))fail(401,'The password is incorrect.');await issue(req,res,link);attempts.delete(key);send(200,{ok:true});return true;
  }
  if(!['GET','HEAD'].includes(req.method))fail(405,'Method not allowed.');const link=await linkFor(pool,req,url),inventory=(await rows(pool,link)).filter(e=>e.status==='ready'),id=url.searchParams.get('id');if(id&&!uuid(id))fail(404,'Shared item not found.');
  const chosen=id?inventory.find(e=>e.id===id):link.entry_id?inventory.find(e=>e.id===link.entry_id):null;if(id&&!chosen)fail(404,'Shared item not found.');
  const drive=drives.find(d=>d.id===link.drive),root={id:link.entry_id||null,kind:link.entry_kind||'drive',name:link.entry_name||drive.name,drive:link.drive};
  if(route==='public-file'){if(chosen?.kind!=='file')fail(400,'Choose a shared file.');await streamLibraryFile({req,res,url,entry:chosen,drive,inspect});return true;}
  const breadcrumbs=[],lookup=new Map(inventory.map(e=>[e.id,e]));let ancestor=chosen;for(let n=0;ancestor&&n<100;n++){breadcrumbs.unshift({id:ancestor.id,name:ancestor.name});if(ancestor.id===link.entry_id)break;ancestor=lookup.get(ancestor.parent_id);}
  const result={root,id:chosen?.id||null,parent:chosen&&lookup.has(chosen.parent_id)?chosen.parent_id:null,kind:chosen?.kind||'drive',drive:link.drive,name:chosen?.name||drive.name,breadcrumbs,allowUpload:link.allow_upload&&root.kind!=='file',expiresAt:link.expires_at};
  if(chosen?.kind==='file'){Object.assign(result,{size:Number(chosen.size),createdAt:chosen.created_at,updatedAt:chosen.updated_at,mediaType:libraryMediaTypes[path.extname(chosen.name).toLowerCase()]||null});}
  else{const parent=chosen?.id||null;Object.assign(result,{entries:inventory.filter(e=>e.parent_id===parent&&e.id!==link.entry_id).map(e=>({id:e.id,name:e.name,kind:e.kind,drive:e.drive,parent:e.parent_id,size:Number(e.size),createdAt:e.created_at,updatedAt:e.updated_at})),folders:inventory.filter(e=>e.kind==='folder').map(e=>({id:e.id,name:e.name,parent:e.id===link.entry_id?null:e.parent_id})),capacity:await capacity(pool,link)});}
  send(200,result);return true;
 }
 async function manage(db,route,body){
  if(route==='public-links'&&body==null)return {links:(await db.query("SELECT p.id,p.entry_id AS \"entryId\",p.drive,coalesce(e.name,CASE p.drive WHEN 'boot' THEN 'Boot storage' ELSE 'Block storage' END) AS name,p.created_at AS \"createdAt\",p.expires_at AS \"expiresAt\",(p.expires_at IS NULL OR p.expires_at>now()) AS active,(p.password_hash IS NOT NULL) AS \"hasPassword\",p.allow_upload AS \"allowUpload\",p.cap_bytes::float8 AS \"capBytes\" FROM csquest_library_public_links p LEFT JOIN csquest_library_entries e ON e.id=p.entry_id WHERE p.owner_id=$1 ORDER BY p.created_at DESC",[ownerId])).rows};
  let entry=null,drive=body.drive||null;if(body.entryId){if(!uuid(body.entryId))fail(400,'Choose a completed item.');entry=(await db.query("SELECT * FROM csquest_library_entries WHERE id=$1 AND owner_id=$2 AND status='ready'",[body.entryId,ownerId])).rows[0];if(!entry)fail(404,'Shared item not found.');drive=null;}else if(!drives.some(d=>d.id===drive))fail(400,'Choose a drive or directory.');
  if(route==='public-link-remove'){await db.query('DELETE FROM csquest_library_public_links WHERE owner_id=$1 AND (entry_id=$2 OR $2::uuid IS NULL AND drive=$3)',[ownerId,entry?.id||null,drive]);return {ok:true};}
  if(![1,7,30,null].includes(body.days))fail(400,'Choose a link lifetime.');const cap=body.capBytes==null?null:Number(body.capBytes);if(cap!==null&&(!Number.isSafeInteger(cap)||cap<=0))fail(400,'Enter a positive upload cap in GB and MB.');if(body.password!=null&&(typeof body.password!=='string'||body.password.length>128||body.password.length>0&&body.password.length<8))fail(400,'Use a public password of 8–128 characters.');
  const password=body.password?await hashPassword(body.password):null,allow=body.allowUpload===true;if(allow&&entry?.kind==='file')fail(400,'Share a directory or drive to allow uploads.');
  const token=randomBytes(32).toString('base64url'),id=randomUUID(),expires=body.days===null?null:new Date(Date.now()+body.days*86400000);
  await db.query('DELETE FROM csquest_library_public_links WHERE owner_id=$1 AND (entry_id=$2 OR $2::uuid IS NULL AND drive=$3)',[ownerId,entry?.id||null,drive]);await db.query('INSERT INTO csquest_library_public_links(id,owner_id,entry_id,drive,token_hash,expires_at,password_hash,allow_upload,cap_bytes) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)',[id,ownerId,entry?.id||null,drive,hash('csquest-public-v2:'+token),expires,password,allow,cap]);return {id,entryId:entry?.id||null,drive,token,expiresAt:expires};
 }
 const uploadRoutes={'public-prepare':['prepare','POST'],'public-folder':['folder','POST'],'public-upload':['upload','GET'],'public-chunk':['chunk','PUT'],'public-complete':['complete','POST'],'public-cancel':['cancel','POST']};
 async function authorizeUpload({route,req,res,url}){
  if(route==='public-archive'){if(req.method!=='GET')fail(405,'Method not allowed.');const link=await linkFor(pool,req,url);return {route:'archive',link,readOnly:true,ids:new Set((await rows(pool,link)).filter(e=>e.status==='ready').map(e=>e.id))};}
  const config=uploadRoutes[route];if(!config)return null;if(req.method!==config[1])fail(405,'Method not allowed.');if(req.method!=='GET')assertSameOrigin(req);
  const link=await linkFor(pool,req,url);if(!link.allow_upload||link.entry_kind==='file')fail(403,'Uploads are disabled for this shared Library.');let digest=await session(pool,req,link);if(!digest&&['public-prepare','public-folder'].includes(route))digest=await issue(req,res,link);if(!digest)fail(403,'Open this shared Library again before resuming uploads.');
  const body=['public-prepare','public-folder','public-complete','public-cancel'].includes(route)?await readBody(req):null,ctx={route:config[0],link,sessionHash:digest,body};
  if(['public-prepare','public-folder'].includes(route)){body.drive=link.drive;body.parent=body.parent||link.entry_id||null;if(body.conflict==='replace')fail(403,'Public uploads cannot replace existing files.');body.conflict=body.conflict==='skip'?'skip':'keep';if(!await contains(pool,link,body.parent))fail(403,'Choose a directory inside this public share.');}
  else{const id=body?.id||url.searchParams.get('id');const entry=(await pool.query('SELECT * FROM csquest_library_entries WHERE id=$1 AND owner_id=$2',[uuid(id)?id:null,ownerId])).rows[0];if(!entry){if(route==='public-cancel'&&uuid(id))return ctx;fail(404,'Upload not found.');}await assertUpload(pool,ctx,entry);}
  return ctx;
 }
 async function assertUpload(db,ctx,entry){
  const link=(await db.query("SELECT * FROM csquest_library_public_links WHERE id=$1 AND owner_id=$2 AND allow_upload AND (expires_at IS NULL OR expires_at>now())",[ctx.link.id,ownerId])).rows[0];if(!link||!(await db.query('SELECT hash FROM csquest_library_public_sessions WHERE hash=$1 AND link_id=$2 AND expires_at>now()',[ctx.sessionHash,ctx.link.id])).rowCount)fail(403,'This upload link was revoked or expired.');
  if(entry&&(entry.public_link_id!==ctx.link.id||entry.public_session_hash!==ctx.sessionHash))fail(403,'This upload belongs to another session.');if(entry&&!await contains(db,ctx.link,entry.id))fail(403,'This upload is outside the public share.');if(!entry&&ctx.body.parent&&!await contains(db,ctx.link,ctx.body.parent))fail(403,'This directory is outside the public share.');
 }
 async function checkCaps(db,drive,files){
  const links=(await db.query("SELECT p.*,coalesce(p.drive,e.drive) AS drive FROM csquest_library_public_links p LEFT JOIN csquest_library_entries e ON e.id=p.entry_id WHERE p.owner_id=$1 AND p.cap_bytes IS NOT NULL AND (p.expires_at IS NULL OR p.expires_at>now()) AND coalesce(p.drive,e.drive)=$2",[ownerId,drive.id])).rows;
  for(const link of links){const inventory=await rows(db,link),ids=new Set(inventory.map(e=>e.id));let needed=0;for(const f of files)if(!f.skip&&(!link.entry_id||ids.has(f.parent)))needed+=f.size;const used=inventory.filter(e=>e.kind==='file'&&(e.status==='ready'||e.status==='uploading'&&new Date(e.expires_at)>new Date())).reduce((n,e)=>n+Number(e.size),0);if(needed&&used+needed>Number(link.cap_bytes))fail(507,'The shared drive or directory upload cap would be exceeded. No uploads were started.');}
 }
 return {request,manage,authorizeUpload,assertUpload,checkCaps};
}
