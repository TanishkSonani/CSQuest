import fs from 'node:fs';
import {fileURLToPath} from 'node:url';

// Production variables come from the host; local configuration stays untracked.
const file=fileURLToPath(new URL('../../.env',import.meta.url));
if(!process.env.VERCEL&&fs.existsSync(file))process.loadEnvFile(file);
