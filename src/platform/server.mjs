import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createAccounts} from './accounts.mjs';
import {createStore} from './database.mjs';
import {handleSocial} from './social.mjs';
import {gzip as gzipCallback} from 'node:zlib';
import {promisify} from 'node:util';
const gzip=promisify(gzipCallback);

const root=fileURLToPath(new URL('../../',import.meta.url));
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.json':'application/json','.woff2':'font/woff2'};
const publicCourses=courses=>courses.map(({sourceFolder,builder,...course})=>course);
export function createServer({store:providedStore}={}){
 const store=providedStore||createStore();
 const server=http.createServer(async(req,res)=>{
  const send=(code,value,type='application/json')=>{res.writeHead(code,{'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:typeof value==='string'?value:JSON.stringify(value));};
  try{
   const url=new URL(req.url,'http://127.0.0.1');
   const sendContent=async(value,type)=>{
    let content=Buffer.from(typeof value==='string'?value:JSON.stringify(value));
    const compressed=content.length>1024&&(req.headers['accept-encoding']||'').split(',').some(entry=>{const [encoding,...params]=entry.trim().split(';');return encoding==='gzip'&&!params.some(p=>/^\s*q\s*=\s*0(?:\.0*)?\s*$/.test(p));});
    if(compressed)content=await gzip(content);
    res.writeHead(200,{'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Vary':'Accept-Encoding','Content-Length':content.length,...(compressed?{'Content-Encoding':'gzip'}:{})});res.end(req.method==='HEAD'?undefined:content);
   };
   const dynamic=url.pathname==='/subjects.js'||url.pathname.startsWith('/api/')||url.pathname.startsWith('/courses/')||url.pathname==='/shared/worked-examples.js';
   if(dynamic){
    const courses=await store.courses(),accounts=createAccounts({store,courses});
    if(await accounts(req,res,url,send))return;
    if(!url.pathname.startsWith('/api/social/')&&!['GET','HEAD'].includes(req.method)){send(405,{error:'Method not allowed'});return;}
    if(url.pathname==='/subjects.js'){send(200,`export const subjects=${JSON.stringify(publicCourses(courses))};\n`,'text/javascript; charset=utf-8');return;}
    let actor;
    try{actor=await accounts.authorize(req);}catch(e){send(e.status||503,{error:e.status===401?'Please log in to your account.':'Account service unavailable',code:e.status===401?'AUTH_REQUIRED':'AUTH_UNAVAILABLE'});return;}
    if(await handleSocial({store,actor,req,url,send,courses}))return;
    if(url.pathname==='/api/subjects'){send(200,publicCourses(courses));return;}
    if(url.pathname.startsWith('/api/')){
     const course=courses.find(c=>c.id===(url.searchParams.get('subject')||'coa'));
     if(!course){send(400,{error:'Unknown subject'});return;}
     if(url.pathname==='/api/course-content'){
      const bundle=course.status==='available'&&await store.document(course.id,'learning.json');
      if(!bundle){send(404,{error:'Course content is not available yet.'});return;}
      await sendContent(bundle,'application/json; charset=utf-8');return;
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
    const match=url.pathname.match(/^\/shared\/(engine|worked-examples|experience|avatars|calculator|visual-models|ds-models|ds-advanced)\.js$/);
    if(!match){send(404,{error:'Not available'});return;}
    file=path.join(root,'packages','learning',match[1]+'.js');
   }else{
    const web=path.join(root,'apps','web','public');file=path.resolve(web,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
    if(!file.startsWith(web+path.sep)){send(403,{error:'Invalid path'});return;}
   }
   const content=await fs.readFile(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:content);
  }catch(error){
   const missing=error.code==='ENOENT';
   if(!missing)console.error('CSQuest request failed:',error.code||error.name);
   send(missing?404:503,{error:missing?'Not available yet':'Database unavailable. Please try again shortly.'});
  }
 });
 if(!providedStore)server.on('close',()=>store.pool.end());
 return server;
}
