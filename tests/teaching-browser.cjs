const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
const {finishJourney}=require('./journey-helper.cjs');

(async()=>{
 const baseline=process.argv.includes('--baseline'),playbackOnly=process.argv.includes('--playback-only'),output=`qa-results/teaching-${baseline?'before':'after'}`;
 fs.mkdirSync(output,{recursive:true});
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 let browser;
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),page=await context.newPage(),errors=[],requests=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('/api/account/session'))requests.push(`${r.status()} ${r.url()}`);});
  assert.equal((await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'teaching_audit',displayName:'Teaching Audit',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  const subjects=['c','ds','algo','dl','coa','os','dbms','cn','aptitude'];let flows=0;const coverage={};
  for(const subject of playbackOnly?[]:subjects){
   const course=await(await context.request.get(`${base}/api/course-content?subject=${subject}`)).json();
   const ids=baseline?[0]:[0,Math.floor(course.lessons.length/6)*3+1,course.lessons.length-1];
   await page.goto(base+'/#subjects');await page.locator(`[data-subject="${subject}"]`).click();await page.locator('.unit-banner').waitFor();
   if(!baseline)coverage[subject]=await page.evaluate(async({subject,lessons})=>{
    const {lessonScene,frameMarkup}=await import('/concept-scenes.js');
    const host=document.createElement('section');host.className='concept-player';host.style.cssText='position:fixed;left:4px;top:4px;width:304px;max-height:500px;overflow:auto;z-index:1000;padding:12px';document.body.append(host);
    try{return lessons.map(lesson=>{
     const scene=lessonScene(lesson,subject);if(!scene.frames.length)throw Error(`No frames: ${subject}/${lesson.id}`);
     for(const frame of scene.frames)if(!frame.title||!frame.caption||/NaN|>undefined<|\[object Object\]/.test(frameMarkup(frame)))throw Error(`Invalid scene: ${subject}/${lesson.id}`);
     for(const frame of [scene.frames[0],scene.frames.at(-1)]){
      host.innerHTML=`<div class="scene-stage">${frameMarkup(frame)}</div>`;const stage=host.firstElementChild;
      if(stage.offsetHeight===0||stage.scrollWidth>stage.clientWidth+1)throw Error(`Rendered scene overflow: ${subject}/${lesson.id}: ${stage.scrollWidth}/${stage.clientWidth}`);
     }
     return {id:lesson.id,frames:scene.frames.length,modelVerified:true,firstAndLastStateLayoutVerified:true};
    });}finally{host.remove();}
   },{subject,lessons:course.lessons});
   for(const id of ids){
    // Isolated QA account: unlock the lesson under inspection, never alter quiz answers.
    await page.evaluate(async({subject,id})=>{const {store,flushAccount}=await import('/account-client.js');store.setItem(`csquest-drafts-${subject}`,'[]');store.setItem(`${subject}-quest-v1`,JSON.stringify({version:1,xp:0,completed:Array.from({length:id},(_,i)=>i),settings:{sound:false}}));await flushAccount();},{subject,id});
    await page.reload();await page.locator(`[data-lesson="${id}"]`).click();await page.locator('[data-action=begin]').click();await page.locator('.learning-journey').waitFor();
    if(!baseline){
     await page.locator('[data-prediction-answer]').first().click();await page.locator('[data-prediction-feedback]').waitFor();
     assert.ok(await page.locator('[data-journey-next]').isEnabled());
    }else await page.locator('[data-journey-card]').first().click();
    if(id===0)await page.screenshot({path:`${output}/${subject}-introduction-390.png`});
    await page.locator('[data-journey-next]').click();await page.locator('[data-journey-phase="1"]').waitFor();
    if(!baseline){
     const controls=page.locator('.journey-explorer button:not([disabled]):visible,.journey-explorer input:visible,.journey-explorer select:visible');
     const first=controls.first();
     if(await first.evaluate(el=>el.tagName==='BUTTON'))await first.click();else{await first.focus();await page.keyboard.press('ArrowRight');await first.dispatchEvent('input');}
     assert.ok(await page.locator('[data-journey-next]').isEnabled());
    }
    for(const [width,height] of [[320,568],[390,844],[430,932],[768,1024],[1366,768],[1440,900]]){
     await page.setViewportSize({width,height});assert.ok(await page.locator('dialog').evaluate(el=>el.scrollWidth<=innerWidth),`${subject}:${id} overflow ${width}`);
     if(id===0&&[390,1440].includes(width))await page.screenshot({path:`${output}/${subject}-explorer-${width}.png`});
    }
    if(!baseline&&id===0){await page.setViewportSize({width:390,height:844});await page.locator('dialog [data-action=theme]').click();assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');await page.screenshot({path:`${output}/${subject}-explorer-dark-390.png`});assert.ok(await page.locator('dialog').evaluate(el=>el.scrollWidth<=innerWidth));await page.locator('dialog [data-action=theme]').click();}
    if(!baseline){await finishJourney(page);await page.locator('.exercise').waitFor();coverage[subject].find(row=>row.id===id).journeyVerified=true;flows++;const saved=await page.evaluate(async subject=>{const {store}=await import('/account-client.js');return JSON.parse(store.getItem(subject+'-quest-v1'));},subject);assert.equal(saved.xp,0);assert.equal(saved.completed.length,id,'Ungraded teaching cannot unlock lessons');}
    await page.locator('[data-action=exit]').click();await page.locator('[data-action=leave]').click();await page.setViewportSize({width:390,height:844});
   }
  }
  if(!baseline)for(const subject of ['toc','cd']){
   assert.equal((await context.request.get(`${base}/courses/${subject}/lessons.js`)).status(),404,'Preview does not publish a planned lesson module');
   await page.goto(base+'/#subjects');await page.locator(`[data-concept-preview="${subject}"]`).click();await page.locator('[data-concept-player]').waitFor();
   await page.locator('[data-scene-next]').click();assert.equal(await page.locator('[data-scene-position]').inputValue(),'1');
   await page.locator('[data-scene-restart]').click();assert.equal(await page.locator('[data-scene-position]').inputValue(),'0');
   await page.locator('[data-scene-input]').fill(subject==='toc'?'102':'x @ y;');await page.locator('.scene-experiment [type=submit]').click();assert.ok(await page.locator('[data-scene-error]').innerText());
   await page.locator('[data-scene-input]').fill(subject==='toc'?'1111':'count==12;');await page.locator('.scene-experiment [type=submit]').click();assert.equal(await page.locator('[data-scene-error]').innerText(),'');
   await page.locator('[data-scene-position]').fill('2');await page.locator('[data-scene-position]').dispatchEvent('input');assert.equal(await page.locator('[data-scene-position]').inputValue(),'2');
   await page.emulateMedia({reducedMotion:'no-preference'});await page.locator('[data-scene-speed]').selectOption('900');await page.locator('[data-scene-play]').click();
   await page.waitForFunction(()=>Number(document.querySelector('[data-scene-position]').value)>2);await page.locator('[data-scene-play]').click();const paused=await page.locator('[data-scene-position]').inputValue();await page.waitForTimeout(1100);assert.equal(await page.locator('[data-scene-position]').inputValue(),paused,'Pause stops playback');
   await page.locator('[data-scene-restart]').click();await page.emulateMedia({reducedMotion:'reduce'});await page.locator('[data-scene-play]').click();assert.equal(await page.locator('[data-scene-position]').inputValue(),'1','Reduced motion uses a single manual step');
   await page.locator('dialog').evaluate(el=>{el.scrollTop=0;});await page.screenshot({path:`${output}/${subject}-preview-390.png`});
   await page.emulateMedia({reducedMotion:'no-preference'});await page.locator('[data-scene-play]').click();const detached=await page.locator('[data-concept-player]').elementHandle();await page.keyboard.press('Escape');assert.equal(await page.locator('dialog[open]').count(),0);await page.waitForTimeout(1000);assert.equal(await detached.$eval('[data-scene-play]',el=>el.getAttribute('aria-pressed')),'false','Closing a lesson stops its playback timer');await detached.dispose();await page.emulateMedia({reducedMotion:'reduce'});
  }
  if(!baseline&&!playbackOnly)fs.writeFileSync(`${output}/model-coverage.json`,JSON.stringify(coverage,null,2));
  assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);
  fs.writeFileSync(`${output}/${playbackOnly?'playback-results':'results'}.json`,JSON.stringify({baseline,flows,subjects:[...subjects,'toc','cd'],errors,requests},null,2));console.log(`Teaching audit passed: ${flows} full journeys; screenshots: ${output}`);
 }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(e=>{console.error(e);process.exitCode=1;});
