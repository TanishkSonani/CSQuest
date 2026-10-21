import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {spawn,execFile} from 'node:child_process';
import {promisify} from 'node:util';
const run=promisify(execFile);
const linux={skip:process.platform!=='linux'?'Shell maintenance checks run on Linux':false};
async function fixture(t,initial={}){
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'csquest-maintenance-'));t.after(()=>fs.rm(root,{recursive:true,force:true}));
 for(const name of ['bin','opt/firefox','data','archive/firefox'])await fs.mkdir(root+'/'+name,{recursive:true});
 for(const [name,version] of [['opt/firefox','199.0'],['archive/firefox','200.0']]){await fs.writeFile(root+'/'+name+'/application.ini','Version='+version+'\n');await fs.writeFile(root+'/'+name+'/firefox','#!/bin/sh\nexit 0\n',{mode:0o755});}
 await run('tar',['-cJf',root+'/browser.tar.xz','-C',root+'/archive','firefox']);
 const stateFile=root+'/state.json';await fs.writeFile(stateFile,JSON.stringify({broker:true,network:true,ready:true,now:1000,...initial}));
 const mock=`#!/usr/bin/env node
const fs=require('node:fs'),cp=require('node:child_process'),path=require('node:path');
const name=path.basename(process.argv[1]),args=process.argv.slice(2),root=process.env.QA_MAINTENANCE_ROOT,file=root+'/state.json',s=JSON.parse(fs.readFileSync(file));
fs.appendFileSync(root+'/calls.jsonl',JSON.stringify({name,args})+'\\n');const save=()=>fs.writeFileSync(file,JSON.stringify(s));
if(name==='id'){console.log('0');}
else if(name==='date'){console.log(s.now);}
else if(name==='systemctl'){
 const [action,...units]=args;
 if(action==='is-active'){const u=units.at(-1);process.exit(u==='csquest-remote.service'?(s.broker?0:3):(s.network?0:3));}
 if(action==='stop'){
  if(units.some(u=>u.includes('*')||u==='csquest-remote-update.service'||u==='csquest-remote-network.service'))process.exit(99);
  s.broker=false;save();if(s.interrupt){process.kill(process.ppid,'SIGTERM');} 
 }
 if(action==='start'||action==='restart'){if(units.includes('csquest-remote-network.service'))s.network=true;if(units.includes('csquest-remote.service')){s.broker=true;s.ready=true;}save();}
}
else if(name==='curl'){
 if(args.some(a=>a.includes('product-details.mozilla.org'))){console.log(JSON.stringify({LATEST_FIREFOX_VERSION:'200.0'}));}
 else if(args.at(-1)==='http://localhost/health'){if(!s.broker)process.exit(7);if(s.coldChecks>0){s.coldChecks--;save();process.exit(7);}console.log(JSON.stringify({ready:s.ready}));}
 else if(args.at(-1)==='http://localhost/maintenance'){if(!s.broker)process.exit(7);s.ready=false;save();console.log('{}');}
 else {fs.copyFileSync(root+'/browser.tar.xz',args[args.indexOf('-o')+1]);}
}
else if(name==='mv'){
 if(s.failInstall&&args[0].includes('firefox-update.'))process.exit(1);
 cp.execFileSync('/usr/bin/mv',args,{stdio:'inherit'});
}
`;
 for(const name of ['id','date','systemctl','curl','mv','chown','logger'])await fs.writeFile(root+'/bin/'+name,mock,{mode:0o755});
 for(const [source,destination] of [['update-remote-firefox.sh','update.sh'],['check-remote.sh','health.sh']]){
  let script=await fs.readFile(new URL('../deploy/'+source,import.meta.url),'utf8');
  script=script.replaceAll('/opt/csquest-remote',root+'/opt').replaceAll('/var/lib/csquest-remote',root+'/data').replaceAll('/run/lock/csquest-firefox-update.lock',root+'/maintenance.lock').replaceAll('/run/csquest-remote-health.failed',root+'/health.failed').replaceAll('/run/csquest-remote/broker.sock',root+'/broker.sock');
  await fs.writeFile(root+'/'+destination,script);
 }
 const env={...process.env,PATH:root+'/bin:'+process.env.PATH,QA_MAINTENANCE_ROOT:root};
 return {root,env,run:(script,args=[])=>run('bash',[root+'/'+script,...args],{env,timeout:15000}),state:()=>fs.readFile(stateFile,'utf8').then(JSON.parse),calls:()=>fs.readFile(root+'/calls.jsonl','utf8').then(s=>s.trim().split('\n').map(JSON.parse)),patch:async values=>fs.writeFile(stateFile,JSON.stringify({...await fs.readFile(stateFile,'utf8').then(JSON.parse),...values}))};
}
test('idle browser update replaces the browser while leaving its network and updater services alone',linux,async t=>{
 const f=await fixture(t);await f.run('update.sh',['--if-idle']);
 assert.match(await fs.readFile(f.root+'/opt/firefox/application.ini','utf8'),/200.0/);assert.match(await fs.readFile(f.root+'/opt/firefox.previous/application.ini','utf8'),/199.0/);
 assert.equal((await f.state()).broker,true);assert.equal((await f.state()).network,true);
 assert.deepEqual((await f.calls()).filter(c=>c.name==='systemctl'&&c.args[0]==='stop').map(c=>c.args),[['stop','csquest-remote.service']]);
});
test('failed browser replacement restores the old binary and starts the broker',linux,async t=>{
 const f=await fixture(t,{failInstall:true});await assert.rejects(f.run('update.sh',['--if-idle']));assert.equal((await f.state()).broker,true);assert.match(await fs.readFile(f.root+'/opt/firefox/application.ini','utf8'),/199.0/);
});
test('updater waits for the broker socket to become ready before reporting success',linux,async t=>{
 const f=await fixture(t,{coldChecks:2});await f.run('update.sh',['--if-idle']);assert.equal((await f.state()).coldChecks,0);assert.equal((await f.calls()).filter(c=>c.name==='curl'&&c.args.at(-1)==='http://localhost/health').length,3);
});
test('interrupting an update after stopping the broker brings it back',linux,async t=>{
 const f=await fixture(t,{interrupt:true});await assert.rejects(f.run('update.sh',['--if-idle']));assert.equal((await f.state()).broker,true);assert.equal((await f.state()).network,true);
});
test('availability check starts stopped services and requires consecutive failures before restarting a running broker',linux,async t=>{
 const f=await fixture(t,{broker:false,network:false});await f.run('health.sh');assert.equal((await f.state()).broker,true);assert.equal((await f.state()).network,true);
 await f.patch({ready:false});await f.run('health.sh');assert.equal((await f.calls()).filter(c=>c.args[0]==='restart').length,0);
 await f.patch({now:1060});await f.run('health.sh');assert.equal((await f.calls()).filter(c=>c.name==='systemctl'&&c.args[0]==='restart').length,1);assert.equal((await f.state()).ready,true);
});
test('availability recovery leaves deliberate locked maintenance untouched',linux,async t=>{
 const f=await fixture(t,{broker:false});const holder=spawn('flock',['--no-fork',f.root+'/maintenance.lock',process.execPath,'-e','process.stdout.write("locked\\n");setInterval(()=>{},1000)'],{env:f.env});
 try{await new Promise((resolve,reject)=>{holder.stdout.once('data',resolve);holder.once('error',reject);});await f.run('health.sh');assert.equal((await f.state()).broker,false);assert.equal((await f.calls()).some(c=>c.name==='systemctl'),false);}finally{holder.kill();await new Promise(r=>holder.once('exit',r));}
});
test('availability recovery restores the previous browser after a hard-killed update leaves the installation missing',linux,async t=>{
 const f=await fixture(t,{broker:false});await fs.rename(f.root+'/opt/firefox',f.root+'/opt/firefox.previous');await f.run('health.sh');assert.equal((await f.state()).broker,true);assert.match(await fs.readFile(f.root+'/opt/firefox/application.ini','utf8'),/199.0/);
});
