const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
const {finishJourney,exploreJourney}=require('./journey-helper.cjs');

(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),original=fixture.store;
 const {units,lecturePlans}=await import('../courses/cd/content/curriculum.js'),{lessons}=await import('../courses/cd/content/lessons.js');
 // Inject a newer bundle version only in this disposable draft audit to exercise
 // delayed older status snapshots without changing actual lesson versions.
 const bundle={subjectId:'cd',units,lecturePlans,lessons:lessons.map(l=>({...l,contentVersion:Math.max(2,l.contentVersion)}))};
 const store={...original,async courses(){return (await original.courses()).map(c=>c.id==='cd'?{...c,status:'available'}:c);},async documentContent(id,path,version){return id==='cd'&&path==='learning.json'?{version:'regression-draft',content:version==='regression-draft'?null:JSON.stringify(bundle)}:original.documentContent(id,path,version);}};
 const server=createServer({store});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const base=`http://127.0.0.1:${server.address().port}`,directory='qa-results/cd';fs.mkdirSync(directory,{recursive:true});let browser;
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),page=await context.newPage(),errors=[],requests=[],gates={};
  page.on('pageerror',error=>errors.push(error.message));page.on('response',response=>{if(response.status()>=400&&!response.url().endsWith('/api/account/session'))requests.push([response.status(),response.url()]);});
  assert.equal((await context.request.get(base+'/api/course-content?subject=cd')).status(),401);
  assert.equal((await context.request.get(base+'/shared/compiler-models.js')).status(),200);
  const password='a memorable audit passphrase';
  assert.equal((await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'cd_regression',displayName:'Compiler Regression',avatar:'chip',password}})).status(),200);
  await context.clearCookies();await page.goto(base);await page.locator('.auth-form').waitFor();
  await page.locator('.auth-form [name=username]').fill('cd_regression');await page.locator('.auth-form [name=password]').fill(password);await page.locator('.auth-form [type=submit]').click();await page.locator('.unit-banner').waitFor();gates.startupAndLogin=true;
  const content=await(await context.request.get(base+'/api/course-content?subject=cd')).json();
  async function subject(id){await page.goto(base+'/#subjects');await page.locator(`[data-subject="${id}"]`).click();await page.locator('.unit-banner').waitFor();}
  for(const id of ['cd','coa','cd','c','cd']){
   const expected=await(await context.request.get(base+`/api/course-content?subject=${id}`)).json();
   const began=Date.now();await subject(id);assert.ok((await page.locator('.unit-banner').innerText()).includes(expected.units[0].title));
   // This is a hung-load guard, not a production network performance claim.
   assert.ok(Date.now()-began<15000,`Subject ${id} failed to load promptly`);
  }
  gates.subjectIsolation=true;console.log('Subject switching passed');
  // Hold the first status response until the user has deliberately picked a
  // later unit. Also simulate an older status snapshot than the course bundle.
  await page.waitForLoadState('networkidle');
  let releaseStatus;const statusGate=new Promise(resolve=>releaseStatus=resolve);
  await page.route('**/api/status?subject=cd',async route=>{await statusGate;const response=await route.fetch();const payload=await response.json();payload.lessonSources=[{id:0,ready:true,contentVersion:1,title:'STALE TITLE',questions:[{type:'choice',prompt:'STALE QUESTION',options:['Stale','Other'],answer:0,explanation:'Old snapshot.'}]}];await route.fulfill({response,json:payload});});
  await page.reload();await page.locator('.unit-banner').waitFor();
  await page.goto(base+'/#roadmap');await page.locator('[data-unit="4"]').click();
  const delayed=page.waitForResponse(response=>response.url().endsWith('/api/status?subject=cd'));
  releaseStatus();await(await delayed).finished();await page.waitForTimeout(250);
  await page.locator('.path-intro [data-action=guide]').click();assert.equal(await page.locator('.unit-dialog h2').innerText(),content.units[4].title,'A late status response must preserve the manually chosen unit');await page.keyboard.press('Escape');
  await page.unroute('**/api/status?subject=cd');gates.delayedStatusKeepsUnit=true;
  async function open(id){const unit=content.units.find(u=>id>=u.range[0]*3&&id<(u.range[1]+1)*3);await page.goto(base+'/#roadmap');await page.locator(`[data-unit="${unit.id}"]`).click();await page.locator(`[data-lesson="${id}"]`).click();await page.locator('.lesson-intro').waitFor();}
  async function leave(){await page.locator('[data-action=exit]').click();await page.locator('[data-action=leave]').click();}
  async function saved(){return page.evaluate(async()=>{const {store,flushAccount}=await import('/account-client.js');await flushAccount();return JSON.parse(store.getItem('cd-quest-v1'));});}
  async function answer(q){if(q.type==='choice')await page.locator(`[data-choice="${q.answer}"]`).click();else if(q.type==='number')await page.locator('#number-answer').fill(String(q.answer));else throw Error('Unexpected Compiler exercise '+q.type);await page.locator('[data-action=check-answer]').click();await page.locator('.answer-footer.correct').waitFor();await page.locator('[data-action=next-question]').click();}

  await open(0);assert.equal(await page.locator('.lesson-intro h1').innerText(),content.lessons[0].title,'An old status snapshot must not downgrade course content');await leave();gates.staleContentProtected=true;
  await open(155);await leave();gates.openAnySection=true;
  await open(3);await finishJourney(page);await answer(content.lessons[3].questions[0]);await leave();await page.reload();await open(3);
  assert.equal(await page.locator('[data-action=resume]').count(),0);await page.locator('[data-action=begin]').click();await page.locator('[data-journey-phase="0"]').waitFor();assert.equal(await page.locator('[data-prediction-feedback]').isVisible(),false);assert.equal((await saved()).xp,0);assert.equal((await saved()).completed.length,0);gates.restartFromBeginning=true;
  await page.locator('[data-prediction-answer]').first().click();await page.locator('[data-journey-next]').click();
  await page.locator('[data-scene-input]').fill('count = 12 + 3;');await page.locator('.scene-experiment button').click();
  await page.emulateMedia({reducedMotion:'no-preference'});await page.locator('[data-scene-speed]').selectOption('900');await page.locator('[data-scene-play]').click();
  await page.waitForFunction(()=>Number(document.querySelector('[data-scene-position]').value)>0);
  await page.locator('[data-scene-play]').click();const paused=await page.locator('[data-scene-position]').inputValue();await page.waitForTimeout(1100);assert.equal(await page.locator('[data-scene-position]').inputValue(),paused);
  await page.locator('[data-scene-restart]').click();assert.equal(await page.locator('[data-scene-position]').inputValue(),'0');
  await page.emulateMedia({reducedMotion:'reduce'});await page.locator('[data-scene-play]').click();assert.equal(await page.locator('[data-scene-position]').inputValue(),'1');
  await page.emulateMedia({reducedMotion:'no-preference'});await page.locator('[data-scene-play]').click();const detached=await page.locator('[data-concept-player]').elementHandle();await leave();await page.waitForTimeout(1100);assert.equal(await detached.$eval('[data-scene-play]',el=>el.getAttribute('aria-pressed')),'false');await detached.dispose();await page.emulateMedia({reducedMotion:'reduce'});gates.playbackLifecycle=true;

  await open(3);await page.locator('[data-open-calculator]').click();await page.locator('.calculator-overlay').waitFor();assert.ok(await page.locator('.calculator-overlay').evaluate(el=>el.getBoundingClientRect().width<=innerWidth));await page.locator('[data-close-calculator]').click();await leave();gates.mobileCalculator=true;

  const end=content.units[0].range[1]*3+2,next=end+1;
  await open(end);await finishJourney(page);for(const q of content.lessons[end].questions)await answer(q);
  await page.locator('.celebration').waitFor();await page.locator('.celebration [data-compiler-unit="0"]').waitFor();const progress=await saved();assert.deepEqual(progress.completed,[end]);assert.equal(progress.xp,60);
  await page.locator('[data-action=next-lesson]').click();assert.equal(await page.locator('.lesson-intro h1').innerText(),content.lessons[next].title);await leave();gates.nextUnitAndOptionalLab=true;
  await open(end);await page.locator('.lesson-intro').waitFor();await leave();assert.deepEqual((await saved()).completed,[end]);assert.equal((await saved()).xp,60);gates.completedProgressPreserved=true;

  // Inspect all four quiz widgets, including the later later parsing and data-flow exercises that
  // a first-question-only journey would never reach.
  for(const id of [66,69,84,87,90,96,102,108,117,153]){
   await open(id);await finishJourney(page);
   for(const [i,q] of content.lessons[id].questions.entries()){
    for(const [width,height] of [[320,568],[390,844],[430,932],[768,1024],[1366,768],[1440,900]]){
     await page.setViewportSize({width,height});assert.ok(await page.locator('dialog').evaluate(el=>el.scrollWidth<=innerWidth+1),`Quiz ${id}/${i} overflows ${width}`);
    }
    if(i<3)await answer(q); // Leave the final answer unsubmitted: no award.
   }
   await leave();
  }
  gates.advancedQuizWidgets=true;
  for(const [width,height] of [[320,568],[390,844],[430,932],[768,1024],[1366,768],[1440,900]]){
   await page.setViewportSize({width,height});await page.goto(base+'/#learn');await page.locator('.unit-banner').waitFor();
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   const overlap=await page.locator('.activity-week').evaluateAll(weeks=>weeks.some(week=>{const boxes=[...week.children].map(el=>{const rectangles=[el,...el.children].map(node=>node.getBoundingClientRect());return {left:Math.min(...rectangles.map(r=>r.left)),right:Math.max(...rectangles.map(r=>r.right)),top:Math.min(...rectangles.map(r=>r.top)),bottom:Math.max(...rectangles.map(r=>r.bottom))};});return boxes.some((box,i)=>boxes.slice(i+1).some(other=>box.left<other.right-1&&other.left<box.right-1&&box.top<other.bottom-1&&other.top<box.bottom-1));}));assert.equal(overlap,false,`Study rhythm overlaps at ${width}`);
  }
  gates.shellAndStudyRhythm=true;
  await page.setViewportSize({width:1440,height:900});await page.goto(base+'/#roadmap');await page.locator('[data-unit="9"]').click();
  await page.locator('.learn-unit-tools [data-desktop-action=jump-current]').click();assert.equal(await page.locator('.unit-banner h2').innerText(),content.units[0].title);
  await page.waitForFunction(()=>{const box=document.querySelector('.path-node.current')?.getBoundingClientRect();return box&&box.top>=0&&box.bottom<=innerHeight;});
  await page.setViewportSize({width:390,height:844});await page.evaluate(()=>window.scrollTo(0,document.documentElement.scrollHeight));await page.locator('.jump-current').waitFor({state:'visible'});await page.locator('.jump-current').click();
  await page.waitForFunction(()=>{const box=document.querySelector('.path-node.current')?.getBoundingClientRect();return box&&box.top>=0&&box.bottom<=innerHeight;});
  assert.equal(await page.locator('.unit-banner [data-podcast-section]').count(),0,'Section audio must not overlap the unit-browser button');
  gates.returnToCurrentLesson=true;
  assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);
  fs.writeFileSync(`${directory}/regression-results.json`,JSON.stringify({gates,errors,requests},null,2));console.log(JSON.stringify({gates,errors,requests}));
 }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(error=>{console.error(error);process.exitCode=1;});
