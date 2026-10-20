const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
(async()=>{
 const {libraryFixture}=await import('./library-fixture.mjs');let cleanup,browser,page;
 const f=await libraryFixture({after:fn=>cleanup=fn},{courses:true,quota:64*1024**2});
 const output='qa-results/library-video-mobile';await fs.mkdir(output,{recursive:true});
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true,reducedMotion:'reduce'});await context.addCookies([{name:'csquest_session',value:f.token,url:f.base}]);
  page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(f.base+'/#library');await page.locator('[data-lib-action=refresh]:enabled').waitFor();
  // Real MP4s in both aspect ratios. Record concurrently for enough seekable time.
  const media=await page.evaluate(async()=>Promise.all([[160,90],[90,160]].map(async([width,height])=>{
   const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;const ctx=canvas.getContext('2d'),stream=canvas.captureStream(10),parts=[];
   const type=['video/mp4;codecs=avc1.42001E','video/mp4'].find(t=>MediaRecorder.isTypeSupported(t));if(!type)throw Error('MP4 recording is required for this integration check');
   const recorder=new MediaRecorder(stream,{mimeType:type});recorder.ondataavailable=e=>parts.push(e.data);const stopped=new Promise(r=>recorder.onstop=r);recorder.start();
   for(let i=0;i<120;i++){ctx.fillStyle=i%2?'#447744':'#99bbaa';ctx.fillRect(0,0,width,height);ctx.fillStyle='#ffffff';ctx.font='20px sans-serif';ctx.fillText(String(i),10,30);await new Promise(r=>setTimeout(r,100));}
   recorder.stop();await stopped;stream.getTracks().forEach(t=>t.stop());const data=new Uint8Array(await new Blob(parts).arrayBuffer());let binary='';for(const byte of data)binary+=String.fromCharCode(byte);return {width,height,type,data:btoa(binary)};
  })));
  const json=async response=>{assert.equal(response.status(),200,await response.text());return response.json();};
  for(const video of media){
   const name=video.width>video.height?'landscape.mp4':'portrait.mp4',buffer=Buffer.from(video.data,'base64'),u=await json(await context.request.post(f.base+'/api/library/upload',{headers:{'X-CSQuest-Request':'1'},data:{drive:'boot',name,size:buffer.length}}));
   await json(await context.request.put(f.base+`/api/library/chunk?id=${u.id}&offset=0`,{headers:{'X-CSQuest-Request':'1','Content-Type':'application/octet-stream'},data:buffer}));await json(await context.request.post(f.base+'/api/library/complete',{headers:{'X-CSQuest-Request':'1'},data:{id:u.id}}));
  }
  await page.getByRole('button',{name:'Open boot storage',exact:true}).click();await page.getByRole('button',{name:'Open landscape.mp4',exact:true}).waitFor();
  const speeds=Array.from({length:12},(_,i)=>(i+1)/4),results=[];
  for(const name of ['landscape.mp4','portrait.mp4']){
   await page.getByRole('button',{name:'Open '+name,exact:true}).click();await page.waitForFunction(()=>Number.isFinite(document.querySelector('.library-video-dialog video')?.duration));
   await page.getByRole('button',{name:'Stop video',exact:true}).click();
   assert.equal(await page.locator('[data-video-speed]').getAttribute('step'),'0.25');
   for(const speed of speeds){await page.locator('[data-video-speed]').evaluate((e,value)=>{e.value=value;e.dispatchEvent(new Event('input',{bubbles:true}));},String(speed));assert.equal(await page.locator('.library-video-dialog video').evaluate(v=>v.playbackRate),speed);}
   await page.locator('[data-video-skip]').fill('3');await page.getByRole('button',{name:'Forward 3 seconds',exact:true}).click();assert.ok(Math.abs(await page.locator('.library-video-dialog video').evaluate(v=>v.currentTime)-3)<.15);
   await page.getByRole('button',{name:'Back 3 seconds',exact:true}).click();assert.ok(await page.locator('.library-video-dialog video').evaluate(v=>v.currentTime)<.15);
   await page.locator('[data-video-skip]').fill('600');await page.getByRole('button',{name:'Forward 600 seconds',exact:true}).click();assert.ok(await page.locator('.library-video-dialog video').evaluate(v=>Math.abs(v.currentTime-v.duration))<.15);await page.getByRole('button',{name:'Back 600 seconds',exact:true}).click();
   await page.locator('[data-video-skip]').fill('0');await page.locator('[data-video-skip]').blur();assert.equal(await page.locator('[data-video-skip]').inputValue(),'600');await page.locator('[data-video-skip]').fill('3');
   await page.locator('.library-video-dialog video').focus();await page.keyboard.press('ArrowRight');assert.ok(Math.abs(await page.locator('.library-video-dialog video').evaluate(v=>v.currentTime)-3)<.15);await page.keyboard.press('ArrowLeft');
   for(const [width,height] of [[1440,900],[390,844],[360,640],[844,390],[650,360],[568,320]]){
    await page.setViewportSize({width,height});
    const geometry=await page.evaluate(()=>{const d=document.querySelector('.library-video-dialog'),v=d.querySelector('video'),controls=d.querySelector('.library-video-controls'),rect=d.getBoundingClientRect(),vr=v.getBoundingClientRect(),cr=controls.getBoundingClientRect();return {fits:rect.left>=0&&rect.right<=innerWidth+1&&rect.top>=0&&rect.bottom<=innerHeight+1,controls:cr.bottom<=innerHeight+1,videoHeight:vr.height,contains:getComputedStyle(v).objectFit,overflow:d.scrollWidth>d.clientWidth+1};});
    assert.ok(geometry.fits,JSON.stringify({name,width,height,geometry}));assert.ok(geometry.controls,JSON.stringify({name,width,height,geometry}));assert.ok(geometry.videoHeight>50);assert.equal(geometry.contains,'contain');assert.equal(geometry.overflow,false);
    const overlay=await page.evaluate(()=>{const p=document.querySelector('.library-video-player'),v=p.querySelector('video'),stage=p.querySelector('.library-video-stage'),controls=p.querySelector('.library-video-controls');const rect=()=>{const r=v.getBoundingClientRect();return [r.x,r.y,r.width,r.height];};const visible=rect(),sr=stage.getBoundingClientRect(),cr=controls.getBoundingClientRect();p.classList.add('is-controls-hidden');const hidden=rect();p.classList.remove('is-controls-hidden');return {visible,hidden,position:getComputedStyle(controls).position,overlaps:cr.top>=sr.top&&cr.bottom<=sr.bottom+1};});
    assert.deepEqual(overlay.visible,overlay.hidden,'Showing controls must not resize or move the video');assert.equal(overlay.position,'absolute');assert.ok(overlay.overlaps);
    await page.screenshot({path:`${output}/${name}-${width}x${height}.png`});results.push({name,width,height,...geometry});
   }
   await page.setViewportSize({width:390,height:844});
   await page.getByRole('button',{name:'Stop video',exact:true}).click();
   await page.locator('[data-video-speed]').evaluate(e=>{e.value=1;e.dispatchEvent(new Event('input',{bubbles:true}));});
   await page.getByRole('button',{name:'Play video',exact:true}).click();
   await page.waitForFunction(()=>document.querySelector('.library-video-player').classList.contains('is-controls-hidden'));
   assert.equal(await page.locator('.library-video-player>header').isVisible(),false,'Video title hides with playback controls');
   await page.locator('.library-video-dialog video').focus();
   const beforeSeek=await page.locator('.library-video-dialog video').evaluate(v=>v.currentTime);
   await page.keyboard.press('ArrowRight');await page.waitForTimeout(250);
   assert.ok(await page.locator('.library-video-dialog video').evaluate((v,t)=>v.currentTime>=t+2.8,beforeSeek),'Hidden keyboard shortcut still seeks');
   assert.equal(await page.locator('.library-video-player').evaluate(e=>e.classList.contains('is-controls-hidden')),true,'Keyboard seeking and resumed playback must not reveal controls');
   await page.keyboard.press('ArrowLeft');await page.waitForTimeout(250);
   assert.equal(await page.locator('.library-video-player>header').isVisible(),false,'Backward seeking keeps title hidden');
   await page.keyboard.press('f');await page.waitForFunction(()=>!!document.fullscreenElement);
   assert.equal(await page.locator('.library-video-player').evaluate(e=>e.classList.contains('is-controls-hidden')),true,'Keyboard fullscreen keeps controls hidden');
   const fullscreenBounds=await page.locator('.library-video-stage').boundingBox();await page.locator('.library-video-player').evaluate(e=>e.classList.remove('is-controls-hidden'));assert.deepEqual(await page.locator('.library-video-stage').boundingBox(),fullscreenBounds,'Fullscreen overlays do not resize the stage');await page.locator('.library-video-player').evaluate(e=>e.classList.add('is-controls-hidden'));
   await page.keyboard.press('f');await page.waitForFunction(()=>!document.fullscreenElement);
   await page.locator('.library-video-dialog video').dispatchEvent('pointerdown');
   await page.locator('.library-video-dialog video').dispatchEvent('click');
   assert.equal(await page.locator('.library-video-dialog video').evaluate(v=>v.paused),false,'First tap reveals controls without pausing');
   assert.equal(await page.locator('.library-video-player').evaluate(e=>e.classList.contains('is-controls-hidden')),false);
   assert.equal(await page.locator('.library-video-player>header').isVisible(),true,'Video title returns with playback controls');
   await page.getByRole('button',{name:'Pause video',exact:true}).click();await page.waitForTimeout(3200);
   assert.equal(await page.locator('.library-video-player').evaluate(e=>e.classList.contains('is-controls-hidden')),false,'Controls stay visible while paused');
   await page.locator('[data-video-speed]').evaluate(e=>{e.value=3;e.dispatchEvent(new Event('input',{bubbles:true}));});
   await page.getByRole('button',{name:'Fullscreen video',exact:true}).click();await page.waitForFunction(()=>!!document.fullscreenElement);assert.equal(await page.locator('.library-video-player').evaluate(p=>p===document.fullscreenElement),true);await page.screenshot({path:`${output}/${name}-fullscreen.png`});await page.locator('[data-video-action=fullscreen]').click();
   await page.getByRole('button',{name:'Close video',exact:true}).click();
   await page.getByRole('button',{name:'Open '+name,exact:true}).click();await page.waitForFunction(()=>Number.isFinite(document.querySelector('.library-video-dialog video')?.duration));assert.equal(await page.locator('[data-video-skip]').inputValue(),'3');assert.equal(await page.locator('.library-video-dialog video').evaluate(v=>v.playbackRate),3);await page.getByRole('button',{name:'Close video',exact:true}).click();
  }
  assert.deepEqual(errors,[]);await fs.writeFile(output+'/report.json',JSON.stringify({results,speeds,customSkip:true,fullscreen:true,persisted:true,stableOverlayBounds:true,hiddenKeyboardControls:true,errors},null,2));console.log('Mobile video checks passed: real portrait/landscape MP4s, six desktop/mobile viewports, stable overlays, hidden keyboard seeking/fullscreen, custom skips, persistence, and all twelve speeds.');
 }catch(error){if(page)await page.screenshot({path:output+'/failure.png'}).catch(()=>{});throw error;}
 finally{await browser?.close();await cleanup();}
})().catch(error=>{console.error(error.message.split('\n')[0]);console.error(error.stack?.split('\n').find(line=>line.includes('library-video-mobile-browser.cjs'))?.trim()||'');process.exitCode=1;});
