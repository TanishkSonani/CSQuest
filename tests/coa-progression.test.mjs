import test from 'node:test';
import assert from 'node:assert/strict';
import {lessons} from '../courses/coa/content/lessons.js';
import {units} from '../courses/coa/content/curriculum.js';
import {available} from '../packages/learning/engine.js';
import {nextUnit,experience} from '../packages/learning/experience.js';

test('COA standalone lessons continue from Unit 1 into Unit 2 without transcripts',()=>{
 const progress=experience({version:1,completed:Array.from({length:15},(_,id)=>id)});
 assert.equal(lessons.length,105);
 assert.ok(lessons.every(lesson=>lesson.ready&&lesson.questions.length===4));
 assert.equal(available(15,lessons,progress),true);
 assert.equal(available(16,lessons,progress),false);
 assert.equal(nextUnit(lessons,progress,units),1);
 assert.equal(lessons.find(lesson=>lesson.ready&&available(lesson.id,lessons,progress)&&!progress.completed.includes(lesson.id)).id,15);
});
