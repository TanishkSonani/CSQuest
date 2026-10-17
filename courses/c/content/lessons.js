import {topics} from './topics.js';
import {makeProgram} from './programs.js';
export const lessons=topics.flatMap((topic,lecture)=>topic.titles.map((title,part)=>({
 id:lecture*3+part,lecture,title,concept:topic.idea,teachingSteps:topic.steps,
 questions:topic.questions.slice(part*4,part*4+4).map((q,index)=>{
  if(part===2&&index===3)return makeProgram(topic,2+lecture%7);
  if(q.type!=='choice')return q;
  const shift=(lecture+part+index)%q.options.length;
  return {...q,options:[...q.options.slice(shift),...q.options.slice(0,shift)],answer:(q.answer-shift+q.options.length)%q.options.length};
 }),minutes:5,ready:true,contentVersion:1,cLab:topic.lab,
 foundation:{title:topic.label,idea:topic.idea,terms:topic.terms,example:topic.example}
})));

import {attachTeachingNotes} from '../../../packages/learning/instructional-notes.js';
import {teachingNotes} from './teaching-notes.js';
attachTeachingNotes(lessons,teachingNotes,'c');
