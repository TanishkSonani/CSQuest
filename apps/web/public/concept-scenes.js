import {escapeHtml as h} from '/shared/engine.js';
import {diagramKind,diagramModel,diagramControls} from '/shared/visual-models.js';
import {dsModel} from '/shared/ds-models.js';
import {algoModel} from '/shared/algo-models.js';
import {osTrace,databaseTrace,networkTrace,dfaTrace,compilerTrace} from '/shared/teaching-models.js';
import {cModel} from './c-labs.js';
import {dsArt} from './ds-labs.js';
import {algoArt} from './algo-labs.js';
import {aptitudeScenes} from './aptitude-labs.js';
import {modelMarkup} from './lesson-visuals.js';

const sequence=(title,frames,assumptions='Separate, ungraded example. Step through the states; no quiz answers or progress are changed.')=>({title,frames,assumptions});
function experimentFor(lesson,subject){
 if(subject==='toc')return {label:'Binary input',type:'text',value:'1011'};
 if(subject==='cd')return {label:'Source expression',type:'text',value:'total = count + 2;'};
 if(subject==='os'){
  if(['schedule','states'].includes(lesson.osLab))return {label:'Round-robin quantum (time units)',type:'number',min:1,max:8,value:2};
  if(lesson.osLab==='fork')return {label:'Successive successful fork calls',type:'number',min:1,max:4,value:2};
  if(lesson.osLab==='semaphore')return {label:'Initial semaphore permits',type:'number',min:1,max:8,value:2};
  if(/paging|segment|tlb|memory/.test(lesson.osLab))return {label:'Address example seed',type:'number',min:1,max:8,value:2};
  if(/race|critical|peterson|atomic|semaphore|producer|classic|ipc/.test(lesson.osLab))return {label:'Initial shared counter',type:'number',min:1,max:8,value:3};
 }
 if(subject==='dbms'){
  if(/transaction|concurrency/.test(lesson.dbmsLab))return {label:'Initial shared value',type:'number',min:1,max:8,value:3};
  if(!/normal|dependenc|key|index|storage|file|disk|space|er|entity/.test(lesson.dbmsLab))return {label:'Minimum score in WHERE clause',type:'number',min:0,max:25,value:15};
 }
 return null;
}
export function lessonScene(lesson,subject,value){
 value??=experimentFor(lesson,subject)?.value??2;
 if(subject==='toc'){
  const input=typeof value==='string'?value:'1011',trace=dfaTrace(input);
  trace.frames.forEach((f,i)=>{f.dfa={input,position:Math.min(input.length,Math.max(0,i)),odd:[...input.slice(0,i)].filter(c=>c==='1').length%2};});
  return sequence('A DFA that remembers parity',trace.frames,trace.language);
 }
 if(subject==='cd')return sequence('From characters to tokens',compilerTrace(typeof value==='string'?value:'total = count + 2;').frames,'A toy expression lexer with identifiers, integers, operators and delimiters. This is a concept preview, not a complete C compiler. Character spans are zero-based and end-exclusive.');
 if(subject==='os')return sequence('A small operating-system experiment',osTrace(lesson.osLab,value),'Deterministic educational model. Stated arrivals, sizes and atomicity assumptions govern this example; no real processes are executed.');
 if(subject==='dbms')return sequence('Follow the database operation',databaseTrace(lesson.dbmsLab+' '+lesson.foundation.title,value),'Small in-memory relation, separate from your account database. The stages illustrate logical operations, not a physical optimizer plan.');
 if(subject==='cn'){
  return sequence('Follow the protocol state',networkTrace(lesson.cnLab,value),'Deterministic logical protocol example. The assumptions in each caption distinguish it from physical transmission and protocol variants. Use the topic lab to vary its inputs.');
 }
 const kind=diagramKind(subject,lesson);
 if(subject==='c'&&kind.startsWith('c:')){
  const defaults={matrix:0,endian:0,array:1},model=cModel(lesson.cLab,lesson.cLab==='string'?'cat':defaults[lesson.cLab]??3,lesson.cLab==='matrix'?1:0);
  if(model.steps.length===1){
   const inputs={array:[0,1,4],matrix:[0,1],string:['cat','code',''],endian:[0,1],struct:[2,5],bits:[0,5,255]}[lesson.cLab];
   if(inputs)return sequence('Compare C input cases',inputs.map(value=>{const m=cModel(lesson.cLab,value,lesson.cLab==='matrix'?1:0),s=m.steps[0];return {title:`${lesson.cLab} input ${JSON.stringify(value)}`,art:s[1].replace(/<button\b[^>]*>/g,'<span>').replaceAll('</button>','</span>'),caption:`Input ${JSON.stringify(value)}: ${s[2]}`,code:m.code.join('\n'),line:-1};}),'Compare the labeled inputs under the same stated C representation and valid-access assumptions. The one-past boundary has no accessible element.');
  }
  const lines={variables:[0,1,2,3],branch:[1,2],loop:[0,2,2,2,2,1],calls:[1,2,0,2],recursion:[0,2,2,1,2,2,2],pointer:[0,1,2,3,4],double:[1,2,3],heap:[0,2,3,4]};
  return sequence('Trace the C state',model.steps.map((s,i)=>({title:s[0],art:s[1].replace(/<button\b[^>]*>/g,'<span>').replaceAll('</button>','</span>'),caption:s[2],code:model.code.join('\n'),line:lines[lesson.cLab]?.[i]??-1})),'The highlighted line, when present, corresponds to the displayed state. Conceptual cells are not implementation-guaranteed addresses; read the stated sizes and valid-access assumptions.');
 }
 if(subject==='ds'){const model=dsModel(lesson.dsLab,4),steps=model.steps.length===1?[3,4,6].map(n=>{const s=dsModel(lesson.dsLab,n).steps[0];return {...s,title:`Input parameter ${n}`,caption:`Input parameter ${n}: ${s.caption}`};}):model.steps;return sequence('Watch the structure change',steps.map(s=>({title:s.title,art:dsArt(s.art),caption:s.caption})),'A small deterministic input. Growth plots show theoretical samples, not measured runtime or a proof of an eventual bound.');}
 if(subject==='algo'){const model=algoModel(lesson.algoLab,0);return sequence('Follow the algorithm',model.steps.map(s=>({title:s.title,art:algoArt(s.art),caption:s.caption})),'A separate small input. Each frame is an algorithm state, not an elapsed-time measurement.');}
 if(subject==='aptitude')return sequence('Compare concrete cases',aptitudeScenes(lesson),'The same rule applied to labeled input cases. Use the explorer to vary the inputs between these cases.');
 const controls=diagramControls(kind);
 if(controls.length){
  const first=controls[0],values=[...new Set([first[1],first[4],first[2]])].sort((a,b)=>a-b);
  return sequence('Change one input; compare the result',values.map(value=>{const args=controls.map(c=>c[4]);args[0]=value;const model=diagramModel(kind,...args);return {title:`${first[0]} = ${value}`,art:modelMarkup(model),caption:model.caption};}),'Only the labeled first input varies; other inputs stay at their displayed defaults. These are settled logical results, not a physical timing simulation.');
 }
 const model=diagramModel(kind);
 if(['flow','cycle'].includes(model.type))return sequence(model.title,model.labels.map((label,i)=>({title:label,art:modelMarkup({...model,labels:model.labels.slice(0,i+1),index:i}),caption:`Step ${i+1}: ${label}. ${model.caption}`})));
 if(model.type==='table'||model.type==='kmap')return sequence(model.title,model.rows.map((row,i)=>({title:`Inspect ${row[0]}`,art:modelMarkup({...model,selected:i}),caption:row.map((v,j)=>`${model.headers[j]}: ${v}`).join('; ')+'. '+model.caption})));
 if(model.labels)return sequence(model.title,model.labels.map((label,i)=>({title:label,art:modelMarkup({...model,index:i}),caption:`${label}: ${model.values?.[i]??''}. ${model.caption}`})));
 return sequence(model.title,[{title:model.title,art:modelMarkup(model),caption:model.caption}]);
}

