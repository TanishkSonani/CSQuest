import {createServer} from '../src/platform/server.mjs';
import {createStore} from '../src/platform/database.mjs';
const port=Number(process.env.APP_PORT||4173);
const host=process.env.APP_HOST||'127.0.0.1';
const store=createStore();
try{
 const courses=await store.courses();
 if(!courses.length)throw new Error('No courses imported. Run npm run db:import first.');
 const server=createServer({store});
 server.listen(port,host,()=>console.log(`CS Quest: http://${host}:${port} (PostgreSQL)`));
 const stop=()=>server.close(async()=>{await store.pool.end();process.exit(0);});
 process.on('SIGINT',stop);process.on('SIGTERM',stop);
}catch(error){await store.pool.end();console.error('Cannot start CSQuest:',error.message);process.exitCode=1;}
