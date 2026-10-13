const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs'),{lessons}=await import('../courses/ds/content/lessons.js');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let browser;
 try{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});const context=await browser.newContext({viewport:{width:320,height:740},reducedMotion:'reduce'});
  assert.equal((await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'advanced_visual',displayName:'Visual Learner',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(base);await page.locator('.subject-picker').click();await page.locator('[data-subject="ds"]').click();await page.locator('[data-lesson="0"]').waitFor();
  async function open(id){await page.evaluate(async id=>{const {store,flushAccount}=await import('/account-client.js');store.setItem('ds-quest-v1',JSON.stringify({version:1,xp:0,completed:Array.from({length:id},(_,i)=>i),settings:{sound:false}}));await flushAccount();},id);await page.reload();await page.locator(`[data-lesson="${id}"]`).click();await page.locator('.ds-lab').waitFor();}
  await open(195);assert.equal(await page.locator('.ds-lab .ds-tree-wrap').evaluate(el=>el.scrollWidth<=el.clientWidth),true);
  await page.locator('[data-ds-next]').click();assert.equal(await page.locator('.ds-lab .ds-tree-wrap').evaluate(el=>el.scrollWidth<=el.clientWidth),true);
  await page.locator('[data-action="exit"]').click();await page.locator('[data-action="leave"]').click();await open(204);
  assert.ok((await page.locator('.ds-lab .ds-depth').allTextContents()).includes('index 0'));
  const visuals=lessons.slice(120).flatMap(l=>l.questions).filter(q=>q.dsVisual);
  for(const q of visuals){await page.evaluate(async q=>{const {dsPuzzleIllustration}=await import('/ds-labs.js');document.querySelector('.lesson-intro').innerHTML=dsPuzzleIllustration(q);},q);assert.equal(await page.locator('.ds-puzzle-visual').count(),1);assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth>innerWidth),false);assert.match(await page.locator('figcaption').innerText(),/GIVEN STARTING STATE/);}
  assert.deepEqual(errors,[]);console.log(`Passed: three-node AVL diagrams fit at 320px, heap array indices and ${visuals.length} advanced puzzle input diagrams without page overflow.`);
 }finally{if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(e=>{console.error(e);process.exitCode=1;});
