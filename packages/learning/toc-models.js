// Bounded teaching models. A stopped search never masquerades as a proof of rejection.
const unique=values=>[...new Set(values)];
const frame=(title,headers,rows,caption,extra={})=>({title,headers,rows,caption,...extra});
export function words(alphabet=['a','b'],maxLength=3){
 let layer=[''];const result=[''];
 for(let length=1;length<=maxLength;length++){layer=layer.flatMap(prefix=>alphabet.map(symbol=>prefix+symbol));result.push(...layer);}
 return result;
}
export function checkWord(word,alphabet,max=24){
 if(typeof word!=='string'||word.length>max||[...word].some(symbol=>!alphabet.includes(symbol)))throw Error(`Use at most ${max} symbols from {${alphabet.join(', ')}}. Empty input means ε.`);
 return word;
}
export function validateDfa(machine){
 const {states,alphabet,start,finals,delta}=machine;
 if(!states?.length||states.length>32||unique(states).length!==states.length||!alphabet?.length||unique(alphabet).length!==alphabet.length||alphabet.some(s=>typeof s!=='string'||s.length!==1)||!states.includes(start)||finals.some(q=>!states.includes(q)))throw Error('Choose distinct states and one-character symbols, a valid start, and valid accepting states.');
 for(const q of states)for(const symbol of alphabet)if(!states.includes(delta[q]?.[symbol]))throw Error(`DFA transition missing: ${q} on ${symbol}. A complete DFA needs every transition.`);
 return machine;
}
export function dfaRun(machine,input){
 validateDfa(machine);checkWord(input,machine.alphabet,64);let state=machine.start;
 const frames=[frame('Before the first symbol',['Consumed','State','Unread'],[['ε',state,input||'ε']],'The start state represents the empty prefix. Acceptance is checked only after the whole input is consumed.',{toc:{type:'automaton',machine,active:[state],input,position:0}})];
 for(const [index,symbol] of [...input].entries()){
  const before=state;state=machine.delta[state][symbol];
  frames.push(frame(`Read ${symbol}: ${before} → ${state}`,['Consumed','State','Unread'],[[input.slice(0,index+1),state,input.slice(index+1)||'ε']],`The transition δ(${before}, ${symbol}) = ${state} consumes exactly one symbol.`,{toc:{type:'automaton',machine,active:[state],edge:[before,symbol,state],input,position:index+1}}));
 }
 const accepted=machine.finals.includes(state);
 frames.push(frame(accepted?'Input accepted':'Input rejected',['Input','Final state','Result'],[[input||'ε',state,accepted?'Accept':'Reject']],`All ${input.length} symbols are consumed. ${state} ${accepted?'is':'is not'} accepting.`,{toc:{type:'automaton',machine,active:[state],input,position:input.length}}));
 return {frames,accepted,state};
}
export function makeDfa(kind='even',parameter=3){
 if(kind==='suffix'){
  const pattern=typeof parameter==='string'?parameter:'ab',alphabet=unique([...pattern,'a','b']),states=Array.from({length:pattern.length+1},(_,i)=>`q${i}`),delta={};
  for(let i=0;i<states.length;i++){delta[states[i]]={};for(const symbol of alphabet){const candidate=pattern.slice(0,i)+symbol;let next=Math.min(pattern.length,candidate.length);while(next&&!candidate.endsWith(pattern.slice(0,next)))next--;delta[states[i]][symbol]=`q${next}`;}}
  return {states,alphabet,start:'q0',finals:[`q${pattern.length}`],delta};
 }
 if(kind==='prefix')return {states:['start','one','yes','dead'],alphabet:['a','b'],start:'start',finals:['yes'],delta:{start:{a:'one',b:'dead'},one:{a:'dead',b:'yes'},yes:{a:'yes',b:'yes'},dead:{a:'dead',b:'dead'}}};
 if(kind==='contains'){
  const machine=makeDfa('suffix',typeof parameter==='string'?parameter:'ab'),last=machine.finals[0];for(const s of machine.alphabet)machine.delta[last][s]=last;return machine;
 }
 if(kind==='length'||kind==='remainder'){
  const modulus=Number(parameter);if(!Number.isInteger(modulus)||modulus<2||modulus>8)throw Error('Use a modulus from 2 to 8.');
  const alphabet=kind==='length'?['a','b']:['0','1'],states=Array.from({length:modulus},(_,i)=>`r${i}`),delta={};
  for(let i=0;i<modulus;i++)delta[`r${i}`]=Object.fromEntries(alphabet.map(symbol=>[symbol,`r${kind==='length'?(i+1)%modulus:(2*i+Number(symbol))%modulus}`]));
  return {states,alphabet,start:'r0',finals:['r0'],delta};
 }
 if(kind==='empty-word')return {states:['empty','dead'],alphabet:['a','b'],start:'empty',finals:['empty'],delta:{empty:{a:'dead',b:'dead'},dead:{a:'dead',b:'dead'}}};
 if(kind==='second-last')return {states:['q0','q1','q2','q3'],alphabet:['a','b'],start:'q0',finals:['q2','q3'],delta:{q0:{a:'q1',b:'q0'},q1:{a:'q3',b:'q2'},q2:{a:'q1',b:'q0'},q3:{a:'q3',b:'q2'}}};
 return {states:['even','odd'],alphabet:['0','1'],start:'even',finals:['even'],delta:{even:{0:'even',1:'odd'},odd:{0:'odd',1:'even'}}};
}
export function complementDfa(machine){validateDfa(machine);return {...machine,finals:machine.states.filter(q=>!machine.finals.includes(q))};}
export function productDfa(left,right,operation='intersection'){
 validateDfa(left);validateDfa(right);if(JSON.stringify(left.alphabet)!==JSON.stringify(right.alphabet))throw Error('Product machines must use the same ordered alphabet.');
 const name=(a,b)=>JSON.stringify([a,b]),start=name(left.start,right.start),pairs=[[left.start,right.start]],seen=new Set([start]),delta={},finals=[];
 for(let i=0;i<pairs.length;i++){
  const [a,b]=pairs[i],q=name(a,b),x=left.finals.includes(a),y=right.finals.includes(b);
  if(operation==='union'?x||y:operation==='difference'?x&&!y:operation==='xor'?x!==y:x&&y)finals.push(q);
  delta[q]={};for(const s of left.alphabet){const pair=[left.delta[a][s],right.delta[b][s]],next=name(...pair);delta[q][s]=next;if(!seen.has(next)){seen.add(next);pairs.push(pair);}}
 }
 return {states:[...seen],alphabet:left.alphabet,start,finals,delta};
}
export function distinguishingWord(machine,a,b){
 validateDfa(machine);if(!machine.states.includes(a)||!machine.states.includes(b))throw Error('Choose existing states.');
 const queue=[[a,b,'']],seen=new Set();
 for(let i=0;i<queue.length;i++){const [x,y,word]=queue[i],key=JSON.stringify([x,y]);if(seen.has(key))continue;seen.add(key);if(machine.finals.includes(x)!==machine.finals.includes(y))return word;for(const s of machine.alphabet)queue.push([machine.delta[x][s],machine.delta[y][s],word+s]);}
 return null;
}
export function minimizeDfa(machine){
 validateDfa(machine);const reachable=new Set([machine.start]),queue=[machine.start];
 for(let i=0;i<queue.length;i++)for(const s of machine.alphabet){const q=machine.delta[queue[i]][s];if(!reachable.has(q)){reachable.add(q);queue.push(q);}}
 let groups=[[...reachable].filter(q=>machine.finals.includes(q)),[...reachable].filter(q=>!machine.finals.includes(q))].filter(g=>g.length);
 const frames=[frame('Remove unreachable states',['Reachable','Removed'],[[[...reachable].join(', '),machine.states.filter(q=>!reachable.has(q)).join(', ')||'None']],'Only states reachable from the start can affect the accepted language.')];
 frames.push(frame('Separate accepting and rejecting states',['Block','States'],groups.map((g,i)=>[i,g.join(', ')]),'The empty suffix already distinguishes an accepting state from a rejecting one.'));
 while(true){const block=new Map(groups.flatMap((g,i)=>g.map(q=>[q,i]))),next=[];
  for(const group of groups){const buckets=new Map();for(const q of group){const signature=JSON.stringify(machine.alphabet.map(s=>block.get(machine.delta[q][s])));if(!buckets.has(signature))buckets.set(signature,[]);buckets.get(signature).push(q);}next.push(...buckets.values());}
  if(next.length===groups.length)break;groups=next;frames.push(frame('Refine by transition destinations',['Block','States'],groups.map((g,i)=>[i,g.join(', ')]),'States that reach different blocks on the same symbol cannot stay equivalent.'));
 }
 frames.push(frame('Stable partition',['Minimal state','Original states'],groups.map((g,i)=>[`B${i}`,g.join(', ')]),`No further split is needed. The minimal complete DFA has ${groups.length} reachable states.`));
 return {groups,frames};
}
export function epsilonClosure(machine,states){
 const result=new Set(states),queue=[...states];for(let i=0;i<queue.length;i++)for(const next of machine.delta[queue[i]]?.['ε']||[])if(!result.has(next)){result.add(next);queue.push(next);}return [...result].sort();
}
export function nfaRun(machine,input){
 checkWord(input,machine.alphabet,32);let active=epsilonClosure(machine,[machine.start]);
 const frames=[frame('Take the initial ε-closure',['Active states'],[[active.join(', ')]],'Follow every reachable ε-edge without consuming input; a visited set prevents infinite ε-cycles.',{toc:{type:'automaton',machine,active,input,position:0}})];
 for(const [index,symbol] of [...input].entries()){
  const moved=unique(active.flatMap(q=>machine.delta[q]?.[symbol]||[]));active=epsilonClosure(machine,moved);
  frames.push(frame(`Consume ${symbol}, then close ε-moves`,['Direct destinations','Active after ε-closure'],[[moved.join(', ')||'∅',active.join(', ')||'∅']],'Keep every possible branch. A missing move removes that branch; it does not reject other branches.',{toc:{type:'automaton',machine,active,input,position:index+1}}));
 }
 const accepted=active.some(q=>machine.finals.includes(q));frames.push(frame(accepted?'An accepting branch exists':'No accepting branch remains',['Consumed','Active states','Accept?'],[[input||'ε',active.join(', ')||'∅',accepted?'Yes':'No']],'Nondeterministic acceptance requires at least one accepting path after the complete input.'));
 return {frames,active,accepted};
}
export function regexNfa(expression,alphabet){
 if(typeof expression!=='string'||expression.length>48)throw Error('Use an expression of at most 48 characters.');
 const source=expression.replace(/\s/g,'');let position=0,next=0;const delta={},states=[];
 const state=()=>{const q=`q${next++}`;states.push(q);delta[q]={};return q;};
 const edge=(a,s,b)=>(delta[a][s]??=[]).push(b);
 const atom=()=>{let item;if(source[position]==='('){position++;item=union();if(source[position++]!==')')throw Error('Close each parenthesis.');}else{const s=source[position++];if(!s||!/[ab01ε∅]/u.test(s))throw Error('Use literals a, b, 0, 1, ε, ∅, parentheses, union | or +, and star *.');const start=state(),end=state();if(s!=='∅')edge(start,s==='ε'?'ε':s,end);item={start,end};}while(source[position]==='*'){position++;const start=state(),end=state();edge(start,'ε',item.start);edge(start,'ε',end);edge(item.end,'ε',item.start);edge(item.end,'ε',end);item={start,end};}return item;};
 const concat=()=>{let result=null;while(position<source.length&&![')', '|','+'].includes(source[position])){if(source[position]==='.'){if(!result)throw Error('Concatenation needs a left operand.');position++;}const item=atom();if(result){edge(result.end,'ε',item.start);result={start:result.start,end:item.end};}else result=item;}if(!result)throw Error('Write ε explicitly for an empty alternative.');return result;};
 const union=()=>{let left=concat();while(['|','+'].includes(source[position])){position++;const right=concat(),start=state(),end=state();edge(start,'ε',left.start);edge(start,'ε',right.start);edge(left.end,'ε',end);edge(right.end,'ε',end);left={start,end};}return left;};
 const result=union();if(position!==source.length)throw Error('Unexpected expression suffix.');
 const literals=unique([...source].filter(s=>/[ab01]/.test(s)));
 alphabet??=/[01]/.test(source)?(/[ab]/.test(source)?['a','b','0','1']:['0','1']):['a','b'];
 if(!alphabet.length||alphabet.some(s=>!/[ab01]/.test(s))||literals.some(s=>!alphabet.includes(s)))throw Error('Every literal must belong to the stated alphabet.');
 return {states,alphabet,start:result.start,finals:[result.end],delta};
}
export function subsetDfa(nfa){
 const name=set=>JSON.stringify([...set].sort()),initial=epsilonClosure(nfa,[nfa.start]),sets=[initial],seen=new Set([name(initial)]),delta={},finals=[];
 for(let i=0;i<sets.length;i++){
  if(sets.length>256)throw Error('This teaching conversion is limited to 256 reachable subsets.');
  const set=sets[i],q=name(set);delta[q]={};if(set.some(s=>nfa.finals.includes(s)))finals.push(q);
  for(const symbol of nfa.alphabet){const target=epsilonClosure(nfa,unique(set.flatMap(s=>nfa.delta[s]?.[symbol]||[]))),key=name(target);delta[q][symbol]=key;if(!seen.has(key)){seen.add(key);sets.push(target);}}
 }
 return {states:sets.map(name),alphabet:nfa.alphabet,start:name(initial),finals,delta};
}
export function parseGrammar(text){
 if(typeof text!=='string'||text.length>300)throw Error('Use a grammar of at most 300 characters.');
 const rules=[];
 for(const line of text.split(/[;\n]/).filter(s=>s.trim())){const match=line.trim().match(/^([A-Z])\s*(?:->|→)\s*(.*)$/);if(!match)throw Error('Write rules such as S -> aSb | ε. Nonterminals are single capital letters.');for(const alternative of match[2].split('|')){const rhs=alternative.trim().replace(/\s/g,'');if(!rhs||!/^[A-Za-z01ε]*$/u.test(rhs)||rhs.includes('ε')&&rhs!=='ε')throw Error('Write ε for the empty right side; use letters or binary digits for other symbols.');rules.push({lhs:match[1],rhs:rhs==='ε'?[]:[...rhs]});}}
 if(!rules.length)throw Error('Add at least one production.');return {start:rules[0].lhs,rules};
}
export function grammarRun(grammar,input){
 if(typeof grammar==='string')grammar=parseGrammar(grammar);if(input.length>14)throw Error('Use at most 14 input symbols for this grammar experiment.');
 const chart=Array.from({length:input.length+1},()=>[]),keys=chart.map(()=>new Set()),augmented={lhs:'@',rhs:[grammar.start],dot:0,origin:0};
 const add=(i,item)=>{const key=JSON.stringify(item);if(!keys[i].has(key)){keys[i].add(key);chart[i].push(item);}};
 add(0,augmented);const frames=[];
 for(let i=0;i<=input.length;i++){
  for(let k=0;k<chart[i].length;k++){
   const item=chart[i][k],next=item.rhs[item.dot];
   if(next===undefined){for(const parent of chart[item.origin])if(parent.rhs[parent.dot]===item.lhs)add(i,{...parent,dot:parent.dot+1});}
   else if(/[A-Z]/.test(next)){
    for(const rule of grammar.rules.filter(r=>r.lhs===next))add(i,{...rule,dot:0,origin:i});
    // Nullable completions may predate this newly predicted parent.
    for(const complete of chart[i])if(complete.lhs===next&&complete.origin===i&&complete.dot===complete.rhs.length)add(i,{...item,dot:item.dot+1});
   }else if(input[i]===next)add(i+1,{...item,dot:item.dot+1});
  }
  frames.push(frame(`Chart after ${i} consumed symbols`,['Item','Origin'],chart[i].map(item=>[`${item.lhs} → ${[...item.rhs.slice(0,item.dot),'•',...item.rhs.slice(item.dot)].join(' ')}`,item.origin]),'Prediction expands a nonterminal, scanning consumes one matching terminal, and completion returns a finished constituent to its waiting parent.',{toc:{type:'word',input,position:i}}));
 }
 const accepted=chart[input.length].some(item=>item.lhs==='@'&&item.dot===1&&item.origin===0);
 frames.push(frame(accepted?'A complete derivation exists':'No complete derivation exists',['Word','Membership'],[[input||'ε',accepted?'In the language':'Not in the language']],'This finite chart algorithm handles this grammar, including ε-productions and left recursion; a membership result concerns the displayed word.'));
 return {frames,accepted,chart};
}

