const STORAGE_KEY = "moving-mate-v2";

const SORT_OPTIONS = [
  { value: "recommended", label: "おすすめ順" },
  { value: "initialAsc", label: "初期費用が安い順" },
  { value: "monthlyAsc", label: "月額が安い順" },
  { value: "areaDesc", label: "広い順" },
  { value: "ageAsc", label: "築浅順" },
  { value: "walkAsc", label: "駅徒歩が短い順" },
  { value: "stationMatch", label: "指定駅に近い順" }
];

const QUICK_FILTERS = [
  { key: "floor2Plus", label: "2階以上" },
  { key: "bathToiletSeparateOnly", label: "バストイレ別" },
  { key: "nearTargetStationOnly", label: "指定駅に近い" },
  { key: "freeRentOnly", label: "フリーレントあり" }
];

const PROPERTY_FIELDS = [
  { name: "id", type: "hidden" },
  { name: "name", label: "物件名", type: "text", required: true },
  { name: "agency", label: "不動産会社名", type: "text", required: true },
  { name: "sourceUrl", label: "物件URL", type: "url", placeholder: "https://..." },
  { name: "nearestStation", label: "最寄り駅", type: "text", placeholder: "例: 新宿" },
  { name: "walkMinutes", label: "駅徒歩(分)", type: "number" },
  { name: "rent", label: "家賃", type: "number" },
  { name: "maintenanceFee", label: "管理費", type: "number" },
  { name: "deposit", label: "敷金", type: "number" },
  { name: "keyMoney", label: "礼金", type: "number" },
  { name: "brokerFee", label: "仲介手数料", type: "number" },
  { name: "guaranteeFee", label: "保証料", type: "number" },
  { name: "fireInsurance", label: "火災保険", type: "number" },
  { name: "keyExchange", label: "鍵交換", type: "number" },
  { name: "support24", label: "24時間サポート", type: "number" },
  { name: "disinfection", label: "消毒費用", type: "number" },
  { name: "cleaningFee", label: "クリーニング費用", type: "number" },
  { name: "otherFees", label: "その他費用", type: "number" },
  { name: "freeRentMonths", label: "フリーレント(月)", type: "number", step: "0.5" },
  { name: "area", label: "広さ(m2)", type: "number", step: "0.1" },
  { name: "buildingAge", label: "築年数", type: "number" },
  { name: "floor", label: "階数", type: "number" },
  { name: "commuteMinutes", label: "通勤時間(分)", type: "number" },
  { name: "estimateDate", label: "見積日", type: "date" },
  { name: "visitDate", label: "内見日", type: "date" },
  {
    name: "bathToiletSeparate",
    label: "バストイレ別",
    type: "select",
    options: [
      { value: "yes", label: "はい" },
      { value: "no", label: "いいえ" }
    ]
  },
  { name: "memo", label: "物件メモ", type: "textarea", full: true },
  { name: "images", label: "画像", type: "file", full: true }
];

const TASK_FIELDS = [
  { name: "id", type: "hidden" },
  { name: "title", label: "タスク名", type: "text", required: true },
  {
    name: "category",
    label: "カテゴリ",
    type: "select",
    options: [
      { value: "契約", label: "契約" },
      { value: "ライフライン", label: "ライフライン" },
      { value: "住所変更", label: "住所変更" },
      { value: "荷造り", label: "荷造り" },
      { value: "買い物", label: "買い物" },
      { value: "役所手続き", label: "役所手続き" }
    ]
  },
  { name: "dueDate", label: "期限", type: "date" },
  { name: "alertStartDays", label: "何日前から目立たせるか", type: "number", placeholder: "7" },
  { name: "warningDays", label: "何日前から警告にするか", type: "number", placeholder: "3" },
  { name: "notes", label: "メモ", type: "textarea", full: true }
];

const PURCHASE_FIELDS = [
  { name: "id", type: "hidden" },
  { name: "name", label: "項目名", type: "text", required: true },
  {
    name: "category",
    label: "カテゴリ",
    type: "select",
    options: [
      { value: "家具", label: "家具" },
      { value: "家電", label: "家電" },
      { value: "引っ越し業者", label: "引っ越し業者" },
      { value: "雑費", label: "雑費" }
    ]
  },
  { name: "amount", label: "金額", type: "number", required: true },
  { name: "plannedDate", label: "購入予定日", type: "date" },
  { name: "note", label: "メモ", type: "textarea", full: true }
];

const FILTER_FIELDS = [
  { name: "maxInitialCost", label: "初期費用上限", type: "number" },
  { name: "maxMonthlyCost", label: "月額上限", type: "number" },
  { name: "minArea", label: "広さ下限(m2)", type: "number", step: "0.1" },
  { name: "maxWalkMinutes", label: "駅徒歩上限(分)", type: "number" },
  { name: "stationKeyword", label: "駅名キーワード", type: "text", placeholder: "例: 新宿" },
  { name: "maxBuildingAge", label: "築年数上限", type: "number" },
  { name: "maxCommuteMinutes", label: "通勤時間上限(分)", type: "number" },
  { name: "floor2Plus", label: "2階以上", type: "checkbox" },
  { name: "bathToiletSeparateOnly", label: "バストイレ別のみ", type: "checkbox" },
  { name: "nearTargetStationOnly", label: "指定駅に近い物件のみ", type: "checkbox" },
  { name: "freeRentOnly", label: "フリーレントあり", type: "checkbox" }
];

const DATE_MS = 86400000;
const ASSIST_FIELD_MAP = {
  name: "物件名",
  sourceUrl: "物件URL",
  rent: "家賃",
  maintenanceFee: "管理費",
  deposit: "敷金",
  keyMoney: "礼金",
  brokerFee: "仲介手数料",
  guaranteeFee: "保証料",
  fireInsurance: "火災保険",
  keyExchange: "鍵交換",
  otherFees: "その他費用",
  area: "広さ",
  walkMinutes: "駅徒歩",
  nearestStation: "最寄り駅",
  buildingAge: "築年数",
  memo: "メモ"
};

