// Original exercises grounded in completed flip-flop and counter audio transcripts.
const n=(prompt,answer,explanation)=>({type:'number',prompt,answer,tolerance:1e-8,explanation});
const c=(prompt,options,explanation)=>({type:'choice',prompt,options,answer:0,explanation});
const m=(prompt,pairs,explanation)=>({type:'match',prompt,pairs,explanation});
const o=(prompt,items,explanation)=>({type:'order',prompt,items,explanation});
const table=(prompt,labels,rows,answer,explanation)=>({type:'truth',prompt,labels,rows,answer,explanation});
const rows2=[[0,0],[0,1],[1,0],[1,1]];
const rows3=Array.from({length:8},(_,i)=>[i>>2,(i>>1)&1,i&1]);
const s=(title,anchors,steps,questions)=>({title,anchors,steps,questions});
const e=(id,label,intro,stages)=>[id,{label,intro,stages}];
export const flipflopLectures=new Map([
e(67,'Latch timing and clock signals','Latch timing traces must include the stored state. A periodic clock provides high and low intervals separated by rising and falling edges; its frequency is the reciprocal of its period.',[
 s('Trace set, hold, and reset',['timing','retain','reset'],['Start from an explicit stored Q.','For an active-high NOR SR latch, 10 sets, 01 resets, and 00 holds.','Exclude forbidden 11 and allow each operation to settle before tracing the next.'],[
  o('NOR SR latch starts Q=0. Apply settled input pairs (S,R)=10,00,01. Order the resulting states.', ['After 10: Q=1','After 00: Q=1','After 01: Q=0'],'Set writes one, hold retains one, and reset writes zero.'),
  n('NOR SR latch starts Q=1. Settled input pairs (S,R)=00,01,00,10,00. Final Q?',1,'Hold one, reset zero, hold zero, set one, then hold one.'),
  c('Can Q be found from only S=R=0 without an initial state?',['No','Yes, always 0','Yes, always 1'],'The hold pair retains whichever valid state was stored previously.'),
  c('Active-high NOR latch changes Q to 1 after S=1,R=0. Next S=R=0. Does Q fall to 0?',['No, Q holds 1','Yes','It becomes forbidden'],'Removing the set control permits feedback to retain the stored one.')]),
 s('Read the clock waveform',['positive','negative','edge'],['A rising edge is a zero-to-one clock transition.','A falling edge is a one-to-zero transition.','High and low levels are intervals, while edges are transitions.'],[
  m('Match clock waveform features to their meanings.',[['Rising edge','Clock changes 0 to 1'],['Falling edge','Clock changes 1 to 0'],['High level','Clock remains 1'],['Low level','Clock remains 0']],'Edges describe changes; levels describe intervals between changes.'),
  n('Clock samples in order are 0,1,1,0,0,1. Number of rising transitions?',2,'Rises occur from sample one to two and from sample five to six.'),
  n('Clock samples in order are 0,1,1,0,0,1. Number of falling transitions?',1,'Only the transition from the third sample to the fourth is one-to-zero.'),
  c('Is a clock remaining high an additional rising edge?',['No','Yes, continuously','Only for a D element'],'A rising edge requires a transition from zero to one.')]),
 s('Convert period and frequency',['frequency','hertz','period'],['One period is one complete repeating clock cycle.','Frequency in hertz is cycles per second: f=1/T with T in seconds.','For T in nanoseconds, frequency in MHz is 1000/T.'],[
  n('A periodic clock has period 20 ns. Frequency in MHz?',50,'1000 divided by 20 gives fifty MHz.'),
  n('A clock runs at 25 MHz. Period in ns?',40,'1000 divided by 25 gives forty ns.'),
  n('A clock remains high for 6 ns and low for 4 ns each cycle. Period in ns?',10,'Add the two intervals: six plus four is ten ns.'),
  n('A clock period is 0.5 seconds. Frequency in Hz?',2,'Frequency is 1/0.5 = two cycles per second.')])]),
e(68,'SR storage and excitation','An SR storage element sets, resets, or holds a bit. Its characteristic table gives the next state from controls and current state; its excitation table solves the reverse problem of finding controls for a desired transition.',[
 s('Compute the SR next state',['characteristic','state','table'],['At a permitted update, SR=10 sets Q, 01 resets Q, and 00 holds.','SR=11 is forbidden for the normal active-high SR behavior.','For valid inputs, Qnext = S + R\u2032Q.'],[
  table('At a permitted SR update, fill Qnext for valid inputs only. S,R are active-high; 11 is excluded.', ['S','R','Q'],rows3.filter(([s,r])=>!(s&&r)),[0,1,0,0,1,1],'00 holds the shown Q; 01 resets to zero; 10 sets to one.'),
  n('At a permitted SR update, S=0,R=0,Q=1. Qnext?',1,'Hold leaves the stored one unchanged.'),
  n('At a permitted SR update, S=0,R=1,Q=1. Qnext?',0,'Reset overrides the previous stored state.'),
  c('Which equation gives the SR next state on valid input pairs?',['S + R\u2032Q','S XOR R','SRQ'],'Set contributes one, reset removes Q, and both zero preserve Q; forbidden 11 is excluded.')]),
 s('Respect the clock control',['clock','zero','one'],['For the specified positive-level gated SR model, controls act while clock is one.','While clock is zero, the state holds.','A gate implementation and an input convention must be stated explicitly.'],[
  n('Positive-level gated SR model, Q=1, clock=0, S=0,R=1. After settling, Q?',1,'The clock gate is closed, so the reset control does not reach the latch.'),
  n('Same positive-level model, Q=1, clock=1, S=0,R=1 held until settled. Q?',0,'The enabled reset control stores zero.'),
  c('For positive-level gating, S=1,R=0 acts during...',['The high clock interval','Only the low interval','Every falling edge exclusively'],'This is explicitly a level-sensitive model: its controls act while the clock is high.'),
  n('Three independent one-bit SR elements have how many possible binary state vectors?',8,'Three independent bits give 2^3 = eight states.')]),
 s('Choose controls for a desired transition',['excitation','present','next'],['To change 0 to 1, use S=1,R=0.','To change 1 to 0, use S=0,R=1.','For 0 to 0 or 1 to 1, hold is one valid choice; X in an excitation table means either bit value is allowed.'],[
  m('Active-high SR excitation: match desired Q transitions to allowed controls; X means either 0 or 1.',[['0 to 0','S=0,R=X'],['0 to 1','S=1,R=0'],['1 to 0','S=0,R=1'],['1 to 1','S=X,R=0']],'For an unchanged state, either hold or reassert the same stored value is valid.'),
  c('Valid SR inputs that change Q=0 to Qnext=1?',['S=1,R=0','S=0,R=1','S=0,R=0'],'Changing zero to one requires set.'),
  c('For an SR transition 1 to 1, why can S be X when R=0?',['Both hold and set keep Q at 1','Reset is mandatory','Forbidden 11 is allowed'],'With R=0, S=0 holds and S=1 sets; both yield one.'),
  c('Does X in an excitation table mean the stored bit is an unknown voltage?',['No, it means either control value can achieve the transition','Yes','It means both controls are forbidden'],'An excitation dont-care identifies freedom in choosing an input value.')])]),
e(69,'D storage elements','A D element stores its data input at the permitted update. Qnext=D gives a simple characteristic rule, and D equals the desired next state in its excitation table.',[
 s('Copy the data at an update',['data','next','table'],['At an allowed update, Qnext equals D.','The previous Q does not change the value captured from D.','Between allowed updates, the stored state holds according to the specified clock model.'],[
  table('At an allowed D update, fill Qnext for the shown D and previous Q.', ['D','Q'],rows2,[0,0,1,1],'Qnext equals D on every row, independently of previous Q.'),
  n('D=1,Q=0 just before a permitted update. Qnext?',1,'The element captures the supplied data one.'),
  n('D=0,Q=1 just before a permitted update. Qnext?',0,'The element captures zero rather than retaining the old one.'),
  c('Characteristic equation of a D element at an allowed update?',['Qnext=D','Qnext=D XOR Q','Qnext=Q always'],'D supplies exactly the next stored bit.')]),
 s('Derive D from SR controls',['SR','implementation','input'],['A D element can use SR controls S=D and R=D\u2032.','Those complementary controls never form the forbidden SR pair 11.','The clock convention of the underlying element still determines when capture is allowed.'],[
  m('Implement D behavior with active-high SR inputs. Match D to (S,R).', [['D=0','S=0,R=1'],['D=1','S=1,R=0']],'Zero resets and one sets; the two inputs are complements.'),
  n('D=1, with S=D and R=D\u2032. R?',0,'The complement of one is zero.'),
  c('Can S=D and R=D\u2032 simultaneously equal 1,1 for a stable binary D?',['No','Yes','Only for D=0'],'One signal is the complement of the other.'),
  c('Does wiring S=D,R=D\u2032 by itself change a level-sensitive element into an edge-triggered one?',['No','Yes','Only when Q starts at 0'],'The data behavior changes, while the clock behavior depends on the underlying storage circuit.')]),
 s('Find excitation and capture sequences',['excitation','timing','state'],['To produce any desired next state, set D to that value.','For rising-edge capture, use only data values at rising edges.','Assume D is stable around each stated edge and ignore propagation delay in ideal traces.'],[
  m('D excitation at a permitted update: match desired state transitions to the required D.',[['0 to 0','D=0'],['0 to 1','D=1'],['1 to 0','D=0'],['1 to 1','D=1']],'The required input equals the target state.'),
  n('Rising-edge D flip-flop, initial Q=0. D at three rising edges is 1,0,1, stable around each. Final Q?',1,'Each edge replaces Q with the sampled D; the last captured value is one.'),
  n('Rising-edge D flip-flop has Q=1. D changes to 0 without a clock edge. Q remains?',1,'Between rising edges the stored value holds.'),
  c('D data toggles several times between active edges. What determines the next captured Q?',['D stable around the next active edge','The count of data toggles','The first value after the previous edge'],'An edge-triggered element samples at the active edge under the stated stable-input assumption.')])]),
e(70,'Clock levels and active edges','Level-sensitive storage responds throughout the active clock interval. Edge-triggered storage updates only at its specified transition, even if data changes between transitions.',[
 s('Classify four clock responses',['positive','negative','triggered'],['Positive-level means enabled while clock is one.','Negative-level means enabled while clock is zero.','Positive edge is 0 to 1; negative edge is 1 to 0.'],[
  m('Match storage clock behavior to its active condition.',[['Positive level','Clock is 1'],['Negative level','Clock is 0'],['Positive edge','Clock changes 0 to 1'],['Negative edge','Clock changes 1 to 0']],'An interval and an edge are distinct update conditions.'),
  c('Negative-edge D flip-flop updates on...',['Clock 1 to 0','Clock 0 to 1','Any interval with clock 0'],'The negative edge is a falling transition.'),
  c('Positive-level D latch with clock held high responds to a stable D change?',['Yes, after settling','No, only at the next rising edge','Only if D changes to zero'],'A transparent high-level interval allows the latch to follow D.'),
  c('Negative-level D latch holds its state while clock is...',['1','0','Changing D only'],'The low level is transparent; the high level closes the latch.')]),
 s('Sample at the right edge',['rising','falling','output'],['List only the active edges for the specified element.','Read D at each of those edges.','Keep Q unchanged at inactive edges and between active edges.'],[
  o('Rising-edge D flip-flop starts Q=0; stable D at successive rising edges is 1,0,1. Order the captured states.', ['After rising edge 1: Q=1','After rising edge 2: Q=0','After rising edge 3: Q=1'],'Only the rising-edge samples update the stored value.'),
  n('Falling-edge D flip-flop, Q=0. D=1 at a rising clock edge; no falling edge yet. Q?',0,'The rising edge is inactive for this element, so zero is retained.'),
  n('Falling-edge D flip-flop, Q=0. D=1 stable around a falling clock edge. New Q?',1,'The active falling edge captures one.'),
  c('Can an edge-triggered D output follow every D change during the high interval?',['No','Yes','Only if its active edge is rising'],'Between active edges it retains the sampled bit.')]),
 s('Distinguish transparency from sampling',['level','cycle','change'],['Data may change at any time; triggering describes when the storage element responds.','A level-sensitive element may change multiple times in its active interval.','An ideal single-edge element gets one capture opportunity per full clock cycle.'],[
  n('Ideal rising-edge flip-flop: five full cycles, one rising edge per cycle. Capture opportunities?',5,'Each cycle contributes one active rising edge.'),
  c('During one high interval, D changes 0 to 1 then 1 to 0 with ample settling time. Positive-level D latch can...',['Follow both changes','Capture only the first change always','Never change'],'The latch is transparent throughout the high interval.'),
  c('Does an active edge necessarily change Q?',['No, captured data may equal the old Q','Yes, always','Only a falling edge does'],'An update opportunity may capture the same value already stored.'),
  c('What should be checked before interpreting a storage timing trace?',['Active level or edge, initial Q, and input values','Only the number of output pins','Only clock frequency'],'These conditions define when updates happen and what values they produce.')])]),
e(71,'JK flip-flops','At a permitted update, JK=00 holds, 01 resets, 10 sets, and 11 toggles. Its next-state equation is JQ\u2032 + K\u2032Q, and its excitation table offers input freedom for each desired transition.',[
 s('Use all four JK operations',['toggle','one one','JK'],['00 holds the current bit.','01 resets and 10 sets.','11 complements the current bit rather than being forbidden as in SR behavior.'],[
  m('JK operations at a permitted update: match (J,K) pairs to actions.',[['00','Hold Q'],['01','Reset Q to 0'],['10','Set Q to 1'],['11','Toggle Q']],'The simultaneous-one pair gives the additional toggle operation.'),
  n('Rising-edge JK flip-flop, J=K=1 and Q=0 before its active edge. Qnext?',1,'Toggle complements zero to one.'),
  n('Rising-edge JK flip-flop, J=K=1 and Q=1 before its active edge. Qnext?',0,'Toggle complements one to zero.'),
  c('The behavior distinguishing JK=11 from active-high SR=11 is...',['JK toggles; SR forbids the pair','Both reset','Both are forbidden'],'JK gives simultaneous asserted inputs a defined toggle operation.')]),
 s('Evaluate the JK state equation',['equation','truth','k bar'],['Qnext = JQ\u2032 + K\u2032Q.','When Q=0, Qnext is J.','When Q=1, Qnext is K\u2032.'],[
  table('At one permitted JK update, fill Qnext=JQ\u2032+K\u2032Q.', ['J','K','Q'],rows3,[0,1,0,0,1,1,1,0],'Evaluate hold, reset, set, and toggle for each shown current state.'),
  n('At a permitted JK update, Q=0,J=1,K=0. Qnext?',1,'With current Q zero the equation reduces to J.'),
  n('At a permitted JK update, Q=1,J=0,K=0. Qnext?',1,'With current Q one the equation reduces to K\u2032, which is one.'),
  c('For Q=0, does K affect the next state in the JK characteristic rule?',['No','Yes, always','Only if J=1'],'The K\u2032Q term vanishes when Q is zero.')]),
 s('Find JK excitation controls',['excitation','present','next'],['For current Q=0, choose J to equal the target Qnext; K is a dont-care.','For current Q=1, choose K to equal the complement of target Qnext; J is a dont-care.','X means either value can achieve the desired transition.'],[
  m('JK excitation: match transitions to allowed inputs; X means either bit value.',[['0 to 0','J=0,K=X'],['0 to 1','J=1,K=X'],['1 to 0','J=X,K=1'],['1 to 1','J=X,K=0']],'The relevant control depends on the current stored state.'),
  c('To change Q=1 to Qnext=0 in JK behavior, which input must be 1?',['K','J','Neither control'],'K=1 allows either reset or toggle; both give zero from current one.'),
  c('To change Q=0 to Qnext=1, why may K be X?',['Both set and toggle produce 1 from 0','K never matters in any state','The next state is unspecified'],'With J=1, K=0 sets and K=1 toggles; both reach one from zero.'),
  n('Rising-edge JK with Q=0 initially: active-edge input pairs 11,00,11. Final Q?',0,'Toggle to one, hold one, then toggle to zero.')])]),
e(72,'T flip-flops','At a permitted update, T=0 holds and T=1 toggles. The rule Qnext=T XOR Q makes T a compact way to control state changes.',[
 s('Hold or toggle a stored bit',['toggle','unchanged','T'],['T=0 keeps the current Q.','T=1 complements Q.','Specify the active clock event before counting toggles.'],[
  table('At one permitted T update, fill Qnext=T XOR Q.', ['T','Q'],rows2,[0,1,1,0],'XOR with zero holds; XOR with one complements.'),
  n('At a rising-edge T update, T=1,Q=1. Qnext?',0,'Toggle complements the stored one.'),
  n('At a rising-edge T update, T=0,Q=1. Qnext?',1,'The hold control retains one.'),
  c('Characteristic equation of a T element at an allowed update?',['Qnext=T XOR Q','Qnext=T','Qnext=TQ'],'XOR encodes the hold-or-toggle behavior.')]),
 s('Choose T and implement it with JK',['excitation','JK','same'],['T equals Q XOR Qnext for a desired transition.','An unchanged bit needs T=0; a changing bit needs T=1.','Connecting J=K=T gives JK hold or toggle behavior.'],[
  m('T excitation: match transitions to the required input.',[['0 to 0','T=0'],['0 to 1','T=1'],['1 to 0','T=1'],['1 to 1','T=0']],'The input marks whether the current and next state differ.'),
  c('How can a JK flip-flop supply T behavior?',['Connect both J and K to T','Connect J to T and K to 0','Connect J to 0 and K to T'],'Equal zero inputs hold; equal one inputs toggle.'),
  n('A desired transition from Q=1 to Qnext=0 requires what T?',1,'The state must change, so assert toggle.'),
  n('A desired transition from Q=0 to Qnext=0 requires what T?',0,'The state must hold, so deassert toggle.')]),
 s('Trace toggles and unknown controls',['positive edge','unknown','timing'],['Use the T value at each specified active edge.','An even number of toggles restores the initial bit; an odd number complements it.','If a control is unknown, evaluate all allowed cases before claiming a definite state.'],[
  n('Rising-edge T flip-flop, Q=0 initially. T at active edges: 1,0,1,1. Final Q?',1,'There are three toggles, so the final bit is the complement of the initial zero.'),
  n('T held at 1 for six rising edges, initial Q=1. Final Q?',1,'Six toggles is even and restores the initial state.'),
  c('JK element at a permitted update: J=0,K unknown,Q=0. Next Q?',['Definitely 0','Definitely 1','Necessarily unknown'],'K=0 holds zero; K=1 resets to zero, so both possibilities give zero.'),
  c('JK element at a permitted update: J=0,K unknown,Q=1. Next Q?',['May be 0 or 1','Definitely 0','Definitely 1'],'K=0 holds one, while K=1 resets zero; the result depends on K.')])]),
e(73,'Storage terminology and clock response','Analyze storage from its actual controls and timing behavior. Level sensitivity and edge sensitivity describe how a storage element responds to the clock; different elements can share the same clock waveform.',[
 s('Read the actual circuit behavior',['latch','NAND','clock'],['Cross-coupled NAND storage with no clock input is an unclocked active-low SR latch.','Level-sensitive gated storage responds throughout its enabled interval.','Edge-triggered storage samples at a clock transition.'],[
  m('Match explicit storage descriptions to their behavior.',[['Cross-coupled NAND pair with active-low set/reset and no clock pin','Unclocked SR latch'],['D storage follows D while enable is 1','Positive-level D latch'],['D storage captures only at 0-to-1 clock transitions','Rising-edge D flip-flop']],'The controls and response define the model to use.'),
  c('A cross-coupled NAND pair has only active-low set/reset inputs. Does it inherently wait for a clock edge?',['No','Yes','Only for hold'],'There is no clock input in the stated circuit.'),
  c('When a storage name is ambiguous, what gives the clearest timing model?',['Its circuit and explicitly stated update condition','Its name alone','Its stored initial bit alone'],'The actual inputs and response conditions settle whether it is level-sensitive or edge-triggered.'),
  c('An unclocked latch responds while its control input is asserted. Must a clock edge be present?',['No','Yes','Only to store zero'],'Its control level acts directly; a clock is not required in that model.')]),
 s('Share one clock across different elements',['same clock','property','triggered'],['The clock waveform contains both levels and both edge types.','Each storage element selects its own active condition.','A rising-edge element and a falling-edge element can use the same clock signal.'],[
  m('One clock drives three D elements. Match each response type to its update condition.',[['Positive-level D latch','Throughout the high interval'],['Rising-edge D flip-flop','At each 0-to-1 transition'],['Falling-edge D flip-flop','At each 1-to-0 transition']],'The storage response differs even though the incoming clock waveform is shared.'),
  c('Which has rising-edge sensitivity?',['The storage element responding to a clock edge','The clock wire itself','The data bit independently of storage'],'The waveform supplies the edge; the element has the sensitivity to it.'),
  n('One full clock cycle has one rising and one falling edge. Rising-edge and falling-edge elements share it: capture opportunities per element?',1,'Each element responds once, on its own active edge.'),
  c('Must different active-edge types be supplied with different clock frequencies?',['No','Yes','Only if both store one'],'They can share a waveform and respond to opposite transitions.')]),
 s('Use precise timing descriptions',['level','edge','input'],['Say which element is sensitive to which level or edge.','Specify whether data can pass during an entire interval or only at a transition.','A state change away from every active edge contradicts an ideal edge-triggered model with no asynchronous controls.'],[
  c('Correct description of a falling-edge D element?',['It captures D at falling clock edges','The clock is falling-edge-triggered','It captures D continuously whenever clock is low'],'Edge sensitivity belongs to the storage element, and capture occurs at transitions.'),
  c('An ideal rising-edge D element without asynchronous controls changes Q midway through a high interval. Is that trace consistent?',['No','Yes','Only if D is one'],'There was no active rising edge at the change time.'),
  c('A positive-level D latch changes Q midway through a high interval after D changes. Is that allowed?',['Yes, after settling','No','Only at a falling edge'],'The high interval is transparent, so the latch may follow D.'),
  c('For an unknown initial Q and no active edge yet, is an edge-triggered D output fixed by the present D alone?',['No','Yes','Only if D is zero'],'The old stored state holds until a permitted capture event.')])]),
e(74,'Convert flip-flop behavior','Conversion adds combinational input logic around an available storage element. Derive that logic from the desired next-state rule and the excitation requirements of the available element.',[
 s('Follow the conversion method',['conversion','excitation','present'],['Write the target behavior as a function of target inputs and current Q.','Use the excitation requirements of the available element to choose its inputs.','Verify the resulting next state for every target-input and current-state combination.'],[
  o('Order the steps for converting an available flip-flop into target behavior.', ['Write the target next-state table','Use the available flip-flop excitation table','Derive and simplify the input logic','Verify every target input and current state'],'The target table defines what is required; the available excitation table defines how to achieve it.'),
  c('When converting available D storage to T behavior, whose excitation rule chooses the physical D input?',['The available D element','The target T element only','Neither element'],'The available device needs D equal to the required next state.'),
  c('Why may current Q feed the conversion logic?',['The desired next state may depend on current Q','It changes the clock frequency automatically','It removes all storage'],'Toggle and hold operations require knowledge of the current bit.'),
  c('Does changing data-input logic alone necessarily change the active clock edge?',['No','Yes','Only for T behavior'],'The available storage element still determines the clock response.')]),
 s('Convert between D and T',['D','T','xor'],['For available D storage implementing T behavior, drive D=T XOR Q.','For available T storage implementing D behavior, drive T=D XOR Q.','The XOR is a function of the external target input and the current stored bit.'],[
  table('Available D element implements T behavior. Fill physical D=T XOR Q for target T and current Q.', ['T','Q'],rows2,[0,1,1,0],'Physical D must equal the desired next state: hold for T=0 and complement for T=1.'),
  table('Available T element implements D behavior. Fill physical T=D XOR Q for target D and current Q.', ['D','Q'],rows2,[0,1,1,0],'Assert toggle exactly when the current Q differs from the desired D.'),
  n('Available T element implements D behavior. External D=1,current Q=1. Physical T?',0,'The desired value already matches Q, so hold by T=0.'),
  c('Available D element implements T behavior. Correct input equation?',['Dphysical=Ttarget XOR Q','Dphysical=Ttarget','Dphysical=Q always'],'The D input supplies the required hold-or-toggle next state.')]),
 s('Implement JK with available D storage',['JK','multiplexer','equation'],['For target JK behavior, drive D=JQ\u2032+K\u2032Q.','The expression is a 2-to-1 mux with selector Q.','Its data inputs are I0=J and I1=K\u2032.'],[
  m('Available D element implements target JK behavior using a mux. Match connections.',[['Mux selector','Current Q'],['Mux input I0','J'],['Mux input I1','K complement'],['Mux output','Physical D input']],'For Q=0 the next state is J; for Q=1 it is K complement.'),
  n('Target JK inputs J=1,K=1,current Q=1. Required physical D?',0,'Toggle requires next zero, so drive the D input zero.'),
  n('Target JK inputs J=0,K=0,current Q=1. Required physical D?',1,'Hold requires next one, so drive the D input one.'),
  c('To verify a D-to-JK conversion, how many (J,K,Q) binary rows must be checked?',['8','4','2'],'There are three independent binary inputs, giving eight combinations.')])]),
e(75,'PN storage behavior and conversion','A PN element has the explicit operations 00 clear, 01 hold, 10 complement, and 11 set. Its characteristic equation is Qnext=PQ\u2032+NQ.',[
 s('Decode the four PN operations',['PN','clear','compliment'],['PN=00 clears Q to zero; 01 holds Q.','PN=10 complements Q; 11 sets Q to one.','The input order is P then N throughout these examples.'],[
  m('PN element: match (P,N) input pairs to the defined operations.',[['00','Clear Q to 0'],['01','Hold Q'],['10','Complement Q'],['11','Set Q to 1']],'This custom encoding defines all four actions, including toggle on 10.'),
  n('PN element at a permitted update, P=1,N=0,current Q=1. Qnext?',0,'PN=10 complements the stored bit.'),
  n('PN element at a permitted update, P=0,N=1,current Q=1. Qnext?',1,'PN=01 is the hold operation.'),
  c('How does PN=00 behave?',['Clear to zero','Hold','Toggle'],'The explicitly defined PN operation for 00 is clear.')]),
 s('Derive the PN state equation',['characteristic','equation','next'],['For current Q=0, Qnext=P.','For current Q=1, Qnext=N.','Combining these cases gives Qnext=PQ\u2032+NQ.'],[
  table('Defined PN behavior: 00 clear, 01 hold, 10 complement, 11 set. Fill Qnext for each (P,N,Q).', ['P','N','Q'],rows3,[0,0,0,1,1,0,1,1],'When current Q is zero select P; when current Q is one select N.'),
  c('Correct characteristic equation for this PN element?',['PQ\u2032 + NQ','PQ + NQ\u2032','P XOR N'],'The Q=0 branch supplies P, and the Q=1 branch supplies N.'),
  n('P=0,N=1,Q=0. Evaluate PQ\u2032+NQ.',0,'The first term is zero because P=0; the second is zero because Q=0.'),
  n('P=1,N=0,Q=0. Evaluate PQ\u2032+NQ.',1,'The P branch is selected by Q=0, yielding one.')]),
 s('Find PN excitation and D conversion',['excitation','D','same'],['For Q=0, choose P equal to the target next state; N is a dont-care.','For Q=1, choose N equal to the target next state; P is a dont-care.','To implement D behavior for both current states, connect P=N=D.'],[
  m('PN excitation: match state transitions to inputs; X means either binary value.',[['0 to 0','P=0,N=X'],['0 to 1','P=1,N=X'],['1 to 0','P=X,N=0'],['1 to 1','P=X,N=1']],'The current state selects which of P or N controls the next state.'),
  c('Available PN element implements D behavior. Correct connections?',['P=D and N=D','P=D and N=D complement','P=0 and N=D'],'Substituting P=N=D gives D(Q\u2032+Q)=D.'),
  n('PN-to-D conversion P=N=D, external D=0,current Q=1. Qnext?',0,'Inputs 00 clear the state, producing the requested D value zero.'),
  n('PN-to-D conversion P=N=D, external D=1,current Q=0. Qnext?',1,'Inputs 11 set the state, producing the requested D value one.')])])
]);

