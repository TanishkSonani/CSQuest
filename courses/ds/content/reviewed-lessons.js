// Generated from original authored teaching and completed source evidence.
export const lessons=[
  {
    "id": 0,
    "lecture": 0,
    "title": "Choose a container",
    "concept": "A data structure organizes values so useful operations can be performed. Choose it from the access and update operations the task needs, rather than from how its picture looks.",
    "teachingSteps": [
      "Name the values and operations first.",
      "A stack serves the most recent item; a queue serves the oldest waiting item.",
      "A linked list follows links; an array provides indexed positions."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "A printer must serve the oldest waiting job first. Which contract fits?",
        "options": [
          "Queue",
          "Stack",
          "An operation with arbitrary removal"
        ],
        "answer": 0,
        "explanation": "FIFO serves the oldest waiting item."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Stack",
            "Most recent item first"
          ],
          [
            "Queue",
            "Oldest waiting item first"
          ],
          [
            "ADT",
            "Operation contract independent of implementation"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "A container begins with 3 values. Add two values without removing any. How many values remain?",
        "answer": 5,
        "explanation": "Insertions increase the count by two.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      },
      {
        "type": "number",
        "prompt": "The same original container removes one of its 3 values. How many remain?",
        "answer": 2,
        "explanation": "Remove exactly one stored value.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "list",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 0,
        "file": "000. 1a. Introduction to Data Structures.mp4",
        "start": 0,
        "end": 29.28,
        "text": "Hi everyone, my name is Sachin Mithal and I welcome you all for data structures course. So today is the first lecture and before we start let me introduce myself. I'm Sachin as I just said I'm co-founder and instructor at Go classes. I have done my master's from IIC Bangalore. Also I have worked at Amazon as an applied scientist. I have achieved gate all-in here in 33. So this is my brief description. Let's just start data structures."
      },
      {
        "lecture": 0,
        "file": "000. 1a. Introduction to Data Structures.mp4",
        "start": 30.19,
        "end": 62.44,
        "text": "So what is a data structure? As a name suggests, it's a data structure, which means that it should be structuring some data, which means that given a data, it is supposed to structure something, right? So let's see with the practical example. Like on a higher level, on a superficial level, on a super higher level, it is a container for a data. So with the practical example,"
      },
      {
        "lecture": 0,
        "file": "000. 1a. Introduction to Data Structures.mp4",
        "start": 62.81,
        "end": 87.1,
        "text": "suppose that this is you and you have sandwich in your hand and your question is that what should I put my sandwich in now there are a couple of options like there are a couple of containers as I just said that it is on a higher level it is a container for the data so in this case suppose we have the sandwich as in data and these are the containers"
      }
    ],
    "foundation": {
      "title": "Choosing a data structure",
      "idea": "A data structure organizes values so useful operations can be performed. Choose it from the access and update operations the task needs, rather than from how its picture looks.",
      "terms": [
        "Data: the stored values.",
        "Operation: an action such as insert, remove or inspect.",
        "ADT: an operation contract independent of its implementation."
      ],
      "example": "An undo history needs the most recent action first, so a stack is a natural contract."
    }
  },
  {
    "id": 1,
    "lecture": 0,
    "title": "Match operations to needs",
    "concept": "A data structure organizes values so useful operations can be performed. Choose it from the access and update operations the task needs, rather than from how its picture looks.",
    "teachingSteps": [
      "Name the values and operations first.",
      "A stack serves the most recent item; a queue serves the oldest waiting item.",
      "A linked list follows links; an array provides indexed positions."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "An undo history must remove the latest action first. Which contract fits?",
        "options": [
          "Queue",
          "Always the oldest saved action",
          "Stack"
        ],
        "answer": 2,
        "explanation": "LIFO serves the most recent insertion."
      },
      {
        "type": "number",
        "prompt": "A new empty container has no values yet. What is its stored-value count?",
        "answer": 0,
        "explanation": "Empty means zero stored values.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": []
        }
      },
      {
        "type": "number",
        "prompt": "A container holds the pictured values. What is their total?",
        "answer": 18,
        "explanation": "Add the stated payloads once each.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Identify the values to store",
          "List required access and update operations",
          "Choose a contract matching those needs",
          "Select a suitable implementation"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "list",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 0,
        "file": "000. 1a. Introduction to Data Structures.mp4",
        "start": 0,
        "end": 29.28,
        "text": "Hi everyone, my name is Sachin Mithal and I welcome you all for data structures course. So today is the first lecture and before we start let me introduce myself. I'm Sachin as I just said I'm co-founder and instructor at Go classes. I have done my master's from IIC Bangalore. Also I have worked at Amazon as an applied scientist. I have achieved gate all-in here in 33. So this is my brief description. Let's just start data structures."
      },
      {
        "lecture": 0,
        "file": "000. 1a. Introduction to Data Structures.mp4",
        "start": 30.19,
        "end": 62.44,
        "text": "So what is a data structure? As a name suggests, it's a data structure, which means that it should be structuring some data, which means that given a data, it is supposed to structure something, right? So let's see with the practical example. Like on a higher level, on a superficial level, on a super higher level, it is a container for a data. So with the practical example,"
      },
      {
        "lecture": 0,
        "file": "000. 1a. Introduction to Data Structures.mp4",
        "start": 62.81,
        "end": 87.1,
        "text": "suppose that this is you and you have sandwich in your hand and your question is that what should I put my sandwich in now there are a couple of options like there are a couple of containers as I just said that it is on a higher level it is a container for the data so in this case suppose we have the sandwich as in data and these are the containers"
      }
    ],
    "foundation": {
      "title": "Choosing a data structure",
      "idea": "A data structure organizes values so useful operations can be performed. Choose it from the access and update operations the task needs, rather than from how its picture looks.",
      "terms": [
        "Data: the stored values.",
        "Operation: an action such as insert, remove or inspect.",
        "ADT: an operation contract independent of its implementation."
      ],
      "example": "An undo history needs the most recent action first, so a stack is a natural contract."
    }
  },
  {
    "id": 2,
    "lecture": 0,
    "title": "Solve a storage scenario",
    "concept": "A data structure organizes values so useful operations can be performed. Choose it from the access and update operations the task needs, rather than from how its picture looks.",
    "teachingSteps": [
      "Name the values and operations first.",
      "A stack serves the most recent item; a queue serves the oldest waiting item.",
      "A linked list follows links; an array provides indexed positions."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "What should guide the choice of a data structure?",
        "options": [
          "Its name length",
          "The operations and access patterns needed",
          "Only the number of colors in its drawing"
        ],
        "answer": 1,
        "explanation": "Representation supports the operations required by the task."
      },
      {
        "type": "number",
        "prompt": "Start with 3 waiting jobs. Two arrive and three are served. How many jobs remain?",
        "answer": 2,
        "explanation": "The net change is plus two minus three.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "What does an abstract data type specify?",
        "options": [
          "One mandatory memory address layout",
          "A particular processor clock speed",
          "Supported operations and their behavior"
        ],
        "answer": 2,
        "explanation": "The operation contract is independent of implementation."
      },
      {
        "type": "number",
        "prompt": "Start with 3 saved actions, then save one and undo one. How many saved actions remain?",
        "answer": 3,
        "explanation": "One insertion and one removal cancel in the count.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "list",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 0,
        "file": "000. 1a. Introduction to Data Structures.mp4",
        "start": 0,
        "end": 29.28,
        "text": "Hi everyone, my name is Sachin Mithal and I welcome you all for data structures course. So today is the first lecture and before we start let me introduce myself. I'm Sachin as I just said I'm co-founder and instructor at Go classes. I have done my master's from IIC Bangalore. Also I have worked at Amazon as an applied scientist. I have achieved gate all-in here in 33. So this is my brief description. Let's just start data structures."
      },
      {
        "lecture": 0,
        "file": "000. 1a. Introduction to Data Structures.mp4",
        "start": 30.19,
        "end": 62.44,
        "text": "So what is a data structure? As a name suggests, it's a data structure, which means that it should be structuring some data, which means that given a data, it is supposed to structure something, right? So let's see with the practical example. Like on a higher level, on a superficial level, on a super higher level, it is a container for a data. So with the practical example,"
      },
      {
        "lecture": 0,
        "file": "000. 1a. Introduction to Data Structures.mp4",
        "start": 62.81,
        "end": 87.1,
        "text": "suppose that this is you and you have sandwich in your hand and your question is that what should I put my sandwich in now there are a couple of options like there are a couple of containers as I just said that it is on a higher level it is a container for the data so in this case suppose we have the sandwich as in data and these are the containers"
      }
    ],
    "foundation": {
      "title": "Choosing a data structure",
      "idea": "A data structure organizes values so useful operations can be performed. Choose it from the access and update operations the task needs, rather than from how its picture looks.",
      "terms": [
        "Data: the stored values.",
        "Operation: an action such as insert, remove or inspect.",
        "ADT: an operation contract independent of its implementation."
      ],
      "example": "An undo history needs the most recent action first, so a stack is a natural contract."
    }
  },
  {
    "id": 3,
    "lecture": 1,
    "title": "Read a node",
    "concept": "A singly linked node stores a payload and a next link. The head identifies the first node; following next reaches the remaining nodes. NULL denotes no node, not a node with value zero.",
    "teachingSteps": [
      "Start from head, not from a guessed address.",
      "Read a payload only after confirming the pointer is not NULL.",
      "Move through next until no node remains."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "An undo action must use the most recent saved action first. Which contract fits?",
        "options": [
          "Queue",
          "Always an indexed array",
          "Stack"
        ],
        "answer": 2,
        "explanation": "A stack removes the most recent insertion."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "head",
            "First node reference"
          ],
          [
            "next",
            "Successor reference"
          ],
          [
            "NULL",
            "No node"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "A NULL-terminated list stores 3, 6, 9, 12. How many real nodes are reachable?",
        "answer": 4,
        "explanation": "Count payload nodes; NULL is not an extra node.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Follow next from the first node to the last in this 4-node list. How many links are followed?",
        "answer": 3,
        "explanation": "The first node is already reached; every next hop advances one position.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "list",
    "start": 0.53,
    "sourceReferences": [
      {
        "lecture": 1,
        "file": "001. 2 Introduction to Linked list.mp4",
        "start": 0.53,
        "end": 25.05,
        "text": "What is a linked list is basically a list of linked data? Okay, so it looks like this it looks like a list and It is a linked list. So basically everything is pointing to each other like that Okay, it is basic type of linked list if last pointed last node is not pointing to anything then we will say it is pointing to null So either you represent none like this"
      },
      {
        "lecture": 1,
        "file": "001. 2 Introduction to Linked list.mp4",
        "start": 53.52,
        "end": 80.34,
        "text": "but let's see this in more detail which means how programmatically I can make a linked list and what are these nodes and like how to make these nodes and all right what are these nodes how to make these nodes let's see this in this lecture only suppose if I go back to C programming definitions of this strut then suppose if I if I want to define some strut node like this then what is the what does this mean it means"
      },
      {
        "lecture": 1,
        "file": "001. 2 Introduction to Linked list.mp4",
        "start": 80.66,
        "end": 110.4,
        "text": "that currently like there is no memory allocated but if you if you define some variable maybe t or something then there will be a memory but it means that there is a box or there is a struct in which there are two members one is data another one is next right next is supposed to be a pointer of what type of struct node type which means that next holds some address of a struct node which means it points to struct node"
      }
    ],
    "foundation": {
      "title": "Nodes and links",
      "idea": "A singly linked node stores a payload and a next link. The head identifies the first node; following next reaches the remaining nodes. NULL denotes no node, not a node with value zero.",
      "terms": [
        "Payload: the value inside a node.",
        "Link: a reference to another node.",
        "Head: a reference to the first node."
      ],
      "example": "Head -> 3 -> 6 -> NULL contains two nodes; NULL is not counted."
    }
  },
  {
    "id": 4,
    "lecture": 1,
    "title": "Follow next links",
    "concept": "A singly linked node stores a payload and a next link. The head identifies the first node; following next reaches the remaining nodes. NULL denotes no node, not a node with value zero.",
    "teachingSteps": [
      "Start from head, not from a guessed address.",
      "Read a payload only after confirming the pointer is not NULL.",
      "Move through next until no node remains."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "A live node stores payload 0 and next=NULL. What does that mean?",
        "options": [
          "An invalid node because zero is not allowed",
          "One node whose payload is zero",
          "An empty list"
        ],
        "answer": 1,
        "explanation": "NULL in the next field terminates the chain; zero is a valid payload."
      },
      {
        "type": "number",
        "prompt": "Visit every node and add its payload. What sum is returned?",
        "answer": 30,
        "explanation": "The payloads are 3 times 1 through n; add each once.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      },
      {
        "type": "number",
        "prompt": "An empty list has head=NULL. How many payloads can safely be printed?",
        "answer": 0,
        "explanation": "There is no node to dereference.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": []
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Copy head into a cursor",
          "Check whether cursor is NULL",
          "Process the live node",
          "Advance through next"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "list",
    "start": 0.53,
    "sourceReferences": [
      {
        "lecture": 1,
        "file": "001. 2 Introduction to Linked list.mp4",
        "start": 0.53,
        "end": 25.05,
        "text": "What is a linked list is basically a list of linked data? Okay, so it looks like this it looks like a list and It is a linked list. So basically everything is pointing to each other like that Okay, it is basic type of linked list if last pointed last node is not pointing to anything then we will say it is pointing to null So either you represent none like this"
      },
      {
        "lecture": 1,
        "file": "001. 2 Introduction to Linked list.mp4",
        "start": 53.52,
        "end": 80.34,
        "text": "but let's see this in more detail which means how programmatically I can make a linked list and what are these nodes and like how to make these nodes and all right what are these nodes how to make these nodes let's see this in this lecture only suppose if I go back to C programming definitions of this strut then suppose if I if I want to define some strut node like this then what is the what does this mean it means"
      },
      {
        "lecture": 1,
        "file": "001. 2 Introduction to Linked list.mp4",
        "start": 80.66,
        "end": 110.4,
        "text": "that currently like there is no memory allocated but if you if you define some variable maybe t or something then there will be a memory but it means that there is a box or there is a struct in which there are two members one is data another one is next right next is supposed to be a pointer of what type of struct node type which means that next holds some address of a struct node which means it points to struct node"
      }
    ],
    "foundation": {
      "title": "Nodes and links",
      "idea": "A singly linked node stores a payload and a next link. The head identifies the first node; following next reaches the remaining nodes. NULL denotes no node, not a node with value zero.",
      "terms": [
        "Payload: the value inside a node.",
        "Link: a reference to another node.",
        "Head: a reference to the first node."
      ],
      "example": "Head -> 3 -> 6 -> NULL contains two nodes; NULL is not counted."
    }
  },
  {
    "id": 5,
    "lecture": 1,
    "title": "Find a list boundary",
    "concept": "A singly linked node stores a payload and a next link. The head identifies the first node; following next reaches the remaining nodes. NULL denotes no node, not a node with value zero.",
    "teachingSteps": [
      "Start from head, not from a guessed address.",
      "Read a payload only after confirming the pointer is not NULL.",
      "Move through next until no node remains."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "You want to count nodes without losing the original head. What should advance?",
        "options": [
          "A separate cursor",
          "Only the head, without retaining it",
          "Every payload value"
        ],
        "answer": 0,
        "explanation": "A traversal cursor preserves the owning start reference."
      },
      {
        "type": "number",
        "prompt": "A traversal starts at head, tests cursor!=NULL before each visit, and stops after 4 nodes. How many condition tests occur?",
        "answer": 5,
        "explanation": "One successful test per node plus the final unsuccessful test.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "Two pointers refer to the same node. One changes its payload. What does the other pointer observe?",
        "options": [
          "A NULL pointer automatically",
          "The updated payload",
          "A newly copied node"
        ],
        "answer": 1,
        "explanation": "Aliases refer to the same live object."
      },
      {
        "type": "number",
        "prompt": "Skip the first two nodes in the pictured list, then traverse the remaining suffix. How many nodes remain reachable from that suffix pointer?",
        "answer": 2,
        "explanation": "Advancing twice removes two nodes from this chosen starting path, without freeing them.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "list",
    "start": 0.53,
    "sourceReferences": [
      {
        "lecture": 1,
        "file": "001. 2 Introduction to Linked list.mp4",
        "start": 0.53,
        "end": 25.05,
        "text": "What is a linked list is basically a list of linked data? Okay, so it looks like this it looks like a list and It is a linked list. So basically everything is pointing to each other like that Okay, it is basic type of linked list if last pointed last node is not pointing to anything then we will say it is pointing to null So either you represent none like this"
      },
      {
        "lecture": 1,
        "file": "001. 2 Introduction to Linked list.mp4",
        "start": 53.52,
        "end": 80.34,
        "text": "but let's see this in more detail which means how programmatically I can make a linked list and what are these nodes and like how to make these nodes and all right what are these nodes how to make these nodes let's see this in this lecture only suppose if I go back to C programming definitions of this strut then suppose if I if I want to define some strut node like this then what is the what does this mean it means"
      },
      {
        "lecture": 1,
        "file": "001. 2 Introduction to Linked list.mp4",
        "start": 80.66,
        "end": 110.4,
        "text": "that currently like there is no memory allocated but if you if you define some variable maybe t or something then there will be a memory but it means that there is a box or there is a struct in which there are two members one is data another one is next right next is supposed to be a pointer of what type of struct node type which means that next holds some address of a struct node which means it points to struct node"
      }
    ],
    "foundation": {
      "title": "Nodes and links",
      "idea": "A singly linked node stores a payload and a next link. The head identifies the first node; following next reaches the remaining nodes. NULL denotes no node, not a node with value zero.",
      "terms": [
        "Payload: the value inside a node.",
        "Link: a reference to another node.",
        "Head: a reference to the first node."
      ],
      "example": "Head -> 3 -> 6 -> NULL contains two nodes; NULL is not counted."
    }
  },
  {
    "id": 6,
    "lecture": 2,
    "title": "Compare storage layouts",
    "concept": "An array stores consecutive elements and computes an indexed location. A linked list reaches an element by following links. Insert costs depend on whether the needed position is already known.",
    "teachingSteps": [
      "State whether an index or a node pointer is supplied.",
      "An array index can locate an element directly; a list may require traversal.",
      "Shifting array elements and rewiring known links are different kinds of work."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "You frequently inspect a known zero-based position. Which layout provides direct indexed access?",
        "options": [
          "A queue exposing only its front",
          "Array",
          "Singly linked list with only head"
        ],
        "answer": 1,
        "explanation": "An array computes the indexed location from its base and stride."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Array index",
            "Computed element position"
          ],
          [
            "List next",
            "Followed successor link"
          ],
          [
            "Shift",
            "Move occupied array elements"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Assume 4-byte array elements, base byte address 100, zero-based index 4. What is the element address?",
        "answer": 116,
        "explanation": "Address = base + index times element size.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "array",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "number",
        "prompt": "A 5-node singly linked list has only a head pointer. How many next hops reach its last node?",
        "answer": 4,
        "explanation": "Sequential access follows every preceding link.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "array",
    "start": 0.34,
    "sourceReferences": [
      {
        "lecture": 2,
        "file": "002. 1c. Why we need Linked list _ Array vs Linked list.mp4",
        "start": 0.34,
        "end": 28.96,
        "text": "Let us now see why we at all need linked list right now you know the basic definition of linked list now Let us see that why we need linked list at all Okay, so there are many practical applications Obviously, I cannot list them all of them down I mean it will it will be basically depending on the user user requirement Whenever we need it we use it. It's like that. So but still let me just go through the go through the few of the few of the examples where we need linked list, okay"
      },
      {
        "lecture": 2,
        "file": "002. 1c. Why we need Linked list _ Array vs Linked list.mp4",
        "start": 92.49,
        "end": 113.76,
        "text": "I mean you you go from here to here and then you link the clues I mean these two clues and then you go here to here it is just one fun example that I that I just wanted to give you okay cool now let's have some serious examples where we use linked list so suppose that this is you okay and then you want to listen some songs"
      },
      {
        "lecture": 2,
        "file": "002. 1c. Why we need Linked list _ Array vs Linked list.mp4",
        "start": 183.52,
        "end": 197.38,
        "text": "suppose that you are you are having some list of songs so let's suppose this is cheap thrills and shape of you these are the songs that you have and let's suppose this is the doubly linked list you can also have the singly linked list but let's suppose in this case it is a doubly linked list where you are saying"
      }
    ],
    "foundation": {
      "title": "Arrays versus linked lists",
      "idea": "An array stores consecutive elements and computes an indexed location. A linked list reaches an element by following links. Insert costs depend on whether the needed position is already known.",
      "terms": [
        "Index: a numbered array position.",
        "Contiguous: consecutive element storage.",
        "Traversal: visiting nodes through links."
      ],
      "example": "Inserting before array index 1 in four occupied slots shifts three elements. Inserting after a known list node changes two links."
    }
  },
  {
    "id": 7,
    "lecture": 2,
    "title": "Count access work",
    "concept": "An array stores consecutive elements and computes an indexed location. A linked list reaches an element by following links. Insert costs depend on whether the needed position is already known.",
    "teachingSteps": [
      "State whether an index or a node pointer is supplied.",
      "An array index can locate an element directly; a list may require traversal.",
      "Shifting array elements and rewiring known links are different kinds of work."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "A linked insertion is called constant time only after what is known?",
        "options": [
          "The needed insertion location or predecessor",
          "The full list is sorted",
          "Every node has consecutive storage"
        ],
        "answer": 0,
        "explanation": "Finding the predecessor may itself require linear traversal."
      },
      {
        "type": "number",
        "prompt": "An array has 5 occupied elements and spare capacity. Inserting before index 1 shifts how many occupied elements?",
        "answer": 4,
        "explanation": "Positions 1 through n-1 must each shift once.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "array",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Inserting before zero-based index 2 in the same 5-element array shifts how many occupied elements?",
        "answer": 3,
        "explanation": "The suffix beginning at index 2 has n-2 elements.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "array",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Identify the insertion index",
          "Confirm spare array capacity",
          "Shift the suffix from right to left",
          "Write the new element"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "array",
    "start": 0.34,
    "sourceReferences": [
      {
        "lecture": 2,
        "file": "002. 1c. Why we need Linked list _ Array vs Linked list.mp4",
        "start": 0.34,
        "end": 28.96,
        "text": "Let us now see why we at all need linked list right now you know the basic definition of linked list now Let us see that why we need linked list at all Okay, so there are many practical applications Obviously, I cannot list them all of them down I mean it will it will be basically depending on the user user requirement Whenever we need it we use it. It's like that. So but still let me just go through the go through the few of the few of the examples where we need linked list, okay"
      },
      {
        "lecture": 2,
        "file": "002. 1c. Why we need Linked list _ Array vs Linked list.mp4",
        "start": 92.49,
        "end": 113.76,
        "text": "I mean you you go from here to here and then you link the clues I mean these two clues and then you go here to here it is just one fun example that I that I just wanted to give you okay cool now let's have some serious examples where we use linked list so suppose that this is you okay and then you want to listen some songs"
      },
      {
        "lecture": 2,
        "file": "002. 1c. Why we need Linked list _ Array vs Linked list.mp4",
        "start": 183.52,
        "end": 197.38,
        "text": "suppose that you are you are having some list of songs so let's suppose this is cheap thrills and shape of you these are the songs that you have and let's suppose this is the doubly linked list you can also have the singly linked list but let's suppose in this case it is a doubly linked list where you are saying"
      }
    ],
    "foundation": {
      "title": "Arrays versus linked lists",
      "idea": "An array stores consecutive elements and computes an indexed location. A linked list reaches an element by following links. Insert costs depend on whether the needed position is already known.",
      "terms": [
        "Index: a numbered array position.",
        "Contiguous: consecutive element storage.",
        "Traversal: visiting nodes through links."
      ],
      "example": "Inserting before array index 1 in four occupied slots shifts three elements. Inserting after a known list node changes two links."
    }
  },
  {
    "id": 8,
    "lecture": 2,
    "title": "Choose for a workload",
    "concept": "An array stores consecutive elements and computes an indexed location. A linked list reaches an element by following links. Insert costs depend on whether the needed position is already known.",
    "teachingSteps": [
      "State whether an index or a node pointer is supplied.",
      "An array index can locate an element directly; a list may require traversal.",
      "Shifting array elements and rewiring known links are different kinds of work."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "What is required to shift elements right in a fixed array?",
        "options": [
          "A next pointer in every element",
          "A queue front index only",
          "A spare slot within its capacity"
        ],
        "answer": 2,
        "explanation": "Without spare capacity, the operation cannot simply write beyond the allocated array."
      },
      {
        "type": "number",
        "prompt": "A predecessor pointer is already supplied. In singly linked insertion, count the assignments new.next=oldSuccessor and predecessor.next=new. How many link assignments is that?",
        "answer": 2,
        "explanation": "This question counts exactly the two stated assignments.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "Do list node addresses have to be consecutive?",
        "options": [
          "No; links provide the order",
          "Yes; every node is adjacent in bytes",
          "Only when payloads are integers"
        ],
        "answer": 0,
        "explanation": "Logical order comes from links, not physical adjacency."
      },
      {
        "type": "number",
        "prompt": "Delete the last element of a 5-element array by reducing its used length. How many surviving elements must shift?",
        "answer": 0,
        "explanation": "No surviving element lies to its right.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "array",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "array",
    "start": 0.34,
    "sourceReferences": [
      {
        "lecture": 2,
        "file": "002. 1c. Why we need Linked list _ Array vs Linked list.mp4",
        "start": 0.34,
        "end": 28.96,
        "text": "Let us now see why we at all need linked list right now you know the basic definition of linked list now Let us see that why we need linked list at all Okay, so there are many practical applications Obviously, I cannot list them all of them down I mean it will it will be basically depending on the user user requirement Whenever we need it we use it. It's like that. So but still let me just go through the go through the few of the few of the examples where we need linked list, okay"
      },
      {
        "lecture": 2,
        "file": "002. 1c. Why we need Linked list _ Array vs Linked list.mp4",
        "start": 92.49,
        "end": 113.76,
        "text": "I mean you you go from here to here and then you link the clues I mean these two clues and then you go here to here it is just one fun example that I that I just wanted to give you okay cool now let's have some serious examples where we use linked list so suppose that this is you okay and then you want to listen some songs"
      },
      {
        "lecture": 2,
        "file": "002. 1c. Why we need Linked list _ Array vs Linked list.mp4",
        "start": 183.52,
        "end": 197.38,
        "text": "suppose that you are you are having some list of songs so let's suppose this is cheap thrills and shape of you these are the songs that you have and let's suppose this is the doubly linked list you can also have the singly linked list but let's suppose in this case it is a doubly linked list where you are saying"
      }
    ],
    "foundation": {
      "title": "Arrays versus linked lists",
      "idea": "An array stores consecutive elements and computes an indexed location. A linked list reaches an element by following links. Insert costs depend on whether the needed position is already known.",
      "terms": [
        "Index: a numbered array position.",
        "Contiguous: consecutive element storage.",
        "Traversal: visiting nodes through links."
      ],
      "example": "Inserting before array index 1 in four occupied slots shifts three elements. Inserting after a known list node changes two links."
    }
  },
  {
    "id": 9,
    "lecture": 3,
    "title": "Move a cursor safely",
    "concept": "A traversal keeps a separate cursor so the head remains usable. Visit each node once, then move the cursor to its next link.",
    "teachingSteps": [
      "Set cursor = head and count = 0.",
      "While cursor is not NULL, process its payload and increase count.",
      "Advance cursor = cursor->next; stop at NULL."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "An undo action must use the most recent saved action first. Which contract fits?",
        "options": [
          "Stack",
          "Queue",
          "Always an indexed array"
        ],
        "answer": 0,
        "explanation": "A stack removes the most recent insertion."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "head",
            "First node reference"
          ],
          [
            "next",
            "Successor reference"
          ],
          [
            "NULL",
            "No node"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "A NULL-terminated list stores 3, 6, 9, 12, 15, 18. How many real nodes are reachable?",
        "answer": 6,
        "explanation": "Count payload nodes; NULL is not an extra node.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Follow next from the first node to the last in this 6-node list. How many links are followed?",
        "answer": 5,
        "explanation": "The first node is already reached; every next hop advances one position.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "traverse",
    "start": 0.85,
    "sourceReferences": [
      {
        "lecture": 3,
        "file": "003. 1d. Printing and Finding Length of Linked List.mp4",
        "start": 0.85,
        "end": 24.95,
        "text": "Now let's see some of the operations on the linked list So these are the few operations, but there could be many other like first one is finding the length of the linked list or printing the linked list or maybe some some operations related to insertion inserting at the beginning inserting inserting at the and inserting at the middle Similarly, there are similar operations related to deletion. There could be many other operations, right?"
      },
      {
        "lecture": 3,
        "file": "003. 1d. Printing and Finding Length of Linked List.mp4",
        "start": 25.31,
        "end": 52.37,
        "text": "So you can list out any other operation, but we will be looking at these basic operations and then we will be solving few questions. So like based on that, you can solve any other question because like everything is similar, you just need to manipulate some pointers in the linked list. So let's see first operation, which is finding length of the linked list. But before that, I want you to, you know, give a brief about a few things in the linked list. Suppose that this is the linked list that I have and suppose"
      },
      {
        "lecture": 3,
        "file": "003. 1d. Printing and Finding Length of Linked List.mp4",
        "start": 203.58,
        "end": 234.83,
        "text": "If head equal equal null then it should be then if that is the case then you can print that linked list is empty. So this is how you can check whether there is zero node or not. Suppose you are given a linked list and you want to check whether there is a one node or not. Suppose this is a linked list that is given to you. I mean you do not know the length currently but suppose there is a linked list and you do not know what is afterwards. There is a head that is going to you."
      }
    ],
    "foundation": {
      "title": "Traversing a singly linked list",
      "idea": "A traversal keeps a separate cursor so the head remains usable. Visit each node once, then move the cursor to its next link.",
      "terms": [
        "Cursor: a temporary traversal reference.",
        "Termination: a condition that stops the loop.",
        "Empty list: head is NULL."
      ],
      "example": "For 3 -> 6 -> 9 -> NULL, the count becomes 1, 2, 3 and then traversal stops."
    }
  },
  {
    "id": 10,
    "lecture": 3,
    "title": "Count and print nodes",
    "concept": "A traversal keeps a separate cursor so the head remains usable. Visit each node once, then move the cursor to its next link.",
    "teachingSteps": [
      "Set cursor = head and count = 0.",
      "While cursor is not NULL, process its payload and increase count.",
      "Advance cursor = cursor->next; stop at NULL."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "A live node stores payload 0 and next=NULL. What does that mean?",
        "options": [
          "An empty list",
          "An invalid node because zero is not allowed",
          "One node whose payload is zero"
        ],
        "answer": 2,
        "explanation": "NULL in the next field terminates the chain; zero is a valid payload."
      },
      {
        "type": "number",
        "prompt": "Visit every node and add its payload. What sum is returned?",
        "answer": 63,
        "explanation": "The payloads are 3 times 1 through n; add each once.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      },
      {
        "type": "number",
        "prompt": "An empty list has head=NULL. How many payloads can safely be printed?",
        "answer": 0,
        "explanation": "There is no node to dereference.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": []
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Copy head into a cursor",
          "Check whether cursor is NULL",
          "Process the live node",
          "Advance through next"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "traverse",
    "start": 0.85,
    "sourceReferences": [
      {
        "lecture": 3,
        "file": "003. 1d. Printing and Finding Length of Linked List.mp4",
        "start": 0.85,
        "end": 24.95,
        "text": "Now let's see some of the operations on the linked list So these are the few operations, but there could be many other like first one is finding the length of the linked list or printing the linked list or maybe some some operations related to insertion inserting at the beginning inserting inserting at the and inserting at the middle Similarly, there are similar operations related to deletion. There could be many other operations, right?"
      },
      {
        "lecture": 3,
        "file": "003. 1d. Printing and Finding Length of Linked List.mp4",
        "start": 25.31,
        "end": 52.37,
        "text": "So you can list out any other operation, but we will be looking at these basic operations and then we will be solving few questions. So like based on that, you can solve any other question because like everything is similar, you just need to manipulate some pointers in the linked list. So let's see first operation, which is finding length of the linked list. But before that, I want you to, you know, give a brief about a few things in the linked list. Suppose that this is the linked list that I have and suppose"
      },
      {
        "lecture": 3,
        "file": "003. 1d. Printing and Finding Length of Linked List.mp4",
        "start": 203.58,
        "end": 234.83,
        "text": "If head equal equal null then it should be then if that is the case then you can print that linked list is empty. So this is how you can check whether there is zero node or not. Suppose you are given a linked list and you want to check whether there is a one node or not. Suppose this is a linked list that is given to you. I mean you do not know the length currently but suppose there is a linked list and you do not know what is afterwards. There is a head that is going to you."
      }
    ],
    "foundation": {
      "title": "Traversing a singly linked list",
      "idea": "A traversal keeps a separate cursor so the head remains usable. Visit each node once, then move the cursor to its next link.",
      "terms": [
        "Cursor: a temporary traversal reference.",
        "Termination: a condition that stops the loop.",
        "Empty list: head is NULL."
      ],
      "example": "For 3 -> 6 -> 9 -> NULL, the count becomes 1, 2, 3 and then traversal stops."
    }
  },
  {
    "id": 11,
    "lecture": 3,
    "title": "Trace a complete traversal",
    "concept": "A traversal keeps a separate cursor so the head remains usable. Visit each node once, then move the cursor to its next link.",
    "teachingSteps": [
      "Set cursor = head and count = 0.",
      "While cursor is not NULL, process its payload and increase count.",
      "Advance cursor = cursor->next; stop at NULL."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "You want to count nodes without losing the original head. What should advance?",
        "options": [
          "Every payload value",
          "A separate cursor",
          "Only the head, without retaining it"
        ],
        "answer": 1,
        "explanation": "A traversal cursor preserves the owning start reference."
      },
      {
        "type": "number",
        "prompt": "A traversal starts at head, tests cursor!=NULL before each visit, and stops after 6 nodes. How many condition tests occur?",
        "answer": 7,
        "explanation": "One successful test per node plus the final unsuccessful test.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "Two pointers refer to the same node. One changes its payload. What does the other pointer observe?",
        "options": [
          "A newly copied node",
          "A NULL pointer automatically",
          "The updated payload"
        ],
        "answer": 2,
        "explanation": "Aliases refer to the same live object."
      },
      {
        "type": "number",
        "prompt": "Skip the first two nodes in the pictured list, then traverse the remaining suffix. How many nodes remain reachable from that suffix pointer?",
        "answer": 4,
        "explanation": "Advancing twice removes two nodes from this chosen starting path, without freeing them.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "traverse",
    "start": 0.85,
    "sourceReferences": [
      {
        "lecture": 3,
        "file": "003. 1d. Printing and Finding Length of Linked List.mp4",
        "start": 0.85,
        "end": 24.95,
        "text": "Now let's see some of the operations on the linked list So these are the few operations, but there could be many other like first one is finding the length of the linked list or printing the linked list or maybe some some operations related to insertion inserting at the beginning inserting inserting at the and inserting at the middle Similarly, there are similar operations related to deletion. There could be many other operations, right?"
      },
      {
        "lecture": 3,
        "file": "003. 1d. Printing and Finding Length of Linked List.mp4",
        "start": 25.31,
        "end": 52.37,
        "text": "So you can list out any other operation, but we will be looking at these basic operations and then we will be solving few questions. So like based on that, you can solve any other question because like everything is similar, you just need to manipulate some pointers in the linked list. So let's see first operation, which is finding length of the linked list. But before that, I want you to, you know, give a brief about a few things in the linked list. Suppose that this is the linked list that I have and suppose"
      },
      {
        "lecture": 3,
        "file": "003. 1d. Printing and Finding Length of Linked List.mp4",
        "start": 203.58,
        "end": 234.83,
        "text": "If head equal equal null then it should be then if that is the case then you can print that linked list is empty. So this is how you can check whether there is zero node or not. Suppose you are given a linked list and you want to check whether there is a one node or not. Suppose this is a linked list that is given to you. I mean you do not know the length currently but suppose there is a linked list and you do not know what is afterwards. There is a head that is going to you."
      }
    ],
    "foundation": {
      "title": "Traversing a singly linked list",
      "idea": "A traversal keeps a separate cursor so the head remains usable. Visit each node once, then move the cursor to its next link.",
      "terms": [
        "Cursor: a temporary traversal reference.",
        "Termination: a condition that stops the loop.",
        "Empty list: head is NULL."
      ],
      "example": "For 3 -> 6 -> 9 -> NULL, the count becomes 1, 2, 3 and then traversal stops."
    }
  },
  {
    "id": 12,
    "lecture": 4,
    "title": "Insert at the front",
    "concept": "Insertion connects a new initialized node without losing the existing suffix. The head changes when inserting at the front; a known predecessor lets a middle insertion avoid searching.",
    "teachingSteps": [
      "Allocate a new node and initialize its payload.",
      "Save the suffix by assigning new->next to the old successor.",
      "Connect head or predecessor->next to the new node."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which assignment must precede predecessor.next=new to preserve the old successor?",
        "options": [
          "free(predecessor)",
          "head=NULL",
          "new.next=predecessor.next"
        ],
        "answer": 2,
        "explanation": "Initialize the new link before overwriting the only successor reference."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "New node",
            "Fresh initialized storage"
          ],
          [
            "Saved successor",
            "Preserved suffix"
          ],
          [
            "Returned head",
            "Updated sublist start"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Insert one new node into this 7-node list. What is its new length?",
        "answer": 8,
        "explanation": "Exactly one new node becomes reachable.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      },
      {
        "type": "number",
        "prompt": "For front insertion, count new.next=head and head=new. How many pointer assignments are stated?",
        "answer": 2,
        "explanation": "Initializing the payload is separate from these two link/reference assignments.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "insert",
    "start": 54.49,
    "sourceReferences": [
      {
        "lecture": 4,
        "file": "004. 2a. Insertions in linked list.mp4",
        "start": 54.49,
        "end": 82.65,
        "text": "and head equal to head next. So it means I'm incrementing both, which means if head is here, then count is one. If head is here, then count is two. If head is here, then count is three. If head is here, then count is actually four. So if head is null, then count was four. So earlier I was working like this. But now currently count is given to be one, which means what I want if head is here, count is one. If head is here, count will be two. Head is here, count will be three. If head is here, then count is four."
      },
      {
        "lecture": 4,
        "file": "004. 2a. Insertions in linked list.mp4",
        "start": 100.41,
        "end": 131.41,
        "text": "basically whenever like these kind of problems you get then always think that where you want to stop so if you want to stop at this point or you want to stop here or you want to stop here or like this so since you want to stop earlier at this point then just make a while condition like that which means you can say that you will be running the loop till while next is not null right the moment while next is null you will stop so you can say while while had next not while next while had next"
      },
      {
        "lecture": 4,
        "file": "004. 2a. Insertions in linked list.mp4",
        "start": 132.06,
        "end": 152.51,
        "text": "is not equal to null right the moment it becomes null you will stop right the moment head next is null you will stop so you will say let me keep on incrementing count and let me keep on incrementing the head so that's how you can solve this problem and now you are done see the only difference was"
      }
    ],
    "foundation": {
      "title": "Inserting list nodes",
      "idea": "Insertion connects a new initialized node without losing the existing suffix. The head changes when inserting at the front; a known predecessor lets a middle insertion avoid searching.",
      "terms": [
        "Predecessor: the node before an insertion point.",
        "Suffix: the remaining nodes after that point.",
        "Reachability: a path of links from head."
      ],
      "example": "To insert 8 after 3 in 3 -> 6, first set new->next to 6, then set the 3 node next to new."
    }
  },
  {
    "id": 13,
    "lecture": 4,
    "title": "Insert after a known node",
    "concept": "Insertion connects a new initialized node without losing the existing suffix. The head changes when inserting at the front; a known predecessor lets a middle insertion avoid searching.",
    "teachingSteps": [
      "Allocate a new node and initialize its payload.",
      "Save the suffix by assigning new->next to the old successor.",
      "Connect head or predecessor->next to the new node."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "After a failed malloc returning NULL, what should happen before field writes?",
        "options": [
          "Write data first",
          "Handle failure without dereferencing NULL",
          "Write next first"
        ],
        "answer": 1,
        "explanation": "Allocation success must be checked before either field is accessed."
      },
      {
        "type": "number",
        "prompt": "A tail is not supplied. How many next hops reach the last node of this 7-node list?",
        "answer": 6,
        "explanation": "Begin at head and advance n-1 times.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Append 99 after the tail. What is the final node payload?",
        "answer": 99,
        "explanation": "The appended node is the new tail.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Create and validate the new node",
          "Initialize its payload",
          "Connect its next to the existing successor",
          "Update the live start or predecessor link"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "insert",
    "start": 54.49,
    "sourceReferences": [
      {
        "lecture": 4,
        "file": "004. 2a. Insertions in linked list.mp4",
        "start": 54.49,
        "end": 82.65,
        "text": "and head equal to head next. So it means I'm incrementing both, which means if head is here, then count is one. If head is here, then count is two. If head is here, then count is three. If head is here, then count is actually four. So if head is null, then count was four. So earlier I was working like this. But now currently count is given to be one, which means what I want if head is here, count is one. If head is here, count will be two. Head is here, count will be three. If head is here, then count is four."
      },
      {
        "lecture": 4,
        "file": "004. 2a. Insertions in linked list.mp4",
        "start": 100.41,
        "end": 131.41,
        "text": "basically whenever like these kind of problems you get then always think that where you want to stop so if you want to stop at this point or you want to stop here or you want to stop here or like this so since you want to stop earlier at this point then just make a while condition like that which means you can say that you will be running the loop till while next is not null right the moment while next is null you will stop so you can say while while had next not while next while had next"
      },
      {
        "lecture": 4,
        "file": "004. 2a. Insertions in linked list.mp4",
        "start": 132.06,
        "end": 152.51,
        "text": "is not equal to null right the moment it becomes null you will stop right the moment head next is null you will stop so you will say let me keep on incrementing count and let me keep on incrementing the head so that's how you can solve this problem and now you are done see the only difference was"
      }
    ],
    "foundation": {
      "title": "Inserting list nodes",
      "idea": "Insertion connects a new initialized node without losing the existing suffix. The head changes when inserting at the front; a known predecessor lets a middle insertion avoid searching.",
      "terms": [
        "Predecessor: the node before an insertion point.",
        "Suffix: the remaining nodes after that point.",
        "Reachability: a path of links from head."
      ],
      "example": "To insert 8 after 3 in 3 -> 6, first set new->next to 6, then set the 3 node next to new."
    }
  },
  {
    "id": 14,
    "lecture": 4,
    "title": "Preserve a suffix",
    "concept": "Insertion connects a new initialized node without losing the existing suffix. The head changes when inserting at the front; a known predecessor lets a middle insertion avoid searching.",
    "teachingSteps": [
      "Allocate a new node and initialize its payload.",
      "Save the suffix by assigning new->next to the old successor.",
      "Connect head or predecessor->next to the new node."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "A recursive append reconnects p.next to the updated suffix. What should this nonempty call return?",
        "options": [
          "p",
          "p.next in every case",
          "NULL in every case"
        ],
        "answer": 0,
        "explanation": "Returning p preserves this sublist first node."
      },
      {
        "type": "number",
        "prompt": "Front-insert 99 while preserving the suffix. What payload was first becomes the second payload?",
        "answer": 3,
        "explanation": "new.next refers to the old head, whose payload is 3.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "You front-insert into an empty list. What should the new next field contain?",
        "options": [
          "A pointer to itself for an ordinary singly linked list",
          "NULL",
          "An uninitialized value"
        ],
        "answer": 1,
        "explanation": "The empty old head is NULL."
      },
      {
        "type": "number",
        "prompt": "All 7 original nodes and one newly inserted node were separately heap-allocated. Releasing the entire resulting list correctly needs how many node releases?",
        "answer": 8,
        "explanation": "Release each of the n+1 distinct allocations exactly once.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "insert",
    "start": 54.49,
    "sourceReferences": [
      {
        "lecture": 4,
        "file": "004. 2a. Insertions in linked list.mp4",
        "start": 54.49,
        "end": 82.65,
        "text": "and head equal to head next. So it means I'm incrementing both, which means if head is here, then count is one. If head is here, then count is two. If head is here, then count is three. If head is here, then count is actually four. So if head is null, then count was four. So earlier I was working like this. But now currently count is given to be one, which means what I want if head is here, count is one. If head is here, count will be two. Head is here, count will be three. If head is here, then count is four."
      },
      {
        "lecture": 4,
        "file": "004. 2a. Insertions in linked list.mp4",
        "start": 100.41,
        "end": 131.41,
        "text": "basically whenever like these kind of problems you get then always think that where you want to stop so if you want to stop at this point or you want to stop here or you want to stop here or like this so since you want to stop earlier at this point then just make a while condition like that which means you can say that you will be running the loop till while next is not null right the moment while next is null you will stop so you can say while while had next not while next while had next"
      },
      {
        "lecture": 4,
        "file": "004. 2a. Insertions in linked list.mp4",
        "start": 132.06,
        "end": 152.51,
        "text": "is not equal to null right the moment it becomes null you will stop right the moment head next is null you will stop so you will say let me keep on incrementing count and let me keep on incrementing the head so that's how you can solve this problem and now you are done see the only difference was"
      }
    ],
    "foundation": {
      "title": "Inserting list nodes",
      "idea": "Insertion connects a new initialized node without losing the existing suffix. The head changes when inserting at the front; a known predecessor lets a middle insertion avoid searching.",
      "terms": [
        "Predecessor: the node before an insertion point.",
        "Suffix: the remaining nodes after that point.",
        "Reachability: a path of links from head."
      ],
      "example": "To insert 8 after 3 in 3 -> 6, first set new->next to 6, then set the 3 node next to new."
    }
  },
  {
    "id": 15,
    "lecture": 5,
    "title": "Detach before releasing",
    "concept": "Deletion first repairs the live list, then releases a detached node if its storage was dynamically allocated. Reading a freed node is invalid. The head needs a separate update when removing the first node.",
    "teachingSteps": [
      "Confirm the node exists and retain its successor.",
      "Update head or the predecessor link to bypass it.",
      "Release the detached node and never read it again."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "What should be retained before freeing a node during traversal?",
        "options": [
          "Nothing; read next after free",
          "Its successor pointer",
          "Only its payload format"
        ],
        "answer": 1,
        "explanation": "Reading fields after free is invalid."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Bypass",
            "Repair the live path"
          ],
          [
            "free",
            "Release allocated storage"
          ],
          [
            "head update",
            "Preserve a new first node"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Delete exactly one existing node from this 8-node list. How many nodes remain?",
        "answer": 7,
        "explanation": "A single deletion reduces length by one.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21,
            24
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Delete the first node. What payload becomes the new head?",
        "answer": 6,
        "explanation": "The original second node has payload 6.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21,
            24
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "delete",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 5,
        "file": "005. 2b.Deletion in Linked list.mp4",
        "start": 0,
        "end": 27.6,
        "text": "let's now see deletion in linked list so either we can delete as a first node or we can delete last node or we can delete some node in the between so let's see how to delete the first node suppose that this linked list is given to us and we want to delete this first node so what is the idea like what we can do we can simply write head so head is currently pointing here so just forget about this stamp and all head is currently pointing here"
      },
      {
        "lecture": 5,
        "file": "005. 2b.Deletion in Linked list.mp4",
        "start": 27.79,
        "end": 54.82,
        "text": "So I can simply write head equal to head next, agent it. So I can say that, okay, let me ask this head to point to this pointer. And then my link list is this. So this one line is able to delete this node. Yes, that is almost true, but not exactly, which means there is a memory for this node. So we want to actually delete this. We do not want to have a memory leak."
      },
      {
        "lecture": 5,
        "file": "005. 2b.Deletion in Linked list.mp4",
        "start": 55.13,
        "end": 86.25,
        "text": "so if you want to delete this then what you need to do you can write this but first you have to copy this address into some node so what you need to do basically you can copy this into some node maybe maybe you can say temp so you can say struct node star temp okay equal to head which means whatever head is pointing to now this temp will also start pointing to that which means if this is the link list that is given to you"
      }
    ],
    "foundation": {
      "title": "Deleting list nodes",
      "idea": "Deletion first repairs the live list, then releases a detached node if its storage was dynamically allocated. Reading a freed node is invalid. The head needs a separate update when removing the first node.",
      "terms": [
        "Detach: remove a node from the live path.",
        "Successor: the next node.",
        "Dangling pointer: a reference to ended storage."
      ],
      "example": "Deleting 6 from 3 -> 6 -> 9 leaves 3 -> 9; preserve the link to 9 before releasing 6."
    }
  },
  {
    "id": 16,
    "lecture": 5,
    "title": "Repair the head or predecessor",
    "concept": "Deletion first repairs the live list, then releases a detached node if its storage was dynamically allocated. Reading a freed node is invalid. The head needs a separate update when removing the first node.",
    "teachingSteps": [
      "Confirm the node exists and retain its successor.",
      "Update head or the predecessor link to bypass it.",
      "Release the detached node and never read it again."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Deleting the first node may require changing which reference?",
        "options": [
          "head",
          "Every surviving payload",
          "Only an unrelated cursor"
        ],
        "answer": 0,
        "explanation": "The head must refer to the surviving suffix."
      },
      {
        "type": "number",
        "prompt": "Remove an interior node with both predecessor and successor already supplied. How many predecessor.next fields must change?",
        "answer": 1,
        "explanation": "Only the predecessor next field is repaired in a singly linked list.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21,
            24
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Delete the only node of a list. How many real nodes remain?",
        "answer": 0,
        "explanation": "The new head is NULL.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Retain the target successor",
          "Bypass the target in the live list",
          "Release the detached allocation",
          "Continue from a live reference"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "delete",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 5,
        "file": "005. 2b.Deletion in Linked list.mp4",
        "start": 0,
        "end": 27.6,
        "text": "let's now see deletion in linked list so either we can delete as a first node or we can delete last node or we can delete some node in the between so let's see how to delete the first node suppose that this linked list is given to us and we want to delete this first node so what is the idea like what we can do we can simply write head so head is currently pointing here so just forget about this stamp and all head is currently pointing here"
      },
      {
        "lecture": 5,
        "file": "005. 2b.Deletion in Linked list.mp4",
        "start": 27.79,
        "end": 54.82,
        "text": "So I can simply write head equal to head next, agent it. So I can say that, okay, let me ask this head to point to this pointer. And then my link list is this. So this one line is able to delete this node. Yes, that is almost true, but not exactly, which means there is a memory for this node. So we want to actually delete this. We do not want to have a memory leak."
      },
      {
        "lecture": 5,
        "file": "005. 2b.Deletion in Linked list.mp4",
        "start": 55.13,
        "end": 86.25,
        "text": "so if you want to delete this then what you need to do you can write this but first you have to copy this address into some node so what you need to do basically you can copy this into some node maybe maybe you can say temp so you can say struct node star temp okay equal to head which means whatever head is pointing to now this temp will also start pointing to that which means if this is the link list that is given to you"
      }
    ],
    "foundation": {
      "title": "Deleting list nodes",
      "idea": "Deletion first repairs the live list, then releases a detached node if its storage was dynamically allocated. Reading a freed node is invalid. The head needs a separate update when removing the first node.",
      "terms": [
        "Detach: remove a node from the live path.",
        "Successor: the next node.",
        "Dangling pointer: a reference to ended storage."
      ],
      "example": "Deleting 6 from 3 -> 6 -> 9 leaves 3 -> 9; preserve the link to 9 before releasing 6."
    }
  },
  {
    "id": 17,
    "lecture": 5,
    "title": "Handle empty and single-node lists",
    "concept": "Deletion first repairs the live list, then releases a detached node if its storage was dynamically allocated. Reading a freed node is invalid. The head needs a separate update when removing the first node.",
    "teachingSteps": [
      "Confirm the node exists and retain its successor.",
      "Update head or the predecessor link to bypass it.",
      "Release the detached node and never read it again."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Does bypassing a heap-allocated node automatically release its allocation?",
        "options": [
          "Yes, every next assignment frees memory",
          "Only if its payload is zero",
          "No"
        ],
        "answer": 2,
        "explanation": "Link changes and allocation lifetime are separate."
      },
      {
        "type": "number",
        "prompt": "One dynamically allocated node is detached and released correctly. How many calls to free should release that node?",
        "answer": 1,
        "explanation": "Freeing the same allocation twice is invalid.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21,
            24
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "When head is NULL, which operation is unsafe?",
        "options": [
          "Reading head->next",
          "Checking head==NULL",
          "Returning an empty result"
        ],
        "answer": 0,
        "explanation": "There is no node to dereference."
      },
      {
        "type": "number",
        "prompt": "Delete the tail from the pictured 8-node list. What is the new final payload?",
        "answer": 21,
        "explanation": "The original penultimate node becomes the tail.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21,
            24
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "delete",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 5,
        "file": "005. 2b.Deletion in Linked list.mp4",
        "start": 0,
        "end": 27.6,
        "text": "let's now see deletion in linked list so either we can delete as a first node or we can delete last node or we can delete some node in the between so let's see how to delete the first node suppose that this linked list is given to us and we want to delete this first node so what is the idea like what we can do we can simply write head so head is currently pointing here so just forget about this stamp and all head is currently pointing here"
      },
      {
        "lecture": 5,
        "file": "005. 2b.Deletion in Linked list.mp4",
        "start": 27.79,
        "end": 54.82,
        "text": "So I can simply write head equal to head next, agent it. So I can say that, okay, let me ask this head to point to this pointer. And then my link list is this. So this one line is able to delete this node. Yes, that is almost true, but not exactly, which means there is a memory for this node. So we want to actually delete this. We do not want to have a memory leak."
      },
      {
        "lecture": 5,
        "file": "005. 2b.Deletion in Linked list.mp4",
        "start": 55.13,
        "end": 86.25,
        "text": "so if you want to delete this then what you need to do you can write this but first you have to copy this address into some node so what you need to do basically you can copy this into some node maybe maybe you can say temp so you can say struct node star temp okay equal to head which means whatever head is pointing to now this temp will also start pointing to that which means if this is the link list that is given to you"
      }
    ],
    "foundation": {
      "title": "Deleting list nodes",
      "idea": "Deletion first repairs the live list, then releases a detached node if its storage was dynamically allocated. Reading a freed node is invalid. The head needs a separate update when removing the first node.",
      "terms": [
        "Detach: remove a node from the live path.",
        "Successor: the next node.",
        "Dangling pointer: a reference to ended storage."
      ],
      "example": "Deleting 6 from 3 -> 6 -> 9 leaves 3 -> 9; preserve the link to 9 before releasing 6."
    }
  },
  {
    "id": 18,
    "lecture": 6,
    "title": "Initialize node fields",
    "concept": "C node creation and list linking are separate jobs. Allocation can fail; only initialize fields after a successful allocation. A pointer value and the payload of the pointed-to node are different things.",
    "teachingSteps": [
      "Check a returned allocation pointer before using ->.",
      "Initialize both payload and next, even for the final node.",
      "Link the node into the live list; release detached storage exactly once."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which assignment must precede predecessor.next=new to preserve the old successor?",
        "options": [
          "new.next=predecessor.next",
          "free(predecessor)",
          "head=NULL"
        ],
        "answer": 0,
        "explanation": "Initialize the new link before overwriting the only successor reference."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "New node",
            "Fresh initialized storage"
          ],
          [
            "Saved successor",
            "Preserved suffix"
          ],
          [
            "Returned head",
            "Updated sublist start"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Insert one new node into this 3-node list. What is its new length?",
        "answer": 4,
        "explanation": "Exactly one new node becomes reachable.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      },
      {
        "type": "number",
        "prompt": "For front insertion, count new.next=head and head=new. How many pointer assignments are stated?",
        "answer": 2,
        "explanation": "Initializing the payload is separate from these two link/reference assignments.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "insert",
    "start": 4.12,
    "sourceReferences": [
      {
        "lecture": 6,
        "file": "006. OPTIONAL _ Linked list C code.mp4",
        "start": 4.12,
        "end": 29.92,
        "text": "okay so this is actually not required for gate just for your your purpose if you want you can use it i will just share this but it is not required for gate okay so whenever i take i take some class so before that i actually run the course and all so this is the file that i want to share if you want you can use it otherwise completely ignore it it is not at all required for gate okay so basically here i do have a few functions one function is as you can see is create node right"
      },
      {
        "lecture": 6,
        "file": "006. OPTIONAL _ Linked list C code.mp4",
        "start": 30.14,
        "end": 39.52,
        "text": "This is the create node function and I have typed up the stuck node to capital NODE. So instead of writing stuck node anywhere I can actually write NODE."
      },
      {
        "lecture": 6,
        "file": "006. OPTIONAL _ Linked list C code.mp4",
        "start": 39.72,
        "end": 65.16,
        "text": "So anyway this create nodes takes one value into L and on top of that it sets the your new node to this value which is whatever let's suppose you are passing five and then second to be null right and then it returns a pointer to new node so this is the pointer so it will return this pointer which means this address whatever it is let's suppose this is 2000 so it will return 2000 so 2000 will get returned so that is how this create node is working okay"
      }
    ],
    "foundation": {
      "title": "Building a list safely in C",
      "idea": "C node creation and list linking are separate jobs. Allocation can fail; only initialize fields after a successful allocation. A pointer value and the payload of the pointed-to node are different things.",
      "terms": [
        "Allocation: obtaining storage for a node.",
        "Initialization: assigning meaningful field values.",
        "Ownership: responsibility for releasing storage."
      ],
      "example": "A new final node needs next = NULL. Merely allocating it does not make head reach it."
    }
  },
  {
    "id": 19,
    "lecture": 6,
    "title": "Keep allocation and links distinct",
    "concept": "C node creation and list linking are separate jobs. Allocation can fail; only initialize fields after a successful allocation. A pointer value and the payload of the pointed-to node are different things.",
    "teachingSteps": [
      "Check a returned allocation pointer before using ->.",
      "Initialize both payload and next, even for the final node.",
      "Link the node into the live list; release detached storage exactly once."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "After a failed malloc returning NULL, what should happen before field writes?",
        "options": [
          "Write next first",
          "Write data first",
          "Handle failure without dereferencing NULL"
        ],
        "answer": 2,
        "explanation": "Allocation success must be checked before either field is accessed."
      },
      {
        "type": "number",
        "prompt": "A tail is not supplied. How many next hops reach the last node of this 3-node list?",
        "answer": 2,
        "explanation": "Begin at head and advance n-1 times.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Append 99 after the tail. What is the final node payload?",
        "answer": 99,
        "explanation": "The appended node is the new tail.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Create and validate the new node",
          "Initialize its payload",
          "Connect its next to the existing successor",
          "Update the live start or predecessor link"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "insert",
    "start": 4.12,
    "sourceReferences": [
      {
        "lecture": 6,
        "file": "006. OPTIONAL _ Linked list C code.mp4",
        "start": 4.12,
        "end": 29.92,
        "text": "okay so this is actually not required for gate just for your your purpose if you want you can use it i will just share this but it is not required for gate okay so whenever i take i take some class so before that i actually run the course and all so this is the file that i want to share if you want you can use it otherwise completely ignore it it is not at all required for gate okay so basically here i do have a few functions one function is as you can see is create node right"
      },
      {
        "lecture": 6,
        "file": "006. OPTIONAL _ Linked list C code.mp4",
        "start": 30.14,
        "end": 39.52,
        "text": "This is the create node function and I have typed up the stuck node to capital NODE. So instead of writing stuck node anywhere I can actually write NODE."
      },
      {
        "lecture": 6,
        "file": "006. OPTIONAL _ Linked list C code.mp4",
        "start": 39.72,
        "end": 65.16,
        "text": "So anyway this create nodes takes one value into L and on top of that it sets the your new node to this value which is whatever let's suppose you are passing five and then second to be null right and then it returns a pointer to new node so this is the pointer so it will return this pointer which means this address whatever it is let's suppose this is 2000 so it will return 2000 so 2000 will get returned so that is how this create node is working okay"
      }
    ],
    "foundation": {
      "title": "Building a list safely in C",
      "idea": "C node creation and list linking are separate jobs. Allocation can fail; only initialize fields after a successful allocation. A pointer value and the payload of the pointed-to node are different things.",
      "terms": [
        "Allocation: obtaining storage for a node.",
        "Initialization: assigning meaningful field values.",
        "Ownership: responsibility for releasing storage."
      ],
      "example": "A new final node needs next = NULL. Merely allocating it does not make head reach it."
    }
  },
  {
    "id": 20,
    "lecture": 6,
    "title": "Release detached storage safely",
    "concept": "C node creation and list linking are separate jobs. Allocation can fail; only initialize fields after a successful allocation. A pointer value and the payload of the pointed-to node are different things.",
    "teachingSteps": [
      "Check a returned allocation pointer before using ->.",
      "Initialize both payload and next, even for the final node.",
      "Link the node into the live list; release detached storage exactly once."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "A recursive append reconnects p.next to the updated suffix. What should this nonempty call return?",
        "options": [
          "NULL in every case",
          "p",
          "p.next in every case"
        ],
        "answer": 1,
        "explanation": "Returning p preserves this sublist first node."
      },
      {
        "type": "number",
        "prompt": "Front-insert 99 while preserving the suffix. What payload was first becomes the second payload?",
        "answer": 3,
        "explanation": "new.next refers to the old head, whose payload is 3.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "You front-insert into an empty list. What should the new next field contain?",
        "options": [
          "An uninitialized value",
          "A pointer to itself for an ordinary singly linked list",
          "NULL"
        ],
        "answer": 2,
        "explanation": "The empty old head is NULL."
      },
      {
        "type": "number",
        "prompt": "All 3 original nodes and one newly inserted node were separately heap-allocated. Releasing the entire resulting list correctly needs how many node releases?",
        "answer": 4,
        "explanation": "Release each of the n+1 distinct allocations exactly once.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "insert",
    "start": 4.12,
    "sourceReferences": [
      {
        "lecture": 6,
        "file": "006. OPTIONAL _ Linked list C code.mp4",
        "start": 4.12,
        "end": 29.92,
        "text": "okay so this is actually not required for gate just for your your purpose if you want you can use it i will just share this but it is not required for gate okay so whenever i take i take some class so before that i actually run the course and all so this is the file that i want to share if you want you can use it otherwise completely ignore it it is not at all required for gate okay so basically here i do have a few functions one function is as you can see is create node right"
      },
      {
        "lecture": 6,
        "file": "006. OPTIONAL _ Linked list C code.mp4",
        "start": 30.14,
        "end": 39.52,
        "text": "This is the create node function and I have typed up the stuck node to capital NODE. So instead of writing stuck node anywhere I can actually write NODE."
      },
      {
        "lecture": 6,
        "file": "006. OPTIONAL _ Linked list C code.mp4",
        "start": 39.72,
        "end": 65.16,
        "text": "So anyway this create nodes takes one value into L and on top of that it sets the your new node to this value which is whatever let's suppose you are passing five and then second to be null right and then it returns a pointer to new node so this is the pointer so it will return this pointer which means this address whatever it is let's suppose this is 2000 so it will return 2000 so 2000 will get returned so that is how this create node is working okay"
      }
    ],
    "foundation": {
      "title": "Building a list safely in C",
      "idea": "C node creation and list linking are separate jobs. Allocation can fail; only initialize fields after a successful allocation. A pointer value and the payload of the pointed-to node are different things.",
      "terms": [
        "Allocation: obtaining storage for a node.",
        "Initialization: assigning meaningful field values.",
        "Ownership: responsibility for releasing storage."
      ],
      "example": "A new final node needs next = NULL. Merely allocating it does not make head reach it."
    }
  },
  {
    "id": 21,
    "lecture": 7,
    "title": "Follow recursive calls",
    "concept": "Recursion separates descent from unwinding. Printing before the recursive call follows head-to-tail order; printing after it produces tail-to-head order. Printing in reverse does not itself change any links.",
    "teachingSteps": [
      "Return immediately when the pointer is NULL.",
      "For forward output, print this payload before visiting next.",
      "For reverse output, visit next first and print as calls return."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which empty-list sum base result combines correctly with addition?",
        "options": [
          "1",
          "The previous caller address",
          "0"
        ],
        "answer": 2,
        "explanation": "Zero is the additive identity."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Base case",
            "Stops descent"
          ],
          [
            "Recursive result",
            "Answer for the suffix"
          ],
          [
            "Unwinding",
            "Return to waiting callers"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "For recursion that stops only at NULL, how many calls process a 4-node list, including the base call?",
        "answer": 5,
        "explanation": "One call per real node plus the empty suffix.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      },
      {
        "type": "number",
        "prompt": "A reverse-print function recurses on next before printing. What payload is printed first?",
        "answer": 12,
        "explanation": "The deepest real node prints first.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "recursion",
    "start": 0.27,
    "sourceReferences": [
      {
        "lecture": 7,
        "file": "007. 2c. Recursion in Linked list_ Printing the linked list.mp4",
        "start": 0.27,
        "end": 23.45,
        "text": "Hi everyone, let's now try to understand recursion in linked list So you you might know basics of recursion that we have already seen in C programming Even though if you don't know then it is okay like probably you will get to understand now Okay, so before I go to the recursion in the linked list Let me give you one small analogy between the recursion and the induction"
      },
      {
        "lecture": 7,
        "file": "007. 2c. Recursion in Linked list_ Printing the linked list.mp4",
        "start": 23.91,
        "end": 47.58,
        "text": "So you might have seen induction in discrete mathematics even if you have not seen then you can just skip these two minutes Okay, I'm going to explain something in one or two minutes. That is a little bit analogy between recursion and induction You just see this part. Otherwise, you can skip this. Okay, so see what I'm saying You you know the induction right? So in induction what we do we say that 4k equal to 1"
      },
      {
        "lecture": 7,
        "file": "007. 2c. Recursion in Linked list_ Printing the linked list.mp4",
        "start": 124.7,
        "end": 158.52,
        "text": "Now, if I talk about the recursion which is almost damaging induction here also we have the base case that you already know right here also we have the base case so what we will be doing we will we can easily prove the base case which means if let's suppose if n equal to 1 then it should return 1 or whatever right so that's very easy to prove so we can easily prove it we can easily prove it and then we will say there is something called as recursive case"
      }
    ],
    "foundation": {
      "title": "Recursive list printing",
      "idea": "Recursion separates descent from unwinding. Printing before the recursive call follows head-to-tail order; printing after it produces tail-to-head order. Printing in reverse does not itself change any links.",
      "terms": [
        "Descent: making a recursive call.",
        "Unwinding: returning to a waiting caller.",
        "Base case: the smallest input handled directly."
      ],
      "example": "On 3 -> 6 -> 9, print-before yields 3,6,9; print-after yields 9,6,3, with the same original links."
    }
  },
  {
    "id": 22,
    "lecture": 7,
    "title": "Print before or after descent",
    "concept": "Recursion separates descent from unwinding. Printing before the recursive call follows head-to-tail order; printing after it produces tail-to-head order. Printing in reverse does not itself change any links.",
    "teachingSteps": [
      "Return immediately when the pointer is NULL.",
      "For forward output, print this payload before visiting next.",
      "For reverse output, visit next first and print as calls return."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "When does print-after-recursion execute?",
        "options": [
          "Only on NULL",
          "While calls return",
          "Before descent"
        ],
        "answer": 1,
        "explanation": "The caller waits for its recursive suffix call."
      },
      {
        "type": "number",
        "prompt": "That reverse-print function prints what payload last?",
        "answer": 3,
        "explanation": "The original first node prints last.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      },
      {
        "type": "number",
        "prompt": "A recursive sum visits the pictured payloads. What result is returned?",
        "answer": 30,
        "explanation": "Add every payload exactly once.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Test the base condition",
          "Call the function on the smaller suffix",
          "Use its returned result",
          "Return this subproblem answer"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "recursion",
    "start": 0.27,
    "sourceReferences": [
      {
        "lecture": 7,
        "file": "007. 2c. Recursion in Linked list_ Printing the linked list.mp4",
        "start": 0.27,
        "end": 23.45,
        "text": "Hi everyone, let's now try to understand recursion in linked list So you you might know basics of recursion that we have already seen in C programming Even though if you don't know then it is okay like probably you will get to understand now Okay, so before I go to the recursion in the linked list Let me give you one small analogy between the recursion and the induction"
      },
      {
        "lecture": 7,
        "file": "007. 2c. Recursion in Linked list_ Printing the linked list.mp4",
        "start": 23.91,
        "end": 47.58,
        "text": "So you might have seen induction in discrete mathematics even if you have not seen then you can just skip these two minutes Okay, I'm going to explain something in one or two minutes. That is a little bit analogy between recursion and induction You just see this part. Otherwise, you can skip this. Okay, so see what I'm saying You you know the induction right? So in induction what we do we say that 4k equal to 1"
      },
      {
        "lecture": 7,
        "file": "007. 2c. Recursion in Linked list_ Printing the linked list.mp4",
        "start": 124.7,
        "end": 158.52,
        "text": "Now, if I talk about the recursion which is almost damaging induction here also we have the base case that you already know right here also we have the base case so what we will be doing we will we can easily prove the base case which means if let's suppose if n equal to 1 then it should return 1 or whatever right so that's very easy to prove so we can easily prove it we can easily prove it and then we will say there is something called as recursive case"
      }
    ],
    "foundation": {
      "title": "Recursive list printing",
      "idea": "Recursion separates descent from unwinding. Printing before the recursive call follows head-to-tail order; printing after it produces tail-to-head order. Printing in reverse does not itself change any links.",
      "terms": [
        "Descent: making a recursive call.",
        "Unwinding: returning to a waiting caller.",
        "Base case: the smallest input handled directly."
      ],
      "example": "On 3 -> 6 -> 9, print-before yields 3,6,9; print-after yields 9,6,3, with the same original links."
    }
  },
  {
    "id": 23,
    "lecture": 7,
    "title": "Trace unwinding output",
    "concept": "Recursion separates descent from unwinding. Printing before the recursive call follows head-to-tail order; printing after it produces tail-to-head order. Printing in reverse does not itself change any links.",
    "teachingSteps": [
      "Return immediately when the pointer is NULL.",
      "For forward output, print this payload before visiting next.",
      "For reverse output, visit next first and print as calls return."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Does printing in reverse change the node links?",
        "options": [
          "Not unless explicit link assignments are made",
          "Always",
          "Only for a three-node list"
        ],
        "answer": 0,
        "explanation": "Output order and structural reversal are different."
      },
      {
        "type": "number",
        "prompt": "A length function returns 0 at NULL and 1+length(next) otherwise. What value is returned?",
        "answer": 4,
        "explanation": "Each real node contributes one.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "An empty suffix is reached while printing a list recursively. What should it print?",
        "options": [
          "The next field of NULL",
          "Nothing",
          "One payload equal to zero"
        ],
        "answer": 1,
        "explanation": "There is no payload at NULL."
      },
      {
        "type": "number",
        "prompt": "Recursion stops only at NULL and does not use tail-call optimization. On 4 nodes, what is the maximum number of simultaneously live calls, including the base call?",
        "answer": 5,
        "explanation": "The n real-node calls wait while the NULL base call runs.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "recursion",
    "start": 0.27,
    "sourceReferences": [
      {
        "lecture": 7,
        "file": "007. 2c. Recursion in Linked list_ Printing the linked list.mp4",
        "start": 0.27,
        "end": 23.45,
        "text": "Hi everyone, let's now try to understand recursion in linked list So you you might know basics of recursion that we have already seen in C programming Even though if you don't know then it is okay like probably you will get to understand now Okay, so before I go to the recursion in the linked list Let me give you one small analogy between the recursion and the induction"
      },
      {
        "lecture": 7,
        "file": "007. 2c. Recursion in Linked list_ Printing the linked list.mp4",
        "start": 23.91,
        "end": 47.58,
        "text": "So you might have seen induction in discrete mathematics even if you have not seen then you can just skip these two minutes Okay, I'm going to explain something in one or two minutes. That is a little bit analogy between recursion and induction You just see this part. Otherwise, you can skip this. Okay, so see what I'm saying You you know the induction right? So in induction what we do we say that 4k equal to 1"
      },
      {
        "lecture": 7,
        "file": "007. 2c. Recursion in Linked list_ Printing the linked list.mp4",
        "start": 124.7,
        "end": 158.52,
        "text": "Now, if I talk about the recursion which is almost damaging induction here also we have the base case that you already know right here also we have the base case so what we will be doing we will we can easily prove the base case which means if let's suppose if n equal to 1 then it should return 1 or whatever right so that's very easy to prove so we can easily prove it we can easily prove it and then we will say there is something called as recursive case"
      }
    ],
    "foundation": {
      "title": "Recursive list printing",
      "idea": "Recursion separates descent from unwinding. Printing before the recursive call follows head-to-tail order; printing after it produces tail-to-head order. Printing in reverse does not itself change any links.",
      "terms": [
        "Descent: making a recursive call.",
        "Unwinding: returning to a waiting caller.",
        "Base case: the smallest input handled directly."
      ],
      "example": "On 3 -> 6 -> 9, print-before yields 3,6,9; print-after yields 9,6,3, with the same original links."
    }
  },
  {
    "id": 24,
    "lecture": 8,
    "title": "Define an empty base case",
    "concept": "The empty list provides a base result. A nonempty call combines one node with the value returned by its suffix: length adds one; sum adds the payload.",
    "teachingSteps": [
      "Define length(NULL)=0 and sum(NULL)=0.",
      "Call the same function on next.",
      "Return one plus the suffix length, or payload plus the suffix sum."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which empty-list sum base result combines correctly with addition?",
        "options": [
          "The previous caller address",
          "0",
          "1"
        ],
        "answer": 1,
        "explanation": "Zero is the additive identity."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Base case",
            "Stops descent"
          ],
          [
            "Recursive result",
            "Answer for the suffix"
          ],
          [
            "Unwinding",
            "Return to waiting callers"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "For recursion that stops only at NULL, how many calls process a 5-node list, including the base call?",
        "answer": 6,
        "explanation": "One call per real node plus the empty suffix.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "number",
        "prompt": "A reverse-print function recurses on next before printing. What payload is printed first?",
        "answer": 15,
        "explanation": "The deepest real node prints first.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "fold",
    "start": 0.62,
    "sourceReferences": [
      {
        "lecture": 8,
        "file": "008_2d_Recursion_in_Linkedlist_Sum_and_length_of_linked_list.mp4",
        "start": 0.62,
        "end": 32.65,
        "text": "let us now see how to find sum of all nodes in linked list and obviously using recursion okay using recursion so I think it should be very easy program let me just try to write it so suppose you want the sum right so let me write a function that is going to sum all the nodes so obviously it should return integer and let's suppose this is sum it is taking the head as in parameter"
      },
      {
        "lecture": 8,
        "file": "008_2d_Recursion_in_Linkedlist_Sum_and_length_of_linked_list.mp4",
        "start": 33.35,
        "end": 61.29,
        "text": "and then you will say base case is I think very easy if if the head is null if the head is equal equal null then I think you will just say that sum is 0 right I mean there is nothing to sum so maybe return 0 because you are returning integer you are returning sum and otherwise you will be returning you will be returning you want some right so take the first element which is head"
      },
      {
        "lecture": 8,
        "file": "008_2d_Recursion_in_Linkedlist_Sum_and_length_of_linked_list.mp4",
        "start": 62.79,
        "end": 94.75,
        "text": "Had data and then let's just do the recursive summation which means some and then this time you will be sending next right Okay, so basically either you written zero or you turn had data plus whatever it returns so Ultimately like it will be keep on doing had had data plus had data. I mean had next data like that, right? So so what is happening? Let me just explain you that what is happening here is something like this Let's suppose"
      }
    ],
    "foundation": {
      "title": "Recursive length and sum",
      "idea": "The empty list provides a base result. A nonempty call combines one node with the value returned by its suffix: length adds one; sum adds the payload.",
      "terms": [
        "Suffix result: the answer for the smaller list.",
        "Combine: add this node contribution.",
        "Depth: simultaneous waiting calls."
      ],
      "example": "For 3 -> 6, length is 1+(1+0)=2 and sum is 3+(6+0)=9."
    }
  },
  {
    "id": 25,
    "lecture": 8,
    "title": "Combine one node with a suffix",
    "concept": "The empty list provides a base result. A nonempty call combines one node with the value returned by its suffix: length adds one; sum adds the payload.",
    "teachingSteps": [
      "Define length(NULL)=0 and sum(NULL)=0.",
      "Call the same function on next.",
      "Return one plus the suffix length, or payload plus the suffix sum."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "When does print-after-recursion execute?",
        "options": [
          "While calls return",
          "Before descent",
          "Only on NULL"
        ],
        "answer": 0,
        "explanation": "The caller waits for its recursive suffix call."
      },
      {
        "type": "number",
        "prompt": "That reverse-print function prints what payload last?",
        "answer": 3,
        "explanation": "The original first node prints last.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "number",
        "prompt": "A recursive sum visits the pictured payloads. What result is returned?",
        "answer": 45,
        "explanation": "Add every payload exactly once.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Test the base condition",
          "Call the function on the smaller suffix",
          "Use its returned result",
          "Return this subproblem answer"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "fold",
    "start": 0.62,
    "sourceReferences": [
      {
        "lecture": 8,
        "file": "008_2d_Recursion_in_Linkedlist_Sum_and_length_of_linked_list.mp4",
        "start": 0.62,
        "end": 32.65,
        "text": "let us now see how to find sum of all nodes in linked list and obviously using recursion okay using recursion so I think it should be very easy program let me just try to write it so suppose you want the sum right so let me write a function that is going to sum all the nodes so obviously it should return integer and let's suppose this is sum it is taking the head as in parameter"
      },
      {
        "lecture": 8,
        "file": "008_2d_Recursion_in_Linkedlist_Sum_and_length_of_linked_list.mp4",
        "start": 33.35,
        "end": 61.29,
        "text": "and then you will say base case is I think very easy if if the head is null if the head is equal equal null then I think you will just say that sum is 0 right I mean there is nothing to sum so maybe return 0 because you are returning integer you are returning sum and otherwise you will be returning you will be returning you want some right so take the first element which is head"
      },
      {
        "lecture": 8,
        "file": "008_2d_Recursion_in_Linkedlist_Sum_and_length_of_linked_list.mp4",
        "start": 62.79,
        "end": 94.75,
        "text": "Had data and then let's just do the recursive summation which means some and then this time you will be sending next right Okay, so basically either you written zero or you turn had data plus whatever it returns so Ultimately like it will be keep on doing had had data plus had data. I mean had next data like that, right? So so what is happening? Let me just explain you that what is happening here is something like this Let's suppose"
      }
    ],
    "foundation": {
      "title": "Recursive length and sum",
      "idea": "The empty list provides a base result. A nonempty call combines one node with the value returned by its suffix: length adds one; sum adds the payload.",
      "terms": [
        "Suffix result: the answer for the smaller list.",
        "Combine: add this node contribution.",
        "Depth: simultaneous waiting calls."
      ],
      "example": "For 3 -> 6, length is 1+(1+0)=2 and sum is 3+(6+0)=9."
    }
  },
  {
    "id": 26,
    "lecture": 8,
    "title": "Compute returned values",
    "concept": "The empty list provides a base result. A nonempty call combines one node with the value returned by its suffix: length adds one; sum adds the payload.",
    "teachingSteps": [
      "Define length(NULL)=0 and sum(NULL)=0.",
      "Call the same function on next.",
      "Return one plus the suffix length, or payload plus the suffix sum."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Does printing in reverse change the node links?",
        "options": [
          "Always",
          "Only for a three-node list",
          "Not unless explicit link assignments are made"
        ],
        "answer": 2,
        "explanation": "Output order and structural reversal are different."
      },
      {
        "type": "number",
        "prompt": "A length function returns 0 at NULL and 1+length(next) otherwise. What value is returned?",
        "answer": 5,
        "explanation": "Each real node contributes one.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "An empty suffix is reached while printing a list recursively. What should it print?",
        "options": [
          "Nothing",
          "One payload equal to zero",
          "The next field of NULL"
        ],
        "answer": 0,
        "explanation": "There is no payload at NULL."
      },
      {
        "type": "number",
        "prompt": "Recursion stops only at NULL and does not use tail-call optimization. On 5 nodes, what is the maximum number of simultaneously live calls, including the base call?",
        "answer": 6,
        "explanation": "The n real-node calls wait while the NULL base call runs.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "fold",
    "start": 0.62,
    "sourceReferences": [
      {
        "lecture": 8,
        "file": "008_2d_Recursion_in_Linkedlist_Sum_and_length_of_linked_list.mp4",
        "start": 0.62,
        "end": 32.65,
        "text": "let us now see how to find sum of all nodes in linked list and obviously using recursion okay using recursion so I think it should be very easy program let me just try to write it so suppose you want the sum right so let me write a function that is going to sum all the nodes so obviously it should return integer and let's suppose this is sum it is taking the head as in parameter"
      },
      {
        "lecture": 8,
        "file": "008_2d_Recursion_in_Linkedlist_Sum_and_length_of_linked_list.mp4",
        "start": 33.35,
        "end": 61.29,
        "text": "and then you will say base case is I think very easy if if the head is null if the head is equal equal null then I think you will just say that sum is 0 right I mean there is nothing to sum so maybe return 0 because you are returning integer you are returning sum and otherwise you will be returning you will be returning you want some right so take the first element which is head"
      },
      {
        "lecture": 8,
        "file": "008_2d_Recursion_in_Linkedlist_Sum_and_length_of_linked_list.mp4",
        "start": 62.79,
        "end": 94.75,
        "text": "Had data and then let's just do the recursive summation which means some and then this time you will be sending next right Okay, so basically either you written zero or you turn had data plus whatever it returns so Ultimately like it will be keep on doing had had data plus had data. I mean had next data like that, right? So so what is happening? Let me just explain you that what is happening here is something like this Let's suppose"
      }
    ],
    "foundation": {
      "title": "Recursive length and sum",
      "idea": "The empty list provides a base result. A nonempty call combines one node with the value returned by its suffix: length adds one; sum adds the payload.",
      "terms": [
        "Suffix result: the answer for the smaller list.",
        "Combine: add this node contribution.",
        "Depth: simultaneous waiting calls."
      ],
      "example": "For 3 -> 6, length is 1+(1+0)=2 and sum is 3+(6+0)=9."
    }
  },
  {
    "id": 27,
    "lecture": 9,
    "title": "Return the new suffix",
    "concept": "Recursive append returns the head of the updated suffix. A caller must store that returned pointer in its next field and return its own node. The top-level caller keeps the returned head.",
    "teachingSteps": [
      "At NULL, return a newly initialized final node.",
      "Set p->next = append(p->next, value).",
      "Return p, and assign the top-level result back to head."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which assignment must precede predecessor.next=new to preserve the old successor?",
        "options": [
          "new.next=predecessor.next",
          "free(predecessor)",
          "head=NULL"
        ],
        "answer": 0,
        "explanation": "Initialize the new link before overwriting the only successor reference."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "New node",
            "Fresh initialized storage"
          ],
          [
            "Saved successor",
            "Preserved suffix"
          ],
          [
            "Returned head",
            "Updated sublist start"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Insert one new node into this 6-node list. What is its new length?",
        "answer": 7,
        "explanation": "Exactly one new node becomes reachable.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      },
      {
        "type": "number",
        "prompt": "For front insertion, count new.next=head and head=new. How many pointer assignments are stated?",
        "answer": 2,
        "explanation": "Initializing the payload is separate from these two link/reference assignments.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "append",
    "start": 59.07,
    "sourceReferences": [
      {
        "lecture": 9,
        "file": "009. 3a. Recursion in Linkedlist- insert at the end.mp4",
        "start": 59.07,
        "end": 88.79,
        "text": "So let's just see the first question which is saying the insert rear. You need to write the insert rear function that intend to insert at the, insert the node at the end. Like for example, if you want to insert this 15, then this is the original link list that we have. Then after the insert rear 15, then it will be, it will be like appending this 15 at the end. So basically you can say this is insert rear and this is head you are passing here."
      },
      {
        "lecture": 9,
        "file": "009. 3a. Recursion in Linkedlist- insert at the end.mp4",
        "start": 89.1,
        "end": 118.23,
        "text": "in this link list you insert 15 and after that you will be getting this okay so that is the kind of function we want to write I hope the objective is clear to everyone good now let me just try writing that okay so let's have this code so basically I have written the partial code I'm here saying that okay if l is null which means whatever you are passing that if that is null then you return the create node so basically the create node is some function that is just a my look I think right"
      },
      {
        "lecture": 9,
        "file": "009. 3a. Recursion in Linkedlist- insert at the end.mp4",
        "start": 119.54,
        "end": 148.51,
        "text": "this create node so basically it is just a malloc it will just set the data and the next to be null right and then it is returning the pointer to that newly created object okay anyway if you are not very much comfortable directly writing this return then maybe I can do something like this okay let me write something like this so here if you're not very much comfortable then maybe I can I mean this return was also fine but"
      }
    ],
    "foundation": {
      "title": "Recursive append and returned heads",
      "idea": "Recursive append returns the head of the updated suffix. A caller must store that returned pointer in its next field and return its own node. The top-level caller keeps the returned head.",
      "terms": [
        "Returned head: the first node of the updated sublist.",
        "Waiting caller: a frame that reconnects a suffix.",
        "Append: add a node at the tail."
      ],
      "example": "Appending 99 to 3 -> 6 returns the 3 node and reconnects the chain as 3 -> 6 -> 99."
    }
  },
  {
    "id": 28,
    "lecture": 9,
    "title": "Reconnect on the way back",
    "concept": "Recursive append returns the head of the updated suffix. A caller must store that returned pointer in its next field and return its own node. The top-level caller keeps the returned head.",
    "teachingSteps": [
      "At NULL, return a newly initialized final node.",
      "Set p->next = append(p->next, value).",
      "Return p, and assign the top-level result back to head."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "After a failed malloc returning NULL, what should happen before field writes?",
        "options": [
          "Write next first",
          "Write data first",
          "Handle failure without dereferencing NULL"
        ],
        "answer": 2,
        "explanation": "Allocation success must be checked before either field is accessed."
      },
      {
        "type": "number",
        "prompt": "A tail is not supplied. How many next hops reach the last node of this 6-node list?",
        "answer": 5,
        "explanation": "Begin at head and advance n-1 times.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Append 99 after the tail. What is the final node payload?",
        "answer": 99,
        "explanation": "The appended node is the new tail.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Create and validate the new node",
          "Initialize its payload",
          "Connect its next to the existing successor",
          "Update the live start or predecessor link"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "append",
    "start": 59.07,
    "sourceReferences": [
      {
        "lecture": 9,
        "file": "009. 3a. Recursion in Linkedlist- insert at the end.mp4",
        "start": 59.07,
        "end": 88.79,
        "text": "So let's just see the first question which is saying the insert rear. You need to write the insert rear function that intend to insert at the, insert the node at the end. Like for example, if you want to insert this 15, then this is the original link list that we have. Then after the insert rear 15, then it will be, it will be like appending this 15 at the end. So basically you can say this is insert rear and this is head you are passing here."
      },
      {
        "lecture": 9,
        "file": "009. 3a. Recursion in Linkedlist- insert at the end.mp4",
        "start": 89.1,
        "end": 118.23,
        "text": "in this link list you insert 15 and after that you will be getting this okay so that is the kind of function we want to write I hope the objective is clear to everyone good now let me just try writing that okay so let's have this code so basically I have written the partial code I'm here saying that okay if l is null which means whatever you are passing that if that is null then you return the create node so basically the create node is some function that is just a my look I think right"
      },
      {
        "lecture": 9,
        "file": "009. 3a. Recursion in Linkedlist- insert at the end.mp4",
        "start": 119.54,
        "end": 148.51,
        "text": "this create node so basically it is just a malloc it will just set the data and the next to be null right and then it is returning the pointer to that newly created object okay anyway if you are not very much comfortable directly writing this return then maybe I can do something like this okay let me write something like this so here if you're not very much comfortable then maybe I can I mean this return was also fine but"
      }
    ],
    "foundation": {
      "title": "Recursive append and returned heads",
      "idea": "Recursive append returns the head of the updated suffix. A caller must store that returned pointer in its next field and return its own node. The top-level caller keeps the returned head.",
      "terms": [
        "Returned head: the first node of the updated sublist.",
        "Waiting caller: a frame that reconnects a suffix.",
        "Append: add a node at the tail."
      ],
      "example": "Appending 99 to 3 -> 6 returns the 3 node and reconnects the chain as 3 -> 6 -> 99."
    }
  },
  {
    "id": 29,
    "lecture": 9,
    "title": "Append without losing the head",
    "concept": "Recursive append returns the head of the updated suffix. A caller must store that returned pointer in its next field and return its own node. The top-level caller keeps the returned head.",
    "teachingSteps": [
      "At NULL, return a newly initialized final node.",
      "Set p->next = append(p->next, value).",
      "Return p, and assign the top-level result back to head."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "A recursive append reconnects p.next to the updated suffix. What should this nonempty call return?",
        "options": [
          "NULL in every case",
          "p",
          "p.next in every case"
        ],
        "answer": 1,
        "explanation": "Returning p preserves this sublist first node."
      },
      {
        "type": "number",
        "prompt": "Front-insert 99 while preserving the suffix. What payload was first becomes the second payload?",
        "answer": 3,
        "explanation": "new.next refers to the old head, whose payload is 3.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "You front-insert into an empty list. What should the new next field contain?",
        "options": [
          "An uninitialized value",
          "A pointer to itself for an ordinary singly linked list",
          "NULL"
        ],
        "answer": 2,
        "explanation": "The empty old head is NULL."
      },
      {
        "type": "number",
        "prompt": "For append(p), the NULL suffix creates one node; each nonempty call recurses on next. On 6 nodes, how many calls occur including the NULL call?",
        "answer": 7,
        "explanation": "There is one call per existing node and one for the empty suffix.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "append",
    "start": 59.07,
    "sourceReferences": [
      {
        "lecture": 9,
        "file": "009. 3a. Recursion in Linkedlist- insert at the end.mp4",
        "start": 59.07,
        "end": 88.79,
        "text": "So let's just see the first question which is saying the insert rear. You need to write the insert rear function that intend to insert at the, insert the node at the end. Like for example, if you want to insert this 15, then this is the original link list that we have. Then after the insert rear 15, then it will be, it will be like appending this 15 at the end. So basically you can say this is insert rear and this is head you are passing here."
      },
      {
        "lecture": 9,
        "file": "009. 3a. Recursion in Linkedlist- insert at the end.mp4",
        "start": 89.1,
        "end": 118.23,
        "text": "in this link list you insert 15 and after that you will be getting this okay so that is the kind of function we want to write I hope the objective is clear to everyone good now let me just try writing that okay so let's have this code so basically I have written the partial code I'm here saying that okay if l is null which means whatever you are passing that if that is null then you return the create node so basically the create node is some function that is just a my look I think right"
      },
      {
        "lecture": 9,
        "file": "009. 3a. Recursion in Linkedlist- insert at the end.mp4",
        "start": 119.54,
        "end": 148.51,
        "text": "this create node so basically it is just a malloc it will just set the data and the next to be null right and then it is returning the pointer to that newly created object okay anyway if you are not very much comfortable directly writing this return then maybe I can do something like this okay let me write something like this so here if you're not very much comfortable then maybe I can I mean this return was also fine but"
      }
    ],
    "foundation": {
      "title": "Recursive append and returned heads",
      "idea": "Recursive append returns the head of the updated suffix. A caller must store that returned pointer in its next field and return its own node. The top-level caller keeps the returned head.",
      "terms": [
        "Returned head: the first node of the updated sublist.",
        "Waiting caller: a frame that reconnects a suffix.",
        "Append: add a node at the tail."
      ],
      "example": "Appending 99 to 3 -> 6 returns the 3 node and reconnects the chain as 3 -> 6 -> 99."
    }
  },
  {
    "id": 30,
    "lecture": 10,
    "title": "Distinguish p from p->next",
    "concept": "A return statement controls which node a caller can reconnect. In a faulty append that returns p->next instead of p, every caller can end up forwarding the newly appended node and skipping the original prefix.",
    "teachingSteps": [
      "Use the stated faulty rule: NULL returns a new node with value 99.",
      "Each caller sets p->next to the returned suffix, then returns p->next.",
      "Trace the final returned pointer separately from all allocated nodes."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Why does returning p.next differ from returning p?",
        "options": [
          "It automatically copies p",
          "It always frees p",
          "It can omit the current node from the returned path"
        ],
        "answer": 2,
        "explanation": "The caller reconnects to exactly the returned pointer."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Base case",
            "Stops descent"
          ],
          [
            "Recursive result",
            "Answer for the suffix"
          ],
          [
            "Unwinding",
            "Return to waiting callers"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Faulty append returns a new 99 node at NULL; otherwise p.next=f(p.next), then it returns p.next. What payload is returned to the top caller?",
        "answer": 99,
        "explanation": "Every caller forwards the new 99 node.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Assign that faulty returned pointer to head. How many nodes are reachable?",
        "answer": 1,
        "explanation": "The returned head is the single appended node.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "return-tail",
    "start": 0.21,
    "sourceReferences": [
      {
        "lecture": 10,
        "file": "010_3b_Recursion_in_Linkedlist_Question_2_based_on_recursion.mp4",
        "start": 0.21,
        "end": 26.22,
        "text": "Hi everyone. So we have just now seen this particular question. Let's call it question number one. So here the answer was C. Now here in this question what we were doing? We were inserting at the hint, right? So we have seen the explanation of this question. Now let's just do one thing just for the sake of variation. Here we are returning L. So instead of returning L, let's just return L next. I mean this is just a same question. So here I'm returning L next."
      },
      {
        "lecture": 10,
        "file": "010_3b_Recursion_in_Linkedlist_Question_2_based_on_recursion.mp4",
        "start": 26.59,
        "end": 54.05,
        "text": "As it is same question as earlier one but instead of returning L I am returning L next. Now let me know which of the following option is true. So just do one thing here is that take your own time I mean it might even take more than half an hour just to solve this particular question because this is very first question that you are solving. So irrespective of the time that you are taking just take whatever time you require pause this video and take the time that is required to solve this particular question. Right? Okay."
      },
      {
        "lecture": 10,
        "file": "010_3b_Recursion_in_Linkedlist_Question_2_based_on_recursion.mp4",
        "start": 54.89,
        "end": 81.36,
        "text": "And once you are done, then just resume this video and see the solution. So what they are saying that here you return L next, right? So let's just try doing this question. Maybe I can go to the next page and let's just see how to solve this particular question. So you are calling head comma eight, which means that you want to maybe add eight at some point in time in this particular."
      }
    ],
    "foundation": {
      "title": "How a wrong return loses a list",
      "idea": "A return statement controls which node a caller can reconnect. In a faulty append that returns p->next instead of p, every caller can end up forwarding the newly appended node and skipping the original prefix.",
      "terms": [
        "Reachable: visitable from the current head.",
        "Unreachable: allocated but absent from that head path.",
        "Memory leak: allocated storage that has lost its owning reference."
      ],
      "example": "For the faulty rule on 3 -> 6, the returned head is 99. Assigning it to head loses access to the original nodes."
    }
  },
  {
    "id": 31,
    "lecture": 10,
    "title": "Trace a faulty returned pointer",
    "concept": "A return statement controls which node a caller can reconnect. In a faulty append that returns p->next instead of p, every caller can end up forwarding the newly appended node and skipping the original prefix.",
    "teachingSteps": [
      "Use the stated faulty rule: NULL returns a new node with value 99.",
      "Each caller sets p->next to the returned suffix, then returns p->next.",
      "Trace the final returned pointer separately from all allocated nodes."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Are unreachable nodes necessarily already freed?",
        "options": [
          "Only for odd payloads",
          "No",
          "Yes"
        ],
        "answer": 1,
        "explanation": "The stated faulty function does not release them."
      },
      {
        "type": "number",
        "prompt": "How many original nodes become unreachable from that new head?",
        "answer": 7,
        "explanation": "All n original nodes are skipped from the new head path.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Counting the original 7 nodes and the newly allocated 99 node, how many allocations exist if none were freed?",
        "answer": 8,
        "explanation": "Reachable length and allocated node count differ.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Test the base condition",
          "Call the function on the smaller suffix",
          "Use its returned result",
          "Return this subproblem answer"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "return-tail",
    "start": 0.21,
    "sourceReferences": [
      {
        "lecture": 10,
        "file": "010_3b_Recursion_in_Linkedlist_Question_2_based_on_recursion.mp4",
        "start": 0.21,
        "end": 26.22,
        "text": "Hi everyone. So we have just now seen this particular question. Let's call it question number one. So here the answer was C. Now here in this question what we were doing? We were inserting at the hint, right? So we have seen the explanation of this question. Now let's just do one thing just for the sake of variation. Here we are returning L. So instead of returning L, let's just return L next. I mean this is just a same question. So here I'm returning L next."
      },
      {
        "lecture": 10,
        "file": "010_3b_Recursion_in_Linkedlist_Question_2_based_on_recursion.mp4",
        "start": 26.59,
        "end": 54.05,
        "text": "As it is same question as earlier one but instead of returning L I am returning L next. Now let me know which of the following option is true. So just do one thing here is that take your own time I mean it might even take more than half an hour just to solve this particular question because this is very first question that you are solving. So irrespective of the time that you are taking just take whatever time you require pause this video and take the time that is required to solve this particular question. Right? Okay."
      },
      {
        "lecture": 10,
        "file": "010_3b_Recursion_in_Linkedlist_Question_2_based_on_recursion.mp4",
        "start": 54.89,
        "end": 81.36,
        "text": "And once you are done, then just resume this video and see the solution. So what they are saying that here you return L next, right? So let's just try doing this question. Maybe I can go to the next page and let's just see how to solve this particular question. So you are calling head comma eight, which means that you want to maybe add eight at some point in time in this particular."
      }
    ],
    "foundation": {
      "title": "How a wrong return loses a list",
      "idea": "A return statement controls which node a caller can reconnect. In a faulty append that returns p->next instead of p, every caller can end up forwarding the newly appended node and skipping the original prefix.",
      "terms": [
        "Reachable: visitable from the current head.",
        "Unreachable: allocated but absent from that head path.",
        "Memory leak: allocated storage that has lost its owning reference."
      ],
      "example": "For the faulty rule on 3 -> 6, the returned head is 99. Assigning it to head loses access to the original nodes."
    }
  },
  {
    "id": 32,
    "lecture": 10,
    "title": "Identify unreachable original nodes",
    "concept": "A return statement controls which node a caller can reconnect. In a faulty append that returns p->next instead of p, every caller can end up forwarding the newly appended node and skipping the original prefix.",
    "teachingSteps": [
      "Use the stated faulty rule: NULL returns a new node with value 99.",
      "Each caller sets p->next to the returned suffix, then returns p->next.",
      "Trace the final returned pointer separately from all allocated nodes."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "What does correct recursive append return in a nonempty call?",
        "options": [
          "The current node p",
          "Always the final tail",
          "Always NULL"
        ],
        "answer": 0,
        "explanation": "The current node is this sublist head."
      },
      {
        "type": "number",
        "prompt": "How many nonempty callers assign their next field under this rule?",
        "answer": 7,
        "explanation": "One such assignment occurs per original node.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "How should a top-level append result be retained?",
        "options": [
          "Store it in an unrelated integer",
          "Assign it to head",
          "Discard it for an initially empty list"
        ],
        "answer": 1,
        "explanation": "The initially empty case especially needs the returned new head."
      },
      {
        "type": "number",
        "prompt": "How many nodes in the reachable result have next=NULL?",
        "answer": 1,
        "explanation": "The single returned node is the final node.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "return-tail",
    "start": 0.21,
    "sourceReferences": [
      {
        "lecture": 10,
        "file": "010_3b_Recursion_in_Linkedlist_Question_2_based_on_recursion.mp4",
        "start": 0.21,
        "end": 26.22,
        "text": "Hi everyone. So we have just now seen this particular question. Let's call it question number one. So here the answer was C. Now here in this question what we were doing? We were inserting at the hint, right? So we have seen the explanation of this question. Now let's just do one thing just for the sake of variation. Here we are returning L. So instead of returning L, let's just return L next. I mean this is just a same question. So here I'm returning L next."
      },
      {
        "lecture": 10,
        "file": "010_3b_Recursion_in_Linkedlist_Question_2_based_on_recursion.mp4",
        "start": 26.59,
        "end": 54.05,
        "text": "As it is same question as earlier one but instead of returning L I am returning L next. Now let me know which of the following option is true. So just do one thing here is that take your own time I mean it might even take more than half an hour just to solve this particular question because this is very first question that you are solving. So irrespective of the time that you are taking just take whatever time you require pause this video and take the time that is required to solve this particular question. Right? Okay."
      },
      {
        "lecture": 10,
        "file": "010_3b_Recursion_in_Linkedlist_Question_2_based_on_recursion.mp4",
        "start": 54.89,
        "end": 81.36,
        "text": "And once you are done, then just resume this video and see the solution. So what they are saying that here you return L next, right? So let's just try doing this question. Maybe I can go to the next page and let's just see how to solve this particular question. So you are calling head comma eight, which means that you want to maybe add eight at some point in time in this particular."
      }
    ],
    "foundation": {
      "title": "How a wrong return loses a list",
      "idea": "A return statement controls which node a caller can reconnect. In a faulty append that returns p->next instead of p, every caller can end up forwarding the newly appended node and skipping the original prefix.",
      "terms": [
        "Reachable: visitable from the current head.",
        "Unreachable: allocated but absent from that head path.",
        "Memory leak: allocated storage that has lost its owning reference."
      ],
      "example": "For the faulty rule on 3 -> 6, the returned head is 99. Assigning it to head loses access to the original nodes."
    }
  },
  {
    "id": 33,
    "lecture": 11,
    "title": "Stop at the first match",
    "concept": "Removing the first match stops removal immediately after a match. Recursive callers before the match reconnect to its surviving successor; later equal values remain.",
    "teachingSteps": [
      "Return NULL for an empty suffix.",
      "On a match, retain next, release this node and return next without further removal.",
      "Otherwise reconnect next to the recursive result and return this node."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule distinguishes removing every match from removing the first?",
        "options": [
          "Return the original head without changes",
          "Continue into the suffix after a match",
          "Stop on any matching value"
        ],
        "answer": 1,
        "explanation": "First-match deletion stops removal; all-match filtering continues."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Match",
            "Candidate for removal"
          ],
          [
            "Survivor",
            "Retained node"
          ],
          [
            "Returned pointer",
            "Processed suffix head"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Remove only the first occurrence of 2 from 8 -> 2 -> 2 -> 11 -> 2. How many nodes remain?",
        "answer": 4,
        "explanation": "Result: 8 -> 2 -> 11 -> 2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            8,
            2,
            2,
            11,
            2
          ]
        }
      },
      {
        "type": "number",
        "prompt": "How many matching 2 nodes are removed by the stated operation?",
        "answer": 1,
        "explanation": "Removal stops after the first match.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            8,
            2,
            2,
            11,
            2
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "remove-first",
    "start": 0.27,
    "sourceReferences": [
      {
        "lecture": 11,
        "file": "011_3c_Recursion_in_Linkedlist_Question_3_based_on_recursion.mp4",
        "start": 0.27,
        "end": 30.46,
        "text": "Hi everyone. Let us now try to solve this question. So this question is basically a linguist question based on the recursion. So let's see what it is saying. There is some function which is given and then they are asking what output can be expected from the function called remove first hat comma 2. So remove first is a function here, hat comma 2 called on the following linguist. So the head is currently pointing at the front of linguist, okay. So which of the following option is correct?"
      },
      {
        "lecture": 11,
        "file": "011_3c_Recursion_in_Linkedlist_Question_3_based_on_recursion.mp4",
        "start": 67.23,
        "end": 102.85,
        "text": "here so let me write this linked list also one two two so they are saying one and then two and then two and then eight and then six then two times two and then right so this is the linked list now let's let's try calling the function which is removed first had comma two so let's see what they're doing"
      },
      {
        "lecture": 11,
        "file": "011_3c_Recursion_in_Linkedlist_Question_3_based_on_recursion.mp4",
        "start": 133.73,
        "end": 163.03,
        "text": "temp will start pointing to the head next this is temp and free head so you remove this and return temp okay and then you are returning temp which means you are returning a pointer to 2 so you are removing this and then you are returning a pointer to 2 that's what you are doing right okay and who will catch this pointer with the like I mean if if something is not if something is not x then I think they will come to the else part and whoever is whoever has called this function"
      }
    ],
    "foundation": {
      "title": "Removing the first matching node",
      "idea": "Removing the first match stops removal immediately after a match. Recursive callers before the match reconnect to its surviving successor; later equal values remain.",
      "terms": [
        "First occurrence: the earliest matching node from head.",
        "Preserved suffix: nodes after the removed match.",
        "Reconnect: assign the returned sublist head."
      ],
      "example": "Removing the first 2 from 3 -> 2 -> 2 -> 6 leaves 3 -> 2 -> 6."
    }
  },
  {
    "id": 34,
    "lecture": 11,
    "title": "Reconnect the untouched suffix",
    "concept": "Removing the first match stops removal immediately after a match. Recursive callers before the match reconnect to its surviving successor; later equal values remain.",
    "teachingSteps": [
      "Return NULL for an empty suffix.",
      "On a match, retain next, release this node and return next without further removal.",
      "Otherwise reconnect next to the recursive result and return this node."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "What should removing matches from an empty suffix return?",
        "options": [
          "NULL",
          "A newly allocated sentinel without stating one",
          "An uninitialized pointer"
        ],
        "answer": 0,
        "explanation": "The empty suffix remains empty."
      },
      {
        "type": "number",
        "prompt": "How many matching 2 nodes remain in the result?",
        "answer": 2,
        "explanation": "Count the remaining matching payloads.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            8,
            2,
            2,
            11,
            2
          ]
        }
      },
      {
        "type": "number",
        "prompt": "What is the sum of all surviving payloads?",
        "answer": 23,
        "explanation": "Add the resulting payloads 8, 2, 11, 2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            8,
            2,
            2,
            11,
            2
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Check for an empty suffix",
          "Decide whether this node matches",
          "Preserve or process the successor as required",
          "Return the surviving sublist head"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "remove-first",
    "start": 0.27,
    "sourceReferences": [
      {
        "lecture": 11,
        "file": "011_3c_Recursion_in_Linkedlist_Question_3_based_on_recursion.mp4",
        "start": 0.27,
        "end": 30.46,
        "text": "Hi everyone. Let us now try to solve this question. So this question is basically a linguist question based on the recursion. So let's see what it is saying. There is some function which is given and then they are asking what output can be expected from the function called remove first hat comma 2. So remove first is a function here, hat comma 2 called on the following linguist. So the head is currently pointing at the front of linguist, okay. So which of the following option is correct?"
      },
      {
        "lecture": 11,
        "file": "011_3c_Recursion_in_Linkedlist_Question_3_based_on_recursion.mp4",
        "start": 67.23,
        "end": 102.85,
        "text": "here so let me write this linked list also one two two so they are saying one and then two and then two and then eight and then six then two times two and then right so this is the linked list now let's let's try calling the function which is removed first had comma two so let's see what they're doing"
      },
      {
        "lecture": 11,
        "file": "011_3c_Recursion_in_Linkedlist_Question_3_based_on_recursion.mp4",
        "start": 133.73,
        "end": 163.03,
        "text": "temp will start pointing to the head next this is temp and free head so you remove this and return temp okay and then you are returning temp which means you are returning a pointer to 2 so you are removing this and then you are returning a pointer to 2 that's what you are doing right okay and who will catch this pointer with the like I mean if if something is not if something is not x then I think they will come to the else part and whoever is whoever has called this function"
      }
    ],
    "foundation": {
      "title": "Removing the first matching node",
      "idea": "Removing the first match stops removal immediately after a match. Recursive callers before the match reconnect to its surviving successor; later equal values remain.",
      "terms": [
        "First occurrence: the earliest matching node from head.",
        "Preserved suffix: nodes after the removed match.",
        "Reconnect: assign the returned sublist head."
      ],
      "example": "Removing the first 2 from 3 -> 2 -> 2 -> 6 leaves 3 -> 2 -> 6."
    }
  },
  {
    "id": 35,
    "lecture": 11,
    "title": "Keep later duplicates",
    "concept": "Removing the first match stops removal immediately after a match. Recursive callers before the match reconnect to its surviving successor; later equal values remain.",
    "teachingSteps": [
      "Return NULL for an empty suffix.",
      "On a match, retain next, release this node and return next without further removal.",
      "Otherwise reconnect next to the recursive result and return this node."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "When keeping a nonmatching node in a recursive filter, what happens to its next link?",
        "options": [
          "It must always become NULL",
          "It is freed before recursion",
          "It receives the processed suffix head"
        ],
        "answer": 2,
        "explanation": "Reconnection preserves the surviving suffix."
      },
      {
        "type": "number",
        "prompt": "What payload remains at the head?",
        "answer": 8,
        "explanation": "The initial nonmatching node is retained.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            8,
            2,
            2,
            11,
            2
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "A removed node was allocated on the heap. Bypassing it alone does what?",
        "options": [
          "Changes reachability but does not free its storage",
          "Releases it exactly once",
          "Copies its payload automatically"
        ],
        "answer": 0,
        "explanation": "The algorithm must explicitly manage lifetime."
      },
      {
        "type": "number",
        "prompt": "The algorithm releases every removed node exactly once. How many calls to free occur?",
        "answer": 1,
        "explanation": "One release per removed allocation.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            8,
            2,
            2,
            11,
            2
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "remove-first",
    "start": 0.27,
    "sourceReferences": [
      {
        "lecture": 11,
        "file": "011_3c_Recursion_in_Linkedlist_Question_3_based_on_recursion.mp4",
        "start": 0.27,
        "end": 30.46,
        "text": "Hi everyone. Let us now try to solve this question. So this question is basically a linguist question based on the recursion. So let's see what it is saying. There is some function which is given and then they are asking what output can be expected from the function called remove first hat comma 2. So remove first is a function here, hat comma 2 called on the following linguist. So the head is currently pointing at the front of linguist, okay. So which of the following option is correct?"
      },
      {
        "lecture": 11,
        "file": "011_3c_Recursion_in_Linkedlist_Question_3_based_on_recursion.mp4",
        "start": 67.23,
        "end": 102.85,
        "text": "here so let me write this linked list also one two two so they are saying one and then two and then two and then eight and then six then two times two and then right so this is the linked list now let's let's try calling the function which is removed first had comma two so let's see what they're doing"
      },
      {
        "lecture": 11,
        "file": "011_3c_Recursion_in_Linkedlist_Question_3_based_on_recursion.mp4",
        "start": 133.73,
        "end": 163.03,
        "text": "temp will start pointing to the head next this is temp and free head so you remove this and return temp okay and then you are returning temp which means you are returning a pointer to 2 so you are removing this and then you are returning a pointer to 2 that's what you are doing right okay and who will catch this pointer with the like I mean if if something is not if something is not x then I think they will come to the else part and whoever is whoever has called this function"
      }
    ],
    "foundation": {
      "title": "Removing the first matching node",
      "idea": "Removing the first match stops removal immediately after a match. Recursive callers before the match reconnect to its surviving successor; later equal values remain.",
      "terms": [
        "First occurrence: the earliest matching node from head.",
        "Preserved suffix: nodes after the removed match.",
        "Reconnect: assign the returned sublist head."
      ],
      "example": "Removing the first 2 from 3 -> 2 -> 2 -> 6 leaves 3 -> 2 -> 6."
    }
  },
  {
    "id": 36,
    "lecture": 12,
    "title": "Continue after a match",
    "concept": "Removing every match must continue into the suffix even after a matching node. Return the updated suffix when deleting this node; return this node after reconnecting it when keeping it.",
    "teachingSteps": [
      "Handle NULL directly.",
      "For a match, retain next, release this node, and continue removing from next.",
      "For a nonmatch, reconnect its next field to the processed suffix."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which rule distinguishes removing every match from removing the first?",
        "options": [
          "Continue into the suffix after a match",
          "Stop on any matching value",
          "Return the original head without changes"
        ],
        "answer": 0,
        "explanation": "First-match deletion stops removal; all-match filtering continues."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Match",
            "Candidate for removal"
          ],
          [
            "Survivor",
            "Retained node"
          ],
          [
            "Returned pointer",
            "Processed suffix head"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Remove all occurrences of 2 from 3 -> 2 -> 2 -> 6 -> 2. How many nodes remain?",
        "answer": 2,
        "explanation": "Result: 3 -> 6.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            2,
            2,
            6,
            2
          ]
        }
      },
      {
        "type": "number",
        "prompt": "How many matching 2 nodes are removed by the stated operation?",
        "answer": 3,
        "explanation": "All three matches are removed.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            2,
            2,
            6,
            2
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "remove-all",
    "start": 21.69,
    "sourceReferences": [
      {
        "lecture": 12,
        "file": "012_3d_Recursion_in_Linkedlist_Question_based_on_recursion.mp4",
        "start": 21.69,
        "end": 50.58,
        "text": "Let me just take you to the next page and let's just try to drive on this particular function. So we are passing data is two, right? So initially l is pointing here. I mean l is a local variable. So l is pointing here. Now you're saying that this l data equal to equal data since data has been passed as two. So data is again a local variable for this function called which is two. And since it is not two, neither l is null. So I will be"
      },
      {
        "lecture": 12,
        "file": "012_3d_Recursion_in_Linkedlist_Question_based_on_recursion.mp4",
        "start": 50.78,
        "end": 79.86,
        "text": "I will be going to the else part. I will say l next equal to remove all this Which is very interesting. So what I'm saying l next which means this will be pointing to whatever this next function called returns, right? Whatever this next function called returns, this will pointing to this, right? And then I will be ultimately returning l. So once this l next is settled, I will be returning return l Okay, good. Now, let's just go to the next page now What I will do here"
      },
      {
        "lecture": 12,
        "file": "012_3d_Recursion_in_Linkedlist_Question_based_on_recursion.mp4",
        "start": 80.35,
        "end": 109.51,
        "text": "this l will be pointing to this 2 which is a local variable this is a local variable l is a local variable data is also again a next local variable which is 2 now I will say that if l data equal equal to in this case since it is true then it is very interesting then I am saying return remove all l next comma data which means that I am saying that this is going to return I mean this particular function call that I am currently talking about right this particular function call is going to return"
      }
    ],
    "foundation": {
      "title": "Removing every matching node",
      "idea": "Removing every match must continue into the suffix even after a matching node. Return the updated suffix when deleting this node; return this node after reconnecting it when keeping it.",
      "terms": [
        "Filter: retain only values satisfying a condition.",
        "Survivor: a node kept in the result.",
        "Release: end storage of a removed dynamically allocated node."
      ],
      "example": "Removing all 2 values from 3 -> 2 -> 2 -> 6 leaves 3 -> 6."
    }
  },
  {
    "id": 37,
    "lecture": 12,
    "title": "Keep only surviving nodes",
    "concept": "Removing every match must continue into the suffix even after a matching node. Return the updated suffix when deleting this node; return this node after reconnecting it when keeping it.",
    "teachingSteps": [
      "Handle NULL directly.",
      "For a match, retain next, release this node, and continue removing from next.",
      "For a nonmatch, reconnect its next field to the processed suffix."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "What should removing matches from an empty suffix return?",
        "options": [
          "A newly allocated sentinel without stating one",
          "An uninitialized pointer",
          "NULL"
        ],
        "answer": 2,
        "explanation": "The empty suffix remains empty."
      },
      {
        "type": "number",
        "prompt": "How many matching 2 nodes remain in the result?",
        "answer": 0,
        "explanation": "Count the remaining matching payloads.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            2,
            2,
            6,
            2
          ]
        }
      },
      {
        "type": "number",
        "prompt": "What is the sum of all surviving payloads?",
        "answer": 9,
        "explanation": "Add the resulting payloads 3, 6.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            2,
            2,
            6,
            2
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Check for an empty suffix",
          "Decide whether this node matches",
          "Preserve or process the successor as required",
          "Return the surviving sublist head"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "remove-all",
    "start": 21.69,
    "sourceReferences": [
      {
        "lecture": 12,
        "file": "012_3d_Recursion_in_Linkedlist_Question_based_on_recursion.mp4",
        "start": 21.69,
        "end": 50.58,
        "text": "Let me just take you to the next page and let's just try to drive on this particular function. So we are passing data is two, right? So initially l is pointing here. I mean l is a local variable. So l is pointing here. Now you're saying that this l data equal to equal data since data has been passed as two. So data is again a local variable for this function called which is two. And since it is not two, neither l is null. So I will be"
      },
      {
        "lecture": 12,
        "file": "012_3d_Recursion_in_Linkedlist_Question_based_on_recursion.mp4",
        "start": 50.78,
        "end": 79.86,
        "text": "I will be going to the else part. I will say l next equal to remove all this Which is very interesting. So what I'm saying l next which means this will be pointing to whatever this next function called returns, right? Whatever this next function called returns, this will pointing to this, right? And then I will be ultimately returning l. So once this l next is settled, I will be returning return l Okay, good. Now, let's just go to the next page now What I will do here"
      },
      {
        "lecture": 12,
        "file": "012_3d_Recursion_in_Linkedlist_Question_based_on_recursion.mp4",
        "start": 80.35,
        "end": 109.51,
        "text": "this l will be pointing to this 2 which is a local variable this is a local variable l is a local variable data is also again a next local variable which is 2 now I will say that if l data equal equal to in this case since it is true then it is very interesting then I am saying return remove all l next comma data which means that I am saying that this is going to return I mean this particular function call that I am currently talking about right this particular function call is going to return"
      }
    ],
    "foundation": {
      "title": "Removing every matching node",
      "idea": "Removing every match must continue into the suffix even after a matching node. Return the updated suffix when deleting this node; return this node after reconnecting it when keeping it.",
      "terms": [
        "Filter: retain only values satisfying a condition.",
        "Survivor: a node kept in the result.",
        "Release: end storage of a removed dynamically allocated node."
      ],
      "example": "Removing all 2 values from 3 -> 2 -> 2 -> 6 leaves 3 -> 6."
    }
  },
  {
    "id": 38,
    "lecture": 12,
    "title": "Release removed nodes explicitly",
    "concept": "Removing every match must continue into the suffix even after a matching node. Return the updated suffix when deleting this node; return this node after reconnecting it when keeping it.",
    "teachingSteps": [
      "Handle NULL directly.",
      "For a match, retain next, release this node, and continue removing from next.",
      "For a nonmatch, reconnect its next field to the processed suffix."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "When keeping a nonmatching node in a recursive filter, what happens to its next link?",
        "options": [
          "It is freed before recursion",
          "It receives the processed suffix head",
          "It must always become NULL"
        ],
        "answer": 1,
        "explanation": "Reconnection preserves the surviving suffix."
      },
      {
        "type": "number",
        "prompt": "What payload remains at the head?",
        "answer": 3,
        "explanation": "The initial nonmatching node is retained.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            2,
            2,
            6,
            2
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "A removed node was allocated on the heap. Bypassing it alone does what?",
        "options": [
          "Releases it exactly once",
          "Copies its payload automatically",
          "Changes reachability but does not free its storage"
        ],
        "answer": 2,
        "explanation": "The algorithm must explicitly manage lifetime."
      },
      {
        "type": "number",
        "prompt": "The algorithm releases every removed node exactly once. How many calls to free occur?",
        "answer": 3,
        "explanation": "One release per removed allocation.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            2,
            2,
            6,
            2
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "remove-all",
    "start": 21.69,
    "sourceReferences": [
      {
        "lecture": 12,
        "file": "012_3d_Recursion_in_Linkedlist_Question_based_on_recursion.mp4",
        "start": 21.69,
        "end": 50.58,
        "text": "Let me just take you to the next page and let's just try to drive on this particular function. So we are passing data is two, right? So initially l is pointing here. I mean l is a local variable. So l is pointing here. Now you're saying that this l data equal to equal data since data has been passed as two. So data is again a local variable for this function called which is two. And since it is not two, neither l is null. So I will be"
      },
      {
        "lecture": 12,
        "file": "012_3d_Recursion_in_Linkedlist_Question_based_on_recursion.mp4",
        "start": 50.78,
        "end": 79.86,
        "text": "I will be going to the else part. I will say l next equal to remove all this Which is very interesting. So what I'm saying l next which means this will be pointing to whatever this next function called returns, right? Whatever this next function called returns, this will pointing to this, right? And then I will be ultimately returning l. So once this l next is settled, I will be returning return l Okay, good. Now, let's just go to the next page now What I will do here"
      },
      {
        "lecture": 12,
        "file": "012_3d_Recursion_in_Linkedlist_Question_based_on_recursion.mp4",
        "start": 80.35,
        "end": 109.51,
        "text": "this l will be pointing to this 2 which is a local variable this is a local variable l is a local variable data is also again a next local variable which is 2 now I will say that if l data equal equal to in this case since it is true then it is very interesting then I am saying return remove all l next comma data which means that I am saying that this is going to return I mean this particular function call that I am currently talking about right this particular function call is going to return"
      }
    ],
    "foundation": {
      "title": "Removing every matching node",
      "idea": "Removing every match must continue into the suffix even after a matching node. Return the updated suffix when deleting this node; return this node after reconnecting it when keeping it.",
      "terms": [
        "Filter: retain only values satisfying a condition.",
        "Survivor: a node kept in the result.",
        "Release: end storage of a removed dynamically allocated node."
      ],
      "example": "Removing all 2 values from 3 -> 2 -> 2 -> 6 leaves 3 -> 6."
    }
  },
  {
    "id": 39,
    "lecture": 13,
    "title": "Form disjoint pairs",
    "concept": "Adjacent payload swapping groups positions (0,1), (2,3), and so on. This variant swaps data values inside existing nodes; it does not move node addresses. An unmatched final node remains unchanged.",
    "teachingSteps": [
      "Stop if fewer than two nodes remain.",
      "Exchange the two payloads in the next complete pair.",
      "Continue from the node after that pair."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "What must be saved before overwriting a forward next link?",
        "options": [
          "Only the node color",
          "Nothing; the old link remains accessible after any overwrite",
          "The old successor if it is still needed"
        ],
        "answer": 2,
        "explanation": "Preserve a live route to the untouched suffix."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Prefix",
            "Already processed nodes"
          ],
          [
            "Suffix",
            "Unprocessed remaining nodes"
          ],
          [
            "Head",
            "Chosen starting reference"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Swap each adjacent pair of payloads. What is the first payload afterward?",
        "answer": 6,
        "explanation": "The first complete pair exchanges 3 and 6.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      },
      {
        "type": "number",
        "prompt": "What is the second payload afterward?",
        "answer": 3,
        "explanation": "The original first payload moves to the second position.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "pairs",
    "start": 0.78,
    "sourceReferences": [
      {
        "lecture": 13,
        "file": "013_3e_Recursion_in_Linkedlist_Swap_pairwise_Leetcode_question.mp4",
        "start": 0.78,
        "end": 27.32,
        "text": "Hi everyone, let us now solve a question based on linked list that is swap node in pairs Which is saying that if you have two nodes, I mean if you have linked list something like this Let's suppose it is pointing to null then you set these nodes in pairs, right? So it will become 2143. So actually I found this question on lead code So maybe I can open this up. So this is a medium level question, which means I mean this is quite a good question. So which has been asking I think"
      },
      {
        "lecture": 13,
        "file": "013_3e_Recursion_in_Linkedlist_Swap_pairwise_Leetcode_question.mp4",
        "start": 27.86,
        "end": 55.3,
        "text": "Okay, this is a premium feature. Okay, so I don't have premium, so I can't see that this has been asked in which companies, but yeah, it can be seen that this is a medium level question. So let's just solve this question. I think although this is a medium level question, which is supposed to be hard for a beginner, but I think we can solve this easily. So which is saying that you need to swap nodes and pair. So what you can do, given this link list, what you can do, you can basically swap these two nodes and then pass a pointer to this, right?"
      },
      {
        "lecture": 13,
        "file": "013_3e_Recursion_in_Linkedlist_Swap_pairwise_Leetcode_question.mp4",
        "start": 134.49,
        "end": 165.32,
        "text": "if l is null because because of short circuiting it is true then it will not go to this right so these kind of expression i mean the short circuiting is useful for the safety checking okay that's just one thing anyway now what you need to do you can just swap these two nodes i think very easy in let's suppose time equal to l data l data and then l data equal to l next data l next data right"
      }
    ],
    "foundation": {
      "title": "Swapping adjacent payloads",
      "idea": "Adjacent payload swapping groups positions (0,1), (2,3), and so on. This variant swaps data values inside existing nodes; it does not move node addresses. An unmatched final node remains unchanged.",
      "terms": [
        "Pair: two adjacent positions.",
        "Payload swap: exchange values without relinking nodes.",
        "Odd tail: one last node with no partner."
      ],
      "example": "3 -> 6 -> 9 becomes 6 -> 3 -> 9 after one complete pair swap."
    }
  },
  {
    "id": 40,
    "lecture": 13,
    "title": "Swap values inside each pair",
    "concept": "Adjacent payload swapping groups positions (0,1), (2,3), and so on. This variant swaps data values inside existing nodes; it does not move node addresses. An unmatched final node remains unchanged.",
    "teachingSteps": [
      "Stop if fewer than two nodes remain.",
      "Exchange the two payloads in the next complete pair.",
      "Continue from the node after that pair."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which circular traversal condition replaces stopping at NULL?",
        "options": [
          "The address is larger than before",
          "The cursor has returned to the chosen head after a visit",
          "The payload becomes zero"
        ],
        "answer": 1,
        "explanation": "A nonempty circle need not have a NULL next link."
      },
      {
        "type": "number",
        "prompt": "How many complete pairs does this 4-node list contain?",
        "answer": 2,
        "explanation": "Each pair consumes two nodes.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      },
      {
        "type": "number",
        "prompt": "How many nodes exist after payload swapping?",
        "answer": 4,
        "explanation": "No node is created or deleted.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Check the empty or short boundary case",
          "Identify the affected nodes",
          "Apply the required updates",
          "Verify the final traversal rule"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "pairs",
    "start": 0.78,
    "sourceReferences": [
      {
        "lecture": 13,
        "file": "013_3e_Recursion_in_Linkedlist_Swap_pairwise_Leetcode_question.mp4",
        "start": 0.78,
        "end": 27.32,
        "text": "Hi everyone, let us now solve a question based on linked list that is swap node in pairs Which is saying that if you have two nodes, I mean if you have linked list something like this Let's suppose it is pointing to null then you set these nodes in pairs, right? So it will become 2143. So actually I found this question on lead code So maybe I can open this up. So this is a medium level question, which means I mean this is quite a good question. So which has been asking I think"
      },
      {
        "lecture": 13,
        "file": "013_3e_Recursion_in_Linkedlist_Swap_pairwise_Leetcode_question.mp4",
        "start": 27.86,
        "end": 55.3,
        "text": "Okay, this is a premium feature. Okay, so I don't have premium, so I can't see that this has been asked in which companies, but yeah, it can be seen that this is a medium level question. So let's just solve this question. I think although this is a medium level question, which is supposed to be hard for a beginner, but I think we can solve this easily. So which is saying that you need to swap nodes and pair. So what you can do, given this link list, what you can do, you can basically swap these two nodes and then pass a pointer to this, right?"
      },
      {
        "lecture": 13,
        "file": "013_3e_Recursion_in_Linkedlist_Swap_pairwise_Leetcode_question.mp4",
        "start": 134.49,
        "end": 165.32,
        "text": "if l is null because because of short circuiting it is true then it will not go to this right so these kind of expression i mean the short circuiting is useful for the safety checking okay that's just one thing anyway now what you need to do you can just swap these two nodes i think very easy in let's suppose time equal to l data l data and then l data equal to l next data l next data right"
      }
    ],
    "foundation": {
      "title": "Swapping adjacent payloads",
      "idea": "Adjacent payload swapping groups positions (0,1), (2,3), and so on. This variant swaps data values inside existing nodes; it does not move node addresses. An unmatched final node remains unchanged.",
      "terms": [
        "Pair: two adjacent positions.",
        "Payload swap: exchange values without relinking nodes.",
        "Odd tail: one last node with no partner."
      ],
      "example": "3 -> 6 -> 9 becomes 6 -> 3 -> 9 after one complete pair swap."
    }
  },
  {
    "id": 41,
    "lecture": 13,
    "title": "Preserve an odd trailing node",
    "concept": "Adjacent payload swapping groups positions (0,1), (2,3), and so on. This variant swaps data values inside existing nodes; it does not move node addresses. An unmatched final node remains unchanged.",
    "teachingSteps": [
      "Stop if fewer than two nodes remain.",
      "Exchange the two payloads in the next complete pair.",
      "Continue from the node after that pair."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "In a noncircular doubly linked list, what is the first node prev?",
        "options": [
          "NULL",
          "The tail by definition",
          "Its own next"
        ],
        "answer": 0,
        "explanation": "There is no predecessor at the first endpoint."
      },
      {
        "type": "number",
        "prompt": "How many payload positions participate in complete pairs?",
        "answer": 4,
        "explanation": "Two positions change per complete pair.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "What is unchanged by a pure payload-pair swap?",
        "options": [
          "The number of complete pairs in an odd list becomes fractional",
          "Node identities and next links",
          "The order of all payloads"
        ],
        "answer": 1,
        "explanation": "Payload exchange does not relink nodes."
      },
      {
        "type": "number",
        "prompt": "For an odd-length list with 5 nodes valued 3,6,..., what payload remains in the unmatched final node?",
        "answer": 15,
        "explanation": "An odd tail has no partner.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "pairs",
    "start": 0.78,
    "sourceReferences": [
      {
        "lecture": 13,
        "file": "013_3e_Recursion_in_Linkedlist_Swap_pairwise_Leetcode_question.mp4",
        "start": 0.78,
        "end": 27.32,
        "text": "Hi everyone, let us now solve a question based on linked list that is swap node in pairs Which is saying that if you have two nodes, I mean if you have linked list something like this Let's suppose it is pointing to null then you set these nodes in pairs, right? So it will become 2143. So actually I found this question on lead code So maybe I can open this up. So this is a medium level question, which means I mean this is quite a good question. So which has been asking I think"
      },
      {
        "lecture": 13,
        "file": "013_3e_Recursion_in_Linkedlist_Swap_pairwise_Leetcode_question.mp4",
        "start": 27.86,
        "end": 55.3,
        "text": "Okay, this is a premium feature. Okay, so I don't have premium, so I can't see that this has been asked in which companies, but yeah, it can be seen that this is a medium level question. So let's just solve this question. I think although this is a medium level question, which is supposed to be hard for a beginner, but I think we can solve this easily. So which is saying that you need to swap nodes and pair. So what you can do, given this link list, what you can do, you can basically swap these two nodes and then pass a pointer to this, right?"
      },
      {
        "lecture": 13,
        "file": "013_3e_Recursion_in_Linkedlist_Swap_pairwise_Leetcode_question.mp4",
        "start": 134.49,
        "end": 165.32,
        "text": "if l is null because because of short circuiting it is true then it will not go to this right so these kind of expression i mean the short circuiting is useful for the safety checking okay that's just one thing anyway now what you need to do you can just swap these two nodes i think very easy in let's suppose time equal to l data l data and then l data equal to l next data l next data right"
      }
    ],
    "foundation": {
      "title": "Swapping adjacent payloads",
      "idea": "Adjacent payload swapping groups positions (0,1), (2,3), and so on. This variant swaps data values inside existing nodes; it does not move node addresses. An unmatched final node remains unchanged.",
      "terms": [
        "Pair: two adjacent positions.",
        "Payload swap: exchange values without relinking nodes.",
        "Odd tail: one last node with no partner."
      ],
      "example": "3 -> 6 -> 9 becomes 6 -> 3 -> 9 after one complete pair swap."
    }
  },
  {
    "id": 42,
    "lecture": 14,
    "title": "Save the forward link",
    "concept": "Iterative reversal maintains a reversed prefix and an untouched suffix. Save the old next link before overwriting it, or the suffix may become unreachable.",
    "teachingSteps": [
      "Begin with prev = NULL and curr = head.",
      "Save next; set curr->next = prev; advance prev and curr.",
      "When curr is NULL, make head = prev."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "What must be saved before overwriting a forward next link?",
        "options": [
          "Nothing; the old link remains accessible after any overwrite",
          "The old successor if it is still needed",
          "Only the node color"
        ],
        "answer": 1,
        "explanation": "Preserve a live route to the untouched suffix."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Prefix",
            "Already processed nodes"
          ],
          [
            "Suffix",
            "Unprocessed remaining nodes"
          ],
          [
            "Head",
            "Chosen starting reference"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Reverse this list. What is the new head payload?",
        "answer": 15,
        "explanation": "The old tail becomes the head.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "number",
        "prompt": "What is the new tail payload?",
        "answer": 3,
        "explanation": "The old head becomes the tail.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "reverse",
    "start": 0.02,
    "sourceReferences": [
      {
        "lecture": 14,
        "file": "014. Lecture 4a. GATE 2022 Reverse a Linked List.mp4",
        "start": 0.02,
        "end": 30.1,
        "text": "Hi everyone now, let's look at the code to reverse a linked list So which means suppose a linked list is given to you. Maybe maybe something like this. Let's suppose this is four three five Seven now what you are supposed to do you are basically supposed to have a linked list such that the first node is seven like I'm writing it seven here Okay, just to give you the visual purpose Okay, which means that you need to reverse the linked list. So basically"
      },
      {
        "lecture": 14,
        "file": "014. Lecture 4a. GATE 2022 Reverse a Linked List.mp4",
        "start": 31.12,
        "end": 59.66,
        "text": "Basically, you need to have something like this, right? I mean, okay. So the pointer should be like this. I mean, I should have made this box here. But anyway, that is fine. So, so this is pointing to null, right? So basically, now head should be pointing to seven. So you want to reverse the link list completely. That is what our task is. Now let's see if we can do it. So suppose before before I reverse a link list, suppose a link list, something like that is given to you."
      },
      {
        "lecture": 14,
        "file": "014. Lecture 4a. GATE 2022 Reverse a Linked List.mp4",
        "start": 60.2,
        "end": 90.18,
        "text": "which means that something is pointing it and now there are three pointers which are let's suppose given to you and then then you want to do let's suppose you want to reverse it okay we will see that how to do it step by step but suppose given this link list you want to you want to get this so which means that from here you want to do this okay which means you just want to you just want to modify this particular pointer which is current next to point to this let's suppose this is the only modification you are looking for at present"
      }
    ],
    "foundation": {
      "title": "Iterative list reversal",
      "idea": "Iterative reversal maintains a reversed prefix and an untouched suffix. Save the old next link before overwriting it, or the suffix may become unreachable.",
      "terms": [
        "Reversed prefix: nodes already linked backward.",
        "Untouched suffix: nodes still waiting to be processed.",
        "Auxiliary space: storage beyond the existing nodes."
      ],
      "example": "3 -> 6 -> 9 becomes 9 -> 6 -> 3; payloads and node storage remain the same."
    }
  },
  {
    "id": 43,
    "lecture": 14,
    "title": "Build a reversed prefix",
    "concept": "Iterative reversal maintains a reversed prefix and an untouched suffix. Save the old next link before overwriting it, or the suffix may become unreachable.",
    "teachingSteps": [
      "Begin with prev = NULL and curr = head.",
      "Save next; set curr->next = prev; advance prev and curr.",
      "When curr is NULL, make head = prev."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which circular traversal condition replaces stopping at NULL?",
        "options": [
          "The cursor has returned to the chosen head after a visit",
          "The payload becomes zero",
          "The address is larger than before"
        ],
        "answer": 0,
        "explanation": "A nonempty circle need not have a NULL next link."
      },
      {
        "type": "number",
        "prompt": "An iterative reversal visits each real node once. How many iterations occur?",
        "answer": 5,
        "explanation": "One iteration reverses one outgoing next field.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "number",
        "prompt": "How many real-node next fields are rewritten once by iterative reversal?",
        "answer": 5,
        "explanation": "The former head next is rewritten to NULL too.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Initialize prev=NULL and curr=head",
          "Retain the old curr.next",
          "Set curr.next=prev",
          "Advance prev and curr using the saved link"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "reverse",
    "start": 0.02,
    "sourceReferences": [
      {
        "lecture": 14,
        "file": "014. Lecture 4a. GATE 2022 Reverse a Linked List.mp4",
        "start": 0.02,
        "end": 30.1,
        "text": "Hi everyone now, let's look at the code to reverse a linked list So which means suppose a linked list is given to you. Maybe maybe something like this. Let's suppose this is four three five Seven now what you are supposed to do you are basically supposed to have a linked list such that the first node is seven like I'm writing it seven here Okay, just to give you the visual purpose Okay, which means that you need to reverse the linked list. So basically"
      },
      {
        "lecture": 14,
        "file": "014. Lecture 4a. GATE 2022 Reverse a Linked List.mp4",
        "start": 31.12,
        "end": 59.66,
        "text": "Basically, you need to have something like this, right? I mean, okay. So the pointer should be like this. I mean, I should have made this box here. But anyway, that is fine. So, so this is pointing to null, right? So basically, now head should be pointing to seven. So you want to reverse the link list completely. That is what our task is. Now let's see if we can do it. So suppose before before I reverse a link list, suppose a link list, something like that is given to you."
      },
      {
        "lecture": 14,
        "file": "014. Lecture 4a. GATE 2022 Reverse a Linked List.mp4",
        "start": 60.2,
        "end": 90.18,
        "text": "which means that something is pointing it and now there are three pointers which are let's suppose given to you and then then you want to do let's suppose you want to reverse it okay we will see that how to do it step by step but suppose given this link list you want to you want to get this so which means that from here you want to do this okay which means you just want to you just want to modify this particular pointer which is current next to point to this let's suppose this is the only modification you are looking for at present"
      }
    ],
    "foundation": {
      "title": "Iterative list reversal",
      "idea": "Iterative reversal maintains a reversed prefix and an untouched suffix. Save the old next link before overwriting it, or the suffix may become unreachable.",
      "terms": [
        "Reversed prefix: nodes already linked backward.",
        "Untouched suffix: nodes still waiting to be processed.",
        "Auxiliary space: storage beyond the existing nodes."
      ],
      "example": "3 -> 6 -> 9 becomes 9 -> 6 -> 3; payloads and node storage remain the same."
    }
  },
  {
    "id": 44,
    "lecture": 14,
    "title": "Return the new head",
    "concept": "Iterative reversal maintains a reversed prefix and an untouched suffix. Save the old next link before overwriting it, or the suffix may become unreachable.",
    "teachingSteps": [
      "Begin with prev = NULL and curr = head.",
      "Save next; set curr->next = prev; advance prev and curr.",
      "When curr is NULL, make head = prev."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "In a noncircular doubly linked list, what is the first node prev?",
        "options": [
          "The tail by definition",
          "Its own next",
          "NULL"
        ],
        "answer": 2,
        "explanation": "There is no predecessor at the first endpoint."
      },
      {
        "type": "number",
        "prompt": "Using only prev, curr and next pointers, how many new list nodes must be allocated?",
        "answer": 0,
        "explanation": "Existing nodes are relinked.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "What is unchanged by a pure payload-pair swap?",
        "options": [
          "Node identities and next links",
          "The order of all payloads",
          "The number of complete pairs in an odd list becomes fractional"
        ],
        "answer": 0,
        "explanation": "Payload exchange does not relink nodes."
      },
      {
        "type": "number",
        "prompt": "How many payload nodes remain after reversal?",
        "answer": 5,
        "explanation": "Reversal changes links, not length.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "reverse",
    "start": 0.02,
    "sourceReferences": [
      {
        "lecture": 14,
        "file": "014. Lecture 4a. GATE 2022 Reverse a Linked List.mp4",
        "start": 0.02,
        "end": 30.1,
        "text": "Hi everyone now, let's look at the code to reverse a linked list So which means suppose a linked list is given to you. Maybe maybe something like this. Let's suppose this is four three five Seven now what you are supposed to do you are basically supposed to have a linked list such that the first node is seven like I'm writing it seven here Okay, just to give you the visual purpose Okay, which means that you need to reverse the linked list. So basically"
      },
      {
        "lecture": 14,
        "file": "014. Lecture 4a. GATE 2022 Reverse a Linked List.mp4",
        "start": 31.12,
        "end": 59.66,
        "text": "Basically, you need to have something like this, right? I mean, okay. So the pointer should be like this. I mean, I should have made this box here. But anyway, that is fine. So, so this is pointing to null, right? So basically, now head should be pointing to seven. So you want to reverse the link list completely. That is what our task is. Now let's see if we can do it. So suppose before before I reverse a link list, suppose a link list, something like that is given to you."
      },
      {
        "lecture": 14,
        "file": "014. Lecture 4a. GATE 2022 Reverse a Linked List.mp4",
        "start": 60.2,
        "end": 90.18,
        "text": "which means that something is pointing it and now there are three pointers which are let's suppose given to you and then then you want to do let's suppose you want to reverse it okay we will see that how to do it step by step but suppose given this link list you want to you want to get this so which means that from here you want to do this okay which means you just want to you just want to modify this particular pointer which is current next to point to this let's suppose this is the only modification you are looking for at present"
      }
    ],
    "foundation": {
      "title": "Iterative list reversal",
      "idea": "Iterative reversal maintains a reversed prefix and an untouched suffix. Save the old next link before overwriting it, or the suffix may become unreachable.",
      "terms": [
        "Reversed prefix: nodes already linked backward.",
        "Untouched suffix: nodes still waiting to be processed.",
        "Auxiliary space: storage beyond the existing nodes."
      ],
      "example": "3 -> 6 -> 9 becomes 9 -> 6 -> 3; payloads and node storage remain the same."
    }
  },
  {
    "id": 45,
    "lecture": 15,
    "title": "Reverse the suffix first",
    "concept": "Recursive reversal first obtains the new head of the reversed suffix. Reconnect the old successor back to this node, terminate this node next field, then return the same new head upward.",
    "teachingSteps": [
      "Return head for an empty or single-node suffix.",
      "Obtain newHead = reverse(head->next).",
      "Set head->next->next = head; set head->next = NULL; return newHead."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which empty-list sum base result combines correctly with addition?",
        "options": [
          "0",
          "1",
          "The previous caller address"
        ],
        "answer": 0,
        "explanation": "Zero is the additive identity."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Base case",
            "Stops descent"
          ],
          [
            "Recursive result",
            "Answer for the suffix"
          ],
          [
            "Unwinding",
            "Return to waiting callers"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Recursive reversal stops at a single node (not by recursing further to NULL). On 6 nonempty nodes, how many calls occur?",
        "answer": 6,
        "explanation": "The final node is the base call.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      },
      {
        "type": "number",
        "prompt": "After reversal, what is the new head payload?",
        "answer": 18,
        "explanation": "The original tail becomes the new head.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "reverse-recursive",
    "start": 0.3,
    "sourceReferences": [
      {
        "lecture": 15,
        "file": "015_Lecture_4b_Reverse_a_Linked_List_using_Recursion_Four_Variations.mp4",
        "start": 0.3,
        "end": 29.57,
        "text": "Hi everyone, let's now reverse our linked list using recursion Which means suppose this linked list is given to you and you want to reverse it, but this time we want to use recursion Okay, so this will be a kind of fun exercise I think so let's just see that what we can do here So suppose that link list is this this is four and then this is three Let's suppose this is five This is seven"
      },
      {
        "lecture": 15,
        "file": "015_Lecture_4b_Reverse_a_Linked_List_using_Recursion_Four_Variations.mp4",
        "start": 30.51,
        "end": 56.69,
        "text": "This is to something like that, right? Suppose this is the link list that we have now head is pointing currently here Okay, so what we want we want to reverse the link list so which means that we want This pointer to point here this pointer to point here and so on cool Okay, now let me think about it"
      },
      {
        "lecture": 15,
        "file": "015_Lecture_4b_Reverse_a_Linked_List_using_Recursion_Four_Variations.mp4",
        "start": 86.79,
        "end": 117.45,
        "text": "in the next recursive call lh.txt so these are the local variables that we have okay so now we need to reverse the linked list okay so what i'm thinking here is that suppose you are at this recursive call right i mean suppose you are at this recursive call which means you don't have access to the previous elements which means i mean just for hypothetically i'm saying that you don't have this linked list because if you are at this recursive call then you only know this right i mean lh.txt here so you don't know the previous one"
      }
    ],
    "foundation": {
      "title": "Recursive list reversal",
      "idea": "Recursive reversal first obtains the new head of the reversed suffix. Reconnect the old successor back to this node, terminate this node next field, then return the same new head upward.",
      "terms": [
        "New head: the original tail.",
        "Old head: the new tail of this subproblem.",
        "Base condition: no link needs reversal."
      ],
      "example": "Reversing 3 -> 6 returns 6, connects 6 -> 3, and makes the 3 node next NULL."
    }
  },
  {
    "id": 46,
    "lecture": 15,
    "title": "Reconnect the old first edge",
    "concept": "Recursive reversal first obtains the new head of the reversed suffix. Reconnect the old successor back to this node, terminate this node next field, then return the same new head upward.",
    "teachingSteps": [
      "Return head for an empty or single-node suffix.",
      "Obtain newHead = reverse(head->next).",
      "Set head->next->next = head; set head->next = NULL; return newHead."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "When does print-after-recursion execute?",
        "options": [
          "Before descent",
          "Only on NULL",
          "While calls return"
        ],
        "answer": 2,
        "explanation": "The caller waits for its recursive suffix call."
      },
      {
        "type": "number",
        "prompt": "After reversal, what is the new tail payload?",
        "answer": 3,
        "explanation": "The original head becomes the new tail.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      },
      {
        "type": "number",
        "prompt": "A recursive sum visits the pictured payloads. What result is returned?",
        "answer": 63,
        "explanation": "Add every payload exactly once.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Test the base condition",
          "Call the function on the smaller suffix",
          "Use its returned result",
          "Return this subproblem answer"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "reverse-recursive",
    "start": 0.3,
    "sourceReferences": [
      {
        "lecture": 15,
        "file": "015_Lecture_4b_Reverse_a_Linked_List_using_Recursion_Four_Variations.mp4",
        "start": 0.3,
        "end": 29.57,
        "text": "Hi everyone, let's now reverse our linked list using recursion Which means suppose this linked list is given to you and you want to reverse it, but this time we want to use recursion Okay, so this will be a kind of fun exercise I think so let's just see that what we can do here So suppose that link list is this this is four and then this is three Let's suppose this is five This is seven"
      },
      {
        "lecture": 15,
        "file": "015_Lecture_4b_Reverse_a_Linked_List_using_Recursion_Four_Variations.mp4",
        "start": 30.51,
        "end": 56.69,
        "text": "This is to something like that, right? Suppose this is the link list that we have now head is pointing currently here Okay, so what we want we want to reverse the link list so which means that we want This pointer to point here this pointer to point here and so on cool Okay, now let me think about it"
      },
      {
        "lecture": 15,
        "file": "015_Lecture_4b_Reverse_a_Linked_List_using_Recursion_Four_Variations.mp4",
        "start": 86.79,
        "end": 117.45,
        "text": "in the next recursive call lh.txt so these are the local variables that we have okay so now we need to reverse the linked list okay so what i'm thinking here is that suppose you are at this recursive call right i mean suppose you are at this recursive call which means you don't have access to the previous elements which means i mean just for hypothetically i'm saying that you don't have this linked list because if you are at this recursive call then you only know this right i mean lh.txt here so you don't know the previous one"
      }
    ],
    "foundation": {
      "title": "Recursive list reversal",
      "idea": "Recursive reversal first obtains the new head of the reversed suffix. Reconnect the old successor back to this node, terminate this node next field, then return the same new head upward.",
      "terms": [
        "New head: the original tail.",
        "Old head: the new tail of this subproblem.",
        "Base condition: no link needs reversal."
      ],
      "example": "Reversing 3 -> 6 returns 6, connects 6 -> 3, and makes the 3 node next NULL."
    }
  },
  {
    "id": 47,
    "lecture": 15,
    "title": "Terminate the new tail",
    "concept": "Recursive reversal first obtains the new head of the reversed suffix. Reconnect the old successor back to this node, terminate this node next field, then return the same new head upward.",
    "teachingSteps": [
      "Return head for an empty or single-node suffix.",
      "Obtain newHead = reverse(head->next).",
      "Set head->next->next = head; set head->next = NULL; return newHead."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Does printing in reverse change the node links?",
        "options": [
          "Only for a three-node list",
          "Not unless explicit link assignments are made",
          "Always"
        ],
        "answer": 1,
        "explanation": "Output order and structural reversal are different."
      },
      {
        "type": "number",
        "prompt": "A length function returns 0 at NULL and 1+length(next) otherwise. What value is returned?",
        "answer": 6,
        "explanation": "Each real node contributes one.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "Why set the old first node next to NULL during recursive reversal?",
        "options": [
          "To copy its payload",
          "To free the entire list",
          "To terminate the new tail and prevent a cycle"
        ],
        "answer": 2,
        "explanation": "The reversed successor now points back to this node."
      },
      {
        "type": "number",
        "prompt": "For reversal with a single-node base case and next->next=p, p->next=NULL in each other call, how many next-field assignments occur on 6 nodes?",
        "answer": 10,
        "explanation": "The n-1 non-base calls each perform two next-field assignments.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "reverse-recursive",
    "start": 0.3,
    "sourceReferences": [
      {
        "lecture": 15,
        "file": "015_Lecture_4b_Reverse_a_Linked_List_using_Recursion_Four_Variations.mp4",
        "start": 0.3,
        "end": 29.57,
        "text": "Hi everyone, let's now reverse our linked list using recursion Which means suppose this linked list is given to you and you want to reverse it, but this time we want to use recursion Okay, so this will be a kind of fun exercise I think so let's just see that what we can do here So suppose that link list is this this is four and then this is three Let's suppose this is five This is seven"
      },
      {
        "lecture": 15,
        "file": "015_Lecture_4b_Reverse_a_Linked_List_using_Recursion_Four_Variations.mp4",
        "start": 30.51,
        "end": 56.69,
        "text": "This is to something like that, right? Suppose this is the link list that we have now head is pointing currently here Okay, so what we want we want to reverse the link list so which means that we want This pointer to point here this pointer to point here and so on cool Okay, now let me think about it"
      },
      {
        "lecture": 15,
        "file": "015_Lecture_4b_Reverse_a_Linked_List_using_Recursion_Four_Variations.mp4",
        "start": 86.79,
        "end": 117.45,
        "text": "in the next recursive call lh.txt so these are the local variables that we have okay so now we need to reverse the linked list okay so what i'm thinking here is that suppose you are at this recursive call right i mean suppose you are at this recursive call which means you don't have access to the previous elements which means i mean just for hypothetically i'm saying that you don't have this linked list because if you are at this recursive call then you only know this right i mean lh.txt here so you don't know the previous one"
      }
    ],
    "foundation": {
      "title": "Recursive list reversal",
      "idea": "Recursive reversal first obtains the new head of the reversed suffix. Reconnect the old successor back to this node, terminate this node next field, then return the same new head upward.",
      "terms": [
        "New head: the original tail.",
        "Old head: the new tail of this subproblem.",
        "Base condition: no link needs reversal."
      ],
      "example": "Reversing 3 -> 6 returns 6, connects 6 -> 3, and makes the 3 node next NULL."
    }
  },
  {
    "id": 48,
    "lecture": 16,
    "title": "Recognize the cycle",
    "concept": "A nonempty circular list returns to its head instead of reaching NULL. Check for an empty head first, then use a loop that visits once before testing whether the cursor has returned.",
    "teachingSteps": [
      "If head is NULL, there are zero nodes.",
      "Process a node, then follow next.",
      "Stop on the first return to head, not on NULL."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "What must be saved before overwriting a forward next link?",
        "options": [
          "Only the node color",
          "Nothing; the old link remains accessible after any overwrite",
          "The old successor if it is still needed"
        ],
        "answer": 2,
        "explanation": "Preserve a live route to the untouched suffix."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Prefix",
            "Already processed nodes"
          ],
          [
            "Suffix",
            "Unprocessed remaining nodes"
          ],
          [
            "Head",
            "Chosen starting reference"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "This circle has 7 real nodes and its last next returns to head. How many advances complete one lap?",
        "answer": 7,
        "explanation": "One hop per node returns to the start.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "circular",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      },
      {
        "type": "number",
        "prompt": "How many real nodes are visited before the first return to head?",
        "answer": 7,
        "explanation": "A one-lap traversal counts each exactly once.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "circular",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "circular",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 16,
        "file": "016. 4c. Circular Linked List.mp4",
        "start": 0,
        "end": 29.5,
        "text": "in this lecture we are going to see circular linked list so before that let me ask you a simple question suppose a normal linked list is given to us okay suppose something like this is given to us and i'm asking whether it is correctly printing the length or not okay so we have already seen how to print length using the while loop but here i do have a for loop let's just quickly see if this for loop is working correctly or not okay so obviously like we need to have one check here if head is null"
      },
      {
        "lecture": 16,
        "file": "016. 4c. Circular Linked List.mp4",
        "start": 85.69,
        "end": 113.91,
        "text": "To the next of this then I will come out of the loop. So that was the same thing I was doing in the while loop also, right? So I hope that is okay to you that this is also printing the length Now one more thing I want you to revise that whenever I'm doing suppose I'm doing free of head or current or something like this Okay, and head is currently pointing. Let's suppose. There's a pointer Let me go to the next page. Let's suppose. There's a pointer which is pointing to our node Let's suppose this pointer is current and this is pointing to a node"
      },
      {
        "lecture": 16,
        "file": "016. 4c. Circular Linked List.mp4",
        "start": 132.98,
        "end": 162.3,
        "text": "which means now this memory is reusable we have already covered this in depth in C programming I am not going to cover this again but just to revise you that we are freeing this whatever memory pointed by the current we are not freeing the current okay whatever memory pointed by the current which means this will be some matters let's suppose this is 2000 so this this will be free current means this will be 2000 right so I am freeing the the memory at 2000 right so I hope that is okay to everyone okay now let's go to the circular linked list what is a circular linked list is that"
      }
    ],
    "foundation": {
      "title": "Circular linked lists",
      "idea": "A nonempty circular list returns to its head instead of reaching NULL. Check for an empty head first, then use a loop that visits once before testing whether the cursor has returned.",
      "terms": [
        "Cycle: a path that returns to an earlier node.",
        "One lap: visit every node once.",
        "Sentinel head: the chosen start reference."
      ],
      "example": "A circle 3 -> 6 -> 9 -> 3 has three nodes; a do-while traversal stops after its third advance."
    }
  },
  {
    "id": 49,
    "lecture": 16,
    "title": "Stop when the head returns",
    "concept": "A nonempty circular list returns to its head instead of reaching NULL. Check for an empty head first, then use a loop that visits once before testing whether the cursor has returned.",
    "teachingSteps": [
      "If head is NULL, there are zero nodes.",
      "Process a node, then follow next.",
      "Stop on the first return to head, not on NULL."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which circular traversal condition replaces stopping at NULL?",
        "options": [
          "The address is larger than before",
          "The cursor has returned to the chosen head after a visit",
          "The payload becomes zero"
        ],
        "answer": 1,
        "explanation": "A nonempty circle need not have a NULL next link."
      },
      {
        "type": "number",
        "prompt": "How many NULL next links exist in this nonempty ordinary circular list?",
        "answer": 0,
        "explanation": "The last next links to head.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "circular",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      },
      {
        "type": "number",
        "prompt": "An empty circle has head=NULL. What length should be returned?",
        "answer": 0,
        "explanation": "Handle the empty case before dereferencing.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": []
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Check the empty or short boundary case",
          "Identify the affected nodes",
          "Apply the required updates",
          "Verify the final traversal rule"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "circular",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 16,
        "file": "016. 4c. Circular Linked List.mp4",
        "start": 0,
        "end": 29.5,
        "text": "in this lecture we are going to see circular linked list so before that let me ask you a simple question suppose a normal linked list is given to us okay suppose something like this is given to us and i'm asking whether it is correctly printing the length or not okay so we have already seen how to print length using the while loop but here i do have a for loop let's just quickly see if this for loop is working correctly or not okay so obviously like we need to have one check here if head is null"
      },
      {
        "lecture": 16,
        "file": "016. 4c. Circular Linked List.mp4",
        "start": 85.69,
        "end": 113.91,
        "text": "To the next of this then I will come out of the loop. So that was the same thing I was doing in the while loop also, right? So I hope that is okay to you that this is also printing the length Now one more thing I want you to revise that whenever I'm doing suppose I'm doing free of head or current or something like this Okay, and head is currently pointing. Let's suppose. There's a pointer Let me go to the next page. Let's suppose. There's a pointer which is pointing to our node Let's suppose this pointer is current and this is pointing to a node"
      },
      {
        "lecture": 16,
        "file": "016. 4c. Circular Linked List.mp4",
        "start": 132.98,
        "end": 162.3,
        "text": "which means now this memory is reusable we have already covered this in depth in C programming I am not going to cover this again but just to revise you that we are freeing this whatever memory pointed by the current we are not freeing the current okay whatever memory pointed by the current which means this will be some matters let's suppose this is 2000 so this this will be free current means this will be 2000 right so I am freeing the the memory at 2000 right so I hope that is okay to everyone okay now let's go to the circular linked list what is a circular linked list is that"
      }
    ],
    "foundation": {
      "title": "Circular linked lists",
      "idea": "A nonempty circular list returns to its head instead of reaching NULL. Check for an empty head first, then use a loop that visits once before testing whether the cursor has returned.",
      "terms": [
        "Cycle: a path that returns to an earlier node.",
        "One lap: visit every node once.",
        "Sentinel head: the chosen start reference."
      ],
      "example": "A circle 3 -> 6 -> 9 -> 3 has three nodes; a do-while traversal stops after its third advance."
    }
  },
  {
    "id": 50,
    "lecture": 16,
    "title": "Handle an empty circle",
    "concept": "A nonempty circular list returns to its head instead of reaching NULL. Check for an empty head first, then use a loop that visits once before testing whether the cursor has returned.",
    "teachingSteps": [
      "If head is NULL, there are zero nodes.",
      "Process a node, then follow next.",
      "Stop on the first return to head, not on NULL."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "In a noncircular doubly linked list, what is the first node prev?",
        "options": [
          "NULL",
          "The tail by definition",
          "Its own next"
        ],
        "answer": 0,
        "explanation": "There is no predecessor at the first endpoint."
      },
      {
        "type": "number",
        "prompt": "How many advances complete two laps?",
        "answer": 14,
        "explanation": "Two complete laps use twice n hops.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "circular",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "What is unchanged by a pure payload-pair swap?",
        "options": [
          "The number of complete pairs in an odd list becomes fractional",
          "Node identities and next links",
          "The order of all payloads"
        ],
        "answer": 1,
        "explanation": "Payload exchange does not relink nodes."
      },
      {
        "type": "number",
        "prompt": "How many hops reach the last node from head without revisiting head?",
        "answer": 6,
        "explanation": "The last node precedes the returning edge.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "circular",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "circular",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 16,
        "file": "016. 4c. Circular Linked List.mp4",
        "start": 0,
        "end": 29.5,
        "text": "in this lecture we are going to see circular linked list so before that let me ask you a simple question suppose a normal linked list is given to us okay suppose something like this is given to us and i'm asking whether it is correctly printing the length or not okay so we have already seen how to print length using the while loop but here i do have a for loop let's just quickly see if this for loop is working correctly or not okay so obviously like we need to have one check here if head is null"
      },
      {
        "lecture": 16,
        "file": "016. 4c. Circular Linked List.mp4",
        "start": 85.69,
        "end": 113.91,
        "text": "To the next of this then I will come out of the loop. So that was the same thing I was doing in the while loop also, right? So I hope that is okay to you that this is also printing the length Now one more thing I want you to revise that whenever I'm doing suppose I'm doing free of head or current or something like this Okay, and head is currently pointing. Let's suppose. There's a pointer Let me go to the next page. Let's suppose. There's a pointer which is pointing to our node Let's suppose this pointer is current and this is pointing to a node"
      },
      {
        "lecture": 16,
        "file": "016. 4c. Circular Linked List.mp4",
        "start": 132.98,
        "end": 162.3,
        "text": "which means now this memory is reusable we have already covered this in depth in C programming I am not going to cover this again but just to revise you that we are freeing this whatever memory pointed by the current we are not freeing the current okay whatever memory pointed by the current which means this will be some matters let's suppose this is 2000 so this this will be free current means this will be 2000 right so I am freeing the the memory at 2000 right so I hope that is okay to everyone okay now let's go to the circular linked list what is a circular linked list is that"
      }
    ],
    "foundation": {
      "title": "Circular linked lists",
      "idea": "A nonempty circular list returns to its head instead of reaching NULL. Check for an empty head first, then use a loop that visits once before testing whether the cursor has returned.",
      "terms": [
        "Cycle: a path that returns to an earlier node.",
        "One lap: visit every node once.",
        "Sentinel head: the chosen start reference."
      ],
      "example": "A circle 3 -> 6 -> 9 -> 3 has three nodes; a do-while traversal stops after its third advance."
    }
  },
  {
    "id": 51,
    "lecture": 17,
    "title": "Follow next and prev",
    "concept": "A doubly linked node has both next and prev fields. An insertion or deletion must leave adjacent nodes consistent in both directions. Endpoints use NULL where no neighbor exists.",
    "teachingSteps": [
      "Identify the left and right neighbors.",
      "Repair next links and prev links together.",
      "Update head or tail when the operation changes an endpoint."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "What must be saved before overwriting a forward next link?",
        "options": [
          "Nothing; the old link remains accessible after any overwrite",
          "The old successor if it is still needed",
          "Only the node color"
        ],
        "answer": 1,
        "explanation": "Preserve a live route to the untouched suffix."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "next",
            "Successor reference"
          ],
          [
            "prev",
            "Predecessor reference"
          ],
          [
            "head",
            "First endpoint"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Each of 8 doubly linked nodes has next and prev. How many such fields exist?",
        "answer": 16,
        "explanation": "There are two link fields per node.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "double",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21,
            24
          ]
        }
      },
      {
        "type": "number",
        "prompt": "For a noncircular list, how many next links are non-NULL?",
        "answer": 7,
        "explanation": "All except the final node next.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "double",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21,
            24
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "double",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 17,
        "file": "017. 4d. Doubly Linked List.mp4",
        "start": 0,
        "end": 23.34,
        "text": "let's talk about doubly linked list now okay so in in case of doubly linked list we have a stuck node of this type where we have three values one is int well which means there is an integer in your node so this is your node okay so generally like this is actually like integer is the first number but i'm i'm showing integer as a middle number"
      },
      {
        "lecture": 17,
        "file": "017. 4d. Doubly Linked List.mp4",
        "start": 23.52,
        "end": 40.76,
        "text": "that is fine I mean that doesn't matter anything for us right because for our purpose we will be accessing the fields of this extract node using the arrow operator so it does not matter I will be representing integer in the middle and the second member is previous which is a extract type pointer"
      },
      {
        "lecture": 17,
        "file": "017. 4d. Doubly Linked List.mp4",
        "start": 41.05,
        "end": 65.81,
        "text": "And another member was the earlier one, similar to earlier one, which is next. So previous is supposed to point to some stuck node type of similar type, a stuck node, which is a similar type. This is also supposed to point to a similar type. So earlier we had this thing, but now we have the whole thing, which means we are also pointing to the previous thing. So why that is important and why that is useful, you will get to know within a few minutes."
      }
    ],
    "foundation": {
      "title": "Doubly linked lists",
      "idea": "A doubly linked node has both next and prev fields. An insertion or deletion must leave adjacent nodes consistent in both directions. Endpoints use NULL where no neighbor exists.",
      "terms": [
        "prev: reference to the preceding node.",
        "Bidirectional invariant: x->next->prev is x when next exists.",
        "Endpoint: a first or last node."
      ],
      "example": "Inserting 8 between 3 and 6 establishes 3.next=8, 8.prev=3, 8.next=6, and 6.prev=8."
    }
  },
  {
    "id": 52,
    "lecture": 17,
    "title": "Repair both directions",
    "concept": "A doubly linked node has both next and prev fields. An insertion or deletion must leave adjacent nodes consistent in both directions. Endpoints use NULL where no neighbor exists.",
    "teachingSteps": [
      "Identify the left and right neighbors.",
      "Repair next links and prev links together.",
      "Update head or tail when the operation changes an endpoint."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which circular traversal condition replaces stopping at NULL?",
        "options": [
          "The cursor has returned to the chosen head after a visit",
          "The payload becomes zero",
          "The address is larger than before"
        ],
        "answer": 0,
        "explanation": "A nonempty circle need not have a NULL next link."
      },
      {
        "type": "number",
        "prompt": "How many prev links are non-NULL?",
        "answer": 7,
        "explanation": "All except the first node prev.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "double",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21,
            24
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Insert a new node between existing neighbors. Count left.next, new.prev, new.next and right.prev. How many assignments are listed?",
        "answer": 4,
        "explanation": "Repair both directions for both adjacency pairs.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "double",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21,
            24
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Check the empty or short boundary case",
          "Identify the affected nodes",
          "Apply the required updates",
          "Verify the final traversal rule"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "double",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 17,
        "file": "017. 4d. Doubly Linked List.mp4",
        "start": 0,
        "end": 23.34,
        "text": "let's talk about doubly linked list now okay so in in case of doubly linked list we have a stuck node of this type where we have three values one is int well which means there is an integer in your node so this is your node okay so generally like this is actually like integer is the first number but i'm i'm showing integer as a middle number"
      },
      {
        "lecture": 17,
        "file": "017. 4d. Doubly Linked List.mp4",
        "start": 23.52,
        "end": 40.76,
        "text": "that is fine I mean that doesn't matter anything for us right because for our purpose we will be accessing the fields of this extract node using the arrow operator so it does not matter I will be representing integer in the middle and the second member is previous which is a extract type pointer"
      },
      {
        "lecture": 17,
        "file": "017. 4d. Doubly Linked List.mp4",
        "start": 41.05,
        "end": 65.81,
        "text": "And another member was the earlier one, similar to earlier one, which is next. So previous is supposed to point to some stuck node type of similar type, a stuck node, which is a similar type. This is also supposed to point to a similar type. So earlier we had this thing, but now we have the whole thing, which means we are also pointing to the previous thing. So why that is important and why that is useful, you will get to know within a few minutes."
      }
    ],
    "foundation": {
      "title": "Doubly linked lists",
      "idea": "A doubly linked node has both next and prev fields. An insertion or deletion must leave adjacent nodes consistent in both directions. Endpoints use NULL where no neighbor exists.",
      "terms": [
        "prev: reference to the preceding node.",
        "Bidirectional invariant: x->next->prev is x when next exists.",
        "Endpoint: a first or last node."
      ],
      "example": "Inserting 8 between 3 and 6 establishes 3.next=8, 8.prev=3, 8.next=6, and 6.prev=8."
    }
  },
  {
    "id": 53,
    "lecture": 17,
    "title": "Check neighbor consistency",
    "concept": "A doubly linked node has both next and prev fields. An insertion or deletion must leave adjacent nodes consistent in both directions. Endpoints use NULL where no neighbor exists.",
    "teachingSteps": [
      "Identify the left and right neighbors.",
      "Repair next links and prev links together.",
      "Update head or tail when the operation changes an endpoint."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "In a noncircular doubly linked list, what is the first node prev?",
        "options": [
          "The tail by definition",
          "Its own next",
          "NULL"
        ],
        "answer": 2,
        "explanation": "There is no predecessor at the first endpoint."
      },
      {
        "type": "number",
        "prompt": "Delete an interior node. Count left.next=right and right.prev=left. How many surviving-neighbor link fields change?",
        "answer": 2,
        "explanation": "Each surviving neighbor has one affected field.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "double",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21,
            24
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "What is unchanged by a pure payload-pair swap?",
        "options": [
          "Node identities and next links",
          "The order of all payloads",
          "The number of complete pairs in an odd list becomes fractional"
        ],
        "answer": 0,
        "explanation": "Payload exchange does not relink nodes."
      },
      {
        "type": "number",
        "prompt": "Traverse from tail to head through prev. How many hops are needed?",
        "answer": 7,
        "explanation": "There are n-1 predecessor edges.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "double",
          "values": [
            3,
            6,
            9,
            12,
            15,
            18,
            21,
            24
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "double",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 17,
        "file": "017. 4d. Doubly Linked List.mp4",
        "start": 0,
        "end": 23.34,
        "text": "let's talk about doubly linked list now okay so in in case of doubly linked list we have a stuck node of this type where we have three values one is int well which means there is an integer in your node so this is your node okay so generally like this is actually like integer is the first number but i'm i'm showing integer as a middle number"
      },
      {
        "lecture": 17,
        "file": "017. 4d. Doubly Linked List.mp4",
        "start": 23.52,
        "end": 40.76,
        "text": "that is fine I mean that doesn't matter anything for us right because for our purpose we will be accessing the fields of this extract node using the arrow operator so it does not matter I will be representing integer in the middle and the second member is previous which is a extract type pointer"
      },
      {
        "lecture": 17,
        "file": "017. 4d. Doubly Linked List.mp4",
        "start": 41.05,
        "end": 65.81,
        "text": "And another member was the earlier one, similar to earlier one, which is next. So previous is supposed to point to some stuck node type of similar type, a stuck node, which is a similar type. This is also supposed to point to a similar type. So earlier we had this thing, but now we have the whole thing, which means we are also pointing to the previous thing. So why that is important and why that is useful, you will get to know within a few minutes."
      }
    ],
    "foundation": {
      "title": "Doubly linked lists",
      "idea": "A doubly linked node has both next and prev fields. An insertion or deletion must leave adjacent nodes consistent in both directions. Endpoints use NULL where no neighbor exists.",
      "terms": [
        "prev: reference to the preceding node.",
        "Bidirectional invariant: x->next->prev is x when next exists.",
        "Endpoint: a first or last node."
      ],
      "example": "Inserting 8 between 3 and 6 establishes 3.next=8, 8.prev=3, 8.next=6, and 6.prev=8."
    }
  },
  {
    "id": 54,
    "lecture": 18,
    "title": "Separate pointers and payloads",
    "concept": "A pointer trace follows references, not the numbers stored in nodes. Changing a payload leaves reachability intact; changing a next link can skip a suffix or join two lists.",
    "teachingSteps": [
      "Draw the initial node identities and next links.",
      "Apply assignments in their stated order.",
      "Trace again from the current head and count only reachable nodes."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "An undo action must use the most recent saved action first. Which contract fits?",
        "options": [
          "Stack",
          "Queue",
          "Always an indexed array"
        ],
        "answer": 0,
        "explanation": "A stack removes the most recent insertion."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "head",
            "First node reference"
          ],
          [
            "next",
            "Successor reference"
          ],
          [
            "NULL",
            "No node"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "A NULL-terminated list stores 3, 6, 9. How many real nodes are reachable?",
        "answer": 3,
        "explanation": "Count payload nodes; NULL is not an extra node.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Follow next from the first node to the last in this 3-node list. How many links are followed?",
        "answer": 2,
        "explanation": "The first node is already reached; every next hop advances one position.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "list",
    "start": 85.22,
    "sourceReferences": [
      {
        "lecture": 18,
        "file": "018. Recording - LIVE_ Linked List Practice Set Discussion.mp4",
        "start": 85.22,
        "end": 128.56,
        "text": "Few of the questions were basics, but few of the questions were nice, right? Cool. So, uh, let's see. Now, uh, let's solve this question. So what they're saying, consider the following pseudo C program. Okay. I mean, sorry, this should be like pseudo program or something like that. Just a second. Uh, this is why this is not working. Okay. So they're saying that, uh, which method, uh, should be used to access the member X using the pointer head."
      },
      {
        "lecture": 18,
        "file": "018. Recording - LIVE_ Linked List Practice Set Discussion.mp4",
        "start": 129.56,
        "end": 165.65,
        "text": "head is some extract pointer of P list type, right? Okay. So, so, I mean, there should be some P list first of all. So you should be writing something like that. Maybe I can write. So maybe there should be some P list and how should we point into that, right? So I'm assuming that you understood that much, which means that something like that, right? So let's suppose this is anything. This is let's suppose"
      },
      {
        "lecture": 18,
        "file": "018. Recording - LIVE_ Linked List Practice Set Discussion.mp4",
        "start": 166.17,
        "end": 202.35,
        "text": "uh some list and head is basically a pointer to this some list okay so uh this head is pointing to head is a pointer to pt list one struct right which is having two elements one itself is a struct so here here it is an struct which is having two elements one itself is a struct right and second one is a pointer to"
      }
    ],
    "foundation": {
      "title": "Linked-list trace challenges",
      "idea": "A pointer trace follows references, not the numbers stored in nodes. Changing a payload leaves reachability intact; changing a next link can skip a suffix or join two lists.",
      "terms": [
        "Identity: the same node even after a payload changes.",
        "Alias: two references to one node.",
        "Splice: connect a list segment into another."
      ],
      "example": "With 3 -> 6 -> 9, head->next = head->next->next skips the 6 node. That statement alone does not free it."
    }
  },
  {
    "id": 55,
    "lecture": 18,
    "title": "Trace a small splice",
    "concept": "A pointer trace follows references, not the numbers stored in nodes. Changing a payload leaves reachability intact; changing a next link can skip a suffix or join two lists.",
    "teachingSteps": [
      "Draw the initial node identities and next links.",
      "Apply assignments in their stated order.",
      "Trace again from the current head and count only reachable nodes."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "A live node stores payload 0 and next=NULL. What does that mean?",
        "options": [
          "An empty list",
          "An invalid node because zero is not allowed",
          "One node whose payload is zero"
        ],
        "answer": 2,
        "explanation": "NULL in the next field terminates the chain; zero is a valid payload."
      },
      {
        "type": "number",
        "prompt": "Visit every node and add its payload. What sum is returned?",
        "answer": 18,
        "explanation": "The payloads are 3 times 1 through n; add each once.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      },
      {
        "type": "number",
        "prompt": "An empty list has head=NULL. How many payloads can safely be printed?",
        "answer": 0,
        "explanation": "There is no node to dereference.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": []
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Copy head into a cursor",
          "Check whether cursor is NULL",
          "Process the live node",
          "Advance through next"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "list",
    "start": 85.22,
    "sourceReferences": [
      {
        "lecture": 18,
        "file": "018. Recording - LIVE_ Linked List Practice Set Discussion.mp4",
        "start": 85.22,
        "end": 128.56,
        "text": "Few of the questions were basics, but few of the questions were nice, right? Cool. So, uh, let's see. Now, uh, let's solve this question. So what they're saying, consider the following pseudo C program. Okay. I mean, sorry, this should be like pseudo program or something like that. Just a second. Uh, this is why this is not working. Okay. So they're saying that, uh, which method, uh, should be used to access the member X using the pointer head."
      },
      {
        "lecture": 18,
        "file": "018. Recording - LIVE_ Linked List Practice Set Discussion.mp4",
        "start": 129.56,
        "end": 165.65,
        "text": "head is some extract pointer of P list type, right? Okay. So, so, I mean, there should be some P list first of all. So you should be writing something like that. Maybe I can write. So maybe there should be some P list and how should we point into that, right? So I'm assuming that you understood that much, which means that something like that, right? So let's suppose this is anything. This is let's suppose"
      },
      {
        "lecture": 18,
        "file": "018. Recording - LIVE_ Linked List Practice Set Discussion.mp4",
        "start": 166.17,
        "end": 202.35,
        "text": "uh some list and head is basically a pointer to this some list okay so uh this head is pointing to head is a pointer to pt list one struct right which is having two elements one itself is a struct so here here it is an struct which is having two elements one itself is a struct right and second one is a pointer to"
      }
    ],
    "foundation": {
      "title": "Linked-list trace challenges",
      "idea": "A pointer trace follows references, not the numbers stored in nodes. Changing a payload leaves reachability intact; changing a next link can skip a suffix or join two lists.",
      "terms": [
        "Identity: the same node even after a payload changes.",
        "Alias: two references to one node.",
        "Splice: connect a list segment into another."
      ],
      "example": "With 3 -> 6 -> 9, head->next = head->next->next skips the 6 node. That statement alone does not free it."
    }
  },
  {
    "id": 56,
    "lecture": 18,
    "title": "Check reachability after updates",
    "concept": "A pointer trace follows references, not the numbers stored in nodes. Changing a payload leaves reachability intact; changing a next link can skip a suffix or join two lists.",
    "teachingSteps": [
      "Draw the initial node identities and next links.",
      "Apply assignments in their stated order.",
      "Trace again from the current head and count only reachable nodes."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "You want to count nodes without losing the original head. What should advance?",
        "options": [
          "Every payload value",
          "A separate cursor",
          "Only the head, without retaining it"
        ],
        "answer": 1,
        "explanation": "A traversal cursor preserves the owning start reference."
      },
      {
        "type": "number",
        "prompt": "A traversal starts at head, tests cursor!=NULL before each visit, and stops after 3 nodes. How many condition tests occur?",
        "answer": 4,
        "explanation": "One successful test per node plus the final unsuccessful test.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "Two pointers refer to the same node. One changes its payload. What does the other pointer observe?",
        "options": [
          "A newly copied node",
          "A NULL pointer automatically",
          "The updated payload"
        ],
        "answer": 2,
        "explanation": "Aliases refer to the same live object."
      },
      {
        "type": "number",
        "prompt": "Skip the first two nodes in the pictured list, then traverse the remaining suffix. How many nodes remain reachable from that suffix pointer?",
        "answer": 1,
        "explanation": "Advancing twice removes two nodes from this chosen starting path, without freeing them.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "list",
    "start": 85.22,
    "sourceReferences": [
      {
        "lecture": 18,
        "file": "018. Recording - LIVE_ Linked List Practice Set Discussion.mp4",
        "start": 85.22,
        "end": 128.56,
        "text": "Few of the questions were basics, but few of the questions were nice, right? Cool. So, uh, let's see. Now, uh, let's solve this question. So what they're saying, consider the following pseudo C program. Okay. I mean, sorry, this should be like pseudo program or something like that. Just a second. Uh, this is why this is not working. Okay. So they're saying that, uh, which method, uh, should be used to access the member X using the pointer head."
      },
      {
        "lecture": 18,
        "file": "018. Recording - LIVE_ Linked List Practice Set Discussion.mp4",
        "start": 129.56,
        "end": 165.65,
        "text": "head is some extract pointer of P list type, right? Okay. So, so, I mean, there should be some P list first of all. So you should be writing something like that. Maybe I can write. So maybe there should be some P list and how should we point into that, right? So I'm assuming that you understood that much, which means that something like that, right? So let's suppose this is anything. This is let's suppose"
      },
      {
        "lecture": 18,
        "file": "018. Recording - LIVE_ Linked List Practice Set Discussion.mp4",
        "start": 166.17,
        "end": 202.35,
        "text": "uh some list and head is basically a pointer to this some list okay so uh this head is pointing to head is a pointer to pt list one struct right which is having two elements one itself is a struct so here here it is an struct which is having two elements one itself is a struct right and second one is a pointer to"
      }
    ],
    "foundation": {
      "title": "Linked-list trace challenges",
      "idea": "A pointer trace follows references, not the numbers stored in nodes. Changing a payload leaves reachability intact; changing a next link can skip a suffix or join two lists.",
      "terms": [
        "Identity: the same node even after a payload changes.",
        "Alias: two references to one node.",
        "Splice: connect a list segment into another."
      ],
      "example": "With 3 -> 6 -> 9, head->next = head->next->next skips the 6 node. That statement alone does not free it."
    }
  },
  {
    "id": 57,
    "lecture": 19,
    "title": "Translate between powers and logs",
    "concept": "log_b(x) is the exponent y for which b^y=x. For real logarithms, x must be positive and b must be positive and different from one.",
    "teachingSteps": [
      "Rewrite a log as a power equality.",
      "Products become sums, quotients become differences, and powers multiply the log.",
      "State the base and verify the argument is positive."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which is the correct logarithm domain for real logs?",
        "options": [
          "Argument may be any negative value",
          "Base must always be exactly 10",
          "Argument positive; base positive and not 1"
        ],
        "answer": 2,
        "explanation": "These are the real-domain conditions."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "log_b(x)",
            "Exponent that makes b^y=x"
          ],
          [
            "Product of arguments",
            "Sum of logarithms"
          ],
          [
            "Quotient of arguments",
            "Difference of logarithms"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "What is log_2(8)?",
        "answer": 3,
        "explanation": "8=2^3.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 8
        }
      },
      {
        "type": "number",
        "prompt": "What is log_2(8 * 8)?",
        "answer": 6,
        "explanation": "Use the product rule: log_2(x)+3.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 8
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "log",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 19,
        "file": "019_Fundamental_Section_Lecture_Logarithms_Definition_and_All_Properties.mp4",
        "start": 0,
        "end": 24.04,
        "text": "Hi everyone. So in this video, we are going to discuss logarithms. Logarithms are just another way of thinking A power X. So we will see that what do I mean by that. Okay. So we are going to cover definition of logarithms. I mean the formal definition, the log properties and their proof, some questions, log graph and importance of log in computer sense. Let's just start with the log definition. But before that,"
      },
      {
        "lecture": 19,
        "file": "019_Fundamental_Section_Lecture_Logarithms_Definition_and_All_Properties.mp4",
        "start": 24.23,
        "end": 53.33,
        "text": "very first question which is that why why I am saying that it is just another way of thinking about a power x. Let's just see this. Suppose I say that what is 2 power 3 then what you will say you will immediately answer that to be 8. Similarly you will immediately answer that to be 32 I think and then you will say it is 81. So these are your answers. Now suppose if I ask you that what is log base 2 there is something called as base I will talk about it and if I just ask you what is log base 2"
      },
      {
        "lecture": 19,
        "file": "019_Fundamental_Section_Lecture_Logarithms_Definition_and_All_Properties.mp4",
        "start": 53.5,
        "end": 76.53,
        "text": "8 then you will say that it is just 2 if I just ask you what is log base 2 sorry it is just 3 here it is 3 and if I just ask you what is log base 2 32 then you will say it is 5 similarly if I ask you what is log base 3 81 then you will say it is 4 right these are your answers"
      }
    ],
    "foundation": {
      "title": "Logarithms as inverse powers",
      "idea": "log_b(x) is the exponent y for which b^y=x. For real logarithms, x must be positive and b must be positive and different from one.",
      "terms": [
        "Base: the repeated multiplication factor.",
        "Argument: the positive value inside the logarithm.",
        "Inverse: an operation that undoes another."
      ],
      "example": "log_2(8)=3 because 2^3=8. log_2(1)=0 because 2^0=1."
    }
  },
  {
    "id": 58,
    "lecture": 19,
    "title": "Apply product and power rules",
    "concept": "log_b(x) is the exponent y for which b^y=x. For real logarithms, x must be positive and b must be positive and different from one.",
    "teachingSteps": [
      "Rewrite a log as a power equality.",
      "Products become sums, quotients become differences, and powers multiply the log.",
      "State the base and verify the argument is positive."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which identity is generally valid for positive x,y and a valid common base?",
        "options": [
          "log(xy)=log(x)*log(y)",
          "log(xy)=log(x)+log(y)",
          "log(x+y)=log(x)+log(y)"
        ],
        "answer": 1,
        "explanation": "Products become sums, not sums of arguments."
      },
      {
        "type": "number",
        "prompt": "What is log_2(8 / 2)?",
        "answer": 2,
        "explanation": "Use the quotient rule: log_2(x)-1.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 8
        }
      },
      {
        "type": "number",
        "prompt": "What is log_4(64)?",
        "answer": 3,
        "explanation": "The argument is 4^3.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 64
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Check base and argument conditions",
          "Rewrite using the matching power or log rule",
          "Simplify while retaining the stated base",
          "Evaluate the resulting expression"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "log",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 19,
        "file": "019_Fundamental_Section_Lecture_Logarithms_Definition_and_All_Properties.mp4",
        "start": 0,
        "end": 24.04,
        "text": "Hi everyone. So in this video, we are going to discuss logarithms. Logarithms are just another way of thinking A power X. So we will see that what do I mean by that. Okay. So we are going to cover definition of logarithms. I mean the formal definition, the log properties and their proof, some questions, log graph and importance of log in computer sense. Let's just start with the log definition. But before that,"
      },
      {
        "lecture": 19,
        "file": "019_Fundamental_Section_Lecture_Logarithms_Definition_and_All_Properties.mp4",
        "start": 24.23,
        "end": 53.33,
        "text": "very first question which is that why why I am saying that it is just another way of thinking about a power x. Let's just see this. Suppose I say that what is 2 power 3 then what you will say you will immediately answer that to be 8. Similarly you will immediately answer that to be 32 I think and then you will say it is 81. So these are your answers. Now suppose if I ask you that what is log base 2 there is something called as base I will talk about it and if I just ask you what is log base 2"
      },
      {
        "lecture": 19,
        "file": "019_Fundamental_Section_Lecture_Logarithms_Definition_and_All_Properties.mp4",
        "start": 53.5,
        "end": 76.53,
        "text": "8 then you will say that it is just 2 if I just ask you what is log base 2 sorry it is just 3 here it is 3 and if I just ask you what is log base 2 32 then you will say it is 5 similarly if I ask you what is log base 3 81 then you will say it is 4 right these are your answers"
      }
    ],
    "foundation": {
      "title": "Logarithms as inverse powers",
      "idea": "log_b(x) is the exponent y for which b^y=x. For real logarithms, x must be positive and b must be positive and different from one.",
      "terms": [
        "Base: the repeated multiplication factor.",
        "Argument: the positive value inside the logarithm.",
        "Inverse: an operation that undoes another."
      ],
      "example": "log_2(8)=3 because 2^3=8. log_2(1)=0 because 2^0=1."
    }
  },
  {
    "id": 59,
    "lecture": 19,
    "title": "Check the logarithm domain",
    "concept": "log_b(x) is the exponent y for which b^y=x. For real logarithms, x must be positive and b must be positive and different from one.",
    "teachingSteps": [
      "Rewrite a log as a power equality.",
      "Products become sums, quotients become differences, and powers multiply the log.",
      "State the base and verify the argument is positive."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Where does every valid logarithm graph meet the horizontal axis?",
        "options": [
          "x=1",
          "x=0",
          "x=the base only"
        ],
        "answer": 0,
        "explanation": "log_b(1)=0."
      },
      {
        "type": "number",
        "prompt": "What is log_(1/2)(8)?",
        "answer": -3,
        "explanation": "(1/2)^(-3)=2^3.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 8
        }
      },
      {
        "type": "choice",
        "prompt": "For base 1/2, what happens to the log when its positive argument doubles?",
        "options": [
          "It stays unchanged",
          "It decreases by 1",
          "It increases by 1"
        ],
        "answer": 1,
        "explanation": "log_(1/2)(2x)=log_(1/2)(x)-1."
      },
      {
        "type": "number",
        "prompt": "For n=8>1, evaluate 2^(log_2(log_2(n))).",
        "answer": 3,
        "explanation": "The outer power and matching log cancel, leaving log_2(n).",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 8
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "log",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 19,
        "file": "019_Fundamental_Section_Lecture_Logarithms_Definition_and_All_Properties.mp4",
        "start": 0,
        "end": 24.04,
        "text": "Hi everyone. So in this video, we are going to discuss logarithms. Logarithms are just another way of thinking A power X. So we will see that what do I mean by that. Okay. So we are going to cover definition of logarithms. I mean the formal definition, the log properties and their proof, some questions, log graph and importance of log in computer sense. Let's just start with the log definition. But before that,"
      },
      {
        "lecture": 19,
        "file": "019_Fundamental_Section_Lecture_Logarithms_Definition_and_All_Properties.mp4",
        "start": 24.23,
        "end": 53.33,
        "text": "very first question which is that why why I am saying that it is just another way of thinking about a power x. Let's just see this. Suppose I say that what is 2 power 3 then what you will say you will immediately answer that to be 8. Similarly you will immediately answer that to be 32 I think and then you will say it is 81. So these are your answers. Now suppose if I ask you that what is log base 2 there is something called as base I will talk about it and if I just ask you what is log base 2"
      },
      {
        "lecture": 19,
        "file": "019_Fundamental_Section_Lecture_Logarithms_Definition_and_All_Properties.mp4",
        "start": 53.5,
        "end": 76.53,
        "text": "8 then you will say that it is just 2 if I just ask you what is log base 2 sorry it is just 3 here it is 3 and if I just ask you what is log base 2 32 then you will say it is 5 similarly if I ask you what is log base 3 81 then you will say it is 4 right these are your answers"
      }
    ],
    "foundation": {
      "title": "Logarithms as inverse powers",
      "idea": "log_b(x) is the exponent y for which b^y=x. For real logarithms, x must be positive and b must be positive and different from one.",
      "terms": [
        "Base: the repeated multiplication factor.",
        "Argument: the positive value inside the logarithm.",
        "Inverse: an operation that undoes another."
      ],
      "example": "log_2(8)=3 because 2^3=8. log_2(1)=0 because 2^0=1."
    }
  },
  {
    "id": 60,
    "lecture": 20,
    "title": "Split a product or quotient",
    "concept": "Log rules simplify multiplication and powers only when their domain conditions hold. A logarithm of a sum cannot generally be split into a sum of logarithms.",
    "teachingSteps": [
      "Check positive arguments and a valid common base.",
      "Use log_b(xy)=log_b(x)+log_b(y).",
      "Use log_b(x/y)=log_b(x)-log_b(y), and log_b(x)=log_c(x)/log_c(b)."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which is the correct logarithm domain for real logs?",
        "options": [
          "Base must always be exactly 10",
          "Argument positive; base positive and not 1",
          "Argument may be any negative value"
        ],
        "answer": 1,
        "explanation": "These are the real-domain conditions."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "log_b(x)",
            "Exponent that makes b^y=x"
          ],
          [
            "Product of arguments",
            "Sum of logarithms"
          ],
          [
            "Quotient of arguments",
            "Difference of logarithms"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "What is log_2(16)?",
        "answer": 4,
        "explanation": "16=2^4.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 16
        }
      },
      {
        "type": "number",
        "prompt": "What is log_2(16 * 8)?",
        "answer": 7,
        "explanation": "Use the product rule: log_2(x)+3.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 16
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "log",
    "start": 0.69,
    "sourceReferences": [
      {
        "lecture": 20,
        "file": "020_Fundamental_Section_Lecture_Logarithm_Exercise_Questions.mp4",
        "start": 0.69,
        "end": 25.13,
        "text": "Hi everyone. So let us now continue our discussion on log. Now in this lecture, we are first going to summarize the log properties that we have already seen and then I will tell you the graph of log and some other things. So these are the few log properties that we have seen like just to just to say that these are the six properties that we have seen. This is the first property where we are saying that log"
      },
      {
        "lecture": 20,
        "file": "020_Fundamental_Section_Lecture_Logarithm_Exercise_Questions.mp4",
        "start": 25.5,
        "end": 45.96,
        "text": "a power n is nothing but you can take this n you can bring this n outside and then you can say it is n log a right the base could be anything let's suppose base is b similarly if that's a product you can separate it with with the plus similarly if there's a division then you can separate it with minus so these are the three properties that are very commonly used in log and now"
      },
      {
        "lecture": 20,
        "file": "020_Fundamental_Section_Lecture_Logarithm_Exercise_Questions.mp4",
        "start": 46.14,
        "end": 74.02,
        "text": "there are three more property that we have seen and for this property as I told like most of the times we might need to go from here to here only which means given any number a I might need to write it as b power log ba okay and similarly like this is the base change property that is also used sometimes and and there is one more property that is basically changing this number with this number you can basically interchange these two numbers and then you then you can say that these two these two expressions are actually same"
      }
    ],
    "foundation": {
      "title": "Simplifying logarithmic expressions",
      "idea": "Log rules simplify multiplication and powers only when their domain conditions hold. A logarithm of a sum cannot generally be split into a sum of logarithms.",
      "terms": [
        "Product rule: addition of logs.",
        "Quotient rule: subtraction of logs.",
        "Change of base: a ratio of two logs in the same new base."
      ],
      "example": "log_2(8/2)=3-1=2. log_2(8+2) is not 3+1."
    }
  },
  {
    "id": 61,
    "lecture": 20,
    "title": "Change the base correctly",
    "concept": "Log rules simplify multiplication and powers only when their domain conditions hold. A logarithm of a sum cannot generally be split into a sum of logarithms.",
    "teachingSteps": [
      "Check positive arguments and a valid common base.",
      "Use log_b(xy)=log_b(x)+log_b(y).",
      "Use log_b(x/y)=log_b(x)-log_b(y), and log_b(x)=log_c(x)/log_c(b)."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which identity is generally valid for positive x,y and a valid common base?",
        "options": [
          "log(xy)=log(x)+log(y)",
          "log(x+y)=log(x)+log(y)",
          "log(xy)=log(x)*log(y)"
        ],
        "answer": 0,
        "explanation": "Products become sums, not sums of arguments."
      },
      {
        "type": "number",
        "prompt": "What is log_2(16 / 2)?",
        "answer": 3,
        "explanation": "Use the quotient rule: log_2(x)-1.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 16
        }
      },
      {
        "type": "number",
        "prompt": "What is log_4(256)?",
        "answer": 4,
        "explanation": "The argument is 4^4.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 256
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Check base and argument conditions",
          "Rewrite using the matching power or log rule",
          "Simplify while retaining the stated base",
          "Evaluate the resulting expression"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "log",
    "start": 0.69,
    "sourceReferences": [
      {
        "lecture": 20,
        "file": "020_Fundamental_Section_Lecture_Logarithm_Exercise_Questions.mp4",
        "start": 0.69,
        "end": 25.13,
        "text": "Hi everyone. So let us now continue our discussion on log. Now in this lecture, we are first going to summarize the log properties that we have already seen and then I will tell you the graph of log and some other things. So these are the few log properties that we have seen like just to just to say that these are the six properties that we have seen. This is the first property where we are saying that log"
      },
      {
        "lecture": 20,
        "file": "020_Fundamental_Section_Lecture_Logarithm_Exercise_Questions.mp4",
        "start": 25.5,
        "end": 45.96,
        "text": "a power n is nothing but you can take this n you can bring this n outside and then you can say it is n log a right the base could be anything let's suppose base is b similarly if that's a product you can separate it with with the plus similarly if there's a division then you can separate it with minus so these are the three properties that are very commonly used in log and now"
      },
      {
        "lecture": 20,
        "file": "020_Fundamental_Section_Lecture_Logarithm_Exercise_Questions.mp4",
        "start": 46.14,
        "end": 74.02,
        "text": "there are three more property that we have seen and for this property as I told like most of the times we might need to go from here to here only which means given any number a I might need to write it as b power log ba okay and similarly like this is the base change property that is also used sometimes and and there is one more property that is basically changing this number with this number you can basically interchange these two numbers and then you then you can say that these two these two expressions are actually same"
      }
    ],
    "foundation": {
      "title": "Simplifying logarithmic expressions",
      "idea": "Log rules simplify multiplication and powers only when their domain conditions hold. A logarithm of a sum cannot generally be split into a sum of logarithms.",
      "terms": [
        "Product rule: addition of logs.",
        "Quotient rule: subtraction of logs.",
        "Change of base: a ratio of two logs in the same new base."
      ],
      "example": "log_2(8/2)=3-1=2. log_2(8+2) is not 3+1."
    }
  },
  {
    "id": 62,
    "lecture": 20,
    "title": "Evaluate a stated base",
    "concept": "Log rules simplify multiplication and powers only when their domain conditions hold. A logarithm of a sum cannot generally be split into a sum of logarithms.",
    "teachingSteps": [
      "Check positive arguments and a valid common base.",
      "Use log_b(xy)=log_b(x)+log_b(y).",
      "Use log_b(x/y)=log_b(x)-log_b(y), and log_b(x)=log_c(x)/log_c(b)."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Where does every valid logarithm graph meet the horizontal axis?",
        "options": [
          "x=0",
          "x=the base only",
          "x=1"
        ],
        "answer": 2,
        "explanation": "log_b(1)=0."
      },
      {
        "type": "number",
        "prompt": "What is log_(1/2)(16)?",
        "answer": -4,
        "explanation": "(1/2)^(-4)=2^4.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 16
        }
      },
      {
        "type": "choice",
        "prompt": "For base 1/2, what happens to the log when its positive argument doubles?",
        "options": [
          "It decreases by 1",
          "It increases by 1",
          "It stays unchanged"
        ],
        "answer": 0,
        "explanation": "log_(1/2)(2x)=log_(1/2)(x)-1."
      },
      {
        "type": "number",
        "prompt": "For n=16>1, evaluate 2^(log_2(log_2(n))).",
        "answer": 4,
        "explanation": "The outer power and matching log cancel, leaving log_2(n).",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 16
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "log",
    "start": 0.69,
    "sourceReferences": [
      {
        "lecture": 20,
        "file": "020_Fundamental_Section_Lecture_Logarithm_Exercise_Questions.mp4",
        "start": 0.69,
        "end": 25.13,
        "text": "Hi everyone. So let us now continue our discussion on log. Now in this lecture, we are first going to summarize the log properties that we have already seen and then I will tell you the graph of log and some other things. So these are the few log properties that we have seen like just to just to say that these are the six properties that we have seen. This is the first property where we are saying that log"
      },
      {
        "lecture": 20,
        "file": "020_Fundamental_Section_Lecture_Logarithm_Exercise_Questions.mp4",
        "start": 25.5,
        "end": 45.96,
        "text": "a power n is nothing but you can take this n you can bring this n outside and then you can say it is n log a right the base could be anything let's suppose base is b similarly if that's a product you can separate it with with the plus similarly if there's a division then you can separate it with minus so these are the three properties that are very commonly used in log and now"
      },
      {
        "lecture": 20,
        "file": "020_Fundamental_Section_Lecture_Logarithm_Exercise_Questions.mp4",
        "start": 46.14,
        "end": 74.02,
        "text": "there are three more property that we have seen and for this property as I told like most of the times we might need to go from here to here only which means given any number a I might need to write it as b power log ba okay and similarly like this is the base change property that is also used sometimes and and there is one more property that is basically changing this number with this number you can basically interchange these two numbers and then you then you can say that these two these two expressions are actually same"
      }
    ],
    "foundation": {
      "title": "Simplifying logarithmic expressions",
      "idea": "Log rules simplify multiplication and powers only when their domain conditions hold. A logarithm of a sum cannot generally be split into a sum of logarithms.",
      "terms": [
        "Product rule: addition of logs.",
        "Quotient rule: subtraction of logs.",
        "Change of base: a ratio of two logs in the same new base."
      ],
      "example": "log_2(8/2)=3-1=2. log_2(8+2) is not 3+1."
    }
  },
  {
    "id": 63,
    "lecture": 21,
    "title": "Read the domain and intercept",
    "concept": "Every real logarithm graph has domain x>0 and passes through (1,0). A base above one gives an increasing graph; a base between zero and one gives a decreasing graph.",
    "teachingSteps": [
      "Mark the point (1,0) and exclude nonpositive arguments.",
      "For base 2, each doubling increases the log by one.",
      "For base 1/2, each doubling decreases the log by one."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which is the correct logarithm domain for real logs?",
        "options": [
          "Argument positive; base positive and not 1",
          "Argument may be any negative value",
          "Base must always be exactly 10"
        ],
        "answer": 0,
        "explanation": "These are the real-domain conditions."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "log_b(x)",
            "Exponent that makes b^y=x"
          ],
          [
            "Product of arguments",
            "Sum of logarithms"
          ],
          [
            "Quotient of arguments",
            "Difference of logarithms"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "What is log_2(4)?",
        "answer": 2,
        "explanation": "4=2^2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 4
        }
      },
      {
        "type": "number",
        "prompt": "What is log_2(4 * 8)?",
        "answer": 5,
        "explanation": "Use the product rule: log_2(x)+3.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 4
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "log-graph",
    "start": 0.3,
    "sourceReferences": [
      {
        "lecture": 21,
        "file": "021_Fundamental_Section_Lecture_Logarithm_Questions,_Graph,_and.mp4",
        "start": 0.3,
        "end": 26.62,
        "text": "Let us now continue with the next question. So what they are asking is that if log x upon v minus c is equal to log y upon c minus a, similarly that is equal to log z upon a minus v. Then which of the following option is correct? That's what they're asking. So here if you notice that they have not given the log base, you can take any base doesn't matter. So let me take log base 10. So what we need to do, we need to check that which of the following option is correct."
      },
      {
        "lecture": 21,
        "file": "021_Fundamental_Section_Lecture_Logarithm_Questions,_Graph,_and.mp4",
        "start": 92.91,
        "end": 120.79,
        "text": "so log x upon b minus c as you know that is given as k so now you can say from here log x is equal to k into b minus c and then from this you can find out x equal to 10 is power k into b minus c right so that's how you can find out the x in terms of k similarly you can find out y so which means log y upon c minus a equal to k"
      },
      {
        "lecture": 21,
        "file": "021_Fundamental_Section_Lecture_Logarithm_Questions,_Graph,_and.mp4",
        "start": 418.99,
        "end": 447.16,
        "text": "Okay, these bases are different. So that's why I need to convert basically this to base two. So that's why I'm using property, which is basically something like this. See, this is two square X minus one. So if you're having B power M, then you can take it outside, but it will be one upon M, right? So it will be one upon two log base two X minus one. So you can write the LHS something like this and then equal to the RHS is basically log base two log base two X minus three. So now"
      }
    ],
    "foundation": {
      "title": "Logarithm graphs and inverses",
      "idea": "Every real logarithm graph has domain x>0 and passes through (1,0). A base above one gives an increasing graph; a base between zero and one gives a decreasing graph.",
      "terms": [
        "Domain: allowed input values.",
        "Intercept: a graph crossing an axis.",
        "Monotonic: always increasing or always decreasing."
      ],
      "example": "At x=4, log_2(x)=2 while log_(1/2)(x)=-2."
    }
  },
  {
    "id": 64,
    "lecture": 21,
    "title": "Compare bases above and below one",
    "concept": "Every real logarithm graph has domain x>0 and passes through (1,0). A base above one gives an increasing graph; a base between zero and one gives a decreasing graph.",
    "teachingSteps": [
      "Mark the point (1,0) and exclude nonpositive arguments.",
      "For base 2, each doubling increases the log by one.",
      "For base 1/2, each doubling decreases the log by one."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which identity is generally valid for positive x,y and a valid common base?",
        "options": [
          "log(x+y)=log(x)+log(y)",
          "log(xy)=log(x)*log(y)",
          "log(xy)=log(x)+log(y)"
        ],
        "answer": 2,
        "explanation": "Products become sums, not sums of arguments."
      },
      {
        "type": "number",
        "prompt": "What is log_2(4 / 2)?",
        "answer": 1,
        "explanation": "Use the quotient rule: log_2(x)-1.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 4
        }
      },
      {
        "type": "number",
        "prompt": "What is log_4(16)?",
        "answer": 2,
        "explanation": "The argument is 4^2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 16
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Check base and argument conditions",
          "Rewrite using the matching power or log rule",
          "Simplify while retaining the stated base",
          "Evaluate the resulting expression"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "log-graph",
    "start": 0.3,
    "sourceReferences": [
      {
        "lecture": 21,
        "file": "021_Fundamental_Section_Lecture_Logarithm_Questions,_Graph,_and.mp4",
        "start": 0.3,
        "end": 26.62,
        "text": "Let us now continue with the next question. So what they are asking is that if log x upon v minus c is equal to log y upon c minus a, similarly that is equal to log z upon a minus v. Then which of the following option is correct? That's what they're asking. So here if you notice that they have not given the log base, you can take any base doesn't matter. So let me take log base 10. So what we need to do, we need to check that which of the following option is correct."
      },
      {
        "lecture": 21,
        "file": "021_Fundamental_Section_Lecture_Logarithm_Questions,_Graph,_and.mp4",
        "start": 92.91,
        "end": 120.79,
        "text": "so log x upon b minus c as you know that is given as k so now you can say from here log x is equal to k into b minus c and then from this you can find out x equal to 10 is power k into b minus c right so that's how you can find out the x in terms of k similarly you can find out y so which means log y upon c minus a equal to k"
      },
      {
        "lecture": 21,
        "file": "021_Fundamental_Section_Lecture_Logarithm_Questions,_Graph,_and.mp4",
        "start": 418.99,
        "end": 447.16,
        "text": "Okay, these bases are different. So that's why I need to convert basically this to base two. So that's why I'm using property, which is basically something like this. See, this is two square X minus one. So if you're having B power M, then you can take it outside, but it will be one upon M, right? So it will be one upon two log base two X minus one. So you can write the LHS something like this and then equal to the RHS is basically log base two log base two X minus three. So now"
      }
    ],
    "foundation": {
      "title": "Logarithm graphs and inverses",
      "idea": "Every real logarithm graph has domain x>0 and passes through (1,0). A base above one gives an increasing graph; a base between zero and one gives a decreasing graph.",
      "terms": [
        "Domain: allowed input values.",
        "Intercept: a graph crossing an axis.",
        "Monotonic: always increasing or always decreasing."
      ],
      "example": "At x=4, log_2(x)=2 while log_(1/2)(x)=-2."
    }
  },
  {
    "id": 65,
    "lecture": 21,
    "title": "Trace an inverse calculation",
    "concept": "Every real logarithm graph has domain x>0 and passes through (1,0). A base above one gives an increasing graph; a base between zero and one gives a decreasing graph.",
    "teachingSteps": [
      "Mark the point (1,0) and exclude nonpositive arguments.",
      "For base 2, each doubling increases the log by one.",
      "For base 1/2, each doubling decreases the log by one."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Where does every valid logarithm graph meet the horizontal axis?",
        "options": [
          "x=the base only",
          "x=1",
          "x=0"
        ],
        "answer": 1,
        "explanation": "log_b(1)=0."
      },
      {
        "type": "number",
        "prompt": "What is log_(1/2)(4)?",
        "answer": -2,
        "explanation": "(1/2)^(-2)=2^2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 4
        }
      },
      {
        "type": "choice",
        "prompt": "For base 1/2, what happens to the log when its positive argument doubles?",
        "options": [
          "It increases by 1",
          "It stays unchanged",
          "It decreases by 1"
        ],
        "answer": 2,
        "explanation": "log_(1/2)(2x)=log_(1/2)(x)-1."
      },
      {
        "type": "number",
        "prompt": "For n=4>1, evaluate 2^(log_2(log_2(n))).",
        "answer": 2,
        "explanation": "The outer power and matching log cancel, leaving log_2(n).",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 4
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "log-graph",
    "start": 0.3,
    "sourceReferences": [
      {
        "lecture": 21,
        "file": "021_Fundamental_Section_Lecture_Logarithm_Questions,_Graph,_and.mp4",
        "start": 0.3,
        "end": 26.62,
        "text": "Let us now continue with the next question. So what they are asking is that if log x upon v minus c is equal to log y upon c minus a, similarly that is equal to log z upon a minus v. Then which of the following option is correct? That's what they're asking. So here if you notice that they have not given the log base, you can take any base doesn't matter. So let me take log base 10. So what we need to do, we need to check that which of the following option is correct."
      },
      {
        "lecture": 21,
        "file": "021_Fundamental_Section_Lecture_Logarithm_Questions,_Graph,_and.mp4",
        "start": 92.91,
        "end": 120.79,
        "text": "so log x upon b minus c as you know that is given as k so now you can say from here log x is equal to k into b minus c and then from this you can find out x equal to 10 is power k into b minus c right so that's how you can find out the x in terms of k similarly you can find out y so which means log y upon c minus a equal to k"
      },
      {
        "lecture": 21,
        "file": "021_Fundamental_Section_Lecture_Logarithm_Questions,_Graph,_and.mp4",
        "start": 418.99,
        "end": 447.16,
        "text": "Okay, these bases are different. So that's why I need to convert basically this to base two. So that's why I'm using property, which is basically something like this. See, this is two square X minus one. So if you're having B power M, then you can take it outside, but it will be one upon M, right? So it will be one upon two log base two X minus one. So you can write the LHS something like this and then equal to the RHS is basically log base two log base two X minus three. So now"
      }
    ],
    "foundation": {
      "title": "Logarithm graphs and inverses",
      "idea": "Every real logarithm graph has domain x>0 and passes through (1,0). A base above one gives an increasing graph; a base between zero and one gives a decreasing graph.",
      "terms": [
        "Domain: allowed input values.",
        "Intercept: a graph crossing an axis.",
        "Monotonic: always increasing or always decreasing."
      ],
      "example": "At x=4, log_2(x)=2 while log_(1/2)(x)=-2."
    }
  },
  {
    "id": 66,
    "lecture": 22,
    "title": "Define input size",
    "concept": "A running-time model counts stated primitive operations as a function of input size. Measured seconds also depend on hardware and implementation; asymptotic growth removes constant factors and lower-order details.",
    "teachingSteps": [
      "Define what n measures.",
      "Count the operations performed by the stated algorithm.",
      "Compare growth for increasing n, rather than one stopwatch measurement."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "For nonnegative functions, which statement describes Big O?",
        "options": [
          "Only a worst-input selection",
          "Exact equality at every n",
          "An eventual constant-factor upper bound"
        ],
        "answer": 2,
        "explanation": "The inequality holds after a fixed threshold."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Big O",
            "Eventual upper bound"
          ],
          [
            "Big Omega",
            "Eventual lower bound"
          ],
          [
            "Theta",
            "Both bounds using the same growth function"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "A scan takes T(n)=3n+2 operations. At n=7, how many operations occur?",
        "answer": 23,
        "explanation": "Substitute the stated input size.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      },
      {
        "type": "number",
        "prompt": "At n=7, what is the upper witness 5n?",
        "answer": 35,
        "explanation": "For n>=1, 3n+2<=5n.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "growth",
    "start": 0.66,
    "sourceReferences": [
      {
        "lecture": 22,
        "file": "022. DS Videos_ 5a. Introduction to Asymptotic Analysis.mp4",
        "start": 0.66,
        "end": 36.24,
        "text": "Now we know different operations on the linked list. So when I say different operations, these operations are also called algorithm. Like why we are calling it algorithm? Because algorithm is just set of steps for a task. So these algorithms or these operations are also algorithm because like anything which which we are typically writing on the computer as a program is an algorithm because this is just a set of steps, right? But there is a question. Question is that"
      },
      {
        "lecture": 22,
        "file": "022. DS Videos_ 5a. Introduction to Asymptotic Analysis.mp4",
        "start": 210.73,
        "end": 245.67,
        "text": "so it is not practical and second thing is like just to let you know that what is this input so for example just to relate it let me relate it with linked list example only so what is an input is an input of algorithm input is something which you actually give which means let's suppose this is your algorithm on inserting okay insert algorithm algorithm is what your set of steps like right"
      },
      {
        "lecture": 22,
        "file": "022. DS Videos_ 5a. Introduction to Asymptotic Analysis.mp4",
        "start": 246,
        "end": 265.28,
        "text": "so in those set of steps you will be asking for two things like your algorithm doesn't have linked list by its own right so you will be asking for two things one is linked list itself linked list second thing you will be asking so this is the algorithm right second thing you will be asking will be if it is inserting algorithm"
      }
    ],
    "foundation": {
      "title": "Counting work before comparing speed",
      "idea": "A running-time model counts stated primitive operations as a function of input size. Measured seconds also depend on hardware and implementation; asymptotic growth removes constant factors and lower-order details.",
      "terms": [
        "Input size: the quantity being varied.",
        "Primitive operation: one counted action in the model.",
        "Growth: how the count changes with n."
      ],
      "example": "If a scan costs 3n+2 operations, n=4 costs 14; doubling n gives 26, rather than exactly twice 14."
    }
  },
  {
    "id": 67,
    "lecture": 22,
    "title": "Count primitive operations",
    "concept": "A running-time model counts stated primitive operations as a function of input size. Measured seconds also depend on hardware and implementation; asymptotic growth removes constant factors and lower-order details.",
    "teachingSteps": [
      "Define what n measures.",
      "Count the operations performed by the stated algorithm.",
      "Compare growth for increasing n, rather than one stopwatch measurement."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which growth class is tight for 3n^2+2n?",
        "options": [
          "Theta(1)",
          "Theta(n^2)",
          "Theta(n)"
        ],
        "answer": 1,
        "explanation": "The quadratic term dominates, and positive upper and lower witnesses exist."
      },
      {
        "type": "number",
        "prompt": "At n=7, what is the lower witness 3n?",
        "answer": 21,
        "explanation": "The additional 2 is nonnegative.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      },
      {
        "type": "number",
        "prompt": "What is T(2n) when n=7?",
        "answer": 44,
        "explanation": "Use 3(2n)+2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "State the functions and their positive domain",
          "Simplify a ratio or dominant term",
          "Choose valid constants and a threshold",
          "State the resulting growth relation"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "growth",
    "start": 0.66,
    "sourceReferences": [
      {
        "lecture": 22,
        "file": "022. DS Videos_ 5a. Introduction to Asymptotic Analysis.mp4",
        "start": 0.66,
        "end": 36.24,
        "text": "Now we know different operations on the linked list. So when I say different operations, these operations are also called algorithm. Like why we are calling it algorithm? Because algorithm is just set of steps for a task. So these algorithms or these operations are also algorithm because like anything which which we are typically writing on the computer as a program is an algorithm because this is just a set of steps, right? But there is a question. Question is that"
      },
      {
        "lecture": 22,
        "file": "022. DS Videos_ 5a. Introduction to Asymptotic Analysis.mp4",
        "start": 210.73,
        "end": 245.67,
        "text": "so it is not practical and second thing is like just to let you know that what is this input so for example just to relate it let me relate it with linked list example only so what is an input is an input of algorithm input is something which you actually give which means let's suppose this is your algorithm on inserting okay insert algorithm algorithm is what your set of steps like right"
      },
      {
        "lecture": 22,
        "file": "022. DS Videos_ 5a. Introduction to Asymptotic Analysis.mp4",
        "start": 246,
        "end": 265.28,
        "text": "so in those set of steps you will be asking for two things like your algorithm doesn't have linked list by its own right so you will be asking for two things one is linked list itself linked list second thing you will be asking so this is the algorithm right second thing you will be asking will be if it is inserting algorithm"
      }
    ],
    "foundation": {
      "title": "Counting work before comparing speed",
      "idea": "A running-time model counts stated primitive operations as a function of input size. Measured seconds also depend on hardware and implementation; asymptotic growth removes constant factors and lower-order details.",
      "terms": [
        "Input size: the quantity being varied.",
        "Primitive operation: one counted action in the model.",
        "Growth: how the count changes with n."
      ],
      "example": "If a scan costs 3n+2 operations, n=4 costs 14; doubling n gives 26, rather than exactly twice 14."
    }
  },
  {
    "id": 68,
    "lecture": 22,
    "title": "Separate growth from hardware speed",
    "concept": "A running-time model counts stated primitive operations as a function of input size. Measured seconds also depend on hardware and implementation; asymptotic growth removes constant factors and lower-order details.",
    "teachingSteps": [
      "Define what n measures.",
      "Count the operations performed by the stated algorithm.",
      "Compare growth for increasing n, rather than one stopwatch measurement."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which strict comparison is valid as n grows?",
        "options": [
          "n is little-o of n^2",
          "2n is little-o of n",
          "n^2 is Theta(n)"
        ],
        "answer": 0,
        "explanation": "The first ratio is 1/n, which tends to zero."
      },
      {
        "type": "number",
        "prompt": "For 3n+2<=5n, what is the smallest positive integer threshold n0?",
        "answer": 1,
        "explanation": "The inequality is 2<=2n.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      },
      {
        "type": "choice",
        "prompt": "Does n belonging to O(n^2) imply n is Theta(n^2)?",
        "options": [
          "Only if n is even",
          "No; the upper bound can be loose",
          "Yes; every upper bound is tight"
        ],
        "answer": 1,
        "explanation": "Theta also needs a matching lower bound."
      },
      {
        "type": "number",
        "prompt": "At n=7, compute T(n)-3n.",
        "answer": 2,
        "explanation": "The fixed overhead is two.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "growth",
    "start": 0.66,
    "sourceReferences": [
      {
        "lecture": 22,
        "file": "022. DS Videos_ 5a. Introduction to Asymptotic Analysis.mp4",
        "start": 0.66,
        "end": 36.24,
        "text": "Now we know different operations on the linked list. So when I say different operations, these operations are also called algorithm. Like why we are calling it algorithm? Because algorithm is just set of steps for a task. So these algorithms or these operations are also algorithm because like anything which which we are typically writing on the computer as a program is an algorithm because this is just a set of steps, right? But there is a question. Question is that"
      },
      {
        "lecture": 22,
        "file": "022. DS Videos_ 5a. Introduction to Asymptotic Analysis.mp4",
        "start": 210.73,
        "end": 245.67,
        "text": "so it is not practical and second thing is like just to let you know that what is this input so for example just to relate it let me relate it with linked list example only so what is an input is an input of algorithm input is something which you actually give which means let's suppose this is your algorithm on inserting okay insert algorithm algorithm is what your set of steps like right"
      },
      {
        "lecture": 22,
        "file": "022. DS Videos_ 5a. Introduction to Asymptotic Analysis.mp4",
        "start": 246,
        "end": 265.28,
        "text": "so in those set of steps you will be asking for two things like your algorithm doesn't have linked list by its own right so you will be asking for two things one is linked list itself linked list second thing you will be asking so this is the algorithm right second thing you will be asking will be if it is inserting algorithm"
      }
    ],
    "foundation": {
      "title": "Counting work before comparing speed",
      "idea": "A running-time model counts stated primitive operations as a function of input size. Measured seconds also depend on hardware and implementation; asymptotic growth removes constant factors and lower-order details.",
      "terms": [
        "Input size: the quantity being varied.",
        "Primitive operation: one counted action in the model.",
        "Growth: how the count changes with n."
      ],
      "example": "If a scan costs 3n+2 operations, n=4 costs 14; doubling n gives 26, rather than exactly twice 14."
    }
  },
  {
    "id": 69,
    "lecture": 23,
    "title": "Read an eventual upper bound",
    "concept": "For nonnegative functions, Big O is an eventual upper bound and Big Omega is an eventual lower bound, allowing a fixed positive constant factor. A bound need not be tight.",
    "teachingSteps": [
      "Choose positive constants independent of n.",
      "Find a threshold n0 after which the inequality always holds.",
      "Keep upper and lower bounds separate from best and worst input cases."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "For nonnegative functions, which statement describes Big O?",
        "options": [
          "Exact equality at every n",
          "An eventual constant-factor upper bound",
          "Only a worst-input selection"
        ],
        "answer": 1,
        "explanation": "The inequality holds after a fixed threshold."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Big O",
            "Eventual upper bound"
          ],
          [
            "Big Omega",
            "Eventual lower bound"
          ],
          [
            "Theta",
            "Both bounds using the same growth function"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "A scan takes T(n)=3n+2 operations. At n=8, how many operations occur?",
        "answer": 26,
        "explanation": "Substitute the stated input size.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      },
      {
        "type": "number",
        "prompt": "At n=8, what is the upper witness 5n?",
        "answer": 40,
        "explanation": "For n>=1, 3n+2<=5n.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "bounds",
    "start": 95.14,
    "sourceReferences": [
      {
        "lecture": 23,
        "file": "023_DS_Videos_5b_Big_oh_and_Big_omega_Asymptotic_Notations.mp4",
        "start": 95.14,
        "end": 123.78,
        "text": "So overall the input size is actually n, like these are the constants so you can ignore it. So you can say your time complexity which is generally represented by t is a function of t is a function of n. Why? Because n is an input size. Now if I ask you another question, suppose you need to multiply two numbers. Multiply two numbers. In this case, what is the input size? Input will be how big your numbers are, right?"
      },
      {
        "lecture": 23,
        "file": "023_DS_Videos_5b_Big_oh_and_Big_omega_Asymptotic_Notations.mp4",
        "start": 260.23,
        "end": 287.73,
        "text": "If there exist a constant c greater than 0 or n0 greater than equal to 0 such that for all n greater than equal to n0 Tn is less than equal to c into gn. Now I know that you haven't got it anything so let me explain it clearly. So Tn I say is order of some function may be n square. If and only if I am 100% sure that Tn like whenever I am writing like this then I will say that Tn which is my time complexity"
      },
      {
        "lecture": 23,
        "file": "023_DS_Videos_5b_Big_oh_and_Big_omega_Asymptotic_Notations.mp4",
        "start": 379.96,
        "end": 409.13,
        "text": "because you need to iterate till 13 because you will you will run a while loop till this point and then you will be inserting suppose you want to insert before 2 before 2 then you will just go go here and you will just insert before 2 right so it will just take a constant time maybe or maybe just one time right so depending on the input if input is insert before 13 then you will be taking n time if input is insert before 2 then you will be taking one time"
      }
    ],
    "foundation": {
      "title": "Big O and big Omega bounds",
      "idea": "For nonnegative functions, Big O is an eventual upper bound and Big Omega is an eventual lower bound, allowing a fixed positive constant factor. A bound need not be tight.",
      "terms": [
        "O(g): f(n)<=c g(n) eventually.",
        "Omega(g): f(n)>=c g(n) eventually.",
        "Threshold: where the stated eventual guarantee starts."
      ],
      "example": "For n>=1, 3n <= 3n+2 <= 5n. The same function is both O(n) and Omega(n)."
    }
  },
  {
    "id": 70,
    "lecture": 23,
    "title": "Read an eventual lower bound",
    "concept": "For nonnegative functions, Big O is an eventual upper bound and Big Omega is an eventual lower bound, allowing a fixed positive constant factor. A bound need not be tight.",
    "teachingSteps": [
      "Choose positive constants independent of n.",
      "Find a threshold n0 after which the inequality always holds.",
      "Keep upper and lower bounds separate from best and worst input cases."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which growth class is tight for 3n^2+2n?",
        "options": [
          "Theta(n^2)",
          "Theta(n)",
          "Theta(1)"
        ],
        "answer": 0,
        "explanation": "The quadratic term dominates, and positive upper and lower witnesses exist."
      },
      {
        "type": "number",
        "prompt": "At n=8, what is the lower witness 3n?",
        "answer": 24,
        "explanation": "The additional 2 is nonnegative.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      },
      {
        "type": "number",
        "prompt": "What is T(2n) when n=8?",
        "answer": 50,
        "explanation": "Use 3(2n)+2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "State the functions and their positive domain",
          "Simplify a ratio or dominant term",
          "Choose valid constants and a threshold",
          "State the resulting growth relation"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "bounds",
    "start": 95.14,
    "sourceReferences": [
      {
        "lecture": 23,
        "file": "023_DS_Videos_5b_Big_oh_and_Big_omega_Asymptotic_Notations.mp4",
        "start": 95.14,
        "end": 123.78,
        "text": "So overall the input size is actually n, like these are the constants so you can ignore it. So you can say your time complexity which is generally represented by t is a function of t is a function of n. Why? Because n is an input size. Now if I ask you another question, suppose you need to multiply two numbers. Multiply two numbers. In this case, what is the input size? Input will be how big your numbers are, right?"
      },
      {
        "lecture": 23,
        "file": "023_DS_Videos_5b_Big_oh_and_Big_omega_Asymptotic_Notations.mp4",
        "start": 260.23,
        "end": 287.73,
        "text": "If there exist a constant c greater than 0 or n0 greater than equal to 0 such that for all n greater than equal to n0 Tn is less than equal to c into gn. Now I know that you haven't got it anything so let me explain it clearly. So Tn I say is order of some function may be n square. If and only if I am 100% sure that Tn like whenever I am writing like this then I will say that Tn which is my time complexity"
      },
      {
        "lecture": 23,
        "file": "023_DS_Videos_5b_Big_oh_and_Big_omega_Asymptotic_Notations.mp4",
        "start": 379.96,
        "end": 409.13,
        "text": "because you need to iterate till 13 because you will you will run a while loop till this point and then you will be inserting suppose you want to insert before 2 before 2 then you will just go go here and you will just insert before 2 right so it will just take a constant time maybe or maybe just one time right so depending on the input if input is insert before 13 then you will be taking n time if input is insert before 2 then you will be taking one time"
      }
    ],
    "foundation": {
      "title": "Big O and big Omega bounds",
      "idea": "For nonnegative functions, Big O is an eventual upper bound and Big Omega is an eventual lower bound, allowing a fixed positive constant factor. A bound need not be tight.",
      "terms": [
        "O(g): f(n)<=c g(n) eventually.",
        "Omega(g): f(n)>=c g(n) eventually.",
        "Threshold: where the stated eventual guarantee starts."
      ],
      "example": "For n>=1, 3n <= 3n+2 <= 5n. The same function is both O(n) and Omega(n)."
    }
  },
  {
    "id": 71,
    "lecture": 23,
    "title": "Choose constants and a threshold",
    "concept": "For nonnegative functions, Big O is an eventual upper bound and Big Omega is an eventual lower bound, allowing a fixed positive constant factor. A bound need not be tight.",
    "teachingSteps": [
      "Choose positive constants independent of n.",
      "Find a threshold n0 after which the inequality always holds.",
      "Keep upper and lower bounds separate from best and worst input cases."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which strict comparison is valid as n grows?",
        "options": [
          "2n is little-o of n",
          "n^2 is Theta(n)",
          "n is little-o of n^2"
        ],
        "answer": 2,
        "explanation": "The first ratio is 1/n, which tends to zero."
      },
      {
        "type": "number",
        "prompt": "For 3n+2<=5n, what is the smallest positive integer threshold n0?",
        "answer": 1,
        "explanation": "The inequality is 2<=2n.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      },
      {
        "type": "choice",
        "prompt": "Does n belonging to O(n^2) imply n is Theta(n^2)?",
        "options": [
          "No; the upper bound can be loose",
          "Yes; every upper bound is tight",
          "Only if n is even"
        ],
        "answer": 0,
        "explanation": "Theta also needs a matching lower bound."
      },
      {
        "type": "number",
        "prompt": "At n=8, compute T(n)-3n.",
        "answer": 2,
        "explanation": "The fixed overhead is two.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "bounds",
    "start": 95.14,
    "sourceReferences": [
      {
        "lecture": 23,
        "file": "023_DS_Videos_5b_Big_oh_and_Big_omega_Asymptotic_Notations.mp4",
        "start": 95.14,
        "end": 123.78,
        "text": "So overall the input size is actually n, like these are the constants so you can ignore it. So you can say your time complexity which is generally represented by t is a function of t is a function of n. Why? Because n is an input size. Now if I ask you another question, suppose you need to multiply two numbers. Multiply two numbers. In this case, what is the input size? Input will be how big your numbers are, right?"
      },
      {
        "lecture": 23,
        "file": "023_DS_Videos_5b_Big_oh_and_Big_omega_Asymptotic_Notations.mp4",
        "start": 260.23,
        "end": 287.73,
        "text": "If there exist a constant c greater than 0 or n0 greater than equal to 0 such that for all n greater than equal to n0 Tn is less than equal to c into gn. Now I know that you haven't got it anything so let me explain it clearly. So Tn I say is order of some function may be n square. If and only if I am 100% sure that Tn like whenever I am writing like this then I will say that Tn which is my time complexity"
      },
      {
        "lecture": 23,
        "file": "023_DS_Videos_5b_Big_oh_and_Big_omega_Asymptotic_Notations.mp4",
        "start": 379.96,
        "end": 409.13,
        "text": "because you need to iterate till 13 because you will you will run a while loop till this point and then you will be inserting suppose you want to insert before 2 before 2 then you will just go go here and you will just insert before 2 right so it will just take a constant time maybe or maybe just one time right so depending on the input if input is insert before 13 then you will be taking n time if input is insert before 2 then you will be taking one time"
      }
    ],
    "foundation": {
      "title": "Big O and big Omega bounds",
      "idea": "For nonnegative functions, Big O is an eventual upper bound and Big Omega is an eventual lower bound, allowing a fixed positive constant factor. A bound need not be tight.",
      "terms": [
        "O(g): f(n)<=c g(n) eventually.",
        "Omega(g): f(n)>=c g(n) eventually.",
        "Threshold: where the stated eventual guarantee starts."
      ],
      "example": "For n>=1, 3n <= 3n+2 <= 5n. The same function is both O(n) and Omega(n)."
    }
  },
  {
    "id": 72,
    "lecture": 24,
    "title": "Bound from both sides",
    "concept": "Theta is a tight growth class: a function has both an eventual positive lower bound and an eventual positive upper bound using the same comparison function. Constants and lower-order terms do not change this class.",
    "teachingSteps": [
      "Identify a candidate dominant growth term.",
      "Bound the function from below by c1 times that term.",
      "Bound it from above by c2 times that term beyond a common threshold."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "For nonnegative functions, which statement describes Big O?",
        "options": [
          "An eventual constant-factor upper bound",
          "Only a worst-input selection",
          "Exact equality at every n"
        ],
        "answer": 0,
        "explanation": "The inequality holds after a fixed threshold."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Big O",
            "Eventual upper bound"
          ],
          [
            "Big Omega",
            "Eventual lower bound"
          ],
          [
            "Theta",
            "Both bounds using the same growth function"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "At n=3, evaluate 3n^2+2n.",
        "answer": 33,
        "explanation": "Sum the quadratic and linear terms.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 4
        }
      },
      {
        "type": "number",
        "prompt": "At n=3, evaluate the lower bound 3n^2.",
        "answer": 27,
        "explanation": "Use the fixed lower multiplier 3.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 4
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "theta",
    "start": 0.02,
    "sourceReferences": [
      {
        "lecture": 24,
        "file": "024. DS Videos_ 5c. Theta Asymptotic notation.mp4",
        "start": 0.02,
        "end": 29.86,
        "text": "Now let's look at one more notation which is theta notation. This notation is also very useful in case of asymptotic annotations, in case of asymptotic analysis. So let's see what does this notation mean? Suppose you are able to write Tn equal to big omega of gn and also you are able to write Tn equal to big omega of gn. Then you can say Tn is actually equal to theta of gn which means if you can say that Tn is greater than equal to some c into gn"
      },
      {
        "lecture": 24,
        "file": "024. DS Videos_ 5c. Theta Asymptotic notation.mp4",
        "start": 30.03,
        "end": 59.38,
        "text": "and you can say tn is less than equal to some c into gn then you can say that tn is actually theta of gn so if tn is bounded between gn only like with respect to some different different constants then you can say tn is theta of gn which means that for example tn let's suppose is basically can i say let's suppose let me take a function which is let's suppose n square 3n square okay can i say that it is theta of gn"
      },
      {
        "lecture": 24,
        "file": "024. DS Videos_ 5c. Theta Asymptotic notation.mp4",
        "start": 59.69,
        "end": 86.88,
        "text": "theta of n square yes why because for different different constants you can actually bound it so which means you can say 3n square is less than equal to some 4n square and also greater than equal to some 2n square right so which means this is n square n square so you can say that it is c1 into n square and less than equal to c2 into n square so you can put this n square into the theta now if you recall from earlier discussion"
      }
    ],
    "foundation": {
      "title": "Tight Theta bounds",
      "idea": "Theta is a tight growth class: a function has both an eventual positive lower bound and an eventual positive upper bound using the same comparison function. Constants and lower-order terms do not change this class.",
      "terms": [
        "Theta(g): the intersection of O(g) and Omega(g).",
        "Dominant term: the fastest-growing significant term.",
        "Witness constants: fixed multipliers establishing bounds."
      ],
      "example": "For n>=1, 3n^2 <= 3n^2+2n <= 5n^2, proving Theta(n^2)."
    }
  },
  {
    "id": 73,
    "lecture": 24,
    "title": "Identify the dominant term",
    "concept": "Theta is a tight growth class: a function has both an eventual positive lower bound and an eventual positive upper bound using the same comparison function. Constants and lower-order terms do not change this class.",
    "teachingSteps": [
      "Identify a candidate dominant growth term.",
      "Bound the function from below by c1 times that term.",
      "Bound it from above by c2 times that term beyond a common threshold."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which growth class is tight for 3n^2+2n?",
        "options": [
          "Theta(n)",
          "Theta(1)",
          "Theta(n^2)"
        ],
        "answer": 2,
        "explanation": "The quadratic term dominates, and positive upper and lower witnesses exist."
      },
      {
        "type": "number",
        "prompt": "At n=3, evaluate the upper bound 5n^2.",
        "answer": 45,
        "explanation": "For n>=1, 2n<=2n^2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 4
        }
      },
      {
        "type": "number",
        "prompt": "The witnesses are 3n^2 and 5n^2. What is the lower multiplier c1?",
        "answer": 3,
        "explanation": "c1 is 3, independent of n.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 4
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "State the functions and their positive domain",
          "Simplify a ratio or dominant term",
          "Choose valid constants and a threshold",
          "State the resulting growth relation"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "theta",
    "start": 0.02,
    "sourceReferences": [
      {
        "lecture": 24,
        "file": "024. DS Videos_ 5c. Theta Asymptotic notation.mp4",
        "start": 0.02,
        "end": 29.86,
        "text": "Now let's look at one more notation which is theta notation. This notation is also very useful in case of asymptotic annotations, in case of asymptotic analysis. So let's see what does this notation mean? Suppose you are able to write Tn equal to big omega of gn and also you are able to write Tn equal to big omega of gn. Then you can say Tn is actually equal to theta of gn which means if you can say that Tn is greater than equal to some c into gn"
      },
      {
        "lecture": 24,
        "file": "024. DS Videos_ 5c. Theta Asymptotic notation.mp4",
        "start": 30.03,
        "end": 59.38,
        "text": "and you can say tn is less than equal to some c into gn then you can say that tn is actually theta of gn so if tn is bounded between gn only like with respect to some different different constants then you can say tn is theta of gn which means that for example tn let's suppose is basically can i say let's suppose let me take a function which is let's suppose n square 3n square okay can i say that it is theta of gn"
      },
      {
        "lecture": 24,
        "file": "024. DS Videos_ 5c. Theta Asymptotic notation.mp4",
        "start": 59.69,
        "end": 86.88,
        "text": "theta of n square yes why because for different different constants you can actually bound it so which means you can say 3n square is less than equal to some 4n square and also greater than equal to some 2n square right so which means this is n square n square so you can say that it is c1 into n square and less than equal to c2 into n square so you can put this n square into the theta now if you recall from earlier discussion"
      }
    ],
    "foundation": {
      "title": "Tight Theta bounds",
      "idea": "Theta is a tight growth class: a function has both an eventual positive lower bound and an eventual positive upper bound using the same comparison function. Constants and lower-order terms do not change this class.",
      "terms": [
        "Theta(g): the intersection of O(g) and Omega(g).",
        "Dominant term: the fastest-growing significant term.",
        "Witness constants: fixed multipliers establishing bounds."
      ],
      "example": "For n>=1, 3n^2 <= 3n^2+2n <= 5n^2, proving Theta(n^2)."
    }
  },
  {
    "id": 74,
    "lecture": 24,
    "title": "Verify a pair of witnesses",
    "concept": "Theta is a tight growth class: a function has both an eventual positive lower bound and an eventual positive upper bound using the same comparison function. Constants and lower-order terms do not change this class.",
    "teachingSteps": [
      "Identify a candidate dominant growth term.",
      "Bound the function from below by c1 times that term.",
      "Bound it from above by c2 times that term beyond a common threshold."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which strict comparison is valid as n grows?",
        "options": [
          "n^2 is Theta(n)",
          "n is little-o of n^2",
          "2n is little-o of n"
        ],
        "answer": 1,
        "explanation": "The first ratio is 1/n, which tends to zero."
      },
      {
        "type": "number",
        "prompt": "What is the upper multiplier c2?",
        "answer": 5,
        "explanation": "c2 is 5, independent of n.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 4
        }
      },
      {
        "type": "choice",
        "prompt": "Does n belonging to O(n^2) imply n is Theta(n^2)?",
        "options": [
          "Yes; every upper bound is tight",
          "Only if n is even",
          "No; the upper bound can be loose"
        ],
        "answer": 2,
        "explanation": "Theta also needs a matching lower bound."
      },
      {
        "type": "number",
        "prompt": "At n=3, calculate upper witness minus lower witness.",
        "answer": 18,
        "explanation": "5n^2-3n^2=2n^2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 4
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "theta",
    "start": 0.02,
    "sourceReferences": [
      {
        "lecture": 24,
        "file": "024. DS Videos_ 5c. Theta Asymptotic notation.mp4",
        "start": 0.02,
        "end": 29.86,
        "text": "Now let's look at one more notation which is theta notation. This notation is also very useful in case of asymptotic annotations, in case of asymptotic analysis. So let's see what does this notation mean? Suppose you are able to write Tn equal to big omega of gn and also you are able to write Tn equal to big omega of gn. Then you can say Tn is actually equal to theta of gn which means if you can say that Tn is greater than equal to some c into gn"
      },
      {
        "lecture": 24,
        "file": "024. DS Videos_ 5c. Theta Asymptotic notation.mp4",
        "start": 30.03,
        "end": 59.38,
        "text": "and you can say tn is less than equal to some c into gn then you can say that tn is actually theta of gn so if tn is bounded between gn only like with respect to some different different constants then you can say tn is theta of gn which means that for example tn let's suppose is basically can i say let's suppose let me take a function which is let's suppose n square 3n square okay can i say that it is theta of gn"
      },
      {
        "lecture": 24,
        "file": "024. DS Videos_ 5c. Theta Asymptotic notation.mp4",
        "start": 59.69,
        "end": 86.88,
        "text": "theta of n square yes why because for different different constants you can actually bound it so which means you can say 3n square is less than equal to some 4n square and also greater than equal to some 2n square right so which means this is n square n square so you can say that it is c1 into n square and less than equal to c2 into n square so you can put this n square into the theta now if you recall from earlier discussion"
      }
    ],
    "foundation": {
      "title": "Tight Theta bounds",
      "idea": "Theta is a tight growth class: a function has both an eventual positive lower bound and an eventual positive upper bound using the same comparison function. Constants and lower-order terms do not change this class.",
      "terms": [
        "Theta(g): the intersection of O(g) and Omega(g).",
        "Dominant term: the fastest-growing significant term.",
        "Witness constants: fixed multipliers establishing bounds."
      ],
      "example": "For n>=1, 3n^2 <= 3n^2+2n <= 5n^2, proving Theta(n^2)."
    }
  },
  {
    "id": 75,
    "lecture": 25,
    "title": "Distinguish values from growth",
    "concept": "An eventual growth comparison is about increasing input size, not one numerical sample. Logarithmic, linear, polynomial and exponential functions can separate sharply as n grows.",
    "teachingSteps": [
      "Evaluate small samples to build intuition.",
      "Compare growth families using ratios or justified inequalities.",
      "Use a mathematical argument for an eventual claim; a finite graph is an illustration."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "For nonnegative functions, which statement describes Big O?",
        "options": [
          "Only a worst-input selection",
          "Exact equality at every n",
          "An eventual constant-factor upper bound"
        ],
        "answer": 2,
        "explanation": "The inequality holds after a fixed threshold."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Big O",
            "Eventual upper bound"
          ],
          [
            "Big Omega",
            "Eventual lower bound"
          ],
          [
            "Theta",
            "Both bounds using the same growth function"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "For n=8, calculate log_2(n).",
        "answer": 3,
        "explanation": "The input is a power of two.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      },
      {
        "type": "number",
        "prompt": "For n=8, calculate n*log_2(n).",
        "answer": 24,
        "explanation": "Multiply the stated input by its base-two log.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "growth",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 25,
        "file": "025_DS_Videos_5d_What_is_Asymptotic_comparison_how_LOG_works_rice.mp4",
        "start": 0,
        "end": 34.53,
        "text": "Hi everyone, let's continue our discussion on asymptotic analysis. So, we know that what is a big O, right? This symbol is for big O, this is for big omega and this is for theta. So, suppose that I am saying fn is less than equal to gn and what does this mean? So, whenever I am saying less than equal to greater than equal to equal to these are all asymptotic comparisons which means"
      },
      {
        "lecture": 25,
        "file": "025_DS_Videos_5d_What_is_Asymptotic_comparison_how_LOG_works_rice.mp4",
        "start": 34.81,
        "end": 63.43,
        "text": "I am not saying in the absolute terms, okay? I am saying asymptotically. So what does this mean? It means that I may say that n is less than equal to 2n because constant does not matter in asymptotic sense, right? So don't treat them these less than equal to and these things are in the absolute sense. These are asymptotic comparisons, right? Okay. So whenever I am saying fn is less than equal to gn, it means like vice versa, that it means that fn is order of fn equal to order of gn, right?"
      },
      {
        "lecture": 25,
        "file": "025_DS_Videos_5d_What_is_Asymptotic_comparison_how_LOG_works_rice.mp4",
        "start": 155.43,
        "end": 184.57,
        "text": "in asymptotic sense f n is equal to g n then can't you say can't you say that f n is equal to order of g n see o of g n means what o of g n means like f n is less than equal to g n right if it is equal then also can't you say it is it is order of g n see suppose five is lesser than equal to seven then then it is then what does this mean it is either lesser seven five is less than seven"
      }
    ],
    "foundation": {
      "title": "Growth and the power of doubling",
      "idea": "An eventual growth comparison is about increasing input size, not one numerical sample. Logarithmic, linear, polynomial and exponential functions can separate sharply as n grows.",
      "terms": [
        "log_2(n): work that rises once per doubling.",
        "Polynomial: a fixed power such as n^2.",
        "Exponential: a fixed base greater than one raised to n."
      ],
      "example": "At n=8, log_2(n)=3, n=8, n log_2(n)=24, n^2=64 and 2^n=256."
    }
  },
  {
    "id": 76,
    "lecture": 25,
    "title": "Compare linear and logarithmic work",
    "concept": "An eventual growth comparison is about increasing input size, not one numerical sample. Logarithmic, linear, polynomial and exponential functions can separate sharply as n grows.",
    "teachingSteps": [
      "Evaluate small samples to build intuition.",
      "Compare growth families using ratios or justified inequalities.",
      "Use a mathematical argument for an eventual claim; a finite graph is an illustration."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which growth class is tight for 3n^2+2n?",
        "options": [
          "Theta(1)",
          "Theta(n^2)",
          "Theta(n)"
        ],
        "answer": 1,
        "explanation": "The quadratic term dominates, and positive upper and lower witnesses exist."
      },
      {
        "type": "number",
        "prompt": "For n=8, calculate n^2.",
        "answer": 64,
        "explanation": "This is a quadratic sample value.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      },
      {
        "type": "number",
        "prompt": "For n=4, calculate 2^n.",
        "answer": 16,
        "explanation": "Double once per exponent increment.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 4
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "State the functions and their positive domain",
          "Simplify a ratio or dominant term",
          "Choose valid constants and a threshold",
          "State the resulting growth relation"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "growth",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 25,
        "file": "025_DS_Videos_5d_What_is_Asymptotic_comparison_how_LOG_works_rice.mp4",
        "start": 0,
        "end": 34.53,
        "text": "Hi everyone, let's continue our discussion on asymptotic analysis. So, we know that what is a big O, right? This symbol is for big O, this is for big omega and this is for theta. So, suppose that I am saying fn is less than equal to gn and what does this mean? So, whenever I am saying less than equal to greater than equal to equal to these are all asymptotic comparisons which means"
      },
      {
        "lecture": 25,
        "file": "025_DS_Videos_5d_What_is_Asymptotic_comparison_how_LOG_works_rice.mp4",
        "start": 34.81,
        "end": 63.43,
        "text": "I am not saying in the absolute terms, okay? I am saying asymptotically. So what does this mean? It means that I may say that n is less than equal to 2n because constant does not matter in asymptotic sense, right? So don't treat them these less than equal to and these things are in the absolute sense. These are asymptotic comparisons, right? Okay. So whenever I am saying fn is less than equal to gn, it means like vice versa, that it means that fn is order of fn equal to order of gn, right?"
      },
      {
        "lecture": 25,
        "file": "025_DS_Videos_5d_What_is_Asymptotic_comparison_how_LOG_works_rice.mp4",
        "start": 155.43,
        "end": 184.57,
        "text": "in asymptotic sense f n is equal to g n then can't you say can't you say that f n is equal to order of g n see o of g n means what o of g n means like f n is less than equal to g n right if it is equal then also can't you say it is it is order of g n see suppose five is lesser than equal to seven then then it is then what does this mean it is either lesser seven five is less than seven"
      }
    ],
    "foundation": {
      "title": "Growth and the power of doubling",
      "idea": "An eventual growth comparison is about increasing input size, not one numerical sample. Logarithmic, linear, polynomial and exponential functions can separate sharply as n grows.",
      "terms": [
        "log_2(n): work that rises once per doubling.",
        "Polynomial: a fixed power such as n^2.",
        "Exponential: a fixed base greater than one raised to n."
      ],
      "example": "At n=8, log_2(n)=3, n=8, n log_2(n)=24, n^2=64 and 2^n=256."
    }
  },
  {
    "id": 77,
    "lecture": 25,
    "title": "See exponential doubling",
    "concept": "An eventual growth comparison is about increasing input size, not one numerical sample. Logarithmic, linear, polynomial and exponential functions can separate sharply as n grows.",
    "teachingSteps": [
      "Evaluate small samples to build intuition.",
      "Compare growth families using ratios or justified inequalities.",
      "Use a mathematical argument for an eventual claim; a finite graph is an illustration."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which strict comparison is valid as n grows?",
        "options": [
          "n is little-o of n^2",
          "2n is little-o of n",
          "n^2 is Theta(n)"
        ],
        "answer": 0,
        "explanation": "The first ratio is 1/n, which tends to zero."
      },
      {
        "type": "number",
        "prompt": "For n=8, evaluate 2^(log_2(n)).",
        "answer": 8,
        "explanation": "The matching inverse operations cancel.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      },
      {
        "type": "choice",
        "prompt": "Does n belonging to O(n^2) imply n is Theta(n^2)?",
        "options": [
          "Only if n is even",
          "No; the upper bound can be loose",
          "Yes; every upper bound is tight"
        ],
        "answer": 1,
        "explanation": "Theta also needs a matching lower bound."
      },
      {
        "type": "number",
        "prompt": "For n=8, calculate n^2/(n*log_2(n)). Round to 2 decimal places.",
        "answer": 2.67,
        "explanation": "Cancel n to obtain n/log_2(n). To two decimal places, the result is 2.67.",
        "tolerance": 0.005,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "growth",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 25,
        "file": "025_DS_Videos_5d_What_is_Asymptotic_comparison_how_LOG_works_rice.mp4",
        "start": 0,
        "end": 34.53,
        "text": "Hi everyone, let's continue our discussion on asymptotic analysis. So, we know that what is a big O, right? This symbol is for big O, this is for big omega and this is for theta. So, suppose that I am saying fn is less than equal to gn and what does this mean? So, whenever I am saying less than equal to greater than equal to equal to these are all asymptotic comparisons which means"
      },
      {
        "lecture": 25,
        "file": "025_DS_Videos_5d_What_is_Asymptotic_comparison_how_LOG_works_rice.mp4",
        "start": 34.81,
        "end": 63.43,
        "text": "I am not saying in the absolute terms, okay? I am saying asymptotically. So what does this mean? It means that I may say that n is less than equal to 2n because constant does not matter in asymptotic sense, right? So don't treat them these less than equal to and these things are in the absolute sense. These are asymptotic comparisons, right? Okay. So whenever I am saying fn is less than equal to gn, it means like vice versa, that it means that fn is order of fn equal to order of gn, right?"
      },
      {
        "lecture": 25,
        "file": "025_DS_Videos_5d_What_is_Asymptotic_comparison_how_LOG_works_rice.mp4",
        "start": 155.43,
        "end": 184.57,
        "text": "in asymptotic sense f n is equal to g n then can't you say can't you say that f n is equal to order of g n see o of g n means what o of g n means like f n is less than equal to g n right if it is equal then also can't you say it is it is order of g n see suppose five is lesser than equal to seven then then it is then what does this mean it is either lesser seven five is less than seven"
      }
    ],
    "foundation": {
      "title": "Growth and the power of doubling",
      "idea": "An eventual growth comparison is about increasing input size, not one numerical sample. Logarithmic, linear, polynomial and exponential functions can separate sharply as n grows.",
      "terms": [
        "log_2(n): work that rises once per doubling.",
        "Polynomial: a fixed power such as n^2.",
        "Exponential: a fixed base greater than one raised to n."
      ],
      "example": "At n=8, log_2(n)=3, n=8, n log_2(n)=24, n^2=64 and 2^n=256."
    }
  },
  {
    "id": 78,
    "lecture": 26,
    "title": "Rank common growth families",
    "concept": "An eventual growth comparison is about increasing input size, not one numerical sample. Logarithmic, linear, polynomial and exponential functions can separate sharply as n grows.",
    "teachingSteps": [
      "Evaluate small samples to build intuition.",
      "Compare growth families using ratios or justified inequalities.",
      "Use a mathematical argument for an eventual claim; a finite graph is an illustration."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "For nonnegative functions, which statement describes Big O?",
        "options": [
          "Exact equality at every n",
          "An eventual constant-factor upper bound",
          "Only a worst-input selection"
        ],
        "answer": 1,
        "explanation": "The inequality holds after a fixed threshold."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Big O",
            "Eventual upper bound"
          ],
          [
            "Big Omega",
            "Eventual lower bound"
          ],
          [
            "Theta",
            "Both bounds using the same growth function"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "For n=16, calculate log_2(n).",
        "answer": 4,
        "explanation": "The input is a power of two.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      },
      {
        "type": "number",
        "prompt": "For n=16, calculate n*log_2(n).",
        "answer": 64,
        "explanation": "Multiply the stated input by its base-two log.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "growth",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 26,
        "file": "026_DS_Videos_5e_Comparing_Different_Functions_Asymptotically.mp4",
        "start": 0,
        "end": 21.3,
        "text": "now let's solve some questions where i will be arranging the functions in the increasing or decreasing order and whenever i compare the functions it will be in the asymptotic fashion only okay so let's just compare these two functions i want to compare 2 power n and n power n like i know like it seems like n power n is greater but how i'm going to do it mathematically so"
      },
      {
        "lecture": 26,
        "file": "026_DS_Videos_5e_Comparing_Different_Functions_Asymptotically.mp4",
        "start": 21.6,
        "end": 41.22,
        "text": "nothing is that we are going to you know compare some functions and that to asymptotically and nothing is that like this topic is like we are studying in algorithms or data structures but this is actually a mathematical topic okay so you need to bring your mathematic intuition here this is nowhere related to data structures algorithm"
      },
      {
        "lecture": 26,
        "file": "026_DS_Videos_5e_Comparing_Different_Functions_Asymptotically.mp4",
        "start": 41.53,
        "end": 70.17,
        "text": "It's just that we use these notations in these subjects because our time complexity and space complexity are the functions of input size, which is n. So anyway, let's just compare these two functions. Now to compare these two functions, one thing you can do, you can take log both side. I will tell you in a while that why log will work, when log will not work, and all the cases about the log. So let's take log on both side. This is one of the method. What you can do, you can take log."
      }
    ],
    "foundation": {
      "title": "Comparing different functions",
      "idea": "An eventual growth comparison is about increasing input size, not one numerical sample. Logarithmic, linear, polynomial and exponential functions can separate sharply as n grows.",
      "terms": [
        "log_2(n): work that rises once per doubling.",
        "Polynomial: a fixed power such as n^2.",
        "Exponential: a fixed base greater than one raised to n."
      ],
      "example": "At n=8, log_2(n)=3, n=8, n log_2(n)=24, n^2=64 and 2^n=256."
    }
  },
  {
    "id": 79,
    "lecture": 26,
    "title": "Use ratios and positive logarithms",
    "concept": "An eventual growth comparison is about increasing input size, not one numerical sample. Logarithmic, linear, polynomial and exponential functions can separate sharply as n grows.",
    "teachingSteps": [
      "Evaluate small samples to build intuition.",
      "Compare growth families using ratios or justified inequalities.",
      "Use a mathematical argument for an eventual claim; a finite graph is an illustration."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which growth class is tight for 3n^2+2n?",
        "options": [
          "Theta(n^2)",
          "Theta(n)",
          "Theta(1)"
        ],
        "answer": 0,
        "explanation": "The quadratic term dominates, and positive upper and lower witnesses exist."
      },
      {
        "type": "number",
        "prompt": "For n=16, calculate n^2.",
        "answer": 256,
        "explanation": "This is a quadratic sample value.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      },
      {
        "type": "number",
        "prompt": "For n=5, calculate 2^n.",
        "answer": 32,
        "explanation": "Double once per exponent increment.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 5
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "State the functions and their positive domain",
          "Simplify a ratio or dominant term",
          "Choose valid constants and a threshold",
          "State the resulting growth relation"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "growth",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 26,
        "file": "026_DS_Videos_5e_Comparing_Different_Functions_Asymptotically.mp4",
        "start": 0,
        "end": 21.3,
        "text": "now let's solve some questions where i will be arranging the functions in the increasing or decreasing order and whenever i compare the functions it will be in the asymptotic fashion only okay so let's just compare these two functions i want to compare 2 power n and n power n like i know like it seems like n power n is greater but how i'm going to do it mathematically so"
      },
      {
        "lecture": 26,
        "file": "026_DS_Videos_5e_Comparing_Different_Functions_Asymptotically.mp4",
        "start": 21.6,
        "end": 41.22,
        "text": "nothing is that we are going to you know compare some functions and that to asymptotically and nothing is that like this topic is like we are studying in algorithms or data structures but this is actually a mathematical topic okay so you need to bring your mathematic intuition here this is nowhere related to data structures algorithm"
      },
      {
        "lecture": 26,
        "file": "026_DS_Videos_5e_Comparing_Different_Functions_Asymptotically.mp4",
        "start": 41.53,
        "end": 70.17,
        "text": "It's just that we use these notations in these subjects because our time complexity and space complexity are the functions of input size, which is n. So anyway, let's just compare these two functions. Now to compare these two functions, one thing you can do, you can take log both side. I will tell you in a while that why log will work, when log will not work, and all the cases about the log. So let's take log on both side. This is one of the method. What you can do, you can take log."
      }
    ],
    "foundation": {
      "title": "Comparing different functions",
      "idea": "An eventual growth comparison is about increasing input size, not one numerical sample. Logarithmic, linear, polynomial and exponential functions can separate sharply as n grows.",
      "terms": [
        "log_2(n): work that rises once per doubling.",
        "Polynomial: a fixed power such as n^2.",
        "Exponential: a fixed base greater than one raised to n."
      ],
      "example": "At n=8, log_2(n)=3, n=8, n log_2(n)=24, n^2=64 and 2^n=256."
    }
  },
  {
    "id": 80,
    "lecture": 26,
    "title": "Check an eventual comparison",
    "concept": "An eventual growth comparison is about increasing input size, not one numerical sample. Logarithmic, linear, polynomial and exponential functions can separate sharply as n grows.",
    "teachingSteps": [
      "Evaluate small samples to build intuition.",
      "Compare growth families using ratios or justified inequalities.",
      "Use a mathematical argument for an eventual claim; a finite graph is an illustration."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which strict comparison is valid as n grows?",
        "options": [
          "2n is little-o of n",
          "n^2 is Theta(n)",
          "n is little-o of n^2"
        ],
        "answer": 2,
        "explanation": "The first ratio is 1/n, which tends to zero."
      },
      {
        "type": "number",
        "prompt": "For n=16, evaluate 2^(log_2(n)).",
        "answer": 16,
        "explanation": "The matching inverse operations cancel.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      },
      {
        "type": "choice",
        "prompt": "Does n belonging to O(n^2) imply n is Theta(n^2)?",
        "options": [
          "No; the upper bound can be loose",
          "Yes; every upper bound is tight",
          "Only if n is even"
        ],
        "answer": 0,
        "explanation": "Theta also needs a matching lower bound."
      },
      {
        "type": "number",
        "prompt": "For n=16, calculate n^2/(n*log_2(n)).",
        "answer": 4,
        "explanation": "Cancel n to obtain n/log_2(n).",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "growth",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 26,
        "file": "026_DS_Videos_5e_Comparing_Different_Functions_Asymptotically.mp4",
        "start": 0,
        "end": 21.3,
        "text": "now let's solve some questions where i will be arranging the functions in the increasing or decreasing order and whenever i compare the functions it will be in the asymptotic fashion only okay so let's just compare these two functions i want to compare 2 power n and n power n like i know like it seems like n power n is greater but how i'm going to do it mathematically so"
      },
      {
        "lecture": 26,
        "file": "026_DS_Videos_5e_Comparing_Different_Functions_Asymptotically.mp4",
        "start": 21.6,
        "end": 41.22,
        "text": "nothing is that we are going to you know compare some functions and that to asymptotically and nothing is that like this topic is like we are studying in algorithms or data structures but this is actually a mathematical topic okay so you need to bring your mathematic intuition here this is nowhere related to data structures algorithm"
      },
      {
        "lecture": 26,
        "file": "026_DS_Videos_5e_Comparing_Different_Functions_Asymptotically.mp4",
        "start": 41.53,
        "end": 70.17,
        "text": "It's just that we use these notations in these subjects because our time complexity and space complexity are the functions of input size, which is n. So anyway, let's just compare these two functions. Now to compare these two functions, one thing you can do, you can take log both side. I will tell you in a while that why log will work, when log will not work, and all the cases about the log. So let's take log on both side. This is one of the method. What you can do, you can take log."
      }
    ],
    "foundation": {
      "title": "Comparing different functions",
      "idea": "An eventual growth comparison is about increasing input size, not one numerical sample. Logarithmic, linear, polynomial and exponential functions can separate sharply as n grows.",
      "terms": [
        "log_2(n): work that rises once per doubling.",
        "Polynomial: a fixed power such as n^2.",
        "Exponential: a fixed base greater than one raised to n."
      ],
      "example": "At n=8, log_2(n)=3, n=8, n log_2(n)=24, n^2=64 and 2^n=256."
    }
  },
  {
    "id": 81,
    "lecture": 27,
    "title": "Distinguish strict from tight growth",
    "concept": "Little-o is a strict slower-growth relation, and little-omega is a strict faster-growth relation. For eventually positive comparison functions, limiting ratios of zero or infinity give useful sufficient tests.",
    "teachingSteps": [
      "Form f(n)/g(n) where g is eventually positive.",
      "A ratio tending to zero establishes f=o(g).",
      "A ratio tending to infinity establishes f=omega(g); a positive finite ratio indicates tight growth instead."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "For nonnegative functions, which statement describes Big O?",
        "options": [
          "An eventual constant-factor upper bound",
          "Only a worst-input selection",
          "Exact equality at every n"
        ],
        "answer": 0,
        "explanation": "The inequality holds after a fixed threshold."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Big O",
            "Eventual upper bound"
          ],
          [
            "Big Omega",
            "Eventual lower bound"
          ],
          [
            "Theta",
            "Both bounds using the same growth function"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "For n=4, compute n/n^2. Round to 2 decimal places.",
        "answer": 0.25,
        "explanation": "The ratio simplifies to 1/n. To two decimal places, the result is 0.25.",
        "tolerance": 0.005,
        "dsVisual": {
          "kind": "growth",
          "n": 4
        }
      },
      {
        "type": "number",
        "prompt": "For n=4, compute n^2/n.",
        "answer": 4,
        "explanation": "The ratio simplifies to n.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 4
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "ratio",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 27,
        "file": "027_DS_Videos_5f_Little_Oh_Little_Omega_Properties_of_asymptotic.mp4",
        "start": 0,
        "end": 36.14,
        "text": "So in this lecture we are going to see few more things like we have already studied Big O, Big Omega and Theta, right? These things we have already studied. This is Big O, this is Big Omega and this is Theta. Now I am going to introduce you two more asymptotic notations which is little o, okay? This is called little o and there is called little omega, right?"
      },
      {
        "lecture": 27,
        "file": "027_DS_Videos_5f_Little_Oh_Little_Omega_Properties_of_asymptotic.mp4",
        "start": 142.72,
        "end": 167.18,
        "text": "so like if i'm saying that this is c or something so whenever like i'm involving the c then involving the constant which matters then these are not asymptotic comparisons so these are just normal comparisons right now i used to say something like this but for the little omega sorry for the little o we are going to say that if tn is little o of gn then instead of less than equal to i will say it is strictly less that's the first difference"
      },
      {
        "lecture": 27,
        "file": "027_DS_Videos_5f_Little_Oh_Little_Omega_Properties_of_asymptotic.mp4",
        "start": 447.64,
        "end": 476.88,
        "text": "you can say it is big o right if the difference is in the constant you can say this is big o you can say this is theta you can also say if theta is possible then you can also say it is it's more like big omega right but if the difference is in the function okay let's suppose it is n square it is n cube so different is here the difference is the function of n right i mean n is the difference here so you will say it is strictly lesser which means you will say it is either you can say big o here no problem you can say big o so here it is n square"
      }
    ],
    "foundation": {
      "title": "Strict little-o and little-omega",
      "idea": "Little-o is a strict slower-growth relation, and little-omega is a strict faster-growth relation. For eventually positive comparison functions, limiting ratios of zero or infinity give useful sufficient tests.",
      "terms": [
        "Strict slower: little-o.",
        "Strict faster: little-omega.",
        "Tight growth: Theta, not a strict comparison."
      ],
      "example": "n/n^2=1/n tends to zero, while 2n/n=2 does not. Thus n=o(n^2), but 2n is not o(n)."
    }
  },
  {
    "id": 82,
    "lecture": 27,
    "title": "Inspect a limiting ratio",
    "concept": "Little-o is a strict slower-growth relation, and little-omega is a strict faster-growth relation. For eventually positive comparison functions, limiting ratios of zero or infinity give useful sufficient tests.",
    "teachingSteps": [
      "Form f(n)/g(n) where g is eventually positive.",
      "A ratio tending to zero establishes f=o(g).",
      "A ratio tending to infinity establishes f=omega(g); a positive finite ratio indicates tight growth instead."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which growth class is tight for 3n^2+2n?",
        "options": [
          "Theta(n)",
          "Theta(1)",
          "Theta(n^2)"
        ],
        "answer": 2,
        "explanation": "The quadratic term dominates, and positive upper and lower witnesses exist."
      },
      {
        "type": "number",
        "prompt": "For n=4, compute 2n/n.",
        "answer": 2,
        "explanation": "A nonzero constant ratio does not tend to zero.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 4
        }
      },
      {
        "type": "number",
        "prompt": "For n=4, compute n/(4n). Round to 2 decimal places.",
        "answer": 0.25,
        "explanation": "The ratio is the positive constant 1/4. To two decimal places, the result is 0.25.",
        "tolerance": 0.005,
        "dsVisual": {
          "kind": "growth",
          "n": 4
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "State the functions and their positive domain",
          "Simplify a ratio or dominant term",
          "Choose valid constants and a threshold",
          "State the resulting growth relation"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "ratio",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 27,
        "file": "027_DS_Videos_5f_Little_Oh_Little_Omega_Properties_of_asymptotic.mp4",
        "start": 0,
        "end": 36.14,
        "text": "So in this lecture we are going to see few more things like we have already studied Big O, Big Omega and Theta, right? These things we have already studied. This is Big O, this is Big Omega and this is Theta. Now I am going to introduce you two more asymptotic notations which is little o, okay? This is called little o and there is called little omega, right?"
      },
      {
        "lecture": 27,
        "file": "027_DS_Videos_5f_Little_Oh_Little_Omega_Properties_of_asymptotic.mp4",
        "start": 142.72,
        "end": 167.18,
        "text": "so like if i'm saying that this is c or something so whenever like i'm involving the c then involving the constant which matters then these are not asymptotic comparisons so these are just normal comparisons right now i used to say something like this but for the little omega sorry for the little o we are going to say that if tn is little o of gn then instead of less than equal to i will say it is strictly less that's the first difference"
      },
      {
        "lecture": 27,
        "file": "027_DS_Videos_5f_Little_Oh_Little_Omega_Properties_of_asymptotic.mp4",
        "start": 447.64,
        "end": 476.88,
        "text": "you can say it is big o right if the difference is in the constant you can say this is big o you can say this is theta you can also say if theta is possible then you can also say it is it's more like big omega right but if the difference is in the function okay let's suppose it is n square it is n cube so different is here the difference is the function of n right i mean n is the difference here so you will say it is strictly lesser which means you will say it is either you can say big o here no problem you can say big o so here it is n square"
      }
    ],
    "foundation": {
      "title": "Strict little-o and little-omega",
      "idea": "Little-o is a strict slower-growth relation, and little-omega is a strict faster-growth relation. For eventually positive comparison functions, limiting ratios of zero or infinity give useful sufficient tests.",
      "terms": [
        "Strict slower: little-o.",
        "Strict faster: little-omega.",
        "Tight growth: Theta, not a strict comparison."
      ],
      "example": "n/n^2=1/n tends to zero, while 2n/n=2 does not. Thus n=o(n^2), but 2n is not o(n)."
    }
  },
  {
    "id": 83,
    "lecture": 27,
    "title": "Check valid notation properties",
    "concept": "Little-o is a strict slower-growth relation, and little-omega is a strict faster-growth relation. For eventually positive comparison functions, limiting ratios of zero or infinity give useful sufficient tests.",
    "teachingSteps": [
      "Form f(n)/g(n) where g is eventually positive.",
      "A ratio tending to zero establishes f=o(g).",
      "A ratio tending to infinity establishes f=omega(g); a positive finite ratio indicates tight growth instead."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which strict comparison is valid as n grows?",
        "options": [
          "n^2 is Theta(n)",
          "n is little-o of n^2",
          "2n is little-o of n"
        ],
        "answer": 1,
        "explanation": "The first ratio is 1/n, which tends to zero."
      },
      {
        "type": "number",
        "prompt": "For n=4, evaluate n^2.",
        "answer": 16,
        "explanation": "Multiply n by itself.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 4
        }
      },
      {
        "type": "choice",
        "prompt": "Does n belonging to O(n^2) imply n is Theta(n^2)?",
        "options": [
          "Yes; every upper bound is tight",
          "Only if n is even",
          "No; the upper bound can be loose"
        ],
        "answer": 2,
        "explanation": "Theta also needs a matching lower bound."
      },
      {
        "type": "number",
        "prompt": "If the comparison changes from n to 2n, by what factor does 1/n decrease?",
        "answer": 2,
        "explanation": "The new ratio is half the old ratio.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 4
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "ratio",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 27,
        "file": "027_DS_Videos_5f_Little_Oh_Little_Omega_Properties_of_asymptotic.mp4",
        "start": 0,
        "end": 36.14,
        "text": "So in this lecture we are going to see few more things like we have already studied Big O, Big Omega and Theta, right? These things we have already studied. This is Big O, this is Big Omega and this is Theta. Now I am going to introduce you two more asymptotic notations which is little o, okay? This is called little o and there is called little omega, right?"
      },
      {
        "lecture": 27,
        "file": "027_DS_Videos_5f_Little_Oh_Little_Omega_Properties_of_asymptotic.mp4",
        "start": 142.72,
        "end": 167.18,
        "text": "so like if i'm saying that this is c or something so whenever like i'm involving the c then involving the constant which matters then these are not asymptotic comparisons so these are just normal comparisons right now i used to say something like this but for the little omega sorry for the little o we are going to say that if tn is little o of gn then instead of less than equal to i will say it is strictly less that's the first difference"
      },
      {
        "lecture": 27,
        "file": "027_DS_Videos_5f_Little_Oh_Little_Omega_Properties_of_asymptotic.mp4",
        "start": 447.64,
        "end": 476.88,
        "text": "you can say it is big o right if the difference is in the constant you can say this is big o you can say this is theta you can also say if theta is possible then you can also say it is it's more like big omega right but if the difference is in the function okay let's suppose it is n square it is n cube so different is here the difference is the function of n right i mean n is the difference here so you will say it is strictly lesser which means you will say it is either you can say big o here no problem you can say big o so here it is n square"
      }
    ],
    "foundation": {
      "title": "Strict little-o and little-omega",
      "idea": "Little-o is a strict slower-growth relation, and little-omega is a strict faster-growth relation. For eventually positive comparison functions, limiting ratios of zero or infinity give useful sufficient tests.",
      "terms": [
        "Strict slower: little-o.",
        "Strict faster: little-omega.",
        "Tight growth: Theta, not a strict comparison."
      ],
      "example": "n/n^2=1/n tends to zero, while 2n/n=2 does not. Thus n=o(n^2), but 2n is not o(n)."
    }
  },
  {
    "id": 84,
    "lecture": 28,
    "title": "Read membership in a bound class",
    "concept": "O(g) and Omega(g) denote sets of functions satisfying a bound. Writing f in O(g) expresses membership; it does not say f and g are the same function or that every member has tight growth g.",
    "teachingSteps": [
      "Read each notation as a class of allowable functions.",
      "A slower function can still belong to an upper-bound class.",
      "Intersect upper and lower classes to obtain the tight class."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "For nonnegative functions, which statement describes Big O?",
        "options": [
          "Only a worst-input selection",
          "Exact equality at every n",
          "An eventual constant-factor upper bound"
        ],
        "answer": 2,
        "explanation": "The inequality holds after a fixed threshold."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Big O",
            "Eventual upper bound"
          ],
          [
            "Big Omega",
            "Eventual lower bound"
          ],
          [
            "Theta",
            "Both bounds using the same growth function"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "A scan takes T(n)=3n+2 operations. At n=7, how many operations occur?",
        "answer": 23,
        "explanation": "Substitute the stated input size.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      },
      {
        "type": "number",
        "prompt": "At n=7, what is the upper witness 5n?",
        "answer": 35,
        "explanation": "For n>=1, 3n+2<=5n.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "bounds",
    "start": 88.2,
    "sourceReferences": [
      {
        "lecture": 28,
        "file": "028. DS Videos_ 6a.Formal set notation of Asymptote symbols.mp4",
        "start": 88.2,
        "end": 118.95,
        "text": "See these are some terms which are equal to some terms. So if this is the same term on the RHS So I can say LHS must be sent What is wrong in this reasoning? That's what I'm asking. So basically Like this thing which is order of nq. This is not just one function Okay, the thing is that whenever I say that n square is equal to order of nq or something Then this is not just one function. This is always a set Okay"
      },
      {
        "lecture": 28,
        "file": "028. DS Videos_ 6a.Formal set notation of Asymptote symbols.mp4",
        "start": 119.32,
        "end": 151.85,
        "text": "and this has to be a belong symbol and this is one element of the set one element of set which means I should be writing writing ideally see ideally ideally I should be writing something like this n square belong to order of n cube okay this is the ideal situation ideally I should be writing something like this but we abuse notation so it is called abuse"
      },
      {
        "lecture": 28,
        "file": "028. DS Videos_ 6a.Formal set notation of Asymptote symbols.mp4",
        "start": 153.47,
        "end": 187.26,
        "text": "of notation okay so average of notation means that we are basically just for sake of our convenience or we also say mathematical convenience like whatever you want to say so this is mathematical convenience just for sake of mathematical convenience we instead of writing this belong symbol we write this equal symbol otherwise we have to say that this all is belong to belong to belong to actually this is actually belonging to only because this is a sad and this is a function right"
      }
    ],
    "foundation": {
      "title": "Asymptotic notation describes sets",
      "idea": "O(g) and Omega(g) denote sets of functions satisfying a bound. Writing f in O(g) expresses membership; it does not say f and g are the same function or that every member has tight growth g.",
      "terms": [
        "Membership: a function belongs to a bound class.",
        "Intersection: functions satisfying both conditions.",
        "Non-tight bound: a valid bound with avoidable slack."
      ],
      "example": "n belongs to O(n^2), but n is not Theta(n^2). Theta(n)=O(n) intersect Omega(n)."
    }
  },
  {
    "id": 85,
    "lecture": 28,
    "title": "Intersect upper and lower classes",
    "concept": "O(g) and Omega(g) denote sets of functions satisfying a bound. Writing f in O(g) expresses membership; it does not say f and g are the same function or that every member has tight growth g.",
    "teachingSteps": [
      "Read each notation as a class of allowable functions.",
      "A slower function can still belong to an upper-bound class.",
      "Intersect upper and lower classes to obtain the tight class."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which growth class is tight for 3n^2+2n?",
        "options": [
          "Theta(1)",
          "Theta(n^2)",
          "Theta(n)"
        ],
        "answer": 1,
        "explanation": "The quadratic term dominates, and positive upper and lower witnesses exist."
      },
      {
        "type": "number",
        "prompt": "At n=7, what is the lower witness 3n?",
        "answer": 21,
        "explanation": "The additional 2 is nonnegative.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      },
      {
        "type": "number",
        "prompt": "What is T(2n) when n=7?",
        "answer": 44,
        "explanation": "Use 3(2n)+2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "State the functions and their positive domain",
          "Simplify a ratio or dominant term",
          "Choose valid constants and a threshold",
          "State the resulting growth relation"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "bounds",
    "start": 88.2,
    "sourceReferences": [
      {
        "lecture": 28,
        "file": "028. DS Videos_ 6a.Formal set notation of Asymptote symbols.mp4",
        "start": 88.2,
        "end": 118.95,
        "text": "See these are some terms which are equal to some terms. So if this is the same term on the RHS So I can say LHS must be sent What is wrong in this reasoning? That's what I'm asking. So basically Like this thing which is order of nq. This is not just one function Okay, the thing is that whenever I say that n square is equal to order of nq or something Then this is not just one function. This is always a set Okay"
      },
      {
        "lecture": 28,
        "file": "028. DS Videos_ 6a.Formal set notation of Asymptote symbols.mp4",
        "start": 119.32,
        "end": 151.85,
        "text": "and this has to be a belong symbol and this is one element of the set one element of set which means I should be writing writing ideally see ideally ideally I should be writing something like this n square belong to order of n cube okay this is the ideal situation ideally I should be writing something like this but we abuse notation so it is called abuse"
      },
      {
        "lecture": 28,
        "file": "028. DS Videos_ 6a.Formal set notation of Asymptote symbols.mp4",
        "start": 153.47,
        "end": 187.26,
        "text": "of notation okay so average of notation means that we are basically just for sake of our convenience or we also say mathematical convenience like whatever you want to say so this is mathematical convenience just for sake of mathematical convenience we instead of writing this belong symbol we write this equal symbol otherwise we have to say that this all is belong to belong to belong to actually this is actually belonging to only because this is a sad and this is a function right"
      }
    ],
    "foundation": {
      "title": "Asymptotic notation describes sets",
      "idea": "O(g) and Omega(g) denote sets of functions satisfying a bound. Writing f in O(g) expresses membership; it does not say f and g are the same function or that every member has tight growth g.",
      "terms": [
        "Membership: a function belongs to a bound class.",
        "Intersection: functions satisfying both conditions.",
        "Non-tight bound: a valid bound with avoidable slack."
      ],
      "example": "n belongs to O(n^2), but n is not Theta(n^2). Theta(n)=O(n) intersect Omega(n)."
    }
  },
  {
    "id": 86,
    "lecture": 28,
    "title": "Avoid treating Big O as a number",
    "concept": "O(g) and Omega(g) denote sets of functions satisfying a bound. Writing f in O(g) expresses membership; it does not say f and g are the same function or that every member has tight growth g.",
    "teachingSteps": [
      "Read each notation as a class of allowable functions.",
      "A slower function can still belong to an upper-bound class.",
      "Intersect upper and lower classes to obtain the tight class."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which strict comparison is valid as n grows?",
        "options": [
          "n is little-o of n^2",
          "2n is little-o of n",
          "n^2 is Theta(n)"
        ],
        "answer": 0,
        "explanation": "The first ratio is 1/n, which tends to zero."
      },
      {
        "type": "number",
        "prompt": "For 3n+2<=5n, what is the smallest positive integer threshold n0?",
        "answer": 1,
        "explanation": "The inequality is 2<=2n.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      },
      {
        "type": "choice",
        "prompt": "Does n belonging to O(n^2) imply n is Theta(n^2)?",
        "options": [
          "Only if n is even",
          "No; the upper bound can be loose",
          "Yes; every upper bound is tight"
        ],
        "answer": 1,
        "explanation": "Theta also needs a matching lower bound."
      },
      {
        "type": "number",
        "prompt": "At n=7, compute T(n)-3n.",
        "answer": 2,
        "explanation": "The fixed overhead is two.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 8
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "bounds",
    "start": 88.2,
    "sourceReferences": [
      {
        "lecture": 28,
        "file": "028. DS Videos_ 6a.Formal set notation of Asymptote symbols.mp4",
        "start": 88.2,
        "end": 118.95,
        "text": "See these are some terms which are equal to some terms. So if this is the same term on the RHS So I can say LHS must be sent What is wrong in this reasoning? That's what I'm asking. So basically Like this thing which is order of nq. This is not just one function Okay, the thing is that whenever I say that n square is equal to order of nq or something Then this is not just one function. This is always a set Okay"
      },
      {
        "lecture": 28,
        "file": "028. DS Videos_ 6a.Formal set notation of Asymptote symbols.mp4",
        "start": 119.32,
        "end": 151.85,
        "text": "and this has to be a belong symbol and this is one element of the set one element of set which means I should be writing writing ideally see ideally ideally I should be writing something like this n square belong to order of n cube okay this is the ideal situation ideally I should be writing something like this but we abuse notation so it is called abuse"
      },
      {
        "lecture": 28,
        "file": "028. DS Videos_ 6a.Formal set notation of Asymptote symbols.mp4",
        "start": 153.47,
        "end": 187.26,
        "text": "of notation okay so average of notation means that we are basically just for sake of our convenience or we also say mathematical convenience like whatever you want to say so this is mathematical convenience just for sake of mathematical convenience we instead of writing this belong symbol we write this equal symbol otherwise we have to say that this all is belong to belong to belong to actually this is actually belonging to only because this is a sad and this is a function right"
      }
    ],
    "foundation": {
      "title": "Asymptotic notation describes sets",
      "idea": "O(g) and Omega(g) denote sets of functions satisfying a bound. Writing f in O(g) expresses membership; it does not say f and g are the same function or that every member has tight growth g.",
      "terms": [
        "Membership: a function belongs to a bound class.",
        "Intersection: functions satisfying both conditions.",
        "Non-tight bound: a valid bound with avoidable slack."
      ],
      "example": "n belongs to O(n^2), but n is not Theta(n^2). Theta(n)=O(n) intersect Omega(n)."
    }
  },
  {
    "id": 87,
    "lecture": 29,
    "title": "Simplify exponent-log pairs",
    "concept": "Inverse powers and logarithms can simplify a growth expression. Use the same stated base, keep arguments positive, and compare the resulting functions rather than their visual complexity.",
    "teachingSteps": [
      "Rewrite the expression with a consistent base.",
      "Cancel only matching inverse power-log pairs.",
      "Compare the simplified growth functions for large n."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which is the correct logarithm domain for real logs?",
        "options": [
          "Base must always be exactly 10",
          "Argument positive; base positive and not 1",
          "Argument may be any negative value"
        ],
        "answer": 1,
        "explanation": "These are the real-domain conditions."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "log_b(x)",
            "Exponent that makes b^y=x"
          ],
          [
            "Product of arguments",
            "Sum of logarithms"
          ],
          [
            "Quotient of arguments",
            "Difference of logarithms"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "What is log_2(16)?",
        "answer": 4,
        "explanation": "16=2^4.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 16
        }
      },
      {
        "type": "number",
        "prompt": "What is log_2(16 * 8)?",
        "answer": 7,
        "explanation": "Use the product rule: log_2(x)+3.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 16
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "growth",
    "start": 20.96,
    "sourceReferences": [
      {
        "lecture": 29,
        "file": "029_DS_Videos_6b_Asymptotic_Notations_GATE_PYQs_1994,_96,_2000,1.mp4",
        "start": 20.96,
        "end": 49.88,
        "text": "I mean there is no point in you know having a function behavior for the smaller values. So smaller like smaller and bigger values are not not defined by some number. It is basically it could be any constant like based on some constant you can you can say okay these are the small values. See after a certain point function is just n square. So you can say that for the asymptotic analysis you can say that g1 and it's just n square. Just forget about whatever is happening after like before a certain point right."
      },
      {
        "lecture": 29,
        "file": "029_DS_Videos_6b_Asymptotic_Notations_GATE_PYQs_1994,_96,_2000,1.mp4",
        "start": 79.47,
        "end": 107.99,
        "text": "so before that whatever is happening let's not worry about it like maybe something something is happening and but after after a certain point it is like one function is n cube and one function is n square so after a certain point which is actually n not equal to 10,000 right so you will say that let's suppose this is n cube this is n square which is g1n and this is g2n right so you will say that yes g1n is actually actually greater than equal to g2n right why"
      },
      {
        "lecture": 29,
        "file": "029_DS_Videos_6b_Asymptotic_Notations_GATE_PYQs_1994,_96,_2000,1.mp4",
        "start": 108.32,
        "end": 136.54,
        "text": "Because after a certain point, nothing is on the map. Okay, sorry, it is n square and it is nq. So it is g2 and this is g1. This is g2, this is g1, right? I hope you got it. So this is g2, this is g1. So you will say g2 is greater than or equal to g1n. So you will say g2, g2 is greater than or equal to means g2 should be in the paper, right? So yes, a is 2, a is 2, right? Very easy, very easy question. This is just a piecewise function to confuse you."
      }
    ],
    "foundation": {
      "title": "Growth comparison puzzles",
      "idea": "Inverse powers and logarithms can simplify a growth expression. Use the same stated base, keep arguments positive, and compare the resulting functions rather than their visual complexity.",
      "terms": [
        "Inverse pair: b^(log_b x)=x.",
        "Composition: feeding one function result into another.",
        "Eventual order: an inequality beyond a threshold."
      ],
      "example": "For n>1, 2^(log_2(log_2(n)))=log_2(n), not n."
    }
  },
  {
    "id": 88,
    "lecture": 29,
    "title": "Compare transformed functions",
    "concept": "Inverse powers and logarithms can simplify a growth expression. Use the same stated base, keep arguments positive, and compare the resulting functions rather than their visual complexity.",
    "teachingSteps": [
      "Rewrite the expression with a consistent base.",
      "Cancel only matching inverse power-log pairs.",
      "Compare the simplified growth functions for large n."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which identity is generally valid for positive x,y and a valid common base?",
        "options": [
          "log(xy)=log(x)+log(y)",
          "log(x+y)=log(x)+log(y)",
          "log(xy)=log(x)*log(y)"
        ],
        "answer": 0,
        "explanation": "Products become sums, not sums of arguments."
      },
      {
        "type": "number",
        "prompt": "What is log_2(16 / 2)?",
        "answer": 3,
        "explanation": "Use the quotient rule: log_2(x)-1.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 16
        }
      },
      {
        "type": "number",
        "prompt": "What is log_4(256)?",
        "answer": 4,
        "explanation": "The argument is 4^4.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 256
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Check base and argument conditions",
          "Rewrite using the matching power or log rule",
          "Simplify while retaining the stated base",
          "Evaluate the resulting expression"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "growth",
    "start": 20.96,
    "sourceReferences": [
      {
        "lecture": 29,
        "file": "029_DS_Videos_6b_Asymptotic_Notations_GATE_PYQs_1994,_96,_2000,1.mp4",
        "start": 20.96,
        "end": 49.88,
        "text": "I mean there is no point in you know having a function behavior for the smaller values. So smaller like smaller and bigger values are not not defined by some number. It is basically it could be any constant like based on some constant you can you can say okay these are the small values. See after a certain point function is just n square. So you can say that for the asymptotic analysis you can say that g1 and it's just n square. Just forget about whatever is happening after like before a certain point right."
      },
      {
        "lecture": 29,
        "file": "029_DS_Videos_6b_Asymptotic_Notations_GATE_PYQs_1994,_96,_2000,1.mp4",
        "start": 79.47,
        "end": 107.99,
        "text": "so before that whatever is happening let's not worry about it like maybe something something is happening and but after after a certain point it is like one function is n cube and one function is n square so after a certain point which is actually n not equal to 10,000 right so you will say that let's suppose this is n cube this is n square which is g1n and this is g2n right so you will say that yes g1n is actually actually greater than equal to g2n right why"
      },
      {
        "lecture": 29,
        "file": "029_DS_Videos_6b_Asymptotic_Notations_GATE_PYQs_1994,_96,_2000,1.mp4",
        "start": 108.32,
        "end": 136.54,
        "text": "Because after a certain point, nothing is on the map. Okay, sorry, it is n square and it is nq. So it is g2 and this is g1. This is g2, this is g1, right? I hope you got it. So this is g2, this is g1. So you will say g2 is greater than or equal to g1n. So you will say g2, g2 is greater than or equal to means g2 should be in the paper, right? So yes, a is 2, a is 2, right? Very easy, very easy question. This is just a piecewise function to confuse you."
      }
    ],
    "foundation": {
      "title": "Growth comparison puzzles",
      "idea": "Inverse powers and logarithms can simplify a growth expression. Use the same stated base, keep arguments positive, and compare the resulting functions rather than their visual complexity.",
      "terms": [
        "Inverse pair: b^(log_b x)=x.",
        "Composition: feeding one function result into another.",
        "Eventual order: an inequality beyond a threshold."
      ],
      "example": "For n>1, 2^(log_2(log_2(n)))=log_2(n), not n."
    }
  },
  {
    "id": 89,
    "lecture": 29,
    "title": "Reject a misleading finite example",
    "concept": "Inverse powers and logarithms can simplify a growth expression. Use the same stated base, keep arguments positive, and compare the resulting functions rather than their visual complexity.",
    "teachingSteps": [
      "Rewrite the expression with a consistent base.",
      "Cancel only matching inverse power-log pairs.",
      "Compare the simplified growth functions for large n."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Where does every valid logarithm graph meet the horizontal axis?",
        "options": [
          "x=0",
          "x=the base only",
          "x=1"
        ],
        "answer": 2,
        "explanation": "log_b(1)=0."
      },
      {
        "type": "number",
        "prompt": "What is log_(1/2)(16)?",
        "answer": -4,
        "explanation": "(1/2)^(-4)=2^4.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 16
        }
      },
      {
        "type": "choice",
        "prompt": "For base 1/2, what happens to the log when its positive argument doubles?",
        "options": [
          "It decreases by 1",
          "It increases by 1",
          "It stays unchanged"
        ],
        "answer": 0,
        "explanation": "log_(1/2)(2x)=log_(1/2)(x)-1."
      },
      {
        "type": "number",
        "prompt": "For n=16>1, evaluate 2^(log_2(log_2(n))).",
        "answer": 4,
        "explanation": "The outer power and matching log cancel, leaving log_2(n).",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 16
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "growth",
    "start": 20.96,
    "sourceReferences": [
      {
        "lecture": 29,
        "file": "029_DS_Videos_6b_Asymptotic_Notations_GATE_PYQs_1994,_96,_2000,1.mp4",
        "start": 20.96,
        "end": 49.88,
        "text": "I mean there is no point in you know having a function behavior for the smaller values. So smaller like smaller and bigger values are not not defined by some number. It is basically it could be any constant like based on some constant you can you can say okay these are the small values. See after a certain point function is just n square. So you can say that for the asymptotic analysis you can say that g1 and it's just n square. Just forget about whatever is happening after like before a certain point right."
      },
      {
        "lecture": 29,
        "file": "029_DS_Videos_6b_Asymptotic_Notations_GATE_PYQs_1994,_96,_2000,1.mp4",
        "start": 79.47,
        "end": 107.99,
        "text": "so before that whatever is happening let's not worry about it like maybe something something is happening and but after after a certain point it is like one function is n cube and one function is n square so after a certain point which is actually n not equal to 10,000 right so you will say that let's suppose this is n cube this is n square which is g1n and this is g2n right so you will say that yes g1n is actually actually greater than equal to g2n right why"
      },
      {
        "lecture": 29,
        "file": "029_DS_Videos_6b_Asymptotic_Notations_GATE_PYQs_1994,_96,_2000,1.mp4",
        "start": 108.32,
        "end": 136.54,
        "text": "Because after a certain point, nothing is on the map. Okay, sorry, it is n square and it is nq. So it is g2 and this is g1. This is g2, this is g1, right? I hope you got it. So this is g2, this is g1. So you will say g2 is greater than or equal to g1n. So you will say g2, g2 is greater than or equal to means g2 should be in the paper, right? So yes, a is 2, a is 2, right? Very easy, very easy question. This is just a piecewise function to confuse you."
      }
    ],
    "foundation": {
      "title": "Growth comparison puzzles",
      "idea": "Inverse powers and logarithms can simplify a growth expression. Use the same stated base, keep arguments positive, and compare the resulting functions rather than their visual complexity.",
      "terms": [
        "Inverse pair: b^(log_b x)=x.",
        "Composition: feeding one function result into another.",
        "Eventual order: an inequality beyond a threshold."
      ],
      "example": "For n>1, 2^(log_2(log_2(n)))=log_2(n), not n."
    }
  },
  {
    "id": 90,
    "lecture": 30,
    "title": "Trace additive increments",
    "concept": "Count the actual values visited by a loop before choosing a growth class. Additive updates usually produce linear counts; multiplicative updates from a positive initial value often produce logarithmic counts.",
    "teachingSteps": [
      "Record the initializer and strict or non-strict stop test.",
      "List a few visited values using the exact update.",
      "Count visits; check whether the update really moves toward termination."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "A loop starts i=0 and repeatedly sets i*=2 while i<n for positive n. What happens?",
        "options": [
          "It never progresses toward termination",
          "It always runs log_2(n) times",
          "It immediately reaches n"
        ],
        "answer": 0,
        "explanation": "Zero doubled remains zero."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "i+=constant",
            "Additive progression"
          ],
          [
            "i*=2 from positive i",
            "Doubling progression"
          ],
          [
            "Dependent inner range",
            "Sum of per-outer counts"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "for(i=0;i<3;i++) performs how many body executions?",
        "answer": 3,
        "explanation": "Values 0 through n-1 occur once each.",
        "tolerance": 1e-8
      },
      {
        "type": "number",
        "prompt": "for(i=0;i<3;i+=2) performs how many body executions?",
        "answer": 2,
        "explanation": "Count even values strictly below the stop value.",
        "tolerance": 1e-8
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "loops",
    "start": 1.17,
    "sourceReferences": [
      {
        "lecture": 30,
        "file": "030. DS Videos_ 6c. Analysing the loops time complexity.mp4",
        "start": 1.17,
        "end": 30.65,
        "text": "So, in this video we are going to analyze loop complexities. So, before that I want you to give some like I want to give some series summation. So, this is the first series that you might be knowing that if you sum over all natural numbers it comes out to be n into n plus 1 by 2 ok. So, we have done it in our foundation classes I hope you remember it right and this is the second series like these series might come handy whenever we are solving some loop complexity questions. Now, just see this series."
      },
      {
        "lecture": 30,
        "file": "030. DS Videos_ 6c. Analysing the loops time complexity.mp4",
        "start": 60.41,
        "end": 89.59,
        "text": "this is nothing but 1 upon x and instead of integration I have the summation here right so if you sum this series this this 1 upon k from 1 to n then it also comes out to be log n okay if we can approximate this series to be log n so I might use this series I'm not going to prove this series but I might use this series in some of the questions okay let's just solve some of the questions straight away so this is the example one where I have some main function and this is the for loop right"
      },
      {
        "lecture": 30,
        "file": "030. DS Videos_ 6c. Analysing the loops time complexity.mp4",
        "start": 89.88,
        "end": 116.79,
        "text": "Now the question is that what is the complexity of this loop? So what is the complexity? Complexity means what is the time that this loop or this function is taking, this program is taking. So you will say that since this for loop is running from 0 to n, so that is why this statement will get run n times. So you can say that time complexity is n. Now what do I mean by n?"
      }
    ],
    "foundation": {
      "title": "Counting loop iterations",
      "idea": "Count the actual values visited by a loop before choosing a growth class. Additive updates usually produce linear counts; multiplicative updates from a positive initial value often produce logarithmic counts.",
      "terms": [
        "Iteration: one execution of the loop body.",
        "Update: how the control variable changes.",
        "Termination: eventually making the loop condition false."
      ],
      "example": "For i=1; i<16; i*=2, the body sees 1,2,4,8, so it runs four times. Starting i at zero would never progress."
    }
  },
  {
    "id": 91,
    "lecture": 30,
    "title": "Trace repeated doubling",
    "concept": "Count the actual values visited by a loop before choosing a growth class. Additive updates usually produce linear counts; multiplicative updates from a positive initial value often produce logarithmic counts.",
    "teachingSteps": [
      "Record the initializer and strict or non-strict stop test.",
      "List a few visited values using the exact update.",
      "Count visits; check whether the update really moves toward termination."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "When inner work depends on outer i, which method is safest?",
        "options": [
          "Always square the outer count",
          "Ignore the inner loop",
          "Sum the inner count for each i"
        ],
        "answer": 2,
        "explanation": "Dependent ranges require a sum."
      },
      {
        "type": "number",
        "prompt": "for(i=1;i<4;i*=2) performs how many body executions?",
        "answer": 2,
        "explanation": "Values 1,2,...,n/2 are visited.",
        "tolerance": 1e-8
      },
      {
        "type": "number",
        "prompt": "for(i=3;i>0;i--) performs how many body executions?",
        "answer": 3,
        "explanation": "Values n down through 1 are visited.",
        "tolerance": 1e-8
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Read initialization and stopping condition",
          "List the control-variable progression",
          "Count or sum actual body visits",
          "Check termination and state carried between passes"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "loops",
    "start": 1.17,
    "sourceReferences": [
      {
        "lecture": 30,
        "file": "030. DS Videos_ 6c. Analysing the loops time complexity.mp4",
        "start": 1.17,
        "end": 30.65,
        "text": "So, in this video we are going to analyze loop complexities. So, before that I want you to give some like I want to give some series summation. So, this is the first series that you might be knowing that if you sum over all natural numbers it comes out to be n into n plus 1 by 2 ok. So, we have done it in our foundation classes I hope you remember it right and this is the second series like these series might come handy whenever we are solving some loop complexity questions. Now, just see this series."
      },
      {
        "lecture": 30,
        "file": "030. DS Videos_ 6c. Analysing the loops time complexity.mp4",
        "start": 60.41,
        "end": 89.59,
        "text": "this is nothing but 1 upon x and instead of integration I have the summation here right so if you sum this series this this 1 upon k from 1 to n then it also comes out to be log n okay if we can approximate this series to be log n so I might use this series I'm not going to prove this series but I might use this series in some of the questions okay let's just solve some of the questions straight away so this is the example one where I have some main function and this is the for loop right"
      },
      {
        "lecture": 30,
        "file": "030. DS Videos_ 6c. Analysing the loops time complexity.mp4",
        "start": 89.88,
        "end": 116.79,
        "text": "Now the question is that what is the complexity of this loop? So what is the complexity? Complexity means what is the time that this loop or this function is taking, this program is taking. So you will say that since this for loop is running from 0 to n, so that is why this statement will get run n times. So you can say that time complexity is n. Now what do I mean by n?"
      }
    ],
    "foundation": {
      "title": "Counting loop iterations",
      "idea": "Count the actual values visited by a loop before choosing a growth class. Additive updates usually produce linear counts; multiplicative updates from a positive initial value often produce logarithmic counts.",
      "terms": [
        "Iteration: one execution of the loop body.",
        "Update: how the control variable changes.",
        "Termination: eventually making the loop condition false."
      ],
      "example": "For i=1; i<16; i*=2, the body sees 1,2,4,8, so it runs four times. Starting i at zero would never progress."
    }
  },
  {
    "id": 92,
    "lecture": 30,
    "title": "Check initialization and termination",
    "concept": "Count the actual values visited by a loop before choosing a growth class. Additive updates usually produce linear counts; multiplicative updates from a positive initial value often produce logarithmic counts.",
    "teachingSteps": [
      "Record the initializer and strict or non-strict stop test.",
      "List a few visited values using the exact update.",
      "Count visits; check whether the update really moves toward termination."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "How does changing i<n to i<=n affect a doubling loop at a power-of-two n?",
        "options": [
          "It removes every execution",
          "It includes one additional terminal body execution",
          "It always doubles the count"
        ],
        "answer": 1,
        "explanation": "The visited terminal value n becomes allowed."
      },
      {
        "type": "number",
        "prompt": "for(i=2;i<256;i=i*i) performs how many body executions?",
        "answer": 3,
        "explanation": "The body sees 2,4,16; the next value is 256 and fails the strict test.",
        "tolerance": 1e-8
      },
      {
        "type": "choice",
        "prompt": "A shared inner cursor is not reset. May you multiply its first-pass count by all outer passes?",
        "options": [
          "Always",
          "Only when its name is j",
          "Not without tracing the carried state"
        ],
        "answer": 2,
        "explanation": "Later passes may do no further inner increments."
      },
      {
        "type": "number",
        "prompt": "for(i=1;i<=4;i*=2) performs how many body executions?",
        "answer": 3,
        "explanation": "The non-strict test includes the terminal power n.",
        "tolerance": 1e-8
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "loops",
    "start": 1.17,
    "sourceReferences": [
      {
        "lecture": 30,
        "file": "030. DS Videos_ 6c. Analysing the loops time complexity.mp4",
        "start": 1.17,
        "end": 30.65,
        "text": "So, in this video we are going to analyze loop complexities. So, before that I want you to give some like I want to give some series summation. So, this is the first series that you might be knowing that if you sum over all natural numbers it comes out to be n into n plus 1 by 2 ok. So, we have done it in our foundation classes I hope you remember it right and this is the second series like these series might come handy whenever we are solving some loop complexity questions. Now, just see this series."
      },
      {
        "lecture": 30,
        "file": "030. DS Videos_ 6c. Analysing the loops time complexity.mp4",
        "start": 60.41,
        "end": 89.59,
        "text": "this is nothing but 1 upon x and instead of integration I have the summation here right so if you sum this series this this 1 upon k from 1 to n then it also comes out to be log n okay if we can approximate this series to be log n so I might use this series I'm not going to prove this series but I might use this series in some of the questions okay let's just solve some of the questions straight away so this is the example one where I have some main function and this is the for loop right"
      },
      {
        "lecture": 30,
        "file": "030. DS Videos_ 6c. Analysing the loops time complexity.mp4",
        "start": 89.88,
        "end": 116.79,
        "text": "Now the question is that what is the complexity of this loop? So what is the complexity? Complexity means what is the time that this loop or this function is taking, this program is taking. So you will say that since this for loop is running from 0 to n, so that is why this statement will get run n times. So you can say that time complexity is n. Now what do I mean by n?"
      }
    ],
    "foundation": {
      "title": "Counting loop iterations",
      "idea": "Count the actual values visited by a loop before choosing a growth class. Additive updates usually produce linear counts; multiplicative updates from a positive initial value often produce logarithmic counts.",
      "terms": [
        "Iteration: one execution of the loop body.",
        "Update: how the control variable changes.",
        "Termination: eventually making the loop condition false."
      ],
      "example": "For i=1; i<16; i*=2, the body sees 1,2,4,8, so it runs four times. Starting i at zero would never progress."
    }
  },
  {
    "id": 93,
    "lecture": 31,
    "title": "Multiply independent ranges",
    "concept": "Multiply loop lengths only when they are independent. If the inner length depends on the outer index, sum those lengths. A shared cursor that is never reset may advance only n times in total.",
    "teachingSteps": [
      "Write the inner count for each outer value.",
      "Sum dependent counts, or multiply genuinely independent counts.",
      "Track persistent variables across outer iterations."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "A loop starts i=0 and repeatedly sets i*=2 while i<n for positive n. What happens?",
        "options": [
          "It always runs log_2(n) times",
          "It immediately reaches n",
          "It never progresses toward termination"
        ],
        "answer": 2,
        "explanation": "Zero doubled remains zero."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "i+=constant",
            "Additive progression"
          ],
          [
            "i*=2 from positive i",
            "Doubling progression"
          ],
          [
            "Dependent inner range",
            "Sum of per-outer counts"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "An outer loop runs i=1..4; its inner body runs exactly i times. How many total inner executions occur?",
        "answer": 10,
        "explanation": "Add 1+2+...+n.",
        "tolerance": 1e-8
      },
      {
        "type": "number",
        "prompt": "Two independent loops each run 4 times, one nested inside the other. How many inner executions occur?",
        "answer": 16,
        "explanation": "Independent lengths multiply.",
        "tolerance": 1e-8
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "nested",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 31,
        "file": "031. 6d. Time Complexity of loops -2.mp4",
        "start": 0,
        "end": 25.9,
        "text": "So let's continue our discussion on analyzing loop complexities. You might remember that these were few identities that I talked about, like if you sum over 1 to n, then you will be getting n into n plus 1 by 2. So we might use this. And similarly, like I think in this lecture, we will be using this identity quite often, which is basically 1 plus 1 by 2 plus 1 by 3 plus 1 by 4 till 1 by n is as what I'm saying log n. We might be using this."
      },
      {
        "lecture": 31,
        "file": "031. 6d. Time Complexity of loops -2.mp4",
        "start": 26.66,
        "end": 56.32,
        "text": "And now, in the last video, we have seen that if you're incrementing by A, then it is NYA. If you're multiplying by some constant, then it is log base, that constant, right? It is 2, then it is log base 2. And if you're squaring up, then it is log log N, right? Okay. Let's solve these four questions. These four questions are easy, not that tough, like you can easily solve it, I think. So let's solve this. See this first question, it is running, like first loop is running N times, and second loop is also running N times. So that is why"
      },
      {
        "lecture": 31,
        "file": "031. 6d. Time Complexity of loops -2.mp4",
        "start": 56.63,
        "end": 85.13,
        "text": "the total time complexity is order of n square you can also say theta because theta is more appropriate but order of n square is actually more popular this o symbol is actually more popular so i will be using this o symbol otherwise you can also say theta there is no problem in theta right okay let's talk about this so here you see that i am running first loop n times that is okay second loop i'm like this is a bit not clear what i'm doing here because i'm running one time"
      }
    ],
    "foundation": {
      "title": "Dependent and nested loops",
      "idea": "Multiply loop lengths only when they are independent. If the inner length depends on the outer index, sum those lengths. A shared cursor that is never reset may advance only n times in total.",
      "terms": [
        "Dependent range: an inner length controlled by the outer value.",
        "Triangular sum: 1+2+...+n.",
        "Shared cursor: state carried between iterations."
      ],
      "example": "Inner lengths 1,2,3,4 give 10 body executions, rather than 4*4=16."
    }
  },
  {
    "id": 94,
    "lecture": 31,
    "title": "Sum dependent inner lengths",
    "concept": "Multiply loop lengths only when they are independent. If the inner length depends on the outer index, sum those lengths. A shared cursor that is never reset may advance only n times in total.",
    "teachingSteps": [
      "Write the inner count for each outer value.",
      "Sum dependent counts, or multiply genuinely independent counts.",
      "Track persistent variables across outer iterations."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "When inner work depends on outer i, which method is safest?",
        "options": [
          "Ignore the inner loop",
          "Sum the inner count for each i",
          "Always square the outer count"
        ],
        "answer": 1,
        "explanation": "Dependent ranges require a sum."
      },
      {
        "type": "number",
        "prompt": "An outer loop runs 4 times; each inner loop visits 1,2,4,... below 8. How many inner executions occur?",
        "answer": 12,
        "explanation": "The inner count is log_2(x).",
        "tolerance": 1e-8
      },
      {
        "type": "number",
        "prompt": "Outer i takes 1,2,4,...,8; inner body runs exactly i times. What total occurs?",
        "answer": 15,
        "explanation": "The geometric sum 1+2+...+n is 2n-1.",
        "tolerance": 1e-8
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Read initialization and stopping condition",
          "List the control-variable progression",
          "Count or sum actual body visits",
          "Check termination and state carried between passes"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "nested",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 31,
        "file": "031. 6d. Time Complexity of loops -2.mp4",
        "start": 0,
        "end": 25.9,
        "text": "So let's continue our discussion on analyzing loop complexities. You might remember that these were few identities that I talked about, like if you sum over 1 to n, then you will be getting n into n plus 1 by 2. So we might use this. And similarly, like I think in this lecture, we will be using this identity quite often, which is basically 1 plus 1 by 2 plus 1 by 3 plus 1 by 4 till 1 by n is as what I'm saying log n. We might be using this."
      },
      {
        "lecture": 31,
        "file": "031. 6d. Time Complexity of loops -2.mp4",
        "start": 26.66,
        "end": 56.32,
        "text": "And now, in the last video, we have seen that if you're incrementing by A, then it is NYA. If you're multiplying by some constant, then it is log base, that constant, right? It is 2, then it is log base 2. And if you're squaring up, then it is log log N, right? Okay. Let's solve these four questions. These four questions are easy, not that tough, like you can easily solve it, I think. So let's solve this. See this first question, it is running, like first loop is running N times, and second loop is also running N times. So that is why"
      },
      {
        "lecture": 31,
        "file": "031. 6d. Time Complexity of loops -2.mp4",
        "start": 56.63,
        "end": 85.13,
        "text": "the total time complexity is order of n square you can also say theta because theta is more appropriate but order of n square is actually more popular this o symbol is actually more popular so i will be using this o symbol otherwise you can also say theta there is no problem in theta right okay let's talk about this so here you see that i am running first loop n times that is okay second loop i'm like this is a bit not clear what i'm doing here because i'm running one time"
      }
    ],
    "foundation": {
      "title": "Dependent and nested loops",
      "idea": "Multiply loop lengths only when they are independent. If the inner length depends on the outer index, sum those lengths. A shared cursor that is never reset may advance only n times in total.",
      "terms": [
        "Dependent range: an inner length controlled by the outer value.",
        "Triangular sum: 1+2+...+n.",
        "Shared cursor: state carried between iterations."
      ],
      "example": "Inner lengths 1,2,3,4 give 10 body executions, rather than 4*4=16."
    }
  },
  {
    "id": 95,
    "lecture": 31,
    "title": "Count work with a shared cursor",
    "concept": "Multiply loop lengths only when they are independent. If the inner length depends on the outer index, sum those lengths. A shared cursor that is never reset may advance only n times in total.",
    "teachingSteps": [
      "Write the inner count for each outer value.",
      "Sum dependent counts, or multiply genuinely independent counts.",
      "Track persistent variables across outer iterations."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "How does changing i<n to i<=n affect a doubling loop at a power-of-two n?",
        "options": [
          "It includes one additional terminal body execution",
          "It always doubles the count",
          "It removes every execution"
        ],
        "answer": 0,
        "explanation": "The visited terminal value n becomes allowed."
      },
      {
        "type": "number",
        "prompt": "j starts at 0 outside the outer loop. Each pass increments j while j<4, and j is never reset. How many j increments occur over all passes?",
        "answer": 4,
        "explanation": "The shared cursor moves from 0 to n only once.",
        "tolerance": 1e-8
      },
      {
        "type": "choice",
        "prompt": "A shared inner cursor is not reset. May you multiply its first-pass count by all outer passes?",
        "options": [
          "Only when its name is j",
          "Not without tracing the carried state",
          "Always"
        ],
        "answer": 1,
        "explanation": "Later passes may do no further inner increments."
      },
      {
        "type": "number",
        "prompt": "For each j=1..4, an inner cursor visits 0,j,2j,... strictly below 4. What is the sum of all inner counts?",
        "answer": 9,
        "explanation": "For each j, count ceil(n/j), then add the counts.",
        "tolerance": 1e-8
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "nested",
    "start": 0,
    "sourceReferences": [
      {
        "lecture": 31,
        "file": "031. 6d. Time Complexity of loops -2.mp4",
        "start": 0,
        "end": 25.9,
        "text": "So let's continue our discussion on analyzing loop complexities. You might remember that these were few identities that I talked about, like if you sum over 1 to n, then you will be getting n into n plus 1 by 2. So we might use this. And similarly, like I think in this lecture, we will be using this identity quite often, which is basically 1 plus 1 by 2 plus 1 by 3 plus 1 by 4 till 1 by n is as what I'm saying log n. We might be using this."
      },
      {
        "lecture": 31,
        "file": "031. 6d. Time Complexity of loops -2.mp4",
        "start": 26.66,
        "end": 56.32,
        "text": "And now, in the last video, we have seen that if you're incrementing by A, then it is NYA. If you're multiplying by some constant, then it is log base, that constant, right? It is 2, then it is log base 2. And if you're squaring up, then it is log log N, right? Okay. Let's solve these four questions. These four questions are easy, not that tough, like you can easily solve it, I think. So let's solve this. See this first question, it is running, like first loop is running N times, and second loop is also running N times. So that is why"
      },
      {
        "lecture": 31,
        "file": "031. 6d. Time Complexity of loops -2.mp4",
        "start": 56.63,
        "end": 85.13,
        "text": "the total time complexity is order of n square you can also say theta because theta is more appropriate but order of n square is actually more popular this o symbol is actually more popular so i will be using this o symbol otherwise you can also say theta there is no problem in theta right okay let's talk about this so here you see that i am running first loop n times that is okay second loop i'm like this is a bit not clear what i'm doing here because i'm running one time"
      }
    ],
    "foundation": {
      "title": "Dependent and nested loops",
      "idea": "Multiply loop lengths only when they are independent. If the inner length depends on the outer index, sum those lengths. A shared cursor that is never reset may advance only n times in total.",
      "terms": [
        "Dependent range: an inner length controlled by the outer value.",
        "Triangular sum: 1+2+...+n.",
        "Shared cursor: state carried between iterations."
      ],
      "example": "Inner lengths 1,2,3,4 give 10 body executions, rather than 4*4=16."
    }
  },
  {
    "id": 96,
    "lecture": 32,
    "title": "Choose an input family",
    "concept": "A search cost depends on where the target occurs or whether it is absent. Best and worst choose inputs of the same size; average cost additionally requires a probability model.",
    "teachingSteps": [
      "State the search order and what one comparison means.",
      "Count until the target is found, or until all entries are checked.",
      "For an average, explicitly specify how likely each position or input is."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which defines worst case at a fixed input size?",
        "options": [
          "The probability-weighted mean only",
          "The maximum cost among inputs of that size",
          "Big O by definition"
        ],
        "answer": 1,
        "explanation": "Case selection chooses an input or distribution; Big O is a separate bound."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Best case",
            "Minimum cost at a fixed size"
          ],
          [
            "Worst case",
            "Maximum cost at a fixed size"
          ],
          [
            "Average case",
            "Expectation under a stated distribution"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "A linear search finds the first pictured entry. How many payload comparisons occur?",
        "answer": 1,
        "explanation": "The first comparison succeeds.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "number",
        "prompt": "It finds the last entry of 5 distinct entries. How many comparisons occur?",
        "answer": 5,
        "explanation": "All entries up to and including the final one are checked.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "search",
    "start": 0.02,
    "sourceReferences": [
      {
        "lecture": 32,
        "file": "032. DS Videos_ 7a. Brief about Best Case, Worst Case.mp4",
        "start": 0.02,
        "end": 28.12,
        "text": "Hi everyone. So in this video, we are going to look at some time complexities of linked list. Okay. So suppose this is one linked list. Let me put some random values here. Suppose this is 11, this is 8, this is 23, this is 50, this is 78, something like this, right? So suppose this is one linked list that we have. And now, suppose in this linked list, I want to search some element."
      },
      {
        "lecture": 32,
        "file": "032. DS Videos_ 7a. Brief about Best Case, Worst Case.mp4",
        "start": 28.58,
        "end": 79.52,
        "text": "Okay, so I hope the objective is killer to everyone still let me write the objective Objective is that we are given one linked list and we want to search some element in this link list, right? so Sorry, let me write it properly and and we want to search something search some element in linked list So I think you can do it easily"
      },
      {
        "lecture": 32,
        "file": "032. DS Videos_ 7a. Brief about Best Case, Worst Case.mp4",
        "start": 79.84,
        "end": 109.06,
        "text": "how you can simply write a code which would look like this I mean there will be head if head is not null then you will just check whether this is x which is you are searching for right if this is x then you will say yes that is found right I mean you will say yes that is found otherwise you will keep on going to the next element you will keep on going to the next element and if the head is null then you will return the zero you will say that okay this has not been found so this is one simple algorithm I hope everyone of you have understood this right now let's just see"
      }
    ],
    "foundation": {
      "title": "Best, worst and average search",
      "idea": "A search cost depends on where the target occurs or whether it is absent. Best and worst choose inputs of the same size; average cost additionally requires a probability model.",
      "terms": [
        "Best: smallest cost among size-n inputs.",
        "Worst: largest cost among size-n inputs.",
        "Average: an expectation under a stated distribution."
      ],
      "example": "Linear search of four distinct entries costs 1,2,3,4 comparisons for equally likely successful positions: average 2.5. An absent target costs four."
    }
  },
  {
    "id": 97,
    "lecture": 32,
    "title": "Count successful and failed searches",
    "concept": "A search cost depends on where the target occurs or whether it is absent. Best and worst choose inputs of the same size; average cost additionally requires a probability model.",
    "teachingSteps": [
      "State the search order and what one comparison means.",
      "Count until the target is found, or until all entries are checked.",
      "For an average, explicitly specify how likely each position or input is."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "What is needed for a numerical average-case cost?",
        "options": [
          "A stated probability distribution on inputs",
          "Only the slowest input",
          "Only an upper bound"
        ],
        "answer": 0,
        "explanation": "Different distributions can yield different expectations."
      },
      {
        "type": "number",
        "prompt": "It searches for absent value 1000. How many payload comparisons occur?",
        "answer": 5,
        "explanation": "Every pictured entry is checked once.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Assume each of the 5 successful target positions is equally likely. What is the average number of comparisons?",
        "answer": 3,
        "explanation": "Average 1 through n under the stated successful-search distribution.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Fix the input size and allowed inputs",
          "Determine each relevant input cost",
          "Select the minimum, maximum or stated probability weights",
          "Apply a bound to the selected case function"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "search",
    "start": 0.02,
    "sourceReferences": [
      {
        "lecture": 32,
        "file": "032. DS Videos_ 7a. Brief about Best Case, Worst Case.mp4",
        "start": 0.02,
        "end": 28.12,
        "text": "Hi everyone. So in this video, we are going to look at some time complexities of linked list. Okay. So suppose this is one linked list. Let me put some random values here. Suppose this is 11, this is 8, this is 23, this is 50, this is 78, something like this, right? So suppose this is one linked list that we have. And now, suppose in this linked list, I want to search some element."
      },
      {
        "lecture": 32,
        "file": "032. DS Videos_ 7a. Brief about Best Case, Worst Case.mp4",
        "start": 28.58,
        "end": 79.52,
        "text": "Okay, so I hope the objective is killer to everyone still let me write the objective Objective is that we are given one linked list and we want to search some element in this link list, right? so Sorry, let me write it properly and and we want to search something search some element in linked list So I think you can do it easily"
      },
      {
        "lecture": 32,
        "file": "032. DS Videos_ 7a. Brief about Best Case, Worst Case.mp4",
        "start": 79.84,
        "end": 109.06,
        "text": "how you can simply write a code which would look like this I mean there will be head if head is not null then you will just check whether this is x which is you are searching for right if this is x then you will say yes that is found right I mean you will say yes that is found otherwise you will keep on going to the next element you will keep on going to the next element and if the head is null then you will return the zero you will say that okay this has not been found so this is one simple algorithm I hope everyone of you have understood this right now let's just see"
      }
    ],
    "foundation": {
      "title": "Best, worst and average search",
      "idea": "A search cost depends on where the target occurs or whether it is absent. Best and worst choose inputs of the same size; average cost additionally requires a probability model.",
      "terms": [
        "Best: smallest cost among size-n inputs.",
        "Worst: largest cost among size-n inputs.",
        "Average: an expectation under a stated distribution."
      ],
      "example": "Linear search of four distinct entries costs 1,2,3,4 comparisons for equally likely successful positions: average 2.5. An absent target costs four."
    }
  },
  {
    "id": 98,
    "lecture": 32,
    "title": "State a probability model",
    "concept": "A search cost depends on where the target occurs or whether it is absent. Best and worst choose inputs of the same size; average cost additionally requires a probability model.",
    "teachingSteps": [
      "State the search order and what one comparison means.",
      "Count until the target is found, or until all entries are checked.",
      "For an average, explicitly specify how likely each position or input is."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "If the best case is at least n operations, what follows for every input of that size?",
        "options": [
          "Every input costs exactly n",
          "Every input costs less than n",
          "Every input costs at least n"
        ],
        "answer": 2,
        "explanation": "Every input cost is no smaller than the minimum."
      },
      {
        "type": "number",
        "prompt": "It finds the pictured third entry. How many comparisons occur?",
        "answer": 3,
        "explanation": "First, second, then third.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "Can a worst-case function have both Big O and Big Omega bounds?",
        "options": [
          "Yes",
          "No; Omega can only describe best case",
          "No; O must always be tight"
        ],
        "answer": 0,
        "explanation": "Any chosen case function can have upper, lower and tight bounds."
      },
      {
        "type": "number",
        "prompt": "What is worst successful cost minus best successful cost?",
        "answer": 4,
        "explanation": "Subtract 1 from n.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "list",
          "values": [
            3,
            6,
            9,
            12,
            15
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "search",
    "start": 0.02,
    "sourceReferences": [
      {
        "lecture": 32,
        "file": "032. DS Videos_ 7a. Brief about Best Case, Worst Case.mp4",
        "start": 0.02,
        "end": 28.12,
        "text": "Hi everyone. So in this video, we are going to look at some time complexities of linked list. Okay. So suppose this is one linked list. Let me put some random values here. Suppose this is 11, this is 8, this is 23, this is 50, this is 78, something like this, right? So suppose this is one linked list that we have. And now, suppose in this linked list, I want to search some element."
      },
      {
        "lecture": 32,
        "file": "032. DS Videos_ 7a. Brief about Best Case, Worst Case.mp4",
        "start": 28.58,
        "end": 79.52,
        "text": "Okay, so I hope the objective is killer to everyone still let me write the objective Objective is that we are given one linked list and we want to search some element in this link list, right? so Sorry, let me write it properly and and we want to search something search some element in linked list So I think you can do it easily"
      },
      {
        "lecture": 32,
        "file": "032. DS Videos_ 7a. Brief about Best Case, Worst Case.mp4",
        "start": 79.84,
        "end": 109.06,
        "text": "how you can simply write a code which would look like this I mean there will be head if head is not null then you will just check whether this is x which is you are searching for right if this is x then you will say yes that is found right I mean you will say yes that is found otherwise you will keep on going to the next element you will keep on going to the next element and if the head is null then you will return the zero you will say that okay this has not been found so this is one simple algorithm I hope everyone of you have understood this right now let's just see"
      }
    ],
    "foundation": {
      "title": "Best, worst and average search",
      "idea": "A search cost depends on where the target occurs or whether it is absent. Best and worst choose inputs of the same size; average cost additionally requires a probability model.",
      "terms": [
        "Best: smallest cost among size-n inputs.",
        "Worst: largest cost among size-n inputs.",
        "Average: an expectation under a stated distribution."
      ],
      "example": "Linear search of four distinct entries costs 1,2,3,4 comparisons for equally likely successful positions: average 2.5. An absent target costs four."
    }
  },
  {
    "id": 99,
    "lecture": 33,
    "title": "Separate input choice from inequality",
    "concept": "Input-case selection and asymptotic bounds answer separate questions. A best-case, worst-case or expected-cost function may each have an upper bound, lower bound and tight bound.",
    "teachingSteps": [
      "Select which case function is being discussed.",
      "Then state an inequality or tight class for that function.",
      "Do not identify Big O with worst case or Omega with best case by definition."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which defines worst case at a fixed input size?",
        "options": [
          "The maximum cost among inputs of that size",
          "Big O by definition",
          "The probability-weighted mean only"
        ],
        "answer": 0,
        "explanation": "Case selection chooses an input or distribution; Big O is a separate bound."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Best case",
            "Minimum cost at a fixed size"
          ],
          [
            "Worst case",
            "Maximum cost at a fixed size"
          ],
          [
            "Average case",
            "Expectation under a stated distribution"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "For fixed n=6, three input costs are n,2n,5n. What is the best cost?",
        "answer": 6,
        "explanation": "Take the smallest of the three stated costs.",
        "tolerance": 1e-8
      },
      {
        "type": "number",
        "prompt": "What is the worst cost under that same cost list?",
        "answer": 30,
        "explanation": "Take the largest stated cost.",
        "tolerance": 1e-8
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "cases",
    "start": 0.34,
    "sourceReferences": [
      {
        "lecture": 33,
        "file": "033. DS Videos_ 7b. More about Best Case, Worst Case.mp4",
        "start": 0.34,
        "end": 28.66,
        "text": "Hi everyone. Let us now look at this best case worst case in bit more detail. So whatever we are going to see now, it is it's basically from algorithms chapter. So in the algorithm course, you are again going to see the exact same video. Okay. But I feel that it is necessary and it is also beneficial to put this particular video in the data structures also. Okay. So anyway, like you will see all of these in the algorithm as I repeatedly saying, but"
      },
      {
        "lecture": 33,
        "file": "033. DS Videos_ 7b. More about Best Case, Worst Case.mp4",
        "start": 28.83,
        "end": 63.81,
        "text": "still let's just look at this batch case first case again in this data structures. Okay, so let's get it started. So what do I mean when I say that it is a best case? It means that suppose my algo takes order of n on just one input, just one input, and for remaining input, let's take anything else, maybe four, let me just write four remaining."
      },
      {
        "lecture": 33,
        "file": "033. DS Videos_ 7b. More about Best Case, Worst Case.mp4",
        "start": 67.5,
        "end": 102.28,
        "text": "inputs may be order of n square, then also just for one input is enough to say that the best case is order of n, then also I will say the best case time complexity is order of n. So, see here even on one input you are taking order of n and all other inputs are you are taking order of n square, then the best case time complexity is order of n. So, this is order of n, this is the typo, this is order of n."
      }
    ],
    "foundation": {
      "title": "Cases and bounds answer different questions",
      "idea": "Input-case selection and asymptotic bounds answer separate questions. A best-case, worst-case or expected-cost function may each have an upper bound, lower bound and tight bound.",
      "terms": [
        "Case: how inputs of one size are selected.",
        "Bound: a growth inequality on the resulting function.",
        "Distribution: probabilities defining expected cost."
      ],
      "example": "If costs at a fixed n are n,2n,5n, the best is n and worst is 5n. Both case functions are Theta(n)."
    }
  },
  {
    "id": 100,
    "lecture": 33,
    "title": "Bound a chosen case function",
    "concept": "Input-case selection and asymptotic bounds answer separate questions. A best-case, worst-case or expected-cost function may each have an upper bound, lower bound and tight bound.",
    "teachingSteps": [
      "Select which case function is being discussed.",
      "Then state an inequality or tight class for that function.",
      "Do not identify Big O with worst case or Omega with best case by definition."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "What is needed for a numerical average-case cost?",
        "options": [
          "Only the slowest input",
          "Only an upper bound",
          "A stated probability distribution on inputs"
        ],
        "answer": 2,
        "explanation": "Different distributions can yield different expectations."
      },
      {
        "type": "number",
        "prompt": "If those three inputs are equally likely, what is the expected cost?",
        "answer": 16,
        "explanation": "Add n+2n+5n and divide by three.",
        "tolerance": 1e-8
      },
      {
        "type": "number",
        "prompt": "Every input costs between n and n^2, inclusive. For n=6, what is the lower guarantee?",
        "answer": 6,
        "explanation": "The stated floor is n.",
        "tolerance": 1e-8
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Fix the input size and allowed inputs",
          "Determine each relevant input cost",
          "Select the minimum, maximum or stated probability weights",
          "Apply a bound to the selected case function"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "cases",
    "start": 0.34,
    "sourceReferences": [
      {
        "lecture": 33,
        "file": "033. DS Videos_ 7b. More about Best Case, Worst Case.mp4",
        "start": 0.34,
        "end": 28.66,
        "text": "Hi everyone. Let us now look at this best case worst case in bit more detail. So whatever we are going to see now, it is it's basically from algorithms chapter. So in the algorithm course, you are again going to see the exact same video. Okay. But I feel that it is necessary and it is also beneficial to put this particular video in the data structures also. Okay. So anyway, like you will see all of these in the algorithm as I repeatedly saying, but"
      },
      {
        "lecture": 33,
        "file": "033. DS Videos_ 7b. More about Best Case, Worst Case.mp4",
        "start": 28.83,
        "end": 63.81,
        "text": "still let's just look at this batch case first case again in this data structures. Okay, so let's get it started. So what do I mean when I say that it is a best case? It means that suppose my algo takes order of n on just one input, just one input, and for remaining input, let's take anything else, maybe four, let me just write four remaining."
      },
      {
        "lecture": 33,
        "file": "033. DS Videos_ 7b. More about Best Case, Worst Case.mp4",
        "start": 67.5,
        "end": 102.28,
        "text": "inputs may be order of n square, then also just for one input is enough to say that the best case is order of n, then also I will say the best case time complexity is order of n. So, see here even on one input you are taking order of n and all other inputs are you are taking order of n square, then the best case time complexity is order of n. So, this is order of n, this is the typo, this is order of n."
      }
    ],
    "foundation": {
      "title": "Cases and bounds answer different questions",
      "idea": "Input-case selection and asymptotic bounds answer separate questions. A best-case, worst-case or expected-cost function may each have an upper bound, lower bound and tight bound.",
      "terms": [
        "Case: how inputs of one size are selected.",
        "Bound: a growth inequality on the resulting function.",
        "Distribution: probabilities defining expected cost."
      ],
      "example": "If costs at a fixed n are n,2n,5n, the best is n and worst is 5n. Both case functions are Theta(n)."
    }
  },
  {
    "id": 101,
    "lecture": 33,
    "title": "Reason about every input",
    "concept": "Input-case selection and asymptotic bounds answer separate questions. A best-case, worst-case or expected-cost function may each have an upper bound, lower bound and tight bound.",
    "teachingSteps": [
      "Select which case function is being discussed.",
      "Then state an inequality or tight class for that function.",
      "Do not identify Big O with worst case or Omega with best case by definition."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "If the best case is at least n operations, what follows for every input of that size?",
        "options": [
          "Every input costs less than n",
          "Every input costs at least n",
          "Every input costs exactly n"
        ],
        "answer": 1,
        "explanation": "Every input cost is no smaller than the minimum."
      },
      {
        "type": "number",
        "prompt": "What is the upper guarantee at that same input size?",
        "answer": 36,
        "explanation": "The stated ceiling is n^2.",
        "tolerance": 1e-8
      },
      {
        "type": "choice",
        "prompt": "Can a worst-case function have both Big O and Big Omega bounds?",
        "options": [
          "No; Omega can only describe best case",
          "No; O must always be tight",
          "Yes"
        ],
        "answer": 2,
        "explanation": "Any chosen case function can have upper, lower and tight bounds."
      },
      {
        "type": "number",
        "prompt": "What is the gap between the upper and lower guarantees?",
        "answer": 30,
        "explanation": "Subtract n from n^2.",
        "tolerance": 1e-8
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "cases",
    "start": 0.34,
    "sourceReferences": [
      {
        "lecture": 33,
        "file": "033. DS Videos_ 7b. More about Best Case, Worst Case.mp4",
        "start": 0.34,
        "end": 28.66,
        "text": "Hi everyone. Let us now look at this best case worst case in bit more detail. So whatever we are going to see now, it is it's basically from algorithms chapter. So in the algorithm course, you are again going to see the exact same video. Okay. But I feel that it is necessary and it is also beneficial to put this particular video in the data structures also. Okay. So anyway, like you will see all of these in the algorithm as I repeatedly saying, but"
      },
      {
        "lecture": 33,
        "file": "033. DS Videos_ 7b. More about Best Case, Worst Case.mp4",
        "start": 28.83,
        "end": 63.81,
        "text": "still let's just look at this batch case first case again in this data structures. Okay, so let's get it started. So what do I mean when I say that it is a best case? It means that suppose my algo takes order of n on just one input, just one input, and for remaining input, let's take anything else, maybe four, let me just write four remaining."
      },
      {
        "lecture": 33,
        "file": "033. DS Videos_ 7b. More about Best Case, Worst Case.mp4",
        "start": 67.5,
        "end": 102.28,
        "text": "inputs may be order of n square, then also just for one input is enough to say that the best case is order of n, then also I will say the best case time complexity is order of n. So, see here even on one input you are taking order of n and all other inputs are you are taking order of n square, then the best case time complexity is order of n. So, this is order of n, this is the typo, this is order of n."
      }
    ],
    "foundation": {
      "title": "Cases and bounds answer different questions",
      "idea": "Input-case selection and asymptotic bounds answer separate questions. A best-case, worst-case or expected-cost function may each have an upper bound, lower bound and tight bound.",
      "terms": [
        "Case: how inputs of one size are selected.",
        "Bound: a growth inequality on the resulting function.",
        "Distribution: probabilities defining expected cost."
      ],
      "example": "If costs at a fixed n are n,2n,5n, the best is n and worst is 5n. Both case functions are Theta(n)."
    }
  },
  {
    "id": 102,
    "lecture": 34,
    "title": "Apply a worst-case ceiling",
    "concept": "A worst-case ceiling limits every input of that size, and a best-case floor applies to every input of that size. These bounds alone need not determine a tight average-case class.",
    "teachingSteps": [
      "Place each actual input cost between the best and worst costs.",
      "Apply the given lower and upper bounds to that interval.",
      "Do not invent an input distribution or a tight bound that was not given."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which defines worst case at a fixed input size?",
        "options": [
          "Big O by definition",
          "The probability-weighted mean only",
          "The maximum cost among inputs of that size"
        ],
        "answer": 2,
        "explanation": "Case selection chooses an input or distribution; Big O is a separate bound."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Best case",
            "Minimum cost at a fixed size"
          ],
          [
            "Worst case",
            "Maximum cost at a fixed size"
          ],
          [
            "Average case",
            "Expectation under a stated distribution"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "For fixed n=7, three input costs are n,2n,5n. What is the best cost?",
        "answer": 7,
        "explanation": "Take the smallest of the three stated costs.",
        "tolerance": 1e-8
      },
      {
        "type": "number",
        "prompt": "What is the worst cost under that same cost list?",
        "answer": 35,
        "explanation": "Take the largest stated cost.",
        "tolerance": 1e-8
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "cases",
    "start": 0.02,
    "sourceReferences": [
      {
        "lecture": 34,
        "file": "034. DS Videos_ 7c. Questions on Algorithmic notations.mp4",
        "start": 0.02,
        "end": 30.05,
        "text": "Now let's try to solve the questions that we have left to last time So they are saying that big O and big omega both can be used as upper bound and lower bound for worst case Yes for best case both can be used for best case both can be used for every case both can be used, right? So there is no problem, which means there is no even association between big O big omega like that to the cases So that is why this is true. This is true. This is true. There should not be any issue in this Now this question we have already solved"
      },
      {
        "lecture": 34,
        "file": "034. DS Videos_ 7c. Questions on Algorithmic notations.mp4",
        "start": 30.43,
        "end": 55.79,
        "text": "which means like I have not proposed this as a question but we have already solved in couple of pieces. So, if you if you just recall then I think I have solved this in couple of pieces maybe here like that right. Now, if you if you just try to solve this again you might have got the idea. So, here I am saying that if an algorithm worst case time complexity is big of n square which means I am saying in worst case if I am taking less than equal to n square can I say in all the cases yes I can say"
      },
      {
        "lecture": 34,
        "file": "034. DS Videos_ 7c. Questions on Algorithmic notations.mp4",
        "start": 56.55,
        "end": 85.01,
        "text": "If an algorithm time complexity, best case time complexity, which means in best case I am taking less than equal to n square, can I say in all the cases, no, maybe in worst case I may be taking, may be taking more, so that's why this is wrong. If an algorithm best case time complexity is, is big omega of n square, which means is greater than equal to n square, in best case, in best case I am taking greater than equal to n square, in best case at least I am taking n square, then can I say in all the cases I am taking n square, yes I can say, so that is why this is true."
      }
    ],
    "foundation": {
      "title": "Reasoning from best and worst bounds",
      "idea": "A worst-case ceiling limits every input of that size, and a best-case floor applies to every input of that size. These bounds alone need not determine a tight average-case class.",
      "terms": [
        "Ceiling: an upper guarantee.",
        "Floor: a lower guarantee.",
        "Unknown average: no distribution or tight result has been specified."
      ],
      "example": "If every size-n input costs between n and n^2 operations, both n and n^2 are possible costs; no unique expected cost follows."
    }
  },
  {
    "id": 103,
    "lecture": 34,
    "title": "Apply a best-case floor",
    "concept": "A worst-case ceiling limits every input of that size, and a best-case floor applies to every input of that size. These bounds alone need not determine a tight average-case class.",
    "teachingSteps": [
      "Place each actual input cost between the best and worst costs.",
      "Apply the given lower and upper bounds to that interval.",
      "Do not invent an input distribution or a tight bound that was not given."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "What is needed for a numerical average-case cost?",
        "options": [
          "Only an upper bound",
          "A stated probability distribution on inputs",
          "Only the slowest input"
        ],
        "answer": 1,
        "explanation": "Different distributions can yield different expectations."
      },
      {
        "type": "number",
        "prompt": "If those three inputs are equally likely, what is the expected cost? Round to 2 decimal places.",
        "answer": 18.67,
        "explanation": "Add n+2n+5n and divide by three. To two decimal places, the result is 18.67.",
        "tolerance": 0.005
      },
      {
        "type": "number",
        "prompt": "Every input costs between n and n^2, inclusive. For n=7, what is the lower guarantee?",
        "answer": 7,
        "explanation": "The stated floor is n.",
        "tolerance": 1e-8
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Fix the input size and allowed inputs",
          "Determine each relevant input cost",
          "Select the minimum, maximum or stated probability weights",
          "Apply a bound to the selected case function"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "cases",
    "start": 0.02,
    "sourceReferences": [
      {
        "lecture": 34,
        "file": "034. DS Videos_ 7c. Questions on Algorithmic notations.mp4",
        "start": 0.02,
        "end": 30.05,
        "text": "Now let's try to solve the questions that we have left to last time So they are saying that big O and big omega both can be used as upper bound and lower bound for worst case Yes for best case both can be used for best case both can be used for every case both can be used, right? So there is no problem, which means there is no even association between big O big omega like that to the cases So that is why this is true. This is true. This is true. There should not be any issue in this Now this question we have already solved"
      },
      {
        "lecture": 34,
        "file": "034. DS Videos_ 7c. Questions on Algorithmic notations.mp4",
        "start": 30.43,
        "end": 55.79,
        "text": "which means like I have not proposed this as a question but we have already solved in couple of pieces. So, if you if you just recall then I think I have solved this in couple of pieces maybe here like that right. Now, if you if you just try to solve this again you might have got the idea. So, here I am saying that if an algorithm worst case time complexity is big of n square which means I am saying in worst case if I am taking less than equal to n square can I say in all the cases yes I can say"
      },
      {
        "lecture": 34,
        "file": "034. DS Videos_ 7c. Questions on Algorithmic notations.mp4",
        "start": 56.55,
        "end": 85.01,
        "text": "If an algorithm time complexity, best case time complexity, which means in best case I am taking less than equal to n square, can I say in all the cases, no, maybe in worst case I may be taking, may be taking more, so that's why this is wrong. If an algorithm best case time complexity is, is big omega of n square, which means is greater than equal to n square, in best case, in best case I am taking greater than equal to n square, in best case at least I am taking n square, then can I say in all the cases I am taking n square, yes I can say, so that is why this is true."
      }
    ],
    "foundation": {
      "title": "Reasoning from best and worst bounds",
      "idea": "A worst-case ceiling limits every input of that size, and a best-case floor applies to every input of that size. These bounds alone need not determine a tight average-case class.",
      "terms": [
        "Ceiling: an upper guarantee.",
        "Floor: a lower guarantee.",
        "Unknown average: no distribution or tight result has been specified."
      ],
      "example": "If every size-n input costs between n and n^2 operations, both n and n^2 are possible costs; no unique expected cost follows."
    }
  },
  {
    "id": 104,
    "lecture": 34,
    "title": "Identify what is still unknown",
    "concept": "A worst-case ceiling limits every input of that size, and a best-case floor applies to every input of that size. These bounds alone need not determine a tight average-case class.",
    "teachingSteps": [
      "Place each actual input cost between the best and worst costs.",
      "Apply the given lower and upper bounds to that interval.",
      "Do not invent an input distribution or a tight bound that was not given."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "If the best case is at least n operations, what follows for every input of that size?",
        "options": [
          "Every input costs at least n",
          "Every input costs exactly n",
          "Every input costs less than n"
        ],
        "answer": 0,
        "explanation": "Every input cost is no smaller than the minimum."
      },
      {
        "type": "number",
        "prompt": "What is the upper guarantee at that same input size?",
        "answer": 49,
        "explanation": "The stated ceiling is n^2.",
        "tolerance": 1e-8
      },
      {
        "type": "choice",
        "prompt": "Can a worst-case function have both Big O and Big Omega bounds?",
        "options": [
          "No; O must always be tight",
          "Yes",
          "No; Omega can only describe best case"
        ],
        "answer": 1,
        "explanation": "Any chosen case function can have upper, lower and tight bounds."
      },
      {
        "type": "number",
        "prompt": "What is the gap between the upper and lower guarantees?",
        "answer": 42,
        "explanation": "Subtract n from n^2.",
        "tolerance": 1e-8
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "cases",
    "start": 0.02,
    "sourceReferences": [
      {
        "lecture": 34,
        "file": "034. DS Videos_ 7c. Questions on Algorithmic notations.mp4",
        "start": 0.02,
        "end": 30.05,
        "text": "Now let's try to solve the questions that we have left to last time So they are saying that big O and big omega both can be used as upper bound and lower bound for worst case Yes for best case both can be used for best case both can be used for every case both can be used, right? So there is no problem, which means there is no even association between big O big omega like that to the cases So that is why this is true. This is true. This is true. There should not be any issue in this Now this question we have already solved"
      },
      {
        "lecture": 34,
        "file": "034. DS Videos_ 7c. Questions on Algorithmic notations.mp4",
        "start": 30.43,
        "end": 55.79,
        "text": "which means like I have not proposed this as a question but we have already solved in couple of pieces. So, if you if you just recall then I think I have solved this in couple of pieces maybe here like that right. Now, if you if you just try to solve this again you might have got the idea. So, here I am saying that if an algorithm worst case time complexity is big of n square which means I am saying in worst case if I am taking less than equal to n square can I say in all the cases yes I can say"
      },
      {
        "lecture": 34,
        "file": "034. DS Videos_ 7c. Questions on Algorithmic notations.mp4",
        "start": 56.55,
        "end": 85.01,
        "text": "If an algorithm time complexity, best case time complexity, which means in best case I am taking less than equal to n square, can I say in all the cases, no, maybe in worst case I may be taking, may be taking more, so that's why this is wrong. If an algorithm best case time complexity is, is big omega of n square, which means is greater than equal to n square, in best case, in best case I am taking greater than equal to n square, in best case at least I am taking n square, then can I say in all the cases I am taking n square, yes I can say, so that is why this is true."
      }
    ],
    "foundation": {
      "title": "Reasoning from best and worst bounds",
      "idea": "A worst-case ceiling limits every input of that size, and a best-case floor applies to every input of that size. These bounds alone need not determine a tight average-case class.",
      "terms": [
        "Ceiling: an upper guarantee.",
        "Floor: a lower guarantee.",
        "Unknown average: no distribution or tight result has been specified."
      ],
      "example": "If every size-n input costs between n and n^2 operations, both n and n^2 are possible costs; no unique expected cost follows."
    }
  },
  {
    "id": 105,
    "lecture": 35,
    "title": "Keep the fastest-growing term",
    "concept": "For a polynomial with positive leading coefficient, the highest power determines its tight asymptotic class. Bound constants still need to work beyond one fixed threshold; a chain of valid upper bounds is transitive.",
    "teachingSteps": [
      "Identify the highest power in the sum.",
      "Bound lower terms by multiples of that power for n>=1.",
      "Combine constants or chain compatible inequalities."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "For nonnegative functions, which statement describes Big O?",
        "options": [
          "Exact equality at every n",
          "An eventual constant-factor upper bound",
          "Only a worst-input selection"
        ],
        "answer": 1,
        "explanation": "The inequality holds after a fixed threshold."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "Big O",
            "Eventual upper bound"
          ],
          [
            "Big Omega",
            "Eventual lower bound"
          ],
          [
            "Theta",
            "Both bounds using the same growth function"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "At n=8, evaluate 7n^2+3n+8.",
        "answer": 480,
        "explanation": "Evaluate all three stated terms.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      },
      {
        "type": "number",
        "prompt": "At n=8, evaluate the lower witness 7n^2.",
        "answer": 448,
        "explanation": "The remaining terms are nonnegative.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "theta",
    "start": 67.49,
    "sourceReferences": [
      {
        "lecture": 35,
        "file": "035_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 67.49,
        "end": 92.68,
        "text": "Okay. Similarly, I mean, the C is actually greater than zero. Similarly, that is true for big omega. Similarly, that is true for theta. Okay. And there is one toolbox that we have discussed that if you are taking log, then you have to be careful, which means if after taking the log, if the function, I mean, if the logarithmic function are asymptotically greater, then you are saying the real functions are greater, right?"
      },
      {
        "lecture": 35,
        "file": "035_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 279.07,
        "end": 311.44,
        "text": "Let's take this first question which is from Stanford, but the question is I think very easy. They are saying that n square log n. So n square log n is I think if you are saying order of n, it means that order of this, I mean, if Tn is order of n, it means what? My voice is clear or there is some lag today also. Just want to confirm it. Okay. If there is lag or something, you can let me know. Okay. Cool. So is this true that Tn is less than order of n?"
      },
      {
        "lecture": 35,
        "file": "035_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 335.85,
        "end": 369.81,
        "text": "that fn is order of n if there exists some value c comma n naught greater than zero such that fn is less than equal to cgn for all n greater than equal to n naught i mean they are just rewriting the definition of this big O that is fine now they are saying which of the following is true about this definition select all that apply c and n naught cannot have the same value no there is no relation between c and n naught right so there is no relation between"
      }
    ],
    "foundation": {
      "title": "Dominant terms and transitive bounds",
      "idea": "For a polynomial with positive leading coefficient, the highest power determines its tight asymptotic class. Bound constants still need to work beyond one fixed threshold; a chain of valid upper bounds is transitive.",
      "terms": [
        "Leading term: the term with highest power.",
        "Transitive: f=O(g) and g=O(h) imply f=O(h).",
        "Witness: a constant and threshold supporting an inequality."
      ],
      "example": "For n>=1, 7n^2 <= 7n^2+3n+8 <= 18n^2, proving Theta(n^2)."
    }
  },
  {
    "id": 106,
    "lecture": 35,
    "title": "Chain compatible comparisons",
    "concept": "For a polynomial with positive leading coefficient, the highest power determines its tight asymptotic class. Bound constants still need to work beyond one fixed threshold; a chain of valid upper bounds is transitive.",
    "teachingSteps": [
      "Identify the highest power in the sum.",
      "Bound lower terms by multiples of that power for n>=1.",
      "Combine constants or chain compatible inequalities."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which growth class is tight for 3n^2+2n?",
        "options": [
          "Theta(n^2)",
          "Theta(n)",
          "Theta(1)"
        ],
        "answer": 0,
        "explanation": "The quadratic term dominates, and positive upper and lower witnesses exist."
      },
      {
        "type": "number",
        "prompt": "At n=8, evaluate the upper witness 18n^2.",
        "answer": 1152,
        "explanation": "For n>=1, 3n<=3n^2 and 8<=8n^2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      },
      {
        "type": "number",
        "prompt": "In 7n^2+3n+8, what is the highest exponent of n?",
        "answer": 2,
        "explanation": "The leading term has power two.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "State the functions and their positive domain",
          "Simplify a ratio or dominant term",
          "Choose valid constants and a threshold",
          "State the resulting growth relation"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "theta",
    "start": 67.49,
    "sourceReferences": [
      {
        "lecture": 35,
        "file": "035_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 67.49,
        "end": 92.68,
        "text": "Okay. Similarly, I mean, the C is actually greater than zero. Similarly, that is true for big omega. Similarly, that is true for theta. Okay. And there is one toolbox that we have discussed that if you are taking log, then you have to be careful, which means if after taking the log, if the function, I mean, if the logarithmic function are asymptotically greater, then you are saying the real functions are greater, right?"
      },
      {
        "lecture": 35,
        "file": "035_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 279.07,
        "end": 311.44,
        "text": "Let's take this first question which is from Stanford, but the question is I think very easy. They are saying that n square log n. So n square log n is I think if you are saying order of n, it means that order of this, I mean, if Tn is order of n, it means what? My voice is clear or there is some lag today also. Just want to confirm it. Okay. If there is lag or something, you can let me know. Okay. Cool. So is this true that Tn is less than order of n?"
      },
      {
        "lecture": 35,
        "file": "035_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 335.85,
        "end": 369.81,
        "text": "that fn is order of n if there exists some value c comma n naught greater than zero such that fn is less than equal to cgn for all n greater than equal to n naught i mean they are just rewriting the definition of this big O that is fine now they are saying which of the following is true about this definition select all that apply c and n naught cannot have the same value no there is no relation between c and n naught right so there is no relation between"
      }
    ],
    "foundation": {
      "title": "Dominant terms and transitive bounds",
      "idea": "For a polynomial with positive leading coefficient, the highest power determines its tight asymptotic class. Bound constants still need to work beyond one fixed threshold; a chain of valid upper bounds is transitive.",
      "terms": [
        "Leading term: the term with highest power.",
        "Transitive: f=O(g) and g=O(h) imply f=O(h).",
        "Witness: a constant and threshold supporting an inequality."
      ],
      "example": "For n>=1, 7n^2 <= 7n^2+3n+8 <= 18n^2, proving Theta(n^2)."
    }
  },
  {
    "id": 107,
    "lecture": 35,
    "title": "Test witness constants",
    "concept": "For a polynomial with positive leading coefficient, the highest power determines its tight asymptotic class. Bound constants still need to work beyond one fixed threshold; a chain of valid upper bounds is transitive.",
    "teachingSteps": [
      "Identify the highest power in the sum.",
      "Bound lower terms by multiples of that power for n>=1.",
      "Combine constants or chain compatible inequalities."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which strict comparison is valid as n grows?",
        "options": [
          "2n is little-o of n",
          "n^2 is Theta(n)",
          "n is little-o of n^2"
        ],
        "answer": 2,
        "explanation": "The first ratio is 1/n, which tends to zero."
      },
      {
        "type": "number",
        "prompt": "At n=1, what is (7n^2+3n+8)/n^2?",
        "answer": 18,
        "explanation": "The ratio is 7+3+8.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      },
      {
        "type": "choice",
        "prompt": "Does n belonging to O(n^2) imply n is Theta(n^2)?",
        "options": [
          "No; the upper bound can be loose",
          "Yes; every upper bound is tight",
          "Only if n is even"
        ],
        "answer": 0,
        "explanation": "Theta also needs a matching lower bound."
      },
      {
        "type": "number",
        "prompt": "At n=8, how much does 18n^2 exceed 7n^2?",
        "answer": 704,
        "explanation": "Subtract the witness values.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "growth",
          "n": 16
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "theta",
    "start": 67.49,
    "sourceReferences": [
      {
        "lecture": 35,
        "file": "035_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 67.49,
        "end": 92.68,
        "text": "Okay. Similarly, I mean, the C is actually greater than zero. Similarly, that is true for big omega. Similarly, that is true for theta. Okay. And there is one toolbox that we have discussed that if you are taking log, then you have to be careful, which means if after taking the log, if the function, I mean, if the logarithmic function are asymptotically greater, then you are saying the real functions are greater, right?"
      },
      {
        "lecture": 35,
        "file": "035_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 279.07,
        "end": 311.44,
        "text": "Let's take this first question which is from Stanford, but the question is I think very easy. They are saying that n square log n. So n square log n is I think if you are saying order of n, it means that order of this, I mean, if Tn is order of n, it means what? My voice is clear or there is some lag today also. Just want to confirm it. Okay. If there is lag or something, you can let me know. Okay. Cool. So is this true that Tn is less than order of n?"
      },
      {
        "lecture": 35,
        "file": "035_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 335.85,
        "end": 369.81,
        "text": "that fn is order of n if there exists some value c comma n naught greater than zero such that fn is less than equal to cgn for all n greater than equal to n naught i mean they are just rewriting the definition of this big O that is fine now they are saying which of the following is true about this definition select all that apply c and n naught cannot have the same value no there is no relation between c and n naught right so there is no relation between"
      }
    ],
    "foundation": {
      "title": "Dominant terms and transitive bounds",
      "idea": "For a polynomial with positive leading coefficient, the highest power determines its tight asymptotic class. Bound constants still need to work beyond one fixed threshold; a chain of valid upper bounds is transitive.",
      "terms": [
        "Leading term: the term with highest power.",
        "Transitive: f=O(g) and g=O(h) imply f=O(h).",
        "Witness: a constant and threshold supporting an inequality."
      ],
      "example": "For n>=1, 7n^2 <= 7n^2+3n+8 <= 18n^2, proving Theta(n^2)."
    }
  },
  {
    "id": 108,
    "lecture": 36,
    "title": "Cancel inverse powers and logs",
    "concept": "Inverse powers and logarithms can simplify a growth expression. Use the same stated base, keep arguments positive, and compare the resulting functions rather than their visual complexity.",
    "teachingSteps": [
      "Rewrite the expression with a consistent base.",
      "Cancel only matching inverse power-log pairs.",
      "Compare the simplified growth functions for large n."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which is the correct logarithm domain for real logs?",
        "options": [
          "Argument positive; base positive and not 1",
          "Argument may be any negative value",
          "Base must always be exactly 10"
        ],
        "answer": 0,
        "explanation": "These are the real-domain conditions."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "log_b(x)",
            "Exponent that makes b^y=x"
          ],
          [
            "Product of arguments",
            "Sum of logarithms"
          ],
          [
            "Quotient of arguments",
            "Difference of logarithms"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "What is log_2(4)?",
        "answer": 2,
        "explanation": "4=2^2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 4
        }
      },
      {
        "type": "number",
        "prompt": "What is log_2(4 * 8)?",
        "answer": 5,
        "explanation": "Use the product rule: log_2(x)+3.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 4
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "log",
    "start": 70.21,
    "sourceReferences": [
      {
        "lecture": 36,
        "file": "036_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 70.21,
        "end": 100.7,
        "text": "So this is not true. So that's why we will say this is false. I think this is false. What about this? Yeah, that's nice. Let's just try solving this. This is four power log base to N, which means this is, uh, can you exchange this N and four? I mean, you can also write it N power log base to four, right? Do you recall that property that if you are having, if you are having a power log base, uh, anything, okay. B."
      },
      {
        "lecture": 36,
        "file": "036_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 101.05,
        "end": 135.75,
        "text": "then this is also b power log the same base a okay i mean you can exchange this base and exponent okay so that is why this is just n square so this is n square n square is greater than equal to n yeah that is true right that is true let's just see this c see this c option now let me go to the next page to explain this c option so suppose they are saying something like this then"
      },
      {
        "lecture": 36,
        "file": "036_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 136.09,
        "end": 168.54,
        "text": "let's just see if it is true or false see this is 2 power log base 2 log base 2 log base 2n okay what we can do here what we can do this is 2 and log base 2 will get cancelled out again so i mean this is same so you can just cancel it out so this is log log n this is just log log n i mean you can put the base legend matter this is log log n"
      }
    ],
    "foundation": {
      "title": "Transforming growth expressions",
      "idea": "Inverse powers and logarithms can simplify a growth expression. Use the same stated base, keep arguments positive, and compare the resulting functions rather than their visual complexity.",
      "terms": [
        "Inverse pair: b^(log_b x)=x.",
        "Composition: feeding one function result into another.",
        "Eventual order: an inequality beyond a threshold."
      ],
      "example": "For n>1, 2^(log_2(log_2(n)))=log_2(n), not n."
    }
  },
  {
    "id": 109,
    "lecture": 36,
    "title": "Compare polynomial and exponential work",
    "concept": "Inverse powers and logarithms can simplify a growth expression. Use the same stated base, keep arguments positive, and compare the resulting functions rather than their visual complexity.",
    "teachingSteps": [
      "Rewrite the expression with a consistent base.",
      "Cancel only matching inverse power-log pairs.",
      "Compare the simplified growth functions for large n."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which identity is generally valid for positive x,y and a valid common base?",
        "options": [
          "log(x+y)=log(x)+log(y)",
          "log(xy)=log(x)*log(y)",
          "log(xy)=log(x)+log(y)"
        ],
        "answer": 2,
        "explanation": "Products become sums, not sums of arguments."
      },
      {
        "type": "number",
        "prompt": "What is log_2(4 / 2)?",
        "answer": 1,
        "explanation": "Use the quotient rule: log_2(x)-1.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 4
        }
      },
      {
        "type": "number",
        "prompt": "What is log_4(16)?",
        "answer": 2,
        "explanation": "The argument is 4^2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 16
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Check base and argument conditions",
          "Rewrite using the matching power or log rule",
          "Simplify while retaining the stated base",
          "Evaluate the resulting expression"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "log",
    "start": 70.21,
    "sourceReferences": [
      {
        "lecture": 36,
        "file": "036_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 70.21,
        "end": 100.7,
        "text": "So this is not true. So that's why we will say this is false. I think this is false. What about this? Yeah, that's nice. Let's just try solving this. This is four power log base to N, which means this is, uh, can you exchange this N and four? I mean, you can also write it N power log base to four, right? Do you recall that property that if you are having, if you are having a power log base, uh, anything, okay. B."
      },
      {
        "lecture": 36,
        "file": "036_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 101.05,
        "end": 135.75,
        "text": "then this is also b power log the same base a okay i mean you can exchange this base and exponent okay so that is why this is just n square so this is n square n square is greater than equal to n yeah that is true right that is true let's just see this c see this c option now let me go to the next page to explain this c option so suppose they are saying something like this then"
      },
      {
        "lecture": 36,
        "file": "036_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 136.09,
        "end": 168.54,
        "text": "let's just see if it is true or false see this is 2 power log base 2 log base 2 log base 2n okay what we can do here what we can do this is 2 and log base 2 will get cancelled out again so i mean this is same so you can just cancel it out so this is log log n this is just log log n i mean you can put the base legend matter this is log log n"
      }
    ],
    "foundation": {
      "title": "Transforming growth expressions",
      "idea": "Inverse powers and logarithms can simplify a growth expression. Use the same stated base, keep arguments positive, and compare the resulting functions rather than their visual complexity.",
      "terms": [
        "Inverse pair: b^(log_b x)=x.",
        "Composition: feeding one function result into another.",
        "Eventual order: an inequality beyond a threshold."
      ],
      "example": "For n>1, 2^(log_2(log_2(n)))=log_2(n), not n."
    }
  },
  {
    "id": 110,
    "lecture": 36,
    "title": "Keep domain assumptions explicit",
    "concept": "Inverse powers and logarithms can simplify a growth expression. Use the same stated base, keep arguments positive, and compare the resulting functions rather than their visual complexity.",
    "teachingSteps": [
      "Rewrite the expression with a consistent base.",
      "Cancel only matching inverse power-log pairs.",
      "Compare the simplified growth functions for large n."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Where does every valid logarithm graph meet the horizontal axis?",
        "options": [
          "x=the base only",
          "x=1",
          "x=0"
        ],
        "answer": 1,
        "explanation": "log_b(1)=0."
      },
      {
        "type": "number",
        "prompt": "What is log_(1/2)(4)?",
        "answer": -2,
        "explanation": "(1/2)^(-2)=2^2.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 4
        }
      },
      {
        "type": "choice",
        "prompt": "For base 1/2, what happens to the log when its positive argument doubles?",
        "options": [
          "It increases by 1",
          "It stays unchanged",
          "It decreases by 1"
        ],
        "answer": 2,
        "explanation": "log_(1/2)(2x)=log_(1/2)(x)-1."
      },
      {
        "type": "number",
        "prompt": "For n=4>1, evaluate 2^(log_2(log_2(n))).",
        "answer": 2,
        "explanation": "The outer power and matching log cancel, leaving log_2(n).",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "log",
          "n": 4
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "log",
    "start": 70.21,
    "sourceReferences": [
      {
        "lecture": 36,
        "file": "036_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 70.21,
        "end": 100.7,
        "text": "So this is not true. So that's why we will say this is false. I think this is false. What about this? Yeah, that's nice. Let's just try solving this. This is four power log base to N, which means this is, uh, can you exchange this N and four? I mean, you can also write it N power log base to four, right? Do you recall that property that if you are having, if you are having a power log base, uh, anything, okay. B."
      },
      {
        "lecture": 36,
        "file": "036_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 101.05,
        "end": 135.75,
        "text": "then this is also b power log the same base a okay i mean you can exchange this base and exponent okay so that is why this is just n square so this is n square n square is greater than equal to n yeah that is true right that is true let's just see this c see this c option now let me go to the next page to explain this c option so suppose they are saying something like this then"
      },
      {
        "lecture": 36,
        "file": "036_Recording_LIVE_Asymptotic_Notations_Practice_Set_Discussion.mp4",
        "start": 136.09,
        "end": 168.54,
        "text": "let's just see if it is true or false see this is 2 power log base 2 log base 2 log base 2n okay what we can do here what we can do this is 2 and log base 2 will get cancelled out again so i mean this is same so you can just cancel it out so this is log log n this is just log log n i mean you can put the base legend matter this is log log n"
      }
    ],
    "foundation": {
      "title": "Transforming growth expressions",
      "idea": "Inverse powers and logarithms can simplify a growth expression. Use the same stated base, keep arguments positive, and compare the resulting functions rather than their visual complexity.",
      "terms": [
        "Inverse pair: b^(log_b x)=x.",
        "Composition: feeding one function result into another.",
        "Eventual order: an inequality beyond a threshold."
      ],
      "example": "For n>1, 2^(log_2(log_2(n)))=log_2(n), not n."
    }
  },
  {
    "id": 111,
    "lecture": 37,
    "title": "Use last-in first-out",
    "concept": "A stack exposes its most recently inserted item. With a fixed sequential input, a proposed pop sequence is possible only when each requested item can become the top through allowed pushes and pops.",
    "teachingSteps": [
      "Push input items in their fixed order.",
      "To produce an output item, push until it is on top, then pop.",
      "If it is buried below a different top and no remaining push can fix that, the proposed sequence is impossible."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which endpoint does a stack pop use?",
        "options": [
          "The oldest inserted item",
          "An arbitrary middle node by contract",
          "The most recent inserted item"
        ],
        "answer": 2,
        "explanation": "A stack is LIFO."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "push",
            "Add at the top"
          ],
          [
            "pop",
            "Remove the top"
          ],
          [
            "LIFO",
            "Most recent inserted item first"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Push 1, 2, 3, 4 in that order. What is the top payload?",
        "answer": 4,
        "explanation": "LIFO places the latest arrival on top.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "stack",
          "values": [
            1,
            2,
            3,
            4
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Pop twice from that original stack. How many items remain?",
        "answer": 2,
        "explanation": "Remove two items from n.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "stack",
          "values": [
            1,
            2,
            3,
            4
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "stack",
    "start": 0.34,
    "sourceReferences": [
      {
        "lecture": 37,
        "file": "037. 8a. Introduction to Stack and Stack Permutations.mp4",
        "start": 0.34,
        "end": 31.19,
        "text": "So in this video we are going to discuss stacks But before that let me give you one definition which is of abstract data type So what is abstract is basically if we are hiding something then we call that we are talking in abstract terms okay abstract means hiding something right now what we are hiding in terms of data structures is that the implementation so"
      },
      {
        "lecture": 37,
        "file": "037. 8a. Introduction to Stack and Stack Permutations.mp4",
        "start": 31.49,
        "end": 57.85,
        "text": "whenever we say that we need these these operations let's suppose we need push we need pop or something like we need some some operation some list of operation whenever we say something like this and we do not care about the actual implementation that how we are actually going to implement these functions then we say that this is abstract data type so an abstract data type specify the operation that can be performed on the collection of items"
      },
      {
        "lecture": 37,
        "file": "037. 8a. Introduction to Stack and Stack Permutations.mp4",
        "start": 58.54,
        "end": 81.42,
        "text": "It's abstract because it doesn't specify that how ADT will be implemented. A given abstract data type can have multiple implementation, which means we are going to see stacks and queues and these things. So stack for particular example can be implemented using array or can be implemented using linked list or there could be some other means also. So we do not care actually."
      }
    ],
    "foundation": {
      "title": "Stacks and possible pop sequences",
      "idea": "A stack exposes its most recently inserted item. With a fixed sequential input, a proposed pop sequence is possible only when each requested item can become the top through allowed pushes and pops.",
      "terms": [
        "LIFO: last in, first out.",
        "Top: the only accessible removal endpoint.",
        "Underflow: attempting to pop an empty stack."
      ],
      "example": "For input 1,2,3, output 2,1,3 is possible. Output 3,1,2 is blocked by 2 after popping 3."
    }
  },
  {
    "id": 112,
    "lecture": 37,
    "title": "Simulate a proposed output sequence",
    "concept": "A stack exposes its most recently inserted item. With a fixed sequential input, a proposed pop sequence is possible only when each requested item can become the top through allowed pushes and pops.",
    "teachingSteps": [
      "Push input items in their fixed order.",
      "To produce an output item, push until it is on top, then pop.",
      "If it is buried below a different top and no remaining push can fix that, the proposed sequence is impossible."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Sequential input is 1,2,3 through one stack. Which pop sequence is impossible?",
        "options": [
          "1,2,3",
          "3,1,2",
          "2,1,3"
        ],
        "answer": 1,
        "explanation": "After producing 3, the top is 2, which blocks 1."
      },
      {
        "type": "number",
        "prompt": "After those two pops, what is the top payload?",
        "answer": 2,
        "explanation": "The remaining top is the latest surviving arrival.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "stack",
          "values": [
            1,
            2,
            3,
            4
          ]
        }
      },
      {
        "type": "number",
        "prompt": "An array stack starts top=-1. After 4 pushes, what is top?",
        "answer": 3,
        "explanation": "The zero-based last occupied index is length-1.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "stack",
          "values": [
            1,
            2,
            3,
            4
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Check that capacity permits insertion",
          "Advance the top to the next free slot",
          "Write the new payload at that slot",
          "Treat that slot as the current top"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "stack",
    "start": 0.34,
    "sourceReferences": [
      {
        "lecture": 37,
        "file": "037. 8a. Introduction to Stack and Stack Permutations.mp4",
        "start": 0.34,
        "end": 31.19,
        "text": "So in this video we are going to discuss stacks But before that let me give you one definition which is of abstract data type So what is abstract is basically if we are hiding something then we call that we are talking in abstract terms okay abstract means hiding something right now what we are hiding in terms of data structures is that the implementation so"
      },
      {
        "lecture": 37,
        "file": "037. 8a. Introduction to Stack and Stack Permutations.mp4",
        "start": 31.49,
        "end": 57.85,
        "text": "whenever we say that we need these these operations let's suppose we need push we need pop or something like we need some some operation some list of operation whenever we say something like this and we do not care about the actual implementation that how we are actually going to implement these functions then we say that this is abstract data type so an abstract data type specify the operation that can be performed on the collection of items"
      },
      {
        "lecture": 37,
        "file": "037. 8a. Introduction to Stack and Stack Permutations.mp4",
        "start": 58.54,
        "end": 81.42,
        "text": "It's abstract because it doesn't specify that how ADT will be implemented. A given abstract data type can have multiple implementation, which means we are going to see stacks and queues and these things. So stack for particular example can be implemented using array or can be implemented using linked list or there could be some other means also. So we do not care actually."
      }
    ],
    "foundation": {
      "title": "Stacks and possible pop sequences",
      "idea": "A stack exposes its most recently inserted item. With a fixed sequential input, a proposed pop sequence is possible only when each requested item can become the top through allowed pushes and pops.",
      "terms": [
        "LIFO: last in, first out.",
        "Top: the only accessible removal endpoint.",
        "Underflow: attempting to pop an empty stack."
      ],
      "example": "For input 1,2,3, output 2,1,3 is possible. Output 3,1,2 is blocked by 2 after popping 3."
    }
  },
  {
    "id": 113,
    "lecture": 37,
    "title": "Recognize a blocked top item",
    "concept": "A stack exposes its most recently inserted item. With a fixed sequential input, a proposed pop sequence is possible only when each requested item can become the top through allowed pushes and pops.",
    "teachingSteps": [
      "Push input items in their fixed order.",
      "To produce an output item, push until it is on top, then pop.",
      "If it is buried below a different top and no remaining push can fix that, the proposed sequence is impossible."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "An array stack uses top=-1 for empty and has capacity C. When is it full?",
        "options": [
          "top==C-1",
          "top==-1",
          "top==C with the write already done"
        ],
        "answer": 0,
        "explanation": "The last valid array position is C-1."
      },
      {
        "type": "number",
        "prompt": "An array has capacity 6 and holds 4 stack items. How many unused slots remain?",
        "answer": 2,
        "explanation": "Capacity minus occupied length.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "stack",
          "values": [
            1,
            2,
            3,
            4
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "Which endpoint does a queue dequeue use?",
        "options": [
          "Any index without restriction",
          "The oldest waiting item at the front",
          "The most recent item at the rear"
        ],
        "answer": 1,
        "explanation": "A queue is FIFO."
      },
      {
        "type": "number",
        "prompt": "Push all 4 items, then pop all 4. How many push/pop operations occur in total?",
        "answer": 8,
        "explanation": "There are n pushes and n pops.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "stack",
          "values": [
            1,
            2,
            3,
            4
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "stack",
    "start": 0.34,
    "sourceReferences": [
      {
        "lecture": 37,
        "file": "037. 8a. Introduction to Stack and Stack Permutations.mp4",
        "start": 0.34,
        "end": 31.19,
        "text": "So in this video we are going to discuss stacks But before that let me give you one definition which is of abstract data type So what is abstract is basically if we are hiding something then we call that we are talking in abstract terms okay abstract means hiding something right now what we are hiding in terms of data structures is that the implementation so"
      },
      {
        "lecture": 37,
        "file": "037. 8a. Introduction to Stack and Stack Permutations.mp4",
        "start": 31.49,
        "end": 57.85,
        "text": "whenever we say that we need these these operations let's suppose we need push we need pop or something like we need some some operation some list of operation whenever we say something like this and we do not care about the actual implementation that how we are actually going to implement these functions then we say that this is abstract data type so an abstract data type specify the operation that can be performed on the collection of items"
      },
      {
        "lecture": 37,
        "file": "037. 8a. Introduction to Stack and Stack Permutations.mp4",
        "start": 58.54,
        "end": 81.42,
        "text": "It's abstract because it doesn't specify that how ADT will be implemented. A given abstract data type can have multiple implementation, which means we are going to see stacks and queues and these things. So stack for particular example can be implemented using array or can be implemented using linked list or there could be some other means also. So we do not care actually."
      }
    ],
    "foundation": {
      "title": "Stacks and possible pop sequences",
      "idea": "A stack exposes its most recently inserted item. With a fixed sequential input, a proposed pop sequence is possible only when each requested item can become the top through allowed pushes and pops.",
      "terms": [
        "LIFO: last in, first out.",
        "Top: the only accessible removal endpoint.",
        "Underflow: attempting to pop an empty stack."
      ],
      "example": "For input 1,2,3, output 2,1,3 is possible. Output 3,1,2 is blocked by 2 after popping 3."
    }
  },
  {
    "id": 114,
    "lecture": 38,
    "title": "Track an array top index",
    "concept": "An array stack tracks its last occupied index; here an empty stack has top=-1. A linked stack can use head as its top. Both implementations must check empty or full conditions before unsafe access.",
    "teachingSteps": [
      "For an array push, check capacity and increment top before writing.",
      "For pop, retain a[top] and then decrement top.",
      "For linked pop, preserve head->next before releasing the old head."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which endpoint does a stack pop use?",
        "options": [
          "An arbitrary middle node by contract",
          "The most recent inserted item",
          "The oldest inserted item"
        ],
        "answer": 1,
        "explanation": "A stack is LIFO."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "push",
            "Add at the top"
          ],
          [
            "pop",
            "Remove the top"
          ],
          [
            "LIFO",
            "Most recent inserted item first"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Push 1, 2, 3, 4, 5 in that order. What is the top payload?",
        "answer": 5,
        "explanation": "LIFO places the latest arrival on top.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "stack",
          "values": [
            1,
            2,
            3,
            4,
            5
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Pop twice from that original stack. How many items remain?",
        "answer": 3,
        "explanation": "Remove two items from n.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "stack",
          "values": [
            1,
            2,
            3,
            4,
            5
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "stack-array",
    "start": 0.5,
    "sourceReferences": [
      {
        "lecture": 38,
        "file": "038. 8b. Implementation of Stack using Array and Linked list.mp4",
        "start": 0.5,
        "end": 24.96,
        "text": "Now, let's see how we can implement a stack. There are two methods. One is array-based implementation, another is linked-based implementation. Let's see both of them. So, first one is array-based implementation. Let's go over this implementation. So, suppose an array is given to you, you want to treat this array as a stack, which means that you want just one end to be accessible of this array."
      },
      {
        "lecture": 38,
        "file": "038. 8b. Implementation of Stack using Array and Linked list.mp4",
        "start": 26.43,
        "end": 54.37,
        "text": "this array is given to you, you want to treat this array as an stack so you will treat this array like this which means if someone asks you that okay pop from this array you will just say that okay this one will get popped and then you will return this one then your top will be pointing here something like this right so this is actually just a picture we will see the code in a while right so the idea is that like underlying implementation will be array only but you will think this array as an stack which means you will think of this diagram okay"
      },
      {
        "lecture": 38,
        "file": "038. 8b. Implementation of Stack using Array and Linked list.mp4",
        "start": 54.62,
        "end": 76.56,
        "text": "like this diagram will be implemented using step using array. So, basically we will say that let us suppose this array is having some capacity which may be a capital N or maybe some number. Then we will say that let me declare an array of this capacity of N and we will declare an integer which is a top. Top will always pointing to"
      }
    ],
    "foundation": {
      "title": "Implementing a stack",
      "idea": "An array stack tracks its last occupied index; here an empty stack has top=-1. A linked stack can use head as its top. Both implementations must check empty or full conditions before unsafe access.",
      "terms": [
        "Capacity: the number of allocated array slots.",
        "top=-1: the stated empty-array convention.",
        "Overflow: pushing beyond fixed capacity."
      ],
      "example": "After two pushes, top is 1. A pop returns slot 1 and changes top to 0; the first pushed value remains."
    }
  },
  {
    "id": 115,
    "lecture": 38,
    "title": "Check capacity before pushing",
    "concept": "An array stack tracks its last occupied index; here an empty stack has top=-1. A linked stack can use head as its top. Both implementations must check empty or full conditions before unsafe access.",
    "teachingSteps": [
      "For an array push, check capacity and increment top before writing.",
      "For pop, retain a[top] and then decrement top.",
      "For linked pop, preserve head->next before releasing the old head."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Sequential input is 1,2,3 through one stack. Which pop sequence is impossible?",
        "options": [
          "3,1,2",
          "2,1,3",
          "1,2,3"
        ],
        "answer": 0,
        "explanation": "After producing 3, the top is 2, which blocks 1."
      },
      {
        "type": "number",
        "prompt": "After those two pops, what is the top payload?",
        "answer": 3,
        "explanation": "The remaining top is the latest surviving arrival.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "stack",
          "values": [
            1,
            2,
            3,
            4,
            5
          ]
        }
      },
      {
        "type": "number",
        "prompt": "An array stack starts top=-1. After 5 pushes, what is top?",
        "answer": 4,
        "explanation": "The zero-based last occupied index is length-1.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "stack",
          "values": [
            1,
            2,
            3,
            4,
            5
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Check that capacity permits insertion",
          "Advance the top to the next free slot",
          "Write the new payload at that slot",
          "Treat that slot as the current top"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "stack-array",
    "start": 0.5,
    "sourceReferences": [
      {
        "lecture": 38,
        "file": "038. 8b. Implementation of Stack using Array and Linked list.mp4",
        "start": 0.5,
        "end": 24.96,
        "text": "Now, let's see how we can implement a stack. There are two methods. One is array-based implementation, another is linked-based implementation. Let's see both of them. So, first one is array-based implementation. Let's go over this implementation. So, suppose an array is given to you, you want to treat this array as a stack, which means that you want just one end to be accessible of this array."
      },
      {
        "lecture": 38,
        "file": "038. 8b. Implementation of Stack using Array and Linked list.mp4",
        "start": 26.43,
        "end": 54.37,
        "text": "this array is given to you, you want to treat this array as an stack so you will treat this array like this which means if someone asks you that okay pop from this array you will just say that okay this one will get popped and then you will return this one then your top will be pointing here something like this right so this is actually just a picture we will see the code in a while right so the idea is that like underlying implementation will be array only but you will think this array as an stack which means you will think of this diagram okay"
      },
      {
        "lecture": 38,
        "file": "038. 8b. Implementation of Stack using Array and Linked list.mp4",
        "start": 54.62,
        "end": 76.56,
        "text": "like this diagram will be implemented using step using array. So, basically we will say that let us suppose this array is having some capacity which may be a capital N or maybe some number. Then we will say that let me declare an array of this capacity of N and we will declare an integer which is a top. Top will always pointing to"
      }
    ],
    "foundation": {
      "title": "Implementing a stack",
      "idea": "An array stack tracks its last occupied index; here an empty stack has top=-1. A linked stack can use head as its top. Both implementations must check empty or full conditions before unsafe access.",
      "terms": [
        "Capacity: the number of allocated array slots.",
        "top=-1: the stated empty-array convention.",
        "Overflow: pushing beyond fixed capacity."
      ],
      "example": "After two pushes, top is 1. A pop returns slot 1 and changes top to 0; the first pushed value remains."
    }
  },
  {
    "id": 116,
    "lecture": 38,
    "title": "Use a linked head as the top",
    "concept": "An array stack tracks its last occupied index; here an empty stack has top=-1. A linked stack can use head as its top. Both implementations must check empty or full conditions before unsafe access.",
    "teachingSteps": [
      "For an array push, check capacity and increment top before writing.",
      "For pop, retain a[top] and then decrement top.",
      "For linked pop, preserve head->next before releasing the old head."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "An array stack uses top=-1 for empty and has capacity C. When is it full?",
        "options": [
          "top==-1",
          "top==C with the write already done",
          "top==C-1"
        ],
        "answer": 2,
        "explanation": "The last valid array position is C-1."
      },
      {
        "type": "number",
        "prompt": "An array has capacity 7 and holds 5 stack items. How many unused slots remain?",
        "answer": 2,
        "explanation": "Capacity minus occupied length.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "stack",
          "values": [
            1,
            2,
            3,
            4,
            5
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "Which endpoint does a queue dequeue use?",
        "options": [
          "The oldest waiting item at the front",
          "The most recent item at the rear",
          "Any index without restriction"
        ],
        "answer": 0,
        "explanation": "A queue is FIFO."
      },
      {
        "type": "number",
        "prompt": "Push all 5 items, then pop all 5. How many push/pop operations occur in total?",
        "answer": 10,
        "explanation": "There are n pushes and n pops.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "stack",
          "values": [
            1,
            2,
            3,
            4,
            5
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "stack-array",
    "start": 0.5,
    "sourceReferences": [
      {
        "lecture": 38,
        "file": "038. 8b. Implementation of Stack using Array and Linked list.mp4",
        "start": 0.5,
        "end": 24.96,
        "text": "Now, let's see how we can implement a stack. There are two methods. One is array-based implementation, another is linked-based implementation. Let's see both of them. So, first one is array-based implementation. Let's go over this implementation. So, suppose an array is given to you, you want to treat this array as a stack, which means that you want just one end to be accessible of this array."
      },
      {
        "lecture": 38,
        "file": "038. 8b. Implementation of Stack using Array and Linked list.mp4",
        "start": 26.43,
        "end": 54.37,
        "text": "this array is given to you, you want to treat this array as an stack so you will treat this array like this which means if someone asks you that okay pop from this array you will just say that okay this one will get popped and then you will return this one then your top will be pointing here something like this right so this is actually just a picture we will see the code in a while right so the idea is that like underlying implementation will be array only but you will think this array as an stack which means you will think of this diagram okay"
      },
      {
        "lecture": 38,
        "file": "038. 8b. Implementation of Stack using Array and Linked list.mp4",
        "start": 54.62,
        "end": 76.56,
        "text": "like this diagram will be implemented using step using array. So, basically we will say that let us suppose this array is having some capacity which may be a capital N or maybe some number. Then we will say that let me declare an array of this capacity of N and we will declare an integer which is a top. Top will always pointing to"
      }
    ],
    "foundation": {
      "title": "Implementing a stack",
      "idea": "An array stack tracks its last occupied index; here an empty stack has top=-1. A linked stack can use head as its top. Both implementations must check empty or full conditions before unsafe access.",
      "terms": [
        "Capacity: the number of allocated array slots.",
        "top=-1: the stated empty-array convention.",
        "Overflow: pushing beyond fixed capacity."
      ],
      "example": "After two pushes, top is 1. A pop returns slot 1 and changes top to 0; the first pushed value remains."
    }
  },
  {
    "id": 117,
    "lecture": 39,
    "title": "Separate front and rear roles",
    "concept": "A queue removes the oldest waiting item: enqueue adds at the rear and dequeue removes at the front. The contract differs from a stack regardless of the chosen implementation.",
    "teachingSteps": [
      "Write arrivals in their chronological order.",
      "Each dequeue serves the current front; each enqueue extends the rear.",
      "To reverse order using a stack, dequeue all into it, then pop all back into the queue."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Which endpoint does a stack pop use?",
        "options": [
          "The most recent inserted item",
          "The oldest inserted item",
          "An arbitrary middle node by contract"
        ],
        "answer": 0,
        "explanation": "A stack is LIFO."
      },
      {
        "type": "match",
        "prompt": "Connect each term to its meaning.",
        "pairs": [
          [
            "enqueue",
            "Add at the rear"
          ],
          [
            "dequeue",
            "Remove at the front"
          ],
          [
            "FIFO",
            "Oldest waiting item first"
          ]
        ],
        "explanation": "Use the stated definitions to distinguish each role."
      },
      {
        "type": "number",
        "prompt": "Enqueue 1, 2, 3, 4, 5, 6 in that order. What value does the first dequeue return?",
        "answer": 1,
        "explanation": "FIFO returns the earliest insertion.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "queue",
          "values": [
            1,
            2,
            3,
            4,
            5,
            6
          ]
        }
      },
      {
        "type": "number",
        "prompt": "After one dequeue, how many items remain?",
        "answer": 5,
        "explanation": "One item was removed.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "queue",
          "values": [
            1,
            2,
            3,
            4,
            5,
            6
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "queue",
    "start": 0.21,
    "sourceReferences": [
      {
        "lecture": 39,
        "file": "039. 9a. Introduction to Queue.mp4",
        "start": 0.21,
        "end": 24.64,
        "text": "Hi, everyone. So now we are going to start queues. We have already seen how stack works. So in this lecture, we are going to see how queue works. So there is a subtle difference between stack and queue. Let's just see that. But before that, we will start with the motivation that why we are needing queue. Okay. So sometimes it is also desirable to access the element which got inserted first, which means that"
      },
      {
        "lecture": 39,
        "file": "039. 9a. Introduction to Queue.mp4",
        "start": 164.97,
        "end": 193.93,
        "text": "let's suppose this is packet number one and then you are sending packet number two like that right if you are sending packets then you want let's suppose there is some router in between them and then you want these packets to be stored in this router so this router will store these packets in a queue which means whenever the router wants to send the packet then router will send first packet first and then the second packet next router will not send the second packet first if router has to store all of this in the stack then router will send the second packet first"
      },
      {
        "lecture": 39,
        "file": "039. 9a. Introduction to Queue.mp4",
        "start": 194.09,
        "end": 212.15,
        "text": "But if the router is storing in the queue, then router will send the first packet first. So there are many applications in networking, in call center, phone, phone system. Let's suppose there are many calls are coming and they want to arrange all the calls in the queue. Then the best mechanism to use is basically queue."
      }
    ],
    "foundation": {
      "title": "Queues and first-in first-out",
      "idea": "A queue removes the oldest waiting item: enqueue adds at the rear and dequeue removes at the front. The contract differs from a stack regardless of the chosen implementation.",
      "terms": [
        "FIFO: first in, first out.",
        "Front: the next removal endpoint.",
        "Rear: the most recent insertion endpoint."
      ],
      "example": "Enqueue 3,6,9, then dequeue once: 3 leaves and the queue is 6,9 from front to rear."
    }
  },
  {
    "id": 118,
    "lecture": 39,
    "title": "Trace enqueue and dequeue",
    "concept": "A queue removes the oldest waiting item: enqueue adds at the rear and dequeue removes at the front. The contract differs from a stack regardless of the chosen implementation.",
    "teachingSteps": [
      "Write arrivals in their chronological order.",
      "Each dequeue serves the current front; each enqueue extends the rear.",
      "To reverse order using a stack, dequeue all into it, then pop all back into the queue."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "Sequential input is 1,2,3 through one stack. Which pop sequence is impossible?",
        "options": [
          "2,1,3",
          "1,2,3",
          "3,1,2"
        ],
        "answer": 2,
        "explanation": "After producing 3, the top is 2, which blocks 1."
      },
      {
        "type": "number",
        "prompt": "After one dequeue, what is the rear payload?",
        "answer": 6,
        "explanation": "The latest initial insertion remains at the rear.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "queue",
          "values": [
            1,
            2,
            3,
            4,
            5,
            6
          ]
        }
      },
      {
        "type": "number",
        "prompt": "Dequeue twice, then enqueue 99. How many items now wait?",
        "answer": 5,
        "explanation": "Start with n, remove two, add one.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "queue",
          "values": [
            1,
            2,
            3,
            4,
            5,
            6
          ]
        }
      },
      {
        "type": "order",
        "prompt": "Arrange the steps so each operation has the information it needs.",
        "items": [
          "Dequeue an original item",
          "Push that item into the temporary stack",
          "Repeat until the original queue is empty",
          "Pop every stack item and enqueue it back"
        ],
        "explanation": "Follow the dependencies in this order."
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "queue",
    "start": 0.21,
    "sourceReferences": [
      {
        "lecture": 39,
        "file": "039. 9a. Introduction to Queue.mp4",
        "start": 0.21,
        "end": 24.64,
        "text": "Hi, everyone. So now we are going to start queues. We have already seen how stack works. So in this lecture, we are going to see how queue works. So there is a subtle difference between stack and queue. Let's just see that. But before that, we will start with the motivation that why we are needing queue. Okay. So sometimes it is also desirable to access the element which got inserted first, which means that"
      },
      {
        "lecture": 39,
        "file": "039. 9a. Introduction to Queue.mp4",
        "start": 164.97,
        "end": 193.93,
        "text": "let's suppose this is packet number one and then you are sending packet number two like that right if you are sending packets then you want let's suppose there is some router in between them and then you want these packets to be stored in this router so this router will store these packets in a queue which means whenever the router wants to send the packet then router will send first packet first and then the second packet next router will not send the second packet first if router has to store all of this in the stack then router will send the second packet first"
      },
      {
        "lecture": 39,
        "file": "039. 9a. Introduction to Queue.mp4",
        "start": 194.09,
        "end": 212.15,
        "text": "But if the router is storing in the queue, then router will send the first packet first. So there are many applications in networking, in call center, phone, phone system. Let's suppose there are many calls are coming and they want to arrange all the calls in the queue. Then the best mechanism to use is basically queue."
      }
    ],
    "foundation": {
      "title": "Queues and first-in first-out",
      "idea": "A queue removes the oldest waiting item: enqueue adds at the rear and dequeue removes at the front. The contract differs from a stack regardless of the chosen implementation.",
      "terms": [
        "FIFO: first in, first out.",
        "Front: the next removal endpoint.",
        "Rear: the most recent insertion endpoint."
      ],
      "example": "Enqueue 3,6,9, then dequeue once: 3 leaves and the queue is 6,9 from front to rear."
    }
  },
  {
    "id": 119,
    "lecture": 39,
    "title": "Reverse a queue through a stack",
    "concept": "A queue removes the oldest waiting item: enqueue adds at the rear and dequeue removes at the front. The contract differs from a stack regardless of the chosen implementation.",
    "teachingSteps": [
      "Write arrivals in their chronological order.",
      "Each dequeue serves the current front; each enqueue extends the rear.",
      "To reverse order using a stack, dequeue all into it, then pop all back into the queue."
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "An array stack uses top=-1 for empty and has capacity C. When is it full?",
        "options": [
          "top==C with the write already done",
          "top==C-1",
          "top==-1"
        ],
        "answer": 1,
        "explanation": "The last valid array position is C-1."
      },
      {
        "type": "number",
        "prompt": "In that same dequeue-twice scenario, what is the new front payload?",
        "answer": 3,
        "explanation": "The first two arrivals were removed.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "queue",
          "values": [
            1,
            2,
            3,
            4,
            5,
            6
          ]
        }
      },
      {
        "type": "choice",
        "prompt": "Which endpoint does a queue dequeue use?",
        "options": [
          "The most recent item at the rear",
          "Any index without restriction",
          "The oldest waiting item at the front"
        ],
        "answer": 2,
        "explanation": "A queue is FIFO."
      },
      {
        "type": "number",
        "prompt": "Reverse the original queue through a stack. What payload is at the final queue front?",
        "answer": 6,
        "explanation": "Stack pops reverse the original arrival order.",
        "tolerance": 1e-8,
        "dsVisual": {
          "kind": "queue",
          "values": [
            1,
            2,
            3,
            4,
            5,
            6
          ]
        }
      }
    ],
    "minutes": 5,
    "ready": true,
    "contentVersion": 1,
    "contentStatus": "reviewed",
    "dsLab": "queue",
    "start": 0.21,
    "sourceReferences": [
      {
        "lecture": 39,
        "file": "039. 9a. Introduction to Queue.mp4",
        "start": 0.21,
        "end": 24.64,
        "text": "Hi, everyone. So now we are going to start queues. We have already seen how stack works. So in this lecture, we are going to see how queue works. So there is a subtle difference between stack and queue. Let's just see that. But before that, we will start with the motivation that why we are needing queue. Okay. So sometimes it is also desirable to access the element which got inserted first, which means that"
      },
      {
        "lecture": 39,
        "file": "039. 9a. Introduction to Queue.mp4",
        "start": 164.97,
        "end": 193.93,
        "text": "let's suppose this is packet number one and then you are sending packet number two like that right if you are sending packets then you want let's suppose there is some router in between them and then you want these packets to be stored in this router so this router will store these packets in a queue which means whenever the router wants to send the packet then router will send first packet first and then the second packet next router will not send the second packet first if router has to store all of this in the stack then router will send the second packet first"
      },
      {
        "lecture": 39,
        "file": "039. 9a. Introduction to Queue.mp4",
        "start": 194.09,
        "end": 212.15,
        "text": "But if the router is storing in the queue, then router will send the first packet first. So there are many applications in networking, in call center, phone, phone system. Let's suppose there are many calls are coming and they want to arrange all the calls in the queue. Then the best mechanism to use is basically queue."
      }
    ],
    "foundation": {
      "title": "Queues and first-in first-out",
      "idea": "A queue removes the oldest waiting item: enqueue adds at the rear and dequeue removes at the front. The contract differs from a stack regardless of the chosen implementation.",
      "terms": [
        "FIFO: first in, first out.",
        "Front: the next removal endpoint.",
        "Rear: the most recent insertion endpoint."
      ],
      "example": "Enqueue 3,6,9, then dequeue once: 3 leaves and the queue is 6,9 from front to rear."
    }
  }
];
