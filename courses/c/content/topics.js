// Original teaching and exercises. No learner-supplied C is executed.
const n=(prompt,code,answer,explanation,setup='')=>({type:'number',prompt,code,answer,explanation,setup,tolerance:0,unit:''});
const c=(prompt,options,explanation,code='')=>({type:'choice',prompt,options,answer:0,explanation,code});
const m=(prompt,pairs,explanation)=>({type:'match',prompt,pairs,explanation});
const o=(prompt,items,explanation)=>({type:'order',prompt,items,explanation});
const defs={};
function d(key,idea,steps,terms,example,lab,build){defs[key]={idea,steps,terms,example,lab,build};}
// Each bank has four distinct traces and eight topic-specific reasoning puzzles.
function bank(traces,checks,pairs,order){return [checks[0],m('Connect the terms to their roles.',pairs,'Use the roles to explain what each part does.'),...traces.slice(0,2),checks[1],...traces.slice(2),o('Arrange the reasoning steps.',order,'Follow the dependencies before deciding the result.'),...checks.slice(2)];}
d('start','A C program describes a sequence of operations. Variables hold values; assignment changes a value. A hosted program starts in main and can write to standard output.',
 ['Read statements from top to bottom.','An initializer supplies a starting value; assignment replaces it.','Use printf with %d for an int and return 0 from main on success.'],
 ['Statement: an instruction ending in a semicolon.','Variable: a named object holding a value.','Output: text written by the program.'],
 'int boxes = 3; boxes = boxes + 2; printf("%d", boxes); writes 5. The assignment keeps the new value for the next statement.','variables',s=>bank([
 n('A stock counter receives a delivery. What integer is printed?',`int boxes = ${s};\nboxes = boxes + 4;\nprintf("%d", boxes);`,s+4,'Assignment replaces the old count with the old count plus four.'),
 n('A scoreboard is reset. What integer is printed?',`int score = ${s};\nscore = 0;\nprintf("%d", score);`,0,'The second statement replaces the initializer; it does not add to it.'),
 n('Two tickets are sold. What integer remains?',`int tickets = ${s+5};\ntickets -= 2;\nprintf("%d", tickets);`,s+3,'Subtract two from the initialized ticket count.'),
 n('Follow the copied count. What integer is printed?',`int a = ${s}, b = a;\na = a + 1;\nprintf("%d", b);`,s,'b stores a copied value, not a live connection to a.')],[
 c('Which function starts a hosted C program?',['main','start','printf'],'Hosted execution calls main.'),
 c('A learner writes int items; and immediately reads items. What should be repaired?',['Initialize items before reading it','Add more whitespace','Change its name'],'An uninitialized automatic int has an indeterminate value; initialize before use.'),
 c('Which placeholder prints an int?',['%d','%s','%p'],'printf requires a conversion compatible with the supplied argument.'),
 c('A build reports a missing semicolon. When must it be fixed?',['Before the program can be run successfully','Only after output appears','Only if memory runs out'],'Syntax and constraint errors need correction during translation.'),
 c('Which declaration creates and initializes a counter?',['int count = 0;','count == 0;','printf("count");'],'A declaration names the object, states its type and can supply an initializer.'),
 c('A sensor changes from 2 to 7. Which statement stores the new reading?',['reading = 7;','reading == 7;','7 = reading;'],'Assignment writes to the object on the left; equality compares values.')],
 [['main','Hosted entry function'],['printf','Write formatted output'],['=','Assign a value']],['Initialize the object','Execute assignments in order','Read the final value']));
d('bases','Positional notation gives each digit a weight. Binary uses powers of two; hexadecimal uses powers of sixteen. C integer constants use 0x for hexadecimal and a leading 0 for octal.',
 ['Multiply each digit by its place value.','Add the weighted digits.','Keep numeric value separate from the notation used to write it.'],
 ['Binary: base two notation.','Hexadecimal: base sixteen notation.','Octal constant: an integer token with a leading zero.'],
 '0x2A means 2 × 16 + 10 = 42. The octal constant 012 means 1 × 8 + 2 = 10, not decimal twelve.','bits',s=>bank([
 n('A device register uses a hex constant. What decimal integer is printed?',`int value = 0x${(s+16).toString(16)};\nprintf("%d", value);`,s+16,'Convert the hexadecimal digits using weights 16, 1.'),
 n('A legacy configuration uses octal. What decimal integer is printed?',`int value = 0${(s+8).toString(8)};\nprintf("%d", value);`,s+8,'The leading zero selects octal notation.'),
 n('Decode a binary packet: what decimal value equals '+(s+10).toString(2)+' in base two?','',s+10,'Sum the powers of two corresponding to the one digits.'),
 n('Two register values are added. What decimal integer is printed?',`int x = 0x10 + ${s};\nprintf("%d", x);`,16+s,'0x10 is decimal sixteen.')],[
 c('What is the value of hexadecimal digit A?',['10','11','16'],'Hexadecimal extends decimal digits with A through F for ten through fifteen.'),
 c('Which token means decimal sixteen?',['0x10','010','0x16'],'0x10 is sixteen; 010 is octal eight; 0x16 is decimal twenty-two.'),
 c('Which octal digit is invalid?',['8','7','0'],'Octal permits only zero through seven.'),
 c('Changing 42 to 0x2A changes which property?',['Written notation','The integer value','The arithmetic result'],'Different bases can represent the same integer.'),
 c('How many different values fit in four binary digits?',['16','4','8'],'There are 2^4 patterns.'),
 c('One hexadecimal digit corresponds to how many bits?',['Four','Two','Sixteen'],'Sixteen digit values need four binary digits.')],
 [['0x','Hexadecimal prefix'],['Leading 0','Octal notation'],['Place value','Weight determined by position']],['Identify the base','Multiply digits by place weights','Add the contributions']));
d('integers','Unsigned arithmetic is reduced modulo one more than the maximum value. Signed overflow is undefined behavior. Small integer types can be promoted before an expression is evaluated.',
 ['Identify the types before doing arithmetic.','Apply integer promotions and the usual arithmetic conversions.','Separate a stored bit pattern from the expression type and its value.'],
 ['Promotion: conversion to int or unsigned int for arithmetic.','Modulo: wrap within the unsigned range.','Signed overflow: a result outside its type range, with no defined result.'],
 'If unsigned char has range 0..255, converting 258 to it stores 2. But adding 1 to INT_MAX is signed overflow and cannot be given a reliable output.','bits',s=>bank([
 n('A counter value of '+(256+s)+' is converted to an 8-bit unsigned char. What value is stored? Assume UCHAR_MAX = 255.','',s,s+' is the remainder of '+(256+s)+' divided by 256.'),
 n('An unsigned byte is promoted before addition. What integer is printed? Assume unsigned char is 8 bits and int can hold 0..255.',`unsigned char x = ${s+20};\nprintf("%d", x + 2);`,s+22,'x promotes to int; the addition does not wrap at the byte width.'),
 n('A negative value is converted to an 8-bit unsigned char. What value is stored? Input is -'+s+'.','',256-s,'Unsigned conversion reduces the value modulo 256.'),
 n('Trace a representable signed subtraction. What integer is printed?',`int temperature = -${s};\nprintf("%d", temperature - 2);`,-s-2,'These small signed values are representable, so ordinary subtraction applies.')],[
 c('What is guaranteed for INT_MAX + 1 in type int?',['No defined result: signed overflow','Always INT_MIN','Always zero'],'Do not infer a portable result from one compiler run.'),
 c('An 8-bit unsigned char has range 0..255. What is its range size?',['256','255','128'],'Both endpoints are included.'),
 c('On a machine where int represents all unsigned char values, unsigned char promotes to…',['int','unsigned char forever','double'],'Promotion picks int when all original values are representable.'),
 c('A negative int is compared with an unsigned int of equal rank. What comes first?',['Convert the int to unsigned int','Compare their original signed values directly','Convert both to signed char'],'The usual arithmetic conversions select unsigned int for this type pair.'),
 c('Assume an 8-bit two\'s-complement diagram. Which pattern represents -1?',['11111111','00000001','10000000'],'The diagram explicitly uses two\'s complement; all eight bits are set for -1.'),
 c('A portable counter must avoid signed overflow. Which guard helps before incrementing?',['counter < INT_MAX','counter != 0','counter > INT_MAX'],'Check the boundary before attempting the increment.')],
 [['Unsigned arithmetic','Modulo the type range size'],['Integer promotion','Widen small integer operands'],['Signed overflow','Undefined behavior']],['Determine operand types','Apply required conversions','Check representability or unsigned reduction']));
