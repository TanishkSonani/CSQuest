import test from 'node:test';
import assert from 'node:assert/strict';
import {lessons} from '../courses/toc/content/lessons.js';
import {questionIdentity} from '../packages/learning/quiz-identity.js';

test('TOC advanced assessments test their named model rather than unrelated DFA drills',()=>{
 for(const lesson of lessons){
  const spec=lesson.tocSpec,questions=lesson.questions.slice(1);
  if(spec.kind==='normal-form')for(const q of questions)assert.equal(q.assessment?.domain,'normal-form');
  if(spec.kind==='decision'&&spec.model==='TM')for(const q of questions){assert.equal(q.assessment?.domain,'tm-decision');assert.doesNotMatch(q.prompt,/concrete finite-state check|residue modulo/);}
  if(spec.kind==='decision'&&spec.model==='CFG')for(const q of questions)assert.equal(q.assessment?.domain,'cfg-decision');
  if(spec.kind==='hierarchy')for(const q of questions){assert.equal(q.assessment?.domain,'language-family');assert.doesNotMatch(q.prompt,/Can word .*finite residue memory/);}
  if(spec.kind==='enumeration')for(const q of questions){assert.match(q.assessment?.domain||'',/^enumeration-/);assert.doesNotMatch(q.prompt,/Which explanation matches its stated ordering/);}
  for(const q of lesson.questions)assert.equal(q.revision,2);
  assert.equal(lesson.contentVersion,2);
 }
});
test('TOC normal-form answers independently satisfy each written production convention',()=>{
 const selected=lessons.filter(l=>l.tocSpec.kind==='normal-form').flatMap(l=>l.questions.slice(1));assert.equal(selected.length,9);
 let yes=0,no=0;
 for(const q of selected){
  const {grammar,form}=q.assessment,rules=grammar.split(';').map(text=>text.trim().split(/\s*->\s*/)),start=rules[0][0],startOnRight=rules.some(([,rhs])=>rhs.includes(start));
  const invalid=rules.filter(([lhs,rhs])=>!(rhs==='ε'?lhs===start&&!startOnRight:form==='CNF'?/^(?:[A-Z]{2}|[a-z])$/.test(rhs):/^[a-z][A-Z]*$/.test(rhs))).length;
  if(q.type==='number')assert.equal(q.answer,invalid);else{assert.equal(q.options[q.answer],invalid===0?'Yes':'No');if(invalid===0)yes++;else no++;}
 }
 assert.ok(yes&&no,'Both valid and invalid normal-form examples must be assessed');
});
test('TOC fixed-point, bounded-halting and closure questions retain the important distinctions',()=>{
 const at=id=>lessons.slice(id*3,id*3+3).flatMap(l=>l.questions.slice(1));
 const bounded=at(131).find(q=>q.prompt.includes('finite bound is part'));assert.equal(bounded.options[bounded.answer],'Yes');
 const timeout=at(130).find(q=>q.prompt.includes('not halted after'));assert.equal(timeout.options[timeout.answer],'The eventual outcome is still unknown');
 const cfg=at(129);assert.equal(cfg.find(q=>q.prompt.includes('L(G)=L(H)')).options[cfg.find(q=>q.prompt.includes('L(G)=L(H)')).answer],'No');
 const closure=at(102).find(q=>q.prompt.includes('arbitrary CFLs closed under complement'));assert.equal(closure.options[closure.answer],'No');
 assert.ok(at(132).some(q=>q.assessment?.domain==='rice-syntax'));assert.ok(at(132).some(q=>q.assessment?.domain==='rice-semantic'));
});
test('Quiz deduplication distinguishes actual mathematical givens but ignores option rotation',()=>{
 const q={type:'choice',prompt:'Is the written grammar in CNF?',options:['Yes','No'],answer:0,tocGiven:{title:'Rules',headers:['Production'],rows:[['S → AB'],['A → a'],['B → b']]}};
 assert.notEqual(questionIdentity(q),questionIdentity({...q,tocGiven:{...q.tocGiven,rows:[['S → aB'],['B → b']]}}));
 assert.equal(questionIdentity(q),questionIdentity({...q,options:['No','Yes'],answer:1}));
});
test('Encoding and equivalence drills agree with independent field and reachable-pair calculations',()=>{
 for(const q of lessons.slice(119*3,120*3).flatMap(l=>l.questions.slice(1))){
  assert.equal(q.assessment.domain,'machine-encoding');
  const [,states]=q.prompt.match(/states q0…q(\d+)/),n=Number(states)+1,bits=Math.ceil(Math.log2(n));
  if(q.type==='number')assert.equal(q.answer,2*bits+1);
  else if(q.prompt.includes('Decode record')){const record=q.prompt.match(/Decode record ([01]+)/)[1];assert.equal(q.options[q.answer],`q${parseInt(record.slice(-bits),2)}`);}
  else{const candidate=parseInt(q.prompt.match(/binary field ([01]+)/)[1],2);assert.equal(q.options[q.answer],candidate<n?'Yes':'No');}
 }
 for(const q of lessons.slice(125*3,126*3).flatMap(l=>l.questions.slice(1))){
  assert.equal(q.assessment.domain,'dfa-equivalence');const rows=q.tocGiven.rows,different=rows.flatMap((r,i)=>r[2]!==r[3]?[i]:[]);
  if(q.type==='choice')assert.equal(q.options[q.answer],different.length===0?'Yes':'No');
  else if(q.prompt.includes('shortest length'))assert.equal(q.answer,Math.min(...different));
  else assert.equal(q.answer,different.length);
 }
});
