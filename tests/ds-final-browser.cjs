const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs'),{lessons}=await import('../courses/ds/content/lessons.js'),{finalDSModel}=await import('../packages/learning/ds-final.js');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let browser;
 try{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});const context=await browser.newContext({viewport:{width:320,height:740},reducedMotion:'reduce'});
  assert.equal((await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'final_visual',displayName:'Visual Learner',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(base);await page.locator('.subject-picker').click();await page.locator('[data-subject="ds"]').click();await page.locator('[data-lesson="0"]').click();await page.locator('.ds-lab').waitFor();
  const seen=new Set();for(const lesson of lessons.slice(219)){
   if(seen.has(lesson.dsLab))continue;seen.add(lesson.dsLab);await page.evaluate(async lesson=>{const {dsLab}=await import('/ds-labs.js');document.querySelector('.lesson-intro').innerHTML=dsLab(lesson);},lesson);
   const root=page.locator('.ds-lab');await root.locator('[data-ds-control="n"]').fill('5');await root.locator('[data-ds-control="n"]').dispatchEvent('input');const model=finalDSModel(lesson.dsLab,5);
   for(let i=0;i<model.steps.length;i++){
    assert.equal(await root.locator('.ds-step-count').innerText(),`${i+1} / ${model.steps.length}`);assert.equal(await root.locator('.ds-insight').innerText(),model.steps[i].caption);assert.doesNotMatch(await root.locator('.ds-art').innerHTML(),/NaN|undefined/);assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth>innerWidth),false);
    if(lesson.dsLab==='hash-linear'&&model.steps[i].art.cells.includes('DELETED'))assert.equal(await root.locator('.ds-tombstone').count(),1);
    if(lesson.dsLab==='heap-sort')assert.equal(await root.locator('.ds-sorted').count(),model.steps[i].art.values.length-model.steps[i].art.size);
    if(i<model.steps.length-1)await root.locator('[data-ds-next]').click();
   }
   await root.locator('[data-ds-next]').click();assert.equal(await root.locator('.ds-step-count').innerText(),`1 / ${model.steps.length}`);assert.equal(await root.locator('[data-ds-back]').isDisabled(),true);
  }
  assert.equal(seen.size,28);fs.mkdirSync('qa-results',{recursive:true});
  for(const [width,theme,kind] of [[320,'light','array-nd'],[390,'dark','hash-linear'],[1440,'light','bernoulli']]){
   await page.setViewportSize({width,height:900});const lesson=lessons.find(l=>l.dsLab===kind);await page.evaluate(async ({lesson,theme})=>{const {dsLab}=await import('/ds-labs.js');document.documentElement.dataset.theme=theme;document.querySelector('.lesson-intro').innerHTML=dsLab(lesson);},{lesson,theme});await page.locator('[data-ds-next]').click();assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth>innerWidth),false);await page.screenshot({path:`qa-results/ds-final-${width}-${theme}.png`});
  }
  await page.emulateMedia({reducedMotion:'no-preference'});assert.equal(await page.locator('.ds-probability rect').first().evaluate(el=>getComputedStyle(el).animationName),'ds-bar-rise');await page.emulateMedia({reducedMotion:'reduce'});assert.equal(await page.locator('.ds-probability rect').first().evaluate(el=>getComputedStyle(el).animationName),'none');assert.deepEqual(errors,[]);
  console.log('Passed: all states of 28 new labs at 320px, adjustable variants, tombstones, sorted suffixes, replay, probability animation/reduced motion and mobile/dark/desktop layouts.');
 }finally{if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(e=>{console.error(e);process.exitCode=1;});