for(const definition of [
e(76,'Convert between SR and T behavior','A conversion must reproduce the target next state using the available device. Current-state feedback lets an SR element toggle or lets a T element set, reset, and hold.',[
 s('Make SR storage toggle',['SR','T','excitation'],['For target T=0, drive an available active-high SR element to hold.','For target T=1, set if Q=0 and reset if Q=1.','One valid implementation is S=TQ\u2032 and R=TQ.'],[
  m('Available active-high SR storage implements T behavior. Match (T,Q) to physical (S,R).',[['0,0','0,0: hold zero'],['0,1','0,0: hold one'],['1,0','1,0: set'],['1,1','0,1: reset']],'T selects hold or change, while current Q chooses set versus reset.'),
  n('SR-to-T conversion S=TQ\u2032,R=TQ; target T=1,current Q=0. Physical S?',1,'T times complement of Q is 1 times 1, giving one.'),
  n('Same conversion, target T=1,current Q=1. Physical R?',1,'TQ equals one, resetting the stored one.'),
  c('Can S=TQ\u2032 and R=TQ both be 1 for stable binary T,Q?',['No','Yes','Only if T=1'],'Q and Q complement cannot both be one, preventing simultaneous set and reset.')]),
 s('Make T storage act like SR',['T','SR','never occurs'],['For valid SR inputs, choose physical T=S Q\u2032 + RQ.','The T input asserts exactly when the target SR behavior must change Q.','SR=11 is excluded from the target domain; it is not a permitted storage operation.'],[
  table('Available T storage implements valid active-high SR behavior. Fill physical T=S Q\u2032+RQ; SR=11 is excluded.', ['S','R','Q'],rows3.filter(([s,r])=>!(s&&r)),[0,0,0,1,1,0],'Hold requires no toggle, reset toggles only a stored one, and set toggles only a stored zero.'),
  n('T-to-SR conversion, target S=1,R=0,current Q=1. Physical T?',0,'The state is already one, so the set operation requires no toggle.'),
  n('T-to-SR conversion, target S=0,R=1,current Q=1. Physical T?',1,'To reset a stored one, the T element must toggle.'),
  c('Why may SR=11 rows be dont-cares when simplifying this conversion?',['The target forbids those input rows','They always hold','They are required toggle operations'],'Dont-cares here represent excluded inputs, not usable SR operations.')]),
 s('Implement the state-dependent choice',['multiplexer','Q bar','S'],['T=S Q\u2032+RQ is a mux expression.','With selector Q, connect I0=S and I1=R.','Verify both current states for every valid SR input.'],[
  m('Mux for physical T=S Q\u2032+RQ: match the connections.',[['Selector','Current Q'],['Data input I0','Target S'],['Data input I1','Target R'],['Mux output','Physical T input']],'Q selects which target control would change the stored state.'),
  n('Mux selector Q=0, target S=0,R=1. Physical T?',0,'For current zero, select S=0; a reset should retain zero.'),
  n('Mux selector Q=1, target S=1,R=0. Physical T?',0,'For current one, select R=0; a set should retain one.'),
  c('What is the decisive conversion check?',['The produced next state equals the target next state on every valid row','The circuit has the fewest wires only','The two device names are similar'],'Truth-table equivalence verifies behavior, including hold and change cases.')])]),
e(77,'Asynchronous preset and clear','Direct preset and clear inputs can force a stored state without a clock edge. Their polarity and forbidden simultaneous-assertion condition must be stated separately from the normal clocked behavior.',[
 s('Decode active-low direct controls',['preset','clear','active low'],['For active-low PREbar and CLRbar, a zero asserts the control.','PREbar=0,CLRbar=1 forces Q=1; PREbar=1,CLRbar=0 forces Q=0.','Both one releases direct controls; both zero is forbidden in the model here.'],[
  m('Active-low PREbar,CLRbar: match input pairs to behavior.',[['0,1','Preset Q to 1'],['1,0','Clear Q to 0'],['1,1','Release direct controls for normal clocked operation'],['0,0','Forbidden simultaneous assertion']],'Control assertion levels are zero, while the forced state is set or cleared as indicated.'),
  n('Active-low PREbar=0,CLRbar=1, no active clock edge. Forced Q?',1,'Preset acts asynchronously and forces one.'),
  n('Active-low PREbar=1,CLRbar=0, no active clock edge. Forced Q?',0,'Clear acts asynchronously and forces zero.'),
  c('Does PREbar=CLRbar=1 force Q to 1?',['No, it releases both direct controls','Yes','Only if clock is high'],'Both active-low controls are inactive; the normal clocked behavior applies.')]),
 s('Apply direct-input priority',['asynchronous','clock','input'],['An asserted direct input overrides the normal data/clock update in this model.','Asynchronous means its action does not wait for the clock edge.','When both direct controls are inactive, use the normal storage rule and trigger condition.'],[
  n('Rising-edge D flip-flop: D=1, active-low CLRbar=0,PREbar=1 during a rising edge. Q?',0,'The asserted asynchronous clear overrides the attempted data capture.'),
  n('Rising-edge JK flip-flop: J=0,K=1,PREbar=0,CLRbar=1 during the edge. Q?',1,'Asynchronous preset overrides the normal JK reset action.'),
  c('With both active-low direct controls inactive, can ordinary J/K inputs change an edge-triggered Q between clock edges?',['No','Yes','Only if J=1'],'Normal JK updates still require the active clock edge.'),
  c('Why is direct clear called asynchronous?',['It can force Q without waiting for a clock edge','It always toggles Q','It doubles the clock frequency'],'Its assertion directly controls the stored state independently of the clock event.')]),
 s('Initialize and then resume normal operation',['initial','counter','normal'],['Use direct controls to establish a known initial bit or state vector.','Release those controls before normal clocked operation.','Do not assert preset and clear together; no priority is assumed for that forbidden pair.'],[
  o('Initialize three flip-flops to binary 000 using active-low clears.', ['Keep active-low preset inputs inactive at 1','Assert all active-low clear inputs at 0','Wait for the outputs to settle to 000','Release clear inputs to 1 before normal clocked operation'],'Asynchronous clear initializes the state; releasing it permits later normal updates.'),
  n('Three independent flip-flops all receive asserted active-low clear, presets inactive. Decimal value of stored vector?',0,'Each bit is cleared to zero, giving 000.'),
  c('Active-low preset and clear are both zero. Which state is guaranteed by the normal control model?',['No valid state is guaranteed; the pair is forbidden','Always zero','Always one'],'The model forbids simultaneous assertion and does not assign a preset-versus-clear priority.'),
  n('A rising-edge T flip-flop is preset to Q=1, then direct controls are released. T=1 at the next rising edge. New Q?',0,'After release, the normal active-edge toggle complements one to zero.')])]),
e(78,'Practice clocked and asynchronous updates','A timing problem combines update opportunities, storage rules, and direct controls. Data must also remain stable around an active edge for a specified capture to be reliable.',[
 s('Trace JK with direct overrides',['preset','clear','positive edge'],['Check direct preset or clear before applying the normal edge rule.','If neither is asserted, use JK only at the active clock edge.','Carry the resulting stored bit forward to the next event.'],[
  o('Rising-edge JK starts Q=0; active-low direct controls normally inactive. Order this event trace.', ['Rising edge with J=K=1: Q=1','Assert CLRbar=0 with PREbar=1 between edges: Q=0','Release clear with no active edge: Q remains 0','Rising edge with J=1,K=0: Q=1'],'Toggle, asynchronous clear, release-and-hold, and set act in that sequence.'),
  n('Rising-edge JK starts Q=0, direct controls inactive. Edge pairs (J,K)=00,11,01. Final Q?',0,'Hold zero, toggle to one, then reset to zero.'),
  n('Rising-edge JK has Q=0. Active-low PREbar=0,CLRbar=1 is asserted between edges. Q after settling?',1,'Asynchronous preset forces one without waiting for a clock edge.'),
  c('PREbar=CLRbar=1 in an active-low-control JK element means...',['Normal JK and clock inputs may control updates','Q is immediately cleared','Q is immediately preset'],'Both direct controls are deasserted.')]),
 s('Allow setup time before capture',['setup','set up','before'],['Setup time requires data stability before the active edge.','Subtract the stated setup time from the active-edge time to find the start of the required pre-edge stable interval.','A data transition inside that required interval does not justify a guaranteed captured value.'],[
  m('Match setup timing quantities to their meanings.',[['Active-edge time','Time the storage element samples its input'],['Setup time','Required stable-data duration before that edge'],['Stable interval start','Active-edge time minus setup time']],'The pre-edge stability requirement is measured backward from the capture edge.'),
  n('Active edge at 20 ns, setup time 3 ns. Latest start of the required stable-data interval, in ns?',17,'Subtract setup from edge time: 20 - 3 = 17 ns.'),
  n('Active edge at 50 ns, setup time 4 ns. Latest start of the required stable-data interval, in ns?',46,'Subtract four from fifty to get forty-six ns.'),
  c('D changes exactly at an active edge with a nonzero setup requirement. Is captured Q guaranteed by the ideal D sample rule?',['No','Yes, always the new D','Yes, always the old D'],'Data did not remain stable for the required duration before the edge.')]),
 s('Identify operations from controls',['JK','D','next'],['JK=10 sets, 01 resets, 00 holds, and 11 toggles at a permitted update.','A D element captures its data at the specified active condition.','Keep an operation code separate from its resulting state.'],[
  m('At a permitted JK update, match input pairs to operations.',[['10','Set'],['01','Reset'],['00','Hold'],['11','Toggle']],'The current state is needed to find the result of hold or toggle.'),
  n('Rising-edge JK, J=1,K=0 and current Q=0, direct controls inactive. Q after next rising edge?',1,'The set pair stores one at the active edge.'),
  n('Rising-edge JK, J=1,K=0 and current Q=1, direct controls inactive. Q after next rising edge?',1,'Set stores one even if it was already one.'),
  c('Which characteristic rule copies the data input into the next state at an allowed update?',['D behavior: Qnext=D','T behavior: Qnext=T XOR Q','JK behavior: Qnext=JQ\u2032+K\u2032Q'],'The D rule directly uses the input as the desired next state.')])])
]) flipflopLectures.set(...definition);

