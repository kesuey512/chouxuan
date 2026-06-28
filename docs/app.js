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
  passportEnglishName: { label: "护照英文姓名", type: "text", placeholder: "例如：WANG XIAOMING" },
  passportEnglishNameFullwidth: { label: "护照英文姓名（全角）", type: "text", placeholder: "自动生成", readonly: true },
  passportEnglishSurname: { label: "护照英文姓氏", type: "text", placeholder: "例如：WANG" },
  passportEnglishSurnameFullwidth: { label: "护照英文姓氏（全角）", type: "text", placeholder: "自动生成", readonly: true },
  passportEnglishGiven: { label: "护照英文名字", type: "text", placeholder: "例如：XIAOMING" },
  passportEnglishGivenFullwidth: { label: "护照英文名字（全角）", type: "text", placeholder: "自动生成", readonly: true },
  passportChineseName: { label: "护照中文姓名", type: "text", placeholder: "例如：王小明" },
  gender: { label: "性别", type: "select", options: ["男", "女", "其他"] },
  email: { label: "邮箱", type: "email", placeholder: "example@email.com" },
  birthday: { label: "生日（年月日）", type: "text", placeholder: "例如：2001-06-24" },
  phone: { label: "电话", type: "tel", placeholder: "例如：09012345678" },
  favoriteMember: { label: "最喜欢的成员", type: "text", placeholder: "可填写成员名" },
  wechat: { label: "微信号（仅备用）", type: "text", placeholder: "可选填写" },
  memberEmail: { label: "会员邮箱", type: "email", placeholder: "会员登录邮箱" },
  memberPassword: { label: "会员密码", type: "text", placeholder: "会员登录密码" },
  memberNumber: { label: "会员号", type: "text", placeholder: "会员编号" },
  wvsEmail: { label: "WVS账号（邮箱）", type: "email", placeholder: "WVS 登录邮箱" },
  wvsPassword: { label: "WVS密码", type: "text", placeholder: "WVS 登录密码" },
  address: { label: "地址", type: "textarea", placeholder: "例如：填写到市即可" },
  japanAddress: { label: "日本地址", type: "textarea", placeholder: "填写完整可用地址" },
  lotteryInfo: { label: "抽选信息", type: "textarea", placeholder: "例如：6.24 指定席 一张" },
  reservationNumber: { label: "预约番号", type: "text", placeholder: "如果适用再填写" },
  optionalJapanPhone: { label: "可验证日本电话", type: "text", placeholder: "没有可留空", help: "如果你有可以验证的日本电话可以发给我，没有的话忽略。" },
  optionalJapanAddressPhone: { label: "自带日本邮编地址和电话", type: "textarea", placeholder: "没有可留空", help: "如果你自带日本邮编地址和电话，直接填在这里；没有可忽略。" },
  kanaSurname: { label: "日文片假名姓", type: "text", placeholder: "根据中文姓名自动生成", readonly: true },
  kanaGiven: { label: "日文片假名名", type: "text", placeholder: "根据中文姓名自动生成", readonly: true },
  kanaFull: { label: "日文片假名", type: "text", placeholder: "根据中文姓名自动生成", readonly: true },
  hiraganaFull: { label: "日文平假名", type: "text", placeholder: "根据中文姓名自动生成", readonly: true },
  piaNote: { label: "补充说明", type: "textarea", placeholder: "可填写其他备注", help: "如无内容可留空。" }
};

const MODE_GROUPS = [
  { id: "open_only", label: "仅开通账号/会员", hint: "适合只注册账号、开会员，不参加本次抽选" },
  { id: "open_and_lottery", label: "开通账号/会员并参加抽选", hint: "适合从零开始，需要一起准备账号和抽选资料" },
  { id: "lottery_only", label: "已有账号，仅参加抽选", hint: "适合已经有会员或账号，只补本次抽选信息" },
  { id: "wvs_special", label: "WVS 会员专拍", hint: "保留给 WVS 会员专拍或特殊活动场景" }
];

