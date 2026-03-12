const STORAGE_KEY = "moving-mate-v1";

const propertyFields = [
  { name: "name", label: "物件名", type: "text", required: true },
  { name: "agency", label: "不動産会社名", type: "text", required: true },
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
  { name: "walkMinutes", label: "駅徒歩(分)", type: "number" },
  { name: "buildingAge", label: "築年数", type: "number" },
  { name: "area", label: "広さ(m2)", type: "number", step: "0.1" },
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

const taskFields = [
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
      { value: "買い物", label: "買い物" }
    ]
  },
  { name: "dueDate", label: "期限", type: "date" },
  { name: "notes", label: "メモ", type: "text", full: true }
];

const purchaseFields = [
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
  { name: "note", label: "メモ", type: "text", full: true }
];

const defaultData = {
  properties: [
    {
      id: crypto.randomUUID(),
      name: "レジデンス中野 502",
      agency: "みどり不動産",
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
      walkMinutes: 6,
      buildingAge: 5,
      area: 41.2,
      floor: 5,
      commuteMinutes: 28,
      estimateDate: "2026-03-10",
      visitDate: "2026-03-08",
      bathToiletSeparate: "yes",
      memo: "収納が広め。スーパー徒歩3分。ベランダが少し狭い。",
      images: [],
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      name: "ルミエール荻窪 203",
      agency: "中央ハウス",
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
      walkMinutes: 4,
      buildingAge: 12,
      area: 38.8,
      floor: 2,
      commuteMinutes: 24,
      estimateDate: "2026-03-09",
      visitDate: "2026-03-07",
      bathToiletSeparate: "yes",
      memo: "通勤しやすい。日当たりはやや弱いが、駅近。",
      images: [],
      createdAt: Date.now()
    }
  ],
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "電気の開始手続き",
      category: "ライフライン",
      dueDate: "2026-03-18",
      notes: "入居日の3日前までに済ませる",
      completed: false,
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      title: "賃貸契約書の確認",
      category: "契約",
      dueDate: "2026-03-15",
      notes: "特約、退去費用、更新料を確認",
      completed: false,
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      title: "粗大ごみ回収の予約",
      category: "荷造り",
      dueDate: "2026-03-22",
      notes: "",
      completed: true,
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
      note: "幅を再確認",
      createdAt: Date.now()
    },
    {
      id: crypto.randomUUID(),
      name: "引っ越し見積もり",
      category: "引っ越し業者",
      amount: 54000,
      plannedDate: "2026-03-19",
      note: "平日午後便",
      createdAt: Date.now()
    }
  ]
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
      return structuredClone(defaultData);
    }
    const parsed = JSON.parse(raw);
    return {
      properties: parsed.properties ?? [],
      tasks: parsed.tasks ?? [],
      purchases: parsed.purchases ?? []
    };
  } catch (error) {
    console.error(error);
    return structuredClone(defaultData);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
  return Math.round((target - today) / 86400000);
}

function totalInitialCost(property) {
  const monthly = Number(property.rent || 0) + Number(property.maintenanceFee || 0);
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

function grandTotal() {
  const bestProperty = getSortedProperties()[0];
  return (bestProperty ? totalInitialCost(bestProperty) : 0) + totalExtraPurchases();
}

function propertyScore(property) {
  const monthly = totalMonthlyCost(property);
  const initial = totalInitialCost(property);
  const commute = Number(property.commuteMinutes || 90);
  const walk = Number(property.walkMinutes || 30);
  const area = Number(property.area || 0);
  const age = Number(property.buildingAge || 99);
  const floorBonus = Number(property.floor || 0) >= 2 ? 15 : 0;
  const bathBonus = property.bathToiletSeparate === "yes" ? 18 : 0;

  return area * 7 - monthly / 4000 - initial / 30000 - commute / 3 - walk / 2 - age + floorBonus + bathBonus;
}

function getSortedProperties() {
  return [...state.properties].sort((a, b) => propertyScore(b) - propertyScore(a));
}

function createField(field) {
  const wrapper = document.createElement("div");
  wrapper.className = `field${field.full ? " full" : ""}`;

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
  } else {
    input = document.createElement("input");
    input.type = field.type;
  }

  input.id = field.name;
  input.name = field.name;
  if (field.required) input.required = true;
  if (field.step) input.step = field.step;
  if (field.type === "file") input.accept = "image/*";
  if (field.type === "file") input.multiple = true;

  wrapper.appendChild(input);
  return wrapper;
}

function makeSubmitRow(label) {
  const row = document.createElement("div");
  row.className = "form-actions field full";

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.className = "primary-button";
  submit.textContent = label;
  row.appendChild(submit);
  return row;
}

