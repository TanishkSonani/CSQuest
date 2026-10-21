// Let the browser schedule one ranged media stream and manage its memory budget.
// Do not fetch a second copy or turn multi-GB videos into in-memory Blobs.
export function attachVideoBuffer(video,seek,formatTime){
 const connection=navigator.connection;
 const preload=()=>{video.preload=connection?.saveData?'metadata':'auto';};
 preload();connection?.addEventListener?.('change',preload);
 const shell=document.createElement('div');shell.className='library-video-seek';
 const track=document.createElement('div');track.className='video-buffer-track';track.setAttribute('aria-hidden','true');
 const buffered=document.createElement('div');buffered.className='video-buffer-ranges';
 const played=document.createElement('span');played.className='video-buffer-played';
 seek.before(shell);shell.append(track,seek);track.append(buffered,played);
 const tooltip=document.createElement('output');tooltip.className='video-seek-tooltip';tooltip.hidden=true;tooltip.setAttribute('aria-hidden','true');shell.append(tooltip);
 function preview(event){
  if(!Number.isFinite(video.duration)||video.duration<=0)return;
  const rect=seek.getBoundingClientRect(),ratio=Math.max(0,Math.min(1,(event.clientX-rect.left-7)/Math.max(1,rect.width-14)));
  tooltip.textContent=formatTime(video.duration*ratio);tooltip.hidden=false;
  tooltip.style.left=Math.max(tooltip.offsetWidth/2,Math.min(rect.width-tooltip.offsetWidth/2,7+ratio*(rect.width-14)))+'px';
 }
 const hidePreview=()=>tooltip.hidden=true;
 seek.addEventListener('pointermove',preview);seek.addEventListener('pointerleave',hidePreview);seek.addEventListener('blur',hidePreview);
 let previousRanges='';
 function update(){
  const duration=Number.isFinite(video.duration)&&video.duration>0?video.duration:0;
  const time=Number.isFinite(video.currentTime)?video.currentTime:0,ranges=[];let ahead=0;
  if(duration)for(let i=0;i<video.buffered.length;i++){
   const start=Math.max(0,Math.min(duration,video.buffered.start(i))),end=Math.max(start,Math.min(duration,video.buffered.end(i)));
   if(end>start)ranges.push([100*start/duration,100*(end-start)/duration]);
   if(start<=time&&end>=time)ahead=end-time;
  }
  const signature=JSON.stringify(ranges);
  if(signature!==previousRanges){
   buffered.replaceChildren(...ranges.map(([left,width])=>{const span=document.createElement('span');span.style.left=left+'%';span.style.width=width+'%';return span;}));previousRanges=signature;
  }
  played.style.width=(duration?Math.max(0,Math.min(100,100*time/duration)):0)+'%';
  seek.dataset.bufferedAhead=String(Math.floor(ahead/Math.max(.25,video.playbackRate)));
 }
 const events=['progress','loadedmetadata','durationchange','timeupdate','seeking','seeked','ratechange','emptied'];
 for(const event of events)video.addEventListener(event,update);
 update();
 return ()=>{connection?.removeEventListener?.('change',preload);for(const event of events)video.removeEventListener(event,update);seek.removeEventListener('pointermove',preview);seek.removeEventListener('pointerleave',hidePreview);seek.removeEventListener('blur',hidePreview);};
}