d('conversion','Converting values changes their type and can change their value. Integer division discards the fractional part toward zero; floating division retains a fraction. A cast must occur before division if you want floating arithmetic.',
 ['Identify the operand types at the operator.','For integer division, truncate the quotient toward zero.','Convert before the operation when a fractional result is needed.'],
 ['Cast: an explicit type conversion.','Truncation: discard the fractional part toward zero.','Usual conversions: rules for a common arithmetic type.'],
 '7 / 2 produces 3, whereas (double)7 / 2 produces 3.5. Assigning 7 / 2 to double gives 3.0 because integer division already happened.','variables',s=>bank([
 n('A packing routine uses integer division. What integer is printed?',`int items = ${2*s+1};\nprintf("%d", items / 2);`,s,'The positive quotient is truncated toward zero.'),
 n('A temperature adjustment divides a negative int. What integer is printed?',`printf("%d", -${2*s+1} / 2);`,-s,'C integer division truncates toward zero, not toward negative infinity.'),
 n('A fractional count is explicitly cast. What integer is printed?',`double x = ${s}.75;\nprintf("%d", (int)x);`,s,'The conversion drops the fractional part; the result is representable.'),
 n('A remainder helps group items. What integer is printed?',`printf("%d", ${3*s+2} % 3);`,2,'Divide by three: the remainder is two.')],[
 c('Which expression computes 7 divided by 2 with a fractional result?',['(double)7 / 2','(double)(7 / 2)','7 / 2'],'Casting an operand before division causes floating arithmetic.'),
 c('double mean = 7 / 2; stores what?',['3.0','3.5','2.0'],'Integer division produces 3, then assignment converts it to double.'),
 c('What is (int)-3.8, when representable?',['-3','-4','3'],'Conversion truncates toward zero.'),
 c('A conversion to int would exceed its range. Can a numeric answer be assumed?',['No, the behavior is undefined','Yes, it always wraps','Yes, it always saturates'],'Floating-to-integer conversion requires the integral part to be representable.'),
 c('For positive divisor 3, -7 % 3 is…',['-1','2','1'],'-7 = (-2)*3 + (-1), consistent with truncation toward zero.'),
 c('Which practice preserves a fractional average?',['Convert an operand to double before dividing','Round before adding','Use only int operands'],'Select the arithmetic type before evaluating the division.')],
 [['/ with int operands','Truncated quotient'],['%','Integer remainder'],['(double)','Explicit conversion to double']],['Identify the arithmetic types','Evaluate the operation','Apply the assignment conversion']));
d('branch','A condition chooses which statements execute. Zero is false; any nonzero scalar value is true. An if/else selects one branch, while switch transfers to a matching case label and can fall through.',
 ['Evaluate the condition or switch expression once.','Follow only the selected path.','For switch, continue until break, return or the end.'],
 ['Condition: a test selecting a path.','Case: a label inside switch.','Break: exit the enclosing switch or loop.'],
 'With int x=7; if(x>5) x+=2; else x-=2; x becomes 9. A case without break continues into the following statements.','branch',s=>bank([
 n('A shop gives bonus points above the threshold. What integer is printed?',`int points = ${s+5};\nif (points > 5) points += 2;\nelse points -= 2;\nprintf("%d", points);`,s+7,'The condition is true, so only the increment branch executes.'),
 n('A case intentionally falls through. What integer is printed?',`int result = 0;\nswitch (1) {\ncase 1: result += ${s};\ncase 2: result += 3; break;\ndefault: result = -1;\n}\nprintf("%d", result);`,s+3,'Execution starts at case 1 and continues into case 2 until break.'),
 n('A nonzero flag is tested. What integer is printed?',`int flag = -${s}, result = 0;\nif (flag) result = 1;\nprintf("%d", result);`,1,'Negative nonzero values are true in a condition.'),
 n('A default handles an unknown menu option. What integer is printed?',`int result = 0;\nswitch (${s+10}) {\ncase 1: result = 7; break;\ndefault: result = 9;\n}\nprintf("%d", result);`,9,'No case matches, so default is selected.')],[
 c('Which statement compares a reading with zero?',['reading == 0','reading = 0','0 = reading'],'== tests equality; = performs assignment.'),
 c('Which value is false in an if condition?',['0','-1','2'],'Zero is false, including for a negative-versus-zero distinction.'),
 c('An unbraced else associates with which if?',['The nearest preceding unmatched if','Always the first if','The indentation level alone'],'Braces make nesting explicit; indentation is not syntax.'),
 c('What does break inside switch do?',['Exit the switch','Exit the entire program','Restart the first case'],'break terminates the smallest enclosing switch or loop.'),
 c('Which switch expression type is permitted?',['Integer type','double only','String array'],'switch uses an integer controlling expression.'),
 c('A discount should use exactly one of two paths. Which structure fits?',['if / else','Two independent unconditional assignments','A missing else with both paths outside the if'],'An if/else makes the alternatives exclusive.')],
 [['if','Choose by a condition'],['switch','Choose an integer case'],['break','Stop the enclosing switch or loop']],['Evaluate the controlling expression','Select the matching path','Execute until that path ends']));
d('loops','Loops repeat a body while a condition holds. A for loop runs initialization once, then test, body and update. A do/while tests after the body, so it executes at least once.',
 ['Record the initial counter and accumulator.','Test before each while/for body; test after each do body.','Apply continue or break before deciding which statements still run.'],
 ['Iteration: one pass through a loop body.','Continue: skip to the next iteration step.','Accumulator: a running total.'],
 'for(int i=0;i<3;i++) total+=2; adds two three times. continue in a for loop still reaches its update expression.','loop',s=>bank([
 n('A robot earns two points per completed lap. What integer is printed?',`int points = 0;\nfor (int i=0; i<${s}; i++) points += 2;\nprintf("%d", points);`,s*2,'The counter takes values 0 through '+(s-1)+', giving '+s+' iterations.'),
 n('Add the readings from 1 through '+s+'. What integer is printed?',`int total = 0;\nfor (int i=1; i<=${s}; i++) total += i;\nprintf("%d", total);`,s*(s+1)/2,'The inclusive upper bound adds each integer from one through '+s+'.'),
 n('A do/while checks an already-false condition. How many times does its body run?',`int count = 0;\ndo { count++; } while (0);\nprintf("%d", count);`,1,'The body executes before the condition is checked.'),
 n('Skip one damaged item. What integer is printed?',`int count = 0;\nfor (int i=0; i<${s+3}; i++) {\n if (i == 1) continue;\n count++;\n}\nprintf("%d", count);`,s+2,'There are '+(s+3)+' iterations; exactly one skips the increment.')],[
 c('A while condition is false initially. How often does its body run?',['Zero times','Once','Twice'],'A while loop tests before the body.'),
 c('continue in a for loop moves next to…',['The update expression, then the condition','The initializer again','The statement after the loop'],'The loop update still runs on continue.'),
 c('Which bound visits all n valid array indices?',['i < n, starting at 0','i <= n, starting at 0','i <= n+1'],'An array of n elements ends at index n-1.'),
 c('What does break do in a loop?',['Exit that loop','Skip only the current statement','Reset every variable'],'It ends the nearest enclosing loop or switch.'),
 c('A counter never changes and its condition stays true. What is the likely bug?',['An unintended infinite loop','Automatic termination','A compile-time syntax error in every case'],'Progress toward a false condition is required for normal termination.'),
 c('Which loop fits a menu that must be shown at least once?',['do / while','A while with an initially false condition','No body at all'],'The post-test loop guarantees a first body execution.')],
 [['for initialization','Runs once'],['Condition','Controls repetition'],['Update','Runs after a for body or continue']],['Initialize the counter','Test the loop condition','Execute the body','Apply the update']));
d('operators','Operators combine values. Precedence determines grouping, not general operand evaluation order. Bitwise operators manipulate individual bits; logical operators test truth and yield zero or one.',
 ['Group with parentheses when the intent is unclear.','Distinguish logical && and || from bitwise & and |.','Avoid shifting signed negative values or shifting outside the operand width.'],
 ['Precedence: how an expression is grouped.','Mask: a bit pattern selecting bits.','Logical result: zero or one.'],
 '6 & 3 is 2 because 110 AND 011 = 010. 6 && 3 is 1 because both operands are nonzero.','bits',s=>bank([
 n('A flags register keeps its low two bits. What integer is printed?',`unsigned int flags = ${s+8};\nprintf("%d", (int)(flags & 3u));`,(s+8)&3,'Bitwise AND keeps only positions whose mask bits are one.'),
 n('A tiny unsigned value is doubled with a safe shift. What integer is printed?',`unsigned int x = ${s};\nprintf("%d", (int)(x << 1));`,s*2,'A one-bit left shift doubles this small unsigned value.'),
 n('Group multiplication before addition. What integer is printed?',`printf("%d", ${s} + 2 * 3);`,s+6,'Multiplication binds more tightly than addition.'),
 n('A nonzero pair is logically combined. What integer is printed?',`printf("%d", ${s} && 4);`,1,'&& yields one when both operands compare unequal to zero.')],[
 c('A result must be masked bit by bit. Which operator is appropriate?',['&','&&','=='],'& operates on individual bits; && is a truth test.'),
 c('What does x ^ x produce for an unsigned integer?',['0','x','1'],'Each equal pair of bits cancels under exclusive OR.'),
 c('Can precedence alone tell you which function call in f()+g() happens first?',['No','Always f','Always g'],'Grouping and evaluation order are different rules.'),
 c('Which shift count is invalid for a 32-bit operand?',['32','1','0'],'The count must be nonnegative and smaller than the width of the promoted left operand.'),
 c('Which expression tests whether the lowest bit is set?',['(flags & 1u) != 0','flags && 1u','flags | 1u'],'AND isolates the low bit; comparison converts it to a truth value.'),
 c('For a signed negative value, which strategy avoids assuming a portable right-shift result?',['Use a specified unsigned representation for bit operations','Assume all machines use the same signed shift','Ignore the operand type'],'Signed negative right shift is implementation-defined in C11.')],
 [['&','Bitwise AND'],['&&','Logical AND'],['^','Bitwise exclusive OR']],['Identify operand types','Group the expression','Apply each operator to its operands']));
