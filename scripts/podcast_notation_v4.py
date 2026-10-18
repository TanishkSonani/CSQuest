"""Subject-aware notation front end. Display text is never executed.

Reviewed occurrence hints handle ambiguous literals. The frozen v3 compiler is
used after typed constructs are expanded, and remains available for existing CD.
"""
import re
from podcast_speech_v3 import speakable as base_speech, number_words, DIGITS


def bits_words(value):
    return ' '.join('point' if c=='.' else DIGITS[int(c)] for c in value)


def function_notation(text, protect):
    """Read balanced function arguments, including nested recurrence calls."""
    pattern=re.compile(r'\b(sqrt|ceil|floor|Theta|Omega|O|o|T|S|f|g)\(')
    labels={'sqrt':'the square root','ceil':'the ceiling','floor':'the floor','Theta':'theta','Omega':'omega','O':'big O','o':'little o'}
    while match:=pattern.search(text):
        depth=1;end=match.end()
        while end<len(text) and depth:
            depth+=(text[end]=='(')-(text[end]==')');end+=1
        if depth:break
        raw=text[match.end():end-1]
        inner=function_notation(raw,protect)
        spoken=labels.get(match[1],match[1])+' of the quantity '+base_speech(inner)+' end quantity'
        text=text[:match.start()]+protect(spoken)+text[end:]
    return text


def boolean_notation(text, protect):
    atom=r'(?:[A-Z](?:\d+|next)?|[01])'
    tokens=list(re.finditer(atom+r"|[()+'′·]",text)); replacements=[];at=0
    while at<len(tokens):
        first=at
        def adjacent(i):return i==first or not text[tokens[i-1].end():tokens[i].start()].strip()
        def token(i):return tokens[i][0] if i<len(tokens) and adjacent(i) else None
        def factor(i):
            t=token(i)
            if t=='(':
                node,i=union(i+1)
                if token(i)!=')':raise ValueError('group')
                node=('group',node);i+=1
            elif t and re.fullmatch(atom,t):node=('atom',t);i+=1
            else:raise ValueError('atom')
            while token(i) in ["'",'′']:node=('not',node);i+=1
            return node,i
        def product(i):
            node,i=factor(i)
            while token(i) and (token(i) in ['·','('] or re.fullmatch(atom,token(i))):
                if token(i)=='·':i+=1
                other,i=factor(i);node=('and',node,other)
            return node,i
        def union(i):
            node,i=product(i)
            while token(i)=='+':other,i=product(i+1);node=('or',node,other)
            return node,i
        def say(n):
            if n[0]=='atom':
                if n[1].isdigit():return DIGITS[int(n[1])]
                if len(n[1])>1:return n[1][0]+' '+(number_words(n[1][1:]) if n[1][1:].isdigit() else n[1][1:])
                return n[1]
            if n[0]=='not':return 'not '+say(n[1])
            if n[0]=='group':return 'open parenthesis '+say(n[1])+' close parenthesis'
            return say(n[1])+' '+n[0]+' '+say(n[2])
        try:
            tree,stop=union(at);start=tokens[at].start();end=tokens[stop-1].end();raw=text[start:end]
            boundary=(start==0 or not text[start-1].isalnum()) and (end==len(text) or not text[end].isalnum())
            assigned=bool(re.search(r'[A-Z](?:\d+|next)?\s*=\s*$',text[max(0,start-15):start]))
            algebra=bool(re.search(r"[+'′·]",raw)) or assigned and len(raw)>1
            # Bare binary digit sums remain arithmetic unless explicitly Boolean.
            literal=bool(re.search('[A-Z]',raw)) or bool(re.search(r'\bBoolean\b',text,re.I))
            if boundary and algebra and literal and not re.fullmatch(r'[A-Z]{3,}',raw):
                replacements.append((start,end,protect(say(tree))));at=stop
            else:at+=1
        except ValueError:at+=1
    for start,end,value in reversed(replacements):text=text[:start]+value+text[end:]
    return text


