# COA course study guide

35 lectures · 105 microlevels · 420 original practice problems.

Use the portal for interactive puzzles. This companion collects the teaching notes and worked solutions. Full machine transcripts live in courses/coa/data/transcripts; their numbers and formulas may contain recognition errors. These supplementary problems use stated assumptions and are not reproductions of GATE papers.

## 000 · Architecture vs organization

Every application runs on physical hardware. COA asks how that hardware works, how its behavior is designed, and how its parts are put together.

### Level 1: Hardware foundations

- **What is the central focus of COA?** Computer hardware and how it operates. COA studies the hardware foundation that supports software.
- **Pair the idea with its role.** Architecture → Defines the intended behavior; Organization → Connects hardware to implement it. The introduction separates the functional design from the arrangement of physical components.
- **Choosing which instructions a computer supports belongs to…** Computer architecture. The instruction set is part of the machine behavior being defined.
- **Why can COA help a software developer?** It helps explain performance on real hardware. Understanding the machine can help you reason about application performance and efficiency.

### Level 2: Build an instruction

- **Decode “turn on the light.”** Turn on → Operation; The light → Operand. The operation says what to do; the operand identifies what to act on.
- **Which set contains example machine operations?** ADD, SUB, LOAD, STORE. These are examples of the primitive operations described in the lecture.
- **An 8-bit instruction reserves 2 bits for the operation. Set the operation field to 2 bits.** 2 operation bits. Two operation bits leave 8 − 2 = 6 operand bits in this toy format.
- **An 8-bit instruction uses 4 operation bits. How many bits remain for the operand?** 4. 8 − 4 = 4 operand bits. The format defines how to interpret the instruction.

### Level 3: Architecture checkpoint

- **Why does an instruction need a defined format?** To decide how its bits are interpreted. Without a format, the machine cannot determine which bits identify the operation and operands.
- **Match each design decision.** Supported operations → Instruction set; Layout of instruction bits → Instruction format; Binary representation of values → Data format. The lecture distinguishes the supported operations, their encoding, and the representation of data.
- **Try the other toy format: 8 total bits, with 4 operation bits.** 4 operation bits. This format has four operation bits and four operand bits.
- **Arranging hardware and its communication to execute the design is…** Computer organization. Organization implements the defined functionality using interconnected hardware.

Transcript reference times: 1:14, 10:20, 19:07. Read the full text in the Lecture notebook.

## 001 · Stored-program architecture

A computer without a multiplication instruction can still multiply by combining supported additions. Small operations become building blocks for bigger tasks.

### Level 4: Primitive instructions

- **Run three additions to calculate 5 × 4. Start with 5 already in the accumulator.** Accumulator 20, 3 steps. 5 + 5 + 5 + 5 = 20. With the first 5 already present, three ADD 5 instructions finish the calculation.
- **Starting from 5, how many ADD 5 operations reach 20?** 3. The accumulator visits 10, 15, then 20. That takes three additions.
- **Put the intermediate results of those additions in order.** 10 → 15 → 20. Starting from 5, adding 5 three times produces 10, then 15, then 20.
- **A fixed instruction set means the computer can perform…** Complex tasks made from supported instructions. Programs combine primitive instructions to implement more complex tasks.

### Level 5: A program is a recipe

- **What is a program in this introduction?** A sequence of instructions for a task. A program combines instructions into a sequence to carry out a task.
- **Match each building block.** Instruction → A primitive step; Program → A sequence of steps; Stored-program computer → Keeps a program for execution. Instructions are individual operations; programs combine them and can be stored for later execution.
- **What does the stored program contain in this course model?** Instructions and associated data. The lecturer describes programs using instructions and the data associated with them.
- **How can a rich application use a small instruction set?** By combining many simple instructions. An application may execute many instructions drawn from a much smaller collection of instruction types.

### Level 6: Program checkpoint

- **Build 5 × 3 using the same primitive ADD operation.** Accumulator 15, 2 steps. Starting with 5, two additions of 5 produce 15.
- **A new program must use…** Only instructions supported by the computer. The programmer builds new tasks using the instructions the machine supports.
- **You start at 5 and execute ADD 5 twice. What is the result?** 15. Start at 5, then add 5 to reach 10, and add 5 again to reach 15.
- **Storing and later executing a sequence of instructions makes the computer…** A stored-program computer. A stored-program computer retains a program and can execute it when requested.

Transcript reference times: 0:18, 6:16, 9:26. Read the full text in the Lecture notebook.

## 002 · Structure of a computer

The lecture presents four basic components: CPU, main memory, I/O devices, and system bus. They work together to execute programs and communicate with the outside world.

### Level 7: Meet the components

- **Give each component its job.** CPU → Executes instructions; Main memory → Holds active instructions and data; System bus → Carries signals between components. The CPU processes instructions, memory stores active information, and the bus enables communication.
- **Which item completes the list: CPU, memory, system bus, and…** I/O devices. Input and output devices form the fourth component in the introductory computer model.
- **How do components communicate in this model?** Through the system bus. The system bus acts as the transmission medium between components.
- **How many major components are introduced in the basic model?** 4. CPU, main memory, I/O devices, and system bus.

### Level 8: From code to execution

- **Arrange the simplified program journey.** Compile source code → Link the executable → Load into main memory → Execute on the CPU. Compilation and linking create an executable. The loader brings it into memory so the CPU can execute it.
- **Pair the tool with its job.** Compiler → Translates high-level source; Linker → Combines required code; Loader → Places the program in memory. These roles come from the C program example in the lecture.
- **A program in execution is called a…** Process. A process is a program in execution.
- **In the introduced process layout, which section holds instructions?** Text section. The text section contains executable instructions in the process layout shown.

### Level 9: Computer checkpoint

- **Launch the stored application.** Read executable from storage → Load program into RAM → Give CPU the starting instruction → Fetch and execute instructions. The operating system loads the executable and supplies a starting point for execution.
- **Which instruction can change the ordinary sequential path?** A jump instruction. The lecturer explicitly notes jumps as an exception to sequential instruction flow.
- **Separate storage from execution.** Secondary storage → Keeps the saved executable; Main memory → Holds the executing program; CPU → Fetches and executes instructions. The saved executable is on secondary storage; active execution uses memory and the CPU.
- **What is the system bus doing while the CPU communicates with memory?** Carrying information between them. The bus is the communication path between computer components.

Transcript reference times: 0:11, 9:38, 7:40. Read the full text in the Lecture notebook.

## 003 · Input and output devices

Input devices bring information into the computer. Output devices present information from the computer. Always think about the direction of the data.

### Level 10: Input or output?

- **Classify the devices.** Keyboard → Input; Monitor → Output; Network card → Input and output. A keyboard supplies input, a monitor presents output, and a network card sends and receives data.
- **A scanner sends a scanned image into the computer. It is acting as…** An input device. The information travels from the external source into the computer.
- **A printer receives a document from the computer. It is acting as…** An output device. Printing presents information from the computer as output.
- **Which question helps classify an I/O operation?** Which way is the data moving?. The direction of data relative to the computer determines input versus output.

### Level 11: Follow the data

- **Your computer writes a file to a USB drive. Relative to the computer, this is…** Output. The computer sends data outward to the drive.
- **Your computer reads a file from a USB drive. Relative to the computer, this is…** Input. The computer receives data from the drive.
- **Follow each data direction.** Computer → drive → Write / output; Drive → computer → Read / input; Network card → Can send and receive. Read and write describe opposite directions relative to the computer.
- **Why is a network card both input and output?** It sends and receives information. Network communication involves data traveling in both directions.

### Level 12: Device checkpoint

- **Connect each activity to a device.** Type a command → Keyboard; Hear a result → Speaker; Print a page → Printer. Typing supplies input; speakers and printers present output.
- **Your friend copies a movie onto a drive. For your friend’s computer, the drive is receiving…** Output. The friend’s computer writes data outward to the storage device.
- **You then read that movie from the drive. Your computer is receiving…** Input. Reading brings information from the drive into your computer.
- **Which device can move data in both directions?** A network card. The lecture uses a network card or modem as an example of bidirectional I/O.

Transcript reference times: 0:35, 1:54, 4:00. Read the full text in the Lecture notebook.

## 004 · RAM and ROM

RAM holds active instructions and data, and is volatile: its contents are not retained without power. Firmware needs nonvolatile storage so startup code is available before the operating system runs.

### Level 13: Memory that remembers

- **Match the memory property.** RAM → Volatile; supports reads and writes; ROM in the introductory model → Nonvolatile; read-only during normal use. The lesson contrasts volatile writable RAM with the simplified ROM model. Modern firmware may use rewritable flash.
- **Which memory loses its retained contents when power is removed?** RAM. RAM is volatile; nonvolatile storage retains information without continuous power.
- **What does active main memory hold in this lecture?** Instructions and data. The CPU fetches the executing program’s instructions and associated data from memory.
- **Why must startup firmware be nonvolatile?** It must survive power-off. The machine needs startup instructions available before it can load the operating system.

### Level 14: Boot the computer

- **Arrange the simplified startup sequence.** Power on → Firmware performs startup checks → Boot-loading code loads the OS → Operating system takes control. This captures the high-level sequence discussed in the lecture, without treating every modern firmware implementation as identical.
- **What does POST stand for?** Power-on self-test. POST is the power-on self-test associated with startup checks.
- **Before startup, the operating system is persistently stored on…** Secondary storage. Persistent secondary storage keeps the OS while the machine is off.
- **Match the startup roles.** Firmware → Available before the OS loads; Boot loader → Loads the operating system; RAM → Holds the running OS. Firmware starts the boot path; boot-loading code brings the OS into working memory.

