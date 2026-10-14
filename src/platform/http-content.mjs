import {createHash} from 'node:crypto';
import {gzip as gzipCallback} from 'node:zlib';
import {promisify} from 'node:util';
const gzip=promisify(gzipCallback);

export async function prepareContent(value){
 const raw=Buffer.isBuffer(value)?value:Buffer.from(typeof value==='string'?value:JSON.stringify(value));
 return {raw,compressed:raw.length>1024?await gzip(raw):null,etag:'W/"'+createHash('sha256').update(raw).digest('base64url')+'"'};
}
export function sendContent(req,res,content,type,{publicAsset=false}={}){
 const acceptsGzip=(req.headers['accept-encoding']||'').split(',').some(entry=>{
  const [encoding,...params]=entry.trim().split(';');
  return encoding==='gzip'&&!params.some(p=>/^\s*q\s*=\s*0(?:\.0*)?\s*$/.test(p));
 });
 const compressed=acceptsGzip&&content.compressed,body=compressed||content.raw;
 const headers={'Content-Type':type,'Cache-Control':publicAsset?'public, no-cache':'no-store','X-Content-Type-Options':'nosniff','Vary':'Accept-Encoding',...(publicAsset?{ETag:content.etag}:{})};
 if(publicAsset&&(req.headers['if-none-match']||'').split(',').some(tag=>tag.trim().replace(/^W\//,'')===content.etag.replace(/^W\//,'')||tag.trim()==='*')){
  res.writeHead(304,headers);res.end();return;
 }
 res.writeHead(200,{...headers,'Content-Length':body.length,...(compressed?{'Content-Encoding':'gzip'}:{})});
 res.end(req.method==='HEAD'?undefined:body);
}
