// 把详细菜谱挂到已有做法上，有详细菜谱的排在最前面
window.ADD_RECIPES = function(R){
  const byId = Object.fromEntries(window.FOODS.map(f => [f.id, f]));
  for (const [key, rec] of Object.entries(R)) {
    const [id, name] = key.split("|");
    const d = byId[id] && byId[id].dishes.find(x => x.n === name);
    if (!d) throw new Error("no dish " + key);
    Object.assign(d, rec);
    byId[id].dishes.sort((a, b) => (b.steps ? 1 : 0) - (a.steps ? 1 : 0));
  }
};

// 翻译：ADD_I18N("ja", { 食材id: { tip, warn, d: { "中文菜名": { n, h, serves, time, steps, tips, ingT, sauceT } } } })
// ingT / sauceT 与原 ing / sauce 逐行对应，每行 [名称, 用量]
window.ADD_I18N = function(lang, M){
  const byId = Object.fromEntries(window.FOODS.map(f => [f.id, f]));
  for (const [id, m] of Object.entries(M)) {
    const f = byId[id]; if (!f) throw new Error("i18n: no food " + id);
    const { d: dishes, ...rest } = m;
    if (Object.keys(rest).length) (f.i18n = f.i18n || {})[lang] = rest;
    for (const [name, tx] of Object.entries(dishes || {})) {
      const d = f.dishes.find(x => x.n === name);
      if (!d) throw new Error("i18n: no dish " + id + "|" + name);
      (d.i18n = d.i18n || {})[lang] = Object.assign(d.i18n[lang] || {}, tx);
    }
  }
};
