import test from 'node:test';
import assert from 'node:assert/strict';
import {directedDFS,topologicalTrace,bfsTrace,bipartiteTrace,articulationTrace,dijkstraTrace,bellmanTrace,dagPathTrace,kruskalTrace,directedExample,dagExample,bfsExample,weightedExample,negativeExample} from '../packages/learning/algo-graphs.js';

function components(adj,removed){
 const seen=new Set();let count=0;
 for(const root of Object.keys(adj)){if(root===removed||seen.has(root))continue;count++;const todo=[root];seen.add(root);while(todo.length){const u=todo.pop();for(const v of adj[u])if(v!==removed&&!seen.has(v)){seen.add(v);todo.push(v);}}}return count;
}
function floyd(edges){
 const ids=[...new Set(edges.flatMap(e=>e.slice(0,2)))],d=Object.fromEntries(ids.map(u=>[u,Object.fromEntries(ids.map(v=>[v,u===v?0:Infinity]))]));
 for(const [u,v,w] of edges)d[u][v]=Math.min(d[u][v],w);
 for(const k of ids)for(const u of ids)for(const v of ids)if(Number.isFinite(d[u][k])&&Number.isFinite(d[k][v]))d[u][v]=Math.min(d[u][v],d[u][k]+d[k][v]);return d;
}
test('Directed DFS times, edge roles and topological orders respect independent graph constraints',()=>{
 const dfs=directedDFS();assert.deepEqual(dfs.classified.map(e=>[e.u+e.v,e.type]),[['AB','tree'],['BC','tree'],['CA','back'],['CD','tree'],['AD','forward'],['EB','cross']]);assert.equal(dfs.cyclic,true);
 for(const u of Object.keys(directedExample))for(const v of Object.keys(directedExample)){if(u===v)continue;const a=[dfs.discovery[u],dfs.finish[u]],b=[dfs.discovery[v],dfs.finish[v]];assert.ok(a[1]<b[0]||b[1]<a[0]||a[0]<b[0]&&a[1]>b[1]||b[0]<a[0]&&b[1]>a[1]);}
 for(const adj of [dagExample,{A:['C'],B:['C'],C:[],D:[]}]){const topo=topologicalTrace(adj);assert.equal(topo.cyclic,false);assert.equal(new Set(topo.order).size,Object.keys(adj).length);for(const [u,neighbors] of Object.entries(adj))for(const v of neighbors)assert.ok(topo.order.indexOf(u)<topo.order.indexOf(v));const d=directedDFS(adj);assert.equal(d.cyclic,false);for(const [u,neighbors] of Object.entries(adj))for(const v of neighbors)assert.ok(d.finish[u]>d.finish[v]);}
 assert.equal(topologicalTrace(directedExample).cyclic,true);
});
test('BFS distances agree with all-pairs distances, queue layers stay consecutive, and coloring checks every component',()=>{
 for(const start of Object.keys(bfsExample)){
  const trace=bfsTrace(bfsExample,start),edges=Object.entries(bfsExample).flatMap(([u,neighbors])=>neighbors.map(v=>[u,v,1])),oracle=floyd(edges);assert.deepEqual(trace.distance,oracle[start]);assert.equal(new Set(trace.order).size,trace.order.length);
  for(const step of trace.steps){const queue=step.art.stack,dist=queue.map(v=>trace.distance[v]);if(dist.length){assert.ok(Math.max(...dist)-Math.min(...dist)<=1);assert.deepEqual(dist,[...dist].sort((a,b)=>a-b));}}
 }
 assert.equal(bipartiteTrace(bfsExample).valid,true);
 assert.equal(bipartiteTrace({A:['B'],B:['A'],C:['D','E'],D:['C','E'],E:['C','D']}).valid,false,'A disconnected odd cycle must not be skipped');
 for(let seed=1;seed<=20;seed++){
  const ids=['A','B','C','D','E'],adj=Object.fromEntries(ids.map(v=>[v,[]]));for(let i=0;i<ids.length;i++)for(let j=i+1;j<ids.length;j++)if((seed*13+i*7+j*11)%5<2){adj[ids[i]].push(ids[j]);adj[ids[j]].push(ids[i]);}
  let possible=false;for(let mask=0;mask<32;mask++)if(ids.every((u,i)=>adj[u].every(v=>((mask>>i)&1)!==((mask>>ids.indexOf(v))&1)))){possible=true;break;}
  assert.equal(bipartiteTrace(adj).valid,possible);
  const expected=ids.filter(v=>components(adj,v)>components(adj));assert.deepEqual(articulationTrace(adj).cuts.sort(),expected.sort());
 }
});
test('Signed shortest-path traces match an independent all-pairs solver and reject unsupported inputs',()=>{
 for(let seed=0;seed<20;seed++){
  const edges=[['A','B',1+seed%4],['A','C',4],['B','C',seed%5-3],['B','D',6],['C','D',2],['D','E',seed%3-1]],oracle=floyd(edges);
  assert.deepEqual(bellmanTrace(edges).distance,oracle.A);assert.deepEqual(dagPathTrace(edges).distance,oracle.A);assert.equal(bellmanTrace(edges).negativeCycle,false);
  const nonnegative=edges.map(([u,v,w])=>[u,v,Math.abs(w)]);assert.deepEqual(dijkstraTrace(nonnegative).distance,floyd(nonnegative).A);
 }
 assert.throws(()=>dijkstraTrace(negativeExample),/nonnegative/);assert.equal(dijkstraTrace(negativeExample,'A',{unsafe:true}).distance.B,2);assert.equal(bellmanTrace(negativeExample).distance.B,1);
 assert.equal(bellmanTrace([['A','B',2],['B','C',-2],['C','B',1]]).negativeCycle,true);
 assert.equal(bellmanTrace([['A','B',2],['C','D',-2],['D','C',1]]).negativeCycle,false);
 assert.throws(()=>dagPathTrace([['A','B',1],['B','A',1]]),/acyclic/);
 const forward=[['A','B',3],['B','C',-2],['C','D',2]],reverse=[...forward].reverse();assert.equal(bellmanTrace(forward).passDistances[0].D,3);assert.equal(bellmanTrace(reverse).passDistances[0].D,Infinity);assert.deepEqual(bellmanTrace(forward).distance,bellmanTrace(reverse).distance);
 assert.deepEqual(dijkstraTrace(weightedExample(0)).distance,{A:0,B:3,C:1,D:4,E:6});
});
function allTrees(edges){
 const ids=[...new Set(edges.flatMap(e=>e.slice(0,2)))],trees=[];
 for(let mask=0;mask<2**edges.length;mask++){const chosen=edges.filter((_,i)=>mask&(1<<i));if(chosen.length!==ids.length-1)continue;const adj=Object.fromEntries(ids.map(v=>[v,[]]));for(const [u,v] of chosen){adj[u].push(v);adj[v].push(u);}if(components(adj)===1)trees.push({edges:chosen,total:chosen.reduce((sum,e)=>sum+e[2],0)});}return trees;
}
test('Kruskal matches exhaustive spanning trees; tied cut edges are safe without being mandatory',()=>{
 for(let seed=0;seed<12;seed++){const edges=[['A','B',1+seed%3],['A','C',4],['B','C',2],['B','D',5-seed%3],['C','D',3],['D','E',2],['C','E',4]],oracle=allTrees(edges),trace=kruskalTrace(edges);assert.equal(trace.connected,true);assert.equal(trace.selected.length,4);assert.equal(trace.total,Math.min(...oracle.map(t=>t.total)));}
 const tied=[['A','B',1],['A','C',1],['B','C',1]],trees=allTrees(tied);assert.equal(trees.length,3);assert.equal(kruskalTrace(tied).total,2);assert.ok(trees.some(t=>t.edges.some(e=>e[0]==='A'&&e[1]==='B')));assert.ok(trees.some(t=>!t.edges.some(e=>e[0]==='A'&&e[1]==='B')));
 const uniqueHeavy=[['A','B',1],['A','C',2],['B','C',9]];assert.ok(!kruskalTrace(uniqueHeavy).selected.some(([u,v])=>u==='B'&&v==='C'));
 assert.equal(kruskalTrace([['A','B',1],['C','D',1]]).connected,false);
});
