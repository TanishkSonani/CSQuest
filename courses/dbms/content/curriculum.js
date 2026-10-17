// Generated DBMS curriculum mapped to all recorded topics.
export const units=[
  {
    "id": 0,
    "title": "Database foundations and relational thinking",
    "subtitle": "From stored files to a well-defined relational model",
    "range": [
      0,
      9
    ],
    "color": "teal",
    "icon": "memory",
    "goal": "Explain what a DBMS does, read relations as structured sets, and protect data with keys and integrity rules.",
    "sqlLab": {
      "id": "dbms-sql-unit-0",
      "version": 1,
      "unitId": 0,
      "optional": true,
      "language": "SQL",
      "minutes": 8,
      "title": "Create a safe student table",
      "prompt": "Build a table that gives every student a unique ID, requires a name, and keeps an optional email unique.",
      "template": "CREATE TABLE Student (\n  {{0}} INTEGER {{1}},\n  {{2}} VARCHAR(80) {{3}},\n  {{4}} VARCHAR(160) {{5}}\n);",
      "editorTemplate": "CREATE TABLE Student (\n  {{0}} INTEGER {{1}},\n  {{2}} VARCHAR(80) {{3}},\n  {{4}} VARCHAR(160) {{5}}\n);",
      "answer": [
        "student_id",
        "PRIMARY KEY",
        "name",
        "NOT NULL",
        "email",
        "UNIQUE"
      ],
      "tokens": [
        "student_id",
        "PRIMARY KEY",
        "name",
        "NOT NULL",
        "email",
        "UNIQUE"
      ],
      "hints": [
        "Use a clear identifier for each row.",
        "Declare the row identifier as the primary key.",
        "Name the required text field.",
        "This field must always have a value.",
        "Choose a field that may be absent.",
        "Prevent duplicate non-NULL email values."
      ],
      "examples": [
        {
          "label": "Schema check",
          "output": "Student IDs are unique; names are required; emails are unique when present."
        }
      ]
    }
  },
  {
    "id": 1,
    "title": "Dependencies and normalization",
    "subtitle": "Find hidden rules, keys and avoidable redundancy",
    "range": [
      10,
      25
    ],
    "color": "green",
    "icon": "map",
    "goal": "Compute attribute closure, identify keys, and decompose relations while checking losslessness and dependency preservation.",
    "sqlLab": {
      "id": "dbms-sql-unit-1",
      "version": 1,
      "unitId": 1,
      "optional": true,
      "language": "SQL",
      "minutes": 8,
      "title": "Store a normalized enrollment",
      "prompt": "Split student facts from enrollment facts so a student name is stored once and each enrollment is identified by student and course.",
      "template": "CREATE TABLE Student ({{0}} INTEGER PRIMARY KEY, {{1}} VARCHAR(80) NOT NULL);\nCREATE TABLE Enrollment ({{2}} INTEGER, {{3}} INTEGER, grade CHAR(2), PRIMARY KEY ({{4}}, {{5}}), FOREIGN KEY ({{6}}) REFERENCES Student({{7}}));",
      "editorTemplate": "CREATE TABLE Student ({{0}} INTEGER PRIMARY KEY, {{1}} VARCHAR(80) NOT NULL);\nCREATE TABLE Enrollment ({{2}} INTEGER, {{3}} INTEGER, grade CHAR(2), PRIMARY KEY ({{4}}, {{5}}), FOREIGN KEY ({{6}}) REFERENCES Student({{7}}));",
      "answer": [
        "student_id",
        "name",
        "student_id",
        "course_id",
        "student_id",
        "course_id",
        "student_id",
        "student_id"
      ],
      "tokens": [
        "student_id",
        "name",
        "course_id"
      ],
      "hints": [
        "Student relation key.",
        "Student fact that depends on that key.",
        "Enrollment references a student.",
        "The other part of the composite key.",
        "First key attribute.",
        "Second key attribute.",
        "Foreign-key attribute.",
        "Referenced primary key."
      ],
      "examples": [
        {
          "label": "Design result",
          "output": "Student(student_id, name); Enrollment(student_id, course_id, grade)."
        }
      ]
    }
  },
  {
    "id": 2,
    "title": "Relational algebra",
    "subtitle": "Build queries from precise set operations",
    "range": [
      26,
      33
    ],
    "color": "purple",
    "icon": "code",
    "goal": "Translate questions into selection, projection, set, join and division operations, then reason about the resulting relation.",
    "sqlLab": {
      "id": "dbms-sql-unit-2",
      "version": 1,
      "unitId": 2,
      "optional": true,
      "language": "SQL",
      "minutes": 8,
      "title": "Translate relational algebra into SQL",
      "prompt": "Return the names of students enrolled in course 7. Join the two relations, filter the course, and project only the student name.",
      "template": "SELECT {{0}}\nFROM Student s JOIN Enrollment e ON {{1}}\nWHERE {{2}} = {{3}};",
      "editorTemplate": "SELECT {{0}}\nFROM Student s JOIN Enrollment e ON {{1}}\nWHERE {{2}} = {{3}};",
      "answer": [
        "s.name",
        "s.student_id = e.student_id",
        "e.course_id",
        "7"
      ],
      "tokens": [
        "s.name",
        "s.student_id = e.student_id",
        "e.course_id",
        "7"
      ],
      "hints": [
        "Project only the requested output attribute.",
        "Join rows that refer to the same student.",
        "Filter on the course identifier.",
        "Use the requested course value."
      ],
      "examples": [
        {
          "label": "Relational algebra",
          "output": "πname(σcourse_id=7(Student ⋈ Enrollment))"
        }
      ]
    }
  },
  {
    "id": 3,
    "title": "Tuple relational calculus",
    "subtitle": "Describe the rows a query should return",
    "range": [
      34,
      42
    ],
    "color": "orange",
    "icon": "target",
    "goal": "Use tuple variables, predicates and quantifiers to express safe declarative queries and read exam-style expressions.",
    "sqlLab": {
      "id": "dbms-sql-unit-3",
      "version": 1,
      "unitId": 3,
      "optional": true,
      "language": "SQL",
      "minutes": 8,
      "title": "Express “every required course” with SQL",
      "prompt": "Find students who have completed every course listed as required. Use double NOT EXISTS to express the universal condition.",
      "template": "SELECT s.student_id\nFROM Student s\nWHERE {{0}} (SELECT 1 FROM RequiredCourse r\n  WHERE {{1}} (SELECT 1 FROM Enrollment e\n    WHERE e.student_id = s.student_id AND e.course_id = r.course_id));",
      "editorTemplate": "SELECT s.student_id\nFROM Student s\nWHERE {{0}} (SELECT 1 FROM RequiredCourse r\n  WHERE {{1}} (SELECT 1 FROM Enrollment e\n    WHERE e.student_id = s.student_id AND e.course_id = r.course_id));",
      "answer": [
        "NOT EXISTS",
        "NOT EXISTS"
      ],
      "tokens": [
        "NOT EXISTS"
      ],
      "hints": [
        "A student qualifies when there is no required course that fails the test.",
        "There must not be a required course without a matching enrollment."
      ],
      "examples": [
        {
          "label": "Logic pattern",
          "output": "For all required courses r, a matching enrollment exists."
        }
      ]
    }
  },
  {
    "id": 4,
    "title": "SQL querying",
    "subtitle": "Define data, filter rows, group results and compose queries",
    "range": [
      43,
      53
    ],
    "color": "pink",
    "icon": "code",
    "goal": "Write SQL with clear clause order, correct NULL and aggregate behavior, and carefully scoped nested queries.",
    "sqlLab": {
      "id": "dbms-sql-unit-4",
      "version": 1,
      "unitId": 4,
      "optional": true,
      "language": "SQL",
      "minutes": 8,
      "title": "Summarize course enrollments",
      "prompt": "Show each course with at least two students and its enrollment count, largest count first.",
      "template": "SELECT course_id, {{0}} AS student_count\nFROM Enrollment\nGROUP BY {{1}}\nHAVING {{2}} >= {{3}}\nORDER BY {{4}} {{5}};",
      "editorTemplate": "SELECT course_id, {{0}} AS student_count\nFROM Enrollment\nGROUP BY {{1}}\nHAVING {{2}} >= {{3}}\nORDER BY {{4}} {{5}};",
      "answer": [
        "COUNT(*)",
        "course_id",
        "COUNT(*)",
        "2",
        "student_count",
        "DESC"
      ],
      "tokens": [
        "COUNT(*)",
        "course_id",
        "2",
        "student_count",
        "DESC"
      ],
      "hints": [
        "Count enrollment rows in each group.",
        "Group rows by the course.",
        "Filter groups using their count.",
        "At least two means the threshold is two.",
        "Sort by the computed count.",
        "Largest values should come first."
      ],
      "examples": [
        {
          "label": "Result shape",
          "output": "course_id | student_count (only groups with count >= 2)"
        }
      ]
    }
  },
  {
    "id": 5,
    "title": "Disks and file organization",
    "subtitle": "Connect logical records to physical storage work",
    "range": [
      54,
      60
    ],
    "color": "teal",
    "icon": "memory",
    "goal": "Estimate disk access cost, compare scheduling and file layouts, and track free blocks.",
    "sqlLab": {
      "id": "dbms-sql-unit-5",
      "version": 1,
      "unitId": 5,
      "optional": true,
      "language": "SQL",
      "minutes": 8,
      "title": "Inspect table and page metadata",
      "prompt": "Use the standard information schema to list table names in the current schema in alphabetical order. This is a portable metadata query; physical pages remain database-managed.",
      "template": "SELECT {{0}}\nFROM information_schema.tables\nWHERE table_schema = {{1}}\n  AND table_type = {{2}}\nORDER BY {{3}};",
      "editorTemplate": "SELECT {{0}}\nFROM information_schema.tables\nWHERE table_schema = {{1}}\n  AND table_type = {{2}}\nORDER BY {{3}};",
      "answer": [
        "table_name",
        "CURRENT_SCHEMA()",
        "'BASE TABLE'",
        "table_name"
      ],
      "tokens": [
        "table_name",
        "CURRENT_SCHEMA()",
        "'BASE TABLE'"
      ],
      "hints": [
        "Select the relation name column.",
        "Restrict the query to the active schema.",
        "Keep ordinary stored tables.",
        "Sort by relation name."
      ],
      "examples": [
        {
          "label": "Storage boundary",
          "output": "SQL can inspect logical metadata; disk block placement is implementation-specific."
        }
      ]
    }
  },
  {
    "id": 6,
    "title": "Indexes and search trees",
    "subtitle": "Turn keys into fewer page reads",
    "range": [
      61,
      76
    ],
    "color": "green",
    "icon": "memory",
    "goal": "Compare ordered, primary, clustering and secondary indexes, then trace ISAM, B-trees and B+ trees.",
    "sqlLab": {
      "id": "dbms-sql-unit-6",
      "version": 1,
      "unitId": 6,
      "optional": true,
      "language": "SQL",
      "minutes": 8,
      "title": "Add an index for ordered lookups",
      "prompt": "Create a B+ tree style index (the database chooses its physical implementation) on Enrollment.course_id and then student_id.",
      "template": "CREATE INDEX {{0}}\nON Enrollment ({{1}}, {{2}});",
      "editorTemplate": "CREATE INDEX {{0}}\nON Enrollment ({{1}}, {{2}});",
      "answer": [
        "enrollment_course_student_idx",
        "course_id",
        "student_id"
      ],
      "tokens": [
        "enrollment_course_student_idx",
        "course_id",
        "student_id"
      ],
      "hints": [
        "Choose a descriptive, unique index name.",
        "Put the most useful leading search key first.",
        "Add the tie-breaking or secondary key."
      ],
      "examples": [
        {
          "label": "Index key order",
          "output": "(course_id, student_id) supports lookups by course and by the full pair."
        }
      ]
    }
  },
  {
    "id": 7,
    "title": "Transactions and serializability",
    "subtitle": "Reason about concurrent schedules and safe recovery",
    "range": [
      77,
      85
    ],
    "color": "purple",
    "icon": "lock",
    "goal": "Trace reads and writes, apply ACID, and test conflict, view and recoverability properties.",
    "sqlLab": {
      "id": "dbms-sql-unit-7",
      "version": 1,
      "unitId": 7,
      "optional": true,
      "language": "SQL",
      "minutes": 8,
      "title": "Make a balance change atomic",
      "prompt": "Transfer 25 points from account 1 to account 2. Begin a transaction, update both rows, then commit.",
      "template": "{{0}};\nUPDATE Account SET balance = balance - {{1}} WHERE account_id = {{2}};\nUPDATE Account SET balance = balance + {{3}} WHERE account_id = {{4}};\n{{5}};",
      "editorTemplate": "{{0}};\nUPDATE Account SET balance = balance - {{1}} WHERE account_id = {{2}};\nUPDATE Account SET balance = balance + {{3}} WHERE account_id = {{4}};\n{{5}};",
      "answer": [
        "BEGIN",
        "25",
        "1",
        "25",
        "2",
        "COMMIT"
      ],
      "tokens": [
        "BEGIN",
        "25",
        "1",
        "2",
        "COMMIT"
      ],
      "hints": [
        "Start one transaction for both writes.",
        "Subtract the transfer amount.",
        "Source account identifier.",
        "Add the same amount to the destination.",
        "Destination account identifier.",
        "Make both updates permanent together."
      ],
      "examples": [
        {
          "label": "Atomicity",
          "output": "Both updates commit, or neither remains after rollback."
        }
      ]
    }
  },
  {
    "id": 8,
    "title": "Concurrency control",
    "subtitle": "Coordinate transactions with locks, timestamps and deadlock handling",
    "range": [
      86,
      90
    ],
    "color": "orange",
    "icon": "lock",
    "goal": "Apply two-phase locking and timestamp ordering, recognize deadlocks, and compare prevention and recovery choices.",
    "sqlLab": {
      "id": "dbms-sql-unit-8",
      "version": 1,
      "unitId": 8,
      "optional": true,
      "language": "SQL",
      "minutes": 8,
      "title": "Use row locks for a safe update",
      "prompt": "In a transaction, select account 1 and request a row lock before changing its balance.",
      "template": "BEGIN;\nSELECT balance FROM Account\nWHERE account_id = {{0}}\n{{1}};\nUPDATE Account SET balance = balance - {{2}} WHERE account_id = {{3}};\nCOMMIT;",
      "editorTemplate": "BEGIN;\nSELECT balance FROM Account\nWHERE account_id = {{0}}\n{{1}};\nUPDATE Account SET balance = balance - {{2}} WHERE account_id = {{3}};\nCOMMIT;",
      "answer": [
        "1",
        "FOR UPDATE",
        "10",
        "1"
      ],
      "tokens": [
        "1",
        "FOR UPDATE",
        "10"
      ],
      "hints": [
        "Choose the row to protect.",
        "Request an exclusive row lock in common SQL dialects.",
        "Subtract the update amount.",
        "Update the same account."
      ],
      "examples": [
        {
          "label": "Concurrency note",
          "output": "Exact lock behavior and syntax vary by DBMS; the row lock coordinates conflicting writers."
        }
      ]
    }
  },
  {
    "id": 9,
    "title": "Entity-relationship design",
    "subtitle": "Model real-world data and map it to relations",
    "range": [
      91,
      93
    ],
    "color": "pink",
    "icon": "target",
    "goal": "Identify entities, attributes, relationships and weak entities, then map an ER design into relational tables.",
    "sqlLab": {
      "id": "dbms-sql-unit-9",
      "version": 1,
      "unitId": 9,
      "optional": true,
      "language": "SQL",
      "minutes": 8,
      "title": "Map an ER relationship to tables",
      "prompt": "Create Student and Course entities, then map their many-to-many relationship into Enrollment with a composite key.",
      "template": "CREATE TABLE Student ({{0}} INTEGER PRIMARY KEY, name VARCHAR(80) NOT NULL);\nCREATE TABLE Course ({{1}} INTEGER PRIMARY KEY, title VARCHAR(120) NOT NULL);\nCREATE TABLE Enrollment ({{2}} INTEGER REFERENCES Student(student_id), {{3}} INTEGER REFERENCES Course(course_id), PRIMARY KEY ({{4}}, {{5}}));",
      "editorTemplate": "CREATE TABLE Student ({{0}} INTEGER PRIMARY KEY, name VARCHAR(80) NOT NULL);\nCREATE TABLE Course ({{1}} INTEGER PRIMARY KEY, title VARCHAR(120) NOT NULL);\nCREATE TABLE Enrollment ({{2}} INTEGER REFERENCES Student(student_id), {{3}} INTEGER REFERENCES Course(course_id), PRIMARY KEY ({{4}}, {{5}}));",
      "answer": [
        "student_id",
        "course_id",
        "student_id",
        "course_id",
        "student_id",
        "course_id"
      ],
      "tokens": [
        "student_id",
        "course_id"
      ],
      "hints": [
        "Strong Student entity identifier.",
        "Strong Course entity identifier.",
        "Foreign key for the Student side.",
        "Foreign key for the Course side.",
        "First part of the relationship row identity.",
        "Second part of the relationship row identity."
      ],
      "examples": [
        {
          "label": "ER mapping",
          "output": "Each Student-Course pair becomes one Enrollment row."
        }
      ]
    }
  }
];
export const lecturePlans=[
  [
    "Introduction to DBMS, Data Models, Design Process",
    "Learn introduction to dbms, data models, design process through a concrete database example.",
    "Explain and apply introduction to dbms, data models, design process without assuming prior lecture knowledge."
  ],
  [
    "The Relational Model Concepts & Terminology",
    "Learn the relational model concepts & terminology through a concrete database example.",
    "Explain and apply the relational model concepts & terminology without assuming prior lecture knowledge."
  ],
  [
    "The Relational Model Why Table is called Relation",
    "Learn the relational model why table is called relation through a concrete database example.",
    "Explain and apply the relational model why table is called relation without assuming prior lecture knowledge."
  ],
  [
    "The Relational Model - Null Values",
    "Learn the relational model - null values through a concrete database example.",
    "Explain and apply the relational model - null values without assuming prior lecture knowledge."
  ],
  [
    "The Relational Model Keys Candidate Key, Primary",
    "Learn the relational model keys candidate key, primary through a concrete database example.",
    "Explain and apply the relational model keys candidate key, primary without assuming prior lecture knowledge."
  ],
  [
    "Practice Questions on Keys",
    "Learn applying keys through a concrete database example.",
    "Explain and apply applying keys without assuming prior lecture knowledge."
  ],
  [
    "SQL - DDL & DML",
    "Learn sql - ddl & dml through a concrete database example.",
    "Explain and apply sql - ddl & dml without assuming prior lecture knowledge."
  ],
  [
    "Integrity Constraints in Relational Model",
    "Learn integrity constraints in relational model through a concrete database example.",
    "Explain and apply integrity constraints in relational model without assuming prior lecture knowledge."
  ],
  [
    "Referential Integrity Constraints Foreign Key",
    "Learn referential integrity constraints foreign key through a concrete database example.",
    "Explain and apply referential integrity constraints foreign key without assuming prior lecture knowledge."
  ],
  [
    "Actions Taken by DBMS to Enforce Referential Integrity",
    "Learn actions taken by dbms to enforce referential integrity through a concrete database example.",
    "Explain and apply actions taken by dbms to enforce referential integrity without assuming prior lecture knowledge."
  ],
  [
    "Functional Dependency",
    "Learn functional dependency through a concrete database example.",
    "Explain and apply functional dependency without assuming prior lecture knowledge."
  ],
  [
    "Functional Dependency Laws, Closure",
    "Learn functional dependency laws, closure through a concrete database example.",
    "Explain and apply functional dependency laws, closure without assuming prior lecture knowledge."
  ],
  [
    "Practice Finding Candidate Keys",
    "Learn applying finding candidate keys through a concrete database example.",
    "Explain and apply applying finding candidate keys without assuming prior lecture knowledge."
  ],
  [
    "Functional Dependency Inference",
    "Learn functional dependency inference through a concrete database example.",
    "Explain and apply functional dependency inference without assuming prior lecture knowledge."
  ],
  [
    "Normal Forms Partial Functional Dependency",
    "Learn normal forms partial functional dependency through a concrete database example.",
    "Explain and apply normal forms partial functional dependency without assuming prior lecture knowledge."
  ],
  [
    "Normal Forms - 1NF, 2NF",
    "Learn normal forms - 1nf, 2nf through a concrete database example.",
    "Explain and apply normal forms - 1nf, 2nf without assuming prior lecture knowledge."
  ],
  [
    "Normal Forms - 3NF Third Normal Form",
    "Learn normal forms - 3nf third normal form through a concrete database example.",
    "Explain and apply normal forms - 3nf third normal form without assuming prior lecture knowledge."
  ],
  [
    "Normal Forms - Practice Questions 3NF",
    "Learn normal forms - practice questions 3nf through a concrete database example.",
    "Explain and apply normal forms - practice questions 3nf without assuming prior lecture knowledge."
  ],
  [
    "Normal Forms - BCNF",
    "Learn normal forms - bcnf through a concrete database example.",
    "Explain and apply normal forms - bcnf without assuming prior lecture knowledge."
  ],
  [
    "Normalization & Decomposition Lossless, Lossy",
    "Learn normalization & decomposition lossless, lossy through a concrete database example.",
    "Explain and apply normalization & decomposition lossless, lossy without assuming prior lecture knowledge."
  ],
  [
    "Practice Questions Decomposition Lossless, Lossy",
    "Learn applying decomposition lossless, lossy through a concrete database example.",
    "Explain and apply applying decomposition lossless, lossy without assuming prior lecture knowledge."
  ],
  [
    "Decomposition - Dependency Preservation",
    "Learn decomposition - dependency preservation through a concrete database example.",
    "Explain and apply decomposition - dependency preservation without assuming prior lecture knowledge."
  ],
  [
    "Minimal Cover of Functional Dependencies",
    "Learn minimal cover of functional dependencies through a concrete database example.",
    "Explain and apply minimal cover of functional dependencies without assuming prior lecture knowledge."
  ],
  [
    "2NF Decomposition",
    "Learn decomposing to second normal form through a concrete database example.",
    "Explain and apply decomposing to second normal form without assuming prior lecture knowledge."
  ],
  [
    "Understanding Redundancies Due to FDs & MVDs",
    "Learn understanding redundancies due to fds & mvds through a concrete database example.",
    "Explain and apply understanding redundancies due to fds & mvds without assuming prior lecture knowledge."
  ],
  [
    "3NF, BCNF Decomposition",
    "Learn 3nf, bcnf decomposition through a concrete database example.",
    "Explain and apply 3nf, bcnf decomposition without assuming prior lecture knowledge."
  ],
  [
    "Physical, Logical Data Independence",
    "Learn physical and logical data independence through a concrete database example.",
    "Explain and apply physical and logical data independence without assuming prior lecture knowledge."
  ],
  [
    "Relational Algebra - Selection, Projection",
    "Learn relational algebra - selection, projection through a concrete database example.",
    "Explain and apply relational algebra - selection, projection without assuming prior lecture knowledge."
  ],
  [
    "Relational Algebra - Set Operations",
    "Learn relational algebra - set operations through a concrete database example.",
    "Explain and apply relational algebra - set operations without assuming prior lecture knowledge."
  ],
  [
    "Relational Algebra - Inner Join Operations",
    "Learn relational algebra - inner join operations through a concrete database example.",
    "Explain and apply relational algebra - inner join operations without assuming prior lecture knowledge."
  ],
  [
    "Relational Algebra - Division Operation",
    "Learn relational algebra - division operation through a concrete database example.",
    "Explain and apply relational algebra - division operation without assuming prior lecture knowledge."
  ],
  [
    "Division Operation, Outer Join in Relational Algebra",
    "Learn division operation, outer join in relational algebra through a concrete database example.",
    "Explain and apply division operation, outer join in relational algebra without assuming prior lecture knowledge."
  ],
  [
    "Practice - Relational Algebra Operators",
    "Learn applying - relational algebra operators through a concrete database example.",
    "Explain and apply applying - relational algebra operators without assuming prior lecture knowledge."
  ],
  [
    "Writing & Understanding Relational Algebra Queries",
    "Learn writing & understanding relational algebra queries through a concrete database example.",
    "Explain and apply writing & understanding relational algebra queries without assuming prior lecture knowledge."
  ],
  [
    "GATE Questions - Relational Algebra",
    "Learn gate questions - relational algebra through a concrete database example.",
    "Explain and apply gate questions - relational algebra without assuming prior lecture knowledge."
  ],
  [
    "Tuple relational calculus: tuple variables and predicates",
    "Learn tuple relational calculus: tuple variables and predicates through a concrete database example.",
    "Explain and apply tuple relational calculus: tuple variables and predicates without assuming prior lecture knowledge."
  ],
  [
    "Tuple relational calculus: existential conditions",
    "Learn tuple relational calculus: existential conditions through a concrete database example.",
    "Explain and apply tuple relational calculus: existential conditions without assuming prior lecture knowledge."
  ],
  [
    "Tuple relational calculus: universal conditions and safety",
    "Learn tuple relational calculus: universal conditions and safety through a concrete database example.",
    "Explain and apply tuple relational calculus: universal conditions and safety without assuming prior lecture knowledge."
  ],
  [
    "TRC Practice Questions",
    "Learn trc practice questions through a concrete database example.",
    "Explain and apply trc practice questions without assuming prior lecture knowledge."
  ],
  [
    "GATE CSE 1999: tuple relational expression",
    "Learn gate cse 1999: tuple relational expression through a concrete database example.",
    "Explain and apply gate cse 1999: tuple relational expression without assuming prior lecture knowledge."
  ],
  [
    "GATE CSE 2002: tuple relational calculus",
    "Learn gate cse 2002: tuple relational calculus through a concrete database example.",
    "Explain and apply gate cse 2002: tuple relational calculus without assuming prior lecture knowledge."
  ],
  [
    "GATE CSE 2007: tuple relational calculus",
    "Learn gate cse 2007: tuple relational calculus through a concrete database example.",
    "Explain and apply gate cse 2007: tuple relational calculus without assuming prior lecture knowledge."
  ],
  [
    "GATE CSE 2008: tuple relational calculus",
    "Learn gate cse 2008: tuple relational calculus through a concrete database example.",
    "Explain and apply gate cse 2008: tuple relational calculus without assuming prior lecture knowledge."
  ],
  [
    "SQL Basics",
    "Learn sql basics through a concrete database example.",
    "Explain and apply sql basics without assuming prior lecture knowledge."
  ],
  [
    "Writing SQL Queries, Union, Except",
    "Learn writing sql queries, union, except through a concrete database example.",
    "Explain and apply writing sql queries, union, except without assuming prior lecture knowledge."
  ],
  [
    "SQL Queries using Union, Except, Intersect",
    "Learn sql queries using union, except, intersect through a concrete database example.",
    "Explain and apply sql queries using union, except, intersect without assuming prior lecture knowledge."
  ],
  [
    "Some Notes on Select, Where Clause",
    "Learn some notes on select, where clause through a concrete database example.",
    "Explain and apply some notes on select, where clause without assuming prior lecture knowledge."
  ],
  [
    "Aggregate Operators",
    "Learn aggregate operators through a concrete database example.",
    "Explain and apply aggregate operators without assuming prior lecture knowledge."
  ],
  [
    "Null Values in SQL",
    "Learn null values in sql through a concrete database example.",
    "Explain and apply null values in sql without assuming prior lecture knowledge."
  ],
  [
    "Group By, Having, Order By Clauses",
    "Learn group by, having, order by clauses through a concrete database example.",
    "Explain and apply group by, having, order by clauses without assuming prior lecture knowledge."
  ],
  [
    "SQL Practice Questions",
    "Learn sql practice questions through a concrete database example.",
    "Explain and apply sql practice questions without assuming prior lecture knowledge."
  ],
  [
    "Nested Queries",
    "Learn nested queries through a concrete database example.",
    "Explain and apply nested queries without assuming prior lecture knowledge."
  ],
  [
    "Correlated Nested Queries in SQL",
    "Learn correlated nested queries through a concrete database example.",
    "Explain and apply correlated nested queries without assuming prior lecture knowledge."
  ],
  [
    "SQL GATE Questions",
    "Learn reasoning through sql query problems through a concrete database example.",
    "Explain and apply reasoning through sql query problems without assuming prior lecture knowledge."
  ],
  [
    "Disk Structure & Performance",
    "Learn disk structure & performance through a concrete database example.",
    "Explain and apply disk structure & performance without assuming prior lecture knowledge."
  ],
  [
    "Disk Addressing",
    "Learn disk addresses and access cost through a concrete database example.",
    "Explain and apply disk addresses and access cost without assuming prior lecture knowledge."
  ],
  [
    "Disk Scheduling Algorithms",
    "Learn disk scheduling algorithms through a concrete database example.",
    "Explain and apply disk scheduling algorithms without assuming prior lecture knowledge."
  ],
  [
    "Disk Scheduling Algorithms Part 2",
    "Learn disk scheduling algorithms part 2 through a concrete database example.",
    "Explain and apply disk scheduling algorithms part 2 without assuming prior lecture knowledge."
  ],
  [
    "File Organization",
    "Learn file organization through a concrete database example.",
    "Explain and apply file organization without assuming prior lecture knowledge."
  ],
  [
    "Practice Questions - File Organization",
    "Learn choosing a file organization through a concrete database example.",
    "Explain and apply choosing a file organization without assuming prior lecture knowledge."
  ],
  [
    "Free Disk Space Management",
    "Learn tracking free disk blocks through a concrete database example.",
    "Explain and apply tracking free disk blocks without assuming prior lecture knowledge."
  ],
  [
    "Indexing - Ordered Indexes",
    "Learn indexing - ordered indexes through a concrete database example.",
    "Explain and apply indexing - ordered indexes without assuming prior lecture knowledge."
  ],
  [
    "Primary Index",
    "Learn primary index through a concrete database example.",
    "Explain and apply primary index without assuming prior lecture knowledge."
  ],
  [
    "Clustering Index",
    "Learn clustering index through a concrete database example.",
    "Explain and apply clustering index without assuming prior lecture knowledge."
  ],
  [
    "Secondary Index",
    "Learn secondary index through a concrete database example.",
    "Explain and apply secondary index without assuming prior lecture knowledge."
  ],
  [
    "Practice Questions on Indexes",
    "Learn applying indexes through a concrete database example.",
    "Explain and apply applying indexes without assuming prior lecture knowledge."
  ],
  [
    "Multilevel Index & ISAM",
    "Learn multilevel index & isam through a concrete database example.",
    "Explain and apply multilevel index & isam without assuming prior lecture knowledge."
  ],
  [
    "GATE Questions on Indexing",
    "Learn gate questions on indexing through a concrete database example.",
    "Explain and apply gate questions on indexing without assuming prior lecture knowledge."
  ],
  [
    "B Tree",
    "Learn b tree through a concrete database example.",
    "Explain and apply b tree without assuming prior lecture knowledge."
  ],
  [
    "B Tree Insertion",
    "Learn b tree insertion through a concrete database example.",
    "Explain and apply b tree insertion without assuming prior lecture knowledge."
  ],
  [
    "B Tree Order Questions",
    "Learn b tree order questions through a concrete database example.",
    "Explain and apply b tree order questions without assuming prior lecture knowledge."
  ],
  [
    "B Tree Structure Questions",
    "Learn b tree structure questions through a concrete database example.",
    "Explain and apply b tree structure questions without assuming prior lecture knowledge."
  ],
  [
    "B Tree More Questions",
    "Learn b tree more questions through a concrete database example.",
    "Explain and apply b tree more questions without assuming prior lecture knowledge."
  ],
  [
    "B+ Tree",
    "Learn b+ tree through a concrete database example.",
    "Explain and apply b+ tree without assuming prior lecture knowledge."
  ],
  [
    "B+ Tree Range Search",
    "Learn b+ tree range search through a concrete database example.",
    "Explain and apply b+ tree range search without assuming prior lecture knowledge."
  ],
  [
    "B+ Tree Insertion",
    "Learn b+ tree insertion through a concrete database example.",
    "Explain and apply b+ tree insertion without assuming prior lecture knowledge."
  ],
  [
    "B+ Tree Questions",
    "Learn b+ tree questions through a concrete database example.",
    "Explain and apply b+ tree questions without assuming prior lecture knowledge."
  ],
  [
    "Transaction, Database Consistency",
    "Learn transaction, database consistency through a concrete database example.",
    "Explain and apply transaction, database consistency without assuming prior lecture knowledge."
  ],
  [
    "Transaction, Read Write Operations",
    "Learn transaction, read write operations through a concrete database example.",
    "Explain and apply transaction, read write operations without assuming prior lecture knowledge."
  ],
  [
    "ACID Properties",
    "Learn acid properties through a concrete database example.",
    "Explain and apply acid properties without assuming prior lecture knowledge."
  ],
  [
    "Practice ACID Properties, Database Consist",
    "Learn applying acid properties, database consist through a concrete database example.",
    "Explain and apply applying acid properties, database consist without assuming prior lecture knowledge."
  ],
  [
    "Serializability Introduction",
    "Learn serializability introduction through a concrete database example.",
    "Explain and apply serializability introduction without assuming prior lecture knowledge."
  ],
  [
    "Serializability In General",
    "Learn serializability in general through a concrete database example.",
    "Explain and apply serializability in general without assuming prior lecture knowledge."
  ],
  [
    "Conflict Serializability",
    "Learn conflict serializability through a concrete database example.",
    "Explain and apply conflict serializability without assuming prior lecture knowledge."
  ],
  [
    "View Serializability",
    "Learn view serializability through a concrete database example.",
    "Explain and apply view serializability without assuming prior lecture knowledge."
  ],
  [
    "Recoverability",
    "Learn recoverability through a concrete database example.",
    "Explain and apply recoverability without assuming prior lecture knowledge."
  ],
  [
    "General Locking Protocol for Concurrency",
    "Learn general locking protocol for concurrency through a concrete database example.",
    "Explain and apply general locking protocol for concurrency without assuming prior lecture knowledge."
  ],
  [
    "Two Phase Locking Protocol",
    "Learn two phase locking protocol through a concrete database example.",
    "Explain and apply two phase locking protocol without assuming prior lecture knowledge."
  ],
  [
    "Two Phase Locking Protocol Variations",
    "Learn two phase locking protocol variations through a concrete database example.",
    "Explain and apply two phase locking protocol variations without assuming prior lecture knowledge."
  ],
  [
    "Deadlock Handling",
    "Learn deadlock handling through a concrete database example.",
    "Explain and apply deadlock handling without assuming prior lecture knowledge."
  ],
  [
    "50 Questions on Timestamp Protocol",
    "Learn 50 questions on timestamp protocol through a concrete database example.",
    "Explain and apply 50 questions on timestamp protocol without assuming prior lecture knowledge."
  ],
  [
    "ER Model",
    "Learn er model through a concrete database example.",
    "Explain and apply er model without assuming prior lecture knowledge."
  ],
  [
    "Weak Entity Set in ER Model",
    "Learn weak entity set in er model through a concrete database example.",
    "Explain and apply weak entity set in er model without assuming prior lecture knowledge."
  ],
  [
    "ER Model to Relational Model Conversion",
    "Learn er model to relational model conversion through a concrete database example.",
    "Explain and apply er model to relational model conversion without assuming prior lecture knowledge."
  ]
];
