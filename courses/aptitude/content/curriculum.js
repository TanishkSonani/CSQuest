import {topics} from './topics.js';
export const lecturePlans=topics.map(topic=>[topic.label,...topic.titles]);
export const units=[
 {id:0,title:'Money, shares & percentages',subtitle:'Turn everyday numbers into clear decisions.',color:'green',icon:'target',range:[0,3],goal:'Calculate interest, changing percentages, ratios and shop prices.'},
 {id:1,title:'Work, journeys & number patterns',subtitle:'Make rates and relationships visible.',color:'orange',icon:'rocket',range:[4,6],goal:'Combine work rates, compare journeys and decode divisibility.'},
 {id:2,title:'Space, sets & logical clues',subtitle:'Rotate, arrange and reason your way through.',color:'purple',icon:'map',range:[7,9],goal:'Explore reflections, overlapping groups, directions and arrangements.'},
 {id:3,title:'Numbers on a line',subtitle:'Distance, boundaries and whole-number decisions.',color:'teal',icon:'binary',range:[10,11],goal:'Use absolute value, floor and ceiling in practical scenarios.'},
 {id:4,title:'Words, meaning & evidence',subtitle:'Read closely. Connect ideas. Think clearly.',color:'pink',icon:'book',range:[12,14],goal:'Build clear sentences, infer vocabulary and evaluate conclusions.'}
];
