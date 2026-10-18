import fs from 'node:fs/promises';
import path from 'node:path';
import {topics,sections,glossary} from './topics.js';
import {choice,computedQuestion} from './assessments.js';
import {compilerScene,compilerExperiment} from '../../../packages/learning/compiler-models.js';
import {questionIdentity} from '../../../packages/learning/quiz-identity.js';
const base=new URL('../',import.meta.url);
const misconceptions={
 lexer:['Recognizing individual tokens also proves that the full program is syntactically and semantically valid.','Maximal munch chooses the shortest valid token at the current character.','Repeated occurrences of one identifier count as just one token occurrence.'],
 lr:['A parser conflict can safely be resolved by always taking the first listed action.','Every SLR conflict proves that the grammar is ambiguous.','An LR reduction consumes the next input token just like a shift.'],
 liveness:['A value is live only if every possible future path reads it.','An assignment never kills an older value of the destination.','A loop back edge can never change the liveness fixed point.'],
 available:['Availability joins predecessor facts by union, because one computed path is sufficient.','Reassigning an operand never invalidates the expression.','Identical expression spelling proves that a previously computed value can always be reused.'],
 grammar:['Every factored grammar must be LL(1), even if its table has conflicts.','A finite sample of successful parses proves an arbitrary grammar unambiguous.','An empty production can be selected regardless of lookahead and context.'],
 meaning:['A smaller representation is automatically equivalent, regardless of side effects.','The source spelling alone determines dependencies, so grouping and execution paths do not matter.','One successful example proves every rewrite safe for every language and input.']
};
export async function buildReviewed(){
 const inventory=JSON.parse(await fs.readFile(new URL('data/source-analysis/inventory.json',base),'utf8'));
 if(inventory.length!==topics.length)throw Error('Compiler topic/source map is incomplete.');
 const sources=[];
 for(let id=0;id<topics.length;id++){
  const row=inventory[id],stem=row.transcriptStem||path.parse(row.file).name;
  let transcript=null,skip=null;
  try{transcript=JSON.parse(await fs.readFile(new URL(`data/transcripts/${id}.json`,base),'utf8'));}catch(e){if(e.code!=='ENOENT')throw e;}
  try{skip=JSON.parse(await fs.readFile(new URL(`data/source-analysis/transcripts/${stem}.skip`,base),'utf8'));}catch(e){if(e.code!=='ENOENT')throw e;}
  if(transcript&&skip)throw Error(`Source ${id} is both skipped and imported.`);
  sources.push({transcript:transcript?.sourceCompletedAt&&transcript.segments?.length?transcript:null,skip,file:row.file});
 }
 const units=sections.map(([title,from,to,goal],id)=>({id,title,subtitle:goal,goal,range:[from,to],color:['purple','teal','orange','green'][id%4],icon:'code',compilerLab:{optional:true,unitId:id,title:`${title} workshop`,spec:topics[[1,5,10,19,25,34,39,44,46,51][id]].spec}}));
 const lecturePlans=topics.map(t=>[t.title,t.idea,t.example]),lessons=[],seen=new Set();
 for(const [lecture,topic] of topics.entries()){
  const source=sources[lecture],kind=topic.spec.kind,wrong=misconceptions[kind]||misconceptions[['first','follow','ll','lltable','rewrite','direction','partition','dangling','lr2'].includes(kind)?'grammar':'meaning'];
  for(let stage=0;stage<3;stage++){
   const spec={...topic.spec,title:topic.title},steps=[topic.idea,topic.example,topic.pitfall],prompts=[`Which rule explains ${topic.title.toLowerCase()}?`,`In this worked case, which interpretation is justified: ${topic.example}`,`While applying ${topic.title.toLowerCase()}, which warning prevents a wrong conclusion?`],questions=[choice(prompts[stage],steps[stage],wrong,topic.idea+' '+topic.pitfall)];
   for(let slot=0;slot<3;slot++){let q,retry=0;do{q=computedQuestion(topic,lecture,stage,slot,retry++);if(retry>160)throw Error(`Insufficient distinct compiler scenarios for ${lecture}/${stage}/${slot}.`);}while(seen.has(q.prompt));seen.add(q.prompt);questions.push(q);}
   let evidence=[];
   if(source.transcript){const words=topic.title.toLowerCase().split(/\W+/).filter(w=>w.length>4),segments=source.transcript.segments.filter(s=>s.end>s.start&&s.text?.trim());evidence=segments.filter(s=>words.some(w=>s.text.toLowerCase().includes(w))).slice(0,2);if(!evidence.length)evidence=segments.slice(Math.floor(segments.length/3),Math.floor(segments.length/3)+1);}
   const scene=compilerScene(spec);if(scene.frames.length<2)throw Error('A compiler walkthrough must show actual state changes.');
   lessons.push({id:lecture*3+stage,lecture,title:`${topic.title} · ${['Understand the concept','Trace and experiment','Apply and challenge'][stage]}`,concept:steps[stage],teachingSteps:steps,foundation:{title:topic.title,idea:topic.idea,example:topic.example,terms:glossary(spec)},compilerSpec:spec,compilerStage:stage,questions:questions.map(q=>({...q,revision:lecture===8?2:1})),ready:Boolean(source.transcript||source.skip),minutes:5,contentVersion:lecture===8?2:1,contentStatus:source.transcript?'authored-source-linked':source.skip?'inferred-title-only':'draft-awaiting-source',sourceEvidence:evidence.map(s=>({time:s.start,text:s.text.trim().slice(0,360)})),sourceReferences:source.transcript?[{lecture,file:source.file,completedAt:source.transcript.sourceCompletedAt}]:source.skip?[{lecture,file:source.file,skipped:true,reason:source.skip.reason}]:[],start:evidence[0]?.start||0,learningNotes:{version:1,subject:'cd',profile:kind,objective:[`Explain the rule: ${topic.idea}`,`Trace this example: ${topic.example}`,`Check this boundary: ${topic.pitfall}`][stage],why:topic.idea,watchFor:topic.pitfall,experiment:compilerExperiment(spec)?'Predict the next state, change the labeled example, then run it. Compare the result with your prediction. Invalid examples display an error without changing your progress.':'Step through each state, compare its facts with the preceding state, and explain the boundary of this example.'}});
  }
 }
 const identities=lessons.flatMap(l=>l.questions.map(questionIdentity));if(new Set(identities).size!==identities.length)throw Error('Duplicate compiler exercises remain.');
 const report={authoredTopics:topics.length,sections:units.length,lessons:lessons.length,readyLessons:lessons.filter(l=>l.ready).length,completedTranscripts:sources.filter(s=>s.transcript).length,skippedSources:sources.flatMap((s,id)=>s.skip?[{id,file:s.file,reason:s.skip.reason}]:[]),awaitingTranscripts:sources.flatMap((s,id)=>!s.skip&&!s.transcript?[id]:[]),sourceLinked:lessons.filter(l=>l.sourceEvidence.length).length,questions:identities.length,duplicateScenarios:0,models:[...new Set(topics.map(t=>t.spec.kind))],limitations:['Toy lexer and numeric expression language; no arbitrary source execution.','LR(0), SLR(1), canonical LR(1) and LALR(1) constructions are executable; LR(2) is a dedicated witness only.','Direct left-recursion elimination and shared-prefix factoring are restricted transformations, not general ambiguity elimination.','SSA, declaration attributes, liveness and availability have explicitly stated example boundaries.','A skipped no-speech source has independently authored practice, not a claimed reconstruction of its exam wording.']};
 await fs.writeFile(new URL('content/curriculum.js',base),`// Generated by authoring/build-reviewed.mjs.\nexport const units=${JSON.stringify(units,null,2)};\nexport const lecturePlans=${JSON.stringify(lecturePlans,null,2)};\n`);
 await fs.writeFile(new URL('content/lessons.js',base),`// Source-linked compiler lessons; readiness records completed or explicitly skipped sources.\nexport const lessons=${JSON.stringify(lessons,null,2)};\n`);
 await fs.writeFile(new URL('data/teaching-coverage.json',base),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));return {lessons,report};
}
if(process.argv[1]?.replaceAll('\\','/').endsWith('/build-reviewed.mjs'))await buildReviewed();