d('sequence','Side effects need a defined sequencing relationship. && and || evaluate left first and may skip right. The comma operator sequences its left operand before right; commas separating function arguments do not guarantee their order.',
 ['Locate side effects such as increments and assignments.','Use statement boundaries or specified sequencing rules.','Do not predict output when the same scalar has unsequenced conflicting accesses.'],
 ['Side effect: a change to program state.','Short circuit: skip an unnecessary right operand.','Unsequenced: no prescribed before/after relationship.'],
 'int x=0; int ok=0 && ++x; leaves x=0 because the right side is skipped. i = i++ + 1 has undefined behavior in C11.','branch',s=>bank([
 n('A disabled check should not run. What integer is printed?',`int checks = ${s};\nint enabled = 0;\nint ok = enabled && ++checks;\nprintf("%d", checks);`,s,'The false left operand short-circuits &&, leaving checks unchanged.'),
 n('A successful fallback skips a side effect. What integer is printed?',`int attempts = ${s};\nint ok = 1 || ++attempts;\nprintf("%d", attempts);`,s,'The true left operand short-circuits ||.'),
 n('The comma operator sequences two assignments. What integer is printed?',`int x = ${s};\nint result = (x += 2, x * 3);\nprintf("%d", result);`,(s+2)*3,'The addition completes before evaluating the right comma operand.'),
 n('Only one conditional arm executes. What integer is printed?',`int x = ${s};\nint result = 0 ? ++x : x + 4;\nprintf("%d", result);`,s+4,'The false condition selects only x+4; ++x is not evaluated.')],[
 c('For C11, i = i++ + 1; should be classified as…',['Undefined behavior','Always old i plus one','Always old i plus two'],'The modification by post-increment and assignment are not safely sequenced.'),
 c('Which check avoids dereferencing a null pointer?',['p != NULL && *p > 0','*p > 0 && p != NULL','p != NULL & *p > 0'],'&& checks p first and skips dereference when p is null.'),
 c('Do commas between arguments in f(a(), b()) sequence those calls?',['No','Always left to right','Always right to left'],'Argument separators are not the comma operator.'),
 c('Which spelling explicitly sequences two changes to i?',['i++; i++;','i++ + i++;','f(i++, i++);'],'Separate full expressions supply the sequencing boundary.'),
 c('In x ? yes() : no(), how many branch calls execute?',['One','Both','Neither whenever x is nonzero'],'Only the selected second or third operand is evaluated.'),
 c('Does && always evaluate its right operand?',['No, only when the left operand is true','Yes','Only when the left operand is false'],'The right operand matters only after a true left operand.')],
 [['&&','Skip right when left is false'],['||','Skip right when left is true'],['Comma operator','Sequence left before right']],['Identify the sequencing rule','Evaluate the required operand','Apply only the side effects that occur']));
d('functions','Function parameters receive copied argument values. Changing a parameter does not change the caller object. A return value communicates a result; a pointer parameter can deliberately modify a caller object.',
 ['Match each argument to its parameter.','Create a separate local value for each parameter.','Follow return to resume the caller with the returned value.'],
 ['Parameter: a local object initialized from an argument.','Argument: a supplied value.','Return: pass a result back to the caller.'],
 'int add2(int x){return x+2;} called with 5 returns 7. Assigning x=99 inside the function would change its local copy, not the caller variable.','calls',s=>bank([
 n('A price helper adds a fee. What integer is printed?',`printf("%d", fee(${s}));`,s+3,'The parameter holds the argument and the function returns that value plus three.','int fee(int price) { return price + 3; }'),
 n('A helper changes only its parameter. What integer is printed?',`int stock = ${s};\nreset(stock);\nprintf("%d", stock);`,s,'reset modifies a copied parameter, so the caller stock is unchanged.','void reset(int stock) { stock = 0; }'),
 n('Nested return values feed the next call. What integer is printed?',`printf("%d", twice(twice(${s})));`,4*s,'The inner call doubles once; the outer call doubles that result.','int twice(int x) { return 2*x; }'),
 n('A pointer parameter updates caller stock. What integer is printed?',`int stock = ${s};\nadd(&stock);\nprintf("%d", stock);`,s+2,'The copied pointer still designates the caller object, and *p modifies it.','void add(int *p) { *p += 2; }')],[
 c('Does assigning to an int parameter alter the caller int?',['No, the parameter is a copy','Yes, always','Only for large integers'],'C passes argument values to parameters.'),
 c('A function must return a computed int. Which operation communicates it?',['return result;','printf only','Rename the parameter'],'return provides a value used by the caller.'),
 c('Which parameter can modify a caller int through its address?',['int *p','int value','double value'],'A pointer supplies a way to designate the original object.'),
 c('Why declare a function before calling it?',['To make its type and parameters known','To allocate every local object early','To force recursion'],'A visible declaration lets translation check the call.'),
 c('A local automatic variable belongs to…',['That invocation until its lifetime ends','Every function forever','The output stream'],'Separate invocations have distinct automatic objects.'),
 c('Which return is invalid for returning a usable pointer to caller storage?',['Address of an automatic local after it dies','An address of caller-owned live storage','A pointer to a live allocated block'],'A pointer to an ended automatic object cannot be used to access it.')],
 [['Parameter','Local copy of an argument value'],['return','Supply a result'],['Pointer argument','Designate a caller object']],['Copy arguments into parameters','Execute the function body','Return to the caller']));
d('toolchain','Translation and execution are separate. Preprocessing handles directives; compilation translates a translation unit; linking resolves references between object files and libraries. A missing definition is a linking problem.',
 ['Preprocess includes and macro directives.','Compile each translation unit to object code.','Link object files and libraries, then run the executable.'],
 ['Translation unit: source after preprocessing.','Object file: translated code awaiting linking.','Linker: resolves external references.'],
 'One file declares int fee(int); and calls fee(3). Another defines fee. Both object files must participate in linking for the call to resolve.','build',s=>bank([
 n('A macro doubles a small count. What integer is printed?',`printf("%d", DOUBLE(${s}));`,s*2,'The parenthesized macro expands to two times the argument.','#define DOUBLE(x) ((x) * 2)'),
 n('A linked helper returns a value. What integer is printed?',`printf("%d", extra(${s}));`,s+1,'The visible prototype describes the function; its definition supplies the behavior.','int extra(int);\nint extra(int x) { return x + 1; }'),
 n('A constant is used by a compiled program. What integer is printed?',`printf("%d", BASE + ${s});`,s+10,'Preprocessing substitutes the macro value before translation.','#define BASE 10'),
 n('A complete function is called twice. What integer is printed?',`int a = extra(${s});\nprintf("%d", extra(a));`,s+2,'Each call adds one after its function definition has been linked.','int extra(int x) { return x + 1; }')],[
 c('An external function is declared but no definition is linked. What usually fails?',['Linking','Only the second loop iteration','Every macro expansion'],'A declaration does not provide the referenced function body.'),
 c('Which operation handles #include?',['Preprocessing','Dynamic allocation','Loop execution'],'The included content contributes to the translation unit.'),
 c('Does an object file always form a complete runnable program?',['No, linking may still be needed','Yes','Only when its name is short'],'Object files can contain unresolved references.'),
 c('Which error is primarily a translation-time syntax problem?',['Missing closing brace','Missing external function definition at link time','An allocated block leaked at run time'],'Syntax is checked while translating the source.'),
 c('A relocatable object stores external references so that…',['The linker can resolve them','Every address must already be final','Source must execute before linking'],'Relocation permits final placement and reference resolution.'),
 c('Which practice shares a function declaration across source files?',['Put the compatible declaration in a header','Define the function separately in every file','Omit all prototypes'],'Shared declarations help keep types consistent.')],
 [['Preprocessor','Handle directives'],['Compiler','Translate a translation unit'],['Linker','Resolve object-file references']],['Preprocess the source','Compile object files','Link the executable','Run the executable']));
d('storage','Scope controls where a name is visible; lifetime controls when its object exists; linkage connects declarations of the same entity. Automatic locals are normally new per call, while static objects last for the whole program.',
 ['Separate visibility, lifetime and linkage.','A static local is initialized once and retains its value.','An extern declaration can refer to an object defined elsewhere.'],
 ['Scope: where a name can be used.','Storage duration: how long storage exists.','Linkage: whether declarations refer to the same entity.'],
 'int next(void){static int x=0; return ++x;} returns 1 then 2. A local int x=0 without static would restart at zero on every call.','storage',s=>bank([
 n('A static visit counter is called twice. What integer is printed?',`visit();\nprintf("%d", visit());`,s+2,'Static local state retains the first increment for the second call.',`int visit(void) { static int x = ${s}; return ++x; }`),
 n('An automatic visit counter is called twice. What integer is printed?',`visit();\nprintf("%d", visit());`,s+1,'Each call initializes a fresh automatic x.',`int visit(void) { int x = ${s}; return ++x; }`),
 n('A static object has no explicit initializer. What integer is printed?',`printf("%d", counter);`,0,'Static-duration arithmetic objects without an explicit initializer start at zero.','static int counter;'),
 n('An external declaration refers to a defined object. What integer is printed?',`extern int total;\ntotal += 2;\nprintf("%d", total);`,s+2,'The declaration refers to the same object defined at file scope.',`int total = ${s};`)],[
 c('Which property says where a name is visible?',['Scope','Allocated byte count','Endianness'],'Scope describes visibility, not lifetime.'),
 c('A static local survives…',['Between calls for the duration of the program','Only until the function returns','Only until printf is called'],'Its object has static storage duration.'),
 c('An automatic int is declared without initialization. Is zero guaranteed?',['No','Yes','Only when named counter'],'Automatic locals do not receive the default zero initialization of static objects.'),
 c('For sharing an object across two source files, use…',['One definition and compatible extern declarations','A separate unrelated definition in every file','Only automatic locals'],'The external name refers to one object whose definition supplies storage.'),
 c('In C11, what does register guarantee about physical CPU registers?',['Nothing; it is a hint with language restrictions','Permanent storage in a CPU register','Zero initialization'],'The implementation may ignore the allocation hint; its address cannot be taken.'),
 c('static on a file-scope object gives…',['Internal linkage','Automatic storage duration','A new object on each function call'],'The name is restricted to its translation unit while storage remains static.')],
 [['Automatic local','Fresh object per invocation'],['Static local','Retains state between calls'],['extern declaration','Refers to an externally defined entity']],['Determine the declaration location','Identify duration and linkage','Track initialization and subsequent updates']));
