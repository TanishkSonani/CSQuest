import {escapeHtml as h} from '/shared/engine.js';
import {playVideo,formatLibraryBytes} from './library.js';
import {playLibraryAudio,pauseSharedAudio} from './podcasts.js';
const root=document.querySelector('[data-public-file]');let request;
async function load(){
 request?.abort();request=new AbortController();const signal=request.signal;
 pauseSharedAudio();document.querySelector('.library-video-dialog')?.close();
 root.innerHTML='<p role="status">Opening shared file…</p>';
 try{
  const token=location.hash.slice(1);if(!/^[A-Za-z0-9_-]{43}$/.test(token))throw Error('This shared link is unavailable or has expired.');
  const response=await fetch('/api/library/public-info?token='+encodeURIComponent(token),{cache:'no-store',credentials:'omit',signal});
  const file=await response.json();if(!response.ok)throw Error(file.error||'This shared link is unavailable.');
  file.url='/api/library/public-file?token='+encodeURIComponent(token);file.downloadUrl=file.url+'&download=1';file.publicShare=true;
  const playable=/^(audio|video)\//.test(file.mediaType||'');
  root.innerHTML=`<div class="page-eyebrow">SHARED WITH YOU</div><h1>${h(file.name)}</h1><p>${h(formatLibraryBytes(file.size))}${file.mediaType?' · '+h(file.mediaType):''}</p><p>This file was shared from CSQuest Library. No account is needed.</p>${file.expiresAt?`<p>Link expires ${h(new Date(file.expiresAt).toLocaleString())}.</p>`:''}<div class="button-row">${playable?'<button class="btn" data-public-play>PLAY FILE</button>':''}<a class="btn secondary" href="${h(file.downloadUrl)}">DOWNLOAD FILE</a></div><p role="status" data-public-message></p>`;
  const play=root.querySelector('[data-public-play]');if(play)play.onclick=()=>{if(file.mediaType.startsWith('video/'))playVideo(file);else playLibraryAudio(file,'Shared file');};
 }catch(error){if(signal.aborted)return;root.innerHTML=`<div class="page-eyebrow">SHARED FILE</div><h1>Link unavailable</h1><p role="alert">${h(error.message)}</p><p>Ask the person who shared it for a new link.</p>`;}
}
window.addEventListener('hashchange',load);load();
