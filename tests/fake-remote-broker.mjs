import {randomUUID} from 'node:crypto';
export function fakeRemoteBroker(port){
 const sessions=new Map();return {enabled:true,sessions,async request(method,path,body){
  const error=(status,message)=>{throw Object.assign(Error(message),{status});};
  if(path==='/health')return {ready:true};
  if(path==='/start'){if([...sessions.values()].some(s=>s.kind===body.kind))error(409,'Already running');const s={id:randomUUID(),kind:body.kind,actorId:body.actorId,binding:body.binding,port,password:'testpass',attached:false};sessions.set(s.id,s);return s;}
  const [,id,action]=path.match(/^\/session\/([^/]+)\/(\w+)$/)||[],s=sessions.get(id);if(!s||s.actorId!==body.actorId||s.binding!==body.binding)error(404,'Session not found');
  if(action==='stop'){sessions.delete(id);return {ok:true};}if(action==='attach'){if(s.attached)error(409,'Already attached');s.attached=true;}return s;
 }};
}
