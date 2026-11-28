import {RemoteAudio} from './remote-audio.js';
const $=s=>document.querySelector(s),kind=location.pathname==='/workspace/browser'?'firefox':location.pathname==='/workspace/terminal'?'terminal':new URL(location.href).searchParams.get('app'),label=kind==='firefox'?'Firefox':'Terminal';
// Preserve old bookmarks while giving every session a clean address.
if(location.pathname==='/remote.html'&&['firefox','terminal'].includes(kind))history.replaceState(null,'',kind==='firefox'?'/workspace/browser':'/workspace/terminal');
let session=null,rfb=null,ended=false,leaseTimer=null,retryTimer=null,reconnectStarted=0;
const soundButton=document.createElement('button');soundButton.id='remote-audio';soundButton.className='btn secondary';soundButton.hidden=true;soundButton.textContent='Enable sound';soundButton.setAttribute('aria-pressed','false');$('#remote-fullscreen').before(soundButton);const sound=new RemoteAudio(soundButton);
const memoryLabel=document.createElement('small');memoryLabel.className='remote-memory';$('#remote-state').after(memoryLabel);
const displayButton=document.createElement('button');displayButton.id='remote-display-mode';displayButton.className='btn secondary';displayButton.hidden=true;$('#remote-fullscreen').before(displayButton);
let displayMode='video';try{if(localStorage.getItem('csquest-remote-display')==='text')displayMode='text';}catch{}
function applyDisplayMode(){const video=displayMode==='video';$('#remote-screen').classList.toggle('remote-smooth-video',video);displayButton.textContent=video?'Smooth video':'Sharper text';displayButton.setAttribute('aria-pressed',String(video));displayButton.title=video?'Video mode: up to 1280 x 720, lower encoding cost. Click for sharper text.':'Text mode: up to 1440 x 900, higher image quality. Click for smoother video.';if(rfb){rfb.qualityLevel=video?4:7;rfb.compressionLevel=video?1:2;}}
displayButton.onclick=()=>{displayMode=displayMode==='video'?'text':'video';try{localStorage.setItem('csquest-remote-display',displayMode);}catch{}applyDisplayMode();};
function showMemory(memory){if(!memory)return;memoryLabel.textContent='RAM cap: '+(memory.max/1e9).toFixed(1)+' GB'+(memory.reclaiming?' (target '+(memory.target/1e9).toFixed(1)+' GB)':'');memoryLabel.title='Adaptive target: '+(memory.target/1e9).toFixed(1)+' GB'+(memory.busy?' while CSQuest is active':' while CSQuest is idle')+(memory.reclaiming?'. Reclaiming gradually to avoid terminating Firefox.':'');}

