// Deterministic, small teaching examples. These are separate from graded inputs.
const frame=(title,headers,rows,caption,focus=0)=>({title,headers,rows,caption,focus});

export function crcRemainder(bits,generator){
 if(!/^[01]+$/.test(bits)||!/^1[01]*1$/.test(generator))throw Error('Use binary data and a generator with leading and trailing 1.');
 const work=bits.split('').map(Number),poly=generator.split('').map(Number);
 for(let i=0;i<=work.length-poly.length;i++)if(work[i])for(let j=0;j<poly.length;j++)work[i+j]^=poly[j];
 return work.slice(-(poly.length-1)).join('').padStart(poly.length-1,'0');
}
export function crcExperiment(data,generator,flip=-1){
 const check=crcRemainder(data+'0'.repeat(generator.length-1),generator),sent=data+check;
 const received=[...sent];if(Number.isInteger(flip)&&flip>=0&&flip<received.length)received[flip]=received[flip]==='1'?'0':'1';
 return {check,sent,received:received.join(''),remainder:crcRemainder(received.join(''),generator)};
}

export function scheduleJobs(jobs,policy='fcfs',quantum=2){
 if(!Number.isInteger(quantum)||quantum<1)throw Error('Quantum must be a positive integer.');
 if(!['fcfs','rr','sjf'].includes(policy))throw Error('Unknown scheduling policy.');
 if(jobs.some(j=>!Number.isInteger(j.arrival)||j.arrival<0||!Number.isInteger(j.burst)||j.burst<1))throw Error('Jobs need nonnegative integer arrivals and positive bursts.');
 const pending=jobs.map((j,i)=>({...j,index:i,remaining:j.burst})).sort((a,b)=>a.arrival-b.arrival||a.index-b.index),ready=[],timeline=[];let time=0;
 const admit=()=>{while(pending.length&&pending[0].arrival<=time)ready.push(pending.shift());};
 while(pending.length||ready.length){
  admit();if(!ready.length){const end=pending[0].arrival;timeline.push({id:'Idle',start:time,end});time=end;admit();}
  if(policy==='sjf')ready.sort((a,b)=>a.remaining-b.remaining||a.arrival-b.arrival||a.index-b.index);
  const job=ready.shift(),duration=policy==='rr'?Math.min(quantum,job.remaining):job.remaining,start=time;
  time+=duration;job.remaining-=duration;timeline.push({id:job.id,start,end:time,remaining:job.remaining});
  admit();if(job.remaining)ready.push(job);
 }
 return timeline;
}

export function dfaTrace(input){
 if(!/^[01]*$/.test(input))throw Error('Use only the alphabet {0,1}.');
 let state=0;const frames=[frame('Start in qEven',['Consumed','State','Even number of 1s?'],[['ε','qEven','yes']],'The empty prefix contains zero 1s. qEven is the initial accepting state.')];
 for(let i=0;i<input.length;i++){const previous=state;if(input[i]==='1')state^=1;frames.push(frame(`Read ${input[i]}` ,['Position','Transition','Consumed prefix'],[[i,`q${previous?'Odd':'Even'} —${input[i]}→ q${state?'Odd':'Even'}`,input.slice(0,i+1)]],input[i]==='1'?'Reading 1 toggles parity. The unconsumed suffix is '+(input.slice(i+1)||'ε')+'.':'Reading 0 leaves the count of 1s unchanged.'));}
 frames.push(frame('End of input',['Final state','Decision'],[[state?'qOdd':'qEven',state?'REJECT':'ACCEPT']],`All symbols were consumed. ${state?'An odd':'An even'} number of 1s means the string is ${state?'rejected':'accepted'}.`));
 return {frames,accepted:state===0,language:'Binary strings containing an even number of 1s. Double circles denote accepting states; acceptance is decided after the whole input.'};
}

