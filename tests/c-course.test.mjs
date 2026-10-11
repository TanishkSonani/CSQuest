import test from 'node:test';
import assert from 'node:assert/strict';
import {lessons} from '../courses/c/content/lessons.js';
import {units} from '../courses/c/content/curriculum.js';
import {grade,available,correctAnswer} from '../packages/learning/engine.js';
import {createWorkedExample} from '../packages/learning/worked-examples.js';
import {nextUnit,serializeRound,restoreRound} from '../packages/learning/experience.js';

test('C covers 68 topics with 204 standalone lessons and 816 gradable puzzles',()=>{
 assert.equal(lessons.length,204);assert.equal(units.length,7);
 assert.equal(lessons.flatMap(l=>l.questions).length,816);
 for(const l of lessons){
  assert.equal(l.ready,true);assert.equal(l.foundation.terms.length,3);assert.ok(l.foundation.example.length>40);assert.ok(l.cLab);
  assert.doesNotMatch(JSON.stringify([l.title,l.concept,l.foundation,l.questions]),/\b(transcript|lecturer|recording)\b/i);
  for(const q of l.questions){
   const value=q.type==='match'?q.pairs.map((_,i)=>i):q.type==='order'?q.items:q.answer;
   assert.equal(grade(q,value),true,`${l.id}: ${q.prompt}`);assert.ok(correctAnswer(q));assert.ok(createWorkedExample(l,q).title);
   if(q.type==='number'){assert.equal(grade(q,null),false);assert.equal(grade(q,''),false);assert.equal(grade(q,q.answer+1),false);}
  }
 }
 for(const u of units.slice(0,-1)){
  const id=(u.range[1]+1)*3,p={version:1,completed:Array.from({length:id},(_,i)=>i)};
  assert.equal(available(id,lessons,p),true);assert.equal(nextUnit(lessons,p,units),u.id+1);
 }
});
test('C scenario arithmetic agrees with independent calculations',()=>{
 const expected=[
  [0,2,6],[2,2,20],[5,2,7],[5,5,249],[6,5,0],[8,2,253],
  [9,3,-4],[11,3,8],[12,2,14],[12,3,28],[18,2,6],[18,5,24],
  [21,3,2],[27,2,10],[32,2,21],[34,2,8],[34,3,15],
  [36,2,6],[36,3,12],[39,3,9],[42,3,3],[45,3,4],[49,2,6],[49,3,7],
  [50,3,8],[51,2,10],[57,2,6],[61,2,9],[62,3,0],[64,2,5]
 ];
 for(const [topic,index,answer] of expected){const qs=lessons.slice(topic*3,topic*3+3).flatMap(l=>l.questions);assert.equal(qs[index].answer,answer,`topic ${topic} question ${index}`);}
});
test('program builders contain usable tokens, reject incomplete/wrong code and restore safe drafts',()=>{
 const builders=lessons.flatMap(l=>l.questions).filter(q=>q.type==='c-program');assert.equal(builders.length,68);
 for(const q of builders){
  assert.ok(q.answer.every(token=>q.tokens.includes(token)));assert.equal(grade(q,q.answer.slice(1)),false);assert.equal(grade(q,q.answer.map(()=>null)),false);
  const wrong=[...q.answer];wrong[0]=q.tokens.find(token=>token!==q.answer[0]);assert.equal(grade(q,wrong),false);
  const slots=[...q.template.matchAll(/\{\{(\d+)\}\}/g)].map(m=>Number(m[1]));assert.equal(slots.length,q.answer.length);assert.deepEqual([...slots].sort((a,b)=>a-b),q.answer.map((_,i)=>i));
  assert.ok(q.template.replace(/\{\{(\d+)\}\}/g,(_,i)=>q.answer[Number(i)]).includes('main(void)'));
 }
 const lesson=lessons[2],q=lesson.questions[3],value=q.answer.map((token,i)=>i===0?token:null),round={lesson,practice:false,queue:[{lesson,q,key:'2:3',first:true}],index:0,cleared:new Set(),total:1,value,feedback:null,intro:false,xp:0,firstCorrect:0,hearts:5,combo:0};
 const draft=serializeRound(round,'c');assert.deepEqual(restoreRound(draft,'c',lessons).value,value);
 assert.equal(restoreRound({...draft,value:[{code:'arbitrary'}]},'c',lessons),null);
 assert.equal(restoreRound({...draft,value:value.map(()=>'<script>')},'c',lessons),null);
});
