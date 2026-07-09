const STORAGE_KEY = "neon-dominion-save-v1";

const abilityLabels = {
  command: "指揮",
  scheme: "謀略",
  business: "經營",
  charm: "魅力",
};

const genderLabels = {
  male: "男",
  female: "女",
};

const factions = [
  { id: "player", name: "黑曜聯盟", color: "#16d5c8", money: 520, intel: 42, infamy: 12, morale: 72 },
  { id: "whiteTower", name: "白塔控股", color: "#f6cc60", money: 420, intel: 32, infamy: 9, morale: 68 },
  { id: "redDune", name: "赤砂財團", color: "#ef4d5d", money: 360, intel: 26, infamy: 20, morale: 70 },
  { id: "northForge", name: "北境兵工", color: "#8ea0a8", money: 390, intel: 24, infamy: 16, morale: 74 },
  { id: "seaSerpent", name: "海蛇聯盟", color: "#62d47d", money: 340, intel: 36, infamy: 24, morale: 66 },
];

const cityTemplates = [
  {
    id: "neonBay",
    name: "霓虹灣",
    tag: "金融港都",
    terrain: "海岸都市",
    climate: "季風雨帶",
    weather: "雨幕",
    image: "assets/cities/neon-bay.png",
    owner: "player",
    population: 8.7,
    income: 48,
    defense: 26,
    troops: 82,
    x: 53,
    y: 58,
    neighbors: ["skyGate", "blackHarbor", "verticalWard"],
  },
  {
    id: "skyGate",
    name: "天穹物流城",
    tag: "機場樞紐",
    terrain: "平原空港",
    climate: "乾冷風帶",
    weather: "側風",
    image: "assets/cities/sky-gate.png",
    owner: "player",
    population: 3.2,
    income: 32,
    defense: 18,
    troops: 54,
    x: 47,
    y: 34,
    neighbors: ["neonBay", "ironSpine", "emberVegas"],
  },
  {
    id: "emberVegas",
    name: "赤砂賭城",
    tag: "沙漠娛樂",
    terrain: "沙漠",
    climate: "熱浪乾旱",
    weather: "沙塵",
    image: "assets/cities/ember-vegas.png",
    owner: "redDune",
    population: 4.9,
    income: 42,
    defense: 21,
    troops: 74,
    x: 23,
    y: 43,
    neighbors: ["skyGate", "ironSpine", "verticalWard"],
  },
  {
    id: "ironSpine",
    name: "鐵脊礦城",
    tag: "山岳礦業",
    terrain: "山岳",
    climate: "高地寒流",
    weather: "濃霧",
    image: "assets/cities/iron-spine.png",
    owner: "northForge",
    population: 2.7,
    income: 38,
    defense: 34,
    troops: 88,
    x: 30,
    y: 18,
    neighbors: ["skyGate", "emberVegas", "frostWorks"],
  },
  {
    id: "frostWorks",
    name: "北霜工業城",
    tag: "重工軍備",
    terrain: "極寒工業",
    climate: "冰封季",
    weather: "凍雨",
    image: "assets/cities/frost-works.png",
    owner: "northForge",
    population: 5.1,
    income: 45,
    defense: 30,
    troops: 96,
    x: 62,
    y: 16,
    neighbors: ["ironSpine", "skyGate", "offshoreCrown"],
  },
  {
    id: "blackHarbor",
    name: "黑潮港",
    tag: "走私海運",
    terrain: "熱帶港口",
    climate: "颱風海域",
    weather: "濕熱",
    image: "assets/cities/black-harbor.png",
    owner: "seaSerpent",
    population: 6.2,
    income: 40,
    defense: 24,
    troops: 72,
    x: 73,
    y: 68,
    neighbors: ["neonBay", "offshoreCrown", "verticalWard"],
  },
  {
    id: "offshoreCrown",
    name: "離岸王冠島",
    tag: "企業避稅島",
    terrain: "海島堡壘",
    climate: "海洋季風",
    weather: "海霧",
    image: "assets/cities/offshore-crown.png",
    owner: "whiteTower",
    population: 1.4,
    income: 58,
    defense: 36,
    troops: 80,
    x: 82,
    y: 35,
    neighbors: ["frostWorks", "blackHarbor", "neonBay"],
  },
  {
    id: "verticalWard",
    name: "垂直貧民區",
    tag: "巨構街區",
    terrain: "高密度都市",
    climate: "污染熱島",
    weather: "酸雨",
    image: "assets/cities/vertical-ward.png",
    owner: "whiteTower",
    population: 12.5,
    income: 30,
    defense: 28,
    troops: 92,
    x: 43,
    y: 78,
    neighbors: ["neonBay", "blackHarbor", "emberVegas"],
  },
];

