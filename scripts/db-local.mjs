import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';
import {randomBytes} from 'node:crypto';
import pg from 'pg';

const root=fileURLToPath(new URL('../',import.meta.url)),directory=path.join(root,'.local-postgres');
const cluster=path.join(directory,'cluster');
const bin=process.env.PG_BIN||'C:/Program Files/PostgreSQL/18/bin';
const executable=name=>path.join(bin,name+(process.platform==='win32'?'.exe':''));
async function run(name,args){
 return new Promise((resolve,reject)=>{
  const child=spawn(executable(name),args,{windowsHide:true,stdio:['ignore','pipe','pipe']});let output='';
  child.stdout.on('data',value=>{output+=value;});child.stderr.on('data',value=>{output+=value;});
  child.on('error',reject);child.on('exit',code=>{child.stdout.destroy();child.stderr.destroy();code===0?resolve(output):reject(new Error(`${name} failed: ${output}`));});
 });
}
const exists=async file=>{try{await fs.access(file);return true;}catch{return false;}};
if(process.argv[2]==='stop'){
 if(await exists(path.join(cluster,'postmaster.pid')))await run('pg_ctl',['-D',cluster,'-m','fast','-w','stop']);
 console.log('Local CSQuest PostgreSQL stopped.');
}else{
 await fs.access(executable('initdb'));
 const envFile=path.join(root,'.env'),port=55432;
 if(!await exists(path.join(cluster,'PG_VERSION'))){
  if(await exists(envFile))throw new Error('A .env file already exists. Configure its existing PostgreSQL database, or move it before using db:local.');
  await fs.mkdir(directory,{recursive:true});const password=randomBytes(32).toString('hex'),passwordFile=path.join(directory,'init-password');
  try{
   await fs.writeFile(passwordFile,password,{mode:0o600});
   // initdb requires an empty target directory, so keep its password file outside it.
   await run('initdb',['-D',cluster,'-U','csquest','--auth=scram-sha-256','--encoding=UTF8','--locale=C','--pwfile='+passwordFile]);
   await fs.writeFile(envFile,`DATABASE_URL=postgresql://csquest:${password}@127.0.0.1:${port}/csquest\n`,{mode:0o600,flag:'wx'});
  }finally{await fs.rm(passwordFile,{force:true});}
 }
 // Existing clusters are started without creating or overwriting account data.
 if(!await exists(path.join(cluster,'postmaster.pid')))await run('pg_ctl',['-D',cluster,'-l',path.join(directory,'postgres.log'),'-o',`-h 127.0.0.1 -p ${port}`,'-w','start']);
 const configuration=await fs.readFile(envFile,'utf8');
 const connectionString=configuration.match(/^DATABASE_URL=(.+)$/m)?.[1].trim();
 const url=new URL(connectionString);
 if(url.hostname!=='127.0.0.1'||url.port!==String(port)||url.username!=='csquest'||url.pathname!=='/csquest')throw new Error('Local setup requires the generated localhost DATABASE_URL. Use db:migrate for an existing database.');
 if(process.env.DATABASE_URL&&process.env.DATABASE_URL!==connectionString)throw new Error('DATABASE_URL already points elsewhere. Clear it before using local db:setup.');
 url.pathname='/postgres';
 const client=new pg.Client({connectionString:url.href});await client.connect();
 try{if(!(await client.query("SELECT 1 FROM pg_database WHERE datname='csquest'")).rowCount)await client.query('CREATE DATABASE csquest');}finally{await client.end();}
 console.log(`Local CSQuest PostgreSQL is ready on 127.0.0.1:${port}. Credentials are saved in ignored .env.`);
}
