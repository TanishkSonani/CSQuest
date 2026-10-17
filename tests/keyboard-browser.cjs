const {finishJourney}=require('./journey-helper.cjs');
const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',args:['--disable-gpu']});
 try{
 const page=await browser.newPage({reducedMotion:'reduce'}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const {lessons}=await import(pathToFileURL(path.join(process.cwd(),'courses/coa/content/lessons.js')).href);
 await page.goto('http://127.0.0.1:4173');await page.waitForSelector('.unit-banner');
 await page.evaluate(()=>localStorage.setItem('coa-quest-v1',JSON.stringify({version:1,xp:0,completed:[0],settings:{sound:false}})));await page.reload();await page.waitForSelector('[data-lesson="1"].current');
 await page.locator('[data-lesson="1"]').click();await finishJourney(page);
 for(let i=0;i<lessons[1].questions[0].pairs.length;i++){await page.locator(`[data-match-left="${i}"]`).focus();await page.keyboard.press('Enter');await page.locator(`[data-match-right="${i}"]`).focus();await page.keyboard.press('Enter');}
 await page.keyboard.press('Control+Enter');await page.waitForSelector('.answer-footer.correct');await page.keyboard.press('Enter');
 await page.keyboard.press(String(lessons[1].questions[1].answer+1));await page.keyboard.press('Enter');await page.waitForSelector('.answer-footer.correct');await page.keyboard.press('Enter');
 for(let i=1;i<lessons[1].questions[2].opcode;i++)await page.locator('[data-bits="1"]').click();
 await page.keyboard.press('Control+Enter');await page.waitForSelector('.answer-footer.correct');await page.keyboard.press('Enter');
 await page.locator('#number-answer').fill(String(lessons[1].questions[3].answer));await page.locator('#number-answer').press('Enter');await page.waitForSelector('.answer-footer.correct');await page.keyboard.press('Enter');
 await page.waitForSelector('.celebration');assert.match(await page.locator('.result-stats').innerText(),/100%/);await page.locator('[data-action="finish"]').click();
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('coa-quest-v1')).xp),60);
 await page.evaluate(()=>{const p=JSON.parse(localStorage.getItem('coa-quest-v1'));p.completed=Array.from({length:19},(_,i)=>i);localStorage.setItem('coa-quest-v1',JSON.stringify(p));});await page.reload();await page.waitForSelector('[data-lesson="19"].current');
 await page.locator('[data-lesson="19"]').click();await finishJourney(page);await page.locator('#hex-answer').fill(lessons[19].questions[0].answer);await page.locator('#hex-answer').press('Enter');await page.waitForSelector('.answer-footer.correct');
 await page.keyboard.press('Escape');await page.locator('[data-action="leave"]').focus();await page.keyboard.press('Enter');await page.waitForSelector('.unit-banner');assert.equal(await page.locator('[data-action="resume-saved"]').count(),0);
 assert.deepEqual(errors,[]);console.log('Enter checks numeric and hex inputs, number keys choose answers, Ctrl+Enter submits puzzles, and native Enter activates puzzle and pause controls.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
