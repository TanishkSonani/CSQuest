import {escapeHtml as h} from '/shared/engine.js';

const lessons=[
 ['startup','A computer has three connected layers: hardware, kernel and apps.','Select a layer to follow a request.'],
 ['process','Disk program → address space → ready process','Move the loader forward to start a process.'],
 ['fork','Parent → fork → parent + child','Change the fork count to grow the process tree.'],
 ['fork','Only processes that reach fork create a branch.','Advance one instruction across the tree.'],
 ['exec','One process identity; a replaced program image','Trigger exec to replace the image.'],
 ['syscall','User mode ⇄ system-call gate ⇄ kernel mode','Send a protected request through the gate.'],
 ['threads','One process contains multiple independent execution paths.','Choose a thread to inspect its private state.'],
 ['threads','User threads map onto kernel-scheduled threads.','Change the mapping to compare available parallel work.'],
 ['states','NEW → READY → RUNNING → BLOCKED → READY','Advance events to move the process.'],
 ['schedule','Arrival order: a long CPU burst can delay short work.','Change the quantum and inspect the schedule.'],
 ['schedule','The shortest available burst gets the next CPU turn.','Change a burst length to change the selected job.'],
 ['schedule','CPU time is divided into rotating bounded turns.','Adjust the time quantum and compare turns.'],
 ['schedule','A blocked process leaves the CPU; I/O completion wakes it.','Advance CPU and device events together.'],
 ['schedule','Higher priority runs first; aging raises long waiters.','Adjust the aging interval to see priority change.'],
 ['ipc','Shared memory ↔ synchronized data; messages ↔ explicit handoff','Choose a communication route.'],
 ['race','read → add → write can interleave and lose an update.','Replay the two workers’ instruction timing.'],
 ['critical','Entry → critical section → exit','Only one owner may cross the protected gate.'],
 ['critical','A lock can be safe yet keep a process waiting forever.','Advance contenders and check the wait.'],
 ['peterson','intent flags + turn decide which process waits.','Raise both intents to see the tie-break.'],
 ['atomic','Indivisible compare-and-set gives one lock owner.','Let two cores contend for one atomic update.'],
 ['semaphore','permits → wait → protected resource → signal','Change the permit count and test a waiter.'],
 ['producer-consumer','empty slots + full slots + one buffer lock','Move an item through the bounded buffer.'],
 ['classic-sync','Shared resources connect readers, writers and waiters.','Advance requests to inspect fairness and cycles.'],
 ['segment','segment + offset → bounds check → physical address','Adjust an offset and check its segment limit.'],
 ['segment','Free memory can be split into holes around segments.','Change the requested size to inspect the holes.'],
 ['paging','virtual page → page-table entry → physical frame','Choose a page and follow its frame mapping.'],
 ['paging','virtual address = page number | page offset','Move the address slider and split its fields.'],
 ['multilevel-paging','directory index → table index → frame','Walk the selected branch of the page-table tree.'],
 ['multilevel-paging','Each table level adds a read when the TLB misses.','Choose table depth and count the reads.'],
 ['multilevel-paging','A TLB hit skips the page-table walk.','Change the hit rate and watch average access cost.'],
 ['memory-review','Contiguous regions, segments and pages use different tradeoffs.','Compare internal and external wasted space.'],
 ['segmented-paging','segment → that segment’s page table → frame + offset','Trace the three address fields.'],
 ['replacement','page reference → hit or fault → optional victim','Change the reference string and step replacement.'],
 ['tlb','TLB hit is short; miss walks tables; fault fetches from storage.','Adjust hit rate to animate the weighted path.'],
 ['tlb','dirty victim write-back → requested page read → resume','Toggle the dirty bit to see the extra storage trip.'],
 ['deadlock','resource ownership + waiting edges → possible cycle','Add a wait edge and inspect the resource graph.'],
 ['banker','available → tentative grant → safe sequence check','Change available resources and test a safe order.'],
 ['filesystem','path → directory entry → file record → disk blocks','Select an allocation strategy and follow the blocks.'],
 ['filesystem','disk requests compete for head movement and fairness.','Move the head and compare request order.']
];

