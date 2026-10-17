import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {platformRoot} from '../config/courses.mjs';
import {units,lecturePlans} from '../courses/cn/content/curriculum.js';
import {lessons} from '../courses/cn/content/lessons.js';
import {topics} from '../courses/cn/authoring/topics.js';
import {lessonJourney} from '../packages/learning/lesson-journey.js';
import {questionIdentity} from '../packages/learning/quiz-identity.js';
import {diagramKind} from '../packages/learning/visual-models.js';
import {grade} from '../packages/learning/engine.js';

test('CN teaches every completed recording with source evidence, beginner foundations and one interactive lab per topic',async()=>{
 assert.equal(lecturePlans.length,46);assert.equal(lessons.length,138);assert.equal(topics.length,46);
 assert.deepEqual(units.map(u=>u.range),[[0,3],[4,15],[16,22],[23,30],[31,40],[41,45]]);
 assert.deepEqual(units.flatMap(u=>Array.from({length:u.range[1]-u.range[0]+1},(_,i)=>u.range[0]+i)),Array.from({length:46},(_,i)=>i));
 const transcriptRoot=path.join(platformRoot,'courses/cn/data/transcripts');
 for(let lecture=0;lecture<46;lecture++){
  const transcript=JSON.parse(await fs.readFile(path.join(transcriptRoot,`${lecture}.json`),'utf8'));
  assert.ok(transcript.sourceCompletedAt&&transcript.segments.length,`transcript ${lecture}`);
  const group=lessons.slice(lecture*3,lecture*3+3);assert.equal(group.length,3);
  for(let stage=0;stage<3;stage++){
   const lesson=group[stage],journey=lessonJourney(lesson,'cn');
   assert.equal(lesson.id,lecture*3+stage);assert.equal(lesson.lecture,lecture);assert.ok(lesson.ready);
   assert.equal(lesson.cnLab.lecture,lecture);assert.ok(lesson.cnScene.length===3);
   assert.equal(diagramKind('cn',lesson),`cn:${lesson.cnLab.kind}`);
   assert.ok(lesson.sourceReferences.length,`source evidence ${lecture}`);
   assert.ok(lesson.sourceReferences.every(r=>Number.isFinite(r.start)&&r.end>r.start&&r.text));
   assert.ok(journey.terms.length>=2&&journey.terms.every(t=>t.meaning.length>30));
   assert.ok(journey.idea.length>60&&journey.example.length>40&&journey.steps.length===3);
   assert.equal(lesson.questions.length,4);
   for(const q of lesson.questions){assert.ok(q.prompt.length>25&&q.explanation.length>20);const answer=q.type==='match'?q.pairs.map((_,i)=>i):q.type==='order'?q.items:q.answer;assert.ok(grade(q,answer),`${lesson.id}: ${q.prompt}`);}
  }
 }
 assert.equal(new Set(topics.map(t=>t.lab)).size,14);
});

test('CN question sets stay distinct across each concept and the two previous stages',()=>{
 for(const lesson of lessons){
  const previous=lessons.filter(other=>other.id<lesson.id&&(other.id>=lesson.id-2||other.lecture===lesson.lecture));
  const seen=new Set(previous.flatMap(other=>other.questions.map(questionIdentity)));
  for(const q of lesson.questions){const id=questionIdentity(q);assert.ok(!seen.has(id),`${lesson.id}: ${q.prompt}`);seen.add(id);}
 }
});
