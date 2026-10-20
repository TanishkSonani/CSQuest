import test from 'node:test';
import assert from 'node:assert/strict';
import {libraryFixture} from './library-fixture.mjs';

test('PDF preview bytes stay authenticated, support ranges and avoid native download disposition',async t=>{
 const f=await libraryFixture(t),data=Buffer.from('%PDF-1.4\nviewer transport fixture\n%%EOF');
 const file=await f.ok(await f.req('upload',{drive:'boot',name:'preview.pdf',size:data.length}));await f.ok(await f.req('chunk?id='+file.id+'&offset=0',data,{method:'PUT'}));await f.ok(await f.req('complete',{id:file.id}));
 const privatePath='file?id='+file.id+'&preview=1',preview=await f.req(privatePath);assert.equal(preview.headers.get('content-type'),'application/x-csquest-document');assert.equal(preview.headers.get('content-disposition'),'inline');assert.deepEqual(Buffer.from(await preview.arrayBuffer()),data);
 assert.equal((await fetch(f.base+'/api/library/'+privatePath)).status,401);
 const range=await f.req(privatePath,null,{headers:{Range:'bytes=0-7'}});assert.equal(range.status,206);assert.deepEqual(Buffer.from(await range.arrayBuffer()),data.subarray(0,8));
 const link=await f.ok(await f.req('public-links',{entryId:file.id,days:1})),publicPreview=await fetch(f.base+'/api/library/public-file?token='+link.token+'&preview=1');assert.equal(publicPreview.headers.get('content-type'),'application/x-csquest-document');assert.deepEqual(Buffer.from(await publicPreview.arrayBuffer()),data);
 const download=await f.req('file?id='+file.id+'&download=1');assert.match(download.headers.get('content-disposition'),/^attachment;/);await download.arrayBuffer();
});