d('recursion','A recursive function calls itself on a smaller problem. Each active call has its own parameters and automatic locals. A base case stops descent; return values then combine while calls unwind.',
 ['Check the base case before making the recursive call.','Follow how the argument approaches the base case.','Unwind returns from the smallest case to the original call.'],
 ['Base case: a result requiring no further recursion.','Call frame: one active invocation.','Unwinding: resuming callers after returns.'],
 'sum(3) returns 3 + sum(2), then 2 + sum(1), then 1 + sum(0). With sum(0)=0, returns combine to 6.','recursion',s=>bank([
 n('A recursive reward sum counts 1 through '+s+'. What integer is printed?',`printf("%d", sum(${s}));`,s*(s+1)/2,'The base returns zero; each returning frame adds its own n.','int sum(int n) { if(n == 0) return 0; return n + sum(n-1); }'),
 n('Count frames on a simple recursive countdown. What integer is printed?',`printf("%d", depth(${s}));`,s+1,'Include the base-case invocation at n=0.','int depth(int n) { if(n == 0) return 1; return 1 + depth(n-1); }'),
 n('A recursive function doubles at each level. What integer is printed?',`printf("%d", power(${s%4+1}));`,2**(s%4+1),'The base gives one and each level multiplies by two.','int power(int n) { if(n == 0) return 1; return 2 * power(n-1); }'),
 n('A recursion divides its positive argument by two. What integer is printed?',`printf("%d", levels(${2**(s%3+2)}));`,s%3+3,'Count every call down to n=1, where the function returns one.','int levels(int n) { if(n <= 1) return 1; return 1 + levels(n/2); }')],[
 c('What is the job of a base case?',['Stop further recursion with a direct result','Make every call recursive','Reuse one automatic variable for all calls'],'Without a reachable stopping case, descent may never terminate.'),
 c('Do two active recursive calls share the same automatic int parameter object?',['No','Yes, always','Only when their values are equal'],'Each invocation has its own automatic objects.'),
 c('For n>0, which call moves toward a base case n==0?',['f(n-1)','f(n+1)','f(n) without another change'],'The nonnegative argument decreases toward zero.'),
 c('A function prints n after calling f(n-1). Which values print first?',['The deeper calls\' smaller values','The original largest value','Only the base value'],'Statements after the recursive call execute while unwinding.'),
 c('A recursive factorial uses int. Must its input be bounded?',['Yes, to avoid overflow and excessive depth','No, int can hold every factorial','Only for zero'],'Signed overflow and finite execution resources matter.'),
 c('If each call branches into two recursive calls, should the full call tree be traced?',['Yes, both subcalls contribute','No, only one exists','Only the second branch executes'],'Separate calls can both contribute to the returned result.')],
 [['Base case','Direct stopping result'],['Recursive step','Smaller subproblem'],['Return phase','Combine results while unwinding']],['Test the base condition','Descend toward the base','Return the base result','Combine results in callers']));
d('pointers','A pointer stores a value designating an object. & obtains an object\'s address; * accesses the pointed-to object. Copying a pointer creates another route to the same object, not a new copy of that object.',
 ['Draw each object as a separate named box.','Draw a pointer arrow to the live object it designates.','A write through *p changes that object; assigning p changes the arrow.'],
 ['Address: a value designating storage.','Dereference: access the object through a pointer.','Alias: another route to the same object.'],
 'int x=4; int *p=&x; *p=9; changes x to 9. Later p=&y changes what p designates without copying y into x.','pointer',s=>bank([
 n('A pointer updates a live sensor reading. What integer is printed?',`int reading = ${s};\nint *p = &reading;\n*p += 3;\nprintf("%d", reading);`,s+3,'p designates reading, so the dereferenced write changes reading.'),
 n('Two pointers alias the same object. What integer is printed?',`int x = ${s};\nint *p = &x, *q = p;\n*q = 12;\nprintf("%d", *p);`,12,'Both pointers designate x; either path observes the updated value.'),
 n('A pointer is reassigned. What integer is printed?',`int x = ${s}, y = ${s+7};\nint *p = &x;\np = &y;\n*p += 1;\nprintf("%d", x);`,s,'The final write changes y, leaving x unchanged.'),
 n('A helper changes a caller object through an address. What integer is printed?',`int stock = ${s};\nadd(&stock);\nprintf("%d", stock);`,s+5,'The copied parameter pointer still designates the live caller object.','void add(int *p) { *p += 5; }')],[
 c('What does &x produce?',['A pointer to x','The value currently stored in x','A second object named x'],'The address operator designates the existing object.'),
 c('Which operation writes through a pointer?',['*p = 7;','p = 7;','&p = 7;'],'*p is the designated object, assuming p is valid and the object is writable.'),
 c('May a null pointer be dereferenced?',['No','Yes, it means zero','Only once'],'Null does not designate an accessible object.'),
 c('int *p=&x; int *q=p; creates how many int objects named x?',['One','Two','Three'],'Copying the pointer does not duplicate the pointed-to object.'),
 c('A function assigns p=&local only to its pointer parameter. Does that change the caller pointer?',['No, p itself was passed by value','Yes, automatically','Only if local is large'],'Changing the copied pointer parameter does not reassign the caller pointer.'),
 c('What must hold before reading *p?',['p designates a suitably typed live accessible object','p has any numeric address','p was printed once'],'Validity involves type, alignment, bounds and lifetime, not just a nonzero number.')],
 [['&x','Address of x'],['*p','Object designated by p'],['p = q','Copy a pointer value']],['Create initialized live objects','Point at a valid object','Read or write through the pointer']));
d('arrays','An array holds a fixed number of contiguous elements of one type. Index zero is first; an array of n elements ends at n-1. In most expressions an array becomes a pointer to its first element, but sizeof an actual array measures the whole array.',
 ['Write the valid index range.','Translate a[i] to the element at offset i.','Keep the actual array type distinct from a function\'s adjusted pointer parameter.'],
 ['Element: one array object slot.','Index: an offset starting at zero.','Decay: conversion from an array expression to its first-element pointer.'],
 'int a[3]={2,4,6}; a[1]=9; leaves {2,9,6}. sizeof a / sizeof a[0] is 3 in the scope where a is an actual array.','array',s=>bank([
 n('Read the middle temperature. What integer is printed?',`int a[3] = {${s}, ${s+2}, ${s+4}};\nprintf("%d", a[1]);`,s+2,'Index one selects the second element.'),
 n('Update one inventory slot. What integer is printed?',`int a[3] = {${s}, 4, 6};\na[0] += 3;\nprintf("%d", a[0]);`,s+3,'Only the indexed element is updated.'),
 n('A partial initializer leaves remaining elements how? What integer is printed?',`int a[4] = {${s}, 2};\nprintf("%d", a[3]);`,0,'Elements not explicitly listed in this initializer are initialized to zero.'),
 n('Count elements without assuming int size. What integer is printed?',`int a[${s+2}] = {0};\nprintf("%d", (int)(sizeof a / sizeof a[0]));`,s+2,'The byte sizes cancel to give the element count.')],[
 c('For int a[5], which last index is valid?',['4','5','6'],'Five elements have indices zero through four.'),
 c('In most expressions, a for int a[5] converts to…',['A pointer to a[0]','A pointer to an unrelated object','An int value equal to five'],'Array-to-pointer conversion designates the first element.'),
 c('At the actual array declaration, sizeof a measures…',['The whole array in bytes','Only one pointer','The sum of stored values'],'sizeof suppresses the usual array-to-pointer conversion.'),
 c('May an array object be assigned with a = b;?',['No; copy elements or use an appropriate copy operation','Yes, arrays are ordinary assignable scalars','Only if their names are equal'],'C arrays are not assignable as whole objects.'),
 c('A function parameter int a[10] is adjusted to…',['int *a','A guaranteed ten-element local copy','int a'],'The bound does not make the parameter a whole array object.'),
 c('Which loop safely visits int a[n] for positive n?',['i=0; i<n; i++','i=0; i<=n; i++','i=1; i<=n; i++'],'Index n is one past the end and cannot be accessed.')],
 [['a[0]','First element'],['sizeof actual array','Total byte size'],['Array parameter','Adjusted pointer parameter']],['Determine the array bounds','Choose a valid zero-based index','Access that element']));
