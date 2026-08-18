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
  subscription: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M8 16H3v5"/></svg>`,
  achievement: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  pencil: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  arrowUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`,
  arrowDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>`,
  zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  undo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"/></svg>`,
  plant: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M12 12C12 7 17 4 17 4s1 5-2 8"/><path d="M12 16C12 11 7 8 7 8s-1 5 2 8"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="5" width="18" height="14" rx="2"/>
  <path d="M3 7l9 6 9-6"/>
  </svg>`,

  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="11" width="16" height="10" rx="2"/>
  <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
  </svg>`,
};

const CAT_ICON = {
  'Shopping': 'bag', 'Eating Out': 'food', 'Fuel': 'fuel', 'Groceries': 'cart', 'Gifts': 'gift', 'Misc': 'misc',
  'Salary': 'cash', 'Freelance': 'cash', 'Gift': 'gift', 'Refund': 'cash', 'Reimburse': 'cash', 'Other': 'misc',
  'Health': 'heart', 'Transport': 'fuel', 'Subscription': 'subscription'
};

const CAT_COLOR = {
  'Shopping':     '#a855f7',
  'Eating Out':   '#f59e0b',
  'Groceries':    '#22c55e',
  'Health':       '#ef4444',
  'Transport':    '#3b82f6',
  'Gifts':        '#ec4899',
  'Misc':         '#6b7280',
  'Subscription': '#06b6d4',
  'Salary':       '#10b981',
  'Freelance':    '#10b981',
  'Refund':       '#10b981',
  'Gift':         '#ec4899',
  'Reimburse':    '#10b981',
  'Other':        '#6b7280',
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

// Expose to global scope for desktop version
window.EXPENSE_CATS_PRIMARY = EXPENSE_CATS_PRIMARY;
window.EXPENSE_CATS_MORE = EXPENSE_CATS_MORE;
window.INCOME_CATS = INCOME_CATS;

function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}

// Clean default state for new users — no dummy data
const DEFAULT_STATE = {
  screen: 'splash',
  budgetTab: 'budget',
  userName: '',
  currency: 'AUD',
  notificationsOn: true,
  balanceHidden: false,
  period: 'thisMonth',
  startingBalance: 0,
  txns: [],
  budgets: { 
    'Shopping': 300, 'Groceries': 400, 'Eating Out': 200, 
    'Health': 100, 'Transport': 250, 'Gifts': 200, 'Misc': 150
  },
  goals: [],
  nextId: 1,
  form: { type: 'expense', desc: '', amount: '', date: daysAgo(0), cat: '', moreOpen: false, allocate: false, allocateGoalId: null, splitGoals: [] },
  showEditBudget: false, editBudgetData: null,
  showEditGoal: false, editGoalData: null,
  warningItems: [], showWarning: false,
  showAddGoal: false, showEditBudgets: false, showEditBalance: false,
  editBalanceInput: '0', showProfileEditor: false,
  userBio: 'Personal Finance Tracker',
  graphType: 'category', budgetSort: 'spent', goalSort: 'progress',
  trendPeriod: 'month', bankFilterCat: null, graphPeriod: 'thisMonth',
  bankSearchQuery: '', bankPeriod: 'thisMonth', bankFilterType: 'all',
  userAvatar: null, budgetMode: 'fixed', budgetsPercentage: {},
  selectedTxnId: null, unlockedBadges: [], badgeDates: {},
  firstLogin: true, selectedBadgeId: null,
  showResetModal: false, resetStep: 0,
  setupComplete: true, setupStep: 0,
  subscriptions: [], nextSubId: 1,
  showAddSub: false, showEditSub: false, editSubData: null,
  showEditAccount: false,
  showDeleteAccountModal: false, deleteAccountStep: 1,
  showFundGoal: false, fundGoalId: null,
  showAutoSplit: false, autoSplitIncome: '',
  lastImportIds: [], // Track last import for undo
  selectedTxns: [], // For bulk delete
  bulkDeleteMode: false, // Toggle bulk delete mode
  reviewMode: false, // Review unreviewed transactions
  currentReviewIndex: 0, // Current transaction being reviewed
};

let state = { ...DEFAULT_STATE };

let displayedBalance = null; // for count-up animation
let lastScreen = null; // track screen changes for page-enter animation

/* ================= DATA PERSISTENCE ================= */
/* ================= SUPABASE ================= */
const SUPABASE_URL = 'https://ihukgfgqdkmjynmcfkak.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlodWtnZmdxZGttanlubWNma2FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4OTQ4OTksImV4cCI6MjEwMDQ3MDg5OX0.6As26zGUrpXGqZKXOJGPv4lK1tI4LCesM3V7wM8gRV8';
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentUser = null;
let authInitialized = false;
let saveTimeout = null;

async function saveState() {
  // Always save to localStorage as instant fallback, tagged with userId
  try { 
    const saveData = { ...state, _userId: currentUser?.id || null };
    localStorage.setItem('sprout_data', JSON.stringify(saveData)); 
  } catch(e) {}
  if (!currentUser) return;
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async () => {
    try {
      const { data: { session } } = await db.auth.getSession();
      if (!session) return;
      const { error } = await db.from('user_data')
        .upsert(
          { id: currentUser.id, data: state, updated_at: new Date().toISOString() },
          { onConflict: 'id' }
        );
      if (error) console.error('Supabase save error:', error.message);
    } catch(e) { console.error('Supabase save error:', e); }
  }, 1200);
}

async function loadState() {
  if (!currentUser) return;
  try {
    const { data: { session } } = await db.auth.getSession();
    if (!session) return;

    // Use limit(1) instead of maybeSingle() — avoids 406 when no row exists
    const { data: rows, error } = await db.from('user_data')
      .select('data')
      .eq('id', currentUser.id)
      .limit(1);
    
    if (error) {
      console.error('Supabase load error:', error.message);
      return;
    }

    const row = rows && rows.length > 0 ? rows[0] : null;
    if (row?.data) {
      // Existing user — load their saved data on top of clean defaults
      Object.assign(state, DEFAULT_STATE, row.data);
    }
    // Always skip setup page - go straight to app
    state.setupComplete = true;
    state.setupStep = 0;
    // New user or existing — always clear localStorage, Supabase is source of truth
    localStorage.removeItem('sprout_data');
    
  } catch(e) { console.error('Supabase load error:', e); }
}

/* ================= AUTH ================= */
let authMode = 'login'; // 'login' | 'signup' | 'magic'

function renderAuth() {
  const isLogin = authMode === 'login';
  const isMagic = authMode === 'magic';
  return `
  <div class="auth-screen">
    <div class="auth-logo">
      ${lotusSVG(80)}
      <div class="brand" style="font-size:28px;">Sprout</div>
      <div class="brand-cn" style="font-size:14px;margin-top:-4px;">发芽</div>
    </div>

    ${isMagic ? `
    <div class="auth-card">
      <div style="font-size:15px;font-weight:600;margin-bottom:6px;">Magic Link</div>
      <div style="font-size:12px;color:var(--cream-dim);margin-bottom:16px;">We'll email you a sign-in link — no password needed.</div>
      <div class="auth-input">
        <span class="auth-input-icon">${ICON.mail}</span>
        <input type="email" id="auth-email" placeholder="Email address" autocomplete="email">
      </div>
      <button class="auth-btn" onclick="sendMagicLink()">Send Magic Link</button>
      <button class="auth-switch" onclick="authMode='login';render();">← Back to login</button>
    </div>
    ` : `
    <div class="auth-card">
      <div style="display:flex;gap:0;margin-bottom:20px;background:rgba(255,255,255,0.06);border-radius:10px;padding:3px;">
        <button onclick="authMode='login';render();" style="flex:1;padding:8px;border-radius:8px;border:none;cursor:pointer;font-size:13px;font-family:'Poppins',sans-serif;font-weight:600;background:${isLogin ? 'rgba(127,185,138,0.4)' : 'transparent'};color:var(--cream);">Log In</button>
        <button onclick="authMode='signup';render();" style="flex:1;padding:8px;border-radius:8px;border:none;cursor:pointer;font-size:13px;font-family:'Poppins',sans-serif;font-weight:600;background:${!isLogin ? 'rgba(127,185,138,0.4)' : 'transparent'};color:var(--cream);">Sign Up</button>
      </div>
      <div class="auth-input">
    <span class="auth-input-icon">${ICON.lock}</span>
    <input
        type="email"
        id="auth-email"
        placeholder="Email address"
        autocomplete="email"
    >
    </div>

    <div class="auth-input">
        <span class="auth-input-icon">🔒</span>
        <input
            type="password"
            id="auth-password"
            placeholder="Password"
            autocomplete="current-password"
        >
        <button
            class="password-toggle"
            type="button"
            onclick="togglePassword()"
        >
            ${ICON.eye}
        </button>
    </div>
      ${!isLogin ? `<input type="text" id="auth-name" placeholder="Your name" style="margin-bottom:16px;">` : ''}
      <button class="auth-btn" onclick="${isLogin ? 'signIn()' : 'signUp()'}">
        ${isLogin ? 'Log In' : 'Create Account'}
      </button>
      <button class="auth-switch" onclick="authMode='magic';render();">✨ Sign in with magic link instead</button>
      ${isLogin ? `<div style="font-size:11px;color:var(--cream-dim);text-align:center;margin-top:8px;">Forgot password? Use magic link above</div>` : ''}
    </div>
    `}
    <div style="font-size:10px;color:var(--cream-dim);text-align:center;margin-top:16px;padding:0 20px;">Your data is securely stored and synced across all your devices.</div>
  </div>`;
}

function togglePassword() {
    const input = document.getElementById("auth-password");
    const button = document.querySelector(".password-toggle");

    if (input.type === "password") {
        input.type = "text";
        button.innerHTML = ICON.eyeOff;
    } else {
        input.type = "password";
        button.innerHTML = ICON.eye;
    }
}

async function signIn() {
  const email = document.getElementById('auth-email')?.value?.trim();
  const password = document.getElementById('auth-password')?.value;
  if (!email || !password) { showToast('Please enter email and password', 'error', 3000); return; }
  showToast('Signing in...', 'info', 2000);
  const { error } = await db.auth.signInWithPassword({ email, password });
  if (error) showToast(error.message, 'error', 4000);
}

let pendingSignupName = ''; // Store name from signup form to use in setup

async function signUp() {
  const email = document.getElementById('auth-email')?.value?.trim();
  const password = document.getElementById('auth-password')?.value;
  const name = document.getElementById('auth-name')?.value?.trim();

  if (!email || !password) {
    showToast('Please enter email and password', 'error', 3000);
    return;
  }

  if (password.length < 6) {
    showToast('Password must be at least 6 characters', 'error', 3000);
    return;
  }

  showToast('Creating account...', 'info', 2000);

  const { data, error } = await db.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "https://sprout.cindy.dev"
    }
  });

  if (error) {
    console.error(error);
    showToast(error.message, 'error', 4000);
    return;
  }

  // Store name so setup step 2 pre-fills it
  if (name) pendingSignupName = name;

  showToast('Account created! Check your email to confirm.', 'success', 5000);
}

async function sendMagicLink() {
  const email = document.getElementById('auth-email')?.value?.trim();
  if (!email) { showToast('Please enter your email', 'error', 3000); return; }
  showToast('Sending magic link...', 'info', 2000);
  const { error } = await db.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: 'https://sprout.cindy.dev' }
  });
  if (error) { showToast(error.message, 'error', 4000); }
  else { showToast('Magic link sent! Check your inbox 📬', 'success', 5000); }
}

async function signOut() {
  await db.auth.signOut();
  currentUser = null;
  state.screen = 'auth';
  render();
}

function dmy(iso) { const [y, m, d] = iso.split('-'); return `${d}/${m}/${y}`; }

function fmt(n) {
  n = Number(n) || 0;
  const neg = n < 0; n = Math.abs(n);
  const rounded = Math.round(n * 100) / 100;
  const s = Number.isInteger(rounded) ? rounded.toLocaleString('en-AU') : rounded.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return (neg ? '-' : '') + s;
}

function fmtCompact(n) {
  n = Number(n) || 0;
  const neg = n < 0; n = Math.abs(n);
  let s;
  if (n >= 1000000) {
    const v = n / 1000000;
    s = (Number.isInteger(Math.round(v * 10) / 10) ? Math.round(v) : (Math.round(v * 10) / 10)) + 'M';
  } else if (n >= 1000) {
    const v = n / 1000;
    const rounded = Math.round(v * 10) / 10;
    s = (Number.isInteger(rounded) ? rounded : rounded.toFixed(1)) + 'K';
  } else {
    s = fmt(n);
  }
  return (neg ? '-' : '') + s;
}

/* ================= DERIVED ================= */
function totals() {
  let income = 0, expense = 0;
  state.txns.forEach(t => t.type === 'income' ? income += t.amount : expense += t.amount);
  return { income, expense, net: income - expense, balance: state.startingBalance + income - expense };
}

function getBudgetForCat(cat) {
  if (state.budgetMode === 'percentage' && !(state.budgetFixedOverrides || {})[cat]) {
    const income = periodTotals().income || 0;
    const pct = state.budgetsPercentage[cat] || 0;
    return (income * pct) / 100;
  }
  return state.budgets[cat] || 0;
}

function spentByCat(cat) {
  return state.txns.filter(t => t.type === 'expense' && t.cat === cat).reduce((s, t) => s + t.amount, 0);
}