const officerTemplates = [
  {
    id: "lingYao",
    name: "凌曜",
    gender: "male",
    faction: "player",
    role: "領袖",
    city: "neonBay",
    loyalty: 100,
    stress: 18,
    abilities: { command: 4, scheme: 3, business: 3, charm: 4 },
    portrait: "assets/officers/ling-yao.png",
    tone: "linear-gradient(135deg, #16d5c8, #f6cc60)",
  },
  {
    id: "miraChen",
    name: "陳米拉",
    gender: "female",
    faction: "player",
    role: "情報主管",
    city: "neonBay",
    loyalty: 82,
    stress: 25,
    abilities: { command: 2, scheme: 5, business: 3, charm: 4 },
    portrait: "assets/officers/mira-chen.png",
    tone: "linear-gradient(135deg, #d862ff, #16d5c8)",
  },
  {
    id: "qinYue",
    name: "秦越",
    gender: "male",
    faction: "player",
    role: "傭兵指揮官",
    city: "skyGate",
    loyalty: 76,
    stress: 34,
    abilities: { command: 5, scheme: 3, business: 2, charm: 2 },
    portrait: "assets/officers/qin-yue.png",
    tone: "linear-gradient(135deg, #ef4d5d, #f6cc60)",
  },
  {
    id: "songYalin",
    name: "宋雅嵐",
    gender: "female",
    faction: "player",
    role: "資產主管",
    city: "neonBay",
    loyalty: 79,
    stress: 22,
    abilities: { command: 2, scheme: 3, business: 5, charm: 4 },
    portrait: "assets/officers/song-yalin.png",
    tone: "linear-gradient(135deg, #f6cc60, #d862ff)",
  },
  {
    id: "seleneVoss",
    name: "賽琳沃斯",
    gender: "female",
    faction: "whiteTower",
    role: "董事特使",
    city: "offshoreCrown",
    loyalty: 88,
    stress: 16,
    abilities: { command: 2, scheme: 4, business: 5, charm: 4 },
    portrait: "assets/officers/selene-voss.png",
    tone: "linear-gradient(135deg, #f6cc60, #eef3f5)",
  },
  {
    id: "makoRedd",
    name: "赤真吾",
    gender: "male",
    faction: "redDune",
    role: "沙漠軍火商",
    city: "emberVegas",
    loyalty: 80,
    stress: 26,
    abilities: { command: 4, scheme: 3, business: 4, charm: 3 },
    portrait: "assets/officers/mako-redd.png",
    tone: "linear-gradient(135deg, #ef4d5d, #452017)",
  },
  {
    id: "irinaVale",
    name: "伊蓮娜",
    gender: "female",
    faction: "northForge",
    role: "裝甲旅長",
    city: "frostWorks",
    loyalty: 84,
    stress: 30,
    abilities: { command: 5, scheme: 2, business: 3, charm: 2 },
    portrait: "assets/officers/irina-vale.png",
    tone: "linear-gradient(135deg, #8ea0a8, #d8f1ff)",
  },
  {
    id: "kaiMorrow",
    name: "凱莫羅",
    gender: "male",
    faction: "seaSerpent",
    role: "港口中介",
    city: "blackHarbor",
    loyalty: 78,
    stress: 28,
    abilities: { command: 3, scheme: 4, business: 3, charm: 4 },
    portrait: "assets/officers/kai-morrow.png",
    tone: "linear-gradient(135deg, #62d47d, #063f42)",
  },
];

const itemCatalog = [
  {
    id: "tailoredSuit",
    name: "訂製戰略西裝",
    group: "personal",
    scope: "officer",
    slot: "服裝",
    cost: 70,
    maintenance: 0,
    effects: { abilities: { charm: 1, business: 1 }, loyalty: 2 },
    text: "高階會談、名流場合與招募行動更穩。",
  },
  {
    id: "signatureWatch",
    name: "限量機械名錶",
    group: "personal",
    scope: "officer",
    slot: "配件",
    cost: 95,
    maintenance: 0,
    effects: { abilities: { charm: 1, scheme: 1 }, exposure: 1 },
    text: "提高排場，也讓敵方更容易注意到持有人。",
  },
  {
    id: "combatImplant",
    name: "戰術神經義體",
    group: "personal",
    scope: "officer",
    slot: "義體",
    cost: 130,
    maintenance: 4,
    effects: { abilities: { command: 1, scheme: 1 }, attack: 4 },
    text: "軍事人物的核心升級，增加突襲戰效率。",
  },
  {
    id: "hypercar",
    name: "碳纖維超跑",
    group: "vehicle",
    scope: "officer",
    slot: "載具",
    cost: 160,
    maintenance: 5,
    effects: { abilities: { charm: 2 }, mobility: 1, exposure: 2 },
    text: "社交、威嚇、出入高端場所都有明顯效果。",
  },
  {
    id: "armoredConvoy",
    name: "防彈車隊",
    group: "vehicle",
    scope: "officer",
    slot: "載具",
    cost: 150,
    maintenance: 6,
    effects: { abilities: { command: 1 }, defense: 5, loyalty: 2 },
    text: "降低突發事件風險，並提升守城戰表現。",
  },
  {
    id: "skyHelicopter",
    name: "行政直升機",
    group: "vehicle",
    scope: "faction",
    cost: 240,
    maintenance: 12,
    effects: { mobility: 2, attack: 5, unlock: "空中突襲" },
    text: "解鎖更強的跨城指揮與空中突襲加成。",
  },
  {
    id: "privateJet",
    name: "私人噴射機",
    group: "vehicle",
    scope: "faction",
    cost: 420,
    maintenance: 22,
    effects: { mobility: 4, charm: 1, income: 8, unlock: "跨城外交" },
    text: "提升全球排場與高端交易效率。",
  },
  {
    id: "penthouse",
    name: "雲端豪宅",
    group: "lifestyle",
    scope: "officer",
    slot: "住宅",
    cost: 180,
    maintenance: 8,
    effects: { abilities: { charm: 1 }, loyalty: 8, stress: -8, exposure: 2 },
    text: "穩定忠誠與壓力，但會提高媒體曝光。",
  },
  {
    id: "privateClub",
    name: "私人會員俱樂部",
    group: "lifestyle",
    scope: "city",
    cost: 260,
    maintenance: 10,
    effects: { income: 16, intel: 4, charm: 1, exposure: 2 },
    text: "產生現金流、情報與名流人脈。",
  },
  {
    id: "nightclub",
    name: "夜色俱樂部",
    group: "lifestyle",
    scope: "city",
    cost: 170,
    maintenance: 5,
    effects: { income: 14, intel: 3, infamy: 2 },
    text: "收入與地下消息穩定，但容易增加惡名。",
  },
  {
    id: "securityFirm",
    name: "城市安保公司",
    group: "industry",
    scope: "city",
    cost: 220,
    maintenance: 9,
    effects: { defense: 9, intel: 2, income: 6 },
    text: "提升城市防禦與反情報能力。",
  },
  {
    id: "milIntel",
    name: "軍事情報公司",
    group: "industry",
    scope: "faction",
    cost: 360,
    maintenance: 16,
    effects: { intel: 9, attack: 7, defense: 4, unlock: "深層滲透" },
    text: "高級偵察、反滲透與戰前破壞的核心資產。",
  },
  {
    id: "armsFoundry",
    name: "軍火製造商",
    group: "industry",
    scope: "city",
    cost: 330,
    maintenance: 14,
    effects: { income: 18, attack: 8, infamy: 3 },
    text: "提高戰力與收入，也會推高國際壓力。",
  },
  {
    id: "listedCompany",
    name: "上市控股公司",
    group: "industry",
    scope: "faction",
    cost: 500,
    maintenance: 18,
    effects: { income: 42, charm: 1, exposure: 4 },
    text: "大型融資工具，收入高但曝光與監管風險也高。",
  },
];

