import {createPublicLibrary} from './public-library.mjs';
import {readBody} from './accounts.mjs';
import {transaction} from './database.mjs';
import {libraryError} from './storage.mjs';
import {isPlatformAdmin} from './permissions.mjs';
const fail=(status,message)=>{throw libraryError(status,message);};
const uuid=value=>typeof value==='string'&&/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value);
export function createLibraryAccess({pool,ownerId,drives,inspect,lock}){
 const publicLibrary=createPublicLibrary({pool,ownerId,drives,inspect});
 async function role(db,actor){
  if(!ownerId||!actor?.id)fail(403,'This private library is available to the platform owner.');
  const user=(await db.query('SELECT role FROM csquest_users WHERE id=$1',[actor.id])).rows[0];
  if(actor.id===ownerId||isPlatformAdmin({...actor,role:user?.role}))return 'owner';
  const value=(await db.query('SELECT role FROM csquest_library_access WHERE owner_id=$1 AND user_id=$2',[ownerId,actor.id])).rows[0]?.role;
  if(!value)fail(403,'Ask an administrator to grant your account Library access.');return 'viewer';
 }
 async function assertWrite(db,actor){if(await role(db,actor)==='viewer')fail(403,'Your Library access is view only.');}
 const publicRequest=publicLibrary.request;
 async function manage({route,req,actor}){
  if(!['access','access-remove','public-links','public-link-remove'].includes(route))return null;
  if(await role(pool,actor)!=='owner')fail(403,'Only an administrator can manage access.');
  if(req.method==='GET'){
   if(route==='access')return {members:(await pool.query('SELECT a.user_id AS id,u.username,u.display_name AS "displayName",a.role,a.created_at AS "createdAt" FROM csquest_library_access a JOIN csquest_users u ON u.id=a.user_id WHERE a.owner_id=$1 ORDER BY u.username',[ownerId])).rows};
   return publicLibrary.manage(pool,route,null);
  }
  const body=await readBody(req);
  return transaction(pool,async db=>{
   await lock(db);
   if(await role(db,actor)!=='owner')fail(403,'Only an administrator can manage access.');
   if(route==='access'){
    const username=typeof body.username==='string'?body.username.trim().toLowerCase():'';
    if(!/^[a-z0-9_]{3,32}$/.test(username)||body.role!=='viewer')fail(400,'Learner access is view only. Use Admin to grant Library visibility.');
    const user=(await db.query('SELECT id FROM csquest_users WHERE username=$1',[username])).rows[0];if(!user)fail(404,'No CSQuest account has that username.');
    if(user.id===ownerId)fail(400,'The owner already has full access.');
    await db.query('INSERT INTO csquest_library_access(owner_id,user_id,role) VALUES($1,$2,$3) ON CONFLICT(owner_id,user_id) DO UPDATE SET role=excluded.role',[ownerId,user.id,body.role]);return {ok:true};
   }
   if(route==='access-remove'){
    if(!uuid(body.userId))fail(400,'Choose a Library member.');
    if(body.userId===ownerId)fail(400,'Owner access cannot be removed.');
    await db.query('DELETE FROM csquest_library_access WHERE owner_id=$1 AND user_id=$2',[ownerId,body.userId]);return {ok:true};
   }
   return publicLibrary.manage(db,route,body);
  });
 }
 return {...publicLibrary,role,assertWrite,publicRequest,manage};
}
