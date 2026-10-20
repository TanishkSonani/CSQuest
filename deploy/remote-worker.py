"""Fixed session programs, executed as dedicated non-root systemd users."""
import os, signal, subprocess, sys, time
kind, session_id, port = sys.argv[1:]
if kind not in ('firefox', 'terminal') or not port.isdigit():
    raise SystemExit(1)
home = os.environ['HOME']
if kind == 'terminal':
    os.execv('/usr/bin/ttyd', ['ttyd', '-i', '127.0.0.1', '-p', port,
        '-W', '-m', '1', '-o', '-b', '/api/remote/view/' + session_id + '/terminal',
        '-t', 'disableLeaveAlert=true', '-t', 'titleFixed=CSQuest VM Terminal',
        '/bin/bash', '--noprofile', '--norc', '-i'])
display = ':' + str(int(port) + 100)
environment = dict(os.environ, DISPLAY=display, MOZ_ENABLE_WAYLAND='0')
children = []
def cleanup(*_):
    for child in reversed(children):
        if child.poll() is None:
            child.terminate()
    raise SystemExit(0)
signal.signal(signal.SIGTERM, cleanup)
signal.signal(signal.SIGINT, cleanup)
children.append(subprocess.Popen(['/usr/bin/Xtigervnc', display,
    '-rfbport', port, '-localhost', 'yes', '-SecurityTypes', 'VncAuth',
    '-PasswordFile', '/run/csquest-remote/' + session_id + '/password',
    '-geometry', '1280x800', '-depth', '24', '-nolisten', 'tcp',
    '-desktop', 'CSQuest Firefox', '-AlwaysShared'], env=environment))
for _ in range(60):
    if os.path.exists('/tmp/.X11-unix/X' + display[1:]):
        break
    if children[0].poll() is not None:
        raise SystemExit(1)
    time.sleep(.1)
children.append(subprocess.Popen(['/usr/bin/openbox'], env=environment))
browser = subprocess.Popen(['/usr/bin/dbus-run-session', '--', '/opt/csquest-remote/firefox/firefox',
    '--no-remote', '--new-instance', '--profile', home + '/profile', 'about:blank'], env=environment)
children.append(browser)
while all(child.poll() is None for child in (children[0], browser)):
    time.sleep(.5)
cleanup()
