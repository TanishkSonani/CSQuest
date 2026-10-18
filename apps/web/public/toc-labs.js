import {escapeHtml as h} from '/shared/engine.js';
import {tocScene,tocExperiment,makeDfa,dfaRun,words,parseGrammar,regexNfa,nfaRun} from '/shared/toc-models.js';
import {conceptPlayer,mountConceptPlayers} from './concept-scenes.js';

export function tocLabCard(unit){
 if(!unit.tocLab)return '';
 return `<section class="optional-coding-card"><span class="tag green">OPTIONAL CONCEPT LAB</span><h3>${h(unit.tocLab.title)}</h3><p>${h(unit.goal)}</p><p>Run your own examples, predict their results and inspect every step. This lab never blocks the next unit.</p><button type="button" class="btn secondary" data-toc-unit="${unit.id}">OPEN WORKSHOP</button></section>`;
}
export function mountTocLab(dialog,unit,{exit,next}){
 const spec=unit.tocLab.spec,lesson={id:unit.id,tocSpec:spec};
 dialog.setAttribute('aria-label',`Optional lab: ${unit.tocLab.title}`);
 dialog.innerHTML=`<section class="toc-workshop"><header><span class="tag green">OPTIONAL · NO XP OR HEARTS</span><h1>${h(unit.tocLab.title)}</h1><p>${h(unit.tocLab.challenge)}</p></header><aside class="journey-example"><h2>Predict, run, explain</h2><p>Before running, write what you expect. After stepping through the model, explain one difference and one limit of this example.</p><label>Your prediction<textarea data-toc-prediction rows="3" maxlength="1000" placeholder="I expect… because…"></textarea></label></aside>${conceptPlayer(lesson,'toc')}<section class="journey-example"><h2>Test your explanation</h2><label>Expected acceptance for the current input<select data-toc-guess><option value="yes">Accept</option><option value="no">Reject</option></select></label><button type="button" class="btn secondary" data-toc-check>CHECK PREDICTION</button><p data-toc-feedback role="status"></p></section><footer class="button-row"><button type="button" class="btn secondary" data-toc-exit>BACK TO UNIT</button>${next?'<button type="button" class="btn primary" data-toc-next>CONTINUE TO NEXT UNIT</button>':''}</footer></section>`;
 mountConceptPlayers(dialog,lesson,'toc');
 if(spec.kind==='dfa')mountDfaBuilder(dialog,spec);
 if(['grammar','grammar-properties','normal-form'].includes(spec.kind))mountGrammarBuilder(dialog,spec);
 if(['nfa','subset','regex'].includes(spec.kind))mountNfaPuzzle(dialog,spec);
 const supportsAcceptance=typeof tocScene(spec).result.accepted==='boolean';
 const check=dialog.querySelector('[data-toc-check]');
 if(!supportsAcceptance){check.closest('section').innerHTML='<h2>Challenge the conclusion</h2><p>State which rows justify the claim. Explain why testing more finite examples would or would not establish a universal theorem. Use the written assumptions to check your reasoning.</p>';}
 else check.addEventListener('click',()=>{
  const input=dialog.querySelector('[data-scene-input]'),value=input?.type==='number'?Number(input.value):input?.value??tocExperiment(spec)?.value;
  try{const result=tocScene(spec,value).result,guess=dialog.querySelector('[data-toc-guess]').value==='yes';dialog.querySelector('[data-toc-feedback]').textContent=`${guess===result.accepted?'Prediction matched.':'Prediction differs.'} ${result.frames.at(-1).caption}`;}catch(error){dialog.querySelector('[data-toc-feedback]').textContent=error.message;}
 });
 dialog.querySelector('[data-toc-exit]').addEventListener('click',exit);dialog.querySelector('[data-toc-next]')?.addEventListener('click',next);
 dialog.querySelector('h1').tabIndex=-1;dialog.querySelector('h1').focus();
}

function mountDfaBuilder(dialog,spec){
 const reference=makeDfa(spec.machine,spec.modulus||spec.pattern||3),root=document.createElement('section');root.className='journey-example toc-builder';
 root.innerHTML=`<h2>Build the transition rules</h2><p>Use the same states, start and accepting set as the example. Fill every state-symbol rule to recognize the same language. Tap the destinations; no typing is required.</p><div class="toc-builder-rules">${reference.states.flatMap((q,i)=>reference.alphabet.map(a=>`<label>${h(q)} reading ${h(a)}<select data-toc-from="${i}" data-toc-symbol="${h(a)}"><option value="">Choose next state</option>${reference.states.map((state,j)=>`<option value="${j}">${h(state)}</option>`).join('')}</select></label>`)).join('')}</div><div class="button-row"><button type="button" class="btn secondary" data-toc-test>TEST MACHINE</button><button type="button" class="text-button" data-toc-clear>CLEAR RULES</button></div><p role="status" data-toc-build-feedback></p><details><summary>Reference transitions</summary><p>${reference.states.map(q=>reference.alphabet.map(a=>`${h(q)} on ${h(a)} → ${h(reference.delta[q][a])}`).join('; ')).join('<br>')}</p></details>`;
 dialog.querySelector('.concept-player').after(root);
 root.querySelector('[data-toc-clear]').addEventListener('click',()=>{root.querySelectorAll('select').forEach(s=>s.value='');root.querySelector('[role=status]').textContent='Rules cleared. Try a different construction.';});
 root.querySelector('[data-toc-test]').addEventListener('click',()=>{
  const delta=Object.fromEntries(reference.states.map(q=>[q,{}])),feedback=root.querySelector('[role=status]');
  for(const select of root.querySelectorAll('select')){if(select.value===''){feedback.textContent='Every state-symbol pair needs exactly one destination. Fill the remaining rules.';select.focus();return;}delta[reference.states[Number(select.dataset.tocFrom)]][select.dataset.tocSymbol]=reference.states[Number(select.value)];}
  const machine={...reference,delta},suite=words(reference.alphabet,4),counterexample=suite.find(word=>dfaRun(machine,word).accepted!==dfaRun(reference,word).accepted);
  feedback.textContent=counterexample!==undefined?`Counterexample: ${counterexample||'ε'}. Your machine ${dfaRun(machine,counterexample).accepted?'accepts':'rejects'}, but the target ${dfaRun(reference,counterexample).accepted?'accepts':'rejects'}. Trace that word and repair a transition.`:`All ${suite.length} words through length four agree. This finite suite is a useful check; explain your state invariant to justify every length.`;
 });
}

