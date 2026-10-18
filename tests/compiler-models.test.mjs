import test from 'node:test';
import assert from 'node:assert/strict';
import {compilerGrammars as G,firstFollow,llTable,llParse,lrTable,lrParse,rewriteGrammar,expressionTrace,liveness,availableExpressions,cfgTrace,compilerScene} from '../packages/learning/compiler-models.js';
const set=s=>[...s].sort();
function words(alphabet,n){let result=[''],row=[''];for(let i=0;i<n;i++){row=row.flatMap(a=>alphabet.map(b=>a+b));result.push(...row);}return result;}
test('FIRST and FOLLOW propagate nullability and context to a genuine fixed point',()=>{
 const r=firstFollow(G.nullable);assert.deepEqual(set(r.first.S),['a','b','ε']);assert.deepEqual(set(r.follow.A),['$','b']);assert.deepEqual(set(r.follow.B),['$']);
 const cycle=firstFollow('S -> A z; A -> B | ε; B -> A | b');assert.deepEqual(set(cycle.first.S),['b','z']);assert.deepEqual(set(cycle.follow.B),['z']);assert.ok(Object.values(cycle.follow).every(s=>!s.has('ε')));
});
test('LL(1) table detects conflicts and parses entire inputs, including ε',()=>{
 assert.equal(llTable(G.conflict).conflicts.length,1);assert.equal(llTable(G.expression).conflicts.length,0);
 for(const word of words(['i','+'],6)){const tokens=[...word].map(c=>c==='i'?'id':c).join(' ');assert.equal(llParse(G.expression,tokens).accepted,/^i(\+i)*$/.test(word),tokens);}
 assert.equal(llParse(G.nullable,'').accepted,true);assert.equal(llParse(G.nullable,'a a b b').accepted,true);assert.equal(llParse(G.nullable,'b a').accepted,false);
});
test('All four LR constructions accept exactly c*d c*d in an independent exhaustive language check',()=>{
 for(const mode of ['lr0','slr','lr1','lalr']){
  assert.equal(lrTable(G.slr,mode).conflicts.length,0);
  for(const word of words(['c','d'],6))assert.equal(lrParse(G.slr,[...word].join(' '),mode).accepted,/^c*dc*d$/.test(word),mode+':'+word);
 }
 for(const mode of ['slr','lr1','lalr']){assert.equal(lrParse('S -> A; A -> a A | ε','',mode).accepted,true);assert.equal(lrParse('S -> A; A -> a A | ε','a a',mode).accepted,true);}
});
test('SLR approximation and equal-core LALR merging expose the known distinct conflict cases',()=>{
 assert.equal(lrTable(G.slrLimit,'slr').conflicts.length,1);assert.equal(lrTable(G.slrLimit,'lr1').conflicts.length,0);assert.equal(lrParse(G.slrLimit,'id = id','lr1').accepted,true);
 const canonical=lrTable(G.merge,'lr1'),merged=lrTable(G.merge,'lalr');assert.equal(canonical.conflicts.length,0);assert.equal(merged.conflicts.length,2);assert.ok(merged.conflicts.every(([,v])=>v.every(a=>a.startsWith('r'))));assert.ok(merged.states.length<canonical.states.length);
 for(const w of ['a c d','b c e','a c e','b c d'])assert.equal(lrParse(G.merge,w,'lr1').accepted,true);assert.match(lrParse(G.merge,'a c d','lalr').reason,/conflict/);
});
test('Expression translation preserves precedence, associativity, postfix and temporary dependencies',()=>{
 for(let a=1;a<=8;a++)for(let b=1;b<=8;b++){
  assert.equal(expressionTrace(`${a} + ${b} * 4`).value,a+b*4);assert.equal(expressionTrace(`(${a} + ${b}) * 4`).value,(a+b)*4);assert.equal(expressionTrace(`${a} - ${b} - 2`).value,a-b-2);
 }
 assert.deepEqual(expressionTrace('2 + 3 * 4').postfix,['2','3','4','*','+']);assert.deepEqual(expressionTrace('2 + 3 * 4').instructions.map(x=>[x.dest,x.left,x.op,x.right]),[['t1','3','*','4'],['t2','2','+','t1']]);
 for(const bad of ['','2 +','2 + + 3','(2 + 3','2 3','alert(1)','2 / 3','999999999999999999999'])assert.throws(()=>expressionTrace(bad));
});
test('Grammar rewrites produce the expected structure and retain empty tails',()=>{
 assert.deepEqual(rewriteGrammar(G.recursive).rules.map(r=>[r.lhs,r.rhs]),[['E',['T',"E'"]],["E'",['+','T',"E'"]],["E'",[]],['T',['id']]]);
 assert.deepEqual(rewriteGrammar(G.factor,'factor').rules.map(r=>r.rhs),[['a','b',"S'"],['c'],['d']]);assert.throws(()=>rewriteGrammar('S -> S a'));
});
test('Backward may-liveness agrees with an independent reach-use-before-def search, including cycles',()=>{
 const nodes=[{code:'x=x+1',use:['x'],def:['x'],succ:[1]},{code:'branch p',use:['p'],def:[],succ:[0,2]},{code:'y=x',use:['x'],def:['y'],succ:[3]},{code:'return y',use:['y'],def:[],succ:[]}],r=liveness(nodes);
 function liveAt(start,name){const pending=[start],seen=new Set();while(pending.length){const n=pending.pop();if(seen.has(n))continue;seen.add(n);if(nodes[n].use.includes(name))return true;if(!nodes[n].def.includes(name))pending.push(...nodes[n].succ);}return false;}
 for(let i=0;i<nodes.length;i++)for(const name of ['x','y','p','unused']){assert.equal(r.liveIn[i].has(name),liveAt(i,name));assert.equal(r.liveOut[i].has(name),nodes[i].succ.some(s=>liveAt(s,name)));}
});
test('Forward must-availability intersects every predecessor and respects kills and entry boundaries',()=>{
 for(const kill of [false,true]){
  const nodes=[{code:'entry',gen:['a+b'],kill:[],succ:[1,2]},{code:'left',gen:[],kill:kill?['a+b']:[],succ:[3]},{code:'right',gen:['a+b'],kill:[],succ:[3]},{code:'join',gen:[],kill:[],succ:[]}],r=availableExpressions(nodes,['a+b']);
  assert.equal(r.ins[0].size,0);assert.equal(r.ins[3].has('a+b'),!kill);assert.equal(r.outs[3].has('a+b'),!kill);
 }
});
test('Basic-block leaders and edges respect branches, goto and returns',()=>{
 const r=cfgTrace(['x = 1','if p goto 5','x = 2','goto 6','x = 3','return x']);assert.deepEqual(r.blocks.map(b=>[b.start,b.end,b.succ]),[[0,1,[2,1]],[2,3,[3]],[4,4,[3]],[5,5,[]]]);assert.throws(()=>cfgTrace(['goto 99']));
});
test('Editable examples really affect results; bounded and invalid cases remain explicit',()=>{
 assert.notDeepEqual(compilerScene({kind:'first',grammar:'S -> a'}).result.first.S,compilerScene({kind:'first',grammar:'S -> a'},'S -> b').result.first.S);
 assert.equal(compilerScene({kind:'lr',mode:'lr1',view:'items',grammar:G.slr},G.merge).result.states.length,14);
 assert.throws(()=>compilerScene({kind:'ambiguity'},'1 + 2 * 3'));assert.throws(()=>compilerScene({kind:'lexer'},'x @ 2'));
 assert.match(compilerScene({kind:'lr2'}).assumptions,/not a complete LR/);
 for(const word of words(['(',')'],6)){let depth=0,valid=true;for(const c of word){depth+=c==='('?1:-1;if(depth<0)valid=false;}assert.equal(compilerScene({kind:'balanced'},word).result.accepted,valid&&depth===0);}
 for(let value=0;value<=100;value++){const bits=value.toString(2);assert.equal(compilerScene({kind:'positions'},bits).result.value,value);assert.equal(compilerScene({kind:'positions'},'-'+bits).result.value,-value);}
});
