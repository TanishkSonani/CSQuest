import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {subjects,publicSubjects} from '../config/courses.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'.vercel','output');
const staticOutput=path.join(output,'static');
const functionsOutput=path.join(output,'functions');
const copyDirectory=async(source,destination)=>{
  await fs.mkdir(destination,{recursive:true});
  for(const entry of await fs.readdir(source,{withFileTypes:true})){
    const from=path.join(source,entry.name),to=path.join(destination,entry.name);
    if(entry.isDirectory())await copyDirectory(from,to);
    else await fs.copyFile(from,to);
  }
};

if(output!==path.join(root,'.vercel','output'))throw new Error('Refusing to clear an unexpected Vercel output path.');
await fs.rm(output,{recursive:true,force:true});
await copyDirectory(path.join(root,'apps','web','public'),staticOutput);
await fs.mkdir(path.join(staticOutput,'shared'),{recursive:true});
for(const name of ['engine','worked-examples','experience','avatars'])
  await fs.copyFile(path.join(root,'packages','learning',`${name}.js`),path.join(staticOutput,'shared',`${name}.js`));
await fs.writeFile(path.join(staticOutput,'subjects.js'),`export const subjects=${JSON.stringify(publicSubjects())};\n`);
for(const subject of subjects)
  await copyDirectory(path.join(root,'courses',subject.id,'content'),path.join(staticOutput,'courses',subject.id));

await fs.mkdir(path.join(staticOutput,'vendor'),{recursive:true});
await fs.copyFile(path.join(root,'node_modules','@vercel','analytics','dist','index.mjs'),path.join(staticOutput,'vendor','vercel-analytics.mjs'));
const appFile=path.join(staticOutput,'app.js'),appSource=await fs.readFile(appFile,'utf8');
await fs.writeFile(appFile,`import {inject} from '/vendor/vercel-analytics.mjs';\ninject({mode:'production'});\n${appSource}`);

const apiPaths=['account/session','account/register','account/login','account/recover','account/data','account/profile','account/password','account/recovery-code','account/logout-all','account/delete','account/logout','account/export','status'];
const functionSource=`import {createServer} from './src/platform/server.mjs';\nconst server=createServer();\nexport default function handler(request,response){server.emit('request',request,response);}\n`;
for(const apiPath of apiPaths){
  const functionDirectory=path.join(functionsOutput,'api',`${apiPath}.func`);
  await fs.mkdir(functionDirectory,{recursive:true});
  await fs.writeFile(path.join(functionDirectory,'index.mjs'),functionSource);
  await fs.writeFile(path.join(functionDirectory,'package.json'),'{"type":"module"}');
  await fs.writeFile(path.join(functionDirectory,'.vc-config.json'),JSON.stringify({runtime:'nodejs22.x',handler:'index.mjs',launcherType:'Nodejs',maxDuration:30}));
  await copyDirectory(path.join(root,'src','platform'),path.join(functionDirectory,'src','platform'));
  await fs.mkdir(path.join(functionDirectory,'config'),{recursive:true});
  await fs.copyFile(path.join(root,'config','courses.mjs'),path.join(functionDirectory,'config','courses.mjs'));
  await fs.mkdir(path.join(functionDirectory,'packages','learning'),{recursive:true});
  await fs.copyFile(path.join(root,'packages','learning','avatars.js'),path.join(functionDirectory,'packages','learning','avatars.js'));
  for(const subject of subjects){
    const manifestDirectory=path.join(functionDirectory,'courses',subject.id);
    await fs.mkdir(manifestDirectory,{recursive:true});
    await fs.copyFile(path.join(root,'courses',subject.id,'course.json'),path.join(manifestDirectory,'course.json'));
  }
}
await fs.writeFile(path.join(output,'config.json'),JSON.stringify({version:3,routes:[{handle:'filesystem'}]},null,2));
console.log(`Prepared ${subjects.length} courses, Analytics, and ${apiPaths.length} serverless API routes in .vercel/output/.`);
