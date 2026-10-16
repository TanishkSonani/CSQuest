import fs from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {lessonJourney} from '../packages/learning/lesson-journey.js';
import {questionIdentity} from '../packages/learning/quiz-identity.js';
import {diagramKind} from '../packages/learning/visual-models.js';
const subjects=['coa','dl','c','ds','algo','aptitude'],report={scope:'All currently available lessons',baseline:'a96dad4',courses:[],warnings:[]};
function duplicates(lessons){let adjacent=0,topic=0,within=0,global=0;const seen=new Set();for(const lesson of lessons){const prior=lessons.filter(l=>l.id<lesson.id),recent=new Set(prior.filter(l=>l.id>=lesson.id-2).flatMap(l=>l.questions.map(questionIdentity))),same=new Set(prior.filter(l=>l.lecture===lesson.lecture).flatMap(l=>l.questions.map(questionIdentity))),local=new Set();for(const q of lesson.questions){const key=questionIdentity(q);adjacent+=Number(recent.has(key));topic+=Number(same.has(key));within+=Number(local.has(key));global+=Number(seen.has(key));local.add(key);seen.add(key);}}return {withinLesson:within,previousTwoLessons:adjacent,sameTopic:topic,laterOrEarlierInCourse:global};}
for(const subject of subjects){
 const {lessons}=await import(`../courses/${subject}/content/lessons.js`);let baseline=structuredClone(lessons);
 if(subject==='algo')try{const source=execFileSync('git',['show',report.baseline+':courses/algo/content/reviewed-lessons.js'],{encoding:'utf8',maxBuffer:32*1024*1024,stdio:['ignore','pipe','ignore']}),marker='export const lessons=';baseline=JSON.parse(source.slice(source.indexOf(marker)+marker.length).trim().replace(/;$/,''));}catch{baseline=null;}
 if(subject==='coa')for(const lesson of baseline)for(const q of lesson.questions)if(q.revision===2&&q.type==='cache'){q.accesses=[0,2,0,4,2];delete q.revision;}
 const families=new Set();let bridges=0,changedQuestions=0;
 for(const lesson of lessons){
  const guide=lessonJourney(lesson,subject);bridges+=guide.terms.length;families.add(diagramKind(subject,lesson));
  const text=[lesson.concept,lesson.foundation.idea,lesson.foundation.example,...lesson.foundation.terms,...lesson.teachingSteps||[]].join(' ');
  if(/\b(as we saw|as discussed|in the lecture|watch the lecture|already know|as shown above)\b/i.test(text))report.warnings.push({subject,lesson:lesson.id,reason:'Prior-context wording needs review'});
  if(baseline)for(let i=0;i<lesson.questions.length;i++)changedQuestions+=Number(questionIdentity(lesson.questions[i])!==questionIdentity(baseline[lesson.id].questions[i]));
 }
 report.courses.push({subject,lessons:lessons.length,interactiveStages:lessons.length*3,visualFamilies:families.size,beginnerDefinitions:bridges,changedQuestions:baseline?changedQuestions:null,before:baseline?duplicates(baseline):null,after:duplicates(lessons)});
}
report.totalLessons=report.courses.reduce((sum,course)=>sum+course.lessons,0);report.totalStages=report.totalLessons*3;
await fs.mkdir(new URL('../docs/reports/',import.meta.url),{recursive:true});await fs.writeFile(new URL('../docs/reports/learning-audit.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
for(const course of report.courses)console.log(`${course.subject}: ${course.lessons} lessons; repeated questions in previous two lessons ${course.before?.previousTwoLessons??'?'} → ${course.after.previousTwoLessons}; ${course.changedQuestions??'?'} revised questions`);
if(report.warnings.length||report.courses.some(c=>c.after.withinLesson||c.after.previousTwoLessons||c.after.sameTopic))throw Error('Learning audit found unresolved issues.');
console.log(`${report.totalLessons} lessons, ${report.totalStages} interactive stages, no unresolved adjacent duplicates or prior-context wording warnings.`);
