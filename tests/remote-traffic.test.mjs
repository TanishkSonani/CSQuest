import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import {EventEmitter} from 'node:events';
import {createRemoteSessions} from '../src/platform/remote-sessions.mjs';
test('adaptive telemetry counts active platform transfers once and excludes the remote session itself',async t=>{
 let metrics;
 const remote=createRemoteSessions({store:{},broker:{enabled:true,metrics:true,async request(_method,path,body){if(path==='/metrics')metrics=body;return {ok:true};}}});
 const server=http.createServer();remote.attach(server);await new Promise(r=>server.listen(0,'127.0.0.1',r));t.after(()=>new Promise(r=>server.close(r)));
 const finished=new EventEmitter();remote.observeRequest({url:'/api/account/data'},finished);finished.emit('finish');finished.emit('close');
 const transfer=new EventEmitter();remote.observeRequest({url:'/api/library/file?id=test'},transfer);
 remote.observeRequest({url:'/api/remote/audio/test'},new EventEmitter());
 for(let i=0;i<70&&!metrics;i++)await new Promise(r=>setTimeout(r,100));
 assert.ok(metrics);assert.equal(metrics.active,1);assert.ok(metrics.rps>0&&metrics.rps<.5);assert.equal(metrics.peak,1);assert.ok(metrics.policy.reserveGB>=1);transfer.emit('close');
});
