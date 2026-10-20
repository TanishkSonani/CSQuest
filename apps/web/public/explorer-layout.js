import {escapeHtml as h} from '/shared/engine.js';
import {icon} from './icons.js';
export const displayBytes=n=>!Number.isFinite(n)?'—':n<1000?n+' B':(n/1000**Math.min(3,Math.floor(Math.log10(n)/3))).toLocaleString(undefined,{maximumFractionDigits:2})+' '+['B','KB','MB','GB'][Math.min(3,Math.floor(Math.log10(n)/3))];
export const fileKind=e=>e.kind==='folder'?'folder':/\.(mp4|mkv|webm|mov|ogv)$/i.test(e.name)?'video':/\.(mp3|wav|m4a|aac|flac|ogg|opus)$/i.test(e.name)?'audio':'file';
export function explorerFiles(entries,{selected=null,query='',sort='name',grid=false}={}){
 const list=entries.filter(e=>e.name.toLowerCase().includes(query.toLowerCase())).sort((a,b)=>Number(b.kind==='folder')-Number(a.kind==='folder')||(sort==='size'?b.size-a.size:sort==='date'?new Date(b.updatedAt)-new Date(a.updatedAt):a.name.localeCompare(b.name)));
 if(!list.length)return `<div class="library-empty">${icon('folder')}<h2>${query?'No matching files':'A little room for everything.'}</h2><p>${query?'Try a different name.':'Files and folders will appear here.'}</p></div>`;
 return `<div class="library-files ${grid?'is-grid':''}" role="list" aria-label="Files and folders">${grid?'':'<div class="library-file-head"><span>Name</span><span>Date modified</span><span>Size</span></div>'}${list.map(e=>{const kind=fileKind(e);return `<article class="library-file ${e.kind==='folder'?'is-folder':''} ${selected===e.id?'is-selected':''}" data-lib-entry="${e.id}" role="listitem"><button class="library-file-open ${kind}" data-lib-open="${e.id}" aria-label="Open ${h(e.name)}" aria-pressed="${selected===e.id}" title="${h(e.name)}">${icon(kind==='audio'?'sound':kind)}<span>${h(e.name)}</span></button><time class="library-file-date" datetime="${h(e.updatedAt||'')}">${e.updatedAt?new Date(e.updatedAt).toLocaleDateString():'—'}</time><span class="library-file-size">${e.kind==='folder'?'—':displayBytes(e.size)}</span></article>`;}).join('')}</div>`;
}
export function explorerTree(folders,{current=null,open=new Set(),onPath=new Set(),publicMode=false}={}){
 const seen=new Set();
 function branch(parent,depth=0){
  if(depth>99)return '';
  return folders.filter(f=>f.parent===parent).sort((a,b)=>a.name.localeCompare(b.name)).map(f=>{
   if(seen.has(f.id))return '';seen.add(f.id);
   const children=folders.some(c=>c.parent===f.id),button=`<button class="library-tree-folder ${current===f.id?'is-current':''}" ${current===f.id?'aria-current="location"':''} ${publicMode?'data-public-folder':'data-lib-folder'}="${f.id}" title="${h(f.name)}">${icon('folder')}<span>${h(f.name)}</span></button>`;
   return `<div class="explorer-tree-node">${children?`<details class="explorer-tree-branch" data-tree-branch="${f.id}" ${open.has(f.id)||onPath.has(f.id)?'open':''}><summary><span class="explorer-tree-toggle" aria-hidden="true">${icon('chevron')}</span>${button}</summary><div class="explorer-tree-children">${branch(f.id,depth+1)}</div></details>`:`<div class="explorer-tree-leaf"><span class="explorer-tree-toggle" aria-hidden="true"></span>${button}</div>`}</div>`;
  }).join('');
 }
 return branch(null);
}
let currentSelection=[];
export function selectedExplorerIds(){return currentSelection;}
export function updateExplorerSelection(ids){currentSelection=ids;document.querySelectorAll('[data-lib-command]').forEach(b=>{const action=b.dataset.libCommand;b.disabled=action==='details'?false:action==='select-all'?false:ids.length===0||['open','rename','share'].includes(action)&&ids.length!==1;b.dataset.libTarget=ids[0]||'';});}
document.addEventListener('library-bulk-selection',e=>updateExplorerSelection(e.detail.ids));
export function mountPrivateExplorer({drive,folder,volumes,folders,crumbs,selected,admin,navigate,shareDrive,detailsOpen=false}){
 const root=document.querySelector('[data-library]');if(!root)return;
 const layout=root.querySelector('.library-browser-layout'),details=root.querySelector('[data-lib-details]');
 if(layout)layout.classList.toggle('is-details-hidden',!detailsOpen);
 if(layout&&details){details.classList.add('explorer-details-pane');details.hidden=false;if(!selected)details.innerHTML='<div class="explorer-details-empty">'+icon('file')+'<button class="library-small-button" data-lib-action="details-close" aria-label="Close file details">×</button><h3>Details</h3><p>Select a file or folder to see its properties.</p></div>';layout.append(details);}
 if(admin){const b=document.createElement('button');b.className='btn secondary';b.textContent=folder?'SHARE DIRECTORY':'SHARE DRIVE';b.dataset.shareDrive='';b.onclick=shareDrive;root.querySelector('.library-heading').append(b);}
 const toolbar=root.querySelector('.library-toolbar');if(!toolbar)return;toolbar.classList.add('explorer-command-bar');
 const commands=document.createElement('div');commands.className='explorer-selection-commands';commands.innerHTML=[['open','Open','folder'],['download','Download','download'],...(admin?[['rename','Rename','pencil'],['move','Move','arrow'],['delete','Delete','close'],['share','Share','heart']]:[]),['details','Details','file']].map(([action,label,glyph])=>`<button class="explorer-command" data-lib-command="${action}" title="${label}" aria-label="${label} selected item">${icon(glyph)}<span>${label}</span></button>`).join('');toolbar.prepend(commands);
 const bulk=root.querySelector('[data-bulk-bar]');if(bulk){bulk.classList.add('explorer-bulk-commands');root.querySelector('.library-folder-status').append(bulk);}
 const breadcrumb=root.querySelector('.library-breadcrumb');if(breadcrumb){const address=document.createElement('div');address.className='explorer-address';breadcrumb.replaceWith(address);address.append(breadcrumb);const edit=document.createElement('button');edit.className='explorer-address-edit';edit.textContent='✎';edit.setAttribute('aria-label','Edit address');address.append(edit);edit.onclick=()=>{const input=document.createElement('input');input.className='explorer-address-input';input.setAttribute('aria-label','Library address');input.value=[volumes?.find(d=>d.id===drive)?.name||drive,...crumbs.map(c=>c.name)].join(' / ');address.replaceChildren(input);input.focus();input.select();input.onkeydown=async e=>{if(e.key==='Escape'){await navigate(drive,folder);return;}if(e.key!=='Enter')return;e.preventDefault();const parts=input.value.replaceAll('\\','/').split('/').map(s=>s.trim()).filter(Boolean);if(parts[0]?.toLowerCase()==='this pc')parts.shift();if(!parts.length){await navigate(null);return;}const first=parts.shift().toLowerCase(),target=volumes.find(v=>[v.id,v.name.toLowerCase(),v.id==='boot'?'b:':'d:'].includes(first));let parent=null;if(target){for(const name of parts){const f=folders.find(f=>f.parent===parent&&f.name.toLowerCase()===name.toLowerCase());if(!f){input.setCustomValidity('Directory not found. Use the folder tree to switch drives.');input.reportValidity();return;}parent=f.id;}await navigate(target.id,parent);}else{input.setCustomValidity('Drive not found. Start with Boot storage or Block storage.');input.reportValidity();}};input.oninput=()=>input.setCustomValidity('');};}
 const extras=toolbar.querySelector('.library-extra-actions');if(extras){const more=document.createElement('details');more.className='explorer-more';more.innerHTML='<summary>More ···</summary>';extras.before(more);more.append(extras);}const filters=toolbar.querySelector('.library-filter'),address=root.querySelector('.explorer-address');if(filters&&address)address.append(filters);
 commands.querySelector('[data-lib-command=details]')?.setAttribute('aria-pressed',String(detailsOpen));
 updateExplorerSelection(selected?[selected]:[]);
}
