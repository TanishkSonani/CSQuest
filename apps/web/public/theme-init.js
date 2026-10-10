// Apply the saved global theme before CSS and subject modules load.
try{
  const user=localStorage.getItem('csquest-active-user'),prefix=user?`csquest:user:${user}:`:'';
  const theme=localStorage.getItem(prefix+'csquest-theme');
  document.documentElement.dataset.theme=theme==='dark'?'dark':'light';
  const preferences=JSON.parse(localStorage.getItem(prefix+'csquest-preferences')||'{}');
  document.documentElement.dataset.motion=preferences?.motion==='reduced'?'reduced':'system';
}catch{document.documentElement.dataset.theme='light';}
