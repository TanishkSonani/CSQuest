import {account} from './account-client.js';
const key=()=>`csquest:sidebar:${account.user?.id||'guest'}`;
export function mountShellControls(){
 let compact=false;try{compact=localStorage.getItem(key())==='compact';}catch{}
 const sidebar=document.querySelector('.sidebar');document.body.classList.toggle('is-sidebar-compact',compact);if(!sidebar)return;
 const adminLink=sidebar.querySelector('a[href="#admin"]');if(adminLink){const label=document.createElement('span');label.className='sidebar-admin-label';label.textContent='ADMINISTRATION';adminLink.before(label);}
 const button=document.createElement('button');button.className='sidebar-toggle';button.dataset.sidebarToggle='';
 function update(){button.textContent=compact?'»':'«';button.setAttribute('aria-label',compact?'Expand sidebar':'Compact sidebar');button.setAttribute('aria-expanded',String(!compact));sidebar.querySelectorAll('.nav-item').forEach(a=>{a.title=a.querySelector('span')?.textContent||a.textContent.trim();});}
 button.onclick=()=>{compact=!compact;document.body.classList.toggle('is-sidebar-compact',compact);try{localStorage.setItem(key(),compact?'compact':'expanded');}catch{}update();};sidebar.prepend(button);update();
}
