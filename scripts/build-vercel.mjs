import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {subjects,publicSubjects} from '../config/courses.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'dist');
const copyDirectory=async(source,destination)=>{
  await fs.mkdir(destination,{recursive:true});
  for(const entry of await fs.readdir(source,{withFileTypes:true})){
    const from=path.join(source,entry.name),to=path.join(destination,entry.name);
    if(entry.isDirectory())await copyDirectory(from,to);
    else await fs.copyFile(from,to);
  }
};

await copyDirectory(path.join(root,'apps','web','public'),output);
await fs.mkdir(path.join(output,'shared'),{recursive:true});
for(const name of ['engine','worked-examples','experience','avatars'])
  await fs.copyFile(path.join(root,'packages','learning',`${name}.js`),path.join(output,'shared',`${name}.js`));
await fs.writeFile(path.join(output,'subjects.js'),`export const subjects=${JSON.stringify(publicSubjects())};\n`);
for(const subject of subjects)
  await copyDirectory(path.join(root,'courses',subject.id,'content'),path.join(output,'courses',subject.id));

console.log(`Prepared ${subjects.length} courses and shared browser modules in dist/.`);
