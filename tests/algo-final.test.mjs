import test from 'node:test';
import assert from 'node:assert/strict';
import {primTrace,huffmanTrace,intervalTrace,jobsTrace,fractionalTrace,stairWays,stairCost,nonAdjacent,seriesProbability,lcsTrace,chainTrace,catalanMatrices,knapsackTrace,subsetTrace,coinTrace,floydTrace,tspTrace} from '../packages/learning/algo-final.js';
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} versus ${b}`);
function subsets(values){return Array.from({length:2**values.length},(_,mask)=>values.filter((_,i)=>mask&(1<<i)));}
function permutations(values){return values.length?values.flatMap((v,i)=>permutations(values.filter((_,j)=>i!==j)).map(rest=>[v,...rest])):[[]];}
function connected(edges,ids){const seen=new Set([ids[0]]);for(let changed=true;changed;){changed=false;for(const [a,b] of edges)if(seen.has(a)!==seen.has(b)){seen.add(a);seen.add(b);changed=true;}}return seen.size===ids.length;}
test('Prim agrees with exhaustive spanning-tree choices rather than shortest-path priorities',()=>{
 for(let seed=0;seed<12;seed++){const edges=[['A','B',2],['A','C',3+seed%3],['B','C',1+seed%4],['B','D',5],['C','D',2]],trees=subsets(edges).filter(s=>s.length===3&&connected(s,['A','B','C','D']));assert.equal(primTrace(edges).total,Math.min(...trees.map(t=>t.reduce((sum,e)=>sum+e[2],0))));assert.equal(primTrace(edges).connected,true);}
 assert.equal(primTrace([['A','B',1],['C','D',2]]).connected,false);
});
function cheapestMerge(weights,memo=new Map()){
 if(weights.length<2)return 0;const key=[...weights].sort((a,b)=>a-b).join(',');if(memo.has(key))return memo.get(key);let best=Infinity;
 for(let i=0;i<weights.length;i++)for(let j=i+1;j<weights.length;j++){const sum=weights[i]+weights[j];best=Math.min(best,sum+cheapestMerge([...weights.filter((_,k)=>k!==i&&k!==j),sum],memo));}memo.set(key,best);return best;
}
test('Huffman prefix codes and optimal-merge costs match exhaustive pair-merge possibilities',()=>{
 for(const weights of [[2,3,7,8],[1,1,1,1],[3,4,7,8],[4,5,7,8],[1,2,4,8,16]]){
  const result=huffmanTrace(weights),codes=Object.values(result.codes);assert.equal(result.cost,cheapestMerge(weights));assert.equal(codes.length,weights.length);assert.equal(new Set(codes).size,codes.length);for(const a of codes)for(const b of codes)if(a!==b)assert.equal(b.startsWith(a),false);assert.equal(weights.reduce((sum,w,i)=>sum+w*result.codes[String.fromCharCode(65+i)].length,0),result.cost);
  function counts(node){if(!node.left)return [1,0];const a=counts(node.left),b=counts(node.right);return [a[0]+b[0],a[1]+b[1]+1];}assert.deepEqual(counts(result.root),[weights.length,weights.length-1]);
 }
});
test('Scheduling and fractional packing agree with exhaustive feasible schedules and fractional boundary choices',()=>{
 const activities=[{id:'A',start:0,end:3},{id:'B',start:1,end:2},{id:'C',start:2,end:4},{id:'D',start:4,end:6},{id:'E',start:3,end:7}],valid=subsets(activities).filter(s=>{const a=[...s].sort((x,y)=>x.start-y.start);return a.every((x,i)=>!i||x.start>=a[i-1].end);});assert.equal(intervalTrace(activities).chosen.length,Math.max(...valid.map(s=>s.length)));
 const jobs=[{id:'A',deadline:2,profit:70},{id:'B',deadline:1,profit:40},{id:'C',deadline:2,profit:30},{id:'D',deadline:3,profit:20}];let profit=0;for(const s of subsets(jobs))for(const schedule of permutations(s))if(schedule.every((j,i)=>i+1<=j.deadline))profit=Math.max(profit,s.reduce((sum,j)=>sum+j.profit,0));assert.equal(jobsTrace(jobs).profit,profit);
 for(let capacity=1;capacity<=10;capacity++){const items=[{weight:2,value:12},{weight:3,value:15},{weight:5,value:20}];let optimum=0;for(const whole of subsets(items)){const used=whole.reduce((sum,i)=>sum+i.weight,0),value=whole.reduce((sum,i)=>sum+i.value,0);if(used>capacity)continue;optimum=Math.max(optimum,value);for(const fractional of items.filter(i=>!whole.includes(i)))optimum=Math.max(optimum,value+Math.min(1,(capacity-used)/fractional.weight)*fractional.value);}close(fractionalTrace(items,capacity).total,optimum);}
});
function choose(n,k){let result=1;for(let i=1;i<=k;i++)result=result*(n-i+1)/i;return result;}
test('Stair counts, nonadjacent choices and probability states match combinatorial or exhaustive answers',()=>{
 for(let n=0;n<=8;n++){let count=0;for(let twos=0;twos<=Math.floor(n/2);twos++)count+=choose(n-twos,twos);assert.equal(stairWays(n).at(-1),count);}
 for(const values of [[4,1,5,2,6],[5,2,6,3,7],[6,3,7,4,8]]){let best=0;for(let mask=0;mask<2**values.length;mask++)if(!(mask&(mask<<1)))best=Math.max(best,values.reduce((sum,v,i)=>sum+(mask&(1<<i)?v:0),0));assert.equal(nonAdjacent(values).at(-1),best);}
 for(const costs of [[10,15,20],[10,15,20,5],[1,100,1,1,1]]){function walk(i,total){if(i>=costs.length)return total;return Math.min(walk(i+1,total+costs[i]),walk(i+2,total+costs[i]));}assert.equal(stairCost(costs).total,Math.min(walk(0,0),walk(1,0)));}
 for(let i=1;i<=4;i++)for(let j=1;j<=4;j++)for(const p of [0,.5,.6,1]){const n=i+j-1;let probability=0;for(let wins=i;wins<=n;wins++)probability+=choose(n,wins)*p**wins*(1-p)**(n-wins);close(seriesProbability(i,j,p)[i][j],probability);}
});
function subsequences(s){return new Set(Array.from({length:2**s.length},(_,mask)=>[...s].filter((_,i)=>mask&(1<<i)).join('')));}
test('LCS traces return actual maximum common subsequences and distinguish repeated characters',()=>{
 for(const [a,b] of [['ABC','BAC'],['ABA','BAA'],['BAN','CAN'],['ABCD','BACD'],['AAAA','AA'],['','ABC']]){const left=subsequences(a),right=subsequences(b),result=lcsTrace(a,b),common=[...left].filter(s=>right.has(s));assert.equal(result.length,Math.max(...common.map(s=>s.length)));assert.ok(left.has(result.text)&&right.has(result.text));assert.equal(result.text.length,result.length);}
});
function allChainCosts(dimensions,i=0,j=dimensions.length-2){if(i===j)return [0];const results=[];for(let k=i;k<j;k++)for(const left of allChainCosts(dimensions,i,k))for(const right of allChainCosts(dimensions,k+1,j))results.push(left+right+dimensions[i]*dimensions[k+1]*dimensions[j+1]);return results;}
test('Matrix-chain minima and Catalan counts match every legal parenthesization',()=>{
 for(const dims of [[10,30,5,60],[4,2,6,3],[3,7,2,5,4]]){const costs=allChainCosts(dims);assert.equal(chainTrace(dims).total,Math.min(...costs));assert.equal(catalanMatrices(dims.length-1),costs.length);}assert.equal(chainTrace([10,30,5,60]).total,4500);
});
test('Whole-item and reachable-sum DPs match subsets; coin minima match a shortest-hop amount search',()=>{
 const items=[{weight:2,value:3},{weight:3,value:4},{weight:4,value:5}];for(let capacity=0;capacity<=8;capacity++){const possible=subsets(items).filter(s=>s.reduce((sum,i)=>sum+i.weight,0)<=capacity),best=Math.max(...possible.map(s=>s.reduce((sum,i)=>sum+i.value,0)));assert.equal(knapsackTrace(items,capacity).total,best);}
 const values=[2,3,5],sums=new Set(subsets(values).map(s=>s.reduce((a,b)=>a+b,0)));for(let target=0;target<=12;target++)assert.equal(subsetTrace(values,target).reachable[target],sums.has(target));
 for(const coins of [[1,3,4],[2,4]])for(let amount=1;amount<=10;amount++){const queue=[[0,0]],seen=new Set([0]);let found=Infinity;while(queue.length){const [sum,count]=queue.shift();if(sum===amount){found=count;break;}for(const c of coins)if(sum+c<=amount&&!seen.has(sum+c)){seen.add(sum+c);queue.push([sum+c,count+1]);}}assert.equal(coinTrace(coins,amount).total,found);}
});
test('Floyd-Warshall and TSP include the required intermediate and return edges',()=>{
 const matrix=[[0,3,8,Infinity],[Infinity,0,-2,7],[Infinity,Infinity,0,2],[Infinity,Infinity,Infinity,0]],floyd=floydTrace(matrix);assert.deepEqual(floyd.distance[0],[0,3,1,3]);assert.equal(floyd.negativeCycle,false);assert.equal(floydTrace([[0,-2],[1,0]]).negativeCycle,true);
 const tour=[[0,10,15,20],[10,0,35,25],[15,35,0,30],[20,25,30,0]],costs=permutations([1,2,3]).map(order=>[0,...order,0].slice(1).reduce((sum,v,i)=>sum+tour[[0,...order,0][i]][v],0));assert.equal(tspTrace(tour).total,Math.min(...costs));assert.equal(tspTrace(tour).total,80);
});
