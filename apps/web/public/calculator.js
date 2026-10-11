import {calculate} from '/shared/calculator.js';
let expression='',message='',returnFocus=null;
export function calculatorButton(){return '<button type="button" class="lesson-calculator icon-button" data-open-calculator aria-label="Open calculator" title="Calculator"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 6h8M8 11h1m3 0h1m3 0h1M8 15h1m3 0h1m3 0h1M8 19h1m3 0h1m3 0h1" stroke="currentColor" stroke-width="2"/></svg></button>';}
export function closeCalculator(){
 const overlay=document.querySelector('.calculator-overlay');if(!overlay)return false;
 overlay.closest('dialog').querySelector('.lesson-shell').inert=false;overlay.remove();returnFocus?.focus({preventScroll:true});returnFocus=null;return true;
}
function refresh(){const root=document.querySelector('.calculator-panel');if(!root)return;root.querySelector('.calculator-display').textContent=expression.replaceAll('*','×').replaceAll('/','÷')||'0';root.querySelector('.calculator-message').textContent=message;}
function press(key){
 message='';
 try{
  if(key==='clear')expression='';
  else if(key==='back')expression=expression.slice(0,-1);
  else if(['=','sqrt','square','sign'].includes(key)){
   const value=calculate(expression||'0');let result=value;
   if(key==='sqrt'){if(value<0)throw Error('Square root needs a nonnegative number.');result=Math.sqrt(value);}
   if(key==='square')result=value*value;if(key==='sign')result=-value;
   if(!Number.isFinite(result))throw Error('Result is outside the supported range.');expression=String(Number(result.toPrecision(12)));
  }else if(expression.length<160&&/^[0-9.+*/()%\-]$/.test(key))expression+=key;
 }catch(error){message=error.message;}
 refresh();
}
function open(){
 const dialog=document.querySelector('.lesson-dialog');if(!dialog||dialog.querySelector('.calculator-overlay'))return;
 returnFocus=document.activeElement;dialog.querySelector('.lesson-shell').inert=true;
 const rows=[['clear','C'],['back','⌫'],['(', '('],[')',')'],['7','7'],['8','8'],['9','9'],['/','÷'],['4','4'],['5','5'],['6','6'],['*','×'],['1','1'],['2','2'],['3','3'],['-','−'],['0','0'],['.','.'],['%','%'],['+','+'],['sign','+/−'],['sqrt','√'],['square','x²'],['=','=']];
 const overlay=document.createElement('div');overlay.className='calculator-overlay';overlay.innerHTML=`<section class="calculator-panel" role="dialog" aria-modal="true" aria-labelledby="calculator-title" tabindex="-1"><header><h2 id="calculator-title">Calculator</h2><button type="button" class="icon-button" data-close-calculator aria-label="Close calculator">×</button></header><output class="calculator-display" aria-label="Calculation"></output><p class="calculator-message" role="status" aria-live="polite"></p><div class="calculator-keys">${rows.map(([key,label])=>`<button type="button" data-calculator-key="${key}" ${key==='='?'class="equals"':''} aria-label="${({clear:'Clear',back:'Backspace',sqrt:'Square root',square:'Square',sign:'Change sign','/':'Divide','*':'Multiply','-':'Subtract','+':'Add','=':'Equals','%':'Percent'})[key]||label}">${label}</button>`).join('')}</div><small>Percent divides by 100: 200 × 25% = 50.<br>Use parentheses for grouping. Closing keeps your lesson answer.</small></section>`;dialog.append(overlay);refresh();overlay.querySelector('.calculator-panel').focus();
}
document.addEventListener('click',event=>{if(event.target.closest('[data-open-calculator]'))open();else if(event.target.closest('[data-close-calculator]')||event.target.classList.contains('calculator-overlay'))closeCalculator();else{const button=event.target.closest('[data-calculator-key]');if(button)press(button.dataset.calculatorKey);}});
document.addEventListener('keydown',event=>{
 const root=document.querySelector('.calculator-panel');if(!root)return;
 if(event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();closeCalculator();return;}
 if(event.key==='Tab'){const buttons=[...root.querySelectorAll('button')],i=buttons.indexOf(document.activeElement);if(i<0||(!event.shiftKey&&i===buttons.length-1)||(event.shiftKey&&i===0)){event.preventDefault();buttons[event.shiftKey?buttons.length-1:0].focus();}return;}
 if(event.ctrlKey||event.metaKey||event.altKey){event.stopImmediatePropagation();return;}
 let key=event.key;if(key==='Enter'&&event.target.closest('button'))return;
 if(key==='Enter')key='=';if(key==='Backspace'||key==='Delete')key='back';
 if(/^[0-9.+*/()%\-=]$/.test(key)||key==='back'){event.preventDefault();event.stopImmediatePropagation();press(key);}
},true);
