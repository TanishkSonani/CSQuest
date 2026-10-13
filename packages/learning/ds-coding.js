// Checks guided C fragments; never executes submitted source code.
const lex=text=>String(text).match(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|[A-Za-z_]\w*|\d+(?:\.\d+)?|->|\+\+|--|<=|>=|==|!=|&&|\|\||[^\s]/g)?.join('\u0000')||'';
export function checkCodingLab(lab,values){
 const shape=Array.isArray(values)&&values.length===lab.answer.length;
 const blanks=lab.answer.map((expected,index)=>{const value=Array.isArray(values)?values[index]:null,status=typeof value!=='string'||!value.trim()?'empty':value.length<=160&&lex(value)===lex(expected)?'correct':'incorrect';return {index,status,hint:lab.hints[index]};});
 return {complete:shape&&blanks.every(b=>b.status!=='empty'),correct:shape&&blanks.every(b=>b.status==='correct'),blanks};
}
export function codingProgram(lab,values){return lab.template.replace(/\{\{(\d+)\}\}/g,(_,i)=>typeof values?.[Number(i)]==='string'?values[Number(i)]:`[blank ${Number(i)+1}]`);}
export function restoreCodingDraft(lab,raw){
 const valid=raw?.version===lab.version&&Array.isArray(raw.values)&&raw.values.length===lab.answer.length&&raw.values.every(v=>v===null||(typeof v==='string'&&v.length<=160));
 return {version:lab.version,values:valid?[...raw.values]:Array(lab.answer.length).fill(null),completedAt:valid&&Number.isFinite(raw.completedAt)&&raw.completedAt>0?raw.completedAt:null};
}
export function codingLabCompleted(lab,raw){return Boolean(restoreCodingDraft(lab,raw).completedAt);}
