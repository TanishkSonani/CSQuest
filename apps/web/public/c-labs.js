import {canPlay,watchPlayback,playbackLabel} from './playback-lifecycle.js';
import {escapeHtml as h} from '/shared/engine.js';
const cell=(name,value,active=false)=>`<div class="c-cell ${active?'active':''}"><small>${h(name)}</small><strong>${h(String(value))}</strong></div>`;
const row=(...cells)=>`<div class="c-memory">${cells.join('')}</div>`;
const frames=(code,steps)=>({code,steps});
export function cModel(kind,value=0,second=0){
 const v=Number(value),b=Number(second);
 switch(kind){
 case 'variables':return frames(['int stock = 3;','int saved = stock;','stock += 2;','printf("%d", saved);'],[
  ['Initialize stock',row(cell('stock',3,true)),'The int object stock starts with value 3.'],
  ['Copy the value',row(cell('stock',3),cell('saved',3,true)),'saved is a separate int initialized from stock.'],
  ['Update stock',row(cell('stock',5,true),cell('saved',3)),'Assignment updates stock; the copied saved value remains 3.'],
  ['Write the copy',row(cell('stock',5),cell('saved',3),cell('output',3,true)),'The output reads saved, which still holds the copied value.']]);
 case 'bits':{const bits=Array.from({length:8},(_,i)=>(v>>(7-i))&1),signed=v>=128?v-256:v;return {code:['/* Diagram: 8-bit unsigned / two\'s complement */',`/* same pattern: ${bits.join('')} */`],steps:[['Toggle a bit',`<div class="c-bit-row">${bits.map((bit,i)=>`<button type="button" data-c-bit="${7-i}" aria-label="Bit ${7-i}" aria-pressed="${!!bit}" class="${bit?'on':''}"><small>2<sup>${7-i}</sup></small><strong>${bit}</strong></button>`).join('')}</div>`,'Unsigned value '+v+'; signed interpretation '+signed+' in this explicitly assumed 8-bit two\'s-complement diagram. Arithmetic promotion is a separate rule.']]};}
 case 'branch':return frames([`int stock = ${v};`,'if (stock >= 5) stock -= 2;','else stock += 3;'],[
  ['Test the condition',row(cell('stock',v),cell('stock >= 5',v>=5?'true':'false',true)),v+' >= 5 is '+(v>=5?'true':'false')+'. Only the chosen branch will execute.'],
  ['Take one branch',row(cell('stock',v>=5?v-2:v+3,true)),v>=5?'True: subtract two. The else branch is skipped.':'False: add three. The if body is skipped.']]);
 case 'loop':{const steps=[['Initialize',row(cell('i',0),cell('total',0)),'Initialization runs once.']];for(let i=0;i<4;i++)steps.push(['Iteration '+(i+1),row(cell('i',i),cell('total',2*(i+1),true)),'i < 4 is true. Add two, then advance i.']);steps.push(['Stop',row(cell('i',4),cell('total',8),cell('i < 4','false',true)),'The condition fails before a fifth body execution.']);return frames(['int total = 0;','for (int i=0; i<4; i++)','    total += 2;'],steps);}
 case 'calls':return frames(['int twice(int n) { return 2*n; }','int x = 3;','int result = twice(x);'],[
  ['Caller owns x',row(cell('caller x',3)),'x is a caller object.'],
  ['Copy argument',row(cell('caller x',3),cell('twice: n',3,true)),'The parameter is a separate local copy.'],
  ['Return a value',row(cell('caller x',3),cell('returned',6,true)),'Return communicates the computed value; the parameter lifetime ends.'],
  ['Resume caller',row(cell('caller x',3),cell('result',6,true)),'The caller receives the return value. x remains 3.']]);
 case 'build':return frames(['#include <stdio.h>','int main(void) {','    printf("ready"); return 0;','}'],['Preprocess','Compile','Link','Run'].map((stage,i)=>[stage,`<div class="c-build">${['Source','Preprocessed source','Object files','Executable','Output'].map((label,j)=>`<span class="${j===i+1?'active':''}">${label}</span>`).join('<span aria-hidden="true">→</span>')}</div>`,['Directives contribute content to the translation unit.','Translation produces object code; external references may remain.','The linker resolves references and combines required objects.','The hosted program runs and writes ready.'][i]]));
 case 'storage':return frames(['int visit(void) {','    static int count = 0;','    return ++count;','}'],Array.from({length:4},(_,i)=>['Call '+(i+1),row(cell('static count',i+1,true),cell('with automatic count=0',1)),'Static initialization occurs once; an automatic initializer would run on each call. This is a lifetime comparison, not two shared objects.']));
 case 'recursion':{const ns=[3,2,1,0,1,2,3];return frames(['int sum(int n) {','    if (n == 0) return 0;','    return n + sum(n-1);','}'],ns.map((n,i)=>[i<4?'Descend: sum('+n+')':'Return: sum('+n+')',`<div class="c-stack">${Array.from({length:i<4?i+1:7-i},(_,j)=>cell('sum('+ (3-j)+')',i<4?'waiting':'returning',j===(i<4?i:6-i))).join('')}</div>`,i<3?'Each call owns its own n and waits for the smaller call.':i===3?'Base case returns 0; no further call occurs.':'Combine '+n+' with the returned smaller sum: '+n*(n+1)/2+'.']));}
 case 'pointer':return frames(['int x=3, y=8;','int *p=&x;','*p=5;','p=&y;','*p=9;'],[
  ['Two independent objects',row(cell('x',3),cell('y',8)),'Objects hold values before a pointer is introduced.'],
  ['Point to x',row(cell('p','→ x',true),cell('x',3),cell('y',8)),'p stores an address designating x; it is a separate pointer object.'],
  ['Write through p',row(cell('p','→ x'),cell('x',5,true),cell('y',8)),'*p=5 modifies x.'],
  ['Move the arrow',row(cell('p','→ y',true),cell('x',5),cell('y',8)),'Assigning p changes the target, not the values of x and y.'],
  ['Write to the new target',row(cell('p','→ y'),cell('x',5),cell('y',9,true)),'*p now designates y.']]);
 case 'array':return frames(['int a[4]={2,4,6,8};',`/* selected index: ${v} */`],[['Inspect an element',row(...[2,4,6,8].map((x,i)=>cell('a['+i+']',x,i===v)),...(v===4?[cell('one-past','no element',true)]:[])),v<4?'a['+v+'] is '+[2,4,6,8][v]+'. Four valid indices are 0..3.':'a+4 may be formed, but it does not designate an accessible element.']]);
 case 'matrix':return frames(['int a[2][3]={{1,2,3},{4,5,6}};',`/* row ${v}, column ${b} */`],[['Select row, then column',`<div class="c-matrix">${[0,1].map(r=>`<div class="c-memory">${[0,1,2].map(col=>cell('a['+r+']['+col+']',r*3+col+1,r===v&&col===b)).join('')}</div>`).join('')}</div>`,'The element is '+(v*3+b+1)+'. a converts to a pointer to a three-int row, not int **.']]);
 case 'string':{const word=String(value).slice(0,10);return frames([`char text[] = "${word.replaceAll('\\','\\\\').replaceAll('"','\\"')}";`],[['Inspect the terminator',row(...[...word,'\\0'].map((ch,i)=>cell('['+i+']',ch,i===word.length))),'Visible length '+word.length+'; array size '+(word.length+1)+' char elements, including the null terminator.']]);}
 case 'double':return frames(['int x=2, y=8;','int *p=&x; int **pp=&p;','*pp=&y;','**pp=9;'],[
  ['Follow two pointer layers',row(cell('pp','→ p'),cell('p','→ x'),cell('x',2),cell('y',8)),'*pp designates the pointer object p. **pp designates x.'],
  ['Change p through pp',row(cell('pp','→ p'),cell('p','→ y',true),cell('x',2),cell('y',8)),'*pp=&y reassigns p itself.'],
  ['Change the final target',row(cell('pp','→ p'),cell('p','→ y'),cell('x',2),cell('y',9,true)),'**pp=9 changes y through both layers.']]);
 case 'heap':return frames(['int *p=malloc(sizeof *p);','if (!p) return;','*p=7;','free(p);','p=NULL;'],[
  ['Success path: allocation',row(cell('p','→ block'),cell('block','uninitialized',true)),'This lab follows allocation success. A real program must handle NULL. Reading uninitialized int storage is invalid.'],
  ['Initialize before reading',row(cell('p','→ block'),cell('live block',7,true)),'The allocated object is live and has an initialized value.'],
  ['Release once',row(cell('p','dangling'),cell('block','lifetime ended',true)),'After free, the value must not be read through this pointer. No unsafe access is executed here.'],
  ['Clear this pointer',row(cell('p','NULL',true),cell('block','released')),'Clearing p prevents use through p, but does not automatically clear any other alias.']]);
 case 'endian':return frames(['/* Diagram: 4 bytes, 8 bits per byte */','/* numeric value: 0x12345678 */'],[['Arrange representation bytes',row(...(v?[0x12,0x34,0x56,0x78]:[0x78,0x56,0x34,0x12]).map((x,i)=>cell('address +'+i,'0x'+x.toString(16).toUpperCase(),i===0))),v?'Big endian places the most-significant byte first. The numeric value is unchanged.':'Little endian places the least-significant byte first. The numeric value is unchanged.']]);
 case 'struct':return frames(['struct Point { int x, y; };',`struct Point p={${v},${b}};`],[['Inspect named fields',row(cell('p.x',v,true),cell('p.y',b)),'p.x is '+v+'; p.y is '+b+'. The members are distinct int objects inside one structure. Padding is omitted from this conceptual diagram; no byte size is implied.']]);
 default:throw Error('Unknown C visual lab: '+kind);
 }
}
const settings={bits:['Bit pattern',0,255,1,5],branch:['Initial stock',0,10,1,3],array:['Index or one-past boundary',0,4,1,1],matrix:['Row',0,1,1,0],endian:['Byte order (0 little, 1 big)',0,1,1,0],struct:['x coordinate',0,9,1,2]};
function controls(kind){
 if(kind==='string')return '<label class="c-text-control">Try a short ASCII word<input type="text" data-c-word maxlength="10" value="cat" autocomplete="off" aria-label="String to inspect"></label>';
 const a=settings[kind];if(!a)return '';
 const list=[['a',...a]];if(kind==='matrix')list.push(['b','Column',0,2,1,1]);if(kind==='struct')list.push(['b','y coordinate',0,9,1,3]);
 return `<div class="lab-controls">${list.map(([key,label,min,max,step,value])=>`<label><span>${h(label)} <output data-c-output="${key}">${value}</output></span><input type="range" data-c-control="${key}" aria-label="${h(label)}" min="${min}" max="${max}" step="${step}" value="${value}"></label>`).join('')}</div>`;
}
export function cCode(q){return q.code?`<figure class="c-code-card"><figcaption>READ THE C SNIPPET</figcaption><pre><code>${h((q.setup?q.setup+'\n\n':'')+q.code)}</code></pre><small>Statements run inside main; standard library declarations are included. Any helper function is shown above.</small></figure>`:'';}
export function cLab(lesson){
 if(!lesson.cLab)return '';
 const kind=lesson.cLab,a=kind==='string'?'cat':settings[kind]?.[4]||0,b=kind==='matrix'?1:kind==='struct'?3:0;
 const model=cModel(kind,a,b),step=model.steps[0];
 return `<section class="c-lab" data-c-lab="${kind}" data-c-step="0"><span class="tag green">EXPLORE THE CODE</span><h3>A tiny program, made visible.</h3><pre class="c-lab-code"><code>${h(model.code.join('\n'))}</code></pre>${controls(kind)}<div class="c-stage"><h4>${h(step[0])}</h4><div class="c-art">${step[1]}</div><p class="c-insight" aria-live="polite">${h(step[2])}</p></div><div class="c-playback" ${model.steps.length===1?'hidden':''}><button class="btn secondary" type="button" data-c-back disabled aria-label="Previous code step">BACK</button><button class="btn primary" type="button" data-c-next>NEXT STEP</button><button class="text-button" type="button" data-c-play aria-pressed="false">${playbackLabel()}</button><span class="c-step-count" role="status">1 / ${model.steps.length}</span></div><small>Explore this separate example freely. It earns no XP and does not change your puzzle answers.</small></section>`;
}
function redraw(root){
 const a=root.querySelector('[data-c-word]')?.value??Number(root.querySelector('[data-c-control="a"]')?.value||0),b=Number(root.querySelector('[data-c-control="b"]')?.value||0),model=cModel(root.dataset.cLab,a,b);
 const index=Math.min(Number(root.dataset.cStep),model.steps.length-1),step=model.steps[index];root.dataset.cStep=index;
 root.querySelector('.c-lab-code code').textContent=model.code.join('\n');root.querySelector('.c-stage h4').textContent=step[0];root.querySelector('.c-art').innerHTML=step[1];root.querySelector('.c-insight').textContent=step[2];root.querySelector('.c-step-count').textContent=(index+1)+' / '+model.steps.length;
 root.querySelector('[data-c-back]').disabled=index===0;root.querySelector('[data-c-next]').textContent=index===model.steps.length-1?'REPLAY':'NEXT STEP';
}
const playback=new Map();
function stop(root){clearTimeout(playback.get(root));playback.delete(root);const button=root.querySelector('[data-c-play]');button.textContent=playbackLabel();button.setAttribute('aria-pressed','false');}
function play(root){
 if(!root.isConnected||!canPlay()){stop(root);return;}
 const length=cModel(root.dataset.cLab).steps.length;
 root.dataset.cStep=(Number(root.dataset.cStep)+1)%length;redraw(root);
 if(Number(root.dataset.cStep)===length-1){stop(root);return;}
 playback.set(root,setTimeout(()=>play(root),1200));
}
document.addEventListener('input',event=>{
 const control=event.target.closest('[data-c-control],[data-c-word]');if(!control)return;const root=control.closest('[data-c-lab]');stop(root);root.dataset.cStep=0;
 if(control.matches('[data-c-word]'))control.value=control.value.replace(/[^\x20-\x7e]/g,'').slice(0,10);
 else root.querySelector(`[data-c-output="${control.dataset.cControl}"]`).textContent=control.value;
 redraw(root);
});
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-c-next],[data-c-back],[data-c-play],[data-c-bit]');if(!button)return;const root=button.closest('[data-c-lab]');
 if(button.hasAttribute('data-c-play')){if(!canPlay()){stop(root);root.dataset.cStep=Math.min(Number(root.dataset.cStep)+1,cModel(root.dataset.cLab).steps.length-1);redraw(root);return;}if(playback.has(root)){stop(root);return;}if(Number(root.dataset.cStep)===cModel(root.dataset.cLab).steps.length-1)root.dataset.cStep=0;button.textContent='PAUSE';button.setAttribute('aria-pressed','true');playback.set(root,setTimeout(()=>play(root),1200));return;}
 stop(root);
 if(button.hasAttribute('data-c-bit')){const control=root.querySelector('[data-c-control="a"]');control.value=Number(control.value)^(1<<Number(button.dataset.cBit));root.querySelector('[data-c-output="a"]').textContent=control.value;}
 else if(button.hasAttribute('data-c-back'))root.dataset.cStep=Math.max(0,Number(root.dataset.cStep)-1);
 else root.dataset.cStep=(Number(root.dataset.cStep)+1)%cModel(root.dataset.cLab).steps.length;
 redraw(root);document.dispatchEvent(new Event('c-interaction'));
});

watchPlayback(playback,stop);
