import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {topics,stages} from './topics.js';
import {units,lecturePlans} from '../content/curriculum.js';

const root=fileURLToPath(new URL('../',import.meta.url));
const transcriptRoot=path.join(root,'data','transcripts');
const text=(value)=>String(value).replace(/\s+/g,' ').trim();
function compute(topic,lecture,stage){
 const step=lecture%3+stage+2;
 if(topic.compute==='fork'){const calls=1+lecture%4+stage;return [`A fork trace has ${calls} independent successful fork calls on every path. How many processes are created in total, including the original?`,2**calls,`${calls} successive forks double the process count at each level: 2^${calls} = ${2**calls}.`,'processes'];}
 if(topic.compute==='schedule'||topic.compute==='quantum'){
  const quantum=2+lecture%3,burst=quantum+step+1;
  return [`A process needs ${burst} CPU units and receives ${quantum} units per round-robin turn. How many CPU units remain after its first turn?`,burst-quantum,`The first turn uses ${quantum} of ${burst} units, leaving ${burst-quantum}.`,'units'];
 }
 if(topic.compute==='priority'){
  const start=3+lecture%4,wait=step,final=Math.max(1,start-wait);
  return [`Smaller numbers mean higher priority. A waiting job moves from priority ${start} up one level per aging interval. What priority does it have after ${wait} intervals?`,final,`Reduce ${start} by ${wait}, stopping at the highest priority value 1: ${final}.`,''];
 }
 if(topic.compute==='race'){
  const workers=2+lecture%3,each=2+stage;
  return [`${workers} workers each perform ${each} successful atomic increments on a shared counter starting at 0. What is the final counter value?`,workers*each,`Atomic increments preserve every update: ${workers} × ${each} = ${workers*each}.`,''];
 }
 if(topic.compute==='semaphore'){
  const permits=3+lecture%4,used=1+stage,remaining=Math.max(0,permits-used);
  return [`A semaphore starts with ${permits} permits and ${used} workers acquire one permit each. How many permits remain?`,remaining,`${permits} − ${used} = ${remaining} permits remain.`,'permits'];
 }
 if(topic.compute==='address'){
  const page=128*(2**(lecture%3)),address=page*(2+stage)+((lecture*7+stage*11)%page),offset=address%page;
  return [`Page size is ${page} bytes. A process accesses virtual byte address ${address}. What is the offset within its page?`,offset,`${address} = ${Math.floor(address/page)} × ${page} + ${offset}; the remainder is the offset.`,'bytes'];
 }
 if(topic.compute==='tlb'){
  const hit=10,miss=110,rate=70+stage*10,eat=(rate*hit+(100-rate)*miss)/100;
  return [`A TLB hit costs ${hit} ns, a miss costs ${miss} ns and the hit rate is ${rate}%. What is the effective access time?`,eat,`${rate}% × ${hit} + ${100-rate}% × ${miss} = ${eat} ns.`,'ns'];
 }
 if(topic.compute==='banker'){
  const need=2+lecture%4,available=need+stage,allocated=1+lecture%3;
  return [`A process needs ${need} more units. After it finishes, it releases its ${allocated} allocated units. ${available} units were available before it ran. How many are available afterward?`,available+allocated,`${available} available + ${allocated} released = ${available+allocated}.`,'units'];
 }
 if(topic.compute==='filesystem'){
  const from=20+lecture*7+stage*3,to=from+step+2;
  return [`A disk head moves from cylinder ${from} to cylinder ${to}. How many cylinders does it travel?`,to-from,`Movement is the absolute difference: ${to} − ${from} = ${to-from}.`,'cylinders'];
 }
 return [`A ${128*(2**(lecture%3))}-byte page contains an address at offset ${offsetFor(lecture,stage)}. How many bytes into the page is the address?`,offsetFor(lecture,stage),`The offset is the byte position within the page: ${offsetFor(lecture,stage)}.`,'bytes'];
}
function offsetFor(lecture,stage){return 8+lecture%23+stage*3;}
function questions(topic,lecture,stage,title){
 const prefix=`${title}: `, [prompt,answer,explanation,unit]=compute(topic,lecture,stage);
 const choice=stage===0
  ?{prompt:prefix+topic.scenario+', '+topic.question,options:[topic.correct,...topic.wrong],answer:0,explanation:`${topic.correct}. ${topic.idea}`}
  :stage===1
   ?{prompt:prefix+`The trace has just completed: ${topic.actions[0]}. Which action should happen next?`,options:[topic.actions[1],topic.actions[0],topic.actions[2]],answer:0,explanation:`${topic.actions[1]}. ${topic.steps[1]}`}
   :{prompt:prefix+`In this new example, what should happen immediately before: ${topic.actions[2]}?`,options:[topic.actions[1],topic.actions[2],topic.actions[0]],answer:0,explanation:`${topic.actions[1]} must happen first. ${topic.steps[1]}`};
 const pairIndexes=stage===0?[0,1]:stage===1?[1,2]:[2,0];
 const actionIndexes=stage===0?[0,1,2]:stage===1?[0,1]:[1,2];
 return [
  {type:'choice',...choice},
  {type:'match',prompt:prefix+'match the two roles used in this part of the example.',pairs:pairIndexes.map(i=>topic.terms[i]),explanation:'Each definition names a distinct role in this operating-system example.'},
  {type:'order',prompt:prefix+(stage===0?'put these events in order.':stage===1?'put the opening events in order.':'put the final handoff in order.'),items:actionIndexes.map(i=>topic.actions[i]),explanation:topic.steps.join(' ')},
  {type:'number',prompt:prefix+prompt,answer,unit,tolerance:1e-8,explanation}
 ];
}
function bestEvidence(transcript,topic){
 const terms=topic.title.toLowerCase().split(/[^a-z0-9]+/).filter(word=>word.length>3&&!['with','from','then','into','when','that','practice','questions'].includes(word));
 const scored=transcript.segments.map(segment=>({segment,score:terms.reduce((sum,word)=>sum+Number(segment.text.toLowerCase().includes(word)),0)})).filter(item=>item.score>0).sort((a,b)=>b.score-a.score||a.segment.start-b.segment.start);
 return scored.slice(0,2).sort((a,b)=>a.segment.start-b.segment.start).map(({segment})=>({time:segment.start,text:text(segment.text).slice(0,360)}));
}
const lessons=[];
for(let lecture=0;lecture<topics.length;lecture++){
 const topic=topics[lecture],transcript=JSON.parse(await fs.readFile(path.join(transcriptRoot,`${lecture}.json`),'utf8'));
 if(!transcript.sourceCompletedAt||!transcript.segments?.length)throw Error(`OS transcript ${lecture} is not complete.`);
 for(let stage=0;stage<3;stage++){
  const id=lecture*3+stage,stageInfo=stages[stage],title=`${topic.title} · ${stageInfo.label}`;
  const explanation=topic.steps[stage];
  lessons.push({id,lecture,title,concept:`${topic.idea} ${explanation}`,teachingSteps:[stageInfo.heading+'. '+topic.steps[0],topic.steps[1],topic.steps[2]],foundation:{title:topic.title,idea:topic.idea,terms:topic.terms.map(([term,meaning])=>`${term}: ${meaning}`),example:topic.example},questions:questions(topic,lecture,stage,title),minutes:4,ready:true,contentVersion:1,contentStatus:'reviewed',osLab:topic.lab,osStage:stage,sourceEvidence:bestEvidence(transcript,topic),start:id});
 }
}
if(lessons.length!==topics.length*3||units.at(-1).range[1]!==topics.length-1)throw Error('OS course coverage is incomplete.');
await fs.writeFile(path.join(root,'content','lessons.js'),`// Generated from reviewed OS topics and completed transcript evidence.\nexport const lessons=${JSON.stringify(lessons,null,2)};\n`);
export async function buildReviewed(){
 const report={reviewedLectures:topics.length,reviewedLevels:lessons.length,questions:lessons.reduce((sum,l)=>sum+l.questions.length,0),evidence:lessons.reduce((sum,l)=>sum+l.sourceEvidence.length,0)};
 console.log(JSON.stringify({subject:'os',...report}));return {lessons,report};
}
