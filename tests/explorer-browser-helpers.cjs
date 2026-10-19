async function selectFile(page,name,details=false){
 await page.getByLabel('Select '+name,{exact:true}).check();
 if(details&&await page.locator('.library-browser-layout').evaluate(e=>e.classList.contains('is-details-hidden')))await page.locator('[data-lib-command=details]').click();
}
async function fileAction(page,action,name){const layout=page.locator('.library-browser-layout');if(page.viewportSize().width<=1250&&await layout.count()&&!await layout.evaluate(e=>e.classList.contains('is-details-hidden')))await page.locator('[data-lib-action=details-close]').click();await selectFile(page,name);await page.locator('[data-lib-command='+action+']').click();}
module.exports={selectFile,fileAction};