### Level 15: Memory checkpoint

- **Choose the right home.** Startup firmware → Nonvolatile firmware storage; Saved operating system → Secondary storage; Active instructions and data → RAM. These locations separate startup availability, persistent files, and active working memory.
- **Why is volatile RAM alone unsuitable for keeping startup firmware?** The firmware would not survive power-off. Without persistent startup code, the computer could not begin loading its OS after losing power.
- **Put the simplified OS journey in order.** OS saved on secondary storage → Boot loader copies OS into RAM → OS runs and manages the system. The OS persists on storage, then is loaded for execution and system management.
- **Which statement is the useful memory distinction?** RAM is working memory; secondary storage persists files. RAM supports active execution, while secondary storage keeps files across power cycles.

Transcript reference times: 0:00, 8:58, 10:40. Read the full text in the Lecture notebook.

## 005 · Main memory and addressability

Memory consists of addressable cells. Address bits choose a cell; cell width determines how much data it holds. Capacity equals the number of cells times bits per cell. A CPU word and an addressable memory cell need not be the same size.

### Level 16: Addresses and cells

- **How many address bits select one of 256 cells?** 8. 2^8 = 256. Address bits select cells, rather than individual bits inside each cell.
- **Give each memory term its meaning.** Address → Identifier of a cell; Cell width → Bits stored at one address; Capacity → Total data storage. Separate the cell identifier, its width, and the total storage before calculating anything.
- **A memory has 256 cells of 16 bits each. Capacity in bytes?** 512. 256 × 16 bits ÷ 8 = 512 bytes.
- **A 32-bit CPU uses byte-addressable memory. One address identifies…** One byte. Byte addressability means each address identifies a byte, independent of CPU word size.

### Level 17: Size a memory chip

- **A byte-addressable 4 KiB memory needs how many address bits?** 12. 4 KiB = 4096 addressable bytes = 2^12 locations.
- **A 4 KiB memory is addressed in 32-bit words. How many addresses?** 1024. A 32-bit word is 4 bytes. 4096 ÷ 4 = 1024 words.
- **For that 1024-word memory, address width?** 10. 1024 = 2^10, so ten address bits select the word.
- **Connect the chip signals.** Address pins → Select a location; Data pins → Transfer cell contents; Chip select → Enable the chip. Address, data, and enable signals perform different jobs in a memory access.

### Level 18: Addressability checkpoint

- **An 8-bit address starts at zero. Highest address?** 255. The 256 possible addresses run from zero through 255.
- **A decoder with 5 inputs can select how many outputs?** 32. Five binary inputs encode 2^5 = 32 different selections.
- **A chip marked 1K × 8 stores how many bytes? Use K = 1024.** 1024. 1024 cells × 8 bits per cell = 1024 bytes.
- **Doubling cell width while keeping the same cell count changes…** Capacity, but not address width. The number of addresses stays fixed; each cell now contains twice as much data.

Transcript reference times: 0:17, 53:48, 104:38. Read the full text in the Lecture notebook.

## 006 · Byte ordering and endianness

Endianness determines the byte order of a multi-byte value at increasing addresses. Big endian stores the most significant byte first; little endian stores the least significant byte first. It does not reverse the order of array elements.

### Level 19: Meet byte ordering

- **Match the byte-order rule.** Big endian → Most significant byte at lowest address; Little endian → Least significant byte at lowest address. Endianness is about bytes inside a multi-byte object, ordered by memory address.
- **Store 0x12345678 in BIG endian, lowest address first.** 12 → 34 → 56 → 78. The most significant byte 12 is stored first, followed by 34, 56, and 78.
- **Store 0x12345678 in LITTLE endian, lowest address first.** 78 → 56 → 34 → 12. The least significant byte 78 is stored at the lowest address.
- **Does endianness change the numeric value of a correctly read integer?** No. A reader using the matching byte-order convention reconstructs the same integer.

### Level 20: Pack a memory word

- **Bytes at increasing addresses are 01 02 03 04. Read as big-endian 32-bit hex.** 01020304. Big endian treats the first byte as the most significant byte.
- **Read the same 01 02 03 04 bytes as little-endian 32-bit hex.** 04030201. Little endian treats 01 as the least significant byte, yielding 0x04030201.
- **A 32-bit value starts at byte address 100. Address of its last byte?** 103. Four bytes occupy addresses 100, 101, 102, and 103.
- **The address of this multi-byte object is usually…** Its lowest byte address. The object starts at its lowest address; significance of that byte depends on endianness.

### Level 21: Endianness checkpoint

- **Encode positive 13 as a 32-bit value; enter its conventional hex value.** 0000000D. 13 decimal is D hex. Leading zeros extend it to eight hex digits.
- **In little endian, which byte of that value is stored first?** 0D. Positive 13 has bytes 00 00 00 0D in significance order; the least significant byte 0D comes first.
- **An array holds two 32-bit integers A then B. Little endian…** Changes byte order inside A and B. Array element order stays A then B. Each integer uses the selected byte order.
- **Which object is unaffected by byte ordering?** A single 8-bit byte. A one-byte object has no ordering among multiple bytes to change.

Transcript reference times: 0:09, 45:48, 118:47. Read the full text in the Lecture notebook.

## 007 · Endianness practice

Solve byte-order problems by drawing addresses first and placing bytes second. A narrow read uses only the requested bytes. A wider read may include neighboring objects, so explicitly identify the bytes involved before reconstructing the number.

### Level 22: Trace memory bytes

- **Write 0xA1B2C3D4 in little endian at increasing addresses.** D4 → C3 → B2 → A1. Reverse the byte significance order, not the individual bits within a byte.
- **Those bytes are read as big-endian 32-bit data. Result in hex?** D4C3B2A1. A reader using the opposite convention assigns the first stored byte the highest significance.
- **Little-endian bytes 78 56 34 12 start at 200. Read 16 bits at 200 in little endian.** 5678. Only bytes at 200 and 201 are used; 78 is the low byte and 56 the high byte.
- **Read 16 bits at 202 in little endian from that same memory.** 1234. The two bytes at 202 and 203 are 34 and 12, giving 0x1234.

### Level 23: Mixed-size reads

- **Big-endian bytes 12 34 56 78 start at 200. Read 16 bits at 201 in big endian.** 3456. The selected bytes are 34 and 56. This example assumes the machine permits the unaligned read.
- **Bytes AA BB start at 300. Read 16 bits in little endian.** BBAA. AA occupies the least significant byte and BB the most significant byte.
- **How many bytes does a 64-bit integer occupy?** 8. 64 bits ÷ 8 bits per byte = 8 bytes.
- **Before a mixed-size memory read, first identify…** The exact addresses and bytes read. Draw the memory bytes and mark the read width. Type names alone do not determine the selected bytes.

### Level 24: Byte-order challenge

- **Enter the 8-digit hex representation of -1 in 32-bit two’s complement.** FFFFFFFF. All 32 bits are one in the two’s-complement representation of -1.
- **Does swapping endian convention change the byte pattern of 32-bit -1?** No, every byte is FF. The four bytes are identical, so reversing their order leaves the same pattern.
- **Big-endian bytes 00 00 00 0D are read as little endian. Hex value?** 0D000000. The final byte becomes the most significant byte in the mismatched read.
- **Byte characters A then B in a char array appear in what order?** A then B under either endian convention. Each character occupies one byte. Endianness does not reverse array element order.

Transcript reference times: 0:16, 25:16, 86:18. Read the full text in the Lecture notebook.

## 008 · System bus

A system bus carries addresses, data, and control signals. In the introductory CPU-memory model, the CPU chooses a memory address, data travels toward or away from memory, and control signals describe the transaction. Individual control lines can have different directions.

### Level 25: Address, data, control

- **Sort the bus responsibilities.** Address bus → Identifies the location; Data bus → Carries the value; Control bus → Describes the transaction. Keep where, what, and how separate when tracing a bus transaction.
- **For a memory read, the data moves…** Memory to CPU. A read returns the contents of the selected memory location to the processor.
- **For a memory write, the data moves…** CPU to memory. A write provides a value from the processor to the selected memory location.
- **A 16-bit address bus can identify how many byte locations?** 65536. 2^16 = 65,536 distinct addresses. The problem explicitly specifies byte locations.

### Level 26: Route a bus transaction

- **Match the register to its bus.** MAR → Address bus; MDR → Data bus. The memory address register holds the location; the memory data register holds the transferred value.
- **Trace a simplified memory read.** Place address on address bus → Assert read control → Memory drives data bus → CPU captures the value. A read requires a valid address and read request before the CPU captures returned data.
- **Trace a simplified memory write.** Place address on address bus → Place value on data bus → Assert write control → Memory stores the value. These conceptual steps describe a write; real electrical timing depends on the chip interface.
- **The direction of all control signals is…** Specified per signal. Read/write commands may leave the CPU while ready/interrupt responses can travel toward it.

### Level 27: Bus checkpoint

- **A 16-bit data bus transfers how many bytes per full-width transfer?** 2. 16 bits per transfer ÷ 8 bits per byte = 2 bytes.
- **How many full-width 16-bit transfers move 8 bytes?** 4. 8 bytes ÷ 2 bytes per transfer = 4 transfers, assuming alignment and no partial transfers.
- **In this simple CPU-memory model, the address bus is…** Driven from CPU toward memory. The CPU selects a location by driving the memory address.
- **Adding address lines mainly increases…** The addressable location count. Each extra address bit doubles the possible locations, given the same addressability.

Transcript reference times: 0:15, 21:57, 44:27. Read the full text in the Lecture notebook.

## 009 · Memory interfacing and expansion

