export const account={user:null,status:'guest',revision:0,updatedAt:null,conflict:false};
let keys=[],pending={},timer,inflight=null,generation=0;
const prefix=()=>account.user?`csquest:user:${account.user.id}:`:'';
const notify=()=>window.dispatchEvent(new CustomEvent('account-status'));
export const authenticated=()=>!!account.user&&account.status!=='expired'&&account.status!=='unavailable';
export function lockAccount(){clearTimeout(timer);account.status='expired';stash();notify();}
export async function checkSession(){if(!authenticated())return;try{const result=await accountRequest('session');if(result.user?.id!==account.user?.id)lockAccount();}catch{ /* A temporary connection failure keeps the browser copy available. */ }}
const safeParse=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}};
export async function accountRequest(action,body){
 const res=await fetch('/api/account/'+action,{method:body?'POST':'GET',headers:body?{'Content-Type':'application/json','X-CSQuest-Request':'1'}:{},body:body?JSON.stringify(body):undefined,signal:AbortSignal.timeout(15000),credentials:'same-origin'});
 const result=await res.json();if(result.code==='AUTH_REQUIRED'&&account.user)lockAccount();if(!res.ok)throw Object.assign(new Error(result.error||'Account request failed.'),{status:res.status});return result;
}
function stash(){if(account.user)localStorage.setItem(prefix()+'pending',JSON.stringify({revision:account.revision,changes:pending}));}
function install(result){
 generation++;clearTimeout(timer);account.user=result.user;account.revision=result.revision||0;account.updatedAt=result.updatedAt;account.conflict=false;pending={};
 if(!result.user){account.status='guest';localStorage.removeItem('csquest-active-user');return;}
 localStorage.setItem('csquest-active-user',result.user.id);
 const saved=safeParse(prefix()+'pending',null);
 for(const key of keys){localStorage.removeItem(prefix()+key);if(result.data?.[key]!==undefined)localStorage.setItem(prefix()+key,result.data[key]);}
 if(saved&&Object.keys(saved.changes||{}).length){
  pending=Object.fromEntries(Object.entries(saved.changes).filter(([key,value])=>keys.includes(key)&&result.data?.[key]!==value));
  for(const [key,value] of Object.entries(pending))localStorage.setItem(prefix()+key,value);
  if(Object.keys(pending).length&&saved.revision!==account.revision){account.conflict=true;account.status='conflict';}else account.status=Object.keys(pending).length?'pending':'saved';
 }else account.status='saved';
 stash();
}
export async function initializeAccounts(courses){
 keys=['csquest-subject','csquest-theme','csquest-preferences',...courses.flatMap(c=>[c.storageKey,'csquest-drafts-'+c.id])];
 try{install(await accountRequest('session'));if(Object.keys(pending).length&&!account.conflict)setTimeout(flushAccount,0);}catch{account.status='unavailable';}
}
export const store={
 getItem:key=>localStorage.getItem(prefix()+key),
 setItem(key,value){
  if(localStorage.getItem(prefix()+key)===value)return;
  localStorage.setItem(prefix()+key,value);
  if(account.user&&keys.includes(key)){pending[key]=value;stash();account.status=account.conflict?'conflict':'pending';notify();clearTimeout(timer);timer=setTimeout(flushAccount,400);}
 },
 removeItem:key=>localStorage.removeItem(prefix()+key)
};
export function learningData(){return Object.fromEntries(keys.map(key=>[key,store.getItem(key)]).filter(([,value])=>value!==null));}
export function guestData(){return Object.fromEntries(keys.map(key=>[key,localStorage.getItem(key)]).filter(([,value])=>value!==null));}
export function validateBackupData(data){
 if(!data||typeof data!=='object'||Array.isArray(data))throw Error('Invalid learning data in backup.');
 for(const [key,value] of Object.entries(data)){
  if(!keys.includes(key)||typeof value!=='string'||value.length>1500000)throw Error('Unknown or invalid learning field in backup.');
  if(key==='csquest-theme'&&!['light','dark'].includes(value))throw Error('Invalid theme in backup.');
  if(!['csquest-theme','csquest-subject'].includes(key)){
   let parsed;try{parsed=JSON.parse(value);}catch{throw Error('Invalid JSON in learning backup.');}
   if(key.endsWith('-quest-v1')&&(!parsed||parsed.version!==1||!Array.isArray(parsed.completed)||!Number.isFinite(parsed.xp)||parsed.xp<0))throw Error('Invalid course progress in backup.');
   if(key.startsWith('csquest-drafts-')&&!Array.isArray(parsed))throw Error('Invalid paused rounds in backup.');
  }
 }return data;
}
export async function flushAccount(){
 if(inflight){await inflight;if(Object.keys(pending).length&&!account.conflict)return flushAccount();return;}
 if(!authenticated()||!Object.keys(pending).length||account.conflict)return;
 const changes={...pending},revision=account.revision,epoch=generation;account.status='saving';notify();
 const acknowledge=result=>{
  account.revision=result.revision;account.updatedAt=result.updatedAt;
  for(const [key,value] of Object.entries(changes))if(pending[key]===value)delete pending[key];
  account.status=Object.keys(pending).length?'pending':'saved';stash();
 };
 const job=(async()=>{try{
  const result=await accountRequest('data',{changes,revision});if(epoch!==generation)return;
  acknowledge(result);
 }catch(e){if(epoch!==generation)return;account.conflict=e.status===409;account.status=account.conflict?'conflict':e.status===401?'expired':'offline';stash();
  if(e.status===409)try{
   const latest=await accountRequest('session');if(epoch!==generation)return;
   // An interrupted request may have committed successfully before its reply arrived.
   if(latest.user?.id===account.user.id&&Object.entries(changes).every(([key,value])=>latest.data[key]===value)){
    account.conflict=false;acknowledge(latest);
   }
  }catch{}
 }finally{notify();}})();inflight=job;await job;inflight=null;
 if(account.status==='pending'){clearTimeout(timer);timer=setTimeout(flushAccount,100);}
}
export async function signIn(action,body){
 if(account.user&&!(account.status==='expired'&&['login','recover'].includes(action)&&body.username?.trim().toLowerCase()===account.user.username)){await flushAccount();if(Object.keys(pending).length)throw Error('Save your pending progress before switching accounts. Your full data export remains available.');}
 const result=await accountRequest(action,body);install(result);notify();if(Object.keys(pending).length&&!account.conflict)setTimeout(flushAccount,0);return result;
}
export async function signOut(all=false,password){
 await flushAccount();if(Object.keys(pending).length)throw Error('Your latest progress has not reached the server. Retry saving or export a backup before logging out.');
 await accountRequest(all?'logout-all':'logout',all?{password}:{});install({user:null});notify();
}
export async function updateProfile(body){const result=await accountRequest('profile',body);account.user=result.user;notify();}
export function clearDeletedAccount(){
 const oldPrefix=prefix();for(let i=localStorage.length-1;i>=0;i--){const key=localStorage.key(i);if(key.startsWith(oldPrefix))localStorage.removeItem(key);}
 install({user:null});notify();
}
export async function loadLatest(){
 const result=await accountRequest('session');if(!result.user)throw Error('Log in again to load your account.');
 localStorage.removeItem(prefix()+'pending');install(result);notify();
}
window.addEventListener('online',()=>{if(account.user&&!account.conflict)flushAccount();});
window.addEventListener('pagehide',()=>{
 if(!account.user||account.conflict||inflight||!Object.keys(pending).length)return;
 // The browser cache remains the retry source if this best-effort request is interrupted.
 fetch('/api/account/data',{method:'POST',headers:{'Content-Type':'application/json','X-CSQuest-Request':'1'},body:JSON.stringify({revision:account.revision,changes:pending}),keepalive:true}).catch(()=>{});
});
