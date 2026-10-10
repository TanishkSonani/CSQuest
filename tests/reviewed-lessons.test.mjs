import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {reviewedLessons} from '../courses/dl/content/reviewed-lessons.js';
import {grade} from '../packages/learning/engine.js';
import {authoredLectures} from '../courses/dl/authoring/authored-lectures.mjs';
test('completed recordings have three lecture-specific stages with verbatim timestamp evidence',()=>{
 const coverage=JSON.parse(fs.readFileSync(new URL('../courses/dl/data/lesson-build.json',import.meta.url)));
 assert.ok(coverage.reviewedLectures>=37);
 assert.equal(reviewedLessons.length,coverage.reviewedLectures*3);
 for(const row of coverage.coverage){const transcript=JSON.parse(fs.readFileSync(new URL(`../courses/dl/data/transcripts/${row.lecture}.json`,import.meta.url)));
  assert.ok(transcript.sourceCompletedAt);
  for(const l of reviewedLessons.filter(l=>l.lecture===row.lecture)){
   assert.equal(l.teachingSteps.length,3);assert.equal(l.questions.length,4);assert.equal(l.contentVersion,2);
   assert.ok(l.sourceReferences.length>0);
   for(const r of l.sourceReferences)assert.ok(transcript.segments.some(s=>s.start===r.start&&s.end===r.end&&s.text.trim()===r.text));
  }
 }
});
test('reviewed K-map groups are actual Boolean cubes and stay within one cells',()=>{
 for(const l of reviewedLessons)for(const q of l.questions.filter(q=>q.type==='kmap')){
  assert.equal(new Set(q.answer).size,q.answer.length);assert.ok((q.answer.length&(q.answer.length-1))===0);
  assert.ok(q.answer.every(cell=>q.ones.includes(cell)));
  const varying=[0,1,2,3].filter(bit=>new Set(q.answer.map(x=>(x>>bit)&1)).size===2);
  assert.equal(q.answer.length,2**varying.length,`${l.id}: ${q.prompt}`);
 }
});
test('critical parity, carry and encoding examples agree with independently calculated results',()=>{
 const questions=id=>authoredLectures.get(id).stages.flatMap(s=>s.questions);
 const find=(id,prefix)=>questions(id).find(q=>q.prompt.startsWith(prefix));
 const xnor=(a,b)=>1^(a^b);
 assert.equal(find(20,'(1 XNOR 0)').answer,xnor(xnor(1,0),1));
 assert.equal(find(3,'Binary 1001011000').answer,parseInt('1001011000',2));
 assert.equal(find(24,'Sum bit for 1 + 1 +').answer,(1+1+1)%2);
 assert.equal(find(24,'Carry-out for 1 + 1 +').answer,Math.floor((1+1+1)/2));
 assert.equal(find(28,'Four-bit twos-complement 1001').answer,parseInt('1001',2)-16);
 assert.equal(find(29,'Minimum eight-bit').answer,-(2**7));
 assert.equal(find(19,'Number of self-dual functions on three').answer,2**(2**2));
 assert.equal(find(36,'In a 2421 weighted code, pattern 1011').answer,2+2+1);
});
test('reviewed answers are accepted and one-bit truth-table mistakes are rejected',()=>{
 for(const l of reviewedLessons)for(const q of l.questions){const answer=q.type==='match'?q.pairs.map((_,i)=>i):q.type==='order'?q.items:q.answer;assert.ok(grade(q,answer),`${l.id}: ${q.prompt}`);if(q.type==='truth'){const wrong=[...q.answer];wrong[0]^=1;assert.equal(grade(q,wrong),false);}}
});
