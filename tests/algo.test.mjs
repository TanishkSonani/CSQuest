import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {lessons} from '../courses/algo/content/lessons.js';
import {topics} from '../courses/algo/content/topics.js';
import {units,lecturePlans} from '../courses/algo/content/curriculum.js';
import {grade} from '../packages/learning/engine.js';
import {algoModel,familyOf,mergeTrace,partitionTrace,binaryTrace,inversionPairs,dfsTrace} from '../packages/learning/algo-models.js';

test('Algorithms publishes a stable, completed-source-backed prefix with beginner notes and scenario puzzles',()=>{
 assert.equal(topics.length,119);assert.equal(lecturePlans.length,119);assert.equal(lessons.length,357);assert.equal(units.length,21);
 assert.deepEqual(units.flatMap(u=>Array.from({length:u.range[1]-u.range[0]+1},(_,i)=>u.range[0]+i)),Array.from({length:119},(_,i)=>i));
 for(const [id,l] of lessons.entries()){
  assert.equal(l.id,id);assert.equal(l.lecture,Math.floor(id/3));assert.equal(l.ready,true);assert.equal(l.questions.length,4);assert.ok(l.foundation.idea.length>100);assert.equal(l.teachingSteps.length,3);
  const source=JSON.parse(fs.readFileSync(new URL(`../courses/algo/data/transcripts/${l.lecture}.json`,import.meta.url)));assert.ok(source.sourceCompletedAt);
  for(const r of l.sourceReferences)assert.ok(source.segments.some(s=>s.start===r.start&&s.end===r.end&&s.text.trim()===r.text));
  for(const q of l.questions){const answer=q.type==='order'?q.items:q.answer;assert.equal(grade(q,answer),true,`${id}: ${q.prompt}`);if(q.type==='number'){assert.ok(Number.isFinite(q.answer));assert.equal(grade(q,q.answer+1),false);}if(q.type==='choice'){assert.equal(new Set(q.options).size,q.options.length);assert.equal(grade(q,(q.answer+1)%q.options.length),false);}assert.doesNotMatch(q.prompt,/\b(lecture|video|instructor|recording)\b/i);}
  if(id%3===2)assert.match(l.questions[0].prompt,/service|routine|catalog|scheduler|batch|feed|file|list|contest|dashboard|ranking|location|image|lookup|inventory|sorter|transaction|explorer|report|stream/i);
 }
});
test('All topic explorers have finite valid states, including base cases and disconnected graphs',()=>{
 for(const t of topics)for(let variant=0;variant<3;variant++){const m=algoModel(t.key,variant);assert.equal(m.family,familyOf(t.key));assert.ok(m.steps.length>=2);for(const step of m.steps){assert.ok(step.title&&step.caption&&step.art);assert.doesNotMatch(JSON.stringify(step),/NaN|undefined|null/);}}
 assert.deepEqual(dfsTrace('A').order,['A','B','C','D']);assert.deepEqual(dfsTrace('E').order,['E']);
 const finished=dfsTrace().steps.at(-1).art;assert.equal(finished.stack.length,0);assert.equal(finished.nodes.filter(n=>n.state==='finished').length,4);assert.equal(finished.nodes.find(n=>n.id==='E').state,'waiting');
 for(const variant of [0,1,2])for(const key of ['bubble','insertion','selection','heap','bottom-up']){const final=algoModel(key,variant).steps.at(-1).art.values;assert.deepEqual(final,[...final].sort((a,b)=>a-b));assert.equal(final.length,6);}
 assert.equal(algoModel('master-log').steps.at(-1).art.rows.at(-1)[3],8,'Leaf cost is constant, not log2(1)=0');
});
test('Merge, partition, inversion and binary-search traces satisfy independent output invariants',()=>{
 for(let seed=1;seed<=24;seed++){
  const input=Array.from({length:6},(_,i)=>(seed*17+i*11)%31),sorted=[...input].sort((a,b)=>a-b),part=partitionTrace(input),pivot=input.at(-1);
  assert.deepEqual([...part.values].sort((a,b)=>a-b),sorted);assert.equal(part.values[part.index],pivot);assert.ok(part.values.slice(0,part.index).every(v=>v<pivot));assert.ok(part.values.slice(part.index+1).every(v=>v>=pivot));
  const left=input.slice(0,3).sort((a,b)=>a-b),right=input.slice(3).sort((a,b)=>a-b),merged=mergeTrace(left,right);assert.deepEqual(merged.values,sorted);assert.ok(merged.comparisons<=input.length-1);
  let adjacentSwaps=0,work=[...input];for(let end=work.length-1;end>0;end--)for(let i=0;i<end;i++)if(work[i]>work[i+1]){[work[i],work[i+1]]=[work[i+1],work[i]];adjacentSwaps++;}assert.equal(inversionPairs(input).length,adjacentSwaps);
  for(const target of [...sorted,100])assert.equal(binaryTrace(sorted,target).found,sorted.indexOf(target));
 }
 assert.equal(inversionPairs([1,1,1]).length,0);assert.deepEqual(mergeTrace([],[]).values,[]);assert.equal(binaryTrace([],7).found,-1);
});
test('Small-decrement and geometric recurrence examples agree with direct independent costs',()=>{
 function cost(n){return n<2?1:cost(n-1)+cost(n-2)+1;}
 for(const l of lessons.filter(l=>l.algoLab==='fibonacci')){const q=l.questions[0],n=Number(q.prompt.match(/T\((\d+)\)\./)[1]);assert.equal(q.answer,cost(n));}
 for(const l of lessons.filter(l=>l.algoLab==='geometric')){const q=l.questions[0],n=Number(q.prompt.match(/T\((\d+)\)\./)[1]);let total=1;for(let size=n;size>1;size/=2)total+=size;assert.equal(q.answer,total);}
});
