import http from 'node:http';
export function remoteBrokerClient(socketPath=process.env.REMOTE_SESSION_SOCKET){
 return {enabled:!!socketPath,request:(method,path,body)=>new Promise((resolve,reject)=>{
  if(!socketPath){reject(Object.assign(Error('Remote sessions have not been configured on this server.'),{status:503}));return;}
  const req=http.request({socketPath,path,method,headers:{'Content-Type':'application/json'},timeout:20000},res=>{const chunks=[];let size=0;res.on('data',c=>{size+=c.length;if(size>65536)res.destroy(Error('Invalid session response'));else chunks.push(c);});res.on('end',()=>{try{const value=JSON.parse(Buffer.concat(chunks).toString());if(res.statusCode>=400)reject(Object.assign(Error(value.error||'Remote session unavailable.'),{status:res.statusCode}));else resolve(value);}catch(e){reject(e);}});res.on('error',reject);});req.on('timeout',()=>req.destroy(Error('Session service timed out.')));req.on('error',()=>reject(Object.assign(Error('Remote session service is unavailable. Please retry shortly.'),{status:503})));req.end(body?JSON.stringify(body):undefined);
 })};
}