function spentByCatThisMonth(cat) {
  const now = new Date();
  const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  return state.txns.filter(t => t.type === 'expense' && t.cat === cat && t.date.slice(0, 7) === currentMonth).reduce((s, t) => s + t.amount, 0);
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
  if (state.screen === 'auth') {
    c.innerHTML = renderAuth();
    navWrap.innerHTML = '';
    return;
  }
  if (state.screen === 'setup') {
    c.innerHTML = renderSetup();
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
  else if (state.screen === 'txnDetail') html = renderTxnDetail();
  else if (state.screen === 'reviewTxns') html = renderReviewTransactions();
  else if (state.screen === 'achievements') html = renderAchievements();

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
  if (state.selectedBadgeId) modalHtml += renderBadgeModal();
  if (state.showResetModal) modalHtml += renderResetModal();
  if (state.showEditAccount) modalHtml += renderEditAccountModal();
  if (state.showDeleteAccountModal) modalHtml += renderDeleteAccountModal();
  if (state.showFundGoal) modalHtml += renderFundGoalModal();
  if (state.showAutoSplit) modalHtml += renderAutoSplitModal();

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
                   state.showProfileEditor || state.showAddSub || state.showEditSub || 
                   !!state.selectedBadgeId || state.showResetModal || state.showEditAccount ||
                   state.showDeleteAccountModal;
  
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
      <button class="graph-btn ${state.graphType === 'trend' ? 'active' : ''}" onclick="setGraphType('trend')" style="font-size:11px;">Safe to Spend</button>
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
    const countByCategory = {};
    const expenseTxns = filteredTxns.filter(t => t.type === 'expense');
    expenseTxns.forEach(t => {
      spentByCategory[t.cat] = (spentByCategory[t.cat] || 0) + t.amount;
      countByCategory[t.cat] = (countByCategory[t.cat] || 0) + 1;
    });
    
    const totalExpense = expenseTxns.reduce((s, t) => s + t.amount, 0);
    const sorted = Object.entries(spentByCategory).sort((a, b) => b[1] - a[1]);
    
    topSection = '<div style="display:flex;flex-direction:column;gap:4px;">';
    sorted.slice(0, 7).forEach(([cat, spent]) => {
      const pct = totalExpense > 0 ? Math.round((spent / totalExpense) * 100) : 0;
      const barPct = totalExpense > 0 ? (spent / totalExpense) * 100 : 0;
      const count = countByCategory[cat];
      const color = CAT_COLOR[cat] || '#6b7280';
      const iconKey = CAT_ICON[cat] || 'misc';
      topSection += `
      <div style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:7px;">
          <div style="width:34px;height:34px;border-radius:50%;background:${color}22;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:${color};">${ICON[iconKey]}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:600;">${cat || 'Uncategorised'}</div>
            <div style="font-size:11px;color:var(--cream-dim);">${count} transaction${count !== 1 ? 's' : ''}</div>
          </div>
          <div style="text-align:right;flex-shrink:0;">
            <div style="font-size:13px;font-weight:700;">-${cur()}${fmt(spent)}</div>
            <div style="font-size:11px;color:var(--cream-dim);">${pct}%</div>
          </div>
        </div>
        <div style="height:5px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden;margin-left:46px;">
          <div class="progress-fill" data-target="${barPct.toFixed(1)}%" style="height:100%;background:${color};border-radius:3px;opacity:0.8;"></div>
        </div>
      </div>`;
    });
    topSection += '</div>';
  } else if (state.graphType === 'trend') {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const todayDay = now.getDate();
    const daysLeft = daysInMonth - todayDay;

    // This month's income and expenses
    const monthTxns = state.txns.filter(t => {
      const d = new Date(t.date + 'T00:00:00');
      return d.getFullYear() === year && d.getMonth() === month;
    });
    const monthIncome = monthTxns.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const monthExpense = monthTxns.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const goalsSaved = state.goals.reduce((s, g) => s + g.saved, 0);

    // Safe to spend = total budget allocation
    const totalBudget = Object.keys(state.budgets).reduce((s, cat) => s + getBudgetForCat(cat), 0);
    const safeToSpend = Math.max(0, totalBudget - monthExpense);
    const dailySafe = daysLeft > 0 ? safeToSpend / daysLeft : 0;

    // Weekly spending bars (last 5 weeks)
    const weeks = [];
    for (let w = 4; w >= 0; w--) {
      const weekStart = new Date(now);
      weekStart.setDate(now.getDate() - (w * 7) - now.getDay());
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      const label = w === 0 ? 'This wk' : w === 1 ? 'Last wk' : weekStart.toLocaleDateString('en-AU', { day: 'numeric', month: 'short' });
      const spent = state.txns.filter(t => {
        const d = new Date(t.date + 'T00:00:00');
        return t.type === 'expense' && d >= weekStart && d <= weekEnd;
      }).reduce((s, t) => s + t.amount, 0);
      weeks.push({ label, spent, isCurrent: w === 0 });
    }
    const maxWeekSpend = Math.max(...weeks.map(w => w.spent), 1);
    const avgWeekly = weeks.slice(0, 4).reduce((s, w) => s + w.spent, 0) / 4;

    topSection = `
    <!-- Safe to Spend card -->
    <div style="background:rgba(127,185,138,0.12);border:1px solid rgba(127,185,138,0.25);border-radius:14px;padding:16px;margin-bottom:16px;">
      <div style="font-size:11px;color:var(--cream-dim);margin-bottom:2px;">Safe to spend</div>
      <div style="font-size:30px;font-weight:700;color:${safeToSpend < 500 ? '#ef4444' : 'var(--income)'};">${cur()}${fmt(safeToSpend)}</div>
      <div style="font-size:11px;color:var(--cream-dim);margin-top:4px;">${cur()}${fmt(dailySafe.toFixed(0))}/day · ${daysLeft} days left this month</div>
      <div style="display:flex;gap:12px;margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08);">
        <div style="flex:1;text-align:center;">
          <div style="font-size:10px;color:var(--cream-dim);">Earned</div>
          <div style="font-size:13px;font-weight:600;color:var(--income);">+${cur()}${fmt(monthIncome)}</div>
        </div>
        <div style="width:1px;background:rgba(255,255,255,0.08);"></div>
        <div style="flex:1;text-align:center;">
          <div style="font-size:10px;color:var(--cream-dim);">Spent</div>
          <div style="font-size:13px;font-weight:600;color:var(--expense);">-${cur()}${fmt(monthExpense)}</div>
        </div>
        <div style="width:1px;background:rgba(255,255,255,0.08);"></div>
        <div style="flex:1;text-align:center;">
          <div style="font-size:10px;color:var(--cream-dim);">In Goals</div>
          <div style="font-size:13px;font-weight:600;color:var(--cream);">${cur()}${fmt(goalsSaved)}</div>
        </div>
      </div>
    </div>

    <!-- Weekly spending bars -->
    <div style="font-size:12px;font-weight:600;margin-bottom:10px;">Weekly Spending</div>
    <div style="display:flex;align-items:flex-end;gap:6px;height:80px;margin-bottom:6px;">
      ${weeks.map(w => {
        const pct = Math.max(6, (w.spent / maxWeekSpend) * 100);
        const isOver = w.spent > avgWeekly * 1.2;
        return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:0;height:100%;justify-content:flex-end;">
          <div style="width:100%;height:${pct}%;background:${isOver ? 'rgba(201,107,92,0.7)' : w.isCurrent ? 'rgba(127,185,138,0.9)' : 'rgba(127,185,138,0.45)'};border-radius:4px 4px 0 0;min-height:4px;"></div>
        </div>`;
      }).join('')}
    </div>
    <div style="display:flex;gap:6px;margin-bottom:8px;">
      ${weeks.map(w => `<div style="flex:1;text-align:center;font-size:9px;color:${w.isCurrent ? 'var(--cream)' : 'var(--cream-dim)'};font-weight:${w.isCurrent ? '600' : '400'};overflow:hidden;">${w.label}</div>`).join('')}
    </div>
    <div style="font-size:11px;color:var(--cream-dim);">Avg/week: <strong style="color:var(--cream)">${cur()}${fmt(avgWeekly)}</strong> · Red = above average</div>`;
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
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const startDate = startOfMonth.toISOString().split('T')[0];
    const endDate = endOfMonth.toISOString().split('T')[0];
    return state.txns.filter(t => t.date >= startDate && t.date <= endDate);
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
  
  let rows = sortedList(bankTxns);
  if (state.bankFilterCat) rows = rows.filter(tx => tx.cat === state.bankFilterCat);
  if (state.bankFilterType === 'income') rows = rows.filter(tx => tx.type === 'income');
  else if (state.bankFilterType === 'expense') rows = rows.filter(tx => tx.type === 'expense');
  if (state.bankSearchQuery) rows = rows.filter(tx => (tx.desc || tx.cat).toLowerCase().includes(state.bankSearchQuery.toLowerCase()));

  const expensesByCategory = {};
  bankTxns.filter(t => t.type === 'expense').forEach(t => {
    expensesByCategory[t.cat] = (expensesByCategory[t.cat] || 0) + t.amount;
  });

  const periodIncome = bankTxns.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const periodExpense = bankTxns.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const net = periodIncome - periodExpense;

  // Build transaction list grouped by date
  let listHtml = '';
  if (rows.length === 0) {
    listHtml = `<div style="text-align:center;padding:40px 20px;color:var(--cream-dim);font-size:13px;">No transactions found</div>`;
  } else {
    let lastDate = null;
    rows.forEach((tx, i) => {
      if (tx.date !== lastDate) {
        if (lastDate !== null) listHtml += `</div>`;
        listHtml += `<div class="txn-group-label">${dmy(tx.date)}</div><div class="txn-group">`;
        lastDate = tx.date;
      }
      const iconKey = CAT_ICON[tx.cat] || 'misc';
      const color = CAT_COLOR[tx.cat] || (tx.type === 'income' ? '#10b981' : '#6b7280');
      const isSelected = state.selectedTxns.includes(tx.id);
      
      if (state.bulkDeleteMode) {
        listHtml += `
        <button class="txn-row2" style="background:${isSelected ? 'rgba(255,255,255,0.08)' : 'transparent'}" onclick="toggleTxnSelection(${tx.id})">
          <input type="checkbox" ${isSelected ? 'checked' : ''} style="margin-right:8px;cursor:pointer;width:18px;height:18px;">
          <div class="txn-icon2" style="background:${color}18;color:${color};">
            ${ICON[iconKey]}
          </div>
          <div class="txn-mid">
            <div class="txn-desc2">${escapeHtml(tx.desc || tx.cat)}</div>
            <div class="txn-cat2">${tx.cat || 'Uncategorised'}</div>
          </div>
          <div class="txn-amt2 ${tx.type}">${tx.type === 'income' ? '+' : '-'}${cur()}${fmt(tx.amount)}</div>
        </button>`;
      } else {
        listHtml += `
        <button class="txn-row2" onclick="openTxnDetail(${tx.id})">
          <div class="txn-icon2" style="background:${color}18;color:${color};">
            ${ICON[iconKey]}
          </div>
          <div class="txn-mid">
            <div class="txn-desc2">${escapeHtml(tx.desc || tx.cat)}</div>
            <div class="txn-cat2">${tx.cat || 'Uncategorised'}</div>
          </div>
          <div class="txn-amt2 ${tx.type}">${tx.type === 'income' ? '+' : '-'}${cur()}${fmt(tx.amount)}</div>
        </button>`;
      }
    });
    if (lastDate !== null) listHtml += `</div>`;
  }

  const periodLabel = state.bankPeriod === 'thisMonth' ? 'This Month' : state.bankPeriod === 'lastMonth' ? 'Last Month' : state.bankPeriod === 'year' ? 'This Year' : 'All Time';

  return `
  <!-- Hero balance card -->
  <div class="bank-hero-card">
    <div class="bank-hero-top">
      <div>
        <div class="bank-hero-label">${state.balanceHidden ? '••••••' : 'Total Balance'}</div>
        <div class="bank-hero-balance" id="bank-balance">${state.balanceHidden ? '••••••' : cur() + ' ' + fmt(t.balance)}</div>
      </div>
      <button onclick="toggleBalanceVisibility()" style="background:rgba(255,255,255,0.08);border:none;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--cream-dim);flex-shrink:0;">${state.balanceHidden ? ICON.eyeOff : ICON.eye}</button>
    </div>
    <div class="bank-hero-stats">
      <div class="bank-stat">
        <div class="bank-stat-label">↑ Income</div>
        <div class="bank-stat-val income">${cur()}${fmt(periodIncome)}</div>
      </div>
      <div class="bank-stat-divider"></div>
      <div class="bank-stat">
        <div class="bank-stat-label">↓ Expenses</div>
        <div class="bank-stat-val expense">${cur()}${fmt(periodExpense)}</div>
      </div>
      <div class="bank-stat-divider"></div>
      <div class="bank-stat">
        <div class="bank-stat-label">Net</div>
        <div class="bank-stat-val" style="color:${net>=0?'var(--income)':'var(--expense)'};">${net>=0?'+':''}${cur()}${fmt(Math.abs(net))}</div>
      </div>
    </div>
  </div>

  <!-- Pie chart card -->
  ${Object.keys(expensesByCategory).length > 0 ? `
  <div class="card" style="margin-bottom:14px;padding:14px 16px;">
    <div style="font-size:12px;font-weight:600;color:var(--cream-dim);margin-bottom:10px;text-transform:uppercase;letter-spacing:0.5px;">Spending Breakdown</div>
    ${categoryPieChart(expensesByCategory)}
  </div>` : ''}

  <!-- Search -->
  <div class="bank-search-wrap">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="color:var(--cream-dim);flex-shrink:0;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    <input type="text" placeholder="Search transactions..." value="${state.bankSearchQuery}" oninput="searchTransactions(this.value)" class="bank-search-input">
    ${state.bankSearchQuery ? `<button onclick="searchTransactions('')" style="background:none;border:none;color:var(--cream-dim);cursor:pointer;padding:0;display:flex;align-items:center;width:16px;height:16px;">${ICON.x}</button>` : ''}
  </div>

  <!-- Filter bar -->
  <div class="bank-filter-bar">
    <div class="category-filter">
      <button class="bank-chip ${state.bankFilterType!=='all'?'active':''}" onclick="toggleBankTypeFilter()">
        ${state.bankFilterType==='all'?'All':state.bankFilterType==='income'?'Income':'Expense'} ${ICON.chevron}
      </button>
      <div class="filter-menu" id="bank-type-menu" style="display:none;">
        <button onclick="setBankFilterType('all')" class="${state.bankFilterType==='all'?'active':''}">All</button>
        <button onclick="setBankFilterType('income')" class="${state.bankFilterType==='income'?'active':''}">Income</button>
        <button onclick="setBankFilterType('expense')" class="${state.bankFilterType==='expense'?'active':''}">Expense</button>
      </div>
    </div>
    <div class="category-filter">
      <button class="bank-chip ${state.bankFilterCat?'active':''}" onclick="toggleCategoryFilter()">
        ${state.bankFilterCat || 'Category'} ${ICON.chevron}
      </button>
      <div class="filter-menu" id="cat-filter-menu" style="display:none;">
        <button onclick="setCategoryFilter(null)">All Categories</button>
        ${Object.keys(expensesByCategory).map(cat => `<button onclick="setCategoryFilter('${cat}')">${cat}</button>`).join('')}
      </div>
    </div>
    <div class="category-filter">
      <button class="bank-chip" onclick="toggleBankPeriodFilter()">${periodLabel} ${ICON.chevron}</button>
      <div class="filter-menu" id="bank-period-menu" style="display:none;">
        <button onclick="setBankPeriod('thisMonth')">This Month</button>
        <button onclick="setBankPeriod('lastMonth')">Last Month</button>
        <button onclick="setBankPeriod('year')">This Year</button>
        <button onclick="setBankPeriod('allTime')">All Time</button>
      </div>
    </div>
  </div>

  <!-- Bulk Delete Toolbar -->
  ${state.bulkDeleteMode ? `
  <div style="display:flex;gap:8px;margin-bottom:16px;padding:12px;background:rgba(239,68,68,0.12);border-radius:8px;align-items:center;">
    <span style="flex:1;font-size:13px;font-weight:600;color:var(--expense);">${state.selectedTxns.length} selected</span>
    <button onclick="toggleBulkDelete()" style="background:none;border:none;color:var(--cream-dim);cursor:pointer;padding:6px 12px;">${ICON.x} Cancel</button>
    <button onclick="deleteBulkTxns()" style="background:var(--expense);color:white;border:none;cursor:pointer;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:600;">${ICON.trash} Delete</button>
  </div>
  ` : `
  <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;align-items:center;">
    <button onclick="toggleBulkDelete()" style="background:none;border:1px solid rgba(255,255,255,0.12);color:var(--cream-dim);cursor:pointer;padding:8px 12px;border-radius:6px;font-size:12px;font-weight:600;display:flex;align-items:center;gap:6px;white-space:nowrap;">${ICON.trash} Bulk Delete</button>
    ${getUnreviewedTransactions().length > 0 ? `
    <button onclick="startReviewMode()" style="background:rgba(59,130,246,0.12);border:1px solid rgba(59,130,246,0.25);color:#3b82f6;cursor:pointer;padding:8px 12px;border-radius:6px;font-size:12px;font-weight:600;display:flex;align-items:center;gap:6px;white-space:nowrap;">${ICON.arrowUp} Review (${getUnreviewedTransactions().length})</button>
    ` : ''}
  </div>
  `}

  <!-- Transactions -->
  <div class="txn-feed">${listHtml}</div>
  <div style="height:8px;"></div>
  `;
}

function categoryPieChart(expensesByCategory) {
  const total = Object.values(expensesByCategory).reduce((a, b) => a + b, 0);
  if (total === 0) return `<div class="dim" style="text-align:center;padding:20px;">No expenses this period</div>`;
  
  const colors = ['#7fb98a','#f5a962','#e07a7a','#6baed6','#a78bfa','#f59e0b','#10b981','#ec4899'];
  const entries = Object.entries(expensesByCategory).sort((a, b) => b[1] - a[1]);
  const R = 70, r = 44, cx = 100, cy = 100;

  let svg = `<svg width="160" height="160" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">`;

  if (entries.length === 1) {
    // Single category — full donut circle
    svg += `<circle cx="${cx}" cy="${cy}" r="${(R+r)/2}" fill="none" stroke="${colors[0]}" stroke-width="${R-r}" opacity="0.9"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="rgba(0,0,0,0.2)"/>`;
  } else {
    let currentAngle = -90;
    entries.forEach((entry, i) => {
      const [cat, amount] = entry;
      const sliceAngle = (amount / total) * 360;
      const sa = currentAngle * Math.PI / 180;
      const ea = (currentAngle + sliceAngle - 0.5) * Math.PI / 180;
      const x1o = cx + R * Math.cos(sa), y1o = cy + R * Math.sin(sa);
      const x2o = cx + R * Math.cos(ea), y2o = cy + R * Math.sin(ea);
      const x1i = cx + r * Math.cos(ea), y1i = cy + r * Math.sin(ea);
      const x2i = cx + r * Math.cos(sa), y2i = cy + r * Math.sin(sa);
      const large = sliceAngle > 180 ? 1 : 0;
      svg += `<path d="M${x1o},${y1o} A${R},${R} 0 ${large} 1 ${x2o},${y2o} L${x1i},${y1i} A${r},${r} 0 ${large} 0 ${x2i},${y2i} Z" fill="${colors[i % colors.length]}" opacity="0.9"/>`;
      currentAngle += sliceAngle;
    });
    svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="rgba(0,0,0,0.2)"/>`;
  }

  // Centre label
  const topCat = entries[0];
  const topPct = Math.round((topCat[1] / total) * 100);
  svg += `<text x="${cx}" y="${cy - 6}" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="16" font-weight="700" font-family="Poppins,sans-serif">${topPct}%</text>`;
  svg += `<text x="${cx}" y="${cy + 10}" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="9" font-family="Poppins,sans-serif">${topCat[0].slice(0,10)}</text>`;
  svg += `</svg>`;

  let legend = '<div class="pie-legend-horizontal">';
  entries.slice(0, 5).forEach((entry, i) => {
    const [cat, amount] = entry;
    const pct = Math.round((amount / total) * 100);
    legend += `<div class="legend-item-large"><span class="legend-color" style="background:${colors[i % colors.length]};border-radius:3px;"></span><span>${cat} <span style="opacity:0.6;">${pct}%</span></span></div>`;
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
    state.selectedTxnId = null;
    // Return to bank page if we were in txnDetail, otherwise stay
    if (state.screen === 'txnDetail') state.screen = 'bank';
    showToast('Transaction deleted', 'success', 2000);
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
        return spentByCatThisMonth(b) - spentByCatThisMonth(a); // High to low
      } else if (state.budgetSort === 'name') {
        return a.localeCompare(b);
      } else {
        return state.budgets[b] - state.budgets[a]; // High to low
      }
    });
    
    cardsHtml = `<div class="grid2">` + sortedCats.map(cat => {
      const budget = getBudgetForCat(cat);
      
      const spent = spentByCatThisMonth(cat);
      const remaining = budget - spent;
      const pct = budget > 0 ? Math.round((spent / budget) * 100) : 0;
      const barColor = pct >= 100 ? 'var(--red-bar)' : pct >= 80 ? 'var(--amber-bar)' : 'var(--green-bar)';
      
      return `
      <div class="b-card" onclick="openEditBudget('${cat}')">
        <div class="b-name">${cat}${state.budgetMode === 'percentage' && (state.budgetFixedOverrides||{})[cat] ? ' <span style="font-size:9px;opacity:0.7;">fixed</span>' : ''}</div>

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
      <button onclick="openAutoSplitModal()" style="width:100%;margin-top:12px;background:rgba(127,185,138,0.15);border:1px solid rgba(127,185,138,0.3);color:var(--income);padding:9px;border-radius:10px;font-size:12px;font-family:'Poppins',sans-serif;cursor:pointer;font-weight:600;display:flex;align-items:center;justify-content:center;gap:6px;"><span style="display:flex;width:14px;height:14px;">${ICON.zap}</span> Auto-split income into goals</button>
    </div>`;
    
    cardsHtml = summaryCard + `<div class="grid2">` + sortedGoals.map(g => {
      const pct = g.goal > 0 ? Math.round((g.saved / g.goal) * 100) : 0;
      const remaining = Math.max(0, g.goal - g.saved);
      const plant = goalPlantSVG(pct);
      return `
      <div class="b-card goal-card" onclick="openEditGoal(${g.id})">
        <div class="b-name">${escapeHtml(g.name)}</div>
        <button class="b-card-delete" onclick="deleteGoal(${g.id}); event.stopPropagation();">${ICON.trash}</button>
        <div style="display:flex;justify-content:center;margin:6px 0;">${plant}</div>
        <div style="display:flex;gap:4px;margin-top:2px;">
          <div style="flex:1;min-width:0;">
            <div style="font-size:10px;color:var(--cream-dim);">Goal</div>
            <div class="b-stats-val" style="font-size:13px;white-space:nowrap;">${cur()}${fmtCompact(g.goal)}</div>
          </div>
          <div style="flex:1;min-width:0;text-align:right;">
            <div style="font-size:10px;color:var(--cream-dim);">Saved</div>
            <div class="b-stats-val" style="font-size:clamp(10px,3vw,13px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${cur()}${fmt(g.saved)}</div>
          </div>
        </div>
        <div class="b-remaining-label">Remaining:</div>
        <div class="b-remaining-val">${cur()}${fmt(remaining)}</div>
        <div class="progress-track"><div class="progress-fill" data-target="${Math.min(pct, 100)}%" style="background:var(--green-bar);"></div></div>
        <div class="progress-pct">${pct}%</div>
        <button onclick="openFundGoalModal(${g.id});event.stopPropagation();" style="width:100%;margin-top:8px;background:rgba(127,185,138,0.15);border:1px solid rgba(127,185,138,0.3);color:var(--income);padding:6px;border-radius:8px;font-size:10px;font-family:'Poppins',sans-serif;cursor:pointer;font-weight:600;display:flex;align-items:center;justify-content:center;gap:4px;"><span style="display:flex;width:12px;height:12px;">${ICON.plus}</span> Add Funds</button>
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
        ${isBudget ? `<button class="icon-btn" onclick="showMobileBudgetHistory()" title="Budget History">${ICON.calendar}</button>` : ''}
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

function makeBudgetFixed(cat) {
  // Convert this budget from percentage to a fixed dollar amount based on last month's income
  const pt = periodTotals();
  const income = pt.income || 0;
  const pct = state.budgetsPercentage[cat] || 0;
  const fixedAmt = Math.round((pct / 100) * income);
  delete state.budgetsPercentage[cat];
  state.budgets[cat] = fixedAmt;
  state.showEditBudget = false;
  state.editBudgetData = null;
  showToast(`${cat} set to fixed ${cur()}${fmt(fixedAmt)}`, 'success', 2500);
  saveState();
  render();
}

function saveEditBudget() {
  const nameInput = document.getElementById('edit-budget-name');
  if (!nameInput) return;
  
  const oldCat = state.editBudgetData.cat;
  const newName = nameInput.value.trim();
  const modeOverride = document.getElementById('budget-mode-override')?.value;
  const overrideFixed = modeOverride === 'fixed';
  const isPercentage = state.budgetMode === 'percentage' && !overrideFixed;
  // In fixed mode, there's no toggle element - always use edit-budget-amount-fixed
  // In percentage mode with override, use edit-budget-amount-fixed
  // In percentage mode without override, use edit-budget-amount-pct
  let amountInput;
  if (isPercentage) {
    amountInput = document.getElementById('edit-budget-amount-pct');
  } else {
    amountInput = document.getElementById('edit-budget-amount-fixed');
  }
  if (!amountInput) return;
  const newAmount = parseFloat(amountInput.value);
  
  if (!newName || !newAmount || newAmount < 0) {
    showToast(`Please enter a valid name and ${isPercentage ? 'percentage' : 'amount'}`, 'error', 3000);
    return;
  }
  
  if (isPercentage && newAmount > 100) {
    showToast('Percentage cannot exceed 100%', 'error', 3000);
    return;
  }
  
  // Check total across all budgets won't exceed 100%
  if (isPercentage) {
    const otherTotal = Object.entries(state.budgetsPercentage)
      .filter(([k]) => k !== oldCat && k !== newName)
      .reduce((s, [,v]) => s + (v || 0), 0);
    if (otherTotal + newAmount > 100) {
      showToast(`Total budget % would be ${otherTotal + newAmount}% — exceeds 100%`, 'error', 3500);
      return;
    }
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
      } else {
        if (!state.budgetFixedOverrides) state.budgetFixedOverrides = {};
        state.budgetFixedOverrides[newName] = true;
        delete (state.budgetFixedOverrides || {})[oldCat];
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
        // Per-category fixed override in percentage mode
        if (!state.budgetFixedOverrides) state.budgetFixedOverrides = {};
        state.budgetFixedOverrides[oldCat] = true;
        state.budgets[oldCat] = newAmount;
      }
    }
    showToast(`Budget updated!`, 'success', 2500);
  }
  
  state.showEditBudget = false;
  state.editBudgetData = null;
  state._budgetEdited = true;
  saveState();
  render();
  setTimeout(() => checkAchievements(), 400);
}

function setBudgetEditMode(mode) {
  document.getElementById('budget-mode-override').value = mode;
  const isPct = mode === 'pct';
  document.getElementById('pct-field').style.display = isPct ? '' : 'none';
  document.getElementById('fixed-field').style.display = isPct ? 'none' : '';
  document.getElementById('toggle-pct').style.background = isPct ? 'rgba(127,185,138,0.25)' : 'rgba(255,255,255,0.07)';
  document.getElementById('toggle-pct').style.color = isPct ? 'var(--income)' : 'var(--cream-dim)';
  document.getElementById('toggle-fixed').style.background = isPct ? 'rgba(255,255,255,0.07)' : 'rgba(220,154,90,0.25)';
  document.getElementById('toggle-fixed').style.color = isPct ? 'var(--cream-dim)' : 'var(--orange)';
}

