import {osTrace} from '/shared/teaching-models.js';
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

function visual(lab,index,value){
 const frames=osTrace(lab,Number(value)||2),frame=frames[Math.min(index,frames.length-1)];
 return `<h4>${h(frame.title)}</h4><div class="visual-table-wrap"><table><thead><tr>${frame.headers.map(v=>`<th scope="col">${h(v)}</th>`).join('')}</tr></thead><tbody>${frame.rows.map((row,i)=>`<tr class="${i===frame.focus?'visual-active':''}">${row.map(v=>`<td>${h(String(v))}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p>${h(frame.caption)}</p>`;
}

export function osLab(lesson){
 if(!lesson.osLab)return '';
 const [lab,story]=lessons[lesson.lecture],value=3+(lesson.lecture%4),step=lesson.osStage||0,frames=osTrace(lab,value),adjustable=/schedule|states|paging|segment|tlb|memory|race|critical|atomic|semaphore/.test(lab);
 return `<section class="os-lab" data-os-lab="${lab}" data-os-index="${step}" data-os-stage="${step}" data-os-lecture="${lesson.lecture}"><div class="os-lab-heading"><span class="tag green">OPERATING SYSTEMS · INTERACTIVE MODEL</span><span class="os-model-progress">${step+1} / ${frames.length}</span></div><h3>${h(story)}</h3><p class="os-lab-instruction">Step through the stated example. Check each caption for its assumptions.</p><div class="os-model-art" aria-live="polite">${visual(lab,step,value,lesson.lecture,step)}</div><label class="os-model-control" ${adjustable?'':'hidden'}><span>${lab==='schedule'?'Time slice / work size':lab==='paging'||lab==='segment'?'Address / page choice':lab==='semaphore'?'Initial shared counter':lab==='tlb'?'Hit-rate illustration':lab==='fork'?'Example input':'Example input'} <output>${value}</output></span><input type="range" min="1" max="8" step="1" value="${value}" data-os-value aria-label="Adjust the interactive operating-system model"></label><div class="os-lab-actions"><button type="button" class="btn secondary" data-os-previous ${step===0?'disabled':''}>PREVIOUS</button><button type="button" class="btn primary" data-os-next>STEP THROUGH MODEL ${String(step+2).padStart(2,'0')} ${String.fromCodePoint(8594)}</button></div><small class="os-model-note">This is a safe model. Experimenting here does not affect quiz answers or progress.</small></section>`;
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
 const root=button.closest('.os-lab'),lecture=Number(root.dataset.osLecture),stage=Number(root.dataset.osStage||0),index=Number(root.dataset.osIndex)+(button.hasAttribute('data-os-next')?1:-1),value=Number(root.querySelector('[data-os-value]')?.value||2);
 const length=osTrace(lessons[lecture][0],value).length;root.dataset.osIndex=index>=length?0:Math.max(0,index);root.querySelector('.os-model-art').innerHTML=visual(lessons[lecture][0],Number(root.dataset.osIndex),value,lecture,stage);root.querySelector('.os-model-progress').textContent=`${Number(root.dataset.osIndex)+1} / ${length}`;
 root.querySelector('[data-os-previous]').disabled=Number(root.dataset.osIndex)===0;root.querySelector('[data-os-next]').textContent=Number(root.dataset.osIndex)===length-1?'RESTART EXAMPLE':'NEXT STEP';
});
