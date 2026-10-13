const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const {lessons}=await import('../courses/aptitude/content/lessons.js');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let browser;
 try{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),headers={'X-CSQuest-Request':'1'};
  assert.equal((await context.request.post(base+'/api/account/register',{headers,data:{username:'aptitude_browser',displayName:'Aptitude Learner',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  // Simulate a tab opened before Aptitude was published. The subjects page
  // must refresh its catalog and let the learner enter without editing storage.
  await page.route('**/subjects.js',async route=>{
   const response=await route.fetch(),body=await response.text();
   const catalog=JSON.parse(body.slice(body.indexOf('=')+1).trim().replace(/;$/,''));
   catalog.find(subject=>subject.id==='aptitude').status='planned';
   await route.fulfill({response,body:`export const subjects=${JSON.stringify(catalog)};`});
  });
  await page.goto(base+'/#learn');await page.locator('main h1').waitFor();fs.mkdirSync('qa-results',{recursive:true});
  await page.locator('.subject-picker').click();
  const card=page.locator('[data-catalog-subject="aptitude"]');
  await card.locator('[data-subject="aptitude"]:enabled').waitFor();
  assert.match(await card.innerText(),/45 levels/);
  assert.deepEqual(await page.locator('[data-catalog-subject]').evaluateAll(cards=>cards.slice(0,5).map(card=>card.dataset.catalogSubject)),['coa','dl','c','ds','aptitude']);
  await page.locator('[data-catalog-filter="available"]').click();assert.equal(await card.isVisible(),true);
  await card.locator('[data-subject="aptitude"]').click();
  await page.locator('[data-lesson="0"]:not(.locked)').click();await page.locator('.aptitude-lab').waitFor();
  await page.locator('[data-action="exit"]').click();await page.locator('[data-action="leave"]').click();
  await page.unroute('**/subjects.js');
  const values=await page.evaluate(async()=>{
   const {labModel}=await import('/aptitude-labs.js');return {interest:labModel('interest',2),work:labModel('work',6,3),sets:labModel('sets',5),rounding:labModel('rounding',-1.2),absolute:labModel('absolute',-3)};
  });
  assert.ok(Math.abs(values.interest.compound-1210)<1e-7);assert.equal(values.work.days,2);assert.equal(values.sets.union,16);assert.equal(values.sets.neither,4);assert.deepEqual(values.rounding,{floor:-2,ceiling:-1});assert.equal(values.absolute.distance,3);
  async function open(id){
   await page.evaluate(async id=>{const {store,flushAccount}=await import('/account-client.js');store.setItem('csquest-drafts-aptitude','[]');store.setItem('aptitude-quest-v1',JSON.stringify({version:1,xp:0,completed:Array.from({length:id},(_,i)=>i),settings:{sound:false}}));await flushAccount();},id);
   await page.reload();await page.locator(`[data-lesson="${id}"]:not(.locked)`).click();await page.locator('.aptitude-lab').waitFor();
  }
  for(let topic=0;topic<15;topic++){
   await open(topic*3);
   const controls=page.locator('[data-lab-control]'),before=await page.locator('.lab-insight').innerText();
   await controls.first().focus();await page.keyboard.press('ArrowRight');assert.notEqual(await page.locator('.lab-insight').innerText(),before);
   assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth>innerWidth),false);
   if([0,1,7,10,12].includes(topic))await page.locator('.aptitude-lab').screenshot({path:`qa-results/aptitude-lab-${topic}.png`});
   await page.locator('[data-action="exit"]').click();assert.equal(await page.locator('[data-action="leave"]').innerText(),'EXIT LESSON');await page.locator('[data-action="leave"]').click();
  }
  // Complete a visual number-line round, including an incorrect answer and retry.
  await open(30);await page.locator('[data-action="begin"]').click();
  await page.locator('#visual-answer').fill('6');await page.locator('#visual-answer').dispatchEvent('input');
  await page.locator('[data-action="check-answer"]').click();await page.locator('.answer-footer.incorrect').waitFor();await page.locator('[data-action="next-question"]').click();
  for(const q of [...lessons[30].questions.slice(1),lessons[30].questions[0]]){
   if(['number','visual-number'].includes(q.type))await page.locator('#number-answer').fill(String(q.answer));
   else if(q.type==='choice')await page.locator(`[data-choice="${q.answer}"]`).click();
   else if(q.type==='match')for(let i=0;i<q.pairs.length;i++){await page.locator(`[data-match-left="${i}"]`).click();await page.locator(`[data-match-right="${i}"]`).click();}
   await page.locator('[data-action="check-answer"]').click();await page.locator('.answer-footer.correct').waitFor();await page.locator('[data-action="next-question"]').click();
  }
  await page.locator('.celebration').waitFor();assert.equal(await page.locator('.celebration h1').innerText(),'Lesson complete!');assert.match(await page.locator('[data-action="next-lesson"]').innerText(),/NEXT LESSON/);await page.locator('[data-action="finish"]').click();
  await page.evaluate(async()=>{await(await import('/account-client.js')).flushAccount();});
  const saved=(await(await context.request.get(base+'/api/account/session')).json()).data;assert.ok(JSON.parse(saved['aptitude-quest-v1']).completed.includes(30));
  // Verify negative-number visual puzzles, keyboard adjustment, reload and practice.
  await open(34);await page.locator('[data-action="begin"]').click();await page.locator('#visual-answer').focus();await page.keyboard.press('ArrowRight');
  await page.locator('#number-answer').fill('-2');await page.locator('[data-action="check-answer"]').click();await page.locator('.answer-footer.correct').waitFor();
  await page.reload();await page.locator('[data-lesson="34"]').click();await page.locator('.answer-footer.correct').waitFor();
  await page.locator('[data-action="exit"]').click();await page.locator('[data-action="leave"]').click();
  for(const [width,theme] of [[1440,'light'],[390,'dark'],[320,'light']]){
   await page.setViewportSize({width,height:900});
   await page.evaluate(async theme=>{const {store,flushAccount}=await import('/account-client.js');store.setItem('csquest-theme',theme);await flushAccount();},theme);
   await open(3);assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth>innerWidth),false);
   await page.screenshot({path:`qa-results/aptitude-${width}-${theme}.png`});
   await page.locator('[data-action="exit"]').click();await page.locator('[data-action="leave"]').click();
  }
  await page.emulateMedia({reducedMotion:'no-preference'});await open(0);
  assert.equal(await page.locator('.lab-bar-track i').first().evaluate(el=>getComputedStyle(el).animationName),'lab-pop');
  await page.locator('[data-lab-replay]').click();
  await page.emulateMedia({reducedMotion:'reduce'});
  assert.equal(await page.locator('.lab-bar-track i').first().evaluate(el=>getComputedStyle(el).animationName),'none');
  assert.deepEqual(errors,[]);console.log('Aptitude passed: all 15 visual labs, keyboard controls, visual answer grading and retries, saved XP/progress, resume, mobile/desktop and themes.');
 }finally{if(browser)await browser.close();if(server.listening)await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(e=>{console.error(e);process.exitCode=1;});
