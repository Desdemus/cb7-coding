const cities = [
    {
        id: 1,
        title: "London",
    },
    {
        id: 2,
        title: "Amsterdam",
    },
    {
        id: 3,
        title: "Copenhagen",
    },
    {
        id: 4,
        title: "Berlin",
    }];


const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);

const listItemGen = (citiesData) => {
    const listItemEl = cE("li");

    listItemEl.id = citiesData.id;
    listItemEl.textContent = citiesData.title;
    listItemEl.className = "listItem";

    return listItemEl;
};

const listEl = cE("ul");
listEl.className = "list";


cities.forEach((item) => listEl.append(listItemGen(item)));


document.body.append(listEl);

