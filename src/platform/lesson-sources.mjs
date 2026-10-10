// Evidence links use completed transcripts; ASR formulas still require review.
export function linkLessons(transcript,lessons){
  return lessons.filter(l=>l.lecture===transcript.id).map(l=>{
    const targets=l.anchors||l.title.toLowerCase().split(/\W+/).filter(w=>w.length>3);
    const candidates=transcript.segments.filter(s=>targets.some(a=>s.text.toLowerCase().includes(a)));
    const picks=candidates.length?candidates:transcript.segments;
    const references=[0,.4,.8].map(r=>picks[Math.min(picks.length-1,Math.floor(picks.length*r))]).filter(Boolean);
    const source=references[l.id%3]||references[0];
    return {id:l.id,lecture:l.lecture,ready:Boolean(source),start:source?.start??l.start,excerpt:source?.text.trim()||'',references:references.map(s=>({start:s.start,end:s.end,text:s.text.trim()})),sourceFile:transcript.file,linkMethod:candidates.length?'topic text match':'lecture reference'};
  });
}