for(const definition of [
e(86,'Cascade counters and division ratios','When a completed cycle of one counter advances the next, their division ratios multiply. Use one cycle pulse per full first-counter cycle, rather than assuming every output pin has that rate.',[
 s('Multiply the moduli',['cascading','mod','divide'],['A modulo-M stage repeats after M input events.','Its one-per-cycle pulse advances a modulo-N stage.','The combined cycle repeats after MN original input events.'],[
  m('Cascade modulo-4 then modulo-5 counters, using one full-cycle pulse to advance the next stage. Match quantities.',[['First-stage cycle length','4 input events'],['Second-stage cycle length','5 first-stage cycle pulses'],['Combined cycle length','20 original input events']],'The second stage completes its cycle after five cycles of four input events each.'),
  n('Modulo-6 and modulo-10 counters cascaded by one-per-cycle pulses. Combined modulus?',60,'Multiply six by ten to get sixty.'),
  n('Two decade counters cascaded by cycle pulses. Combined modulus?',100,'Ten first-stage cycles per second-stage cycle gives one hundred original events.'),
  c('Which signal convention makes modulus multiplication valid for a custom cycle?',['One advancing pulse per completed upstream cycle','Any arbitrary upstream output transition','A constant high signal'],'The next counter must advance once for each upstream full cycle.')]),
 s('Compute output frequencies',['frequency','f by','clock'],['A one-per-cycle pulse from modulo-M has frequency fin/M.','The final cycle-pulse frequency after M then N is fin/(MN).','Count-event rate and full-cycle rate are separate quantities.'],[
  n('Input 1200 Hz, modulo-6 then modulo-10 cycle-pulse cascade. Final pulse frequency in Hz?',20,'1200 divided by sixty gives twenty Hz.'),
  n('Input 1200 Hz enters a modulo-6 stage. Its one-per-cycle output pulse frequency in Hz?',200,'1200 divided by six gives two hundred Hz.'),
  n('Input 1000 Hz, two cascaded decade counters. Final full-cycle frequency in Hz?',10,'1000 divided by one hundred gives ten Hz.'),
  n('Cascade total division ratio 40, final cycle-pulse rate 5 Hz. Input event frequency in Hz?',200,'Multiply output rate by the division ratio: five times forty.')]),
 s('Build a slow timebase',['60','minute','second'],['A modulo-60 stage can turn a one-Hz event stream into one event per minute.','Another modulo-60 stage turns minute events into hour events.','The two stages together divide the original event rate by 3600.'],[
  o('Order a one-Hz event timebase cascade.', ['One event each second enters the first modulo-60 counter','One first-counter cycle pulse each minute advances the second modulo-60 counter','One second-counter cycle pulse occurs each hour'],'Each slower event marks a completed cycle of the preceding counter.'),
  n('Two modulo-60 stages: combined division ratio?',3600,'Sixty times sixty equals three thousand six hundred.'),
  n('At one input event per second, a modulo-60 cycle lasts how many seconds?',60,'The counter needs sixty events to complete its cycle.'),
  n('A modulo-60 counter advances once per minute. Its full cycle lasts how many minutes?',60,'Sixty minute events form one full cycle.')])]),
e(87,'Count through a selected range','A custom up counter can reload a chosen starting pattern at the first unwanted count. Distinguish states held for a count interval from the terminal pattern that triggers the reload.',[
 s('Define the stable range',['three','five','six'],['State the intended inclusive stable range A through B.','Its stable-cycle length is B-A+1.','For the example 3,4,5, detect 6 and reload 3 immediately after it appears.'],[
  o('Custom up counter holds decimal 3,4,5, then reloads 3 on reaching 6. Order a cycle starting at 3.', ['Stable 3: binary 011','Stable 4: binary 100','Stable 5: binary 101','Detect 6 and immediately reload stable 3'],'Six is the reload-triggering transient, not a full stable count interval.'),
  n('Stable inclusive range 3 through 5. Modulus?',3,'There are three stable values: three, four, five.'),
  n('Stable inclusive up-count range 3 through 6, immediate reload after the last stable count. First unwanted value?',7,'Six must receive its full count interval; reload is triggered at seven.'),
  c('If a counter reloads immediately on reaching 6, is 6 part of the stable range?',['No','Yes','Only if the reload value is 3'],'It is a transient detection value rather than a state held for a normal interval.')]),
 s('Reload the starting bit pattern',['preset','clear','110'],['To load 011, clear Q2 and preset Q1 and Q0.','Use the explicitly stated direct-input polarity.','For active-low controls, drive the required clear/preset inputs low while leaving their opposites inactive high.'],[
  m('Reload Q2Q1Q0=011 using direct controls. Match each bit to its required action.',[['Q2','Clear to 0'],['Q1','Preset to 1'],['Q0','Preset to 1']],'Each desired zero uses clear, while each desired one uses preset.'),
  c('Active-low controls reload 011. Which Q2 control is asserted?',['CLR2bar=0','PRE2bar=0','Both controls at 0'],'Q2 must be cleared; its preset remains inactive.'),
  n('Reload 011, then take one normal settled binary up-count event. Decimal result?',4,'Three increments to four.'),
  c('Can both preset and clear of one bit be asserted during a valid reload?',['No','Yes','Only for Q2'],'The simultaneous direct-control combination is forbidden; choose the control matching the target bit.')]),
 s('Decode and initialize deliberately',['NAND','initial','unwanted'],['The exact detector for 110 uses Q2Q1Q0 complement.','A NAND of that product supplies an active-low reload trigger.','Apply explicit initialization so the first stable value is known.'],[
  c('Exact active-low reload trigger for Q2Q1Q0=110?',['(Q2 Q1 Q0\u2032)\u2032','(Q2 Q1 Q0)\u2032','Q2 Q1 Q0\u2032'],'The NAND output asserts low when the three literals identify 110.'),
  n('A counter should start at 011. Is its desired decimal initial value?',3,'The initial binary pattern encodes three.'),
  c('Does a reload detector alone prove the counter powers up at the intended starting value?',['No, initialization must be specified','Yes','Only if the cycle has three states'],'A known initial state requires an initialization action rather than a power-up assumption.'),
  n('Inclusive stable range 4 through 9. Distinct stable values?',6,'Count four, five, six, seven, eight, nine: six values.')])]),
e(88,'Realize a modulo-six ripple counter','Edge-triggered D elements become toggle stages with D=Q complement. A three-bit up ripple chain can be truncated to six stable states by detecting 110 and asserting clear.',[
 s('Configure D toggle stages',['D','negative','connection'],['Connect each D to its own Q complement.','For falling-edge up-counting stages, direct Q clocks the next stage.','Specify Q2Q1Q0 with Q2 the most significant bit.'],[
  m('Falling-edge D ripple up chain: match connections to their roles.',[['D input of each stage','Its own Q complement'],['Clock of stage Q1','Direct Q0'],['Clock of stage Q2','Direct Q1']],'Complement feedback makes each D stage toggle; direct preceding Q supplies falling carry edges.'),
  n('D=Q complement and Q=1 before the active edge. Next Q?',0,'The input is zero, so the edge captures zero.'),
  c('For falling-edge up counting, should the next stage clock use preceding Q or Q complement?',['Q directly','Q complement','Either without changing behavior'],'The falling carry transition of direct Q produces the required toggle.'),
  n('Three independent D toggle stages can represent how many binary patterns?',8,'Three bits give eight representable states before truncation.')]),
 s('Exclude the reset-triggering pattern',['six','unwanted','reset'],['The stable sequence is 000 through 101.','Pattern 110 triggers reset rather than remaining for a count interval.','The reset returns all three stored bits to zero.'],[
  o('Modulo-six up counter: start at stable 4 and order the next actions.', ['Stable 4: 100','Next count reaches stable 5: 101','Next count reaches transient 6: 110','Clear returns the counter to stable 0: 000'],'The trigger occurs after the last wanted stable state.'),
  n('Counter holds 0 through 5, then immediately resets on 6. Modulus?',6,'Six values are held in the stable cycle.'),
  c('Which three-bit pattern must the exact reset detector recognize?',['110','101','111'],'Six is binary 110 in Q2Q1Q0 order.'),
  n('Counter is stable at 5, next input event causes terminal detection and immediate clear. Final stable decimal count?',0,'The transient six is cleared to zero.')]),
 s('Choose clear polarity correctly',['NAND','bar','q2'],['An exact active-high detector is Q2Q1Q0\u2032.','An exact active-low detector is its complement.','Connect the detector to direct controls with the matching assertion level.'],[
  c('Active-low clear inputs require which exact terminal-six detector output?',['NAND(Q2,Q1,Q0 complement)','AND(Q2,Q1,Q0 complement)','NAND(Q2,Q1,Q0)'],'The NAND goes low only at 110.'),
  n('At Q2Q1Q0=110, CLRbar=(Q2Q1Q0\u2032)\u2032. CLRbar value?',0,'All three product literals are one, so NAND produces zero.'),
  n('At Q2Q1Q0=101, CLRbar=(Q2Q1Q0\u2032)\u2032. Detector output?',1,'Q1 is zero, so the product is zero and its complement is one.'),
  c('Does a three-bit storage width force modulus eight?',['No, terminal reset can truncate the stable cycle','Yes','Only for D elements'],'Eight patterns are available, but the reset logic can select a smaller stable cycle.')])]),
e(89,'Ripple-counter maximum clock rate','Under the simplified ripple-settling model, an n-stage transition needs n times the stage propagation delay. The next count event must wait at least that long; additional setup or logic constraints are excluded unless stated.',[
 s('Accumulate the stage delays',['propagation','four','nanosecond'],['Count the stages that can be traversed by a full ripple.','Add their propagation delays in series.','Use equal stage delays only when the problem explicitly gives them.'],[
  n('Four-stage ripple counter, each stage 50 ns, ignoring other constraints. Worst-case full settling delay in ns?',200,'Four times fifty ns equals two hundred ns.'),
  n('Ripple stages have delays 10,15,20,25 ns. Full-chain delay in ns?',70,'The serial delays sum to seventy ns.'),
  n('Three-stage equal-delay ripple chain, 8 ns per stage. Full settling delay in ns?',24,'Three dependent stage delays total twenty-four ns.'),
  c('Why use the full ripple delay for a worst-case period bound?',['A count transition may propagate through every stage','Every count always changes only one bit','Clock frequency is independent of settling'],'The bound must accommodate the slowest required transition.')]),
 s('Convert delay to maximum frequency',['frequency','one divided','maximum'],['In this model Tmin=n tpd.','Then fmax=1/Tmin with consistent units.','For a period in ns, frequency in MHz is 1000 divided by that period.'],[
  n('Four-stage ripple, tpd=50 ns each, no other constraints. Maximum input frequency in MHz?',5,'The period must be at least two hundred ns, so 1000/200 = five MHz.'),
  n('Minimum allowed input period 80 ns. Maximum frequency in MHz?',12.5,'1000 divided by eighty equals 12.5 MHz.'),
  n('Five-stage ripple, 10 ns each, no other constraints. Maximum frequency in MHz?',20,'Total delay fifty ns gives a twenty-MHz bound.'),
  c('Can the input period be shorter than the worst-case settling delay in this model?',['No','Yes, always','Only if the modulus is binary'],'The next event would arrive before the prior full ripple has settled.')]),
 s('Compare a clock against the bound',['proper','clock','less'],['Convert the given frequency to an input period.','Compare that period with the full-chain delay.','Treat this as the explicitly simplified model, not a complete physical timing specification.'],[
  c('Four-stage ripple, 50 ns per stage, input 10 MHz, no other constraints. Does it meet the full-settling bound?',['No','Yes','Exactly at the bound'],'Ten MHz means one hundred ns, shorter than the two-hundred-ns full ripple.'),
  c('Four-stage ripple, 50 ns per stage, input 4 MHz, no other constraints. Meets the full-settling bound?',['Yes','No','Only for one stage'],'Four MHz gives two hundred fifty ns, enough for the two-hundred-ns ripple.'),
  n('Input 4 MHz gives 250 ns period; ripple delay 200 ns. Settling margin in ns?',50,'Subtract two hundred from two hundred fifty.'),
  c('Are setup time, clock skew, and reset logic included in a bound that explicitly ignores other constraints?',['No','Yes','Only reset logic'],'The estimate applies to the stated ripple-delay model; omitted constraints require separate data.')])]),
e(90,'Budget propagation delay per ripple stage','A clock-rate limit can be rearranged to find the allowed delay per stage. The number of stages comes from the counter width, not directly from its decimal modulus.',[
 s('Find the number of stages',['1024','ten','flip'],['A full binary counter with modulus 2^n uses n one-bit stages.','Find n before applying the timing inequality.','A truncated counter may use more patterns than its stable modulus, so distinguish capacity from cycle length.'],[
  n('Full binary modulo-1024 counter: number of one-bit stages?',10,'1024 equals 2^10, so ten independent stored bits provide the required binary range.'),
  n('Full binary modulo-256 counter: number of stages?',8,'256 equals 2^8, so eight independent stored bits provide the full binary range.'),
  n('Minimum storage bits for a truncated modulo-10 counter?',4,'Four bits provide sixteen patterns; three provide only eight.'),
  c('Should a modulo-1024 counter be assigned 1024 serial flip-flop delays?',['No, its binary width is 10','Yes','Only if JK elements are used'],'The count of storage stages is the logarithm of the full binary modulus.')]),
 s('Rearrange the timing inequality',['permissible','delay','frequency'],['Under the simplified equal-delay ripple model, f <= 1/(n tpd).','Rearrange to tpd <= 1/(n f).','With f in MHz, the allowed tpd in ns is 1000/(n f).'],[
  n('Modulo-1024 full binary ripple counter, input 1 MHz, no other timing constraints. Maximum equal stage delay in ns?',100,'Ten stages share the one-thousand-ns clock period, giving one hundred ns each.'),
  n('Eight-stage ripple, input 5 MHz, no other constraints. Maximum equal stage delay in ns?',25,'The two-hundred-ns period divided by eight gives twenty-five ns.'),
  n('Five-stage ripple, input 20 MHz, no other constraints. Maximum stage delay in ns?',10,'The fifty-ns period divided by five gives ten ns.'),
  c('At a fixed clock rate, adding serial ripple stages does what to the allowed per-stage delay?',['Reduces it','Increases it','Leaves it unchanged'],'More stages must fit into the same clock period.')]),
 s('Check the units and the total budget',['nanosecond','microsecond','100'],['One microsecond equals one thousand nanoseconds.','A one-MHz clock has period one microsecond.','Multiply the chosen stage delay by stage count to check the full-chain budget.'],[
  m('Match equivalent time and frequency quantities.',[['1 microsecond','1000 nanoseconds'],['1 MHz input clock','1 microsecond period'],['Ten stages at 100 ns each','1000 ns full-chain delay']],'All three descriptions refer to the same one-microsecond total time budget.'),
  n('Ten stages at 80 ns each. Total ripple delay in ns?',800,'Ten times eighty gives eight hundred ns.'),
  n('A 1 MHz clock period is 1000 ns. Ten 80 ns stages leave how much margin, in ns?',200,'The total delay is eight hundred ns, leaving two hundred ns.'),
  c('Ten stages at 120 ns each, input 1 MHz, simplified model. Meets the bound?',['No','Yes','Exactly'],'The full ripple is twelve hundred ns, beyond the one-thousand-ns period.')])]),
e(91,'Reload a selected down-count range','A down counter can return to a chosen upper value by decoding the first unwanted low count and using preset or clear controls. Count only the stable intended range when determining its modulus.',[
 s('Find the last stable and first unwanted values',['down','unwanted','mod'],['For a stable down range H through L inclusive, the modulus is H-L+1.','Detect L-1 and reload H immediately.','For stable 7,6,5,4,3, detect 2 and reload 7.'],[
  o('Custom down counter holds 7 through 3 and immediately reloads 7 on reaching 2. Order its stable cycle.', ['Stable 7: 111','Stable 6: 110','Stable 5: 101','Stable 4: 100','Stable 3: 011'],'Two is the reload-triggering transient; it is not held for a normal count interval.'),
  n('Stable down range 7 through 3 inclusive. Modulus?',5,'The five stable values are seven, six, five, four, three.'),
  n('Stable down range 7 through 2 inclusive. First unwanted count triggering reload?',1,'Two must be held; the next decrement reaches the unwanted one.'),
  c('If reload occurs immediately on detecting 010, is decimal 2 a stable count interval?',['No','Yes','Only if the upper count is 7'],'The detector prevents that pattern from remaining as a normal stable count.')]),
 s('Detect and preset the upper endpoint',['preset','010','active low'],['To reload 111, preset all three bits.','The exact detector for 010 is Q2\u2032Q1Q0\u2032.','A NAND of that product provides an active-low preset trigger.'],[
  c('Exact active-low preset trigger for three-bit unwanted state 010?',['(Q2\u2032 Q1 Q0\u2032)\u2032','(Q2 Q1 Q0\u2032)\u2032','Q2\u2032 Q1 Q0\u2032'],'The complemented minterm goes low on 010, matching active-low preset controls.'),
  n('All three active-low presets asserted and clears inactive. Loaded Q2Q1Q0 as decimal?',7,'Preset stores one in each bit, giving 111.'),
  n('Detector PREbar=(Q2\u2032Q1Q0\u2032)\u2032, current 010. PREbar value?',0,'All selected literals are one, so NAND output is zero.'),
  c('For active-low preset controls, a high detector output means...',['Preset is inactive','Preset is asserted','All bits clear automatically'],'Assertion is low; a one releases the preset.')]),
 s('Verify count direction and wrap',['positive','Q','down'],['Rising-edge toggle stages with direct previous Q form the stated down ripple chain.','Check the reload detector separately from the ordinary decrement behavior.','After terminal detection, apply the next count from the reloaded value.'],[
  m('Rising-edge direct-Q down chain with reload to 7 at transient 2: match situations to next stable counts.',[['Current stable 7, one count event','6'],['Current stable 4, one count event','3'],['Current stable 3, one count event','7 after terminal reload']],'Ordinary decrements apply until the terminal pattern triggers the specified reload.'),
  n('Stable sequence 7,6,5,4,3 cycles. Starting 7, after seven count events, stable decimal value?',5,'Seven events modulo a five-state cycle is two steps, giving five.'),
  c('Can modulus be inferred from flip-flop width alone when terminal reload is present?',['No, inspect the stable cycle','Yes, always 2^n','Only if preset is active-low'],'Reload logic may shorten the cycle below the full binary range.'),
  n('Stable down range 6 through 2 inclusive. Number of stable states?',5,'Six, five, four, three, two gives five states.')])]),
e(92,'Analyze synchronous next-state equations','All stages of a synchronous counter use the same active clock edge. Evaluate every input equation from the current state, then update the entire state vector together.',[
 s('Use the old state for every stage',['present','T0','T1'],['For the example T0=1,T1=Q0,T2=Q1, all Q symbols mean current-state values.','A T stage uses Qnext=Q XOR T.','Compute the three next bits before replacing any current bit.'],[
  m('Synchronous T model T0=1,T1=Q0,T2=Q1: match next-bit equations.',[['Q0 next','Q0 XOR 1'],['Q1 next','Q1 XOR current Q0'],['Q2 next','Q2 XOR current Q1']],'All equations use the same pre-edge state, not newly computed bits.'),
  n('Common-edge T counter: T0=1,T1=Q0,T2=Q1, current Q2Q1Q0=000. Next state as decimal?',1,'Only T0 is one, so the next vector is 001.'),
  n('Common-edge T counter: T0=1,T1=Q0,T2=Q1, current Q2Q1Q0=010. Next state as decimal?',7,'T2=1,T1=0,T0=1, producing 111.'),
  c('May Q1 use the newly updated Q0 at the same synchronous edge?',['No, use pre-edge Q0','Yes, always','Only when Q0 rises'],'The input equations are evaluated from the simultaneous current-state snapshot.')]),
 s('Find the reachable cycle',['sequence','state diagram','000'],['Trace the next-state map from the given initial state.','For this model, 000→001→010→111→000.','A circuit can have more than one separate cycle, so the starting state matters.'],[
  o('T0=1,T1=Q0,T2=Q1, common active edge, initial 000. Order the next four stable states.', ['After edge 1: 001','After edge 2: 010','After edge 3: 111','After edge 4: 000'],'Evaluate each transition using its own old-state bits.'),
  n('Counter cycle 000→001→010→111→000, initial 000. After ten active edges, decimal state?',2,'The reachable cycle length is four; ten modulo four is two edges, giving 010.'),
  n('Reachable cycle 000,001,010,111. Number of distinct states in this cycle?',4,'The cycle contains four unique states despite using three stored bits.'),
  c('Does a three-bit synchronous circuit necessarily have an eight-state counting cycle?',['No','Yes','Only if it uses T elements'],'Its next-state equations may partition the eight possible states into shorter cycles.')]),
 s('Analyze another initial state',['initial','all states','011'],['A complete analysis lists the next state for every binary pattern.','This model also has cycle 011→100→101→110→011.','Use cycle length to reduce a large number of update events.'],[
  o('Common-edge T counter: T0=1,T1=Q0,T2=Q1, initial Q2Q1Q0=011. Order its next four settled states.', ['After edge 1: 100','After edge 2: 101','After edge 3: 110','After edge 4: 011'],'This is the other four-state cycle of the specified next-state map.'),
  n('Counter cycle 011→100→101→110→011, initial 101. After ten active edges, decimal state?',3,'Two steps around its four-state cycle give 101→110→011.'),
  n('Three current-state bits: how many rows are needed for a complete next-state table?',8,'There are eight possible pre-edge bit patterns.'),
  c('What determines a trajectory when several disjoint cycles exist?',['The initial state and next-state map','The number of output pins alone','Only the clock frequency'],'The map routes the starting state into its corresponding cycle.')])]),
e(93,'Analyze a synchronous JK counter','A wired JK counter is analyzed by substituting current-state bits into its J/K equations. The JK characteristic rule then produces each next bit at the common active clock edge.',[
 s('Extract the JK input functions',['J0','J1','J2'],['Use J0=Q2+Q1,K0=1; J1=Q2,K1=Q0\u2032; J2=Q1\u2032Q0\u2032,K2=1.','All three storage elements share an active clock edge.','The characteristic rule is Qnext=JQ\u2032+K\u2032Q.'],[
  m('Synchronous JK wiring: match inputs to their current-state functions.',[['J0','Q2 OR Q1'],['J1','Q2'],['K1','Q0 complement'],['J2','Q1 complement AND Q0 complement']],'Trace each wire and gate to define the input before evaluating the JK rule.'),
  n('J2=Q1\u2032Q0\u2032, current Q2Q1Q0=000. J2 value?',1,'Both Q1 and Q0 are zero, so their complemented product is one.'),
  n('J0=Q2 OR Q1, current Q2Q1Q0=011. J0 value?',1,'Q2 OR Q1 equals zero OR one.'),
  c('If K=1 for a JK bit, its next state simplifies to...',['JQ\u2032','J + Q','Q always'],'The K\u2032Q term is zero.')]),
 s('Trace the reachable five-state cycle',['next state','initial','clock'],['For the stated wiring, 000→100→011→010→001→000.','Every transition evaluates all J/K inputs from the current state.','This initial trajectory has a five-state period.'],[
  o('Given synchronous JK next-state cycle 000→100→011→010→001→000, start 000 and order the next five states.', ['After edge 1: 100','After edge 2: 011','After edge 3: 010','After edge 4: 001','After edge 5: 000'],'The state labels follow the explicit next-state map, not binary incrementing.'),
  n('Cycle 000→100→011→010→001→000, initial 000. After three active edges, decimal state?',2,'The trajectory reaches 100, then 011, then 010.'),
  n('Cycle 000→100→011→010→001→000, initial 000. After twelve active edges, decimal state?',3,'Twelve modulo five is two steps, reaching 011.'),
  n('Cycle 000,100,011,010,001 has how many distinct stable states?',5,'Five unique states precede the return to zero.')]),
 s('Check transitions outside the cycle',['table','all','present'],['A full table includes all eight possible current states.','A state not in the main cycle may enter it after one or more updates.','Count only recurring states when finding the period after initialization transients.'],[
  c('A trajectory is 111→010→001→000→100→011→010. Which state occurs only before the recurring cycle?',['111','010','000'],'111 is an initial transient; the trajectory then enters the five-state cycle.'),
  n('Common-edge JK counter: J0=Q2+Q1,K0=1,J1=Q2,K1=Q0\u2032,J2=Q1\u2032Q0\u2032,K2=1. Current Q2Q1Q0=101; next state as decimal?',2,'The next JK outputs are Q2=0,Q1=1,Q0=0, giving decimal two.'),
  c('Does every representable state need to lie on the same cycle?',['No','Yes','Only for JK circuits'],'Some states can lead into a cycle without recurring themselves.'),
  n('Three JK state bits require how many current-state rows for full analysis?',8,'Three binary bits give eight possible states.')])]),
e(94,'Trace a custom synchronous T counter','For the defined three-bit state PQR, use TP=R,TQ=P\u2032,TR=Q\u2032. All next bits use the pre-edge state, and trajectories can include both cycles and transient entries.',[
 s('Apply the T inputs simultaneously',['TP','TQ','TR'],['The state order is P,Q,R, with P most significant.','Inputs are TP=R,TQ=P\u2032,TR=Q\u2032.','The next bits are P XOR TP, Q XOR TQ, and R XOR TR.'],[
  m('Custom synchronous T model: match input pins to their current-state expressions.',[['TP','R'],['TQ','P complement'],['TR','Q complement']],'Each toggle control is evaluated from the old PQR vector.'),
  n('Common-edge T counter: TP=R,TQ=P\u2032,TR=Q\u2032, current PQR=000. Next state as decimal?',3,'Toggle controls are 0,1,1, so next PQR is 011.'),
  n('Common-edge T counter: TP=R,TQ=P\u2032,TR=Q\u2032, current PQR=011. Next state as decimal?',5,'TP=1,TQ=1,TR=0, giving 101.'),
  n('Common-edge T counter: TP=R,TQ=P\u2032,TR=Q\u2032, current PQR=101. Next state as decimal?',0,'P and R toggle from one to zero while Q holds zero, producing 000.')]),
 s('Use the reachable period',['three','cycle','000'],['From 000, the recurring sequence is 000→011→101→000.','The reachable period is three active clock edges.','Reduce a long edge count modulo three for that starting cycle.'],[
  o('TP=R,TQ=P\u2032,TR=Q\u2032. Starting 000, order the next three states.', ['After edge 1: 011','After edge 2: 101','After edge 3: 000'],'Three simultaneous updates return this initial state to zero.'),
  n('Counter cycle 000→011→101→000, initial 000. After eight active edges, decimal state?',5,'Eight modulo three is two, reaching 101.'),
  n('Recurring cycle 000,011,101: distinct stable state count?',3,'This trajectory has three states.'),
  c('Does the presence of three T bits prove an eight-state recurring cycle?',['No','Yes','Only if clock is rising-edge'],'The defined functions produce a shorter cycle.')]),
 s('Distinguish transients and fixed points',['state','initial','modulus'],['Analyze the entire next-state map if the initial state is unspecified.','Here 111 enters 011, while 110 maps to itself.','A fixed point is a one-state recurring cycle, not part of the three-state trajectory.'],[
  c('For this model, 111→011→101→000→011. Which state is an initial transient?',['111','011','101'],'111 appears before the recurring three-state cycle and does not return.'),
  n('Common-edge T counter: TP=R,TQ=P\u2032,TR=Q\u2032, current PQR=110. Next state as decimal?',6,'The toggle controls are 0,0,0, so 110 holds itself.'),
  n('A fixed point 110→110 has a recurring period of how many active edges?',1,'Every update leaves the same state, forming a one-state cycle.'),
  c('When an initial state can select different cycles, what should accompany a reported period?',['The initial-state or reachable-cycle assumption','Only storage width','Only clock rate'],'A single period value without its trajectory assumption can hide a fixed point or another cycle.')])]),
e(95,'Design synchronous binary counters','Counter design starts with the desired state transitions and derives the required storage inputs. T or D input equations can implement binary up counting, while the maximum clock rate depends on the register-to-register critical path.',[
 s('Derive toggle enables',['design','T0','Q0'],['In binary up counting, Q0 changes at every update, so T0=1.','Q1 changes when current Q0=1, so T1=Q0.','Q2 changes when both lower bits are one, so T2=Q1Q0.'],[
  m('Three-bit synchronous binary up counter: match T inputs to current-state functions.',[['T0','Constant 1'],['T1','Q0'],['T2','Q1 AND Q0']],'Each higher bit toggles on a carry from all the lower bits.'),
  n('Current Q2Q1Q0=011. For binary up counting, T2 value?',1,'Both lower bits are one, so Q2 must toggle.'),
  n('Current 010. For binary up counting, T1 value?',0,'Q0 is zero, so Q1 holds on the next increment.'),
  c('Does T2=Q1 alone implement ordinary three-bit binary up counting?',['No, it also needs Q0','Yes','Only at even counts'],'The MSB toggles only when both lower bits are one.')]),
 s('Choose T or D storage equations',['D1','D0','excitation'],['For two-bit up counting, T0=1 and T1=Q0.','Equivalent D equations are D0=Q0\u2032 and D1=Q1 XOR Q0.','Verify every present-state row against the intended next state.'],[
  table('Two-bit synchronous binary up counter using D storage: fill D1=Q1 XOR Q0 for each current state.', ['Q1','Q0'],rows2,[0,1,1,0],'D1 supplies the next high bit; it changes when the current low bit is one.'),
  c('Correct physical D0 equation for a two-bit binary up counter?',['Q0 complement','Q0','Q1'],'The least significant bit complements at every count event.'),
  n('Two-bit binary up counter starts 10. Next settled decimal state?',3,'Two increments to three, represented by 11.'),
  c('What is the first design step?',['Specify the required next-state sequence','Assume any unused state is safe','Connect all inputs to one without analysis'],'The desired state map determines excitation and input logic.')]),
 s('Budget the synchronous critical path',['critical','setup','propagation'],['With zero clock skew, a simplified setup bound is Tclk >= tCQ + tlogic,max + tsetup.','Parallel register stages do not add n serial flip-flop delays.','Hold requirements are separate from this maximum-period setup calculation.'],[
  n('Zero-skew synchronous path: tCQ=4 ns, maximum logic delay=6 ns, setup=2 ns. Minimum clock period in ns?',12,'Add four, six, and two to get twelve ns.'),
  n('Zero-skew setup model Tmin=tCQ+tlogic,max+tsetup: 5 ns,10 ns,5 ns respectively. Maximum frequency in MHz?',50,'Minimum period is twenty ns, so 1000/20 = fifty MHz.'),
  c('Two independent logic paths have delays 3 and 8 ns. Which logic delay enters the setup-period bound?',['8 ns','11 ns','3 ns'],'Use the maximum path delay; independent parallel paths are not added together.'),
  c('Does increasing clock period alone prove all hold-time requirements are satisfied?',['No','Yes','Only if the counter has four bits'],'The setup-period inequality does not replace a separate minimum-delay hold check.')])])
]) flipflopLectures.set(...definition);

