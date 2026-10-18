import {normalFormRun,enumerationRun} from '../../../packages/learning/toc-models.js';

// Distractors express an actual error in the displayed model. Never replace
// them with the same three unrelated assertions across the whole subject.
export const misconceptions={
 words:['The empty word contains one invisible symbol.','Concatenating two words always permits reversing their symbol order.'],
 language:['The empty set and the set containing ε have the same members.','Every different concatenating pair must produce a different result word.'],
 dfa:['Visiting an accepting state accepts the word even if input remains.','A deterministic state-symbol pair may choose either of two destinations.'],
 nfa:['One rejecting branch forces every other branch to reject.','An ε-transition must consume an extra input character.'],
 regex:['A starred expression requires at least one repetition.','Concatenation is commutative for every two languages.'],
 subset:['A subset state accepts only when every original state in it accepts.','The empty active subset has an accepting branch by default.'],
 minimize:['Any two rejecting states can always be merged.','Unreachable states increase the minimum number of reachable memories.'],
 grammar:['A form containing an unreplaced nonterminal is already a terminal word.','A production may arbitrarily reorder terminals outside the replaced placeholder.'],
 'grammar-properties':['Every reachable nonterminal must also generate a terminal word.','Deleting a nullable production never requires adding replacement alternatives.'],
 'normal-form':['CNF allows any number of nonterminals on a nonempty right side.','GNF permits a nonterminal before the first terminal on a nonempty right side.'],
 pda:['Equal counts alone enforce the required a-before-b block order.','The bottom marker counts as one unmatched a in every input.'],
 palindrome:['A stack returns pushed symbols in their original forward order.','An unmarked midpoint is automatically visible to deterministic one-way control.'],
 tm:['A repeated control state alone proves a repeated full configuration.','Reaching a finite simulation limit proves rejection.'],
 pumping:['Choosing one convenient decomposition suffices for a nonregularity proof.','Passing the pumping condition is a general proof of regularity.'],
 nerode:['Different suffixes may be used on the two prefixes in one distinguishing test.','One distinguishable pair proves an infinite state lower bound.'],
 closure:['Closure under two-operand union automatically proves closure under infinite union.','Complementation never depends on the chosen alphabet universe.'],
 hierarchy:['Every context-free language is regular.','Every Turing recognizer halts on nonmembers.'],
 decision:['A recognizer is a decider even if some no instances never halt.','A finite sample of machines decides the classification for every encoded machine.'],
 reduction:['Reducing a target to an undecidable source proves the target undecidable.','Rice’s theorem applies to every syntactic property of machine descriptions.'],
 dovetail:['A fair scheduler waits for its first simulation to halt before serving another.','A finite set of unfinished rounds proves that every branch runs forever.'],
 enumeration:['Completing an infinite first row before visiting the next row is a fair pair listing.','A finite displayed prefix exhausts every countably infinite set.'],
 diagonal:['Finite binary words and infinite binary sequences form the same set.','Flipping finitely many visible bits alone proves a claim about every infinite row.']
};

