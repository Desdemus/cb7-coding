import { GET } from "./fetch.js";
//creation
export const createEl = (type, content, ...attrs) => {
    const element = document.createElement(type);

    element.textContent = content;
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
    return element;
};
export const createToDoList = () => {
    GET("/todos").then((data) => {
        data.todos.forEach((todo) => {
            const wrapperEl = createEl("div", "", { name: "class", value: "toDoItem" });
            const contentEl = createEl("h4", todo.todo);
            const StatusEl = createEl("p", "Status " + todo.completed);
            const idEl = createEl("h5", "Numero in lista: " + todo.id);

            wrapperEl.append(contentEl, StatusEl, idEl);
            document.body.append(wrapperEl);
            return wrapperEl;
        })

    })

};
