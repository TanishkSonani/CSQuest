import {transaction} from './database.mjs';
import {readBody,assertSameOrigin} from './accounts.mjs';
export async function refreshDriveSettings(pool,drives){
 if(!drives.some(d=>d.kind==='object'))return;
 const {rows}=await pool.query('SELECT drive,quota_bytes FROM csquest_library_drive_settings');for(const row of rows){const drive=drives.find(d=>d.id===row.drive);if(drive)drive.quota=Number(row.quota_bytes);}
}
export async function handleDriveSettings({route,req,send,actor,role,pool,drives,lock,ownerId}){
 if(route!=='drive-settings')return false;
 if(req.method!=='POST')throw Object.assign(Error('Method not allowed.'),{status:405});assertSameOrigin(req);
 if(role!=='owner'||actor.id===undefined)throw Object.assign(Error('Only an administrator can configure drive capacity.'),{status:403});
 const body=await readBody(req),drive=drives.find(d=>d.id===body.drive&&d.kind==='object'),quota=Math.round(Number(body.quotaGB)*1e9);
 if(!drive||typeof body.quotaGB!=='number'||!Number.isFinite(body.quotaGB)||!Number.isSafeInteger(quota)||quota<1e6)throw Object.assign(Error('Enter an Object Storage capacity of at least 0.001 GB.'),{status:400});
 await transaction(pool,async db=>{await lock(db);const {rows}=await db.query("SELECT coalesce(sum(size),0) AS committed FROM csquest_library_entries WHERE owner_id=$1 AND drive=$2 AND kind='file' AND (status='ready' OR status='uploading' AND expires_at>now())",[ownerId,drive.id]);if(quota<Number(rows[0].committed))throw Object.assign(Error('Capacity cannot be lower than existing files and reserved uploads.'),{status:409});await db.query('INSERT INTO csquest_library_drive_settings(drive,quota_bytes,updated_by) VALUES($1,$2,$3) ON CONFLICT(drive) DO UPDATE SET quota_bytes=excluded.quota_bytes,updated_by=excluded.updated_by,updated_at=now()',[drive.id,quota,actor.id]);});
 drive.quota=quota;send(200,{ok:true,drive:drive.id,quota});return true;
}
