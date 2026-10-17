import test from 'node:test';
import assert from 'node:assert/strict';
import {lessonJourney,newLearningState,normalizeLearningState} from '../packages/learning/lesson-journey.js';
import {questionIdentity} from '../packages/learning/quiz-identity.js';
import {serializeRound,restoreRound} from '../packages/learning/experience.js';
import {extraQuestions} from '../courses/algo/content/quiz-variants.js';
import {topics} from '../courses/algo/content/topics.js';

test('Every available lesson has beginner bridges, an example and a guided teaching sequence',async()=>{
 let count=0;
 for(const subject of ['coa','dl','c','ds','algo','aptitude','os','dbms','cn']){
  const {lessons}=await import(`../courses/${subject}/content/lessons.js`);
  for(const lesson of lessons){const journey=lessonJourney(lesson,subject);assert.ok(journey.terms.length>=2&&journey.terms.length<=7);assert.ok(journey.idea.length>20);assert.ok(journey.example.length>20);assert.ok(journey.steps.length>=2);for(const term of journey.terms){assert.ok(term.term&&term.meaning.length>30);}assert.doesNotMatch([journey.idea,journey.example,...journey.steps,...journey.terms.map(t=>t.meaning)].join(' '),/\b(as discussed|as we saw|in the lecture|watch the lecture|already know)\b/i);count++;}
 }
 assert.equal(count,1998);
});
test('Quiz identities ignore option rotation, contextual prefixes, field order and match row order',()=>{
 const a={type:'choice',prompt:'What is 2+2?',options:['4','5','6'],answer:0,explanation:'Add.'};
 assert.equal(questionIdentity(a),questionIdentity({...a,prompt:'A catalog routine needs a count. What is 2+2?',options:['5','6','4'],answer:2,explanation:'Another explanation.'}));
 assert.equal(questionIdentity({type:'number',prompt:'Count?',answer:3}),questionIdentity({answer:3,prompt:'Count?',type:'number',unit:'',tolerance:1e-8}));
 const pairs=[['a','b'],['c','d']];assert.equal(questionIdentity({type:'match',prompt:'Pair.',pairs}),questionIdentity({type:'match',prompt:'Pair.',pairs:[...pairs].reverse()}));
});
test('No lesson repeats a quiz item inside itself, its topic or the two preceding lessons',async()=>{
 for(const subject of ['coa','dl','c','ds','algo','aptitude','os','dbms','cn']){const {lessons}=await import(`../courses/${subject}/content/lessons.js`);for(const lesson of lessons){const prior=new Set(lessons.filter(l=>l.id<lesson.id&&(l.id>=lesson.id-2||l.lecture===lesson.lecture)).flatMap(l=>l.questions.map(questionIdentity)));for(const q of lesson.questions){const key=questionIdentity(q);assert.ok(!prior.has(key),`${subject}:${lesson.id}: ${q.prompt}`);prior.add(key);}}}
});
test('Ungraded learning state round-trips without XP, hearts, completion or answer changes',async()=>{
 const {lessons}=await import('../courses/coa/content/lessons.js'),lesson=lessons[0],round={lesson,practice:false,queue:lesson.questions.map((q,i)=>({q,lesson,key:`0:${i}`,first:true})),index:0,total:4,cleared:new Set(),intro:false,feedback:null,value:null,firstCorrect:0,xp:0,hearts:5,combo:0,learning:{...newLearningState(),phase:1,visited:[0,1],explored:true}};
 const restored=restoreRound(serializeRound(round,'coa'),'coa',lessons);assert.equal(restored.learning.phase,1);assert.equal(restored.learning.explored,true);assert.equal(restored.xp,0);assert.equal(restored.hearts,5);assert.equal(restored.cleared.size,0);assert.equal(restored.value,null);
 const old=serializeRound({...round,learning:undefined},'coa');delete old.learning;assert.equal(restoreRound(old,'coa',lessons).learning,null);
 assert.deepEqual(normalizeLearningState({phase:999,card:-1,step:NaN,visited:[-1,2,2,'3'],completed:'yes'}),{phase:2,card:0,step:0,visited:[2],explored:false,trace:0,completed:false});
});
test('New small-input cases agree with independent exhaustive subset, schedule, stair and string solutions',()=>{
 const selected=topics.filter(t=>['knapsack-greedy','subset','interval','stairs-cost','lcs','probability'].includes(t.key));
 for(const topic of selected)for(let seed=0;seed<12;seed++){
  const v=seed+3,questions=extraQuestions(topic,seed);
  if(topic.key==='knapsack-greedy'){const items=[[v+1,2*v+3],[v,2*v],[v,2*v]],values=[];for(let mask=0;mask<8;mask++){let weight=0,value=0;for(let i=0;i<3;i++)if(mask>>i&1){weight+=items[i][0];value+=items[i][1];}if(weight<=2*v)values.push(value);}assert.equal(questions[0].answer,Math.max(...values));}
  if(topic.key==='subset'){const nums=[v,v+1,2*v+1],sums=Array.from({length:8},(_,mask)=>nums.reduce((sum,n,i)=>sum+(mask>>i&1?n:0),0));assert.equal(questions[0].answer,sums.filter(n=>n===2*v+1).length);assert.equal(questions[1].answer,new Set(sums).size);}
  if(topic.key==='interval'){const jobs=[[0,2],[1,5],[2,4],[4,6]],counts=[];for(let mask=0;mask<16;mask++){const chosen=jobs.filter((_,i)=>mask>>i&1).sort((a,b)=>a[0]-b[0]);if(chosen.every((job,i)=>!i||job[0]>=chosen[i-1][1]))counts.push(chosen.length);}assert.equal(questions[0].answer,Math.max(...counts));}
  if(topic.key==='stairs-cost'){const costs=[v,v+3,v+1,v+2],walk=i=>i>=4?0:costs[i]+Math.min(walk(i+1),walk(i+2));assert.equal(questions[0].answer,Math.min(walk(0),walk(1)));}
  if(topic.key==='probability'){const p=(2+seed%7)/10;let total=0;for(let mask=0;mask<8;mask++){let wins=0,probability=1;for(let i=0;i<3;i++){const win=mask>>i&1;wins+=win;probability*=win?p:1-p;}if(wins>=2)total+=probability;}assert.ok(Math.abs(questions[0].answer-total)<1e-10);}
  if(topic.key==='lcs'){const strings=questions[0].prompt.match(/strings ([ABC]+) and ([ABD]+)\./),a=strings[1],b=strings[2],subs=new Set(Array.from({length:2**a.length},(_,mask)=>[...a].filter((_,i)=>mask>>i&1).join('')));let best=0;for(const value of subs){let j=0;for(const c of b)if(c===value[j])j++;if(j===value.length)best=Math.max(best,value.length);}assert.equal(questions[0].answer,best);}
 }
});
