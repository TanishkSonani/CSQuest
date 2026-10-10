const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs/promises'),os=require('node:os'),path=require('node:path');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs');
 const directory=await fs.mkdtemp(path.join(os.tmpdir(),'csquest-login-wall-')),server=createServer({accountDirectory:directory});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${server.address().port}`;
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
 try{
  const context=await browser.newContext({reducedMotion:'reduce'}),page=await context.newPage(),errors=[],courseRequests=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(r.url().includes('/courses/'))courseRequests.push(r.url());});
  for(const width of [1440,390,320]){
   await page.setViewportSize({width,height:900});await page.goto(base+'/#learn');await page.waitForSelector('.login-wall');
   assert.equal(await page.locator('.sidebar,.unit-banner,.mobile-nav').count(),0);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   await page.locator('[data-action=theme]').click();assert.equal(await page.locator('[data-account-form=login]').count(),1);
  }
  // Theme changes and switching account actions retain form values only in memory.
  let auth=page.locator('[data-account-form=login]');await auth.locator('[name=username]').fill('draft_learner');await auth.locator('[name=password]').fill('my unsaved test passphrase');
  await page.locator('[data-action=theme]').click();auth=page.locator('[data-account-form=login]');assert.equal(await auth.locator('[name=username]').inputValue(),'draft_learner');assert.equal(await auth.locator('[name=password]').inputValue(),'my unsaved test passphrase');
  await auth.locator('[name=password]').evaluate(el=>el.dispatchEvent(new KeyboardEvent('keydown',{key:'A',modifierCapsLock:true,bubbles:true})));assert.ok(await auth.locator('.auth-caps-lock').isVisible());
  await auth.locator('[data-account=show-password]').click();assert.equal(await auth.locator('[name=password]').getAttribute('type'),'text');await auth.locator('[data-account=show-password]').click();assert.equal(await auth.locator('[name=password]').getAttribute('type'),'password');
  await auth.locator('[data-tab=recover]').click();await page.waitForSelector('[data-account-form=recover]');await page.locator('.auth-back').click();assert.equal(await page.locator('[data-account-form=login] [name=username]').inputValue(),'draft_learner');
  for(const width of [1440,390,320])for(const theme of ['light','dark']){
   await page.setViewportSize({width,height:900});await page.evaluate(theme=>{localStorage.setItem('csquest-theme',theme);},theme);await page.reload();await page.waitForSelector('.login-wall');
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}/${theme}: login overflow`);
   assert.equal(await page.locator('html').getAttribute('data-theme'),theme);
   await fs.mkdir('qa-results',{recursive:true});await page.evaluate(()=>document.activeElement?.blur());await page.screenshot({path:`qa-results/login-${width}-${theme}.png`,fullPage:true,animations:'disabled'});
   await page.locator('.auth-tabs [data-tab=register]').click();await page.locator('.auth-avatar-details summary').click();await page.waitForSelector('.avatar-grid');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}/${theme}: signup overflow`);
   await page.locator('.auth-tabs [data-tab=login]').click();
  }
  // A slow rejected login provides visible loading, an accessible error and a retry.
  await page.route('**/api/account/login',async route=>{await new Promise(r=>setTimeout(r,250));await route.fulfill({status:401,contentType:'application/json',body:JSON.stringify({error:'Username or password is incorrect.'})});});
  auth=page.locator('[data-account-form=login]');await auth.locator('[name=username]').fill('missing_user');await auth.locator('[name=password]').fill('a memorable incorrect password');await auth.locator('[type=submit]').click();
  assert.equal(await auth.getAttribute('aria-busy'),'true');await page.waitForFunction(()=>document.querySelector('.auth-form .form-message')?.textContent.includes('incorrect'));assert.equal(await auth.getAttribute('aria-busy'),'false');assert.equal(await auth.locator('[name=password]').inputValue(),'a memorable incorrect password');
  assert.ok(await auth.locator('.form-message').evaluate(el=>el===document.activeElement));await auth.locator('[name=username]').fill('retry_user');assert.equal(await auth.locator('.form-message').innerText(),'');await page.unroute('**/api/account/login');
  assert.equal(courseRequests.length,0);
  for(const route of ['/api/subjects','/api/status','/api/transcript/0','/courses/coa/lessons.js','/courses/dl/lessons.js','/shared/worked-examples.js'])assert.equal((await context.request.get(base+route)).status(),401);
  const registration=await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'login_wall',displayName:'Wall Learner',avatar:'chip',password:'a memorable test passphrase'}});assert.equal(registration.status(),200);
  await page.reload();await page.waitForSelector('.unit-banner');
  await page.goto(base+'/#account');await page.waitForSelector('.profile-hero');await page.locator('[data-account=logout]').click();await page.waitForSelector('.login-wall');
  await page.goto(base+'/#practice');await page.waitForSelector('.login-wall');assert.equal(await page.locator('.sidebar').count(),0);
  const form=page.locator('[data-account-form=login]');await form.locator('[name=username]').fill('login_wall');await form.locator('[name=password]').fill('a memorable test passphrase');await form.locator('[name=password]').press('Enter');await page.waitForSelector('.sidebar',{state:'attached'});
  await context.request.post(base+'/api/account/logout',{headers:{'X-CSQuest-Request':'1'},data:{}});
  await page.evaluate(async()=>{await(await import('/account-client.js')).checkSession();});await page.waitForSelector('.login-wall');
  assert.equal(await page.locator('.sidebar').count(),0);assert.deepEqual(errors,[]);
  console.log('Login wall: private routes, direct API access, login/logout, revoked sessions, mobile layouts and theme controls passed.');
 }finally{await browser.close();await new Promise(r=>server.close(r));assert.equal(path.dirname(directory),os.tmpdir());assert.ok(path.basename(directory).startsWith('csquest-login-wall-'));await fs.rm(directory,{recursive:true,force:true});}
})().catch(e=>{console.error(e);process.exit(1);});
