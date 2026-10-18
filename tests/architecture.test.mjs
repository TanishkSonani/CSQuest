import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {subjects,platformRoot,readCourses,publicSubjects} from '../config/courses.mjs';
import {createServer} from '../src/platform/server.mjs';
import {syncCourse} from '../src/platform/sync.mjs';
import {testStore} from './database-helper.mjs';

test('source subjects have isolated, uniform course roots with honest publication status',async()=>{
 for(const id of ['coa','dl','c','ds','algo','os','dbms','cn','toc','cd','aptitude'])assert.ok(subjects.some(c=>c.id===id));
 for(const id of ['coa','dl'])assert.equal(subjects.find(c=>c.id===id).status,'available');
 assert.equal(new Set(subjects.map(c=>c.storageKey)).size,subjects.length);
 for(const course of subjects){
  assert.equal(course.contentDirectory,`courses/${course.id}/content`);assert.equal(course.dataDirectory,`courses/${course.id}/data`);
  const [{lessons},{units}]=await Promise.all(['lessons.js','curriculum.js'].map(file=>import(pathToFileURL(path.join(platformRoot,course.contentDirectory,file)).href)));
  if(course.status==='planned'){
   // An authoring builder can hold an unpublished draft. Server tests separately
   // ensure planned subjects never expose their lesson modules or bundles.
   if(course.builder){assert.ok(lessons.length);assert.ok(units.length);}
   else{assert.equal(lessons.length,0);assert.equal(units.length,0);}
  }
  else{assert.ok(lessons.length);assert.ok(units.length);}
  const discovered=JSON.parse(await fs.readFile(path.join(platformRoot,course.dataDirectory,'source-files.json'),'utf8'));
  assert.equal(discovered.recordingCount,course.lectureCount);assert.equal(discovered.files.length,course.lectureCount);
 }
 assert.equal(subjects.find(c=>c.id==='coa').storageKey,'coa-quest-v1');assert.equal(subjects.find(c=>c.id==='dl').storageKey,'dl-quest-v1');
 assert.ok(publicSubjects().every(c=>!('sourceFolder' in c)&&!('builder' in c)));
});

test('registry discovers a new course without platform edits and rejects unsafe manifests',async()=>{
 const directory=await fs.mkdtemp(path.join(os.tmpdir(),'csquest-registry-'));
 assert.equal(path.dirname(directory),os.tmpdir());assert.ok(path.basename(directory).startsWith('csquest-registry-'));
 try{
  const course={schemaVersion:1,id:'example',name:'Example',shortName:'Example',description:'An example subject.',icon:'book',color:'green',storageKey:'example-quest-v1',sourceFolder:'Example',lectureCount:2,status:'planned'};
  await fs.mkdir(path.join(directory,'example'));const file=path.join(directory,'example/course.json');
  await fs.writeFile(file,JSON.stringify(course));assert.equal(readCourses(directory)[0].moduleBase,'/courses/example/');
  await fs.writeFile(file,JSON.stringify({...course,id:'../example'}));assert.throws(()=>readCourses(directory),/identity/);
  await fs.writeFile(file,JSON.stringify({...course,builder:'../../scripts/server.mjs'}));assert.throws(()=>readCourses(directory),/builder/);
  await fs.writeFile(file,JSON.stringify({...course,sourceFolder:'../outside'}));assert.throws(()=>readCourses(directory),/source folder/);
  await fs.writeFile(file,JSON.stringify(course));await fs.mkdir(path.join(directory,'other'));
  await fs.writeFile(path.join(directory,'other/course.json'),JSON.stringify({...course,id:'other'}));assert.throws(()=>readCourses(directory),/storage keys/);
 }finally{await fs.rm(directory,{recursive:true,force:true});}
});

