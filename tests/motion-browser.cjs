const {finishJourney}=require('./journey-helper.cjs');
const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',args:['--disable-gpu']});
 try{
 const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'no-preference'}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:4173');await page.waitForSelector('.next-step');
 await page.locator('[data-action="continue"]').first().click();await page.waitForSelector('.lesson-intro');
 await finishJourney(page);
 await page.waitForFunction(()=>document.querySelector('.challenge-content')?.getAnimations().length>0);
 await page.locator('[data-choice="0"]').click();
 assert.equal(await page.locator('.challenge-content').evaluate(el=>el.getAnimations().length),0,'Selecting an answer must not replay the question entrance');
 assert.ok(await page.locator('[data-choice="0"]').evaluate(el=>el.getAnimations().length>0));
 await page.locator('[data-action="check-answer"]').click();
 await page.waitForSelector('.answer-footer.correct');
 assert.ok(await page.locator('.feedback-symbol').evaluate(el=>el.getAnimations().length>0));
 assert.ok(await page.locator('.lesson-progress>div').evaluate(el=>el.getAnimations().length>0));
 await page.locator('[data-action="next-question"]').click();
 const pairs=await page.locator('[data-match-left]').count();
 for(let i=0;i<pairs;i++){await page.locator(`[data-match-left="${i}"]`).click();await page.locator(`[data-match-right="${i}"]`).click();}
 await page.locator('[data-action="check-answer"]').click();await page.waitForSelector('.answer-footer.correct');
 await page.locator('[data-action="next-question"]').click();
 await page.locator('[data-action="concept-hint"]').click();
 assert.ok(await page.locator('.concept-hint').evaluate(el=>el.getAnimations().length>0));
 await page.reload();await page.locator('.unit-banner').waitFor();
 await page.goto('http://127.0.0.1:4173/#settings');await page.locator('[data-action="motion"]').click();
 assert.equal(await page.evaluate(()=>document.documentElement.dataset.motion),'reduced');
 assert.equal(await page.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0);
 await page.locator('a[href="#learn"]').last().click();await page.locator('[data-action="resume-saved"]').click();
 assert.equal(await page.locator('.challenge-content').evaluate(el=>el.getAnimations().length),0);
 await page.locator('[data-choice="1"]').click();await page.locator('[data-action="check-answer"]').click();
 assert.equal(await page.locator('.feedback-symbol').evaluate(el=>el.getAnimations().length),0);
 await page.reload();await page.locator('.unit-banner').waitFor();
 await page.goto('http://127.0.0.1:4173/#settings');await page.locator('[data-action="motion"]').click();
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.locator('a[href="#learn"]').last().click();await page.locator('[data-action="resume-saved"]').click();
 assert.equal(await page.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0,'OS reduced motion overrides normal in-app motion');
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 assert.deepEqual(errors,[]);console.log('Motion feedback, stable puzzle renders, progress, panels and both reduced-motion controls passed.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});
