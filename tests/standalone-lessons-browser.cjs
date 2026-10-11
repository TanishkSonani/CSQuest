const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 let browser;
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
  assert.equal((await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'topic_browser',displayName:'New Learner',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base+'/#learn');await page.locator('.path-node').first().waitFor();await page.waitForLoadState('networkidle');fs.mkdirSync('qa-results',{recursive:true});
  await page.locator('.path-reward').first().screenshot({path:'qa-results/chest-refreshed.png'});
  // Inspect the exact modules and status overrides served by PostgreSQL.
  const counts=await page.evaluate(async()=>{
   const counts={};for(const subject of ['coa','dl']){
    const {lessons}=await import('/courses/'+subject+'/lessons.js');const status=await(await fetch('/api/status?subject='+subject)).json();
    for(const source of status.lessonSources||[]){const lesson=lessons.find(l=>l.id===source.id);if(lesson)Object.assign(lesson,source);}
    for(const lesson of lessons){if(!lesson.foundation)throw Error('Missing foundation');const text=JSON.stringify([lesson.title,lesson.concept,lesson.teachingSteps,lesson.questions,lesson.foundation]);if(/\b(lecturer|transcripts?|recordings?)\b/i.test(text))throw Error(subject+' '+lesson.id+' has source-dependent content');}
    counts[subject]=lessons.length;
   }return counts;
  });assert.deepEqual(counts,{coa:105,dl:294});
  for(const [subject,id] of [['coa',0],['coa',7],['coa',19],['coa',75],['coa',97],['dl',0],['dl',6],['dl',18],['dl',119],['dl',161],['dl',173],['dl',228],['dl',251],['dl',284]]){
   await page.evaluate(async({subject,id})=>{
    const {store,flushAccount}=await import('/account-client.js');
    store.setItem('csquest-subject',subject);store.setItem('csquest-theme',id%2?'dark':'light');store.setItem('csquest-drafts-'+subject,'[]');
    store.setItem(subject+'-quest-v1',JSON.stringify({version:1,xp:0,completed:Array.from({length:id},(_,i)=>i),mistakes:[],settings:{sound:false}}));await flushAccount();
   },{subject,id});
   await page.goto(base+'/#learn');await page.reload();await page.locator(`[data-lesson="${id}"]:not(.locked)`).waitFor();await page.locator(`[data-lesson="${id}"]`).click();
   await page.locator('.topic-foundation').waitFor();assert.equal(await page.locator('.foundation-terms li').count(),3);
   await page.locator('.foundation-example summary').click();assert.ok(await page.locator('.foundation-example p').isVisible());
   assert.doesNotMatch(await page.locator('dialog').innerText(),/\b(lecturer|transcripts?|recordings?)\b/i);
   assert.ok(await page.evaluate(()=>document.querySelector('dialog').scrollWidth<=innerWidth),`${subject}:${id} overflows`);
   if([0,173].includes(id))await page.screenshot({path:`qa-results/topic-${subject}-${id}.png`});
   await page.locator('[data-action=begin]').click();await page.locator('[data-action=concept-hint]').click();
   await page.locator('.topic-foundation').waitFor();assert.ok(await page.locator('.foundation-terms').isVisible());
   assert.equal(await page.locator('[data-source-info]').count(),0);
  }
  // A rewritten timing question must retain its own assumptions in isolated practice.
  await page.evaluate(async()=>{const {store,flushAccount}=await import('/account-client.js');const data=JSON.parse(store.getItem('dl-quest-v1'));data.completed=Array.from({length:174},(_,i)=>i);data.mistakes=[{key:'173:1',due:0,status:'needs-review',wrongAttempts:1}];store.setItem('dl-quest-v1',JSON.stringify(data));store.setItem('csquest-drafts-dl','[]');await flushAccount();});
  await page.goto(base+'/#errors');await page.reload();await page.locator('[data-retry-key="173:1"]').click();
  assert.match(await page.locator('.worked-example').innerText(),/C4 = G3/);await page.locator('[data-action=begin]').click();assert.match(await page.locator('.challenge-content h1').innerText(),/P3P2P1P0C0/);
  assert.deepEqual(errors,[]);console.log('Standalone lesson browser checks passed: all 399 database-served lessons, 14 sample intros/refresher flows, isolated practice context, mobile layout and chest screenshot.');
 }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(error=>{console.error(error);process.exitCode=1;});
