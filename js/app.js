const BRAND_CONFIG = {
  storageKey: 'binmolhy_products_v1',
  productsUpdatedKey: 'binmolhy_products_updated',
  adminSessionKey: 'binmolhy_admin_session',
  adminUser: 'admin',
  adminHash: 'ce68ab2ed21f2988b73c3a4d973265189f0fcb93984351a7ce77060f22f7ae4b',
  adminSessionHours: 12,
};

const DEFAULT_PRODUCTS = [
  {
    id: 'snk-001',
    name: 'Golden Crunch Cassava Chips',
    shortDescription: 'Thin-cut cassava chips with sea salt and lime zest.',
    description:
      'Our signature cassava chips are slow-cooked in small batches for a crisp finish with bright lime notes. Crafted for tea breaks and snacking sessions.',
    ingredients: ['Cassava', 'Cold-pressed palm oil', 'Sea salt', 'Lime zest'],
    price: 9.9,
    category: 'Snacks',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    buyLink: 'https://shopee.com',
    featured: true,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 'tea-001',
    name: 'Emerald Jade Green Tea',
    shortDescription: 'Handpicked green tea leaves with floral aroma.',
    description:
      'A calming green tea blend that balances grassy notes with a clean, refreshing finish. Perfect for afternoon resets.',
    ingredients: ['Jade green tea leaves'],
    price: 18.5,
    category: 'Tea',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    buyLink: 'https://lazada.com',
    featured: true,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 'food-001',
    name: 'Spiced Coconut Rendang',
    shortDescription: 'Ready-to-heat meal with rich coconut gravy.',
    description:
      'A premium ready meal simmered with aromatic spices, coconut milk, and tender cuts for a satisfying bowl in minutes.',
    ingredients: ['Coconut milk', 'Lemongrass', 'Galangal', 'Chili', 'Spice blend'],
    price: 24.9,
    category: 'Food',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    buyLink: 'https://shopee.com',
    featured: true,
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 'snk-002',
    name: 'Honey Sesame Crunch',
    shortDescription: 'Roasted peanuts glazed with honey sesame.',
    description:
      'A sweet-savoury snack with toasted sesame and a caramelized finish. Great for pairing with tea and coffee.',
    ingredients: ['Peanuts', 'Honey', 'Sesame seeds', 'Brown sugar'],
    price: 8.5,
    category: 'Snacks',
    image:
      'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=900&q=80',
    buyLink: 'https://lazada.com',
    featured: false,
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 'tea-002',
    name: 'Midnight Oolong Reserve',
    shortDescription: 'Deep roasted oolong with notes of cocoa.',
    description:
      'Complex, roasted oolong tea crafted for late-night calm. Smooth texture with a subtle cocoa finish.',
    ingredients: ['Oolong tea leaves'],
    price: 22.0,
    category: 'Tea',
    image:
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    buyLink: 'https://shopee.com',
    featured: false,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 'food-002',
    name: 'Signature Nasi Lemak Set',
    shortDescription: 'Fragrant rice, sambal, peanuts, and anchovies.',
    description:
      'A full nasi lemak experience in a convenient pack with fragrant coconut rice and premium sambal.',
    ingredients: ['Coconut rice', 'Sambal', 'Anchovies', 'Peanuts', 'Cucumber'],
    price: 19.9,
    category: 'Food',
    image:
      'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80',
    buyLink: 'https://lazada.com',
    featured: true,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 'snk-003',
    name: 'Crispy Seaweed Rolls',
    shortDescription: 'Light seaweed rolls with a savory finish.',
    description:
      'Thin seaweed sheets rolled with rice crisps for a delicate crunch and umami-rich taste.',
    ingredients: ['Seaweed', 'Rice crisps', 'Sea salt'],
    price: 7.5,
    category: 'Snacks',
    image:
      'https://images.unsplash.com/photo-1525059337994-6f2a1311b4b4?auto=format&fit=crop&w=900&q=80',
    buyLink: 'https://shopee.com',
    featured: false,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 'tea-003',
    name: 'Citrus Lemongrass Tea',
    shortDescription: 'Zesty herbal tea with lemongrass and citrus.',
    description:
      'A refreshing herbal infusion with lemongrass, dried citrus peel, and a light honeyed finish.',
    ingredients: ['Lemongrass', 'Orange peel', 'Lemon peel', 'Natural honey notes'],
    price: 16.5,
    category: 'Tea',
    image:
      'https://images.unsplash.com/photo-1451748266019-5bf9f69c4577?auto=format&fit=crop&w=900&q=80',
    buyLink: 'https://lazada.com',
    featured: false,
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 'food-003',
    name: 'Heritage Curry Puff Bites',
    shortDescription: 'Golden pastry bites with spiced potato.',
    description:
      'Flaky curry puff bites filled with spiced potato and curry leaves, ready for quick heating.',
    ingredients: ['Pastry', 'Potato', 'Curry leaves', 'Spices'],
    price: 12.9,
    category: 'Food',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    buyLink: 'https://shopee.com',
    featured: false,
    isNew: false,
    isBestSeller: false,
  },
];

