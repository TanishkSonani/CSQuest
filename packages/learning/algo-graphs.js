// Small deterministic traces. Infinity remains numeric internally and is labeled in pictures.
const groups={
 'dfs-times':'dfs-analysis','dfs-edges':'dfs-analysis','dfs-undirected':'dfs-analysis','dfs-back':'dfs-analysis','dfs-cycle':'dfs-analysis','dag-finish':'topological',topological:'topological',articulation:'articulation',
 bfs:'bfs','bfs-layers':'bfs','bfs-bipartite':'bipartite',greedy:'greedy',dijkstra:'dijkstra','dijkstra-relax':'dijkstra','dijkstra-zero':'dijkstra','dijkstra-negative':'dijkstra-negative','priority-distance':'priority-distance','dijkstra-cost':'path-cost','dijkstra-storage':'path-cost','dag-path':'dag-path',bellman:'bellman','bellman-cycle':'bellman','bellman-stop':'bellman',mst:'mst','mst-cut':'mst',kruskal:'mst'
};
export const graphFamily=key=>groups[key];
const vertices=edges=>[...new Set(edges.flatMap(([u,v])=>[u,v]))].sort();
const display=v=>Number.isFinite(v)?v:'not reached';
const table=(title,caption,headers,rows)=>({title,caption,art:{type:'rows',headers,rows}});
const network=(ids,edges,{directed=true,active='',visited=[],finished=[],badges={},selected=[],stack=[],frontierLabel='Active calls',badgeLabel='Vertex values'}={})=>({type:'network',directed,nodes:ids.map(id=>({id,state:finished.includes(id)?'finished':visited.includes(id)?'visited':'waiting',badge:badges[id]??''})),edges:edges.map(e=>e.slice(0,2)),weights:edges.map(e=>e[2]??''),active,selected,stack,frontierLabel,badgeLabel});
export const directedExample={A:['B','D'],B:['C'],C:['A','D'],D:[],E:['B']};
export const dagExample={A:['B','C'],B:['D'],C:['D'],D:['E'],E:[]};
export const bfsExample={A:['B','C'],B:['A','D'],C:['A','D'],D:['B','C','E'],E:['D']};
export const weightedExample=variant=>[['A','B',4+variant],['A','C',1+variant],['C','B',2],['B','D',1],['C','D',5],['D','E',2]];
export const negativeExample=[['A','B',2],['A','C',5],['C','B',-4]];
const adjacencyEdges=adj=>Object.entries(adj).flatMap(([u,neighbors])=>neighbors.map(v=>[u,v]));
export function directedDFS(adj=directedExample){
 const ids=Object.keys(adj),color=Object.fromEntries(ids.map(v=>[v,'white'])),discovery={},finish={},parent={},classified=[],steps=[],stack=[];let time=0;
 const frame=(title,caption,active='')=>steps.push({title,caption,art:network(ids,adjacencyEdges(adj),{active,visited:ids.filter(v=>color[v]!=='white'),finished:ids.filter(v=>color[v]==='black'),badges:Object.fromEntries(ids.map(v=>[v,`${discovery[v]??'–'} / ${finish[v]??'–'}`])),stack:[...stack],badgeLabel:'Discovery / finish'})});
 function visit(u){color[u]='gray';discovery[u]=++time;stack.push(u);frame(`Discover ${u} at time ${time}`,'The first badge number is discovery time; the second is finish time. An unfinished vertex is active.',u);
  for(const v of adj[u]){let type;if(color[v]==='white'){type='tree';parent[v]=u;classified.push({u,v,type});visit(v);continue;}type=color[v]==='gray'?'back':discovery[u]<discovery[v]?'forward':'cross';classified.push({u,v,type});frame(`${u} → ${v}: ${type} edge`,type==='back'?'The destination is an active ancestor. The directed edge closes a cycle.':type==='forward'?'The destination is a finished descendant, but this edge did not discover it.':'The destination is in a different finished branch, outside this active ancestry.',u);}
  color[u]='black';finish[u]=++time;stack.pop();frame(`Finish ${u} at time ${time}`,'Finish the call only after all outgoing neighbors have been checked.',stack.at(-1)||'');
 }
 for(const v of ids)if(color[v]==='white')visit(v);
 return {steps,discovery,finish,parent,classified,cyclic:classified.some(e=>e.type==='back')};
}
export function topologicalTrace(adj=dagExample){
 const ids=Object.keys(adj),indegree=Object.fromEntries(ids.map(v=>[v,0]));for(const neighbors of Object.values(adj))for(const v of neighbors)indegree[v]++;
 const out=[],steps=[];let ready=ids.filter(v=>!indegree[v]).sort();
 steps.push(table('Find zero-indegree choices','Zero indegree means no unmet prerequisite. Break ties alphabetically in this example.',['Vertex','Unmet prerequisites'],ids.map(v=>[v,indegree[v]])));
 while(ready.length){const u=ready.shift();out.push(u);for(const v of adj[u])if(--indegree[v]===0)ready.push(v);ready.sort();steps.push({title:`Schedule ${u}`,caption:`Output so far: ${out.join(' → ')}. Ready choices: ${ready.join(', ')||'none'}. Other tie rules may give a different valid order.`,art:network(ids,adjacencyEdges(adj),{finished:[...out],stack:[...ready],frontierLabel:'Zero-indegree choices'})});}
 const cyclic=out.length!==ids.length;if(cyclic)steps.push(table('No ready vertex, but work remains','The remaining subgraph contains a directed cycle, so no complete topological order exists.',['Scheduled','Total vertices'],[[out.length,ids.length]]));
 return {steps,order:out,cyclic};
}
export function bfsTrace(adj=bfsExample,start='A'){
 const ids=Object.keys(adj),distance=Object.fromEntries(ids.map(v=>[v,Infinity])),queue=[start],order=[],steps=[];distance[start]=0;
 const edges=adjacencyEdges(adj).filter(([u,v])=>u<v);
 const frame=(title,caption,active='')=>steps.push({title,caption,art:network(ids,edges,{directed:false,active,visited:ids.filter(v=>Number.isFinite(distance[v])),finished:[...order],badges:Object.fromEntries(ids.map(v=>[v,display(distance[v])])),stack:[...queue],frontierLabel:'FIFO queue: front → rear'})});
 frame(`Enqueue source ${start}`,'The source has distance zero. Mark on enqueue so another edge cannot enqueue it again.');
 while(queue.length){const u=queue.shift();for(const v of adj[u])if(!Number.isFinite(distance[v])){distance[v]=distance[u]+1;queue.push(v);frame(`Discover ${v} from ${u}`,`One more edge gives distance ${distance[v]}. The queue preserves layer order.`,u);}order.push(u);frame(`Finish scanning ${u}`,'Every neighbor was checked. Dequeue the oldest remaining discovered vertex next.');}
 return {steps,distance,order};
}
export function bipartiteTrace(adj=bfsExample){
 const colors={},steps=[];let valid=true;const ids=Object.keys(adj);
 for(const start of ids){if(colors[start]!==undefined)continue;colors[start]=0;const queue=[start];steps.push(table(`Start component at ${start}`,'Check every component, including one disconnected from the first root.',['Vertex','Color'],Object.entries(colors)));
  while(queue.length){const u=queue.shift();for(const v of adj[u]){if(colors[v]===undefined){colors[v]=1-colors[u];queue.push(v);steps.push(table(`Give ${v} the opposite color to ${u}`,'Every edge must connect color 0 to color 1.',['Vertex','Color'],Object.entries(colors)));}else if(colors[v]===colors[u]){valid=false;steps.push(table(`Conflict on edge ${u}—${v}`,'Its endpoints share a color. An odd cycle prevents a two-coloring.',['Endpoint','Color'],[[u,colors[u]],[v,colors[v]]]));return {steps,valid,colors};}}}
 }
 return {steps,valid,colors};
}
export function articulationTrace(adj={A:['B','C'],B:['A','C','D'],C:['A','B'],D:['B','E'],E:['D']}){
 const discovery={},low={},parent={},children={},cuts=new Set(),steps=[];let time=0;
 function visit(u){discovery[u]=low[u]=++time;children[u]=0;for(const v of adj[u]){if(discovery[v]===undefined){parent[v]=u;children[u]++;visit(v);low[u]=Math.min(low[u],low[v]);if(parent[u]!==undefined&&low[v]>=discovery[u])cuts.add(u);}else if(v!==parent[u])low[u]=Math.min(low[u],discovery[v]);}
  if(parent[u]===undefined&&children[u]>1)cuts.add(u);
  steps.push(table(`Finish low-link summary for ${u}`,'low is the earliest discovery reachable down tree edges and then at most one back edge. The root uses the separate multiple-children rule.',['Vertex','Discovery','Low','Parent','DFS children','Cut vertex'],Object.keys(discovery).map(v=>[v,discovery[v],low[v],parent[v]??'root',children[v],cuts.has(v)?'yes':'not certified'])));
 }
 for(const u of Object.keys(adj))if(discovery[u]===undefined)visit(u);return {steps,discovery,low,parent,cuts:[...cuts]};
}
export function dijkstraTrace(edges=weightedExample(0),start='A',{unsafe=false}={}){
 if(!unsafe&&edges.some(e=>e[2]<0))throw Error('Dijkstra requires nonnegative weights.');
 const ids=vertices(edges),distance=Object.fromEntries(ids.map(v=>[v,Infinity])),settled=new Set(),steps=[];distance[start]=0;
 const frame=(title,caption,active='',selected=[])=>steps.push({title,caption,art:network(ids,edges,{active,selected,visited:ids.filter(v=>Number.isFinite(distance[v])),finished:[...settled],badges:Object.fromEntries(ids.map(v=>[v,display(distance[v])])),stack:ids.filter(v=>!settled.has(v)&&Number.isFinite(distance[v])).sort((u,v)=>distance[u]-distance[v]||u.localeCompare(v)).map(v=>`${v}: ${distance[v]}`),frontierLabel:'Tentative priorities, smallest first',badgeLabel:'Tentative distance'})});
 frame(`Initialize source ${start}`,'Source distance is zero. Other vertices have not yet been reached.');
 while(true){const u=ids.filter(v=>!settled.has(v)&&Number.isFinite(distance[v])).sort((a,b)=>distance[a]-distance[b]||a.localeCompare(b))[0];if(u===undefined)break;settled.add(u);frame(`Settle ${u} at distance ${distance[u]}`,'With nonnegative weights, the smallest tentative distance cannot later improve.',u);
  for(const [from,v,w] of edges)if(from===u){const candidate=distance[u]+w;if(settled.has(v)){if(candidate<distance[v])frame('A settled distance could improve!','This negative-weight counterexample violates the settle-once assumption. The unsafe run keeps an incorrect final distance.',u,[[u,v]]);continue;}const better=candidate<distance[v];if(better)distance[v]=candidate;frame(`Relax ${u} → ${v}`,`Candidate ${distance[u]} + (${w}) = ${candidate}. ${better?'Improve the tentative distance.':'The current distance is no larger, so keep it.'}`,u,[[u,v]]);}
 }
 return {steps,distance,settled:[...settled]};
}
export function bellmanTrace(edges,start='A',{early=true}={}){
 const ids=vertices(edges),distance=Object.fromEntries(ids.map(v=>[v,Infinity])),steps=[],passDistances=[];distance[start]=0;let passes=0;
 steps.push(table('Initialize source distance','The source starts at zero; unreachable vertices cannot relax outgoing edges.',['Vertex','Distance'],ids.map(v=>[v,display(distance[v])])));
 for(let pass=1;pass<=ids.length-1;pass++){let changed=false;
  for(const [u,v,w] of edges)if(Number.isFinite(distance[u])&&distance[u]+w<distance[v]){distance[v]=distance[u]+w;changed=true;steps.push({title:`Pass ${pass}: improve ${v}`,caption:`Relax ${u} → ${v} using weight ${w}. This is an in-place pass: later edges see earlier updates from the same pass.`,art:network(ids,edges,{active:v,visited:ids.filter(x=>Number.isFinite(distance[x])),badges:Object.fromEntries(ids.map(x=>[x,display(distance[x])])),selected:[[u,v]],badgeLabel:'Distance from source'})});}
  passes=pass;passDistances.push({...distance});steps.push(table(`Full pass ${pass} ${changed?'changed distances':'made no changes'}`,changed?'Another pass may still improve a distance.':'Every edge was checked without an improvement; stopping now is safe.', ['Vertex','Distance'],ids.map(v=>[v,display(distance[v])])));if(!changed&&early)break;
 }
 const negativeCycle=edges.some(([u,v,w])=>Number.isFinite(distance[u])&&distance[u]+w<distance[v]);
 steps.push(table('Check for a reachable negative cycle',negativeCycle?'An extra reachable relaxation still improves a distance. There is no finite shortest walk for vertices affected by the reachable negative cycle.':'No extra reachable edge can improve a distance; the shown distances are final.', ['Extra improvement after passes','Reachable negative cycle'],[[negativeCycle?'yes':'no',negativeCycle?'yes':'no']]));
 return {steps,distance,negativeCycle,passes,passDistances};
}
export function dagPathTrace(edges,start='A'){
 const ids=vertices(edges),adj=Object.fromEntries(ids.map(v=>[v,edges.filter(e=>e[0]===v).map(e=>e[1])])),topo=topologicalTrace(adj);
 if(topo.cyclic)throw Error('DAG shortest paths require an acyclic directed graph.');
 const distance=Object.fromEntries(ids.map(v=>[v,Infinity])),steps=[table('Use a topological order','Every predecessor is handled before a vertex. Negative edges are permitted because the graph has no cycle.',['Order'],[[topo.order.join(' → ')]])];distance[start]=0;
 for(const u of topo.order){for(const [from,v,w] of edges)if(from===u&&Number.isFinite(distance[u]))distance[v]=Math.min(distance[v],distance[u]+w);steps.push({title:`Process ${u} once`,caption:'Relax outgoing edges after all predecessor vertices have been processed. A vertex still marked not reached cannot send a finite candidate.',art:network(ids,edges,{active:u,visited:ids.filter(v=>Number.isFinite(distance[v])),badges:Object.fromEntries(ids.map(v=>[v,display(distance[v])])),badgeLabel:'Distance from source'})});}
 return {steps,distance,order:topo.order};
}
export function kruskalTrace(edges){
 const ids=vertices(edges),parent=Object.fromEntries(ids.map(v=>[v,v])),selected=[],steps=[];let total=0;
 const find=v=>parent[v]===v?v:(parent[v]=find(parent[v]));
 const sorted=edges.map(e=>[...e]).sort((a,b)=>a[2]-b[2]||a[0].localeCompare(b[0])||a[1].localeCompare(b[1]));
 steps.push(table('Sort edges by weight','Break ties alphabetically for a reproducible trace. Other tie choices can give a different MST of the same weight.',['Edge','Weight'],sorted.map(([u,v,w])=>[u+'—'+v,w])));
 for(const [u,v,w] of sorted){const ru=find(u),rv=find(v),accept=ru!==rv;if(accept){parent[ru]=rv;selected.push([u,v]);total+=w;}steps.push({title:`${accept?'Accept':'Skip'} ${u}—${v} of weight ${w}`,caption:accept?`Its endpoints were in different components. Total selected weight is ${total}.`:'Its endpoints are already connected. Adding it would create a cycle.',art:network(ids,edges,{directed:false,selected:[...selected],visited:ids,finished:[],active:'',badges:Object.fromEntries(ids.map(v=>[v,'set '+find(v)])),frontierLabel:'Accepted edges',stack:selected.map(e=>e.join('?')),badgeLabel:'Current components'})});}
 return {steps,total,selected,connected:selected.length===ids.length-1};
}
export function advancedGraphModel(key,variant=0){
 const family=graphFamily(key);if(!family)return;
 let steps;const n=4+variant;
 if(family==='dfs-analysis'){
  const adj=variant===1?dagExample:directedExample,trace=directedDFS(adj);
  steps=trace.steps;
  if(key==='dfs-times')steps=[table('Read nested and disjoint time intervals','Discovery opens an interval; finish closes it. Descendant intervals fit wholly inside their ancestor’s interval.', ['Vertex','Discovery','Finish'],Object.keys(adj).map(v=>[v,trace.discovery[v],trace.finish[v]])),...trace.steps];
  if(key==='dfs-edges')steps=[...trace.steps,table('Classify every directed edge','Tree status comes from which edge discovered a vertex; timestamps alone cannot distinguish a tree edge from a forward edge.', ['Edge','Role'],trace.classified.map(e=>[e.u+' → '+e.v,e.type]))];
  if(key==='dfs-undirected')steps=[table('Treat each physical edge once','A parent link appears in both endpoint lists. Its reverse traversal is the same tree edge, not a separate cycle.', ['Undirected edge','DFS role'],[['A—B','tree'],['B—C','tree'],['A—C','back: closes triangle']] ),table('Only tree and back roles remain','In an undirected DFS, an unseen neighbor is explored immediately; this rules out separate cross and forward physical-edge roles.',['Role','Possible in simple undirected DFS'],[['tree','yes'],['back','yes'],['forward / cross','no']])];
 }else if(family==='topological'){
  const trace=topologicalTrace(variant===2?directedExample:dagExample);steps=trace.steps;
  if(key==='dag-finish'&&variant!==2){const dfs=directedDFS(dagExample);steps=[...dfs.steps,table('Reverse the finishing order','In a DAG every directed edge points to a vertex with smaller finish time.', ['Vertex','Finish'],Object.keys(dagExample).sort((u,v)=>dfs.finish[v]-dfs.finish[u]).map(v=>[v,dfs.finish[v]]))];}
 }else if(family==='articulation')steps=articulationTrace().steps;
 else if(family==='bfs')steps=bfsTrace(bfsExample,['A','C','E'][variant]).steps;
 else if(family==='bipartite')steps=bipartiteTrace(variant===0?bfsExample:variant===1?{A:['B','C'],B:['A','C'],C:['A','B']}:{A:['B'],B:['A'],C:['D','E'],D:['C','E'],E:['C','D']}).steps;
 else if(family==='greedy')steps=[table('A locally largest coin choice','With coin values 1,3,4 and target 6, the locally largest choice is 4.',['Chosen coin','Remaining'],[[4,2],[1,1],[1,0]]),table('Compare a globally better solution','The greedy choice uses three coins, but 3+3 uses only two. A locally attractive step needs a correctness argument for the task.', ['Solution','Number of coins'],[['4+1+1',3],['3+3',2]])];
 else if(family==='dijkstra')steps=dijkstraTrace(key==='dijkstra-zero'?[['A','B',0],['A','C',2],['B','C',2],['C','D',1]]:weightedExample(variant)).steps;
 else if(family==='dijkstra-negative')steps=[...dijkstraTrace(negativeExample,'A',{unsafe:true}).steps,table('Compare with the actual cheaper path','A→C→B costs 5-4=1, beating the prematurely settled cost 2. This graph is acyclic, so failure does not require a negative cycle.', ['Path to B','Cost'],[['A→B',2],['A→C→B',1]])];
 else if(family==='priority-distance')steps=[table('Tentative priorities','Extract-min returns the smallest distance, not the first inserted vertex.',['Vertex','Priority'],[['B',7+variant],['C',2],['D',5]]),table('A relaxation decreases a key','A heap supporting decrease-key repairs its order. A lazy queue may instead push a new entry and must skip the stale old one.', ['Vertex','Old priority','New priority'],[['B',7+variant,1]]),table('Extract in current-priority order','The old B priority is obsolete, not a second useful visit.',['Extraction','Priority'],[['B',1],['C',2],['D',5]])];
 else if(family==='path-cost')steps=[table(`Count work for V=${n}, E=${2*n}`,'There are up to V extract-min operations and E edge relaxation attempts with adjacency lists.', ['Operation','Count bound'],[['extract-min',n],['relax edge',2*n]]),table('Choose a representation and queue','The matrix also scans V potential outgoing neighbors per vertex; a fast queue does not erase that scan cost.', ['Representation / queue','Time bound'],[['adjacency list + unsorted array','O(V²+E)'],['adjacency list + binary heap','O((V+E) log V)'],['matrix + unsorted array','O(V²)']])];
 else if(family==='dag-path')steps=dagPathTrace([['A','B',3+variant],['A','C',6],['B','C',-2],['B','D',4],['C','D',2],['D','E',1]]).steps;
 else if(family==='bellman'){
  const edges=key==='bellman-cycle'&&variant===1?[['A','B',1],['B','C',-2],['C','B',-1]]:[['C','D',2],['B','C',-2],['A','B',3+variant],['A','D',10]];
  steps=bellmanTrace(edges).steps;
 }else if(family==='mst'){
  const edges=[['A','B',1],['A','C',4+variant],['B','C',2],['B','D',5],['C','D',3],['D','E',2]];
  steps=kruskalTrace(edges).steps;
  if(key==='mst-cut')steps=[table('A tied lightest cut edge is safe, not mandatory','In a triangle where every edge weighs 1, every two-edge tree is minimum. Any lightest edge can appear in some MST, but none must appear in every MST.', ['MST edges','Total weight'],[['AB, AC',2],['AB, BC',2],['AC, BC',2]]),table('Strict uniqueness gives stronger conclusions','Equal weights need tie-aware wording; these strict statements avoid the ambiguity.', ['Condition','Consequence'],[['unique lightest edge across a cut','in every MST'],['unique heaviest edge on a cycle','in no MST']]),...steps];
 }
 return {key,family,steps};
}