Memory expansion has two independent directions. Width expansion places chips in parallel to supply more bits per addressed cell. Depth expansion adds banks and uses extra address bits to select a bank. Chip-select polarity must be respected.

### Level 28: Connect a memory chip

- **Choose the expansion direction.** More bits per cell → Width expansion; More cells → Depth expansion; Enable one bank → Chip selection. Width and depth multiply independently to produce the desired capacity.
- **Build 32 × 16 memory from 16 × 8 chips. Total chips?** 4. Depth needs 32/16 = 2 banks. Width needs 16/8 = 2 chips per bank. Total = 4.
- **In that design, how many chips are in each bank?** 2. Two 8-bit chips in parallel supply one 16-bit cell.
- **An active-low chip-select is asserted at…** 0. The active-low notation means a low logic level enables the chip.

### Level 29: Expand width and depth

- **Build 4K × 16 from 1K × 8 chips. K = 1024. Chip count?** 8. Four banks increase depth and two parallel chips increase width: 4 × 2 = 8.
- **How many address bits select one of four banks?** 2. Four bank choices require log2(4) = 2 bits.
- **A 1K-cell chip has how many internal address inputs?** 10. 1K = 1024 = 2^10 internal locations.
- **In width expansion, parallel chips share…** The same cell address. The chips jointly supply different bit slices of the same logical memory cell.

### Level 30: Expansion checkpoint

- **High-order address bits used for bank selection produce…** Contiguous address regions per bank. Holding the upper bank bits fixed leaves a contiguous range of lower-bit addresses in that bank.
- **Low-order bank-select bits produce…** Consecutive addresses distributed across banks. The low bits change fastest, selecting successive banks for successive addresses.
- **Eight 256 × 8 chips arranged as 4 banks of 2 chips form how many cells?** 1024. Depth is 4 × 256 = 1024 cells; parallel width is 2 × 8 = 16 bits per cell.
- **Capacity of that 1024 × 16 memory in bytes?** 2048. 1024 cells × 16 bits ÷ 8 = 2048 bytes.

Transcript reference times: 0:14, 57:04, 97:01. Read the full text in the Lecture notebook.

## 010 · Memory interleaving GATE practice

Low-order interleaving distributes consecutive addresses across banks. For N banks, bank = address mod N and row = floor(address/N), using the stated address unit. Parallelism is possible when separate banks can serve independent requests.

### Level 31: Meet memory banks

- **Four low-order-interleaved banks: which bank gets address 13?** 1. 13 mod 4 = 1. Here addresses are word addresses and banks are numbered 0 through 3.
- **What row within that bank holds word address 13?** 3. floor(13/4) = 3. Address 13 is bank 1, row 3.
- **Match word addresses in four-bank low-order interleaving.** Address 4 → Bank 0; Address 5 → Bank 1; Address 6 → Bank 2; Address 7 → Bank 3. The remainder after dividing the word address by four selects its bank.
- **Why interleave consecutive words?** Potential parallel access across banks. Separate banks can overlap independent accesses under the specified memory timing model.

### Level 32: Trace interleaved accesses

- **Eight low-order banks: bank for word address 29?** 5. 29 mod 8 = 5, so bank five serves this word.
- **Eight low-order banks: row for word address 29?** 3. floor(29/8) = 3. Recombine row × 8 + bank to check: 24 + 5 = 29.
- **Four banks: word address 14 is bank 2, row…?** 3. 14 = 3 × 4 + 2, so its row is three.
- **Word addresses 0, 4, 8, 12 on four low-order banks…** All use bank 0. Every address is a multiple of four, so all have remainder zero. Stride can defeat bank parallelism.

### Level 33: Interleaving challenge

- **Four banks, 16 words per bank, high-order bank selection. Bank for address 35?** 2. Each bank owns a contiguous 16-word range. floor(35/16) = 2.
- **Under that high-order mapping, local row for address 35?** 3. 35 mod 16 = 3. Bank two covers addresses 32 through 47.
- **Four independently available banks can each serve one word simultaneously. Max words per parallel group?** 4. One word from each of four independent banks yields four simultaneous words, under the stated assumption.
- **Before applying bank = address mod N, verify…** Address units and bank mapping. Byte addresses and word addresses can select different banks; the mapping and address unit must be stated.

Transcript reference times: 0:07, 55:08, 128:01. Read the full text in the Lecture notebook.

## 011 · Registers and status flags

Registers hold temporary CPU state. Condition flags summarize an operation. Carry describes unsigned overflow; signed overflow describes a result outside the signed range. The same bit pattern can be interpreted as signed or unsigned.

### Level 34: Meet CPU registers

- **Match each CPU register.** PC → Address of the next instruction; IR → Current instruction; MAR → Memory address; MDR → Memory data. These registers distinguish control flow, instruction contents, and the two sides of a memory transaction.
- **The zero flag is set when the result…** Equals zero. The zero flag tests the resulting bit pattern for all zero bits.
- **8-bit unsigned addition: 255 + 1. Stored result?** 0. 256 needs nine bits. Keeping the low eight bits produces zero.
- **For that addition, carry is…** 1. An extra ninth bit is produced, so the unsigned carry flag is one.

### Level 35: Trace condition flags

- **8-bit signed addition: 127 + 1. Signed stored result?** -128. The bit pattern is 10000000, which represents -128 in 8-bit two’s complement.
- **127 + 1 in 8-bit signed arithmetic sets overflow because…** Two positive inputs produced a negative signed result. 128 exceeds the maximum signed 8-bit value 127. Carry and signed overflow are different tests.
- **For 255 + 1 interpreted as -1 + 1, signed overflow is…** 0. -1 + 1 = 0 fits the signed range, even though unsigned arithmetic produces a carry.
- **Pair the flag with its purpose.** Carry → Unsigned range exceeded; Overflow → Signed range exceeded; Zero → Result is zero; Sign → Most significant result bit. Interpret each flag using its definition and the operand width.

### Level 36: Registers checkpoint

- **Even-parity flag: result bits 00000011 have two ones. Parity flag?** 1. Under the stated even-parity convention, an even number of one bits sets the parity flag. The exact flag convention belongs to the ISA.
- **8-bit addition 0x0F + 0x01 carries out of the low four-bit nibble. Auxiliary carry?** 1. Auxiliary carry records carry from bit 3 to bit 4. It is different from carry out of the whole eight-bit result.
- **8-bit -128 + -1 overflows because…** The exact result -129 is below -128. Signed overflow occurs when the exact mathematical value lies outside the representable range.
- **A branch instruction may use flags to…** Choose whether to change PC. Conditional control flow tests status flags produced by previous operations.

Transcript reference times: 0:40, 79:45, 149:13. Read the full text in the Lecture notebook.

## 012 · Instruction set architecture

The ISA defines the programmer-visible machine: operations, registers, operand formats, addressing behavior, and instruction encodings. Different hardware organizations can implement the same ISA.

### Level 37: Instruction-set choices

- **Which belongs to the ISA?** Available instructions and their behavior. An instruction set defines what machine instructions do and how they are represented.
- **Match the design layer.** Instruction behavior → Architecture; Physical datapath implementation → Organization; Register names visible to code → ISA. Programmer-visible behavior belongs to the architecture; internal implementation belongs to organization.
- **Can two different CPU implementations run the same ISA?** Yes, if both implement its required behavior. Different organizations may expose the same instruction behavior and binary encodings.
- **An instruction operand identifies…** A value or a location used by the operation. Operands may be immediate values, registers, or memory locations, according to the instruction.

### Level 38: Decode instruction behavior

- **Match common instructions.** LOAD → Memory to register; STORE → Register to memory; ADD → Arithmetic addition; BRANCH → Control-flow change. The instruction semantics determine its effect, independently of a particular binary opcode.
- **Follow a simplified load-and-add program.** Load first value → Load second value → Add register values → Store the result. The source operands must be available before the arithmetic result can be written back.
- **An ISA has 16 registers. Bits to name one register?** 4. log2(16) = 4 bits select any of the sixteen registers.
- **Immediate operand means…** The value is encoded in the instruction. An immediate value is carried directly in the instruction encoding.

### Level 39: ISA checkpoint

- **Match the classic operand architecture.** Stack → Operands implicitly on top of stack; Accumulator → One operand implicitly in accumulator; Register-memory → Permits a register and memory operand; Register-register → Arithmetic uses register operands. Operand architectures differ in where values are found and which operands must be explicitly encoded.
- **Toy stack ISA: PUSH 3, PUSH 5, ADD pops both and pushes their sum. Top value?** 8. ADD uses two implicit stack operands, computes 3 + 5, and pushes 8.
- **Accumulator ADD [100], with accumulator 7 and M[100]=5, gives…** Accumulator = 12. The accumulator is the implicit source and destination, so 7 + 5 replaces its old value.
- **Why can a stack ADD be a zero-address instruction?** Both operands are implicit on the stack. Zero-address refers to the count of explicitly encoded operand addresses, not absence of an operation.

Transcript reference times: 0:07, 51:29, 114:17. Read the full text in the Lecture notebook.

## 013 · RISC and CISC

The introductory RISC/CISC comparison describes design tendencies. Classical RISC emphasizes simple instructions and register operations with explicit loads/stores. Classical CISC permits richer operations and addressing. Modern implementations can mix these ideas.

### Level 40: Compare instruction styles

- **Match the classic design tendency.** RISC → Simpler operations and regular formats; CISC → Richer operations and addressing. These labels describe traditional tendencies rather than universal laws for every modern processor.
- **In a load-store ISA, arithmetic operands are typically…** Registers. Explicit load/store instructions handle memory; arithmetic operates on register values.
- **A fixed-length format primarily helps…** Predictable instruction boundaries. A regular length makes instruction boundaries easier to locate and decode.
- **Is every RISC instruction guaranteed one clock cycle?** No. Execution latency depends on implementation, operation, and memory behavior.

