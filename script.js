const money = new Intl.NumberFormat("en-MY", {
  style: "currency",
  currency: "MYR"
});

const defaultEwalletQr = "assets/images/ewallet-qr.jpeg";
const voidPassword = "1234";

const languageText = {
  zh: {
    lang: "zh-Hans",
    nextLanguage: "BM",
    languageTitle: "切换语言",
    metricOrdersLabel: "今日订单",
    metricOpenLabel: "待处理",
    metricDoneLabel: "已完成",
    metricRevenueLabel: "营业额",
    orderStation: "点餐台",
    searchPlaceholder: "搜索菜名 / BM / 价格",
    orderTypeDineIn: "堂食",
    orderTypeTakeaway: "打包",
    currentOrder: "Current Order",
    customerLabel: "桌号 / 名字",
    guestLabel: "人数",
    noteLabel: "备注",
    notePlaceholder: "少辣、不要葱、几点拿...",
    subtotalLabel: "小计",
    paymentCash: "现金",
    cashReceivedLabel: "顾客给",
    changeDueLabel: "找回",
    cashShortLabel: "还差",
    ewalletQrTitle: "E-Wallet QR",
    ewalletQrEmpty: "还没有 QR Code",
    uploadQr: "上传 QR",
    confirmPaid: "已收到付款",
    paymentPending: "等待顾客付款",
    paymentConfirmed: "付款已确认",
    submitOrder: "送出订单",
    settlement: "结算",
    settlementTitle: "今日结算",
    settlementOrders: "订单",
    settlementTotal: "总额",
    settlementItems: "菜品明细",
    settlementOrderList: "今日订单",
    settlementHistory: "历史记录",
    finishSettlement: "完成结算清0",
    printSettlement: "打印结算",
    close: "关闭",
    noSettlementItems: "还没有订单",
    noSettlementOrders: "还没有订单",
    noSettlementHistory: "还没有历史记录",
    clearSettlementConfirm: "确定完成结算并清0吗？今天订单会存入历史记录。",
    settlementSaved: "结算已保存，今日数据已清0。",
    voidOrder: "Void",
    voided: "已 Void",
    voidPasswordPrompt: "请输入 Void 密码",
    voidPasswordWrong: "密码错误，不能 Void。",
    voidConfirm: "确定要 Void 这张订单吗？",
    pendingTitle: "待处理",
    cookingTitle: "烹煮中",
    doneTitle: "完成",
    emptyCartTitle: "还没有餐点",
    emptyCartHelp: "从左边菜单加入菜色",
    newOrder: "新订单",
    print: "打印",
    all: "全部",
    economy: "经济餐",
    vegetable: "蔬菜",
    chicken: "鸡肉",
    beancurd: "豆腐",
    egg: "蛋",
    pork: "猪肉",
    prawn: "虾",
    crab: "螃蟹",
    sotong: "苏东",
    soup: "汤羹",
    addOrder: "加入订单",
    remove: "移除",
    noMatchesTitle: "没有找到菜色",
    noMatchesHelp: "换一个关键词试试",
    pendingEmptyTitle: "没有待处理订单",
    pendingEmptyHelp: "新订单会出现在这里",
    cookingEmptyTitle: "没有烹煮中订单",
    cookingEmptyHelp: "开始煮后会出现在这里",
    doneEmptyTitle: "还没有完成订单",
    doneEmptyHelp: "完成后会保留记录",
    startCook: "开始煮",
    complete: "完成",
    completed: "已完成",
    copy: "复制",
    missingCustomer: "未填写",
    marketPrice: "时价",
    customPrice: "自定义",
    customDish: "自定义菜品",
    enterDishName: "请输入菜品名字",
    invalidDishName: "菜品名字不能为空。",
    enterPrice: "请输入 {name} 的实际价格 (RM)",
    invalidPrice: "价格无效，请重新加入并输入正确价格。"
  },
  bm: {
    lang: "ms",
    nextLanguage: "中文",
    languageTitle: "Tukar bahasa",
    metricOrdersLabel: "Pesanan Hari Ini",
    metricOpenLabel: "Belum Siap",
    metricDoneLabel: "Selesai",
    metricRevenueLabel: "Jualan",
    orderStation: "Kaunter Pesanan",
    searchPlaceholder: "Cari nama / BM / harga",
    orderTypeDineIn: "Makan Sini",
    orderTypeTakeaway: "Bungkus",
    currentOrder: "Pesanan Semasa",
    customerLabel: "Meja / Nama",
    guestLabel: "Bil. Orang",
    noteLabel: "Catatan",
    notePlaceholder: "Kurang pedas, tanpa bawang, masa ambil...",
    subtotalLabel: "Subtotal",
    paymentCash: "Tunai",
    cashReceivedLabel: "Terima",
    changeDueLabel: "Baki",
    cashShortLabel: "Kurang",
    ewalletQrTitle: "E-Wallet QR",
    ewalletQrEmpty: "Belum ada QR Code",
    uploadQr: "Upload QR",
    confirmPaid: "Bayaran Diterima",
    paymentPending: "Menunggu bayaran pelanggan",
    paymentConfirmed: "Bayaran disahkan",
    submitOrder: "Hantar Pesanan",
    settlement: "Settlement",
    settlementTitle: "Settlement Hari Ini",
    settlementOrders: "Pesanan",
    settlementTotal: "Jumlah",
    settlementItems: "Senarai Item",
    settlementOrderList: "Pesanan Hari Ini",
    settlementHistory: "Rekod Settlement",
    finishSettlement: "Selesai & Kosongkan",
    printSettlement: "Cetak Settlement",
    close: "Tutup",
    noSettlementItems: "Belum ada pesanan",
    noSettlementOrders: "Belum ada pesanan",
    noSettlementHistory: "Belum ada rekod",
    clearSettlementConfirm: "Sahkan settlement dan kosongkan? Pesanan hari ini akan disimpan dalam rekod.",
    settlementSaved: "Settlement disimpan. Data hari ini sudah dikosongkan.",
    voidOrder: "Void",
    voided: "Sudah Void",
    voidPasswordPrompt: "Masukkan password Void",
    voidPasswordWrong: "Password salah. Tidak boleh Void.",
    voidConfirm: "Sahkan Void pesanan ini?",
    pendingTitle: "Belum Masak",
    cookingTitle: "Sedang Masak",
    doneTitle: "Selesai",
    emptyCartTitle: "Belum ada item",
    emptyCartHelp: "Tambah hidangan dari menu",
    newOrder: "Pesanan Baru",
    print: "Cetak",
    all: "Semua",
    economy: "Nasi Ekonomi",
    vegetable: "Sayur",
    chicken: "Ayam",
    beancurd: "Tauhu",
    egg: "Telur",
    pork: "Babi",
    prawn: "Udang",
    crab: "Ketam",
    sotong: "Sotong",
    soup: "Sup",
    addOrder: "Tambah",
    remove: "Buang",
    noMatchesTitle: "Tiada hidangan",
    noMatchesHelp: "Cuba kata kunci lain",
    pendingEmptyTitle: "Tiada pesanan belum masak",
    pendingEmptyHelp: "Pesanan baru akan muncul di sini",
    cookingEmptyTitle: "Tiada pesanan sedang masak",
    cookingEmptyHelp: "Selepas mula masak, pesanan muncul di sini",
    doneEmptyTitle: "Belum ada pesanan selesai",
    doneEmptyHelp: "Rekod disimpan selepas selesai",
    startCook: "Mula Masak",
    complete: "Siap",
    completed: "Sudah Siap",
    copy: "Salin",
    missingCustomer: "Belum isi",
    marketPrice: "Harga Semasa",
    customPrice: "Custom",
    customDish: "Item Custom",
    enterDishName: "Masukkan nama hidangan",
    invalidDishName: "Nama hidangan tidak boleh kosong.",
    enterPrice: "Masukkan harga sebenar untuk {name} (RM)",
    invalidPrice: "Harga tidak sah. Sila tambah semula dan masukkan harga yang betul."
  }
};

