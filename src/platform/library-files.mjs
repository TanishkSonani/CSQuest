import path from 'node:path';
import {pipeline} from 'node:stream/promises';
import {byteRange} from './podcasts.mjs';
import {openLibraryFile,libraryError} from './storage.mjs';

export const libraryMediaTypes={'.pdf':'application/pdf','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp','.gif':'image/gif','.avif':'image/avif','.mp4':'video/mp4','.mkv':'video/x-matroska','.webm':'video/webm','.ogv':'video/ogg','.mov':'video/quicktime','.mp3':'audio/mpeg','.m4a':'audio/mp4','.aac':'audio/aac','.ogg':'audio/ogg','.opus':'audio/ogg','.wav':'audio/wav','.flac':'audio/flac'};
export async function streamLibraryFile({req,res,url,entry,drive,inspect}){
 await inspect(drive);
 const file=await openLibraryFile(drive,entry.id);
 let handedOff=false;
 try{
  const {size}=await file.stat();if(size!==Number(entry.size))throw libraryError(409,'Stored file size does not match its inventory.');
  const etag='"'+entry.id+'-'+size+'"',range=byteRange(!req.headers['if-range']||req.headers['if-range']===etag?req.headers.range:null,size);
  const type=libraryMediaTypes[path.extname(entry.name).toLowerCase()],download=url.searchParams.get('download')==='1'||!type;
  const headers={'Content-Type':download?'application/octet-stream':type,'Accept-Ranges':'bytes','Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','X-Robots-Tag':'noindex, nofollow, noarchive',ETag:etag,'Content-Disposition':`${download?'attachment':'inline'}; filename="download"; filename*=UTF-8''${encodeURIComponent(entry.name).replace(/[!'()*]/g,c=>'%'+c.charCodeAt(0).toString(16))}`};
  // PDF.js reads bytes itself. A dedicated inline transport prevents installed
  // download managers from hijacking application/pdf into a native download.
  if(!download&&type==='application/pdf'&&url.searchParams.get('preview')==='1'){
   headers['Content-Type']='application/x-csquest-document';headers['Content-Disposition']='inline';
  }
  if(range===false){res.writeHead(416,{...headers,'Content-Range':`bytes */${size}`});res.end();return;}
  const start=range?.start??0,end=range?.end??size-1;
  res.writeHead(range?206:200,{...headers,'Content-Length':Math.max(0,end-start+1),...(range?{'Content-Range':`bytes ${start}-${end}/${size}`}:{})});
  if(req.method==='HEAD'||!size){res.end();return;}
  handedOff=true;try{await pipeline(file.createReadStream({start,end,highWaterMark:1024**2}),res);}catch{res.destroy();}
 }finally{if(!handedOff)await file.close();}
}