function renderEditBudgetModal() {
  const data = state.editBudgetData;
  if (!data) return '';
  
  const isNewBudget = !Object.keys(state.budgets).includes(data.cat);
  const isPercentage = state.budgetMode === 'percentage';
  const pctValue = state.budgetsPercentage[data.cat] || 0;
  
  // For percentage-mode budgets, allow overriding to fixed for this category
  const overrideFixed = state._budgetEditOverride === data.cat;
  const showAsFixed = !isPercentage || overrideFixed;

  return `
  <div class="modal-overlay">
    <div class="plain-modal">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <h3 style="margin:0;">${isNewBudget ? 'Add Budget' : 'Edit Budget'}</h3>
        ${!isNewBudget ? `<button onclick="deleteBudget('${data.cat}');closeEditBudget();" style="background:rgba(201,107,92,0.25);border:1px solid rgba(201,107,92,0.4);border-radius:8px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#e2a99a;flex-shrink:0;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg></button>` : ''}
      </div>
      <div class="field">
        <div class="field-label">Budget Name</div>
        <input type="text" id="edit-budget-name" value="${escapeHtml(data.name)}" placeholder="e.g. Shopping">
      </div>
      ${isPercentage && !isNewBudget ? `
      <div style="display:flex;gap:6px;margin-bottom:14px;">
        <button id="toggle-pct" onclick="setBudgetEditMode('pct')" style="flex:1;padding:8px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);font-family:'Poppins',sans-serif;font-size:12px;font-weight:600;cursor:pointer;background:rgba(127,185,138,0.25);color:var(--income);">% of Income</button>
        <button id="toggle-fixed" onclick="setBudgetEditMode('fixed')" style="flex:1;padding:8px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);font-family:'Poppins',sans-serif;font-size:12px;font-weight:600;cursor:pointer;background:rgba(255,255,255,0.07);color:var(--cream-dim);">Fixed ${cur()}</button>
      </div>
      <input type="hidden" id="budget-mode-override" value="pct">` : ''}
      <div class="field" id="pct-field" style="${isPercentage ? '' : 'display:none;'}">
        <div class="field-label">Percentage of Income</div>
        <div style="display:flex;align-items:center;gap:8px;"><input type="number" id="edit-budget-amount-pct" value="${pctValue}" placeholder="0" min="0" max="100" style="flex:1;"><span style="font-weight:600;">%</span></div>
      </div>
      <div class="field" id="fixed-field" style="${!isPercentage ? '' : 'display:none;'}">
        <div class="field-label">${isPercentage ? 'Fixed Amount' : 'Budget Amount'}</div>
        <div class="amount-wrap"><span>${cur()}</span><input type="number" id="edit-budget-amount-fixed" value="${!isPercentage ? data.amount : ''}" placeholder="0.00"></div>
      </div>
      <div class="modal-btn-row">
        <button class="cancel" onclick="state._budgetEditOverride=null;closeEditBudget()">Cancel</button>
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
  setTimeout(() => checkAchievements(), 400);
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
    cats.sort((a, b) => spentByCatThisMonth(b) - spentByCatThisMonth(a));
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

// ---- Manual Fund Goal ----
function openFundGoalModal(id) {
  state.fundGoalId = id;
  state.fundGoalAmount = '';
  state.showFundGoal = true;
  render();
}
function closeFundGoal() { state.showFundGoal = false; state.fundGoalId = null; render(); }
function saveFundGoal() {
  const amt = parseFloat(document.getElementById('fund-goal-amt')?.value);
  if (!amt || amt <= 0) { showToast('Enter a valid amount', 'error', 2500); return; }
  const g = state.goals.find(g => g.id === state.fundGoalId);
  if (g) {
    g.saved += amt;
    const pct = g.goal > 0 ? Math.round((g.saved / g.goal) * 100) : 0;
    if (g.saved >= g.goal) setTimeout(() => showToast(`🎉 Goal complete! "${g.name}" is fully funded!`, 'success', 4000), 300);
    else showToast(`Added ${cur()}${fmt(amt)} to ${g.name} (${pct}%)`, 'success', 2500);
    saveState();
    setTimeout(() => checkAchievements(), 400);
  }
  closeFundGoal();
  render();
}
function renderFundGoalModal() {
  if (!state.showFundGoal) return '';
  const g = state.goals.find(g => g.id === state.fundGoalId);
  if (!g) return '';
  const remaining = Math.max(0, g.goal - g.saved);
  return `
  <div class="modal-overlay">
    <div class="plain-modal">
      <h3>Add to "${escapeHtml(g.name)}"</h3>
      <div style="font-size:12px;color:var(--cream-dim);margin-bottom:16px;">Remaining: ${cur()}${fmt(remaining)}</div>
      <div class="amount-wrap" style="margin-bottom:16px;">
        <span>${cur()}</span>
        <input type="number" id="fund-goal-amt" placeholder="0.00" style="width:100%;">
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">
        ${[10,20,50,100,200].map(a => `<button onclick="document.getElementById('fund-goal-amt').value=${a};" style="flex:1;min-width:40px;background:rgba(127,185,138,0.15);border:1px solid rgba(127,185,138,0.3);color:var(--cream);padding:7px;border-radius:8px;font-size:12px;font-family:'Poppins',sans-serif;cursor:pointer;">${cur()}${a}</button>`).join('')}
      </div>
      <div class="modal-btn-row">
        <button class="cancel" onclick="closeFundGoal()">Cancel</button>
        <button class="confirm" onclick="saveFundGoal()">Add Funds</button>
      </div>
    </div>
  </div>`;
}

// ---- Auto-split income into goals ----
function openAutoSplitModal() {
  state.showAutoSplit = true;
  state.autoSplitIncome = '';
  render();
}
function closeAutoSplit() { state.showAutoSplit = false; render(); }
function renderAutoSplitModal() {
  if (!state.showAutoSplit) return '';
  const monthIncome = getPeriodTotals('thisMonth').income;
  const totalBudgetPct = Object.values(state.budgetsPercentage).reduce((a, b) => a + b, 0);
  const incomeInput = parseFloat(state.autoSplitIncome) || monthIncome;
  
  // Calculate leftover after budgets
  const budgetAmt = state.budgetMode === 'percentage' ? (incomeInput * totalBudgetPct / 100) : Object.values(state.budgets).reduce((a,b)=>a+b,0);
  const leftover = Math.max(0, incomeInput - budgetAmt);
  
  // Split leftover equally among goals (or by remaining needed)
  const activeGoals = state.goals.filter(g => g.saved < g.goal);
  const totalRemaining = activeGoals.reduce((s, g) => s + Math.max(0, g.goal - g.saved), 0);
  
  const splits = activeGoals.map(g => {
    const need = Math.max(0, g.goal - g.saved);
    const share = totalRemaining > 0 ? (need / totalRemaining) : (1 / activeGoals.length);
    return { goal: g, amt: Math.min(need, leftover * share) };
  });

  return `
  <div class="modal-overlay">
    <div class="plain-modal">
      <h3 style="display:flex;align-items:center;gap:8px;"><span style="display:flex;width:18px;height:18px;">${ICON.zap}</span> Auto-split into Goals</h3>
      <div style="font-size:12px;color:var(--cream-dim);margin-bottom:12px;">Splits leftover income (after budgets) proportionally across unfinished goals.</div>
      <div class="field-label">Income amount</div>
      <div class="amount-wrap" style="margin-bottom:12px;">
        <span>${cur()}</span>
        <input type="number" id="auto-split-income" placeholder="${fmt(monthIncome)}" value="${state.autoSplitIncome}" oninput="state.autoSplitIncome=this.value;render();" style="width:100%;">
      </div>
      <div style="background:rgba(255,255,255,0.05);border-radius:10px;padding:10px 12px;margin-bottom:14px;font-size:12px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span style="color:var(--cream-dim);">Budgets (${state.budgetMode==='percentage'?totalBudgetPct+'%':'fixed'})</span><span>-${cur()}${fmt(budgetAmt)}</span></div>
        <div style="display:flex;justify-content:space-between;border-top:1px solid rgba(255,255,255,0.08);padding-top:6px;font-weight:700;"><span>Available for goals</span><span style="color:var(--income);">${cur()}${fmt(leftover)}</span></div>
      </div>
      ${activeGoals.length === 0 ? `<div style="text-align:center;color:var(--cream-dim);padding:12px;">All goals are complete! 🎉</div>` : `
      <div style="font-size:11px;font-weight:600;color:var(--cream-dim);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px;">Allocation</div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:16px;">
        ${splits.map(s => `
          <div style="display:flex;justify-content:space-between;align-items:center;background:rgba(127,185,138,0.1);border-radius:8px;padding:8px 10px;">
            <span style="font-size:12px;">${escapeHtml(s.goal.name)}</span>
            <span style="font-size:13px;font-weight:700;color:var(--income);">+${cur()}${fmt(s.amt)}</span>
          </div>`).join('')}
      </div>`}
      <div class="modal-btn-row">
        <button class="cancel" onclick="closeAutoSplit()">Cancel</button>
        ${activeGoals.length > 0 ? `<button class="confirm" onclick="applyAutoSplit()">Apply</button>` : ''}
      </div>
    </div>
  </div>`;
}
function applyAutoSplit() {
  const incomeInput = parseFloat(state.autoSplitIncome) || getPeriodTotals('thisMonth').income;
  const totalBudgetPct = Object.values(state.budgetsPercentage).reduce((a,b)=>a+b,0);
  const budgetAmt = state.budgetMode === 'percentage' ? (incomeInput * totalBudgetPct / 100) : Object.values(state.budgets).reduce((a,b)=>a+b,0);
  const leftover = Math.max(0, incomeInput - budgetAmt);
  const activeGoals = state.goals.filter(g => g.saved < g.goal);
  const totalRemaining = activeGoals.reduce((s, g) => s + Math.max(0, g.goal - g.saved), 0);
  let totalAllocated = 0;
  activeGoals.forEach(g => {
    const need = Math.max(0, g.goal - g.saved);
    const share = totalRemaining > 0 ? (need / totalRemaining) : (1 / activeGoals.length);
    const amt = Math.min(need, leftover * share);
    g.saved += amt;
    totalAllocated += amt;
  });
  showToast(`${cur()}${fmt(totalAllocated)} split across ${activeGoals.length} goals`, 'success', 3000);
  state.showAutoSplit = false;
  saveState();
  setTimeout(() => checkAchievements(), 400);
  render();
}

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
  setTimeout(() => checkAchievements(), 400);
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
  const email = currentUser?.email || '';
  return `
  <div class="header-plain">Account</div>

  <!-- Profile card -->
  <div class="card" style="text-align:center;position:relative;margin-bottom:14px;">
    <button class="profile-edit-btn" onclick="openProfileEditor()" title="Edit profile">${ICON.edit}</button>
    <div class="avatar" style="${state.userAvatar ? `background-image:url(${state.userAvatar});background-size:cover;background-position:center;` : ''}">${!state.userAvatar ? ICON.account : ''}</div>
    <div style="font-size:16px;font-weight:700;margin-top:8px;">${escapeHtml(state.userName || 'Your Name')}</div>
    <div style="font-size:12px;color:var(--cream-dim);margin-top:2px;">${escapeHtml(state.userBio || 'Personal Finance Tracker')}</div>
    ${email ? `<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:6px;">${email}</div>` : ''}
  </div>

  <!-- Stats -->
  <div class="card" style="margin-bottom:14px;">
    <div class="dim" style="margin-bottom:10px;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">At a glance</div>
    <div class="row-between" style="margin-bottom:8px;"><span>Current balance</span><strong>${cur()}${fmt(t.balance)}</strong></div>
    <div class="row-between" style="margin-bottom:8px;"><span>Total income</span><strong style="color:var(--income);">${cur()}${fmt(t.income)}</strong></div>
    <div class="row-between" style="margin-bottom:8px;"><span>Total expense</span><strong style="color:var(--expense);">${cur()}${fmt(t.expense)}</strong></div>
    <div class="row-between"><span>Active goals</span><strong>${state.goals.length}</strong></div>
  </div>

  <!-- Quick links -->
  <div class="card settings-list" style="margin-bottom:14px;">
    <div class="s-row clickable" id="pwa-install-row" style="display:none;" onclick="triggerPWAInstall()"><span style="display:flex;align-items:center;gap:10px;"><span style="font-size:16px;">📲</span> Install as App</span>${ICON.chevron}</div>
    <div class="s-row clickable" onclick="goTo('subscriptions')"><span style="display:flex;align-items:center;gap:10px;"><span style="display:flex;width:18px;height:18px;">${ICON.subscription}</span> Subscriptions</span>${ICON.chevron}</div>
    <div class="s-row clickable" onclick="goTo('achievements')"><span style="display:flex;align-items:center;gap:10px;"><span style="display:flex;width:18px;height:18px;">${ICON.achievement}</span> Achievements</span>${ICON.chevron}</div>
  </div>

  <!-- Settings -->
  <div class="card settings-list" style="margin-bottom:14px;">
    <div style="font-size:11px;color:var(--cream-dim);text-transform:uppercase;letter-spacing:0.5px;padding:8px 0 4px;">App Settings</div>
    <div class="s-row clickable" onclick="openStartingBalanceEditor()"><span>Starting balance: <strong>${cur()}${fmt(state.startingBalance)}</strong></span>${ICON.chevron}</div>
    <div class="s-row">
      <span style="display:flex;align-items:center;gap:8px;">${ICON.bell} Notifications</span>
      <button class="switch ${state.notificationsOn ? 'on' : ''}" onclick="toggleNotifications()"><span class="knob"></span></button>
    </div>
    <div class="s-row">
      <span>Hide balance</span>
      <button class="switch ${state.balanceHidden ? 'on' : ''}" onclick="toggleBalanceHidden()"><span class="knob"></span></button>
    </div>
    <div class="s-row" onclick="openCurrencyDropdown()" style="position:relative;">
      <span>Currency: <strong>${state.currency}</strong></span>
      <div id="currency-dropdown" class="currency-dropdown" style="display:none;">
        ${CURRENCIES.map(c => `<div class="currency-option" onclick="setCurrency('${c}'); event.stopPropagation();">${c}</div>`).join('')}
      </div>
      ${ICON.chevron}
    </div>
    <div class="s-row">
      <span>Budget mode: <strong>${state.budgetMode === 'fixed' ? 'Fixed' : 'Income %'}</strong></span>
      <button class="switch ${state.budgetMode === 'percentage' ? 'on' : ''}" onclick="toggleBudgetMode()"><span class="knob"></span></button>
    </div>
  </div>

  <!-- Account actions -->
  <div class="card settings-list" style="margin-bottom:14px;">
    <div style="font-size:11px;color:var(--cream-dim);text-transform:uppercase;letter-spacing:0.5px;padding:8px 0 4px;">Account</div>
    <div class="s-row clickable" onclick="openEditAccountModal()"><span>Edit account details</span>${ICON.chevron}</div>
    <div class="s-row danger" onclick="resetData()"><span>Reset all data</span>${ICON.trash}</div>
    <div class="s-row danger" onclick="confirmDeleteAccount()"><span>Delete account</span>${ICON.trash}</div>
    <div class="s-row danger" onclick="signOut()" style="margin-top:4px;"><span>Sign out</span>${ICON.back}</div>
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

function openEditAccountModal() {
  state.showEditAccount = true;
  render();
}

function closeEditAccount() {
  state.showEditAccount = false;
  render();
}

function saveEditAccount() {
  const name = document.getElementById('edit-acc-name')?.value?.trim();
  const bio = document.getElementById('edit-acc-bio')?.value?.trim();
  if (!name) { showToast('Name cannot be empty', 'error', 2500); return; }
  state.userName = name;
  state.userBio = bio || '';
  state._nameChanged = true;
  showToast('Account details updated', 'success', 2500);
  state.showEditAccount = false;
  saveState();
  render();
}

function renderEditAccountModal() {
  if (!state.showEditAccount) return '';
  const email = currentUser?.email || '';
  return `
  <div class="modal-overlay">
    <div class="plain-modal">
      <h3>Edit Account</h3>
      <div class="field">
        <div class="field-label">Name</div>
        <input type="text" id="edit-acc-name" value="${escapeHtml(state.userName || '')}" placeholder="Your name">
      </div>
      <div class="field">
        <div class="field-label">Bio / tagline</div>
        <input type="text" id="edit-acc-bio" value="${escapeHtml(state.userBio || '')}" placeholder="e.g. Saving for my first home">
      </div>
      ${email ? `
      <div class="field">
        <div class="field-label">Email</div>
        <div style="font-size:13px;color:var(--cream-dim);padding:10px 0;">${email}</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.3);">Email is managed through your login. Use magic link to change.</div>
      </div>` : ''}
      <div class="field">
        <div class="field-label">Profile Picture</div>
        <div style="display:flex;align-items:center;gap:12px;margin-top:4px;">
          <div style="width:50px;height:50px;border-radius:50%;background:rgba(127,185,138,0.2);border:2px solid rgba(127,185,138,0.4);display:flex;align-items:center;justify-content:center;font-size:22px;overflow:hidden;flex-shrink:0;">
            ${state.userAvatar ? `<img src="${state.userAvatar}" style="width:100%;height:100%;object-fit:cover;">` : '👤'}
          </div>
          <input type="file" id="avatar-input" accept="image/*" onchange="handleAvatarUpload(this)" style="display:none;">
          <button onclick="document.getElementById('avatar-input').click();" style="background:rgba(127,185,138,0.2);border:1px solid rgba(127,185,138,0.3);color:var(--cream);padding:8px 14px;border-radius:8px;font-size:12px;font-family:'Poppins',sans-serif;cursor:pointer;">Change photo</button>
          ${state.userAvatar ? `<button onclick="state.userAvatar=null;render();" style="background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.3);color:#ef4444;padding:8px 10px;border-radius:8px;font-size:12px;font-family:'Poppins',sans-serif;cursor:pointer;">Remove</button>` : ''}
        </div>
      </div>
      <div class="modal-btn-row">
        <button class="cancel" onclick="closeEditAccount()">Cancel</button>
        <button class="confirm" onclick="saveEditAccount()">Save</button>
      </div>
    </div>
  </div>`;
}

async function confirmDeleteAccount() {
  state.showDeleteAccountModal = true;
  state.deleteAccountStep = 1;
  state.deleteAccountInput = '';
  render();
}

function renderDeleteAccountModal() {
  if (!state.showDeleteAccountModal) return '';
  const step = state.deleteAccountStep || 1;

  if (step === 1) {
    return `
    <div class="modal-overlay">
      <div class="plain-modal" style="text-align:center;">
        <div style="font-size:36px;margin-bottom:10px;">⚠️</div>
        <div style="font-size:16px;font-weight:700;margin-bottom:8px;">Delete Account?</div>
        <div style="font-size:12px;color:var(--cream-dim);line-height:1.7;margin-bottom:20px;">
          This will permanently delete all your data — transactions, goals, budgets, subscriptions, and achievements. This cannot be undone.
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <button onclick="state.deleteAccountStep=2;render();" style="width:100%;padding:12px;border-radius:12px;font-size:13px;font-family:'Poppins',sans-serif;cursor:pointer;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.3);color:#ef4444;font-weight:600;">I understand, continue</button>
          <button onclick="state.showDeleteAccountModal=false;render();" style="width:100%;padding:11px;border-radius:12px;font-size:13px;font-family:'Poppins',sans-serif;cursor:pointer;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--cream);">Cancel</button>
        </div>
      </div>
    </div>`;
  }

  return `
  <div class="modal-overlay">
    <div class="plain-modal" style="text-align:center;">
      <div style="font-size:36px;margin-bottom:10px;">💀</div>
      <div style="font-size:16px;font-weight:700;margin-bottom:8px;">Final Confirmation</div>
      <div style="font-size:12px;color:var(--cream-dim);line-height:1.7;margin-bottom:16px;">
        Type <strong style="color:#ef4444;">DELETE</strong> to permanently erase your account and all data.
      </div>
      <input type="text" id="delete-account-input" placeholder="Type DELETE" style="text-align:center;letter-spacing:3px;font-weight:700;font-size:14px;margin-bottom:16px;">
      <div style="display:flex;flex-direction:column;gap:8px;">
        <button onclick="executeDeleteAccount()" style="width:100%;padding:12px;border-radius:12px;font-size:13px;font-family:'Poppins',sans-serif;cursor:pointer;background:rgba(239,68,68,0.25);border:1px solid rgba(239,68,68,0.5);color:#ef4444;font-weight:700;">Delete Everything</button>
        <button onclick="state.showDeleteAccountModal=false;render();" style="width:100%;padding:11px;border-radius:12px;font-size:13px;font-family:'Poppins',sans-serif;cursor:pointer;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--cream);">Cancel</button>
      </div>
    </div>
  </div>`;
}

async function executeDeleteAccount() {
  const input = document.getElementById('delete-account-input')?.value?.trim();
  if (input !== 'DELETE') {
    const el = document.getElementById('delete-account-input');
    if (el) { el.classList.add('shake'); setTimeout(() => el.classList.remove('shake'), 500); }
    showToast('Type DELETE in capitals to confirm', 'error', 3000);
    return;
  }
  try {
    state.showDeleteAccountModal = false;
    showToast('Deleting your data...', 'info', 3000);
    // Delete all user data from database
    await db.from('user_data').delete().eq('id', currentUser.id);
    // Sign out the user
    await db.auth.signOut();
    // Note: deleting the auth user requires a server-side call (Edge Function or Supabase dashboard)
    showToast('Your data has been deleted. You have been signed out.', 'success', 5000);
  } catch(e) {
    console.error('Delete error:', e);
    showToast('Error deleting data — please try again', 'error', 3000);
    render();
  }
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
    state._balanceSet = true;
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
  if (name) { state.userName = name; state._nameChanged = true; }
  if (bio) state.userBio = bio;
  showToast('Profile updated', 'success', 2500);
  state.showProfileEditor = false;
  render();
  setTimeout(() => checkAchievements(), 400);
}

function resetData() {
  state.showResetModal = true;
  state.resetStep = 1;
  render();
}

function resetNext() {
  state.resetStep++;
  render();
}

function resetCancel() {
  state.showResetModal = false;
  state.resetStep = 0;
  render();
}

function resetConfirm() {
  state.txns = [];
  state.goals = [];
  state.startingBalance = 0;
  state.period = 'thisMonth';
  state.budgets = { 'Shopping': 150, 'Groceries': 300, 'Eating Out': 100, 'Health': 80, 'Transport': 200, 'Gifts': 400, 'Misc': 150 };
  state.subscriptions = [];
  state.unlockedBadges = [];
  state.badgeDates = {};
  state._budgetEdited = false;
  state._nameChanged = false;
  state._balanceSet = false;
  state._subAdded = false;
  displayedBalance = null;
  state.showResetModal = false;
  state.resetStep = 0;
  showToast('All data has been reset', 'info', 3000);
  saveState();
  render();
}