function renderForms() {
  const propertyForm = document.getElementById("propertyForm");
  const taskForm = document.getElementById("taskForm");
  const purchaseForm = document.getElementById("purchaseForm");

  propertyFields.forEach((field) => propertyForm.appendChild(createField(field)));
  propertyForm.appendChild(makeSubmitRow("物件を保存"));

  taskFields.forEach((field) => taskForm.appendChild(createField(field)));
  taskForm.appendChild(makeSubmitRow("タスクを追加"));

  purchaseFields.forEach((field) => purchaseForm.appendChild(createField(field)));
  purchaseForm.appendChild(makeSubmitRow("出費を追加"));
}

function renderSummary() {
  const summaryCards = document.getElementById("summaryCards");
  summaryCards.innerHTML = "";

  const sortedProperties = getSortedProperties();
  const best = sortedProperties[0];
  const openTasks = state.tasks.filter((task) => !task.completed);
  const overdueTasks = openTasks.filter((task) => (daysUntil(task.dueDate) ?? 999) < 0);

  const cards = [
    {
      label: "比較中の物件",
      value: state.properties.length,
      sub: best ? `最有力: ${best.name}` : "まだ未登録"
    },
    {
      label: "未完了タスク",
      value: openTasks.length,
      sub: overdueTasks.length ? `${overdueTasks.length}件が期限超過` : "期限順で確認できます"
    },
    {
      label: "追加購入費用",
      value: currency(totalExtraPurchases()),
      sub: `${state.purchases.length}件の出費を登録`
    },
    {
      label: "想定総額",
      value: currency(grandTotal()),
      sub: "最有力物件 + 追加費用"
    }
  ];

  cards.forEach((card) => {
    const el = document.createElement("article");
    el.className = "summary-card";
    el.innerHTML = `
      <div class="summary-label">${card.label}</div>
      <div class="summary-value">${card.value}</div>
      <div class="summary-sub">${card.sub}</div>
    `;
    summaryCards.appendChild(el);
  });

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
        <div class="tag">通勤 ${best.commuteMinutes || "-"}分</div>
        <div class="tag">広さ ${best.area || "-"}m2</div>
      </div>
      <p class="note">${best.memo || "メモなし"}</p>
    `;
  }

  renderPropertyTable();
  renderUpcomingTasks();
}

function renderPropertyTable() {
  const container = document.getElementById("propertyTable");
  const sorted = getSortedProperties();
  if (!sorted.length) {
    container.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
    return;
  }

  const rows = sorted
    .map(
      (property) => `
        <tr>
          <td>${property.name}</td>
          <td>${currency(totalInitialCost(property))}</td>
          <td>${currency(totalMonthlyCost(property))}</td>
          <td>${property.walkMinutes || "-"}分</td>
          <td>${property.commuteMinutes || "-"}分</td>
          <td>${property.area || "-"}m2</td>
          <td>${property.buildingAge || "-"}年</td>
          <td>${Number(property.floor || 0) >= 2 ? "○" : "-"}</td>
          <td>${property.bathToiletSeparate === "yes" ? "○" : "-"}</td>
        </tr>
      `
    )
    .join("");

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>物件</th>
          <th>初期費用</th>
          <th>月額</th>
          <th>駅徒歩</th>
          <th>通勤</th>
          <th>広さ</th>
          <th>築年</th>
          <th>2階以上</th>
          <th>バストイレ別</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderProperties() {
  const list = document.getElementById("propertyList");
  list.innerHTML = "";
  const sorted = getSortedProperties();
  if (!sorted.length) {
    list.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
    return;
  }

  sorted.forEach((property) => {
    const article = document.createElement("article");
    article.className = "list-item";
    const imageHtml = (property.images || []).length
      ? `<div class="gallery">${property.images
          .map((image) => `<img src="${image.dataUrl}" alt="${property.name}" loading="lazy" />`)
          .join("")}</div>`
      : "";

    article.innerHTML = `
      <div class="property-header">
        <div>
          <div class="property-title">${property.name}</div>
          <div class="muted">${property.agency}</div>
        </div>
        <div class="item-actions">
          <button class="mini-button" data-action="delete-property" data-id="${property.id}" type="button">削除</button>
        </div>
      </div>
      <div class="meta-row">
        <div class="tag">初期費用 ${currency(totalInitialCost(property))}</div>
        <div class="tag">月額 ${currency(totalMonthlyCost(property))}</div>
        <div class="tag">駅徒歩 ${property.walkMinutes || "-"}分</div>
        <div class="tag">通勤 ${property.commuteMinutes || "-"}分</div>
        <div class="tag">広さ ${property.area || "-"}m2</div>
        <div class="tag">築 ${property.buildingAge || "-"}年</div>
        <div class="tag">${Number(property.floor || 0) >= 2 ? "2階以上" : "1階"}</div>
        <div class="tag">${property.bathToiletSeparate === "yes" ? "バストイレ別" : "同室"}</div>
      </div>
      <p class="note">${property.memo || "メモなし"}</p>
      ${imageHtml}
    `;
    list.appendChild(article);
  });
}

function renderUpcomingTasks() {
  const container = document.getElementById("upcomingTasks");
  container.innerHTML = "";
  const items = [...state.tasks]
    .filter((task) => !task.completed)
    .sort((a, b) => (daysUntil(a.dueDate) ?? 999) - (daysUntil(b.dueDate) ?? 999))
    .slice(0, 5);

  if (!items.length) {
    container.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
    return;
  }

  items.forEach((task) => {
    const days = daysUntil(task.dueDate);
    const badgeClass = days !== null && days < 0 ? "status-tag overdue" : "status-tag";
    const badgeText = days === null ? "期限未設定" : days < 0 ? `${Math.abs(days)}日超過` : `あと${days}日`;
    const item = document.createElement("article");
    item.className = "list-item";
    item.innerHTML = `
      <div class="task-row">
        <div>
          <div class="property-title">${task.title}</div>
          <div class="muted">${task.category} ・ ${dateLabel(task.dueDate)}</div>
        </div>
        <div class="${badgeClass}">${badgeText}</div>
      </div>
      <p class="note">${task.notes || "メモなし"}</p>
    `;
    container.appendChild(item);
  });
}

function renderTasks() {
  const taskGroups = document.getElementById("taskGroups");
  taskGroups.innerHTML = "";
  if (!state.tasks.length) {
    taskGroups.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
    return;
  }

  const categories = [...new Set(state.tasks.map((task) => task.category))];
  categories.forEach((category) => {
    const group = document.createElement("section");
    group.className = "task-group";
    const tasks = state.tasks
      .filter((task) => task.category === category)
      .sort((a, b) => (daysUntil(a.dueDate) ?? 999) - (daysUntil(b.dueDate) ?? 999));

    const rows = tasks
      .map((task) => {
        const due = daysUntil(task.dueDate);
        const statusClass = task.completed ? "status-tag done" : due !== null && due < 0 ? "status-tag overdue" : "status-tag";
        const statusText = task.completed ? "完了" : due === null ? "期限未設定" : due < 0 ? `${Math.abs(due)}日超過` : `あと${due}日`;
        return `
          <div class="list-item">
            <div class="task-row">
              <label class="checkbox-wrap">
                <input type="checkbox" data-action="toggle-task" data-id="${task.id}" ${task.completed ? "checked" : ""} />
                <span>${task.title}</span>
              </label>
              <div class="${statusClass}">${statusText}</div>
            </div>
            <div class="meta-row">
              <div class="tag">${dateLabel(task.dueDate)}</div>
            </div>
            <p class="note">${task.notes || "メモなし"}</p>
            <div class="item-actions">
              <button class="mini-button" data-action="delete-task" data-id="${task.id}" type="button">削除</button>
            </div>
          </div>
        `;
      })
      .join("");

    group.innerHTML = `
      <div class="group-title">${category}</div>
      <div class="stack-list" style="margin-top: 12px">${rows}</div>
    `;
    taskGroups.appendChild(group);
  });
}

function renderPurchases() {
  const list = document.getElementById("purchaseList");
  list.innerHTML = "";
  if (!state.purchases.length) {
    list.innerHTML = document.getElementById("emptyStateTemplate").innerHTML;
    return;
  }

  const sorted = [...state.purchases].sort((a, b) => Number(b.amount || 0) - Number(a.amount || 0));
  sorted.forEach((purchase) => {
    const article = document.createElement("article");
    article.className = "list-item";
    article.innerHTML = `
      <div class="purchase-header">
        <div>
          <div class="property-title">${purchase.name}</div>
          <div class="muted">${purchase.category} ・ ${dateLabel(purchase.plannedDate)}</div>
        </div>
        <div class="property-title">${currency(purchase.amount)}</div>
      </div>
      <p class="note">${purchase.note || "メモなし"}</p>
      <div class="item-actions">
        <button class="mini-button" data-action="delete-purchase" data-id="${purchase.id}" type="button">削除</button>
      </div>
    `;
    list.appendChild(article);
  });
}

function renderAll() {
  renderSummary();
  renderProperties();
  renderTasks();
  renderPurchases();
}

async function filesToDataUrls(fileList) {
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

async function onPropertySubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = formDataToObject(form);
  const images = await filesToDataUrls(form.querySelector('[name="images"]').files);

  state.properties.unshift({
    id: crypto.randomUUID(),
    ...values,
    images,
    createdAt: Date.now()
  });

  saveState();
  form.reset();
  renderAll();
}

function onTaskSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = formDataToObject(form);
  state.tasks.unshift({
    id: crypto.randomUUID(),
    ...values,
    completed: false,
    createdAt: Date.now()
  });
  saveState();
  form.reset();
  renderAll();
}

function onPurchaseSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = formDataToObject(form);
  state.purchases.unshift({
    id: crypto.randomUUID(),
    ...values,
    createdAt: Date.now()
  });
  saveState();
  form.reset();
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

function toCsv(rows) {
  return rows
    .map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(","))
    .join("\n");
}

function downloadCsv(filename, rows) {
  const csv = "\uFEFF" + toCsv(rows);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function exportProperties() {
  const rows = [
    [
      "物件名",
      "不動産会社名",
      "初期費用合計",
      "月額合計",
      "家賃",
      "管理費",
      "敷金",
      "礼金",
      "仲介手数料",
      "保証料",
      "火災保険",
      "鍵交換",
      "24時間サポート",
      "消毒費用",
      "クリーニング費用",
      "その他費用",
      "フリーレント",
      "駅徒歩",
      "築年数",
      "広さ",
      "階数",
      "バストイレ別",
      "通勤時間",
      "見積日",
      "内見日",
      "メモ"
    ],
    ...state.properties.map((property) => [
      property.name,
      property.agency,
      totalInitialCost(property),
      totalMonthlyCost(property),
      property.rent,
      property.maintenanceFee,
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
      property.freeRentMonths,
      property.walkMinutes,
      property.buildingAge,
      property.area,
      property.floor,
      property.bathToiletSeparate === "yes" ? "はい" : "いいえ",
      property.commuteMinutes,
      property.estimateDate,
      property.visitDate,
      property.memo
    ])
  ];
  downloadCsv("properties.csv", rows);
}

function exportTasks() {
  const rows = [
    ["タスク名", "カテゴリ", "期限", "完了", "メモ"],
    ...state.tasks.map((task) => [task.title, task.category, task.dueDate, task.completed ? "完了" : "未完了", task.notes])
  ];
  downloadCsv("tasks.csv", rows);
}

function exportPurchases() {
  const rows = [
    ["項目名", "カテゴリ", "金額", "購入予定日", "メモ"],
    ...state.purchases.map((purchase) => [purchase.name, purchase.category, purchase.amount, purchase.plannedDate, purchase.note])
  ];
  downloadCsv("purchases.csv", rows);
}

function exportSummary() {
  const best = getSortedProperties()[0];
  const rows = [
    ["項目", "値"],
    ["比較中物件数", state.properties.length],
    ["未完了タスク数", state.tasks.filter((task) => !task.completed).length],
    ["追加購入費用合計", totalExtraPurchases()],
    ["想定総額", grandTotal()],
    ["最有力物件", best?.name ?? ""],
    ["最有力物件の初期費用", best ? totalInitialCost(best) : ""],
    ["最有力物件の月額", best ? totalMonthlyCost(best) : ""]
  ];
  downloadCsv("moving-summary.csv", rows);
}

function handleListActions(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const { action, id } = target.dataset;

  if (action === "toggle-task" && event.type !== "change") {
    return;
  }

  if (action !== "toggle-task" && event.type !== "click") {
    return;
  }

  if (action === "delete-property") {
    state.properties = state.properties.filter((item) => item.id !== id);
  }

  if (action === "delete-task") {
    state.tasks = state.tasks.filter((item) => item.id !== id);
  }

  if (action === "toggle-task") {
    state.tasks = state.tasks.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item));
  }

  if (action === "delete-purchase") {
    state.purchases = state.purchases.filter((item) => item.id !== id);
  }

  saveState();
  renderAll();
}

function resetToSeedData() {
  state = structuredClone(defaultData);
  saveState();
  renderAll();
}

function registerEvents() {
  document.querySelectorAll(".tab").forEach((tab) =>
    tab.addEventListener("click", () => {
      switchTab(tab.dataset.target);
    })
  );

  document.getElementById("propertyForm").addEventListener("submit", onPropertySubmit);
  document.getElementById("taskForm").addEventListener("submit", onTaskSubmit);
  document.getElementById("purchaseForm").addEventListener("submit", onPurchaseSubmit);

  document.getElementById("propertyList").addEventListener("click", handleListActions);
  document.getElementById("taskGroups").addEventListener("click", handleListActions);
  document.getElementById("taskGroups").addEventListener("change", handleListActions);
  document.getElementById("purchaseList").addEventListener("click", handleListActions);

  document.getElementById("exportPropertyCsv").addEventListener("click", exportProperties);
  document.getElementById("exportTaskCsv").addEventListener("click", exportTasks);
  document.getElementById("exportPurchaseCsv").addEventListener("click", exportPurchases);
  document.getElementById("exportSummaryCsv").addEventListener("click", exportSummary);
  document.getElementById("seedDataButton").addEventListener("click", resetToSeedData);
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
renderAll();
registerPwa();
