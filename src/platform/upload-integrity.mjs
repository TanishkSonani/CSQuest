import {createHash} from 'node:crypto';
export const checksum=data=>createHash('sha256').update(data).digest('hex');
export async function uploadChunks(db,id){return (await db.query('SELECT start_byte::float8 AS offset,length,sha256 FROM csquest_library_chunks WHERE entry_id=$1 ORDER BY start_byte',[id])).rows;}
export async function recordChunk(db,entry,offset,data,expected){
 if(expected&&!/^[a-f0-9]{64}$/.test(expected))throw Object.assign(Error('Invalid upload checksum.'),{status:400});
 const actual=checksum(data);if(expected&&actual!==expected)throw Object.assign(Error('Upload integrity check failed. Retry this chunk.'),{status:422});
 await db.query('INSERT INTO csquest_library_chunks(entry_id,start_byte,length,sha256) VALUES($1,$2,$3,$4) ON CONFLICT(entry_id,start_byte) DO UPDATE SET length=excluded.length,sha256=excluded.sha256',[entry.id,offset,data.length,actual]);
 // Transfers started before checksum tracking may have an unrecorded prefix.
 if(expected&&(offset===0||entry.integrity_requested))await db.query('UPDATE csquest_library_entries SET integrity_requested=true WHERE id=$1',[entry.id]);
 return actual;
}
export async function verifyManifest(db,entry,expected){
 if(!entry.integrity_requested&&!expected)return null;
 const chunks=await uploadChunks(db,entry.id);let position=0;
 for(const chunk of chunks){if(chunk.offset!==position){if(!entry.integrity_requested)return null;throw Object.assign(Error('Upload verification is incomplete. Resume the file.'),{status:409});}position+=chunk.length;}
 if(position!==Number(entry.size)){if(!entry.integrity_requested)return null;throw Object.assign(Error('Upload verification is incomplete. Resume the file.'),{status:409});}
 const actual=checksum(chunks.map(c=>`${c.offset}:${c.length}:${c.sha256}\n`).join(''));
 if(actual!==expected)throw Object.assign(Error('Upload verification failed. Reselect the original file and retry.'),{status:422});
 return actual;
}