const vegetableMethods = [
  { zh: "清炒", bm: "Goreng Biasa" },
  { zh: "蒜米", bm: "Bawang Putih" },
  { zh: "马来盏", bm: "Belacan" },
  { zh: "蚝油", bm: "Sos Tiram" },
  { zh: "Sambal", bm: "Sambal" },
  { zh: "蛋", bm: "Telur" },
  { zh: "咸蛋", bm: "Telur Masin" }
];

const categories = [
  { id: "all", label: "全部" },
  { id: "economy", label: "经济餐" },
  { id: "vegetable", label: "蔬菜" },
  { id: "chicken", label: "鸡肉" },
  { id: "beancurd", label: "豆腐" },
  { id: "egg", label: "蛋" },
  { id: "pork", label: "猪肉" },
  { id: "prawn", label: "虾" },
  { id: "crab", label: "螃蟹" },
  { id: "sotong", label: "苏东" },
  { id: "soup", label: "汤羹" }
];

const categoryAssets = {
  economy: "assets/images/economy-rice-1.jpg",
  vegetable: "assets/images/chao-veg.jpg",
  chicken: "assets/images/chao-prawn.jpg",
  beancurd: "assets/images/chao-tofu.jpg",
  egg: "assets/images/chao-tofu.jpg",
  pork: "assets/images/chao-fish.jpg",
  prawn: "assets/images/chao-prawn.jpg",
  crab: "assets/images/chao-crab-red.jpg",
  sotong: "assets/images/chao-prawn.jpg",
  soup: "assets/images/chao-fish.jpg"
};

const economyMenuItems = [
  ["economy-rice", "白饭", "Nasi Putih", "主食", 1.5],
  ["economy-extra-rice", "加饭", "Tambah Nasi", "加饭", 0.5],
  ["economy-chicken", "鸡肉", "Ayam", "菜", 3.2],
  ["economy-pork", "猪肉", "Babi", "菜", 3.5],
  ["economy-vegetable", "蔬菜", "Sayur", "菜", 1.8],
  ["economy-egg-tofu", "鸡蛋 / 豆腐", "Telur / Tauhu", "菜", 2],
  ["economy-fish-slice", "鱼片", "Isi Ikan", "菜", 3.5],
  ["economy-fish", "鱼", "Ikan", "自定义", null],
  ["economy-custom", "自定义菜品", "Item Custom", "自定义", null, true]
].map(([id, name, bm, tag, price]) => ({
  id,
  category: "economy",
  name,
  bm,
  image: categoryAssets.economy,
  tags: ["经济餐", tag],
  customEntry: id === "economy-custom",
  sizes: [{
    label: price === null ? "自定义" : "份",
    price,
    display: price === null ? "自定义" : `RM${price.toFixed(2)}`
  }]
}));

