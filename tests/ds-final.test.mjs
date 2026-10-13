import test from 'node:test';
import assert from 'node:assert/strict';
import {choose,heapLeftSize,countHeaps,catalan,bstOrders,heapSort,maxHeap,probeSequence,hashInsert,hashSearch,chainBuckets,expectedBuckets,binomial,arrayOffset,stackSchedule,queueBurst,finalDSKinds,finalDSModel} from '../packages/learning/ds-final.js';
import {makeTree,treeHeight,heapInsert} from '../packages/learning/ds-advanced.js';

function permutations(input){if(!input.length)return [[]];return input.flatMap((value,i)=>permutations(input.filter((_,j)=>j!==i)).map(rest=>[value,...rest]));}
const sorted=input=>[...input].sort((a,b)=>a-b);

test('Complete heap assignments match exhaustive distinct-key permutation counts',()=>{
 for(let n=0;n<=7;n++){
  const keys=Array.from({length:n},(_,i)=>i+1),valid=permutations(keys).filter(a=>a.every((value,i)=>i===0||a[Math.floor((i-1)/2)]<value));assert.equal(countHeaps(n),valid.length);
 }
 for(let n=2;n<=63;n++){
  const descendants=[];function visit(i){if(i>=n)return;descendants.push(i);visit(2*i+1);visit(2*i+2);}visit(1);assert.equal(heapLeftSize(n),descendants.length);
 }
 assert.equal(countHeaps(7),80);assert.equal(choose(6,3),20);
});

test('Catalan shape counts and fixed-BST insertion counts agree with explicit enumeration',()=>{
 const shapes=n=>n===0?['.']:Array.from({length:n},(_,left)=>shapes(left).flatMap(a=>shapes(n-1-left).map(b=>`(${a}${b})`))).flat();
 for(let n=0;n<=6;n++)assert.equal(catalan(n),new Set(shapes(n)).size);
 const target=[{key:6,left:1,right:3},{key:4,left:2,right:null},{key:2,left:null,right:null},{key:8,left:null,right:4},{key:10,left:null,right:null}];
 function insert(node,key){if(!node)return {key,left:null,right:null};if(key<node.key)node.left=insert(node.left,key);else node.right=insert(node.right,key);return node;}
 const signature=node=>node?`${node.key}(${signature(node.left)},${signature(node.right)})`:'.';
 let example=null;for(const key of [6,4,2,8,10])example=insert(example,key);const wanted=signature(example);
 const count=permutations([2,4,6,8,10]).filter(order=>{let root=null;for(const key of order)root=insert(root,key);return signature(root)===wanted;}).length;
 assert.equal(count,6);assert.deepEqual(bstOrders(target),{size:5,count});
});

test('Heapsort preserves every value, finalizes only the sorted suffix, and handles duplicate and boundary inputs',()=>{
 for(const input of [...permutations([1,2,3,4,5,6]),[],[7],[3,3,-2,0,3,-2]]){
  const result=heapSort(input),expected=sorted(input);assert.deepEqual(result.values,expected);
  for(const state of result.states){assert.deepEqual(sorted(state.values),expected);assert.deepEqual(state.values.slice(state.size),expected.slice(state.size));}
  const max=maxHeap(input);assert.ok(max.every((value,i)=>i===0||max[Math.floor((i-1)/2)]>=value));
 }
});

test('Probing covers slots only when the rule permits it and tombstones preserve lookup and duplicate safety',()=>{
 assert.deepEqual(probeSequence(10,7,'double',3),[3,6,2,5,1,4,0]);assert.deepEqual(probeSequence(10,7,'quadratic'),[3,4,0,5,5,0,4]);
 assert.equal(new Set(probeSequence(0,6,'double',2)).size,3);assert.equal(new Set(probeSequence(0,7,'double',3)).size,7);
 let cells=Array(7).fill(null);for(const key of [10,17,24])cells=hashInsert(cells,key).table;assert.deepEqual(cells,[null,null,null,10,17,24,null]);
 cells[3]='DELETED';assert.deepEqual(hashSearch(cells,24),{found:true,index:5,visits:[3,4,5]});
 const duplicate=hashInsert(cells,24);assert.equal(duplicate.inserted,false);assert.deepEqual(duplicate.table,cells);
 const reused=hashInsert(cells,31);assert.equal(reused.index,3);assert.deepEqual(reused.visits,[3,4,5,6]);assert.equal(hashSearch(reused.table,31).found,true);
 const full=[1,2,3,4];assert.equal(hashInsert(full,9).inserted,false);assert.equal(hashSearch(full,9).visits.length,4);
 assert.equal(hashInsert(['DELETED',2,3,4],9).index,0);assert.equal(hashInsert(Array(7).fill(null),-1).index,6);
 const blocked=[1,2,3,4,5,null,7];assert.equal(hashInsert(blocked,7+7*2,'quadratic').inserted,false); // Its repeated quadratic path cannot reach free slot five.
});

