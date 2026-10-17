import test from 'node:test';
import assert from 'node:assert/strict';
import {calculate} from '../packages/learning/calculator.js';
import {diagramKind,diagramModel,diagramControls} from '../packages/learning/visual-models.js';

test('calculator respects precedence, decimals, signs, percentages and grouping',()=>{
 for(const [expression,expected] of [['2+3*4',14],['(2+3)*4',20],['200*25%',50],['-3*-2',6],['.1+.2',.3],['1e-7*10',.000001],['-(4+2)/3',-2],['-0',0]])assert.equal(calculate(expression),expected);
});
test('calculator rejects invalid, unbounded and nonfinite expressions',()=>{
 for(const expression of ['1/0','1e309','2+','2(3)','Math.random()','alert(1)','('.repeat(25)+'1'+')'.repeat(25),'1'.repeat(161)])assert.throws(()=>calculate(expression));
});
test('all 1716 lessons have a semantic diagram; every interactive range yields valid data',async()=>{
 let count=0;const kinds=new Set();
 for(const subject of ['coa','dl','c','ds','aptitude','algo','os','cn']){
  const {lessons}=await import(`../courses/${subject}/content/lessons.js`);
  for(const lesson of lessons){const kind=diagramKind(subject,lesson);assert.ok(kind,`${subject}/${lesson.id}`);assert.ok(!kind.endsWith('undefined'));kinds.add(kind);count++;}
 }
 assert.equal(count,1716);
 for(const kind of kinds){if(kind.includes(':'))continue;const controls=diagramControls(kind),variants=[[],...controls.flatMap((c,i)=>[c[1],c[2]].map(value=>controls.map((d,j)=>j===i?value:d[4])))];for(const values of variants){const model=diagramModel(kind,...values);assert.ok(model.title&&model.caption);assert.doesNotMatch(JSON.stringify(model),/NaN|undefined|null/);}}
});
test('cache, arithmetic, timing and pointer diagrams preserve their stated rules',()=>{
 assert.deepEqual(diagramModel('cache',26).values,[1,2,2]);
 assert.deepEqual(diagramModel('amat',10).values,[2,4,6]);
 assert.deepEqual(diagramModel('capacity',10,8).values,[1024,8,'1024 bytes']);
 assert.equal(diagramModel('gate',1,0).output,0);assert.equal(diagramModel('gate',1,1).output,1);
 assert.equal(diagramModel('parity',7).output,1);
 assert.match(diagramModel('flags',7).caption,/Signed interpretation is 7\+1/);
 assert.match(diagramModel('pointer-stride',4).rows[0][2],/do not dereference/);
 assert.deepEqual(diagramModel('frequency',3).values,[800,400,200,100]);
 assert.equal(diagramModel('conversion',7).rows[1][1],3.5);
});
