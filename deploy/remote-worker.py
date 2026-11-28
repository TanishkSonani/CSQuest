"""Fixed session programs, executed as dedicated non-root systemd users."""
import os, signal, subprocess, sys, time, threading, hmac, ctypes
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
if len(sys.argv) == 2 and sys.argv[1] == 'browser-supervisor':
    # Firefox can restart itself during startup and let its original process
    # exit successfully. Keep the display and D-Bus alive for the replacement.
    if ctypes.CDLL(None, use_errno=True).prctl(36, 1, 0, 0, 0) != 0:
        raise SystemExit('Cannot supervise browser restarts')
    browser = subprocess.Popen(['/opt/csquest-remote/firefox/firefox',
        '--no-remote', '--new-instance', '--profile', os.environ['HOME'] + '/profile', 'about:blank'])
    status = 0
    while True:
        try:
            pid, child_status = os.wait()
            if pid == browser.pid:
                status = os.waitstatus_to_exitcode(child_status)
                browser.returncode = status
        except InterruptedError:
            continue
        except ChildProcessError:
            break
    raise SystemExit(max(0, status))
kind, session_id, port = sys.argv[1:4]
audio_port = int(sys.argv[4]) if len(sys.argv)>4 else 0
if kind not in ('firefox', 'terminal') or not port.isdigit():
    raise SystemExit(1)
home = os.environ['HOME']
if kind == 'terminal':
    # Start in the real VM filesystem, rather than an apparently empty home.
    # Keep exercises persistent without overwriting anything the user created.
    practice = os.path.join(home, 'linux-practice')
    for directory in ('documents', 'scripts', 'notes'):
        os.makedirs(os.path.join(practice, directory), exist_ok=True)
    try:
        with open(os.path.join(practice, 'README.txt'), 'x') as guide:
            guide.write('Linux practice on your VM\n\n'
                'Try: pwd; ls /; cd ~/linux-practice; ls\n'
                'mkdir exercises\ncd exercises\n'
                'printf "Hello Linux\\n" > hello.txt\ncat hello.txt\n'
                'Use man ls, help cd, and Tab for completion.\n'
                'Your home persists between sessions. System directories are read-only.\n')
    except FileExistsError:
        pass
    os.chdir('/')
    os.execv('/usr/bin/ttyd', ['ttyd', '-i', '127.0.0.1', '-p', port,
        '-W', '-m', '1', '-o', '-b', '/api/remote/view/' + session_id + '/terminal',
        '-t', 'disableLeaveAlert=true', '-t', 'titleFixed=CSQuest VM Terminal',
        '/bin/bash', '--noprofile', '--rcfile', '/opt/csquest-remote/terminal.bashrc', '-i'])
display = ':' + str(int(port) + 100)
environment = dict(os.environ, DISPLAY=display, MOZ_ENABLE_WAYLAND='0', MOZ_DISABLE_AUTO_SAFE_MODE='1')
audio_token = environment.pop('CSQUEST_AUDIO_TOKEN', '')
try:
    with open('/run/csquest-remote/'+session_id+'/audio-token') as token_file:
        audio_token = token_file.read().strip()
except FileNotFoundError:
    pass
children = []
audio_server = None
audio_lock = threading.Lock()
audio_capture = None
def cleanup(*_):
    if audio_server:
        audio_server.server_close()
    for child in reversed(children):
        if child.poll() is None:
            child.terminate()
    raise SystemExit(0)
signal.signal(signal.SIGTERM, cleanup)
signal.signal(signal.SIGINT, cleanup)
if audio_port:
    os.makedirs('/tmp/csquest-pulse', mode=0o700, exist_ok=True)
    environment.update(PULSE_SERVER='unix:/tmp/csquest-pulse/native', PULSE_RUNTIME_PATH='/tmp/csquest-pulse')
    children.append(subprocess.Popen(['/usr/bin/pulseaudio', '-n', '--daemonize=no',
        '--exit-idle-time=-1', '--disallow-exit', '--disable-shm=yes', '--use-pid-file=no',
        '--file=/opt/csquest-remote/audio.pa'], env=environment))
    for _ in range(60):
        if os.path.exists('/tmp/csquest-pulse/native'):
            break
        if children[-1].poll() is not None:
            raise SystemExit('Audio service did not start')
        time.sleep(.1)
    else:
        raise SystemExit('Audio service timed out')

    class AudioHandler(BaseHTTPRequestHandler):
        protocol_version = 'HTTP/1.1'
        def log_message(self, *_):
            pass
        def do_GET(self):
            global audio_capture
            if self.path != '/audio' or not audio_token or not hmac.compare_digest(self.headers.get('Authorization',''), 'Bearer '+audio_token):
                self.send_error(403)
                return
            with audio_lock:
                if audio_capture and audio_capture.poll() is None:
                    self.send_error(409)
                    return
                capture = subprocess.Popen(['/usr/bin/parec', '--device=csquest_audio.monitor',
                    '--format=s16le', '--rate=48000', '--channels=2', '--latency-msec=40'],
                    stdout=subprocess.PIPE, env=environment, bufsize=0)
                audio_capture = capture
                children.append(capture)
            self.send_response(200)
            self.send_header('Content-Type','application/octet-stream')
            self.send_header('Cache-Control','no-store')
            self.send_header('Connection','close')
            self.end_headers()
            try:
                while capture.poll() is None:
                    data = capture.stdout.read(4096)
                    if not data:
                        break
                    self.wfile.write(data)
                    self.wfile.flush()
            except (BrokenPipeError, ConnectionResetError, OSError):
                pass
            finally:
                capture.terminate()
                try:
                    capture.wait(timeout=2)
                except subprocess.TimeoutExpired:
                    capture.kill()
                    capture.wait()
                capture.stdout.close()
                with audio_lock:
                    if audio_capture is capture:
                        audio_capture = None
                    if capture in children:
                        children.remove(capture)
                self.close_connection = True
    audio_server = ThreadingHTTPServer(('127.0.0.1', audio_port), AudioHandler)
    audio_server.daemon_threads = True
    threading.Thread(target=audio_server.serve_forever, daemon=True).start()
children.append(subprocess.Popen(['/usr/bin/Xtigervnc', display,
    '-rfbport', port, '-localhost', 'yes', '-SecurityTypes', 'VncAuth',
    '-PasswordFile', '/run/csquest-remote/' + session_id + '/password',
    '-geometry', '1280x800', '-depth', '24', '-nolisten', 'tcp',
    '-desktop', 'CSQuest Browser', '-FrameRate', '30', '-AlwaysShared'], env=environment))
vnc = children[-1]
for _ in range(60):
    if os.path.exists('/tmp/.X11-unix/X' + display[1:]):
        break
    if vnc.poll() is not None:
        raise SystemExit(1)
    time.sleep(.1)
children.append(subprocess.Popen(['/usr/bin/openbox'], env=environment))
browser = subprocess.Popen(['/usr/bin/dbus-run-session', '--', '/usr/bin/python3',
    '/opt/csquest-remote/worker.py', 'browser-supervisor'], env=environment)
children.append(browser)
while all(child.poll() is None for child in (vnc, browser)):
    time.sleep(.5)
print('Remote browser child exit:', browser.poll(), 'display exit:', vnc.poll(), flush=True)
cleanup()
