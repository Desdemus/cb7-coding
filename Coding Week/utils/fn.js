export const internalQuerySelector = (element) => document.querySelector(element);
export const age18 = internalQuerySelector(".fascia18")
export const age36 = internalQuerySelector(".fascia36")
export const age64 = internalQuerySelector(".fascia64")


export const internalCreateElement = (type, content, ...attrs) => {
    const element = document.createElement(type);
    element.textContent = content;
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
    return element;
};

export const usersCardGen = (data, divId) => {
    const container = internalQuerySelector(divId)
    const wrapperEl = internalCreateElement("div", "", { name: "class", value: "wrapperDiv" })
    const userNameEl = internalCreateElement("span", "", { name: "class", value: "nameSpan" })
    const ageEl = internalCreateElement("span", "", { name: "class", value: "ageSpan" })
    const phoneEl = internalCreateElement("span", "", { name: "class", value: "phoneSpan" })
    const contentEl = internalCreateElement("div", "", { name: "class", value: "contentDiv" })

    userNameEl.textContent = "Nome utente: " + data.name;
    ageEl.textContent = "Età: " + data.age;
    phoneEl.textContent = "Numero di telefono: " + data.phone;

    contentEl.append(userNameEl, ageEl, phoneEl)
    wrapperEl.append(contentEl)
    container.append(wrapperEl)
};


export const emptySectionMessage = (fascia) => {
    const messageEl = fascia
    const msgWrapperEl = internalCreateElement("div", "", { name: "class", value: "msgWrapper" })
    const messageSpan = internalCreateElement("span", "", { name: "class", value: "messageSpan" })

    messageSpan.textContent = "Nessun utente rientra in questi requisiti d'età"
    msgWrapperEl.append(messageSpan)
    messageEl.append(msgWrapperEl)
}