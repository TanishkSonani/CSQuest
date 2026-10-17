import {escapeHtml as h} from '/shared/engine.js';

const steps=lesson=>lesson.dbmsScene?.length?lesson.dbmsScene:lesson.teachingSteps;
export function dbmsIllustration(lesson,active=0){
 const items=steps(lesson),index=Math.max(0,Math.min(items.length-1,active));
 return `<figure class="dbms-storyboard" aria-label="Visual explanation of ${h(lesson.foundation.title)}"><ol>${items.map((item,i)=>`<li class="${i===index?'is-active':''}" ${i===index?'aria-current="step"':''}><span class="dbms-node-number">${i+1}</span><p>${h(item)}</p></li>`).join('')}</ol><figcaption>${h(items[index])}</figcaption></figure>`;
}
export function dbmsLab(lesson){
 const items=steps(lesson);
 return `<section class="dbms-explorer" data-dbms-explorer><span class="tag green">EXPLORE · TRACE · EXPLAIN</span><h3>${h(lesson.foundation.title)}</h3><p>Move through the example. Each step reveals how the database rule changes what you should check.</p><div data-dbms-scene>${dbmsIllustration(lesson,0)}</div><label class="dbms-scrubber"><span>Example step <output data-dbms-count>1 / ${items.length}</output></span><input type="range" data-dbms-step min="0" max="${items.length-1}" value="0" aria-label="Explore database example step"></label><small>This example is separate from your quiz answers. Use the written explanation if you prefer reading.</small></section>`;
}
export function mountDbmsLab(root,lesson){
 const slider=root.querySelector('[data-dbms-step]');if(!slider)return;
 const output=root.querySelector('[data-dbms-count]'),scene=root.querySelector('[data-dbms-scene]');
 slider.addEventListener('input',()=>{
  const index=Number(slider.value);output.textContent=`${index+1} / ${steps(lesson).length}`;
  scene.innerHTML=dbmsIllustration(lesson,index);
  scene.querySelector('.dbms-storyboard')?.classList.add('dbms-step-change');
 });
}
