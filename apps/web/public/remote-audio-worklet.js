class RemoteAudioProcessor extends AudioWorkletProcessor {
 constructor(){
  super();this.capacity=48000;this.left=new Float32Array(this.capacity);this.right=new Float32Array(this.capacity);this.read=0;this.write=0;this.count=0;this.fraction=0;this.playing=false;this.carry=new Uint8Array(0);
  this.port.onmessage=event=>{
   if(event.data.type==='reset'){this.read=this.write=this.count=this.fraction=0;this.playing=false;this.carry=new Uint8Array(0);return;}
   let bytes=new Uint8Array(event.data.buffer);if(this.carry.length){const merged=new Uint8Array(this.carry.length+bytes.length);merged.set(this.carry);merged.set(bytes,this.carry.length);bytes=merged;}
   const frames=Math.floor(bytes.length/4),view=new DataView(bytes.buffer,bytes.byteOffset,frames*4);this.carry=bytes.slice(frames*4);
   for(let frame=Math.max(0,frames-this.capacity);frame<frames;frame++){
    if(this.count===this.capacity){this.read=(this.read+1)%this.capacity;this.count--;}
    this.left[this.write]=view.getInt16(frame*4,true)/32768;this.right[this.write]=view.getInt16(frame*4+2,true)/32768;this.write=(this.write+1)%this.capacity;this.count++;
   }
   // Drop stale sound after stalls; never grow the buffer beyond one second.
   if(this.count>19200){this.count=4800;this.read=(this.write-this.count+this.capacity)%this.capacity;this.fraction=0;}
  };
 }
 process(_inputs,outputs){
  const output=outputs[0];if(!output?.length)return true;
  if(!this.playing&&this.count>=4800)this.playing=true;
  const ratio=48000/sampleRate;
  for(let frame=0;frame<output[0].length;frame++){
   if(!this.playing||this.count<2){for(const channel of output)channel[frame]=0;this.playing=false;continue;}
   const next=(this.read+1)%this.capacity,l=this.left[this.read]+(this.left[next]-this.left[this.read])*this.fraction,r=this.right[this.read]+(this.right[next]-this.right[this.read])*this.fraction;
   output[0][frame]=output.length===1?(l+r)/2:l;if(output[1])output[1][frame]=r;
   this.fraction+=ratio;const consumed=Math.floor(this.fraction);this.fraction-=consumed;this.read=(this.read+consumed)%this.capacity;this.count=Math.max(0,this.count-consumed);
  }
  return true;
 }
}
registerProcessor('csquest-remote-audio',RemoteAudioProcessor);
