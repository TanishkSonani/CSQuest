export const storageKey='coa-quest-v1';
export const localDate=(date=new Date())=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
export function dayDifference(a,b){const parse=s=>Date.UTC(...s.split('-').map((v,i)=>i===1?Number(v)-1:Number(v)));return Math.round((parse(b)-parse(a))/86400000);}
export function emptyProgress(){return {version:1,xp:0,streak:0,lastStudy:null,completed:[],mastery:{},daily:{},mistakes:[],settings:{sound:true}};}
export function normalizeProgress(p){const base=emptyProgress();if(!p||p.version!==1)return base;return {...base,...p,xp:Math.max(0,Number(p.xp)||0),streak:Math.max(0,Number(p.streak)||0),completed:[...new Set((p.completed||[]).filter(Number.isInteger))],mastery:p.mastery||{},daily:p.daily||{},mistakes:Array.isArray(p.mistakes)?p.mistakes:[],settings:{...base.settings,...p.settings}};}
export function grade(question,value){
  if(question.type==='c-program')return Array.isArray(value)&&value.length===question.answer.length&&value.every((token,i)=>token===question.answer[i]);
  if(question.type==='mux')return Number.isInteger(value)&&value===question.answer;
  if(question.type==='truth')return Array.isArray(value)&&value.length===question.answer.length&&value.every((v,i)=>v===question.answer[i]);
  if(question.type==='kmap')return Array.isArray(value)&&value.length===question.answer.length&&new Set(value).size===value.length&&value.every(v=>question.answer.includes(v));
  if(question.type==='choice')return value===question.answer;
  if(question.type==='number'||question.type==='visual-number')return value!==null&&value!==undefined&&String(value).trim()!==''&&Number.isFinite(Number(value))&&(question.type!=='visual-number'||Number(value)>=question.min&&Number(value)<=question.max)&&Math.abs(Number(value)-question.answer)<=(question.tolerance||0);
  if(question.type==='hex'){const clean=s=>String(s??'').trim().replace(/^0x/i,'').replace(/\s/g,'').toUpperCase();return /^[0-9A-F]+$/.test(clean(value))&&clean(value).replace(/^0+/,'')===clean(question.answer).replace(/^0+/,'');}
  if(question.type==='cache')return Array.isArray(value)&&value.length===question.accesses.length&&value.every((v,i)=>v===traceCache(question)[i].hit);
  if(question.type==='bits')return Number(value)===question.opcode;
  if(question.type==='order')return Array.isArray(value)&&value.length===question.items.length&&value.every((v,i)=>v===question.items[i]);
  if(question.type==='match')return Array.isArray(value)&&value.length===question.pairs.length&&value.every((v,i)=>v===i);
  if(question.type==='cpu')return value?.steps===question.steps.length&&value.accumulator===question.target;
  return false;
}
export function available(id,lessons,progress){return lessons.some(l=>l.id===id&&l.ready);}
export function traceCache(q){const sets=Array.from({length:q.sets},()=>[]);return q.accesses.map(block=>{const index=block%q.sets,set=sets[index],pos=set.indexOf(block),hit=pos>=0;let evicted=null;if(hit&&q.policy==='LRU'){set.splice(pos,1);set.push(block);}else if(!hit){if(set.length===q.ways)evicted=set.shift();set.push(block);}return {block,index,hit,evicted,state:sets.map(s=>[...s])};});}
export function answerLabel(q,value){if(q.type==='c-program')return q.template.replace(/\{\{(\d+)\}\}/g,(_,i)=>value?.[Number(i)]??'[blank]');if(q.type==='mux')return `Select ${Number(value).toString(2).padStart(Math.log2(q.inputs.length),'0')} ? I${value}`;if(q.type==='truth')return (value||[]).map((v,i)=>`${q.rows[i].join('')} → ${v??'?'}`).join('; ');if(q.type==='kmap')return 'Cells '+(value||[]).join(', ');if(q.type==='choice')return q.options[value]??'No answer';if(q.type==='match')return (value||[]).map((v,i)=>`${q.pairs[i][0]} → ${q.pairs[v]?.[1]??'unmatched'}`).join('; ');if(q.type==='order')return (value||[]).join(' → ');if(q.type==='cache')return (value||[]).map(v=>v===true?'HIT':v===false?'MISS':'?').join(' · ');if(q.type==='cpu')return `Accumulator ${value?.accumulator??'?'}, ${value?.steps??0} steps`;return String(value??'No answer');}
export function correctAnswer(q){if(q.type==='match')return answerLabel(q,q.pairs.map((_,i)=>i));if(q.type==='order')return answerLabel(q,q.items);if(q.type==='cache')return answerLabel(q,traceCache(q).map(r=>r.hit));if(q.type==='cpu')return answerLabel(q,{accumulator:q.target,steps:q.steps.length});if(q.type==='bits')return `${q.opcode} operation bits`;return answerLabel(q,q.answer);}
export function recordMistake(p,key,answer,now=Date.now()){let m=p.mistakes.find(m=>m.key===key);if(!m){m={key,firstMissedAt:now,wrongAttempts:0};p.mistakes.push(m);}Object.assign(m,{lastAnswer:answer,lastMissedAt:now,wrongAttempts:(m.wrongAttempts||0)+1,correctStreak:0,status:'needs-review',due:now});return m;}
export function recordReview(p,key,cleanRecall,now=Date.now()){const m=p.mistakes.find(m=>m.key===key);if(!m)return;const streak=(m.correctStreak||0)+(cleanRecall?1:0);Object.assign(m,{correctStreak:streak,lastReviewedAt:now,status:streak>=2?'resolved':'learning',due:now+(streak>=2?7:1)*86400000});}
export function addStudy(progress,xp,today=localDate()){
  const p=normalizeProgress(progress);p.xp+=xp;p.daily[today]=(p.daily[today]||0)+xp;
  if(p.lastStudy!==today){p.streak=p.lastStudy&&dayDifference(p.lastStudy,today)===1?p.streak+1:1;p.lastStudy=today;}
  return p;
}
export function displayedStreak(p,today=localDate()){return p.lastStudy&&dayDifference(p.lastStudy,today)<=1?p.streak:0;}
export function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const timestamp=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