### Level 41: Classify design choices

- **Compute a memory sum in a simple load-store model.** Load A into R1 → Load B into R2 → Add R1 and R2 → Store sum to memory. Memory values are first transferred to registers; arithmetic and write-back follow.
- **A memory-to-memory add is closer to the classic…** CISC tendency. A rich instruction combining memory accesses and arithmetic is characteristic of the classic CISC comparison.
- **Variable instruction length means…** Instruction encodings may occupy different byte counts. The encoded instruction length varies according to its format or operation.
- **Match the consequence.** Regular fields → Simpler decoding structure; Complex operation → May combine multiple primitive steps; Load-store rule → Explicit memory transfer instructions. Compare concrete format and operand rules, rather than treating the names as performance guarantees.

### Level 42: RISC/CISC checkpoint

- **A toy load-store machine needs two loads, one add, one store. Instruction count?** 4. Count the explicitly required operations: 2 + 1 + 1 = 4.
- **Fewer instructions always mean faster execution?** No, latency and implementation matter. Instruction count alone does not account for cycles per instruction, clock period, or memory stalls.
- **A modern CPU can decode complex ISA instructions into simpler internal operations?** Yes. An implementation may use internal operations while preserving the architectural instruction behavior.
- **The useful comparison starts with…** Actual formats, operand rules, and execution costs. Concrete design details and the workload determine the practical result.

Transcript reference times: 0:11, 37:27, 73:44. Read the full text in the Lecture notebook.

## 014 · Instruction formats

An instruction format partitions a fixed bit budget among opcode and operand fields. A field of k bits represents at most 2^k alternatives. Sum the required field widths before counting the remaining opcode space.

### Level 43: Slice instruction fields

- **16-bit instruction: two 4-bit register fields. Remaining opcode bits?** 8. 16 - 4 - 4 = 8 bits remain for the opcode.
- **That 8-bit opcode field can encode how many operations?** 256. An 8-bit field has 2^8 = 256 binary patterns.
- **Match field width to choices.** 3 bits → 8 choices; 4 bits → 16 choices; 5 bits → 32 choices. A k-bit binary field has exactly 2^k distinct bit patterns.
- **If operand fields grow in a fixed-length format, opcode space…** May shrink. Larger operand fields leave fewer bits for the opcode unless the format is redesigned.

### Level 44: Count encodings

- **32-bit instruction: opcode 8, two registers of 5 bits. Immediate bits?** 14. 32 - 8 - 5 - 5 = 14 bits remain for the immediate.
- **A register file has 64 registers. Bits per register field?** 6. 64 = 2^6, so six bits select a register.
- **Unsigned 6-bit immediate: maximum value?** 63. An unsigned k-bit field ranges from zero through 2^k - 1.
- **Signed 6-bit two’s-complement immediate: minimum value?** -32. The minimum signed value is -2^(6-1) = -32.

### Level 45: Format checkpoint

- **24-bit instruction with 6-bit opcode and three equal register fields. Width per field?** 6. 24 - 6 = 18 operand bits; 18 / 3 = 6 bits per register field.
- **Those 6-bit register fields address how many registers?** 64. Six register-selection bits provide 2^6 = 64 choices.
- **Encoding 20 operations needs at least…** 5 opcode bits. Four bits provide only 16 patterns; five provide 32.
- **Unused opcode patterns are…** Available encodings, not extra physical instruction bits. A field can have reserved patterns even when its width remains fixed.

Transcript reference times: 0:08, 50:39, 90:59. Read the full text in the Lecture notebook.

## 015 · Expanding opcode technique

An expanding opcode uses more opcode bits when fewer operand bits are needed. Reserve short opcode prefixes before allocating longer ones. A short opcode cannot also be the prefix of a longer opcode in a prefix-decoded format.

### Level 46: Grow an opcode tree

- **Why expand an opcode?** Reuse freed operand bits for additional operations. Formats with fewer operands can devote more instruction bits to the operation code.
- **Two-bit opcode prefixes: how many roots?** 4. Two root bits give 2^2 = 4 prefixes.
- **Reserve two roots for short opcodes. Expand each remaining root by two bits. Long opcodes?** 8. Two free roots × 2^2 extensions each = 8 long opcodes.
- **Can short opcode 00 coexist with long opcode 000 in this prefix scheme?** No. The decoder would recognize 00 before distinguishing 000. Prefix allocations must be unambiguous.

### Level 47: Allocate opcode space

- **Allocate an expanding-opcode space.** List root prefixes → Reserve short instructions → Expand unreserved prefixes → Assign long instruction codes. Allocate short forms first, then subdivide only the remaining prefix space.
- **Three root bits, five roots used short, two extension bits. Maximum long forms?** 12. Eight roots minus five reserved = three free. Three × four = twelve long forms.
- **One unused 4-bit root expands by 4 more bits. New long patterns?** 16. The unused root is fixed; four additional bits allow 16 extensions.
- **Match the opcode-tree action.** Reserve root → Keep a short opcode; Expand root → Create longer opcode forms; Avoid prefix collision → Make decoding unambiguous. A tree view exposes which prefixes remain available for expansion.

### Level 48: Opcode checkpoint

- **Eight root bits; 200 short forms reserved. Remaining roots?** 56. 2^8 - 200 = 256 - 200 = 56 unused prefixes.
- **Expand those 56 roots by 8 bits. Long forms?** 14336. 56 × 256 = 14,336 possible long opcode patterns.
- **More long forms are possible when…** Fewer root prefixes are reserved short. Unreserved root prefixes are the resource available for longer encodings.
- **Which counts the long forms correctly?** Free roots × extensions per root. Each unreserved prefix independently supports its complete extension space.

Transcript reference times: 0:10, 66:30, 117:19. Read the full text in the Lecture notebook.

## 016 · Expanding opcode GATE practice

Encoding problems are bit-budget and prefix-allocation problems. State how many registers or addresses each operand field represents. Count consumed prefixes at each format length before allocating the next format.

### Level 49: Read an opcode problem

- **16-bit instruction; two 4-bit operands. Root opcode width?** 8. The two operand fields consume eight bits, leaving eight root opcode bits.
- **100 two-operand operations use 8-bit roots. Unused roots?** 156. The root space has 256 patterns; 256 - 100 = 156 remain.
- **One-operand formats reuse four freed bits. Maximum one-operand operations?** 2496. 156 remaining roots × 16 extensions = 2496 operations, assuming no zero-operand forms reserved yet.
- **Why state which formats are reserved first?** They consume prefix space needed by longer formats. Maximum counts depend on previous allocations, not only total instruction width.

### Level 50: Solve encoding constraints

- **Root width 4: reserve 10 short forms, expand remaining roots by 3 bits. Long forms?** 48. (16 - 10) × 8 = 48 extended forms.
- **Of those 48 extended forms, reserve 40. Remaining intermediate prefixes?** 8. 48 - 40 = 8 prefixes remain available for further expansion.
- **Expand those 8 prefixes by 2 bits. Zero-operand forms?** 32. 8 remaining prefixes × 4 extensions = 32 longer forms.
- **A format needs 32 register choices in each of two operands. Operand bits total?** 10. Each register needs five bits; two fields require ten bits.

### Level 51: Opcode challenge

- **24-bit format: two registers from 32 choices and opcode only. Opcode bits?** 14. 24 - 5 - 5 = 14 bits remain for the opcode.
- **A 7-bit opcode field has how many possible codes?** 128. 2^7 = 128 distinct binary codes.
- **An expanding opcode problem is underspecified if it omits…** Format widths or prefix-allocation rules. Without field sizes and decoding rules, multiple different encoding capacities are possible.
- **The best final check is…** Verify bit budgets and no prefix collisions. Both the number of bits and the allocation of their patterns must be consistent.

Transcript reference times: 0:08, 36:45, 78:43. Read the full text in the Lecture notebook.

## 017 · Instruction types and ALU operations

The ALU performs arithmetic and bitwise operations. AND, OR, and XOR operate independently at each bit position. Shifts move bits, and a fixed-width result discards bits beyond its width. Always state signedness and width.

### Level 52: Meet the ALU

- **Match ALU operations.** AND → 1 only when both bits are 1; OR → 1 when at least one bit is 1; XOR → 1 when bits differ. Bitwise logic applies its truth table separately to each pair of corresponding bits.
- **Bitwise AND: decimal 12 (1100) AND 10 (1010). Result?** 8. 1100 AND 1010 = 1000 binary = 8 decimal.
- **Bitwise OR: 12 OR 10. Result?** 14. 1100 OR 1010 = 1110 binary = 14 decimal.
- **Bitwise XOR: 12 XOR 10. Result?** 6. 1100 XOR 1010 = 0110 binary = 6 decimal.

### Level 53: Execute arithmetic and logic

- **Four-bit NOT of 3 (0011). Unsigned result?** 12. Within four bits, 0011 becomes 1100 = 12. Width is essential for NOT.
- **8-bit logical left shift of 0x90 by one. Decimal result?** 32. 10010000 shifts to 00100000 after discarding the high bit, giving 32.
- **8-bit logical right shift of 0x80 by one. Decimal result?** 64. Logical right shift inserts zero: 10000000 becomes 01000000 = 64.
- **Arithmetic right shift of a negative two’s-complement value fills with…** Its sign bit. Arithmetic right shift extends the sign in the stated two’s-complement model.

### Level 54: ALU checkpoint

