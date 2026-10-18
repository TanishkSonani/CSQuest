import {escapeHtml as h} from '/shared/engine.js';
import {tocScene} from '/shared/toc-models.js';

export function tocArt(data){
 if(!data)return '';
 const word=(input='',position=0)=>`<div class="toc-word" aria-label="Consumed ${position} of ${input.length} symbols">${[...input].map((s,i)=>`<span class="${i<position?'consumed':i===position?'reading':''}"><small>${i+1}</small>${h(s)}</span>`).join('')||'<span>ε</span>'}</div>`;
 if(data.type==='word')return word(data.input,data.position);
 if(data.type==='derivation')return `<div class="toc-word" aria-label="Current sentential form ${h(data.input||'ε')}">${[...data.input].map((s,i)=>`<span class="${i===data.position?'reading':''}"><small>${i+1}</small>${h(s)}</span>`).join('')||'<span>ε</span>'}</div>`;
 if(data.type==='stack')return `${word(data.input,data.position)}<div class="toc-stack" aria-label="Stack bottom to top"><small>BOTTOM → TOP</small>${data.stack.map((s,i)=>`<span class="${i===data.stack.length-1?'reading':''}">${h(s)}</span>`).join('')}</div>`;
 if(data.type==='tape')return `<div class="toc-tape" tabindex="0" role="region" aria-label="Tape; current head at cell ${data.head}, state ${h(data.state)}">${data.cells.map(cell=>`<span class="${cell.index===data.head?'reading':''}"><small>${cell.index}</small><b>${h(cell.symbol)}</b>${cell.index===data.head?`<em>▲ ${h(data.state)}</em>`:''}</span>`).join('')}</div>`;
 if(data.type==='diagonal')return `<div class="visual-table-wrap"><table class="toc-diagonal" aria-label="Flip the diagonal to differ from each listed row"><thead><tr><th>Row</th>${data.matrix[0].map((_,i)=>`<th>${i}</th>`).join('')}</tr></thead><tbody>${data.matrix.map((row,i)=>`<tr><th>${i}</th>${row.map((bit,j)=>`<td class="${i===j?'visual-active':''}">${bit}${i===j&&i<=data.index?` → <strong>${data.flipped[i]}</strong>`:''}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
 if(data.type==='automaton'){
  const {machine,active=[]}=data,states=machine.states;
  // A wrapping state board stays readable for subset names and large NFAs;
  // transitions retain their exact labels in the scrollable rules table.
  const edges=states.flatMap(q=>Object.entries(machine.delta[q]||{}).map(([symbol,dest])=>[q,symbol===''?'ε':symbol,Array.isArray(dest)?dest.join(', ')||'∅':dest]));
  return `${word(data.input,data.position)}<div class="toc-state-board" aria-label="Machine states">${states.map((q,i)=>`<span class="${active.includes(q)?'reading':''} ${machine.finals.includes(q)?'toc-final':''}"><small>${q===machine.start?'START':`STATE ${i+1}`}${machine.finals.includes(q)?' · ACCEPTING':''}</small><b>${h(q)}</b></span>`).join('')}</div><details class="toc-rules"><summary>Transition rules · ${states.length} states</summary><div class="visual-table-wrap"><table><thead><tr><th>From</th><th>Read</th><th>To</th></tr></thead><tbody>${edges.map(([a,s,b])=>`<tr class="${data.edge?.[0]===a&&data.edge?.[1]===s?'visual-active':''}"><td>${h(a)}</td><td>${h(s)}</td><td>${h(b)}</td></tr>`).join('')}</tbody></table></div></details>`;
 }
 return '';
}
export function tocTable(frame){return frame.headers?`<div class="visual-table-wrap"><table><thead><tr>${frame.headers.map(c=>`<th scope="col">${h(c)}</th>`).join('')}</tr></thead><tbody>${frame.rows.map(row=>`<tr>${row.map(cell=>`<td>${h(String(cell))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:'';}
export function tocIllustration(lesson,step=0){
 const scene=tocScene(lesson.tocSpec),frame=scene.frames[Math.min(scene.frames.length-1,step)];
 return `<h4>${h(frame.title)}</h4>${tocArt(frame.toc)}${tocTable(frame)}<figcaption>${h(frame.caption)}</figcaption>`;
}
// Graded problems show rules and initial state, never the computed answer.
export function tocGiven(question){
 if(!question.tocGiven)return '';
 const {title,headers,rows,toc}=question.tocGiven;
 return `<aside class="toc-question-given"><h2>${h(title)}</h2>${tocArt(toc)}${tocTable({headers,rows})}</aside>`;
}
