const fail=(status,message)=>{throw Object.assign(Error(message),{status});};

// Use the same lock as role changes, including when two admins delete at once.
export async function deleteAccount(db,id,{adminId,ownerId}={}){
 await db.query("SELECT pg_advisory_xact_lock(hashtextextended('csquest:admin-roles',0))");
 const user=(await db.query('SELECT id,role FROM csquest_users WHERE id=$1 FOR UPDATE',[id])).rows[0];
 if(!user)fail(404,'This account no longer exists.');
 if(user.role==='admin'||id===adminId||id===ownerId){
  const count=Number((await db.query("SELECT count(*) FROM csquest_users WHERE role='admin' OR id=$1 OR id=$2",[adminId||null,ownerId||null])).rows[0].count);
  if(count<=1)fail(409,'The last administrator cannot be deleted. Create another administrator first.');
 }
 if(id===ownerId||id===adminId)fail(409,'This account is the configured platform or Library owner. Transfer that configuration before deleting it.');
 if((await db.query('SELECT 1 FROM csquest_library_entries WHERE owner_id=$1 LIMIT 1',[id])).rowCount)fail(409,'Empty this account\'s private Library, including pending uploads and folders, before deleting it.');
 // Foreign keys remove sessions, learning data, access grants and social records.
 // Files in the shared Library belong to its owner and remain untouched.
 await db.query('DELETE FROM csquest_users WHERE id=$1',[id]);
}
