alert("Esercizio n1");

let userNumber = parseInt(prompt("Inserisci un numero: "));
alert("Rullo di tamburi... guarda la console");

if (userNumber % 2 === 0) {
  console.log(userNumber + " è pari.");
} else {
  console.log(userNumber + " è dispari.");
}

alert("Esercizio 2");

let userNumber2 = parseInt(prompt("Inserisci un numero :"));
userNumber2 % 2 === 0
  ? console.log(userNumber2 + " è pari.")
  : console.log(userNumber2 + " è dispari.");

alert("Esercizio 3");

alert("Proviamo qualcosa di più, sei d'accordo?");
let userAnswer = prompt("Inserisci si o no").toLowerCase();
if (userAnswer === "si") {
  alert("Andiamo avanti allora!");
  let userChoice1 = parseInt(prompt("Inserisci il primo numero")); //inserire .number**
  let userOperator = prompt("Inserisci l'operatore");
  let userChoice2 = parseInt(prompt("Inserisci il secondo numero"));
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
  }
} else alert("ok ti saluto");
