export const MiB=1024**2,GiB=1024**3;
const round=value=>Math.floor(value/MiB)*MiB;
const policyBounds={reserveGB:[1,8],busyGB:[.5,32],maxGB:[0,128],idleGraceSeconds:[10,300]};
export function memoryPolicy({total,available,current=0,terminal=0,busy=false,reserveGB=2,busyGB=4,maxGB=0}){
 if(!Number.isFinite(total)||total<GiB||!Number.isFinite(available)||available<0)throw Error('Memory measurements unavailable');
 const reserve=Math.max(GiB,Math.min(total*.5,reserveGB*GiB)),aggregate=round(total-reserve);
 const ceiling=Math.max(512*MiB,round(Math.min(aggregate-Math.max(256*MiB,terminal+128*MiB),maxGB>0?maxGB*GiB:Infinity)));
 const spendable=Math.max(256*MiB,current+available-reserve-256*MiB);
 const target=round(Math.max(256*MiB,Math.min(ceiling,spendable,busy?busyGB*GiB:Infinity)));
 // memory.max below current usage can immediately kill the session. First use
 // a small memory.high reclaim step, and lower the hard cap as usage declines.
 const max=Math.max(Math.ceil(current/MiB)*MiB,round(Math.max(target,Math.min(current+256*MiB,aggregate-terminal))));
 const high=round(current>target?Math.max(target,current-128*MiB):Math.max(target*.9,current));
 return {max,high,target,aggregate,busy,reclaiming:current>target,reserve};
}
export function validTelemetry(body){
 if(!body||!['active','rps','peak'].every(k=>Number.isFinite(body[k])&&body[k]>=0&&body[k]<=100000))return false;
 return !body.policy||Object.entries(body.policy).every(([key,value])=>{const bounds=policyBounds[key];return !!bounds&&Number.isFinite(value)&&value>=bounds[0]&&value<=bounds[1];});
}