function mountGrammarBuilder(dialog,spec){
 const grammar=parseGrammar(spec.grammar||'S -> aSb | ε'),root=document.createElement('section');root.className='journey-example';let form=grammar.start,steps=0;
 root.innerHTML='<h2>Build a derivation</h2><p>Replace the leftmost nonterminal using one permitted production. Each button performs a real rewrite. Stop when only terminals remain.</p><div class="toc-word" data-toc-form aria-live="polite"></div><div class="button-row" data-toc-productions></div><p role="status" data-toc-derivation-feedback></p><button type="button" class="text-button" data-toc-derive-reset>RESTART DERIVATION</button>';
 dialog.querySelector('.concept-player').after(root);
 const draw=()=>{
  root.querySelector('[data-toc-form]').textContent=form||'ε';const at=form.search(/[A-Z]/),symbol=form[at],rules=grammar.rules.filter(r=>r.lhs===symbol);
  root.querySelector('[data-toc-productions]').innerHTML=at<0?'':rules.map(rule=>`<button type="button" class="btn secondary" data-toc-rule="${grammar.rules.indexOf(rule)}" ${steps>=30||form.length>80?'disabled':''}>${h(rule.lhs)} → ${h(rule.rhs.join('')||'ε')}</button>`).join('');
  root.querySelector('[data-toc-derivation-feedback]').textContent=at<0?`Terminal word reached after ${steps} rewrites: ${form||'ε'}. Each permitted rewrite establishes that this word is generated.`:steps>=30||form.length>80?'This derivation reached the teaching display bound. Restart or choose a shorter branch; this is not a grammar-membership rejection.':rules.length?`Rewrite the leftmost ${symbol}. Other nonterminals stay in place.`:`No production is available for ${symbol}; this branch cannot finish.`;
 };
 root.addEventListener('click',event=>{const button=event.target.closest('button');if(!button||button.disabled)return;if(button.hasAttribute('data-toc-derive-reset')){form=grammar.start;steps=0;}else if(button.hasAttribute('data-toc-rule')){const rule=grammar.rules[Number(button.dataset.tocRule)],at=form.search(/[A-Z]/);if(rule?.lhs!==form[at])return;form=form.slice(0,at)+rule.rhs.join('')+form.slice(at+1);steps++;}draw();});draw();
}
function mountNfaPuzzle(dialog,spec){
 const machine=regexNfa(spec.expression||'(a|b)*ab',spec.alphabet),symbol=machine.alphabet[0],run=nfaRun(machine,symbol),target=run.frames.find(f=>f.toc?.position===1)?.toc.active||[],selected=new Set(),root=document.createElement('section');root.className='journey-example';
 root.innerHTML=`<h2>Predict the active-state set</h2><p>Start with the ε-closure of the entry state. Read one ${h(symbol)}, then take ε-closure again. Select every state that can be active, including all branches.</p><div class="toc-nfa-options" role="group" aria-label="Candidate active states">${machine.states.map((q,i)=>`<button type="button" class="btn secondary" aria-pressed="false" data-toc-state="${i}">${h(q)}</button>`).join('')}</div><button type="button" class="btn secondary" data-toc-set-check>CHECK ACTIVE SET</button><p role="status" data-toc-set-feedback></p>`;
 dialog.querySelector('.concept-player').after(root);
 root.addEventListener('click',event=>{const b=event.target.closest('button');if(!b)return;if(b.dataset.tocState!==undefined){const q=machine.states[Number(b.dataset.tocState)];if(selected.has(q))selected.delete(q);else selected.add(q);b.setAttribute('aria-pressed',String(selected.has(q)));}else if(b.hasAttribute('data-toc-set-check')){const missing=target.filter(q=>!selected.has(q)),extra=[...selected].filter(q=>!target.includes(q));root.querySelector('[data-toc-set-feedback]').textContent=missing.length||extra.length?`Missing: ${missing.join(', ')||'none'}. Extra: ${extra.join(', ')||'none'}. Follow symbol edges from every initially active state, then all ε paths.`:'That is the complete active set. Acceptance still waits until the entire input is consumed.';}});
}
