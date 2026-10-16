import test from 'node:test';
import assert from 'node:assert/strict';
import {testStore} from './database-helper.mjs';
import {createServer} from '../src/platform/server.mjs';
test('compressed course bundles use database content and remain available during progress writes',async()=>{
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let lock;
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 try{
  assert.equal((await fetch(base+'/api/course-content?subject=dl')).status,401);
  const registration=await fetch(base+'/api/account/register',{method:'POST',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1'},body:JSON.stringify({username:'course_loader',displayName:'Learner',avatar:'chip',password:'a memorable test passphrase'})});
  assert.equal(registration.status,200);const cookie=registration.headers.get('set-cookie').split(';')[0],headers={cookie,'Accept-Encoding':'gzip'};
  lock=await fixture.store.pool.connect();await lock.query('BEGIN');await lock.query("SELECT id FROM csquest_users WHERE username='course_loader' FOR UPDATE");
  const response=await fetch(base+'/api/course-content?subject=dl',{headers,signal:AbortSignal.timeout(2000)});assert.equal(response.status,200);assert.equal(response.headers.get('content-encoding'),'gzip');
  const text=await response.text(),content=JSON.parse(text);assert.equal(content.subjectId,'dl');assert.equal(content.lessons.length,294);assert.ok(Number(response.headers.get('content-length'))<Buffer.byteLength(text)*.3);
  await lock.query('ROLLBACK');lock.release();lock=null;
  const versioned=await fixture.store.documentContent('dl','learning.json');
  assert.equal((await fixture.store.documentContent('dl','learning.json',versioned.version)).content,null,'Unchanged content avoids a large database transfer');
  const warm=await fetch(base+'/api/course-content?subject=dl',{headers});assert.equal(warm.headers.get('cache-control'),'no-store');assert.equal((await warm.json()).lessons.length,294);
  const replacement={...content,lessons:[{id:700,title:'Database bundle'}]};await fixture.store.pool.query("UPDATE csquest_course_documents SET data=$1 WHERE course_id='dl' AND path='learning.json'",[replacement]);
  assert.equal((await (await fetch(base+'/api/course-content?subject=dl',{headers})).json()).lessons[0].title,'Database bundle');
  const osResponse=await fetch(base+'/api/course-content?subject=os',{headers});assert.equal(osResponse.status,200);assert.equal((await osResponse.json()).lessons.length,117);
  assert.equal((await fetch(base+'/api/course-content?subject=missing',{headers})).status,400);
  await fixture.store.pool.query("DELETE FROM csquest_sessions WHERE user_id=(SELECT id FROM csquest_users WHERE username='course_loader')");assert.equal((await fetch(base+'/api/course-content?subject=dl',{headers})).status,401);
 }finally{if(lock){await lock.query('ROLLBACK');lock.release();}await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
});