export function stackRun(input,{aWeight=1,bWeight=1,offset=0,relation='equal',allowEmpty=true}={}){
 checkWord(input,['a','b'],24);let balance=offset,phase='a-block',valid=true;
 const initialStack=['Z',...Array(Math.abs(offset)).fill(offset>=0?'A':'B')];
 const frames=[frame('Start with a bottom marker',['Input position','Phase','Initial difference'],[[0,phase,offset]],`The stack remembers a weighted difference between the two block counts, initialized at ${offset}. Z marks the bottom.`,{toc:{type:'stack',stack:initialStack,input,position:0}})];
 for(const [i,symbol] of [...input].entries()){
  if(symbol==='a'&&phase==='b-block')valid=false;if(symbol==='b')phase='b-block';
  balance+=symbol==='a'?aWeight:-bWeight;const stack=['Z',...Array(Math.abs(balance)).fill(balance>=0?'A':'B')];
  frames.push(frame(`Consume ${symbol}`,['Position','Weighted difference','Block order'],[[i+1,balance,valid?'a* b* so far':'An a follows a b']],`An a adds ${aWeight}; a b subtracts ${bWeight}. The sign determines whether unmatched a-units or b-units remain. ${valid?'':'This block-language condition is already violated.'}`,{toc:{type:'stack',stack,input,position:i+1}}));
 }
 const condition=relation==='greater'?balance>0:relation==='less'?balance<0:relation==='unequal'?balance!==0:balance===0;
 const accepted=valid&&condition&&(allowEmpty||input.length>0);
 frames.push(frame(accepted?'Stack condition satisfied':'Stack condition not satisfied',['Whole input','Difference','Accepted'],[[input||'ε',balance,accepted?'Yes':'No']],`The complete input must have block order, the ${relation} weighted-count condition, and the stated empty-word rule. This is a specialized block-language stack model, not a general PDA interpreter.`));
 return {frames,accepted,balance};
}
export function palindromeRun(input,marker=false){
 checkWord(input,marker?['a','b','#']:['a','b'],20);const frames=[];let accepted=false;
 const splits=marker?[input.indexOf('#')]:Array.from({length:input.length+1},(_,i)=>i);
 for(const split of splits){
  if(split<0||marker&&input.indexOf('#',split+1)!==-1)continue;
  const prefix=input.slice(0,split),suffix=input.slice(split+(marker?1:0)),stack=[...prefix],expected=[...prefix].reverse().join('');
  const matches=suffix===expected;accepted ||= matches;
  frames.push(frame(marker?'Use the marked midpoint':`Try midpoint after ${split} symbols`,['Pushed prefix','Remaining suffix','Pop order','Branch result'],[[prefix||'ε',suffix||'ε',expected||'ε',matches?'Accept':'Reject']],marker?'The # symbol determines when pushing stops and matching starts.':'The midpoint is guessed. Failure of this branch does not rule out another split.',{toc:{type:'stack',stack:['Z',...stack],input,position:split}}));
 }
 frames.push(frame(accepted?'An accepting midpoint exists':'No midpoint matches',['Word','Membership'],[[input||'ε',accepted?'Yes':'No']],marker?'This marked example compares the suffix with the reverse of the prefix.':'All even-palindrome midpoint guesses for this finite input were checked. This does not turn an arbitrary nondeterministic PDA into a DPDA.'));
 return {frames,accepted};
}
export function turingRun(input,kind='match',limit=300){
 const alphabet=kind==='match'?['a','b']:kind==='unary'?['1']:['0','1'];checkWord(input,alphabet,12);
 const tape=new Map([...input].map((s,i)=>[i,s]));let head=0,state=kind==='loop'?'loop':'scan',steps=0;
 const frames=[];const read=()=>tape.get(head)||'□';
 const snapshot=(title,caption)=>{
  const from=head-4,to=head+4,cells=Array.from({length:to-from+1},(_,i)=>({index:from+i,symbol:tape.get(from+i)||'□'}));
  frames.push(frame(title,['State','Head position','Read'],[[state,head,read()]],caption,{toc:{type:'tape',cells,head,state}}));
 };
 snapshot('Initial configuration','The tape initially holds the input. □ is blank; the head scans position 0. A transition may write, move, and change state.');
 while(!['accept','reject','halt'].includes(state)&&steps<limit){
  const symbol=read(),before=state;let write=symbol,move=0;
  if(kind==='loop'){move=1;}
  else if(kind==='unary'){if(symbol==='1')move=1;else{write='1';state='halt';}}
  else if(kind==='binary'){
   if(state==='scan'){if(symbol!=='□')move=1;else{state='carry';move=-1;}}
   else if(symbol==='1'){write='0';move=-1;}else{write='1';state='halt';}
  }else if(state==='scan'){
   if(symbol==='X')move=1;else if(symbol==='a'){write='X';move=1;state='seek-b';}else if(symbol==='Y'){state='check-tail';move=1;}else state=symbol==='□'?'accept':'reject';
  }else if(state==='seek-b'){
   if(['a','Y'].includes(symbol))move=1;else if(symbol==='b'){write='Y';move=-1;state='return';}else state='reject';
  }else if(state==='return'){
   if(symbol==='□'){move=1;state='scan';}else move=-1;
  }else if(state==='check-tail'){if(symbol==='Y')move=1;else state=symbol==='□'?'accept':'reject';}
  tape.set(head,write);head+=move;steps++;snapshot(`Transition ${steps}: ${before} → ${state}`,`Read ${symbol}; write ${write}; ${move<0?'move left':move>0?'move right':'stay'}. The new state is ${state}.`);
 }
 const halted=['accept','reject','halt'].includes(state),outcome=halted?state:'limit';
 const positions=[...tape.keys()].sort((a,b)=>a-b),output=positions.map(i=>tape.get(i)).join('').replace(/^□+|□+$/g,'');
 frames.push(frame(halted?'Machine halted':'Step limit reached',['Transitions','Outcome','Nonblank tape'],[[steps,halted?state:'No halting conclusion',output||'ε']],halted?'The displayed transition rules reached a halting state.':'A finite observation budget expired. This is not a rejection and does not prove that an arbitrary machine will never halt.'));
 return {frames,steps,halted,outcome,output};
}
export function pumpingRun(length=4,split=1,power=0){
 if(!Number.isInteger(length)||length<2||length>12||!Number.isInteger(split)||split<1||split>length||!Number.isInteger(power)||power<0||power>3)throw Error('Use 2–12 for p, 1–p a-symbols in y, and a pumping power from 0 to 3.');
 const witness='a'.repeat(length)+'b'.repeat(length),pumped='a'.repeat(length+split*(power-1))+'b'.repeat(length),inLanguage=[...pumped].filter(s=>s==='a').length===length;
 return {frames:[
  frame('Assume regularity and let p be the pumping length',['p','Chosen word','Length'],[[length,witness,witness.length]],'To refute regularity, choose a word depending on the unknown pumping length p; a^p b^p is in the language.'),
  frame('Respect every legal decomposition',['Constraint','Consequence'],[['|xy| ≤ p','x and y contain only a symbols'],['|y| > 0',`y has k a symbols, with 1 ≤ k ≤ ${length}`]],'The opponent chooses the split. k is arbitrary within the constraint, rather than one convenient split.'),
  frame(`Inspect k=${split}, pumping i=${power}`,['Original','Pumped','Equal a and b counts?'],[[witness,pumped,inLanguage?'Yes':'No']],'This slider-sized instance illustrates the algebra: pumping changes the a-count to p + (i−1)k and leaves p b-symbols.'),
  frame('Finish the quantified argument',['Choose i','For every legal k > 0'],[[0,'p−k < p, so the pumped word is outside {a^n b^n}']],'Choosing i=0 breaks equality for every permitted split. The proof is this general inequality, not a finite collection of slider trials.')
 ],witness,pumped,inLanguage};
}
const gcd=(a,b)=>b?gcd(b,a%b):a;
export function enumerationRun(kind='strings',count=8){
 if(!Number.isInteger(count)||count<1||count>24)throw Error('Choose 1–24 enumeration entries.');let entries=[];
 if(kind==='integers')entries=Array.from({length:count},(_,i)=>i===0?0:i%2?(i+1)/2:-i/2);
 else if(kind==='pairs'||kind==='rationals'){
  if(kind==='rationals')entries=['0'];
  for(let sum=0;entries.length<count;sum++)for(let first=0;first<=sum&&entries.length<count;first++){
   const second=sum-first;if(kind==='pairs')entries.push(`(${first}, ${second})`);
   else if(first>0&&second>0&&gcd(first,second)===1){entries.push(`${first}/${second}`);if(entries.length<count)entries.push(`−${first}/${second}`);}
  }
 }else entries=words(['a','b'],5).slice(0,count).map(w=>w||'ε');
 return {entries,frames:entries.map((entry,i)=>frame(`Enumeration index ${i}`,['Index','Element'],entries.slice(0,i+1).map((e,j)=>[j,e]),kind==='pairs'?'Visit pairs by coordinate sum. Any fixed pair appears after finitely many diagonals.':kind==='rationals'?'Enumerate numerator/denominator pairs, reduce duplicates, and interleave signs. Every rational has a reduced finite pair.':kind==='integers'?'Interleaving signs prevents the enumeration from postponing every negative integer forever.':'List finite strings by length, then dictionary order. Every finite string eventually receives a finite index.'))};
}
export function diagonalRun(size=5){
 if(!Number.isInteger(size)||size<2||size>8)throw Error('Use a diagonal display size from 2 to 8.');
 const matrix=Array.from({length:size},(_,r)=>Array.from({length:size},(_,c)=>(r*r+c+r*c)%2)),diagonal=matrix.map((row,i)=>row[i]),flipped=diagonal.map(bit=>1-bit);
 const frames=[frame('Suppose a list contains every infinite binary sequence',['Row',...matrix[0].map((_,i)=>`Bit ${i}`)],matrix.map((row,i)=>[`Row ${i}`,...row]),'Only a finite window of an imagined infinite list is visible. Each row denotes an infinite sequence, not a finite word.')];
 for(let i=0;i<size;i++)frames.push(frame(`Change diagonal bit ${i}`,['Coordinate','Listed diagonal','New bit'],[[i,diagonal[i],flipped[i]]],`The new sequence differs from row ${i} at coordinate ${i}.`,{toc:{type:'diagonal',matrix,index:i,flipped:flipped.slice(0,i+1)}}));
 frames.push(frame('Apply the construction to every row index',['For arbitrary row n','New sequence at n'],[['Listed bit d(n,n)','1 − d(n,n)']],'The infinite construction disagrees with every listed row somewhere, contradicting the proposed complete list. The finite drawing illustrates the argument; it is not itself a proof from finite search.'));
 return {frames,matrix,flipped};
}
export const decisionFacts=[
 {model:'DFA',problem:'membership',decidable:true,method:'Consume the finite word and inspect the last state.'},
 {model:'DFA',problem:'emptiness',decidable:true,method:'Search the finite transition graph for a reachable accepting state.'},
 {model:'DFA',problem:'universality',decidable:true,method:'Complement a complete DFA and test emptiness.'},
 {model:'DFA',problem:'equivalence',decidable:true,method:'Search the symmetric-difference product for a reachable accepting pair.'},
 {model:'CFG',problem:'membership',decidable:true,method:'Use a finite chart parsing algorithm on the given word.'},
 {model:'CFG',problem:'emptiness',decidable:true,method:'Compute which nonterminals can generate terminal strings by a fixed point.'},
 {model:'CFG',problem:'universality',decidable:false,method:'No algorithm decides universality for every arbitrary CFG.'},
 {model:'CFG',problem:'equivalence',decidable:false,method:'No algorithm decides equivalence for every pair of arbitrary CFGs.'},
 {model:'TM',problem:'membership',decidable:false,method:'Simulation recognizes acceptance, but can run forever on a nonmember.'},
 {model:'TM',problem:'halting',decidable:false,method:'A simulator can recognize a halting run; no universal decider handles every encoded machine/input pair.'},
 {model:'TM',problem:'emptiness',decidable:false,method:'Emptiness is a nontrivial property of the recognized language; Rice’s theorem applies.'}
];
export function decisionRun(model='DFA',problem='emptiness'){
 const fact=decisionFacts.find(f=>f.model===model&&f.problem===problem);if(!fact)throw Error('Choose one of the stated decision problems.');
 return {fact,frames:[frame('Specify the problem',['Representation','Question'],[[model,problem]],'A decision procedure must answer correctly and halt on every valid encoded input.'),frame('Separate examples from an algorithm',['A few test inputs','All valid encodings'],[['Can illustrate behavior','Require a terminating correct procedure or an impossibility proof']],'Testing some machines cannot establish decidability or undecidability.'),frame(fact.decidable?'A decision algorithm exists':'No general decider exists',['Model','Problem','Decidable?'],[[model,problem,fact.decidable?'Yes':'No']],fact.method)]};
}
export function dovetailRun(rounds=4){
 if(!Number.isInteger(rounds)||rounds<1||rounds>8)throw Error('Choose 1–8 fair rounds.');
 const counters=[0,0,0],halts=[null,3,2],frames=[frame('Before fair scheduling',['Branch','Steps received','State'],[['A',0,'Running'],['B',0,'Running'],['C',0,'Running']],'A never halts in this stated toy model; B accepts on step three and C on step two. A round gives each still-running branch one step.')];let accepted=false;
 for(let round=1;round<=rounds;round++){
  for(let i=0;i<counters.length;i++)if(halts[i]===null||counters[i]<halts[i])counters[i]++;
  accepted=halts.some((time,i)=>time!==null&&counters[i]>=time);
  frames.push(frame(`Fair round ${round}`,['Branch','Steps received','State'],counters.map((n,i)=>[`B${i}`,n,halts[i]!==null&&n>=halts[i]?'Accepted':'Still running']),`Each live branch gets another step. ${accepted?'An accepting branch has been reached.':'No accepting branch has halted yet; this is not rejection.'}`));
 }
 return {frames,accepted};
}
export function reductionRun(kind='nonempty'){
 const target=kind==='rice'?'a nontrivial semantic language property':'nonemptiness';
 return {frames:[frame('Assume a total target decider',['Known hard source','Hypothetical target'],[['TM acceptance',target]],'The reduction must construct its target instance without already solving source acceptance.'),frame('Construct N from ⟨M,w⟩',['N on arbitrary input y','Instruction'],[[1,'Simulate M on fixed input w'],[2,kind==='rice'?'If M accepts, run a fixed witness machine T on y':'If M accepts, accept y']],'If M rejects or runs forever, N accepts no input. Producing this program description is effective even though running it may not halt.'),frame('Check both source outcomes',['M accepts w','Language of N'],[['Yes',kind==='rice'?'The chosen witness language L(T)':'Σ*'],['No','∅']],'For nonemptiness, source yes maps to target yes and source no maps to target no.'),frame('Derive the contradiction',['Use of assumed decider','Consequence'],[[`Decide ${target} for N`,'Decide the known-undecidable source problem']],kind==='rice'?'For Rice’s theorem, choose a witness whose property differs from ∅. If ∅ has the property, use its complement property and invert the answer. The property must concern the language, not the spelling or number of states of its machine.':'A total nonemptiness decider would yield a total TM-acceptance decider, which is impossible. Merely running M is not such a decider.')]};
}

