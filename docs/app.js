const COMPOUND_SURNAME_PINYIN = {
  "欧阳": ["ou", "yang"],
  "司马": ["si", "ma"],
  "诸葛": ["zhu", "ge"],
  "上官": ["shang", "guan"],
  "夏侯": ["xia", "hou"],
  "东方": ["dong", "fang"],
  "皇甫": ["huang", "fu"],
  "尉迟": ["yu", "chi"],
  "公孙": ["gong", "sun"],
  "长孙": ["zhang", "sun"],
  "慕容": ["mu", "rong"],
  "令狐": ["ling", "hu"],
  "万俟": ["mo", "qi"]
};

const COMPOUND_SURNAMES = Object.keys(COMPOUND_SURNAME_PINYIN);

const SURNAME_PINYIN_OVERRIDES = {
  "单": "shan",
  "解": "xie",
  "乐": "yue",
  "曾": "zeng",
  "仇": "qiu",
  "朴": "piao",
  "查": "zha",
  "翟": "zhai",
  "区": "ou",
  "黑": "he",
  "盖": "ge",
  "繁": "po",
  "员": "yun"
};

const PINYIN_TO_KATAKANA = {
  a: "ア", ai: "アイ", an: "アン", ang: "アン", ao: "アオ",
  ba: "バ", bai: "バイ", ban: "バン", bang: "バン", bao: "バオ", bei: "ベイ", ben: "ベン", beng: "ボン", bi: "ビ", bian: "ビエン", biao: "ビャオ", bie: "ビエ", bin: "ビン", bing: "ビン", bo: "ボ", bu: "ブ",
  ca: "ツァ", cai: "ツァイ", can: "ツァン", cang: "ツァン", cao: "ツァオ", ce: "ツォ", cen: "ツェン", ceng: "ツォン", ci: "ツ", cong: "ツォン", cou: "ツォウ", cu: "ツゥ", cuan: "ツァン", cui: "ツイ", cun: "ツゥン", cuo: "ツォ",
  cha: "チャ", chai: "チャイ", chan: "チャン", chang: "チャン", chao: "チャオ", che: "チェ", chen: "チェン", cheng: "チョン", chi: "チ", chong: "チョン", chou: "チョウ", chu: "チュ", chuan: "チュアン", chui: "チュイ", chun: "チュン", chuo: "チュオ",
  da: "ダ", dai: "ダイ", dan: "ダン", dang: "ダン", dao: "ダオ", de: "ドゥ", deng: "ドン", di: "ディ", dian: "ディエン", diao: "ディアオ", die: "ディエ", ding: "ディン", dong: "ドン", dou: "ドウ", du: "ドゥ", duan: "ドゥアン", dui: "ドゥイ", dun: "ドゥン", duo: "ドゥオ",
  e: "ウ", ei: "エイ", en: "エン", eng: "オン", er: "アル",
  fa: "ファ", fan: "ファン", fang: "ファン", fei: "フェイ", fen: "フェン", feng: "フォン", fo: "フォ", fou: "フォウ", fu: "フ",
  ga: "ガ", gai: "ガイ", gan: "ガン", gang: "ガン", gao: "ガオ", ge: "グァ", gei: "ゲイ", gen: "ゲン", geng: "ゴン", gong: "ゴン", gou: "ゴウ", gu: "グ", gua: "グァ", guai: "グァイ", guan: "グアン", guang: "グアン", gui: "グイ", gun: "グン", guo: "グオ",
  ha: "ハ", hai: "ハイ", han: "ハン", hang: "ハン", hao: "ハオ", he: "ハ", hei: "ヘイ", hen: "ヘン", heng: "ホン", hong: "ホン", hou: "ホウ", hu: "フ", hua: "ファ", huai: "ファイ", huan: "ファン", huang: "ファン", hui: "フイ", hun: "フン", huo: "フォ",
  ji: "ジ", jia: "ジア", jian: "ジエン", jiang: "ジャン", jiao: "ジャオ", jie: "ジエ", jin: "ジン", jing: "ジン", jiu: "ジウ", ju: "ジュ", juan: "ジュエン", jue: "ジュエ", jun: "ジュン",
  ka: "カ", kai: "カイ", kan: "カン", kang: "カン", kao: "カオ", ke: "クァ", kei: "ケイ", ken: "ケン", kong: "コン", kou: "コウ", ku: "ク", kua: "クァ", kuai: "クァイ", kuan: "クアン", kuang: "クアン", kui: "クイ", kun: "クン", kuo: "クオ",
  la: "ラ", lai: "ライ", lan: "ラン", lang: "ラン", lao: "ラオ", le: "ラ", lei: "レイ", leng: "ロン", li: "リ", lian: "リエン", liang: "リャン", liao: "リャオ", lie: "リエ", lin: "リン", ling: "リン", liu: "リウ", long: "ロン", lou: "ロウ", lu: "ル", luan: "ルアン", lun: "ルン", luo: "ルオ", lue: "リュエ", lv: "リュ",
  ma: "マ", mai: "マイ", man: "マン", mang: "マン", mao: "マオ", mei: "メイ", men: "メン", meng: "モン", mi: "ミ", mian: "ミエン", miao: "ミャオ", mie: "ミエ", min: "ミン", ming: "ミン", mo: "モ", mou: "モウ", mu: "ム",
  na: "ナ", nai: "ナイ", nan: "ナン", nang: "ナン", nao: "ナオ", nei: "ネイ", nen: "ネン", neng: "ノン", ni: "ニ", nian: "ニエン", niang: "ニャン", niao: "ニャオ", nie: "ニエ", nin: "ニン", ning: "ニン", niu: "ニウ", nong: "ノン", nou: "ノウ", nu: "ヌ", nuan: "ヌアン", nue: "ニュエ", nuo: "ヌオ", nv: "ニュ",
  o: "オ", ou: "オウ",
  pa: "パ", pai: "パイ", pan: "パン", pang: "パン", pao: "パオ", pei: "ペイ", pen: "ペン", peng: "ポン", pi: "ピ", pian: "ピエン", piao: "ピャオ", pie: "ピエ", pin: "ピン", ping: "ピン", po: "ポ", pou: "ポウ", pu: "プ",
  qi: "チ", qia: "チア", qian: "チエン", qiang: "チャン", qiao: "チアオ", qie: "チエ", qin: "チン", qing: "チン", qiong: "チォン", qiu: "チウ", qu: "チュ", quan: "チュエン", que: "チュエ", qun: "チュン",
  ran: "ラン", rang: "ラン", rao: "ラオ", re: "ルァ", ren: "レン", reng: "ロン", ri: "リ", rong: "ロン", rou: "ロウ", ru: "ル", ruan: "ルアン", rui: "ルイ", run: "ルン", ruo: "ルオ",
  sa: "サ", sai: "サイ", san: "サン", sang: "サン", sao: "サオ", sen: "セン", seng: "ソン", sha: "シャ", shai: "シャイ", shan: "シャン", shang: "シャン", shao: "シャオ", she: "シェ", shen: "シェン", sheng: "ション", shi: "シ", shou: "ショウ", shu: "シュ", shua: "シュア", shuai: "シュアイ", shuan: "シュアン", shuang: "シュアン", shui: "シュイ", shun: "シュン", shuo: "シュオ",
  si: "ス", song: "ソン", sou: "ソウ", su: "ス", suan: "スアン", sui: "スイ", sun: "スン", suo: "スオ",
  ta: "タ", tai: "タイ", tan: "タン", tang: "タン", tao: "タオ", te: "トゥ", teng: "トン", ti: "ティ", tian: "ティエン", tiao: "ティアオ", tie: "ティエ", ting: "ティン", tong: "トン", tou: "トウ", tu: "トゥ", tuan: "トゥアン", tui: "トゥイ", tun: "トゥン", tuo: "トゥオ",
  wa: "ワ", wai: "ワイ", wan: "ワン", wang: "ワン", wei: "ウェイ", wen: "ウェン", weng: "ウォン", wo: "ウォ", wu: "ウ",
  xi: "シ", xia: "シア", xian: "シエン", xiang: "シャン", xiao: "シャオ", xie: "シエ", xin: "シン", xing: "シン", xiong: "ション", xiu: "シウ", xu: "シュ", xuan: "シュエン", xue: "シュエ", xun: "シュン",
  ya: "ヤ", yan: "イエン", yang: "ヤン", yao: "ヤオ", ye: "イエ", yi: "イ", yin: "イン", ying: "イン", yong: "ヨン", you: "ヨウ", yu: "ユ", yuan: "ユエン", yue: "ユエ", yun: "ユン",
  za: "ザ", zai: "ザイ", zan: "ザン", zang: "ザン", zao: "ザオ", zei: "ゼイ", zen: "ゼン", zeng: "ゾン", zha: "ジャ", zhai: "ジャイ", zhan: "ジャン", zhang: "ジャン", zhao: "ジャオ", zhe: "ジェ", zhen: "ジェン", zheng: "ジョン", zhi: "ジ", zhong: "ジョン", zhou: "ジョウ", zhu: "ジュ", zhuan: "ジュアン", zhuang: "ジュアン", zhui: "ジュイ", zhun: "ジュン", zhuo: "ジュオ",
  zi: "ズ", zong: "ゾン", zou: "ゾウ", zu: "ズ", zuan: "ズアン", zui: "ズイ", zun: "ズン", zuo: "ズオ"
};

