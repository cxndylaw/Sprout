/* ================= ICONS ================= */
const ICON = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>`,
  bank: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>`,
  budget: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><path d="M12 12v4"/><circle cx="12" cy="12" r="1"/></svg>`,
  account: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.9 17.9A10.4 10.4 0 0 1 12 19c-7 0-11-7-11-7a18.6 18.6 0 0 1 4.2-5.2M9.9 4.2A9.4 9.4 0 0 1 12 4c7 0 11 7 11 7a18.6 18.6 0 0 1-2.4 3.3"/><path d="M14.1 14.1a3 3 0 1 1-4.2-4.2"/><path d="M1 1l22 22"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  sliders: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V14M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3"/><path d="M1 14h6M9 8h6M17 12h6"/></svg>`,
  warn: `<svg viewBox="0 0 24 24" fill="none" stroke="#2a1c08" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>`,
  dot: `<svg viewBox="0 0 24 24" fill="#2a1c08"><circle cx="12" cy="12" r="7"/></svg>`,
  bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  food: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>`,
  fuel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v17"/><path d="M3 10h10"/><path d="M15 6l3 3v8a1.5 1.5 0 0 0 3 0v-5l-2-2"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>`,
  gift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4"/><path d="M12 8v13M19 8v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8"/><path d="M12 8c-1.5 0-3-1-3-2.5A2.5 2.5 0 0 1 11.5 3C13 3 12 6 12 8ZM12 8c1.5 0 3-1 3-2.5A2.5 2.5 0 0 0 12.5 3C11 3 12 6 12 8Z"/></svg>`,
  misc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>`,
  cash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L21 6Z"/></svg>`,
  subscription: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M8 16H3v5"/></svg>`
};

const CAT_ICON = {
  'Shopping': 'bag', 'Eating Out': 'food', 'Fuel': 'fuel', 'Groceries': 'cart', 'Gifts': 'gift', 'Misc': 'misc',
  'Salary': 'cash', 'Freelance': 'cash', 'Gift': 'gift', 'Refund': 'cash', 'Reimburse': 'cash', 'Other': 'misc',
  'Health': 'heart', 'Transport': 'fuel'
};

function lotusSVG(w = 90) {
  return `<svg width="${w}" height="${w}" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4">
    <path d="M50 62 C40 50 40 30 50 18 C60 30 60 50 50 62Z"/>
    <path d="M50 62 C34 55 22 40 20 26 C36 26 48 40 50 62Z"/>
    <path d="M50 62 C66 55 78 40 80 26 C64 26 52 40 50 62Z"/>
    <path d="M50 64 C30 60 15 66 10 76 C25 82 40 78 50 64Z"/>
    <path d="M50 64 C70 60 85 66 90 76 C75 82 60 78 50 64Z"/>
    <path d="M28 82c8-4 16-4 22 2M72 82c-8-4-16-4-22 2" />
    <path d="M50 64v18" />
    <ellipse cx="50" cy="88" rx="26" ry="4"/>
  </svg>`;
}

function fabIcon() {
  return `<div class="fab-icon"><span class="dollar">$</span><span class="plus-badge">+</span></div>`;
}

/* ================= CURRENCY ================= */
const CURRENCIES = ['AUD', 'USD', 'NZD', 'GBP', 'EUR'];
const CURRENCY_SYMBOL = { AUD: '$', USD: '$', NZD: '$', GBP: '£', EUR: '€' };
function cur() { return CURRENCY_SYMBOL[state.currency] || '$'; }

/* ================= STATE ================= */
const EXPENSE_CATS_PRIMARY = ['Shopping', 'Groceries', 'Eating Out', 'Health', 'Transport'];
const EXPENSE_CATS_MORE = ['Gifts', 'Misc'];
const INCOME_CATS = ['Salary', 'Freelance', 'Gift', 'Refund', 'Reimburse', 'Other'];

function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}

let state = {
  screen: 'splash',
  budgetTab: 'budget',
  userName: 'Cindy',
  currency: 'AUD',
  notificationsOn: true,
  balanceHidden: false,
  period: 'thisMonth', // thisMonth | lastMonth | allTime
  startingBalance: 12000,
  txns: [
    { id: 1, desc: 'Salary', amount: 3200, type: 'income', cat: 'Salary', date: daysAgo(5) },
    { id: 2, desc: 'Freelance web project', amount: 303, type: 'income', cat: 'Freelance', date: daysAgo(9) },
    { id: 3, desc: 'Zara', amount: 200, type: 'expense', cat: 'Shopping', date: daysAgo(4) },
    { id: 4, desc: 'Uniqlo', amount: 100, type: 'expense', cat: 'Shopping', date: daysAgo(10) },
    { id: 5, desc: 'Dinner w/ friends', amount: 74.55, type: 'expense', cat: 'Eating Out', date: daysAgo(3) },
    { id: 6, desc: 'Cafe', amount: 50, type: 'expense', cat: 'Eating Out', date: daysAgo(8) },
    { id: 7, desc: 'Petrol', amount: 59.34, type: 'expense', cat: 'Transport', date: daysAgo(6) },
    { id: 8, desc: 'Woolworths', amount: 100, type: 'expense', cat: 'Groceries', date: daysAgo(2) },
    { id: 9, desc: "Birthday gift for Hua", amount: 100, type: 'expense', cat: 'Gifts', date: daysAgo(12) },
    { id: 10, desc: 'Concert tickets', amount: 120, type: 'expense', cat: 'Misc', date: daysAgo(40) }
  ],
  budgets: { 
    'Shopping': 150, 
    'Groceries': 300, 
    'Eating Out': 100, 
    'Health': 80,
    'Transport': 200,
    'Gifts': 400, 
    'Misc': 150
  },
  goals: [
    { id: 1, name: 'Sydney + GC Trip', goal: 3000, saved: 3000 },
    { id: 2, name: 'iPad Pro', goal: 2399, saved: 2000 },
    { id: 3, name: "Hua's Gift", goal: 100, saved: 59.34 },
    { id: 4, name: 'House Down Deposit', goal: 30000, saved: 10000 }
  ],
  nextId: 11,
  form: { type: 'expense', desc: '', amount: '', date: daysAgo(0), cat: '', moreOpen: false, allocate: false, allocateGoalId: null, splitGoals: [] },
  showEditBudget: false,
  editBudgetData: null,
  showEditGoal: false,
  editGoalData: null,
  warningItems: [],
  showWarning: false,
  showAddGoal: false,
  showEditBudgets: false,
  showEditBalance: false,
  editBalanceInput: '0',
  showProfileEditor: false,
  userBio: 'Personal Finance Tracker',
  graphType: 'category',
  budgetSort: 'spent',
  goalSort: 'progress',
  trendPeriod: 'month',
  bankFilterCat: null,
  graphPeriod: 'thisMonth',
  bankSearchQuery: '',
  bankPeriod: 'thisMonth',
  bankFilterType: 'all',
  userAvatar: null,
  budgetMode: 'fixed',
  budgetsPercentage: {},
  subscriptions: [
    { id: 1, name: 'Netflix', amount: 22.99, cycle: 'monthly', cat: 'Entertainment', color: '#E50914' },
    { id: 2, name: 'Spotify', amount: 11.99, cycle: 'monthly', cat: 'Entertainment', color: '#1DB954' },
    { id: 3, name: 'iCloud', amount: 4.49, cycle: 'monthly', cat: 'Storage', color: '#007AFF' },
    { id: 4, name: 'ChatGPT Plus', amount: 29.99, cycle: 'monthly', cat: 'Productivity', color: '#10A37F' }
  ],
  nextSubId: 5,
  showAddSub: false,
  showEditSub: false,
  editSubData: null
};

let displayedBalance = null; // for count-up animation
let lastScreen = null; // track screen changes for page-enter animation

/* ================= DATA PERSISTENCE ================= */
function saveState() {
  try {
    localStorage.setItem('sprout_data', JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state:', e);
  }
}

function loadState() {
  try {
    const saved = localStorage.getItem('sprout_data');
    if (saved) {
      const loadedState = JSON.parse(saved);
      Object.assign(state, loadedState);
    }
  } catch (e) {
    console.error('Failed to load state:', e);
  }
}

function dmy(iso) { const [y, m, d] = iso.split('-'); return `${d}/${m}/${y}`; }

function fmt(n) {
  n = Number(n) || 0;
  const neg = n < 0; n = Math.abs(n);
  const rounded = Math.round(n * 100) / 100;
  const s = Number.isInteger(rounded) ? rounded.toLocaleString('en-AU') : rounded.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return (neg ? '-' : '') + s;
}

/* ================= DERIVED ================= */
function totals() {
  let income = 0, expense = 0;
  state.txns.forEach(t => t.type === 'income' ? income += t.amount : expense += t.amount);
  return { income, expense, net: income - expense, balance: state.startingBalance + income - expense };
}

function spentByCat(cat) {
  return state.txns.filter(t => t.type === 'expense' && t.cat === cat).reduce((s, t) => s + t.amount, 0);
}

function txnsForPeriod() {
  if (state.period === 'allTime') return [...state.txns];
  const ref = new Date();
  if (state.period === 'lastMonth') ref.setMonth(ref.getMonth() - 1);
  const key = ref.toISOString().slice(0, 7);
  return state.txns.filter(t => t.date.slice(0, 7) === key);
}

function periodTotals() {
  const list = txnsForPeriod();
  let income = 0, expense = 0;
  list.forEach(t => t.type === 'income' ? income += t.amount : expense += t.amount);
  return { income, expense, net: income - expense, list };
}

function getPeriodTotals(period) {
  // Get totals for a specific period without changing state
  let filteredTxns = state.txns;
  
  if (period === 'thisMonth') {
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0, 10);
    filteredTxns = state.txns.filter(t => t.date >= startDate);
  } else if (period === 'lastMonth') {
    const now = new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1);
    const startDate = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1).toISOString().slice(0, 10);
    const endDate = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0).toISOString().slice(0, 10);
    filteredTxns = state.txns.filter(t => t.date >= startDate && t.date <= endDate);
  } else if (period === 'year') {
    const now = new Date();
    const startDate = new Date(now.getFullYear(), 0, 1).toISOString().slice(0, 10);
    filteredTxns = state.txns.filter(t => t.date >= startDate);
  }
  
  let income = 0, expense = 0;
  filteredTxns.forEach(t => t.type === 'income' ? income += t.amount : expense += t.amount);
  return { income, expense, net: income - expense };
}

function periodLabel() {
  return { thisMonth: 'This Month', lastMonth: 'Last Month', year: 'This Year', allTime: 'All Time' }[state.period];
}

function sortedList(list) { return [...list].sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id); }

/* ================= RENDER ROOT ================= */
function render() {
  const c = document.getElementById('screen-content');
  const phone = document.getElementById('phone');
  const navWrap = document.getElementById('bottom-nav-wrap');

  if (state.screen === 'splash') {
    c.innerHTML = renderSplash();
    navWrap.innerHTML = '';
    return;
  }
  navWrap.innerHTML = renderNav();

  let html = '';
  if (state.screen === 'home') html = renderHome();
  else if (state.screen === 'bank') html = renderBank();
  else if (state.screen === 'budget') html = renderBudget();
  else if (state.screen === 'account') html = renderAccount();
  else if (state.screen === 'addTxn') html = renderAddTxn();
  else if (state.screen === 'subscriptions') html = renderSubscriptions();

  // Only add page-enter animation when screen changes
  if (state.screen !== lastScreen) {
    html = `<div class="page-enter">${html}</div>`;
    lastScreen = state.screen;
  }

  c.innerHTML = html;

  // Render modals to phone container (not scrollable area)
  let modalHtml = '';
  if (state.showWarning) modalHtml += renderWarningModal();
  if (state.showEditBudget) modalHtml += renderEditBudgetModal();
  if (state.showEditGoal) modalHtml += renderEditGoalModal();
  if (state.showAddGoal) modalHtml += renderAddGoalModal();
  if (state.showEditBudgets) modalHtml += renderEditBudgetsModal();
  if (state.showEditBalance) modalHtml += renderStartingBalanceModal();
  if (state.showProfileEditor) modalHtml += renderProfileEditorModal();
  if (state.showAddSub) modalHtml += renderAddSubModal();
  if (state.showEditSub) modalHtml += renderEditSubModal();

  // Get or create modal container
  let modalContainer = phone.querySelector('#modal-container');
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    phone.appendChild(modalContainer);
  }
  modalContainer.innerHTML = modalHtml;

  // Lock scroll when modal is open
  const hasModal = state.showWarning || state.showEditBudget || state.showEditGoal || 
                   state.showAddGoal || state.showEditBudgets || state.showEditBalance || 
                   state.showProfileEditor || state.showAddSub || state.showEditSub;
  
  c.style.overflow = hasModal ? 'hidden' : 'scroll';

  // Always update progress bars
  animateBars();

  // Track balance for animations
  if (state.screen !== lastScreen) {
    c.scrollTop = 0;
    if (state.screen === 'home' || state.screen === 'bank') {
      displayedBalance = null; // Reset animation for new page
      animateBalances();
    }
    lastScreen = state.screen;
  }
  
  // Save state to localStorage
  saveState();
}

