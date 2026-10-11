// Original examples grounded in completed Digital Logic transcripts 48–59.
const n=(prompt,answer,explanation)=>({type:'number',prompt,answer,tolerance:1e-8,explanation});
const c=(prompt,options,explanation)=>({type:'choice',prompt,options,answer:0,explanation});
const m=(prompt,pairs,explanation)=>({type:'match',prompt,pairs,explanation});
const o=(prompt,items,explanation)=>({type:'order',prompt,items,explanation});
const t=(prompt,answer,explanation)=>({type:'truth',prompt,labels:['A','B'],rows:[[0,0],[0,1],[1,0],[1,1]],answer,explanation});
const full=(prompt,answer,explanation)=>({type:'truth',prompt,labels:['A','B','Cin'],rows:Array.from({length:8},(_,i)=>[i>>2,(i>>1)&1,i&1]),answer,explanation});
const s=(title,anchors,steps,questions)=>({title,anchors,steps,questions});
const entry=(id,label,intro,stages)=>[id,{label,intro,stages}];
export const adderDecoderLectures=new Map([
entry(48,'Priority encoders','A priority encoder selects the highest-priority asserted input even when several requests arrive together. A separate valid output distinguishes a request for index zero from no request.',[
 s('Choose the winning request',['priority','highest'],['Use the explicitly stated priority order.','Among asserted inputs, choose the highest-priority one.','Encode its index; lower-priority requests do not change the winner.'],[
  c('Active-high 4-input priority encoder: W3 > W2 > W1 > W0. For W3W2W1W0 = 0110, what is Y1Y0?',['10','11','01'],'W2 outranks W1, so the winning index is two, encoded 10.'),
  n('W3 > W2 > W1 > W0, active-high requests 1011. Winning index?',3,'W3 is asserted and has highest priority.'),
  n('Priority W0 > W1 > W2 > W3, active-high requests W3W2W1W0 = 1010. Winning index?',1,'The asserted inputs are W3 and W1; the stated order gives W1 priority.'),
  c('With W3 highest and asserted, which lower inputs may change the winning code?',['None','Only W2','All of them'],'Once W3 wins, lower-priority inputs are irrelevant to the encoded winner.')]),
 s('Separate validity from the code',['attention','output','zero'],['Valid Z is the OR of all active-high requests.','Code 00 can represent input W0.','When Z is zero, no input is asserted and the encoded index is not a valid request.'],[
  m('Match priority-encoder signals to their jobs.',[['Y1Y0','Encode the winning request index'],['Z','Indicate that at least one request is asserted'],['W0 through W3','Supply the request inputs']],'The encoded output and validity output answer different questions.'),
  n('Active-high requests W3W2W1W0 = 0000. What is valid Z?',0,'OR of four zeros is zero: no request is present.'),
  n('Active-high requests W3W2W1W0 = 0001. What is valid Z?',1,'W0 is asserted, so the request is valid even though its index code is 00.'),
  c('Does a valid output Z serve as an enable input?',['No, Z is an output','Yes, Z turns the circuit on','Only when W0 is high'],'Validity reports request presence; enable is a separate input if provided.')]),
 s('Build priority-aware equations',['equation','w2','y0'],['For W3 > W2 > W1 > W0, Y1 = W3 + W2.','Y0 = W3 + W2\u2032W1 suppresses W1 when W2 wins.','Z = W3 + W2 + W1 + W0.'],[
  c('W3 > W2 > W1 > W0: correct equation for Y0?',['W3 + W2\u2032W1','W3 + W1','W2 + W0'],'W1 contributes only if W2 is absent; W3 always sets the low code bit.'),
  n('W3=0, W2=1, W1=1: evaluate priority equation Y0 = W3 + W2\u2032W1.',0,'W2\u2032 is zero, so the W1 contribution is blocked.'),
  n('W3=0, W2=0, W1=1: evaluate Y1 = W3 + W2.',0,'Both inputs to the OR are zero; the winner W1 has code 01.'),
  c('For W3W2W1W0 = 0110, why does ordinary Y0 = W3 + W1 fail as a priority equation?',['It produces 1 although W2 wins with code 10','It ignores W0 only','It produces no valid output'],'The ordinary encoder assumes one-hot inputs and does not suppress the lower request.')])]),
entry(49,'Binary decoders','A decoder maps a binary address to a selected output line. An enabled active-high decoder asserts exactly one output; its output equations are the address minterms.',[
 s('Decode an address',['decoder','inputs','outputs'],['n address bits distinguish 2^n output lines.','Read addresses in the stated most-to-least significant order.','For active-high outputs, the addressed line is one and all others are zero.'],[
  n('Enabled active-high 3-to-8 decoder, address A2A1A0 = 101. Which output index is high?',5,'Binary 101 is decimal five, so Y5 is high.'),
  n('A complete decoder with four address inputs has how many output lines?',16,'There are 2^4 = 16 distinct addresses.'),
  c('Enabled active-high 2-to-4 decoder, address A1A0=10. Output vector Y3Y2Y1Y0?',['0100','0010','1011'],'Y2 alone is one; output vectors are written from Y3 down to Y0.'),
  n('How many outputs are high in an enabled complete active-high decoder?',1,'Each binary address matches exactly one minterm.')]),
 s('Wire the minterms',['equation','implementation','bar'],['A zero address bit requires a complemented literal.','A one address bit requires an uncomplemented literal.','AND the address literals to form each active-high output.'],[
  t('Enabled active-high 2-to-4 decoder: fill Y2(A,B) = AB\u2032. A is the address MSB.',[0,0,1,0],'Only address 10 selects index two.'),
  c('Active-high 2-to-4 decoder, address A1A0: equation for Y1?',['A1\u2032A0','A1A0\u2032','A1A0'],'Output one corresponds to address 01.'),
  m('Match 2-bit addresses to active-high selected outputs.',[['00','Y0'],['01','Y1'],['10','Y2'],['11','Y3']],'Each binary address names the output with the same index.'),
  c('OR every output of an enabled complete active-high decoder. Result?',['Always 1','Always 0','The address LSB'],'Exactly one output is high for every address, so their OR is always one.')]),
 s('Control decoding with enable',['enable','idle','active'],['An active-high enable permits decoding at E=1.','An active-low enable permits decoding at E=0.','For the active-high output model here, disabling makes every output zero.'],[
  c('Active-high outputs and active-low enable E: E=1, address 10. Y3Y2Y1Y0?',['0000','0100','1111'],'E=1 disables this active-low-enable decoder; all active-high outputs are zero.'),
  n('Active-high outputs with active-high enable E=1 and address 11: selected index?',3,'The decoder is enabled, and binary 11 selects output three.'),
  c('Equation for active-high Y2 with active-high enable E and address A1A0?',['EA1A0\u2032','E\u2032A1A0\u2032','EA1\u2032A0'],'The address minterm is multiplied by E to force zero when disabled.'),
  n('Disabled active-high-output decoder: how many outputs are high?',0,'Every output is held at its inactive zero level.')])]),
entry(50,'Active-low decoders','Output polarity and enable polarity are separate choices. A NAND decoder asserts the selected output at zero; the unselected outputs remain one.',[
 s('Read one-low output vectors',['active','low','zero'],['Active-low means asserted at zero.','An enabled complete active-low decoder has exactly one low output.','Specify the output-vector order before finding the selected line.'],[
  c('Enabled active-low 2-to-4 decoder, address A1A0=10. Y3Y2Y1Y0?',['1011','0100','1101'],'Y2 alone is low; the other three lines are high.'),
  n('Enabled complete active-low 3-to-8 decoder: how many outputs are zero?',1,'Exactly the addressed output is asserted low.'),
  n('Enabled active-low decoder has vector Y3Y2Y1Y0=1101. Selected index?',1,'Y1 is the sole zero in this vector.'),
  c('A bubble on a decoder output indicates...',['Assertion at logic zero','An extra address bit','An active-high enable'],'The output bubble denotes active-low output polarity.')]),
 s('Use NAND minterms',['NAND','implementation','gate'],['An active-high decoder output is an address minterm.','Complement that minterm to get an active-low output.','A NAND gate performs that complement directly.'],[
  t('Active-low 2-to-4 decoder: fill Y3(A,B) = (AB)\u2032.',[1,1,1,0],'Only address 11 makes both NAND inputs one and drives Y3 low.'),
  c('Active-low output Y0 for address A1A0 is...',['(A1\u2032A0\u2032)\u2032','A1\u2032A0\u2032','A1A0'],'Complement the address-zero minterm to assert Y0 low on 00.'),
  n('NAND detector Y=(A3\u2032A2A1\u2032A0)\u2032 goes low on which unsigned address?',5,'The product is one on 0101, which is decimal five.'),
  c('Enabled active-low Y2 for address 00 has what level?',['1','0','Undefined'],'Address 00 selects Y0, so Y2 remains inactive high.')]),
 s('Keep enable polarity independent',['enable','one','zero'],['The enable input decides when decoding is permitted.','Output polarity decides the level of an asserted line.','For the NAND-output model here, disabling leaves every output high.'],[
  c('Active-low outputs with active-high enable E: E=0. Y3Y2Y1Y0?',['1111','0000','One line is zero'],'The decoder is disabled; all outputs are inactive high.'),
  c('Active-low outputs with active-low enable E: E=0, address 01. Y3Y2Y1Y0?',['1101','0010','1111'],'E=0 enables decoding and Y1 is asserted low.'),
  n('Active-low outputs with active-low enable E=1: how many outputs are low?',0,'E=1 disables this model, leaving every output one.'),
  c('Does active-low output polarity force an active-low enable?',['No, the two polarities are independent','Yes, always','Only for two address bits'],'An enable may use either polarity independently of the output assertion level.')])]),
entry(51,'Realize Boolean functions with decoders','A decoder supplies minterm signals. Combining the required minterms realizes a Boolean function; the combining gate must match the decoder output polarity.',[
 s('Select the true minterms',['function','minterms','connection'],['List the input rows where the function is one.','Take the decoder outputs with those indices.','For active-high outputs, OR the selected lines.'],[
  c('Enabled active-high 2-to-4 decoder: implement F(A,B)=A+B, A the MSB. Which lines feed OR?',['Y1, Y2, Y3','Y0 only','Y0, Y3'],'OR is one on 01, 10, and 11, so use minterms one, two, three.'),
  n('F(A,B)=AB using an active-high decoder: which output index alone equals F?',3,'AB is the minterm for address 11, index three.'),
  t('F(A,B) = sum m(1,2), A the MSB. Fill the decoder-realized function.',[0,1,1,0],'The selected minterms are 01 and 10, giving XOR.'),
  c('Active-high decoder plus OR of all lines implements...',['Constant 1','A+B only','Constant 0'],'At least one line is high at every address; combining all lines loses selectivity.')]),
 s('Match the combining gate to polarity',['NAND','AND','OR'],['Active-high minterms combine through OR.','Active-low complemented minterms combine through NAND.','De Morgan gives the same SOP function using the same selected indices.'],[
  m('Match decoder output polarity to the SOP combining gate.',[['Active-high minterm outputs','OR selected outputs'],['Active-low complemented minterm outputs','NAND selected outputs']],'NAND of complemented minterms equals OR of the original minterms.'),
  c('Active-low 3-to-8 decoder: realize F=sum m(1,4,6). Connect which lines to NAND?',['Y1, Y4, Y6','Y0, Y2, Y3, Y5, Y7','Every output'],'Use the complemented versions of the true minterms; NAND restores their OR.'),
  n('Enabled active-low decoder, F=NAND(Y1,Y2), address 01. What is F?',1,'Y1 is zero and Y2 is one, so their NAND is one.'),
  n('Enabled active-low decoder, F=NAND(Y1,Y2), address 00. What is F?',0,'Neither selected line is asserted, so both are one and their NAND is zero.')]),
 s('Plan the implementation',['variables','decoder','gate'],['A complete n-variable realization uses an n-to-2^n decoder.','Choose the output indices from the truth table.','Count decoder output lines separately from extra combining gates.'],[
  o('Order the steps for an active-high decoder realization.', ['Write the function truth table','List indices with output one','Connect those decoder lines to an OR gate'],'The row set determines the wiring; the final OR combines the required minterms.'),
  n('Complete decoder for a function of three Boolean variables: output-line count?',8,'Three address inputs generate eight minterm lines.'),
  n('F=sum m(0,2,5) with one unrestricted-fan-in OR: how many decoder lines connect to it?',3,'One connection is needed for each of the three listed minterms.'),
  c('For variable order A,B,C, which input selects decoder line Y5?',['101','011','110'],'Five is 101 in the stated MSB-to-LSB order.')])]),
entry(52,'Propagation delay and timing','Gate outputs respond after a delay. Timing diagrams shift transitions through the circuit, and the largest accumulated path delay determines when all outputs can be trusted.',[
 s('Shift a transition in time',['delay','nanosecond','inverter'],['Find the ideal output value after an input change.','Add the stated propagation delay to the change time.','Assume isolated, sufficiently separated transitions and equal rise/fall delays unless specified otherwise.'],[
  n('An inverter has equal rise/fall delay 4 ns. Its stable input changes 0 to 1 at 10 ns. When does output fall, in ns?',14,'The output falls after 10 + 4 = 14 ns.'),
  c('An inverter input rises from 0 to 1. After settling, its output...',['Falls from 1 to 0','Rises from 0 to 1','Stays at 1'],'An inverter complements the input; propagation delay postpones the falling transition.'),
  n('Equal-delay inverter: input falls at 20 ns and output rises at 27 ns. Delay in ns?',7,'Subtract the transition times: 27 - 20 = 7 ns.'),
  c('A gate with nonzero delay has the correct final Boolean value immediately after an input transition?',['Not necessarily','Always','Only for an inverter'],'During settling, the output may still reflect the previous input.')]),
 s('Accumulate serial delays',['waveform','shift','circuit'],['For a serial path, add each gate delay.','Two inversions restore the original polarity but still add delay.','Follow each transition through the intermediate outputs.'],[
  n('Two serial inverters have delays 3 ns and 5 ns. An isolated input edge occurs at 10 ns. Final edge time in ns?',18,'The first output changes at 13 ns; the second changes at 18 ns.'),
  n('Serial gate path: delays 2 ns, 4 ns, and 3 ns. Total path delay in ns?',9,'Series delays add: 2 + 4 + 3 = 9 ns.'),
  c('Two serial inverters after all outputs settle give...',['The original input value','The complement of the input','Always zero'],'Double inversion restores the value, while the transition is delayed.'),
  m('Match timing quantities to their meanings.',[['Input transition time','Time the applied input changes'],['Propagation delay','Time until the corresponding output response'],['Output transition time','Input transition time plus path delay']],'These quantities connect a Boolean response with its timing.')]),
 s('Find the critical path',['critical','longest','maximum'],['Compute input-to-output path delays.','At a gate, wait for its latest required input and then add the gate delay.','The maximum path delay is the critical-path delay, not the sum of parallel branches.'],[
  n('Two branches reach an AND at 4 ns and 9 ns; AND delay is 3 ns. Latest settling time in ns?',12,'Wait for the later arrival at nine, then add three: twelve ns.'),
  n('Input-to-output paths have delays 7 ns, 11 ns, and 9 ns. Critical-path delay in ns?',11,'The longest path is eleven ns; parallel paths are not added together.'),
  c('Which path controls the worst-case settling time?',['The path with maximum accumulated delay','The path with fewest gates always','The sum of every branch'],'Gate delays can differ, so compare accumulated time rather than only gate counts.'),
  n('Parallel branches settle at 5 ns and 8 ns, then pass through an OR of delay 2 ns. Latest output validity time in ns?',10,'The OR output can be trusted after max(5,8) + 2 = 10 ns.')])]),
entry(53,'Half adders','A half adder adds two single bits and produces a sum bit and a carry bit. It has no carry-in input, so it cannot alone handle a column that also receives an incoming carry.',[
 s('Split the result into sum and carry',['half','sum','carry'],['For inputs A and B, the sum bit is A XOR B.','The carry bit is AB.','The numerical result is 2C + S.'],[
  t('Half adder: fill sum S(A,B) = A XOR B.',[0,1,1,0],'One asserted input gives sum one; two asserted inputs give sum zero and carry one.'),
  t('Half adder: fill carry C(A,B) = AB.',[0,0,0,1],'A carry appears only when both input bits are one.'),
  c('Half adder inputs A=1, B=1. Output pair CS?',['10','01','11'],'The total is two, represented by carry one and sum zero.'),
  n('Half adder gives C=0, S=1. Numerical result?',1,'The result is 2C + S = 0 + 1 = 1.')]),
 s('Recognize the missing input',['two','inputs','LSB'],['A half adder has two data inputs.','It produces two outputs: sum and carry.','A column with two operand bits and a variable incoming carry needs a full adder.'],[
  m('Match half-adder connections to their roles.',[['A and B','The two input bits'],['S','Low bit of the sum'],['C','Carry to the next column']],'The half adder splits a two-bit numerical result into its low and high bits.'),
  n('A half adder has how many carry-in inputs?',0,'Only the two operand bits are inputs.'),
  c('Can a half adder alone add A, B, and a variable carry-in?',['No','Yes, always','Only when all are one'],'Three variable inputs require full-adder behavior.'),
  c('With external carry-in fixed at zero, which column can use a half adder in a multi-bit addition?',['The least significant column','Every column regardless of carry','Only the most significant column'],'The low column receives no incoming carry; later columns may receive a carry.')]),
 s('Time the implementation',['delay','basic','complementary'],['With an XOR primitive, sum delay is the XOR delay.','For SOP XOR A\u2032B + AB\u2032, count NOT, AND, and OR levels.','Available complemented inputs remove the input NOT delay from that model.'],[
  n('Half adder: XOR delay 6 ns, AND delay 2 ns. Time until both outputs are valid, in ns?',6,'The sum takes six ns and the carry two; wait for the maximum, six ns.'),
  n('Half-adder sum A\u2032B+AB\u2032 uses NOT/AND/OR, each 2 ns, no complements supplied. Worst-case sum delay in ns?',6,'The longest path has NOT, AND, OR: three times two ns.'),
  n('Half-adder sum A′B+AB′: inputs and their complements are available at time zero; AND and OR each take 2 ns. Sum delay in ns?',4,'Only AND then OR remain on the longest path, so four ns.'),
  n('Half-adder carry AB uses one AND gate of delay 2 ns. Carry delay in ns?',2,'The carry output traverses a single AND gate.')])]),
entry(54,'Full adders','A full adder adds two operand bits and an incoming carry. Its sum is odd parity of the three inputs; its carry is one when at least two inputs are one.',[
 s('Add three bits',['full','inputs','carry'],['Compute total A + B + Cin as ordinary integer addition.','S is total modulo two.','Cout is one for totals two or three.'],[
  full('Full adder: fill S(A,B,Cin) = A XOR B XOR Cin.',[0,1,1,0,1,0,0,1],'The sum bit is one for an odd number of asserted inputs.'),
  full('Full adder: fill Cout(A,B,Cin).',[0,0,0,1,0,1,1,1],'Carry is one when at least two of the three input bits are one.'),
  c('Full adder A=B=Cin=1. Output Cout,S?',['1,1','1,0','0,1'],'Three is binary 11: carry one and sum one.'),
  n('Full adder A=1, B=0, Cin=1. Sum bit S?',0,'The total is two, whose low bit is zero.')]),
 s('Combine two half adders',['half','OR','implementation'],['First half adder gives P=A XOR B and G=AB.','Second half adder adds P and Cin.','OR the two half-adder carries to produce Cout = G + PCin.'],[
  o('Order the construction of a full adder from half adders.', ['Half-add A and B to get P and G','Half-add P and Cin to get S and H','OR G and H to get Cout'],'The second half adder receives the first sum; both carry contributions feed the final OR.'),
  n('Full adder built from half adders and one OR uses how many half adders?',2,'One adds the operand bits; the other incorporates the carry-in.'),
  c('Correct full-adder carry equation?',['AB + (A XOR B)Cin','A XOR B XOR Cin','AB only'],'Carry is generated by AB or propagated through XOR when Cin is one.'),
  n('A=1, B=1, Cin=0. In the two-half-adder construction, first carry G?',1,'AB is one even though the intermediate sum P is zero.')]),
 s('Distinguish parity and majority',['exclusive','at least','delay'],['S detects odd parity; Cout detects at least two ones.','Cout can also be written AB + ACin + BCin.','Timing depends on the chosen implementation and gate delays.'],[
  c('Why does Cout = AB + ACin + BCin work?',['It detects any pair of one inputs','It detects odd parity only','It is one only for three ones'],'A total of at least two has at least one asserted pair.'),
  n('Two-half-adder full adder: XOR 2 ns, AND 1 ns, OR 1 ns, inputs ready at zero. Worst-case sum delay in ns?',4,'The sum passes through two serial XOR gates, giving four ns.'),
  n('Full adder made from two half adders and an OR: XOR 2 ns, AND 1 ns, OR 1 ns; inputs ready at zero. Worst-case Cout delay in ns?',4,'The longest path is XOR then AND then OR: 2 + 1 + 1 = 4 ns.'),
  c('For A=B=Cin=1, is sum parity equal to carry majority?',['Both are 1 in this case','Both are always identical','Sum is always zero'],'Three ones have odd parity and also satisfy majority, but the two outputs differ on other rows.')])]),
entry(55,'Ripple carry adders','A ripple carry adder connects a full-adder carry-out to the next column. Carries move from the least significant position upward, making the worst-case delay grow with word width.',[
 s('Connect the columns',['ripple','full','least'],['Column i adds Ai, Bi, and Ci.','Its carry output Ci+1 feeds column i+1.','Set C0 explicitly; ordinary addition often uses zero.'],[
  m('Match ripple-adder signals to their destinations.',[['C0','Carry input of the least significant column'],['C1','Carry input of column one'],['Cn','Final carry output after n columns']],'Carries connect successive columns from low significance to high significance.'),
  n('An eight-bit ripple adder built with one full adder per column uses how many full adders?',8,'Each of the eight bit columns has its own full adder.'),
  c('Which direction does carry ripple?',['Least significant to most significant','Most significant to least significant','Both directions simultaneously'],'A carry is produced by the lower column and consumed by the next higher column.'),
  n('Four-bit unsigned 0111 + 0001 with C0=0: numerical result including carry?',8,'Seven plus one is eight, stored sum 1000 with final carry zero.')]),
 s('Trace an addition',['carry','summation','depends'],['Start at the least significant bits.','Compute sum and outgoing carry for each column.','Do not discard the final carry when interpreting an unsigned widened result.'],[
  o('Trace 4-bit 1111 + 0001, C0=0; order the column results.', ['Column 0: S0=0, C1=1','Column 1: S1=0, C2=1','Column 2: S2=0, C3=1','Column 3: S3=0, C4=1'],'Every subsequent 1+0+1 produces sum zero and another carry.'),
  n('Four-bit unsigned 1111 + 0001, C0=0. Final carry C4?',1,'The result sixteen is binary 10000, requiring a final carry.'),
  n('Four-bit unsigned 1001 + 0110, C0=0. Sum as a decimal number?',15,'Nine plus six is fifteen, binary 1111.'),
  c('Four-bit 1111 + 0001, C0=0. Retained four-bit sum?',['0000','1111','0001'],'The widened result is 10000; the retained low four bits are zero.')]),
 s('Follow the carry delay',['delay','delta','dependency'],['Timing depends on the full-adder implementation.','In the stated two-level majority carry model, each carry stage adds two gate delays.','For a three-level SOP sum model, the last sum arrives three gate delays after its incoming carry.'],[
  n('Four-bit ripple adder: each carry stage takes 2 ns; all operand bits and C0 ready at zero. Final carry time in ns?',8,'Four serial carry stages give 4 times 2 = 8 ns.'),
  n('Four-bit ripple: carry delay 2 ns per column, sum delay 3 ns from the incoming carry. Latest top sum S3 time in ns?',9,'C3 arrives after three carry stages, six ns; add three ns for S3.'),
  n('Eight-bit ripple with carry delay 2 ns per column. C8 arrival time in ns?',16,'The carry traverses eight columns, giving sixteen ns.'),
  c('Why does the upper sum have a long worst-case delay?',['It depends on carries from lower columns','It has more input bits than every other sum','Its binary weight alone slows its gate'],'A dependency chain makes the top column wait for its incoming carry.')])]),
entry(56,'Generate, propagate, and kill','For a bit position, operand bits determine whether a carry is generated, propagated, or killed. These local properties can be calculated without waiting for the incoming carry.',[
 s('Classify each operand pair',['generate','propagate','kill'],['11 generates an outgoing carry regardless of incoming carry.','01 and 10 propagate the incoming carry unchanged.','00 kills the carry and produces outgoing zero.'],[
  m('Match operand pairs to their carry behavior.',[['11','Generate'],['01 or 10','Propagate'],['00','Kill']],'Classify the pair by how its outgoing carry depends on the incoming carry.'),
  n('Operand pair 11, incoming carry zero. Outgoing carry?',1,'Two operand ones generate a carry without requiring an incoming one.'),
  n('Operand pair 00, incoming carry one. Outgoing carry?',0,'The total is one, producing sum one but outgoing carry zero.'),
  c('Operand pair 10: what happens to the incoming carry?',['It is propagated unchanged','It is always forced to one','It is always forced to zero'],'For 1+0+Cin the outgoing carry equals Cin.')]),
 s('Compute local G and P',['variable','xor','directly'],['Use XOR propagation: Gi = AiBi and Pi = Ai XOR Bi.','G and P depend only on the operand bits.','All bit positions can compute these local signals in parallel.'],[
  t('Fill carry-generate G(A,B) = AB.',[0,0,0,1],'Only operand pair 11 generates carry.'),
  t('Fill XOR carry-propagate P(A,B) = A XOR B.',[0,1,1,0],'Exactly one operand one propagates the incoming carry.'),
  c('Must Gi and Pi wait for incoming carry Ci?',['No, they depend only on Ai and Bi','Yes, always','Only Gi must wait'],'Local generation and propagation are calculated from the operand pair alone.'),
  n('Four operand positions each produce a G and a P. Total local signals?',8,'Four generate signals plus four propagate signals gives eight.')]),
 s('Time the local logic',['delay','basic','complementary'],['An AND computes G in one gate delay.','SOP XOR needs NOT, AND, and OR when complements are unavailable.','An XOR primitive or supplied complements changes the timing model.'],[
  n('G=AB uses one AND of delay 3 ns. G arrival time in ns?',3,'Both inputs are ready at zero, and a single AND takes three ns.'),
  n('P=A\u2032B+AB\u2032, NOT/AND/OR each 2 ns, no complements supplied. P delay in ns?',6,'The longest path traverses three basic gates, giving six ns.'),
  n('P=A′B+AB′, inputs and complements supplied at zero, AND/OR each 2 ns. P delay in ns?',4,'The remaining AND-OR path has two levels.'),
  n('P computed by one XOR primitive with delay 2 ns. P delay in ns?',2,'The primitive XOR is one gate under the stated timing assumption.')])]),
entry(57,'Carry look-ahead equations','Carry look-ahead expands carry dependencies into expressions using operand generate/propagate signals and the initial carry. Parallel carry logic removes the serial ripple dependency.',[
 s('Use the carry recurrence',['generate','propagate','equation'],['With XOR propagation, Ci+1 = Gi + PiCi.','The generated term sets carry regardless of Ci.','The propagation term forwards Ci when the operand pair differs.'],[
  c('Using Gi=AiBi and Pi=Ai XOR Bi, which recurrence gives carry?',['Ci+1 = Gi + PiCi','Ci+1 = GiPi','Ci+1 = Gi XOR Pi'],'Carry is generated locally or propagated from the preceding column.'),
  n('Gi=0, Pi=1, Ci=1. Compute Ci+1.',1,'The propagation product PiCi is one.'),
  n('Gi=1, Pi=0, Ci=0. Compute Ci+1.',1,'The generated carry Gi is one independently of Ci.'),
  n('Gi=0, Pi=0, Ci=1. Compute Ci+1.',0,'Neither generation nor propagation produces a carry.')]),
 s('Expand away the ripple dependency',['c2','c3','initial'],['C1 = G0 + P0C0.','C2 = G1 + P1G0 + P1P0C0.','Each expansion substitutes the previous carry until only G, P, and C0 remain.'],[
  c('Expanded expression for C2?',['G1 + P1G0 + P1P0C0','G1 + P0G1 + P0P1C1','G0 + P0C0'],'Substitute C1=G0+P0C0 into C2=G1+P1C1.'),
  n('G1=0, P1=1, G0=1, P0=0, C0=0. Expanded C2?',1,'The term P1G0 is one, so carry reaches column two.'),
  n('G0=G1=0, P0=P1=1, C0=1. C2?',1,'Both stages propagate the initial carry through P1P0C0.'),
  c('Why expand carry equations?',['To compute carries from initial signals without serial carry waiting','To guess carries probabilistically','To remove the sum bits'],'Look-ahead calculates exact carries using the operand signals and C0.')]),
 s('Count the two-level network',['gate','level','c4'],['With unrestricted fan-in, each expanded carry is an AND-OR network.','Ck needs k product-term AND gates plus one OR, excluding the bare G term from the AND count.','These counts exclude G/P generation and sum logic.'],[
  n('Expanded C4 = G3 + P3G2 + P3P2G1 + P3P2P1G0 + P3P2P1P0C0. Product-term AND gate count?',4,'The four terms containing products each use one AND; bare G3 needs no AND.'),
  n('C4 = G3 + P3G2 + P3P2G1 + P3P2P1G0 + P3P2P1P0C0. How many inputs does the final unrestricted-fan-in OR need?',5,'There are five terms to combine, including G3.'),
  n('After G/P are available, two-level AND-OR carry logic has AND=2 ns, OR=2 ns. Extra delay in ns?',4,'The longest remaining path traverses one AND and one OR.'),
  c('Does the two-level count guarantee fixed delay for arbitrary width with only 2-input gates?',['No, restricted fan-in requires extra levels','Yes, any width has two physical gates','Only sum gates change'],'Large products and ORs must be decomposed when fan-in is restricted.')])]),
entry(58,'Look-ahead timing and fan-in','Look-ahead timing must include generate/propagate logic, carry generation, and sum generation. Constant logical depth assumes unrestricted fan-in; a limited-input gate network needs additional levels.',[
 s('Keep the initial carry explicit',['c0','addition','4'],['C0 is an input, not an automatic constant zero.','Set C0=0 for ordinary independent addition if specified.','A chained block can receive carry from a lower block.'],[
  c('Is C0 always zero in an adder?',['No, it may be an external carry input','Yes, by definition','Only in a look-ahead adder'],'Block chaining and carry-inclusive addition require a variable carry input.'),
  n('Four-bit unsigned 0011 + 0100 with C0=1. Numerical result?',8,'Three plus four plus the incoming one equals eight.'),
  n('Four-bit unsigned 1111 + 0000 with C0=1. Final carry C4?',1,'The total is sixteen, so the final carry is one.'),
  c('To chain a low four-bit adder into a high four-bit adder, connect...',['Low block carry-out to high block carry-in','High sum to low carry-in','Both carry inputs permanently to zero'],'The high block must include any carry generated by the low block.')]),
 s('Add all timing stages',['delay','delta','valid'],['For SOP XOR from NOT/AND/OR, local P takes three equal gate delays.','Unrestricted-fan-in AND-OR carry generation adds two delays.','A three-level SOP sum XOR then adds three more delays: total eight under this model.'],[
  n('Unrestricted fan-in, equal basic-gate delay 1 ns, SOP P needs 3 levels and carry logic 2. Carry-valid time in ns?',5,'Three ns for P plus two ns for the carry network is five ns.'),
  n('Carry is valid at 5 ns and the final SOP sum XOR adds 3 ns. All other sum inputs are ready. All sum bits are valid by what time, in ns?',8,'The final sum settles at 5 + 3 = 8 ns.'),
  n('P from XOR primitives takes 1 ns; carry AND-OR adds 2 ns; final XOR adds 1 ns. Sum-valid time in ns?',4,'The assumed primitive-gate model totals 1 + 2 + 1 = 4 ns.'),
  c('Can the 8-gate-delay estimate be used unchanged for every XOR implementation?',['No, gate models and input availability affect delay','Yes, XOR always takes three gates','Only word width matters'],'SOP basic gates and primitive XOR timing give different totals.')]),
 s('Respect the fan-in limit',['fan','levels','log'],['Fan-in is the number of inputs a gate accepts.','A balanced 2-input tree combining k terms needs ceil(log2 k) levels.','Separate gate depth from the number of gates used.'],[
  n('Balanced 2-input AND tree for a five-literal product: minimum depth in gate levels?',3,'Two levels combine at most four inputs; five inputs require a third level.'),
  n('Balanced 2-input OR tree for eight terms: depth in levels?',3,'Eight terms reduce to four, then two, then one across three levels.'),
  n('A binary OR tree combines five terms. How many 2-input OR gates are required?',4,'Each gate reduces the number of separate signals by one; five to one needs four gates.'),
  c('Why does unrestricted-fan-in constant-depth carry logic gain levels when fan-in is two?',['Large AND and OR operations become gate trees','Carry equations become incorrect','Generate signals disappear'],'The same Boolean operations need multiple physical levels when each gate accepts only two inputs.')])]),
entry(59,'Count a look-ahead carry generator','Count only the explicitly requested carry-generation network. A two-level unshared implementation has one OR per expanded carry and a triangular total of product-term AND gates.',[
 s('Define the counting boundary',['generator','given','AND'],['Assume G/P signals and C0 are already available.','Generate C1 through C4 with separate expanded AND-OR networks.','Exclude sum gates, G/P logic, and C0 itself from the requested count.'],[
  m('Match signals to their role in a four-bit carry-generator count.',[['G0 through G3 and P0 through P3','Already supplied inputs'],['C0','Initial carry input'],['C1 through C4','Generated carry outputs']],'Count the carry network itself, keeping supplied and generated signals separate.'),
  n('Four-bit carry generator produces C1 through C4. How many carry outputs?',4,'There is one generated carry after each of four operand positions.'),
  n('In a carry-generator-only gate count, C0 is supplied as an external input. How many gates are needed to generate C0?',0,'C0 is an external input, so no generator gate is counted for it.'),
  c('Does a count restricted to the carry generator include final sum XOR gates?',['No','Yes','Only the top sum gate'],'The requested circuit generates carries; sum logic is outside its boundary.')]),
 s('Count AND products per carry',['four','three','two'],['C1 has one product AND; C2 has two.','C3 has three product ANDs; C4 has four.','Each bare G term feeds the OR directly.'],[
  n('Separate two-level C1 through C4 networks, unrestricted fan-in and no shared product gates: total AND gates?',10,'Add 1 + 2 + 3 + 4 = 10 product-term AND gates.'),
  n('Separate two-level networks generate C1 through C4 with unrestricted fan-in and no sharing. How many final OR gates are needed?',4,'Each of the four carry equations needs one unrestricted-fan-in OR gate.'),
  n('C3 = G2 + P2G1 + P2P1G0 + P2P1P0C0. AND gates for the product terms?',3,'Three terms are products; the bare G2 term needs no AND gate.'),
  c('Does the bare term G3 in C4 require a new AND gate?',['No, G3 is already supplied','Yes, a one-input AND must be counted','Only when C0 is zero'],'G3 connects directly to the final OR in the stated implementation.')]),
 s('Generalize the count carefully',['number','level','inputs'],['For unshared two-level C1 through Cn, the AND total is n(n+1)/2.','The final OR count is n when unrestricted fan-in is allowed.','Sharing products or restricting fan-in changes the component count.'],[
  n('Eight-bit unshared two-level carry generator: product-term AND gates, G/P supplied?',36,'Sum 1 through 8 = 8 times 9 divided by 2 = 36.'),
  n('Eight-bit unshared two-level carry generator: final unrestricted-fan-in OR gates?',8,'One final OR combines each expanded carry equation.'),
  n('Two-bit unshared two-level carry generator: AND plus OR gate total?',5,'AND count is 1 + 2 = 3; add two final OR gates to get five.'),
  c('Which change invalidates the unrestricted-fan-in count without further analysis?',['Allowing only 2-input gates','Renaming operand bits','Reordering a displayed equation'],'Large product and sum gates must be decomposed, altering the physical gate count.')])])
]);