const FIELD_LIBRARY = {
  passportEnglishName: { label: "\u62a4\u7167\u82f1\u6587\u59d3\u540d", type: "text", placeholder: "\u4f8b\u5982\uff1aWANG XIAOMING" },
  passportEnglishNameFullwidth: { label: "\u62a4\u7167\u82f1\u6587\u59d3\u540d\uff08\u5168\u89d2\uff09", type: "text", placeholder: "\u81ea\u52a8\u751f\u6210", readonly: true },
  passportEnglishSurname: { label: "\u62a4\u7167\u82f1\u6587\u59d3\u6c0f", type: "text", placeholder: "\u4f8b\u5982\uff1aWANG" },
  passportEnglishSurnameFullwidth: { label: "\u62a4\u7167\u82f1\u6587\u59d3\u6c0f\uff08\u5168\u89d2\uff09", type: "text", placeholder: "\u81ea\u52a8\u751f\u6210", readonly: true },
  passportEnglishGiven: { label: "\u62a4\u7167\u82f1\u6587\u540d\u5b57", type: "text", placeholder: "\u4f8b\u5982\uff1aXIAOMING" },
  passportEnglishGivenFullwidth: { label: "\u62a4\u7167\u82f1\u6587\u540d\u5b57\uff08\u5168\u89d2\uff09", type: "text", placeholder: "\u81ea\u52a8\u751f\u6210", readonly: true },
  passportChineseName: { label: "\u62a4\u7167\u4e2d\u6587\u59d3\u540d", type: "text", placeholder: "\u4f8b\u5982\uff1a\u738b\u5c0f\u660e" },
  gender: { label: "\u6027\u522b", type: "select", options: ["\u7537", "\u5973", "\u5176\u4ed6"] },
  email: { label: "\u90ae\u7bb1", type: "email", placeholder: "example@email.com" },
  birthday: { label: "\u751f\u65e5\uff08\u5e74\u6708\u65e5\uff09", type: "text", placeholder: "\u4f8b\u5982\uff1a2001-06-24" },
  phone: { label: "\u7535\u8bdd", type: "tel", placeholder: "\u586b\u5199\u80fd\u6536\u5230\u9a8c\u8bc1\u7801\u7684\u7535\u8bdd" },
  globalMemberPhone: { label: "\u7535\u8bdd", type: "tel", placeholder: "\u4e0e\u4f1a\u5458\u4fe1\u606f\u4e00\u81f4" },
  memberInfoPhone: { label: "\u7535\u8bdd", type: "tel", placeholder: "\u4e0e\u4f1a\u5458\u4fe1\u606f\u4e00\u81f4" },
  wvsJpPhone: { label: "\u7535\u8bdd", type: "tel", placeholder: "\u586b\u5199\u4e0e\u65e5\u5496\u5b98\u7f51\u4e00\u81f4\u7684\u5185\u5bb9" },
  favoriteMember: { label: "\u6700\u559c\u6b22\u7684\u6210\u5458", type: "text", placeholder: "\u53ef\u586b\u5199\u6210\u5458\u540d" },
  wechat: { label: "\u5fae\u4fe1\u53f7\uff08\u4ec5\u5907\u7528\uff09", type: "text", placeholder: "\u53ef\u9009\u586b\u5199" },
  memberEmail: { label: "\u4f1a\u5458\u90ae\u7bb1", type: "email", placeholder: "\u4f1a\u5458\u767b\u5f55\u90ae\u7bb1" },
  memberPassword: { label: "\u4f1a\u5458\u5bc6\u7801", type: "text", placeholder: "\u4f1a\u5458\u767b\u5f55\u5bc6\u7801" },
  memberNumber: { label: "\u4f1a\u5458\u53f7", type: "text", placeholder: "\u4f1a\u5458\u7f16\u53f7" },
  wvsEmail: { label: "wvs\u8d26\u53f7\uff08\u90ae\u7bb1\uff09", type: "email", placeholder: "wvs \u767b\u5f55\u90ae\u7bb1" },
  wvsPassword: { label: "wvs\u5bc6\u7801", type: "text", placeholder: "wvs \u767b\u5f55\u5bc6\u7801" },
  address: { label: "\u5730\u5740", type: "textarea", placeholder: "\u4f8b\u5982\uff1a\u586b\u5199\u5230\u5e02\u5373\u53ef" },
  japanAddress: { label: "\u65e5\u672c\u5730\u5740", type: "textarea", placeholder: "\u586b\u5199\u5b8c\u6574\u53ef\u7528\u5730\u5740" },
  wvsJpAddress: { label: "\u65e5\u672c\u5730\u5740", type: "textarea", placeholder: "\u586b\u5199\u4e0e\u65e5\u5496\u5b98\u7f51\u4e00\u81f4\u7684\u5185\u5bb9" },
  memberInfoAddress: { label: "\u65e5\u672c\u5730\u5740", type: "textarea", placeholder: "\u4e0e\u4f1a\u5458\u4fe1\u606f\u4e00\u81f4" },
  lotteryInfo: { label: "\u62bd\u9009\u4fe1\u606f", type: "textarea", placeholder: "\u4f8b\u5982\uff1a6.24 \u6307\u5b9a\u5e2d \u4e00\u5f20" },
  reservationNumber: { label: "\u9884\u7ea6\u756a\u53f7", type: "text", placeholder: "\u5982\u679c\u9002\u7528\u518d\u586b\u5199" },
  reservationNumberRequired: { label: "\u9884\u7ea6\u756a\u53f7", type: "text", placeholder: "\u7f57\u68ee\u5347p\u5fc5\u586b", required: true },
  optionalJapanPhone: { label: "\u53ef\u9a8c\u8bc1\u65e5\u672c\u7535\u8bdd", type: "text", placeholder: "\u6ca1\u6709\u53ef\u7559\u7a7a", help: "\u5982\u679c\u4f60\u6709\u53ef\u4ee5\u9a8c\u8bc1\u7684\u65e5\u672c\u7535\u8bdd\u53ef\u4ee5\u53d1\u7ed9\u6211\uff0c\u6ca1\u6709\u7684\u8bdd\u5ffd\u7565\u3002" },
  optionalJapanAddressPhone: { label: "\u81ea\u5e26\u65e5\u672c\u90ae\u7f16\u5730\u5740\u548c\u7535\u8bdd", type: "textarea", placeholder: "\u6ca1\u6709\u53ef\u7559\u7a7a", help: "\u5982\u679c\u4f60\u81ea\u5e26\u65e5\u672c\u90ae\u7f16\u5730\u5740\u548c\u7535\u8bdd\uff0c\u76f4\u63a5\u586b\u5728\u8fd9\u91cc\uff1b\u6ca1\u6709\u53ef\u5ffd\u7565\u3002" },
  kanaFull: { label: "\u65e5\u6587\u7247\u5047\u540d", type: "text", placeholder: "\u6839\u636e\u4e2d\u6587\u59d3\u540d\u81ea\u52a8\u751f\u6210", readonly: true },
  manualKanaFull: { label: "\u65e5\u6587\u7247\u5047\u540d", type: "text", placeholder: "\u586b\u5199\u4e0e\u65e5\u5496\u5b98\u7f51\u4e00\u81f4\u7684\u5185\u5bb9" },
  hiraganaFull: { label: "\u65e5\u6587\u5e73\u5047\u540d", type: "text", placeholder: "\u6839\u636e\u4e2d\u6587\u59d3\u540d\u81ea\u52a8\u751f\u6210", readonly: true },
  piaNote: { label: "\u8865\u5145\u8bf4\u660e", type: "textarea", placeholder: "\u53ef\u586b\u5199\u5176\u4ed6\u5907\u6ce8", help: "\u5982\u65e0\u5185\u5bb9\u53ef\u7559\u7a7a\u3002" }
};

