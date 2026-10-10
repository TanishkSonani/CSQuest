import fs from 'node:fs/promises';
import path from 'node:path';
import {subjects,platformRoot,sourceDirectory} from '../config/courses.mjs';
const extensions=new Set(['.mp4','.mkv','.webm','.avi','.mov']);
async function videos(directory,base=directory){
  const files=[];
  for(const entry of await fs.readdir(directory,{withFileTypes:true})){
    if(entry.name==='analysis')continue;
    const file=path.join(directory,entry.name);
    if(entry.isDirectory())files.push(...await videos(file,base));
    else if(entry.isFile()&&extensions.has(path.extname(file).toLowerCase())){const stat=await fs.stat(file);files.push({file:path.relative(base,file).replaceAll('\\','/'),bytes:stat.size});}
  }
  return files.sort((a,b)=>a.file.localeCompare(b.file,undefined,{numeric:true}));
}
let failed=false;
for(const course of subjects){
  try{
    const files=await videos(sourceDirectory(course));
    await fs.writeFile(path.join(platformRoot,course.dataDirectory,'source-files.json'),JSON.stringify({subject:course.id,sourceFolder:course.sourceFolder,recordingCount:files.length,files},null,2)+'\n');
    const manifestFile=path.join(platformRoot,'courses',course.id,'course.json'),manifest=JSON.parse(await fs.readFile(manifestFile,'utf8'));
    manifest.lectureCount=files.length;await fs.writeFile(manifestFile,JSON.stringify(manifest,null,2)+'\n');
    console.log(`${course.id}: ${files.length} recordings (${course.status})`);
  }catch(error){failed=true;console.error(`${course.id}: ${error.message}`);}
}
if(failed)process.exitCode=1;
