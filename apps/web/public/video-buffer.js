// Let the browser schedule one ranged media stream and manage its memory budget.
// Do not fetch a second copy or turn multi-GB videos into in-memory Blobs.
export function attachVideoBuffer(video,seek){
 const connection=navigator.connection;
 const preload=()=>{video.preload=connection?.saveData?'metadata':'auto';};
 preload();connection?.addEventListener?.('change',preload);
 const shell=document.createElement('div');shell.className='library-video-seek';
 const track=document.createElement('div');track.className='video-buffer-track';track.setAttribute('aria-hidden','true');
 const buffered=document.createElement('div');buffered.className='video-buffer-ranges';
 const played=document.createElement('span');played.className='video-buffer-played';
 seek.before(shell);shell.append(track,seek);track.append(buffered,played);
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
  seek.title='Buffered ahead: '+Math.floor(ahead/Math.max(.25,video.playbackRate))+' seconds at '+video.playbackRate+'×';
 }
 const events=['progress','loadedmetadata','durationchange','timeupdate','seeking','seeked','ratechange','emptied'];
 for(const event of events)video.addEventListener(event,update);
 update();
 return ()=>{connection?.removeEventListener?.('change',preload);for(const event of events)video.removeEventListener(event,update);};
}
