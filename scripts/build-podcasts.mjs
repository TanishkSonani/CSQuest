import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {subjects} from '../config/courses.mjs';
import {correctAnswer} from '../packages/learning/engine.js';
import {readFileSync} from 'node:fs';
const pronunciation=JSON.parse(readFileSync(new URL('../config/podcast-pronunciation.json',import.meta.url),'utf8')).turns;

const clean=value=>String(value||'').replace(/\s+/g,' ').trim();
const sentence=value=>{const text=clean(value);return text&&!/[.!?]$/.test(text)?text+'.':text;};
const lowerFirst=value=>clean(value).replace(/^[A-Z](?=[a-z]|\s)/,c=>c.toLowerCase());
const fragments=value=>sentence(value).split(/(?<=[.!?])\s+(?=[A-Z0-9"'])/);
const signature=value=>clean(value).toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const spokenSource=value=>fragments(value).filter(text=>!/^(The focus here is|Apply the same reasoning specifically|Name the real-world facts|Use the named rule|Each definition names|Meet the idea\.|Watch one example unfold\.|Use the idea in a new situation\.)/i.test(text)).join(' ');
// These source lessons share broad family notes. Give their audio exchange the
// actual distinction named in the topic instead of reading the family again.
const topicNotes={
 'c:44':['Pointer type and valid access',"A pointer's type tells us what kind of object an access expects and how far pointer arithmetic moves. The object must also be alive, correctly aligned, and accessible through that type. A numeric address alone doesn't establish those conditions."],
 'c:55':['Pass a two-dimensional array',"A two-dimensional array contains rows stored next to one another. A function receiving its decayed pointer needs the row width to find the next row. That's different from an array of separately stored pointers, so a pointer-to-pointer parameter doesn't describe the same layout."],
 'c:56':['Row boundaries and strides',"If each row contains four integers, advancing a pointer-to-row by one moves past all four integers. Advancing an integer pointer by one moves past just one integer. The physical rows are adjacent, but an element access still has to respect its array bounds; adjacency doesn't make every cross-row index valid."],
 'dbms:2':['The Relational Model Why Table is called Relation',"A relation is a set of allowed combinations drawn from the attribute domains. If the domains are student IDs and names, their Cartesian product contains every possible ID-and-name pair. The relation contains only the pairs that are actually recorded. That's the mathematical reason for the name."],
 'dbms:3':['The Relational Model - Null Values',"NULL marks a missing or unknown value, rather than a value such as zero or an empty string. If we don't know a student's phone number, comparing it with another number doesn't establish that they match or differ. In SQL, use IS NULL to test for the missing marker."],
 'dbms:4':['The Relational Model Keys Candidate Key, Primary',"A superkey identifies a tuple uniquely. A candidate key is a superkey with no unnecessary attributes; removing any part loses the guarantee. We choose one candidate key as the primary key. Two students may share a name, so a name alone isn't automatically a key."],
 'dbms:5':['Applying Keys',"Suppose a student ID uniquely determines a student, and so does an email address. Each is a candidate key if it is minimal. Combining both still identifies the student, but it isn't another candidate key: one part can be removed without losing uniqueness."],
 'dbms:6':['SQL - DDL & DML',"CREATE TABLE defines a structure and its constraints. INSERT adds a row, UPDATE changes existing rows, and DELETE removes them. Those are different jobs: changing a table's definition isn't the same as changing the facts stored inside it."],
 'dbms:7':['Integrity Constraints in Relational Model',"Constraints state which database states are allowed. A primary key prevents duplicate identifiers and missing key values. A domain rule can reject an impossible age. The database checks these rules when data changes, so correctness doesn't depend only on an application's form validation."],
 'dbms:8':['Referential Integrity Constraints Foreign Key',"A foreign key links a referencing table to a key in another table, or sometimes the same table. If an enrollment names a student ID, that reference must satisfy the declared foreign-key constraint. For a non-NULL reference, the corresponding student key must exist."],
 'dbms:9':['Actions Taken by DBMS to Enforce Referential Integrity',"What happens if someone deletes a student who still has enrollment records? The declared foreign-key action decides. A restriction can reject the deletion; cascading can remove the related enrollments. Setting the reference to NULL is another option only when the column permits NULL."],
 'dbms:31':['Division Operation, Outer Join in Relational Algebra',"Division answers an every-item question, such as which students took every required course. An outer join solves a different problem: it keeps unmatched rows from one or both inputs and fills missing values on the other side with NULL. These operators shouldn't be substituted for one another."],
 'dbms:32':['Practice - Relational Algebra Operators',"Start with the output the question asks for, then identify which relations hold those facts. Selection filters tuples; projection chooses attributes. A join combines related tuples from its inputs. Keep a small intermediate result after each operation so you can see whether an unwanted tuple has entered the answer."],
 'dbms:38':['TRC Practice Questions',"In tuple relational calculus, describe the conditions a result tuple must satisfy. An existential condition asks whether at least one suitable tuple exists. A universal condition requires every relevant tuple to qualify. Restrict variables to the database's values so the expression describes a finite, safe result."],
 'dbms:39':['GATE CSE 1999: tuple relational expression',"Read a tuple relational expression as a test for admitting a tuple to the answer. Identify the free variable first, then the relations and predicates that restrict it. For an existential variable, try to find a witness tuple. To disprove a universal condition, find one relevant counterexample."],
};
const topicPrompt=(title,index)=>{
 if(/^(how|why|what|when|where|which)\b/i.test(title))return `Can you walk me through ${lowerFirst(title.replace(/[.?!]+$/,''))}?`;
 if(/^(can|does|do|is|are)\b/i.test(title))return title.replace(/[.?!]+$/,'')+'?';
 return [
  `Let's start with ${lowerFirst(title)}. What do we need to know?`,
  `That takes us to ${lowerFirst(title)}. Where does it fit?`,
  `There's another piece to this: ${lowerFirst(title)}.`,
  `Let's spend a moment on ${lowerFirst(title)}.`,
  `How would you explain ${lowerFirst(title)} to someone meeting it for the first time?`,
  `I want to unpack ${lowerFirst(title)} next.`,
  `Now for ${lowerFirst(title)}. What's the key distinction?`,
  `We also need to talk about ${lowerFirst(title)}.`,
 ][index%8];
};
const topicTitle=plan=>clean(Array.isArray(plan)?plan[0]:plan?.title);
const safeQuestion=q=>['choice','number'].includes(q.type)&&!q.code&&!q.given&&!q.tocGiven&&!q.diagram&&!q.setup&&q.prompt?.length<500&&!/\b(above|below|shown|following|previous|this code|this graph|circuit diagram|check for)\b/i.test(q.prompt);
export function buildEpisode(subject,unit,lecturePlans,lessons){
 const turns=[],chapters=[],seenExamples=new Set(),seenTerms=new Set(),seenWarnings=new Set(),seenQuestions=new Set(),seenIdeas=new Set(),chapterIdeas=[];
 const say=(speaker,text)=>{text=clean(text);if(text)turns.push({speaker,text});};
 const topicIds=Array.from({length:unit.range[1]-unit.range[0]+1},(_,i)=>unit.range[0]+i).filter(id=>lessons.some(l=>l.ready&&l.lecture===id));
 const titles=topicIds.map(id=>topicTitle(lecturePlans[id]));
 const variant=(unit.id+(subject.order||0))%6;
 say('maya',[
  `Hi, I'm Maya. Leo's with me, and today's section is called ${unit.title}.`,
  `Welcome back. Maya here, with Leo. We've reached the section called ${unit.title}.`,
  `I'm Maya, and this is CSQuest Audio. Today, Leo and I are taking on ${unit.title}.`,
  `Maya and Leo here. Our section today is ${unit.title}.`,
  `Hi, it's Maya. I've got Leo with me for ${unit.title}.`,
  `Welcome to CSQuest Audio. I'm Maya, here with Leo. This section is called ${unit.title}.`,
 ][variant]);
 if(signature(unit.subtitle)!==signature(unit.goal))say('leo',sentence(unit.subtitle));
 say('maya',`Here's what we're working toward: ${lowerFirst(sentence(unit.goal))}`);
 if(titles.length>1)say('leo',`We'll begin with ${lowerFirst(titles[0])} and work our way to ${lowerFirst(titles.at(-1))}.`);
 chapters.push({id:'introduction',title:'Section introduction',startTurn:0,endTurn:turns.length-1});
 for(const [index,lecture] of topicIds.entries()){
  const group=lessons.filter(l=>l.ready&&l.lecture===lecture),lesson=group[0],foundation=lesson.foundation||{},startTurn=turns.length,title=topicTitle(lecturePlans[lecture]);
  if(!title)throw Error(`Missing topic name for ${subject.id}/${lecture}`);
  // Let the subject matter carry the exchange. A new question before every
  // definition/example/warning made the earlier dialogue sound like a form.
  if(index===0||index%3===1)say('leo',topicPrompt(title,index+unit.id));
  const note=topicNotes[`${subject.id}:${lecture}`];
  if(note?.[0]===title){
   const parts=fragments(note[1]),split=Math.ceil(parts.length/2);
   say('maya',parts.slice(0,split).join(' '));say('leo',parts.slice(split).join(' '));
   chapterIdeas.push(note[1]);for(const part of parts)seenIdeas.add(signature(part));
   chapters.push({id:`topic-${lecture}`,title,lecture,startTurn,endTurn:turns.length-1,lessonIds:group.map(l=>l.id)});
   continue;
  }
  const candidates=[...(note?.[0]===title?[note[1]]:[]),foundation.idea,...group.map(l=>l.concept),...group.flatMap(l=>l.teachingSteps||[])].map(spokenSource).filter(Boolean);
  const freshIdeas=candidates.map(text=>fragments(text).filter(part=>!seenIdeas.has(signature(part))).join(' '));
  // Shared foundations can span several recording topics. Repeating the whole
  // paragraph at every boundary sounds like restarting the same lesson.
  const idea=freshIdeas.find(text=>text.length>50)||freshIdeas.find(Boolean)||fragments(candidates[0])[0];
  for(const part of fragments(idea))seenIdeas.add(signature(part));chapterIdeas.push(idea);
  say('maya',sentence(idea));
  const term=(foundation.terms||[]).map(clean).find(text=>text.includes(':')&&!seenTerms.has(signature(text)));
  if(term){seenTerms.add(signature(term));const split=term.indexOf(':'),name=term.slice(0,split),definition=lowerFirst(sentence(term.slice(split+1)));
   say('leo',/^(holds|stores|keeps|contains|connects|selects|identifies|measures|describes|represents|returns|counts|converts|moves|controls|determines|allows|provides|specifies|defines|uses|checks|compares)\b/i.test(definition)?`${name} ${definition}`:`${name} means ${definition}`);
  }
  const example=spokenSource(foundation.example),question=group.flatMap(l=>l.questions||[]).find(q=>safeQuestion(q)&&!seenQuestions.has(signature(q.prompt))&&!seenQuestions.has('answer:'+signature(q.explanation)));
  if(example&&!seenExamples.has(signature(example))&&(subject.id==='cd'||!(index%2===1&&question))){
   seenExamples.add(signature(example));
   const parts=fragments(example);
   // Both hosts do the teaching: one sets up the actual case, the other
   // follows its consequence. Never invent an acknowledgment or a result.
   if(parts.length>1){const split=Math.ceil(parts.length/2);say('leo',parts.slice(0,split).join(' '));say('maya',parts.slice(split).join(' '));}
   else say('maya',sentence(example));
  }else if(question){
   seenQuestions.add(signature(question.prompt));seenQuestions.add('answer:'+signature(question.explanation));say('leo',question.prompt.replace(/\s*Which rule explains this result\?$/i,''));
   const answer=clean(correctAnswer(question)),explanation=spokenSource(question.explanation);
   say('maya',explanation);
   if(!signature(explanation).includes(signature(answer)))say('maya',[
    `That gives us ${answer}.`,`So we'd choose ${answer}.`,`The result is ${answer}.`,`We end up with ${answer}.`,
   ][index%4]);
  }else {
   const steps=[...new Set(group.flatMap(l=>l.teachingSteps||[]).map(spokenSource).filter(Boolean))].filter(step=>!seenExamples.has(signature(step)));
   for(const [stepIndex,step] of steps.slice(0,3).entries()){seenExamples.add(signature(step));say(stepIndex%2?'maya':'leo',sentence(step));}
   const concept=spokenSource(lesson.concept);
   if(!steps.length&&signature(concept)!==signature(idea)&&!seenExamples.has(signature(concept))){seenExamples.add(signature(concept));say('leo',concept);}
  }
  const context=new Set(signature([idea,title,example,...(foundation.terms||[])].join(' ')).split(' ').filter(word=>word.length>3));
  const warnings=fragments(lesson.learningNotes?.watchFor).filter(warning=>!/(?:picture|diagram|animation|visualization|screen|above|below|drag|click)\b/i.test(warning)&&signature(warning).split(' ').filter(word=>context.has(word)).length>=2);
  for(const warning of warnings){if(!seenWarnings.has(signature(warning))){seenWarnings.add(signature(warning));say(index%2?'maya':'leo',sentence(warning));}}
  chapters.push({id:`topic-${lecture}`,title,lecture,startTurn,endTurn:turns.length-1,lessonIds:group.map(l=>l.id)});
 }
 const startTurn=turns.length;
 say('leo',`Before we leave ${lowerFirst(unit.title)}, let's connect the pieces.`);
 // Recap actual concepts, rather than repeating a generic study instruction.
 const recapIdeas=[chapterIdeas[0],chapterIdeas.at(-1)].filter((idea,index,ideas)=>ideas.indexOf(idea)===index);
 for(const [index,idea] of recapIdeas.entries())say(index%2?'leo':'maya',sentence(idea));
 say('maya',[
  `Try explaining ${lowerFirst(titles.at(-1))} in your own words. If you get stuck, that chapter is a good place to listen again.`,
  `When you try a problem on ${lowerFirst(titles.at(-1))}, talk through why each step works. That's a useful check on what has clicked.`,
  `Take a small example of ${lowerFirst(titles[0])} and work it out before looking at the explanation. Then compare your reasoning.`,
  `You can pause here and try the ${unit.title} activities. Pick one idea and see whether you can explain it without the notes.`,
  `A useful next step is to revisit ${lowerFirst(titles.at(-1))} with an example of your own. Keep it small enough to check by hand.`,
  `We've covered a lot in ${lowerFirst(unit.title)}. You don't have to remember every detail at once; start by trying one of the examples yourself.`,
 ][variant]);
 chapters.push({id:'recap',title:'Recap and next steps',startTurn,endTurn:turns.length-1});
 for(const [index,turn] of turns.entries()){
  const edit=pronunciation[`${subject.id}:${unit.id}:${index}`];
  if(edit){if(edit.source!==turn.text)throw Error(`Review the changed pronunciation source for ${subject.id}:${unit.id}:${index}`);if(edit.text)turn.text=edit.text;}
 }
 const speechVersion=subject.id==='cd'?3:4;
 const hash=createHash('sha256').update(JSON.stringify({version:1,speechVersion,title:unit.title,turns,chapters})).digest('hex');
 return {id:`${subject.id}:${unit.id}`,subject:subject.id,unit:unit.id,title:unit.title,courseName:subject.name,description:unit.goal,language:'en-US',syntheticVoices:true,speechVersion,hosts:[{id:'maya',name:'Maya',voice:'af_heart'},{id:'leo',name:'Leo',voice:'am_michael'}],topics:titles,chapters,turns,hash,estimatedMinutes:Math.max(1,Math.round(turns.reduce((sum,t)=>sum+t.text.split(/\s+/).length,0)/145))};
}
if(process.argv[1]?.replaceAll('\\','/').endsWith('/build-podcasts.mjs')){
 const subjectIndex=process.argv.indexOf('--subject'),requested=subjectIndex>=0?process.argv[subjectIndex+1]:null,draft=process.argv.includes('--draft');
 if(subjectIndex>=0&&!subjects.some(s=>s.id===requested))throw Error('Choose a known subject after --subject.');
 if(requested&&!draft&&subjects.find(s=>s.id===requested).status!=='available')throw Error('This subject is unpublished; prepare its local scripts with --draft.');
 if(draft&&!requested)throw Error('--draft requires an explicit --subject; it must not publish unfinished course scripts accidentally.');
 let total=0,topics=0;
 for(const subject of subjects.filter(s=>(!requested||s.id===requested)&&(s.status==='available'||draft))){
  const [{units,lecturePlans},{lessons}]=await Promise.all([import(`../courses/${subject.id}/content/curriculum.js`),import(`../courses/${subject.id}/content/lessons.js`)]);
  if(!units.length||!lessons.length||lessons.some(l=>!l.ready))throw Error(`${subject.id}: finish source readiness before preparing all section conversations.`);
  const episodes=units.map(unit=>buildEpisode(subject,unit,lecturePlans,lessons));
  await fs.writeFile(new URL(`../courses/${subject.id}/data/podcasts.json`,import.meta.url),JSON.stringify({version:1,episodes},null,2)+'\n');
  total+=episodes.length;topics+=episodes.reduce((n,e)=>n+e.topics.length,0);console.log(`${subject.id}: ${episodes.length} section conversations, ${episodes.reduce((n,e)=>n+e.estimatedMinutes,0)} estimated minutes`);
 }
 console.log(`${total} episodes cover ${topics} ${draft?'local draft':'published'} topics.`);
}
