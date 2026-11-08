// 「今天吃什么」家常菜规则
// 自动规则（index.html 里的 isHome）：食材有应季月份、难度 1–2、总用时 1 小时以内、不需要提前几天准备。
// 下面是人工排除的菜："食材id|中文菜名"。排除理由：宴席/餐厅菜、需要特殊工具或执照、太贵、调料/高汤/甜品/饮料而不是一道菜。
window.NOT_HOME = [
 "salmon|雪松板烤三文鱼",
 "kombu|昆布高汤", "katakuchi|小鱼干高汤", "enoki|自制滑菇酱", "tarako|明太鱼子酱",
 "tengusa|寒天甜品", "tengusa|心太凉粉", "kaki-fruit|柿饼桂皮茶",
 "crayfish|瑞典小龙虾派对", "koi|波兰圣诞鲤鱼", "nishin|荷兰生鲱鱼",
 "mirugai|象拔蚌刺身", "mirugai|西雅图象拔蚌",
 "tarabagani|烤帝王蟹脚", "tarabagani|芝士焗帝王蟹", "tarabagani|螃蟹火锅", "tarabagani|阿拉斯加蟹脚",
 "fugu|河豚火锅", "fugu|河豚刺身", "fugu|炸河豚",
 "hata|九绘火锅", "ikura|俄式布林饼配鱼子",
 "karasumi|撒丁岛乌鱼子面", "karasumi|烤乌鱼子", "karasumi|乌鱼子年糕",
 "awabi|鲍鱼水贝", "namako|醋海参", "namako|海参小米粥",
 "hoya|海鞘刺身", "hoya|海鞘拌饭",
 "nodoguro|喉黑炙烤寿司", "kinmedai|炙烤金目鲷寿司", "shako|虾蛄寿司", "torigai|鸟贝寿司",
 "hirame|牙鲆薄造", "tanishi|螺蛳粉", "tanishi|越南田螺粉", "torigai|英式醋泡鸟蛤",
 "suzuki|冰镇鲈鱼", "bora|鲻鱼冰镇"
];
