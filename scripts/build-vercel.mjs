import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

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

await fs.mkdir(path.join(staticOutput,'vendor'),{recursive:true});
await fs.copyFile(path.join(root,'node_modules','@vercel','analytics','dist','index.mjs'),path.join(staticOutput,'vendor','vercel-analytics.mjs'));
const appFile=path.join(staticOutput,'app.js'),appSource=await fs.readFile(appFile,'utf8');
await fs.writeFile(appFile,`import {inject} from '/vendor/vercel-analytics.mjs';\ninject({mode:'production'});\n${appSource}`);

const functionPaths=['app'];
const functionSource=`import {createServer} from './src/platform/server.mjs';\nconst server=createServer();\nexport default function handler(request,response){const url=new URL(request.url,'http://vercel.invalid'),pathname=url.searchParams.get('__path');if(pathname){url.searchParams.delete('__path');request.url='/'+pathname+url.search;}server.emit('request',request,response);}\n`;
for(const functionPath of functionPaths){
  const functionDirectory=path.join(functionsOutput,'api',`${functionPath}.func`);
  await fs.mkdir(functionDirectory,{recursive:true});
  await fs.writeFile(path.join(functionDirectory,'index.mjs'),functionSource);
  await fs.writeFile(path.join(functionDirectory,'package.json'),'{"type":"module"}');
  await fs.writeFile(path.join(functionDirectory,'.vc-config.json'),JSON.stringify({runtime:'nodejs22.x',handler:'index.mjs',launcherType:'Nodejs',maxDuration:30}));
  await fs.mkdir(path.join(functionDirectory,'src','platform'),{recursive:true});
  for(const name of ['server','accounts','database','env','social','social-metrics'])await fs.copyFile(path.join(root,'src','platform',name+'.mjs'),path.join(functionDirectory,'src','platform',name+'.mjs'));
  await copyDirectory(path.join(root,'node_modules'),path.join(functionDirectory,'node_modules'));
  await fs.mkdir(path.join(functionDirectory,'packages','learning'),{recursive:true});
  for(const name of ['engine','worked-examples','experience','avatars'])await fs.copyFile(path.join(root,'packages','learning',name+'.js'),path.join(functionDirectory,'packages','learning',name+'.js'));
}
await fs.writeFile(path.join(output,'config.json'),JSON.stringify({version:3,routes:[{src:'^/(api/.*|courses/.*|subjects\\.js|shared/worked-examples\\.js)$',dest:'/api/app?__path=$1'},{handle:'filesystem'}]},null,2));
console.log(`Prepared the UI, Analytics, and ${functionPaths.length} PostgreSQL-backed serverless function in .vercel/output/.`);
