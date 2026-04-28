(function () {
  const id = new URLSearchParams(window.location.search).get("id");
  const product = id ? CatalogStorage.getProductById(id) : null;

  const container = document.getElementById("product-detail");
  if (!container) return;

  if (!product) {
    container.innerHTML = "";
    container.appendChild(
      CatalogUI.createEmptyState("We couldn't find that product. Explore the catalog instead.")
    );
    return;
  }

  const image = document.getElementById("detail-image");
  const name = document.getElementById("detail-name");
  const price = document.getElementById("detail-price");
  const category = document.getElementById("detail-category");
  const description = document.getElementById("detail-description");
  const ingredients = document.getElementById("detail-ingredients");
  const buyButton = document.getElementById("detail-buy");
  const tags = document.getElementById("detail-tags");

  if (image) {
    image.src = product.image;
    image.alt = product.name;
  }
  if (name) name.textContent = product.name;
  if (price) price.textContent = CatalogUI.formatPrice(product.price);
  if (category) category.textContent = product.category;
  if (description) description.textContent = product.description;
  if (buyButton) {
    buyButton.href = product.buyLink;
  }

  if (tags) {
    tags.innerHTML = "";
    tags.appendChild(CatalogUI.createBadge(product.category));
    if (product.isNew) tags.appendChild(CatalogUI.createBadge("New Arrival"));
    if (product.isBestSeller) tags.appendChild(CatalogUI.createBadge("Best Seller"));
  }

  if (ingredients) {
    ingredients.innerHTML = "";
    product.ingredients.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ingredients.appendChild(li);
    });
  }
})();