const SUGGESTED_TASKS = [
  { title: "物件契約の最終確認", category: "契約", offsetDays: 21, notes: "特約、初期費用、入居日を確認" },
  { title: "引っ越し業者の手配", category: "荷造り", offsetDays: 21, notes: "見積もり比較と予約" },
  { title: "インターネット契約の確認", category: "ライフライン", offsetDays: 18, notes: "開通日と工事有無を確認" },
  { title: "不用品整理を始める", category: "荷造り", offsetDays: 16, notes: "粗大ごみ予約も確認" },
  { title: "家具家電の購入計画を確定", category: "買い物", offsetDays: 14, notes: "搬入日とサイズを確認" },
  { title: "梱包を開始する", category: "荷造り", offsetDays: 10, notes: "使わない物から箱詰め" },
  { title: "電気・ガス・水道の開始手続き", category: "ライフライン", offsetDays: 7, notes: "停止手続きも忘れずに" },
  { title: "転出届の準備", category: "役所手続き", offsetDays: 7, notes: "マイナンバーカード利用可否も確認" },
  { title: "住所変更の洗い出し", category: "住所変更", offsetDays: 5, notes: "銀行、保険、ECサイト、免許証など" },
  { title: "転入届・各種住所変更の確認", category: "役所手続き", offsetDays: -3, notes: "転入後に必要な手続きをまとめる" }
];

const defaultData = {
  settings: {
    movingDate: "2026-03-28",
    targetStation: "新宿",
    theme: "system",
    propertySort: "recommended",
    propertyFilters: {
      maxInitialCost: "",
      maxMonthlyCost: "",
      minArea: "",
      maxWalkMinutes: "",
      stationKeyword: "",
      maxBuildingAge: "",
      maxCommuteMinutes: "",
      floor2Plus: false,
      bathToiletSeparateOnly: false,
      nearTargetStationOnly: false,
      freeRentOnly: false
    }
  },
  properties: [
    {
      id: crypto.randomUUID(),
      name: "レジデンス中野 502",
      agency: "みどり不動産",
      sourceUrl: "https://example.com/property/nakano-502",
      nearestStation: "中野",
      walkMinutes: 6,
      rent: 132000,
      maintenanceFee: 8000,
      deposit: 132000,
      keyMoney: 132000,
      brokerFee: 72600,
      guaranteeFee: 70000,
      fireInsurance: 18000,
      keyExchange: 22000,
      support24: 16500,
      disinfection: 16500,
      cleaningFee: 38500,
      otherFees: 0,
      freeRentMonths: 1,
      area: 41.2,
      buildingAge: 5,
      floor: 5,
      commuteMinutes: 28,
      estimateDate: "2026-03-10",
      visitDate: "2026-03-08",
      bathToiletSeparate: "yes",
      memo: "収納が広め。スーパー徒歩3分。ベランダは少し狭い。",
      images: [],
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      name: "ルミエール荻窪 203",
      agency: "中央ハウス",
      sourceUrl: "https://example.com/property/ogikubo-203",
      nearestStation: "荻窪",
      walkMinutes: 4,
      rent: 124000,
      maintenanceFee: 10000,
      deposit: 124000,
      keyMoney: 124000,
      brokerFee: 68200,
      guaranteeFee: 67000,
      fireInsurance: 20000,
      keyExchange: 27500,
      support24: 0,
      disinfection: 11000,
      cleaningFee: 33000,
      otherFees: 12000,
      freeRentMonths: 0,
      area: 38.8,
      buildingAge: 12,
      floor: 2,
      commuteMinutes: 24,
      estimateDate: "2026-03-09",
      visitDate: "2026-03-07",
      bathToiletSeparate: "yes",
      memo: "駅近で通勤しやすい。日当たりはやや弱い。",
      images: [],
      createdAt: Date.now()
    }
  ],
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "賃貸契約書の確認",
      category: "契約",
      dueDate: "2026-03-15",
      alertStartDays: 7,
      warningDays: 3,
      notes: "特約、更新料、退去時費用を確認",
      completed: false,
      autoGenerated: false,
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      title: "電気の開始手続き",
      category: "ライフライン",
      dueDate: "2026-03-21",
      alertStartDays: 7,
      warningDays: 3,
      notes: "入居日の3日前までに済ませる",
      completed: false,
      autoGenerated: false,
      createdAt: Date.now()
    }
  ],
  purchases: [
    {
      id: crypto.randomUUID(),
      name: "セミダブルベッド",
      category: "家具",
      amount: 59800,
      plannedDate: "2026-03-21",
      note: "配送日を入居日に合わせる",
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      name: "冷蔵庫",
      category: "家電",
      amount: 94800,
      plannedDate: "2026-03-25",
      note: "搬入幅を再確認",
      createdAt: Date.now()
    }
  ]
};

let state = loadState();
let currentAssist = { rawText: "", candidates: {}, sourceUrl: "", sourceLabel: "" };

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
      return structuredClone(defaultData);
    }
    const parsed = JSON.parse(raw);
    return {
      settings: {
        ...defaultData.settings,
        ...(parsed.settings || {}),
        propertyFilters: {
          ...defaultData.settings.propertyFilters,
          ...((parsed.settings || {}).propertyFilters || {})
        }
      },
      properties: parsed.properties || [],
      tasks: parsed.tasks || [],
      purchases: parsed.purchases || []
    };
  } catch (error) {
    console.error(error);
    return structuredClone(defaultData);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getSystemTheme() {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme() {
  const theme = state.settings.theme === "system" ? getSystemTheme() : state.settings.theme;
  document.documentElement.dataset.theme = theme;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute("content", theme === "dark" ? "#1b2128" : "#f4efe7");
  }
  const button = document.getElementById("themeToggleButton");
  if (!button) return;
  const labels = {
    system: "System",
    dark: "Dark",
    light: "Light"
  };
  button.textContent = labels[state.settings.theme] || "System";
  button.setAttribute("aria-pressed", String(theme === "dark"));
  button.setAttribute("aria-label", `テーマ: ${button.textContent}`);
}

function currency(value) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0
  }).format(Number(value || 0));
}

function dateLabel(value) {
  if (!value) return "未設定";
  return new Intl.DateTimeFormat("ja-JP", {
    month: "short",
    day: "numeric",
    weekday: "short"
  }).format(new Date(value));
}

function daysUntil(dateString) {
  if (!dateString) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateString);
  target.setHours(0, 0, 0, 0);
  return Math.round((target - today) / DATE_MS);
}

function totalInitialCost(property) {
  const monthly = totalMonthlyCost(property);
  return [
    property.deposit,
    property.keyMoney,
    property.brokerFee,
    property.guaranteeFee,
    property.fireInsurance,
    property.keyExchange,
    property.support24,
    property.disinfection,
    property.cleaningFee,
    property.otherFees,
    monthly * Math.max(1 - Number(property.freeRentMonths || 0), 0)
  ].reduce((sum, item) => sum + Number(item || 0), 0);
}

function totalMonthlyCost(property) {
  return Number(property.rent || 0) + Number(property.maintenanceFee || 0);
}