def language_notation(text, protect):
    text=text.replace('w#wᴿ',protect('w, followed by a hash symbol, followed by the reverse of w'))
    text=text.replace('wwᴿ',protect('w followed by the reverse of w'))
    text=text.replace('wᴿ',protect('the reverse of w'))
    text=text.replace('xy^iz',protect('x followed by y repeated i times, followed by z'))
    text=text.replace('R_ik(R_kk)*R_kj',protect('R subscript i k, followed by zero or more repetitions of R subscript k k, followed by R subscript k j'))
    text=re.sub(r'\bf:S\s*→\s*P\(S\)',lambda m:protect('the function f from S to the power set of S'),text)
    text=re.sub(r'\bP\(([A-Za-z])\)',lambda m:protect('the power set of '+m[1]),text)
    # Explicitly authored expression descriptions; longest forms must go first.
    expressions={
        '(a|b)*a(a|b)*':'any word over a and b, followed by a, followed by any word over a and b',
        '(a|b)*(abb|bab)':'any word over a and b, followed by either a b b or b a b',
        '(a|b)*ab':'any word over a and b, followed by a b',
        '(a|b)*aa':'any word over a and b, followed by a a',
        '(a|b)*':'zero or more repetitions, each choosing a or b',
        '(a*)*':'zero or more repetitions of a sequence of zero or more a symbols',
        '(L*)*':'the Kleene star of the Kleene star of L',
        '(ab)*':'zero or more repetitions of the word a b',
        '(aa)*':'zero or more repetitions of the word a a',
        'a|bb*':'either a, or b followed by zero or more b symbols',
        'a*b*':'zero or more a symbols followed by zero or more b symbols',
        'ab*a':'a, followed by zero or more b symbols, followed by a',
        'a*b':'zero or more a symbols followed by b',
        'a*':'zero or more a symbols',
        'b*':'zero or more b symbols',
        'Star *':'The star operator',
        'δ*':'delta star',
        'Σ*':'sigma star, the set of all finite words over the alphabet',
        '∅*':'the Kleene star of the empty set',
        'L*':'the Kleene star of L',
    }
    for raw,spoken in sorted(expressions.items(),key=lambda r:-len(r[0])):
        if raw in text:text=text.replace(raw,protect(spoken))
    text=re.sub(r'([ab])\^(\([^()]+\)|[a-z]|\d+)',lambda m:protect(m[1]+' repeated '+base_speech(m[2],'toc')+' times'),text)
    text=re.sub(r'([ab])([²³])',lambda m:protect(m[1]+' repeated '+('two' if m[2]=='²' else 'three')+' times'),text)
    text=re.sub(r'\bL\^([a-z0-9]+)',lambda m:protect('the '+base_speech(m[1])+' fold concatenation power of L'),text)
    text=re.sub(r'\|([a-z]+)\|',lambda m:protect('the length of the word '+m[1]),text)
    text=text.replace('∉',' does not belong to ')
    text=re.sub(r'\{([a-z])∈([A-Z]):',r'the set of \1 in \2 such that ',text)
    return text


