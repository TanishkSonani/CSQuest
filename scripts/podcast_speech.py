"""Versioned speech compilation; preserve already generated CD v3 audio."""
import hashlib
import json
from podcast_speech_v3 import number_words, integer_words, DIGITS, notation_issues
from podcast_speech_v3 import speakable as frozen_v3_speech, validate_plan as validate_v3_plan
from podcast_notation_v4 import speakable as speech_v4

SPEECH_VERSION = 4
SUPPORTED_SPEECH_VERSIONS = (3, 4)


def speakable(text, subject=None, hints=None, version=None):
    version = (3 if subject == 'cd' else SPEECH_VERSION) if version is None else version
    if version == 3:
        return frozen_v3_speech(text, subject, hints)
    if version != 4:
        raise ValueError('Unsupported speech compiler version.')
    return speech_v4(text, subject, hints)


def validate_plan(episode, plan):
    version = episode.get('speechVersion')
    if version == 3:
        return validate_v3_plan(episode, plan)
    if version != 4 or plan.get('speechVersion') != version or plan.get('scriptHash') != episode['hash']:
        raise ValueError('The speech plan does not match the script/version.')
    turns = plan.get('turns', [])
    if len(turns) != len(episode['turns']):
        raise ValueError('The speech plan has the wrong turn count.')
    for i, (source, prepared) in enumerate(zip(episode['turns'], turns)):
        if prepared.get('index') != i or prepared.get('text') != source['text'] or prepared.get('speaker') != source['speaker']:
            raise ValueError('The speech plan contains stale dialogue text.')
        normalized = speakable(source['text'], episode['subject'], prepared.get('hints'), version=version)
        if normalized != prepared.get('spoken') or notation_issues(source['text'], normalized):
            raise ValueError('The speech plan is stale or contains unsupported notation.')
    digest = hashlib.sha256(json.dumps(turns, ensure_ascii=False, sort_keys=True).encode()).hexdigest()
    if digest != plan.get('digest'):
        raise ValueError('The speech plan digest is invalid.')
    return [turn['spoken'] for turn in turns], digest
