import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {topics,sections} from '../courses/cd/authoring/topics.js';
import {lessons} from '../courses/cd/content/lessons.js';
import {units,lecturePlans} from '../courses/cd/content/curriculum.js';
import {compilerScene} from '../packages/learning/compiler-models.js';
import {questionIdentity} from '../packages/learning/quiz-identity.js';
import {grade,available,emptyProgress} from '../packages/learning/engine.js';
import {lessonJourney} from '../packages/learning/lesson-journey.js';
import {diagramKind} from '../packages/learning/visual-models.js';
test('Compiler Design has stable source identities, meaningful sections and separate optional workshops',()=>{
 assert.equal(topics.length,52);assert.equal(lecturePlans.length,52);assert.equal(lessons.length,156);assert.equal(units.length,10);assert.equal(sections.length,10);
 assert.deepEqual(units.flatMap(u=>Array.from({length:u.range[1]-u.range[0]+1},(_,i)=>u.range[0]+i)),Array.from({length:52},(_,i)=>i));
 for(const u of units){assert.equal(u.compilerLab.optional,true);assert.equal(u.compilerLab.unitId,u.id);assert.ok(compilerScene(u.compilerLab.spec).frames.length>1);}
 const identities=new Set(),prompts=new Set();for(const l of lessons){assert.equal(l.id,l.lecture*3+l.compilerStage);assert.equal(l.questions.length,4);assert.match(diagramKind('cd',l),/^cd:/);assert.ok(compilerScene(l.compilerSpec).frames.length>1);assert.ok(lessonJourney(l,'cd').terms.length>=3);if(l.ready)assert.equal(available(l.id,lessons,emptyProgress()),true);
  for(const q of l.questions){const key=questionIdentity(q);assert.ok(!identities.has(key));assert.ok(!prompts.has(q.prompt));identities.add(key);prompts.add(q.prompt);assert.equal(grade(q,q.answer),true);if(q.type==='number')assert.equal(grade(q,q.answer+1),false);else assert.equal(grade(q,(q.answer+1)%q.options.length),false);}
 }
 assert.equal(identities.size,624);
});
test('Ready compiler lessons disclose source evidence or an explicit source skip; draft sources stay unready',async()=>{
 for(const l of lessons){
  if(l.contentStatus==='authored-source-linked'){const source=JSON.parse(await fs.readFile(new URL(`../courses/cd/data/transcripts/${l.lecture}.json`,import.meta.url),'utf8'));assert.equal(l.ready,true);assert.ok(source.sourceCompletedAt);assert.ok(l.sourceEvidence.length);for(const e of l.sourceEvidence)assert.ok(source.segments.some(s=>s.start===e.time&&s.text.trim().startsWith(e.text)));}
  else if(l.contentStatus==='inferred-title-only'){assert.equal(l.lecture,8);assert.equal(l.sourceEvidence.length,0);assert.equal(l.sourceReferences[0].skipped,true);assert.match(l.foundation.idea,/independent practice/);}
  else{assert.equal(l.contentStatus,'draft-awaiting-source');assert.equal(l.ready,false);assert.deepEqual(l.sourceReferences,[]);}
 }
});