def c_notation(text, protect):
    # These are bounded notation rewrites, not a C parser or evaluator.
    replacements={
        '& obtains': 'the address-of operator obtains',
        '* accesses': 'the dereference operator accesses',
        'printf("%d", boxes)':'print boxes as a decimal integer',
        '(double)7 / 2':'seven converted to double, divided by two',
        'sizeof a / sizeof a[0]':'the size in bytes of array a divided by the size in bytes of its first element',
        'int (*p)[3]':'p declared as a pointer to an array of three integers',
        'int (*)[3]':'a pointer to an array of three integers',
        'int *p[3]':'p declared as an array of three pointers to integers',
        'int *a[4]':'a declared as an array of four pointers to integers',
        'int (*f)(int)':'f declared as a pointer to a function taking an integer and returning an integer',
        'int *f(int)':'f declared as a function taking an integer and returning a pointer to an integer',
        'int **pp':'p p declared as a pointer to a pointer to an integer',
        'void *':'a generic object pointer',
        'double *':'a pointer to double',
        '\\0':'the null character',
    }
    for raw,spoken in sorted(replacements.items(),key=lambda r:-len(r[0])):
        if raw in text:text=text.replace(raw,protect(spoken))
    text=re.sub(r'\b(int|char|float|double)\s+([A-Za-z]\w*)\[\]',lambda m:protect(m[2]+' declared as an array of '+m[1]+' elements'),text)
    text=text.replace('[]',protect('array brackets'))
    text=re.sub(r'\b(int|char|float|double)\s+([A-Za-z]\w*)\[(\d+)\](?:\[(\d+)\])?',lambda m:protect(m[2]+' declared as an array of '+number_words(m[3])+(' rows and '+number_words(m[4])+' columns of ' if m[4] else ' ')+m[1]+' elements'),text)
    text=re.sub(r'\bsizeof\s*\(\s*(.*?)\s*\)',lambda m:protect('the size in bytes of '+m[1].replace('++',' post increment').replace('--',' post decrement')),text)
    text=re.sub(r'\bsizeof\s+\*([A-Za-z]\w*)',lambda m:protect('the size in bytes of the object pointed to by '+m[1]),text)
    text=re.sub(r'\b(int|char|float|double)\s+\*([A-Za-z]\w*)',lambda m:protect(m[2]+' declared as a pointer to '+m[1]),text)
    text=re.sub(r'(?<!\w)(&?)([A-Za-z]\w*)\[([^\[\]]+)\](?:\[([^\[\]]+)\])?',lambda m:protect(('the address of ' if m[1] else '')+m[2]+' at index '+base_speech(m[3],'c')+(' and then index '+base_speech(m[4],'c') if m[4] else '')),text)
    text=re.sub(r'(?<!\w)&(?!&)([A-Za-z]\w*)',lambda m:protect('the address of '+m[1]),text)
    text=re.sub(r'(?<![\w)])\*\s*\(([^()]+)\)',lambda m:protect('the object pointed to by open parenthesis '+base_speech(m[1],'c')+' close parenthesis'),text)
    text=re.sub(r'(?<![\w)])\*([A-Za-z]\w*)',lambda m:protect('the object pointed to by '+m[1]),text)
    text=text.replace('->',protect('access a member through a pointer'))
    text=re.sub(r'\b([A-Za-z]\w*)\+\+',lambda m:protect(m[1]+' post increment'),text)
    text=re.sub(r'\+\+([A-Za-z]\w*)',lambda m:protect('pre increment '+m[1]),text)
    text=re.sub(r'\b([A-Za-z]\w*)--',lambda m:protect(m[1]+' post decrement'),text)
    text=re.sub(r'--([A-Za-z]\w*)',lambda m:protect('pre decrement '+m[1]),text)
    for symbol,spoken in [('+=',' add and assign '),('-=',' subtract and assign '),('>>',' shift right '),('<<',' shift left '),('&&',' logical and '),('||',' logical or ')]:text=text.replace(symbol,protect(spoken))
    text=text.replace('&',protect('bitwise and')).replace('|',protect('bitwise or')).replace('~',protect('bitwise complement'))
    text=text.replace('%',protect('remainder operator'))
    text=re.sub(r'\b0([0-7]+)\b',lambda m:protect('octal '+' '.join(DIGITS[int(c)] for c in m[0])),text)
    return text


