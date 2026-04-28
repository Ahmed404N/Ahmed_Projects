(function () {
  const brandName = document.getElementById("brand-name");
  const brandTagline = document.getElementById("brand-tagline");
  const brandSubtitle = document.getElementById("brand-subtitle");
  const brandLocation = document.getElementById("brand-location");

  if (brandName) brandName.textContent = CatalogSeed.brand.name;
  if (brandTagline) brandTagline.textContent = CatalogSeed.brand.tagline;
  if (brandSubtitle) brandSubtitle.textContent = CatalogSeed.brand.heroSubtitle;
  if (brandLocation) brandLocation.textContent = CatalogSeed.brand.location;

  const products = CatalogStorage.getProducts();
  const featuredContainer = document.getElementById("featured-products");
  const featured = products.filter((product) => product.isFeatured).slice(0, 4);

  if (featuredContainer) {
    featuredContainer.innerHTML = "";
    if (featured.length === 0) {
      featuredContainer.appendChild(
        CatalogUI.createEmptyState("Featured items will appear here once added.")
      );
    } else {
      featured.forEach((product) => {
        featuredContainer.appendChild(CatalogUI.createProductCard(product));
      });
    }
  }

  const arrivalContainer = document.getElementById("arrival-products");
  if (arrivalContainer) {
    const arrivals = products.filter((product) => product.isNew).slice(0, 4);
    arrivalContainer.innerHTML = "";
    if (arrivals.length === 0) {
      arrivalContainer.appendChild(
        CatalogUI.createEmptyState("Fresh arrivals will be displayed soon.")
      );
    } else {
      arrivals.forEach((product) => {
        arrivalContainer.appendChild(CatalogUI.createProductCard(product));
      });
    }
  }

  const highlightContainer = document.getElementById("category-highlights");
  if (highlightContainer) {
    CatalogSeed.categoryHighlights.forEach((category) => {
      const card = document.createElement("article");
      card.className = "card";

      const image = document.createElement("img");
      image.src = category.image;
      image.alt = category.title;

      const title = document.createElement("h3");
      title.textContent = category.title;

      const text = document.createElement("p");
      text.textContent = category.description;

      const link = document.createElement("a");
      link.className = "button secondary";
      link.href = `products.html?category=${encodeURIComponent(category.filter)}`;
      link.textContent = "Explore";

      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(text);
      card.appendChild(link);

      highlightContainer.appendChild(card);
    });
  }
})();
