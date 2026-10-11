import {topics} from './topics.js';
export const lecturePlans=topics.map(topic=>[topic.label,...topic.titles]);
const unit=(id,title,range,color,icon,goal)=>({id,title,subtitle:goal,range,color,icon,goal});
export const units=[
 unit(0,'First programs and representations',[0,9],'green','code','Read assignments, decode notation and reason about integer conversions.'),
 unit(1,'Control flow and expressions',[10,20],'orange','binary','Choose branches, trace loops and sequence side effects safely.'),
 unit(2,'Functions, builds and lifetime',[21,31],'purple','chip','Follow calls and distinguish scope, storage duration and linkage.'),
 unit(3,'Recursion and the call stack',[32,35],'teal','rocket','Descend to a base case and combine return values.'),
 unit(4,'Pointers and arrays',[36,48],'green','memory','Follow aliases, index arrays and respect pointer bounds.'),
 unit(5,'Strings, rows and declarations',[49,60],'pink','book','Handle string capacity and distinguish rows from pointer tables.'),
 unit(6,'Ownership, input and challenges',[61,67],'orange','target','Manage allocated storage and solve practical code puzzles.')
];
