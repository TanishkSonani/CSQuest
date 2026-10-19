const paths={
 'player-play':'<path d="m8 5 11 7-11 7z" fill="currentColor" stroke="none"/>',
 'player-pause':'<rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none"/>',
 'player-stop':'<rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor" stroke="none"/>',
 'skip-back':'<path d="m10 5-7 7 7 7m10-14-7 7 7 7"/>',
 'skip-forward':'<path d="m4 5 7 7-7 7m10-14 7 7-7 7"/>',
 'player-fullscreen':'<path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6"/>',
 'player-exit-fullscreen':'<path d="M3 9h6V3m6 0v6h6M9 21v-6H3m12 6v-6h6"/>',
 'player-pip':'<rect x="2" y="4" width="20" height="16" rx="2"/><rect x="12" y="11" width="8" height="7" rx="1" fill="currentColor" stroke="none"/>',
 folder:'<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10H3z"/>',
 drive:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 13h18m-5 3h2"/><circle cx="7" cy="16" r="1"/>',
 refresh:'<path d="M20 7v5h-5M4 17v-5h5m-4-4a8 8 0 0 1 13-3l2 3M4 16l2 3a8 8 0 0 0 13-3"/>',
 upload:'<path d="M12 16V3m-5 5 5-5 5 5M4 16v5h16v-5"/>',
 video:'<rect x="3" y="4" width="18" height="16" rx="3"/><path d="m10 8 6 4-6 4z"/>',
 file:'<path d="M5 2h9l5 5v15H5zM14 2v6h5M8 13h8m-8 4h6"/>',
 moon:'<path d="M21 13a9 9 0 0 1-10-10 9 9 0 1 0 10 10z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>',
 chip:'<rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4"/><path d="M9 9h6v6H9z"/>',
 book:'<path d="M3 4h7a2 2 0 0 1 2 2v15a4 4 0 0 0-4-2H3zm18 0h-7a2 2 0 0 0-2 2v15a4 4 0 0 1 4-2h5z"/>',
 bolt:'<path d="m13 2-9 12h7l-1 8 10-13h-7z"/>',
 heart:'<path d="M20 4c-3-2-6 0-8 3C10 4 7 2 4 4c-6 4 0 11 8 17 8-6 14-13 8-17z"/>',
 flame:'<path d="M13 2c1 6-5 6-5 11-2-1-2-3-2-4-6 8-2 13 6 13s12-8 1-20z"/><path d="M12 13c-4 5-1 8 2 6 2-2 0-3-2-6z"/>',
 star:'<path d="m12 2 3 6 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1z"/>',
 check:'<path d="m5 12 4 4L20 5"/>',
 lock:'<rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
 map:'<path d="m3 5 6-3 6 3 6-3v17l-6 3-6-3-6 3zm6-3v17m6-14v17"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 trophy:'<path d="M7 3h10v8a5 5 0 0 1-10 0zm0 2H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4m-5 4v5m-5 0h10"/>',
 chest:'<path d="M3 10h18v11H3zm0 0V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2"/><rect x="10" y="9" width="4" height="6" rx="1"/>',
 memory:'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 18v3m4-3v3m4-3v3m4-3v3M6 10h3v4H6zm9 0h3v4h-3z"/>',
 code:'<path d="m8 5-6 7 6 7m8-14 6 7-6 7m-2-16-4 18"/>',
 binary:'<path d="M4 5h5v14H4zm11 0h3v14m-3 0h6"/>',
 rocket:'<path d="M9 16 4 20l1-6m4 2c-2-8 5-13 12-13 0 7-5 14-13 12zm1-7-6-1-2 5 5 1m8 0 1 6-5 2-1-5"/><circle cx="16" cy="8" r="2"/>',
 arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
 chevron:'<path d="m9 5 7 7-7 7"/>',
 close:'<path d="m5 5 14 14M19 5 5 19"/>',
 settings:'<path d="m9 3-1 3-3 1v3l-2 2 2 2v3l3 1 1 3h6l1-3 3-1v-3l2-2-2-2V7l-3-1-1-3z"/><circle cx="12" cy="12" r="3"/>',
 pencil:'<path d="m15 5 4 4M4 20l4-.8L19 8a2.8 2.8 0 0 0-4-4L4 15z"/><path d="M13.5 5.5 18.5 10.5"/>',
 sound:'<path d="M3 9h4l5-5v16l-5-5H3zm13-2a7 7 0 0 1 0 10m3-13a11 11 0 0 1 0 16"/>',
 search:'<circle cx="10" cy="10" r="7"/><path d="m15 15 7 7"/>',
 play:'<path d="m7 3 14 9-14 9z"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
 download:'<path d="M12 2v13m-5-5 5 5 5-5M4 17v5h16v-5"/>',
 leaf:'<path d="M20 3C6 1 0 10 6 17s17 1 14-14zM5 20 15 8"/>',
 bell:'<path d="M5 16V9a7 7 0 0 1 14 0v7l2 3H3zm5 6h4"/>'
};
export const icon=(name,cls='')=>`<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.star}</svg>`;
let mascotId=0;
export function mascot(expression='happy',className=''){
 const state=({happy:'idle',sad:'encouraging',thinking:'thinking',welcome:'welcome',celebrate:'celebrate',encouraging:'encouraging'})[expression]||'idle',id='byte-'+(++mascotId);
 const mouth=state==='thinking'?'M94 111q8-5 16 0':state==='encouraging'?'M88 107q12 10 24 0':'M85 103q15 24 30 0';
 return `<svg class="mascot byte-mascot ${className}" data-mascot-state="${state}" viewBox="0 0 200 210" role="img" aria-label="Byte, your friendly circuit learning buddy"><defs><linearGradient id="${id}-shell" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#aff75b"/><stop offset=".45" stop-color="#75da21"/><stop offset="1" stop-color="#42ad0b"/></linearGradient><linearGradient id="${id}-edge" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#52b923"/><stop offset="1" stop-color="#247838"/></linearGradient><linearGradient id="${id}-screen" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fffff6"/><stop offset="1" stop-color="#def5d8"/></linearGradient><linearGradient id="${id}-shoe" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#aa8cff"/><stop offset="1" stop-color="#6851c5"/></linearGradient></defs><ellipse class="byte-shadow" cx="101" cy="194" rx="48" ry="8" fill="#173b32" opacity=".15"/><g class="buddy-body byte-body"><g class="byte-left-arm"><path d="M43 97 26 104 18 90" fill="none" stroke="#32983d" stroke-width="12" stroke-linecap="round"/><circle cx="17" cy="88" r="9" fill="url(#${id}-shell)"/><path d="m12 85 4 1" stroke="#ccff9c" stroke-width="3" stroke-linecap="round"/></g><g class="byte-right-arm"><path d="m157 96 19 4 6-22" fill="none" stroke="#32983d" stroke-width="12" stroke-linecap="round"/><circle cx="183" cy="75" r="10" fill="url(#${id}-shell)"/><path d="m179 70 5 2" stroke="#ccff9c" stroke-width="3" stroke-linecap="round"/></g><g class="byte-feet"><path d="m77 155-5 21m53-21 5 21" stroke="#387842" stroke-width="9" stroke-linecap="round"/><path d="M58 183c0-10 7-15 16-14 9 1 13 9 12 18-1 8-28 7-28-4m59 4c-1-9 4-17 12-18 9-1 16 4 16 14 0 11-27 12-28 4" fill="url(#${id}-shoe)"/><path d="m62 188 19 1m41 0 18-1" stroke="#5742a1" stroke-width="3" stroke-linecap="round"/></g><path d="M98 42V24" stroke="#40993a" stroke-width="7"/><circle class="byte-antenna" cx="98" cy="17" r="10" fill="#c6f75f" stroke="#6dc638" stroke-width="3"/><circle cx="95" cy="14" r="3" fill="#ffffd7"/><rect x="39" y="39" width="128" height="128" rx="35" fill="url(#${id}-edge)"/><rect x="33" y="32" width="127" height="126" rx="34" fill="url(#${id}-shell)"/><path d="M45 54c5-10 14-15 28-15" fill="none" stroke="#d2ff9b" stroke-width="5" stroke-linecap="round"/><path d="M150 63v53c0 20-10 29-25 30" stroke="#2f9034" stroke-width="4" fill="none" opacity=".35" stroke-linecap="round"/><rect x="46" y="58" width="102" height="72" rx="25" fill="#388f3a" opacity=".42"/><rect x="45" y="54" width="101" height="73" rx="24" fill="url(#${id}-screen)"/><g class="byte-brows" fill="none" stroke="#344f49" stroke-width="3.5" stroke-linecap="round"><path d="M65 72q8-5 17-1m34 0q8-4 16 1"/></g><g class="byte-eyes"><ellipse cx="74" cy="88" rx="9" ry="12" fill="#24493f"/><ellipse cx="124" cy="88" rx="9" ry="12" fill="#24493f"/><ellipse cx="76" cy="85" rx="3" ry="4" fill="#fff"/><ellipse cx="126" cy="85" rx="3" ry="4" fill="#fff"/></g><ellipse cx="61" cy="103" rx="7" ry="4" fill="#f6a5ae" opacity=".8"/><ellipse cx="137" cy="103" rx="7" ry="4" fill="#f6a5ae" opacity=".8"/><path d="${mouth}" fill="${state==='thinking'||state==='encouraging'?'none':'#26473e'}" stroke="#26473e" stroke-width="3" stroke-linecap="round"/>${state==='thinking'||state==='encouraging'?'':'<path d="M90 107q10 4 20 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'}<path d="M58 141h15l5 6h15m15 0h13l7-6h14" fill="none" stroke="#2b8e39" stroke-width="3" stroke-linecap="round"/><circle cx="97" cy="145" r="6" fill="#d3ff87"/><circle cx="97" cy="145" r="2.5" fill="#57bb26"/><circle cx="57" cy="141" r="3" fill="#caff94"/><circle cx="143" cy="141" r="3" fill="#caff94"/></g></svg>`;
}
