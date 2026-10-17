const {finishJourney}=require('./journey-helper.cjs');
const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',args:['--disable-gpu']});
 try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:4173');await page.waitForSelector('.next-step');
 await page.locator('[data-action="continue"]').first().click();await finishJourney(page);
 await page.keyboard.press('2');await page.keyboard.press('Enter');await page.waitForSelector('.correct-solution');
 await page.reload();await page.locator('[data-action="resume-saved"]').waitFor();
 assert.equal(await page.locator('[data-action="resume-saved"]').count(),1);
 await page.locator('[data-action="resume-saved"]').click();
 assert.equal(await page.locator('.correct-solution').count(),1);
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('coa-quest-v1')).xp),0);
 await page.locator('[data-action="next-question"]').click();
 await page.locator('[data-match-left="0"]').click();await page.locator('[data-match-right="0"]').click();
 await page.reload();await page.locator('[data-action="resume-saved"]').click();
 assert.equal(await page.locator('[data-match-left="0"]').getAttribute('class').then(x=>x.includes('paired')),true);
 await page.locator('[data-action="concept-hint"]').click();assert.equal(await page.locator('.concept-hint').count(),1);
 await page.keyboard.press('Escape');await page.locator('[data-action="leave"]').click();
 assert.equal(await page.locator('[data-action="resume-saved"]').count(),0);
 await page.goto('http://127.0.0.1:4173/#settings');await page.locator('#main [data-goal="40"]').click();
 await page.locator('[data-action="motion"]').click();assert.equal(await page.evaluate(()=>document.documentElement.dataset.motion),'reduced');
 await page.goto('http://127.0.0.1:4173/#subjects');await page.waitForSelector('#subject-search');
 await page.locator('[data-catalog-filter="available"]').click();assert.equal(await page.locator('[data-catalog-subject]:visible').count(),2);
 await page.locator('#subject-search').fill('nonexistent');assert.equal(await page.locator('#no-subjects').isVisible(),true);
 await page.locator('#subject-search').fill('');await page.locator('[data-subject="dl"]').click();
 await page.waitForSelector('.unit-banner');assert.equal(await page.locator('.rightbar .daily-card [role="progressbar"]').getAttribute('aria-valuemax'),'40');
 await page.goto('http://127.0.0.1:4173/#practice');await page.locator('[data-practice-mode="quick"]').click();
 assert.match(await page.locator('.lesson-intro').innerText(),/2/);
 await finishJourney(page);
 for(let i=0;i<2;i++){
 const state=await page.evaluate(()=>JSON.parse(localStorage.getItem('csquest-drafts-dl'))[0]);const q=JSON.parse(state.queue[state.index].signature);
 if(q.type==='choice')await page.locator(`[data-choice="${q.answer}"]`).click();
 else if(q.type==='number')await page.locator('#number-answer').fill(String(q.answer));
 else if(q.type==='truth')for(let j=0;j<q.answer.length;j++)await page.locator(`[data-truth-row="${j}"][data-truth-value="${q.answer[j]}"]`).click();
 else throw Error('Unhandled quick exercise '+q.type);
 await page.locator('[data-action="check-answer"]').click();await page.waitForSelector('.answer-footer.correct');await page.locator('[data-action="next-question"]').click();
 }
 await page.waitForSelector('.celebration');assert.equal(await page.locator('.earned-notice').count(),1);
 const p=await page.evaluate(()=>JSON.parse(localStorage.getItem('dl-quest-v1')));assert.equal(p.xp,40);assert.equal(Object.values(p.dailyStats)[0].questions,2);assert.equal(Object.keys(p.reviews).length,2);
 await page.locator('[data-action="view-progress"]').click();await page.waitForSelector('.badge-grid');
 assert.equal(await page.locator('#main .daily-card [role="progressbar"]').getAttribute('aria-valuenow'),'40');
 fs.mkdirSync('qa-results',{recursive:true});
 for(const width of [1440,390,320]){await page.setViewportSize({width,height:1000});for(const theme of ['light','dark']){
 await page.evaluate(theme=>{localStorage.setItem('csquest-theme',theme);},theme);await page.reload();await page.waitForSelector('.badge-grid');
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}/${theme}: page overflow`);
 await page.screenshot({path:`qa-results/experience-${width}-${theme}.png`});
 }}
 await page.evaluate(()=>{localStorage.setItem('csquest-subject','coa');localStorage.setItem('coa-quest-v1',JSON.stringify({version:1,completed:Array.from({length:18},(_,i)=>i),settings:{sound:false}}));});
 await page.goto('http://127.0.0.1:4173/#learn');await page.reload();await page.waitForSelector('[data-lesson="18"]');assert.equal(await page.locator('.path-node.current').getAttribute('data-lesson'),'18');
 await page.locator('[data-action="continue"]').first().click();await finishJourney(page);assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('csquest-drafts-coa'))[0].lessonId),18);assert.deepEqual(errors,[]);console.log('Saved rounds, keyboard controls, targeted practice, goals, milestones, catalog and responsive themes passed.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