for(const definition of [
entry(60,'Bounded-fan-in look-ahead scaling','With gates of fan-in at most two, parallel carry operations require logarithmic-depth networks. Local generate/propagate logic and final sum logic add constant depth.',[
 s('Separate the stages',['pi','constant','xor'],['Compute each local generate/propagate pair in parallel.','The work at one bit position uses a fixed-size circuit.','Increasing word width adds parallel local circuits rather than serial local stages.'],[
  m('Match look-ahead stages to their depth growth with word width n, using bounded-fan-in gates.',[['Local G/P computation','Constant depth'],['Balanced carry network','Logarithmic depth'],['Final per-bit sum XOR','Constant depth']],'Only the cross-bit carry computation grows in depth with n in this model.'),
  c('Computing all local Pi in parallel changes their depth from constant to linear as n grows?',['No','Yes','Only for even n'],'A fixed-size XOR per bit can run alongside the other bit positions.'),
  n('A fixed SOP XOR needs three basic-gate levels. For 32 parallel copies, serial depth per copy?',3,'Parallel copies do not multiply the number of serial levels.'),
  c('For timing, should you add delays of parallel independent Pi circuits?',['No, take the latest arrival','Yes, add all 32','Only if every Pi equals one'],'Independent circuits run concurrently; the slowest determines when all Pi are available.')]),
 s('Reduce terms through binary trees',['fan','log','levels'],['A two-input gate combines at most two signals.','A balanced tree doubles its combining capacity per level.','Combining n signals therefore needs about log2 n levels.'],[
  n('Balanced 2-input tree combines 16 signals. Minimum depth?',4,'The capacities per depth are 2, 4, 8, 16.'),
  n('Balanced 2-input tree combines 32 signals. Minimum depth?',5,'Five levels can combine 2^5 = 32 signals.'),
  c('Which growth describes bounded-fan-in carry look-ahead delay?',['Theta(log n)','Theta(n squared)','Theta(n factorial)'],'Carry logic is expanded into parallel operations implemented by bounded-fan-in trees.'),
  n('A balanced binary tree changes from 16 to 64 inputs. How many levels are added?',2,'Depth grows from log2 16 = 4 to log2 64 = 6.')]),
 s('Compare growth rates',['time','theta','constant'],['Constant local preprocessing plus logarithmic carry depth plus constant final logic remains logarithmic.','A ripple dependency chain instead grows linearly with word width.','Asymptotic growth describes scaling, not an exact nanosecond value.'],[
  c('Depth 3 + 2 ceil(log2 n) + 3 has what asymptotic growth?',['Theta(log n)','Theta(1)','Theta(n)'],'The logarithmic term determines growth; the additive constants do not.'),
  n('For the explicit depth model 3 + 2 ceil(log2 n) + 3, evaluate n=16.',14,'ceil(log2 16)=4, so 3 + 8 + 3 = 14 levels.'),
  c('Which architecture has a serial carry dependency through each successive bit?',['Ripple carry','Parallel look-ahead carry generation','A single half adder'],'Ripple delay accumulates from one carry stage to the next.'),
  c('Does Theta(log n) alone give an exact gate delay for n=32?',['No, constants and implementation details are also needed','Yes, exactly 5 ns','Yes, exactly 32 ns'],'Growth order omits gate-delay units, constants, and the implementation model.')])]),
entry(61,'Timing a two-half-adder ripple chain','For a full adder made from two half adders and one OR, distinguish the first carry delay from later increments. Operand-only XOR and AND signals are prepared in parallel before the carry arrives.',[
 s('Time one full adder',['half','XOR','OR'],['Assume XOR, AND, and OR each have delay T, and all external inputs arrive at zero.','The first half adder produces P and G at T.','Sum arrives at 2T; carry through XOR-AND-OR arrives at 3T.'],[
  n('Two-half-adder full adder, all gates 1 ns, inputs ready at zero. Sum-valid time in ns?',2,'The sum traverses first XOR and second XOR.'),
  n('Full adder made from two half adders and one OR, every gate 1 ns, all inputs ready at zero. Carry-valid time in ns?',3,'The longest carry path traverses XOR, then AND, then OR.'),
  n('Every XOR/AND/OR has delay T. At what multiple of T is P=A XOR B ready?',1,'P uses only the operand bits and one XOR gate.'),
  c('Does the first half adder in each column wait for incoming carry?',['No','Yes','Only when operands are equal'],'It computes operand-only P and G independently of carry.')]),
 s('Advance through the carry chain',['previous','extra','valid'],['For columns after the first, operand P and G are already prepared.','An arriving carry needs one more XOR delay for sum.','It needs AND then OR, two more gate delays, for the next carry.'],[
  m('Every gate delay is T; operand-only signals are already valid. Match paths to their extra delay.',[['Incoming carry to sum','T'],['Incoming carry to next carry','2T']],'The carry-to-sum path crosses one XOR; the carry-to-carry path crosses AND then OR.'),
  n('C1 valid at 3 ns; next-column XOR delay 1 ns, its P already ready. S1 validity time in ns?',4,'The late carry passes through one XOR, giving 3 + 1 = 4 ns.'),
  n('C1 valid at 3 ns; next carry passes through AND then OR, each 1 ns. C2 validity time in ns?',5,'The carry path adds two ns, giving five ns.'),
  c('Why is multiplying every full-adder carry delay by 3T too pessimistic for a two-half-adder ripple chain with all operand bits ready at zero?',['Later operand XOR signals are already computed','Later gates have zero delay','Carries travel backward'],'Later columns do not repeat the operand-preprocessing wait after the carry arrives.')]),
 s('Find the requested sum time',['s2','c2','delay'],['Under this model, C1=3T, C2=5T, C3=7T.','S0=2T, S1=4T, S2=6T, S3=8T.','Read column indices and requested output carefully; final carry is later than the top sum.'],[
  n('Four-bit two-half-adder ripple chain, every gate 1 ns, inputs at zero. S2-valid time in ns?',6,'C2 arrives at five ns; one final XOR yields S2 at six ns.'),
  n('Four-bit two-half-adder ripple chain, every XOR/AND/OR gate 1 ns, all inputs ready at zero. Final C4-valid time in ns?',9,'C1 is three ns, then three increments of two ns give C4 at nine ns.'),
  n('Four-bit two-half-adder ripple chain, every XOR/AND/OR gate 2 ns, all inputs ready at zero. S3-valid time in ns?',16,'S3 takes eight gate-delay units; 8 times 2 ns = 16 ns.'),
  n('Eight-bit two-half-adder ripple chain, every XOR/AND/OR gate 1 ns, all inputs ready at zero. Final carry C8-valid time in ns?',17,'First carry costs three ns; seven later stages add fourteen ns.')])]),
entry(62,'Signed addition and carry handling','Signed addition requires a stated encoding and width. Twos-complement addition retains the low-width sum, while ones-complement addition applies an end-around carry.',[
 s('Encode before adding',['input','representation','compliment'],['Specify the width and signed representation first.','For a negative ones-complement value, invert the same-width positive magnitude.','For a negative twos-complement value, invert and add one within the width.'],[
  c('Four-bit twos-complement representation of -6?',['1010','1001','0110'],'Positive six is 0110; invert to 1001 and add one to get 1010.'),
  c('Four-bit ones-complement representation of -6?',['1001','1010','0110'],'Invert positive six 0110 to obtain 1001.'),
  n('Minimum twos-complement width to represent positive 9?',5,'Four-bit signed maximum is seven; five-bit signed maximum is fifteen.'),
  c('Can four-bit signed twos-complement 1001 be interpreted as positive nine?',['No, it represents -7','Yes, always','Only if there is a carry'],'The leading bit has weight negative eight, so -8 + 1 = -7.')]),
 s('Apply the end-around carry',['around','final carry','added back'],['In ones complement, add the encoded words.','If there is a final carry, add it to the low-width result.','Interpret the corrected word in ones complement; all ones is negative zero.'],[
  o('Order four-bit ones-complement addition of +5 and -2.', ['Encode +5 as 0101 and -2 as 1101','Add to obtain 10010','Add the final carry 1 to retained 0010','Interpret 0011 as +3'],'Ones-complement addition folds the high carry back into the low bit.'),
  n('Four-bit ones-complement +5 plus -2 after end-around correction: signed result?',3,'0101 + 1101 = 10010; 0010 + 1 = 0011, giving three.'),
  c('Four-bit ones-complement 1111 represents...',['Negative zero','-1','Positive fifteen'],'Invert the word to get magnitude zero; this encoding has two zero representations.'),
  c('In ones-complement addition, where does the final carry go?',['Back to the least significant end of the retained sum','Into an extra sign bit always','It is always ignored'],'End-around carry adds the high carry to the low-width sum.')]),
 s('Retain the twos-complement sum',['tools','addition','carry'],['For twos-complement addition, retain the low n bits.','Do not apply the ones-complement end-around correction.','A carry-out and signed overflow are different; check the signed range.'],[
  n('Four-bit twos-complement -2 + 5, no overflow. Signed result?',3,'1110 + 0101 = 10011; retained 0011 represents three.'),
  c('Four-bit twos-complement -1 + 1 gives raw 10000. Retained result?',['0000','0001','1111'],'Discard the high carry; no end-around correction is applied.'),
  c('Four-bit twos-complement +7 + 1 has signed overflow?',['Yes','No','Only if the final carry is one'],'Eight exceeds the maximum seven, and the retained 1000 represents negative eight.'),
  c('Does a final carry alone establish signed overflow?',['No','Yes','Only for positive inputs'],'Signed overflow depends on representability; -1 + 1 can carry out while producing valid zero.')])]),
entry(63,'Combinational versus sequential circuits','A settled combinational output depends on current inputs. A sequential circuit also retains state, so the same current input can produce different results after different histories.',[
 s('Classify by dependence',['combinational','current','previous'],['Compare settled outputs for the same current inputs.','Combinational logic has no stored history affecting its settled function.','Sequential behavior depends on stored state as well as applicable inputs.'],[
  m('Match examples to their behavior.',[['Settled binary decoder','Combinational'],['Settled binary adder without registers','Combinational'],['Counter retaining a count','Sequential']],'A decoder and unregistered adder compute current inputs; a counter retains prior state.'),
  c('An unregistered mux selects data from current selector and data inputs. Circuit type?',['Combinational','Sequential','Depends only on its number of pins'],'Its settled output is a Boolean function of its current inputs.'),
  c('A counter receives an increment event and changes 2 to 3 or 5 to 6. Why can the same event give different outputs?',['Its stored count differs','The increment event is necessarily different','It is a memoryless adder'],'The previous count is part of the state determining the next count.'),
  c('Does nonzero propagation delay alone make an AND gate sequential?',['No','Yes','Only for a delay longer than one ns'],'Settling time is not stored logical history; its settled output is still the current-input AND.')]),
 s('Trace state updates',['counter','state','previous'],['Keep the initial state explicit.','Apply one stated transition at a time.','The resulting state becomes the starting state for the next transition.'],[
  o('A counter starts at zero and increments once per event. Order its next three states.', ['Count 1 after event one','Count 2 after event two','Count 3 after event three'],'Each event uses the state produced by the preceding event.'),
  n('Counter starts at 4 and increments once per event. After three events, count?',7,'The successive states are five, six, seven.'),
  c('A traffic-light model cycles red → green → yellow → red. Current state yellow; next state?',['Red','Green','Yellow'],'Apply the explicitly stated transition from yellow to red.'),
  c('Can two histories lead to different next states under the same current input?',['Yes, if their stored states differ','Never','Only for a combinational decoder'],'Stored state carries information from history into the next transition.')]),
 s('Read time-indexed notation',['time','output','next'],['Define what each symbol means before tracing.','If Q(t) is current state, Q(t+1) is next state.','Different time indices can describe one physical signal at different times.'],[
  m('Q(t) denotes the current state. Match the expressions.',[['Q(t-1)','Previous state'],['Q(t)','Current state'],['Q(t+1)','Next state']],'Time indices distinguish values at successive times.'),
  n('For the explicit binary update Qnext = X XOR Qcurrent, X=1 and Qcurrent=0. Qnext?',1,'XOR of one and zero is one; the stored state toggles.'),
  n('For Qnext = X XOR Qcurrent, X=1 and Qcurrent=1. What is Qnext?',0,'XOR of two ones is zero, so the same input toggles a different current state downward.'),
  c('Q(0), Q(1), Q(2) name one signal at successive times. How many physical signal lines does this notation itself specify?',['One','Three','Six'],'The parenthesized indices denote time samples of the same Q signal.')])]),
entry(64,'One-bit storage with feedback','Cross-coupled inverters have two complementary stable states. Feedback can retain a bit, but the two output nodes do not provide two independent stored bits.',[
 s('Identify stable feedback states',['inverter','zero','one'],['Each inverter output must complement its input.','With cross-coupling, the two nodes must be complements in a stable state.','The stable pairs are 0,1 and 1,0.'],[
  c('Ideal cross-coupled inverters have settled nodes Q=0 and R. What is R?',['1','0','Any independent bit'],'Each inverter complements the other node, so R is one.'),
  c('Which is a stable node pair for ideal cross-coupled inverters?',['Q=1, R=0','Q=1, R=1','Q=0, R=0'],'Opposite values satisfy both inverter equations.'),
  n('How many stable Boolean states satisfy Q=NOT R and R=NOT Q?',2,'The two solutions are (0,1) and (1,0).'),
  c('Does feedback always force the stored bit to zero?',['No, either complementary stable state is possible','Yes','Only when both nodes are observed'],'The stable equations permit a stored zero or a stored one.')]),
 s('Count independent stored information',['two','bit','complementary'],['Observing Q and its complement reveals the same stored information twice.','Two stable alternatives encode one independent bit.','Two independent bits would require four independently selectable states.'],[
  m('Match state counts to independent information.',[['Two distinguishable states','One bit'],['Four independently selectable states','Two bits'],['Q and its complement','One bit viewed with opposite polarity']],'Complementary nodes cannot vary independently.'),
  n('Cross-coupled inverters expose Q and its complement. Independent stored bits?',1,'Only two stable alternatives exist, so the device stores one bit.'),
  c('Can settled Q and its complement both store 1 independently?',['No','Yes','Only when Q starts at zero'],'The two settled nodes must be opposite; they are not independent storage cells.'),
  n('How many independent one-bit cells are needed to store an eight-bit word?',8,'Each cell retains one independent bit position.')]),
 s('Distinguish retention from control',['control','NOR','replace'],['Feedback provides retention of a stable state.','Bare cross-coupled inverters have no ordinary set/reset input for choosing a new state.','Replacing the inverters with controllable gates introduces user inputs for the storage circuit.'],[
  c('What limitation does a bare cross-coupled inverter pair have?',['No ordinary user input to choose the stored state','It stores two independent bits','It has no feedback'],'Retention alone does not supply a convenient write-control input.'),
  c('A NOR gate with its second input held at zero acts as...',['An inverter on its first input','An AND gate','A constant one'],'NOT(A OR 0) equals NOT A.'),
  n('For NOR(A,B), A=1 and B=0. Output?',0,'OR is one; inversion makes the output zero.'),
  c('Why introduce controlled gates into the feedback pair?',['To add inputs that can influence the retained state','To make the complementary nodes independent','To remove every stable state'],'Control inputs allow a storage circuit to change state intentionally.')])])
]) adderDecoderLectures.set(...definition);

