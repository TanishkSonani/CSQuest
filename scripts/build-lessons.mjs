import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {subjects,getCourse,platformRoot} from '../config/courses.mjs';
import {publishCourses} from './db-publish.mjs';
const courses=process.argv[2]?[getCourse(process.argv[2])]:subjects.filter(c=>c.status==='available'&&c.builder);
for(const course of courses){
  if(!course.builder){console.log(`${course.id}: content is authored directly in courses/${course.id}/content`);continue;}
  const {buildReviewed}=await import(pathToFileURL(path.join(platformRoot,'courses',course.id,course.builder)).href);
  const {report}=await buildReviewed();console.log(JSON.stringify({subject:course.id,reviewedLectures:report.reviewedLectures,reviewedLevels:report.reviewedLevels,questions:report.questions}));
}
await publishCourses();
