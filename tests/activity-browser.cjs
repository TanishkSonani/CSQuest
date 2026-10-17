const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let browser;
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`,headers={'X-CSQuest-Request':'1'};
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const a=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce',timezoneId:'Asia/Kolkata'}),b=await browser.newContext({reducedMotion:'reduce'});
  async function register(context,username,displayName,changes){
   const registration=await context.request.post(base+'/api/account/register',{headers,data:{username,displayName,avatar:'chip',password:'a memorable test passphrase'}});assert.equal(registration.status(),200);
   const snapshot=await registration.json();assert.equal((await context.request.post(base+'/api/account/data',{headers,data:{revision:snapshot.revision,changes}})).status(),200);return snapshot.user;
  }
  const progress=(daily,xp)=>JSON.stringify({version:1,xp,completed:[],daily,settings:{sound:false}});
  const alice=await register(a,'calendar_alice','Alice Learner',{'coa-quest-v1':progress({'2024-02-28':10,'2024-02-29':40},50),'dl-quest-v1':progress({'2024-02-29':40},40)});
  const bob=await register(b,'calendar_bob','Bob Learner',{'coa-quest-v1':progress({'2024-02-29':60,'2024-03-01':80},140)});
  const page=await a.newPage(),errors=[],failures=[];page.on('pageerror',error=>errors.push(error.message));page.on('response',response=>{if(response.status()>=400&&!response.url().endsWith('/api/account/session'))failures.push(response.status()+' '+response.url());});
  await page.goto(base+'/#progress');await page.locator('[data-calendar=personal]').waitFor();
  const calendar=page.locator('[data-calendar=personal]'),month=calendar.locator('[data-calendar-month]');
  await month.fill('2024-02');await month.dispatchEvent('change');
  assert.equal(await calendar.locator('[data-calendar-day]').count(),29);assert.match(await calendar.locator('.activity-month-stats').innerText(),/90 XP/);
  await calendar.locator('[data-calendar-day="2024-02-29"]').click();assert.match(await calendar.locator('.activity-day-detail').innerText(),/80 XP/);
  await calendar.locator('summary').click();assert.equal(await calendar.locator('tbody tr').count(),29);assert.match(await calendar.locator('tfoot').innerText(),/90 XP/);
  await calendar.locator('[data-calendar-action=previous]').click();assert.equal(await month.inputValue(),'2024-01');assert.equal(await calendar.locator('[data-calendar-day]').count(),31);assert.ok(await calendar.locator('details').evaluate(el=>el.open));
  await month.fill('2023-12');await month.dispatchEvent('change');await calendar.locator('[data-calendar-action=next]').click();assert.equal(await month.inputValue(),'2024-01');
  await calendar.locator('[data-calendar-action=today]').click();assert.ok(await calendar.locator('[data-calendar-action=next]').isDisabled());
  await month.fill('2024-02');await month.dispatchEvent('change');
  fs.mkdirSync('qa-results',{recursive:true});await calendar.screenshot({path:'qa-results/activity-calendar-mobile.png'});
  await page.goto(base+'/#social');await page.locator('.social-suggestions').waitFor();await page.locator(`[data-social=profile][data-user-id="${bob.id}"]`).first().click();await page.locator('#social-profile').waitFor();
  assert.equal(await page.locator('#social-profile [data-calendar]').count(),0,'Nonfriends see no detailed analytics');
  assert.match(await page.locator('#social-profile .social-comparison').innerText(),/Alice Learner/);assert.match(await page.locator('#social-profile .social-comparison').innerText(),/Bob Learner/);assert.match(await page.locator('.social-comparison-highlights').innerText(),/50 more XP/);
  for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:900});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Public profile overflow at ${width}`);}
  await page.setViewportSize({width:390,height:844});await page.locator('#social-profile').screenshot({path:'qa-results/public-profile-comparison.png'});
  await page.locator('#social-profile [data-social=friend-request]').click();await page.getByText('Friend request sent',{exact:true}).waitFor();
  assert.equal((await b.request.post(base+'/api/social/friends/respond',{headers,data:{userId:alice.id,response:'accept'}})).status(),200);
  await page.reload();await page.locator('.social-friend').waitFor();await page.locator(`.social-friend [data-social=profile][data-user-id="${bob.id}"]`).first().click();await page.locator('#social-profile [data-calendar=profile]').waitFor();
  const profile=page.locator('#social-profile'),comparison=profile.locator('[data-calendar=profile]');
  assert.match(await profile.locator('.social-comparison').innerText(),/Alice Learner/);assert.match(await profile.locator('.social-comparison').innerText(),/Bob Learner/);
  await comparison.locator('[data-calendar-month]').fill('2024-02');await comparison.locator('[data-calendar-month]').dispatchEvent('change');
  assert.match(await comparison.locator('.activity-comparison-summary').innerText(),/60 XP/);assert.match(await comparison.locator('.activity-comparison-summary').innerText(),/90 XP/);
  await comparison.locator('summary').click();assert.equal(await comparison.locator('tbody tr').count(),29);
  for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:900});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Profile overflow at ${width}`);}
  await page.setViewportSize({width:390,height:844});await comparison.screenshot({path:'qa-results/activity-comparison-mobile.png'});
  await page.locator('[data-action=theme]').first().click();await page.locator('#social-profile [data-calendar=profile]').waitFor();assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');assert.equal(await comparison.locator('[data-calendar-month]').inputValue(),'2024-02');
  await page.waitForFunction(()=>document.querySelector('[data-social-root]')?.getAttribute('aria-busy')==='false');
  await comparison.locator('summary').click();await comparison.evaluate(el=>scrollTo(0,scrollY+el.getBoundingClientRect().top-100));await page.screenshot({path:'qa-results/activity-comparison-dark.png'});
  await page.locator('[data-social=profile-close]').click();await page.locator('.social-friend').waitFor();
  assert.equal((await b.request.post(base+'/api/social/friends/respond',{headers,data:{userId:alice.id,response:'remove'}})).status(),200);
  const removed=await a.request.get(base+'/api/social/profile?userId='+bob.id);const publicSummary=await removed.json();assert.equal(publicSummary.comparisonAccess,'summary');assert.equal(publicSummary.learners.length,2);assert.ok(publicSummary.learners.every(user=>!('daily' in user)&&!('courses' in user)),'Removing friendship removes detailed analytics access');
  assert.deepEqual(errors,[]);assert.deepEqual(failures,[]);
  console.log('Monthly analytics passed: leap year, full daily history, subject totals, year navigation, profile discovery, friend consent, comparison, friendship removal, four widths and dark mode.');
 }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(error=>{console.error(error);process.exitCode=1;});
