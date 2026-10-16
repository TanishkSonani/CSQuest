const {finishJourney}=require('./journey-helper.cjs');
const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');

(async()=>{
 const baseline=process.argv.includes('--baseline');
 const directory=`qa-results/product-${baseline?'before':'after'}`;
 fs.mkdirSync(directory,{recursive:true});
 const {createServer}=await import('../src/platform/server.mjs');
 const {testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true});
 const server=createServer({store:fixture.store});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const base=`http://127.0.0.1:${server.address().port}`;
 let browser;
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({reducedMotion:'reduce'});
  await context.addInitScript(()=>{
   const NativeAudioContext=window.AudioContext;
   window.audioAudit={contexts:0,notes:0,stops:0};
   window.AudioContext=class extends NativeAudioContext {
    constructor(...args){super(...args);window.audioAudit.contexts++;}
    createOscillator(){const node=super.createOscillator(),stop=node.stop.bind(node);window.audioAudit.notes++;node.stop=(...args)=>{window.audioAudit.stops++;return stop(...args);};return node;}
   };
  });
  const page=await context.newPage(),errors=[],failures=[];
  page.on('pageerror',error=>errors.push(error.message));
  page.on('response',response=>{if(response.status()>=400&&!response.url().endsWith('/api/account/session'))failures.push(`${response.status()} ${response.url()}`);});
  page.on('requestfailed',request=>{if(request.failure()?.errorText!=='net::ERR_ABORTED')failures.push(`${request.failure()?.errorText} ${request.url()}`);});
  const sizes=[[320,568],[390,844],[430,932],[768,1024],[1366,768],[1440,900]];
  async function capture(route,width,height){
   await page.setViewportSize({width,height});await page.goto(`${base}/#${route}`);
   await page.locator(route==='login'?'.auth-form':'main h1').waitFor();
   if(route==='social')await page.locator('.social-stats').waitFor();
   await page.evaluate(()=>document.fonts.ready);
   // The path intentionally scrolls to the current lesson. Capture the page's introduction too.
   await page.waitForTimeout(150);await page.evaluate(()=>scrollTo(0,0));
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${route} overflow at ${width}`);
   assert.deepEqual(await page.locator('img').evaluateAll(images=>images.filter(img=>!img.complete||img.naturalWidth===0).map(img=>img.src)),[],`${route}: images load`);
   if(route==='learn'){
    const primary=page.locator('[data-action=continue]').first();
    assert.ok(await primary.evaluate(el=>{const r=el.getBoundingClientRect();return r.bottom<=innerHeight&&el.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2));}),'Primary learning action is visible and unobscured');
   }
   await page.screenshot({path:`${directory}/${route}-${width}.png`,fullPage:route!=='learn',animations:'disabled'});
  }
  for(const [w,h] of sizes)await capture('login',w,h);
  await page.locator('[name=username]').fill('polish_learner');
  await page.locator('[name=password]').fill('a memorable incorrect password');
  await page.locator('[type=submit]').click();
  await page.locator('.form-message').filter({hasText:/incorrect|not found/i}).waitFor();
  failures.length=0; // The rejected login above is expected.
  const registration=await context.request.post(`${base}/api/account/register`,{headers:{'X-CSQuest-Request':'1'},data:{username:'polish_learner',displayName:'Alex Learner',avatar:'chip',password:'a memorable test passphrase'}});
  assert.equal(registration.status(),200);await page.reload();await page.locator('.unit-banner').waitFor();
  for(const [w,h] of sizes)for(const route of ['learn','subjects','practice','errors','roadmap','progress','social','account','settings'])await capture(route,w,h);
  if(!baseline){
   assert.equal(await page.evaluate(()=>window.audioAudit.contexts),0,'No audio before an explicit learning interaction');
   async function answerCurrent(){
    const draft=await page.evaluate(async()=>{const {store}=await import('/account-client.js');return JSON.parse(store.getItem('csquest-drafts-dl'))[0];});
    const q=JSON.parse(draft.queue[draft.index].signature);
    if(q.type==='choice')await page.locator(`[data-choice="${q.answer}"]`).click();
    else if(q.type==='number')await page.locator('#number-answer').fill(String(q.answer));
    else if(q.type==='truth')for(let row=0;row<q.answer.length;row++)await page.locator(`[data-truth-row="${row}"][data-truth-value="${q.answer[row]}"]`).click();
    else throw Error(`Unsupported question: ${q.type}`);
   }
   await page.setViewportSize({width:390,height:844});
   await page.goto(`${base}/#subjects`);await page.locator('#subject-search').fill('no such course');await page.locator('#no-subjects:visible').waitFor();
   await page.locator('#subject-search').fill('');await page.locator('[data-catalog-filter=available]').click();
   assert.ok(await page.locator('[data-catalog-subject]:visible').count()>0);
   await page.locator('[data-subject=dl]').click();await page.locator('.unit-banner').waitFor();
   await page.locator('[data-action=units]').click();await page.locator('dialog[open]').waitFor();await page.keyboard.press('Escape');assert.equal(await page.locator('dialog[open]').count(),0);
   await page.locator('[data-action=more]').click();await page.locator('dialog a[href="#settings"]').click();await page.waitForURL('**/#settings');assert.equal(await page.locator('dialog[open]').count(),0);
   const toggle=page.locator('[data-action=sound]');await toggle.click();const muted=await toggle.getAttribute('aria-checked');await page.reload();assert.equal(await toggle.getAttribute('aria-checked'),muted);
   if(await toggle.getAttribute('aria-checked')==='false')await toggle.click();
   assert.ok(await toggle.evaluate(el=>el===document.activeElement),'Settings retain keyboard focus');
   await page.locator('[data-action=motion]').click();assert.equal(await page.locator('html').getAttribute('data-motion'),'reduced');
   await page.goto(`${base}/#learn`);await page.locator('[data-action=continue]').first().click();await finishJourney(page);
   await answerCurrent();await page.locator('[data-action=check-answer]').click();await page.locator('.feedback').waitFor();
   assert.ok(await page.evaluate(()=>window.audioAudit.notes>0&&window.audioAudit.stops>window.audioAudit.notes),'Repeated cues replace active sounds');
   await page.screenshot({path:`${directory}/lesson-feedback-390.png`});
   await page.keyboard.press('Escape');await page.locator('[data-action=leave]').click();await page.locator('[data-action=resume-saved]').waitFor();await page.reload();await page.locator('[data-action=resume-saved]').click();await page.locator('.feedback').waitFor();
   await page.keyboard.press('Escape');await page.locator('[data-action=leave]').click();await page.locator('[data-action=discard-saved]').click();
   await page.locator('.path-sidekick').first().click();assert.equal(await page.locator('.path-sidekick .byte-mascot').first().getAttribute('data-mascot-state'),'celebrate');
   await page.goto(`${base}/#settings`);await page.locator('[data-action=sound]').click();const notesBeforeMute=await page.evaluate(()=>window.audioAudit.notes);
   await page.goto(`${base}/#practice`);await page.locator('[data-practice-mode=quick]').click();await finishJourney(page);
   for(let i=0;i<2;i++){
    await answerCurrent();
    await page.locator('[data-action=check-answer]').click();await page.locator('.answer-footer.correct').waitFor();await page.locator('[data-action=next-question]').click();
   }
   await page.locator('.celebration').waitFor();await page.screenshot({path:`${directory}/celebration-390.png`});await page.locator('[data-action=view-progress]').click();await page.locator('.badge-grid').waitFor();
   assert.equal(await page.evaluate(()=>window.audioAudit.notes),notesBeforeMute,'Muted learning creates no audio');
   await page.goto(`${base}/#settings`);await page.locator('[data-action=motion]').click();await page.emulateMedia({reducedMotion:'no-preference'});
   await page.goto(`${base}/#learn`);await page.locator('.welcome-companion').waitFor();
   assert.ok(await page.locator('.welcome-companion .byte-body').evaluate(el=>getComputedStyle(el).animationName!=='none'),'Byte has an idle animation');
   await page.emulateMedia({reducedMotion:'reduce'});
   assert.equal(await page.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0,'OS reduced motion stops animations');
   await page.locator('#toast.visible').waitFor({state:'hidden'});
   for(const [width,height] of sizes){
    await page.setViewportSize({width,height});await page.goto(`${base}/#settings`);
    if(await page.locator('html').getAttribute('data-theme')!=='dark')await page.locator('[data-action=theme]').first().click();
    await page.screenshot({path:`${directory}/dark-settings-${width}.png`,fullPage:true});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await page.goto(`${base}/#learn`);await page.locator('.path-node.current').waitFor();
    await page.locator('.path-node.current').evaluate(el=>{el.blur();const r=el.getBoundingClientRect();scrollTo(0,scrollY+r.top-160);});
    await page.screenshot({path:`${directory}/dark-path-${width}.png`});
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   }
  }
  if(!baseline){
   // A returning learner at the start of a new unit has no completed nodes in
   // that unit. Their current lesson must still be positioned on entry.
   const course=await (await context.request.get(`${base}/api/course-content?subject=dl`)).json();
   const first=course.units[1].range[0]*3;
   await page.evaluate(async first=>{
    const {store,flushAccount}=await import('/account-client.js');
    const saved=JSON.parse(store.getItem('dl-quest-v1'));
    saved.completed=Array.from({length:first},(_,i)=>i);
    store.setItem('dl-quest-v1',JSON.stringify(saved));await flushAccount();
   },first);
   await page.setViewportSize({width:390,height:844});await page.reload();
   await page.locator(`.path-node.current[data-lesson="${first}"]`).waitFor();
   assert.equal(await page.locator('.path-node.complete').count(),0);
   await page.waitForFunction(()=>{const node=document.querySelector('.path-node.current');if(!node)return false;const r=node.getBoundingClientRect();return r.top>100&&r.bottom<innerHeight-100;});
   await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));
   await page.locator('.jump-current:visible').waitFor();
   await page.locator('.jump-current').click();
   await page.waitForFunction(()=>document.activeElement?.matches('.path-node.current'));
  }
  assert.deepEqual(errors,[]);assert.deepEqual(failures,[]);
  fs.writeFileSync(`${directory}/results.json`,JSON.stringify({sizes,routes:9,pageErrors:errors,failedRequests:failures,baseline},null,2));
  console.log(`${baseline?'Baseline':'Product verification'} passed: six viewports, nine routes, screenshots in ${directory}`);
 }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(error=>{console.error(error);process.exitCode=1;});
