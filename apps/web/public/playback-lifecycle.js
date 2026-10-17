import {motionEnabled} from './motion.js';
const owners=[];
export const canPlay=()=>motionEnabled()&&!document.hidden;
export const playbackLabel=()=>motionEnabled()?'PLAY':'STEP ONCE';
export function watchPlayback(timers,stop){owners.push({timers,stop});}
function reconcile(){for(const {timers,stop} of owners)for(const root of timers.keys())if(!root.isConnected||!canPlay())stop(root);}
new MutationObserver(reconcile).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['data-motion']});
document.addEventListener('visibilitychange',reconcile);
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',reconcile);
