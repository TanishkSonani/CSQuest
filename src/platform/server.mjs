import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createAccounts} from './accounts.mjs';
import {createStore} from './database.mjs';
import {handleSocial} from './social.mjs';
import {prepareContent,sendContent} from './http-content.mjs';

const root=fileURLToPath(new URL('../../',import.meta.url));
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.json':'application/json','.woff2':'font/woff2'};
const publicCourses=courses=>courses.map(({sourceFolder,builder,...course})=>course);
export function createServer({store:providedStore}={}){
 const store=providedStore||createStore();
 const assets=new Map(),bundles=new Map();
 const server=http.createServer(async(req,res)=>{
  const send=(code,value,type='application/json')=>{res.writeHead(code,{'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:typeof value==='string'?value:JSON.stringify(value));};
  try{
   const url=new URL(req.url,'http://127.0.0.1');
   const dynamic=url.pathname==='/subjects.js'||url.pathname.startsWith('/api/')||url.pathname.startsWith('/courses/');
   if(dynamic){
    const courses=await store.courses(),accounts=createAccounts({store,courses});
    if(await accounts(req,res,url,send))return;
    if(!url.pathname.startsWith('/api/social/')&&!['GET','HEAD'].includes(req.method)){send(405,{error:'Method not allowed'});return;}
    if(url.pathname==='/subjects.js'){sendContent(req,res,await prepareContent(`export const subjects=${JSON.stringify(publicCourses(courses))};\n`),'text/javascript; charset=utf-8',{publicAsset:true});return;}
    let actor;
    try{actor=await accounts.authorize(req);}catch(e){send(e.status||503,{error:e.status===401?'Please log in to your account.':'Account service unavailable',code:e.status===401?'AUTH_REQUIRED':'AUTH_UNAVAILABLE'});return;}
    if(await handleSocial({store,actor,req,url,send,courses}))return;
    if(url.pathname==='/api/subjects'){send(200,publicCourses(courses));return;}
    if(url.pathname.startsWith('/api/')){
     const course=courses.find(c=>c.id===(url.searchParams.get('subject')||'coa'));
     if(!course){send(400,{error:'Unknown subject'});return;}
     if(url.pathname==='/api/course-content'){
      const previous=bundles.get(course.id);
      const bundle=course.status==='available'&&await store.documentContent(course.id,'learning.json',previous?.version);
      if(!bundle){send(404,{error:'Course content is not available yet.'});return;}
      let cached=bundles.get(course.id);
      if(cached?.version!==bundle.version){
       cached=bundle.content===null?previous:{version:bundle.version,prepared:prepareContent(bundle.content)};
       bundles.set(course.id,cached);
      }
      sendContent(req,res,await cached.prepared,'application/json; charset=utf-8');return;
     }
     if(url.pathname==='/api/status'){
      const status=await store.status(course.id);
      send(200,status||{checkedAt:null,sourceAvailable:false,phase:course.status==='planned'?'planned':'stopped',total:course.lectureCount,completed:0,imported:0,lessonSources:[]});return;
     }
     if(/^\/api\/transcript\/\d+$/.test(url.pathname)){
      const transcript=await store.document(course.id,'transcripts/'+url.pathname.split('/').pop()+'.json');
      send(transcript?200:404,transcript||{error:'Not available yet'});return;
     }
     send(404,{error:'Not available'});return;
    }
    if(url.pathname.startsWith('/courses/')){
     const match=url.pathname.match(/^\/courses\/([-a-z0-9]+)\/([a-z0-9-]+\.js)$/),course=match&&courses.find(c=>c.id===match[1]);
     const source=course?.status==='available'?await store.module(course.id,match[2]):undefined;
     send(source===undefined?404:200,source===undefined?{error:'Course content is not available'}:source,source===undefined?'application/json':'text/javascript; charset=utf-8');return;
    }
   }
   if(!['GET','HEAD'].includes(req.method)){send(405,{error:'Method not allowed'});return;}
   let file;
   if(url.pathname.startsWith('/shared/')){
    const match=url.pathname.match(/^\/shared\/(engine|worked-examples|experience|activity|lesson-journey|avatars|calculator|visual-models|ds-models|ds-advanced|ds-final|ds-coding|algo-models|algo-graphs|algo-final)\.js$/);
    if(!match){send(404,{error:'Not available'});return;}
    file=path.join(root,'packages','learning',match[1]+'.js');
   }else{
    const web=path.join(root,'apps','web','public');file=path.resolve(web,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
    if(!file.startsWith(web+path.sep)){send(403,{error:'Invalid path'});return;}
   }
   const stat=await fs.stat(file),version=stat.mtimeMs+':'+stat.size;
   let cached=assets.get(file);
   if(cached?.version!==version){cached={version,prepared:fs.readFile(file).then(prepareContent)};assets.set(file,cached);cached.prepared.catch(()=>{if(assets.get(file)===cached)assets.delete(file);});}
   sendContent(req,res,await cached.prepared,mime[path.extname(file)]||'application/octet-stream',{publicAsset:true});
  }catch(error){
   const missing=error.code==='ENOENT';
   if(!missing)console.error('CSQuest request failed:',error.code||error.name);
   send(missing?404:503,{error:missing?'Not available yet':'Database unavailable. Please try again shortly.'});
  }
 });
 if(!providedStore)server.on('close',()=>store.pool.end());
 return server;
}
