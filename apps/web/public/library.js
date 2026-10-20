import {openDriveSettings} from './library-drive-settings.js';
import {explorerContextMenu} from './explorer-context-menu.js';
import {libraryNotepad} from './library-notepad.js';
import {explorerFiles,explorerTree,mountPrivateExplorer,updateExplorerSelection,selectedExplorerIds} from './explorer-layout.js';
import {escapeHtml as h} from '/shared/engine.js';
import {account} from './account-client.js';
import {icon} from './icons.js';
import {manageLibraryAccess} from './library-access.js';
import {mountLibraryOrganizer,mountFileExtras,showLibraryUndo,previewLibraryFile} from './library-organizer.js';
import {playLibraryAudio,pauseSharedAudio,playbackSpeeds as speeds} from './podcasts.js';
const fileUrl=(id,download=false)=>`/api/library/file?id=${encodeURIComponent(id)}${download?'&download=1':''}`;
const mediaKind=name=>/\.(mp4|mkv|webm|ogv|mov)$/i.test(name)?'video':/\.(mp3|m4a|aac|ogg|opus|wav|flac)$/i.test(name)?'audio':'file';
const bytes=n=>{if(!Number.isFinite(n))return '—';if(n<1000)return n+' B';const unit=Math.min(3,Math.floor(Math.log(n)/Math.log(1000)));return (n/1000**unit).toLocaleString(undefined,{maximumFractionDigits:unit===3?2:1})+' '+['B','KB','MB','GB'][unit];};
export const formatLibraryBytes=bytes;
const clock=n=>{n=Math.max(0,Math.floor(n||0));return (n>=3600?Math.floor(n/3600)+':':'')+String(Math.floor(n/60)%60).padStart(2,'0')+':'+String(n%60).padStart(2,'0');};
let owner=null,drive=null,folder=null,volumes=null,checkedAt=null,entries=[],crumbs=[],allFolders=[],query='',sort='name',grid=false,busy=false,problem='',epoch=0,uploads=[],videoDialog=null,selectedDrive=null,selectedEntry=null,storageExpanded=false,selectedDetails=null,detailsBusy=false,detailsError='',detailsEpoch=0,metadataProbe=null;
const activeUploads=new Set(),parallelUploads=4;
let accessRole=null;
let locationWritable=false;
const canWrite=()=>accessRole==='owner'||accessRole==='editor'&&locationWritable;
const canManage=()=>accessRole==='owner';
let detailsOpen=false;
const expandedFolders=new Set();
function setDetailsOpen(open){detailsOpen=open;root()?.querySelector(".library-browser-layout")?.classList.toggle("is-details-hidden",!open);root()?.querySelector("[data-lib-command=details]")?.setAttribute("aria-pressed",String(open));}
matchMedia("(max-width:1250px)").addEventListener("change",event=>{if(event.matches)setDetailsOpen(false);});
let transferPaint=null;
let transferRefresh=null;
let completionCollapsed=false;
let trayExpanded=false,selectedFiles=new Set(),conflictMode='keep',lastUndo=null;
const root=()=>document.querySelector('[data-library]');
const storageKey=()=>`csquest:library-uploads:${owner}`;
function remember(){try{sessionStorage.setItem(storageKey(),JSON.stringify(uploads.filter(u=>!['done','canceled','skipped'].includes(u.state)).map(({file,controller,inFlight,startedAt,startedUploaded,...u})=>u)));}catch{}}
const transferBytes=u=>Math.min(u.size,(u.uploaded||0)+(u.inFlight||0));
function transferStatus(u){
 if(u.state==='done')return 'Uploaded';if(u.state==='queued')return `Queued · position ${uploads.filter(t=>t.state==='queued').indexOf(u)+1} · starts automatically`;
 if(u.state==='skipped')return 'Skipped · existing file kept';if(u.state==='waiting')return navigator.onLine?'Retrying automatically…':'Waiting for connection…';
 if(u.state!=='uploading')return u.error||u.state;
 const seconds=(performance.now()-u.startedAt)/1000,rate=(transferBytes(u)-(u.startedUploaded||0))/seconds;
 return seconds>1&&rate>0?`Uploading · ${bytes(rate)}/s · ${clock((u.size-transferBytes(u))/rate)} left`:'Uploading';
}
function sendChunk(u,chunk){
 return new Promise((resolve,reject)=>{
  const xhr=new XMLHttpRequest(),signal=u.controller.signal;
  const abort=()=>xhr.abort(),cleanup=()=>signal.removeEventListener('abort',abort);
  xhr.open('PUT',`/api/library/chunk?id=${u.id}&offset=${u.uploaded}`);xhr.withCredentials=true;xhr.timeout=600000;
  xhr.setRequestHeader('X-CSQuest-Request','1');xhr.setRequestHeader('Content-Type','application/octet-stream');
  xhr.upload.onprogress=event=>{u.inFlight=event.loaded;if(!transferPaint)transferPaint=setTimeout(()=>{transferPaint=null;drawTransfers();},200);};
  xhr.onload=()=>{cleanup();let result;try{result=JSON.parse(xhr.responseText);}catch{reject(Error('Unexpected upload response. Retry to resume.'));return;}if(xhr.status>=200&&xhr.status<300)resolve(result);else reject(Object.assign(Error(result.error||'Upload failed. Retry to resume.'),{status:xhr.status}));};
  xhr.onerror=()=>{cleanup();reject(Object.assign(Error('Connection lost. Retrying from the saved position.'),{retryable:true}));};
  xhr.ontimeout=()=>{cleanup();reject(Object.assign(Error('Upload timed out. Retrying from the saved position.'),{retryable:true}));};
  xhr.onabort=()=>{cleanup();reject(new DOMException('Upload paused.','AbortError'));};
  signal.addEventListener('abort',abort,{once:true});
  if(signal.aborted){cleanup();reject(new DOMException('Upload paused.','AbortError'));return;}
  xhr.send(chunk);
 });
}
async function api(action,body,{method,signal}={}){
 const timeout=AbortSignal.timeout(60000);
 const response=await fetch('/api/library/'+action,{method:method||(body?'POST':'GET'),headers:{...(body&&method!=='PUT'?{'Content-Type':'application/json'}:{}),'X-CSQuest-Request':'1'},credentials:'same-origin',cache:'no-store',body:body?(method==='PUT'?body:JSON.stringify(body)):undefined,signal:signal?AbortSignal.any([signal,timeout]):timeout});
 let value;try{value=await response.json();}catch{throw Object.assign(Error('The server returned an unexpected response. Refresh and retry.'),{status:response.status});}if(!response.ok)throw Object.assign(Error(value.error||'Library request failed.'),{status:response.status});if(value.undoId)showLibraryUndo(api,value.undoId,refresh);return value;
}
export function libraryView(){return '<section class="library" data-library aria-label="Private file library"><div class="loading-state" role="status">Opening your library…</div></section>';}
export function mountLibrary(){
 detailsOpen=false;
 const next=account.user?.id||null;
 if(next!==owner){
  accessRole=null;
  uploads.forEach(u=>u.controller?.abort());epoch++;owner=next;drive=null;folder=null;entries=[];allFolders=[];volumes=null;checkedAt=null;problem='';clearDetails();selectedDrive=null;
  try{uploads=JSON.parse(sessionStorage.getItem(storageKey())||'[]').map(u=>({...u,state:'paused',error:'Choose this file again to resume.'}));}catch{uploads=[];}
  videoDialog?.close();
 }
 drawTransfers();
 if(!root()){if(accessRole===null&&uploads.length&&account.user?.libraryAccess)refresh().then(()=>{processUploads();drawTransfers();});return;}
 draw();refresh();
}
function driveCard(v){
 const percent=v.online?Math.min(100,v.committed/v.quota*100):0;
 return `<button type="button" class="library-drive ${selectedDrive===v.id?'is-current':''}" data-lib-drive="${v.id}" ${!v.online?'disabled':''} aria-label="Open ${h(v.name)}"><span class="library-drive-art ${v.id}">${icon('drive')}<small>${v.id==='boot'?'B':v.id==='object'?'O':'D'}</small></span><span class="library-drive-details"><strong>${h(v.name)} ${icon('chevron')}</strong><span>${bytes(v.quota)} library allocation</span><span class="library-capacity ${percent>90?'is-low':''}" role="meter" aria-label="${h(v.name)} allocation used" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(percent)}"><span style="width:${percent}%"></span></span><b>${v.online?bytes(v.available)+' available':'Drive unavailable'}</b><small>${v.online?bytes(v.used)+' stored'+(v.pending?' · '+bytes(v.pending)+' reserved for uploads':''):h(v.error)}</small></span></button>`;
}
function treeMarkup(){return explorerTree(allFolders,{current:folder,open:expandedFolders,onPath:new Set(crumbs.map(c=>c.id))});}
function storageMarkup(){return volumes&&canManage()?`<details class="library-storage-details" ${storageExpanded?'open':''}><summary>Storage details</summary><div class="library-table-scroll"><table><caption class="sr-only">Physical volume usage and library limits</caption><thead><tr><th>Volume</th><th>Filesystem total</th><th>System / other / reserved</th><th>Filesystem free</th><th>Platform buffer</th></tr></thead><tbody>${volumes.map(v=>`<tr><th>${h(v.name)}</th><td>${bytes(v.total)}${v.kind==='object'?' (limit)':''}</td><td>${v.online?bytes(Math.max(0,v.total-v.free-v.used)):'—'}</td><td>${bytes(v.free)}</td><td>${v.kind==='object'?'Not applicable':bytes(v.buffer)}</td></tr>`).join('')}</tbody></table></div>${volumes.some(v=>v.shared)?'<p class="tiny-note">Local preview: both directories share one physical filesystem. Free space and upload reservations are shared.</p>':''}<p class="tiny-note">Library allocations are capped. Disk space protects room for the platform, database, and backups. Object Storage shows its configurable Library limit rather than a physical disk size.</p></details>`:'';}
function draw(){
 const el=root();if(!el)return;
 const current=volumes?.find(v=>v.id===drive),title=drive?(crumbs.at(-1)?.name||current?.name||'Storage'):'This PC';
 el.innerHTML=`<header class="library-heading"><div><div class="page-eyebrow">LIBRARY · YOUR PRIVATE SPACE</div><h1>${h(title)}</h1><p class="page-description">${drive?'Organize your folders, files, films, and sounds.':'Your drives. Your files. Everything in its place.'}</p></div><button class="btn secondary library-refresh" data-lib-action="refresh" ${busy?'disabled':''}>${icon('refresh')} ${busy?'CHECKING…':'REFRESH STORAGE'}</button></header>
 <div class="library-status"><span>${checkedAt?'Last checked '+new Date(checkedAt).toLocaleString():'Storage has not been checked yet'}</span><span>${drive&&current?bytes(current.available)+' available · '+bytes(current.quota)+' allocation':(volumes?volumes.map(v=>bytes(v.quota)+' '+v.id).join(' · '):'Boot and Block storage')}</span></div>
 ${problem?`<p class="library-notice" role="alert">${h(problem)}</p>`:''}
 ${!drive?`<section aria-label="Devices and drives"><h2 class="library-section-label">${icon('drive')} Devices and drives</h2><p class="library-open-hint">${tapToOpen()?'Tap':'Double-click'} a drive to open its folders and files.</p><div class="library-drives">${volumes?volumes.map(driveCard).join(''):'<div class="card" role="status">'+(problem?'Storage details are unavailable.':'Reading storage details…')+'</div>'}</div></section>${storageMarkup()}`:`
 <div class="library-browser-layout"><aside class="library-sidebar" aria-label="Library directory navigation"><button class="library-location" data-lib-action="home">${icon('folder')} This PC</button>${(volumes||[]).map(v=>`<button class="library-location ${drive===v.id?'is-current':''}" data-lib-nav-drive="${v.id}" ${!v.online?'disabled':''}>${icon('drive')} ${h(v.name)}</button>${v.id===drive?'<nav class="library-tree" aria-label="Folders">'+treeMarkup()+'</nav>':''}`).join('')}</aside>
 <section class="library-explorer card" aria-label="File explorer"><nav class="library-breadcrumb" aria-label="Library location"><button data-lib-action="up" aria-label="Go up one directory" title="Go up one directory">↑</button><button data-lib-action="home">${icon('folder')} This PC</button><span>/</span><button data-lib-folder="" data-lib-target-drive="${drive}">${h(current?.name||drive)}</button>${crumbs.map(c=>`<span>/</span><button data-lib-folder="${c.id}">${h(c.name)}</button>`).join('')}</nav>
 <div class="library-toolbar"><div class="button-row"><label class="btn library-upload-label">${icon('upload')} UPLOAD FILES<input type="file" multiple data-lib-upload aria-label="Upload files"></label><button class="btn secondary" data-lib-action="folder">${icon('folder')} NEW FOLDER</button></div><div class="library-filter"><label><span class="sr-only">Search this folder</span><input type="search" data-lib-search placeholder="Search this folder" value="${h(query)}"></label><label><span class="sr-only">Sort files</span><select data-lib-sort><option value="name" ${sort==='name'?'selected':''}>Name</option><option value="size" ${sort==='size'?'selected':''}>Size</option><option value="date" ${sort==='date'?'selected':''}>Latest first</option></select></label><button class="library-view-button" data-lib-action="view" aria-label="${grid?'Switch to list view':'Switch to grid view'}">${grid?'☷':'▦'}</button></div></div>
 <div data-lib-files>${filesMarkup()}</div><p class="library-folder-status">${entries.length} item${entries.length===1?'':'s'} · ${h(current?.name||drive)} · ${tapToOpen()?'Tap':'Double-click'} to open</p></section></div>`}
 <section class="library-details" data-lib-details aria-label="Selected item details" ${selectedEntry?'':'hidden'}>${detailsMarkup()}</section><section class="library-transfers" data-lib-transfers aria-label="File transfers">${transfersMarkup()}</section>`;
 const picker=el.querySelector('[data-lib-upload]');if(picker)picker.onchange=()=>{const files=[...picker.files];picker.value='';addFiles(files);};
 if(!canWrite()){picker?.closest('label').remove();el.querySelector('[data-lib-action=folder]')?.remove();}
 if(canManage()&&volumes?.some(d=>d.kind==='object')){const settings=document.createElement('button');settings.className='btn secondary';settings.dataset.libAction='drive-settings';settings.textContent='STORAGE SETTINGS';el.querySelector('.library-heading').append(settings);}
 if(canManage()){const button=document.createElement('button');button.className='btn secondary library-manage';button.dataset.libAction='access';button.textContent='MANAGE ACCESS';el.querySelector('.library-heading').append(button);}
 mountLibraryOrganizer({api,entries,drive,folder,admin:canWrite(),refresh,navigate,selectEntry,addFiles,getConflict:()=>conflictMode,setConflict:value=>conflictMode=value});
 mountPrivateExplorer({drive,folder,detailsOpen,volumes,folders:allFolders,crumbs,selected:selectedEntry,admin:canManage(),writable:canWrite(),navigate,shareDrive:()=>{const v=volumes?.find(v=>v.id===(drive||selectedDrive))||volumes?.[0];if(folder)manageLibraryAccess(api,{kind:'folder',id:folder,drive,name:crumbs.at(-1)?.name||'Current directory'});else if(v)manageLibraryAccess(api,{kind:'drive',drive:v.id,name:v.name});}});
 if(accessRole&&accessRole!=='owner'){el.querySelector('.page-eyebrow').textContent='LIBRARY · SHARED WITH YOU';const status=el.querySelector('.library-status span');status.textContent=(canWrite()?'Editor access':'Viewer access')+' · '+status.textContent;}
 mountPrivateContext();
 if(selectedDetails)mountFileExtras({api,file:selectedDetails,panel:el.querySelector('[data-lib-details]'),admin:canManage()});
 const details=el.querySelector('.library-storage-details');if(details)details.ontoggle=()=>{if(details.isConnected)storageExpanded=details.open;};
}

