function somma(userChoice1, userChoice2) {
  return userChoice1 + userChoice2;
}

function sottrazione(userChoice1, userChoice2) {
  return userChoice1 - userChoice2;
}

function moltiplicazione(userChoice1, userChoice2) {
  return userChoice1 * userChoice2;
}

function divisione(userChoice1, userChoice2) {
  return userChoice1 / userChoice2;
}

const userChoice1 = parseInt(prompt("Inserisci il primo numero"));
const userOperator = prompt("Inserisci l'operatore");
const userChoice2 = parseInt(prompt("Inserisci il secondo numero"));
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
