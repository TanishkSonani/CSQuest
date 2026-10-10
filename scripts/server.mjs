import {createServer} from '../src/platform/server.mjs';
const port=Number(process.env.APP_PORT||4173);
createServer().listen(port,'127.0.0.1',()=>console.log(`CS Quest: http://localhost:${port} (this PC only)`));
