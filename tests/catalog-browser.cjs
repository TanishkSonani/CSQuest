const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',args:['--disable-gpu']});
 try{
  const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:4173');
  const catalog=await (await page.request.get('http://127.0.0.1:4173/api/subjects')).json();
  // A saved planned subject must recover to a playable subject.
  const planned=catalog.filter(c=>c.status==='planned');
  if(planned.length){await page.evaluate(id=>{localStorage.setItem('csquest-subject',id);localStorage.setItem('csquest-theme','dark');},planned[0].id);await page.reload();}
  await page.waitForSelector('.unit-banner');
  assert.equal(await page.evaluate(()=>localStorage.getItem('csquest-subject')),catalog.find(c=>c.status==='available').id);
  await page.locator('a[href="#subjects"]').last().click();await page.waitForSelector('.subject-card');
  assert.equal(await page.locator('.subject-card').count(),catalog.length);
  assert.equal(await page.locator('.subject-card button:disabled').count(),planned.length);
  for(const theme of ['dark','light']){
   if(await page.evaluate(()=>document.documentElement.dataset.theme)!==theme)await page.locator('.topbar .theme-toggle').click();
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
   for(const course of planned){const card=page.locator('.subject-card').filter({has:page.locator('h2',{hasText:course.name})});assert.match(await card.innerText(),/COMING SOON/);assert.doesNotMatch(await card.innerText(),/\d+ levels|levels complete/);assert.equal(await card.locator('button').isDisabled(),true);}
   await page.screenshot({path:`qa-results/subject-catalog-${theme}-mobile.png`,fullPage:true});
   await page.reload();assert.equal(await page.evaluate(()=>document.documentElement.dataset.theme),theme);await page.waitForSelector('.subject-card');
  }
  assert.deepEqual(errors,[]);console.log('Subject catalog, planned-course gating, fallback selection, and mobile light/dark checks passed.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});
