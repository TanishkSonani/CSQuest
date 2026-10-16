import fs from 'node:fs/promises';
import {topics} from '../courses/algo/content/topics.js';
import {questionsFor} from '../courses/algo/content/teaching.js';
import {reviewAlgorithmQuizzes} from '../courses/algo/authoring/quiz-review.mjs';
const path=new URL('../courses/algo/content/reviewed-lessons.js',import.meta.url);
const {lessons}=await import(path.href);
// Rebuild from the authored recipes, so repeated runs produce the same quiz.
for(const lesson of lessons)lesson.questions=questionsFor(topics[lesson.lecture],lesson.id%3);
const report=reviewAlgorithmQuizzes(lessons);
await fs.mkdir(new URL('../docs/reports/',import.meta.url),{recursive:true});
await fs.writeFile(new URL('../docs/reports/algo-quiz-revisions.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
if(report.unresolved.length)throw Error('Not enough distinct topic questions; original content has not been overwritten: '+JSON.stringify(report.unresolved));
await fs.writeFile(path,'// Reviewed teaching with adjacent-quiz repetitions replaced by distinct input cases.\nexport const lessons='+JSON.stringify(lessons,null,2)+';\n');
console.log(`Replaced ${report.replacements.length} repeated adjacent Algorithms questions.`);
