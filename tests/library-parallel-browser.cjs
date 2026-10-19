const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
(async()=>{
 const {libraryFixture}=await import('./library-fixture.mjs');let cleanup,browser,release;
 const f=await libraryFixture({after:fn=>cleanup=fn},{courses:true,quota:128*1024**2});
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});await context.addCookies([{name:'csquest_session',value:f.token,url:f.base}]);
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(f.base+'/#library');await page.locator('[data-lib-action=refresh]:enabled').waitFor();
  await page.getByRole('button',{name:'Open boot storage',exact:true}).dblclick();await page.locator('[data-lib-upload]').waitFor();
  let active=0,maximum=0,started=0;const gate=new Promise(r=>release=r);
  await page.route('**/api/library/chunk?**',async route=>{
   active++;maximum=Math.max(maximum,active);started++;
   try{await gate;const response=await route.fetch();await route.fulfill({response});}catch{/* Canceled browser request. */}finally{active--;}
  });
  const files=Array.from({length:6},(_,i)=>({name:`parallel-${i}.bin`,mimeType:'application/octet-stream',buffer:Buffer.alloc(128*1024,i+1)}));
  await page.locator('[data-lib-upload]').setInputFiles(files);
  await page.waitForFunction(()=>document.querySelectorAll('.library-transfer').length===6&&[...document.querySelectorAll('.library-transfer small')].filter(n=>n.textContent.startsWith('Uploading')).length===4);
  for(let attempt=0;started<4&&attempt<200;attempt++)await page.waitForTimeout(50);
  assert.equal(started,4);assert.equal(maximum,4);
  // Add a new selection while the first batch is still active.
  await page.locator('[data-lib-upload]').setInputFiles({name:'added-while-uploading.bin',mimeType:'application/octet-stream',buffer:Buffer.from('new selection')});
  await page.waitForFunction(()=>document.querySelectorAll('.library-transfer').length===7);assert.equal(started,4);
  await fs.mkdir('qa-results/library-parallel',{recursive:true});await page.screenshot({path:'qa-results/library-parallel/desktop-active.png',fullPage:true});
  await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await page.screenshot({path:'qa-results/library-parallel/mobile-active.png',fullPage:true});
  release();await page.getByRole('button',{name:'Open added-while-uploading.bin',exact:true}).waitFor();
  await page.waitForFunction(()=>[...document.querySelectorAll('.library-transfer small')].every(n=>n.textContent.startsWith('Uploaded')));
  assert.ok(maximum<=4);assert.equal(started,7);
  const entries=(await f.db.store.pool.query("SELECT * FROM csquest_library_entries WHERE kind='file' ORDER BY name")).rows;assert.equal(entries.length,7);assert.ok(entries.every(e=>e.status==='ready'));
  for(const file of files){const row=entries.find(e=>e.name===file.name),response=await context.request.get(f.base+'/api/library/file?id='+row.id+'&download=1');assert.deepEqual(await response.body(),file.buffer);}
  assert.deepEqual(errors,[]);console.log('Parallel upload browser checks passed: four active, queued files, a second selection, desktop/mobile, and byte-identical downloads.');
 }finally{release?.();await browser?.close();await cleanup();}
})().catch(error=>{console.error(error);process.exitCode=1;});
