const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs'),{lessons}=await import('../courses/c/content/lessons.js'),{units}=await import('../courses/c/content/curriculum.js');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let browser;
 try{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),headers={'X-CSQuest-Request':'1'};
  assert.equal((await context.request.post(base+'/api/account/register',{headers,data:{username:'c_browser',displayName:'C Learner',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base);await page.locator('.subject-picker').click();
  const card=page.locator('[data-catalog-subject="c"]');await card.locator('[data-subject="c"]:enabled').waitFor();assert.match(await card.innerText(),/204 levels/);
  assert.equal(await page.locator('[data-catalog-subject]').nth(2).getAttribute('data-catalog-subject'),'c');
  await card.locator('[data-subject="c"]').click();await page.locator('[data-lesson="0"]:not(.locked)').waitFor();fs.mkdirSync('qa-results',{recursive:true});
  const models=await page.evaluate(async()=>{const {cModel}=await import('/c-labs.js');return {pointer:cModel('pointer'),recursion:cModel('recursion'),heap:cModel('heap'),bits:cModel('bits',255),matrix:cModel('matrix',1,2)};});
  assert.match(models.pointer.steps[2][2],/modifies x/);assert.match(models.recursion.steps.at(-1)[2],/6/);assert.match(models.heap.steps[2][2],/must not be read/);assert.match(models.bits.steps[0][2],/signed interpretation -1/);assert.match(models.matrix.steps[0][2],/element is 6/);
  async function open(id){
   await page.evaluate(async id=>{const {store,flushAccount}=await import('/account-client.js');store.setItem('csquest-drafts-c','[]');store.setItem('c-quest-v1',JSON.stringify({version:1,xp:0,completed:Array.from({length:id},(_,i)=>i),settings:{sound:false}}));await flushAccount();},id);
   await page.reload();await page.locator(`[data-lesson="${id}"]:not(.locked)`).click();await page.locator('.c-lab').waitFor();
  }
  async function exit(){await page.locator('[data-action="exit"]').click();await page.locator('[data-action="leave"]').click();}
  const seen=new Set();
  for(const lesson of lessons){if(seen.has(lesson.cLab))continue;seen.add(lesson.cLab);await open(lesson.id);
   const root=page.locator('.c-lab'),controls=root.locator('[data-c-control]');
   if(await controls.count()){const before=await root.locator('.c-insight').innerText();await controls.first().focus();await page.keyboard.press('ArrowRight');assert.notEqual(await root.locator('.c-insight').innerText(),before);}
   else if(lesson.cLab==='string'){await root.locator('[data-c-word]').fill('robot');assert.match(await root.locator('.c-insight').innerText(),/length 5; array size 6/);}
   else {const before=await root.locator('.c-art').innerHTML(),count=await root.locator('.c-step-count').innerText();await root.locator('[data-c-next]').click();assert.notEqual(await root.locator('.c-art').innerHTML(),before);await root.locator('[data-c-back]').click();assert.equal(await root.locator('.c-step-count').innerText(),count);}
   if(lesson.cLab==='bits'){await root.locator('[data-c-control="a"]').fill('0');await root.locator('[data-c-control="a"]').dispatchEvent('input');await root.locator('[data-c-bit="7"]').click();assert.match(await root.locator('.c-insight').innerText(),/signed interpretation -128/);}
   if(lesson.cLab==='pointer'){await root.locator('[data-c-play]').click();await page.waitForTimeout(1400);assert.match(await root.locator('.c-step-count').innerText(),/2 \/ 5/);await root.locator('[data-c-play]').click();}
   assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth>innerWidth),false);
   if(['pointer','recursion','heap','matrix','bits'].includes(lesson.cLab))await root.screenshot({path:`qa-results/c-lab-${lesson.cLab}.png`});await exit();
  }
  assert.equal(seen.size,16);
  async function answer(q){
   if(q.type==='number'){assert.equal(await page.locator('.c-code-card').count(),q.code?1:0);if(q.code)assert.equal(await page.locator('.c-code-card code').innerText(),(q.setup?q.setup+'\n\n':'')+q.code);await page.locator('#number-answer').fill(String(q.answer));}
   else if(q.type==='choice')await page.locator(`[data-choice="${q.answer}"]`).click();
   else if(q.type==='match')for(let i=0;i<q.pairs.length;i++){await page.locator(`[data-match-left="${i}"]`).click();await page.locator(`[data-match-right="${i}"]`).click();}
   else if(q.type==='order')for(const item of q.items)await page.locator('[data-order-item]').filter({hasText:item}).click();
   else if(q.type==='c-program')for(let i=0;i<q.answer.length;i++){await page.locator(`[data-program-slot="${i}"]`).click();await page.locator('.c-token-bank').getByRole('button',{name:q.answer[i],exact:true}).click();}
   await page.locator('[data-action="check-answer"]').click();await page.locator('.answer-footer.correct').waitFor();await page.locator('[data-action="next-question"]').click();
  }
  // First-round retry, completion, XP and next-lesson navigation.
  await open(0);await page.locator('[data-action="begin"]').click();await page.locator(`[data-choice="${(lessons[0].questions[0].answer+1)%3}"]`).click();await page.locator('[data-action="check-answer"]').click();await page.locator('.answer-footer.incorrect').waitFor();await page.locator('[data-action="next-question"]').click();
  for(const q of [...lessons[0].questions.slice(1),lessons[0].questions[0]])await answer(q);
  await page.locator('.celebration').waitFor();await page.locator('[data-action="next-lesson"]').click();await page.locator('.c-lab').waitFor();await exit();
  const progress=await page.evaluate(async()=>{const {store}=await import('/account-client.js');return JSON.parse(store.getItem('c-quest-v1'));});assert.ok(progress.completed.includes(0));assert.ok(progress.xp>0);
  // Build a complete program by tapping and dragging, with correction and reload.
  await open(2);await page.locator('[data-action="begin"]').click();for(const q of lessons[2].questions.slice(0,3))await answer(q);
  const builder=lessons[2].questions[3];assert.equal(await page.locator('[data-action="check-answer"]').isDisabled(),true);
  await page.locator('.c-token-bank').getByRole('button',{name:builder.answer[0],exact:true}).dragTo(page.locator('[data-program-slot="0"]'));
  assert.equal(await page.locator('[data-program-slot="0"]').innerText(),builder.answer[0]);
  await page.reload();await page.locator('[data-lesson="2"]').click();assert.equal(await page.locator('[data-program-slot="0"]').innerText(),builder.answer[0]);
  await page.setViewportSize({width:320,height:900});assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth>innerWidth),false);await page.locator('section.c-program').screenshot({path:'qa-results/c-program-mobile.png'});await page.setViewportSize({width:390,height:844});
  await page.locator('[data-program-slot="0"]').click();await page.locator('[data-program-clear]').click();assert.match(await page.locator('[data-program-slot="0"]').innerText(),/blank 1/);
  for(let i=0;i<builder.answer.length;i++){await page.locator(`[data-program-slot="${i}"]`).click();await page.locator('.c-token-bank').getByRole('button',{name:i===0?builder.tokens.find(token=>token!==builder.answer[0]):builder.answer[i],exact:true}).click();}
  await page.locator('[data-action="check-answer"]').click();await page.locator('.answer-footer.incorrect').waitFor();assert.equal(await page.locator('[data-program-slot="0"]').isDisabled(),true);await page.locator('[data-action="next-question"]').click();
  await answer(builder);await page.locator('.celebration').waitFor();await page.locator('[data-action="finish"]').click();
  // An entered code answer survives reload without exposing its solution.
  await open(1);await page.locator('[data-action="begin"]').click();await answer(lessons[1].questions[0]);await page.locator('#number-answer').fill(String(lessons[1].questions[1].answer));await page.reload();await page.locator('[data-lesson="1"]').click();assert.equal(await page.locator('#number-answer').inputValue(),String(lessons[1].questions[1].answer));await exit();
  for(const u of units.slice(0,-1)){const id=(u.range[1]+1)*3-1;await open(id);await page.locator('[data-action="begin"]').click();for(const q of lessons[id].questions)await answer(q);await page.locator('[data-action="next-lesson"]').click();assert.equal(await page.locator('.lesson-intro h1').innerText(),lessons[id+1].title);await exit();}
  for(const [width,theme] of [[1440,'light'],[390,'dark'],[320,'light']]){await page.setViewportSize({width,height:900});await page.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);await page.locator('[data-lesson="183"]').click();await page.locator('.c-lab').waitFor();assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth>innerWidth),false);await page.screenshot({path:`qa-results/c-${width}-${theme}.png`});await exit();}
  assert.deepEqual(errors,[]);console.log('C passed: all 16 labs, keyboard and playback, code puzzles/retries, saved answers/XP, all six unit transitions, mobile and themes.');
 }finally{if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(error=>{console.error(error);process.exitCode=1;});
