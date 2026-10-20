import http from 'node:http';
import net from 'node:net';
import {createHash} from 'node:crypto';
import {WebSocketServer,WebSocket} from 'ws';
import {readBody,assertSameOrigin,verifies,createAccounts} from './accounts.mjs';
import {isPlatformAdmin} from './permissions.mjs';
import {remoteBrokerClient} from './remote-broker-client.mjs';
const fail=(status,message)=>{throw Object.assign(Error(message),{status});};
const valid=id=>/^[a-f0-9-]{36}$/.test(id||'');
const binding=req=>createHash('sha256').update((req.headers.cookie||'').split(';').map(x=>x.trim()).find(x=>x.startsWith('csquest_session='))||'').digest('hex');
const expectedOrigin=req=>`${(req.headers['x-forwarded-proto']||(req.socket.encrypted?'https':'http')).split(',')[0].trim()}://${req.headers.host}`;
export function createRemoteSessions({store,ownerId,broker=remoteBrokerClient()}){
 const clients=new Set(),wss=new WebSocketServer({noServer:true,maxPayload:256*1024,perMessageDeflate:false});
 function admin(actor){if(!isPlatformAdmin(actor)&&actor?.id!==ownerId)fail(403,'Only administrators can open VM sessions.');}
 const identity=(req,actor)=>({actorId:actor.id,binding:binding(req)});
 async function session(req,actor,id){if(!valid(id))fail(404,'Session not found.');return broker.request('POST','/session/'+id+'/inspect',identity(req,actor));}
 const stop=(req,actor,id)=>broker.request('POST','/session/'+id+'/stop',identity(req,actor));
 async function handle({req,res,url,send,actor}){
  if(!url.pathname.startsWith('/api/remote/'))return false;
  try{
   admin(actor);
   if(url.pathname==='/api/remote/status'&&req.method==='GET'){send(200,broker.enabled?{enabled:true,...await broker.request('GET','/health')}:{enabled:false,error:'Remote sessions have not been configured on this server.'});return true;}
   if(url.pathname==='/api/remote/start'&&req.method==='POST'){
    assertSameOrigin(req);const body=await readBody(req);if(!['firefox','terminal'].includes(body.kind))fail(400,'Choose Firefox or Terminal.');
    const key=createHash('sha256').update('remote:'+actor.id).digest('hex');if(await store.limit(key)>10)fail(429,'Too many launch attempts. Try again in 15 minutes.');
    const user=(await store.pool.query('SELECT password FROM csquest_users WHERE id=$1',[actor.id])).rows[0];if(!user||!await verifies(body.password,user.password))fail(401,'Enter your current CSQuest password to launch this session.');
    const fresh=await createAccounts({store,courses:[],ownerId}).authorize(req);admin(fresh);
    const result=await broker.request('POST','/start',{kind:body.kind,...identity(req,fresh)});if(res.destroyed){await stop(req,fresh,result.id).catch(()=>{});return true;}send(200,{id:result.id,kind:result.kind,password:result.password});return true;
   }
   const action=url.pathname.match(/^\/api\/remote\/session\/([a-f0-9-]+)\/(stop|lease)$/);
   if(action&&req.method==='POST'){assertSameOrigin(req);const result=await broker.request('POST','/session/'+action[1]+'/'+action[2],identity(req,actor));send(200,result);return true;}
   const terminal=url.pathname.match(/^\/api\/remote\/view\/([a-f0-9-]+)\/terminal\/(?:token)?$/);
   if(terminal&&req.method==='GET'){
    const s=await session(req,actor,terminal[1]);if(s.kind!=='terminal')fail(404,'Terminal session not found.');
    const upstream=http.request({host:'127.0.0.1',port:s.port,path:url.pathname,method:'GET',headers:{Host:req.headers.host}},r=>{res.writeHead(r.statusCode,{'Content-Type':r.headers['content-type']||'text/html',...(r.headers['content-encoding']?{'Content-Encoding':r.headers['content-encoding']}:{}),'Cache-Control':'no-store','X-Frame-Options':'SAMEORIGIN','Referrer-Policy':'no-referrer','X-Content-Type-Options':'nosniff'});r.on('error',()=>res.destroy());r.pipe(res);});upstream.on('error',()=>{if(!res.headersSent)send(503,{error:'Terminal session is unavailable.'});else res.destroy();});upstream.setTimeout(10000,()=>upstream.destroy());res.on('close',()=>upstream.destroy());upstream.end();return true;
   }
   fail(404,'Remote session action not found.');
  }catch(e){send(e.status||503,{error:e.status?e.message:'Remote session service is unavailable.'});}return true;
 }
 function attach(server){
  server.on('upgrade',async(req,socket,head)=>{
   socket.setNoDelay(true);
   socket.on('error',()=>{});
   const url=new URL(req.url,'http://localhost'),match=url.pathname.match(/^\/api\/remote\/(?:stream\/([a-f0-9-]+)|view\/([a-f0-9-]+)\/terminal\/ws)$/);
   if(!match){socket.end('HTTP/1.1 404 Not Found\r\nConnection: close\r\n\r\n');return;}
   let actor,s,claimed=false;
   try{
    if(req.headers.origin!==expectedOrigin(req))fail(403,'Invalid session origin.');
    const accounts=createAccounts({store,courses:[],ownerId});actor=await accounts.authorize(req);admin(actor);s=await session(req,actor,match[1]||match[2]);
    if(match[1]&&s.kind!=='firefox'||match[2]&&s.kind!=='terminal')fail(404,'Session not found.');
    await broker.request('POST','/session/'+s.id+'/attach',identity(req,actor));claimed=true;
    // A closed tab during asynchronous authorization must not leave an attached process.
    if(socket.destroyed){await stop(req,actor,s.id).catch(()=>{});return;}
    wss.handleUpgrade(req,socket,head,ws=>{
     clients.add(ws);let alive=true,closed=false,backend,queue=[],queued=0;
     const cleanup=()=>{if(closed)return;closed=true;clearInterval(timer);clients.delete(ws);backend?.destroy?.();if(backend instanceof WebSocket)backend.terminate();if(ws.readyState!==WebSocket.CLOSED)ws.terminate();stop(req,actor,s.id).catch(()=>{});};
     // Slow clients should slow the producer, rather than build a frame backlog
     // and terminate the whole browser when the old 2 MB threshold is reached.
     const send=data=>{if(ws.readyState!==WebSocket.OPEN)return;ws.send(data,{binary:true},error=>{if(error){cleanup();return;}if(ws.bufferedAmount<128*1024)backend?.resume?.();});if(ws.bufferedAmount>512*1024)backend?.pause?.();};
     const timer=setInterval(async()=>{if(!alive){cleanup();return;}alive=false;ws.ping();try{const current=await createAccounts({store,courses:[],ownerId}).authorize(req);admin(current);await broker.request('POST','/session/'+s.id+'/lease',identity(req,current));}catch{cleanup();}},10000);timer.unref();
     ws.on('pong',()=>alive=true);ws.on('close',cleanup);ws.on('error',cleanup);
     if(s.kind==='firefox'){
      backend=net.connect(s.port,'127.0.0.1');backend.setNoDelay(true);backend.on('data',send);backend.on('close',cleanup);backend.on('error',cleanup);
      ws.on('message',data=>{if(backend.writableLength>2*1024**2)cleanup();else backend.write(data);});
     }else{
      backend=new WebSocket('ws://127.0.0.1:'+s.port+url.pathname,'tty',{perMessageDeflate:false,maxPayload:256*1024});
      backend.on('open',()=>{for(const data of queue)backend.send(data,{binary:true});queue=[];queued=0;});backend.on('message',send);backend.on('close',cleanup);backend.on('error',cleanup);
      ws.on('message',data=>{if(backend.readyState===WebSocket.OPEN){if(backend.bufferedAmount>2*1024**2)cleanup();else backend.send(data,{binary:true});}else{queued+=data.length;if(queued>256*1024)cleanup();else queue.push(data);}});
     }
    });
   }catch(e){if(claimed)stop(req,actor,s.id).catch(()=>{});socket.end(`HTTP/1.1 ${e.status||503} Session unavailable\r\nConnection: close\r\n\r\n`);}
  });
  server.on('close',()=>{for(const ws of clients)ws.terminate();wss.close();});
 }
 return {handle,attach};
}
