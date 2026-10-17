import {escapeHtml as h} from '/shared/engine.js';

// Controls illustrate a separate example; changing a lab never changes a puzzle answer.
const definitions={
 interest:['Watch money grow','Compare ₹1,000 at 10% yearly interest.',[['a','Years',1,5,1,2]]],
 percent:['Build a share out of 100','Every filled square represents one percent.',[['a','Percentage',0,100,5,25]]],
 ratio:['Share 20 biscuits','Change the first person’s parts; the second person has 3 parts.',[['a','First person’s parts',1,7,1,2]]],
 price:['Try a shop’s price tags','Cost ₹400, marked price ₹600. Change the discount.',[['a','Discount (%)',0,50,5,20]]],
 work:['Two painters, one wall','Each slider gives how many days that painter needs alone.',[['a','A’s days alone',2,20,1,6],['b','B’s days alone',2,20,1,3]]],
 motion:['A journey in motion','Explore distance at a constant speed of 12 km/h.',[['a','Travel time (hours)',0,3,0.25,1]]],
 numbers:['Find a number’s divisors','A divisor leaves no remainder. Try both prime and composite numbers.',[['a','Number',2,30,1,12]]],
 spatial:['Turn it. Reflect it.','Follow an asymmetric shape through a clockwise turn or a vertical mirror.',[['a','Quarter-turns clockwise',0,3,1,1],['b','Vertical reflection (0 off, 1 on)',0,1,1,0]]],
 sets:['Count an overlap once','20 learners: 12 like chess and 9 like music. Change how many like both.',[['a','Members in both groups',1,9,1,5]]],
 logic:['Try every arrangement','Asha must be left of Ben, and Ben left of Chen.',[['a','Candidate arrangement',1,6,1,1]]],
 absolute:['Distance without a sign','Move a point along the number line. Its distance from zero stays nonnegative.',[['a','Point x',-5,5,0.5,-3]]],
 rounding:['Between integer steps','Move through positive and negative values; compare floor with ceiling.',[['a','Value x',-4,4,0.2,-1.2]]],
 grammar:['Let the subject lead','Change the number of boxes. The phrase “of pencils” does not control the verb.',[['a','Number of boxes',1,3,1,1]]],
 vocabulary:['Connect two ideas','Choose cause, contrast or addition and see how the connector changes the meaning.',[['a','Relationship (1 cause, 2 contrast, 3 addition)',1,3,1,2]]],
 reading:['Evidence or extra assumption?','A museum extended its Saturday hours, and attendance rose that day.',[['a','Claim to inspect',1,3,1,1]]]
};
const f=value=>Number(value.toFixed(2)).toLocaleString(undefined,{maximumFractionDigits:2});
export function labModel(kind,a,b=0){
 switch(kind){
  case 'interest':return {simple:1000*(1+.1*a),compound:1000*1.1**a};
  case 'percent':return {filled:a,remaining:100-a};
  case 'ratio':return {first:20*a/(a+3),second:60/(a+3)};
  case 'price':return {selling:600*(1-a/100),profit:600*(1-a/100)-400};
  case 'work':return {days:1/(1/a+1/b),first:100*b/(a+b),second:100*a/(a+b)};
  case 'motion':return {distance:12*a};
  case 'numbers':return {divisors:Array.from({length:a},(_,i)=>i+1).filter(i=>a%i===0)};
  case 'sets':return {onlyA:12-a,onlyB:9-a,both:a,union:21-a,neither:a-1};
  case 'absolute':return {distance:Math.abs(a)};
  case 'rounding':return {floor:Math.floor(a),ceiling:Math.ceil(a)};
  default:return {};
 }
}
const bar=(name,value,max,cls='')=>`<div class="lab-bar-row"><span>${h(name)}</span><div class="lab-bar-track"><i class="${cls}" style="width:${Math.max(0,Math.min(100,value/max*100))}%"></i></div><b>${f(value)}</b></div>`;
const svg=(body,label)=>`<svg viewBox="0 0 360 150" role="img" aria-label="${h(label)}">${body}</svg>`;
function line(a,kind){
 const pos=x=>30+(x+5)*30,m=labModel(kind,a);
 return svg(`<line x1="30" y1="82" x2="330" y2="82" class="lab-axis"/>${Array.from({length:11},(_,i)=>`<line x1="${30+i*30}" y1="76" x2="${30+i*30}" y2="88" class="lab-axis"/><text x="${30+i*30}" y="110" text-anchor="middle">${i-5}</text>`).join('')}${kind==='absolute'?`<line x1="${pos(Math.min(a,0))}" y1="58" x2="${pos(Math.max(a,0))}" y2="58" class="lab-distance"/>`:`<circle cx="${pos(m.floor)}" cy="82" r="9" class="lab-floor"/><circle cx="${pos(m.ceiling)}" cy="82" r="6" class="lab-ceiling"/>`}<circle cx="${pos(a)}" cy="58" r="7" class="lab-point"/><text x="${pos(a)}" y="38" text-anchor="middle">x = ${f(a)}</text>`,kind==='absolute'?`Point ${f(a)} is ${f(m.distance)} units from zero`:`Point ${f(a)} between floor ${m.floor} and ceiling ${m.ceiling}`);
}
function drawing(kind,a,b){
 const m=labModel(kind,a,b);
 switch(kind){
  case 'interest':return {art:bar('Simple amount (₹)',m.simple,1700)+bar('Compound amount (₹)',m.compound,1700,'lab-gold'),text:`After ${a} year${a===1?'':'s'}: ₹${f(m.simple)} simple, ₹${f(m.compound)} compounded. Difference: ₹${f(m.compound-m.simple)}.`};
  case 'percent':return {art:`<div class="lab-hundred" aria-label="${a} of 100 squares filled">${Array.from({length:100},(_,i)=>`<i class="${i<a?'filled':''}" aria-hidden="true"></i>`).join('')}</div>`,text:`${a} out of 100 = ${a}% = ${f(a/100)}. The unfilled share is ${m.remaining}%.`};
  case 'ratio':return {art:`<div class="lab-share"><span style="width:${m.first/20*100}%">A</span><span style="width:${m.second/20*100}%">B</span></div><div class="lab-chips">${Array.from({length:a+3},(_,i)=>`<span class="${i<a?'':'lab-chip-gold'}">${i<a?'A':'B'}</span>`).join('')}</div>`,text:`Ratio ${a}:3. Each part = ${f(20/(a+3))} biscuits; A gets ${f(m.first)}, B gets ${f(m.second)}. Fractional shares illustrate the calculation.`};
  case 'price':return {art:bar('Cost (₹)',400,600)+bar('Selling price (₹)',m.selling,600,'lab-gold'),text:`₹600 × ${f(1-a/100)} = ₹${f(m.selling)} selling price. ${m.profit>=0?'Profit':'Loss'} ₹${f(Math.abs(m.profit))}, or ${f(Math.abs(m.profit)/4)}% of the ₹400 cost.`};
  case 'work':return {art:`<div class="lab-share"><span style="width:${m.first}%">A ${f(m.first)}%</span><span style="width:${m.second}%">B ${f(m.second)}%</span></div>`,text:`Daily rate = 1/${a} + 1/${b} jobs. Together they finish in ${f(m.days)} days; the bars show each painter’s share.`};
  case 'motion':return {art:svg(`<path d="M25 90 H335" class="lab-road"/><text x="25" y="127">Start</text><text x="290" y="127">36 km</text><g class="lab-traveller" style="transform:translateX(${a/3*290}px)"><rect x="20" y="60" width="35" height="22" rx="7"/><circle cx="28" cy="86" r="6"/><circle cx="47" cy="86" r="6"/></g>`,'A traveller covers '+f(m.distance)+' km'),text:`Distance = 12 km/h × ${f(a)} hours = ${f(m.distance)} km. Constant speed means equal distance in equal time.`};
  case 'numbers':return {art:`<div class="lab-chips">${Array.from({length:a},(_,i)=>`<span class="${m.divisors.includes(i+1)?'':'lab-chip-muted'}">${i+1}</span>`).join('')}</div>`,text:`Divisors of ${a}: ${m.divisors.join(', ')}. ${m.divisors.length===2?'Exactly two positive divisors: prime.':'More than two positive divisors: composite.'}`};
  case 'spatial':return {art:svg(`<text x="90" y="23" text-anchor="middle">Original</text><text x="270" y="23" text-anchor="middle">Transformed</text><path d="M65 45 H85 V85 H120 V105 H65 Z" class="lab-shape"/><g style="transform:translate(270px,75px) rotate(${a*90}deg) scaleX(${b?-1:1})" class="lab-shape-turn"><path d="M-25 -30 H-5 V10 H30 V30 H-25 Z" class="lab-shape"/></g>`,'An asymmetric L shape rotated '+a*90+' degrees clockwise'+(b?' after a vertical reflection':'')),text:`${a*90}° clockwise${b?' after a vertical reflection of the original shape':''}. A mirror changes handedness; turning alone does not.`};
  case 'sets':return {art:svg(`<circle cx="140" cy="75" r="58" class="lab-set-a"/><circle cx="220" cy="75" r="58" class="lab-set-b"/><text x="112" y="75" text-anchor="middle">${m.onlyA}</text><text x="180" y="75" text-anchor="middle">${a}</text><text x="248" y="75" text-anchor="middle">${m.onlyB}</text><text x="95" y="145">Chess</text><text x="235" y="145">Music</text>`,'Venn diagram: '+m.onlyA+' chess only, '+a+' both, '+m.onlyB+' music only'),text:`Union = 12 + 9 − ${a} = ${m.union}. Neither = 20 − ${m.union} = ${m.neither}. The overlap is subtracted once.`};
  case 'logic':{const orders=[['Asha','Ben','Chen'],['Asha','Chen','Ben'],['Ben','Asha','Chen'],['Ben','Chen','Asha'],['Chen','Asha','Ben'],['Chen','Ben','Asha']],order=orders[a-1];return {art:`<div class="lab-chips lab-seats">${order.map((name,i)=>`<span><small>SEAT ${i+1}</small>${name}</span>`).join('')}</div>`,text:a===1?'Both clues hold: Asha is left of Ben, and Ben is left of Chen.':'This candidate breaks at least one left-of clue. Compare each pair before accepting it.'};}
  case 'absolute':return {art:line(a,kind),text:`|${f(a)}| = ${f(m.distance)}. Distance from zero is nonnegative, whichever side the point occupies.`};
  case 'rounding':return {art:line(a,kind),text:`floor(${f(a)}) = ${m.floor}; ceiling(${f(a)}) = ${m.ceiling}. Gold marks floor, green marks ceiling. At integers, both coincide.`};
  case 'grammar':return {art:`<div class="lab-sentence"><strong>${a===1?'The box':'The '+a+' boxes'}</strong><span>of pencils</span><strong>${a===1?'is':'are'}</strong><span>on the table.</span></div>`,text:`${a===1?'Box is singular, so use is.':'Boxes is plural, so use are.'} “Of pencils” describes the subject but does not change its number.`};
  case 'vocabulary':{const values=[['Because of','the rain, the match stopped.','Cause: rain explains the stopping.'],['Despite','the rain, the match continued.','Contrast: continuation is unexpected given the rain.'],['Moreover,','the team brought spare equipment.','Addition: another supporting idea is introduced.']];const v=values[a-1];return {art:`<div class="lab-sentence"><strong>${v[0]}</strong><span>${v[1]}</span></div>`,text:v[2]};}
  case 'reading':{const claims=[['Saturday attendance rose.','Stated fact: the passage explicitly gives this observation.'],['Longer hours caused the rise.','Unsupported causal claim: other factors could explain attendance.'],['Other factors may have contributed.','Possible explanation: compatible with the passage, but not an established fact.']];const v=claims[a-1];return {art:`<blockquote class="lab-passage">The museum extended its Saturday hours. Attendance rose that day.</blockquote><div class="lab-sentence"><strong>${v[0]}</strong></div>`,text:v[1]};}
  default:return {art:'',text:''};
 }
}
export function aptitudeIllustration(lesson){const d=definitions[lesson.lab];return drawing(lesson.lab,d[2][0][5],d[2][1]?.[5]||0);}
export function aptitudeScenes(lesson){const d=definitions[lesson.lab],control=d[2][0];return [...new Set([control[2],control[5],control[3]])].sort((a,b)=>a-b).map(value=>{const view=drawing(lesson.lab,value,d[2][1]?.[5]||0);return {title:control[1]+' = '+value,art:view.art,caption:view.text};});}
export function aptitudeLab(lesson){
 const d=definitions[lesson.lab];if(!d)return '';
 const a=d[2][0][5],b=d[2][1]?.[5]||0,view=drawing(lesson.lab,a,b);
 return `<section class="aptitude-lab" data-aptitude-lab="${lesson.lab}"><span class="tag green">EXPLORE THE IDEA</span><h3>${d[0]}</h3><p>${d[1]}</p><div class="lab-art lab-replay">${view.art}</div><div class="lab-controls">${d[2].map(([key,label,min,max,step,value])=>`<label><span>${h(label)} <output data-lab-output="${key}">${f(value)}</output></span><input type="range" data-lab-control="${key}" aria-label="${h(label)}" min="${min}" max="${max}" step="${step}" value="${value}"></label>`).join('')}</div><p class="lab-insight" aria-live="polite">${h(view.text)}</p><button type="button" class="text-button" data-lab-replay>RESET EXPERIMENT</button><small class="muted">Experiment freely. This separate example earns no XP and does not reveal your puzzle’s answer.</small></section>`;
}
document.addEventListener('input',event=>{
 const control=event.target.closest('[data-lab-control]');if(!control)return;
 const root=control.closest('[data-aptitude-lab]'),a=Number(root.querySelector('[data-lab-control="a"]').value),b=Number(root.querySelector('[data-lab-control="b"]')?.value||0);
 root.querySelector(`[data-lab-output="${control.dataset.labControl}"]`).textContent=f(Number(control.value));
 const view=drawing(root.dataset.aptitudeLab,a,b);root.querySelector('.lab-art').innerHTML=view.art;root.querySelector('.lab-insight').textContent=view.text;
});
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-lab-replay]');if(!button)return;
 const root=button.closest('[data-aptitude-lab]');for(const input of root.querySelectorAll('[data-lab-control]')){input.value=input.defaultValue;input.dispatchEvent(new Event('input',{bubbles:true}));}document.dispatchEvent(new Event('aptitude-interaction'));
});