d('arithmetic','Pointer arithmetic moves by elements of the pointed-to type within one array object. One-past-end may be formed but not dereferenced. Subtracting pointers in the same array gives an element distance.',
 ['Identify the containing array and element type.','Move by element counts, not an assumed byte count.','Allow a one-past pointer for comparisons, never for element access.'],
 ['Stride: movement by one element of the pointed-to type.','One-past: boundary just beyond the final element.','Pointer difference: number of elements between same-array pointers.'],
 'For int a[4]={3,6,9,12}, *(a+2) is 9 and &a[3]-&a[1] is 2. a+4 can be formed but * (a+4) cannot be read.','pointer',s=>bank([
 n('Advance a pointer by two elements. What integer is printed?',`int a[4] = {${s}, ${s+1}, ${s+2}, ${s+3}};\nint *p = a;\nprintf("%d", *(p+2));`,s+2,'The pointer moves to index two, not two bytes.'),
 n('Measure distance inside one array. What integer is printed?',`int a[6] = {0};\nprintf("%d", (int)(&a[5] - &a[1]));`,4,'Subtract the element indices: five minus one.'),
 n('The postfix increment moves the pointer after reading. What integer is printed?',`int a[3] = {${s}, ${s+2}, ${s+4}};\nint *p = a;\nint first = *p++;\nprintf("%d", *p);`,s+2,'*p++ means *(p++): p advances to the next element.'),
 n('Increment the pointed-to value instead. What integer is printed?',`int a[2] = {${s}, 9};\nint *p = a;\n(*p)++;\nprintf("%d", a[0]);`,s+1,'Parentheses make the increment operate on the int object, not the pointer.')],[
 c('For int a[3], is a+3 permitted to be formed?',['Yes, as a one-past pointer','No, it cannot even be formed','Yes, and it can always be read'],'Formation is allowed at the boundary; dereference is not.'),
 c('May pointers into unrelated arrays be subtracted for a portable element distance?',['No','Yes, if both arrays hold int','Yes, if printed addresses look close'],'The subtraction rule requires the same array object or its one-past boundary.'),
 c('What does p+1 advance by for int *p?',['One int element','Always one byte','Always one machine word of a fixed universal size'],'Pointer type determines the element stride.'),
 c('Which expression increments the pointed-to int?',['(*p)++','p++','p + 1'],'Grouping distinguishes modifying the object from moving the pointer.'),
 c('A pointer already at one-past is incremented again. Is it valid array arithmetic?',['No','Yes, without limit','Only if not dereferenced'],'Even forming an out-of-range pointer violates the array arithmetic rule.'),
 c('What must be checked before dereferencing an offset?',['The result is within a live array element','Only that the offset is positive','Only that the address is nonzero'],'Type, array bounds and lifetime all matter.')],
 [['p+1','Next pointed-to element'],['q-p','Same-array element distance'],['One-past pointer','Permitted boundary, not accessible element']],['Identify the array object','Compute the target element offset','Check bounds before access']));
d('size','sizeof yields a size in bytes with type size_t. sizeof(char) is always one, but bytes need not be eight bits. For non-variable-length operands it does not evaluate the operand; a function array parameter has pointer size.',
 ['Decide whether the operand is an actual array or a pointer.','Use size_t and %zu when printing a size.','State implementation sizes explicitly when a question depends on them.'],
 ['sizeof: operator yielding a type or object size.','size_t: unsigned integer type for sizes.','Unevaluated operand: an expression whose value is not computed.'],
 'int x=5; sizeof(x++); leaves x=5 for this non-VLA operand. int a[4]; has four times sizeof(int) bytes.','array',s=>bank([
 n('A non-VLA sizeof operand contains an increment. What integer is printed?',`int x = ${s};\n(void)sizeof(x++);\nprintf("%d", x);`,s,'The non-VLA operand is not evaluated, so x is not incremented.'),
 n('Count elements using a size ratio. What integer is printed?',`double samples[${s+1}] = {0};\nprintf("%d", (int)(sizeof samples / sizeof samples[0]));`,s+1,'The ratio gives the count regardless of double width.'),
 n('Assume sizeof(int)=4 bytes. How many bytes are in int values['+(s+2)+']?','',4*(s+2),'Multiply the specified element size by the array count.'),
 n('What integer is printed for sizeof(char)?',`printf("%d", (int)sizeof(char));`,1,'C defines a byte using char; its size is exactly one.')],[
 c('The result type of sizeof is…',['size_t','Always int','Always signed char'],'size_t is an unsigned integer type.'),
 c('Which printf conversion is for size_t?',['%zu','%d unconditionally','%s'],'Use the conversion matching the size type.'),
 c('Does sizeof(int) have to be four?',['No','Yes','Only in functions'],'C does not mandate one universal int byte width.'),
 c('For void f(int a[10]), sizeof a inside f measures…',['The adjusted pointer parameter','Ten int elements','The caller\'s entire allocation'],'The parameter is adjusted to pointer type.'),
 c('Is every sizeof operand unevaluated?',['No; variably modified cases need special care','Yes without exception','No; every operand is evaluated'],'Variable-length array types are an important exception.'),
 c('A real array contains n ints. Which formula finds n?',['sizeof a / sizeof a[0]','sizeof a + sizeof a[0]','sizeof a[0] / sizeof a'],'This requires a to still be an actual array object.')],
 [['sizeof(char)','One byte'],['size_t','Type for sizes'],['Actual array size','Count times element size']],['Identify the operand type','Check array versus pointer','Apply the size rule']));
d('strings','A C string is a character sequence terminated by a null character. The terminator occupies an array element but is not counted by strlen. A writable character array differs from a string literal, which must not be modified.',
 ['Reserve space for characters plus the terminating null.','Distinguish sizeof an array from strlen a string.','Check capacity before copying or appending text.'],
 ['Null character: \\0 marking the end of a string.','strlen: count characters before the terminator.','Capacity: total storage available including the terminator.'],
 'char name[]="cat"; contains four elements: c, a, t and \\0. strlen(name) is 3; sizeof name is 4.','string',s=>{const word=['cat','lamp','sensor','robot'][s%4];return bank([
 n('Count the text, excluding its terminator. What integer is printed?',`char name[] = "${word}";\nprintf("%d", (int)strlen(name));`,word.length,'strlen stops before the terminating null character.'),
 n('Count the initialized character array. What integer is printed?',`char name[] = "${word}";\nprintf("%d", (int)sizeof name);`,word.length+1,'The array initializer includes one extra null character.'),
 n('A buffer has spare capacity. What integer is printed?',`char name[12] = "${word}";\nprintf("%d", (int)sizeof name);`,12,'sizeof reports declared array capacity, not the current text length.'),
 n('A string is shortened in place. What integer is printed?',`char name[] = "${word}";\nname[1] = '\\0';\nprintf("%d", (int)strlen(name));`,1,'The new terminator at index one ends the visible string there.')],[
 c('How much minimum capacity stores the string "cat"?',['4 char elements','3 char elements','2 char elements'],'Three visible characters need a fourth slot for the null terminator.'),
 c('May char *p="cat"; be followed by p[0]=\'b\'; safely?',['No; modifying a string literal is undefined behavior','Yes, p is writable','Only if the new letter is shorter'],'A writable pointer type does not make the literal modifiable.'),
 c('Which declaration makes a writable copy of "cat"?',['char text[] = "cat";','char *text = "cat";','const char *text = "cat";'],'The array initializer creates separate writable elements.'),
 c('Calling strlen on a buffer with no reachable terminator can…',['Read beyond valid storage','Automatically insert a terminator','Always return its capacity'],'String functions require a valid null-terminated sequence.'),
 c('How does strcmp report equal strings?',['Zero','One always','The shared string length'],'Its sign reports ordering; zero reports equality.'),
 c('An input field has capacity eight. What maximum visible length fits with a terminator?',['Seven','Eight','Nine'],'Reserve one slot for the null character.')],
 [['\\0','End-of-string marker'],['strlen','Visible character count'],['sizeof char array','Array capacity in bytes']],['Determine the buffer capacity','Locate the first null character','Count characters before it']);});
d('matrix','A two-dimensional array is an array of row arrays. A pointer to a row advances by a whole row. An array of pointers instead stores separate pointer objects and need not describe contiguous rows.',
 ['Write row and column bounds separately.','For a[R][C], select a row then an element within it.','Match a row-pointer parameter to the correct column count.'],
 ['Row array: the element type of a two-dimensional array.','Pointer to array: a pointer whose target is a whole row.','Array of pointers: separate pointer objects, not row storage.'],
 'int a[2][3]={{1,2,3},{4,5,6}}; a[1][2] is 6. int (*p)[3]=a; p+1 designates the next three-int row.','matrix',s=>bank([
 n('A grid stores two rows of readings. What integer is printed?',`int a[2][3] = {{${s},2,3},{4,5,${s+6}}};\nprintf("%d", a[1][2]);`,s+6,'Choose row one and column two, both zero-based.'),
 n('A row pointer moves by one complete row. What integer is printed?',`int a[2][2] = {{1,2},{${s},${s+1}}};\nint (*p)[2] = a;\nprintf("%d", p[1][0]);`,s,'p[1] is the second row; index zero is its first int.'),
 n('A pointer table selects a separate object. What integer is printed?',`int x=${s}, y=${s+4};\nint *rows[2] = {&x,&y};\nprintf("%d", *rows[1]);`,s+4,'rows[1] stores a pointer to y, which is then dereferenced.'),
 n('Count all scalar elements by sizes. What integer is printed?',`int a[2][${s%3+2}] = {{0}};\nprintf("%d", (int)(sizeof a / sizeof a[0][0]));`,2*(s%3+2),'Divide total array bytes by one int element size.')],[
 c('For int a[2][3], a in most expressions converts to…',['int (*)[3]','int **','int *[3]'],'The first element is a three-int row, so its pointer type points to that row.'),
 c('int *p[3] declares…',['An array of three pointers to int','A pointer to an array of three ints','Three whole matrices'],'[] binds before the leading * in this declaration.'),
 c('int (*p)[3] declares…',['A pointer to an array of three ints','An array of three pointers','A pointer to int with no row type'],'Parentheses bind *p before the array suffix.'),
 c('Can a two-dimensional int array generally be passed as int **?',['No, the types and layout differ','Yes, always','Only when both dimensions are two'],'Row arrays are not a table of int pointer objects.'),
 c('For int a[2][3], is a[0][3] a valid element access?',['No; it is outside the first row','Yes, it means a[1][0] portably','Only if the resulting address looks contiguous'],'Stay inside each row array\'s bounds; contiguity does not legalize this subscript.'),
 c('A function receives int a[][3]. What must match the row stride?',['The three-column row type','Only the number of rows','No type information'],'The column count determines the pointed-to row type.')],
 [['int (*p)[3]','Pointer to a three-int row'],['int *p[3]','Three pointer objects'],['a[r][c]','Element in row r and column c']],['Select a valid row','Select a valid column','Access the scalar element']));
