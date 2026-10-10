import {avatars,avatarCategories} from '/shared/avatars.js';
import {escapeHtml as h} from '/shared/engine.js';
import {icon} from './icons.js';
export function avatarMarkup(id,decorative=false){
 const avatar=avatars.find(a=>a.id===id)||avatars.find(a=>a.id==='chip');
 if(avatar.icon)return icon(avatar.icon);
 const x=(avatar.tile%4)*100/3,y=Math.floor(avatar.tile/4)*100/3;
 return `<span class="avatar-sprite" style="--avatar-x:${x}%;--avatar-y:${y}%" ${decorative?'aria-hidden="true"':`role="img" aria-label="${h(avatar.name)}"`}></span>`;
}
export function avatarPicker(selected='male-curly'){
 return `<fieldset class="avatar-picker"><legend>Choose your character</legend><p class="tiny-note">A little personality for your learning adventure.</p><label class="avatar-category-label">Avatar category<select data-avatar-filter>${avatarCategories.map(([id,label])=>`<option value="${id}">${label}</option>`).join('')}</select></label><div class="avatar-grid">${avatars.map(avatar=>`<label class="avatar-option" data-avatar-category="${avatar.category}"><input type="radio" name="avatar" value="${avatar.id}" ${avatar.id===selected?'checked':''} required><span class="avatar-preview">${avatarMarkup(avatar.id,true)}</span><strong>${h(avatar.name)}</strong><span class="avatar-selected">${icon('check')} Selected</span></label>`).join('')}</div><p class="avatar-selection-summary" role="status">Selected: ${h(avatars.find(a=>a.id===selected)?.name||'Curly-haired learner')}</p><p class="tiny-note">Clash of Clans character fan art. CSQuest is an independent learning app.</p></fieldset>`;
}
export function avatarDrilldown(selected='male-curly'){
 const current=avatars.find(a=>a.id===selected)||avatars[0];
 return `<fieldset class="avatar-picker avatar-drilldown"><legend>Your character</legend><div class="avatar-current-choice"><span class="avatar-preview">${avatarMarkup(current.id,true)}</span><div><b>${h(current.name)}</b><small>Current avatar</small></div></div><label class="avatar-category-label">Choose a category<select data-avatar-category-select>${avatarCategories.filter(([id])=>id!=='all').map(([id,label])=>`<option value="${id}" ${id===current.category?'selected':''}>${label}</option>`).join('')}</select></label><button class="btn secondary avatar-browse-button" type="button" data-avatar-browse>${icon('search')} BROWSE AVATARS</button><div class="avatar-drilldown-results" hidden><div class="avatar-results-heading"><button class="auth-link" type="button" data-avatar-back>${icon('arrow')} CATEGORIES</button><span data-avatar-category-title></span></div><div class="avatar-grid">${avatars.map(avatar=>`<label class="avatar-option" data-avatar-category="${avatar.category}" hidden><input type="radio" name="avatar" value="${avatar.id}" ${avatar.id===selected?'checked':''} required><span class="avatar-preview">${avatarMarkup(avatar.id,true)}</span><strong>${h(avatar.name)}</strong><span class="avatar-selected">${icon('check')} Selected</span></label>`).join('')}</div><p class="avatar-selection-summary" role="status">Selected: ${h(current.name)}</p></div><p class="tiny-note">Choose a category to see its characters.</p></fieldset>`;
}
document.addEventListener('change',e=>{
 if(e.target.matches('[data-avatar-filter]')){const picker=e.target.closest('.avatar-picker');picker.querySelectorAll('[data-avatar-category]').forEach(el=>el.hidden=e.target.value!=='all'&&el.dataset.avatarCategory!==e.target.value);}
 if(e.target.matches('.avatar-picker [name=avatar]')){const picker=e.target.closest('.avatar-picker');picker.querySelector('.avatar-selection-summary').textContent='Selected: '+avatars.find(a=>a.id===e.target.value).name;}
 if(e.target.matches('[data-avatar-category-select]')){const picker=e.target.closest('.avatar-drilldown'),id=e.target.value;picker.querySelector('[data-avatar-category-title]').textContent=avatarCategories.find(([key])=>key===id)?.[1]||'Avatars';picker.querySelectorAll('.avatar-option').forEach(card=>card.hidden=card.dataset.avatarCategory!==id);}
});
document.addEventListener('click',e=>{
 const browse=e.target.closest('[data-avatar-browse]');
 if(browse){const picker=browse.closest('.avatar-drilldown'),select=picker.querySelector('[data-avatar-category-select]');select.dispatchEvent(new Event('change',{bubbles:true}));picker.querySelector('.avatar-drilldown-results').hidden=false;browse.hidden=true;picker.querySelector('.avatar-category-label').hidden=true;picker.querySelector('.avatar-option:not([hidden]) input')?.focus({preventScroll:true});return;}
 const back=e.target.closest('[data-avatar-back]');
 if(back){const picker=back.closest('.avatar-drilldown');picker.querySelector('.avatar-drilldown-results').hidden=true;picker.querySelector('[data-avatar-browse]').hidden=false;picker.querySelector('.avatar-category-label').hidden=false;picker.querySelector('[data-avatar-category-select]').focus({preventScroll:true});}
});
