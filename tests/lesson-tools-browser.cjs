const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let browser;
 try{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:320,height:740},reducedMotion:'reduce'});
  assert.equal((await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'visual_browser',displayName:'Visual Learner',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(base);await page.locator('.subject-picker').waitFor();
  const audit=await page.evaluate(async()=>{
   const {topicDiagram}=await import('/lesson-visuals.js');let count=0;const rendered=new Map();
   for(const subject of ['coa','dl','c','ds','aptitude','algo']){const {lessons}=await import(`/courses/${subject}/lessons.js`);for(const lesson of lessons){const html=topicDiagram(lesson,subject);if(!html.includes('figcaption')||html.includes('undefined'))throw Error(`${subject}/${lesson.id}`);const template=document.createElement('template');template.innerHTML=html;rendered.set(template.content.querySelector('figure').dataset.topicVisual,html);count++;}}
   return {count,visuals:[...rendered.values()]};
  });assert.equal(audit.count,1308);
  await page.locator('[data-lesson="0"]').click();await page.locator('.topic-foundation .topic-visual').waitFor();
  // Render every diagram family at 320px and exercise keyboard-adjustable ranges.
  for(const html of audit.visuals){await page.evaluate(html=>document.querySelector('.lesson-intro').innerHTML=html,html);const control=page.locator('[data-visual-control]').first();if(await control.count()){await control.focus();await page.keyboard.press('ArrowRight');}assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth>innerWidth),false);}
  await page.locator('[data-action="exit"]').click();await page.locator('[data-action="leave"]').click();
  await page.locator('.subject-picker').click();await page.locator('[data-subject="aptitude"]').click();await page.locator('[data-lesson="0"]').click();
  assert.equal(await page.locator('.teaching-process').count(),1);
  const process=page.locator('.teaching-process');await process.locator('[data-teaching-next]').click();assert.match(await process.locator('[role="status"]').innerText(),/Step 2/);
  await page.locator('[data-open-calculator]').click();await page.locator('.calculator-panel').waitFor();
  await page.keyboard.type('(200*25%)+3');await page.keyboard.press('Enter');assert.equal(await page.locator('.calculator-display').innerText(),'53');
  await page.locator('[data-calculator-key="clear"]').click();await page.keyboard.type('1/0');await page.keyboard.press('=');assert.match(await page.locator('.calculator-message').innerText(),/divide by zero/);
  await page.locator('[data-calculator-key="clear"]').click();await page.locator('[data-calculator-key="9"]').click();await page.locator('[data-calculator-key="sqrt"]').click();assert.equal(await page.locator('.calculator-display').innerText(),'3');
  assert.equal(await page.evaluate(()=>document.querySelector('.calculator-panel').scrollWidth>innerWidth),false);
  await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement.closest('.calculator-panel')!==null),true);
  fs.mkdirSync('qa-results',{recursive:true});await page.screenshot({path:'qa-results/calculator-mobile.png'});
  await page.keyboard.press('Escape');assert.equal(await page.locator('.calculator-panel').count(),0);assert.equal(await page.locator('.lesson-intro').count(),1);assert.equal(await page.locator('[data-open-calculator]').evaluate(el=>el===document.activeElement),true);
  // Numeric answer remains unchanged and Enter in the calculator never grades a puzzle.
  await page.locator('[data-action="begin"]').click();
  const {lessons}=await import('../courses/aptitude/content/lessons.js');let index=0;
  while(await page.locator('#number-answer').count()===0){const q=lessons[0].questions[index++];await page.locator(`[data-choice="${q.answer}"]`).click();await page.locator('[data-action="check-answer"]').click();await page.locator('[data-action="next-question"]').click();}
  await page.locator('#number-answer').fill('123');await page.locator('[data-open-calculator]').click();await page.locator('[data-calculator-key="clear"]').click();await page.keyboard.type('6*7');await page.keyboard.press('=');await page.keyboard.press('Control+Enter');assert.equal(await page.locator('.calculator-display').innerText(),'42');await page.keyboard.press('Escape');assert.equal(await page.locator('#number-answer').inputValue(),'123');assert.equal(await page.locator('.answer-footer.incorrect').count(),0);
  for(const [width,height,theme] of [[320,568,'light'],[390,844,'dark'],[740,320,'dark'],[1440,900,'light']]){await page.setViewportSize({width,height});await page.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);await page.locator('[data-open-calculator]').click();const panel=page.locator('.calculator-panel');assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth>innerWidth),false);await panel.locator('[data-calculator-key="="]').scrollIntoViewIfNeeded();await panel.locator('[data-calculator-key="="]').click();await page.keyboard.press('Escape');}
  assert.deepEqual(errors,[]);console.log(`Passed: ${audit.count} lesson diagrams, all ${audit.visuals.length} visual families at 320px, interactive controls, teaching steps, calculator touch/keyboard/errors/focus/answer preservation and phone/landscape/desktop layouts.`);
 }finally{if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(e=>{console.error(e);process.exitCode=1;});
