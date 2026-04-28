(function () {
  const STORAGE_KEY = "catalogProducts";

  const normalizeProduct = (product) => ({
    id: product.id,
    name: product.name,
    shortDescription: product.shortDescription,
    description: product.description,
    ingredients: product.ingredients || [],
    price: Number(product.price) || 0,
    category: product.category,
    isFeatured: Boolean(product.isFeatured),
    isNew: Boolean(product.isNew),
    isBestSeller: Boolean(product.isBestSeller),
    image: product.image,
    buyLink: product.buyLink
  });

  const seedProducts = () => {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) {
      const seeded = CatalogSeed.products.map(normalizeProduct);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
      return seeded;
    }
    return JSON.parse(existing);
  };

  const getProducts = () => seedProducts().map(normalizeProduct);

  const saveProducts = (products) => {
    const normalized = products.map(normalizeProduct);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  };

  const getProductById = (id) => getProducts().find((product) => product.id === id);

  const getCategories = () => {
    const products = getProducts();
    const categories = new Set(products.map((product) => product.category));
    return Array.from(categories);
  };

  window.CatalogStorage = {
    getProducts,
    saveProducts,
    getProductById,
    getCategories
  };
})();