function nodes(items,active){return `<div class="os-flow" role="list">${items.map((item,i)=>`<div role="listitem" class="os-node ${i===active?'is-active':''}" style="--os-order:${i}"><span>${String(i+1).padStart(2,'0')}</span><b>${h(item)}</b></div>`).join('')}</div>`;}
function visual(lab,index,value,lecture,stage){
 const n=Math.max(1,Math.min(8,Math.round(Number(value)||3))),active=(index+n)%3;
 if(['schedule','states'].includes(lab)){
  const jobs=lab==='states'?['Ready','Running','Blocked','Ready']:['P1','P2','P3','P1','P2','P3'];
  return `<div class="os-timeline" role="img" aria-label="CPU schedule trace"><div class="os-track-label">CPU</div><div class="os-track">${jobs.map((job,i)=>`<div class="os-slot ${i===active?'is-active':''}" style="--os-order:${i};--os-duration:${Math.max(1,n-(i%3))}"><b>${job}</b><small>${i*n}–${i*n+Math.max(1,n-(i%3))}</small></div>`).join('')}</div><div class="os-axis"><span>0</span><span>time →</span><span>${jobs.length*n}</span></div><p class="os-live-caption">${lab==='states'?`Event ${index+1}: ${jobs[active]} state.`:`Quantum ${n}: each colored block is one CPU turn.`}</p></div>`;
 }
 if(['paging','multilevel-paging','segmented-paging','memory-review','segment'].includes(lab)){
  const cells=Array.from({length:8},(_,i)=>`<div class="os-memory-cell ${i===active?'is-active':''} ${i===n?'is-target':''}" style="--os-order:${i}"><small>${lab==='segment'?'segment':'frame'} ${i}</small><b>${i===active?'page '+(lecture%8):i===n?'free':'page '+((i+lecture)%12)}</b><span>${i===active?'mapped':i===n?'available':'resident'}</span></div>`);
  return `<div class="os-memory-map"><div class="os-address-flow"><span>virtual address</span><b>${lecture*257+n*16+active}</b><i aria-hidden="true">→</i><span>page / segment</span><b>${lecture%8} : ${active*16+n}</b><i aria-hidden="true">→</i><span>physical</span><b>frame ${active}</b></div><div class="os-memory-grid">${cells.join('')}</div><p class="os-live-caption">The offset stays the same; the mapping chooses the physical frame.</p></div>`;
 }
 if(['replacement','tlb'].includes(lab)){
  const refs=[1,2,3,1,4,2,5,lecture%5+1],frames=refs.slice(Math.max(0,index),Math.max(0,index)+3);
  return `<div class="os-cache-model"><div class="os-reference-row"><span>Reference string</span>${refs.map((x,i)=>`<b class="${i===index?'is-active':''}">${x}</b>`).join('')}</div><div class="os-frame-row"><span>${lab==='tlb'?'TLB entries':'Memory frames'}</span>${Array.from({length:3},(_,i)=>`<b class="os-frame ${i===active?'is-active':''}">${frames[i]??'empty'}</b>`).join('')}</div><div class="os-pulse-path"><i></i><span>${lab==='tlb'?(stage?'Page-table walk':'Translation cache'):(index>2?'Page fault · choose victim':'Page hit')}</span><i></i></div><p class="os-live-caption">${lab==='tlb'?`Hit rate ${Math.min(99,n*12)}% changes the average path cost.`:'A replacement policy uses the reference history to select a victim.'}</p></div>`;
 }
 if(['deadlock','classic-sync','peterson','critical'].includes(lab)){
  const people=lab==='peterson'?['P0','P1','turn']:['P0','P1','P2'];
  return `<div class="os-resource-graph">${people.map((p,i)=>`<div class="os-actor ${i===active?'is-active':''}" style="--os-order:${i}"><span>${lab==='peterson'&&i<2?'intent':'process'}</span><b>${p}</b><small>${i===active?'requesting':'waiting / ready'}</small></div>`).join('')}<div class="os-edge ${index%2?'reverse':''}" aria-hidden="true"><i></i><b>${lab==='peterson'?'turn breaks tie':'holds / waits'}</b><i></i></div><div class="os-resource">${lab==='critical'?'critical section':lab==='peterson'?'shared turn':'resource R'}</div><p class="os-live-caption">${lab==='peterson'?'Intent flags plus turn prevent both processes crossing together.':'Follow ownership and waiting edges; a closed cycle can trap every participant.'}</p></div>`;
 }
 if(['semaphore','producer-consumer','banker'].includes(lab)){
  const count=Math.max(0,Math.min(6,n-1));
  return `<div class="os-buffer"><div class="os-token-row"><span>${lab==='banker'?'Available resource units':lab==='producer-consumer'?'Buffer slots':'Semaphore permits'}</span>${Array.from({length:6},(_,i)=>`<i class="os-token ${i<count?'available':'used'} ${i===active?'is-active':''}" style="--os-order:${i}" aria-label="${i<count?'available':'used'}"></i>`).join('')}</div><div class="os-buffer-lanes"><div class="os-worker ${index%2?'is-active':''}">Producer / P0</div><div class="os-buffer-track">${Array.from({length:5},(_,i)=>`<b class="os-buffer-slot ${(i+index)%5===0?'is-active':''}">${(i+index)%5<count?'●':'·'}</b>`).join('')}</div><div class="os-worker ${index%2?'':'is-active'}">Consumer / P1</div></div><p class="os-live-caption">${lab==='producer-consumer'?'empty + full always equals the buffer capacity.':'A permit or resource can be used by one admitted request at a time.'}</p></div>`;
 }
 if(['fork','process','exec','startup','syscall','threads'].includes(lab)){
  const actors=lab==='fork'?['parent',...Array.from({length:Math.min(7,n)},(_,i)=>`child ${i+1}`)]:lab==='threads'?['process','thread A','thread B','kernel thread']:['hardware','kernel','process','application'];
  return `<div class="os-process-model"><div class="os-process-rail">${actors.map((actor,i)=>`<div class="os-process-card ${i===active?'is-active':''}" style="--os-order:${i}"><span>${lab==='fork'?'process':lab==='threads'?'execution lane':'system layer'}</span><b>${actor}</b><small>${lab==='exec'&&index%2?'new program image':i===active?'active':'saved state'}</small></div>`).join('')}</div><div class="os-connector"><i></i><span>${lab==='fork'?'fork creates a child':lab==='exec'?'exec replaces code and data':lab==='syscall'?'controlled privilege transition':'state and requests move across layers'}</span><i></i></div><p class="os-live-caption">Model scale: ${n} ${lab==='fork'?'child branches':'work units'}. ${lab==='threads'?'Threads share their process address space but keep separate stacks and registers.':'The operating system controls this handoff while preserving the state needed to continue.'}</p></div>`;
 }
 if(lab==='ipc'||lab==='filesystem'){
  const labels=lab==='ipc'?['Process A',`Shared memory · ${n} items`,'Process B']:['Path name','Directory','File record','Disk blocks'];
  return `<div class="os-path-model">${nodes(labels,active)}<div class="os-file-blocks">${Array.from({length:lab==='filesystem'?n:7},(_,i)=>`<i class="${i===active?'is-active':''}" style="--os-order:${i}" aria-label="block ${i}"></i>`).join('')}</div><p class="os-live-caption">${lab==='ipc'?'Choose shared storage with synchronization or an explicit message handoff.':'Allocation metadata maps one name to the file data blocks.'}</p></div>`;
 }
 return `<div class="os-process-model">${nodes(['Input','Operating-system rule','Result'],active)}<p class="os-live-caption">Move one step at a time and observe which state changes.</p></div>`;
}

