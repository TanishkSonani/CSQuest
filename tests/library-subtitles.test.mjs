import test from 'node:test';
import assert from 'node:assert/strict';
import {subtitlesToVtt} from '../apps/web/public/video-tracks.js';
test('SRT conversion preserves cue text, handles BOM and CRLF and generates valid WebVTT timings',()=>{
 assert.equal(subtitlesToVtt('\uFEFF1\r\n00:00:01,500 --> 00:00:03,750\r\nFirst cue\r\n\r\n2\r\n01:02:03,000 --> 01:02:04,000\r\nSecond cue'),'WEBVTT\n\n00:00:01.500 --> 00:00:03.750\nFirst cue\n\n01:02:03.000 --> 01:02:04.000\nSecond cue');
});
test('native WebVTT passes through and unrelated documents are rejected',()=>{
 const source='WEBVTT\n\n00:00:01.000 --> 00:00:02.000\nCaption';assert.equal(subtitlesToVtt(source),source);assert.throws(()=>subtitlesToVtt('This is not a subtitle file.'),/valid SRT or WebVTT/);
});
