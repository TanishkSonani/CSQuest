const {selectFile,fileAction}=require('./explorer-browser-helpers.cjs');
const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const path=require('node:path');

(async()=>{
 const {libraryFixture}=await import('./library-fixture.mjs');
 let cleanup,browser,page;const f=await libraryFixture({after:fn=>cleanup=fn},{courses:true,quota:12*1024**2});
 const output='qa-results/library-real-life',errors=[],results=[];await fs.mkdir(output,{recursive:true});
 const json=async response=>{assert.equal(response.status(),200,await response.text());return response.json();};
 const selectors={refresh:'[data-lib-action=refresh]',upload:'[data-lib-upload]'};
 const ready=async()=>{await page.locator(selectors.refresh+':enabled').waitFor();};
 async function open(name){const item=page.getByRole('button',{name:'Open '+name,exact:true});if(page.viewportSize().width<=650)await item.click();else await item.dblclick();await ready();}
 async function home(){await page.locator('.library-breadcrumb [data-lib-action=home]').click();await ready();}
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});await context.addCookies([{name:'csquest_session',value:f.token,url:f.base}]);
  page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  await page.goto(f.base+'/#library');await ready();
  assert.deepEqual(await page.evaluate(async()=>{const {formatLibraryBytes}=await import('/library.js');return [1500,1e6,1e9].map(formatLibraryBytes);}),['1.5 KB','1 MB','1 GB']);
  for(const theme of ['light','dark']){
   await page.evaluate(async theme=>{const {store}=await import('/account-client.js');store.setItem('csquest-theme',theme);document.documentElement.dataset.theme=theme;},theme);
   for(const width of [1440,1280,1024,768,390,360]){
    await page.setViewportSize({width,height:width<650?844:1000});
    await page.screenshot({path:`${output}/this-pc-${width}-${theme}.png`,fullPage:true});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`This PC overflow at ${width}/${theme}`);
    const drive=page.getByRole('button',{name:'Open boot storage',exact:true});
    if(width>650){await drive.click();assert.equal(await page.locator('.library-explorer').count(),0);await drive.dblclick();}else await drive.click();
    await ready();assert.equal(await page.locator('.library-drive').count(),0,'Drive overview should give way to the directory view');
    if(!await page.getByRole('button',{name:'Open A long folder name for touch, keyboard, and desktop checks',exact:true}).count()){
     await page.getByRole('button',{name:'NEW FOLDER',exact:true}).click();await page.locator('.library-form-dialog input').fill('A long folder name for touch, keyboard, and desktop checks');await page.locator('.library-form-dialog [type=submit]').click();await ready();
    }
    await open('A long folder name for touch, keyboard, and desktop checks');
    if(!await page.getByRole('button',{name:'Open notes with a long readable filename and spaces.txt',exact:true}).count()){
     await page.locator(selectors.upload).setInputFiles({name:'notes with a long readable filename and spaces.txt',mimeType:'text/plain',buffer:Buffer.alloc(1500,65)});await page.getByRole('button',{name:'Open notes with a long readable filename and spaces.txt',exact:true}).waitFor();await ready();
    }
    await selectFile(page,'notes with a long readable filename and spaces.txt',true);
    await page.locator('[data-lib-details]').getByText('1.5 KB (1,500 bytes)',{exact:true}).waitFor();assert.equal(await page.locator('[data-lib-details]').getByText('Stored file modified',{exact:true}).count(),1);
    if(width<=650){assert.equal(await page.evaluate(()=>document.querySelector('.library-details-heading').getBoundingClientRect().top>=document.querySelector('.topbar').getBoundingClientRect().bottom),true,'The sticky header must not cover file details');await page.screenshot({path:`${output}/details-${width}-${theme}.png`});}
    await page.evaluate(()=>{if(document.activeElement?.matches('.skip-link'))document.activeElement.blur();window.scrollTo(0,0);});
    await page.screenshot({path:`${output}/directory-${width}-${theme}.png`,fullPage:true});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`Directory overflow at ${width}/${theme}`);
    await fileAction(page,'rename','notes with a long readable filename and spaces.txt');
    assert.equal(await page.evaluate(()=>{const d=document.querySelector('.library-form-dialog').getBoundingClientRect();return d.left>=0&&d.right<=innerWidth;}),true,`Rename dialog bounds ${width}`);await page.locator('[data-form-close]').first().click();
    await home();results.push({width,theme,thisPC:true,directory:true,dialog:true,overflow:false});
   }
  }
  await page.setViewportSize({width:1440,height:1000});await open('boot storage');
  // Drop the response after the first committed chunk, just as a connection loss can do.
  let injected=false;await page.route('**/api/library/chunk?**',async route=>{if(!injected){injected=true;await route.fetch();await route.abort('failed');}else await route.continue();});
  const source=Buffer.alloc(11*1024**2+37,91);source.write('original file resume fingerprint');
  const sourceFile=path.join(f.directory,'resume-after-disconnect.bin');await fs.writeFile(sourceFile,source);const sourceDate=new Date('2026-01-01T12:00:00Z');await fs.utimes(sourceFile,sourceDate,sourceDate);
  await page.locator(selectors.upload).setInputFiles(sourceFile);await page.waitForFunction(()=>document.querySelector('[data-library] [data-lib-pause]')&&document.querySelector('[data-library] [data-lib-transfers]').textContent.includes('Retrying automatically'));await page.locator('[data-library-tray] [data-lib-pause]').click();await page.getByRole('button',{name:'RETRY',exact:true}).waitFor();await ready();
  const transfer=(await f.db.store.pool.query("SELECT * FROM csquest_library_entries WHERE name='resume-after-disconnect.bin'")).rows[0];assert.equal(Number(transfer.uploaded),8*1024**2);
  await page.unroute('**/api/library/chunk?**');
  // Lose browser bookkeeping entirely: recovery must come from the server inventory.
  await page.evaluate(()=>sessionStorage.clear());await page.reload();await ready();await page.locator('[data-library-tray]>button[aria-expanded=false]').click();await page.getByRole('button',{name:'CHOOSE FILE TO RESUME',exact:true}).waitFor();
  const wrong=Buffer.alloc(source.length,12);
  await fs.mkdir(path.join(f.directory,'wrong'));const wrongFile=path.join(f.directory,'wrong','resume-after-disconnect.bin');await fs.writeFile(wrongFile,wrong);await fs.utimes(wrongFile,sourceDate,sourceDate);
  const picker=page.waitForEvent('filechooser');await page.getByRole('button',{name:'CHOOSE FILE TO RESUME',exact:true}).click();await(await picker).setFiles(wrongFile);
  await page.locator('[data-library-tray]').getByText('This file does not match the saved transfer.',{exact:false}).waitFor();assert.equal(Number((await f.db.store.pool.query('SELECT uploaded FROM csquest_library_entries WHERE id=$1',[transfer.id])).rows[0].uploaded),8*1024**2);
  await open('boot storage');await page.locator(selectors.upload).setInputFiles(sourceFile);await page.getByRole('button',{name:'Open resume-after-disconnect.bin',exact:true}).waitFor();
  assert.deepEqual(await fs.readFile(path.join(f.drives[0].root,transfer.id)),source);results.push({resumeAfterLostResponse:true,recoveredWithoutSessionStorage:true,wrongFileRejected:true,bytesPreserved:true});
  // Simulate a different tab deleting the currently open folder.
  await page.getByRole('button',{name:'NEW FOLDER',exact:true}).click();await page.locator('.library-form-dialog input').fill('Removed from another tab');await page.locator('.library-form-dialog [type=submit]').click();await ready();await open('Removed from another tab');
  const removed=(await f.db.store.pool.query("SELECT id FROM csquest_library_entries WHERE name='Removed from another tab'")).rows[0].id;
  await json(await context.request.post(f.base+'/api/library/delete',{headers:{'X-CSQuest-Request':'1'},data:{id:removed}}));await page.locator(selectors.refresh).click();await page.getByRole('alert').filter({hasText:'Returned to the drive root'}).waitFor();await ready();
  // Real H.264 MP4 generated by Edge's native encoder; no server transcoder.
  const media=await page.evaluate(async()=>{
   const type=['video/mp4;codecs=avc1.42001E','video/mp4','video/webm;codecs=vp8'].find(t=>MediaRecorder.isTypeSupported(t));
   const canvas=document.createElement('canvas');canvas.width=160;canvas.height=90;const stream=canvas.captureStream(10),ctx=canvas.getContext('2d'),recorder=new MediaRecorder(stream,{mimeType:type}),parts=[];
   recorder.ondataavailable=e=>parts.push(e.data);const stopped=new Promise(r=>recorder.onstop=r);recorder.start();for(let i=0;i<25;i++){ctx.fillStyle=i%2?'#467447':'#a9d27a';ctx.fillRect(0,0,160,90);await new Promise(r=>setTimeout(r,100));}recorder.stop();await stopped;stream.getTracks().forEach(t=>t.stop());
   const data=new Uint8Array(await new Blob(parts).arrayBuffer());return {type,data:btoa(String.fromCharCode(...data))};
  });
  const extension=media.type.includes('mp4')?'mp4':'webm',name='native-browser-sample.'+extension;
  await page.locator(selectors.upload).setInputFiles({name,mimeType:media.type,buffer:Buffer.from(media.data,'base64')});await page.getByRole('button',{name:'Open '+name,exact:true}).waitFor();
  await page.getByRole('button',{name:'Open '+name,exact:true}).click();await page.locator('[data-lib-details]').getByText('160 × 90',{exact:true}).waitFor();await open(name);
  await page.waitForFunction(()=>Number.isFinite(document.querySelector('video')?.duration)&&document.querySelector('video').duration>0);
  for(const speed of Array.from({length:12},(_,i)=>String((i+1)/4))){await page.locator('[data-video-speed]').evaluate((e,value)=>{e.value=value;e.dispatchEvent(new Event('input',{bubbles:true}));},speed);assert.equal(await page.locator('video').evaluate(v=>v.playbackRate),Number(speed));}
  await page.getByRole('button',{name:'Stop video',exact:true}).click();await page.getByRole('button',{name:'Mute video',exact:true}).click();assert.equal(await page.locator('video').evaluate(v=>v.muted),true);
  await page.locator('[data-video-volume]').fill('0.35');assert.equal(await page.locator('video').evaluate(v=>v.volume),.35);
  await page.locator('video').focus();await page.keyboard.press('Space');await page.waitForFunction(()=>!document.querySelector('video').paused);await page.keyboard.press('Space');assert.equal(await page.locator('video').evaluate(v=>v.paused),true);
  for(const width of [1440,390,360]){await page.setViewportSize({width,height:width<650?844:1000});await page.screenshot({path:`${output}/video-${extension}-${width}.png`});assert.equal(await page.evaluate(()=>{const d=document.querySelector('.library-video-dialog').getBoundingClientRect();return d.left>=0&&d.right<=innerWidth;}),true);}
  await page.getByRole('button',{name:'Close video',exact:true}).click();results.push({realVideo:extension,speeds:12,keyboard:true,volume:true});
  assert.deepEqual(errors,[]);await fs.writeFile(output+'/report.json',JSON.stringify({checkedAt:new Date().toISOString(),results,errors},null,2));console.log('Real-life Playwright checks passed:',JSON.stringify(results));
 }catch(error){if(page){await page.screenshot({path:output+'/failure.png',fullPage:true}).catch(()=>{});console.error('UI at failure:',(await page.locator('body').innerText().catch(()=>'' )).slice(-4500));}throw error;}
 finally{await browser?.close();await cleanup();}
})().catch(error=>{console.error(error);process.exitCode=1;});