const MODE_GROUPS = [
  { id: "open_only", label: "\u4ec5\u5f00\u901a\u8d26\u53f7/\u4f1a\u5458", hint: "\u9002\u5408\u53ea\u5f00\u901a\u8d26\u53f7\u6216\u4f1a\u5458" },
  { id: "open_and_lottery", label: "\u5f00\u901a\u8d26\u53f7/\u4f1a\u5458\u5e76\u53c2\u52a0\u62bd\u9009", hint: "\u4ece\u96f6\u51c6\u5907\u8d26\u53f7\u548c\u62bd\u9009\u8d44\u6599" },
  { id: "lottery_only", label: "\u5df2\u6709\u8d26\u53f7\uff0c\u4ec5\u53c2\u52a0\u62bd\u9009", hint: "\u5df2\u6709\u4f1a\u5458\u6216\u8d26\u53f7\uff0c\u53ea\u8865\u62bd\u9009\u4fe1\u606f" },
  { id: "wvs_special", label: "WVS \u4f1a\u5458\u4e13\u62cd", hint: "\u53ea\u9700\u8981\u5f00\u901a\u65e5\u5496\u4f1a\u5458\uff0c\u4e0d\u9700\u8981\u5e2e\u5fd9\u5b8c\u5584\u5b98\u7f51\u4fe1\u606f" }
];