function renderResetModal() {
  const step = state.resetStep;

  const steps = [
    null, // step 0 unused
    {
      icon: '⚠️',
      title: 'Reset All Data?',
      body: 'This will permanently delete all your transactions, goals, budgets, subscriptions, and achievements. This cannot be undone.',
      cancel: 'Cancel',
      confirm: 'I understand, continue',
      confirmStyle: 'background:rgba(239,68,68,0.15);border-color:rgba(239,68,68,0.3);color:#ef4444;',
      onConfirm: 'resetNext()',
    },
    {
      icon: '🗑️',
      title: 'Are you sure?',
      body: 'Everything will be wiped — your balance, transaction history, goals progress, and all badges you\'ve earned.',
      cancel: 'No, keep my data',
      confirm: 'Yes, delete everything',
      confirmStyle: 'background:rgba(239,68,68,0.2);border-color:rgba(239,68,68,0.4);color:#ef4444;font-weight:700;',
      onConfirm: 'resetNext()',
    },
    {
      icon: '💀',
      title: 'Final warning',
      body: 'Type DELETE below to confirm you want to erase all your data permanently.',
      cancel: 'Cancel',
      confirm: 'Erase Everything',
      confirmStyle: 'background:rgba(239,68,68,0.3);border-color:rgba(239,68,68,0.5);color:#ef4444;font-weight:700;',
      onConfirm: 'checkResetConfirm()',
      input: true,
    },
  ];

  const s = steps[step];
  if (!s) return '';

  return `
  <div class="modal-overlay">
    <div class="plain-modal" style="text-align:center;">
      <div style="font-size:40px;margin-bottom:10px;">${s.icon}</div>
      <div style="font-size:16px;font-weight:700;margin-bottom:10px;">${s.title}</div>
      <div style="font-size:13px;color:var(--cream-dim);line-height:1.6;margin-bottom:18px;">${s.body}</div>
      ${s.input ? `<input type="text" id="reset-confirm-input" placeholder='Type DELETE to confirm' style="margin-bottom:16px;text-align:center;letter-spacing:2px;font-weight:700;">` : ''}
      <div style="display:flex;flex-direction:column;gap:8px;">
        <button onclick="${s.onConfirm}" style="width:100%;padding:13px;border-radius:12px;font-size:13px;font-family:'Poppins',sans-serif;cursor:pointer;border:1px solid;${s.confirmStyle}">${s.confirm}</button>
        <button onclick="resetCancel()" style="width:100%;padding:11px;border-radius:12px;font-size:13px;font-family:'Poppins',sans-serif;cursor:pointer;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--cream);">${s.cancel}</button>
      </div>
    </div>
  </div>`;
}

function checkResetConfirm() {
  const input = document.getElementById('reset-confirm-input');
  if (input?.value?.trim().toUpperCase() === 'DELETE') {
    resetConfirm();
  } else {
    input?.classList.add('shake');
    setTimeout(() => input?.classList.remove('shake'), 500);
    showToast('Type DELETE (in caps) to confirm', 'error', 3000);
  }
}

