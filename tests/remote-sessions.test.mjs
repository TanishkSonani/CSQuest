import test from 'node:test';
import assert from 'node:assert/strict';
import net from 'node:net';
import {randomUUID} from 'node:crypto';
import {WebSocket} from 'ws';
import {hashPassword} from '../src/platform/accounts.mjs';
import {libraryFixture} from './library-fixture.mjs';

import {fakeRemoteBroker} from './fake-remote-broker.mjs';
test('remote launch requires administrator, current password and same origin; sockets are bound to their login and closing stops them',async t=>{
 const tcp=net.createServer(c=>{c.write('RFB 003.008\n');c.on('data',data=>c.write(data));});await new Promise(r=>tcp.listen(0,'127.0.0.1',r));t.after(()=>tcp.close());const broker=fakeRemoteBroker(tcp.address().port),f=await libraryFixture(t,{remoteBroker:broker}),password='a secure vm session password';await f.db.store.pool.query('UPDATE csquest_users SET password=$2 WHERE id=$1',[f.ownerId,await hashPassword(password)]);
 const call=(route,body,headers={})=>fetch(f.base+'/api/remote/'+route,{method:body?'POST':'GET',headers:{cookie:'csquest_session='+f.token,'Content-Type':'application/json','X-CSQuest-Request':'1',...headers},body:body?JSON.stringify(body):undefined});
 assert.equal((await call('status')).status,200);assert.equal((await fetch(f.base+'/api/remote/status')).status,401);assert.equal((await call('start',{kind:'firefox',password:'bad'})).status,401);assert.equal(broker.sessions.size,0);assert.equal((await call('start',{kind:'shell; rm',password})).status,400);assert.equal((await call('start',{kind:'firefox',password},{Origin:'https://evil.example'})).status,403);
 const registration=await fetch(f.base+'/api/account/register',{method:'POST',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1'},body:JSON.stringify({username:'remote_learner',displayName:'Learner',password})}),cookie=registration.headers.get('set-cookie').split(';')[0];assert.equal((await call('status',null,{cookie})).status,403);
 const s=await f.ok(await call('start',{kind:'firefox',password}));assert.equal((await call('start',{kind:'firefox',password})).status,409);assert.equal((await call('session/'+s.id+'/stop',{}, {cookie})).status,403);
 const login=await fetch(f.base+'/api/account/login',{method:'POST',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1'},body:JSON.stringify({username:'edge_owner',password})}),otherLogin=login.headers.get('set-cookie').split(';')[0];assert.equal(login.status,200);assert.equal((await call('session/'+s.id+'/lease',{}, {cookie:otherLogin})).status,404,'another login for the same administrator must not attach to this session');
 const rejected=new WebSocket(f.base.replace('http:','ws:')+'/api/remote/stream/'+s.id,{headers:{cookie:'csquest_session='+f.token,Origin:'https://evil.example'}});await new Promise(resolve=>{rejected.on('error',resolve);});assert.equal(broker.sessions.get(s.id).attached,false);
 const ws=new WebSocket(f.base.replace('http:','ws:')+'/api/remote/stream/'+s.id,{headers:{cookie:'csquest_session='+f.token,Origin:f.base}});const first=await new Promise((resolve,reject)=>{ws.once('message',resolve);ws.once('error',reject);});assert.equal(first.toString(),'RFB 003.008\n');assert.equal(broker.sessions.get(s.id).attached,true);
 const duplicate=new WebSocket(f.base.replace('http:','ws:')+'/api/remote/stream/'+s.id,{headers:{cookie:'csquest_session='+f.token,Origin:f.base}});await new Promise(resolve=>duplicate.once('error',resolve));assert.equal(broker.sessions.has(s.id),true,'duplicate connections must not terminate the existing session');
 ws.close();for(let n=0;n<30&&broker.sessions.has(s.id);n++)await new Promise(r=>setTimeout(r,20));assert.equal(broker.sessions.has(s.id),false);
 const vendor=await fetch(f.base+'/vendor/novnc/core/rfb.js');assert.equal(vendor.status,200);assert.match(vendor.headers.get('content-type'),/javascript/);assert.equal((await fetch(f.base+'/vendor/novnc/package.json')).status,404);
});