const CATEGORY_OPTIONS = [
  'All',
  'Snacks',
  'Tea',
  'Food',
  'New Arrivals',
  'Best Sellers',
];

const formatPrice = (value) => `RM ${Number(value).toFixed(2)}`;
const formatDateTime = (value) => {
  if (!value) return 'Not yet updated';
  try {
    return new Date(value).toLocaleString('en-MY', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  } catch (error) {
    return new Date(value).toLocaleString();
  }
};

const getStoredProducts = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(BRAND_CONFIG.storageKey));
    return Array.isArray(stored) && stored.length ? stored : null;
  } catch (error) {
    return null;
  }
};

const saveProducts = (products) => {
  localStorage.setItem(BRAND_CONFIG.storageKey, JSON.stringify(products));
  localStorage.setItem(BRAND_CONFIG.productsUpdatedKey, Date.now().toString());
};

const getProductsUpdated = () => {
  const timestamp = localStorage.getItem(BRAND_CONFIG.productsUpdatedKey);
  return timestamp ? Number(timestamp) : null;
};

const ensureProductsSeeded = () => {
  if (!getStoredProducts()) {
    saveProducts(DEFAULT_PRODUCTS);
  }
};

const getProducts = () => getStoredProducts() || DEFAULT_PRODUCTS;

const getProductById = (id) => getProducts().find((item) => item.id === id);

const matchesCategory = (product, category) => {
  if (category === 'All') return true;
  if (category === 'New Arrivals') return product.isNew;
  if (category === 'Best Sellers') return product.isBestSeller;
  return product.category === category;
};