function totalExtraPurchases() {
  return state.purchases.reduce((sum, item) => sum + Number(item.amount || 0), 0);
}

function stationMatches(property, station) {
  if (!station) return true;
  return String(property.nearestStation || "").toLowerCase().includes(station.toLowerCase());
}

function propertyScore(property) {
  const monthly = totalMonthlyCost(property);
  const initial = totalInitialCost(property);
  const commute = Number(property.commuteMinutes || 90);
  const walk = Number(property.walkMinutes || 30);
  const area = Number(property.area || 0);
  const age = Number(property.buildingAge || 99);
  const floorBonus = Number(property.floor || 0) >= 2 ? 12 : 0;
  const bathBonus = property.bathToiletSeparate === "yes" ? 15 : 0;
  const stationBonus = stationMatches(property, state.settings.targetStation) ? 18 : 0;
  const freeRentBonus = Number(property.freeRentMonths || 0) * 10;
  return area * 7 - monthly / 4200 - initial / 32000 - commute / 3 - walk / 2 - age + floorBonus + bathBonus + stationBonus + freeRentBonus;
}

function getFilteredSortedProperties() {
  const filters = state.settings.propertyFilters;
  const targetStation = state.settings.targetStation;

  let list = [...state.properties].filter((property) => {
    if (filters.maxInitialCost && totalInitialCost(property) > Number(filters.maxInitialCost)) return false;
    if (filters.maxMonthlyCost && totalMonthlyCost(property) > Number(filters.maxMonthlyCost)) return false;
    if (filters.minArea && Number(property.area || 0) < Number(filters.minArea)) return false;
    if (filters.maxWalkMinutes && Number(property.walkMinutes || 999) > Number(filters.maxWalkMinutes)) return false;
    if (filters.maxBuildingAge && Number(property.buildingAge || 999) > Number(filters.maxBuildingAge)) return false;
    if (filters.maxCommuteMinutes && Number(property.commuteMinutes || 999) > Number(filters.maxCommuteMinutes)) return false;
    if (filters.stationKeyword && !stationMatches(property, filters.stationKeyword)) return false;
    if (filters.floor2Plus && Number(property.floor || 0) < 2) return false;
    if (filters.bathToiletSeparateOnly && property.bathToiletSeparate !== "yes") return false;
    if (filters.nearTargetStationOnly && !stationMatches(property, targetStation)) return false;
    if (filters.freeRentOnly && Number(property.freeRentMonths || 0) <= 0) return false;
    return true;
  });

  const sortKey = state.settings.propertySort;
  list.sort((a, b) => {
    if (sortKey === "initialAsc") return totalInitialCost(a) - totalInitialCost(b);
    if (sortKey === "monthlyAsc") return totalMonthlyCost(a) - totalMonthlyCost(b);
    if (sortKey === "areaDesc") return Number(b.area || 0) - Number(a.area || 0);
    if (sortKey === "ageAsc") return Number(a.buildingAge || 999) - Number(b.buildingAge || 999);
    if (sortKey === "walkAsc") return Number(a.walkMinutes || 999) - Number(b.walkMinutes || 999);
    if (sortKey === "stationMatch") {
      const aMatch = stationMatches(a, targetStation) ? 1 : 0;
      const bMatch = stationMatches(b, targetStation) ? 1 : 0;
      if (aMatch !== bMatch) return bMatch - aMatch;
      return Number(a.walkMinutes || 999) - Number(b.walkMinutes || 999);
    }
    return propertyScore(b) - propertyScore(a);
  });
  return list;
}

function getBestProperty() {
  return getFilteredSortedProperties()[0] || null;
}

function getGrandTotal() {
  const best = getBestProperty();
  return (best ? totalInitialCost(best) : 0) + totalExtraPurchases();
}

function getTaskStatus(task) {
  if (task.completed) return { label: "完了", className: "status-tag done" };
  const remaining = daysUntil(task.dueDate);
  if (remaining === null) return { label: "期限未設定", className: "status-tag" };
  if (remaining < 0) return { label: `${Math.abs(remaining)}日超過`, className: "status-tag overdue" };
  if (remaining <= Number(task.warningDays || 0)) return { label: `あと${remaining}日`, className: "status-tag overdue" };
  if (remaining <= Number(task.alertStartDays || 0)) return { label: `あと${remaining}日`, className: "status-tag alert" };
  return { label: `あと${remaining}日`, className: "status-tag" };
}

function createField(field) {
  const wrapper = document.createElement("div");
  wrapper.className = `field${field.full ? " full" : ""}`;

  if (field.type === "hidden") {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = field.name;
    input.id = field.name;
    wrapper.appendChild(input);
    return wrapper;
  }

  const label = document.createElement("label");
  label.textContent = field.label;
  label.htmlFor = field.name;
  wrapper.appendChild(label);

  let input;
  if (field.type === "textarea") {
    input = document.createElement("textarea");
  } else if (field.type === "select") {
    input = document.createElement("select");
    field.options.forEach((option) => {
      const el = document.createElement("option");
      el.value = option.value;
      el.textContent = option.label;
      input.appendChild(el);
    });
  } else if (field.type === "checkbox") {
    const line = document.createElement("label");
    line.className = "checkbox-line";
    input = document.createElement("input");
    input.type = "checkbox";
    input.id = field.name;
    input.name = field.name;
    line.appendChild(input);
    const text = document.createElement("span");
    text.textContent = field.label;
    line.appendChild(text);
    wrapper.appendChild(line);
    return wrapper;
  } else {
    input = document.createElement("input");
    input.type = field.type;
  }

  input.id = field.name;
  input.name = field.name;
  if (field.required) input.required = true;
  if (field.placeholder) input.placeholder = field.placeholder;
  if (field.step) input.step = field.step;
  if (field.type === "file") {
    input.accept = "image/*";
    input.multiple = true;
  }

  wrapper.appendChild(input);
  return wrapper;
}

function makeSubmitRow(id, primaryLabel, secondaryLabel) {
  const row = document.createElement("div");
  row.className = "form-actions field full";
  row.innerHTML = `
    <button class="primary-button" type="submit">${primaryLabel}</button>
    <button id="${id}" class="ghost-button" type="button">${secondaryLabel}</button>
  `;
  return row;
}

