import test from 'node:test';
import assert from 'node:assert/strict';
import {adderDecoderLectures} from '../courses/dl/authoring/adder-decoder-lessons.mjs';
import {grade} from '../packages/learning/engine.js';
import {createWorkedExample} from '../packages/learning/worked-examples.js';
const qs=id=>adderDecoderLectures.get(id).stages.flatMap(s=>s.questions);

test('new teaching has three complete stages and self-contained opening examples',()=>{
 for(let id=48;id<=66;id++){
  const d=adderDecoderLectures.get(id);assert.equal(d.stages.length,3);
  for(const [part,s] of d.stages.entries()){
   assert.equal(s.questions.length,4);assert.equal(s.steps.length,3);
   const q=s.questions[0],card=createWorkedExample({id:id*3+part,lecture:id,title:s.title,questions:s.questions});
   assert.ok(card.prompt&&card.explanation);assert.doesNotMatch(JSON.stringify(card),/undefined|No answer/);
   if(q.type==='truth')assert.deepEqual(card.solutionTable.rows.map(r=>r.at(-1)),q.answer);
  }
 }
});

test('NOR latch controls satisfy the cross-coupled equations in valid states',()=>{
 for(const prior of [0,1])for(const [set,reset] of [[0,0],[1,0],[0,1]]){
  const next=set?1:reset?0:prior,opposite=1-next;
  assert.equal(next,1-(reset|opposite));assert.equal(opposite,1-(set|next));
 }
 assert.equal(qs(65).find(q=>q.prompt.includes('then hold (0,0)')).answer,0);
 const bad=[0,0];assert.equal(bad[0],1-(1|bad[1]));assert.equal(bad[1],1-(1|bad[0]));
 assert.notEqual(bad[1],1-bad[0]);
});
test('adder tables agree with integer addition and reject incorrect rows',()=>{
 for(const id of [53,54,56])for(const q of qs(id).filter(q=>q.type==='truth')){
  const expected=q.rows.map(row=>{
   const total=row.reduce((a,b)=>a+b,0);
   return /sum S|S\(A,B,Cin\)|propagate P/.test(q.prompt)?total%2:Number(total>=2);
  });
  assert.deepEqual(q.answer,expected,q.prompt);assert.ok(grade(q,expected));
  const wrong=[...expected];wrong[0]^=1;assert.equal(grade(q,wrong),false);
 }
});
test('priority encoding equations select the highest active request for every input pattern',()=>{
 for(let mask=1;mask<16;mask++){
  const w=Array.from({length:4},(_,i)=>(mask>>i)&1);
  const winner=31-Math.clz32(mask);
  const encoded=((w[3]|w[2])<<1)|(w[3]|((1-w[2])&w[1]));
  assert.equal(encoded,winner);
 }
 assert.ok(qs(48).some(q=>q.answer===0&&q.prompt.includes('valid Z')));
});
test('decoder polarity and SOP realization agree on every address',()=>{
 for(let address=0;address<4;address++){
  const hi=Array.from({length:4},(_,i)=>Number(i===address)),lo=hi.map(x=>1-x);
  assert.equal(hi.reduce((a,b)=>a+b),1);assert.equal(lo.filter(x=>x===0).length,1);
  const target=Number(address===1||address===2);
  assert.equal(hi[1]|hi[2],target);assert.equal(1-(lo[1]&lo[2]),target);
 }
 for(const id of [49,50,51])for(const q of qs(id).filter(q=>q.type==='truth')){
  const expected=q.rows.map(([a,b])=>id===49?a&(1-b):id===50?1-(a&b):a^b);
  assert.deepEqual(q.answer,expected,q.prompt);
 }
});
test('ripple timings distinguish SOP carry from two-half-adder implementation',()=>{
 // Independently calculate arrivals using max(input arrivals) + gate delay.
 let carry=0;const sums=[],carries=[];
 for(let i=0;i<8;i++){
  const p=1,g=1;sums.push(Math.max(p,carry)+1);
  carry=Math.max(g,Math.max(p,carry)+1)+1;carries.push(carry);
 }
 for(const [output,expected] of [['S2-valid',sums[2]],['C4-valid',carries[3]],['S3-valid',sums[3]*2],['C8-valid',carries[7]]])
  assert.equal(qs(61).find(q=>q.prompt.includes(output)).answer,expected);
 assert.equal(qs(55).find(q=>q.prompt.includes('Latest top sum')).answer,3*2+3);
});
test('signed representations and look-ahead counts match independent calculations',()=>{
 assert.equal(qs(62).find(q=>q.prompt.includes('Minimum twos')).answer,Math.ceil(Math.log2(9+1))+1);
 const raw=5+(15-2),corrected=(raw&15)+(raw>>4);assert.equal(corrected,3);
 for(const n of [4,8]){
  const count=Array.from({length:n},(_,i)=>i+1).reduce((a,b)=>a+b,0);
  assert.ok(qs(59).some(q=>q.type==='number'&&q.answer===count));
 }
 assert.equal(qs(60).find(q=>q.prompt.includes('evaluate n=16')).answer,3+2*Math.ceil(Math.log2(16))+3);
});