export function tokenize(source){
 const result=[];let index=0;
 while(index<source.length){
  if(/\s/.test(source[index])){index++;continue;}
  const rest=source.slice(index),lexeme=rest.match(/^(?:[A-Za-z_]\w*|\d+|==|<=|>=|!=|[+*()=;<>-])/ )?.[0];
  if(!lexeme)throw Error(`Unrecognized character at position ${index}.`);
  const kind=/^[A-Za-z_]/.test(lexeme)?'identifier':/^\d/.test(lexeme)?'integer':lexeme===';'?'delimiter':'operator';
  result.push({lexeme,kind,start:index,end:index+lexeme.length});index+=lexeme.length;
 }
 return result;
}

export function compilerTrace(source='total = count + 2;'){
 const tokens=tokenize(source),frames=[frame('Source characters',['Source'],[[source]],'The source is a character sequence. Spaces separate lexemes but are not tokens in this toy expression language.')];
 for(let i=0;i<tokens.length;i++){const t=tokens[i];frames.push({...frame(`Recognize ${t.lexeme}`,['Lexeme','Token kind','Character span'],tokens.slice(0,i+1).map(t=>[t.lexeme,t.kind,`${t.start}..${t.end}`]),`Characters ${t.start} through ${t.end-1} form one ${t.kind}. Longest-match operators such as == stay together.`,i),source,span:[t.start,t.end]});}
 frames.push(frame('Tokens are ready for parsing',['Stage','Input','Output'],[['Lexing',source,tokens.map(t=>t.kind==='identifier'?'ID':t.kind==='integer'?'INT':t.lexeme).join(' ')]],'Lexing recognizes tokens. Parsing must still check whether their arrangement follows the grammar; a token stream alone is not a syntax tree.'));
 return {frames,tokens};
}

