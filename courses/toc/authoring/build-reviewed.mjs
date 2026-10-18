import fs from 'node:fs/promises';
import {topics,sections,glossary} from './topics.js';
import {alignedQuestion,misconceptions} from './assessments.js';
import {tocScene,tocExperiment,makeDfa,words,grammarProperties,decisionFacts,minimizeDfa,dfaRun} from '../../../packages/learning/toc-models.js';
const base=new URL('../',import.meta.url);
const choice=(prompt,correct,wrong,explanation,given)=>{
 let options=[correct,...wrong].map(String).filter((v,i,a)=>a.indexOf(v)===i);
 if(options.length<2)throw Error('A puzzle needs distinct alternatives: '+prompt);
 const rotation=[...prompt+JSON.stringify(given||null)].reduce((n,c)=>(n*31+c.codePointAt(0))>>>0,0)%options.length;
 options=[...options.slice(rotation),...options.slice(0,rotation)];
 return {type:'choice',prompt,options,answer:options.indexOf(String(correct)),explanation,...(given?{tocGiven:given}:{})};
};
const number=(prompt,answer,explanation,given)=>({type:'number',prompt,answer,tolerance:0,explanation,...(given?{tocGiven:given}:{})});
const shown=w=>w===''?'ε':w;
const allWords=words(['a','b'],8);
function variedSpec(topic,stage,variant){
 const spec={...topic.spec,title:topic.title};
 const seed=topics.indexOf(topic)*13+stage*7+variant;
 if(spec.kind==='language'){spec.words=['',allWords[1+seed%30],allWords[31+seed%60]];spec.other=[allWords[1+(seed*3)%30],allWords[31+(seed*7)%60]];}
 if(spec.kind==='pumping'){spec.split=1+Math.floor(seed/7)%Math.max(1,spec.parameter||4);spec.power=Math.floor(seed/3)%4;}
 if(['pumping','nerode','diagonal','dovetail','enumeration'].includes(spec.kind))spec.parameter=spec.kind==='enumeration'?6+seed%16:spec.kind==='diagonal'?2+seed%7:spec.kind==='pumping'?2+seed%10:1+seed%8;
 else if(spec.kind==='minimize')spec.input=(seed%16).toString(2).padStart(4,'0');
 else if(['dfa','nfa','regex','subset','grammar','words','language','closure','pda','palindrome','tm'].includes(spec.kind)){
  let input=allWords[seed%allWords.length];
  if(spec.kind==='dfa'&&['even','remainder'].includes(spec.machine))input=input.replaceAll('a','0').replaceAll('b','1');
  if(spec.kind==='tm'&&spec.machine==='unary')input='1'.repeat(seed%13);
  else if(spec.kind==='tm'&&['loop','binary'].includes(spec.machine))input=input.replaceAll('a','0').replaceAll('b','1');
  if(spec.kind==='palindrome'&&spec.marker){const left=allWords[1+seed%60];input=left+'#'+(seed%2?[...left].reverse().join(''):left+'a');}
  if(spec.kind==='pda'&&seed%2===0){const a=1+seed%4,b=Math.max(0,Math.floor((a*(spec.aWeight||1)+(spec.offset||0))/(spec.bWeight||1))+(variant%3-1));input='a'.repeat(a)+'b'.repeat(Math.min(10,b));}
  if(spec.alphabet?.length===1)input=spec.alphabet[0].repeat(input.length);
  spec.input=input;
 }
 return spec;
}
function context(spec){
 const bits=[];
 if(spec.expression)bits.push(`Expression: ${spec.expression}`);
 if(spec.grammar)bits.push(`Productions (first left side is the start): ${spec.grammar}`);
 if(spec.kind==='dfa'){
  const properties={even:'an even count of 1 bits',length:`length divisible by ${spec.modulus||3}`,remainder:`binary numeric value divisible by ${spec.modulus||3}, treating ε as zero`,prefix:'prefix ab',suffix:`suffix ${spec.pattern||'ab'}`,contains:`substring ${spec.pattern||'ab'}`,'empty-word':'only ε','second-last':'a as the second-last symbol'};
  bits.push(`Use the complete DFA shown for ${properties[spec.machine]}.`);
 }
 if(spec.kind==='pda')bits.push(`Require a*b* order; signed difference D=${spec.offset||0}+${spec.aWeight||1}×count(a)−${spec.bWeight||1}×count(b); require D ${spec.relation==='greater'?'>0':spec.relation==='less'?'<0':spec.relation==='unequal'?'≠0':'=0'}. ${spec.allowEmpty===false?'Exclude':'Allow'} ε if it meets the condition.`);
 if(spec.kind==='palindrome')bits.push(spec.marker?'Language {w#wᴿ : w∈{a,b}*}; exactly one #.':'Language {wwᴿ : w∈{a,b}*}; even palindromes.');
 if(spec.kind==='tm')bits.push(`Machine: ${spec.machine||'match'}; ${spec.machine==='unary'?'append one 1':spec.machine==='binary'?'increment the binary value by one':spec.machine==='loop'?'move right forever without halting':'mark a/b pairs and decide a^n b^n, n≥0'}; budget ${spec.limit||240} transitions.`);
 if(spec.kind==='closure')bits.push(`Universe {a,b}*. L₁=${spec.left||'even-a'}, L₂=${spec.right||'contains-b'}. even-a means an even a-count; contains-b means at least one b; anbn means a^n b^n; not-anbn is its complement.`);
 if(spec.kind==='language')bits.push(`L={${(spec.words||['','a','ab']).map(shown)}}; R={${(spec.other||['b','ab']).map(shown)}}.`);
 return bits.join(' ');
}
function prediction(topic,stage,variant){
 const aligned=alignedQuestion(topic,stage,variant,{choice,number,index:topics.indexOf(topic),words:allWords});if(aligned)return aligned;
 const spec=variedSpec(topic,stage,variant),scene=tocScene(spec),r=scene.result,k=spec.kind,input=spec.input??'';
 const prefix=context(spec),promptWord=`For word ${shown(input)}, `;
 if(['dfa','nfa','regex','subset','grammar','palindrome'].includes(k)){
  if(variant%2===0&&k==='dfa')return choice(`${prefix} ${promptWord}which state remains after the entire input?`,r.state,makeDfa(spec.machine,spec.modulus||spec.pattern||3).states.filter(q=>q!==r.state),`Follow one transition per symbol; the final state is ${r.state}.`,initial(scene));
  return choice(`${prefix} ${promptWord}does a complete accepting computation exist?`,r.accepted?'Yes':'No',[r.accepted?'No':'Yes'],`${r.accepted?'Accept':'Reject'}. ${r.frames.at(-1).caption}`,initial(scene));
 }
 if(k==='pda')return variant%2===0?number(`${prefix} After consuming ${shown(input)}, what is D?`,r.balance,`Start at ${spec.offset||0}, add ${spec.aWeight||1} per a and subtract ${spec.bWeight||1} per b. Final D=${r.balance}; block order is checked separately.`):choice(`${prefix} Does the entire word ${shown(input)} satisfy this language?`,r.accepted?'Yes':'No',[r.accepted?'No':'Yes'],r.frames.at(-1).caption,initial(scene));
 if(k==='tm')return spec.machine==='binary'||spec.machine==='unary'?choice(`${prefix} Starting with tape word ${shown(input)}, what nonblank output remains at halt?`,r.output,[input,input+'0',input+'11'].filter(s=>s!==r.output).map(shown),`The output is ${shown(r.output)}; ${r.frames.at(-1).caption}`,initial(scene)):choice(`${prefix} For input ${shown(input)}, which outcome is justified?`,r.outcome==='limit'?'Budget exhausted; no halting conclusion':r.outcome==='accept'?'Accept':'Reject',['Accept','Reject','Budget exhausted; no halting conclusion'].filter(v=>v!==(r.outcome==='limit'?'Budget exhausted; no halting conclusion':r.outcome==='accept'?'Accept':'Reject')),r.frames.at(-1).caption,initial(scene));
 if(k==='words')return variant%2===0?number(`Take the word ${shown(input)} over {a,b}. How many prefix lengths are possible, including zero and the full length?`,input.length+1,`Every integer from 0 to ${input.length} selects one prefix: ${input.length+1} choices.`):choice(`Reverse the word ${shown(input)} over {a,b}. Which word results?`,shown([...input].reverse().join('')),[shown(input+'a'),shown('b'+input)],'Reversal reads the same positions from right to left.');
 if(k==='language'){
  const l=spec.words||['','a','ab'],rr=spec.other||['b','ab'],set=[...new Set(l.flatMap(a=>rr.map(b=>a+b)))];
  return variant%2===0?number(`${prefix} How many distinct words are in LR?`,set.length,`Join every left word with every right word, then remove duplicates: {${set.map(shown)}}.`):choice(`${prefix} Is ${shown(input)} a member of LR?`,set.includes(input)?'Yes':'No',[set.includes(input)?'No':'Yes'],`LR={${set.map(shown)}}.`);
 }
 if(k==='closure'){
  const result=r.frames.at(-1).rows[0],operation=variant%4,label=['union L₁∪L₂','intersection L₁∩L₂','difference L₁−L₂','complement of L₁'][operation];
  return choice(`${prefix} Does word ${shown(input)} belong to the ${label}?`,result[operation],[result[operation]==='Yes'?'No':'Yes'],`Evaluate the two operand memberships, then apply ${label}. ${r.frames.at(-1).caption}`);
 }
 if(k==='minimize'){
  const seed=topics.indexOf(topic)*11+stage*7+variant,m=2+seed%7,machine=makeDfa('length',m),mask=(seed*7+3)%(2**m);machine.finals=machine.states.filter((q,i)=>mask&(1<<i));
  const trace=minimizeDfa(machine);
  return number(`A complete DFA has states r0…r${m-1}, start r0, alphabet {a,b}, and both symbols move rj to r((j+1) mod ${m}). Accepting states: {${machine.finals.join(', ')||'none'}}. How many states remain after minimization?`,trace.groups.length,`Repeated refinement yields the blocks ${trace.groups.map(g=>'{'+g.join(', ')+'}').join(', ')}. All residue states are reachable.`);
 }
 if(k==='pumping'){
  const p=spec.parameter,split=Math.min(spec.split||1,p),power=spec.power??0,a=p+split*(power-1);
  return variant%2===0?number(`For witness a^${p}b^${p}, split y=a^${split} with |xy|≤${p}. Pump y with exponent i=${power}. How many a symbols remain?`,a,`${p} + ${split}×(${power}−1) = ${a}. The b-count stays ${p}.`):number(`In a^${p}b^${p}, a legal nonempty y lies wholly in the first ${p} positions. How many possible positive lengths can y have?`,p,`The possible lengths are 1 through ${p}. A proof must cover all allowed decompositions, not pick one.`);
 }
 if(k==='nerode'){
  const n=spec.parameter,j=n+1+(Math.floor(variant/2)+topics.indexOf(topic))%7;
  return variant%2===0?number(`For L={a^k b^k:k≥0}, distinguish prefixes a^${n} and a^${j} by appending b^${n}. How many of the two resulting words are in L?`,1,`a^${n}b^${n} has equal blocks, but a^${j}b^${n} does not.`):number(`Use the standard distinguishing continuation b^i for prefixes a^i and a^j, with i=${n}, j=${j}. How many b symbols are in that continuation?`,n,`Choose the same b^${n} suffix for both prefixes. The general proof works for every unequal i,j.`);
 }
 if(k==='diagonal'){
  const i=(topics.indexOf(topic)+stage+variant)%spec.parameter,bit=r.matrix[i][i];
  return number(`A proposed list of infinite binary sequences has bit ${bit} at row ${i}, column ${i} in a ${spec.parameter}-row visible window. What bit does the diagonal-escape sequence choose at coordinate ${i}?`,1-bit,`Choose 1−${bit}=${1-bit}. The full argument applies this definition at every natural coordinate, beyond the visible window.`);
 }
 if(k==='enumeration'){
  const frames=r.frames,at=1+(stage+variant)%Math.max(1,frames.length-1),f=frames[Math.min(at,frames.length-1)];
  return choice(`In the ${spec.enumeration||'strings'} enumeration with ${spec.parameter} displayed entries, inspect step ${Math.min(at,frames.length-1)+1}. Which explanation matches its stated ordering?`,f.caption,['Complete an entire infinite row before moving to another.','Omit all elements with indices beyond the visible window.'],f.caption,{title:f.title,headers:f.headers,rows:f.rows});
 }
 if(k==='grammar-properties'||k==='normal-form'){
  const repeat=1+(topics.indexOf(topic)+stage+variant)%9,grammar=`S -> ${'a'.repeat(repeat)}AB | ${'b'.repeat(1+Math.floor(variant/3)%6)}; A -> aA | ${variant%2?'a':'ε'}; B -> ${variant%3?'b':'B'}; C -> ${variant%2?'bC':'b'}`,props=grammarProperties(grammar),sets=['nullable','generating','reachable'],property=sets[(stage+variant)%3];
  return number(`For grammar ${grammar}, how many nonterminals are ${property}${property==='reachable'?' after removing nongenerating rules':''}?`,props[property].length,`${property}: {${props[property].join(', ')||'∅'}}. Compute the relevant fixed point rather than counting written rules.`);
 }
 if(k==='decision'){
  const seed=topics.indexOf(topic)*7+stage*11+variant,m=2+seed%7,machine=makeDfa('length',m),mask=(seed*13+1)%(2**m);machine.finals=machine.states.filter((q,i)=>mask&(1<<i));
  const problem=['emptiness','universality','membership'][variant%3],word=allWords[seed%allWords.length];
  const answer=problem==='emptiness'?machine.finals.length===0:problem==='universality'?machine.finals.length===m:dfaRun(machine,word).accepted;
  return choice(`For a concrete finite-state check, use states r0…r${m-1}, start r0, with either a or b advancing the residue modulo ${m}; finals={${machine.finals.join(', ')||'none'}}. ${problem==='membership'?`Does it accept ${shown(word)}?`:problem==='emptiness'?'Is its language empty?':'Is its language all of {a,b}*?'}`,answer?'Yes':'No',[answer?'No':'Yes'],`All residues are reachable. ${problem==='membership'?`The word ends at r${word.length%m}.`:problem==='emptiness'?'Emptiness holds exactly when no residue accepts.':'Universality holds exactly when every residue accepts.'} This finite DFA test does not decide the corresponding arbitrary TM problem.`);
 }
 if(k==='dovetail'){
  const rounds=1+(topics.indexOf(topic)+stage*9+variant)%32,haltB=2+variant%7,haltC=1+Math.floor(variant/3)%7,first=Math.min(rounds,haltB),second=Math.min(rounds,haltC);
  return number(`Three simulations get one step per fair round. A never halts, B halts at step ${haltB}, C halts at step ${haltC}. After ${rounds} rounds, how many total steps have been assigned?`,rounds+first+second,`A receives ${rounds}, B receives ${first}, C receives ${second}. A finished branch needs no further turns.`);
 }
 if(k==='reduction'){
  const word=allWords[(topics.indexOf(topic)*17+stage*11+variant)%allWords.length],accept=/^a*b*$/.test(word)&&[...word].filter(c=>c==='a').length===word.length/2;
  return choice(`A specific M decides a^n b^n (n≥0). Construct N(y): ignore y, run M on the fixed word ${shown(word)}, and accept y only if that run accepts. Is L(N) nonempty?`,accept?'Yes, it is Σ*':'No, it is ∅',[accept?'No, it is ∅':'Yes, it is Σ*'],`M ${accept?'accepts':'rejects'} ${shown(word)}, so N ${accept?'accepts every input':'accepts no input'}. This example checks the two-case transformation; the undecidability proof concerns arbitrary M,w.`);
 }
 const m=2+(topics.indexOf(topic)+stage+variant)%7,word=allWords[(topics.indexOf(topic)*19+stage*13+variant)%allWords.length];
 return choice(`A language consists of words over {a,b} whose length is divisible by ${m}. Can word ${shown(word)} be accepted using only a finite residue memory?`,word.length%m===0?'Yes; its residue is zero':'No; its residue is nonzero',[word.length%m===0?'No; its residue is nonzero':'Yes; its residue is zero'],`Length ${word.length} modulo ${m} is ${word.length%m}. A DFA suffices; a stronger model is unnecessary.`);
}
function initial(scene){const f=scene.frames[0];return {title:f.title,headers:f.headers,rows:f.rows,toc:f.toc};}
const wrong=[
 'A finite list of successful examples proves the statement for every input and every model.',
 'The alphabet, input exhaustion and acceptance convention never affect the result.',
 'Any method that eventually gives an answer on some inputs is a decider for every input.'
];
const usedPredictions=new Set();
function lessonQuestions(topic,stage){
 const correct=[topic.idea,topic.idea,topic.pitfall][stage],prompt=[`A learner is starting with ${topic.title.toLowerCase()}. Which rule should guide their reasoning?`,`Consider this worked situation: ${topic.example} Which rule explains this result?`,`While checking ${topic.title.toLowerCase()}, which warning prevents an invalid conclusion?`][stage];
 const q=[choice(prompt,correct,misconceptions[topic.spec.kind]||wrong,`${topic.idea} ${topic.pitfall}`)];
 for(let variant=0;variant<3;variant++){
  let candidate,retry=0;
  do{candidate=prediction(topic,stage,variant+retry*3);retry++;if(retry>2000)throw Error(`Not enough distinct substantive puzzles for ${topic.title}: ${candidate.prompt}`);}while(usedPredictions.has(scenarioKey(candidate)));
  usedPredictions.add(scenarioKey(candidate));q.push(candidate);
 }
 return q.map(question=>({...question,revision:2}));
}
const scenarioKey=q=>JSON.stringify({prompt:q.prompt,given:q.tocGiven||null});
export async function buildReviewed(){
 usedPredictions.clear();
 const completed=[];
 for(const [id,topic] of topics.entries()){
  try{const source=JSON.parse(await fs.readFile(new URL(`data/transcripts/${id}.json`,base),'utf8'));if(!source.sourceCompletedAt||!source.segments?.length)break;completed.push(topic);}catch(error){if(error.code==='ENOENT')break;throw error;}
 }
 if(!completed.length||completed.length<topics.length&&!process.argv.includes('--draft'))throw Error(`Only ${completed.length}/${topics.length} sources are imported. Use --draft for a local unpublished preview or finish the import.`);
 const units=sections.filter(s=>s[1]<completed.length).map(([title,from,to,goal],id)=>({id,title,subtitle:goal,range:[from,Math.min(to,completed.length-1)],goal,color:['purple','teal','orange','green'][id%4],icon:'code',tocLab:{optional:true,unitId:id,title:`${title} workshop`,spec:topics[Math.floor((from+Math.min(to,completed.length-1))/2)].spec,challenge:topics[Math.floor((from+Math.min(to,completed.length-1))/2)].example}}));
 const lecturePlans=completed.map(topic=>[topic.title,topic.idea,topic.example]);
 const lessons=[];
 for(const [lecture,topic] of completed.entries()){
  const transcript=JSON.parse(await fs.readFile(new URL(`data/transcripts/${lecture}.json`,base),'utf8'));
  if(!transcript.sourceCompletedAt||!transcript.segments?.length)throw Error(`TOC source ${lecture} is incomplete; do not publish invented coverage.`);
  for(let stage=0;stage<3;stage++){
   const id=lecture*3+stage,spec=stage===0?{...topic.spec,title:topic.title}:variedSpec(topic,stage,4),scene=tocScene(spec),frames=scene.frames;
   const steps=[topic.idea,topic.example,topic.pitfall];
   const stageNames=['Understand the rule','Trace and experiment','Apply and challenge'];
   const terms=glossary[spec.kind];if(!terms)throw Error(`Missing beginner glossary for ${spec.kind}`);
   let sourceEvidence=transcript.segments.filter(s=>s.text&&s.end>s.start).filter(s=>topic.title.toLowerCase().split(/\W+/).some(word=>word.length>4&&s.text.toLowerCase().includes(word))).slice(0,2).map(s=>({time:s.start,text:s.text.trim().slice(0,360)}));
   if(!sourceEvidence.length){const anchor=transcript.segments[Math.floor(transcript.segments.length*.25)];sourceEvidence=[{time:anchor.start,text:anchor.text.trim().slice(0,360)}];}
   const lesson={id,lecture,title:`${topic.title} · ${stageNames[stage]}`,concept:steps[stage],foundation:{title:topic.title,idea:topic.idea,terms,example:topic.example},teachingSteps:steps,tocSpec:spec,tocStage:stage,questions:lessonQuestions(topic,stage),minutes:5,ready:true,contentVersion:2,contentStatus:'authored-source-linked',sourceEvidence,sourceReferences:[{lecture,file:transcript.file,completedAt:transcript.sourceCompletedAt}],start:sourceEvidence[0]?.time||0,
    learningNotes:{version:1,subject:'toc',profile:spec.kind,objective:stage===0?`Explain the rule: ${topic.idea}`:stage===1?`Trace the worked case: ${topic.example}`:`Identify a counterexample or boundary case: ${topic.pitfall}`,why:topic.idea,watchFor:topic.pitfall,experiment:`${tocExperiment(spec)?'Change the labeled input and run the model.':'Step through the proof table.'} ${stage===2?'Try a boundary case, then state what this finite example cannot prove.':'Predict the next state before advancing.'}`}};
   lessons.push(lesson);
  }
 }
 // Exact duplicate prompts are rejected even across nonadjacent topics. Authors
 // must change the actual scenario/rules, not tack on a level number.
 const seen=new Map(),duplicates=[];
 for(const l of lessons)for(const q of l.questions){const key=scenarioKey(q);if(seen.has(key))duplicates.push([seen.get(key),l.id,q.prompt]);else seen.set(key,l.id);}
 const report={topics:completed.length,authoredTopics:topics.length,sections:units.length,lessons:lessons.length,questions:lessons.length*4,duplicateScenarios:duplicates,sourceLinked:lessons.filter(l=>l.sourceEvidence.length).length,models:[...new Set(topics.map(t=>t.spec.kind))],limitations:['Finite simulators are not general proof engines.','Normal-form workshop checks production shapes; it does not implement full conversion.','State-elimination explanations use the recurrence and path-language examples; the workshop is not a general graph editor.','Audio scripts are separate from rendered audio.']};
 if(duplicates.length)throw Error('Repeated exercise scenarios remain.');
 await fs.writeFile(new URL('content/curriculum.js',base),`// Generated by authoring/build-reviewed.mjs.\nexport const units=${JSON.stringify(units,null,2)};\nexport const lecturePlans=${JSON.stringify(lecturePlans,null,2)};\n`);
 await fs.writeFile(new URL('content/lessons.js',base),`// Generated from authored TOC topics and completed source transcripts.\nexport const lessons=${JSON.stringify(lessons,null,2)};\n`);
 await fs.writeFile(new URL('data/teaching-coverage.json',base),JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({...report,duplicateScenarios:duplicates.length}));
 return {lessons,report};
}
if(process.argv[1]?.replaceAll('\\','/').endsWith('/build-reviewed.mjs'))await buildReviewed();
