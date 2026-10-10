import {correctAnswer,traceCache} from './engine.js';
// Opening cards are worked examples, not incomplete copies of an exercise widget.
export function createWorkedExample(lesson,question=lesson.questions[0]){
 const q=question,headings={choice:'Reason through a decision',number:'Work through the calculation',hex:'Interpret the bit pattern',match:'Key relationships',order:'Follow the process',truth:'Read the truth table',cpu:'Trace the accumulator',cache:'Trace cache accesses',bits:'Split instruction fields',mux:'Route a data input',kmap:'Read and group K-map cells'};
 const out={type:q.type,title:headings[q.type],prompt:q.prompt,explanation:q.explanation,facts:[],terms:[],inputTable:null,solutionTable:null,solutionList:[],answer:correctAnswer(q)};
 switch(q.type){
 case 'choice':out.facts=q.options.map(option=>String(option));break;
 case 'number':out.answer=String(q.answer)+(q.unit?' '+q.unit:'');break;
 case 'hex':out.answer='0x'+q.answer;break;
 case 'match':out.terms=q.pairs.map(p=>p[0]);out.solutionTable={headers:['Term','Meaning or role'],rows:q.pairs};out.answer='';break;
 case 'order':out.terms=[...q.items];out.solutionList=[...q.items];out.answer='';break;
 case 'truth':out.inputTable={headers:[...q.labels,'Output'],rows:q.rows.map(row=>[...row,'?'])};out.solutionTable={headers:[...q.labels,'Output'],rows:q.rows.map((row,i)=>[...row,q.answer[i]])};out.answer='';break;
 case 'cpu':{out.facts=[`Starting accumulator: ${q.initial}`];out.inputTable={headers:['Step','Instruction'],rows:q.steps.map((n,i)=>[i+1,`ADD ${n}`])};let value=q.initial;out.solutionTable={headers:['Step','Instruction','Accumulator'],rows:[[0,'Start',value],...q.steps.map((n,i)=>{value+=n;return [i+1,`ADD ${n}`,value];})]};out.answer=`Final accumulator: ${value}`;break;}
 case 'cache':{out.facts=[`${q.sets} sets · ${q.ways} ways per set · ${q.policy}`, 'Initially empty; accesses use memory block numbers.'];out.inputTable={headers:['Access','Block'],rows:q.accesses.map((block,i)=>[i+1,block])};out.solutionTable={headers:['Access','Block','Set','Result','Evicted'],rows:traceCache(q).map((r,i)=>[i+1,r.block,r.index,r.hit?'HIT':'MISS',r.evicted??'—'])};out.answer='';break;}
 case 'bits':out.facts=[`Instruction width: ${q.total} bits`];out.solutionTable={headers:['Field','Width'],rows:[['Operation',q.opcode+' bits'],['Operand',(q.total-q.opcode)+' bits']]};out.answer='';break;
 case 'mux':out.facts=[`${q.inputs.length} data inputs; ${Math.log2(q.inputs.length)} select bits; the highest-numbered selector is most significant.`];out.inputTable={headers:['Data input','Value'],rows:q.inputs.map((v,i)=>['I'+i,v])};out.answer=`Selector ${q.answer.toString(2).padStart(Math.log2(q.inputs.length),'0')} routes I${q.answer}; output ${q.inputs[q.answer]}.`;break;
 case 'kmap':{const gray=[0,1,3,2];out.facts=['Rows AB and columns CD use Gray order 00,01,11,10. Cells are labeled by their binary minterm index.'];out.inputTable={headers:['AB / CD',...gray.map(v=>v.toString(2).padStart(2,'0'))],rows:gray.map(r=>[r.toString(2).padStart(2,'0'),...gray.map(c=>`m${r*4+c}: ${q.ones.includes(r*4+c)?1:0}`)])};out.answer='Grouped minterms: '+q.answer.join(', ');break;}
 default:throw Error('Unreviewed opening-card type: '+q.type);
 }
 if(lesson.id===1&&q.type==='match'&&q.pairs[0]?.[0]==='Turn on')out.prompt='The instruction “turn on the light” has an operation and an operand. Reveal how the phrase splits into those parts.';
 if(lesson.id===6&&q.type==='match'&&q.pairs[0]?.[0]==='CPU'){
  out.title='Computer components and their roles';out.prompt='A computer combines processing, working storage, input/output, and communication. Reveal the role of each component.';
  out.solutionTable={headers:['Component','Role'],rows:[['CPU','Executes instructions'],['Main memory','Holds active instructions and data'],['I/O devices','Exchange information with the outside world'],['System bus','Carries signals between components']]};out.terms=out.solutionTable.rows.map(r=>r[0]);
 }
 return out;
}