test('shared server serves both subjects and shared modules while isolating private data',async()=>{
 const fixture=await testStore({courses:true});const server=createServer({store:fixture.store});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 try{
  for(const route of ['/api/subjects','/api/status','/courses/coa/lessons.js','/courses/dl/lessons.js','/api/transcript/0'])assert.equal((await fetch(base+route)).status,401,route);
  assert.equal((await fetch(base+'/shared/worked-examples.js')).status,200,'Login dependencies are public');
  const registration=await fetch(base+'/api/account/register',{method:'POST',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1'},body:JSON.stringify({username:'wall_test',displayName:'Wall Test',avatar:'chip',password:'a memorable test passphrase'})});assert.equal(registration.status,200);
  const cookie=registration.headers.get('set-cookie').split(';')[0];const signedFetch=(url,options={})=>fetch(url,{...options,headers:{...options.headers,cookie}});
  const catalog=await (await signedFetch(base+'/api/subjects')).json();assert.equal(catalog.length,subjects.length);
  assert.equal(catalog.find(course=>course.id==='cd').status,'available','Compiler Design appears as a published course');
  const compilerResponse=await signedFetch(base+'/api/course-content?subject=cd');assert.equal(compilerResponse.status,200);
  const compiler=await compilerResponse.json();assert.equal(compiler.lessons.length,156);assert.ok(compiler.lessons.every(lesson=>lesson.ready));assert.equal(compiler.units.length,10);
  for(const course of subjects.filter(c=>c.status==='planned')){
   assert.equal((await signedFetch(`${base}/api/course-content?subject=${course.id}`)).status,404,'Draft course bundles stay unpublished');
   assert.equal((await signedFetch(`${base}/courses/${course.id}/lessons.js`)).status,404,'Draft modules stay unpublished');
  }
  assert.match(await (await signedFetch(base+'/subjects.js')).text(),/export const subjects=/);
  for(const [id,count] of [['coa',35],['dl',98]]){
   const status=await (await signedFetch(`${base}/api/status?subject=${id}`)).json();assert.equal(status.completed,count);assert.equal(status.total,count);
   assert.equal((await signedFetch(`${base}/courses/${id}/lessons.js`)).status,200);
   const transcript=await (await signedFetch(`${base}/api/transcript/0?subject=${id}`)).json();assert.equal(transcript.id,0);assert.ok(transcript.segments.length);
  }
  const osStatus=await (await signedFetch(`${base}/api/status?subject=os`)).json();assert.equal(osStatus.completed,39);assert.equal(osStatus.total,39);
  assert.equal((await signedFetch(base+'/courses/os/lessons.js')).status,200);
  assert.equal((await signedFetch(base+'/shared/engine.js')).status,200);assert.equal((await signedFetch(base+'/shared/worked-examples.js')).status,200);
  assert.equal((await signedFetch(base+'/courses/os/lessons.js')).status,200);
  assert.equal((await signedFetch(base+'/api/status?subject=missing')).status,400);
  for(const route of ['/courses/dl/course.json','/courses/dl/data/progress.json','/runtime/services.json','/config/courses.mjs','/api/video/0','/shared/../config/courses.mjs'])assert.equal((await signedFetch(base+route)).status,404,route);
  assert.equal((await signedFetch(base+'/api/status',{method:'POST'})).status,405);
 }finally{await new Promise(resolve=>server.close(resolve));await fixture.dispose();}
});

test('one importer links authored lessons to duplicate recording basenames independently',async()=>{
 const directory=await fs.mkdtemp(path.join(os.tmpdir(),'csquest-import-'));assert.equal(path.dirname(directory),os.tmpdir());
 try{
  const analysis=path.join(directory,'data/source-analysis');await fs.mkdir(path.join(analysis,'transcripts'),{recursive:true});
  await fs.writeFile(path.join(analysis,'inventory.json'),JSON.stringify([{file:'Part1/lesson.mp4',transcriptStem:'lesson-one',seconds:60},{file:'Done/lesson.mp4',transcriptStem:'lesson-two',seconds:120}]));
  for(const stem of ['lesson-one','lesson-two']){await fs.writeFile(path.join(analysis,'transcripts',stem+'.done'),'{}');await fs.writeFile(path.join(analysis,'transcripts',stem+'.jsonl'),JSON.stringify({start:0,end:1,text:stem}));}
  const status=await syncCourse({subject:'os',root:directory});assert.equal(status.completed,2);assert.equal(status.imported,2);assert.equal(status.authoredLevels,117);assert.equal(status.lessonSources.length,6);
  assert.equal(JSON.parse(await fs.readFile(path.join(directory,'data/transcripts/0.json'),'utf8')).segments[0].text,'lesson-one');
  assert.equal(JSON.parse(await fs.readFile(path.join(directory,'data/transcripts/1.json'),'utf8')).segments[0].text,'lesson-two');
 }finally{await fs.rm(directory,{recursive:true,force:true});}
});
