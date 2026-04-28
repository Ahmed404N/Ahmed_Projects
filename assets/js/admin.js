(function () {
  const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "Amber2026!"
  };
  const AUTH_KEY = "catalogAdminAuth";

  const loginSection = document.getElementById("login-section");
  const dashboardSection = document.getElementById("dashboard-section");
  const loginForm = document.getElementById("login-form");
  const logoutButton = document.getElementById("logout");

  const productForm = document.getElementById("product-form");
  const productTableBody = document.getElementById("product-table-body");
  const formStatus = document.getElementById("form-status");
  const imagePreview = document.getElementById("image-preview");
  const imageFileInput = document.getElementById("product-image-file");
  const clearFormButton = document.getElementById("clear-form");

  let editingId = null;
  let imageValue = "";

  const setAuth = (value) => {
    localStorage.setItem(AUTH_KEY, value ? "true" : "false");
  };

  const isAuthed = () => localStorage.getItem(AUTH_KEY) === "true";

  const toggleSections = () => {
    if (!loginSection || !dashboardSection) return;
    const authed = isAuthed();
    loginSection.style.display = authed ? "none" : "block";
    dashboardSection.style.display = authed ? "block" : "none";
  };

  const slugify = (value) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const getUniqueId = (products, base) => {
    let id = base;
    let counter = 1;
    while (products.some((product) => product.id === id)) {
      id = `${base}-${counter}`;
      counter += 1;
    }
    return id;
  };

  const updateStatus = (message, tone = "") => {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.style.color = tone === "error" ? "#9c2f2f" : "#2f4b3c";
  };

  const resetForm = () => {
    productForm.reset();
    editingId = null;
    imageValue = "";
    if (imagePreview) imagePreview.src = "";
    if (imagePreview) imagePreview.alt = "";
    updateStatus("Ready for the next product.");
  };

  const populateForm = (product) => {
    productForm.elements["name"].value = product.name;
    productForm.elements["shortDescription"].value = product.shortDescription;
    productForm.elements["description"].value = product.description;
    productForm.elements["ingredients"].value = product.ingredients.join(", ");
    productForm.elements["price"].value = product.price;
    productForm.elements["category"].value = product.category;
    productForm.elements["buyLink"].value = product.buyLink;
    productForm.elements["isFeatured"].checked = product.isFeatured;
    productForm.elements["isNew"].checked = product.isNew;
    productForm.elements["isBestSeller"].checked = product.isBestSeller;
    productForm.elements["imageUrl"].value = product.image;
    imageValue = "";
    if (imagePreview) {
      imagePreview.src = product.image;
      imagePreview.alt = product.name;
    }
    editingId = product.id;
    updateStatus(`Editing ${product.name}`);
  };

  const renderTable = () => {
    if (!productTableBody) return;
    const products = CatalogStorage.getProducts();
    productTableBody.innerHTML = "";

    products.forEach((product) => {
      const row = document.createElement("tr");

      const name = document.createElement("td");
      name.textContent = product.name;

      const category = document.createElement("td");
      category.textContent = product.category;

      const price = document.createElement("td");
      price.textContent = CatalogUI.formatPrice(product.price);

      const actions = document.createElement("td");
      const editButton = document.createElement("button");
      editButton.className = "button secondary";
      editButton.type = "button";
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => populateForm(product));

      const deleteButton = document.createElement("button");
      deleteButton.className = "button primary";
      deleteButton.type = "button";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        const updated = products.filter((item) => item.id !== product.id);
        CatalogStorage.saveProducts(updated);
        if (editingId === product.id) resetForm();
        renderTable();
        updateStatus(`${product.name} deleted.`);
      });

      actions.appendChild(editButton);
      actions.appendChild(deleteButton);

      row.appendChild(name);
      row.appendChild(category);
      row.appendChild(price);
      row.appendChild(actions);

      productTableBody.appendChild(row);
    });
  };

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = loginForm.elements["username"].value.trim();
      const password = loginForm.elements["password"].value.trim();
      if (
        username === ADMIN_CREDENTIALS.username &&
        password === ADMIN_CREDENTIALS.password
      ) {
        setAuth(true);
        toggleSections();
        updateStatus("Login successful. You can now manage the catalog.");
      } else {
        updateStatus("Incorrect login details.", "error");
      }
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      setAuth(false);
      toggleSections();
    });
  }

  if (imageFileInput) {
    imageFileInput.addEventListener("change", () => {
      const file = imageFileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        imageValue = reader.result;
        if (imagePreview) {
          imagePreview.src = imageValue;
          imagePreview.alt = "Uploaded preview";
        }
      };
      reader.readAsDataURL(file);
    });
  }

  if (productForm) {
    productForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(productForm);
      const products = CatalogStorage.getProducts();
      const imageUrl = formData.get("imageUrl").trim();

      const product = {
        id: editingId || "",
        name: formData.get("name").trim(),
        shortDescription: formData.get("shortDescription").trim(),
        description: formData.get("description").trim(),
        ingredients: formData
          .get("ingredients")
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        price: Number(formData.get("price")),
        category: formData.get("category"),
        isFeatured: formData.get("isFeatured") === "on",
        isNew: formData.get("isNew") === "on",
        isBestSeller: formData.get("isBestSeller") === "on",
        buyLink: formData.get("buyLink").trim(),
        image: imageValue || imageUrl
      };

      if (!product.name || !product.category || !product.buyLink || !product.image) {
        updateStatus("Please fill in all required fields.", "error");
        return;
      }

      if (!product.id) {
        const baseId = slugify(product.name);
        product.id = getUniqueId(products, baseId);
        products.push(product);
      } else {
        const index = products.findIndex((item) => item.id === product.id);
        if (index >= 0) products[index] = product;
      }

      CatalogStorage.saveProducts(products);
      renderTable();
      resetForm();
    });
  }

  if (clearFormButton) {
    clearFormButton.addEventListener("click", () => resetForm());
  }

  toggleSections();
  renderTable();
  updateStatus("Log in to update the catalog.");
})();
