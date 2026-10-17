// Generated from reviewed OS topics and completed transcript evidence.
export const lessons=[
  {
    "id": 0,
    "lecture": 0,
    "title": "Operating systems and startup · Discover",
    "concept": "An operating system is the trusted software layer that starts the machine, manages hardware and gives applications safe, useful services. Start with the hardware: the CPU executes instructions and memory holds active work.",
    "teachingSteps": [
      "Start with the moving parts. Start with the hardware: the CPU executes instructions and memory holds active work.",
      "The kernel coordinates protected access to processors, memory and devices.",
      "Applications request services; the OS schedules their work and controls resources."
    ],
    "foundation": {
      "title": "Operating systems and startup",
      "idea": "An operating system is the trusted software layer that starts the machine, manages hardware and gives applications safe, useful services.",
      "terms": [
        "Hardware: The physical processor, memory and devices.",
        "Operating system: System software that manages hardware and provides services to programs.",
        "Application: A program that asks the operating system to perform work."
      ],
      "example": "When you open a photo, the app asks the OS to read file blocks, allocate memory and schedule its instructions on the CPU."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Operating systems and startup · Discover: A photo app needs file data and CPU time while music is playing, which component chooses when each runnable program receives the CPU?",
        "options": [
          "The operating-system scheduler",
          "The photo file",
          "The keyboard driver alone"
        ],
        "answer": 0,
        "explanation": "The operating-system scheduler. An operating system is the trusted software layer that starts the machine, manages hardware and gives applications safe, useful services."
      },
      {
        "type": "match",
        "prompt": "Operating systems and startup · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Hardware",
            "The physical processor, memory and devices."
          ],
          [
            "Operating system",
            "System software that manages hardware and provides services to programs."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Operating systems and startup · Discover: put these events in order.",
        "items": [
          "Power the machine and initialize hardware",
          "Load the operating-system kernel",
          "Start an application through OS services"
        ],
        "explanation": "Start with the hardware: the CPU executes instructions and memory holds active work. The kernel coordinates protected access to processors, memory and devices. Applications request services; the OS schedules their work and controls resources."
      },
      {
        "type": "number",
        "prompt": "Operating systems and startup · Discover: A fork trace has 1 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 2,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "1 successive forks double the process count at each level: 2^1 = 2."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "startup",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 91.46,
        "text": "Okay, but mostly you can be very much worry free. It will be like, like you can study. This is a very, very much first course of your good preparation. Okay. So let's get started with the operating systems. So I hope you all are excited as me. So like most of you might be knowing me because you are already in the go classes, but still if you need, I can, I c"
      },
      {
        "time": 206.28,
        "text": "do it from here. Okay. So, so this is me, Sachin. Okay. So let's get started with the operating systems. Now, before I really devil into the content, let me just tell you that what are the books that you can refer. Although you want to be requiring any book as such to refer. So whenever, like, I mean, this, you can say that these are the books that I'm refer"
      }
    ],
    "start": 0
  },
  {
    "id": 1,
    "lecture": 0,
    "title": "Operating systems and startup · Explore",
    "concept": "An operating system is the trusted software layer that starts the machine, manages hardware and gives applications safe, useful services. The kernel coordinates protected access to processors, memory and devices.",
    "teachingSteps": [
      "Watch one example unfold. Start with the hardware: the CPU executes instructions and memory holds active work.",
      "The kernel coordinates protected access to processors, memory and devices.",
      "Applications request services; the OS schedules their work and controls resources."
    ],
    "foundation": {
      "title": "Operating systems and startup",
      "idea": "An operating system is the trusted software layer that starts the machine, manages hardware and gives applications safe, useful services.",
      "terms": [
        "Hardware: The physical processor, memory and devices.",
        "Operating system: System software that manages hardware and provides services to programs.",
        "Application: A program that asks the operating system to perform work."
      ],
      "example": "When you open a photo, the app asks the OS to read file blocks, allocate memory and schedule its instructions on the CPU."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Operating systems and startup · Explore: The trace has just completed: Power the machine and initialize hardware. Which action should happen next?",
        "options": [
          "Load the operating-system kernel",
          "Power the machine and initialize hardware",
          "Start an application through OS services"
        ],
        "answer": 0,
        "explanation": "Load the operating-system kernel. The kernel coordinates protected access to processors, memory and devices."
      },
      {
        "type": "match",
        "prompt": "Operating systems and startup · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Operating system",
            "System software that manages hardware and provides services to programs."
          ],
          [
            "Application",
            "A program that asks the operating system to perform work."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Operating systems and startup · Explore: put the opening events in order.",
        "items": [
          "Power the machine and initialize hardware",
          "Load the operating-system kernel"
        ],
        "explanation": "Start with the hardware: the CPU executes instructions and memory holds active work. The kernel coordinates protected access to processors, memory and devices. Applications request services; the OS schedules their work and controls resources."
      },
      {
        "type": "number",
        "prompt": "Operating systems and startup · Explore: A fork trace has 2 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 4,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "2 successive forks double the process count at each level: 2^2 = 4."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "startup",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 91.46,
        "text": "Okay, but mostly you can be very much worry free. It will be like, like you can study. This is a very, very much first course of your good preparation. Okay. So let's get started with the operating systems. So I hope you all are excited as me. So like most of you might be knowing me because you are already in the go classes, but still if you need, I can, I c"
      },
      {
        "time": 206.28,
        "text": "do it from here. Okay. So, so this is me, Sachin. Okay. So let's get started with the operating systems. Now, before I really devil into the content, let me just tell you that what are the books that you can refer. Although you want to be requiring any book as such to refer. So whenever, like, I mean, this, you can say that these are the books that I'm refer"
      }
    ],
    "start": 1
  },
  {
    "id": 2,
    "lecture": 0,
    "title": "Operating systems and startup · Apply",
    "concept": "An operating system is the trusted software layer that starts the machine, manages hardware and gives applications safe, useful services. Applications request services; the OS schedules their work and controls resources.",
    "teachingSteps": [
      "Use the idea in a new situation. Start with the hardware: the CPU executes instructions and memory holds active work.",
      "The kernel coordinates protected access to processors, memory and devices.",
      "Applications request services; the OS schedules their work and controls resources."
    ],
    "foundation": {
      "title": "Operating systems and startup",
      "idea": "An operating system is the trusted software layer that starts the machine, manages hardware and gives applications safe, useful services.",
      "terms": [
        "Hardware: The physical processor, memory and devices.",
        "Operating system: System software that manages hardware and provides services to programs.",
        "Application: A program that asks the operating system to perform work."
      ],
      "example": "When you open a photo, the app asks the OS to read file blocks, allocate memory and schedule its instructions on the CPU."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Operating systems and startup · Apply: In this new example, what should happen immediately before: Start an application through OS services?",
        "options": [
          "Load the operating-system kernel",
          "Start an application through OS services",
          "Power the machine and initialize hardware"
        ],
        "answer": 0,
        "explanation": "Load the operating-system kernel must happen first. The kernel coordinates protected access to processors, memory and devices."
      },
      {
        "type": "match",
        "prompt": "Operating systems and startup · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Application",
            "A program that asks the operating system to perform work."
          ],
          [
            "Hardware",
            "The physical processor, memory and devices."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Operating systems and startup · Apply: put the final handoff in order.",
        "items": [
          "Load the operating-system kernel",
          "Start an application through OS services"
        ],
        "explanation": "Start with the hardware: the CPU executes instructions and memory holds active work. The kernel coordinates protected access to processors, memory and devices. Applications request services; the OS schedules their work and controls resources."
      },
      {
        "type": "number",
        "prompt": "Operating systems and startup · Apply: A fork trace has 3 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 8,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "3 successive forks double the process count at each level: 2^3 = 8."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "startup",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 91.46,
        "text": "Okay, but mostly you can be very much worry free. It will be like, like you can study. This is a very, very much first course of your good preparation. Okay. So let's get started with the operating systems. So I hope you all are excited as me. So like most of you might be knowing me because you are already in the go classes, but still if you need, I can, I c"
      },
      {
        "time": 206.28,
        "text": "do it from here. Okay. So, so this is me, Sachin. Okay. So let's get started with the operating systems. Now, before I really devil into the content, let me just tell you that what are the books that you can refer. Although you want to be requiring any book as such to refer. So whenever, like, I mean, this, you can say that these are the books that I'm refer"
      }
    ],
    "start": 2
  },
  {
    "id": 3,
    "lecture": 1,
    "title": "From program file to process · Discover",
    "concept": "A program file is passive instructions stored on disk; a process is one active execution with its own state and resources. The executable stays on storage; loading maps its code and data into a process address space.",
    "teachingSteps": [
      "Start with the moving parts. The executable stays on storage; loading maps its code and data into a process address space.",
      "The process control block records identity, state and saved execution information.",
      "When setup is complete, the scheduler can place the process in the ready queue."
    ],
    "foundation": {
      "title": "From program file to process",
      "idea": "A program file is passive instructions stored on disk; a process is one active execution with its own state and resources.",
      "terms": [
        "Program: A stored set of instructions; it does not run by itself.",
        "Process: A running instance with memory, registers and operating-system bookkeeping.",
        "Address space: The range of virtual addresses a process can use."
      ],
      "example": "Opening the same calculator twice can create two processes from one program file, each with a different current calculation."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "From program file to process · Discover: A loader starts a program with three initialized data values, what must exist for this running instance to resume after it is paused?",
        "options": [
          "Saved process state such as registers and a program counter",
          "Only the file name",
          "A copy of every disk block in a CPU register"
        ],
        "answer": 0,
        "explanation": "Saved process state such as registers and a program counter. A program file is passive instructions stored on disk; a process is one active execution with its own state and resources."
      },
      {
        "type": "match",
        "prompt": "From program file to process · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Program",
            "A stored set of instructions; it does not run by itself."
          ],
          [
            "Process",
            "A running instance with memory, registers and operating-system bookkeeping."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "From program file to process · Discover: put these events in order.",
        "items": [
          "Read the executable and its required metadata",
          "Create an address space and process record",
          "Initialize execution state and make the process runnable"
        ],
        "explanation": "The executable stays on storage; loading maps its code and data into a process address space. The process control block records identity, state and saved execution information. When setup is complete, the scheduler can place the process in the ready queue."
      },
      {
        "type": "number",
        "prompt": "From program file to process · Discover: A fork trace has 2 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 4,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "2 successive forks double the process count at each level: 2^2 = 4."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "process",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 2982.54,
        "text": "So let's just first understand the fourth. Okay. So before that, let me just tell you what is a process. So you might have heard about it that a process informally a program in execution, which means if you are having this hello dot out is this process, is this process currently it's not a process. Okay. It's a executable file. It is executable file."
      },
      {
        "time": 3586.96,
        "text": "Then it is possible that you might not want other program to open that same file. Is this possible? Yes, this is possible, right? You might want only one program to open a file at a time, maybe, right? So if that kind of production is needed, so you can say that list of open files, open files. And similarly, there are many things which I will give you the li"
      }
    ],
    "start": 3
  },
  {
    "id": 4,
    "lecture": 1,
    "title": "From program file to process · Explore",
    "concept": "A program file is passive instructions stored on disk; a process is one active execution with its own state and resources. The process control block records identity, state and saved execution information.",
    "teachingSteps": [
      "Watch one example unfold. The executable stays on storage; loading maps its code and data into a process address space.",
      "The process control block records identity, state and saved execution information.",
      "When setup is complete, the scheduler can place the process in the ready queue."
    ],
    "foundation": {
      "title": "From program file to process",
      "idea": "A program file is passive instructions stored on disk; a process is one active execution with its own state and resources.",
      "terms": [
        "Program: A stored set of instructions; it does not run by itself.",
        "Process: A running instance with memory, registers and operating-system bookkeeping.",
        "Address space: The range of virtual addresses a process can use."
      ],
      "example": "Opening the same calculator twice can create two processes from one program file, each with a different current calculation."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "From program file to process · Explore: The trace has just completed: Read the executable and its required metadata. Which action should happen next?",
        "options": [
          "Create an address space and process record",
          "Read the executable and its required metadata",
          "Initialize execution state and make the process runnable"
        ],
        "answer": 0,
        "explanation": "Create an address space and process record. The process control block records identity, state and saved execution information."
      },
      {
        "type": "match",
        "prompt": "From program file to process · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Process",
            "A running instance with memory, registers and operating-system bookkeeping."
          ],
          [
            "Address space",
            "The range of virtual addresses a process can use."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "From program file to process · Explore: put the opening events in order.",
        "items": [
          "Read the executable and its required metadata",
          "Create an address space and process record"
        ],
        "explanation": "The executable stays on storage; loading maps its code and data into a process address space. The process control block records identity, state and saved execution information. When setup is complete, the scheduler can place the process in the ready queue."
      },
      {
        "type": "number",
        "prompt": "From program file to process · Explore: A fork trace has 3 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 8,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "3 successive forks double the process count at each level: 2^3 = 8."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "process",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 2982.54,
        "text": "So let's just first understand the fourth. Okay. So before that, let me just tell you what is a process. So you might have heard about it that a process informally a program in execution, which means if you are having this hello dot out is this process, is this process currently it's not a process. Okay. It's a executable file. It is executable file."
      },
      {
        "time": 3586.96,
        "text": "Then it is possible that you might not want other program to open that same file. Is this possible? Yes, this is possible, right? You might want only one program to open a file at a time, maybe, right? So if that kind of production is needed, so you can say that list of open files, open files. And similarly, there are many things which I will give you the li"
      }
    ],
    "start": 4
  },
  {
    "id": 5,
    "lecture": 1,
    "title": "From program file to process · Apply",
    "concept": "A program file is passive instructions stored on disk; a process is one active execution with its own state and resources. When setup is complete, the scheduler can place the process in the ready queue.",
    "teachingSteps": [
      "Use the idea in a new situation. The executable stays on storage; loading maps its code and data into a process address space.",
      "The process control block records identity, state and saved execution information.",
      "When setup is complete, the scheduler can place the process in the ready queue."
    ],
    "foundation": {
      "title": "From program file to process",
      "idea": "A program file is passive instructions stored on disk; a process is one active execution with its own state and resources.",
      "terms": [
        "Program: A stored set of instructions; it does not run by itself.",
        "Process: A running instance with memory, registers and operating-system bookkeeping.",
        "Address space: The range of virtual addresses a process can use."
      ],
      "example": "Opening the same calculator twice can create two processes from one program file, each with a different current calculation."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "From program file to process · Apply: In this new example, what should happen immediately before: Initialize execution state and make the process runnable?",
        "options": [
          "Create an address space and process record",
          "Initialize execution state and make the process runnable",
          "Read the executable and its required metadata"
        ],
        "answer": 0,
        "explanation": "Create an address space and process record must happen first. The process control block records identity, state and saved execution information."
      },
      {
        "type": "match",
        "prompt": "From program file to process · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Address space",
            "The range of virtual addresses a process can use."
          ],
          [
            "Program",
            "A stored set of instructions; it does not run by itself."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "From program file to process · Apply: put the final handoff in order.",
        "items": [
          "Create an address space and process record",
          "Initialize execution state and make the process runnable"
        ],
        "explanation": "The executable stays on storage; loading maps its code and data into a process address space. The process control block records identity, state and saved execution information. When setup is complete, the scheduler can place the process in the ready queue."
      },
      {
        "type": "number",
        "prompt": "From program file to process · Apply: A fork trace has 4 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 16,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "4 successive forks double the process count at each level: 2^4 = 16."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "process",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 2982.54,
        "text": "So let's just first understand the fourth. Okay. So before that, let me just tell you what is a process. So you might have heard about it that a process informally a program in execution, which means if you are having this hello dot out is this process, is this process currently it's not a process. Okay. It's a executable file. It is executable file."
      },
      {
        "time": 3586.96,
        "text": "Then it is possible that you might not want other program to open that same file. Is this possible? Yes, this is possible, right? You might want only one program to open a file at a time, maybe, right? So if that kind of production is needed, so you can say that list of open files, open files. And similarly, there are many things which I will give you the li"
      }
    ],
    "start": 5
  },
  {
    "id": 6,
    "lecture": 2,
    "title": "Creating a child with fork · Discover",
    "concept": "fork creates a child process from a running parent; both continue after the call with separate return values. Before fork, there is one executing process.",
    "teachingSteps": [
      "Start with the moving parts. Before fork, there is one executing process.",
      "A successful fork creates a child; the parent receives the child ID and the child receives zero.",
      "Both may continue, so output order depends on scheduling unless the program coordinates them."
    ],
    "foundation": {
      "title": "Creating a child with fork",
      "idea": "fork creates a child process from a running parent; both continue after the call with separate return values.",
      "terms": [
        "Parent: The process that calls fork.",
        "Child: The new process created by fork.",
        "Return value: The value that tells each process whether it is the parent or child."
      ],
      "example": "After one successful fork, a print statement reached by both processes can run twice, though their order is not fixed."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Creating a child with fork · Discover: One process calls fork once and both paths reach the next statement, how many process executions can reach that statement?",
        "options": [
          "Two: the parent and the child",
          "One, because the child replaces the parent",
          "Three, because fork always makes two children"
        ],
        "answer": 0,
        "explanation": "Two: the parent and the child. fork creates a child process from a running parent; both continue after the call with separate return values."
      },
      {
        "type": "match",
        "prompt": "Creating a child with fork · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Parent",
            "The process that calls fork."
          ],
          [
            "Child",
            "The new process created by fork."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Creating a child with fork · Discover: put these events in order.",
        "items": [
          "The parent calls fork",
          "The OS creates a child execution context",
          "Both processes continue and inspect their own return values"
        ],
        "explanation": "Before fork, there is one executing process. A successful fork creates a child; the parent receives the child ID and the child receives zero. Both may continue, so output order depends on scheduling unless the program coordinates them."
      },
      {
        "type": "number",
        "prompt": "Creating a child with fork · Discover: A fork trace has 3 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 8,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "3 successive forks double the process count at each level: 2^3 = 8."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "fork",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 276.42,
        "text": "so basically this fork is creating a new process which means after this fork there will be two processes in the main memory and the next line to be executed here let's suppose is this printf similarly the next line is the same line I mean these are the identical copies okay so so basically in the main memory currently two processes are there process one whic"
      },
      {
        "time": 5946.2,
        "text": "This code is getting executed by child and this code is getting executed by parent. I mean both of the both of the code are not executing not getting executed only by only by one process, right? This is by child. This is by parent and this is common. So this printfc is okay, but instead of writing in that way instead of writing that way. So basically this fo"
      }
    ],
    "start": 6
  },
  {
    "id": 7,
    "lecture": 2,
    "title": "Creating a child with fork · Explore",
    "concept": "fork creates a child process from a running parent; both continue after the call with separate return values. A successful fork creates a child; the parent receives the child ID and the child receives zero.",
    "teachingSteps": [
      "Watch one example unfold. Before fork, there is one executing process.",
      "A successful fork creates a child; the parent receives the child ID and the child receives zero.",
      "Both may continue, so output order depends on scheduling unless the program coordinates them."
    ],
    "foundation": {
      "title": "Creating a child with fork",
      "idea": "fork creates a child process from a running parent; both continue after the call with separate return values.",
      "terms": [
        "Parent: The process that calls fork.",
        "Child: The new process created by fork.",
        "Return value: The value that tells each process whether it is the parent or child."
      ],
      "example": "After one successful fork, a print statement reached by both processes can run twice, though their order is not fixed."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Creating a child with fork · Explore: The trace has just completed: The parent calls fork. Which action should happen next?",
        "options": [
          "The OS creates a child execution context",
          "The parent calls fork",
          "Both processes continue and inspect their own return values"
        ],
        "answer": 0,
        "explanation": "The OS creates a child execution context. A successful fork creates a child; the parent receives the child ID and the child receives zero."
      },
      {
        "type": "match",
        "prompt": "Creating a child with fork · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Child",
            "The new process created by fork."
          ],
          [
            "Return value",
            "The value that tells each process whether it is the parent or child."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Creating a child with fork · Explore: put the opening events in order.",
        "items": [
          "The parent calls fork",
          "The OS creates a child execution context"
        ],
        "explanation": "Before fork, there is one executing process. A successful fork creates a child; the parent receives the child ID and the child receives zero. Both may continue, so output order depends on scheduling unless the program coordinates them."
      },
      {
        "type": "number",
        "prompt": "Creating a child with fork · Explore: A fork trace has 4 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 16,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "4 successive forks double the process count at each level: 2^4 = 16."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "fork",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 276.42,
        "text": "so basically this fork is creating a new process which means after this fork there will be two processes in the main memory and the next line to be executed here let's suppose is this printf similarly the next line is the same line I mean these are the identical copies okay so so basically in the main memory currently two processes are there process one whic"
      },
      {
        "time": 5946.2,
        "text": "This code is getting executed by child and this code is getting executed by parent. I mean both of the both of the code are not executing not getting executed only by only by one process, right? This is by child. This is by parent and this is common. So this printfc is okay, but instead of writing in that way instead of writing that way. So basically this fo"
      }
    ],
    "start": 7
  },
  {
    "id": 8,
    "lecture": 2,
    "title": "Creating a child with fork · Apply",
    "concept": "fork creates a child process from a running parent; both continue after the call with separate return values. Both may continue, so output order depends on scheduling unless the program coordinates them.",
    "teachingSteps": [
      "Use the idea in a new situation. Before fork, there is one executing process.",
      "A successful fork creates a child; the parent receives the child ID and the child receives zero.",
      "Both may continue, so output order depends on scheduling unless the program coordinates them."
    ],
    "foundation": {
      "title": "Creating a child with fork",
      "idea": "fork creates a child process from a running parent; both continue after the call with separate return values.",
      "terms": [
        "Parent: The process that calls fork.",
        "Child: The new process created by fork.",
        "Return value: The value that tells each process whether it is the parent or child."
      ],
      "example": "After one successful fork, a print statement reached by both processes can run twice, though their order is not fixed."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Creating a child with fork · Apply: In this new example, what should happen immediately before: Both processes continue and inspect their own return values?",
        "options": [
          "The OS creates a child execution context",
          "Both processes continue and inspect their own return values",
          "The parent calls fork"
        ],
        "answer": 0,
        "explanation": "The OS creates a child execution context must happen first. A successful fork creates a child; the parent receives the child ID and the child receives zero."
      },
      {
        "type": "match",
        "prompt": "Creating a child with fork · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Return value",
            "The value that tells each process whether it is the parent or child."
          ],
          [
            "Parent",
            "The process that calls fork."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Creating a child with fork · Apply: put the final handoff in order.",
        "items": [
          "The OS creates a child execution context",
          "Both processes continue and inspect their own return values"
        ],
        "explanation": "Before fork, there is one executing process. A successful fork creates a child; the parent receives the child ID and the child receives zero. Both may continue, so output order depends on scheduling unless the program coordinates them."
      },
      {
        "type": "number",
        "prompt": "Creating a child with fork · Apply: A fork trace has 5 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 32,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "5 successive forks double the process count at each level: 2^5 = 32."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "fork",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 276.42,
        "text": "so basically this fork is creating a new process which means after this fork there will be two processes in the main memory and the next line to be executed here let's suppose is this printf similarly the next line is the same line I mean these are the identical copies okay so so basically in the main memory currently two processes are there process one whic"
      },
      {
        "time": 5946.2,
        "text": "This code is getting executed by child and this code is getting executed by parent. I mean both of the both of the code are not executing not getting executed only by only by one process, right? This is by child. This is by parent and this is common. So this printfc is okay, but instead of writing in that way instead of writing that way. So basically this fo"
      }
    ],
    "start": 8
  },
  {
    "id": 9,
    "lecture": 3,
    "title": "Tracing fork trees · Discover",
    "concept": "A fork trace is a branching execution tree: only processes that reach a fork create another child. Start with one process and draw a fork as a parent-child branch.",
    "teachingSteps": [
      "Start with the moving parts. Start with one process and draw a fork as a parent-child branch.",
      "A later fork is executed once by each process that reaches it.",
      "Count the final leaves; do not assume a fixed order for their output."
    ],
    "foundation": {
      "title": "Tracing fork trees",
      "idea": "A fork trace is a branching execution tree: only processes that reach a fork create another child.",
      "terms": [
        "Execution path: The instructions one process reaches in order.",
        "Process tree: A diagram showing parent-child creation relationships.",
        "Scheduling order: Which runnable process executes next; it can vary."
      ],
      "example": "If both processes from one fork reach a second fork, the second call runs twice and four processes may exist."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Tracing fork trees · Discover: A program starts with one process; each of its two branches reaches one more fork, how many processes exist after both second forks succeed?",
        "options": [
          "Four",
          "Three",
          "Five"
        ],
        "answer": 0,
        "explanation": "Four. A fork trace is a branching execution tree: only processes that reach a fork create another child."
      },
      {
        "type": "match",
        "prompt": "Tracing fork trees · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Execution path",
            "The instructions one process reaches in order."
          ],
          [
            "Process tree",
            "A diagram showing parent-child creation relationships."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Tracing fork trees · Discover: put these events in order.",
        "items": [
          "Draw one node for the starting process",
          "Branch once for the first fork",
          "Apply the second fork separately on both existing paths"
        ],
        "explanation": "Start with one process and draw a fork as a parent-child branch. A later fork is executed once by each process that reaches it. Count the final leaves; do not assume a fixed order for their output."
      },
      {
        "type": "number",
        "prompt": "Tracing fork trees · Discover: A fork trace has 4 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 16,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "4 successive forks double the process count at each level: 2^4 = 16."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "fork",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 534.6,
        "text": "I mean, if you remember that in the last lecture, we were talking about the fork, right?"
      },
      {
        "time": 593.8,
        "text": "with our lecture with the four questions. So let's just first understand this fork and then we will be understanding the main question, which was this. So do you remember the objective? I think you guys might remember the objective. What was our objective to start all of this? This one, right? Understand how these two steps get performed and what are those t"
      }
    ],
    "start": 9
  },
  {
    "id": 10,
    "lecture": 3,
    "title": "Tracing fork trees · Explore",
    "concept": "A fork trace is a branching execution tree: only processes that reach a fork create another child. A later fork is executed once by each process that reaches it.",
    "teachingSteps": [
      "Watch one example unfold. Start with one process and draw a fork as a parent-child branch.",
      "A later fork is executed once by each process that reaches it.",
      "Count the final leaves; do not assume a fixed order for their output."
    ],
    "foundation": {
      "title": "Tracing fork trees",
      "idea": "A fork trace is a branching execution tree: only processes that reach a fork create another child.",
      "terms": [
        "Execution path: The instructions one process reaches in order.",
        "Process tree: A diagram showing parent-child creation relationships.",
        "Scheduling order: Which runnable process executes next; it can vary."
      ],
      "example": "If both processes from one fork reach a second fork, the second call runs twice and four processes may exist."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Tracing fork trees · Explore: The trace has just completed: Draw one node for the starting process. Which action should happen next?",
        "options": [
          "Branch once for the first fork",
          "Draw one node for the starting process",
          "Apply the second fork separately on both existing paths"
        ],
        "answer": 0,
        "explanation": "Branch once for the first fork. A later fork is executed once by each process that reaches it."
      },
      {
        "type": "match",
        "prompt": "Tracing fork trees · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Process tree",
            "A diagram showing parent-child creation relationships."
          ],
          [
            "Scheduling order",
            "Which runnable process executes next; it can vary."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Tracing fork trees · Explore: put the opening events in order.",
        "items": [
          "Draw one node for the starting process",
          "Branch once for the first fork"
        ],
        "explanation": "Start with one process and draw a fork as a parent-child branch. A later fork is executed once by each process that reaches it. Count the final leaves; do not assume a fixed order for their output."
      },
      {
        "type": "number",
        "prompt": "Tracing fork trees · Explore: A fork trace has 5 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 32,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "5 successive forks double the process count at each level: 2^5 = 32."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "fork",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 534.6,
        "text": "I mean, if you remember that in the last lecture, we were talking about the fork, right?"
      },
      {
        "time": 593.8,
        "text": "with our lecture with the four questions. So let's just first understand this fork and then we will be understanding the main question, which was this. So do you remember the objective? I think you guys might remember the objective. What was our objective to start all of this? This one, right? Understand how these two steps get performed and what are those t"
      }
    ],
    "start": 10
  },
  {
    "id": 11,
    "lecture": 3,
    "title": "Tracing fork trees · Apply",
    "concept": "A fork trace is a branching execution tree: only processes that reach a fork create another child. Count the final leaves; do not assume a fixed order for their output.",
    "teachingSteps": [
      "Use the idea in a new situation. Start with one process and draw a fork as a parent-child branch.",
      "A later fork is executed once by each process that reaches it.",
      "Count the final leaves; do not assume a fixed order for their output."
    ],
    "foundation": {
      "title": "Tracing fork trees",
      "idea": "A fork trace is a branching execution tree: only processes that reach a fork create another child.",
      "terms": [
        "Execution path: The instructions one process reaches in order.",
        "Process tree: A diagram showing parent-child creation relationships.",
        "Scheduling order: Which runnable process executes next; it can vary."
      ],
      "example": "If both processes from one fork reach a second fork, the second call runs twice and four processes may exist."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Tracing fork trees · Apply: In this new example, what should happen immediately before: Apply the second fork separately on both existing paths?",
        "options": [
          "Branch once for the first fork",
          "Apply the second fork separately on both existing paths",
          "Draw one node for the starting process"
        ],
        "answer": 0,
        "explanation": "Branch once for the first fork must happen first. A later fork is executed once by each process that reaches it."
      },
      {
        "type": "match",
        "prompt": "Tracing fork trees · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Scheduling order",
            "Which runnable process executes next; it can vary."
          ],
          [
            "Execution path",
            "The instructions one process reaches in order."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Tracing fork trees · Apply: put the final handoff in order.",
        "items": [
          "Branch once for the first fork",
          "Apply the second fork separately on both existing paths"
        ],
        "explanation": "Start with one process and draw a fork as a parent-child branch. A later fork is executed once by each process that reaches it. Count the final leaves; do not assume a fixed order for their output."
      },
      {
        "type": "number",
        "prompt": "Tracing fork trees · Apply: A fork trace has 6 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 64,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "6 successive forks double the process count at each level: 2^6 = 64."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "fork",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 534.6,
        "text": "I mean, if you remember that in the last lecture, we were talking about the fork, right?"
      },
      {
        "time": 593.8,
        "text": "with our lecture with the four questions. So let's just first understand this fork and then we will be understanding the main question, which was this. So do you remember the objective? I think you guys might remember the objective. What was our objective to start all of this? This one, right? Understand how these two steps get performed and what are those t"
      }
    ],
    "start": 11
  },
  {
    "id": 12,
    "lecture": 4,
    "title": "Replacing a process image with exec · Discover",
    "concept": "exec loads a new program into the current process, replacing its code and data while the process keeps its identity. fork creates another process; exec changes the program image of the process that calls it.",
    "teachingSteps": [
      "Start with the moving parts. fork creates another process; exec changes the program image of the process that calls it.",
      "The new image replaces old code, data and stack; successful exec does not return to old instructions.",
      "A shell commonly combines fork and exec when it wants to run a command without replacing itself."
    ],
    "foundation": {
      "title": "Replacing a process image with exec",
      "idea": "exec loads a new program into the current process, replacing its code and data while the process keeps its identity.",
      "terms": [
        "Process image: The code, data and stack currently loaded for a process.",
        "exec: A family of calls that replaces the current process image with a program.",
        "PID: A process identifier that usually remains the same across exec."
      ],
      "example": "A command shell can keep its process identity while replacing its image with the requested command."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Replacing a process image with exec · Discover: A shell process successfully calls exec to launch a command, what normally happens to the shell process image?",
        "options": [
          "It is replaced by the command image",
          "It is copied into a second process automatically",
          "It stays unchanged and the command runs as a thread"
        ],
        "answer": 0,
        "explanation": "It is replaced by the command image. exec loads a new program into the current process, replacing its code and data while the process keeps its identity."
      },
      {
        "type": "match",
        "prompt": "Replacing a process image with exec · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Process image",
            "The code, data and stack currently loaded for a process."
          ],
          [
            "exec",
            "A family of calls that replaces the current process image with a program."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Replacing a process image with exec · Discover: put these events in order.",
        "items": [
          "Keep the process identity and open resources",
          "Load the new executable image",
          "Begin at the new program entry point"
        ],
        "explanation": "fork creates another process; exec changes the program image of the process that calls it. The new image replaces old code, data and stack; successful exec does not return to old instructions. A shell commonly combines fork and exec when it wants to run a command without replacing itself."
      },
      {
        "type": "number",
        "prompt": "Replacing a process image with exec · Discover: A fork trace has 1 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 2,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "1 successive forks double the process count at each level: 2^1 = 2."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "exec",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 1546.62,
        "text": "So, Sangit is saying something like this, which is this, that first fork and created the replica of the parent process and then eject. Let's just see that what does this mean. So, what we are going to do, we are basically going to use fork and eject together. Let's just see how we are going to do this. Okay, and then you can easily understand this. That's ea"
      },
      {
        "time": 1574.93,
        "text": "So basically I want to execute or I want to create a new program. Now let's suppose there is shell process, which is already running. Okay. This shell process, which is already running. Now in the shell, I'm writing something called as let's suppose fork. Okay. So I mean the moment I say dot slash a dot out. Okay. In that particular moment, the first step I'"
      }
    ],
    "start": 12
  },
  {
    "id": 13,
    "lecture": 4,
    "title": "Replacing a process image with exec · Explore",
    "concept": "exec loads a new program into the current process, replacing its code and data while the process keeps its identity. The new image replaces old code, data and stack; successful exec does not return to old instructions.",
    "teachingSteps": [
      "Watch one example unfold. fork creates another process; exec changes the program image of the process that calls it.",
      "The new image replaces old code, data and stack; successful exec does not return to old instructions.",
      "A shell commonly combines fork and exec when it wants to run a command without replacing itself."
    ],
    "foundation": {
      "title": "Replacing a process image with exec",
      "idea": "exec loads a new program into the current process, replacing its code and data while the process keeps its identity.",
      "terms": [
        "Process image: The code, data and stack currently loaded for a process.",
        "exec: A family of calls that replaces the current process image with a program.",
        "PID: A process identifier that usually remains the same across exec."
      ],
      "example": "A command shell can keep its process identity while replacing its image with the requested command."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Replacing a process image with exec · Explore: The trace has just completed: Keep the process identity and open resources. Which action should happen next?",
        "options": [
          "Load the new executable image",
          "Keep the process identity and open resources",
          "Begin at the new program entry point"
        ],
        "answer": 0,
        "explanation": "Load the new executable image. The new image replaces old code, data and stack; successful exec does not return to old instructions."
      },
      {
        "type": "match",
        "prompt": "Replacing a process image with exec · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "exec",
            "A family of calls that replaces the current process image with a program."
          ],
          [
            "PID",
            "A process identifier that usually remains the same across exec."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Replacing a process image with exec · Explore: put the opening events in order.",
        "items": [
          "Keep the process identity and open resources",
          "Load the new executable image"
        ],
        "explanation": "fork creates another process; exec changes the program image of the process that calls it. The new image replaces old code, data and stack; successful exec does not return to old instructions. A shell commonly combines fork and exec when it wants to run a command without replacing itself."
      },
      {
        "type": "number",
        "prompt": "Replacing a process image with exec · Explore: A fork trace has 2 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 4,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "2 successive forks double the process count at each level: 2^2 = 4."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "exec",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 1546.62,
        "text": "So, Sangit is saying something like this, which is this, that first fork and created the replica of the parent process and then eject. Let's just see that what does this mean. So, what we are going to do, we are basically going to use fork and eject together. Let's just see how we are going to do this. Okay, and then you can easily understand this. That's ea"
      },
      {
        "time": 1574.93,
        "text": "So basically I want to execute or I want to create a new program. Now let's suppose there is shell process, which is already running. Okay. This shell process, which is already running. Now in the shell, I'm writing something called as let's suppose fork. Okay. So I mean the moment I say dot slash a dot out. Okay. In that particular moment, the first step I'"
      }
    ],
    "start": 13
  },
  {
    "id": 14,
    "lecture": 4,
    "title": "Replacing a process image with exec · Apply",
    "concept": "exec loads a new program into the current process, replacing its code and data while the process keeps its identity. A shell commonly combines fork and exec when it wants to run a command without replacing itself.",
    "teachingSteps": [
      "Use the idea in a new situation. fork creates another process; exec changes the program image of the process that calls it.",
      "The new image replaces old code, data and stack; successful exec does not return to old instructions.",
      "A shell commonly combines fork and exec when it wants to run a command without replacing itself."
    ],
    "foundation": {
      "title": "Replacing a process image with exec",
      "idea": "exec loads a new program into the current process, replacing its code and data while the process keeps its identity.",
      "terms": [
        "Process image: The code, data and stack currently loaded for a process.",
        "exec: A family of calls that replaces the current process image with a program.",
        "PID: A process identifier that usually remains the same across exec."
      ],
      "example": "A command shell can keep its process identity while replacing its image with the requested command."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Replacing a process image with exec · Apply: In this new example, what should happen immediately before: Begin at the new program entry point?",
        "options": [
          "Load the new executable image",
          "Begin at the new program entry point",
          "Keep the process identity and open resources"
        ],
        "answer": 0,
        "explanation": "Load the new executable image must happen first. The new image replaces old code, data and stack; successful exec does not return to old instructions."
      },
      {
        "type": "match",
        "prompt": "Replacing a process image with exec · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "PID",
            "A process identifier that usually remains the same across exec."
          ],
          [
            "Process image",
            "The code, data and stack currently loaded for a process."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Replacing a process image with exec · Apply: put the final handoff in order.",
        "items": [
          "Load the new executable image",
          "Begin at the new program entry point"
        ],
        "explanation": "fork creates another process; exec changes the program image of the process that calls it. The new image replaces old code, data and stack; successful exec does not return to old instructions. A shell commonly combines fork and exec when it wants to run a command without replacing itself."
      },
      {
        "type": "number",
        "prompt": "Replacing a process image with exec · Apply: A fork trace has 3 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 8,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "3 successive forks double the process count at each level: 2^3 = 8."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "exec",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 1546.62,
        "text": "So, Sangit is saying something like this, which is this, that first fork and created the replica of the parent process and then eject. Let's just see that what does this mean. So, what we are going to do, we are basically going to use fork and eject together. Let's just see how we are going to do this. Okay, and then you can easily understand this. That's ea"
      },
      {
        "time": 1574.93,
        "text": "So basically I want to execute or I want to create a new program. Now let's suppose there is shell process, which is already running. Okay. This shell process, which is already running. Now in the shell, I'm writing something called as let's suppose fork. Okay. So I mean the moment I say dot slash a dot out. Okay. In that particular moment, the first step I'"
      }
    ],
    "start": 14
  },
  {
    "id": 15,
    "lecture": 5,
    "title": "User mode, kernel mode and system calls · Discover",
    "concept": "Applications run with limited privileges and request protected operations through system calls handled by the kernel. User mode limits which instructions and device operations an application can perform.",
    "teachingSteps": [
      "Start with the moving parts. User mode limits which instructions and device operations an application can perform.",
      "A system call uses a defined entry point to switch into trusted kernel code.",
      "The kernel checks the request, performs or rejects it, then returns to user mode."
    ],
    "foundation": {
      "title": "User mode, kernel mode and system calls",
      "idea": "Applications run with limited privileges and request protected operations through system calls handled by the kernel.",
      "terms": [
        "User mode: A restricted CPU mode for application instructions.",
        "Kernel mode: A privileged mode for operating-system code.",
        "System call: A controlled request for a service such as reading a file."
      ],
      "example": "read asks the kernel to copy bytes from an open file into a process buffer after checking access and arguments."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "User mode, kernel mode and system calls · Discover: An application needs bytes from a file it cannot access directly as a device, which event safely transfers control to protected OS code?",
        "options": [
          "A system call trap into the kernel",
          "A direct jump to a disk controller register from user mode",
          "A context switch that skips kernel checks"
        ],
        "answer": 0,
        "explanation": "A system call trap into the kernel. Applications run with limited privileges and request protected operations through system calls handled by the kernel."
      },
      {
        "type": "match",
        "prompt": "User mode, kernel mode and system calls · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "User mode",
            "A restricted CPU mode for application instructions."
          ],
          [
            "Kernel mode",
            "A privileged mode for operating-system code."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "User mode, kernel mode and system calls · Discover: put these events in order.",
        "items": [
          "Application prepares a service request",
          "A controlled trap enters the kernel",
          "Kernel validates, performs the operation and returns a result"
        ],
        "explanation": "User mode limits which instructions and device operations an application can perform. A system call uses a defined entry point to switch into trusted kernel code. The kernel checks the request, performs or rejects it, then returns to user mode."
      },
      {
        "type": "number",
        "prompt": "User mode, kernel mode and system calls · Discover: A fork trace has 2 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 4,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "2 successive forks double the process count at each level: 2^2 = 4."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "syscall",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 1737.55,
        "text": "So that's what they are saying that if you want to return something, then also put that in the specific register and the switch back from the kernel mode to the user mode. Okay. Yes. Register are predefined for every specific task. Okay. For every specific task, registers are very well defined. Locations are very well defined. Okay. Depending on the operatin"
      },
      {
        "time": 2237.16,
        "text": "So do you want me to erase this or should I just keep it there? Maybe I can keep it there, right? Okay. So yeah, it is operating system dependent. What I'm saying is that there might be, there might be, I mean, we have talked about the user mode. We have talked about the kernel mode. Okay. Although it is completely optional to understand, but let me just tel"
      }
    ],
    "start": 15
  },
  {
    "id": 16,
    "lecture": 5,
    "title": "User mode, kernel mode and system calls · Explore",
    "concept": "Applications run with limited privileges and request protected operations through system calls handled by the kernel. A system call uses a defined entry point to switch into trusted kernel code.",
    "teachingSteps": [
      "Watch one example unfold. User mode limits which instructions and device operations an application can perform.",
      "A system call uses a defined entry point to switch into trusted kernel code.",
      "The kernel checks the request, performs or rejects it, then returns to user mode."
    ],
    "foundation": {
      "title": "User mode, kernel mode and system calls",
      "idea": "Applications run with limited privileges and request protected operations through system calls handled by the kernel.",
      "terms": [
        "User mode: A restricted CPU mode for application instructions.",
        "Kernel mode: A privileged mode for operating-system code.",
        "System call: A controlled request for a service such as reading a file."
      ],
      "example": "read asks the kernel to copy bytes from an open file into a process buffer after checking access and arguments."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "User mode, kernel mode and system calls · Explore: The trace has just completed: Application prepares a service request. Which action should happen next?",
        "options": [
          "A controlled trap enters the kernel",
          "Application prepares a service request",
          "Kernel validates, performs the operation and returns a result"
        ],
        "answer": 0,
        "explanation": "A controlled trap enters the kernel. A system call uses a defined entry point to switch into trusted kernel code."
      },
      {
        "type": "match",
        "prompt": "User mode, kernel mode and system calls · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Kernel mode",
            "A privileged mode for operating-system code."
          ],
          [
            "System call",
            "A controlled request for a service such as reading a file."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "User mode, kernel mode and system calls · Explore: put the opening events in order.",
        "items": [
          "Application prepares a service request",
          "A controlled trap enters the kernel"
        ],
        "explanation": "User mode limits which instructions and device operations an application can perform. A system call uses a defined entry point to switch into trusted kernel code. The kernel checks the request, performs or rejects it, then returns to user mode."
      },
      {
        "type": "number",
        "prompt": "User mode, kernel mode and system calls · Explore: A fork trace has 3 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 8,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "3 successive forks double the process count at each level: 2^3 = 8."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "syscall",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 1737.55,
        "text": "So that's what they are saying that if you want to return something, then also put that in the specific register and the switch back from the kernel mode to the user mode. Okay. Yes. Register are predefined for every specific task. Okay. For every specific task, registers are very well defined. Locations are very well defined. Okay. Depending on the operatin"
      },
      {
        "time": 2237.16,
        "text": "So do you want me to erase this or should I just keep it there? Maybe I can keep it there, right? Okay. So yeah, it is operating system dependent. What I'm saying is that there might be, there might be, I mean, we have talked about the user mode. We have talked about the kernel mode. Okay. Although it is completely optional to understand, but let me just tel"
      }
    ],
    "start": 16
  },
  {
    "id": 17,
    "lecture": 5,
    "title": "User mode, kernel mode and system calls · Apply",
    "concept": "Applications run with limited privileges and request protected operations through system calls handled by the kernel. The kernel checks the request, performs or rejects it, then returns to user mode.",
    "teachingSteps": [
      "Use the idea in a new situation. User mode limits which instructions and device operations an application can perform.",
      "A system call uses a defined entry point to switch into trusted kernel code.",
      "The kernel checks the request, performs or rejects it, then returns to user mode."
    ],
    "foundation": {
      "title": "User mode, kernel mode and system calls",
      "idea": "Applications run with limited privileges and request protected operations through system calls handled by the kernel.",
      "terms": [
        "User mode: A restricted CPU mode for application instructions.",
        "Kernel mode: A privileged mode for operating-system code.",
        "System call: A controlled request for a service such as reading a file."
      ],
      "example": "read asks the kernel to copy bytes from an open file into a process buffer after checking access and arguments."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "User mode, kernel mode and system calls · Apply: In this new example, what should happen immediately before: Kernel validates, performs the operation and returns a result?",
        "options": [
          "A controlled trap enters the kernel",
          "Kernel validates, performs the operation and returns a result",
          "Application prepares a service request"
        ],
        "answer": 0,
        "explanation": "A controlled trap enters the kernel must happen first. A system call uses a defined entry point to switch into trusted kernel code."
      },
      {
        "type": "match",
        "prompt": "User mode, kernel mode and system calls · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "System call",
            "A controlled request for a service such as reading a file."
          ],
          [
            "User mode",
            "A restricted CPU mode for application instructions."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "User mode, kernel mode and system calls · Apply: put the final handoff in order.",
        "items": [
          "A controlled trap enters the kernel",
          "Kernel validates, performs the operation and returns a result"
        ],
        "explanation": "User mode limits which instructions and device operations an application can perform. A system call uses a defined entry point to switch into trusted kernel code. The kernel checks the request, performs or rejects it, then returns to user mode."
      },
      {
        "type": "number",
        "prompt": "User mode, kernel mode and system calls · Apply: A fork trace has 4 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 16,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "4 successive forks double the process count at each level: 2^4 = 16."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "syscall",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 1737.55,
        "text": "So that's what they are saying that if you want to return something, then also put that in the specific register and the switch back from the kernel mode to the user mode. Okay. Yes. Register are predefined for every specific task. Okay. For every specific task, registers are very well defined. Locations are very well defined. Okay. Depending on the operatin"
      },
      {
        "time": 2237.16,
        "text": "So do you want me to erase this or should I just keep it there? Maybe I can keep it there, right? Okay. So yeah, it is operating system dependent. What I'm saying is that there might be, there might be, I mean, we have talked about the user mode. We have talked about the kernel mode. Okay. Although it is completely optional to understand, but let me just tel"
      }
    ],
    "start": 17
  },
  {
    "id": 18,
    "lecture": 6,
    "title": "User-level and kernel-level threads · Discover",
    "concept": "Threads are execution paths within a process; they share process resources but each needs its own instruction position and stack. A process supplies shared code, data and many OS resources.",
    "teachingSteps": [
      "Start with the moving parts. A process supplies shared code, data and many OS resources.",
      "Threads in that process each need their own stack and current register values.",
      "If one thread blocks, whether another can run depends on how user and kernel threads are mapped."
    ],
    "foundation": {
      "title": "User-level and kernel-level threads",
      "idea": "Threads are execution paths within a process; they share process resources but each needs its own instruction position and stack.",
      "terms": [
        "Thread: A schedulable path of execution with its own registers and stack.",
        "Shared address space: Memory mappings that threads of one process can access together.",
        "User-level thread: A thread managed by a runtime library in user space."
      ],
      "example": "Two browser tabs implemented as threads may share a process address space while keeping separate stacks."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "User-level and kernel-level threads · Discover: Two threads belong to one process and update different local variables, which resource is private to each thread during execution?",
        "options": [
          "Its register state and stack",
          "The process code mapping",
          "The process-wide open-file table"
        ],
        "answer": 0,
        "explanation": "Its register state and stack. Threads are execution paths within a process; they share process resources but each needs its own instruction position and stack."
      },
      {
        "type": "match",
        "prompt": "User-level and kernel-level threads · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Thread",
            "A schedulable path of execution with its own registers and stack."
          ],
          [
            "Shared address space",
            "Memory mappings that threads of one process can access together."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "User-level and kernel-level threads · Discover: put these events in order.",
        "items": [
          "Create a process with a shared address space",
          "Give each thread its own stack and saved registers",
          "Schedule threads according to the mapping model"
        ],
        "explanation": "A process supplies shared code, data and many OS resources. Threads in that process each need their own stack and current register values. If one thread blocks, whether another can run depends on how user and kernel threads are mapped."
      },
      {
        "type": "number",
        "prompt": "User-level and kernel-level threads · Discover: A fork trace has 3 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 8,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "3 successive forks double the process count at each level: 2^3 = 8."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "threads",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 312.21,
        "text": "Sorry. So now let's get started with our new things. So threads are of two type. One is user level. Another one is kernel level. Right? Okay. Now, what is the user level thread? User level thread means like we are making the threads using the function code. And what are the kernel level threads? Kernel level threads are we are making the threads using the sy"
      },
      {
        "time": 380.72,
        "text": "I'm not sure if this line is very much appropriate. So I'm just removing it. So how to create the user level threads or how to initiate the user level threads, we can do that using the system using using some libraries. And similarly for the kernel level threads, you can you have some library that help us. Okay. So even even in the gal when they talked about"
      }
    ],
    "start": 18
  },
  {
    "id": 19,
    "lecture": 6,
    "title": "User-level and kernel-level threads · Explore",
    "concept": "Threads are execution paths within a process; they share process resources but each needs its own instruction position and stack. Threads in that process each need their own stack and current register values.",
    "teachingSteps": [
      "Watch one example unfold. A process supplies shared code, data and many OS resources.",
      "Threads in that process each need their own stack and current register values.",
      "If one thread blocks, whether another can run depends on how user and kernel threads are mapped."
    ],
    "foundation": {
      "title": "User-level and kernel-level threads",
      "idea": "Threads are execution paths within a process; they share process resources but each needs its own instruction position and stack.",
      "terms": [
        "Thread: A schedulable path of execution with its own registers and stack.",
        "Shared address space: Memory mappings that threads of one process can access together.",
        "User-level thread: A thread managed by a runtime library in user space."
      ],
      "example": "Two browser tabs implemented as threads may share a process address space while keeping separate stacks."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "User-level and kernel-level threads · Explore: The trace has just completed: Create a process with a shared address space. Which action should happen next?",
        "options": [
          "Give each thread its own stack and saved registers",
          "Create a process with a shared address space",
          "Schedule threads according to the mapping model"
        ],
        "answer": 0,
        "explanation": "Give each thread its own stack and saved registers. Threads in that process each need their own stack and current register values."
      },
      {
        "type": "match",
        "prompt": "User-level and kernel-level threads · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Shared address space",
            "Memory mappings that threads of one process can access together."
          ],
          [
            "User-level thread",
            "A thread managed by a runtime library in user space."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "User-level and kernel-level threads · Explore: put the opening events in order.",
        "items": [
          "Create a process with a shared address space",
          "Give each thread its own stack and saved registers"
        ],
        "explanation": "A process supplies shared code, data and many OS resources. Threads in that process each need their own stack and current register values. If one thread blocks, whether another can run depends on how user and kernel threads are mapped."
      },
      {
        "type": "number",
        "prompt": "User-level and kernel-level threads · Explore: A fork trace has 4 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 16,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "4 successive forks double the process count at each level: 2^4 = 16."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "threads",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 312.21,
        "text": "Sorry. So now let's get started with our new things. So threads are of two type. One is user level. Another one is kernel level. Right? Okay. Now, what is the user level thread? User level thread means like we are making the threads using the function code. And what are the kernel level threads? Kernel level threads are we are making the threads using the sy"
      },
      {
        "time": 380.72,
        "text": "I'm not sure if this line is very much appropriate. So I'm just removing it. So how to create the user level threads or how to initiate the user level threads, we can do that using the system using using some libraries. And similarly for the kernel level threads, you can you have some library that help us. Okay. So even even in the gal when they talked about"
      }
    ],
    "start": 19
  },
  {
    "id": 20,
    "lecture": 6,
    "title": "User-level and kernel-level threads · Apply",
    "concept": "Threads are execution paths within a process; they share process resources but each needs its own instruction position and stack. If one thread blocks, whether another can run depends on how user and kernel threads are mapped.",
    "teachingSteps": [
      "Use the idea in a new situation. A process supplies shared code, data and many OS resources.",
      "Threads in that process each need their own stack and current register values.",
      "If one thread blocks, whether another can run depends on how user and kernel threads are mapped."
    ],
    "foundation": {
      "title": "User-level and kernel-level threads",
      "idea": "Threads are execution paths within a process; they share process resources but each needs its own instruction position and stack.",
      "terms": [
        "Thread: A schedulable path of execution with its own registers and stack.",
        "Shared address space: Memory mappings that threads of one process can access together.",
        "User-level thread: A thread managed by a runtime library in user space."
      ],
      "example": "Two browser tabs implemented as threads may share a process address space while keeping separate stacks."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "User-level and kernel-level threads · Apply: In this new example, what should happen immediately before: Schedule threads according to the mapping model?",
        "options": [
          "Give each thread its own stack and saved registers",
          "Schedule threads according to the mapping model",
          "Create a process with a shared address space"
        ],
        "answer": 0,
        "explanation": "Give each thread its own stack and saved registers must happen first. Threads in that process each need their own stack and current register values."
      },
      {
        "type": "match",
        "prompt": "User-level and kernel-level threads · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "User-level thread",
            "A thread managed by a runtime library in user space."
          ],
          [
            "Thread",
            "A schedulable path of execution with its own registers and stack."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "User-level and kernel-level threads · Apply: put the final handoff in order.",
        "items": [
          "Give each thread its own stack and saved registers",
          "Schedule threads according to the mapping model"
        ],
        "explanation": "A process supplies shared code, data and many OS resources. Threads in that process each need their own stack and current register values. If one thread blocks, whether another can run depends on how user and kernel threads are mapped."
      },
      {
        "type": "number",
        "prompt": "User-level and kernel-level threads · Apply: A fork trace has 5 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 32,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "5 successive forks double the process count at each level: 2^5 = 32."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "threads",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 312.21,
        "text": "Sorry. So now let's get started with our new things. So threads are of two type. One is user level. Another one is kernel level. Right? Okay. Now, what is the user level thread? User level thread means like we are making the threads using the function code. And what are the kernel level threads? Kernel level threads are we are making the threads using the sy"
      },
      {
        "time": 380.72,
        "text": "I'm not sure if this line is very much appropriate. So I'm just removing it. So how to create the user level threads or how to initiate the user level threads, we can do that using the system using using some libraries. And similarly for the kernel level threads, you can you have some library that help us. Okay. So even even in the gal when they talked about"
      }
    ],
    "start": 20
  },
  {
    "id": 21,
    "lecture": 7,
    "title": "Thread mappings and context switches · Discover",
    "concept": "A thread mapping determines how user threads correspond to kernel-scheduled threads; a context switch saves one execution and restores another. The mapping sets how many kernel-schedulable threads back the user threads.",
    "teachingSteps": [
      "Start with the moving parts. The mapping sets how many kernel-schedulable threads back the user threads.",
      "A context switch saves enough CPU state to resume the outgoing thread later.",
      "Kernel-visible concurrency allows another mapped thread to run when one blocks."
    ],
    "foundation": {
      "title": "Thread mappings and context switches",
      "idea": "A thread mapping determines how user threads correspond to kernel-scheduled threads; a context switch saves one execution and restores another.",
      "terms": [
        "Many-to-one: Many user threads map to one kernel thread.",
        "One-to-one: Each user thread maps to a kernel thread.",
        "Context switch: Save the outgoing execution state and restore the incoming state."
      ],
      "example": "With many-to-one mapping, one blocking system call can block the only kernel thread and stall every user thread in that process."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Thread mappings and context switches · Discover: Three user threads map to one kernel thread, which blocks in a system call, can another user thread from that same mapping run on a different CPU meanwhile?",
        "options": [
          "No; all three share the single blocked kernel thread",
          "Yes, every user thread always has a kernel thread",
          "Yes, because process memory is shared"
        ],
        "answer": 0,
        "explanation": "No; all three share the single blocked kernel thread. A thread mapping determines how user threads correspond to kernel-scheduled threads; a context switch saves one execution and restores another."
      },
      {
        "type": "match",
        "prompt": "Thread mappings and context switches · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Many-to-one",
            "Many user threads map to one kernel thread."
          ],
          [
            "One-to-one",
            "Each user thread maps to a kernel thread."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Thread mappings and context switches · Discover: put these events in order.",
        "items": [
          "Choose the user-to-kernel mapping",
          "Save the outgoing thread registers and stack pointer",
          "Restore the incoming thread state and resume it"
        ],
        "explanation": "The mapping sets how many kernel-schedulable threads back the user threads. A context switch saves enough CPU state to resume the outgoing thread later. Kernel-visible concurrency allows another mapped thread to run when one blocks."
      },
      {
        "type": "number",
        "prompt": "Thread mappings and context switches · Discover: A fork trace has 4 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 16,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "4 successive forks double the process count at each level: 2^4 = 16."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "threads",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 78.88,
        "text": "Like, I mean, we have a little bit discussed about something called as many to one, one to many, these kind of thread, I mean, these kind of models, but maybe today we can talk a little more about it. Okay. Cool. So let me move to the next slide. So today we will be discussing threading and context switching. And if time permits, then we will be, we will be "
      },
      {
        "time": 1795.81,
        "text": "comparatively, it is not an advantage anymore. I mean, every operating system supports the kernel level thread, something like that. So it was some context, some related to some context. Anyway, so they are saying that every operating system, the modern operating system like Windows, Mac OS, I think these are the three popular operating systems, they support"
      }
    ],
    "start": 21
  },
  {
    "id": 22,
    "lecture": 7,
    "title": "Thread mappings and context switches · Explore",
    "concept": "A thread mapping determines how user threads correspond to kernel-scheduled threads; a context switch saves one execution and restores another. A context switch saves enough CPU state to resume the outgoing thread later.",
    "teachingSteps": [
      "Watch one example unfold. The mapping sets how many kernel-schedulable threads back the user threads.",
      "A context switch saves enough CPU state to resume the outgoing thread later.",
      "Kernel-visible concurrency allows another mapped thread to run when one blocks."
    ],
    "foundation": {
      "title": "Thread mappings and context switches",
      "idea": "A thread mapping determines how user threads correspond to kernel-scheduled threads; a context switch saves one execution and restores another.",
      "terms": [
        "Many-to-one: Many user threads map to one kernel thread.",
        "One-to-one: Each user thread maps to a kernel thread.",
        "Context switch: Save the outgoing execution state and restore the incoming state."
      ],
      "example": "With many-to-one mapping, one blocking system call can block the only kernel thread and stall every user thread in that process."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Thread mappings and context switches · Explore: The trace has just completed: Choose the user-to-kernel mapping. Which action should happen next?",
        "options": [
          "Save the outgoing thread registers and stack pointer",
          "Choose the user-to-kernel mapping",
          "Restore the incoming thread state and resume it"
        ],
        "answer": 0,
        "explanation": "Save the outgoing thread registers and stack pointer. A context switch saves enough CPU state to resume the outgoing thread later."
      },
      {
        "type": "match",
        "prompt": "Thread mappings and context switches · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "One-to-one",
            "Each user thread maps to a kernel thread."
          ],
          [
            "Context switch",
            "Save the outgoing execution state and restore the incoming state."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Thread mappings and context switches · Explore: put the opening events in order.",
        "items": [
          "Choose the user-to-kernel mapping",
          "Save the outgoing thread registers and stack pointer"
        ],
        "explanation": "The mapping sets how many kernel-schedulable threads back the user threads. A context switch saves enough CPU state to resume the outgoing thread later. Kernel-visible concurrency allows another mapped thread to run when one blocks."
      },
      {
        "type": "number",
        "prompt": "Thread mappings and context switches · Explore: A fork trace has 5 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 32,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "5 successive forks double the process count at each level: 2^5 = 32."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "threads",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 78.88,
        "text": "Like, I mean, we have a little bit discussed about something called as many to one, one to many, these kind of thread, I mean, these kind of models, but maybe today we can talk a little more about it. Okay. Cool. So let me move to the next slide. So today we will be discussing threading and context switching. And if time permits, then we will be, we will be "
      },
      {
        "time": 1795.81,
        "text": "comparatively, it is not an advantage anymore. I mean, every operating system supports the kernel level thread, something like that. So it was some context, some related to some context. Anyway, so they are saying that every operating system, the modern operating system like Windows, Mac OS, I think these are the three popular operating systems, they support"
      }
    ],
    "start": 22
  },
  {
    "id": 23,
    "lecture": 7,
    "title": "Thread mappings and context switches · Apply",
    "concept": "A thread mapping determines how user threads correspond to kernel-scheduled threads; a context switch saves one execution and restores another. Kernel-visible concurrency allows another mapped thread to run when one blocks.",
    "teachingSteps": [
      "Use the idea in a new situation. The mapping sets how many kernel-schedulable threads back the user threads.",
      "A context switch saves enough CPU state to resume the outgoing thread later.",
      "Kernel-visible concurrency allows another mapped thread to run when one blocks."
    ],
    "foundation": {
      "title": "Thread mappings and context switches",
      "idea": "A thread mapping determines how user threads correspond to kernel-scheduled threads; a context switch saves one execution and restores another.",
      "terms": [
        "Many-to-one: Many user threads map to one kernel thread.",
        "One-to-one: Each user thread maps to a kernel thread.",
        "Context switch: Save the outgoing execution state and restore the incoming state."
      ],
      "example": "With many-to-one mapping, one blocking system call can block the only kernel thread and stall every user thread in that process."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Thread mappings and context switches · Apply: In this new example, what should happen immediately before: Restore the incoming thread state and resume it?",
        "options": [
          "Save the outgoing thread registers and stack pointer",
          "Restore the incoming thread state and resume it",
          "Choose the user-to-kernel mapping"
        ],
        "answer": 0,
        "explanation": "Save the outgoing thread registers and stack pointer must happen first. A context switch saves enough CPU state to resume the outgoing thread later."
      },
      {
        "type": "match",
        "prompt": "Thread mappings and context switches · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Context switch",
            "Save the outgoing execution state and restore the incoming state."
          ],
          [
            "Many-to-one",
            "Many user threads map to one kernel thread."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Thread mappings and context switches · Apply: put the final handoff in order.",
        "items": [
          "Save the outgoing thread registers and stack pointer",
          "Restore the incoming thread state and resume it"
        ],
        "explanation": "The mapping sets how many kernel-schedulable threads back the user threads. A context switch saves enough CPU state to resume the outgoing thread later. Kernel-visible concurrency allows another mapped thread to run when one blocks."
      },
      {
        "type": "number",
        "prompt": "Thread mappings and context switches · Apply: A fork trace has 6 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 64,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "6 successive forks double the process count at each level: 2^6 = 64."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "threads",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 78.88,
        "text": "Like, I mean, we have a little bit discussed about something called as many to one, one to many, these kind of thread, I mean, these kind of models, but maybe today we can talk a little more about it. Okay. Cool. So let me move to the next slide. So today we will be discussing threading and context switching. And if time permits, then we will be, we will be "
      },
      {
        "time": 1795.81,
        "text": "comparatively, it is not an advantage anymore. I mean, every operating system supports the kernel level thread, something like that. So it was some context, some related to some context. Anyway, so they are saying that every operating system, the modern operating system like Windows, Mac OS, I think these are the three popular operating systems, they support"
      }
    ],
    "start": 23
  },
  {
    "id": 24,
    "lecture": 8,
    "title": "Process states and schedulers · Discover",
    "concept": "A process moves among states as it waits for CPU time, requests I/O and finishes; different schedulers make decisions at different timescales. Ready means the process could run immediately if it received a CPU.",
    "teachingSteps": [
      "Start with the moving parts. Ready means the process could run immediately if it received a CPU.",
      "Running work that waits on I/O blocks so the CPU can do useful work elsewhere.",
      "When the event finishes, the process joins the ready queue and waits for dispatch."
    ],
    "foundation": {
      "title": "Process states and schedulers",
      "idea": "A process moves among states as it waits for CPU time, requests I/O and finishes; different schedulers make decisions at different timescales.",
      "terms": [
        "Ready: Able to run, waiting for a CPU.",
        "Blocked: Waiting for an event such as I/O completion.",
        "Long-term scheduler: Admits work into the system; the short-term scheduler chooses a ready process."
      ],
      "example": "A process running a disk read becomes blocked; after the read completes it returns to ready, not directly to running."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Process states and schedulers · Discover: A running process requests disk I/O and its data is not ready yet, what state should it enter while waiting?",
        "options": [
          "Blocked",
          "Ready, because it is waiting for the CPU",
          "Terminated, because it made a request"
        ],
        "answer": 0,
        "explanation": "Blocked. A process moves among states as it waits for CPU time, requests I/O and finishes; different schedulers make decisions at different timescales."
      },
      {
        "type": "match",
        "prompt": "Process states and schedulers · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Ready",
            "Able to run, waiting for a CPU."
          ],
          [
            "Blocked",
            "Waiting for an event such as I/O completion."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Process states and schedulers · Discover: put these events in order.",
        "items": [
          "Admit a process to the system",
          "Dispatch a ready process onto the CPU",
          "Block for an event, then return to ready when it occurs"
        ],
        "explanation": "Ready means the process could run immediately if it received a CPU. Running work that waits on I/O blocks so the CPU can do useful work elsewhere. When the event finishes, the process joins the ready queue and waits for dispatch."
      },
      {
        "type": "number",
        "prompt": "Process states and schedulers · Discover: A fork trace has 1 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 2,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "1 successive forks double the process count at each level: 2^1 = 2."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "states",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 66.59,
        "text": "Okay, so yeah, so today we are going to start like, I mean, today whatever we are going to start is not very complicated, but it is very necessary. It is basically one of the very fundamental block that we need to study, right? Okay. So today, as I just told you that today we are going to start process states and then few other things. Okay. So I hope everyo"
      },
      {
        "time": 4223.54,
        "text": "Let's just, let's just talk about something called the schedulers. So there are multiple schedulers that operating system uses. So this is a new topic and this is not related to the process state diagram that we have. We will be solving the questions about the process states, maybe in this class or maybe in the next class, but this is a new topic. So, I mean"
      }
    ],
    "start": 24
  },
  {
    "id": 25,
    "lecture": 8,
    "title": "Process states and schedulers · Explore",
    "concept": "A process moves among states as it waits for CPU time, requests I/O and finishes; different schedulers make decisions at different timescales. Running work that waits on I/O blocks so the CPU can do useful work elsewhere.",
    "teachingSteps": [
      "Watch one example unfold. Ready means the process could run immediately if it received a CPU.",
      "Running work that waits on I/O blocks so the CPU can do useful work elsewhere.",
      "When the event finishes, the process joins the ready queue and waits for dispatch."
    ],
    "foundation": {
      "title": "Process states and schedulers",
      "idea": "A process moves among states as it waits for CPU time, requests I/O and finishes; different schedulers make decisions at different timescales.",
      "terms": [
        "Ready: Able to run, waiting for a CPU.",
        "Blocked: Waiting for an event such as I/O completion.",
        "Long-term scheduler: Admits work into the system; the short-term scheduler chooses a ready process."
      ],
      "example": "A process running a disk read becomes blocked; after the read completes it returns to ready, not directly to running."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Process states and schedulers · Explore: The trace has just completed: Admit a process to the system. Which action should happen next?",
        "options": [
          "Dispatch a ready process onto the CPU",
          "Admit a process to the system",
          "Block for an event, then return to ready when it occurs"
        ],
        "answer": 0,
        "explanation": "Dispatch a ready process onto the CPU. Running work that waits on I/O blocks so the CPU can do useful work elsewhere."
      },
      {
        "type": "match",
        "prompt": "Process states and schedulers · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Blocked",
            "Waiting for an event such as I/O completion."
          ],
          [
            "Long-term scheduler",
            "Admits work into the system; the short-term scheduler chooses a ready process."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Process states and schedulers · Explore: put the opening events in order.",
        "items": [
          "Admit a process to the system",
          "Dispatch a ready process onto the CPU"
        ],
        "explanation": "Ready means the process could run immediately if it received a CPU. Running work that waits on I/O blocks so the CPU can do useful work elsewhere. When the event finishes, the process joins the ready queue and waits for dispatch."
      },
      {
        "type": "number",
        "prompt": "Process states and schedulers · Explore: A fork trace has 2 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 4,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "2 successive forks double the process count at each level: 2^2 = 4."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "states",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 66.59,
        "text": "Okay, so yeah, so today we are going to start like, I mean, today whatever we are going to start is not very complicated, but it is very necessary. It is basically one of the very fundamental block that we need to study, right? Okay. So today, as I just told you that today we are going to start process states and then few other things. Okay. So I hope everyo"
      },
      {
        "time": 4223.54,
        "text": "Let's just, let's just talk about something called the schedulers. So there are multiple schedulers that operating system uses. So this is a new topic and this is not related to the process state diagram that we have. We will be solving the questions about the process states, maybe in this class or maybe in the next class, but this is a new topic. So, I mean"
      }
    ],
    "start": 25
  },
  {
    "id": 26,
    "lecture": 8,
    "title": "Process states and schedulers · Apply",
    "concept": "A process moves among states as it waits for CPU time, requests I/O and finishes; different schedulers make decisions at different timescales. When the event finishes, the process joins the ready queue and waits for dispatch.",
    "teachingSteps": [
      "Use the idea in a new situation. Ready means the process could run immediately if it received a CPU.",
      "Running work that waits on I/O blocks so the CPU can do useful work elsewhere.",
      "When the event finishes, the process joins the ready queue and waits for dispatch."
    ],
    "foundation": {
      "title": "Process states and schedulers",
      "idea": "A process moves among states as it waits for CPU time, requests I/O and finishes; different schedulers make decisions at different timescales.",
      "terms": [
        "Ready: Able to run, waiting for a CPU.",
        "Blocked: Waiting for an event such as I/O completion.",
        "Long-term scheduler: Admits work into the system; the short-term scheduler chooses a ready process."
      ],
      "example": "A process running a disk read becomes blocked; after the read completes it returns to ready, not directly to running."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Process states and schedulers · Apply: In this new example, what should happen immediately before: Block for an event, then return to ready when it occurs?",
        "options": [
          "Dispatch a ready process onto the CPU",
          "Block for an event, then return to ready when it occurs",
          "Admit a process to the system"
        ],
        "answer": 0,
        "explanation": "Dispatch a ready process onto the CPU must happen first. Running work that waits on I/O blocks so the CPU can do useful work elsewhere."
      },
      {
        "type": "match",
        "prompt": "Process states and schedulers · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Long-term scheduler",
            "Admits work into the system; the short-term scheduler chooses a ready process."
          ],
          [
            "Ready",
            "Able to run, waiting for a CPU."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Process states and schedulers · Apply: put the final handoff in order.",
        "items": [
          "Dispatch a ready process onto the CPU",
          "Block for an event, then return to ready when it occurs"
        ],
        "explanation": "Ready means the process could run immediately if it received a CPU. Running work that waits on I/O blocks so the CPU can do useful work elsewhere. When the event finishes, the process joins the ready queue and waits for dispatch."
      },
      {
        "type": "number",
        "prompt": "Process states and schedulers · Apply: A fork trace has 3 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 8,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "3 successive forks double the process count at each level: 2^3 = 8."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "states",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 66.59,
        "text": "Okay, so yeah, so today we are going to start like, I mean, today whatever we are going to start is not very complicated, but it is very necessary. It is basically one of the very fundamental block that we need to study, right? Okay. So today, as I just told you that today we are going to start process states and then few other things. Okay. So I hope everyo"
      },
      {
        "time": 4223.54,
        "text": "Let's just, let's just talk about something called the schedulers. So there are multiple schedulers that operating system uses. So this is a new topic and this is not related to the process state diagram that we have. We will be solving the questions about the process states, maybe in this class or maybe in the next class, but this is a new topic. So, I mean"
      }
    ],
    "start": 26
  },
  {
    "id": 27,
    "lecture": 9,
    "title": "Scheduling goals and first-come-first-served · Discover",
    "concept": "A CPU scheduler chooses a ready process; scheduling metrics describe different costs experienced by each job. FCFS follows arrival order and does not interrupt a running CPU burst.",
    "teachingSteps": [
      "Start with the moving parts. FCFS follows arrival order and does not interrupt a running CPU burst.",
      "Waiting time is the time before service; turnaround includes service and any other time until completion.",
      "A long first job can make short jobs wait behind it, called the convoy effect."
    ],
    "foundation": {
      "title": "Scheduling goals and first-come-first-served",
      "idea": "A CPU scheduler chooses a ready process; scheduling metrics describe different costs experienced by each job.",
      "terms": [
        "Arrival time: When a process enters the ready system.",
        "Turnaround time: Finish time minus arrival time.",
        "Waiting time: Total time spent ready but not running."
      ],
      "example": "If a job arrives at time 2 and finishes at time 9, its turnaround is 7 time units."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Scheduling goals and first-come-first-served · Discover: Two jobs are ready together and a non-preemptive FCFS scheduler uses arrival order, which job receives the CPU first?",
        "options": [
          "The one that arrived first",
          "Always the shortest job",
          "The job with the earliest deadline, even when none is specified"
        ],
        "answer": 0,
        "explanation": "The one that arrived first. A CPU scheduler chooses a ready process; scheduling metrics describe different costs experienced by each job."
      },
      {
        "type": "match",
        "prompt": "Scheduling goals and first-come-first-served · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Arrival time",
            "When a process enters the ready system."
          ],
          [
            "Turnaround time",
            "Finish time minus arrival time."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Scheduling goals and first-come-first-served · Discover: put these events in order.",
        "items": [
          "Put arriving jobs at the end of the ready queue",
          "Run the front job until its CPU burst ends",
          "Measure waiting and turnaround separately"
        ],
        "explanation": "FCFS follows arrival order and does not interrupt a running CPU burst. Waiting time is the time before service; turnaround includes service and any other time until completion. A long first job can make short jobs wait behind it, called the convoy effect."
      },
      {
        "type": "number",
        "prompt": "Scheduling goals and first-come-first-served · Discover: A process needs 5 CPU units and receives 2 units per round-robin turn. How many CPU units remain after its first turn?",
        "answer": 3,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "The first turn uses 2 of 5 units, leaving 3."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 504.09,
        "text": "might have existed, then do you think that we might be talking about so many scheduling algorithms since so many years? There are many scheduling algorithms like FCFS round or round robin shortage or first and these kind of things, right? So basically there are many scheduling algorithms. If there is just one scheduling algorithm, which is perfect, then mayb"
      },
      {
        "time": 1245.21,
        "text": "What are the metrics to look for when designing scheduling algorithm? Now, let's just understand the very first schedule algorithm, which is also very popular. It is called first come first serve. Okay. Or some people can call it first in first out FIFO, or maybe you can call it first come first serve. So by far it is the simplest scheduling algorithm, CPU s"
      }
    ],
    "start": 27
  },
  {
    "id": 28,
    "lecture": 9,
    "title": "Scheduling goals and first-come-first-served · Explore",
    "concept": "A CPU scheduler chooses a ready process; scheduling metrics describe different costs experienced by each job. Waiting time is the time before service; turnaround includes service and any other time until completion.",
    "teachingSteps": [
      "Watch one example unfold. FCFS follows arrival order and does not interrupt a running CPU burst.",
      "Waiting time is the time before service; turnaround includes service and any other time until completion.",
      "A long first job can make short jobs wait behind it, called the convoy effect."
    ],
    "foundation": {
      "title": "Scheduling goals and first-come-first-served",
      "idea": "A CPU scheduler chooses a ready process; scheduling metrics describe different costs experienced by each job.",
      "terms": [
        "Arrival time: When a process enters the ready system.",
        "Turnaround time: Finish time minus arrival time.",
        "Waiting time: Total time spent ready but not running."
      ],
      "example": "If a job arrives at time 2 and finishes at time 9, its turnaround is 7 time units."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Scheduling goals and first-come-first-served · Explore: The trace has just completed: Put arriving jobs at the end of the ready queue. Which action should happen next?",
        "options": [
          "Run the front job until its CPU burst ends",
          "Put arriving jobs at the end of the ready queue",
          "Measure waiting and turnaround separately"
        ],
        "answer": 0,
        "explanation": "Run the front job until its CPU burst ends. Waiting time is the time before service; turnaround includes service and any other time until completion."
      },
      {
        "type": "match",
        "prompt": "Scheduling goals and first-come-first-served · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Turnaround time",
            "Finish time minus arrival time."
          ],
          [
            "Waiting time",
            "Total time spent ready but not running."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Scheduling goals and first-come-first-served · Explore: put the opening events in order.",
        "items": [
          "Put arriving jobs at the end of the ready queue",
          "Run the front job until its CPU burst ends"
        ],
        "explanation": "FCFS follows arrival order and does not interrupt a running CPU burst. Waiting time is the time before service; turnaround includes service and any other time until completion. A long first job can make short jobs wait behind it, called the convoy effect."
      },
      {
        "type": "number",
        "prompt": "Scheduling goals and first-come-first-served · Explore: A process needs 6 CPU units and receives 2 units per round-robin turn. How many CPU units remain after its first turn?",
        "answer": 4,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "The first turn uses 2 of 6 units, leaving 4."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 504.09,
        "text": "might have existed, then do you think that we might be talking about so many scheduling algorithms since so many years? There are many scheduling algorithms like FCFS round or round robin shortage or first and these kind of things, right? So basically there are many scheduling algorithms. If there is just one scheduling algorithm, which is perfect, then mayb"
      },
      {
        "time": 1245.21,
        "text": "What are the metrics to look for when designing scheduling algorithm? Now, let's just understand the very first schedule algorithm, which is also very popular. It is called first come first serve. Okay. Or some people can call it first in first out FIFO, or maybe you can call it first come first serve. So by far it is the simplest scheduling algorithm, CPU s"
      }
    ],
    "start": 28
  },
  {
    "id": 29,
    "lecture": 9,
    "title": "Scheduling goals and first-come-first-served · Apply",
    "concept": "A CPU scheduler chooses a ready process; scheduling metrics describe different costs experienced by each job. A long first job can make short jobs wait behind it, called the convoy effect.",
    "teachingSteps": [
      "Use the idea in a new situation. FCFS follows arrival order and does not interrupt a running CPU burst.",
      "Waiting time is the time before service; turnaround includes service and any other time until completion.",
      "A long first job can make short jobs wait behind it, called the convoy effect."
    ],
    "foundation": {
      "title": "Scheduling goals and first-come-first-served",
      "idea": "A CPU scheduler chooses a ready process; scheduling metrics describe different costs experienced by each job.",
      "terms": [
        "Arrival time: When a process enters the ready system.",
        "Turnaround time: Finish time minus arrival time.",
        "Waiting time: Total time spent ready but not running."
      ],
      "example": "If a job arrives at time 2 and finishes at time 9, its turnaround is 7 time units."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Scheduling goals and first-come-first-served · Apply: In this new example, what should happen immediately before: Measure waiting and turnaround separately?",
        "options": [
          "Run the front job until its CPU burst ends",
          "Measure waiting and turnaround separately",
          "Put arriving jobs at the end of the ready queue"
        ],
        "answer": 0,
        "explanation": "Run the front job until its CPU burst ends must happen first. Waiting time is the time before service; turnaround includes service and any other time until completion."
      },
      {
        "type": "match",
        "prompt": "Scheduling goals and first-come-first-served · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Waiting time",
            "Total time spent ready but not running."
          ],
          [
            "Arrival time",
            "When a process enters the ready system."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Scheduling goals and first-come-first-served · Apply: put the final handoff in order.",
        "items": [
          "Run the front job until its CPU burst ends",
          "Measure waiting and turnaround separately"
        ],
        "explanation": "FCFS follows arrival order and does not interrupt a running CPU burst. Waiting time is the time before service; turnaround includes service and any other time until completion. A long first job can make short jobs wait behind it, called the convoy effect."
      },
      {
        "type": "number",
        "prompt": "Scheduling goals and first-come-first-served · Apply: A process needs 7 CPU units and receives 2 units per round-robin turn. How many CPU units remain after its first turn?",
        "answer": 5,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "The first turn uses 2 of 7 units, leaving 5."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 504.09,
        "text": "might have existed, then do you think that we might be talking about so many scheduling algorithms since so many years? There are many scheduling algorithms like FCFS round or round robin shortage or first and these kind of things, right? So basically there are many scheduling algorithms. If there is just one scheduling algorithm, which is perfect, then mayb"
      },
      {
        "time": 1245.21,
        "text": "What are the metrics to look for when designing scheduling algorithm? Now, let's just understand the very first schedule algorithm, which is also very popular. It is called first come first serve. Okay. Or some people can call it first in first out FIFO, or maybe you can call it first come first serve. So by far it is the simplest scheduling algorithm, CPU s"
      }
    ],
    "start": 29
  },
  {
    "id": 30,
    "lecture": 10,
    "title": "Shortest-job-first scheduling · Discover",
    "concept": "SJF chooses the ready job with the shortest next CPU burst; preemptive SRTF can replace it when a shorter remaining job arrives. SJF chooses the shortest currently available CPU burst.",
    "teachingSteps": [
      "Start with the moving parts. SJF chooses the shortest currently available CPU burst.",
      "SRTF can preempt the running job when a new arrival has less remaining time.",
      "Averages may improve, but long jobs can starve if short work keeps arriving."
    ],
    "foundation": {
      "title": "Shortest-job-first scheduling",
      "idea": "SJF chooses the ready job with the shortest next CPU burst; preemptive SRTF can replace it when a shorter remaining job arrives.",
      "terms": [
        "CPU burst: A stretch of computation before waiting or yielding.",
        "SJF: Non-preemptive choice of the shortest available next CPU burst.",
        "SRTF: Preemptive choice of the least remaining CPU time."
      ],
      "example": "At time zero, bursts 6 and 2 are ready. SJF runs the 2-unit job first, reducing its waiting time."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Shortest-job-first scheduling · Discover: Two jobs arrive together with CPU bursts 6 and 2, which job runs first under non-preemptive SJF?",
        "options": [
          "The 2-unit burst",
          "The 6-unit burst",
          "Whichever job has the larger process ID"
        ],
        "answer": 0,
        "explanation": "The 2-unit burst. SJF chooses the ready job with the shortest next CPU burst; preemptive SRTF can replace it when a shorter remaining job arrives."
      },
      {
        "type": "match",
        "prompt": "Shortest-job-first scheduling · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "CPU burst",
            "A stretch of computation before waiting or yielding."
          ],
          [
            "SJF",
            "Non-preemptive choice of the shortest available next CPU burst."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Shortest-job-first scheduling · Discover: put these events in order.",
        "items": [
          "Estimate each ready process next CPU burst",
          "Choose the smallest burst among available jobs",
          "For SRTF, reconsider after each arrival"
        ],
        "explanation": "SJF chooses the shortest currently available CPU burst. SRTF can preempt the running job when a new arrival has less remaining time. Averages may improve, but long jobs can starve if short work keeps arriving."
      },
      {
        "type": "number",
        "prompt": "Shortest-job-first scheduling · Discover: A process needs 7 CPU units and receives 3 units per round-robin turn. How many CPU units remain after its first turn?",
        "answer": 4,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "The first turn uses 3 of 7 units, leaving 4."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 1277.79,
        "text": "if you are scheduling the short process first then it is decreasing the waiting time of the short process more than it increases the wait time of the long process so wait time of the long process so basically what is happening see i mean let me just tell you the intuition first okay so what is happening that let's suppose there is a long process which is let"
      },
      {
        "time": 2261.13,
        "text": "वेर वेसिकल ती श्विलिं, ती वन is lesser than T2 and lesser than T3 it is scheduling this P1 first and then P2 I mean P1, P2, P3 are the order of SGF now suppose that SGF is not optimal and there is something else which is optimal so let's suppose the optimal order so basically the SGF order is known to everyone right so what is the SGF order P1, P2, P3 till P"
      }
    ],
    "start": 30
  },
  {
    "id": 31,
    "lecture": 10,
    "title": "Shortest-job-first scheduling · Explore",
    "concept": "SJF chooses the ready job with the shortest next CPU burst; preemptive SRTF can replace it when a shorter remaining job arrives. SRTF can preempt the running job when a new arrival has less remaining time.",
    "teachingSteps": [
      "Watch one example unfold. SJF chooses the shortest currently available CPU burst.",
      "SRTF can preempt the running job when a new arrival has less remaining time.",
      "Averages may improve, but long jobs can starve if short work keeps arriving."
    ],
    "foundation": {
      "title": "Shortest-job-first scheduling",
      "idea": "SJF chooses the ready job with the shortest next CPU burst; preemptive SRTF can replace it when a shorter remaining job arrives.",
      "terms": [
        "CPU burst: A stretch of computation before waiting or yielding.",
        "SJF: Non-preemptive choice of the shortest available next CPU burst.",
        "SRTF: Preemptive choice of the least remaining CPU time."
      ],
      "example": "At time zero, bursts 6 and 2 are ready. SJF runs the 2-unit job first, reducing its waiting time."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Shortest-job-first scheduling · Explore: The trace has just completed: Estimate each ready process next CPU burst. Which action should happen next?",
        "options": [
          "Choose the smallest burst among available jobs",
          "Estimate each ready process next CPU burst",
          "For SRTF, reconsider after each arrival"
        ],
        "answer": 0,
        "explanation": "Choose the smallest burst among available jobs. SRTF can preempt the running job when a new arrival has less remaining time."
      },
      {
        "type": "match",
        "prompt": "Shortest-job-first scheduling · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "SJF",
            "Non-preemptive choice of the shortest available next CPU burst."
          ],
          [
            "SRTF",
            "Preemptive choice of the least remaining CPU time."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Shortest-job-first scheduling · Explore: put the opening events in order.",
        "items": [
          "Estimate each ready process next CPU burst",
          "Choose the smallest burst among available jobs"
        ],
        "explanation": "SJF chooses the shortest currently available CPU burst. SRTF can preempt the running job when a new arrival has less remaining time. Averages may improve, but long jobs can starve if short work keeps arriving."
      },
      {
        "type": "number",
        "prompt": "Shortest-job-first scheduling · Explore: A process needs 8 CPU units and receives 3 units per round-robin turn. How many CPU units remain after its first turn?",
        "answer": 5,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "The first turn uses 3 of 8 units, leaving 5."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 1277.79,
        "text": "if you are scheduling the short process first then it is decreasing the waiting time of the short process more than it increases the wait time of the long process so wait time of the long process so basically what is happening see i mean let me just tell you the intuition first okay so what is happening that let's suppose there is a long process which is let"
      },
      {
        "time": 2261.13,
        "text": "वेर वेसिकल ती श्विलिं, ती वन is lesser than T2 and lesser than T3 it is scheduling this P1 first and then P2 I mean P1, P2, P3 are the order of SGF now suppose that SGF is not optimal and there is something else which is optimal so let's suppose the optimal order so basically the SGF order is known to everyone right so what is the SGF order P1, P2, P3 till P"
      }
    ],
    "start": 31
  },
  {
    "id": 32,
    "lecture": 10,
    "title": "Shortest-job-first scheduling · Apply",
    "concept": "SJF chooses the ready job with the shortest next CPU burst; preemptive SRTF can replace it when a shorter remaining job arrives. Averages may improve, but long jobs can starve if short work keeps arriving.",
    "teachingSteps": [
      "Use the idea in a new situation. SJF chooses the shortest currently available CPU burst.",
      "SRTF can preempt the running job when a new arrival has less remaining time.",
      "Averages may improve, but long jobs can starve if short work keeps arriving."
    ],
    "foundation": {
      "title": "Shortest-job-first scheduling",
      "idea": "SJF chooses the ready job with the shortest next CPU burst; preemptive SRTF can replace it when a shorter remaining job arrives.",
      "terms": [
        "CPU burst: A stretch of computation before waiting or yielding.",
        "SJF: Non-preemptive choice of the shortest available next CPU burst.",
        "SRTF: Preemptive choice of the least remaining CPU time."
      ],
      "example": "At time zero, bursts 6 and 2 are ready. SJF runs the 2-unit job first, reducing its waiting time."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Shortest-job-first scheduling · Apply: In this new example, what should happen immediately before: For SRTF, reconsider after each arrival?",
        "options": [
          "Choose the smallest burst among available jobs",
          "For SRTF, reconsider after each arrival",
          "Estimate each ready process next CPU burst"
        ],
        "answer": 0,
        "explanation": "Choose the smallest burst among available jobs must happen first. SRTF can preempt the running job when a new arrival has less remaining time."
      },
      {
        "type": "match",
        "prompt": "Shortest-job-first scheduling · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "SRTF",
            "Preemptive choice of the least remaining CPU time."
          ],
          [
            "CPU burst",
            "A stretch of computation before waiting or yielding."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Shortest-job-first scheduling · Apply: put the final handoff in order.",
        "items": [
          "Choose the smallest burst among available jobs",
          "For SRTF, reconsider after each arrival"
        ],
        "explanation": "SJF chooses the shortest currently available CPU burst. SRTF can preempt the running job when a new arrival has less remaining time. Averages may improve, but long jobs can starve if short work keeps arriving."
      },
      {
        "type": "number",
        "prompt": "Shortest-job-first scheduling · Apply: A process needs 9 CPU units and receives 3 units per round-robin turn. How many CPU units remain after its first turn?",
        "answer": 6,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "The first turn uses 3 of 9 units, leaving 6."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 1277.79,
        "text": "if you are scheduling the short process first then it is decreasing the waiting time of the short process more than it increases the wait time of the long process so wait time of the long process so basically what is happening see i mean let me just tell you the intuition first okay so what is happening that let's suppose there is a long process which is let"
      },
      {
        "time": 2261.13,
        "text": "वेर वेसिकल ती श्विलिं, ती वन is lesser than T2 and lesser than T3 it is scheduling this P1 first and then P2 I mean P1, P2, P3 are the order of SGF now suppose that SGF is not optimal and there is something else which is optimal so let's suppose the optimal order so basically the SGF order is known to everyone right so what is the SGF order P1, P2, P3 till P"
      }
    ],
    "start": 32
  },
  {
    "id": 33,
    "lecture": 11,
    "title": "Round-robin scheduling · Discover",
    "concept": "Round-robin scheduling gives each ready process up to one time quantum, then moves unfinished work to the queue tail. The queue order rotates, giving waiting jobs repeated chances.",
    "teachingSteps": [
      "Start with the moving parts. The queue order rotates, giving waiting jobs repeated chances.",
      "A large quantum behaves more like FCFS; a tiny quantum increases switching overhead.",
      "Choose a quantum that balances quick response with useful uninterrupted work."
    ],
    "foundation": {
      "title": "Round-robin scheduling",
      "idea": "Round-robin scheduling gives each ready process up to one time quantum, then moves unfinished work to the queue tail.",
      "terms": [
        "Time quantum: The maximum CPU time in one round-robin turn.",
        "Preemption: Interrupting a running job so another can run.",
        "Ready queue: Processes eligible to receive CPU time."
      ],
      "example": "With a quantum of 3, a process needing 8 CPU units runs for 3, returns to the tail, and needs 5 more."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Round-robin scheduling · Discover: A process needs 8 CPU units and the round-robin quantum is 3, how much CPU work remains after its first full turn?",
        "options": [
          "5 units",
          "3 units",
          "8 units, because preemption discards work"
        ],
        "answer": 0,
        "explanation": "5 units. Round-robin scheduling gives each ready process up to one time quantum, then moves unfinished work to the queue tail."
      },
      {
        "type": "match",
        "prompt": "Round-robin scheduling · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Time quantum",
            "The maximum CPU time in one round-robin turn."
          ],
          [
            "Preemption",
            "Interrupting a running job so another can run."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Round-robin scheduling · Discover: put these events in order.",
        "items": [
          "Run the queue-front process for at most one quantum",
          "If unfinished, move it to the queue tail",
          "Repeat until each burst finishes or blocks"
        ],
        "explanation": "The queue order rotates, giving waiting jobs repeated chances. A large quantum behaves more like FCFS; a tiny quantum increases switching overhead. Choose a quantum that balances quick response with useful uninterrupted work."
      },
      {
        "type": "number",
        "prompt": "Round-robin scheduling · Discover: A process needs 9 CPU units and receives 4 units per round-robin turn. How many CPU units remain after its first turn?",
        "answer": 5,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "The first turn uses 4 of 9 units, leaving 5."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 539.44,
        "text": "So this is actually necessary. I mean, you have to invoke the short term scheduler or something like that. Right. So obviously it is unavoidable. So since it is unavoidable, so what I'm trying to say is that that here after P1, you are doing something, something necessary, not unnecessary. So basically, basically you're not having too much of overhead. Maybe"
      },
      {
        "time": 2580.8,
        "text": "because here generally very very fast because decision about the new process to be scheduled is very easy so these are like some nitty-gritty details of the round-robin scheduling that how it is getting implemented I mean code wise it should be implemented using the circular linked list I mean this is the one of the very good choice of the data structure you"
      }
    ],
    "start": 33
  },
  {
    "id": 34,
    "lecture": 11,
    "title": "Round-robin scheduling · Explore",
    "concept": "Round-robin scheduling gives each ready process up to one time quantum, then moves unfinished work to the queue tail. A large quantum behaves more like FCFS; a tiny quantum increases switching overhead.",
    "teachingSteps": [
      "Watch one example unfold. The queue order rotates, giving waiting jobs repeated chances.",
      "A large quantum behaves more like FCFS; a tiny quantum increases switching overhead.",
      "Choose a quantum that balances quick response with useful uninterrupted work."
    ],
    "foundation": {
      "title": "Round-robin scheduling",
      "idea": "Round-robin scheduling gives each ready process up to one time quantum, then moves unfinished work to the queue tail.",
      "terms": [
        "Time quantum: The maximum CPU time in one round-robin turn.",
        "Preemption: Interrupting a running job so another can run.",
        "Ready queue: Processes eligible to receive CPU time."
      ],
      "example": "With a quantum of 3, a process needing 8 CPU units runs for 3, returns to the tail, and needs 5 more."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Round-robin scheduling · Explore: The trace has just completed: Run the queue-front process for at most one quantum. Which action should happen next?",
        "options": [
          "If unfinished, move it to the queue tail",
          "Run the queue-front process for at most one quantum",
          "Repeat until each burst finishes or blocks"
        ],
        "answer": 0,
        "explanation": "If unfinished, move it to the queue tail. A large quantum behaves more like FCFS; a tiny quantum increases switching overhead."
      },
      {
        "type": "match",
        "prompt": "Round-robin scheduling · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Preemption",
            "Interrupting a running job so another can run."
          ],
          [
            "Ready queue",
            "Processes eligible to receive CPU time."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Round-robin scheduling · Explore: put the opening events in order.",
        "items": [
          "Run the queue-front process for at most one quantum",
          "If unfinished, move it to the queue tail"
        ],
        "explanation": "The queue order rotates, giving waiting jobs repeated chances. A large quantum behaves more like FCFS; a tiny quantum increases switching overhead. Choose a quantum that balances quick response with useful uninterrupted work."
      },
      {
        "type": "number",
        "prompt": "Round-robin scheduling · Explore: A process needs 10 CPU units and receives 4 units per round-robin turn. How many CPU units remain after its first turn?",
        "answer": 6,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "The first turn uses 4 of 10 units, leaving 6."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 539.44,
        "text": "So this is actually necessary. I mean, you have to invoke the short term scheduler or something like that. Right. So obviously it is unavoidable. So since it is unavoidable, so what I'm trying to say is that that here after P1, you are doing something, something necessary, not unnecessary. So basically, basically you're not having too much of overhead. Maybe"
      },
      {
        "time": 2580.8,
        "text": "because here generally very very fast because decision about the new process to be scheduled is very easy so these are like some nitty-gritty details of the round-robin scheduling that how it is getting implemented I mean code wise it should be implemented using the circular linked list I mean this is the one of the very good choice of the data structure you"
      }
    ],
    "start": 34
  },
  {
    "id": 35,
    "lecture": 11,
    "title": "Round-robin scheduling · Apply",
    "concept": "Round-robin scheduling gives each ready process up to one time quantum, then moves unfinished work to the queue tail. Choose a quantum that balances quick response with useful uninterrupted work.",
    "teachingSteps": [
      "Use the idea in a new situation. The queue order rotates, giving waiting jobs repeated chances.",
      "A large quantum behaves more like FCFS; a tiny quantum increases switching overhead.",
      "Choose a quantum that balances quick response with useful uninterrupted work."
    ],
    "foundation": {
      "title": "Round-robin scheduling",
      "idea": "Round-robin scheduling gives each ready process up to one time quantum, then moves unfinished work to the queue tail.",
      "terms": [
        "Time quantum: The maximum CPU time in one round-robin turn.",
        "Preemption: Interrupting a running job so another can run.",
        "Ready queue: Processes eligible to receive CPU time."
      ],
      "example": "With a quantum of 3, a process needing 8 CPU units runs for 3, returns to the tail, and needs 5 more."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Round-robin scheduling · Apply: In this new example, what should happen immediately before: Repeat until each burst finishes or blocks?",
        "options": [
          "If unfinished, move it to the queue tail",
          "Repeat until each burst finishes or blocks",
          "Run the queue-front process for at most one quantum"
        ],
        "answer": 0,
        "explanation": "If unfinished, move it to the queue tail must happen first. A large quantum behaves more like FCFS; a tiny quantum increases switching overhead."
      },
      {
        "type": "match",
        "prompt": "Round-robin scheduling · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Ready queue",
            "Processes eligible to receive CPU time."
          ],
          [
            "Time quantum",
            "The maximum CPU time in one round-robin turn."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Round-robin scheduling · Apply: put the final handoff in order.",
        "items": [
          "If unfinished, move it to the queue tail",
          "Repeat until each burst finishes or blocks"
        ],
        "explanation": "The queue order rotates, giving waiting jobs repeated chances. A large quantum behaves more like FCFS; a tiny quantum increases switching overhead. Choose a quantum that balances quick response with useful uninterrupted work."
      },
      {
        "type": "number",
        "prompt": "Round-robin scheduling · Apply: A process needs 11 CPU units and receives 4 units per round-robin turn. How many CPU units remain after its first turn?",
        "answer": 7,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "The first turn uses 4 of 11 units, leaving 7."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 539.44,
        "text": "So this is actually necessary. I mean, you have to invoke the short term scheduler or something like that. Right. So obviously it is unavoidable. So since it is unavoidable, so what I'm trying to say is that that here after P1, you are doing something, something necessary, not unnecessary. So basically, basically you're not having too much of overhead. Maybe"
      },
      {
        "time": 2580.8,
        "text": "because here generally very very fast because decision about the new process to be scheduled is very easy so these are like some nitty-gritty details of the round-robin scheduling that how it is getting implemented I mean code wise it should be implemented using the circular linked list I mean this is the one of the very good choice of the data structure you"
      }
    ],
    "start": 35
  },
  {
    "id": 36,
    "lecture": 12,
    "title": "CPU and I/O bursts in scheduling · Discover",
    "concept": "Processes alternate between CPU bursts and I/O waits; completion of I/O moves a blocked process back to the ready queue. Only one task uses a single CPU at a time, but devices can work while the CPU runs another task.",
    "teachingSteps": [
      "Start with the moving parts. Only one task uses a single CPU at a time, but devices can work while the CPU runs another task.",
      "A process doing I/O becomes blocked and is removed from the ready queue.",
      "I/O completion makes it ready again; scheduling decides when it runs."
    ],
    "foundation": {
      "title": "CPU and I/O bursts in scheduling",
      "idea": "Processes alternate between CPU bursts and I/O waits; completion of I/O moves a blocked process back to the ready queue.",
      "terms": [
        "CPU burst: Work executed on a processor.",
        "I/O burst: A wait for a device operation to complete.",
        "Preemptive scheduling: A policy that can take the CPU from a running process."
      ],
      "example": "A process computes for 2 units, blocks for a 4-unit disk read, then returns to ready for its next CPU burst."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "CPU and I/O bursts in scheduling · Discover: Process A blocks for I/O while process B is ready, what should the scheduler do with the idle CPU?",
        "options": [
          "Run B while A waits for its I/O event",
          "Wait with A until the I/O completes",
          "Mark A terminated"
        ],
        "answer": 0,
        "explanation": "Run B while A waits for its I/O event. Processes alternate between CPU bursts and I/O waits; completion of I/O moves a blocked process back to the ready queue."
      },
      {
        "type": "match",
        "prompt": "CPU and I/O bursts in scheduling · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "CPU burst",
            "Work executed on a processor."
          ],
          [
            "I/O burst",
            "A wait for a device operation to complete."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "CPU and I/O bursts in scheduling · Discover: put these events in order.",
        "items": [
          "Run a CPU burst",
          "Move the process to blocked when it requests I/O",
          "Return it to ready when the device event completes"
        ],
        "explanation": "Only one task uses a single CPU at a time, but devices can work while the CPU runs another task. A process doing I/O becomes blocked and is removed from the ready queue. I/O completion makes it ready again; scheduling decides when it runs."
      },
      {
        "type": "number",
        "prompt": "CPU and I/O bursts in scheduling · Discover: A process needs 5 CPU units and receives 2 units per round-robin turn. How many CPU units remain after its first turn?",
        "answer": 3,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "The first turn uses 2 of 5 units, leaving 3."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 67.77,
        "text": "And okay, there is been a question that that I saw that question is from is through. Can you tell me what is the answer here? That is through 2015 question. So what are they asking? Suppose a system content and processes system uses a round-robin scheduling for CPU scheduling, then which data structure is best suited for the ready queue of the process? So wh"
      },
      {
        "time": 99.5,
        "text": "so I think the scheduling technique that we have discussed till now is fcfs and shortage of first and round robbing right okay now can you tell me can you tell me sorry uh what what are the data structures that we can use here in all of these scheduling techniques here I think uh this is same as FIFO so maybe Q Q maybe more suitable right because this is sam"
      }
    ],
    "start": 36
  },
  {
    "id": 37,
    "lecture": 12,
    "title": "CPU and I/O bursts in scheduling · Explore",
    "concept": "Processes alternate between CPU bursts and I/O waits; completion of I/O moves a blocked process back to the ready queue. A process doing I/O becomes blocked and is removed from the ready queue.",
    "teachingSteps": [
      "Watch one example unfold. Only one task uses a single CPU at a time, but devices can work while the CPU runs another task.",
      "A process doing I/O becomes blocked and is removed from the ready queue.",
      "I/O completion makes it ready again; scheduling decides when it runs."
    ],
    "foundation": {
      "title": "CPU and I/O bursts in scheduling",
      "idea": "Processes alternate between CPU bursts and I/O waits; completion of I/O moves a blocked process back to the ready queue.",
      "terms": [
        "CPU burst: Work executed on a processor.",
        "I/O burst: A wait for a device operation to complete.",
        "Preemptive scheduling: A policy that can take the CPU from a running process."
      ],
      "example": "A process computes for 2 units, blocks for a 4-unit disk read, then returns to ready for its next CPU burst."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "CPU and I/O bursts in scheduling · Explore: The trace has just completed: Run a CPU burst. Which action should happen next?",
        "options": [
          "Move the process to blocked when it requests I/O",
          "Run a CPU burst",
          "Return it to ready when the device event completes"
        ],
        "answer": 0,
        "explanation": "Move the process to blocked when it requests I/O. A process doing I/O becomes blocked and is removed from the ready queue."
      },
      {
        "type": "match",
        "prompt": "CPU and I/O bursts in scheduling · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "I/O burst",
            "A wait for a device operation to complete."
          ],
          [
            "Preemptive scheduling",
            "A policy that can take the CPU from a running process."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "CPU and I/O bursts in scheduling · Explore: put the opening events in order.",
        "items": [
          "Run a CPU burst",
          "Move the process to blocked when it requests I/O"
        ],
        "explanation": "Only one task uses a single CPU at a time, but devices can work while the CPU runs another task. A process doing I/O becomes blocked and is removed from the ready queue. I/O completion makes it ready again; scheduling decides when it runs."
      },
      {
        "type": "number",
        "prompt": "CPU and I/O bursts in scheduling · Explore: A process needs 6 CPU units and receives 2 units per round-robin turn. How many CPU units remain after its first turn?",
        "answer": 4,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "The first turn uses 2 of 6 units, leaving 4."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 67.77,
        "text": "And okay, there is been a question that that I saw that question is from is through. Can you tell me what is the answer here? That is through 2015 question. So what are they asking? Suppose a system content and processes system uses a round-robin scheduling for CPU scheduling, then which data structure is best suited for the ready queue of the process? So wh"
      },
      {
        "time": 99.5,
        "text": "so I think the scheduling technique that we have discussed till now is fcfs and shortage of first and round robbing right okay now can you tell me can you tell me sorry uh what what are the data structures that we can use here in all of these scheduling techniques here I think uh this is same as FIFO so maybe Q Q maybe more suitable right because this is sam"
      }
    ],
    "start": 37
  },
  {
    "id": 38,
    "lecture": 12,
    "title": "CPU and I/O bursts in scheduling · Apply",
    "concept": "Processes alternate between CPU bursts and I/O waits; completion of I/O moves a blocked process back to the ready queue. I/O completion makes it ready again; scheduling decides when it runs.",
    "teachingSteps": [
      "Use the idea in a new situation. Only one task uses a single CPU at a time, but devices can work while the CPU runs another task.",
      "A process doing I/O becomes blocked and is removed from the ready queue.",
      "I/O completion makes it ready again; scheduling decides when it runs."
    ],
    "foundation": {
      "title": "CPU and I/O bursts in scheduling",
      "idea": "Processes alternate between CPU bursts and I/O waits; completion of I/O moves a blocked process back to the ready queue.",
      "terms": [
        "CPU burst: Work executed on a processor.",
        "I/O burst: A wait for a device operation to complete.",
        "Preemptive scheduling: A policy that can take the CPU from a running process."
      ],
      "example": "A process computes for 2 units, blocks for a 4-unit disk read, then returns to ready for its next CPU burst."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "CPU and I/O bursts in scheduling · Apply: In this new example, what should happen immediately before: Return it to ready when the device event completes?",
        "options": [
          "Move the process to blocked when it requests I/O",
          "Return it to ready when the device event completes",
          "Run a CPU burst"
        ],
        "answer": 0,
        "explanation": "Move the process to blocked when it requests I/O must happen first. A process doing I/O becomes blocked and is removed from the ready queue."
      },
      {
        "type": "match",
        "prompt": "CPU and I/O bursts in scheduling · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Preemptive scheduling",
            "A policy that can take the CPU from a running process."
          ],
          [
            "CPU burst",
            "Work executed on a processor."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "CPU and I/O bursts in scheduling · Apply: put the final handoff in order.",
        "items": [
          "Move the process to blocked when it requests I/O",
          "Return it to ready when the device event completes"
        ],
        "explanation": "Only one task uses a single CPU at a time, but devices can work while the CPU runs another task. A process doing I/O becomes blocked and is removed from the ready queue. I/O completion makes it ready again; scheduling decides when it runs."
      },
      {
        "type": "number",
        "prompt": "CPU and I/O bursts in scheduling · Apply: A process needs 7 CPU units and receives 2 units per round-robin turn. How many CPU units remain after its first turn?",
        "answer": 5,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "The first turn uses 2 of 7 units, leaving 5."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 67.77,
        "text": "And okay, there is been a question that that I saw that question is from is through. Can you tell me what is the answer here? That is through 2015 question. So what are they asking? Suppose a system content and processes system uses a round-robin scheduling for CPU scheduling, then which data structure is best suited for the ready queue of the process? So wh"
      },
      {
        "time": 99.5,
        "text": "so I think the scheduling technique that we have discussed till now is fcfs and shortage of first and round robbing right okay now can you tell me can you tell me sorry uh what what are the data structures that we can use here in all of these scheduling techniques here I think uh this is same as FIFO so maybe Q Q maybe more suitable right because this is sam"
      }
    ],
    "start": 38
  },
  {
    "id": 39,
    "lecture": 13,
    "title": "Priority scheduling and aging · Discover",
    "concept": "Priority scheduling favors higher-priority ready jobs; aging gradually raises long-waiting jobs to prevent starvation. Priority determines preference among the jobs currently ready.",
    "teachingSteps": [
      "Start with the moving parts. Priority determines preference among the jobs currently ready.",
      "Preemptive priority scheduling may interrupt a running lower-priority job.",
      "Aging changes priority over time to reduce starvation."
    ],
    "foundation": {
      "title": "Priority scheduling and aging",
      "idea": "Priority scheduling favors higher-priority ready jobs; aging gradually raises long-waiting jobs to prevent starvation.",
      "terms": [
        "Priority: A rank used to choose among ready processes.",
        "Starvation: Indefinite waiting because other work is always preferred.",
        "Aging: Increasing priority as waiting time grows."
      ],
      "example": "If smaller numbers mean higher priority, a job at priority 5 may wait behind a stream of new priority-1 jobs unless aging helps it."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Priority scheduling and aging · Discover: A low-priority job waits while higher-priority work keeps arriving, which policy gradually reduces its chance of waiting forever?",
        "options": [
          "Aging",
          "Resetting its waiting time",
          "Making the running high-priority job wait longer without changing ranks"
        ],
        "answer": 0,
        "explanation": "Aging. Priority scheduling favors higher-priority ready jobs; aging gradually raises long-waiting jobs to prevent starvation."
      },
      {
        "type": "match",
        "prompt": "Priority scheduling and aging · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Priority",
            "A rank used to choose among ready processes."
          ],
          [
            "Starvation",
            "Indefinite waiting because other work is always preferred."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Priority scheduling and aging · Discover: put these events in order.",
        "items": [
          "Select the highest-priority ready process",
          "Track how long each waiting process has waited",
          "Raise a waiting process priority through aging"
        ],
        "explanation": "Priority determines preference among the jobs currently ready. Preemptive priority scheduling may interrupt a running lower-priority job. Aging changes priority over time to reduce starvation."
      },
      {
        "type": "number",
        "prompt": "Priority scheduling and aging · Discover: Smaller numbers mean higher priority. A waiting job moves from priority 4 up one level per aging interval. What priority does it have after 3 intervals?",
        "answer": 1,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Reduce 4 by 3, stopping at the highest priority value 1: 1."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 420.91,
        "text": "can you do it as an homework okay just do it as an homework and the solution is there on the next page okay just try it out as an homework i hope that is fine to everyone cool now let's just discuss a new type of scheduling which is called priority scheduling so there may be some chance that some of the process might be having like you want to give a more pr"
      },
      {
        "time": 447.99,
        "text": "so or maybe let's suppose like there are multiple users which are using the using the same system then you want to give the priority to some some special users so i mean considering the requirements that there could be some processes which we want to give more priority then we can have some scheduling mechanism which is called priority scheduling okay let's "
      }
    ],
    "start": 39
  },
  {
    "id": 40,
    "lecture": 13,
    "title": "Priority scheduling and aging · Explore",
    "concept": "Priority scheduling favors higher-priority ready jobs; aging gradually raises long-waiting jobs to prevent starvation. Preemptive priority scheduling may interrupt a running lower-priority job.",
    "teachingSteps": [
      "Watch one example unfold. Priority determines preference among the jobs currently ready.",
      "Preemptive priority scheduling may interrupt a running lower-priority job.",
      "Aging changes priority over time to reduce starvation."
    ],
    "foundation": {
      "title": "Priority scheduling and aging",
      "idea": "Priority scheduling favors higher-priority ready jobs; aging gradually raises long-waiting jobs to prevent starvation.",
      "terms": [
        "Priority: A rank used to choose among ready processes.",
        "Starvation: Indefinite waiting because other work is always preferred.",
        "Aging: Increasing priority as waiting time grows."
      ],
      "example": "If smaller numbers mean higher priority, a job at priority 5 may wait behind a stream of new priority-1 jobs unless aging helps it."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Priority scheduling and aging · Explore: The trace has just completed: Select the highest-priority ready process. Which action should happen next?",
        "options": [
          "Track how long each waiting process has waited",
          "Select the highest-priority ready process",
          "Raise a waiting process priority through aging"
        ],
        "answer": 0,
        "explanation": "Track how long each waiting process has waited. Preemptive priority scheduling may interrupt a running lower-priority job."
      },
      {
        "type": "match",
        "prompt": "Priority scheduling and aging · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Starvation",
            "Indefinite waiting because other work is always preferred."
          ],
          [
            "Aging",
            "Increasing priority as waiting time grows."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Priority scheduling and aging · Explore: put the opening events in order.",
        "items": [
          "Select the highest-priority ready process",
          "Track how long each waiting process has waited"
        ],
        "explanation": "Priority determines preference among the jobs currently ready. Preemptive priority scheduling may interrupt a running lower-priority job. Aging changes priority over time to reduce starvation."
      },
      {
        "type": "number",
        "prompt": "Priority scheduling and aging · Explore: Smaller numbers mean higher priority. A waiting job moves from priority 4 up one level per aging interval. What priority does it have after 4 intervals?",
        "answer": 1,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Reduce 4 by 4, stopping at the highest priority value 1: 1."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 420.91,
        "text": "can you do it as an homework okay just do it as an homework and the solution is there on the next page okay just try it out as an homework i hope that is fine to everyone cool now let's just discuss a new type of scheduling which is called priority scheduling so there may be some chance that some of the process might be having like you want to give a more pr"
      },
      {
        "time": 447.99,
        "text": "so or maybe let's suppose like there are multiple users which are using the using the same system then you want to give the priority to some some special users so i mean considering the requirements that there could be some processes which we want to give more priority then we can have some scheduling mechanism which is called priority scheduling okay let's "
      }
    ],
    "start": 40
  },
  {
    "id": 41,
    "lecture": 13,
    "title": "Priority scheduling and aging · Apply",
    "concept": "Priority scheduling favors higher-priority ready jobs; aging gradually raises long-waiting jobs to prevent starvation. Aging changes priority over time to reduce starvation.",
    "teachingSteps": [
      "Use the idea in a new situation. Priority determines preference among the jobs currently ready.",
      "Preemptive priority scheduling may interrupt a running lower-priority job.",
      "Aging changes priority over time to reduce starvation."
    ],
    "foundation": {
      "title": "Priority scheduling and aging",
      "idea": "Priority scheduling favors higher-priority ready jobs; aging gradually raises long-waiting jobs to prevent starvation.",
      "terms": [
        "Priority: A rank used to choose among ready processes.",
        "Starvation: Indefinite waiting because other work is always preferred.",
        "Aging: Increasing priority as waiting time grows."
      ],
      "example": "If smaller numbers mean higher priority, a job at priority 5 may wait behind a stream of new priority-1 jobs unless aging helps it."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Priority scheduling and aging · Apply: In this new example, what should happen immediately before: Raise a waiting process priority through aging?",
        "options": [
          "Track how long each waiting process has waited",
          "Raise a waiting process priority through aging",
          "Select the highest-priority ready process"
        ],
        "answer": 0,
        "explanation": "Track how long each waiting process has waited must happen first. Preemptive priority scheduling may interrupt a running lower-priority job."
      },
      {
        "type": "match",
        "prompt": "Priority scheduling and aging · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Aging",
            "Increasing priority as waiting time grows."
          ],
          [
            "Priority",
            "A rank used to choose among ready processes."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Priority scheduling and aging · Apply: put the final handoff in order.",
        "items": [
          "Track how long each waiting process has waited",
          "Raise a waiting process priority through aging"
        ],
        "explanation": "Priority determines preference among the jobs currently ready. Preemptive priority scheduling may interrupt a running lower-priority job. Aging changes priority over time to reduce starvation."
      },
      {
        "type": "number",
        "prompt": "Priority scheduling and aging · Apply: Smaller numbers mean higher priority. A waiting job moves from priority 4 up one level per aging interval. What priority does it have after 5 intervals?",
        "answer": 1,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Reduce 4 by 5, stopping at the highest priority value 1: 1."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "schedule",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 420.91,
        "text": "can you do it as an homework okay just do it as an homework and the solution is there on the next page okay just try it out as an homework i hope that is fine to everyone cool now let's just discuss a new type of scheduling which is called priority scheduling so there may be some chance that some of the process might be having like you want to give a more pr"
      },
      {
        "time": 447.99,
        "text": "so or maybe let's suppose like there are multiple users which are using the using the same system then you want to give the priority to some some special users so i mean considering the requirements that there could be some processes which we want to give more priority then we can have some scheduling mechanism which is called priority scheduling okay let's "
      }
    ],
    "start": 41
  },
  {
    "id": 42,
    "lecture": 14,
    "title": "Interprocess communication · Discover",
    "concept": "Processes communicate by sharing a memory region or exchanging messages through operating-system mechanisms. Separate processes have separate address spaces by default.",
    "teachingSteps": [
      "Start with the moving parts. Separate processes have separate address spaces by default.",
      "Shared memory can be fast but needs synchronization around shared state.",
      "Message passing packages data into send/receive operations with a defined ownership boundary."
    ],
    "foundation": {
      "title": "Interprocess communication",
      "idea": "Processes communicate by sharing a memory region or exchanging messages through operating-system mechanisms.",
      "terms": [
        "Shared memory: A region mapped so multiple processes can read or write it.",
        "Message passing: Sending and receiving data through communication operations.",
        "Synchronization: Rules that coordinate access and event order."
      ],
      "example": "A producer can place records in shared memory, but both processes still need a rule for when a record is complete."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Interprocess communication · Discover: Two processes exchange small messages and should not share writable memory, which communication style directly fits that boundary?",
        "options": [
          "Message passing",
          "Uncoordinated shared writes",
          "A CPU context switch"
        ],
        "answer": 0,
        "explanation": "Message passing. Processes communicate by sharing a memory region or exchanging messages through operating-system mechanisms."
      },
      {
        "type": "match",
        "prompt": "Interprocess communication · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Shared memory",
            "A region mapped so multiple processes can read or write it."
          ],
          [
            "Message passing",
            "Sending and receiving data through communication operations."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Interprocess communication · Discover: put these events in order.",
        "items": [
          "Choose a communication channel",
          "Send or place data",
          "Coordinate when the receiver may read it"
        ],
        "explanation": "Separate processes have separate address spaces by default. Shared memory can be fast but needs synchronization around shared state. Message passing packages data into send/receive operations with a defined ownership boundary."
      },
      {
        "type": "number",
        "prompt": "Interprocess communication · Discover: A fork trace has 3 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 8,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "3 successive forks double the process count at each level: 2^3 = 8."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "ipc",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 8.66,
        "text": "Hi everyone. So let's get started with this lecture. I think this is lecture number 14. Okay. That's great. So today we will be starting one new topic, which is inter process communication. Okay. So cool. Now, if you see the official gate syllabus, then you will be seeing a few topics that is system called process threads, inter process communication, concur"
      },
      {
        "time": 66.07,
        "text": "Obviously, the topics to be covered is these are the topics. So I can say that 25% of these topics has been covered, right? I mean, these all topics is easily 25% to 30%. Okay, cool. So now we are yet to cover many other topics, which is inter-process communication, concurrency and synchronization, deadlock, memory management, virtual memory and file system "
      }
    ],
    "start": 42
  },
  {
    "id": 43,
    "lecture": 14,
    "title": "Interprocess communication · Explore",
    "concept": "Processes communicate by sharing a memory region or exchanging messages through operating-system mechanisms. Shared memory can be fast but needs synchronization around shared state.",
    "teachingSteps": [
      "Watch one example unfold. Separate processes have separate address spaces by default.",
      "Shared memory can be fast but needs synchronization around shared state.",
      "Message passing packages data into send/receive operations with a defined ownership boundary."
    ],
    "foundation": {
      "title": "Interprocess communication",
      "idea": "Processes communicate by sharing a memory region or exchanging messages through operating-system mechanisms.",
      "terms": [
        "Shared memory: A region mapped so multiple processes can read or write it.",
        "Message passing: Sending and receiving data through communication operations.",
        "Synchronization: Rules that coordinate access and event order."
      ],
      "example": "A producer can place records in shared memory, but both processes still need a rule for when a record is complete."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Interprocess communication · Explore: The trace has just completed: Choose a communication channel. Which action should happen next?",
        "options": [
          "Send or place data",
          "Choose a communication channel",
          "Coordinate when the receiver may read it"
        ],
        "answer": 0,
        "explanation": "Send or place data. Shared memory can be fast but needs synchronization around shared state."
      },
      {
        "type": "match",
        "prompt": "Interprocess communication · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Message passing",
            "Sending and receiving data through communication operations."
          ],
          [
            "Synchronization",
            "Rules that coordinate access and event order."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Interprocess communication · Explore: put the opening events in order.",
        "items": [
          "Choose a communication channel",
          "Send or place data"
        ],
        "explanation": "Separate processes have separate address spaces by default. Shared memory can be fast but needs synchronization around shared state. Message passing packages data into send/receive operations with a defined ownership boundary."
      },
      {
        "type": "number",
        "prompt": "Interprocess communication · Explore: A fork trace has 4 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 16,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "4 successive forks double the process count at each level: 2^4 = 16."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "ipc",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 8.66,
        "text": "Hi everyone. So let's get started with this lecture. I think this is lecture number 14. Okay. That's great. So today we will be starting one new topic, which is inter process communication. Okay. So cool. Now, if you see the official gate syllabus, then you will be seeing a few topics that is system called process threads, inter process communication, concur"
      },
      {
        "time": 66.07,
        "text": "Obviously, the topics to be covered is these are the topics. So I can say that 25% of these topics has been covered, right? I mean, these all topics is easily 25% to 30%. Okay, cool. So now we are yet to cover many other topics, which is inter-process communication, concurrency and synchronization, deadlock, memory management, virtual memory and file system "
      }
    ],
    "start": 43
  },
  {
    "id": 44,
    "lecture": 14,
    "title": "Interprocess communication · Apply",
    "concept": "Processes communicate by sharing a memory region or exchanging messages through operating-system mechanisms. Message passing packages data into send/receive operations with a defined ownership boundary.",
    "teachingSteps": [
      "Use the idea in a new situation. Separate processes have separate address spaces by default.",
      "Shared memory can be fast but needs synchronization around shared state.",
      "Message passing packages data into send/receive operations with a defined ownership boundary."
    ],
    "foundation": {
      "title": "Interprocess communication",
      "idea": "Processes communicate by sharing a memory region or exchanging messages through operating-system mechanisms.",
      "terms": [
        "Shared memory: A region mapped so multiple processes can read or write it.",
        "Message passing: Sending and receiving data through communication operations.",
        "Synchronization: Rules that coordinate access and event order."
      ],
      "example": "A producer can place records in shared memory, but both processes still need a rule for when a record is complete."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Interprocess communication · Apply: In this new example, what should happen immediately before: Coordinate when the receiver may read it?",
        "options": [
          "Send or place data",
          "Coordinate when the receiver may read it",
          "Choose a communication channel"
        ],
        "answer": 0,
        "explanation": "Send or place data must happen first. Shared memory can be fast but needs synchronization around shared state."
      },
      {
        "type": "match",
        "prompt": "Interprocess communication · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Synchronization",
            "Rules that coordinate access and event order."
          ],
          [
            "Shared memory",
            "A region mapped so multiple processes can read or write it."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Interprocess communication · Apply: put the final handoff in order.",
        "items": [
          "Send or place data",
          "Coordinate when the receiver may read it"
        ],
        "explanation": "Separate processes have separate address spaces by default. Shared memory can be fast but needs synchronization around shared state. Message passing packages data into send/receive operations with a defined ownership boundary."
      },
      {
        "type": "number",
        "prompt": "Interprocess communication · Apply: A fork trace has 5 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 32,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "5 successive forks double the process count at each level: 2^5 = 32."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "ipc",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 8.66,
        "text": "Hi everyone. So let's get started with this lecture. I think this is lecture number 14. Okay. That's great. So today we will be starting one new topic, which is inter process communication. Okay. So cool. Now, if you see the official gate syllabus, then you will be seeing a few topics that is system called process threads, inter process communication, concur"
      },
      {
        "time": 66.07,
        "text": "Obviously, the topics to be covered is these are the topics. So I can say that 25% of these topics has been covered, right? I mean, these all topics is easily 25% to 30%. Okay, cool. So now we are yet to cover many other topics, which is inter-process communication, concurrency and synchronization, deadlock, memory management, virtual memory and file system "
      }
    ],
    "start": 44
  },
  {
    "id": 45,
    "lecture": 15,
    "title": "Concurrency and race conditions · Discover",
    "concept": "Concurrent instructions can interleave; a race occurs when the result depends on the timing of accesses to shared data. An increment may compile into multiple machine instructions.",
    "teachingSteps": [
      "Start with the moving parts. An increment may compile into multiple machine instructions.",
      "The scheduler may interleave two read-add-write sequences.",
      "A lock or atomic increment prevents the lost update."
    ],
    "foundation": {
      "title": "Concurrency and race conditions",
      "idea": "Concurrent instructions can interleave; a race occurs when the result depends on the timing of accesses to shared data.",
      "terms": [
        "Interleaving: An order that mixes steps from concurrent executions.",
        "Race condition: A timing-dependent outcome from unsafely coordinated shared access.",
        "Atomic operation: An operation that appears indivisible to competing execution."
      ],
      "example": "If two workers each read counter 0 and then write 1, two increments can leave the counter at 1."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Concurrency and race conditions · Discover: Two workers each increment the same counter using separate read and write steps, what final value can occur if both read zero before either write?",
        "options": [
          "1",
          "2 in every possible interleaving",
          "0 because reads erase values"
        ],
        "answer": 0,
        "explanation": "1. Concurrent instructions can interleave; a race occurs when the result depends on the timing of accesses to shared data."
      },
      {
        "type": "match",
        "prompt": "Concurrency and race conditions · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Interleaving",
            "An order that mixes steps from concurrent executions."
          ],
          [
            "Race condition",
            "A timing-dependent outcome from unsafely coordinated shared access."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Concurrency and race conditions · Discover: put these events in order.",
        "items": [
          "Read the shared counter",
          "Add one in a private register",
          "Write the result back"
        ],
        "explanation": "An increment may compile into multiple machine instructions. The scheduler may interleave two read-add-write sequences. A lock or atomic increment prevents the lost update."
      },
      {
        "type": "number",
        "prompt": "Concurrency and race conditions · Discover: 2 workers each perform 2 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 4,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 2 × 2 = 4."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "race",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 2799.5,
        "text": "uh race condition means that i will i will come back to this but here i'm just telling you uh that race condition means that if there are two two processes okay let's suppose maybe i'm calling it one process p1 p2 or maybe producer consumer if there are two processes are modifying the same value then both the processes are racing to each other that whose fin"
      },
      {
        "time": 2884.62,
        "text": "So that's called race condition. Race condition means, I mean, this is just one fancy term that people say that it is a race between J and T that who is winning, who is winning, right? At the, at the last, who is writing? So it's a race between J and T. So that's called race condition. Okay. So maybe, maybe I can tell you with this example, I think I have th"
      }
    ],
    "start": 45
  },
  {
    "id": 46,
    "lecture": 15,
    "title": "Concurrency and race conditions · Explore",
    "concept": "Concurrent instructions can interleave; a race occurs when the result depends on the timing of accesses to shared data. The scheduler may interleave two read-add-write sequences.",
    "teachingSteps": [
      "Watch one example unfold. An increment may compile into multiple machine instructions.",
      "The scheduler may interleave two read-add-write sequences.",
      "A lock or atomic increment prevents the lost update."
    ],
    "foundation": {
      "title": "Concurrency and race conditions",
      "idea": "Concurrent instructions can interleave; a race occurs when the result depends on the timing of accesses to shared data.",
      "terms": [
        "Interleaving: An order that mixes steps from concurrent executions.",
        "Race condition: A timing-dependent outcome from unsafely coordinated shared access.",
        "Atomic operation: An operation that appears indivisible to competing execution."
      ],
      "example": "If two workers each read counter 0 and then write 1, two increments can leave the counter at 1."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Concurrency and race conditions · Explore: The trace has just completed: Read the shared counter. Which action should happen next?",
        "options": [
          "Add one in a private register",
          "Read the shared counter",
          "Write the result back"
        ],
        "answer": 0,
        "explanation": "Add one in a private register. The scheduler may interleave two read-add-write sequences."
      },
      {
        "type": "match",
        "prompt": "Concurrency and race conditions · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Race condition",
            "A timing-dependent outcome from unsafely coordinated shared access."
          ],
          [
            "Atomic operation",
            "An operation that appears indivisible to competing execution."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Concurrency and race conditions · Explore: put the opening events in order.",
        "items": [
          "Read the shared counter",
          "Add one in a private register"
        ],
        "explanation": "An increment may compile into multiple machine instructions. The scheduler may interleave two read-add-write sequences. A lock or atomic increment prevents the lost update."
      },
      {
        "type": "number",
        "prompt": "Concurrency and race conditions · Explore: 2 workers each perform 3 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 6,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 2 × 3 = 6."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "race",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 2799.5,
        "text": "uh race condition means that i will i will come back to this but here i'm just telling you uh that race condition means that if there are two two processes okay let's suppose maybe i'm calling it one process p1 p2 or maybe producer consumer if there are two processes are modifying the same value then both the processes are racing to each other that whose fin"
      },
      {
        "time": 2884.62,
        "text": "So that's called race condition. Race condition means, I mean, this is just one fancy term that people say that it is a race between J and T that who is winning, who is winning, right? At the, at the last, who is writing? So it's a race between J and T. So that's called race condition. Okay. So maybe, maybe I can tell you with this example, I think I have th"
      }
    ],
    "start": 46
  },
  {
    "id": 47,
    "lecture": 15,
    "title": "Concurrency and race conditions · Apply",
    "concept": "Concurrent instructions can interleave; a race occurs when the result depends on the timing of accesses to shared data. A lock or atomic increment prevents the lost update.",
    "teachingSteps": [
      "Use the idea in a new situation. An increment may compile into multiple machine instructions.",
      "The scheduler may interleave two read-add-write sequences.",
      "A lock or atomic increment prevents the lost update."
    ],
    "foundation": {
      "title": "Concurrency and race conditions",
      "idea": "Concurrent instructions can interleave; a race occurs when the result depends on the timing of accesses to shared data.",
      "terms": [
        "Interleaving: An order that mixes steps from concurrent executions.",
        "Race condition: A timing-dependent outcome from unsafely coordinated shared access.",
        "Atomic operation: An operation that appears indivisible to competing execution."
      ],
      "example": "If two workers each read counter 0 and then write 1, two increments can leave the counter at 1."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Concurrency and race conditions · Apply: In this new example, what should happen immediately before: Write the result back?",
        "options": [
          "Add one in a private register",
          "Write the result back",
          "Read the shared counter"
        ],
        "answer": 0,
        "explanation": "Add one in a private register must happen first. The scheduler may interleave two read-add-write sequences."
      },
      {
        "type": "match",
        "prompt": "Concurrency and race conditions · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Atomic operation",
            "An operation that appears indivisible to competing execution."
          ],
          [
            "Interleaving",
            "An order that mixes steps from concurrent executions."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Concurrency and race conditions · Apply: put the final handoff in order.",
        "items": [
          "Add one in a private register",
          "Write the result back"
        ],
        "explanation": "An increment may compile into multiple machine instructions. The scheduler may interleave two read-add-write sequences. A lock or atomic increment prevents the lost update."
      },
      {
        "type": "number",
        "prompt": "Concurrency and race conditions · Apply: 2 workers each perform 4 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 8,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 2 × 4 = 8."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "race",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 2799.5,
        "text": "uh race condition means that i will i will come back to this but here i'm just telling you uh that race condition means that if there are two two processes okay let's suppose maybe i'm calling it one process p1 p2 or maybe producer consumer if there are two processes are modifying the same value then both the processes are racing to each other that whose fin"
      },
      {
        "time": 2884.62,
        "text": "So that's called race condition. Race condition means, I mean, this is just one fancy term that people say that it is a race between J and T that who is winning, who is winning, right? At the, at the last, who is writing? So it's a race between J and T. So that's called race condition. Okay. So maybe, maybe I can tell you with this example, I think I have th"
      }
    ],
    "start": 47
  },
  {
    "id": 48,
    "lecture": 16,
    "title": "Critical-section requirements · Discover",
    "concept": "A critical section protects shared data; a correct protocol needs mutual exclusion, progress and bounded waiting. Mutual exclusion protects safety by preventing simultaneous entry.",
    "teachingSteps": [
      "Start with the moving parts. Mutual exclusion protects safety by preventing simultaneous entry.",
      "Progress prevents unrelated delays when the section is free.",
      "Bounded waiting limits how many later requests can overtake a waiting process."
    ],
    "foundation": {
      "title": "Critical-section requirements",
      "idea": "A critical section protects shared data; a correct protocol needs mutual exclusion, progress and bounded waiting.",
      "terms": [
        "Mutual exclusion: At most one process is in the critical section at a time.",
        "Progress: If the section is free, eligible requests can eventually be decided.",
        "Bounded waiting: A requester cannot be bypassed forever after asking to enter."
      ],
      "example": "A bank balance update should not let two transfers overwrite each other’s changes."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Critical-section requirements · Discover: Two processes request one protected critical section, which requirement forbids both entering at the same time?",
        "options": [
          "Mutual exclusion",
          "Bounded waiting",
          "Throughput"
        ],
        "answer": 0,
        "explanation": "Mutual exclusion. A critical section protects shared data; a correct protocol needs mutual exclusion, progress and bounded waiting."
      },
      {
        "type": "match",
        "prompt": "Critical-section requirements · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Mutual exclusion",
            "At most one process is in the critical section at a time."
          ],
          [
            "Progress",
            "If the section is free, eligible requests can eventually be decided."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Critical-section requirements · Discover: put these events in order.",
        "items": [
          "Request permission to enter",
          "Run protected shared-state work exclusively",
          "Release permission so another request may proceed"
        ],
        "explanation": "Mutual exclusion protects safety by preventing simultaneous entry. Progress prevents unrelated delays when the section is free. Bounded waiting limits how many later requests can overtake a waiting process."
      },
      {
        "type": "number",
        "prompt": "Critical-section requirements · Discover: 3 workers each perform 2 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 6,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 3 × 2 = 6."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "critical",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 15.6,
        "text": "Hi, everyone. Hello, Akash. Hi, everyone. Hello, Roshesh. Hi, Hemant. Hi, Akash. Hi, Satyam. Hello, Vishwanathan. Okay. Okay. So, hi, Hemant. Let's get started, right? Okay. Hi, Ravi. Cool. So, let's get started. So, today we are going to see, I mean, we are going to continue our discussion on the critical section. Cool. Today, like I think it is going to be"
      },
      {
        "time": 1587.9,
        "text": "okay don't don't try to solve now because it will it will it will it will loss your interest through the test series questions so here uh here in this in these kind of questions two three other variations are possible but i have kept those variations through the test series okay so now basically one thing is for sure like i mean uh don't worry about this par"
      }
    ],
    "start": 48
  },
  {
    "id": 49,
    "lecture": 16,
    "title": "Critical-section requirements · Explore",
    "concept": "A critical section protects shared data; a correct protocol needs mutual exclusion, progress and bounded waiting. Progress prevents unrelated delays when the section is free.",
    "teachingSteps": [
      "Watch one example unfold. Mutual exclusion protects safety by preventing simultaneous entry.",
      "Progress prevents unrelated delays when the section is free.",
      "Bounded waiting limits how many later requests can overtake a waiting process."
    ],
    "foundation": {
      "title": "Critical-section requirements",
      "idea": "A critical section protects shared data; a correct protocol needs mutual exclusion, progress and bounded waiting.",
      "terms": [
        "Mutual exclusion: At most one process is in the critical section at a time.",
        "Progress: If the section is free, eligible requests can eventually be decided.",
        "Bounded waiting: A requester cannot be bypassed forever after asking to enter."
      ],
      "example": "A bank balance update should not let two transfers overwrite each other’s changes."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Critical-section requirements · Explore: The trace has just completed: Request permission to enter. Which action should happen next?",
        "options": [
          "Run protected shared-state work exclusively",
          "Request permission to enter",
          "Release permission so another request may proceed"
        ],
        "answer": 0,
        "explanation": "Run protected shared-state work exclusively. Progress prevents unrelated delays when the section is free."
      },
      {
        "type": "match",
        "prompt": "Critical-section requirements · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Progress",
            "If the section is free, eligible requests can eventually be decided."
          ],
          [
            "Bounded waiting",
            "A requester cannot be bypassed forever after asking to enter."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Critical-section requirements · Explore: put the opening events in order.",
        "items": [
          "Request permission to enter",
          "Run protected shared-state work exclusively"
        ],
        "explanation": "Mutual exclusion protects safety by preventing simultaneous entry. Progress prevents unrelated delays when the section is free. Bounded waiting limits how many later requests can overtake a waiting process."
      },
      {
        "type": "number",
        "prompt": "Critical-section requirements · Explore: 3 workers each perform 3 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 9,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 3 × 3 = 9."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "critical",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 15.6,
        "text": "Hi, everyone. Hello, Akash. Hi, everyone. Hello, Roshesh. Hi, Hemant. Hi, Akash. Hi, Satyam. Hello, Vishwanathan. Okay. Okay. So, hi, Hemant. Let's get started, right? Okay. Hi, Ravi. Cool. So, let's get started. So, today we are going to see, I mean, we are going to continue our discussion on the critical section. Cool. Today, like I think it is going to be"
      },
      {
        "time": 1587.9,
        "text": "okay don't don't try to solve now because it will it will it will it will loss your interest through the test series questions so here uh here in this in these kind of questions two three other variations are possible but i have kept those variations through the test series okay so now basically one thing is for sure like i mean uh don't worry about this par"
      }
    ],
    "start": 49
  },
  {
    "id": 50,
    "lecture": 16,
    "title": "Critical-section requirements · Apply",
    "concept": "A critical section protects shared data; a correct protocol needs mutual exclusion, progress and bounded waiting. Bounded waiting limits how many later requests can overtake a waiting process.",
    "teachingSteps": [
      "Use the idea in a new situation. Mutual exclusion protects safety by preventing simultaneous entry.",
      "Progress prevents unrelated delays when the section is free.",
      "Bounded waiting limits how many later requests can overtake a waiting process."
    ],
    "foundation": {
      "title": "Critical-section requirements",
      "idea": "A critical section protects shared data; a correct protocol needs mutual exclusion, progress and bounded waiting.",
      "terms": [
        "Mutual exclusion: At most one process is in the critical section at a time.",
        "Progress: If the section is free, eligible requests can eventually be decided.",
        "Bounded waiting: A requester cannot be bypassed forever after asking to enter."
      ],
      "example": "A bank balance update should not let two transfers overwrite each other’s changes."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Critical-section requirements · Apply: In this new example, what should happen immediately before: Release permission so another request may proceed?",
        "options": [
          "Run protected shared-state work exclusively",
          "Release permission so another request may proceed",
          "Request permission to enter"
        ],
        "answer": 0,
        "explanation": "Run protected shared-state work exclusively must happen first. Progress prevents unrelated delays when the section is free."
      },
      {
        "type": "match",
        "prompt": "Critical-section requirements · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Bounded waiting",
            "A requester cannot be bypassed forever after asking to enter."
          ],
          [
            "Mutual exclusion",
            "At most one process is in the critical section at a time."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Critical-section requirements · Apply: put the final handoff in order.",
        "items": [
          "Run protected shared-state work exclusively",
          "Release permission so another request may proceed"
        ],
        "explanation": "Mutual exclusion protects safety by preventing simultaneous entry. Progress prevents unrelated delays when the section is free. Bounded waiting limits how many later requests can overtake a waiting process."
      },
      {
        "type": "number",
        "prompt": "Critical-section requirements · Apply: 3 workers each perform 4 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 12,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 3 × 4 = 12."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "critical",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 15.6,
        "text": "Hi, everyone. Hello, Akash. Hi, everyone. Hello, Roshesh. Hi, Hemant. Hi, Akash. Hi, Satyam. Hello, Vishwanathan. Okay. Okay. So, hi, Hemant. Let's get started, right? Okay. Hi, Ravi. Cool. So, let's get started. So, today we are going to see, I mean, we are going to continue our discussion on the critical section. Cool. Today, like I think it is going to be"
      },
      {
        "time": 1587.9,
        "text": "okay don't don't try to solve now because it will it will it will it will loss your interest through the test series questions so here uh here in this in these kind of questions two three other variations are possible but i have kept those variations through the test series okay so now basically one thing is for sure like i mean uh don't worry about this par"
      }
    ],
    "start": 50
  },
  {
    "id": 51,
    "lecture": 17,
    "title": "Testing critical-section protocols · Discover",
    "concept": "A synchronization protocol must both keep conflicting work out of the critical section and let waiting work make progress. Safety checks if a forbidden state can ever occur.",
    "teachingSteps": [
      "Start with the moving parts. Safety checks if a forbidden state can ever occur.",
      "Liveness checks whether a valid request eventually moves forward.",
      "A protocol can satisfy mutual exclusion and still fail liveness by starving a process."
    ],
    "foundation": {
      "title": "Testing critical-section protocols",
      "idea": "A synchronization protocol must both keep conflicting work out of the critical section and let waiting work make progress.",
      "terms": [
        "Safety: Nothing bad happens, such as two owners entering together.",
        "Liveness: Something good eventually happens, such as a waiting owner entering.",
        "Busy waiting: Repeatedly checking a condition while using CPU time."
      ],
      "example": "A lock that never permits a second worker violates progress even though it prevents simultaneous entry."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Testing critical-section protocols · Discover: A lock allows one owner in but permanently ignores every later request, which property does that behavior violate?",
        "options": [
          "Progress",
          "Mutual exclusion",
          "Atomicity of an unrelated disk write"
        ],
        "answer": 0,
        "explanation": "Progress. A synchronization protocol must both keep conflicting work out of the critical section and let waiting work make progress."
      },
      {
        "type": "match",
        "prompt": "Testing critical-section protocols · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Safety",
            "Nothing bad happens, such as two owners entering together."
          ],
          [
            "Liveness",
            "Something good eventually happens, such as a waiting owner entering."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Testing critical-section protocols · Discover: put these events in order.",
        "items": [
          "Check whether two owners can overlap",
          "Check whether an eligible request can advance",
          "Check whether a request can be postponed forever"
        ],
        "explanation": "Safety checks if a forbidden state can ever occur. Liveness checks whether a valid request eventually moves forward. A protocol can satisfy mutual exclusion and still fail liveness by starving a process."
      },
      {
        "type": "number",
        "prompt": "Testing critical-section protocols · Discover: 4 workers each perform 2 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 8,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 4 × 2 = 8."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "critical",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 106.43,
        "text": "Let's get started. Now, in the last class, we were discussing about the critical section solution. So maybe I can go over that particular slide once again. Okay. So this is the lecture from the last, I mean, these are the slides from the last lecture. So we were discussing about these things. Yeah."
      },
      {
        "time": 136.19,
        "text": "So we were saying that to solve the critical section problem, we, I mean, there is a problem in the, in accessing the shared data and the problem was obvious to everyone, right? Because this is not atomic. This count plus plus was not atomic. So there's a problem. Now, now, like, I mean, to solve, in order to solve that problem, we want to like propose multi"
      }
    ],
    "start": 51
  },
  {
    "id": 52,
    "lecture": 17,
    "title": "Testing critical-section protocols · Explore",
    "concept": "A synchronization protocol must both keep conflicting work out of the critical section and let waiting work make progress. Liveness checks whether a valid request eventually moves forward.",
    "teachingSteps": [
      "Watch one example unfold. Safety checks if a forbidden state can ever occur.",
      "Liveness checks whether a valid request eventually moves forward.",
      "A protocol can satisfy mutual exclusion and still fail liveness by starving a process."
    ],
    "foundation": {
      "title": "Testing critical-section protocols",
      "idea": "A synchronization protocol must both keep conflicting work out of the critical section and let waiting work make progress.",
      "terms": [
        "Safety: Nothing bad happens, such as two owners entering together.",
        "Liveness: Something good eventually happens, such as a waiting owner entering.",
        "Busy waiting: Repeatedly checking a condition while using CPU time."
      ],
      "example": "A lock that never permits a second worker violates progress even though it prevents simultaneous entry."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Testing critical-section protocols · Explore: The trace has just completed: Check whether two owners can overlap. Which action should happen next?",
        "options": [
          "Check whether an eligible request can advance",
          "Check whether two owners can overlap",
          "Check whether a request can be postponed forever"
        ],
        "answer": 0,
        "explanation": "Check whether an eligible request can advance. Liveness checks whether a valid request eventually moves forward."
      },
      {
        "type": "match",
        "prompt": "Testing critical-section protocols · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Liveness",
            "Something good eventually happens, such as a waiting owner entering."
          ],
          [
            "Busy waiting",
            "Repeatedly checking a condition while using CPU time."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Testing critical-section protocols · Explore: put the opening events in order.",
        "items": [
          "Check whether two owners can overlap",
          "Check whether an eligible request can advance"
        ],
        "explanation": "Safety checks if a forbidden state can ever occur. Liveness checks whether a valid request eventually moves forward. A protocol can satisfy mutual exclusion and still fail liveness by starving a process."
      },
      {
        "type": "number",
        "prompt": "Testing critical-section protocols · Explore: 4 workers each perform 3 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 12,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 4 × 3 = 12."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "critical",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 106.43,
        "text": "Let's get started. Now, in the last class, we were discussing about the critical section solution. So maybe I can go over that particular slide once again. Okay. So this is the lecture from the last, I mean, these are the slides from the last lecture. So we were discussing about these things. Yeah."
      },
      {
        "time": 136.19,
        "text": "So we were saying that to solve the critical section problem, we, I mean, there is a problem in the, in accessing the shared data and the problem was obvious to everyone, right? Because this is not atomic. This count plus plus was not atomic. So there's a problem. Now, now, like, I mean, to solve, in order to solve that problem, we want to like propose multi"
      }
    ],
    "start": 52
  },
  {
    "id": 53,
    "lecture": 17,
    "title": "Testing critical-section protocols · Apply",
    "concept": "A synchronization protocol must both keep conflicting work out of the critical section and let waiting work make progress. A protocol can satisfy mutual exclusion and still fail liveness by starving a process.",
    "teachingSteps": [
      "Use the idea in a new situation. Safety checks if a forbidden state can ever occur.",
      "Liveness checks whether a valid request eventually moves forward.",
      "A protocol can satisfy mutual exclusion and still fail liveness by starving a process."
    ],
    "foundation": {
      "title": "Testing critical-section protocols",
      "idea": "A synchronization protocol must both keep conflicting work out of the critical section and let waiting work make progress.",
      "terms": [
        "Safety: Nothing bad happens, such as two owners entering together.",
        "Liveness: Something good eventually happens, such as a waiting owner entering.",
        "Busy waiting: Repeatedly checking a condition while using CPU time."
      ],
      "example": "A lock that never permits a second worker violates progress even though it prevents simultaneous entry."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Testing critical-section protocols · Apply: In this new example, what should happen immediately before: Check whether a request can be postponed forever?",
        "options": [
          "Check whether an eligible request can advance",
          "Check whether a request can be postponed forever",
          "Check whether two owners can overlap"
        ],
        "answer": 0,
        "explanation": "Check whether an eligible request can advance must happen first. Liveness checks whether a valid request eventually moves forward."
      },
      {
        "type": "match",
        "prompt": "Testing critical-section protocols · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Busy waiting",
            "Repeatedly checking a condition while using CPU time."
          ],
          [
            "Safety",
            "Nothing bad happens, such as two owners entering together."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Testing critical-section protocols · Apply: put the final handoff in order.",
        "items": [
          "Check whether an eligible request can advance",
          "Check whether a request can be postponed forever"
        ],
        "explanation": "Safety checks if a forbidden state can ever occur. Liveness checks whether a valid request eventually moves forward. A protocol can satisfy mutual exclusion and still fail liveness by starving a process."
      },
      {
        "type": "number",
        "prompt": "Testing critical-section protocols · Apply: 4 workers each perform 4 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 16,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 4 × 4 = 16."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "critical",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 106.43,
        "text": "Let's get started. Now, in the last class, we were discussing about the critical section solution. So maybe I can go over that particular slide once again. Okay. So this is the lecture from the last, I mean, these are the slides from the last lecture. So we were discussing about these things. Yeah."
      },
      {
        "time": 136.19,
        "text": "So we were saying that to solve the critical section problem, we, I mean, there is a problem in the, in accessing the shared data and the problem was obvious to everyone, right? Because this is not atomic. This count plus plus was not atomic. So there's a problem. Now, now, like, I mean, to solve, in order to solve that problem, we want to like propose multi"
      }
    ],
    "start": 53
  },
  {
    "id": 54,
    "lecture": 18,
    "title": "Peterson’s two-process solution · Discover",
    "concept": "Peterson’s algorithm uses one intent flag per process and a turn variable to coordinate two processes under its memory-order assumptions. Each process first announces that it wants to enter.",
    "teachingSteps": [
      "Start with the moving parts. Each process first announces that it wants to enter.",
      "Setting turn gives the other process priority if both flags are raised.",
      "The waiting condition combines the other flag with turn; leaving clears this process flag."
    ],
    "foundation": {
      "title": "Peterson’s two-process solution",
      "idea": "Peterson’s algorithm uses one intent flag per process and a turn variable to coordinate two processes under its memory-order assumptions.",
      "terms": [
        "Intent flag: A shared Boolean stating that a process wants to enter.",
        "Turn: A shared tie-breaker indicating which process should wait.",
        "Entry section: The test that determines when protected work may begin."
      ],
      "example": "If both processes raise their flags, turn breaks the tie so one waits while the other enters."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Peterson’s two-process solution · Discover: Both Peterson flags are true and turn gives process 0 priority, which process should wait at the entry test?",
        "options": [
          "Process 1",
          "Both processes, always",
          "Neither process; flags are ignored"
        ],
        "answer": 0,
        "explanation": "Process 1. Peterson’s algorithm uses one intent flag per process and a turn variable to coordinate two processes under its memory-order assumptions."
      },
      {
        "type": "match",
        "prompt": "Peterson’s two-process solution · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Intent flag",
            "A shared Boolean stating that a process wants to enter."
          ],
          [
            "Turn",
            "A shared tie-breaker indicating which process should wait."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Peterson’s two-process solution · Discover: put these events in order.",
        "items": [
          "Raise this process intent flag",
          "Give the other process the tie-breaking turn",
          "Wait while the other wants entry and has priority"
        ],
        "explanation": "Each process first announces that it wants to enter. Setting turn gives the other process priority if both flags are raised. The waiting condition combines the other flag with turn; leaving clears this process flag."
      },
      {
        "type": "number",
        "prompt": "Peterson’s two-process solution · Discover: 2 workers each perform 2 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 4,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 2 × 2 = 4."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "peterson",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 740.26,
        "text": "So here in the solution we are saying there is a turn variable which is which is telling the turn whether it is a turn of zero processor zero process zero process one here in the solution we are showing the interest we are saying that okay like whether whether I'm interested or not if I'm interested then then I will check if others others other is also inter"
      },
      {
        "time": 1469.09,
        "text": "so that's why that's why the gail the gailman textbook is having turned right so they are having turned it is it is turn off other other process you can have any name it doesn't matter okay so now this is the Peterson solution now let's just see how it is how it is executing maybe i can just tell you the intuition once again so basically this won't true mean"
      }
    ],
    "start": 54
  },
  {
    "id": 55,
    "lecture": 18,
    "title": "Peterson’s two-process solution · Explore",
    "concept": "Peterson’s algorithm uses one intent flag per process and a turn variable to coordinate two processes under its memory-order assumptions. Setting turn gives the other process priority if both flags are raised.",
    "teachingSteps": [
      "Watch one example unfold. Each process first announces that it wants to enter.",
      "Setting turn gives the other process priority if both flags are raised.",
      "The waiting condition combines the other flag with turn; leaving clears this process flag."
    ],
    "foundation": {
      "title": "Peterson’s two-process solution",
      "idea": "Peterson’s algorithm uses one intent flag per process and a turn variable to coordinate two processes under its memory-order assumptions.",
      "terms": [
        "Intent flag: A shared Boolean stating that a process wants to enter.",
        "Turn: A shared tie-breaker indicating which process should wait.",
        "Entry section: The test that determines when protected work may begin."
      ],
      "example": "If both processes raise their flags, turn breaks the tie so one waits while the other enters."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Peterson’s two-process solution · Explore: The trace has just completed: Raise this process intent flag. Which action should happen next?",
        "options": [
          "Give the other process the tie-breaking turn",
          "Raise this process intent flag",
          "Wait while the other wants entry and has priority"
        ],
        "answer": 0,
        "explanation": "Give the other process the tie-breaking turn. Setting turn gives the other process priority if both flags are raised."
      },
      {
        "type": "match",
        "prompt": "Peterson’s two-process solution · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Turn",
            "A shared tie-breaker indicating which process should wait."
          ],
          [
            "Entry section",
            "The test that determines when protected work may begin."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Peterson’s two-process solution · Explore: put the opening events in order.",
        "items": [
          "Raise this process intent flag",
          "Give the other process the tie-breaking turn"
        ],
        "explanation": "Each process first announces that it wants to enter. Setting turn gives the other process priority if both flags are raised. The waiting condition combines the other flag with turn; leaving clears this process flag."
      },
      {
        "type": "number",
        "prompt": "Peterson’s two-process solution · Explore: 2 workers each perform 3 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 6,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 2 × 3 = 6."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "peterson",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 740.26,
        "text": "So here in the solution we are saying there is a turn variable which is which is telling the turn whether it is a turn of zero processor zero process zero process one here in the solution we are showing the interest we are saying that okay like whether whether I'm interested or not if I'm interested then then I will check if others others other is also inter"
      },
      {
        "time": 1469.09,
        "text": "so that's why that's why the gail the gailman textbook is having turned right so they are having turned it is it is turn off other other process you can have any name it doesn't matter okay so now this is the Peterson solution now let's just see how it is how it is executing maybe i can just tell you the intuition once again so basically this won't true mean"
      }
    ],
    "start": 55
  },
  {
    "id": 56,
    "lecture": 18,
    "title": "Peterson’s two-process solution · Apply",
    "concept": "Peterson’s algorithm uses one intent flag per process and a turn variable to coordinate two processes under its memory-order assumptions. The waiting condition combines the other flag with turn; leaving clears this process flag.",
    "teachingSteps": [
      "Use the idea in a new situation. Each process first announces that it wants to enter.",
      "Setting turn gives the other process priority if both flags are raised.",
      "The waiting condition combines the other flag with turn; leaving clears this process flag."
    ],
    "foundation": {
      "title": "Peterson’s two-process solution",
      "idea": "Peterson’s algorithm uses one intent flag per process and a turn variable to coordinate two processes under its memory-order assumptions.",
      "terms": [
        "Intent flag: A shared Boolean stating that a process wants to enter.",
        "Turn: A shared tie-breaker indicating which process should wait.",
        "Entry section: The test that determines when protected work may begin."
      ],
      "example": "If both processes raise their flags, turn breaks the tie so one waits while the other enters."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Peterson’s two-process solution · Apply: In this new example, what should happen immediately before: Wait while the other wants entry and has priority?",
        "options": [
          "Give the other process the tie-breaking turn",
          "Wait while the other wants entry and has priority",
          "Raise this process intent flag"
        ],
        "answer": 0,
        "explanation": "Give the other process the tie-breaking turn must happen first. Setting turn gives the other process priority if both flags are raised."
      },
      {
        "type": "match",
        "prompt": "Peterson’s two-process solution · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Entry section",
            "The test that determines when protected work may begin."
          ],
          [
            "Intent flag",
            "A shared Boolean stating that a process wants to enter."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Peterson’s two-process solution · Apply: put the final handoff in order.",
        "items": [
          "Give the other process the tie-breaking turn",
          "Wait while the other wants entry and has priority"
        ],
        "explanation": "Each process first announces that it wants to enter. Setting turn gives the other process priority if both flags are raised. The waiting condition combines the other flag with turn; leaving clears this process flag."
      },
      {
        "type": "number",
        "prompt": "Peterson’s two-process solution · Apply: 2 workers each perform 4 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 8,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 2 × 4 = 8."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "peterson",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 740.26,
        "text": "So here in the solution we are saying there is a turn variable which is which is telling the turn whether it is a turn of zero processor zero process zero process one here in the solution we are showing the interest we are saying that okay like whether whether I'm interested or not if I'm interested then then I will check if others others other is also inter"
      },
      {
        "time": 1469.09,
        "text": "so that's why that's why the gail the gailman textbook is having turned right so they are having turned it is it is turn off other other process you can have any name it doesn't matter okay so now this is the Peterson solution now let's just see how it is how it is executing maybe i can just tell you the intuition once again so basically this won't true mean"
      }
    ],
    "start": 56
  },
  {
    "id": 57,
    "lecture": 19,
    "title": "Atomic hardware operations · Discover",
    "concept": "Atomic read-modify-write instructions let software update a lock without another processor slipping between the read and write. A plain load followed by a store leaves an interleaving window.",
    "teachingSteps": [
      "Start with the moving parts. A plain load followed by a store leaves an interleaving window.",
      "An atomic read-modify-write makes the observation and update one indivisible operation.",
      "Interrupt masking affects local interrupt handling; multiprocessor mutual exclusion needs shared atomic coordination."
    ],
    "foundation": {
      "title": "Atomic hardware operations",
      "idea": "Atomic read-modify-write instructions let software update a lock without another processor slipping between the read and write.",
      "terms": [
        "Test-and-set: Atomically reads a lock value and sets it.",
        "Compare-and-swap: Changes a value only if it still matches an expected value.",
        "Interrupt masking: Disables local interrupts, which does not stop another CPU core."
      ],
      "example": "Two cores can both read an unlocked value before either stores locked unless acquisition is atomic."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Atomic hardware operations · Discover: Two CPU cores try to acquire the same lock simultaneously, what feature makes only one atomic test-and-set observe the old unlocked value?",
        "options": [
          "The instruction executes indivisibly across the competing cores",
          "Each core has a private copy of the lock",
          "Disabling interrupts on one core stops every other core"
        ],
        "answer": 0,
        "explanation": "The instruction executes indivisibly across the competing cores. Atomic read-modify-write instructions let software update a lock without another processor slipping between the read and write."
      },
      {
        "type": "match",
        "prompt": "Atomic hardware operations · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Test-and-set",
            "Atomically reads a lock value and sets it."
          ],
          [
            "Compare-and-swap",
            "Changes a value only if it still matches an expected value."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Atomic hardware operations · Discover: put these events in order.",
        "items": [
          "Observe the lock state",
          "Atomically test and update it",
          "Let only the successful owner enter"
        ],
        "explanation": "A plain load followed by a store leaves an interleaving window. An atomic read-modify-write makes the observation and update one indivisible operation. Interrupt masking affects local interrupt handling; multiprocessor mutual exclusion needs shared atomic coordination."
      },
      {
        "type": "number",
        "prompt": "Atomic hardware operations · Discover: 3 workers each perform 2 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 6,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 3 × 2 = 6."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "atomic",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 273.73,
        "text": "Now, let's just see the second solution, which is basically providing the atomic instructions. So what do I mean by that? Let me let me just tell you. So basically what we are looking for now. So we are looking for some support from the hardware and the support will be in terms of providing the atomic instruction from the hardware itself, which means which m"
      },
      {
        "time": 307.71,
        "text": "modify write we want to we want to get support from the hardware which provides this read modify write just as one instruction okay that's also called as RMW so basically there are I mean couple of architecture there are couple of processors that provide different different set of operations so let's just see them so one of the most popular one is test and s"
      }
    ],
    "start": 57
  },
  {
    "id": 58,
    "lecture": 19,
    "title": "Atomic hardware operations · Explore",
    "concept": "Atomic read-modify-write instructions let software update a lock without another processor slipping between the read and write. An atomic read-modify-write makes the observation and update one indivisible operation.",
    "teachingSteps": [
      "Watch one example unfold. A plain load followed by a store leaves an interleaving window.",
      "An atomic read-modify-write makes the observation and update one indivisible operation.",
      "Interrupt masking affects local interrupt handling; multiprocessor mutual exclusion needs shared atomic coordination."
    ],
    "foundation": {
      "title": "Atomic hardware operations",
      "idea": "Atomic read-modify-write instructions let software update a lock without another processor slipping between the read and write.",
      "terms": [
        "Test-and-set: Atomically reads a lock value and sets it.",
        "Compare-and-swap: Changes a value only if it still matches an expected value.",
        "Interrupt masking: Disables local interrupts, which does not stop another CPU core."
      ],
      "example": "Two cores can both read an unlocked value before either stores locked unless acquisition is atomic."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Atomic hardware operations · Explore: The trace has just completed: Observe the lock state. Which action should happen next?",
        "options": [
          "Atomically test and update it",
          "Observe the lock state",
          "Let only the successful owner enter"
        ],
        "answer": 0,
        "explanation": "Atomically test and update it. An atomic read-modify-write makes the observation and update one indivisible operation."
      },
      {
        "type": "match",
        "prompt": "Atomic hardware operations · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Compare-and-swap",
            "Changes a value only if it still matches an expected value."
          ],
          [
            "Interrupt masking",
            "Disables local interrupts, which does not stop another CPU core."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Atomic hardware operations · Explore: put the opening events in order.",
        "items": [
          "Observe the lock state",
          "Atomically test and update it"
        ],
        "explanation": "A plain load followed by a store leaves an interleaving window. An atomic read-modify-write makes the observation and update one indivisible operation. Interrupt masking affects local interrupt handling; multiprocessor mutual exclusion needs shared atomic coordination."
      },
      {
        "type": "number",
        "prompt": "Atomic hardware operations · Explore: 3 workers each perform 3 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 9,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 3 × 3 = 9."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "atomic",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 273.73,
        "text": "Now, let's just see the second solution, which is basically providing the atomic instructions. So what do I mean by that? Let me let me just tell you. So basically what we are looking for now. So we are looking for some support from the hardware and the support will be in terms of providing the atomic instruction from the hardware itself, which means which m"
      },
      {
        "time": 307.71,
        "text": "modify write we want to we want to get support from the hardware which provides this read modify write just as one instruction okay that's also called as RMW so basically there are I mean couple of architecture there are couple of processors that provide different different set of operations so let's just see them so one of the most popular one is test and s"
      }
    ],
    "start": 58
  },
  {
    "id": 59,
    "lecture": 19,
    "title": "Atomic hardware operations · Apply",
    "concept": "Atomic read-modify-write instructions let software update a lock without another processor slipping between the read and write. Interrupt masking affects local interrupt handling; multiprocessor mutual exclusion needs shared atomic coordination.",
    "teachingSteps": [
      "Use the idea in a new situation. A plain load followed by a store leaves an interleaving window.",
      "An atomic read-modify-write makes the observation and update one indivisible operation.",
      "Interrupt masking affects local interrupt handling; multiprocessor mutual exclusion needs shared atomic coordination."
    ],
    "foundation": {
      "title": "Atomic hardware operations",
      "idea": "Atomic read-modify-write instructions let software update a lock without another processor slipping between the read and write.",
      "terms": [
        "Test-and-set: Atomically reads a lock value and sets it.",
        "Compare-and-swap: Changes a value only if it still matches an expected value.",
        "Interrupt masking: Disables local interrupts, which does not stop another CPU core."
      ],
      "example": "Two cores can both read an unlocked value before either stores locked unless acquisition is atomic."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Atomic hardware operations · Apply: In this new example, what should happen immediately before: Let only the successful owner enter?",
        "options": [
          "Atomically test and update it",
          "Let only the successful owner enter",
          "Observe the lock state"
        ],
        "answer": 0,
        "explanation": "Atomically test and update it must happen first. An atomic read-modify-write makes the observation and update one indivisible operation."
      },
      {
        "type": "match",
        "prompt": "Atomic hardware operations · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Interrupt masking",
            "Disables local interrupts, which does not stop another CPU core."
          ],
          [
            "Test-and-set",
            "Atomically reads a lock value and sets it."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Atomic hardware operations · Apply: put the final handoff in order.",
        "items": [
          "Atomically test and update it",
          "Let only the successful owner enter"
        ],
        "explanation": "A plain load followed by a store leaves an interleaving window. An atomic read-modify-write makes the observation and update one indivisible operation. Interrupt masking affects local interrupt handling; multiprocessor mutual exclusion needs shared atomic coordination."
      },
      {
        "type": "number",
        "prompt": "Atomic hardware operations · Apply: 3 workers each perform 4 successful atomic increments on a shared counter starting at 0. What is the final counter value?",
        "answer": 12,
        "unit": "",
        "tolerance": 1e-8,
        "explanation": "Atomic increments preserve every update: 3 × 4 = 12."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "atomic",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 273.73,
        "text": "Now, let's just see the second solution, which is basically providing the atomic instructions. So what do I mean by that? Let me let me just tell you. So basically what we are looking for now. So we are looking for some support from the hardware and the support will be in terms of providing the atomic instruction from the hardware itself, which means which m"
      },
      {
        "time": 307.71,
        "text": "modify write we want to we want to get support from the hardware which provides this read modify write just as one instruction okay that's also called as RMW so basically there are I mean couple of architecture there are couple of processors that provide different different set of operations so let's just see them so one of the most popular one is test and s"
      }
    ],
    "start": 59
  },
  {
    "id": 60,
    "lecture": 20,
    "title": "Counting semaphores · Discover",
    "concept": "A semaphore is an integer-like synchronization object whose wait and signal operations coordinate permits or events. The initial value represents available permits for a resource pool.",
    "teachingSteps": [
      "Start with the moving parts. The initial value represents available permits for a resource pool.",
      "wait must coordinate decrementing the count with blocking when no permit remains.",
      "signal makes a permit available and can wake one waiting process."
    ],
    "foundation": {
      "title": "Counting semaphores",
      "idea": "A semaphore is an integer-like synchronization object whose wait and signal operations coordinate permits or events.",
      "terms": [
        "wait: Take a permit or block until one becomes available.",
        "signal: Return or create a permit and possibly wake a waiter.",
        "Counting semaphore: A semaphore whose nonnegative permits represent available resources."
      ],
      "example": "A semaphore initialized to 3 can allow up to three workers to use a pool of three identical resources."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Counting semaphores · Discover: A counting semaphore has two permits and two workers each acquire one, how many permits remain?",
        "options": [
          "0",
          "1",
          "2, because acquisition does not change the count"
        ],
        "answer": 0,
        "explanation": "0. A semaphore is an integer-like synchronization object whose wait and signal operations coordinate permits or events."
      },
      {
        "type": "match",
        "prompt": "Counting semaphores · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "wait",
            "Take a permit or block until one becomes available."
          ],
          [
            "signal",
            "Return or create a permit and possibly wake a waiter."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Counting semaphores · Discover: put these events in order.",
        "items": [
          "Initialize the permit count",
          "wait consumes an available permit or blocks",
          "signal returns a permit and may wake a waiter"
        ],
        "explanation": "The initial value represents available permits for a resource pool. wait must coordinate decrementing the count with blocking when no permit remains. signal makes a permit available and can wake one waiting process."
      },
      {
        "type": "number",
        "prompt": "Counting semaphores · Discover: A semaphore starts with 3 permits and 1 workers acquire one permit each. How many permits remain?",
        "answer": 2,
        "unit": "permits",
        "tolerance": 1e-8,
        "explanation": "3 − 1 = 2 permits remain."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "semaphore",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 1210.77,
        "text": "So this question wants to convey one use of the semaphore. Can you tell me what is that use that I wanted to convey? Yeah. So I wanted to convey that semaphore can be used. So, so one thing I wanted to convey is that semaphore, semaphores can be used to enforce the ordering. Right. Okay. So I hope that is clear. Now how you are enforcing the ordering here. L"
      },
      {
        "time": 1530.54,
        "text": "and once this is happening then only this is the if you want you can use multiple semaphores I mean it's not an issue let's suppose there is another semaphore which is which is z or t okay t equal to you can take any value so basically it is saying that a will be happening actually the problem with the semaphore is that you can have a multiple times right so"
      }
    ],
    "start": 60
  },
  {
    "id": 61,
    "lecture": 20,
    "title": "Counting semaphores · Explore",
    "concept": "A semaphore is an integer-like synchronization object whose wait and signal operations coordinate permits or events. wait must coordinate decrementing the count with blocking when no permit remains.",
    "teachingSteps": [
      "Watch one example unfold. The initial value represents available permits for a resource pool.",
      "wait must coordinate decrementing the count with blocking when no permit remains.",
      "signal makes a permit available and can wake one waiting process."
    ],
    "foundation": {
      "title": "Counting semaphores",
      "idea": "A semaphore is an integer-like synchronization object whose wait and signal operations coordinate permits or events.",
      "terms": [
        "wait: Take a permit or block until one becomes available.",
        "signal: Return or create a permit and possibly wake a waiter.",
        "Counting semaphore: A semaphore whose nonnegative permits represent available resources."
      ],
      "example": "A semaphore initialized to 3 can allow up to three workers to use a pool of three identical resources."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Counting semaphores · Explore: The trace has just completed: Initialize the permit count. Which action should happen next?",
        "options": [
          "wait consumes an available permit or blocks",
          "Initialize the permit count",
          "signal returns a permit and may wake a waiter"
        ],
        "answer": 0,
        "explanation": "wait consumes an available permit or blocks. wait must coordinate decrementing the count with blocking when no permit remains."
      },
      {
        "type": "match",
        "prompt": "Counting semaphores · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "signal",
            "Return or create a permit and possibly wake a waiter."
          ],
          [
            "Counting semaphore",
            "A semaphore whose nonnegative permits represent available resources."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Counting semaphores · Explore: put the opening events in order.",
        "items": [
          "Initialize the permit count",
          "wait consumes an available permit or blocks"
        ],
        "explanation": "The initial value represents available permits for a resource pool. wait must coordinate decrementing the count with blocking when no permit remains. signal makes a permit available and can wake one waiting process."
      },
      {
        "type": "number",
        "prompt": "Counting semaphores · Explore: A semaphore starts with 3 permits and 2 workers acquire one permit each. How many permits remain?",
        "answer": 1,
        "unit": "permits",
        "tolerance": 1e-8,
        "explanation": "3 − 2 = 1 permits remain."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "semaphore",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 1210.77,
        "text": "So this question wants to convey one use of the semaphore. Can you tell me what is that use that I wanted to convey? Yeah. So I wanted to convey that semaphore can be used. So, so one thing I wanted to convey is that semaphore, semaphores can be used to enforce the ordering. Right. Okay. So I hope that is clear. Now how you are enforcing the ordering here. L"
      },
      {
        "time": 1530.54,
        "text": "and once this is happening then only this is the if you want you can use multiple semaphores I mean it's not an issue let's suppose there is another semaphore which is which is z or t okay t equal to you can take any value so basically it is saying that a will be happening actually the problem with the semaphore is that you can have a multiple times right so"
      }
    ],
    "start": 61
  },
  {
    "id": 62,
    "lecture": 20,
    "title": "Counting semaphores · Apply",
    "concept": "A semaphore is an integer-like synchronization object whose wait and signal operations coordinate permits or events. signal makes a permit available and can wake one waiting process.",
    "teachingSteps": [
      "Use the idea in a new situation. The initial value represents available permits for a resource pool.",
      "wait must coordinate decrementing the count with blocking when no permit remains.",
      "signal makes a permit available and can wake one waiting process."
    ],
    "foundation": {
      "title": "Counting semaphores",
      "idea": "A semaphore is an integer-like synchronization object whose wait and signal operations coordinate permits or events.",
      "terms": [
        "wait: Take a permit or block until one becomes available.",
        "signal: Return or create a permit and possibly wake a waiter.",
        "Counting semaphore: A semaphore whose nonnegative permits represent available resources."
      ],
      "example": "A semaphore initialized to 3 can allow up to three workers to use a pool of three identical resources."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Counting semaphores · Apply: In this new example, what should happen immediately before: signal returns a permit and may wake a waiter?",
        "options": [
          "wait consumes an available permit or blocks",
          "signal returns a permit and may wake a waiter",
          "Initialize the permit count"
        ],
        "answer": 0,
        "explanation": "wait consumes an available permit or blocks must happen first. wait must coordinate decrementing the count with blocking when no permit remains."
      },
      {
        "type": "match",
        "prompt": "Counting semaphores · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Counting semaphore",
            "A semaphore whose nonnegative permits represent available resources."
          ],
          [
            "wait",
            "Take a permit or block until one becomes available."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Counting semaphores · Apply: put the final handoff in order.",
        "items": [
          "wait consumes an available permit or blocks",
          "signal returns a permit and may wake a waiter"
        ],
        "explanation": "The initial value represents available permits for a resource pool. wait must coordinate decrementing the count with blocking when no permit remains. signal makes a permit available and can wake one waiting process."
      },
      {
        "type": "number",
        "prompt": "Counting semaphores · Apply: A semaphore starts with 3 permits and 3 workers acquire one permit each. How many permits remain?",
        "answer": 0,
        "unit": "permits",
        "tolerance": 1e-8,
        "explanation": "3 − 3 = 0 permits remain."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "semaphore",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 1210.77,
        "text": "So this question wants to convey one use of the semaphore. Can you tell me what is that use that I wanted to convey? Yeah. So I wanted to convey that semaphore can be used. So, so one thing I wanted to convey is that semaphore, semaphores can be used to enforce the ordering. Right. Okay. So I hope that is clear. Now how you are enforcing the ordering here. L"
      },
      {
        "time": 1530.54,
        "text": "and once this is happening then only this is the if you want you can use multiple semaphores I mean it's not an issue let's suppose there is another semaphore which is which is z or t okay t equal to you can take any value so basically it is saying that a will be happening actually the problem with the semaphore is that you can have a multiple times right so"
      }
    ],
    "start": 62
  },
  {
    "id": 63,
    "lecture": 21,
    "title": "Bounded producer-consumer buffer · Discover",
    "concept": "A bounded buffer uses empty-slot, full-slot and mutual-exclusion semaphores to coordinate producers and consumers safely. For capacity N, empty plus full equals N when no operation is halfway through.",
    "teachingSteps": [
      "Start with the moving parts. For capacity N, empty plus full equals N when no operation is halfway through.",
      "A producer reserves an empty slot before changing the buffer.",
      "A consumer reserves an available item; mutex prevents simultaneous unsafe updates."
    ],
    "foundation": {
      "title": "Bounded producer-consumer buffer",
      "idea": "A bounded buffer uses empty-slot, full-slot and mutual-exclusion semaphores to coordinate producers and consumers safely.",
      "terms": [
        "empty: The number of unused buffer slots.",
        "full: The number of occupied slots available to consume.",
        "mutex: A binary semaphore protecting the buffer update."
      ],
      "example": "For capacity 4 with 3 occupied slots, full is 3 and empty is 1; a producer must wait if empty reaches zero."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Bounded producer-consumer buffer · Discover: A four-slot buffer contains three items before a producer inserts one, how many empty slots remain afterward?",
        "options": [
          "0",
          "1",
          "4"
        ],
        "answer": 0,
        "explanation": "0. A bounded buffer uses empty-slot, full-slot and mutual-exclusion semaphores to coordinate producers and consumers safely."
      },
      {
        "type": "match",
        "prompt": "Bounded producer-consumer buffer · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "empty",
            "The number of unused buffer slots."
          ],
          [
            "full",
            "The number of occupied slots available to consume."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Bounded producer-consumer buffer · Discover: put these events in order.",
        "items": [
          "Producer waits for empty and mutex",
          "Producer inserts an item and signals full",
          "Consumer waits for full, removes an item and signals empty"
        ],
        "explanation": "For capacity N, empty plus full equals N when no operation is halfway through. A producer reserves an empty slot before changing the buffer. A consumer reserves an available item; mutex prevents simultaneous unsafe updates."
      },
      {
        "type": "number",
        "prompt": "Bounded producer-consumer buffer · Discover: A semaphore starts with 4 permits and 1 workers acquire one permit each. How many permits remain?",
        "answer": 3,
        "unit": "permits",
        "tolerance": 1e-8,
        "explanation": "4 − 1 = 3 permits remain."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "producer-consumer",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 2008.27,
        "text": "And something like that. So basically, I mean, so basically what we want, we want to have some synchronization between the producers, consumers like that. So let me just tell you the idea that what we want to do. So there are multiple producers, multiple producer thread and there will be multiple consumer threads. So both will be multiple. All threads modify"
      },
      {
        "time": 2159.49,
        "text": "okay so basically it will it will depend whichever got executed at last so you can see there's a potential problem that if multiple producer is seeing that okay this is empty and then if they try to you know do the things uh they try to modify the same buffer so maybe this is this is not a desired case now the similar problem can can happen with the consumer"
      }
    ],
    "start": 63
  },
  {
    "id": 64,
    "lecture": 21,
    "title": "Bounded producer-consumer buffer · Explore",
    "concept": "A bounded buffer uses empty-slot, full-slot and mutual-exclusion semaphores to coordinate producers and consumers safely. A producer reserves an empty slot before changing the buffer.",
    "teachingSteps": [
      "Watch one example unfold. For capacity N, empty plus full equals N when no operation is halfway through.",
      "A producer reserves an empty slot before changing the buffer.",
      "A consumer reserves an available item; mutex prevents simultaneous unsafe updates."
    ],
    "foundation": {
      "title": "Bounded producer-consumer buffer",
      "idea": "A bounded buffer uses empty-slot, full-slot and mutual-exclusion semaphores to coordinate producers and consumers safely.",
      "terms": [
        "empty: The number of unused buffer slots.",
        "full: The number of occupied slots available to consume.",
        "mutex: A binary semaphore protecting the buffer update."
      ],
      "example": "For capacity 4 with 3 occupied slots, full is 3 and empty is 1; a producer must wait if empty reaches zero."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Bounded producer-consumer buffer · Explore: The trace has just completed: Producer waits for empty and mutex. Which action should happen next?",
        "options": [
          "Producer inserts an item and signals full",
          "Producer waits for empty and mutex",
          "Consumer waits for full, removes an item and signals empty"
        ],
        "answer": 0,
        "explanation": "Producer inserts an item and signals full. A producer reserves an empty slot before changing the buffer."
      },
      {
        "type": "match",
        "prompt": "Bounded producer-consumer buffer · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "full",
            "The number of occupied slots available to consume."
          ],
          [
            "mutex",
            "A binary semaphore protecting the buffer update."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Bounded producer-consumer buffer · Explore: put the opening events in order.",
        "items": [
          "Producer waits for empty and mutex",
          "Producer inserts an item and signals full"
        ],
        "explanation": "For capacity N, empty plus full equals N when no operation is halfway through. A producer reserves an empty slot before changing the buffer. A consumer reserves an available item; mutex prevents simultaneous unsafe updates."
      },
      {
        "type": "number",
        "prompt": "Bounded producer-consumer buffer · Explore: A semaphore starts with 4 permits and 2 workers acquire one permit each. How many permits remain?",
        "answer": 2,
        "unit": "permits",
        "tolerance": 1e-8,
        "explanation": "4 − 2 = 2 permits remain."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "producer-consumer",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 2008.27,
        "text": "And something like that. So basically, I mean, so basically what we want, we want to have some synchronization between the producers, consumers like that. So let me just tell you the idea that what we want to do. So there are multiple producers, multiple producer thread and there will be multiple consumer threads. So both will be multiple. All threads modify"
      },
      {
        "time": 2159.49,
        "text": "okay so basically it will it will depend whichever got executed at last so you can see there's a potential problem that if multiple producer is seeing that okay this is empty and then if they try to you know do the things uh they try to modify the same buffer so maybe this is this is not a desired case now the similar problem can can happen with the consumer"
      }
    ],
    "start": 64
  },
  {
    "id": 65,
    "lecture": 21,
    "title": "Bounded producer-consumer buffer · Apply",
    "concept": "A bounded buffer uses empty-slot, full-slot and mutual-exclusion semaphores to coordinate producers and consumers safely. A consumer reserves an available item; mutex prevents simultaneous unsafe updates.",
    "teachingSteps": [
      "Use the idea in a new situation. For capacity N, empty plus full equals N when no operation is halfway through.",
      "A producer reserves an empty slot before changing the buffer.",
      "A consumer reserves an available item; mutex prevents simultaneous unsafe updates."
    ],
    "foundation": {
      "title": "Bounded producer-consumer buffer",
      "idea": "A bounded buffer uses empty-slot, full-slot and mutual-exclusion semaphores to coordinate producers and consumers safely.",
      "terms": [
        "empty: The number of unused buffer slots.",
        "full: The number of occupied slots available to consume.",
        "mutex: A binary semaphore protecting the buffer update."
      ],
      "example": "For capacity 4 with 3 occupied slots, full is 3 and empty is 1; a producer must wait if empty reaches zero."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Bounded producer-consumer buffer · Apply: In this new example, what should happen immediately before: Consumer waits for full, removes an item and signals empty?",
        "options": [
          "Producer inserts an item and signals full",
          "Consumer waits for full, removes an item and signals empty",
          "Producer waits for empty and mutex"
        ],
        "answer": 0,
        "explanation": "Producer inserts an item and signals full must happen first. A producer reserves an empty slot before changing the buffer."
      },
      {
        "type": "match",
        "prompt": "Bounded producer-consumer buffer · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "mutex",
            "A binary semaphore protecting the buffer update."
          ],
          [
            "empty",
            "The number of unused buffer slots."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Bounded producer-consumer buffer · Apply: put the final handoff in order.",
        "items": [
          "Producer inserts an item and signals full",
          "Consumer waits for full, removes an item and signals empty"
        ],
        "explanation": "For capacity N, empty plus full equals N when no operation is halfway through. A producer reserves an empty slot before changing the buffer. A consumer reserves an available item; mutex prevents simultaneous unsafe updates."
      },
      {
        "type": "number",
        "prompt": "Bounded producer-consumer buffer · Apply: A semaphore starts with 4 permits and 3 workers acquire one permit each. How many permits remain?",
        "answer": 1,
        "unit": "permits",
        "tolerance": 1e-8,
        "explanation": "4 − 3 = 1 permits remain."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "producer-consumer",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 2008.27,
        "text": "And something like that. So basically, I mean, so basically what we want, we want to have some synchronization between the producers, consumers like that. So let me just tell you the idea that what we want to do. So there are multiple producers, multiple producer thread and there will be multiple consumer threads. So both will be multiple. All threads modify"
      },
      {
        "time": 2159.49,
        "text": "okay so basically it will it will depend whichever got executed at last so you can see there's a potential problem that if multiple producer is seeing that okay this is empty and then if they try to you know do the things uh they try to modify the same buffer so maybe this is this is not a desired case now the similar problem can can happen with the consumer"
      }
    ],
    "start": 65
  },
  {
    "id": 66,
    "lecture": 22,
    "title": "Readers-writers and dining philosophers · Discover",
    "concept": "Readers-writers and dining philosophers model competing access to shared resources and reveal starvation and deadlock risks. Many readers may share access, but a writer needs exclusive access.",
    "teachingSteps": [
      "Start with the moving parts. Many readers may share access, but a writer needs exclusive access.",
      "Priority rules can starve readers or writers unless fairness is addressed.",
      "Dining philosophers show how individually reasonable resource requests can form a circular wait."
    ],
    "foundation": {
      "title": "Readers-writers and dining philosophers",
      "idea": "Readers-writers and dining philosophers model competing access to shared resources and reveal starvation and deadlock risks.",
      "terms": [
        "Reader: A process that observes shared data without changing it.",
        "Writer: A process that changes shared data and needs exclusive access.",
        "Circular wait: A cycle in which each participant waits for a resource held by the next."
      ],
      "example": "If every philosopher picks up one fork and waits for the other, the resource graph can form a cycle."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Readers-writers and dining philosophers · Discover: Five workers each hold one resource and wait for the next resource in a circle, which deadlock condition is visible directly?",
        "options": [
          "Circular wait",
          "Preemption of every resource",
          "No mutual exclusion"
        ],
        "answer": 0,
        "explanation": "Circular wait. Readers-writers and dining philosophers model competing access to shared resources and reveal starvation and deadlock risks."
      },
      {
        "type": "match",
        "prompt": "Readers-writers and dining philosophers · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Reader",
            "A process that observes shared data without changing it."
          ],
          [
            "Writer",
            "A process that changes shared data and needs exclusive access."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Readers-writers and dining philosophers · Discover: put these events in order.",
        "items": [
          "Identify which operations may share access",
          "Record each held and requested resource",
          "Look for cycles and decide a fair admission rule"
        ],
        "explanation": "Many readers may share access, but a writer needs exclusive access. Priority rules can starve readers or writers unless fairness is addressed. Dining philosophers show how individually reasonable resource requests can form a circular wait."
      },
      {
        "type": "number",
        "prompt": "Readers-writers and dining philosophers · Discover: A semaphore starts with 5 permits and 1 workers acquire one permit each. How many permits remain?",
        "answer": 4,
        "unit": "permits",
        "tolerance": 1e-8,
        "explanation": "5 − 1 = 4 permits remain."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "classic-sync",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 1762.81,
        "text": "miss this signal. Okay. So, so signal is not there. I mean, I'm not basically doing this signal. So writers will get stuck here. If any writer come, that will get stuck here. But what about the new readers that are coming? Yeah, they will get stuck here, right? They will get stuck. So all the readers will get stuck here. All the, all the readers will get stu"
      },
      {
        "time": 2356.53,
        "text": "if if you are somehow making sure that that this is this is the situation read countage one you have already grabbed wrt then then one of the reader will get into one of the reader will get stuck here all the readers will get stuck here and all the writers will get stuck at the weight wrt i mean that is definitely deadlock will be there if you if you come to"
      }
    ],
    "start": 66
  },
  {
    "id": 67,
    "lecture": 22,
    "title": "Readers-writers and dining philosophers · Explore",
    "concept": "Readers-writers and dining philosophers model competing access to shared resources and reveal starvation and deadlock risks. Priority rules can starve readers or writers unless fairness is addressed.",
    "teachingSteps": [
      "Watch one example unfold. Many readers may share access, but a writer needs exclusive access.",
      "Priority rules can starve readers or writers unless fairness is addressed.",
      "Dining philosophers show how individually reasonable resource requests can form a circular wait."
    ],
    "foundation": {
      "title": "Readers-writers and dining philosophers",
      "idea": "Readers-writers and dining philosophers model competing access to shared resources and reveal starvation and deadlock risks.",
      "terms": [
        "Reader: A process that observes shared data without changing it.",
        "Writer: A process that changes shared data and needs exclusive access.",
        "Circular wait: A cycle in which each participant waits for a resource held by the next."
      ],
      "example": "If every philosopher picks up one fork and waits for the other, the resource graph can form a cycle."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Readers-writers and dining philosophers · Explore: The trace has just completed: Identify which operations may share access. Which action should happen next?",
        "options": [
          "Record each held and requested resource",
          "Identify which operations may share access",
          "Look for cycles and decide a fair admission rule"
        ],
        "answer": 0,
        "explanation": "Record each held and requested resource. Priority rules can starve readers or writers unless fairness is addressed."
      },
      {
        "type": "match",
        "prompt": "Readers-writers and dining philosophers · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Writer",
            "A process that changes shared data and needs exclusive access."
          ],
          [
            "Circular wait",
            "A cycle in which each participant waits for a resource held by the next."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Readers-writers and dining philosophers · Explore: put the opening events in order.",
        "items": [
          "Identify which operations may share access",
          "Record each held and requested resource"
        ],
        "explanation": "Many readers may share access, but a writer needs exclusive access. Priority rules can starve readers or writers unless fairness is addressed. Dining philosophers show how individually reasonable resource requests can form a circular wait."
      },
      {
        "type": "number",
        "prompt": "Readers-writers and dining philosophers · Explore: A semaphore starts with 5 permits and 2 workers acquire one permit each. How many permits remain?",
        "answer": 3,
        "unit": "permits",
        "tolerance": 1e-8,
        "explanation": "5 − 2 = 3 permits remain."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "classic-sync",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 1762.81,
        "text": "miss this signal. Okay. So, so signal is not there. I mean, I'm not basically doing this signal. So writers will get stuck here. If any writer come, that will get stuck here. But what about the new readers that are coming? Yeah, they will get stuck here, right? They will get stuck. So all the readers will get stuck here. All the, all the readers will get stu"
      },
      {
        "time": 2356.53,
        "text": "if if you are somehow making sure that that this is this is the situation read countage one you have already grabbed wrt then then one of the reader will get into one of the reader will get stuck here all the readers will get stuck here and all the writers will get stuck at the weight wrt i mean that is definitely deadlock will be there if you if you come to"
      }
    ],
    "start": 67
  },
  {
    "id": 68,
    "lecture": 22,
    "title": "Readers-writers and dining philosophers · Apply",
    "concept": "Readers-writers and dining philosophers model competing access to shared resources and reveal starvation and deadlock risks. Dining philosophers show how individually reasonable resource requests can form a circular wait.",
    "teachingSteps": [
      "Use the idea in a new situation. Many readers may share access, but a writer needs exclusive access.",
      "Priority rules can starve readers or writers unless fairness is addressed.",
      "Dining philosophers show how individually reasonable resource requests can form a circular wait."
    ],
    "foundation": {
      "title": "Readers-writers and dining philosophers",
      "idea": "Readers-writers and dining philosophers model competing access to shared resources and reveal starvation and deadlock risks.",
      "terms": [
        "Reader: A process that observes shared data without changing it.",
        "Writer: A process that changes shared data and needs exclusive access.",
        "Circular wait: A cycle in which each participant waits for a resource held by the next."
      ],
      "example": "If every philosopher picks up one fork and waits for the other, the resource graph can form a cycle."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Readers-writers and dining philosophers · Apply: In this new example, what should happen immediately before: Look for cycles and decide a fair admission rule?",
        "options": [
          "Record each held and requested resource",
          "Look for cycles and decide a fair admission rule",
          "Identify which operations may share access"
        ],
        "answer": 0,
        "explanation": "Record each held and requested resource must happen first. Priority rules can starve readers or writers unless fairness is addressed."
      },
      {
        "type": "match",
        "prompt": "Readers-writers and dining philosophers · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Circular wait",
            "A cycle in which each participant waits for a resource held by the next."
          ],
          [
            "Reader",
            "A process that observes shared data without changing it."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Readers-writers and dining philosophers · Apply: put the final handoff in order.",
        "items": [
          "Record each held and requested resource",
          "Look for cycles and decide a fair admission rule"
        ],
        "explanation": "Many readers may share access, but a writer needs exclusive access. Priority rules can starve readers or writers unless fairness is addressed. Dining philosophers show how individually reasonable resource requests can form a circular wait."
      },
      {
        "type": "number",
        "prompt": "Readers-writers and dining philosophers · Apply: A semaphore starts with 5 permits and 3 workers acquire one permit each. How many permits remain?",
        "answer": 2,
        "unit": "permits",
        "tolerance": 1e-8,
        "explanation": "5 − 3 = 2 permits remain."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "classic-sync",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 1762.81,
        "text": "miss this signal. Okay. So, so signal is not there. I mean, I'm not basically doing this signal. So writers will get stuck here. If any writer come, that will get stuck here. But what about the new readers that are coming? Yeah, they will get stuck here, right? They will get stuck. So all the readers will get stuck here. All the, all the readers will get stu"
      },
      {
        "time": 2356.53,
        "text": "if if you are somehow making sure that that this is this is the situation read countage one you have already grabbed wrt then then one of the reader will get into one of the reader will get stuck here all the readers will get stuck here and all the writers will get stuck at the weight wrt i mean that is definitely deadlock will be there if you if you come to"
      }
    ],
    "start": 68
  },
  {
    "id": 69,
    "lecture": 23,
    "title": "Base-bound protection and segmentation · Discover",
    "concept": "A base and bound pair confines addresses to one process region; segmentation gives code, data and stack separate variable-sized regions. A logical address names a region and an offset inside that region.",
    "teachingSteps": [
      "Start with the moving parts. A logical address names a region and an offset inside that region.",
      "The hardware checks the offset before adding the segment base.",
      "Variable-sized segments match program structure but can leave scattered free gaps."
    ],
    "foundation": {
      "title": "Base-bound protection and segmentation",
      "idea": "A base and bound pair confines addresses to one process region; segmentation gives code, data and stack separate variable-sized regions.",
      "terms": [
        "Base: The physical start address of a region.",
        "Bound: The size or valid range used for an address check.",
        "Segment: A named variable-sized logical region such as code or stack."
      ],
      "example": "For base 4000 and length 600, logical offset 120 maps to 4120, while offset 700 is outside the bound."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Base-bound protection and segmentation · Discover: A segment starts at physical address 4000 and has length 600; offset 120 is requested, what physical address results after the bounds check?",
        "options": [
          "4120",
          "4600",
          "120"
        ],
        "answer": 0,
        "explanation": "4120. A base and bound pair confines addresses to one process region; segmentation gives code, data and stack separate variable-sized regions."
      },
      {
        "type": "match",
        "prompt": "Base-bound protection and segmentation · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Base",
            "The physical start address of a region."
          ],
          [
            "Bound",
            "The size or valid range used for an address check."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Base-bound protection and segmentation · Discover: put these events in order.",
        "items": [
          "Select the logical segment",
          "Check the offset against its bound",
          "Add the base to a valid offset"
        ],
        "explanation": "A logical address names a region and an offset inside that region. The hardware checks the offset before adding the segment base. Variable-sized segments match program structure but can leave scattered free gaps."
      },
      {
        "type": "number",
        "prompt": "Base-bound protection and segmentation · Discover: Page size is 512 bytes. A process accesses virtual byte address 1185. What is the offset within its page?",
        "answer": 161,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "1185 = 2 × 512 + 161; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "segment",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 2618.74,
        "text": "that what is happening with the base register that base register is not providing you the protection so that's why we have another register which is a bound register so basically i mean some people also call it limit register okay so two hardware registers that we need one is base another one is bound a process can only access the physical memory in this bas"
      },
      {
        "time": 4297.23,
        "text": "we will split each process logical address space into multiple segments and then what we will do what is the segment here variable size area of the memory so we will be we will be doing one thing that okay okay so basically it is a process i will i will say it is one segment i will say it is another segment let's suppose this is another segment like that oka"
      }
    ],
    "start": 69
  },
  {
    "id": 70,
    "lecture": 23,
    "title": "Base-bound protection and segmentation · Explore",
    "concept": "A base and bound pair confines addresses to one process region; segmentation gives code, data and stack separate variable-sized regions. The hardware checks the offset before adding the segment base.",
    "teachingSteps": [
      "Watch one example unfold. A logical address names a region and an offset inside that region.",
      "The hardware checks the offset before adding the segment base.",
      "Variable-sized segments match program structure but can leave scattered free gaps."
    ],
    "foundation": {
      "title": "Base-bound protection and segmentation",
      "idea": "A base and bound pair confines addresses to one process region; segmentation gives code, data and stack separate variable-sized regions.",
      "terms": [
        "Base: The physical start address of a region.",
        "Bound: The size or valid range used for an address check.",
        "Segment: A named variable-sized logical region such as code or stack."
      ],
      "example": "For base 4000 and length 600, logical offset 120 maps to 4120, while offset 700 is outside the bound."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Base-bound protection and segmentation · Explore: The trace has just completed: Select the logical segment. Which action should happen next?",
        "options": [
          "Check the offset against its bound",
          "Select the logical segment",
          "Add the base to a valid offset"
        ],
        "answer": 0,
        "explanation": "Check the offset against its bound. The hardware checks the offset before adding the segment base."
      },
      {
        "type": "match",
        "prompt": "Base-bound protection and segmentation · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Bound",
            "The size or valid range used for an address check."
          ],
          [
            "Segment",
            "A named variable-sized logical region such as code or stack."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Base-bound protection and segmentation · Explore: put the opening events in order.",
        "items": [
          "Select the logical segment",
          "Check the offset against its bound"
        ],
        "explanation": "A logical address names a region and an offset inside that region. The hardware checks the offset before adding the segment base. Variable-sized segments match program structure but can leave scattered free gaps."
      },
      {
        "type": "number",
        "prompt": "Base-bound protection and segmentation · Explore: Page size is 512 bytes. A process accesses virtual byte address 1708. What is the offset within its page?",
        "answer": 172,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "1708 = 3 × 512 + 172; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "segment",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 2618.74,
        "text": "that what is happening with the base register that base register is not providing you the protection so that's why we have another register which is a bound register so basically i mean some people also call it limit register okay so two hardware registers that we need one is base another one is bound a process can only access the physical memory in this bas"
      },
      {
        "time": 4297.23,
        "text": "we will split each process logical address space into multiple segments and then what we will do what is the segment here variable size area of the memory so we will be we will be doing one thing that okay okay so basically it is a process i will i will say it is one segment i will say it is another segment let's suppose this is another segment like that oka"
      }
    ],
    "start": 70
  },
  {
    "id": 71,
    "lecture": 23,
    "title": "Base-bound protection and segmentation · Apply",
    "concept": "A base and bound pair confines addresses to one process region; segmentation gives code, data and stack separate variable-sized regions. Variable-sized segments match program structure but can leave scattered free gaps.",
    "teachingSteps": [
      "Use the idea in a new situation. A logical address names a region and an offset inside that region.",
      "The hardware checks the offset before adding the segment base.",
      "Variable-sized segments match program structure but can leave scattered free gaps."
    ],
    "foundation": {
      "title": "Base-bound protection and segmentation",
      "idea": "A base and bound pair confines addresses to one process region; segmentation gives code, data and stack separate variable-sized regions.",
      "terms": [
        "Base: The physical start address of a region.",
        "Bound: The size or valid range used for an address check.",
        "Segment: A named variable-sized logical region such as code or stack."
      ],
      "example": "For base 4000 and length 600, logical offset 120 maps to 4120, while offset 700 is outside the bound."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Base-bound protection and segmentation · Apply: In this new example, what should happen immediately before: Add the base to a valid offset?",
        "options": [
          "Check the offset against its bound",
          "Add the base to a valid offset",
          "Select the logical segment"
        ],
        "answer": 0,
        "explanation": "Check the offset against its bound must happen first. The hardware checks the offset before adding the segment base."
      },
      {
        "type": "match",
        "prompt": "Base-bound protection and segmentation · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Segment",
            "A named variable-sized logical region such as code or stack."
          ],
          [
            "Base",
            "The physical start address of a region."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Base-bound protection and segmentation · Apply: put the final handoff in order.",
        "items": [
          "Check the offset against its bound",
          "Add the base to a valid offset"
        ],
        "explanation": "A logical address names a region and an offset inside that region. The hardware checks the offset before adding the segment base. Variable-sized segments match program structure but can leave scattered free gaps."
      },
      {
        "type": "number",
        "prompt": "Base-bound protection and segmentation · Apply: Page size is 512 bytes. A process accesses virtual byte address 2231. What is the offset within its page?",
        "answer": 183,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "2231 = 4 × 512 + 183; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "segment",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 2618.74,
        "text": "that what is happening with the base register that base register is not providing you the protection so that's why we have another register which is a bound register so basically i mean some people also call it limit register okay so two hardware registers that we need one is base another one is bound a process can only access the physical memory in this bas"
      },
      {
        "time": 4297.23,
        "text": "we will split each process logical address space into multiple segments and then what we will do what is the segment here variable size area of the memory so we will be we will be doing one thing that okay okay so basically it is a process i will i will say it is one segment i will say it is another segment let's suppose this is another segment like that oka"
      }
    ],
    "start": 71
  },
  {
    "id": 72,
    "lecture": 24,
    "title": "Segmentation and external fragmentation · Discover",
    "concept": "Variable-sized segments can leave free memory split into gaps; total free space may be large enough while no single gap is large enough. Contiguous allocation requires one available range for a segment.",
    "teachingSteps": [
      "Start with the moving parts. Contiguous allocation requires one available range for a segment.",
      "Add all holes to measure total free space, but check the largest individual hole for a request.",
      "Compaction can join holes by moving data, at a cost."
    ],
    "foundation": {
      "title": "Segmentation and external fragmentation",
      "idea": "Variable-sized segments can leave free memory split into gaps; total free space may be large enough while no single gap is large enough.",
      "terms": [
        "External fragmentation: Free memory exists in separated holes that cannot fit one requested block.",
        "Compaction: Moving allocated regions to combine free holes.",
        "First fit: Choose the first free hole large enough for a request."
      ],
      "example": "Free holes of 4 and 5 units total 9, but neither can satisfy a contiguous request for 7."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Segmentation and external fragmentation · Discover: Memory has free holes of 4 and 5 units and a request needs 7 contiguous units, can the request fit without compaction?",
        "options": [
          "No",
          "Yes, because 4+5 is greater than 7",
          "Yes, by splitting a segment automatically"
        ],
        "answer": 0,
        "explanation": "No. Variable-sized segments can leave free memory split into gaps; total free space may be large enough while no single gap is large enough."
      },
      {
        "type": "match",
        "prompt": "Segmentation and external fragmentation · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "External fragmentation",
            "Free memory exists in separated holes that cannot fit one requested block."
          ],
          [
            "Compaction",
            "Moving allocated regions to combine free holes."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Segmentation and external fragmentation · Discover: put these events in order.",
        "items": [
          "List each free hole separately",
          "Find a single hole large enough",
          "Compact or use another allocation strategy if none fits"
        ],
        "explanation": "Contiguous allocation requires one available range for a segment. Add all holes to measure total free space, but check the largest individual hole for a request. Compaction can join holes by moving data, at a cost."
      },
      {
        "type": "number",
        "prompt": "Segmentation and external fragmentation · Discover: Page size is 128 bytes. A process accesses virtual byte address 296. What is the offset within its page?",
        "answer": 40,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "296 = 2 × 128 + 40; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "segment",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 69.95,
        "text": "So we have seen segmentation and what was the other technique? Do you remember? Apart from segmentation, base and bound. Base and bound, right? Yes. So these are the two techniques we have seen. Now let's see some questions based on base and bound and segmentation. Segmentation is, by the way, nothing but multiple base and bound, right? So let's see this que"
      },
      {
        "time": 110.7,
        "text": "So maybe I can just bring this down a little bit. Oh, sorry. So they are saying that with one CPU, how many base registers are in total? So, sorry. So here you are using base and mount, right? I mean, even if you use segmentation, will this change? No, right? Because we are talking about the hardware register. So these registers are in CPU. So if you're talk"
      }
    ],
    "start": 72
  },
  {
    "id": 73,
    "lecture": 24,
    "title": "Segmentation and external fragmentation · Explore",
    "concept": "Variable-sized segments can leave free memory split into gaps; total free space may be large enough while no single gap is large enough. Add all holes to measure total free space, but check the largest individual hole for a request.",
    "teachingSteps": [
      "Watch one example unfold. Contiguous allocation requires one available range for a segment.",
      "Add all holes to measure total free space, but check the largest individual hole for a request.",
      "Compaction can join holes by moving data, at a cost."
    ],
    "foundation": {
      "title": "Segmentation and external fragmentation",
      "idea": "Variable-sized segments can leave free memory split into gaps; total free space may be large enough while no single gap is large enough.",
      "terms": [
        "External fragmentation: Free memory exists in separated holes that cannot fit one requested block.",
        "Compaction: Moving allocated regions to combine free holes.",
        "First fit: Choose the first free hole large enough for a request."
      ],
      "example": "Free holes of 4 and 5 units total 9, but neither can satisfy a contiguous request for 7."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Segmentation and external fragmentation · Explore: The trace has just completed: List each free hole separately. Which action should happen next?",
        "options": [
          "Find a single hole large enough",
          "List each free hole separately",
          "Compact or use another allocation strategy if none fits"
        ],
        "answer": 0,
        "explanation": "Find a single hole large enough. Add all holes to measure total free space, but check the largest individual hole for a request."
      },
      {
        "type": "match",
        "prompt": "Segmentation and external fragmentation · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Compaction",
            "Moving allocated regions to combine free holes."
          ],
          [
            "First fit",
            "Choose the first free hole large enough for a request."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Segmentation and external fragmentation · Explore: put the opening events in order.",
        "items": [
          "List each free hole separately",
          "Find a single hole large enough"
        ],
        "explanation": "Contiguous allocation requires one available range for a segment. Add all holes to measure total free space, but check the largest individual hole for a request. Compaction can join holes by moving data, at a cost."
      },
      {
        "type": "number",
        "prompt": "Segmentation and external fragmentation · Explore: Page size is 128 bytes. A process accesses virtual byte address 435. What is the offset within its page?",
        "answer": 51,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "435 = 3 × 128 + 51; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "segment",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 69.95,
        "text": "So we have seen segmentation and what was the other technique? Do you remember? Apart from segmentation, base and bound. Base and bound, right? Yes. So these are the two techniques we have seen. Now let's see some questions based on base and bound and segmentation. Segmentation is, by the way, nothing but multiple base and bound, right? So let's see this que"
      },
      {
        "time": 110.7,
        "text": "So maybe I can just bring this down a little bit. Oh, sorry. So they are saying that with one CPU, how many base registers are in total? So, sorry. So here you are using base and mount, right? I mean, even if you use segmentation, will this change? No, right? Because we are talking about the hardware register. So these registers are in CPU. So if you're talk"
      }
    ],
    "start": 73
  },
  {
    "id": 74,
    "lecture": 24,
    "title": "Segmentation and external fragmentation · Apply",
    "concept": "Variable-sized segments can leave free memory split into gaps; total free space may be large enough while no single gap is large enough. Compaction can join holes by moving data, at a cost.",
    "teachingSteps": [
      "Use the idea in a new situation. Contiguous allocation requires one available range for a segment.",
      "Add all holes to measure total free space, but check the largest individual hole for a request.",
      "Compaction can join holes by moving data, at a cost."
    ],
    "foundation": {
      "title": "Segmentation and external fragmentation",
      "idea": "Variable-sized segments can leave free memory split into gaps; total free space may be large enough while no single gap is large enough.",
      "terms": [
        "External fragmentation: Free memory exists in separated holes that cannot fit one requested block.",
        "Compaction: Moving allocated regions to combine free holes.",
        "First fit: Choose the first free hole large enough for a request."
      ],
      "example": "Free holes of 4 and 5 units total 9, but neither can satisfy a contiguous request for 7."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Segmentation and external fragmentation · Apply: In this new example, what should happen immediately before: Compact or use another allocation strategy if none fits?",
        "options": [
          "Find a single hole large enough",
          "Compact or use another allocation strategy if none fits",
          "List each free hole separately"
        ],
        "answer": 0,
        "explanation": "Find a single hole large enough must happen first. Add all holes to measure total free space, but check the largest individual hole for a request."
      },
      {
        "type": "match",
        "prompt": "Segmentation and external fragmentation · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "First fit",
            "Choose the first free hole large enough for a request."
          ],
          [
            "External fragmentation",
            "Free memory exists in separated holes that cannot fit one requested block."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Segmentation and external fragmentation · Apply: put the final handoff in order.",
        "items": [
          "Find a single hole large enough",
          "Compact or use another allocation strategy if none fits"
        ],
        "explanation": "Contiguous allocation requires one available range for a segment. Add all holes to measure total free space, but check the largest individual hole for a request. Compaction can join holes by moving data, at a cost."
      },
      {
        "type": "number",
        "prompt": "Segmentation and external fragmentation · Apply: Page size is 128 bytes. A process accesses virtual byte address 574. What is the offset within its page?",
        "answer": 62,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "574 = 4 × 128 + 62; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "segment",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 69.95,
        "text": "So we have seen segmentation and what was the other technique? Do you remember? Apart from segmentation, base and bound. Base and bound, right? Yes. So these are the two techniques we have seen. Now let's see some questions based on base and bound and segmentation. Segmentation is, by the way, nothing but multiple base and bound, right? So let's see this que"
      },
      {
        "time": 110.7,
        "text": "So maybe I can just bring this down a little bit. Oh, sorry. So they are saying that with one CPU, how many base registers are in total? So, sorry. So here you are using base and mount, right? I mean, even if you use segmentation, will this change? No, right? Because we are talking about the hardware register. So these registers are in CPU. So if you're talk"
      }
    ],
    "start": 74
  },
  {
    "id": 75,
    "lecture": 25,
    "title": "Paging and page tables · Discover",
    "concept": "Paging divides virtual memory into fixed-size pages and physical memory into equal-size frames; a page table maps one to the other. Fixed-size pages can map into any free physical frame.",
    "teachingSteps": [
      "Start with the moving parts. Fixed-size pages can map into any free physical frame.",
      "The offset identifies a byte inside a page and is preserved by translation.",
      "A missing or invalid mapping can cause a fault instead of producing a physical address."
    ],
    "foundation": {
      "title": "Paging and page tables",
      "idea": "Paging divides virtual memory into fixed-size pages and physical memory into equal-size frames; a page table maps one to the other.",
      "terms": [
        "Page: A fixed-size block of a process virtual address space.",
        "Frame: A same-sized block of physical memory.",
        "Page table: A mapping from virtual page numbers to physical frame numbers."
      ],
      "example": "With 256-byte pages, address 600 is page 2 with offset 88 because 600 = 2×256 + 88."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Paging and page tables · Discover: Page size is 256 bytes and a process requests virtual byte address 600, what is its offset within the page?",
        "options": [
          "88 bytes",
          "2 bytes",
          "256 bytes"
        ],
        "answer": 0,
        "explanation": "88 bytes. Paging divides virtual memory into fixed-size pages and physical memory into equal-size frames; a page table maps one to the other."
      },
      {
        "type": "match",
        "prompt": "Paging and page tables · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Page",
            "A fixed-size block of a process virtual address space."
          ],
          [
            "Frame",
            "A same-sized block of physical memory."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Paging and page tables · Discover: put these events in order.",
        "items": [
          "Divide the virtual address into page number and offset",
          "Look up the page number",
          "Join the mapped frame number with the unchanged offset"
        ],
        "explanation": "Fixed-size pages can map into any free physical frame. The offset identifies a byte inside a page and is preserved by translation. A missing or invalid mapping can cause a fault instead of producing a physical address."
      },
      {
        "type": "number",
        "prompt": "Paging and page tables · Discover: Page size is 256 bytes. A process accesses virtual byte address 687. What is the offset within its page?",
        "answer": 175,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "687 = 2 × 256 + 175; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "paging",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 2650.2,
        "text": "So it is not really a good I mean not really a new idea which means that paging we have already seen in our books So the book that you have any book or any copy that is basically you have the pages there, right? So what you have you have the fixed size you have you have the fixed size pages there and Like I mean let's suppose this is the book that each page "
      },
      {
        "time": 2703.12,
        "text": "Right. So that's what they are saying that it is not a new idea. It is what we have already been using. There's a table. Okay. So you have the index table index index. So here also we will be having some page table. So let's just see this page. I mean, this is a more modern technique and almost every say every operating system is using paging currently. Okay"
      }
    ],
    "start": 75
  },
  {
    "id": 76,
    "lecture": 25,
    "title": "Paging and page tables · Explore",
    "concept": "Paging divides virtual memory into fixed-size pages and physical memory into equal-size frames; a page table maps one to the other. The offset identifies a byte inside a page and is preserved by translation.",
    "teachingSteps": [
      "Watch one example unfold. Fixed-size pages can map into any free physical frame.",
      "The offset identifies a byte inside a page and is preserved by translation.",
      "A missing or invalid mapping can cause a fault instead of producing a physical address."
    ],
    "foundation": {
      "title": "Paging and page tables",
      "idea": "Paging divides virtual memory into fixed-size pages and physical memory into equal-size frames; a page table maps one to the other.",
      "terms": [
        "Page: A fixed-size block of a process virtual address space.",
        "Frame: A same-sized block of physical memory.",
        "Page table: A mapping from virtual page numbers to physical frame numbers."
      ],
      "example": "With 256-byte pages, address 600 is page 2 with offset 88 because 600 = 2×256 + 88."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Paging and page tables · Explore: The trace has just completed: Divide the virtual address into page number and offset. Which action should happen next?",
        "options": [
          "Look up the page number",
          "Divide the virtual address into page number and offset",
          "Join the mapped frame number with the unchanged offset"
        ],
        "answer": 0,
        "explanation": "Look up the page number. The offset identifies a byte inside a page and is preserved by translation."
      },
      {
        "type": "match",
        "prompt": "Paging and page tables · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Frame",
            "A same-sized block of physical memory."
          ],
          [
            "Page table",
            "A mapping from virtual page numbers to physical frame numbers."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Paging and page tables · Explore: put the opening events in order.",
        "items": [
          "Divide the virtual address into page number and offset",
          "Look up the page number"
        ],
        "explanation": "Fixed-size pages can map into any free physical frame. The offset identifies a byte inside a page and is preserved by translation. A missing or invalid mapping can cause a fault instead of producing a physical address."
      },
      {
        "type": "number",
        "prompt": "Paging and page tables · Explore: Page size is 256 bytes. A process accesses virtual byte address 954. What is the offset within its page?",
        "answer": 186,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "954 = 3 × 256 + 186; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "paging",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 2650.2,
        "text": "So it is not really a good I mean not really a new idea which means that paging we have already seen in our books So the book that you have any book or any copy that is basically you have the pages there, right? So what you have you have the fixed size you have you have the fixed size pages there and Like I mean let's suppose this is the book that each page "
      },
      {
        "time": 2703.12,
        "text": "Right. So that's what they are saying that it is not a new idea. It is what we have already been using. There's a table. Okay. So you have the index table index index. So here also we will be having some page table. So let's just see this page. I mean, this is a more modern technique and almost every say every operating system is using paging currently. Okay"
      }
    ],
    "start": 76
  },
  {
    "id": 77,
    "lecture": 25,
    "title": "Paging and page tables · Apply",
    "concept": "Paging divides virtual memory into fixed-size pages and physical memory into equal-size frames; a page table maps one to the other. A missing or invalid mapping can cause a fault instead of producing a physical address.",
    "teachingSteps": [
      "Use the idea in a new situation. Fixed-size pages can map into any free physical frame.",
      "The offset identifies a byte inside a page and is preserved by translation.",
      "A missing or invalid mapping can cause a fault instead of producing a physical address."
    ],
    "foundation": {
      "title": "Paging and page tables",
      "idea": "Paging divides virtual memory into fixed-size pages and physical memory into equal-size frames; a page table maps one to the other.",
      "terms": [
        "Page: A fixed-size block of a process virtual address space.",
        "Frame: A same-sized block of physical memory.",
        "Page table: A mapping from virtual page numbers to physical frame numbers."
      ],
      "example": "With 256-byte pages, address 600 is page 2 with offset 88 because 600 = 2×256 + 88."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Paging and page tables · Apply: In this new example, what should happen immediately before: Join the mapped frame number with the unchanged offset?",
        "options": [
          "Look up the page number",
          "Join the mapped frame number with the unchanged offset",
          "Divide the virtual address into page number and offset"
        ],
        "answer": 0,
        "explanation": "Look up the page number must happen first. The offset identifies a byte inside a page and is preserved by translation."
      },
      {
        "type": "match",
        "prompt": "Paging and page tables · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Page table",
            "A mapping from virtual page numbers to physical frame numbers."
          ],
          [
            "Page",
            "A fixed-size block of a process virtual address space."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Paging and page tables · Apply: put the final handoff in order.",
        "items": [
          "Look up the page number",
          "Join the mapped frame number with the unchanged offset"
        ],
        "explanation": "Fixed-size pages can map into any free physical frame. The offset identifies a byte inside a page and is preserved by translation. A missing or invalid mapping can cause a fault instead of producing a physical address."
      },
      {
        "type": "number",
        "prompt": "Paging and page tables · Apply: Page size is 256 bytes. A process accesses virtual byte address 1221. What is the offset within its page?",
        "answer": 197,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "1221 = 4 × 256 + 197; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "paging",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 2650.2,
        "text": "So it is not really a good I mean not really a new idea which means that paging we have already seen in our books So the book that you have any book or any copy that is basically you have the pages there, right? So what you have you have the fixed size you have you have the fixed size pages there and Like I mean let's suppose this is the book that each page "
      },
      {
        "time": 2703.12,
        "text": "Right. So that's what they are saying that it is not a new idea. It is what we have already been using. There's a table. Okay. So you have the index table index index. So here also we will be having some page table. So let's just see this page. I mean, this is a more modern technique and almost every say every operating system is using paging currently. Okay"
      }
    ],
    "start": 77
  },
  {
    "id": 78,
    "lecture": 26,
    "title": "Single-level page-table calculations · Discover",
    "concept": "A flat page table stores one entry for each virtual page, so address width and page size determine its entry count. A page size of 2 to the k bytes needs k offset bits.",
    "teachingSteps": [
      "Start with the moving parts. A page size of 2 to the k bytes needs k offset bits.",
      "The remaining virtual-address bits name the page.",
      "A flat table for all virtual pages can be large even when only a small part of the address space is used."
    ],
    "foundation": {
      "title": "Single-level page-table calculations",
      "idea": "A flat page table stores one entry for each virtual page, so address width and page size determine its entry count.",
      "terms": [
        "Virtual address: An address generated by a process.",
        "Offset bits: Low address bits selecting a byte within a page.",
        "Page-table entry: The mapping and status information for one virtual page."
      ],
      "example": "A 16-bit address with 256-byte pages uses 8 offset bits and 8 page-number bits."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Single-level page-table calculations · Discover: A 16-bit virtual address uses 256-byte pages, how many page-number bits remain?",
        "options": [
          "8 bits",
          "16 bits",
          "4 bits"
        ],
        "answer": 0,
        "explanation": "8 bits. A flat page table stores one entry for each virtual page, so address width and page size determine its entry count."
      },
      {
        "type": "match",
        "prompt": "Single-level page-table calculations · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Virtual address",
            "An address generated by a process."
          ],
          [
            "Offset bits",
            "Low address bits selecting a byte within a page."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Single-level page-table calculations · Discover: put these events in order.",
        "items": [
          "Count total virtual-address bits",
          "Use page size to determine offset bits",
          "Subtract offset bits to get page-number bits"
        ],
        "explanation": "A page size of 2 to the k bytes needs k offset bits. The remaining virtual-address bits name the page. A flat table for all virtual pages can be large even when only a small part of the address space is used."
      },
      {
        "type": "number",
        "prompt": "Single-level page-table calculations · Discover: Page size is 512 bytes. A process accesses virtual byte address 1206. What is the offset within its page?",
        "answer": 182,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "1206 = 2 × 512 + 182; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "paging",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 1583.8,
        "text": "So, let's just see how, how does the address translation is actually happening, right? So now let's just see how does address, I mean, we have seen it, we have already seen it, this is how the address translation is happening. But let's just see according to the circuit, okay, in the hardware. So address translation hardware, hardware means what we call MMU,"
      },
      {
        "time": 6216.62,
        "text": "something like this and because of that this will be here maybe something like this and because of this this will be here so maybe we will say that okay from here I will go to go to this from here I will go to this and from here I will go to this and so on maybe we will be doing something right so basically let me first tell you that what this diagram is rep"
      }
    ],
    "start": 78
  },
  {
    "id": 79,
    "lecture": 26,
    "title": "Single-level page-table calculations · Explore",
    "concept": "A flat page table stores one entry for each virtual page, so address width and page size determine its entry count. The remaining virtual-address bits name the page.",
    "teachingSteps": [
      "Watch one example unfold. A page size of 2 to the k bytes needs k offset bits.",
      "The remaining virtual-address bits name the page.",
      "A flat table for all virtual pages can be large even when only a small part of the address space is used."
    ],
    "foundation": {
      "title": "Single-level page-table calculations",
      "idea": "A flat page table stores one entry for each virtual page, so address width and page size determine its entry count.",
      "terms": [
        "Virtual address: An address generated by a process.",
        "Offset bits: Low address bits selecting a byte within a page.",
        "Page-table entry: The mapping and status information for one virtual page."
      ],
      "example": "A 16-bit address with 256-byte pages uses 8 offset bits and 8 page-number bits."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Single-level page-table calculations · Explore: The trace has just completed: Count total virtual-address bits. Which action should happen next?",
        "options": [
          "Use page size to determine offset bits",
          "Count total virtual-address bits",
          "Subtract offset bits to get page-number bits"
        ],
        "answer": 0,
        "explanation": "Use page size to determine offset bits. The remaining virtual-address bits name the page."
      },
      {
        "type": "match",
        "prompt": "Single-level page-table calculations · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Offset bits",
            "Low address bits selecting a byte within a page."
          ],
          [
            "Page-table entry",
            "The mapping and status information for one virtual page."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Single-level page-table calculations · Explore: put the opening events in order.",
        "items": [
          "Count total virtual-address bits",
          "Use page size to determine offset bits"
        ],
        "explanation": "A page size of 2 to the k bytes needs k offset bits. The remaining virtual-address bits name the page. A flat table for all virtual pages can be large even when only a small part of the address space is used."
      },
      {
        "type": "number",
        "prompt": "Single-level page-table calculations · Explore: Page size is 512 bytes. A process accesses virtual byte address 1729. What is the offset within its page?",
        "answer": 193,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "1729 = 3 × 512 + 193; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "paging",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 1583.8,
        "text": "So, let's just see how, how does the address translation is actually happening, right? So now let's just see how does address, I mean, we have seen it, we have already seen it, this is how the address translation is happening. But let's just see according to the circuit, okay, in the hardware. So address translation hardware, hardware means what we call MMU,"
      },
      {
        "time": 6216.62,
        "text": "something like this and because of that this will be here maybe something like this and because of this this will be here so maybe we will say that okay from here I will go to go to this from here I will go to this and from here I will go to this and so on maybe we will be doing something right so basically let me first tell you that what this diagram is rep"
      }
    ],
    "start": 79
  },
  {
    "id": 80,
    "lecture": 26,
    "title": "Single-level page-table calculations · Apply",
    "concept": "A flat page table stores one entry for each virtual page, so address width and page size determine its entry count. A flat table for all virtual pages can be large even when only a small part of the address space is used.",
    "teachingSteps": [
      "Use the idea in a new situation. A page size of 2 to the k bytes needs k offset bits.",
      "The remaining virtual-address bits name the page.",
      "A flat table for all virtual pages can be large even when only a small part of the address space is used."
    ],
    "foundation": {
      "title": "Single-level page-table calculations",
      "idea": "A flat page table stores one entry for each virtual page, so address width and page size determine its entry count.",
      "terms": [
        "Virtual address: An address generated by a process.",
        "Offset bits: Low address bits selecting a byte within a page.",
        "Page-table entry: The mapping and status information for one virtual page."
      ],
      "example": "A 16-bit address with 256-byte pages uses 8 offset bits and 8 page-number bits."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Single-level page-table calculations · Apply: In this new example, what should happen immediately before: Subtract offset bits to get page-number bits?",
        "options": [
          "Use page size to determine offset bits",
          "Subtract offset bits to get page-number bits",
          "Count total virtual-address bits"
        ],
        "answer": 0,
        "explanation": "Use page size to determine offset bits must happen first. The remaining virtual-address bits name the page."
      },
      {
        "type": "match",
        "prompt": "Single-level page-table calculations · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Page-table entry",
            "The mapping and status information for one virtual page."
          ],
          [
            "Virtual address",
            "An address generated by a process."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Single-level page-table calculations · Apply: put the final handoff in order.",
        "items": [
          "Use page size to determine offset bits",
          "Subtract offset bits to get page-number bits"
        ],
        "explanation": "A page size of 2 to the k bytes needs k offset bits. The remaining virtual-address bits name the page. A flat table for all virtual pages can be large even when only a small part of the address space is used."
      },
      {
        "type": "number",
        "prompt": "Single-level page-table calculations · Apply: Page size is 512 bytes. A process accesses virtual byte address 2252. What is the offset within its page?",
        "answer": 204,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "2252 = 4 × 512 + 204; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "paging",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 1583.8,
        "text": "So, let's just see how, how does the address translation is actually happening, right? So now let's just see how does address, I mean, we have seen it, we have already seen it, this is how the address translation is happening. But let's just see according to the circuit, okay, in the hardware. So address translation hardware, hardware means what we call MMU,"
      },
      {
        "time": 6216.62,
        "text": "something like this and because of that this will be here maybe something like this and because of this this will be here so maybe we will say that okay from here I will go to go to this from here I will go to this and from here I will go to this and so on maybe we will be doing something right so basically let me first tell you that what this diagram is rep"
      }
    ],
    "start": 80
  },
  {
    "id": 81,
    "lecture": 27,
    "title": "Multilevel page tables · Discover",
    "concept": "A multilevel page table splits virtual page-number bits into indexes so unused branches need not allocate lower-level tables. Each index selects one entry at its level.",
    "teachingSteps": [
      "Start with the moving parts. Each index selects one entry at its level.",
      "A valid upper-level entry points to another table, not directly to the data page.",
      "Sparse regions can avoid allocating entire lower-level tables."
    ],
    "foundation": {
      "title": "Multilevel page tables",
      "idea": "A multilevel page table splits virtual page-number bits into indexes so unused branches need not allocate lower-level tables.",
      "terms": [
        "Page-directory index: The first group of page-number bits used to choose a table.",
        "Page-table index: A later group of bits used within that table.",
        "Sparse address space: A large range where only some pages are mapped."
      ],
      "example": "A two-level walk first selects a page-directory entry, then a page-table entry, then uses the offset in the frame."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Multilevel page tables · Discover: A two-level table has 4 directory choices and 8 entries per selected table, how many leaf entries exist if all second-level tables are present?",
        "options": [
          "32",
          "12",
          "4"
        ],
        "answer": 0,
        "explanation": "32. A multilevel page table splits virtual page-number bits into indexes so unused branches need not allocate lower-level tables."
      },
      {
        "type": "match",
        "prompt": "Multilevel page tables · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Page-directory index",
            "The first group of page-number bits used to choose a table."
          ],
          [
            "Page-table index",
            "A later group of bits used within that table."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Multilevel page tables · Discover: put these events in order.",
        "items": [
          "Split page-number bits into indexes",
          "Use the first index to find a lower-level table",
          "Use the next index to find the frame mapping"
        ],
        "explanation": "Each index selects one entry at its level. A valid upper-level entry points to another table, not directly to the data page. Sparse regions can avoid allocating entire lower-level tables."
      },
      {
        "type": "number",
        "prompt": "Multilevel page tables · Discover: Page size is 128 bytes. A process accesses virtual byte address 317. What is the offset within its page?",
        "answer": 61,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "317 = 2 × 128 + 61; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "multilevel-paging",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 1009.37,
        "text": "No, right? This is always one. Now, let's just see the number of chunks here. Can anyone tell me the number of chunks here? No, in these chunks, one entry may be, it depends on, these are the actual page tables, right? So, page table entry may be greater than one byte, may be greater than one byte. Okay, it may be containing valid bit and some other read wri"
      },
      {
        "time": 2216.94,
        "text": "And how we found out physical letters? Using the page tables, right? Using the page table. It obviously depends on this number, right? Can you say it doesn't depend on this number? No, obviously it has to depend on this number, right? Given just this logical address, given just this logical address, nothing else, nothing else. Can you give me the physical le"
      }
    ],
    "start": 81
  },
  {
    "id": 82,
    "lecture": 27,
    "title": "Multilevel page tables · Explore",
    "concept": "A multilevel page table splits virtual page-number bits into indexes so unused branches need not allocate lower-level tables. A valid upper-level entry points to another table, not directly to the data page.",
    "teachingSteps": [
      "Watch one example unfold. Each index selects one entry at its level.",
      "A valid upper-level entry points to another table, not directly to the data page.",
      "Sparse regions can avoid allocating entire lower-level tables."
    ],
    "foundation": {
      "title": "Multilevel page tables",
      "idea": "A multilevel page table splits virtual page-number bits into indexes so unused branches need not allocate lower-level tables.",
      "terms": [
        "Page-directory index: The first group of page-number bits used to choose a table.",
        "Page-table index: A later group of bits used within that table.",
        "Sparse address space: A large range where only some pages are mapped."
      ],
      "example": "A two-level walk first selects a page-directory entry, then a page-table entry, then uses the offset in the frame."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Multilevel page tables · Explore: The trace has just completed: Split page-number bits into indexes. Which action should happen next?",
        "options": [
          "Use the first index to find a lower-level table",
          "Split page-number bits into indexes",
          "Use the next index to find the frame mapping"
        ],
        "answer": 0,
        "explanation": "Use the first index to find a lower-level table. A valid upper-level entry points to another table, not directly to the data page."
      },
      {
        "type": "match",
        "prompt": "Multilevel page tables · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Page-table index",
            "A later group of bits used within that table."
          ],
          [
            "Sparse address space",
            "A large range where only some pages are mapped."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Multilevel page tables · Explore: put the opening events in order.",
        "items": [
          "Split page-number bits into indexes",
          "Use the first index to find a lower-level table"
        ],
        "explanation": "Each index selects one entry at its level. A valid upper-level entry points to another table, not directly to the data page. Sparse regions can avoid allocating entire lower-level tables."
      },
      {
        "type": "number",
        "prompt": "Multilevel page tables · Explore: Page size is 128 bytes. A process accesses virtual byte address 456. What is the offset within its page?",
        "answer": 72,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "456 = 3 × 128 + 72; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "multilevel-paging",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 1009.37,
        "text": "No, right? This is always one. Now, let's just see the number of chunks here. Can anyone tell me the number of chunks here? No, in these chunks, one entry may be, it depends on, these are the actual page tables, right? So, page table entry may be greater than one byte, may be greater than one byte. Okay, it may be containing valid bit and some other read wri"
      },
      {
        "time": 2216.94,
        "text": "And how we found out physical letters? Using the page tables, right? Using the page table. It obviously depends on this number, right? Can you say it doesn't depend on this number? No, obviously it has to depend on this number, right? Given just this logical address, given just this logical address, nothing else, nothing else. Can you give me the physical le"
      }
    ],
    "start": 82
  },
  {
    "id": 83,
    "lecture": 27,
    "title": "Multilevel page tables · Apply",
    "concept": "A multilevel page table splits virtual page-number bits into indexes so unused branches need not allocate lower-level tables. Sparse regions can avoid allocating entire lower-level tables.",
    "teachingSteps": [
      "Use the idea in a new situation. Each index selects one entry at its level.",
      "A valid upper-level entry points to another table, not directly to the data page.",
      "Sparse regions can avoid allocating entire lower-level tables."
    ],
    "foundation": {
      "title": "Multilevel page tables",
      "idea": "A multilevel page table splits virtual page-number bits into indexes so unused branches need not allocate lower-level tables.",
      "terms": [
        "Page-directory index: The first group of page-number bits used to choose a table.",
        "Page-table index: A later group of bits used within that table.",
        "Sparse address space: A large range where only some pages are mapped."
      ],
      "example": "A two-level walk first selects a page-directory entry, then a page-table entry, then uses the offset in the frame."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Multilevel page tables · Apply: In this new example, what should happen immediately before: Use the next index to find the frame mapping?",
        "options": [
          "Use the first index to find a lower-level table",
          "Use the next index to find the frame mapping",
          "Split page-number bits into indexes"
        ],
        "answer": 0,
        "explanation": "Use the first index to find a lower-level table must happen first. A valid upper-level entry points to another table, not directly to the data page."
      },
      {
        "type": "match",
        "prompt": "Multilevel page tables · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Sparse address space",
            "A large range where only some pages are mapped."
          ],
          [
            "Page-directory index",
            "The first group of page-number bits used to choose a table."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Multilevel page tables · Apply: put the final handoff in order.",
        "items": [
          "Use the first index to find a lower-level table",
          "Use the next index to find the frame mapping"
        ],
        "explanation": "Each index selects one entry at its level. A valid upper-level entry points to another table, not directly to the data page. Sparse regions can avoid allocating entire lower-level tables."
      },
      {
        "type": "number",
        "prompt": "Multilevel page tables · Apply: Page size is 128 bytes. A process accesses virtual byte address 595. What is the offset within its page?",
        "answer": 83,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "595 = 4 × 128 + 83; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "multilevel-paging",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 1009.37,
        "text": "No, right? This is always one. Now, let's just see the number of chunks here. Can anyone tell me the number of chunks here? No, in these chunks, one entry may be, it depends on, these are the actual page tables, right? So, page table entry may be greater than one byte, may be greater than one byte. Okay, it may be containing valid bit and some other read wri"
      },
      {
        "time": 2216.94,
        "text": "And how we found out physical letters? Using the page tables, right? Using the page table. It obviously depends on this number, right? Can you say it doesn't depend on this number? No, obviously it has to depend on this number, right? Given just this logical address, given just this logical address, nothing else, nothing else. Can you give me the physical le"
      }
    ],
    "start": 83
  },
  {
    "id": 84,
    "lecture": 28,
    "title": "Walking multilevel translations · Discover",
    "concept": "A multilevel translation follows each page-table index in order and appends the original offset to the final frame number. Each level requires following an entry stored in memory.",
    "teachingSteps": [
      "Start with the moving parts. Each level requires following an entry stored in memory.",
      "After the last level, combine the frame number with the offset.",
      "Count page-table reads and the final data access separately."
    ],
    "foundation": {
      "title": "Walking multilevel translations",
      "idea": "A multilevel translation follows each page-table index in order and appends the original offset to the final frame number.",
      "terms": [
        "Page walk: The sequence of memory reads needed to follow page tables.",
        "Valid entry: A mapping or table pointer that may be followed.",
        "Physical frame: The final physical-memory block selected by translation."
      ],
      "example": "A directory entry points to a table; its selected entry points to frame 9, so the final address uses frame 9 and the original offset."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Walking multilevel translations · Discover: A two-level translation performs two table reads followed by one data read, how many memory reads occur without a translation cache?",
        "options": [
          "3",
          "2",
          "1"
        ],
        "answer": 0,
        "explanation": "3. A multilevel translation follows each page-table index in order and appends the original offset to the final frame number."
      },
      {
        "type": "match",
        "prompt": "Walking multilevel translations · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Page walk",
            "The sequence of memory reads needed to follow page tables."
          ],
          [
            "Valid entry",
            "A mapping or table pointer that may be followed."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Walking multilevel translations · Discover: put these events in order.",
        "items": [
          "Read the directory entry",
          "Read the selected page-table entry",
          "Read data from the translated frame"
        ],
        "explanation": "Each level requires following an entry stored in memory. After the last level, combine the frame number with the offset. Count page-table reads and the final data access separately."
      },
      {
        "type": "number",
        "prompt": "Walking multilevel translations · Discover: Page size is 256 bytes. A process accesses virtual byte address 708. What is the offset within its page?",
        "answer": 196,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "708 = 2 × 256 + 196; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "multilevel-paging",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 4912.37,
        "text": "or time calculation, how much time will it take? Time calculation. You just skip those PYQs for now, which means that TLB, they will be including TLB and memory access time is this, you just skip all of those PYQs, just see the PYQs, just purely related to multilevel paging. So basically, I can say, at this point in time, you can solve all the PYQs, which ar"
      }
    ],
    "start": 84
  },
  {
    "id": 85,
    "lecture": 28,
    "title": "Walking multilevel translations · Explore",
    "concept": "A multilevel translation follows each page-table index in order and appends the original offset to the final frame number. After the last level, combine the frame number with the offset.",
    "teachingSteps": [
      "Watch one example unfold. Each level requires following an entry stored in memory.",
      "After the last level, combine the frame number with the offset.",
      "Count page-table reads and the final data access separately."
    ],
    "foundation": {
      "title": "Walking multilevel translations",
      "idea": "A multilevel translation follows each page-table index in order and appends the original offset to the final frame number.",
      "terms": [
        "Page walk: The sequence of memory reads needed to follow page tables.",
        "Valid entry: A mapping or table pointer that may be followed.",
        "Physical frame: The final physical-memory block selected by translation."
      ],
      "example": "A directory entry points to a table; its selected entry points to frame 9, so the final address uses frame 9 and the original offset."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Walking multilevel translations · Explore: The trace has just completed: Read the directory entry. Which action should happen next?",
        "options": [
          "Read the selected page-table entry",
          "Read the directory entry",
          "Read data from the translated frame"
        ],
        "answer": 0,
        "explanation": "Read the selected page-table entry. After the last level, combine the frame number with the offset."
      },
      {
        "type": "match",
        "prompt": "Walking multilevel translations · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Valid entry",
            "A mapping or table pointer that may be followed."
          ],
          [
            "Physical frame",
            "The final physical-memory block selected by translation."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Walking multilevel translations · Explore: put the opening events in order.",
        "items": [
          "Read the directory entry",
          "Read the selected page-table entry"
        ],
        "explanation": "Each level requires following an entry stored in memory. After the last level, combine the frame number with the offset. Count page-table reads and the final data access separately."
      },
      {
        "type": "number",
        "prompt": "Walking multilevel translations · Explore: Page size is 256 bytes. A process accesses virtual byte address 975. What is the offset within its page?",
        "answer": 207,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "975 = 3 × 256 + 207; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "multilevel-paging",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 4912.37,
        "text": "or time calculation, how much time will it take? Time calculation. You just skip those PYQs for now, which means that TLB, they will be including TLB and memory access time is this, you just skip all of those PYQs, just see the PYQs, just purely related to multilevel paging. So basically, I can say, at this point in time, you can solve all the PYQs, which ar"
      }
    ],
    "start": 85
  },
  {
    "id": 86,
    "lecture": 28,
    "title": "Walking multilevel translations · Apply",
    "concept": "A multilevel translation follows each page-table index in order and appends the original offset to the final frame number. Count page-table reads and the final data access separately.",
    "teachingSteps": [
      "Use the idea in a new situation. Each level requires following an entry stored in memory.",
      "After the last level, combine the frame number with the offset.",
      "Count page-table reads and the final data access separately."
    ],
    "foundation": {
      "title": "Walking multilevel translations",
      "idea": "A multilevel translation follows each page-table index in order and appends the original offset to the final frame number.",
      "terms": [
        "Page walk: The sequence of memory reads needed to follow page tables.",
        "Valid entry: A mapping or table pointer that may be followed.",
        "Physical frame: The final physical-memory block selected by translation."
      ],
      "example": "A directory entry points to a table; its selected entry points to frame 9, so the final address uses frame 9 and the original offset."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Walking multilevel translations · Apply: In this new example, what should happen immediately before: Read data from the translated frame?",
        "options": [
          "Read the selected page-table entry",
          "Read data from the translated frame",
          "Read the directory entry"
        ],
        "answer": 0,
        "explanation": "Read the selected page-table entry must happen first. After the last level, combine the frame number with the offset."
      },
      {
        "type": "match",
        "prompt": "Walking multilevel translations · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Physical frame",
            "The final physical-memory block selected by translation."
          ],
          [
            "Page walk",
            "The sequence of memory reads needed to follow page tables."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Walking multilevel translations · Apply: put the final handoff in order.",
        "items": [
          "Read the selected page-table entry",
          "Read data from the translated frame"
        ],
        "explanation": "Each level requires following an entry stored in memory. After the last level, combine the frame number with the offset. Count page-table reads and the final data access separately."
      },
      {
        "type": "number",
        "prompt": "Walking multilevel translations · Apply: Page size is 256 bytes. A process accesses virtual byte address 1242. What is the offset within its page?",
        "answer": 218,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "1242 = 4 × 256 + 218; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "multilevel-paging",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 4912.37,
        "text": "or time calculation, how much time will it take? Time calculation. You just skip those PYQs for now, which means that TLB, they will be including TLB and memory access time is this, you just skip all of those PYQs, just see the PYQs, just purely related to multilevel paging. So basically, I can say, at this point in time, you can solve all the PYQs, which ar"
      }
    ],
    "start": 86
  },
  {
    "id": 87,
    "lecture": 29,
    "title": "Page-table space and translation tradeoffs · Discover",
    "concept": "Page tables trade memory space against lookup work; a translation lookaside buffer caches recent mappings to avoid repeated walks. A flat table makes lookup simple but allocates an entry across the virtual range.",
    "teachingSteps": [
      "Start with the moving parts. A flat table makes lookup simple but allocates an entry across the virtual range.",
      "Hierarchical tables save space for unused regions while adding lookup levels.",
      "A TLB caches the final translation so common accesses can skip that walk."
    ],
    "foundation": {
      "title": "Page-table space and translation tradeoffs",
      "idea": "Page tables trade memory space against lookup work; a translation lookaside buffer caches recent mappings to avoid repeated walks.",
      "terms": [
        "Flat page table: One entry for every virtual page.",
        "Hierarchical table: A tree of tables allocated for used address regions.",
        "TLB: A small cache of recently used virtual-to-physical translations."
      ],
      "example": "A TLB hit can find a frame quickly; a miss needs a page-table walk before the requested data access."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Page-table space and translation tradeoffs · Discover: A one-level page table has 1024 entries of 4 bytes each, how many bytes does that table occupy?",
        "options": [
          "4096 bytes",
          "1024 bytes",
          "256 bytes"
        ],
        "answer": 0,
        "explanation": "4096 bytes. Page tables trade memory space against lookup work; a translation lookaside buffer caches recent mappings to avoid repeated walks."
      },
      {
        "type": "match",
        "prompt": "Page-table space and translation tradeoffs · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Flat page table",
            "One entry for every virtual page."
          ],
          [
            "Hierarchical table",
            "A tree of tables allocated for used address regions."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Page-table space and translation tradeoffs · Discover: put these events in order.",
        "items": [
          "Estimate entries for the virtual address space",
          "Compare allocated table levels",
          "Check whether a recent translation is cached"
        ],
        "explanation": "A flat table makes lookup simple but allocates an entry across the virtual range. Hierarchical tables save space for unused regions while adding lookup levels. A TLB caches the final translation so common accesses can skip that walk."
      },
      {
        "type": "number",
        "prompt": "Page-table space and translation tradeoffs · Discover: Page size is 512 bytes. A process accesses virtual byte address 1227. What is the offset within its page?",
        "answer": 203,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "1227 = 2 × 512 + 203; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "multilevel-paging",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 73.42,
        "text": "So we said that using multi-level paging, what we can do, we can reduce the size of the page table. But how it is even possible? I mean, till now, it seems that we are increasing the size of the page table, but not reducing it. Let's just see how it is possible. So you might have noticed that in the real, I mean, in most of the processes, what happens that m"
      },
      {
        "time": 1249.26,
        "text": "10 entries. So basically what I mean to say that these 16 entries that you are talking about, these can be clubbed in just two chunks. Suppose, see, suppose a question is like this, that you are having, this is your page table and this is your virtual address space. Something is, I mean, total 16 pages, but one page here, one page here, okay, one page here, "
      }
    ],
    "start": 87
  },
  {
    "id": 88,
    "lecture": 29,
    "title": "Page-table space and translation tradeoffs · Explore",
    "concept": "Page tables trade memory space against lookup work; a translation lookaside buffer caches recent mappings to avoid repeated walks. Hierarchical tables save space for unused regions while adding lookup levels.",
    "teachingSteps": [
      "Watch one example unfold. A flat table makes lookup simple but allocates an entry across the virtual range.",
      "Hierarchical tables save space for unused regions while adding lookup levels.",
      "A TLB caches the final translation so common accesses can skip that walk."
    ],
    "foundation": {
      "title": "Page-table space and translation tradeoffs",
      "idea": "Page tables trade memory space against lookup work; a translation lookaside buffer caches recent mappings to avoid repeated walks.",
      "terms": [
        "Flat page table: One entry for every virtual page.",
        "Hierarchical table: A tree of tables allocated for used address regions.",
        "TLB: A small cache of recently used virtual-to-physical translations."
      ],
      "example": "A TLB hit can find a frame quickly; a miss needs a page-table walk before the requested data access."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Page-table space and translation tradeoffs · Explore: The trace has just completed: Estimate entries for the virtual address space. Which action should happen next?",
        "options": [
          "Compare allocated table levels",
          "Estimate entries for the virtual address space",
          "Check whether a recent translation is cached"
        ],
        "answer": 0,
        "explanation": "Compare allocated table levels. Hierarchical tables save space for unused regions while adding lookup levels."
      },
      {
        "type": "match",
        "prompt": "Page-table space and translation tradeoffs · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Hierarchical table",
            "A tree of tables allocated for used address regions."
          ],
          [
            "TLB",
            "A small cache of recently used virtual-to-physical translations."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Page-table space and translation tradeoffs · Explore: put the opening events in order.",
        "items": [
          "Estimate entries for the virtual address space",
          "Compare allocated table levels"
        ],
        "explanation": "A flat table makes lookup simple but allocates an entry across the virtual range. Hierarchical tables save space for unused regions while adding lookup levels. A TLB caches the final translation so common accesses can skip that walk."
      },
      {
        "type": "number",
        "prompt": "Page-table space and translation tradeoffs · Explore: Page size is 512 bytes. A process accesses virtual byte address 1750. What is the offset within its page?",
        "answer": 214,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "1750 = 3 × 512 + 214; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "multilevel-paging",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 73.42,
        "text": "So we said that using multi-level paging, what we can do, we can reduce the size of the page table. But how it is even possible? I mean, till now, it seems that we are increasing the size of the page table, but not reducing it. Let's just see how it is possible. So you might have noticed that in the real, I mean, in most of the processes, what happens that m"
      },
      {
        "time": 1249.26,
        "text": "10 entries. So basically what I mean to say that these 16 entries that you are talking about, these can be clubbed in just two chunks. Suppose, see, suppose a question is like this, that you are having, this is your page table and this is your virtual address space. Something is, I mean, total 16 pages, but one page here, one page here, okay, one page here, "
      }
    ],
    "start": 88
  },
  {
    "id": 89,
    "lecture": 29,
    "title": "Page-table space and translation tradeoffs · Apply",
    "concept": "Page tables trade memory space against lookup work; a translation lookaside buffer caches recent mappings to avoid repeated walks. A TLB caches the final translation so common accesses can skip that walk.",
    "teachingSteps": [
      "Use the idea in a new situation. A flat table makes lookup simple but allocates an entry across the virtual range.",
      "Hierarchical tables save space for unused regions while adding lookup levels.",
      "A TLB caches the final translation so common accesses can skip that walk."
    ],
    "foundation": {
      "title": "Page-table space and translation tradeoffs",
      "idea": "Page tables trade memory space against lookup work; a translation lookaside buffer caches recent mappings to avoid repeated walks.",
      "terms": [
        "Flat page table: One entry for every virtual page.",
        "Hierarchical table: A tree of tables allocated for used address regions.",
        "TLB: A small cache of recently used virtual-to-physical translations."
      ],
      "example": "A TLB hit can find a frame quickly; a miss needs a page-table walk before the requested data access."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Page-table space and translation tradeoffs · Apply: In this new example, what should happen immediately before: Check whether a recent translation is cached?",
        "options": [
          "Compare allocated table levels",
          "Check whether a recent translation is cached",
          "Estimate entries for the virtual address space"
        ],
        "answer": 0,
        "explanation": "Compare allocated table levels must happen first. Hierarchical tables save space for unused regions while adding lookup levels."
      },
      {
        "type": "match",
        "prompt": "Page-table space and translation tradeoffs · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "TLB",
            "A small cache of recently used virtual-to-physical translations."
          ],
          [
            "Flat page table",
            "One entry for every virtual page."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Page-table space and translation tradeoffs · Apply: put the final handoff in order.",
        "items": [
          "Compare allocated table levels",
          "Check whether a recent translation is cached"
        ],
        "explanation": "A flat table makes lookup simple but allocates an entry across the virtual range. Hierarchical tables save space for unused regions while adding lookup levels. A TLB caches the final translation so common accesses can skip that walk."
      },
      {
        "type": "number",
        "prompt": "Page-table space and translation tradeoffs · Apply: Page size is 512 bytes. A process accesses virtual byte address 2273. What is the offset within its page?",
        "answer": 225,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "2273 = 4 × 512 + 225; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "multilevel-paging",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 73.42,
        "text": "So we said that using multi-level paging, what we can do, we can reduce the size of the page table. But how it is even possible? I mean, till now, it seems that we are increasing the size of the page table, but not reducing it. Let's just see how it is possible. So you might have noticed that in the real, I mean, in most of the processes, what happens that m"
      },
      {
        "time": 1249.26,
        "text": "10 entries. So basically what I mean to say that these 16 entries that you are talking about, these can be clubbed in just two chunks. Suppose, see, suppose a question is like this, that you are having, this is your page table and this is your virtual address space. Something is, I mean, total 16 pages, but one page here, one page here, okay, one page here, "
      }
    ],
    "start": 89
  },
  {
    "id": 90,
    "lecture": 30,
    "title": "Review memory allocation schemes · Discover",
    "concept": "Contiguous regions, segmentation and paging make different tradeoffs in protection, flexibility and fragmentation. Contiguous regions are simple but can be hard to grow.",
    "teachingSteps": [
      "Start with the moving parts. Contiguous regions are simple but can be hard to grow.",
      "Segmentation matches logical regions and may suffer external fragmentation.",
      "Paging maps fixed-size units flexibly but can waste space inside the last page."
    ],
    "foundation": {
      "title": "Review memory allocation schemes",
      "idea": "Contiguous regions, segmentation and paging make different tradeoffs in protection, flexibility and fragmentation.",
      "terms": [
        "Contiguous allocation: Give a process one adjacent physical region.",
        "Internal fragmentation: Allocated space inside a block that the process does not use.",
        "External fragmentation: Free space separated into holes between allocated regions."
      ],
      "example": "Fixed-size pages avoid external holes between process allocations, though the final page can have unused bytes."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Review memory allocation schemes · Discover: A process needs 10 bytes and receives a fixed 8-byte page size, how many bytes are unused in its final allocated page?",
        "options": [
          "6 bytes",
          "2 bytes",
          "0 bytes"
        ],
        "answer": 0,
        "explanation": "6 bytes. Contiguous regions, segmentation and paging make different tradeoffs in protection, flexibility and fragmentation."
      },
      {
        "type": "match",
        "prompt": "Review memory allocation schemes · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Contiguous allocation",
            "Give a process one adjacent physical region."
          ],
          [
            "Internal fragmentation",
            "Allocated space inside a block that the process does not use."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Review memory allocation schemes · Discover: put these events in order.",
        "items": [
          "Identify the size of each allocation unit",
          "Place the process in available units",
          "Measure unused space inside and between allocations"
        ],
        "explanation": "Contiguous regions are simple but can be hard to grow. Segmentation matches logical regions and may suffer external fragmentation. Paging maps fixed-size units flexibly but can waste space inside the last page."
      },
      {
        "type": "number",
        "prompt": "Review memory allocation schemes · Discover: Page size is 128 bytes. A process accesses virtual byte address 338. What is the offset within its page?",
        "answer": 82,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "338 = 2 × 128 + 82; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "memory-review",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 8.18,
        "text": "Yeah, hi Vishwanath, hi Satyam, hello me, hi Sangeet, hi Amant, hello Anish. So let's quickly summarize that what we were studying in this memory management, right? So let's see summary so far in memory management. Now do you remember that what are the things that we have studied? We started with base and bound, and then we moved to segmentation, then we mov"
      },
      {
        "time": 53.22,
        "text": "Okay. So these are the three things that we have studied till now. Let's just see. So we said like, uh, there are two programs that want to, we want to run in the main memory. And if you want to run two programs, then, uh, then if you want to run them simultaneously, then what do we need? We need to have different, different status. Can we, can we load both "
      }
    ],
    "start": 90
  },
  {
    "id": 91,
    "lecture": 30,
    "title": "Review memory allocation schemes · Explore",
    "concept": "Contiguous regions, segmentation and paging make different tradeoffs in protection, flexibility and fragmentation. Segmentation matches logical regions and may suffer external fragmentation.",
    "teachingSteps": [
      "Watch one example unfold. Contiguous regions are simple but can be hard to grow.",
      "Segmentation matches logical regions and may suffer external fragmentation.",
      "Paging maps fixed-size units flexibly but can waste space inside the last page."
    ],
    "foundation": {
      "title": "Review memory allocation schemes",
      "idea": "Contiguous regions, segmentation and paging make different tradeoffs in protection, flexibility and fragmentation.",
      "terms": [
        "Contiguous allocation: Give a process one adjacent physical region.",
        "Internal fragmentation: Allocated space inside a block that the process does not use.",
        "External fragmentation: Free space separated into holes between allocated regions."
      ],
      "example": "Fixed-size pages avoid external holes between process allocations, though the final page can have unused bytes."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Review memory allocation schemes · Explore: The trace has just completed: Identify the size of each allocation unit. Which action should happen next?",
        "options": [
          "Place the process in available units",
          "Identify the size of each allocation unit",
          "Measure unused space inside and between allocations"
        ],
        "answer": 0,
        "explanation": "Place the process in available units. Segmentation matches logical regions and may suffer external fragmentation."
      },
      {
        "type": "match",
        "prompt": "Review memory allocation schemes · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Internal fragmentation",
            "Allocated space inside a block that the process does not use."
          ],
          [
            "External fragmentation",
            "Free space separated into holes between allocated regions."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Review memory allocation schemes · Explore: put the opening events in order.",
        "items": [
          "Identify the size of each allocation unit",
          "Place the process in available units"
        ],
        "explanation": "Contiguous regions are simple but can be hard to grow. Segmentation matches logical regions and may suffer external fragmentation. Paging maps fixed-size units flexibly but can waste space inside the last page."
      },
      {
        "type": "number",
        "prompt": "Review memory allocation schemes · Explore: Page size is 128 bytes. A process accesses virtual byte address 477. What is the offset within its page?",
        "answer": 93,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "477 = 3 × 128 + 93; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "memory-review",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 8.18,
        "text": "Yeah, hi Vishwanath, hi Satyam, hello me, hi Sangeet, hi Amant, hello Anish. So let's quickly summarize that what we were studying in this memory management, right? So let's see summary so far in memory management. Now do you remember that what are the things that we have studied? We started with base and bound, and then we moved to segmentation, then we mov"
      },
      {
        "time": 53.22,
        "text": "Okay. So these are the three things that we have studied till now. Let's just see. So we said like, uh, there are two programs that want to, we want to run in the main memory. And if you want to run two programs, then, uh, then if you want to run them simultaneously, then what do we need? We need to have different, different status. Can we, can we load both "
      }
    ],
    "start": 91
  },
  {
    "id": 92,
    "lecture": 30,
    "title": "Review memory allocation schemes · Apply",
    "concept": "Contiguous regions, segmentation and paging make different tradeoffs in protection, flexibility and fragmentation. Paging maps fixed-size units flexibly but can waste space inside the last page.",
    "teachingSteps": [
      "Use the idea in a new situation. Contiguous regions are simple but can be hard to grow.",
      "Segmentation matches logical regions and may suffer external fragmentation.",
      "Paging maps fixed-size units flexibly but can waste space inside the last page."
    ],
    "foundation": {
      "title": "Review memory allocation schemes",
      "idea": "Contiguous regions, segmentation and paging make different tradeoffs in protection, flexibility and fragmentation.",
      "terms": [
        "Contiguous allocation: Give a process one adjacent physical region.",
        "Internal fragmentation: Allocated space inside a block that the process does not use.",
        "External fragmentation: Free space separated into holes between allocated regions."
      ],
      "example": "Fixed-size pages avoid external holes between process allocations, though the final page can have unused bytes."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Review memory allocation schemes · Apply: In this new example, what should happen immediately before: Measure unused space inside and between allocations?",
        "options": [
          "Place the process in available units",
          "Measure unused space inside and between allocations",
          "Identify the size of each allocation unit"
        ],
        "answer": 0,
        "explanation": "Place the process in available units must happen first. Segmentation matches logical regions and may suffer external fragmentation."
      },
      {
        "type": "match",
        "prompt": "Review memory allocation schemes · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "External fragmentation",
            "Free space separated into holes between allocated regions."
          ],
          [
            "Contiguous allocation",
            "Give a process one adjacent physical region."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Review memory allocation schemes · Apply: put the final handoff in order.",
        "items": [
          "Place the process in available units",
          "Measure unused space inside and between allocations"
        ],
        "explanation": "Contiguous regions are simple but can be hard to grow. Segmentation matches logical regions and may suffer external fragmentation. Paging maps fixed-size units flexibly but can waste space inside the last page."
      },
      {
        "type": "number",
        "prompt": "Review memory allocation schemes · Apply: Page size is 128 bytes. A process accesses virtual byte address 616. What is the offset within its page?",
        "answer": 104,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "616 = 4 × 128 + 104; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "memory-review",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 8.18,
        "text": "Yeah, hi Vishwanath, hi Satyam, hello me, hi Sangeet, hi Amant, hello Anish. So let's quickly summarize that what we were studying in this memory management, right? So let's see summary so far in memory management. Now do you remember that what are the things that we have studied? We started with base and bound, and then we moved to segmentation, then we mov"
      },
      {
        "time": 53.22,
        "text": "Okay. So these are the three things that we have studied till now. Let's just see. So we said like, uh, there are two programs that want to, we want to run in the main memory. And if you want to run two programs, then, uh, then if you want to run them simultaneously, then what do we need? We need to have different, different status. Can we, can we load both "
      }
    ],
    "start": 92
  },
  {
    "id": 93,
    "lecture": 31,
    "title": "Segmentation with paging · Discover",
    "concept": "Segmented paging first selects a segment’s page table, then maps a page within that segment to a frame. Segments preserve logical separation for code, data or stack.",
    "teachingSteps": [
      "Start with the moving parts. Segments preserve logical separation for code, data or stack.",
      "Each segment maps its pages through a page table.",
      "Validate the segment and page before composing the final physical address."
    ],
    "foundation": {
      "title": "Segmentation with paging",
      "idea": "Segmented paging first selects a segment’s page table, then maps a page within that segment to a frame.",
      "terms": [
        "Segment number: The logical region being addressed.",
        "Segment page: The page index within that region.",
        "Offset: The byte position within a page."
      ],
      "example": "A logical address can select segment 2, page 3, offset 12; the segment table locates the page table before frame translation."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Segmentation with paging · Discover: A segmented-paged address uses 3 fields: segment, page and offset, which lookup determines the page table for the next step?",
        "options": [
          "The segment-table entry",
          "The byte offset",
          "The process priority"
        ],
        "answer": 0,
        "explanation": "The segment-table entry. Segmented paging first selects a segment’s page table, then maps a page within that segment to a frame."
      },
      {
        "type": "match",
        "prompt": "Segmentation with paging · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Segment number",
            "The logical region being addressed."
          ],
          [
            "Segment page",
            "The page index within that region."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Segmentation with paging · Discover: put these events in order.",
        "items": [
          "Use the segment number to find its page-table base",
          "Use the page index to find a physical frame",
          "Append the unchanged offset"
        ],
        "explanation": "Segments preserve logical separation for code, data or stack. Each segment maps its pages through a page table. Validate the segment and page before composing the final physical address."
      },
      {
        "type": "number",
        "prompt": "Segmentation with paging · Discover: Page size is 256 bytes. A process accesses virtual byte address 729. What is the offset within its page?",
        "answer": 217,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "729 = 2 × 256 + 217; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "segmented-paging",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 8.02,
        "text": "Hi everyone. Okay. So let's get started. Now today we are going to see a little new topic. I mean not new. I mean it is related to the old topics only, which is a segmentation with paging. Okay. Yeah. So we are going to see segmentation and paging combined. So let's just see how, how does it, how does this work? So the topic name is segmentation and paging. "
      },
      {
        "time": 45.49,
        "text": "we if you have okay do you want me to revise anything in the segmentation of paging can anyone tell me what what is the problem with the segmentation what was the problem with the segmentation the main problem yeah external fragmentation right with yeah so the main problem was external fragmentation which was quite huge now what about paging do paging also h"
      }
    ],
    "start": 93
  },
  {
    "id": 94,
    "lecture": 31,
    "title": "Segmentation with paging · Explore",
    "concept": "Segmented paging first selects a segment’s page table, then maps a page within that segment to a frame. Each segment maps its pages through a page table.",
    "teachingSteps": [
      "Watch one example unfold. Segments preserve logical separation for code, data or stack.",
      "Each segment maps its pages through a page table.",
      "Validate the segment and page before composing the final physical address."
    ],
    "foundation": {
      "title": "Segmentation with paging",
      "idea": "Segmented paging first selects a segment’s page table, then maps a page within that segment to a frame.",
      "terms": [
        "Segment number: The logical region being addressed.",
        "Segment page: The page index within that region.",
        "Offset: The byte position within a page."
      ],
      "example": "A logical address can select segment 2, page 3, offset 12; the segment table locates the page table before frame translation."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Segmentation with paging · Explore: The trace has just completed: Use the segment number to find its page-table base. Which action should happen next?",
        "options": [
          "Use the page index to find a physical frame",
          "Use the segment number to find its page-table base",
          "Append the unchanged offset"
        ],
        "answer": 0,
        "explanation": "Use the page index to find a physical frame. Each segment maps its pages through a page table."
      },
      {
        "type": "match",
        "prompt": "Segmentation with paging · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Segment page",
            "The page index within that region."
          ],
          [
            "Offset",
            "The byte position within a page."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Segmentation with paging · Explore: put the opening events in order.",
        "items": [
          "Use the segment number to find its page-table base",
          "Use the page index to find a physical frame"
        ],
        "explanation": "Segments preserve logical separation for code, data or stack. Each segment maps its pages through a page table. Validate the segment and page before composing the final physical address."
      },
      {
        "type": "number",
        "prompt": "Segmentation with paging · Explore: Page size is 256 bytes. A process accesses virtual byte address 996. What is the offset within its page?",
        "answer": 228,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "996 = 3 × 256 + 228; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "segmented-paging",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 8.02,
        "text": "Hi everyone. Okay. So let's get started. Now today we are going to see a little new topic. I mean not new. I mean it is related to the old topics only, which is a segmentation with paging. Okay. Yeah. So we are going to see segmentation and paging combined. So let's just see how, how does it, how does this work? So the topic name is segmentation and paging. "
      },
      {
        "time": 45.49,
        "text": "we if you have okay do you want me to revise anything in the segmentation of paging can anyone tell me what what is the problem with the segmentation what was the problem with the segmentation the main problem yeah external fragmentation right with yeah so the main problem was external fragmentation which was quite huge now what about paging do paging also h"
      }
    ],
    "start": 94
  },
  {
    "id": 95,
    "lecture": 31,
    "title": "Segmentation with paging · Apply",
    "concept": "Segmented paging first selects a segment’s page table, then maps a page within that segment to a frame. Validate the segment and page before composing the final physical address.",
    "teachingSteps": [
      "Use the idea in a new situation. Segments preserve logical separation for code, data or stack.",
      "Each segment maps its pages through a page table.",
      "Validate the segment and page before composing the final physical address."
    ],
    "foundation": {
      "title": "Segmentation with paging",
      "idea": "Segmented paging first selects a segment’s page table, then maps a page within that segment to a frame.",
      "terms": [
        "Segment number: The logical region being addressed.",
        "Segment page: The page index within that region.",
        "Offset: The byte position within a page."
      ],
      "example": "A logical address can select segment 2, page 3, offset 12; the segment table locates the page table before frame translation."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Segmentation with paging · Apply: In this new example, what should happen immediately before: Append the unchanged offset?",
        "options": [
          "Use the page index to find a physical frame",
          "Append the unchanged offset",
          "Use the segment number to find its page-table base"
        ],
        "answer": 0,
        "explanation": "Use the page index to find a physical frame must happen first. Each segment maps its pages through a page table."
      },
      {
        "type": "match",
        "prompt": "Segmentation with paging · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Offset",
            "The byte position within a page."
          ],
          [
            "Segment number",
            "The logical region being addressed."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Segmentation with paging · Apply: put the final handoff in order.",
        "items": [
          "Use the page index to find a physical frame",
          "Append the unchanged offset"
        ],
        "explanation": "Segments preserve logical separation for code, data or stack. Each segment maps its pages through a page table. Validate the segment and page before composing the final physical address."
      },
      {
        "type": "number",
        "prompt": "Segmentation with paging · Apply: Page size is 256 bytes. A process accesses virtual byte address 1263. What is the offset within its page?",
        "answer": 239,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "1263 = 4 × 256 + 239; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "segmented-paging",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 8.02,
        "text": "Hi everyone. Okay. So let's get started. Now today we are going to see a little new topic. I mean not new. I mean it is related to the old topics only, which is a segmentation with paging. Okay. Yeah. So we are going to see segmentation and paging combined. So let's just see how, how does it, how does this work? So the topic name is segmentation and paging. "
      },
      {
        "time": 45.49,
        "text": "we if you have okay do you want me to revise anything in the segmentation of paging can anyone tell me what what is the problem with the segmentation what was the problem with the segmentation the main problem yeah external fragmentation right with yeah so the main problem was external fragmentation which was quite huge now what about paging do paging also h"
      }
    ],
    "start": 95
  },
  {
    "id": 96,
    "lecture": 32,
    "title": "Demand paging and page replacement · Discover",
    "concept": "Demand paging loads a page when it is first accessed; if memory is full, a replacement policy chooses a resident page to evict. A valid virtual page can still be absent from RAM.",
    "teachingSteps": [
      "Start with the moving parts. A valid virtual page can still be absent from RAM.",
      "The page fault handler locates the page on backing storage and arranges a frame.",
      "Replacement policy chooses a victim only when free frames are unavailable."
    ],
    "foundation": {
      "title": "Demand paging and page replacement",
      "idea": "Demand paging loads a page when it is first accessed; if memory is full, a replacement policy chooses a resident page to evict.",
      "terms": [
        "Page fault: A trap caused by accessing a page that is not currently mapped in memory.",
        "FIFO: Evict the page that has been resident longest.",
        "LRU: Evict the page whose last use was farthest in the past."
      ],
      "example": "With frames [1, 2, 3], requesting page 4 faults; FIFO and LRU may evict different pages depending on past references."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Demand paging and page replacement · Discover: Frames hold pages 1 and 2; a reference requests absent page 3, what event is raised before page 3 can be read?",
        "options": [
          "A page fault",
          "A cache hit",
          "A context switch that automatically maps the page"
        ],
        "answer": 0,
        "explanation": "A page fault. Demand paging loads a page when it is first accessed; if memory is full, a replacement policy chooses a resident page to evict."
      },
      {
        "type": "match",
        "prompt": "Demand paging and page replacement · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Page fault",
            "A trap caused by accessing a page that is not currently mapped in memory."
          ],
          [
            "FIFO",
            "Evict the page that has been resident longest."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Demand paging and page replacement · Discover: put these events in order.",
        "items": [
          "Check whether the referenced page is resident",
          "Fault and fetch it when absent",
          "Choose a victim if no frame is free"
        ],
        "explanation": "A valid virtual page can still be absent from RAM. The page fault handler locates the page on backing storage and arranges a frame. Replacement policy chooses a victim only when free frames are unavailable."
      },
      {
        "type": "number",
        "prompt": "Demand paging and page replacement · Discover: Page size is 512 bytes. A process accesses virtual byte address 1248. What is the offset within its page?",
        "answer": 224,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "1248 = 2 × 512 + 224; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "replacement",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 6.32,
        "text": "Hi, everyone. How are you doing? Hello, Hemant. Hi, Vishwanathan. Hello, Sangeet. Okay. So today we are going to study a new topic, which is demand paging, right? So let's get started. So today we are going to study demand paging. And there is one more topic, which is page replacement algorithms. So till now, whatever we have done, I mean, we have done multi"
      },
      {
        "time": 3435.64,
        "text": "Or maybe I mean, which page that have been already been used, you want to replace, right? Basically, you will be replacing one of the page. Let's just see how to replace one of the page. So there will be algorithms which are called page replacement algorithms. Okay. So till now, we have just seen the idea that I mean, how to implement the virtual memory, whi"
      }
    ],
    "start": 96
  },
  {
    "id": 97,
    "lecture": 32,
    "title": "Demand paging and page replacement · Explore",
    "concept": "Demand paging loads a page when it is first accessed; if memory is full, a replacement policy chooses a resident page to evict. The page fault handler locates the page on backing storage and arranges a frame.",
    "teachingSteps": [
      "Watch one example unfold. A valid virtual page can still be absent from RAM.",
      "The page fault handler locates the page on backing storage and arranges a frame.",
      "Replacement policy chooses a victim only when free frames are unavailable."
    ],
    "foundation": {
      "title": "Demand paging and page replacement",
      "idea": "Demand paging loads a page when it is first accessed; if memory is full, a replacement policy chooses a resident page to evict.",
      "terms": [
        "Page fault: A trap caused by accessing a page that is not currently mapped in memory.",
        "FIFO: Evict the page that has been resident longest.",
        "LRU: Evict the page whose last use was farthest in the past."
      ],
      "example": "With frames [1, 2, 3], requesting page 4 faults; FIFO and LRU may evict different pages depending on past references."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Demand paging and page replacement · Explore: The trace has just completed: Check whether the referenced page is resident. Which action should happen next?",
        "options": [
          "Fault and fetch it when absent",
          "Check whether the referenced page is resident",
          "Choose a victim if no frame is free"
        ],
        "answer": 0,
        "explanation": "Fault and fetch it when absent. The page fault handler locates the page on backing storage and arranges a frame."
      },
      {
        "type": "match",
        "prompt": "Demand paging and page replacement · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "FIFO",
            "Evict the page that has been resident longest."
          ],
          [
            "LRU",
            "Evict the page whose last use was farthest in the past."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Demand paging and page replacement · Explore: put the opening events in order.",
        "items": [
          "Check whether the referenced page is resident",
          "Fault and fetch it when absent"
        ],
        "explanation": "A valid virtual page can still be absent from RAM. The page fault handler locates the page on backing storage and arranges a frame. Replacement policy chooses a victim only when free frames are unavailable."
      },
      {
        "type": "number",
        "prompt": "Demand paging and page replacement · Explore: Page size is 512 bytes. A process accesses virtual byte address 1771. What is the offset within its page?",
        "answer": 235,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "1771 = 3 × 512 + 235; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "replacement",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 6.32,
        "text": "Hi, everyone. How are you doing? Hello, Hemant. Hi, Vishwanathan. Hello, Sangeet. Okay. So today we are going to study a new topic, which is demand paging, right? So let's get started. So today we are going to study demand paging. And there is one more topic, which is page replacement algorithms. So till now, whatever we have done, I mean, we have done multi"
      },
      {
        "time": 3435.64,
        "text": "Or maybe I mean, which page that have been already been used, you want to replace, right? Basically, you will be replacing one of the page. Let's just see how to replace one of the page. So there will be algorithms which are called page replacement algorithms. Okay. So till now, we have just seen the idea that I mean, how to implement the virtual memory, whi"
      }
    ],
    "start": 97
  },
  {
    "id": 98,
    "lecture": 32,
    "title": "Demand paging and page replacement · Apply",
    "concept": "Demand paging loads a page when it is first accessed; if memory is full, a replacement policy chooses a resident page to evict. Replacement policy chooses a victim only when free frames are unavailable.",
    "teachingSteps": [
      "Use the idea in a new situation. A valid virtual page can still be absent from RAM.",
      "The page fault handler locates the page on backing storage and arranges a frame.",
      "Replacement policy chooses a victim only when free frames are unavailable."
    ],
    "foundation": {
      "title": "Demand paging and page replacement",
      "idea": "Demand paging loads a page when it is first accessed; if memory is full, a replacement policy chooses a resident page to evict.",
      "terms": [
        "Page fault: A trap caused by accessing a page that is not currently mapped in memory.",
        "FIFO: Evict the page that has been resident longest.",
        "LRU: Evict the page whose last use was farthest in the past."
      ],
      "example": "With frames [1, 2, 3], requesting page 4 faults; FIFO and LRU may evict different pages depending on past references."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Demand paging and page replacement · Apply: In this new example, what should happen immediately before: Choose a victim if no frame is free?",
        "options": [
          "Fault and fetch it when absent",
          "Choose a victim if no frame is free",
          "Check whether the referenced page is resident"
        ],
        "answer": 0,
        "explanation": "Fault and fetch it when absent must happen first. The page fault handler locates the page on backing storage and arranges a frame."
      },
      {
        "type": "match",
        "prompt": "Demand paging and page replacement · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "LRU",
            "Evict the page whose last use was farthest in the past."
          ],
          [
            "Page fault",
            "A trap caused by accessing a page that is not currently mapped in memory."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Demand paging and page replacement · Apply: put the final handoff in order.",
        "items": [
          "Fault and fetch it when absent",
          "Choose a victim if no frame is free"
        ],
        "explanation": "A valid virtual page can still be absent from RAM. The page fault handler locates the page on backing storage and arranges a frame. Replacement policy chooses a victim only when free frames are unavailable."
      },
      {
        "type": "number",
        "prompt": "Demand paging and page replacement · Apply: Page size is 512 bytes. A process accesses virtual byte address 2294. What is the offset within its page?",
        "answer": 246,
        "unit": "bytes",
        "tolerance": 1e-8,
        "explanation": "2294 = 4 × 512 + 246; the remainder is the offset."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "replacement",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 6.32,
        "text": "Hi, everyone. How are you doing? Hello, Hemant. Hi, Vishwanathan. Hello, Sangeet. Okay. So today we are going to study a new topic, which is demand paging, right? So let's get started. So today we are going to study demand paging. And there is one more topic, which is page replacement algorithms. So till now, whatever we have done, I mean, we have done multi"
      },
      {
        "time": 3435.64,
        "text": "Or maybe I mean, which page that have been already been used, you want to replace, right? Basically, you will be replacing one of the page. Let's just see how to replace one of the page. So there will be algorithms which are called page replacement algorithms. Okay. So till now, we have just seen the idea that I mean, how to implement the virtual memory, whi"
      }
    ],
    "start": 98
  },
  {
    "id": 99,
    "lecture": 33,
    "title": "TLBs and effective access time · Discover",
    "concept": "A translation lookaside buffer caches address translations; effective access time depends on hit rate and the costs of hits and misses. A TLB hit avoids the page-table walk.",
    "teachingSteps": [
      "Start with the moving parts. A TLB hit avoids the page-table walk.",
      "A miss pays for the walk and then completes the memory access.",
      "Multiply each path’s time by its probability and add the results."
    ],
    "foundation": {
      "title": "TLBs and effective access time",
      "idea": "A translation lookaside buffer caches address translations; effective access time depends on hit rate and the costs of hits and misses.",
      "terms": [
        "TLB hit: The translation is found in the translation cache.",
        "TLB miss: The page table must be consulted to find the translation.",
        "Effective access time: The weighted average access cost across possible outcomes."
      ],
      "example": "If a hit costs 10 ns and a miss path costs 110 ns, a 90% hit rate gives 20 ns average: 0.9×10 + 0.1×110."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "TLBs and effective access time · Discover: TLB hit cost is 10 ns, miss cost is 110 ns and hit rate is 90%, what is the weighted average access time?",
        "options": [
          "20 ns",
          "60 ns",
          "110 ns"
        ],
        "answer": 0,
        "explanation": "20 ns. A translation lookaside buffer caches address translations; effective access time depends on hit rate and the costs of hits and misses."
      },
      {
        "type": "match",
        "prompt": "TLBs and effective access time · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "TLB hit",
            "The translation is found in the translation cache."
          ],
          [
            "TLB miss",
            "The page table must be consulted to find the translation."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "TLBs and effective access time · Discover: put these events in order.",
        "items": [
          "Measure the hit path cost",
          "Measure the miss path cost",
          "Weight each cost by its probability"
        ],
        "explanation": "A TLB hit avoids the page-table walk. A miss pays for the walk and then completes the memory access. Multiply each path’s time by its probability and add the results."
      },
      {
        "type": "number",
        "prompt": "TLBs and effective access time · Discover: A TLB hit costs 10 ns, a miss costs 110 ns and the hit rate is 70%. What is the effective access time?",
        "answer": 40,
        "unit": "ns",
        "tolerance": 1e-8,
        "explanation": "70% × 10 + 30% × 110 = 40 ns."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "tlb",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 1237.36,
        "text": "then we can we can consider the small thing that i'm talking about see the transition total number of accesses see you will be you will be first accessing a0 a1 a2 so how many times how many elements you are accessing 1024 elements right 1024 accesses i mean virtual addresses you will be generating so 1024 times you need to access something right so total da"
      },
      {
        "time": 3378.46,
        "text": "use is a TLV TLV access time is also given to you which is a TLV access time is 10 nanoseconds and main memory access time is 50 nanoseconds i mean they have not given read and write separately so let's just keep it 50 nanosecond only okay and what is the effective memory access time if the TLV hit ratio is 90% and there is no page fault let's not worry abou"
      }
    ],
    "start": 99
  },
  {
    "id": 100,
    "lecture": 33,
    "title": "TLBs and effective access time · Explore",
    "concept": "A translation lookaside buffer caches address translations; effective access time depends on hit rate and the costs of hits and misses. A miss pays for the walk and then completes the memory access.",
    "teachingSteps": [
      "Watch one example unfold. A TLB hit avoids the page-table walk.",
      "A miss pays for the walk and then completes the memory access.",
      "Multiply each path’s time by its probability and add the results."
    ],
    "foundation": {
      "title": "TLBs and effective access time",
      "idea": "A translation lookaside buffer caches address translations; effective access time depends on hit rate and the costs of hits and misses.",
      "terms": [
        "TLB hit: The translation is found in the translation cache.",
        "TLB miss: The page table must be consulted to find the translation.",
        "Effective access time: The weighted average access cost across possible outcomes."
      ],
      "example": "If a hit costs 10 ns and a miss path costs 110 ns, a 90% hit rate gives 20 ns average: 0.9×10 + 0.1×110."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "TLBs and effective access time · Explore: The trace has just completed: Measure the hit path cost. Which action should happen next?",
        "options": [
          "Measure the miss path cost",
          "Measure the hit path cost",
          "Weight each cost by its probability"
        ],
        "answer": 0,
        "explanation": "Measure the miss path cost. A miss pays for the walk and then completes the memory access."
      },
      {
        "type": "match",
        "prompt": "TLBs and effective access time · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "TLB miss",
            "The page table must be consulted to find the translation."
          ],
          [
            "Effective access time",
            "The weighted average access cost across possible outcomes."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "TLBs and effective access time · Explore: put the opening events in order.",
        "items": [
          "Measure the hit path cost",
          "Measure the miss path cost"
        ],
        "explanation": "A TLB hit avoids the page-table walk. A miss pays for the walk and then completes the memory access. Multiply each path’s time by its probability and add the results."
      },
      {
        "type": "number",
        "prompt": "TLBs and effective access time · Explore: A TLB hit costs 10 ns, a miss costs 110 ns and the hit rate is 80%. What is the effective access time?",
        "answer": 30,
        "unit": "ns",
        "tolerance": 1e-8,
        "explanation": "80% × 10 + 20% × 110 = 30 ns."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "tlb",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 1237.36,
        "text": "then we can we can consider the small thing that i'm talking about see the transition total number of accesses see you will be you will be first accessing a0 a1 a2 so how many times how many elements you are accessing 1024 elements right 1024 accesses i mean virtual addresses you will be generating so 1024 times you need to access something right so total da"
      },
      {
        "time": 3378.46,
        "text": "use is a TLV TLV access time is also given to you which is a TLV access time is 10 nanoseconds and main memory access time is 50 nanoseconds i mean they have not given read and write separately so let's just keep it 50 nanosecond only okay and what is the effective memory access time if the TLV hit ratio is 90% and there is no page fault let's not worry abou"
      }
    ],
    "start": 100
  },
  {
    "id": 101,
    "lecture": 33,
    "title": "TLBs and effective access time · Apply",
    "concept": "A translation lookaside buffer caches address translations; effective access time depends on hit rate and the costs of hits and misses. Multiply each path’s time by its probability and add the results.",
    "teachingSteps": [
      "Use the idea in a new situation. A TLB hit avoids the page-table walk.",
      "A miss pays for the walk and then completes the memory access.",
      "Multiply each path’s time by its probability and add the results."
    ],
    "foundation": {
      "title": "TLBs and effective access time",
      "idea": "A translation lookaside buffer caches address translations; effective access time depends on hit rate and the costs of hits and misses.",
      "terms": [
        "TLB hit: The translation is found in the translation cache.",
        "TLB miss: The page table must be consulted to find the translation.",
        "Effective access time: The weighted average access cost across possible outcomes."
      ],
      "example": "If a hit costs 10 ns and a miss path costs 110 ns, a 90% hit rate gives 20 ns average: 0.9×10 + 0.1×110."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "TLBs and effective access time · Apply: In this new example, what should happen immediately before: Weight each cost by its probability?",
        "options": [
          "Measure the miss path cost",
          "Weight each cost by its probability",
          "Measure the hit path cost"
        ],
        "answer": 0,
        "explanation": "Measure the miss path cost must happen first. A miss pays for the walk and then completes the memory access."
      },
      {
        "type": "match",
        "prompt": "TLBs and effective access time · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Effective access time",
            "The weighted average access cost across possible outcomes."
          ],
          [
            "TLB hit",
            "The translation is found in the translation cache."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "TLBs and effective access time · Apply: put the final handoff in order.",
        "items": [
          "Measure the miss path cost",
          "Weight each cost by its probability"
        ],
        "explanation": "A TLB hit avoids the page-table walk. A miss pays for the walk and then completes the memory access. Multiply each path’s time by its probability and add the results."
      },
      {
        "type": "number",
        "prompt": "TLBs and effective access time · Apply: A TLB hit costs 10 ns, a miss costs 110 ns and the hit rate is 90%. What is the effective access time?",
        "answer": 20,
        "unit": "ns",
        "tolerance": 1e-8,
        "explanation": "90% × 10 + 10% × 110 = 20 ns."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "tlb",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 1237.36,
        "text": "then we can we can consider the small thing that i'm talking about see the transition total number of accesses see you will be you will be first accessing a0 a1 a2 so how many times how many elements you are accessing 1024 elements right 1024 accesses i mean virtual addresses you will be generating so 1024 times you need to access something right so total da"
      },
      {
        "time": 3378.46,
        "text": "use is a TLV TLV access time is also given to you which is a TLV access time is 10 nanoseconds and main memory access time is 50 nanoseconds i mean they have not given read and write separately so let's just keep it 50 nanosecond only okay and what is the effective memory access time if the TLV hit ratio is 90% and there is no page fault let's not worry abou"
      }
    ],
    "start": 101
  },
  {
    "id": 102,
    "lecture": 34,
    "title": "Dirty pages and page-fault cost · Discover",
    "concept": "A dirty victim has been modified; eviction must write it back before the requested page can be read into its frame. Clean pages match their stored copy and can be discarded.",
    "teachingSteps": [
      "Start with the moving parts. Clean pages match their stored copy and can be discarded.",
      "Dirty pages need a write-back to preserve their latest contents.",
      "Add write and read delays to estimate this fault path before any later TLB calculation."
    ],
    "foundation": {
      "title": "Dirty pages and page-fault cost",
      "idea": "A dirty victim has been modified; eviction must write it back before the requested page can be read into its frame.",
      "terms": [
        "Dirty bit: A flag showing that a memory page changed since it was loaded.",
        "Write-back: Copy a dirty page to storage before reusing its frame.",
        "Page-fault service time: The full delay to evict if needed, fetch and resume."
      ],
      "example": "Replacing a dirty page can require one disk write plus one page read; a clean victim needs only the read."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Dirty pages and page-fault cost · Discover: A dirty victim takes 8 ms to write and the new page takes 12 ms to read, what storage time is required before execution resumes?",
        "options": [
          "20 ms",
          "12 ms",
          "8 ms"
        ],
        "answer": 0,
        "explanation": "20 ms. A dirty victim has been modified; eviction must write it back before the requested page can be read into its frame."
      },
      {
        "type": "match",
        "prompt": "Dirty pages and page-fault cost · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Dirty bit",
            "A flag showing that a memory page changed since it was loaded."
          ],
          [
            "Write-back",
            "Copy a dirty page to storage before reusing its frame."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Dirty pages and page-fault cost · Discover: put these events in order.",
        "items": [
          "Check the victim dirty bit",
          "Write the victim if it was modified",
          "Read the requested page into the freed frame"
        ],
        "explanation": "Clean pages match their stored copy and can be discarded. Dirty pages need a write-back to preserve their latest contents. Add write and read delays to estimate this fault path before any later TLB calculation."
      },
      {
        "type": "number",
        "prompt": "Dirty pages and page-fault cost · Discover: A TLB hit costs 10 ns, a miss costs 110 ns and the hit rate is 70%. What is the effective access time?",
        "answer": 40,
        "unit": "ns",
        "tolerance": 1e-8,
        "explanation": "70% × 10 + 30% × 110 = 40 ns."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "tlb",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 33.25,
        "text": "They are using the paging, they are using the TLB. So what they are using, let me just write it. Flat page table. And then they are using TLB. So each man memory, obviously man memory will be there. Each man memory access and these things are given. And then each page transfer or disk access is also given. Assume that TLB hit ratio is given and the page faul"
      },
      {
        "time": 66.54,
        "text": "So basically what does this mean if the page is dirty has to be written back to a disk before the required pages read read from the disk. So if in your main memory if you have a page and that's that's not the page that you're looking for I mean you go to the main memory and then you find that okay that's not the page that you're looking for and if that page "
      }
    ],
    "start": 102
  },
  {
    "id": 103,
    "lecture": 34,
    "title": "Dirty pages and page-fault cost · Explore",
    "concept": "A dirty victim has been modified; eviction must write it back before the requested page can be read into its frame. Dirty pages need a write-back to preserve their latest contents.",
    "teachingSteps": [
      "Watch one example unfold. Clean pages match their stored copy and can be discarded.",
      "Dirty pages need a write-back to preserve their latest contents.",
      "Add write and read delays to estimate this fault path before any later TLB calculation."
    ],
    "foundation": {
      "title": "Dirty pages and page-fault cost",
      "idea": "A dirty victim has been modified; eviction must write it back before the requested page can be read into its frame.",
      "terms": [
        "Dirty bit: A flag showing that a memory page changed since it was loaded.",
        "Write-back: Copy a dirty page to storage before reusing its frame.",
        "Page-fault service time: The full delay to evict if needed, fetch and resume."
      ],
      "example": "Replacing a dirty page can require one disk write plus one page read; a clean victim needs only the read."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Dirty pages and page-fault cost · Explore: The trace has just completed: Check the victim dirty bit. Which action should happen next?",
        "options": [
          "Write the victim if it was modified",
          "Check the victim dirty bit",
          "Read the requested page into the freed frame"
        ],
        "answer": 0,
        "explanation": "Write the victim if it was modified. Dirty pages need a write-back to preserve their latest contents."
      },
      {
        "type": "match",
        "prompt": "Dirty pages and page-fault cost · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Write-back",
            "Copy a dirty page to storage before reusing its frame."
          ],
          [
            "Page-fault service time",
            "The full delay to evict if needed, fetch and resume."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Dirty pages and page-fault cost · Explore: put the opening events in order.",
        "items": [
          "Check the victim dirty bit",
          "Write the victim if it was modified"
        ],
        "explanation": "Clean pages match their stored copy and can be discarded. Dirty pages need a write-back to preserve their latest contents. Add write and read delays to estimate this fault path before any later TLB calculation."
      },
      {
        "type": "number",
        "prompt": "Dirty pages and page-fault cost · Explore: A TLB hit costs 10 ns, a miss costs 110 ns and the hit rate is 80%. What is the effective access time?",
        "answer": 30,
        "unit": "ns",
        "tolerance": 1e-8,
        "explanation": "80% × 10 + 20% × 110 = 30 ns."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "tlb",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 33.25,
        "text": "They are using the paging, they are using the TLB. So what they are using, let me just write it. Flat page table. And then they are using TLB. So each man memory, obviously man memory will be there. Each man memory access and these things are given. And then each page transfer or disk access is also given. Assume that TLB hit ratio is given and the page faul"
      },
      {
        "time": 66.54,
        "text": "So basically what does this mean if the page is dirty has to be written back to a disk before the required pages read read from the disk. So if in your main memory if you have a page and that's that's not the page that you're looking for I mean you go to the main memory and then you find that okay that's not the page that you're looking for and if that page "
      }
    ],
    "start": 103
  },
  {
    "id": 104,
    "lecture": 34,
    "title": "Dirty pages and page-fault cost · Apply",
    "concept": "A dirty victim has been modified; eviction must write it back before the requested page can be read into its frame. Add write and read delays to estimate this fault path before any later TLB calculation.",
    "teachingSteps": [
      "Use the idea in a new situation. Clean pages match their stored copy and can be discarded.",
      "Dirty pages need a write-back to preserve their latest contents.",
      "Add write and read delays to estimate this fault path before any later TLB calculation."
    ],
    "foundation": {
      "title": "Dirty pages and page-fault cost",
      "idea": "A dirty victim has been modified; eviction must write it back before the requested page can be read into its frame.",
      "terms": [
        "Dirty bit: A flag showing that a memory page changed since it was loaded.",
        "Write-back: Copy a dirty page to storage before reusing its frame.",
        "Page-fault service time: The full delay to evict if needed, fetch and resume."
      ],
      "example": "Replacing a dirty page can require one disk write plus one page read; a clean victim needs only the read."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Dirty pages and page-fault cost · Apply: In this new example, what should happen immediately before: Read the requested page into the freed frame?",
        "options": [
          "Write the victim if it was modified",
          "Read the requested page into the freed frame",
          "Check the victim dirty bit"
        ],
        "answer": 0,
        "explanation": "Write the victim if it was modified must happen first. Dirty pages need a write-back to preserve their latest contents."
      },
      {
        "type": "match",
        "prompt": "Dirty pages and page-fault cost · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Page-fault service time",
            "The full delay to evict if needed, fetch and resume."
          ],
          [
            "Dirty bit",
            "A flag showing that a memory page changed since it was loaded."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Dirty pages and page-fault cost · Apply: put the final handoff in order.",
        "items": [
          "Write the victim if it was modified",
          "Read the requested page into the freed frame"
        ],
        "explanation": "Clean pages match their stored copy and can be discarded. Dirty pages need a write-back to preserve their latest contents. Add write and read delays to estimate this fault path before any later TLB calculation."
      },
      {
        "type": "number",
        "prompt": "Dirty pages and page-fault cost · Apply: A TLB hit costs 10 ns, a miss costs 110 ns and the hit rate is 90%. What is the effective access time?",
        "answer": 20,
        "unit": "ns",
        "tolerance": 1e-8,
        "explanation": "90% × 10 + 10% × 110 = 20 ns."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "tlb",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 33.25,
        "text": "They are using the paging, they are using the TLB. So what they are using, let me just write it. Flat page table. And then they are using TLB. So each man memory, obviously man memory will be there. Each man memory access and these things are given. And then each page transfer or disk access is also given. Assume that TLB hit ratio is given and the page faul"
      },
      {
        "time": 66.54,
        "text": "So basically what does this mean if the page is dirty has to be written back to a disk before the required pages read read from the disk. So if in your main memory if you have a page and that's that's not the page that you're looking for I mean you go to the main memory and then you find that okay that's not the page that you're looking for and if that page "
      }
    ],
    "start": 104
  },
  {
    "id": 105,
    "lecture": 35,
    "title": "Deadlock conditions and resource graphs · Discover",
    "concept": "Deadlock is a set of processes waiting forever; four conditions must all hold for deadlock to be possible. Deadlock requires mutual exclusion, hold and wait, no preemption and circular wait together.",
    "teachingSteps": [
      "Start with the moving parts. Deadlock requires mutual exclusion, hold and wait, no preemption and circular wait together.",
      "A cycle is central evidence; with single-instance resource types it implies deadlock.",
      "Breaking any necessary condition can prevent deadlock, though the chosen policy has costs."
    ],
    "foundation": {
      "title": "Deadlock conditions and resource graphs",
      "idea": "Deadlock is a set of processes waiting forever; four conditions must all hold for deadlock to be possible.",
      "terms": [
        "Mutual exclusion: At least one resource can be held by only one process at a time.",
        "Hold and wait: A process holds resources while requesting more.",
        "Circular wait: Each process waits for a resource held by the next in a cycle."
      ],
      "example": "P1 holds printer and waits for scanner while P2 holds scanner and waits for printer; neither can proceed."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Deadlock conditions and resource graphs · Discover: P1 waits for a resource held by P2, while P2 waits for one held by P1, what structure appears in the wait-for graph?",
        "options": [
          "A cycle",
          "A single directed path that ends at a free resource",
          "A CPU scheduling quantum"
        ],
        "answer": 0,
        "explanation": "A cycle. Deadlock is a set of processes waiting forever; four conditions must all hold for deadlock to be possible."
      },
      {
        "type": "match",
        "prompt": "Deadlock conditions and resource graphs · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Mutual exclusion",
            "At least one resource can be held by only one process at a time."
          ],
          [
            "Hold and wait",
            "A process holds resources while requesting more."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Deadlock conditions and resource graphs · Discover: put these events in order.",
        "items": [
          "Draw processes and resource ownership",
          "Add an edge for each outstanding wait",
          "Check whether wait edges form a cycle"
        ],
        "explanation": "Deadlock requires mutual exclusion, hold and wait, no preemption and circular wait together. A cycle is central evidence; with single-instance resource types it implies deadlock. Breaking any necessary condition can prevent deadlock, though the chosen policy has costs."
      },
      {
        "type": "number",
        "prompt": "Deadlock conditions and resource graphs · Discover: A fork trace has 4 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 16,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "4 successive forks double the process count at each level: 2^4 = 16."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "deadlock",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 649.71,
        "text": "that we talked about that okay P1 is holding one resource P2 is holding one resource and both are waiting for each other so there are many many reasons like why this deadlock is occurring so whenever there is a deadlock you will always see these four conditions okay these four conditions so these are necessary conditions what are those conditions let's just "
      },
      {
        "time": 1003.25,
        "text": "What are these conditions? Can I say that if these conditions satisfy, then deadlock will be there? Can I say these conditions satisfy, deadlock will be there? Actually, the answer is no. I mean, these conditions are the necessary conditions, which means that if deadlock is there, then these conditions satisfy. So, let me just tell you what do I mean by that"
      }
    ],
    "start": 105
  },
  {
    "id": 106,
    "lecture": 35,
    "title": "Deadlock conditions and resource graphs · Explore",
    "concept": "Deadlock is a set of processes waiting forever; four conditions must all hold for deadlock to be possible. A cycle is central evidence; with single-instance resource types it implies deadlock.",
    "teachingSteps": [
      "Watch one example unfold. Deadlock requires mutual exclusion, hold and wait, no preemption and circular wait together.",
      "A cycle is central evidence; with single-instance resource types it implies deadlock.",
      "Breaking any necessary condition can prevent deadlock, though the chosen policy has costs."
    ],
    "foundation": {
      "title": "Deadlock conditions and resource graphs",
      "idea": "Deadlock is a set of processes waiting forever; four conditions must all hold for deadlock to be possible.",
      "terms": [
        "Mutual exclusion: At least one resource can be held by only one process at a time.",
        "Hold and wait: A process holds resources while requesting more.",
        "Circular wait: Each process waits for a resource held by the next in a cycle."
      ],
      "example": "P1 holds printer and waits for scanner while P2 holds scanner and waits for printer; neither can proceed."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Deadlock conditions and resource graphs · Explore: The trace has just completed: Draw processes and resource ownership. Which action should happen next?",
        "options": [
          "Add an edge for each outstanding wait",
          "Draw processes and resource ownership",
          "Check whether wait edges form a cycle"
        ],
        "answer": 0,
        "explanation": "Add an edge for each outstanding wait. A cycle is central evidence; with single-instance resource types it implies deadlock."
      },
      {
        "type": "match",
        "prompt": "Deadlock conditions and resource graphs · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Hold and wait",
            "A process holds resources while requesting more."
          ],
          [
            "Circular wait",
            "Each process waits for a resource held by the next in a cycle."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Deadlock conditions and resource graphs · Explore: put the opening events in order.",
        "items": [
          "Draw processes and resource ownership",
          "Add an edge for each outstanding wait"
        ],
        "explanation": "Deadlock requires mutual exclusion, hold and wait, no preemption and circular wait together. A cycle is central evidence; with single-instance resource types it implies deadlock. Breaking any necessary condition can prevent deadlock, though the chosen policy has costs."
      },
      {
        "type": "number",
        "prompt": "Deadlock conditions and resource graphs · Explore: A fork trace has 5 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 32,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "5 successive forks double the process count at each level: 2^5 = 32."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "deadlock",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 649.71,
        "text": "that we talked about that okay P1 is holding one resource P2 is holding one resource and both are waiting for each other so there are many many reasons like why this deadlock is occurring so whenever there is a deadlock you will always see these four conditions okay these four conditions so these are necessary conditions what are those conditions let's just "
      },
      {
        "time": 1003.25,
        "text": "What are these conditions? Can I say that if these conditions satisfy, then deadlock will be there? Can I say these conditions satisfy, deadlock will be there? Actually, the answer is no. I mean, these conditions are the necessary conditions, which means that if deadlock is there, then these conditions satisfy. So, let me just tell you what do I mean by that"
      }
    ],
    "start": 106
  },
  {
    "id": 107,
    "lecture": 35,
    "title": "Deadlock conditions and resource graphs · Apply",
    "concept": "Deadlock is a set of processes waiting forever; four conditions must all hold for deadlock to be possible. Breaking any necessary condition can prevent deadlock, though the chosen policy has costs.",
    "teachingSteps": [
      "Use the idea in a new situation. Deadlock requires mutual exclusion, hold and wait, no preemption and circular wait together.",
      "A cycle is central evidence; with single-instance resource types it implies deadlock.",
      "Breaking any necessary condition can prevent deadlock, though the chosen policy has costs."
    ],
    "foundation": {
      "title": "Deadlock conditions and resource graphs",
      "idea": "Deadlock is a set of processes waiting forever; four conditions must all hold for deadlock to be possible.",
      "terms": [
        "Mutual exclusion: At least one resource can be held by only one process at a time.",
        "Hold and wait: A process holds resources while requesting more.",
        "Circular wait: Each process waits for a resource held by the next in a cycle."
      ],
      "example": "P1 holds printer and waits for scanner while P2 holds scanner and waits for printer; neither can proceed."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Deadlock conditions and resource graphs · Apply: In this new example, what should happen immediately before: Check whether wait edges form a cycle?",
        "options": [
          "Add an edge for each outstanding wait",
          "Check whether wait edges form a cycle",
          "Draw processes and resource ownership"
        ],
        "answer": 0,
        "explanation": "Add an edge for each outstanding wait must happen first. A cycle is central evidence; with single-instance resource types it implies deadlock."
      },
      {
        "type": "match",
        "prompt": "Deadlock conditions and resource graphs · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Circular wait",
            "Each process waits for a resource held by the next in a cycle."
          ],
          [
            "Mutual exclusion",
            "At least one resource can be held by only one process at a time."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Deadlock conditions and resource graphs · Apply: put the final handoff in order.",
        "items": [
          "Add an edge for each outstanding wait",
          "Check whether wait edges form a cycle"
        ],
        "explanation": "Deadlock requires mutual exclusion, hold and wait, no preemption and circular wait together. A cycle is central evidence; with single-instance resource types it implies deadlock. Breaking any necessary condition can prevent deadlock, though the chosen policy has costs."
      },
      {
        "type": "number",
        "prompt": "Deadlock conditions and resource graphs · Apply: A fork trace has 6 independent successful fork calls on every path. How many processes are created in total, including the original?",
        "answer": 64,
        "unit": "processes",
        "tolerance": 1e-8,
        "explanation": "6 successive forks double the process count at each level: 2^6 = 64."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "deadlock",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 649.71,
        "text": "that we talked about that okay P1 is holding one resource P2 is holding one resource and both are waiting for each other so there are many many reasons like why this deadlock is occurring so whenever there is a deadlock you will always see these four conditions okay these four conditions so these are necessary conditions what are those conditions let's just "
      },
      {
        "time": 1003.25,
        "text": "What are these conditions? Can I say that if these conditions satisfy, then deadlock will be there? Can I say these conditions satisfy, deadlock will be there? Actually, the answer is no. I mean, these conditions are the necessary conditions, which means that if deadlock is there, then these conditions satisfy. So, let me just tell you what do I mean by that"
      }
    ],
    "start": 107
  },
  {
    "id": 108,
    "lecture": 36,
    "title": "Banker’s algorithm and safe states · Discover",
    "concept": "Banker’s algorithm grants a resource request only when the remaining needs can still be satisfied in some safe completion order. The algorithm tracks maximum claims, current allocations and available resources.",
    "teachingSteps": [
      "Start with the moving parts. The algorithm tracks maximum claims, current allocations and available resources.",
      "A safe sequence is a proof that every process can finish in some order.",
      "Test a request on a temporary state; grant it only if the new state stays safe."
    ],
    "foundation": {
      "title": "Banker’s algorithm and safe states",
      "idea": "Banker’s algorithm grants a resource request only when the remaining needs can still be satisfied in some safe completion order.",
      "terms": [
        "Available: Currently free instances of each resource type.",
        "Need: Maximum claim minus current allocation.",
        "Safe sequence: An order in which each process can finish with resources available at its turn."
      ],
      "example": "If available resources can satisfy P1’s remaining need, P1 may finish and release its allocation for later processes."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Banker’s algorithm and safe states · Discover: A process needs at most 2 more units and 3 are currently available, can its remaining need be satisfied now?",
        "options": [
          "Yes",
          "No; available must exceed need",
          "Only if every other process finishes first"
        ],
        "answer": 0,
        "explanation": "Yes. Banker’s algorithm grants a resource request only when the remaining needs can still be satisfied in some safe completion order."
      },
      {
        "type": "match",
        "prompt": "Banker’s algorithm and safe states · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Available",
            "Currently free instances of each resource type."
          ],
          [
            "Need",
            "Maximum claim minus current allocation."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Banker’s algorithm and safe states · Discover: put these events in order.",
        "items": [
          "Compute each process remaining need",
          "Find a process whose need fits available resources",
          "Pretend it finishes and add its allocation back"
        ],
        "explanation": "The algorithm tracks maximum claims, current allocations and available resources. A safe sequence is a proof that every process can finish in some order. Test a request on a temporary state; grant it only if the new state stays safe."
      },
      {
        "type": "number",
        "prompt": "Banker’s algorithm and safe states · Discover: A process needs 2 more units. After it finishes, it releases its 1 allocated units. 2 units were available before it ran. How many are available afterward?",
        "answer": 3,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "2 available + 1 released = 3."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "banker",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 2402.64,
        "text": "Okay, so anyway, this is this is not really needed for gate. I just wanted to tell you that okay, you can actually write the algorithm. Okay, this is called banker's algorithm. I mean, exactly it is called safety checking algorithm. Okay, safety check."
      },
      {
        "time": 2421.06,
        "text": "Banker's algorithm is just like this only. I mean, it will be just calling this algorithm as a subroutine. Okay. There is just one more thing that you need to have. I mean, in the bankers algorithm. Anyway, is this algorithm clear that what is the safety check algorithm? How to check for the safety? This is just an example only. This is just this example. Ri"
      }
    ],
    "start": 108
  },
  {
    "id": 109,
    "lecture": 36,
    "title": "Banker’s algorithm and safe states · Explore",
    "concept": "Banker’s algorithm grants a resource request only when the remaining needs can still be satisfied in some safe completion order. A safe sequence is a proof that every process can finish in some order.",
    "teachingSteps": [
      "Watch one example unfold. The algorithm tracks maximum claims, current allocations and available resources.",
      "A safe sequence is a proof that every process can finish in some order.",
      "Test a request on a temporary state; grant it only if the new state stays safe."
    ],
    "foundation": {
      "title": "Banker’s algorithm and safe states",
      "idea": "Banker’s algorithm grants a resource request only when the remaining needs can still be satisfied in some safe completion order.",
      "terms": [
        "Available: Currently free instances of each resource type.",
        "Need: Maximum claim minus current allocation.",
        "Safe sequence: An order in which each process can finish with resources available at its turn."
      ],
      "example": "If available resources can satisfy P1’s remaining need, P1 may finish and release its allocation for later processes."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Banker’s algorithm and safe states · Explore: The trace has just completed: Compute each process remaining need. Which action should happen next?",
        "options": [
          "Find a process whose need fits available resources",
          "Compute each process remaining need",
          "Pretend it finishes and add its allocation back"
        ],
        "answer": 0,
        "explanation": "Find a process whose need fits available resources. A safe sequence is a proof that every process can finish in some order."
      },
      {
        "type": "match",
        "prompt": "Banker’s algorithm and safe states · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Need",
            "Maximum claim minus current allocation."
          ],
          [
            "Safe sequence",
            "An order in which each process can finish with resources available at its turn."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Banker’s algorithm and safe states · Explore: put the opening events in order.",
        "items": [
          "Compute each process remaining need",
          "Find a process whose need fits available resources"
        ],
        "explanation": "The algorithm tracks maximum claims, current allocations and available resources. A safe sequence is a proof that every process can finish in some order. Test a request on a temporary state; grant it only if the new state stays safe."
      },
      {
        "type": "number",
        "prompt": "Banker’s algorithm and safe states · Explore: A process needs 2 more units. After it finishes, it releases its 1 allocated units. 3 units were available before it ran. How many are available afterward?",
        "answer": 4,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "3 available + 1 released = 4."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "banker",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 2402.64,
        "text": "Okay, so anyway, this is this is not really needed for gate. I just wanted to tell you that okay, you can actually write the algorithm. Okay, this is called banker's algorithm. I mean, exactly it is called safety checking algorithm. Okay, safety check."
      },
      {
        "time": 2421.06,
        "text": "Banker's algorithm is just like this only. I mean, it will be just calling this algorithm as a subroutine. Okay. There is just one more thing that you need to have. I mean, in the bankers algorithm. Anyway, is this algorithm clear that what is the safety check algorithm? How to check for the safety? This is just an example only. This is just this example. Ri"
      }
    ],
    "start": 109
  },
  {
    "id": 110,
    "lecture": 36,
    "title": "Banker’s algorithm and safe states · Apply",
    "concept": "Banker’s algorithm grants a resource request only when the remaining needs can still be satisfied in some safe completion order. Test a request on a temporary state; grant it only if the new state stays safe.",
    "teachingSteps": [
      "Use the idea in a new situation. The algorithm tracks maximum claims, current allocations and available resources.",
      "A safe sequence is a proof that every process can finish in some order.",
      "Test a request on a temporary state; grant it only if the new state stays safe."
    ],
    "foundation": {
      "title": "Banker’s algorithm and safe states",
      "idea": "Banker’s algorithm grants a resource request only when the remaining needs can still be satisfied in some safe completion order.",
      "terms": [
        "Available: Currently free instances of each resource type.",
        "Need: Maximum claim minus current allocation.",
        "Safe sequence: An order in which each process can finish with resources available at its turn."
      ],
      "example": "If available resources can satisfy P1’s remaining need, P1 may finish and release its allocation for later processes."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Banker’s algorithm and safe states · Apply: In this new example, what should happen immediately before: Pretend it finishes and add its allocation back?",
        "options": [
          "Find a process whose need fits available resources",
          "Pretend it finishes and add its allocation back",
          "Compute each process remaining need"
        ],
        "answer": 0,
        "explanation": "Find a process whose need fits available resources must happen first. A safe sequence is a proof that every process can finish in some order."
      },
      {
        "type": "match",
        "prompt": "Banker’s algorithm and safe states · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Safe sequence",
            "An order in which each process can finish with resources available at its turn."
          ],
          [
            "Available",
            "Currently free instances of each resource type."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Banker’s algorithm and safe states · Apply: put the final handoff in order.",
        "items": [
          "Find a process whose need fits available resources",
          "Pretend it finishes and add its allocation back"
        ],
        "explanation": "The algorithm tracks maximum claims, current allocations and available resources. A safe sequence is a proof that every process can finish in some order. Test a request on a temporary state; grant it only if the new state stays safe."
      },
      {
        "type": "number",
        "prompt": "Banker’s algorithm and safe states · Apply: A process needs 2 more units. After it finishes, it releases its 1 allocated units. 4 units were available before it ran. How many are available afterward?",
        "answer": 5,
        "unit": "units",
        "tolerance": 1e-8,
        "explanation": "4 available + 1 released = 5."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "banker",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 2402.64,
        "text": "Okay, so anyway, this is this is not really needed for gate. I just wanted to tell you that okay, you can actually write the algorithm. Okay, this is called banker's algorithm. I mean, exactly it is called safety checking algorithm. Okay, safety check."
      },
      {
        "time": 2421.06,
        "text": "Banker's algorithm is just like this only. I mean, it will be just calling this algorithm as a subroutine. Okay. There is just one more thing that you need to have. I mean, in the bankers algorithm. Anyway, is this algorithm clear that what is the safety check algorithm? How to check for the safety? This is just an example only. This is just this example. Ri"
      }
    ],
    "start": 110
  },
  {
    "id": 111,
    "lecture": 37,
    "title": "Disk layout and file allocation · Discover",
    "concept": "A file system maps human-readable names to metadata and disk blocks using an allocation strategy. The directory helps resolve a name; the file record stores attributes and block locations.",
    "teachingSteps": [
      "Start with the moving parts. The directory helps resolve a name; the file record stores attributes and block locations.",
      "Contiguous allocation is fast for sequential access but difficult to extend.",
      "Linked and indexed allocation allow scattered blocks with different access and space costs."
    ],
    "foundation": {
      "title": "Disk layout and file allocation",
      "idea": "A file system maps human-readable names to metadata and disk blocks using an allocation strategy.",
      "terms": [
        "Directory: A mapping from names to file metadata or entries.",
        "Inode or file record: Metadata that identifies a file and its data blocks.",
        "Indexed allocation: A block of pointers identifies a file’s data blocks."
      ],
      "example": "An indexed file can reach block 90 through its index even when its data blocks are not adjacent."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Disk layout and file allocation · Discover: A file uses indexed allocation and its index points to data blocks 4, 12 and 90, must those three data blocks be adjacent on disk?",
        "options": [
          "No",
          "Yes; indexing requires consecutive blocks",
          "Yes, unless the file is empty"
        ],
        "answer": 0,
        "explanation": "No. A file system maps human-readable names to metadata and disk blocks using an allocation strategy."
      },
      {
        "type": "match",
        "prompt": "Disk layout and file allocation · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Directory",
            "A mapping from names to file metadata or entries."
          ],
          [
            "Inode or file record",
            "Metadata that identifies a file and its data blocks."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Disk layout and file allocation · Discover: put these events in order.",
        "items": [
          "Resolve a path name through directories",
          "Read file metadata to find its allocation",
          "Follow allocation pointers to data blocks"
        ],
        "explanation": "The directory helps resolve a name; the file record stores attributes and block locations. Contiguous allocation is fast for sequential access but difficult to extend. Linked and indexed allocation allow scattered blocks with different access and space costs."
      },
      {
        "type": "number",
        "prompt": "Disk layout and file allocation · Discover: A disk head moves from cylinder 279 to cylinder 284. How many cylinders does it travel?",
        "answer": 5,
        "unit": "cylinders",
        "tolerance": 1e-8,
        "explanation": "Movement is the absolute difference: 284 − 279 = 5."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "filesystem",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 3932.95,
        "text": "So till now we have not studied much just I convinced you that what is the inode and now we are going to see that how to store those files on the disk and then we will see that what are the advantages and disadvantages of these storage techniques. So first method is contiguous allocation which means if this is a file"
      },
      {
        "time": 5293.62,
        "text": "And what is the advantage I will talk about, but is the idea clear that what we are doing? So instead of storing the pointers here, I will store the pointers in one table. So what does this fact says, store linked list pointers outside the block in a file allocation table. One entry for each block. So if you have in your disk, if you have let's suppose a tho"
      }
    ],
    "start": 111
  },
  {
    "id": 112,
    "lecture": 37,
    "title": "Disk layout and file allocation · Explore",
    "concept": "A file system maps human-readable names to metadata and disk blocks using an allocation strategy. Contiguous allocation is fast for sequential access but difficult to extend.",
    "teachingSteps": [
      "Watch one example unfold. The directory helps resolve a name; the file record stores attributes and block locations.",
      "Contiguous allocation is fast for sequential access but difficult to extend.",
      "Linked and indexed allocation allow scattered blocks with different access and space costs."
    ],
    "foundation": {
      "title": "Disk layout and file allocation",
      "idea": "A file system maps human-readable names to metadata and disk blocks using an allocation strategy.",
      "terms": [
        "Directory: A mapping from names to file metadata or entries.",
        "Inode or file record: Metadata that identifies a file and its data blocks.",
        "Indexed allocation: A block of pointers identifies a file’s data blocks."
      ],
      "example": "An indexed file can reach block 90 through its index even when its data blocks are not adjacent."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Disk layout and file allocation · Explore: The trace has just completed: Resolve a path name through directories. Which action should happen next?",
        "options": [
          "Read file metadata to find its allocation",
          "Resolve a path name through directories",
          "Follow allocation pointers to data blocks"
        ],
        "answer": 0,
        "explanation": "Read file metadata to find its allocation. Contiguous allocation is fast for sequential access but difficult to extend."
      },
      {
        "type": "match",
        "prompt": "Disk layout and file allocation · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Inode or file record",
            "Metadata that identifies a file and its data blocks."
          ],
          [
            "Indexed allocation",
            "A block of pointers identifies a file’s data blocks."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Disk layout and file allocation · Explore: put the opening events in order.",
        "items": [
          "Resolve a path name through directories",
          "Read file metadata to find its allocation"
        ],
        "explanation": "The directory helps resolve a name; the file record stores attributes and block locations. Contiguous allocation is fast for sequential access but difficult to extend. Linked and indexed allocation allow scattered blocks with different access and space costs."
      },
      {
        "type": "number",
        "prompt": "Disk layout and file allocation · Explore: A disk head moves from cylinder 282 to cylinder 288. How many cylinders does it travel?",
        "answer": 6,
        "unit": "cylinders",
        "tolerance": 1e-8,
        "explanation": "Movement is the absolute difference: 288 − 282 = 6."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "filesystem",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 3932.95,
        "text": "So till now we have not studied much just I convinced you that what is the inode and now we are going to see that how to store those files on the disk and then we will see that what are the advantages and disadvantages of these storage techniques. So first method is contiguous allocation which means if this is a file"
      },
      {
        "time": 5293.62,
        "text": "And what is the advantage I will talk about, but is the idea clear that what we are doing? So instead of storing the pointers here, I will store the pointers in one table. So what does this fact says, store linked list pointers outside the block in a file allocation table. One entry for each block. So if you have in your disk, if you have let's suppose a tho"
      }
    ],
    "start": 112
  },
  {
    "id": 113,
    "lecture": 37,
    "title": "Disk layout and file allocation · Apply",
    "concept": "A file system maps human-readable names to metadata and disk blocks using an allocation strategy. Linked and indexed allocation allow scattered blocks with different access and space costs.",
    "teachingSteps": [
      "Use the idea in a new situation. The directory helps resolve a name; the file record stores attributes and block locations.",
      "Contiguous allocation is fast for sequential access but difficult to extend.",
      "Linked and indexed allocation allow scattered blocks with different access and space costs."
    ],
    "foundation": {
      "title": "Disk layout and file allocation",
      "idea": "A file system maps human-readable names to metadata and disk blocks using an allocation strategy.",
      "terms": [
        "Directory: A mapping from names to file metadata or entries.",
        "Inode or file record: Metadata that identifies a file and its data blocks.",
        "Indexed allocation: A block of pointers identifies a file’s data blocks."
      ],
      "example": "An indexed file can reach block 90 through its index even when its data blocks are not adjacent."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "Disk layout and file allocation · Apply: In this new example, what should happen immediately before: Follow allocation pointers to data blocks?",
        "options": [
          "Read file metadata to find its allocation",
          "Follow allocation pointers to data blocks",
          "Resolve a path name through directories"
        ],
        "answer": 0,
        "explanation": "Read file metadata to find its allocation must happen first. Contiguous allocation is fast for sequential access but difficult to extend."
      },
      {
        "type": "match",
        "prompt": "Disk layout and file allocation · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Indexed allocation",
            "A block of pointers identifies a file’s data blocks."
          ],
          [
            "Directory",
            "A mapping from names to file metadata or entries."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "Disk layout and file allocation · Apply: put the final handoff in order.",
        "items": [
          "Read file metadata to find its allocation",
          "Follow allocation pointers to data blocks"
        ],
        "explanation": "The directory helps resolve a name; the file record stores attributes and block locations. Contiguous allocation is fast for sequential access but difficult to extend. Linked and indexed allocation allow scattered blocks with different access and space costs."
      },
      {
        "type": "number",
        "prompt": "Disk layout and file allocation · Apply: A disk head moves from cylinder 285 to cylinder 292. How many cylinders does it travel?",
        "answer": 7,
        "unit": "cylinders",
        "tolerance": 1e-8,
        "explanation": "Movement is the absolute difference: 292 − 285 = 7."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "filesystem",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 3932.95,
        "text": "So till now we have not studied much just I convinced you that what is the inode and now we are going to see that how to store those files on the disk and then we will see that what are the advantages and disadvantages of these storage techniques. So first method is contiguous allocation which means if this is a file"
      },
      {
        "time": 5293.62,
        "text": "And what is the advantage I will talk about, but is the idea clear that what we are doing? So instead of storing the pointers here, I will store the pointers in one table. So what does this fact says, store linked list pointers outside the block in a file allocation table. One entry for each block. So if you have in your disk, if you have let's suppose a tho"
      }
    ],
    "start": 113
  },
  {
    "id": 114,
    "lecture": 38,
    "title": "File-system and disk scheduling practice · Discover",
    "concept": "Storage performance depends on how a file maps to blocks and how the disk device orders requests. A file system translates names and offsets to storage blocks.",
    "teachingSteps": [
      "Start with the moving parts. A file system translates names and offsets to storage blocks.",
      "Disk scheduling can reduce movement when requests are spread across tracks.",
      "Measure both total movement and fairness; a shortest-seek choice may delay distant requests."
    ],
    "foundation": {
      "title": "File-system and disk scheduling practice",
      "idea": "Storage performance depends on how a file maps to blocks and how the disk device orders requests.",
      "terms": [
        "Seek: Movement of a disk head to a track or cylinder.",
        "Contiguous blocks: Adjacent disk blocks used by one file.",
        "Free-space map: Metadata that tracks which storage blocks are unused."
      ],
      "example": "A request sequence can be served in arrival order or reordered to reduce head movement; the policy changes waiting fairness."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "File-system and disk scheduling practice · Discover: A disk head is at cylinder 40 and the next request is cylinder 46, how many cylinders of movement are required?",
        "options": [
          "6",
          "86",
          "40"
        ],
        "answer": 0,
        "explanation": "6. Storage performance depends on how a file maps to blocks and how the disk device orders requests."
      },
      {
        "type": "match",
        "prompt": "File-system and disk scheduling practice · Discover: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Seek",
            "Movement of a disk head to a track or cylinder."
          ],
          [
            "Contiguous blocks",
            "Adjacent disk blocks used by one file."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "File-system and disk scheduling practice · Discover: put these events in order.",
        "items": [
          "Locate the requested file block",
          "Place its disk request in the device queue",
          "Schedule a request and update the head position"
        ],
        "explanation": "A file system translates names and offsets to storage blocks. Disk scheduling can reduce movement when requests are spread across tracks. Measure both total movement and fairness; a shortest-seek choice may delay distant requests."
      },
      {
        "type": "number",
        "prompt": "File-system and disk scheduling practice · Discover: A disk head moves from cylinder 286 to cylinder 292. How many cylinders does it travel?",
        "answer": 6,
        "unit": "cylinders",
        "tolerance": 1e-8,
        "explanation": "Movement is the absolute difference: 292 − 286 = 6."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "filesystem",
    "osStage": 0,
    "sourceEvidence": [
      {
        "time": 1609.37,
        "text": "now they are saying consider file system with 4096 blocks and 32 bit disk block for direct and direct okay so you can calculate the maximum exercise right or maybe let's just do this question for the sake of practice consider file system with 4096 byte blocks okay so block size is given to us which is 4096 bytes and 32 bit disk what does this mean"
      },
      {
        "time": 2708.8,
        "text": "in a computer system 4 files sizes of this 4 files of sizes this this this and this so they are having 4 files and they want to store the 4 files 1 file size is 1 1 0 5 0 bytes another file size is something 4 9 9 0 bytes 5 1 7 0 bytes and 1 2 6 4 0 bytes so these are the 4 files that you want to store for storing these files on the disk we can either"
      }
    ],
    "start": 114
  },
  {
    "id": 115,
    "lecture": 38,
    "title": "File-system and disk scheduling practice · Explore",
    "concept": "Storage performance depends on how a file maps to blocks and how the disk device orders requests. Disk scheduling can reduce movement when requests are spread across tracks.",
    "teachingSteps": [
      "Watch one example unfold. A file system translates names and offsets to storage blocks.",
      "Disk scheduling can reduce movement when requests are spread across tracks.",
      "Measure both total movement and fairness; a shortest-seek choice may delay distant requests."
    ],
    "foundation": {
      "title": "File-system and disk scheduling practice",
      "idea": "Storage performance depends on how a file maps to blocks and how the disk device orders requests.",
      "terms": [
        "Seek: Movement of a disk head to a track or cylinder.",
        "Contiguous blocks: Adjacent disk blocks used by one file.",
        "Free-space map: Metadata that tracks which storage blocks are unused."
      ],
      "example": "A request sequence can be served in arrival order or reordered to reduce head movement; the policy changes waiting fairness."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "File-system and disk scheduling practice · Explore: The trace has just completed: Locate the requested file block. Which action should happen next?",
        "options": [
          "Place its disk request in the device queue",
          "Locate the requested file block",
          "Schedule a request and update the head position"
        ],
        "answer": 0,
        "explanation": "Place its disk request in the device queue. Disk scheduling can reduce movement when requests are spread across tracks."
      },
      {
        "type": "match",
        "prompt": "File-system and disk scheduling practice · Explore: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Contiguous blocks",
            "Adjacent disk blocks used by one file."
          ],
          [
            "Free-space map",
            "Metadata that tracks which storage blocks are unused."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "File-system and disk scheduling practice · Explore: put the opening events in order.",
        "items": [
          "Locate the requested file block",
          "Place its disk request in the device queue"
        ],
        "explanation": "A file system translates names and offsets to storage blocks. Disk scheduling can reduce movement when requests are spread across tracks. Measure both total movement and fairness; a shortest-seek choice may delay distant requests."
      },
      {
        "type": "number",
        "prompt": "File-system and disk scheduling practice · Explore: A disk head moves from cylinder 289 to cylinder 296. How many cylinders does it travel?",
        "answer": 7,
        "unit": "cylinders",
        "tolerance": 1e-8,
        "explanation": "Movement is the absolute difference: 296 − 289 = 7."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "filesystem",
    "osStage": 1,
    "sourceEvidence": [
      {
        "time": 1609.37,
        "text": "now they are saying consider file system with 4096 blocks and 32 bit disk block for direct and direct okay so you can calculate the maximum exercise right or maybe let's just do this question for the sake of practice consider file system with 4096 byte blocks okay so block size is given to us which is 4096 bytes and 32 bit disk what does this mean"
      },
      {
        "time": 2708.8,
        "text": "in a computer system 4 files sizes of this 4 files of sizes this this this and this so they are having 4 files and they want to store the 4 files 1 file size is 1 1 0 5 0 bytes another file size is something 4 9 9 0 bytes 5 1 7 0 bytes and 1 2 6 4 0 bytes so these are the 4 files that you want to store for storing these files on the disk we can either"
      }
    ],
    "start": 115
  },
  {
    "id": 116,
    "lecture": 38,
    "title": "File-system and disk scheduling practice · Apply",
    "concept": "Storage performance depends on how a file maps to blocks and how the disk device orders requests. Measure both total movement and fairness; a shortest-seek choice may delay distant requests.",
    "teachingSteps": [
      "Use the idea in a new situation. A file system translates names and offsets to storage blocks.",
      "Disk scheduling can reduce movement when requests are spread across tracks.",
      "Measure both total movement and fairness; a shortest-seek choice may delay distant requests."
    ],
    "foundation": {
      "title": "File-system and disk scheduling practice",
      "idea": "Storage performance depends on how a file maps to blocks and how the disk device orders requests.",
      "terms": [
        "Seek: Movement of a disk head to a track or cylinder.",
        "Contiguous blocks: Adjacent disk blocks used by one file.",
        "Free-space map: Metadata that tracks which storage blocks are unused."
      ],
      "example": "A request sequence can be served in arrival order or reordered to reduce head movement; the policy changes waiting fairness."
    },
    "questions": [
      {
        "type": "choice",
        "prompt": "File-system and disk scheduling practice · Apply: In this new example, what should happen immediately before: Schedule a request and update the head position?",
        "options": [
          "Place its disk request in the device queue",
          "Schedule a request and update the head position",
          "Locate the requested file block"
        ],
        "answer": 0,
        "explanation": "Place its disk request in the device queue must happen first. Disk scheduling can reduce movement when requests are spread across tracks."
      },
      {
        "type": "match",
        "prompt": "File-system and disk scheduling practice · Apply: match the two roles used in this part of the example.",
        "pairs": [
          [
            "Free-space map",
            "Metadata that tracks which storage blocks are unused."
          ],
          [
            "Seek",
            "Movement of a disk head to a track or cylinder."
          ]
        ],
        "explanation": "Each definition names a distinct role in this operating-system example."
      },
      {
        "type": "order",
        "prompt": "File-system and disk scheduling practice · Apply: put the final handoff in order.",
        "items": [
          "Place its disk request in the device queue",
          "Schedule a request and update the head position"
        ],
        "explanation": "A file system translates names and offsets to storage blocks. Disk scheduling can reduce movement when requests are spread across tracks. Measure both total movement and fairness; a shortest-seek choice may delay distant requests."
      },
      {
        "type": "number",
        "prompt": "File-system and disk scheduling practice · Apply: A disk head moves from cylinder 292 to cylinder 300. How many cylinders does it travel?",
        "answer": 8,
        "unit": "cylinders",
        "tolerance": 1e-8,
        "explanation": "Movement is the absolute difference: 300 − 292 = 8."
      }
    ],
    "minutes": 4,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "osLab": "filesystem",
    "osStage": 2,
    "sourceEvidence": [
      {
        "time": 1609.37,
        "text": "now they are saying consider file system with 4096 blocks and 32 bit disk block for direct and direct okay so you can calculate the maximum exercise right or maybe let's just do this question for the sake of practice consider file system with 4096 byte blocks okay so block size is given to us which is 4096 bytes and 32 bit disk what does this mean"
      },
      {
        "time": 2708.8,
        "text": "in a computer system 4 files sizes of this 4 files of sizes this this this and this so they are having 4 files and they want to store the 4 files 1 file size is 1 1 0 5 0 bytes another file size is something 4 9 9 0 bytes 5 1 7 0 bytes and 1 2 6 4 0 bytes so these are the 4 files that you want to store for storing these files on the disk we can either"
      }
    ],
    "start": 116
  }
];

import {attachTeachingNotes} from '../../../packages/learning/instructional-notes.js';
import {teachingNotes} from './teaching-notes.js';
attachTeachingNotes(lessons,teachingNotes,'os');