const item=(prompt,correct,wrong,why)=>({prompt,correct,wrong,why});
const familyChecks={
 98:[
  item('Which least language family contains all words over {a,b} ending in ab?','Regular',['Context-free but nonregular','Not context-free'],'Only a bounded suffix memory is needed.'),
  item('Which least family contains {a^n b^n:n≥0}?','Deterministic context-free but nonregular',['Regular','Not context-free'],'A deterministic stack compares ordered blocks; distinguishable a-prefixes rule out a DFA.'),
  item('For alphabet {a,b}, classify {wwᴿ:w∈{a,b}*}, the unmarked even palindromes.','Context-free but not deterministic context-free',['Regular','Not context-free'],'An NPDA guesses the midpoint. The unmarked binary even-palindrome language is not a DCFL.'),
  item('Which memory is sufficient for {w#wᴿ:w∈{a,b}*}, with exactly one #?','A deterministic pushdown stack',['Finite state only','Two independently addressable tapes are necessary'],'The visible # chooses when to switch from pushing to matching.'),
  item('Which least family contains {a^n b^n c^n:n≥0}?','Context-sensitive but not context-free',['Context-free','Regular'],'Three unbounded equal blocks are not a CFL; a linear-bounded tape can mark and compare them.'),
  item('Which least family contains every binary word whose number of 1s is even?','Regular',['Context-free but nonregular','Unrecognizable'],'Even and odd parity are two finite memories.'),
  item('A language is the explicitly listed set {ε,ab,ba,abba}. Which least family contains it?','Regular',['Deterministic context-free but nonregular','Undecidable'],'Every finite language has a finite trie recognizer.'),
  item('Over {a,b}, classify {ww:w∈{a,b}*}, where the second copy has the same forward order.','Context-sensitive but not context-free',['Regular','Deterministic context-free'],'Copying an arbitrary binary word in forward order is not the stack reversal task.'),
  item('A binary language contains exactly the words whose lengths are multiples of seven. Which least family contains it?','Regular',['Context-free but nonregular','Not decidable'],'Seven reachable length residues suffice.')
 ],
 102:[
  item('For every CFL L and regular R over a fixed alphabet, is L∩R context-free?','Yes',['No'],'Carry the DFA memory in the finite control of the PDA.'),
  item('Are arbitrary context-free languages closed under union?','Yes',['No'],'A nondeterministic construction can choose which operand grammar to generate.'),
  item('Are arbitrary context-free languages closed under concatenation?','Yes',['No'],'A grammar can concatenate a generated left word and a generated right word.'),
  item('Are arbitrary context-free languages closed under Kleene star?','Yes',['No'],'A CFG can generate any finite number of operand words, including zero.'),
  item('Does intersecting two arbitrary CFLs always yield a CFL?','No',['Yes'],'Intersect {a^n b^n c^m} with {a^m b^n c^n}; the result is {a^n b^n c^n}, which is not a CFL.'),
  item('Are arbitrary CFLs closed under complement in the same alphabet universe?','No',['Yes'],'Complement plus union closure would imply intersection closure by De Morgan’s law.'),
  item('Are DCFLs closed under complement with the standard whole-input convention?','Yes',['No'],'A suitable deterministic pushdown construction handles the input-end and halting conventions; simply flipping arbitrary PDA final states is insufficient.'),
  item('Does union of two arbitrary DCFLs always remain deterministic context-free?','No',['Yes'],'A union may require choosing which deterministic stack comparison to perform.'),
  item('Does intersection of two arbitrary DCFLs always remain deterministic context-free?','No',['Yes'],'The two deterministic ordered-equality languages can intersect to form the non-CFL triple-equality language.')
 ],
 105:[
  item('Which language family is recognized exactly by DFAs and NFAs?','Regular',['All context-free','All decidable'],'Nondeterministic finite state has the same language power as deterministic finite state.'),
  item('Which language family is recognized exactly by nondeterministic pushdown automata?','Context-free',['Only regular','All context-sensitive'],'One unbounded stack corresponds to context-free grammars.'),
  item('Which standard model recognizes context-sensitive languages?','Linear-bounded automaton',['DFA','One-way finite-memory transducer'],'The available tape is bounded linearly in the input size.'),
  item('Is every regular language also context-free?','Yes',['No'],'A finite automaton can be converted to a right-linear CFG.'),
  item('Is every context-free language also regular?','No',['Yes'],'{a^n b^n} is context-free but not regular.'),
  item('Must a recognizer for every Turing-recognizable language halt on all nonmembers?','No',['Yes'],'Recognition guarantees acceptance of members; deciding additionally requires halting on nonmembers.'),
  item('Is every context-sensitive language decidable?','Yes',['No'],'For a fixed input, a linear-bounded machine has finitely many configurations; reachability is decidable.'),
  item('Are all decidable languages context-sensitive?','No',['Yes'],'Context-sensitive languages use linearly bounded space; decidable languages can require more space.'),
  item('Which strict chain correctly places the standard language families?','REG ⊊ CFL ⊊ CSL ⊊ Decidable ⊊ Recognizable',['CFL ⊊ REG ⊊ Recognizable','Recognizable ⊊ Decidable ⊊ REG'],'Each inclusion is proper; the hierarchy compares language classes, not the runtime of a single execution.')
 ]
};
const cfgChecks=[
 item('Given an arbitrary CFG G and finite word w, can an algorithm always halt and decide w∈L(G)?','Yes',['No'],'A finite chart parser decides membership, including grammars with empty productions and left recursion.'),
 item('Given an arbitrary CFG G, is emptiness of L(G) decidable?','Yes',['No'],'Compute generating nonterminals to a fixed point and check the start symbol.'),
 item('Given arbitrary CFGs G and H, is L(G)=L(H) decidable in general?','No',['Yes'],'General CFG equivalence is undecidable; testing a finite set of words is insufficient.'),
 item('For an arbitrary CFG over {a,b}, is L(G)={a,b}* decidable in general?','No',['Yes'],'CFG universality is undecidable even though membership for a fixed word is decidable.'),
 item('A CFG has S→AB, A→a and B→B. Does its start symbol generate any terminal-only word?','No',['Yes'],'B cannot terminate, so AB cannot terminate and S is nongenerating.'),
 item('A CFG has S→AB|ε, A→a and B→B. Is its language empty?','No',['Yes'],'The direct ε alternative is a terminal-only derivation, even though the AB alternative cannot finish.'),
 item('Can removing useless CFG productions provide a general algorithm for deciding equivalence of two arbitrary CFGs?','No',['Yes'],'Simplification preserves each language but does not solve the undecidable cross-grammar equivalence problem.'),
 item('Can a complete finite chart parse reject a fixed word without enumerating all possible derivations forever?','Yes',['No'],'The chart has finitely many production-position and origin-index combinations for that fixed word.'),
 item('Does agreement of two CFGs on every tested word of length at most twenty prove general equivalence?','No',['Yes'],'A word longer than the finite test bound may distinguish the languages.')
];

