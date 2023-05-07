alert(
  "Ciao, all'interno della console di questa pagina troverai l'esercizio con la mia descrizione e le varie stampe"
);

let mySelf = {
  nome: "Francesco",
  citta: "Roma",
  anni: 27,
  mestiere: "Bartender",
  hobbies: ["Cinefilo", "Correre", "Cucinare"],
  altezza: "Un metro e settanta",
  meta: "New York",
  studi: "Edgemony",
};

console.log("Il suo nome è " + mySelf.nome);
console.log("è un " + mySelf.mestiere);
console.log(
  "ha " + mySelf.anni + " anni" + " e vorrebbe vivere a " + mySelf.meta
);
console.log("Vive a " + mySelf.citta + " e studia presso " + mySelf.studi);
