// Reconcile progress in place: rebuilding innerHTML resets scrollbars and focus.
export function renderTransferView(root,html){
 const scroll=[root,...root.querySelectorAll('[data-tray-body]')].map(node=>[node,node.scrollTop]);
 const template=document.createElement('template');template.innerHTML=html;
 function patch(parent,next){
  for(let i=0;i<next.childNodes.length;i++){
   const source=next.childNodes[i];let target=parent.childNodes[i];
   const key=source.nodeType===1&&source.getAttribute('data-transfer-id');
   if(key&&target?.getAttribute?.('data-transfer-id')!==key){const found=[...parent.children].find(n=>n.getAttribute('data-transfer-id')===key);if(found){parent.insertBefore(found,target||null);target=found;}else if(target){const added=source.cloneNode(true);parent.insertBefore(added,target);target=added;}}
   if(!target){parent.append(source.cloneNode(true));continue;}
   if(target.nodeType!==source.nodeType||target.nodeName!==source.nodeName){target.replaceWith(source.cloneNode(true));continue;}
   if(source.nodeType===3){if(target.nodeValue!==source.nodeValue)target.nodeValue=source.nodeValue;continue;}
   if(source.nodeType!==1)continue;
   for(const attr of [...target.attributes])if(!source.hasAttribute(attr.name))target.removeAttribute(attr.name);
   for(const attr of source.attributes)if(target.getAttribute(attr.name)!==attr.value)target.setAttribute(attr.name,attr.value);
   patch(target,source);
  }
  while(parent.childNodes.length>next.childNodes.length)parent.lastChild.remove();
 }
 patch(root,template.content);
 for(const [node,top] of scroll)if(node.isConnected&&node.scrollTop!==top)node.scrollTop=top;
}
export function readTransfers(key){
 try{const saved=JSON.parse(localStorage.getItem(key)||sessionStorage.getItem(key)||'[]');return Array.isArray(saved)?saved.filter(j=>j&&typeof j.id==='string'&&Number.isSafeInteger(j.size)&&j.size>=0).slice(0,1000).map(j=>({...j,state:'paused',error:'Choose the original file to resume. Transfers pause when this browser is closed.'})):[];}catch{return [];}
}
export function saveTransfers(key,jobs){
 try{localStorage.setItem(key,JSON.stringify(jobs.filter(j=>!['done','canceled','skipped'].includes(j.state)).map(({file,controller,inFlight,startedAt,startedUploaded,paintTimer,...j})=>j)));sessionStorage.removeItem(key);}catch{}
}
export async function chunkChecksum(blob){return [...new Uint8Array(await crypto.subtle.digest('SHA-256',await blob.arrayBuffer()))].map(b=>b.toString(16).padStart(2,'0')).join('');}
export async function manifestChecksum(chunks){return chunkChecksum(new Blob([chunks.map(c=>`${c.offset}:${c.length}:${c.sha256}\n`).join('')]));}