/* ---------- Add Transaction ---------- */
function openAddTxn(type) {
  state.form = { type: type || 'expense', desc: '', amount: '', date: daysAgo(0), cat: '', moreOpen: false, allocate: false, allocateGoalId: null, splitGoals: [], splitMode: null };
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
    const budget = getBudgetForCat(f.cat);
    const spent = spentByCatThisMonth(f.cat);
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

  let primaryCats = [], moreCats = [], hasMore = false, splitRows = '', splits = [], totalPct = 0, incomeAmt = 0, pctColor = '';

  let bodyExtra = '';
  if (isExpense) {
    const budgetCats = Object.keys(state.budgets);
    const txnCats = [...new Set(state.txns.filter(t => t.type === 'expense' && t.cat && t.cat !== 'Subscription').map(t => t.cat))];
    const allCats = [...new Set([...budgetCats, ...txnCats])];
    // Sort by most-used first
    const catFreq = {};
    state.txns.filter(t => t.type === 'expense' && t.cat).forEach(t => { catFreq[t.cat] = (catFreq[t.cat] || 0) + 1; });
    allCats.sort((a, b) => (catFreq[b] || 0) - (catFreq[a] || 0));
    primaryCats = allCats.slice(0, 5);
    moreCats = allCats.slice(5);
    hasMore = moreCats.length > 0;
  } else {
    splits = f.splitGoals || [];
    totalPct = splits.reduce((sum, s) => sum + (parseFloat(s.pct) || 0), 0);
    incomeAmt = parseFloat(f.amount) || 0;
    pctColor = totalPct > 100 ? 'var(--red-bar)' : totalPct === 100 ? 'var(--green-bar)' : 'var(--amber-bar)';

    splitRows = splits.map((s, i) => {
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
        <button onclick="removeSplit(${i})" style="background:none;border:none;color:var(--cream-dim);cursor:pointer;padding:4px;display:flex;align-items:center;width:20px;height:20px;flex-shrink:0;">${ICON.x}</button>
      </div>`;
    }).join('');
  }

  return `
  <div class="form-page ${themeClass}">

    <!-- Header -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;">
      <button class="back-btn" onclick="goTo('home')">${ICON.back}</button>
      <div style="font-size:16px;font-weight:700;">New Transaction</div>
      <button class="icon-btn" onclick="showMobileUploadTransactionsModal()" title="Import" style="background:none;border:none;color:var(--cream);cursor:pointer;padding:4px;display:flex;align-items:center;width:36px;height:36px;">${ICON.arrowUp}</button>
    </div>

    <!-- Type toggle - large pill -->
    <div class="txn-type-toggle">
      <button class="txn-type-btn ${!isExpense ? 'income-active' : ''}" onclick="setTxnType('income')">
        <span style="font-size:16px;">↑</span> Income
      </button>
      <button class="txn-type-btn ${isExpense ? 'expense-active' : ''}" onclick="setTxnType('expense')">
        <span style="font-size:16px;">↓</span> Expense
      </button>
    </div>

    <!-- Amount - big and central -->
    <div class="txn-amount-hero">
      <div class="txn-currency-sym">${cur()}</div>
      <input type="number" id="f-amount" placeholder="0.00" value="${f.amount}" oninput="state.form.amount=this.value" class="txn-amount-input">
    </div>

    <!-- Description -->
    <div class="txn-field-group">
      <div class="txn-field-row">
        <div class="txn-field-icon">${ICON.pencil}</div>
        <input type="text" id="f-desc" placeholder="Description" value="${escapeHtml(f.desc)}" oninput="state.form.desc=this.value" class="txn-field-input">
      </div>
      <div class="txn-field-row">
        <div class="txn-field-icon">${ICON.calendar}</div>
        <input type="date" id="f-date" value="${f.date}" onchange="state.form.date=this.value" class="txn-field-input">
      </div>
    </div>

    <!-- Category -->
    <div class="txn-section-label">Category</div>
    <div class="cat-grid" style="margin-bottom:${isExpense && f.moreOpen ? '4px' : '14px'};">
      ${isExpense ? `
        ${primaryCats.map(c => `<button class="cat-chip ${f.cat === c ? 'selected' : ''}" onclick="setTxnCat('${c}')">${c}</button>`).join('')}
        <button class="cat-chip ${f.cat === 'Subscription' ? 'selected' : ''}" onclick="setTxnCat('Subscription')">Subscription</button>
        ${hasMore ? `<button class="cat-chip" onclick="toggleMore()">${f.moreOpen ? 'Less ↑' : 'More ↓'}</button>` : ''}
      ` : `
        ${INCOME_CATS.map(c => `<button class="cat-chip ${f.cat === c ? 'selected' : ''}" onclick="setTxnCat('${c}')">${c}</button>`).join('')}
      `}
    </div>
    ${isExpense && hasMore ? `<div class="more-panel ${f.moreOpen ? 'open' : ''}" id="more-panel">
      ${moreCats.map(c => `<button class="cat-chip ${f.cat === c ? 'selected' : ''}" onclick="setTxnCat('${c}')">${c}</button>`).join('')}
    </div>` : ''}

    <!-- Budget info (expense only) -->
    ${budgetInfo}

    <!-- Goal split (income only) -->
    ${!isExpense ? (() => {
      const totalBudgetPct = Object.values(state.budgetsPercentage).reduce((a,b)=>a+b,0);
      const budgetDeduct = state.budgetMode === 'percentage'
        ? (incomeAmt * totalBudgetPct / 100)
        : Object.values(state.budgets).reduce((a,b)=>a+b,0);
      const leftover = Math.max(0, incomeAmt - budgetDeduct);
      const activeGoals = state.goals.filter(g => g.saved < g.goal);
      const totalNeed = activeGoals.reduce((s,g)=>s+Math.max(0,g.goal-g.saved),0);
      const autoPreview = activeGoals.map(g => {
        const need = Math.max(0,g.goal-g.saved);
        const share = totalNeed>0 ? need/totalNeed : 1/activeGoals.length;
        return { g, amt: Math.min(need, leftover*share) };
      });

      return `
      <div class="txn-section-label" style="margin-top:4px;">Save to Goals</div>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <button onclick="state.form.splitMode='manual';state.form.allocate=true;if(!state.form.splitGoals||!state.form.splitGoals.length)state.form.splitGoals=[{goalId:null,pct:''}];render();" style="flex:1;padding:10px;border-radius:12px;border:1.5px solid ${f.splitMode!=='auto'&&f.allocate?'rgba(127,185,138,0.6)':'rgba(255,255,255,0.1)'};background:${f.splitMode!=='auto'&&f.allocate?'rgba(127,185,138,0.15)':'rgba(255,255,255,0.04)'};color:var(--cream);font-size:12px;font-family:'Poppins',sans-serif;cursor:pointer;font-weight:600;display:flex;align-items:center;justify-content:center;gap:6px;">
          <span style="display:flex;width:14px;height:14px;">${ICON.pencil}</span> Manual %
        </button>
        <button onclick="state.form.splitMode='auto';state.form.allocate=true;render();" style="flex:1;padding:10px;border-radius:12px;border:1.5px solid ${f.splitMode==='auto'?'rgba(127,185,138,0.6)':'rgba(255,255,255,0.1)'};background:${f.splitMode==='auto'?'rgba(127,185,138,0.15)':'rgba(255,255,255,0.04)'};color:var(--cream);font-size:12px;font-family:'Poppins',sans-serif;cursor:pointer;font-weight:600;display:flex;align-items:center;justify-content:center;gap:6px;">
          <span style="display:flex;width:14px;height:14px;">${ICON.zap}</span> Auto-split
        </button>
        ${f.allocate ? `<button onclick="state.form.allocate=false;state.form.splitMode=null;state.form.splitGoals=[];render();" style="padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.04);color:var(--cream-dim);font-family:'Poppins',sans-serif;cursor:pointer;display:flex;align-items:center;width:36px;height:36px;justify-content:center;">${ICON.x}</button>` : ''}
      </div>

      ${f.allocate && f.splitMode !== 'auto' ? `
      <div class="allocate-panel open">
        ${splitRows}
        ${splits.length < activeGoals.length ? `<button onclick="addSplit()" style="width:100%;background:rgba(127,185,138,0.15);border:1px dashed rgba(127,185,138,0.4);color:var(--cream-dim);padding:8px;border-radius:10px;font-size:12px;cursor:pointer;margin-bottom:8px;">+ Add goal</button>` : ''}
        ${splits.length > 0 ? `
        <div style="display:flex;justify-content:space-between;padding:8px 0;border-top:1px solid rgba(255,255,255,0.08);">
          <span style="font-size:12px;color:var(--cream-dim);">Total allocated</span>
          <span style="font-size:13px;font-weight:700;color:${pctColor};">${totalPct}%${incomeAmt>0?` · ${cur()}${fmt(incomeAmt*totalPct/100)}`:''}</span>
        </div>
        ${totalPct>100?`<div style="font-size:11px;color:var(--red-bar);text-align:center;">Total exceeds 100%</div>`:''}` : ''}
      </div>` : ''}

      ${f.allocate && f.splitMode === 'auto' ? `
      <div class="allocate-panel open">
        <div style="background:rgba(0,0,0,0.15);border-radius:10px;padding:10px 12px;margin-bottom:10px;font-size:12px;">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span style="color:var(--cream-dim);">Income</span><span>${incomeAmt>0?cur()+fmt(incomeAmt):'Enter amount above'}</span></div>
          <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span style="color:var(--cream-dim);">Budgets (${state.budgetMode==='percentage'?totalBudgetPct+'%':'fixed'})</span><span>-${cur()}${fmt(budgetDeduct)}</span></div>
          <div style="display:flex;justify-content:space-between;border-top:1px solid rgba(255,255,255,0.08);padding-top:6px;font-weight:700;"><span>For goals</span><span style="color:var(--income);">${cur()}${fmt(leftover)}</span></div>
        </div>
        ${activeGoals.length===0?`<div style="color:var(--cream-dim);font-size:12px;text-align:center;padding:8px;">All goals complete! 🎉</div>`:`
        <div style="display:flex;flex-direction:column;gap:6px;">
          ${autoPreview.map(({g,amt})=>`
          <div style="display:flex;justify-content:space-between;align-items:center;background:rgba(127,185,138,0.1);border-radius:8px;padding:8px 10px;">
            <span style="font-size:12px;">${escapeHtml(g.name)}</span>
            <span style="font-size:13px;font-weight:700;color:var(--income);">${incomeAmt>0?`+${cur()}${fmt(amt)}`:'–'}</span>
          </div>`).join('')}
        </div>`}
      </div>` : ''}`;
    })() : ''}

    <!-- Save button -->
    <button class="save-btn" id="save-btn" onclick="saveTxn()">Save Transaction</button>
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
  if (state.form.allocate && (!state.form.splitGoals || state.form.splitGoals.length === 0)) {
    state.form.splitGoals = [{ goalId: null, pct: '' }];
  }
  render();
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
  
  if (f.type === 'income' && f.allocate) {
    if (f.splitMode === 'auto') {
      // Auto-split: income - budgets = leftover, split by goal need
      const totalBudgetPct = Object.values(state.budgetsPercentage).reduce((a,b)=>a+b,0);
      const budgetDeduct = state.budgetMode === 'percentage' ? (amt * totalBudgetPct / 100) : Object.values(state.budgets).reduce((a,b)=>a+b,0);
      const leftover = Math.max(0, amt - budgetDeduct);
      const activeGoals = state.goals.filter(g => g.saved < g.goal);
      const totalNeed = activeGoals.reduce((s,g)=>s+Math.max(0,g.goal-g.saved),0);
      let totalAllocated = 0;
      const autoSplits = [];
      activeGoals.forEach(g => {
        const need = Math.max(0, g.goal - g.saved);
        const share = totalNeed > 0 ? need/totalNeed : 1/activeGoals.length;
        const alloc = Math.min(need, leftover * share);
        if (alloc > 0) { g.saved += alloc; totalAllocated += alloc; autoSplits.push(g.name); }
      });
      if (autoSplits.length > 0) setTimeout(() => showToast(`${cur()}${fmt(totalAllocated)} auto-split across ${autoSplits.length} goal${autoSplits.length>1?'s':''}`, 'info', 3000), 300);

    } else if (f.splitGoals && f.splitGoals.length > 0) {
      const validSplits = f.splitGoals.filter(s => s.goalId && parseFloat(s.pct) > 0);
      const totalPct = validSplits.reduce((sum, s) => sum + parseFloat(s.pct), 0);
      if (totalPct > 100) { showToast('Goal splits exceed 100% — please adjust', 'error', 3000); return; }
      txn.splitGoals = validSplits;
      validSplits.forEach(s => {
        const g = state.goals.find(g => g.id === s.goalId);
        if (g) g.saved += (amt * parseFloat(s.pct)) / 100;
      });
      if (validSplits.length > 0) setTimeout(() => showToast(`${cur()}${fmt(amt * totalPct / 100)} split across ${validSplits.length} goal${validSplits.length>1?'s':''}`, 'info', 3000), 300);
    }
  }
  
  state.txns.push(txn);

  // Only check budget warnings for the category of this transaction
  state.warningItems = [];
  if (f.type === 'expense' && f.cat && state.budgets[f.cat]) {
    const budget = state.budgets[f.cat];
    const spent = spentByCat(f.cat);
    const pct = Math.round((spent / budget) * 100);
    if (spent > budget) {
      state.warningItems.push({ type: 'over', text: `${f.cat} — You're ${cur()}${fmt(spent - budget)} over budget` });
    } else if (pct >= 85) {
      state.warningItems.push({ type: 'warn', text: `${f.cat} — ${pct}% of budget used` });
    }
  }

  state.screen = 'home';
  setPhoneTheme('neutral');
  
  // Check for completed goals from splits
  if (f.type === 'income' && f.splitGoals) {
    f.splitGoals.forEach(s => {
      const g = state.goals.find(g => g.id === s.goalId);
      if (g && g.saved >= g.goal && g.saved - ((txn.amount * parseFloat(s.pct)) / 100) < g.goal) {
        setTimeout(() => {
          showToast(`🎉 Goal complete! "${g.name}" is fully funded!`, 'success', 4000);
        }, 800);
      }
    });
  }

  // Show toasts
  showToast(`${f.type === 'income' ? 'Income' : 'Expense'} added!`, 'success', 2000);
  state.warningItems.forEach(item => {
    setTimeout(() => {
      showToast(item.text, item.type === 'over' ? 'error' : 'info', 3000);
    }, 500);
  });

  // Check achievements
  setTimeout(() => checkAchievements(), 600);
  
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

function goalPlantSVG(pct) {
  // 5 stages: seed (0-20), sprout (20-40), seedling (40-60), plant (60-85), blooming (85-100+)
  const green = 'rgba(127,185,138,';
  const stem = `<line x1="32" y1="52" x2="32" y2="60" stroke="${green}0.9)" stroke-width="2" stroke-linecap="round"/>`;
  const soil = `<ellipse cx="32" cy="60" rx="14" ry="4" fill="${green}0.25)"/>`;

  let plant = '';
  if (pct < 20) {
    // Seed — just a little bump
    plant = `<circle cx="32" cy="56" r="4" fill="${green}0.5)"/>`;
  } else if (pct < 40) {
    // Sprout — tiny stem + 1 leaf
    plant = `
      <line x1="32" y1="48" x2="32" y2="58" stroke="${green}0.8)" stroke-width="2" stroke-linecap="round"/>
      <path d="M32 50 Q24 44 26 38 Q32 42 32 50Z" fill="${green}0.7)"/>`;
  } else if (pct < 60) {
    // Seedling — taller stem + 2 leaves
    plant = `
      <line x1="32" y1="40" x2="32" y2="58" stroke="${green}0.8)" stroke-width="2" stroke-linecap="round"/>
      <path d="M32 50 Q22 44 24 36 Q32 40 32 50Z" fill="${green}0.7)"/>
      <path d="M32 46 Q42 40 40 32 Q32 36 32 46Z" fill="${green}0.6)"/>`;
  } else if (pct < 85) {
    // Plant — full stem + 3 leaves
    plant = `
      <line x1="32" y1="32" x2="32" y2="58" stroke="${green}0.85)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M32 52 Q20 46 22 36 Q32 40 32 52Z" fill="${green}0.75)"/>
      <path d="M32 46 Q44 40 42 30 Q32 34 32 46Z" fill="${green}0.65)"/>
      <path d="M32 40 Q22 30 26 20 Q34 28 32 40Z" fill="${green}0.75)"/>`;
  } else {
    // Blooming — full plant with flower
    plant = `
      <line x1="32" y1="30" x2="32" y2="58" stroke="${green}0.9)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M32 52 Q20 46 22 36 Q32 40 32 52Z" fill="${green}0.75)"/>
      <path d="M32 46 Q44 40 42 30 Q32 34 32 46Z" fill="${green}0.7)"/>
      <path d="M32 38 Q22 28 26 18 Q34 26 32 38Z" fill="${green}0.8)"/>
      <circle cx="32" cy="26" r="5" fill="rgba(245,169,98,0.9)"/>
      <circle cx="32" cy="20" r="3" fill="rgba(245,210,98,0.95)"/>
      <circle cx="37" cy="24" r="2.5" fill="rgba(245,169,98,0.85)"/>
      <circle cx="27" cy="24" r="2.5" fill="rgba(245,169,98,0.85)"/>`;
  }

  return `<svg viewBox="0 0 64 64" width="48" height="48" style="overflow:visible;">${soil}${stem}${plant}</svg>`;
}

/* ================= SETUP FLOW ================= */

function renderSetup() {
  const step = state.setupStep || 1;
  const TOTAL = 6;
  const pct = Math.round(((step - 1) / TOTAL) * 100);
  const sym = cur();

  let content = '';

  if (step === 1) {
    content = `
    <div class="setup-hero">
      ${lotusSVG(80)}
      <div class="brand" style="font-size:32px;margin-top:12px;">Welcome to Sprout</div>
      <div class="brand-cn" style="font-size:14px;opacity:0.5;margin-top:2px;">发芽</div>
      <div style="font-size:13px;color:var(--cream-dim);text-align:center;margin-top:18px;line-height:1.8;max-width:270px;">
        Your personal finance tracker. Let's get you set up in a few quick steps.
      </div>
    </div>
    <div class="setup-actions">
      <button class="auth-btn" onclick="state.setupStep=2;render();">Let's go 🌱</button>
    </div>`;

  } else if (step === 2) {
    content = `
    <div class="setup-step-header">
      <div class="setup-step-icon">👤</div>
      <div class="setup-step-title">Your Profile</div>
      <div class="setup-step-sub">Tell us a bit about yourself to personalise your experience.</div>
    </div>
    <div class="setup-body">
      <div class="field-label">Your name</div>
      <input type="text" id="setup-name" class="auth-input" placeholder="e.g. Sarah" value="${escapeHtml(state.userName || '')}" style="margin-bottom:14px;">
      <div class="field-label">Bio / tagline <span style="opacity:0.5;font-size:10px;">optional</span></div>
      <input type="text" id="setup-bio" class="auth-input" placeholder="e.g. Saving for my first home 🏠" value="${escapeHtml(state.userBio || '')}" style="margin-bottom:14px;">
      <div class="field-label">Currency</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:4px;">
        ${['AUD','USD','GBP','EUR','NZD','SGD'].map(c => `
          <button onclick="state.currency='${c}';render();" style="padding:10px 6px;border-radius:10px;border:1.5px solid ${state.currency===c?'rgba(127,185,138,0.7)':'rgba(255,255,255,0.1)'};background:${state.currency===c?'rgba(127,185,138,0.2)':'rgba(255,255,255,0.04)'};color:var(--cream);font-size:13px;font-weight:${state.currency===c?'700':'400'};font-family:'Poppins',sans-serif;cursor:pointer;">${c}</button>`).join('')}
      </div>
    </div>
    <div class="setup-actions">
      <button class="auth-btn" onclick="saveSetupProfile()">Next →</button>
    </div>`;

  } else if (step === 3) {
    content = `
    <div class="setup-step-header">
      <div class="setup-step-icon">🏦</div>
      <div class="setup-step-title">Starting Balance</div>
      <div class="setup-step-sub">Enter your current total bank balance so Sprout can track your net worth accurately.</div>
    </div>
    <div class="setup-body">
      <div class="amount-wrap" style="margin-top:4px;">
        <span>${sym}</span>
        <input type="number" id="setup-balance" placeholder="0.00" value="${state.startingBalance > 0 ? state.startingBalance : ''}">
      </div>
      <div style="font-size:11px;color:var(--cream-dim);margin-top:10px;line-height:1.6;">This includes all accounts combined — savings, everyday, etc. You can update it anytime in Account settings.</div>
    </div>
    <div class="setup-actions">
      <button class="auth-btn" onclick="saveSetupBalance()">Next →</button>
      <button class="auth-switch" onclick="state.setupStep=4;render();">Skip for now</button>
    </div>`;

  } else if (step === 4) {
    const isFixed = state.budgetMode === 'fixed';
    content = `
    <div class="setup-step-header">
      <div class="setup-step-icon">📊</div>
      <div class="setup-step-title">Budget Style</div>
      <div class="setup-step-sub">How would you like to set your monthly budgets?</div>
    </div>
    <div class="setup-body">
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">
        <button onclick="state.budgetMode='fixed';render();" style="text-align:left;padding:14px 16px;border-radius:14px;border:2px solid ${isFixed?'rgba(127,185,138,0.6)':'rgba(255,255,255,0.1)'};background:${isFixed?'rgba(127,185,138,0.15)':'rgba(255,255,255,0.04)'};cursor:pointer;font-family:'Poppins',sans-serif;">
          <div style="font-size:14px;font-weight:700;color:var(--cream);">💰 Fixed Monthly</div>
          <div style="font-size:11px;color:var(--cream-dim);margin-top:4px;line-height:1.5;">Set a fixed dollar amount per category. Best for stable income (salary, etc).</div>
        </button>
        <button onclick="state.budgetMode='percentage';render();" style="text-align:left;padding:14px 16px;border-radius:14px;border:2px solid ${!isFixed?'rgba(127,185,138,0.6)':'rgba(255,255,255,0.1)'};background:${!isFixed?'rgba(127,185,138,0.15)':'rgba(255,255,255,0.04)'};cursor:pointer;font-family:'Poppins',sans-serif;">
          <div style="font-size:14px;font-weight:700;color:var(--cream);">📈 Income-Based %</div>
          <div style="font-size:11px;color:var(--cream-dim);margin-top:4px;line-height:1.5;">Budgets auto-scale as a % of income. Perfect for freelancers or variable income.</div>
        </button>
      </div>
      <div style="font-size:12px;font-weight:600;margin-bottom:10px;color:var(--cream-dim);">DEFAULT BUDGETS</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${Object.keys(state.budgets).map(cat => `
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="flex:1;font-size:13px;">${cat}</div>
            <div class="amount-wrap" style="width:120px;flex-shrink:0;">
              ${isFixed ? `<span style="font-size:12px;">${sym}</span>` : ''}
              <input type="number" value="${isFixed ? state.budgets[cat] : (state.budgetsPercentage[cat] || '')}" placeholder="0" oninput="${isFixed ? `state.budgets['${cat}']=parseFloat(this.value)||0` : `state.budgetsPercentage['${cat}']=parseFloat(this.value)||0`}">
              ${!isFixed ? `<span style="font-size:12px;color:var(--cream-dim);">%</span>` : ''}
            </div>
          </div>`).join('')}
      </div>
    </div>
    <div class="setup-actions">
      <button class="auth-btn" onclick="state.setupStep=5;render();">Next →</button>
      <button class="auth-switch" onclick="state.setupStep=5;render();">Skip for now</button>
    </div>`;

  } else if (step === 5) {
    const setupGoals = state.setupGoals || [];
    content = `
    <div class="setup-step-header">
      <div class="setup-step-icon">🎯</div>
      <div class="setup-step-title">Your Goals</div>
      <div class="setup-step-sub">What are you saving for? Add as many as you like — you can always add more later.</div>
    </div>
    <div class="setup-body">
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${setupGoals.map((g, i) => `
          <div style="display:flex;gap:8px;align-items:center;">
            <input type="text" value="${escapeHtml(g.name)}" placeholder="Goal name (e.g. Europe Trip)" oninput="state.setupGoals[${i}].name=this.value" style="flex:1;font-size:12px;">
            <div class="amount-wrap" style="width:100px;flex-shrink:0;">
              <span style="font-size:12px;">${sym}</span>
              <input type="number" value="${g.goal || ''}" placeholder="0" oninput="state.setupGoals[${i}].goal=parseFloat(this.value)||0" style="font-size:12px;">
            </div>
            <button onclick="state.setupGoals.splice(${i},1);render();" style="background:none;border:none;color:var(--cream-dim);cursor:pointer;display:flex;align-items:center;width:20px;height:20px;flex-shrink:0;">${ICON.x}</button>
          </div>`).join('')}
      </div>
      <button onclick="if(!state.setupGoals)state.setupGoals=[];state.setupGoals.push({name:'',goal:0,saved:0});render();" style="width:100%;margin-top:12px;background:rgba(127,185,138,0.1);border:1px dashed rgba(127,185,138,0.4);color:var(--cream-dim);padding:10px;border-radius:10px;font-size:12px;font-family:'Poppins',sans-serif;cursor:pointer;">+ Add a goal</button>
    </div>
    <div class="setup-actions">
      <button class="auth-btn" onclick="completeSetup()">Finish Setup 🌱</button>
      <button class="auth-switch" onclick="completeSetup()">Skip for now</button>
    </div>`;

  } else if (step === 6) {
    const tips = [
      { icon: '💸', title: 'Log transactions', desc: 'Tap the + button at the bottom to log income and expenses. Assign a category to track your spending patterns.' },
      { icon: '📊', title: 'Set budgets', desc: 'Head to the Budget tab to set spending limits per category. Bars fill up as you spend — red means over budget.' },
      { icon: '🎯', title: 'Save for goals', desc: 'Create goals in Budget → Goal. When adding income you can split a percentage directly into your goals.' },
      { icon: '🌱', title: 'Watch plants grow', desc: 'Each goal has a living plant that grows as you save — from seed all the way to a blooming flower at 100% 🌸' },
      { icon: '🔁', title: 'Track subscriptions', desc: 'Account → Subscriptions to track Netflix, Spotify and more. See your total monthly recurring costs at a glance.' },
      { icon: '🏅', title: 'Earn achievements', desc: 'Badges unlock automatically as you use Sprout — check Account → Achievements to see what you\'ve earned!' },
    ];
    const tipIdx = state.tutorialTip || 0;
    const tip = tips[tipIdx];
    const isLast = tipIdx >= tips.length - 1;
    content = `
    <div class="setup-hero" style="padding-top:0;">
      <div style="font-size:60px;margin-bottom:18px;line-height:1;">${tip.icon}</div>
      <div style="font-size:19px;font-weight:700;margin-bottom:12px;text-align:center;">${tip.title}</div>
      <div style="font-size:13px;color:var(--cream-dim);text-align:center;line-height:1.8;max-width:280px;">${tip.desc}</div>
      <div style="display:flex;gap:8px;margin-top:28px;align-items:center;">
        ${tips.map((_, i) => `<div style="width:${i===tipIdx?'24px':'8px'};height:8px;border-radius:4px;background:${i===tipIdx?'rgba(127,185,138,0.9)':'rgba(255,255,255,0.2)'};transition:all .35s ease;"></div>`).join('')}
      </div>
    </div>
    <div class="setup-actions">
      <button class="auth-btn" onclick="${isLast ? 'finishTutorial()' : 'state.tutorialTip=(state.tutorialTip||0)+1;render();'}">
        ${isLast ? 'Start using Sprout 🌿' : 'Next →'}
      </button>
      ${!isLast ? `<button class="auth-switch" onclick="finishTutorial()">Skip tutorial</button>` : ''}
    </div>`;
  }

  const showProgress = step > 1 && step < 6;
  return `
  <div class="setup-screen">
    ${showProgress ? `
    <div class="setup-progress">
      <div style="height:100%;width:${pct}%;background:rgba(127,185,138,0.7);border-radius:3px;transition:width .5s ease;"></div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      ${step > 2 ? `<button onclick="state.setupStep--;render();" class="back-btn" style="padding:6px 10px;font-size:12px;">${ICON.back} Back</button>` : `<div></div>`}
      <div style="font-size:11px;color:var(--cream-dim);">Step ${step - 1} of ${TOTAL - 1}</div>
    </div>` : step === 6 ? '<div style="height:20px;"></div>' : ''}
    ${content}
  </div>`;
}

function saveSetupProfile() {
  const name = document.getElementById('setup-name')?.value?.trim();
  const bio = document.getElementById('setup-bio')?.value?.trim();
  if (!name) { showToast('Please enter your name', 'error', 2500); return; }
  state.userName = name;
  if (bio) { state.userBio = bio; state._nameChanged = true; }
  state.setupStep = 3;
  render();
}

function saveSetupBalance() {
  const val = parseFloat(document.getElementById('setup-balance')?.value);
  if (!isNaN(val) && val >= 0) {
    state.startingBalance = val;
    state._balanceSet = true;
  }
  state.setupStep = 4;
  render();
}

function completeSetup() {
  if (state.setupGoals?.length > 0) {
    state.setupGoals.filter(g => g.name && g.goal > 0).forEach(g => {
      state.goals.push({ id: state.nextId++, name: g.name, goal: g.goal, saved: 0 });
    });
    delete state.setupGoals;
  }
  state.setupStep = 6;
  state.tutorialTip = 0;
  saveState();
  render();
}

function finishTutorial() {
  state.setupComplete = true;
  state.screen = 'home';
  delete state.tutorialTip;
  saveState();
  showToast(`Welcome to Sprout, ${state.userName || 'there'}! 🌱`, 'success', 3500);
  setTimeout(() => checkAchievements(), 1000);
  render();
}

const ALL_BADGES = [
  // 🌱 Getting Started
  { id: 'first_login',       cat: 'Getting Started', icon: '🌱', name: 'First Sprout',         desc: 'Open Sprout for the first time',              check: s => true },
  { id: 'first_txn',        cat: 'Getting Started', icon: '✍️', name: 'First Entry',           desc: 'Log your first transaction',                  check: s => s.txns.length >= 1 },
  { id: 'first_expense',    cat: 'Getting Started', icon: '💸', name: 'First Expense',         desc: 'Log your first expense',                      check: s => s.txns.some(t => t.type === 'expense') },
  { id: 'first_income',     cat: 'Getting Started', icon: '💰', name: 'First Income',          desc: 'Log your first income',                       check: s => s.txns.some(t => t.type === 'income') },
  { id: 'first_goal',       cat: 'Getting Started', icon: '🎯', name: 'Dream Big',             desc: 'Create your first goal',                      check: s => s.goals.length >= 1 },
  { id: 'first_budget',     cat: 'Getting Started', icon: '📋', name: 'Budget Setter',         desc: 'Edit or create a budget category',            check: s => s._budgetEdited === true },
  { id: 'named_yourself',   cat: 'Getting Started', icon: '👤', name: 'Identity',              desc: 'Change your name in settings',                check: s => s._nameChanged === true },
  { id: 'added_avatar',     cat: 'Getting Started', icon: '🖼️', name: 'Face to a Name',        desc: 'Upload a profile picture',                    check: s => !!s.userAvatar },
  { id: 'set_balance',      cat: 'Getting Started', icon: '🏦', name: 'Foundation',            desc: 'Update your starting balance',                check: s => s._balanceSet === true },
  { id: 'first_sub',        cat: 'Getting Started', icon: '📺', name: 'Subscription Aware',    desc: 'Add your first subscription',                 check: s => s._subAdded === true },

  // 📊 Transactions
  { id: 'txn_5',            cat: 'Transactions', icon: '📝', name: 'Getting Tracked',       desc: 'Log 5 transactions',                          check: s => s.txns.length >= 5 },
  { id: 'txn_10',           cat: 'Transactions', icon: '📓', name: 'On a Roll',             desc: 'Log 10 transactions',                         check: s => s.txns.length >= 10 },
  { id: 'txn_25',           cat: 'Transactions', icon: '📒', name: 'Consistent Logger',     desc: 'Log 25 transactions',                         check: s => s.txns.length >= 25 },
  { id: 'txn_50',           cat: 'Transactions', icon: '📗', name: 'Dedicated Tracker',     desc: 'Log 50 transactions',                         check: s => s.txns.length >= 50 },
  { id: 'txn_100',          cat: 'Transactions', icon: '📘', name: 'Century Logger',        desc: 'Log 100 transactions',                        check: s => s.txns.length >= 100 },
  { id: 'txn_250',          cat: 'Transactions', icon: '📙', name: 'Finance Historian',     desc: 'Log 250 transactions',                        check: s => s.txns.length >= 250 },
  { id: 'txn_500',          cat: 'Transactions', icon: '📚', name: 'Chronicle Master',      desc: 'Log 500 transactions',                        check: s => s.txns.length >= 500 },
  { id: 'cat_all',          cat: 'Transactions', icon: '🌈', name: 'Category Explorer',     desc: 'Use all budget categories at least once',     check: s => Object.keys(s.budgets).length >= 3 && Object.keys(s.budgets).every(c => s.txns.some(t => t.cat === c)) },
  { id: 'big_spend',        cat: 'Transactions', icon: '💳', name: 'Big Ticket',            desc: 'Log a single expense over $500',              check: s => s.txns.some(t => t.type === 'expense' && t.amount >= 500) },
  { id: 'big_income',       cat: 'Transactions', icon: '🤑', name: 'Payday',                desc: 'Log a single income over $5,000',             check: s => s.txns.some(t => t.type === 'income' && t.amount >= 5000) },
  { id: 'big_income2',      cat: 'Transactions', icon: '💎', name: 'Windfall',              desc: 'Log a single income over $20,000',            check: s => s.txns.some(t => t.type === 'income' && t.amount >= 20000) },
  { id: 'sub_expense',      cat: 'Transactions', icon: '🔁', name: 'Subscription Tracked',  desc: 'Log a subscription expense',                  check: s => s.txns.some(t => t.cat === 'Subscription') },
  { id: 'income_split',     cat: 'Transactions', icon: '🍕', name: 'Smart Splitter',        desc: 'Split income across multiple goals',          check: s => s.txns.some(t => t.splitGoals && t.splitGoals.filter(g=>g.goalId).length > 1) },

  // 🎯 Goals
  { id: 'goal_1_done',      cat: 'Goals', icon: '⭐', name: 'Goal Getter',           desc: 'Complete your first goal',                    check: s => s.goals.some(g => g.goal > 0 && g.saved >= g.goal) },
  { id: 'goal_3_done',      cat: 'Goals', icon: '🌟', name: 'Triple Threat',         desc: 'Complete 3 goals',                            check: s => s.goals.filter(g => g.goal > 0 && g.saved >= g.goal).length >= 3 },
  { id: 'goal_5_done',      cat: 'Goals', icon: '💫', name: 'Goal Machine',          desc: 'Complete 5 goals',                            check: s => s.goals.filter(g => g.goal > 0 && g.saved >= g.goal).length >= 5 },
  { id: 'goal_10_done',     cat: 'Goals', icon: '🏆', name: 'Champion',              desc: 'Complete 10 goals',                           check: s => s.goals.filter(g => g.goal > 0 && g.saved >= g.goal).length >= 10 },
  { id: 'goal_20_done',     cat: 'Goals', icon: '👑', name: 'Goal Royalty',          desc: 'Complete 20 goals',                           check: s => s.goals.filter(g => g.goal > 0 && g.saved >= g.goal).length >= 20 },
  { id: 'goal_3_active',    cat: 'Goals', icon: '🎪', name: 'Multitasker',           desc: 'Have 3 active goals at once',                 check: s => s.goals.length >= 3 },
  { id: 'goal_5_active',    cat: 'Goals', icon: '🎠', name: 'Ambitious',             desc: 'Have 5 active goals at once',                 check: s => s.goals.length >= 5 },
  { id: 'goal_big',         cat: 'Goals', icon: '🏔️', name: 'Dream Big',             desc: 'Set a goal over $10,000',                     check: s => s.goals.some(g => g.goal >= 10000) },
  { id: 'goal_bigger',      cat: 'Goals', icon: '🚀', name: 'Sky High',              desc: 'Set a goal over $50,000',                     check: s => s.goals.some(g => g.goal >= 50000) },
  { id: 'goal_100pct',      cat: 'Goals', icon: '💯', name: 'Perfectionist',         desc: 'Reach exactly 100% on any goal',              check: s => s.goals.some(g => g.goal > 0 && g.saved >= g.goal) },
  { id: 'goal_over',        cat: 'Goals', icon: '📈', name: 'Overachiever',          desc: 'Save more than a goal\'s target amount',     check: s => s.goals.some(g => g.goal > 0 && g.saved > g.goal) },
  { id: 'goal_halfway',     cat: 'Goals', icon: '🌓', name: 'Halfway There',         desc: 'Reach 50% on any goal',                      check: s => s.goals.some(g => g.goal > 0 && g.saved / g.goal >= 0.5) },
  { id: 'goal_travel',      cat: 'Goals', icon: '✈️', name: 'Wanderlust',            desc: 'Create a travel goal (trip/travel/holiday)',  check: s => s.goals.some(g => /trip|travel|holiday|vacation|flight/i.test(g.name)) },
  { id: 'goal_house',       cat: 'Goals', icon: '🏠', name: 'Home Owner',            desc: 'Create a house or deposit goal',              check: s => s.goals.some(g => /house|home|property|deposit|mortgage/i.test(g.name)) },
  { id: 'goal_emergency',   cat: 'Goals', icon: '🛡️', name: 'Safety Net',            desc: 'Create an emergency fund goal',               check: s => s.goals.some(g => /emergency|safety|rainy/i.test(g.name)) },

  // 💰 Savings & Balance
  { id: 'save_1k',          cat: 'Savings', icon: '💵', name: 'First Thousand',       desc: 'Save $1,000 across all goals',                check: s => s.goals.reduce((a,g)=>a+g.saved,0) >= 1000 },
  { id: 'save_5k',          cat: 'Savings', icon: '💴', name: 'Five Large',           desc: 'Save $5,000 across all goals',                check: s => s.goals.reduce((a,g)=>a+g.saved,0) >= 5000 },
  { id: 'save_10k',         cat: 'Savings', icon: '💶', name: 'Five Figures',         desc: 'Save $10,000 across all goals',               check: s => s.goals.reduce((a,g)=>a+g.saved,0) >= 10000 },
  { id: 'save_50k',         cat: 'Savings', icon: '💷', name: 'Fifty K Club',         desc: 'Save $50,000 across all goals',               check: s => s.goals.reduce((a,g)=>a+g.saved,0) >= 50000 },
  { id: 'save_100k',        cat: 'Savings', icon: '🏅', name: 'Six Figures Saved',    desc: 'Save $100,000 across all goals',              check: s => s.goals.reduce((a,g)=>a+g.saved,0) >= 100000 },
  { id: 'bal_100k',         cat: 'Savings', icon: '🎰', name: 'Centurion',            desc: 'Reach a total balance of $100,000',           check: s => { let i=0,e=0; s.txns.forEach(t=>t.type==='income'?i+=t.amount:e+=t.amount); return s.startingBalance+i-e >= 100000; } },
  { id: 'bal_500k',         cat: 'Savings', icon: '🦁', name: 'Half Millionaire',     desc: 'Reach a total balance of $500,000',           check: s => { let i=0,e=0; s.txns.forEach(t=>t.type==='income'?i+=t.amount:e+=t.amount); return s.startingBalance+i-e >= 500000; } },
  { id: 'bal_1m',           cat: 'Savings', icon: '🦄', name: 'Millionaire',          desc: 'Reach a total balance of $1,000,000',         check: s => { let i=0,e=0; s.txns.forEach(t=>t.type==='income'?i+=t.amount:e+=t.amount); return s.startingBalance+i-e >= 1000000; } },
  // Month-end only: checked on first transaction of a new month vs previous months
  { id: 'positive_month',   cat: 'Savings', icon: '📗', name: 'In the Green',         desc: 'End a full month with more income than expenses', check: s => { const now=new Date(); const m={}; s.txns.forEach(t=>{const d=new Date(t.date+'T00:00:00'); const k=t.date.slice(0,7); if(d.getFullYear()===now.getFullYear()&&d.getMonth()===now.getMonth()) return; // skip current month
    if(!m[k])m[k]={i:0,e:0}; t.type==='income'?m[k].i+=t.amount:m[k].e+=t.amount;}); return Object.values(m).some(v=>v.i>v.e); } },
  { id: 'surplus_1k',       cat: 'Savings', icon: '🌊', name: 'Surplus Hero',         desc: 'Have a completed month with $1,000+ surplus', check: s => { const now=new Date(); const m={}; s.txns.forEach(t=>{const d=new Date(t.date+'T00:00:00'); const k=t.date.slice(0,7); if(d.getFullYear()===now.getFullYear()&&d.getMonth()===now.getMonth()) return; if(!m[k])m[k]={i:0,e:0}; t.type==='income'?m[k].i+=t.amount:m[k].e+=t.amount;}); return Object.values(m).some(v=>v.i-v.e>=1000); } },

  // 📊 Budgeting
  { id: 'budget_3',         cat: 'Budgeting', icon: '📂', name: 'Multi-Budget',        desc: 'Set up 3 budget categories',                  check: s => Object.keys(s.budgets).length >= 3 },
  { id: 'budget_5',         cat: 'Budgeting', icon: '📁', name: 'Budget Pro',           desc: 'Set up 5 budget categories',                  check: s => Object.keys(s.budgets).length >= 5 },
  { id: 'budget_7',         cat: 'Budgeting', icon: '🗂️', name: 'Budget Master',        desc: 'Set up 7 budget categories',                  check: s => Object.keys(s.budgets).length >= 7 },
  { id: 'pct_mode',         cat: 'Budgeting', icon: '🔢', name: 'Percentage Thinker',   desc: 'Switch to income-based % budgeting',          check: s => s.budgetMode === 'percentage' },
  { id: 'under_budget',     cat: 'Budgeting', icon: '✅', name: 'Under Control',        desc: 'Complete a full month under budget in all categories', check: s => { const now=new Date(); const prevMonth=new Date(now.getFullYear(), now.getMonth()-1, 1); const pm=`${prevMonth.getFullYear()}-${String(prevMonth.getMonth()+1).padStart(2,'0')}`; const cats=Object.keys(s.budgets); if(cats.length===0) return false; return cats.every(cat=>{ const spent=s.txns.filter(t=>{return t.type==='expense'&&t.cat===cat&&t.date.slice(0,7)===pm;}).reduce((a,t)=>a+t.amount,0); return spent<=s.budgets[cat]; }); } },

  // 🔄 Subscriptions
  { id: 'sub_3',            cat: 'Subscriptions', icon: '📡', name: 'Subscriber',           desc: 'Track 3 subscriptions',                       check: s => (s.subscriptions||[]).length >= 3 },
  { id: 'sub_5',            cat: 'Subscriptions', icon: '📻', name: 'Service Collector',    desc: 'Track 5 subscriptions',                       check: s => (s.subscriptions||[]).length >= 5 },
  { id: 'sub_10',           cat: 'Subscriptions', icon: '📟', name: 'Sub Hoarder',          desc: 'Track 10 subscriptions',                      check: s => (s.subscriptions||[]).length >= 10 },
  { id: 'sub_100',          cat: 'Subscriptions', icon: '💸', name: 'Sub Spender',          desc: 'Monthly subscription total over $100',        check: s => (s.subscriptions||[]).reduce((a,sub)=>{if(sub.cycle==='monthly')return a+sub.amount;if(sub.cycle==='yearly')return a+sub.amount/12;if(sub.cycle==='weekly')return a+sub.amount*4.33;if(sub.cycle==='quarterly')return a+sub.amount/3;return a;},0)>=100 },

  // 🌿 Sprout
  { id: 'plant_sprout',     cat: 'Sprout', icon: '🌱', name: 'Little Sprout',        desc: 'Any goal reaches 20%',                        check: s => s.goals.some(g=>g.goal>0&&g.saved/g.goal>=0.2) },
  { id: 'plant_seedling',   cat: 'Sprout', icon: '🪴', name: 'Growing Strong',       desc: 'Any goal reaches 40%',                        check: s => s.goals.some(g=>g.goal>0&&g.saved/g.goal>=0.4) },
  { id: 'plant_plant',      cat: 'Sprout', icon: '🌿', name: 'In Full Leaf',         desc: 'Any goal reaches 60%',                        check: s => s.goals.some(g=>g.goal>0&&g.saved/g.goal>=0.6) },
  { id: 'plant_flowering',  cat: 'Sprout', icon: '🌸', name: 'In Full Bloom',        desc: 'Any goal reaches 85%',                        check: s => s.goals.some(g=>g.goal>0&&g.saved/g.goal>=0.85) },
  { id: 'plant_complete',   cat: 'Sprout', icon: '🌺', name: 'Full Harvest',         desc: 'Complete any goal',                           check: s => s.goals.some(g=>g.goal>0&&g.saved>=g.goal) },
  { id: 'garden_3',         cat: 'Sprout', icon: '🌳', name: 'Small Garden',         desc: 'Have 3 goals at once',                        check: s => s.goals.length >= 3 },
  { id: 'garden_5',         cat: 'Sprout', icon: '🌲', name: 'Flourishing Garden',   desc: 'Have 5 goals at once',                        check: s => s.goals.length >= 5 },
  { id: 'garden_10',        cat: 'Sprout', icon: '🌴', name: 'Full Forest',          desc: 'Have 10 goals at once',                       check: s => s.goals.length >= 10 },

  // 🏅 Special
  { id: 'no_expense_day',   cat: 'Special', icon: '🧘', name: 'Spend Nothing Day',   desc: 'Log income but no expenses on the same day',  check: s => { const expDays=new Set(s.txns.filter(t=>t.type==='expense').map(t=>t.date)); return s.txns.some(t=>t.type==='income'&&!expDays.has(t.date)); } },
  { id: 'income_3cats',     cat: 'Special', icon: '🎭', name: 'Income Diversified',   desc: 'Have 3 different income categories',          check: s => new Set(s.txns.filter(t=>t.type==='income'&&t.cat).map(t=>t.cat)).size >= 3 },
  { id: 'big_day',          cat: 'Special', icon: '🛍️', name: 'Retail Therapy',       desc: 'Spend over $300 in a single day',             check: s => { const d={}; s.txns.filter(t=>t.type==='expense').forEach(t=>d[t.date]=(d[t.date]||0)+t.amount); return Object.values(d).some(v=>v>=300); } },
  { id: 'self_control',     cat: 'Special', icon: '🧊', name: 'Self Control',         desc: 'Complete a full month where expenses < 50% of income', check: s => { const now=new Date(); const m={}; s.txns.forEach(t=>{const d=new Date(t.date+'T00:00:00'); const k=t.date.slice(0,7); if(d.getFullYear()===now.getFullYear()&&d.getMonth()===now.getMonth()) return; if(!m[k])m[k]={i:0,e:0}; t.type==='income'?m[k].i+=t.amount:m[k].e+=t.amount;}); return Object.values(m).some(v=>v.i>0&&v.e/v.i<0.5); } },
  { id: 'max_goals',        cat: 'Special', icon: '🌐', name: 'Goal Universe',        desc: 'Complete goals totalling over $100,000',      check: s => s.goals.filter(g=>g.goal>0&&g.saved>=g.goal).reduce((a,g)=>a+g.goal,0)>=100000 },
  { id: 'description_rich', cat: 'Special', icon: '✏️', name: 'Detail Oriented',      desc: 'Log 10 transactions with descriptions',       check: s => s.txns.filter(t=>t.desc&&t.desc.trim().length>2).length >= 10 },
  { id: 'long_desc',        cat: 'Special', icon: '📝', name: 'Storyteller',          desc: 'Add a description longer than 20 characters', check: s => s.txns.some(t=>t.desc&&t.desc.length>=20) },
  { id: 'split_3way',       cat: 'Special', icon: '🍰', name: 'Three-Way Split',      desc: 'Split income across 3 or more goals at once', check: s => s.txns.some(t=>t.splitGoals&&t.splitGoals.filter(g=>g.goalId).length>=3) },
  { id: 'full_profile',     cat: 'Special', icon: '💼', name: 'Complete Profile',     desc: 'Set your name, bio, and profile picture',     check: s => !!(s.userName && s.userBio && s.userAvatar) },

  // 💹 Net Worth
  { id: 'net_pos',          cat: 'Net Worth', icon: '📈', name: 'Positive Net Worth',  desc: 'Your total balance is above zero',            check: s => { let i=0,e=0; s.txns.forEach(t=>t.type==='income'?i+=t.amount:e+=t.amount); return s.startingBalance+i-e>0; } },
  { id: 'income_10k',       cat: 'Net Worth', icon: '💹', name: 'Five Figures Earned', desc: 'Log $10,000 in total income',                 check: s => s.txns.filter(t=>t.type==='income').reduce((a,t)=>a+t.amount,0)>=10000 },
  { id: 'income_50k',       cat: 'Net Worth', icon: '🏦', name: 'Fifty K Earner',      desc: 'Log $50,000 in total income',                 check: s => s.txns.filter(t=>t.type==='income').reduce((a,t)=>a+t.amount,0)>=50000 },
  { id: 'income_100k',      cat: 'Net Worth', icon: '🌏', name: 'Six Figure Earner',   desc: 'Log $100,000 in total income',                check: s => s.txns.filter(t=>t.type==='income').reduce((a,t)=>a+t.amount,0)>=100000 },
  { id: 'income_1m',        cat: 'Net Worth', icon: '🚀', name: 'Million Dollar Earner', desc: 'Log $1,000,000 in total income',             check: s => s.txns.filter(t=>t.type==='income').reduce((a,t)=>a+t.amount,0)>=1000000 },

  // 🧠 Wisdom
  { id: 'used_pct_budget',  cat: 'Wisdom', icon: '🧮', name: 'Percentage Master',     desc: 'Set income % for all budget categories',      check: s => s.budgetMode==='percentage' && Object.keys(s.budgets).length>=3 && Object.keys(s.budgets).every(c=>s.budgetsPercentage[c]>0) },
  { id: 'txn_same_day',     cat: 'Wisdom', icon: '⚡', name: 'Productive Day',        desc: 'Log 5 transactions in one day',               check: s => { const d={}; s.txns.forEach(t=>d[t.date]=(d[t.date]||0)+1); return Object.values(d).some(v=>v>=5); } },
  { id: 'all_cats_budgeted',cat: 'Wisdom', icon: '🎓', name: 'Fully Planned',         desc: 'Have a budget for every category you spend in', check: s => { const cats=new Set(s.txns.filter(t=>t.type==='expense'&&t.cat&&t.cat!=='Subscription').map(t=>t.cat)); return cats.size>=3&&[...cats].every(c=>s.budgets[c]); } },
  { id: 'zero_waste',       cat: 'Wisdom', icon: '♻️', name: 'Zero Waste',            desc: 'Allocate 100% of an income to goals',         check: s => s.txns.some(t=>t.type==='income'&&t.splitGoals&&t.splitGoals.filter(g=>g.goalId).reduce((a,g)=>a+(parseFloat(g.pct)||0),0)===100) },

  // 🎨 Collector
  { id: 'badge_10',         cat: 'Collector', icon: '🎖️', name: 'Badge Collector',    desc: 'Unlock 10 badges',                            check: s => (s.unlockedBadges||[]).length >= 10 },
  { id: 'badge_25',         cat: 'Collector', icon: '🏅', name: 'Badge Hunter',       desc: 'Unlock 25 badges',                            check: s => (s.unlockedBadges||[]).length >= 25 },
  { id: 'badge_50',         cat: 'Collector', icon: '🥇', name: 'Badge Master',       desc: 'Unlock 50 badges',                            check: s => (s.unlockedBadges||[]).length >= 50 },
];

function checkAchievements() {
  const newly = [];
  if (!state.unlockedBadges) state.unlockedBadges = [];
  if (!state.badgeDates) state.badgeDates = {};
  
  ALL_BADGES.forEach(badge => {
    if (!state.unlockedBadges.includes(badge.id)) {
      try {
        if (badge.check(state)) {
          state.unlockedBadges.push(badge.id);
          state.badgeDates[badge.id] = new Date().toISOString().slice(0, 10);
          newly.push(badge);
        }
      } catch(e) {}
    }
  });

  if (newly.length === 0) return;
  saveState();

  if (newly.length === 1) {
    // Single badge — show the normal toast
    setTimeout(() => showBadgeToast(newly[0]), 600);
  } else {
    // Multiple badges — show one summary toast instead of spamming
    setTimeout(() => showBatchBadgeToast(newly), 600);
  }
}

function showBatchBadgeToast(badges) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.getElementById('phone').appendChild(container);
  }
  const el = document.createElement('div');
  el.className = 'toast-badge';
  el.style.cursor = 'pointer';
  const icons = badges.slice(0, 4).map(b => b.icon).join('');
  el.innerHTML = `
    <div style="font-size:20px;line-height:1;">${icons}</div>
    <div style="flex:1;">
      <div style="font-size:12px;font-weight:700;color:var(--cream);">You earned ${badges.length} badges! 🎉</div>
      <div style="font-size:11px;color:var(--income);margin-top:1px;">Tap to view them →</div>
    </div>`;
  el.onclick = () => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 400);
    state.screen = 'achievements';
    render();
  };
  container.appendChild(el);
  setTimeout(() => el.classList.add('show'), 50);
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 5000);
}