const MODE_TEMPLATES = [
  { id: "fanclub_member_official", group: "open_only", category: "\u5f00\u901a", name: "\u4ec5\u9700\u5f00\u901a\u8d26\u53f7/\u4f1a\u5458", subtitle: "\u5f00\u901a\u8d26\u53f7/\u4f1a\u5458\u8d44\u6599", note: "", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaFull", "hiraganaFull", "gender", "phone", "email", "birthday", "optionalJapanAddressPhone"] },
  { id: "fanclub_all", group: "open_and_lottery", category: "\u62bd\u9009", name: "\u6ca1\u6709wvs\u8d26\u53f7", subtitle: "\u5f00\u901a\u8d26\u53f7/\u4f1a\u5458+\u62bd\u9009", note: "", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaFull", "hiraganaFull", "birthday", "gender", "phone", "email", "favoriteMember", "lotteryInfo", "wechat", "optionalJapanAddressPhone"] },
  { id: "wvs_all", group: "open_and_lottery", category: "\u62bd\u9009", name: "\u6709wvs\u8d26\u53f7", subtitle: "\u5f00\u901a\u8d26\u53f7/\u4f1a\u5458+\u62bd\u9009", note: "", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaFull", "hiraganaFull", "birthday", "gender", "phone", "wvsEmail", "wvsPassword", "favoriteMember", "lotteryInfo", "wechat", "optionalJapanAddressPhone"] },
  { id: "fanclub_lottery", group: "lottery_only", category: "\u62bd\u9009", name: "\u5176\u4ed6\u4f1a\u5458", subtitle: "\u4ec5\u9700\u62bd\u9009", note: "", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaFull", "hiraganaFull", "gender", "birthday", "memberEmail", "memberPassword", "memberNumber", "memberInfoPhone", "memberInfoAddress", "lotteryInfo", "wechat"] },
  { id: "wvs_lottery", group: "lottery_only", category: "\u62bd\u9009", name: "wvs\u65e5\u5496\u4f1a\u5458\u4e00\u8f6e\u62bd\u9009", subtitle: "\u4e00\u8f6e\u62bd\u9009", note: "", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "manualKanaFull", "gender", "birthday", "wvsEmail", "wvsPassword", "memberNumber", "wvsJpPhone", "wvsJpAddress", "lotteryInfo", "wechat"] },
  { id: "wvs_official_lottery", group: "lottery_only", category: "\u5347p", name: "wvs\u65e5\u5496\u4f1a\u5458\u5347p", subtitle: "\u5347p\u5fc5\u586b\u9884\u7ea6\u756a\u53f7", note: "", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "manualKanaFull", "gender", "birthday", "wvsEmail", "wvsPassword", "memberNumber", "wvsJpPhone", "wvsJpAddress", "reservationNumberRequired", "lotteryInfo", "wechat"] },
  { id: "global_member", group: "lottery_only", category: "\u62bd\u9009", name: "global\u4f1a\u5458\u4e00\u8f6e\u62bd\u9009", subtitle: "\u4e00\u8f6e\u62bd\u9009", note: "", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "birthday", "gender", "globalMemberPhone", "wvsEmail", "wvsPassword", "memberNumber", "address", "lotteryInfo"] },
  { id: "global_upgrade", group: "lottery_only", category: "\u5347p", name: "global\u4f1a\u5458\u5347p", subtitle: "\u5347p\u5fc5\u586b\u9884\u7ea6\u756a\u53f7", note: "", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "birthday", "gender", "globalMemberPhone", "wvsEmail", "wvsPassword", "memberNumber", "address", "reservationNumberRequired", "lotteryInfo"] },
  { id: "wvs_special", group: "wvs_special", category: "\u4e13\u62cd", name: "\u5f00\u901awvs\u65e5\u5496\u4f1a\u5458\u4e13\u62cd", subtitle: "\u4e13\u62cd\u6216\u7279\u6b8a\u6d3b\u52a8", note: "", fields: ["passportEnglishName", "passportChineseName", "kanaFull", "gender", "phone", "wvsEmail", "wvsPassword", "wechat"] }
];
const modeList = document.getElementById("modeList");
const modeTitle = document.getElementById("modeTitle");
const modeSubtitle = document.getElementById("modeSubtitle");
const modeNote = document.getElementById("modeNote");
const formFields = document.getElementById("formFields");
const collectorForm = document.getElementById("collectorForm");
const resetFormButton = document.getElementById("resetFormButton");
const copyDraftButton = document.getElementById("copyDraftButton");
const copyResultButton = document.getElementById("copyResultButton");
const copyWechatButton = document.getElementById("copyWechatButton");
const resultOutput = document.getElementById("resultOutput");
const statusOutput = document.getElementById("statusOutput");
const katakanaPreview = document.getElementById("katakanaPreview");
const hiraganaPreview = document.getElementById("hiraganaPreview");

