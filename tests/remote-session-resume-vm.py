# Manual VM integration check; run as root with Firefox idle.
import http.client,socket,json,uuid,time,subprocess
class UnixHTTP(http.client.HTTPConnection):
 def connect(self):
  self.sock=socket.socket(socket.AF_UNIX,socket.SOCK_STREAM);self.sock.settimeout(20);self.sock.connect('/run/csquest-remote/broker.sock')
def call(path,body):
 c=UnixHTTP('localhost');c.request('POST',path,body=json.dumps(body),headers={'Content-Type':'application/json'});r=c.getresponse();d=json.loads(r.read());c.close();return r.status,d
identity={'actorId':str(uuid.uuid4()),'binding':'a'*64}
status,s=call('/start',dict(identity,kind='firefox'));assert status==200,s
path='/session/'+s['id']+'/'
try:
 caps=subprocess.check_output(['systemctl','show','csquest-remote-'+s['id']+'.service','-p','MemoryMax','-p','TasksMax'],text=True)
 assert 'MemoryMax=4294967296' in caps and 'TasksMax=2048' in caps,caps
 print(caps.strip(),flush=True)
 status,a=call(path+'attach',identity);assert status==200 and a['connectionId']
 assert call(path+'attach',identity)[0]==409
 assert call(path+'detach',dict(identity,connectionId='stale'))[0]==200
 assert call(path+'attach',identity)[0]==409
 assert call(path+'detach',dict(identity,connectionId=a['connectionId']))[0]==200
 status,b=call(path+'attach',identity);assert status==200 and b['connectionId']!=a['connectionId']
 assert call(path+'detach',dict(identity,connectionId=a['connectionId']))[0]==200
 assert call(path+'attach',identity)[0]==409
 time.sleep(11);assert call(path+'lease',identity)[0]==200
 time.sleep(10)
 status,c=call(path+'attach',identity);assert status==200 and c['connectionId']!=b['connectionId']
 assert call(path+'connection-lease',dict(identity,connectionId=b['connectionId']))[0]==409
 assert call(path+'connection-lease',dict(identity,connectionId=c['connectionId']))[0]==200
 print('PASS: 4 GB cap, 2048 tasks, duplicate protection, stale detach safety, and reclaim after interrupted app heartbeat.',flush=True)
finally:
 call(path+'stop',identity)