adderDecoderLectures.set(...entry(65,'Active-high NOR SR latches','A cross-coupled NOR SR latch stores one bit with active-high set and reset controls. The hold input is S=R=0; simultaneous set and reset is forbidden for normal storage operation.',[
 s('Set, reset, and hold',['set','reset','retain'],['For a NOR SR latch, S=1,R=0 sets Q to one.','S=0,R=1 resets Q to zero.','S=R=0 retains the previous Q state.'],[
  m('Match active-high NOR SR latch input pairs (S,R) to their actions.',[['1,0','Set Q to 1'],['0,1','Reset Q to 0'],['0,0','Hold the previous Q']],'The two controls assert at one; releasing both controls permits feedback to retain the stored bit.'),
  n('Active-high NOR SR latch, Q=0 initially, S=1,R=0 held until settled. New Q?',1,'An asserted set with reset deasserted stores one.'),
  n('Active-high NOR SR latch, Q=1 initially, S=0,R=1 held until settled. New Q?',0,'An asserted reset with set deasserted stores zero.'),
  c('Active-high NOR SR latch: which input pair holds the stored bit?',['S=0,R=0','S=1,R=1','S=1,R=0'],'Both controls must be deasserted so that the cross-coupled gates retain the state.')]),
 s('Trace controlled storage',['previous','next','state'],['State the initial Q before a hold step.','Set or reset changes the bit regardless of its previous valid state.','A following hold preserves the newly stored value.'],[
  o('NOR SR latch starts with Q=0. Order a write-one then hold sequence.', ['Apply S=1,R=0','Wait for Q to settle to 1','Return S=0,R=0','Retain Q=1'],'Set writes the one; the released controls let feedback retain it.'),
  n('NOR SR latch starts Q=1. Apply reset (S,R)=(0,1), then hold (0,0). Final Q?',0,'Reset stores zero and hold retains that zero.'),
  n('NOR SR latch starts Q=0. Apply set (1,0), hold (0,0), reset (0,1), hold (0,0). Final Q?',0,'The sequence stores one, retains it, then stores zero and retains zero.'),
  c('For the hold pair S=R=0, can Q be determined without a previous-state value?',['No','Yes, it is always zero','Yes, it is always one'],'Hold preserves whichever valid state was already stored.')]),
 s('Avoid simultaneous controls',['forbidden','uncertain','nor'],['With S=R=1, both NOR outputs are forced to zero.','The outputs cease being complements, so this is not a valid stored-bit pair.','Releasing both controls from that condition does not guarantee which valid state is reached.'],[
  c('Active-high NOR SR latch, S=R=1 held until settled. Output pair Q,Qbar?',['0,0','1,1','1,0'],'Each NOR has an asserted external input, forcing its output low.'),
  c('Which pair is forbidden for normal active-high NOR SR latch storage?',['S=1,R=1','S=0,R=0','S=1,R=0'],'Simultaneous set and reset drives both nodes zero and violates the normal complementary relationship.'),
  c('After simultaneous release from S=R=1 to S=R=0, what final Q is guaranteed?',['Neither 0 nor 1 is guaranteed','Always 0','Always 1'],'Unequal gate timing and physical behavior can resolve the latch unpredictably.'),
  c('During a valid settled NOR SR latch state, Qbar is...',['The complement of Q','An independent stored bit','Always zero'],'The complementary output gives the opposite view of the same stored bit; the forbidden pair is excluded.')])
]));

