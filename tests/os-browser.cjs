const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const {exploreJourney,finishJourney}=require('./journey-helper.cjs');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let browser;
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),headers={'X-CSQuest-Request':'1'},page=await context.newPage(),errors=[];context.setDefaultTimeout(30000);page.on('pageerror',e=>errors.push(e.message));
  assert.equal((await context.request.post(base+'/api/account/register',{headers,data:{username:'os_lab_browser',displayName:'OS Lab Learner',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  await page.goto(base);await page.locator('.unit-banner').waitFor();await page.locator('.subject-picker').click();await page.locator('[data-subject=os]').click();await page.locator('[data-lesson="0"]').waitFor();
  const ids=[0,3,18,27,30,42,54,66,72,90,99,105,111,114,116];fs.mkdirSync('qa-results/os',{recursive:true});
  for(const id of ids){
   await page.evaluate(async id=>{const {store,flushAccount}=await import('/account-client.js');store.setItem('os-quest-v1',JSON.stringify({version:1,xp:0,completed:Array.from({length:id},(_,i)=>i),settings:{sound:false}}));await flushAccount();},id);
   await page.reload();await page.locator(`[data-lesson="${id}"]`).click();await page.locator('.lesson-intro').waitFor();
   assert.equal(await page.locator('.lesson-intro > details').evaluate(el=>el.open),false,'Notes are optional');
   await exploreJourney(page);const lab=page.locator('[data-concept-player]');await lab.waitFor();assert.ok(await lab.locator('[data-scene-art] table').count());
   assert.ok(await page.locator('[data-journey-next]').isDisabled(),'Model must be explored');
   const before=await lab.locator('[data-scene-caption]').innerText();await lab.locator('[data-scene-next]').click();assert.notEqual(await lab.locator('[data-scene-caption]').innerText(),before,'Advancing changes the explanatory state');assert.ok(await page.locator('[data-journey-next]').isEnabled());
   assert.equal(await page.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0,'Reduced motion disables animation');
   for(const width of [320,390,1440]){await page.setViewportSize({width,height:900});assert.ok(await page.evaluate(()=>document.querySelector('dialog').scrollWidth<=innerWidth),`${id} learning flow fits ${width}px`);}
   await page.setViewportSize({width:390,height:844});await finishJourney(page);await page.locator('.exercise').waitFor();assert.equal(await page.locator('.lesson-progress').getAttribute('aria-valuenow'),'0');
   if([0,27,66,99,116].includes(id))await page.screenshot({path:`qa-results/os/${id}-quiz-gate.png`});
   await page.locator('[data-action=exit]').click();await page.locator('[data-action=leave]').click();
  }
  assert.deepEqual(errors,[]);console.log(`OS browser passed: ${ids.length} process, scheduling, synchronization, memory and storage lessons across phone and desktop widths.`);
 }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(e=>{console.error(e);process.exitCode=1;});
