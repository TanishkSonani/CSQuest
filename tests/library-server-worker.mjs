import {createPool,createStore} from '../src/platform/database.mjs';
import {createServer} from '../src/platform/server.mjs';
import {inspectDrive} from '../src/platform/storage.mjs';
const schema=process.env.CSQUEST_TEST_SCHEMA;
if(!/^csquest_test_[a-f0-9]+$/.test(schema))throw Error('Worker requires an isolated test schema.');
const pool=createPool(undefined,{options:'-c search_path='+schema}),drives=JSON.parse(process.env.CSQUEST_TEST_DRIVES);
const server=createServer({store:createStore(pool),libraryOptions:{ownerId:process.env.CSQUEST_TEST_OWNER,drives,inspect:async drive=>{await inspectDrive(drive);return {total:100*1024**2,free:100*1024**2,device:drive.id};}}});
server.listen(0,'127.0.0.1',()=>process.send({port:server.address().port}));
