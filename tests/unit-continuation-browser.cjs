const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const {lessons}=await import('../courses/coa/content/lessons.js');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});
 let browser;
 try{
  // Stale transcript metadata must not disable authored standalone content.
  await fixture.store.pool.query("UPDATE csquest_course_status SET data=jsonb_set(data,'{lessonSources}',$1::jsonb) WHERE course_id='coa'",[JSON.stringify([{id:15,ready:false}])]);
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
  const headers={'X-CSQuest-Request':'1'};
  assert.equal((await context.request.post(base+'/api/account/register',{headers,data:{username:'unit_transition',displayName:'Unit Learner',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  assert.equal((await context.request.post(base+'/api/account/data',{headers,data:{revision:0,changes:{'coa-quest-v1':JSON.stringify({version:1,xp:560,completed:Array.from({length:14},(_,id)=>id),settings:{sound:false}})}}})).status(),200);
  const page=await context.newPage(),errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto(base+'/#learn');await page.locator('[data-lesson="14"]:not(.locked)').waitFor();await page.waitForLoadState('networkidle');
  await page.locator('[data-lesson="14"]').click();await page.locator('[data-action="begin"]').click();
  for(const q of lessons[14].questions){
   if(q.type==='choice')await page.locator(`[data-choice="${q.answer}"]`).click();
   else if(q.type==='match')for(let i=0;i<q.pairs.length;i++){await page.locator(`[data-match-left="${i}"]`).click();await page.locator(`[data-match-right="${i}"]`).click();}
   else if(q.type==='order')for(const item of q.items)await page.locator('[data-order-item]').filter({hasText:item}).click();
   else throw Error('Unhandled question type '+q.type);
   await page.locator('[data-action="check-answer"]').click();await page.locator('.answer-footer.correct').waitFor();await page.locator('[data-action="next-question"]').click();
  }
  await page.locator('.celebration').waitFor();assert.match(await page.locator('.unit-banner').innerText(),/UNIT 2/);
  assert.ok((await page.locator('.result-next').innerText()).includes(lessons[15].title));
  await page.locator('[data-action="next-lesson"]').click();assert.ok((await page.locator('dialog').innerText()).includes(lessons[15].title));
  await page.evaluate(async()=>{await(await import('/account-client.js')).flushAccount();});
  await page.reload();await page.waitForLoadState('networkidle');await page.locator('[data-lesson="15"]:not(.locked)').waitFor();
  assert.match(await page.locator('.unit-banner').innerText(),/UNIT 2/);
  assert.deepEqual(errors,[]);console.log('Passed: completing level 15 opens Unit 2, next step starts level 16, and reloading preserves progress despite stale transcript readiness.');
 }finally{if(browser)await browser.close();if(server.listening)await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(error=>{console.error(error);process.exitCode=1;});
