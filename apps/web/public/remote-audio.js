export class RemoteAudio {
 constructor(button){this.button=button;this.wanted=false;this.bytes=0;button.onclick=()=>{if(this.wanted)this.mute();else{this.prepare();this.start(this.sessionId).catch(()=>this.failed());}};}
 prepare(){try{if(!this.context||this.context.state==='closed'){try{this.context=new AudioContext({latencyHint:'interactive',sampleRate:48000});}catch{this.context=new AudioContext({latencyHint:'interactive'});}}this.resume=this.context.resume();this.resume.catch(()=>{});}catch{this.failed();}}
 failed(message='Enable sound'){this.wanted=false;this.controller?.abort();clearTimeout(this.retry);this.node?.port.postMessage({type:'reset'});this.context?.suspend().catch(()=>{});this.button.textContent=message;this.button.setAttribute('aria-pressed','false');this.button.title='Click to enable audio from Firefox on the VM.';}
 async start(id){
  this.sessionId=id;if(!id)return;this.wanted=true;const context=this.context;if(!context)throw Error('Audio needs a user gesture');
  let timer;try{await Promise.race([this.resume,new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error('Audio needs a user gesture')),2000);})]);}finally{clearTimeout(timer);}
  if(!this.wanted||context!==this.context)return;
  if(!this.node){await context.audioWorklet.addModule('/remote-audio-worklet.js');if(!this.wanted||context!==this.context)return;this.node=new AudioWorkletNode(context,'csquest-remote-audio',{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2]});this.node.connect(context.destination);}
  this.controller?.abort();const controller=new AbortController();this.controller=controller;this.button.textContent='Connecting sound';this.button.setAttribute('aria-pressed','true');
  try{
   const response=await fetch('/api/remote/audio/'+id,{credentials:'same-origin',cache:'no-store',signal:controller.signal});
   if(!response.ok)throw Object.assign(Error('Audio unavailable'),{status:response.status});
   this.button.textContent='Sound on';this.button.title='Mute audio from the VM';this.reconnectAt=0;this.node.port.postMessage({type:'reset'});
   const reader=response.body.getReader();
   while(this.wanted&&!controller.signal.aborted){const {value,done}=await reader.read();if(done)throw Error('Audio disconnected');this.bytes+=value.byteLength;const buffer=value.buffer.slice(value.byteOffset,value.byteOffset+value.byteLength);this.node.port.postMessage({type:'pcm',buffer},[buffer]);}
  }catch(error){
   if(controller.signal.aborted||!this.wanted)return;
   if([401,403,404,410].includes(error.status)){this.failed();return;}
   this.reconnectAt||=Date.now();if(Date.now()-this.reconnectAt>90000){this.failed();return;}
   this.node?.port.postMessage({type:'reset'});this.button.textContent='Reconnecting sound';this.retry=setTimeout(()=>this.start(id).catch(()=>this.failed()),2000);
  }
 }
 mute(){this.wanted=false;this.controller?.abort();clearTimeout(this.retry);this.node?.port.postMessage({type:'reset'});this.context?.suspend().catch(()=>{});this.button.textContent='Sound off';this.button.setAttribute('aria-pressed','false');this.button.title='Enable audio from the VM';}
 close(){this.mute();this.node?.disconnect();this.node=null;this.context?.close().catch(()=>{});this.context=null;this.sessionId=null;}
}
