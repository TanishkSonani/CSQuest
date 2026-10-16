import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {platformRoot} from '../config/courses.mjs';
import {lessons} from '../courses/os/content/lessons.js';
import {topics} from '../courses/os/authoring/topics.js';
import {lessonJourney} from '../packages/learning/lesson-journey.js';
import {questionIdentity} from '../packages/learning/quiz-identity.js';

test('OS lessons cover every completed recording with a beginner explanation and timestamped transcript evidence',async()=>{
 assert.equal(topics.length,39);assert.equal(lessons.length,117);
 for(let i=0;i<39;i++){
  const transcript=JSON.parse(await fs.readFile(path.join(platformRoot,'courses/os/data/transcripts',`${i}.json`),'utf8'));
  assert.ok(transcript.sourceCompletedAt&&transcript.segments.length,`completed transcript ${i}`);
  for(let stage=0;stage<3;stage++){
   const lesson=lessons[i*3+stage],journey=lessonJourney(lesson,'os');
   assert.equal(lesson.lecture,i);assert.ok(lesson.sourceEvidence.length,`source evidence ${lesson.id}`);assert.ok(lesson.osLab);
   assert.ok(journey.idea.length>60&&journey.example.length>35&&journey.terms.length>=2&&journey.steps.length===3);
   assert.equal(lesson.questions.length,4);assert.ok(lesson.questions.every(q=>q.prompt.length>25&&q.explanation.length>20));
  }
 }
});

test('OS quiz questions do not repeat within a level, topic or the previous two levels',()=>{
 for(const lesson of lessons){
  const previous=lessons.filter(other=>other.id<lesson.id&&(other.id>=lesson.id-2||other.lecture===lesson.lecture));
  const seen=new Set(previous.flatMap(other=>other.questions.map(questionIdentity)));
  for(const question of lesson.questions){const identity=questionIdentity(question);assert.ok(!seen.has(identity),`${lesson.id}: ${question.prompt}`);seen.add(identity);}
 }
});

test('OS lessons use a range of subject-specific process, scheduling, memory and storage models',()=>{
 const kinds=new Set(lessons.map(lesson=>lesson.osLab));
 for(const kind of ['startup','fork','syscall','threads','states','schedule','ipc','race','critical','peterson','atomic','semaphore','producer-consumer','deadlock','banker','paging','multilevel-paging','replacement','tlb','filesystem'])assert.ok(kinds.has(kind),kind);
});