adderDecoderLectures.set(...entry(66,'Active-low NAND SR latches','A cross-coupled NAND latch uses active-low set and reset controls. State the input polarities explicitly: the hold pair is one-one, and the forbidden pair is zero-zero.',[
 s('Interpret active-low controls',['NAND','active low','retain'],['Call the active-low inputs Sbar and Rbar.','Sbar=0,Rbar=1 sets Q to one; Sbar=1,Rbar=0 resets Q to zero.','Sbar=Rbar=1 holds the previous valid state.'],[
  m('Match active-low NAND SR latch input pairs (Sbar,Rbar) to actions.',[['0,1','Set Q to 1'],['1,0','Reset Q to 0'],['1,1','Hold previous Q']],'A zero asserts the corresponding control; both ones release the controls.'),
  n('NAND SR latch, active-low Sbar=0,Rbar=1 held until settled. Q?',1,'The low set input asserts set while reset is inactive.'),
  n('NAND SR latch, active-low Sbar=1,Rbar=0 held until settled. Q?',0,'The low reset input asserts reset while set is inactive.'),
  c('Active-low NAND SR latch: hold input pair?',['Sbar=1,Rbar=1','Sbar=0,Rbar=0','Sbar=0,Rbar=1'],'Hold requires both active-low controls to be deasserted.')]),
 s('Compare NOR and NAND conventions',['difference','NOR','NAND'],['Active-high NOR controls hold at zero-zero.','Active-low NAND controls hold at one-one.','The stored meaning of set and reset is unchanged: Q becomes one or zero respectively.'],[
  m('Match latch types to their hold pairs.',[['NOR latch with active-high S,R','S=0,R=0'],['NAND latch with active-low Sbar,Rbar','Sbar=1,Rbar=1']],'Changing gate type and control polarity changes the hold levels.'),
  n('NAND latch starts Q=1, active-low controls held at Sbar=Rbar=1. Next Q?',1,'Both controls are inactive, so feedback retains one.'),
  n('NAND latch starts Q=0; apply set (Sbar,Rbar)=(0,1), then hold (1,1). Final Q?',1,'The set step stores one, and hold preserves it.'),
  c('Does the phrase set mean Q=0 for an active-low set input?',['No, asserted set still stores Q=1','Yes, because the input is zero','Only for NOR gates'],'Active-low describes the asserting input level, not the stored value produced by set.')]),
 s('Identify the forbidden condition',['forbidden','uncertain','both'],['Sbar=Rbar=0 forces both NAND outputs high.','This pair violates normal complementary storage outputs.','Simultaneously releasing both controls to one-one does not guarantee the resulting stored bit.'],[
  c('Active-low NAND SR latch, Sbar=Rbar=0 held until settled. Q,Qbar?',['1,1','0,0','1,0'],'A zero on either NAND control forces that gate output to one.'),
  c('Forbidden input pair for an active-low NAND SR latch?',['Sbar=0,Rbar=0','Sbar=1,Rbar=1','Sbar=1,Rbar=0'],'Both controls are asserted at zero, forcing both outputs high.'),
  c('From forbidden zero-zero, both NAND controls are released together to one-one. Final bit?',['Not guaranteed','Always one','Always zero'],'The resolution depends on physical timing; simultaneous release is not a valid way to select a bit.'),
  c('Does a NAND latch store two independent bits because it has Q and Qbar?',['No, valid states store one bit','Yes','Only while holding'],'Under valid operation the outputs are complements, so only one independent bit is retained.')])
]));
