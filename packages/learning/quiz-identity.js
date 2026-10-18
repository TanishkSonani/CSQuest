// Option rotations and changed explanations do not make a new exercise.
export function questionIdentity(question){
 const {explanation,tolerance,revision,...value}=question;
 let prompt=question.prompt.trim().replace(/\s+/g,' ');
 const prefix=prompt.match(/^([^?!.]+[.!])\s+(.+)$/);
 if(prefix&&!/\d/.test(prefix[1])&&/service|routine|catalog|scheduler|batch|feed|file|list|contest|dashboard|ranking|location|image|lookup|inventory|sorter|transaction|explorer|report|stream|planner/i.test(prefix[1]))prompt=prefix[2];
 value.prompt=prompt;if(value.unit==='')delete value.unit;
 if(question.type==='match')value.pairs=[...question.pairs].sort((a,b)=>a[0].localeCompare(b[0]));
 const ordered=value=>Array.isArray(value)?value.map(ordered):value&&typeof value==='object'?Object.fromEntries(Object.keys(value).sort().map(key=>[key,ordered(value[key])])):value;
 if(question.type==='choice')return JSON.stringify(ordered({type:'choice',prompt,options:[...question.options].sort(),answer:question.options[question.answer],...(question.tocGiven?{tocGiven:question.tocGiven}:{})}));
 return JSON.stringify(ordered(value));
}