for(const definition of [
e(96,'Ring counters and one-hot timing','A ring counter recirculates a shift-register bit pattern. With one-hot initialization, an n-stage ring visits n states and provides one active timing output per step; an alternative uses a binary counter and decoder.',[
 s('Rotate the one-hot pattern',['ring','shift','sequence'],['Here ABCD is written left to right, with A most significant.','Use next ABCD = DABC, recirculating the last bit to the first position.','Start at 1000 so exactly one output remains asserted throughout the valid cycle.'],[
  o('Four-stage ring, next ABCD=DABC, initial 1000. Order one full cycle beginning at the initial state.', ['1000: A active','0100: B active','0010: C active','0001: D active'],'The stored one rotates right through the four output positions, then returns to A.'),
  c('Ring rule next ABCD=DABC, current ABCD=0010. Next ABCD?',['0001','0100','1000'],'The last D bit is zero; shift C into D to obtain 0001.'),
  n('Four-stage one-hot ring starts 1000. After six active edges, decimal value of ABCD?',2,'Six modulo four is two rotations, giving 0010, decimal two.'),
  n('Six-stage ring initialized with exactly one one: valid cycle length?',6,'The asserted bit visits six positions before returning to its starting position.')]),
 s('Initialize and preserve one-hot state',['initial','preset','clear'],['Preset one stage and clear all the others to start the desired cycle.','Pure rotation preserves the number of ones.','An all-zero ring stays zero and does not start the desired one-hot timing sequence by itself.'],[
  m('Initialize ring ABCD=1000 using direct controls: match stages to actions.',[['A','Preset to 1'],['B, C, D','Clear to 0']],'The desired initial state needs exactly one asserted stored bit.'),
  n('Ring rule next ABCD=DABC, initial 0000. Decimal state after five rotations?',0,'Rotating zeros only produces more zeros.'),
  n('A valid seven-stage one-hot ring has how many asserted output bits?',1,'Rotation moves the single one without creating another one.'),
  c('Does any arbitrary initial ring pattern guarantee the intended n-state one-hot sequence?',['No, initialize one-hot deliberately','Yes','Only if it is all zeros'],'Other patterns can stay fixed or repeat in a different cycle.')]),
 s('Compare two timing-signal implementations',['decoder','counter','timing'],['A direct n-output one-hot ring uses n storage bits.','For n=2^k, a k-bit binary counter plus a k-to-n decoder can produce the same cyclic one-active-output sequence.','Compare storage-bit count separately from the added decoding logic.'],[
  m('Four cyclic one-hot timing outputs: match implementations to storage requirements.',[['Direct four-stage ring','Four stored bits'],['Two-bit binary counter plus 2-to-4 decoder','Two stored bits plus decoding logic']],'Both can sequence four timing outputs, while their storage and combinational hardware differ.'),
  n('Eight timing outputs using a full binary counter and 3-to-8 decoder: counter storage bits?',3,'Three stored bits provide eight binary addresses for the decoder.'),
  n('Eight timing outputs using a direct one-hot ring: storage bits?',8,'Each of eight ring positions is a stored bit.'),
  c('Enabled active-high decoder driven by a binary counter has how many asserted timing outputs at a valid address?',['One','All of them','Zero always'],'The decoder selects exactly one addressed output at a time.')])]),
e(97,'Twisted-ring and Johnson timing counters','A twisted-ring register feeds the complement of its last bit back to its first stage. Initialized to all zeros, n stages visit 2n states; decoding that valid cycle produces one-hot Johnson timing signals.',[
 s('Trace complemented feedback',['twisted','complement','sequence'],['Use four bits ABCD with next ABCD=(D complement)ABC.','Starting at 0000, ones fill the register, then zeros replace them.','The valid initialized cycle has eight states rather than sixteen.'],[
  o('Four-stage twisted ring, next ABCD=(D complement)ABC, initial 0000. Order its full cycle starting at the initial state.', ['0000','1000','1100','1110','1111','0111','0011','0001'],'Complement feedback inserts ones until the last bit becomes one, then inserts zeros until the register returns to zero.'),
  c('Twisted-ring rule next ABCD=(D complement)ABC, current ABCD=1111. Next ABCD?',['0111','1111','0000'],'D is one, so its complement zero enters A while the old ABC shift right.'),
  n('Five-stage twisted ring initialized all-zero: valid cycle length?',10,'The initialized cycle has twice the number of stages: ten states.'),
  n('Four-stage twisted ring initialized 0000: distinct valid-cycle states?',8,'It takes four updates to fill with ones and four more to return to all zeros.')]),
 s('Decode one timing signal per state',['AND','timing','decoding'],['Raw twisted-ring bits are not generally one-hot.','Within the valid four-stage cycle, detect 0000 using A\u2032D\u2032 and 1111 using AD.','Other cycle states can be detected by the adjacent 10 or 01 boundary; assume complements are available.'],[
  m('On the valid cycle 0000,1000,1100,1110,1111,0111,0011,0001, match timing detectors to states.',[['A complement AND D complement','0000'],['A AND B complement','1000'],['A AND D','1111'],['A complement AND B','0111']],'On the stated valid cycle, each two-literal boundary detector selects its corresponding timing state.'),
  n('Four-stage twisted ring at state 1110. Number of asserted raw stored bits?',3,'The raw pattern has three ones, so it is not one-hot.'),
  c('What turns the valid twisted-ring cycle into one-hot timing outputs?',['State decoding logic','Assuming every raw state has one one','Removing the feedback'],'Decoder gates select one timing phase per valid cycle state.'),
  n('Four-stage Johnson timing implementation, one two-input AND detector per valid phase, complements supplied. Number of phase-detector AND gates?',8,'Eight valid phases require eight two-input detectors under the stated implementation.')]),
 s('Compare ring and twisted-ring capacity',['two n','ring counter','initial'],['A one-hot n-stage ring has n valid states.','An all-zero-initialized n-stage twisted ring has 2n valid-cycle states.','Storage capacity 2^n is distinct from the number of states used by either initialized cycle.'],[
  m('Six storage stages: match counter models to valid-cycle lengths.',[['One-hot ring initialized with one one','6 states'],['Twisted ring initialized all-zero','12 states'],['All representable six-bit patterns','64 patterns']],'Initialization and feedback define the cycle; total binary storage capacity is a separate count.'),
  n('A valid twisted-ring cycle needs twelve phases. Minimum stage count for this 2n-state construction?',6,'Twelve phases require n=12/2 = six stages.'),
  n('Four-stage twisted-ring cycle starts 0000. After ten updates, decimal ABCD?',12,'Ten modulo eight is two steps: 0000→1000→1100, decimal twelve.'),
  c('Does the valid-cycle length 2n mean every arbitrary initial pattern must reach that same cycle?',['No, use the specified initialization','Yes','Only for even n'],'The 2n-state claim is for the initialized valid cycle; unused patterns need separate analysis.')])])
]) flipflopLectures.set(...definition);

