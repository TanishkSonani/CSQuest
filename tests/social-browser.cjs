const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const {lessons}=await import('../courses/coa/content/lessons.js');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
 const contexts=[],errors=[];
 const waitIdle=page=>page.waitForFunction(()=>!document.querySelector('[data-social-root] button[disabled]')&&!!document.querySelector('.social-stats'));
 async function learner(username,name){
  const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce',timezoneId:'Asia/Kolkata'});contexts.push(context);
  const response=await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username,displayName:name,avatar:'chip',password:'a memorable test passphrase',remember:true}});assert.equal(response.status(),200);
  const user=(await response.json()).user,page=await context.newPage();page.on('pageerror',error=>errors.push(error.message));
  await page.goto(base+'/#social');await page.waitForSelector('.social-stats');return {context,page,user};
 }
 async function finishRound(page){
  await page.goto(base+'/#learn');await page.locator('[data-lesson="0"]').click();await page.locator('[data-action="begin"]').click();
  for(const question of lessons[0].questions){
   if(question.type==='choice')await page.locator(`[data-choice="${question.answer}"]`).click();
   else if(question.type==='match')for(let index=0;index<question.pairs.length;index++){await page.locator(`[data-match-left="${index}"]`).click();await page.locator(`[data-match-right="${index}"]`).click();}
   else throw Error('Unexpected first-lesson question type');
   await page.locator('[data-action="check-answer"]').click();await page.waitForSelector('.answer-footer.correct');await page.locator('[data-action="next-question"]').click();
  }
  await page.waitForSelector('.celebration');await page.locator('[data-action="finish"]').click();
  await page.evaluate(async()=>{await(await import('/account-client.js')).flushAccount();});
 }
 try{
  const a=await learner('social_browser_alice','Alice Learner'),b=await learner('social_browser_bob','Bob Learner');
  await a.page.locator('#social-search').fill(b.user.username);await a.page.locator('[data-social-form="search"] button[type=submit]').click();
  await waitIdle(a.page);
  assert.match(await a.page.locator('.social-suggestions').innerText(),/Bob Learner/);
  await a.page.locator(`.social-suggestions [data-social="friend-request"][data-user-id="${b.user.id}"]`).click();await a.page.getByText('Waiting for their reply',{exact:false}).waitFor();await waitIdle(a.page);
  assert.equal(await a.page.locator(`.social-suggestions [data-user-id="${b.user.id}"]`).count(),0);
  await b.page.reload();await b.page.locator('[data-social="friend-respond"][data-response="accept"]').click();await b.page.locator('.social-friend').waitFor();await waitIdle(b.page);
  await a.page.locator('[data-social="tab"][data-tab="leaderboards"]').click();await a.page.locator('[data-social="refresh"]').click();await waitIdle(a.page);
  await a.page.locator('[data-social="tab"][data-tab="friends"]').click();await a.page.locator('[data-social="compare"]').click();await a.page.locator('.social-comparison').waitFor();await waitIdle(a.page);
  assert.match(await a.page.locator('.social-comparison').innerText(),/Bob Learner/);
  for(const learner of [a,b]){
   await learner.page.locator('[data-social="tab"][data-tab="friends"]').click();await learner.page.locator('[name="leagueEnabled"]').check();await learner.page.locator('[data-social-form="settings"] button[type=submit]').click();await waitIdle(learner.page);
  }
  await a.page.locator('[data-social="tab"][data-tab="challenges"]').click();
  const create=a.page.locator('[data-social-form="challenge"]');await create.locator('[name=title]').fill('Our first shared goal');await create.locator('[name=mode]').selectOption('team');await create.locator('[name=goal]').fill('100');await create.locator('[name=friendIds]').check();
  await a.page.route('**/api/social/challenges/create',route=>route.fulfill({status:503,contentType:'application/json',body:JSON.stringify({error:'Please try again.'})}),{times:1});
  await create.locator('button[type=submit]').click();await a.page.locator('.social-error').waitFor();await waitIdle(a.page);
  assert.equal(await create.locator('[name=title]').inputValue(),'Our first shared goal');assert.equal(await create.locator('[name=mode]').inputValue(),'team');assert.equal(await create.locator('[name=goal]').inputValue(),'100');assert.ok(await create.locator('[name=friendIds]').isChecked());
  await create.locator('button[type=submit]').click();await a.page.locator('.social-challenge').waitFor();await waitIdle(a.page);
  assert.equal(await create.locator('[name=title]').inputValue(),'');
  await b.page.reload();await b.page.locator('[data-social="tab"][data-tab="challenges"]').click();await b.page.locator('[data-social="challenge-respond"][data-response=join]').click();await waitIdle(b.page);
  await finishRound(a.page);await finishRound(b.page);
  await a.page.goto(base+'/#social');await a.page.locator('.social-stats').waitFor();await a.page.locator('[data-social="tab"][data-tab="challenges"]').click();
  await a.page.getByText('Goal achieved',{exact:true}).waitFor();assert.match(await a.page.locator('.social-goal-number').innerText(),/120/);
  assert.match(await a.page.locator('.social-stats').innerText(),/1 day/);
  await a.page.locator('[data-social="challenge-detail"]').click();await a.page.locator('#social-detail').waitFor();await waitIdle(a.page);assert.equal(await a.page.locator('#social-detail tbody tr').count(),2);
  await a.page.locator('[data-social="tab"][data-tab="leaderboards"]').click();await a.page.locator('[data-social="scope"][data-scope="league"]').click();await waitIdle(a.page);
  assert.match(await a.page.locator('.social-league').innerText(),/Bronze/);assert.equal(await a.page.locator('.social-board tbody tr').count(),2);assert.equal(await a.page.locator('.social-board .rank-1').count(),2);
  await a.page.screenshot({path:'qa-results/social-desktop.png',fullPage:true});
  for(const width of [390,320]){
   await a.page.setViewportSize({width,height:900});
   for(const tab of ['friends','leaderboards','challenges','activity']){
    await a.page.locator(`.social-tabs [data-social="tab"][data-tab="${tab}"]`).click();
    assert.ok(await a.page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${tab} overflows at ${width}px`);
   }
  }
  await a.page.locator('[data-action="theme"]').first().click();await a.page.locator('.social-tabs [data-social="tab"][data-tab="challenges"]').click();await a.page.screenshot({path:'qa-results/social-mobile.png',fullPage:true});
  await a.page.locator('[data-social="tab"][data-tab="activity"]').click();assert.match(await a.page.locator('[data-social-root]').innerText(),/Bob Learner.*60 XP/s);
  await a.page.locator('[data-social="notifications-read"]').click();await waitIdle(a.page);assert.equal(await a.page.locator('.social-notifications .is-unread').count(),0);
  assert.deepEqual(errors,[]);console.log('Social browser checks passed: two-user friendships, comparison, leagues, real lesson XP, team goals, activity, notifications, mobile layouts and themes.');
 }finally{await browser.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(error=>{console.error(error);process.exit(1);});