const students=[['Mina',1,12],['Ravi',2,18],['Lina',1,21]];
export function databaseTrace(kind,value=15){
 if(/join/i.test(kind)){
  const input=[['Mina',1,12],['Ravi',2,18],['Lina',3,21]],teams=[[1,'Systems'],[2,'Theory']],selected=input.filter(row=>row[2]>=value),left=/left.*join/i.test(kind),joined=selected.flatMap(row=>{const matches=teams.filter(team=>team[0]===row[1]);return matches.length?matches.map(team=>[row[0],team[1]]):left?[[row[0],'NULL']]:[];});
  return [frame('Two input relations',['Student','Team ID','Score'],input,'Team relation: (1, Systems), (2, Theory). Team 3 has no matching team row.'),frame('Filter the student side',['Student','Team ID','Score'],selected,`Keep scores >= ${value} before this example join.`),frame(left?'Left join preserves unmatched students':'Inner join keeps matching pairs',['Student','Team name'],joined,left?'Lina has no matching team, so the team columns become NULL. A later WHERE condition can remove these rows.':'Combine rows on equal Team IDs. An unmatched student produces no result row under this inner join.')];
 }
 if(/group|aggregat|having/i.test(kind)){
  const selected=students.filter(row=>row[2]>=value),groups=[1,2].map(team=>[team,selected.filter(row=>row[1]===team)]).filter(([,rows])=>rows.length);
  return [frame('Rows before grouping',['Name','Team ID','Score'],students,'Group by Team ID after the WHERE filter.'),frame('Apply WHERE before grouping',['Name','Team ID','Score'],selected,`Keep scores >= ${value}. WHERE filters individual rows.`),frame('Aggregate each remaining group',['Team ID','COUNT(*)','SUM(score)'],groups.map(([team,rows])=>[team,rows.length,rows.reduce((sum,row)=>sum+row[2],0)]),'Each group contributes one output row. HAVING can then filter groups using aggregate conditions.')];
 }
 if(/normal|dependenc|key/.test(kind)){
  const rows=[['S1','Mina','DB'],['S2','Ravi','OS'],['S1','Mira','CN']];
  return [frame('Proposed enrolment relation',['Student ID','Name','Course'],rows,'Test the dependency Student ID → Name. A student may take several courses.'),frame('Compare equal determinants',['Student ID','Name','Course'],[rows[0],rows[2]],'Both rows use S1, but their names differ: this instance violates Student ID → Name.'),frame('Separate independent facts',['Relation','Tuple'],[['Student','(S1, Mina)'],['Enrolment','(S1, DB), (S1, CN)']],'Separating student facts from enrolment facts avoids repeating the name in each enrolment. A decomposition also needs the relevant lossless-join and dependency checks.')];
 }
 if(/transaction|concurrency/.test(kind))return incrementTrace(value);
 if(/index|storage|file|disk|space/.test(kind))return [frame('Ordered search keys',['Leaf page','Keys'],[['L0','3, 7'],['L1','12, 18'],['L2','24, 31']],'Toy index: root separators are 12 and 24. Each leaf holds two ordered keys.'),frame('Route a lookup for 18',['Root rule','Chosen child'],[['12 ≤ 18 < 24','L1']],'The separators choose a child range. They do not return the record by themselves.'),frame('Inspect the selected leaf',['Key','Present?'],[[12,'no'],[18,'yes']],'Find 18 in L1. A further data-page read may be needed for a non-covering index.')];
 if(/er|entity/.test(kind))return [frame('Entity records',['Student ID','Name'],[['S1','Mina'],['S2','Ravi']],'Student ID identifies the student. Names need not be unique.'),frame('Many-to-many enrolments',['Student ID','Course ID'],[['S1','DB'],['S1','OS'],['S2','DB']],'One student may take several courses, and one course may have several students.'),frame('Check relationship keys',['Proposed enrolment','Result'],[['S1, DB','Duplicate pair rejected'],['S1, CN','New pair accepted']],'The pair (Student ID, Course ID) identifies an enrolment in this model, assuming a student takes a course at most once.')];
 const filtered=students.filter(row=>row[2]>=value);
 return [frame('Input relation',['Name','Team ID','Score'],students,'Three example rows. Query: SELECT name, score FROM Student WHERE score >= '+value+'.'),frame('Apply the predicate',['Name','Team ID','Score'],filtered,`Keep exactly the rows whose score is at least ${value}. Filtering chooses rows; it does not change the stored scores.`),frame('Project requested columns',['Name','Score'],filtered.map(row=>[row[0],row[2]]),'Return only name and score. This illustrates logical query processing, not a guaranteed physical execution plan.')];
}

export function incrementTrace(initial=3){
 return [
  frame('Two workers increment a shared value',['Step','Worker A local','Worker B local','Shared'],[['Start','—','—',initial]],'Each worker intends to add one. An unprotected read, add, write sequence has several interleavable actions.'),
  frame('Both read before either writes',['Step','A local','B local','Shared'],[['A reads',initial,'—',initial],['B reads',initial,initial,initial]],'Both local copies contain the same old value.'),
  frame('A writes its increment',['A local','B local','Shared'],[[initial+1,initial,initial+1]],'A stores old + 1. B still holds its stale local copy.'),
  frame('B overwrites using stale data',['A local','B local','Shared'],[[initial+1,initial+1,initial+1]],`The unprotected result is ${initial+1}, not ${initial+2}: one update was lost.`),
  frame('Compare serialized increments',['Strategy','Final shared value'],[['This unsafe interleaving',initial+1],['Atomic increment or correct mutual exclusion',initial+2]],'Protect the whole read-modify-write operation. Merely making each read and each write individually atomic is insufficient.')
 ];
}

