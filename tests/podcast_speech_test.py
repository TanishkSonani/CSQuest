import importlib.util
from pathlib import Path
import unittest
import tempfile
from unittest.mock import patch

spec=importlib.util.spec_from_file_location('podcast_renderer',Path(__file__).resolve().parents[1]/'scripts'/'render-podcasts.py')
module=importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

class SpeechNotationTests(unittest.TestCase):
    def test_comparisons_and_equality_keep_their_meaning(self):
        text=module.speakable('a <= b, x >= y, p != q, 2 < 5, 8 > 3, x == 2')
        for phrase in ['a at most b','x at least y','p is not equal to q','2 less than 5','8 greater than 3','x equals 2']:
            self.assertIn(phrase,text)
        self.assertNotIn('equals equals',text)

    def test_c_xor_is_not_read_as_exponentiation(self):
        self.assertIn('2 bitwise exclusive or 3',module.speakable('2^3','c'))
        self.assertIn('2 to the power of n',module.speakable('2^n','algo'))

    def test_bits_hex_and_decimals_are_distinguished(self):
        self.assertIn('binary 1 0 0 1',module.speakable('binary 1001'))
        self.assertIn('bit groups 1 0 then 0 0 1 1 0 1',module.speakable('instruction 10 001101'))
        self.assertIn('hexadecimal A F',module.speakable('0xAF'))
        self.assertEqual(module.speakable('1000 bytes'),'1000 bytes')

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
