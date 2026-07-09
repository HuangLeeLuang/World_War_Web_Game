const STORAGE_KEY = "neon-dominion-save-v1";

const defaultFactions = [
  { id: "player", name: "黑曜聯盟", color: "#16d5c8", money: 520, intel: 42, infamy: 12, morale: 72 },
  { id: "whiteTower", name: "白塔控股", color: "#f6cc60", money: 420, intel: 32, infamy: 9, morale: 68 },
  { id: "redDune", name: "赤砂財團", color: "#ef4d5d", money: 360, intel: 26, infamy: 20, morale: 70 },
  { id: "northForge", name: "北境兵工", color: "#8ea0a8", money: 390, intel: 24, infamy: 16, morale: 74 },
  { id: "seaSerpent", name: "海蛇聯盟", color: "#62d47d", money: 340, intel: 36, infamy: 24, morale: 66 },
];

const defaultCities = [
  { id: "neonBay", name: "霓虹灣", tag: "金融港都", terrain: "海岸都市", climate: "季風雨帶", weather: "雨幕", image: "assets/cities/neon-bay.png", owner: "player", population: 8.7, income: 48, defense: 26, troops: 82, x: 53, y: 58, neighbors: ["skyGate", "blackHarbor", "verticalWard"] },
  { id: "skyGate", name: "天穹物流城", tag: "機場樞紐", terrain: "平原空港", climate: "乾冷風帶", weather: "側風", image: "assets/cities/sky-gate.png", owner: "player", population: 3.2, income: 32, defense: 18, troops: 54, x: 47, y: 34, neighbors: ["neonBay", "ironSpine", "emberVegas"] },
  { id: "emberVegas", name: "赤砂賭城", tag: "沙漠娛樂", terrain: "沙漠", climate: "熱浪乾旱", weather: "沙塵", image: "assets/cities/ember-vegas.png", owner: "redDune", population: 4.9, income: 42, defense: 21, troops: 74, x: 23, y: 43, neighbors: ["skyGate", "ironSpine", "verticalWard"] },
  { id: "ironSpine", name: "鐵脊礦城", tag: "山岳礦業", terrain: "山岳", climate: "高地寒流", weather: "濃霧", image: "assets/cities/iron-spine.png", owner: "northForge", population: 2.7, income: 38, defense: 34, troops: 88, x: 30, y: 18, neighbors: ["skyGate", "emberVegas", "frostWorks"] },
  { id: "frostWorks", name: "北霜工業城", tag: "重工軍備", terrain: "極寒工業", climate: "冰封季", weather: "凍雨", image: "assets/cities/frost-works.png", owner: "northForge", population: 5.1, income: 45, defense: 30, troops: 96, x: 62, y: 16, neighbors: ["ironSpine", "skyGate", "offshoreCrown"] },
  { id: "blackHarbor", name: "黑潮港", tag: "走私海運", terrain: "熱帶港口", climate: "颱風海域", weather: "濕熱", image: "assets/cities/black-harbor.png", owner: "seaSerpent", population: 6.2, income: 40, defense: 24, troops: 72, x: 73, y: 68, neighbors: ["neonBay", "offshoreCrown", "verticalWard"] },
  { id: "offshoreCrown", name: "離岸王冠島", tag: "企業避稅島", terrain: "海島堡壘", climate: "海洋季風", weather: "海霧", image: "assets/cities/offshore-crown.png", owner: "whiteTower", population: 1.4, income: 58, defense: 36, troops: 80, x: 82, y: 35, neighbors: ["frostWorks", "blackHarbor", "neonBay"] },
  { id: "verticalWard", name: "垂直貧民區", tag: "巨構街區", terrain: "高密度都市", climate: "污染熱島", weather: "酸雨", image: "assets/cities/vertical-ward.png", owner: "whiteTower", population: 12.5, income: 30, defense: 28, troops: 92, x: 43, y: 78, neighbors: ["neonBay", "blackHarbor", "emberVegas"] },
];

