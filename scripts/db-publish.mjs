import {createPool} from '../src/platform/database.mjs';
import {importCourses} from './db-import.mjs';

// Authoring/transcription tools can still prepare files offline. Publish their
// completed output into PostgreSQL before the app sees the next revision.
export async function publishCourses(){
 if(!process.env.DATABASE_URL)return;
 const pool=createPool();try{await importCourses(pool);}finally{await pool.end();}
}
