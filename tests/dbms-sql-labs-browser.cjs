const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs'),{units}=await import('../courses/dbms/content/curriculum.js');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});let browser;
 try{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:360,height:780},reducedMotion:'reduce'});
  assert.equal((await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'dbms_sql_browser',displayName:'SQL Learner',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(base);
  await page.locator('.subject-picker').click();await page.locator('[data-subject="dbms"]').click();await page.locator('.unit-banner').waitFor();
  await page.locator('[data-action="units"]').click();await page.locator('.unit-choice[data-unit="0"]').click();
  await page.locator('.optional-coding-card').scrollIntoViewIfNeeded();assert.match(await page.locator('.optional-coding-card').innerText(),/OPTIONAL SQL LAB/);
  await page.locator('.optional-coding-card [data-ds-coding-unit="0"]').click();const root=page.locator('[data-ds-coding]');await root.waitFor();assert.match(await root.locator('.page-eyebrow').innerText(),/OPTIONAL SQL LAB/);
  for(let i=0;i<units[0].sqlLab.answer.length;i++){await root.locator(`[data-program-slot="${i}"]`).click();await root.locator('.c-token-bank').getByRole('button',{name:units[0].sqlLab.answer[i],exact:true}).click();}
  await root.locator('[data-coding-action="check"]').click();assert.equal(await root.locator('.ds-code-feedback.correct').count(),1);assert.match(await root.locator('.ds-code-feedback').innerText(),/query matches/);
  assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth>innerWidth),false,'SQL lab fits a phone viewport');
  await root.locator('[data-coding-action="next"]').click();assert.equal(await page.locator('.unit-banner h2').innerText(),units[1].title);assert.deepEqual(errors,[]);
  console.log('Passed: DBMS unit SQL lab discovery, mobile interaction, guided query check, saved optional flow and continue-to-next-unit without lab completion.');
 }finally{if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(error=>{console.error(error);process.exitCode=1;});
