import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {subjects} from '../config/courses.mjs';
import {byteRange} from '../src/platform/podcasts.mjs';
import {createServer} from '../src/platform/server.mjs';
import {testStore} from './database-helper.mjs';
import {buildEpisode} from '../scripts/build-podcasts.mjs';

test('spoken scripts preserve mathematical comparisons instead of mistaking them for HTML',()=>{
 const example='For 2 < 5 and 8 > 3, both comparisons are true.';
 const episode=buildEpisode({id:'c',name:'C Language'},{id:0,title:'Comparison operators',subtitle:'Compare two values',goal:'Evaluate comparisons.',range:[0,0]},[['Comparison operators']], [{id:0,lecture:0,ready:true,questions:[],foundation:{idea:'A comparison produces a truth value.',example}}]);
 assert.ok(episode.turns.some(turn=>turn.text===example));
});

test('section conversations include every published topic, examples, both hosts and ordered transcript chapters',async()=>{
 let episodes=0,topics=0;
 for(const subject of subjects.filter(s=>s.status==='available')){
  const [{units,lecturePlans},{lessons},source]=await Promise.all([import(`../courses/${subject.id}/content/curriculum.js`),import(`../courses/${subject.id}/content/lessons.js`),fs.readFile(new URL(`../courses/${subject.id}/data/podcasts.json`,import.meta.url),'utf8').then(JSON.parse)]);
  assert.equal(source.episodes.length,units.length);
  const covered=[];
  for(const episode of source.episodes){
   const unit=units.find(u=>u.id===episode.unit);assert.equal(episode.title,unit.title);assert.match(episode.hash,/^[a-f0-9]{64}$/);
   assert.deepEqual(new Set(episode.turns.map(t=>t.speaker)),new Set(['maya','leo']));
   assert.equal(episode.chapters[0].title,'Section introduction');assert.equal(episode.chapters.at(-1).title,'Recap and next steps');
   let last=-1;
   for(const chapter of episode.chapters){assert.equal(chapter.startTurn,last+1);assert.ok(chapter.endTurn>=chapter.startTurn);assert.ok(chapter.endTurn<episode.turns.length);last=chapter.endTurn;
    if(chapter.lecture!==undefined){covered.push(chapter.lecture);const plan=lecturePlans[chapter.lecture];assert.ok(chapter.title);assert.equal(chapter.title,Array.isArray(plan)?plan[0]:plan.title);assert.ok(chapter.lecture>=unit.range[0]&&chapter.lecture<=unit.range[1]);assert.ok(episode.turns.slice(chapter.startTurn,chapter.endTurn+1).filter(t=>t.speaker==='maya').some(t=>t.text.length>50));topics++;}
   }
   assert.equal(last,episode.turns.length-1);assert.ok(episode.turns.every(t=>t.text&&t.text!=='undefined'&&!t.text.includes('[object Object]')));episodes++;
  }
  assert.deepEqual(covered,[...new Set(lessons.filter(l=>l.ready).map(l=>l.lecture))]);
 }
 assert.equal(episodes,90);assert.equal(topics,666);
});
test('audio byte ranges support open ends and suffixes without serving invalid or multiple ranges',()=>{
 assert.equal(byteRange(undefined,100),null);assert.deepEqual(byteRange('bytes=0-9',100),{start:0,end:9});assert.deepEqual(byteRange('bytes=95-',100),{start:95,end:99});assert.deepEqual(byteRange('bytes=-12',100),{start:88,end:99});assert.deepEqual(byteRange('bytes=95-999',100),{start:95,end:99});assert.deepEqual(byteRange('bytes=-999',100),{start:0,end:99});
 for(const value of ['bytes=100-','bytes=12-3','bytes=-0','bytes=-','bytes=0-2,4-6','items=0-9','bytes=9007199254740999-'])assert.equal(byteRange(value,100),false,value);
});

