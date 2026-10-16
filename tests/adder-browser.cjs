const {finishJourney}=require('./journey-helper.cjs');
const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',args:['--disable-gpu']});
 try{
  const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:4173');
  await page.evaluate(()=>{localStorage.clear();localStorage.setItem('csquest-subject','dl');localStorage.setItem('csquest-theme','dark');localStorage.setItem('dl-quest-v1',JSON.stringify({version:1,xp:0,completed:Array.from({length:162},(_,i)=>i),mistakes:[],settings:{sound:false}}));});
  await page.reload();await page.waitForSelector('.path-node');await page.locator('a[href="#roadmap"]').last().click();
  await page.locator('[data-unit="3"]').click();await page.locator('[data-lesson="162"]').click();
  await page.locator('[data-action="reveal-coach"]').click();assert.equal(await page.locator('.coach-answer tbody tr').count(),8);
  await finishJourney(page);await page.waitForSelector('.truth-table');
  assert.equal(await page.locator('.truth-heading b').count(),4);assert.equal(await page.locator('.truth-row:not(.truth-heading)').count(),8);
  const columns=await page.locator('.truth-heading').evaluate(e=>getComputedStyle(e).gridTemplateColumns.split(' ').length);assert.equal(columns,4);
  const parity=[0,1,1,0,1,0,0,1];
  for(let i=0;i<8;i++)await page.locator(`[data-truth-row="${i}"][data-truth-value="${i===0?1:parity[i]}"]`).click();
  await page.locator('[data-action="check-answer"]').click();await page.waitForSelector('.answer-footer.incorrect');
  assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth<=innerWidth),true);
  await page.screenshot({path:'qa-results/full-adder-dark-mobile.png'});await page.locator('.lesson-theme-toggle').click();
  assert.equal(await page.evaluate(()=>document.documentElement.dataset.theme),'light');await page.screenshot({path:'qa-results/full-adder-light-mobile.png'});
  await page.locator('[data-action="exit"]').click();await page.locator('[data-action="leave"]').click();await page.locator('a[href="#errors"]').last().click();
  await page.locator('[data-retry-key="162:0"]').click();await finishJourney(page);
  for(let i=0;i<8;i++)await page.locator(`[data-truth-row="${i}"][data-truth-value="${parity[i]}"]`).click();
  await page.locator('[data-action="check-answer"]').click();await page.waitForSelector('.answer-footer.correct');assert.deepEqual(errors,[]);
  fs.writeFileSync('qa-results/adder-browser-report.json',JSON.stringify({passed:true,checks:['eight-row three-input table','four aligned columns','complete worked example','wrong row rejected','practice error saved','correct recall accepted','mobile dark/light layout'],errors},null,2));
  console.log('Full-adder table, mobile themes, and practice-error recall passed.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
