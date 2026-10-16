// Beginner bridges are shown before subject notation, in both notes and the
// interactive lesson. Definitions are selected from the actual lesson text.
const entries=[
 ['bit',/\bbit|binary/i,'A bit is one binary digit: either 0 or 1.'],
 ['byte',/\bbyte|endian/i,'A byte is a group of eight bits. It can represent 256 different patterns.'],
 ['CPU',/\bcpu|processor|instruction|register|accumulator/i,'The CPU is the part of a computer that executes instructions.'],
 ['Memory address',/address|pointer|memory|endian/i,'An address identifies a storage location. The problem must state how much data one address selects.'],
 ['Register',/register|accumulator|operand|flag/i,'A register is a small named storage location inside the processor, used while instructions run.'],
 ['Operand',/operand|opcode|instruction/i,'An operand is a value, or the location of a value, used by an operation such as addition.'],
 ['RAM',/\bram|volatile|working memory/i,'RAM is writable working memory for active programs. Ordinary RAM loses its contents when power is removed.'],
 ['Cache',/cache|miss|associat|locality/i,'A cache keeps copies of recently useful data near the processor. A hit finds the requested data there; a miss does not.'],
 ['Hexadecimal',/hex|0x[0-9a-f]|endian/i,'Hexadecimal is base 16, using digits 0–9 and A–F. One hex digit represents four bits.'],
 ['Boolean value',/boolean|gate|truth|k.map|latch|flip.flop|counter|decoder|encoder|multiplex/i,'A Boolean value has two states, 0 and 1. In logic examples these stand for false and true.'],
 ['AND / OR / NOT',/boolean|gate|truth|sop|pos|complement|dual/i,'AND is 1 only if every input is 1. OR is 1 if at least one input is 1. NOT changes 0 to 1 and 1 to 0.'],
 ['Truth table',/truth|boolean|gate|minterm|cofactor/i,'A truth table lists every possible input combination and the output for each combination.'],
 ['State',/state|latch|flip.flop|counter|clock/i,'State is information a circuit remembers. Its next state can depend on both the current state and new inputs.'],
 ['Clock edge',/clock|edge.trigger|flip.flop|synchronous/i,'A clock edge is a transition between low and high. An edge-triggered device updates on its specified transition.'],
 ['Variable',/variable|assignment|\bint\b|declar|expression|program/i,'A variable is a named place for a value. Its type controls which values and operations are allowed.'],
 ['Array',/array|subscript|index|sorted|matrix|element/i,'An array stores elements in indexed positions. Unless stated otherwise, these examples number positions from zero.'],
 ['Pointer',/pointer|derefer|address.of|\bNULL\b/i,'A pointer holds an address. Dereferencing it accesses the object at that address, when the pointer is valid.'],
 ['Function',/function|parameter|argument|call|recursion/i,'A function is a named operation you can call with inputs. Parameters are the names used for those inputs inside the function.'],
 ['Loop',/loop|iteration|\bwhile\b|\bfor\b|scan/i,'A loop repeats work. One iteration is one pass through its body; the condition and update determine how often it runs.'],
 ['Data structure',/structure|stack|queue|linked|heap|tree|hash/i,'A data structure organizes values together with operations for reading or changing them.'],
 ['Stack / queue',/stack|queue|bfs|dfs/i,'A stack removes the newest item first. A queue removes the oldest item first. The order changes how a traversal explores work.'],
 ['Graph',/graph|vertex|vertices|edge|path|dfs|bfs|spanning|dijkstra|floyd/i,'A graph contains vertices (items) and edges (connections). A directed edge can be followed only in its arrow direction.'],
 ['Tree',/tree|heap|bst|avl|huffman/i,'A tree is a connected graph without cycles. In a rooted tree, a parent links to children below it.'],
 ['Algorithm',/algorithm|routine|procedure|sort|search|recurr|greedy|dynamic/i,'An algorithm is a finite sequence of steps for solving a specified task, starting from inputs and producing an output.'],
 ['Input size n',/\bn\b|size|growth|complexity|asympt|theta/i,'The symbol n usually counts the input items. An operation count describes work as that size changes.'],
 ['Big O / Theta',/\btheta|big.?o|asympt|complexity|bound|log n/i,'Big O is an eventual upper bound on growth. Theta is a matching upper and lower growth bound, not an exact operation count.'],
 ['Logarithm',/log|halv|doubl|exponent/i,'log₂(n) asks how many times 2 is multiplied to reach n. For powers of two, it also counts exact halvings from n to 1.'],
 ['Recursion',/recurs|recurrence|base case|divide.and/i,'A recursive procedure calls itself on a smaller problem. A base case stops the calls. A recurrence describes their total cost or result.'],
 ['Greedy choice',/greedy|dijkstra|kruskal|prim|interval|deadline|huffman/i,'A greedy method commits to a locally preferred choice. It needs a reason that this choice can still lead to a globally best solution.'],
 ['Dynamic programming',/dynamic|memo|\bdp\b|knapsack|subset|lcs|floyd|coin|stair/i,'Dynamic programming stores answers to defined smaller states and reuses them instead of solving the same state repeatedly.'],
 ['Probability',/probab|chance|random|independen/i,'Probability measures how likely an event is, from 0 (impossible) to 1 (certain). Independence means one outcome does not change another event’s probability.'],
 ['Fraction',/fraction|ratio|percent|proportion|interest/i,'A fraction a/b means a divided by b, where b is not zero. A ratio compares quantities using division.'],
 ['Percentage',/percent|interest|discount|profit|loss/i,'A percentage means per hundred. For example, 20% of 50 is (20/100) × 50 = 10.'],
 ['Rate',/rate|speed|time|work|pipe|distance/i,'A rate is an amount per unit of time. Amount = rate × time, with consistent units.'],
 ['Integer',/integer|prime|divisib|gcd|lcm|remainder|number system/i,'Integers are whole numbers, including negative numbers, zero and positive numbers. A remainder is what is left after integer division.'],
 ['Instruction set (ISA)',/\bisa\b|instruction set|risc|cisc/i,'An instruction set architecture (ISA) defines the operations and behavior a processor promises to software. Different hardware can implement the same ISA.',['coa']],
 ['ALU',/\balu\b|arithmetic.logic/i,'The arithmetic logic unit (ALU) performs operations such as addition and bitwise AND. Registers supply its inputs and receive its result.',['coa']],
 ['System bus',/\bbus\b|address.line|data.line/i,'A system bus carries information between components. Address signals identify a location; data signals carry values; control signals describe the transfer.',['coa']],
 ['Opcode',/opcode|operation field/i,'The opcode is the part of a machine instruction that selects the operation. Other instruction fields identify operands or addressing details.',['coa']],
 ['Cache line / block',/cache.line|cache.block|block offset|memory block/i,'A cache line holds a block of consecutive memory bytes plus bookkeeping. A block number identifies the whole block; an offset selects a byte inside it.',['coa']],
 ['KiB',/\bkib\b|\bmib\b/i,'KiB means 1,024 bytes, and MiB means 1,048,576 bytes. These binary units differ from the decimal prefixes kB and MB.',['coa']],
 ['Minterm',/minterm|\bsop\b|\bpos\b/i,'A minterm is an AND expression containing every input variable once, complemented or not. It is true for exactly one input row.',['dl']],
 ['SOP / POS',/\bsop\b|\bpos\b|sum.of.products|product.of.sums/i,'SOP means OR of AND terms. POS means AND of OR terms. In Boolean notation, plus means OR and multiplication means AND.',['dl']],
 ['Karnaugh map',/k.map|karnaugh/i,'A Karnaugh map rearranges truth-table rows so neighboring cells differ in one input bit. Valid power-of-two groups can remove variables from an expression.',['dl']],
 ['Active-low signal',/active.low|active low|polarity/i,'An active-low signal is asserted when its value is 0. Its name describes which level performs the action, not whether its value is always zero.',['dl']],
 ['Propagation delay',/propagation|ripple|delay/i,'Propagation delay is the time between an input change and the corresponding output becoming stable. Cascaded circuit stages can add delays.',['dl']],
 ['Undefined behavior',/undefined|\bub\b|unsequenced/i,'Undefined behavior means the C language imposes no requirements on what happens. A result observed in one compiler run is not a portable rule.',['c']],
 ['sizeof',/sizeof/i,'sizeof reports the size of a type or object in C bytes, using the type rules. Array and pointer sizes are different questions.',['c']],
 ['Integer promotion',/promotion|promoted/i,'Integer promotion converts certain narrow integer operands before an operation. The promoted type, not just the original variable type, determines how the operation is evaluated.',['c']],
 ['Object lifetime',/lifetime|dangling|storage duration/i,'An object exists only during its lifetime. A pointer to an object whose lifetime has ended cannot be used to access that object.',['c']],
 ['Null terminator',/terminator|null character|string/i,'A C string ends at a zero-valued character, written \\0 in source notation. The terminator occupies array space but is not counted in the string length.',['c']],
 ['Scope',/\bscope\b|shadow|linkage/i,'Scope is the region of source code where a name is visible. Linkage determines whether declarations can refer to the same entity across scopes or files.',['c']],
 ['Node / link',/linked|\bnode\b|\bnull\b/i,'A node stores a value and one or more links to other nodes. NULL means a pointer does not point to an object; it is not a node containing zero.',['ds']],
 ['Heap property',/\bheap\b/i,'In a max-heap every parent is at least as large as its children; a min-heap reverses that comparison. This does not mean the whole array is sorted.',['ds','algo']],
 ['Hash collision',/hash|collision|probing/i,'Hashing maps a key to a table position. A collision occurs when distinct keys map to the same position; the table needs a rule for resolving it.',['ds']],
 ['DFS / BFS',/\bdfs\b|\bbfs\b|depth.first|breadth.first/i,'Depth-first search follows one branch before returning. Breadth-first search explores vertices by distance in edges, using a queue. Both mark visited vertices to avoid repeated exploration.',['ds','algo']],
 ['Edge weight',/weight|shortest.path|dijkstra|bellman|floyd/i,'An edge weight is the cost of a connection. A path cost is the sum of the weights on its edges; the fewest-edge path need not be the cheapest.',['algo']],
 ['Spanning tree / MST',/\bmst\b|spanning|kruskal|prim/i,'A spanning tree connects every vertex of a connected undirected graph without cycles. A minimum spanning tree has the smallest total edge weight; it does not necessarily give shortest paths from a source.',['algo']],
 ['LCS',/\blcs\b|common subsequence/i,'A longest common subsequence keeps symbols in their original order in both strings, while allowing gaps. A substring, in contrast, must be consecutive.',['algo']],
 ['GCD / LCM',/\bgcd\b|\blcm\b|divisib/i,'GCD is the greatest positive integer dividing both given positive integers. LCM is their smallest shared positive multiple. They answer different division and repetition questions.',['aptitude']],
 ['Floor / ceiling',/floor|ceiling|rounding/i,'Floor rounds down to the greatest integer no larger than a number. Ceiling rounds up to the smallest integer no smaller than it, including for negative numbers.',['aptitude']],
 ['Average',/average|mean|mixture/i,'An arithmetic mean is total divided by count. For weighted quantities, add each value times its weight, then divide by total weight.',['aptitude']]
 ,['Process',/process|fork|exec|pid/i,'A process is one running program instance with its own execution state, memory view and operating-system bookkeeping.',['os']]
 ,['Thread',/thread|concurr|context switch/i,'A thread is one sequence of execution inside a process. Threads share many process resources but keep separate registers and stacks.',['os']]
 ,['Kernel mode',/kernel|system call|privileg/i,'Kernel mode lets trusted operating-system code perform protected operations that ordinary application code cannot perform directly.',['os']]
 ,['Ready and blocked',/ready|blocked|schedul|wait queue/i,'Ready means able to run but waiting for a CPU. Blocked means waiting for an event, such as I/O completion.',['os']]
 ,['Semaphore',/semaphore|permit|wait\(|signal|producer|consumer/i,'A semaphore coordinates access using permits: wait consumes one or blocks, while signal makes a permit available.',['os']]
 ,['Page and frame',/paging|page table|page fault|frame|virtual address/i,'A page is a fixed-size virtual-memory block. A frame is an equally sized block of physical memory; a page table maps pages to frames.',['os']]
 ,['TLB',/\btlb\b|translation lookaside/i,'A translation lookaside buffer (TLB) is a small cache of recent virtual-to-physical address mappings.',['os']]
 ,['Deadlock',/deadlock|circular wait|banker|resource graph/i,'Deadlock occurs when a group of processes wait forever for resources held by others in the group.',['os']]
 ,['File block',/file system|filesystem|disk block|inode|directory|allocation/i,'A file system maps names and file metadata to storage blocks and tracks which blocks are free.',['os']]
];
const defaults={coa:['bit','CPU'],dl:['bit','Boolean value'],c:['Variable','Array'],ds:['Data structure','Array'],algo:['Algorithm','Input size n'],aptitude:['Fraction','Rate'],os:['Process','Kernel mode']};
const allowed={coa:['bit','byte','CPU','Memory address','Register','Operand','RAM','Cache','Hexadecimal','Array','Integer'],dl:['bit','byte','Hexadecimal','Boolean value','AND / OR / NOT','Truth table','State','Clock edge','Integer'],c:['bit','byte','Memory address','Hexadecimal','Variable','Array','Pointer','Function','Loop','Integer'],ds:['Memory address','Variable','Array','Pointer','Function','Loop','Data structure','Stack / queue','Graph','Tree','Algorithm','Input size n','Big O / Theta','Logarithm','Recursion','Probability','Integer'],algo:['Array','Stack / queue','Graph','Tree','Algorithm','Input size n','Big O / Theta','Logarithm','Recursion','Greedy choice','Dynamic programming','Probability','Integer'],aptitude:['Fraction','Percentage','Rate','Integer','Probability','Logarithm'],os:['Process','Thread','Kernel mode','Ready and blocked','Semaphore','Page and frame','TLB','Deadlock','File block']};
export function lessonJourney(lesson,subject){
 if(!lesson?.foundation||!Array.isArray(lesson.questions)||!lesson.questions.length)throw Error('A guided lesson needs foundations and exercises.');
 const guide=lesson.foundation,primary=[lesson.title,guide.title,lesson.concept,guide.idea].join(' '),text=[primary,...guide.terms,...lesson.questions.map(q=>q.prompt)].join(' ');
 const priority=entry=>Number(entry[1].test(primary))*10+Number(entry[3]?.includes(subject))*2;
 const selected=entries.filter(([term,pattern,,subjects])=>(allowed[subject]?.includes(term)||subjects?.includes(subject))&&pattern.test(text)).sort((a,b)=>priority(b)-priority(a));
 const basics=entries.filter(([term])=>(defaults[subject]||[]).includes(term)),direct=basics.filter(([,pattern])=>pattern.test(primary));
 const terms=[...new Map([...direct,...selected,...(selected.length<2?basics:[])].map(([term,,meaning])=>[term,{term,meaning}])).values()].slice(0,7);
 const steps=(lesson.teachingSteps?.length?lesson.teachingSteps:[guide.idea,guide.example,lesson.concept]).filter(Boolean);
 return {version:1,title:lesson.title,idea:guide.idea,example:guide.example,terms,steps,focus:Math.floor(lesson.id%3),outcome:lesson.questions[lesson.id%lesson.questions.length].explanation};
}
export function newLearningState(){return {phase:0,card:0,visited:[],explored:false,step:0,trace:0,completed:false};}
export function normalizeLearningState(value){
 if(!value||typeof value!=='object')return null;
 return {phase:Number.isInteger(value.phase)?Math.max(0,Math.min(2,value.phase)):0,card:Number.isInteger(value.card)?Math.max(0,Math.min(6,value.card)):0,visited:Array.isArray(value.visited)?[...new Set(value.visited.filter(i=>Number.isInteger(i)&&i>=0&&i<=6))]:[],explored:value.explored===true,step:Number.isInteger(value.step)?Math.max(0,Math.min(20,value.step)):0,trace:Number.isInteger(value.trace)?Math.max(0,Math.min(20,value.trace)):0,completed:value.completed===true};
}
