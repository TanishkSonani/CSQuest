const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const os=require('node:os');
const path=require('node:path');
(async()=>{
 const {libraryFixture}=await import('./library-fixture.mjs');let cleanup,browser,directory;
 const f=await libraryFixture({after:fn=>cleanup=fn},{courses:true});
 try{
  directory=await fs.mkdtemp(path.join(os.tmpdir(),'csquest-folder-picker-'));await fs.mkdir(path.join(directory,'Week 1'));await fs.writeFile(path.join(directory,'Week 1','notes.txt'),'Shared lesson notes');
  const png=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=','base64');await fs.writeFile(path.join(directory,'cover.png'),png);
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});await context.addCookies([{name:'csquest_session',value:f.token,url:f.base}]);
  const page=await context.newPage(),errors=[];page.setDefaultTimeout(15000);page.on('pageerror',e=>errors.push(e.message));await page.goto(f.base+'/#library');await page.locator('[data-lib-drive=boot]').dblclick();await page.locator('[data-directory-upload]').setInputFiles(directory);
  const name=path.basename(directory);await page.getByRole('button',{name:'Open '+name,exact:true}).waitFor();await page.waitForFunction(()=>[...document.querySelectorAll('[data-library] .library-transfer small')].every(e=>e.textContent.startsWith('Uploaded')));
  await page.getByRole('button',{name:'Details for '+name,exact:true}).click();await page.getByRole('button',{name:'SHARE DIRECTORY',exact:true}).click();await page.locator('[data-public-create] button').click();const url=await page.locator('[data-public-url]').inputValue();await page.getByRole('button',{name:'Close access settings'}).click();
  const guest=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const publicPage=await guest.newPage();publicPage.on('pageerror',e=>errors.push(e.message));await publicPage.goto(url);await publicPage.getByRole('link',{name:'Week 1',exact:false}).click();await publicPage.getByRole('link',{name:'notes.txt',exact:true}).click();await publicPage.getByRole('heading',{name:'notes.txt',exact:true}).waitFor();const downloadUrl=await publicPage.getByRole('link',{name:'DOWNLOAD FILE',exact:true}).getAttribute('href');assert.equal(await(await guest.request.get(f.base+downloadUrl)).text(),'Shared lesson notes');
  await publicPage.goto(url);await publicPage.getByRole('link',{name:'cover.png',exact:true}).click();await publicPage.getByRole('button',{name:'PREVIEW FILE'}).click();await publicPage.waitForFunction(()=>document.querySelector('.library-preview-dialog img')?.naturalWidth===1);assert.equal(await publicPage.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await publicPage.getByRole('button',{name:'Close preview'}).click();
  await page.getByRole('button',{name:'Open '+name,exact:true}).dblclick();await page.getByLabel('Select cover.png',{exact:true}).check();const zipLink=page.getByRole('link',{name:'DOWNLOAD ZIP',exact:true}),zipResponse=await context.request.get(f.base+await zipLink.getAttribute('href'));assert.equal(zipResponse.status(),200,await zipResponse.text());const archive=await zipResponse.body();assert.equal(archive.length,Number(zipResponse.headers()['content-length']));assert.equal(archive.readUInt32LE(0),0x04034b50);assert.ok(archive.includes(Buffer.from('cover.png')));
  await page.locator('[data-lib-search]').fill('cover');assert.equal(await page.getByLabel('Select cover.png',{exact:true}).count(),1,'Selection survives filtered repaint');await page.locator('[data-lib-sort]').selectOption('size');assert.equal(await page.getByLabel('Select cover.png',{exact:true}).count(),1);
  await page.locator('[data-lib-action=access]').click();await page.getByRole('button',{name:'Revoke public link for '+name,exact:true}).click();await publicPage.goto(url);await publicPage.getByRole('heading',{name:'Link unavailable'}).waitFor();
  assert.deepEqual(errors,[]);console.log('Directory browser passed: folder picker tree, public folder/file navigation without login, bytes, mobile image preview, ZIP, filtered selection, link revocation.');
 }finally{await browser?.close();await cleanup();if(directory)await fs.rm(directory,{recursive:true,force:true});}
})().catch(e=>{console.error(e.message.split('\n')[0]);process.exitCode=1;});
