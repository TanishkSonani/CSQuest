"""Fixed session programs, executed as dedicated non-root systemd users."""
import os, signal, subprocess, sys, time
kind, session_id, port = sys.argv[1:]
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
    '-desktop', 'CSQuest Browser', '-FrameRate', '30', '-AlwaysShared'], env=environment))
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
