import {graphFamily,advancedGraphModel} from './algo-graphs.js';
export const familyOf=key=>{
 if(graphFamily(key))return graphFamily(key);
 if(['workflow','analysis'].includes(key))return 'workflow';
 if(['growth','bounds','theta','strict','log'].includes(key))return 'growth';
 if(['loops','halving','decrement','decrement-sum','recursive-insert'].includes(key))return 'loops';
 if(key.startsWith('variable'))return 'variable';
 if(['recurrence','leaves','root','master','master-balanced','master-log','master-boundary','master-root','unequal','unequal-balanced','geometric','fibonacci'].includes(key))return 'recurrence';
 if(['divide','maximum','sum','unsorted-search'].includes(key))return 'divide';
 if(key.startsWith('bottom-up'))return 'bottom-up';
 if(key.startsWith('merge'))return 'merge';
 if(key.startsWith('kmerge'))return 'kmerge';
 if(['stable','space'].includes(key))return 'stable';
 if(['runnerup','tournament','tournament-path','extrema-practice'].includes(key))return 'tournament';
 if(key.startsWith('minmax')||key==='middle')return 'minmax';
 if(key.startsWith('inversion'))return 'inversion';
 if(key.startsWith('closest'))return 'closest';
 if(['power','matrix'].includes(key))return key;
 if(key.startsWith('quick')||['partition','select'].includes(key))return 'partition';
 if(['binary','search'].includes(key))return 'search';
 if(['selection','bubble','insertion','adaptive','heap'].includes(key))return key==='adaptive'?'insertion':key;
 if(['decision','counting'].includes(key))return key;
 if(key.startsWith('graph')||key.startsWith('dfs'))return 'dfs';
 throw Error('Unknown Algorithms model '+key);
};
export const sampleArray=variant=>{const values=[7,2,9,4,1,6];return [...values.slice(variant),...values.slice(0,variant)].map(v=>v+variant*2);};
export function inversionPairs(values){return values.flatMap((v,i)=>values.flatMap((w,j)=>j>i&&v>w?[[i,j]]:[]));}
export function partitionTrace(input){
 const values=[...input],pivot=values.at(-1),steps=[],frame=(title,caption,active=[])=>steps.push({title,caption,art:{type:'array',values:[...values],active,pivot}});
 frame('Pick the last key as pivot',`Pivot ${pivot}; the smaller-key region is initially empty.`);let boundary=0;
 for(let j=0;j<values.length-1;j++){
  if(values[j]<pivot){[values[boundary],values[j]]=[values[j],values[boundary]];boundary++;}
  frame(`Inspect index ${j}`,`The first ${boundary} keys are smaller than ${pivot}. The unchecked suffix is not sorted.`,[j]);
 }
 [values[boundary],values[values.length-1]]=[values[values.length-1],values[boundary]];
 frame('Place the pivot',`Pivot ${pivot} has zero-based sorted index ${boundary}. Only this pivot position is finalized.`,[boundary]);
 return {steps,index:boundary,values};
}
export function mergeTrace(left,right){
 let i=0,j=0,comparisons=0;const out=[],steps=[];
 const frame=caption=>steps.push({title:'Merge two sorted runs',caption,art:{type:'rows',headers:['Left remaining','Right remaining','Output'],rows:[[left.slice(i).join(', ')||'empty',right.slice(j).join(', ')||'empty',out.join(', ')||'empty']]}});
 frame('Compare only the current heads. Both inputs are sorted.');
 while(i<left.length&&j<right.length){comparisons++;const takeLeft=left[i]<=right[j];out.push(takeLeft?left[i++]:right[j++]);frame(`Emit ${out.at(-1)}; advance only its input. ${comparisons} key comparisons so far.`);}
 out.push(...left.slice(i),...right.slice(j));i=left.length;j=right.length;frame(`Copy the remaining suffix without key comparisons. Total comparisons: ${comparisons}.`);
 return {steps,values:out,comparisons};
}
export function binaryTrace(values,target){
 let low=0,high=values.length-1;const steps=[];let found=-1;
 steps.push({title:'Begin with a sorted candidate interval',caption:`Target ${target}. Increasing sorted order is required before halves can be safely discarded.`,art:{type:'array',values,active:[],low,high}});
 while(low<=high){const mid=Math.floor((low+high)/2);steps.push({title:`Search indices ${low} through ${high}`,caption:`Middle index ${mid} holds ${values[mid]}. ${values[mid]===target?'Target found.':values[mid]<target?'Target is larger: discard the midpoint and everything left of it.':'Target is smaller: discard the midpoint and everything right of it.'}`,art:{type:'array',values,active:[mid],low,high}});if(values[mid]===target){found=mid;break;}if(values[mid]<target)low=mid+1;else high=mid-1;}
 if(found<0)steps.push({title:'An empty interval proves absence',caption:`low=${low}, high=${high}; no unchecked position remains.`,art:{type:'array',values,active:[],low,high}});
 return {steps,found};
}
export const graph={A:['B','D'],B:['A','C'],C:['B','D'],D:['A','C'],E:[]};
export function dfsTrace(start='A',adjacency=graph){
 const steps=[],visited=new Set(),finished=new Set(),stack=[],order=[];
 const frame=caption=>steps.push({title:stack.length?'Current recursive path: '+stack.join(' → '):'This connected component is finished',caption,art:{type:'network',nodes:Object.keys(adjacency).map(id=>({id,state:finished.has(id)?'finished':visited.has(id)?'visited':'waiting'})),edges:Object.entries(adjacency).flatMap(([u,neighbors])=>neighbors.filter(v=>u<v).map(v=>[u,v])),active:stack.at(-1),stack:[...stack]}});
 function visit(u){visited.add(u);order.push(u);stack.push(u);frame(`Discover ${u} and mark it immediately. The mark prevents cycles from repeating a visit.`);for(const v of adjacency[u])if(!visited.has(v))visit(v);finished.add(u);stack.pop();frame(`Finish ${u}; return to its caller. Finished vertices stay visited.`);}
 visit(start);return {steps,order,visited:[...visited]};
}
const rowStep=(title,caption,headers,rows)=>({title,caption,art:{type:'rows',headers,rows}});
export function algoModel(key,variant=0){
 variant=Math.max(0,Math.min(2,Math.trunc(variant)));const advanced=advancedGraphModel(key,variant);if(advanced)return advanced;const family=familyOf(key),values=sampleArray(variant),k=3+variant,n=2**k,steps=[];
 const add=(title,caption,art)=>steps.push({title,caption,art});
 if(family==='growth'){
  for(const size of [4,8,16,32].map(v=>v*2**variant))add(`Compare at n=${size}`,'These finite samples illustrate growth. Eventual bounds require the formulas and positive constants, not just a plotted point.',{type:'bars',labels:['log2 n','n','n log2 n','n²'],values:[Math.log2(size),size,size*Math.log2(size),size*size],active:[]});
  if(['bounds','theta'].includes(key))steps.splice(0,steps.length,...[1,2,4,8].map(v=>v*2**variant).map(size=>({title:`Sandwich f(n)=3n+7 at n=${size}`,caption:'For every n>=1, 3n <= 3n+7 <= 10n, since 7 <= 7n. Positive lower and upper linear bounds certify Theta(n).',art:{type:'bars',labels:['lower: 3n','f: 3n+7','upper: 10n'],values:[3*size,3*size+7,10*size],active:[]}})));
  if(key==='strict')steps.splice(0,steps.length,...[4,8,16,32].map(v=>v*2**variant).map(size=>rowStep(`Compare ratios at n=${size}`,'n/n²=1/n tends to zero, so n is little o of n². In contrast, 3n/n=3 stays positive; 3n and n have equal asymptotic order.',['n','n / n²','3n / n'],[[size,1/size,3]])));
  if(key==='log')steps.splice(0,steps.length,...Array.from({length:k+1},(_,i)=>rowStep(`After ${i} halvings`,`n=2^${k} takes ${k} reductions to reach one. This frame has current size ${n/2**i}.`,['Input n','Current size','Reductions'],[[n,n/2**i,i]])));
 }else if(family==='workflow'){
  for(const [i,title] of ['Specify input and output','Choose a valid procedure','Check correctness','Count the chosen operation'].entries())add(title,'A delivery planner needs a valid route before comparing distance or time. Correctness and cost answer different questions.',{type:'flow',labels:['Input','Procedure','Output','Cost model'],active:i});
 }else if(family==='loops'){
  let total=0;for(let i=1;i<=k+2;i++){total+=i;steps.push(rowStep(`Outer index i=${i}`,`The inner loop j=1..i makes ${i} body visits. Accumulated visits: ${total}.`,['i','Inner visits','Running total'],Array.from({length:i},(_,j)=>[j+1,j+1,(j+1)*(j+2)/2])));}
  if(key==='halving')steps.splice(0,steps.length,...Array.from({length:k+1},(_,i)=>rowStep(`After ${i} halvings`,`The current size is ${n/2**i}. Reaching one takes ${k} reductions.`,['Original n','Current size','Reductions'],[[n,n/2**i,i]])));
  if(key==='decrement')steps.splice(0,steps.length,...Array.from({length:k},(_,i)=>rowStep(`Expand T(${k-i})`,i===k-1?`T(1)=1. The ${k-1} added ones give total cost ${k}.`:'Add one local unit, then reduce the input by one.', ['Current size','Added local cost'],[[k-i,i===k-1?'base case: 1':1]])));
  if(key==='recursive-insert'){
   const suffix=[...values.slice(1)].sort((a,b)=>a-b),result=[values[0],...suffix];
   steps.splice(0,steps.length,{title:'Ask the suffix to sort itself',caption:'The recursive call sorts indices 1 onward; its size is n-1.',art:{type:'array',values,active:[0]}},{title:'The suffix has returned sorted',caption:`Keep first key ${values[0]} and insert it into this sorted suffix.`,art:{type:'array',values:result,active:[0]}},{title:'Insert the first key into its place',caption:'Linear insertion work at each shrinking size gives a quadratic worst-case sum.',art:{type:'array',values:[...values].sort((a,b)=>a-b),active:[]}});
  }
 }else if(family==='variable'){
  const divisor=key==='variable-square'?3:2,m=divisor**k;
  for(let i=0;i<=k;i++)steps.push(rowStep(`Transformed step ${i}`,`Use m=log2(n). Taking the ${divisor===3?'cube':'square'} root of n divides m by ${divisor}. Substitute n back only after solving for m.`,['m','log2(current n)','Reductions'],[[m/divisor**i,m/divisor**i,i]]));
 }else if(family==='recurrence'){
  const a=key==='geometric'?1:key==='leaves'?4:2,power=['root','master-root'].includes(key)?2:1;
  for(let level=0;level<=k;level++){
   const rows=Array.from({length:level+1},(_,i)=>{const count=a**i,size=n/2**i;let work=size**power;if(key==='master-log')work=size>1?size*Math.log2(size):1;if(key==='master-boundary')work=size>1?size/Math.log2(size):1;return [i,count,size,count*work];});
   steps.push(rowStep(`Recursion depth ${level}`,`For a=${a}, b=2, there are ${a} children per internal call. Read number of calls and cost per call separately.${level===k?' Size one is a constant-cost base case.':''}`,['Depth','Calls','Size per call','Total local work'],rows));
  }
  if(key.startsWith('unequal'))steps.splice(0,steps.length,rowStep('Unequal children','The ordinary equal-size Master theorem does not fit these fractions. The split sizes still add up to the parent size.', ['Parent size','First child','Second child'],[[27,9,18],[9,3,6],[18,6,12]]),rowStep('Track level work','Analyze the unequal recursion tree directly instead of pretending both children have size n/2.',['Rule','Interpretation'],[['T(n/3)+T(2n/3)','Different child sizes'],['+n','Linear local work']]));
  if(key==='fibonacci'){const costs=[1,1];for(let i=2;i<=k+3;i++)costs[i]=costs[i-1]+costs[i-2]+1;steps.splice(0,steps.length,...costs.slice(2).map((cost,i)=>rowStep(`Cost at size ${i+2}`,`T(${i+2})=T(${i+1})+T(${i})+1. Small decrements with two child calls repeat almost-full-size work.`,['n','T(n-1)','T(n-2)','T(n)'],[[i+2,costs[i+1],costs[i],cost]])));}
 }else if(family==='divide'){
  add('Start with the whole input','Split a non-singleton range into two smaller nonempty ranges.',{type:'array',values,active:[]});
  steps.push(rowStep('Solve each half','Return the quantity that the parent needs. A maximum, sum and search result require different combine operations.',['Left half','Right half'],[[values.slice(0,3).join(', '),values.slice(3).join(', ')]]));
  const result=key==='sum'?values.reduce((a,b)=>a+b,0):Math.max(...values);
  steps.push(rowStep('Combine the half-results',key==='sum'?`Add the two half-sums: ${result}.`:`Compare the two half-maxima: ${result}. An unsorted search must instead examine both halves when needed.`,['Result type','Combined answer'],[[key==='sum'?'sum':'maximum',result]]));
 }else if(family==='merge')steps.push(...mergeTrace([1,4,8].map(v=>v+variant),[2,4,9].map(v=>v+variant)).steps);
 else if(family==='bottom-up'){
  let current=[...values];add('Runs of length one','Every singleton is already sorted.',{type:'array',values:[...current],active:[]});
  for(let width=1;width<current.length;width*=2){const next=[];for(let left=0;left<current.length;left+=2*width)next.push(...mergeTrace(current.slice(left,left+width),current.slice(left+width,left+2*width)).values);current=next;add(`Completed width-${width} pass`,`Merge adjacent runs of at most ${width} keys. A trailing short run uses clamped bounds.`,{type:'array',values:[...current],active:[]});}
 }else if(family==='kmerge'){
  const streams=[[1,5],[2,8],[3,9]].map(row=>row.map(v=>v+variant)),out=[];
  while(streams.some(s=>s.length)){const heads=streams.map(s=>s[0]??Infinity),i=heads.indexOf(Math.min(...heads));out.push(streams[i].shift());steps.push(rowStep('Choose the smallest stream head',`Output ${out.at(-1)} and replace only that stream's head. A min-heap can make this choice in O(log k) time.`,['Stream 1','Stream 2','Stream 3','Output'],[[...streams.map(s=>s.join(', ')||'empty'),out.join(', ')]]));}
 }else if(family==='stable'){
  for(const [i,row] of [[[2,'A'],[1,'B'],[2,'C']],[[1,'B'],[2,'A'],[2,'C']],[[1,'B'],[2,'C'],[2,'A']]].entries())steps.push(rowStep(i===0?'Original records':i===1?'Stable result':'An unstable result is also key-sorted',i===2?'A and C have equal keys, but their original order was reversed. Sorted does not automatically mean stable.':'Keep record identities visible when keys repeat.',['Key','Record identity'],row));
  if(key==='space')steps.splice(0,steps.length,rowStep('Sequentially reuse one buffer','Allocations across time are different from simultaneously live storage.',['Phase','Buffer slots','Additional active call frames'],[['first merge',8,3],['second merge',8,3],['third merge',8,3]]),rowStep('Measure the peak','The same eight-slot buffer is reused. Do not add three copies of eight; report the stack separately.',['Peak buffer','Peak stack'],[[8,'3 frames']]));
 }else if(family==='tournament'){
  const pairs=values.map((v,i)=>[v,'candidate '+i]);steps.push(rowStep('Every key begins as a candidate','Use distinct values. Each comparison eliminates one maximum candidate.',['Key','Role'],pairs));
  const sorted=[...values].sort((a,b)=>b-a);steps.push(rowStep('Only direct losers can be runner-up',`The champion is ${sorted[0]}. To identify the second largest, inspect the keys that lost directly to this champion in the chosen bracket.`,['Sorted check','Value'],[['maximum',sorted[0]],['second largest',sorted[1]]]));
  steps.push(rowStep('Comparison budget for a balanced power-of-two bracket',`With n=${n}, the champion wins ${k} times, so its ${k} direct losers need ${k-1} further comparisons.`,['Maximum phase','Runner-up phase','Total'],[[n-1,k-1,n+k-2]]));
 }else if(family==='minmax'){
  for(let i=0;i<values.length;i+=2)steps.push(rowStep('Separate smaller and larger candidates',`Compare pair ${values[i]}, ${values[i+1]} first. Only the smaller can update the minimum; only the larger can update the maximum.`,['Pair','Smaller','Larger'],[[values.slice(i,i+2).join(', '),Math.min(values[i],values[i+1]),Math.max(values[i],values[i+1])]]));
  if(key==='middle'){const three=values.slice(0,3),sorted=[...three].sort((a,b)=>a-b);steps.splice(0,steps.length,{title:'Choose any three distinct keys',caption:'They are part of the full input. You need an item that is neither overall minimum nor overall maximum.',art:{type:'array',values:three,active:[]}},{title:'Find the middle of those three',caption:`${sorted[1]} has a smaller key and a larger key among these three, so it cannot be a global extremum.`,art:{type:'array',values:sorted,active:[1]}});}
 }else if(family==='inversion'){
  add('Read the original index order','An inversion uses i<j and a strictly larger earlier key. Equal keys never count.',{type:'array',values,active:[]});let count=0;
  for(const [i,j] of inversionPairs(values)){count++;add(`Inverted pair ${count}`,`Index ${i} precedes ${j}, but ${values[i]} > ${values[j]}. Count this pair exactly once.`,{type:'array',values,active:[i,j]});}
  steps.push(rowStep('Total disagreement',`The ${values.length*(values.length-1)/2} possible pairs contain ${count} inversions.`,['Pairs checked by brute force','Inversions'],[[values.length*(values.length-1)/2,count]]));
 }else if(family==='closest'){
  const points=[[1,2],[2,7],[4,4],[5,4],[7,8],[9,1]];
  for(const i of [0,1,2])add(['Split by x coordinate','Inspect the crossing strip','Compare nearby points in y order'][i],['Solve both halves before checking crossing pairs.','The best crossing pair may beat both half-solutions.','The close pair (4,4), (5,4) has distance 1. Maintaining y order makes the combine phase linear.'][i],{type:'points',points,split:4.5,active:i===2?[2,3]:[],strip:i>0?2:0});
 }else if(family==='power'){
  let exponent=8+variant,result=1,base=2;
  while(exponent){steps.push(rowStep('Reuse a squared power','Maintain result × base^remaining = the original requested power. Multiply result when the remaining exponent is odd.', ['Result','Base','Remaining exponent'],[[result,base,exponent]]));if(exponent%2)result*=base;exponent=Math.floor(exponent/2);if(exponent)base*=base;}
  steps.push(rowStep('Remaining exponent is zero','The accumulated result is the requested power. This model uses exact small integer examples.',['Answer'],[[result]]));
 }else if(family==='matrix'){
  for(const row of [['C11','A11×B11','A12×B21'],['C12','A11×B12','A12×B22'],['C21','A21×B11','A22×B21'],['C22','A21×B12','A22×B22']])steps.push(rowStep(`Build block ${row[0]}`,'Each output block adds two block products. Four output blocks therefore use eight recursive products.', ['Output','First product','Second product'],[row]));
  steps.push(rowStep('Rearranging expressions changes the recurrence','Strassen computes different combinations of blocks to use seven products. It does not simply omit one of the eight ordinary products.', ['Method','Products per call','Combine work','Critical exponent'],[['Ordinary block method',8,'Theta(n²)',3],['Strassen',7,'Theta(n²)','log2(7) ≈ 2.807']]));
 }else if(family==='partition')steps.push(...partitionTrace(values).steps);
 else if(family==='search'){
  if(key==='binary')steps.push(...binaryTrace([...values].sort((a,b)=>a-b),variant===2?100:values[2]).steps);
  else for(let i=0;i<values.length;i++){add(`Linear comparison ${i+1}`,`Inspect ${values[i]}; without sorted order there is no safe half to discard.`,{type:'array',values,active:[i]});}
 }else if(['selection','bubble','insertion','heap'].includes(family)){
  const a=[...values];add('Starting keys','We sort in increasing order. Highlighted positions show keys participating in the current operation.',{type:'array',values:[...a],active:[]});
  if(family==='bubble')for(let end=a.length-1;end>0;end--)for(let j=0;j<end;j++){if(a[j]>a[j+1]){[a[j],a[j+1]]=[a[j+1],a[j]];add('Swap adjacent inverted keys','This exchange removes one inversion. A complete pass moves the largest remaining key to the right boundary.',{type:'array',values:[...a],active:[j,j+1]});}}
  else if(family==='insertion')for(let i=1;i<a.length;i++){const x=a[i];let j=i-1;while(j>=0&&a[j]>x){a[j+1]=a[j];j--;}a[j+1]=x;add(`Insert key ${x}`,`The prefix ending at index ${i} is now sorted. The rest is still unchecked.`,{type:'array',values:[...a],active:[j+1]});}
  else if(family==='selection')for(let i=0;i<a.length-1;i++){let m=i;for(let j=i+1;j<a.length;j++)if(a[j]<a[m])m=j;[a[i],a[m]]=[a[m],a[i]];add('Put the next smallest key in place',`The first ${i+1} positions are final. Finding the minimum requires scanning the remaining suffix.`,{type:'array',values:[...a],active:[i]});}
  else {const heap=[9,7,6,4,2,1].map(v=>v+variant);add('A max-heap is not a sorted array','Each parent dominates its children. The root is the maximum.',{type:'array',values:heap,active:[0]});for(let end=heap.length-1;end>0;end--){[heap[0],heap[end]]=[heap[end],heap[0]];let i=0;while(2*i+1<end){let c=2*i+1;if(c+1<end&&heap[c+1]>heap[c])c++;if(heap[i]>=heap[c])break;[heap[i],heap[c]]=[heap[c],heap[i]];i=c;}add('Move the maximum and restore the heap',`The suffix from index ${end} onward is sorted. Repair only the prefix heap.`,{type:'array',values:[...heap],active:[end]});}}
 }else if(family==='decision'){
  steps.push(rowStep('Possible input orders','For three distinct keys there are six possible permutations.',['Permutation'],[['ABC'],['ACB'],['BAC'],['BCA'],['CAB'],['CBA']]));
  for(let depth=1;depth<=3;depth++)steps.push(rowStep(`At most ${2**depth} leaves after ${depth} comparisons`,`A binary comparison has two outcomes. ${2**depth<6?'There are too few leaves for six orders.':'Three comparisons can distinguish six orders in the worst case.'}`,['Comparison depth','Maximum leaves','Orders required'],[[depth,2**depth,6]]));
 }else if(family==='counting'){
  const a=[2,0,2,1,0,3],counts=Array(4).fill(0);add('Small integer keys','Keys lie in 0..3. A counting array has one cell per possible key.',{type:'array',values:a,active:[]});
  for(const x of a){counts[x]++;steps.push(rowStep(`Count key ${x}`,'Update the frequency at that key; this operation is not a comparison between two keys.',['Key','Frequency'],counts.map((c,i)=>[i,c])));}
  add('Reconstruct sorted integer keys','Stable sorting of records needs output positions and a stable placement step; raw frequencies alone do not track record identity.',{type:'array',values:counts.flatMap((c,i)=>Array(c).fill(i)),active:[]});
 }else if(family==='dfs'){
  if(key==='graph')steps.push(rowStep('Neighbors as lists','This undirected graph has V=5 and E=4; each edge appears in two endpoint lists.',['Vertex','Ordered neighbors'],Object.entries(graph).map(([v,neighbors])=>[v,neighbors.join(', ')||'none'])),rowStep('The same graph as a matrix','Rows are source vertices; columns are destination vertices. A one denotes an edge.',['From / to',...Object.keys(graph)],Object.keys(graph).map(u=>[u,...Object.keys(graph).map(v=>Number(graph[u].includes(v)))])),rowStep('Count the storage slots','The ordinary adjacency lists have eight neighbor entries; the matrix reserves 25 edge cells even for an isolated vertex.',['V','E','Neighbor entries','Matrix cells'],[[5,4,8,25]]));
  else steps.push(...dfsTrace(variant===1?'D':variant===2?'E':'A').steps);
 }
 if(!steps.length)throw Error('Empty Algorithms model '+key);
 return {key,family,steps};
}
