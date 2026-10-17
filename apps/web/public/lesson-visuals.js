import {dsIllustration} from './ds-labs.js';
import {algoIllustration} from './algo-labs.js';
import {escapeHtml as h} from '/shared/engine.js';
import {diagramKind,diagramModel,diagramControls} from '/shared/visual-models.js';
import {cModel} from './c-labs.js';
import {aptitudeIllustration} from './aptitude-labs.js';
import {osIllustration,osWalkthrough} from './os-labs.js';
import {dbmsIllustration} from './dbms-labs.js';
import {cnIllustration} from './cn-labs.js';

export function modelMarkup(m){
 const nodes=(labels,selected=-1)=>`<ol class="visual-flow">${labels.map((label,i)=>`<li class="${i===selected?'visual-active':''}"><small>${i+1}</small><strong>${h(label)}</strong></li>`).join('')}</ol>`;
 let art='';
 if(m.type==='flow'||m.type==='cycle')art=nodes(m.labels,m.index);
 else if(m.type==='table'||m.type==='kmap')art=`<div class="visual-table-wrap"><table><thead><tr>${m.headers.map(v=>`<th scope="col">${h(v)}</th>`).join('')}</tr></thead><tbody>${m.rows.map((row,i)=>`<tr class="${m.selected===i?'visual-active':''}">${row.map(v=>`<td class="${Array.isArray(m.selected)&&m.selected.includes(v)?'visual-active':''}">${h(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
 else if(m.type==='bars'){const max=Math.max(1,...m.values.map(Math.abs));art=`<div class="visual-bars">${m.values.map((v,i)=>`<div class="${i===m.index?'visual-active':''}"><span>${h(m.labels[i])}</span><div class="visual-bar-track"><i style="width:${Math.abs(v)/max*100}%"></i></div><strong>${h(v)} ${h(m.unit)}</strong></div>`).join('')}</div>`;}
 else if(m.type==='fields')art=`<div class="visual-fields">${m.labels.map((label,i)=>`<div class="${i===m.index?'visual-active':''}" style="flex:${m.widths[i]}"><small>${h(label)}</small><strong>${h(m.values[i])}</strong></div>`).join('')}</div>`;
 else if(m.type==='gate')art=`<svg class="live-gate" viewBox="0 0 440 150" role="img" aria-label="${h(m.operation)} with inputs ${m.inputs.join(', ')} produces ${m.output}">${m.inputs.map((input,i)=>{const y=m.inputs.length===1?75:30+i*90/(m.inputs.length-1);return `<path class="signal-${input}" d="M65 ${y}H180"/><text x="8" y="${y+4}">${['A','B','C'][i]}=${input}</text>`;}).join('')}<rect x="180" y="20" width="115" height="110" rx="35"/><path class="signal-${m.output}" d="M295 75H375"/><text x="237" y="81" text-anchor="middle">${h(m.operation)}</text><text x="382" y="80">${m.output}</text></svg><p class="muted">Logical levels 0 and 1; settled output. Wires represent Boolean signals, not current or propagation time.</p>`;
 else if(m.type==='route')art=`<div class="visual-route">${m.inputs.map((v,i)=>`<div class="${i===m.index?'visual-active':''}">D${i} = ${v}${i===m.index?' → output '+m.output:''}</div>`).join('')}</div>`;
 else if(m.type==='wave')art=`<svg class="visual-wave" viewBox="0 0 400 150" role="img" aria-label="${h(m.title)}">${m.values.map((samples,i)=>{const y=30+i*45;let d=`M80 ${y+(samples[0]?0:20)}`;for(let j=0;j<samples.length;j++)d+=` H${80+(j+1)*38}${j<samples.length-1?' V'+(y+(samples[j+1]?0:20)):''}`;return `<text x="5" y="${y+15}">${h(m.labels[i])}</text><path class="${m.index===i?'visual-active-wave':''}" pathLength="100" d="${d}"/><text x="80" y="${y-5}">1</text>`;}).join('')}</svg>`;
 else throw Error('Unknown visual type: '+m.type);
 return `<h4>${h(m.title)}</h4>${art}<figcaption>${h(m.caption)}</figcaption>`;
}
export function topicDiagram(lesson,subject,compact=false){
 const kind=diagramKind(subject,lesson);let content;
 if(kind.startsWith('c:')){const model=cModel(lesson.cLab,lesson.cLab==='string'?'cat':0),step=model.steps[0];content=`<h4>${h(step[0])}</h4><div class="c-art">${step[1].replace(/<button\b[^>]*class="([^"]*)"[^>]*>/g,'<span class="$1">').replaceAll('</button>','</span>')}</div><figcaption>${h(step[2])}</figcaption>`;}
 else if(kind.startsWith('ds:')){const view=dsIllustration(lesson);content=`<div class="ds-art">${view.art}</div><figcaption>${h(view.text)}</figcaption>`;}
 else if(kind.startsWith('algo:')){const view=algoIllustration(lesson);content=`<div class="algo-art">${view.art}</div><figcaption>${h(view.text)}</figcaption>`;}
 else if(kind.startsWith('aptitude:')){const view=aptitudeIllustration(lesson);content=`<div class="lab-art">${view.art}</div><figcaption>${h(view.text)}</figcaption>`;}
 else if(kind.startsWith('os:'))content=osIllustration(lesson);
 else if(kind.startsWith('dbms:'))content=dbmsIllustration(lesson);
 else if(kind.startsWith('cn:'))content=cnIllustration(lesson);
 else content=modelMarkup(diagramModel(kind));
 const controls=compact?[]:diagramControls(kind);
 return `<figure class="topic-visual ${compact?'compact-visual':''}" data-topic-visual="${h(kind)}"><span class="visual-eyebrow">CONCEPT IN PICTURES · SEPARATE EXAMPLE</span><div class="visual-art visual-replay">${content}</div>${controls.length?`<div class="lab-controls">${controls.map(([label,min,max,step,value],i)=>`<label><span>${h(label)} <output>${value}</output></span><input type="range" data-visual-control="${i}" aria-label="${h(label)}" min="${min}" max="${max}" step="${step}" value="${value}"></label>`).join('')}</div>`:''}${controls.length?'<button type="button" class="text-button" data-visual-reset>RESET INPUTS</button>':''}</figure>`;
}
export function teachingDiagram(lesson){return `<div class="teaching-process"><ol>${lesson.teachingSteps.map((step,i)=>`<li><span>${i+1}</span><p>${h(step)}</p></li>`).join('')}</ol></div>`;}

export function walkthroughDiagram(lesson,subject,step){
 const kind=diagramKind(subject,lesson);
 if(kind.startsWith('os:'))return osWalkthrough(lesson,step);
 if(kind.startsWith('dbms:'))return dbmsIllustration(lesson,step);
 if(kind.startsWith('cn:'))return cnIllustration(lesson,step);
 if(kind.includes(':'))return topicDiagram(lesson,subject,true);
 const controls=diagramControls(kind),values=controls.map(([,min,max,increment,start])=>Math.min(max,Math.max(min,start+step*increment)));
 const model=diagramModel(kind,...values);
 if(['flow','cycle','fields','bars','wave'].includes(model.type))model.index=step%model.labels.length;
 if(model.labels&&model.index!==undefined)model.caption+=' Current focus: '+model.labels[model.index]+'.';
 if(['table','kmap'].includes(model.type)&&!Array.isArray(model.selected))model.selected=step%model.rows.length;
 return `<figure class="topic-visual compact-visual journey-model"><div class="visual-art visual-replay">${modelMarkup(model)}</div></figure>`;
}
document.addEventListener('input',event=>{const control=event.target.closest('[data-visual-control]');if(!control)return;const root=control.closest('[data-topic-visual]'),values=[...root.querySelectorAll('[data-visual-control]')].map(c=>Number(c.value));control.closest('label').querySelector('output').textContent=control.value;root.querySelector('.visual-art').innerHTML=modelMarkup(diagramModel(root.dataset.topicVisual,...values));});
document.addEventListener('click',event=>{const reset=event.target.closest('[data-visual-reset]');if(reset){const root=reset.closest('figure');for(const input of root.querySelectorAll('[data-visual-control]')){input.value=input.defaultValue;input.dispatchEvent(new Event('input',{bubbles:true}));}}});
