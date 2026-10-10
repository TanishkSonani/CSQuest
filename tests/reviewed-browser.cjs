const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const {reviewedLessons}=await import(pathToFileURL(path.join(process.cwd(),'courses/dl/content/reviewed-lessons.js')).href);
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',args:['--disable-gpu']});
 try{
  const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:4173');
  async function open(id){
   await page.evaluate(id=>{localStorage.clear();localStorage.setItem('csquest-subject','dl');localStorage.setItem('csquest-theme','dark');localStorage.setItem('dl-quest-v1',JSON.stringify({version:1,xp:0,completed:Array.from({length:id},(_,i)=>i),mistakes:[],settings:{sound:false}}));},id);
   await page.goto('http://127.0.0.1:4173/#learn');
   await page.reload();
   await page.waitForFunction(()=>document.querySelector('.course-label')?.textContent.includes('DIGITAL LOGIC'));
   const unit=id>=66?1:0;
   await page.locator('a[href="#roadmap"]').last().click();await page.locator(`[data-unit="${unit}"]`).click();
   await page.locator(`[data-lesson="${id}"]`).click();
   assert.equal(await page.locator('.lecture-teaching li').count(),3);
   assert.equal(await page.locator('.lesson-intro h1').innerText(),reviewedLessons.find(l=>l.id===id).title);
   assert.ok(await page.locator('.lecture-teaching small').innerText().then(s=>/[1-9] transcript passages/.test(s)));
   assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth<=innerWidth),true);
  }
  await open(0);await page.screenshot({path:'qa-results/dl-teaching-dark-mobile.png',fullPage:true});
  await page.locator('[data-action="reveal-coach"]').click();assert.ok(await page.locator('.coach-answer').isVisible());
  await page.locator('[data-action="begin"]').click();
  const first=reviewedLessons.find(l=>l.id===0).questions[0];
  for(let i=0;i<4;i++)await page.locator(`[data-truth-row="${i}"][data-truth-value="${first.answer[i]^1}"]`).click();
  await page.locator('[data-action="check-answer"]').click();await page.waitForSelector('.answer-footer.incorrect');
  assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('dl-quest-v1')).mistakes.length),1);
  await page.locator('[data-action="exit"]').click();await page.locator('[data-action="leave"]').click();
  await page.locator('a[href="#errors"]').last().click();await page.waitForSelector('.error-card');
  assert.ok((await page.locator('.error-card').innerText()).includes(first.prompt));
  for(const id of [42,102,108,114]){await open(id);await page.locator('.lesson-theme-toggle').click();assert.equal(await page.evaluate(()=>document.documentElement.dataset.theme),'light');await page.locator('[data-action="begin"]').click();const q=reviewedLessons.find(l=>l.id===id).questions[0];if(q.type==='kmap')for(const cell of q.answer)await page.locator(`[data-kmap-cell="${cell}"]`).click();else if(q.type==='number')await page.locator('#number-answer').fill(String(q.answer));else if(q.type==='choice')await page.locator(`[data-choice="${q.answer}"]`).click();else throw Error('Unexpected test question type '+q.type);await page.locator('[data-action="check-answer"]').click();await page.waitForSelector('.answer-footer.correct');await page.locator('[data-action="exit"]').click();await page.locator('[data-action="leave"]').click();}
  await page.locator('a[href="#roadmap"]').last().click();assert.match(await page.locator('.lesson-build-detail').innerText(),/lecture-specific levels/);
  assert.equal((await page.request.get('http://127.0.0.1:4173/courses/dl/reviewed-lessons.js')).status(),200);
  assert.deepEqual(errors,[]);fs.writeFileSync('qa-results/reviewed-lessons-report.json',JSON.stringify({passed:true,checks:['teaching steps','worked example reveal','mobile dark and light','wrong-answer practice history','K-map grading','sign-extension grading','BCD grading','Gray grading','source module serving','course build status'],errors},null,2));
  console.log('Lecture-specific browser checks passed.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
