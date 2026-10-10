# Lecture 000: Introduction to COA; architecture versus organization

Source: `000_Lecture_1A_Introduction_to_COA_Architecture_Vs_Organ.mp4` (19 minutes 45 seconds), machine transcript, and relevant slides in `coa/1.pdf`, including the annotated diagrams on pages 6 and 8–11. The complete transcript has been reviewed; numbers and bit diagrams were checked against these slides where applicable. This is a review of the introduction, not the entire course.

## What the course studies and why

From 00:00–05:03, the lecturer frames COA as the hardware foundation supporting computer applications. Three questions organize the subject: how a computer operates, how it is designed, and how it is built. Hardware engineers need to understand physical components and their behavior. Software developers benefit from understanding the machine on which an application executes, particularly when improving performance and efficiency.

## Architecture through a person–engineer–computer example

From about 06:17, an engineer is asked to create a computer for a person. Before constructing hardware, the engineer must define the instructions that the person can give and how the computer interprets them. The lecturer compares this to instructing a person to turn on a light: “turn on” identifies the operation, and “light” identifies the operand, the entity acted upon.

For the digital computer, instructions and data need binary representations. The discussion develops three design choices:

- **Instruction set:** the operations the computer supports. The examples are addition, multiplication, subtraction, load, and store.
- **Instruction format:** how the bits of an instruction are divided and interpreted.
- **Data format:** how values used by instructions are represented as bits.

At about 13:13, the instructor fixes an illustrative instruction length of eight bits. Four operation bits followed by four operand bits is one possible interpretation; two operation bits followed by six operand bits is another. The instruction format must establish which interpretation applies. These are alternative toy designs, not simultaneously applicable encodings or a real processor specification. The automatic transcript of the spoken bit sequence is unreliable; use the diagram and the explicit field-width explanation.

At about 14:40, `ADD 5, 6` illustrates that the data values also need a defined binary representation. The language accepted by the computer is introduced as machine code.

## Processing logic and physical implementation

From about 16:11, defining the instruction language is followed by designing the processing logic that carries out each instruction. The CPU is introduced as the component containing this execution logic. The introduction describes this logic using a simplified hardwired model.

From about 17:47, the lecturer distinguishes the conceptual specification and design from physically assembling hardware and managing communication between components:

- **Architecture**, in this introduction, describes the instruction language, data representation, and intended processing behavior.
- **Organization** describes how hardware components are arranged and interconnected to implement that behavior efficiently.

The closing point is to keep both the defined functionality and its implementation in mind throughout the course.

## Scope still to verify

The overview slide lists pipelining, hazards, and interrupt/DMA I/O. Their presence in the supplied recordings remains unverified because those topics do not appear in the video filenames. Reviewing this introduction does not establish that the available folder contains every lecture in the advertised course.