for(const definition of [
e(79,'Master–slave storage','Two level-sensitive storage stages with opposite clock phases separate data collection from output transfer. For ideal D stages, a high-transparent master and low-transparent slave give falling-edge capture behavior.',[
 s('Separate the two phases',['master','slave','level'],['Connect the master stored output to the slave data input.','In this model, master follows D during clock high while slave holds.','During clock low, master holds while slave receives the master value; assume ideal complementary, non-overlapping phases.'],[
  m('Ideal D master–slave pair: master transparent high, slave transparent low. Match phases to actions.',[['Clock high: master','Follows external D'],['Clock high: slave','Holds external output'],['Clock low: master','Holds its captured value'],['Clock low: slave','Receives the held master value']],'Only one stage is transparent at a time, preventing data from passing through both together.'),
  c('During clock high, D changes with ample settling time. Which stage can follow it in this model?',['The master','The slave only','Both stages at once'],'The high-transparent master follows D while the low-transparent slave is closed.'),
  n('Clock high, slave Q=0, master follows D=1. External slave output remains what bit?',0,'The slave holds its previous zero during the high interval.'),
  c('Which connection carries captured data between the stages?',['Master output to slave data input','Slave output to external D input','Clock to master data input'],'The slave receives the master stored value as data.')]),
 s('Find the effective capture edge',['negative edge','equivalent','D'],['The high-transparent master closes when clock falls.','The low-transparent slave then transfers the held master value.','With stable data around that transition, the external D behavior is falling-edge capture.'],[
  o('Ideal high-master/low-slave D pair: order one capture and transfer.', ['Clock high: master tracks D while slave holds','Falling edge: master closes on stable D','Clock low: slave transfers the captured master value'],'Data collection precedes transfer; the final captured value is the data at master closure.'),
  c('High-transparent master plus low-transparent slave gives which ideal D capture edge?',['Falling edge','Rising edge','Every D transition'],'The master closes and slave opens on the falling edge.'),
  n('External Q starts 0. Stable D is 1 around the falling edge in this pair. External Q after transfer settles?',1,'The master captures one at closure and the slave transfers it.'),
  c('D changes during clock low after the master has closed. Does it pass immediately to the external output?',['No','Yes','Only if it becomes zero'],'The closed master retains its captured value and isolates the slave from new D changes.')]),
 s('Reverse the phase order',['inverter','positive edge','master'],['A low-transparent master collects data while clock is zero.','A high-transparent slave transfers it when clock rises.','Master–slave is a circuit structure; the phase arrangement and storage type determine its behavior.'],[
  m('Ideal D pair: match stage phase arrangements to effective capture edges.',[['Master high, slave low','Falling-edge capture'],['Master low, slave high','Rising-edge capture']],'The transfer edge is the edge that closes the master and opens the slave.'),
  n('Low-master/high-slave D pair, Q=1 initially. D=0 stable around a rising edge. Q after transfer?',0,'Rising-edge closure captures zero and the slave transfers zero.'),
  c('Can the words master–slave alone determine the active edge?',['No, the stage phases must be specified','Yes, always rising','Yes, always falling'],'Either phase order is possible, so the clock arrangement is needed.'),
  c('Must every edge-triggered storage circuit use this two-stage structure?',['No','Yes','Only for D storage'],'Edge sensitivity describes behavior; master–slave names an implementation structure.')])]),
e(80,'Race-around in level-sensitive toggle storage','A level-sensitive feedback circuit can toggle repeatedly while its toggle control and active clock level persist. An edge-triggered update or properly isolated master–slave arrangement avoids repeated changes within one active interval.',[
 s('Recognize repeated toggling',['race','level','propagation'],['JK=11 requests toggle; T=1 requests toggle.','In a directly fed-back level-sensitive model, the changed output can request another change while enabled.','A sufficiently long active interval permits repeated toggles; edge-triggered storage gets one update opportunity per active edge.'],[
  m('Match storage conditions to the requested behavior at an allowed update.',[['JK inputs 11','Toggle Q'],['T input 1','Toggle Q'],['JK inputs 00','Hold Q'],['T input 0','Hold Q']],'Repeated toggle requests cause the race-around concern in a continuously enabled feedback implementation.'),
  c('Which situation permits race-around in the stated direct-feedback model?',['Level-sensitive JK=11 with a long active clock interval','Edge-triggered JK with one isolated active edge','Level-sensitive JK=00'],'Toggle feedback can act again while a level-sensitive circuit remains enabled.'),
  c('Does every JK element necessarily suffer race-around?',['No, its clock response and implementation matter','Yes, regardless of triggering','Only if J=K=0'],'The concern belongs to suitable level-sensitive toggle implementations, not every JK device.'),
  n('Toggle the stored bit 0 twice. Final bit?',0,'Zero toggles to one and then back to zero.')]),
 s('Trace a delayed toggle loop',['delay','toggle','long'],['For an explicitly simplified model, one toggle completes every stated loop delay while enabled.','Count only completed toggles before disabling.','The parity of that count determines whether the starting bit is retained or complemented.'],[
  o('Simplified enabled toggle loop starts Q=0 and completes one toggle every 2 ns. Order states at 2,4,6 ns.', ['At 2 ns: Q=1','At 4 ns: Q=0','At 6 ns: Q=1'],'Each completed loop delay complements the latest state.'),
  n('Same 2 ns toggle-loop model: enabled for 7 ns, initially Q=0, no other delays. Completed toggles?',3,'Toggles complete at two, four, and six ns; the next would be at eight.'),
  n('Same simplified model, initially Q=0, disabled at 7 ns. Final Q?',1,'Three completed toggles is odd, so the final bit is one.'),
  c('Why should an unspecified long-pulse level-sensitive JK=11 operation not be assumed to toggle exactly once?',['Feedback may complete several toggles before the pulse ends','JK=11 means hold','The data inputs disappear'],'The final value depends on how many feedback updates occurred during the active interval.')]),
 s('Control the update opportunity',['solution','edge','master'],['An ideal edge-triggered element updates only at its active edge.','Master–slave phase isolation can prevent final-output feedback from repeatedly updating during one active phase.','Do not replace a physical timing analysis with an unspecified pulse-width assumption.'],[
  c('Rising-edge JK, J=K=1 stable, one rising edge followed by a long high level. Number of ideal update opportunities?',['One','As many as the high duration permits','Zero'],'The high interval after the edge creates no additional active edges.'),
  n('Rising-edge JK starts Q=1 and sees one active edge with J=K=1. Final Q?',0,'One toggle complements one to zero.'),
  c('Which design change directly restricts updates to clock transitions?',['Use edge-triggered storage','Hold J=K=1 longer','Increase the transparent interval'],'Edge triggering removes continuous level-sensitive update opportunities.'),
  c('Why can phase-isolated master–slave storage help?',['It separates data collection and output transfer','It makes every gate delay zero','It removes the stored bit'],'The separation prevents final-output changes from freely rippling through both stages during one phase.')])]),
e(81,'Counters and their state sequences','A counter follows a specified sequence of stored states. Its modulus counts the distinct stable states in the cycle; synchronous and ripple implementations differ in how the storage elements receive their clocks.',[
 s('Follow a predetermined sequence',['counter','sequence','states'],['Start from the stated initial state.','Apply the specified next-state sequence on count events.','For ordinary binary up counting, increment modulo the available range.'],[
  o('Two-bit binary up counter starts 00. Order one complete cycle beginning at the initial state.', ['00: decimal 0','01: decimal 1','10: decimal 2','11: decimal 3'],'Binary up counting visits zero through three and then wraps to zero.'),
  n('Three-bit binary up counter in state 111. Next settled state as decimal?',0,'A three-bit cycle wraps from seven to zero.'),
  n('Three-bit binary down counter in state 000. Next settled state as decimal?',7,'Counting down modulo eight wraps zero to seven.'),
  c('Must every counter count upward in ordinary binary order?',['No, its sequence can be specified differently','Yes','Only if it has three bits'],'Counter behavior follows its chosen state sequence, including down or custom sequences.')]),
 s('Count states and stored bits',['modulo','register','distinct'],['The modulus is the number of distinct stable states in the repeating cycle.','n independent storage bits allow at most 2^n binary states.','A custom counter need not use every representable bit pattern.'],[
  m('Match counter descriptions to their moduli.',[['Cycle 00,01,10,11','Modulus 4'],['Cycle 000 through 111','Modulus 8'],['Custom cycle 00,10,11','Modulus 3']],'Count the distinct stable states in the cycle, not the value of its largest displayed state.'),
  n('Four-bit full binary counter has how many stable count states?',16,'It visits all 2^4 = sixteen binary patterns.'),
  n('Minimum storage bits for seven distinct stable counter states?',3,'Two bits allow only four states; three bits allow eight.'),
  c('Does a three-state cycle using 00,10,11 have modulus four because its largest value is three?',['No, it has modulus three','Yes','Only if it counts down'],'There are three states in the specified cycle, regardless of their numerical labels.')]),
 s('Distinguish common and ripple clocks',['synchronous','asynchronous','clock'],['Synchronous counters apply a common clock to their storage elements.','In ripple counters, a preceding output clocks a later element.','Ripple updates propagate through stages and need time to settle.'],[
  m('Match clock arrangements to counter implementations.',[['Common clock drives every stage','Synchronous counter'],['Previous stage output clocks the next','Asynchronous ripple counter']],'The clock distribution determines whether count changes originate together or ripple through stages.'),
  c('Which stage directly receives the external clock in the basic ripple chain?',['The least significant stage','Every stage','Only the most significant stage'],'Later stages receive clock transitions from preceding outputs.'),
  c('Why can a ripple counter pass through intermediate output patterns?',['Stage outputs change after successive propagation delays','Its stable sequence is undefined','All outputs are independent random bits'],'Lower stages update before their changes trigger higher stages.'),
  c('Are asynchronous ripple counter and ripple counter names for the same basic implementation?',['Yes','No','Only for modulus two'],'Both refer to a chain in which stage output transitions clock subsequent stages.')])]),
e(82,'Divide a clock frequency by two','An edge-triggered storage bit configured to toggle on every active input edge completes one output cycle for every two input cycles. Its output frequency is therefore half the input clock frequency.',[
 s('Configure one toggling bit',['divide','T','toggle'],['An edge-triggered T element toggles on each active edge when T=1.','The sequence alternates between zero and one.','It takes two toggles for the output to complete a full cycle.'],[
  table('At a permitted T update, fill Qnext=T XOR Q; a divider will hold T at 1.', ['T','Q'],rows2,[0,1,1,0],'T=1 complements Q at each active clock edge, while T=0 holds it.'),
  n('T=1, rising-edge element starts Q=0. Q after five active edges?',1,'Five toggles is odd, so the initial zero becomes one.'),
  n('T=1, edge-triggered element. How many active input edges make one full output cycle?',2,'One edge changes zero to one, the next changes one to zero.'),
  c('Should this divider use a continuously transparent toggle loop for clean edge-based counting?',['No, use the stated edge-triggered updates','Yes, always','Only with T=0'],'The frequency-division model assumes one toggle per active edge.')]),
 s('Use equivalent D and JK dividers',['D','JK','q bar'],['For JK storage, J=K=1 supplies toggle behavior.','For D storage, feed Q complement back to D.','Both constructions use the same stated active-edge convention.'],[
  m('Match edge-triggered storage types to divide-by-two connections.',[['T element','T=1'],['JK element','J=K=1'],['D element','D=Q complement']],'Each arrangement requests exactly the complement of the currently stored bit at every active edge.'),
  n('D divider with D=Q complement, Q=1 before its active edge. New Q?',0,'The D input is zero, so the edge captures zero.'),
  n('JK divider with J=K=1, Q=0 before its active edge. New Q?',1,'Simultaneous ones select toggle.'),
  c('Does D=Q feedback, rather than Q complement, divide by two?',['No, it holds the existing state','Yes','Only when Q starts at one'],'D=Q captures the same bit repeatedly and produces no toggling.')]),
 s('Convert divider frequencies',['frequency','period','two'],['For one toggle divider, fout=fin/2.','Output period is twice the input period.','Initial Q affects phase but does not change the steady-state divide ratio.'],[
  n('Input clock 80 MHz, one ideal divide-by-two stage. Output frequency in MHz?',40,'Divide eighty by two to get forty MHz.'),
  n('Input clock period 12 ns. One ideal divide-by-two output period in ns?',24,'The output needs two input cycles, giving twenty-four ns.'),
  n('Ideal divider output frequency is 6 MHz. Required input frequency in MHz?',12,'The input runs at twice the output rate.'),
  c('If initial Q is changed from 0 to 1, does the steady-state division factor change?',['No','Yes, from two to one','Yes, from two to four'],'The waveform phase changes, but one full output cycle still needs two input cycles.')])]),
e(83,'Two-stage ripple division and counting','Cascading two toggle stages gives divide-by-four frequency division. Count direction depends on the active clock edge and which previous-stage signal drives the next clock; state traces must use an explicit bit order.',[
 s('Cascade the frequency division',['frequency','four','next'],['Each edge-triggered toggle stage halves its own clock frequency.','A second stage clocked by the first output divides the original input by four.','Its stable state cycle has four distinct binary states.'],[
  m('Two cascaded ideal toggle dividers: match signals to steady-state frequency.',[['External clock','f'],['First-stage Q0','f/2'],['Second-stage Q1','f/4']],'The second stage halves the already divided first-stage frequency.'),
  n('External clock 48 MHz, two cascaded ideal dividers. Q1 frequency in MHz?',12,'Divide by 2 twice: 48/4 = twelve MHz.'),
  n('Two stages have two independent stored bits. Full-cycle distinct stable states?',4,'There are 2^2 = four states in the full binary cycle.'),
  n('External clock period 5 ns. Second-stage output period in ns?',20,'The divide-by-four output period is four input periods.')]),
 s('Trace rising-edge Q-linked down counting',['positive','down','sequence'],['Both stages here toggle on rising edges and have T=1.','Q0 receives the external clock; Q0 directly clocks Q1.','Write settled states as Q1Q0: starting 00, the sequence is 00,11,10,01,00.'],[
  o('Two rising-edge T=1 stages, Q0 directly clocks Q1. Starting 00, order the next four settled Q1Q0 states.', ['After event 1: 11','After event 2: 10','After event 3: 01','After event 4: 00'],'A Q0 rise toggles Q1; a Q0 fall leaves Q1 unchanged, producing binary down counting.'),
  n('This direct-Q rising-edge two-bit down counter is at 10. Next settled state as decimal?',1,'The down sequence continues from binary ten, value two, to binary one, value one.'),
  c('In this circuit, Q1 toggles when Q0...',['Rises from 0 to 1','Falls from 1 to 0','Stays at 1'],'Q1 is clocked by the rising edges of the direct Q0 signal.'),
  c('Does divide-by-four frequency alone establish up-counting direction?',['No, edge polarity and interstage connections matter','Yes','Only if it has two bits'],'Both up and down binary counters can have the same output frequency division.')]),
 s('Include the ripple transit state',['delay','transit','glitch'],['Q0 changes first, after its own clock-to-output delay.','A resulting Q0 active edge triggers Q1 after another delay.','Distinguish intermediate patterns from settled count states.'],[
  o('Same rising-edge direct-Q counter: Q1Q0 starts 00, both stages delay 2 ns. Order one external-edge transition.', ['At 0 ns: external rising edge, state still 00','At 2 ns: Q0 rises, intermediate state 01','At 4 ns: Q1 rises, settled state 11'],'The two output changes occur serially, so 01 is a temporary pattern on the way to 11.'),
  n('Two-stage ripple transition changing both bits, delay 3 ns per stage. Final settling time after external edge in ns?',6,'Two dependent stages add three ns each.'),
  c('For settled 00 to 11 in this down counter, which temporary pattern appears when Q0 changes first?',['01','10','No intermediate pattern'],'The LSB rises before the higher bit rises.'),
  c('Should that temporary 01 be counted as an additional stable modulus state?',['No','Yes','Only if observed by a decoder'],'It is a propagation transient, not an additional state held for a full count interval.')])]),
e(84,'Binary down ripple counters','A full n-bit binary down counter visits all values from 2^n-1 to zero and wraps. Interstage clock choices must make each higher bit toggle when the preceding bit rises during a borrow ripple.',[
 s('Choose clocks for down counting',['down counter','positive','negative'],['For rising-edge toggle stages, use the preceding Q to clock the next stage.','For falling-edge toggle stages, use the preceding Q complement for the same down-counting behavior.','Q0 is the least significant bit; write the state with the most significant bit first.'],[
  m('Binary down ripple counter: match stage trigger types to next-stage clock connections.',[['Rising-edge toggle stages','Previous Q directly'],['Falling-edge toggle stages','Previous Q complement']],'A rise of Q becomes either a direct rising edge or a falling edge of Q complement.'),
  c('Rising-edge three-bit down ripple chain: clock input of Q2 comes from...',['Q1','Q1 complement','External clock directly'],'Direct preceding Q provides the required rising-edge borrow trigger.'),
  c('Falling-edge three-bit down ripple chain: clock input of Q1 comes from...',['Q0 complement','Q0 directly','A constant zero'],'When Q0 rises during borrow, its complement falls and triggers Q1.'),
  n('Three-bit binary down counter in settled state 100. Next settled state as decimal?',3,'Four decrements to three, binary 011.')]),
 s('Trace borrow propagation',['transit','LSB','delay'],['A binary decrement changes the trailing zeros to ones.','The ripple proceeds from the least significant bit upward.','Intermediate states can appear between these changes.'],[
  o('Three-bit down ripple counter starts 100. Order bit changes and resulting Q2Q1Q0 patterns.', ['Q0 rises: 101','Q1 rises: 111','Q2 falls: 011'],'The lower zero bits turn to ones before the leading one turns to zero.'),
  n('Three-bit down ripple transition 100 to 011: number of intermediate patterns excluding start and final?',2,'The temporary patterns are 101 and 111.'),
  n('Three-bit down ripple transition 111 to 110: intermediate-pattern count excluding endpoints?',0,'Only Q0 changes, so there is no distinct intermediate pattern.'),
  c('Down-counter wrap 000 to 111: which bit changes first in the ripple chain?',['Q0, the least significant bit','Q2, the most significant bit','All bits simultaneously'],'The external count event first reaches the least significant stage.')]),
 s('Compute capacity, frequency, and delay',['frequency','propagation','n'],['A full n-bit counter has modulus 2^n.','Ideal Qk frequency is fin/2^(k+1), with zero-based bit indices.','A transition rippling through n equal-delay stages takes n times the stage delay.'],[
  n('Four-bit full binary down counter: modulus?',16,'All sixteen four-bit states belong to its cycle.'),
  n('Three-bit ripple counter, input 64 MHz. MSB Q2 frequency in MHz?',8,'Q2 divides by 2^3 = eight, giving eight MHz.'),
  n('Four-bit ripple chain, each stage delay 2 ns. Worst-case full-chain settling time in ns?',8,'Four dependent stage delays total eight ns.'),
  n('Three-bit down counter starts decimal 1. After three settled count events, decimal state?',6,'The sequence is one, zero, seven, six under modulo-eight decrementing.')])]),
e(85,'Binary up and truncated ripple counters','A binary up ripple counter toggles higher bits on carries from lower bits. A truncated modulo-M cycle can reset at a decoded terminal pattern so its stable sequence runs from zero through M-1.',[
 s('Choose clocks for up counting',['up counter','negative','positive'],['For falling-edge toggle stages, direct preceding Q supplies the carry trigger.','For rising-edge toggle stages, use preceding Q complement.','These choices make the settled sequence increment in binary.'],[
  m('Binary up ripple counter: match stage trigger types to next-stage clock connections.',[['Falling-edge toggle stages','Previous Q directly'],['Rising-edge toggle stages','Previous Q complement']],'A carry changes the lower Q from one to zero, giving a direct falling edge or a complement rising edge.'),
  c('Falling-edge up ripple chain: when Q0 falls, the next stage...',['Toggles','Always stays unchanged','Is asynchronously reset'],'The Q0 falling transition is the active clock edge for the next toggle stage.'),
  n('Three-bit up counter in state 011. Next settled state as decimal?',4,'Three increments to four, represented by 100.'),
  n('Three-bit full binary up counter in state 111. Next settled state as decimal?',0,'Seven wraps to zero modulo eight.')]),
 s('Trace carry and settling',['delay','ripple','transit'],['An increment changes trailing ones to zeros.','The next higher zero then becomes one.','Ripple delays create temporary patterns while these changes propagate.'],[
  o('Three-bit up ripple counter starts 011. Order bit changes and Q2Q1Q0 patterns.', ['Q0 falls: 010','Q1 falls: 000','Q2 rises: 100'],'The low ones clear before the high zero becomes one.'),
  n('Up ripple transition 011 to 100: intermediate-pattern count excluding endpoints?',2,'The temporary states are 010 and 000.'),
  n('Three stages each have delay 4 ns during this full ripple. Final settling time in ns?',12,'Three dependent stage changes take twelve ns.'),
  c('Is temporary 000 during settled 011 to 100 a full count interval at zero?',['No','Yes','Only for a falling-edge chain'],'It is a transient while the carry propagates, not the stable target count.')]),
 s('Truncate the stable cycle',['mod','reset','clear'],['For M smaller than 2^n, detect count M and asynchronously clear to zero.','Stable count states are zero through M-1; the detected reset pattern is only a transient.','Use enough bits to represent the required count and reset logic, and state the clear polarity.'],[
  c('Three-bit up ripple counter resets immediately on detecting 110. Its stable count cycle has what modulus?',['6','7','8'],'It holds states 000 through 101; 110 triggers reset instead of remaining for a count interval.'),
  n('A decimal/BCD up counter holds 0 through 9 then resets on reaching 10. Stable-state modulus?',10,'There are ten stable states, zero through nine.'),
  c('Exact active-low clear detector for three-bit reset pattern Q2Q1Q0=110?',['CLRbar=(Q2 Q1 Q0\u2032)\u2032','CLRbar=Q2 Q1 Q0\u2032','CLRbar=(Q2 Q1 Q0)\u2032'],'The NAND of the 110 minterm goes low at the reset pattern, asserting active-low clear.'),
  n('Minimum storage bits for ten stable binary-encoded count states?',4,'Three bits hold at most eight patterns; four bits hold sixteen, enough for ten states.')])])
]) flipflopLectures.set(...definition);
