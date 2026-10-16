const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let browser;
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'}),page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  assert.equal((await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'desktop_learn',displayName:'Learning tools check',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  await page.goto(base);await page.locator('.unit-banner').waitFor();
  await page.evaluate(async()=>{const {store,flushAccount}=await import('/account-client.js');store.setItem('coa-quest-v1',JSON.stringify({version:1,xp:900,completed:Array.from({length:24},(_,i)=>i),daily:{},settings:{sound:false}}));await flushAccount();});
  await page.reload();await page.locator('.path-node.current[data-lesson="24"]').waitFor();
  await page.waitForFunction(()=>{const r=document.querySelector('.path-node.current').getBoundingClientRect();return r.top>100&&r.bottom<innerHeight-100;});
  const sidebar=page.locator('.page-learn>.rightbar');fs.mkdirSync('qa-results',{recursive:true});
  for(const theme of ['light','dark']){
   if(await page.locator('html').getAttribute('data-theme')!==theme)await page.locator('[data-action=theme]').first().click();
   for(const [width,height] of [[1440,900],[1366,768],[1024,600],[1920,1080]]){
    await page.setViewportSize({width,height});await page.evaluate(()=>scrollTo(0,2500));
    await page.waitForFunction(()=>document.querySelector('.page-learn>.rightbar').getBoundingClientRect().top>=76);
    const before=await sidebar.boundingBox();assert.ok(before.y>=76&&before.y+before.height<=height-10,'Sidebar fits viewport below the header');
    await page.evaluate(()=>scrollBy(0,600));const after=await sidebar.boundingBox();assert.ok(Math.abs(after.y-before.y)<2,'Sidebar stays anchored while ladder scrolls');
    const control=sidebar.locator('[data-desktop-action=units]');await control.click();await page.locator('.unit-dialog').waitFor();await page.keyboard.press('Escape');
    await sidebar.locator('.learn-calendar-panel summary').first().click();
    await sidebar.locator('[data-calendar=learn]').scrollIntoViewIfNeeded();
    assert.ok(await sidebar.evaluate(el=>el.scrollTop>0),'Tall sidebar scrolls independently');
    assert.ok(await control.evaluate(el=>{const r=el.getBoundingClientRect();return r.top>=76&&r.bottom<innerHeight;}),'Unit controls remain accessible inside a scrolled sidebar');
    const calendar=sidebar.locator('[data-calendar=learn]');assert.ok(await calendar.evaluate(el=>el.scrollWidth<=el.clientWidth),'Sidebar calendar fits without horizontal overflow');
    await calendar.locator('[data-calendar-action=previous]').click();await calendar.locator('summary').click();assert.ok(await calendar.locator('tbody tr').count()>=28);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await sidebar.locator('.learn-calendar-panel summary').first().click();await sidebar.evaluate(el=>el.scrollTop=0);
    if(width===1440)await page.screenshot({path:`qa-results/desktop-learn-${theme}.png`});
   }
  }
  await sidebar.locator('[data-desktop-action=guide]').click();await page.locator('.guide-list').waitFor();await page.keyboard.press('Escape');
  await sidebar.locator('[data-desktop-action=units]').click();await page.locator('.unit-choice[data-unit="0"]').click();assert.equal(await page.locator('.path-node.current').count(),0);await sidebar.locator('[data-desktop-action=jump-current]').click();await page.locator('.path-node.current[data-lesson="24"]').waitFor();
  for(const width of [390,768]){await page.setViewportSize({width,height:844});assert.equal(await sidebar.isVisible(),false);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
  assert.deepEqual(errors,[]);console.log('Desktop Learn passed: anchored tools, independent scrolling, sticky unit controls, monthly calendar, unit/guide/current actions, four desktop sizes, both themes and mobile fallback.');
 }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(e=>{console.error(e);process.exitCode=1;});
