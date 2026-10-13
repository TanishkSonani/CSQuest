import test from 'node:test';
import assert from 'node:assert/strict';
import {makeTree,traverse,treeHeight,searchTree,rangeTree,validBST,validSearchPath,validPreorder,fromPreIn,fromPostIn,minAVLNodes,heapValid,heapInsert,siftDown,buildHeap,extractMin,bracketTrace,postfixTrace,advancedDSModel} from '../packages/learning/ds-advanced.js';

test('Tree reconstruction reproduces both inputs, rejects inconsistent keys, and observes edge height',()=>{
 const pre=[8,4,2,6,12,10,14],ino=[2,4,6,8,10,12,14],post=[2,6,4,10,14,12,8];
 for(const tree of [makeTree(),fromPreIn(pre,ino),fromPostIn(post,ino)]){
  assert.deepEqual(traverse(tree,'pre'),pre);assert.deepEqual(traverse(tree),ino);assert.deepEqual(traverse(tree,'post'),post);assert.equal(treeHeight(tree),2);
 }
 assert.equal(treeHeight([]),-1);assert.equal(treeHeight(makeTree([1])),0);
 assert.throws(()=>fromPreIn([],[1]));assert.throws(()=>fromPreIn([1,1],[1,1]));assert.throws(()=>fromPreIn([1,2,3],[3,1,2]));assert.throws(()=>fromPostIn([1,2],[1,3]));
 // Preorder + postorder leave each single-child side undecided.
 for(let mask=0;mask<4;mask++){
  const t=[0,1,2].map((i)=>({key:i+1,left:i<2&&!(mask&(1<<i))?i+1:null,right:i<2&&(mask&(1<<i))?i+1:null}));
  assert.deepEqual(traverse(t,'pre'),[1,2,3]);assert.deepEqual(traverse(t,'post'),[3,2,1]);assert.equal(treeHeight(t),2);
 }
});

test('BST decisions enforce ancestral bounds and range endpoints',()=>{
 const tree=makeTree();assert.equal(validBST(tree),true);
 assert.deepEqual(searchTree(tree,6),{found:true,path:[8,4,6]});assert.deepEqual(searchTree(tree,5),{found:false,path:[8,4,6]});
 for(let low=0;low<=16;low++)for(let high=low;high<=16;high++)assert.deepEqual(rangeTree(tree,low,high).output,[2,4,6,8,10,12,14].filter(k=>k>=low&&k<=high));
 const bad=makeTree();bad[4].key=9;assert.equal(validBST(bad),false);bad[4].key=8;assert.equal(validBST(bad),false);
 assert.equal(validSearchPath([100,40,60,45,50],50),true);assert.equal(validSearchPath([100,40,60,30,50],50),false);assert.equal(validSearchPath([50,60],50),false);assert.equal(validSearchPath([100,40],50),false);
 assert.equal(validPreorder([8,4,2,6,12,10,14]),true);assert.equal(validPreorder([8,4,12,2]),false);assert.equal(validPreorder([8,4,4]),false);
});

test('All four AVL walkthroughs preserve inorder and end balanced at every node',()=>{
 assert.deepEqual([-1,0,1,2,3,4,5].map(minAVLNodes),[0,1,2,4,7,12,20]);
 for(let n=3;n<=6;n++){
  const states=advancedDSModel('avl',n).steps;
  assert.equal(states.length,n===4||n===5?3:2);
  for(const step of states){assert.equal(validBST(step.art.nodes),true);assert.deepEqual(traverse(step.art.nodes),[10,20,30]);}
  const tree=states.at(-1).art.nodes;
  for(const node of tree)assert.ok(Math.abs(treeHeight(tree,node.left)-treeHeight(tree,node.right))<=1);
 }
});

test('Heap worked examples have independently counted swaps and preserved values',()=>{
 const h=[1,4,2,9,6,3,8];
 assert.deepEqual(heapInsert(h,0).values,[0,1,2,4,6,3,8,9]);assert.equal(heapInsert(h,0).swaps,3);
 assert.deepEqual(siftDown([20,...h.slice(1)]).values,[2,4,3,9,6,20,8]);assert.equal(siftDown([20,...h.slice(1)]).swaps,2);
 const built=buildHeap([9,4,7,1,6,3,2]);assert.deepEqual(built.values,[1,4,2,9,6,3,7]);assert.equal(built.swaps,4);assert.deepEqual(built.stages.map(s=>s.index),[2,1,0]);
 const popped=extractMin(h);assert.equal(popped.minimum,1);assert.deepEqual(popped.values,[2,4,3,9,6,8]);assert.equal(popped.swaps,2);
 assert.deepEqual(h,[1,4,2,9,6,3,8]);assert.deepEqual(extractMin([7]).values,[]);assert.throws(()=>extractMin([]));
});

test('Bottom-up heap construction and repeated extraction agree with sorting, including duplicates and negatives',()=>{
 let seed=12837;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed%41-20;};
 for(let size=0;size<=75;size++){
  const input=Array.from({length:size},random),expected=[...input].sort((a,b)=>a-b),built=buildHeap(input);assert.equal(heapValid(built.values),true);assert.deepEqual([...built.values].sort((a,b)=>a-b),expected);
  let current=built.values;const popped=[];while(current.length){const next=extractMin(current);popped.push(next.minimum);current=next.values;assert.equal(heapValid(current),true);}assert.deepEqual(popped,expected);
  let incremental=[];for(const value of input){incremental=heapInsert(incremental,value).values;assert.equal(heapValid(incremental),true);}assert.deepEqual([...incremental].sort((a,b)=>a-b),expected);
 }
});

test('Expression stacks retain operand direction and reject incomplete or mismatched states',()=>{
 assert.equal(postfixTrace([8,3,'-',2,'*']).value,10);assert.equal(postfixTrace([3,8,'-']).value,-5);assert.equal(postfixTrace([9,2,'/']).value,4.5);
 for(const tokens of [[1,'+'],[1,2],[1,0,'/'],[]])assert.throws(()=>postfixTrace(tokens));
 for(const text of ['', '([{}])','{}[]','((()))'])assert.equal(bracketTrace(text).valid,true);
 for(const text of ['([)]',')','(()','{]'])assert.equal(bracketTrace(text).valid,false);
 for(let n=3;n<=6;n++){
  const queue=advancedDSModel('circular-queue',n).steps;
  for(const step of queue){const {cells,front,rear}=step.art;assert.equal(cells.filter(x=>x!==null).length,(rear-front+cells.length)%cells.length);}
  assert.deepEqual(advancedDSModel('linked-queue',n).steps.at(-1).art.values,[]);
 }
});
