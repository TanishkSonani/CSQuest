const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs/promises'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs');
 const {testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',args:['--disable-gpu']});
 try{
 const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),page=await context.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base);await page.waitForSelector('.login-wall');assert.equal(await page.locator('.sidebar').count(),0);
 await page.evaluate(()=>{localStorage.setItem('coa-quest-v1',JSON.stringify({version:1,xp:60,completed:[0],daily:{},settings:{sound:false}}));});
 await page.goto(base+'/#account');await page.locator('[data-account="tab"][data-tab="register"]').first().click();
 const form=page.locator('[data-account-form="register"]');
 await form.locator('[name=username]').fill('learner_one');await form.locator('[name=displayName]').fill('Learner One');await form.locator('[name=password]').fill('a memorable test passphrase');
 await form.locator('[name=password]').press('Enter');await page.waitForSelector('.recovery-dialog code');
 const recoveryCode=await page.locator('.recovery-dialog code').innerText();assert.ok(recoveryCode.length>20);
 await page.locator('[data-action="close"]').click();await page.waitForSelector('.profile-hero');
 assert.equal(await page.locator('#main .course-completion').first().locator('.course-percent').innerText(),'1%');
 assert.equal(await page.locator('.personal-stats .card').first().locator('strong').innerText(),'60');
 const profile=page.locator('[data-account-form="profile"]');await profile.locator('[name=displayName]').fill('My Private Profile');await profile.locator('.avatar-option:has(input[value=pirate])').click();await profile.locator('[type=submit]').click();await page.waitForFunction(()=>document.querySelector('.profile-hero h1')?.textContent==='My Private Profile');
 assert.equal(await page.locator('.profile-hero .avatar-sprite').getAttribute('aria-label'),'Pirate captain');
 await page.locator('[data-avatar-filter]').selectOption('mythic');assert.equal(await page.locator('.avatar-option:visible').count(),3);
 await page.locator('[data-avatar-filter]').selectOption('clash');assert.equal(await page.locator('.avatar-option:visible').count(),4);
 await page.locator('[data-avatar-filter]').selectOption('all');assert.equal(await page.locator('.avatar-option:visible').count(),22);
 await page.goto(base+'/#learn');await page.locator('[data-lesson="0"]').click();await page.locator('[data-action="begin"]').click();
 await page.keyboard.press('1');await page.keyboard.press('Enter');await page.waitForSelector('.answer-footer.correct');await page.keyboard.press('Enter');
 const {lessons}=await import(pathToFileURL(path.join(process.cwd(),'courses/coa/content/lessons.js')).href),pairs=lessons[0].questions[1].pairs;
 for(let i=0;i<pairs.length;i++){
  await page.locator(`[data-match-left="${i}"]`).focus();await page.keyboard.press('Enter');
  await page.locator(`[data-match-right="${i}"]`).focus();await page.keyboard.press('Enter');
 }
 await page.locator('[data-action="check-answer"]').focus();await page.keyboard.press('Enter');await page.waitForSelector('.answer-footer.correct');await page.keyboard.press('Enter');
 for(let i=2;i<4;i++){await page.keyboard.press(String(lessons[0].questions[i].answer+1));await page.keyboard.press('Enter');await page.waitForSelector('.answer-footer.correct');await page.keyboard.press('Enter');}
 await page.waitForSelector('.celebration');await page.locator('[data-action="view-progress"]').click();
 await page.evaluate(async()=>{await (await import('/account-client.js')).flushAccount();});
 let state=await (await context.request.get(base+'/api/account/session')).json();assert.equal(JSON.parse(state.data['coa-quest-v1']).xp,120);assert.equal(JSON.parse(state.data['coa-quest-v1']).history.length,1);
 // A temporary server failure must retain the pending change and retry it safely.
 await page.route('**/api/account/data',route=>route.fulfill({status:503,contentType:'application/json',body:JSON.stringify({error:'Temporary outage'})}));
 await page.evaluate(async()=>{const client=await import('/account-client.js');client.store.setItem('csquest-preferences',JSON.stringify({dailyGoal:40,motion:'reduced',onboarded:true}));await client.flushAccount();});
 assert.equal(await page.evaluate(async()=>(await import('/account-client.js')).account.status),'offline');
 await page.unroute('**/api/account/data');await page.evaluate(async()=>{await (await import('/account-client.js')).flushAccount();});
 assert.equal(await page.evaluate(async()=>(await import('/account-client.js')).account.status),'saved');
 // An independently updated account must not be silently overwritten by this tab.
 state=await (await context.request.get(base+'/api/account/session')).json();
 await context.request.post(base+'/api/account/data',{headers:{'X-CSQuest-Request':'1'},data:{revision:state.revision,changes:{'csquest-theme':'dark'}}});
 await page.evaluate(async()=>{const client=await import('/account-client.js');client.store.setItem('csquest-theme','light');await client.flushAccount();});
 assert.equal(await page.evaluate(async()=>(await import('/account-client.js')).account.status),'conflict');
 assert.equal((await (await context.request.get(base+'/api/account/session')).json()).data['csquest-theme'],'dark');
 await page.evaluate(async()=>{await (await import('/account-client.js')).loadLatest();});
 await page.goto(base+'/#account');assert.equal(await page.locator('.activity-history li').count(),1);
 await page.locator('[data-history-filter]').selectOption('practice');assert.equal(await page.locator('.activity-history li:visible').count(),0);assert.ok(await page.locator('.history-filter-empty').isVisible());await page.locator('[data-history-filter]').selectOption('lesson');assert.equal(await page.locator('.activity-history li:visible').count(),1);await page.locator('[data-history-filter]').selectOption('all');
 await page.locator('[data-account=jump]').click();assert.ok(await page.locator('#profile-edit [name=displayName]').evaluate(el=>el===document.activeElement));

 const downloadPromise=page.waitForEvent('download');await page.locator('[data-account="export"]').click();const download=await downloadPromise;assert.match(download.suggestedFilename(),/learner_one/);
 const backup=JSON.parse(await fs.readFile(await download.path(),'utf8'));assert.equal(backup.format,'csquest-account');assert.ok(backup.data['coa-quest-v1']);
 for(const width of [1440,390,320])for(const theme of ['light','dark']){
  await page.setViewportSize({width,height:900});await page.evaluate(async theme=>{(await import('/account-client.js')).store.setItem('csquest-theme',theme);},theme);await page.reload();await page.waitForSelector('.profile-hero');
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}/${theme}: profile overflow`);
  await fs.mkdir('qa-results',{recursive:true});await page.screenshot({path:`qa-results/account-${width}-${theme}.png`});
  await page.goto(base+'/#progress');await page.waitForSelector('.progress-page');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}/${theme}: progress overflow`);assert.equal(await page.locator('.xp-chart-day').count(),7);assert.equal(await page.locator('.progress-stat').count(),4);assert.equal(await page.locator('.progress-page .course-percent').innerText(),'1%');await page.screenshot({path:`qa-results/progress-${width}-${theme}.png`,fullPage:true,animations:'disabled'});await page.goto(base+'/#account');await page.waitForSelector('.profile-hero');

 }
 await page.setViewportSize({width:1440,height:1000});await page.locator('[data-account="logout"]').click();await page.waitForSelector('[data-account-form="login"]');
 await page.locator('[data-account="tab"][data-tab="register"]').first().click();const second=page.locator('[data-account-form="register"]');
 await second.locator('[name=username]').fill('learner_two');await second.locator('[name=displayName]').fill('Learner Two');await second.locator('[name=password]').fill('a memorable second passphrase');await second.locator('[name=importGuest]').uncheck();await second.locator('[type=submit]').click();await page.waitForSelector('.recovery-dialog');await page.locator('[data-action="close"]').click();
 assert.equal(await page.locator('.personal-stats .card').first().locator('strong').innerText(),'0');assert.equal(await page.locator('#main .course-percent').first().innerText(),'0%');
 const deletion=page.locator('[data-account-form="delete"]');await page.locator('summary').filter({hasText:'Delete account'}).click();await deletion.locator('[name=username]').fill('learner_two');await deletion.locator('[name=password]').fill('a memorable second passphrase');await deletion.locator('[type=submit]').click();await page.waitForSelector('[data-account-form="login"]');
 const fresh=await browser.newContext({reducedMotion:'reduce'}),other=await fresh.newPage();other.on('pageerror',e=>errors.push(e.message));await other.goto(base+'/#account');await other.waitForSelector('[data-account-form="login"]');
 const login=other.locator('[data-account-form="login"]');await login.locator('[name=username]').fill('learner_one');await login.locator('[name=password]').fill('a memorable test passphrase');await login.locator('[name=password]').press('Enter');await other.waitForSelector('.profile-hero');assert.equal(await other.locator('.profile-hero h1').innerText(),'My Private Profile');assert.equal(await other.locator('.personal-stats .card').first().locator('strong').innerText(),'120');
 await other.goto(base+'/#learn');await other.waitForSelector('.chest-3d');assert.ok(await other.locator('.chest-3d').first().evaluate(el=>el.complete&&el.naturalWidth>0));
 await other.goto(base+'/#account');await other.locator('[data-account="logout"]').click();await other.waitForSelector('[data-account-form="login"]');await other.locator('[data-account="tab"][data-tab="recover"]').click();const recover=other.locator('[data-account-form="recover"]');await recover.locator('[name=username]').fill('learner_one');await recover.locator('[name=recoveryCode]').fill(recoveryCode);await recover.locator('[name=password]').fill('a recovered account passphrase');await recover.locator('[type=submit]').click();await other.waitForSelector('.recovery-dialog');await other.locator('[data-action="close"]').click();assert.equal(await other.locator('.personal-stats .card').first().locator('strong').innerText(),'120');
 assert.deepEqual(errors,[]);console.log('Account migration, profile, Enter submissions, server saves, cross-browser login, private progress, exports, recovery, deletion, percentages and responsive themes passed.');
 }finally{await browser.close();await new Promise(r=>server.close(r));await fixture.dispose();}
})().catch(e=>{console.error(e);process.exit(1);});