export function frameMarkup(frame){
 const diagram=frame.dfa?`<svg class="dfa-diagram" viewBox="0 0 420 150" role="img" aria-label="Current state q${frame.dfa.odd?'Odd':'Even'}, consumed ${frame.dfa.position} symbols"><path d="M20 75H85m-10-7 10 7-10 7M165 48Q210 0 255 48M255 102Q210 150 165 102"/><circle cx="125" cy="75" r="40" class="${frame.dfa.odd?'':'current-state'}"/><circle cx="125" cy="75" r="33"/><circle cx="295" cy="75" r="40" class="${frame.dfa.odd?'current-state':''}"/><text x="125" y="81" text-anchor="middle">qEven</text><text x="295" y="81" text-anchor="middle">qOdd</text><text x="210" y="24">1 →</text><text x="190" y="142">← 1</text><text x="102" y="16">0: stay</text><text x="272" y="16">0: stay</text></svg><p class="scene-input"><strong>Consumed:</strong> ${h(frame.dfa.input.slice(0,frame.dfa.position)||'ε')} <strong>Remaining:</strong> ${h(frame.dfa.input.slice(frame.dfa.position)||'ε')}</p>`:'';
 const source=frame.source?`<pre class="scene-source"><code>${h(frame.source.slice(0,frame.span[0]))}<mark>${h(frame.source.slice(...frame.span))}</mark>${h(frame.source.slice(frame.span[1]))}</code></pre>`:frame.code?`<pre class="scene-source"><code>${frame.code.split('\n').map((line,i)=>`<span class="${i===frame.line?'source-current':''}">${h(line)}</span>`).join('\n')}</code></pre>`:'';
 const timeline=frame.timeline?`<div class="scene-timeline" role="img" aria-label="${h(frame.timeline.map(t=>`${t.id} ${t.start} to ${t.end}`).join('; '))}">${frame.timeline.map(slot=>`<span style="flex:${slot.end-slot.start}"><b>${h(slot.id)}</b><small>${slot.start}–${slot.end}</small></span>`).join('')}</div>`:'';
 const table=frame.headers?`<div class="visual-table-wrap"><table><thead><tr>${frame.headers.map(c=>`<th scope="col">${h(c)}</th>`).join('')}</tr></thead><tbody>${frame.rows.length?frame.rows.map((row,i)=>`<tr class="${i===frame.focus?'visual-active':''}">${row.map(v=>`<td>${h(String(v))}</td>`).join('')}</tr>`).join(''):`<tr><td colspan="${frame.headers.length}">No matching rows</td></tr>`}</tbody></table></div>`:'';
 return `${source}${diagram}${timeline}${frame.art||table}`;
}

