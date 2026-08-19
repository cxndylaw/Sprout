/* ================= DESKTOP-SPECIFIC FUNCTIONALITY ================= */

// Only run on desktop mode
if (document.body.classList.contains('desktop-mode')) {
  // ================= TRANSACTION DESCRIPTION CLEANER ================= 
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

  // ================= SMART LOCAL CATEGORIZER ================= 
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

  // ================= QUICK CATEGORY PICKER ================= 
  window.quickPickCategory = function(txnId) {
    const tx = window.state.txns.find(t => t.id === txnId);
    if (!tx) return;
    
    const allCats = [...new Set([...Object.keys(window.state.budgets), 'Other'])];
    
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
      return `<button onclick="window.changeQuickCategory(${txnId}, '${cat}')" style="padding: 10px; background: ${bgColor}; border: 1px solid ${borderColor}; color: var(--cream); border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 600; transition: all 0.2s;">${cat}</button>`;
    }).join('');
    
    modal.innerHTML = `
      <div style="background: var(--card); border-radius: 12px; padding: 20px; max-width: 400px; width: 90%; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
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
  };

  window.changeQuickCategory = function(txnId, category) {
    const tx = window.state.txns.find(t => t.id === txnId);
    if (!tx) return;
    
    tx.cat = category;
    window.saveState();
    window.showToast(`Category changed to ${category}`, 'success', 2000);
    
    document.querySelector('div[style*="position: fixed"]')?.remove();
    window.render();
  };

  // ================= REVIEW TRANSACTIONS ================= 
  window.getUnreviewedTransactions = function() {
    return window.state.txns.filter(t => {
      // Include transactions that are auto-added AND either:
      // 1. Don't have reviewed field (backward compat with old imports)
      // 2. Have reviewed: false
      if (!t.isAutoAdded) return false;
      return t.reviewed === undefined || t.reviewed === false;
    });
  };

  window.startReviewMode = function() {
    const unreviewed = window.getUnreviewedTransactions();
    if (unreviewed.length === 0) {
      window.showToast('All transactions reviewed!', 'success', 2000);
      return;
    }
    window.state.reviewMode = true;
    window.state.currentReviewIndex = 0;
    window.state.prevScreen = window.state.screen;
    window.state.screen = 'reviewTxns';
    window.render();
    
    // Scroll to top
    setTimeout(() => {
      const screenContent = document.getElementById('screen-content');
      if (screenContent) screenContent.scrollTop = 0;
    }, 0);
  };

  window.exitReviewMode = function() {
    window.state.reviewMode = false;
    window.state.currentReviewIndex = 0;
    window.state.screen = window.state.prevScreen || 'bank';
    window.render();
  };

  window.reviewAndCategorize = function(category) {
    const unreviewed = window.getUnreviewedTransactions();
    if (unreviewed.length === 0) return;
    
    const currentTx = unreviewed[window.state.currentReviewIndex];
    if (currentTx) {
      currentTx.cat = category;
      currentTx.reviewed = true;
    }
    
    window.saveState();
    
    if (window.state.currentReviewIndex < unreviewed.length - 1) {
      window.state.currentReviewIndex++;
      window.showToast(`Categorized as ${category}`, 'success', 1000);
      window.render();
    } else {
      window.showToast('All reviewed! ✨', 'success', 2000);
      setTimeout(() => window.exitReviewMode(), 1500);
    }
  };

  window.renderReviewTransactions = function() {
    const unreviewed = window.getUnreviewedTransactions();
    if (unreviewed.length === 0) {
      return `
      <div style="padding:40px 20px;text-align:center;">
        <div style="font-size:48px;margin-bottom:16px;">✨</div>
        <div style="font-size:18px;font-weight:600;margin-bottom:8px;">All caught up!</div>
        <div style="color:var(--cream-dim);margin-bottom:24px;">All transactions have been reviewed</div>
        <button onclick="window.state.screen='bank'; window.render();" style="background:var(--orange);color:var(--bg);border:none;padding:12px 24px;border-radius:8px;cursor:pointer;font-weight:600;">Back to Transactions</button>
      </div>
      `;
    }
    
    const tx = unreviewed[window.state.currentReviewIndex];
    const progress = window.state.currentReviewIndex + 1;
    const total = unreviewed.length;
    const progressPercent = (progress / total) * 100;
    
    // Get categories based on transaction type
    const categoryList = tx.type === 'income' 
      ? window.INCOME_CATS 
      : window.EXPENSE_CATS_PRIMARY.concat(window.EXPENSE_CATS_MORE);
    
    const iconKey = window.CAT_ICON[tx.cat] || 'misc';
    const color = window.CAT_COLOR[tx.cat] || '#6b7280';
    
    // Build category buttons with proper escaping
    const categoryButtons = categoryList.map(cat => {
      const catColor = window.CAT_COLOR[cat] || '#6b7280';
      const catIcon = window.ICON[window.CAT_ICON[cat] || 'misc'];
      const iconContent = catIcon?.match(/<svg[^>]*>(.*?)<\/svg>/s)?.[1] || '';
      return `<button onclick="window.reviewAndCategorize('${cat}')" style="padding:10px;background:rgba(255,255,255,0.04);border:1.5px solid rgba(255,255,255,0.12);color:var(--cream);border-radius:8px;cursor:pointer;transition:all 0.2s;display:flex;flex-direction:column;align-items:center;gap:6px;font-size:11px;font-weight:600;min-height:70px;justify-content:center;flex: 1 1 calc(20% - 8px);" onmouseover="this.style.background='rgba(255,255,255,0.08)';this.style.borderColor='${catColor}44'" onmouseout="this.style.background='rgba(255,255,255,0.04)';this.style.borderColor='rgba(255,255,255,0.12)'"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:${catColor};">${iconContent}</svg><span style="text-align:center;line-height:1;">${cat}</span></button>`;
    }).join('');
    
    return `
    <div style="padding:0;">
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
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${window.ICON[iconKey]?.match(/<svg[^>]*>(.*?)<\/svg>/s)?.[1] || ''}</svg>
        </div>
        <div style="font-size:14px;color:var(--cream-dim);margin-bottom:8px;">${window.escapeHtml ? window.escapeHtml(tx.desc) : tx.desc}</div>
        <div style="font-size:28px;font-weight:700;color:var(--cream);margin-bottom:16px;">${tx.type === 'income' ? '+' : '-'}${window.cur()}${window.fmt(tx.amount)}</div>
        <div style="font-size:12px;color:var(--cream-dim);">${window.dmy ? window.dmy(tx.date) : tx.date}</div>
      </div>

      <!-- Category buttons -->
      <div style="margin-bottom:24px;">
        <div style="font-size:13px;font-weight:600;margin-bottom:12px;color:var(--cream-dim);">SELECT CATEGORY</div>
        <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:8px;">
          ${categoryButtons}
        </div>
      </div>

      <!-- Action buttons -->
      <div style="display:flex;gap:8px;margin-bottom:24px;">
        <button onclick="window.exitReviewMode()" style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);color:var(--cream);padding:12px;border-radius:8px;cursor:pointer;font-weight:600;">Exit Review</button>
        <button onclick="window.state.currentReviewIndex = Math.max(0, window.state.currentReviewIndex - 1); window.render();" style="flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);color:var(--cream);padding:12px;border-radius:8px;cursor:pointer;font-weight:600;${window.state.currentReviewIndex === 0 ? 'opacity:0.5;cursor:not-allowed;' : ''}">← Previous</button>
      </div>
    </div>
    `;
  };

  // ================= SIDEBAR NAVIGATION ================= 
  function renderDesktopNav() {
    if (!window.state || !window.ICON) return;
    
    const nav = document.getElementById('sidebar-nav');
    const sidebar = document.getElementById('sidebar');
    if (!nav) return;

    // Hide sidebar on auth screens
    const isAuthScreen = window.state.screen === 'auth' || window.state.screen === 'splash' || window.state.screen === 'setup';
    if (sidebar) sidebar.style.display = isAuthScreen ? 'none' : 'flex';

    const navItems = [
      { id: 'home', label: 'Dashboard', icon: 'home' },
      { id: 'budget', label: 'Budgets', icon: 'budget' },
      { id: 'bank', label: 'Transactions', icon: 'bank' },
      { id: 'account', label: 'Account', icon: 'account' },
    ];

    nav.innerHTML = navItems.map(item => `
      <div class="nav-item ${window.state.screen === item.id ? 'active' : ''}" data-screen="${item.id}">
        ${window.ICON[item.icon] || ''}
        <span>${item.label}</span>
      </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const screen = item.dataset.screen;
        window.state.screen = screen;
        window.render();
      });
    });
  }

  // Wait for script.js to fully load
  let initAttempts = 0;
  const waitForInit = setInterval(() => {
    if (window.state && window.render && window.ICON) {
      clearInterval(waitForInit);
      
      // Override render to add sidebar
      const originalRender = window.render;
      window.render = function() {
        // For bank screen on desktop, intercept and add action buttons
        if (window.state && window.state.screen === 'bank') {
          const screenContent = document.getElementById('screen-content');
          if (screenContent && window.renderBankDesktop) {
            screenContent.innerHTML = window.renderBankDesktop();
            return; // Don't call originalRender to avoid double-rendering
          }
        }
        
        // Call original render first
        originalRender.call(this);
        
        // Show modals on desktop by moving them from phone frame to desktop modal container
        const phoneFrame = document.getElementById('phone');
        const desktopModalContainer = document.getElementById('modal-container');
        
        // Only overwrite desktop modals if there's a modal in the phone frame
        // This preserves custom modals like the upload modal
        if (phoneFrame && desktopModalContainer && phoneFrame.querySelector('#modal-container')) {
          const phoneModalContainer = phoneFrame.querySelector('#modal-container');
          // Only update if phone has modals to avoid clearing custom desktop modals
          if (phoneModalContainer.innerHTML.trim()) {
            desktopModalContainer.innerHTML = phoneModalContainer.innerHTML;
          }
        }
        
        // Hide phone frame but keep it in DOM for script.js
        phoneFrame.style.display = 'none';
        
        // Hide bottom nav
        const bottomNav = document.getElementById('bottom-nav-wrap');
        if (bottomNav) bottomNav.style.display = 'none';
        
        // Lock scroll on main-content and ensure modal container visibility
        const mainContent = document.getElementById('main-content');
        const hasModal = desktopModalContainer && desktopModalContainer.innerHTML.trim();
        if (mainContent) {
          mainContent.style.overflow = hasModal ? 'hidden' : 'auto';
        }
        if (desktopModalContainer) {
          desktopModalContainer.style.display = hasModal ? 'block' : 'none';
        }
        
        // Render sidebar
        renderDesktopNav();
      };

      // Set up logo
      const logoContainer = document.getElementById('app-logo-container');
      if (logoContainer) {
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

      // Initial render with sidebar
      renderDesktopNav();
    } else if (initAttempts++ > 100) {
      clearInterval(waitForInit);
      console.warn('Desktop mode init timeout');
    }
  }, 50);

  // ================= TRANSACTION UPLOAD ================= 
  window.showUploadTransactionsModal = function() {
    // Ensure modal-container exists
    let modalContainer = document.getElementById('modal-container');
    if (!modalContainer) {
      modalContainer = document.createElement('div');
      modalContainer.id = 'modal-container';
      document.body.appendChild(modalContainer);
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.style.display = 'flex'; // Force display
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
          <button onclick="this.closest('.modal-backdrop').remove(); document.body.classList.remove('modal-open'); document.getElementById('main-content').classList.remove('modal-open'); window.state.screen='home'; window.render();" style="
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

    modalContainer.appendChild(modal);
    
    // Lock scroll
    document.body.classList.add('modal-open');
    document.getElementById('main-content').classList.add('modal-open');
    
    const fileInput = document.getElementById('csv-upload');
    fileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const text = await file.text();
      const lines = text.split('\n').filter(line => line.trim());
      const headers = lines[0].toLowerCase().split(',').map(h => h.trim());
      
      const preview = document.getElementById('preview-list');
      preview.innerHTML = '';

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim());
        const transaction = {};
        
        headers.forEach((header, idx) => {
          transaction[header] = values[idx] || '';
        });

        if (transaction.date && transaction.amount) {
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

      if (lines.length > 1) {
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

    // First, close the modal immediately
    const modal = document.querySelector('.modal-backdrop');
    if (modal) modal.remove();
    
    // Unlock scroll
    document.body.classList.remove('modal-open');
    document.getElementById('main-content').classList.remove('modal-open');
    
    // Then process the import
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

        if (!window.state.txns) window.state.txns = [];
        window.state.txns.push(newTx);
        importedIds.push(newTx.id);
        importedCount++;
      }
    }

    // Save and update state
    window.state.lastImportIds = importedIds;
    await window.saveState();
    
    // Clear modal container and navigate
    document.getElementById('modal-container').innerHTML = '';
    document.body.classList.remove('modal-open');
    document.getElementById('main-content').classList.remove('modal-open');
    window.state.screen = 'bank';
    
    // Show success message
    if (importedCount > 0) {
      window.showToast(`${importedCount} transactions imported • ${importedCount} to review`, 'success', 6000);
    }
    
    // Render UI
    window.render();
  };

  // ================= BUDGET HISTORY ================= 
  window.showBudgetHistory = function() {
    if (!window.state.budgetHistory) window.state.budgetHistory = [];

    const today = new Date();
    const currentMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;

    const currentMonthTxs = (window.state.txns || []).filter(tx => {
      const txDate = new Date(tx.date);
      const txMonth = `${txDate.getFullYear()}-${String(txDate.getMonth() + 1).padStart(2, '0')}`;
      return txMonth === currentMonth && tx.type === 'expense';
    });

    const currentMonthSpent = currentMonthTxs.reduce((sum, tx) => sum + (tx.amount || 0), 0);
    const totalBudget = Object.values(window.state.budgets || {}).reduce((sum, b) => sum + (b || 0), 0);
    const currentUsagePercent = totalBudget > 0 ? Math.round((currentMonthSpent / totalBudget) * 100) : 0;

    if (!window.state.budgetHistory.find(h => h.month === currentMonth)) {
      window.state.budgetHistory.push({
        month: currentMonth,
        spent: currentMonthSpent,
        budget: totalBudget,
        usagePercent: currentUsagePercent
      });
    }

    window.state.budgetHistory.sort((a, b) => new Date(b.month) - new Date(a.month));

    const content = document.getElementById('screen-content');
    content.innerHTML = `
      <div style="max-width: 900px;">
        <div style="margin-bottom: 32px;">
          <h1 style="font-size: 28px; margin-bottom: 8px; color: var(--cream);">Budget History</h1>
          <p style="color: var(--cream-dim); font-size: 14px;">Monthly budget usage over time</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; margin-bottom: 32px;">
          ${window.state.budgetHistory.slice(0, 12).map((h, idx) => {
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
                      ${window.cur()}${h.spent.toFixed(2)}
                    </div>
                  </div>
                  <div style="border-right: 1px solid var(--stripe);"></div>
                  <div>
                    <div style="font-size: 12px; color: var(--cream-dim); margin-bottom: 4px;">Budget</div>
                    <div style="font-weight: 700; color: var(--cream); font-size: 16px;">
                      ${window.cur()}${h.budget.toFixed(2)}
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
                    Over budget by ${window.cur()}${(h.spent - h.budget).toFixed(2)}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    window.state.screen = 'history';
  };

  // Override renderBank for desktop to add action buttons
  window.renderBankDesktop = function() {
    const mobileBankHtml = window.renderBank();
    
    // Add action buttons at the top
    const actionButtons = `
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px;">
      <button onclick="window.showUploadTransactionsModal()" style="
        padding: 14px;
        background: rgba(220, 154, 90, 0.15);
        border: 1.5px solid rgba(220, 154, 90, 0.3);
        color: var(--orange);
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        font-size: 13px;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      " onmouseover="this.style.background='rgba(220, 154, 90, 0.25)'" onmouseout="this.style.background='rgba(220, 154, 90, 0.15)'">
        ${window.ICON.arrowUp}
        Import
      </button>
      
      <button onclick="window.state.form.type='expense'; window.goTo('addTxn')" style="
        padding: 14px;
        background: rgba(201, 107, 91, 0.15);
        border: 1.5px solid rgba(201, 107, 91, 0.3);
        color: var(--expense);
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        font-size: 13px;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      " onmouseover="this.style.background='rgba(201, 107, 91, 0.25)'" onmouseout="this.style.background='rgba(201, 107, 91, 0.15)'">
        ${window.ICON.minus}
        Add Expense
      </button>
      
      <button onclick="window.state.form.type='income'; window.goTo('addTxn')" style="
        padding: 14px;
        background: rgba(127, 185, 138, 0.15);
        border: 1.5px solid rgba(127, 185, 138, 0.3);
        color: var(--income);
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        font-size: 13px;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      " onmouseover="this.style.background='rgba(127, 185, 138, 0.25)'" onmouseout="this.style.background='rgba(127, 185, 138, 0.15)'">
        ${window.ICON.plus}
        Add Income
      </button>
    </div>
    `;
    
    return actionButtons + mobileBankHtml;
  };
}