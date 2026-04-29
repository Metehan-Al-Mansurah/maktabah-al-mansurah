/* ================================================================
   MAKTABAH AL MANSURAH — Cart
   ================================================================ */

'use strict';

const STORAGE_KEY = 'maktabah_cart';

const Cart = (() => {
  let state = { items: [] };

  function load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) state = JSON.parse(saved);
    } catch (_) {
      state = { items: [] };
    }
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
  }

  function getCount() {
    return state.items.reduce((sum, i) => sum + i.qty, 0);
  }

  function getTotal() {
    return state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  function add(product) {
    const existing = state.items.find(i => i.id === product.id);
    if (existing) {
      existing.qty++;
    } else {
      state.items.push({
        id: product.id,
        name: product.name,
        subtitle: product.subtitle,
        category: product.category,
        price: product.price,
        qty: 1
      });
    }
    save();
    updateBadge(true);
    renderDrawer();
    openDrawer();
  }

  function remove(productId) {
    state.items = state.items.filter(i => i.id !== productId);
    save();
    updateBadge(false);
    renderDrawer();
    if (state.items.length === 0) {
      const drawerItems = document.querySelector('.cart-drawer__items');
      if (drawerItems) renderEmptyState(drawerItems);
    }
  }

  function changeQty(productId, delta) {
    const item = state.items.find(i => i.id === productId);
    if (!item) return;
    item.qty = Math.max(0, item.qty + delta);
    if (item.qty === 0) { remove(productId); return; }
    save();
    updateBadge(false);
    renderDrawer();
  }

  function updateBadge(animate) {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    const count = getCount();
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
    if (animate) {
      badge.classList.remove('pop');
      void badge.offsetWidth;
      badge.classList.add('pop');
    }
  }

  function getCategoryIcon(cat) {
    if (window.getCategoryIcon) return window.getCategoryIcon(cat);
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="24" height="24"><path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/></svg>`;
  }

  function getCategoryLabel(cat) {
    if (window.getCategoryLabel) return window.getCategoryLabel(cat);
    const labels = {
      buecher: 'Bücher', parfum: 'Parfüm & Misk', miswak: 'Miswak',
      abaya: 'Abayas', gebetsteppich: 'Gebetsteppich', tasbih: 'Tasbih', sonstiges: 'Sonstiges'
    };
    return labels[cat] || cat;
  }

  function formatPrice(p) {
    if (window.formatPrice) return window.formatPrice(p);
    return p.toFixed(2).replace('.', ',') + ' €';
  }

  function renderEmptyState(container) {
    container.innerHTML = `
      <div class="cart-drawer__empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
          <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
        </svg>
        <p>Dein Warenkorb ist leer.</p>
      </div>`;
  }

  function renderDrawer() {
    const drawerItems = document.querySelector('.cart-drawer__items');
    const totalEl = document.querySelector('.cart-drawer__total-amount');
    if (!drawerItems) return;

    if (state.items.length === 0) {
      renderEmptyState(drawerItems);
      if (totalEl) totalEl.textContent = '0,00 €';
      return;
    }

    drawerItems.innerHTML = state.items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item__img">
          <div class="cart-item__img-placeholder product-card__img" data-cat="${item.category}" style="border-radius:6px;">
            <span style="width:28px;height:28px;opacity:0.45;color:var(--clr-text-primary);">${getCategoryIcon(item.category)}</span>
          </div>
        </div>
        <div>
          <p class="cart-item__name">${item.name}</p>
          <span class="cart-item__cat">${getCategoryLabel(item.category)}</span>
          <div class="cart-item__qty">
            <button class="qty-btn" data-id="${item.id}" data-delta="-1" aria-label="Menge verringern">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" data-id="${item.id}" data-delta="1" aria-label="Menge erhöhen">+</button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
          <span class="cart-item__price">${formatPrice(item.price * item.qty)}</span>
          <button class="cart-item__remove" data-remove-id="${item.id}" aria-label="${item.name} entfernen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 18 18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    `).join('');

    if (totalEl) totalEl.textContent = formatPrice(getTotal());

    /* Bind qty and remove buttons */
    drawerItems.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        changeQty(parseInt(btn.dataset.id), parseInt(btn.dataset.delta));
      });
    });
    drawerItems.querySelectorAll('.cart-item__remove').forEach(btn => {
      btn.addEventListener('click', () => {
        remove(parseInt(btn.dataset.removeId));
      });
    });
  }

  function openDrawer() {
    document.body.classList.add('cart-open');
    const drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.removeAttribute('aria-hidden');
    const firstFocusable = drawer && drawer.querySelector('button');
    if (firstFocusable) firstFocusable.focus();
  }

  function closeDrawer() {
    document.body.classList.remove('cart-open');
    const drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.setAttribute('aria-hidden', 'true');
    const trigger = document.getElementById('cartTrigger');
    if (trigger) trigger.focus();
  }

  function init() {
    load();
    updateBadge(false);
    renderDrawer();

    const trigger = document.getElementById('cartTrigger');
    const closeBtn = document.getElementById('cartClose');
    const overlay = document.getElementById('cartOverlay');

    if (trigger) trigger.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && document.body.classList.contains('cart-open')) closeDrawer();
    });
  }

  return { init, add, remove, changeQty, getCount, getTotal, openDrawer, closeDrawer };
})();

document.addEventListener('DOMContentLoaded', () => Cart.init());
window.Cart = Cart;
