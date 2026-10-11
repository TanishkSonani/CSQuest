import {account,flushAccount,lockAccount} from './account-client.js';
import {escapeHtml as h} from '/shared/engine.js';
import {avatarMarkup} from './avatar-ui.js';
import {icon} from './icons.js';

let state,epoch=0,hooks;
function reset(){epoch++;state={userId:account.user?.id,tab:'friends',scope:'friends',overview:null,board:null,query:'',results:null,compare:null,detail:null,loading:false,busy:false,error:'',confirm:null};}
const fmt=value=>Number(value||0).toLocaleString();
const date=value=>new Date(value).toLocaleString(undefined,{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'});
const avatar=user=>`<span class="social-avatar">${avatarMarkup(user.avatar,true)}</span>`;
const empty=(title,text)=>`<div class="social-empty">${icon('leaf')}<h3>${title}</h3><p>${text}</p></div>`;
const button=(text,action,extra='',kind='secondary')=>`<button type="button" class="btn ${kind}" data-social="${action}" ${extra} ${state.busy?'disabled':''}>${text}</button>`;
const tag=text=>`<span class="social-tag">${h(text)}</span>`;
async function request(action,body){
 if(!account.user||account.user.id!==state.userId)throw Error('Your account changed. Open Social again.');
 const response=await fetch('/api/social/'+action,{method:body?'POST':'GET',credentials:'same-origin',headers:body?{'Content-Type':'application/json','X-CSQuest-Request':'1'}:{},body:body?JSON.stringify(body):undefined,signal:AbortSignal.timeout(15000)});
 const result=await response.json();if(response.status===401)lockAccount();if(!response.ok)throw Error(result.error||'Could not load Social.');return result;
}
function repaint(){
 const root=document.querySelector('[data-social-root]');if(!root||state.userId!==account.user?.id)return;
 const form=root.querySelector('[data-social-form="challenge"]');
 if(form&&!state.clearChallenge)state.challengeDraft=Array.from(form.elements).filter(el=>el.name).map(el=>({name:el.name,value:el.value,checked:el.checked}));
 if(state.clearChallenge){state.challengeDraft=null;state.clearChallenge=false;}
 const active=document.activeElement,focus=root.contains(active)?{id:active.id,name:active.name,action:active.dataset.social,tab:active.dataset.tab,scope:active.dataset.scope}:null;
 root.innerHTML=content();
 const next=root.querySelector('[data-social-form="challenge"]');
 if(next&&state.challengeDraft)for(const saved of state.challengeDraft){const el=Array.from(next.elements).find(el=>el.name===saved.name&&(el.type!=='checkbox'||el.value===saved.value));if(el){if(el.type==='checkbox')el.checked=saved.checked;else el.value=saved.value;}}
 if(focus){const target=Array.from(root.querySelectorAll('input,select,button')).find(el=>focus.id?el.id===focus.id:focus.name?el.name===focus.name:focus.action&&el.dataset.social===focus.action&&el.dataset.tab===focus.tab&&el.dataset.scope===focus.scope);target?.focus({preventScroll:true});}
}
export function socialView(){
 if(!state||state.userId!==account.user?.id)reset();
 return `<div data-social-root>${content()}</div>`;
}
export function mountSocial(){if(state&&!state.loading)loadSocial();}
async function loadSocial(force=false){
 if(state.userId!==account.user?.id)return;
 if(state.loading){if(force){await state.job;return loadSocial();}return state.job;}
 const ticket=epoch,scope=state.scope;state.loading=true;
 state.job=(async()=>{
  try{
   await flushAccount();
   const timeZone=Intl.DateTimeFormat().resolvedOptions().timeZone;
   if(state.timeZone!==timeZone){await request('settings',{timeZone});state.timeZone=timeZone;}
   const [overview,board]=await Promise.all([request('overview'),request('leaderboard?scope='+scope)]);
   if(ticket!==epoch||state.userId!==account.user?.id)return;
   state.overview=overview;if(scope===state.scope)state.board=board;state.error='';
   if(state.compare){const target=state.compare.learners.find(user=>user.id!==account.user.id),friend=overview.friends.find(user=>user.id===target?.id);state.compare=friend?{learners:[overview.self,friend]}:null;}
   if(state.detail)state.detail=overview.challenges.find(item=>item.id===state.detail.id)||null;
  }catch(error){if(ticket===epoch)state.error=error.message;}
  finally{if(ticket===epoch){state.loading=false;repaint();}}
 })();
 return state.job;
}
function content(){
 const o=state.overview,unread=o?.notifications.filter(item=>!item.readAt).length||0;
 return `<section class="social-page"><header class="social-hero"><div><div class="page-eyebrow">LEARN TOGETHER</div><h1>A little friendly momentum.</h1><p>Find your people. Celebrate progress. Take the next small step together.</p></div><span class="social-hero-art" aria-hidden="true">${icon('trophy')}${icon('heart')}</span></header>
 ${o?`<div class="social-stats">${[['bolt',fmt(o.self.weekXP),'Competition XP this week'],['book',fmt(o.self.xp),'Your lifetime learning XP'],['flame',o.self.streak+' day'+(o.self.streak===1?'':'s'),'Your study streak'],['heart',o.friends.length,'Learning friends']].map(([i,value,label])=>`<article class="card">${icon(i)}<strong>${value}</strong><small>${label}</small></article>`).join('')}</div>`:''}
 <div class="social-tabs" role="group" aria-label="Social pages">${[['friends','Friends'],['leaderboards','Leaderboards'],['challenges','Challenges'],['activity','Activity'+(unread?' ('+unread+')':'')]].map(([id,label])=>`<button type="button" data-social="tab" data-tab="${id}" class="catalog-filter ${state.tab===id?'selected':''}" aria-pressed="${state.tab===id}">${label}</button>`).join('')}</div>
 ${state.error?`<div class="social-error" role="alert"><p>${h(state.error)}</p>${button('TRY AGAIN','refresh')}</div>`:''}
 ${!o?'<div class="card social-loading" role="status">Finding your learning community…</div>':state.tab==='friends'?friendsView(o):state.tab==='leaderboards'?leaderboardsView(o):state.tab==='challenges'?challengesView(o):activityView(o)}
 <p class="social-footnote">Competition XP counts new rounds after a successful server save. Imported progress stays in your personal stats. Weekly boards reset Monday at 00:00 UTC.</p>
 </section>`;
}
function friendsView(o){
 const incoming=o.requests.filter(item=>item.direction==='incoming'),outgoing=o.requests.filter(item=>item.direction==='outgoing');
 return `<section class="card social-find"><div class="social-section-heading"><div><h2>Find a learning buddy</h2><p>Search by username, or share yours: <strong>@${h(account.user.username)}</strong></p></div>${button('COPY MY USERNAME','copy')}</div><form data-social-form="search" class="social-search"><label class="sr-only" for="social-search">Find a learner by username</label><input id="social-search" name="q" value="${h(state.query)}" placeholder="Enter a username" required minlength="3" maxlength="32" pattern="[a-zA-Z0-9_]{3,32}" autocomplete="off"><button class="btn primary" type="submit" ${state.busy?'disabled':''}>FIND FRIENDS</button></form>${state.results?`<div class="social-results" aria-live="polite">${state.results.length?state.results.map(user=>`<article class="social-person">${avatar(user)}<div><b>${h(user.displayName)}</b><small>@${h(user.username)}</small></div>${user.relationship==='none'?button('ADD FRIEND','friend-request',`data-user-id="${user.id}"`,'primary'):user.relationship==='incoming'?button('ACCEPT','friend-respond',`data-user-id="${user.id}" data-response="accept"`,'primary'):tag(user.relationship==='friend'?'Friends':'Request sent')}</article>`).join(''):empty('No learner found','Try their exact username. Learners who turn off discovery do not appear here.')}</div>`:''}</section>
 ${incoming.length||outgoing.length?`<section class="card"><h2>Friend requests</h2><div class="social-request-list">${[...incoming,...outgoing].map(user=>`<article class="social-person">${avatar(user)}<div><b>${h(user.displayName)}</b><small>@${h(user.username)} · ${user.direction==='incoming'?'Wants to learn with you':'Waiting for their reply'}</small></div><div class="social-actions">${user.direction==='incoming'?button('ACCEPT','friend-respond',`data-user-id="${user.id}" data-response="accept"`,'primary')+button('DECLINE','friend-respond',`data-user-id="${user.id}" data-response="decline"`):button('CANCEL','friend-respond',`data-user-id="${user.id}" data-response="cancel"`)}</div></article>`).join('')}</div></section>`:''}
 <div class="social-section-heading"><div><h2>Your friends</h2><p>Friendly comparisons, without sharing private answers or drafts.</p></div>${tag(o.friends.length+' friends')}</div>
 ${o.friends.length?`<div class="social-friend-grid">${o.friends.map(user=>`<article class="card social-friend"><div class="social-person">${avatar(user)}<div><h3>${h(user.displayName)}</h3><small>@${h(user.username)}</small></div></div><div class="social-friend-stats"><span><strong>${fmt(user.weekXP)}</strong> weekly XP</span><span><strong>${user.streak}</strong> day streak</span><span><strong>${user.completion}%</strong> courses complete</span></div><div class="social-actions">${button('COMPARE PROGRESS','compare',`data-user-id="${user.id}"`)}${state.confirm===user.id?button('YES, REMOVE','friend-respond',`data-user-id="${user.id}" data-response="remove"`)+button('KEEP FRIEND','confirm-clear'):button('REMOVE','confirm-remove',`data-user-id="${user.id}"`,'text-button')}</div></article>`).join('')}</div>`:empty('Your next study buddy is out there','Send a request above. They choose whether to share progress with you.')}
 ${state.compare?compareView(state.compare):''}
 <section class="card social-settings"><h2>Your social preferences</h2><form data-social-form="settings"><label class="check-label"><input type="checkbox" name="discoverable" ${o.profile.discoverable?'checked':''}> Let learners find my username and send requests</label><label class="check-label"><input type="checkbox" name="leagueEnabled" ${o.profile.leagueEnabled?'checked':''}> Join public weekly leagues and community rankings</label><p>Accepted friends can see summary stats and course completion. Public rankings show your name, avatar and weekly competition XP.</p><button class="btn secondary" type="submit" ${state.busy?'disabled':''}>SAVE PREFERENCES</button></form></section>`;
}
function compareView(value){
 const [a,b]=[value.learners.find(user=>user.id===account.user.id),value.learners.find(user=>user.id!==account.user.id)];if(!a||!b)return '';
 const rows=[['Lifetime XP','xp'],['Competition XP this week','weekXP'],['Completed levels','levels'],['Overall completion','completion','%'],['Current streak','streak',' days'],['Study days','studyDays'],['Completed rounds','rounds'],['First-try accuracy','accuracy','%'],['Study time','minutes',' min']];
 return `<section class="card social-comparison" id="social-comparison"><div class="social-section-heading"><div><span class="page-eyebrow">SIDE BY SIDE</span><h2>Every learner has their own rhythm.</h2></div>${button('CLOSE','compare-close')}</div><div class="social-table-wrap"><table class="social-table"><caption class="sr-only">Your progress compared with ${h(b.displayName)}</caption><thead><tr><th scope="col">Learning stats</th>${[a,b].map(user=>`<th scope="col">${avatar(user)}${h(user.displayName)}${user.id===a.id?tag('You'):''}</th>`).join('')}</tr></thead><tbody>${rows.map(([label,key,suffix=''])=>`<tr><th scope="row">${label}</th>${[a,b].map(user=>`<td>${user[key]===null?'—':fmt(user[key])+suffix}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="social-course-compare">${a.courses.map(course=>{const other=b.courses.find(item=>item.id===course.id);return `<div><h3>${h(course.name)}</h3>${[[a,course],[b,other]].map(([user,value])=>`<p>${h(user.displayName)} <b>${value?.completed||0}/${value?.total||0} levels · ${value?.percent||0}%</b></p><div class="progress-track" role="progressbar" aria-label="${h(user.displayName)} ${h(course.name)} completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value?.percent||0}"><div style="width:${value?.percent||0}%"></div></div>`).join('')}</div>`;}).join('')}</div></section>`;
}
function rankingTable(rows,{promoteCount=0,demoteCount=0}={}){
 if(!rows.length)return empty('A fresh week, a fresh start','Complete and save a round to begin. Community rankings include learners who choose to join.');
 return `<div class="social-table-wrap"><table class="social-table social-ranking"><caption class="sr-only">Weekly competition XP standings</caption><thead><tr><th scope="col">Rank</th><th scope="col">Learner</th><th scope="col">XP</th></tr></thead><tbody>${rows.map(user=>`<tr class="${user.id===account.user.id?'is-self ':''}${promoteCount&&user.rank<=promoteCount&&user.xp>0?'promotion ':''}${demoteCount&&user.rank>rows.length-demoteCount?'demotion':''}"><td><span class="social-rank rank-${user.rank<=3?user.rank:'other'}">${user.rank}</span></td><th scope="row"><span class="social-ranking-person">${avatar(user)}<span>${h(user.displayName)}<small>@${h(user.username)}</small></span>${user.id===account.user.id?tag('You'):''}</span></th><td><strong>${fmt(user.xp)}</strong><small>XP</small></td></tr>`).join('')}</tbody></table></div>`;
}
function leaderboardsView(o){
 const board=state.board,league=state.scope==='league';
 return `<div class="social-section-heading"><div><h2>This week’s little wins</h2><p>New saved rounds, across all your courses.</p></div>${button('REFRESH','refresh')}</div><div class="social-scopes" role="group" aria-label="Leaderboard scope">${[['friends','Friends'],['community','Community'],['league','My league']].map(([id,label])=>`<button type="button" class="catalog-filter ${state.scope===id?'selected':''}" data-social="scope" data-scope="${id}" aria-pressed="${state.scope===id}">${label}</button>`).join('')}</div>
 ${league?`<section class="card social-league"><div class="social-section-heading"><div><span class="page-eyebrow">WEEKLY LEAGUE</span><h2>${h(board?.league||'Your next adventure')}</h2><p>${o.profile.leagueEnabled?'Build your weekly rhythm alongside up to 29 other learners.':'Join a weekly group and work your way from Bronze to Diamond.'}</p></div><span class="social-league-medal">${icon('trophy')}</span></div><ol class="social-league-path">${o.leagues.map((name,index)=>`<li class="${index===(board?.tier??-1)?'is-current':''}">${icon(index===4?'star':'trophy')}<span>${h(name)}</span></li>`).join('')}</ol>${!o.profile.leagueEnabled?button('JOIN THE LEAGUES','join-league','','primary'):`<p class="social-league-rule">${board?.eligible?`Top ${board.promoteCount} ranks move up; the bottom ${board.demoteCount} move down after the week ends. Tied XP shares a rank.`:'Promotion starts with at least 5 learners in your group. For now, everyone keeps their tier.'}</p>`}</section>`:''}
 <section class="card social-board"><div class="social-section-heading"><div><h2>${league?h(board?.league||'League')+' standings':state.scope==='friends'?'Your friends’ weekly board':'Community weekly board'}</h2><p>Week of ${h(board?.week.week||o.week.week)} · Ends ${date(board?.week.end||o.week.end)}</p></div>${board?.myRank?tag('Your rank #'+board.myRank):''}</div>${league&&!o.profile.leagueEnabled?empty('Ready when you are','Join the leagues above to get your own weekly group.'):rankingTable(board?.rows||[],league?board||{}:{})}</section>`;
}
function challengeCard(challenge){
 const own=challenge.participants.find(user=>user.id===account.user.id),active=challenge.state==='active',team=challenge.mode==='team';
 const winnerNames=challenge.participants.filter(user=>challenge.winners.includes(user.id)).map(user=>user.displayName);
 return `<article class="card social-challenge"><div class="social-section-heading"><div><span class="page-eyebrow">${team?'SHARED GOAL':'XP RACE'}</span><h3>${h(challenge.title)}</h3><p>Ends ${date(challenge.endsAt)}</p></div>${tag(challenge.achieved?'Goal achieved':challenge.state==='active'?challenge.myState==='invited'?'You’re invited':'In progress':challenge.state)}</div>
 ${team?`<div class="social-goal-number"><strong>${fmt(challenge.total)}</strong> / ${fmt(challenge.goal)} team XP</div><div class="progress-track" role="progressbar" aria-label="${h(challenge.title)} team goal" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${challenge.progress}"><div style="width:${challenge.progress}%"></div></div>`:`<p class="social-race-score">Your score <strong>${fmt(own?.xp||0)} XP</strong><span>Target ${fmt(challenge.goal)} XP · Highest score at the end wins.</span></p>`}
 <ul class="social-participant-list">${challenge.participants.slice(0,3).map(user=>`<li>${avatar(user)}<span>${h(user.displayName)}<small>${user.state==='joined'?'Learning together':h(user.state)}</small></span><b>${fmt(user.xp)} XP</b></li>`).join('')}</ul>
 ${winnerNames.length?`<p class="social-winner">${icon('trophy')} ${h(winnerNames.join(' & '))} ${winnerNames.length===1?'wins':'share the win'}!</p>`:challenge.state==='completed'&&!team?'<p class="tiny-note">No scored rounds this time. Try another small challenge.</p>':''}
 <div class="social-actions">${active&&challenge.myState==='invited'?button('JOIN','challenge-respond',`data-challenge-id="${challenge.id}" data-response="join"`,'primary')+button('DECLINE','challenge-respond',`data-challenge-id="${challenge.id}" data-response="decline"`):''}${button('FULL STANDINGS','challenge-detail',`data-challenge-id="${challenge.id}"`)}${active&&challenge.myState==='joined'&&challenge.creatorId!==account.user.id?button('LEAVE','challenge-respond',`data-challenge-id="${challenge.id}" data-response="leave"`):''}${active&&challenge.creatorId===account.user.id?state.confirm===challenge.id?button('YES, END IT','challenge-respond',`data-challenge-id="${challenge.id}" data-response="cancel"`)+button('KEEP GOING','confirm-clear'):button('END CHALLENGE','confirm-challenge',`data-challenge-id="${challenge.id}"`):''}</div>
 <p class="tiny-note">XP counts from joining until the challenge ends. Leaving freezes your contribution.</p></article>`;
}
function challengesView(o){
 return `<section class="card social-create"><div class="social-section-heading"><div><h2>A little challenge. A shared boost.</h2><p>Race for weekly XP or work together toward a shared goal.</p></div>${icon('target')}</div>${o.friends.length?`<form data-social-form="challenge"><label class="account-field"><span>Challenge name</span><input name="title" required maxlength="80" placeholder="Our seven-day learning sprint"></label><div class="social-form-grid"><label class="account-field"><span>Challenge type</span><select name="mode"><option value="race">XP race</option><option value="team">Shared goal</option></select></label><label class="account-field"><span>Duration</span><select name="days"><option value="1">1 day</option><option value="3">3 days</option><option value="7" selected>7 days</option></select></label><label class="account-field"><span>XP target</span><input name="goal" type="number" required min="100" max="10000" step="1" value="300"></label></div><fieldset class="social-invite-picker"><legend>Invite up to 10 friends</legend>${o.friends.map(user=>`<label class="check-label"><input type="checkbox" name="friendIds" value="${user.id}">${avatar(user)}<span>${h(user.displayName)} <small>@${h(user.username)}</small></span></label>`).join('')}</fieldset><p class="tiny-note">Friends choose whether to join. XP saved before joining is excluded.</p><button type="submit" class="btn primary" ${state.busy?'disabled':''}>CREATE & INVITE</button></form>`:empty('Start with a friend','Add a learning buddy in the Friends tab, then invite them to your first challenge.')}</section>
 <div class="social-section-heading"><div><h2>Your challenges</h2><p>Invitations, active goals and recent results.</p></div>${button('REFRESH','refresh')}</div>
 ${o.challenges.length?`<div class="social-challenge-grid">${o.challenges.map(challengeCard).join('')}</div>`:empty('Your first team adventure is waiting','Create a challenge above, or accept an invitation from a friend.')}
 ${state.detail?`<section class="card social-detail" id="social-detail"><div class="social-section-heading"><h2>${h(state.detail.title)} standings</h2>${button('CLOSE','detail-close')}</div>${rankingTable(state.detail.participants.filter(user=>['joined','left'].includes(user.state)))}<p class="tiny-note">${state.detail.mode==='team'?`Together: ${fmt(state.detail.total)} / ${fmt(state.detail.goal)} XP`:'Highest score at the end wins. Equal scores share the win.'}</p></section>`:''}`;
}
function activityView(o){
 const notificationText={'friend-request':'sent you a friend request','friend-accepted':'accepted your friend request','challenge-invite':'invited you to a challenge'};
 return `<section class="card"><div class="social-section-heading"><div><h2>Your updates</h2><p>Friend requests and challenge invitations.</p></div>${button('MARK ALL READ','notifications-read')}</div>${o.notifications.length?`<ul class="social-notifications">${o.notifications.map(item=>`<li class="${item.readAt?'':'is-unread'}">${icon(item.kind==='challenge-invite'?'trophy':'heart')}<div><b>${h(item.actorName||'A former learner')}</b> ${notificationText[item.kind]}.<small>${date(item.createdAt)}</small></div>${button('VIEW','tab',`data-tab="${item.kind==='challenge-invite'?'challenges':'friends'}"`)}</li>`).join('')}</ul>`:empty('You’re all caught up','Updates will appear here as your learning circle grows.')}</section><section class="card"><h2>Your friends’ small wins</h2><p class="tiny-note">New saved rounds from the last seven days.</p>${o.feed.length?`<ul class="social-notifications">${o.feed.map(item=>`<li>${avatar(item)}<div><b>${h(item.displayName)}</b> earned <strong>${fmt(item.xp)} XP</strong> in ${h(o.self.courses.find(course=>course.id===item.courseId)?.name||item.courseId)}.<small>${new Date(item.day).toLocaleDateString()}</small></div>${icon('bolt')}</li>`).join('')}</ul>`:empty('Cheer on your learning friends','Their saved learning activity will appear here after you become friends.')}</section>`;
}
async function perform(task,message){
 if(state.busy)return;const ticket=epoch;state.busy=true;state.error='';repaint();
 try{await task();if(ticket!==epoch)return;if(message)hooks.toast(message);await loadSocial(true);}
 catch(error){if(ticket===epoch){state.error=error.message;hooks.toast(error.message);}}
 finally{if(ticket===epoch){state.busy=false;repaint();}}
}
export function bindSocial(options){
 hooks=options;
 document.addEventListener('submit',event=>{
  const form=event.target.closest('[data-social-form]');if(!form)return;event.preventDefault();
  const values=new FormData(form);
  if(form.dataset.socialForm==='search'){
   state.query=String(values.get('q')).trim();perform(async()=>{state.results=(await request('search?q='+encodeURIComponent(state.query))).learners;});
  }else if(form.dataset.socialForm==='settings')perform(()=>request('settings',{discoverable:values.has('discoverable'),leagueEnabled:values.has('leagueEnabled')}),'Social preferences saved.');
  else if(form.dataset.socialForm==='challenge'){
   const body={title:String(values.get('title')),mode:String(values.get('mode')),days:Number(values.get('days')),goal:Number(values.get('goal')),friendIds:values.getAll('friendIds')};
   if(!body.friendIds.length){hooks.toast('Choose at least one friend to invite.');return;}
   perform(async()=>{await request('challenges/create',body);state.clearChallenge=true;},'Challenge created. Your friends can choose to join.');
  }
 });
 document.addEventListener('click',async event=>{
  const element=event.target.closest('[data-social]');if(!element||element.disabled)return;
  const action=element.dataset.social;
  if(action==='tab'){state.tab=element.dataset.tab;repaint();return;}
  if(action==='scope'){state.scope=element.dataset.scope;state.board=null;repaint();perform(async()=>{});return;}
  if(action==='refresh'){loadSocial();return;}
  if(action==='copy'){try{await navigator.clipboard.writeText(account.user.username);hooks.toast('Username copied: @'+account.user.username);}catch{hooks.toast('Your username is @'+account.user.username);}return;}
  if(action==='confirm-remove'){state.confirm=element.dataset.userId;repaint();return;}
  if(action==='confirm-challenge'){state.confirm=element.dataset.challengeId;repaint();return;}
  if(action==='confirm-clear'){state.confirm=null;repaint();return;}
  if(action==='compare-close'){state.compare=null;repaint();return;}
  if(action==='detail-close'){state.detail=null;repaint();return;}
  if(action==='friend-request')perform(async()=>{await request('friends/request',{userId:element.dataset.userId});state.results=null;},'Friend request sent.');
  else if(action==='friend-respond')perform(async()=>{await request('friends/respond',{userId:element.dataset.userId,response:element.dataset.response});state.confirm=null;state.results=null;state.compare=null;},element.dataset.response==='accept'?'You’re now learning friends.':'Friend list updated.');
  else if(action==='compare')await perform(async()=>{state.compare=await request('compare?userId='+element.dataset.userId);});
  else if(action==='join-league'){state.scope='league';perform(()=>request('settings',{leagueEnabled:true}),'Welcome to the leagues.');}
  else if(action==='challenge-respond')perform(async()=>{await request('challenges/respond',{challengeId:element.dataset.challengeId,response:element.dataset.response});state.confirm=null;state.detail=null;},element.dataset.response==='join'?'You joined. Your next saved round counts.':'Challenge updated.');
  else if(action==='challenge-detail')await perform(async()=>{state.detail=await request('challenges/detail?id='+element.dataset.challengeId);});
  else if(action==='notifications-read')perform(()=>request('notifications/read',{}),'Updates marked as read.');
  if(action==='compare')document.querySelector('#social-comparison')?.scrollIntoView({block:'start',behavior:'auto'});
  if(action==='challenge-detail')document.querySelector('#social-detail')?.scrollIntoView({block:'start',behavior:'auto'});
 });
 setInterval(()=>{if(document.querySelector('[data-social-root]')&&!document.hidden&&!state.busy&&!document.activeElement?.closest('[data-social-form]'))loadSocial();},30000);
}
