import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {subjects,platformRoot} from '../config/courses.mjs';
import {grade,traceCache} from '../packages/learning/engine.js';
import {checkCodingLab} from '../packages/learning/ds-coding.js';
const types=new Set(['c-program','choice','number','visual-number','match','order','bits','cpu','hex','cache','truth','kmap','mux']);
const metadata=/\b(course|lecture|video|instructor|recording|mentioned|taught)\b/i;
function require(value,message){if(!value)throw new Error(message);}
for(const course of subjects){
 const base=path.join(platformRoot,'courses',course.id);
 const [{units,lecturePlans},{lessons}]=await Promise.all(['curriculum.js','lessons.js'].map(file=>import(pathToFileURL(path.join(base,'content',file)).href)));
 require(Array.isArray(units)&&Array.isArray(lecturePlans)&&Array.isArray(lessons),`${course.id}: invalid content exports`);
 for(const unit of units)if(unit.codingLab){const lab=unit.codingLab;require(lab.optional===true&&lab.unitId===unit.id&&lab.language==='C11'&&Array.isArray(lab.answer)&&Array.isArray(lab.hints)&&lab.hints.length===lab.answer.length&&Array.isArray(lab.tokens)&&lab.answer.every(a=>lab.tokens.includes(a))&&checkCodingLab(lab,lab.answer).correct,`${course.id}: invalid optional coding lab for unit ${unit.id}`);}
 if(course.status==='available'){
  require(units.length&&lecturePlans.length&&lessons.length,`${course.id}: published course has empty content`);
  require(lecturePlans.length===(course.publishedLectureCount??course.lectureCount),`${course.id}: curriculum does not cover the declared published topics`);
  require(lessons.length===lecturePlans.length*3,`${course.id}: expected three stages per recording`);
  const coverage=units.flatMap(unit=>Array.from({length:unit.range[1]-unit.range[0]+1},(_,i)=>unit.range[0]+i));
  require(JSON.stringify(coverage)===JSON.stringify(lecturePlans.map((_,i)=>i)),`${course.id}: unit coverage has gaps or duplicates`);
 }
 for(const [index,lesson] of lessons.entries()){
  require(lesson.id===index&&lesson.lecture===Math.floor(index/3),`${course.id}: unstable lesson identity ${index}`);
  require(lesson.questions.length===4,`${course.id}: lesson ${index} needs four exercises`);
  for(const text of [lesson.title,lesson.concept,...lesson.teachingSteps||[]])require(typeof text==='string'&&text.length&&!metadata.test(text),`${course.id}: lesson ${index} must teach topics directly`);
  for(const question of lesson.questions){
   require(types.has(question.type),`${course.id}: unsupported puzzle ${question.type}`);
   for(const text of [question.prompt,question.explanation,...question.options||[],...question.items||[],...(question.pairs||[]).flat()])require(typeof text==='string'&&text.length&&!metadata.test(text),`${course.id}: invalid or recording-focused exercise in lesson ${index}`);
   const answer=question.type==='match'?question.pairs.map((_,i)=>i):question.type==='order'?question.items:question.type==='cache'?traceCache(question).map(r=>r.hit):question.type==='cpu'?{steps:question.steps.length,accumulator:question.target}:question.type==='bits'?question.opcode:question.answer;
   require(grade(question,answer),`${course.id}: ungradable answer in lesson ${index}`);
  }
  if(course.status==='available'){
   const transcript=JSON.parse(await fs.readFile(path.join(base,'data/transcripts',lesson.lecture+'.json'),'utf8'));
   require(transcript.sourceCompletedAt&&transcript.segments?.length,`${course.id}: lesson ${index} lacks a completed source transcript`);
  }
 }
 console.log(`${course.id}: ${course.status}, ${lecturePlans.length} covered recordings, ${lessons.length} levels validated`);
}