d('indirection','A pointer object also has an address. A pointer-to-pointer can modify another pointer through that address. void * can carry an object pointer, but must be converted to a suitable object pointer before access.',
 ['Draw each pointer object separately from its target.','Use *pp to access the pointer object, and **pp for its target.','Keep the original object\'s type, alignment and lifetime valid.'],
 ['Double pointer: a pointer to a pointer object.','void pointer: generic object pointer value.','Declarator: syntax describing a name\'s complete type.'],
 'int x=2,y=9; int *p=&x; int **pp=&p; *pp=&y; changes p to designate y. **pp then reads 9.','double',s=>bank([
 n('Follow two arrows to a value. What integer is printed?',`int x=${s};\nint *p=&x;\nint **pp=&p;\n**pp += 2;\nprintf("%d", x);`,s+2,'Dereferencing pp reaches p; dereferencing again reaches x.'),
 n('Change which object a caller pointer designates. What integer is printed?',`int x=${s}, y=${s+5};\nint *p=&x;\nint **pp=&p;\n*pp=&y;\nprintf("%d", *p);`,s+5,'The assignment updates p itself to point to y.'),
 n('Recover an int pointer from void *. What integer is printed?',`int x=${s};\nvoid *v=&x;\nint *p=v;\nprintf("%d", *p);`,s,'C permits conversion between void * and object pointers; x remains a live int.'),
 n('A pointer-reassignment helper changes caller p. What integer is printed?',`int x=${s}, y=${s+6};\nint *p=&x;\nselect(&p,&y);\nprintf("%d", *p);`,s+6,'The address of p lets the helper write a new pointer value into it.','void select(int **slot, int *target) { *slot = target; }')],[
 c('What does int **pp normally designate?',['An int pointer object','An int automatically','A pair of adjacent ints'],'Each * removes one pointer layer during access.'),
 c('Can void * be directly dereferenced to read an object value in standard C?',['No, convert to a suitable object pointer type','Yes, it infers the original type','Only if the value is zero'],'void is incomplete and supplies no object type for access.'),
 c('A helper needs to reassign the caller int *p. What should it receive?',['The address of p as int **','Only the current *p value','An int copy of the address'],'The helper must designate the pointer object that needs updating.'),
 c('Which declaration names a function pointer returning int and accepting int?',['int (*f)(int);','int *f(int);','int f[1];'],'Parentheses make f a pointer to a function; int *f(int) is a function returning int *.'),
 c('Is pointer arithmetic on void * part of standard C11?',['No','Yes, its stride is always one','Only for malloc pointers'],'void has no complete object size; use an appropriate object or character pointer.'),
 c('Casting a pointer to an unrelated type automatically makes access valid?',['No','Yes','Only for zero values'],'A cast cannot fix incompatible access, insufficient alignment or ended lifetime.')],
 [['pp','Pointer to a pointer object'],['*pp','The designated pointer object'],['**pp','The final pointed-to object']],['Locate the pointer object','Follow one pointer layer','Check the final target before access']));
d('allocation','Allocated storage lives until it is freed, regardless of the block in which malloc is called. Check allocation success, initialize before reading, and keep one clear ownership path. free ends the allocation\'s lifetime.',
 ['Allocate enough bytes using the element count and sizeof *p.','Check the returned pointer and initialize live elements.','Release once after the last use; never access freed storage.'],
 ['Ownership: responsibility for releasing a block.','Leak: lose the ability to release an allocation.','Dangling pointer: a pointer left referring to ended storage.'],
 'int *p=malloc(3*sizeof *p); if(p){p[0]=7; free(p); p=NULL;} checks success, initializes before reading, releases once and clears this pointer. Other aliases would still need care.','heap',s=>bank([
 n('A checked allocation stores a reading. On the success path, what integer is printed?',`int *p=malloc(2*sizeof *p);\nif (!p) return 0;\np[0]=${s}; p[1]=${s+2};\nprintf("%d", p[1]);\nfree(p);`,s+2,'The question follows the successful allocation path; the accessed element is initialized and live.'),
 n('A checked calloc initializes ints. On success, what integer is printed?',`int *p=calloc(3,sizeof *p);\nif (!p) return 0;\nprintf("%d", p[2]);\nfree(p);`,0,'All bits are zero after calloc, which represents integer zero.'),
 n('A helper reads before release. On success, what integer is printed?',`int *p=malloc(sizeof *p);\nif (!p) return 0;\n*p=${s};\nint saved=*p;\nfree(p);\nprintf("%d", saved);`,s,'saved is a separate int copy and remains valid after the allocation ends.'),
 n('Two initialized allocated slots are summed. On success, what integer is printed?',`int *p=malloc(2*sizeof *p);\nif (!p) return 0;\np[0]=${s}; p[1]=3;\nint total=p[0]+p[1];\nfree(p);\nprintf("%d", total);`,s+3,'Compute while the allocation is live, then use the copied result.')],[
 c('Does malloc initialize its storage with zeros?',['No','Yes','Only for int'],'Initialize objects before reading them; calloc supplies all-bits-zero initialization.'),
 c('What must be checked before using a malloc result?',['Whether it is NULL','Whether its address is even as printed','Whether its name is short'],'Allocation failure must not lead to dereference.'),
 c('After free(p), may *p be read?',['No, that allocation\'s lifetime ended','Yes, until the address is reused','Only once'],'An apparently unchanged byte pattern does not make access valid.'),
 c('p and q alias one allocation. Setting p=NULL after free(p) also clears q?',['No','Yes','Only on 64-bit machines'],'Pointer objects are independent; aliases require their own handling.'),
 c('What happens when the only pointer to an allocated block is overwritten without free?',['The block can be leaked','The block is automatically freed','The linker releases it'],'Lost ownership can make the allocation impossible to release.'),
 c('Which release is safe?',['free(NULL);','free(p); free(p); on the same live allocation','free(&automatic_local);'],'free accepts null or an eligible allocation pointer, not arbitrary or already-freed storage.')],
 [['malloc','Allocate uninitialized storage'],['free','End an allocation lifetime'],['Leak','Lose the route needed to release storage']],['Allocate the required size','Check success','Initialize and use live storage','Release after the last use']));
d('bytes','An object\'s byte representation can be inspected through an unsigned char pointer. Byte order describes how multi-byte numeric significance is arranged in storage; it is an implementation property, not a change to the numeric value.',
 ['State the width and byte order used by the diagram.','Separate a byte\'s address from its significance.','Use unsigned char to inspect object representation.'],
 ['Little endian: least-significant byte at lowest address.','Big endian: most-significant byte at lowest address.','Object representation: bytes encoding an object value.'],
 'In a four-byte, eight-bit-byte diagram, 0x12345678 appears as 78 56 34 12 at increasing addresses on little endian, or 12 34 56 78 on big endian.','endian',s=>bank([
 n('In an 8-bit-byte little-endian four-byte diagram, what decimal value is the lowest-address byte of 0x000000'+(s+16).toString(16).padStart(2,'0')+'?','',s+16,'The least-significant byte is stored at the lowest address.'),
 n('In an 8-bit-byte big-endian four-byte diagram, what decimal value is the lowest-address byte of 0x12000000?','',18,'The first byte is hexadecimal 12, decimal eighteen.'),
 n('A byte mask extracts low bits numerically. What integer is printed?',`unsigned int x=0x1200u + ${s};\nprintf("%d", (int)(x & 0xffu));`,s,'This mask extracts the low numeric byte independent of storage byte order.'),
 n('An unsigned char representation has how many bits when CHAR_BIT is specified as eight?','',8,'The problem specifies the byte width instead of assuming it is universal.')],[
 c('Does endianness change the numeric value of a valid int object?',['No, it changes byte arrangement','Yes, it always reverses the number','Only for zero'],'Representation and value are separate concepts.'),
 c('Which pointer type is suitable for inspecting object bytes?',['unsigned char *','An unrelated double * without checks','void * directly dereferenced'],'Character-type access can inspect object representation.'),
 c('Is little endian required by C11?',['No','Yes','Only for arrays'],'C does not mandate this byte order.'),
 c('A network format defines byte order. What must a serializer do?',['Encode according to that format','Always copy host bytes unchanged','Assume every host has identical layout'],'External formats should not depend on unverified host representation.'),
 c('Does casting a byte buffer to int * remove alignment requirements?',['No','Yes','Only for big endian'],'Alignment and effective-type rules still apply.'),
 c('For 0x12345678 in the stated four-byte little-endian diagram, which byte is first?',['0x78','0x12','0x34'],'The least-significant byte occupies the lowest address.')],
 [['Lowest address','First stored byte'],['Least-significant byte','Lowest numeric weight'],['unsigned char access','Inspect representation bytes']],['State width and byte order','Split the value into bytes','Arrange bytes at increasing addresses']));