export function grammarProperties(grammar){
 if(typeof grammar==='string')grammar=parseGrammar(grammar);
 const nullable=new Set(),generating=new Set(),frames=[];
 let changed=true;
 while(changed){changed=false;for(const rule of grammar.rules){if(rule.rhs.every(s=>nullable.has(s))&&!nullable.has(rule.lhs)){nullable.add(rule.lhs);changed=true;}if(rule.rhs.every(s=>!/[A-Z]/.test(s)||generating.has(s))&&!generating.has(rule.lhs)){generating.add(rule.lhs);changed=true;}}frames.push(frame('Grow the fixed-point sets',['Nullable','Generating'],[[[...nullable].sort().join(', ')||'∅',[...generating].sort().join(', ')||'∅']],'A nullable right side consists only of nullable nonterminals, including the empty right side. A generating right side can finish using terminals and already-generating nonterminals.'));}
 const viable=grammar.rules.filter(r=>generating.has(r.lhs)&&r.rhs.every(s=>!/[A-Z]/.test(s)||generating.has(s))),reachable=new Set([grammar.start]);
 changed=true;while(changed){changed=false;for(const rule of viable)if(reachable.has(rule.lhs))for(const s of rule.rhs)if(/[A-Z]/.test(s)&&!reachable.has(s)){reachable.add(s);changed=true;}}
 const useful=viable.filter(r=>reachable.has(r.lhs));
 frames.push(frame('Reachability after removing nongenerating rules',['Start','Reachable in viable grammar','Useful productions'],[[grammar.start,[...reachable].sort().join(', '),useful.map(r=>`${r.lhs}→${r.rhs.join('')||'ε'}`).join('; ')||'None']],'Compute generating symbols first, then reachability in the remaining grammar; reversing the order can leave newly unreachable symbols.'));
 return {frames,nullable:[...nullable],generating:[...generating],reachable:[...reachable],useful};
}
// A bounded witness search illustrates an already-decided membership result.
// Exhausting this search is never evidence of rejection.
export function grammarDerivation(grammar,input,budget=5000){
 if(typeof grammar==='string')grammar=parseGrammar(grammar);
 const queue=[grammar.start],seen=new Map([[grammar.start,null]]),bound=input.length+2*unique(grammar.rules.map(r=>r.lhs)).length+6;
 for(let i=0;i<queue.length&&i<budget;i++){
  const form=queue[i];
  if(form===input){const path=[];let current=form;while(current!==null){const prior=seen.get(current);path.unshift({form:current,rule:prior?.rule||null});current=prior?.parent??null;}return path;}
  const at=form.search(/[A-Z]/);if(at<0)continue;
  for(const rule of grammar.rules.filter(r=>r.lhs===form[at])){
   const next=form.slice(0,at)+rule.rhs.join('')+form.slice(at+1),first=next.search(/[A-Z]/),last=Math.max(...[...next].map((s,j)=>/[A-Z]/.test(s)?j:-1));
   if(next.length>bound||next.replace(/[A-Z]/g,'').length>input.length||seen.has(next))continue;
   if(first<0&&next!==input||first>=0&&(!input.startsWith(next.slice(0,first))||!input.endsWith(next.slice(last+1))))continue;
   seen.set(next,{parent:form,rule});queue.push(next);
  }
 }
 return null;
}
function grammarScene(grammar,input){
 const parsed=parseGrammar(grammar),exact=grammarRun(parsed,input),path=exact.accepted?grammarDerivation(parsed,input):null;
 const initial=frame('Read the grammar and terminal goal',['Start symbol','Productions','Target word'],[[parsed.start,parsed.rules.map(r=>`${r.lhs}→${r.rhs.join('')||'ε'}`).join('; '),input||'ε']],'Capital letters are placeholders; lowercase symbols are terminals. A production replaces one matching placeholder. ε removes it without adding a symbol.');
 if(path){
  exact.frames=[initial,...path.map(({form,rule},i)=>frame(i===0?'Begin at the start symbol':`Rewrite ${i}: ${rule.lhs} → ${rule.rhs.join('')||'ε'}`,['Current form','What changed'],[[form||'ε',rule?`Replace the leftmost ${rule.lhs} by ${rule.rhs.join('')||'ε'}`:'No rewrite yet']],i===path.length-1?'Only terminals remain and they spell the target word exactly. These permitted rewrites establish membership.':'Keep every symbol outside the selected placeholder in its original order. The highlighted placeholder is the next one to rewrite.',{toc:{type:'derivation',input:form,position:form.search(/[A-Z]/)}}))];
 }else{
  exact.frames.unshift(initial);
  exact.frames[1].caption='For this finite membership check, a dot marks the next symbol in a production; origin is the input index where that production began. The chart keeps all compatible possibilities, including empty rewrites.';
  exact.frames.at(-1).caption+=' This result comes from complete finite chart parsing, not from a failed bounded derivation search.';
 }
 return exact;
}
export function normalFormRun(text,form='CNF'){
 const grammar=parseGrammar(text),startOnRight=grammar.rules.some(r=>r.rhs.includes(grammar.start));
 const rows=grammar.rules.map(rule=>{
  const epsilon=rule.rhs.length===0&&rule.lhs===grammar.start&&!startOnRight;
  const valid=epsilon||(form==='CNF'?rule.rhs.length===1&&!/[A-Z]/.test(rule.rhs[0])||rule.rhs.length===2&&rule.rhs.every(s=>/[A-Z]/.test(s)):rule.rhs.length>=1&&!/[A-Z]/.test(rule.rhs[0])&&rule.rhs.slice(1).every(s=>/[A-Z]/.test(s)));
  return [`${rule.lhs} → ${rule.rhs.join('')||'ε'}`,valid?'Allowed':'Needs a change'];
 });
 return {valid:rows.every(row=>row[1]==='Allowed'),frames:[frame(`Inspect ${form} production shapes`,['Production','Shape check'],rows,form==='CNF'?'CNF permits two nonterminals or one terminal on the right. A start-only ε-production is allowed here only when the start never appears on a right side.':'GNF starts each nonempty right side with one terminal followed by zero or more nonterminals. The same stated start-only ε convention applies.'),frame('Interpret the result',['Normal form','Every production allowed?'],[[form,rows.every(row=>row[1]==='Allowed')?'Yes':'No']],'This is a structural check of the written grammar. It does not claim that two arbitrary grammars are equivalent or automatically convert every grammar.')]};
}
export function languageMember(kind,word){
 if(kind==='all')return true;if(kind==='empty')return false;
 if(kind==='even-a')return [...word].filter(s=>s==='a').length%2===0;
 if(kind==='contains-b')return word.includes('b');
 const match=word.match(/^(a*)(b*)$/),equal=!!match&&match[1].length===match[2].length;
 if(kind==='anbn')return equal;if(kind==='not-anbn')return !equal;
 throw Error('Unknown named language.');
}
export function tocExperiment(spec={}){
 if(['pumping','nerode','enumeration','diagonal','dovetail'].includes(spec.kind))return {label:{pumping:'Pumping-length example p',nerode:'Prefix count n',enumeration:'Number of enumeration entries',diagonal:'Visible diagonal size',dovetail:'Fair simulation rounds'}[spec.kind],type:'number',min:spec.kind==='diagonal'||spec.kind==='pumping'?2:1,max:spec.kind==='diagonal'?8:spec.kind==='pumping'?12:spec.kind==='enumeration'?24:8,value:spec.parameter||4};
 if(['grammar-properties','normal-form'].includes(spec.kind))return {label:'Productions: S -> aSb | ε; separate rules with semicolons',type:'text',value:spec.grammar||'S -> AB; A -> aA | ε; B -> b'};
 if(spec.kind==='minimize')return {label:'Accepting mask for A,B,C,D (1 accepts, 0 rejects)',type:'text',value:spec.input||'1010'};
 if(spec.kind==='decision')return {label:'Problem (membership, emptiness, universality, equivalence, or halting)',type:'text',value:spec.problem||'emptiness'};
 if(['reduction','hierarchy'].includes(spec.kind))return null;
 return {label:spec.kind==='regex'?'Word to test against the displayed expression':`Input word${spec.kind==='tm'?' (at most 12 symbols)':''}; leave blank for ε`,type:'text',value:spec.input??((!spec.kind||spec.kind==='dfa')&&['even','remainder'].includes(spec.machine||'even')?'1011':'aabb')};
}
export function tocContract(spec={}){
 const kind=spec.kind||'dfa',separate='Separate, ungraded example. ';
 if(kind==='dfa'){
  const property={even:'binary words with an even number of 1 bits',prefix:'words over {a,b} beginning with ab',suffix:`words ending in ${spec.pattern||'ab'}`,contains:`words containing ${spec.pattern||'ab'}`,'empty-word':'only the empty word ε','second-last':'words over {a,b} with a as their second-last symbol',length:`words over {a,b} whose length is divisible by ${spec.modulus||3}`,remainder:`binary words whose numeric value is divisible by ${spec.modulus||3}, treating ε as zero`}[spec.machine||'even'];
  return separate+`This complete DFA recognizes ${property}. Start at the labeled start state, consume every symbol, then check the accepting flag.`;
 }
 if(['regex','nfa','subset'].includes(kind))return separate+`Language expression: ${spec.expression||'(a|b)*ab'}. Union | chooses either operand, juxtaposition joins words, and * allows zero or more repetitions. ε is the empty word; ∅ has no words. ${kind==='subset'?'Each DFA subset stores every possible original NFA state.':'Keep every possible branch until the complete input has been consumed.'}`;
 if(kind==='pda')return separate+`Require all a symbols before all b symbols. Track D=${spec.offset||0}+${spec.aWeight||1}×count(a)−${spec.bWeight||1}×count(b), then require D ${spec.relation==='greater'?'> 0':spec.relation==='less'?'< 0':spec.relation==='unequal'?'≠ 0':'= 0'}. The bottom marker Z is not an unmatched input symbol.`;
 if(kind==='palindrome')return separate+(spec.marker?'Recognize w#wᴿ: exactly one # marks where pushing stops and reverse matching begins.':'Recognize wwᴿ, the even palindromes over {a,b}. Try possible midpoints; one successful complete branch is sufficient.');
 if(kind==='tm')return separate+`${spec.machine==='unary'?'Append one 1 to a unary word.':spec.machine==='binary'?'Increment a binary value by one, with ε interpreted as zero.':spec.machine==='loop'?'This particular machine repeatedly moves right and has no halting transition.':'Mark and match to decide a^n b^n for n≥0.'} The tape view follows a nine-cell window around the head. A ${spec.limit||240}-transition budget limits display; reaching that budget is not rejection.`;
 const text={words:'An alphabet supplies symbols; a word is a finite sequence. Splitting after position i identifies a consumed prefix and its remaining suffix. Blank input means ε.',language:'Choose one whole word from each displayed set, concatenate in order and remove duplicates. {ε} has one element; ∅ has none.',minimize:'The four input flags choose accepting states A,B,C,D. Remove unreachable states, separate acceptance flags, then split until every block has consistent next blocks.',grammar:'Capitals are placeholders and lowercase symbols are terminals. Use the displayed productions to generate the target word. Membership is decided by a finite chart; accepted examples show short leftmost rewrites where available. Input is limited to fourteen symbols.','grammar-properties':'Enter productions separated by semicolons. Compute nullable and generating variables to a fixed point, then reachability after removing nongenerating rules. The first left side supplies the start symbol.','normal-form':`Check ${spec.form||'CNF'} production shapes. An ε-rule is allowed here only for the start symbol when the start never occurs on a right side. This checker does not perform a full normal-form conversion.`,closure:'The universe is {a,b}*. even-a means an even a-count; contains-b means at least one b; anbn means a^n b^n; not-anbn is its complement. Finite membership checks illustrate set operations, not general closure proofs.',pumping:'For the hypothetical pumping length p, every legal nonempty y lies within the first p a symbols of a^p b^p. Follow the general argument for every legal split, not just the visible example.',nerode:'Append exactly the same suffix to two prefixes. Opposite membership outcomes distinguish them. Infinitely many pairwise-distinguishable prefixes, rather than a finite sample, establish the nonregularity proof.',enumeration:'Indices start at zero. Each displayed entry is a finite prefix of a fair infinite listing. Explain why every fixed element is eventually reached; the visible window alone does not prove exhaustiveness.',diagonal:'Rows represent infinite binary sequences. Flip row n at coordinate n to differ from that row. The visible square illustrates a construction defined at every natural coordinate.',decision:`The input representation is ${spec.model||'DFA'}. A decider must answer correctly and halt on every valid instance; a recognizer can fail to halt on no instances. Keep the representation and quantifiers fixed.`,reduction:'Construct a target description effectively, then check both source yes and source no cases. Rice’s theorem additionally requires a nontrivial property of the recognized language, not of machine syntax.',dovetail:'A fair round gives every still-running simulation one step. A branch that never halts must not prevent another branch from reaching acceptance.',hierarchy:spec.variant==='closure'?'Closure is a claim about every allowed pair of operand languages. Distinguish CFL from DCFL and finite operations from infinite ones. A sample word cannot establish a general closure theorem.':'Compare the least sufficient memory model. The strict containments describe language families, not elapsed runtime on one example.'};
 return separate+(text[kind]||'Follow the written rules and acceptance convention.');
}
export function tocScene(spec={},value){
 const kind=spec.kind||'dfa';value??=tocExperiment(spec)?.value;
 const title=spec.title||'Try a small formal-language experiment';let result;
 if(kind==='dfa')result=dfaRun(makeDfa(spec.machine||'even',spec.modulus||spec.pattern||3),String(value));
 else if(kind==='nfa'||kind==='regex'||kind==='subset'){
  const expression=spec.expression||'(a|b)*ab',nfa=regexNfa(expression,spec.alphabet);
  result=kind==='subset'?dfaRun(subsetDfa(nfa),String(value)):nfaRun(nfa,String(value));
  result.frames.unshift(frame('Read the stated expression',['Expression','Operators'],[[expression,'Union | or +; concatenation; repetition *; ε; ∅']],'This expression describes a language. Membership tests ask about one finite word; they do not prove general expression identities.'));
 }else if(kind==='minimize'){
  if(!/^[01]{4}$/.test(String(value)))throw Error('Write exactly four binary flags for accepting states A,B,C,D.');
  const machine={states:['A','B','C','D'],alphabet:['a','b'],start:'A',finals:['A','B','C','D'].filter((q,i)=>String(value)[i]==='1'),delta:{A:{a:'B',b:'C'},B:{a:'A',b:'D'},C:{a:'D',b:'A'},D:{a:'C',b:'B'}}};
  result=minimizeDfa(machine);result.frames.unshift(frame('The machine before minimization',['State','a','b','Accepting'],machine.states.map(q=>[q,machine.delta[q].a,machine.delta[q].b,machine.finals.includes(q)?'Yes':'No']),'The accepting mask changes the language and can change which states are equivalent.',{toc:{type:'automaton',machine,active:[machine.start],input:'',position:0}}));
 }else if(kind==='grammar')result=grammarScene(spec.grammar||'S -> aSb | ε',String(value));
 else if(kind==='grammar-properties')result=grammarProperties(String(value));
 else if(kind==='normal-form')result=normalFormRun(String(value),spec.form||'CNF');
 else if(kind==='pda')result=stackRun(String(value),spec);
 else if(kind==='palindrome')result=palindromeRun(String(value),!!spec.marker);
 else if(kind==='tm')result=turingRun(String(value),spec.machine||'match',spec.limit||240);
 else if(kind==='pumping')result=pumpingRun(Number(value),Math.min(spec.split||1,Number(value)),spec.power??0);
 else if(kind==='enumeration')result=enumerationRun(spec.enumeration||'strings',Number(value));
 else if(kind==='diagonal')result=diagonalRun(Number(value));
 else if(kind==='decision')result=decisionRun(spec.model||'DFA',String(value));
 else if(kind==='dovetail')result=dovetailRun(Number(value));
 else if(kind==='reduction')result=reductionRun(spec.reduction||'nonempty');
 else if(kind==='nerode'){
  const n=Number(value);if(!Number.isInteger(n)||n<1||n>8)throw Error('Choose an integer from 1 to 8.');
  result={frames:[frame('Compare two unequal prefixes',['Prefix x','Prefix y','Shared suffix z'],[['a'.repeat(n),'a'.repeat(n+1),'b'.repeat(n)]],'For L={a^k b^k}, compare a^n with a^(n+1), using exactly the same suffix b^n.'),frame('Append the distinguishing suffix',['Extended word','In L?'],[['a'.repeat(n)+'b'.repeat(n),'Yes'],['a'.repeat(n+1)+'b'.repeat(n),'No']],'One extension has equal block counts and the other does not. These prefixes cannot be summarized by the same DFA state.'),frame('Generalize beyond the drawing',['Arbitrary distinct i,j','Distinguishing suffix'],[['a^i and a^j','b^i']],'For every i≠j, a^i b^i belongs to L while a^j b^i does not. Infinitely many pairwise-distinguishable prefixes imply infinitely many required states, so no finite DFA recognizes L.')]};
 }else if(kind==='closure'){
  const word=checkWord(String(value),['a','b']),left=spec.left||'even-a',right=spec.right||'contains-b',a=languageMember(left,word),b=languageMember(right,word);
  result={frames:[frame('Fix the universe and the two languages',['Universe','L₁','L₂'],[['{a,b}*',left,right]],'Complements are relative to the stated alphabet universe, not relative to a finite test list.'),frame('Test membership in each operand',['Word','In L₁?','In L₂?'],[[word||'ε',a?'Yes':'No',b?'Yes':'No']],'Evaluate each language definition before combining the results.'),frame('Apply the set operations',['Union','Intersection','L₁ − L₂','Complement of L₁'],[[a||b?'Yes':'No',a&&b?'Yes':'No',a&&!b?'Yes':'No',!a?'Yes':'No']],'Union uses OR; intersection uses AND; difference keeps L₁-members outside L₂; complement flips membership in the fixed universe. A finite membership experiment is not a closure proof.')]};
 }else if(kind==='words'){
  const word=checkWord(String(value),['a','b'],12),prefixes=Array.from({length:word.length+1},(_,i)=>word.slice(0,i)),suffixes=Array.from({length:word.length+1},(_,i)=>word.slice(i));
  result={frames:[frame('Symbols form a finite word',['Word','Length','Reversed'],[[word||'ε',word.length,[...word].reverse().join('')||'ε']],'An alphabet supplies symbols. A word is a finite ordered sequence of those symbols; ε has length zero.',{toc:{type:'word',input:word,position:0}}),...Array.from({length:word.length},(_,i)=>frame(`Consume prefix of length ${i+1}`,['Prefix','Remaining suffix'],[[prefixes[i+1]||'ε',suffixes[i+1]||'ε']],'The split is between symbols. Prefixes and suffixes need not have the same length.',{toc:{type:'word',input:word,position:i+1}})),frame('List the boundary cases',['Prefixes','Suffixes'],[[prefixes.map(s=>s||'ε').join(', '),suffixes.map(s=>s||'ε').join(', ')]],'Both lists include ε and the complete word. Repeated equal strings are the same set element, even when they arise at different positions.')]};
 }else if(kind==='language'){
  const word=checkWord(String(value),['a','b'],10),left=spec.words||['','a','ab'],right=spec.other||['b','ab'],concatenated=unique(left.flatMap(x=>right.map(y=>x+y)));
  result={frames:[frame('A language is a set of words',['L₁','L₂'],[[left.map(w=>w||'ε').join(', '),right.map(w=>w||'ε').join(', ')]],'A language may contain ε as one element. The empty language contains no elements at all.'),frame('Choose one word from each set',['Left word','Right word','Concatenation'],left.flatMap(x=>right.map(y=>[x||'ε',y||'ε',(x+y)||'ε'])),'Concatenation joins in order. Distinct pairs can produce the same final word, which is kept only once in the language.'),frame('Check the resulting set',['L₁L₂','Given word','Membership'],[[concatenated.map(w=>w||'ε').join(', '),word||'ε',concatenated.includes(word)?'Yes':'No']],'The identity language {ε} preserves L under concatenation. The empty language ∅ annihilates L under concatenation.')]};
 }else if(kind==='hierarchy'&&spec.variant==='closure'){
  result={frames:[frame('Separate the two stack-language families',['Family','Union','Intersection','Complement'],[['CFL','Closed','Not in general','Not in general'],['DCFL','Not in general','Not in general','Closed']],'These are universal class statements over a fixed alphabet. DPDA complementation uses a suitable construction and input-end convention, not blind final-state flipping.'),frame('A concrete intersection obstruction',['Left DCFL','Right DCFL','Intersection'],[['{a^n b^n c^m : n,m≥0}','{a^m b^n c^n : n,m≥0}','{a^n b^n c^n : n≥0}']],'Each operand compares one ordered pair of blocks using a deterministic stack. Their intersection forces three equal unbounded blocks, which is not context-free.'),frame('Add a finite-state filter',['Operation','Guarantee'],[['CFL ∩ REG','CFL'],['DCFL ∩ REG','DCFL']],'The stack machine can store a regular filter’s DFA state in its finite control without adding a second stack or a nondeterministic choice.'),frame('State exactly which construction is justified',['CFL concatenation and star','DCFL concatenation and star'],[['Closed via grammar or nondeterministic constructions','Not closed in general']],'A construction that guesses a boundary proves a CFL result; it is not automatically a deterministic construction.')]};
 }else if(kind==='hierarchy'){
  result={frames:[frame('Compare memory models',['Model','Memory resource','Recognized family'],[['DFA / NFA','Finite state','Regular'],['Nondeterministic PDA','One unbounded stack','Context-free'],['Linear-bounded automaton','Linearly bounded tape','Context-sensitive'],['Turing machine','Unbounded tape','Turing-recognizable']],'These resources describe classes of languages, not measured runtime for a single input.'),frame('Use strict containment carefully',['Containment','Counterexample idea'],[['REG ⊊ CFL','{a^n b^n} is CFL but not regular'],['CFL ⊊ CSL','{a^n b^n c^n} needs more than one-stack context-free power'],['CSL ⊊ Decidable ⊊ Recognizable','Recognizers may fail to halt outside their language']],'A recognizer for a language need not decide it. Every context-sensitive language is decidable, but the converse is false.')]};
 }else throw Error(`No TOC teaching model registered for ${kind}.`);
 return {title,frames:result.frames,assumptions:spec.assumptions||tocContract(spec),result};
}
