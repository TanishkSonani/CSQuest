import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {codingLabs} from '../courses/ds/content/coding-labs.js';
import {units} from '../courses/ds/content/curriculum.js';
import {lessons} from '../courses/ds/content/lessons.js';
import {checkCodingLab,codingProgram,restoreCodingDraft,codingLabCompleted} from '../packages/learning/ds-coding.js';
import {available,normalizeProgress} from '../packages/learning/engine.js';
import {nextUnit,courseCompletion,experience} from '../packages/learning/experience.js';

test('Each DS unit has a standalone optional C lab while regular lesson IDs and gates remain unchanged',()=>{
 assert.equal(codingLabs.length,16);assert.equal(units.length,16);assert.equal(lessons.length,303);
 assert.equal(new Set(codingLabs.map(l=>l.id)).size,16);
 for(const [i,u] of units.entries()){
  const lab=u.codingLab;assert.deepEqual(lab,codingLabs[i]);assert.equal(lab.unitId,u.id);assert.equal(lab.optional,true);assert.equal(lab.language,'C11');assert.ok(lab.template.includes('int main(void)'));assert.ok(lab.examples.length>=3);assert.equal(lab.answer.length,lab.hints.length);
  const slots=[...lab.template.matchAll(/\{\{(\d+)\}\}/g)].map(m=>Number(m[1])).sort((a,b)=>a-b);assert.deepEqual(slots,lab.answer.map((_,i)=>i));
  assert.ok(lab.answer.every(a=>lab.tokens.includes(a)));assert.ok(checkCodingLab(lab,lab.answer).correct);assert.doesNotMatch(codingProgram(lab,lab.answer),/\{\{|\[blank/);
  const completed=Array.from({length:(u.range[1]+1)*3},(_,j)=>j),progress=experience({version:1,xp:20,completed});
  assert.equal(nextUnit(lessons,progress,units),Math.min(i+1,units.length-1));
  if(i<units.length-1)assert.equal(available(completed.length,lessons,progress),true,'An untouched lab cannot gate the next lesson');
  const withLab={...progress,codingLabs:{[lab.id]:{version:1,values:[...lab.answer],completedAt:1}}};assert.deepEqual(courseCompletion(withLab,303),courseCompletion(progress,303));assert.equal(nextUnit(lessons,withLab,units),nextUnit(lessons,progress,units));assert.equal(withLab.xp,progress.xp);
  assert.equal(available(21,lessons,{completed:[],codingLabs:withLab.codingLabs}),false,'A lab also cannot bypass regular prerequisites');
 }
});
test('Guided checks accept lexical whitespace and reject missing, wrong, or operator-changing fragments',()=>{
 for(const lab of codingLabs){
  assert.equal(checkCodingLab(lab,Array(lab.answer.length).fill(null)).correct,false);
  assert.equal(checkCodingLab(lab,[...lab.answer,'extra_statement']).correct,false);
  for(let i=0;i<lab.answer.length;i++){const wrong=[...lab.answer];wrong[i]='wrong_fragment';const result=checkCodingLab(lab,wrong);assert.equal(result.correct,false);assert.equal(result.blanks[i].status,'incorrect');assert.ok(result.blanks[i].hint);}
  assert.equal(checkCodingLab(lab,lab.answer.map(a=>' \n'+a+'\t ')).correct,true);
 }
 const stack=codingLabs[5];const split=[...stack.answer];split[1]='+ +';assert.equal(checkCodingLab(stack,split).correct,false);
});
test('Lab drafts restore safely and preserve account progress without mixing completed lesson identities',()=>{
 const lab=codingLabs[0],draft={version:1,values:['head',null,null],completedAt:null};assert.deepEqual(restoreCodingDraft(lab,draft),draft);
 for(const raw of [{version:2,values:lab.answer},{version:1,values:['bad']},{version:1,values:[{},null,null]},{version:1,values:['x'.repeat(161),null,null]}])assert.deepEqual(restoreCodingDraft(lab,raw).values,[null,null,null]);
 assert.equal(codingLabCompleted(lab,{version:1,values:lab.answer,completedAt:123}),true);assert.equal(codingLabCompleted(lab,{version:1,values:lab.answer,completedAt:'123'}),false);
 const progress={version:1,xp:40,completed:[0,1],codingLabs:{[lab.id]:draft}};assert.deepEqual(normalizeProgress(progress).codingLabs,progress.codingLabs);assert.deepEqual(experience(progress).completed,[0,1]);
});
test('All optional DS C programs pass their supplied examples with GCC at two optimization levels',{skip:process.platform==='win32',timeout:120000},async()=>{
 const folder=await fs.mkdtemp(path.join(os.tmpdir(),'csquest-ds-coding-'));
 try{for(const lab of codingLabs){
  const source=path.join(folder,'lab.c'),binary=path.join(folder,'lab');await fs.writeFile(source,codingProgram(lab,lab.answer));
  for(const optimization of ['-O0','-O2']){
   const compile=spawnSync('gcc',['-std=c11',optimization,'-Wall','-Wextra','-Werror',source,'-o',binary],{encoding:'utf8',timeout:10000});assert.equal(compile.status,0,`${lab.id}: ${compile.stderr}`);
   const run=spawnSync(binary,[],{encoding:'utf8',timeout:2000});assert.equal(run.status,0,`${lab.id}: ${run.stderr}`);assert.equal(run.stdout,lab.expectedOutput,lab.id);
  }
 }}finally{await fs.rm(folder,{recursive:true,force:true});}
});
