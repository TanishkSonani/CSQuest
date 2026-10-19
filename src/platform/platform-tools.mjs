import {libraryScope,assertLibraryScope,validateLibraryScopes} from './library-scope.mjs';
import {randomUUID,randomBytes,createHash} from 'node:crypto';
import {readBody,assertSameOrigin,hashPassword} from './accounts.mjs';
import {transaction} from './database.mjs';
import {isPlatformAdmin,userPermissions} from './permissions.mjs';
const fail=(status,message)=>{throw Object.assign(Error(message),{status});};
const uuid=x=>typeof x==='string'&&/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(x);
const text=(value,max,label)=>{if(typeof value!=='string'||!value.trim()||value.trim().length>max)fail(400,`Enter ${label} (up to ${max} characters).`);return value.trim();};
export function createPlatformTools({pool,ownerId}){
 const rootId=process.env.PLATFORM_ADMIN_ID||ownerId;
 return async({req,url,send,actor})=>{
  if(!['/api/admin/','/api/help/','/api/study/'].some(p=>url.pathname.startsWith(p)))return false;
  try{
   const admin=isPlatformAdmin(actor,rootId)||actor.id===ownerId,route=url.pathname,write=req.method==='POST';
   if(!['GET','POST'].includes(req.method))fail(405,'Method not allowed.');
   if(route.startsWith('/api/admin/')&&!admin)fail(403,'Administrator access is required.');
   if(write)assertSameOrigin(req);const body=write?await readBody(req):null;
   if(route==='/api/help/permissions'&&!write){send(200,await userPermissions(pool,actor,{adminId:rootId,ownerId}));return true;}
   if(route==='/api/admin/users'&&!write){
    const q=(url.searchParams.get('q')||'').slice(0,100),offset=Math.max(0,Math.min(1e7,Number(url.searchParams.get('offset'))||0));
    const users=(await pool.query(`SELECT u.id,u.username,u.display_name AS "displayName",CASE WHEN u.id=$3 OR u.id=$2 THEN 'admin' ELSE u.role END AS role,u.created_at AS "createdAt",u.last_login_at AS "lastLoginAt",a.level AS "libraryLevel",a.scopes AS "libraryScopes",(u.role='admin' OR u.id=$3 OR u.id=$2 OR a.user_id IS NOT NULL) AS "libraryAccess",count(*) OVER()::int AS total FROM csquest_users u LEFT JOIN csquest_library_access a ON a.user_id=u.id AND a.owner_id=$2 WHERE position(lower($1) in lower(u.username||' '||u.display_name))>0 ORDER BY u.username LIMIT 100 OFFSET $4`,[q,ownerId,rootId,offset])).rows;
    send(200,{users,total:users[0]?.total||0,offset,canManageRoles:admin});return true;
   }
   if(route==='/api/admin/library-access'&&write){
    if(!Array.isArray(body.userIds)||!body.userIds.length||body.userIds.length>100||!body.userIds.every(uuid)||typeof body.enabled!=='boolean')fail(400,'Select 1–100 users and choose an access setting.');
    await transaction(pool,async db=>{
     await db.query("SELECT pg_advisory_xact_lock(hashtextextended('csquest:library:storage',0))");
     const level=body.level||'full';if(!['full','limited'].includes(level))fail(400,'Choose limited or full access.');const scopes=body.enabled&&level==='limited'?await validateLibraryScopes(db,ownerId,body.scopes):[];
     const ids=[...new Set(body.userIds)],users=(await db.query('SELECT id,role FROM csquest_users WHERE id=ANY($1::uuid[])',[ids])).rows;if(users.length!==ids.length)fail(404,'One or more users no longer exist.');
     for(const user of users){if(user.id===rootId||user.role==='admin')continue;
      if(body.enabled)await db.query("INSERT INTO csquest_library_access(owner_id,user_id,role,level,scopes) VALUES($1,$2,'viewer',$3,$4) ON CONFLICT(owner_id,user_id) DO UPDATE SET role='viewer',level=excluded.level,scopes=excluded.scopes",[ownerId,user.id,level,JSON.stringify(scopes)]);
      else await db.query('DELETE FROM csquest_library_access WHERE owner_id=$1 AND user_id=$2',[ownerId,user.id]);
     }
    });send(200,{ok:true});return true;
   }
   if(route==='/api/admin/create-user'&&write){
    const username=typeof body.username==='string'?body.username.trim().toLowerCase():'',displayName=text(body.displayName,50,'a display name');
    if(!/^[a-z0-9_]{3,32}$/.test(username)||typeof body.password!=='string'||body.password.length<15||body.password.length>128||!['learner','admin'].includes(body.role))fail(400,'Choose a username, role and a passphrase of 15–128 characters.');
    const password=await hashPassword(body.password),recoveryCode=randomBytes(18).toString('hex'),id=randomUUID(),now=Date.now();
    await transaction(pool,async db=>{await db.query("SELECT pg_advisory_xact_lock(hashtextextended('csquest:admin-roles',0))");const persisted=(await db.query('SELECT role FROM csquest_users WHERE id=$1',[actor.id])).rows[0];if(actor.id!==rootId&&actor.id!==ownerId&&persisted?.role!=='admin')fail(403,'Administrator access is required.');if((await db.query('SELECT id FROM csquest_users WHERE username=$1',[username])).rowCount)fail(409,'That username is already taken.');await db.query('INSERT INTO csquest_users(id,username,display_name,avatar,password,recovery_hash,created_at,updated_at,revision,role) VALUES($1,$2,$3,$4,$5,$6,$7,$7,0,$8)',[id,username,displayName,'chip',password,createHash('sha256').update(recoveryCode).digest('hex'),now,body.role]);await db.query('INSERT INTO csquest_social_profiles(user_id) VALUES($1)',[id]);});send(200,{id,username,role:body.role,recoveryCode});return true;
   }
   if(route==='/api/admin/role'&&write){
    if(!uuid(body.userId)||!['learner','admin'].includes(body.role))fail(400,'Choose a user and role.');
    if(body.userId===rootId||body.userId===ownerId)fail(400,'The configured administrator cannot be demoted.');
    await transaction(pool,async db=>{await db.query("SELECT pg_advisory_xact_lock(hashtextextended('csquest:admin-roles',0))");const persisted=(await db.query('SELECT role FROM csquest_users WHERE id=$1',[actor.id])).rows[0];if(actor.id!==rootId&&persisted?.role!=='admin')fail(403,'Administrator access is required.');const target=(await db.query('SELECT role FROM csquest_users WHERE id=$1',[body.userId])).rows[0];if(!target)fail(404,'User not found.');if(target.role==='admin'&&body.role==='learner'&&Number((await db.query("SELECT count(*) FROM csquest_users WHERE role='admin' OR id=$1",[rootId])).rows[0].count)<=1)fail(409,'The last administrator cannot be demoted.');await db.query('UPDATE csquest_users SET role=$2 WHERE id=$1',[body.userId,body.role]);});send(200,{ok:true});return true;
   }
   if(['/api/help/reports','/api/admin/reports'].includes(route)&&!write){
    const rows=(await pool.query(`SELECT r.*,u.username,u.display_name AS "displayName" FROM csquest_issue_reports r LEFT JOIN csquest_users u ON u.id=r.user_id WHERE ($1::boolean OR r.user_id=$2) ORDER BY r.updated_at DESC LIMIT 200`,[route.startsWith('/api/admin/')&&admin,actor.id])).rows;send(200,{reports:rows});return true;
   }
   if(route==='/api/help/reports'&&write){
    const title=text(body.title,160,'a title'),description=text(body.description,4000,'a description'),context={};
    for(const key of ['route','courseId','lessonId','fileId','error'])if(body.context?.[key]!=null)context[key]=String(body.context[key]).slice(0,key==='error'?500:100);
    const count=Number((await pool.query("SELECT count(*) FROM csquest_issue_reports WHERE user_id=$1 AND created_at>now()-interval '1 hour'",[actor.id])).rows[0].count);if(count>=20)fail(429,'You have sent several reports. Please try again later.');
    const id=randomUUID();await pool.query('INSERT INTO csquest_issue_reports(id,user_id,title,description,context) VALUES($1,$2,$3,$4,$5)',[id,actor.id,title,description,context]);send(200,{id});return true;
   }
   if(route==='/api/admin/report'&&write){
    if(!uuid(body.id)||!['new','in_progress','resolved'].includes(body.status)||!['low','normal','high'].includes(body.priority)||typeof body.response!=='string'||body.response.length>4000)fail(400,'Choose a valid status, priority and response.');
    if(!(await pool.query('UPDATE csquest_issue_reports SET status=$2,priority=$3,response=$4,updated_at=now() WHERE id=$1 RETURNING id',[body.id,body.status,body.priority,body.response])).rowCount)fail(404,'Report not found.');send(200,{ok:true});return true;
   }
   if(route==='/api/study/notes'){
    if(!write){send(200,{notes:(await pool.query('SELECT * FROM csquest_resource_notes WHERE user_id=$1 ORDER BY created_at DESC LIMIT 300',[actor.id])).rows});return true;}
    if(body.deleteId){if(!uuid(body.deleteId))fail(400,'Invalid note.');await pool.query('DELETE FROM csquest_resource_notes WHERE id=$1 AND user_id=$2',[body.deleteId,actor.id]);send(200,{ok:true});return true;}
    const content=text(body.body,4000,'a note'),seconds=Number(body.seconds||0);if(!Number.isFinite(seconds)||seconds<0||seconds>1e8)fail(400,'Invalid timestamp.');
    if(body.entryId){assertLibraryScope(await libraryScope(pool,actor,ownerId),body.entryId);if(!uuid(body.entryId)||(await userPermissions(pool,actor,{adminId:rootId,ownerId})).libraryAccess!==true)fail(403,'Library access is required.');if(!(await pool.query("SELECT id FROM csquest_library_entries WHERE id=$1 AND owner_id=$2 AND status='ready'",[body.entryId,ownerId])).rowCount)fail(404,'File not found.');}
    const course=body.courseId||null,lesson=body.lessonId==null?null:Number(body.lessonId);if(lesson!==null&&(!Number.isInteger(lesson)||lesson<0))fail(400,'Invalid lesson.');
    if(course&&!(await pool.query('SELECT id FROM csquest_courses WHERE id=$1',[course])).rowCount)fail(400,'Unknown subject.');
    const id=randomUUID();await pool.query('INSERT INTO csquest_resource_notes(id,user_id,entry_id,course_id,lesson_id,seconds,body) VALUES($1,$2,$3,$4,$5,$6,$7)',[id,actor.id,body.entryId||null,course,lesson,seconds,content]);send(200,{id});return true;
   }
   if(route==='/api/study/resources'&&!write){
    const granted=(await userPermissions(pool,actor,{adminId:rootId,ownerId})).libraryAccess;
    const entries=granted?(await pool.query("SELECT e.id,e.name,e.size,l.course_id,l.lesson_id FROM csquest_lesson_resources l JOIN csquest_library_entries e ON e.id=l.entry_id WHERE e.owner_id=$1 AND e.status='ready' AND l.course_id=$2 AND l.lesson_id=$3",[ownerId,url.searchParams.get('course'),Number(url.searchParams.get('lesson'))||0])).rows:[];const scope=await libraryScope(pool,actor,ownerId);send(200,{entries:entries.filter(e=>!scope||scope.ids.has(e.id))});return true;
   }
   if(route==='/api/study/lessons'&&!write){send(200,{lessons:(await pool.query("SELECT (lesson->>'id')::int AS id,lesson->>'title' AS title FROM csquest_course_documents d CROSS JOIN LATERAL jsonb_array_elements(d.data->'lessons') lesson WHERE d.course_id=$1 AND d.path='learning.json' ORDER BY (lesson->>'id')::int",[url.searchParams.get('course')])).rows});return true;}
   fail(404,'Action not found.');
  }catch(error){send(error.status||503,{error:error.status?error.message:'This service is temporarily unavailable.'});}
  return true;
 };
}
