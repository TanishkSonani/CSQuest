import test from 'node:test';
import assert from 'node:assert/strict';
import {scheduleJobs,dfaTrace,tokenize,compilerTrace,databaseTrace,incrementTrace,osTrace,networkTrace,crcExperiment} from '../packages/learning/teaching-models.js';
import {subjects} from '../config/courses.mjs';

test('Scheduling conserves every burst, respects arrivals and uses contiguous time intervals',()=>{
 const jobs=[{id:'A',arrival:2,burst:5},{id:'B',arrival:3,burst:2},{id:'C',arrival:8,burst:1}];
 for(const policy of ['fcfs','rr','sjf'])for(const quantum of [1,2,8]){
  const timeline=scheduleJobs(jobs,policy,quantum);
  assert.deepEqual(timeline[0],{id:'Idle',start:0,end:2});
  for(const job of jobs){const slots=timeline.filter(s=>s.id===job.id);assert.equal(slots.reduce((n,s)=>n+s.end-s.start,0),job.burst);assert.ok(slots.every(s=>s.start>=job.arrival));}
  assert.ok(timeline.every((s,i)=>s.end>s.start&&(!i||s.start===timeline[i-1].end)));
  if(policy==='rr')assert.ok(timeline.filter(s=>s.id!=='Idle').every(s=>s.end-s.start<=quantum));
 }
 assert.deepEqual(scheduleJobs([{id:'A',arrival:0,burst:3},{id:'B',arrival:1,burst:1}],'rr',2).map(s=>[s.id,s.start,s.end]),[['A',0,2],['B',2,3],['A',3,4]]);
 assert.throws(()=>scheduleJobs(jobs,'rr',0));
});

test('The DFA accepts exactly even-parity strings including the empty word',()=>{
 for(let length=0;length<=8;length++)for(let n=0;n<2**length;n++){
  const input=length?n.toString(2).padStart(length,'0'):'';
  assert.equal(dfaTrace(input).accepted,[...input].filter(c=>c==='1').length%2===0);
  assert.equal(dfaTrace(input).frames.length,length+2);
 }
 assert.throws(()=>dfaTrace('102'));assert.throws(()=>dfaTrace(' '));
});

test('The toy lexer preserves source spans, uses maximal munch and rejects unsupported characters',()=>{
 const source='count==12 + sum;';
 const tokens=tokenize(source);
 assert.deepEqual(tokens.map(t=>t.lexeme),['count','==','12','+','sum',';']);
 assert.deepEqual(tokens.map(t=>t.kind),['identifier','operator','integer','operator','identifier','delimiter']);
 for(const t of tokens)assert.equal(source.slice(t.start,t.end),t.lexeme);
 assert.equal(compilerTrace('').tokens.length,0);assert.throws(()=>tokenize('a @ b'));
});

test('Database traces distinguish filtering, joins, grouping and a dependency violation',()=>{
 assert.deepEqual(databaseTrace('sql',20).at(-1).rows,[['Lina',21]]);
 assert.deepEqual(databaseTrace('sql',25).at(-1).rows,[]);
 assert.deepEqual(databaseTrace('inner join',15).at(-1).rows,[['Ravi','Theory']]);
 assert.deepEqual(databaseTrace('left join',15).at(-1).rows,[['Ravi','Theory'],['Lina','NULL']]);
 assert.deepEqual(databaseTrace('group by',15).at(-1).rows,[[1,1,21],[2,1,18]]);
 assert.deepEqual(databaseTrace('normalization').at(1).rows.map(r=>r.slice(0,2)),[['S1','Mina'],['S1','Mira']]);
 assert.equal(incrementTrace(3).at(-1).rows[0][1],4);assert.equal(incrementTrace(3).at(-1).rows[1][1],5);
});

test('CRC transmission has zero receiver remainder; every single-bit corruption is detected',()=>{
 for(const generator of ['1011','1101','10011']){
  const original=crcExperiment('11010010',generator);
  assert.match(original.remainder,/^0+$/);assert.equal(original.sent,'11010010'+original.check);
  for(let i=0;i<original.sent.length;i++)assert.doesNotMatch(crcExperiment('11010010',generator,i).remainder,/^0+$/);
 }
});

test('Address, segmentation, FIFO, network and timing examples preserve their stated units and rules',()=>{
 for(let value=1;value<=8;value++){
  const rows=osTrace('paging',value).at(-1).rows[0];assert.equal(rows[0]+rows[1],rows[2]);assert.equal(rows[1],(value*13+11)%16);
 }
 assert.equal(osTrace('segment',8).at(-1).rows[0][1],'none');
 assert.equal(osTrace('segment',1).at(-1).rows[0][1],1013);
 assert.equal(osTrace('tlb',2).at(-1).rows[0][1],'185 ns');
 assert.equal(osTrace('replacement',4).length,8);
 assert.deepEqual(networkTrace({kind:'fragment'}).at(-1).rows,[[1480,0,1],[1480,185,1],[1020,370,0]]);
 assert.deepEqual(networkTrace({kind:'subnet'},2).at(-1).rows,[[64,62]]);
 assert.equal(networkTrace({kind:'transport',mode:'handshake'}).at(-1).rows[0][2],501);
});

test('All published lessons carry authored teaching guidance without modifying quiz identities',async()=>{
 let count=0;
 for(const subject of subjects){
  const {lessons}=await import(`../courses/${subject.id}/content/lessons.js`);
  for(const l of lessons){
   assert.equal(l.learningNotes.subject,subject.id);
   for(const key of ['objective','why','watchFor','experiment'])assert.ok(l.learningNotes[key].trim().length>0,`${subject.id}/${l.id}: ${key}`);
   assert.doesNotMatch(l.foundation.idea,/The focus here is/);
   assert.doesNotMatch(l.foundation.example,/Apply the same reasoning specifically to/);
   assert.equal(l.questions.length,4);count++;
  }
 }
 assert.equal(count,2592);
});
