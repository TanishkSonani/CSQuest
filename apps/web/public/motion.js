// Motion communicates a change; repeated puzzle renders should stay still.
const ease='cubic-bezier(.22,1,.36,1)';
const rounds=new WeakMap();
let pageKey;
export const motionEnabled=()=>document.documentElement.dataset.motion!=='reduced'&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
function move(element,frames,options={}){
 if(!element||!motionEnabled()||typeof element.animate!=='function')return;
 return element.animate(frames,{duration:260,easing:ease,...options});
}
export function animatePage(root,key){
 if(!root||pageKey===key)return;pageKey=key;
 const blocks=[...root.children].filter(el=>!el.hidden).slice(0,7);
 blocks.forEach((el,i)=>move(el,[{opacity:0,translate:'0 10px'},{opacity:1,translate:'0 0'}],{delay:i*22,duration:320}));
 const grid=root.querySelector('.subject-grid,.practice-modes,.badge-grid');
 if(grid)[...grid.children].filter(el=>!el.hidden).slice(0,12).forEach((el,i)=>move(el,[{opacity:0,translate:'0 8px'},{opacity:1,translate:'0 0'}],{delay:60+i*24,duration:300}));
}
function puzzleState(root){
 const map=new Map();
 root.querySelectorAll('.exercise button,.bit-cells>span,.register strong').forEach((el,i)=>{
  const attrs=[...el.attributes].filter(a=>a.name.startsWith('data-')).map(a=>a.name+'='+a.value).join('|');
  map.set(attrs||el.tagName+':'+i,{element:el,signature:el.className+'|'+el.textContent});
 });return map;
}
export function animateRound(dialog,round){
 if(!dialog)return;
 const key=round.intro?'intro':`question:${round.index}`,previous=rounds.get(dialog),puzzle=puzzleState(dialog);
 if(!previous||previous.key!==key){
  move(dialog.querySelector('.lesson-intro,.challenge-content'),[{opacity:0,translate:'0 12px'},{opacity:1,translate:'0 0'}],{duration:320});
 }else if(round.feedback!==null&&previous.feedback===null){
  move(dialog.querySelector('.feedback'),[{opacity:0,translate:'0 10px'},{opacity:1,translate:'0 0'}]);
  move(dialog.querySelector('.feedback-symbol'),[{scale:'.75'},{scale:'1.08',offset:.65},{scale:'1'}],{duration:340});
 }else if(round.feedback===null){
  for(const [id,item] of puzzle)if(previous.puzzle.get(id)?.signature!==item.signature&&previous.puzzle.has(id)){
   move(item.element,[{scale:'.97'},{scale:'1'}],{duration:190});
  }
  for(const selector of ['.coach-answer','.concept-hint','.source-excerpt'])if(dialog.querySelector(selector)&&!previous.panels.includes(selector)){
   move(dialog.querySelector(selector),[{opacity:0,translate:'0 -5px'},{opacity:1,translate:'0 0'}]);
  }
 }
 const progress=round.cleared.size/round.total,fill=dialog.querySelector('.lesson-progress>div');
 if(fill&&progress>0&&previous&&progress!==previous.progress){
  fill.style.transformOrigin='left center';move(fill,[{scale:`${previous.progress/progress} 1`},{scale:'1 1'}],{duration:380});
 }
 rounds.set(dialog,{key,feedback:round.feedback,puzzle,progress,panels:['.coach-answer','.concept-hint','.source-excerpt'].filter(s=>dialog.querySelector(s))});
}
export function animateCelebration(dialog){
 move(dialog.querySelector('.celebration h1'),[{opacity:0,translate:'0 12px'},{opacity:1,translate:'0 0'}],{duration:400});
 dialog.querySelectorAll('.result-stats>div,.earned-notice').forEach((el,i)=>move(el,[{opacity:0,translate:'0 12px',scale:'.96'},{opacity:1,translate:'0 0',scale:'1'}],{delay:100+i*90,duration:420}));
 move(dialog.querySelector('.celebration>.mascot'),[{scale:'.9'},{scale:'1.04',offset:.65},{scale:'1'}],{duration:500});
}
// A preference change also stops animations that were already running.
function stopIfReduced(){if(!motionEnabled())document.getAnimations().forEach(animation=>{try{animation.finish();}catch{animation.cancel();}});}
new MutationObserver(stopIfReduced).observe(document.documentElement,{attributes:true,attributeFilter:['data-motion']});
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',stopIfReduced);