function filesMarkup(){return explorerFiles(entries,{selected:selectedEntry,query,sort,grid});}
function transfersMarkup(){return uploads.length?`<h2 class="library-section-label">${icon('upload')} Transfers · up to ${parallelUploads} files at once</h2>${uploads.map((u,i)=>`<article class="library-transfer"><div><strong>${h(u.name)}</strong><small>${h(transferStatus(u))} · ${bytes(transferBytes(u))} / ${bytes(u.size)} · ${u.drive==='boot'?'Boot':u.drive==='object'?'Object':'Block'}</small><progress max="${Math.max(1,u.size)}" value="${u.state==='done'?Math.max(1,u.size):transferBytes(u)}" aria-label="Upload progress for ${h(u.name)}"></progress></div>${u.state==='paused'?`<button class="btn secondary" data-lib-retry="${i}">${u.file?'RETRY':'CHOOSE FILE TO RESUME'}</button>`:''}${['uploading','queued','waiting'].includes(u.state)?`<button class="library-small-button" data-lib-pause="${i}" aria-label="Pause upload of ${h(u.name)}">Ⅱ</button>`:''}${u.state==='queued'?`<button class="library-small-button" data-lib-prioritize="${i}" aria-label="Prioritize ${h(u.name)}">↑</button>`:''}${!['done','canceled','skipped'].includes(u.state)?`<button class="library-small-button" data-lib-cancel="${i}" aria-label="Cancel upload of ${h(u.name)}">${icon('close')}</button>`:`<button class="library-small-button" data-lib-dismiss="${i}" aria-label="Dismiss transfer">${icon('close')}</button>`}</article>`).join('')}`:'';}
function drawTransfers(){
 if(uploads.length&&uploads.every(u=>['done','canceled','skipped'].includes(u.state))&&!completionCollapsed){trayExpanded=false;completionCollapsed=true;}
 const node=root()?.querySelector('[data-lib-transfers]');if(node)node.innerHTML=transfersMarkup();remember();
 let tray=document.querySelector('[data-library-tray]');
 if(!owner||owner!==account.user?.id||!uploads.length){tray?.remove();return;}
 if(!tray){tray=document.createElement('aside');tray.className='library-global-tray';tray.dataset.libraryTray='';tray.setAttribute('aria-label','Upload activity');document.body.append(tray);}
 const active=uploads.filter(u=>u.state==='uploading').length,queued=uploads.filter(u=>u.state==='queued').length,paused=uploads.filter(u=>['paused','waiting'].includes(u.state)).length;
 tray.innerHTML=`<button data-lib-action="tray" aria-expanded="${trayExpanded}">${icon('upload')} ${active} uploading · ${queued} queued · ${uploads.filter(u=>u.state==='done').length} complete${paused?' · '+paused+' paused / waiting':''} ${trayExpanded?'▾':'▴'}</button><div data-tray-body ${trayExpanded?'':'hidden'}><div class="button-row"><button class="btn secondary" data-lib-action="clear-completed">CLEAR COMPLETED</button><button class="btn secondary" data-lib-action="pause-all">PAUSE ALL</button><button class="btn secondary" data-lib-action="resume-all">RESUME ALL</button></div>${transfersMarkup()}</div>`;
}
function clearDetails(){
 detailsEpoch++;selectedEntry=null;selectedDetails=null;detailsBusy=false;detailsError='';
 if(metadataProbe){clearTimeout(metadataProbe.timer);metadataProbe.element.removeAttribute('src');metadataProbe.element.load();metadataProbe=null;}
}
const detailDate=value=>value&&Number.isFinite(new Date(value).getTime())?new Date(value).toLocaleString():'Unavailable';
function detailsMarkup(){
 if(!selectedEntry)return '';
 const detail=selectedDetails,item=detail||entries.find(e=>e.id===selectedEntry);
 const heading=`<div class="library-details-heading"><div><span class="page-eyebrow">${item?.kind==='folder'?'FOLDER':'FILE'} DETAILS</span><h2>${h(item?.name||'Selected item')}</h2></div><button class="library-small-button" data-lib-action="details-close" aria-label="Close file details">${icon('close')}</button></div>`;
 if(detailsError)return heading+`<p role="alert">${h(detailsError)}</p>`;
 if(detailsBusy||!detail)return heading+'<p role="status">Reading file details…</p>';
 const kind=detail.kind==='folder'?'Folder':mediaKind(detail.name),extension=detail.extension?detail.extension.slice(1).toUpperCase():'';
 const fields=[['Type',kind==='folder'?'Folder':(extension?extension+' ':'')+(kind==='file'?'file':kind)],['Storage',detail.driveName],['Folder',[detail.driveName,...detail.location].join(' / ')]];
 if(detail.kind==='file'){
  fields.push(['Size',`${bytes(detail.size)} (${detail.size.toLocaleString()} bytes)`]);
  if(detail.sizeOnDisk!==null)fields.push(['Size on disk',bytes(detail.sizeOnDisk)]);
  if(detail.mediaType)fields.push(['Media type',detail.mediaType]);
 }else fields.push(['Contains',`${detail.folderCount} folders, ${detail.fileCount} files`]);
 fields.push(['Added to Library',detailDate(detail.createdAt)],['Last library change',detailDate(detail.updatedAt)]);
 if(detail.fileModifiedAt)fields.push(['Stored file modified',detailDate(detail.fileModifiedAt)]);
 if(kind==='audio'||kind==='video'){
  fields.push(['Duration',Number.isFinite(detail.duration)?clock(detail.duration):detail.mediaInfoState==='loading'?'Reading…':'Unavailable in this browser']);
  if(detail.width&&detail.height)fields.push(['Resolution',`${detail.width} × ${detail.height}`]);
 }
 return heading+`<dl class="library-metadata">${fields.map(([label,value])=>`<div><dt>${h(label)}</dt><dd>${h(String(value))}</dd></div>`).join('')}</dl><div class="button-row"><button class="btn secondary" data-lib-action="details-open">${kind==='audio'||kind==='video'?'PLAY FILE':kind==='folder'?'OPEN FOLDER':'OPEN FILE'}</button>${detail.kind==='file'?`<a class="btn secondary" href="${fileUrl(detail.id,true)}">${icon('download')} DOWNLOAD FILE</a>`:''}${canManage()?'<button class="btn secondary" data-lib-action="share">SHARE '+(detail.kind==='folder'?'DIRECTORY':'FILE')+'</button>':''}</div>`;
}
function renderDetails(){const panel=root()?.querySelector('[data-lib-details]');if(panel){panel.hidden=!selectedEntry;panel.innerHTML=detailsMarkup();if(selectedDetails)mountFileExtras({api,file:selectedDetails,panel,admin:canManage()});}}
async function loadDetails(id){
 const ticket=++detailsEpoch;detailsBusy=true;detailsError='';selectedDetails=null;
 if(metadataProbe){clearTimeout(metadataProbe.timer);metadataProbe.element.removeAttribute('src');metadataProbe.element.load();metadataProbe=null;}
 renderDetails();
 try{
  const detail=await api('details?id='+id);if(ticket!==detailsEpoch)return;selectedDetails=detail;detailsBusy=false;
  const kind=mediaKind(detail.name);
  if(detail.kind==='file'&&['audio','video'].includes(kind)){
   detail.mediaInfoState='loading';
   const media=document.createElement(kind),probe={element:media,timer:null};metadataProbe=probe;media.preload='metadata';
   const finish=state=>{clearTimeout(probe.timer);if(probe.finished||ticket!==detailsEpoch)return;probe.finished=true;detail.mediaInfoState=state;if(state==='ready'){if(Number.isFinite(media.duration))detail.duration=media.duration;if(kind==='video'){detail.width=media.videoWidth;detail.height=media.videoHeight;}}media.removeAttribute('src');media.load();if(metadataProbe===probe)metadataProbe=null;renderDetails();};
   media.addEventListener('loadedmetadata',()=>finish('ready'),{once:true});media.addEventListener('error',()=>finish('unavailable'),{once:true});probe.timer=setTimeout(()=>finish('unavailable'),10000);media.src=fileUrl(id);
  }
  renderDetails();
 }catch(e){if(ticket===detailsEpoch){detailsBusy=false;detailsError=e.message;renderDetails();}}
}
async function refresh(){
 const ticket=++epoch;busy=true;draw();
 try{
  const result=await api('storage');if(ticket!==epoch)return;accessRole=result.role;volumes=result.drives;checkedAt=result.checkedAt;problem='';
  const pending=accessRole&&accessRole!=='viewer'?await api('uploads'):{uploads:[]};if(ticket!==epoch)return;
  for(const transfer of pending.uploads)if(!uploads.some(u=>u.id===transfer.id))uploads.push({...transfer,lastModified:null,state:'paused',error:'Choose the original file to resume this transfer.'});
  remember();
  if(drive){const [listing,tree]=await Promise.all([api('list?'+new URLSearchParams({drive,...(folder?{parent:folder}:{})})),api('folders?drive='+drive)]);if(ticket!==epoch)return;entries=listing.entries;locationWritable=listing.canWrite===true;crumbs=listing.breadcrumbs;allFolders=tree.folders;if(selectedEntry){const selected=entries.find(e=>e.id===selectedEntry);if(!selected)clearDetails();else if(selectedDetails&&(selected.name!==selectedDetails.name||selected.updatedAt!==selectedDetails.updatedAt))loadDetails(selectedEntry);}}
 }catch(e){
  if(ticket===epoch){
   if(e.status===403){accessRole=null;uploads.forEach(u=>u.controller?.abort());drive=null;folder=null;volumes=null;entries=[];allFolders=[];clearDetails();problem=e.message;return;}
   if(e.status===404&&folder){
    folder=null;crumbs=[];entries=[];clearDetails();
    try{const [listing,tree]=await Promise.all([api('list?drive='+drive),api('folders?drive='+drive)]);if(ticket!==epoch)return;entries=listing.entries;allFolders=tree.folders;problem='This folder was removed. Returned to the drive root.';}catch{problem='This location is no longer available. Open This PC to choose a drive.';}
   }else problem=e.message+(checkedAt?' Storage figures may be out of date.':'');
  }
 }finally{if(ticket===epoch){busy=false;draw();drawTransfers();}}
}
async function navigate(nextDrive,nextFolder=null){drive=nextDrive;folder=nextFolder;query='';entries=[];crumbs=[];allFolders=[];clearDetails();selectedDrive=nextDrive;await refresh();}
const tapToOpen=()=>matchMedia('(pointer:coarse)').matches||innerWidth<=650;
function openEntry(id){const e=entries.find(e=>e.id===id);if(!e)return;if(e.kind==='folder')navigate(drive,e.id);else if(/\.txt$/i.test(e.name))openTextFile(e);else if(mediaKind(e.name)==='audio')playLibraryAudio(e,volumes.find(v=>v.id===drive).name);else if(mediaKind(e.name)==='video')playVideo(e);else if(/\.(pdf|png|jpe?g|gif|webp|avif)$/i.test(e.name)){api('bookmark',{id:e.id,position:0,speed:1}).catch(()=>{});previewLibraryFile(e);}else{api('bookmark',{id:e.id,position:0,speed:1}).catch(()=>{});const a=document.createElement('a');a.href=fileUrl(e.id,true);a.click();}}
function selectEntry(id){updateExplorerSelection([id]);const changed=selectedEntry!==id;selectedEntry=id;root()?.querySelectorAll('[data-lib-entry]').forEach(row=>{const selected=row.dataset.libEntry===id;row.classList.toggle('is-selected',selected);row.querySelector('[data-lib-open]')?.setAttribute('aria-pressed',String(selected));});if(changed||!selectedDetails&&!detailsBusy)loadDetails(id);document.dispatchEvent(new CustomEvent('library-entry-selected',{detail:{id}}));}
function matchingTransfer(file,targetDrive,targetFolder){return uploads.find(u=>u.state==='paused'&&u.drive===targetDrive&&u.parent===targetFolder&&(u.originalName||u.name)===file.name&&u.size===file.size&&(u.lastModified==null||u.lastModified===file.lastModified));}
function formDialog(title,initial,onSubmit,{deleting=false}={}){
 const dialog=document.createElement('dialog');dialog.className='library-form-dialog';dialog.setAttribute('aria-label',title);
 dialog.innerHTML=`<form><div class="modal-heading"><h2>${h(title)}</h2><button type="button" class="icon-button" data-form-close aria-label="Close">${icon('close')}</button></div>${deleting?`<p>Permanently delete <strong>${h(initial)}</strong>? This cannot be undone.</p>`:`<label>Name<input name="name" value="${h(initial)}" maxlength="200" required autocomplete="off"></label>`}<p role="alert" data-form-error></p><div class="button-row"><button type="button" class="btn secondary" data-form-close>CANCEL</button><button type="submit" class="btn">${deleting?'DELETE':'SAVE'}</button></div></form>`;
 const previous=document.activeElement;document.body.append(dialog);dialog.showModal();dialog.querySelector('input')?.select();
 dialog.querySelectorAll('[data-form-close]').forEach(b=>b.onclick=()=>dialog.close());dialog.addEventListener('close',()=>{dialog.remove();previous?.isConnected&&previous.focus();});
 dialog.querySelector('form').onsubmit=async event=>{event.preventDefault();const button=dialog.querySelector('[type=submit]');button.disabled=true;try{await onSubmit(dialog.querySelector('input')?.value);dialog.close();await refresh();}catch(e){dialog.querySelector('[data-form-error]').textContent=e.message;button.disabled=false;}};
}
async function moveDialog(entry){
 try{
  const result=await api('folders?drive='+entry.drive),lookup=new Map(result.folders.map(f=>[f.id,f]));
  function location(folder){const names=[];let current=folder;for(let i=0;current&&i<100;i++){names.unshift(current.name);current=lookup.get(current.parent);}return names.join(' / ');}
  function descendant(folder){let current=folder;for(let i=0;current&&i<100;i++){if(current.id===entry.id)return true;current=lookup.get(current.parent);}return false;}
  const choices=result.folders.filter(f=>f.canWrite!==false&&!descendant(f)).map(f=>({id:f.id,label:location(f)})).sort((a,b)=>a.label.localeCompare(b.label));
  const dialog=document.createElement('dialog');dialog.className='library-form-dialog';dialog.setAttribute('aria-label','Move '+entry.name);
  dialog.innerHTML=`<form><div class="modal-heading"><h2>Move ${h(entry.name)}</h2><button type="button" class="icon-button" data-move-close aria-label="Close">${icon('close')}</button></div><label>Destination folder<select name="folder"><option value="" ${result.rootWritable===false?'disabled':''}>${h(volumes.find(v=>v.id===entry.drive)?.name||entry.drive)} /</option>${choices.map(c=>`<option value="${c.id}" ${c.id===entry.parent?'selected':''}>${h(c.label)}</option>`).join('')}</select></label><p class="tiny-note">Move within this drive. Files keep their original contents.</p><p role="alert" data-move-error></p><div class="button-row"><button type="button" class="btn secondary" data-move-close>CANCEL</button><button type="submit" class="btn">MOVE HERE</button></div></form>`;
  const previous=document.activeElement;document.body.append(dialog);dialog.showModal();dialog.querySelectorAll('[data-move-close]').forEach(b=>b.onclick=()=>dialog.close());dialog.addEventListener('close',()=>{dialog.remove();if(previous?.isConnected)previous.focus();});
  dialog.querySelector('form').onsubmit=async event=>{event.preventDefault();const submit=dialog.querySelector('[type=submit]');submit.disabled=true;try{await api('move',{id:entry.id,parent:dialog.querySelector('select').value||null});dialog.close();await refresh();}catch(e){dialog.querySelector('[data-move-error]').textContent=e.message;submit.disabled=false;}};
 }catch(e){problem=e.message;draw();}
}
async function addFiles(files){
 if(!canWrite()){problem='Your Library access is view only.';draw();return;}
 if(!files.length)return;
 if(files.length>100){problem='Select up to 100 files at a time. No uploads were started.';draw();return;}
 const targetDrive=drive,targetFolder=folder,prepared=[];
 const requestOwner=owner;
 try{
  const snapshot=await api('storage');if(requestOwner!==owner)return;volumes=snapshot.drives;checkedAt=snapshot.checkedAt;
  const needed=new Map();
  for(const file of files){
   const existing=matchingTransfer(file,targetDrive,targetFolder);
   const target=existing?.drive||targetDrive;
   if(!target)throw Error('Open a storage drive before uploading.');
   needed.set(target,(needed.get(target)||0)+(existing?.id?0:file.size));
  }
  for(const [target,size] of needed){
   const volume=volumes.find(v=>v.id===target);
   if(!volume?.online)throw Error(`${volume?.name||target} is unavailable. No uploads were started.`);
   if(size>volume.available&&conflictMode!=='skip')throw Error(`Upload cannot start: ${bytes(size)} required, but ${volume.name} has ${bytes(volume.available)} available. No files from this selection were started.`);
  }
  const fresh=files.filter(file=>!matchingTransfer(file,targetDrive,targetFolder));
  if(fresh.length){
   const batch=await api('prepare',{drive:targetDrive,parent:targetFolder,conflict:conflictMode,files:fresh.map(f=>({name:f.name,size:f.size,path:f.webkitRelativePath||undefined}))});
   if(requestOwner!==owner)return;
   fresh.forEach((file,i)=>prepared.push({file,name:batch.uploads[i].name,originalName:file.name,size:file.size,lastModified:file.lastModified,drive:targetDrive,parent:batch.uploads[i].parent||targetFolder,uploaded:0,state:batch.uploads[i].skipped?'skipped':'queued',id:batch.uploads[i].id}));
  }
  problem='';draw();
 }catch(e){if(requestOwner===owner){problem=e.message;draw();}return false;}
 for(const file of files){
  const existing=matchingTransfer(file,targetDrive,targetFolder);
  if(existing){existing.file=file;existing.state='queued';existing.error='';}
  else {const ready=prepared.find(u=>u.file===file);if(ready)uploads.push(ready);}
 }
 completionCollapsed=false;trayExpanded=true;drawTransfers();processUploads();return true;
}
function processUploads(){
 if(!owner||!['owner','editor'].includes(accessRole))return;
 for(const u of uploads){
  if(activeUploads.size>=parallelUploads)break;
  if(u.state!=='queued'||!u.file||activeUploads.has(u))continue;
  const currentOwner=owner;activeUploads.add(u);
  uploadFile(u,currentOwner).finally(()=>{
   activeUploads.delete(u);drawTransfers();processUploads();
   if(currentOwner===owner&&!transferRefresh)transferRefresh=setTimeout(()=>{transferRefresh=null;refresh();},250);
  });
 }
}
async function uploadFile(u,currentOwner){
   u.state='uploading';u.error='';u.controller=new AbortController();drawTransfers();
   try{
    let session;
    if(u.id){try{session=await api('upload?id='+u.id,null,{signal:u.controller.signal});}catch(e){if(e.status!==404)throw e;u.id=null;}}
    if(u.state==='canceled'||u.state==='paused'||currentOwner!==owner)throw Error('Canceled');
    if(!u.id){session=await api('upload',{drive:u.drive,parent:u.parent,name:u.name,size:u.size},{signal:u.controller.signal});u.id=session.id;}
    for(const check of session.resumeChecks||[]){
     const data=await u.file.slice(check.start,check.start+check.length).arrayBuffer();
     const digest=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',data)),b=>b.toString(16).padStart(2,'0')).join('');
     if(digest!==check.sha256)throw Error('This file does not match the saved transfer. Choose the original file, or cancel this transfer to start again.');
    }
    u.uploaded=session.uploaded;u.inFlight=0;u.startedAt=performance.now();u.startedUploaded=u.uploaded;drawTransfers();
    if(session.status!=='ready'){
     while(u.uploaded<u.size){
      if(u.state==='canceled'||currentOwner!==owner)throw Error('Canceled');
      const chunk=u.file.slice(u.uploaded,Math.min(u.size,u.uploaded+session.chunkBytes));
      const result=await sendChunk(u,chunk);u.uploaded=result.uploaded;u.inFlight=0;drawTransfers();
     }
     if(u.state==='canceled'||currentOwner!==owner)throw Error('Canceled');await api('complete',{id:u.id},{signal:u.controller.signal});
    }
    u.state='done';u.uploaded=u.size;
   }catch(e){if(!['canceled','paused'].includes(u.state)){
    const retryable=e.retryable||e instanceof TypeError||e.name==='TimeoutError'||[408,429,500,502,503,504].includes(e.status);
    if(retryable&&(u.retryCount||0)<5&&currentOwner===owner){u.state='waiting';u.error='Retrying automatically…';u.retryCount=(u.retryCount||0)+1;setTimeout(()=>{if(u.state==='waiting'&&currentOwner===owner){if(navigator.onLine){u.state='queued';processUploads();}drawTransfers();}},Math.min(30000,1000*2**u.retryCount));}
    else{u.state='paused';u.error=e.name==='AbortError'?'Upload paused. Retry to resume.':e.message;}
   }}
   finally{u.inFlight=0;delete u.controller;drawTransfers();}
}
async function cancelUpload(u){
 u.state='canceled';u.controller?.abort();drawTransfers();
 if(u.id)try{await api('cancel',{id:u.id});}catch(e){u.state='paused';u.error=e.message;drawTransfers();}
 await refresh();
}
function videoKey(id){return `csquest:library-video:${owner}:${id}`;}
export function playVideo(file){
 pauseSharedAudio();videoDialog?.close();
 const dialog=document.createElement('dialog');videoDialog=dialog;dialog.className='library-video-dialog';dialog.setAttribute('aria-label',file.name);
 let saved={};try{saved=JSON.parse(localStorage.getItem(videoKey(file.id))||'{}');}catch{}
 const preferencesKey=`csquest:library-video-settings:${owner}`;let skipSeconds=10;
 try{const value=JSON.parse(localStorage.getItem(preferencesKey)||'{}').skipSeconds;if(Number.isInteger(value)&&value>=1&&value<=600)skipSeconds=value;}catch{}
 dialog.innerHTML=`<section class="library-video-player"><header><span class="library-video-cone" aria-hidden="true">${icon('video')}</span><div><small>CSQUEST LIBRARY</small><h2>${h(file.name)}</h2></div><button class="icon-button" data-video-close aria-label="Close video">${icon('close')}</button></header><div class="library-video-stage"><video playsinline preload="metadata" tabindex="0" aria-label="${h(file.name)}" src="${h(file.url||fileUrl(file.id))}"></video></div><p class="library-video-message" role="status" data-video-message>Loading video…</p><div class="library-video-controls"><div class="library-video-timeline"><time data-video-time>00:00 / 00:00</time><input type="range" min="0" max="1" value="0" step=".1" aria-label="Video playback position" data-video-seek></div><div class="library-video-buttons"><button class="library-video-play" data-video-action="play" aria-label="Play video">▶</button><button data-video-action="back" aria-label="Back 10 seconds">−10s</button><button data-video-action="forward" aria-label="Forward 10 seconds">+10s</button><button data-video-action="stop" aria-label="Stop video">■</button><label>Speed<select data-video-speed>${speeds.map(s=>`<option value="${s}" ${s===(saved.rate||1)?'selected':''}>${s}×</option>`).join('')}</select></label><label class="library-video-volume">Volume<input type="range" min="0" max="1" step=".05" value="1" aria-label="Video volume" data-video-volume></label><button data-video-action="mute" aria-label="Mute video">${icon('sound')}</button><button data-video-action="pip" aria-label="Picture in picture">▣</button><button data-video-action="fullscreen" aria-label="Fullscreen video">⛶</button><a href="${h(file.downloadUrl||fileUrl(file.id,true))}" aria-label="Download video">${icon('download')}</a></div><p class="library-video-hints">Space: play/pause · ← →: seek · F: fullscreen · M: mute</p></div></section>`;
 const previous=document.activeElement;document.body.append(dialog);dialog.showModal();const video=dialog.querySelector('video'),player=dialog.querySelector('.library-video-player');let lastSave=0,bookmarkReady=false;
 const feedback=document.createElement('span');feedback.className='video-seek-feedback';feedback.setAttribute('aria-live','polite');player.querySelector('.library-video-stage').append(feedback);let feedbackTimer;
 const skipLabel=document.createElement('label');skipLabel.className='library-video-skip';skipLabel.innerHTML='Skip (s)<input type="number" min="1" max="600" step="1" inputmode="numeric" aria-label="Skip interval in seconds" data-video-skip>';
 dialog.querySelector('[data-video-action=stop]').after(skipLabel);
 const skipInput=skipLabel.querySelector('input');skipInput.value=skipSeconds;
 function updateSkip(){for(const [name,label] of [['back','Back'],['forward','Forward']]){const button=dialog.querySelector(`[data-video-action=${name}]`);button.innerHTML=icon(name==='back'?'skip-back':'skip-forward')+`<span>${skipSeconds}s</span>`;button.setAttribute('aria-label',`${label} ${skipSeconds} seconds`);}}
 updateSkip();
 const speedSelect=dialog.querySelector('[data-video-speed]'),speedLabel=speedSelect.closest('label');speedLabel.className='library-video-speed';speedLabel.innerHTML=`Speed<input type="range" min="0.25" max="3" step="0.25" value="${speeds.includes(saved.rate)?saved.rate:1}" data-video-speed aria-label="Video playback speed"><output data-video-speed-value>${speeds.includes(saved.rate)?saved.rate:1}×</output>`;
 dialog.querySelector('[data-video-action=stop]').innerHTML=icon('player-stop');dialog.querySelector('[data-video-action=pip]').innerHTML=icon('player-pip');dialog.querySelector('[data-video-action=fullscreen]').innerHTML=icon('player-fullscreen');
 let controlsTimer,keyboardControls=false,wakingControls=false;
 function showControls(event){if(event?.type==='pointerdown')wakingControls=player.classList.contains('is-controls-hidden');if(event?.type==='keydown')keyboardControls=true;else if(event?.type?.startsWith('pointer')||event?.type==='touchstart')keyboardControls=false;clearTimeout(controlsTimer);player.classList.remove('is-controls-hidden');if(!video.paused&&!video.ended)controlsTimer=setTimeout(()=>{if(!keyboardControls||!player.querySelector('.library-video-controls')?.contains(document.activeElement))player.classList.add('is-controls-hidden');},3000);}
 for(const event of ['pointermove','pointerdown','touchstart','keydown','focusin'])player.addEventListener(event,showControls,{passive:event!=='keydown'});
 video.addEventListener('playing',showControls);video.addEventListener('pause',()=>{clearTimeout(controlsTimer);player.classList.remove('is-controls-hidden');});
 const fullscreenChanged=()=>{const active=!!document.fullscreenElement;dialog.querySelector('[data-video-action=fullscreen]').innerHTML=icon(active?'player-exit-fullscreen':'player-fullscreen');dialog.querySelector('[data-video-action=fullscreen]').setAttribute('aria-label',active?'Exit fullscreen':'Fullscreen video');showControls();};document.addEventListener('fullscreenchange',fullscreenChanged);
 const bookmarkPromise=account.user?.id&&!file.url?api('bookmark?id='+file.id).catch(()=>null):Promise.resolve(null);
 const message=text=>dialog.querySelector('[data-video-message]').textContent=text;
 function persist(){if(!bookmarkReady)return;try{localStorage.setItem(videoKey(file.id),JSON.stringify({time:video.currentTime||0,rate:video.playbackRate}));}catch{}if(account.user?.id&&!file.url)fetch('/api/library/bookmark',{method:'POST',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1'},body:JSON.stringify({id:file.id,position:video.currentTime||0,speed:video.playbackRate}),keepalive:true}).catch(()=>{});}
 function update(){
  const duration=Number.isFinite(video.duration)?video.duration:0,seek=dialog.querySelector('[data-video-seek]');seek.max=duration||1;seek.value=video.currentTime||0;seek.setAttribute('aria-valuetext',clock(video.currentTime)+' of '+clock(duration));
  dialog.querySelector('[data-video-time]').textContent=clock(video.currentTime)+' / '+clock(duration);const play=dialog.querySelector('[data-video-action=play]');play.innerHTML=icon(video.paused?'player-play':'player-pause');play.setAttribute('aria-label',video.paused?'Play video':'Pause video');
  if(Date.now()-lastSave>5000){lastSave=Date.now();persist();}
 }
 async function action(name){try{
  if(name==='play'){if(video.paused)await video.play();else video.pause();}
  if(name==='back'||name==='forward'){const end=Number.isFinite(video.duration)?video.duration:video.seekable.length?video.seekable.end(video.seekable.length-1):0;video.currentTime=Math.max(0,Math.min(end,video.currentTime+(name==='back'?-skipSeconds:skipSeconds)));feedback.textContent=(name==='back'?'−':'+')+skipSeconds+' seconds';feedback.classList.add('is-visible');clearTimeout(feedbackTimer);feedbackTimer=setTimeout(()=>feedback.classList.remove('is-visible'),850);}
  if(name==='stop'){video.pause();video.currentTime=0;}
  if(name==='mute'){video.muted=!video.muted;dialog.querySelector('[data-video-action=mute]').setAttribute('aria-label',video.muted?'Unmute video':'Mute video');}
  if(name==='fullscreen'){if(document.fullscreenElement)await document.exitFullscreen();else if(player.requestFullscreen)await player.requestFullscreen();else if(video.webkitEnterFullscreen)video.webkitEnterFullscreen();else message('Fullscreen is unavailable in this browser. Rotate your phone to watch in landscape.');}
  if(name==='pip'&&document.pictureInPictureEnabled){if(document.pictureInPictureElement)await document.exitPictureInPicture();else await video.requestPictureInPicture();}
 }catch{message('Playback could not start. Try Play, or download this file to open it in VLC.');}update();}
 dialog.querySelector('[data-video-close]').onclick=()=>dialog.close();dialog.querySelectorAll('[data-video-action]').forEach(b=>b.onclick=()=>action(b.dataset.videoAction));
 dialog.querySelector('[data-video-seek]').oninput=e=>{video.currentTime=Number(e.target.value);};
 const setSpeed=e=>{video.playbackRate=Number(e.target.value);dialog.querySelector('[data-video-speed-value]').textContent=video.playbackRate+'×';persist();};dialog.querySelector('[data-video-speed]').oninput=setSpeed;dialog.querySelector('[data-video-speed]').onchange=setSpeed;
 skipInput.oninput=()=>{const value=Number(skipInput.value);if(!skipInput.validity.valid||!Number.isInteger(value)||value<1||value>600)return;skipSeconds=value;updateSkip();if(dialog.querySelector('[data-video-message]').textContent==='Choose a skip interval from 1 to 600 seconds.')message('');try{localStorage.setItem(preferencesKey,JSON.stringify({skipSeconds}));}catch{}};
 skipInput.onchange=()=>{if(!skipInput.validity.valid||!skipInput.value){skipInput.value=skipSeconds;message('Choose a skip interval from 1 to 600 seconds.');}};
 dialog.querySelector('[data-video-volume]').oninput=e=>{video.volume=Number(e.target.value);};
 dialog.querySelector('[data-video-action=pip]').hidden=!document.pictureInPictureEnabled;
 video.addEventListener('loadedmetadata',async()=>{const bookmark=await bookmarkPromise;if(!dialog.isConnected)return;if(bookmark){saved={time:bookmark.position,rate:bookmark.speed};}video.playbackRate=speeds.includes(saved.rate)?saved.rate:1;dialog.querySelector('[data-video-speed]').value=video.playbackRate;dialog.querySelector('[data-video-speed-value]').textContent=video.playbackRate+'×';if(saved.time&&saved.time<video.duration-2)video.currentTime=saved.time;bookmarkReady=true;message('');update();video.play().catch(()=>message('Press Play to start watching.'));});
 video.addEventListener('error',()=>message('This browser cannot play this container or codec. Download the original file and open it in VLC.'));
 video.addEventListener('waiting',()=>message('Buffering…'));video.addEventListener('playing',()=>message(''));
 for(const name of ['timeupdate','play','pause','ended'])video.addEventListener(name,update);
 video.onclick=()=>{if(wakingControls){wakingControls=false;showControls();return;}action('play');};video.ondblclick=()=>action('fullscreen');
 dialog.addEventListener('keydown',e=>{if(e.target.closest('input,select,textarea,a')||e.key===' '&&e.target.closest('button')||e.altKey||e.ctrlKey||e.metaKey)return;const keys={' ':'play',ArrowLeft:'back',ArrowRight:'forward',f:'fullscreen',m:'mute'};if(keys[e.key]){e.preventDefault();action(keys[e.key]);}});
 dialog.addEventListener('close',()=>{clearTimeout(controlsTimer);clearTimeout(feedbackTimer);document.removeEventListener('fullscreenchange',fullscreenChanged);persist();video.pause();video.removeAttribute('src');video.load();dialog.remove();if(videoDialog===dialog)videoDialog=null;if(previous?.isConnected)previous.focus();});
}
document.addEventListener('csquest-audio-start',()=>videoDialog?.querySelector('video')?.pause());
window.addEventListener('account-status',()=>{if(owner&&account.user?.id!==owner){uploads.forEach(u=>u.controller?.abort());remember();videoDialog?.close();clearDetails();document.querySelectorAll('.library-form-dialog').forEach(d=>d.close());epoch++;owner=null;entries=[];crumbs=[];allFolders=[];volumes=null;checkedAt=null;uploads=[];busy=false;}});
window.addEventListener('online',()=>{for(const u of uploads)if(u.state==='waiting'){u.state='queued';}processUploads();drawTransfers();});
document.addEventListener('click',event=>{
 const node=event.target.closest('[data-library],[data-library-tray]');if(!node)return;
 const button=event.target.closest('button');if(!button)return;
 const act=button.dataset.libAction;
 if(act==='drive-settings'){openDriveSettings({drives:volumes||[],api,refresh});return;}
 if(act==='clear-completed'){uploads=uploads.filter(u=>!['done','canceled','skipped'].includes(u.state));drawTransfers();return;}
 if(button.dataset.libCommand){const action=button.dataset.libCommand,id=button.dataset.libTarget,entry=entries.find(e=>e.id===id),ids=selectedExplorerIds();if(action==='details'){setDetailsOpen(!detailsOpen);return;}if(action==='open'&&id){openEntry(id);return;}if(action==='download'){const a=document.createElement('a');a.href=ids.length===1&&entry?.kind==='file'?fileUrl(id,true):'/api/library/archive?ids='+ids.join(',');a.click();return;}if(action==='rename'&&entry){formDialog('Rename',entry.name,name=>api('rename',{id:entry.id,name}));return;}if(action==='share'&&entry){manageLibraryAccess(api,entry);return;}if(action==='move'){root().querySelector('[data-bulk-move]')?.click();return;}if(action==='delete'){root().querySelector('[data-bulk-delete]')?.click();return;}return;}
 if(act==='tray'){trayExpanded=!trayExpanded;drawTransfers();return;}
 if(act==='pause-all'){for(const u of uploads)if(['uploading','queued','waiting'].includes(u.state)){u.state='paused';u.error='Paused by you.';u.controller?.abort();}drawTransfers();return;}
 if(act==='resume-all'){for(const u of uploads)if(u.state==='paused'&&u.file){u.state='queued';u.error='';u.retryCount=0;}processUploads();drawTransfers();return;}
 if(button.hasAttribute('data-lib-pause')){const u=uploads[Number(button.dataset.libPause)];u.state='paused';u.error='Paused by you.';u.controller?.abort();drawTransfers();return;}
 if(button.hasAttribute('data-lib-prioritize')){const index=Number(button.dataset.libPrioritize),u=uploads[index];uploads.splice(index,1);uploads.unshift(u);drawTransfers();return;}
 if(act==='refresh'){refresh();return;}
 if(act==='access'){manageLibraryAccess(api);return;}
 if(act==='share'){const item=selectedDetails||entries.find(e=>e.id===selectedEntry);if(canManage()&&item)manageLibraryAccess(api,item);return;}
 if(act==='home'){navigate(null);return;}
 if(button.hasAttribute('data-lib-drive')){if(tapToOpen()||event.detail===0)navigate(button.dataset.libDrive);else{selectedDrive=button.dataset.libDrive;root().querySelectorAll('[data-lib-drive]').forEach(card=>{const selected=card.dataset.libDrive===selectedDrive;card.classList.toggle('is-current',selected);card.setAttribute('aria-pressed',String(selected));});}return;}
 if(button.hasAttribute('data-lib-nav-drive')){navigate(button.dataset.libNavDrive);return;}
 if(act==='up'){if(folder)navigate(drive,crumbs.at(-2)?.id||null);else navigate(null);return;}
 if(button.hasAttribute('data-lib-folder')){navigate(button.dataset.libTargetDrive||drive,button.dataset.libFolder||null);return;}
 if(act==='details-close'){setDetailsOpen(false);root().querySelector('[data-lib-command=details]')?.focus();return;}
 if(act==='details-open'){if(selectedEntry)openEntry(selectedEntry);return;}
 if(button.dataset.libInfo){selectEntry(button.dataset.libInfo);setDetailsOpen(true);return;}
 if(act==='view'){grid=!grid;draw();return;}
 if(act==='folder'){const target={drive,parent:folder};formDialog('New folder','',name=>api('folder',{...target,name}));return;}
 if(button.dataset.libOpen){if(tapToOpen()||event.detail===0)openEntry(button.dataset.libOpen);else selectEntry(button.dataset.libOpen);return;}
 if(button.dataset.libRename){const e=entries.find(e=>e.id===button.dataset.libRename);formDialog('Rename',e.name,name=>api('rename',{id:e.id,name}));return;}
 if(button.dataset.libMove){const e=entries.find(e=>e.id===button.dataset.libMove);if(e)moveDialog(e);return;}
 if(button.dataset.libDelete){const e=entries.find(e=>e.id===button.dataset.libDelete);formDialog('Delete '+(e.kind==='folder'?'folder':'file'),e.name,async()=>{await api('delete',{id:e.id});window.dispatchEvent(new CustomEvent('library-file-removed',{detail:e.id}));},{deleting:true});return;}
 if(button.hasAttribute('data-lib-cancel')){cancelUpload(uploads[Number(button.dataset.libCancel)]);return;}
 if(button.hasAttribute('data-lib-retry')){const u=uploads[Number(button.dataset.libRetry)];u.retryCount=0;if(u.file){u.state='queued';processUploads();}else{const picker=document.createElement('input');picker.type='file';picker.onchange=()=>{const f=picker.files[0];if(f&&f.name===(u.originalName||u.name)&&f.size===u.size&&(u.lastModified==null||f.lastModified===u.lastModified)){u.file=f;u.state='queued';processUploads();}else{u.error='Choose the same original file to resume.';drawTransfers();}};picker.click();}return;}
 if(button.hasAttribute('data-lib-dismiss')){uploads.splice(Number(button.dataset.libDismiss),1);drawTransfers();}
});
function repaintFiles(){root().querySelector('[data-lib-files]').innerHTML=filesMarkup();mountLibraryOrganizer({api,entries,drive,folder,admin:canWrite(),refresh,navigate,selectEntry,addFiles,getConflict:()=>conflictMode,setConflict:value=>conflictMode=value});}
document.addEventListener('input',e=>{if(e.target.matches('[data-lib-search]')){query=e.target.value;repaintFiles();}});
document.addEventListener('change',e=>{if(e.target.matches('[data-lib-sort]')){sort=e.target.value;repaintFiles();}});
document.addEventListener('dragover',e=>{if(e.target.closest('.library-explorer')&&drive&&canWrite()){e.preventDefault();e.dataTransfer.dropEffect='copy';}});
document.addEventListener('drop',e=>{if(e.target.closest('.library-explorer')&&drive&&canWrite()){e.preventDefault();addFiles([...e.dataTransfer.files]);}});

document.addEventListener('dblclick',event=>{if(tapToOpen()||!event.target.closest('[data-library]'))return;const card=event.target.closest('[data-lib-drive]');if(card){navigate(card.dataset.libDrive);return;}const entry=event.target.closest('[data-lib-open]');if(entry)openEntry(entry.dataset.libOpen);});

document.addEventListener('toggle',event=>{const branch=event.target.closest?.('[data-tree-branch]');if(branch)branch.open?expandedFolders.add(branch.dataset.treeBranch):expandedFolders.delete(branch.dataset.treeBranch);},true);

async function openTextFile(entry){if(entry.size>2*1024**2){problem='Notepad previews text files up to 2 MB. Download larger files to edit them.';draw();return;}try{const response=await fetch(fileUrl(entry.id));if(!response.ok)throw Error('This text file could not be opened.');const text=await response.text();libraryNotepad({name:entry.name,text,readOnly:!canWrite(),location:[drive,...crumbs.map(c=>c.name)].join(' / '),save:async file=>{const previous=conflictMode;try{if(file.name===entry.name)conflictMode='replace';return await addFiles([file]);}finally{conflictMode=previous;}}});}catch(error){problem=error.message;draw();}}
function mountPrivateContext(){const host=root()?.querySelector('.library-explorer');if(!host)return;const command=(name,id)=>{selectEntry(id);const b=root().querySelector('[data-lib-command="'+name+'"]');b?.click();};explorerContextMenu(host,{selection:()=>selectedEntry,select:selectEntry,open:openEntry,download:id=>command('download',id),...(canWrite()?{rename:id=>command('rename',id),move:id=>command('move',id),remove:id=>command('delete',id),...(canManage()?{share:id=>command('share',id)}:{}),newDirectory:()=>root().querySelector('[data-lib-action=folder]')?.click(),newText:()=>libraryNotepad({location:[drive,...crumbs.map(c=>c.name)].join(' / '),save:file=>addFiles([file])}),upload:()=>root().querySelector('[data-lib-upload]')?.click()}:{}),details:id=>{selectEntry(id);setDetailsOpen(true);},refresh});}
