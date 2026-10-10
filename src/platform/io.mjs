import fs from 'node:fs/promises';
import {randomUUID} from 'node:crypto';
export async function readJson(file,fallback=null){try{return JSON.parse(await fs.readFile(file,'utf8'));}catch{return fallback;}}
export async function atomicJson(file,value){const temporary=file+'.'+randomUUID()+'.tmp';await fs.writeFile(temporary,JSON.stringify(value,null,2));await fs.rename(temporary,file);}
