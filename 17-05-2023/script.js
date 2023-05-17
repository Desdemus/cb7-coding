import { cE, qS, createProduct, createProductModal, qSAll } from "./utils/fn.js";
const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h2");
const searchProductEl = qS(".searchInput");
let productListData = []
productList.className = "productList";
productListTitle.textContent = "Products for you!";
rootEl.append(productListTitle, productList);

fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
        productListData = data.products;
        productListData = data.products;
        productListData.forEach((product) =>
            productList.append(createProduct(product))
        );
    })
    .then(() => {
        const productCardEls = qSAll(".productCard");

        productCardEls.forEach((product) =>
            product.addEventListener("click", () =>
                fetch(`https://dummyjson.com/products/${product.id}`)
                    .then((res) => res.json())
                    .then((data) => rootEl.append(createProductModal(data, rootEl)))
            )
        );
    });


searchProductEl.addEventListener("input", (evt) => {
    productList.textContent = "";

    productListData
        .filter((product) =>
            product.description.toLowerCase().includes(evt.target.value.toLowerCase())
        )
        .forEach((obj) => productList.append(createProduct(obj)));
});