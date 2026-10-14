// Surface module/network failures instead of leaving the initial loader forever.
try{
 await import('./app.js');
}catch(error){
 console.error('CSQuest startup failed:',error);
 const app=document.getElementById('app');
 app.replaceChildren();
 const message=document.createElement('div');message.className='loading-state';message.setAttribute('role','alert');
 const text=document.createElement('p');text.textContent='We could not load your learning space. Please check your connection and try again.';
 const retry=document.createElement('button');retry.type='button';retry.textContent='Try again';retry.addEventListener('click',()=>location.reload());
 message.append(text,retry);app.append(message);
}
