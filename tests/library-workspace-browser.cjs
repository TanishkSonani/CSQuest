const {chromium}=require('../tooling/browser-qa/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs/promises');
(async()=>{
 const {libraryFixture}=await import('./library-fixture.mjs');let cleanup,browser,page;
 const f=await libraryFixture({after:fn=>cleanup=fn},{courses:true});
 try{
  const names=['A very long directory name '+ 'folder '.repeat(20),'B'+ 'UnbrokenDirectoryName'.repeat(8)];
  for(const name of names)await f.ok(await f.req('folder',{drive:'boot',name}));
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const ctx=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});await ctx.addCookies([{name:'csquest_session',value:f.token,url:f.base}]);page=await ctx.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(f.base+'/#settings');await page.locator('a.nav-item[href="#library"]').click();await page.locator('[data-lib-drive=boot]').dblclick();
  assert.equal(await page.locator('.topbar').isVisible(),false);assert.equal(await page.locator('.sidebar').isVisible(),false);assert.equal(await page.locator('.mobile-nav').isVisible(),false);
  assert.equal(await page.getByRole('link',{name:'Back to previous page'}).getAttribute('href'),'#settings');
  const filename='A'+ 'VeryLongUnbrokenFilename'.repeat(7)+'.txt';await page.locator('[data-lib-upload]').setInputFiles({name:filename,mimeType:'text/plain',buffer:Buffer.from('Filename layout check')});await page.getByRole('button',{name:'Open '+filename,exact:true}).waitFor();
  assert.equal(await page.locator('.library-file-type').count(),0);assert.equal(await page.locator('.library-file-head').textContent(),'NameDate modifiedSize');
  await fs.mkdir('qa-results/library-workspace',{recursive:true});
  for(const grid of [false,true]){
   if(grid)await page.locator('[data-lib-action=view]').click();
   for(const [width,height] of [[1440,1000],[1024,768],[768,1024],[390,844],[360,740],[844,390]]){
    await page.setViewportSize({width,height});
    const result=await page.evaluate(()=>{
     const fileArea=document.querySelector('.library-explorer').getBoundingClientRect();
     const rows=[...document.querySelectorAll('.library-file')];
     const contained=rows.every(row=>{const r=row.getBoundingClientRect(),b=row.querySelector('.library-file-open').getBoundingClientRect(),n=row.querySelector('.library-file-open>span').getBoundingClientRect();return n.left>=r.left-1&&n.right<=r.right+1&&n.bottom<=r.bottom+1&&b.right<=r.right+1;});
     return {overflow:document.documentElement.scrollWidth>innerWidth,contained,fullWidth:document.querySelector('.page-library').getBoundingClientRect().width>=innerWidth-1,usable:fileArea.width>innerWidth*.6};
    });assert.deepEqual(result,{overflow:false,contained:true,fullWidth:true,usable:true},`${grid?'Grid':'List'} ${width}`);
    await page.screenshot({path:`qa-results/library-workspace/${grid?'grid':'list'}-${width}.png`,fullPage:true});
   }
  }
  await page.setViewportSize({width:1440,height:1000});await page.reload();await page.getByRole('link',{name:'Back to previous page'}).click();await page.waitForURL('**/#settings');await page.locator('.topbar').waitFor({state:'visible'});
  const usersIcon=await page.locator('a.nav-item[href="#admin"] svg').innerHTML(),settingsIcon=await page.locator('a.nav-item[href="#settings"] svg').innerHTML();assert.notEqual(usersIcon,settingsIcon);
  await page.goto(f.base+'/#podcasts');await page.locator('a.nav-item[href="#library"]').click();assert.equal(await page.getByRole('link',{name:'Back to previous page'}).getAttribute('href'),'#podcasts');
  const link=await f.ok(await f.req('public-links',{drive:'boot',days:1})),guest=await browser.newContext({viewport:{width:1440,height:1000}}),pub=await guest.newPage();pub.on('pageerror',e=>errors.push(e.message));await pub.goto(f.base+'/library-share.html#'+link.token);await pub.locator('[data-public-drive]').dblclick();await pub.getByRole('button',{name:'Open '+filename,exact:true}).waitFor();await pub.locator('[data-public-view]').click();
  for(const [width,height] of [[1440,1000],[390,844],[844,390]]){await pub.setViewportSize({width,height});assert.equal(await pub.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.equal(await pub.evaluate(()=>[...document.querySelectorAll('.library-file-open>span')].every(n=>{const r=n.closest('.library-file').getBoundingClientRect(),b=n.getBoundingClientRect();return b.right<=r.right+1&&b.bottom<=r.bottom+1;})),true);await pub.screenshot({path:`qa-results/library-workspace/public-grid-${width}.png`,fullPage:true});}
  assert.deepEqual(errors,[]);console.log('Library workspace passed: full viewport, hidden learning chrome, return navigation/reload, distinct icons, no type column, long-name containment in list/grid at six desktop/mobile sizes.');
 }finally{await browser?.close();await cleanup();}
})().catch(e=>{console.error(e.message.split('\n')[0],e.stack?.split('\n').find(s=>s.includes('library-workspace-browser.cjs:'))||'');process.exitCode=1;});
