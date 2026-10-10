const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',args:['--disable-gpu']});
 try{
  const {lessons}=await import(pathToFileURL(path.join(process.cwd(),'courses/dl/content/lessons.js')).href);
  const {units}=await import(pathToFileURL(path.join(process.cwd(),'courses/dl/content/curriculum.js')).href);
  const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'}),errors=[],checks=[];
  page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:4173');await page.waitForSelector('.unit-banner');
  const first=Number(process.argv[2]??67),last=Number(process.argv[3]??85);
  for(let lecture=first;lecture<=last;lecture++){
   const id=lecture*3,lesson=lessons.find(l=>l.id===id),q=lesson.questions[0],unit=units.find(u=>lecture>=u.range[0]&&lecture<=u.range[1]);
   await page.evaluate(id=>{localStorage.clear();localStorage.setItem('csquest-subject','dl');localStorage.setItem('csquest-theme','dark');localStorage.setItem('dl-quest-v1',JSON.stringify({version:1,xp:0,completed:Array.from({length:id},(_,i)=>i),mistakes:[],settings:{sound:false}}));},id);
   await page.goto('http://127.0.0.1:4173/#learn');await page.reload();await page.waitForFunction(()=>document.querySelector('.course-label')?.textContent.includes('DIGITAL LOGIC'));await page.waitForSelector('.path-node');
   await page.locator('a[href="#roadmap"]').last().click();await page.locator(`[data-unit="${unit.id}"]`).click();await page.locator(`[data-lesson="${id}"]`).click();
   assert.equal(await page.locator('.lecture-teaching li').count(),3);
   const card=page.locator('.worked-example');await card.waitFor();assert.ok((await card.innerText()).includes(q.prompt));
   await card.locator('[data-action="reveal-coach"]').click();assert.ok((await card.innerText()).includes(q.explanation));
   if(q.type==='truth')assert.equal(await card.locator('.coach-answer tbody tr').count(),q.rows.length);
   assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth<=innerWidth),true);
   await page.locator('.lesson-theme-toggle').click();assert.equal(await page.evaluate(()=>document.documentElement.dataset.theme),'light');
   if(lecture===71)await page.screenshot({path:'qa-results/jk-worked-example-light-mobile.png'});
   if(q.type==='truth'){
    await page.locator('[data-action="begin"]').click();await page.waitForSelector('.truth-table');
    assert.equal(await page.locator('.truth-row:not(.truth-heading)').count(),q.rows.length);
    assert.equal(await page.locator('.truth-heading').evaluate(el=>getComputedStyle(el).gridTemplateColumns.split(' ').length),q.labels.length+1);
    for(let row=0;row<q.rows.length;row++)await page.locator(`[data-truth-row="${row}"][data-truth-value="${row===0?1-q.answer[row]:q.answer[row]}"]`).click();
    await page.locator('[data-action="check-answer"]').click();await page.waitForSelector('.answer-footer.incorrect');
    assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth<=innerWidth),true);
    if(lecture===68){await page.locator('.lesson-theme-toggle').click();await page.screenshot({path:'qa-results/sr-state-table-dark-mobile.png'});}
    await page.locator('[data-action="exit"]').click();await page.locator('[data-action="leave"]').click();await page.locator('a[href="#errors"]').last().click();
    await page.locator(`[data-retry-key="${id}:0"]`).click();await page.locator('[data-action="begin"]').click();
    for(let row=0;row<q.rows.length;row++)await page.locator(`[data-truth-row="${row}"][data-truth-value="${q.answer[row]}"]`).click();
    await page.locator('[data-action="check-answer"]').click();await page.waitForSelector('.answer-footer.correct');
   }else{
    await page.locator('[data-action="begin"]').click();
    if(q.type==='match')for(let i=0;i<q.pairs.length;i++){await page.locator(`[data-match-left="${i}"]`).click();await page.locator(`[data-match-right="${i}"]`).click();}
    else if(q.type==='order')for(const item of q.items)await page.getByRole('button',{name:item,exact:true}).click();
    else if(q.type==='number')await page.locator('#number-answer').fill(String(q.answer));
    else if(q.type==='choice')await page.locator(`[data-choice="${q.answer}"]`).click();
    else throw Error('Unsupported browser sample '+q.type);
    await page.locator('[data-action="check-answer"]').click();await page.waitForSelector('.answer-footer.correct');
    assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth<=innerWidth),true);
    if(lecture===97){await page.locator('.lesson-theme-toggle').click();await page.screenshot({path:'qa-results/johnson-sequence-dark-mobile.png'});}
   }
   checks.push({lecture,id,type:q.type,workedExample:true,lightAndDark:true,wrongAnswerAndRecall:q.type==='truth'});
  }
  assert.deepEqual(errors,[]);fs.writeFileSync('qa-results/flipflop-browser-report.json',JSON.stringify({passed:true,checks,errors},null,2));
  console.log(`All ${checks.length} topic opening cards passed mobile theme checks; state-table wrong answers and recalls passed.`);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
