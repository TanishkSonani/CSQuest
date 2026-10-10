import test from 'node:test';
import assert from 'node:assert/strict';
import {flipflopLectures} from '../courses/dl/authoring/flipflop-lessons.mjs';
const qs=id=>flipflopLectures.get(id).stages.flatMap(s=>s.questions);
// Simulate direct-Q clocks by propagating only the chosen output-edge polarity.
function ripple(start,width,edge){
 let state=start;const trace=[];
 for(let bit=0;bit<width;bit++){
  const before=(state>>bit)&1;state^=1<<bit;trace.push(state);
  if((edge==='rising'&&before===1)||(edge==='falling'&&before===0))break;
 }
 return trace;
}
test('direct-Q ripple clock connections produce the stated settled count directions',()=>{
 for(const width of [2,3,4])for(let state=0;state<2**width;state++){
  assert.equal(ripple(state,width,'rising').at(-1),(state-1+2**width)%(2**width));
  assert.equal(ripple(state,width,'falling').at(-1),(state+1)%(2**width));
 }
 assert.deepEqual(ripple(0,2,'rising'),[1,3]);
 const counter=qs(83).find(q=>q.type==='order'&&q.prompt.includes('next four'));
 let state=0;for(const item of counter.items){state=ripple(state,2,'rising').at(-1);assert.equal(parseInt(item.split(': ')[1],2),state);}
});
test('worked ripple traces include the actual intermediate states in order',()=>{
 for(const [id,start,edge] of [[84,4,'rising'],[85,3,'falling']]){
  const q=qs(id).find(q=>q.type==='order');
  assert.deepEqual(q.items.map(item=>parseInt(item.split(': ')[1],2)),ripple(start,3,edge));
  assert.equal(qs(id).find(q=>q.prompt.includes('intermediate-pattern count')||q.prompt.includes('number of intermediate')).answer,ripple(start,3,edge).length-1);
 }
 assert.equal(ripple(7,3,'rising').length-1,0);
});
test('frequency division and terminal reset examples agree with exhaustive binary states',()=>{
 assert.equal(qs(82).find(q=>q.prompt.includes('80 MHz')).answer,80/2);
 assert.equal(qs(83).find(q=>q.prompt.includes('48 MHz')).answer,48/4);
 assert.equal(qs(84).find(q=>q.prompt.includes('64 MHz')).answer,64/8);
 for(let state=0;state<8;state++){
  const q2=(state>>2)&1,q1=(state>>1)&1,q0=state&1;
  const clearBar=1-(q2&q1&(1-q0));assert.equal(clearBar===0,state===6);
 }
 const visited=[];let state=0;
 for(let event=0;event<12;event++){visited.push(state);state++;if(state===6)state=0;}
 assert.equal(new Set(visited).size,6);assert.deepEqual(visited.slice(0,6),[0,1,2,3,4,5]);
 assert.equal(qs(85).find(q=>q.prompt.includes('detecting 110')).options[0],'6');
});
test('master phase choices and simplified delayed toggles give the stated results',()=>{
 let master=0,slave=0;
 // High phase changes master only; low phase transfers the closed master.
 for(const d of [0,1,0,1]){master=d;assert.equal(slave,0);}
 slave=master;assert.equal(slave,1);
 assert.equal(qs(79).find(q=>q.prompt.includes('External Q starts 0')).answer,slave);
 const completed=Array.from({length:4},(_,i)=>(i+1)*2).filter(time=>time<7).length;
 assert.equal(qs(80).find(q=>q.prompt.includes('Completed toggles')).answer,completed);
 assert.equal(qs(80).find(q=>q.prompt.includes('disabled at 7 ns')).answer,completed%2);
});