test('conversations avoid recurring interview scaffolding and replaying shared foundation paragraphs',async()=>{
 const banned=[/Can we make that concrete with an example\?/i,/What's an easy mistake to avoid\?/i,/What should I understand by the end of this section\?/i,/The focus here is/i,/Discover check for/i,/Watch one example unfold/i,/Use the idea in a new situation/i];
 for(const subject of subjects.filter(s=>s.status==='available')){
  const [{units,lecturePlans},{lessons},source]=await Promise.all([import(`../courses/${subject.id}/content/curriculum.js`),import(`../courses/${subject.id}/content/lessons.js`),fs.readFile(new URL(`../courses/${subject.id}/data/podcasts.json`,import.meta.url),'utf8').then(JSON.parse)]);
  for(const episode of source.episodes){
   assert.deepEqual(episode,buildEpisode(subject,units.find(unit=>unit.id===episode.unit),lecturePlans,lessons),'Authored scripts and generated manifests stay in sync');
   for(const turn of episode.turns)for(const pattern of banned)assert.doesNotMatch(turn.text,pattern,episode.id);
   const body=episode.turns.slice(episode.chapters[1].startTurn,episode.chapters.at(-1).startTurn),counts=new Map();
   for(const turn of body)if(turn.text.length>120)counts.set(turn.text,(counts.get(turn.text)||0)+1);
   for(const [text,count] of counts)assert.ok(count<=2,`${episode.id} repeatedly reads the same passage: ${text}`);
   assert.ok(body.some(turn=>turn.speaker==='leo'&&turn.text.length>20&&!turn.text.endsWith('?')),'Both hosts contribute explanations');
  }
 }
});
test('podcast audio and transcripts require authentication, report readiness honestly and support seeking',async()=>{
 const fixture=await testStore({courses:true}),directory=await fs.mkdtemp(path.join(os.tmpdir(),'csquest-podcast-')),server=createServer({store:fixture.store,podcastDirectory:directory});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 try{
  const episode=(await fixture.store.document('coa','podcasts.json')).episodes[0],folder=path.join(directory,'coa'),stem=path.join(folder,`unit-0-${episode.hash.slice(0,12)}`),audio=Buffer.from(Array.from({length:128},(_,i)=>i));
  await fs.mkdir(folder,{recursive:true});await fs.writeFile(stem+'.mp3',audio);
  const meta={hash:episode.hash,duration:episode.turns.length,turns:episode.turns.map((turn,index)=>({index,speaker:turn.speaker,start:index,end:index+1})),chapters:episode.chapters};await fs.writeFile(stem+'.json',JSON.stringify(meta));
  for(const endpoint of ['/api/podcasts','/api/podcast?subject=coa&unit=0','/api/podcast-audio?subject=coa&unit=0'])assert.equal((await fetch(base+endpoint)).status,401);
  const registration=await fetch(base+'/api/account/register',{method:'POST',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1'},body:JSON.stringify({username:'podcast_test',displayName:'Podcast Learner',avatar:'chip',password:'a memorable test passphrase'})});assert.equal(registration.status,200);
  const headers={cookie:registration.headers.get('set-cookie').split(';')[0]};
  const catalog=await(await fetch(base+'/api/podcasts',{headers})).json();assert.equal(catalog.episodes.length,90);assert.equal(catalog.episodes.filter(e=>e.ready).length,1);assert.ok(!JSON.stringify(catalog).includes('turns'));
  const detail=await(await fetch(base+'/api/podcast?subject=coa&unit=0',{headers})).json();assert.equal(detail.ready,true);assert.equal(detail.turns.length,episode.turns.length);assert.ok(!detail.audioUrl.includes(directory));
  const partial=await fetch(base+detail.audioUrl,{headers:{...headers,Range:'bytes=4-19'}});assert.equal(partial.status,206);assert.equal(partial.headers.get('content-range'),'bytes 4-19/128');assert.equal(partial.headers.get('content-type'),'audio/mpeg');assert.match(partial.headers.get('cache-control'),/private/);assert.deepEqual(Buffer.from(await partial.arrayBuffer()),audio.subarray(4,20));
  const head=await fetch(base+detail.audioUrl,{headers,method:'HEAD'});assert.equal(head.status,200);assert.equal(head.headers.get('content-length'),'128');assert.equal((await head.arrayBuffer()).byteLength,0);
  const changed=await fetch(base+detail.audioUrl,{headers:{...headers,Range:'bytes=4-19','If-Range':'"old-audio"'}});assert.equal(changed.status,200);assert.equal((await changed.arrayBuffer()).byteLength,128);
  assert.equal((await fetch(base+'/api/podcast-audio?subject=coa&unit=0&v=old-version',{headers})).status,404);
  assert.equal((await fetch(base+detail.audioUrl,{headers:{...headers,Range:'bytes=128-'}})).status,416);
  const pending=await(await fetch(base+'/api/podcast?subject=coa&unit=1',{headers})).json();assert.equal(pending.ready,false);assert.equal(pending.audioUrl,null);assert.ok(pending.turns.length>0);assert.equal((await fetch(base+'/api/podcast-audio?subject=coa&unit=1',{headers})).status,404);
  assert.equal((await fetch(base+'/api/podcast?subject=toc&unit=0',{headers})).status,400);assert.equal((await fetch(base+'/api/podcast?subject=coa&unit=9999',{headers})).status,404);assert.equal((await fetch(base+'/api/podcast?subject=..&unit=0',{headers})).status,400);
 }finally{await new Promise(resolve=>server.close(resolve));await fixture.dispose();assert.ok(directory.startsWith(path.join(os.tmpdir(),'csquest-podcast-')));await fs.rm(directory,{recursive:true,force:true});}
});
