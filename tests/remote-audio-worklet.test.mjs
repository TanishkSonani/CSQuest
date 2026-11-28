import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs/promises';
const source=await fs.readFile(new URL('../apps/web/public/remote-audio-worklet.js',import.meta.url),'utf8');
function processor(rate=48000){let Audio;vm.runInNewContext(source,{sampleRate:rate,AudioWorkletProcessor:class{constructor(){this.port={};}},registerProcessor:(_name,value)=>Audio=value});return new Audio();}
function pcm(frames){const data=Buffer.alloc(frames*4);for(let i=0;i<frames;i++){const sample=Math.round(Math.sin(i*2*Math.PI*440/48000)*16000);data.writeInt16LE(sample,i*4);data.writeInt16LE(-sample,i*4+2);}return data;}
function send(p,data){p.port.onmessage({data:{type:'pcm',buffer:data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength)}});}
test('PCM worklet preserves stereo channels and split frames at 48 kHz and resamples 44.1 kHz',()=>{
 for(const rate of [48000,44100]){const p=processor(rate),data=pcm(6000);send(p,data.subarray(0,3));send(p,data.subarray(3));const output=[new Float32Array(128),new Float32Array(128)];p.process([], [output]);assert.ok(output[0].some(v=>Math.abs(v)>.1));for(let i=0;i<128;i++)assert.ok(Math.abs(output[0][i]+output[1][i])<1e-6);}
});
test('audio buffers are bounded, stall recovery drops old sound, reset clears queued audio and underruns are silent',()=>{
 const p=processor();send(p,pcm(90000));assert.equal(p.count,4800);assert.ok(p.count<=p.capacity);p.port.onmessage({data:{type:'reset'}});assert.equal(p.count,0);const output=[new Float32Array(128).fill(1),new Float32Array(128).fill(1)];p.process([], [output]);assert.ok(output.every(channel=>channel.every(v=>v===0)));assert.equal(p.carry.length,0);
});
