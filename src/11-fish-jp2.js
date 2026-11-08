// 鱼类 2：日本超市常见（白身鱼、深海鱼、河鱼等）
window.FOODS.push(
{id:"ayu",cat:"fish",zh:"香鱼",ja:"鮎",kana:"あゆ",romaji:"ayu",en:"Ayu sweetfish",aka:["アユ","年鱼","sweetfish"],latin:"Plecoglossus altivelis",season:[6,7,8],
 tip:"日本夏天的河鱼，有西瓜般的清香。养殖的全年都有，野生的 6 月解禁。",
 dishes:[
  {r:"jp",n:"盐烤香鱼",o:"鮎の塩焼き",h:"整条穿成游动的样子，鳍上多抹盐，炭火慢烤，蘸蓼醋（たで酢）。"},
  {r:"jp",n:"香鱼饭",o:"鮎ご飯",h:"烤好的香鱼放在加高汤的米上一起煮，焖好去骨拌匀。"},
  {r:"jp",n:"香鱼甘露煮",o:"鮎の甘露煮",h:"先烤再用酱油、糖、酒、水饴慢煮数小时，骨头也变软。"}
 ]},
{id:"nijimasu",cat:"fish",zh:"虹鳟",ja:"虹鱒",kana:"にじます",romaji:"nijimasu",en:"Rainbow trout",aka:["ニジマス","トラウト","trout","トラウトサーモン","金鳟","三文鳟"],latin:"Oncorhynchus mykiss",season:[3,4,5,6,7,8,9,10],
 tip:"日本超市的「トラウトサーモン」是海水养殖的大型虹鳟，可当三文鱼生吃。淡水的小虹鳟要加热。",
 warn:"淡水养殖的小虹鳟不要生吃。",
 dishes:[
  {r:"jp",n:"盐烤虹鳟",o:"ニジマスの塩焼き",h:"整条撒盐，穿竹签在炭火边慢烤，河边钓场常见。"},
  {r:"eu",n:"黄油杏仁鳟鱼",o:"Truite aux amandes",h:"整条拍面粉用黄油煎，起锅后用同一锅黄油炒杏仁片浇上，挤柠檬。"},
  {r:"am",n:"烟熏鳟鱼",o:"Smoked trout",h:"盐糖腌后冷熏或热熏，拆肉拌奶油奶酪做抹酱。"}
 ]},
{id:"kinki",cat:"fish",zh:"大翅鲪鲉",ja:"喜知次",kana:"きちじ",romaji:"kichiji",en:"Broadbanded thornyhead",aka:["吉次","キンキ","キチジ","喜知次","thornyhead"],latin:"Sebastolobus macrochir",season:[11,12,1,2],
 tip:"北海道的高级红色深海鱼，通称キンキ。脂肪多，适合煮和盐烤。",
 dishes:[
  {r:"jp",n:"红烧喜知次",o:"キンキの煮付け",h:"整条用酒、酱油、糖、味醂煮，汤汁不要太浓，保留鱼的油香。"},
  {r:"jp",n:"喜知次一夜干",o:"キンキの一夜干し",h:"开背泡盐水后风干一夜，小火慢烤。"},
  {r:"jp",n:"盐水煮喜知次",o:"キンキの湯煮",h:"北海道网走做法：只用盐水煮，蘸柚子醋，吃鱼油的原味。"}
 ]},
{id:"hata",cat:"fish",zh:"石斑鱼",ja:"九絵",kana:"くえ",romaji:"kue",en:"Grouper",aka:["クエ","ハタ","アラ","东星斑","老虎斑","青斑","grouper"],latin:"Epinephelus spp.",season:[11,12,1,2],
 tip:"日本叫クエ（九絵），是冬天的高级火锅鱼。中国南方的东星斑、老虎斑多为活鱼清蒸。",
 dishes:[
  {r:"cn",n:"清蒸石斑",o:"清蒸石斑鱼",h:"活鱼整条蒸 8–10 分钟，铺葱丝浇热油和蒸鱼豉油，粤菜宴席菜。"},
  {r:"jp",n:"九绘火锅",o:"クエ鍋",h:"带皮鱼块和白菜、豆腐在昆布高汤里煮，鱼皮胶质丰富，最后做杂炊。"},
  {r:"sea",n:"泰式柠檬蒸鱼",o:"ปลานึ่งมะนาว",h:"整条蒸熟，浇青柠汁、鱼露、蒜、辣椒和香菜调的酸辣汁。"}
 ]},
{id:"kurodai",cat:"fish",zh:"黑鲷",ja:"黒鯛",kana:"くろだい",romaji:"kurodai",en:"Blackhead seabream",aka:["黑加吉","チヌ","クロダイ","black porgy"],latin:"Acanthopagrus schlegelii",season:[11,12,1,2,3],
 tip:"关西叫チヌ。冬天的比较没有腥味。",
 dishes:[
  {r:"jp",n:"黑鲷刺身",o:"チヌの刺身",h:"去皮切片，或带皮用热水烫皮（湯引き）后切片。"},
  {r:"cn",n:"红烧黑鲷",o:"红烧黑鲷",h:"两面煎黄，加葱姜、料酒、酱油、糖焖 15 分钟。"},
  {r:"eu",n:"意式烤鲷",o:"Orata al forno",h:"整条塞柠檬和迷迭香，和土豆片、橄榄一起烤 25 分钟。"}
 ]},
{id:"ishidai",cat:"fish",zh:"条石鲷",ja:"石鯛",kana:"いしだい",romaji:"ishidai",en:"Barred knifejaw",aka:["イシダイ","石鲷","knifejaw"],latin:"Oplegnathus fasciatus",season:[6,7,8],
 tip:"黑白条纹的矶钓名鱼，肉质紧实有嚼劲，夏天最好。",
 dishes:[
  {r:"jp",n:"石鲷刺身",o:"石鯛の刺身",h:"切薄一点更好吃，皮可以烫过切丝一起吃。"},
  {r:"jp",n:"石鲷涮锅",o:"石鯛しゃぶ",h:"薄片在高汤中涮几秒，蘸柚子醋。"},
  {r:"cn",n:"石鲷汤",o:"石鲷豆腐汤",h:"鱼头鱼骨煎香，加开水大火煮成奶白汤，放豆腐。"}
 ]},
{id:"amadai",cat:"fish",zh:"马头鱼",ja:"甘鯛",kana:"あまだい",romaji:"amadai",en:"Tilefish",aka:["方头鱼","ぐじ","アマダイ","tilefish"],latin:"Branchiostegus japonicus",season:[10,11,12,1,2],
 tip:"京都叫「ぐじ」。肉很软，常带鳞直接烤，鳞会竖起来变得酥脆（松笠焼き）。",
 dishes:[
  {r:"jp",n:"若狭烧马头鱼",o:"ぐじの若狭焼き",h:"带鳞鱼片一边烤一边刷酒和酱油，鳞片酥脆。"},
  {r:"jp",n:"马头鱼松笠烧",o:"甘鯛の松笠焼き",h:"带鳞鱼片鳞面朝下淋热油或煎，让鳞竖起，再把肉面烤熟。"},
  {r:"cn",n:"清蒸方头鱼",o:"清蒸方头鱼",h:"划刀铺姜丝蒸 8 分钟，浇葱油豉油。"}
 ]},
{id:"kamasu",cat:"fish",zh:"梭子鱼",ja:"魳",kana:"かます",romaji:"kamasu",en:"Barracuda (red barracuda)",aka:["カマス","魣","barracuda","红梭鱼"],latin:"Sphyraena pinguis",season:[9,10,11],
 tip:"秋天油脂最多。肉水分多，常做一夜干或盐烤。",
 dishes:[
  {r:"jp",n:"梭子鱼一夜干",o:"カマスの一夜干し",h:"开背泡盐水，风干一夜，烤到表面微焦。"},
  {r:"jp",n:"炙烤梭子鱼寿司",o:"カマスの炙り寿司",h:"带皮鱼片皮面炙烤，做棒寿司或握寿司。"},
  {r:"sea",n:"印尼烤鱼",o:"Ikan bakar",h:"整条抹姜黄、辣椒、蒜、甜酱油调的酱，用香蕉叶包着炭烤。"}
 ]},
{id:"tobiuo",cat:"fish",zh:"飞鱼",ja:"飛魚",kana:"とびうお",romaji:"tobiuo",en:"Flying fish",aka:["トビウオ","あご","アゴ","燕鳐","flying fish"],latin:"Cypselurus agoo",season:[5,6,7,8],
 tip:"九州叫「あご」，烤干的飞鱼做的「あごだし」是高级高汤。",
 dishes:[
  {r:"jp",n:"飞鱼高汤",o:"あごだし",h:"烤飞鱼干冷水泡一夜再小火煮，做乌冬或拉面汤底。"},
  {r:"jp",n:"飞鱼鱼丸",o:"あごのつみれ",h:"鱼肉剁泥加味噌和姜，做丸子煮汤或炸。"},
  {r:"am",n:"巴巴多斯飞鱼",o:"Flying fish and cou-cou",h:"鱼排用青柠和香草腌，番茄洋葱酱焖，配玉米粉秋葵糊。"}
 ]},
{id:"hatahata",cat:"fish",zh:"日本叉牙鱼",ja:"鰰",kana:"はたはた",romaji:"hatahata",en:"Japanese sandfish",aka:["雷鱼","ハタハタ","鱩","sandfish"],latin:"Arctoscopus japonicus",season:[11,12],
 tip:"秋田县的县鱼，冬天打雷时靠岸产卵。鱼卵「ぶりこ」黏滑有嚼劲。",
 dishes:[
  {r:"jp",n:"盐汁锅",o:"しょっつる鍋",h:"用叉牙鱼做的鱼露（しょっつる）调汤，煮整条鱼、豆腐、葱和芹菜。"},
  {r:"jp",n:"盐烤叉牙鱼",o:"ハタハタの塩焼き",h:"整条撒盐烤，配萝卜泥。"},
  {r:"jp",n:"叉牙鱼寿司",o:"ハタハタ寿司",h:"秋田传统发酵寿司：鱼与米饭、曲、蔬菜一起腌数周。"}
 ]},
{id:"itoyori",cat:"fish",zh:"金线鱼",ja:"糸撚鯛",kana:"いとよりだい",romaji:"itoyoridai",en:"Golden threadfin bream",aka:["红三鱼","イトヨリ","threadfin bream"],latin:"Nemipterus virgatus",season:[10,11,12,1,2],
 tip:"粉红鱼身上有黄线，肉白而软。也是鱼糕（すり身）的主要原料。",
 dishes:[
  {r:"jp",n:"金线鱼昆布蒸",o:"イトヨリの昆布蒸し",h:"鱼片放昆布上淋酒蒸 8 分钟，配柚子醋。"},
  {r:"cn",n:"香煎红三鱼",o:"香煎红三鱼",h:"抹盐腌 10 分钟，小火煎两面，配豉油葱丝。"},
  {r:"eu",n:"法式纸包鱼",o:"Poisson en papillote",h:"鱼片和蔬菜丝、黄油、白葡萄酒用烘焙纸包好，烤 15 分钟。"}
 ]},
{id:"mekajiki",cat:"fish",zh:"剑鱼",ja:"目梶木",kana:"めかじき",romaji:"mekajiki",en:"Swordfish",aka:["旗鱼","メカジキ","カジキ","swordfish","马林鱼"],latin:"Xiphias gladius",season:[10,11,12,1],
 tip:"日本超市常卖厚切鱼块，没有刺，适合给孩子吃。容易煎老，七八分熟就关火。",
 warn:"大型鱼含汞较多，孕妇不宜常吃。",
 dishes:[
  {r:"jp",n:"照烧剑鱼",o:"メカジキの照り焼き",h:"拍薄粉煎两面，加酱油、味醂、酒、糖收汁。"},
  {r:"eu",n:"西西里剑鱼卷",o:"Involtini di pesce spada",h:"剑鱼薄片卷面包屑、松子、葡萄干馅，穿串烤。"},
  {r:"am",n:"烤剑鱼排",o:"Grilled swordfish steak",h:"厚片刷橄榄油，大火每面烤 3 分钟，配青酱或莎莎酱。"}
 ]},
{id:"shiira",cat:"fish",zh:"鲯鳅",ja:"鱰",kana:"しいら",romaji:"shiira",en:"Mahi-mahi (dolphinfish)",aka:["鬼头刀","シイラ","マヒマヒ","mahi-mahi","dorado"],latin:"Coryphaena hippurus",season:[7,8,9],
 tip:"日本不太常见，夏威夷叫 Mahi-mahi，是很受欢迎的白身鱼。",
 dishes:[
  {r:"jp",n:"鲯鳅黄油煎",o:"シイラのムニエル",h:"鱼排拍面粉用黄油煎，配柠檬。"},
  {r:"am",n:"鱼肉塔可",o:"Fish tacos",h:"鱼块用辣椒粉、孜然调味煎或炸，卷进玉米饼，配卷心菜丝和酸奶油。"},
  {r:"cn",n:"台湾鬼头刀鱼排",o:"煎鬼头刀",h:"鱼排抹盐和胡椒，煎熟配蒜蓉酱油。"}
 ]},
{id:"gindara",cat:"fish",zh:"裸盖鱼",ja:"銀鱈",kana:"ぎんだら",romaji:"gindara",en:"Sablefish (black cod)",aka:["银鳕鱼","ギンダラ","black cod","sablefish","黑鳕"],latin:"Anoplopoma fimbria",season:[11,12,1,2],
 tip:"中文常说的「银鳕鱼」多是这个，跟鳕鱼不是同一类，脂肪多入口即化。",
 dishes:[
  {r:"jp",n:"西京烧银鳕",o:"銀ダラの西京焼き",h:"白味噌、味醂、酒腌 2 天，擦净小火烤，焦糖色出来就好。"},
  {r:"am",n:"味噌银鳕",o:"Miso black cod",h:"Nobu 餐厅名菜：西京味噌腌 2–3 天，高温烤到表面焦糖化。"},
  {r:"cn",n:"清蒸银鳕鱼",o:"清蒸银鳕鱼",h:"鱼块铺姜丝蒸 6 分钟，浇豉油和葱油。"}
 ]},
{id:"anko",cat:"fish",zh:"鮟鱇",ja:"鮟鱇",kana:"あんこう",romaji:"anko",en:"Monkfish (anglerfish)",aka:["琵琶鱼","老头鱼","アンコウ","あん肝","monkfish","anglerfish"],latin:"Lophiomus setigerus",season:[12,1,2],
 tip:"冬天的火锅鱼，全身除骨头都能吃（「七つ道具」）。肝「あん肝」被称为海中鹅肝。",
 dishes:[
  {r:"jp",n:"鮟鱇火锅",o:"あんこう鍋",h:"先把鮟鱇肝炒化，加味噌和高汤，再放鱼肉、皮、白菜、豆腐。茨城名物。"},
  {r:"jp",n:"鮟鱇肝",o:"あん肝ポン酢",h:"肝去血管，用酒和盐腌后卷成筒蒸 30 分钟，切片配柚子醋和红叶萝卜泥。"},
  {r:"eu",n:"西班牙鮟鱇炖饭",o:"Arroz con rape",h:"鮟鱇块和海鲜高汤、番茄、红椒、藏红花一起煮成汤饭。"}
 ]},
{id:"bora",cat:"fish",zh:"鲻鱼",ja:"鯔",kana:"ぼら",romaji:"bora",en:"Flathead grey mullet",aka:["乌鱼","乌头","ボラ","mullet","青头"],latin:"Mugil cephalus",season:[11,12,1],
 tip:"冬天外海的「寒ボラ」没有泥腥味。卵巢晒干就是乌鱼子（からすみ）。",
 dishes:[
  {r:"jp",n:"鲻鱼冰镇",o:"ボラの洗い",h:"冬季鲻鱼切薄片过冰水，蘸醋味噌。"},
  {r:"cn",n:"红烧乌鱼",o:"红烧鲻鱼",h:"切段煎香，用豆豉、姜、酱油、糖焖。"},
  {r:"eu",n:"地中海烤鲻鱼",o:"Grilled mullet",h:"整条抹橄榄油、柠檬、牛至，炭烤到皮脆。"}
 ]}
);
