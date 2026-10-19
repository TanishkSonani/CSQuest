import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID,randomBytes,createHash} from 'node:crypto';
import http from 'node:http';
import {libraryFixture} from './library-fixture.mjs';

async function member(f,username){
 const id=randomUUID(),token=randomBytes(32).toString('hex'),now=Date.now();
 await f.db.store.pool.query('INSERT INTO csquest_users(id,username,display_name,avatar,password,recovery_hash,created_at,revision,updated_at) SELECT $1,$2,$2,avatar,password,recovery_hash,$3,0,$3 FROM csquest_users WHERE id=$4',[id,username,now,f.ownerId]);
 await f.db.store.pool.query('INSERT INTO csquest_sessions(hash,user_id,created_at,expires_at) VALUES($1,$2,$3,$4)',[createHash('sha256').update(token).digest('hex'),id,now,now+86400000]);
 return {id,token,request:(route,body,options={})=>f.req(route,body,{...options,headers:{...options.headers,cookie:'csquest_session='+token}})};
}
async function upload(f,name='shared.txt',data=Buffer.from('private contents')){
 const u=await f.ok(await f.req('upload',{drive:'boot',name,size:data.length}));await f.ok(await f.req(`chunk?id=${u.id}&offset=0`,data,{method:'PUT'}));await f.ok(await f.req('complete',{id:u.id}));return u;
}
test('owner manages persistent Viewer/Editor grants while member writes use the same owner inventory',async t=>{
 const f=await libraryFixture(t),friend=await member(f,'friend'),u=await upload(f);
 assert.equal((await friend.request('storage')).status,403);
 assert.equal((await f.req('access',{username:'edge_owner',role:'viewer'})).status,400);
 assert.equal((await f.req('access',{username:'nobody',role:'viewer'})).status,404);
 assert.equal((await f.req('access',{username:'friend',role:'owner'})).status,400);
 await f.ok(await f.req('access',{username:' FRIEND ',role:'viewer'}));
 const storage=await f.ok(await friend.request('storage'));assert.equal(storage.role,'viewer');assert.equal(storage.drives[0].total,null);assert.equal(storage.drives[0].free,null);
 assert.equal((await f.ok(await friend.request('list?drive=boot'))).entries[0].id,u.id);assert.equal(await(await friend.request('file?id='+u.id)).text(),'private contents');
 assert.equal((await friend.request('details?id='+u.id)).status,200);
 for(const route of ['uploads','upload?id='+u.id,'access','public-links'])assert.equal((await friend.request(route)).status,403);
 for(const [route,body] of [['folder',{drive:'boot',name:'bad'}],['prepare',{drive:'boot',files:[{name:'bad',size:1}]}],['delete',{id:u.id}],['rename',{id:u.id,name:'bad'}],['access',{username:'edge_owner',role:'editor'}],['public-links',{entryId:u.id,days:null}]])assert.equal((await friend.request(route,body)).status,403);
 await f.ok(await f.req('access',{username:'friend',role:'editor'}));assert.equal((await f.ok(await friend.request('storage'))).role,'editor');
 const folder=await f.ok(await friend.request('folder',{drive:'boot',name:'Friend uploads'})),own=await f.ok(await friend.request('upload',{drive:'boot',parent:folder.id,name:'new.txt',size:4}));
 await f.ok(await friend.request(`chunk?id=${own.id}&offset=0`,Buffer.from('data'),{method:'PUT'}));await f.ok(await friend.request('complete',{id:own.id}));
 assert.equal((await f.db.store.pool.query('SELECT owner_id FROM csquest_library_entries WHERE id=$1',[own.id])).rows[0].owner_id,f.ownerId);
 await f.ok(await friend.request('rename',{id:own.id,name:'renamed.txt'}));assert.equal(await(await f.req('file?id='+own.id)).text(),'data');
 assert.equal((await friend.request('public-links',{entryId:u.id,days:7})).status,403);
 const second=await f.start(),listing=await f.ok(await friend.request('list?drive=boot',null,{at:second}));assert.equal(listing.entries.length,2);
 await f.ok(await f.req('access-remove',{userId:friend.id}));assert.equal((await friend.request('file?id='+u.id)).status,403);assert.equal((await friend.request('storage')).status,403);
 await f.ok(await f.req('access-remove',{userId:friend.id}));assert.equal((await f.ok(await f.req('access'))).members.length,0);
});

