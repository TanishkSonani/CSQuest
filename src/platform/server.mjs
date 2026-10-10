import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {platformRoot,subjects,publicSubjects} from '../../config/courses.mjs';
import {syncCourse} from './sync.mjs';
import {createAccounts} from './accounts.mjs';

const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.json':'application/json','.woff2':'font/woff2'};
export function createServer({accountDirectory=path.join(platformRoot,'data','accounts')}={}){const accounts=createAccounts({directory:accountDirectory,courses:subjects});return http.createServer(async(req,res)=>{
  const send=(code,value,type='application/json')=>{res.writeHead(code,{'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:typeof value==='string'?value:JSON.stringify(value));};
  try{
    const url=new URL(req.url,'http://127.0.0.1');let file;
    if(await accounts(req,res,url,send))return;
    if(!['GET','HEAD'].includes(req.method)){send(405,{error:'Method not allowed'});return;}
    if(url.pathname==='/subjects.js'){send(200,`export const subjects=${JSON.stringify(publicSubjects())};\n`,'text/javascript; charset=utf-8');return;}
    if(url.pathname.startsWith('/api/')||url.pathname.startsWith('/courses/')||url.pathname==='/shared/worked-examples.js'){
      try{await accounts.authorize(req);}catch(e){send(e.status||503,{error:e.status===401?'Please log in to your account.':'Account service unavailable',code:e.status===401?'AUTH_REQUIRED':'AUTH_UNAVAILABLE'});return;}
    }
    if(url.pathname==='/api/subjects'){send(200,publicSubjects());return;}
    if(url.pathname.startsWith('/api/')){
      const course=subjects.find(c=>c.id===(url.searchParams.get('subject')||'coa'));
      if(!course){send(400,{error:'Unknown subject'});return;}
      if(url.pathname==='/api/status'){
        if(process.env.VERCEL){send(200,{checkedAt:new Date().toISOString(),sourceAvailable:false,phase:course.status==='planned'?'planned':'stopped',total:course.lectureCount,completed:0,imported:0,totalSeconds:null,completedSeconds:0,lessonSources:[]});return;}
        file=path.join(platformRoot,'runtime','courses',course.id,'progress.json');
        try{await fs.access(file);}catch{await syncCourse({subject:course.id});}
      }
      else if(/^\/api\/transcript\/\d+$/.test(url.pathname))file=path.join(platformRoot,course.dataDirectory,'transcripts',url.pathname.split('/').pop()+'.json');
      else{send(404,{error:'Not available'});return;}
    }else if(url.pathname.startsWith('/courses/')){
      const match=url.pathname.match(/^\/courses\/([-a-z0-9]+)\/([a-z0-9-]+\.js)$/);
      const course=match&&subjects.find(c=>c.id===match[1]);
      if(!course||course.status!=='available'){send(404,{error:'Course content is not available'});return;}
      file=path.join(platformRoot,course.contentDirectory,match[2]);
    }else if(url.pathname.startsWith('/shared/')){
      const match=url.pathname.match(/^\/shared\/(engine|worked-examples|experience|avatars)\.js$/);
      if(!match){send(404,{error:'Not available'});return;}
      file=path.join(platformRoot,'packages','learning',match[1]+'.js');
    }else{
      const web=path.join(platformRoot,'apps','web','public'),relative=decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname);
      file=path.resolve(web,'.'+relative);
      if(!file.startsWith(web+path.sep)){send(403,{error:'Invalid path'});return;}
    }
    const content=await fs.readFile(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:content);
  }catch(e){send(e.code==='ENOENT'?404:500,{error:e.code==='ENOENT'?'Not available yet':'Unable to read course data'});}
});}