let activeMode = MODE_TEMPLATES[0];
let latestFormattedResult = "";

let activeFlowPath = ["open_only"];

const FLOW_TREE = [
  {
    id: "open_only",
    label: "\u4ec5\u9700\u5f00\u901a\u8d26\u53f7/\u4f1a\u5458",
    hint: "\u53ea\u6536\u96c6\u5f00\u901a\u8d26\u53f7\u6216\u4f1a\u5458\u9700\u8981\u7684\u57fa\u7840\u8d44\u6599",
    modeId: "fanclub_member_official"
  },
  {
    id: "open_and_lottery",
    label: "\u9700\u8981\u5f00\u901a\u8d26\u53f7/\u4f1a\u5458+\u62bd\u9009",
    hint: "\u4ece\u96f6\u51c6\u5907\uff0c\u540c\u65f6\u53c2\u52a0\u62bd\u9009",
    children: [
      { id: "has_wvs", label: "\u6709wvs\u8d26\u53f7", modeId: "wvs_all" },
      { id: "no_wvs", label: "\u6ca1\u6709wvs\u8d26\u53f7", modeId: "fanclub_all" }
    ]
  },
  {
    id: "lottery_only",
    label: "\u4ec5\u9700\u62bd\u9009",
    hint: "\u5df2\u6709\u8d26\u53f7\u6216\u4f1a\u5458\uff0c\u53ea\u8865\u62bd\u9009\u4fe1\u606f",
    children: [
      {
        id: "global_member_branch",
        label: "global\u4f1a\u5458",
        children: [
          { id: "global_round", label: "\u4e00\u8f6e\u62bd\u9009", modeId: "global_member" },
          { id: "global_upgrade", label: "\u5347p", modeId: "global_upgrade" }
        ]
      },
      {
        id: "wvs_jp_branch",
        label: "wvs\u65e5\u5496\u4f1a\u5458",
        children: [
          { id: "wvs_round", label: "\u4e00\u8f6e\u62bd\u9009", modeId: "wvs_lottery" },
          { id: "wvs_upgrade", label: "\u5347p", modeId: "wvs_official_lottery" }
        ]
      },
      { id: "other_member_branch", label: "\u5176\u4ed6\u4f1a\u5458", modeId: "fanclub_lottery" }
    ]
  },
  {
    id: "wvs_special_direct",
    label: "\u5f00\u901awvs\u65e5\u5496\u4f1a\u5458\u4e13\u62cd",
    hint: "\u53ea\u9700\u8981\u5f00\u901a\u65e5\u5496\u4f1a\u5458\uff0c\u4e0d\u9700\u8981\u5e2e\u5fd9\u5b8c\u5584\u5b98\u7f51\u4fe1\u606f",
    modeId: "wvs_special"
  }
];

