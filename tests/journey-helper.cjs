// Exercise the real ungraded teaching flow; never patch lesson state to skip it.
async function exploreJourney(page){
 if(await page.locator('.lesson-intro [data-action=begin]').count())await page.locator('.lesson-intro [data-action=begin]').click();
 if(!await page.locator('.learning-journey').count())return;
 if(await page.locator('[data-journey-phase="0"]').count()){await page.locator('[data-journey-card]').first().click();await page.locator('[data-journey-next]').click();}
 await page.locator('[data-journey-phase="1"]').waitFor();
}
async function finishJourney(page){
 if(await page.locator('.lesson-intro [data-action=begin]').count())await page.locator('.lesson-intro [data-action=begin]').click();
 if(!await page.locator('.learning-journey').count())return;
 if(await page.locator('[data-journey-phase="0"]').count()){await page.locator('[data-journey-card]').first().click();await page.locator('[data-journey-next]').click();}
 if(await page.locator('[data-journey-phase="1"]').count()){
  const button=page.locator('.journey-explorer button:not([disabled]):visible').first();
  if(await button.count())await button.click();
  else {const input=page.locator('.journey-explorer input:visible,.journey-explorer select:visible').first();await input.focus();await page.keyboard.press('ArrowRight');await input.dispatchEvent('input');}
  await page.locator('[data-journey-next]').click();
 }
 for(let i=0;i<20&&await page.locator('[data-journey-explain]').count();i++)await page.locator('[data-journey-explain]').click();
 await page.locator('[data-journey-next]').click();await page.locator('.challenge-content').waitFor();
}
module.exports={finishJourney,exploreJourney};
