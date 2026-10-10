import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {flipflopLectures} from '../courses/dl/authoring/flipflop-lessons.mjs';
const qs=id=>flipflopLectures.get(id).stages.flatMap(s=>s.questions);
const binary=x=>x.toString(2).padStart(3,'0');
const nextT=x=>{const a=x>>2,b=(x>>1)&1,c=x&1;return ((a^b)<<2)|((b^c)<<1)|(c^1);};
const nextCustom=x=>{const p=x>>2,q=(x>>1)&1,r=x&1;return ((p^r)<<2)|((q^(1-p))<<1)|(r^(1-q));};
// Use JK operation cases rather than the characteristic-expression implementation.
const jk=(j,k,q)=>j?(k?1-q:1):(k?0:q);
const nextJK=x=>{const a=x>>2,b=(x>>1)&1,c=x&1;return (jk((1-b)&(1-c),1,a)<<2)|(jk(a,1-c,b)<<1)|jk(a|b,1,c);};
function step(model,state,n){while(n--)state=model(state);return state;}
test('all 98 transcripts have three developed levels with no pending editorial entries',()=>{
 const b=JSON.parse(fs.readFileSync(new URL('../courses/dl/data/lesson-build.json',import.meta.url)));
 assert.equal(b.reviewedLectures,98);assert.equal(b.reviewedLevels,294);assert.equal(b.questions,1176);
 assert.deepEqual(b.awaitingEditorialReview,[]);assert.deepEqual(b.coverage.map(r=>r.lecture),Array.from({length:98},(_,i)=>i));
});
test('synchronous T and JK cycle examples agree with simultaneous old-state updates',()=>{
 for(const [id,model,start] of [[92,nextT,0],[93,nextJK,0],[94,nextCustom,0]]){
  const order=qs(id).find(q=>q.type==='order');let state=start;
  for(const text of order.items){state=model(state);assert.equal(text.split(': ')[1],binary(state));}
 }
 assert.equal(qs(92).find(q=>q.prompt.includes('ten active edges')&&q.prompt.includes('initial 000')).answer,step(nextT,0,10));
 assert.equal(qs(92).find(q=>q.prompt.includes('ten active edges')&&q.prompt.includes('initial 101')).answer,step(nextT,5,10));
 assert.equal(qs(93).find(q=>q.prompt.includes('twelve active edges')).answer,step(nextJK,0,12));
 assert.equal(qs(93).find(q=>q.prompt.includes('Current Q2Q1Q0=101')).answer,nextJK(5));
 assert.equal(qs(94).find(q=>q.prompt.includes('eight active edges')).answer,step(nextCustom,0,8));
 assert.equal(qs(94).find(q=>q.prompt.includes('current PQR=110')).answer,nextCustom(6));
 assert.equal(nextCustom(6),6);
});
test('ripple timing and stage budgets preserve units and the stated assumptions',()=>{
 assert.equal(qs(89).find(q=>q.prompt.includes('Maximum input frequency')).answer,1e3/(4*50));
 assert.equal(qs(90).find(q=>q.prompt.includes('Maximum equal stage delay')&&q.prompt.includes('1024')).answer,1e3/(Math.log2(1024)*1));
 assert.equal(qs(90).find(q=>q.prompt.includes('Eight-stage')).answer,1e3/(8*5));
 assert.equal(qs(95).find(q=>q.prompt.includes('Minimum clock period')).answer,4+6+2);
 assert.equal(qs(95).find(q=>q.prompt.includes('Maximum frequency')).answer,1e3/(5+10+5));
 assert.equal(qs(86).find(q=>q.prompt.includes('modulo-6 then modulo-10')).answer,1200/(6*10));
});
test('custom reload counters count stable endpoints and assert the right detector polarity',()=>{
 assert.equal(qs(87).find(q=>q.prompt.includes('range 3 through 5')).answer,5-3+1);
 assert.equal(qs(91).find(q=>q.prompt.includes('range 7 through 3')).answer,7-3+1);
 for(let x=0;x<8;x++){
  const a=x>>2,b=(x>>1)&1,c=x&1;
  const terminal6=1-(a&b&(1-c)),terminal2=1-((1-a)&b&(1-c));
  assert.equal(terminal6===0,x===6);assert.equal(terminal2===0,x===2);
 }
});
const ring=(x,n)=>(x>>1)|((x&1)<<(n-1));
const twisted=(x,n)=>(x>>1)|((1-(x&1))<<(n-1));
function orbit(next,start){const seen=[];let x=start;do{assert.ok(!seen.includes(x));seen.push(x);x=next(x);}while(x!==start);return seen;}
test('ring and twisted-ring examples match the stated shift direction and initialization',()=>{
 for(let n=2;n<=8;n++){
  const r=orbit(x=>ring(x,n),1<<(n-1));assert.equal(r.length,n);assert.ok(r.every(x=>(x&(x-1))===0));
  const j=orbit(x=>twisted(x,n),0);assert.equal(j.length,2*n);
 }
 const r=orbit(x=>ring(x,4),8),j=orbit(x=>twisted(x,4),0);
 assert.deepEqual(qs(96).find(q=>q.type==='order').items.map(s=>parseInt(s.split(':')[0],2)),r);
 assert.deepEqual(qs(97).find(q=>q.type==='order').items.map(s=>parseInt(s,2)),j);
 assert.equal(qs(96).find(q=>q.prompt.includes('six active edges')).answer,step(x=>ring(x,4),8,6));
 assert.equal(qs(97).find(q=>q.prompt.includes('ten updates')).answer,step(x=>twisted(x,4),0,10));
 assert.equal(ring(0,4),0);
});
test('Johnson phase detectors assert exactly one phase on every valid initialized state',()=>{
 const valid=orbit(x=>twisted(x,4),0);
 for(const [phase,x] of valid.entries()){
  const a=x>>3,b=(x>>2)&1,c=(x>>1)&1,d=x&1;
  const outputs=[(1-a)&(1-d),a&(1-b),b&(1-c),c&(1-d),a&d,(1-a)&b,(1-b)&c,(1-c)&d];
  assert.deepEqual(outputs,Array.from({length:8},(_,i)=>Number(i===phase)));
 }
});
test('new numerical state questions retain their complete circuit or cycle context',()=>{
 for(let id=86;id<=97;id++)for(const q of qs(id))assert.doesNotMatch(q.prompt,/^Same |^This (?:T model|counter|model)|^For this wiring|^Stated five-state/i);
});
