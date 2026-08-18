/* ================= DESKTOP-SPECIFIC FUNCTIONALITY ================= */

// Detect if running on desktop
const isDesktopMode = document.body.classList.contains('desktop-mode');

if (isDesktopMode) {
  // ================= SIDEBAR NAVIGATION ================= 
  function renderDesktopNav() {
    const nav = document.getElementById('sidebar-nav');
    const sidebar = document.getElementById('sidebar');
    if (!nav) return;

    // Hide sidebar on auth screens
    const isAuthScreen = state.screen === 'auth' || state.screen === 'splash' || state.screen === 'setup';
    sidebar.style.display = isAuthScreen ? 'none' : 'flex';

    const navItems = [
      { id: 'home', label: 'Dashboard', icon: 'home' },
      { id: 'budgets', label: 'Budgets', icon: 'budget' },
      { id: 'transactions', label: 'Transactions', icon: 'bank' },
      { id: 'upload', label: 'Import Transactions', icon: 'arrowUp' },
      { id: 'history', label: 'Budget History', icon: 'calendar' },
      { id: 'settings', label: 'Settings', icon: 'sliders' },
      { id: 'account', label: 'Account', icon: 'account' },
    ];

    nav.innerHTML = navItems.map(item => `
      <div class="nav-item ${state.screen === item.id ? 'active' : ''}" data-screen="${item.id}">
        ${window.ICON[item.icon] || ''}
        <span>${item.label}</span>
      </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const screen = item.dataset.screen;
        state.screen = screen;
        
        if (screen === 'upload') {
          showUploadTransactionsModal();
        } else if (screen === 'history') {
          showBudgetHistory();
        } else {
          render();
        }
      });
    });
  }

  // Wait for script.js to load and expose render
  setTimeout(() => {
    if (!window.render) return;
    
    const originalRender = window.render;
    
    // Override render function
    window.render = function() {
      // Hide mobile elements
      const bottomNav = document.getElementById('bottom-nav-wrap');
      if (bottomNav) bottomNav.style.display = 'none';
      const phoneFrame = document.getElementById('phone');
      if (phoneFrame) phoneFrame.style.display = 'none';
      
      // Call original render (goes to #screen-content)
      if (originalRender) originalRender.call(this);
      
      // Render desktop sidebar
      renderDesktopNav();
    };
    
    // Set up logo in sidebar
    setTimeout(() => {
      const logoContainer = document.getElementById('app-logo-container');
      if (logoContainer && !logoContainer.innerHTML) {
        // Use the same lotus SVG as the app
        logoContainer.innerHTML = `<svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" style="color: var(--orange);">
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
    }, 100);
    
    // Initial render call
    originalRender.call(window);
    renderDesktopNav();
  }, 500);

  // ================= TRANSACTION UPLOAD ================= 
  window.showUploadTransactionsModal = function() {
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal-content">
        <h2 style="margin-bottom: 20px; color: var(--cream);">Import Transactions</h2>
        <p style="color: var(--cream-dim); margin-bottom: 16px; font-size: 14px;">
          Upload a CSV file with transactions. Expected columns: Date, Description, Amount, Category, Type (expense/income)
        </p>
        
        <div style="margin-bottom: 20px;">
          <input type="file" id="csv-upload" accept=".csv" style="
            padding: 8px;
            width: 100%;
            border: 2px dashed var(--orange);
            border-radius: 8px;
            background: transparent;
            color: var(--cream);
            cursor: pointer;
          ">
        </div>

        <div id="upload-preview" style="margin-bottom: 20px; max-height: 300px; overflow-y: auto; display: none;">
          <h4 style="color: var(--cream); margin-bottom: 12px;">Preview (will be labeled as "auto-added"):</h4>
          <div id="preview-list" style="
            background: var(--card);
            border-radius: 8px;
            padding: 12px;
            font-size: 13px;
          "></div>
        </div>

        <div style="display: flex; gap: 12px;">
          <button onclick="this.closest('.modal-backdrop').remove(); state.screen='home'; render();" style="
            flex: 1;
            padding: 12px;
            background: var(--card);
            border: none;
            border-radius: 8px;
            color: var(--cream);
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s;
          " onmouseover="this.style.background='var(--card-hi)'" onmouseout="this.style.background='var(--card)'">
            Cancel
          </button>
          <button id="import-btn" onclick="confirmImportTransactions()" style="
            flex: 1;
            padding: 12px;
            background: var(--orange);
            border: none;
            border-radius: 8px;
            color: #000;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s;
            opacity: 0.5;
            pointer-events: none;
          " onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='0.5'">
            Import Transactions
          </button>
        </div>
      </div>
    `;

    document.getElementById('modal-container').appendChild(modal);
    
    const fileInput = document.getElementById('csv-upload');
    let pendingTransactions = [];

    fileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const text = await file.text();
      const lines = text.split('\n').filter(line => line.trim());
      const headers = lines[0].toLowerCase().split(',').map(h => h.trim());
      
      pendingTransactions = [];
      const preview = document.getElementById('preview-list');
      preview.innerHTML = '';

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim());
        const transaction = {};
        
        headers.forEach((header, idx) => {
          transaction[header] = values[idx] || '';
        });

        if (transaction.date && transaction.amount) {
          pendingTransactions.push({
            date: transaction.date,
            desc: transaction.description || 'Imported Transaction',
            amount: parseFloat(transaction.amount) || 0,
            cat: transaction.category || 'Other',
            type: (transaction.type || 'expense').toLowerCase(),
            isAutoAdded: true,
            source: 'csv-import'
          });

          preview.innerHTML += `
            <div style="padding: 8px; border-bottom: 1px solid var(--stripe); display: flex; justify-content: space-between;">
              <div>
                <div style="color: var(--cream); font-weight: 500;">${transaction.description || 'Imported'}</div>
                <div style="color: var(--cream-dim); font-size: 12px;">${transaction.date} • ${transaction.category}</div>
              </div>
              <div style="color: ${transaction.type === 'income' ? 'var(--income)' : 'var(--expense)'}; font-weight: 600;">
                ${transaction.type === 'income' ? '+' : '-'}${Math.abs(parseFloat(transaction.amount) || 0).toFixed(2)}
              </div>
            </div>
          `;
        }
      }

      if (pendingTransactions.length > 0) {
        document.getElementById('upload-preview').style.display = 'block';
        const btn = document.getElementById('import-btn');
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
      }
    });
  };

  window.confirmImportTransactions = async function() {
    const fileInput = document.getElementById('csv-upload');
    const file = fileInput.files[0];
    if (!file) return;

    const text = await file.text();
    const lines = text.split('\n').filter(line => line.trim());
    const headers = lines[0].toLowerCase().split(',').map(h => h.trim());
    
    let importedCount = 0;
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      const transaction = {};
      
      headers.forEach((header, idx) => {
        transaction[header] = values[idx] || '';
      });

      if (transaction.date && transaction.amount) {
        const newTx = {
          id: Date.now() + i,
          date: transaction.date,
          desc: transaction.description || 'Imported Transaction',
          amount: Math.abs(parseFloat(transaction.amount) || 0),
          cat: transaction.category || 'Other',
          type: (transaction.type || 'expense').toLowerCase(),
          isAutoAdded: true,
          source: 'csv-import'
        };

        if (!state.txns) state.txns = [];
        state.txns.push(newTx);
        importedCount++;
      }
    }

    await saveState();
    document.getElementById('modal-container').innerHTML = '';
    state.screen = 'home';
    showToast(`Imported ${importedCount} transactions`, 'success', 3000);
    render();
  };

  // ================= BUDGET HISTORY ================= 
  window.showBudgetHistory = function() {
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

    const content = document.getElementById('screen-content');
    content.innerHTML = `
      <div style="max-width: 900px;">
        <div style="margin-bottom: 32px;">
          <h1 style="font-size: 28px; margin-bottom: 8px; color: var(--cream);">Budget History</h1>
          <p style="color: var(--cream-dim); font-size: 14px;">Monthly budget usage over time</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; margin-bottom: 32px;">
          ${state.budgetHistory.slice(0, 12).map((h, idx) => {
            const color = h.usagePercent > 100 ? 'var(--red-bar)' : 
                         h.usagePercent > 75 ? 'var(--amber-bar)' : 
                         'var(--green-bar)';
            return `
              <div style="
                background: var(--card);
                border: 1px solid var(--stripe);
                border-radius: 12px;
                padding: 20px;
                display: flex;
                flex-direction: column;
              ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                  <div style="font-weight: 600; color: var(--cream);">
                    ${new Date(h.month + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </div>
                  <div style="
                    background: ${color};
                    color: #000;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 700;
                  ">${h.usagePercent}%</div>
                </div>

                <div style="
                  width: 100%;
                  height: 8px;
                  background: var(--stripe);
                  border-radius: 4px;
                  overflow: hidden;
                  margin-bottom: 12px;
                ">
                  <div style="
                    height: 100%;
                    width: ${Math.min(h.usagePercent, 100)}%;
                    background: ${color};
                    border-radius: 4px;
                    transition: width 0.3s ease;
                  "></div>
                </div>

                <div style="display: flex; justify-content: space-between; text-align: center;">
                  <div>
                    <div style="font-size: 12px; color: var(--cream-dim); margin-bottom: 4px;">Spent</div>
                    <div style="font-weight: 700; color: var(--cream); font-size: 16px;">
                      ${cur()}${h.spent.toFixed(2)}
                    </div>
                  </div>
                  <div style="border-right: 1px solid var(--stripe);"></div>
                  <div>
                    <div style="font-size: 12px; color: var(--cream-dim); margin-bottom: 4px;">Budget</div>
                    <div style="font-weight: 700; color: var(--cream); font-size: 16px;">
                      ${cur()}${h.budget.toFixed(2)}
                    </div>
                  </div>
                </div>

                ${h.usagePercent > 100 ? `
                  <div style="
                    margin-top: 12px;
                    padding: 8px;
                    background: rgba(201, 107, 91, 0.2);
                    border: 1px solid var(--expense);
                    border-radius: 6px;
                    color: var(--expense);
                    font-size: 12px;
                    text-align: center;
                    font-weight: 500;
                  ">
                    Over budget by ${cur()}${(h.spent - h.budget).toFixed(2)}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>

        <div style="
          background: var(--card);
          border: 1px solid var(--stripe);
          border-radius: 12px;
          padding: 24px;
        ">
          <h3 style="color: var(--cream); margin-bottom: 16px; font-size: 16px;">Summary</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
            <div style="text-align: center; padding: 12px;">
              <div style="color: var(--cream-dim); font-size: 13px; margin-bottom: 8px;">Average Monthly Spend</div>
              <div style="font-size: 24px; font-weight: 700; color: var(--orange);">
                ${cur()}${(state.budgetHistory.reduce((sum, h) => sum + h.spent, 0) / state.budgetHistory.length).toFixed(2)}
              </div>
            </div>
            <div style="text-align: center; padding: 12px;">
              <div style="color: var(--cream-dim); font-size: 13px; margin-bottom: 8px;">Highest Usage</div>
              <div style="font-size: 24px; font-weight: 700; color: var(--red-bar);">
                ${Math.max(...state.budgetHistory.map(h => h.usagePercent))}%
              </div>
            </div>
            <div style="text-align: center; padding: 12px;">
              <div style="color: var(--cream-dim); font-size: 13px; margin-bottom: 8px;">Total Months Tracked</div>
              <div style="font-size: 24px; font-weight: 700; color: var(--green-bar);">
                ${state.budgetHistory.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    state.screen = 'history';
  };

  // ================= MONTHLY BUDGET REFRESH ================= 
  window.checkMonthlyBudgetReset = function() {
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
    }
  };

  // Check on app init
  setTimeout(() => {
    if (window.state && window.state.budgets) {
      checkMonthlyBudgetReset();
    }
  }, 1000);
}