- **8-bit arithmetic right shift of -8 by one. Signed result?** -4. 11111000 becomes 11111100, representing -4.
- **Unsigned 8-bit 250 + 10, retaining only eight bits. Result?** 4. 260 mod 256 = 4. The ninth bit is discarded from the stored result.
- **X XOR X is…** Zero. Each bit XOR itself is zero, so every result bit is zero.
- **A mask used with AND can…** Clear selected bits. Zero mask bits clear the corresponding result bits; one mask bits preserve the input bits.

Transcript reference times: 0:16, 85:32, 119:41. Read the full text in the Lecture notebook.

## 018 · Branch instructions

A branch changes control flow by updating the program counter. A relative target requires a defined base, usually the next instruction address in these problems, and a displacement with a stated unit. Conditional branches test a condition before choosing the target.

### Level 55: Change control flow

- **A taken branch directly changes…** The program counter. The program counter determines which instruction is fetched next.
- **Relative branch: next PC = 104, signed byte offset = -12. Target?** 92. Use the explicitly stated next-PC base: 104 + (-12) = 92.
- **Next PC = 1004; displacement = 3 instructions, each 4 bytes. Target?** 1016. Convert instruction displacement to bytes: 1004 + 3 × 4 = 1016.
- **A not-taken conditional branch goes to…** The sequential next instruction. When the condition is false, control proceeds to the normal sequential next PC.

### Level 56: Trace branch targets

- **Match control-flow terms.** Unconditional branch → Always chooses its target; Conditional branch → Chooses target only if condition holds; Relative target → Base plus displacement. Distinguish whether the branch is taken from how its target address is computed.
- **Next PC = 208, byte offset = 16. Target?** 224. 208 + 16 = 224 under the stated next-PC-relative convention.
- **Next PC = 208, byte offset = -8. Target?** 200. A negative displacement branches backward: 208 - 8 = 200.
- **BRANCH IF ZERO is taken when zero flag equals…** 1. A set zero flag indicates the preceding flag-producing result was zero.

### Level 57: Branch checkpoint

- **Instructions are 4 bytes. Sequential successor to instruction at 500?** 504. A four-byte instruction occupies bytes 500 through 503; its successor starts at 504.
- **From next PC 504, branch target 480. Signed byte displacement?** -24. Displacement = target - base = 480 - 504 = -24.
- **Branch offsets given in words must be…** Converted to address units before adding. The displacement scale must agree with the program counter’s address unit.
- **For an absolute jump, the target is…** Specified directly by the instruction’s target mechanism. An absolute target is not computed by adding a signed displacement to a relative base.

Transcript reference times: 0:06, 37:32, 56:47. Read the full text in the Lecture notebook.

## 019 · Machine instruction GATE practice

Trace machine programs one instruction at a time. Keep register values, flags, and PC in separate columns. Apply the stated operand width, addressing convention, and branch base; never mix a value with its address.

### Level 58: Trace an instruction sequence

- **Evaluate a register calculation in dependency order.** Set R1 = 7 → Set R2 = 5 → Set R3 = R1 + R2 → Store R3. An operation can only use register values established by preceding instructions.
- **R1 = 7, R2 = 5, ADD R3,R1,R2. R3?** 12. This explicitly defined three-register ADD assigns 7 + 5 = 12 to R3.
- **Then SUB R3,R3,2. R3?** 10. The updated register value is 12 - 2 = 10.
- **STORE R3,[100] writes…** R3’s value to address 100. A store writes data to a location; brackets denote memory at that address in this toy notation.

### Level 59: Solve instruction puzzles

- **8-bit unsigned R = 254. Increment it three times with wraparound. Result?** 1. 254 → 255 → 0 → 1, retaining only eight bits on each increment.
- **Next PC 84, taken relative branch displacement -16 bytes. New PC?** 68. The target is 84 - 16 = 68 using the stated relative base.
- **A compare operation is often used to…** Set flags without keeping a subtraction result. In the defined comparison model, subtraction-derived flags guide later conditional branches.
- **Separate value from location.** R1 = 100 → Register contains numeric value 100; M[100] = 7 → Memory at address 100 contains 7; PC = 100 → Next instruction address is 100. The same number can mean data or an address depending on the register and operation.

### Level 60: Instruction challenge

- **Memory M[40]=9. LOAD R1,[40], then ADD R1,R1,3. Final R1?** 12. The load returns the stored value 9; addition then produces 12.
- **A loop decrements R from 3 to 0, branching while nonzero. Decrements executed?** 3. Values after decrement are 2, 1, 0. The third decrement reaches the exit condition.
- **For a trace, update the PC…** According to each instruction’s stated behavior. Sequential instructions and taken branches produce different next PCs.
- **A convincing trace includes…** Register values, flag results, and branch decisions. Intermediate state exposes arithmetic width errors and incorrect branch assumptions.

Transcript reference times: 0:09, 20:15, 59:23. Read the full text in the Lecture notebook.

## 020 · Instruction execution cycle

A simplified instruction cycle fetches an instruction, decodes it, and executes its operation. Register-transfer notation states where each value moves. Memory access and execution details vary by instruction and CPU organization.

### Level 61: Fetch, decode, execute

- **Order the main instruction-cycle stages.** Fetch → Decode → Execute. The CPU must obtain an instruction before interpreting and carrying out its operation.
- **Match fetch registers.** PC → Instruction address; MAR → Address sent to memory; MDR → Returned memory data; IR → Fetched instruction. The instruction address and its returned binary contents flow through different registers.
- **MAR ← PC copies…** The instruction address into MAR. The transfer prepares the address for the instruction-fetch memory transaction.
- **IR ← MDR during fetch loads…** The fetched instruction. After memory returns instruction bits into MDR, those bits can be latched into IR.

### Level 62: Trace register transfers

- **Trace this simplified instruction fetch.** MAR ← PC → MDR ← M[MAR] → IR ← MDR → Decode IR. This toy model assumes memory has completed the read before the IR transfer.
- **PC = 100; instruction size = 4 bytes. Sequential updated PC?** 104. Adding the instruction byte length gives the next sequential instruction address.
- **Decoding identifies…** The operation and operand fields. The decoder interprets the instruction format to select required control actions.
- **A memory-operand instruction may need…** Additional operand memory access after instruction fetch. Instruction fetch and operand accesses are separate transactions.

### Level 63: Execution checkpoint

- **Toy LOAD uses one memory read for fetch and one for its operand. Reads total?** 2. Count the instruction read and the data read separately: two reads.
- **Register-transfer notation A ← B means…** Copy B’s value into A. The arrow points toward the destination register receiving the value.
- **Do all instructions require identical execution transfers?** No. Loads, arithmetic, stores, and branches require different execution actions.
- **After completing an ordinary instruction, the CPU normally…** Starts fetching the next instruction. The instruction cycle repeats, using the updated PC to fetch the next instruction.

Transcript reference times: 1:40, 63:22, 124:31. Read the full text in the Lecture notebook.

## 021 · Addressing modes I

An addressing mode explains how an instruction obtains its operand. Immediate data is in the instruction; direct addressing names a memory location; indirect addressing first reads a pointer. Effective address is a location, distinct from the data stored there.

### Level 64: Locate an operand

- **Match the operand rule.** Immediate → Value encoded in instruction; Direct → Address encoded in instruction; Register → Value held in named register. These modes tell the CPU where to obtain the operand value.
- **Immediate operand #42: operand value?** 42. The number 42 is carried directly in the instruction, so no data-memory lookup is needed.
- **Direct address 200, M[200]=42. Effective address?** 200. Direct addressing uses the encoded address itself as the effective address.
- **Same direct addressing example: operand value?** 42. The operand is the content at the effective address, M[200] = 42.

### Level 65: Calculate effective addresses

- **Memory indirect: instruction address field 200, M[200]=400. Effective address?** 400. The content of the named location is the pointer to the actual operand.
- **Also M[400]=99. Operand value for that indirect access?** 99. First read pointer 400 from M[200], then read the operand 99 from M[400].
- **Memory-indirect operand read needs how many data-memory reads, excluding instruction fetch?** 2. One read obtains the pointer and a second obtains the data operand.
- **Immediate mode requires data-memory reads for the operand?** No, excluding instruction fetch. The operand is already part of the fetched instruction.

### Level 66: Addressing checkpoint I

- **Register mode: R3=17. Operand value?** 17. Register mode uses the register content directly as the operand.
- **Register indirect: R3=80, M[80]=12. Effective address?** 80. The register content is interpreted as an address, not as the operand itself.
- **That register-indirect example: operand value?** 12. The actual operand is M[R3] = M[80] = 12.
- **The effective address is…** The final memory location used for the operand. Keep the address separate from the value read from that address.

Transcript reference times: 0:43, 57:04, 110:24. Read the full text in the Lecture notebook.

## 022 · Addressing modes II

Displacement-based modes combine a register value with an instruction field. Base-plus-displacement, indexed, and PC-relative examples all require clear units. Autoincrement and autodecrement also update their address register by the operand size.

### Level 67: Compare addressing modes

- **Base register 100, byte displacement 12. Effective address?** 112. Base-plus-displacement gives 100 + 12 = 112.
- **Next PC 104, relative byte displacement 16. Target address?** 120. Using the stated next-PC base: 104 + 16 = 120.
- **Array base 1000, index 3, element size 4 bytes. Element address?** 1012. Scaled indexing gives base + index × size = 1000 + 3 × 4.
- **Match mode behavior.** Base displacement → Register plus offset; Scaled index → Base plus index times element size; PC relative → Defined PC base plus displacement. The formulas look similar but the registers, scaling, and reference base must be identified.

### Level 68: Trace operand access

