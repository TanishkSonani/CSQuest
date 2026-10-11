const number=value=>Number.isFinite(value)?Math.max(0,Math.min(1e9,value)):0;
const parse=value=>{try{return JSON.parse(value)||{};}catch{return {};}};
export function weekBounds(now=Date.now()){
 const start=new Date(now);start.setUTCHours(0,0,0,0);start.setUTCDate(start.getUTCDate()-((start.getUTCDay()+6)%7));
 return {week:start.toISOString().slice(0,10),start:start.toISOString(),end:new Date(start.getTime()+7*86400000).toISOString()};
}
export function learnerMetrics(data,courses,now=Date.now(),{timeZone='UTC'}={}){
 let xp=0,levels=0,totalLevels=0,questions=0,correct=0,seconds=0,rounds=0;const daily={},courseStats=[];
 for(const course of courses.filter(course=>course.status==='available')){
  const progress=parse(data[course.storageKey]),total=course.lectureCount*3;
  const completed=new Set((Array.isArray(progress.completed)?progress.completed:[]).filter(id=>Number.isInteger(id)&&id>=0&&id<total)).size;
  const courseXP=number(progress.xp);xp+=courseXP;levels+=completed;totalLevels+=total;
  for(const [date,value] of Object.entries(progress.daily||{}))if(/^\d{4}-\d{2}-\d{2}$/.test(date))daily[date]=(daily[date]||0)+number(value);
  for(const value of Object.values(progress.dailyStats||{}))if(value&&typeof value==='object'){questions+=number(value.questions);correct+=Math.min(number(value.correct),number(value.questions));seconds+=number(value.studySeconds);rounds+=number(value.rounds);}
  courseStats.push({id:course.id,name:course.shortName,xp:courseXP,completed,total,percent:total?Math.round(completed/total*100):0});
 }
 let bestStreak=0,chain=0,previous;
 for(const date of Object.keys(daily).filter(date=>daily[date]>0).sort()){
  const time=Date.parse(date+'T00:00:00Z');if(!Number.isFinite(time))continue;
  chain=time-previous===86400000?chain+1:1;bestStreak=Math.max(bestStreak,chain);previous=time;
 }
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(now)).map(part=>[part.type,part.value]));
 const today=`${parts.year}-${parts.month}-${parts.day}`;let date=Date.parse(today+'T00:00:00Z'),streak=0;
 if(!(daily[today]>0))date-=86400000;
 while(daily[new Date(date).toISOString().slice(0,10)]>0){streak++;date-=86400000;}
 return {xp,levels,totalLevels,completion:totalLevels?Math.round(levels/totalLevels*100):0,streak,bestStreak,studyDays:Object.values(daily).filter(value=>value>0).length,rounds,accuracy:questions?Math.round(correct/questions*100):null,minutes:Math.floor(seconds/60),courses:courseStats};
}
const eventKey=event=>`${event.at}:${event.lessonId}:${event.practice===true?'practice':'lesson'}`;
// Competition XP starts with new saved rounds, never a registration/backup baseline.
// This is an educational leaderboard built on saved round reports, not an anti-cheat service.
export function freshActivity(before,after,courses,now=Date.now()){
 const events=[];
 for(const course of courses.filter(course=>course.status==='available')){
  const old=parse(before[course.storageKey]),next=parse(after[course.storageKey]);
  let budget=Math.floor(number(next.xp)-number(old.xp));if(budget<=0)continue;
  const seen=new Set((Array.isArray(old.history)?old.history:[]).filter(Boolean).map(eventKey));
  const history=(Array.isArray(next.history)?next.history:[]).filter(Boolean).sort((a,b)=>a.at-b.at);
  for(const event of history){
   const key=eventKey(event);
   if(seen.has(key)||!Number.isInteger(event.at)||event.at<now-86400000||event.at>now+300000||!Number.isInteger(event.lessonId)||event.lessonId<0||event.lessonId>=course.lectureCount*3||!Number.isInteger(event.questions)||event.questions<1||event.questions>16||!Number.isInteger(event.correct)||event.correct<0||event.correct>event.questions||!Number.isInteger(event.xp)||event.xp!==20+event.questions*5+event.correct*5||event.xp>200||event.xp>budget)continue;
   seen.add(key);budget-=event.xp;events.push({courseId:course.id,key,xp:event.xp});
  }
 }
 return events;
}
