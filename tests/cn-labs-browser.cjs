const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs'),{units}=await import('../courses/cn/content/curriculum.js');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let browser;
 try{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
  assert.equal((await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'cn_lab_browser',displayName:'Network Learner',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(base);
  await page.locator('.subject-picker').click();await page.locator('[data-subject="cn"]').click();await page.locator('.unit-banner').waitFor();
  const course=await(await context.request.get(base+'/api/course-content?subject=cn')).json();assert.equal(course.lessons.length,138);
  const visited=new Set();
  for(let lecture=0;lecture<46;lecture++){
   const lab=course.lessons[lecture*3+1].cnLab;assert.ok(lab,`missing CN lab for lecture ${lecture}`);visited.add(lab.kind+':'+lab.mode);
   const id=lecture*3+1,unit=units.findIndex(u=>lecture>=u.range[0]&&lecture<=u.range[1]);
   await page.evaluate(async id=>{const {store,flushAccount}=await import('/account-client.js');store.setItem('cn-quest-v1',JSON.stringify({version:1,xp:0,completed:Array.from({length:id},(_,i)=>i),settings:{sound:false}}));store.setItem('csquest-drafts-cn','[]');await flushAccount();},id);
   await page.reload();await page.locator('[data-action="units"]').click();await page.locator(`.unit-choice[data-unit="${unit}"]`).click();
   await page.locator(`[data-lesson="${id}"]`).click();await page.locator('[data-action="begin"]').click();
   await page.locator('[data-journey-phase="0"]').waitFor();await page.locator('[data-prediction-answer]').first().click();await page.locator('[data-journey-next]').click();
   const explorer=page.locator('.cn-lab');try{await explorer.waitFor({timeout:8000});}catch{console.log('CN lab debug',lecture,lab,course.lessons[id].cnLab,errors,await page.locator('.lesson-dialog').innerText().catch(()=>''));throw new Error(`CN lab missing for lecture ${lecture}`);}assert.equal(await explorer.locator('[data-cn-view]').count(),1,`${lecture}:${lab.kind} model is mounted`);
   assert.doesNotMatch(await explorer.locator('[data-cn-view]').innerText(),/NaN|undefined|null/);
   const control=explorer.locator('[data-cn-input]').first();if(await control.count()){if(await control.evaluate(el=>el.tagName)==='SELECT')await control.selectOption({index:Math.max(0,await control.locator('option').count()-1)});else await control.evaluate(el=>{el.value=el.max;el.dispatchEvent(new Event('input',{bubbles:true}));});}
   else if(await explorer.locator('[data-cn-step]').count())await explorer.locator('[data-cn-step]').first().click();
   assert.doesNotMatch(await explorer.locator('[data-cn-view]').innerText(),/NaN|undefined|null/);
   for(const width of [320,390,1440]){await page.setViewportSize({width,height:844});assert.ok(await page.evaluate(()=>document.querySelector('dialog').scrollWidth<=innerWidth),`${lecture}:${lab.kind} overflows at ${width}px`);}
   await page.locator('[data-action="exit"]').click();await page.locator('[data-action="leave"]').click();
  }
  assert.ok(visited.size>=14,`Only ${visited.size} lab variations opened`);assert.deepEqual(errors,[]);
  console.log(`Passed: all 46 CN topic labs opened and interacted; ${visited.size} kind/mode variants; no browser errors or overflow at 320px, 390px and desktop.`);
 }finally{if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(error=>{console.error(error);process.exitCode=1;});
