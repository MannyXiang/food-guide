global.window={};require(process.argv[2]);
const F=window.FOODS,errs=[];const ids=new Set(),names={};
for(const f of F){ if(ids.has(f.id))errs.push('dup id '+f.id); ids.add(f.id);
 if(!/^[a-z0-9-]+$/.test(f.id))errs.push('bad id '+f.id);
 for(const k of ['cat','zh','ja','kana','romaji','en'])if(!f[k])errs.push(f.id+' missing '+k);
 if(!window.CATS[f.cat])errs.push(f.id+' bad cat');
 for(const d of f.dishes){if(!window.REGIONS[d.r])errs.push(f.id+' bad region '+d.r); if(!d.n||!d.o||!d.h)errs.push(f.id+' dish missing')}
 (names[f.zh]=names[f.zh]||[]).push(f.id);
 (f.season||[]).forEach(m=>{if(m<1||m>12)errs.push(f.id+' month')});
}
for(const [k,v] of Object.entries(names))if(v.length>1)errs.push('dup zh '+k+' '+v);
const c={};F.forEach(f=>c[f.cat]=(c[f.cat]||0)+1);
console.log(F.length,JSON.stringify(c),F.reduce((a,f)=>a+f.dishes.length,0),'dishes');console.log(errs.join('\n')||'ok');
// recipe + translation consistency
const untr=new Set();
for(const f of F)for(const d of f.dishes){ if(!d.steps)continue;
 for(const k of ['serves','time','ing','sauce','tips'])if(d[k]==null)errs.push(f.id+'|'+d.n+' missing '+k);
 for(const L of ['ja','en']){const t=d.i18n&&d.i18n[L]; if(!t){untr.add(f.id+'|'+d.n);continue}
  if(!t.steps){untr.add(f.id+'|'+d.n);continue}
  if(!t.steps||t.steps.length!==d.steps.length)errs.push(f.id+'|'+d.n+' '+L+' steps');
  if(!t.ingT||t.ingT.length!==d.ing.length)errs.push(f.id+'|'+d.n+' '+L+' ingT');
  if(!t.sauceT||t.sauceT.length!==(d.sauce||[]).length)errs.push(f.id+'|'+d.n+' '+L+' sauceT');
  if(!t.tips||t.tips.length!==d.tips.length)errs.push(f.id+'|'+d.n+' '+L+' tips');
  if(!t.serves||!t.time)errs.push(f.id+'|'+d.n+' '+L+' serves/time');}}
if(errs.length)console.log(errs.join('\n'));console.log('recipes',F.reduce((a,f)=>a+f.dishes.filter(d=>d.steps).length,0),'untranslated',untr.size);
