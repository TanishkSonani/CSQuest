import {Worker,isMainThread,parentPort,workerData} from 'node:worker_threads';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

// Each publication evaluates the complete module graph in a fresh worker so
// a long-running authoring watcher cannot publish stale imported dependencies.
export function courseBundle(subjectId,directory){
 return new Promise((resolve,reject)=>{
  const worker=new Worker(new URL(import.meta.url),{workerData:{subjectId,directory},execArgv:[]});
  worker.once('message',resolve);worker.once('error',reject);
  worker.once('exit',code=>{if(code)reject(Error('Course bundle worker failed: '+code));});
 });
}
if(!isMainThread){
 const [curriculum,content]=await Promise.all([import(pathToFileURL(path.join(workerData.directory,'curriculum.js')).href),import(pathToFileURL(path.join(workerData.directory,'lessons.js')).href)]);
 parentPort.postMessage({subjectId:workerData.subjectId,units:curriculum.units,lecturePlans:curriculum.lecturePlans,lessons:content.lessons});
}
