import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {plans,authoredTopic} from './topics.mjs';
const base=fileURLToPath(new URL('../',import.meta.url));
const evidenceWords=['structure|container','node|next|head','array|linked','length|print','insert|next','delet|free','node|next','recurs|print','sum|length','return|insert','return.*next','remove|first','remove|all','swap|pair','reverse|current','reverse|return','circular|head','previous|doubly','pointer|next','log|power','log|product','graph|log','step|hardware','omega|constant','theta|bound','growth|asymptotic','function|log','omega|ratio','set|notation','log|function','loop|iteration','loop|summation','search|case','case|bound','case|bound','theta|order','log|function','stack|push','stack|top','queue|front'];
evidenceWords.push(...Array.from({length:10},()=>"queue|stack|front|rear|prefix|postfix|parenthes"),...Array.from({length:16},()=>"tree|root|node|height|order|balance|rotation"),...Array.from({length:7},()=>"heap|minimum|parent|child|root|height"));
evidenceWords.push('heap|combin|number','shape|binary|catalan','random|probability|height','heap|complexity|operation','heap|sort','merg|heap|binary search','priority|queue','heap|rank|smallest','heap|heapify|swap','heap|maximum|delet','direct|address|hash','hash|collision','collision|chain|prob','chain|average|load','linear|probing|delete','quadratic|double|probing','probe|permutation|possible','uniform|unsuccess|alpha','success|uniform|alpha','bernoulli|binomial|expectation','expect|empty|collision','row|column|memory','dimension|offset|row','offset|row|column','queue|stack|transfer','stack|push|pop','permutation|binary search|tree','circular|linked|pointer');
const lessons=[];
for(let lecture=0;lecture<plans.length;lecture++){
 const source=JSON.parse(await fs.readFile(path.join(base,'data','transcripts',lecture+'.json'),'utf8'));
 if(source.id!==lecture||!source.sourceCompletedAt||!source.segments?.length)throw Error('A completed source is required for DS topic '+lecture);
 const topic=authoredTopic(lecture),pattern=new RegExp(evidenceWords[lecture],'i');
 const references=source.segments.filter(s=>pattern.test(s.text)).slice(0,3).map(s=>({lecture,file:source.file,start:s.start,end:s.end,text:s.text.trim()}));
 if(!references.length)throw Error('Missing topic evidence '+lecture);
 for(let part=0;part<3;part++){
  const questions=topic.questions.slice(part*4,part*4+4).map((q,i)=>{if(q.type!=='choice')return q;const shift=(lecture+part+i)%q.options.length;return {...q,options:[...q.options.slice(shift),...q.options.slice(0,shift)],answer:(q.answer-shift+q.options.length)%q.options.length};});
  lessons.push({id:lecture*3+part,lecture,title:topic.titles[part],concept:topic.idea,teachingSteps:topic.steps,questions,minutes:5,ready:true,contentVersion:1,contentStatus:'reviewed',dsLab:topic.lab,start:references[0].start,sourceReferences:references,foundation:{title:topic.label,idea:topic.idea,terms:topic.terms,example:topic.example}});
 }
}
const units=[
 ['List foundations','Nodes, access and safe updates',[0,6]],
 ['Recursive lists','Calls, returned heads and structural updates',[7,15]],
 ['List variations','Cycles, two-way links and pointer tracing',[16,18]],
 ['Logs and growth','Inverse powers and asymptotic comparisons',[19,29]],
 ['Counting algorithms','Loop work and input-case reasoning',[30,36]],
 ['Stacks and queues','Endpoint contracts and operation traces',[37,39]],
 ['Queue and expression mechanics','Buffers, transfers and operator stacks',[40,49]],
 ['Binary trees','Shapes, recurrences and traversal reconstruction',[50,56]],
 ['Binary search trees','Ordering, search, ranges and deletion',[57,64]],
 ['AVL balance','Height constraints and preserving rotations',[65,65]],
 ['Heaps','Complete shapes, priority operations and linear building',[66,72]],
 ['Heaps in practice','Counting, sorting, merging and priority scheduling',[73,82]],
 ['Hash tables','Key mapping, collisions, probing and safe deletion',[83,89]],
 ['Hashing and probability','Indicators, expectations and honest cost models',[90,93]],
 ['Array memory layouts','Storage order, dimension strides and byte addresses',[94,96]],
 ['DS challenge workshop','Operation accounting, insertion orders and safe list updates',[97,100]]
].map(([title,subtitle,range],id)=>({id,title,subtitle,range,color:'teal',icon:id===5?'memory':id===3?'binary':'chip',goal:subtitle+'. Use a diagram and a small example to justify each answer.'}));
await fs.writeFile(path.join(base,'content','curriculum.js'),`export const units=${JSON.stringify(units,null,2)};\nexport const lecturePlans=${JSON.stringify(plans.map(p=>p.slice(0,4)),null,2)};\n`);
await fs.writeFile(path.join(base,'content','reviewed-lessons.js'),`// Generated from original authored teaching and completed source evidence.\nexport const lessons=${JSON.stringify(lessons,null,2)};\n`);
await fs.writeFile(path.join(base,'content','lessons.js'),"export {lessons} from './reviewed-lessons.js';\n");
const manifestFile=path.join(base,'course.json'),manifest=JSON.parse(await fs.readFile(manifestFile,'utf8'));Object.assign(manifest,{status:'available',publishedLectureCount:plans.length,description:'Learn linked lists, complexity, stacks, queues, trees, heaps, hashing, probability and array layouts through animated diagrams and guided puzzles. All 101 topics are ready to learn.'});await fs.writeFile(manifestFile,JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({subject:'ds',coveredTopics:plans.length,lessons:lessons.length,questions:lessons.reduce((n,l)=>n+l.questions.length,0),labs:new Set(lessons.map(l=>l.dsLab)).size}));
