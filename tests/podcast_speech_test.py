import importlib.util
from pathlib import Path
import unittest
import tempfile
import hashlib
import json
from unittest.mock import patch

spec=importlib.util.spec_from_file_location('podcast_renderer',Path(__file__).resolve().parents[1]/'scripts'/'render-podcasts.py')
module=importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
from podcast_speech import notation_issues, validate_plan

class SpeechNotationTests(unittest.TestCase):
    def test_comparisons_and_equality_keep_their_meaning(self):
        text=module.speakable('a <= b, x >= y, p != q, 2 < 5, 8 > 3, x == 2')
        for phrase in ['a at most b','x at least y','p is not equal to q','two less than five','eight greater than three','x equals two']:
            self.assertIn(phrase,text)
        self.assertNotIn('equals equals',text)

    def test_c_xor_is_not_read_as_exponentiation(self):
        self.assertIn('two bitwise exclusive or three',module.speakable('2^3','c'))
        self.assertIn('two to the power of n',module.speakable('2^n','algo'))

    def test_bits_hex_and_decimals_are_distinguished(self):
        self.assertIn('binary one zero zero one',module.speakable('binary 1001'))
        self.assertIn('bit groups one zero then zero zero one one zero one',module.speakable('instruction 10 001101'))
        self.assertIn('hexadecimal letter A letter F',module.speakable('0xAF'))
        self.assertEqual(module.speakable('1000 bytes'),'one thousand bytes')

    def test_reported_notation_regressions_have_explicit_spoken_words(self):
        self.assertEqual(module.speakable('a/b','cd'),'a divided by b')
        self.assertEqual(module.speakable('2.3','cd'),'two point three')
        self.assertEqual(module.speakable('2^(n-1)','cd'),'two to the power of the quantity n minus one')
        self.assertEqual(module.speakable('binary pattern 1100','cd'),'binary pattern one one zero zero')

    def test_grouped_fractions_and_nested_exponents_preserve_every_operator(self):
        self.assertEqual(module.speakable('(a+b)/(c-d)','cd'),'open parenthesis a plus b close parenthesis divided by open parenthesis c minus d close parenthesis')
        self.assertEqual(module.speakable('2^((n-1)/2)','cd'),'two to the power of the quantity open parenthesis n minus one close parenthesis divided by two')
        self.assertIn('two to the power of the quantity n minus one',module.speakable('2^{n-1}','cd'))
        self.assertIn('three times four',module.speakable('3×4','cd'))

    def test_decimal_points_and_sentence_periods_are_not_lost(self):
        self.assertEqual(module.speakable('2.3. Then 0.05 and 11.'),'two point three. Then zero point zero five and eleven.')
        self.assertEqual(module.speakable('1e-3'),'one times ten to the power of minus three')

    def test_binary_context_and_hints_do_not_reinterpret_decimal_results(self):
        speech=module.speakable('For -1011, contributions are 8, 0, 2 and 1; magnitude 11.','cd',{'binaryLiterals':['1011']})
        self.assertIn('minus one zero one one',speech)
        self.assertIn('magnitude eleven.',speech)
        self.assertEqual(module.speakable('1000 bytes','cd',{'binaryLiterals':['1000']}),'one thousand bytes')
        self.assertEqual(module.speakable('binary 1100.'),'binary one one zero zero.')

    def test_english_hyphens_are_not_subtraction(self):
        for word in ['machine-independent','left-associative','source-linked','three-address']:
            self.assertEqual(module.speakable(word,'cd'),word)
        self.assertEqual(module.speakable('FIRST/FOLLOW','cd'),'FIRST or FOLLOW')
        self.assertEqual(module.speakable('matched/unmatched','cd'),'matched and unmatched')
        self.assertIn('close parenthesis minus two',module.speakable('(8-3)-2','cd'))
        self.assertIn('close parenthesis plus one',module.speakable('2^(n-1)+1','cd'))

    def test_compiler_grammar_and_parser_notation_remains_audible(self):
        speech=module.speakable("S -> ( S ) S | ε. S′ -> S. φ uses x1 from B2. LR(0), SLR(1), LR(1), LALR(1).",'cd')
        for value in ['S produces left parenthesis S right parenthesis S or the empty word','S prime produces S','phi uses x one from B two','L R zero','S L R one','L R one','L A L R one']:
            self.assertIn(value,speech)
        self.assertIn('S produces plus',module.speakable('S -> +','cd'))
        self.assertIn('S produces minus',module.speakable('S -> -','cd'))
        self.assertEqual(module.speakable('$ marks input end.','cd'),'the end marker marks input end.')

    def test_legacy_subjects_retain_existing_conversion_until_explicit_upgrade(self):
        self.assertEqual(module.legacy_speakable('1000 bytes'),'1000 bytes')
        self.assertIn('binary 1 1 0 0',module.legacy_speakable('binary 1100'))

    def test_all_cd_speech_plans_validate_and_stale_or_tampered_plans_fail(self):
        root=Path(__file__).resolve().parents[1]
        source=json.loads((root/'courses/cd/data/podcasts.json').read_text(encoding='utf-8'))
        plan=json.loads((root/'courses/cd/data/podcast-speech.json').read_text(encoding='utf-8'))
        for episode in source['episodes']:
            compiled=next(p for p in plan['episodes'] if p['id']==episode['id'])
            spoken,digest=validate_plan(episode,compiled)
            self.assertEqual(len(spoken),len(episode['turns']))
            self.assertEqual(digest,compiled['digest'])
            altered=json.loads(json.dumps(compiled));altered['turns'][0]['spoken']='wrong'
            with self.assertRaises(ValueError):validate_plan(episode,altered)
            with self.assertRaises(ValueError):validate_plan(episode,{**compiled,'scriptHash':'stale'})
            with self.assertRaises(ValueError):validate_plan({**episode,'speechVersion':99},compiled)
        self.assertTrue(notation_issues('unknown ν','unknown ν'))
        self.assertTrue(notation_issues('a hidden end marker $','a hidden end marker $'))
        self.assertTrue(notation_issues('unknown √','unknown √'))