const hotcookMenu = [
  {
    id: "vegetable",
    label: "蔬菜",
    bm: "Sayur",
    groups: [{
      columns: ["S", "M", "L"],
      items: [
        ["比林", "Midin", "15", "23", "30"],
        ["小芥兰", "Baby Kailan", "10", "18", "25"],
        ["马尼菜", "Manicai", "10", "18", "25"],
        ["空心菜", "Kangkong", "10", "18", "25"],
        ["苦瓜", "Bitter Gourd", "10", "18", "25"],
        ["芥兰", "Kailan", "10", "18", "25"],
        ["茄子", "Eggplant", "10", "18", "25"],
        ["杂菜", "Mix Vegetable", "10", "18", "25"],
        ["四季豆", "French Bean", "10", "18", "25"],
        ["黄金莲藕", "Salted Egg Lotus Root", "10", "18", "25"]
      ]
    }]
  },
  {
    id: "chicken",
    label: "鸡肉",
    bm: "Ayam",
    groups: [
      {
        tag: "烧鸡",
        columns: ["半只", "整只"],
        items: [["烧鸡", "Roasted Chicken", "20", "38"]]
      },
      {
        tag: "鸡肉做法",
        columns: ["S", "M", "L"],
        items: [
          ["奶油鸡", "Butter Chicken", "15", "22", "32"],
          ["麦片鸡", "Nestum Chicken", "15", "22", "32"],
          ["酸甜鸡", "Sweet & Sour Chicken", "15", "22", "32"],
          ["柠檬鸡", "Lemon Chicken", "15", "22", "32"],
          ["泰式酱鸡", "Thai Style Chicken", "15", "22", "32"],
          ["咸蛋鸡", "Salted Egg Chicken", "15", "22", "32"],
          ["宫保鸡", "Dried Chilli Chicken", "15", "22", "32"]
        ]
      }
    ]
  },
  {
    id: "beancurd",
    label: "豆腐",
    bm: "Tauhu",
    groups: [{
      columns: ["S", "M", "L"],
      items: [
        ["招牌豆腐", "Signature Beancurd", "15", "22", "32"],
        ["肉碎豆腐", "Minced Meat Beancurd", "15", "22", "32"],
        ["泰式豆腐", "Thai Style Beancurd", "15", "22", "32"],
        ["红烧豆腐", "Braised Beancurd", "15", "22", "32"],
        ["海鲜豆腐", "Seafood Beancurd", "15", "22", "32"]
      ]
    }]
  },
  {
    id: "egg",
    label: "蛋",
    bm: "Telur",
    groups: [{
      columns: ["S", "M", "L"],
      items: [
        ["芙蓉蛋", "Fluffy Egg", "10", "18", "25"],
        ["大葱蛋", "Onion Egg", "10", "18", "25"],
        ["菜脯蛋", "Preserved Vegetable Egg", "10", "18", "25"]
      ]
    }]
  },
  {
    id: "pork",
    label: "猪肉",
    bm: "Babi",
    groups: [{
      columns: ["S", "M", "L"],
      items: [
        ["梅菜扣肉", "Braised Pork with Preserved Vegetable", "-", "-", "30"],
        ["排骨王", "BBQ Pork", "18", "25", "35"],
        ["咕咾肉", "Sweet & Sour Pork", "18", "25", "35"],
        ["南乳炸猪肉", "Nanru Fried Pork", "18", "25", "35"],
        ["咸鱼猪肉", "Salted Fish Pork", "18", "25", "35"],
        ["姜丝猪肉", "Ginger Pork", "18", "25", "35"]
      ]
    }]
  },
  {
    id: "prawn",
    label: "虾",
    bm: "Udang",
    groups: [{
      columns: ["S", "L"],
      items: [
        ["椒盐虾", "Salt & Pepper Prawn", "30", "60"],
        ["奶油虾", "Butter Prawn", "30", "60"],
        ["咸蛋虾", "Salted Egg Prawn", "30", "60"],
        ["麦片虾", "Nestum Prawn", "30", "60"],
        ["金丝虾", "Dry Butter Prawn", "30", "60"],
        ["蛋白蒸虾", "Egg White Steamed Prawn", "30", "60"]
      ]
    }]
  },
  {
    id: "crab",
    label: "螃蟹",
    bm: "Ketam",
    groups: [{
      columns: ["价格"],
      items: [
        ["酸甜螃蟹", "Sweet & Sour Crab", "时价"],
        ["奶油螃蟹", "Butter Crab", "时价"],
        ["咸蛋螃蟹", "Salted Egg Crab", "时价"],
        ["香辣螃蟹", "Chilli Crab", "时价"],
        ["清蒸螃蟹", "Steamed Crab", "时价"]
      ]
    }]
  },
  {
    id: "sotong",
    label: "苏东",
    bm: "Sotong",
    groups: [{
      columns: ["S", "M", "L"],
      items: [
        ["椒盐苏东", "Salt & Pepper Sotong", "18", "25", "35"],
        ["咸蛋苏东", "Salted Egg Sotong", "18", "25", "35"],
        ["酥炸苏东", "Crispy Fried Sotong", "18", "25", "35"],
        ["宫保苏东", "Dried Chilli Sotong", "18", "25", "35"]
      ]
    }]
  },
  {
    id: "soup",
    label: "汤羹",
    bm: "Sup",
    groups: [{
      columns: ["S", "M", "L"],
      items: [
        ["海参羹", "Sea Cucumber Soup", "10", "18", "25"],
        ["咸菜豆腐汤", "Salted Vegetable Soup", "10", "18", "25"],
        ["东炎汤", "Tomyam Soup", "10", "18", "25"],
        ["酸辣羹", "Hot & Sour Soup", "10", "18", "25"],
        ["杂菜汤", "Mix Vegetable Soup", "10", "18", "25"]
      ]
    }]
  }
];

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function parsePrice(value) {
  if (value === "-") return null;
  if (value === "时价") return { label: "时价", price: null, display: "时价" };
  return { label: "", price: Number(value), display: `RM${Number(value).toFixed(2)}` };
}