const defaultOfficers = [
  { id: "lingYao", name: "凌曜", gender: "male", faction: "player", role: "領袖", city: "neonBay", loyalty: 100, stress: 18, abilities: { command: 4, scheme: 3, business: 3, charm: 4 }, portrait: "assets/officers/ling-yao.png", tone: "linear-gradient(135deg, #16d5c8, #f6cc60)" },
  { id: "miraChen", name: "陳米拉", gender: "female", faction: "player", role: "情報主管", city: "neonBay", loyalty: 82, stress: 25, abilities: { command: 2, scheme: 5, business: 3, charm: 4 }, portrait: "assets/officers/mira-chen.png", tone: "linear-gradient(135deg, #d862ff, #16d5c8)" },
  { id: "qinYue", name: "秦越", gender: "male", faction: "player", role: "傭兵指揮官", city: "skyGate", loyalty: 76, stress: 34, abilities: { command: 5, scheme: 3, business: 2, charm: 2 }, portrait: "assets/officers/qin-yue.png", tone: "linear-gradient(135deg, #ef4d5d, #f6cc60)" },
  { id: "songYalin", name: "宋雅嵐", gender: "female", faction: "player", role: "資產主管", city: "neonBay", loyalty: 79, stress: 22, abilities: { command: 2, scheme: 3, business: 5, charm: 4 }, portrait: "assets/officers/song-yalin.png", tone: "linear-gradient(135deg, #f6cc60, #d862ff)" },
  { id: "seleneVoss", name: "賽琳沃斯", gender: "female", faction: "whiteTower", role: "董事特使", city: "offshoreCrown", loyalty: 88, stress: 16, abilities: { command: 2, scheme: 4, business: 5, charm: 4 }, portrait: "assets/officers/selene-voss.png", tone: "linear-gradient(135deg, #f6cc60, #eef3f5)" },
  { id: "makoRedd", name: "赤真吾", gender: "male", faction: "redDune", role: "沙漠軍火商", city: "emberVegas", loyalty: 80, stress: 26, abilities: { command: 4, scheme: 3, business: 4, charm: 3 }, portrait: "assets/officers/mako-redd.png", tone: "linear-gradient(135deg, #ef4d5d, #452017)" },
  { id: "irinaVale", name: "伊蓮娜", gender: "female", faction: "northForge", role: "裝甲旅長", city: "frostWorks", loyalty: 84, stress: 30, abilities: { command: 5, scheme: 2, business: 3, charm: 2 }, portrait: "assets/officers/irina-vale.png", tone: "linear-gradient(135deg, #8ea0a8, #d8f1ff)" },
  { id: "kaiMorrow", name: "凱莫羅", gender: "male", faction: "seaSerpent", role: "港口中介", city: "blackHarbor", loyalty: 78, stress: 28, abilities: { command: 3, scheme: 4, business: 3, charm: 4 }, portrait: "assets/officers/kai-morrow.png", tone: "linear-gradient(135deg, #62d47d, #063f42)" },
];

let state = loadState();

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function $(selector) {
  return document.querySelector(selector);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function createDefaultState() {
  return {
    turn: 1,
    selectedCity: "neonBay",
    selectedOfficer: "lingYao",
    activeTab: "city",
    marketFilter: "all",
    factions: clone(defaultFactions),
    cities: clone(defaultCities),
    officers: clone(defaultOfficers),
    ownedItems: [],
    hand: ["droneSwarm", "mercContract", "signalHack", "blackMarket"],
    nextAttack: null,
    log: ["修改器建立初始存檔。"],
  };
}

function normalizeState(nextState) {
  nextState ||= createDefaultState();
  nextState.factions ||= clone(defaultFactions);
  nextState.cities ||= clone(defaultCities);
  nextState.officers ||= clone(defaultOfficers);
  nextState.ownedItems ||= [];
  nextState.hand ||= ["droneSwarm", "mercContract", "signalHack", "blackMarket"];
  nextState.log ||= [];

  for (const template of defaultFactions) {
    if (!nextState.factions.some((item) => item.id === template.id)) nextState.factions.push(clone(template));
  }
  for (const template of defaultCities) {
    const city = nextState.cities.find((item) => item.id === template.id);
    if (!city) nextState.cities.push(clone(template));
    else Object.assign(city, { image: city.image || template.image, neighbors: city.neighbors || template.neighbors });
  }
  for (const template of defaultOfficers) {
    const officer = nextState.officers.find((item) => item.id === template.id);
    if (!officer) nextState.officers.push(clone(template));
    else {
      officer.gender ||= template.gender;
      officer.portrait ||= template.portrait;
      officer.abilities ||= clone(template.abilities);
    }
  }

  return nextState;
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return createDefaultState();
    return normalizeState(JSON.parse(saved));
  } catch {
    return createDefaultState();
  }
}

function render() {
  normalizeState(state);
  $("#saveStatus").textContent = `目前編輯：第 ${state.turn} 回合`;
  renderGlobal();
  renderFactions();
  renderCities();
  renderOfficers();
  renderJson();
}

function input(type, id, field, value, options = {}) {
  const step = options.step || 1;
  const inputType = options.kind || "number";
  return `
    <div class="field">
      <label>${escapeHtml(options.label || field)}</label>
      <input class="num-input" type="${inputType}" step="${step}" value="${escapeHtml(value)}"
        data-type="${type}" data-id="${id}" data-field="${field}" />
    </div>
  `;
}

function select(type, id, field, value, choices, label) {
  return `
    <div class="field">
      <label>${escapeHtml(label)}</label>
      <select class="select-input" data-type="${type}" data-id="${id}" data-field="${field}">
        ${choices.map((choice) => `<option value="${escapeHtml(choice.id)}" ${choice.id === value ? "selected" : ""}>${escapeHtml(choice.name)}</option>`).join("")}
      </select>
    </div>
  `;
}

function renderGlobal() {
  $("#globalEditor").innerHTML = `
    <div class="edit-card">
      <h3>局勢</h3>
      <div class="field-grid">
        ${input("global", "state", "turn", state.turn, { label: "回合" })}
        ${select("global", "state", "selectedCity", state.selectedCity, state.cities, "選定城市")}
        ${select("global", "state", "selectedOfficer", state.selectedOfficer, state.officers, "選定人物")}
      </div>
    </div>
  `;
}

