import {escapeHtml as h} from '/shared/engine.js';
import {account} from './account-client.js';
import {icon} from './icons.js';

const audio=new Audio();audio.preload='none';
let catalog=null,catalogPromise,detail=null,owner=null,queue=[],rate=1,follow=true,activeTurn=-1,loadEpoch=0,pendingSeek=null,lastSave=0,error='',filter='all',query='',contextSubjects=[],openTranscriptPending=false;
const time=value=>{const seconds=Math.max(0,Math.floor(Number(value)||0));return `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;};
const glyph=name=>{
 const paths={play:'<path d="m9 5 11 7-11 7z" fill="currentColor" stroke="none"/>',pause:'<path d="M8 5v14M16 5v14" stroke-width="4"/>',previous:'<path d="M6 5v14m13-14L9 12l10 7z"/>',next:'<path d="M18 5v14M5 5l10 7-10 7z"/>',back:'<path d="M5 8a8 8 0 1 1-1 7M5 3v5h5"/>',forward:'<path d="M19 8a8 8 0 1 0 1 7m-1-12v5h-5"/>'};
 return `<svg class="podcast-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>${['back','forward'].includes(name)?'<span class="podcast-skip-value" aria-hidden="true">15</span>':''}`;
};
const control=(action,label,content,cls='')=>`<button type="button" class="podcast-control ${cls}" data-podcast-action="${action}" aria-label="${label}" title="${label}">${content}</button>`;
const bookmarkKey=()=>`csquest:podcasts:${owner||'guest'}`;
function sizeReader(){
 const top=(document.querySelector('.topbar')?.getBoundingClientRect().bottom||80)+16,dock=document.querySelector('#podcast-player');
 const bottom=dock&&!dock.hidden?dock.getBoundingClientRect().top:innerHeight;
 document.documentElement.style.setProperty('--podcast-reader-top',`${top}px`);
 document.documentElement.style.setProperty('--podcast-reader-height',`${Math.max(120,bottom-top-16)}px`);
}
const playerSizeObserver=new ResizeObserver(sizeReader);
window.addEventListener('resize',sizeReader,{passive:true});
async function request(url){const response=await fetch(url,{credentials:'same-origin',signal:AbortSignal.timeout(20000)});const result=await response.json();if(!response.ok)throw Error(result.error||'Could not load the podcast.');return result;}
export function podcastSectionCard(subject,unit){return `<section class="card podcast-section-card" aria-label="Section audio podcast"><span class="podcast-art" aria-hidden="true">${icon('sound')}</span><div><span class="page-eyebrow">LISTEN &amp; LEARN</span><h3>${h(unit.title)}</h3><p>A two-host conversation covering every topic in this section.</p><div class="button-row"><button type="button" class="btn secondary" data-podcast-section="${h(subject.id)}" data-podcast-unit="${unit.id}">PLAY SECTION ${icon('sound')}</button><a class="text-button" href="#podcasts">ALL PODCASTS ${icon('arrow')}</a></div></div></section>`;}
export function podcastsView(subjects){contextSubjects=subjects;return `<section class="podcast-library"><header class="podcast-library-heading"><span class="podcast-art" aria-hidden="true">${icon('sound')}</span><div><div class="page-eyebrow">CSQUEST AUDIO</div><h1>Big ideas. Good conversation.</h1><p class="page-description">Maya and Leo introduce each section, then explain every topic with examples. Pick a section to start a sequential playlist.</p></div></header><div class="card podcast-library-tools"><label>Course<select id="podcast-course"><option value="all">All published courses</option>${subjects.filter(s=>s.status==='available').map(s=>`<option value="${h(s.id)}" ${filter===s.id?'selected':''}>${h(s.name)}</option>`).join('')}</select></label><label>Find a topic<input id="podcast-search" type="search" placeholder="Search sections or concepts" value="${h(query)}"></label><button class="btn secondary" data-podcast-action="refresh">REFRESH</button></div><p class="tiny-note">English · Two synthetic voices · Listening does not change your XP or completed lessons.</p><div class="podcast-library-layout"><section aria-label="Section playlist"><div data-podcast-list>${listMarkup()}</div></section><section class="card podcast-detail" data-podcast-detail tabindex="0" aria-label="Episode chapters and live transcript">${detailMarkup()}</section></div></section>`;}
function filtered(){const term=query.trim().toLowerCase();return (catalog||[]).filter(e=>(filter==='all'||e.subject===filter)&&(!term||[e.title,e.courseName,...e.topics].join(' ').toLowerCase().includes(term)));}
function listMarkup(){
 if(!catalog)return `<div class="card" role="status">${error?h(error):'Loading section podcasts…'}${error?'<button class="btn secondary" data-podcast-action="refresh">TRY AGAIN</button>':''}</div>`;
 const entries=filtered();
 return `<p class="tiny-note" data-podcast-results>${entries.length} section${entries.length===1?'':'s'} · ${entries.filter(e=>e.ready).length} audio episodes ready</p><ol class="podcast-episode-list">${entries.map((episode,index)=>`<li><button type="button" class="podcast-episode ${detail?.id===episode.id?'is-selected':''}" data-podcast-id="${h(episode.id)}" aria-label="${episode.ready?'Play':'Read'} ${h(episode.title)}" ${detail?.id===episode.id?'aria-current="true"':''}><span class="podcast-episode-number" aria-hidden="true">${detail?.id===episode.id&&!audio.paused?'♫':String(index+1).padStart(2,'0')}</span><span><small>${h(episode.courseName)} · SECTION ${episode.unit+1}</small><strong>${h(episode.title)}</strong><small>${episode.topics.length} topics · ${episode.ready?time(episode.duration):`Audio being prepared · about ${episode.estimatedMinutes} min`}</small></span><span class="podcast-episode-play" aria-hidden="true">${episode.ready?'▶':icon('book')}</span></button></li>`).join('')}</ol>${entries.length?'':'<div class="social-empty"><h3>No matching sections</h3><p>Try a different course or topic.</p></div>'}`;
}
function detailMarkup(){
 if(!detail)return `<div class="podcast-empty-detail">${icon('sound')}<h2>Your next conversation</h2><p>Choose a section to see its topic chapters and live transcript. Audio keeps playing as you move around CSQuest.</p></div>`;
 return `<div class="podcast-detail-heading"><span class="page-eyebrow">${h(detail.courseName)} · SECTION ${detail.unit+1}</span><h2>${h(detail.title)}</h2><p>${h(detail.description)}</p>${detail.ready?`<a class="text-button" href="${h(detail.audioUrl)}" download="${h(detail.subject)}-section-${detail.unit+1}.mp3">DOWNLOAD MP3</a>`:''}${!detail.ready?'<p class="podcast-preparing" role="status">The conversation is ready to read. Audio is still being prepared.</p>':''}</div><details class="podcast-chapters"><summary>Topic chapters</summary><ol>${detail.chapters.map(chapter=>`<li><button type="button" data-podcast-chapter="${h(chapter.id)}" ${!detail.ready?'disabled':''}><span>${h(chapter.title)}</span><time>${detail.ready?time(chapter.start):'—'}</time></button></li>`).join('')}</ol></details><div class="podcast-transcript-heading"><h3>Live transcript</h3><button type="button" class="podcast-follow-button" data-podcast-action="follow" aria-pressed="true">Following audio</button><label><input type="checkbox" data-podcast-follow ${follow?'checked':''}> Follow audio</label></div><p class="podcast-transcript-hint" id="podcast-transcript-help">Scroll to read the full conversation. Select a timed line to listen from there. Manual scrolling pauses Follow audio.</p><div class="podcast-transcript" role="region" aria-label="Conversation transcript" aria-describedby="podcast-transcript-help">${detail.turns.map((turn,index)=>`<button type="button" class="podcast-turn ${index===activeTurn?'is-active':''}" data-podcast-turn="${index}" ${!detail.ready?'disabled':''} ${index===activeTurn?'aria-current="true"':''}><span><b>${turn.speaker==='maya'?'Maya':'Leo'}</b>${detail.ready?`<time>${time(turn.start)}</time>`:''}</span><span>${h(turn.text)}</span></button>`).join('')}</div>`;
}
function renderLibrary({transcript=true}={}){const list=document.querySelector('[data-podcast-list]');if(list)list.innerHTML=listMarkup();if(transcript){const panel=document.querySelector('[data-podcast-detail]');if(panel){panel.innerHTML=detailMarkup();activeTurn=-1;}}updateTime();}
async function loadCatalog(force=false){
 if(catalog&&!force)return catalog;
 if(catalogPromise&&!force)return catalogPromise;
 const ticket=owner;
 catalogPromise=request('/api/podcasts').then(result=>{if(ticket!==owner)return [];catalog=result.episodes;error='';renderLibrary();return catalog;}).catch(problem=>{if(ticket===owner){error=problem.message;renderLibrary();}throw problem;}).finally(()=>{catalogPromise=null;});
 return catalogPromise;
}
function ensureDock(){
 let root=document.querySelector('#podcast-player');if(root)return root;
 root=document.createElement('section');root.id='podcast-player';root.className='podcast-player';root.hidden=true;root.setAttribute('aria-label','Podcast player');
 root.innerHTML=`<div class="podcast-now"><span class="podcast-art" aria-hidden="true">${icon('sound')}</span><div><small data-podcast-now-course></small><a href="#podcasts" data-podcast-open-transcript data-podcast-now-title>Section podcast</a><small data-podcast-now-status role="status"></small><small data-podcast-now-chapter></small></div></div><div class="podcast-player-middle"><div class="podcast-transport">${control('previous','Previous episode',glyph('previous'))}${control('back','Back 15 seconds',glyph('back'),'podcast-skip')}${control('toggle','Play podcast',glyph('play'),'podcast-play')}${control('forward','Forward 15 seconds',glyph('forward'),'podcast-skip')}${control('next','Next episode',glyph('next'))}</div><div class="podcast-seek"><time data-podcast-elapsed>0:00</time><input type="range" min="0" max="1" value="0" step="0.1" aria-label="Podcast playback position" data-podcast-seek><time data-podcast-duration>0:00</time></div></div><div class="podcast-player-tools"><label>Speed<select data-podcast-speed aria-label="Playback speed">${[.75,1,1.25,1.5,1.75,2].map(value=>`<option value="${value}" ${value===rate?'selected':''}>${value}×</option>`).join('')}</select></label><a class="text-button podcast-transcript-link" href="#podcasts" data-podcast-open-transcript aria-label="Open live transcript">${icon('book')}<span>TRANSCRIPT</span></a>${control('close','Close podcast player',icon('close'))}</div>`;
 document.body.append(root);playerSizeObserver.observe(root);return root;
}
function savePosition(){if(!detail||!owner)return;try{localStorage.setItem(bookmarkKey(),JSON.stringify({id:detail.id,time:audio.currentTime||0,rate}));}catch{}}
function restorePosition(){try{return JSON.parse(localStorage.getItem(bookmarkKey())||'null');}catch{return null;}}
function updateDock(){
 const dock=ensureDock();dock.hidden=!detail;document.documentElement.classList.toggle('has-podcast-player',!!detail);
 sizeReader();
 if(!detail)return;
 dock.querySelector('[data-podcast-now-course]').textContent=`${detail.courseName} · Section ${detail.unit+1}`;
 dock.querySelector('[data-podcast-now-title]').textContent=detail.title;
 const status=dock.querySelector('[data-podcast-now-status]');status.textContent=error||(!detail.ready?'Audio being prepared':audio.paused?'Paused':`Playing · ${queue.indexOf(detail.id)+1} of ${queue.length}`);
 dock.classList.toggle('is-playing',!audio.paused);dock.classList.toggle('is-following',follow);
 const play=dock.querySelector('[data-podcast-action=toggle]');play.disabled=!detail.ready;play.innerHTML=audio.paused?glyph('play'):glyph('pause');play.setAttribute('aria-label',audio.paused?'Play podcast':'Pause podcast');play.title=audio.paused?'Play podcast':'Pause podcast';
 const index=queue.indexOf(detail.id);dock.querySelector('[data-podcast-action=previous]').disabled=index<=0;dock.querySelector('[data-podcast-action=next]').disabled=index<0||index>=queue.length-1;
 dock.querySelectorAll('[data-podcast-action=back],[data-podcast-action=forward],[data-podcast-seek]').forEach(el=>el.disabled=!detail.ready);
 dock.querySelector('[data-podcast-speed]').value=String(rate);updateTime();
}
function seek(value){if(!detail?.ready)return;const position=Math.min(Math.max(0,Number(value)||0),Math.max(0,(detail.duration||0)-.05));if(audio.readyState>=1)audio.currentTime=position;else{pendingSeek=position;audio.load();}savePosition();updateTime();}
function pauseTranscriptFollow(){follow=false;const toggle=document.querySelector('[data-podcast-follow]');if(toggle)toggle.checked=false;updateFollowControl();}
function updateFollowControl(){const button=document.querySelector('[data-podcast-action=follow]');if(button){button.hidden=!detail?.ready;button.setAttribute('aria-pressed',String(follow));button.textContent=follow?'Following audio':'Back to audio';}document.querySelector('#podcast-player')?.classList.toggle('is-following',follow);}
function followActiveTurn(force=true){
 const line=document.querySelector(`[data-podcast-turn="${activeTurn}"]`),container=line?.closest('[data-podcast-detail]');
 if(!line||!container)return;
 const caption=line.getBoundingClientRect(),reader=container.getBoundingClientRect();
 const toolbar=container.querySelector('.podcast-transcript-heading'),inset=(toolbar?.getBoundingClientRect().height||0)+16;
 if(force||caption.top<reader.top+inset||caption.top>reader.bottom-32||(caption.height<reader.height-inset&&caption.bottom>reader.bottom-8))container.scrollTop+=caption.top-reader.top-inset;
}
function openTranscript(){
 const container=document.querySelector('[data-podcast-detail]:has(.podcast-transcript)');
 if(!container){openTranscriptPending=true;location.hash='#podcasts';return;}
 openTranscriptPending=false;
 requestAnimationFrame(()=>{sizeReader();container.scrollIntoView({block:'start',behavior:'auto'});container.focus({preventScroll:true});if(follow&&activeTurn>=0)followActiveTurn();else{const heading=container.querySelector('.podcast-transcript-heading');container.scrollTop+=heading.getBoundingClientRect().top-container.getBoundingClientRect().top-14;}});
}
function updateTime(){
 if(!detail)return;const dock=document.querySelector('#podcast-player');if(!dock)return;
 const duration=Number.isFinite(audio.duration)?audio.duration:detail.duration||0,current=audio.currentTime||0;
 dock.querySelector('[data-podcast-elapsed]').textContent=time(current);dock.querySelector('[data-podcast-duration]').textContent=time(duration);
 const slider=dock.querySelector('[data-podcast-seek]');slider.max=String(duration||1);slider.value=String(current);slider.setAttribute('aria-valuetext',`${time(current)} of ${time(duration)}`);
 slider.style.setProperty('--podcast-progress',`${duration?Math.min(100,current/duration*100):0}%`);
 const chapter=detail.chapters.find(chapter=>Number.isFinite(chapter.start)&&current>=chapter.start&&current<chapter.end);
 const chapterLabel=dock.querySelector('[data-podcast-now-chapter]');if(chapterLabel)chapterLabel.textContent=chapter?.title||'Section conversation';
 updateFollowControl();
 const nextTurn=detail.turns.findLastIndex(turn=>Number.isFinite(turn.start)&&current+.02>=turn.start);
 if(nextTurn!==activeTurn&&nextTurn>=0){activeTurn=nextTurn;document.querySelectorAll('[data-podcast-turn]').forEach(line=>{const active=Number(line.dataset.podcastTurn)===activeTurn;line.classList.toggle('is-active',active);if(active)line.setAttribute('aria-current','true');else line.removeAttribute('aria-current');});
  if(follow)followActiveTurn();
 }
 if(follow)followActiveTurn(false);
 if('mediaSession' in navigator&&duration>0)try{navigator.mediaSession.setPositionState({duration,playbackRate:rate,position:Math.min(current,duration)});}catch{}
 if(Date.now()-lastSave>5000){lastSave=Date.now();savePosition();}
}
async function playEpisode(id,{source='library',preserveQueue=false,start=null,autoplay=true}={}){
 const ticket=++loadEpoch;audio.pause();savePosition();error='';
 try{
  await loadCatalog();if(ticket!==loadEpoch)return;
  const episode=catalog.find(e=>e.id===id);if(!episode)throw Error('This section podcast is not available.');
  if(source==='course'){filter=episode.subject;query='';}
  if(!preserveQueue)queue=(source==='course'?catalog.filter(e=>e.subject===episode.subject):filtered()).map(e=>e.id);
  const result=await request(`/api/podcast?subject=${encodeURIComponent(episode.subject)}&unit=${episode.unit}`);if(ticket!==loadEpoch)return;
  detail=result;activeTurn=-1;follow=true;audio.removeAttribute('src');audio.load();pendingSeek=null;
  if(result.audioUrl){audio.src=result.audioUrl;audio.playbackRate=rate;const saved=restorePosition();pendingSeek=start??(saved?.id===id&&saved.time<result.duration-3?saved.time:0);}
  renderLibrary();updateDock();
  const panel=document.querySelector('[data-podcast-detail]');if(panel)panel.scrollIntoView({block:'start',behavior:'auto'});
  if(result.ready&&autoplay)try{await audio.play();}catch(problem){if(ticket!==loadEpoch)return;error=problem.name==='NotAllowedError'?'Press play to start listening.':'Audio could not start. Try play again.';updateDock();}
  if(ticket!==loadEpoch)return;
  if('mediaSession' in navigator&&typeof MediaMetadata!=='undefined')navigator.mediaSession.metadata=new MediaMetadata({title:detail.title,artist:'Maya & Leo · CSQuest',album:detail.courseName});
 }catch(problem){error=problem.message;updateDock();const root=document.querySelector('[data-podcast-list]');if(root&&!detail)root.innerHTML=`<p role="alert">${h(error)}</p>`;}
}
function moveEpisode(delta){const index=queue.indexOf(detail?.id),id=queue[index+delta];if(id)playEpisode(id,{preserveQueue:true,start:0});}
function closePlayer(){savePosition();audio.pause();audio.removeAttribute('src');audio.load();detail=null;queue=[];activeTurn=-1;loadEpoch++;updateDock();renderLibrary();if('mediaSession' in navigator)navigator.mediaSession.metadata=null;}
export function mountPodcasts(subjects){
 contextSubjects=subjects;const nextOwner=account.user?.id||null;
 if(nextOwner!==owner){closePlayer();owner=nextOwner;catalog=null;catalogPromise=null;error='';query='';filter='all';const saved=restorePosition();rate=[.75,1,1.25,1.5,1.75,2].includes(saved?.rate)?saved.rate:1;}
 ensureDock();if(!owner)return;
 if(openTranscriptPending&&document.querySelector('.podcast-transcript'))openTranscript();
 if(document.querySelector('.podcast-library')){loadCatalog().catch(()=>{});if(detail&&follow)openTranscript();}updateDock();
}
document.addEventListener('click',event=>{
 if(event.target.closest('[data-podcast-open-transcript]')){event.preventDefault();openTranscript();return;}
 const section=event.target.closest('[data-podcast-section]');if(section){playEpisode(`${section.dataset.podcastSection}:${section.dataset.podcastUnit}`,{source:'course'});return;}
 const episode=event.target.closest('[data-podcast-id]');if(episode){playEpisode(episode.dataset.podcastId);return;}
 const turn=event.target.closest('[data-podcast-turn]');if(turn){follow=true;const toggle=document.querySelector('[data-podcast-follow]');if(toggle)toggle.checked=true;seek(detail.turns[Number(turn.dataset.podcastTurn)]?.start);return;}
 const chapter=event.target.closest('[data-podcast-chapter]');if(chapter){follow=true;const toggle=document.querySelector('[data-podcast-follow]');if(toggle)toggle.checked=true;seek(detail.chapters.find(c=>c.id===chapter.dataset.podcastChapter)?.start);return;}
 const action=event.target.closest('[data-podcast-action]')?.dataset.podcastAction;
 if(action==='toggle'){if(audio.paused)audio.play().then(()=>{error='';updateDock();}).catch(()=>{error='Could not play audio. Check your connection and try again.';updateDock();});else{audio.pause();updateDock();}}
 if(action==='previous')moveEpisode(-1);if(action==='next')moveEpisode(1);if(action==='back')seek(audio.currentTime-15);if(action==='forward')seek(audio.currentTime+15);if(action==='close')closePlayer();if(action==='refresh'){catalog=null;error='';renderLibrary();loadCatalog(true).then(()=>{if(detail&&!detail.ready&&catalog?.find(episode=>episode.id===detail.id)?.ready)playEpisode(detail.id,{preserveQueue:true,start:0,autoplay:false});}).catch(()=>{});}
 if(action==='follow'){follow=true;const toggle=document.querySelector('[data-podcast-follow]');if(toggle)toggle.checked=true;updateFollowControl();openTranscript();}
});
document.addEventListener('input',event=>{if(event.target.id==='podcast-search'){query=event.target.value;renderLibrary({transcript:false});}if(event.target.matches('[data-podcast-seek]'))seek(event.target.value);});
document.addEventListener('change',event=>{if(event.target.id==='podcast-course'){filter=event.target.value;renderLibrary({transcript:false});}if(event.target.matches('[data-podcast-speed]')){rate=Number(event.target.value);audio.playbackRate=rate;savePosition();updateDock();}if(event.target.matches('[data-podcast-follow]')){follow=event.target.checked;updateFollowControl();if(follow)followActiveTurn();}});
for(const eventName of ['wheel','touchmove'])document.addEventListener(eventName,event=>{if(event.target.closest('[data-podcast-detail]'))pauseTranscriptFollow();},{passive:true});
document.addEventListener('pointerdown',event=>{const reader=event.target.closest('[data-podcast-detail]');if(reader&&event.pointerType!=='touch'&&event.clientX>=reader.getBoundingClientRect().right-18)pauseTranscriptFollow();},{passive:true});
document.addEventListener('keydown',event=>{
 const reader=event.target.closest('[data-podcast-detail]');
 if(!reader||event.target.closest('input,select')||event.altKey||event.ctrlKey||event.metaKey)return;
 if(!['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(event.key))return;
 if(event.key===' '&&event.target!==reader)return;
 pauseTranscriptFollow();event.preventDefault();
 const positions={Home:0,End:reader.scrollHeight,ArrowDown:reader.scrollTop+48,ArrowUp:reader.scrollTop-48,PageDown:reader.scrollTop+reader.clientHeight*.85,PageUp:reader.scrollTop-reader.clientHeight*.85,' ':reader.scrollTop+reader.clientHeight*.85*(event.shiftKey?-1:1)};
 reader.scrollTop=positions[event.key];
});
audio.addEventListener('timeupdate',updateTime);audio.addEventListener('loadedmetadata',()=>{if(pendingSeek!==null){audio.currentTime=pendingSeek;pendingSeek=null;}updateTime();});
for(const event of ['play','pause','ratechange'])audio.addEventListener(event,()=>{if('mediaSession' in navigator)navigator.mediaSession.playbackState=audio.paused?'paused':'playing';updateDock();});
audio.addEventListener('ended',()=>{savePosition();const index=queue.indexOf(detail?.id);if(index>=0&&index<queue.length-1)moveEpisode(1);else{error='You reached the end of this playlist.';updateDock();}});
audio.addEventListener('error',()=>{if(detail?.ready&&audio.getAttribute('src')){error='Audio could not load. Check your connection and try again.';updateDock();}});
window.addEventListener('pagehide',savePosition);
window.addEventListener('account-status',()=>{if(owner&&account.user?.id!==owner){closePlayer();owner=null;catalog=null;}});
if('mediaSession' in navigator)for(const [action,handler] of Object.entries({play:()=>audio.play().catch(()=>{}),pause:()=>audio.pause(),seekbackward:()=>seek(audio.currentTime-15),seekforward:()=>seek(audio.currentTime+15),previoustrack:()=>moveEpisode(-1),nexttrack:()=>moveEpisode(1),seekto:details=>seek(details.seekTime)}))try{navigator.mediaSession.setActionHandler(action,handler);}catch{}
