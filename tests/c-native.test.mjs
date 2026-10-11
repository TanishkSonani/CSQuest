import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {lessons} from '../courses/c/content/lessons.js';

test('defined C code puzzle outputs match GCC with C11 at two optimization levels',{skip:process.platform==='win32',timeout:120000},async()=>{
 const folder=await fs.mkdtemp(path.join(os.tmpdir(),'csquest-c-check-'));
 let checked=0;
 try{
  for(const l of lessons)for(const q of l.questions.filter(q=>(q.type==='number'&&q.code)||q.type==='c-program')){
   const source=path.join(folder,'example.c'),binary=path.join(folder,'example');
   const complete=q.type==='c-program'?q.template.replace(/\{\{(\d+)\}\}/g,(_,i)=>q.answer[Number(i)]):'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n'+q.setup+'\nint main(void) {\n'+q.code+'\nreturn 0;\n}\n';
   await fs.writeFile(source,complete);
   for(const optimization of ['-O0','-O2']){
    const compile=spawnSync('gcc',['-std=c11',optimization,'-Wall','-Wextra',source,'-o',binary],{encoding:'utf8',timeout:10000});
    assert.equal(compile.status,0,`${l.id}: ${q.prompt}\n${compile.stderr}`);
    const run=spawnSync(binary,[],{encoding:'utf8',timeout:2000});
    assert.equal(run.status,0,`${l.id}: ${q.prompt}\n${run.stderr}`);
    assert.equal(Number(run.stdout.trim()),q.type==='c-program'?q.expectedOutput:q.answer,`${l.id}: ${q.prompt}\n${complete}`);
   }
   checked++;
  }
  assert.ok(checked>200);console.log(`${checked} C snippets verified at -O0 and -O2.`);
 }finally{await fs.rm(folder,{recursive:true,force:true});}
});