const actionCatalog = [
  {
    id: "droneSwarm",
    name: "無人機蜂群",
    type: "military",
    cost: { money: 40, intel: 8 },
    text: "下一次進攻攻擊力 +24%。雨幕、沙塵與海霧會削弱效果。",
  },
  {
    id: "mercContract",
    name: "傭兵合約",
    type: "military",
    cost: { money: 75 },
    text: "為己方選定城市增加 24 部隊。",
  },
  {
    id: "signalHack",
    name: "監控網入侵",
    type: "intel",
    cost: { intel: 14 },
    text: "敵方選定城市防禦 -5，駐軍 -10。",
  },
  {
    id: "blackMarket",
    name: "黑市軍火線",
    type: "money",
    cost: {},
    text: "立刻獲得 95 資金，惡名 +4。",
  },
  {
    id: "vipBanquet",
    name: "頂樓私人宴會",
    type: "social",
    cost: { money: 55 },
    text: "選定己方人物忠誠 +8，壓力 -10。",
  },
  {
    id: "weatherOps",
    name: "氣象作戰窗",
    type: "intel",
    cost: { intel: 10 },
    text: "下一次進攻忽略天候懲罰，攻擊力 +10%。",
  },
];

const itemGroupImages = {
  personal: "assets/items/personal.png",
  vehicle: "assets/items/vehicle.png",
  lifestyle: "assets/items/lifestyle.png",
  industry: "assets/items/industry.png",
};

let state = createInitialState();

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function createInitialState() {
  return {
    turn: 1,
    selectedCity: "neonBay",
    selectedOfficer: "lingYao",
    activeTab: "city",
    marketFilter: "all",
    factions: cloneData(factions),
    cities: cloneData(cityTemplates),
    officers: cloneData(officerTemplates),
    ownedItems: [],
    hand: ["droneSwarm", "mercContract", "signalHack", "blackMarket"],
    nextAttack: null,
    log: [
      "黑曜聯盟在霓虹灣完成戰情連線。",
      "各大企業軍閥開始動員私人部隊。",
    ],
  };
}

function $(selector) {
  return document.querySelector(selector);
}

function getFaction(id) {
  return state.factions.find((faction) => faction.id === id);
}

function getCity(id) {
  return state.cities.find((city) => city.id === id);
}

function getOfficer(id) {
  return state.officers.find((officer) => officer.id === id);
}

function getItem(id) {
  return itemCatalog.find((item) => item.id === id);
}

function getAction(id) {
  return actionCatalog.find((action) => action.id === id);
}

