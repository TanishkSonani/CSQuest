const datePattern=/^\d{4}-\d{2}-\d{2}$/;
export function validDay(day){return typeof day==='string'&&datePattern.test(day)&&Number.isFinite(Date.parse(day+'T12:00:00Z'))&&new Date(day+'T12:00:00Z').toISOString().slice(0,10)===day;}
export function cleanDaily(value={},today='9999-12-31'){
 return Object.fromEntries(Object.entries(value||{}).filter(([day,xp])=>validDay(day)&&day<=today&&Number.isFinite(xp)&&xp>0).map(([day,xp])=>[day,Math.min(1e9,Math.floor(xp))]));
}
export function activityStreaks(value,today){
 const daily=cleanDaily(value,today),dates=Object.keys(daily).sort();let best=0,chain=0,previous=0;
 for(const day of dates){const at=Date.parse(day+'T12:00:00Z');chain=at-previous===86400000?chain+1:1;best=Math.max(best,chain);previous=at;}
 let at=Date.parse(today+'T12:00:00Z'),current=0;if(!daily[today])at-=86400000;
 while(daily[new Date(at).toISOString().slice(0,10)]){current++;at-=86400000;}
 return {current,best,studyDays:dates.length};
}
export function monthActivity(value,month,today){
 if(!validDay(today)||!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)||month<'1900-01'||month>today.slice(0,7))throw new Error('Choose a past or current month.');
 const daily=cleanDaily(value,today),first=new Date(month+'-01T12:00:00Z'),count=new Date(Date.UTC(first.getUTCFullYear(),first.getUTCMonth()+1,0)).getUTCDate();
 const days=Array.from({length:count},(_,i)=>{const date=month+'-'+String(i+1).padStart(2,'0');return {date,day:i+1,xp:daily[date]||0,future:date>today};});
 return {month,offset:(first.getUTCDay()+6)%7,days,xp:days.reduce((sum,day)=>sum+day.xp,0),activeDays:days.filter(day=>day.xp>0).length,...activityStreaks(daily,today)};
}
export function shiftMonth(month,offset){const date=new Date(month+'-01T12:00:00Z');date.setUTCMonth(date.getUTCMonth()+offset);return date.toISOString().slice(0,7);}
