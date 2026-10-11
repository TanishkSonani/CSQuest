const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs');
 const {testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const base=`http://127.0.0.1:${server.address().port}`;
 let browser;
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  fs.mkdirSync('qa-results',{recursive:true});
  await page.goto(base);await page.locator('.auth-form').waitFor();
  await page.screenshot({path:'qa-results/review-login.png',fullPage:true});
  const result=await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'frontend_review',displayName:'Alex Learner',avatar:'chip',password:'a memorable test passphrase',remember:true}});assert.equal(result.status(),200);
  await page.reload();await page.locator('.sidebar').waitFor();
  for(const width of [1440,900,390,320]){
   await page.setViewportSize({width,height:900});
   for(const route of ['learn','subjects','practice','errors','roadmap','progress','social','account','settings']){
    await page.goto(base+'/#'+route);await page.locator('main h1').waitFor();
    if(route==='social')await page.locator('.social-stats').waitFor();
    if(route==='learn'){
     await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
     const overlaps=await page.evaluate(()=>[...document.querySelectorAll('.path-sidekick')].flatMap(buddy=>{
      const a=buddy.getBoundingClientRect();return [...document.querySelectorAll('.path-node,.node-title,.node-meta,.chest-3d')].filter(item=>{const b=item.getBoundingClientRect();return a.left<b.right-2&&a.right>b.left+2&&a.top<b.bottom-2&&a.bottom>b.top+2;}).map(item=>item.className);
     }));assert.deepEqual(overlaps,[],`Mascot overlaps learning content at ${width}px`);
     if([1440,390].includes(width))await page.locator('.path-topic').first().screenshot({path:`qa-results/review-path-topic-${width}.png`});
    }
    const overflow=await page.evaluate(()=>Array.from(document.querySelectorAll('main *,header *')).filter(el=>el.getBoundingClientRect().right>innerWidth+1).map(el=>({class:el.className,right:el.getBoundingClientRect().right})).slice(0,12));
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${route} overflows at ${width}: ${JSON.stringify(overflow)}`);
    if([1440,390].includes(width)&&['learn','subjects','practice','progress','social','account'].includes(route))await page.screenshot({path:`qa-results/review-${route}-${width}.png`,fullPage:true});
   }
  }
  await page.goto(base+'/#learn');await page.locator('.path-sidekick').first().waitFor();
  const buddy=page.locator('.path-sidekick').first(),oldMessage=await buddy.locator('.path-sidekick-note').innerText();
  await buddy.click();assert.notEqual(await buddy.locator('.path-sidekick-note').innerText(),oldMessage);assert.equal(await buddy.locator('.byte-mascot').getAttribute('data-mascot-state'),'celebrate');
  await page.setViewportSize({width:900,height:900});
  await page.waitForFunction(()=>{const buddy=document.querySelector('.path-sidekick'),node=buddy.parentElement.querySelectorAll('.path-node')[1],a=buddy.getBoundingClientRect(),b=node.getBoundingClientRect();return Math.abs(a.top+a.height/2-b.top-b.height/2)<2;});
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Path overflows after resizing without navigation');
  await page.setViewportSize({width:320,height:900});
  await page.locator('[data-action=theme]').first().click();
  await page.goto(base+'/#social');await page.locator('.social-stats').waitFor();
  await page.screenshot({path:'qa-results/review-dark-320.png',fullPage:true});
  if(await page.locator('[data-action=more]').count()){
   await page.locator('[data-action=more]').click();await page.locator('dialog a[href="#subjects"]').click();
   await page.waitForURL('**/#subjects');assert.equal(await page.locator('dialog[open]').count(),0);
   await page.locator('[data-action=more]').click();await page.keyboard.press('Escape');assert.equal(await page.locator('dialog[open]').count(),0);
  }
  assert.deepEqual(errors,[]);console.log('Frontend review passed: nine routes at 1440, 900, 390 and 320px, login, dark theme, mobile navigation, no browser errors.');
 }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(error=>{console.error(error);process.exitCode=1;});
