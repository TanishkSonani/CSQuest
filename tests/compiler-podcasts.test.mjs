import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {subjects} from '../config/courses.mjs';
import {buildEpisode} from '../scripts/build-podcasts.mjs';
import {units,lecturePlans} from '../courses/cd/content/curriculum.js';
import {lessons} from '../courses/cd/content/lessons.js';

test('Compiler podcasts cover all 52 ready topics in ten ordered two-host section conversations',async()=>{
 const subject=subjects.find(s=>s.id==='cd'),source=JSON.parse(await fs.readFile(new URL('../courses/cd/data/podcasts.json',import.meta.url),'utf8')),plan=JSON.parse(await fs.readFile(new URL('../courses/cd/data/podcast-speech.json',import.meta.url),'utf8'));
 assert.equal(subject.status,'planned','Preparing a podcast must not publish the course');assert.equal(source.episodes.length,10);assert.equal(plan.version,3);assert.equal(plan.episodes.length,10);const covered=[];
 for(const ep of source.episodes){
  assert.equal(ep.speechVersion,3);assert.deepEqual(ep,buildEpisode(subject,units[ep.unit],lecturePlans,lessons));assert.deepEqual(new Set(ep.turns.map(t=>t.speaker)),new Set(['maya','leo']));
  const speech=plan.episodes.find(e=>e.id===ep.id);assert.equal(speech.scriptHash,ep.hash);assert.equal(speech.speechVersion,3);assert.match(speech.digest,/^[a-f0-9]{64}$/);assert.equal(speech.turns.length,ep.turns.length);
  let end=-1;for(const c of ep.chapters){assert.equal(c.startTurn,end+1);assert.ok(c.endTurn>=c.startTurn);end=c.endTurn;if(c.lecture!==undefined)covered.push(c.lecture);}assert.equal(end,ep.turns.length-1);
  for(const [i,t] of ep.turns.entries()){assert.equal(speech.turns[i].text,t.text);assert.equal(speech.turns[i].speaker,t.speaker);assert.ok(speech.turns[i].spoken.length>0);assert.doesNotMatch(speech.turns[i].spoken,/[0-9εφ→^*/=<>]/);assert.doesNotMatch(t.text,/in the lecture|watch the lecture|source gap|source file produced|no speech segments/i);}
  const repeated=new Map();for(const t of ep.turns)if(t.text.length>120)repeated.set(t.text,(repeated.get(t.text)||0)+1);assert.ok([...repeated.values()].every(n=>n<=2));
 }
 assert.deepEqual(covered,Array.from({length:52},(_,i)=>i));
 const binary=plan.episodes.flatMap(ep=>ep.turns).find(t=>t.text.includes('-1011'));assert.match(binary.spoken,/minus one zero one one/);assert.match(plan.episodes.flatMap(ep=>ep.turns).map(t=>t.spoken).join(' '),/magnitude is eleven/);
});
