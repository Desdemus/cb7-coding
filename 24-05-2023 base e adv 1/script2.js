/*-------array 1 -------*/
const personaAvantaza = ["Mario", "Non specificato", "Italia"];
/*-------destructuring 1 -------*/
const [nome, cognome, paese] = personaAvantaza;

console.log("Il nome della persona è " + nome);
console.log("Il cognome della persona è " + cognome);
console.log("Il paese di residenza è " + paese);

/*-------array 2 -------*/
const libroAvanzato = {
    titolo: "Il Nome della Rosa",
    autore: "Umberto",
    anno: 1980
}
/*-------destructuring 2 -------*/
const { titolo, autore, anno, edizione = "Non specificato" } = libroAvanzato

console.log("Il titolo è " + titolo)
console.log("L'autore è " + autore)
console.log("L'anno di pubblicazione è " + anno)