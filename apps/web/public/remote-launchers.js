import {icon} from './icons.js';
export function mountRemoteLaunchers({drive,folder,admin}){
 if(!admin||drive!=='boot'||folder)return;
 const host=document.querySelector('[data-lib-files]');if(!host||host.querySelector('[data-remote-launchers]'))return;
 const apps=document.createElement('section');apps.className='remote-launchers';apps.dataset.remoteLaunchers='';apps.setAttribute('aria-label','VM applications');
 apps.innerHTML=`<a class="remote-launcher remote-firefox" href="/remote.html?app=firefox" target="_blank" rel="noopener" aria-label="Launch Firefox in a new tab"><span aria-hidden="true">${icon('flame')}</span><strong>Firefox</strong></a><a class="remote-launcher remote-terminal" href="/remote.html?app=terminal" target="_blank" rel="noopener" aria-label="Launch Terminal in a new tab"><span aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m6 9 4 3-4 3m7 0h5"/></svg></span><strong>Terminal</strong></a>`;
 apps.addEventListener('contextmenu',event=>event.stopPropagation());
 host.querySelector('.library-empty')?.remove();host.prepend(apps);
}
