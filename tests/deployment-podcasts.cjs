const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),crypto=require('node:crypto'),fs=require('node:fs/promises');
(async()=>{
 const base=process.env.DEPLOYMENT_URL||process.argv[2];assert.ok(base?.startsWith('https://'),'Provide the production HTTPS URL.');
 const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
 const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'}),page=await context.newPage(),errors=[];
 page.on('pageerror',error=>errors.push(error.message));
 const username='podcast_'+crypto.randomBytes(6).toString('hex'),password=crypto.randomBytes(24).toString('hex'),headers={'X-CSQuest-Request':'1',Origin:new URL(base).origin};let created=false;
 try{
  assert.equal((await context.request.get(base+'/api/podcasts')).status(),401);
  assert.equal((await context.request.get(base+'/api/podcast-audio?subject=coa&unit=0')).status(),401);
  const registration=await context.request.post(base+'/api/account/register',{headers,data:{username,password,displayName:'Podcast Deployment Check',avatar:'chip'}});
  assert.equal(registration.status(),200);created=true;assert.match(registration.headers()['set-cookie'],/; Secure/);
  const catalog=await(await context.request.get(base+'/api/podcasts')).json();assert.equal(catalog.episodes.length,109);assert.equal(catalog.episodes.filter(episode=>episode.ready).length,109);
  for(const episode of [catalog.episodes[0],catalog.episodes.at(-1)]){
   const detail=await(await context.request.get(`${base}/api/podcast?subject=${episode.subject}&unit=${episode.unit}`)).json();assert.ok(detail.ready&&detail.audioUrl);
   const head=await context.request.head(base+detail.audioUrl);assert.equal(head.status(),200);assert.equal(head.headers()['content-type'],'audio/mpeg');assert.equal(head.headers()['accept-ranges'],'bytes');assert.ok(Number(head.headers()['content-length'])>10000);
   const range=await context.request.get(base+detail.audioUrl,{headers:{Range:'bytes=0-63'}});assert.equal(range.status(),206);assert.equal((await range.body()).length,64);
  }
  await fs.mkdir('qa-results/podcasts/live',{recursive:true});
  await page.goto(base+'/#podcasts');await page.locator('[data-podcast-id="coa:0"]').click();
  const dock=page.locator('#podcast-player');await page.waitForFunction(()=>Number(document.querySelector('[data-podcast-seek]')?.value)>.2);
  await dock.locator('[data-podcast-action=toggle][aria-label="Pause podcast"]').click();
  for(const [width,height] of [[1440,900],[390,844]]){
   await page.setViewportSize({width,height});await dock.locator('[data-podcast-open-transcript]').last().click();
   const reader=page.locator('[data-podcast-detail]');await reader.focus();await page.keyboard.press('End');
   await page.waitForFunction(()=>{const el=document.querySelector('[data-podcast-detail]');return el.scrollTop+el.clientHeight>=el.scrollHeight-2;});
   await page.locator('[data-podcast-follow]').check();
   await dock.locator('[data-podcast-seek]').evaluate(el=>{el.value=String(Number(el.max)*.7);el.dispatchEvent(new Event('input',{bubbles:true}));});
   await page.waitForFunction(()=>{const line=document.querySelector('.podcast-turn.is-active'),reader=line?.closest('[data-podcast-detail]');if(!line||!reader)return false;const a=line.getBoundingClientRect(),b=reader.getBoundingClientRect();return a.top>=b.top&&a.top<b.bottom;});
   assert.ok(await reader.evaluate(el=>el.scrollTop>300),'Following brings later dialogue into view');
   const bounds=await reader.boundingBox(),player=await dock.boundingBox(),topbar=await page.locator('.topbar').boundingBox();assert.ok(bounds.y>=topbar.y+topbar.height&&bounds.y+bounds.height<=player.y+1);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   await page.screenshot({path:`qa-results/podcasts/live/reader-${width}.png`});
  }
  await page.goto(base+'/#learn');await page.locator('.unit-banner').waitFor();assert.equal(await page.locator('.unit-banner [data-podcast-section]').count(),0);assert.equal(await page.locator('.unit-banner .guide-button').count(),1);
  assert.deepEqual(errors,[]);console.log('Live podcasts passed: 109 ready, authenticated audio, real byte ranges/playback, automatic caption following, scrollable reader, mobile/desktop layouts and single banner guide.');
 }finally{
  if(created)assert.equal((await context.request.post(base+'/api/account/delete',{headers,data:{username,password}})).status(),200,'Remove disposable verification account');
  await browser.close();
 }
})().catch(error=>{console.error(error);process.exitCode=1;});
