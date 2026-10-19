import {randomBytes,randomUUID,createHash} from 'node:crypto';
import path from 'node:path';
import {readBody} from './accounts.mjs';
import {transaction} from './database.mjs';
import {libraryError} from './storage.mjs';
import {streamLibraryFile,libraryMediaTypes} from './library-files.mjs';
const fail=(status,message)=>{throw libraryError(status,message);};
const digest=token=>createHash('sha256').update(token).digest('hex');
const uuid=value=>typeof value==='string'&&/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value);
export function createLibraryAccess({pool,ownerId,drives,inspect,lock}){
 async function role(db,actor){
  if(!ownerId||!actor?.id)fail(403,'This private library is available to the platform owner.');
  if(actor.id===ownerId)return 'owner';
  const value=(await db.query('SELECT role FROM csquest_library_access WHERE owner_id=$1 AND user_id=$2',[ownerId,actor.id])).rows[0]?.role;
  if(!value)fail(403,'Ask the Library owner to grant your account access.');return value;
 }
 async function assertWrite(db,actor){if(await role(db,actor)==='viewer')fail(403,'Your Library access is view only.');}
 async function publicRequest({route,req,res,url,send}){
  if(!['public-info','public-file'].includes(route))return false;
  if(!['GET','HEAD'].includes(req.method))fail(405,'Method not allowed.');
  const token=url.searchParams.get('token');if(!ownerId||typeof token!=='string'||!/^[A-Za-z0-9_-]{43}$/.test(token))fail(404,'This shared link is unavailable or has expired.');
  const e=(await pool.query(`SELECT e.*,p.id AS link_id,p.expires_at AS link_expires_at FROM csquest_library_public_links p JOIN csquest_library_entries e ON e.id=p.entry_id WHERE p.token_hash=$1 AND e.owner_id=$2 AND e.kind='file' AND e.status='ready' AND (p.expires_at IS NULL OR p.expires_at>now())`,[digest(token),ownerId])).rows[0];
  if(!e)fail(404,'This shared link is unavailable or has expired.');
  res.setHeader('Referrer-Policy','no-referrer');res.setHeader('X-Robots-Tag','noindex, nofollow, noarchive');
  if(route==='public-file')await streamLibraryFile({req,res,url,entry:e,drive:drives.find(d=>d.id===e.drive),inspect});
  else send(200,{id:e.link_id,name:e.name,size:Number(e.size),mediaType:libraryMediaTypes[path.extname(e.name).toLowerCase()]||null,expiresAt:e.link_expires_at});
  return true;
 }
 async function manage({route,req,actor}){
  if(!['access','access-remove','public-links','public-link-remove'].includes(route))return null;
  if(actor.id!==ownerId)fail(403,'Only the Library owner can manage access.');
  if(req.method==='GET'){
   if(route==='access')return {members:(await pool.query('SELECT a.user_id AS id,u.username,u.display_name AS "displayName",a.role,a.created_at AS "createdAt" FROM csquest_library_access a JOIN csquest_users u ON u.id=a.user_id WHERE a.owner_id=$1 ORDER BY u.username',[ownerId])).rows};
   return {links:(await pool.query(`SELECT p.id,p.entry_id AS "entryId",e.name,p.created_at AS "createdAt",p.expires_at AS "expiresAt",(p.expires_at IS NULL OR p.expires_at>now()) AS active FROM csquest_library_public_links p JOIN csquest_library_entries e ON e.id=p.entry_id WHERE e.owner_id=$1 AND e.status='ready' ORDER BY p.created_at DESC`,[ownerId])).rows};
  }
  const body=await readBody(req);
  return transaction(pool,async db=>{
   await lock(db);
   if(route==='access'){
    const username=typeof body.username==='string'?body.username.trim().toLowerCase():'';
    if(!/^[a-z0-9_]{3,32}$/.test(username)||!['viewer','editor'].includes(body.role))fail(400,'Enter a CSQuest username and choose Viewer or Editor.');
    const user=(await db.query('SELECT id FROM csquest_users WHERE username=$1',[username])).rows[0];if(!user)fail(404,'No CSQuest account has that username.');
    if(user.id===ownerId)fail(400,'The owner already has full access.');
    await db.query('INSERT INTO csquest_library_access(owner_id,user_id,role) VALUES($1,$2,$3) ON CONFLICT(owner_id,user_id) DO UPDATE SET role=excluded.role',[ownerId,user.id,body.role]);return {ok:true};
   }
   if(route==='access-remove'){
    if(!uuid(body.userId))fail(400,'Choose a Library member.');
    if(body.userId===ownerId)fail(400,'Owner access cannot be removed.');
    await db.query('DELETE FROM csquest_library_access WHERE owner_id=$1 AND user_id=$2',[ownerId,body.userId]);return {ok:true};
   }
   if(!uuid(body.entryId))fail(400,'Choose a file.');
   const entry=(await db.query("SELECT * FROM csquest_library_entries WHERE id=$1 AND owner_id=$2 AND kind='file' AND status='ready'",[body.entryId,ownerId])).rows[0];if(!entry)fail(404,'Choose a completed file to share.');
   if(route==='public-link-remove'){await db.query('DELETE FROM csquest_library_public_links WHERE entry_id=$1',[entry.id]);return {ok:true};}
   if(![1,7,30,null].includes(body.days))fail(400,'Choose a link lifetime.');
   const token=randomBytes(32).toString('base64url'),id=randomUUID(),expires=body.days===null?null:new Date(Date.now()+body.days*86400000);
   await db.query('INSERT INTO csquest_library_public_links(id,entry_id,token_hash,expires_at) VALUES($1,$2,$3,$4) ON CONFLICT(entry_id) DO UPDATE SET id=excluded.id,token_hash=excluded.token_hash,created_at=now(),expires_at=excluded.expires_at',[id,entry.id,digest(token),expires]);
   return {id,entryId:entry.id,token,expiresAt:expires};
  });
 }
 return {role,assertWrite,publicRequest,manage};
}
