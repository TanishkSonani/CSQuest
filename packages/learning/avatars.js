export const avatarCategories=[['all','All avatars'],['people','People'],['animals','Animals'],['mythic','Mythical'],['characters','Characters'],['clash','Clash of Clans'],['icons','Classic icons']];
export const avatars=[
 {id:'male-curly',name:'Curly-haired learner',category:'people',tile:0},
 {id:'female-wave',name:'Wavy-haired learner',category:'people',tile:1},
 {id:'nerd',name:'The nerd',category:'characters',tile:2},
 {id:'explorer-female',name:'Trail explorer',category:'characters',tile:3},
 {id:'pirate',name:'Pirate captain',category:'characters',tile:4},
 {id:'explorer-male',name:'Jungle explorer',category:'characters',tile:5},
 {id:'fox',name:'Curious fox',category:'animals',tile:6},
 {id:'panda',name:'Gentle panda',category:'animals',tile:7},
 {id:'owl',name:'Wise owl',category:'animals',tile:8},
 {id:'dragon',name:'Little dragon',category:'mythic',tile:9},
 {id:'unicorn',name:'Starlight unicorn',category:'mythic',tile:10},
 {id:'phoenix',name:'Golden phoenix',category:'mythic',tile:11},
 {id:'barbarian',name:'Barbarian',category:'clash',tile:12},
 {id:'archer',name:'Archer',category:'clash',tile:13},
 {id:'wizard',name:'Wizard',category:'clash',tile:14},
 {id:'goblin',name:'Goblin',category:'clash',tile:15},
 ...['chip','leaf','star','rocket','book','binary'].map(id=>({id,name:id[0].toUpperCase()+id.slice(1),category:'icons',icon:id}))
];
export const avatarIds=new Set(avatars.map(a=>a.id));
