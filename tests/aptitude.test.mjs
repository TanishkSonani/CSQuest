import test from 'node:test';
import assert from 'node:assert/strict';
import {lessons} from '../courses/aptitude/content/lessons.js';
import {units} from '../courses/aptitude/content/curriculum.js';
import {grade,available,correctAnswer} from '../packages/learning/engine.js';
import {createWorkedExample} from '../packages/learning/worked-examples.js';
import {nextUnit,serializeRound,restoreRound} from '../packages/learning/experience.js';

test('Aptitude covers all topics with playable standalone puzzles and complete opening examples',()=>{
 assert.equal(lessons.length,45);assert.equal(units.length,5);
 assert.equal(lessons.flatMap(l=>l.questions).length,180);
 for(const l of lessons){
  assert.equal(l.ready,true);assert.equal(l.foundation.terms.length,3);assert.ok(l.foundation.example.length>40);assert.ok(l.lab);
  assert.doesNotMatch(JSON.stringify([l.title,l.concept,l.foundation,l.questions]),/\b(transcript|lecturer|recording)\b/i);
  for(const q of l.questions){
   const value=q.type==='match'?q.pairs.map((_,i)=>i):q.type==='order'?q.items:q.answer;
   assert.equal(grade(q,value),true,`${l.id}: ${q.prompt}`);
   assert.ok(correctAnswer(q));assert.ok(createWorkedExample(l,q).title);
   if(['number','visual-number'].includes(q.type)){assert.equal(grade(q,null),false);assert.equal(grade(q,''),false);assert.equal(grade(q,q.answer+1),false);}
  }
 }
 for(const u of units.slice(0,-1)){
  const id=(u.range[1]+1)*3,p={version:1,completed:Array.from({length:id},(_,i)=>i)};
  assert.equal(available(id,lessons,p),true);assert.equal(nextUnit(lessons,p,units),u.id+1);
 }
});

test('interest, rates, changed bases, negative rounding and scenario answers agree with independent calculations',()=>{
 const checks=[
  [0,0,2000*5/100*3],[1,0,1000*1.1**2],[1,1,2000*1.05**2-2000],
  [3,0,240/4],[4,0,(500-400)/400*100],[5,0,1000*1.1*.9],[5,1,(1-1/1.25)*100],
  [6,0,600*2/5],[7,2,8],[8,0,20*3/4],[9,1,(1000-800)/800*100],[11,2,400*1.25/.8],
  [13,0,1/(1/6+1/3)],[13,2,1/(1/6-1/12)],[14,2,(8*9-8*3)/4],
  [15,2,72/3.6],[16,1,20/(8-6)],[17,0,120/(60/30+60/60)],
  [20,0,480],[24,0,18+12-6],[25,1,Math.hypot(3,4)],[27,2,3],
  [30,0,Math.abs(-7)],[32,3,Math.abs(7.4-8)],[34,0,Math.floor(-1.2)],[34,1,Math.ceil(-1.2)],
  [35,0,Math.ceil(91/40)],[35,1,Math.floor(23/5)]
 ];
 for(const [id,index,expected] of checks)assert.ok(Math.abs(lessons[id].questions[index].answer-expected)<1e-7,`${id}:${index}`);
});

test('visual answers retain safe numeric values when a lesson is paused',()=>{
 const lesson=lessons[30],q=lesson.questions[0],round={lesson,practice:false,queue:[{lesson,q,key:'30:0',first:true}],index:0,cleared:new Set(),total:1,value:'7',feedback:null,intro:false,xp:0,firstCorrect:0,hearts:5,combo:0};
 const draft=serializeRound(round,'aptitude');assert.equal(restoreRound(draft,'aptitude',lessons).value,'7');
 assert.equal(restoreRound({...draft,value:{bad:true}},'aptitude',lessons),null);
 assert.equal(grade(q,11),false);
});