d('io','getchar returns an int so it can represent a character value or EOF. Structures group named members, and -> accesses a member through a structure pointer. Padding can make a structure larger than the sum of its members.',
 ['Store getchar in int and check EOF before treating it as a character.','Use . for a structure object and -> for a structure pointer.','Use sizeof the actual structure when allocating or copying its representation.'],
 ['EOF: an int status indicating end of input or error.','Member: a named field in a structure.','Padding: implementation-provided space between or after members.'],
 'struct Point {int x,y;}; struct Point p={2,3}; p.x=7; leaves y=3. A pointer q=&p accesses x with q->x.','struct',s=>bank([
 n('A robot position is updated through a member. What integer is printed?',`struct Point { int x,y; };\nstruct Point p={${s},3};\np.x += 2;\nprintf("%d", p.x);`,s+2,'The dot operator designates the named member x.'),
 n('A structure pointer updates the same object. What integer is printed?',`struct Point { int x,y; };\nstruct Point p={2,${s}};\nstruct Point *q=&p;\nq->y += 4;\nprintf("%d", p.y);`,s+4,'q->y designates the y member of p.'),
 n('A structure assignment copies member values. What integer is printed?',`struct Point { int x,y; };\nstruct Point a={${s},2}, b=a;\na.x=99;\nprintf("%d", b.x);`,s,'b is a separate structure object initialized from a.'),
 n('A structure holds independent numeric fields. What integer is printed?',`struct Item { int count,price; };\nstruct Item item={${s},3};\nprintf("%d", item.count * item.price);`,3*s,'Multiply the two named int member values.')],[
 c('Which type should store getchar\'s return before checking EOF?',['int','char unconditionally','unsigned char unconditionally'],'int preserves the EOF distinction before conversion to a character.'),
 c('Which operator accesses a member through a structure pointer?',['->','. without dereference','&&'],'p->x is equivalent to (*p).x for a valid p.'),
 c('Must sizeof(struct T) equal the sum of its member sizes?',['No, padding may be present','Yes','Only when members are int'],'Use the actual structure size rather than assuming a packed layout.'),
 c('Which check detects the end condition from getchar?',['ch == EOF while ch has type int','ch == \'0\'','ch == 0 always'],'The status EOF is distinct from the character digit zero and from the null character.'),
 c('Which output function writes one character?',['putchar','strlen','malloc'],'putchar writes the supplied character to standard output.'),
 c('Does copying a structure containing a pointer duplicate the allocation it points to?',['No, it copies the pointer value','Yes, always deep copies','Only for small allocations'],'Ownership must be managed explicitly; pointer members can still alias.')],
 [['.','Member through a structure object'],['->','Member through a structure pointer'],['EOF','End-of-input or error status']],['Locate the structure object','Select the named member','Apply the member operation']));

// Mapping keeps stable identities aligned with the source inventory; practice
// sessions revisit a concept with new concrete values rather than source titles.
function specialize(key,base,details,trace,checks){
 const original=defs[base];defs[key]={...original,...details,build:s=>{
  const questions=original.build(s);
  if(trace)trace(s).forEach((q,i)=>questions[[2,3,5,6][i]]=q);
  if(checks)checks.forEach((q,i)=>questions[[0,4,8,9,10,11][i]]=q);
  return questions;
 }};
}
specialize('promotions','integers',{
 idea:'Integer promotions happen before many operators. If int can hold every value of a small type, it becomes int. Mixed int and unsigned int arithmetic of equal rank instead converts the int to unsigned int.',
 example:'Assume unsigned char is 8 bits and int represents 0..255. With unsigned char x=255, x+1 is int 256, not byte zero. Only a later conversion back to unsigned char reduces the value.'
},s=>[
 n('A promoted byte is not narrowed afterward. What integer is printed? Assume unsigned char is 8 bits and int can represent 0..255.',`unsigned char x=${250+s%5};\nprintf("%d", x+10);`,260+s%5,'The byte promotes to int; the int addition stays representable.'),
 n('Apply a boolean comparison after promotions. What integer is printed?',`unsigned char a=${s}, b=${s+1};\nprintf("%d", a < b);`,1,'Both small values promote; the first is smaller.'),
 n('A comparison mixes int and unsigned int. What integer is printed?',`int a=-1;\nunsigned int b=${s};\nprintf("%d", a < b);`,0,'The int -1 converts to unsigned int, producing its maximum value, which exceeds this small b.'),
 n('Explicitly stay in int for a subtraction. What integer is printed?',`unsigned char a=${s}, b=${s+3};\nprintf("%d", (int)a - (int)b);`,-3,'Both operands are int and the negative result is representable.')],[
 c('Assume int can represent 0..255. What is the type of unsigned char x plus int 1?',['int','unsigned char','Always unsigned int'],'The unsigned char promotes to int before addition.'),
 c('Equal-rank int and unsigned int operands combine as…',['unsigned int','int always','char'],'The usual arithmetic conversions select unsigned int.'),
 c('Why can an expression on two unsigned char values have a negative result?',['Both can promote to int before subtraction','Unsigned char itself stores negative values','The compiler ignores type rules'],'The expression type can differ from the storage type.')]);
specialize('twos','integers',{
 idea:'In an explicitly assumed two\'s-complement width, a negative value has the modulo-2^width bit pattern. The highest bit has negative weight. This representation model does not make signed overflow defined.',
 example:'For an 8-bit two\'s-complement diagram, -5 has pattern 11111011: 256-5=251 as an unsigned interpretation. Its signed interpretation is 251-256=-5.'
},s=>[
 n('In an 8-bit two\'s-complement diagram, the unsigned interpretation of -'+s+' is what?','',256-s,'Subtract the magnitude from 256.'),
 n('Pattern '+(256-s).toString(2)+' has what signed interpretation in an 8-bit two\'s-complement diagram?','',-s,'The leading bit is set; subtract 256 from the unsigned value.'),
 n('What is the smallest value in an 8-bit two\'s-complement diagram?','',-128,'The highest bit has weight -128 and the remaining bits can all be zero.'),
 n('What is the largest positive value in an 8-bit two\'s-complement diagram?','',127,'A zero sign bit and seven ones give 64+32+16+8+4+2+1.')]);
specialize('switch','branch',{
 idea:'switch jumps to the matching integer case label. It then executes sequentially, so a missing break can intentionally or accidentally fall through. default handles unmatched values.',
 example:'For case 1: count+=2; case 2: count+=3; break; with input 1 and count=0, both additions run and count becomes 5.'
},s=>[
 n('A menu case ends with break. What integer is printed?',`int result=0;\nswitch(1){ case 1: result=${s}; break; case 2: result=99; }\nprintf("%d", result);`,s,'break prevents the second case body from running.'),
 n('Two labels share one action. What integer is printed?',`int result=0;\nswitch(2){ case 1: case 2: result=${s+2}; break; default: result=-1; }\nprintf("%d", result);`,s+2,'Both labels lead to the shared assignment.'),
 n('An unknown option chooses default. What integer is printed?',`int result=0;\nswitch(9){ case 1: result=4; break; default: result=${s}; }\nprintf("%d", result);`,s,'There is no matching case 9.'),
 n('An intentional fall-through runs two actions. What integer is printed?',`int result=0;\nswitch(1){ case 1: result+=${s}; case 2: result+=2; break; }\nprintf("%d", result);`,s+2,'Execution continues from case 1 into case 2 until break.')]);
specialize('extern','storage',{
 idea:'Compatible external declarations can refer to a single object defined in another translation unit. An extern declaration without an initializer is a declaration, while an initializer makes it a definition. Block scope does not itself imply short lifetime.',
 example:'File A contains int total=4;. File B declares extern int total; and increments it. Both names refer to the same object when the files are linked correctly.'
},null,[
 c('Which line supplies a definition with an initializer?',['int total = 4;','extern int total;','void use(void);'],'The initialized file-scope object declaration is a definition.'),
 c('File A defines total; file B uses a compatible extern declaration. How many shared total objects are intended?',['One','Two independent objects','One per function call'],'External linkage connects the declarations to the same entity.'),
 c('A name can have block scope and refer to which lifetime?',['Static storage duration through extern','Only automatic duration','Only allocated duration'],'Scope and storage duration answer different questions.'),
 c('Why include the same declaration header from both source files?',['Keep declarations compatible','Make every object private','Replace the linker'],'Compatible declarations prevent type mismatches across translation units.'),
 c('static int total at file scope makes the name…',['Internal to that translation unit','Externally shared by default','A fresh automatic local'],'Internal linkage limits cross-file access through that name.'),
 c('An extern function declaration alone provides…',['Type information, not a function body','Executable implementation automatically','A new call frame before execution'],'A definition still has to be linked.')]);