const renderProductCard = (product, showTag = true) => {
  const tag = product.isNew
    ? '<span class="tag">New Arrival</span>'
    : product.isBestSeller
      ? '<span class="tag">Best Seller</span>'
      : '';

  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-meta">
        <span>${product.category}</span>
        <span>${formatPrice(product.price)}</span>
      </div>
      <h3>${product.name}</h3>
      <p>${product.shortDescription}</p>
      ${showTag ? tag : ''}
      <div style="margin-top:auto; display:flex; gap:10px; flex-wrap:wrap;">
        <a class="btn btn-outline" href="product.html?id=${product.id}">View Details</a>
        <a class="btn btn-primary" href="${product.buyLink}" target="_blank" rel="noopener">Buy Now</a>
      </div>
    </article>
  `;
};

const initNavigation = () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
};

const initHome = () => {
  const featuredContainer = document.querySelector('[data-featured-products]');
  const newContainer = document.querySelector('[data-new-products]');
  if (!featuredContainer) return;
  ensureProductsSeeded();
  const products = getProducts();
  featuredContainer.innerHTML = products.filter((item) => item.featured).slice(0, 4).map((item) => renderProductCard(item, false)).join('');
  if (newContainer) {
    newContainer.innerHTML = products.filter((item) => item.isNew).slice(0, 3).map((item) => renderProductCard(item, false)).join('');
  }
};

const initProductsPage = () => {
  const grid = document.querySelector('[data-product-grid]');
  const searchInput = document.querySelector('[data-search-input]');
  const chipsContainer = document.querySelector('[data-category-chips]');
  if (!grid || !searchInput || !chipsContainer) return;
  ensureProductsSeeded();

  let activeCategory = 'All';

  chipsContainer.innerHTML = CATEGORY_OPTIONS.map(
    (category) => `<button class="chip" data-category="${category}">${category}</button>`
  ).join('');

  const chips = Array.from(chipsContainer.querySelectorAll('.chip'));

  const updateGrid = () => {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = getProducts().filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(query);
      return matchesSearch && matchesCategory(product, activeCategory);
    });

    grid.innerHTML = filtered.map((product) => renderProductCard(product)).join('') || '<p>No products match your search.</p>';
  };

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      activeCategory = chip.dataset.category;
      chips.forEach((item) => item.classList.remove('active'));
      chip.classList.add('active');
      updateGrid();
    });
  });

  chips[0]?.classList.add('active');
  searchInput.addEventListener('input', updateGrid);
  updateGrid();
};

const initProductDetail = () => {
  const detailContainer = document.querySelector('[data-product-detail]');
  if (!detailContainer) return;
  ensureProductsSeeded();
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = id ? getProductById(id) : null;

  if (!product) {
    detailContainer.innerHTML = '<p>Product not found. Please return to the products page.</p>';
    return;
  }

  detailContainer.innerHTML = `
    <div class="product-detail">
      <img src="${product.image}" alt="${product.name}">
      <div class="detail-card">
        <span class="badge">${product.category}</span>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <h3>${formatPrice(product.price)}</h3>
        <h4>Ingredients / Details</h4>
        <ul>
          ${product.ingredients.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <a class="btn btn-outline" href="products.html">Back to Products</a>
          <a class="btn btn-primary" href="${product.buyLink}" target="_blank" rel="noopener">Buy Now</a>
        </div>
      </div>
    </div>
  `;
};

const hashValue = async (value) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

const setAdminSession = () => {
  const expiresAt = Date.now() + BRAND_CONFIG.adminSessionHours * 60 * 60 * 1000;
  localStorage.setItem(
    BRAND_CONFIG.adminSessionKey,
    JSON.stringify({ user: BRAND_CONFIG.adminUser, expiresAt })
  );
};

const isAdminAuthenticated = () => {
  try {
    const session = JSON.parse(localStorage.getItem(BRAND_CONFIG.adminSessionKey));
    if (!session) return false;
    if (session.user !== BRAND_CONFIG.adminUser) return false;
    return Date.now() < session.expiresAt;
  } catch (error) {
    return false;
  }
};

const initLogin = () => {
  const form = document.querySelector('[data-login-form]');
  const feedback = document.querySelector('[data-login-feedback]');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = form.querySelector('input[name="username"]').value.trim();
    const password = form.querySelector('input[name="password"]').value.trim();

    const hashed = await hashValue(password);
    if (username === BRAND_CONFIG.adminUser && hashed === BRAND_CONFIG.adminHash) {
      setAdminSession();
      window.location.href = 'admin.html';
      return;
    }
    feedback.textContent = 'Invalid credentials. Please try again.';
  });
};

const initAdmin = () => {
  const adminSection = document.querySelector('[data-admin-section]');
  if (!adminSection) return;
  if (!isAdminAuthenticated()) {
    window.location.href = 'login.html';
    return;
  }

  ensureProductsSeeded();

  const kpiTotal = document.querySelector('[data-kpi-total]');
  const kpiFeatured = document.querySelector('[data-kpi-featured]');
  const kpiNew = document.querySelector('[data-kpi-new]');
  const kpiBest = document.querySelector('[data-kpi-best]');
  const lastUpdatedLabel = document.querySelector('[data-last-updated]');
  const form = document.querySelector('[data-product-form]');
  const list = document.querySelector('[data-admin-products]');
  const searchInput = document.querySelector('[data-admin-search]');
  const filterSelect = document.querySelector('[data-admin-filter]');
  const sortSelect = document.querySelector('[data-admin-sort]');
  const imageInput = document.querySelector('[data-image-input]');
  const imagePreview = document.querySelector('[data-image-preview]');
  const resetButton = document.querySelector('[data-reset-form]');
  const scrollButton = document.querySelector('[data-scroll-form]');
  const logoutButton = document.querySelector('[data-logout]');
  const formAnchor = document.querySelector('[data-form-anchor]');
  let editingId = null;
  let uploadedImage = null;
  let activeFilter = 'All';
  let activeSort = 'Name';
  let searchQuery = '';

  const resetForm = () => {
    form.reset();
    editingId = null;
    uploadedImage = null;
    imagePreview.src = 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80';
    form.querySelector('[data-submit-label]').textContent = 'Add Product';
  };

  const updateStats = () => {
    const products = getProducts();
    if (kpiTotal) kpiTotal.textContent = products.length;
    if (kpiFeatured) kpiFeatured.textContent = products.filter((item) => item.featured).length;
    if (kpiNew) kpiNew.textContent = products.filter((item) => item.isNew).length;
    if (kpiBest) kpiBest.textContent = products.filter((item) => item.isBestSeller).length;
    if (lastUpdatedLabel) {
      const updatedAt = getProductsUpdated();
      lastUpdatedLabel.textContent = `Last updated: ${formatDateTime(updatedAt)}`;
    }
  };

  const matchesAdminFilter = (product) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return product.featured;
    if (activeFilter === 'New Arrivals') return product.isNew;
    if (activeFilter === 'Best Sellers') return product.isBestSeller;
    return product.category === activeFilter;
  };

  const sortAdminProducts = (products) => {
    const sorted = [...products];
    if (activeSort === 'PriceLow') {
      return sorted.sort((a, b) => a.price - b.price);
    }
    if (activeSort === 'PriceHigh') {
      return sorted.sort((a, b) => b.price - a.price);
    }
    return sorted.sort((a, b) => a.name.localeCompare(b.name));
  };

  const renderAdminProducts = () => {
    const products = sortAdminProducts(
      getProducts().filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery);
        return matchesSearch && matchesAdminFilter(product);
      })
    );

    list.innerHTML =
      products
        .map((product) => {
          const tags = [];
          if (product.featured) tags.push('Featured');
          if (product.isNew) tags.push('New');
          if (product.isBestSeller) tags.push('Best seller');
          const tagMarkup = tags.length
            ? tags.map((tag) => `<span class="admin-tag">${tag}</span>`).join('')
            : '<span class="admin-tag secondary">Standard</span>';

          return `
      <div class="admin-product">
        <img src="${product.image}" alt="${product.name}">
        <div class="admin-product-info">
          <div class="admin-product-header">
            <h4>${product.name}</h4>
            <span class="admin-tag secondary">${product.category}</span>
          </div>
          <p>${product.shortDescription}</p>
          <div class="admin-product-meta">
            <span>${formatPrice(product.price)}</span>
            <div class="admin-tags">${tagMarkup}</div>
          </div>
          <div class="admin-actions">
            <button class="btn btn-outline" data-edit="${product.id}">Edit</button>
            <button class="btn btn-primary" data-delete="${product.id}">Delete</button>
          </div>
        </div>
      </div>
    `;
        })
        .join('') || '<p class="notice">No products match your current filters.</p>';

    updateStats();
  };

  const handleEdit = (id) => {
    const product = getProductById(id);
    if (!product) return;
    editingId = id;
    uploadedImage = product.image;
    form.name.value = product.name;
    form.shortDescription.value = product.shortDescription;
    form.description.value = product.description;
    form.ingredients.value = product.ingredients.join(', ');
    form.price.value = product.price;
    form.category.value = product.category;
    form.buyLink.value = product.buyLink;
    form.featured.checked = product.featured;
    form.isNew.checked = product.isNew;
    form.isBestSeller.checked = product.isBestSeller;
    imagePreview.src = product.image;
    form.querySelector('[data-submit-label]').textContent = 'Update Product';
  };

  const handleDelete = (id) => {
    const updated = getProducts().filter((product) => product.id !== id);
    saveProducts(updated);
    renderAdminProducts();
  };

  imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImage = reader.result;
      imagePreview.src = uploadedImage;
    };
    reader.readAsDataURL(file);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const products = getProducts();
    const ingredients = formData
      .get('ingredients')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    const payload = {
      id: editingId || `prod-${Date.now()}`,
      name: formData.get('name'),
      shortDescription: formData.get('shortDescription'),
      description: formData.get('description'),
      ingredients,
      price: Number(formData.get('price')),
      category: formData.get('category'),
      buyLink: formData.get('buyLink'),
      image: uploadedImage || imagePreview.src,
      featured: formData.get('featured') === 'on',
      isNew: formData.get('isNew') === 'on',
      isBestSeller: formData.get('isBestSeller') === 'on',
    };

    const updated = editingId
      ? products.map((product) => (product.id === editingId ? payload : product))
      : [payload, ...products];

    saveProducts(updated);
    renderAdminProducts();
    resetForm();
  });

  list.addEventListener('click', (event) => {
    const editId = event.target.getAttribute('data-edit');
    const deleteId = event.target.getAttribute('data-delete');
    if (editId) handleEdit(editId);
    if (deleteId) handleDelete(deleteId);
  });

  searchInput?.addEventListener('input', () => {
    searchQuery = searchInput.value.trim().toLowerCase();
    renderAdminProducts();
  });

  filterSelect?.addEventListener('change', () => {
    activeFilter = filterSelect.value;
    renderAdminProducts();
  });

  sortSelect?.addEventListener('change', () => {
    activeSort = sortSelect.value;
    renderAdminProducts();
  });

  scrollButton?.addEventListener('click', () => {
    formAnchor?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  logoutButton?.addEventListener('click', () => {
    localStorage.removeItem(BRAND_CONFIG.adminSessionKey);
    window.location.href = 'login.html';
  });

  resetButton.addEventListener('click', resetForm);

  renderAdminProducts();
};

const initPage = () => {
  initNavigation();
  const page = document.body.dataset.page;
  if (page === 'home') initHome();
  if (page === 'products') initProductsPage();
  if (page === 'detail') initProductDetail();
  if (page === 'login') initLogin();
  if (page === 'admin') initAdmin();
};

document.addEventListener('DOMContentLoaded', initPage);