function hydrateStateAssets() {
  for (const template of officerTemplates) {
    if (!state.officers.some((officer) => officer.id === template.id)) {
      state.officers.push(cloneData(template));
    }
  }

  for (const city of state.cities) {
    const template = cityTemplates.find((item) => item.id === city.id);
    if (template?.image && !city.image) city.image = template.image;
  }

  for (const officer of state.officers) {
    const template = officerTemplates.find((item) => item.id === officer.id);
    if (template?.portrait && !officer.portrait) officer.portrait = template.portrait;
    if (template?.gender && !officer.gender) officer.gender = template.gender;
  }

  state.marketFilter ||= "all";
  state.hand = Array.isArray(state.hand) && state.hand.length ? state.hand : drawHand();
  if (!getOfficer(state.selectedOfficer)) state.selectedOfficer = state.officers.find((officer) => officer.faction === "player")?.id || "";
  if (!getCity(state.selectedCity)) state.selectedCity = state.cities[0]?.id || "";
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function money(value) {
  return `${Math.round(value)}M`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function imageTag(src, alt, className) {
  if (!src) return "";
  return `<img class="${className}" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" />`;
}

function pushLog(message) {
  state.log.unshift(message);
  state.log = state.log.slice(0, 80);
}

function factionCities(factionId) {
  return state.cities.filter((city) => city.owner === factionId);
}

function factionTroops(factionId) {
  return factionCities(factionId).reduce((sum, city) => sum + city.troops, 0);
}

function getOwnedItemsForFaction(factionId) {
  return state.ownedItems.filter((entry) => entry.faction === factionId);
}

function collectEffects(factionId, cityId = null) {
  const effects = {
    income: 0,
    intel: 0,
    attack: 0,
    defense: 0,
    mobility: 0,
    maintenance: 0,
    infamy: 0,
    exposure: 0,
    charm: 0,
  };

  for (const entry of getOwnedItemsForFaction(factionId)) {
    if (entry.scope === "city" && (!cityId || entry.cityId !== cityId)) continue;
    if (entry.scope === "officer") continue;
    const item = getItem(entry.itemId);
    if (!item) continue;
    Object.entries(item.effects).forEach(([key, value]) => {
      if (key === "abilities" || key === "unlock") return;
      effects[key] = (effects[key] || 0) + value;
    });
    effects.maintenance += item.maintenance || 0;
  }

  return effects;
}

function collectCityEffects(factionId, cityId) {
  const effects = {
    income: 0,
    intel: 0,
    attack: 0,
    defense: 0,
    mobility: 0,
    maintenance: 0,
    infamy: 0,
    exposure: 0,
    charm: 0,
  };

  for (const entry of getOwnedItemsForFaction(factionId)) {
    if (entry.scope !== "city" || entry.cityId !== cityId) continue;
    const item = getItem(entry.itemId);
    if (!item) continue;
    Object.entries(item.effects).forEach(([key, value]) => {
      if (key === "abilities" || key === "unlock") return;
      effects[key] = (effects[key] || 0) + value;
    });
    effects.maintenance += item.maintenance || 0;
  }

  return effects;
}

function getOfficerItems(officerId) {
  return state.ownedItems.filter((entry) => entry.scope === "officer" && entry.officerId === officerId);
}

function effectiveOfficer(officer) {
  const abilities = { ...officer.abilities };
  let loyalty = officer.loyalty;
  let stress = officer.stress;
  let attack = 0;
  let defense = 0;
  let exposure = 0;
  let maintenance = 0;

  for (const entry of getOfficerItems(officer.id)) {
    const item = getItem(entry.itemId);
    if (!item) continue;
    if (item.effects.abilities) {
      Object.entries(item.effects.abilities).forEach(([key, value]) => {
        abilities[key] = (abilities[key] || 0) + value;
      });
    }
    loyalty += item.effects.loyalty || 0;
    stress += item.effects.stress || 0;
    attack += item.effects.attack || 0;
    defense += item.effects.defense || 0;
    exposure += item.effects.exposure || 0;
    maintenance += item.maintenance || 0;
  }

  return {
    ...officer,
    abilities,
    loyalty: clamp(loyalty, 0, 100),
    stress: clamp(stress, 0, 100),
    attack,
    defense,
    exposure,
    maintenance,
  };
}

function getBestOfficer(factionId, ability = "command") {
  const officers = state.officers.filter((officer) => officer.faction === factionId);
  if (!officers.length) return null;
  return officers
    .map(effectiveOfficer)
    .sort((a, b) => b.abilities[ability] - a.abilities[ability])[0];
}

function getPlayerEconomy() {
  const cityIncome = factionCities("player").reduce((sum, city) => sum + city.income, 0);
  const factionEffects = collectEffects("player");
  const cityIncomeEffects = factionCities("player").reduce((sum, city) => sum + collectCityEffects("player", city.id).income, 0);
  const cityMaintenance = factionCities("player").reduce((sum, city) => sum + collectCityEffects("player", city.id).maintenance, 0);
  const cityIntel = factionCities("player").reduce((sum, city) => sum + collectCityEffects("player", city.id).intel, 0);
  const troopCost = Math.round(factionTroops("player") * 0.08);
  const officerMaintenance = state.officers
    .filter((officer) => officer.faction === "player")
    .reduce((sum, officer) => sum + effectiveOfficer(officer).maintenance, 0);
  const maintenance = factionEffects.maintenance + cityMaintenance + officerMaintenance + troopCost;

  return {
    gross: cityIncome + cityIncomeEffects + factionEffects.income,
    maintenance,
    net: cityIncome + cityIncomeEffects + factionEffects.income - maintenance,
    intel: 5 + factionEffects.intel + cityIntel + factionCities("player").length,
  };
}

function weatherSet(city) {
  const byClimate = {
    "季風雨帶": ["雨幕", "放晴", "雷暴"],
    "乾冷風帶": ["側風", "晴朗", "低溫"],
    "熱浪乾旱": ["沙塵", "熱浪", "晴朗"],
    "高地寒流": ["濃霧", "低溫", "山雨"],
    "冰封季": ["凍雨", "暴雪", "極寒"],
    "颱風海域": ["濕熱", "颱風", "海霧"],
    "海洋季風": ["海霧", "強風", "放晴"],
    "污染熱島": ["酸雨", "煙霾", "悶熱"],
  };
  return byClimate[city.climate] || ["晴朗"];
}

function cycleWeather() {
  for (const city of state.cities) {
    const options = weatherSet(city);
    city.weather = options[Math.floor(Math.random() * options.length)];
  }
}

function terrainDefenseModifier(city) {
  const terrain = city.terrain;
  if (terrain.includes("山岳")) return 1.28;
  if (terrain.includes("海島")) return 1.22;
  if (terrain.includes("高密度")) return 1.16;
  if (terrain.includes("極寒")) return 1.12;
  if (terrain.includes("熱帶港口")) return 1.05;
  return 1;
}

function weatherAttackModifier(city, action = null) {
  if (action?.ignoreWeather) return 1;
  if (["颱風", "暴雪"].includes(city.weather)) return 0.68;
  if (["沙塵", "海霧", "濃霧", "酸雨"].includes(city.weather)) return 0.82;
  if (["雨幕", "凍雨", "強風", "側風"].includes(city.weather)) return 0.9;
  if (["熱浪", "極寒"].includes(city.weather)) return 0.88;
  return 1;
}

function drawRouteLayer() {
  const routeLayer = $("#routeLayer");
  const drawn = new Set();
  routeLayer.innerHTML = "";
  for (const city of state.cities) {
    for (const neighborId of city.neighbors) {
      const key = [city.id, neighborId].sort().join("-");
      if (drawn.has(key)) continue;
      const neighbor = getCity(neighborId);
      if (!neighbor) continue;
      drawn.add(key);
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("class", "route-line");
      line.setAttribute("x1", city.x);
      line.setAttribute("y1", city.y);
      line.setAttribute("x2", neighbor.x);
      line.setAttribute("y2", neighbor.y);
      routeLayer.appendChild(line);
    }
  }
}

function renderCityNodes() {
  const layer = $("#cityLayer");
  layer.innerHTML = state.cities
    .map((city) => {
      const faction = getFaction(city.owner);
      const active = city.id === state.selectedCity ? " active" : "";
      return `
        <button class="city-node${active}" type="button" data-city="${city.id}"
          style="left:${city.x}%; top:${city.y}%; color:${faction.color}">
          ${imageTag(city.image, city.name, "city-node-art")}
          <strong>${escapeHtml(city.name)}</strong>
          <span>${escapeHtml(faction.name)} / ${city.troops} 部隊</span>
          <span>${escapeHtml(city.weather)} / 防 ${city.defense}</span>
        </button>
      `;
    })
    .join("");
}

function renderStats() {
  const player = getFaction("player");
  const economy = getPlayerEconomy();
  $("#turnLabel").textContent = `第 ${state.turn} 回合`;
  $("#mapSummary").textContent = `${player.name}控制 ${factionCities("player").length} 座城市`;
  $("#statStrip").innerHTML = [
    ["資金", money(player.money)],
    ["淨收入", `${economy.net >= 0 ? "+" : ""}${money(economy.net)}`],
    ["情報", Math.round(player.intel)],
    ["城市", `${factionCities("player").length}/${state.cities.length}`],
    ["部隊", factionTroops("player")],
  ]
    .map(([label, value]) => `<div class="stat"><small>${label}</small><strong>${value}</strong></div>`)
    .join("");

  $("#buffLabel").textContent = state.nextAttack ? state.nextAttack.label : "無加成";
}

function renderDetail() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === state.activeTab);
  });

  if (state.activeTab === "city") renderCityDetail();
  if (state.activeTab === "officers") renderOfficerDetail();
  if (state.activeTab === "assets") renderAssetsDetail();
  if (state.activeTab === "actions") renderActionDetail();
}

