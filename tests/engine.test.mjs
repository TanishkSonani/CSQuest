import test from 'node:test';
import assert from 'node:assert/strict';
import {grade,available,emptyProgress,addStudy,displayedStreak,normalizeProgress,localDate,traceCache,recordMistake,recordReview} from '../packages/learning/engine.js';
import {lessons} from '../courses/coa/content/lessons.js';
import {lecturePlans,units} from '../courses/coa/content/curriculum.js';
test('course plan covers every source lecture exactly once',()=>{
  assert.equal(lecturePlans.length,35);assert.equal(lecturePlans.flatMap(p=>p.slice(1)).length,105);
  const coverage=units.flatMap(u=>Array.from({length:u.range[1]-u.range[0]+1},(_,i)=>u.range[0]+i));assert.deepEqual(coverage,Array.from({length:35},(_,i)=>i));
});
test('authored lessons have unique IDs, source references, and four gradable challenges',()=>{
  assert.deepEqual(lessons.map(l=>l.id),Array.from({length:105},(_,i)=>i));
  for(const lesson of lessons){assert.ok(lesson.concept.length>50);assert.ok(lesson.lecture>=0&&lesson.lecture<=34);assert.ok(lesson.start>=0);assert.equal(lesson.questions.length,4);
    for(const q of lesson.questions){assert.ok(q.explanation.length>20);let answer;
      if(q.type==='choice'){assert.ok(q.answer>=0&&q.answer<q.options.length);answer=q.answer;assert.equal(grade(q,(q.answer+1)%q.options.length),false);}
      if(q.type==='number'){answer=String(q.answer);assert.equal(grade(q,''),false);assert.equal(grade(q,q.answer+1),false);}
      if(q.type==='match'){answer=q.pairs.map((_,i)=>i);assert.equal(grade(q,Array(q.pairs.length).fill(null)),false);}
      if(q.type==='order'){answer=q.items;assert.equal(new Set(q.items).size,q.items.length);assert.equal(grade(q,[...q.items].reverse()),false);}
      if(q.type==='bits'){answer=q.opcode;assert.ok(q.opcode>0&&q.opcode<q.total);assert.equal(grade(q,q.opcode+1),false);}
      if(q.type==='cpu'){answer={steps:q.steps.length,accumulator:q.initial+q.steps.reduce((s,n)=>s+n,0)};assert.equal(answer.accumulator,q.target);assert.equal(grade(q,{steps:0,accumulator:q.target}),false);}
      if(q.type==='hex'){answer=q.answer;assert.equal(grade(q,'XYZ'),false);assert.equal(grade(q,'0x'+q.answer.toLowerCase()),true);}
      if(q.type==='cache'){answer=traceCache(q).map(r=>r.hit);assert.equal(grade(q,[]),false);}
      assert.equal(grade(q,answer),true,`${lesson.title}: ${q.prompt}`);
    }
  }
});
test('a level unlocks only after its predecessor is completed',()=>{const p=emptyProgress();assert.equal(available(0,lessons,p),true);assert.equal(available(1,lessons,p),false);p.completed.push(0);assert.equal(available(1,lessons,p),true);assert.equal(available(2,lessons,p),false);assert.equal(available(15,lessons,p),false);});
test('same-day study adds XP without inflating the streak',()=>{let p=addStudy(emptyProgress(),20,'2026-10-10');p=addStudy(p,10,'2026-10-10');assert.equal(p.streak,1);assert.equal(p.xp,30);assert.equal(p.daily['2026-10-10'],30);});
test('consecutive study days extend the streak and a gap restarts it',()=>{let p=addStudy(emptyProgress(),20,'2026-10-10');p=addStudy(p,20,'2026-10-11');assert.equal(p.streak,2);assert.equal(displayedStreak(p,'2026-10-12'),2);assert.equal(displayedStreak(p,'2026-10-13'),0);p=addStudy(p,20,'2026-10-14');assert.equal(p.streak,1);});
test('local date and streak handle month/year boundaries',()=>{assert.equal(localDate(new Date(2026,9,10,0,1)),'2026-10-10');let p=addStudy(emptyProgress(),10,'2026-12-31');p=addStudy(p,10,'2027-01-01');assert.equal(p.streak,2);});
test('saved progress restores settings and removes duplicate completions',()=>{const p=normalizeProgress({version:1,xp:25,completed:[0,0,1],settings:{sound:false}});assert.equal(p.settings.sound,false);assert.deepEqual(p.completed,[0,1]);assert.equal(p.xp,25);assert.equal(normalizeProgress({version:0,xp:999}).xp,0);});
test('cache policies produce independent expected traces and evictions',()=>{const q={sets:2,ways:2,accesses:[0,2,0,4,2]};assert.deepEqual(traceCache({...q,policy:'LRU'}).map(r=>r.hit),[false,false,true,false,false]);assert.deepEqual(traceCache({...q,policy:'FIFO'}).map(r=>r.hit),[false,false,true,false,true]);assert.equal(traceCache({...q,policy:'LRU'})[3].evicted,2);assert.equal(traceCache({...q,policy:'FIFO'})[3].evicted,0);assert.deepEqual(traceCache({sets:2,ways:1,policy:'LRU',accesses:[0,2,0,1,1]}).map(r=>r.hit),[false,false,false,false,true]);});
test('mistake history survives corrections and needs two clean practice recalls',()=>{const p=emptyProgress();recordMistake(p,'1:0','wrong answer',100);recordReview(p,'1:0',false,200);assert.equal(p.mistakes[0].correctStreak,0);assert.equal(p.mistakes[0].lastAnswer,'wrong answer');recordReview(p,'1:0',true,300);assert.equal(p.mistakes[0].status,'learning');recordReview(p,'1:0',true,400);assert.equal(p.mistakes[0].status,'resolved');recordMistake(p,'1:0','another wrong answer',500);assert.equal(p.mistakes[0].wrongAttempts,2);assert.equal(p.mistakes[0].correctStreak,0);assert.equal(p.mistakes[0].firstMissedAt,100);assert.equal(p.mistakes[0].due,500);});
test('floating point grading accepts harmless decimal error but rejects blanks',()=>{const q={type:'number',answer:11.8,tolerance:1e-8};assert.equal(grade(q,11.80000000001),true);assert.equal(grade(q,11.81),false);assert.equal(grade(q,''),false);});
