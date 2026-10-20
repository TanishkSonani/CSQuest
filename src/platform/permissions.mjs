export const adminIdentity=()=>process.env.PLATFORM_ADMIN_ID||process.env.LIBRARY_OWNER_ID;
export const isPlatformAdmin=(user,adminId=adminIdentity())=>!!user&&(user.role==='admin'||!!adminId&&user.id===adminId);
export async function userPermissions(pool,user,{adminId=adminIdentity(),ownerId=process.env.LIBRARY_OWNER_ID}={}){
 const admin=isPlatformAdmin(user,adminId)||!!ownerId&&user.id===ownerId;
 const library=admin||!!ownerId&&(await pool.query('SELECT 1 FROM csquest_library_access WHERE owner_id=$1 AND user_id=$2',[ownerId,user.id])).rowCount>0;
 return {role:admin?'admin':'learner',libraryAccess:library||user.account_type==='library',libraryOnly:user.account_type==='library'&&!admin};
}
