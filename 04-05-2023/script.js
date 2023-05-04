alert("Esercitazioni");
console.log("esercizio1");
const array = [
  "piano terra",
  "primo piano",
  "secondo piano",
  "terzo piano",
  "quarto piano",
  "quinto piano",
  "sesto piano",
  "settimo piano",
  "ottavo piano",
  "nono piano",
  "decimo piano",
  "undicesimo piano",
];
const newArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  let num = array[i];
  newArray.push(num);
  console.log(newArray);
}

console.log(newArray);

//esercizio2//

console.log("segue esercizio2");

const array2 = [1, 4, 35, 577, 233, 64];
let maximum = -Infinity;
let minimum = Infinity;

for (let number of array2) {
  if (number > maximum) maximum = number;
  if (number < minimum) minimum = number;
}
console.log("il valore minimo è " + minimum);
console.log("il valore massimo è " + maximum);
