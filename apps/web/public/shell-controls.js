import {account} from './account-client.js';
import {icon} from './icons.js';
const key=()=>`csquest:sidebar:${account.user?.id||'guest'}`;
let previousPage=null;
const returnKey=()=>`csquest:library-return:${account.user?.id||'guest'}`;
matchMedia('(max-width:1250px)').addEventListener('change',event=>{
 if(event.matches)document.querySelector('[data-library] .library-browser-layout')?.classList.add('is-details-hidden');
});
export function mountShellControls({library=false}={}){
 document.body.classList.toggle('is-library-workspace',library);
 const current=location.hash.slice(1)||'learn';
 if(library){
  if(previousPage&&previousPage!=='library')try{sessionStorage.setItem(returnKey(),previousPage);}catch{}
  let target='learn';try{target=sessionStorage.getItem(returnKey())||target;}catch{}
  if(!/^(subjects|learn|practice|errors|podcasts|roadmap|progress|social|help|account|settings|admin|admin-reports)$/.test(target))target='learn';
  const back=document.createElement('a');back.href='#'+target;back.className='library-workspace-back';back.setAttribute('aria-label','Back to previous page');back.innerHTML=icon('back')+'<span>Back</span>';document.querySelector('#main')?.prepend(back);
 }
 previousPage=library?'library':current;
 let compact=false;try{compact=localStorage.getItem(key())==='compact';}catch{}
 const sidebar=document.querySelector('.sidebar');document.body.classList.toggle('is-sidebar-compact',compact);if(!sidebar)return;
 const adminLink=sidebar.querySelector('a[href="#admin"]');if(adminLink){const label=document.createElement('span');label.className='sidebar-admin-label';label.textContent='ADMINISTRATION';adminLink.before(label);}
 const button=document.createElement('button');button.className='sidebar-toggle';button.dataset.sidebarToggle='';
 function update(){button.textContent=compact?'»':'«';button.setAttribute('aria-label',compact?'Expand sidebar':'Compact sidebar');button.setAttribute('aria-expanded',String(!compact));sidebar.querySelectorAll('.nav-item').forEach(a=>{a.title=a.querySelector('span')?.textContent||a.textContent.trim();});}
 button.onclick=()=>{compact=!compact;document.body.classList.toggle('is-sidebar-compact',compact);try{localStorage.setItem(key(),compact?'compact':'expanded');}catch{}update();};sidebar.prepend(button);update();
}
