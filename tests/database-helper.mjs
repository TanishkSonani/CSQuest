import {randomUUID} from 'node:crypto';
import {createPool,createStore} from '../src/platform/database.mjs';
import {migrate} from '../scripts/db-migrate.mjs';
import {importCourses} from '../scripts/db-import.mjs';
import {subjects} from '../config/courses.mjs';

export async function testStore({courses=false}={}){
 const url=process.env.TEST_DATABASE_URL||process.env.DATABASE_URL||process.env.POSTGRES_URL;
 const admin=createPool(url),schema='csquest_test_'+randomUUID().replaceAll('-','');
 await admin.query(`CREATE SCHEMA "${schema}"`);
 const pool=createPool(url,{options:`-c search_path=${schema}`});
 try{
  await migrate(pool);
  if(courses)await importCourses(pool);
  else for(const course of subjects)await pool.query('INSERT INTO csquest_courses(id,manifest,sort_order,storage_key) VALUES($1,$2,$3,$4)',[course.id,course,course.order??100,course.storageKey]);
 }
 catch(error){await pool.end();await admin.query(`DROP SCHEMA "${schema}" CASCADE`);await admin.end();throw error;}
 return {store:createStore(pool),async dispose(){await pool.end();await admin.query(`DROP SCHEMA "${schema}" CASCADE`);await admin.end();}};
}
