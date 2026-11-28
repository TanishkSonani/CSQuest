"""Manual native Firefox/PulseAudio and adaptive-limit check; leaves no session."""
import array, json, math, os, subprocess, time, urllib.request, uuid

actor = str(uuid.uuid4())
binding = uuid.uuid4().hex + uuid.uuid4().hex
session = None
stopped = False
def broker(path, body):
    result = subprocess.run(['sudo','curl','--fail','--silent','--show-error',
        '--unix-socket','/run/csquest-remote/broker.sock','-H','Content-Type: application/json',
        '--data-binary','@-','http://localhost'+path],input=json.dumps(body),text=True,capture_output=True,check=True)
    return json.loads(result.stdout)
def request(action):
    return broker('/session/'+session['id']+'/'+action, {'actorId':actor,'binding':binding})
def xdo(*args):
    return subprocess.check_output(['sudo','nsenter','-t',str(pid),'-m','--','runuser','-u','csquest-browser','--',
        'env','DISPLAY=:'+str(details['port']+100),'xdotool',*args],stderr=subprocess.DEVNULL,text=True).strip()
try:
    session=broker('/start',{'kind':'firefox','actorId':actor,'binding':binding})
    details=request('inspect')
    unit='csquest-remote-'+session['id']+'.service'
    pid=int(subprocess.check_output(['systemctl','show',unit,'--property=MainPID','--value'],text=True))
    window=None
    for _ in range(40):
        try:
            windows=xdo('search','--onlyvisible','--class','firefox').splitlines()
            if windows:
                window=windows[-1];break
        except subprocess.CalledProcessError:
            pass
        time.sleep(.5)
    assert window, 'Firefox window did not appear'
    # An initial window can disappear during Firefox's startup restart.
    time.sleep(5)
    window=xdo('search','--onlyvisible','--class','firefox').splitlines()[-1]
    # A private window keeps this diagnostic out of the user's browsing history.
    xdo('windowactivate','--sync',window)
    xdo('key','ctrl+shift+p')
    time.sleep(3)
    window=xdo('search','--onlyvisible','--class','firefox').splitlines()[-1]
    xdo('windowactivate','--sync',window)
    html=b'''<!doctype html><title>Audio diagnostic</title><button autofocus style="position:fixed;inset:0;width:100%;height:100%">Play diagnostic tone</button><script>let started=false;function play(){if(started)return;started=true;const c=new AudioContext();const o=c.createOscillator();o.frequency.value=440;o.connect(c.destination);o.start();}document.addEventListener('click',play);document.addEventListener('keydown',play);</script>'''
    filename='/proc/'+str(pid)+'/root/tmp/csquest-audio-diagnostic.html'
    subprocess.run(['sudo','tee',filename],input=html,stdout=subprocess.DEVNULL,check=True)
    xdo('key','ctrl+l');xdo('type','--clearmodifiers','file:///tmp/csquest-audio-diagnostic.html');xdo('key','Return')
    for _ in range(40):
        try:
            diagnostic=xdo('search','--onlyvisible','--name','Audio diagnostic').splitlines()
            if diagnostic:
                xdo('windowactivate','--sync',diagnostic[-1]);break
        except subprocess.CalledProcessError:
            pass
        time.sleep(.5)
    else:
        raise AssertionError('Diagnostic page did not finish loading')
    xdo('mousemove','100','250');xdo('click','1');xdo('key','space')
    time.sleep(1)
    # Headers and the internal audio token are intentionally never printed.
    request_audio=urllib.request.Request('http://127.0.0.1:'+str(details['audioPort'])+'/audio',headers={'Authorization':'Bearer '+details['audioToken']})
    with urllib.request.urlopen(request_audio,timeout=5) as response:
        raw=response.read(48000*4)
    samples=array.array('h',raw)
    if os.sys.byteorder!='little':samples.byteswap()
    left=samples[::2]
    rms=math.sqrt(sum(n*n for n in left)/max(1,len(left)))
    assert rms>100,'Firefox produced no audible signal'
    crosses=sum(1 for a,b in zip(left,left[1:]) if a<=0<b)
    frequency=crosses/(len(left)/48000)
    assert 400<frequency<500, 'Unexpected diagnostic tone frequency'
    broker('/metrics',{'active':0,'rps':0,'peak':0,'policy':{'reserveGB':2,'busyGB':4,'maxGB':0,'idleGraceSeconds':10}})
    for _ in range(4):
        time.sleep(4)
        broker('/metrics',{'active':0,'rps':0,'peak':0})
    idle=request('inspect')['memory']
    assert idle['max']>4*1024**3, 'Idle cap did not increase'
    broker('/metrics',{'active':2,'rps':2,'peak':3})
    time.sleep(6)
    busy=request('inspect')['memory']
    assert busy['target']==4*1024**3 and busy['max']==4*1024**3, 'Busy cap did not decrease'
    request('stop')
    stopped = True
    for _ in range(30):
        active=subprocess.run(['systemctl','is-active','--quiet',unit]).returncode==0
        if not active:
            break
        time.sleep(.5)
    assert not active, 'Stopping Firefox left its supervised session running'
    print(json.dumps({'audioBytes':len(raw),'rms':round(rms),'frequencyHz':round(frequency),
        'idleCapGB':round(idle['max']/1e9,2),'busyCapGB':round(busy['max']/1e9,2),'sessionCleanup':'verified'}))
finally:
    if session:
        try:
            if not stopped:request('stop')
        finally:broker('/metrics',{'active':1,'rps':1,'peak':1,'policy':{'reserveGB':2,'busyGB':4,'maxGB':0,'idleGraceSeconds':60}})
