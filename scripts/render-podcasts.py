"""Render section conversations with two local Kokoro voices; safe to resume."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import sys
import time
import textwrap
from fractions import Fraction

ROOT = Path(__file__).resolve().parent.parent
TOOLS = ROOT / 'tooling' / 'podcast'
OUT = ROOT / 'data' / 'podcasts'
sys.path.insert(0, str(ROOT / 'scripts'))
from podcast_speech import speakable, validate_plan, SPEECH_VERSION


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + f'.{os.getpid()}.tmp')
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding='utf-8')
    # Readers, antivirus and OneDrive can briefly hold a Windows rename lock.
    # A progress display must not discard hours of otherwise valid speech.
    for attempt in range(12):
        try:
            temporary.replace(path)
            return True
        except PermissionError:
            if attempt < 11:
                time.sleep(min(.05 * 2**attempt, .5))
                continue
            if path == ROOT / 'runtime' / 'podcast-render.json':
                print('Progress file is temporarily locked; audio generation continues.', flush=True)
                try:
                    temporary.unlink(missing_ok=True)
                except PermissionError:
                    pass
                return False
            raise


def legacy_speakable(text, subject=None):
    text=re.sub(r'\b0x([0-9a-fA-F]+)\b',lambda m:'hexadecimal '+' '.join(m[1].upper()),text)
    text=re.sub(r'\b(binary(?: word| string| digits)?|bit pattern)\s+([01]{2,})\b',lambda m:m[1]+' '+' '.join(m[2]),text,flags=re.I)
    text=re.sub(r'\binstruction ([01]{2,}) ([01]{2,})\b',lambda m:'instruction with bit groups '+' '.join(m[1])+' then '+' '.join(m[2]),text,flags=re.I)
    acronyms = {'DBMS':'D B M S', 'SQL':'sequel', 'CPU':'C P U', 'ALU':'A L U', 'RAM':'ram', 'ROM':'rom', 'IEEE':'I triple E', 'TCP':'T C P', 'UDP':'U D P', 'IP':'I P', 'CIDR':'cider', 'CRC':'C R C', 'FIFO':'first in first out', 'LRU':'least recently used', 'TLB':'T L B', 'DFA':'D F A', 'NFA':'N F A', 'AVL':'A V L', 'BST':'B S T', 'BCNF':'B C N F', '3NF':'third normal form', '2NF':'second normal form', '1NF':'first normal form', 'DNS':'D N S', 'HTTP':'H T T P', 'HTTPS':'H T T P S', 'CSQuest':'C S Quest', 'COA':'computer organization and architecture', 'GHz':'gigahertz', 'MHz':'megahertz', 'KiB':'kibibytes', 'MiB':'mebibytes', 'GATE':'gate', 'XP':'experience points'}
    for key, value in sorted(acronyms.items(), key=lambda item: -len(item[0])):
        text = re.sub(r'\b' + re.escape(key) + r'\b', value, text)
    text = re.sub(r'O\(([^)]+)\)', r'big O of \1', text)
    text = re.sub(r'([A-Za-z0-9]+)\^([A-Za-z0-9]+)', r'\1 bitwise exclusive or \2' if subject=='c' else r'\1 to the power of \2', text)
    for symbol,word in [('<=',' at most '),('>=',' at least '),('!=',' is not equal to '),('==',' equals '),('&&',' logical and '),('||',' logical or ')]:
        text=text.replace(symbol,word)
    for symbol, word in {'→':' determines ', '⇒':' implies ', '≤':' at most ', '≥':' at least ', '≠':' is not equal to ', '×':' times ', '÷':' divided by ', '⊕':' exclusive or ', '∅':' the empty set ', '∈':' belongs to ', '∞':' infinity ', '²':' squared ', '³':' cubed ', '⁺':' plus ', '−':' minus ', '&':' and '}.items():
        text = text.replace(symbol, word)
    text = text.replace('`', '').replace('_', ' ').replace('=', ' equals ').replace('<',' less than ').replace('>',' greater than ')
    return re.sub(r'\s+', ' ', text).strip()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--subject')
    parser.add_argument('--exclude-subject', action='append', default=[])
    parser.add_argument('--unit', type=int)
    parser.add_argument('--device', choices=['cuda', 'cpu'], default='cuda')
    parser.add_argument('--precision', choices=['fp16','fp32'], default='fp32')
    parser.add_argument('--limit', type=int)
    parser.add_argument('--speech-check', action='store_true', help='Render a short two-voice notation diagnostic before a new subject.')
    args = parser.parse_args()
    import numpy as np
    import av
    import onnxruntime as rt
    from kokoro_onnx import Kokoro
    handles = []
    if os.name == 'nt':
        directories = list((ROOT / 'tooling' / 'transcription' / 'python-packages' / 'nvidia').glob('*/bin'))
        directories += list((Path(sys.prefix) / 'Lib' / 'site-packages' / 'nvidia').glob('*/bin'))
        for directory in directories:
            handles.append(os.add_dll_directory(str(directory)))
            os.environ['PATH'] = str(directory) + os.pathsep + os.environ['PATH']
    options = rt.SessionOptions()
    options.intra_op_num_threads = 3
    options.inter_op_num_threads = 1
    providers = ['CPUExecutionProvider']
    model = TOOLS / 'models' / (('kokoro-v1.0.fp16-gpu.onnx' if args.precision=='fp16' else 'kokoro-v1.0.onnx') if args.device == 'cuda' else 'kokoro-v1.0.int8.onnx')
    if args.device == 'cuda':
        providers = [('CUDAExecutionProvider', {'gpu_mem_limit': 1800 * 1024**2, 'cudnn_conv_algo_search':'HEURISTIC', 'cudnn_conv_use_max_workspace':'0'}), 'CPUExecutionProvider']
    raw = rt.InferenceSession(str(model), sess_options=options, providers=providers)
    if args.device == 'cuda' and 'CUDAExecutionProvider' not in raw.get_providers():
        raise RuntimeError('CUDA speech generation could not start; the existing transcription worker was not changed.')
    class CompatibleSession:
        # Kokoro 0.4.7 supplies an integer speed to some newer float-speed exports.
        def __getattr__(self, name):
            return getattr(raw, name)
        def run(self, outputs, inputs):
            for entry in raw.get_inputs():
                if entry.name in inputs and entry.type in ['tensor(float)','tensor(float16)']:
                    inputs[entry.name]=np.asarray(inputs[entry.name],dtype=np.float16 if entry.type=='tensor(float16)' else np.float32)
            return raw.run(outputs, inputs)
    tts = Kokoro.from_session(CompatibleSession(), str(TOOLS / 'models' / 'voices-v1.0.bin'))
    episodes = []
    for filename in sorted((ROOT / 'courses').glob('*/data/podcasts.json'), key=lambda p:json.loads((p.parents[1]/'course.json').read_text(encoding='utf-8')).get('order',100)):
        episodes.extend(json.loads(filename.read_text(encoding='utf-8'))['episodes'])
    if args.subject:
        episodes = [episode for episode in episodes if episode['subject'] == args.subject]
    episodes = [episode for episode in episodes if episode['subject'] not in args.exclude_subject]
    if args.unit is not None:
        episodes = [episode for episode in episodes if episode['unit'] == args.unit]
    if args.limit:
        episodes = episodes[:args.limit]
    if args.speech_check:
        # The display text includes notation; the voices receive the explicit
        # speech plan compiled by the same gate used for complete CD episodes.
        import importlib.util
        module_spec=importlib.util.spec_from_file_location('speech_preparer',ROOT/'scripts'/'prepare-podcast-speech.py')
        preparer=importlib.util.module_from_spec(module_spec)
        module_spec.loader.exec_module(preparer)
        examples=[('maya','The fraction a/b means a divided by b.'),('leo','The decimal 2.3 has a whole part of two and a fractional part of three tenths.'),('maya','Read 2^(n-1) as two to the power of the quantity n minus one.'),('leo','The binary pattern 1100 is read as four separate bits. Its unsigned decimal value is twelve.'),('maya','For -1011, the binary digit contributions are eight, zero, two and one. Their magnitude is eleven, so the signed value is minus eleven.'),('leo','In LL(1) parsing we compute FIRST and FOLLOW. The empty word is written as ε.'),('maya','A production S -> ( S ) S | ε includes literal parentheses and an empty alternative.'),('leo','The phi operation φ chooses the value for the incoming control-flow edge. One thousand bytes remains 1000 bytes, not a binary pattern.')]
        episode={'id':'cd:notation-check','subject':'cd','unit':'notation-check','speechVersion':SPEECH_VERSION,'hosts':[{'id':'maya','voice':'af_heart'},{'id':'leo','voice':'am_michael'}],'turns':[{'speaker':host,'text':value} for host,value in examples],'chapters':[{'id':'notation','title':'Notation pronunciation check','lecture':39,'startTurn':0,'endTurn':len(examples)-1}]}
        episode['hash']=hashlib.sha256(json.dumps(episode,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
        episode['_speechPlan']=preparer.prepare_episode(episode)
        episodes=[episode]
    cache = TOOLS / 'work' / 'turns'
    cache.mkdir(parents=True, exist_ok=True)
    status_file = ROOT / 'runtime' / 'podcast-render.json'
    done = 0
    for episode in episodes:
        plan_digest=None
        if episode.get('speechVersion',2)>2:
            plan=episode.get('_speechPlan')
            if plan is None:
                plan_source=json.loads((ROOT/'courses'/episode['subject']/'data'/'podcast-speech.json').read_text(encoding='utf-8'))
                plan=next((p for p in plan_source.get('episodes',[]) if p['id']==episode['id']),None)
                if plan is None:
                    raise ValueError('A versioned episode requires a validated speech plan before synthesis.')
            spoken_turns,plan_digest=validate_plan(episode,plan)
        else:
            # Existing audio and v2 scripts keep their old behavior until the
            # user explicitly upgrades those subjects in a later pass.
            spoken_turns=[legacy_speakable(turn['text'],episode['subject']) for turn in episode['turns']]
        directory = (ROOT/'runtime'/'podcast-samples' if args.speech_check else OUT) / episode['subject']
        directory.mkdir(parents=True, exist_ok=True)
        name = f"unit-{episode['unit']}-{episode['hash'][:12]}"
        audio_file, meta_file = directory / (name + '.mp3'), directory / (name + '.json')
        if audio_file.is_file() and meta_file.is_file():
            previous=json.loads(meta_file.read_text(encoding='utf-8'))
            if previous.get('hash')==episode['hash'] and (not plan_digest or previous.get('speechDigest')==plan_digest):
                done += 1
                continue
        start = time.time()
        timeline, sample_count = [], 0
        temporary = directory / (name + '.mp3.tmp')
        voices = {host['id']:host['voice'] for host in episode['hosts']}
        try:
            with av.open(str(temporary), mode='w', format='mp3') as container:
                stream = container.add_stream('libmp3lame', rate=24000)
                stream.bit_rate = 64000
                stream.layout = 'mono'
                for index, turn in enumerate(episode['turns']):
                    write_json(status_file, {'phase':'rendering', 'pid':os.getpid(), 'completed':done, 'total':len(episodes), 'episode':episode['id'], 'turn':index+1, 'turns':len(episode['turns']), 'device':args.device})
                    spoken = spoken_turns[index]
                    identity = voices[turn['speaker']] + '|' + spoken
                    key = hashlib.sha256((f"kokoro-v1.0-speech-v{episode.get('speechVersion',2)}|" + identity if plan_digest else 'kokoro-v1.0-split-v1|' + identity).encode()).hexdigest()
                    part = cache / (key + '.npy')
                    # All exports use the same trained voices and chunking. Reuse decoded
                    # speech when switching numerical precision to suit the local GPU.
                    for prefix in ['kokoro-v1.0-speech-v3|','kokoro-v1.0-split-v1|','kokoro-v1.0-split-v1|kokoro-v1.0.fp16-gpu.onnx|','kokoro-v1.0-split-v1|kokoro-v1.0.onnx|']:
                        candidate=cache/(hashlib.sha256((prefix+identity).encode()).hexdigest()+'.npy')
                        if not part.exists() and candidate.exists():
                            part=candidate
                    if part.exists():
                        samples = np.load(part).astype(np.float32)
                    else:
                        pieces=[]
                        # Short clauses keep peak GPU memory bounded alongside transcription.
                        for paragraph in re.split(r'(?<=[.!?])\s+',spoken):
                            for chunk in textwrap.wrap(paragraph, width=190, break_long_words=False, break_on_hyphens=False):
                                segment,rate=tts.create(chunk,voice=voices[turn['speaker']],speed=1.0,lang='en-us')
                                pieces.extend([segment,np.zeros(1800,dtype=np.float32)])
                        samples=np.concatenate(pieces)
                        if rate != 24000 or len(samples) < 2400 or not np.isfinite(samples).all() or float(np.max(np.abs(samples))) < .001:
                            raise RuntimeError(f"Empty or invalid speech: {episode['id']} turn {index}")
                        np.save(part, samples.astype(np.float16))
                    timeline.append({'index':index, 'speaker':turn['speaker'], 'start':sample_count/24000, 'end':(sample_count+len(samples))/24000})
                    padded = np.concatenate([samples, np.zeros(6000, dtype=np.float32)])
                    frame = av.AudioFrame.from_ndarray(padded.reshape(1,-1), format='flt', layout='mono')
                    frame.sample_rate = 24000
                    frame.pts = sample_count
                    frame.time_base = Fraction(1,24000)
                    for packet in stream.encode(frame):
                        container.mux(packet)
                    sample_count += len(padded)
                    print(f"{episode['id']} turn {index+1}/{len(episode['turns'])}: {sample_count/24000:.1f}s audio", flush=True)
                for packet in stream.encode(None):
                    container.mux(packet)
            temporary.replace(audio_file)
            chapters = [{**chapter, 'start':timeline[chapter['startTurn']]['start'], 'end':timeline[chapter['endTurn']]['end']} for chapter in episode['chapters']]
            write_json(meta_file, {'version':1, 'hash':episode['hash'], 'file':audio_file.name, 'duration':sample_count/24000, 'turns':timeline, 'chapters':chapters, 'model':'Kokoro-82M-v1.0', 'precision':args.precision, 'voices':voices, 'synthetic':True, **({'speechVersion':episode['speechVersion'],'speechDigest':plan_digest} if plan_digest else {})})
            done += 1
            print(f"DONE {episode['id']}: {sample_count/24000:.1f}s in {time.time()-start:.1f}s", flush=True)
        except Exception as error:
            write_json(status_file, {'phase':'failed', 'pid':os.getpid(), 'completed':done, 'total':len(episodes), 'episode':episode['id'], 'error':str(error)})
            raise
    write_json(status_file, {'phase':'complete', 'completed':done, 'total':len(episodes)})


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    main()