function renderCityDetail() {
  const city = getCity(state.selectedCity);
  const faction = getFaction(city.owner);
  const effects = collectEffects(city.owner, city.id);
  const localEffects = collectCityEffects(city.owner, city.id);
  const adjacentPlayer = city.neighbors.some((id) => getCity(id)?.owner === "player");
  const owned = city.owner === "player";
  $("#detailPanel").innerHTML = `
    <div class="city-hero">
      ${imageTag(city.image, city.name, "city-hero-img")}
      <span class="pill">${escapeHtml(city.terrain)}</span>
      <span class="pill">${escapeHtml(city.weather)}</span>
    </div>
    <h2>${escapeHtml(city.name)}</h2>
    <p class="muted">${escapeHtml(city.tag)} / ${escapeHtml(city.terrain)} / ${escapeHtml(city.climate)}</p>
    <div class="summary-grid">
      ${metric("控制勢力", faction.name)}
      ${metric("天候", city.weather)}
      ${metric("人口", `${city.population}M`)}
      ${metric("收入", `${money(city.income + localEffects.income)} / 回合`)}
      ${metric("防禦", `${city.defense + effects.defense}`)}
      ${metric("駐軍", city.troops)}
    </div>
    <p class="muted">${cityWarNote(city)}</p>
    <div class="command-row">
      <button class="small-btn buy" type="button" data-command="recruit" ${owned ? "" : "disabled"}>徵兵</button>
      <button class="small-btn" type="button" data-command="fortify" ${owned ? "" : "disabled"}>強化防禦</button>
      <button class="small-btn" type="button" data-command="invest" ${owned ? "" : "disabled"}>投資產業</button>
      <button class="small-btn attack" type="button" data-command="attack" ${!owned && adjacentPlayer ? "" : "disabled"}>進攻</button>
    </div>
  `;
}

function metric(label, value) {
  return `<div class="metric"><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></div>`;
}

function cityWarNote(city) {
  const notes = [];
  if (city.terrain.includes("山岳")) notes.push("山岳地形讓守方獲得大量防禦優勢。");
  if (city.terrain.includes("高密度")) notes.push("高密度都市適合巷戰，裝甲推進會變慢。");
  if (city.terrain.includes("海島")) notes.push("海島堡壘需要海空補給，正面攻擊代價高。");
  if (["颱風", "暴雪", "沙塵", "海霧", "濃霧", "酸雨"].includes(city.weather)) {
    notes.push(`${city.weather}會降低進攻效率。`);
  }
  return notes.join(" ") || "此地形對進攻與防守沒有極端修正。";
}

function renderOfficerDetail() {
  const playerOfficers = state.officers.filter((officer) => officer.faction === "player");
  $("#detailPanel").innerHTML = `
    <div class="officer-list">
      ${playerOfficers.map(renderOfficerCard).join("")}
    </div>
    <form class="form-grid" id="officerForm">
      <input class="text-control" name="name" maxlength="18" placeholder="新人物姓名" required />
      <input class="text-control" name="role" maxlength="18" placeholder="職位" required />
      <select class="text-control" name="gender" aria-label="性別">
        <option value="female">女</option>
        <option value="male">男</option>
      </select>
      <label class="upload-box">
        <input type="file" name="portrait" accept="image/*" />
        <span>頭像</span>
      </label>
      <button class="primary-btn" type="submit">建立人物</button>
    </form>
  `;
}

function renderOfficerCard(officer) {
  const effective = effectiveOfficer(officer);
  const city = getCity(officer.city);
  const active = officer.id === state.selectedOfficer ? " active" : "";
  const items = getOfficerItems(officer.id).map((entry) => getItem(entry.itemId)?.name).filter(Boolean);
  return `
    <button class="officer-card${active}" type="button" data-officer="${officer.id}">
      <span class="portrait" style="${officer.portrait ? "" : placeholderTone(officer)}">
        ${officer.portrait ? imageTag(officer.portrait, officer.name, "portrait-img") : initials(officer.name)}
      </span>
      <span>
        <strong>${escapeHtml(officer.name)} / ${escapeHtml(officer.role)} / ${genderLabels[officer.gender] || "未定"}</strong>
        <span class="muted">${escapeHtml(city?.name || "未配置")} / 忠誠 ${effective.loyalty} / 壓力 ${effective.stress}</span>
        <span class="ability-grid">
          ${Object.entries(abilityLabels)
            .map(([key, label]) => `<span class="ability">${label}<strong>${effective.abilities[key]}</strong></span>`)
            .join("")}
        </span>
        <span class="muted">${items.length ? `持有：${escapeHtml(items.join("、"))}` : "尚未持有個人物品"}</span>
      </span>
    </button>
  `;
}

function placeholderTone(officer) {
  return `background:${officer.tone || "linear-gradient(135deg,#16d5c8,#f6cc60)"}`;
}

function initials(name) {
  return String(name).slice(0, 2);
}

