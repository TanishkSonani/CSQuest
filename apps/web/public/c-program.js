import {escapeHtml as h} from '/shared/engine.js';
export function programPuzzle(q,value,disabled=''){
 const active=value.findIndex(token=>token===null),index=active<0?0:active;
 const code=q.template.split(/(\{\{\d+\}\})/).map(part=>{
  const match=part.match(/^\{\{(\d+)\}\}$/);if(!match)return h(part);
  const slot=Number(match[1]);return `<button type="button" class="c-program-slot ${slot===index?'selected':''}" data-program-slot="${slot}" aria-label="Blank ${slot+1}${value[slot]?', current token '+h(value[slot]):', empty'}" aria-pressed="${slot===index}" ${disabled}>${h(value[slot]??'blank '+(slot+1))}</button>`;
 }).join('');
 const tokens=[...q.tokens].sort((a,b)=>a.localeCompare(b));
 return `<section class="c-program" data-program-active="${index}"><p class="exercise-hint">Tap a blank, then tap a token. You can also drag a token onto a blank. Tokens can be reused.</p><pre class="c-program-code" aria-label="Program to complete"><code>${code}</code></pre><div class="c-program-tools"><button type="button" class="text-button" data-program-clear ${disabled}>CLEAR SELECTED BLANK</button><span role="status">${value.filter(token=>token!==null).length} / ${q.answer.length} blanks filled</span></div><div class="c-token-bank" aria-label="Code token bank">${tokens.map(token=>`<button type="button" class="tile" draggable="${disabled?'false':'true'}" data-program-token="${h(token)}" ${disabled}>${h(token)}</button>`).join('')}</div></section>`;
}
function place(root,index,token){document.dispatchEvent(new CustomEvent('c-program-answer',{detail:{index,token}}));}
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-program-slot],[data-program-token],[data-program-clear]');if(!button||button.disabled)return;const root=button.closest('.c-program');
 if(button.hasAttribute('data-program-slot')){root.dataset.programActive=button.dataset.programSlot;root.querySelectorAll('[data-program-slot]').forEach(slot=>{const selected=slot===button;slot.classList.toggle('selected',selected);slot.setAttribute('aria-pressed',String(selected));});return;}
 place(root,Number(root.dataset.programActive),button.hasAttribute('data-program-clear')?null:button.dataset.programToken);
});
document.addEventListener('dragstart',event=>{const token=event.target.closest('[data-program-token]');if(!token||token.disabled)return;event.dataTransfer.setData('text/plain',token.dataset.programToken);event.dataTransfer.effectAllowed='copy';});
document.addEventListener('dragover',event=>{const slot=event.target.closest('[data-program-slot]');if(slot&&!slot.disabled){event.preventDefault();event.dataTransfer.dropEffect='copy';}});
document.addEventListener('drop',event=>{const slot=event.target.closest('[data-program-slot]');if(!slot||slot.disabled)return;event.preventDefault();place(slot.closest('.c-program'),Number(slot.dataset.programSlot),event.dataTransfer.getData('text/plain'));});