function renderForms() {
  const propertyForm = document.getElementById("propertyForm");
  const taskForm = document.getElementById("taskForm");
  const purchaseForm = document.getElementById("purchaseForm");
  const filterForm = document.getElementById("propertyFilterForm");

  propertyForm.innerHTML = "";
  PROPERTY_FIELDS.forEach((field) => propertyForm.appendChild(createField(field)));
  propertyForm.appendChild(makeSubmitRow("resetPropertyForm", "物件を保存", "フォームをクリア"));

  taskForm.innerHTML = "";
  TASK_FIELDS.forEach((field) => taskForm.appendChild(createField(field)));
  taskForm.appendChild(makeSubmitRow("resetTaskForm", "タスクを保存", "フォームをクリア"));

  purchaseForm.innerHTML = "";
  PURCHASE_FIELDS.forEach((field) => purchaseForm.appendChild(createField(field)));
  purchaseForm.appendChild(makeSubmitRow("resetPurchaseForm", "出費を保存", "フォームをクリア"));

  filterForm.innerHTML = "";
  FILTER_FIELDS.forEach((field) => filterForm.appendChild(createField(field)));
  const filterActions = document.createElement("div");
  filterActions.className = "form-actions field full";
  filterActions.innerHTML = `
    <button class="primary-button" type="submit">フィルター適用</button>
    <button id="resetFilters" class="ghost-button" type="button">フィルター解除</button>
  `;
  filterForm.appendChild(filterActions);

  const sortKey = document.getElementById("sortKey");
  sortKey.innerHTML = SORT_OPTIONS.map((option) => `<option value="${option.value}">${option.label}</option>`).join("");
}

function fillForm(formId, data, fields) {
  const form = document.getElementById(formId);
  fields.forEach((field) => {
    const input = form.querySelector(`[name="${field.name}"]`);
    if (!input) return;
    if (field.type === "checkbox") {
      input.checked = Boolean(data[field.name]);
    } else if (field.type !== "file") {
      input.value = data[field.name] ?? "";
    }
  });
}

function resetForm(formId) {
  const form = document.getElementById(formId);
  form.reset();
  const hiddenId = form.querySelector('[name="id"]');
  if (hiddenId) hiddenId.value = "";
}

function syncSettingsToForms() {
  fillForm("settingsForm", state.settings, [{ name: "movingDate" }, { name: "targetStation" }]);
  fillForm("propertyFilterForm", state.settings.propertyFilters, FILTER_FIELDS);
  document.getElementById("sortKey").value = state.settings.propertySort;
}

function highlightEditTarget(formId) {
  const form = document.getElementById(formId);
  const card = form?.closest(".card");
  if (!card) return;
  card.classList.remove("form-spotlight");
  requestAnimationFrame(() => {
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    card.classList.add("form-spotlight");
    window.setTimeout(() => card.classList.remove("form-spotlight"), 1800);
  });
}

function focusForm(formId) {
  highlightEditTarget(formId);
}