function showBadgeToast(badge) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.getElementById('phone').appendChild(container);
  }
  const el = document.createElement('div');
  el.className = 'toast-badge';
  el.style.cursor = 'pointer';
  el.innerHTML = `<span style="font-size:24px;">${badge.icon}</span><div style="flex:1;"><div style="font-size:11px;font-weight:700;color:var(--cream);">Badge Unlocked! 🎉</div><div style="font-size:13px;font-weight:600;color:var(--income);">${badge.name}</div><div style="font-size:10px;color:var(--cream-dim);margin-top:2px;">${badge.desc}</div></div><div style="font-size:10px;color:var(--cream-dim);flex-shrink:0;align-self:center;">Tap →</div>`;
  el.onclick = () => {
    state.selectedBadgeId = badge.id;
    if (state.screen !== 'achievements') state.prevScreen = state.screen;
    el.classList.remove('show');
    setTimeout(() => el.remove(), 400);
    render();
  };
  container.appendChild(el);
  setTimeout(() => el.classList.add('show'), 50);
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 4000);
}

function renderBadgeModal() {
  const badge = ALL_BADGES.find(b => b.id === state.selectedBadgeId);
  if (!badge) return '';
  const unlocked = (state.unlockedBadges || []).includes(badge.id);
  const dateStr = state.badgeDates?.[badge.id];
  const dateFormatted = dateStr ? new Date(dateStr + 'T00:00:00').toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }) : null;

  return `
  <div class="modal-overlay" onclick="state.selectedBadgeId=null;render();">
    <div class="plain-modal" onclick="event.stopPropagation();" style="text-align:center;">
      <div style="font-size:52px;margin-bottom:12px;${unlocked ? '' : 'filter:grayscale(1);opacity:0.4;'}">${badge.icon}</div>
      <div style="font-size:17px;font-weight:700;margin-bottom:4px;">${badge.name}</div>
      <div style="font-size:11px;color:var(--cream-dim);margin-bottom:14px;text-transform:uppercase;letter-spacing:0.5px;">${badge.cat}</div>
      <div style="background:rgba(255,255,255,0.06);border-radius:10px;padding:12px;margin-bottom:14px;">
        <div style="font-size:13px;color:var(--cream);line-height:1.5;">${badge.desc}</div>
      </div>
      ${unlocked
        ? `<div style="background:rgba(127,185,138,0.15);border:1px solid rgba(127,185,138,0.3);border-radius:10px;padding:10px;margin-bottom:14px;">
             <div style="font-size:11px;color:var(--cream-dim);margin-bottom:2px;">Unlocked on</div>
             <div style="font-size:14px;font-weight:700;color:var(--income);">${dateFormatted || 'Unknown date'}</div>
           </div>`
        : `<div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:10px;margin-bottom:14px;">
             <div style="font-size:12px;color:var(--cream-dim);">🔒 Not yet unlocked</div>
           </div>`
      }
      <button onclick="state.selectedBadgeId=null;render();" style="width:100%;background:rgba(74,107,88,0.5);border:1px solid rgba(255,255,255,0.15);color:var(--cream);padding:12px;border-radius:12px;font-size:14px;font-family:'Poppins',sans-serif;font-weight:600;cursor:pointer;">Done</button>
    </div>
  </div>`;
}

