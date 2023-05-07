const userChoice1 = parseInt(prompt("Inserisci il primo numero"));
const userOperator = prompt("Inserisci l'operatore");
const userChoice2 = parseInt(prompt("Inserisci il secondo numero"));
function somma(x, y) {
  return x + y;
}

function sottrazione(x, y) {
  return x - y;
}

function multiplicazione(x, y) {
  return x * y;
}

function divisione(x, y) {
  return x / y;
}
let result;
switch (userOperator) {
  case "+":
    result = userChoice1 + userChoice2;
    console.log("Il risultato è " + result);
    break;
  case "-":
    result = userChoice1 - userChoice2;
    console.log("Il risultato è " + result);
    break;
  case "/":
    result = userChoice1 / userChoice2;
    console.log("Il risultato è " + result);
    break;
  case "*":
    result = userChoice1 * userChoice2;
    console.log("Il risultato è " + result);
    break;
  default:
    alert("Compila una operazione valida!");
    break;
}
