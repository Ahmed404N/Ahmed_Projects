(function () {
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price);

  const createBadge = (label) => {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = label;
    return badge;
  };

  const createProductCard = (product) => {
    const card = document.createElement("article");
    card.className = "card";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.shortDescription;

    const meta = document.createElement("div");
    meta.className = "detail-meta";
    meta.appendChild(createBadge(product.category));
    if (product.isNew) meta.appendChild(createBadge("New Arrival"));
    if (product.isBestSeller) meta.appendChild(createBadge("Best Seller"));

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = formatPrice(product.price);

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const detailLink = document.createElement("a");
    detailLink.className = "button secondary";
    detailLink.href = `product.html?id=${product.id}`;
    detailLink.textContent = "View Details";

    const buyLink = document.createElement("a");
    buyLink.className = "button primary";
    buyLink.href = product.buyLink;
    buyLink.target = "_blank";
    buyLink.rel = "noreferrer";
    buyLink.textContent = "Buy Now";

    actions.appendChild(price);
    actions.appendChild(detailLink);
    actions.appendChild(buyLink);

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(meta);
    card.appendChild(actions);

    return card;
  };

  const createEmptyState = (message) => {
    const card = document.createElement("div");
    card.className = "card";
    const title = document.createElement("h3");
    title.textContent = "No products found";
    const text = document.createElement("p");
    text.textContent = message;
    card.appendChild(title);
    card.appendChild(text);
    return card;
  };

  window.CatalogUI = {
    formatPrice,
    createProductCard,
    createBadge,
    createEmptyState
  };
})();
