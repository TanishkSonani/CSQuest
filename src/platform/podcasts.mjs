import fs from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const defaultDirectory=fileURLToPath(new URL('../../data/podcasts/',import.meta.url));
export function byteRange(header,size){
 if(!header)return null;
 const match=String(header).match(/^bytes=(\d*)-(\d*)$/);
 if(!match||(!match[1]&&!match[2])||size===0)return false;
 const start=match[1]?Number(match[1]):Math.max(0,size-Number(match[2]));
 const end=match[1]?(match[2]?Math.min(Number(match[2]),size-1):size-1):size-1;
 if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start<0||start>=size||end<start)return false;
 return {start,end};
}
export function createPodcasts({store,directory=process.env.PODCAST_ROOT||defaultDirectory}){
 const episodeMetadata=async episode=>{
  if(!/^[a-z0-9-]+$/.test(episode.subject)||!Number.isInteger(episode.unit)||!/^[a-f0-9]{64}$/.test(episode.hash))return null;
  const stem=path.join(directory,episode.subject,`unit-${episode.unit}-${episode.hash.slice(0,12)}`);
  try{
   const meta=JSON.parse(await fs.readFile(stem+'.json','utf8')),stat=await fs.stat(stem+'.mp3');
   if(meta.hash!==episode.hash||!stat.isFile()||stat.size===0||!Number.isFinite(meta.duration)||meta.duration<=0||meta.turns?.length!==episode.turns.length)return null;
   return {...meta,file:stem+'.mp3',size:stat.size};
  }catch(error){if(error.code==='ENOENT')return null;throw error;}
 };
 const brief=async episode=>{const media=await episodeMetadata(episode);return {id:episode.id,subject:episode.subject,unit:episode.unit,title:episode.title,courseName:episode.courseName,description:episode.description,topics:episode.topics,estimatedMinutes:episode.estimatedMinutes,ready:!!media,duration:media?.duration??null};};
 return async function handlePodcasts({req,res,url,send,courses}){
  if(!['/api/podcasts','/api/podcast','/api/podcast-audio'].includes(url.pathname))return false;
  if(!['GET','HEAD'].includes(req.method)){send(405,{error:'Method not allowed'});return true;}
  if(url.pathname==='/api/podcasts'){
   const groups=await Promise.all(courses.filter(c=>c.status==='available').map(async course=>(await store.document(course.id,'podcasts.json'))?.episodes||[]));
   send(200,{episodes:await Promise.all(groups.flat().map(brief))});return true;
  }
  const subject=url.searchParams.get('subject'),unitValue=url.searchParams.get('unit');
  if(!courses.some(c=>c.id===subject&&c.status==='available')||!/^\d+$/.test(unitValue||'')){send(400,{error:'Choose a published course and section.'});return true;}
  const episode=(await store.document(subject,'podcasts.json'))?.episodes?.find(e=>e.unit===Number(unitValue));
  if(!episode){send(404,{error:'This section podcast has not been prepared.'});return true;}
  if(url.pathname==='/api/podcast-audio'&&url.searchParams.has('v')&&url.searchParams.get('v')!==episode.hash.slice(0,12)){send(404,{error:'This podcast has been updated. Reopen the section to load its current audio.'});return true;}
  const media=await episodeMetadata(episode);
  if(url.pathname==='/api/podcast'){
   send(200,{...episode,ready:!!media,duration:media?.duration??null,chapters:media?.chapters||episode.chapters,turns:episode.turns.map((turn,index)=>({...turn,...(media?.turns[index]||{})})),audioUrl:media?`/api/podcast-audio?subject=${subject}&unit=${episode.unit}&v=${episode.hash.slice(0,12)}`:null});return true;
  }
  if(!media){send(404,{error:'Audio is still being prepared. The conversation transcript is available.'});return true;}
  const etag='"'+episode.hash+'"',range=byteRange(!req.headers['if-range']||req.headers['if-range']===etag?req.headers.range:null,media.size),headers={'Content-Type':'audio/mpeg','Accept-Ranges':'bytes','Cache-Control':'private, no-cache','X-Content-Type-Options':'nosniff',ETag:etag};
  if(range===false){res.writeHead(416,{...headers,'Content-Range':`bytes */${media.size}`});res.end();return true;}
  const start=range?.start??0,end=range?.end??media.size-1;
  res.writeHead(range?206:200,{...headers,'Content-Length':end-start+1,...(range?{'Content-Range':`bytes ${start}-${end}/${media.size}`}:{})});
  if(req.method==='HEAD'){res.end();return true;}
  const stream=createReadStream(media.file,{start,end});stream.on('error',()=>res.destroy());res.on('close',()=>stream.destroy());stream.pipe(res);return true;
 };
}