function buildMenuItems() {
  const cookedItems = hotcookMenu.flatMap((category) => (
    category.groups.flatMap((group) => (
      group.items.map(([name, bm, ...prices]) => {
        const sizes = prices
          .map((price, index) => {
            const parsed = parsePrice(price);
            if (!parsed) return null;
            return {
              label: parsed.label || group.columns[index],
              price: parsed.price,
              display: parsed.display
            };
          })
          .filter(Boolean);

        return {
          id: `${category.id}-${slug(bm)}`,
          category: category.id,
          name,
          bm,
          image: categoryAssets[category.id],
          tags: [category.label, group.tag || "现炒"],
          sizes
        };
      })
    ))
  ));

  return [...economyMenuItems, ...cookedItems];
}

const menuItems = buildMenuItems();

const state = {
  activeCategory: "all",
  language: localStorage.getItem("ykf-language") || "zh",
  orderType: "dine-in",
  payment: "cash",
  paymentConfirmed: false,
  cashReceived: 0,
  cart: [],
  orders: JSON.parse(localStorage.getItem("ykf-orders") || "[]"),
  settlementHistory: JSON.parse(localStorage.getItem("ykf-settlement-history") || "[]")
};

const els = {
  todayDate: document.querySelector("#todayDate"),
  liveClock: document.querySelector("#liveClock"),
  metricOrders: document.querySelector("#metricOrders"),
  metricOpen: document.querySelector("#metricOpen"),
  metricDone: document.querySelector("#metricDone"),
  metricRevenue: document.querySelector("#metricRevenue"),
  categoryTabs: document.querySelector("#categoryTabs"),
  menuGrid: document.querySelector("#menuGrid"),
  menuSearch: document.querySelector("#menuSearch"),
  ticketNumber: document.querySelector("#ticketNumber"),
  ticketType: document.querySelector("#ticketType"),
  customerName: document.querySelector("#customerName"),
  guestCount: document.querySelector("#guestCount"),
  orderNote: document.querySelector("#orderNote"),
  cartList: document.querySelector("#cartList"),
  subtotalText: document.querySelector("#subtotalText"),
  serviceLabel: document.querySelector("#serviceLabel"),
  serviceText: document.querySelector("#serviceText"),
  totalText: document.querySelector("#totalText"),
  submitOrderBtn: document.querySelector("#submitOrderBtn"),
  pendingOrders: document.querySelector("#pendingOrders"),
  cookingOrders: document.querySelector("#cookingOrders"),
  doneOrders: document.querySelector("#doneOrders"),
  pendingCount: document.querySelector("#pendingCount"),
  cookingCount: document.querySelector("#cookingCount"),
  doneCount: document.querySelector("#doneCount"),
  langToggleBtn: document.querySelector("#langToggleBtn"),
  settlementBtn: document.querySelector("#settlementBtn"),
  settlementModal: document.querySelector("#settlementModal"),
  settlementDate: document.querySelector("#settlementDate"),
  settlementOrders: document.querySelector("#settlementOrders"),
  settlementCash: document.querySelector("#settlementCash"),
  settlementEwallet: document.querySelector("#settlementEwallet"),
  settlementTotal: document.querySelector("#settlementTotal"),
  settlementItemList: document.querySelector("#settlementItemList"),
  settlementOrderList: document.querySelector("#settlementOrderList"),
  settlementHistoryList: document.querySelector("#settlementHistoryList"),
  finishSettlementBtn: document.querySelector("#finishSettlementBtn"),
  closeSettlementBtn: document.querySelector("#closeSettlementBtn"),
  closeSettlementFooterBtn: document.querySelector("#closeSettlementFooterBtn"),
  printSettlementBtn: document.querySelector("#printSettlementBtn"),
  newOrderBtn: document.querySelector("#newOrderBtn"),
  ewalletQrPanel: document.querySelector("#ewalletQrPanel"),
  ewalletQrImage: document.querySelector("#ewalletQrImage"),
  ewalletQrEmpty: document.querySelector("#ewalletQrEmpty"),
  ewalletQrAmount: document.querySelector("#ewalletQrAmount"),
  cashPanel: document.querySelector("#cashPanel"),
  cashReceivedInput: document.querySelector("#cashReceivedInput"),
  changeDueText: document.querySelector("#changeDueText"),
  qrUploadInput: document.querySelector("#qrUploadInput"),
  confirmPaidBtn: document.querySelector("#confirmPaidBtn"),
  paymentStatus: document.querySelector("#paymentStatus")
};

function t(key) {
  return languageText[state.language][key] || languageText.zh[key] || key;
}

function categoryLabel(categoryId) {
  return t(categoryId);
}

function methodLabel(method) {
  return method[state.language] || method.zh;
}

function itemDisplayName(item) {
  return state.language === "zh" ? item.name : item.bm;
}

function itemSecondaryName(item) {
  return state.language === "zh" ? item.bm : item.name;
}

function cartItemName(item) {
  const name = itemDisplayName(item);
  const method = state.language === "zh" ? item.methodZh : item.methodBm;
  return method ? `${name} - ${method}` : name;
}

function cartItemSecondaryName(item) {
  const secondary = itemSecondaryName(item);
  const method = state.language === "zh" ? item.methodBm : item.methodZh;
  return method ? `${secondary} - ${method}` : secondary;
}

function formatMoney(value) {
  return money.format(value).replace("MYR", "RM");
}

function todayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isTodayOrder(order) {
  return !order.date || order.date === todayKey();
}

function isActiveOrder(order) {
  return !order.voided;
}

function priceText(value, fallback = t("marketPrice")) {
  return typeof value === "number" ? formatMoney(value) : fallback;
}

function getNextTicketNumber() {
  const next = state.orders.length + 1;
  return `#YKF-${String(next).padStart(3, "0")}`;
}

function getOrderTypeLabel(type = state.orderType) {
  return {
    "dine-in": t("orderTypeDineIn"),
    takeaway: t("orderTypeTakeaway")
  }[type] || t("orderTypeDineIn");
}

function getServiceFee() {
  return 0;
}

function cartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + Number(item.price || 0) * item.qty, 0);
  const service = getServiceFee(subtotal);
  return { subtotal, service, total: subtotal + service };
}

function saveOrders() {
  localStorage.setItem("ykf-orders", JSON.stringify(state.orders));
}

function saveSettlementHistory() {
  localStorage.setItem("ykf-settlement-history", JSON.stringify(state.settlementHistory));
}

function resetPaymentConfirmation() {
  state.paymentConfirmed = false;
}

function resetPaymentInput() {
  state.paymentConfirmed = false;
  state.cashReceived = 0;
  els.cashReceivedInput.value = "";
}

function getEwalletQrSource() {
  return localStorage.getItem("ykf-ewallet-qr") || defaultEwalletQr;
}

function renderPaymentDetails(totals = cartTotals()) {
  const change = state.cashReceived - totals.total;
  const cashReady = state.payment !== "cash" || (state.cart.length > 0 && state.cashReceived >= totals.total);

  els.cashPanel.hidden = state.payment !== "cash";
  els.changeDueText.textContent = change >= 0 ? formatMoney(change) : `${t("cashShortLabel")} ${formatMoney(Math.abs(change))}`;
  els.changeDueText.classList.toggle("short", change < 0);

  els.ewalletQrPanel.hidden = state.payment !== "ewallet";
  els.ewalletQrAmount.textContent = formatMoney(totals.total);
  els.paymentStatus.textContent = state.paymentConfirmed ? t("paymentConfirmed") : t("paymentPending");
  els.paymentStatus.classList.toggle("paid", state.paymentConfirmed);
  els.confirmPaidBtn.classList.toggle("paid", state.paymentConfirmed);
  els.submitOrderBtn.disabled = state.cart.length === 0 || !cashReady || (state.payment === "ewallet" && !state.paymentConfirmed);

  if (state.payment !== "ewallet") return;

  const qrSource = getEwalletQrSource();
  if (qrSource) {
    els.ewalletQrImage.src = qrSource;
    els.ewalletQrImage.hidden = false;
    els.ewalletQrEmpty.hidden = true;
  } else {
    els.ewalletQrImage.hidden = true;
    els.ewalletQrEmpty.hidden = false;
  }
}