const MODE_TEMPLATES = [
  { id: "account_pia", group: "open_only", category: "票务账号", name: "pia账号", subtitle: "仅注册 pia 账号", note: "护照中文名会自动带出片假名和平假名，护照英文姓名会自动生成全角版本。", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaFull", "hiraganaFull", "gender", "email", "birthday", "optionalJapanPhone", "piaNote"] },
  { id: "account_eplus", group: "open_only", category: "票务账号", name: "eplus账号", subtitle: "仅注册 eplus 账号", note: "会根据中文姓名自动生成片假名姓和名，也会显示平假名。", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaSurname", "kanaGiven", "kanaFull", "hiraganaFull", "gender", "email", "birthday", "optionalJapanPhone"] },
  { id: "fanclub_member_official", group: "open_only", category: "日咖/官网", name: "会员 + 官网", subtitle: "开通 fanclub 会员与官网资料", note: "含片假名、平假名、电话、邮箱、生日、喜欢的成员。", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaSurname", "kanaGiven", "kanaFull", "hiraganaFull", "gender", "phone", "email", "birthday", "favoriteMember", "optionalJapanAddressPhone"] },
  { id: "wvs_member", group: "open_only", category: "WVS", name: "WVS会员", subtitle: "仅开通 WVS 会员", note: "用于 WVS 会员申请。", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaSurname", "kanaGiven", "kanaFull", "hiraganaFull", "gender", "phone", "wvsEmail", "wvsPassword"] },
  { id: "wvs_member_official", group: "open_only", category: "WVS", name: "WVS会员 + 官网", subtitle: "开通 WVS 会员并补官网资料", note: "包含生日、喜欢的成员、备用微信等。", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaSurname", "kanaGiven", "kanaFull", "hiraganaFull", "gender", "phone", "wvsEmail", "wvsPassword", "birthday", "favoriteMember", "wechat", "optionalJapanAddressPhone"] },
  { id: "wvs_official", group: "open_only", category: "WVS", name: "WVS官网", subtitle: "已有邮箱，补官网资料", note: "如果没有 WVS 账号，也可以先填邮箱。", fields: ["wvsEmail", "wvsPassword", "gender", "birthday", "favoriteMember", "optionalJapanAddressPhone"] },
  { id: "fanclub_all", group: "open_and_lottery", category: "日咖/官网", name: "会员 + 官网 + 抽选", subtitle: "开会员并参加本次抽选", note: "适合一次性收集会员、官网和抽选所需信息。", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaSurname", "kanaGiven", "kanaFull", "hiraganaFull", "birthday", "gender", "phone", "email", "favoriteMember", "lotteryInfo", "wechat", "optionalJapanAddressPhone"] },
  { id: "wvs_all", group: "open_and_lottery", category: "WVS", name: "WVS会员 + 官网 + 抽选", subtitle: "从零准备 WVS 全套资料", note: "没有 WVS 账号的话，填邮箱也可以。", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaSurname", "kanaGiven", "kanaFull", "hiraganaFull", "birthday", "gender", "phone", "wvsEmail", "wvsPassword", "favoriteMember", "lotteryInfo", "wechat", "optionalJapanAddressPhone"] },
  { id: "fanclub_lottery", group: "lottery_only", category: "日咖抽选", name: "日咖会员抽选", subtitle: "已有日咖会员信息，只填抽选", note: "只填写本次抽选需要的关键信息。", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaFull", "hiraganaFull", "gender", "birthday", "memberEmail", "memberPassword", "memberNumber", "phone", "japanAddress", "lotteryInfo", "wechat"] },
  { id: "wvs_lottery", group: "lottery_only", category: "WVS抽选", name: "WVS会员抽选", subtitle: "已有 WVS 会员资料，只填抽选", note: "本次席位只有指定席，按日期和数量填写即可。", fields: ["passportEnglishSurname", "passportEnglishSurnameFullwidth", "passportEnglishGiven", "passportEnglishGivenFullwidth", "passportChineseName", "kanaSurname", "kanaGiven", "kanaFull", "hiraganaFull", "gender", "birthday", "wvsEmail", "wvsPassword", "memberNumber", "phone", "japanAddress", "lotteryInfo", "wechat", "reservationNumber"] },
  { id: "wvs_official_lottery", group: "lottery_only", category: "WVS抽选", name: "WVS官网 + 抽选", subtitle: "已有官网账号，补抽选信息", note: "适合已有官网账号、需参加抽选的场景。", fields: ["passportEnglishSurname", "passportEnglishSurnameFullwidth", "passportEnglishGiven", "passportEnglishGivenFullwidth", "passportChineseName", "kanaSurname", "kanaGiven", "kanaFull", "hiraganaFull", "birthday", "gender", "phone", "wvsEmail", "wvsPassword", "favoriteMember", "lotteryInfo", "wechat", "optionalJapanAddressPhone"] },
  { id: "global_member", group: "lottery_only", category: "Global抽选", name: "Global会员抽选", subtitle: "已有 Global 会员，参加一轮或升 P", note: "地址填写到市即可，抽选信息只写日期即可。", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaFull", "hiraganaFull", "birthday", "gender", "phone", "wvsEmail", "wvsPassword", "memberNumber", "address", "reservationNumber", "lotteryInfo"] },
  { id: "wvs_special", group: "wvs_special", category: "WVS专拍", name: "WVS会员专拍", subtitle: "特殊活动或专拍资料", note: "适合 WVS 会员专拍、会员专属活动等需要基础会员信息的场景。", fields: ["passportEnglishName", "passportEnglishNameFullwidth", "passportChineseName", "kanaSurname", "kanaGiven", "kanaFull", "hiraganaFull", "gender", "phone", "wvsEmail", "wvsPassword", "birthday", "favoriteMember", "wechat", "optionalJapanAddressPhone"] }
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
const resultOutput = document.getElementById("resultOutput");
const statusOutput = document.getElementById("statusOutput");
const katakanaPreview = document.getElementById("katakanaPreview");
const hiraganaPreview = document.getElementById("hiraganaPreview");

let activeMode = MODE_TEMPLATES[0];
let latestFormattedResult = "";

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
  ["kanaSurname", "kanaGiven", "kanaFull", "hiraganaFull"].forEach((fieldId) => {
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

  setFieldValueIfExists("kanaSurname", result.surnameKana);
  setFieldValueIfExists("kanaGiven", result.givenKana);
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

function renderModeButtons() {
  modeList.innerHTML = "";

  MODE_GROUPS.forEach((group) => {
    const groupModes = MODE_TEMPLATES.filter((mode) => mode.group === group.id);
    if (!groupModes.length) {
      return;
    }

    const section = document.createElement("section");
    section.className = "mode-group";

    const heading = document.createElement("div");
    heading.className = "mode-group-heading";
    heading.innerHTML = `
      <h3>${group.label}</h3>
      <p>${group.hint}</p>
    `;
    section.appendChild(heading);

    const list = document.createElement("div");
    list.className = "mode-group-list";

    groupModes.forEach((mode) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `mode-button${mode.id === activeMode.id ? " active" : ""}`;
      button.innerHTML = `
        <span class="mode-tag">${mode.category}</span>
        <span class="mode-name">${mode.name}</span>
        <span class="mode-meta">${mode.subtitle}</span>
      `;
      button.addEventListener("click", () => {
        activeMode = mode;
        renderModeButtons();
        renderActiveMode();
      });
      list.appendChild(button);
    });

    section.appendChild(list);
    modeList.appendChild(section);
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
    "kanaSurname",
    "kanaGiven",
    "kanaFull",
    "hiraganaFull"
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

renderModeButtons();
renderActiveMode();
renderFormattedResult("");
