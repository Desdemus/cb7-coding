import { DELETE, GET, POST } from "./fetch.js";
//creation

export const qSA = (elements) => document.querySelectorAll(elements);
export const qS = (el) => document.querySelector(el);
const appendiqua = qS("#root");
export const createEl = (type, content, ...attrs) => {
    const element = document.createElement(type);
    element.textContent = content;
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
    return element;
};


export const AddSection = () => {
    const inputZone = createEl("div", "", { name: "class", value: "InputZoneDiv" })
    const inputTodo = createEl("input", "", { name: "placeholder", value: "Inserisci testo" })
    const addButton = createEl("button", "Aggiungi", { name: "class", value: "addButton" })
    inputZone.append(inputTodo, addButton);

    document.body.append(inputZone);
    addButton.addEventListener("click", () => {
        POST("/todos/add", {
            todo: inputTodo.value,
            completed: false,
            userId: 31,
        })
    })
    return inputZone;

}




AddSection()
export const createToDoList = () => {
    GET("/todos").then((data) => {
        data.todos.forEach((todo) => {

            const wrapperEl = createEl("div", "", { name: "class", value: "toDoItem" });
            const contentEl = createEl("li", todo.todo);
            const StatusEl = createEl("li", "Status " + todo.completed);
            const idEl = createEl("li", "Numero in lista: " + todo.id);
            wrapperEl.append(contentEl, StatusEl, idEl);
            appendiqua.append(wrapperEl);

            wrapperEl.addEventListener("click", () => {
                DELETE(`/todos/${todo.id}`)
            })
            return wrapperEl;
        })

    })

};

createToDoList()
/*
document.body.button.addEventListener("click", () => {
    const inputValue = inputTodo.value;

    if (inputValue !== "") {
        createToDoList(inputValue);
        todos.push(inputValue);
        POST(inputValue); //per aggiungere al server
        toDoInput.value = "";
    }
});
*/














