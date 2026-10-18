import {escapeHtml as h} from '/shared/engine.js';
import {compilerScene} from '/shared/compiler-models.js';
export function compilerArt(f){
 const m=f?.compiler;if(!m)return '';
 const header=`<div class="compiler-track" aria-label="Model state ${m.index+1} of ${m.total}">${Array.from({length:m.total},(_,i)=>`<i class="${i<=m.index?'reached':''}" aria-hidden="true"></i>`).join('')}</div>`;
 let art='';
 if(m.labels)art=`<ol class="compiler-pipeline">${m.labels.map((v,i)=>`<li class="${i===m.index?'current':i<m.index?'done':''}"><span>${i+1}</span><strong>${h(v)}</strong></li>`).join('')}</ol>`;
 else if(m.nodes)art=`<div class="compiler-graph" role="group" aria-label="${m.kind==='ssa'?'Definition and merge edges':'Control-flow graph'}">${m.nodes.map((n,i)=>`<article class="${i===m.index?'current':''}"><b>${h(n.name)}</b><span>${n.next.length?'→ '+n.next.map(h).join(' / '):'→ exit'}</span></article>`).join('')}</div>`;
 else if(m.instructions)art=`<div class="compiler-values">${m.instructions.slice(0,Math.min(m.index+1,m.instructions.length)).map((n,i)=>`<div class="${i===m.index?'current':''}"><small>${h(n.left)} ${h(n.op)} ${h(n.right)}</small><strong>${h(n.dest)} = ${n.value}</strong></div>`).join('')}</div>`;
 else if(m.kind==='lr')art=`<div class="compiler-state-badge"><span>${h(m.mode.toUpperCase())}</span><strong>${h(f.title)}</strong><small>${m.conflicts?'Construction has '+m.conflicts+' conflicting cell(s)':'Construction has no conflicting ACTION cells'}</small></div>`;
 else if(['first','follow','liveness','available'].includes(m.kind))art=`<div class="compiler-rule"><span>${h(m.kind==='liveness'?'OUT = ⋃ IN(successors)':m.kind==='available'?'IN = ⋂ OUT(predecessors)':m.kind.toUpperCase()+' · repeat until stable')}</span><b>${h(f.title)}</b></div>`;
 return `<div class="compiler-art">${header}${art}</div>`;
}
export function compilerTable(f){return f.headers?`<div class="visual-table-wrap"><table><thead><tr>${f.headers.map(x=>`<th scope="col">${h(x)}</th>`).join('')}</tr></thead><tbody>${f.rows.map((r,i)=>`<tr class="${i===f.focus?'visual-active':''}">${r.map(c=>`<td>${h(String(c))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:'';}
export function compilerIllustration(lesson,step=0){
 const scene=compilerScene(lesson.compilerSpec),f=scene.frames[Math.min(step,scene.frames.length-1)];
 return `<h4>${h(f.title)}</h4>${compilerArt(f)}${compilerTable(f)}<figcaption>${h(f.caption)}</figcaption>`;
}