test('revoking an Editor during a slow chunk prevents its later commit',async t=>{
 const f=await libraryFixture(t),friend=await member(f,'editor');await f.ok(await f.req('access',{username:'editor',role:'editor'}));
 const u=await f.ok(await friend.request('upload',{drive:'boot',name:'in-flight.bin',size:4}));let request;
 const result=new Promise((resolve,reject)=>{request=http.request(f.base+`/api/library/chunk?id=${u.id}&offset=0`,{method:'PUT',headers:{cookie:'csquest_session='+friend.token,'X-CSQuest-Request':'1','Content-Length':4}},r=>{r.resume();r.on('end',()=>resolve(r.statusCode));});request.on('error',reject);});
 request.write('a');try{await new Promise(r=>setTimeout(r,100));await f.ok(await f.req('access-remove',{userId:friend.id}));}finally{request.end('bcd');}
 assert.equal(await result,403);assert.equal((await f.ok(await f.req('upload?id='+u.id))).uploaded,0);
});

test('public links expose only their ready file, support byte ranges, and revoke/expire/rotate immediately',async t=>{
 const f=await libraryFixture(t),u=await upload(f,'shared <script>.txt'),privateFile=await upload(f,'still-private.txt');
 const link=await f.ok(await f.req('public-links',{entryId:u.id,days:7}));assert.equal(link.token.length,43);
 const anonymous=(route,options={})=>fetch(f.base+'/api/library/'+route,options);
 const info=await(await anonymous('public-info?token='+link.token)).json();assert.equal(info.name,u.name);assert.deepEqual(Object.keys(info).sort(),['expiresAt','id','mediaType','name','size']);
 const stored=(await f.db.store.pool.query('SELECT * FROM csquest_library_public_links')).rows[0];assert.equal(stored.token_hash,createHash('sha256').update(link.token).digest('hex'));assert.equal(JSON.stringify(stored).includes(link.token),false);
 assert.equal(JSON.stringify(await f.ok(await f.req('public-links'))).includes(link.token),false);
 assert.equal(await(await anonymous('public-file?token='+link.token+'&id='+privateFile.id)).text(),'private contents');
 const range=await anonymous('public-file?token='+link.token,{headers:{Range:'bytes=0-6'}});assert.equal(range.status,206);assert.equal(await range.text(),'private');
 const head=await anonymous('public-file?token='+link.token,{method:'HEAD'});assert.equal(head.status,200);assert.equal(head.headers.get('content-length'),'16');assert.equal((await head.arrayBuffer()).byteLength,0);
 assert.equal(head.headers.get('referrer-policy'),'no-referrer');assert.match(head.headers.get('content-disposition'),/^attachment/);
 assert.equal((await anonymous('storage')).status,401);assert.equal((await anonymous('public-info?token='+u.id)).status,404);assert.equal((await anonymous('public-file?token='+link.token,{method:'POST'})).status,405);
 const next=await f.ok(await f.req('public-links',{entryId:u.id,days:null}));assert.equal((await anonymous('public-info?token='+link.token)).status,404);assert.equal((await anonymous('public-info?token='+next.token)).status,200);
 await f.db.store.pool.query("UPDATE csquest_library_public_links SET expires_at=now()-interval '1 second' WHERE entry_id=$1",[u.id]);assert.equal((await anonymous('public-file?token='+next.token)).status,404);
 const renewed=await f.ok(await f.req('public-links',{entryId:u.id,days:1}));await f.ok(await f.req('public-link-remove',{entryId:u.id}));assert.equal((await anonymous('public-info?token='+renewed.token)).status,404);
 const final=await f.ok(await f.req('public-links',{entryId:u.id,days:30}));await f.ok(await f.req('delete',{id:u.id}));assert.equal((await anonymous('public-file?token='+final.token)).status,404);assert.equal((await f.db.store.pool.query('SELECT * FROM csquest_library_public_links')).rowCount,0);
 const folder=await f.ok(await f.req('folder',{drive:'boot',name:'No public tree'}));assert.equal((await f.req('public-links',{entryId:folder.id,days:null})).status,404);
 assert.equal((await f.req('public-links',{entryId:privateFile.id,days:-1})).status,400);
 const page=await fetch(f.base+'/library-share');assert.equal(page.status,200);assert.match(await page.text(),/Shared file/);assert.match(page.headers.get('x-robots-tag'),/noindex/);
});
