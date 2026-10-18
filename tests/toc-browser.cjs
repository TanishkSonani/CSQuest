const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
const {finishJourney}=require('./journey-helper.cjs');
(async()=>{
 const {createServer}=await import('../src/platform/server.mjs'),{testStore}=await import('./database-helper.mjs');
 const fixture=await testStore({courses:true}),server=createServer({store:fixture.store});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const base=`http://127.0.0.1:${server.address().port}`,output='qa-results/toc';fs.mkdirSync(output,{recursive:true});let browser;
 try{
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),page=await context.newPage(),errors=[],requests=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('/api/account/session'))requests.push(`${r.status()} ${r.url()}`);});
  assert.equal((await context.request.post(base+'/api/account/register',{headers:{'X-CSQuest-Request':'1'},data:{username:'toc_audit',displayName:'TOC Audit',avatar:'chip',password:'a memorable test passphrase'}})).status(),200);
  await page.goto(base+'/#subjects');await page.locator('[data-subject=toc]').click();await page.locator('.unit-banner').waitFor();
  const course=await(await context.request.get(base+'/api/course-content?subject=toc')).json();assert.equal(course.lessons.length,438);
  const layouts=[];
  for(const theme of (process.argv.includes('--journeys-only')||process.argv.includes('--workshops-only')?[]:['light','dark']))for(const [width,height] of [[320,568],[390,844],[430,932],[768,1024],[1366,768],[1440,900]]){
   await page.setViewportSize({width,height});
   const result=await page.evaluate(async({lessons,theme,allFrames})=>{
    document.documentElement.dataset.theme=theme;
    const {lessonScene,frameMarkup}=await import('/concept-scenes.js'),{tocGiven}=await import('/toc-art.js');
    const host=document.createElement('div');host.style.cssText='position:fixed;inset:0;overflow:auto;padding:16px;box-sizing:border-box;background:var(--surface);z-index:99999';document.body.append(host);
    let states=0;
    try{for(const lesson of lessons){
     const scene=lessonScene(lesson,'toc');assertScene(scene);
     for(const f of (allFrames?scene.frames:[scene.frames[0],scene.frames.at(-1)])){host.innerHTML=`<div class="scene-stage">${frameMarkup(f)}</div>`;const stage=host.firstElementChild;if(stage.scrollWidth>stage.clientWidth+1)throw Error(`TOC ${lesson.id} overflow ${stage.scrollWidth}/${stage.clientWidth}`);states++;}
     for(const q of lesson.questions)if(q.tocGiven){host.innerHTML=tocGiven(q);if(host.scrollWidth>host.clientWidth+1)throw Error(`Quiz overflow ${lesson.id}`);}
    }}finally{host.remove();}
    function assertScene(scene){if(!scene.frames.length||/undefined|NaN|\[object Object\]/.test(JSON.stringify(scene.frames)))throw Error('Invalid TOC scene');}
    return {lessons:lessons.length,states};
   },{lessons:process.argv.includes('--grammar-only')?course.lessons.filter(l=>l.tocSpec.kind==='grammar'):course.lessons,theme,allFrames:width===320});layouts.push({theme,width,...result});
  }
  let journeys=0;
  await page.setViewportSize({width:390,height:844});
  for(const id of (process.argv.includes('--workshops-only')?[]:process.argv.includes('--grammar-only')?[213,216,219,222,225]:[0,42,108,177,213,237,279,330,378,396,420,437])){
   const unit=course.units.find(u=>id>=u.range[0]*3&&id<=(u.range[1]+1)*3-1);
   await page.evaluate(async()=>{const {store,flushAccount}=await import('/account-client.js');store.setItem('toc-quest-v1',JSON.stringify({version:1,xp:0,completed:[],settings:{sound:false}}));await flushAccount();});
   await page.reload();
   // Select the requested unit through the actual unit selector, then open its
   // lesson directly; ahead-of-progress access must not need forged completion.
   await page.goto(base+'/#roadmap');await page.locator(`[data-unit="${unit.id}"]`).click();
   await page.locator(`[data-lesson="${id}"]`).click();try{await finishJourney(page);}catch(error){await page.screenshot({path:`${output}/failure-${id}.png`});console.error({id,errors,requests});throw error;}journeys++;console.log('Journey passed:',id);
   const saved=await page.evaluate(async()=>{const {store}=await import('/account-client.js');return JSON.parse(store.getItem('toc-quest-v1'));});assert.equal(saved.xp,0);assert.equal(saved.completed.length,0);
   if([42,237,330,420].includes(id))await page.screenshot({path:`${output}/quiz-${id}-390.png`});
   await page.locator('[data-action=exit]').click();await page.locator('[data-action=leave]').click();
  }
  // Optional workshops must remain reachable even before completing a unit.
  await page.reload();
  await page.goto(base+'/#roadmap');await page.locator('[data-unit="1"]').click();
  await page.locator('[data-toc-unit="1"]').click();await page.locator('.toc-workshop').waitFor();
  await page.locator('[data-toc-test]').click();assert.match(await page.locator('[data-toc-build-feedback]').innerText(),/Every state-symbol/);
  await page.locator('[data-scene-input]').fill('ba');await page.locator('.scene-experiment button').click();await page.locator('[data-scene-next]').click();assert.equal(await page.locator('[data-scene-position]').inputValue(),'1');
  await page.locator('[data-scene-restart]').click();assert.equal(await page.locator('[data-scene-position]').inputValue(),'0');
  await page.locator('[data-scene-input]').fill('c');await page.locator('.scene-experiment button').click();assert.ok(await page.locator('[data-scene-error]').innerText());
  await page.locator('[data-scene-input]').fill('abba');await page.locator('.scene-experiment button').click();assert.equal(await page.locator('[data-scene-error]').innerText(),'');
  await page.screenshot({path:`${output}/optional-workshop-390.png`});await page.locator('[data-toc-next]').click();assert.equal(await page.locator('dialog[open]').count(),0);
  // Open every workshop on an actual phone viewport, including proof-only ones.
  for(const unit of course.units){
   await page.goto(base+'/#roadmap');await page.locator(`[data-unit="${unit.id}"]`).click();await page.locator(`[data-toc-unit="${unit.id}"]`).click();
   for(const width of [320,390,430]){await page.setViewportSize({width,height:844});assert.ok(await page.locator('dialog').evaluate(el=>el.scrollWidth<=innerWidth),`Workshop ${unit.id} overflow at ${width}`);}
   if(unit.id===1){
    await page.locator('[data-toc-test]').click();assert.match(await page.locator('[data-toc-build-feedback]').innerText(),/Every state-symbol/);
    await page.locator('[data-toc-from]').evaluateAll(selects=>selects.forEach(s=>s.value='0'));await page.locator('[data-toc-test]').click();assert.match(await page.locator('[data-toc-build-feedback]').innerText(),/Counterexample/);
    await page.evaluate(async spec=>{const {makeDfa}=await import('/shared/toc-models.js');const m=makeDfa(spec.machine,spec.modulus||spec.pattern||3);document.querySelectorAll('[data-toc-from]').forEach(s=>s.value=String(m.states.indexOf(m.delta[m.states[Number(s.dataset.tocFrom)]][s.dataset.tocSymbol])));},unit.tocLab.spec);
    await page.locator('[data-toc-test]').click();assert.match(await page.locator('[data-toc-build-feedback]').innerText(),/All 31 words/);
   }
   if(unit.id===4){
    await page.locator('[data-toc-set-check]').click();assert.match(await page.locator('[data-toc-set-feedback]').innerText(),/Missing/);
    await page.evaluate(async spec=>{const {regexNfa,nfaRun}=await import('/shared/toc-models.js');const m=regexNfa(spec.expression,spec.alphabet),target=nfaRun(m,m.alphabet[0]).frames.find(f=>f.toc?.position===1).toc.active;for(const b of document.querySelectorAll('[data-toc-state]'))if(target.includes(m.states[Number(b.dataset.tocState)]))b.click();},unit.tocLab.spec);
    await page.locator('[data-toc-set-check]').click();assert.match(await page.locator('[data-toc-set-feedback]').innerText(),/complete active set/);
   }
   if(unit.id===9){
    await page.locator('[data-toc-rule="1"]').click();await page.locator('[data-toc-rule="3"]').click();assert.equal(await page.locator('[data-toc-form]').innerText(),'b');assert.match(await page.locator('[data-toc-derivation-feedback]').innerText(),/Terminal word reached/);
    await page.locator('[data-toc-derive-reset]').click();assert.equal(await page.locator('[data-toc-form]').innerText(),'S');
   }
   if([1,4,9,14,18].includes(unit.id)){
    await page.setViewportSize({width:390,height:844});await page.locator('.concept-player').scrollIntoViewIfNeeded();await page.screenshot({path:`${output}/workshop-${unit.id}-390.png`});
   }
   await page.locator('[data-toc-exit]').click();
  }
  assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);
  const report={lessons:438,layouts,journeys,optionalLab:true,workshops:19,errors,requests};fs.writeFileSync(`${output}/${process.argv.includes("--workshops-only")?"workshop-results":process.argv.includes("--grammar-only")?"grammar-results":"results"}.json`,JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
})().catch(e=>{console.error(e);process.exitCode=1;});
