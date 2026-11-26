import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID,randomBytes,createHash} from 'node:crypto';
import {libraryFixture} from './library-fixture.mjs';
import {hashPassword} from '../src/platform/accounts.mjs';
import {deleteAccount} from '../src/platform/account-deletion.mjs';
import {transaction} from '../src/platform/database.mjs';
const password='a memorable deletion test passphrase';
async function user(f,name,role='learner'){
 const id=randomUUID(),token=randomBytes(32).toString('hex'),now=Date.now();
 await f.db.store.pool.query('INSERT INTO csquest_users(id,username,display_name,avatar,password,recovery_hash,created_at,updated_at,role) VALUES($1,$2,$2,$3,$4,$5,$6,$6,$7)',[id,name,'chip',await hashPassword(password),'0'.repeat(64),now,role]);
 await f.db.store.pool.query('INSERT INTO csquest_sessions(hash,user_id,created_at,expires_at) VALUES($1,$2,$3,$4)',[createHash('sha256').update(token).digest('hex'),id,now,now+86400000]);
 return {id,token};
}
function request(f,actor,path,body,extra={}){return fetch(f.base+path,{method:'POST',headers:{cookie:'csquest_session='+(actor?.token||f.token),'Content-Type':'application/json','X-CSQuest-Request':'1',...extra},body:JSON.stringify(body)});}

test('admin deletion requires administrator access and confirmation; revokes sessions without removing shared files',async t=>{
 const f=await libraryFixture(t),a=await user(f,'delete_learner'),b=await user(f,'keep_learner');
 await f.ok(await f.req('folder',{drive:'boot',name:'Shared files survive'}));
 await f.db.store.pool.query('INSERT INTO csquest_user_data(user_id,key,value) VALUES($1,$2,$3)',[a.id,'csquest-theme','dark']);
 await f.ok(await request(f,null,'/api/admin/library-access',{userIds:[a.id],enabled:true}));
 const body={userId:a.id,username:'delete_learner'};
 assert.equal((await request(f,b,'/api/admin/delete-user',body)).status,403);
 assert.equal((await request(f,null,'/api/admin/delete-user',body,{Origin:'https://evil.example'})).status,403);
 assert.equal((await request(f,null,'/api/admin/delete-user',{...body,username:'wrong'})).status,400);
 assert.equal((await request(f,null,'/api/admin/delete-user',{...body,userId:'bad'})).status,400);
 assert.equal((await request(f,null,'/api/admin/delete-user',{userId:f.ownerId,username:'edge_owner'})).status,400);
 await f.ok(await request(f,null,'/api/admin/delete-user',body));
 for(const table of ['csquest_sessions','csquest_user_data','csquest_library_access'])assert.equal((await f.db.store.pool.query(`SELECT * FROM ${table} WHERE user_id=$1`,[a.id])).rowCount,0);
 assert.equal((await fetch(f.base+'/api/account/export',{headers:{cookie:'csquest_session='+a.token}})).status,401);
 assert.equal((await f.db.store.pool.query('SELECT id FROM csquest_users WHERE id=$1',[b.id])).rowCount,1);
 assert.equal((await f.ok(await f.req('list?drive=boot'))).entries.length,1);
 assert.equal((await request(f,null,'/api/admin/delete-user',body)).status,404);
});

test('self deletion checks password and confirmation; failed deletion preserves login; protected owner survives',async t=>{
 const f=await libraryFixture(t),a=await user(f,'self_delete');
 const body={username:'self_delete',password};
 assert.equal((await request(f,a,'/api/account/delete',{...body,password:'wrong'})).status,401);
 assert.equal((await request(f,a,'/api/account/delete',{...body,username:'wrong'})).status,400);
 await f.db.store.pool.query("INSERT INTO csquest_library_entries(id,owner_id,drive,name,kind,status) VALUES($1,$2,'boot','Owned folder','folder','ready')",[randomUUID(),a.id]);
 const blocked=await request(f,a,'/api/account/delete',body);assert.equal(blocked.status,409);assert.equal(blocked.headers.get('set-cookie'),null);
 await f.db.store.pool.query('DELETE FROM csquest_library_entries WHERE owner_id=$1',[a.id]);
 await f.ok(await request(f,a,'/api/account/delete',{...body,username:' SELF_DELETE '}));
 assert.equal((await f.db.store.pool.query('SELECT id FROM csquest_users WHERE id=$1',[a.id])).rowCount,0);
 await assert.rejects(transaction(f.db.store.pool,db=>deleteAccount(db,f.ownerId,{ownerId:f.ownerId})),/last administrator/);
 await f.db.store.pool.query('UPDATE csquest_users SET password=$2 WHERE id=$1',[f.ownerId,await hashPassword(password)]);
 const lastAdmin=await request(f,null,'/api/account/delete',{username:'edge_owner',password});assert.equal(lastAdmin.status,409);assert.equal(lastAdmin.headers.get('set-cookie'),null);assert.match((await lastAdmin.json()).error,/last administrator/);
 const admin=await user(f,'second_admin','admin');
 await assert.rejects(transaction(f.db.store.pool,db=>deleteAccount(db,f.ownerId,{ownerId:f.ownerId})),/configured platform or Library owner/);
 assert.equal((await request(f,admin,'/api/admin/delete-user',{userId:f.ownerId,username:'edge_owner'})).status,409);
 await f.ok(await request(f,null,'/api/admin/delete-user',{userId:admin.id,username:'second_admin'}));
});

test('concurrent self deletion cannot remove the final administrator',async t=>{
 const f=await libraryFixture(t),a=await user(f,'admin_one','admin'),b=await user(f,'admin_two','admin');
 // Test an installation whose administrators are assigned by role, without a configured owner.
 const results=await Promise.allSettled([a,b].map(u=>transaction(f.db.store.pool,db=>deleteAccount(db,u.id))));
 assert.equal(results.filter(r=>r.status==='fulfilled').length,1);
 assert.match(results.find(r=>r.status==='rejected').reason.message,/last administrator/);
 assert.equal(Number((await f.db.store.pool.query("SELECT count(*) FROM csquest_users WHERE role='admin'")).rows[0].count),1);
});
