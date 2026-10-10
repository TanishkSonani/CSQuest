import fs from 'node:fs/promises';
import path from 'node:path';
import {platformRoot} from '../config/courses.mjs';
import {readJson,atomicJson} from '../src/platform/io.mjs';
import {syncAll} from '../src/platform/sync.mjs';
const lock=path.join(platformRoot,'runtime','watcher.json');await fs.mkdir(path.dirname(lock),{recursive:true});
const old=await readJson(lock);
if(old?.pid){try{process.kill(old.pid,0);console.log('The platform watcher is already running.');process.exit(0);}catch(e){if(e.code==='EPERM')process.exit(0);}}
await atomicJson(lock,{pid:process.pid,startedAt:new Date().toISOString(),intervalSeconds:60});
async function check(){try{for(const result of await syncAll())console.log(`${new Date().toISOString()} ${result.subject}: ${result.completed??'?'}/${result.total??'?'}, ${result.error||result.phase}`);}catch(e){console.error(new Date().toISOString(),e.stack);}}
await check();
async function loop(){await check();setTimeout(loop,60_000);}
setTimeout(loop,60_000);