function renderAssetsDetail() {
  const ownedItems = getOwnedItemsForFaction("player");
  if (!ownedItems.length) {
    $("#detailPanel").innerHTML = `<div class="empty-state">尚未持有資產</div>`;
    return;
  }

  $("#detailPanel").innerHTML = `
    <div class="asset-list">
      ${ownedItems
        .map((entry) => {
          const item = getItem(entry.itemId);
          const holder = entry.scope === "officer" ? getOfficer(entry.officerId)?.name : entry.scope === "city" ? getCity(entry.cityId)?.name : "勢力";
          return `
            <div class="asset-card">
              <div class="asset-thumb">${imageTag(itemImage(item), item.name, "thumb-img")}</div>
              <div>
                <h3>${escapeHtml(item.name)} <span class="pill">${escapeHtml(holder || "未知")}</span></h3>
                <p>${escapeHtml(item.text)}</p>
                <p>維護費 ${money(item.maintenance || 0)} / 回合</p>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderActionDetail() {
  const player = getFaction("player");
  const economy = getPlayerEconomy();
  $("#detailPanel").innerHTML = `
    <h2>${escapeHtml(player.name)}</h2>
    <div class="summary-grid">
      ${metric("資金", money(player.money))}
      ${metric("情報", player.intel)}
      ${metric("惡名", player.infamy)}
      ${metric("士氣", player.morale)}
      ${metric("總收入", money(economy.gross))}
      ${metric("維護費", money(economy.maintenance))}
    </div>
    <p class="muted">惡名越高，回合事件越容易觸發媒體追查、敵方暗殺與資產稽查。</p>
  `;
}

function renderActionHand() {
  $("#actionHand").innerHTML = state.hand
    .map((id) => {
      const action = getAction(id);
      const disabled = canPay(action.cost) ? "" : "disabled";
      return `
        <div class="action-card ${action.type}">
          <div class="card-copy">
            <h3>${escapeHtml(action.name)}</h3>
            <p>${escapeHtml(action.text)}</p>
            <p>${formatCost(action.cost)}</p>
          </div>
          <button class="small-btn buy" type="button" data-action-card="${action.id}" ${disabled}>執行</button>
        </div>
      `;
    })
    .join("");
}

function formatCost(cost) {
  const parts = [];
  if (cost.money) parts.push(`資金 ${money(cost.money)}`);
  if (cost.intel) parts.push(`情報 ${cost.intel}`);
  return parts.length ? parts.join(" / ") : "無成本";
}

function canPay(cost) {
  const player = getFaction("player");
  return player.money >= (cost.money || 0) && player.intel >= (cost.intel || 0);
}

function pay(cost) {
  const player = getFaction("player");
  player.money -= cost.money || 0;
  player.intel -= cost.intel || 0;
}

function renderMarket() {
  const filter = state.marketFilter;
  const items = itemCatalog.filter((item) => filter === "all" || item.group === filter);
  $("#marketFilter").value = filter;
  $("#marketList").innerHTML = items
    .map((item) => {
      const target = item.scope === "officer" ? getOfficer(state.selectedOfficer)?.name : item.scope === "city" ? getCity(state.selectedCity)?.name : "勢力";
      return `
        <div class="market-card">
          <div class="market-thumb">${imageTag(itemImage(item), item.name, "thumb-img")}</div>
          <div>
            <h3>${escapeHtml(item.name)} <span class="pill">${groupLabel(item.group)}</span></h3>
            <p>${escapeHtml(item.text)}</p>
            <p>歸屬：${escapeHtml(target || "未選定")} / 維護 ${money(item.maintenance || 0)}</p>
          </div>
          <div>
            <div class="cost">${money(item.cost)}</div>
            <button class="small-btn buy" type="button" data-buy="${item.id}" ${canBuyItem(item) ? "" : "disabled"}>購買</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function itemImage(item) {
  return item.image || itemGroupImages[item.group] || "";
}

function groupLabel(group) {
  return {
    personal: "個人物品",
    vehicle: "載具",
    lifestyle: "生活資產",
    industry: "戰略產業",
  }[group];
}

function canBuyItem(item) {
  const player = getFaction("player");
  if (player.money < item.cost) return false;
  if (item.scope === "officer") {
    const officer = getOfficer(state.selectedOfficer);
    if (!officer || officer.faction !== "player") return false;
    return !getOfficerItems(officer.id).some((entry) => entry.itemId === item.id || getItem(entry.itemId)?.slot === item.slot);
  }
  if (item.scope === "city") {
    const city = getCity(state.selectedCity);
    if (!city || city.owner !== "player") return false;
    return !state.ownedItems.some((entry) => entry.itemId === item.id && entry.cityId === city.id);
  }
  return !state.ownedItems.some((entry) => entry.itemId === item.id && entry.scope === "faction");
}

function renderLog() {
  $("#logList").innerHTML = state.log.map((entry) => `<div class="log-entry">${escapeHtml(entry)}</div>`).join("");
}

function render() {
  hydrateStateAssets();
  drawRouteLayer();
  renderCityNodes();
  renderStats();
  renderDetail();
  renderActionHand();
  renderMarket();
  renderLog();
}

function recruit() {
  const city = getCity(state.selectedCity);
  const player = getFaction("player");
  if (!city || city.owner !== "player" || player.money < 65) return;
  player.money -= 65;
  city.troops += 24;
  pushLog(`${city.name}完成傭兵徵召，駐軍 +24。`);
  render();
}

function fortify() {
  const city = getCity(state.selectedCity);
  const player = getFaction("player");
  if (!city || city.owner !== "player" || player.money < 55) return;
  player.money -= 55;
  city.defense += 4;
  pushLog(`${city.name}完成防禦強化，防禦 +4。`);
  render();
}

function invest() {
  const city = getCity(state.selectedCity);
  const player = getFaction("player");
  if (!city || city.owner !== "player" || player.money < 80) return;
  player.money -= 80;
  city.income += 5;
  pushLog(`${city.name}產業投資完成，收入 +5M。`);
  render();
}

function attackSelectedCity() {
  const target = getCity(state.selectedCity);
  if (!target || target.owner === "player") return;

  const sources = target.neighbors
    .map(getCity)
    .filter((city) => city && city.owner === "player" && city.troops > 18)
    .sort((a, b) => b.troops - a.troops);

  if (!sources.length) {
    pushLog(`${target.name}周邊沒有足夠兵力可進攻。`);
    render();
    return;
  }

  const source = sources[0];
  const committed = Math.max(18, Math.floor(source.troops * 0.58));
  const playerCommander = effectiveOfficer(getOfficer(state.selectedOfficer) || getBestOfficer("player"));
  const defenderCommander = getBestOfficer(target.owner, "command");
  const playerEffects = collectEffects("player", source.id);
  const targetEffects = collectEffects(target.owner, target.id);
  const buff = state.nextAttack;
  const weatherMod = weatherAttackModifier(target, buff);
  const terrainMod = terrainDefenseModifier(target);
  let dronePenalty = 1;
  if (buff?.drone && ["雨幕", "沙塵", "海霧", "濃霧", "颱風"].includes(target.weather)) dronePenalty = 0.86;

  const attackPower =
    committed *
    (0.72 + playerCommander.abilities.command * 0.09 + playerCommander.abilities.scheme * 0.035) *
    weatherMod *
    dronePenalty *
    (1 + (playerEffects.attack + playerCommander.attack + (buff?.attack || 0)) / 100) *
    randomRange(0.9, 1.12);

  const defensePower =
    (target.troops * (0.72 + (defenderCommander?.abilities.command || 2) * 0.075) + (target.defense + targetEffects.defense) * 2.5) *
    terrainMod *
    randomRange(0.92, 1.1);

  source.troops -= committed;

  if (attackPower > defensePower) {
    const survivors = Math.max(12, Math.floor(committed * randomRange(0.42, 0.62)));
    const oldOwner = getFaction(target.owner);
    target.owner = "player";
    target.troops = survivors;
    target.defense = Math.max(12, target.defense - 3);
    getFaction("player").infamy += 2;
    pushLog(`秦越頻道確認：${source.name}部隊攻下${target.name}，${oldOwner.name}撤離。`);
  } else {
    const damage = Math.floor(committed * randomRange(0.26, 0.44));
    target.troops = Math.max(10, target.troops - damage);
    getFaction("player").morale = clamp(getFaction("player").morale - 4, 0, 100);
    pushLog(`${source.name}進攻${target.name}失利，敵方仍守住城市。`);
  }

  state.nextAttack = null;
  render();
}

function randomRange(min, max) {
  return min + Math.random() * (max - min);
}

function buyItem(itemId) {
  const item = getItem(itemId);
  const player = getFaction("player");
  if (!item || !canBuyItem(item)) return;
  player.money -= item.cost;
  const entry = {
    uid: `${item.id}-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    itemId: item.id,
    faction: "player",
    scope: item.scope,
  };
  if (item.scope === "officer") entry.officerId = state.selectedOfficer;
  if (item.scope === "city") entry.cityId = state.selectedCity;
  state.ownedItems.push(entry);

  const holder =
    item.scope === "officer" ? getOfficer(state.selectedOfficer)?.name : item.scope === "city" ? getCity(state.selectedCity)?.name : "黑曜聯盟";
  pushLog(`${holder}取得${item.name}。`);
  render();
}

function playAction(actionId) {
  const action = getAction(actionId);
  if (!action || !state.hand.includes(actionId) || !canPay(action.cost)) return;
  pay(action.cost);

  if (action.id === "droneSwarm") {
    state.nextAttack = { label: "無人機蜂群 +24%", attack: 24, drone: true };
    pushLog("無人機蜂群已待命，下一次進攻獲得攻擊加成。");
  }

  if (action.id === "mercContract") {
    const city = getCity(state.selectedCity);
    if (city?.owner === "player") {
      city.troops += 24;
      pushLog(`${city.name}接收傭兵合約，駐軍 +24。`);
    } else {
      getFaction("player").money += action.cost.money || 0;
      pushLog("傭兵合約需要選定己方城市。");
      return;
    }
  }

  if (action.id === "signalHack") {
    const city = getCity(state.selectedCity);
    if (city?.owner && city.owner !== "player") {
      city.defense = Math.max(8, city.defense - 5);
      city.troops = Math.max(8, city.troops - 10);
      pushLog(`${city.name}監控網遭入侵，防禦與駐軍下降。`);
    } else {
      getFaction("player").intel += action.cost.intel || 0;
      pushLog("監控網入侵需要選定敵方城市。");
      return;
    }
  }

  if (action.id === "blackMarket") {
    const player = getFaction("player");
    player.money += 95;
    player.infamy += 4;
    pushLog("黑市軍火線完成結算，資金 +95M，惡名 +4。");
  }

  if (action.id === "vipBanquet") {
    const officer = getOfficer(state.selectedOfficer);
    if (officer?.faction === "player") {
      officer.loyalty = clamp(officer.loyalty + 8, 0, 100);
      officer.stress = clamp(officer.stress - 10, 0, 100);
      pushLog(`${officer.name}出席頂樓私人宴會，忠誠上升、壓力下降。`);
    } else {
      getFaction("player").money += action.cost.money || 0;
      pushLog("私人宴會需要選定己方人物。");
      return;
    }
  }

  if (action.id === "weatherOps") {
    state.nextAttack = { label: "氣象作戰窗 +10%", attack: 10, ignoreWeather: true };
    pushLog("氣象作戰窗開啟，下一次進攻忽略天候懲罰。");
  }

  state.hand = state.hand.filter((id) => id !== actionId);
  render();
}

function endTurn() {
  resolveEconomy();
  resolveExposureEvents();
  runAiTurns();
  cycleWeather();
  state.turn += 1;
  state.hand = drawHand();
  state.nextAttack = null;
  pushLog(`第 ${state.turn} 回合開始。`);
  render();
}

function resolveEconomy() {
  for (const faction of state.factions) {
    const cityIncome = factionCities(faction.id).reduce((sum, city) => sum + city.income, 0);
    const itemEffects = collectEffects(faction.id);
    const cityIncomeEffects = factionCities(faction.id).reduce((sum, city) => sum + collectCityEffects(faction.id, city.id).income, 0);
    const cityMaintenance = factionCities(faction.id).reduce((sum, city) => sum + collectCityEffects(faction.id, city.id).maintenance, 0);
    const cityIntel = factionCities(faction.id).reduce((sum, city) => sum + collectCityEffects(faction.id, city.id).intel, 0);
    const troopCost = Math.round(factionTroops(faction.id) * 0.08);
    const officerMaintenance = state.officers
      .filter((officer) => officer.faction === faction.id)
      .reduce((sum, officer) => sum + effectiveOfficer(officer).maintenance, 0);
    const net = cityIncome + itemEffects.income + cityIncomeEffects - itemEffects.maintenance - cityMaintenance - officerMaintenance - troopCost;
    faction.money = Math.max(0, Math.round(faction.money + net));
    faction.intel = Math.round(faction.intel + 4 + itemEffects.intel + cityIntel + factionCities(faction.id).length);
    faction.infamy += itemEffects.infamy || 0;
    faction.morale = clamp(faction.morale + (net >= 0 ? 1 : -2), 0, 100);
  }
}

function resolveExposureEvents() {
  const player = getFaction("player");
  const exposure = getOwnedItemsForFaction("player").reduce((sum, entry) => {
    const item = getItem(entry.itemId);
    return sum + (item?.effects.exposure || 0);
  }, 0);
  if (player.infamy + exposure < 22) return;
  if (Math.random() > 0.35) return;
  const loss = Math.min(player.money, Math.round(20 + (player.infamy + exposure) * 1.5));
  player.money -= loss;
  player.intel = Math.max(0, player.intel - 6);
  pushLog(`媒體與監管機構追查奢華資產，資金 -${money(loss)}，情報 -6。`);
}

function runAiTurns() {
  for (const faction of state.factions.filter((item) => item.id !== "player")) {
    aiRecruit(faction);
    aiAttack(faction);
  }
}

function aiRecruit(faction) {
  const cities = factionCities(faction.id);
  if (!cities.length || faction.money < 48) return;
  const target = cities.sort((a, b) => a.troops - b.troops)[0];
  faction.money -= 48;
  target.troops += 16;
}

function aiAttack(faction) {
  const candidates = factionCities(faction.id)
    .flatMap((city) =>
      city.neighbors
        .map(getCity)
        .filter((target) => target && target.owner !== faction.id && city.troops > target.troops * 0.92)
        .map((target) => ({ source: city, target })),
    )
    .sort((a, b) => b.source.troops - a.source.troops);

  if (!candidates.length || Math.random() > 0.48) return;
  const { source, target } = candidates[0];
  const committed = Math.floor(source.troops * 0.42);
  const commander = getBestOfficer(faction.id, "command");
  const defender = getBestOfficer(target.owner, "command");
  const attackPower =
    committed *
    (0.72 + (commander?.abilities.command || 2) * 0.08) *
    weatherAttackModifier(target) *
    randomRange(0.9, 1.1);
  const defensePower =
    (target.troops * (0.72 + (defender?.abilities.command || 2) * 0.07) + target.defense * 2.2) *
    terrainDefenseModifier(target) *
    randomRange(0.92, 1.08);

  source.troops -= committed;
  if (attackPower > defensePower) {
    target.owner = faction.id;
    target.troops = Math.max(10, Math.floor(committed * 0.45));
    pushLog(`${faction.name}從${source.name}攻下${target.name}。`);
  } else {
    target.troops = Math.max(8, target.troops - Math.floor(committed * 0.22));
    pushLog(`${faction.name}進攻${target.name}失敗。`);
  }
}

function drawHand() {
  const deck = [...actionCatalog.map((action) => action.id)];
  const hand = [];
  while (hand.length < 4 && deck.length) {
    const index = Math.floor(Math.random() * deck.length);
    hand.push(deck.splice(index, 1)[0]);
  }
  return hand;
}

function saveGame() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  pushLog("遊戲已儲存到瀏覽器。");
  render();
}

function loadGame() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    pushLog("找不到瀏覽器存檔。");
    render();
    return;
  }
  try {
    state = JSON.parse(saved);
    hydrateStateAssets();
    pushLog("已讀取瀏覽器存檔。");
    render();
  } catch {
    pushLog("存檔格式無法讀取。");
    render();
  }
}

