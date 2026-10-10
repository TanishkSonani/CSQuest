import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

export const platformRoot=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export const coursesRoot=path.join(platformRoot,'courses');
export function readCourses(directory=coursesRoot){
  const courses=fs.readdirSync(directory,{withFileTypes:true}).filter(d=>d.isDirectory()).map(d=>{
    const file=path.join(directory,d.name,'course.json');
    const course=JSON.parse(fs.readFileSync(file,'utf8'));
    if(course.schemaVersion!==1||course.id!==d.name||!/^[-a-z0-9]+$/.test(course.id))throw new Error(`Invalid course identity: ${file}`);
    const allowed=new Set(['schemaVersion','id','name','shortName','description','icon','color','order','status','sourceFolder','lectureCount','storageKey','builder']);
    const requiredStrings=['name','shortName','description','icon','storageKey','sourceFolder'];
    if(Object.keys(course).some(key=>!allowed.has(key))||requiredStrings.some(key=>typeof course[key]!=='string'||!course[key].trim())||!['available','planned'].includes(course.status)||!['green','blue','purple','orange','teal','pink'].includes(course.color)||!Number.isInteger(course.lectureCount)||course.lectureCount<0||(course.order!==undefined&&(!Number.isInteger(course.order)||course.order<0)))throw new Error(`Invalid course manifest: ${file}`);
    if(/[\\/]/.test(course.sourceFolder)||['.','..'].includes(course.sourceFolder))throw new Error(`Invalid source folder: ${file}`);
    if(course.builder&&!/^authoring\/[a-z0-9-]+\.mjs$/.test(course.builder))throw new Error(`Invalid lesson builder: ${file}`);
    return {...course,moduleBase:`/courses/${course.id}/`,dataDirectory:`courses/${course.id}/data`,contentDirectory:`courses/${course.id}/content`};
  }).sort((a,b)=>(a.order??100)-(b.order??100)||a.id.localeCompare(b.id));
  if(new Set(courses.map(c=>c.storageKey)).size!==courses.length)throw new Error('Course storage keys must be unique.');
  return courses;
}
export const subjects=readCourses();
export function getCourse(id){const course=subjects.find(c=>c.id===id);if(!course)throw new Error(`Unknown subject: ${id}`);return course;}
export function sourceDirectory(course){return process.env[`${course.id.toUpperCase().replaceAll('-','_')}_SOURCE`]||path.join(process.env.CSQUEST_SOURCE_ROOT||'K:\\Gate\\GO CSE',course.sourceFolder);}
export function publicSubjects(){return subjects.map(({sourceFolder,builder,...course})=>course);}
