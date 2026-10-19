import {isPlatformAdmin} from './permissions.mjs';
export async function libraryScope(db,actor,ownerId){
 if(actor.id===ownerId)return null;
 const persisted=(await db.query('SELECT role FROM csquest_users WHERE id=$1',[actor.id])).rows[0];
 if(isPlatformAdmin({...actor,role:persisted?.role}))return null;
 const grant=(await db.query('SELECT level,scopes FROM csquest_library_access WHERE owner_id=$1 AND user_id=$2',[ownerId,actor.id])).rows[0];
 if(grant?.level==='full')return null;
 const scopes=grant?.scopes||[],roots=scopes.filter(s=>s.entryId).map(s=>s.entryId),drives=scopes.filter(s=>!s.entryId).map(s=>s.drive);
 const entries=(await db.query("WITH RECURSIVE visible AS (SELECT e.id,e.parent_id,e.drive,0 AS depth FROM csquest_library_entries e WHERE e.owner_id=$1 AND e.status='ready' AND (e.id=ANY($2::uuid[]) OR e.drive=ANY($3::text[]) AND e.parent_id IS NULL) UNION ALL SELECT e.id,e.parent_id,e.drive,v.depth+1 FROM csquest_library_entries e JOIN visible v ON e.parent_id=v.id WHERE e.owner_id=$1 AND e.status='ready' AND v.depth<100) SELECT DISTINCT id,parent_id,drive FROM visible",[ownerId,roots,drives])).rows;
 return {ids:new Set(entries.map(e=>e.id)),roots:new Set(roots),drives:new Set(scopes.map(s=>s.drive)),scopes};
}
export function assertLibraryScope(scope,id){if(scope&&!scope.ids.has(id))throw Object.assign(Error('This location is outside your Library access.'),{status:404});}
export async function validateLibraryScopes(db,ownerId,scopes){
 if(!Array.isArray(scopes)||!scopes.length||scopes.length>100)throw Object.assign(Error('Select at least one drive or directory for limited access.'),{status:400});
 const result=[];for(const s of scopes){if(!s||!['boot','block'].includes(s.drive)||s.entryId&&!/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(s.entryId))throw Object.assign(Error('Invalid Library location.'),{status:400});if(s.entryId&&!(await db.query("SELECT id FROM csquest_library_entries WHERE id=$1 AND owner_id=$2 AND drive=$3 AND kind='folder' AND status='ready'",[s.entryId,ownerId,s.drive])).rowCount)throw Object.assign(Error('Choose an existing directory.'),{status:400});result.push({drive:s.drive,entryId:s.entryId||null});}return result;
}
