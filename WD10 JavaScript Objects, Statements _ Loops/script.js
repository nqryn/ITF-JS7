// Task 9
// Given a word, spells it out, by consecutively adding letters until the full word is completed.

// Example
// Input: "bee"
// Expected Result: ["b", "be", "bee"]
// Input: "happy"
// Expected Result: ["h", "ha", "hap", "happ", "happy"]

// PSEUDOCOD
// Am un cuvant "bee", si trebuie sa generez toate cuvintele pana la el
// Prima data generez "b" - adica fix prima litera
// Apoi generez "be" - adica toate literele pana la indexul celei curente
// ADICA substring de la inceput pana la indexul curent
let cuvant = "biblioteca";
let arrCuvinte = [];
for (let i = 0; i < cuvant.length; i++) {
    arrCuvinte.push(cuvant.substring(0, i + 1));
}
// afisez rezultatul
console.log(arrCuvinte);