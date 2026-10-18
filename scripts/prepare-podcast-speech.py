"""Compile auditable, versioned speech text before conversation synthesis."""
import argparse
import hashlib
import json
from pathlib import Path
from podcast_speech import speakable, notation_issues, SPEECH_VERSION, SUPPORTED_SPEECH_VERSIONS
from podcast_notation_v4 import bits_words

ROOT=Path(__file__).resolve().parents[1]
EDITS=json.loads((ROOT/'config/podcast-pronunciation.json').read_text(encoding='utf-8'))['turns']


def prepare_episode(episode):
    import re
    turns=[]
    for index,turn in enumerate(episode['turns']):
        chapter=next(c for c in episode['chapters'] if c['startTurn']<=index<=c['endTurn'])
        hints={}
        edit=EDITS.get(f"{episode['id']}:{index}") if episode.get('speechVersion')==4 else None
        if edit:
            if turn['text'] not in [edit['source'],edit.get('text')]:raise ValueError('A reviewed pronunciation source changed.')
            spans=[]
            for value in edit.get('binary',[])+edit.get('digitNumerals',[]):
                pattern=r'(?<![\w.])'+re.escape(value)+r'(?!\w|\.\d)'
                hits=list(re.finditer(pattern,turn['text']))
                if not hits:raise ValueError(f"Missing reviewed literal {value} in {episode['id']}/{index}")
                for m in hits:spans.append({'start':m.start(),'end':m.end(),'text':m[0],'spoken':bits_words(value) if value in edit.get('binary',[]) else ' '.join(__import__('podcast_speech').DIGITS[int(c)] for c in value)})
            hints['spans']=spans
        # In the binary-position chapter, spell the literal input's digits.
        # Positions, weights, synthesized magnitudes and signed results stay decimal.
        if episode['subject']=='cd' and chapter.get('lecture')==39:
            hints['binaryLiterals']=sorted(set(re.findall(r'(?<![\w.])[01]{3,}(?!\w|\.\d)',turn['text'])))
        spoken=speakable(turn['text'],episode['subject'],hints,version=episode['speechVersion'])
        issues=notation_issues(turn['text'],spoken)
        if issues:
            raise ValueError(f"{episode['id']} turn {index}: {' '.join(issues)} Source: {turn['text']} Speech: {spoken}")
        turns.append({'index':index,'speaker':turn['speaker'],'text':turn['text'],'spoken':spoken,'hints':hints})
    digest=hashlib.sha256(json.dumps(turns,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
    return {'id':episode['id'],'scriptHash':episode['hash'],'speechVersion':episode['speechVersion'],'digest':digest,'turns':turns}


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--subject',required=True)
    args=parser.parse_args()
    if not args.subject.replace('-','').isalnum():
        parser.error('Choose a known subject identifier.')
    directory=ROOT/'courses'/args.subject/'data'
    source=json.loads((directory/'podcasts.json').read_text(encoding='utf-8'))
    if any(e.get('speechVersion') not in SUPPORTED_SPEECH_VERSIONS for e in source['episodes']):
        raise ValueError('Explicitly upgrade the subject script speech version before preparing replacement audio.')
    version=source['episodes'][0]['speechVersion']
    plan={'version':version,'episodes':[prepare_episode(ep) for ep in source['episodes']]}
    target=directory/'podcast-speech.json'
    temporary=target.with_suffix('.json.tmp')
    temporary.write_text(json.dumps(plan,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    temporary.replace(target)
    print(json.dumps({'subject':args.subject,'episodes':len(plan['episodes']),'turns':sum(len(e['turns']) for e in plan['episodes']),'speechVersion':version,'notationIssues':0}))


if __name__=='__main__':
    main()
