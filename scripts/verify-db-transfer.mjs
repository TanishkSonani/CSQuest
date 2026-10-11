// Explicit integration check: creates and removes only uniquely named test databases.
import {randomUUID} from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createPool} from '../src/platform/database.mjs';
import {exportDatabase,restoreDatabase,verifyDatabase} from './db-transfer.mjs';
const admin=createPool(),suffix=randomUUID().replaceAll('-','');
const names=['csquest_transfer_source_'+suffix,'csquest_transfer_target_'+suffix];
const urls=names.map(name=>{const url=new URL(process.env.DATABASE_URL);url.pathname='/'+name;return url.href;});
const external=process.argv[2];
const file=path.resolve(external||'runtime/backups/transfer-test-'+suffix+'.dump');
const created=[];
try{
 for(const name of external?names.slice(1):names){await admin.query(`CREATE DATABASE "${name}"`);created.push(name);}
 if(!external){
 const source=createPool(urls[0]);
 try{await source.query("CREATE TABLE example (id int PRIMARY KEY, value jsonb, saved_at timestamptz DEFAULT now()); INSERT INTO example(id,value) VALUES (1, '{\"progress\":42,\"name\":\"learner\"}'), (2, '{\"friends\":[1,2]}')");await admin.query(`ALTER DATABASE "${names[0]}" SET timezone TO 'Asia/Calcutta'`);}finally{await source.end();}
 await exportDatabase(file,urls[0]);
 }
 await restoreDatabase(file,urls[1]);
 try{await restoreDatabase(file,urls[1]);throw Error('Populated database was not rejected');}catch(error){if(!error.message.includes('empty database'))throw error;}
 if(!external){
 const target=createPool(urls[1]);try{await target.query("UPDATE example SET value='{}' WHERE id=1");}finally{await target.end();}
 try{await verifyDatabase(file,urls[1]);throw Error('Changed content was not detected');}catch(error){if(!error.message.includes('does not match'))throw error;}
 await fs.appendFile(file,'corruption');
 try{await verifyDatabase(file,urls[0]);throw Error('Corrupt file was not rejected');}catch(error){if(!error.message.includes('checksum mismatch'))throw error;}
 }
 console.log(external?'Local backup restored successfully into an isolated database; all table row counts and content fingerprints match.':'Database transfer passed: full restore, overwrite protection, content validation and corruption detection.');
}finally{
 for(const name of created)await admin.query(`DROP DATABASE "${name}"`);
 await admin.end();if(!external){await fs.rm(file,{force:true});await fs.rm(file+'.json',{force:true});}
}
