import test from 'node:test';
import assert from 'node:assert/strict';
import {units,lecturePlans} from '../courses/dbms/content/curriculum.js';
import {lessons} from '../courses/dbms/content/lessons.js';
import {lessonJourney} from '../packages/learning/lesson-journey.js';
import {questionIdentity} from '../packages/learning/quiz-identity.js';
import {grade} from '../packages/learning/engine.js';
import {diagramKind} from '../packages/learning/visual-models.js';

test('DBMS publishes three beginner-friendly stages per recording with source-backed or honestly inferred content',()=>{
 assert.equal(lecturePlans.length,94);assert.equal(lessons.length,282);
 assert.deepEqual(units.flatMap(unit=>Array.from({length:unit.range[1]-unit.range[0]+1},(_,i)=>unit.range[0]+i)),Array.from({length:94},(_,i)=>i));
 const inferred=[];
 for(let lecture=0;lecture<94;lecture++){
  const group=lessons.slice(lecture*3,lecture*3+3);assert.equal(group.length,3);
  for(let stage=0;stage<3;stage++){
   const lesson=group[stage],journey=lessonJourney(lesson,'dbms');
   assert.equal(lesson.id,lecture*3+stage);assert.equal(lesson.lecture,lecture);assert.ok(lesson.ready);assert.ok(lesson.dbmsLab);assert.equal(diagramKind('dbms',lesson),`dbms:${lesson.dbmsLab}`);assert.equal(lesson.dbmsScene.length,3);
   assert.ok(journey.idea.length>60&&journey.example.length>50&&journey.terms.length>=2&&journey.steps.length===3);
   assert.equal(lesson.questions.length,4);assert.ok(lesson.questions.every(question=>question.prompt.length>25&&question.explanation.length>20));
   for(const question of lesson.questions){
    const answer=question.type==='match'?question.pairs.map((_,i)=>i):question.type==='order'?question.items:question.answer;
    assert.ok(grade(question,answer),`${lesson.id}: ${question.prompt}`);
   }
   if(lesson.contentStatus==='inferred-title-only'){assert.ok(lesson.contentNote);assert.equal(lesson.sourceReferences.length,0);}
   else {assert.equal(lesson.contentStatus,'reviewed');assert.ok(lesson.sourceReferences.length,`lecture ${lecture} needs transcript evidence`);assert.ok(lesson.sourceReferences.every(ref=>Number.isFinite(ref.start)&&ref.end>ref.start&&ref.text));}
  }
  if(group[0].contentStatus==='inferred-title-only')inferred.push(group[0].lecture);
 }
 assert.deepEqual(inferred,[23,26,52,53,55,59,60]);
});

test('DBMS question sets do not repeat within a stage, its topic, or the preceding two levels',()=>{
 for(const lesson of lessons){
  const previous=lessons.filter(other=>other.id<lesson.id&&(other.id>=lesson.id-2||other.lecture===lesson.lecture));
  const seen=new Set(previous.flatMap(other=>other.questions.map(questionIdentity)));
  for(const question of lesson.questions){const identity=questionIdentity(question);assert.ok(!seen.has(identity),`${lesson.id}: ${question.prompt}`);seen.add(identity);}
 }
});
