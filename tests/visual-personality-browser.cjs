const {finishJourney}=require('./journey-helper.cjs');
const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs/promises');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',args:['--disable-gpu']});
 try{
 const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'no-preference'}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:4173');await page.waitForSelector('.unit-banner');
 const artwork=await page.request.get('http://127.0.0.1:4173/assets/avatars/characters-3d.png');assert.equal(artwork.status(),200);assert.equal(artwork.headers()['content-type'],'image/png');const bytes=await artwork.body();assert.equal(bytes.readUInt32BE(16),bytes.readUInt32BE(20));assert.equal(bytes[25],6);
 await fs.mkdir('qa-results',{recursive:true});await page.locator('.chest-3d').first().screenshot({path:'qa-results/chest-3d.png'});
 assert.equal(await page.locator('.sidebar [data-mascot-state=idle]').count(),1);
 assert.equal(await page.locator('.sidebar .byte-body').evaluate(el=>getComputedStyle(el).animationName),'byte-breathe');
 await page.locator('[data-action="continue"]').first().click();await page.waitForSelector('[data-mascot-state=welcome]');
 await page.locator('.lesson-intro .mascot').screenshot({path:'qa-results/byte-welcome.png'});
 assert.equal(await page.locator('.lesson-intro .byte-right-arm').evaluate(el=>getComputedStyle(el).animationName),'byte-wave');
 await finishJourney(page);await page.locator('[data-action="concept-hint"]').click();assert.equal(await page.locator('.concept-hint [data-mascot-state=thinking]').count(),1);
 await page.locator('[data-choice="1"]').click();await page.locator('[data-action="check-answer"]').click();await page.waitForSelector('.feedback [data-mascot-state=encouraging]');await page.locator('.feedback-symbol .mascot').screenshot({path:'qa-results/byte-encouragement.png'});
 await page.keyboard.press('Escape');await page.locator('[data-action="leave"]').click();
 await page.goto('http://127.0.0.1:4173/#account');await page.locator('[data-account="tab"][data-tab="register"]').click();
 assert.equal(await page.locator('.avatar-option:visible').count(),22);
 for(const width of [1440,390,320])for(const theme of ['light','dark']){
  await page.setViewportSize({width,height:1000});await page.evaluate(theme=>{localStorage.setItem('csquest-theme',theme);},theme);await page.reload();await page.waitForSelector('[data-account="tab"][data-tab="register"]');await page.locator('[data-account="tab"][data-tab="register"]').click();
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}/${theme}: gallery overflow`);
  await page.locator('.avatar-picker').screenshot({path:`qa-results/avatar-gallery-${width}-${theme}.png`});
 }
 await page.locator('[data-avatar-filter]').selectOption('clash');assert.equal(await page.locator('.avatar-option:visible').count(),4);
 await page.locator('.avatar-option:has(input[value=wizard])').click();assert.equal(await page.locator('input[value=wizard]').isChecked(),true);
 await page.locator('input[value=wizard]').focus();await page.keyboard.press('ArrowRight');assert.equal(await page.locator('input[value=goblin]').isChecked(),true);
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('http://127.0.0.1:4173/#learn');await page.locator('[data-action="resume-saved"]').click();await page.locator('[data-action="next-question"]').click();
 assert.equal(await page.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0);
 assert.deepEqual(errors,[]);console.log('3D avatar art and gallery, category filters, radio-keyboard selection, chest and context-aware mascot states passed across mobile and desktop themes.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
