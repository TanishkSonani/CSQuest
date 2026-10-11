import fs from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import {createPool,transaction} from '../src/platform/database.mjs';

export async function migrate(pool){
 const directory=new URL('../migrations/',import.meta.url);
 const files=(await fs.readdir(directory)).filter(file=>/^\d+.*\.sql$/.test(file)).sort();
 await transaction(pool,async client=>{
  await client.query("SELECT pg_advisory_xact_lock(hashtextextended('csquest:migrations',0))");
  await client.query('CREATE TABLE IF NOT EXISTS csquest_migrations(name text PRIMARY KEY,applied_at timestamptz NOT NULL DEFAULT now())');
  for(const file of files){
   if((await client.query('SELECT name FROM csquest_migrations WHERE name=$1',[file])).rowCount)continue;
   await client.query(await fs.readFile(new URL(file,directory),'utf8'));
   await client.query('INSERT INTO csquest_migrations(name) VALUES($1)',[file]);
  }
 });
}
if(process.argv[1]&&pathToFileURL(process.argv[1]).href===import.meta.url){
 const pool=createPool();try{await migrate(pool);console.log('PostgreSQL schema is ready.');}finally{await pool.end();}
}
