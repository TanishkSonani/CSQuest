// Course-authored guidance is bundled with each lesson by the existing publisher.
// Original questions, answers, source evidence and progression IDs stay intact.
export function attachTeachingNotes(lessons,profiles,subject){
 for(const lesson of lessons){
  const title=lesson.foundation.title;
  const profile=profiles.find(p=>new RegExp(p.match,'i').test(title+' '+lesson.title))||profiles.at(-1);
  const simplify=text=>text
   .replace(/ The focus here is [\s\S]*?make it valid\./g,'')
   .replace(/ Apply the same reasoning specifically to [\s\S]*$/,'')
   .replace(/^(?:Meet the idea\.|Discover:|Explore:|Apply:)\s*/,'').trim();
  lesson.foundation={...lesson.foundation,idea:simplify(lesson.foundation.idea),example:simplify(lesson.foundation.example)};
  const steps=lesson.teachingSteps?.length?lesson.teachingSteps:[lesson.foundation.idea,lesson.foundation.example];
  lesson.learningNotes={version:1,subject,profile:profile.id,
   objective:simplify(steps[lesson.id%steps.length]),
   why:profile.why,watchFor:profile.watchFor,experiment:profile.experiment};
 }
 return lessons;
}
