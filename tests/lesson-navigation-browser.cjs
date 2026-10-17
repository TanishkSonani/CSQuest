const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {finishJourney}=require('./journey-helper.cjs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let browser;
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`,headers={'X-CSQuest-Request':'1'};
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'}),page=await context.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  const registration=await context.request.post(base+'/api/account/register',{headers,data:{username:'concept_navigation',displayName:'Concept Learner',avatar:'chip',password:'a memorable test passphrase'}});assert.equal(registration.status(),200);
  const account=await registration.json(),mistakes=[0,1,2].map(i=>({key:`0:${i}`,due:1,status:'active',lastAnswer:'test answer'}));
  assert.equal((await context.request.post(base+'/api/account/data',{headers,data:{revision:account.revision,changes:{'coa-quest-v1':JSON.stringify({version:1,xp:0,completed:[],mistakes,settings:{sound:false}})}}})).status(),200);
  await page.goto(base);await page.locator('.unit-banner').waitFor();fs.mkdirSync('qa-results/navigation',{recursive:true});
  for(const width of [1180,1440]){
   await page.setViewportSize({width,height:900});const badge=page.locator('.sidebar a[href="#errors"] .nav-review-count');assert.equal(await badge.innerText(),'3');
   assert.ok(await badge.evaluate(el=>{const b=el.getBoundingClientRect(),p=el.closest('a').getBoundingClientRect();return b.width>=22&&b.height===22&&b.right<=p.right;}),'Review badge must keep its shape inside the sidebar');
  }
  await page.screenshot({path:'qa-results/navigation/sidebar-light.png'});
  await page.locator('[data-action=theme]').first().click();await page.screenshot({path:'qa-results/navigation/sidebar-dark.png'});
  const course=await(await context.request.get(base+'/api/course-content?subject=coa')).json();
  await page.locator('[data-action=units]').first().click();await page.locator('#concept-search').fill('no_such_concept');assert.ok(await page.locator('[data-concept-empty]').isVisible());
  await page.locator('#concept-search').fill('cache');assert.ok(await page.locator('.concept-lesson:visible').count()>0);assert.equal(await page.locator('.concept-lesson:visible').count(),24);
  for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:900});assert.ok(await page.locator('dialog').evaluate(el=>el.scrollWidth<=el.clientWidth+1),`Concept browser overflow at ${width}`);}
  await page.setViewportSize({width:390,height:844});await page.screenshot({path:'qa-results/navigation/concept-search-mobile.png'});
  await page.locator('[data-lesson="72"]').click();await page.locator('.lesson-intro').waitFor();await finishJourney(page);
  await page.locator('#number-answer').fill(String(course.lessons[72].questions[0].answer));await page.locator('[data-action=check-answer]').click();await page.locator('.answer-footer.correct').waitFor();await page.locator('[data-action=next-question]').click();
  await page.locator('[data-action=exit]').click();assert.match(await page.locator('.exit-confirm').innerText(),/start from the beginning/);
  await page.locator('[data-action=resume]').click();assert.equal(await page.locator('.lesson-progress').getAttribute('aria-valuenow'),'1','Keep learning preserves the current attempt');
  await page.keyboard.press('Escape');await page.locator('[data-action=leave]').click();assert.equal(await page.locator('[data-action=resume-saved]').count(),0);
  await page.evaluate(async()=>{await(await import('/account-client.js')).flushAccount();});await page.reload();await page.locator('.unit-banner').waitFor();
  await page.locator('[data-action=units]').first().click();await page.locator('[data-unit="4"]').click();await page.locator('[data-lesson="72"]').waitFor();assert.equal(await page.locator('.path-node.locked').count(),0,'Future lessons are open without earlier completions');
  await page.locator('[data-lesson="72"]').click();await page.locator('.lesson-intro').waitFor();await page.locator('[data-action=begin]').click();await page.locator('[data-journey-phase="0"]').waitFor();assert.ok(await page.locator('[data-journey-next]').isDisabled(),'Teaching restarts with no prediction carried over');
  await finishJourney(page);assert.equal(await page.locator('.lesson-progress').getAttribute('aria-valuenow'),'0');
  for(const question of course.lessons[72].questions){await page.locator('#number-answer').fill(String(question.answer));await page.locator('[data-action=check-answer]').click();await page.locator('.answer-footer.correct').waitFor();await page.locator('[data-action=next-question]').click();}
  await page.locator('.celebration').waitFor();assert.match(await page.locator('.result-next').innerText(),new RegExp(course.lessons[73].title));
  const data=await page.evaluate(async()=>{const {store}=await import('/account-client.js');return JSON.parse(store.getItem('coa-quest-v1'));});assert.deepEqual(data.completed,[72]);assert.equal(data.xp,60);
  await page.locator('[data-action=next-lesson]').click();assert.equal(await page.locator('.lesson-intro h1').innerText(),course.lessons[73].title);
  await page.keyboard.press('Escape');await page.locator('[data-action=leave]').click();assert.deepEqual(errors,[]);
  console.log('Navigation passed: review badges, concept search, four widths, open future units, exit/restart, cancelled exit, accurate completion/XP and sequential continuation after jumping.');
 }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(e=>{console.error(e);process.exitCode=1;});
