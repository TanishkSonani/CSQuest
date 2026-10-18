const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
const {finishJourney}=require('./journey-helper.cjs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const {units,lecturePlans}=await import('../courses/cd/content/curriculum.js'),{lessons}=await import('../courses/cd/content/lessons.js');
 const fixture=await testStore({courses:true}),original=fixture.store,course={subjectId:'cd',units,lecturePlans,lessons};
 // Draft availability is overridden only for this isolated audit account/server.
 // This never publishes a planned course to the local or production database.
 const store={...original,async courses(){return (await original.courses()).map(c=>c.id==='cd'?{...c,status:'available'}:c);},async documentContent(id,path,version){return id==='cd'&&path==='learning.json'?{version:'draft-audit',content:version==='draft-audit'?null:JSON.stringify(course)}:original.documentContent(id,path,version);}};
 const server=createServer({store});await new Promise(r=>server.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+server.address().port,output='qa-results/compiler';fs.mkdirSync(output,{recursive:true});let browser;
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),page=await context.newPage(),errors=[],requests=[],layouts=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('/api/account/session'))requests.push(`${r.status()} ${r.url()}`);});
  assert.equal((await context.request.get(base+'/shared/compiler-models.js')).status(),200);
  assert.equal((await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'compiler_audit',displayName:'Compiler Audit',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  await page.goto(base+'/#subjects');await page.locator('[data-subject=cd]').click();await page.locator('.unit-banner').waitFor();
  if(process.argv.includes('--quizzes-only')){
   let widgets=0,checks=0;
   for(const id of [66,69,84,87,90,96,102,108,117,150].filter(id=>lessons[id].ready)){
    const u=units.find(u=>id>=u.range[0]*3&&id<(u.range[1]+1)*3);await page.goto(base+'/#roadmap');await page.locator(`[data-unit="${u.id}"]`).click();await page.locator(`[data-lesson="${id}"]`).click();await finishJourney(page);
    for(const [i,q] of lessons[id].questions.entries()){
     for(const theme of ['light','dark'])for(const [width,height] of [[320,568],[390,844],[430,932],[768,1024],[1366,768],[1440,900]]){await page.setViewportSize({width,height});await page.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);assert.ok(await page.locator('dialog').evaluate(el=>el.scrollWidth<=innerWidth+1),`Quiz ${id}/${i} overflow ${width}/${theme}`);checks++;}
     if(id===102&&i===2)await page.screenshot({path:output+'/lr-quiz-1440.png'});
     widgets++;if(i<3){if(q.type==='choice')await page.locator(`[data-choice="${q.answer}"]`).click();else await page.locator('#number-answer').fill(String(q.answer));await page.locator('[data-action=check-answer]').click();await page.locator('.answer-footer.correct').waitFor();await page.locator('[data-action=next-question]').click();}
    }
    await page.locator('[data-action=exit]').click();await page.locator('[data-action=leave]').click();console.log('Compiler quiz:',id);
   }
   assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);const report={widgets,checks,errors,requests};fs.writeFileSync(output+'/quiz-results.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));return;
  }
  for(const theme of ['light','dark'])for(const [width,height] of [[320,568],[390,844],[430,932],[768,1024],[1366,768],[1440,900]]){
   await page.setViewportSize({width,height});
   const states=await page.evaluate(async({lessons,theme,allFrames})=>{
    document.documentElement.dataset.theme=theme;const {lessonScene,frameMarkup}=await import('/concept-scenes.js'),{topicDiagram}=await import('/lesson-visuals.js');
    const host=document.createElement('div');host.style.cssText='position:fixed;inset:0;overflow:auto;padding:16px;box-sizing:border-box;background:var(--surface);z-index:99999';document.body.append(host);let count=0;
    try{for(const l of lessons){const s=lessonScene(l,'cd');if(s.frames.length<2)throw Error('Empty walkthrough '+l.id);for(const f of allFrames?s.frames:[s.frames[0],s.frames.at(-1)]){host.innerHTML='<div class="scene-stage">'+frameMarkup(f)+'</div>';if(host.scrollWidth>host.clientWidth+1)throw Error('Frame overflow '+l.id+' '+f.title+' '+host.scrollWidth+'/'+host.clientWidth);count++;}host.innerHTML=topicDiagram(l,'cd');if(host.scrollWidth>host.clientWidth+1)throw Error('Notes overflow '+l.id);}}
    finally{host.remove();}return count;
   },{lessons,theme,allFrames:width===320});layouts.push({width,theme,states});
  }
  await page.setViewportSize({width:390,height:844});let journeys=0;
  const ids=[...new Map(lessons.filter(l=>l.ready).map(l=>[l.compilerSpec.kind,l.id])).values()];
  async function open(id){const u=units.find(u=>id>=u.range[0]*3&&id<(u.range[1]+1)*3);await page.goto(base+'/#roadmap');await page.locator(`[data-unit="${u.id}"]`).click();await page.locator(`[data-lesson="${id}"]`).click();await page.locator('.lesson-intro').waitFor();}
  async function leave(){await page.locator('[data-action=exit]').click();await page.locator('[data-action=leave]').click();}
  for(const id of ids){await open(id);await finishJourney(page);journeys++;assert.equal(await page.locator('.challenge-content').count(),1);if([23,68,119,140].includes(id))await page.screenshot({path:`${output}/lesson-${id}-390.png`});await leave();console.log('Compiler journey:',id);}
  const progress=await page.evaluate(async()=>{const {store}=await import('/account-client.js');return JSON.parse(store.getItem('cd-quest-v1'))||{xp:0,completed:[]};});assert.equal(progress.xp,0);assert.equal(progress.completed.length,0);
  // A restart after a real answer starts at the beginning and gives no partial XP.
  await open(3);await finishJourney(page);const q=lessons[3].questions[0];await page.locator(`[data-choice="${q.answer}"]`).click();await page.locator('[data-action=check-answer]').click();await page.locator('[data-action=next-question]').click();await leave();await open(3);await page.locator('[data-action=begin]').click();assert.equal(await page.locator('[data-journey-phase="0"]').count(),1);await leave();
  let workshops=0;
  for(const [width,height] of [[320,568],[390,844],[430,932]]){await page.setViewportSize({width,height});for(const u of units){await page.goto(base+'/#roadmap');await page.locator(`[data-unit="${u.id}"]`).click();await page.locator(`[data-compiler-unit="${u.id}"]`).click();await page.locator('.compiler-workshop').waitFor();await page.locator('[data-lab-next]').click();assert.match(await page.locator('[data-lab-position]').innerText(),/^2 /);await page.locator('[data-lab-reset]').click();assert.match(await page.locator('[data-lab-position]').innerText(),/^1 /);if(await page.locator('.compiler-workshop input').count()){const input=page.locator('.compiler-workshop input'),value=await input.inputValue();await input.fill('@ @ @');await page.locator('.compiler-workshop [type=submit]').click();if(!await page.locator('[data-lab-error]').innerText()){await page.locator('[data-lab-next]').click();assert.match(await page.locator('[data-lab-caption]').innerText(),/Reject|conflict/i);}await input.fill(value);await page.locator('.compiler-workshop [type=submit]').click();assert.equal(await page.locator('[data-lab-error]').innerText(),'');}assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));if(width===390&&[0,4,8].includes(u.id))await page.screenshot({path:`${output}/workshop-${u.id}-${width}.png`});await page.locator('[data-action=finish]').click();workshops++;}}
  // Real playback speed, pause, reset, reduced-motion stepping and teardown.
  await open(3);await page.locator('[data-action=begin]').click();await page.locator('[data-prediction-answer]').first().click();await page.locator('[data-journey-next]').click();await page.emulateMedia({reducedMotion:'no-preference'});await page.locator('[data-scene-speed]').selectOption('900');await page.locator('[data-scene-play]').click();await page.waitForFunction(()=>Number(document.querySelector('[data-scene-position]').value)>0);await page.locator('[data-scene-play]').click();const pos=await page.locator('[data-scene-position]').inputValue();await page.waitForTimeout(1050);assert.equal(await page.locator('[data-scene-position]').inputValue(),pos);await page.locator('[data-scene-restart]').click();await page.emulateMedia({reducedMotion:'reduce'});await page.locator('[data-scene-play]').click();assert.equal(await page.locator('[data-scene-position]').inputValue(),'1');await leave();
  assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);const report={draftAudit:true,lessons:lessons.length,ready:lessons.filter(l=>l.ready).length,layouts,journeys,workshops,restart:true,playback:true,errors,requests};fs.writeFileSync(output+'/results.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 }catch(error){console.error(error);throw error;}finally{await browser?.close();await new Promise(r=>server.close(r));await fixture.dispose();}
})().catch(e=>{console.error(e);process.exitCode=1;});