document.title=label+' · CSQuest VM';$('#remote-title').textContent=label;
async function api(path,body,{keepalive=false}={}){const res=await fetch('/api/remote/'+path,{method:body?'POST':'GET',headers:body?{'Content-Type':'application/json','X-CSQuest-Request':'1'}:{},body:body?JSON.stringify(body):undefined,credentials:'same-origin',cache:'no-store',keepalive,...(!keepalive?{signal:AbortSignal.timeout(15000)}:{})});let result;try{result=await res.json();}catch{throw Object.assign(Error('The platform is temporarily unavailable.'),{status:res.ok?503:res.status});}if(!res.ok)throw Object.assign(Error(result.error||'Remote session unavailable.'),{status:res.status});return result;}
const permanent=e=>[401,403,404,410].includes(e.status);
const endReason=e=>e.status===401?'You have been signed out. Sign in again to open a VM session.':e.status===403?'Your administrator access has been removed.':'The VM application has ended. Reopen it from Library.';
function finish(message='Session closed. Close this tab or reopen the application from Library.'){
 if(ended)return;ended=true;clearInterval(leaseTimer);clearTimeout(retryTimer);sound.close();soundButton.hidden=true;displayButton.hidden=true;memoryLabel.textContent='';rfb?.disconnect();$('#remote-screen').replaceChildren();$('#remote-screen').hidden=true;$('.remote-welcome').hidden=false;$('#remote-auth').hidden=true;$('#remote-heading').textContent=label+' session closed';$('#remote-message').textContent=message;$('#remote-state').textContent='Closed';$('#remote-stop').hidden=true;$('#remote-fullscreen').hidden=true;
}
async function stop(message){sound.close();if(!session)return;const current=session;session=null;await api('session/'+current.id+'/stop',{}, {keepalive:true}).catch(()=>{});finish(typeof message==='string'?message:undefined);}
$('#remote-stop').onclick=stop;$('#remote-fullscreen').onclick=()=>$('#remote-main').requestFullscreen?.();
// Explicit tab closure stops the process. An interrupted transport may reconnect
// for up to 90 seconds; the broker bounds cleanup when keepalive cannot arrive.
window.addEventListener('pagehide',()=>{sound.close();ended=true;clearInterval(leaseTimer);clearTimeout(retryTimer);if(session){fetch('/api/remote/session/'+session.id+'/stop',{method:'POST',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1'},body:'{}',credentials:'same-origin',keepalive:true}).catch(()=>{});rfb?.disconnect();}});
async function connectBrowser(){
 const {default:RFB}=await import('/vendor/novnc/core/rfb.js');if(ended||!session)return;
 const url=new URL('/api/remote/stream/'+session.id,location.href);url.protocol=location.protocol==='https:'?'wss:':'ws:';
 $('#remote-screen').replaceChildren();$('#remote-screen').classList.add('remote-browser-screen');applyDisplayMode();const viewer=new RFB($('#remote-screen'),url.href,{credentials:{password:session.password}});rfb=viewer;
 viewer.scaleViewport=true;viewer.resizeSession=true;viewer.viewOnly=false;applyDisplayMode();displayButton.hidden=false;
 viewer.addEventListener('connect',()=>{if(viewer!==rfb)return;reconnectStarted=0;$('#remote-state').textContent='Running on VM';});
 viewer.addEventListener('disconnect',()=>{if(!ended&&session&&viewer===rfb)scheduleReconnect();});
}
function scheduleReconnect(){
 if(ended||!session)return;clearTimeout(retryTimer);reconnectStarted||=Date.now();
 if(Date.now()-reconnectStarted>90000){stop('The connection could not be restored. Reopen the browser from Library.');return;}
 $('#remote-state').textContent='Reconnecting to your VM…';
 retryTimer=setTimeout(async()=>{if(ended||!session)return;try{await api('session/'+session.id+'/lease',{});await connectBrowser();}catch(e){if(permanent(e))stop(endReason(e));else scheduleReconnect();}},2000);
}
async function launch(password){
 const result=await api('start',{kind,password});session=result;showMemory(result.memory);$('#remote-password').value='';$('#remote-auth').hidden=true;$('.remote-welcome').hidden=true;$('#remote-screen').hidden=false;$('#remote-stop').hidden=false;$('#remote-fullscreen').hidden=false;$('#remote-state').textContent='Connecting…';
 leaseTimer=setInterval(async()=>{if(!session||ended)return;try{const state=await api('session/'+session.id+'/lease',{});showMemory(state.memory);if(!reconnectStarted)$('#remote-state').textContent='Running on VM';}catch(e){if(!session||ended)return;if(permanent(e))stop(endReason(e));else $('#remote-state').textContent='Connection interrupted · retrying';}},10000);
 try{
  if(kind==='firefox'){
   await connectBrowser();soundButton.hidden=false;sound.start(result.id).catch(()=>sound.failed());
   const tools=document.createElement('div');tools.className='remote-viewer-tools';for(const [text,action] of [['CTRL+ALT+DEL',()=>rfb.sendCtrlAltDel()],['PASTE',async()=>{const text=await navigator.clipboard.readText().catch(()=>null);if(text!==null)rfb.clipboardPasteFrom(text);}]] ){const b=document.createElement('button');b.textContent=text;b.onclick=action;tools.append(b);}$('#remote-fullscreen').before(tools);
  }else{
   const frame=document.createElement('iframe');frame.title='Interactive VM terminal';frame.src='/api/remote/view/'+result.id+'/terminal/';$('#remote-screen').append(frame);frame.onload=()=>$('#remote-state').textContent='Running on VM · unprivileged shell';
  }
 }catch(e){await stop();throw e;}
}
$('#remote-auth').onsubmit=async event=>{event.preventDefault();const button=event.target.querySelector('button');button.disabled=true;$('#remote-error').textContent='';$('#remote-state').textContent='Starting on VM…';try{if(kind==='firefox')sound.prepare();await launch($('#remote-password').value);}catch(e){sound.close();$('#remote-error').textContent=e.message;$('#remote-state').textContent='Not running';}finally{button.disabled=false;}};
try{
 if(!['firefox','terminal'].includes(kind))throw Error('Open Firefox or Terminal from Library → Boot storage.');
 const status=await api('status');if(!status.enabled||!status.ready)throw Error(status.error||'Remote sessions are not ready.');
 $('#remote-heading').textContent='Launch '+label;$('#remote-message').textContent=kind==='firefox'?'Browse using Firefox on your VM.':'Explore the VM filesystem with Bash. Start at /, or use ~/linux-practice for saved exercises. This Linux account has no sudo privileges.';$('#remote-auth').hidden=false;$('#remote-state').textContent='Ready';$('#remote-password').focus();
}catch(e){$('#remote-heading').textContent='Session unavailable';$('#remote-message').textContent=e.message;$('#remote-state').textContent='Not running';}