- **Postincrement: R=500, operand size 4 bytes. Address used for access?** 500. Postincrement uses the old register value for the access before updating it.
- **After that postincrement access, new R?** 504. Increment the byte address by the four-byte operand size.
- **Predecrement: R=500, operand size 4 bytes. Address used?** 496. Predecrement updates first: 500 - 4 = 496, then accesses that address.
- **Why does the increment amount depend on operand size?** To move to the next operand in byte-addressable memory. A four-byte operand advances by four byte addresses, rather than by one.

### Level 69: Addressing checkpoint II

- **Base 4096, signed byte displacement -20. Effective address?** 4076. 4096 + (-20) = 4076. Negative displacement refers to an earlier byte address.
- **Array base 200, index 5, 8-byte elements. Effective address?** 240. Base plus scaled index: 200 + 5 × 8 = 240.
- **A PC-relative formula must specify…** Which PC value is the base. Different instruction definitions can use different PC reference points.
- **Register indirect differs from register direct because…** It treats register contents as an address. Register direct uses the value itself; register indirect dereferences the value as an address.

Transcript reference times: 0:22, 63:34, 125:10. Read the full text in the Lecture notebook.

## 023 · Addressing modes III

To compare addressing modes, trace the pointer calculation and count memory transactions. State whether instruction fetch is included. A register access is not a data-memory read, while memory indirection adds a pointer read.

### Level 70: Combine addressing modes

- **Direct memory operand: reads including one instruction fetch?** 2. One instruction read plus one operand read equals two reads under the stated toy model.
- **Memory-indirect operand: reads including one instruction fetch?** 3. Fetch the instruction, read the pointer, then read the pointed-to data: three reads.
- **Register-indirect operand: data-memory reads excluding fetch?** 1. The pointer is already in a register, so only the final data location needs a memory read.
- **Immediate and register operands share which property?** No data-memory read is needed for the operand. The value is already in the instruction or register; instruction fetch is a separate matter.

### Level 71: Count memory references

- **R=100, displacement 8, M[108]=300, M[300]=7. Indirect through R+8: effective address?** 300. First form pointer location 108, then dereference M[108] to obtain effective address 300.
- **For that indirect-through-R+8 example, operand value?** 7. Once the effective address is 300, the operand is M[300] = 7.
- **Data-memory reads for that operand?** 2. Read the pointer at 108, then the operand at 300.
- **Solve an indirect operand.** Compute pointer location → Read the pointer → Use pointer as effective address → Read operand value. Do not stop at the intermediate pointer location; one more dereference obtains the data.

### Level 72: Addressing challenge

- **Postincrement byte access, R=63. New R after access?** 64. A one-byte operand advances the byte address by one.
- **Postincrement 8-byte access, R=64. New R?** 72. The address advances by eight bytes to the next eight-byte operand.
- **Cache hits change the architectural effective address?** No. A cache changes how an access is served, not the program’s architectural memory address.
- **A memory-reference count is useful only when…** Fetch inclusion and the transaction model are stated. Instruction fetch, pointer reads, data reads, and writes must be counted consistently.

Transcript reference times: 0:27, 42:32, 82:44. Read the full text in the Lecture notebook.

## 024 · Direct-mapped cache

A direct-mapped cache gives each memory block one possible line. For byte addresses: block = floor(address/block size), index = block mod line count, tag = floor(block/line count). The low address bits locate the byte within its block.

### Level 73: Meet cache blocks

- **1 KiB data cache, 16-byte blocks. Number of lines?** 64. 1024 / 16 = 64 cache lines. Capacity here excludes metadata.
- **16-byte blocks need how many byte-offset bits?** 4. log2(16) = 4 low address bits select the byte inside the block.
- **64 direct-mapped lines need how many index bits?** 6. log2(64) = 6 bits select a cache line.
- **32-bit byte addresses, 64 lines, 16-byte blocks. Tag bits?** 22. 32 - 6 index bits - 4 offset bits = 22 tag bits.

### Level 74: Split tag, index, offset

- **Match cache address fields.** Offset → Byte within a block; Index → Cache line or set; Tag → Distinguishes mapped memory blocks. The tag distinguishes different memory blocks that share an index.
- **Byte address 100, 16-byte blocks. Memory block number?** 6. floor(100/16) = 6. The block contains addresses 96 through 111.
- **Address 100 in 16-byte blocks. Byte offset?** 4. 100 mod 16 = 4 bytes into its block.
- **Memory block 6 in a four-line direct cache. Line index?** 2. 6 mod 4 = 2 selects line two.

### Level 75: Direct-map checkpoint

- **Predict each access: 2 sets, 1 way(s), LRU. The cache starts empty. Numbers are memory BLOCK numbers.** MISS · MISS · MISS · MISS · HIT. Map each block to block mod sets. A resident block hits. On a miss, fill an empty way or evict the oldest entry under the stated policy. LRU updates recency on hits; FIFO does not.
- **Block 6 in a four-line cache. Tag value?** 1. floor(6/4) = 1; index is 2. Recombine 1 × 4 + 2 = 6.
- **A hit requires…** Valid line and matching tag. The selected line must contain valid data from the requested memory block.
- **Two blocks sharing one direct-mapped line can…** Evict each other repeatedly. A direct-mapped line has only one slot, so conflicting blocks replace each other.

Transcript reference times: 0:26, 33:10, 97:46. Read the full text in the Lecture notebook.

## 025 · Direct-mapped cache practice

Trace a direct cache using memory block numbers, not raw byte addresses. Start with invalid lines, map each block, compare its tag, and update the line on a miss. Repeated accesses only hit if no conflicting block replaced the old one.

### Level 76: Map a sequence of addresses

- **Predict each access: 4 sets, 1 way(s), LRU. The cache starts empty. Numbers are memory BLOCK numbers.** MISS · MISS · HIT · MISS · MISS. Map each block to block mod sets. A resident block hits. On a miss, fill an empty way or evict the oldest entry under the stated policy. LRU updates recency on hits; FIFO does not.
- **Cold direct cache: 4 lines. Blocks 0,1,0,4,0. Miss count?** 4. Miss on 0 and 1; hit on 0; block 4 replaces block 0; final 0 misses again.
- **Same five-access sequence. Hit count?** 1. Only the third access hits. Four of the five accesses miss.
- **Same sequence. Hit percentage?** 20. One hit out of five accesses gives 1/5 × 100 = 20 percent.

### Level 77: Count cache misses

- **4 KiB direct data cache, 64-byte blocks. Lines?** 64. 4096 / 64 = 64 lines.
- **32-bit byte address, 4 KiB cache, 64-byte blocks. Tag bits?** 20. Offset is 6 bits, index is 6 bits, leaving 32 - 12 = 20 tag bits.
- **Address 130, block size 64 bytes. Block number?** 2. floor(130/64) = 2, with byte offset two.
- **Predict each access: 4 sets, 1 way(s), LRU. The cache starts empty. Numbers are memory BLOCK numbers.** MISS · MISS · MISS · MISS. Map each block to block mod sets. A resident block hits. On a miss, fill an empty way or evict the oldest entry under the stated policy. LRU updates recency on hits; FIFO does not.

### Level 78: Direct-map challenge

- **Blocks 0,4,0,4 in an empty four-line direct cache. Misses?** 4. Both blocks map to line zero and replace each other, so every access misses.
- **The first access to a never-seen block is called…** A compulsory miss. An empty cache must first fetch a block; this initial miss is compulsory.
- **An index selects a line but does not prove a hit because…** Other blocks can have the same index. The tag and valid state are necessary to distinguish the requested block.
- **64-byte block at base 128 includes what highest byte address?** 191. The block includes 64 bytes: 128 through 128 + 63 = 191.

Transcript reference times: 0:00, 52:19, 80:33. Read the full text in the Lecture notebook.

## 026 · Set-associative cache

An A-way set-associative cache contains A lines per set. Number of sets = capacity/(block size × ways). A block maps to one set and may occupy any way there. Replacement is needed only when that set is full.

### Level 79: Sets and ways

- **1 KiB cache, 16-byte blocks, four ways. Sets?** 16. 1024 / (16 × 4) = 16 sets.
- **Sixteen sets require how many set-index bits?** 4. log2(16) = 4 bits select the set.
- **32-bit addresses, 1 KiB four-way cache, 16-byte blocks. Tag bits?** 24. 32 - 4 set bits - 4 offset bits = 24 tag bits.
- **Match cache organizations.** Direct mapped → One way per set; Two-way associative → Two ways per set; Fully associative → One set containing all lines. Associativity changes how many candidate slots a mapped block can occupy.

### Level 80: Place blocks in a set

- **Predict each access: 2 sets, 2 way(s), LRU. The cache starts empty. Numbers are memory BLOCK numbers.** MISS · MISS · HIT · MISS · MISS. Map each block to block mod sets. A resident block hits. On a miss, fill an empty way or evict the oldest entry under the stated policy. LRU updates recency on hits; FIFO does not.
- **64 total cache lines, four ways. Sets?** 16. The 64 lines form 16 groups of four ways each.
- **Block 13 in four sets maps to which set?** 1. 13 mod 4 = 1, independently of which way holds it.
- **When a mapped set has an empty way, a miss…** Fills the empty way without evicting a valid block. Replacement of valid data is unnecessary while the requested set has a free slot.

### Level 81: Associativity checkpoint

- **Fully associative cache with 16 lines. Set-index bits?** 0. There is only one set, so no address bits are needed to choose a set.
- **A set-associative lookup compares…** Tags of valid candidate ways in its selected set. The block may be in any way of the indexed set, so its valid tag must be found there.
- **Increasing associativity at fixed capacity and block size decreases…** The set count. The same lines are grouped into larger sets; block size and total data capacity remain fixed.
- **2 KiB cache, 32-byte blocks, two ways. Sets?** 32. 2048 / (32 × 2) = 32 sets.

