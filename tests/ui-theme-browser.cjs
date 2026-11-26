const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs/promises');
(async()=>{
 const {libraryFixture}=await import('./library-fixture.mjs');let cleanup,browser;
 const f=await libraryFixture({after:fn=>cleanup=fn},{courses:true});
 const output='qa-results/ui-theme';await fs.mkdir(output,{recursive:true});
 try{
  browser=await chromium.launch({headless:true,executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({reducedMotion:'reduce'});await context.addCookies([{name:'csquest_session',value:f.token,url:f.base}]);
  const created=await context.request.post(f.base+'/api/admin/create-user',{headers:{'X-CSQuest-Request':'1'},data:{username:'theme_learner',displayName:'Theme learner',password:'a memorable theme test passphrase',role:'learner'}});assert.equal(created.status(),200);const user=await created.json();
  const folder=await f.ok(await f.req('folder',{drive:'boot',name:'Shared theme preview'}));
  const link=await f.ok(await f.req('public-links',{entryId:folder.id,password:'theme-test-password',days:1,allowUpload:true}));
  const page=await context.newPage(),errors=[],results=[];page.on('pageerror',e=>errors.push(e.message));
  const checkLayout=async label=>{
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,label+' page overflow');
   const dialogs=await page.locator('dialog:visible').evaluateAll(ds=>ds.map(d=>{const r=d.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth+1&&r.top>=0&&r.bottom<=innerHeight+1;}));assert.ok(dialogs.every(Boolean),label+' dialog overflow');
  };
  for(const theme of ['light','dark'])for(const width of [1440,390]){
   await page.setViewportSize({width,height:900});
   const visit=async route=>{await page.goto(f.base+'/#'+route);await page.locator('#main').waitFor();await page.evaluate(t=>{document.documentElement.dataset.theme=t},theme);};
   await visit('admin');const check=page.locator(`[data-user-check="${user.id}"]`);await check.waitFor();
   assert.equal(await check.evaluate(e=>getComputedStyle(e).appearance),'none');assert.equal(await check.evaluate(e=>e.getBoundingClientRect().width),18);
   await check.focus();await page.keyboard.press('Space');assert.equal(await check.isChecked(),true);
   assert.notEqual(await check.evaluate(e=>getComputedStyle(e.closest('tr')).backgroundColor),'rgba(0, 0, 0, 0)');
   assert.equal(await check.evaluate(e=>getComputedStyle(e).outlineStyle),'solid');
   await page.keyboard.press('Space');assert.equal(await check.isChecked(),false);
   const all=page.locator('[data-users-all]');await all.evaluate(e=>e.indeterminate=true);assert.equal(await all.evaluate(e=>getComputedStyle(e,'::before').opacity),'1');await all.evaluate(e=>e.indeterminate=false);
   await all.evaluate(e=>e.disabled=true);assert.equal(await all.evaluate(e=>getComputedStyle(e).cursor),'not-allowed');await all.evaluate(e=>e.disabled=false);
   const role=page.locator(`[data-user-role="${user.id}"]`);assert.equal(await role.inputValue(),'learner');
   assert.equal(await role.evaluate(e=>getComputedStyle(e).appearance),'none');
   assert.match(await role.evaluate(e=>getComputedStyle(e).backgroundImage),/linear-gradient/);
   await checkLayout('Admin');await page.screenshot({path:`${output}/admin-${width}-${theme}.png`,fullPage:true});
   await page.locator('[data-create-admin]').click();const dialog=page.locator('.platform-dialog');await dialog.locator('input').first().fill('A themed input');await checkLayout('Create account');await page.screenshot({path:`${output}/dialog-${width}-${theme}.png`});await page.keyboard.press('Escape');await dialog.waitFor({state:'detached'});
   await page.locator(`[data-user-edit-access="${user.id}"]`).click();await page.locator('.platform-dialog select[name=level]').selectOption('limited');await page.locator('[data-scope-drive]').first().waitFor({state:'visible'});await checkLayout('Location permissions');await page.screenshot({path:`${output}/access-${width}-${theme}.png`});await page.keyboard.press('Escape');
   await visit('settings');const toggle=page.locator('.settings-card .toggle').first();await toggle.waitFor();
   const geometry=await toggle.evaluate(e=>{const c=getComputedStyle(e,'::before'),r=e.getBoundingClientRect(),s=e.querySelector('span').getBoundingClientRect();return {height:r.height,track:r.height-parseFloat(c.top)-parseFloat(c.bottom),thumb:s.height,inside:s.top>=r.top&&s.bottom<=r.bottom};});
   assert.equal(geometry.height,44);assert.equal(geometry.track,30);assert.equal(geometry.thumb,22);assert.ok(geometry.inside);await checkLayout('Settings');await page.screenshot({path:`${output}/settings-${width}-${theme}.png`,fullPage:true});
   for(const route of ['account','social','help','podcasts','library','subjects','progress','learn']){
    await visit(route);await checkLayout(route);
    if(['social','library'].includes(route))await page.screenshot({path:`${output}/${route}-${width}-${theme}.png`,fullPage:true});
   }
   await visit('help');await page.locator('[data-platform-report]').first().click();await page.locator('.platform-dialog textarea').fill('A themed textarea');assert.match(await page.locator('.platform-dialog textarea').evaluate(e=>getComputedStyle(e).fontFamily),/Nunito/);await checkLayout('Report');await page.keyboard.press('Escape');
   const guest=await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'}),publicPage=await guest.newPage();
   await publicPage.addInitScript(t=>localStorage.setItem('csquest-theme',t),theme);await publicPage.goto(f.base+'/library-share#'+link.token);
   await publicPage.locator('input[type=password]').waitFor();
   const palette=await publicPage.evaluate(()=>['--surface','--ink','--green-dark','--action'].map(v=>getComputedStyle(document.documentElement).getPropertyValue(v).trim()));
   const privatePalette=await page.evaluate(()=>['--surface','--ink','--green-dark','--action'].map(v=>getComputedStyle(document.documentElement).getPropertyValue(v).trim()));assert.deepEqual(palette,privatePalette);
   assert.equal(await publicPage.locator('[data-public-file]').evaluate(e=>getComputedStyle(e).backgroundColor),'rgba(0, 0, 0, 0)');
   await publicPage.screenshot({path:`${output}/public-${width}-${theme}.png`,fullPage:true});
   await publicPage.locator('input[type=password]').fill('theme-test-password');await publicPage.locator('[data-public-unlock] button').click();await publicPage.locator('[data-public-explorer]').waitFor();
   assert.equal(await publicPage.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await publicPage.screenshot({path:`${output}/public-explorer-${width}-${theme}.png`,fullPage:true});
   await publicPage.goto(f.base);await publicPage.locator('.login-wall').waitFor();const remember=publicPage.locator('input[name=remember]');await remember.focus();await publicPage.keyboard.press('Space');assert.equal(await remember.isChecked(),false);
   await publicPage.screenshot({path:`${output}/login-${width}-${theme}.png`,fullPage:true});await guest.close();
   results.push({theme,width,passed:true});
  }
  // Preserve usable native controls in Windows high contrast mode.
  await page.emulateMedia({forcedColors:'active'});await page.goto(f.base+'/#admin');const forced=page.locator('[data-users-all]');await forced.waitFor();assert.equal(await forced.evaluate(e=>getComputedStyle(e).appearance),'auto');
  assert.deepEqual(errors,[]);await fs.writeFile(output+'/report.json',JSON.stringify(results,null,2));console.log('Theme QA passed: desktop/mobile, light/dark, ten routes, account/access/report dialogs, keyboard checkboxes, switch geometry, public palette and forced colors.');
 }finally{await browser?.close();await cleanup?.();}
})().catch(error=>{console.error(error);process.exitCode=1;});
