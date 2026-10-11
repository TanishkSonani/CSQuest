import {localDate,normalizeProgress,available,shuffle} from './engine.js';

const count=n=>Math.max(0,Math.min(100000,Math.floor(Number(n)||0)));
const datePattern=/^\d{4}-\d{2}-\d{2}$/;
export function preferences(value={}){return {dailyGoal:[10,20,40,60].includes(value?.dailyGoal)?value.dailyGoal:20,motion:['system','reduced'].includes(value?.motion)?value.motion:'system',onboarded:value?.onboarded===true};}
export function experience(value){
 const p=normalizeProgress(value),dailyStats={},reviews={},badges={};
 for(const [date,stats] of Object.entries(p.dailyStats||{}))if(datePattern.test(date)&&stats&&typeof stats==='object')dailyStats[date]=Object.fromEntries(['rounds','questions','correct','practiceRounds','hints','perfectRounds','studySeconds'].map(k=>[k,count(stats[k])]));
 for(const [key,review] of Object.entries(p.reviews||{}))if(/^\d+:\d+$/.test(key)&&review&&Number.isFinite(review.due))reviews[key]={due:review.due,streak:count(review.streak),lastReviewedAt:Number(review.lastReviewedAt)||0,needsWork:review.needsWork===true};
 for(const [key,date] of Object.entries(p.badges||{}))if(BADGES.some(b=>b.id===key)&&datePattern.test(date))badges[key]=date;
 return {...p,dailyStats,reviews,badges};
}
export const BADGES=[
 {id:'first-step',title:'First spark',description:'Complete your first level.',icon:'star',earned:p=>p.completed.length>=1},
 {id:'ten-levels',title:'Building momentum',description:'Complete ten different levels.',icon:'rocket',earned:p=>p.completed.length>=10},
 {id:'fifty-levels',title:'Circuit builder',description:'Complete fifty different levels.',icon:'chip',earned:p=>p.completed.length>=50},
 {id:'steady-three',title:'Three-day rhythm',description:'Study on three consecutive days.',icon:'flame',earned:p=>p.streak>=3},
 {id:'comeback',title:'Comeback kid',description:'Master a saved mistake with two clean recalls.',icon:'target',earned:p=>p.mistakes.some(m=>m.status==='resolved')},
 {id:'perfect',title:'On a roll',description:'Finish a round with every first answer correct.',icon:'trophy',earned:p=>Object.values(p.dailyStats).some(s=>s.perfectRounds>0)||Object.values(p.mastery).some(n=>n===100)}
];
export function completeRound(value,round,now=Date.now()){
 const p=experience(value),today=localDate(new Date(now));
 const prior=p.dailyStats[today]||{rounds:0,questions:0,correct:0,practiceRounds:0,hints:0,perfectRounds:0,studySeconds:0};
 p.dailyStats[today]={rounds:prior.rounds+1,questions:prior.questions+round.total,correct:prior.correct+round.firstCorrect,practiceRounds:prior.practiceRounds+(round.practice?1:0),hints:prior.hints+(round.hints||0),perfectRounds:prior.perfectRounds+(round.firstCorrect===round.total?1:0),studySeconds:(prior.studySeconds||0)+count(round.studySeconds)};
 p.history=[{at:now,lessonId:round.lesson?.id??round.queue[0]?.lesson.id,title:round.practice?'Practice round':round.lesson?.title||'Learning round',practice:round.practice===true,questions:round.total,correct:round.firstCorrect,xp:count(round.xp)+20,studySeconds:count(round.studySeconds)},...(Array.isArray(p.history)?p.history:[])].slice(0,500);
 const unique=new Map(round.queue.map(entry=>[entry.key,entry]));
 for(const [key] of unique){
  const previous=p.reviews[key],clean=round.results?.[key]?.firstCorrect===true;
  const streak=clean?(previous?.streak||0)+1:0;
  const days=[1,3,7,14,30][Math.min(4,Math.max(0,streak-1))];
  p.reviews[key]={due:now+days*86400000,streak,lastReviewedAt:now,needsWork:!clean};
 }
 const earned=[];
 for(const badge of BADGES)if(!p.badges[badge.id]&&badge.earned(p)){p.badges[badge.id]=today;earned.push(badge);}
 return {progress:p,earned};
}
export function nextUnit(lessons,progress,units){
 const lesson=lessons.find(l=>l.ready&&available(l.id,lessons,progress)&&!progress.completed.includes(l.id))||lessons.filter(l=>l.ready).at(-1);
 return units.find(u=>lesson&&lesson.lecture>=u.range[0]&&lesson.lecture<=u.range[1])?.id??0;
}
export function courseCompletion(progress,total){
 const completed=new Set((progress?.completed||[]).filter(id=>Number.isInteger(id)&&id>=0&&id<total)).size;
 return {completed,total,percent:total?Math.round(completed/total*1000)/10:0};
}
function practicePool(value,lessons){
 const p=experience(value),frontier=lessons.find(l=>l.ready&&available(l.id,lessons,p)&&!p.completed.includes(l.id));
 return lessons.filter(l=>l.ready&&(p.completed.includes(l.id)||l.id===frontier?.id)).flatMap(l=>l.questions.map((q,i)=>({q,lesson:l,key:`${l.id}:${i}`,first:true})));
}
export function practiceSummary(value,lessons,now=Date.now()){
 const p=experience(value),pool=practicePool(p,lessons),keys=new Set(pool.map(e=>e.key));
 return {mistakes:p.mistakes.filter(m=>keys.has(m.key)&&m.status!=='resolved').length,dueMistakes:p.mistakes.filter(m=>keys.has(m.key)&&m.status!=='resolved'&&m.due<=now).length,dueReviews:Object.entries(p.reviews).filter(([key,r])=>keys.has(key)&&r.due<=now).length,weakLevels:lessons.filter(l=>l.ready&&p.completed.includes(l.id)&&(p.mastery[l.id]??100)<80).length};
}
export function practiceEntries(value,lessons,{mode='recommended',limit=4,now=Date.now(),keys=null}={}){
 const p=experience(value),pool=practicePool(p,lessons),byKey=new Map(pool.map(e=>[e.key,e]));
 const mistakes=p.mistakes.filter(m=>m.status!=='resolved').sort((a,b)=>(a.due||0)-(b.due||0));
 let entries=[];
 if(keys)entries=keys.map(key=>byKey.get(key)).filter(Boolean);
 else if(mode==='mistakes')entries=mistakes.map(m=>byKey.get(m.key)).filter(Boolean);
 else if(mode==='scheduled')entries=Object.entries(p.reviews).filter(([,r])=>r.due<=now).sort((a,b)=>a[1].due-b[1].due).map(([key])=>byKey.get(key)).filter(Boolean);
 else if(mode==='weak')entries=pool.filter(e=>p.completed.includes(e.lesson.id)&&(p.mastery[e.lesson.id]??100)<80).sort((a,b)=>(p.mastery[a.lesson.id]??100)-(p.mastery[b.lesson.id]??100));
 else{
  entries=mistakes.filter(m=>m.due<=now).map(m=>byKey.get(m.key)).filter(Boolean);
  entries.push(...Object.entries(p.reviews).filter(([,r])=>r.due<=now).sort((a,b)=>a[1].due-b[1].due).map(([key])=>byKey.get(key)).filter(Boolean));
  entries.push(...shuffle(pool));
 }
 // Spread focused rounds over concepts rather than repeating the same question.
 return [...new Map(entries.map(e=>[e.key,e])).values()].slice(0,limit);
}
export function habitSummary(values,today=localDate()){
 const daily={},stats={};
 for(const value of values){const p=experience(value);for(const [date,xp] of Object.entries(p.daily||{}))if(datePattern.test(date))daily[date]=(daily[date]||0)+count(xp);for(const [date,s] of Object.entries(p.dailyStats)){
  stats[date]??={rounds:0,questions:0,correct:0,practiceRounds:0};for(const key of Object.keys(stats[date]))stats[date][key]+=s[key]||0;
 }}
 const shift=(date,days)=>{const [y,m,d]=date.split('-').map(Number);return localDate(new Date(y,m-1,d+days,12));};
 const week=Array.from({length:7},(_,i)=>{const date=shift(today,i-6);return {date,xp:daily[date]||0,active:(daily[date]||0)>0};});
 let date=(daily[today]||0)>0?today:shift(today,-1),streak=0;
 while((daily[date]||0)>0){streak++;date=shift(date,-1);}
 return {todayXP:daily[today]||0,today:stats[today]||{rounds:0,questions:0,correct:0,practiceRounds:0},week,streak,activeDays:week.filter(d=>d.active).length};
}
export function serializeRound(round,subjectId,now=Date.now()){
 if(!round||round.finished)return null;
 return {version:1,subjectId,id:round.practice?'practice':`lesson:${round.lesson.id}`,savedAt:now,lessonId:round.lesson.id,practice:round.practice,mode:round.mode||'recommended',studySeconds:count(round.studySeconds),queue:round.queue.map(e=>({lessonId:e.lesson.id,questionIndex:Number(e.key.split(':')[1]),signature:JSON.stringify(e.q),first:e.first})),index:round.index,cleared:[...round.cleared],total:round.total,firstCorrect:round.firstCorrect,xp:round.xp,hearts:round.hearts,combo:round.combo,intro:round.intro,feedback:round.feedback,value:round.value,matchLeft:round.matchLeft??null,rightOrder:round.rightOrder??null,orderPool:round.orderPool??null,coachRevealed:round.coachRevealed===true,showHint:round.showHint===true,hints:round.hints||0,results:round.results||{}};
}
export function restoreRound(draft,subjectId,lessons){
 try{
  if(draft?.version!==1||draft.subjectId!==subjectId||!Array.isArray(draft.queue)||!draft.queue.length||draft.queue.length>512||typeof draft.practice!=='boolean'||typeof draft.intro!=='boolean'||!Number.isFinite(draft.savedAt)||draft.id!==(draft.practice?'practice':`lesson:${draft.lessonId}`))return null;
  const queue=draft.queue.map(e=>{const lesson=lessons.find(l=>l.id===e.lessonId&&l.ready),q=lesson?.questions[e.questionIndex];if(!q||JSON.stringify(q)!==e.signature||typeof e.first!=='boolean')throw new Error('Changed questions');return {q,lesson,key:`${lesson.id}:${e.questionIndex}`,first:e.first};});
  const lesson=lessons.find(l=>l.id===draft.lessonId&&l.ready),keys=new Set(queue.map(e=>e.key));
  if(!lesson||!Number.isInteger(draft.index)||draft.index<0||draft.index>=queue.length||!Number.isInteger(draft.total)||draft.total!==keys.size||!Array.isArray(draft.cleared)||draft.cleared.some(k=>!keys.has(k))||![null,true,false].includes(draft.feedback))return null;
  for(const key of ['xp','firstCorrect','hearts','combo','hints'])if(!Number.isInteger(draft[key])||draft[key]<0)return null;
  if(draft.firstCorrect>draft.total||draft.hearts>5||draft.xp>draft.total*10)return null;
  const q=queue[draft.index].q,v=draft.value;
  if(v===undefined)return null;
  if(!draft.intro&&v!==null){
   if(q.type==='choice'&&(!Number.isInteger(v)||v<0||v>=q.options.length))return null;
   if(q.type==='mux'&&(!Number.isInteger(v)||v<0||v>=q.inputs.length))return null;
   if(q.type==='bits'&&(!Number.isInteger(v)||v<0||v>q.total))return null;
   if(['number','visual-number','hex'].includes(q.type)&&typeof v!=='string'&&typeof v!=='number')return null;
   if(['truth','match','cache','order','kmap'].includes(q.type)&&!Array.isArray(v))return null;
   if(q.type==='match'&&(v.length!==q.pairs.length||v.some(n=>n!==null&&(!Number.isInteger(n)||n<0||n>=q.pairs.length))))return null;
   if(q.type==='truth'&&(v.length!==q.answer.length||v.some(n=>n!==null&&n!==0&&n!==1)))return null;
   if(q.type==='cache'&&(v.length!==q.accesses.length||v.some(n=>n!==null&&typeof n!=='boolean')))return null;
   if(q.type==='order'&&(v.some(item=>!q.items.includes(item))||new Set(v).size!==v.length))return null;
   if(q.type==='cpu'&&(!v||typeof v!=='object'||!Number.isInteger(v.steps)||v.steps<0||v.steps>q.steps.length||!Number.isFinite(v.accumulator)))return null;
  }
  if(draft.rightOrder!==null&&(!Array.isArray(draft.rightOrder)||q.type!=='match'||draft.rightOrder.length!==q.pairs.length||new Set(draft.rightOrder).size!==q.pairs.length||draft.rightOrder.some(n=>!Number.isInteger(n)||n<0||n>=q.pairs.length)))return null;
  if(draft.orderPool!==null&&(!Array.isArray(draft.orderPool)||q.type!=='order'||draft.orderPool.length!==q.items.length||new Set(draft.orderPool).size!==q.items.length||draft.orderPool.some(item=>!q.items.includes(item))))return null;
  return {...draft,lesson,queue,cleared:new Set(draft.cleared),results:draft.results&&typeof draft.results==='object'?draft.results:{},intro:draft.intro===true,value:v,studySeconds:count(draft.studySeconds)};
 }catch{return null;}
}
