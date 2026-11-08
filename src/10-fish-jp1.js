// 鱼类 1：日本超市常见（青背鱼、鰤类、比目鱼等）
window.FOODS.push(
{id:"aji",cat:"fish",zh:"竹荚鱼",ja:"鯵",kana:"あじ",romaji:"aji",en:"Horse mackerel",aka:["真鯵","マアジ","アジ","巴浪鱼","jack mackerel","鰺"],latin:"Trachurus japonicus",season:[5,6,7],
 tip:"身体侧线上有一排硬鳞（ぜいご），处理时要削掉。超市常卖已开背的「開き」干货。",
 warn:"生吃（刺身、たたき）注意异尖线虫，选「刺身用」。",
 dishes:[
  {r:"jp",n:"炸竹荚鱼",o:"アジフライ",h:"开背去骨，撒盐胡椒，裹面粉、蛋液、面包糠炸，配卷心菜丝和酱汁。"},
  {r:"jp",n:"竹荚鱼拍松",o:"アジのたたき",h:"刺身级鱼肉切碎，拌姜、葱、紫苏，配酱油。"},
  {r:"jp",n:"南蛮渍",o:"アジの南蛮漬け",h:"小鱼裹淀粉炸，趁热泡进醋、酱油、糖和洋葱胡萝卜丝中，冷藏半天。"},
  {r:"eu",n:"葡式烤竹荚鱼",o:"Carapaus grelhados",h:"整条抹粗盐炭烤，配水煮土豆和橄榄油洋葱沙拉。"}
 ]},
{id:"iwashi",cat:"fish",zh:"沙丁鱼",ja:"鰯",kana:"いわし",romaji:"iwashi",en:"Sardine",aka:["真鰯","マイワシ","イワシ","sardine","pilchard"],latin:"Sardinops melanostictus",season:[6,7,8,9,10],
 tip:"不新鲜很快。鳞容易掉，买鱼身闪亮、眼睛不浑浊的。可以直接用手指开膛去骨（手開き）。",
 dishes:[
  {r:"jp",n:"梅干煮沙丁鱼",o:"いわしの梅煮",h:"去头去内脏，与梅干、姜、酱油、酒、糖一起煮 15 分钟，骨头也能变软。"},
  {r:"jp",n:"沙丁鱼丸汤",o:"いわしのつみれ汁",h:"鱼肉剁成泥，加味噌、姜、淀粉做丸子，放进高汤煮，加萝卜和葱。"},
  {r:"eu",n:"葡式烤沙丁鱼",o:"Sardinhas assadas",h:"整条抹粗盐炭烤，放在面包片上吃，是里斯本夏天的节日菜。"},
  {r:"eu",n:"西西里沙丁鱼意面",o:"Pasta con le sarde",h:"沙丁鱼和茴香、洋葱、葡萄干、松子、藏红花一起炒，拌意面，撒烤面包屑。"}
 ]},
{id:"katakuchi",cat:"fish",zh:"鳀鱼",ja:"片口鰯",kana:"かたくちいわし",romaji:"katakuchiiwashi",en:"Japanese anchovy",aka:["凤尾鱼","カタクチイワシ","anchovy","煮干し","いりこ","鳀"],latin:"Engraulis japonicus",season:[6,7,8,9],
 tip:"做高汤用的「煮干し／いりこ」就是这种鱼的幼鱼煮干。西餐的油浸凤尾鱼（アンチョビ）是欧洲鳀。",
 dishes:[
  {r:"jp",n:"小鱼干高汤",o:"煮干し出汁",h:"去头和内脏，冷水泡 30 分钟后小火煮 5 分钟，过滤，做味噌汤。"},
  {r:"kr",n:"炒小银鱼干",o:"멸치볶음",h:"小鳀鱼干干炒去腥，加酱油、糖稀、蒜和芝麻快炒，是常备小菜。"},
  {r:"eu",n:"西班牙醋腌鳀鱼",o:"Boquerones en vinagre",h:"鱼排泡醋和盐一夜，沥干后淋橄榄油、蒜和欧芹。"},
  {r:"sea",n:"马来椰浆饭配炸江鱼仔",o:"Nasi lemak",h:"椰浆煮饭，配炸小鳀鱼、花生、煮蛋、黄瓜和参巴辣椒酱。"}
 ]},
{id:"shirasu",cat:"fish",zh:"银鱼仔",ja:"しらす",kana:"しらす",romaji:"shirasu",en:"Whitebait (baby sardines)",aka:["シラス","吻仔鱼","魩仔魚","ちりめんじゃこ","釜揚げしらす","生しらす"],season:[3,4,5,9,10],
 tip:"沙丁鱼或鳀鱼的幼鱼。「釜揚げ」是盐水煮过的软的，「ちりめんじゃこ」是晒干的，「生しらす」只在产地当天卖。",
 dishes:[
  {r:"jp",n:"银鱼仔盖饭",o:"しらす丼",h:"热饭上铺满釜扬银鱼仔，放葱、海苔、姜泥和一个蛋黄，淋酱油。"},
  {r:"jp",n:"萝卜泥拌银鱼",o:"しらすおろし",h:"萝卜泥沥水，放上银鱼仔，淋柚子醋或酱油。"},
  {r:"cn",n:"吻仔鱼粥",o:"魩仔魚粥",h:"白粥煮好，加入吻仔鱼、姜丝和芹菜末煮 1 分钟，撒白胡椒。"}
 ]},
{id:"buri",cat:"fish",zh:"鰤鱼",ja:"鰤",kana:"ぶり",romaji:"buri",en:"Japanese amberjack / Yellowtail",aka:["青甘","五条鰤","ブリ","ハマチ","イナダ","ワラサ","hamachi","yellowtail","寒鰤"],latin:"Seriola quinqueradiata",season:[12,1,2],
 tip:"出世鱼，随大小改名：ワカシ→イナダ（関西ハマチ）→ワラサ→ブリ。冬天的「寒ブリ」最肥。养殖的常叫ハマチ。",
 dishes:[
  {r:"jp",n:"照烧鰤鱼",o:"ぶりの照り焼き",h:"鱼块撒盐去水，裹薄粉煎两面，加酱油、味醂、酒、糖收汁到发亮。"},
  {r:"jp",n:"鰤鱼萝卜",o:"ぶり大根",h:"鱼头鱼骨（あら）焯水，和萝卜一起用酒、糖、酱油、姜炖 30 分钟。"},
  {r:"jp",n:"鰤鱼涮锅",o:"ぶりしゃぶ",h:"刺身级鱼片在昆布高汤里涮几秒，配水菜，蘸柚子醋。"}
 ]},
{id:"kanpachi",cat:"fish",zh:"高体鰤",ja:"間八",kana:"かんぱち",romaji:"kanpachi",en:"Greater amberjack",aka:["红甘","カンパチ","amberjack"],latin:"Seriola dumerili",season:[6,7,8,9],
 tip:"比鰤鱼油脂少、肉更紧，夏天是旺季，刺身很受欢迎。",
 dishes:[
  {r:"jp",n:"高体鰤刺身",o:"カンパチの刺身",h:"去皮切厚片，配萝卜丝和紫苏叶，蘸酱油和山葵。"},
  {r:"jp",n:"芝麻鰤鱼",o:"ごまカンパチ",h:"刺身片拌芝麻酱、酱油、味醂，放热饭上，最后可以浇茶做茶泡饭。"},
  {r:"am",n:"夏威夷生鱼片",o:"Kampachi crudo",h:"薄片铺盘，淋柑橘汁、橄榄油，撒海盐和辣椒圈。"}
 ]},
{id:"hirame",cat:"fish",zh:"牙鲆",ja:"鮃",kana:"ひらめ",romaji:"hirame",en:"Olive flounder (fluke)",aka:["比目鱼","偏口鱼","ヒラメ","縁側","エンガワ","halibut","fluke"],latin:"Paralichthys olivaceus",season:[11,12,1,2],
 tip:"「左ヒラメ右カレイ」：眼睛在左边的是牙鲆，在右边的是鲽鱼。鳍边肉「エンガワ」是寿司名物。",
 dishes:[
  {r:"jp",n:"牙鲆薄造",o:"ヒラメの薄造り",h:"刺身切成透明的薄片铺成花形，配细葱和红叶萝卜泥，蘸柚子醋。"},
  {r:"jp",n:"昆布腌牙鲆",o:"ヒラメの昆布締め",h:"鱼片夹在用酒擦过的昆布中，冷藏半天，鲜味会渗进鱼肉。"},
  {r:"kr",n:"韩式生鱼片",o:"광어회",h:"韩国最常见的生鱼片，配生菜、蒜片、青辣椒，蘸醋辣椒酱。"}
 ]},
{id:"karei",cat:"fish",zh:"鲽鱼",ja:"鰈",kana:"かれい",romaji:"karei",en:"Flounder / Righteye flounder",aka:["カレイ","真鰈","子持ちカレイ","flounder","plaice"],latin:"Pleuronectidae",season:[11,12,1,2,3],
 tip:"「子持ちカレイ」是带鱼卵的，冬天常见，红烧最好吃。",
 dishes:[
  {r:"jp",n:"红烧鲽鱼",o:"カレイの煮付け",h:"鱼身划十字刀，水、酒、酱油、糖、姜煮开后放鱼，盖落盖煮 10 分钟。"},
  {r:"jp",n:"炸鲽鱼",o:"カレイの唐揚げ",h:"小鲽鱼整条裹淀粉，低温炸透再高温炸脆，连骨头都能吃。"},
  {r:"eu",n:"黄油煎鲽鱼",o:"Plaice meunière",h:"鱼排拍面粉，用黄油煎到金黄，加柠檬汁和欧芹做酱。"}
 ]},
{id:"sawara",cat:"fish",zh:"马鲛鱼",ja:"鰆",kana:"さわら",romaji:"sawara",en:"Japanese Spanish mackerel",aka:["鲅鱼","蓝点马鲛","サワラ","サゴシ","Spanish mackerel"],latin:"Scomberomorus niphonius",season:[12,1,2,3,4],
 tip:"汉字带「春」，关西春天吃，关东冬天的「寒鰆」更肥。肉软易碎，适合腌后烤。小的叫サゴシ。",
 dishes:[
  {r:"jp",n:"西京烧鰆鱼",o:"鰆の西京焼き",h:"鱼块抹盐后用白味噌、酒、味醂腌 1–2 天，擦掉味噌小火烤。"},
  {r:"cn",n:"鲅鱼饺子",o:"鲅鱼水饺",h:"鱼肉剁泥，边搅边加花椒水，拌韭菜和猪肥膘做馅包饺子。"},
  {r:"cn",n:"家常熏鱼",o:"熏鲅鱼",h:"鱼块用酱油料酒腌，炸至表面干香，趁热浸入糖醋酱油汁。"}
 ]},
{id:"hokke",cat:"fish",zh:"远东多线鱼",ja:"𩸽",kana:"ほっけ",romaji:"hokke",en:"Okhotsk Atka mackerel",aka:["花鲫鱼","ホッケ","鯱","高度鱼","atka mackerel"],latin:"Pleurogrammus azonus",season:[9,10,11,12],
 tip:"日本居酒屋常见，几乎都是开背晒过的「ほっけの開き」，买来直接烤。",
 dishes:[
  {r:"jp",n:"烤𩸽开",o:"ほっけの開き焼き",h:"鱼皮面先朝下烤，再翻面烤肉面至微焦，配萝卜泥和酱油。"},
  {r:"jp",n:"𩸽鱼芝士烧",o:"ほっけのチーズ焼き",h:"开背鱼肉面铺奶酪和蛋黄酱，进烤箱烤到起泡。"},
  {r:"jp",n:"𩸽鱼茶泡饭",o:"ほっけ茶漬け",h:"烤好的鱼肉拆碎放米饭上，加海苔和山葵，浇热茶或高汤。"}
 ]},
{id:"nishin",cat:"fish",zh:"鲱鱼",ja:"鰊",kana:"にしん",romaji:"nishin",en:"Pacific herring",aka:["ニシン","herring","身欠きにしん","鯡"],latin:"Clupea pallasii",season:[3,4,5],
 tip:"日本常见干货「身欠きにしん」需要先用淘米水泡一天。鲱鱼卵就是数の子。",
 dishes:[
  {r:"jp",n:"鲱鱼荞麦面",o:"にしんそば",h:"干鲱鱼泡软后用酱油、糖、酒甜煮，放在热汤荞麦面上，京都名物。"},
  {r:"eu",n:"荷兰生鲱鱼",o:"Hollandse nieuwe haring",h:"初夏盐渍的嫩鲱鱼，配生洋葱碎和酸黄瓜，拎着尾巴整条吃。"},
  {r:"eu",n:"北欧腌鲱鱼",o:"Inlagd sill",h:"盐渍鲱鱼泡水后切块，浸在醋、糖、洋葱、香料的汁中，配土豆和酸奶油。"}
 ]},
{id:"tachiuo",cat:"fish",zh:"带鱼",ja:"太刀魚",kana:"たちうお",romaji:"tachiuo",en:"Largehead hairtail",aka:["刀鱼","牙带","タチウオ","beltfish","cutlassfish","갈치"],latin:"Trichiurus lepturus",season:[7,8,9,10],
 tip:"银色发亮、不掉银粉的新鲜。中国北方叫刀鱼，和长江刀鱼（刀鲚）不是同一种。",
 dishes:[
  {r:"cn",n:"红烧带鱼",o:"红烧带鱼",h:"切段煎到两面金黄，加葱姜蒜、料酒、醋、酱油、糖和水，焖 10 分钟收汁。"},
  {r:"cn",n:"干炸带鱼",o:"干炸带鱼",h:"用盐、料酒、姜腌，裹干淀粉炸到酥脆。"},
  {r:"jp",n:"盐烤带鱼",o:"タチウオの塩焼き",h:"切段撒盐，带皮面烤到起泡，配柑橘。"},
  {r:"kr",n:"辣炖带鱼",o:"갈치조림",h:"萝卜垫底放带鱼，加辣椒粉、酱油、蒜和水炖 15 分钟。"}
 ]},
{id:"kinmedai",cat:"fish",zh:"红金眼鲷",ja:"金目鯛",kana:"きんめだい",romaji:"kinmedai",en:"Splendid alfonsino",aka:["金目鲷","キンメダイ","alfonsino"],latin:"Beryx splendens",season:[12,1,2,3],
 tip:"深海鱼，红皮大金眼，伊豆和千叶有名。鱼皮下有一层油脂，适合炙烤和煮。",
 dishes:[
  {r:"jp",n:"红烧金目鲷",o:"金目鯛の煮付け",h:"整条或半边用酒、酱油、糖、味醂甜辣口味煮，汤汁淋在鱼上，伊豆名物。"},
  {r:"jp",n:"炙烤金目鲷寿司",o:"金目鯛の炙り",h:"带皮切片，皮面用喷枪炙烤到起泡，握寿司或刺身。"},
  {r:"jp",n:"金目鲷涮锅",o:"金目鯛しゃぶしゃぶ",h:"薄片在昆布高汤里涮到皮卷起，蘸柚子醋。"}
 ]},
{id:"nodoguro",cat:"fish",zh:"赤鯥",ja:"赤鯥",kana:"あかむつ",romaji:"akamutsu",en:"Blackthroat seaperch",aka:["喉黑","红喉","のどぐろ","ノドグロ","アカムツ"],latin:"Doederleinia berycoides",season:[9,10,11,12],
 tip:"喉咙内部是黑色而得名。白身鱼里油脂特别多的高级鱼，日本海沿岸有名。",
 dishes:[
  {r:"jp",n:"盐烤喉黑",o:"のどぐろの塩焼き",h:"整条撒盐烤，鱼油滴下来时香气最足。"},
  {r:"jp",n:"喉黑炙烤寿司",o:"のどぐろ炙り寿司",h:"带皮刺身皮面炙烤，握成寿司，撒一点盐。"},
  {r:"jp",n:"喉黑饭",o:"のどぐろ釜飯",h:"烤过的喉黑放在加了高汤和酱油的米上一起煮，焖好拆肉拌匀。"}
 ]},
{id:"kasago",cat:"fish",zh:"石狗公",ja:"笠子",kana:"かさご",romaji:"kasago",en:"Marbled rockfish",aka:["石九公","カサゴ","rockfish","scorpionfish"],latin:"Sebastiscus marmoratus",season:[12,1,2,3,4],
 tip:"背鳍有硬刺，处理时先剪掉。肉是清淡的白身，熬汤非常鲜。",
 dishes:[
  {r:"jp",n:"炸石狗公",o:"カサゴの唐揚げ",h:"整条划刀裹淀粉，两次油炸，连鳍都酥脆。"},
  {r:"jp",n:"石狗公味噌汤",o:"カサゴの味噌汁",h:"切块焯水后用水煮出鲜味，化入味噌，加葱。"},
  {r:"eu",n:"马赛鱼汤",o:"Bouillabaisse",h:"岩礁鱼和洋葱、番茄、茴香、藏红花一起熬，配蒜蓉辣椒酱面包。"}
 ]},
{id:"mebaru",cat:"fish",zh:"许氏平鲉",ja:"眼張",kana:"めばる",romaji:"mebaru",en:"Japanese rockfish",aka:["黑鲪","メバル","rockfish","우럭"],latin:"Sebastes spp.",season:[3,4,5],
 tip:"眼睛特别大。春天的代表鱼，关西常整条红烧。",
 dishes:[
  {r:"jp",n:"红烧眼张",o:"メバルの煮付け",h:"划刀，用酒、酱油、糖、水和姜煮，加牛蒡一起煮也很好。"},
  {r:"kr",n:"辣炖黑鲪",o:"우럭매운탕",h:"鱼块和萝卜、豆腐、茼蒿用辣椒粉、辣椒酱炖成辣汤。"},
  {r:"cn",n:"清蒸黑鲪",o:"清蒸黑鲪",h:"整条铺葱姜蒸 10 分钟，浇蒸鱼豉油和热油。"}
 ]},
{id:"suzuki",cat:"fish",zh:"鲈鱼",ja:"鱸",kana:"すずき",romaji:"suzuki",en:"Japanese sea bass",aka:["花鲈","海鲈","スズキ","セイゴ","フッコ","sea bass","branzino","seabass"],latin:"Lateolabrax japonicus",season:[6,7,8],
 tip:"出世鱼：セイゴ→フッコ→スズキ。夏天的白身鱼代表。西餐的 branzino 是欧洲鲈，做法相通。",
 dishes:[
  {r:"cn",n:"清蒸鲈鱼",o:"清蒸鲈鱼",h:"背部划刀，塞葱姜蒸 8–10 分钟，倒掉汤汁，铺葱丝浇热油和豉油。"},
  {r:"jp",n:"冰镇鲈鱼",o:"スズキの洗い",h:"薄片放进冰水里收缩，肉变脆，蘸醋味噌或酱油。"},
  {r:"eu",n:"盐焗海鲈",o:"Branzino al sale",h:"整条塞柠檬和香草，用粗盐加蛋白包严，烤 25 分钟后敲开。"}
 ]},
{id:"isaki",cat:"fish",zh:"三线矶鲈",ja:"伊佐木",kana:"いさき",romaji:"isaki",en:"Chicken grunt",aka:["鸡鱼","イサキ","grunt"],latin:"Parapristipoma trilineatum",season:[5,6,7],
 tip:"初夏到夏天的鱼，油脂均匀，最适合盐烤。",
 dishes:[
  {r:"jp",n:"盐烤三线矶鲈",o:"イサキの塩焼き",h:"整条划刀撒盐，鳍上多抹盐防焦，烤 12 分钟。"},
  {r:"jp",n:"三线矶鲈刺身",o:"イサキの刺身",h:"带皮炙烤或去皮切片，配姜和酱油。"},
  {r:"eu",n:"意式香煎",o:"Isaki in padella",h:"鱼排皮面朝下用橄榄油煎脆，加小番茄、刺山柑和白葡萄酒。"}
 ]},
{id:"kawahagi",cat:"fish",zh:"马面鲀",ja:"皮剥",kana:"かわはぎ",romaji:"kawahagi",en:"Threadsail filefish",aka:["剥皮鱼","面包鱼","カワハギ","ウマヅラハギ","filefish"],latin:"Stephanolepis cirrhifer",season:[10,11,12],
 tip:"皮厚，从头部一撕就能剥下来。秋冬的肝（きも）很肥，是精华。",
 dishes:[
  {r:"jp",n:"肝酱油刺身",o:"カワハギの肝醤油",h:"薄切刺身，把生肝压碎拌入酱油，蘸着吃。肝要新鲜。"},
  {r:"jp",n:"红烧马面鲀",o:"カワハギの煮付け",h:"剥皮整条，和肝一起用酱油、糖、酒煮。"},
  {r:"cn",n:"马面鱼干",o:"烤马面鱼干",h:"超市常见的调味鱼干片，用火烤软撕着吃，配啤酒。"}
 ]},
{id:"fugu",cat:"fish",zh:"河豚",ja:"河豚",kana:"ふぐ",romaji:"fugu",en:"Pufferfish (fugu)",aka:["フグ","虎河豚","トラフグ","ふく","pufferfish","blowfish"],latin:"Takifugu rubripes",season:[11,12,1,2],
 tip:"日本超市只卖已去除有毒部位、贴有「処理済み」或「みがき」字样的河豚。",
 warn:"内脏、皮等含河豚毒素，致命。绝对不要自己处理整条河豚，只买有资质店铺处理好的。",
 dishes:[
  {r:"jp",n:"河豚刺身",o:"てっさ",h:"切成透光的薄片铺成菊花形，配细葱、红叶萝卜泥和柚子醋。"},
  {r:"jp",n:"河豚火锅",o:"てっちり",h:"河豚块、白菜、豆腐在昆布高汤里煮，蘸柚子醋，最后煮杂炊。"},
  {r:"jp",n:"炸河豚",o:"ふぐの唐揚げ",h:"带骨肉块用酱油姜汁腌，裹淀粉炸。"}
 ]},
{id:"anago",cat:"fish",zh:"星康吉鳗",ja:"穴子",kana:"あなご",romaji:"anago",en:"Conger eel (whitespotted)",aka:["星鳗","アナゴ","煮穴子","conger eel","海鳗（俗）"],latin:"Conger myriaster",season:[6,7,8],
 tip:"比鳗鱼清淡。超市常卖已烤好或煮好的「焼き穴子」「煮穴子」。",
 dishes:[
  {r:"jp",n:"煮星鳗寿司",o:"煮穴子",h:"开背后用酱油、糖、酒、味醂慢煮，握寿司刷浓甜酱（ツメ）。"},
  {r:"jp",n:"天妇罗星鳗",o:"穴子の天ぷら",h:"整条开背裹薄天妇罗面糊炸，蘸天汁或盐。"},
  {r:"jp",n:"星鳗饭",o:"あなご飯",h:"烤星鳗切段铺在用煮汁煮的米饭上，广岛宫岛名物。"}
 ]},
{id:"hamo",cat:"fish",zh:"海鳗",ja:"鱧",kana:"はも",romaji:"hamo",en:"Daggertooth pike conger",aka:["狼牙鳝","ハモ","pike conger"],latin:"Muraenesox cinereus",season:[6,7,8],
 tip:"小刺极多，必须「骨切り」（每 1 寸切 24 刀以上）。超市卖的一般已切好。京都祇园祭的代表食材。",
 dishes:[
  {r:"jp",n:"海鳗落",o:"鱧の落とし",h:"切好骨的鱼肉在热水中烫到开花，过冰水，蘸梅肉酱。"},
  {r:"jp",n:"海鳗涮锅",o:"鱧しゃぶ",h:"和洋葱一起在高汤里涮，蘸柚子醋。"},
  {r:"cn",n:"海鳗鲞",o:"鳗鲞",h:"浙江沿海把海鳗腌后风干，蒸熟后撕着吃或炖肉。"}
 ]},
{id:"shishamo",cat:"fish",zh:"柳叶鱼",ja:"柳葉魚",kana:"ししゃも",romaji:"shishamo",en:"Shishamo smelt / Capelin",aka:["多春鱼","シシャモ","子持ちししゃも","カラフトシシャモ","capelin"],latin:"Spirinchus lanceolatus / Mallotus villosus",season:[10,11],
 tip:"超市卖的「子持ちししゃも」大多是进口的毛鳞鱼（カラフトシシャモ）。北海道产的真柳叶鱼很少见。",
 dishes:[
  {r:"jp",n:"烤柳叶鱼",o:"ししゃもの焼き物",h:"整条不用处理，用烤鱼架或平底锅两面烤 5 分钟，配蛋黄酱七味。"},
  {r:"jp",n:"柳叶鱼南蛮渍",o:"ししゃもの南蛮漬け",h:"裹淀粉炸，泡进甜醋和洋葱丝中。"},
  {r:"cn",n:"椒盐多春鱼",o:"椒盐多春鱼",h:"裹薄粉炸脆，与蒜末、辣椒碎翻炒，撒椒盐。"}
 ]},
{id:"kisu",cat:"fish",zh:"多鳞鱚",ja:"鱚",kana:"きす",romaji:"kisu",en:"Japanese whiting (sillago)",aka:["沙丁（俗）","沙钻鱼","キス","sillago","whiting"],latin:"Sillago japonica",season:[5,6,7,8],
 tip:"小型细长白身鱼，天妇罗的经典食材。超市常卖已开背的。",
 dishes:[
  {r:"jp",n:"鱚鱼天妇罗",o:"キスの天ぷら",h:"开背去骨，裹冰水调的薄面糊，170°C 炸 1–2 分钟。"},
  {r:"jp",n:"鱚鱼昆布腌",o:"キスの昆布締め",h:"鱼片夹在昆布里冷藏几小时，切丝配山葵。"},
  {r:"cn",n:"椒盐沙钻",o:"椒盐沙钻鱼",h:"整条裹薄粉炸，撒椒盐和葱花。"}
 ]}
);
