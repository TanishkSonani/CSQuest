import {escapeHtml as h} from '/shared/engine.js';
import {checkCodingLab,codingProgram,restoreCodingDraft,codingLabCompleted} from '/shared/ds-coding.js';
import {programPuzzle} from './c-program.js';
import {icon} from './icons.js';
const mounted=new WeakMap();
export function codingLabCard(unit,progress){
 const lab=unit.codingLab||unit.sqlLab;if(!lab)return '';const done=codingLabCompleted(lab,progress.codingLabs?.[lab.id]),sql=lab.language==='SQL',kind=sql?'SQL':'C';
 return `<section class="optional-coding-card ${done?'completed':''}" aria-label="Optional ${kind} lab"><div class="coding-card-icon">${icon(done?'check':'binary')}</div><span class="tag green">OPTIONAL ${kind} LAB${done?' · COMPLETED':''}</span><h3>${h(lab.title)}</h3><p>Practice this unit with a guided ${kind} challenge. You can continue to the next unit without completing this lab.</p><small>About ${lab.minutes} minutes · tap, drag, or type · account-backed drafts</small><button type="button" class="btn secondary" data-ds-coding-unit="${unit.id}">${done?'REVISIT':'OPEN'} ${kind} LAB ${icon('arrow')}</button></section>`;
}
function persist(root){const state=mounted.get(root);state.save({...state.draft,values:[...state.draft.values]});}
function feedback(lab,result){
 if(!result)return '';
 const subject=lab.language==='SQL'?'query':'program';
 return `<section class="ds-code-feedback ${result.correct?'correct':'needs-work'}" role="status" aria-live="polite"><h3>${result.correct?'Challenge complete!':'Let’s adjust the code.'}</h3><p>${result.correct?`Your ${subject} matches the checked solution. Your lab badge is saved, and you can continue whenever you’re ready.`:'Check the highlighted blanks, then try again.'}</p>${result.correct?`<h4>Expected result for the supplied examples</h4><ul class="ds-code-examples">${lab.examples.map(e=>`<li><span>${h(e.label)}</span><code>${h(e.output)}</code></li>`).join('')}</ul>`:`<ul>${result.blanks.filter(b=>b.status!=='correct').map(b=>`<li><b>Blank ${b.index+1}${b.status==='empty'?' is empty':''}:</b> ${h(b.hint)}</li>`).join('')}</ul>`}</section>`;
}
function redraw(root,focus=null){
 const openDetails=['ds-code-typing','ds-code-reference','ds-code-given'].filter(name=>root.querySelector('details.'+name)?.open);
 const {lab,draft,result,next,theme,sync}=mounted.get(root),checked=checkCodingLab(lab,draft.values);
 const sql=lab.language==='SQL',kind=sql?'SQL':'C';
 root.innerHTML=`<header class="modal-heading"><div><span class="page-eyebrow">UNIT ${lab.unitId+1} · OPTIONAL ${kind} LAB</span><h2>${h(lab.title)}</h2></div><div class="button-row">${theme||''}<button type="button" class="icon-button" data-coding-action="exit" aria-label="Close ${kind} lab">${icon('close')}</button></div></header><p>${h(lab.prompt)}</p><p class="coding-optional-note">You can leave or continue at any time. Your draft saves with your account.<span class="account-sync" role="status">${h(sync?.()||'Drafts save automatically.')}</span></p>${draft.completedAt?'<span class="tag green">COMPLETED ONCE · PRACTICE AGAIN ANYTIME</span>':''}${programPuzzle({...lab,template:lab.editorTemplate},draft.values)}<details class="ds-code-given"><summary>Example and concept notes</summary><ul class="ds-code-examples">${lab.examples.map(e=>`<li><span>${h(e.label)}</span><code>${h(e.output)}</code></li>`).join('')}</ul></details><details class="ds-code-typing"><summary>Prefer to type the missing ${kind}?</summary><p>Enter the missing fragments in the numbered blanks. Whitespace differences are accepted.</p>${draft.values.map((v,i)=>`<label>Blank ${i+1}<input type="text" data-coding-text="${i}" maxlength="160" spellcheck="false" autocomplete="off" value="${h(v??'')}" aria-label="${kind} for blank ${i+1}"></label>`).join('')}</details><div class="button-row ds-code-actions"><button type="button" class="btn primary" data-coding-action="check">CHECK ${sql?'QUERY':'PROGRAM'}</button><button type="button" class="text-button" data-coding-action="reset">RESET BLANKS</button><button type="button" class="btn secondary" data-coding-action="download" ${checked.correct?'':'disabled'}>${icon('download')} DOWNLOAD .${sql?'SQL':'C'}</button></div>${feedback(lab,result)}<details class="ds-code-reference"><summary>Reference solution</summary><pre><code>${h(codingProgram(lab,lab.answer))}</code></pre></details><p class="muted coding-check-note">The guided check verifies the missing ${kind} fragments against the reference answer. ${sql?'The examples explain the expected query meaning; no live database is required.':'Download the completed C11 program to run in your C compiler.'}</p><footer class="ds-code-footer"><button type="button" class="btn secondary" data-coding-action="exit">BACK TO UNIT</button>${next?'<button type="button" class="btn primary" data-coding-action="next">CONTINUE TO NEXT UNIT</button>':''}</footer>`;
 for(const name of openDetails)root.querySelector('details.'+name).open=true;
 if(result)for(const blank of result.blanks)root.querySelector(`[data-program-slot="${blank.index}"]`)?.classList.toggle('needs-fix',blank.status!=='correct');
 if(focus)root.querySelector(focus)?.focus({preventScroll:true});
}
export function mountCodingLab(dialog,lab,{draft,save,exit,next,theme,sync}){
 dialog.setAttribute('aria-label',`Optional coding lab: ${lab.title}`);dialog.innerHTML='<div class="ds-coding" data-ds-coding></div>';const root=dialog.firstElementChild;
 mounted.set(root,{lab,draft:restoreCodingDraft(lab,draft),save,exit,next,theme,sync,result:null});redraw(root);root.querySelector('h2').setAttribute('tabindex','-1');root.querySelector('h2').focus({preventScroll:true});
}
document.addEventListener('c-program-answer',event=>{
 const root=event.target.closest?.('[data-ds-coding]');if(!root)return;const state=mounted.get(root),{index,token}=event.detail;
 if(!state||!Number.isInteger(index)||index<0||index>=state.lab.answer.length||(token!==null&&!state.lab.tokens.includes(token)))return;
 state.draft.values[index]=token;state.result=null;persist(root);const next=state.draft.values.findIndex(v=>v===null);redraw(root,`[data-program-slot="${next<0?index:next}"]`);
});
document.addEventListener('input',event=>{
 const input=event.target.closest('[data-coding-text]');if(!input)return;const root=input.closest('[data-ds-coding]'),state=mounted.get(root),index=Number(input.dataset.codingText);if(!state||index<0||index>=state.lab.answer.length)return;
 state.draft.values[index]=input.value.trim()?input.value.slice(0,160):null;state.result=null;persist(root);const slot=root.querySelector(`[data-program-slot="${index}"]`);slot.textContent=input.value||`blank ${index+1}`;slot.setAttribute('aria-label',`Blank ${index+1}, ${input.value||'empty'}`);slot.classList.remove('needs-fix');root.querySelector('.ds-code-feedback')?.remove();root.querySelector('.c-program-tools [role="status"]').textContent=`${state.draft.values.filter(v=>v!==null).length} / ${state.lab.answer.length} blanks filled`;root.querySelector('[data-coding-action="download"]').disabled=!checkCodingLab(state.lab,state.draft.values).correct;
});
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-coding-action]');if(!button)return;const root=button.closest('[data-ds-coding]'),state=mounted.get(root);if(!state||button.disabled)return;
 const action=button.dataset.codingAction;
 if(action==='exit'||action==='next'){persist(root);(action==='next'?state.next:state.exit)?.();return;}
 if(action==='check'){state.result=checkCodingLab(state.lab,state.draft.values);if(state.result.correct)state.draft.completedAt??=Date.now();persist(root);redraw(root,'[data-coding-action="check"]');root.querySelector('.ds-code-feedback').scrollIntoView({block:'nearest',behavior:'auto'});}
 if(action==='reset'){state.draft.values.fill(null);state.result=null;persist(root);redraw(root,'[data-program-slot="0"]');}
 if(action==='download'&&checkCodingLab(state.lab,state.draft.values).correct){const url=URL.createObjectURL(new Blob([codingProgram(state.lab,state.draft.values)],{type:'text/plain'})),link=document.createElement('a');link.href=url;link.download=state.lab.id+(state.lab.language==='SQL'?'.sql':'.c');link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
});
document.addEventListener('keydown',event=>{if(event.key==='Enter'&&event.ctrlKey&&!event.isComposing){const root=event.target.closest?.('[data-ds-coding]');if(root){event.preventDefault();root.querySelector('[data-coding-action="check"]').click();}}});
