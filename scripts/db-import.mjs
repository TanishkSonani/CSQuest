import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {subjects,platformRoot} from '../config/courses.mjs';
import {createPool,transaction,saveUser} from '../src/platform/database.mjs';
import {migrate} from './db-migrate.mjs';
import {courseBundle} from './course-bundle.mjs';

async function jsonFiles(directory,prefix=''){
 const output=[];
 for(const entry of await fs.readdir(directory,{withFileTypes:true})){
  const relative=prefix+entry.name;
  if(entry.isDirectory())output.push(...await jsonFiles(path.join(directory,entry.name),relative+'/'));
  else if(entry.isFile()&&entry.name.endsWith('.json'))output.push(relative);
 }
 return output;
}
export async function importCourses(pool){
 let modules=0,documents=0;
 await transaction(pool,async client=>{
  for(const course of subjects){
   await client.query(`INSERT INTO csquest_courses(id,manifest,sort_order,storage_key) VALUES($1,$2,$3,$4)
    ON CONFLICT(id) DO UPDATE SET manifest=excluded.manifest,sort_order=excluded.sort_order,storage_key=excluded.storage_key`,[course.id,course,course.order??100,course.storageKey]);
   const content=path.join(platformRoot,course.contentDirectory);
   if(course.status==='available'){
    const bundle=await courseBundle(course.id,content);
    await client.query(`INSERT INTO csquest_course_documents(course_id,path,data) VALUES($1,'learning.json',$2)
     ON CONFLICT(course_id,path) DO UPDATE SET data=excluded.data`,[course.id,JSON.stringify(bundle)]);documents++;
   }
   for(const filename of (await fs.readdir(content)).filter(name=>name.endsWith('.js'))){
    await client.query(`INSERT INTO csquest_course_modules(course_id,filename,source) VALUES($1,$2,$3)
     ON CONFLICT(course_id,filename) DO UPDATE SET source=excluded.source`,[course.id,filename,await fs.readFile(path.join(content,filename),'utf8')]);modules++;
   }
   const data=path.join(platformRoot,course.dataDirectory);
   for(const filename of await jsonFiles(data)){
    const value=JSON.parse(await fs.readFile(path.join(data,filename),'utf8'));
    await client.query(`INSERT INTO csquest_course_documents(course_id,path,data) VALUES($1,$2,$3)
     ON CONFLICT(course_id,path) DO UPDATE SET data=excluded.data`,[course.id,filename,JSON.stringify(value)]);documents++;
   }
   let status;
   try{status=JSON.parse(await fs.readFile(path.join(platformRoot,'runtime','courses',course.id,'progress.json'),'utf8'));}catch(error){if(error.code!=='ENOENT')throw error;}
   if(!status){
    const transcripts=(await client.query("SELECT data FROM csquest_course_documents WHERE course_id=$1 AND path LIKE 'transcripts/%.json' ORDER BY path",[course.id])).rows.map(row=>row.data);
    status={checkedAt:new Date().toISOString(),sourceAvailable:false,phase:course.status==='planned'?'planned':'stopped',total:course.lectureCount,completed:transcripts.length,imported:transcripts.length,totalSeconds:null,completedSeconds:0,lessonSources:[]};
   }
   await client.query(`INSERT INTO csquest_course_status(course_id,data) VALUES($1,$2)
    ON CONFLICT(course_id) DO UPDATE SET data=excluded.data`,[course.id,status]);
  }
 });
 return {courses:subjects.length,modules,documents};
}
export async function importAccounts(pool,filename){
 const data=JSON.parse(await fs.readFile(filename,'utf8'));
 if(data.version!==1||!Array.isArray(data.users)||!Array.isArray(data.sessions))throw new Error('Invalid legacy account file.');
 let imported=0,skipped=0;
 await transaction(pool,async client=>{
  for(const user of data.users){
   await client.query('SELECT pg_advisory_xact_lock(hashtextextended($1,0))',['csquest:username:'+user.username]);
   if((await client.query('SELECT id FROM csquest_users WHERE id=$1 OR username=$2',[user.id,user.username])).rowCount){skipped++;continue;}
   await saveUser(client,user);
   for(const session of data.sessions.filter(value=>value.userId===user.id&&value.expiresAt>Date.now()))await client.query('INSERT INTO csquest_sessions(hash,user_id,created_at,expires_at) VALUES($1,$2,$3,$4)',[session.hash,session.userId,session.createdAt,session.expiresAt]);
   imported++;
  }
 });
 return {imported,skipped};
}
if(process.argv[1]&&pathToFileURL(process.argv[1]).href===import.meta.url){
 const pool=createPool();
 try{
  await migrate(pool);console.log('Course import:',await importCourses(pool));
  const filename=process.argv[2]||fileURLToPath(new URL('../data/accounts/accounts.json',import.meta.url));
  try{console.log('Account import:',await importAccounts(pool,filename));}catch(error){if(error.code!=='ENOENT')throw error;console.log('No legacy accounts to import.');}
 }finally{await pool.end();}
}
