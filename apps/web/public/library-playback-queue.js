import {escapeHtml as h} from '/shared/engine.js';
import {account} from './account-client.js';
let items=[],index=-1,autoplay=true,label='Folder';
export const isLibraryMedia=file=>file?.kind!=='folder'&&/\.(mp4|mkv|webm|ogv|mov|mp3|m4a|aac|ogg|opus|wav|flac)$/i.test(file?.name||'');
export function setPlaybackQueue(files,{current,label:name='Folder'}={}){queueOwner=account.user?.id;items=files.filter(isLibraryMedia).slice(0,500);index=items.findIndex(f=>f.id===current);label=name;window.dispatchEvent(new CustomEvent('library-queue-changed'));}
export function setQueueCurrent(file){queueOwner=account.user?.id;const next=items.findIndex(f=>f.id===file.id&&!!f.publicShare===!!file.publicShare);if(next<0){items=[file];index=0;label='Single file';}else index=next;}
export const playbackQueue=()=>({items,index,autoplay,label});
export function advanceQueue(delta=1,{automatic=false}={}){
 if(automatic&&!autoplay)return false;const next=index+delta;if(next<0||next>=items.length)return false;index=next;
 window.dispatchEvent(new CustomEvent('library-media-open',{detail:items[index]}));return true;
}
export function mountQueueControls(container){
 if(items.length<2)return;
 const node=document.createElement('section');node.className='library-queue-controls';
 node.innerHTML=`<label>${h(label)}<select aria-label="Playback queue">${items.map((file,i)=>`<option value="${i}" ${i===index?'selected':''}>${i+1}. ${h(file.name)}</option>`).join('')}</select></label><div><button type="button" data-queue-prev ${index<=0?'disabled':''}>Previous file</button><button type="button" data-queue-next ${index>=items.length-1?'disabled':''}>Next file</button></div><label class="check-label"><input type="checkbox" ${autoplay?'checked':''}>Play next automatically</label>`;
 container.append(node);node.querySelector('select').onchange=e=>{const next=Number(e.target.value);if(Number.isInteger(next)&&items[next])advanceQueue(next-index);};node.querySelector('[data-queue-prev]').onclick=()=>advanceQueue(-1);node.querySelector('[data-queue-next]').onclick=()=>advanceQueue(1);node.querySelector('input').onchange=e=>{autoplay=e.target.checked;};
}
let queueOwner=account.user?.id;window.addEventListener('account-status',()=>{if(queueOwner!==account.user?.id){items=[];index=-1;queueOwner=account.user?.id;}});