export function alignedQuestion(topic,stage,variant,{choice,number,index,words}){
 const spec=topic.spec,slot=stage*3+variant%3,seed=index*31+stage*11+variant,tag=domain=>q=>({...q,assessment:{domain}});
 const bank=familyChecks[index]||(spec.kind==='decision'&&spec.model==='CFG'?cfgChecks:null);
 if(bank){const q=bank[slot];return tag(spec.kind==='hierarchy'?'language-family':'cfg-decision')(choice(q.prompt,q.correct,q.wrong,q.why));}
 if(index===119){
  const n=3+seed%14,bits=Math.ceil(Math.log2(n)),source=seed%n,destination=Math.floor(seed/3)%n,inputBit=seed%2,code=i=>i.toString(2).padStart(bits,'0'),record=code(source)+inputBit+code(destination);
  const setup=`A finite machine has states q0…q${n-1}. Each state ID is an unsigned ${bits}-bit binary field, padded on the left with zeros. Symbols a,b use 0,1. A transition record is source-state, input-symbol, destination-state, in that order.`;
  if(variant%3===0)return tag('machine-encoding')(number(`${setup} How many bits does one transition record occupy?`,2*bits+1,`Two ${bits}-bit state fields plus one symbol bit total ${2*bits+1} bits.`));
  if(variant%3===1)return tag('machine-encoding')(choice(`${setup} Decode record ${record}. Which destination state does it name?`,`q${destination}`,[`q${(destination+1)%n}`,`q${(destination+2)%n}`],`The last ${bits} bits are ${code(destination)}, binary ${destination}.`));
  const candidate=(seed*7)%(2**bits),valid=candidate<n;
  return tag('machine-encoding')(choice(`${setup} Is binary field ${code(candidate)} a valid declared state ID?`,valid?'Yes':'No',[valid?'No':'Yes'],`The field denotes ${candidate}; valid IDs run from 0 through ${n-1}. Spare binary codes do not create extra declared states.`));
 }
 if(index===120){
  const cases=[
   item('Which input describes a DFA membership instance?','A DFA description D and one finite word w',['Only a list of state names','Two languages with no finite representations'],'The question is whether that particular D accepts that particular w.'),
   item('Which language encodes DFA emptiness as a yes/no decision problem?','{⟨D⟩ : D is a DFA and L(D)=∅}',['{w : w is any word accepted by some DFA}','{⟨D,w⟩ : D accepts w}'],'An emptiness instance supplies the machine description, and yes means no word is accepted.'),
   item('A DFA universality instance supplies D over alphabet Σ. What does a yes answer assert?','Every word in Σ* is accepted',['Some single chosen word is accepted','The written DFA has infinitely many states'],'The quantifier ranges over every finite word in the fixed alphabet universe.'),
   item('Which finite input describes a DFA equivalence instance?','Two DFA descriptions D and E over the same alphabet',['Only one accepted word','Only a number of accepting states'],'Equivalence asks whether both machines accept exactly the same words.'),
   item('Does an encoding ⟨M⟩ running as input data automatically execute machine M?','No; an interpreter must read and simulate the description',['Yes; every finite bit string executes itself'],'Representing a machine as a word is distinct from running its transition rules.'),
   item('A fixed encoding convention reserves some bit patterns that describe no valid machine. Must a decision problem specify how such inputs are handled?','Yes',['No'],'A total procedure has behavior on every input; invalid descriptions must be recognized or handled by the problem convention.'),
   item('Two effective unambiguous machine encodings differ in separators. Does the exact separator spelling alone settle acceptance-problem decidability?','No',['Yes'],'Effective translation between descriptions preserves the underlying computability question.'),
   item('Which assertion distinguishes a yes-instance encoding from an accepted input word of the represented machine?','⟨D,w⟩ is data for the membership procedure; w is data for D',['They must be the same string and serve the same role','D must accept its own description whenever it accepts w'],'A decision language can contain encodings of machine-word pairs; the machine’s own input is a separate component.'),
   item('Can an infinite family of finite machine descriptions still form a language over a finite encoding alphabet?','Yes',['No'],'A language may contain infinitely many finite words; its alphabet can remain finite.')
  ];
  const q=cases[slot];return tag('decision-encoding')(choice(q.prompt,q.correct,q.wrong,q.why));
 }
 if(index===125){
  const m=2+seed%6,mask=(seed*13+3)%(2**m),other=variant%3===1?mask^(1<<(Math.floor(seed/3)%m)):seed%4===0?mask:(seed*7+1)%(2**m),different=mask^other;
  const given={title:`Two complete cycle DFAs, both starting at r0 over {a,b}`,headers:['State','Next on a or b','D accepts?','E accepts?'],rows:Array.from({length:m},(_,i)=>[`r${i}`,`r${(i+1)%m}`,mask&(1<<i)?'Yes':'No',other&(1<<i)?'Yes':'No'])};
  if(variant%3===0)return tag('dfa-equivalence')(choice('Do the two displayed DFAs recognize the same language?',different===0?'Yes':'No',[different===0?'No':'Yes'],'All residue states are reachable together. The languages agree exactly when both accepting flags agree at every reachable pair.',given));
  if(variant%3===1){let shortest=0;while(!(different&(1<<shortest)))shortest++;return tag('dfa-equivalence')(number('What is the shortest length of a word distinguishing the displayed DFAs?',shortest,`Reading any word of length ${shortest} reaches the first residue with different accepting flags. All shorter residues agree.`,given));}
  const count=Array.from({length:m},(_,i)=>!!(different&(1<<i))).filter(Boolean).length;
  return tag('dfa-equivalence')(number('How many reachable product-state pairs accept in the symmetric-difference machine for these DFAs?',count,'The common transition cycle reaches only pairs (ri,ri). A pair accepts in the symmetric difference exactly when one flag is Yes and the other No.',given));
 }
 if(spec.kind==='normal-form'){
  const form=variant%2?'GNF':'CNF',a='ab'[seed%2],b='ab'[Math.floor(seed/2)%2],tail='AB'.repeat(1+Math.floor(seed/4)%5),shape=seed%5;
  const rhs=shape===0?'AB':shape===1?a+tail:shape===2?tail:shape===3?a+b:shape===4?'ε':a;
  const grammar=`S -> ${rhs}; A -> ${a}; B -> ${b}${shape===4?'; B -> S':''}`,result=normalFormRun(grammar,form);
  const given={title:`Inspect ${form} rules`,headers:['Production'],rows:result.frames[0].rows.map(r=>[r[0]])};
  const q=variant%3===1?number(`For the displayed grammar, how many productions violate ${form} under the start-only ε exception?`,result.frames[0].rows.filter(r=>r[1]!=='Allowed').length,'Check every right-side shape; a start ε-rule is allowed only when the start never appears on a right side.',given):choice(`Does every production in this grammar satisfy ${form}?`,result.valid?'Yes':'No',[result.valid?'No':'Yes'],`${form}: ${result.frames[0].caption}`,given);
  return {...q,assessment:{domain:'normal-form',form,grammar}};
 }
 if(spec.kind==='decision'&&spec.model==='TM'){
  const word=words[1+seed%(words.length-1)],shown=word||'ε',halts=spec.problem==='halting',task=halts?`halts on ${shown}`:`accepts ${shown}`,budget=5+seed%100;
  const cases=[
   item(`For an arbitrary encoded TM M, is there a total general algorithm deciding whether M ${task}?`,'No',['Yes'],'General TM acceptance and halting are undecidable; the particular finite input does not turn an arbitrary machine into a finite-state model.'),
   item(`Can a simulator recognize a positive instance of “M ${task}” by waiting for the corresponding event?`,'Yes',['No'],`An actual ${halts?'halt':'accepting halt'} is finite evidence. On a negative instance, waiting may never finish.`),
   item(`M has not halted after ${budget} steps on ${shown}. What is justified about its eventual outcome?`,'The eventual outcome is still unknown',['M rejects the word','M will never halt'],'A finite timeout is neither rejection nor a proof of nonhalting.'),
   item(`M rejects ${shown} immediately and N loops forever on ${shown}; both accept no words. Can this halting difference alone be classified as a property of their recognized language?`,'No',['Yes'],'The recognized languages are both empty, yet their halting behavior differs. Rice’s theorem requires dependence on the language alone.'),
   item(`Does a universal simulator automatically halt when the encoded computation of M on ${shown} runs forever?`,'No',['Yes'],'Universal simulation reproduces execution; it does not supply a general halting predictor.'),
   item(`Is “M halts within ${budget} transitions on ${shown}” decidable when that finite bound is part of the input?`,'Yes',['No'],`Simulate at most ${budget} transitions. A bounded question differs from eventual halting.`),
   item(`To describe the instance “M ${task}”, which data must the input encoding identify?`,'Both a machine description and the particular word',['Only the word; every machine behaves the same','Only a machine state count'],'The behavior question identifies the program to run and its input.'),
   item(`Recognizers for L and its complement are both available. For word ${shown}, which method yields a decider?`,'Dovetail both simulations and stop when one accepts',['Wait forever for the first recognizer before starting the second','Reject after a fixed number of steps'],'Exactly one language contains the word; fair simulation eventually reaches its accepting run.'),
   item(`If a TM accepts ${shown} after ${budget} transitions, does that fact prove it is a decider on every other word?`,'No',['Yes'],'One accepting execution establishes one membership fact, not total halting over all inputs.')
  ];
  const q=cases[slot];return tag('tm-decision')(choice(q.prompt,q.correct,q.wrong,q.why));
 }
 if(spec.kind==='reduction'&&variant%3===1){
  const n=2+seed%97,extra=1+Math.floor(seed/3)%9;
  return tag('rice-syntax')(choice(`A TM has ${n} declared states. Adding ${extra} unreachable states preserves its recognized language but changes the property “has exactly ${n} declared states.” Does Rice’s theorem apply to that property?`,'No; it is a syntactic property',['Yes; every property mentioning a TM is covered'],'Equivalent recognized languages can have different description sizes. State counting is a terminating syntactic inspection.'));
 }
 if(spec.kind==='reduction'&&variant%3===2){
  const finite=seed%5===0?[]:[words[1+seed%(words.length-1)],words[1+(seed*7)%(words.length-1)]],set=[...new Set(finite)],nontrivial=set.length>0;
  return tag('rice-semantic')(choice(`For an arbitrary TM over {a,b}, let P mean “its language contains at least one word from F={${set.join(', ')||'∅'}}.” Is P a nontrivial semantic property to which Rice’s theorem applies?`,nontrivial?'Yes':'No',[nontrivial?'No':'Yes'],nontrivial?`The empty language fails P and the singleton {${set[0]}} satisfies P. P depends only on the recognized language.`:'F is empty, so P is false for every language. This property is trivial and does not meet the theorem’s hypotheses.'));
 }
 if(spec.kind==='enumeration'){
  const kind=spec.enumeration||'strings',count=24,entries=enumerationRun(kind,count).entries.map(String),at=1+seed%20;
  const definition={strings:'finite binary-letter words over {a,b}, by length then alphabetic order a<b, starting with ε',integers:'integers in order 0,1,−1,2,−2,…',pairs:'nonnegative pairs by increasing coordinate sum, then increasing first coordinate',rationals:'rational values by increasing positive numerator-plus-denominator, increasing numerator, keeping only coprime pairs, interleaving positive then negative signs after initial zero'}[kind];
  if(variant%3===0)return tag('enumeration-next')(choice(`List ${definition}. What is the element at zero-based index ${at}?`,entries[at],[entries[at-1],entries[at+1]],`Counting from index zero gives ${entries[at]}. Every entry has a finite index; a finite displayed prefix does not exhaust the set.`));
  if(variant%3===1)return tag('enumeration-index')(number(`List ${definition}. At what zero-based index does ${entries[at]} occur?`,at,`${entries[at]} is entry ${at} when the initial entry is index zero.`));
  if(kind==='strings'){
   const length=2+seed%9;
   return tag('enumeration-bound')(number(`Words over {a,b} are listed by increasing length. How many words, including ε, appear before the first word of length ${length}?`,2**length-1,`Sum the counts 2^0+…+2^${length-1}=2^${length}−1. Each fixed finite length has only finitely many preceding words.`));
  }
  if(kind==='integers'){
   const target=1+seed%40;
   return tag('enumeration-bound')(number(`In 0,1,−1,2,−2,…, what is the zero-based index of −${target}?`,target*2,`Negative −n is at index 2n, so −${target} is at ${target*2}. Alternating signs avoids starving negative values.`));
  }
  if(kind==='pairs'){
   const i=1+seed%9,j=1+Math.floor(seed/3)%9,sum=i+j;
   return tag('enumeration-bound')(number(`List pairs (i,j) of nonnegative integers by increasing i+j, then increasing i. What zero-based index contains (${i},${j})?`,sum*(sum+1)/2+i,`${sum} earlier diagonals contain ${sum*(sum+1)/2} pairs; add first-coordinate offset ${i}.`));
  }
  const numerator=1+seed%17,denominator=18+seed%23;
  return tag('enumeration-bound')(choice(`In the fair signed-rational diagonal listing, can the rational ${numerator}/${denominator} be postponed forever merely because it is absent from the first ${at} entries?`,'No; its reduced numerator and denominator have a finite coordinate sum',['Yes; an absent prefix value can never appear later','Yes; denominators above the current window are uncountable'],'Reduce the fraction. Its positive pair lies on one finite diagonal, and sign interleaving includes both signs.'));
 }
 return null;
}