Transcript reference times: 0:00, 27:06, 57:48. Read the full text in the Lecture notebook.

## 027 · Set-associative cache practice

Replacement policies choose a victim within the mapped set. LRU tracks the most recent use and updates on hits. FIFO tracks insertion order and ignores hits for ordering. Different policies can therefore produce different traces.

### Level 82: Trace replacement choices

- **Predict each access: 2 sets, 2 way(s), LRU. The cache starts empty. Numbers are memory BLOCK numbers.** MISS · MISS · HIT · MISS · MISS. Map each block to block mod sets. A resident block hits. On a miss, fill an empty way or evict the oldest entry under the stated policy. LRU updates recency on hits; FIFO does not.
- **Predict each access: 2 sets, 2 way(s), FIFO. The cache starts empty. Numbers are memory BLOCK numbers.** MISS · MISS · HIT · MISS · HIT. Map each block to block mod sets. A resident block hits. On a miss, fill an empty way or evict the oldest entry under the stated policy. LRU updates recency on hits; FIFO does not.
- **For LRU, a cache hit…** Makes the block most recently used. A successful access refreshes recency and can change which block will be evicted next.
- **For FIFO, a cache hit…** Does not change insertion order. FIFO follows the order of insertion, not the most recent access time.

### Level 83: Count hits across sets

- **Two-set two-way LRU cache, empty: 0,2,0,4,2. Hits?** 1. The hit on 0 refreshes it; 4 evicts 2, so the final 2 misses.
- **Same setup with FIFO. Hits?** 2. The hit on 0 leaves insertion order unchanged; 4 evicts 0, so final 2 hits.
- **Predict each access: 2 sets, 2 way(s), LRU. The cache starts empty. Numbers are memory BLOCK numbers.** MISS · MISS · MISS · MISS · HIT · HIT. Map each block to block mod sets. A resident block hits. On a miss, fill an empty way or evict the oldest entry under the stated policy. LRU updates recency on hits; FIFO does not.
- **Victims are selected from…** The accessed block’s mapped set. A set-associative cache only places a block in its assigned set.

### Level 84: Associativity challenge

- **Predict each access: 1 sets, 3 way(s), LRU. The cache starts empty. Numbers are memory BLOCK numbers.** MISS · MISS · MISS · HIT · MISS · MISS. Map each block to block mod sets. A resident block hits. On a miss, fill an empty way or evict the oldest entry under the stated policy. LRU updates recency on hits; FIFO does not.
- **One set, three ways, LRU: 0,1,2,0,3,1. Misses?** 5. The fourth access 0 hits and refreshes recency. Loading 3 evicts 1, so the final 1 misses.
- **An eviction is required only when…** A miss occurs in a full set. An invalid way can be filled directly. A full set needs a victim for a newly fetched block.
- **A correct policy trace records…** State after every access. Replacement order changes over time, so intermediate states determine later hits and misses.

Transcript reference times: 32:33, 38:53, 67:02. Read the full text in the Lecture notebook.

## 028 · Loops, arrays, and cache

Array cache problems combine element size, address calculation, block boundaries, and traversal order. Consecutive elements exploit spatial locality. Reusing a resident block exploits temporal locality. Alignment and initial cache state must be specified.

### Level 85: Connect arrays to addresses

- **An int occupies 4 bytes. How many fit in an aligned 16-byte block?** 4. 16 bytes / 4 bytes per int = 4 integers per block.
- **Array base 1000, int size 4, index 7. Byte address?** 1028. Base plus index times element size: 1000 + 7 × 4 = 1028.
- **Reading neighboring array elements exploits…** Spatial locality. Nearby addresses share blocks and are likely to be accessed together.
- **Repeatedly accessing one loop counter exploits…** Temporal locality. Temporal locality means reuse of the same data over a short time interval.

### Level 86: Trace a loop through cache

- **16 consecutive aligned 4-byte ints, cold cache, 16-byte blocks, no intervening conflicts. Misses?** 4. Four ints per block; each of four blocks causes one first miss.
- **For that 16-access traversal, hits?** 12. 16 total accesses minus four misses = 12 hits.
- **For that traversal, hit percentage?** 75. 12/16 × 100 = 75 percent.
- **Predict each access: 4 sets, 1 way(s), LRU. The cache starts empty. Numbers are memory BLOCK numbers.** MISS · HIT · HIT · HIT · MISS · HIT · HIT · HIT. Map each block to block mod sets. A resident block hits. On a miss, fill an empty way or evict the oldest entry under the stated policy. LRU updates recency on hits; FIFO does not.

### Level 87: Loop checkpoint

- **Array of 10 aligned 4-byte ints. Number of 16-byte blocks occupied?** 3. 40 total bytes occupy ceil(40/16) = 3 blocks when the array begins on a block boundary.
- **A large stride can hurt locality because…** Successive elements may be in different blocks. Skipping many bytes can prevent reuse of fetched neighboring elements.
- **Two passes over 16 ints in a cache retaining all four blocks. Total misses?** 4. Only the first access to each of four blocks misses; the second pass hits throughout.
- **Those two passes have 32 accesses. Hit percentage?** 87.5. 32 - 4 = 28 hits; 28/32 × 100 = 87.5 percent.

Transcript reference times: 0:59, 30:38, 66:37. Read the full text in the Lecture notebook.

## 029 · Loop and cache GATE practice

Traversal order matters for row-major matrices. A row groups adjacent elements; a column jumps by the row stride. Translate the loop into a block sequence before counting hits, and state whether data can survive until reuse.

### Level 88: Read a cache loop problem

- **Row-major 4×4 matrix, 4-byte elements. Row size in bytes?** 16. Four elements per row × four bytes each = sixteen bytes per row.
- **Base 0, row-major 4×4 matrix, 4-byte elements. Address of element [2][1]?** 36. (2 × 4 + 1) × 4 = 36 bytes from the base.
- **Row-major traversal reads…** Neighboring elements within each row. In row-major storage, elements in the same row occupy consecutive addresses.
- **Predict each access: 1 sets, 1 way(s), LRU. The cache starts empty. Numbers are memory BLOCK numbers.** MISS · HIT · HIT · HIT · MISS · HIT · HIT · HIT. Map each block to block mod sets. A resident block hits. On a miss, fill an empty way or evict the oldest entry under the stated policy. LRU updates recency on hits; FIFO does not.

### Level 89: Compare access patterns

- **4×4 matrix aligned at 0; 16-byte blocks; one-line cold cache. Full row-first scan misses?** 4. Each row occupies one block. First access per row misses and its remaining three accesses hit.
- **Same matrix and cache, column-first scan. Misses across all 16 accesses?** 16. Column order visits row blocks 0,1,2,3 repeatedly. With one line each next block evicts the previous one.
- **Row-first scan in that setup: hit percentage?** 75. 12 hits among 16 accesses give 75 percent.
- **Predict each access: 1 sets, 1 way(s), LRU. The cache starts empty. Numbers are memory BLOCK numbers.** MISS · MISS · MISS · MISS · MISS · MISS · MISS · MISS. Map each block to block mod sets. A resident block hits. On a miss, fill an empty way or evict the oldest entry under the stated policy. LRU updates recency on hits; FIFO does not.

### Level 90: Loop challenge

- **4×4 matrix of 4-byte elements: byte stride between adjacent rows of one column?** 16. A complete row occupies sixteen bytes, so the same column in the next row is sixteen bytes away.
- **Loop interchange can improve locality when…** The inner loop follows contiguous storage. Making consecutive stored elements consecutive accesses can increase block reuse.
- **A cache calculation must specify initial state because…** Warm blocks can turn initial accesses into hits. A cold-cache assumption differs from a cache that already holds some requested blocks.
- **Count accesses before reporting miss rate because…** Miss rate is misses divided by total accesses. A count and a rate answer different questions; divide by the specified access total.

Transcript reference times: 0:01, 34:56, 91:54. Read the full text in the Lecture notebook.

## 030 · Effective access time

Average access time weights hit and miss costs. State whether a miss cost already includes cache lookup. With a serial lookup, AMAT = cache time + miss rate × additional miss penalty. Conditional lower-level hit rates require multiplying probabilities.

### Level 91: Read a memory timeline

- **Cache lookup 2 ns, additional memory penalty 100 ns, hit rate 90%. Average ns?** 12. Every access pays 2 ns; 10% also pay 100 ns. 2 + 0.10 × 100 = 12 ns.
- **Hit rate 95%. Miss rate in percent?** 5. Hit and miss fractions sum to one, so 100 - 95 = 5 percent.
- **If miss latency already includes lookup, average is…** hit rate × hit latency + miss rate × full miss latency. Do not add a lookup cost twice when the stated miss latency already includes it.
- **Hit latency 2 ns, complete miss latency 100 ns, hit rate 90%. Average?** 11.8. 0.9 × 2 + 0.1 × 100 = 11.8 ns. The miss latency here is explicitly inclusive.

### Level 92: Compute average access time

- **Lookup 1 ns, additional miss penalty 50 ns, hit rate 80%. AMAT?** 11. 1 + 0.20 × 50 = 11 ns under the serial lookup model.
- **Lookup 1 ns, penalty 50 ns. Target AMAT 6 ns. Required hit percent?** 90. 6 = 1 + m × 50 gives m = 0.1 and hit rate = 90 percent.
- **100 accesses, 80 hits. Hit percentage?** 80. 80/100 × 100 = 80 percent.
- **An additional miss penalty means…** Time paid beyond the ordinary hit lookup. The extra penalty is applied only to misses after accounting for ordinary lookup.

