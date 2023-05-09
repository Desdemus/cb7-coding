//esercizio1//
const greetBtn = document.getElementById("greet-btn");
const greetText = document.getElementById("greet-text");

greetBtn.addEventListener("click", function () {
  greetText.textContent = "Hola chico/chica!";
});

//esercizio2//
const form = document.querySelector("form");
const inputText = document.getElementById("input-text");
const outputDiv = document.getElementById("output-div");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  outputDiv.textContent = inputText.value;
  inputText.value = "";
});
