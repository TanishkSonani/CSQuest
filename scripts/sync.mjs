import {syncCourse,syncAll} from '../src/platform/sync.mjs';
const subject=process.argv[2];
const results=subject?[{subject,...await syncCourse({subject})}]:await syncAll();
for(const result of results)console.log(JSON.stringify({subject:result.subject,completed:result.completed,total:result.total,phase:result.phase,error:result.error}));
if(results.some(r=>r.error))process.exitCode=1;
