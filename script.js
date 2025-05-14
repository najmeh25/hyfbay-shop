const products = [
  "Flat screen",
  "Mobile phone",
  "Wallet",
  "Watch",
  "Laptop",
  "Shoes",
  "Backpack"
];

function renderProducts(productArray) {
  const ul = document.getElementById("productList");
  ul.innerHTML = "";

  productArray.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product;
    ul.appendChild(li);
  });
}

document.getElementById("searchButton").addEventListener("click", () => {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
});

renderProducts(products);
