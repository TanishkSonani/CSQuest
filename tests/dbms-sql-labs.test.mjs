import test from 'node:test';
import assert from 'node:assert/strict';
import {units} from '../courses/dbms/content/curriculum.js';
import {lessons} from '../courses/dbms/content/lessons.js';
import {checkCodingLab,codingProgram,restoreCodingDraft,codingLabCompleted} from '../packages/learning/ds-coding.js';
import {available,normalizeProgress} from '../packages/learning/engine.js';
import {courseCompletion,nextUnit,experience} from '../packages/learning/experience.js';

test('Every DBMS unit ends with a distinct, optional guided SQL lab',()=>{
 assert.equal(units.length,10);
 assert.equal(new Set(units.map(u=>u.sqlLab?.id)).size,units.length);
 for(const [i,unit] of units.entries()){
  const lab=unit.sqlLab;
  assert.ok(lab,`Unit ${i} needs an SQL lab`);
  assert.equal(lab.unitId,i);assert.equal(lab.optional,true);assert.equal(lab.language,'SQL');
  assert.ok(lab.prompt.length>40);assert.ok(lab.examples.length>0);assert.equal(lab.answer.length,lab.hints.length);
  const slots=[...lab.template.matchAll(/\{\{(\d+)\}\}/g)].map(m=>Number(m[1])).sort((a,b)=>a-b);
  assert.deepEqual(slots,[...lab.answer.keys()]);
  assert.ok(lab.answer.every(token=>lab.tokens.includes(token)));
  assert.equal(checkCodingLab(lab,lab.answer).correct,true);
  assert.doesNotMatch(codingProgram(lab,lab.answer),/\{\{|\[blank/);
  assert.equal(checkCodingLab(lab,lab.answer.map(token=>/^['"]/.test(token)?token:token.toUpperCase())).correct,true,'SQL keywords and identifiers are case-insensitive while literal values stay exact');
  const wrong=[...lab.answer];wrong[0]='not_the_answer';assert.equal(checkCodingLab(lab,wrong).correct,false);
  const completed=Array.from({length:(unit.range[1]+1)*3},(_,id)=>id),progress=experience({version:1,xp:30,completed});
  assert.equal(nextUnit(lessons,progress,units),Math.min(i+1,units.length-1));
  if(i<units.length-1)assert.equal(available(completed.length,lessons,progress),true,'The optional SQL lab cannot gate the next lesson');
  const withLab={...progress,codingLabs:{[lab.id]:{version:1,values:[...lab.answer],completedAt:1}}};
  assert.deepEqual(courseCompletion(withLab,lessons.length),courseCompletion(progress,lessons.length));
  assert.equal(nextUnit(lessons,withLab,units),nextUnit(lessons,progress,units));assert.equal(withLab.xp,progress.xp);
  assert.equal(available(21,lessons,{completed:[],codingLabs:withLab.codingLabs}),false,'A lab cannot bypass lesson prerequisites');
 }
});

test('SQL lab drafts restore safely and completion remains separate from lesson progress',()=>{
 const lab=units[0].sqlLab,draft={version:1,values:['student_id',null,null,null,null,null],completedAt:null};
 assert.deepEqual(restoreCodingDraft(lab,draft),draft);
 assert.deepEqual(restoreCodingDraft(lab,{version:2,values:lab.answer}).values,Array(lab.answer.length).fill(null));
 assert.equal(codingLabCompleted(lab,{version:1,values:lab.answer,completedAt:123}),true);
 const progress={version:1,xp:40,completed:[0,1],codingLabs:{[lab.id]:draft}};
 assert.deepEqual(normalizeProgress(progress).codingLabs,progress.codingLabs);
 assert.deepEqual(experience(progress).completed,[0,1]);
});
