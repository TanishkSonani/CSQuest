import {lessons} from './reviewed-lessons.js';
export {lessons};

import {attachTeachingNotes} from '../../../packages/learning/instructional-notes.js';
import {teachingNotes} from './teaching-notes.js';
attachTeachingNotes(lessons,teachingNotes,'ds');
