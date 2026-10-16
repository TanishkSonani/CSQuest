const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let browser;
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`,sizes=[[320,568],[360,780],[390,844],[768,1024],[1024,768],[1440,900]],routes=['learn','subjects','practice','errors','roadmap','progress','social','account','settings'];
 const directory='qa-results/layout-audit';fs.mkdirSync(directory,{recursive:true});
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),page=await context.newPage(),errors=[],failures=[],findings=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('/api/account/session'))failures.push(r.status()+' '+r.url());});
  await page.goto(base);await page.locator('.login-wall').waitFor();
  async function checkTheme(){const value=await page.evaluate(()=>({theme:document.documentElement.dataset.theme,color:document.querySelector('meta[name=theme-color]').content,scheme:document.documentElement.style.colorScheme}));assert.equal(value.color,value.theme==='dark'?'#182b26':'#ffffff');assert.equal(value.scheme,value.theme);}
  await checkTheme();await page.locator('[data-action=theme]').click();await checkTheme();await page.reload();await page.locator('.login-wall').waitFor();await checkTheme();
  const registration=await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'responsive_audit',displayName:'A learner with a long name',avatar:'chip',password:'a memorable test passphrase'}});assert.equal(registration.status(),200);
  await page.reload();await page.locator('.unit-banner').waitFor();
  await page.evaluate(async()=>{
   const {store,flushAccount}=await import('/account-client.js'),{localDate}=await import('/shared/engine.js');const daily={},dailyStats={};
   for(let i=0;i<7;i++){const date=new Date();date.setDate(date.getDate()-i);if(i===3)continue;const day=localDate(date);daily[day]=60+i*10;dailyStats[day]={rounds:2,questions:8,correct:7,studySeconds:300};}
   store.setItem('coa-quest-v1',JSON.stringify({version:1,xp:1234567,completed:Array.from({length:18},(_,i)=>i),daily,dailyStats,settings:{sound:false}}));await flushAccount();
  });await page.reload();await page.locator('.unit-banner').waitFor();
  async function audit(route,width,theme){
   await page.goto(base+'/#'+route);await page.locator('main h1').waitFor();if(route==='social')await page.waitForFunction(()=>document.querySelector('[data-social-root]')?.getAttribute('aria-busy')==='false');
   await page.evaluate(()=>document.fonts.ready);await checkTheme();
   const result=await page.evaluate(()=>{
    const issues=[],intersect=(a,b)=>a.left<b.right-1&&a.right>b.left+1&&a.top<b.bottom-1&&a.bottom>b.top+1;
    if(document.documentElement.scrollWidth>innerWidth)issues.push('page horizontal overflow');
    for(const card of document.querySelectorAll('.weekly-card')){
     const days=[...card.querySelectorAll('.activity-day')];if(days.length!==7)issues.push('weekly day count');
     for(const day of days){const parts=[...day.children].map(el=>el.getBoundingClientRect());if(parts.some((a,i)=>parts.slice(i+1).some(b=>intersect(a,b))))issues.push('weekly labels overlap icons');
      const box=day.getBoundingClientRect();for(const child of day.children){const r=child.getBoundingClientRect();if(r.left<box.left-1||r.right>box.right+1)issues.push('weekly day label overflow');}}
    }
    for(const heading of document.querySelectorAll('.card-heading,.activity-calendar-heading,.social-section-heading')){const children=[...heading.children].map(el=>el.getBoundingClientRect());if(children.some((a,i)=>children.slice(i+1).some(b=>intersect(a,b))))issues.push('card heading overlap');}
    for(const row of document.querySelectorAll('.top-stats')){const children=[...row.children].filter(el=>getComputedStyle(el).display!=='none').map(el=>el.getBoundingClientRect());if(children.some((a,i)=>children.slice(i+1).some(b=>intersect(a,b))))issues.push('topbar stats overlap');}
    return [...new Set(issues)];
   });
   if(result.length)findings.push({route,width,theme,issues:result});
   if([320,390,1440].includes(width)&&['learn','progress','social','account','practice'].includes(route)){
    await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:`${directory}/${route}-${theme}-${width}.png`,fullPage:route!=='learn'});
    if(route==='progress')await page.locator('.weekly-card').first().screenshot({path:`${directory}/streak-${theme}-${width}.png`});
   }
  }
  for(const theme of ['light','dark']){
   if(await page.locator('html').getAttribute('data-theme')!==theme)await page.locator('[data-action=theme]').first().click();
   for(const [width,height] of sizes){await page.setViewportSize({width,height});for(const route of routes)await audit(route,width,theme);}
  }
  fs.writeFileSync(directory+'/results.json',JSON.stringify({sizes,routes,themes:['light','dark'],findings,errors,failures},null,2));
  assert.deepEqual(findings,[]);assert.deepEqual(errors,[]);assert.deepEqual(failures,[]);
  console.log('Layout audit passed: nine pages, six sizes, both themes, populated streaks, large XP, internal overlap checks and browser theme color.');
 }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(e=>{console.error(e);process.exitCode=1;});
