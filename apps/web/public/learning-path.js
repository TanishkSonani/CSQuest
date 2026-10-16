import {icon,mascot} from './icons.js';
import {available,escapeHtml as h} from '/shared/engine.js';
import {codingLabCard} from './ds-coding.js';

let observer,frame,visibilityController,visibilityFrame,jumpFrame,pendingJump=false;
const expressions=['welcome','thinking','happy','encouraging'];
const messages=['One bit at a time!','Curiosity looks good on you.','Small steps. Big ideas.','You have got this!'];
const cheers=new WeakMap();

export function cheerPathBuddy(button){
 const next=(Number(button.dataset.messageIndex)+1)%messages.length,figure=button.querySelector('.byte-mascot'),previous=cheers.get(button),restingState=previous?.state||figure.dataset.mascotState;
 clearTimeout(previous?.timer);button.dataset.messageIndex=String(next);button.querySelector('.path-sidekick-note').textContent=messages[next];button.setAttribute('aria-label',`Byte says: ${messages[next]}. Tap for encouragement.`);
 button.classList.remove('cheering');void button.offsetWidth;button.classList.add('cheering');figure.dataset.mascotState='celebrate';
 const timer=setTimeout(()=>{button.classList.remove('cheering');figure.dataset.mascotState=restingState;cheers.delete(button);},900);cheers.set(button,{state:restingState,timer});
}

export function learningPathView({unit,lessons,lecturePlans,progress,current}){
 const begin=unit.range[0]*3,topics=unit.range[1]-unit.range[0]+1;
 const groups=Array.from({length:topics},(_,topic)=>{
  const lecture=unit.range[0]+topic,ids=[0,1,2].map(n=>begin+topic*3+n),done=ids.filter(id=>progress.completed.includes(id)).length;
  const steps=ids.map((id,n)=>{
   const lesson=lessons.find(l=>l.id===id),title=lesson?.title||lecturePlans[lecture][n+1],completed=progress.completed.includes(id),unlocked=lesson?.ready&&available(id,lessons,progress),isCurrent=id===current?.id&&unlocked&&!completed;
   return `<div class="path-step ${n===1?'curve-turn':'curve-center'}"><button class="path-node ${completed?'complete':isCurrent?'current':unlocked?'available':'locked'} ${n===2?'checkpoint':''}" data-lesson="${id}" aria-label="${h(title)}${completed?', completed':!unlocked?', locked':''}" title="${h(title)}">${isCurrent?'<span class="start-bubble">START HERE</span>':''}<span class="node-face">${icon(completed?'check':n===2?'trophy':unlocked?'star':'lock')}</span></button><span class="node-title ${isCurrent?'current-title':''}">${h(title)}</span>${isCurrent?`<span class="node-meta">${lesson.minutes||3} MIN · EARN XP</span>`:''}</div>`;
  }).join('');
  return `<section class="path-topic ${topic%2?'bend-right':'bend-left'}" aria-label="${h(lecturePlans[lecture][0])}"><div class="path-divider"><span class="topic-number">${String(topic+1).padStart(2,'0')}</span><span>${h(lecturePlans[lecture][0])}</span><span class="topic-count ${done===3?'finished':''}">${done===3?icon('check'):`${done} / 3`}</span></div><div class="topic-path">${steps}<button type="button" class="path-sidekick" data-action="sidekick" data-message-index="${topic%messages.length}" aria-label="Byte says: ${h(messages[topic%messages.length])}. Tap for encouragement."><span class="buddy-spark spark-one" aria-hidden="true">✦</span><span class="buddy-spark spark-two" aria-hidden="true">✧</span><span class="path-sidekick-avatar">${mascot(expressions[topic%expressions.length])}</span><span class="path-sidekick-note">${h(messages[topic%messages.length])}</span></button></div>${topic<topics-1?`<div class="path-reward ${done===3?'earned':''}"><div class="chest-halo"><img class="chest-3d" src="/assets/chest-3d.svg" alt="${done===3?'Completed':'Upcoming'} topic treasure chest" width="128" height="116"></div><span>${done===3?'Topic complete. Look at you go!':'Three small wins. One big idea.'}</span></div>`:''}</section>`;
 }).join('');
 const done=progress.completed.filter(id=>id>=begin&&id<begin+topics*3).length;
 return `<div class="learning-path ${unit.color}">${groups}<div class="unit-finish">${icon('trophy')}<span class="page-eyebrow">YOUR NEXT MILESTONE</span><h3>${done===topics*3?'Foundation built!':'Keep your curiosity going.'}</h3><p>${h(unit.goal)}</p></div>${codingLabCard(unit,progress)}</div>${current&&!progress.completed.includes(current.id)?`<button type="button" class="jump-current btn primary" data-action="jump-current" aria-label="Scroll to your current lesson" hidden>${icon('arrow')} CURRENT LESSON</button>`:''}`;
}

export function clearLearningPath(){observer?.disconnect();visibilityController?.abort();cancelAnimationFrame(visibilityFrame);cancelAnimationFrame(frame);cancelAnimationFrame(jumpFrame);}

export function scrollToCurrentLesson(focus=false){
 const node=document.querySelector('.path-node.current');if(!node)return;
 const reduced=document.documentElement.dataset.motion==='reduced'||matchMedia('(prefers-reduced-motion: reduce)').matches;
 node.scrollIntoView({block:'center',behavior:focus&&!reduced?'smooth':'auto'});if(focus)node.focus({preventScroll:true});
}

export function decorateLearningPath({autoScroll=false}={}){
 clearLearningPath();
 const root=document.querySelector('.learning-path');if(!root)return;
 const groups=[...root.querySelectorAll('.topic-path')];
 const layout=()=>groups.forEach(group=>{
  const box=group.getBoundingClientRect(),middle=group.querySelectorAll('.path-node')[1].getBoundingClientRect();
  group.querySelector('.path-sidekick').style.setProperty('--sidekick-y',`${middle.top-box.top+middle.height/2}px`);
 });
 layout();observer=new ResizeObserver(()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(layout);});groups.forEach(group=>observer.observe(group));
 const current=root.querySelector('.path-node.current'),jump=document.querySelector('.jump-current');
 if(jump){
  if(!current)jump.hidden=false;
  else{
   // A large scroll can skip the node without crossing an intersection
   // threshold. Measure on scroll too so the return control still appears.
   visibilityController=new AbortController();
   const update=()=>{const box=current.getBoundingClientRect();jump.hidden=box.bottom>100;jump.classList.toggle('points-down',box.top>innerHeight/2);};
   const schedule=()=>{cancelAnimationFrame(visibilityFrame);visibilityFrame=requestAnimationFrame(update);};
   window.addEventListener('scroll',schedule,{passive:true,signal:visibilityController.signal});
   window.addEventListener('resize',schedule,{passive:true,signal:visibilityController.signal});update();
  }
 }
 // A hash change can render the same path again before the first frame runs.
 // Carry its scroll intent forward until the current node has been positioned.
 pendingJump=Boolean(current&&Number(current.dataset.lesson)>0&&(pendingJump||autoScroll));
 if(pendingJump)jumpFrame=requestAnimationFrame(()=>{jumpFrame=requestAnimationFrame(()=>{if(root.isConnected){scrollToCurrentLesson();pendingJump=false;}});});
}