### Level 93: Latency challenge

- **L1 misses 10%; conditional L2 miss rate 20%. Fraction reaching memory in percent?** 2. 0.10 × 0.20 = 0.02, or two percent of all L1 accesses.
- **L1 time 1 ns; on L1 miss add L2 lookup 5 ns; on L2 miss add 100 ns. Rates 10% and conditional 20%. AMAT?** 3.5. 1 + 0.10 × (5 + 0.20 × 100) = 3.5 ns.
- **A conditional L2 hit rate is measured among…** Accesses that missed L1. The denominator matters: a local L2 rate describes requests that actually reach L2.
- **Before using an EAT formula, check…** Cost definitions, lookup order, and probability denominators. Serial versus overlapping lookup and inclusive versus additional cost change the correct formula.

Transcript reference times: 0:00, 26:05, 74:01. Read the full text in the Lecture notebook.

## 031 · Write-back and write-through

Write-through propagates stores to the lower level; write-back delays propagation until a dirty block is evicted or explicitly written back. Write allocation describes what happens on a write miss and is a separate policy decision.

### Level 94: Choose a write policy

- **Match the write policy.** Write through → Propagate each store to lower level; Write back → Delay propagation until write-back; Dirty bit → Marks modified cached data. A dirty block differs from lower-level memory and must be preserved on write-back eviction.
- **A clean block eviction under write-back needs a data write-back?** No. Clean data already agrees with the lower level, so eviction requires no dirty-data write.
- **A dirty block eviction under write-back normally…** Writes the modified block to the lower level. The modified contents must be preserved before the block’s slot is reused.
- **Write through, no buffering or merging: eight stores cause how many lower-level store updates?** 8. Every store is propagated in the explicitly unbuffered, unmerged model.

### Level 95: Trace dirty blocks

- **Write allocate on a miss means…** Bring the missed block into the cache. Allocation determines whether a write miss fetches and installs its target block.
- **No-write-allocate on a write miss means…** Update lower memory without bringing the block into cache. The missed block is bypassed for this store rather than inserted into the cache.
- **Are write allocation and write propagation the same decision?** No. One governs misses and cache insertion; the other governs when modifications reach the lower level.
- **Three dirty 16-byte blocks evicted. Bytes written back?** 48. 3 × 16 = 48 bytes of block data, ignoring metadata and bus overhead.

### Level 96: Write-policy checkpoint

- **Write-back: ten stores to one resident block then one dirty eviction. Block write-backs?** 1. The modifications accumulate in cache and are propagated in one block write-back on eviction.
- **Which policy needs to remember whether cached data changed?** Write back. A dirty indicator distinguishes modified blocks that require preservation on eviction.
- **Write buffers can…** Decouple CPU store completion from lower-level propagation. Buffering can reduce CPU waiting, though lower-level writes still have to be performed.
- **A full write-policy trace should state…** Hit/miss, allocation, dirtiness, and eviction effects. These independent decisions determine both cache state and lower-level traffic.

Transcript reference times: 1:26, 14:42, 33:28. Read the full text in the Lecture notebook.

## 032 · Fixed-point representation

For these fixed-point examples, an 8-bit two’s-complement stored integer has four fractional bits. Its real value is signed_integer/16. The point position determines resolution and range; the stored bits still use ordinary integer encoding.

### Level 97: Place the binary point

- **Four fractional bits: scale factor dividing the stored integer?** 16. 2^4 = 16. Move the binary point four places by dividing the integer value by sixteen.
- **8-bit signed fixed point with four fractional bits: raw 0x18. Value?** 1.5. 0x18 = 24, and 24/16 = 1.5.
- **Same format: raw 0xF0. Value?** -1. 0xF0 is signed integer -16 in eight-bit two’s complement; -16/16 = -1.
- **Spacing between adjacent values in this format?** 0.0625. One integer step divided by 16 gives 1/16 = 0.0625.

### Level 98: Encode fixed-point values

- **Minimum value in that signed 8-bit format?** -8. The minimum stored integer -128 divided by 16 equals -8.
- **Maximum value in that format?** 7.9375. The maximum stored integer 127 divided by 16 equals 7.9375.
- **Encode 3.25 in that 8-bit format. Enter two-digit hex.** 34. 3.25 × 16 = 52 decimal = 0x34.
- **Encode -1 in that 8-bit format. Two-digit hex.** F0. -1 × 16 = -16, whose eight-bit two’s-complement representation is F0.

### Level 99: Fixed-point checkpoint

- **Four fractional bits: stored signed integer 40 represents…?** 2.5. 40/16 = 2.5 in the explicitly specified format.
- **Increasing fractional bits at fixed signed word width usually…** Improves resolution but reduces range. More bits after the point leave fewer bits to cover the integer range.
- **Three fractional bits give what resolution?** 0.125. 2^-3 = 1/8 = 0.125 between adjacent represented values.
- **Before interpreting fixed point, you must know…** Signedness, total width, and point position. The same bits can represent different real values under different fixed-point formats.

Transcript reference times: 0:20, 46:30, 78:51. Read the full text in the Lecture notebook.

## 033 · Floating-point representation

IEEE 754 binary32 contains a sign bit, an 8-bit biased exponent, and a 23-bit fraction. Normal values use (-1)^sign × (1.fraction) × 2^(exponent-127). Special exponent patterns encode zeros, subnormals, infinities, and NaNs.

### Level 100: Sign, exponent, fraction

- **Match binary32 field widths.** Sign → 1 bit; Exponent → 8 bits; Fraction → 23 bits. The fields sum to 1 + 8 + 23 = 32 encoded bits.
- **Binary32 exponent bias?** 127. Normal exponent fields use bias 127 to encode negative and positive exponents.
- **Normal exponent field 130: unbiased exponent?** 3. 130 - 127 = 3 is the exponent used in the value formula.
- **Normal binary32 has how many significant binary digits including its implicit leading 1?** 24. The 23 stored fraction bits plus the implicit leading one give 24 bits of precision.

### Level 101: Normalize a binary value

- **IEEE binary32 encoding of +1.0. Enter eight-digit hex.** 3F800000. Sign 0, exponent 127, fraction 0 gives 0x3F800000.
- **IEEE binary32 encoding of -1.0.** BF800000. Set the sign bit in the +1.0 representation, giving 0xBF800000.
- **IEEE binary32 encoding of +2.0.** 40000000. 2 = 1.0 × 2^1; exponent field is 128 and fraction is zero.
- **IEEE binary32 encoding of +0.5.** 3F000000. 0.5 = 1.0 × 2^-1; exponent field is 126 and fraction is zero.

### Level 102: Floating-point checkpoint

- **IEEE binary32 encoding of +1.5.** 3FC00000. 1.5 = 1.1 binary × 2^0; the top fraction bit is set with biased exponent 127.
- **Minimum unbiased exponent for NORMAL binary32 numbers?** -126. Normal exponent fields run from 1 through 254; 1 - 127 = -126.
- **Maximum unbiased exponent for NORMAL binary32 numbers?** 127. 254 - 127 = 127. The all-one exponent field is reserved for special values.
- **A normal binary32 significand begins with an implicit…** 1. Normal values use 1.fraction. Subnormal values use a different rule.

Transcript reference times: 9:18, 37:00, 56:49. Read the full text in the Lecture notebook.

## 034 · Floating-point GATE practice

Representation problems require identifying normal versus special values before applying a formula. Binary32 has finite precision, so not every real number is exact. Practice both encoding known binary fractions and recognizing reserved exponent patterns.

### Level 103: Decode a floating-point value

- **IEEE binary32 encoding of +0.75.** 3F400000. 0.75 = 1.1 binary × 2^-1: exponent 126 and the top fraction bit set.
- **IEEE binary32 encoding of +1.75.** 3FE00000. 1.75 = 1.11 binary × 2^0; fraction begins 11 and exponent is 127.
- **IEEE binary32 encoding of +2.5.** 40200000. 2.5 = 1.01 binary × 2^1; biased exponent 128 and fraction 01….
- **IEEE binary32 encoding of -2.5.** C0200000. Use the +2.5 magnitude encoding and set the sign bit.

### Level 104: Solve precision and range

- **Binary32 exponent field 255 and fraction zero represents…** Infinity with the given sign. The all-one exponent with zero fraction is reserved for signed infinity.
- **Binary32 exponent field 255 and nonzero fraction represents…** NaN. A nonzero fraction under the all-one exponent denotes a NaN encoding.
- **Binary32 exponent zero and nonzero fraction represents…** A subnormal value. Subnormals use a leading zero significand and exponent scaling 2^-126.
- **IEEE binary32 encoding of negative zero.** 80000000. Only the sign bit is one; exponent and fraction are zero.

### Level 105: Representation challenge

- **Toy 8-bit float: sign 1, exponent 3 bits with bias 3, fraction 4 bits. Normal sign=0, exponent=4, fraction=8. Value?** 3. Fraction 8/16 = 0.5; significand 1.5 and exponent 4-3=1 give 1.5 × 2 = 3.
- **Normal binary32 exponent field 125. Unbiased exponent?** -2. Subtract bias: 125 - 127 = -2.
- **Is decimal 0.1 exactly representable as a finite binary fraction?** No. Its binary expansion repeats; finite binary precision requires rounding.
- **Before decoding floating point, first inspect…** Exponent and fraction for reserved patterns. Zero, subnormal, infinity, and NaN rules differ from the normal-value formula.

Transcript reference times: 0:36, 45:31, 87:19. Read the full text in the Lecture notebook.
