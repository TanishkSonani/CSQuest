import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {lessons} from '../courses/toc/content/lessons.js';
import {units,lecturePlans} from '../courses/toc/content/curriculum.js';
import {topics} from '../courses/toc/authoring/topics.js';
import {tocScene} from '../packages/learning/toc-models.js';
import {questionIdentity} from '../packages/learning/quiz-identity.js';
import {grade,available,emptyProgress} from '../packages/learning/engine.js';
import {lessonJourney} from '../packages/learning/lesson-journey.js';
import {diagramKind} from '../packages/learning/visual-models.js';

test('TOC publishes every completed source with stable three-stage identities and optional workshops',async()=>{
 assert.equal(topics.length,146);assert.equal(lecturePlans.length,146);assert.equal(lessons.length,438);assert.equal(units.length,19);
 assert.deepEqual(units.flatMap(u=>Array.from({length:u.range[1]-u.range[0]+1},(_,i)=>u.range[0]+i)),Array.from({length:146},(_,i)=>i));
 for(const unit of units){assert.equal(unit.tocLab.optional,true);assert.equal(unit.tocLab.unitId,unit.id);assert.ok(tocScene(unit.tocLab.spec).frames.length>1);}
 for(let id=0;id<146;id++){
  const source=JSON.parse(await fs.readFile(new URL(`../courses/toc/data/transcripts/${id}.json`,import.meta.url),'utf8'));assert.ok(source.sourceCompletedAt&&source.segments.length);
  for(let stage=0;stage<3;stage++){
   const l=lessons[id*3+stage];assert.equal(l.id,id*3+stage);assert.equal(l.lecture,id);assert.equal(l.tocStage,stage);assert.equal(l.ready,true);assert.ok(l.sourceEvidence.length);
   for(const evidence of l.sourceEvidence)assert.ok(source.segments.some(s=>s.start===evidence.time&&s.text.trim().startsWith(evidence.text)));
   assert.ok(lessonJourney(l,'toc').terms.length>=3);assert.match(diagramKind('toc',l),/^toc:/);
   for(const key of ['objective','why','watchFor','experiment'])assert.equal(typeof l.learningNotes[key],'string');
   assert.equal(available(l.id,lessons,emptyProgress()),true,'Ahead-of-progress lessons must remain accessible');
  }
 }
});
test('TOC exercises have unique actual scenarios, mixed answer positions and valid answers',()=>{
 const seen=new Set(),positions=new Map();
 for(const l of lessons){
  assert.equal(l.questions.length,4);
  for(const q of l.questions){
   const key=questionIdentity(q);assert.ok(!seen.has(key),`Repeated assessment: ${q.prompt}`);seen.add(key);
   assert.equal(grade(q,q.answer),true,q.prompt);
   if(q.type==='choice'){
    assert.ok(q.options.length>=2);assert.equal(new Set(q.options).size,q.options.length);
    assert.equal(grade(q,(q.answer+1)%q.options.length),false,q.prompt);
    positions.set(q.answer,(positions.get(q.answer)||0)+1);
   }else assert.ok(Number.isFinite(q.answer));
  }
 }
 assert.equal(seen.size,1752);assert.ok(positions.size>=3);for(const index of [0,1,2])assert.ok(positions.get(index)>50);
});
test('TOC interactive scenes are finite, bounded, topic-specific and safe on default inputs',()=>{
 const kinds=new Set();
 for(const l of lessons){
  kinds.add(l.tocSpec.kind);const scene=tocScene(l.tocSpec);assert.ok(scene.frames.length>1);
  for(const f of scene.frames){assert.ok(f.title&&f.caption);assert.doesNotMatch(JSON.stringify(f),/undefined|NaN|\[object Object\]/);}
 }
 assert.ok(kinds.size>=20);
 assert.match(topics[59].pitfall,/opponent/);assert.match(topics[106].idea,/finite union/);assert.match(topics[137].idea,/not general complement/);
 assert.match(topics[140].pitfall,/Finite binary words are countable/);
});
