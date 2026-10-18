"""Deterministic spoken notation. Kept separate from synthesis and display text.

This handles a deliberately bounded arithmetic notation, not arbitrary LaTeX.
Ambiguous binary numerals need a local binary label or explicit chapter hints;
decimal quantities such as 1000 bytes must not become bit strings.
"""
import re
import hashlib
import json
import unicodedata

SPEECH_VERSION = 3
DIGITS = 'zero one two three four five six seven eight nine'.split()
SMALL = ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
         'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen',
         'eighteen','nineteen']
TENS = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']


def integer_words(value):
    n = int(value)
    if n < 0:
        return 'minus ' + integer_words(-n)
    if n < 20:
        return SMALL[n]
    if n < 100:
        return TENS[n // 10] + (' ' + SMALL[n % 10] if n % 10 else '')
    if n < 1000:
        return SMALL[n // 100] + ' hundred' + (' ' + integer_words(n % 100) if n % 100 else '')
    for size, name in [(10**12,'trillion'),(10**9,'billion'),(10**6,'million'),(1000,'thousand')]:
        if n >= size:
            if n >= 10**15:
                return ' '.join(DIGITS[int(c)] for c in str(n))
            return integer_words(n // size) + ' ' + name + (' ' + integer_words(n % size) if n % size else '')


def number_words(value):
    if re.fullmatch(r'\d+(?:\.\d+)?[eE][+-]?\d+', value):
        a, b = re.split('[eE]', value)
        return number_words(a) + ' times ten to the power of ' + integer_words(int(b))
    if '.' in value:
        whole, fraction = value.split('.', 1)
        return integer_words(whole) + ' point ' + ' '.join(DIGITS[int(c)] for c in fraction)
    if len(value) > 1 and value[0] == '0':
        return ' '.join(DIGITS[int(c)] for c in value)
    return integer_words(value)


TOKEN = re.compile(r"\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|[A-Za-z][A-Za-z0-9_'′]*|[()+*/^\-]")


def arithmetic(text, subject):
    """Parse contiguous arithmetic spans, retaining grouping and precedence."""
    tokens = list(TOKEN.finditer(text))
    replacements = []
    i = 0
    while i < len(tokens):
        begin = i

        def token(at):
            return tokens[at][0] if at < len(tokens) else None

        def adjacent(at):
            return at == begin or not text[tokens[at-1].end():tokens[at].start()].strip()

        def parse(at, precedence=0):
            if at >= len(tokens) or not adjacent(at):
                raise ValueError('missing operand')
            t = token(at)
            if t == '-':
                child, at = parse(at+1, 30)
                left = ('negative', child)
            elif t == '(':
                child, at = parse(at+1)
                if token(at) != ')' or not adjacent(at):
                    raise ValueError('unclosed group')
                left, at = ('group', child), at+1
            elif t and re.match(r'[A-Za-z0-9]', t):
                left, at = ('atom', t), at+1
            else:
                raise ValueError('not an atom')
            while at < len(tokens) and adjacent(at):
                op = token(at)
                priority = {'+':10, '-':10, '*':20, '/':20, '^':30}.get(op, -1)
                if priority < precedence:
                    break
                right, stop = parse(at+1, priority if op == '^' else priority+1)
                left, at = ('binary', op, left, right), stop
            return left, at

        def describe(node, root=False):
            if node[0] == 'atom':
                return number_words(node[1]) if re.fullmatch(r'\d+(?:\.\d+)?(?:[eE][+-]?\d+)?', node[1]) else node[1]
            if node[0] == 'group':
                return 'open parenthesis ' + describe(node[1]) + ' close parenthesis'
            if node[0] == 'negative':
                return 'minus ' + describe(node[1])
            right='the quantity '+describe(node[3][1]) if root and node[1]=='^' and node[3][0]=='group' and subject!='c' else describe(node[3])
            return describe(node[2]) + ' ' + {'+':'plus','-':'minus','*':'times','/':'divided by','^':'bitwise exclusive or' if subject == 'c' else 'to the power of'}[node[1]] + ' ' + right

        try:
            tree, stop = parse(i)
            raw = text[tokens[i].start():tokens[stop-1].end()]
            # Hyphenated English and acronyms separated by / are not fractions.
            hyphen_word = re.fullmatch(r'[A-Za-z]{2,}(?:-[A-Za-z]{2,})+', raw)
            acronym_slash = re.fullmatch(r'[A-Z]{2,}/[A-Z]{2,}', raw)
            is_math = tree[0] in ['binary','negative'] and not hyphen_word and not acronym_slash
            if is_math:
                replacements.append((tokens[i].start(),tokens[stop-1].end(),describe(tree,root=True)))
                i = stop
            elif hyphen_word or acronym_slash:
                i = stop
            else:
                i += 1
        except (ValueError, RecursionError):
            i += 1
    for start, end, spoken in reversed(replacements):
        text = text[:start] + spoken + text[end:]
    return text


def speakable(text, subject=None, hints=None):
    hints = hints or {}
    saved = []

    def protect(value):
        # Private-use placeholders contain no digits for the number normalizer.
        marker = chr(0xE000 + len(saved))
        saved.append(value)
        return marker

    text = str(text)
    if subject in ['cd','toc']:
        text = text.replace('$',' the end marker ')
    # Protect actual URLs. / in an address is not mathematical division.
    text = re.sub(r'https?://[^\s]+',lambda m:protect(m[0]),text)
    text = re.sub(r'\b0x([0-9a-fA-F]+)\b',lambda m:protect('hexadecimal '+' '.join(DIGITS[int(c)] if c.isdigit() else c.upper() for c in m[1])),text)
    text = text.replace('C++','C plus plus')
    for original,spoken in [('input/output','input and output'),('shift/reduce','shift or reduce'),('reduce/reduce','reduce or reduce'),('read/write','read or write'),('matched/unmatched','matched and unmatched')]:
        text = text.replace(original,spoken)
    text = re.sub(r'\bempty word\s*\(\s*[εϵ]\s*\)','empty word',text,flags=re.I)
    text = re.sub(r'\ban\s+[εϵ]\b','an empty',text)
    text = re.sub(r'\b([A-Z]{2,})/([A-Z]{2,})\b',r'\1 or \2',text)
    text = re.sub(r'\b(LALR|SLR|CLR|LL|LR)\s*\((\d+)\)',lambda m:protect(' '.join(m[1])+' '+number_words(m[2])),text)
    text = re.sub(r'\b(FIRST|FOLLOW)\(([^()]+)\)',r'\1 of \2',text)
    text = re.sub(r'\b(instruction)\s+([01]{2,})\s+([01]{2,})\b',lambda m:protect('instruction with bit groups '+' '.join(DIGITS[int(c)] for c in m[2])+' then '+' '.join(DIGITS[int(c)] for c in m[3])),text,flags=re.I)
    binary_hints = set(hints.get('binaryLiterals', []))
    def bits(m):
        literal = m[0]
        before, after = text[max(0,m.start()-100):m.start()], text[m.end():m.end()+35]
        explicit = re.search(r'(?:binary(?:\s+(?:word|string|digits|pattern|representation|number))?|bit\s+(?:pattern|string|sequence))\s*(?:is|of|:|=)?\s*$',before,re.I)
        # Chapter hints apply only to selected literals, not every 0/1-looking count.
        quantity = re.match(r'\s*(?:bytes?|bits?|words?|pages?|seconds?|instructions?|times|items|records|steps)\b',after,re.I)
        if (explicit or literal in binary_hints) and not quantity:
            return protect(' '.join(DIGITS[int(c)] for c in literal))
        return literal
    text = re.sub(r'(?<![\w.])[01]{2,}(?!\w|\.\d)',bits,text)
    text = re.sub(r'-(?=[\uE000-\uF8FF])','minus ',text)
    text = re.sub(r'\^\{([^{}]+)\}',r'^(\1)',text)
    for mark, expansion in [('⁰','^(0)'),('¹','^(1)'),('²','^(2)'),('³','^(3)'),('ⁿ','^(n)'),('ᵏ','^(k)')]:
        text = text.replace(mark,expansion)
    for symbol, word in [('<=',' at most '),('>=',' at least '),('!=',' is not equal to '),('==',' equals '),('&&',' logical and '),('||',' logical or '),('->',' produces ' if subject=='cd' else ' maps to '),('→',' produces ' if subject=='cd' else ' maps to '),('⇒',' derives '),('≤',' at most '),('≥',' at least '),('≠',' is not equal to '),('×',' * '),('÷',' / '),('−','-'),('⊕',' exclusive or '),('∪',' union '),('∩',' intersection '),('∅',' the empty set '),('∈',' belongs to '),('∞',' infinity '),('ε',' the empty word '),('ϵ',' the empty word '),('φ',' phi '),('δ',' delta '),('Σ',' sigma '),('α',' alpha '),('β',' beta '),('γ',' gamma '),('λ',' lambda '),('∧',' logical and '),('∨',' logical or '),('¬',' not '),('•',' dot ')]:
        text = text.replace(symbol,word)
    text = re.sub(r'\b([A-Za-z])([′\']+)',lambda m:m[1]+' prime'*len(m[2]),text)
    text = arithmetic(text,subject)
    acronyms = {'DBMS':'D B M S','SQL':'sequel','CPU':'C P U','ALU':'A L U','RAM':'ram','ROM':'rom','IEEE':'I triple E','TCP':'T C P','UDP':'U D P','IP':'I P','CIDR':'cider','CRC':'C R C','FIFO':'first in first out','LRU':'least recently used','TLB':'T L B','DFA':'D F A','NFA':'N F A','AVL':'A V L','BST':'B S T','BCNF':'B C N F','3NF':'third normal form','2NF':'second normal form','1NF':'first normal form','DNS':'D N S','HTTP':'H T T P','HTTPS':'H T T P S','CSQuest':'C S Quest','COA':'computer organization and architecture','TAC':'T A C','SSA':'S S A','CFG':'C F G','IR':'I R','LL':'L L','LR':'L R','SLR':'S L R','LALR':'L A L R','CLR':'C L R','GHz':'gigahertz','MHz':'megahertz','KiB':'kibibytes','MiB':'mebibytes','GATE':'gate','XP':'experience points'}
    for key,value in sorted(acronyms.items(),key=lambda row:-len(row[0])):
        text = re.sub(r'\b'+re.escape(key)+r'\b',value,text)
    text = re.sub(r'\bO\(([^)]+)\)',r'big O of \1',text)
    text = re.sub(r'\b([A-Za-z_]+)(\d+)\b',lambda m:m[1]+' '+number_words(m[2]),text)
    text = re.sub(r'(?<![\w.])\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(?!\w|\.\d)',lambda m:number_words(m[0]),text)
    for symbol,word in [('|',' or '),('=',' equals '),('<',' less than '),('>',' greater than '),('&',' and '),('%',' percent '),('+',' plus '),('*',' star '),('/',' slash '),('^',' caret '),('~',' approximately '),('…',' through ')]:
        text = text.replace(symbol,word)
    text = re.sub(r'(?<![A-Za-z])-|-(?![A-Za-z])',' minus ',text)
    text = text.replace('`','').replace('_',' ')
    # Remaining literal grammar parentheses must not silently disappear in TTS.
    text = re.sub(r'\(\s*([A-Z](?:\s+[A-Z])*)\s*\)',r' left parenthesis \1 right parenthesis ',text)
    for i,value in enumerate(saved):
        text = text.replace(chr(0xE000+i),value)
    return re.sub(r'\s+',' ',text).strip()


def notation_issues(text, spoken):
    """Conservative preflight; never silently drop unhandled mathematical marks."""
    issues=[]
    if re.search(r'[\u0370-\u03ff\u2070-\u209f\\^+*/=<>|∪∩∈∞∅→⇒≤≥≠⊕∧∨¬•]',spoken):
        issues.append('Unexpanded notation remains in speech text.')
    if any(unicodedata.category(c) in ['Sm','Sc','Sk'] for c in spoken):
        issues.append('An unexpanded mathematical or currency symbol remains in speech text.')
    if re.search(r'\d',spoken):
        issues.append('Unexpanded numeric notation remains in speech text.')
    if not spoken.strip():
        issues.append('Speech text is empty.')
    return issues


def validate_plan(episode, plan):
    if episode.get('speechVersion')!=SPEECH_VERSION:
        raise ValueError('This episode requires a different speech compiler version.')
    if plan.get('scriptHash')!=episode['hash'] or plan.get('speechVersion')!=SPEECH_VERSION:
        raise ValueError('The speech plan does not match this script/version; run prepare-podcast-speech.py.')
    turns=plan.get('turns',[])
    if len(turns)!=len(episode['turns']):
        raise ValueError('The speech plan has the wrong number of dialogue turns.')
    for i,(source,prepared) in enumerate(zip(episode['turns'],turns)):
        if prepared.get('index')!=i or prepared.get('text')!=source['text'] or prepared.get('speaker')!=source['speaker']:
            raise ValueError('The speech plan contains stale dialogue text.')
        normalized=speakable(source['text'],episode['subject'],prepared.get('hints'))
        if normalized!=prepared.get('spoken') or notation_issues(source['text'],normalized):
            raise ValueError('The speech plan is stale or contains unsupported notation.')
    digest=hashlib.sha256(json.dumps(turns,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
    if plan.get('digest')!=digest:
        raise ValueError('The speech plan digest is invalid.')
    return [turn['spoken'] for turn in turns],digest
