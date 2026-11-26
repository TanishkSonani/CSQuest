export function subtitlesToVtt(text){
 text=text.replace(/^\uFEFF/,'').replace(/\r\n?/g,'\n');
 if(/^WEBVTT(?:\s|$)/.test(text))return text;
 const converted=text.split('\n\n').map(block=>block.replace(/^\d+\s*\n/,'').replace(/(\d{2}:\d{2}:\d{2}),(\d{3})/g,'$1.$2')).join('\n\n');
 if(!/\d{2}:\d{2}:\d{2}\.\d{3}\s+-->\s+\d{2}:\d{2}:\d{2}\.\d{3}/.test(converted))throw Error('Choose a valid SRT or WebVTT subtitle file.');
 return 'WEBVTT\n\n'+converted;
}
export function mountVideoTracks(video,container,notice){
 const node=document.createElement('section');node.className='video-track-settings';
 node.innerHTML='<label>Subtitles<select aria-label="Subtitle track"><option value="-1">Off</option></select></label><label class="subtitle-file">Load SRT / VTT<input type="file" accept=".srt,.vtt,text/vtt" aria-label="Load subtitles"></label><label>Subtitle delay (seconds)<input type="number" min="-600" max="600" step="0.1" value="0" aria-label="Subtitle delay"></label><label>Audio track<select aria-label="Audio track"><option>Default audio</option></select></label><small data-track-note></small>';
 container.append(node);const [subtitles,audio]=node.querySelectorAll('select'),delay=node.querySelector('input[type=number]'),file=node.querySelector('input[type=file]'),times=new WeakMap(),urls=[];
 function sync(){
  const current=subtitles.value;subtitles.replaceChildren(new Option('Off','-1'));
  Array.from(video.textTracks).forEach((track,i)=>subtitles.append(new Option(track.label||track.language||'Subtitles '+(i+1),String(i))));subtitles.value=[...subtitles.options].some(o=>o.value===current)?current:'-1';
  const tracks=video.audioTracks;audio.replaceChildren();
  if(tracks?.length){Array.from(tracks).forEach((track,i)=>audio.append(new Option(track.label||track.language||'Audio '+(i+1),String(i),false,track.enabled)));audio.disabled=false;node.querySelector('[data-track-note]').textContent='';}
  else{audio.append(new Option('Default audio','0'));audio.disabled=true;node.querySelector('[data-track-note]').textContent='This browser exposes only the default audio track. For unsupported MKV tracks, download and open the original in VLC.';}
 }
 const choose=()=>Array.from(video.textTracks).forEach((track,i)=>track.mode=String(i)===subtitles.value?'showing':'disabled');
 function shift(){const offset=Number(delay.value);if(!Number.isFinite(offset)||Math.abs(offset)>600)return;for(const track of Array.from(video.textTracks))for(const cue of track.cues||[]){if(!times.has(cue))times.set(cue,[cue.startTime,cue.endTime]);const [start,end]=times.get(cue);cue.startTime=Math.max(0,start+offset);cue.endTime=Math.max(cue.startTime+.01,end+offset);}}
 subtitles.onchange=choose;delay.oninput=shift;audio.onchange=()=>{for(const [i,track] of Array.from(video.audioTracks||[]).entries())track.enabled=String(i)===audio.value;};
 file.onchange=async()=>{const selected=file.files[0];if(!selected)return;try{
  if(selected.size>2*1024**2)throw Error('Subtitle files must be 2 MB or smaller.');
  const url=URL.createObjectURL(new Blob([subtitlesToVtt(await selected.text())],{type:'text/vtt'}));urls.push(url);const track=document.createElement('track');track.kind='subtitles';track.label=selected.name;track.src=url;
  track.onload=()=>{sync();subtitles.value=String(Array.from(video.textTracks).indexOf(track.track));choose();shift();notice('Subtitles loaded.');};track.onerror=()=>notice('Subtitles could not be loaded. Check the file format.');video.append(track);track.track.mode='hidden';
 }catch(error){notice(error.message);}finally{file.value='';}};
 video.textTracks.addEventListener('addtrack',sync);video.audioTracks?.addEventListener('addtrack',sync);video.addEventListener('loadedmetadata',sync);sync();
 return ()=>{urls.forEach(url=>URL.revokeObjectURL(url));video.textTracks.removeEventListener('addtrack',sync);video.audioTracks?.removeEventListener('addtrack',sync);video.removeEventListener('loadedmetadata',sync);};
}
