import {escapeHtml as h} from '/shared/engine.js';
const preview=(q,value)=>{
 const v=Number.isFinite(Number(value))&&value!==null&&value!==''?Number(value):q.min;
 const fraction=Math.max(0,Math.min(1,(v-q.min)/(q.max-q.min)));
 if(q.visual==='grid')return `<div class="lab-hundred" aria-label="${v} of 100 selected">${Array.from({length:100},(_,i)=>`<i class="${i<v?'filled':''}" aria-hidden="true"></i>`).join('')}</div>`;
 if(q.visual==='line')return `<div class="puzzle-line"><span class="puzzle-marker" style="left:${fraction*100}%">${h(value===null?'?':v)}</span></div><div class="puzzle-bounds"><span>${q.min}</span><span>${q.max}</span></div>`;
 return `<div class="lab-bar-track"><i style="width:${fraction*100}%"></i></div><div class="puzzle-bounds"><span>${q.min}</span><span>${q.max} ${h(q.unit||'')}</span></div>`;
};
export function visualNumberPuzzle(q,value,disabled){
 return `<div class="visual-number-puzzle" data-visual-number data-min="${q.min}" data-max="${q.max}" data-visual="${q.visual}" data-unit="${h(q.unit||'')}"><p class="exercise-hint">Move the slider or type your answer. The visual shows your selection; check it when you’re ready.</p><div class="puzzle-preview">${preview(q,value)}</div><label class="sr-only" for="visual-answer">Select your answer</label><input type="range" id="visual-answer" min="${q.min}" max="${q.max}" step="${q.step||1}" value="${value===null?q.min:h(value)}" ${disabled}><label class="number-label">Your answer<div class="number-field"><input id="number-answer" type="number" min="${q.min}" max="${q.max}" step="${q.step||1}" value="${value===null?'':h(value)}" placeholder="?" ${disabled}><span>${h(q.unit||'')}</span></div></label></div>`;
}
document.addEventListener('input',event=>{
 const root=event.target.closest('[data-visual-number]');if(!root||!['visual-answer','number-answer'].includes(event.target.id)||event.target.disabled)return;
 const value=event.target.value,q={min:Number(root.dataset.min),max:Number(root.dataset.max),visual:root.dataset.visual,unit:root.dataset.unit};
 if(event.target.id==='visual-answer')root.querySelector('#number-answer').value=value;
 else root.querySelector('#visual-answer').value=value;
 root.querySelector('.puzzle-preview').innerHTML=preview(q,value);
 document.dispatchEvent(new CustomEvent('aptitude-puzzle-answer',{detail:value}));
});