function renderClock() {
  const now = new Date();
  els.todayDate.textContent = now.toLocaleDateString(state.language === "zh" ? "zh-MY" : "ms-MY", {
    month: "short",
    day: "numeric",
    weekday: "short"
  });
  els.liveClock.textContent = now.toLocaleTimeString("en-MY", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function renderCategories() {
  els.categoryTabs.innerHTML = categories
    .map((category) => `
      <button
        class="category-btn ${category.id === state.activeCategory ? "active" : ""}"
        type="button"
        data-category="${category.id}"
        aria-selected="${category.id === state.activeCategory}"
      >
        ${categoryLabel(category.id)}
      </button>
    `)
    .join("");
}

function renderMenu() {
  const query = els.menuSearch.value.trim().toLowerCase();
  const items = menuItems.filter((item) => {
    const matchesCategory = state.activeCategory === "all" || item.category === state.activeCategory;
    const searchText = `${item.name} ${item.bm} ${item.tags.join(" ")} ${item.sizes.map((size) => size.price).join(" ")}`.toLowerCase();
    return matchesCategory && searchText.includes(query);
  });

  els.menuGrid.innerHTML = items
    .map((item) => {
      const activeSize = item.sizes[0];
      const primaryName = itemDisplayName(item);
      const secondaryName = itemSecondaryName(item);
      const activePrice = priceText(activeSize.price, item.customEntry ? t("customPrice") : t("marketPrice"));
      return `
        <article class="dish-card" data-item-id="${item.id}">
          <div class="dish-body">
            <div class="dish-title">
              <div>
                <h3>${primaryName}</h3>
                <p class="dish-bm">${secondaryName}</p>
              </div>
              <span data-price>${activePrice}</span>
            </div>
            <div class="size-row">
              ${item.sizes.map((size, index) => {
                const sizeLabel = size.price === null ? (item.customEntry ? t("customPrice") : t("marketPrice")) : size.label;
                return `
                  <button
                    class="size-btn ${index === 0 ? "active" : ""}"
                    type="button"
                    data-size="${sizeLabel}"
                    data-price="${size.price ?? ""}"
                    data-display="${priceText(size.price, item.customEntry ? t("customPrice") : t("marketPrice"))}"
                  >
                    ${sizeLabel}
                  </button>
                `;
              }).join("")}
            </div>
            ${item.category === "vegetable" ? `
              <div class="method-row" aria-label="蔬菜炒法">
                ${vegetableMethods.map((method, index) => `
                  <button
                    class="method-btn ${index === 0 ? "active" : ""}"
                    type="button"
                    data-method-zh="${method.zh}"
                    data-method-bm="${method.bm}"
                  >
                    ${methodLabel(method)}
                  </button>
                `).join("")}
              </div>
            ` : ""}
            <div class="dish-tags">
              ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <button class="add-btn" type="button" data-add-item="${item.id}">${t("addOrder")}</button>
          </div>
        </article>
      `;
    })
    .join("") || `<div class="empty-state"><strong>${t("noMatchesTitle")}</strong><span>${t("noMatchesHelp")}</span></div>`;
}

function renderTicket() {
  const totals = cartTotals();
  els.ticketNumber.textContent = getNextTicketNumber();
  els.ticketType.textContent = getOrderTypeLabel();
  els.serviceLabel.closest("div").hidden = true;
  els.subtotalText.textContent = formatMoney(totals.subtotal);
  els.serviceText.textContent = formatMoney(totals.service);
  els.totalText.textContent = formatMoney(totals.total);
  renderPaymentDetails(totals);

  if (!state.cart.length) {
    els.cartList.innerHTML = `<div class="empty-state"><strong>${t("emptyCartTitle")}</strong><span>${t("emptyCartHelp")}</span></div>`;
    return;
  }

  els.cartList.innerHTML = state.cart
    .map((item) => `
      <div class="cart-row" data-cart-id="${item.cartId}">
        <div>
          <h3>${cartItemName(item)}</h3>
          <p>${item.size} · ${priceText(item.price)} / ${cartItemSecondaryName(item)}</p>
          <button class="remove-btn" type="button" data-remove="${item.cartId}">${t("remove")}</button>
        </div>
        <div>
          <div class="qty-tools">
            <button type="button" data-qty="${item.cartId}" data-delta="-1">−</button>
            <span>${item.qty}</span>
            <button type="button" data-qty="${item.cartId}" data-delta="1">+</button>
          </div>
          <p>${priceText(Number(item.price || 0) * item.qty)}</p>
        </div>
      </div>
    `)
    .join("");
}

function renderMetrics() {
  const todayOrders = state.orders.filter((order) => isTodayOrder(order) && isActiveOrder(order));
  const revenue = todayOrders.reduce((sum, order) => sum + order.total, 0);

  els.metricOrders.textContent = todayOrders.length;
  els.metricOpen.textContent = 0;
  els.metricDone.textContent = todayOrders.length;
  els.metricRevenue.textContent = formatMoney(revenue);
  if (els.pendingCount) els.pendingCount.textContent = 0;
  if (els.cookingCount) els.cookingCount.textContent = 0;
  if (els.doneCount) els.doneCount.textContent = todayOrders.length;
}

function orderCard(order) {
  const nextLabel = order.status === "pending" ? t("startCook") : order.status === "cooking" ? t("complete") : t("completed");
  const canAdvance = order.status !== "done";
  return `
    <article class="order-card" data-order-id="${order.id}">
      <div class="order-card-header">
        <div>
          <h3>${order.ticket}</h3>
          <div class="order-meta">
            <span class="order-badge">${getOrderTypeLabel(order.type)}</span>
            <span>${order.customer || t("missingCustomer")}</span>
            <span>${order.time}</span>
          </div>
        </div>
        <strong>${formatMoney(order.total)}</strong>
      </div>
      <ul class="order-items">
        ${order.items.map((item) => `<li>${item.qty}× ${cartItemName(item)} (${item.size})</li>`).join("")}
      </ul>
      ${order.note ? `<p class="order-meta">${order.note}</p>` : ""}
      <div class="order-actions">
        <button type="button" data-reopen="${order.id}">${t("copy")}</button>
        <button class="advance-btn" type="button" data-advance="${order.id}" ${canAdvance ? "" : "disabled"}>${nextLabel}</button>
      </div>
    </article>
  `;
}

function renderOrders() {
  const activeOrders = state.orders.filter(isActiveOrder);
  const pending = activeOrders.filter((order) => order.status === "pending");
  const cooking = activeOrders.filter((order) => order.status === "cooking");
  const done = activeOrders.filter((order) => order.status === "done").slice(-6).reverse();

  if (els.pendingOrders) {
    els.pendingOrders.innerHTML = pending.map(orderCard).join("") || `<div class="empty-state"><strong>${t("pendingEmptyTitle")}</strong><span>${t("pendingEmptyHelp")}</span></div>`;
  }
  if (els.cookingOrders) {
    els.cookingOrders.innerHTML = cooking.map(orderCard).join("") || `<div class="empty-state"><strong>${t("cookingEmptyTitle")}</strong><span>${t("cookingEmptyHelp")}</span></div>`;
  }
  if (els.doneOrders) {
    els.doneOrders.innerHTML = done.map(orderCard).join("") || `<div class="empty-state"><strong>${t("doneEmptyTitle")}</strong><span>${t("doneEmptyHelp")}</span></div>`;
  }
  renderMetrics();
}

function settlementData() {
  const allOrders = state.orders.filter(isTodayOrder);
  const orders = allOrders.filter(isActiveOrder);
  const itemMap = new Map();
  const totals = orders.reduce((summary, order) => {
    summary.total += Number(order.total || 0);
    if (order.payment === "ewallet") {
      summary.ewallet += Number(order.total || 0);
    } else {
      summary.cash += Number(order.total || 0);
    }

    order.items.forEach((item) => {
      const name = cartItemName(item);
      const key = `${name}|${item.size}`;
      const current = itemMap.get(key) || { name, size: item.size, qty: 0, amount: 0 };
      current.qty += item.qty;
      current.amount += Number(item.price || 0) * item.qty;
      itemMap.set(key, current);
    });

    return summary;
  }, { total: 0, cash: 0, ewallet: 0 });

  return {
    allOrders,
    orders,
    totals,
    items: Array.from(itemMap.values()).sort((a, b) => b.amount - a.amount)
  };
}

function renderSettlement() {
  const data = settlementData();
  const now = new Date();

  els.settlementDate.textContent = now.toLocaleDateString(state.language === "zh" ? "zh-MY" : "ms-MY", {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short"
  });
  els.settlementOrders.textContent = data.orders.length;
  els.settlementCash.textContent = formatMoney(data.totals.cash);
  els.settlementEwallet.textContent = formatMoney(data.totals.ewallet);
  els.settlementTotal.textContent = formatMoney(data.totals.total);
  els.settlementItemList.innerHTML = data.items.length
    ? data.items.map((item) => `
      <div class="settlement-item">
        <div>
          <strong>${item.name}</strong>
          <span>${item.size} × ${item.qty}</span>
        </div>
        <b>${formatMoney(item.amount)}</b>
      </div>
    `).join("")
    : `<div class="empty-state"><strong>${t("noSettlementItems")}</strong></div>`;
  els.settlementOrderList.innerHTML = data.allOrders.length
    ? data.allOrders.slice().reverse().map((order) => `
      <div class="settlement-item settlement-order-item ${order.voided ? "voided" : ""}">
        <div>
          <strong>${order.ticket} ${order.voided ? `- ${t("voided")}` : ""}</strong>
          <span>${order.time} · ${getOrderTypeLabel(order.type)} · ${order.payment === "ewallet" ? "E-Wallet" : t("paymentCash")}</span>
        </div>
        <div class="settlement-order-side">
          <b>${formatMoney(order.total)}</b>
          <button type="button" data-void-order="${order.id}" ${order.voided ? "disabled" : ""}>${order.voided ? t("voided") : t("voidOrder")}</button>
        </div>
      </div>
    `).join("")
    : `<div class="empty-state"><strong>${t("noSettlementOrders")}</strong></div>`;
  renderSettlementHistory();
}

function renderSettlementHistory() {
  const history = state.settlementHistory.slice().reverse();

  els.settlementHistoryList.innerHTML = history.length
    ? history.map((record) => `
      <div class="settlement-item settlement-history-item">
        <div>
          <strong>${record.dateLabel}</strong>
          <span>${t("settlementOrders")}: ${record.orderCount} · ${t("paymentCash")}: ${formatMoney(record.cash)} · E-Wallet: ${formatMoney(record.ewallet)}</span>
        </div>
        <b>${formatMoney(record.total)}</b>
      </div>
    `).join("")
    : `<div class="empty-state"><strong>${t("noSettlementHistory")}</strong></div>`;
}

function finishSettlement() {
  const data = settlementData();
  if (!data.allOrders.length) {
    window.alert(t("noSettlementItems"));
    return;
  }

  if (!window.confirm(t("clearSettlementConfirm"))) return;

  const now = new Date();
  state.settlementHistory.push({
    id: crypto.randomUUID(),
    date: todayKey(now),
    dateLabel: now.toLocaleString(state.language === "zh" ? "zh-MY" : "ms-MY", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }),
    orderCount: data.orders.length,
    cash: data.totals.cash,
    ewallet: data.totals.ewallet,
    total: data.totals.total,
    items: data.items,
    orders: data.allOrders
  });

  state.orders = state.orders.filter((order) => !isTodayOrder(order));
  saveSettlementHistory();
  saveOrders();
  renderAll();
  renderSettlement();
  window.alert(t("settlementSaved"));
}

function voidOrder(orderId) {
  const order = state.orders.find((entry) => entry.id === orderId);
  if (!order || order.voided) return;

  const password = window.prompt(t("voidPasswordPrompt"), "");
  if (password === null) return;
  if (password !== voidPassword) {
    window.alert(t("voidPasswordWrong"));
    return;
  }

  if (!window.confirm(t("voidConfirm"))) return;

  order.voided = true;
  order.voidedAt = new Date().toLocaleString("en-MY");
  saveOrders();
  renderAll();
  renderSettlement();
}

function openSettlement() {
  renderSettlement();
  els.settlementModal.hidden = false;
}

function closeSettlement() {
  els.settlementModal.hidden = true;
  document.body.classList.remove("printing-settlement");
}

function applyLanguage() {
  document.documentElement.lang = t("lang");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  els.langToggleBtn.textContent = t("nextLanguage");
  els.langToggleBtn.title = t("languageTitle");
  els.langToggleBtn.setAttribute("aria-label", t("languageTitle"));
  els.settlementBtn.title = t("settlement");
  els.settlementBtn.setAttribute("aria-label", t("settlement"));
  els.newOrderBtn.title = t("newOrder");
  els.newOrderBtn.setAttribute("aria-label", t("newOrder"));
}

function renderAll() {
  applyLanguage();
  renderCategories();
  renderMenu();
  renderTicket();
  renderOrders();
}

function addItem(itemId, card) {
  const item = menuItems.find((entry) => entry.id === itemId);
  const sizeButton = card.querySelector(".size-btn.active");
  const methodButton = card.querySelector(".method-btn.active");
  const size = sizeButton.dataset.size;
  const methodZh = methodButton?.dataset.methodZh || "";
  const methodBm = methodButton?.dataset.methodBm || "";
  let itemName = item.name;
  let itemBm = item.bm;
  let price = sizeButton.dataset.price === "" ? null : Number(sizeButton.dataset.price);

  if (item.customEntry) {
    const customName = window.prompt(t("enterDishName"), "");
    if (customName === null) return;
    itemName = customName.trim();
    if (!itemName) {
      window.alert(t("invalidDishName"));
      return;
    }
    itemBm = itemName;
  }

  if (price === null) {
    const customPrice = window.prompt(t("enterPrice").replace("{name}", item.customEntry ? itemName : itemDisplayName(item)), "");
    if (customPrice === null) return;
    price = Number(customPrice);
    if (!Number.isFinite(price) || price < 0) {
      window.alert(t("invalidPrice"));
      return;
    }
  }

  const existing = state.cart.find((cartItem) => (
    cartItem.id === item.id &&
    cartItem.size === size &&
    (cartItem.methodZh || "") === methodZh &&
    cartItem.name === itemName
  ));

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      cartId: crypto.randomUUID(),
      id: item.id,
      name: itemName,
      bm: itemBm,
      size,
      methodZh,
      methodBm,
      price,
      qty: 1
    });
  }

  resetPaymentConfirmation();
  renderTicket();
}

