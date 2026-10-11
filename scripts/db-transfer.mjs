import fs from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {spawn} from 'node:child_process';
import {createPool} from '../src/platform/database.mjs';

const quote=value=>'"'+value.replaceAll('"','""')+'"';
const executable=name=>process.env.PG_BIN?path.join(process.env.PG_BIN,name+(process.platform==='win32'?'.exe':'')):process.platform==='win32'?`C:/Program Files/PostgreSQL/18/bin/${name}.exe`:name;
async function run(name,args,url){
 await new Promise((resolve,reject)=>{
  // Pass the password through the child environment, never command arguments.
  const connection=new URL(url),password=decodeURIComponent(connection.password);connection.password='';
  const child=spawn(executable(name),['--dbname',connection.href,...args],{windowsHide:true,env:{...process.env,PGPASSWORD:password},stdio:['ignore','ignore','pipe']});
  let diagnostic='';child.stderr.on('data',chunk=>{diagnostic+=chunk;});
  child.on('error',reject);child.on('close',code=>code===0?resolve():reject(new Error(`${name} failed: ${diagnostic.replaceAll(url,'[database]')}`)));
 });
}
async function checksum(file){const hash=createHash('sha256');for await(const chunk of createReadStream(file))hash.update(chunk);return hash.digest('hex');}
async function inventory(client){
 const tables=(await client.query("SELECT schemaname,tablename FROM pg_tables WHERE schemaname NOT IN ('pg_catalog','information_schema') AND schemaname NOT LIKE 'pg_toast%' AND schemaname NOT LIKE 'csquest_test_%' ORDER BY schemaname,tablename")).rows;
 const result=[];
 for(const {schemaname,tablename} of tables){
  const name=`${quote(schemaname)}.${quote(tablename)}`;
  const row=(await client.query(`SELECT count(*)::text AS rows, md5(coalesce(string_agg(fingerprint,'' ORDER BY fingerprint),'')) AS digest FROM (SELECT md5(row_to_json(t)::text) AS fingerprint FROM ${name} t) entries`)).rows[0];
  result.push({schema:schemaname,table:tablename,...row});
 }
 return result;
}
export async function exportDatabase(file,url=process.env.DATABASE_URL){
 file=path.resolve(file);await fs.mkdir(path.dirname(file),{recursive:true,mode:0o700});
 // Reserve both filenames so an existing backup cannot be overwritten.
 const manifestFile=file+'.json';let reservedDump=false,reservedManifest=false,client;
 const pool=createPool(url,{statement_timeout:0});
 try{
  client=await pool.connect();
  const reservation=await fs.open(file,'wx',0o600);await reservation.close();reservedDump=true;
  const manifestReservation=await fs.open(manifestFile,'wx',0o600);await manifestReservation.close();reservedManifest=true;
  await client.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');
  const snapshot=(await client.query('SELECT pg_export_snapshot() AS snapshot')).rows[0].snapshot;
  const serverVersion=Number((await client.query('SHOW server_version_num')).rows[0].server_version_num);
  const tables=await inventory(client);
  await run('pg_dump',['--format=custom','--exclude-schema=csquest_test_*','--no-owner','--no-acl','--no-password',`--snapshot=${snapshot}`,`--file=${file}`],url);
  const manifest={version:1,createdAt:new Date().toISOString(),serverVersion,sha256:await checksum(file),tables};
  await fs.writeFile(manifestFile,JSON.stringify(manifest,null,2)+'\n',{mode:0o600});
  await client.query('COMMIT');return manifest;
 }catch(error){if(client)await client.query('ROLLBACK');if(reservedDump)await fs.rm(file,{force:true});if(reservedManifest)await fs.rm(manifestFile,{force:true});throw error;}
 finally{client?.release();await pool.end();}
}
export async function verifyDatabase(file,url=process.env.DATABASE_URL){
 const manifest=JSON.parse(await fs.readFile(file+'.json','utf8'));
 if(manifest.version!==1||await checksum(file)!==manifest.sha256)throw new Error('Backup checksum mismatch; do not restore this file.');
 const pool=createPool(url,{statement_timeout:0}),client=await pool.connect();
 try{
  await client.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');
  const actual=await inventory(client);
  if(JSON.stringify(actual)!==JSON.stringify(manifest.tables))throw new Error('Database does not match the backup: table names, row counts or content differ.');
  await client.query('COMMIT');return manifest;
 }finally{client.release();await pool.end();}
}
export async function restoreDatabase(file,url=process.env.DATABASE_URL){
 const manifest=JSON.parse(await fs.readFile(file+'.json','utf8'));
 if(manifest.version!==1||await checksum(file)!==manifest.sha256)throw new Error('Backup checksum mismatch; restore cancelled.');
 const pool=createPool(url);
 try{
  if((await inventory(pool)).length)throw new Error('Restore requires an empty database. Existing data will not be overwritten.');
  const version=Number((await pool.query('SHOW server_version_num')).rows[0].server_version_num);
  if(Math.floor(version/10000)<Math.floor(manifest.serverVersion/10000))throw new Error('Install the same PostgreSQL major version as the source, or newer, before restoring.');
  await run('pg_restore',['--single-transaction','--exit-on-error','--no-owner','--no-acl','--no-password',path.resolve(file)],url);
 }finally{await pool.end();}
 return verifyDatabase(file,url);
}
if(process.argv[1]&&pathToFileURL(process.argv[1]).href===import.meta.url){
 const [action,file]=process.argv.slice(2);
 try{
  if(!['export','restore','verify'].includes(action))throw new Error('Usage: node scripts/db-transfer.mjs export|restore|verify [backup.dump]');
  if(action!=='export'&&!file)throw new Error('Specify the backup.dump file.');
  const target=file||`runtime/backups/csquest-${new Date().toISOString().replaceAll(':','-')}.dump`;
  const result=await ({export:exportDatabase,restore:restoreDatabase,verify:verifyDatabase}[action])(target);
  console.log(`${action} complete: ${path.resolve(target)} (${result.tables.length} tables; row counts and content fingerprints recorded/verified)`);
 }catch(error){console.error(error.message);process.exitCode=1;}
}
