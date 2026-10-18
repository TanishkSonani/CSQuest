"""Install a checksummed media archive before publishing its matching course catalog.

Run with sudo on the VM: python3 install-podcast-media.py /path/to/archive.tar
Existing recordings are retained so the current release continues serving them.
"""
import argparse
import hashlib
import json
import os
from pathlib import Path
import pwd
import re
import shutil
import tarfile
import tempfile


def install(archive_path,target):
    if os.geteuid()!=0:raise PermissionError('Run as root to set the application file owner')
    if target.resolve()!=Path('/srv/csquest-data/podcasts'):raise ValueError('Choose the durable podcast directory')
    user=pwd.getpwnam('csquest');target.mkdir(mode=0o755,parents=True,exist_ok=True)
    with tempfile.TemporaryDirectory(prefix='podcast-release-',dir=target.parent) as stage:
        stage=Path(stage)
        with tarfile.open(archive_path) as archive:
            members=archive.getmembers();names=[m.name for m in members]
            if len(names)!=len(set(names)):raise ValueError('Duplicate archive entries')
            for member in members:
                if not member.isfile() or not (member.name=='upload-manifest.json' or re.fullmatch(r'[a-z0-9-]+/unit-\d+-[a-f0-9]{12}\.(mp3|json)',member.name)):raise ValueError('Unexpected archive entry')
                destination=stage/member.name
                if not destination.resolve().is_relative_to(stage.resolve()):raise ValueError('Invalid archive path')
                destination.parent.mkdir(mode=0o755,parents=True,exist_ok=True)
                with archive.extractfile(member) as source,destination.open('wb') as output:shutil.copyfileobj(source,output)
        manifest=json.loads((stage/'upload-manifest.json').read_text())
        if manifest['pending'] or not manifest['decoded']:raise ValueError('The release must pass complete audio decoding')
        if set(names)!={f['path'] for f in manifest['files']}|{'upload-manifest.json'}:raise ValueError('Archive manifest does not match its contents')
        for item in manifest['files']:
            path=stage/item['path']
            if path.stat().st_size!=item['bytes'] or hashlib.sha256(path.read_bytes()).hexdigest()!=item['sha256']:raise ValueError('Media checksum mismatch: '+item['path'])
        # Install complete MP3s before readiness metadata. Existing release hashes stay usable.
        for item in sorted(manifest['files'],key=lambda f:not f['path'].endswith('.mp3')):
            destination=target/item['path'];destination.parent.mkdir(mode=0o755,exist_ok=True)
            if not destination.parent.resolve().is_relative_to(target.resolve()):raise ValueError('Destination directory escapes the media root')
            os.chown(destination.parent,user.pw_uid,user.pw_gid)
            source=stage/item['path'];source.chmod(0o644);os.chown(source,user.pw_uid,user.pw_gid);source.replace(destination)
        print(json.dumps({'installed':len(manifest['episodes']),'files':len(manifest['files']),'checksums':'passed'}))


if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('archive',type=Path)
    args=parser.parse_args();install(args.archive,Path('/srv/csquest-data/podcasts'))
