import test from 'node:test';
import assert from 'node:assert/strict';
import {flipflopLectures} from '../courses/dl/authoring/flipflop-lessons.mjs';
import {grade} from '../packages/learning/engine.js';
import {createWorkedExample} from '../packages/learning/worked-examples.js';
const questions=id=>flipflopLectures.get(id).stages.flatMap(s=>s.questions);
const sr=(s,r,q)=>s?1:r?0:q;
const jk=(j,k,q)=>j?(k?1-q:1):(k?0:q);
const pn=(p,n,q)=>p?(n?1:1-q):(n?q:0);
test('new flip-flop definitions have complete worked examples and four exercises per stage',()=>{
 for(let id=67;id<=97;id++){
  const d=flipflopLectures.get(id);assert.equal(d.stages.length,3);
  for(const [part,s] of d.stages.entries()){
   assert.equal(s.steps.length,3);assert.equal(s.questions.length,4);assert.ok(s.anchors.length);
   const q=s.questions[0],card=createWorkedExample({id:id*3+part,title:s.title,questions:s.questions});
   assert.ok(card.prompt&&card.explanation);assert.doesNotMatch(JSON.stringify(card),/undefined|No answer/);
   assert.equal(card.prompt,q.prompt);
   for(const q of s.questions){
    const answer=q.type==='match'?q.pairs.map((_,i)=>i):q.type==='order'?q.items:q.answer;
    assert.ok(grade(q,answer));
   }
  }
 }
});
test('characteristic tables agree with independent operation models',()=>{
 const models={68:([s,r,q])=>sr(s,r,q),69:([d])=>d,71:([j,k,q])=>jk(j,k,q),72:([t,q])=>t?1-q:q,75:([p,n,q])=>pn(p,n,q)};
 for(const [id,model] of Object.entries(models))for(const q of questions(+id).filter(q=>q.type==='truth')){
  assert.deepEqual(q.answer,q.rows.map(model),q.prompt);
  const wrong=[...q.answer];wrong[0]^=1;assert.equal(grade(q,wrong),false);
 }
});
test('D/T/JK and PN/D conversions reproduce target transitions on every binary row',()=>{
 for(let q=0;q<2;q++)for(let a=0;a<2;a++){
  const physicalD=a^q;assert.equal(physicalD,a?1-q:q);
  const physicalT=a^q;assert.equal(physicalT?1-q:q,a);
  assert.equal(pn(a,a,q),a);
  for(let b=0;b<2;b++){
   const physicalD=(a&(1-q))|((1-b)&q);assert.equal(physicalD,jk(a,b,q));
  }
 }
 for(const table of questions(74).filter(q=>q.type==='truth'))assert.deepEqual(table.answer,table.rows.map(([a,q])=>a^q));
});
test('SR/T conversions avoid forbidden SR pairs and match every permitted target row',()=>{
 for(let q=0;q<2;q++)for(let t=0;t<2;t++){
  const s=t&(1-q),r=t&q;assert.equal(s&r,0);assert.equal(sr(s,r,q),t?1-q:q);
 }
 for(const table of questions(76).filter(q=>q.type==='truth')){
  const expected=table.rows.map(([s,r,q])=>Number(sr(s,r,q)!==q));assert.deepEqual(table.answer,expected);
  for(let i=0;i<table.rows.length;i++)assert.equal(table.answer[i]?1-table.rows[i][2]:table.rows[i][2],sr(...table.rows[i]));
 }
});
test('excitation dont-cares produce the desired transition for both allowed values',()=>{
 for(const id of [68,71,72,75]){
  const q=questions(id).find(q=>q.type==='match'&&q.prompt.includes('excitation'));
  for(const [transition,controls] of q.pairs){
   const [current,next]=transition.split(' to ').map(Number);
   const candidates=controls.split(',').map(x=>x.split('=')[1]==='X'?[0,1]:[Number(x.split('=')[1])]);
   if(id===72){for(const t of candidates[0])assert.equal(t?1-current:current,next);}
   else for(const a of candidates[0])for(const b of candidates[1])assert.equal((id===68?sr:id===71?jk:pn)(a,b,current),next);
  }
 }
});
test('frequency conversions and clock traces give independently calculated results',()=>{
 const q=questions(67);assert.equal(q.find(q=>q.prompt.includes('period 20 ns')).answer,1/(20e-9)/1e6);
 const bits=[0,1,1,0,0,1];const rises=bits.slice(1).filter((x,i)=>bits[i]===0&&x===1).length;
 assert.equal(q.find(q=>q.prompt.includes('rising transitions')).answer,rises);
 let state=0;for(const t of [1,0,1,1])if(t)state^=1;
 assert.equal(questions(72).find(q=>q.prompt.includes('1,0,1,1')).answer,state);
 assert.equal(questions(78).find(q=>q.prompt.includes('setup time 3 ns')).answer,20-3);
});