specialize('tree','recursion',{
 idea:'Branching recursion makes separate subcalls. Repeated arguments still create separate invocations unless results are cached. Trace the full call tree and combine both results without assuming one shared parameter object.',
 example:'With f(0)=1 and f(n)=f(n-1)+f(n-1), f(2) has seven calls in total and returns 4. Repeated subproblems increase work.'
},s=>[
 n('A binary recursive sum returns one at leaves. What integer is printed?',`printf("%d", leaves(${s%3+1}));`,2**(s%3+1),'Each level doubles the number of unit-valued leaves.','int leaves(int n) { if(n==0) return 1; return leaves(n-1)+leaves(n-1); }'),
 n('Count all calls in the same full binary tree. What integer is printed?',`printf("%d", calls(${s%3+1}));`,2**(s%3+2)-1,'One current call plus the call counts from both subtrees.','int calls(int n) { if(n==0) return 1; return 1+calls(n-1)+calls(n-1); }'),
 n('The recurrence is f(0)=0, f(1)=1. What integer is printed?',`printf("%d", fib(5));`,5,'Compute f(2)=1, f(3)=2, f(4)=3, f(5)=5.','int fib(int n) { if(n<2) return n; return fib(n-1)+fib(n-2); }'),
 n('Count local values while returning. What integer is printed?',`printf("%d", sum(${s}));`,s*(s+1)/2,'Each frame adds its own separate local copy of n.','int sum(int n) { if(n==0) return 0; int own=n; return own+sum(n-1); }')]);
specialize('arrayargs','arrays',{
 idea:'An array parameter is adjusted to pointer type. It can modify elements in the caller array, but does not retain the array\'s total size. Pass a length explicitly, and keep every subscript within that length.',
 example:'void set(int a[], int n){if(n>0) a[0]=9;} changes the caller\'s first element. The parameter is a pointer value, so sizeof a inside set measures a pointer.'
},s=>[
 n('An array helper changes caller storage. What integer is printed?',`int a[2]={${s},3};\nset(a,2);\nprintf("%d", a[0]);`,9,'The adjusted pointer parameter designates the caller\'s first element.','void set(int a[], int n) { if(n>0) a[0]=9; }'),
 n('A length-aware helper sums all valid elements. What integer is printed?',`int a[3]={${s},2,3};\nprintf("%d", sum(a,3));`,s+5,'The explicit length bounds the loop to indices zero through two.','int sum(const int a[], int n) { int total=0; for(int i=0;i<n;i++) total+=a[i]; return total; }'),
 n('Changing the copied pointer parameter leaves the caller array intact. What integer is printed?',`int a[2]={${s},3};\nskip(a);\nprintf("%d", a[0]);`,s,'Moving a local pointer value does not move or rewrite the array.','void skip(int *a) { a++; }'),
 n('An array helper reads an offset. What integer is printed?',`int a[3]={1,${s},9};\nprintf("%d", middle(a));`,s,'The helper reads index one through the adjusted pointer.','int middle(const int a[]) { return a[1]; }')]);
specialize('declarations','indirection',{
 idea:'Read a declaration outward from its name, honoring parentheses. [] and function suffixes bind before an unparenthesized *. A function pointer, a pointer to a row, and an array of pointers are different types.',
 example:'int (*f)(int) declares f as a pointer to a function returning int. int *f(int) instead declares a function returning int *. Parentheses change the type.'
},s=>[
 n('Call through a function pointer. What integer is printed?',`int (*fn)(int)=twice;\nprintf("%d", fn(${s}));`,2*s,'fn designates twice and is called with the supplied int argument.','int twice(int n) { return 2*n; }'),
 n('Index a pointer-to-row declaration. What integer is printed?',`int a[2][2]={{1,2},{${s},4}};\nint (*p)[2]=a;\nprintf("%d", p[1][0]);`,s,'p designates two-int rows; index one selects the second row.'),
 n('Read an array of pointers. What integer is printed?',`int x=${s},y=9;\nint *p[2]={&x,&y};\nprintf("%d", *p[0]);`,s,'p is an array; p[0] is an int pointer, which is dereferenced.'),
 n('Read a const-qualified target through a pointer. What integer is printed?',`const int x=${s};\nconst int *p=&x;\nprintf("%d", *p);`,s,'The target can be read through p, but not modified through this pointer.')],[
 c('int *a[4] is…',['An array of four int pointers','A pointer to four ints as one row','A function returning four ints'],'Read [] before an unparenthesized *.'),
 c('int (*a)[4] is…',['A pointer to a four-int array','Four independent int pointers','An int object'],'Parentheses group the pointer declarator before the array suffix.'),
 c('int (*f)(int) is…',['A function pointer returning int','A function returning int *','An array of functions'],'The grouped *f is a pointer to the function type.'),
 c('const int *p prevents which write through p?',['*p = 7;','p = another_int_pointer;','Reading *p'],'The pointed-to int is const-qualified through this pointer.'),
 c('int *const p=&x; prevents…',['Reassigning p','Changing x through *p','Reading x'],'The pointer object itself is const, while the int target is not const here.'),
 c('A pointer-table declaration and a contiguous matrix can differ in…',['Both type and layout','Only spelling','Nothing'],'Correct access depends on the actual declared type and storage organization.')]);
specialize('void','indirection',{
 idea:'void * stores a generic object pointer and can be converted back to the original compatible object pointer type. It supplies neither an object size for arithmetic nor a value type for direct dereference.',
 example:'int x=7; void *v=&x; int *p=v; reads *p as 7. Turning v into double * would not make x a double or satisfy a valid double access.'
},null,[
 c('Which round trip is supported for an object pointer?',['int * to void * back to int *','int * to an arbitrary incompatible function pointer and call','void * to any type and always access'],'A generic object pointer can preserve the original object address.'),
 c('Why cannot standard C11 add one to void *?',['void has no complete object size','The pointer is necessarily null','Only arrays prohibit arithmetic'],'Choose a suitable complete object type for arithmetic.'),
 c('Which pointer reads an int object after void * transport?',['A compatible int *','An arbitrary double *','A void value'],'The access type must remain compatible with the actual object.'),
 c('Does malloc require a cast to int * in C?',['No, void * converts to an object pointer','Yes, always','Only for one element'],'Include stdlib.h and assign the returned object pointer appropriately.'),
 c('Does a generic pointer record the allocation length?',['No','Yes, always','Only when initialized from malloc'],'Pass and track sizes separately.'),
 c('Can a cast revive an object whose lifetime ended?',['No','Yes','Only if the old address is unchanged'],'Lifetime validity is independent of spelling a cast.')]);
const plan=[
 ['How programs change state','start'],['Your first C program','start'],['Binary place values','bases'],['Hexadecimal and octal','bases'],['Representation practice','bases'],
 ['Signed and unsigned values','integers'],['Integer promotions','promotions'],['Mixed integer comparisons','promotions'],['Two\'s-complement diagrams','twos'],['Casts and integer division','conversion'],
 ['Choose with if and else','branch'],['Switch and fall-through','switch'],['Count with for and while','loops'],['Do, break and continue','loops'],['Control-flow challenges','loops'],
 ['Group and evaluate operators','operators'],['Masks and bit operations','operators'],['Conditional and comma operators','sequence'],['Sequencing side effects','sequence'],['Short-circuit guards','sequence'],['Expression repair','operators'],
 ['Parameters and return values','functions'],['Trace nested function calls','functions'],['From source to execution','toolchain'],['Object files and relocation','toolchain'],
 ['Object lifetime and memory','storage'],['Automatic and register locals','storage'],['Static local state','storage'],['External names and definitions','extern'],['Sharing declarations across files','extern'],['Resolve an external object','extern'],['Linkage and scope practice','extern'],
 ['Meet recursive calls','recursion'],['Return through a call stack','recursion'],['Recursive branching and depth','tree'],['Recursion challenges','tree'],
 ['Addresses and pointer arrows','pointers'],['Modify objects through aliases','pointers'],['Pointer parameters','pointers'],['Index an array','arrays'],['Array update challenges','arrays'],
 ['Array decay and element pointers','arrays'],['Size of an object or type','size'],['Array size versus pointer size','size'],['Pointer type and valid access','pointers'],['Move within an array','arithmetic'],['Pointer arithmetic challenges','arithmetic'],
 ['Inspect byte order','bytes'],['Array parameters and lengths','arrayargs'],['Null-terminated strings','strings'],['Pointers to pointer objects','indirection'],['Rows and columns','matrix'],['Character-buffer challenges','strings'],['Pointers to row arrays','matrix'],['Arrays of pointer objects','matrix'],['Pass a two-dimensional array','matrix'],['Row boundaries and strides','matrix'],
 ['Read complex declarations','declarations'],['Declaration challenges','declarations'],['Generic object pointers','void'],['Pointer validity challenges','arithmetic'],['Allocate and release storage','allocation'],['Leaks and dangling pointers','allocation'],['Ownership challenges','allocation'],
 ['Character input and structures','io'],['Function and expression challenge','functions'],['Control-flow debugging challenge','sequence'],['Memory and array challenge','arithmetic']
];
export const topics=plan.map(([label,key],index)=>{
 const def=defs[key],seed=2+index%7,questions=def.build(seed);
 if(questions.length!==12)throw new Error(`C topic ${index} needs twelve questions, found ${questions.length}`);
 return {label,key,...def,questions,titles:[`${label}: explore`,`${label}: trace`,`${label}: apply`]};
});
