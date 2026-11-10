// 三语一次写完的食材（肉类、蔬菜等家常食材用）。ADD_TRI([...食材]) 转成和其他文件一样的格式。
// 食材: {id,cat,zh,ja,kana,romaji,en,aka,season,tip:[中,日,英],warn?:[中,日,英],dishes:[菜]}
// 菜: {r 地区, n:[中,日,英], o 当地名, h:[一句话简介], s 份量, m 分钟, x?:[另需…], lv 难度,
//      ing:[[中名,日名(=超市叫法),英名,用量]], sauce:同上, st:[[步骤中,日,英]], tp:[[要点中,日,英]]}
// 用量：普通字符串三语通用；"T2"=2 大勺，"t1/2"=1/2 小勺，"~"=适量，"-"=少许；三语不同时写 [中,日,英]
window.ADD_TRI = function(list){
  const amt = (a, i) => {
    if (Array.isArray(a)) return a[i];
    const m = String(a).match(/^([Tt])(.+)$/);
    if (m) return m[1] === "T" ? [`${m[2]} 大勺`, `大さじ${m[2]}`, `${m[2]} tbsp`][i] : [`${m[2]} 小勺`, `小さじ${m[2]}`, `${m[2]} tsp`][i];
    if (a === "~") return ["适量", "適量", "to taste"][i];
    if (a === "-") return ["少许", "少々", "a pinch"][i];
    return a;
  };
  const time = (m, x, i) => {
    const h = Math.floor(m / 60), r = m % 60;
    const base = [
      h ? `${h} 小时${r ? ` ${r} 分钟` : ""}` : `${m} 分钟`,
      h ? `${h}時間${r ? `${r}分` : ""}` : `${m}分`,
      h ? `${h} hr${r ? ` ${r} min` : ""}` : `${m} min`
    ][i];
    return x ? base + [`（${x[0]}）`, `（${x[1]}）`, ` (${x[2]})`][i] : base;
  };
  const rows = (R, i) => (R || []).map(r => [r[i], amt(r[3], i)]);
  for (const f of list) {
    const { tip, warn, dishes, ...rest } = f;
    const food = { ...rest, tip: tip && tip[0], dishes: [] };
    if (warn) food.warn = warn[0];
    food.i18n = { ja: { tip: tip && tip[1] }, en: { tip: tip && tip[2] } };
    if (warn) { food.i18n.ja.warn = warn[1]; food.i18n.en.warn = warn[2]; }
    for (const d of dishes) {
      const one = i => ({ n: d.n[i], h: d.h[i], serves: d.s, time: time(d.m, d.x, i),
        ingT: rows(d.ing, i), sauceT: rows(d.sauce, i), steps: d.st.map(s => s[i]), tips: d.tp.map(s => s[i]) });
      food.dishes.push({ r: d.r, n: d.n[0], o: d.o || d.n[0], h: d.h[0], serves: d.s, time: time(d.m, d.x, 0), level: d.lv,
        ing: d.ing.map(r => [r[0], amt(r[3], 0), r[4] || r[1]]), sauce: (d.sauce || []).map(r => [r[0], amt(r[3], 0), r[4] || r[1]]),
        steps: d.st.map(s => s[0]), tips: d.tp.map(s => s[0]), i18n: { ja: one(1), en: one(2) } });
    }
    window.FOODS.push(food);
  }
};
