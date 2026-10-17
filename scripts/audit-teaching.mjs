import fs from 'node:fs/promises';
import {subjects} from '../config/courses.mjs';
import {diagramKind} from '../packages/learning/visual-models.js';

let browser={};try{browser=JSON.parse(await fs.readFile('qa-results/teaching-after/model-coverage.json','utf8'));}catch{}
const courses=[];
for(const subject of subjects){
 const {lessons}=await import(`../courses/${subject.id}/content/lessons.js`);
 const {units,lecturePlans}=await import(`../courses/${subject.id}/content/curriculum.js`);
 const source=JSON.parse(await fs.readFile(`courses/${subject.id}/data/source-files.json`,'utf8'));
 const coverage=new Map((browser[subject.id]||[]).map(row=>[row.id,row]));
 const rows=lessons.map(lesson=>({id:lesson.id,title:lesson.title,topic:lesson.lecture,unit:units.find(u=>lesson.lecture>=u.range[0]&&lesson.lecture<=u.range[1])?.title,
  model:diagramKind(subject.id,lesson),teachingProfile:lesson.learningNotes?.profile,
  inspected:true,
  implemented:Boolean(lesson.learningNotes),modelBrowserVerified:coverage.get(lesson.id)?.modelVerified===true,
  firstLastStateLayoutVerified:coverage.get(lesson.id)?.firstAndLastStateLayoutVerified===true,
  journeyBrowserVerified:coverage.get(lesson.id)?.journeyVerified===true,
  individualEditorialReview:false}));
 courses.push({id:subject.id,name:subject.name,status:subject.status,topics:lecturePlans.length,publishedLessons:lessons.length,
  implementation:lessons.length?'Prediction introduction, authored guidance, state walkthrough, existing topic lab and misconception notes':'Working concept preview; full course remains unpublished',
  syllabus:units.map(u=>({title:u.title,topicRange:u.range,goal:u.goal})),lessons:rows,
  recordings:source.files.map((entry,i)=>({topic:i,source:entry.file,lessons:lessons.filter(l=>l.lecture===i).map(l=>l.id),status:lessons.some(l=>l.lecture===i)?'published':'unpublished; lesson authoring and source review outstanding'}))});
}
const report={scope:'All 11 courses. inspected means the inventory, foundation, terms, steps, question types and model mapping were checked by script. Individual editorial review remains pending: guidance is authored by concept family, with original syllabus and quizzes retained. Model/layout checks and complete journey checks are separate.',courses};
await fs.writeFile('docs/TEACHING_COVERAGE.json',JSON.stringify(report,null,2)+'\n');
for(const c of courses)console.log(`${c.id}: ${c.lessons.length} lessons, ${c.lessons.filter(l=>l.modelBrowserVerified).length} models rendered in browser, ${c.lessons.filter(l=>l.journeyBrowserVerified).length} complete journeys; ${c.recordings.filter(r=>!r.lessons.length).length} unpublished recording topics`);
