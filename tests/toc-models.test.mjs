import test from 'node:test';
import assert from 'node:assert/strict';
import {words,makeDfa,dfaRun,complementDfa,productDfa,distinguishingWord,minimizeDfa,regexNfa,nfaRun,subsetDfa,grammarRun,grammarDerivation,stackRun,palindromeRun,turingRun,pumpingRun,enumerationRun,diagonalRun,normalFormRun,grammarProperties,tocScene} from '../packages/learning/toc-models.js';

test('TOC DFA languages, total complement and reachable product agree with definitions',()=>{
 for(const w of words(['a','b'],6)){
  const suffix=makeDfa('suffix','aba'),length=makeDfa('length',3);
  assert.equal(dfaRun(suffix,w).accepted,w.endsWith('aba'),w);
  assert.equal(dfaRun(length,w).accepted,w.length%3===0,w);
  assert.equal(dfaRun(complementDfa(suffix),w).accepted,!w.endsWith('aba'));
  assert.equal(dfaRun(productDfa(suffix,length),w).accepted,w.endsWith('aba')&&w.length%3===0);
 }
 for(const w of words(['0','1'],7))assert.equal(dfaRun(makeDfa('remainder',3),w).accepted,(w?parseInt(w,2):0)%3===0);
 assert.throws(()=>complementDfa({states:['q'],alphabet:['a'],start:'q',finals:[],delta:{q:{}}}),/missing/);
 assert.equal(distinguishingWord(makeDfa('even'),'even','odd'),'');
 assert.equal(minimizeDfa(makeDfa('length',3)).groups.length,3);
});
test('TOC Thompson construction and epsilon subset construction preserve languages',()=>{
 for(const [expression,predicate] of [['(a|b)*ab',w=>w.endsWith('ab')],['(a|ε)b*',w=>/^a?b*$/.test(w)],['(a*)*',w=>/^a*$/.test(w)],['∅',()=>false],['ε',w=>w==='']]){
  const nfa=regexNfa(expression),dfa=subsetDfa(nfa);
  for(const w of words(['a','b'],5)){assert.equal(nfaRun(nfa,w).accepted,predicate(w),expression+' '+w);assert.equal(dfaRun(dfa,w).accepted,predicate(w));}
 }
 assert.throws(()=>regexNfa('(a|b'),/./);
});
test('TOC chart parser handles epsilon, recursive and ambiguous grammars',()=>{
 for(const w of words(['a','b'],6)){
  assert.equal(grammarRun('S -> aSb | ε',w).accepted,/^a*b*$/.test(w)&&[...w].filter(c=>c==='a').length===w.length/2,w);
  assert.equal(grammarRun('S -> SS | a | ε',w).accepted,/^a*$/.test(w),w);
  assert.equal(grammarRun('S -> AB; A -> ε | aA; B -> ε | bB',w).accepted,/^a*b*$/.test(w),w);
 }
});
test('TOC stack models reject wrong ordering and distinguish midpoint strategies',()=>{
 for(const w of words(['a','b'],7)){
  assert.equal(stackRun(w).accepted,/^a*b*$/.test(w)&&w.length===[...w].filter(c=>c==='a').length*2,w);
  assert.equal(stackRun(w,{aWeight:2}).accepted,/^a*b*$/.test(w)&&[...w].filter(c=>c==='b').length===2*[...w].filter(c=>c==='a').length,w);
  assert.equal(palindromeRun(w).accepted,w.length%2===0&&w===[...w].reverse().join(''),w);
 }
 assert.equal(palindromeRun('ab#ba',true).accepted,true);
 assert.equal(palindromeRun('ab#ab',true).accepted,false);
});
test('TOC grammar illustrations show real leftmost rewrites and never turn a search bound into rejection',()=>{
 for(const [grammar,input] of [['S -> aSb | ε','aabb'],['S -> SS | a | ε','aaa'],['S -> AB; A -> ε | aA; B -> bB | ε','aabb'],['S -> aS | bA; A -> bA | ε','aabbb'],['S -> ε','']]){
  const path=grammarDerivation(grammar,input);assert.ok(path);assert.equal(path[0].form,'S');assert.equal(path.at(-1).form,input);
  for(let i=1;i<path.length;i++){const previous=path[i-1].form,rule=path[i].rule,at=previous.search(/[A-Z]/);assert.equal(previous[at],rule.lhs);assert.equal(path[i].form,previous.slice(0,at)+rule.rhs.join('')+previous.slice(at+1));}
  assert.equal(tocScene({kind:'grammar',grammar,input}).result.accepted,true);
 }
 assert.equal(grammarDerivation('S -> aSb | ε','aabb',1),null);
 assert.equal(grammarRun('S -> aSb | ε','aabb').accepted,true);
 assert.equal(tocScene({kind:'grammar',grammar:'S -> aSb | ε',input:'aab'}).result.accepted,false);
 assert.throws(()=>regexNfa('.a'));assert.throws(()=>regexNfa('a.'));
 assert.equal(nfaRun(regexNfa('a|0'), '0').accepted,true);
 assert.throws(()=>nfaRun(regexNfa('a*',['a']),'b'));
});
test('TOC tape execution distinguishes accept, reject, halt and exhausted budget',()=>{
 for(const w of words(['a','b'],6))assert.equal(turingRun(w).outcome==='accept',/^a*b*$/.test(w)&&[...w].filter(c=>c==='a').length===w.length/2,w);
 assert.equal(turingRun('111','unary').output,'1111');
 assert.equal(turingRun('111','binary').output,'1000');
 assert.equal(turingRun('','binary').output,'1');
 const bounded=turingRun('01','loop',8);assert.equal(bounded.halted,false);assert.equal(bounded.outcome,'limit');
});
test('TOC proofs, grammar checks and countable enumerations retain their qualifications',()=>{
 for(let p=2;p<=8;p++)for(let k=1;k<=p;k++)assert.equal(pumpingRun(p,k,0).inLanguage,false);
 assert.equal(normalFormRun('S -> AB; A -> a; B -> b').valid,true);
 assert.equal(normalFormRun('S -> aB; B -> b').valid,false);
 assert.equal(normalFormRun('S -> aB; B -> b','GNF').valid,true);
 const props=grammarProperties('S -> AB | a; A -> a; B -> B; C -> b');assert.deepEqual(props.useful,[{lhs:'S',rhs:['a']}]);
 const e=enumerationRun('rationals',20);assert.equal(e.frames.length>1,true);
 const d=diagonalRun(5);for(let i=0;i<5;i++)assert.notEqual(d.flipped[i],d.matrix[i][i]);
 for(const kind of ['words','language','dfa','regex','nfa','subset','minimize','grammar','grammar-properties','normal-form','pda','palindrome','tm','pumping','nerode','closure','hierarchy','enumeration','diagonal','decision','dovetail','reduction'])assert.ok(tocScene({kind}).frames.length>=1,kind);
});
