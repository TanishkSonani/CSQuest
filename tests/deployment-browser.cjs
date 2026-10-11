const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const crypto=require('node:crypto');
(async()=>{
 const base=process.env.DEPLOYMENT_URL||process.argv[2];
 assert.ok(base?.startsWith('https://'),'Provide an HTTPS deployment URL.');
 const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 const page=await context.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 const username='deploy_'+crypto.randomBytes(6).toString('hex'),password=crypto.randomBytes(24).toString('hex');
 const headers={'X-CSQuest-Request':'1',Origin:new URL(base).origin};
 let created=false;
 try{
  await page.goto(base,{waitUntil:'networkidle'});await page.locator('.auth-form').waitFor();
  const privateResponse=await context.request.get(base+'/api/subjects');assert.equal(privateResponse.status(),401);
  const result=await context.request.post(base+'/api/account/register',{headers,data:{username,displayName:'Deployment Check',avatar:'chip',password,remember:true}});
  assert.equal(result.status(),200);created=true;
  assert.match(result.headers()['set-cookie'],/; Secure/);
  await page.reload();await page.locator('.sidebar').waitFor();
  const subjects=await context.request.get(base+'/api/subjects');assert.equal(subjects.status(),200);assert.equal((await subjects.json()).length,11);
  await page.waitForLoadState('networkidle');
  const beforeSave=await (await context.request.get(base+'/api/account/session')).json();
  const saved=await context.request.post(base+'/api/account/data',{headers,data:{revision:beforeSave.revision,changes:{'csquest-theme':'dark'}}});assert.equal(saved.status(),200);
  await page.reload();await page.locator('.sidebar').waitFor();
  const session=await context.request.get(base+'/api/account/session');assert.equal((await session.json()).data['csquest-theme'],'dark');
  fs.mkdirSync('qa-results',{recursive:true});
  for(const width of [1440,390]){
   await page.setViewportSize({width,height:900});
   for(const route of ['learn','subjects','practice','social','account']){
    await page.goto(base+'/#'+route);await page.locator('main h1').waitFor();
    if(route==='learn'){await page.locator('.path-node.current').waitFor();assert.equal(await page.locator('.learning-trail').count(),0);await page.screenshot({path:`qa-results/deployment-learn-${width}.png`,fullPage:true});}
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,`Overflow on ${route} at ${width}`);
   }
  }
  assert.deepEqual(errors,[]);
  console.log('Deployment passed: trusted HTTPS, protected courses, secure session cookies, persistent account saves, 11 subjects, desktop/mobile UI and no browser errors.');
 }finally{
  if(created){const deleted=await context.request.post(base+'/api/account/delete',{headers,data:{username,password}});assert.equal(deleted.status(),200,'Remove disposable deployment-check account');}
  await browser.close();
 }
})().catch(error=>{console.error(error);process.exitCode=1;});
