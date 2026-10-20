// Root-owned, narrow process launcher. Only the application user can reach its
// Unix socket. No endpoint accepts shell commands, paths or systemd properties.
import http from 'node:http';
import net from 'node:net';
import fs from 'node:fs/promises';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {randomUUID,randomBytes} from 'node:crypto';
const run=promisify(execFile),sessions=new Map(),socket='/run/csquest-remote/broker.sock';let maintenance=false;
const identities=new Map();for(const name of ['csquest','csquest-browser','csquest-terminal'])identities.set(name,Number((await run('/usr/bin/id',['-u',name])).stdout.trim()));
const group=Number((await run('/usr/bin/id',['-g','csquest'])).stdout.trim());
const fail=(status,message)=>{throw Object.assign(Error(message),{status});};
async function stop(s){if(!s||s.stopping)return;s.stopping=true;await run('/usr/bin/systemctl',['stop',s.unit],{timeout:12000}).catch(()=>{});sessions.delete(s.id);await fs.rm('/run/csquest-remote/'+s.id,{recursive:true,force:true});console.log('Stopped remote '+s.kind+' '+s.id);}
async function port(){const server=net.createServer();await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});const n=server.address().port;await new Promise(r=>server.close(r));return n;}
async function start(body){
 if(maintenance)fail(503,'Remote applications are being updated. Please retry shortly.');
 if(!['firefox','terminal'].includes(body.kind)||!(/^[a-f0-9-]{36}$/).test(body.actorId||'')||!(/^[a-f0-9]{64}$/).test(body.binding||''))fail(400,'Invalid session request.');
 if([...sessions.values()].some(s=>s.kind===body.kind))fail(409,'A '+body.kind+' session is already running. Close its tab before launching another.');
 const id=randomUUID(),user=body.kind==='firefox'?'csquest-browser':'csquest-terminal',s={id,kind:body.kind,actorId:body.actorId,binding:body.binding,port:await port(),unit:'csquest-remote-'+id+'.service',lastSeen:Date.now(),attached:false};
 // Reserve synchronously before the first process-launch await.
 if(maintenance)fail(503,'Remote applications are being updated. Please retry shortly.');
 if([...sessions.values()].some(s=>s.kind===body.kind))fail(409,'This application is already running.');sessions.set(id,s);
 const directory='/run/csquest-remote/'+id;await fs.mkdir(directory,{mode:0o700});await fs.chown(directory,identities.get(user),identities.get(user));
 try{
  if(s.kind==='firefox'){
   s.password=randomBytes(6).toString('base64');const file=directory+'/password';const child=execFile('/usr/bin/tigervncpasswd',['-f'],{encoding:'buffer'});const output=[];child.stdout.on('data',c=>output.push(c));await new Promise((resolve,reject)=>{child.on('error',reject);child.on('exit',code=>code?reject(Error('Cannot initialize VNC authentication')):resolve());child.stdin.end(s.password+'\n');});await fs.writeFile(file,Buffer.concat(output),{mode:0o600});await fs.chown(file,identities.get(user),identities.get(user));
  }
  const home='/var/lib/csquest-remote/'+(s.kind==='firefox'?'firefox':'terminal');
  const properties={User:user,Group:user,BindsTo:'csquest-remote.service',After:'csquest-remote.service',Slice:'csquest-remote.slice',MemoryMax:s.kind==='firefox'?'3G':'1G',TasksMax:'256',NoNewPrivileges:'yes',PrivateTmp:'yes',TemporaryFileSystem:'/tmp:rw,size=128M /var/tmp:rw,size=32M',ProtectSystem:'strict',ProtectHome:'yes',ProtectProc:'invisible',ProcSubset:s.kind==='terminal'?'all':'pid',RestrictSUIDSGID:'yes',RestrictRealtime:'yes',ProtectKernelTunables:'yes',ProtectKernelModules:'yes',ProtectControlGroups:'yes',UMask:'0077',KillMode:'control-group',TimeoutStopSec:'5s',RuntimeMaxSec:'4h',ReadWritePaths:home+' '+directory,InaccessiblePaths:'-/opt/csquest -/srv/csquest-data -/var/lib/csquest-library -/var/lib/postgresql',WorkingDirectory:home};
  const args=['--quiet','--collect','--unit='+s.unit,...Object.entries(properties).flatMap(([k,v])=>['--property='+k+'='+v]),'--setenv=HOME='+home,'--setenv=LANG=C.UTF-8','/usr/bin/python3','/opt/csquest-remote/worker.py',s.kind,id,String(s.port)];
  await run('/usr/bin/systemd-run',args,{timeout:10000});
  let ready=false;for(let attempt=0;attempt<60;attempt++){if(s.stopping)break;ready=await new Promise(resolve=>{const c=net.connect(s.port,'127.0.0.1');c.setTimeout(100);c.once('connect',()=>{c.destroy();resolve(true);});c.once('error',()=>resolve(false));c.once('timeout',()=>{c.destroy();resolve(false);});});if(ready)break;await new Promise(r=>setTimeout(r,150));}
  if(!ready)throw Error('Application did not start.');s.lastSeen=Date.now();console.log('Started remote '+s.kind+' '+id+' actor '+s.actorId);return s;
 }catch(e){await stop(s);throw e;}
}
const server=http.createServer(async(req,res)=>{const send=(status,value)=>{res.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store'});res.end(JSON.stringify(value));};try{
 if(req.url==='/health'&&req.method==='GET'){send(200,{ready:!maintenance});return;}
 if(req.method!=='POST')fail(405,'Method not allowed.');let n=0,chunks=[];for await(const c of req){n+=c.length;if(n>4096)fail(413,'Request too large.');chunks.push(c);}const body=JSON.parse(Buffer.concat(chunks).toString());
 if(req.url==='/start'){const s=await start(body);send(200,{id:s.id,kind:s.kind,password:s.password});return;}
 if(req.url==='/maintenance'){if(sessions.size)fail(409,'Remote applications are still running.');maintenance=true;send(200,{ok:true});return;}
 const match=req.url.match(/^\/session\/([a-f0-9-]{36})\/(inspect|attach|lease|stop)$/),s=match&&sessions.get(match[1]);if(!s||s.actorId!==body.actorId||s.binding!==body.binding)fail(404,'Session not found.');
 if(match[2]==='stop'){await stop(s);send(200,{ok:true});return;}
 if(s.stopping)fail(410,'Session has closed.');
 if(match[2]==='attach'){if(s.attached)fail(409,'This session is already connected in another tab.');s.attached=true;}
 s.lastSeen=Date.now();send(200,{id:s.id,kind:s.kind,port:s.port});
 }catch(e){if(!e.status)console.error('Remote broker operation failed:',e.code||e.name);send(e.status||503,{error:e.status?e.message:'Remote application could not start. Please retry.'});}});
server.requestTimeout=5000;server.headersTimeout=5000;
await fs.mkdir('/run/csquest-remote',{recursive:true,mode:0o711});await fs.chown('/run/csquest-remote',0,group);await fs.chmod('/run/csquest-remote',0o711);await fs.unlink(socket).catch(e=>{if(e.code!=='ENOENT')throw e;});
await new Promise(r=>server.listen(socket,r));await fs.chown(socket,0,group);await fs.chmod(socket,0o660);
setInterval(()=>{for(const s of sessions.values())if(Date.now()-s.lastSeen>30000)stop(s).catch(()=>{});},5000).unref();
async function shutdown(){server.close();await Promise.all([...sessions.values()].map(stop));process.exit();}process.on('SIGTERM',shutdown);process.on('SIGINT',shutdown);