export function predictionMarkup(lesson,subject){
 const scene=lessonScene(lesson,subject),frames=scene.frames,first=frames[0],target=frames[1]||first;
 const choices=[target.caption,...frames.filter(f=>f.caption!==target.caption).map(f=>f.caption)].filter((v,i,a)=>a.indexOf(v)===i).slice(0,3);
 // A one-state model becomes a model-specific comparison, never a pretend replay.
 if(choices.length===1)choices.push('This result is guaranteed for every input, with no assumptions or exceptions.');
 const rotation=lesson.id%choices.length,ordered=[...choices.slice(rotation),...choices.slice(0,rotation)];
 return `<section class="concept-prediction"><h2>Predict before you step</h2><p>${frames.length>1?`The example is at “${h(first.title)}”. Next: “${h(target.title)}”. Which description will match that state?`:'Which statement follows from this example?'}</p><div class="prediction-state">${frameMarkup(first)}</div><div class="prediction-answers" role="group" aria-label="Predict the next state">${ordered.map(c=>`<button type="button" class="choice" data-prediction-answer="${c===target.caption?'correct':'try'}">${h(c)}</button>`).join('')}</div><p data-prediction-feedback role="status" hidden></p><small>This is a separate example. Trying a prediction costs no hearts and earns no XP.</small></section>`;
}

export function conceptPlayer(lesson,subject){
 const scene=lessonScene(lesson,subject),experiment=experimentFor(lesson,subject);
 return `<section class="concept-player" data-concept-player data-scene-subject="${h(subject)}"><header><span class="tag green">VISUAL WALKTHROUGH</span><h3>${h(scene.title)}</h3><p>${h(scene.assumptions)}</p></header>${experiment?`<form class="scene-experiment"><label>${h(experiment.label)}<input data-scene-input type="${experiment.type}" ${experiment.type==='number'?`min="${experiment.min}" max="${experiment.max}"`:'maxlength="40"'} value="${h(String(experiment.value))}"></label><button type="submit" class="btn secondary">RUN EXAMPLE</button><p role="alert" data-scene-error></p></form>`:''}<h4 data-scene-title>${h(scene.frames[0].title)}</h4><div class="scene-stage" data-scene-art>${frameMarkup(scene.frames[0])}</div><p class="scene-caption" data-scene-caption aria-live="polite">${h(scene.frames[0].caption)}</p>${scene.frames.length>1?`<label class="scene-seek">Example position <output data-scene-count>1 / ${scene.frames.length}</output><input type="range" data-scene-position min="0" max="${scene.frames.length-1}" value="0" aria-label="Visual example position"></label><div class="scene-controls"><button type="button" class="btn secondary" data-scene-back disabled>PREVIOUS</button><button type="button" class="btn secondary" data-scene-next>NEXT STEP</button><button type="button" class="text-button" data-scene-play aria-pressed="false">${reduced()?'STEP ONCE':'PLAY'}</button><button type="button" class="text-button" data-scene-restart>RESTART</button><label>Speed<select data-scene-speed aria-label="Playback speed"><option value="2400">Slow</option><option value="1600" selected>Normal</option><option value="900">Fast</option></select></label></div>`:'<p class="muted">One-state example. Change an input in the explorer to compare another case.</p>'}</section>`;
}

