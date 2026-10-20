import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {libraryFixture} from './library-fixture.mjs';
const run=promisify(execFile);

test('storage diagnostic reads actual disks without deleting expired uploads and production cannot invent a block volume',async t=>{
 const f=await libraryFixture(t);await f.ok(await f.req('storage'));
 const upload=await f.ok(await f.req('upload',{drive:'boot',name:'diagnostic-partial.bin',size:8}));await f.ok(await f.req(`chunk?id=${upload.id}&offset=0`,Buffer.from('data'),{method:'PUT'}));
 await f.db.store.pool.query("UPDATE csquest_library_entries SET expires_at=now()-interval '1 minute' WHERE id=$1",[upload.id]);
 const connection=new URL(f.db.store.pool.options.connectionString),schema=f.db.store.pool.options.options.match(/search_path=(\w+)/)[1];connection.searchParams.set('options','-c search_path='+schema);
 const env={...process.env,LIBRARY_OBJECT_BUCKET:'',DATABASE_URL:connection.href,NODE_ENV:'development',LIBRARY_BOOT_ROOT:f.drives[0].root,LIBRARY_BLOCK_ROOT:f.drives[1].root};
 const result=await run(process.execPath,['scripts/library-storage.mjs'],{env,windowsHide:true});const diagnostic=JSON.parse(result.stdout);
 assert.equal(diagnostic.sharedFilesystem,true);assert.equal(diagnostic.drives.length,2);
 assert.deepEqual(diagnostic.drives.map(d=>d.quota),[35*1024**3,125*1024**3]);
 for(const drive of diagnostic.drives){assert.equal(drive.online,true);assert.ok(drive.total>0);assert.ok(drive.available>=0&&drive.available<=drive.quota);assert.match(drive.display.availableForLibrary,/ (B|KB|MB|GB)$/);}
 assert.equal(await fs.readFile(path.join(f.drives[0].root,upload.id),'utf8'),'data');assert.equal((await f.db.store.pool.query('SELECT 1 FROM csquest_library_entries WHERE id=$1',[upload.id])).rowCount,1);
 let production;try{production=await run(process.execPath,['scripts/library-storage.mjs'],{env:{...env,NODE_ENV:'production'},windowsHide:true});}catch(error){assert.equal(error.code,2);production=error;}
 const block=JSON.parse(production.stdout).drives.find(d=>d.id==='block');assert.equal(block.online,false);assert.equal(Object.hasOwn(block,'available'),false);
});
