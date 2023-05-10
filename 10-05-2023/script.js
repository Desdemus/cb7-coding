const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

const credentials = {
  username: "Pippo",
  password: "pippoSuperstar2000",
};
const formEl = qS(".form");
const usernameImputEl = qS(".username");
const passwordImputEl = qS(".password");

//usernameImputEl.addEventListener("input", (e) => console.log(e.target.value));
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("username =>", e.target[0].value);
  console.log("password =>", e.target[1].value);
});

//argomento sottointeso [e]