const MODE_BY_ID = Object.fromEntries(MODE_TEMPLATES.map((mode) => [mode.id, mode]));

function normalizeName(value) {
  return value.replace(/\s+/g, "").trim();
}

function splitName(name) {
  const compound = COMPOUND_SURNAMES.find((item) => name.startsWith(item));
  if (compound) {
    return { surname: compound, given: name.slice(compound.length) };
  }
  return { surname: name.slice(0, 1), given: name.slice(1) };
}

function getPinyinForChar(char, mode) {
  if (mode === "surname" && SURNAME_PINYIN_OVERRIDES[char]) {
    return SURNAME_PINYIN_OVERRIDES[char];
  }
  return HANZI_PINYIN_MAP[char] || null;
}

function pinyinToKatakana(pinyin) {
  return PINYIN_TO_KATAKANA[pinyin] || null;
}

function kataToHira(text) {
  return text.replace(/[ァ-ヶ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

function toFullwidth(value) {
  return value
    .replace(/ /g, "\u3000")
    .replace(/[!-~]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 0xFEE0));
}

function convertPinyinListToKana(pinyinList) {
  const kanaParts = [];
  const unsupported = [];

  pinyinList.forEach((pinyin) => {
    const kana = pinyinToKatakana(pinyin);
    if (!kana) {
      unsupported.push(pinyin);
      return;
    }
    kanaParts.push(kana);
  });

  return { kana: kanaParts.join(""), unsupported };
}

function getSurnamePinyinList(surname) {
  if (COMPOUND_SURNAME_PINYIN[surname]) {
    return { syllables: COMPOUND_SURNAME_PINYIN[surname], unsupported: [] };
  }

  const syllables = [];
  const unsupported = [];
  for (const char of surname) {
    const pinyin = getPinyinForChar(char, "surname");
    if (!pinyin) {
      unsupported.push(char);
      continue;
    }
    syllables.push(pinyin);
  }
  return { syllables, unsupported };
}

function getGivenNamePinyinList(given) {
  const syllables = [];
  const unsupported = [];
  for (const char of given) {
    const pinyin = getPinyinForChar(char, "given");
    if (!pinyin) {
      unsupported.push(char);
      continue;
    }
    syllables.push(pinyin);
  }
  return { syllables, unsupported };
}

function convertChineseName(rawName) {
  const name = normalizeName(rawName);
  if (!name) {
    return { ok: false, message: "请输入中文姓名后再转换。" };
  }
  if (!/^[\u3400-\u9fff]+$/u.test(name)) {
    return { ok: false, message: "当前仅支持输入中文汉字姓名。" };
  }

  if (typeof HANZI_PINYIN_MAP === "undefined") {
    return { ok: false, message: "拼音字典未加载成功，请刷新页面重试。" };
  }

  const { surname, given } = splitName(name);
  if (!given) {
    return { ok: false, message: "请至少输入姓和名。" };
  }

  const surnameResult = getSurnamePinyinList(surname);
  const givenResult = getGivenNamePinyinList(given);
  const surnameKanaResult = convertPinyinListToKana(surnameResult.syllables);
  const givenKanaResult = convertPinyinListToKana(givenResult.syllables);
  const unsupported = [
    ...surnameResult.unsupported,
    ...givenResult.unsupported,
    ...surnameKanaResult.unsupported,
    ...givenKanaResult.unsupported
  ];

  if (!surnameKanaResult.kana || !givenKanaResult.kana) {
    return { ok: false, message: unsupported.length ? `暂时无法转换：${unsupported.join("、")}` : "名字匹配失败。" };
  }

  const katakanaFull = `${surnameKanaResult.kana}・${givenKanaResult.kana}`;
  return {
    ok: true,
    surnameKana: surnameKanaResult.kana,
    givenKana: givenKanaResult.kana,
    katakanaFull,
    hiraganaFull: kataToHira(katakanaFull),
    surnamePinyin: surnameResult.syllables.join(" / "),
    givenPinyin: givenResult.syllables.join(" / "),
    unsupported
  };
}

function renderKanaResult(result) {
  if (!result.ok) {
    statusOutput.innerHTML = `<p>${result.message}</p>`;
    katakanaPreview.textContent = "-";
    hiraganaPreview.textContent = "-";
    return;
  }

  katakanaPreview.textContent = result.katakanaFull;
  hiraganaPreview.textContent = result.hiraganaFull;
  statusOutput.innerHTML = `<p>${result.unsupported.length ? `已生成假名，但仍有未覆盖读音：${result.unsupported.join("、")}` : "中文姓名已自动补全片假名和平假名。"}</p>`;
}

function setFieldValueIfExists(fieldId, value) {
  const input = collectorForm.elements.namedItem(fieldId);
  if (input) {
    input.value = value;
  }
}

function clearAutoKanaFields() {
  ["kanaFull", "hiraganaFull"].forEach((fieldId) => {
    setFieldValueIfExists(fieldId, "");
  });
}

function setAutoKanaFromChinese(name) {
  const result = convertChineseName(name);
  renderKanaResult(result);
  if (!result.ok) {
    clearAutoKanaFields();
    return;
  }

  setFieldValueIfExists(`${result.surnameKana}\u30fb${result.givenKana}`);
  setFieldValueIfExists("kanaFull", result.katakanaFull);
  setFieldValueIfExists("hiraganaFull", result.hiraganaFull);
}
function syncFullwidthEnglish() {
  const englishName = collectorForm.elements.namedItem("passportEnglishName");
  const englishSurname = collectorForm.elements.namedItem("passportEnglishSurname");
  const englishGiven = collectorForm.elements.namedItem("passportEnglishGiven");

  if (englishName) {
    setFieldValueIfExists("passportEnglishNameFullwidth", toFullwidth(englishName.value.trim()));
  }
  if (englishSurname) {
    setFieldValueIfExists("passportEnglishSurnameFullwidth", toFullwidth(englishSurname.value.trim()));
  }
  if (englishGiven) {
    setFieldValueIfExists("passportEnglishGivenFullwidth", toFullwidth(englishGiven.value.trim()));
  }
}

function getNodeByPath(path) {
  let nodes = FLOW_TREE;
  let node = null;
  for (const id of path) {
    node = nodes.find((item) => item.id === id);
    if (!node) {
      return null;
    }
    nodes = node.children || [];
  }
  return node;
}

function normalizeFlowPath(path) {
  const normalized = [...path];
  let node = getNodeByPath(normalized);

  while (node && node.children && node.children.length === 1) {
    normalized.push(node.children[0].id);
    node = node.children[0];
  }

  if (node && node.modeId && MODE_BY_ID[node.modeId]) {
    activeMode = MODE_BY_ID[node.modeId];
  }

  return normalized;
}

function pathIncludes(columnPath, nodeId) {
  return activeFlowPath[columnPath.length] === nodeId;
}

function getChoiceLevels() {
  const levels = [];
  let nodes = FLOW_TREE;
  const path = [];

  while (nodes && nodes.length) {
    levels.push({ nodes, path: [...path] });
    const selectedId = activeFlowPath[path.length];
    const selectedNode = nodes.find((node) => node.id === selectedId);
    if (!selectedNode || !selectedNode.children || !selectedNode.children.length) {
      break;
    }
    path.push(selectedId);
    nodes = selectedNode.children;
  }

  return levels;
}

function renderChoiceLevel(level, index) {
  const levelEl = document.createElement("section");
  levelEl.className = "choice-level";

  const options = document.createElement("div");
  options.className = "choice-options";

  level.nodes.forEach((node) => {
    const nodePath = [...level.path, node.id];
    const selected = pathIncludes(level.path, node.id);
    const hasChildren = Boolean(node.children && node.children.length);

    const button = document.createElement("button");
    button.type = "button";
    button.className = `choice-button${selected ? " selected" : ""}`;
    button.setAttribute("aria-pressed", String(selected));

    const label = document.createElement("span");
    label.className = "choice-label";
    label.textContent = node.label;
    button.appendChild(label);

    if (node.hint) {
      const hint = document.createElement("span");
      hint.className = "choice-hint";
      hint.textContent = node.hint;
      button.appendChild(hint);
    }

    button.addEventListener("click", () => {
      activeFlowPath = normalizeFlowPath(nodePath);
      renderModeButtons();
      renderActiveMode();
    });

    options.appendChild(button);
  });

  levelEl.appendChild(options);
  return levelEl;
}

function renderModeButtons() {
  activeFlowPath = normalizeFlowPath(activeFlowPath);
  modeList.innerHTML = "";
  modeList.className = "choice-list";

  getChoiceLevels().forEach((level, index) => {
    modeList.appendChild(renderChoiceLevel(level, index));
  });
}
function createField(fieldId) {
  const config = FIELD_LIBRARY[fieldId];
  const wrapper = document.createElement("div");
  wrapper.className = `field${config.type === "textarea" ? " full" : ""}`;

  const label = document.createElement("label");
  label.setAttribute("for", fieldId);
  label.textContent = config.label;
  wrapper.appendChild(label);

  let input;
  if (config.type === "select") {
    input = document.createElement("select");
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "请选择";
    input.appendChild(placeholder);
    config.options.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      input.appendChild(option);
    });
  } else if (config.type === "textarea") {
    input = document.createElement("textarea");
  } else {
    input = document.createElement("input");
    input.type = config.type;
  }

  input.id = fieldId;
  input.name = fieldId;
  input.placeholder = config.placeholder || "";
  if (config.readonly) {
    input.readOnly = true;
  }
  if (config.required) {
    input.required = true;
    label.textContent = `${config.label} *`;
  }
  wrapper.appendChild(input);

  if (config.help) {
    const help = document.createElement("div");
    help.className = "field-help";
    help.textContent = config.help;
    wrapper.appendChild(help);
  }

  if (fieldId === "passportChineseName") {
    input.addEventListener("input", () => {
      setAutoKanaFromChinese(input.value);
    });
  }

  if (fieldId === "passportEnglishName" || fieldId === "passportEnglishSurname" || fieldId === "passportEnglishGiven") {
    input.addEventListener("input", syncFullwidthEnglish);
  }

  return wrapper;
}

