"""Verify current scripts, speech digests and audio timelines; optionally package a release."""
import argparse
import hashlib
import io
import json
from pathlib import Path
import tarfile
from podcast_speech import validate_plan

ROOT=Path(__file__).resolve().parents[1]


def audit(subjects=None,decode=False):
    ready=[];pending=[];files=[]
    for source in sorted((ROOT/'courses').glob('*/data/podcasts.json')):
        subject=source.parents[1].name
        if subjects and subject not in subjects:continue
        plans=json.loads(source.with_name('podcast-speech.json').read_text(encoding='utf-8'))['episodes']
        for episode in json.loads(source.read_text(encoding='utf-8'))['episodes']:
            plan=next(p for p in plans if p['id']==episode['id'])
            _,digest=validate_plan(episode,plan)
            stem=ROOT/'data/podcasts'/subject/f"unit-{episode['unit']}-{episode['hash'][:12]}"
            media=stem.with_suffix('.mp3');timeline=stem.with_suffix('.json')
            if not media.is_file() or not timeline.is_file():pending.append(episode['id']);continue
            meta=json.loads(timeline.read_text(encoding='utf-8'))
            if meta.get('speechDigest')!=digest:pending.append(episode['id']);continue
            assert meta['hash']==episode['hash'] and meta['speechVersion']==episode['speechVersion'],episode['id']
            assert len(meta['turns'])==len(episode['turns']),episode['id']
            previous=0
            for i,turn in enumerate(meta['turns']):
                assert turn['index']==i and turn['speaker']==episode['turns'][i]['speaker'],episode['id']
                assert previous<=turn['start']<turn['end']<=meta['duration'],episode['id']
                previous=turn['end']
            assert len(meta['chapters'])==len(episode['chapters']),episode['id']
            for chapter,authored in zip(meta['chapters'],episode['chapters']):
                assert chapter['start']==meta['turns'][authored['startTurn']]['start'],episode['id']
                assert chapter['end']==meta['turns'][authored['endTurn']]['end'],episode['id']
            if decode:
                import av
                import numpy as np
                frames=0;energy=0;duration=0
                with av.open(str(media)) as container:
                    for frame in container.decode(audio=0):
                        values=frame.to_ndarray();assert np.isfinite(values).all(),episode['id']
                        energy+=float(np.square(values.astype(np.float32)).sum());frames+=values.size
                        duration+=frame.samples/frame.sample_rate
                assert frames and energy>0 and abs(duration-meta['duration'])<.2,(episode['id'],duration,meta['duration'])
            ready.append({'id':episode['id'],'duration':meta['duration'],'speechDigest':digest})
            for path in [media,timeline]:
                files.append({'path':path.relative_to(ROOT/'data/podcasts').as_posix(),'bytes':path.stat().st_size,'sha256':hashlib.sha256(path.read_bytes()).hexdigest()})
    return {'episodes':ready,'pending':pending,'files':files,'decoded':decode}


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--subject',action='append')
    parser.add_argument('--decode',action='store_true')
    parser.add_argument('--allow-pending',action='store_true')
    parser.add_argument('--archive',type=Path)
    parser.add_argument('--report',type=Path,default=ROOT/'runtime/podcast-media-release.json')
    args=parser.parse_args();report=audit(args.subject,args.decode)
    args.report.write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8')
    if report['pending'] and not args.allow_pending:raise ValueError(f"{len(report['pending'])} current episodes are not yet ready")
    if args.archive:
        if report['pending']:raise ValueError('A media release must be complete before packaging')
        with tarfile.open(args.archive,'w') as archive:
            for item in report['files']:archive.add(ROOT/'data/podcasts'/item['path'],arcname=item['path'],recursive=False)
            contents=json.dumps(report,indent=2).encode();entry=tarfile.TarInfo('upload-manifest.json');entry.size=len(contents)
            archive.addfile(entry,io.BytesIO(contents))
    print(json.dumps({'ready':len(report['episodes']),'pending':len(report['pending']),'minutes':round(sum(e['duration'] for e in report['episodes'])/60,1),'decoded':args.decode,'bytes':sum(f['bytes'] for f in report['files'])}))


if __name__=='__main__':main()
