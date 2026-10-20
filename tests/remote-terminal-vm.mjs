// Manual host integration check: sudo node tests/remote-terminal-vm.mjs
// Requires the installed Linux broker, no active Terminal, and Node 22+.
import http from 'node:http';
import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
const identity={actorId:randomUUID(),binding:randomUUID().replaceAll('-','').repeat(2)};
function call(path,body){return new Promise((resolve,reject)=>{
 const req=http.request({socketPath:'/run/csquest-remote/broker.sock',path,method:'POST',headers:{'Content-Type':'application/json'},timeout:15000},res=>{let data='';res.on('data',c=>data+=c);res.on('end',()=>{const result=JSON.parse(data);res.statusCode===200?resolve(result):reject(Error(result.error||'Broker request failed'));});});
 req.on('error',reject);req.on('timeout',()=>req.destroy(Error('Broker timeout')));req.end(JSON.stringify(body));
});}
const marker='linux-qa-'+randomUUID()+'.txt';let current=null,ws=null,output='';
async function until(predicate){for(let n=0;n<150;n++){if(predicate())return;await new Promise(r=>setTimeout(r,100));}throw Error('Terminal output timed out');}
async function open(){
 current=await call('/start',{...identity,kind:'terminal'});
 const info=await call('/session/'+current.id+'/inspect',identity);
 output='';ws=new WebSocket('ws://127.0.0.1:'+info.port+'/api/remote/view/'+current.id+'/terminal/ws','tty');ws.binaryType='arraybuffer';
 ws.addEventListener('message',event=>{const data=Buffer.from(event.data);if(data[0]===48)output+=data.subarray(1).toString();});
 await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',()=>reject(Error('Terminal WebSocket failed')),{once:true});});
 ws.send(Buffer.from(JSON.stringify({AuthToken:'',columns:120,rows:35})));
 await until(()=>/csquest-terminal@[^\r\n]+:\/\$ /.test(output));
 assert.match(output,/Linux terminal on/);assert.match(output,/linux-practice/);
 ws.send(Buffer.from('0stty -echo\r'));const before=output.length;
 await until(()=>output.length>before&&output.slice(before).includes('$ '));
}
async function commands(command,expected){output='';ws.send(Buffer.from('0'+command+'\r'));await until(()=>output.includes(expected));}
async function close(){ws?.close();ws=null;if(current){await call('/session/'+current.id+'/stop',identity);current=null;}}
try{
 await open();
 await commands([
  'test "$(pwd)" = /',
  'ls -1 | grep -qx etc',
  'test -d /usr/bin',
  'test -r /proc/meminfo',
  'free -m >/dev/null',
  'test ! -r /opt/csquest/.env',
  'test ! -w /etc',
  'cd ~/linux-practice',
  'test -f README.txt',
  '(set -C; printf linux-practice-persistence > '+marker+')',
  'printf "\\nFIRST_SESSION_OK\\n"'
 ].join(' && '),'FIRST_SESSION_OK');
 console.log('PASS: real root listing, host system information, protected platform/system files, writable practice directory and normal Bash prompt.');
 await close();await open();
 await commands('cd ~/linux-practice && test "$(cat '+marker+')" = linux-practice-persistence && rm -- '+marker+' && printf "\\nPERSISTENCE_OK\\n"','PERSISTENCE_OK');
 console.log('PASS: practice file persisted across sessions and QA marker removed.');
}finally{await close();}