function renderActiveMode() {
  const activeGroup = MODE_GROUPS.find((group) => group.id === activeMode.group);
  modeTitle.textContent = `${activeGroup ? activeGroup.label : activeMode.category} / ${activeMode.name}`;
  modeSubtitle.textContent = activeMode.subtitle;
  modeNote.textContent = activeMode.note;
  formFields.innerHTML = "";
  activeMode.fields.forEach((fieldId) => {
    formFields.appendChild(createField(fieldId));
  });

  const chineseNameInput = collectorForm.elements.namedItem("passportChineseName");
  if (chineseNameInput && chineseNameInput.value) {
    setAutoKanaFromChinese(chineseNameInput.value);
  } else {
    katakanaPreview.textContent = "-";
    hiraganaPreview.textContent = "-";
    statusOutput.innerHTML = "<p>中文姓名会自动补全片假名和平假名，护照英文姓名会自动补全全角版本。</p>";
  }

  syncFullwidthEnglish();
}

function getFormData() {
  const data = {};
  activeMode.fields.forEach((fieldId) => {
    const input = collectorForm.elements.namedItem(fieldId);
    data[fieldId] = input ? input.value.trim() : "";
  });
  return data;
}

function formatSubmission(mode, data) {
  const preferredOrder = [
    "passportEnglishName",
    "passportEnglishNameFullwidth",
    "passportEnglishSurname",
    "passportEnglishSurnameFullwidth",
    "passportEnglishGiven",
    "passportEnglishGivenFullwidth",
    "passportChineseName",
    
    "kanaFull",
    "hiraganaFull",
    "reservationNumberRequired"
  ];
  const remainingFields = mode.fields.filter((fieldId) => !preferredOrder.includes(fieldId));
  const orderedFields = [...preferredOrder.filter((fieldId) => mode.fields.includes(fieldId)), ...remainingFields];

  return orderedFields
    .filter((fieldId) => data[fieldId])
    .map((fieldId) => `${FIELD_LIBRARY[fieldId].label}：${data[fieldId]}`)
    .join("\n");
}

