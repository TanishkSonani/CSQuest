import http from 'node:http';
export function relayRemoteAudio({req,res,send,session,authorize}){
 if(req.aborted||res.destroyed)return;
 if(!Number.isInteger(session.audioPort)||session.audioPort<1||session.audioPort>65535||!session.audioToken){send(503,{error:'Audio is not available in this session. Close it and launch Firefox again.'});return;}
 let closed=false,checking=false,timer;
 const upstream=http.request({host:'127.0.0.1',port:session.audioPort,path:'/audio',method:'GET',headers:{Authorization:'Bearer '+session.audioToken}},response=>{
  if(response.statusCode!==200){response.resume();send(503,{error:'Audio is reconnecting. Please retry.'});cleanup();return;}
  res.writeHead(200,{'Content-Type':'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','X-Accel-Buffering':'no','Cross-Origin-Resource-Policy':'same-origin'});
  response.on('error',()=>res.destroy());response.pipe(res);
 });
 function cleanup(){if(closed)return;closed=true;clearInterval(timer);upstream.destroy();}
 upstream.on('error',()=>{if(closed)return;if(!res.headersSent)send(503,{error:'Audio is temporarily unavailable.'});else res.destroy();cleanup();});
 upstream.setTimeout(15000,()=>upstream.destroy());res.on('close',cleanup);
 timer=setInterval(async()=>{if(closed||checking)return;checking=true;try{await authorize();}catch{res.destroy();cleanup();}finally{checking=false;}},10000);timer.unref();upstream.end();
}
