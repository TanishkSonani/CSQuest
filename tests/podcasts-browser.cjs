const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs/promises'),os=require('node:os'),path=require('node:path');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),directory=await fs.mkdtemp(path.join(os.tmpdir(),'csquest-podcast-browser-'));let browser,server;
 try{
  const episodes=(await fixture.store.document('coa','podcasts.json')).episodes;
  await fs.mkdir(path.join(directory,'coa'),{recursive:true});
  for(const episode of episodes.slice(0,2)){
   const stem=path.join(directory,'coa',`unit-${episode.unit}-${episode.hash.slice(0,12)}`),step=20/episode.turns.length;
   await fs.copyFile('tests/fixtures/podcast-tone.mp3',stem+'.mp3');
   const turns=episode.turns.map((t,index)=>({index,speaker:t.speaker,start:index*step,end:(index+1)*step}));
   await fs.writeFile(stem+'.json',JSON.stringify({hash:episode.hash,duration:20,turns,chapters:episode.chapters.map(c=>({...c,start:turns[c.startTurn].start,end:turns[c.endTurn].end}))}));
  }
  server=createServer({store:fixture.store,podcastDirectory:directory});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'}),page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  assert.equal((await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'podcast_browser',displayName:'Audio Learner',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  await page.goto(base+'/#podcasts');await page.locator('[data-podcast-id="coa:0"]').waitFor();assert.equal(await page.locator('[data-podcast-id]').count(),90);
  await page.locator('#podcast-course').selectOption('coa');assert.equal(await page.locator('[data-podcast-id]').count(),6);
  await page.locator('#podcast-search').fill('cache');assert.equal(await page.locator('[data-podcast-id]').count(),1);await page.locator('#podcast-search').fill('');
  await page.locator('[data-podcast-id="coa:0"]').click();const dock=page.locator('#podcast-player');await dock.waitFor();await page.waitForFunction(()=>Number(document.querySelector('[data-podcast-seek]').value)>.1);
  await dock.locator('[data-podcast-action=toggle][aria-label="Pause podcast"]').waitFor();await dock.locator('[data-podcast-action=toggle]').click();await dock.locator('[data-podcast-action=toggle][aria-label="Play podcast"]').waitFor();
  await dock.locator('[data-podcast-speed]').selectOption('1.5');assert.equal(await dock.locator('[data-podcast-speed]').inputValue(),'1.5');
  await page.locator('[data-podcast-turn="5"]').click();await page.waitForFunction(()=>document.querySelector('[data-podcast-turn="5"]')?.classList.contains('is-active'));
  await page.locator('.podcast-chapters summary').click();await page.locator('[data-podcast-chapter="topic-1"]').click();const chapterStart=await page.locator('[data-podcast-elapsed]').innerText();assert.notEqual(chapterStart,'0:00');await page.locator('.podcast-chapters summary').click();
  await dock.locator('[data-podcast-action=back]').click();assert.equal(await page.locator('[data-podcast-elapsed]').innerText(),'0:00');
  await dock.locator('[data-podcast-action=forward]').click();assert.match(await page.locator('[data-podcast-elapsed]').innerText(),/0:15/);
  await dock.locator('[data-podcast-action=toggle]').click();await page.goto(base+'/#learn');await page.locator('.unit-banner').waitFor();assert.ok(await dock.isVisible());assert.equal(await dock.locator('[data-podcast-action=toggle]').getAttribute('aria-label'),'Pause podcast');
  await dock.locator('[data-podcast-seek]').focus();await page.keyboard.press('End');await page.waitForFunction(()=>document.querySelector('[data-podcast-now-title]')?.textContent.includes('Memory'));
  await dock.locator('[data-podcast-action=previous]').click();await page.waitForFunction(()=>document.querySelector('[data-podcast-now-title]')?.textContent==='Computer foundations');
  await page.goto(base+'/#podcasts');await page.locator('[data-podcast-detail] h2').waitFor();await dock.locator('[data-podcast-action=toggle][aria-label="Pause podcast"]').waitFor();await dock.locator('[data-podcast-action=toggle]').click();
  await fs.mkdir('qa-results/podcasts',{recursive:true});
  for(const theme of ['light','dark']){
   if(await page.locator('html').getAttribute('data-theme')!==theme)await page.locator('[data-action=theme]').first().click();
   for(const [width,height] of [[320,568],[390,844],[430,932],[768,1024],[1366,768],[1440,900]]){
    await page.setViewportSize({width,height});
    await dock.locator('[data-podcast-open-transcript]').last().click();
    const transcript=page.locator('[data-podcast-detail]');await transcript.waitFor();
    assert.ok(await transcript.evaluate(el=>document.activeElement===el),'Transcript shortcut focuses the scrollable reader');
    const bounds=await transcript.boundingBox(),playerBounds=await dock.boundingBox();
    const headerBounds=await page.locator('.topbar').boundingBox();assert.ok(bounds.y>=headerBounds.y+headerBounds.height&&bounds.y+bounds.height<=playerBounds.y+1,`Transcript is accessible above player at ${width}/${theme}: ${JSON.stringify({bounds,playerBounds})}`);
    assert.ok(await transcript.evaluate(el=>el.scrollHeight>el.clientHeight),'The complete episode card is a bounded scroll container');
    assert.equal(await page.locator('.podcast-transcript').evaluate(el=>el.clientHeight>=el.scrollHeight-1),true,'There is one reader scroll area, without a nested transcript trap');
    await transcript.focus();await page.keyboard.press('Home');
    await page.waitForFunction(()=>document.querySelector('[data-podcast-detail]').scrollTop<2);
    const headingBounds=await page.locator('.podcast-detail-heading').boundingBox();assert.ok(headingBounds.y>=bounds.y&&headingBounds.y<bounds.y+40,'Episode title is reachable at the top');
    await transcript.focus();await page.keyboard.press('End');
    await page.waitForFunction(()=>{const el=document.querySelector('[data-podcast-detail]');return el.scrollTop+el.clientHeight>=el.scrollHeight-2;},null,{timeout:4000}).catch(async problem=>{console.log('End scroll diagnostics',await transcript.evaluate(el=>({scrollTop:el.scrollTop,height:el.clientHeight,total:el.scrollHeight,overflow:getComputedStyle(el).overflowY,focus:document.activeElement?.outerHTML.slice(0,160)})));await page.screenshot({path:'qa-results/podcasts/reader-failure.png'});throw problem;});
    assert.equal(await page.locator('[data-podcast-follow]').isChecked(),false,'Keyboard scrolling pauses audio following');
    const lastLine=await page.locator('.podcast-turn').last().boundingBox();assert.ok(lastLine.y+lastLine.height<=bounds.y+bounds.height+1,'Final transcript line is reachable');
    await page.locator('[data-podcast-follow]').check();
    assert.ok(await page.locator('.podcast-turn.is-active').evaluate(el=>{const a=el.getBoundingClientRect(),b=el.closest('[data-podcast-detail]').getBoundingClientRect();return a.top>=b.top&&a.top<b.bottom;}),'Following immediately returns to the active caption');
    await dock.locator('[data-podcast-action=forward]').click();
    await page.waitForFunction(()=>{const line=document.querySelector('.podcast-turn.is-active'),reader=line?.closest('[data-podcast-detail]');if(!line||!reader)return false;const a=line.getBoundingClientRect(),b=reader.getBoundingClientRect();return a.top>=b.top&&a.top<b.bottom;});
    assert.ok(await transcript.evaluate(el=>el.scrollTop>300),'Following scrolls to a later spoken dialogue, not just its highlight');
    await dock.locator('[data-podcast-action=back]').click();
    await page.waitForFunction(()=>{const line=document.querySelector('.podcast-turn.is-active'),reader=line?.closest('[data-podcast-detail]');if(!line||!reader)return false;const a=line.getBoundingClientRect(),b=reader.getBoundingClientRect();return a.top>=b.top&&a.top<b.bottom;});
    await transcript.hover();await page.mouse.wheel(0,600);
    await page.waitForFunction(()=>!document.querySelector('[data-podcast-follow]').checked);
    await page.waitForTimeout(150);const manualPosition=await transcript.evaluate(el=>el.scrollTop);
    await dock.locator('[data-podcast-action=back]').click();
    assert.ok(Math.abs(await transcript.evaluate(el=>el.scrollTop)-manualPosition)<2,'Audio updates preserve manual reading position');
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Podcast overflow at ${width}/${theme}`);assert.ok(await dock.evaluate(el=>el.scrollWidth<=el.clientWidth+1),`Player overflow at ${width}/${theme}`);
    if([390,1440].includes(width)){await dock.locator('[data-podcast-open-transcript]').last().click();await page.screenshot({path:`qa-results/podcasts/${theme}-${width}.png`});}
   }
  }
  const mobileContext=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce',storageState:await context.storageState()}),mobile=await mobileContext.newPage();
  mobile.on('pageerror',e=>errors.push(e.message));
  await mobile.goto(base+'/#podcasts');await mobile.locator('[data-podcast-id="coa:0"]').click();
  await mobile.locator('#podcast-player [data-podcast-open-transcript]').last().click();
  const reader=mobile.locator('[data-podcast-detail]');await reader.waitFor();
  await mobile.locator('[data-podcast-follow]').check();
  await mobile.waitForFunction(()=>Number(document.querySelector('[data-podcast-seek]').value)>3);
  assert.ok(await reader.evaluate(el=>el.scrollTop>300),'Actual playback automatically moves the reader to the current caption');
  const before=await reader.evaluate(el=>el.scrollTop),rect=await reader.boundingBox(),cdp=await mobileContext.newCDPSession(mobile),x=rect.x+rect.width/2,y=rect.y+rect.height-30;
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});
  for(let distance=20;distance<200;distance+=20)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y:y-distance}]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  await mobile.waitForFunction(position=>document.querySelector('[data-podcast-detail]').scrollTop>position+30,before);
  assert.equal(await mobile.locator('[data-podcast-follow]').isChecked(),false,'Native touch scrolling pauses caption following');
  await mobile.screenshot({path:'qa-results/podcasts/touch-reader-390.png'});await mobileContext.close();
  const snapshot=await context.request.get(base+'/api/account/session');assert.equal(snapshot.status(),200);const saved=await snapshot.json();for(const [key,value] of Object.entries(saved.data)){if(key.endsWith('-quest-v1')){const progress=JSON.parse(value);assert.equal(progress.xp,0);assert.deepEqual(progress.completed,[]);}}
  await dock.locator('[data-podcast-action=close]').click();assert.ok(await dock.isHidden());assert.equal(await page.locator('html').evaluate(el=>el.classList.contains('has-podcast-player')),false);
  await page.goto(base+'/#learn');assert.equal(await page.locator('.unit-banner [data-podcast-section]').count(),0);assert.equal(await page.locator('.unit-banner .guide-button').count(),1);await page.locator('.podcast-section-card [data-podcast-section]').click();await dock.locator('[data-podcast-action=toggle][aria-label="Pause podcast"]').waitFor();await dock.locator('[data-podcast-action=toggle]').click();
  await dock.locator('[data-podcast-open-transcript]').last().click();await page.locator('[data-podcast-detail]:focus').waitFor();await page.locator('[data-podcast-detail] a[download]').waitFor();const downloading=page.waitForEvent('download');await page.locator('[data-podcast-detail] a[download]').click();const download=await downloading;assert.equal(download.suggestedFilename(),'coa-section-1.mp3');await download.cancel();
  await dock.locator('[data-podcast-action=next]').click();await page.waitForFunction(()=>document.querySelector('[data-podcast-now-title]')?.textContent.includes('Memory'));
  await dock.locator('[data-podcast-action=next]').click();await page.waitForFunction(()=>document.querySelector('[data-podcast-now-title]')?.textContent.includes('Instruction sets'));assert.ok(await dock.locator('[data-podcast-action=toggle]').isDisabled(),'An unavailable section stays in sequence and is not silently skipped');
  const newlyReady=episodes[2],stem=path.join(directory,'coa',`unit-2-${newlyReady.hash.slice(0,12)}`),step=20/newlyReady.turns.length,turns=newlyReady.turns.map((t,index)=>({index,speaker:t.speaker,start:index*step,end:(index+1)*step}));await fs.copyFile('tests/fixtures/podcast-tone.mp3',stem+'.mp3');await fs.writeFile(stem+'.json',JSON.stringify({hash:newlyReady.hash,duration:20,turns,chapters:newlyReady.chapters.map(c=>({...c,start:turns[c.startTurn].start,end:turns[c.endTurn].end}))}));
  await page.locator('[data-podcast-action=refresh]').click();await page.waitForFunction(()=>!document.querySelector('#podcast-player [data-podcast-action=toggle]').disabled);assert.equal(await dock.locator('[data-podcast-action=toggle]').getAttribute('aria-label'),'Play podcast','Refreshing newly rendered audio does not autoplay unexpectedly');
  await dock.locator('[data-podcast-action=close]').click();
  assert.deepEqual(errors,[]);console.log('Podcasts passed: real media decoding, course/topic search, play/pause, speed, skips, chapters, live transcript, route persistence, automatic next episode, previous, six widths and both themes.');
 }finally{await browser?.close();if(server)await new Promise(resolve=>server.close(resolve));await fixture.dispose();assert.ok(directory.startsWith(path.join(os.tmpdir(),'csquest-podcast-browser-')));await fs.rm(directory,{recursive:true,force:true});}
})().catch(e=>{console.error(e);process.exitCode=1;});