export function osLab(lesson){
 if(!lesson.osLab)return '';
 const [lab,story,instruction]=lessons[lesson.lecture],value=3+(lesson.lecture%4),step=lesson.osStage||0;
 return `<section class="os-lab" data-os-lab="${lab}" data-os-index="${step}" data-os-stage="${step}" data-os-lecture="${lesson.lecture}"><div class="os-lab-heading"><span class="tag green">OPERATING SYSTEMS · INTERACTIVE MODEL</span><span class="os-model-progress">${step+1} / 3</span></div><h3>${h(story)}</h3><p class="os-lab-instruction">${h(instruction)}</p><div class="os-model-art" aria-live="polite">${visual(lab,step,value,lesson.lecture,step)}</div><label class="os-model-control"><span>${lab==='schedule'?'Time slice / work size':lab==='paging'||lab==='segment'?'Address / page choice':lab==='banker'||lab==='semaphore'?'Available permits':lab==='tlb'?'Hit-rate illustration':lab==='fork'?'Fork branches':'Model step'} <output>${value}</output></span><input type="range" min="1" max="8" step="1" value="${value}" data-os-value aria-label="Adjust the interactive operating-system model"></label><div class="os-lab-actions"><button type="button" class="btn secondary" data-os-previous ${step===0?'disabled':''}>PREVIOUS</button><button type="button" class="btn primary" data-os-next>STEP THROUGH MODEL ${String(step+2).padStart(2,'0')} ${String.fromCodePoint(8594)}</button></div><small class="os-model-note">This is a safe model. Experimenting here does not affect quiz answers or progress.</small></section>`;
}

export function osIllustration(lesson,index=lesson.osStage||0){const [lab,story]=lessons[lesson.lecture];return `<div class="os-illustration">${visual(lab,index,3,lesson.lecture,lesson.osStage||0)}<p>${h(story)}</p></div>`;}
export function osWalkthrough(lesson,index){return `<figure class="topic-visual compact-visual journey-model"><div class="visual-art visual-replay">${osIllustration(lesson,index)}</div></figure>`;}

document.addEventListener('input',event=>{
 const control=event.target.closest('[data-os-value]');if(!control)return;
 const root=control.closest('.os-lab'),[lab]=lessons[Number(root.dataset.osLecture)],index=Number(root.dataset.osIndex),lecture=Number(root.dataset.osLecture),stage=Number(root.dataset.osStage||0);
 control.closest('label').querySelector('output').textContent=control.value;
 root.querySelector('.os-model-art').innerHTML=visual(lab,index,control.value,lecture,stage);
});
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-os-next],[data-os-previous]');if(!button||button.disabled)return;
 const root=button.closest('.os-lab'),lecture=Number(root.dataset.osLecture),stage=Number(root.dataset.osStage||0),index=Number(root.dataset.osIndex)+(button.hasAttribute('data-os-next')?1:-1),value=Number(root.querySelector('[data-os-value]').value);
 root.dataset.osIndex=Math.max(0,index);root.querySelector('.os-model-art').innerHTML=visual(lessons[lecture][0],Number(root.dataset.osIndex),value,lecture,stage);root.querySelector('.os-model-progress').textContent=`${Number(root.dataset.osIndex)+1} / 3`;
 root.querySelector('[data-os-previous]').disabled=Number(root.dataset.osIndex)===0;root.querySelector('[data-os-next]').textContent=`STEP THROUGH MODEL ${String(Number(root.dataset.osIndex)+2).padStart(2,'0')} ${String.fromCodePoint(8594)}`;
});
