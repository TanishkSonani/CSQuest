const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const {libraryFixture}=await import('./library-fixture.mjs');let cleanup,browser;
 const f=await libraryFixture({after:fn=>cleanup=fn},{courses:true});
 const password='a memorable browser test passphrase';
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const admin=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
  await admin.addCookies([{name:'csquest_session',value:f.token,url:f.base}]);
  for(const width of [1440,390]){
   const learner=await browser.newContext({viewport:{width,height:844},reducedMotion:'reduce'});
   const username='delete_browser_'+width;
   const created=await learner.request.post(f.base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username,displayName:'Deletion test',password}});
   assert.equal(created.status(),200);const {user}=await created.json();
   const page=await learner.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
   await page.goto(f.base+'/#account');await page.locator('.profile-hero').waitFor();
   await page.getByText('Delete account and saved data',{exact:true}).click();
   const form=page.locator('[data-account-form=delete]');
   await form.locator('[name=username]').fill(username);await form.locator('[name=password]').fill('wrong');
   await form.locator('[type=submit]').click();await form.locator('.form-message').filter({hasText:'current password is incorrect'}).waitFor();
   assert.equal((await learner.request.get(f.base+'/api/account/export')).status(),200);
   // An unrelated stale progress revision must not prevent explicit deletion.
   await page.evaluate(async()=>{const c=await import('/account-client.js');c.account.conflict=true;c.account.status='conflict';});
   await form.locator('[name=password]').fill(password);await form.locator('[type=submit]').click();
   await page.locator('.login-wall').waitFor();
   assert.equal((await learner.request.get(f.base+'/api/account/export')).status(),401);
   assert.equal((await f.db.store.pool.query('SELECT id FROM csquest_users WHERE id=$1',[user.id])).rowCount,0);
   assert.deepEqual(errors,[]);await learner.close();

   const target='admin_delete_'+width;
   const made=await admin.request.post(f.base+'/api/admin/create-user',{headers:{'X-CSQuest-Request':'1'},data:{username:target,displayName:'Temporary learner',password,role:'learner'}});
   assert.equal(made.status(),200);const {id}=await made.json();
   const ap=await admin.newPage();await ap.setViewportSize({width,height:844});await ap.goto(f.base+'/#admin');
   await ap.locator(`[data-user-delete="${id}"]`).click();
   const dialog=ap.locator('dialog:has([data-delete-user-form])');
   await dialog.locator('input').fill('wrong');await dialog.locator('[type=submit]').click();
   await dialog.locator('[data-dialog-error]').filter({hasText:'Type the account username'}).waitFor();
   await dialog.locator('input').fill(target);await dialog.locator('[type=submit]').click();await dialog.waitFor({state:'detached'});
   await ap.locator(`[data-user-delete="${id}"]`).waitFor({state:'detached'});
   assert.equal((await f.db.store.pool.query('SELECT id FROM csquest_users WHERE id=$1',[id])).rowCount,0);
   await ap.close();
  }
  console.log('Desktop and mobile account deletion passed: real forms, wrong-password recovery, stale progress, admin confirmation and refreshed user list.');
 }finally{await browser?.close();await cleanup?.();}
})().catch(error=>{console.error(error);process.exitCode=1;});