function renderFactions() {
  $("#factionEditor").innerHTML = state.factions
    .map((faction) => `
      <div class="edit-card">
        <h3>${escapeHtml(faction.name)}</h3>
        <div class="field-grid">
          ${input("faction", faction.id, "money", faction.money, { label: "資金" })}
          ${input("faction", faction.id, "intel", faction.intel, { label: "情報" })}
          ${input("faction", faction.id, "infamy", faction.infamy, { label: "惡名" })}
          ${input("faction", faction.id, "morale", faction.morale, { label: "士氣" })}
        </div>
      </div>
    `)
    .join("");
}

function renderCities() {
  const factionChoices = state.factions.map((faction) => ({ id: faction.id, name: faction.name }));
  $("#cityEditor").innerHTML = state.cities
    .map((city) => `
      <div class="edit-card">
        <h3>${escapeHtml(city.name)}</h3>
        <div class="field-grid">
          ${select("city", city.id, "owner", city.owner, factionChoices, "控制勢力")}
          ${input("city", city.id, "troops", city.troops, { label: "駐軍" })}
          ${input("city", city.id, "defense", city.defense, { label: "防禦" })}
          ${input("city", city.id, "income", city.income, { label: "收入" })}
          ${input("city", city.id, "population", city.population, { label: "人口", step: 0.1 })}
        </div>
      </div>
    `)
    .join("");
}

function renderOfficers() {
  const factionChoices = state.factions.map((faction) => ({ id: faction.id, name: faction.name }));
  const cityChoices = state.cities.map((city) => ({ id: city.id, name: city.name }));
  const genderChoices = [
    { id: "female", name: "女" },
    { id: "male", name: "男" },
  ];
  $("#officerEditor").innerHTML = state.officers
    .map((officer) => `
      <div class="edit-card">
        <h3>${escapeHtml(officer.name)} / ${escapeHtml(officer.role)}</h3>
        <div class="field-grid">
          ${select("officer", officer.id, "gender", officer.gender, genderChoices, "性別")}
          ${select("officer", officer.id, "faction", officer.faction, factionChoices, "勢力")}
          ${select("officer", officer.id, "city", officer.city, cityChoices, "所在城市")}
          ${input("officer", officer.id, "loyalty", officer.loyalty, { label: "忠誠" })}
          ${input("officer", officer.id, "stress", officer.stress, { label: "壓力" })}
          ${input("ability", officer.id, "command", officer.abilities.command, { label: "指揮" })}
          ${input("ability", officer.id, "scheme", officer.abilities.scheme, { label: "謀略" })}
          ${input("ability", officer.id, "business", officer.abilities.business, { label: "經營" })}
          ${input("ability", officer.id, "charm", officer.abilities.charm, { label: "魅力" })}
        </div>
      </div>
    `)
    .join("");
}

function renderJson() {
  $("#jsonBox").value = JSON.stringify(state, null, 2);
}

function readInputValue(element) {
  if (element.tagName === "SELECT" || element.type === "text") return element.value;
  const number = Number(element.value);
  return Number.isFinite(number) ? number : 0;
}

function updateStateFromInput(element) {
  const type = element.dataset.type;
  const id = element.dataset.id;
  const field = element.dataset.field;
  const value = readInputValue(element);
  if (type === "global") state[field] = value;
  if (type === "faction") state.factions.find((item) => item.id === id)[field] = value;
  if (type === "city") state.cities.find((item) => item.id === id)[field] = value;
  if (type === "officer") state.officers.find((item) => item.id === id)[field] = value;
  if (type === "ability") state.officers.find((item) => item.id === id).abilities[field] = value;
  renderJson();
}

function saveState() {
  state.log ||= [];
  state.log.unshift("修改器已套用數值。");
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  $("#saveStatus").textContent = `已儲存：第 ${state.turn} 回合`;
  renderJson();
}

function maxPlayer() {
  const player = state.factions.find((item) => item.id === "player");
  player.money = 9999;
  player.intel = 999;
  player.morale = 100;
  player.infamy = 0;
  state.cities.filter((city) => city.owner === "player").forEach((city) => {
    city.troops = Math.max(city.troops, 300);
    city.defense = Math.max(city.defense, 80);
    city.income = Math.max(city.income, 120);
  });
  render();
}

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-type]")) updateStateFromInput(event.target);
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-type]")) updateStateFromInput(event.target);
});

document.addEventListener("click", (event) => {
  const tool = event.target.closest("[data-tool]")?.dataset.tool;
  if (!tool) return;
  if (tool === "save") saveState();
  if (tool === "reload") {
    state = loadState();
    render();
  }
  if (tool === "create") {
    state = createDefaultState();
    render();
  }
  if (tool === "max-player") maxPlayer();
  if (tool === "export-json") renderJson();
  if (tool === "import-json") {
    try {
      state = normalizeState(JSON.parse($("#jsonBox").value));
      render();
      $("#saveStatus").textContent = "JSON 已匯入，尚未儲存";
    } catch {
      $("#saveStatus").textContent = "JSON 格式錯誤";
    }
  }
});

render();
