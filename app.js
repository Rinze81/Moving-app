const STORAGE_KEY = "moving-mate-v2";
const SHARED_SPACE_KEY = "moving-mate-shared-space";
const UI_PREFERENCES_KEY = "moving-mate-ui-preferences";
const SHARED_SYNC_DELAY_MS = 800;

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
  { name: "walkMinutes", label: "駅徒歩(分)", type: "text", inputmode: "decimal", placeholder: "例: 約10分" },
  { name: "rent", label: "家賃", type: "number" },
  { name: "maintenanceFee", label: "管理費", type: "number" },
  { name: "deposit", label: "敷金", type: "number" },
  { name: "keyMoney", label: "礼金", type: "number" },
  { name: "brokerFee", label: "仲介手数料", type: "text", inputmode: "decimal", placeholder: "例: 1.1ヶ月 / 72600円" },
  { name: "guaranteeFee", label: "保証料", type: "text", inputmode: "decimal", placeholder: "例: 月額賃料等の50%" },
  { name: "fireInsurance", label: "火災保険", type: "text", inputmode: "decimal", placeholder: "例: 18000円" },
  { name: "keyExchange", label: "鍵交換", type: "text", inputmode: "decimal", placeholder: "例: 22000円" },
  { name: "support24", label: "24時間サポート", type: "number" },
  { name: "disinfection", label: "消毒費用", type: "number" },
  { name: "cleaningFee", label: "クリーニング費用", type: "number" },
  { name: "otherFees", label: "その他費用", type: "text", inputmode: "decimal", placeholder: "例: 退去時清掃費 38500円" },
  { name: "freeRentMonths", label: "フリーレント(月)", type: "text", inputmode: "decimal", placeholder: "例: 1ヶ月 / 相談" },
  { name: "area", label: "広さ(m2)", type: "number", step: "0.1" },
  { name: "buildingAge", label: "築年数", type: "number" },
  { name: "floor", label: "階数", type: "number" },
  { name: "commuteMinutes", label: "通勤時間(分)", type: "text", inputmode: "decimal", placeholder: "例: 約35分" },
  { name: "destinationDistance", label: "目的地までの距離", type: "text", inputmode: "decimal", placeholder: "例: 12km / 4.2km" },
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

PROPERTY_FIELDS.splice(4, 0, {
  name: "address",
  label: "物件住所",
  type: "text",
  placeholder: "例: 東京都中野区..."
});

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

const NOTE_FIELDS = [
  { name: "id", type: "hidden" },
  { name: "title", label: "タイトル", type: "text", required: true },
  {
    name: "color",
    label: "色ラベル",
    type: "select",
    options: [
      { value: "#274c77", label: "ブルー" },
      { value: "#8a5a44", label: "ブラウン" },
      { value: "#3d6b5c", label: "グリーン" },
      { value: "#8b5f7a", label: "モーブ" }
    ]
  },
  {
    name: "fontSize",
    label: "文字サイズ",
    type: "select",
    options: [
      { value: "sm", label: "小" },
      { value: "md", label: "中" },
      { value: "lg", label: "大" }
    ]
  },
  { name: "content", label: "本文", type: "textarea", full: true }
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

ASSIST_FIELD_MAP.address = "物件住所";

const defaultData = {
  settings: {
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
  ],
  notes: []
};

let state = loadState();
let currentAssist = { rawText: "", candidates: {}, sourceUrl: "", sourceLabel: "" };
let openNoteId = "";
let remoteState = {
  client: null,
  sharedSpace: loadSharedSpaceMeta(),
  status: "ローカル保存のみ",
  tone: "muted",
  lastSyncedAt: "",
  syncTimer: null,
  syncInFlight: false,
  pendingSync: false
};

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
      purchases: parsed.purchases || [],
      notes: parsed.notes || []
    };
  } catch (error) {
    console.error(error);
    return structuredClone(defaultData);
  }
}

function saveState(options = {}) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (options.syncRemote) scheduleRemoteSync();
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

function loadSharedSpaceMeta() {
  try {
    const raw = localStorage.getItem(SHARED_SPACE_KEY);
    if (!raw) return { id: "", name: "", slug: "", accessCode: "" };
    const parsed = JSON.parse(raw);
    return {
      id: parsed.id || "",
      name: parsed.name || "",
      slug: parsed.slug || "",
      accessCode: parsed.accessCode || ""
    };
  } catch (error) {
    console.error(error);
    return { id: "", name: "", slug: "", accessCode: "" };
  }
}

function saveSharedSpaceMeta() {
  if (!remoteState.sharedSpace?.slug && !remoteState.sharedSpace?.accessCode) {
    localStorage.removeItem(SHARED_SPACE_KEY);
    return;
  }
  localStorage.setItem(
    SHARED_SPACE_KEY,
    JSON.stringify({
      id: remoteState.sharedSpace.id || "",
      name: remoteState.sharedSpace.name || "",
      slug: remoteState.sharedSpace.slug || "",
      accessCode: remoteState.sharedSpace.accessCode || "",
      lastSyncedAt: remoteState.lastSyncedAt || ""
    })
  );
}

function loadUiPreferences() {
  try {
    return JSON.parse(localStorage.getItem(UI_PREFERENCES_KEY) || "{}");
  } catch (error) {
    console.error(error);
    return {};
  }
}

function saveUiPreferences(preferences) {
  localStorage.setItem(UI_PREFERENCES_KEY, JSON.stringify(preferences));
}

function initializeCollapsiblePanels() {
  const preferences = loadUiPreferences();
  document.querySelectorAll("details[data-persist-key]").forEach((panel) => {
    const key = panel.dataset.persistKey;
    if (Object.prototype.hasOwnProperty.call(preferences, key)) {
      panel.open = Boolean(preferences[key]);
    }
    panel.addEventListener("toggle", () => {
      const nextPreferences = loadUiPreferences();
      nextPreferences[key] = panel.open;
      saveUiPreferences(nextPreferences);
    });
  });
}

function getSupabaseConfig() {
  const config = window.MOVING_MATE_CONFIG || {};
  return {
    url: config.SUPABASE_URL || config.supabaseUrl || "",
    anonKey: config.SUPABASE_ANON_KEY || config.supabaseAnonKey || ""
  };
}

function canUseSupabase() {
  const config = getSupabaseConfig();
  return Boolean(config.url && config.anonKey && window.supabase?.createClient);
}

function getSharedSpaceHeaders(sharedSpace = remoteState.sharedSpace) {
  const headers = {};
  if (sharedSpace?.slug) headers["x-shared-space-slug"] = sharedSpace.slug;
  if (sharedSpace?.accessCode) headers["x-shared-space-code"] = sharedSpace.accessCode;
  return headers;
}

function refreshSupabaseClient(sharedSpace = remoteState.sharedSpace) {
  if (!canUseSupabase()) {
    remoteState.client = null;
    return null;
  }
  const config = getSupabaseConfig();
  remoteState.client = window.supabase.createClient(config.url, config.anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    },
    global: {
      headers: getSharedSpaceHeaders(sharedSpace)
    }
  });
  return remoteState.client;
}

