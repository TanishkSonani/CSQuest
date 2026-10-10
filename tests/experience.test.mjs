import test from 'node:test';
import assert from 'node:assert/strict';
import {experience,preferences,practiceEntries,practiceSummary,completeRound,habitSummary,nextUnit,serializeRound,restoreRound} from '../packages/learning/experience.js';
const lessons=Array.from({length:3},(_,id)=>({id,lecture:id,ready:true,questions:[{type:'choice',options:['A','B'],answer:0,prompt:'Choose A'},{type:'number',answer:2,prompt:'One plus one'}]}));
const now=new Date(2026,9,11,12).getTime();
test('existing progress survives migration and preferences reject invalid settings',()=>{
 const p=experience({version:1,xp:75,completed:[0],mastery:{0:75},daily:{'2026-10-10':75}});
 assert.equal(p.xp,75);assert.deepEqual(p.completed,[0]);assert.equal(p.mastery[0],75);assert.deepEqual(p.reviews,{});
 assert.deepEqual(preferences({dailyGoal:999,motion:'flash'}),{dailyGoal:20,motion:'system',onboarded:false});
});
test('targeted practice respects prerequisites and deduplicates overlapping mistakes and reviews',()=>{
 const p=experience({version:1,completed:[0],mastery:{0:50},mistakes:[{key:'0:0',due:now-1,status:'active'},{key:'2:0',due:now-1,status:'active'}],reviews:{'0:0':{due:now-1},'0:1':{due:now-1}}});
 assert.equal(practiceEntries(p,lessons,{mode:'quick',limit:2,now}).length,2);
 assert.deepEqual(practiceEntries(p,lessons,{mode:'scheduled',now}).map(e=>e.key),['0:0','0:1']);
 assert.equal(practiceEntries(p,lessons,{mode:'mistakes',now}).length,1);
 assert.equal(practiceSummary(p,lessons,now).weakLevels,1);
 assert.ok(practiceEntries(p,lessons,{now}).every(e=>e.lesson.id!==2));
 assert.equal(new Set(practiceEntries(p,lessons,{now}).map(e=>e.key)).size,4);
});
test('clean recalls increase spacing while an incorrect first try resets it',()=>{
 const queue=practiceEntries({},lessons,{limit:2,now});const results=Object.fromEntries(queue.map(e=>[e.key,{firstCorrect:true}]));
 const round={queue,total:2,firstCorrect:2,practice:true,hints:1,results};
 let {progress:p,earned}=completeRound({},round,now);
 assert.equal(p.reviews[queue[0].key].due,now+86400000);assert.equal(p.dailyStats['2026-10-11'].questions,2);assert.ok(earned.some(b=>b.id==='perfect'));
 p=completeRound(p,round,now+86400000).progress;assert.equal(p.reviews[queue[0].key].due,now+4*86400000);
 results[queue[0].key].firstCorrect=false;p=completeRound(p,{...round,firstCorrect:1},now+4*86400000).progress;
 assert.equal(p.reviews[queue[0].key].streak,0);assert.equal(p.reviews[queue[0].key].needsWork,true);
});
test('activity combines subjects and handles month boundaries without inventing study days',()=>{
 const h=habitSummary([{version:1,daily:{'2026-09-30':10,'2026-10-01':20}},{version:1,daily:{'2026-10-01':40}}],'2026-10-02');
 assert.equal(h.streak,2);assert.equal(h.todayXP,0);assert.equal(h.week.at(-2).xp,60);assert.equal(h.activeDays,2);
 assert.equal(nextUnit(lessons,{completed:[0,1]},[{id:0,range:[0,0]},{id:1,range:[1,2]}]),1);
});
test('paused rounds recover canonical questions, choices, feedback and retries safely',()=>{
 const queue=[{q:lessons[0].questions[0],lesson:lessons[0],key:'0:0',first:true},{q:lessons[0].questions[1],lesson:lessons[0],key:'0:1',first:true},{q:lessons[0].questions[0],lesson:lessons[0],key:'0:0',first:false}];
 const round={lesson:lessons[0],practice:false,queue,index:0,cleared:new Set(),total:2,firstCorrect:0,xp:0,hearts:4,combo:0,intro:false,feedback:false,value:1};
 const draft=serializeRound(round,'coa',now),restored=restoreRound(draft,'coa',lessons);
 assert.equal(restored.feedback,false);assert.equal(restored.value,1);assert.equal(restored.queue.length,3);assert.equal(restored.queue[0].q,lessons[0].questions[0]);
 assert.equal(restoreRound(draft,'dl',lessons),null);assert.equal(restoreRound({...draft,index:999},'coa',lessons),null);
 assert.equal(restoreRound({...draft,queue:[{...draft.queue[0],signature:'changed'}]},'coa',lessons),null);
});
