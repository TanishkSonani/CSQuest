// Apply the saved global theme before CSS and subject modules load.
try{
  const user=localStorage.getItem('csquest-active-user'),prefix=user?`csquest:user:${user}:`:'';
  const theme=localStorage.getItem(prefix+'csquest-theme');
  document.documentElement.dataset.theme=theme==='dark'?'dark':'light';
  const preferences=JSON.parse(localStorage.getItem(prefix+'csquest-preferences')||'{}');
  document.documentElement.dataset.motion=preferences?.motion==='reduced'?'reduced':'system';
}catch{document.documentElement.dataset.theme='light';}
// Keep installed Chrome app chrome aligned with the visible app surface.
function updateBrowserTheme(){
 const dark=document.documentElement.dataset.theme==='dark',meta=document.querySelector('meta[name="theme-color"]');
 if(meta)meta.content=dark?'#182b26':'#ffffff';
 document.documentElement.style.colorScheme=dark?'dark':'light';
}
updateBrowserTheme();
new MutationObserver(updateBrowserTheme).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
