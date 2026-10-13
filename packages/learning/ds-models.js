import {advancedDSKinds,advancedDSModel} from './ds-advanced.js';
import {finalDSKinds,finalDSModel} from './ds-final.js';
export const dsKinds=['list','array','traverse','insert','delete','recursion','fold','append','return-tail','remove-first','remove-all','pairs','reverse','reverse-recursive','circular','double','log','log-graph','growth','bounds','theta','ratio','loops','nested','search','cases','stack','stack-array','queue'];
dsKinds.push(...advancedDSKinds);
dsKinds.push(...finalDSKinds);
const nodes=n=>Array.from({length:n},(_,i)=>({id:'N'+i,value:3*(i+1)}));
const row=(label,values,end='NULL',active=-1,double=false,circular=false)=>({label,values,end,active,double,circular});
const lists=(...rows)=>({type:'lists',rows});
const frame=(title,art,caption)=>({title,art,caption});
const table=(headers,rows)=>({type:'table',headers,rows});
const f=(name,fn,limit=16)=>({name,points:Array.from({length:limit},(_,i)=>({x:i+1,y:fn(i+1)}))});
export function validStackPermutation(input,output){
 if(input.length!==output.length||new Set(input).size!==input.length||new Set(output).size!==output.length||output.some(x=>!input.includes(x)))return false;
 const stack=[];let next=0;for(const value of output){while(stack.at(-1)!==value&&next<input.length)stack.push(input[next++]);if(stack.pop()!==value)return false;}return true;
}
export function dsModel(kind,n=4,target=n-1){
 if(finalDSKinds.includes(kind))return finalDSModel(kind,n);
 if(advancedDSKinds.includes(kind))return advancedDSModel(kind,n);
 if(!dsKinds.includes(kind))throw Error('Unknown DS model '+kind);
 n=Math.max(3,Math.min(6,Math.round(n)));const original=nodes(n),steps=[];
 const add=(title,art,caption)=>steps.push(frame(title,art,caption));
 if(['list','array','traverse'].includes(kind)){
  if(kind==='array'){add('Direct indexing and sequential links',table(['Index','Payload','Assumed byte address'],original.map((node,i)=>[i,node.value,100+4*i])),'This separate array example assumes base address 100 and four-byte elements. Node links do not imply these physical addresses.');add('Reach a list element',lists(row('head',original,'NULL',n-1)),`From head, ${n-1} next hops reach the last node. A known array index instead computes its address directly.`);}
  else{add('Keep head; create a separate cursor',lists(row('head',original)),`There are ${n} live nodes. The next labels name node identities; they are not payload values.`);for(let i=0;i<n;i++)add('Visit node '+original[i].id,lists(row('cursor visits',original,'NULL',i)),`Read payload ${original[i].value}; visited count = ${i+1}. Head still names N0.`);add('Stop at NULL',lists(row('head remains',original)),`The cursor is now NULL. Count ${n}; sum ${original.reduce((a,b)=>a+b.value,0)}. NULL contributes no node.`);}
 }else if(['insert','append','delete','return-tail'].includes(kind)){
  add('Initial reachable list',lists(row('head',original)),'Follow the links from head before changing anything.');
  if(kind==='insert'){const fresh={id:'NEW',value:8};add('Initialize the new node and preserve the successor',lists(row('existing path',original),row('new -> old successor',[fresh,...original.slice(1)])),'NEW.next now points to N1. N0.next still points to N1; NEW has not yet been inserted into the head path.');add('Connect the predecessor',lists(row('head',[original[0],fresh,...original.slice(1)])),`Set N0.next=NEW. The live list now contains ${n+1} nodes; the original suffix is preserved.`);}
  if(kind==='append'){for(let i=0;i<=n;i++)add(i===n?'Base case: create the final node':'Call append on the suffix',lists(row('current suffix',original.slice(i))),i===n?'The empty suffix returns a new node NEW with payload 99 and next=NULL.':`Frame for ${original[i].id} waits for the updated suffix head.`);add('Reconnect the returned suffix',lists(row('head',[...original,{id:'NEW',value:99}])),`Each nonempty call returns its own node. Head remains N0; length ${n+1}.`);}
  if(kind==='delete'){add('Preserve the successor before release',lists(row('head',original,'NULL',1)),'Target N1 contains 6. Retain its successor N2 while the target is still alive.');add('Bypass, then release',lists(row('head',[original[0],...original.slice(2)])),`Set N0.next=N2, then release detached N1. The live path has ${n-1} nodes; do not read N1 again.`);}
  if(kind==='return-tail'){add('The faulty return forwards only NEW',lists(row('returned head',[{id:'NEW',value:99}]),row('allocated original nodes',original)),'After p.next=badAppend(p.next), returning p.next makes every original next point to NEW. The original allocations still exist; the table shows their final next links.');steps.at(-1).art=table(['Reference','Final target'],[['head','NEW'],...original.map(node=>[node.id+'.next','NEW']),['NEW.next','NULL']]);add('Reachability is not allocation count',lists(row('new head',[{id:'NEW',value:99}])),`Only one node is reachable from the returned head. ${n} original allocations have not been freed by this faulty routine.`);}
 }else if(['recursion','fold','reverse-recursive'].includes(kind)){
  for(let depth=0;depth<=n;depth++){
   if(kind==='reverse-recursive'&&depth===n)break;
   add(depth===n?'Empty suffix base case':'Descend into a smaller suffix',lists(row('current argument',original.slice(depth))),`Waiting real-node frames: ${Math.min(depth,n)}. ${depth===n?'Return 0 for length or sum; print nothing.':'Keep this node while the suffix is processed.'}`);
  }
  if(kind==='reverse-recursive'){
   add('Single-node suffix returns the new head',lists(row('new head',[original.at(-1)])),`The base case returns ${original.at(-1).id}, the old tail.`);
   for(let i=n-2;i>=0;i--)add('Reconnect '+original[i].id,lists(row('reversed suffix',original.slice(i).reverse()),row('waiting prefix',original.slice(0,i),original[i].id)),`Set the old successor next to ${original[i].id}, then set ${original[i].id}.next=NULL. Return the same new-head pointer upward.`);
  }else{
   let sum=0;const output=[];
   for(let i=n-1;i>=0;i--){sum+=original[i].value;output.push(original[i].value);add('Return through '+original[i].id,table(['Quantity','Current result'],[['Returned length',n-i],['Returned sum',sum],['Print-after output',output.join(', ')]]),kind==='fold'?`This frame adds one to the suffix length and ${original[i].value} to the suffix sum.`:'Printing after the suffix call outputs the tail first. No node link is changed.');}
  }
 }else if(['remove-first','remove-all'].includes(kind)){
  const xs=[{id:'N0',value:3},{id:'N1',value:2},{id:'N2',value:2},{id:'N3',value:6},{id:'N4',value:2}];add('Match target = 2',lists(row('head',xs)),'The target appears three times; first-match removal and all-match filtering differ.');let live=[...xs],removed=0;
  for(const node of xs.filter(x=>x.value===2)){live=live.filter(x=>x.id!==node.id);removed++;add('Remove '+node.id,lists(row('surviving head',live)),`Retain its successor and release the removed allocation once. ${removed} node(s) removed.`);if(kind==='remove-first')break;}
  add('Final surviving path',lists(row('head',live)),kind==='remove-first'?'Stop after the first match; the two later matching nodes remain.':'The filter has continued through every suffix; no payload 2 remains.');
 }else if(kind==='pairs'){
  let live=original.map(x=>({...x}));add('Swap data, keep node identities',lists(row('head',live)),'Pairs are positions 0/1, 2/3, and so on. The odd last position, if present, has no partner.');
  for(let i=0;i+1<n;i+=2){[live[i].value,live[i+1].value]=[live[i+1].value,live[i].value];add('Swap pair '+(i/2+1),lists(row('head',live.map(x=>({...x})),'NULL',i)),`Payloads at N${i} and N${i+1} exchange. Their identities and next fields stay the same.`);}
 }else if(kind==='reverse'){
  add('prev=NULL; curr=head',lists(row('prev',[]),row('curr',original)),'The reversed prefix is initially empty.');
  for(let i=0;i<n;i++)add('Reverse next at '+original[i].id,lists(row('prev: reversed prefix',original.slice(0,i+1).reverse()),row('curr: untouched suffix',original.slice(i+1))),`Save the old next first. Relink ${original[i].id} toward prev, then advance both pointers. No node is copied or allocated.`);
  add('head=prev',lists(row('head',original.slice().reverse())),`The old tail is the new head; the old head is the new NULL-terminated tail. Length remains ${n}.`);
 }else if(kind==='circular'){
  add('Last next returns to head',lists(row('head',original,'N0',-1,false,true)),'This is a nonempty circle. Handle head=NULL before starting a do-while traversal.');
  for(let i=0;i<n;i++)add('Visit '+original[i].id,lists(row('one lap',original,'N0',i,false,true)),`Visit count ${i+1}; advance to ${i===n-1?'N0 (head)':original[i+1].id}. ${i===n-1?'The first return to head ends the traversal.':'Do not stop at NULL: no such next link exists here.'}`);
 }else if(kind==='double'){
  add('Both directions must agree',lists(row('head',original,'NULL',-1,true)),'First.prev=NULL and last.next=NULL in this noncircular list.');const fresh={id:'NEW',value:8};add('Insert between N0 and N1',lists(row('head',[original[0],fresh,...original.slice(1)],'NULL',1,true)),'Set N0.next=NEW, NEW.prev=N0, NEW.next=N1, and N1.prev=NEW. Four affected link assignments establish two consistent adjacency pairs.');add('Remove NEW again',lists(row('head',original,'NULL',-1,true)),'Repair N0.next=N1 and N1.prev=N0 before releasing NEW. Both surviving-neighbor fields change.');
 }else if(['log','log-graph'].includes(kind)){
  if(kind==='log'){for(let i=0;i<=n;i++)add('Halving from a power of two',table(['Halvings','Remaining value'],[[i,2**(n-i)]]),`${2**n}=2^${n}. After ${i} halvings, the positive value is ${2**(n-i)}. Reaching one takes ${n} halvings, illustrating log_2(${2**n})=${n}.`);}
  else add('Two bases, two directions',{type:'graph',series:[{name:'log base 2',points:[.25,.5,1,2,4,8].map(x=>({x,y:Math.log2(x)}))},{name:'log base 1/2',points:[.25,.5,1,2,4,8].map(x=>({x,y:-Math.log2(x)}))}],xLabel:'Positive argument x',yLabel:'Logarithm',cursor:2**(n-3)},'Both curves pass through (1,0). Base 2 is increasing; base 1/2 is decreasing. Points joined here are samples of continuous log curves; nonpositive x is outside the domain.');
 }else if(['growth','bounds','theta','ratio'].includes(kind)){
  const series=kind==='growth'?[f('n',x=>x),f('n log2 n',x=>x*Math.log2(x)),f('n squared',x=>x*x)]:kind==='bounds'?[f('3n: lower',x=>3*x),f('3n+2: actual',x=>3*x+2),f('5n: upper',x=>5*x)]:kind==='theta'?[f('3n squared: lower',x=>3*x*x),f('3n squared+2n: actual',x=>3*x*x+2*x),f('5n squared: upper',x=>5*x*x)]:[f('n / n squared',x=>1/x)];
  add('Compare sampled function values',{type:'graph',series,xLabel:'Input size n',yLabel:kind==='ratio'?'Ratio f(n)/g(n)':'Operation count',cursor:n},'Change the example size, then press NEXT STEP to inspect its numerical values. This finite linear-scale plot illustrates growth; eventual claims also require the algebraic argument.');
  add('Values at n='+n,table(['Function','Value'],series.map(s=>[s.name,s.points[n-1].y])),kind==='ratio'?'The formula 1/n tends to zero as n increases, so n is little-o of n squared.':kind==='bounds'?'For every n>=1, 3n <= 3n+2 <= 5n: fixed witnesses prove both linear bounds.':kind==='theta'?'For n>=1, 2n<=2n squared, establishing the tight quadratic upper witness; the positive quadratic term is the lower witness.':'An illustration at one n is not a proof of eventual growth. Use the formulas and their ratios to justify the comparison.');
 }else if(kind==='loops'){
  const limit=2**n;for(let i=0;i<=n;i++)add(i===n?'Stop test fails':'Execute body at i='+2**i,table(['State','Value'],[['i',2**i],['Exclusive stop',limit],['Completed body visits',i]]),i===n?`i=${limit} is not below ${limit}; there were exactly ${n} visits.`:`The body runs at i=${2**i}; multiply i by two afterward. Initialization at 1 is essential.`);
 }else if(kind==='nested'){
  for(let i=0;i<=n;i++)add('Count completed outer rows',{type:'grid',n,completedRows:i},`${i} outer rows have completed; their inner visits total ${i*(i+1)/2}. Row j performs j visits. The final count is ${n*(n+1)/2}, not ${n*n}.`);
 }else if(kind==='search'){
  target=Math.max(0,Math.min(n,Math.round(target)));const comparisons=target===n?n:target+1;
  add('Choose a target position',lists(row('input',original)),target===n?'The target is absent. Every node must be inspected.':`Target is node N${target}, payload ${original[target].value}. Position is zero-based.`);
  for(let i=0;i<comparisons;i++)add('Comparison '+(i+1),lists(row('cursor',original,'NULL',i)),i===target?'Match: stop now.':`No match yet. ${i+1} comparison(s) performed; ${i===n-1?'the cursor reaches NULL and the absent search stops.':'follow next.'}`);
 }else if(kind==='cases'){
  add('Fix n='+n,table(['Input cost','Operations'],[['Input A',n],['Input B',2*n],['Input C',5*n]]),'These are three explicitly stated input costs at the same size.');add('Select a case function',table(['Case','Value'],[['Best',n],['Worst',5*n],['Average if equally likely',8*n/3]]),'The average assumes probability 1/3 for each of these three inputs. Upper and lower bounds are separate descriptions of any chosen case function.');
 }else if(['stack','stack-array','queue'].includes(kind)){
  const values=Array.from({length:n},(_,i)=>({id:'I'+i,value:i+1})),current=[],served=[];
  const view=()=>kind==='stack-array'?{type:'stack-array',values:current.map(x=>({...x})),capacity:n+2}:{type:'sequence',queue:kind==='queue',values:current.map(x=>({...x}))};
  add('Initially empty',view(),kind==='stack-array'?'Empty top=-1. Check capacity before a push.':'No item can safely be removed from an empty container.');
  for(const item of values){current.push(item);add((kind==='queue'?'Enqueue ':'Push ')+item.value,view(),kind==='queue'?`New rear=${item.value}; front=${current[0].value}.`:`New top payload=${item.value}${kind==='stack-array'?'; top index='+String(current.length-1):''}.`);}
  while(current.length){const item=kind==='queue'?current.shift():current.pop();served.push(item.value);add((kind==='queue'?'Dequeue ':'Pop ')+item.value,view(),`Output so far: ${served.join(', ')}. ${kind==='queue'?'The oldest waiting item leaves.':'The most recent remaining item leaves.'}${kind==='stack-array'?' top index='+String(current.length-1)+'.':''}`);}
 }
 return {kind,n,steps};
}
