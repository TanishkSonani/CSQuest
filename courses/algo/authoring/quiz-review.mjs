import {topics} from '../content/topics.js';
import {questionsFor} from '../content/teaching.js';
import {extraQuestions} from '../content/quiz-variants.js';
import {questionIdentity} from '../../../packages/learning/quiz-identity.js';
import {grade} from '../../../packages/learning/engine.js';

export function reviewAlgorithmQuizzes(lessons){
 const seen=new Set(),usedByTopic=new Map(),report={replacements:[],unresolved:[]};
for(const lesson of lessons){
 const topic=topics[lesson.lecture],used=usedByTopic.get(lesson.lecture)||new Set();usedByTopic.set(lesson.lecture,used);
 const recent=new Set(lessons.filter(l=>l.id<lesson.id&&l.id>=lesson.id-2).flatMap(l=>l.questions.map(questionIdentity)));
 const pool=[];for(let seed=0;seed<48;seed++){for(let stage=0;stage<3;stage++)pool.push(...questionsFor({...topic,id:seed},stage));pool.push(...extraQuestions(topic,seed));}
 const candidates=[...new Map(pool.map(q=>[questionIdentity(q),q])).values()];
 const facts=candidates.filter(q=>['choice','number'].includes(q.type)&&!q.algoGiven&&q.prompt.length<=180&&(q.type!=='choice'||q.options[q.answer].length<=120)&&!/\b(given|shown|above|previous|the example|this (?:graph|array|tree|case))\b/i.test(q.prompt)).slice(0,24);
 for(let a=0;a<facts.length;a++)for(let b=a+1;b<facts.length;b++){
  const pair=[facts[a],facts[b]],answers=pair.map(q=>q.type==='choice'?q.options[q.answer]:String(q.answer)+(q.unit?' '+q.unit:''));
  if(answers[0]===answers[1]||pair[0].prompt===pair[1].prompt)continue;
  candidates.push({type:'match',prompt:'Connect each independent case to its correct result.',pairs:pair.map((q,i)=>[q.prompt,answers[i]]),explanation:pair.map(q=>q.explanation).join(' ')});
 }
 for(let index=0;index<lesson.questions.length;index++){
  const original=lesson.questions[index],key=questionIdentity(original);
  if(used.has(key)||recent.has(key)){
   const available=candidates.filter(q=>!used.has(questionIdentity(q))&&!recent.has(questionIdentity(q))&&!lesson.questions.some((other,i)=>i!==index&&questionIdentity(other)===questionIdentity(q)));
   const fresh=available.filter(q=>!seen.has(questionIdentity(q)));
   const replacement=fresh.find(q=>q.type===original.type)||(['choice','order'].includes(original.type)?fresh.find(q=>q.type==='match'):null)||fresh[0]||available.find(q=>q.type===original.type)||available[0];
   if(!replacement){report.unresolved.push({lesson:lesson.id,index,topic:topic.key});continue;}
   lesson.questions[index]={...structuredClone(replacement),revision:2};lesson.contentVersion=Math.max(2,lesson.contentVersion||1);report.replacements.push({lesson:lesson.id,index,topic:topic.key,from:original.type,to:replacement.type});
  }
  const question=lesson.questions[index],answer=question.type==='order'?question.items:question.type==='match'?question.pairs.map((_,i)=>i):question.answer;
  if(!grade(question,answer))throw Error('Ungradable replacement: '+lesson.id+':'+index);
  used.add(questionIdentity(question));recent.add(questionIdentity(question));seen.add(questionIdentity(question));
 }
 if(lesson.id%3===2){
  const first=lesson.questions[0],context=questionsFor(topic,2)[0].prompt.match(/^.*?[.!](?:\s|$)/)?.[0];
  if(context&&!/service|routine|catalog|scheduler|batch|feed|file|list|contest|dashboard|ranking|location|image|lookup|inventory|sorter|transaction|explorer|report|stream|planner/i.test(first.prompt))first.prompt=context.trim()+' '+first.prompt;
 }
}
 return report;
}