class SubjectNotationTests(unittest.TestCase):
    def test_subject_semantics_and_grouping(self):
        cases=[('dl',"(AB)′=A′+B′",['not open parenthesis A and B close parenthesis','not A or not B']),
               ('toc','a*b and a^n b^n',['zero or more a symbols followed by b','a repeated n times','b repeated n times']),
               ('c','int a[2][3]; a[1][2]; x%3; &x; *p',['array of two rows and three columns','at index one and then index two','remainder operator','the address of x','the object pointed to by p']),
               ('cn','10.0.0.5/26',['ten dot zero dot zero dot five with prefix length twenty six']),
               ('algo','T(n)=2T(n/2)+n',['T of the quantity n end quantity','two times T of the quantity n divided by two end quantity']),
               ('dl','Y3Y2Y1Y0',['Y three, Y two, Y one, Y zero'])]
        for subject,raw,phrases in cases:
            spoken=module.speakable(raw,subject)
            for phrase in phrases:self.assertIn(phrase,spoken,(subject,raw,spoken))

    def test_pointer_address_and_extended_transition_are_not_multiplication(self):
        spoken=module.speakable('&a[3]-&a[1]; malloc(3*sizeof *p); 0x is a prefix.','c')
        self.assertIn('the address of a at index three minus the address of a at index one',spoken)
        self.assertIn('three times the size in bytes',spoken)
        self.assertIn('the zero x prefix',spoken)
        self.assertIn('delta star',module.speakable('The extended transition δ* takes words.','toc'))
        definition=module.speakable('& obtains an address; * accesses an object.','c')
        self.assertIn('the address-of operator obtains',definition)
        self.assertIn('the dereference operator accesses',definition)
        indexed=module.speakable('C1=G0+P0C0','dl')
        self.assertIn('G zero or P zero and C zero',indexed)
        self.assertNotIn('G and zero',indexed)
        self.assertIn('load and store',module.speakable('load/store instructions','coa'))
        self.assertIn('kilometers per hour',module.speakable('60 km/h','aptitude'))
        self.assertEqual(module.speakable('a/b','dl'),'a divided by b')
        self.assertEqual(module.speakable('2*(3+4)','algo'),'two times open parenthesis three plus four close parenthesis')
        self.assertIn('ten megabits per second',module.speakable('10-Mbit/s output','cn'))
        self.assertIn('times four bit',module.speakable('1K×4-bit memory','coa'))
        factorial=module.speakable('ceil(log2(n!))','algo')
        self.assertIn('the ceiling',factorial)
        self.assertIn('logarithm base two of n factorial',factorial)
        self.assertEqual(module.speakable('5!','aptitude'),'five factorial')

    def test_every_replacement_plan_is_current_and_valid(self):
        root=Path(__file__).resolve().parents[1];episodes=turns=0
        for source_path in (root/'courses').glob('*/data/podcasts.json'):
            source=json.loads(source_path.read_text(encoding='utf-8'))
            plan=json.loads(source_path.with_name('podcast-speech.json').read_text(encoding='utf-8'))
            for episode in source['episodes']:
                if episode['subject']=='cd':continue
                compiled=next(p for p in plan['episodes'] if p['id']==episode['id'])
                spoken,digest=validate_plan(episode,compiled)
                self.assertEqual(episode['speechVersion'],4)
                self.assertEqual(digest,compiled['digest']);episodes+=1;turns+=len(spoken)
        self.assertEqual(episodes,109);self.assertEqual(turns,4444)


class ProgressWriteTests(unittest.TestCase):
    def test_transient_windows_lock_retries_and_publishes(self):
        with tempfile.TemporaryDirectory() as directory:
            target=Path(directory)/'timeline.json'
            original=Path.replace
            attempts=[]
            def replace(source,destination):
                attempts.append(destination)
                if len(attempts)<3:
                    raise PermissionError('Windows sharing lock')
                return original(source,destination)
            with patch.object(Path,'replace',replace),patch.object(module.time,'sleep'):
                self.assertTrue(module.write_json(target,{'ready':True}))
            self.assertEqual(len(attempts),3)
            self.assertIn('true',target.read_text())

    def test_locked_progress_does_not_stop_audio_generation(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory)
            with patch.object(module,'ROOT',root),patch.object(Path,'replace',side_effect=PermissionError('locked')),patch.object(module.time,'sleep'),patch('builtins.print'):
                self.assertFalse(module.write_json(root/'runtime'/'podcast-render.json',{'phase':'rendering'}))
            self.assertEqual(list((root/'runtime').glob('*.tmp')),[])

    def test_authoritative_timeline_failure_is_not_hidden(self):
        with tempfile.TemporaryDirectory() as directory:
            with patch.object(Path,'replace',side_effect=PermissionError('locked')),patch.object(module.time,'sleep'):
                with self.assertRaises(PermissionError):
                    module.write_json(Path(directory)/'episode.json',{'ready':True})

if __name__=='__main__':
    unittest.main()