export function osTrace(kind,value=2){
 if(kind==='fork'){
  const depth=Math.min(4,value),frames=[frame('One original process',['Process','Parent'],[['P0','none']],'Assume every fork succeeds and every current process executes each of the successive fork calls.')];let processes=[['P0','none']];
  for(let i=0;i<depth;i++){const old=[...processes];for(const p of old)processes.push(['P'+processes.length,p[0]]);frames.push(frame(`After fork call ${i+1}`,['Process','Parent'],[...processes],`${processes.length} processes now exist, including the original. Each existing process created one child at this call.`));}
  return frames;
 }
 if(kind==='exec')return [frame('A process before exec',['PID','Program image'],[[42,'editor']],'The process exists and has a process identifier.'),frame('Successful exec',['PID','Program image'],[[42,'viewer']],'exec replaces the program image in the same process. It does not create a child or double the process count.'),frame('Continue the replacement program',['PID','Next work'],[[42,'Entry point of viewer']],'A successful exec does not return to the old program. Failure is a separate path that the caller must handle.')];
 if(kind==='threads'||kind==='switch')return [frame('Two threads in one process',['Resource','T1','T2'],[['Address space','shared','shared'],['Registers and stack','private execution state','private execution state']],'Threads share process resources but retain their own execution context.'),frame('Switch execution context',['Action','Saved or loaded'],[['Save T1','Program counter and registers'],['Restore T2','T2 program counter and registers']],'The scheduler changes which thread executes. Switching does not copy the entire shared address space.'),frame('Resume the selected thread',['Running','Shared memory'],[['T2','Same process mappings']],'Use synchronization when threads access shared writable state.')];
 if(kind==='semaphore')return [frame('Counting semaphore starts with permits',['Permits','Waiters'],[[value,'none']],'A successful wait takes one permit. A wait must block when no permit is available.'),frame('Admit one worker',['Permits remaining','Admitted workers'],[[value-1,1]],'wait atomically checks and consumes an available permit.'),frame('Release after work',['Permits after signal','Effect'],[[value,'A waiting worker, if any, can become eligible']],'signal returns one permit. A counting semaphore can allow several workers; it is not always a binary lock.')];
 if(kind==='schedule'||kind==='states'){
  const jobs=[{id:'P1',arrival:0,burst:5},{id:'P2',arrival:1,burst:3},{id:'P3',arrival:2,burst:1}],timeline=scheduleJobs(jobs,'rr',value);
  return [frame('Ready jobs and CPU bursts',['Process','Arrival','CPU burst'],jobs.map(j=>[j.id,j.arrival,j.burst]),`Round-robin, quantum ${value} time units; no context-switch overhead. Arrivals at a boundary join before the unfinished process is requeued.`),...timeline.map((slot,i)=>({...frame(`${slot.start}–${slot.end}: ${slot.id}`,['Turn','Process','Start','End','Remaining after turn'],timeline.slice(0,i+1).map((s,j)=>[j+1,s.id,s.start,s.end,s.remaining??'—']),`${slot.id} runs for ${slot.end-slot.start} time units. ${slot.remaining===0?'Its CPU burst is complete.':'Its unfinished work returns to the ready queue.'}`,i),timeline:timeline.slice(0,i+1)}))];
 }
 if(kind==='segment'){
  const offset=value*13,base=1000,limit=64,valid=offset<limit;
  return [frame('A segment has a base and a limit',['Base byte address','Length in bytes','Requested offset'],[[base,limit,offset]],'Valid offsets are 0 through 63 for this 64-byte segment.'),frame('Check bounds before translating',['Test','Allowed?'],[[`${offset} < ${limit}`,valid?'yes':'no']],'The limit is a length in this model. Do not access memory before the bounds check succeeds.'),frame('Translate or trap',['Outcome','Physical byte address'],[[valid?'Access permitted':'Bounds fault',valid?base+offset:'none']],valid?`Add base ${base} and offset ${offset}: physical address ${base+offset}.`:'The offset is outside this segment. No physical access is performed.')];
 }
 if(kind==='replacement'){
  const capacity=3,references=[1,2,3,1,value,2,5],resident=[],frames=[];let faults=0;
  frames.push(frame('Start with empty FIFO frames',['Capacity','References'],[[capacity,references.join(', ')]],'FIFO evicts the oldest resident insertion. A hit does not change insertion order.'));
  for(const page of references){const hit=resident.includes(page);if(!hit){faults++;if(resident.length===capacity)resident.shift();resident.push(page);}frames.push(frame(`Reference page ${page}`,['Frame order: oldest → newest','Event','Faults so far'],[[resident.join(', '),hit?'hit':'fault',faults]],hit?'The page is resident. FIFO insertion order stays the same.':'The page is absent. If all three frames were occupied, evict the oldest before loading it.'));}
  return frames;
 }
 if(kind==='tlb'){
  const hits=value*10,hitCost=5+100,missCost=5+100+100,average=hits/100*hitCost+(1-hits/100)*missCost;
  return [frame('State the timing assumptions',['TLB lookup','One memory access','Hit rate'],[['5 ns','100 ns',hits+'%']],'Sequential lookup, one-level page table, no page faults and no overlap.'),frame('Compare hit and miss paths',['Path','Cost'],[['TLB hit','5 + 100 = 105 ns'],['TLB miss','5 + 100 + 100 = 205 ns']],'A miss reads the page-table entry, then the requested data. A hit skips the page-table read.'),frame('Weight both paths',['Expression','Average cost'],[[`${hits/100} × 105 + ${1-hits/100} × 205`,average+' ns']],'This average excludes page-fault service. Use a different expression when the lookup or table-depth assumptions differ.')];
 }
 if(/paging|memory/.test(kind)){
  const address=value*13+11,pageSize=16,page=Math.floor(address/pageSize),offset=address%pageSize,physicalFrame=[5,2,7,1,3,0,6,4][page%8];
  return [frame('Split a virtual byte address',['Virtual address','Page size','Page number','Offset'],[[address,pageSize,page,offset]],`${address} = ${page} × ${pageSize} + ${offset}. This toy page size is 16 bytes.`),frame('Look up the virtual page',['Virtual page','Present','Physical frame'],[[page,'yes',physicalFrame]],'A present page-table entry names a frame. A TLB can cache this mapping; a TLB miss alone need not cause a page fault.'),frame('Preserve the offset',['Frame base','Offset','Physical byte address'],[[physicalFrame*pageSize,offset,physicalFrame*pageSize+offset]],'Translation replaces the page number with a frame number. The byte offset stays the same. This is a paging example, not segment translation.')];
 }
 if(/race|critical|peterson|atomic|semaphore|producer|classic|ipc/.test(kind))return incrementTrace(value);
 if(/deadlock|banker/.test(kind))return [frame('Single-instance resources',['Resource','Owner','Waiting requester'],[['R1','P1','P2'],['R2','P2','P1']],'One instance of each resource. Both owners retain their resource while waiting.'),frame('Follow the wait-for cycle',['Process','Waits for'],[['P1','P2 to release R2'],['P2','P1 to release R1']],'Neither process can finish under these assumptions: the wait-for graph contains a cycle.'),frame('Break hold-and-wait',['Policy change','Effect'],[['Acquire both resources together','One process can proceed without holding one resource while waiting for another']],'This demonstrates a prevention rule. Banker’s safety algorithm is a different analysis for systems with declared maximum demands.')];
 return [frame('Request a protected service',['Participant','Action'],[['Application','Requests a file read'],['Kernel','Checks access and locates the file']],'The application asks through a system call; it does not perform a privileged device operation directly.'),frame('Wait while I/O completes',['Process state','Reason'],[['Blocked','Waiting for requested data']],'A blocked process cannot usefully run until its awaited event happens.'),frame('Return to runnable work',['Event','State'],[['I/O completion','Ready'],['Scheduler dispatch','Running']],'Ready means able to run; running means currently executing on a CPU.')];
}