const players=new Map();
function reduced(){return matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.dataset.motion==='reduced';}
function stop(root){const item=players.get(root);if(!item)return;clearTimeout(item.timer);item.timer=null;const button=root.querySelector('[data-scene-play]');if(button){const label=reduced()?'STEP ONCE':'PLAY';if(button.textContent!==label)button.textContent=label;if(button.getAttribute('aria-pressed')!=='false')button.setAttribute('aria-pressed','false');}}
export function mountConceptPlayers(container,lesson,subject){
 container.querySelectorAll('[data-concept-player]').forEach(root=>{
  if(players.has(root))return;
  const item={scene:lessonScene(lesson,subject),index:0,timer:null};players.set(root,item);
  const draw=()=>{const f=item.scene.frames[item.index];root.querySelector('[data-scene-title]').textContent=f.title;root.querySelector('[data-scene-art]').innerHTML=frameMarkup(f);root.querySelector('[data-scene-caption]').textContent=f.caption;const slider=root.querySelector('[data-scene-position]');if(slider){slider.max=item.scene.frames.length-1;slider.value=item.index;root.querySelector('[data-scene-count]').textContent=`${item.index+1} / ${item.scene.frames.length}`;root.querySelector('[data-scene-back]').disabled=item.index===0;root.querySelector('[data-scene-next]').disabled=item.index===item.scene.frames.length-1;}};
  const play=()=>{stop(root);if(!root.isConnected||document.hidden||reduced())return;if(item.index>=item.scene.frames.length-1)return;root.querySelector('[data-scene-play]').textContent='PAUSE';root.querySelector('[data-scene-play]').setAttribute('aria-pressed','true');item.timer=setTimeout(()=>{item.index++;draw();play();},Number(root.querySelector('[data-scene-speed]').value));};
  root.addEventListener('click',event=>{const b=event.target.closest('button');if(!b||b.disabled)return;if(b.hasAttribute('data-scene-play')){if(item.timer)stop(root);else{if(item.index===item.scene.frames.length-1){item.index=0;draw();}if(reduced()){item.index=Math.min(item.index+1,item.scene.frames.length-1);draw();}else play();}return;}if(b.matches('[data-scene-next],[data-scene-back],[data-scene-restart]')){stop(root);item.index=b.hasAttribute('data-scene-restart')?0:Math.max(0,Math.min(item.scene.frames.length-1,item.index+(b.hasAttribute('data-scene-back')?-1:1)));draw();}});
  root.addEventListener('input',event=>{if(event.target.hasAttribute('data-scene-position')){stop(root);item.index=Number(event.target.value);draw();}});
  root.addEventListener('change',event=>{if(event.target.hasAttribute('data-scene-speed')&&item.timer)play();});
  root.querySelector('form')?.addEventListener('submit',event=>{event.preventDefault();stop(root);const input=root.querySelector('[data-scene-input]');try{const value=input.type==='number'?Number(input.value):input.value;if(input.type==='number'&&(!Number.isInteger(value)||value<Number(input.min)||value>Number(input.max)))throw Error(`Choose an integer from ${input.min} to ${input.max}.`);item.scene=lessonScene(lesson,subject,value);item.index=0;root.querySelector('[data-scene-error]').textContent='';draw();}catch(error){root.querySelector('[data-scene-error]').textContent=error.message;}});
  draw();
 });
}
// One lifecycle observer owns timers. Detached lessons, background tabs and motion
// preference changes stop immediately, rather than retaining old lesson closures.
new MutationObserver(records=>{const preferenceChanged=records.some(record=>record.attributeName==='data-motion');for(const root of players.keys()){if(!root.isConnected){stop(root);players.delete(root);}else if(reduced()||preferenceChanged)stop(root);}}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['data-motion']});
document.addEventListener('visibilitychange',()=>{if(document.hidden)for(const root of players.keys())stop(root);});
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',()=>{for(const root of players.keys())stop(root);});
