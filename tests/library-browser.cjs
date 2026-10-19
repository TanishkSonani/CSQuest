const {selectFile,fileAction}=require('./explorer-browser-helpers.cjs');
const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const os=require('node:os');
const path=require('node:path');
const {randomUUID}=require('node:crypto');

(async()=>{
 const {createServer}=await import('../src/platform/server.mjs');
 const {testStore}=await import('./database-helper.mjs');
 const {inspectDrive}=await import('../src/platform/storage.mjs');
 const fixture=await testStore({courses:true}),directory=await fs.mkdtemp(path.join(os.tmpdir(),'csquest-library-ui-')),ownerId=randomUUID();
 const drives=[{id:'boot',name:'Boot storage',root:path.join(directory,'boot'),quota:128*1024,reserve:0},{id:'block',name:'Block storage',root:path.join(directory,'block'),quota:2*1024**2,reserve:0}];
 const server=createServer({store:fixture.store,libraryOptions:{ownerId,drives,inspect:async d=>{await inspectDrive(d);return {total:1024**3,free:1024**3,device:d.id};}}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${server.address().port}`;let browser;
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  page.on('response',async response=>{if(response.status()>=400&&response.url().includes('/api/library/'))console.log('Library response',response.status(),response.url(),await response.text().catch(()=>''));});
  const registration=await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'library_ui',displayName:'Library Owner',avatar:'chip',password:'a memorable browser password'}});assert.equal(registration.status(),200);const user=(await registration.json()).user;
  await fixture.store.pool.query("INSERT INTO csquest_users(id,username,display_name,avatar,password,recovery_hash,created_at,revision,updated_at) SELECT $1,'library_configured',display_name,avatar,password,recovery_hash,created_at,revision,updated_at FROM csquest_users WHERE id=$2",[ownerId,user.id]);
  await fixture.store.pool.query('UPDATE csquest_sessions SET user_id=$1 WHERE user_id=$2',[ownerId,user.id]);
  const open=async name=>{const layout=page.locator('.library-browser-layout');if(page.viewportSize().width<=1250&&await layout.count()&&!await layout.evaluate(e=>e.classList.contains('is-details-hidden')))await page.locator('[data-lib-action=details-close]').click();const match=/^Open (Boot|Block) storage$/.exec(name);if(match&&!await page.getByRole('button',{name,exact:true}).count()){await page.locator('[data-lib-nav-drive='+match[1].toLowerCase()+']').click();return;}const item=page.getByRole('button',{name,exact:true});if(page.viewportSize().width<=650)await item.click();else await item.dblclick();};
  await page.goto(base+'/#library');await page.getByRole('button',{name:'Open Boot storage'}).waitFor();
  assert.equal(await page.locator('.library-drive').count(),2);await fs.mkdir('qa-results/library',{recursive:true});
  await page.screenshot({path:'qa-results/library/desktop-light.png',fullPage:true});
  await page.getByRole('button',{name:'Open Boot storage',exact:true}).click();assert.equal(await page.locator('.library-drive').count(),2);assert.equal(await page.locator('.library-explorer').count(),0,'A desktop single click selects the drive without opening it');
  await open('Open Boot storage');await page.getByText('A little room for everything.',{exact:true}).waitFor();
  await page.getByRole('button',{name:'NEW FOLDER',exact:true}).click();await page.locator('.library-form-dialog input').fill('Study files');await page.locator('.library-form-dialog button[type=submit]').click();
  await open('Open Study files');await page.getByText('A little room for everything.',{exact:true}).waitFor();
  await page.getByRole('button',{name:'NEW FOLDER',exact:true}).click();await page.locator('.library-form-dialog input').fill('Week 1');await page.locator('.library-form-dialog button[type=submit]').click();
  await open('Open Week 1');await page.getByText('A little room for everything.',{exact:true}).waitFor();
  const text=Buffer.from('A private library document.');await page.locator('[data-lib-upload]').setInputFiles({name:'notes.txt',mimeType:'text/plain',buffer:text});
  await page.getByRole('button',{name:'Open notes.txt',exact:true}).waitFor();
  const stored=(await fixture.store.pool.query("SELECT id FROM csquest_library_entries WHERE name='notes.txt'")).rows[0];const download=await context.request.get(base+'/api/library/file?id='+stored.id+'&download=1');assert.deepEqual(await download.body(),text);
  await fileAction(page,'move','notes.txt');await page.locator('.library-form-dialog select').selectOption({label:'Study files'});await page.getByRole('button',{name:'MOVE SELECTED',exact:true}).click();await page.getByText('A little room for everything.',{exact:true}).waitFor();
  await page.locator('.library-breadcrumb').getByRole('button',{name:'Study files',exact:true}).click();await page.getByRole('button',{name:'Open notes.txt',exact:true}).waitFor();
  let chunks=0;page.on('request',r=>{if(r.url().includes('/api/library/chunk'))chunks++;});
  await page.locator('[data-lib-upload]').setInputFiles({name:'too-large.mp4',mimeType:'video/mp4',buffer:Buffer.alloc(200*1024)});
  await page.getByRole('alert').filter({hasText:'Upload cannot start'}).waitFor();assert.equal(chunks,0);assert.equal((await fixture.store.pool.query("SELECT 1 FROM csquest_library_entries WHERE name='too-large.mp4'")).rowCount,0);
  // A file picker can finish after Refresh has replaced its original element.
  await page.evaluate(()=>{const picker=document.querySelector('[data-lib-upload]'),files=new DataTransfer();files.items.add(new File(['late selection'],'late.txt',{type:'text/plain'}));document.querySelector('[data-lib-action=refresh]').click();picker.files=files.files;picker.dispatchEvent(new Event('change',{bubbles:true}));});
  await page.getByRole('button',{name:'Open late.txt',exact:true}).waitFor();
  const wav=Buffer.alloc(44+16000);wav.write('RIFF');wav.writeUInt32LE(wav.length-8,4);wav.write('WAVEfmt ',8);wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);wav.writeUInt32LE(8000,24);wav.writeUInt32LE(16000,28);wav.writeUInt16LE(2,32);wav.writeUInt16LE(16,34);wav.write('data',36);wav.writeUInt32LE(16000,40);
  await page.locator('[data-lib-upload]').setInputFiles({name:'quiet.wav',mimeType:'audio/wav',buffer:wav});await page.getByRole('button',{name:'Open quiet.wav',exact:true}).waitFor();await open('Open quiet.wav');
  await page.getByRole('region',{name:'Library audio player',exact:true}).waitFor();
  assert.equal(await page.locator('[data-podcast-speed]').getAttribute('step'),'0.25');
  await page.locator('[data-podcast-speed]').evaluate(e=>{e.value='3';e.dispatchEvent(new Event('input',{bubbles:true}));});assert.equal(await page.locator('#podcast-player').count(),1);
  assert.equal(await page.locator('.podcast-transcript-link').isVisible(),false);
  // Generate real browser-supported media without a transcoder dependency.
  const videoBase64=await page.evaluate(async()=>{
   const canvas=document.createElement('canvas');canvas.width=160;canvas.height=90;const ctx=canvas.getContext('2d'),stream=canvas.captureStream(10),recorder=new MediaRecorder(stream,{mimeType:'video/webm;codecs=vp8'}),chunks=[];
   recorder.ondataavailable=e=>chunks.push(e.data);const done=new Promise(r=>recorder.onstop=r);recorder.start();
   for(let i=0;i<20;i++){ctx.fillStyle=i%2?'#65b738':'#8b73cc';ctx.fillRect(0,0,160,90);await new Promise(r=>setTimeout(r,100));}recorder.stop();await done;stream.getTracks().forEach(t=>t.stop());
   const bytes=new Uint8Array(await new Blob(chunks).arrayBuffer());return btoa(String.fromCharCode(...bytes));
  });
  await open('Open Block storage');await page.getByText('A little room for everything.',{exact:true}).waitFor();
  await page.locator('[data-lib-upload]').setInputFiles({name:'sample.webm',mimeType:'video/webm',buffer:Buffer.from(videoBase64,'base64')});await page.getByRole('button',{name:'Open sample.webm',exact:true}).waitFor();await open('Open sample.webm');
  await page.waitForFunction(()=>Number.isFinite(document.querySelector('.library-video-dialog video')?.duration));
  assert.equal(await page.locator('[data-video-speed]').getAttribute('type'),'range');assert.equal(await page.locator('[data-video-speed]').getAttribute('min'),'0.25');assert.equal(await page.locator('[data-video-speed]').getAttribute('max'),'3');
  for(const speed of ['0.5','0.75','1','1.5','2','3']){await page.locator('[data-video-speed]').evaluate((e,value)=>{e.value=value;e.dispatchEvent(new Event('input',{bubbles:true}));},speed);assert.equal(await page.locator('video').evaluate(v=>v.playbackRate),Number(speed));}
  await page.getByRole('button',{name:'Stop video',exact:true}).click();assert.equal(await page.locator('video').evaluate(v=>v.currentTime),0);
  await page.screenshot({path:'qa-results/library/video-light.png'});await page.getByRole('button',{name:'Close video',exact:true}).click();
  await page.evaluate(()=>{document.documentElement.dataset.theme='dark';localStorage.setItem('csquest-theme','dark');});
  await page.screenshot({path:'qa-results/library/desktop-dark.png',fullPage:true});
  await page.setViewportSize({width:390,height:844});await page.screenshot({path:'qa-results/library/mobile-dark.png',fullPage:true});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Mobile should have no horizontal overflow');
  await open('Open sample.webm');await page.waitForFunction(()=>Number.isFinite(document.querySelector('.library-video-dialog video')?.duration));await page.screenshot({path:'qa-results/library/video-mobile.png'});await page.getByRole('button',{name:'Close video',exact:true}).click();
  await page.locator('[data-podcast-action=close]').click();
  await page.locator('[data-lib-upload]').setInputFiles({name:'unsupported.mkv',mimeType:'video/x-matroska',buffer:Buffer.from('not a supported video')});await page.getByRole('button',{name:'Open unsupported.mkv',exact:true}).waitFor();await open('Open unsupported.mkv');await page.getByText('This browser cannot play this container or codec.',{exact:false}).waitFor();await page.getByRole('button',{name:'Close video',exact:true}).click();
  assert.deepEqual(errors,[]);console.log('Library browser checks passed: file operations, preflight rejection without chunks, shared audio, real video and all speeds, unsupported MKV fallback, desktop/mobile themes.');
 }finally{await browser?.close();await new Promise(r=>server.close(r));await fixture.dispose();await fs.rm(directory,{recursive:true,force:true});}
})().catch(e=>{console.error(e);process.exitCode=1;});
