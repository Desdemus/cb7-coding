export const qS = (e) => document.querySelector(e);

export const createEl = (type, content, ...attrs) => {
    const element = document.createElement(type);
    element.textContent = content;
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
    return element;
};

export const userPage = (username) => {
    const wrapperEl = createEl("div", "", {
        name: "class",
        value: "welcome__container",
    });
    const titleEl = createEl("h2", `Welcome ${username}!`, {
        name: "class",
        value: "welcome__title",
    });

    wrapperEl.append(titleEl);

    return wrapperEl;
};

export const productGen = (productData) => {
    const wrapperEl = createEl("div", "", { name: "class", value: "cart__item" });

    const titleEl = createEl(
        "h4",
        productData.title,
        {
            name: "src",
            value: productData.title,
        },
        {
            name: "class",
            value: "cart__title",
        }
    );

    const priceEl = createEl("p", "$ " + productData.price, {
        name: "class",
        value: "cart__item__price",
    }, {
        name: "class",
        value: "cart__price",
    });

    const quantityEl = createEl("p", "Stock available: " + productData.quantity, {
        name: "class",
        value: "cart__item__quantity",
    });

    wrapperEl.append(titleEl, priceEl, quantityEl);

    wrapperEl.addEventListener("click", () => {
        const isConfirmed = confirm("Are you sure you want to delete this article?");
        if (isConfirmed) DELETE(`/carts/${productData.id}`);

    });

    return wrapperEl;
};