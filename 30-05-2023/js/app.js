import { tweetGen } from "./fn.js";
import { GET } from "./http.js";

let userList = [];
let postList = [];
const navItems = document.querySelectorAll(".navItem");
const contentEl = document.querySelector(".content");

// Nuovo metodo "Promise"
const remoteData = Promise.all([GET("/posts"), GET("/users")]);

// Richiesta multipla in serie

remoteData
    .then((data) => {
        postList = data[0].posts;
        userList = data[1].users;
    })
    .then(() =>
        postList
            .map((post) => {
                post.user = userList.find((user) => user.id === post.userId);
                return post;
            })
            .forEach((post) => contentEl.append(tweetGen(post)))
    );

// Events
navItems.forEach((element) => {
    element.addEventListener("click", () => {
        navItems.forEach((item) => {
            item.classList.remove("active");
        });
        element.classList.add("active");
    });
});