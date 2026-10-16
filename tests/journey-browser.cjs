const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const {finishJourney}=require('./journey-helper.cjs');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let browser;
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),page=await context.newPage(),errors=[],failures=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('/api/account/session'))failures.push(r.status()+' '+r.url());});
  assert.equal((await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'guided_learner',displayName:'New Learner',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  await page.goto(base);await page.locator('.unit-banner').waitFor();fs.mkdirSync('qa-results/journeys',{recursive:true});let total=0;
  for(const subject of ['coa','dl','c','ds','algo','aptitude','os']){
   const course=await(await context.request.get(base+'/api/course-content?subject='+subject)).json();
   await page.goto(base+'/#subjects');await page.locator(`[data-subject="${subject}"]`).click();await page.locator('.unit-banner').waitFor();
   const ids=[0,Math.floor(course.lessons.length/6)*3+1,course.lessons.length-1];
   for(const id of ids){
    await page.evaluate(async({subject,id})=>{const {store,flushAccount}=await import('/account-client.js');store.setItem('csquest-drafts-'+subject,'[]');store.setItem((subject==='dl'?'dl':subject)+'-quest-v1',JSON.stringify({version:1,xp:0,completed:Array.from({length:id},(_,i)=>i),settings:{sound:false}}));await flushAccount();},{subject,id});
    await page.reload();await page.locator(`[data-lesson="${id}"]`).click();await page.locator('.lesson-intro').waitFor();assert.equal(await page.locator('.lesson-notes').evaluate(el=>el.open),false,'Notes are optional and collapsed');
    await page.locator('[data-action=begin]').click();await page.locator('[data-journey-phase="0"]').waitFor();assert.equal(await page.locator('.exercise').count(),0);assert.ok(await page.locator('[data-journey-next]').isDisabled());
    await page.locator('[data-journey-card]').last().click();assert.ok(await page.locator('.journey-definition p').innerText());
    if(subject==='coa'&&id===0){await page.emulateMedia({reducedMotion:'no-preference'});await page.locator('[data-journey-card]').first().click();assert.equal(await page.locator('.journey-definition').evaluate(el=>getComputedStyle(el).animationName),'journey-arrive');await page.emulateMedia({reducedMotion:'reduce'});assert.equal(await page.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0);await page.screenshot({path:'qa-results/journeys/coa-discover.png'});}
    await page.locator('[data-journey-next]').click();await page.locator('[data-journey-phase="1"]').waitFor();assert.equal(await page.locator('dialog').evaluate(el=>el.scrollTop),0,'Each stage starts at its heading');
    assert.ok(await page.locator('[data-journey-next]').isDisabled());await page.locator('.journey-explorer button:not([disabled])').first().click();assert.ok(await page.locator('[data-journey-next]').isEnabled());
    if(id===0){
     await page.locator('[data-action=exit]').click();await page.locator('[data-action=leave]').click();await page.reload();await page.locator('[data-action=resume-saved]').click();await page.locator('[data-journey-phase="1"]').waitFor();assert.ok(await page.locator('[data-journey-next]').isEnabled(),'Exploration gate survives pause/reload');
    }
    for(const width of [320,390,1440]){await page.setViewportSize({width,height:844});assert.ok(await page.evaluate(()=>document.querySelector('dialog').scrollWidth<=innerWidth),`${subject}:${id} learning explorer overflow ${width}`);}
    await page.setViewportSize({width:390,height:844});await page.screenshot({path:`qa-results/journeys/${subject}-${id}-explore.png`});
    await finishJourney(page);assert.equal(await page.locator('.exercise').count(),1);assert.equal(await page.locator('.lesson-progress').getAttribute('aria-valuenow'),'0');
    const saved=await page.evaluate(async subject=>{const {store}=await import('/account-client.js');return JSON.parse(store.getItem(subject+'-quest-v1'));},subject);assert.equal(saved.xp,0,'Teaching earns no quiz XP');assert.equal(saved.completed.length,id,'Teaching cannot unlock a new lesson');
    await page.locator('[data-action=exit]').click();await page.locator('[data-action=leave]').click();total++;
   }
  }
  assert.deepEqual(errors,[]);assert.deepEqual(failures,[]);console.log(`Guided learning passed: ${total} early/middle/final lessons across seven courses; optional notes, real interactions, pause/reload, no unearned XP/completion and 320px–desktop layouts.`);
 }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(e=>{console.error(e);process.exitCode=1;});
