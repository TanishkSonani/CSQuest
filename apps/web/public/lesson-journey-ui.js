import {lessonJourney} from '/shared/lesson-journey.js';
import {escapeHtml as h} from '/shared/engine.js';
import {icon} from './icons.js';
import {topicDiagram,walkthroughDiagram} from './lesson-visuals.js';
import {aptitudeLab} from './aptitude-labs.js';
import {cLab} from './c-labs.js';
import {dsLab} from './ds-labs.js';
import {algoLab} from './algo-labs.js';
import {osLab} from './os-labs.js';
import {dbmsLab,mountDbmsLab} from './dbms-labs.js';
import {cnLab,mountCnLab} from './cn-labs.js';
import {diagramKind,diagramControls} from '/shared/visual-models.js';

export function beginnerBridge(lesson,subject){const guide=lessonJourney(lesson,subject);return `<aside class="beginner-bridge"><h4>Before the notation</h4><dl>${guide.terms.map(({term,meaning})=>`<div><dt>${h(term)}</dt><dd>${h(meaning)}</dd></div>`).join('')}</dl></aside>`;}
export function journeyView(lesson,subject,state){
 const guide=lessonJourney(lesson,subject),phase=state.phase,term=guide.terms[Math.min(state.card,guide.terms.length-1)],step=Math.min(state.step,guide.steps.length-1);
 const ready=phase===0?state.visited.length>0:phase===1?state.explored:step===guide.steps.length-1;
 const explorer=phase===1?(aptitudeLab(lesson)||cLab(lesson)||dsLab(lesson)||algoLab(lesson)||osLab(lesson)||cnLab(lesson)||dbmsLab(lesson)):'';
 const traceOnly=phase===1&&!explorer&&diagramControls(diagramKind(subject,lesson)).length===0;
 const art=phase===0?topicDiagram(lesson,subject,true):phase===1?(explorer||(traceOnly?`<div class="journey-trace-art">${walkthroughDiagram(lesson,subject,state.trace||0)}</div><button type="button" class="btn secondary" data-journey-trace>FOCUS NEXT PART ${icon('arrow')}</button>`:topicDiagram(lesson,subject))):walkthroughDiagram(lesson,subject,step);
 return `<section class="learning-journey" data-journey-phase="${phase}"><nav class="journey-stages" aria-label="Learning stages">${['Meet the idea','Explore it','Connect the steps'].map((label,i)=>`<span class="${i===phase?'current':i<phase?'done':''}" ${i===phase?'aria-current="step"':''}>${i<phase?icon('check'):`<b>${i+1}</b>`}${label}</span>`).join('')}</nav><div class="journey-frame"><span class="page-eyebrow">LEARN BY DOING · ${h(lesson.title)}</span><h1 tabindex="-1">${['Start with one clear idea.','Try it. Watch what changes.','Build the explanation.'][phase]}</h1><p class="journey-lead">${h(phase===0?guide.idea.split(/(?<=[.!?])\s+/)[0]:phase===1?'This is a safe example to explore. Nothing here costs hearts or changes your quiz answers.':guide.steps[step])}</p>
 ${phase===0?`<div class="journey-term-tabs" role="group" aria-label="Tap a building block">${guide.terms.map((t,i)=>`<button type="button" data-journey-card="${i}" aria-pressed="${state.card===i}" class="${state.visited.includes(i)?'visited':''}">${h(t.term)}${state.visited.includes(i)?icon('check'):''}</button>`).join('')}</div><div class="journey-definition" aria-live="polite"><h2>${h(term.term)}</h2><p>${h(term.meaning)}</p></div><div class="journey-illustration">${art}</div>`:phase===1?`<div class="journey-explorer">${art}</div>`:`<div class="journey-step-controls" role="group" aria-label="Explanation steps">${guide.steps.map((_,i)=>`<button type="button" data-journey-step="${i}" aria-pressed="${step===i}" aria-label="Explanation step ${i+1}">${i+1}</button>`).join('')}</div><div class="journey-illustration">${art}</div><aside class="journey-example"><h2>A concrete example</h2><p>${h(guide.example)}</p>${step===guide.steps.length-1?`<p><strong>Take this with you:</strong> ${h(guide.outcome)}</p>`:''}</aside>`}
 </div><details class="lesson-notes journey-reference"><summary>Open the written explanation</summary><div class="journey-example"><p>${h(guide.idea)}</p><ul>${lesson.foundation.terms.map(term=>`<li>${h(term)}</li>`).join('')}</ul><p>${h(guide.example)}</p></div></details><footer class="journey-footer"><p data-journey-hint role="status">${phase===0?'Tap a building block to see its meaning.':phase===1?'Change an input, take a visual step, or replay the example.':`Explanation ${step+1} of ${guide.steps.length}.`}</p><div>${phase>0?'<button type="button" class="btn secondary" data-journey-back>BACK</button>':''}${phase===2&&step<guide.steps.length-1?'<button type="button" class="btn primary" data-journey-explain>NEXT IDEA</button>':`<button type="button" class="btn primary" data-journey-next ${ready?'':'disabled'}>${phase===2?'START QUIZ':'CONTINUE'} ${icon('arrow')}</button>`}</div></footer></section>`;
}
export function mountJourney(dialog,lesson,subject,state,{render,persist,complete}){
 const root=dialog.querySelector('.learning-journey');if(!root)return;
 if(subject==='dbms')mountDbmsLab(root,lesson);
 if(subject==='cn')mountCnLab(root,lesson);
 if(state.phase===1){
  const variant=root.querySelector('[data-algo-variant],.journey-explorer select,.journey-explorer input[type=range]');
  if(variant){if(variant.tagName==='SELECT')variant.selectedIndex=Math.min(lesson.id%3,variant.options.length-1);else variant.value=Math.min(Number(variant.max),Number(variant.defaultValue||variant.value)+(lesson.id%3)*Number(variant.step||1));variant.dispatchEvent(new Event(variant.tagName==='SELECT'?'change':'input',{bubbles:true}));}
 }
 function explored(event){if(state.phase!==1||!event.target.closest('.journey-explorer')||!event.target.closest('button,input,select'))return;state.explored=true;root.querySelector('[data-journey-next]').disabled=false;root.querySelector('[data-journey-hint]').textContent='You changed the example. Notice the new state and its explanation, then continue.';persist();}
 root.addEventListener('input',explored);root.addEventListener('change',explored);root.addEventListener('click',event=>{
  const button=event.target.closest('button');if(!button||button.disabled)return;
  if(button.dataset.journeyCard!==undefined){state.card=Number(button.dataset.journeyCard);state.visited=[...new Set([...state.visited,state.card])];render();}
  else if(button.hasAttribute('data-journey-trace')){state.trace=((state.trace||0)+1)%20;root.querySelector('.journey-trace-art').innerHTML=walkthroughDiagram(lesson,subject,state.trace);explored(event);}
  else if(button.dataset.journeyStep!==undefined){state.step=Number(button.dataset.journeyStep);render();}
  else if(button.hasAttribute('data-journey-explain')){state.step=Math.min(state.step+1,lessonJourney(lesson,subject).steps.length-1);render();}
  else if(button.hasAttribute('data-journey-back')){state.phase--;render();}
  else if(button.hasAttribute('data-journey-next')){if(state.phase===2){state.completed=true;complete();}else{state.phase++;render();}}
  else explored(event);
  persist();
 });
}
