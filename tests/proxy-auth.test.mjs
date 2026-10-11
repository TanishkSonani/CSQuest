import test from 'node:test';
import assert from 'node:assert/strict';
import {Readable} from 'node:stream';
import {createHash} from 'node:crypto';
import {assertSameOrigin,createAccounts} from '../src/platform/accounts.mjs';

test('same-origin requests work behind an HTTPS reverse proxy and reject a different origin',()=>{
 const req={headers:{host:'learn.example.com','x-forwarded-proto':'https','x-csquest-request':'1',origin:'https://learn.example.com'},socket:{}};
 assert.doesNotThrow(()=>assertSameOrigin(req));
 req.headers.origin='https://other.example.com';
 assert.throws(()=>assertSameOrigin(req),{status:403});
 delete req.headers['x-forwarded-proto'];req.headers.origin='http://learn.example.com';
 assert.doesNotThrow(()=>assertSameOrigin(req));
});

test('production logout clears the session with a secure cookie behind the proxy',async()=>{
 const previous=process.env.NODE_ENV;process.env.NODE_ENV='production';
 try{
  const token='test-session',db={users:[{id:'learner'}],sessions:[{hash:createHash('sha256').update(token).digest('hex'),userId:'learner',expiresAt:Date.now()+60000}]};
  const handle=createAccounts({store:{accounts:async task=>task(db)},courses:[]});
  const req=Readable.from([Buffer.from('{}')]);req.method='POST';req.socket={};req.headers={host:'learn.example.com',origin:'https://learn.example.com','x-forwarded-proto':'https','x-csquest-request':'1','content-type':'application/json',cookie:`csquest_session=${token}`};
  let cookie,status;
  await handle(req,{setHeader:(_,value)=>cookie=value},new URL('https://learn.example.com/api/account/logout'),code=>status=code);
  assert.equal(status,200);assert.equal(db.sessions.length,0);
  assert.match(cookie,/HttpOnly; SameSite=Strict; Secure; Max-Age=0/);
 }finally{if(previous===undefined)delete process.env.NODE_ENV;else process.env.NODE_ENV=previous;}
});
