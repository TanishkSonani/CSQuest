const $=s=>document.querySelector(s),kind=new URL(location.href).searchParams.get('app'),label=kind==='firefox'?'Firefox':'Terminal';
let session=null,rfb=null,ended=false,leaseTimer=null;
document.title=label+' · CSQuest VM';$('#remote-title').textContent=label;
async function api(path,body,{keepalive=false}={}){const res=await fetch('/api/remote/'+path,{method:body?'POST':'GET',headers:body?{'Content-Type':'application/json','X-CSQuest-Request':'1'}:{},body:body?JSON.stringify(body):undefined,credentials:'same-origin',cache:'no-store',keepalive});const result=await res.json();if(!res.ok)throw Error(result.error||'Remote session unavailable.');return result;}
function finish(message='Session closed. Close this tab or reopen the application from Library.'){
 if(ended)return;ended=true;clearInterval(leaseTimer);rfb?.disconnect();$('#remote-screen').replaceChildren();$('#remote-screen').hidden=true;$('.remote-welcome').hidden=false;$('#remote-auth').hidden=true;$('#remote-heading').textContent=label+' session closed';$('#remote-message').textContent=message;$('#remote-state').textContent='Closed';$('#remote-stop').hidden=true;$('#remote-fullscreen').hidden=true;
}
async function stop(){if(!session)return;const current=session;session=null;await api('session/'+current.id+'/stop',{}, {keepalive:true}).catch(()=>{});finish();}
$('#remote-stop').onclick=stop;$('#remote-fullscreen').onclick=()=>$('#remote-main').requestFullscreen?.();
// pagehide is best effort; socket close and broker lease expiry also stop the
// complete systemd control group when a tab crashes or the network disappears.
window.addEventListener('pagehide',()=>{if(session){fetch('/api/remote/session/'+session.id+'/stop',{method:'POST',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1'},body:'{}',credentials:'same-origin',keepalive:true}).catch(()=>{});rfb?.disconnect();}});
async function launch(password){
 const result=await api('start',{kind,password});session=result;$('#remote-password').value='';$('#remote-auth').hidden=true;$('.remote-welcome').hidden=true;$('#remote-screen').hidden=false;$('#remote-stop').hidden=false;$('#remote-fullscreen').hidden=false;$('#remote-state').textContent='Connecting…';
 leaseTimer=setInterval(()=>{if(session)api('session/'+session.id+'/lease',{}).catch(()=>{session=null;finish('The session ended or your administrator access changed.');});},10000);
 try{
  if(kind==='firefox'){
   const {default:RFB}=await import('/vendor/novnc/core/rfb.js');if(ended)return;
   const url=new URL('/api/remote/stream/'+result.id,location.href);url.protocol=location.protocol==='https:'?'wss:':'ws:';
   rfb=new RFB($('#remote-screen'),url.href,{credentials:{password:result.password}});rfb.scaleViewport=true;rfb.resizeSession=true;rfb.viewOnly=false;
   rfb.addEventListener('connect',()=>$('#remote-state').textContent='Running on VM');rfb.addEventListener('disconnect',()=>{stop();finish('Firefox disconnected. Its VM session has been stopped.');});
   const tools=document.createElement('div');tools.className='remote-viewer-tools';for(const [text,action] of [['CTRL+ALT+DEL',()=>rfb.sendCtrlAltDel()],['PASTE',async()=>{const text=await navigator.clipboard.readText().catch(()=>null);if(text!==null)rfb.clipboardPasteFrom(text);}]] ){const b=document.createElement('button');b.textContent=text;b.onclick=action;tools.append(b);}$('#remote-fullscreen').before(tools);
  }else{
   const frame=document.createElement('iframe');frame.title='Interactive VM terminal';frame.src='/api/remote/view/'+result.id+'/terminal/';$('#remote-screen').append(frame);frame.onload=()=>$('#remote-state').textContent='Running on VM · unprivileged shell';
  }
 }catch(e){await stop();throw e;}
}
$('#remote-auth').onsubmit=async event=>{event.preventDefault();const button=event.target.querySelector('button');button.disabled=true;$('#remote-error').textContent='';$('#remote-state').textContent='Starting on VM…';try{await launch($('#remote-password').value);}catch(e){$('#remote-error').textContent=e.message;$('#remote-state').textContent='Not running';}finally{button.disabled=false;}};
try{
 if(!['firefox','terminal'].includes(kind))throw Error('Open Firefox or Terminal from Library → Boot storage.');
 const status=await api('status');if(!status.enabled||!status.ready)throw Error(status.error||'Remote sessions are not ready.');
 $('#remote-heading').textContent='Launch '+label;$('#remote-message').textContent=kind==='firefox'?'Browse using Firefox on your VM.':'Open an interactive Linux shell on your VM. This account has no sudo privileges.';$('#remote-auth').hidden=false;$('#remote-state').textContent='Ready';$('#remote-password').focus();
}catch(e){$('#remote-heading').textContent='Session unavailable';$('#remote-message').textContent=e.message;$('#remote-state').textContent='Not running';}
