
/*-------array 1 -------*/
const persona = ["Mario", "Rossi", "Italia"];
/*-------destructuring 1 -------*/
const [nome, cognome, paese] = persona;

console.log(nome);
console.log(cognome);
console.log(paese);

/*-------array 2 -------*/
const libro = {
    titolo: "Il Nome della Rosa",
    autore: "Umberto Eco",
    anno: 1980
}
/*-------destructuring 2 -------*/
const { titolo, autore, anno } = libro

console.log(titolo)
console.log(autore)
console.log(anno)