export function networkTrace(lab,value=2){
 const kind=lab.kind,mode=lab.mode;
 if(kind==='subnet'){
  const prefix=24+Math.min(6,value),size=2**(32-prefix),host=70,base=Math.floor(host/size)*size;
  return [frame('Split the IPv4 address',['Address','Prefix','Host bits'],[['192.168.10.70',prefix,32-prefix]],`/${prefix} leaves ${32-prefix} host bits in each block.`),frame('Find the containing block',['Block size','Network address','Broadcast'],[[size,'192.168.10.'+base,'192.168.10.'+(base+size-1)]],'Align the address to a block-size boundary. These prefixes range from /25 to /30.'),frame('Count ordinary host addresses',['Total addresses','Usable host addresses'],[[size,size-2]],'For this ordinary broadcast subnet, exclude the network and broadcast addresses. /31 point-to-point and /32 are different cases.')];
 }
 if(kind==='error'){
  const bits=[1,0,1,1,0,1,0,0],changed=[...bits];changed[value%8]^=1;
  return [frame('Send an even-parity codeword',['Bits','Number of 1s'],[[bits.join(''),4]],'The example word has an even number of 1s.'),frame('Introduce one bit error',['Changed position (zero-based)','Received bits'],[[value%8,changed.join('')]],'Exactly one controlled bit flip changes parity.'),frame('Receiver checks parity',['One-bit count','Result'],[[changed.reduce((a,b)=>a+b,0),'Error detected']],'Parity detects every single-bit change but cannot locate that bit. Some even-numbered error patterns pass. CRC and Hamming codes use different redundancy; inspect the topic lab for those rules.')];
 }
 if(kind==='delay')return [frame('A packet enters a link',['Packet length','Rate','Distance'],[['12000 bits','6 Mbps','1000 km']],'Assume signal speed 2 × 10^8 m/s, no queueing, no processing delay.'),frame('Serialize the bits',['Calculation','Transmission delay'],[['12000 / 6000000 s','2 ms']],'Transmission delay depends on the packet size and link rate.'),frame('Carry the signal',['Calculation','Propagation delay'],[['1000000 / 200000000 s','5 ms']],'Propagation depends on distance and signal speed. Last-bit arrival is 2 + 5 = 7 ms under these assumptions.')];
 if(kind==='stopwait')return [frame('Send frame 0',['Sender','Receiver'],[['Waiting for ACK','Expecting frame 0']],'A stop-and-wait sender keeps a copy until the matching acknowledgment arrives.'),frame('Deliver data; lose ACK',['Sender','Receiver'],[['Still waiting','Delivered frame 0 once; expects frame 1']],'The data arrived, but its acknowledgment was lost.'),frame('Timeout and retransmit',['Sender','Receiver'],[['Resends frame 0','Recognizes duplicate 0; does not deliver twice']],'The sequence bit prevents duplicate delivery. The receiver repeats the relevant acknowledgment.'),frame('Accept ACK and advance',['Sender','Receiver'],[['May send frame 1','Expects frame 1']],'A lost ACK and a lost data frame are different events, even though either can trigger a sender timeout.')];
 if(kind==='transport'&&mode==='handshake')return [frame('Client opens',['Message','Sequence'],[['SYN','client ISN 100']],'The client announces its initial sequence number.'),frame('Server acknowledges and opens',['Message','Sequence','ACK'],[['SYN + ACK','server ISN 500',101]],'The acknowledgment advances past the client SYN, which consumes one sequence number.'),frame('Client acknowledges',['Message','Sequence','ACK'],[['ACK',101,501]],'The client acknowledges the server SYN. This is a simplified TCP connection establishment without loss or simultaneous open.')];
 if(kind==='tcp')return [frame('Two independent send limits',['cwnd','rwnd'],[[8+' MSS',value+' MSS']],'Congestion control estimates network capacity; receiver flow control advertises buffer space.'),frame('Choose the smaller limit',['Calculation','Allowed outstanding data'],[[`min(8, ${value})`,Math.min(8,value)+' MSS']],'This window limit also depends on already outstanding bytes; it does not mean this many new segments can always be sent immediately.'),frame('Acknowledge delivered bytes',['Event','Effect'],[['New cumulative ACK','Releases acknowledged data from flight']],'Window growth after ACKs and recovery after loss depend on the TCP variant and phase.')];
 if(kind==='routing')return [frame('Two candidate routes from A',['Route','Cost'],[['A → C',8],['A → B → C','2 + '+value]],'Toy nonnegative link costs. Compare total path costs, not just hop counts.'),frame('Evaluate the alternative',['Via B','Direct'],[[2+value,8]],'The alternative route adds the cost to B and the cost B reports to C.'),frame('Choose a minimum-cost path',['Chosen route','Cost'],[[2+value<8?'A → B → C':2+value>8?'A → C':'Either tied route',Math.min(8,2+value)]],'This is a small shortest-path example. Forwarding tables, convergence and loop prevention need their own protocol rules.')];
 if(kind==='fragment')return [frame('A datagram exceeds the MTU',['Datagram','IPv4 header','Link MTU'],[['4000 bytes','20 bytes, no options','1500 bytes']],'DF is clear, so a router may fragment this IPv4 datagram.'),frame('Choose aligned payload chunks',['Fragment payloads','Why 1480?'],[['1480, 1480, 1020 bytes','largest multiple of 8 fitting after a 20-byte header']],'The original payload is 3980 bytes; each fragment gets its own header.'),frame('Label fragment positions',['Payload bytes','Offset in 8-byte units','MF'],[[1480,0,1],[1480,185,1],[1020,370,0]],'Offsets refer to the original payload. MF is clear only on the final fragment. Reassembly occurs at the destination.')];
 if(kind==='apps'){
  const rows=mode==='dns'?[['Client','Ask recursive resolver'],['Resolver','Query authoritative hierarchy if uncached'],['Authoritative server','Return the requested record'],['Resolver','Cache subject to TTL and reply']]:mode==='ftp'?[['Control connection','Send login and transfer commands'],['Data connection','Carry the file bytes'],['Data connection','Close after transfer']]:mode==='http'?[['Client','Send HTTP request'],['Server','Select response status and headers'],['Server','Send response body when applicable']]:[['Sender','Submit and relay mail using SMTP'],['Mailbox server','Store the message'],['Recipient','Retrieve using POP3 in this example']];
  return rows.map((row,i)=>frame(row[0],['Actor or channel','Action'],rows.slice(0,i+1),row[1]+'. This shows logical messages, not a physical transmission trace.'));
 }
 if(kind==='bucket')return [frame('Store transmission credit',['Capacity','Stored tokens','Arrivals'],[[5,3,7]],'One packet requires one token. No refill occurs during this instantaneous arrival burst.'),frame('Admit what credit permits',['Packets admitted','Tokens left'],[[3,0]],'Consume three stored tokens to admit three packets.'),frame('Handle excess packets',['Excess packets','Next refill'],[[4,value+' tokens/s']],'The policy may queue or drop excess traffic. Refilling is capped at the bucket capacity.')];
 if(kind==='medium')return [frame('Shared-medium contenders',['Station A','Station B'],[['Wants to transmit','Wants to transmit']],'For this Ethernet CSMA/CD illustration, use a shared half-duplex medium.'),frame('Both begin before hearing the other',['Event','Result'],[['Collision','Both detect and stop']],'Propagation delay makes carrier sensing insufficient to eliminate all collisions.'),frame('Back off and retry',['Rule','Purpose'],[['Randomized binary exponential backoff','Reduce repeated collisions']],'Switched full-duplex Ethernet does not use CSMA/CD. ALOHA has different transmission and collision rules.')];
 const steps=[['Application','request','A process creates the message.'],['Transport','segment + port','Transport information identifies the receiving process.'],['Internet','packet + destination IP','IP addressing identifies the network destination.'],['Link','frame + next-hop link address','A local frame carries the packet for one hop.'],['Next router','new local frame','The next-hop frame changes while the destination IP remains unchanged in this example without NAT.']];
 return steps.map((s,i)=>frame(s[0],['Layer or device','Visible data'],steps.slice(0,i+1).map(s=>s.slice(0,2)),s[2]));
}