test('Hash bucket expectations match exhaustive independent uniform allocations',()=>{
 for(const [n,m] of [[0,4],[1,4],[3,4],[4,3]]){
  const totals={empty:0,occupied:0,pairs:0,extraItems:0,perBucket:0};let samples=0;
  function assign(a){if(a.length<n){for(let b=0;b<m;b++)assign([...a,b]);return;}const counts=Array(m).fill(0);for(const b of a)counts[b]++;const empty=counts.filter(c=>c===0).length;totals.empty+=empty;totals.occupied+=m-empty;totals.extraItems+=n-m+empty;totals.perBucket+=counts[0];for(let i=0;i<a.length;i++)for(let j=i+1;j<a.length;j++)if(a[i]===a[j])totals.pairs++;samples++;}
  assign([]);const expected=expectedBuckets(n,m);for(const key of Object.keys(totals))assert.ok(Math.abs(totals[key]/samples-expected[key])<1e-10,`${n},${m},${key}`);
 }
 assert.deepEqual(chainBuckets([1,6,2,11,7],5),[[],[1,6,11],[2,7],[],[]]);
 for(let n=1;n<=6;n++)for(const p of [0,.25,.5,1]){const probabilities=binomial(n,p);assert.ok(Math.abs(probabilities.reduce((a,b)=>a+b,0)-1)<1e-10);assert.ok(Math.abs(probabilities.reduce((sum,v,k)=>sum+k*v,0)-n*p)<1e-10);}
});

test('Array offsets agree with physical row/column enumeration, including nonzero lower bounds',()=>{
 const dimensions=[2,3,4],row=[],column=[];
 for(let i=0;i<2;i++)for(let j=0;j<3;j++)for(let k=0;k<4;k++)row.push([i,j,k]);
 for(let k=0;k<4;k++)for(let j=0;j<3;j++)for(let i=0;i<2;i++)column.push([i,j,k]);
 for(const [order,positions] of [['row',row],['column',column]])for(const [offset,index] of positions.entries()){
  assert.equal(arrayOffset(dimensions,index,order),offset);assert.equal(arrayOffset(dimensions,index.map((v,i)=>v+[-1,2,4][i]),order,[-1,2,4]),offset);
 }
 assert.equal(arrayOffset([3,4],[0,3],'row',[-1,1]),6);assert.equal(arrayOffset([3,4],[0,3],'column',[-1,1]),7);
 for(const indices of [[-1,0],[3,0],[0,4],[1.5,2]])assert.throws(()=>arrayOffset([3,4],indices));assert.throws(()=>arrayOffset([3,4],[0]));
});

test('Queue cost and stack residence use explicit operations and timestamp endpoints',()=>{
 for(let n=1;n<=8;n++){
  const q=queueBurst(n);assert.equal(q.cost,4*n);assert.deepEqual(q.served,Array.from({length:n},(_,i)=>i+1));
  const schedule=stackSchedule(n,2,3);let clock=0;const arrival=[],departure=[];for(let i=0;i<n;i++){clock+=2;arrival[i]=clock;}for(let i=n-1;i>=0;i--){clock+=3;departure[i]=clock;}assert.deepEqual(schedule.map(s=>s.lifetime),arrival.map((v,i)=>departure[i]-v));
 }
 assert.deepEqual(stackSchedule(4,2,3).map(v=>v.lifetime),[18,13,8,3]);
 // Uniform existing-node height is not a random new-key insertion experiment.
 const perfect=makeTree(Array.from({length:15},(_,i)=>i+1));assert.equal(perfect.reduce((s,_,i)=>s+treeHeight(perfect,i),0),11);assert.equal(heapInsert(Array.from({length:15},(_,i)=>i+1),0).swaps,4);
});

test('Final visual variants preserve hash records, sorted output and completed circular link invariants',()=>{
 for(const kind of finalDSKinds)for(let n=3;n<=6;n++){
  const model=finalDSModel(kind,n);assert.ok(model.steps.length>1);for(const state of model.steps){assert.ok(state.title&&state.caption);assert.doesNotMatch(JSON.stringify(state),/NaN|undefined/);}
 }
 for(let n=3;n<=6;n++){
  const ring=finalDSModel('list-splice',n).steps.at(-1).art;assert.equal(ring.head,'X');assert.equal(ring.nodes.length,n+1);const map=new Map(ring.nodes.map(node=>[node.id,node]));
  for(const node of ring.nodes){assert.equal(map.get(node.next).prev,node.id);assert.equal(map.get(node.prev).next,node.id);}
  const table=finalDSModel('hash-linear',n).steps.at(-1).art.cells;assert.equal(hashSearch(table,n+20).found,true);assert.equal(hashSearch(table,n+6).found,false);
 }
});