def speakable(text, subject=None, hints=None):
    hints=hints or {};text=str(text);saved=[]
    def protect(value):
        marker=chr(0xF000+len(saved));saved.append(base_speech(value,subject));return ' '+marker+' '
    # Occurrence-level review prevents a decimal address 100 becoming a bit word.
    for span in sorted(hints.get('spans',[]),key=lambda s:s['start'],reverse=True):
        if text[span['start']:span['end']]!=span['text']:raise ValueError('A reviewed notation span no longer matches its source.')
        text=text[:span['start']]+protect(span['spoken'])+text[span['end']:]
    if hints.get('spokenOverride'):
        return hints['spokenOverride']
    text=re.sub(r'\b(\d+)-(Mbit|ms|ns|MHz|GHz|KiB|MiB)\b',r'\1 \2',text)
    text=re.sub(r'\b(modulo|base)-(\d+)\b',lambda m:protect(m[1]+' '+number_words(m[2])),text)
    # These slashes join choices, controls, or units rather than fractions.
    slash_words={
        'Low/high':'low or high','job/day':'job per day','km/h':'kilometers per hour',
        'before/after':'before and after','do/while':'do while','if/else':'if or else','while/for':'while or for',
        'CSMA/CD':'C S M A with collision detection','Mbit/s':'megabits per second','Request/Reply':'Request or Reply',
        'client/server':'client and server','packets/s':'packets per second','permitted/blocks':'permitted or blocked',
        'request/response':'request and response','retransmit/recovery':'retransmission and recovery','tokens/s':'tokens per second',
        'Load/store':'Load and store','load/store':'load and store','loads/stores':'loads and stores',
        'I/O':'input and output','true/false':'true or false','AND/OR and 0/1':'AND and OR, and zero and one',
        'G/P':'generate and propagate','generate/propagate':'generate and propagate','S/R':'S and R','J/K':'J and K',
        'set/reset':'set or reset','Clear/reset':'Clear or reset','current-state/input':'current state and input',
        'High-master/low-slave':'high master and low slave','left/right':'left and right',
        'next-removal/next-insertion':'next removal and next insertion','epsilon/input':'epsilon or input','yes/no':'yes or no',
    }
    for raw,spoken in sorted(slash_words.items(),key=lambda item:-len(item[0])):
        if raw in text:text=text.replace(raw,protect(spoken))
    text=text.replace('…',':')
    text=re.sub(r'\b0x([0-9a-fA-F]+)\b',lambda m:protect('hexadecimal '+' '.join(DIGITS[int(c)] if c.isdigit() else 'letter '+c.upper() for c in m[1])),text)
    if subject=='c':text=re.sub(r'\b0x\b',lambda m:protect('the zero x prefix'),text)
    text=re.sub(r'\b(?:\d{1,3}\.){3}\d{1,3}(?:/\d{1,2})?\b',lambda m:protect(' dot '.join(number_words(n) for n in m[0].split('/')[0].split('.'))+(' with prefix length '+number_words(m[0].split('/')[1]) if '/' in m[0] else '')),text)
    if subject=='cn':
        text=re.sub(r'(?<!\w)/(\d{1,2})\b',lambda m:protect('prefix length '+number_words(m[1])),text)
        text=text.replace('address/prefix',protect('address followed by its prefix length'))
    text=re.sub(r'₹\s*(\d[\d,]*(?:\.\d+)?)',lambda m:protect(number_words(m[1].replace(',',''))+' rupees'),text)
    text=re.sub(r'(?<=\d),(?=\d{3}(?:\D|$))','',text)
    text=re.sub(r'\b(\d+)-to-(\d+)\b',lambda m:protect(number_words(m[1])+' to '+number_words(m[2])),text)
    text=re.sub(r'\b(\d+)-(bit|byte|column|row|way|stage|input|output|digit|based|int)\b',lambda m:protect(number_words(m[1])+' '+m[2]),text)
    text=re.sub(r'\b(\d+)K\b',lambda m:protect(number_words(m[1])+' K'),text)
    text=re.sub(r'\b([01])s\b',lambda m:'ones' if m[1]=='1' else 'zeros',text)
    text=re.sub(r'\b([A-Za-z0-9]+)\.\.([A-Za-z0-9]+)',r'\1 through \2',text)
    if subject in ['algo','ds','aptitude']:
        text=re.sub(r'\b([a-z]|\d+)!(?!=)',lambda m:protect(base_speech(m[1])+' factorial'),text)
    if subject in ['algo','ds']:
        text=text.replace('log n log log n',protect('the logarithm of n times the logarithm of the logarithm of n'))
    text=re.sub(r'\blog_\(([^()]+)\)\(([^()]+)\)',lambda m:protect('logarithm base '+base_speech(m[1])+' of '+base_speech(m[2])),text)
    text=re.sub(r'\blog_?([A-Za-z0-9]+)\(([^()]+)\)',lambda m:protect('logarithm base '+base_speech(m[1])+' of '+base_speech(m[2])),text)
    if subject not in ['algo','ds']:
        text=re.sub(r'\b(Theta|Omega|O|o)\(([^()]+)\)',lambda m:protect({'O':'big O','o':'little o','Theta':'theta','Omega':'omega'}[m[1]]+' of '+base_speech(m[2],subject)),text)
    text=re.sub(r'\b[Hh]ex\s+([0-9A-F]+)\b',lambda m:protect('hexadecimal '+' '.join(DIGITS[int(c)] if c.isdigit() else 'letter '+c for c in m[1])),text)
    text=re.sub(r'\b\d+(?:\.\d+)?[eE][+-]?\d+\b',lambda m:protect(base_speech(m[0])),text)
    text=re.sub(r'\b(\d+)([a-zA-Z])\b',r'\1 * \2',text)
    if subject in ['algo','ds']:
        text=function_notation(text,protect)
    if subject=='dl':
        text=re.sub(r'\b(?:[YQWA]\d){2,}\b',lambda m:protect(', '.join(c+' '+DIGITS[int(d)] for c,d in re.findall(r'([YQWA])(\d)',m[0]))),text)
    text=re.sub(r'([A-Za-z])([₀₁₂₃₄₅₆₇₈₉]+)',lambda m:protect(m[1]+' subscript '+' '.join(DIGITS['₀₁₂₃₄₅₆₇₈₉'.index(c)] for c in m[2])),text)
    if subject=='toc':text=language_notation(text,protect)
    if subject=='dl':text=boolean_notation(text,protect)
    if subject=='c':text=c_notation(text,protect)
    if subject=='dbms':
        for symbol,spoken in [('→',' functionally determines '),('⁺',' plus, the attribute closure '),('σ',' selection '),('π',' projection '),('⋈',' join '),('∃',' there exists '),('∀',' for every ')]:text=text.replace(symbol,protect(spoken))
    if subject=='aptitude':text=re.sub(r'\|([^|]+)\|',lambda m:protect('the absolute value of '+base_speech(m[1],subject)),text)
    if subject in ['algo','ds']:text=re.sub(r'\|([^|]+)\|',lambda m:protect('the size of '+base_speech(m[1],subject)),text)
    text=text.replace('∉',' does not belong to ')
    # Private-use protected operands cannot be consumed by the arithmetic parser.
    # Expand only their adjacent multiplication signs; ordinary arithmetic keeps
    # its parser so grouped products such as 2*(3+4) retain spoken parentheses.
    text=re.sub(r'(?<=[\uF000-\uF8FF])\s*[*×]|[*×]\s*(?=[\uF000-\uF8FF])',' times ',text)
    text=text.replace('·','; ')
    text=re.sub(r'\b(\d+):(\d+)\b',lambda m:protect(number_words(m[1])+' to '+number_words(m[2])),text)
    result=base_speech(text,subject,hints)
    for _ in range(3):
        for i,value in reversed(list(enumerate(saved))):result=result.replace(chr(0xF000+i),value)
    result=re.sub(r'\s+',' ',result)
    if subject=='c':result=result.replace('logical logical','logical').replace('bitwise bitwise','bitwise')
    return re.sub(r'\s+([,.;:!?])',r'\1',result).strip()