function animateBars() {
  requestAnimationFrame(() => {
    document.querySelectorAll('.progress-fill[data-target]').forEach(el => {
      el.style.width = el.dataset.target;
    });
  });
}

function animateBalances() {
  const t = totals();
  ['home-balance', 'bank-balance'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (state.balanceHidden) { el.textContent = '•••••'; displayedBalance = t.balance; return; }
    animateNumberEl(el, t.balance);
  });
}

function animateNumberEl(el, target) {
  const start = displayedBalance === null ? target : displayedBalance;
  const t0 = performance.now();
  const duration = 700;
  function step(now) {
    const p = Math.min(1, (now - t0) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = start + (target - start) * eased;
    el.textContent = cur() + ' ' + fmt(val);
    if (p < 1) requestAnimationFrame(step);
    else displayedBalance = target;
  }
  requestAnimationFrame(step);
}

/* ---------- Splash ---------- */
function renderSplash() {
  const lotusSize = Math.min(140, window.innerHeight * 0.2);
  return `
  <div class="splash" onclick="goTo('home')">
    <div>
      <div class="brand">Sprout</div>
      <div class="brand-cn">发芽</div>
    </div>
    <div class="lotus-wrap">${lotusSVG(lotusSize)}</div>
    <div class="hint">Tap to begin</div>
  </div>`;
}

/* ---------- Bottom Nav ---------- */
function renderNav() {
  const tab = state.screen;
  const item = (key, label, icon) => `
    <button class="nav-btn ${tab === key ? 'active' : ''}" onclick="goTo('${key}')">
      ${ICON[icon]}<span>${label}</span>
    </button>`;
  return `
  <div id="bottom-nav">
    ${item('home', 'Home', 'home')}
    ${item('bank', 'Bank', 'bank')}
    <div class="fab" onclick="openAddTxn()">${fabIcon()}</div>
    ${item('budget', 'Budget', 'budget')}
    ${item('account', 'Account', 'account')}
  </div>`;
}

/* ---------- Home ---------- */
function renderHome() {
  const t = totals();
  const pt = periodTotals();
  const mostSpent = getMostSpentCategory();
  return `
  <div class="header-card">
    <div>
      <div class="brand">Sprout</div>
      <div class="brand-cn">发芽</div>
    </div>
  </div>

  <div class="summary-card">
    <div class="summary-top">
      <span style="font-weight:600;">Overview</span>
      ${renderPeriodDropdown()}
    </div>
    <div class="summary-body">
      ${donutSVG(pt.income, pt.expense)}
      <div class="summary-stats">
        <div class="label">Income</div>
        <div class="val">${cur()} ${fmt(pt.income)}</div>
        <div class="label">Expense</div>
        <div class="val">${cur()} ${fmt(pt.expense)}</div>
        <div class="label">Top Category</div>
        <div class="val">${mostSpent ? mostSpent.cat + ' · ' + cur() + fmt(mostSpent.spent) : '—'}</div>
        <div class="net-pill">${pt.net >= 0 ? '+' : '-'}${cur()}${fmt(Math.abs(pt.net))}</div>
      </div>
    </div>
  </div>

  <div class="lotus-divider">${lotusSVG(70)}</div>

  <div class="card">
    <button class="eye-row" onclick="toggleBalanceVisibility()">${state.balanceHidden ? ICON.eyeOff : ICON.eye} ${state.userName}'s Bank</button>
    <div class="big-number" id="home-balance">${state.balanceHidden ? '•••••' : cur() + ' ' + fmt(t.balance)}</div>
  </div>

  <div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
      <span style="font-size:18px;font-weight:600;">Analysis</span>
      <div style="position:relative;display:inline-block;">
        <button class="graph-btn" style="padding:6px 12px;font-size:12px;display:inline-flex;align-items:center;gap:6px;" onclick="toggleGraphPeriodMenu()">${state.graphPeriod === 'thisMonth' ? 'This Month' : state.graphPeriod === 'lastMonth' ? 'Last Month' : state.graphPeriod === 'year' ? 'This Year' : 'All Time'} ${ICON.chevron}</button>
        <div class="graph-period-menu" id="graph-period-menu" style="display:none;">
          <button onclick="setGraphPeriod('thisMonth')">This Month</button>
          <button onclick="setGraphPeriod('lastMonth')">Last Month</button>
          <button onclick="setGraphPeriod('year')">This Year</button>
          <button onclick="setGraphPeriod('allTime')">All Time</button>
        </div>
      </div>
    </div>
    <div style="display:flex;gap:4px;margin-bottom:14px;">
      <button class="graph-btn ${state.graphType === 'category' ? 'active' : ''}" onclick="setGraphType('category')" style="font-size:11px;">Category</button>
      <button class="graph-btn ${state.graphType === 'trend' ? 'active' : ''}" onclick="setGraphType('trend')" style="font-size:11px;">Trend</button>
      <button class="graph-btn ${state.graphType === 'income' ? 'active' : ''}" onclick="setGraphType('income')" style="font-size:11px;">Income vs Expense</button>
    </div>
    ${renderCombinedAnalysis()}
  </div>
  `;
}

function toggleGraphPeriodMenu() {
  const menu = document.getElementById('graph-period-menu');
  if (menu) menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function renderCombinedAnalysis() {
  const filteredTxns = getGraphPeriodTransactions();
  
  // Get top section based on graph type
  let topSection = '';
  if (state.graphType === 'category') {
    const spentByCategory = {};
    filteredTxns.filter(t => t.type === 'expense').forEach(t => {
      spentByCategory[t.cat] = (spentByCategory[t.cat] || 0) + t.amount;
    });
    
    const sorted = Object.entries(spentByCategory).sort((a, b) => b[1] - a[1]);
    const colors = ['#7fb98a', '#f5a962', '#e2a99a', '#a8d5ba', '#ffc9a3', '#d4a5a5', '#b8c5d6'];
    
    topSection = '<div class="graph-bars">';
    sorted.slice(0, 7).forEach((entry, i) => {
      const [cat, spent] = entry;
      const maxSpent = Math.max(...sorted.map(e => e[1]));
      const pct = (spent / maxSpent) * 100;
      topSection += `
      <div class="graph-bar-item">
        <div class="graph-bar-label" style="font-size:14px;">${cat}</div>
        <div class="graph-bar-track">
          <div class="graph-bar-fill" style="width:${pct}%;background:${colors[i % colors.length]};"></div>
        </div>
        <div class="graph-bar-val" style="font-size:14px;">${cur()}${fmt(spent)}</div>
      </div>`;
    });
    topSection += '</div>';
  } else if (state.graphType === 'trend') {
    topSection = renderTrendGraphForPeriod(filteredTxns);
  } else if (state.graphType === 'income') {
    const income = filteredTxns.filter(t => t.type === 'income').reduce((a, t) => a + t.amount, 0);
    const expense = filteredTxns.filter(t => t.type === 'expense').reduce((a, t) => a + t.amount, 0);
    topSection = renderIncomeExpenseGraph(income, expense);
  }
  
  // Get monthly overview
  const months = {};
  filteredTxns.forEach(tx => {
    const date = new Date(tx.date);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (!months[monthKey]) {
      months[monthKey] = { income: 0, expense: 0, net: 0 };
    }
    if (tx.type === 'income') {
      months[monthKey].income += tx.amount;
    } else {
      months[monthKey].expense += tx.amount;
    }
    months[monthKey].net = months[monthKey].income - months[monthKey].expense;
  });
  
  const sortedMonths = Object.entries(months).sort().reverse().slice(0, 6);
  
  let monthlyHtml = '<div style="margin-top:20px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.1);"><div style="font-weight:600;margin-bottom:12px;font-size:15px;">Monthly Breakdown</div><div class="monthly-overview">';
  
  if (sortedMonths.length === 0) {
    monthlyHtml += `<div class="dim" style="text-align:center;padding:12px;">No transactions in this period</div>`;
  } else {
    sortedMonths.forEach(entry => {
      const [monthKey, data] = entry;
      const [year, month] = monthKey.split('-');
      const monthName = new Date(year, parseInt(month) - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      
      monthlyHtml += `
      <div class="month-item">
        <div class="month-label" style="font-size:14px;">${monthName}</div>
        <div class="month-stats">
          <div class="month-stat">
            <span class="month-label-small" style="font-size:11px;">Income</span>
            <span class="month-val income" style="font-size:13px;">${cur()}${fmt(data.income)}</span>
          </div>
          <div class="month-stat">
            <span class="month-label-small" style="font-size:11px;">Expense</span>
            <span class="month-val expense" style="font-size:13px;">${cur()}${fmt(data.expense)}</span>
          </div>
          <div class="month-stat">
            <span class="month-label-small" style="font-size:11px;">Net</span>
            <span class="month-val ${data.net >= 0 ? 'income' : 'expense'}" style="font-size:13px;">${data.net >= 0 ? '+' : '-'}${cur()}${fmt(Math.abs(data.net))}</span>
          </div>
        </div>
      </div>`;
    });
  }
  monthlyHtml += '</div></div>';
  
  return topSection + monthlyHtml;
}

function renderTrendGraphForPeriod(filteredTxns) {
  const dailyExpense = {};
  const dateRange = [];
  
  for (let i = 29; i >= 0; i--) {
    const date = daysAgo(i);
    dateRange.push(date);
    dailyExpense[date] = 0;
  }
  
  filteredTxns.filter(t => t.type === 'expense').forEach(t => {
    if (dailyExpense.hasOwnProperty(t.date)) {
      dailyExpense[t.date] += Number(t.amount) || 0;
    }
  });
  
  const values = Object.values(dailyExpense);
  const maxVal = Math.max(...values, 100) || 100;
  
  let html = '<div class="graph-trend">';
  const step = Math.max(1, Math.floor(dateRange.length / 14));
  
  dateRange.forEach((date, i) => {
    if (i % step === 0 || i === dateRange.length - 1) {
      const val = dailyExpense[date] || 0;
      const pct = Math.max(5, (val / maxVal) * 100);
      const dayNum = date.split('-')[2];
      html += `<div class="trend-bar-item"><div class="trend-bar" style="height:${pct}%;background:rgba(127, 185, 138, 0.6);"></div><div class="trend-date">${dayNum}</div></div>`;
    }
  });
  html += '</div>';
  return html;
}

function renderMonthlyOverview() {
  const months = {};
  
  // Group transactions by month
  state.txns.forEach(tx => {
    const date = new Date(tx.date);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (!months[monthKey]) {
      months[monthKey] = { income: 0, expense: 0, net: 0 };
    }
    if (tx.type === 'income') {
      months[monthKey].income += tx.amount;
    } else {
      months[monthKey].expense += tx.amount;
    }
    months[monthKey].net = months[monthKey].income - months[monthKey].expense;
  });
  
  // Sort by month descending (newest first)
  const sortedMonths = Object.entries(months).sort().reverse().slice(0, 6);
  
  if (sortedMonths.length === 0) {
    return `<div class="dim" style="text-align:center;padding:12px;">No transactions yet</div>`;
  }
  
  let html = '<div class="monthly-overview">';
  sortedMonths.forEach(entry => {
    const [monthKey, data] = entry;
    const [year, month] = monthKey.split('-');
    const monthName = new Date(year, parseInt(month) - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    
    html += `
    <div class="month-item">
      <div class="month-label">${monthName}</div>
      <div class="month-stats">
        <div class="month-stat">
          <span class="month-label-small">Income</span>
          <span class="month-val income">${cur()}${fmt(data.income)}</span>
        </div>
        <div class="month-stat">
          <span class="month-label-small">Expense</span>
          <span class="month-val expense">${cur()}${fmt(data.expense)}</span>
        </div>
        <div class="month-stat">
          <span class="month-label-small">Net</span>
          <span class="month-val ${data.net >= 0 ? 'income' : 'expense'}">${data.net >= 0 ? '+' : '-'}${cur()}${fmt(Math.abs(data.net))}</span>
        </div>
      </div>
    </div>`;
  });
  html += '</div>';
  
  return html;
}

function getMostSpentCategory() {
  let maxSpent = 0;
  let mostSpentCat = null;
  Object.keys(state.budgets).forEach(cat => {
    const spent = spentByCat(cat);
    if (spent > maxSpent) {
      maxSpent = spent;
      mostSpentCat = cat;
    }
  });
  return mostSpentCat ? { cat: mostSpentCat, spent: maxSpent } : null;
}

function donutSVG(income, expense) {
  const total = income + expense;
  const incFrac = total > 0 ? income / total : 0.5;
  const r = 34, c = 2 * Math.PI * r;
  const incLen = c * incFrac;
  return `
  <svg class="donut" width="88" height="88" viewBox="0 0 88 88">
    <circle cx="44" cy="44" r="${r}" fill="none" stroke="#4a3f56" stroke-width="12"/>
    <circle cx="44" cy="44" r="${r}" fill="none" stroke="#7fb98a" stroke-width="12"
      stroke-dasharray="${incLen} ${c - incLen}" stroke-dashoffset="${c * 0.25}" stroke-linecap="round"/>
  </svg>`;
}

function setGraphType(type) {
  state.graphType = type;
  render();
}

function renderGraph() {
  const pt = periodTotals();
  
  if (state.graphType === 'category') {
    return renderCategoryGraph();
  } else if (state.graphType === 'trend') {
    return renderTrendGraph();
  } else if (state.graphType === 'income') {
    return renderIncomeExpenseGraph(pt.income, pt.expense);
  }
}

function renderCategoryGraph() {
  const spentByCategory = {};
  Object.keys(state.budgets).forEach(cat => {
    const spent = spentByCat(cat);
    if (spent > 0) spentByCategory[cat] = spent;
  });
  
  const sorted = Object.entries(spentByCategory).sort((a, b) => b[1] - a[1]);
  const colors = ['#7fb98a', '#f5a962', '#e2a99a', '#a8d5ba', '#ffc9a3', '#d4a5a5', '#b8c5d6'];
  
  let html = '<div class="graph-bars">';
  sorted.slice(0, 7).forEach((entry, i) => {
    const [cat, spent] = entry;
    const maxSpent = Math.max(...sorted.map(e => e[1]));
    const pct = (spent / maxSpent) * 100;
    html += `
    <div class="graph-bar-item">
      <div class="graph-bar-label">${cat}</div>
      <div class="graph-bar-track">
        <div class="graph-bar-fill" style="width:${pct}%;background:${colors[i % colors.length]};"></div>
      </div>
      <div class="graph-bar-val">${cur()}${fmt(spent)}</div>
    </div>`;
  });
  html += '</div>';
  return html;
}

function renderTrendGraph() {
  const periods = {
    'week': 7,
    'month': 30,
    'sixMonths': 180,
    'year': 365,
    'threeYears': 1095
  };
  
  const days = periods[state.trendPeriod] || 30;
  const dailyExpense = {};
  
  // Create array of all dates in range
  const dateRange = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = daysAgo(i);
    dateRange.push(date);
    dailyExpense[date] = 0;
  }
  
  // Sum expenses for each day
  state.txns.filter(t => t.type === 'expense').forEach(t => {
    if (dailyExpense.hasOwnProperty(t.date)) {
      dailyExpense[t.date] += t.amount;
    }
  });
  
  const maxVal = Math.max(...Object.values(dailyExpense), 100);
  
  let html = `
  <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;">
    <button class="graph-btn ${state.trendPeriod === 'week' ? 'active' : ''}" onclick="setTrendPeriod('week')">Week</button>
    <button class="graph-btn ${state.trendPeriod === 'month' ? 'active' : ''}" onclick="setTrendPeriod('month')">Month</button>
    <button class="graph-btn ${state.trendPeriod === 'sixMonths' ? 'active' : ''}" onclick="setTrendPeriod('sixMonths')">6M</button>
    <button class="graph-btn ${state.trendPeriod === 'year' ? 'active' : ''}" onclick="setTrendPeriod('year')">Year</button>
    <button class="graph-btn ${state.trendPeriod === 'threeYears' ? 'active' : ''}" onclick="setTrendPeriod('threeYears')">3Y</button>
  </div>
  <div class="graph-trend">`;
  
  // Show every Nth day to avoid overcrowding
  const step = Math.max(1, Math.floor(dateRange.length / 14));
  
  dateRange.forEach((date, i) => {
    if (i % step === 0 || i === dateRange.length - 1) {
      const val = dailyExpense[date];
      const pct = Math.max(5, (val / maxVal) * 100);
      const dayNum = date.split('-')[2];
      html += `
      <div class="trend-bar-item">
        <div class="trend-bar" style="height:${pct}%;background:rgba(127, 185, 138, 0.6);"></div>
        <div class="trend-date">${dayNum}</div>
      </div>`;
    }
  });
  html += '</div>';
  return html;
}

function renderIncomeExpenseGraph(income, expense) {
  const maxVal = Math.max(income, expense, 1);
  const incomePct = (income / maxVal) * 100;
  const expensePct = (expense / maxVal) * 100;
  
  return `
  <div class="graph-comparison">
    <div class="comp-item">
      <div class="comp-label">Income</div>
      <div class="comp-bar-track">
        <div class="comp-bar-fill" style="width:${incomePct}%;background:rgba(127, 185, 138, 0.7);"></div>
      </div>
      <div class="comp-val">${cur()}${fmt(income)}</div>
    </div>
    <div class="comp-item">
      <div class="comp-label">Expense</div>
      <div class="comp-bar-track">
        <div class="comp-bar-fill" style="width:${expensePct}%;background:rgba(201, 107, 92, 0.7);"></div>
      </div>
      <div class="comp-val">${cur()}${fmt(expense)}</div>
    </div>
  </div>`;
}

function setTrendPeriod(period) {
  state.trendPeriod = period;
  render();
}

function setGraphPeriod(period) {
  state.graphPeriod = period;
  render();
}

function getGraphPeriodTransactions() {
  const now = new Date();
  const today = daysAgo(0);
  
  if (state.graphPeriod === 'thisMonth') {
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startDate = startOfMonth.toISOString().split('T')[0];
    return state.txns.filter(t => t.date >= startDate);
  } else if (state.graphPeriod === 'lastMonth') {
    const startOfMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    const startDate = startOfMonth.toISOString().split('T')[0];
    const endDate = endOfMonth.toISOString().split('T')[0];
    return state.txns.filter(t => t.date >= startDate && t.date <= endDate);
  } else if (state.graphPeriod === 'year') {
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const startDate = startOfYear.toISOString().split('T')[0];
    return state.txns.filter(t => t.date >= startDate);
  } else if (state.graphPeriod === 'allTime') {
    return state.txns;
  }
  return state.txns;
}

function getBankPeriodTransactions() {
  const now = new Date();
  
  if (state.bankPeriod === 'thisMonth') {
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startDate = startOfMonth.toISOString().split('T')[0];
    return state.txns.filter(t => t.date >= startDate);
  } else if (state.bankPeriod === 'lastMonth') {
    const startOfMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    const startDate = startOfMonth.toISOString().split('T')[0];
    const endDate = endOfMonth.toISOString().split('T')[0];
    return state.txns.filter(t => t.date >= startDate && t.date <= endDate);
  } else if (state.bankPeriod === 'year') {
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const startDate = startOfYear.toISOString().split('T')[0];
    return state.txns.filter(t => t.date >= startDate);
  } else if (state.bankPeriod === 'allTime') {
    return state.txns;
  }
  return state.txns;
}

/* ---------- Bank ---------- */
function renderBank() {
  const t = totals();
  const bankTxns = getBankPeriodTransactions();
  
  // Filter transactions by category if selected
  let rows = sortedList(bankTxns);
  if (state.bankFilterCat) {
    rows = rows.filter(tx => tx.cat === state.bankFilterCat);
  }
  
  // Filter by transaction type (income/expense)
  if (state.bankFilterType === 'income') {
    rows = rows.filter(tx => tx.type === 'income');
  } else if (state.bankFilterType === 'expense') {
    rows = rows.filter(tx => tx.type === 'expense');
  }
  
  // Filter by search query
  if (state.bankSearchQuery) {
    rows = rows.filter(tx => (tx.desc || tx.cat).toLowerCase().includes(state.bankSearchQuery.toLowerCase()));
  }
  
  let listHtml = '';
  if (rows.length === 0) {
    listHtml = `<div class="empty-note">No transactions in this period — tap + to add one</div>`;
  } else {
    let lastDate = null;
    rows.forEach((tx, i) => {
      if (tx.date !== lastDate) {
        listHtml += `<div class="txn-date-row">${dmy(tx.date)}</div>`;
        lastDate = tx.date;
      }
      const icon = ICON[CAT_ICON[tx.cat] || 'misc'];
      listHtml += `
      <button class="txn-row" style="animation-delay:${Math.min(i * 0.03, .4)}s" onclick="deleteTxnConfirm(${tx.id})">
        <div class="txn-left">
          <div class="txn-icon">${icon}</div>
          <div>
            <div class="txn-desc">${escapeHtml(tx.desc || tx.cat)}</div>
            <div class="txn-cat">${tx.cat}</div>
          </div>
        </div>
        <div class="txn-amt ${tx.type}">${tx.type === 'income' ? '+' : '-'}${cur()}${fmt(tx.amount)}</div>
      </button>`;
    });
  }

  // Get all expense categories for this period
  const expensesByCategory = {};
  bankTxns.filter(t => t.type === 'expense').forEach(t => {
    expensesByCategory[t.cat] = (expensesByCategory[t.cat] || 0) + t.amount;
  });

  return `
  <div class="card">
    <button class="eye-row" onclick="toggleBalanceVisibility()">${state.balanceHidden ? ICON.eyeOff : ICON.eye} ${state.userName}'s Bank</button>
    <div class="big-number" id="bank-balance">${state.balanceHidden ? '•••••' : cur() + ' ' + fmt(t.balance)}</div>
  </div>

  <div class="card">
    <div style="font-weight:600;margin-bottom:12px;">Spending by Category</div>
    ${categoryPieChart(expensesByCategory)}
  </div>

  <div style="margin-bottom:12px;">
    <input type="text" id="txn-search" placeholder="Search transactions..." value="${state.bankSearchQuery}" onchange="searchTransactions(this.value)" style="width:100%;padding:8px 12px;border-radius:8px;border:1px solid rgba(255,255,255,0.15);background:rgba(74,107,88,0.2);color:var(--cream);font-size:12px;" />
  </div>

  <div class="txn-header">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="font-weight:600;">Transactions</span>
      <div class="category-filter">
        <button class="filter-btn" onclick="toggleBankTypeFilter()">Filter ${ICON.chevron}</button>
        <div class="filter-menu" id="bank-type-menu" style="display:none;">
          <button onclick="setBankFilterType('all')" class="${state.bankFilterType === 'all' ? 'active' : ''}">All</button>
          <button onclick="setBankFilterType('income')" class="${state.bankFilterType === 'income' ? 'active' : ''}">Income</button>
          <button onclick="setBankFilterType('expense')" class="${state.bankFilterType === 'expense' ? 'active' : ''}">Expense</button>
        </div>
      </div>
    </div>
    <div style="display:flex;gap:6px;align-items:center;">
      <div class="category-filter">
        <button class="filter-btn" onclick="toggleCategoryFilter()">${state.bankFilterCat ? state.bankFilterCat : 'Category'} ${ICON.chevron}</button>
        <div class="filter-menu" id="cat-filter-menu" style="display:none;">
          <button onclick="setCategoryFilter(null)">All</button>
          ${Object.keys(expensesByCategory).map(cat => `<button onclick="setCategoryFilter('${cat}')">${cat}</button>`).join('')}
        </div>
      </div>
      <div class="category-filter">
        <button class="filter-btn" onclick="toggleBankPeriodFilter()">${state.bankPeriod === 'thisMonth' ? 'This Month' : state.bankPeriod === 'lastMonth' ? 'Last Month' : state.bankPeriod === 'year' ? 'This Year' : 'All Time'} ${ICON.chevron}</button>
        <div class="filter-menu" id="bank-period-menu" style="display:none;">
          <button onclick="setBankPeriod('thisMonth')">This Month</button>
          <button onclick="setBankPeriod('lastMonth')">Last Month</button>
          <button onclick="setBankPeriod('year')">This Year</button>
          <button onclick="setBankPeriod('allTime')">All Time</button>
        </div>
      </div>
    </div>
  </div>
  <div class="txn-list">${listHtml}</div>
  <div style="margin-top:24px;text-align:center;" class="dim">Tap a transaction to delete it</div>
  `;
}

function categoryPieChart(expensesByCategory) {
  const total = Object.values(expensesByCategory).reduce((a, b) => a + b, 0);
  if (total === 0) return `<div class="dim" style="text-align:center;padding:20px;">No expenses this period</div>`;
  
  const colors = ['#7fb98a', '#f5a962', '#e2a99a', '#a8d5ba', '#ffc9a3', '#d4a5a5', '#b8c5d6'];
  const entries = Object.entries(expensesByCategory).sort((a, b) => b[1] - a[1]);
  
  let svg = `<svg class="pie-chart-horizontal" width="160" height="160" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">`;
  let currentAngle = -90;
  
  entries.forEach((entry, i) => {
    const [cat, amount] = entry;
    const sliceAngle = (amount / total) * 360;
    const startAngle = currentAngle * Math.PI / 180;
    const endAngle = (currentAngle + sliceAngle) * Math.PI / 180;
    
    const x1 = 100 + 60 * Math.cos(startAngle);
    const y1 = 100 + 60 * Math.sin(startAngle);
    const x2 = 100 + 60 * Math.cos(endAngle);
    const y2 = 100 + 60 * Math.sin(endAngle);
    const largeArc = sliceAngle > 180 ? 1 : 0;
    
    const pathData = `M 100 100 L ${x1} ${y1} A 60 60 0 ${largeArc} 1 ${x2} ${y2} Z`;
    svg += `<path d="${pathData}" fill="${colors[i % colors.length]}" stroke="#243b30" stroke-width="2"/>`;
    
    currentAngle += sliceAngle;
  });
  
  svg += `</svg>`;
  
  let legend = '<div class="pie-legend-horizontal">';
  entries.forEach((entry, i) => {
    const [cat, amount] = entry;
    const pct = Math.round((amount / total) * 100);
    legend += `<div class="legend-item-large"><span class="legend-color" style="background:${colors[i % colors.length]};"></span><span>${cat}: ${pct}%</span></div>`;
  });
  legend += '</div>';
  
  return `<div class="pie-chart-container">${legend}${svg}</div>`;
}

function toggleCategoryFilter() {
  const menu = document.getElementById('cat-filter-menu');
  if (menu) menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function setCategoryFilter(cat) {
  state.bankFilterCat = cat;
  const menu = document.getElementById('cat-filter-menu');
  if (menu) menu.style.display = 'none';
  render();
}

function searchTransactions(query) {
  state.bankSearchQuery = query;
  render();
}

function setBankFilterType(type) {
  state.bankFilterType = type;
  const menu = document.getElementById('bank-type-menu');
  if (menu) menu.style.display = 'none';
  render();
}

function toggleBankTypeFilter() {
  const menu = document.getElementById('bank-type-menu');
  if (menu) menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function toggleBankPeriodFilter() {
  const menu = document.getElementById('bank-period-menu');
  if (menu) menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function setBankPeriod(period) {
  state.bankPeriod = period;
  const menu = document.getElementById('bank-period-menu');
  if (menu) menu.style.display = 'none';
  render();
}

function deleteTxnConfirm(id) {
  const tx = state.txns.find(t => t.id === id);
  if (!tx) return;
  if (confirm(`Delete "${tx.desc || tx.cat}" (${cur()}${fmt(tx.amount)})?`)) {
    // If this is an income with goal splits, reverse them
    if (tx.type === 'income' && tx.splitGoals && tx.splitGoals.length > 0) {
      tx.splitGoals.forEach(s => {
        const g = state.goals.find(g => g.id === s.goalId);
        if (g) g.saved = Math.max(0, g.saved - (tx.amount * parseFloat(s.pct)) / 100);
      });
    }
    // Legacy single-goal support
    if (tx.type === 'income' && tx.allocateGoalId) {
      const g = state.goals.find(g => g.id === tx.allocateGoalId);
      if (g) g.saved = Math.max(0, g.saved - tx.amount);
    }
    state.txns = state.txns.filter(t => t.id !== id);
    render();
  }
}

function renderPeriodDropdown() {
  return `
  <div style="position:relative;display:inline-block;">
    <button class="graph-btn" style="padding:6px 12px;font-size:12px;display:inline-flex;align-items:center;gap:6px;" onclick="togglePeriodMenu()">
      ${periodLabel()} ${ICON.chevron}
    </button>
    <div class="graph-period-menu" id="period-menu" style="display:none;">
      <button onclick="setPeriod('thisMonth')" class="${state.period === 'thisMonth' ? 'active' : ''}">This Month</button>
      <button onclick="setPeriod('lastMonth')" class="${state.period === 'lastMonth' ? 'active' : ''}">Last Month</button>
      <button onclick="setPeriod('year')" class="${state.period === 'year' ? 'active' : ''}">This Year</button>
      <button onclick="setPeriod('allTime')" class="${state.period === 'allTime' ? 'active' : ''}">All Time</button>
    </div>
  </div>`;
}

function togglePeriodMenu() {
  const menu = document.getElementById('period-menu');
  if (menu) {
    const isOpen = menu.style.display === 'block';
    menu.style.display = isOpen ? 'none' : 'block';
  }
}

function setPeriod(period) {
  state.period = period;
  const menu = document.getElementById('period-menu');
  if (menu) menu.style.display = 'none';
  render();
}

function toggleBalanceVisibility() {
  state.balanceHidden = !state.balanceHidden;
  render();
}

/* ---------- Budget & Goals ---------- */
function renderBudget() {
  const isBudget = state.budgetTab === 'budget';
  const monthlyIncome = getPeriodTotals('thisMonth').income; // Get this month's income for percentage calculation
  let cardsHtml = '';

  if (isBudget) {
    const sortedCats = Object.keys(state.budgets).sort((a, b) => {
      if (state.budgetSort === 'spent') {
        return spentByCat(b) - spentByCat(a); // High to low
      } else if (state.budgetSort === 'name') {
        return a.localeCompare(b);
      } else {
        return state.budgets[b] - state.budgets[a]; // High to low
      }
    });
    
    cardsHtml = `<div class="grid2">` + sortedCats.map(cat => {
      let budget;
      if (state.budgetMode === 'percentage') {
        const pct = state.budgetsPercentage[cat] || 0;
        budget = (monthlyIncome * pct) / 100;
      } else {
        budget = state.budgets[cat];
      }
      
      const spent = spentByCat(cat);
      const remaining = budget - spent;
      const pct = budget > 0 ? Math.round((spent / budget) * 100) : 0;
      const barColor = pct >= 100 ? 'var(--red-bar)' : pct >= 80 ? 'var(--amber-bar)' : 'var(--green-bar)';
      
      return `
      <div class="b-card" onclick="openEditBudget('${cat}')">
        <div class="b-name">${cat}</div>
        <button class="b-card-delete" onclick="deleteBudget('${cat}'); event.stopPropagation();">${ICON.trash}</button>
        <div class="b-stats-row"><span>Budget:</span><span>Spent</span></div>
        <div class="b-stats-row" style="margin-top:-2px;">
          <span class="b-stats-val">${cur()}${fmt(budget)}</span>
          <span class="b-stats-val">${cur()}${fmt(spent)}</span>
        </div>
        <div class="b-remaining-label">Remaining:</div>
        <div class="b-remaining-val ${remaining < 0 ? 'over' : ''}">${cur()}${fmt(remaining)}</div>
        <div class="progress-track"><div class="progress-fill" data-target="${Math.min(pct, 100)}%" style="background:${barColor};"></div></div>
        <div class="progress-pct">${pct}%</div>
      </div>`;
    }).join('') + `</div>`;
  } else {
    const sortedGoals = [...state.goals].sort((a, b) => {
      const pctA = a.goal > 0 ? (a.saved / a.goal) * 100 : 0;
      const pctB = b.goal > 0 ? (b.saved / b.goal) * 100 : 0;
      if (state.goalSort === 'progress') {
        return pctB - pctA; // High to low
      } else {
        return a.name.localeCompare(b.name);
      }
    });

    // Calculate goal vs spending money
    const t = totals();
    const totalSaved = state.goals.reduce((sum, g) => sum + g.saved, 0);
    const totalGoalTarget = state.goals.reduce((sum, g) => sum + g.goal, 0);
    const spendableMoney = t.balance - totalSaved;
    const goalsComplete = state.goals.filter(g => g.saved >= g.goal).length;
    const overallPct = totalGoalTarget > 0 ? Math.min(100, Math.round((totalSaved / totalGoalTarget) * 100)) : 0;

    const summaryCard = `
    <div class="card" style="margin-bottom:14px;">
      <div style="font-size:13px;font-weight:600;margin-bottom:12px;color:var(--cream-dim);">Overview</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
        <div style="background:rgba(127,185,138,0.15);border:1px solid rgba(127,185,138,0.25);border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:10px;color:var(--cream-dim);margin-bottom:4px;">Saved in Goals</div>
          <div style="font-size:18px;font-weight:700;color:var(--income);">${cur()}${fmt(totalSaved)}</div>
          <div style="font-size:10px;color:var(--cream-dim);margin-top:2px;">${goalsComplete}/${state.goals.length} complete</div>
        </div>
        <div style="background:rgba(201,107,92,0.15);border:1px solid rgba(201,107,92,0.25);border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:10px;color:var(--cream-dim);margin-bottom:4px;">Free to Spend</div>
          <div style="font-size:18px;font-weight:700;color:${spendableMoney < 0 ? 'var(--red-bar)' : 'var(--cream)'};">${cur()}${fmt(Math.abs(spendableMoney))}</div>
          <div style="font-size:10px;color:var(--cream-dim);margin-top:2px;">${spendableMoney < 0 ? 'over-allocated' : 'available'}</div>
        </div>
      </div>
      <div style="font-size:11px;color:var(--cream-dim);margin-bottom:6px;">Overall progress · ${overallPct}%</div>
      <div style="background:rgba(255,255,255,0.08);border-radius:6px;height:8px;overflow:hidden;">
        <div class="progress-fill" data-target="${overallPct}%" style="height:100%;background:rgba(127,185,138,0.7);border-radius:6px;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:10px;color:var(--cream-dim);">
        <span>Saved: <strong style="color:var(--cream)">${cur()}${fmt(totalSaved)}</strong></span>
        <span>Target: <strong style="color:var(--cream)">${cur()}${fmt(totalGoalTarget)}</strong></span>
      </div>
    </div>`;
    
    cardsHtml = summaryCard + `<div class="grid2">` + sortedGoals.map(g => {
      const pct = g.goal > 0 ? Math.round((g.saved / g.goal) * 100) : 0;
      const remaining = Math.max(0, g.goal - g.saved);
      return `
      <div class="b-card goal-card" onclick="openEditGoal(${g.id})">
        <div class="b-name">${escapeHtml(g.name)}</div>
        <button class="b-card-delete" onclick="deleteGoal(${g.id}); event.stopPropagation();">${ICON.trash}</button>
        <div class="b-stats-row"><span>Goal:</span><span>Saved</span></div>
        <div class="b-stats-row" style="margin-top:-2px;">
          <span class="b-stats-val">${cur()}${fmt(g.goal)}</span>
          <span class="b-stats-val">${cur()}${fmt(g.saved)}</span>
        </div>
        <div class="b-remaining-label">Remaining:</div>
        <div class="b-remaining-val">${cur()}${fmt(remaining)}</div>
        <div class="progress-track"><div class="progress-fill" data-target="${Math.min(pct, 100)}%" style="background:var(--green-bar);"></div></div>
        <div class="progress-pct">${pct}%</div>
      </div>`;
    }).join('') + `</div>`;
  }

  return `
  <div class="bg-panel ${isBudget ? 'budget-mode' : 'goal-mode'}">
    <div class="bg-panel-header">Budget &amp; Goals</div>
    <div class="toggle-row">
      <div class="toggle-group">
        <button class="toggle-btn budget ${isBudget ? 'active budget' : ''}" onclick="setBudgetTab('budget')">Budget</button>
        <button class="toggle-btn goal ${!isBudget ? 'active goal' : ''}" onclick="setBudgetTab('goal')">Goal</button>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="icon-btn" onclick="openAddBudgetOrGoal()">${ICON.plus}</button>
        <div class="sort-dropdown">
          <button class="icon-btn" id="sort-btn" onclick="toggleSortMenu()">${ICON.sliders}</button>
          <div class="sort-menu" id="sort-menu" style="display: none;">
            ${isBudget ? `
              <button onclick="sortBudgets('name')">Sort by Name</button>
              <button onclick="sortBudgets('spent')">Sort by Spent</button>
              <button onclick="sortBudgets('budget')">Sort by Budget</button>
            ` : `
              <button onclick="sortGoals('name')">Sort by Name</button>
              <button onclick="sortGoals('progress')">Sort by Progress</button>
              <button onclick="sortGoals('amount')">Sort by Amount</button>
            `}
          </div>
        </div>
      </div>
    </div>
    ${cardsHtml}
  </div>`;
}

function setBudgetTab(tab) { state.budgetTab = tab; render(); }

function openEditBudget(cat) {
  state.editBudgetData = { cat, name: cat, amount: state.budgets[cat] };
  state.showEditBudget = true;
  render();
}

function closeEditBudget() {
  state.showEditBudget = false;
  state.editBudgetData = null;
  render();
}

function saveEditBudget() {
  const nameInput = document.getElementById('edit-budget-name');
  const amountInput = document.getElementById('edit-budget-amount');
  if (!nameInput || !amountInput) return;
  
  const oldCat = state.editBudgetData.cat;
  const newName = nameInput.value.trim();
  const newAmount = parseFloat(amountInput.value);
  const isPercentage = state.budgetMode === 'percentage';
  
  if (!newName || !newAmount || newAmount < 0) {
    showToast(`Please enter a valid name and ${isPercentage ? 'percentage' : 'amount'}`, 'error', 3000);
    return;
  }
  
  if (isPercentage && newAmount > 100) {
    showToast('Percentage cannot exceed 100%', 'error', 3000);
    return;
  }
  
  const isNewBudget = !Object.keys(state.budgets).includes(oldCat);
  
  // If name changed or new budget, update accordingly
  if (isNewBudget) {
    // Adding new budget
    if (state.budgets[newName]) {
      showToast('Budget already exists', 'error', 3000);
      return;
    }
    if (isPercentage) {
      state.budgetsPercentage[newName] = newAmount;
      state.budgets[newName] = 0;
    } else {
      state.budgets[newName] = newAmount;
    }
    showToast(`Budget "${newName}" created!`, 'success', 2500);
  } else {
    if (newName !== oldCat) {
      // Name changed - check for conflicts
      if (state.budgets[newName]) {
        showToast('Budget name already exists', 'error', 3000);
        return;
      }
      // Add under new name
      state.budgets[newName] = isPercentage ? 0 : newAmount;
      if (isPercentage) {
        state.budgetsPercentage[newName] = newAmount;
        delete state.budgetsPercentage[oldCat];
      }
      // Delete old name
      delete state.budgets[oldCat];
      // Update any transactions that used the old category name
      state.txns.forEach(t => { if (t.cat === oldCat) t.cat = newName; });
    } else {
      // Same name, just update amount
      if (isPercentage) {
        state.budgetsPercentage[oldCat] = newAmount;
      } else {
        state.budgets[oldCat] = newAmount;
      }
    }
    showToast(`Budget updated!`, 'success', 2500);
  }
  
  state.showEditBudget = false;
  state.editBudgetData = null;
  render();
}

function renderEditBudgetModal() {
  const data = state.editBudgetData;
  if (!data) return '';
  
  const isNewBudget = !Object.keys(state.budgets).includes(data.cat);
  const isPercentage = state.budgetMode === 'percentage';
  const pctValue = state.budgetsPercentage[data.cat] || 0;
  
  return `
  <div class="modal-overlay">
    <div class="plain-modal">
      <h3>${isNewBudget ? 'Add Budget' : 'Edit Budget'}</h3>
      <div class="field">
        <div class="field-label">Budget Name</div>
        <input type="text" id="edit-budget-name" value="${escapeHtml(data.name)}" placeholder="e.g. Shopping">
      </div>
      <div class="field">
        <div class="field-label">${isPercentage ? 'Percentage of Income' : 'Budget Amount'}</div>
        ${isPercentage ? 
          `<div style="display:flex;align-items:center;gap:8px;"><input type="number" id="edit-budget-amount" value="${pctValue}" placeholder="0" min="0" max="100" style="flex:1;"><span style="font-weight:600;">%</span></div>` :
          `<div class="amount-wrap"><span>${cur()}</span><input type="number" id="edit-budget-amount" value="${data.amount}" placeholder="0.00"></div>`
        }
      </div>
      <div class="modal-btn-row">
        <button class="cancel" onclick="closeEditBudget()">Cancel</button>
        <button class="confirm" onclick="saveEditBudget()">${isNewBudget ? 'Add' : 'Save'}</button>
      </div>
    </div>
  </div>`;
}

function openEditGoal(goalId) {
  const goal = state.goals.find(g => g.id === goalId);
  if (!goal) return;
  state.editGoalData = { id: goalId, name: goal.name, goal: goal.goal };
  state.showEditGoal = true;
  render();
}

function closeEditGoal() {
  state.showEditGoal = false;
  state.editGoalData = null;
  render();
}

function saveEditGoal() {
  const nameInput = document.getElementById('edit-goal-name');
  const amountInput = document.getElementById('edit-goal-amount');
  if (!nameInput || !amountInput) return;
  
  const newName = nameInput.value.trim();
  const newAmount = parseFloat(amountInput.value);
  
  if (!newName || !newAmount || newAmount < 0) {
    showToast('Please enter a valid name and amount', 'error', 3000);
    return;
  }
  
  const goal = state.goals.find(g => g.id === state.editGoalData.id);
  if (goal) {
    goal.name = newName;
    goal.goal = newAmount;
  }
  
  state.showEditGoal = false;
  state.editGoalData = null;
  showToast(`Goal updated!`, 'success', 2500);
  render();
}

function renderEditGoalModal() {
  const data = state.editGoalData;
  if (!data) return '';
  
  return `
  <div class="modal-overlay">
    <div class="plain-modal">
      <h3>Edit Goal</h3>
      <div class="field">
        <div class="field-label">Goal Name</div>
        <input type="text" id="edit-goal-name" value="${escapeHtml(data.name)}" placeholder="e.g. New Laptop">
      </div>
      <div class="field">
        <div class="field-label">Target Amount</div>
        <div class="amount-wrap"><span>${cur()}</span><input type="number" id="edit-goal-amount" value="${data.goal}" placeholder="0.00"></div>
      </div>
      <div class="modal-btn-row">
        <button class="cancel" onclick="closeEditGoal()">Cancel</button>
        <button class="confirm" onclick="saveEditGoal()">Save</button>
      </div>
    </div>
  </div>`;
}

function openAddBudgetOrGoal() {
  if (state.budgetTab === 'budget') {
    openAddBudget();
  } else {
    openAddGoal();
  }
}

function openAddBudget() {
  state.editBudgetData = { cat: '', name: '', amount: 0 };
  state.showEditBudget = true;
  render();
}

function deleteBudget(cat) {
  if (confirm(`Delete budget "${cat}"?`)) {
    delete state.budgets[cat];
    delete state.budgetsPercentage[cat];
    // Clear bank filter if it was set to this category
    if (state.bankFilterCat === cat) state.bankFilterCat = null;
    // Clear form cat if it was set to this category
    if (state.form.cat === cat) state.form.cat = '';
    showToast(`Budget deleted`, 'success', 2500);
    render();
  }
}

function deleteGoal(goalId) {
  const goal = state.goals.find(g => g.id === goalId);
  if (!goal) return;
  if (confirm(`Delete goal "${goal.name}"?`)) {
    state.goals = state.goals.filter(g => g.id !== goalId);
    showToast(`Goal deleted`, 'success', 2500);
    render();
  }
}

function toggleSortMenu() {
  const menu = document.getElementById('sort-menu');
  if (menu) {
    const isOpen = menu.style.display === 'block';
    menu.style.display = isOpen ? 'none' : 'block';
  }
}

function sortBudgets(by) {
  const menu = document.getElementById('sort-menu');
  if (menu) menu.style.display = 'none';
  
  const cats = Object.keys(state.budgets);
  
  if (by === 'name') {
    cats.sort();
    showToast('Sorted by name', 'info', 2000);
  } else if (by === 'spent') {
    cats.sort((a, b) => spentByCat(b) - spentByCat(a));
    showToast('Sorted by spent', 'info', 2000);
  } else if (by === 'budget') {
    cats.sort((a, b) => state.budgets[b] - state.budgets[a]);
    showToast('Sorted by budget', 'info', 2000);
  }
  
  // Reorder state.budgets
  const newBudgets = {};
  cats.forEach(cat => {
    newBudgets[cat] = state.budgets[cat];
  });
  state.budgets = newBudgets;
  render();
}

function sortGoals(by) {
  const menu = document.getElementById('sort-menu');
  if (menu) menu.style.display = 'none';
  
  if (by === 'name') {
    state.goals.sort((a, b) => a.name.localeCompare(b.name));
    showToast('Sorted by name', 'info', 2000);
  } else if (by === 'progress') {
    state.goals.sort((a, b) => {
      const pctA = a.goal > 0 ? (a.saved / a.goal) * 100 : 0;
      const pctB = b.goal > 0 ? (b.saved / b.goal) * 100 : 0;
      return pctB - pctA;
    });
    showToast('Sorted by progress', 'info', 2000);
  } else if (by === 'amount') {
    state.goals.sort((a, b) => b.goal - a.goal);
    showToast('Sorted by amount', 'info', 2000);
  }
  
  render();
}

function openAddGoal() { state.showAddGoal = true; render(); }
function closeAddGoal() { state.showAddGoal = false; render(); }

function renderAddGoalModal() {
  return `
  <div class="modal-overlay">
    <div class="plain-modal">
      <h3>New Goal</h3>
      <div class="field">
        <div class="field-label">Goal name</div>
        <input type="text" id="newGoalName" placeholder="e.g. New Laptop">
      </div>
      <div class="field">
        <div class="field-label">Target amount</div>
        <div class="amount-wrap"><span>${cur()}</span><input type="number" id="newGoalAmount" placeholder="0.00"></div>
      </div>
      <div class="field" style="margin-bottom:6px;">
        <div class="field-label">Already saved (optional)</div>
        <div class="amount-wrap"><span>${cur()}</span><input type="number" id="newGoalSaved" placeholder="0.00"></div>
      </div>
      <div class="modal-btn-row">
        <button class="cancel" onclick="closeAddGoal()">Cancel</button>
        <button class="confirm" onclick="submitNewGoal()">Add Goal</button>
      </div>
    </div>
  </div>`;
}

function submitNewGoal() {
  const name = document.getElementById('newGoalName').value.trim();
  const amt = parseFloat(document.getElementById('newGoalAmount').value);
  const saved = parseFloat(document.getElementById('newGoalSaved').value) || 0;
  if (!name || !amt || amt <= 0) { 
    showToast('Please enter a valid goal name and amount', 'error', 3000);
    return; 
  }
  state.goals.push({ id: state.nextId++, name, goal: amt, saved });
  state.showAddGoal = false;
  showToast(`Goal "${name}" created!`, 'success', 2500);
  render();
}

/* ---------- Edit Budgets modal ---------- */
function openEditAllBudgets() { 
  state.showEditBudgets = true; 
  render(); 
}

function closeEditBudgets() { 
  state.showEditBudgets = false; 
  render(); 
}

function renderEditBudgetsModal() {
  const rows = Object.keys(state.budgets).map(cat => `
    <div class="field">
      <div class="field-label">${cat}</div>
      <div class="amount-wrap"><span>${cur()}</span><input type="number" class="edit-budget-input" data-cat="${cat}" value="${state.budgets[cat]}"></div>
    </div>`).join('');
  return `
  <div class="modal-overlay">
    <div class="plain-modal">
      <h3>Edit All Budgets</h3>
      ${rows}
      <div class="modal-btn-row">
        <button class="cancel" onclick="closeEditBudgets()">Cancel</button>
        <button class="confirm" onclick="saveEditBudgets()">Save</button>
      </div>
    </div>
  </div>`;
}

function saveEditBudgets() {
  document.querySelectorAll('.edit-budget-input').forEach(inp => {
    const cat = inp.dataset.cat;
    const val = parseFloat(inp.value);
    if (!isNaN(val) && val >= 0) state.budgets[cat] = val;
  });
  state.showEditBudgets = false;
  showToast('Budgets updated!', 'success', 2500);
  render();
}

/* ---------- Account ---------- */
function renderAccount() {
  const t = totals();
  return `
  <div class="header-plain">Account</div>
  <div class="card" style="text-align:center;position:relative;">
    <button class="profile-edit-btn" onclick="openProfileEditor()" title="Edit profile">${ICON.edit}</button>
    <div class="avatar" style="${state.userAvatar ? `background-image:url(${state.userAvatar});background-size:cover;background-position:center;` : ''}">${!state.userAvatar ? ICON.account : ''}</div>
    <input class="acc-name-input" value="${escapeHtml(state.userName)}" onchange="updateName(this.value)">
    <div class="acc-sub">${escapeHtml(state.userBio || 'Personal Finance Tracker')}</div>
  </div>
  <div class="card">
    <div class="dim" style="margin-bottom:10px;">At a glance</div>
    <div class="row-between" style="margin-bottom:8px;"><span>Current balance</span><strong>${cur()}${fmt(t.balance)}</strong></div>
    <div class="row-between" style="margin-bottom:8px;"><span>Total income</span><strong>${cur()}${fmt(t.income)}</strong></div>
    <div class="row-between" style="margin-bottom:8px;"><span>Total expense</span><strong>${cur()}${fmt(t.expense)}</strong></div>
    <div class="row-between"><span>Active goals</span><strong>${state.goals.length}</strong></div>
  </div>
  <div class="card settings-list">
    <div class="s-row clickable" onclick="goTo('subscriptions')"><span style="display:flex;align-items:center;gap:10px;"><span style="display:flex;width:18px;height:18px;">${ICON.subscription}</span> Subscriptions</span>${ICON.chevron}</div>
    <div class="s-row clickable" onclick="openStartingBalanceEditor()"><span>Starting balance: <strong>${cur()}${fmt(state.startingBalance)}</strong></span>${ICON.chevron}</div>
    
    <div class="s-row">
      <span style="display:flex;align-items:center;gap:8px;">${ICON.bell} Notifications</span>
      <button class="switch ${state.notificationsOn ? 'on' : ''}" onclick="toggleNotifications()"><span class="knob"></span></button>
    </div>
    
    <div class="s-row">
      <span>Balance visibility</span>
      <button class="switch ${state.balanceHidden ? '' : 'on'}" onclick="toggleBalanceHidden()"><span class="knob"></span></button>
    </div>
    
    <div class="s-row" onclick="openCurrencyDropdown()" style="position:relative;">
      <span>Currency: <strong>${state.currency}</strong></span>
      <div id="currency-dropdown" class="currency-dropdown" style="display:none;">
        ${CURRENCIES.map(c => `<div class="currency-option" onclick="setCurrency('${c}'); event.stopPropagation();">${c}</div>`).join('')}
      </div>
      ${ICON.chevron}
    </div>
    
    <div class="s-row">
      <span>Budget mode: <strong>${state.budgetMode === 'fixed' ? 'Fixed Monthly' : 'Income-Based %'}</strong></span>
      <button class="switch ${state.budgetMode === 'percentage' ? 'on' : ''}" onclick="toggleBudgetMode()"><span class="knob"></span></button>
    </div>
    
    <div class="s-row danger" onclick="resetData()"><span>Reset all data</span>${ICON.trash}</div>
  </div>
  `;
}

function updateName(v) { state.userName = v.trim() || 'User'; }
function toggleNotifications() { state.notificationsOn = !state.notificationsOn; render(); }
function toggleBalanceHidden() { state.balanceHidden = !state.balanceHidden; render(); }
function toggleBudgetMode() { 
  state.budgetMode = state.budgetMode === 'fixed' ? 'percentage' : 'fixed';
  render();
}

function openStartingBalanceEditor() {
  state.editBalanceInput = state.startingBalance.toString();
  state.showEditBalance = true;
  render();
}

function closeStartingBalanceEditor() {
  state.showEditBalance = false;
  render();
}

function renderStartingBalanceModal() {
  return `
  <div class="modal-overlay">
    <div class="plain-modal">
      <h3>Starting Balance</h3>
      <div class="field">
        <div class="field-label">Set your initial balance</div>
        <div class="amount-wrap"><span>${cur()}</span><input type="number" id="balance-input" class="edit-budget-input" value="${state.editBalanceInput}" placeholder="0.00" step="0.01"></div>
      </div>
      <div class="modal-btn-row">
        <button class="cancel" onclick="closeStartingBalanceEditor()">Cancel</button>
        <button class="confirm" onclick="saveStartingBalance()">Save</button>
      </div>
    </div>
  </div>`;
}

function saveStartingBalance() {
  const val = parseFloat(document.getElementById('balance-input').value);
  if (!isNaN(val)) {
    state.startingBalance = val;
    showToast('Starting balance updated', 'success', 2500);
  } else {
    showToast('Invalid amount', 'error', 2500);
  }
  state.showEditBalance = false;
  render();
}

function openCurrencyDropdown() {
  const dropdown = document.getElementById('currency-dropdown');
  if (dropdown) {
    const isOpen = dropdown.style.display === 'block';
    dropdown.style.display = isOpen ? 'none' : 'block';
  }
}

function setCurrency(curr) {
  state.currency = curr;
  const dropdown = document.getElementById('currency-dropdown');
  if (dropdown) dropdown.style.display = 'none';
  render();
}

function openProfileEditor() {
  state.showProfileEditor = true;
  render();
}

function closeProfileEditor() {
  state.showProfileEditor = false;
  render();
}

function renderProfileEditorModal() {
  return `
  <div class="modal-overlay">
    <div class="plain-modal">
      <h3>Edit Profile</h3>
      <div class="field">
        <div class="field-label">Profile Picture</div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="width:60px;height:60px;border-radius:50%;background:rgba(127,185,138,0.3);border:2px solid rgba(127,185,138,0.6);display:flex;align-items:center;justify-content:center;font-size:24px;overflow:hidden;flex-shrink:0;">
            ${state.userAvatar ? `<img src="${state.userAvatar}" style="width:100%;height:100%;object-fit:cover;">` : '👤'}
          </div>
          <input type="file" id="avatar-input" accept="image/*" onchange="handleAvatarUpload(this)" style="display:none;">
          <button class="edit-budget-input" style="background:rgba(127,185,138,0.3);border:1px solid rgba(127,185,138,0.4);padding:8px 12px;border-radius:8px;cursor:pointer;color:var(--cream);font-size:13px;" onclick="document.getElementById('avatar-input').click();">Choose Photo</button>
        </div>
      </div>
      <div class="field">
        <div class="field-label">Name</div>
        <input type="text" class="edit-budget-input" id="profile-name" value="${escapeHtml(state.userName)}" placeholder="Your name">
      </div>
      <div class="field">
        <div class="field-label">Bio/Tagline</div>
        <input type="text" class="edit-budget-input" id="profile-bio" value="${escapeHtml(state.userBio || '')}" placeholder="Personal Finance Tracker">
      </div>
      <div class="modal-btn-row">
        <button class="cancel" onclick="closeProfileEditor()">Cancel</button>
        <button class="confirm" onclick="saveProfileEditor()">Save</button>
      </div>
    </div>
  </div>`;
}

function handleAvatarUpload(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      state.userAvatar = e.target.result;
      render();
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function saveProfileEditor() {
  const name = document.getElementById('profile-name').value.trim();
  const bio = document.getElementById('profile-bio').value.trim();
  if (name) state.userName = name;
  if (bio) state.userBio = bio;
  showToast('Profile updated', 'success', 2500);
  state.showProfileEditor = false;
  render();
}

function resetData() {
  if (confirm('This will erase all transactions and goals. Continue?')) {
    state = {
      ...state,
      txns: [], 
      budgets: { 
        'Shopping': 150, 
        'Groceries': 300, 
        'Eating Out': 100, 
        'Health': 80,
        'Transport': 200,
        'Gifts': 400, 
        'Misc': 150
      },
      goals: [], 
      startingBalance: 0, 
      period: 'thisMonth'
    };
    displayedBalance = null;
    render();
  }
}

/* ---------- Add Transaction ---------- */
function openAddTxn(type) {
  state.form = { type: type || 'expense', desc: '', amount: '', date: daysAgo(0), cat: '', moreOpen: false, allocate: false, allocateGoalId: null, splitGoals: [] };
  state.screen = 'addTxn';
  setPhoneTheme(state.form.type);
  render();
}

function setPhoneTheme(type) {
  document.getElementById('phone').style.background = type === 'expense' ? 'var(--bg-expense)' : 'var(--bg)';
}

function renderAddTxn() {
  const f = state.form;
  const isExpense = f.type === 'expense';
  const themeClass = isExpense ? 'theme-expense' : '';

  let budgetInfo = '';
  if (isExpense && f.cat) {
    const budget = state.budgets[f.cat];
    const spent = spentByCat(f.cat);
    if (budget) {
      const remaining = budget - spent;
      const pct = Math.round((spent / budget) * 100);
      const isOver = spent > budget;
      const barColor = isOver ? 'rgba(201, 107, 92, 0.6)' : 'rgba(127, 185, 138, 0.6)';
      budgetInfo = `
      <div class="budget-info-card">
        <div class="budget-label">Budget: ${f.cat}</div>
        <div class="budget-row"><span>Spent</span><strong>${cur()}${fmt(spent)}</strong></div>
        <div class="budget-row"><span>Budget</span><strong>${cur()}${fmt(budget)}</strong></div>
        <div class="budget-row"><span>Remaining</span><strong class="${isOver ? 'over' : ''}">${cur()}${fmt(remaining)}</strong></div>
        <div class="progress-track"><div class="progress-fill" style="width:${Math.min(pct, 100)}%;background:${barColor};"></div></div>
      </div>`;
    } else {
      budgetInfo = `
      <div class="budget-info-card">
        <div class="budget-label">Category: ${f.cat}</div>
        <div class="budget-row"><span>Total spent</span><strong>${cur()}${fmt(spent)}</strong></div>
        <div class="dim" style="font-size:11px;margin-top:8px;">No budget set for this category</div>
      </div>`;
    }
  }

  let bodyExtra = '';
  if (isExpense) {
    // Merge budget cats + cats that exist in transactions (so deleting a budget doesn't lose history)
    const budgetCats = Object.keys(state.budgets);
    const txnCats = [...new Set(state.txns.filter(t => t.type === 'expense' && t.cat && t.cat !== 'Subscription').map(t => t.cat))];
    const allCats = [...new Set([...budgetCats, ...txnCats])];
    const primaryCats = allCats.slice(0, 5);
    const moreCats = allCats.slice(5);
    const hasMore = moreCats.length > 0;
    
    bodyExtra = `
    <div class="field-label">Category</div>
    <div class="cat-grid">
      ${primaryCats.map(c => `<button class="cat-chip ${f.cat === c ? 'selected' : ''}" onclick="setTxnCat('${c}')">${c}</button>`).join('')}
      <button class="cat-chip ${f.cat === 'Subscription' ? 'selected' : ''}" onclick="setTxnCat('Subscription')">Subscription</button>
      ${hasMore ? `<button class="cat-chip" onclick="toggleMore()">${f.moreOpen ? 'Less...' : 'More...'}</button>` : ''}
    </div>
    ${hasMore ? `<div class="more-panel ${f.moreOpen ? 'open' : ''}" id="more-panel">
      ${moreCats.map(c => `<button class="cat-chip ${f.cat === c ? 'selected' : ''}" onclick="setTxnCat('${c}')">${c}</button>`).join('')}
    </div>` : ''}
    ${budgetInfo}`;
  } else {
    const splits = f.splitGoals || [];
    const totalPct = splits.reduce((sum, s) => sum + (parseFloat(s.pct) || 0), 0);
    const incomeAmt = parseFloat(f.amount) || 0;
    const pctColor = totalPct > 100 ? 'var(--red-bar)' : totalPct === 100 ? 'var(--green-bar)' : 'var(--amber-bar)';

    const splitRows = splits.map((s, i) => {
      const goal = state.goals.find(g => g.id === s.goalId);
      const allocated = incomeAmt > 0 ? (incomeAmt * (parseFloat(s.pct) || 0)) / 100 : 0;
      return `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
        <select onchange="setSplitGoal(${i}, parseInt(this.value))" style="flex:1;background:rgba(63,92,76,0.4);border:1px solid rgba(255,255,255,0.12);color:var(--cream);padding:7px 10px;border-radius:10px;font-size:12px;font-family:'Poppins',sans-serif;">
          <option value="">Choose goal...</option>
          ${state.goals.map(g => `<option value="${g.id}" ${s.goalId === g.id ? 'selected' : ''}>${escapeHtml(g.name)}</option>`).join('')}
        </select>
        <div style="display:flex;align-items:center;background:rgba(63,92,76,0.4);border:1px solid rgba(255,255,255,0.12);border-radius:10px;padding:7px 10px;gap:4px;flex-shrink:0;">
          <input type="number" min="0" max="100" value="${s.pct}" placeholder="0" oninput="setSplitPct(${i}, this.value)" style="width:46px;background:none;border:none;color:var(--cream);font-size:13px;font-family:'Poppins',sans-serif;text-align:center;-webkit-appearance:none;-moz-appearance:textfield;appearance:textfield;">
          <span style="font-size:13px;color:var(--cream-dim);">%</span>
        </div>
        ${incomeAmt > 0 ? `<div style="font-size:11px;color:var(--cream-dim);width:54px;text-align:right;flex-shrink:0;">${cur()}${fmt(allocated)}</div>` : ''}
        <button onclick="removeSplit(${i})" style="background:none;border:none;color:var(--cream-dim);cursor:pointer;padding:4px;font-size:14px;flex-shrink:0;">✕</button>
      </div>`;
    }).join('');

    bodyExtra = `
    <div class="allocate-row">
      <span>Split into goals?</span>
      <button class="switch ${f.allocate ? 'on' : ''}" onclick="toggleAllocate()"><span class="knob"></span></button>
    </div>
    <div class="allocate-panel ${f.allocate ? 'open' : ''}" id="allocate-panel">
      ${splitRows}
      ${splits.length < state.goals.length ? `<button onclick="addSplit()" style="width:100%;background:rgba(127,185,138,0.15);border:1px dashed rgba(127,185,138,0.4);color:var(--cream-dim);padding:8px;border-radius:10px;font-size:12px;cursor:pointer;margin-bottom:8px;">+ Add goal</button>` : ''}
      ${splits.length > 0 ? `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-top:1px solid rgba(255,255,255,0.08);">
        <span style="font-size:12px;color:var(--cream-dim);">Total allocated</span>
        <span style="font-size:13px;font-weight:700;color:${pctColor};" id="split-total">${totalPct}%${incomeAmt > 0 ? ` · ${cur()}${fmt(incomeAmt * totalPct / 100)}` : ''}</span>
      </div>
      ${totalPct > 100 ? `<div style="font-size:11px;color:var(--red-bar);text-align:center;">Total exceeds 100%</div>` : ''}` : ''}
    </div>
    <div class="field-label">Category</div>
    <div class="cat-grid">
      ${INCOME_CATS.map(c => `<button class="cat-chip ${f.cat === c ? 'selected' : ''}" onclick="setTxnCat('${c}')">${c}</button>`).join('')}
    </div>`;
  }

  return `
  <div class="form-page ${themeClass}">
    <div class="form-header">
      <button class="back-btn" onclick="goTo('home')">${ICON.back} Back</button>
      <h2>Add Transaction</h2>
    </div>

    <div class="field-label">Description</div>
    <div class="field"><input type="text" id="f-desc" placeholder="e.g. Coffee with a friend" value="${escapeHtml(f.desc)}" oninput="state.form.desc=this.value"></div>

    <div class="field-label">Amount</div>
    <div class="amount-wrap"><span>${cur()}</span><input type="number" id="f-amount" placeholder="0.00" value="${f.amount}" oninput="state.form.amount=this.value"></div>

    <div class="field-label">Date</div>
    <div class="field"><input type="date" id="f-date" value="${f.date}" onchange="state.form.date=this.value"></div>

    <div class="type-toggle">
      <button class="type-btn income ${f.type === 'income' ? 'selected' : ''}" onclick="setTxnType('income')">Income</button>
      <button class="type-btn expense ${f.type === 'expense' ? 'selected' : ''}" onclick="setTxnType('expense')">Expense</button>
    </div>

    ${bodyExtra}

    <button class="save-btn" id="save-btn" onclick="saveTxn()">Save</button>
  </div>`;
}

function setTxnType(type) {
  if (state.form.type === type) return;
  state.form.type = type;
  state.form.cat = '';
  state.form.moreOpen = false;
  setPhoneTheme(type);
  render();
}

function setTxnCat(cat) { state.form.cat = cat; render(); }

function toggleMore() {
  state.form.moreOpen = !state.form.moreOpen;
  const panel = document.getElementById('more-panel');
  if (panel) { panel.classList.toggle('open', state.form.moreOpen); }
}

function toggleAllocate() {
  state.form.allocate = !state.form.allocate;
  const sw = document.getElementById('allocate-switch');
  const panel = document.getElementById('allocate-panel');
  if (sw) sw.classList.toggle('on', state.form.allocate);
  if (panel) panel.classList.toggle('open', state.form.allocate);
}

function setAllocateGoal(id) { state.form.allocateGoalId = id; render(); }

function addSplit() {
  if (!state.form.splitGoals) state.form.splitGoals = [];
  state.form.splitGoals.push({ goalId: null, pct: '' });
  render();
}

function removeSplit(i) {
  state.form.splitGoals.splice(i, 1);
  render();
}

function setSplitGoal(i, goalId) {
  state.form.splitGoals[i].goalId = goalId || null;
  render();
}

function setSplitPct(i, val) {
  state.form.splitGoals[i].pct = val;
  // re-render just the total line without full render for smooth typing
  const totalPct = state.form.splitGoals.reduce((sum, s) => sum + (parseFloat(s.pct) || 0), 0);
  const incomeAmt = parseFloat(state.form.amount) || 0;
  const pctColor = totalPct > 100 ? 'var(--red-bar)' : totalPct === 100 ? 'var(--green-bar)' : 'var(--amber-bar)';
  const totalEl = document.getElementById('split-total');
  if (totalEl) {
    totalEl.style.color = pctColor;
    totalEl.textContent = `${totalPct}%${incomeAmt > 0 ? ` · ${cur()}${fmt(incomeAmt * totalPct / 100)}` : ''}`;
  }
}

function saveTxn() {
  const f = state.form;
  const amt = parseFloat(f.amount);
  const btn = document.getElementById('save-btn');
  if (!f.desc.trim() || !amt || amt <= 0 || !f.cat) {
    if (btn) { btn.classList.remove('shake'); void btn.offsetWidth; btn.classList.add('shake'); }
    if (!f.desc.trim()) showToast('Please add a description', 'error', 3000);
    else if (!amt || amt <= 0) showToast('Please enter a valid amount', 'error', 3000);
    else if (!f.cat) showToast('Please choose a category', 'error', 3000);
    return;
  }

  const txn = { id: state.nextId++, desc: f.desc.trim(), amount: amt, type: f.type, cat: f.cat, date: f.date };
  
  if (f.type === 'income' && f.allocate && f.splitGoals && f.splitGoals.length > 0) {
    const validSplits = f.splitGoals.filter(s => s.goalId && parseFloat(s.pct) > 0);
    const totalPct = validSplits.reduce((sum, s) => sum + parseFloat(s.pct), 0);
    
    if (totalPct > 100) {
      showToast('Goal splits exceed 100% — please adjust', 'error', 3000);
      return;
    }
    
    txn.splitGoals = validSplits;
    validSplits.forEach(s => {
      const g = state.goals.find(g => g.id === s.goalId);
      if (g) {
        const allocated = (amt * parseFloat(s.pct)) / 100;
        g.saved += allocated;
      }
    });
    
    if (validSplits.length > 0) {
      const totalAllocated = (amt * totalPct) / 100;
      setTimeout(() => showToast(`${cur()}${fmt(totalAllocated)} split across ${validSplits.length} goal${validSplits.length > 1 ? 's' : ''}`, 'info', 3000), 300);
    }
  }
  
  state.txns.push(txn);

  // Only check budget warnings for expense transactions
  state.warningItems = [];
  if (f.type === 'expense') {
    Object.keys(state.budgets).forEach(cat => {
      const budget = state.budgets[cat];
      const spent = spentByCat(cat);
      const pct = Math.round((spent / budget) * 100);
      if (spent > budget) {
        state.warningItems.push({ type: 'over', text: `${cat} — You're ${cur()}${fmt(spent - budget)} over budget` });
      } else if (pct >= 85) {
        state.warningItems.push({ type: 'warn', text: `${cat} — ${pct}% of budget used` });
      }
    });
  }

  state.screen = 'home';
  setPhoneTheme('neutral');
  
  // Show toasts instead of modal
  showToast(`${f.type === 'income' ? 'Income' : 'Expense'} added!`, 'success', 2000);
  state.warningItems.forEach(item => {
    setTimeout(() => {
      showToast(item.text, item.type === 'over' ? 'error' : 'info', 3000);
    }, 500);
  });
  
  render();
}

/* ---------- Warning Modal ---------- */
function renderWarningModal() {
  const items = state.warningItems.map(w => `
    <div class="warn-item">${w.type === 'over' ? ICON.dot : ICON.warn}<span>${w.text}</span></div>
  `).join('');
  return `
  <div class="modal-overlay">
    <div class="modal-box">
      <div class="modal-title">Warning!</div>
      ${items}
      <button class="modal-ok" onclick="closeWarning()">Okay</button>
    </div>
  </div>`;
}

function closeWarning() { state.showWarning = false; state.warningItems = []; render(); }

/* ---------- Nav helper ---------- */
function goTo(screen) {
  if (screen !== 'addTxn') setPhoneTheme('neutral');
  state.screen = screen;
  render();
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

/* ================= SUBSCRIPTIONS ================= */

const SUB_CYCLES = ['monthly', 'yearly', 'weekly', 'quarterly'];
const SUB_CATS = ['Entertainment', 'Productivity', 'Storage', 'Health & Fitness', 'News', 'Shopping', 'Other'];
const SUB_COLORS = ['#E50914', '#1DB954', '#007AFF', '#FF6B35', '#A855F7', '#10A37F', '#F59E0B', '#EF4444', '#6366F1'];

function subMonthlyAmount(sub) {
  if (sub.cycle === 'monthly') return sub.amount;
  if (sub.cycle === 'yearly') return sub.amount / 12;
  if (sub.cycle === 'weekly') return sub.amount * 4.33;
  if (sub.cycle === 'quarterly') return sub.amount / 3;
  return sub.amount;
}

function subYearlyAmount(sub) {
  if (sub.cycle === 'monthly') return sub.amount * 12;
  if (sub.cycle === 'yearly') return sub.amount;
  if (sub.cycle === 'weekly') return sub.amount * 52;
  if (sub.cycle === 'quarterly') return sub.amount * 4;
  return sub.amount;
}

function renderSubscriptions() {
  const subs = state.subscriptions || [];
  const totalMonthly = subs.reduce((sum, s) => sum + subMonthlyAmount(s), 0);
  const totalYearly = totalMonthly * 12;

  // Group by category for breakdown
  const byCat = {};
  subs.forEach(s => {
    const cat = s.cat || 'Other';
    if (!byCat[cat]) byCat[cat] = 0;
    byCat[cat] += subMonthlyAmount(s);
  });
  const catEntries = Object.entries(byCat).sort((a, b) => b[1] - a[1]);

  // Bar chart max
  const maxCatVal = Math.max(...catEntries.map(e => e[1]), 1);

  // Subscription txns this month (tagged as Subscription cat)
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0, 10);
  const subTxnsThisMonth = state.txns.filter(t => t.type === 'expense' && t.cat === 'Subscription' && t.date >= startOfMonth);
  const trackedSpend = subTxnsThisMonth.reduce((sum, t) => sum + t.amount, 0);

  // All expenses this month for the comparison chart
  const allExpensesThisMonth = state.txns.filter(t => t.type === 'expense' && t.date >= startOfMonth);
  const totalExpenses = allExpensesThisMonth.reduce((sum, t) => sum + t.amount, 0);
  const subPct = totalExpenses > 0 ? Math.round((trackedSpend / totalExpenses) * 100) : 0;

  return `
  <div class="form-header">
    <button class="back-btn" onclick="goTo('account')">${ICON.back} Back</button>
    <h2>Subscriptions</h2>
  </div>

  <!-- Summary cards -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
    <div class="card" style="text-align:center;padding:14px 10px;">
      <div style="font-size:11px;color:var(--cream-dim);margin-bottom:4px;">Monthly</div>
      <div style="font-size:20px;font-weight:700;color:var(--income);">${cur()}${fmt(totalMonthly)}</div>
      <div style="font-size:10px;color:var(--cream-dim);margin-top:2px;">${subs.length} active</div>
    </div>
    <div class="card" style="text-align:center;padding:14px 10px;">
      <div style="font-size:11px;color:var(--cream-dim);margin-bottom:4px;">Yearly</div>
      <div style="font-size:20px;font-weight:700;color:var(--expense);">${cur()}${fmt(totalYearly)}</div>
      <div style="font-size:10px;color:var(--cream-dim);margin-top:2px;">per year total</div>
    </div>
  </div>

  <!-- Spend vs budget comparison -->
  <div class="card" style="margin-bottom:14px;">
    <div style="font-size:14px;font-weight:600;margin-bottom:12px;">Subscriptions vs Total Spend</div>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
      <div style="font-size:12px;color:var(--cream-dim);width:90px;">Subscriptions</div>
      <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:10px;overflow:hidden;">
        <div class="progress-fill" data-target="${subPct}%" style="height:100%;background:var(--expense-color,rgba(201,107,92,0.7));border-radius:4px;"></div>
      </div>
      <div style="font-size:12px;font-weight:600;width:40px;text-align:right;">${subPct}%</div>
    </div>
    <div style="display:flex;align-items:center;gap:12px;">
      <div style="font-size:12px;color:var(--cream-dim);width:90px;">Other</div>
      <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:10px;overflow:hidden;">
        <div class="progress-fill" data-target="${100 - subPct}%" style="height:100%;background:rgba(127,185,138,0.6);border-radius:4px;"></div>
      </div>
      <div style="font-size:12px;font-weight:600;width:40px;text-align:right;">${100 - subPct}%</div>
    </div>
    <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:11px;color:var(--cream-dim);">
      <span>Tracked this month: <strong style="color:var(--cream)">${cur()}${fmt(trackedSpend)}</strong></span>
      <span>Total: <strong style="color:var(--cream)">${cur()}${fmt(totalExpenses)}</strong></span>
    </div>
  </div>

  <!-- By category breakdown -->
  ${catEntries.length > 0 ? `
  <div class="card" style="margin-bottom:14px;">
    <div style="font-size:14px;font-weight:600;margin-bottom:12px;">By Category</div>
    ${catEntries.map(([cat, val]) => `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        <div style="font-size:12px;color:var(--cream-dim);width:100px;flex-shrink:0;">${cat}</div>
        <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:8px;overflow:hidden;">
          <div class="progress-fill" data-target="${Math.round((val/maxCatVal)*100)}%" style="height:100%;background:rgba(127,185,138,0.6);border-radius:4px;"></div>
        </div>
        <div style="font-size:12px;font-weight:600;width:54px;text-align:right;">${cur()}${fmt(val)}/mo</div>
      </div>
    `).join('')}
  </div>` : ''}

  <!-- Subscription list -->
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <span style="font-weight:600;">All Subscriptions</span>
    <button class="filter-btn" style="min-width:auto;padding:6px 12px;background:rgba(127,185,138,0.3);border-color:rgba(127,185,138,0.4);" onclick="openAddSub()">+ Add</button>
  </div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
    ${subs.length === 0 ? `<div class="dim" style="text-align:center;padding:24px;">No subscriptions yet — tap Add to get started</div>` : ''}
    ${subs.map(s => {
      const monthly = subMonthlyAmount(s);
      const yearly = subYearlyAmount(s);
      return `
      <div class="card" style="display:flex;align-items:center;gap:12px;padding:14px;cursor:pointer;" onclick="openEditSub(${s.id})">
        <div style="width:40px;height:40px;border-radius:10px;background:${s.color || '#4a6b58'};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">${s.emoji || '📦'}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-weight:600;font-size:13px;">${escapeHtml(s.name)}</div>
          <div style="font-size:11px;color:var(--cream-dim);">${s.cat} · ${s.cycle}</div>
        </div>
        <div style="text-align:right;flex-shrink:0;">
          <div style="font-weight:700;font-size:14px;">${cur()}${fmt(s.amount)}</div>
          <div style="font-size:10px;color:var(--cream-dim);">${s.cycle === 'monthly' ? '' : `${cur()}${fmt(monthly)}/mo`}</div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

function openAddSub() {
  state.showAddSub = true;
  render();
}

function closeAddSub() {
  state.showAddSub = false;
  render();
}

function openEditSub(id) {
  const sub = (state.subscriptions || []).find(s => s.id === id);
  if (!sub) return;
  state.editSubData = { ...sub };
  state.showEditSub = true;
  render();
}

function closeEditSub() {
  state.showEditSub = false;
  state.editSubData = null;
  render();
}

function saveAddSub() {
  const name = document.getElementById('sub-name').value.trim();
  const amount = parseFloat(document.getElementById('sub-amount').value);
  const cycle = document.getElementById('sub-cycle').value;
  const cat = document.getElementById('sub-cat').value;
  const color = document.getElementById('sub-color').value;
  const emoji = document.getElementById('sub-emoji').value.trim() || '📦';
  
  if (!name || !amount || amount <= 0) {
    showToast('Please enter a valid name and amount', 'error', 2500);
    return;
  }
  
  if (!state.subscriptions) state.subscriptions = [];
  state.subscriptions.push({ id: state.nextSubId++, name, amount, cycle, cat, color, emoji });
  showToast(`${name} added!`, 'success', 2500);
  state.showAddSub = false;
  render();
}

function saveEditSub() {
  const name = document.getElementById('sub-name').value.trim();
  const amount = parseFloat(document.getElementById('sub-amount').value);
  const cycle = document.getElementById('sub-cycle').value;
  const cat = document.getElementById('sub-cat').value;
  const color = document.getElementById('sub-color').value;
  const emoji = document.getElementById('sub-emoji').value.trim() || '📦';
  
  if (!name || !amount || amount <= 0) {
    showToast('Please enter a valid name and amount', 'error', 2500);
    return;
  }
  
  const sub = state.subscriptions.find(s => s.id === state.editSubData.id);
  if (sub) {
    Object.assign(sub, { name, amount, cycle, cat, color, emoji });
    showToast('Subscription updated!', 'success', 2500);
  }
  state.showEditSub = false;
  state.editSubData = null;
  render();
}

function deleteSubConfirm(id) {
  const sub = (state.subscriptions || []).find(s => s.id === id);
  if (!sub) return;
  if (confirm(`Delete "${sub.name}"?`)) {
    state.subscriptions = state.subscriptions.filter(s => s.id !== id);
    showToast('Subscription deleted', 'success', 2500);
    state.showEditSub = false;
    state.editSubData = null;
    render();
  }
}

function renderAddSubModal() {
  return `
  <div class="modal-overlay">
    <div class="plain-modal">
      <h3>Add Subscription</h3>
      <div class="field">
        <div class="field-label">Name</div>
        <input type="text" id="sub-name" placeholder="e.g. Netflix">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div class="field">
          <div class="field-label">Amount</div>
          <div class="amount-wrap"><span>${cur()}</span><input type="number" id="sub-amount" placeholder="0.00"></div>
        </div>
        <div class="field">
          <div class="field-label">Emoji</div>
          <input type="text" id="sub-emoji" placeholder="📦" maxlength="2" style="text-align:center;font-size:20px;">
        </div>
      </div>
      <div class="field">
        <div class="field-label">Billing cycle</div>
        <select id="sub-cycle" style="width:100%;background:rgba(63,92,76,0.3);border:1px solid rgba(255,255,255,0.15);color:var(--cream);padding:10px 14px;border-radius:12px;font-size:14px;font-family:'Poppins',sans-serif;">
          ${SUB_CYCLES.map(c => `<option value="${c}">${c.charAt(0).toUpperCase() + c.slice(1)}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <div class="field-label">Category</div>
        <select id="sub-cat" style="width:100%;background:rgba(63,92,76,0.3);border:1px solid rgba(255,255,255,0.15);color:var(--cream);padding:10px 14px;border-radius:12px;font-size:14px;font-family:'Poppins',sans-serif;">
          ${SUB_CATS.map(c => `<option value="${c}">${c}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <div class="field-label">Colour</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${SUB_COLORS.map(c => `<div onclick="document.getElementById('sub-color').value='${c}';this.parentElement.querySelectorAll('.color-dot').forEach(d=>d.style.outline='none');this.style.outline='2px solid white';" class="color-dot" style="width:24px;height:24px;border-radius:50%;background:${c};cursor:pointer;"></div>`).join('')}
          <input type="color" id="sub-color" value="#4a6b58" style="width:24px;height:24px;border:none;border-radius:50%;cursor:pointer;background:none;padding:0;">
        </div>
      </div>
      <div class="modal-btn-row">
        <button class="cancel" onclick="closeAddSub()">Cancel</button>
        <button class="confirm" onclick="saveAddSub()">Add</button>
      </div>
    </div>
  </div>`;
}

function renderEditSubModal() {
  const d = state.editSubData;
  if (!d) return '';
  return `
  <div class="modal-overlay">
    <div class="plain-modal">
      <h3>Edit Subscription</h3>
      <div class="field">
        <div class="field-label">Name</div>
        <input type="text" id="sub-name" value="${escapeHtml(d.name)}" placeholder="e.g. Netflix">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div class="field">
          <div class="field-label">Amount</div>
          <div class="amount-wrap"><span>${cur()}</span><input type="number" id="sub-amount" value="${d.amount}" placeholder="0.00"></div>
        </div>
        <div class="field">
          <div class="field-label">Emoji</div>
          <input type="text" id="sub-emoji" value="${d.emoji || '📦'}" placeholder="📦" maxlength="2" style="text-align:center;font-size:20px;">
        </div>
      </div>
      <div class="field">
        <div class="field-label">Billing cycle</div>
        <select id="sub-cycle" style="width:100%;background:rgba(63,92,76,0.3);border:1px solid rgba(255,255,255,0.15);color:var(--cream);padding:10px 14px;border-radius:12px;font-size:14px;font-family:'Poppins',sans-serif;">
          ${SUB_CYCLES.map(c => `<option value="${c}" ${d.cycle===c?'selected':''}>${c.charAt(0).toUpperCase() + c.slice(1)}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <div class="field-label">Category</div>
        <select id="sub-cat" style="width:100%;background:rgba(63,92,76,0.3);border:1px solid rgba(255,255,255,0.15);color:var(--cream);padding:10px 14px;border-radius:12px;font-size:14px;font-family:'Poppins',sans-serif;">
          ${SUB_CATS.map(c => `<option value="${c}" ${d.cat===c?'selected':''}>${c}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <div class="field-label">Colour</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${SUB_COLORS.map(c => `<div onclick="document.getElementById('sub-color').value='${c}';this.parentElement.querySelectorAll('.color-dot').forEach(d=>d.style.outline='none');this.style.outline='2px solid white';" class="color-dot" style="width:24px;height:24px;border-radius:50%;background:${c};cursor:pointer;${d.color===c?'outline:2px solid white;':''}" ></div>`).join('')}
          <input type="color" id="sub-color" value="${d.color || '#4a6b58'}" style="width:24px;height:24px;border:none;border-radius:50%;cursor:pointer;background:none;padding:0;">
        </div>
      </div>
      <div class="modal-btn-row">
        <button class="cancel" onclick="closeEditSub()">Cancel</button>
        <button class="confirm" style="background:rgba(201,107,92,0.4);border-color:rgba(201,107,92,0.5);" onclick="deleteSubConfirm(${d.id})">Delete</button>
        <button class="confirm" onclick="saveEditSub()">Save</button>
      </div>
    </div>
  </div>`;
}

/* ---------- Toast Notifications ---------- */
function showToast(message, type = 'info', duration = 3000) {
  // Create or get container
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.getElementById('phone').appendChild(container);
  }
  
  // Create toast
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  
  // Remove after duration - each toast has its own timeout
  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 250);
  }, duration);
}

// Load saved data on app start
loadState();
render();