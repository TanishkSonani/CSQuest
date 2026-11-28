import test from 'node:test';
import assert from 'node:assert/strict';
import {memoryPolicy,validTelemetry,GiB,MiB} from '../deploy/remote-memory.mjs';
test('idle Firefox can borrow spare RAM while busy CSQuest retains a 4 GB target and host reserve',()=>{
 const idle=memoryPolicy({total:12*GiB,available:10*GiB,current:.5*GiB}),busy=memoryPolicy({total:12*GiB,available:10*GiB,current:.5*GiB,busy:true});
 assert.ok(idle.max>8*GiB);assert.ok(idle.max<10*GiB);assert.equal(busy.target,4*GiB);assert.equal(busy.max,4*GiB);assert.equal(idle.reserve,2*GiB);assert.ok(idle.high<=idle.max);
});
test('shrinking targets never force memory.max below current usage, and reclaim is gradual',()=>{
 const busy=memoryPolicy({total:12*GiB,available:2*GiB,current:8*GiB,busy:true});assert.equal(busy.target,4*GiB);assert.equal(busy.high,8*GiB-128*MiB);assert.ok(busy.max>8*GiB);assert.equal(busy.reclaiming,true);
 const pressure=memoryPolicy({total:12*GiB,available:256*MiB,current:4*GiB,busy:true});assert.ok(pressure.target<4*GiB);assert.ok(pressure.max>=4*GiB);assert.ok(pressure.aggregate>=pressure.max);
 const capped=memoryPolicy({total:12*GiB,available:10*GiB,current:GiB,maxGB:6});assert.equal(capped.max,6*GiB);assert.throws(()=>memoryPolicy({total:NaN,available:GiB}),/unavailable/);
 const nearLimit=memoryPolicy({total:12*GiB,available:2*GiB,current:10*GiB-32*MiB,busy:true});assert.equal(nearLimit.aggregate,10*GiB);assert.ok(nearLimit.max<=nearLimit.aggregate,'Repeated adjustments must not erode the host reserve');
});
test('resource telemetry accepts only bounded measurements and supported policy settings',()=>{
 assert.equal(validTelemetry({active:0,rps:.2,peak:2,policy:{reserveGB:2,busyGB:4,maxGB:0,idleGraceSeconds:60}}),true);
 for(const body of [{active:-1,rps:0,peak:0},{active:0,rps:Infinity,peak:0},{active:0,rps:0,peak:0,policy:{reserveGB:0}},{active:0,rps:0,peak:0,policy:{command:'x'}}])assert.equal(validTelemetry(body),false);
});