function renderQuickFilters() {
  const container = document.getElementById("quickFilterChips");
  container.innerHTML = "";
  QUICK_FILTERS.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${state.settings.propertyFilters[item.key] ? " is-active" : ""}`;
    button.textContent = item.label;
    button.dataset.filterKey = item.key;
    container.appendChild(button);
  });
}

function renderSummary() {
  const summaryCards = document.getElementById("summaryCards");
  const filteredProperties = getFilteredSortedProperties();
  const best = getBestProperty();
  const openTasks = state.tasks.filter((task) => !task.completed);
  const warningTasks = openTasks.filter((task) => getTaskStatus(task).className.includes("overdue"));

  const cards = [
    {
      label: "比較中の物件",
      value: filteredProperties.length,
      sub: best ? `最有力: ${best.name}` : "条件に合う物件なし"
    },
    {
      label: "未完了タスク",
      value: openTasks.length,
      sub: warningTasks.length ? `${warningTasks.length}件が要注意` : "逆算タスクも含めて管理"
    },
    {
      label: "追加購入費用",
      value: currency(totalExtraPurchases()),
      sub: `${state.purchases.length}件を登録`
    },
    {
      label: "想定総額",
      value: currency(getGrandTotal()),
      sub: "最有力物件 + 追加費用"
    }
  ];

  summaryCards.innerHTML = cards
    .map(
      (card) => `
        <article class="summary-card">
          <div class="summary-label">${card.label}</div>
          <div class="summary-value">${card.value}</div>
          <div class="summary-sub">${card.sub}</div>
        </article>
      `
    )
    .join("");

  const movingPlanSummary = document.getElementById("movingPlanSummary");
  movingPlanSummary.textContent = state.settings.movingDate
    ? `${dateLabel(state.settings.movingDate)} を基準に逆算タスクを作れます。目的地は ${state.settings.targetStation || "未設定"} です。`
    : "引っ越し予定日を設定すると、期限候補を自動作成できます。";

  const bestPropertyCard = document.getElementById("bestPropertyCard");
  if (!best) {
    bestPropertyCard.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
  } else {
    bestPropertyCard.innerHTML = `
      <div class="property-header">
        <div>
          <div class="property-title">${best.name}</div>
          <div class="muted">${best.agency}</div>
        </div>
        <div class="status-tag">推奨候補</div>
      </div>
      <div class="meta-row">
        <div class="tag">初期費用 ${currency(totalInitialCost(best))}</div>
        <div class="tag">月額 ${currency(totalMonthlyCost(best))}</div>
        <div class="tag">最寄り ${best.nearestStation || "未設定"}</div>
        <div class="tag">駅徒歩 ${best.walkMinutes || "-"}分</div>
      </div>
      <div class="item-actions summary-actions">
        <button class="mini-button" data-action="edit-property" data-id="${best.id}" type="button">編集</button>
        <button class="mini-button" data-action="delete-property" data-id="${best.id}" type="button">削除</button>
      </div>
      <p class="note">${best.memo || "メモなし"}</p>
    `;
  }

  renderPropertyTable(filteredProperties);
  renderUpcomingTasks();
  renderPurchaseSummary();
}

function renderPropertyTable(properties) {
  const container = document.getElementById("propertyTable");
  if (!properties.length) {
    container.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
    return;
  }

  const rows = properties
    .slice(0, 6)
    .map(
      (property) => `
        <tr>
          <td>${property.name}</td>
          <td>${property.agency}</td>
          <td>${currency(totalInitialCost(property))}</td>
          <td>${currency(totalMonthlyCost(property))}</td>
          <td>${property.nearestStation || "-"}</td>
          <td>${property.walkMinutes || "-"}分</td>
          <td>${property.area || "-"}m2</td>
          <td>${property.buildingAge || "-"}年</td>
        </tr>
      `
    )
    .join("");

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>物件</th>
          <th>会社</th>
          <th>初期費用</th>
          <th>月額</th>
          <th>駅</th>
          <th>徒歩</th>
          <th>広さ</th>
          <th>築年</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
  container.querySelectorAll("tbody tr").forEach((row, index) => {
    const property = properties[index];
    if (!property) return;
    const actionCell = document.createElement("td");
    actionCell.innerHTML = `
      <div class="item-actions table-actions">
        <button class="mini-button" data-action="edit-property" data-id="${property.id}" type="button">編集</button>
        <button class="mini-button" data-action="delete-property" data-id="${property.id}" type="button">削除</button>
      </div>
    `;
    row.appendChild(actionCell);
  });
  const headerRow = container.querySelector("thead tr");
  if (headerRow) {
    const actionHeader = document.createElement("th");
    actionHeader.textContent = "操作";
    headerRow.appendChild(actionHeader);
  }
}

function renderProperties() {
  const list = document.getElementById("propertyList");
  const properties = getFilteredSortedProperties();
  if (!properties.length) {
    list.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
    return;
  }

  list.innerHTML = properties
    .map((property) => {
      const imageHtml = (property.images || []).length
        ? `<div class="gallery">${property.images
            .map((image) => `<img src="${image.dataUrl}" alt="${property.name}" loading="lazy" />`)
            .join("")}</div>`
        : "";

      const sourceLink = property.sourceUrl
        ? `
          <a class="mini-button" href="${property.sourceUrl}" target="_blank" rel="noreferrer">リンクを開く</a>
          <span class="tag">${property.sourceUrl}</span>
        `
        : "";

      return `
        <article class="list-item">
          <div class="property-header">
            <div>
              <div class="property-title">${property.name}</div>
              <div class="muted">${property.agency}</div>
            </div>
            <div class="item-actions">
              <button class="mini-button" data-action="edit-property" data-id="${property.id}" type="button">編集</button>
              <button class="mini-button" data-action="delete-property" data-id="${property.id}" type="button">削除</button>
            </div>
          </div>
          <div class="meta-row">
            <div class="tag">初期費用 ${currency(totalInitialCost(property))}</div>
            <div class="tag">月額 ${currency(totalMonthlyCost(property))}</div>
            <div class="tag">${property.nearestStation || "駅未設定"} / 徒歩 ${property.walkMinutes || "-"}分</div>
            <div class="tag">広さ ${property.area || "-"}m2</div>
            <div class="tag">築 ${property.buildingAge || "-"}年</div>
            <div class="tag">${Number(property.floor || 0) >= 2 ? "2階以上" : "1階"}</div>
            <div class="tag">${property.bathToiletSeparate === "yes" ? "バストイレ別" : "同室"}</div>
          </div>
          <div class="item-actions" style="margin-top: 10px">${sourceLink}</div>
          <p class="note">${property.memo || "メモなし"}</p>
          ${imageHtml}
        </article>
      `;
    })
    .join("");
}

function renderUpcomingTasks() {
  const container = document.getElementById("upcomingTasks");
  const items = [...state.tasks]
    .filter((task) => !task.completed)
    .sort((a, b) => (daysUntil(a.dueDate) ?? 999) - (daysUntil(b.dueDate) ?? 999))
    .slice(0, 6);

  if (!items.length) {
    container.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
    return;
  }

  container.innerHTML = items
    .map((task) => {
      const status = getTaskStatus(task);
      return `
        <article class="list-item">
          <div class="task-row">
            <div>
              <div class="property-title">${task.title}</div>
              <div class="muted">${task.category} ・ ${dateLabel(task.dueDate)}</div>
            </div>
            <div class="${status.className}">${status.label}</div>
          </div>
          <div class="item-actions summary-actions">
            <button class="mini-button" data-action="edit-task" data-id="${task.id}" type="button">編集</button>
            <button class="mini-button" data-action="delete-task" data-id="${task.id}" type="button">削除</button>
          </div>
          <p class="note">${task.notes || "メモなし"}</p>
        </article>
      `;
    })
    .join("");
}


function renderPurchaseSummary() {
  const container = document.getElementById("purchaseSummaryList");
  if (!container) return;

  const items = [...state.purchases]
    .sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0))
    .slice(0, 4);

  if (!items.length) {
    container.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
    return;
  }

  container.innerHTML = items
    .map(
      (purchase) => `
        <article class="list-item compact-list-item">
          <div class="purchase-header">
            <div>
              <div class="property-title">${purchase.name}</div>
              <div class="muted">${purchase.category} ・ ${dateLabel(purchase.plannedDate)}</div>
            </div>
            <div class="property-title">${currency(purchase.amount)}</div>
          </div>
          <div class="item-actions summary-actions">
            <button class="mini-button" data-action="edit-purchase" data-id="${purchase.id}" type="button">編集</button>
            <button class="mini-button" data-action="delete-purchase" data-id="${purchase.id}" type="button">削除</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTaskTimeline() {
  const timeline = document.getElementById("taskTimeline");
  const items = [...state.tasks].sort((a, b) => (daysUntil(a.dueDate) ?? 999) - (daysUntil(b.dueDate) ?? 999));
  if (!items.length) {
    timeline.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
    return;
  }

  timeline.innerHTML = items
    .map((task) => {
      const status = getTaskStatus(task);
      const extraClass = status.className.includes("overdue")
        ? "is-warning"
        : status.className.includes("alert")
          ? "is-alert"
          : "";
      return `
        <article class="timeline-item ${extraClass}">
          <div class="timeline-row">
            <div>
              <div class="property-title">${task.title}</div>
              <div class="muted">${dateLabel(task.dueDate)} ・ ${task.category}</div>
            </div>
            <div class="${status.className}">${status.label}</div>
          </div>
          <div class="meta-row">
            <div class="tag">目立たせる ${task.alertStartDays || 0}日前</div>
            <div class="tag">警告 ${task.warningDays || 0}日前</div>
            <div class="tag">${task.autoGenerated ? "自動提案" : "手動"}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTasks() {
  const taskGroups = document.getElementById("taskGroups");
  if (!state.tasks.length) {
    taskGroups.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
    renderTaskTimeline();
    return;
  }

  const categories = [...new Set(state.tasks.map((task) => task.category))];
  taskGroups.innerHTML = categories
    .map((category) => {
      const rows = state.tasks
        .filter((task) => task.category === category)
        .sort((a, b) => (daysUntil(a.dueDate) ?? 999) - (daysUntil(b.dueDate) ?? 999))
        .map((task) => {
          const status = getTaskStatus(task);
          return `
            <div class="list-item">
              <div class="task-row">
                <label class="checkbox-wrap">
                  <input type="checkbox" data-action="toggle-task" data-id="${task.id}" ${task.completed ? "checked" : ""} />
                  <span>${task.title}</span>
                </label>
                <div class="${status.className}">${status.label}</div>
              </div>
              <div class="meta-row">
                <div class="tag">${dateLabel(task.dueDate)}</div>
                <div class="tag">目立たせる ${task.alertStartDays || 0}日前</div>
                <div class="tag">警告 ${task.warningDays || 0}日前</div>
              </div>
              <p class="note">${task.notes || "メモなし"}</p>
              <div class="item-actions">
                <button class="mini-button" data-action="edit-task" data-id="${task.id}" type="button">編集</button>
                <button class="mini-button" data-action="delete-task" data-id="${task.id}" type="button">削除</button>
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <section class="task-group">
          <div class="group-title">${category}</div>
          <div class="stack-list" style="margin-top: 12px">${rows}</div>
        </section>
      `;
    })
    .join("");

  renderTaskTimeline();
}

function renderPurchases() {
  const list = document.getElementById("purchaseList");
  if (!state.purchases.length) {
    list.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
    return;
  }

  list.innerHTML = [...state.purchases]
    .sort((a, b) => Number(b.amount || 0) - Number(a.amount || 0))
    .map(
      (purchase) => `
        <article class="list-item">
          <div class="purchase-header">
            <div>
              <div class="property-title">${purchase.name}</div>
              <div class="muted">${purchase.category} ・ ${dateLabel(purchase.plannedDate)}</div>
            </div>
            <div class="property-title">${currency(purchase.amount)}</div>
          </div>
          <p class="note">${purchase.note || "メモなし"}</p>
          <div class="item-actions">
            <button class="mini-button" data-action="edit-purchase" data-id="${purchase.id}" type="button">編集</button>
            <button class="mini-button" data-action="delete-purchase" data-id="${purchase.id}" type="button">削除</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderAssistPanel() {
  const summary = document.getElementById("assistSummary");
  const bits = [];
  if (currentAssist.sourceUrl) bits.push(`保存候補URL: ${currentAssist.sourceUrl}`);
  if (currentAssist.sourceLabel) bits.push(`補助メモ: ${currentAssist.sourceLabel}`);
  summary.textContent = bits.length ? bits.join(" / ") : "URLを保存し、ページ本文を貼ると候補抽出できます。";

  const panel = document.getElementById("candidatePanel");
  const entries = Object.entries(currentAssist.candidates).filter(([, value]) => value !== "");
  if (!entries.length) {
    panel.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
  } else {
    panel.innerHTML = `
      <div class="candidate-card">
        <div class="property-title">抽出候補</div>
        <div class="candidate-grid">
          ${entries
            .map(
              ([key, value]) => `
                <div class="candidate-row">
                  <span>${ASSIST_FIELD_MAP[key] || key}</span>
                  <strong>${value}</strong>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="form-actions" style="margin-top: 12px">
          <button id="applyAssistCandidates" class="secondary-button" type="button">候補をフォームへ反映</button>
        </div>
      </div>
    `;
  }

  document.getElementById("listingRawText").textContent = currentAssist.rawText || "";
}

function renderAll() {
  syncSettingsToForms();
  renderQuickFilters();
  renderSummary();
  renderProperties();
  renderTasks();
  renderPurchases();
  renderAssistPanel();
}

function toCsv(rows) {
  return rows
    .map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(","))
    .join("\n");
}

function downloadTextFile(filename, text, type) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function exportProperties() {
  const rows = [
    ["物件名", "会社", "URL", "最寄り駅", "徒歩", "初期費用", "月額", "広さ", "築年数", "メモ"],
    ...state.properties.map((property) => [
      property.name,
      property.agency,
      property.sourceUrl,
      property.nearestStation,
      property.walkMinutes,
      totalInitialCost(property),
      totalMonthlyCost(property),
      property.area,
      property.buildingAge,
      property.memo
    ])
  ];
  downloadTextFile("properties.csv", "\uFEFF" + toCsv(rows), "text/csv;charset=utf-8;");
}

function exportTasks() {
  const rows = [
    ["タスク名", "カテゴリ", "期限", "完了", "目立たせる日数", "警告日数", "メモ"],
    ...state.tasks.map((task) => [
      task.title,
      task.category,
      task.dueDate,
      task.completed ? "完了" : "未完了",
      task.alertStartDays,
      task.warningDays,
      task.notes
    ])
  ];
  downloadTextFile("tasks.csv", "\uFEFF" + toCsv(rows), "text/csv;charset=utf-8;");
}

function exportPurchases() {
  const rows = [
    ["項目名", "カテゴリ", "金額", "予定日", "メモ"],
    ...state.purchases.map((purchase) => [purchase.name, purchase.category, purchase.amount, purchase.plannedDate, purchase.note])
  ];
  downloadTextFile("purchases.csv", "\uFEFF" + toCsv(rows), "text/csv;charset=utf-8;");
}

function exportSummary() {
  const best = getBestProperty();
  const rows = [
    ["項目", "値"],
    ["比較中物件数", getFilteredSortedProperties().length],
    ["未完了タスク数", state.tasks.filter((task) => !task.completed).length],
    ["追加購入費用合計", totalExtraPurchases()],
    ["想定総額", getGrandTotal()],
    ["最有力物件", best?.name ?? ""],
    ["目的地", state.settings.targetStation || ""]
  ];
  downloadTextFile("moving-summary.csv", "\uFEFF" + toCsv(rows), "text/csv;charset=utf-8;");
}

function exportJson() {
  downloadTextFile("moving-mate-backup.json", JSON.stringify(state, null, 2), "application/json;charset=utf-8;");
}

function filesToDataUrls(fileList) {
  const files = Array.from(fileList || []);
  return Promise.all(
    files.map(
      (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve({ name: file.name, dataUrl: reader.result });
          reader.onerror = reject;
          reader.readAsDataURL(file);
        })
    )
  );
}

function formDataToObject(form) {
  const entries = new FormData(form);
  const object = {};
  for (const [key, value] of entries.entries()) {
    object[key] = value;
  }
  return object;
}

function normalizeTask(task) {
  return {
    ...task,
    alertStartDays: Number(task.alertStartDays || 7),
    warningDays: Number(task.warningDays || 3),
    completed: Boolean(task.completed)
  };
}

async function onPropertySubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = formDataToObject(form);
  const existing = state.properties.find((property) => property.id === values.id);
  const newImages = await filesToDataUrls(form.querySelector('[name="images"]').files);

  const payload = {
    ...existing,
    ...values,
    id: values.id || crypto.randomUUID(),
    images: newImages.length ? newImages : existing?.images || [],
    createdAt: existing?.createdAt || Date.now()
  };

  state.properties = values.id
    ? state.properties.map((property) => (property.id === values.id ? payload : property))
    : [payload, ...state.properties];

  currentAssist = { rawText: "", candidates: {}, sourceUrl: "", sourceLabel: "" };
  saveState();
  resetForm("propertyForm");
  document.getElementById("assistUrlInput").value = "";
  document.getElementById("assistSourceLabel").value = "";
  document.getElementById("listingTextInput").value = "";
  renderAll();
}

function onTaskSubmit(event) {
  event.preventDefault();
  const values = normalizeTask(formDataToObject(event.currentTarget));
  const existing = state.tasks.find((task) => task.id === values.id);
  const payload = {
    ...existing,
    ...values,
    id: values.id || crypto.randomUUID(),
    autoGenerated: existing?.autoGenerated || false,
    createdAt: existing?.createdAt || Date.now()
  };

  state.tasks = values.id
    ? state.tasks.map((task) => (task.id === values.id ? payload : task))
    : [payload, ...state.tasks];

  saveState();
  resetForm("taskForm");
  renderAll();
}

function onPurchaseSubmit(event) {
  event.preventDefault();
  const values = formDataToObject(event.currentTarget);
  const existing = state.purchases.find((purchase) => purchase.id === values.id);
  const payload = {
    ...existing,
    ...values,
    id: values.id || crypto.randomUUID(),
    createdAt: existing?.createdAt || Date.now()
  };

  state.purchases = values.id
    ? state.purchases.map((purchase) => (purchase.id === values.id ? payload : purchase))
    : [payload, ...state.purchases];

  saveState();
  resetForm("purchaseForm");
  renderAll();
}

function onSettingsSubmit(event) {
  event.preventDefault();
  const values = formDataToObject(event.currentTarget);
  state.settings.movingDate = values.movingDate;
  state.settings.targetStation = values.targetStation;
  saveState();
  renderAll();
}

function onFilterSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const nextFilters = {};
  FILTER_FIELDS.forEach((field) => {
    const input = form.querySelector(`[name="${field.name}"]`);
    nextFilters[field.name] = field.type === "checkbox" ? input.checked : input.value;
  });
  state.settings.propertyFilters = nextFilters;
  saveState();
  renderAll();
}

function resetSeedData() {
  state = structuredClone(defaultData);
  currentAssist = { rawText: "", candidates: {}, sourceUrl: "", sourceLabel: "" };
  saveState();
  renderAll();
}

function generateSuggestedTasks() {
  if (!state.settings.movingDate) {
    alert("先に引っ越し予定日を設定してください。");
    return;
  }

  const movingDate = new Date(state.settings.movingDate);
  const retained = state.tasks.filter((task) => !task.autoGenerated);
  const generated = SUGGESTED_TASKS.map((template) => {
    const dueDate = new Date(movingDate);
    dueDate.setDate(movingDate.getDate() - template.offsetDays);
    return {
      id: crypto.randomUUID(),
      title: template.title,
      category: template.category,
      dueDate: dueDate.toISOString().slice(0, 10),
      alertStartDays: 7,
      warningDays: 3,
      notes: template.notes,
      completed: false,
      autoGenerated: true,
      createdAt: Date.now()
    };
  });

  state.tasks = [...generated, ...retained];
  saveState();
  renderAll();
}

function editEntity(collectionName, id, formId, fields) {
  const entity = state[collectionName].find((item) => item.id === id);
  if (!entity) return;
  fillForm(formId, entity, fields);
  if (formId === "propertyForm") {
    document.getElementById("assistUrlInput").value = entity.sourceUrl || "";
    document.getElementById("assistSourceLabel").value = entity.name || "";
    document.getElementById("listingTextInput").value = entity.memo || "";
  }
  if (formId === "taskForm") switchTab("tasks");
  if (formId === "propertyForm") switchTab("properties");
  if (formId === "purchaseForm") switchTab("purchases");
  focusForm(formId);
}

function deleteEntity(collectionName, id) {
  state[collectionName] = state[collectionName].filter((item) => item.id !== id);
  saveState();
  renderAll();
}

function switchTab(targetId) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.target === targetId);
  });
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === targetId);
  });
}

function extractCurrency(text, label) {
  const pattern = new RegExp(`${label}\\s*[:：]?\\s*([0-9,]+)\\s*円?`, "i");
  const match = text.match(pattern);
  return match ? match[1].replaceAll(",", "") : "";
}

function extractArea(text) {
  const match = text.match(/([0-9]+(?:\.[0-9]+)?)\s*(?:m2|㎡|平米)/i);
  return match ? match[1] : "";
}

function extractWalk(text) {
  const match = text.match(/徒歩\s*([0-9]{1,2})\s*分/);
  return match ? match[1] : "";
}

function extractStation(text) {
  const match = text.match(/([^\s　]+)駅\s*徒歩/);
  return match ? match[1] : "";
}

function extractBuildingAge(text) {
  const match = text.match(/築\s*([0-9]{1,2})\s*年/);
  return match ? match[1] : "";
}

function extractPropertyName(text, sourceUrl) {
  const firstLine = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line.length >= 4 && !line.includes("円") && !line.includes("徒歩"));
  if (firstLine) return firstLine.slice(0, 60);
  if (!sourceUrl) return "";
  try {
    const url = new URL(sourceUrl);
    const slug = decodeURIComponent(url.pathname.split("/").filter(Boolean).pop() || "")
      .replace(/[-_]/g, " ")
      .trim();
    return slug.slice(0, 60);
  } catch {
    return "";
  }
}

function extractMemo(text) {
  const compact = text.replace(/\s+/g, " ").trim();
  return compact.slice(0, 160);
}

function parseListingText(text, sourceUrl) {
  return {
    name: extractPropertyName(text, sourceUrl),
    rent: extractCurrency(text, "家賃") || extractCurrency(text, "賃料"),
    maintenanceFee: extractCurrency(text, "管理費") || extractCurrency(text, "共益費"),
    deposit: extractCurrency(text, "敷金"),
    keyMoney: extractCurrency(text, "礼金"),
    brokerFee: extractCurrency(text, "仲介手数料"),
    guaranteeFee: extractCurrency(text, "保証料") || extractCurrency(text, "保証会社"),
    fireInsurance: extractCurrency(text, "火災保険") || extractCurrency(text, "保険料"),
    keyExchange: extractCurrency(text, "鍵交換") || extractCurrency(text, "鍵交換費"),
    otherFees: extractCurrency(text, "その他費用") || extractCurrency(text, "その他"),
    area: extractArea(text),
    walkMinutes: extractWalk(text),
    nearestStation: extractStation(text),
    buildingAge: extractBuildingAge(text),
    memo: extractMemo(text)
  };
}

function parseListingAssist() {
  const sourceUrl = document.getElementById("assistUrlInput").value.trim();
  const sourceLabel = document.getElementById("assistSourceLabel").value.trim();
  const rawText = document.getElementById("listingTextInput").value.trim();
  const status = document.getElementById("assistStatus");

  currentAssist = {
    rawText,
    sourceUrl,
    sourceLabel,
    candidates: {
      sourceUrl,
      ...parseListingText(rawText, sourceUrl)
    }
  };

  status.textContent = rawText
    ? "貼り付け内容から候補を作成しました。確認してから反映してください"
    : "URLを保存候補として保持しました。本文を貼ると候補抽出の精度が上がります";
  renderAssistPanel();
}

function applyAssistCandidates() {
  const form = document.getElementById("propertyForm");
  Object.entries(currentAssist.candidates).forEach(([key, value]) => {
    if (!value) return;
    const input = form.querySelector(`[name="${key}"]`);
    if (input && !input.value) input.value = value;
  });
}

function handleQuickFilterToggle(event) {
  const button = event.target.closest("[data-filter-key]");
  if (!button) return;
  const key = button.dataset.filterKey;
  state.settings.propertyFilters[key] = !state.settings.propertyFilters[key];
  saveState();
  renderAll();
}

function importJsonFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      state = {
        settings: {
          ...defaultData.settings,
          ...(parsed.settings || {}),
          propertyFilters: {
            ...defaultData.settings.propertyFilters,
            ...((parsed.settings || {}).propertyFilters || {})
          }
        },
        properties: parsed.properties || [],
        tasks: parsed.tasks || [],
        purchases: parsed.purchases || []
      };
      currentAssist = { rawText: "", candidates: {}, sourceUrl: "", sourceLabel: "" };
      saveState();
      renderAll();
    } catch (error) {
      console.error(error);
      alert("JSONの読み込みに失敗しました");
    }
  };
  reader.readAsText(file);
}

function handleListActions(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const { action, id } = target.dataset;

  if (action === "toggle-task" && event.type !== "change") return;
  if (action !== "toggle-task" && event.type !== "click") return;

  if (action === "edit-property") editEntity("properties", id, "propertyForm", PROPERTY_FIELDS);
  if (action === "delete-property") deleteEntity("properties", id);
  if (action === "edit-task") editEntity("tasks", id, "taskForm", TASK_FIELDS);
  if (action === "delete-task") deleteEntity("tasks", id);
  if (action === "edit-purchase") editEntity("purchases", id, "purchaseForm", PURCHASE_FIELDS);
  if (action === "delete-purchase") deleteEntity("purchases", id);
  if (action === "toggle-task") {
    state.tasks = state.tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
    saveState();
    renderAll();
  }
}

function registerEvents() {
  const media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  if (media) {
    media.addEventListener("change", () => {
      if (state.settings.theme === "system") applyTheme();
    });
  }

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => switchTab(tab.dataset.target));
  });

  document.getElementById("propertyForm").addEventListener("submit", onPropertySubmit);
  document.getElementById("taskForm").addEventListener("submit", onTaskSubmit);
  document.getElementById("purchaseForm").addEventListener("submit", onPurchaseSubmit);
  document.getElementById("settingsForm").addEventListener("submit", onSettingsSubmit);
  document.getElementById("propertyFilterForm").addEventListener("submit", onFilterSubmit);

  document.getElementById("resetPropertyForm").addEventListener("click", () => resetForm("propertyForm"));
  document.getElementById("resetTaskForm").addEventListener("click", () => resetForm("taskForm"));
  document.getElementById("resetPurchaseForm").addEventListener("click", () => resetForm("purchaseForm"));
  document.getElementById("resetFilters").addEventListener("click", () => {
    state.settings.propertyFilters = structuredClone(defaultData.settings.propertyFilters);
    saveState();
    renderAll();
  });

  document.getElementById("sortKey").addEventListener("change", (event) => {
    state.settings.propertySort = event.target.value;
    saveState();
    renderAll();
  });

  document.getElementById("quickFilterChips").addEventListener("click", handleQuickFilterToggle);
  document.getElementById("parseListingButton").addEventListener("click", parseListingAssist);
  document.getElementById("candidatePanel").addEventListener("click", (event) => {
    if (event.target.id === "applyAssistCandidates") applyAssistCandidates();
  });
  document.getElementById("generateSuggestedTasks").addEventListener("click", generateSuggestedTasks);

  document.getElementById("propertyList").addEventListener("click", handleListActions);
  document.getElementById("bestPropertyCard").addEventListener("click", handleListActions);
  document.getElementById("propertyTable").addEventListener("click", handleListActions);
  document.getElementById("upcomingTasks").addEventListener("click", handleListActions);
  document.getElementById("taskGroups").addEventListener("click", handleListActions);
  document.getElementById("taskGroups").addEventListener("change", handleListActions);
  document.getElementById("purchaseList").addEventListener("click", handleListActions);
  document.getElementById("purchaseSummaryList").addEventListener("click", handleListActions);

  document.getElementById("exportPropertyCsv").addEventListener("click", exportProperties);
  document.getElementById("exportTaskCsv").addEventListener("click", exportTasks);
  document.getElementById("exportPurchaseCsv").addEventListener("click", exportPurchases);
  document.getElementById("exportSummaryCsv").addEventListener("click", exportSummary);
  document.getElementById("themeToggleButton").addEventListener("click", () => {
    const nextTheme = state.settings.theme === "system" ? "dark" : state.settings.theme === "dark" ? "light" : "system";
    state.settings.theme = nextTheme;
    saveState();
    applyTheme();
  });
  document.getElementById("exportJsonButton").addEventListener("click", exportJson);
  document.getElementById("seedDataButton").addEventListener("click", resetSeedData);
  document.getElementById("importJsonInput").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) importJsonFile(file);
    event.target.value = "";
  });
}

function registerPwa() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  }
}

renderForms();
registerEvents();
applyTheme();
renderAll();
registerPwa();