function newGame() {
  state = createInitialState();
  localStorage.removeItem(STORAGE_KEY);
  render();
}

function handleCommand(command) {
  if (command === "save") saveGame();
  if (command === "load") loadGame();
  if (command === "new-game") newGame();
  if (command === "end-turn") endTurn();
  if (command === "recruit") recruit();
  if (command === "fortify") fortify();
  if (command === "invest") invest();
  if (command === "attack") attackSelectedCity();
  if (command === "clear-log") {
    state.log = [];
    render();
  }
}

function createOfficer(form) {
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const role = String(data.get("role") || "").trim();
  const gender = String(data.get("gender") || "female");
  const file = data.get("portrait");
  if (!name || !role) return;

  const finish = (portrait = "") => {
    const id = `custom-${Date.now()}`;
    const base = 2 + Math.floor(Math.random() * 3);
    state.officers.push({
      id,
      name,
      gender,
      faction: "player",
      role,
      city: state.selectedCity,
      loyalty: 72 + Math.floor(Math.random() * 16),
      stress: 18 + Math.floor(Math.random() * 20),
      abilities: {
        command: base,
        scheme: 2 + Math.floor(Math.random() * 4),
        business: 2 + Math.floor(Math.random() * 4),
        charm: 2 + Math.floor(Math.random() * 4),
      },
      portrait,
      tone: "linear-gradient(135deg, #16d5c8, #d862ff)",
    });
    state.selectedOfficer = id;
    pushLog(`${name}加入黑曜聯盟。`);
    form.reset();
    render();
  };

  if (file && file.size) {
    const reader = new FileReader();
    reader.onload = () => finish(String(reader.result || ""));
    reader.readAsDataURL(file);
  } else {
    finish();
  }
}

document.addEventListener("click", (event) => {
  const cityButton = event.target.closest("[data-city]");
  if (cityButton) {
    state.selectedCity = cityButton.dataset.city;
    state.activeTab = "city";
    render();
    return;
  }

  const officerButton = event.target.closest("[data-officer]");
  if (officerButton) {
    state.selectedOfficer = officerButton.dataset.officer;
    render();
    return;
  }

  const tab = event.target.closest("[data-tab]");
  if (tab) {
    state.activeTab = tab.dataset.tab;
    render();
    return;
  }

  const buy = event.target.closest("[data-buy]");
  if (buy) {
    buyItem(buy.dataset.buy);
    return;
  }

  const actionCard = event.target.closest("[data-action-card]");
  if (actionCard) {
    playAction(actionCard.dataset.actionCard);
    return;
  }

  const command = event.target.closest("[data-command]");
  if (command) {
    handleCommand(command.dataset.command);
  }
});

$("#marketFilter").addEventListener("change", (event) => {
  state.marketFilter = event.target.value;
  renderMarket();
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "officerForm") {
    event.preventDefault();
    createOfficer(event.target);
  }
});

render();
