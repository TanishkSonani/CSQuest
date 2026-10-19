// Read-only diagnostics. Run as the same service user as CSQuest on the VM.
import {createPool} from '../src/platform/database.mjs';
import {libraryDrives,inspectDrive,measureLibraryDrive} from '../src/platform/storage.mjs';
const pool=createPool();
const format=bytes=>{const unit=bytes>=1e9?'GB':bytes>=1e6?'MB':bytes>=1000?'KB':'B',scale={GB:1e9,MB:1e6,KB:1000,B:1}[unit];return (bytes/scale).toLocaleString(undefined,{maximumFractionDigits:2})+' '+unit;};
try{
 const inventory=(await pool.query('SELECT drive,kind,size,uploaded FROM csquest_library_entries')).rows,drives=libraryDrives(),results=[];
 for(const drive of drives){
  try{
   const measured=await measureLibraryDrive(drive,drives,inventory,d=>inspectDrive(d,{createLocal:false}));
   results.push({...measured,display:{volumeTotal:format(measured.total),filesystemFree:format(measured.free),platformAndOther:format(Math.max(0,measured.total-measured.free-measured.used)),libraryLimit:format(measured.quota),libraryStored:format(measured.used),uploadReservations:format(measured.pending),platformBuffer:format(measured.buffer),availableForLibrary:format(measured.available)}});
  }catch(error){results.push({id:drive.id,name:drive.name,online:false,error:error.status?error.message:error.code||'Filesystem unavailable'});}
 }
 console.log(JSON.stringify({checkedAt:new Date().toISOString(),platform:process.platform,sharedFilesystem:results.every(v=>v.online)&&results[0].device===results[1].device,drives:results},null,2));
 if(results.some(d=>!d.online))process.exitCode=2;
}catch(error){console.error('Cannot inspect Library storage:',error.code||error.message);process.exitCode=1;}
finally{await pool.end();}
