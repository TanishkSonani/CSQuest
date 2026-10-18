const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),crypto=require('node:crypto'),fs=require('node:fs/promises');
const {finishJourney}=require('./journey-helper.cjs');
(async()=>{
 const base=process.argv[2];assert.ok(base?.startsWith('https://'),'Provide the deployed HTTPS URL.');
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
 const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),page=await context.newPage(),errors=[];
 const username='cd_live_'+crypto.randomBytes(6).toString('hex'),password=crypto.randomBytes(24).toString('hex'),headers={'X-CSQuest-Request':'1',Origin:new URL(base).origin};let created=false;
 page.on('pageerror',error=>errors.push(error.message));
 try{
  assert.equal((await context.request.get(base+'/api/course-content?subject=cd')).status(),401);
  const registration=await context.request.post(base+'/api/account/register',{headers,data:{username,password,displayName:'Compiler Publication Check',avatar:'chip'}});assert.equal(registration.status(),200);created=true;
  const subjects=await(await context.request.get(base+'/api/subjects')).json();assert.equal(subjects.find(s=>s.id==='cd').status,'available');
  const response=await context.request.get(base+'/api/course-content?subject=cd');assert.equal(response.status(),200);
  const course=await response.json();assert.equal(course.lessons.length,156);assert.ok(course.lessons.every(l=>l.ready));assert.equal(course.units.length,10);assert.ok(course.units.every(u=>u.compilerLab.optional));assert.equal(course.lessons.reduce((n,l)=>n+l.questions.length,0),624);
  const podcasts=await(await context.request.get(base+'/api/podcasts')).json(),episodes=podcasts.episodes.filter(e=>e.subject==='cd');assert.equal(episodes.length,10);assert.ok(episodes.every(e=>e.ready));
  for(const episode of episodes){const detail=await(await context.request.get(`${base}/api/podcast?subject=cd&unit=${episode.unit}`)).json();assert.equal((await context.request.head(base+detail.audioUrl)).status(),200);}
  await fs.mkdir('qa-results/compiler/live',{recursive:true});
  for(const [width,height] of [[390,844],[1440,900]]){
   await page.setViewportSize({width,height});await page.goto(base+'/#subjects');await page.locator('[data-subject=cd]').click();await page.locator('.unit-banner').waitFor();
   await page.goto(base+'/#roadmap');await page.locator('[data-unit="0"]').click();await page.locator('[data-lesson="0"]').click();await finishJourney(page);await page.locator('.challenge-content').waitFor();
   assert.ok(await page.locator('dialog').evaluate(el=>el.scrollWidth<=innerWidth+1));await page.screenshot({path:`qa-results/compiler/live/first-lesson-${width}.png`});
   await page.locator('[data-action=exit]').click();await page.locator('[data-action=leave]').click();
   await page.goto(base+'/#roadmap');await page.locator('[data-unit="9"]').click();await page.locator('[data-lesson="155"]').click();await page.locator('.lesson-intro').waitFor();
   assert.equal(await page.locator('.lesson-intro h1').innerText(),course.lessons[155].title);await page.locator('[data-action=exit]').click();await page.locator('[data-action=leave]').click();
   await page.goto(base+'/#roadmap');await page.locator('[data-unit="9"]').click();await page.locator('[data-compiler-unit="9"]').click();await page.locator('.compiler-workshop').waitFor();await page.locator('[data-lab-next]').click();assert.match(await page.locator('[data-lab-position]').innerText(),/^2 /);await page.locator('[data-action=finish]').click();
  }
  await page.goto(base+'/#podcasts');await page.locator('#podcast-course').selectOption('cd');assert.equal(await page.locator('[data-podcast-id]').count(),10);await page.locator('[data-podcast-id="cd:0"]').click();
  await page.waitForFunction(()=>Number(document.querySelector('[data-podcast-seek]')?.value)>.2);await page.locator('#podcast-player [data-podcast-action=toggle][aria-label="Pause podcast"]').click();
  const session=await(await context.request.get(base+'/api/account/session')).json(),progress=JSON.parse(session.data['cd-quest-v1']||'{"xp":0,"completed":[]}');assert.equal(progress.xp,0);assert.deepEqual(progress.completed,[]);
  assert.deepEqual(errors,[]);console.log('Live Compiler Design passed: published subject, 156 ready lessons, 624 exercises, 10 optional workshops, 10 ready podcasts, real first-lesson teaching and last-section access, mobile/desktop layouts, playback and unchanged progress.');
 }finally{if(created)assert.equal((await context.request.post(base+'/api/account/delete',{headers,data:{username,password}})).status(),200);await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
