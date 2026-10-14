import {kruskalTrace} from './algo-graphs.js';
const groups={
 'mst-alternatives':'mst-analysis',prim:'prim','prim-priority':'prim','prim-vs-path':'prim','mst-unique':'mst-analysis','mst-threshold':'mst-analysis','mst-update':'mst-analysis',
 huffman:'huffman','huffman-cost':'huffman','huffman-heap':'huffman','huffman-decode':'huffman','huffman-ties':'huffman','huffman-tree':'huffman','optimal-merge':'huffman',
 interval:'interval','interval-finish':'interval','interval-proof':'interval','interval-variants':'interval','job-deadlines':'jobs',fractional:'fractional','fractional-select':'fractional',
 dp:'dp-basic',stairs:'stairs','dp-dependencies':'dp-basic',nonadjacent:'dp-basic','stairs-cost':'stairs','probability':'probability','dp-order':'dp-basic','dp-vs-divide':'dp-basic',
 'lcs-brute':'lcs',lcs:'lcs','lcs-states':'lcs','lcs-rule':'lcs','lcs-trace':'lcs','lcs-ties':'lcs','lcs-applications':'lcs','lcs-suffix':'lcs',
 chain:'chain','chain-count':'chain','chain-split':'chain','chain-example':'chain','chain-cost':'chain',
 'knapsack-greedy':'knapsack',knapsack:'knapsack','knapsack-trace':'knapsack','knapsack-states':'knapsack','knapsack-rolling':'knapsack',subset:'subset','coin-change':'coins','dp-strategy':'dp-basic',floyd:'floyd',tsp:'tsp'
};
export const finalFamily=key=>groups[key];
const row=(title,caption,headers,rows)=>({title,caption,art:{type:'rows',headers,rows}});
const copy=grid=>grid.map(r=>[...r]);
export function primTrace(edges,start='A'){
 const ids=[...new Set(edges.flatMap(e=>e.slice(0,2)))].sort(),keys=Object.fromEntries(ids.map(v=>[v,Infinity])),parents={},selected=[],inside=new Set(),steps=[];keys[start]=0;let total=0;
 const frame=(title,caption)=>steps.push(row(title,caption,['Vertex','Inside tree','Connection key','Parent'],ids.map(v=>[v,inside.has(v)?'yes':'no',Number.isFinite(keys[v])?keys[v]:'not connected',parents[v]??'root / none'])));
 frame('Start one tree','The root has connection key zero. Keys measure a single crossing edge, not the whole route from the root.');
 while(inside.size<ids.length){const u=ids.filter(v=>!inside.has(v)&&Number.isFinite(keys[v])).sort((a,b)=>keys[a]-keys[b]||a.localeCompare(b))[0];if(u===undefined)break;inside.add(u);if(parents[u]){selected.push([parents[u],u]);total+=keys[u];}frame(`Add ${u} to the tree`,`Choose its cheapest known crossing edge; selected total is ${total}.`);for(const [a,b,w] of edges){const v=a===u?b:b===u?a:undefined;if(v!==undefined&&!inside.has(v)&&w<keys[v]){keys[v]=w;parents[v]=u;frame(`Improve connection to ${v}`,`Use edge weight ${w}, without adding the root-to-${u} path cost.`);}}}
 return {steps,total,selected,connected:inside.size===ids.length};
}
export function huffmanTrace(weights){
 let serial=0,cost=0;const queue=weights.map((weight,i)=>({id:String.fromCharCode(65+i),weight})),steps=[];
 const snapshot=caption=>steps.push(row('Smallest weights at the frontier',caption,['Node / symbol','Weight'],[...queue].sort((a,b)=>a.weight-b.weight||a.id.localeCompare(b.id)).map(n=>[n.id,n.weight])));
 snapshot('Each symbol begins as a leaf. Pop the two smallest current weights.');
 while(queue.length>1){queue.sort((a,b)=>a.weight-b.weight||a.id.localeCompare(b.id));const left=queue.shift(),right=queue.shift(),node={id:'merge '+(++serial),weight:left.weight+right.weight,left,right};queue.push(node);cost+=node.weight;steps.push({title:`Merge ${left.weight} and ${right.weight}`,caption:`The new subtree weighs ${node.weight}. Running sum of merge costs: ${cost}. Left edges mean 0 and right edges mean 1.`,art:{type:'coding-tree',root:node}});snapshot('The combined subtree returns to the frontier as one weighted item.');}
 const codes={};function walk(node,bits){if(!node.left){codes[node.id]=bits||'0';return;}walk(node.left,bits+'0');walk(node.right,bits+'1');}if(queue.length)walk(queue[0],'');
 if(queue.length)steps.push(row('Code lengths and total weighted bits','For at least two symbols, sum(weight × code length) equals the sum of merge costs. A single-symbol alphabet needs an explicitly chosen convention.',['Symbol','Weight','Code','Weighted bits'],weights.map((w,i)=>{const id=String.fromCharCode(65+i);return [id,w,codes[id],w*codes[id].length];})));
 return {steps,cost,codes,root:queue[0]};
}
export function intervalTrace(intervals){
 const sorted=intervals.map(x=>({...x})).sort((a,b)=>a.end-b.end||a.start-b.start||a.id.localeCompare(b.id)),chosen=[],steps=[];let finish=-Infinity;
 for(const activity of sorted){const accept=activity.start>=finish;if(accept){chosen.push(activity.id);finish=activity.end;}steps.push({title:`${accept?'Choose':'Skip'} activity ${activity.id}`,caption:accept?`It has the earliest available finish at ${activity.end}. Equality at a previous finish is compatible for half-open intervals.`:`Its start ${activity.start} overlaps the last chosen finish ${finish}.`,art:{type:'schedule',intervals:sorted,chosen:[...chosen],active:activity.id}});}
 return {steps,chosen};
}
export function jobsTrace(jobs){
 const horizon=Math.min(jobs.length,Math.max(0,...jobs.map(j=>j.deadline))),slots=Array(horizon).fill('free'),selected=[],steps=[];let profit=0;
 for(const job of [...jobs].sort((a,b)=>b.profit-a.profit||a.id.localeCompare(b.id))){if(job.profit<0)continue;let slot=Math.min(horizon,job.deadline)-1;while(slot>=0&&slots[slot]!=='free')slot--;if(slot>=0){slots[slot]=job.id;profit+=job.profit;selected.push(job.id);}steps.push(row(`${slot>=0?'Schedule':'Reject'} ${job.id}`,`Each job takes one unit. Place an accepted job as late as possible; total profit is ${profit}.`,['Slot finishing time','Assigned job'],slots.map((id,i)=>[i+1,id])));}
 return {steps,slots,selected,profit};
}
export function fractionalTrace(items,capacity){
 const sorted=items.map((item,i)=>({...item,id:item.id??String(i),density:item.value/item.weight})).sort((a,b)=>b.density-a.density||a.id.localeCompare(b.id)),steps=[],chosen=[];let remaining=capacity,total=0;
 steps.push(row('Sort value densities','This explorer uses the simple O(n log n) sorted method. Dividing items is allowed; 0-1 knapsack has a different rule.',['Item','Weight','Value','Value per weight'],sorted.map(i=>[i.id,i.weight,i.value,i.density])));
 for(const item of sorted){if(remaining<=0)break;const weight=Math.min(remaining,item.weight),fraction=weight/item.weight;remaining-=weight;total+=fraction*item.value;chosen.push({id:item.id,fraction});steps.push(row(`Take ${fraction===1?'all':'a fraction'} of ${item.id}`,`Use ${weight} weight units and add ${fraction*item.value} value. Remaining capacity ${remaining}; total value ${total}.`,['Item','Fraction taken','Total value'],[[item.id,fraction,total]]));}
 return {steps,chosen,total};
}
export function stairWays(n){const values=[1,1];for(let i=2;i<=n;i++)values[i]=values[i-1]+values[i-2];return values.slice(0,n+1);}
export function stairCost(costs){const paid=[];for(let i=0;i<costs.length;i++)paid[i]=costs[i]+(i<2?0:Math.min(paid[i-1],paid[i-2]));return {paid,total:costs.length<2?0:Math.min(paid.at(-1),paid.at(-2))};}
export function nonAdjacent(values){const best=[0];for(let i=1;i<=values.length;i++)best[i]=Math.max(best[i-1],values[i-1]+(best[i-2]??0));return best;}
export function seriesProbability(winsA,winsB,p=.5){const grid=Array.from({length:winsA+1},()=>Array(winsB+1).fill(0));for(let j=1;j<=winsB;j++)grid[0][j]=1;for(let i=1;i<=winsA;i++)for(let j=1;j<=winsB;j++)grid[i][j]=p*grid[i-1][j]+(1-p)*grid[i][j-1];return grid;}
export function lcsTrace(a,b){
 const grid=Array.from({length:a.length+1},()=>Array(b.length+1).fill(0)),steps=[],picture=Array.from({length:a.length+1},(_,i)=>Array.from({length:b.length+1},(_,j)=>i===0||j===0?0:'·'));
 steps.push({title:'Initialize empty-prefix boundaries',caption:'A length-zero prefix shares no characters. Each remaining cell is a prefix-pair state.',art:{type:'dp-grid',columns:['∅',...b],labels:['∅',...a],cells:copy(picture),active:[0,0]}});
 for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++){grid[i][j]=a[i-1]===b[j-1]?1+grid[i-1][j-1]:Math.max(grid[i-1][j],grid[i][j-1]);picture[i][j]=grid[i][j];steps.push({title:`Fill prefix state (${i},${j})`,caption:a[i-1]===b[j-1]?`Last characters match at ${a[i-1]}: add one to the diagonal predecessor.`:'Last characters differ: keep the larger of the upper and left predecessor answers.',art:{type:'dp-grid',columns:['∅',...b],labels:['∅',...a],cells:copy(picture),active:[i,j],sources:a[i-1]===b[j-1]?[[i-1,j-1]]:[[i-1,j],[i,j-1]]}});}
 let i=a.length,j=b.length,text='';while(i&&j){if(a[i-1]===b[j-1]){text=a[i-1]+text;i--;j--;}else if(grid[i-1][j]>=grid[i][j-1])i--;else j--;}
 steps.push(row('Read one longest common subsequence','Different traceback tie rules can return different equally long sequences. This trace reconstructs one answer.',['Length','One LCS'],[[grid[a.length][b.length],text||'empty']]));return {steps,grid,length:grid[a.length][b.length],text};
}
export function chainTrace(dimensions){
 const n=dimensions.length-1,cost=Array.from({length:n},()=>Array(n).fill(0)),split=Array.from({length:n},()=>Array(n).fill(-1)),steps=[];
 steps.push(row('Single matrices cost no multiplication','Matrix order stays fixed; only parentheses change.',['Matrix','Dimensions'],Array.from({length:n},(_,i)=>['M'+(i+1),dimensions[i]+'×'+dimensions[i+1]])));
 for(let length=2;length<=n;length++)for(let i=0;i+length<=n;i++){const j=i+length-1,candidates=[];cost[i][j]=Infinity;for(let k=i;k<j;k++){const value=cost[i][k]+cost[k+1][j]+dimensions[i]*dimensions[k+1]*dimensions[j+1];candidates.push(['after M'+(k+1),cost[i][k],cost[k+1][j],dimensions[i]*dimensions[k+1]*dimensions[j+1],value]);if(value<cost[i][j]){cost[i][j]=value;split[i][j]=k;}}steps.push(row(`Optimize M${i+1} through M${j+1}`,`Try each final split. The cheapest total for this interval is ${cost[i][j]}. Shorter subchains were solved first.`,['Split','Left cost','Right cost','Final product','Total'],candidates));}
 function paren(i,j){return i===j?'M'+(i+1):'('+paren(i,split[i][j])+' '+paren(split[i][j]+1,j)+')';}
 return {steps,cost,split,total:n?cost[0][n-1]:0,parenthesization:n?paren(0,n-1):'empty'};
}
export function catalanMatrices(n){const c=[1];for(let i=1;i<n;i++){c[i]=0;for(let j=0;j<i;j++)c[i]+=c[j]*c[i-j-1];}return n<1?0:c[n-1];}
export function knapsackTrace(items,capacity){
 const grid=Array.from({length:items.length+1},()=>Array(capacity+1).fill(0)),steps=[row('Empty item prefix has value zero','Every item is whole or absent. Capacities are nonnegative integers.',['Item','Weight','Value'],items.map((item,i)=>['item '+(i+1),item.weight,item.value]))];
 for(let i=1;i<=items.length;i++){const item=items[i-1];for(let c=0;c<=capacity;c++)grid[i][c]=Math.max(grid[i-1][c],item.weight<=c?item.value+grid[i-1][c-item.weight]:-Infinity);steps.push({title:`Process item ${i} once`,caption:`Take weight ${item.weight}, value ${item.value}, or skip it. Both alternatives read only the previous item row.`,art:{type:'dp-grid',columns:Array.from({length:capacity+1},(_,c)=>String(c)),labels:Array.from({length:i+1},(_,r)=>r?'items 1..'+r:'none'),cells:copy(grid.slice(0,i+1)),active:[i,capacity]}});}
 return {steps,grid,total:grid[items.length][capacity]};
}
export function subsetTrace(values,target){
 const reachable=Array(target+1).fill(false),steps=[];reachable[0]=true;steps.push(row('The empty subset reaches zero','All positive targets begin unreachable.',['Target','Reachable'],reachable.map((v,i)=>[i,v?'yes':'no'])));
 for(const x of values){for(let s=target;s>=x;s--)reachable[s]||=reachable[s-x];steps.push(row(`Use value ${x} at most once`,'Update sums in descending order so this item cannot feed itself repeatedly.',['Target','Reachable'],reachable.map((v,i)=>[i,v?'yes':'no'])));}return {steps,reachable};
}
export function coinTrace(coins,amount){
 const counts=Array(amount+1).fill(Infinity),steps=[];counts[0]=0;
 for(let a=1;a<=amount;a++){for(const coin of coins)if(coin<=a&&Number.isFinite(counts[a-coin]))counts[a]=Math.min(counts[a],1+counts[a-coin]);steps.push(row(`Solve amount ${a}`,'Unlimited copies are allowed. Compare one coin plus a solved smaller amount; never treat an impossible predecessor as a finite count.',['Amount','Minimum coins'],counts.slice(0,a+1).map((v,i)=>[i,Number.isFinite(v)?v:'impossible'])));}return {steps,counts,total:counts[amount]};
}
export function floydTrace(matrix){
 const d=copy(matrix),steps=[];
 for(let k=0;k<d.length;k++){for(let i=0;i<d.length;i++)for(let j=0;j<d.length;j++)if(Number.isFinite(d[i][k])&&Number.isFinite(d[k][j]))d[i][j]=Math.min(d[i][j],d[i][k]+d[k][j]);steps.push({title:`Allow city ${String.fromCharCode(65+k)} as an intermediate`,caption:'The outer loop controls which intermediates may be used. Compare the old route with a route through this city.',art:{type:'dp-grid',columns:d.map((_,i)=>String.fromCharCode(65+i)),labels:d.map((_,i)=>String.fromCharCode(65+i)),cells:d.map(r=>r.map(v=>Number.isFinite(v)?v:'no path')),active:[k,k],intermediate:k,focusLabel:'Green identifies the current intermediate vertex; amber marks its row and column. This phase updates the whole matrix.'}});}
 return {steps,distance:d,negativeCycle:d.some((r,i)=>r[i]<0)};
}
export function tspTrace(matrix){
 const n=matrix.length,dp=Array.from({length:1<<n},()=>Array(n).fill(Infinity)),steps=[];dp[1][0]=0;
 for(let mask=1;mask<1<<n;mask++){if(!(mask&1))continue;for(let last=0;last<n;last++)if(Number.isFinite(dp[mask][last]))for(let next=1;next<n;next++)if(!(mask&(1<<next)))dp[mask|(1<<next)][next]=Math.min(dp[mask|(1<<next)][next],dp[mask][last]+matrix[last][next]);const states=dp[mask].flatMap((v,i)=>Number.isFinite(v)?[[Array.from({length:n},(_,j)=>mask&(1<<j)?String.fromCharCode(65+j):'').filter(Boolean).join(', '),mask.toString(2).padStart(n,'0'),String.fromCharCode(65+i),v]]:[]);if(states.length)steps.push(row('Visited-set and last-city states','The bit mask records visited cities, with A at bit zero. Visit an unvisited city next; returning to A is deferred until all cities are visited.',['Visited cities','Mask','Last city','Path cost'],states));}
 const full=(1<<n)-1,total=Math.min(...dp[full].map((v,i)=>i===0?Infinity:v+matrix[i][0]));steps.push(row('Close the tour back to A','The return edge is part of the cost. Compare all possible final cities.',['Last city','Path cost','Return cost','Tour cost'],dp[full].flatMap((v,i)=>i&&Number.isFinite(v)?[[String.fromCharCode(65+i),v,matrix[i][0],v+matrix[i][0]]]:[])));return {steps,total,dp};
}
export function finalModel(key,variant=0){
 const family=finalFamily(key);if(!family)return;let steps;const n=4+variant;
 if(family==='prim'){
  steps=primTrace([['A','B',2],['A','C',3+variant],['B','C',2],['B','D',5],['C','D',2],['D','E',1]]).steps;
  if(key==='prim-vs-path'||key==='prim-priority')steps.push(row('Compare the objectives on a triangle','For A—B=2, A—C=3, B—C=2, Prim can select AB and BC (total 4). A shortest-path tree from A selects AB and AC (total 5) to give C distance 3.', ['Method','Priority update','Goal'],[['Prim','min(key[v], w(u,v))','minimum total tree weight'],['Dijkstra','min(d[v], d[u]+w(u,v))','shortest distance from source']]));
 }else if(family==='mst-analysis'){
  steps=kruskalTrace([['A','B',1],['B','C',2],['A','C',3+variant]]).steps;
  steps.push(row('A cycle tests a non-tree edge','Adding AC creates a triangle with tree edges AB=1 and BC=2. Its replacement threshold is the maximum path weight, 2.',['New AC weight','Consequence'],[[1,'replace BC: cheaper tree'],[2,'equally cheap alternative'],[3,'keep the current tree']]));
  if(key==='mst-threshold'||key==='mst-update')steps.push(row('A cut tests a changed tree edge','Removing BC leaves cut {A,B} | {C}. Alternative crossing edge AC costs 3, so BC may rise to 3 without making this tree strictly more expensive than the alternative.',['Changed edge','Always preserves the chosen MST?'],[['tree edge decreases','yes'],['non-tree edge increases','yes'],['tree edge increases','check its cut'],['non-tree edge decreases','check its cycle']]));
 }else if(family==='huffman')steps=huffmanTrace([2+variant,3+variant,7,8]).steps;
 else if(family==='interval'){
  steps=intervalTrace([{id:'A',start:0,end:3},{id:'B',start:1,end:2},{id:'C',start:2,end:4},{id:'D',start:4,end:6},{id:'E',start:3,end:7}]).steps;
  if(key==='interval-variants')steps.push(row('Check the scheduling objective','The earliest-finish rule maximizes count for unweighted single-resource intervals. It is not a universal rule for different profits or for assigning rooms.',['Task','Relevant structure'],[['maximize activity count','earliest finish'],['maximize total value','weighted interval DP'],['minimize rooms','maximum overlap']]));
 }else if(family==='jobs')steps=jobsTrace([{id:'A',deadline:2,profit:70+variant*10},{id:'B',deadline:1,profit:40},{id:'C',deadline:2,profit:30},{id:'D',deadline:3,profit:20}]).steps;
 else if(family==='fractional'){
  steps=fractionalTrace([{id:'A',weight:2,value:12},{id:'B',weight:3,value:15},{id:'C',weight:5,value:20}],5+variant).steps;
  if(key==='fractional-select')steps.push(row('Selection replaces a full density sort','This illustrated sorted trace is O(n log n). A separate O(n) method uses linear-time pivot selection and discards one partition at each step.',['Step','Action'],[['choose a median density','partition higher, equal, lower densities'],['sum high-density weights','decide which side contains the capacity boundary'],['recurse on only that side','include all guaranteed higher-density items']]));
 }else if(family==='dp-basic'){
  const values=[4,1,5,2,6].map(v=>v+variant),best=nonAdjacent(values);steps=values.map((v,i)=>row(`Solve the first ${i+1} nonadjacent values`,`Skip ${v}: ${best[i]}. Take it: ${v} + ${best[i-1]??0}. Keep their maximum.`,['Prefix length','Best value'],best.slice(0,i+2).map((b,j)=>[j,b])));
  if(key==='dp-order')steps.unshift(row('Read table dependencies before picking an order','If cell (i,j) reads (i-1,j) and (i,j-1), fill above and left first. Another recurrence can require a different order.',['Dependency','Already available under increasing rows/columns?'],[['upper cell','yes'],['left cell','yes'],['right cell','no: needs another order']]));
 }else if(family==='stairs'){
  if(key==='stairs-cost'){const costs=[10,15,20,5+variant],result=stairCost(costs);steps=costs.map((v,i)=>row(`Pay stair ${i}`,`Cost ${v} plus the cheaper allowed predecessor gives ${result.paid[i]}. Starting directly at stair 0 or 1 costs just that stair.`,['Stair','Cost','Best paid cost'],costs.slice(0,i+1).map((c,j)=>[j,c,result.paid[j]])));steps.push(row('Step beyond the last stair','The top has no charge: take the cheaper of the last two paid states.',['Minimum total'],[[result.total]]));}
  else {const ways=stairWays(n);steps=ways.map((v,i)=>row(`Climb total ${i}`,i<2?'One empty climb reaches height zero; one single-step climb reaches height one.':`Last step of size one contributes ${ways[i-1]} ways; size two contributes ${ways[i-2]}.`,['Height','Ways'],ways.slice(0,i+1).map((w,j)=>[j,w])));}
 }else if(family==='probability'){
  const p=.5+variant*.1,grid=seriesProbability(3,3,p),picture=Array.from({length:4},(_,i)=>Array.from({length:4},(_,j)=>i===0&&j===0?'not used':i===0?1:j===0?0:'·'));
  steps=[row('Define a race-to-wins state',`A wins each independent game with probability ${p}. P(i,j) is A’s chance to win the series when A needs i more wins and B needs j.`,['Boundary','Probability'],[['A needs zero, B still needs wins',1],['B needs zero, A still needs wins',0]])];
  for(let i=1;i<=3;i++)for(let j=1;j<=3;j++){picture[i][j]=Number(grid[i][j].toFixed(3));steps.push({title:`Compute P(${i},${j})`,caption:`A wins next: probability ${Number(p.toFixed(2))}, then use P(${i-1},${j}). B wins next: probability ${Number((1-p).toFixed(2))}, then use P(${i},${j-1}). Add these disjoint weighted cases. Display values are rounded.`,art:{type:'dp-grid',columns:['B needs 0','1','2','3'],labels:['A needs 0','1','2','3'],cells:copy(picture),active:[i,j],sources:[[i-1,j],[i,j-1]]}});}
 }else if(family==='lcs')steps=lcsTrace(['ABC','ABA','BAC'][variant],['BAC','BAA','ABC'][variant]).steps;
 else if(family==='chain'){
  steps=chainTrace([10,30,5,60+variant*10]).steps;
  if(key==='chain-count')steps=Array.from({length:n},(_,i)=>row(`Parenthesize ${i+1} matrices`,'Count valid full binary parenthesizations without changing matrix order.',['Matrix count','Ways'],Array.from({length:i+1},(_,j)=>[j+1,catalanMatrices(j+1)])));
 }else if(family==='knapsack'){
  steps=knapsackTrace([{weight:2,value:3},{weight:3,value:4},{weight:4,value:5}],5+variant).steps;
  if(key==='knapsack-greedy')steps.unshift(row('Density can fail for whole items','Capacity 4 with (weight,value)=(3,5),(2,3),(2,3): density-first takes value 5, but the two weight-2 items give value 6.',['Choice','Weight','Value'],[['highest-density item',3,5],['two smaller items',4,6]]));
  if(key==='knapsack-rolling')steps.push(row('Roll rows without reusing an item','For one item of weight 2 and value 3, capacity 4 must still give 3 in 0-1 knapsack. An upward scan incorrectly creates value 6 by using it twice.',['Update order','Capacity-4 answer'],[['downward: previous-item values',3],['upward: reuses current item',6]]));
 }else if(family==='subset')steps=subsetTrace([2,3,5],7+variant).steps;
 else if(family==='coins')steps=coinTrace([1,3,4],6+variant).steps;
 else if(family==='floyd')steps=floydTrace([[0,3,8,Infinity],[Infinity,0,-2,7],[Infinity,Infinity,0,2],[Infinity,Infinity,Infinity,0]]).steps;
 else if(family==='tsp')steps=tspTrace([[0,10,15,20],[10,0,35,25],[15,35,0,30],[20,25,30,0]]).steps;
 return {key,family,steps};
}