function renderFormattedResult(text) {
  latestFormattedResult = text;
  resultOutput.textContent = text || "这里会显示整理好的可复制结果。";
}

function copyText(text) {
  return navigator.clipboard.writeText(text);
}

async function submitCurrentForm(event) {
  event.preventDefault();
  const formatted = formatSubmission(activeMode, getFormData());
  if (!formatted) {
    statusOutput.innerHTML = "<p>当前还没有填写内容，先填写后再生成。</p>";
    return;
  }

  renderFormattedResult(formatted);
  try {
    await copyText(formatted);
    statusOutput.innerHTML = "<p>已生成并复制整理好的内容。</p>";
  } catch {
    statusOutput.innerHTML = "<p>已生成内容，但自动复制失败，请手动复制。</p>";
  }
}

async function copyDraft() {
  const text = formatSubmission(activeMode, getFormData());
  if (!text) {
    statusOutput.innerHTML = "<p>当前还没有可复制的填写内容。</p>";
    return;
  }

  try {
    await copyText(text);
    statusOutput.innerHTML = "<p>已复制当前填写内容。</p>";
  } catch {
    statusOutput.innerHTML = "<p>复制失败，请手动复制。</p>";
  }
}

async function copyResult() {
  if (!latestFormattedResult) {
    statusOutput.innerHTML = "<p>还没有生成可复制结果。</p>";
    return;
  }

  try {
    await copyText(latestFormattedResult);
    statusOutput.innerHTML = "<p>已复制结果。</p>";
  } catch {
    statusOutput.innerHTML = "<p>复制失败，请手动复制。</p>";
  }
}

collectorForm.addEventListener("submit", submitCurrentForm);
resetFormButton.addEventListener("click", () => {
  collectorForm.reset();
  renderActiveMode();
  renderFormattedResult("");
});
copyDraftButton.addEventListener("click", copyDraft);
copyResultButton.addEventListener("click", copyResult);
if (copyWechatButton) {
  copyWechatButton.addEventListener("click", async () => {
    try {
      await copyText("Keutaro_yy");
      copyWechatButton.textContent = "已复制 Keutaro_yy";
      setTimeout(() => {
        copyWechatButton.textContent = "Keutaro_yy";
      }, 1600);
    } catch {
      copyWechatButton.textContent = "复制失败";
    }
  });
}

renderModeButtons();
renderActiveMode();
renderFormattedResult("");


























