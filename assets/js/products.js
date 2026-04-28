(function () {
  const filterContainer = document.getElementById("category-filters");
  const searchInput = document.getElementById("product-search");
  const grid = document.getElementById("product-grid");

  if (!filterContainer || !searchInput || !grid) return;

  const categories = ["All", "Snacks", "Tea", "Food", "New Arrivals", "Best Sellers"];
  let activeCategory = "All";
  let searchTerm = "";

  const setActiveCategory = (category) => {
    activeCategory = category;
    Array.from(filterContainer.children).forEach((button) => {
      button.classList.toggle("active", button.dataset.category === category);
    });
    renderProducts();
  };

  const matchesCategory = (product) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "New Arrivals") return product.isNew;
    if (activeCategory === "Best Sellers") return product.isBestSeller;
    return product.category === activeCategory;
  };

  const matchesSearch = (product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase());

  const renderProducts = () => {
    const products = CatalogStorage.getProducts();
    const filtered = products.filter(
      (product) => matchesCategory(product) && matchesSearch(product)
    );

    grid.innerHTML = "";
    if (filtered.length === 0) {
      grid.appendChild(
        CatalogUI.createEmptyState("Try a different category or search term.")
      );
      return;
    }

    filtered.forEach((product) => {
      grid.appendChild(CatalogUI.createProductCard(product));
    });
  };

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.dataset.category = category;
    button.textContent = category;
    button.addEventListener("click", () => setActiveCategory(category));
    filterContainer.appendChild(button);
  });

  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    renderProducts();
  });

  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get("category");
  if (initialCategory && categories.includes(initialCategory)) {
    setActiveCategory(initialCategory);
  } else {
    setActiveCategory("All");
  }
})();
