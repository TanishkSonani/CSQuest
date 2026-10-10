import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {syncCourse} from '../src/platform/sync.mjs';
async function fixture(){
 const folder=await fs.mkdtemp(path.join(os.tmpdir(),'coa-sync-test-'));
 // Verify the absolute cleanup target is an owned fixture inside the temporary directory.
 assert.equal(path.dirname(path.resolve(folder)),path.resolve(os.tmpdir()));
 assert.ok(path.basename(folder).startsWith('coa-sync-test-'));
 const root=path.join(folder,'app'),source=path.join(folder,'source'),analysis=path.join(source,'analysis');
 await fs.mkdir(path.join(analysis,'transcripts'),{recursive:true});
 await fs.writeFile(path.join(analysis,'inventory.json'),JSON.stringify([{file:'000.mp4',seconds:100},{file:'001.mp4',seconds:300}]));
 return {folder,root,source,analysis};
}
test('incomplete files do not import; completion markers trigger atomic import',async()=>{const f=await fixture();try{await fs.writeFile(path.join(f.analysis,'transcripts','000.jsonl'),JSON.stringify({start:0,end:2,text:'Hello course'})+'\n');let s=await syncCourse(f);assert.equal(s.completed,0);assert.equal(s.imported,0);assert.equal(s.phase,'stopped');await fs.writeFile(path.join(f.analysis,'transcripts','000.done'),'{}');s=await syncCourse(f);assert.equal(s.completed,1);assert.equal(s.imported,1);assert.equal(s.percent,25);const imported=JSON.parse(await fs.readFile(path.join(f.root,'data','transcripts','0.json'),'utf8'));assert.equal(imported.segments[0].text,'Hello course');await assert.rejects(fs.stat(path.join(f.root,'data','TRANSCRIPTION_COMPLETE.md')));}finally{await fs.rm(f.folder,{recursive:true,force:true});}});
test('drive loss preserves imported content and marks the source unavailable',async()=>{const f=await fixture();try{await fs.writeFile(path.join(f.analysis,'transcripts','000.jsonl'),JSON.stringify({start:0,end:1,text:'Keep me'}));await fs.writeFile(path.join(f.analysis,'transcripts','000.done'),'{}');await syncCourse(f);const s=await syncCourse({...f,source:path.join(f.folder,'disconnected')});assert.equal(s.sourceAvailable,false);assert.equal(s.imported,1);assert.ok(await fs.stat(path.join(f.root,'data','transcripts','0.json')));}finally{await fs.rm(f.folder,{recursive:true,force:true});}});
test('all completed transcripts produce a completion notice and lesson references',async()=>{const f=await fixture();try{for(const id of ['000','001']){await fs.writeFile(path.join(f.analysis,'transcripts',id+'.jsonl'),JSON.stringify({start:0,end:1,text:'Reviewed source pending'}));await fs.writeFile(path.join(f.analysis,'transcripts',id+'.done'),'{}');}const s=await syncCourse(f);assert.equal(s.phase,'complete');assert.equal(s.imported,2);assert.equal(s.percent,100);assert.equal(s.lessonSources.length,6);assert.ok(s.lessonSources.every(l=>l.ready&&l.excerpt));assert.match(await fs.readFile(path.join(f.root,'data','TRANSCRIPTION_COMPLETE.md'),'utf8'),/All 2 transcripts/);}finally{await fs.rm(f.folder,{recursive:true,force:true});}});
test('corrupt completed text reports an import error rather than claiming readiness',async()=>{const f=await fixture();try{for(const id of ['000','001']){await fs.writeFile(path.join(f.analysis,'transcripts',id+'.jsonl'),id==='000'?'broken json':JSON.stringify({start:0,end:1,text:'Good source'}));await fs.writeFile(path.join(f.analysis,'transcripts',id+'.done'),'{}');}const s=await syncCourse(f);assert.equal(s.completed,2);assert.equal(s.imported,1);assert.equal(s.phase,'import-error');await assert.rejects(fs.stat(path.join(f.root,'data','TRANSCRIPTION_COMPLETE.md')));}finally{await fs.rm(f.folder,{recursive:true,force:true});}});
