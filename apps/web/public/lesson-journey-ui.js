import {conceptPlayer,mountConceptPlayers,predictionMarkup} from './concept-scenes.js';
import {topicDiagram} from './lesson-visuals.js';
import {diagramKind,diagramControls} from '/shared/visual-models.js';
import {lessonJourney} from '/shared/lesson-journey.js';
import {escapeHtml as h} from '/shared/engine.js';
import {icon} from './icons.js';
import {aptitudeLab} from './aptitude-labs.js';
import {cLab} from './c-labs.js';
import {dsLab} from './ds-labs.js';
import {algoLab} from './algo-labs.js';
import {cnLab,mountCnLab} from './cn-labs.js';

export function beginnerBridge(lesson,subject){const guide=lessonJourney(lesson,subject);return `<aside class="beginner-bridge"><h4>Before the notation</h4><dl>${guide.terms.map(({term,meaning})=>`<div><dt>${h(term)}</dt><dd>${h(meaning)}</dd></div>`).join('')}</dl></aside>`;}
export function journeyView(lesson,subject,state){
 const guide=lessonJourney(lesson,subject),phase=state.phase,term=guide.terms[Math.min(state.card,guide.terms.length-1)],step=Math.min(state.step,guide.steps.length-1);
 const ready=phase===0?typeof state.prediction==='boolean':phase===1?state.explored:step===guide.steps.length-1;
 const explorer=phase===1?(['os','dbms'].includes(subject)?conceptPlayer(lesson,subject):['coa','dl'].includes(subject)?(diagramControls(diagramKind(subject,lesson)).length?topicDiagram(lesson,subject):conceptPlayer(lesson,subject)):(aptitudeLab(lesson)||cLab(lesson)||dsLab(lesson)||algoLab(lesson)||cnLab(lesson)||conceptPlayer(lesson,subject))):'';
 const art=explorer;
 return `<section class="learning-journey" data-journey-phase="${phase}"><nav class="journey-stages" aria-label="Learning stages">${['Meet the idea','Explore it','Connect the steps'].map((label,i)=>`<span class="${i===phase?'current':i<phase?'done':''}" ${i===phase?'aria-current="step"':''}>${i<phase?icon('check'):`<b>${i+1}</b>`}${label}</span>`).join('')}</nav><div class="journey-frame"><span class="page-eyebrow">LEARN BY DOING · ${h(lesson.title)}</span><h1 tabindex="-1">${['Start with one clear idea.','Try it. Watch what changes.','Build the explanation.'][phase]}</h1><p class="journey-lead">${h(phase===0?guide.idea.split(/(?<=[.!?])\s+/)[0]:phase===1?(lesson.learningNotes?.experiment||'Change an input or take a step, then explain the difference. This example does not affect your quiz.'):guide.steps[step])}</p>
 ${phase===0?`<p class="lesson-objective"><strong>Your goal:</strong> ${h(lesson.learningNotes?.objective||guide.steps[0])}</p><p class="lesson-purpose">${h(lesson.learningNotes?.why||guide.idea)}</p>${predictionMarkup(lesson,subject)}<details class="lesson-notes"><summary>Words you may need</summary><div class="journey-term-tabs" role="group" aria-label="Tap a building block">${guide.terms.map((t,i)=>`<button type="button" data-journey-card="${i}" aria-pressed="${state.card===i}" class="${state.visited.includes(i)?'visited':''}">${h(t.term)}${state.visited.includes(i)?icon('check'):''}</button>`).join('')}</div><div class="journey-definition" aria-live="polite"><h2>${h(term.term)}</h2><p>${h(term.meaning)}</p></div></details>`:phase===1?`<div class="journey-explorer">${art}</div>`:`<div class="journey-step-controls" role="group" aria-label="Explanation steps">${guide.steps.map((_,i)=>`<button type="button" data-journey-step="${i}" aria-pressed="${step===i}" aria-label="Explanation step ${i+1}">${i+1}</button>`).join('')}</div><div class="journey-illustration">${conceptPlayer(lesson,subject)}</div><aside class="journey-example"><h2>A concrete example</h2><p>${h(guide.example)}</p>${step===guide.steps.length-1?`<p><strong>Take this with you:</strong> ${h(guide.outcome)}</p>`:''}</aside>`}
 </div>${phase===2&&lesson.learningNotes?`<aside class="journey-example misconception-note"><h2>Watch for this</h2><p>${h(lesson.learningNotes.watchFor)}</p></aside>`:''}<details class="lesson-notes journey-reference"><summary>Open the written explanation</summary><div class="journey-example"><p>${h(guide.idea)}</p><ul>${lesson.foundation.terms.map(term=>`<li>${h(term)}</li>`).join('')}</ul><p>${h(guide.example)}</p></div></details><footer class="journey-footer"><p data-journey-hint role="status">${phase===0?'Make a prediction, then compare it with the example.':phase===1?'Change an input or advance the model. Explain what changed before continuing.':`Explanation ${step+1} of ${guide.steps.length}.`}</p><div>${phase>0?'<button type="button" class="btn secondary" data-journey-back>BACK</button>':''}${phase===2&&step<guide.steps.length-1?'<button type="button" class="btn primary" data-journey-explain>NEXT IDEA</button>':`<button type="button" class="btn primary" data-journey-next ${ready?'':'disabled'}>${phase===2?'START QUIZ':'CONTINUE'} ${icon('arrow')}</button>`}</div></footer></section>`;
}
export function mountJourney(dialog,lesson,subject,state,{render,persist,complete}){
 const root=dialog.querySelector('.learning-journey');if(!root)return;
 if(typeof state.prediction==='boolean'){const feedback=root.querySelector('[data-prediction-feedback]');if(feedback){feedback.hidden=false;feedback.textContent=state.prediction?'Your prediction matched the next state.':'You tried a prediction. Compare the states in the walkthrough.';}}
 mountConceptPlayers(root,lesson,subject);
 if(subject==='cn')mountCnLab(root,lesson);
 if(state.phase===1){
  const variant=root.querySelector('[data-algo-variant],.aptitude-lab input[type=range],.c-lab input[type=range],.ds-lab input[type=range],.cn-lab select,.cn-lab input[type=range]');
  if(variant){if(variant.tagName==='SELECT')variant.selectedIndex=Math.min(lesson.id%3,variant.options.length-1);else variant.value=Math.min(Number(variant.max),Number(variant.defaultValue||variant.value)+(lesson.id%3)*Number(variant.step||1));variant.dispatchEvent(new Event(variant.tagName==='SELECT'?'change':'input',{bubbles:true}));}
 }
 function explored(event){if(state.phase!==1||!event.target.closest('.journey-explorer')||!event.target.closest('button,input,select'))return;state.explored=true;root.querySelector('[data-journey-next]').disabled=false;root.querySelector('[data-journey-hint]').textContent='You changed the example. Notice the new state and its explanation, then continue.';persist();}
 // Capture the interaction before a final-step button disables itself while drawing.
 root.addEventListener('click',explored,true);
 root.addEventListener('input',explored);root.addEventListener('change',explored);root.addEventListener('click',event=>{
  const button=event.target.closest('button');if(!button||button.disabled)return;
  if(button.dataset.predictionAnswer!==undefined){state.prediction=button.dataset.predictionAnswer==='correct';const feedback=root.querySelector('[data-prediction-feedback]');feedback.hidden=false;feedback.textContent=state.prediction?'That matches the next state. Advance the example to check the transition.':'Compare the changed state with the current one. You can try another prediction, then inspect the walkthrough.';button.setAttribute('aria-pressed','true');root.querySelector('[data-journey-next]').disabled=false;persist();}
  else if(button.dataset.journeyCard!==undefined){state.card=Number(button.dataset.journeyCard);state.visited=[...new Set([...state.visited,state.card])];const term=lessonJourney(lesson,subject).terms[state.card];root.querySelector('.journey-definition').innerHTML=`<h2>${h(term.term)}</h2><p>${h(term.meaning)}</p>`;root.querySelectorAll('[data-journey-card]').forEach(b=>{b.setAttribute('aria-pressed',String(Number(b.dataset.journeyCard)===state.card));b.classList.toggle('visited',state.visited.includes(Number(b.dataset.journeyCard)));});}
  else if(button.dataset.journeyStep!==undefined){state.step=Number(button.dataset.journeyStep);render();}
  else if(button.hasAttribute('data-journey-explain')){state.step=Math.min(state.step+1,lessonJourney(lesson,subject).steps.length-1);render();}
  else if(button.hasAttribute('data-journey-back')){state.phase--;render();}
  else if(button.hasAttribute('data-journey-next')){if(state.phase===2){state.completed=true;complete();}else{state.phase++;render();}}
  else explored(event);
  persist();
 });
}