function renderAchievements() {
  const unlocked = new Set(state.unlockedBadges || []);
  const cats = [...new Set(ALL_BADGES.map(b => b.cat))];
  const total = ALL_BADGES.length;
  const earned = unlocked.size;

  let html = `
  <div class="form-header">
    <button class="back-btn" onclick="goTo('account')">${ICON.back} Back</button>
    <h2>Achievements</h2>
  </div>
  <div class="card" style="text-align:center;margin-bottom:14px;">
    <div style="font-size:28px;font-weight:700;color:var(--income);">${earned} <span style="font-size:16px;color:var(--cream-dim);">/ ${total}</span></div>
    <div style="font-size:12px;color:var(--cream-dim);margin:4px 0 10px;">badges unlocked</div>
    <div style="background:rgba(255,255,255,0.08);border-radius:6px;height:8px;overflow:hidden;">
      <div style="height:100%;width:${((earned/total)*100).toFixed(1)}%;background:rgba(127,185,138,0.8);border-radius:6px;transition:width 1s ease;"></div>
    </div>
  </div>`;

  cats.forEach(cat => {
    const catBadges = ALL_BADGES.filter(b => b.cat === cat);
    const catEarned = catBadges.filter(b => unlocked.has(b.id)).length;
    html += `
    <div style="margin-bottom:6px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:13px;font-weight:600;">${cat}</span>
        <span style="font-size:11px;color:var(--cream-dim);">${catEarned}/${catBadges.length}</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px;">
        ${catBadges.map(b => {
          const isUnlocked = unlocked.has(b.id);
          return `
          <button onclick="state.selectedBadgeId='${b.id}';render();" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 4px;background:${isUnlocked ? 'rgba(127,185,138,0.15)' : 'rgba(255,255,255,0.04)'};border:1px solid ${isUnlocked ? 'rgba(127,185,138,0.35)' : 'rgba(255,255,255,0.07)'};border-radius:12px;cursor:pointer;width:100%;">
            <div style="font-size:24px;${isUnlocked ? '' : 'filter:grayscale(1);opacity:0.3;'}">${b.icon}</div>
            <div style="font-size:9px;text-align:center;font-weight:${isUnlocked ? '600' : '400'};color:${isUnlocked ? 'var(--cream)' : 'var(--cream-dim)'};line-height:1.2;">${b.name}</div>
          </button>`;
        }).join('')}
      </div>
    </div>`;
  });

  return html + `<div style="height:20px;"></div>`;
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
    <div style="display:flex;gap:8px;">
      <button class="filter-btn" style="min-width:auto;padding:6px 10px;background:rgba(127,185,138,0.15);border-color:rgba(127,185,138,0.3);font-size:10px;" onclick="renewAllSubscriptions()">Renew All</button>
      <button class="filter-btn" style="min-width:auto;padding:6px 12px;background:rgba(127,185,138,0.3);border-color:rgba(127,185,138,0.4);" onclick="openAddSub()">+ Add</button>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
    ${subs.length === 0 ? `<div class="dim" style="text-align:center;padding:24px;">No subscriptions yet — tap Add to get started</div>` : ''}
    ${subs.map(s => {
      const monthly = subMonthlyAmount(s);
      const today = new Date().toISOString().slice(0, 10);
      const isDue = s.nextRenewal && s.nextRenewal <= today;
      const daysUntil = s.nextRenewal ? Math.ceil((new Date(s.nextRenewal) - new Date()) / (1000*60*60*24)) : null;
      return `
      <div class="card" style="display:flex;align-items:center;gap:12px;padding:14px;cursor:pointer;${isDue?'border-color:rgba(245,169,98,0.4);':''}" onclick="openEditSub(${s.id})">
        <div style="width:40px;height:40px;border-radius:10px;background:${s.color || '#4a6b58'};display:flex;align-items:center;justify-content:center;flex-shrink:0;color:white;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M8 16H3v5"/></svg>
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-weight:600;font-size:13px;">${escapeHtml(s.name)}</div>
          <div style="font-size:11px;color:var(--cream-dim);">${s.cat} · ${s.cycle}${s.autoRenew ? ' · auto' : ''}</div>
          ${s.nextRenewal ? `<div style="font-size:10px;color:${isDue?'rgba(245,169,98,0.9)':'var(--cream-dim)'};">${isDue ? 'Renewal due!' : daysUntil === 0 ? 'Due today' : `Renews in ${daysUntil}d`}</div>` : ''}
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
  const nextRenewal = document.getElementById('sub-renewal')?.value || null;
  const autoRenew = document.getElementById('sub-autorenew')?.checked || false;
  
  if (!name || !amount || amount <= 0) { showToast('Please enter a valid name and amount', 'error', 2500); return; }
  if (!state.subscriptions) state.subscriptions = [];
  state.subscriptions.push({ id: state.nextSubId++, name, amount, cycle, cat, color, nextRenewal, autoRenew });
  showToast(`${name} added!`, 'success', 2500);
  state._subAdded = true;
  state.showAddSub = false;
  render();
}

function saveEditSub() {
  const name = document.getElementById('sub-name').value.trim();
  const amount = parseFloat(document.getElementById('sub-amount').value);
  const cycle = document.getElementById('sub-cycle').value;
  const cat = document.getElementById('sub-cat').value;
  const color = document.getElementById('sub-color').value;
  const nextRenewal = document.getElementById('sub-renewal')?.value || null;
  const autoRenew = document.getElementById('sub-autorenew')?.checked || false;
  
  if (!name || !amount || amount <= 0) { showToast('Please enter a valid name and amount', 'error', 2500); return; }
  const sub = state.subscriptions.find(s => s.id === state.editSubData.id);
  if (sub) Object.assign(sub, { name, amount, cycle, cat, color, nextRenewal, autoRenew });
  showToast('Subscription updated!', 'success', 2500);
  state.showEditSub = false;
  state.editSubData = null;
  render();
}

function renewAllSubscriptions() {
  const subs = (state.subscriptions || []).filter(s => s.autoRenew && s.nextRenewal);
  const today = new Date().toISOString().slice(0, 10);
  let count = 0;
  subs.forEach(s => {
    if (s.nextRenewal <= today) {
      // Advance renewal date by cycle
      const d = new Date(s.nextRenewal);
      if (s.cycle === 'monthly') d.setMonth(d.getMonth() + 1);
      else if (s.cycle === 'yearly') d.setFullYear(d.getFullYear() + 1);
      else if (s.cycle === 'weekly') d.setDate(d.getDate() + 7);
      else if (s.cycle === 'quarterly') d.setMonth(d.getMonth() + 3);
      s.nextRenewal = d.toISOString().slice(0, 10);
      // Add expense transaction
      state.txns.push({ id: state.nextId++, desc: s.name, amount: s.amount, type: 'expense', cat: 'Subscription', date: today });
      count++;
    }
  });
  if (count > 0) { showToast(`${count} subscription${count>1?'s':''} renewed`, 'success', 2500); saveState(); render(); }
  else showToast('No subscriptions due for renewal', 'info', 2500);
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
  const selectStyle = `width:100%;background:rgba(63,92,76,0.3);border:1px solid rgba(255,255,255,0.15);color:var(--cream);padding:10px 14px;border-radius:12px;font-size:14px;font-family:'Poppins',sans-serif;`;
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
          <div class="field-label">Billing cycle</div>
          <select id="sub-cycle" style="${selectStyle}">
            ${SUB_CYCLES.map(c => `<option value="${c}">${c.charAt(0).toUpperCase() + c.slice(1)}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="field">
        <div class="field-label">Category</div>
        <select id="sub-cat" style="${selectStyle}">
          ${SUB_CATS.map(c => `<option value="${c}">${c}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <div class="field-label">Next renewal date <span style="opacity:0.5;font-size:10px;">optional</span></div>
        <input type="date" id="sub-renewal" style="color-scheme:dark;">
      </div>
      <div class="s-row" style="margin-bottom:12px;">
        <span style="font-size:13px;">Auto-renew <span style="font-size:11px;color:var(--cream-dim);">(logs expense automatically)</span></span>
        <label style="display:flex;align-items:center;"><input type="checkbox" id="sub-autorenew" style="width:16px;height:16px;cursor:pointer;accent-color:var(--income);"></label>
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
          <div class="field-label">Billing cycle</div>
          <select id="sub-cycle" style="width:100%;background:rgba(63,92,76,0.3);border:1px solid rgba(255,255,255,0.15);color:var(--cream);padding:10px 14px;border-radius:12px;font-size:14px;font-family:'Poppins',sans-serif;">
            ${SUB_CYCLES.map(c => `<option value="${c}" ${d.cycle===c?'selected':''}>${c.charAt(0).toUpperCase() + c.slice(1)}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="field">
        <div class="field-label">Category</div>
        <select id="sub-cat" style="width:100%;background:rgba(63,92,76,0.3);border:1px solid rgba(255,255,255,0.15);color:var(--cream);padding:10px 14px;border-radius:12px;font-size:14px;font-family:'Poppins',sans-serif;">
          ${SUB_CATS.map(c => `<option value="${c}" ${d.cat===c?'selected':''}>${c}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <div class="field-label">Next renewal date</div>
        <input type="date" id="sub-renewal" value="${d.nextRenewal || ''}" style="color-scheme:dark;">
      </div>
      <div class="s-row" style="margin-bottom:12px;">
        <span style="font-size:13px;">Auto-renew <span style="font-size:11px;color:var(--cream-dim);">(logs expense automatically)</span></span>
        <label style="display:flex;align-items:center;"><input type="checkbox" id="sub-autorenew" ${d.autoRenew?'checked':''} style="width:16px;height:16px;cursor:pointer;accent-color:var(--income);"></label>
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

/* ================= TRANSACTION DETAIL ================= */

function openTxnDetail(id) {
  state.selectedTxnId = id;
  state.prevScreen = state.screen;
  state.screen = 'txnDetail';
  render();
}

function editTxnDetail(id) {
  const tx = state.txns.find(t => t.id === id);
  if (!tx) return;
  
  // Show inline edit form
  const allCats = [...new Set(state.txns.filter(t => t.cat).map(t => t.cat)), ...Object.keys(state.budgets)];
  const uniqueCats = [...new Set(allCats)];
  
  state.editingTxnId = id;
  state.editingTxnDesc = tx.desc;
  state.editingTxnCat = tx.cat || 'Other';
  render();
}

function saveTxnEdit() {
  const tx = state.txns.find(t => t.id === state.editingTxnId);
  if (!tx) return;
  
  tx.desc = state.editingTxnDesc || tx.desc;
  tx.cat = state.editingTxnCat || tx.cat;
  
  delete state.editingTxnId;
  delete state.editingTxnDesc;
  delete state.editingTxnCat;
  
  saveState();
  showToast('Transaction updated', 'success', 2000);
  render();
}

function cancelTxnEdit() {
  delete state.editingTxnId;
  delete state.editingTxnDesc;
  delete state.editingTxnCat;
  render();
}

function quickPickCategory(txnId) {
  const tx = state.txns.find(t => t.id === txnId);
  if (!tx) return;
  
  // Get all unique categories
  const allCats = [...new Set([...Object.keys(state.budgets), 'Other'])];
  
  // Create modal
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;
  
  const categoryButtons = allCats.map(cat => {
    const bgColor = tx.cat === cat ? 'var(--orange)' : 'var(--bg)';
    const borderColor = tx.cat === cat ? 'var(--orange)' : 'rgba(255,255,255,0.12)';
    return `<button onclick="changeQuickCategory(${txnId}, '${cat}')" style="padding: 10px; background: ${bgColor}; border: 1px solid ${borderColor}; color: var(--cream); border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 600; transition: all 0.2s;">${cat}</button>`;
  }).join('');
  
  modal.innerHTML = `
    <div style="background: var(--card); border-radius: 12px; padding: 20px; max-width: 300px; width: 90%; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
      <h3 style="margin: 0 0 16px; font-size: 16px; font-weight: 700;">Pick Category</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
        ${categoryButtons}
      </div>
    </div>
  `;
  
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
  
  document.body.appendChild(modal);
}

function changeQuickCategory(txnId, category) {
  const tx = state.txns.find(t => t.id === txnId);
  if (!tx) return;
  
  tx.cat = category;
  saveState();
  showToast(`Category changed to ${category}`, 'success', 2000);
  
  // Close modal and refresh
  document.querySelector('div[style*="position: fixed"]')?.remove();
  render();
}

/* ================= TRANSACTION DETAIL ================= */
function renderTxnDetail() {
  const tx = state.txns.find(t => t.id === state.selectedTxnId);
  if (!tx) { goTo('bank'); return ''; }

  // If editing, show edit form
  if (state.editingTxnId === tx.id) {
    const allCats = [...new Set([...Object.keys(state.budgets), 'Other'])];
    return `
    <div class="form-header">
      <button class="back-btn" onclick="cancelTxnEdit()">${ICON.back} Cancel</button>
    </div>
    
    <div style="padding:20px;display:flex;flex-direction:column;gap:16px;">
      <h2 style="font-size:20px;font-weight:700;">Edit Transaction</h2>
      
      <div style="display:flex;flex-direction:column;gap:6px;">
        <label style="font-size:13px;color:var(--cream-dim);font-weight:600;">Title</label>
        <input type="text" value="${escapeHtml(state.editingTxnDesc)}" onchange="state.editingTxnDesc = this.value" style="background:var(--card);border:1px solid rgba(255,255,255,0.12);color:var(--cream);padding:12px;border-radius:8px;font-family:'Poppins',sans-serif;font-size:14px;">
      </div>
      
      <div style="display:flex;flex-direction:column;gap:6px;">
        <label style="font-size:13px;color:var(--cream-dim);font-weight:600;">Category</label>
        <select onchange="state.editingTxnCat = this.value" style="background:var(--card);border:1px solid rgba(255,255,255,0.12);color:var(--cream);padding:12px;border-radius:8px;font-family:'Poppins',sans-serif;font-size:14px;">
          ${allCats.map(cat => `<option value="${cat}" ${state.editingTxnCat === cat ? 'selected' : ''}>${cat}</option>`).join('')}
        </select>
      </div>
      
      <button onclick="saveTxnEdit()" style="background:var(--income);color:var(--bg);padding:12px;border-radius:8px;border:none;font-weight:600;cursor:pointer;margin-top:12px;">Save Changes</button>
    </div>`;
  }

  const color = CAT_COLOR[tx.cat] || (tx.type === 'income' ? '#10b981' : '#6b7280');
  const iconKey = CAT_ICON[tx.cat] || 'misc';
  const isExpense = tx.type === 'expense';

  // Total spent on same description
  const matchingTxns = state.txns.filter(t => t.desc?.toLowerCase() === tx.desc?.toLowerCase() && t.type === tx.type);
  const totalWithMerchant = matchingTxns.reduce((s, t) => s + t.amount, 0);

  // Goal info if income split
  const goalSplitInfo = tx.splitGoals?.filter(s => s.goalId)
    .map(s => {
      const g = state.goals.find(g => g.id === s.goalId);
      return g ? `${g.name} (${s.pct}% · ${cur()}${fmt(tx.amount * parseFloat(s.pct) / 100)})` : null;
    }).filter(Boolean) || [];

  // Budget info for expense
  const budget = isExpense && tx.cat ? getBudgetForCat(tx.cat) : null;
  const spentInCat = isExpense && tx.cat ? state.txns.filter(t => {
    const now = new Date();
    const d = new Date(t.date + 'T00:00:00');
    return t.type === 'expense' && t.cat === tx.cat && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).reduce((s, t) => s + t.amount, 0) : 0;

  const [year, month, day] = tx.date.split('-');
  const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const fullDate = dateObj.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return `
  <div class="form-header">
    <button class="back-btn" onclick="goTo('${state.prevScreen || 'bank'}')">${ICON.back} Back</button>
  </div>

  <!-- Hero -->
  <div style="display:flex;flex-direction:column;align-items:center;padding:24px 0 28px;">
    <div style="width:64px;height:64px;border-radius:20px;background:${color}22;border:1.5px solid ${color}44;display:flex;align-items:center;justify-content:center;color:${color};margin-bottom:14px;">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON[iconKey]?.match(/<svg[^>]*>(.*?)<\/svg>/s)?.[1] || ''}</svg>
    </div>
    <div style="font-size:14px;color:var(--cream-dim);margin-bottom:4px;">${escapeHtml(tx.desc || tx.cat)}</div>
    <div style="font-size:36px;font-weight:700;color:${isExpense ? 'var(--cream)' : 'var(--income)'};">${isExpense ? '-' : '+'}${cur()}${fmt(tx.amount)}</div>
    <div style="font-size:12px;color:var(--cream-dim);margin-top:6px;">${fullDate}</div>
  </div>

  <!-- Details card -->
  <div class="card" style="margin-bottom:12px;">
    <div style="display:flex;flex-direction:column;gap:0;">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.07);">
        <span style="font-size:13px;color:var(--cream-dim);">Type</span>
        <span style="font-size:13px;font-weight:600;color:${isExpense ? 'var(--expense)' : 'var(--income)'};">${isExpense ? 'Expense' : 'Income'}</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.07);${tx.isAutoAdded ? 'cursor:pointer;' : ''}">
        <span style="font-size:13px;color:var(--cream-dim);">Category</span>
        <span style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;${tx.isAutoAdded ? 'background:rgba(255,255,255,0.08);padding:6px 10px;border-radius:6px;' : ''}" ${tx.isAutoAdded ? `onclick="quickPickCategory(${tx.id})"` : ''}>
          <span style="color:${color};">${ICON[iconKey]}</span>${tx.cat || 'Uncategorised'}
          ${tx.isAutoAdded ? `<span style="font-size:11px;color:var(--cream-dim);margin-left:4px;">tap to change</span>` : ''}
        </span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.07);">
        <span style="font-size:13px;color:var(--cream-dim);">Date</span>
        <span style="font-size:13px;font-weight:600;">${dmy(tx.date)}</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;${goalSplitInfo.length > 0 || budget ? 'border-bottom:1px solid rgba(255,255,255,0.07);' : ''}">
        <span style="font-size:13px;color:var(--cream-dim);">Total with this merchant</span>
        <span style="font-size:13px;font-weight:600;">${cur()}${fmt(totalWithMerchant)}</span>
      </div>
      ${budget !== null ? `
      <div style="padding:12px 0;${goalSplitInfo.length > 0 ? 'border-bottom:1px solid rgba(255,255,255,0.07);' : ''}">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span style="font-size:13px;color:var(--cream-dim);">Budget this month</span>
          <span style="font-size:13px;font-weight:600;">${cur()}${fmt(spentInCat)} / ${cur()}${fmt(budget)}</span>
        </div>
        <div style="height:5px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden;">
          <div style="height:100%;width:${Math.min(100, (spentInCat/budget)*100).toFixed(1)}%;background:${spentInCat > budget ? 'var(--red-bar)' : color};border-radius:3px;"></div>
        </div>
      </div>` : ''}
      ${goalSplitInfo.length > 0 ? `
      <div style="padding:12px 0;">
        <div style="font-size:13px;color:var(--cream-dim);margin-bottom:6px;">Allocated to goals</div>
        ${goalSplitInfo.map(info => `<div style="font-size:13px;font-weight:600;color:var(--income);">→ ${info}</div>`).join('')}
      </div>` : ''}
    </div>
  </div>

  <!-- Actions -->
  <div style="display:flex;justify-content:center;gap:12px;margin-bottom:24px;">
    ${tx.isAutoAdded ? `
    <button onclick="editTxnDetail(${tx.id})" style="background:rgba(59,130,246,0.12);border:1px solid rgba(59,130,246,0.25);color:#3b82f6;font-size:11px;font-family:'Poppins',sans-serif;padding:7px 16px;border-radius:8px;cursor:pointer;display:flex;align-items:center;gap:6px;font-weight:500;">
      ${ICON.pencil} Edit
    </button>
    ` : ''}
    <button onclick="deleteTxnConfirm(${tx.id})" style="background:rgba(239,68,68,0.12);border:1px solid rgba(239,68,68,0.25);color:#ef4444;font-size:11px;font-family:'Poppins',sans-serif;padding:7px 16px;border-radius:8px;cursor:pointer;display:flex;align-items:center;gap:6px;font-weight:500;">
      ${ICON.trash} Delete
    </button>
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

// ===== RESUME LOADER =====
let resumeLoaderShown = false;

function showResumeLoader() {
  if (document.getElementById('resume-loader')) return;
  const loader = document.createElement('div');
  loader.id = 'resume-loader';
  loader.style.cssText = `position:fixed;inset:0;background:var(--bg, #182922);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;`;
  loader.innerHTML = `
    <style>@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes lpulse{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}</style>
    <div style="position:relative;width:80px;height:80px;margin-bottom:16px;">
      <svg viewBox="0 0 80 80" width="80" height="80" style="animation:spin 1.2s linear infinite;position:absolute;inset:0;">
        <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(127,185,138,0.2)" stroke-width="5"/>
        <circle cx="40" cy="40" r="34" fill="none" stroke="#7fb98a" stroke-width="5" stroke-dasharray="60 154" stroke-linecap="round"/>
      </svg>
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;animation:lpulse 1.2s ease-in-out infinite;">${lotusSVG(40)}</div>
    </div>
    <div style="font-family:'Fraunces',serif;font-size:24px;font-style:italic;color:rgba(255,255,255,0.9);">Sprout</div>`;
  document.body.appendChild(loader);
  resumeLoaderShown = true;
}

function hideResumeLoader() {
  const loader = document.getElementById('resume-loader');
  if (!loader) return;
  loader.style.transition = 'opacity 0.15s ease';
  loader.style.opacity = '0';
  setTimeout(() => { loader.remove(); resumeLoaderShown = false; }, 160);
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (currentUser && state.setupComplete) showResumeLoader();
  } else {
    if (resumeLoaderShown) setTimeout(hideResumeLoader, 400);
  }
});

// ================= APP INIT =================
// PWA install prompt
let _pwaPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  _pwaPrompt = e;
  const row = document.getElementById('pwa-install-row');
  if (row) row.style.display = 'flex';
});
window.addEventListener('appinstalled', () => {
  _pwaPrompt = null;
  const row = document.getElementById('pwa-install-row');
  if (row) row.style.display = 'none';
});
async function triggerPWAInstall() {
  if (!_pwaPrompt) { showToast('Open in Chrome/Edge to install', 'info', 3000); return; }
  _pwaPrompt.prompt();
  const { outcome } = await _pwaPrompt.userChoice;
  if (outcome === 'accepted') showToast('App installed! 🎉', 'success', 2500);
  _pwaPrompt = null;
}