function submitOrder() {
  if (!state.cart.length) return;

  const totals = cartTotals();
  const cashChange = state.payment === "cash" ? Math.max(0, state.cashReceived - totals.total) : 0;
  state.orders.push({
    id: crypto.randomUUID(),
    ticket: getNextTicketNumber(),
    type: state.orderType,
    payment: state.payment,
    paymentConfirmed: state.payment !== "ewallet" || state.paymentConfirmed,
    cashReceived: state.payment === "cash" ? state.cashReceived : 0,
    changeDue: cashChange,
    customer: els.customerName.value.trim(),
    guests: Number(els.guestCount.value || 1),
    note: els.orderNote.value.trim(),
    items: structuredClone(state.cart),
    subtotal: totals.subtotal,
    service: totals.service,
    total: totals.total,
    status: "done",
    date: todayKey(),
    time: new Date().toLocaleTimeString("en-MY", { hour: "2-digit", minute: "2-digit" })
  });

  state.cart = [];
  resetPaymentInput();
  els.customerName.value = "";
  els.guestCount.value = 2;
  els.orderNote.value = "";
  saveOrders();
  renderAll();
}

document.addEventListener("click", (event) => {
  const voidButton = event.target.closest("[data-void-order]");
  if (voidButton) {
    voidOrder(voidButton.dataset.voidOrder);
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    state.activeCategory = categoryButton.dataset.category;
    renderAll();
    return;
  }

  const modeButton = event.target.closest("[data-order-type]");
  if (modeButton) {
    state.orderType = modeButton.dataset.orderType;
    document.querySelectorAll("[data-order-type]").forEach((button) => {
      const active = button === modeButton;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderTicket();
    return;
  }

  const paymentButton = event.target.closest("[data-payment]");
  if (paymentButton) {
    state.payment = paymentButton.dataset.payment;
    resetPaymentConfirmation();
    document.querySelectorAll("[data-payment]").forEach((button) => {
      const active = button === paymentButton;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderTicket();
    return;
  }

  const sizeButton = event.target.closest(".size-btn");
  if (sizeButton) {
    const card = sizeButton.closest(".dish-card");
    card.querySelectorAll(".size-btn").forEach((button) => button.classList.remove("active"));
    sizeButton.classList.add("active");
    card.querySelector("[data-price]").textContent = sizeButton.dataset.display;
    return;
  }

  const methodButton = event.target.closest(".method-btn");
  if (methodButton) {
    const card = methodButton.closest(".dish-card");
    card.querySelectorAll(".method-btn").forEach((button) => button.classList.remove("active"));
    methodButton.classList.add("active");
    return;
  }

  const addButton = event.target.closest("[data-add-item]");
  if (addButton) {
    addItem(addButton.dataset.addItem, addButton.closest(".dish-card"));
    return;
  }

  const qtyButton = event.target.closest("[data-qty]");
  if (qtyButton) {
    const item = state.cart.find((cartItem) => cartItem.cartId === qtyButton.dataset.qty);
    item.qty += Number(qtyButton.dataset.delta);
    state.cart = state.cart.filter((cartItem) => cartItem.qty > 0);
    resetPaymentConfirmation();
    renderTicket();
    return;
  }

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    state.cart = state.cart.filter((cartItem) => cartItem.cartId !== removeButton.dataset.remove);
    resetPaymentConfirmation();
    renderTicket();
    return;
  }

  const advanceButton = event.target.closest("[data-advance]");
  if (advanceButton && !advanceButton.disabled) {
    const order = state.orders.find((entry) => entry.id === advanceButton.dataset.advance);
    order.status = order.status === "pending" ? "cooking" : "done";
    saveOrders();
    renderOrders();
    return;
  }

  const reopenButton = event.target.closest("[data-reopen]");
  if (reopenButton) {
    const order = state.orders.find((entry) => entry.id === reopenButton.dataset.reopen);
    state.cart = structuredClone(order.items);
    state.orderType = order.type;
    els.customerName.value = order.customer;
    els.guestCount.value = order.guests;
    els.orderNote.value = order.note;
    resetPaymentInput();
    const orderTypeButton = document.querySelector(`[data-order-type="${order.type}"]`) || document.querySelector('[data-order-type="dine-in"]');
    orderTypeButton.click();
    renderTicket();
  }
});

els.menuSearch.addEventListener("input", renderMenu);
els.submitOrderBtn.addEventListener("click", submitOrder);

els.cashReceivedInput.addEventListener("input", () => {
  state.cashReceived = Number(els.cashReceivedInput.value || 0);
  renderTicket();
});

els.confirmPaidBtn.addEventListener("click", () => {
  state.paymentConfirmed = true;
  renderTicket();
});

els.settlementBtn.addEventListener("click", openSettlement);
els.finishSettlementBtn.addEventListener("click", finishSettlement);
els.closeSettlementBtn.addEventListener("click", closeSettlement);
els.closeSettlementFooterBtn.addEventListener("click", closeSettlement);
els.settlementModal.addEventListener("click", (event) => {
  if (event.target === els.settlementModal) closeSettlement();
});
els.printSettlementBtn.addEventListener("click", () => {
  document.body.classList.add("printing-settlement");
  window.print();
  window.setTimeout(() => document.body.classList.remove("printing-settlement"), 300);
});

document.querySelector("#newOrderBtn").addEventListener("click", () => {
  state.cart = [];
  resetPaymentInput();
  els.customerName.value = "";
  els.guestCount.value = 2;
  els.orderNote.value = "";
  renderTicket();
});

els.langToggleBtn.addEventListener("click", () => {
  state.language = state.language === "zh" ? "bm" : "zh";
  localStorage.setItem("ykf-language", state.language);
  renderClock();
  renderAll();
});

els.qrUploadInput.addEventListener("change", () => {
  const file = els.qrUploadInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    localStorage.setItem("ykf-ewallet-qr", reader.result);
    renderPaymentDetails();
  });
  reader.readAsDataURL(file);
});

renderClock();
renderAll();
setInterval(renderClock, 1000 * 30);
