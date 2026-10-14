import {algoModel} from '/shared/algo-models.js';
import {escapeHtml as h} from '/shared/engine.js';

export function algoArt(art){
 if(art.type==='array')return `<div class="algo-array" role="list" aria-label="Array keys with zero-based indices">${art.values.map((v,i)=>`<div role="listitem" class="algo-cell ${art.active.includes(i)?'algo-active':''} ${art.low!==undefined&&(i<art.low||i>art.high)?'algo-discarded':''}"><small>index ${i}</small><strong>${h(v)}</strong><span>${art.pivot===v?'pivot':'key'}</span></div>`).join('')}</div>`;
 if(art.type==='rows')return `<div class="algo-table-scroll" tabindex="0" aria-label="Example data table"><table><thead><tr>${art.headers.map(v=>`<th scope="col">${h(v)}</th>`).join('')}</tr></thead><tbody>${art.rows.map(row=>`<tr>${row.map(v=>`<td>${h(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
 if(art.type==='flow')return `<ol class="algo-flow">${art.labels.map((v,i)=>`<li class="${art.active===i?'algo-active':''}"><small>STEP ${i+1}</small><strong>${h(v)}</strong></li>`).join('')}</ol>`;
 if(art.type==='bars'){
  const max=Math.max(...art.values);return `<div class="algo-bars">${art.values.map((v,i)=>`<div><span>${h(art.labels[i])}</span><div><i style="--algo-width:${v/max*100}%"></i></div><strong>${h(v)}</strong></div>`).join('')}</div><small>Linear scale; the widest bar is the largest count in this frame.</small>`;
 }
 if(art.type==='network'){
  const positions=new Map(art.nodes.map((node,i)=>[node.id,[i===4?345:80+(i%2)*150,i===4?110:55+Math.floor(i/2)*110]]));
  return `<svg class="algo-network" viewBox="0 0 400 220" role="img" aria-label="Graph exploration: ${h(art.nodes.map(n=>n.id+' '+n.state).join(', '))}"><title>Undirected graph. Green means discovered; filled nodes are finished; the outline marks the active vertex.</title>${art.edges.map(([u,v])=>`<path d="M${positions.get(u).join(' ')}L${positions.get(v).join(' ')}"/>`).join('')}${art.nodes.map(({id,state})=>{const [x,y]=positions.get(id);return `<g class="algo-vertex ${h(state)} ${id===art.active?'algo-current':''}"><circle cx="${x}" cy="${y}" r="24"/><text x="${x}" y="${y+6}" text-anchor="middle">${h(id)}</text><text class="algo-node-state" x="${x}" y="${y+43}" text-anchor="middle">${h(state)}</text></g>`;}).join('')}</svg><div class="algo-stack"><span>ACTIVE CALLS</span>${art.stack.map(v=>`<b>${h(v)}</b>`).join('')||'<b>empty</b>'}</div>`;
 }
 if(art.type==='points'){
  const X=x=>35+x*34,Y=y=>215-y*23;return `<svg class="algo-points" viewBox="0 0 390 250" role="img" aria-label="Closest pair example: points (4,4) and (5,4) span the split line"><title>Points split at x=4.5. A highlighted strip contains potential crossing pairs.</title><path class="algo-axis" d="M35 15V215H370"/>${art.strip?`<rect class="algo-strip" x="${X(art.split-art.strip/2)}" y="15" width="${art.strip*34}" height="200"/>`:''}<path class="algo-split" d="M${X(art.split)} 15V215"/>${art.points.map(([x,y],i)=>`<g class="${art.active.includes(i)?'algo-active-point':''}"><circle cx="${X(x)}" cy="${Y(y)}" r="7"/><text x="${X(x)}" y="${Y(y)-13}" text-anchor="middle">${x},${y}</text></g>`).join('')}<text x="350" y="240">x</text><text x="15" y="20">y</text></svg>`;
 }
 throw Error('Unknown Algorithms art '+art.type);
}
export function algoIllustration(lesson){const step=algoModel(lesson.algoLab).steps[0];return {art:algoArt(step.art),text:step.caption};}
export function algoGiven(q){if(!q.algoGiven)return '';return `<figure class="algo-given"><figcaption>INPUT FOR THIS PUZZLE</figcaption>${algoArt({type:'rows',...q.algoGiven})}<small>These are the inputs. Apply the rule in the question to find the answer.</small></figure>`;}
export function algoLab(lesson){
 if(!lesson.algoLab)return '';const model=algoModel(lesson.algoLab),step=model.steps[0],variants=JSON.stringify(model)!==JSON.stringify(algoModel(lesson.algoLab,1))||JSON.stringify(model)!==JSON.stringify(algoModel(lesson.algoLab,2));
 return `<section class="algo-lab" data-algo-lab="${h(lesson.algoLab)}" data-algo-step="0"><span class="tag green">EXPLORE · TRACE · EXPLAIN</span><h3>${h(lesson.foundation.title)}</h3><p>Try a small example. Move one step at a time, or play the trace.</p><label class="algo-variant" ${variants?'':'hidden'}>Example <output>1</output><input type="range" min="0" max="2" value="0" data-algo-variant aria-label="Example variant"></label><div class="algo-stage"><h4>${h(step.title)}</h4><div class="algo-art">${algoArt(step.art)}</div><p class="algo-insight" aria-live="polite">${h(step.caption)}</p></div><div class="algo-playback"><button type="button" class="btn secondary" data-algo-action="back" aria-label="Previous algorithm step" disabled>BACK</button><button type="button" class="btn primary" data-algo-action="next">NEXT STEP</button><button type="button" class="text-button" data-algo-action="play" aria-pressed="false">PLAY</button><button type="button" class="text-button" data-algo-action="reset">RESET</button></div><label class="algo-scrubber">Trace step <output data-algo-count>1 / ${model.steps.length}</output><input type="range" min="0" max="${model.steps.length-1}" value="0" data-algo-scrub aria-label="Trace step"></label><small>State changes have text explanations as well as color. This explorer does not change your puzzle answers.</small></section>`;
}
const timers=new Map();
function stop(root){clearTimeout(timers.get(root));timers.delete(root);const button=root.querySelector('[data-algo-action=play]');if(button){button.textContent='PLAY';button.setAttribute('aria-pressed','false');}}
function redraw(root){
 const model=algoModel(root.dataset.algoLab,Number(root.querySelector('[data-algo-variant]').value)),index=Math.max(0,Math.min(Number(root.dataset.algoStep),model.steps.length-1)),step=model.steps[index];root.dataset.algoStep=index;
 root.querySelector('.algo-stage h4').textContent=step.title;root.querySelector('.algo-art').innerHTML=algoArt(step.art);root.querySelector('.algo-insight').textContent=step.caption;root.querySelector('[data-algo-count]').textContent=`${index+1} / ${model.steps.length}`;
 const scrub=root.querySelector('[data-algo-scrub]');scrub.max=model.steps.length-1;scrub.value=index;root.querySelector('[data-algo-action=back]').disabled=index===0;root.querySelector('[data-algo-action=next]').textContent=index===model.steps.length-1?'REPLAY':'NEXT STEP';
}
function advance(root){const model=algoModel(root.dataset.algoLab,Number(root.querySelector('[data-algo-variant]').value));root.dataset.algoStep=(Number(root.dataset.algoStep)+1)%model.steps.length;redraw(root);}
function schedule(root){timers.set(root,setTimeout(()=>{if(!root.isConnected||document.hidden){stop(root);return;}advance(root);if(Number(root.dataset.algoStep)===algoModel(root.dataset.algoLab,Number(root.querySelector('[data-algo-variant]').value)).steps.length-1){stop(root);return;}schedule(root);},1600));}
document.addEventListener('click',e=>{
 const button=e.target.closest('[data-algo-action]');if(!button)return;const root=button.closest('[data-algo-lab]'),action=button.dataset.algoAction;
 if(action==='play'){if(timers.has(root)){stop(root);return;}const model=algoModel(root.dataset.algoLab,Number(root.querySelector('[data-algo-variant]').value));if(Number(root.dataset.algoStep)===model.steps.length-1){root.dataset.algoStep=0;redraw(root);}button.textContent='PAUSE';button.setAttribute('aria-pressed','true');schedule(root);}
 else{stop(root);if(action==='next')advance(root);else{root.dataset.algoStep=action==='reset'?0:Math.max(0,Number(root.dataset.algoStep)-1);redraw(root);}}
 document.dispatchEvent(new Event('algo-interaction'));
});
document.addEventListener('input',e=>{const control=e.target.closest('[data-algo-variant],[data-algo-scrub]');if(!control)return;const root=control.closest('[data-algo-lab]');stop(root);if(control.hasAttribute('data-algo-variant')){root.dataset.algoStep=0;control.closest('label').querySelector('output').textContent=Number(control.value)+1;}else root.dataset.algoStep=control.value;redraw(root);});
document.addEventListener('visibilitychange',()=>{if(document.hidden)for(const root of timers.keys())stop(root);});