async function initApp() {
  // Render auth screen first so DOM is ready
  state.screen = 'auth';
  render();
  showResumeLoader();

  setTimeout(() => {
    if (resumeLoaderShown) { hideResumeLoader(); if (state.screen === 'auth') render(); }
  }, 5000);

  db.auth.onAuthStateChange(async (event, session) => {
    if ((event === 'INITIAL_SESSION' || event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') && session?.user) {
      if (authInitialized && event === 'INITIAL_SESSION') return;
      if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') authInitialized = true;

      currentUser = session.user;
      // Store last active time
      localStorage.setItem('sprout_last_active', Date.now().toString());

      await new Promise(r => setTimeout(r, 300));
      Object.assign(state, DEFAULT_STATE);
      await loadState();
      if (!state.unlockedBadges) state.unlockedBadges = [];

      // Always skip setup - go to home
      state.screen = 'home';
      state.setupComplete = true;

      hideResumeLoader();
      render();
      setTimeout(() => checkAchievements(), 2000);
      startSupabasePing();
      if (event === 'SIGNED_IN' && state.setupComplete) showToast('Welcome back!', 'success', 2000);

    } else if (event === 'INITIAL_SESSION' && !session) {
      authInitialized = true;
      const lastActive = parseInt(localStorage.getItem('sprout_last_active') || '0');
      const hoursSince = (Date.now() - lastActive) / (1000 * 60 * 60);
      if (lastActive && hoursSince < 720) {
        const { error } = await db.auth.refreshSession();
        if (!error) return;
      }
      hideResumeLoader();
      state.screen = 'auth';
      render();
    } else if (event === 'SIGNED_OUT') {
      authInitialized = false;
      currentUser = null;
      localStorage.removeItem('sprout_data');
      localStorage.removeItem('sprout_last_active');
      Object.assign(state, DEFAULT_STATE);
      hideResumeLoader();
      state.screen = 'auth';
      render();
    }
  });
}

// Ping Supabase every 4 days to prevent project pausing (free tier pauses after 7 inactive days)
let pingInterval = null;
function startSupabasePing() {
  if (pingInterval) return;
  pingInterval = setInterval(async () => {
    try { await db.from('user_data').select('id').limit(1); } catch(e) {}
  }, 4 * 24 * 60 * 60 * 1000); // every 4 days
}

// Lock to portrait on supported browsers
if (screen.orientation && screen.orientation.lock) {
  screen.orientation.lock('portrait').catch(() => {});
}

// Expose key functions and variables to window for desktop version compatibility
window.state = state;
window.render = render;
window.saveState = saveState;
window.showToast = showToast;
window.cur = cur;
/* ================= MOBILE CSV IMPORT ================= */
function showMobileUploadTransactionsModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content" style="background: var(--bg); padding: 20px; border-radius: 16px; max-width: 100%;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h2 style="margin: 0; color: var(--cream); font-size: 18px;">Import Transactions</h2>
        <button onclick="this.closest('.modal').remove()" style="background: none; border: none; color: var(--cream-dim); font-size: 20px; cursor: pointer;">✕</button>
      </div>
      
      <p style="color: var(--cream-dim); font-size: 13px; margin-bottom: 16px;">
        Upload CSV: Date, Description, Amount, Category, Type
      </p>
      
      <input type="file" id="mobile-csv-upload" accept=".csv" style="
        padding: 8px;
        width: 100%;
        border: 2px dashed var(--orange);
        border-radius: 8px;
        background: transparent;
        color: var(--cream);
        cursor: pointer;
        margin-bottom: 16px;
      ">

      <div id="mobile-upload-preview" style="max-height: 200px; overflow-y: auto; display: none; margin-bottom: 16px;">
        <div id="mobile-preview-list" style="background: var(--card); border-radius: 8px; padding: 8px; font-size: 12px;"></div>
      </div>

      <div style="display: flex; gap: 8px;">
        <button onclick="this.closest('.modal').remove()" style="
          flex: 1;
          padding: 10px;
          background: var(--card);
          border: none;
          border-radius: 8px;
          color: var(--cream);
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
        ">Cancel</button>
        <button id="mobile-import-btn" onclick="confirmMobileImportTransactions()" style="
          flex: 1;
          padding: 10px;
          background: var(--orange);
          border: none;
          border-radius: 8px;
          color: #000;
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
          opacity: 0.5;
          pointer-events: none;
        ">Import</button>
      </div>
    </div>
  `;

  document.getElementById('modal-container').appendChild(modal);
  
  const fileInput = document.getElementById('mobile-csv-upload');
  fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const text = await file.text();
    const lines = text.split('\n').filter(line => line.trim());
    const headers = lines[0].toLowerCase().split(',').map(h => h.trim());
    
    const preview = document.getElementById('mobile-preview-list');
    preview.innerHTML = '';

    for (let i = 1; i < Math.min(lines.length, 6); i++) {
      const values = lines[i].split(',').map(v => v.trim());
      const transaction = {};
      headers.forEach((header, idx) => {
        transaction[header] = values[idx] || '';
      });

      // Support both Westpac and generic formats
      let date, desc, category, amount, type;
      
      if (transaction.date && (transaction['debit amount'] || transaction['credit amount'])) {
        // Westpac format
        date = transaction.date;
        desc = transaction.narrative || 'Transaction';
        
        // Skip TFR Westpac (internal transfers)
        if (desc.toUpperCase().includes('TFR') || desc.toUpperCase().includes('TRANSFER')) {
          continue;
        }
        
        category = 'Other'; // Ignore Categories column - user will categorize after import
        
        const debit = parseFloat(transaction['debit amount']) || 0;
        const credit = parseFloat(transaction['credit amount']) || 0;
        
        if (debit > 0) {
          amount = debit;
          type = 'expense';
        } else if (credit > 0) {
          amount = credit;
          type = 'income';
        } else {
          continue;
        }
      } else {
        // Generic format
        if (!transaction.date || !transaction.amount) continue;
        date = transaction.date;
        desc = transaction.description || 'Imported';
        category = transaction.category || 'Other';
        amount = Math.abs(parseFloat(transaction.amount) || 0);
        type = transaction.type || 'expense';
      }

      // Determine category for preview
      let previewCategory = category;
      if (previewCategory === 'Other' || !previewCategory) {
        previewCategory = categorizeTransaction(cleanWestpacDesc(desc), type);
      }
      
      preview.innerHTML += `
        <div style="padding: 6px; border-bottom: 1px solid var(--stripe);">
          <div style="color: var(--cream); font-weight: 500;">${cleanWestpacDesc(desc)}</div>
          <div style="color: var(--cream-dim); font-size: 11px;">${date} • ${previewCategory}</div>
          <div style="color: ${type === 'income' ? 'var(--income)' : 'var(--expense)'}; font-size: 11px; font-weight: 600;">${type === 'income' ? '+' : '-'}${amount.toFixed(2)}</div>
        </div>
      `;
    }

    if (lines.length > 1) {
      document.getElementById('mobile-upload-preview').style.display = 'block';
      const btn = document.getElementById('mobile-import-btn');
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    }
  });
}

window.confirmMobileImportTransactions = async function() {
  const fileInput = document.getElementById('mobile-csv-upload');
  const file = fileInput.files[0];
  if (!file) return;

  const text = await file.text();
  const lines = text.split('\n').filter(line => line.trim());
  const headers = lines[0].toLowerCase().split(',').map(h => h.trim());
  
  let importedCount = 0;
  const importedIds = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim());
    const transaction = {};
    headers.forEach((header, idx) => {
      transaction[header] = values[idx] || '';
    });

    // Support both Westpac and generic formats
    let date, desc, amount, category, type;
    
    if (transaction.date && (transaction['debit amount'] || transaction['credit amount'])) {
      // Westpac format
      date = transaction.date;
      desc = transaction.narrative || 'Transaction';
      
      // Skip TFR Westpac (internal transfers)
      if (desc.toUpperCase().includes('TFR') || desc.toUpperCase().includes('TRANSFER')) {
        continue;
      }
      
      category = 'Other'; // Ignore Categories column - user will categorize after import
      
      const debit = parseFloat(transaction['debit amount']) || 0;
      const credit = parseFloat(transaction['credit amount']) || 0;
      
      if (debit > 0) {
        amount = debit;
        type = 'expense';
      } else if (credit > 0) {
        amount = credit;
        type = 'income';
      } else {
        continue; // Skip if no amount
      }
    } else {
      // Generic format fallback
      date = transaction.date;
      desc = transaction.description || 'Imported Transaction';
      amount = Math.abs(parseFloat(transaction.amount) || 0);
      category = transaction.category || 'Other';
      type = (transaction.type || 'expense').toLowerCase();
    }

    if (date && amount > 0) {
      // Parse date from DD/MM/YYYY to YYYY-MM-DD
      let formattedDate = date;
      if (date && date.includes('/')) {
        const parts = date.split('/');
        if (parts.length === 3) {
          // Handle DD/MM/YYYY or MM/DD/YYYY format
          const day = parts[0].padStart(2, '0');
          const month = parts[1].padStart(2, '0');
          const year = parts[2];
          formattedDate = `${year}-${month}-${day}`;
        }
      }
      
      // Clean up description - remove quotes, prefixes, and extra whitespace
      let cleanDesc = cleanWestpacDesc(desc);
      
      // Use smart categorization if no category detected
      if (category === 'Other' || !category) {
        category = categorizeTransaction(cleanDesc, type);
      }
      
      const newTx = {
        id: Date.now() + i,
        date: formattedDate,
        desc: cleanDesc,
        amount: amount,
        cat: category,
        type: type,
        isAutoAdded: true,
        source: 'csv-import',
        reviewed: false  // Mark as not reviewed yet
      };

      if (!state.txns) state.txns = [];
      state.txns.push(newTx);
      importedIds.push(newTx.id);
      importedCount++;
    }
  }

  // Save last import IDs for undo functionality
  state.lastImportIds = importedIds;
  
  await saveState();
  document.querySelector('.modal').remove();
  
  if (importedCount > 0) {
    showToast(`${importedCount} transactions imported • ${ICON.undo} Undo`, 'success', 6000);
  }
  goTo('bank');
};

/* ================= TRANSACTION DESCRIPTION CLEANER ================= */
function cleanWestpacDesc(desc) {
  if (!desc) return desc;
  
  let cleaned = desc.replace(/^["']|["']$/g, '').trim();
  
  // Remove "DEBIT CARD PURCHASE" prefix
  cleaned = cleaned.replace(/^DEBIT\s+CARD\s+PURCHASE\s+/i, '').trim();
  
  // Remove "EFTPOS DEBIT [numbers]" prefix
  cleaned = cleaned.replace(/^EFTPOS\s+DEBIT\s+\d+\s+/i, '').trim();
  
  // Remove "DEPOSIT-OSKO PAYMENT [numbers]" prefix, keep merchant name onwards
  cleaned = cleaned.replace(/^DEPOSIT-OSKO\s+PAYMENT\s+\d+\s+/i, '').trim();
  
  return cleaned;
}

/* ================= SMART LOCAL CATEGORIZER ================= */
function categorizeTransaction(description, transactionType) {
  if (!description) return 'Other';
  
  const desc = description.toUpperCase();
  
  if (transactionType === 'income') {
    // Income categorization
    if (desc.includes('SALARY') || desc.includes('PAY')) return 'Salary';
    if (desc.includes('FREELANCE') || desc.includes('INVOICE')) return 'Freelance';
    if (desc.includes('REFUND') || desc.includes('RETURN')) return 'Refund';
    if (desc.includes('GIFT') || desc.includes('TRANSFER')) return 'Reimburse';
    return 'Other';
  }
  
  // Expense categorization
  
  // Shopping
  if (desc.match(/IKEA|BUNNINGS|KMART|TARGET|MYER|DFO|SHOPPING|RETAIL|MALL|SHOP/)) return 'Shopping';
  
  // Groceries
  if (desc.match(/WOOLWORTHS|COLES|ALDI|IGA|SAFEWAY|SUPERMARKET|GROCERY|FRESH|PRODUCE/)) return 'Groceries';
  
  // Eating Out
  if (desc.match(/CAFE|RESTAURANT|PIZZA|MCDONALD|KFC|SUBWAY|BURGER|COFFEE|DINING|FOOD|UBER EATS|MENULOG|DOORDASH|CAFE|BISTRO|GRILL|PUB|BAR|TAKEAWAY/)) return 'Eating Out';
  
  // Health
  if (desc.match(/DOCTOR|PHARMACY|MEDICAL|DENTIST|HEALTH|HOSPITAL|CLINIC|CHEMIST|GP|PATHOLOGY|OPTICAL/)) return 'Health';
  
  // Transport
  if (desc.match(/FUEL|PETROL|SHELL|CALTEX|BP|WOOLWORTHS FUEL|UBER|TAXI|PARKING|TOLLS|UBER|TRAIN|BUS|TRANSPORT|AIRBNB|HOTEL|ACCOMMODATION|CAR PARK/)) return 'Transport';
  
  // Gifts
  if (desc.match(/GIFT|FLOWERS|FLORIST|PRESENT|BIRTHDAY/)) return 'Gifts';
  
  // Subscription
  if (desc.match(/SPOTIFY|NETFLIX|DISNEY|AMAZON|ADOBE|MICROSOFT|SUBSCRIPTION|MONTHLY|PREMIUM|MEMBERSHIP|PATREON|APPLE|ICLOUD|DROPBOX/)) return 'Subscription';
  
  // Default
  return 'Misc';
}

/* ================= IMPORT UNDO ================= */
function undoImport() {
  if (!state.lastImportIds || state.lastImportIds.length === 0) {
    showToast('No import to undo', 'info', 2000);
    return;
  }
  
  const count = state.lastImportIds.length;
  state.txns = state.txns.filter(t => !state.lastImportIds.includes(t.id));
  state.lastImportIds = [];
  
  saveState();
  showToast(`${count} transactions removed`, 'success', 2000);
  render();
}

/* ================= REVIEW TRANSACTIONS ================= */
function getUnreviewedTransactions() {
  return state.txns.filter(t => t.isAutoAdded && !t.reviewed);
}

function startReviewMode() {
  const unreviewed = getUnreviewedTransactions();
  if (unreviewed.length === 0) {
    showToast('All transactions reviewed!', 'success', 2000);
    return;
  }
  state.reviewMode = true;
  state.currentReviewIndex = 0;
  state.prevScreen = state.screen;
  state.screen = 'reviewTxns';
  render();
}

function exitReviewMode() {
  state.reviewMode = false;
  state.currentReviewIndex = 0;
  goTo(state.prevScreen || 'bank');
}

function reviewAndCategorize(category) {
  const unreviewed = getUnreviewedTransactions();
  if (unreviewed.length === 0) return;
  
  const currentTx = unreviewed[state.currentReviewIndex];
  if (currentTx) {
    currentTx.cat = category;
    currentTx.reviewed = true;
  }
  
  saveState();
  
  // Move to next
  if (state.currentReviewIndex < unreviewed.length - 1) {
    state.currentReviewIndex++;
    showToast(`Categorized as ${category}`, 'success', 1000);
    render();
  } else {
    showToast('All reviewed! ✨', 'success', 2000);
    setTimeout(() => exitReviewMode(), 1500);
  }
}

function renderReviewTransactions() {
  const unreviewed = getUnreviewedTransactions();
  if (unreviewed.length === 0) {
    return `
    <div style="padding:40px 20px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:50vh;">
      <div style="font-size:48px;margin-bottom:16px;">✨</div>
      <div style="font-size:18px;font-weight:600;margin-bottom:8px;">All caught up!</div>
      <div style="color:var(--cream-dim);margin-bottom:24px;font-size:14px;">All transactions have been reviewed</div>
      <button onclick="goTo('bank')" style="background:var(--orange);color:var(--bg);border:none;padding:12px 24px;border-radius:8px;cursor:pointer;font-weight:600;">Back to Transactions</button>
    </div>
    `;
  }
  
  const tx = unreviewed[state.currentReviewIndex];
  const progress = state.currentReviewIndex + 1;
  const total = unreviewed.length;
  const progressPercent = (progress / total) * 100;
  
  // Get categories based on transaction type
  const categoryList = tx.type === 'income' 
    ? INCOME_CATS 
    : EXPENSE_CATS_PRIMARY.concat(EXPENSE_CATS_MORE);
  
  const iconKey = CAT_ICON[tx.cat] || 'misc';
  const color = CAT_COLOR[tx.cat] || '#6b7280';
  
  // Build category buttons outside template literal to avoid backtick issues
  const categoryButtons = categoryList.map(cat => {
    const catColor = CAT_COLOR[cat] || '#6b7280';
    const catIcon = ICON[CAT_ICON[cat] || 'misc'];
    return `<button onclick="reviewAndCategorize('${cat}')" style="padding:12px 8px;background:rgba(255,255,255,0.04);border:1.5px solid rgba(255,255,255,0.12);color:var(--cream);border-radius:10px;cursor:pointer;transition:all 0.2s;display:flex;flex-direction:column;align-items:center;gap:6px;font-size:11px;font-weight:600;min-height:80px;justify-content:center;" onmouseover="this.style.background='rgba(255,255,255,0.08)';this.style.borderColor='${catColor}44'" onmouseout="this.style.background='rgba(255,255,255,0.04)';this.style.borderColor='rgba(255,255,255,0.12)'"><span style="color:${catColor};font-size:20px;">${catIcon}</span><span style="text-align:center;line-height:1.2;">${cat}</span></button>`;
  }).join('');
  
  return `
  <div style="padding:20px;max-width:100%;">
    <!-- Progress bar -->
    <div style="background:var(--card);padding:16px;margin-bottom:16px;border-radius:8px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:13px;font-weight:600;">Reviewing Transactions</span>
        <span style="font-size:13px;color:var(--cream-dim);">${progress}/${total}</span>
      </div>
      <div style="height:6px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden;">
        <div style="height:100%;width:${progressPercent}%;background:var(--orange);transition:width 0.3s;"></div>
      </div>
    </div>

    <!-- Transaction card -->
    <div style="background:var(--card);border-radius:12px;padding:24px;margin-bottom:24px;text-align:center;">
      <div style="font-size:12px;color:var(--cream-dim);margin-bottom:12px;text-transform:uppercase;letter-spacing:1px;">TRANSACTION ${progress} OF ${total}</div>
      <div style="width:64px;height:64px;border-radius:16px;background:${color}22;border:1.5px solid ${color}44;display:flex;align-items:center;justify-content:center;color:${color};margin:0 auto 16px;">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${ICON[iconKey]?.match(/<svg[^>]*>(.*?)<\/svg>/s)?.[1] || ''}</svg>
      </div>
      <div style="font-size:14px;color:var(--cream-dim);margin-bottom:8px;">${escapeHtml(tx.desc)}</div>
      <div style="font-size:28px;font-weight:700;color:var(--cream);margin-bottom:16px;">${tx.type === 'income' ? '+' : '-'}${cur()}${fmt(tx.amount)}</div>
      <div style="font-size:12px;color:var(--cream-dim);">${dmy(tx.date)}</div>
    </div>

    <!-- Category buttons -->
    <div style="margin-bottom:24px;">
      <div style="font-size:13px;font-weight:600;margin-bottom:12px;color:var(--cream-dim);">SELECT CATEGORY</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));gap:8px;">
        ${categoryButtons}
      </div>
    </div>

    <!-- Action buttons -->
    <div style="display:flex;gap:8px;margin-bottom:24px;">
      <button onclick="exitReviewMode()" style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);color:var(--cream);padding:12px;border-radius:8px;cursor:pointer;font-weight:600;">Exit Review</button>
      <button onclick="state.currentReviewIndex = Math.max(0, state.currentReviewIndex - 1); render();" style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);color:var(--cream);padding:12px;border-radius:8px;cursor:pointer;font-weight:600;${state.currentReviewIndex === 0 ? 'opacity:0.5;cursor:not-allowed;' : ''}">${ICON.arrowDown} Previous</button>
    </div>
  </div>
  `;
}

/* ================= BULK DELETE ================= */
function toggleBulkDelete() {
  state.bulkDeleteMode = !state.bulkDeleteMode;
  if (!state.bulkDeleteMode) {
    state.selectedTxns = [];
  }
  render();
}

function toggleTxnSelection(txnId) {
  if (!state.selectedTxns.includes(txnId)) {
    state.selectedTxns.push(txnId);
  } else {
    state.selectedTxns = state.selectedTxns.filter(id => id !== txnId);
  }
  render();
}

function deleteBulkTxns() {
  if (state.selectedTxns.length === 0) return;
  
  const count = state.selectedTxns.length;
  state.txns = state.txns.filter(t => !state.selectedTxns.includes(t.id));
  state.selectedTxns = [];
  state.bulkDeleteMode = false;
  
  saveState();
  showToast(`${count} transactions deleted`, 'success', 2000);
  render();
}

/* ================= MOBILE BUDGET HISTORY ================= */
function showMobileBudgetHistory() {
  if (!state.budgetHistory) state.budgetHistory = [];

  const today = new Date();
  const currentMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;

  const currentMonthTxs = (state.txns || []).filter(tx => {
    const txDate = new Date(tx.date);
    const txMonth = `${txDate.getFullYear()}-${String(txDate.getMonth() + 1).padStart(2, '0')}`;
    return txMonth === currentMonth && tx.type === 'expense';
  });

  const currentMonthSpent = currentMonthTxs.reduce((sum, tx) => sum + (tx.amount || 0), 0);
  const totalBudget = Object.values(state.budgets || {}).reduce((sum, b) => sum + (b || 0), 0);
  const currentUsagePercent = totalBudget > 0 ? Math.round((currentMonthSpent / totalBudget) * 100) : 0;

  if (!state.budgetHistory.find(h => h.month === currentMonth)) {
    state.budgetHistory.push({
      month: currentMonth,
      spent: currentMonthSpent,
      budget: totalBudget,
      usagePercent: currentUsagePercent
    });
  }

  state.budgetHistory.sort((a, b) => new Date(b.month) - new Date(a.month));

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content" style="background: var(--bg); padding: 20px; border-radius: 16px; max-height: 80vh; overflow-y: auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2 style="margin: 0; color: var(--cream); font-size: 18px;">Budget History</h2>
        <button onclick="this.closest('.modal').remove()" style="background: none; border: none; color: var(--cream-dim); font-size: 20px; cursor: pointer;">✕</button>
      </div>

      ${state.budgetHistory.slice(0, 6).map(h => {
        const color = h.usagePercent > 100 ? 'var(--red-bar)' : 
                     h.usagePercent > 75 ? 'var(--amber-bar)' : 
                     'var(--green-bar)';
        return `
          <div style="background: var(--card); border-radius: 10px; padding: 12px; margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <div style="font-weight: 600; color: var(--cream); font-size: 13px;">
                ${new Date(h.month + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </div>
              <div style="background: ${color}; color: #000; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: 700;">
                ${h.usagePercent}%
              </div>
            </div>
            <div style="height: 6px; background: var(--stripe); border-radius: 3px; overflow: hidden; margin-bottom: 8px;">
              <div style="height: 100%; width: ${Math.min(h.usagePercent, 100)}%; background: ${color};"></div>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 12px;">
              <div><span style="color: var(--cream-dim);">Spent:</span> <strong style="color: var(--cream);">${cur()}${h.spent.toFixed(2)}</strong></div>
              <div><span style="color: var(--cream-dim);">Budget:</span> <strong style="color: var(--cream);">${cur()}${h.budget.toFixed(2)}</strong></div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  document.getElementById('modal-container').appendChild(modal);
}

window.ICON = ICON;
window.CAT_ICON = CAT_ICON;
window.CAT_COLOR = CAT_COLOR;
window.CURRENCIES = CURRENCIES;
window.CURRENCY_SYMBOL = CURRENCY_SYMBOL;

initApp();
/* ===== BROWSER vs PWA DETECTION ===== */
const isPWA = window.matchMedia('(display-mode: standalone)').matches
  || window.navigator.standalone === true;

// Tag body so CSS can target browser mode specifically
if (!isPWA) document.body.classList.add('is-browser');

// In browser mode on mobile, set phone height to visible viewport
// (excludes browser toolbar on iOS Safari via visualViewport)
// Set phone height explicitly — works for both Safari browser and PWA
function fixPhoneHeight() {
  if (window.innerWidth > 500) return;
  // Don't resize when keyboard is open (viewport shrinks but window height stays)
  const vvh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  const wh = window.innerHeight;
  if (wh - vvh > 150) return; // keyboard is open, skip resize
  document.body.style.height = vvh + 'px';
  const phone = document.getElementById('phone');
  if (phone) { phone.style.height = vvh + 'px'; phone.style.minHeight = 'unset'; }
}

if (window.visualViewport) window.visualViewport.addEventListener('resize', fixPhoneHeight);
window.addEventListener('resize', fixPhoneHeight);
setTimeout(fixPhoneHeight, 50);
setTimeout(fixPhoneHeight, 400);

// When keyboard opens, scroll focused input into view inside #screen-content
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', () => {
    const focused = document.activeElement;
    if (!focused || !['INPUT','TEXTAREA','SELECT'].includes(focused.tagName)) return;
    const vvh = window.visualViewport.height;
    const wh = window.innerHeight;
    if (wh - vvh < 150) return; // keyboard not open
    setTimeout(() => {
      focused.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 100);
  });
}

// ================= MONTHLY BUDGET AUTO-REFRESH ================= 
function checkMonthlyBudgetReset() {
  if (!state.lastBudgetResetMonth) {
    state.lastBudgetResetMonth = new Date().toISOString().slice(0, 7);
    return;
  }

  const currentMonth = new Date().toISOString().slice(0, 7);
  if (currentMonth !== state.lastBudgetResetMonth) {
    const monthStart = new Date(state.lastBudgetResetMonth + '-01');
    const monthEnd = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0);
    
    const monthTxs = (state.txns || []).filter(tx => {
      const txDate = new Date(tx.date);
      return txDate >= monthStart && txDate <= monthEnd && tx.type === 'expense';
    });

    const monthSpent = monthTxs.reduce((sum, tx) => sum + (tx.amount || 0), 0);
    const totalBudget = Object.values(state.budgets || {}).reduce((sum, b) => sum + (b || 0), 0);

    if (!state.budgetHistory) state.budgetHistory = [];
    if (!state.budgetHistory.find(h => h.month === state.lastBudgetResetMonth)) {
      state.budgetHistory.push({
        month: state.lastBudgetResetMonth,
        spent: monthSpent,
        budget: totalBudget,
        usagePercent: totalBudget > 0 ? Math.round((monthSpent / totalBudget) * 100) : 0
      });
    }

    state.lastBudgetResetMonth = currentMonth;
    saveState();
    showToast('Budget reset for new month', 'success', 2000);
    render();
  }
}

// Check on app init
setTimeout(() => {
  checkMonthlyBudgetReset();
}, 1000);

// Check periodically every minute for month changes
setInterval(() => {
  if (window.state && window.state.budgets) {
    checkMonthlyBudgetReset();
  }
}, 60000);