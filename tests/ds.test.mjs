import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {lessons} from '../courses/ds/content/lessons.js';
import {units,lecturePlans} from '../courses/ds/content/curriculum.js';
import {grade} from '../packages/learning/engine.js';
import {dsKinds,dsModel,validStackPermutation} from '../packages/learning/ds-models.js';
import {subjects} from '../config/courses.mjs';
import {learnerMetrics,freshActivity} from '../src/platform/social-metrics.mjs';

test('DS publishes 101 reviewed topics with 303 source-backed lessons and 1212 puzzles',()=>{
 const course=subjects.find(s=>s.id==='ds');assert.equal(course.lectureCount,101);assert.equal(course.publishedLectureCount,101);assert.equal(course.status,'available');assert.equal(lessons.length,303);assert.equal(lecturePlans.length,101);assert.equal(new Set(lessons.map(l=>l.dsLab)).size,88);
 assert.deepEqual(units.flatMap(u=>Array.from({length:u.range[1]-u.range[0]+1},(_,i)=>u.range[0]+i)),Array.from({length:101},(_,i)=>i));
 for(const [i,l] of lessons.entries()){
  assert.equal(l.id,i);assert.equal(l.lecture,Math.floor(i/3));assert.equal(l.questions.length,4);assert.equal(l.ready,true);assert.ok(l.foundation.idea.length>100);assert.equal(l.teachingSteps.length,3);assert.ok(dsKinds.includes(l.dsLab));
  const transcript=JSON.parse(fs.readFileSync(new URL(`../courses/ds/data/transcripts/${l.lecture}.json`,import.meta.url)));assert.ok(transcript.sourceCompletedAt);assert.ok(l.sourceReferences.length);
  for(const ref of l.sourceReferences)assert.ok(transcript.segments.some(s=>s.start===ref.start&&s.end===ref.end&&s.text.trim()===ref.text));
  for(const q of l.questions){const answer=q.type==='match'?q.pairs.map((_,i)=>i):q.type==='order'?q.items:q.answer;assert.equal(grade(q,answer),true,`${i}: ${q.prompt}`);if(q.type==='number')assert.equal(grade(q,q.answer+1),false);assert.doesNotMatch(q.prompt,/\b(lecture|instructor|recording|mentioned|video)\b/i);}
 }
});
test('DS animated states preserve node identity, suffixes, removal contracts and endpoints',()=>{
 for(let n=3;n<=6;n++){
  const final=k=>dsModel(k,n).steps.at(-1).art.rows[0].values;
  assert.deepEqual(final('reverse').map(x=>x.id),Array.from({length:n},(_,i)=>'N'+(n-1-i)));
  assert.deepEqual(final('reverse-recursive').map(x=>x.id),final('reverse').map(x=>x.id));
  assert.equal(final('insert').length,n+1);assert.equal(final('insert')[1].value,8);assert.equal(final('insert')[2].id,'N1');
  assert.equal(final('delete').length,n-1);assert.equal(final('delete')[1].id,'N2');
  assert.equal(final('append').at(-1).value,99);assert.equal(final('append')[0].id,'N0');assert.equal(final('return-tail').length,1);
  const paired=final('pairs');assert.equal(paired[0].value,6);assert.equal(paired[1].value,3);assert.deepEqual(paired.map(x=>x.id),Array.from({length:n},(_,i)=>'N'+i));if(n%2)assert.equal(paired.at(-1).value,3*n);
  const circular=dsModel('circular',n).steps.at(-1).art.rows[0];assert.equal(circular.end,'N0');assert.equal(circular.circular,true);
 }
 assert.deepEqual(dsModel('remove-first').steps.at(-1).art.rows[0].values.map(x=>x.value),[3,2,6,2]);assert.deepEqual(dsModel('remove-all').steps.at(-1).art.rows[0].values.map(x=>x.value),[3,6]);
});
test('DS growth plots, loop counts, search and endpoint models agree with independent rules',()=>{
 for(const kind of dsKinds)for(let n=3;n<=6;n++){const model=dsModel(kind,n);assert.ok(model.steps.length);for(const step of model.steps){assert.ok(step.title&&step.caption);assert.doesNotMatch(JSON.stringify(step),/NaN|undefined/);}}
 for(const kind of ['bounds','theta']){const series=dsModel(kind).steps[0].art.series;for(let i=0;i<16;i++)assert.ok(series[0].points[i].y<=series[1].points[i].y&&series[1].points[i].y<=series[2].points[i].y);}
 assert.equal(dsModel('loops',4).steps.length,5);assert.match(dsModel('loops',4).steps.at(-1).caption,/exactly 4 visits/);
 assert.match(dsModel('nested',5).steps.at(-1).caption,/final count is 15/);
 assert.equal(dsModel('search',5,0).steps.length,2);assert.equal(dsModel('search',5,5).steps.length,6);
 assert.match(dsModel('stack',4).steps.at(-1).caption,/4, 3, 2, 1/);assert.match(dsModel('queue',4).steps.at(-1).caption,/1, 2, 3, 4/);
 assert.match(dsModel('stack-array',4).steps.at(-1).caption,/top index=-1/);
 for(const output of [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1]])assert.equal(validStackPermutation([1,2,3],output),true);assert.equal(validStackPermutation([1,2,3],[3,1,2]),false);assert.equal(validStackPermutation([1,2,3],[1,1,3]),false);
});
test('Full DS publication limits completion and round identities to valid lesson IDs',()=>{
 const courses=[subjects.find(s=>s.id==='ds')];const data={'ds-quest-v1':JSON.stringify({version:1,xp:10,completed:[0,302,303,999]})};const metrics=learnerMetrics(data,courses);assert.equal(metrics.courses[0].total,303);assert.equal(metrics.courses[0].completed,2);
 const now=Date.now(),progress={version:1,xp:60,history:[{at:now,lessonId:303,questions:4,correct:4,xp:60,practice:false}]};assert.equal(freshActivity({}, {'ds-quest-v1':JSON.stringify(progress)},courses,now).length,0);
});
