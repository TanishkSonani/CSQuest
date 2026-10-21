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
  const uploaded={};const json=async response=>{assert.equal(response.status(),200,await response.text());return response.json();};
  for(const video of [...media,{name:'unplayable.mp4',data:Buffer.from('Invalid video for playback error QA').toString('base64')}]){
   const name=video.name||(video.width>video.height?'landscape.mp4':'portrait.mp4'),buffer=Buffer.from(video.data,'base64'),u=await json(await context.request.post(f.base+'/api/library/upload',{headers:{'X-CSQuest-Request':'1'},data:{drive:'boot',name,size:buffer.length}}));
   await json(await context.request.put(f.base+`/api/library/chunk?id=${u.id}&offset=0`,{headers:{'X-CSQuest-Request':'1','Content-Type':'application/octet-stream'},data:buffer}));await json(await context.request.post(f.base+'/api/library/complete',{headers:{'X-CSQuest-Request':'1'},data:{id:u.id}}));uploaded[name]=u;
  }
  await page.getByRole('button',{name:'Open boot storage',exact:true}).click();await page.getByRole('button',{name:'Open landscape.mp4',exact:true}).waitFor();
  const speeds=Array.from({length:12},(_,i)=>(i+1)/4),results=[];
  const setSkip=async value=>{if(!await page.locator('[data-video-skip]').isVisible())await page.locator('[data-video-popup=settings]').click();await page.locator('[data-video-skip]').fill(value);};
  for(const name of ['landscape.mp4','portrait.mp4']){
   // Exercise preloading even when browser autoplay policy blocks playback.
   await page.evaluate(()=>{window.qaNativePlay=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){return Promise.reject(new DOMException('Autoplay blocked for QA','NotAllowedError'));};Object.defineProperty(navigator,'connection',{configurable:true,value:Object.assign(new EventTarget(),{saveData:false})});});
   let releaseMedia;const mediaReady=new Promise(resolve=>releaseMedia=resolve),delayMedia=async route=>{await mediaReady;await route.continue();};await page.route('**/api/library/file?*',delayMedia);
   await page.getByRole('button',{name:'Open '+name,exact:true}).click();
   try{await page.locator('.video-loading-indicator').waitFor({state:'visible'});assert.equal(await page.locator('[data-video-message]').textContent(),'','Loading uses a spinner instead of buffering text');await page.screenshot({path:`${output}/${name}-loading-spinner.png`});}finally{releaseMedia();}
   await page.waitForFunction(()=>Number.isFinite(document.querySelector('.library-video-dialog video')?.duration));await page.unroute('**/api/library/file?*',delayMedia);
   await page.waitForFunction(()=>{const v=document.querySelector('.library-video-dialog video');return v?.buffered.length&&v.buffered.end(0)>2&&document.querySelector('.video-buffer-ranges span');});
   assert.equal(await page.locator('.library-video-dialog video').evaluate(v=>v.paused&&v.preload==='auto'),true,'Video buffers ahead even before playback starts');
   assert.ok(await page.locator('.video-buffer-ranges span').first().evaluate(e=>e.getBoundingClientRect().width>0),'Timeline displays actually buffered media');
   await page.locator('.video-loading-indicator').waitFor({state:'hidden'});
   await page.evaluate(()=>{navigator.connection.saveData=true;navigator.connection.dispatchEvent(new Event('change'));});assert.equal(await page.locator('.library-video-dialog video').evaluate(v=>v.preload),'metadata','Respect Data Saver changes');
   await page.evaluate(()=>{navigator.connection.saveData=false;navigator.connection.dispatchEvent(new Event('change'));HTMLMediaElement.prototype.play=window.qaNativePlay;});assert.equal(await page.locator('.library-video-dialog video').evaluate(v=>v.preload),'auto');
   await page.locator('.library-video-dialog video').evaluate(v=>{v.pause();v.currentTime=0;});
   assert.equal(await page.getByRole('button',{name:'Stop video',exact:true}).count(),0);
   assert.equal(await page.locator('[data-video-speed]').isVisible(),false);assert.equal(await page.locator('[data-video-volume]').isVisible(),false);
   await page.locator('[data-video-popup=speed]').click();assert.equal(await page.locator('[data-video-speed]').isVisible(),true);
   await page.locator('[data-video-speed]').focus();await page.keyboard.press('Home');await page.keyboard.press('ArrowUp');assert.equal(await page.locator('video').evaluate(v=>v.playbackRate),.5);
   await page.locator('[data-video-popup=volume]').click();assert.equal(await page.locator('[data-video-speed]').isVisible(),false);
   await page.locator('[data-video-volume]').focus();await page.keyboard.press('Home');assert.equal(await page.locator('video').evaluate(v=>v.volume),0);await page.keyboard.press('End');assert.equal(await page.locator('video').evaluate(v=>v.volume),1);
   await page.getByRole('button',{name:'Mute video',exact:true}).click();assert.equal(await page.locator('video').evaluate(v=>v.muted),true);await page.getByRole('button',{name:'Unmute video',exact:true}).click();
   await page.keyboard.press('Escape');assert.equal(await page.locator('[data-video-volume]').isVisible(),false);assert.equal(await page.locator('.library-video-dialog').isVisible(),true);
   assert.equal(await page.locator('[data-video-speed]').getAttribute('step'),'0.25');
   for(const speed of speeds){await page.locator('[data-video-speed]').evaluate((e,value)=>{e.value=value;e.dispatchEvent(new Event('input',{bubbles:true}));},String(speed));assert.equal(await page.locator('.library-video-dialog video').evaluate(v=>v.playbackRate),speed);}
   await setSkip('3');await page.getByRole('button',{name:'Forward 3 seconds',exact:true}).click();assert.ok(Math.abs(await page.locator('.library-video-dialog video').evaluate(v=>v.currentTime)-3)<.15);
   const totalText=await page.locator('[data-video-total]').textContent();await page.locator('[data-video-duration]').click();assert.match(await page.locator('[data-video-total]').textContent(),/^-/);assert.match(await page.locator('[data-video-time]').textContent(),/00:03/);await page.locator('[data-video-duration]').click();assert.equal(await page.locator('[data-video-total]').textContent(),totalText);
   await page.getByRole('button',{name:'Back 3 seconds',exact:true}).click();assert.ok(await page.locator('.library-video-dialog video').evaluate(v=>v.currentTime)<.15);
   await setSkip('600');await page.getByRole('button',{name:'Forward 600 seconds',exact:true}).click();assert.ok(await page.locator('.library-video-dialog video').evaluate(v=>Math.abs(v.currentTime-v.duration))<.15);await page.getByRole('button',{name:'Back 600 seconds',exact:true}).click();
   await setSkip('0');await page.locator('[data-video-skip]').blur();assert.equal(await page.locator('[data-video-skip]').inputValue(),'600');await setSkip('3');
   await page.locator('.library-video-dialog video').focus();await page.keyboard.press('ArrowRight');assert.ok(Math.abs(await page.locator('.library-video-dialog video').evaluate(v=>v.currentTime)-3)<.15);await page.keyboard.press('ArrowLeft');
   for(const [width,height] of [[1440,900],[390,844],[360,640],[844,390],[650,360],[568,320]]){
    await page.setViewportSize({width,height});
    const geometry=await page.evaluate(()=>{const d=document.querySelector('.library-video-dialog'),v=d.querySelector('video'),controls=d.querySelector('.library-video-controls'),rect=d.getBoundingClientRect(),vr=v.getBoundingClientRect(),cr=controls.getBoundingClientRect();return {fits:rect.left>=0&&rect.right<=innerWidth+1&&rect.top>=0&&rect.bottom<=innerHeight+1,controls:cr.bottom<=innerHeight+1,videoHeight:vr.height,contains:getComputedStyle(v).objectFit,overflow:d.scrollWidth>d.clientWidth+1};});
    assert.ok(geometry.fits,JSON.stringify({name,width,height,geometry}));assert.ok(geometry.controls,JSON.stringify({name,width,height,geometry}));assert.ok(geometry.videoHeight>50);assert.equal(geometry.contains,'contain');assert.equal(geometry.overflow,false);
    const overlay=await page.evaluate(()=>{const p=document.querySelector('.library-video-player'),v=p.querySelector('video'),stage=p.querySelector('.library-video-stage'),controls=p.querySelector('.library-video-controls');const rect=()=>{const r=v.getBoundingClientRect();return [r.x,r.y,r.width,r.height];};const visible=rect(),sr=stage.getBoundingClientRect(),cr=controls.getBoundingClientRect();p.classList.add('is-controls-hidden');const hidden=rect();p.classList.remove('is-controls-hidden');return {visible,hidden,position:getComputedStyle(controls).position,overlaps:cr.top>=sr.top&&cr.bottom<=sr.bottom+1};});
    assert.deepEqual(overlay.visible,overlay.hidden,'Showing controls must not resize or move the video');assert.equal(overlay.position,'absolute');assert.ok(overlay.overlaps);
    const centered=await page.locator('.video-transport').evaluate(e=>{const r=e.getBoundingClientRect(),p=e.closest('.library-video-player').getBoundingClientRect();return Math.abs((r.left+r.right-p.left-p.right)/2)<1;});assert.ok(centered,'Playback transport stays horizontally centered');
    for(const panel of ['speed','volume']){await page.locator('[data-video-popup='+panel+']').click();const bounds=await page.locator('[data-video-panel='+panel+']').boundingBox(),slider=await page.locator('[data-video-'+panel+']').boundingBox(),player=await page.locator('.library-video-player').boundingBox();assert.ok(slider.height>slider.width,'Slider is vertical');assert.ok(bounds.x>=player.x&&bounds.y>=player.y&&bounds.x+bounds.width<=player.x+player.width+1&&bounds.y+bounds.height<=player.y+player.height+1,JSON.stringify({panel,bounds,player}));if(width===390||width===1440)await page.screenshot({path:`${output}/${name}-${width}-${panel}.png`});await page.locator('[data-video-popup='+panel+']').click();}
    if(width===1440){const seek=await page.locator('[data-video-seek]').boundingBox();await page.mouse.move(seek.x+seek.width/2,seek.y+seek.height/2);await page.locator('.video-seek-tooltip').waitFor({state:'visible'});const seconds=(await page.locator('.video-seek-tooltip').textContent()).split(':').reduce((n,v)=>n*60+Number(v),0),duration=await page.locator('video').evaluate(v=>v.duration);assert.ok(Math.abs(seconds-duration/2)<1);await page.locator('[data-video-seek]').click({position:{x:seek.width/2,y:seek.height/2}});assert.ok(Math.abs(await page.locator('video').evaluate(v=>v.currentTime)-duration/2)<.2);await page.mouse.move(0,0);assert.equal(await page.locator('.video-seek-tooltip').isVisible(),false);await page.locator('video').evaluate(v=>v.currentTime=0);}
    await page.screenshot({path:`${output}/${name}-${width}x${height}.png`});results.push({name,width,height,...geometry});
   }
   await page.setViewportSize({width:390,height:844});
   await page.locator('.library-video-dialog video').evaluate(v=>{v.pause();v.currentTime=0;});
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
  await page.getByRole('button',{name:'Open unplayable.mp4',exact:true}).click();await page.locator('[data-video-message]').waitFor({state:'visible'});assert.match(await page.locator('[data-video-message]>span').textContent(),/cannot play/);await page.locator('.video-loading-indicator').waitFor({state:'hidden'});
  const notice=await page.locator('[data-video-message]').boundingBox(),beforeDismiss=await page.locator('.library-video-stage').boundingBox();assert.ok(notice.width<=420&&notice.x>=0&&notice.x+notice.width<=390);await page.screenshot({path:output+'/playback-error-popup.png'});await page.getByRole('button',{name:'Dismiss video message',exact:true}).click();assert.equal(await page.locator('[data-video-message]').isVisible(),false);assert.deepEqual(await page.locator('.library-video-stage').boundingBox(),beforeDismiss);await page.getByRole('button',{name:'Close video',exact:true}).click();
  const link=await f.ok(await f.req('public-links',{entryId:uploaded['landscape.mp4'].id,days:7})),guest=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),publicPage=await guest.newPage();publicPage.on('pageerror',e=>errors.push(e.message));await publicPage.goto(f.base+'/library-share#'+link.token);await publicPage.getByRole('button',{name:'Open landscape.mp4',exact:true}).click();await publicPage.waitForFunction(()=>Number.isFinite(document.querySelector('video')?.duration));await publicPage.locator('video').evaluate(v=>v.pause());assert.equal(await publicPage.locator('[data-video-action=stop]').count(),0);await publicPage.locator('[data-video-popup=speed]').click();await publicPage.locator('[data-video-speed]').focus();await publicPage.keyboard.press('End');assert.equal(await publicPage.locator('video').evaluate(v=>v.playbackRate),3);await publicPage.locator('[data-video-popup=volume]').click();assert.equal(await publicPage.locator('[data-video-speed]').isVisible(),false);await publicPage.locator('[data-video-volume]').focus();await publicPage.keyboard.press('Home');assert.equal(await publicPage.locator('video').evaluate(v=>v.volume),0);await publicPage.locator('[data-video-popup=volume]').click();await publicPage.locator('[data-video-duration]').click();assert.match(await publicPage.locator('[data-video-total]').textContent(),/^-/);await publicPage.screenshot({path:output+'/public-vlc-controls.png'});await publicPage.getByRole('button',{name:'Close video',exact:true}).click();await guest.close();
  assert.deepEqual(errors,[]);await fs.writeFile(output+'/report.json',JSON.stringify({results,speeds,publicPlayer:true,verticalPopups:true,centeredTransport:true,timeToggle:true,seekHover:true,customSkip:true,fullscreen:true,persisted:true,stableOverlayBounds:true,hiddenKeyboardControls:true,prebufferBeforePlayback:true,dataSaver:true,loadingSpinner:true,dismissiblePopup:true,errors},null,2));console.log('Video checks passed: VLC-style controls, vertical popups, centered playback, time toggling, seek hover, buffered MP4s, six desktop/mobile viewports, stable overlays, keyboard shortcuts and all twelve speeds.');
 }catch(error){if(page)await page.screenshot({path:output+'/failure.png'}).catch(()=>{});throw error;}
 finally{await browser?.close();await cleanup();}
})().catch(error=>{console.error(error.message.split('\n')[0]);console.error(error.stack?.split('\n').find(line=>line.includes('library-video-mobile-browser.cjs'))?.trim()||'');process.exitCode=1;});
