import {topics} from './topics.js';
const visualQuestions={
 1:{3:['grid',0,100,1]},2:{0:['bar',0,600,20]},4:{0:['grid',0,100,1]},
 5:{0:['line',0,40,1]},6:{6:['bar',0,4,1]},7:{2:['bar',0,4,1]},
 10:{0:['line',0,10,1],4:['line',-5,8,1]},11:{0:['line',-4,5,1],4:['line',-4,2,1]}
};
export const lessons=topics.flatMap((topic,lecture)=>topic.titles.map((title,part)=>({
 id:lecture*3+part,lecture,title,concept:topic.idea,teachingSteps:topic.steps,
 questions:topic.questions.slice(part*4,part*4+4).map((q,index)=>{
  const visual=visualQuestions[lecture]?.[part*4+index];
  if(visual){const [kind,min,max,step]=visual;return {...q,type:'visual-number',visual:kind,min,max,step};}
  if(q.type!=='choice')return q;
  const shift=(lecture+part+index)%q.options.length;
  return {...q,options:[...q.options.slice(shift),...q.options.slice(0,shift)],answer:(q.answer-shift+q.options.length)%q.options.length};
 }),minutes:4,ready:true,contentVersion:1,contentStatus:'Standalone topic lesson with original scenarios',lab:topic.lab,
 foundation:{title:topic.label,idea:topic.idea,terms:topic.terms,example:topic.example}
})));

import {attachTeachingNotes} from '../../../packages/learning/instructional-notes.js';
import {teachingNotes} from './teaching-notes.js';
attachTeachingNotes(lessons,teachingNotes,'aptitude');