function setRemoteStatus(message, tone = "muted") {
  remoteState.status = message;
  remoteState.tone = tone;
  renderSharedSpaceStatus();
}

function formatDateTime(value) {
  if (!value) return "未同期";
  return new Intl.DateTimeFormat("ja-JP", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function parseJsonValue(value, fallback = {}) {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function numberOrNull(value) {
  if (value === "" || value === null || value === undefined) return null;
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : null;
}

function toInFilter(ids) {
  return `(${ids.map((id) => `"${String(id).replaceAll('"', '\\"')}"`).join(",")})`;
}

function describeRemoteError(error) {
  if (!error) return "接続に失敗しました";
  return error.message || error.details || "接続に失敗しました";
}

function sharedCollectionsSnapshot() {
  return {
    properties: state.properties,
    tasks: state.tasks,
    purchases: state.purchases,
    notes: state.notes
  };
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

function normalizeWideDigits(value) {
  return String(value ?? "")
    .replace(/[０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 65248))
    .replace(/[．。]/g, ".")
    .replace(/[，]/g, ",")
    .replace(/[％]/g, "%")
    .replace(/[ー−－]/g, "-")
    .replace(/[／]/g, "/")
    .replace(/[　]/g, " ")
    .trim();
}

function normalizeObjectTextValues(record) {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => [key, typeof value === "string" ? normalizeWideDigits(value) : value])
  );
}

function extractFirstNumber(value) {
  const normalized = normalizeWideDigits(value).replaceAll(",", "");
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function extractAllNumbers(value) {
  const normalized = normalizeWideDigits(value).replaceAll(",", "");
  return [...normalized.matchAll(/-?\d+(?:\.\d+)?/g)].map((match) => Number(match[0])).filter(Number.isFinite);
}

function extractMonthValue(value) {
  const normalized = normalizeWideDigits(value);
  const match = normalized.match(/(-?\d+(?:\.\d+)?)\s*(?:ヶ月|か月|ヵ月|カ月|月)/i);
  return match ? Number(match[1]) : null;
}

function extractPercentValue(value) {
  const normalized = normalizeWideDigits(value);
  const match = normalized.match(/(-?\d+(?:\.\d+)?)\s*%/);
  return match ? Number(match[1]) : null;
}

function sumKnownAmounts(values) {
  const known = values.filter((value) => Number.isFinite(value));
  return known.length ? known.reduce((sum, value) => sum + value, 0) : null;
}

function getRentBaseAmount(property) {
  return extractFirstNumber(property.rent);
}

function getMonthlyBaseAmount(property) {
  return sumKnownAmounts([extractFirstNumber(property.rent), extractFirstNumber(property.maintenanceFee)]) ?? 0;
}

function extractFlexibleMoney(value, { rentBase = 0, monthlyBase = 0 } = {}) {
  const normalized = normalizeWideDigits(value);
  if (!normalized) return null;

  const percent = extractPercentValue(normalized);
  if (percent !== null && monthlyBase > 0) return Math.round((monthlyBase * percent) / 100);

  const monthValue = extractMonthValue(normalized);
  if (monthValue !== null && rentBase > 0) return Math.round(rentBase * monthValue);

  const numericParts = extractAllNumbers(normalized);
  if (numericParts.length > 1) return numericParts.reduce((sum, amount) => sum + amount, 0);
  return numericParts[0] ?? null;
}

function getPropertyNumericValue(property, fieldName) {
  const rentBase = getRentBaseAmount(property);
  const monthlyBase = getMonthlyBaseAmount(property);

  if (["deposit", "keyMoney", "brokerFee"].includes(fieldName)) {
    return extractFlexibleMoney(property[fieldName], { rentBase, monthlyBase });
  }

  if (fieldName === "guaranteeFee") {
    return extractFlexibleMoney(property[fieldName], { rentBase, monthlyBase });
  }

  if (["fireInsurance", "keyExchange", "support24", "disinfection", "cleaningFee", "otherFees"].includes(fieldName)) {
    return extractFlexibleMoney(property[fieldName], { rentBase, monthlyBase });
  }

  if (fieldName === "freeRentMonths") return extractMonthValue(property[fieldName]) ?? extractFirstNumber(property[fieldName]);
  if (["walkMinutes", "commuteMinutes", "destinationDistance", "area", "buildingAge", "floor", "rent", "maintenanceFee"].includes(fieldName)) {
    return extractFirstNumber(property[fieldName]);
  }

  return extractFirstNumber(property[fieldName]);
}

function getInitialCostItems(property) {
  return [
    { label: "敷金", amount: getPropertyNumericValue(property, "deposit") },
    { label: "礼金", amount: getPropertyNumericValue(property, "keyMoney") },
    { label: "仲介手数料", amount: getPropertyNumericValue(property, "brokerFee") },
    { label: "保証料", amount: getPropertyNumericValue(property, "guaranteeFee") },
    { label: "火災保険", amount: getPropertyNumericValue(property, "fireInsurance") },
    { label: "鍵交換", amount: getPropertyNumericValue(property, "keyExchange") },
    { label: "24時間サポート", amount: getPropertyNumericValue(property, "support24") },
    { label: "消毒費用", amount: getPropertyNumericValue(property, "disinfection") },
    { label: "クリーニング費用", amount: getPropertyNumericValue(property, "cleaningFee") },
    { label: "その他費用", amount: getPropertyNumericValue(property, "otherFees") }
  ].filter((item) => Number.isFinite(item.amount));
}

function totalInitialCost(property) {
  const items = getInitialCostItems(property);
  if (!items.length) return null;
  return items.reduce((sum, item) => sum + item.amount, 0);
}

function totalMonthlyCost(property) {
  return sumKnownAmounts([getPropertyNumericValue(property, "rent"), getPropertyNumericValue(property, "maintenanceFee")]);
}

function formatCurrencyAmount(value, emptyLabel = "算出待ち") {
  return Number.isFinite(value) ? currency(value) : emptyLabel;
}

function formatMaybeNumber(value, suffix = "") {
  if (value === null || value === undefined || value === "") return "-";
  const text = String(value).trim();
  if (!text) return "-";
  return suffix && !text.includes(suffix) ? `${text}${suffix}` : text;
}

function getGrandTotal() {
  const best = getBestProperty();
  const initialCost = best ? totalInitialCost(best) : null;
  if (!best || !Number.isFinite(initialCost)) return null;
  return initialCost + totalExtraPurchases();
}

function getGoogleMapsRouteUrl(property) {
  const origin = String(property?.address || "").trim();
  const destination = String(state.settings.targetStation || "").trim();
  if (!origin || !destination) return "";
  return `https://www.google.com/maps/dir/${encodeURIComponent(origin)}/${encodeURIComponent(destination)}`;
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
  const commute = getPropertyNumericValue(property, "commuteMinutes") ?? 90;
  const walk = getPropertyNumericValue(property, "walkMinutes") ?? 30;
  const area = getPropertyNumericValue(property, "area") ?? 0;
  const age = getPropertyNumericValue(property, "buildingAge") ?? 99;
  const floorBonus = (getPropertyNumericValue(property, "floor") ?? 0) >= 2 ? 12 : 0;
  const bathBonus = property.bathToiletSeparate === "yes" ? 15 : 0;
  const stationBonus = stationMatches(property, state.settings.targetStation) ? 18 : 0;
  const freeRentBonus = (getPropertyNumericValue(property, "freeRentMonths") ?? 0) * 10;
  return area * 7 - (monthly ?? 0) / 4200 - (initial ?? 0) / 32000 - commute / 3 - walk / 2 - age + floorBonus + bathBonus + stationBonus + freeRentBonus;
}

function getFilteredSortedProperties() {
  const filters = state.settings.propertyFilters;
  const targetStation = state.settings.targetStation;

  let list = [...state.properties].filter((property) => {
    const initialCost = totalInitialCost(property);
    const monthlyCost = totalMonthlyCost(property);
    const areaValue = getPropertyNumericValue(property, "area");
    const walkValue = getPropertyNumericValue(property, "walkMinutes");
    const buildingAge = getPropertyNumericValue(property, "buildingAge");
    const commuteValue = getPropertyNumericValue(property, "commuteMinutes");
    const floorValue = getPropertyNumericValue(property, "floor");
    const freeRentValue = getPropertyNumericValue(property, "freeRentMonths");

    if (filters.maxInitialCost && (!Number.isFinite(initialCost) || initialCost > Number(filters.maxInitialCost))) return false;
    if (filters.maxMonthlyCost && (!Number.isFinite(monthlyCost) || monthlyCost > Number(filters.maxMonthlyCost))) return false;
    if (filters.minArea && (areaValue ?? 0) < Number(filters.minArea)) return false;
    if (filters.maxWalkMinutes && (walkValue ?? 999) > Number(filters.maxWalkMinutes)) return false;
    if (filters.maxBuildingAge && (buildingAge ?? 999) > Number(filters.maxBuildingAge)) return false;
    if (filters.maxCommuteMinutes && (commuteValue ?? 999) > Number(filters.maxCommuteMinutes)) return false;
    if (filters.stationKeyword && !stationMatches(property, filters.stationKeyword)) return false;
    if (filters.floor2Plus && (floorValue ?? 0) < 2) return false;
    if (filters.bathToiletSeparateOnly && property.bathToiletSeparate !== "yes") return false;
    if (filters.nearTargetStationOnly && !stationMatches(property, targetStation)) return false;
    if (filters.freeRentOnly && (freeRentValue ?? 0) <= 0) return false;
    return true;
  });

  const sortKey = state.settings.propertySort;
  list.sort((a, b) => {
    if (sortKey === "initialAsc") return (totalInitialCost(a) ?? Number.POSITIVE_INFINITY) - (totalInitialCost(b) ?? Number.POSITIVE_INFINITY);
    if (sortKey === "monthlyAsc") return (totalMonthlyCost(a) ?? Number.POSITIVE_INFINITY) - (totalMonthlyCost(b) ?? Number.POSITIVE_INFINITY);
    if (sortKey === "areaDesc") return (getPropertyNumericValue(b, "area") ?? 0) - (getPropertyNumericValue(a, "area") ?? 0);
    if (sortKey === "ageAsc") return (getPropertyNumericValue(a, "buildingAge") ?? 999) - (getPropertyNumericValue(b, "buildingAge") ?? 999);
    if (sortKey === "walkAsc") return (getPropertyNumericValue(a, "walkMinutes") ?? 999) - (getPropertyNumericValue(b, "walkMinutes") ?? 999);
    if (sortKey === "stationMatch") {
      const aMatch = stationMatches(a, targetStation) ? 1 : 0;
      const bMatch = stationMatches(b, targetStation) ? 1 : 0;
      if (aMatch !== bMatch) return bMatch - aMatch;
      return (getPropertyNumericValue(a, "walkMinutes") ?? 999) - (getPropertyNumericValue(b, "walkMinutes") ?? 999);
    }
    return propertyScore(b) - propertyScore(a);
  });
  return list;
}

function getBestProperty() {
  return getFilteredSortedProperties()[0] || null;
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
  if (field.inputmode) input.inputMode = field.inputmode;
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
  const noteForm = document.getElementById("noteForm");
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

  noteForm.innerHTML = "";
  NOTE_FIELDS.forEach((field) => noteForm.appendChild(createField(field)));
  noteForm.appendChild(makeSubmitRow("resetNoteForm", "メモを保存", "フォームをクリア"));

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
  fillForm("settingsForm", state.settings, [{ name: "targetStation" }]);
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
  movingPlanSummary.textContent = state.settings.targetStation
    ? `目的地は ${state.settings.targetStation} です。物件比較のおすすめ順や絞り込みに使われます。`
    : "目的地を入れると、物件比較のおすすめ順や絞り込みに反映されます。";

  const bestPropertyCard = document.getElementById("bestPropertyCard");
  if (!best) {
    bestPropertyCard.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
  } else {
    const routeUrl = getGoogleMapsRouteUrl(best);
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
        ${routeUrl ? `<a class="mini-button route-button" href="${routeUrl}" target="_blank" rel="noreferrer noopener">Google Mapsでルートを見る</a>` : ""}
        ${
          getGoogleMapsRouteUrl(best)
            ? `<a class="mini-button route-button" href="${getGoogleMapsRouteUrl(best)}" target="_blank" rel="noreferrer noopener">Google Mapsでルートを見る</a>`
            : ""
        }
        ${
          getGoogleMapsRouteUrl(best)
            ? `<a class="mini-button route-button" href="${getGoogleMapsRouteUrl(best)}" target="_blank" rel="noreferrer noopener">Google Mapsでルートを見る</a>`
            : ""
        }
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
      let routeUrl = getGoogleMapsRouteUrl(property);
      let routeLink = routeUrl
        ? `
          <a class="mini-button route-button" href="${routeUrl}" target="_blank" rel="noreferrer noopener">Google Mapsでルートを見る</a>
        `
        : "";

      const sourceLink = property.sourceUrl
        ? `
          <a class="mini-button" href="${property.sourceUrl}" target="_blank" rel="noreferrer">リンクを開く</a>
          <span class="tag">${property.sourceUrl}</span>
        `
        : "";
      routeUrl = getGoogleMapsRouteUrl(property);
      routeLink = routeUrl
        ? `
          <a class="mini-button route-button" href="${routeUrl}" target="_blank" rel="noreferrer noopener">Google Mapsでルートを見る</a>
        `
        : "";
      routeUrl = getGoogleMapsRouteUrl(property);
      routeLink = routeUrl
        ? `
          <a class="mini-button route-button" href="${routeUrl}" target="_blank" rel="noreferrer noopener">Google Mapsでルートを見る</a>
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
          <div class="item-actions" style="margin-top: 10px">
            ${getGoogleMapsRouteUrl(property) ? `<a class="mini-button route-button" href="${getGoogleMapsRouteUrl(property)}" target="_blank" rel="noreferrer noopener">Google Mapsでルートを見る</a>` : ""}
            ${sourceLink}
          </div>
          <p class="note">${property.memo || "メモなし"}</p>
          ${imageHtml}
        </article>
      `;
    })
    .join("");
}

function renderSummary() {
  const summaryCards = document.getElementById("summaryCards");
  const filteredProperties = getFilteredSortedProperties();
  const best = getBestProperty();
  const openTasks = state.tasks.filter((task) => !task.completed);
  const warningTasks = openTasks.filter((task) => getTaskStatus(task).className.includes("overdue"));
  const bestInitialCost = best ? totalInitialCost(best) : null;
  const grandTotal = getGrandTotal();

  const cards = [
    {
      label: "比較中の物件",
      value: filteredProperties.length,
      sub: best ? `最有力: ${best.name}` : "比較に使う物件なし"
    },
    {
      label: "未完了タスク",
      value: openTasks.length,
      sub: warningTasks.length ? `${warningTasks.length}件が要注意` : "締切が近い順で確認できます"
    },
    {
      label: "追加購入費用",
      value: currency(totalExtraPurchases()),
      sub: `${state.purchases.length}件を登録`
    },
    {
      label: "想定総額",
      value: formatCurrencyAmount(grandTotal),
      sub: best
        ? Number.isFinite(bestInitialCost)
          ? `${best.name} の初期費用 + 購入費用`
          : `${best.name} の初期費用を入れると計算`
        : "最有力物件を選ぶと計算"
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
  movingPlanSummary.textContent = state.settings.targetStation
    ? `目的地は ${state.settings.targetStation} です。物件比較のおすすめ順や絞り込みに使われます。`
    : "目的地を入れると、物件比較のおすすめ順や絞り込みに反映されます。";

  const bestPropertyCard = document.getElementById("bestPropertyCard");
  if (!best) {
    bestPropertyCard.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
  } else {
    const initialItems = getInitialCostItems(best);
    const initialSummary = initialItems.length
      ? initialItems.slice(0, 3).map((item) => item.label).join(" / ")
      : "初期費用の内訳は未入力";
    bestPropertyCard.innerHTML = `
      <div class="property-header">
        <div>
          <div class="property-title">${best.name}</div>
          <div class="muted">${best.agency}</div>
        </div>
        <div class="status-tag">最有力候補</div>
      </div>
      <div class="meta-row">
        <div class="tag">初期費用 ${formatCurrencyAmount(bestInitialCost)}</div>
        <div class="tag">月額 ${formatCurrencyAmount(totalMonthlyCost(best))}</div>
        <div class="tag">最寄り ${best.nearestStation || "未設定"}</div>
        <div class="tag">駅徒歩 ${formatMaybeNumber(best.walkMinutes, "分")}</div>
      </div>
      <div class="muted" style="margin-top: 10px">${initialSummary}</div>
      <div class="item-actions summary-actions">
        ${getGoogleMapsRouteUrl(best) ? `<a class="mini-button route-button" href="${getGoogleMapsRouteUrl(best)}" target="_blank" rel="noreferrer noopener">Google Mapsでルートを見る</a>` : ""}
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
          <td>${formatCurrencyAmount(totalInitialCost(property), "-")}</td>
          <td>${formatCurrencyAmount(totalMonthlyCost(property), "-")}</td>
          <td>${property.nearestStation || "-"}</td>
          <td>${formatMaybeNumber(property.walkMinutes, "分")}</td>
          <td>${formatMaybeNumber(property.area, "m2")}</td>
          <td>${formatMaybeNumber(property.buildingAge, "年")}</td>
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
            <div class="tag">初期費用 ${formatCurrencyAmount(totalInitialCost(property))}</div>
            <div class="tag">月額 ${formatCurrencyAmount(totalMonthlyCost(property))}</div>
            <div class="tag">${property.nearestStation || "駅未設定"} / 徒歩 ${formatMaybeNumber(property.walkMinutes, "分")}</div>
            <div class="tag">広さ ${formatMaybeNumber(property.area, "m2")}</div>
            <div class="tag">築 ${formatMaybeNumber(property.buildingAge, "年")}</div>
            <div class="tag">${(getPropertyNumericValue(property, "floor") ?? 0) >= 2 ? "2階以上" : "1階"}</div>
            <div class="tag">${property.bathToiletSeparate === "yes" ? "バストイレ別" : "混在"}</div>
            <div class="tag">目的地 ${formatMaybeNumber(property.commuteMinutes, "分")}</div>
          </div>
          <div class="item-actions" style="margin-top: 10px">
            ${getGoogleMapsRouteUrl(property) ? `<a class="mini-button route-button" href="${getGoogleMapsRouteUrl(property)}" target="_blank" rel="noreferrer noopener">Google Mapsでルートを見る</a>` : ""}
            ${sourceLink}
          </div>
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

function renderNotes() {
  const list = document.getElementById("noteList");
  if (!state.notes.length) {
    list.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
    return;
  }

  list.innerHTML = [...state.notes]
    .sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0))
    .map(
      (note) => {
        const isOpen = note.id === openNoteId;
        return `
          <article class="list-item note-card note-size-${note.fontSize || "md"}${isOpen ? " is-open" : ""}" style="border-left: 6px solid ${note.color || "#274c77"}">
            <button class="note-toggle" data-action="toggle-note" data-id="${note.id}" type="button" aria-expanded="${isOpen}">
              <div>
                <div class="property-title">${note.title}</div>
                <div class="meta-row note-meta">
                  <div class="tag" style="background:${note.color || "#274c77"}; color: #fff">ラベル</div>
                  <div class="tag">作成 ${dateLabel(note.createdAt)}</div>
                </div>
              </div>
              <span class="note-toggle-icon">${isOpen ? "−" : "+"}</span>
            </button>
            ${
              isOpen
                ? `
                  <div class="note-card-body">
                    <p class="note">${note.content || "メモなし"}</p>
                    <div class="item-actions">
                      <button class="mini-button" data-action="edit-note" data-id="${note.id}" type="button">編集</button>
                      <button class="mini-button" data-action="delete-note" data-id="${note.id}" type="button">削除</button>
                    </div>
                  </div>
                `
                : ""
            }
          </article>
        `;
      }
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
  renderSharedSpaceStatus();
  renderQuickFilters();
  renderSummary();
  renderProperties();
  renderTasks();
  renderPurchases();
  renderNotes();
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

function mapPropertyToRemote(property, sharedSpaceId) {
  return {
    id: property.id || crypto.randomUUID(),
    shared_space_id: sharedSpaceId,
    title: property.name || "",
    real_estate_company: property.agency || "",
    monthly_rent_text: property.rent === undefined ? "" : String(property.rent ?? ""),
    monthly_rent_value: numberOrNull(property.rent),
    management_fee_text: property.maintenanceFee === undefined ? "" : String(property.maintenanceFee ?? ""),
    management_fee_value: numberOrNull(property.maintenanceFee),
    deposit_text: property.deposit === undefined ? "" : String(property.deposit ?? ""),
    key_money_text: property.keyMoney === undefined ? "" : String(property.keyMoney ?? ""),
    brokerage_fee_text: property.brokerFee === undefined ? "" : String(property.brokerFee ?? ""),
    guarantor_fee_text: property.guaranteeFee === undefined ? "" : String(property.guaranteeFee ?? ""),
    fire_insurance_text: property.fireInsurance === undefined ? "" : String(property.fireInsurance ?? ""),
    key_exchange_text: property.keyExchange === undefined ? "" : String(property.keyExchange ?? ""),
    other_fee_text: JSON.stringify({
      otherFees: numberOrNull(property.otherFees),
      support24: numberOrNull(property.support24),
      disinfection: numberOrNull(property.disinfection),
      cleaningFee: numberOrNull(property.cleaningFee)
    }),
    area_text: property.area === undefined ? "" : String(property.area ?? ""),
    area_value: numberOrNull(property.area),
    nearest_station: property.nearestStation || "",
    station_walk_text: property.walkMinutes === undefined ? "" : String(property.walkMinutes ?? ""),
    station_walk_value: getPropertyNumericValue(property, "walkMinutes"),
    destination_name: state.settings.targetStation || "",
    destination_duration_text: property.commuteMinutes === undefined ? "" : String(property.commuteMinutes ?? ""),
    destination_duration_value: getPropertyNumericValue(property, "commuteMinutes"),
    destination_distance_text: property.destinationDistance === undefined ? "" : String(property.destinationDistance ?? ""),
    destination_distance_value: getPropertyNumericValue(property, "destinationDistance"),
    destination_transport_memo: property.address || "",
    age_text: property.buildingAge === undefined ? "" : String(property.buildingAge ?? ""),
    age_value: numberOrNull(property.buildingAge),
    free_rent_text: property.freeRentMonths === undefined ? "" : String(property.freeRentMonths ?? ""),
    floor_text: property.floor === undefined ? "" : String(property.floor ?? ""),
    bath_toilet_separate: property.bathToiletSeparate === "yes",
    second_floor_or_more: Number(property.floor || 0) >= 2,
    property_url: property.sourceUrl || "",
    memo: property.memo || "",
    favorite: false,
    status: JSON.stringify({
      support24: numberOrNull(property.support24),
      disinfection: numberOrNull(property.disinfection),
      cleaningFee: numberOrNull(property.cleaningFee),
      estimateDate: property.estimateDate || "",
      visitDate: property.visitDate || "",
      createdAt: property.createdAt || null
    })
  };
}

function mapRemoteToProperty(row) {
  const extras = parseJsonValue(row.status);
  const fees = parseJsonValue(row.other_fee_text);
  return {
    id: row.id,
    name: row.title || "",
    agency: row.real_estate_company || "",
    sourceUrl: row.property_url || "",
    address: row.destination_transport_memo || "",
    nearestStation: row.nearest_station || "",
    walkMinutes: row.station_walk_text || row.station_walk_value || "",
    rent: row.monthly_rent_value ?? row.monthly_rent_text ?? "",
    maintenanceFee: row.management_fee_value ?? row.management_fee_text ?? "",
    deposit: row.deposit_text || "",
    keyMoney: row.key_money_text || "",
    brokerFee: row.brokerage_fee_text || "",
    guaranteeFee: row.guarantor_fee_text || "",
    fireInsurance: row.fire_insurance_text || "",
    keyExchange: row.key_exchange_text || "",
    support24: fees.support24 ?? extras.support24 ?? "",
    disinfection: fees.disinfection ?? extras.disinfection ?? "",
    cleaningFee: fees.cleaningFee ?? extras.cleaningFee ?? "",
    otherFees: fees.otherFees ?? "",
    freeRentMonths: row.free_rent_text || "",
    area: row.area_value ?? row.area_text ?? "",
    buildingAge: row.age_value ?? row.age_text ?? "",
    floor: row.floor_text || "",
    commuteMinutes: row.destination_duration_text || row.destination_duration_value || "",
    destinationDistance: row.destination_distance_text || row.destination_distance_value || "",
    estimateDate: extras.estimateDate || "",
    visitDate: extras.visitDate || "",
    bathToiletSeparate: row.bath_toilet_separate ? "yes" : "no",
    memo: row.memo || "",
    images: [],
    createdAt: extras.createdAt || Date.parse(row.created_at) || Date.now()
  };
}

function mapTaskToRemote(task, sharedSpaceId) {
  return {
    id: task.id || crypto.randomUUID(),
    shared_space_id: sharedSpaceId,
    title: task.title || "",
    category: task.category || "",
    detail: task.notes || "",
    due_date: task.dueDate || null,
    completed: Boolean(task.completed),
    highlight_days_before: numberOrNull(task.alertStartDays),
    warning_days_before: numberOrNull(task.warningDays)
  };
}

function mapRemoteToTask(row) {
  return normalizeTask({
    id: row.id,
    title: row.title || "",
    category: row.category || "",
    notes: row.detail || "",
    dueDate: row.due_date || "",
    completed: Boolean(row.completed),
    alertStartDays: row.highlight_days_before ?? 7,
    warningDays: row.warning_days_before ?? 3,
    autoGenerated: false,
    createdAt: Date.parse(row.created_at) || Date.now()
  });
}

function mapPurchaseToRemote(purchase, sharedSpaceId) {
  return {
    id: purchase.id || crypto.randomUUID(),
    shared_space_id: sharedSpaceId,
    title: purchase.name || "",
    category: purchase.category || "",
    amount_text: purchase.amount === undefined ? "" : String(purchase.amount ?? ""),
    amount_value: numberOrNull(purchase.amount),
    memo: purchase.note || ""
  };
}

function mapRemoteToPurchase(row) {
  return {
    id: row.id,
    name: row.title || "",
    category: row.category || "",
    amount: row.amount_value ?? row.amount_text ?? "",
    plannedDate: "",
    note: row.memo || "",
    createdAt: Date.parse(row.created_at) || Date.now()
  };
}

function mapNoteToRemote(note, sharedSpaceId) {
  return {
    id: note.id || crypto.randomUUID(),
    shared_space_id: sharedSpaceId,
    title: note.title || "",
    body: note.content || "",
    color: note.color || "#274c77",
    text_size: note.fontSize || "md",
    collapsed: note.id !== openNoteId
  };
}

function mapRemoteToNote(row) {
  return {
    id: row.id,
    title: row.title || "",
    content: row.body || "",
    color: row.color || "#274c77",
    fontSize: row.text_size || "md",
    createdAt: Date.parse(row.created_at) || Date.now()
  };
}

async function syncCollection(tableName, rows) {
  if (!remoteState.client || !remoteState.sharedSpace?.id) return;
  if (rows.length) {
    const { error: upsertError } = await remoteState.client.from(tableName).upsert(rows, { onConflict: "id" });
    if (upsertError) throw upsertError;
  }

  let deleteQuery = remoteState.client.from(tableName).delete().eq("shared_space_id", remoteState.sharedSpace.id);
  if (rows.length) deleteQuery = deleteQuery.not("id", "in", toInFilter(rows.map((row) => row.id)));
  const { error: deleteError } = await deleteQuery;
  if (deleteError) throw deleteError;
}

async function syncRemoteStateNow() {
  if (remoteState.syncInFlight) {
    remoteState.pendingSync = true;
    return;
  }
  if (!remoteState.sharedSpace?.id || !remoteState.client) return;
  if (!navigator.onLine) {
    setRemoteStatus("オフラインのためローカル保存中", "warning");
    return;
  }

  remoteState.syncInFlight = true;
  setRemoteStatus("共有スペースに同期中", "info");

  try {
    const snapshot = sharedCollectionsSnapshot();
    await syncCollection(
      "properties",
      snapshot.properties.map((property) => mapPropertyToRemote(property, remoteState.sharedSpace.id))
    );
    await syncCollection("tasks", snapshot.tasks.map((task) => mapTaskToRemote(task, remoteState.sharedSpace.id)));
    await syncCollection(
      "purchases",
      snapshot.purchases.map((purchase) => mapPurchaseToRemote(purchase, remoteState.sharedSpace.id))
    );
    await syncCollection("notes", snapshot.notes.map((note) => mapNoteToRemote(note, remoteState.sharedSpace.id)));
    await remoteState.client
      .from("shared_spaces")
      .update({ name: remoteState.sharedSpace.name || remoteState.sharedSpace.slug })
      .eq("id", remoteState.sharedSpace.id);
    remoteState.lastSyncedAt = new Date().toISOString();
    saveSharedSpaceMeta();
    setRemoteStatus("共有スペースと同期済み", "success");
  } catch (error) {
    console.error(error);
    setRemoteStatus(`同期失敗: ${describeRemoteError(error)}`, "danger");
  } finally {
    remoteState.syncInFlight = false;
    if (remoteState.pendingSync) {
      remoteState.pendingSync = false;
      scheduleRemoteSync();
    }
  }
}

function scheduleRemoteSync() {
  if (!remoteState.sharedSpace?.id || !remoteState.client) return;
  clearTimeout(remoteState.syncTimer);
  remoteState.syncTimer = setTimeout(() => {
    void syncRemoteStateNow();
  }, SHARED_SYNC_DELAY_MS);
}

async function fetchSharedBundle(sharedSpaceId) {
  const client = remoteState.client;
  const [propertiesResult, tasksResult, purchasesResult, notesResult] = await Promise.all([
    client.from("properties").select("*").eq("shared_space_id", sharedSpaceId).order("updated_at", { ascending: false }),
    client.from("tasks").select("*").eq("shared_space_id", sharedSpaceId).order("updated_at", { ascending: false }),
    client.from("purchases").select("*").eq("shared_space_id", sharedSpaceId).order("updated_at", { ascending: false }),
    client.from("notes").select("*").eq("shared_space_id", sharedSpaceId).order("updated_at", { ascending: false })
  ]);

  const firstError = [propertiesResult.error, tasksResult.error, purchasesResult.error, notesResult.error].find(Boolean);
  if (firstError) throw firstError;

  return {
    properties: (propertiesResult.data || []).map(mapRemoteToProperty),
    tasks: (tasksResult.data || []).map(mapRemoteToTask),
    purchases: (purchasesResult.data || []).map(mapRemoteToPurchase),
    notes: (notesResult.data || []).map(mapRemoteToNote)
  };
}

function applySharedBundle(bundle) {
  state = {
    ...state,
    properties: bundle.properties || [],
    tasks: bundle.tasks || [],
    purchases: bundle.purchases || [],
    notes: bundle.notes || []
  };
  openNoteId = "";
  saveState({ syncRemote: false });
  renderAll();
}

async function findSharedSpace({ slug, accessCode }) {
  if (!remoteState.client) throw new Error("Supabase client is not ready");
  if (slug) {
    const { data, error } = await remoteState.client.from("shared_spaces").select("*").eq("slug", slug).maybeSingle();
    if (error) throw error;
    if (data) return data;
  }
  if (accessCode) {
    const { data, error } = await remoteState.client
      .from("shared_spaces")
      .select("*")
      .eq("access_code", accessCode)
      .maybeSingle();
    if (error) throw error;
    if (data) return data;
  }
  return null;
}

function fillSharedSpaceForm(sharedSpace = remoteState.sharedSpace) {
  const nameInput = document.getElementById("sharedSpaceName");
  const slugInput = document.getElementById("sharedSpaceSlug");
  const codeInput = document.getElementById("sharedSpaceAccessCode");
  if (!nameInput || !slugInput || !codeInput) return;
  nameInput.value = sharedSpace?.name || "";
  slugInput.value = sharedSpace?.slug || "";
  codeInput.value = sharedSpace?.accessCode || "";
}

function renderSharedSpaceStatus() {
  const currentName = document.getElementById("sharedSpaceCurrentName");
  const currentSlug = document.getElementById("sharedSpaceCurrentSlug");
  const status = document.getElementById("sharedSpaceStatus");
  const lastSync = document.getElementById("sharedSpaceLastSync");
  const hint = document.getElementById("sharedSpaceHint");
  if (!currentName || !currentSlug || !status || !lastSync || !hint) return;

  currentName.textContent = remoteState.sharedSpace?.name || "未接続";
  currentSlug.textContent = remoteState.sharedSpace?.slug ? `slug: ${remoteState.sharedSpace.slug}` : "slug未設定";
  status.textContent = remoteState.status;
  status.className = `property-title status-${remoteState.tone}`;
  lastSync.textContent = `最終同期: ${formatDateTime(remoteState.lastSyncedAt)}`;

  if (!canUseSupabase()) {
    hint.textContent = "config.js に SUPABASE_URL / SUPABASE_ANON_KEY を設定すると共有できます。";
  } else if (!navigator.onLine) {
    hint.textContent = "現在オフラインです。変更はこの端末のローカルに保持され、オンライン復帰後に再同期できます。";
  } else if (remoteState.sharedSpace?.id) {
    hint.textContent = "接続中の共有スペースに自動同期します。必要ならローカルデータを手動で反映できます。";
  } else {
    hint.textContent = "slug または共有コードを入力すると、2人で同じデータを共有できます。";
  }
}

async function connectSharedSpace({ slug, accessCode, name }, options = {}) {
  if (!canUseSupabase()) {
    setRemoteStatus("Supabase未設定のためローカル保存のみ", "warning");
    return;
  }

  remoteState.sharedSpace = {
    ...remoteState.sharedSpace,
    slug: slug || "",
    accessCode: accessCode || "",
    name: name || remoteState.sharedSpace.name || ""
  };
  refreshSupabaseClient(remoteState.sharedSpace);
  setRemoteStatus("共有スペースに接続中", "info");

  const sharedSpace = await findSharedSpace(remoteState.sharedSpace);
  if (!sharedSpace) throw new Error("shared_space が見つかりません");

  remoteState.sharedSpace = {
    id: sharedSpace.id,
    name: sharedSpace.name,
    slug: sharedSpace.slug,
    accessCode: accessCode || sharedSpace.access_code || ""
  };
  refreshSupabaseClient(remoteState.sharedSpace);
  saveSharedSpaceMeta();
  fillSharedSpaceForm(remoteState.sharedSpace);

  const bundle = await fetchSharedBundle(sharedSpace.id);
  applySharedBundle(bundle);
  remoteState.lastSyncedAt = new Date().toISOString();
  setRemoteStatus("共有スペースに接続済み", "success");

  if (!options.skipSyncAfterConnect && !bundle.properties.length && !bundle.tasks.length && !bundle.purchases.length && !bundle.notes.length) {
    scheduleRemoteSync();
  }
}

async function createSharedSpace() {
  const name = document.getElementById("sharedSpaceName").value.trim();
  const slug = document.getElementById("sharedSpaceSlug").value.trim();
  const accessCode = document.getElementById("sharedSpaceAccessCode").value.trim() || crypto.randomUUID().slice(0, 8);

  if (!slug) {
    alert("shared_space の slug を入力してください");
    return;
  }
  if (!canUseSupabase()) {
    alert("config.js に Supabase の設定が必要です");
    return;
  }

  remoteState.sharedSpace = { id: "", name: name || slug, slug, accessCode };
  refreshSupabaseClient(remoteState.sharedSpace);
  setRemoteStatus("共有スペースを作成中", "info");

  const { data, error } = await remoteState.client
    .from("shared_spaces")
    .insert({
      name: name || slug,
      slug,
      access_code: accessCode
    })
    .select("*")
    .single();

  if (error) throw error;

  remoteState.sharedSpace = {
    id: data.id,
    name: data.name,
    slug: data.slug,
    accessCode
  };
  refreshSupabaseClient(remoteState.sharedSpace);
  saveSharedSpaceMeta();
  fillSharedSpaceForm(remoteState.sharedSpace);
  await syncRemoteStateNow();
}

function disconnectSharedSpace() {
  remoteState.sharedSpace = { id: "", name: "", slug: "", accessCode: "" };
  remoteState.lastSyncedAt = "";
  clearTimeout(remoteState.syncTimer);
  refreshSupabaseClient(remoteState.sharedSpace);
  saveSharedSpaceMeta();
  fillSharedSpaceForm(remoteState.sharedSpace);
  setRemoteStatus("ローカル保存のみ", "muted");
}

async function pushLocalDataToSharedSpace() {
  if (!remoteState.sharedSpace?.id) {
    alert("先に共有スペースへ接続してください");
    return;
  }
  await syncRemoteStateNow();
}

async function initializeSharedSpace() {
  fillSharedSpaceForm(remoteState.sharedSpace);
  renderSharedSpaceStatus();

  if (!canUseSupabase()) {
    setRemoteStatus("Supabase未設定のためローカル保存のみ", "warning");
    return;
  }

  refreshSupabaseClient(remoteState.sharedSpace);
  if (!remoteState.sharedSpace.slug && !remoteState.sharedSpace.accessCode) {
    setRemoteStatus("共有スペース未接続", "muted");
    return;
  }

  try {
    await connectSharedSpace(remoteState.sharedSpace, { skipSyncAfterConnect: true });
  } catch (error) {
    console.error(error);
    setRemoteStatus(`再接続失敗: ${describeRemoteError(error)}`, "danger");
  }
}

async function onPropertySubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = normalizeObjectTextValues(formDataToObject(form));
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
  saveState({ syncRemote: true });
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

  saveState({ syncRemote: true });
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

  saveState({ syncRemote: true });
  resetForm("purchaseForm");
  renderAll();
}

function onNoteSubmit(event) {
  event.preventDefault();
  const values = formDataToObject(event.currentTarget);
  const existing = state.notes.find((note) => note.id === values.id);
  const payload = {
    ...existing,
    ...values,
    id: values.id || crypto.randomUUID(),
    createdAt: existing?.createdAt || Date.now()
  };

  state.notes = values.id
    ? state.notes.map((note) => (note.id === values.id ? payload : note))
    : [payload, ...state.notes];

  saveState({ syncRemote: true });
  resetForm("noteForm");
  renderAll();
}

function onSettingsSubmit(event) {
  event.preventDefault();
  const values = formDataToObject(event.currentTarget);
  state.settings.targetStation = values.targetStation;
  saveState({ syncRemote: false });
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
  saveState({ syncRemote: false });
  renderAll();
}

function resetSeedData() {
  state = structuredClone(defaultData);
  currentAssist = { rawText: "", candidates: {}, sourceUrl: "", sourceLabel: "" };
  saveState({ syncRemote: true });
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
  if (formId === "noteForm") switchTab("notes");
  focusForm(formId);
}

function deleteEntity(collectionName, id) {
  state[collectionName] = state[collectionName].filter((item) => item.id !== id);
  saveState({ syncRemote: true });
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
  saveState({ syncRemote: false });
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
        purchases: parsed.purchases || [],
        notes: parsed.notes || []
      };
      currentAssist = { rawText: "", candidates: {}, sourceUrl: "", sourceLabel: "" };
      saveState({ syncRemote: true });
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

  if (action === "toggle-note") {
    if (event.type !== "click") return;
    openNoteId = openNoteId === id ? "" : id;
    renderNotes();
    return;
  }

  if (action === "toggle-task" && event.type !== "change") return;
  if (action !== "toggle-task" && event.type !== "click") return;

  if (action === "edit-property") editEntity("properties", id, "propertyForm", PROPERTY_FIELDS);
  if (action === "delete-property") deleteEntity("properties", id);
  if (action === "edit-task") editEntity("tasks", id, "taskForm", TASK_FIELDS);
  if (action === "delete-task") deleteEntity("tasks", id);
  if (action === "edit-purchase") editEntity("purchases", id, "purchaseForm", PURCHASE_FIELDS);
  if (action === "delete-purchase") deleteEntity("purchases", id);
  if (action === "edit-note") editEntity("notes", id, "noteForm", NOTE_FIELDS);
  if (action === "delete-note") {
    if (openNoteId === id) openNoteId = "";
    deleteEntity("notes", id);
  }
  if (action === "toggle-task") {
    state.tasks = state.tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
    saveState({ syncRemote: true });
    renderAll();
  }
}

function renderSummary() {
  const summaryCards = document.getElementById("summaryCards");
  const filteredProperties = getFilteredSortedProperties();
  const best = getBestProperty();
  const openTasks = state.tasks.filter((task) => !task.completed);
  const warningTasks = openTasks.filter((task) => getTaskStatus(task).className.includes("overdue"));
  const bestInitialCost = best ? totalInitialCost(best) : null;
  const grandTotal = getGrandTotal();

  const cards = [
    {
      label: "比較中の物件",
      value: filteredProperties.length,
      sub: best ? `最有力: ${best.name}` : "比較中の物件はまだありません"
    },
    {
      label: "未完了タスク",
      value: openTasks.length,
      sub: warningTasks.length ? `${warningTasks.length}件は期限超過です` : "締切が近い順で確認できます"
    },
    {
      label: "購入費用合計",
      value: currency(totalExtraPurchases()),
      sub: `${state.purchases.length}件を集計`
    },
    {
      label: "想定総額",
      value: formatCurrencyAmount(grandTotal),
      sub: best
        ? Number.isFinite(bestInitialCost)
          ? `${best.name} の初期費用 + 購入費用`
          : `${best.name} の初期費用は算出待ち`
        : "最有力物件を選ぶと算出します"
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
  movingPlanSummary.textContent = state.settings.targetStation
    ? `目的地は ${state.settings.targetStation} です。物件比較のおすすめ順や絞り込みに使われます。`
    : "目的地を入れると、物件比較のおすすめ順や絞り込みに反映されます。";

  const bestPropertyCard = document.getElementById("bestPropertyCard");
  if (!best) {
    bestPropertyCard.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
  } else {
    const initialItems = getInitialCostItems(best);
    const initialSummary = initialItems.length
      ? initialItems.slice(0, 3).map((item) => item.label).join(" / ")
      : "初期費用の内訳はまだありません";
    const routeUrl = getGoogleMapsRouteUrl(best);

    bestPropertyCard.innerHTML = `
      <div class="property-header">
        <div>
          <div class="property-title">${best.name}</div>
          <div class="muted">${best.agency}</div>
        </div>
        <div class="status-tag">最有力候補</div>
      </div>
      <div class="meta-row">
        <div class="tag">初期費用 ${formatCurrencyAmount(bestInitialCost)}</div>
        <div class="tag">月額 ${formatCurrencyAmount(totalMonthlyCost(best), "-")}</div>
        <div class="tag">最寄り ${best.nearestStation || "未設定"}</div>
        <div class="tag">徒歩 ${formatMaybeNumber(best.walkMinutes, "分")}</div>
      </div>
      <div class="muted" style="margin-top: 10px">${initialSummary}</div>
      <div class="item-actions summary-actions">
        ${routeUrl ? `<a class="mini-button route-button" href="${routeUrl}" target="_blank" rel="noreferrer noopener">Google Mapsでルートを見る</a>` : ""}
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
      const routeUrl = getGoogleMapsRouteUrl(property);

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
            <div class="tag">初期費用 ${formatCurrencyAmount(totalInitialCost(property))}</div>
            <div class="tag">月額 ${formatCurrencyAmount(totalMonthlyCost(property), "-")}</div>
            <div class="tag">${property.nearestStation || "駅未設定"} / 徒歩 ${formatMaybeNumber(property.walkMinutes, "分")}</div>
            <div class="tag">広さ ${formatMaybeNumber(property.area, "m2")}</div>
            <div class="tag">築 ${formatMaybeNumber(property.buildingAge, "年")}</div>
            <div class="tag">${(getPropertyNumericValue(property, "floor") ?? 0) >= 2 ? "2階以上" : "1階含む"}</div>
            <div class="tag">${property.bathToiletSeparate === "yes" ? "バストイレ別" : "要確認"}</div>
            <div class="tag">目的地まで ${formatMaybeNumber(property.commuteMinutes, "分")}</div>
          </div>
          <div class="item-actions" style="margin-top: 10px">
            ${routeUrl ? `<a class="mini-button route-button" href="${routeUrl}" target="_blank" rel="noreferrer noopener">Google Mapsでルートを見る</a>` : ""}
            ${sourceLink}
          </div>
          <p class="note">${property.memo || "メモなし"}</p>
          ${imageHtml}
        </article>
      `;
    })
    .join("");
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
  document.getElementById("noteForm").addEventListener("submit", onNoteSubmit);
  document.getElementById("settingsForm").addEventListener("submit", onSettingsSubmit);
  document.getElementById("propertyFilterForm").addEventListener("submit", onFilterSubmit);
  document.getElementById("sharedSpaceForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = formDataToObject(event.currentTarget);
    try {
      await connectSharedSpace({
        name: values.sharedSpaceName.trim(),
        slug: values.sharedSpaceSlug.trim(),
        accessCode: values.sharedSpaceAccessCode.trim()
      });
    } catch (error) {
      console.error(error);
      setRemoteStatus(`接続失敗: ${describeRemoteError(error)}`, "danger");
    }
  });

  document.getElementById("resetPropertyForm").addEventListener("click", () => resetForm("propertyForm"));
  document.getElementById("resetTaskForm").addEventListener("click", () => resetForm("taskForm"));
  document.getElementById("resetPurchaseForm").addEventListener("click", () => resetForm("purchaseForm"));
  document.getElementById("resetNoteForm").addEventListener("click", () => resetForm("noteForm"));
  document.getElementById("resetFilters").addEventListener("click", () => {
    state.settings.propertyFilters = structuredClone(defaultData.settings.propertyFilters);
    saveState({ syncRemote: false });
    renderAll();
  });

  document.getElementById("sortKey").addEventListener("change", (event) => {
    state.settings.propertySort = event.target.value;
    saveState({ syncRemote: false });
    renderAll();
  });

  document.getElementById("quickFilterChips").addEventListener("click", handleQuickFilterToggle);
  document.getElementById("parseListingButton").addEventListener("click", parseListingAssist);
  document.getElementById("candidatePanel").addEventListener("click", (event) => {
    if (event.target.id === "applyAssistCandidates") applyAssistCandidates();
  });
  document.getElementById("createSharedSpaceButton").addEventListener("click", async () => {
    try {
      await createSharedSpace();
    } catch (error) {
      console.error(error);
      setRemoteStatus(`作成失敗: ${describeRemoteError(error)}`, "danger");
    }
  });
  document.getElementById("pushLocalDataButton").addEventListener("click", async () => {
    try {
      await pushLocalDataToSharedSpace();
    } catch (error) {
      console.error(error);
      setRemoteStatus(`反映失敗: ${describeRemoteError(error)}`, "danger");
    }
  });
  document.getElementById("disconnectSharedSpaceButton").addEventListener("click", disconnectSharedSpace);

  document.getElementById("propertyList").addEventListener("click", handleListActions);
  document.getElementById("bestPropertyCard").addEventListener("click", handleListActions);
  document.getElementById("propertyTable").addEventListener("click", handleListActions);
  document.getElementById("upcomingTasks").addEventListener("click", handleListActions);
  document.getElementById("taskGroups").addEventListener("click", handleListActions);
  document.getElementById("taskGroups").addEventListener("change", handleListActions);
  document.getElementById("purchaseList").addEventListener("click", handleListActions);
  document.getElementById("purchaseSummaryList").addEventListener("click", handleListActions);
  document.getElementById("noteList").addEventListener("click", handleListActions);

  document.getElementById("exportPropertyCsv").addEventListener("click", exportProperties);
  document.getElementById("exportTaskCsv").addEventListener("click", exportTasks);
  document.getElementById("exportPurchaseCsv").addEventListener("click", exportPurchases);
  document.getElementById("exportSummaryCsv").addEventListener("click", exportSummary);
  document.getElementById("themeToggleButton").addEventListener("click", () => {
    const nextTheme = state.settings.theme === "system" ? "dark" : state.settings.theme === "dark" ? "light" : "system";
    state.settings.theme = nextTheme;
    saveState({ syncRemote: false });
    applyTheme();
  });
  document.getElementById("exportJsonButton").addEventListener("click", exportJson);
  document.getElementById("seedDataButton").addEventListener("click", resetSeedData);
  document.getElementById("importJsonInput").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) importJsonFile(file);
    event.target.value = "";
  });

  window.addEventListener("online", () => {
    if (remoteState.sharedSpace?.id) {
      setRemoteStatus("オンラインに復帰しました。同期を再開します", "success");
      scheduleRemoteSync();
    } else {
      renderSharedSpaceStatus();
    }
  });
  window.addEventListener("offline", () => {
    setRemoteStatus("オフラインのためローカル保存中", "warning");
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
initializeCollapsiblePanels();
applyTheme();
renderAll();
void initializeSharedSpace();
registerPwa();
