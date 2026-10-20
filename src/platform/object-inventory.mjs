import {randomUUID,createHash} from 'node:crypto';
import {transaction} from './database.mjs';
const label=value=>{const clean=value.replace(/[\x00-\x1f\x7f]/g,'_').trim()||'_';return clean==='.'||clean==='..'?'_'+clean:clean.length<=200?clean:clean.slice(0,180)+'-'+createHash('sha256').update(value).digest('hex').slice(0,12);};
export async function syncObjectInventory({pool,ownerId,drive,lock}){
 if(!drive.objectStore.list||drive.inventoryUntil>Date.now())return;
 if(drive.inventorySync)return drive.inventorySync;
 drive.inventorySync=(async()=>{
  await transaction(pool,async db=>{
   // Serialize inventory listing with Library deletion. This avoids one remote
   // HEAD per object and prevents a stale list from reimporting a deleted file.
   await lock(db);const objects=await drive.objectStore.list();
   for(const object of objects){
    if(object.name.startsWith(drive.objectStore.prefix)||!Number.isSafeInteger(object.size)||object.size<0)continue;
    const existing=(await db.query("SELECT id FROM csquest_library_entries WHERE drive='object' AND object_key=$1",[object.name])).rows[0];if(existing){await db.query("UPDATE csquest_library_entries SET size=$2,uploaded=$2,updated_at=$3 WHERE id=$1 AND status='ready' AND kind='file' AND size<>$2",[existing.id,object.size,object.timeModified||new Date()]);continue;}
    const segments=object.name.split('/').filter(Boolean);if(!segments.length||segments.length>99)continue;const directory=object.name.endsWith('/');let parent=null,blocked=false;
    for(const segment of segments.slice(0,directory?undefined:-1)){
     const name=label(segment),found=(await db.query("SELECT id,kind,status FROM csquest_library_entries WHERE owner_id=$1 AND drive='object' AND parent_id IS NOT DISTINCT FROM $2::uuid AND lower(name)=lower($3)",[ownerId,parent,name])).rows[0];
     if(found){if(found.kind!=='folder'||found.status!=='ready'){blocked=true;break;}parent=found.id;}
     else{parent=(await db.query("INSERT INTO csquest_library_entries(id,owner_id,drive,parent_id,name,kind) VALUES($1,$2,'object',$3,$4,'folder') RETURNING id",[randomUUID(),ownerId,parent,name])).rows[0].id;}
    }
    if(blocked)continue;if(directory){await db.query('UPDATE csquest_library_entries SET object_key=$2 WHERE id=$1 AND object_key IS NULL',[parent,object.name]);continue;}
    let name=label(segments.at(-1));const clash=(await db.query("SELECT id FROM csquest_library_entries WHERE owner_id=$1 AND drive='object' AND parent_id IS NOT DISTINCT FROM $2::uuid AND lower(name)=lower($3)",[ownerId,parent,name])).rowCount;if(clash)name=name.slice(0,180)+'-'+createHash('sha256').update(object.name).digest('hex').slice(0,12);
    await db.query("INSERT INTO csquest_library_entries(id,owner_id,drive,parent_id,name,kind,size,uploaded,status,object_key,updated_at) VALUES($1,$2,'object',$3,$4,'file',$5,$5,'ready',$6,$7) ON CONFLICT DO NOTHING",[randomUUID(),ownerId,parent,name,object.size,object.name,object.timeModified||new Date()]);
   }
  });drive.inventoryUntil=Date.now()+30000;
 })().finally(()=>{drive.inventorySync=null;});return drive.inventorySync;
}
