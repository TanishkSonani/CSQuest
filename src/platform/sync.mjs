import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {platformRoot,getCourse,subjects} from '../../config/courses.mjs';
import {readJson,atomicJson} from './io.mjs';
import {linkLessons} from './lesson-sources.mjs';

export async function syncCourse(options={}){
  const course=getCourse(options.subject||'coa');
  const canonical=path.join(platformRoot,'courses',course.id),base=options.root||canonical;
  const data=path.join(base,'data'),analysis=options.source?path.join(options.source,'analysis'):options.analysis||path.join(data,'source-analysis');
  const snapshotFile=base===canonical?path.join(platformRoot,'runtime','courses',course.id,'progress.json'):path.join(data,'progress.json');
  await fs.mkdir(path.join(data,'transcripts'),{recursive:true});
  await fs.mkdir(path.dirname(snapshotFile),{recursive:true});
  const previous=await readJson(snapshotFile,{});
  const inventory=await readJson(path.join(analysis,'inventory.json'));
  if(!inventory){const snapshot={phase:course.status==='planned'?'planned':'unavailable',total:course.lectureCount,completed:0,imported:0,totalSeconds:null,completedSeconds:0,...previous,checkedAt:new Date().toISOString(),sourceAvailable:false,message:'Source analysis is unavailable. Imported lessons are still usable.'};await atomicJson(snapshotFile,snapshot);return snapshot;}
  const [{lecturePlans},{lessons}]=await Promise.all(['curriculum.js','lessons.js'].map(file=>import(pathToFileURL(path.join(canonical,'content',file)).href)));
  const worker=await readJson(path.join(analysis,'worker.json'),{}),status=await readJson(path.join(analysis,'status.json'),{});
  let alive=false;if(worker.pid){try{process.kill(worker.pid,0);alive=true;}catch(e){alive=e.code==='EPERM';}}
  const lectures=[],lessonSources=[];
  for(let id=0;id<inventory.length;id++){
    const row=inventory[id],stem=row.transcriptStem||path.parse(row.file).name,done=await readJson(path.join(analysis,'transcripts',stem+'.done'));
    const target=path.join(data,'transcripts',`${id}.json`);let imported=false;
    if(done){try{
      const existing=await readJson(target);
      if(existing?.sourceCompletedAt===JSON.stringify(done))imported=true;
      else{
        const raw=await fs.readFile(path.join(analysis,'transcripts',stem+'.jsonl'),'utf8');
        const segments=raw.trim().split(/\r?\n/).filter(Boolean).map(line=>JSON.parse(line));
        if(!segments.length||segments.some(s=>!Number.isFinite(s.start)||!Number.isFinite(s.end)||typeof s.text!=='string'))throw new Error('Invalid or empty transcript');
        await atomicJson(target,{id,title:lecturePlans[id]?.[0]||row.file,file:row.file,seconds:row.seconds,segments,sourceCompletedAt:JSON.stringify(done)});imported=true;
      }
    }catch(e){await fs.appendFile(path.join(data,'monitor.log'),`${new Date().toISOString()} Import failed for ${id}: ${e.message}\n`);}}
    if(imported)lessonSources.push(...linkLessons(await readJson(target),lessons));
    lectures.push({id,file:row.file,title:lecturePlans[id]?.[0]||row.file,seconds:row.seconds,transcribed:Boolean(done),imported});
  }
  let lessonBuild=null;
  if(course.builder&&base===canonical){
    const {buildReviewed}=await import(pathToFileURL(path.join(canonical,course.builder)).href);
    const build=await buildReviewed(base);lessonBuild=build.report;
    for(const lesson of build.lessons){const entry=lessonSources.find(l=>l.id===lesson.id);if(entry)Object.assign(entry,{start:lesson.start,excerpt:lesson.excerpt,references:lesson.sourceReferences,sourceReferences:lesson.sourceReferences,linkMethod:'reviewed lecture-specific teaching',contentVersion:lesson.contentVersion,title:lesson.title,concept:lesson.concept,teachingSteps:lesson.teachingSteps,questions:lesson.questions,contentStatus:lesson.contentStatus});}
  }
  const completed=lectures.filter(l=>l.transcribed).length,imported=lectures.filter(l=>l.imported).length;
  const totalSeconds=inventory.reduce((n,l)=>n+(l.seconds||0),0),completedSeconds=lectures.filter(l=>l.transcribed).reduce((n,l)=>n+(l.seconds||0),0);
  let logUpdatedAt=null;try{logUpdatedAt=(await fs.stat(path.join(analysis,'transcription.log'))).mtime.toISOString();}catch{}
  const phase=completed===lectures.length&&imported===lectures.length?'complete':completed===lectures.length?'import-error':status.phase==='failed'?'failed':alive?'running':'stopped';
  const snapshot={checkedAt:new Date().toISOString(),sourceAvailable:true,phase,workerAlive:alive,total:lectures.length,completed,imported,totalSeconds,completedSeconds,percent:totalSeconds?Math.round(completedSeconds/totalSeconds*100):0,currentLecture:phase==='running'?lectures.find(l=>l.file===status.current_video)?.id??null:null,logUpdatedAt,checkIntervalSeconds:60,error:status.error||null,lectures,lessonSources,authoredLevels:lessons.length,sourceLinkedLevels:lessonSources.filter(l=>l.ready).length};
  if(lessonBuild)Object.assign(snapshot,{reviewedLectures:lessonBuild.reviewedLectures,reviewedLevels:lessonBuild.reviewedLevels,reviewedQuestions:lessonBuild.questions,awaitingEditorialReview:lessonBuild.awaitingEditorialReview});
  await atomicJson(snapshotFile,snapshot);
  if(previous.completed!==completed||previous.phase!==phase||previous.sourceAvailable===false)await fs.appendFile(path.join(data,'monitor.log'),`${snapshot.checkedAt} ${phase}: ${completed}/${lectures.length} transcribed; ${imported} imported; ${snapshot.percent}% of audio completed.\n`);
  if(phase==='complete'){
    const noticeFile=path.join(data,'TRANSCRIPTION_COMPLETE.md'),notice=`# Transcription complete\n\nAll ${imported} transcripts have been imported. ${lessonSources.length} authored levels are linked to source text. Machine transcripts may mishear formulas; practice problems state explicit assumptions.\n`;
    let existing='';try{existing=await fs.readFile(noticeFile,'utf8');}catch{}
    if(existing!==notice)await fs.writeFile(noticeFile,notice);
  }
  return snapshot;
}
export async function syncAll(){const results=[];for(const course of subjects){try{results.push({subject:course.id,...await syncCourse({subject:course.id})});}catch(e){results.push({subject:course.id,error:e.message});}}return results;}
