/**
 * For - structura repetitiva buna pentru cand STIM numarul de iteratii
 * While (cat timp) - structura repetitiva care nu are un numar predefinit de iteratii,
 *  in schimb, ea depinde de o conditie.
 * 
 * Sintaxa
 * 
 * while (conditie) {
 *  fa ceva
 * }
 */

// Vreau sa adun numere din array pana cand ajung la suma >= 100
let myArr = [22, 41, 33, 14, 52, 21, 13, 71];
let suma = 0;
let i = 0;

console.log(myArr);
while (suma < 100) {
    // Tot trebuie sa mai adun ceva, nu am ajuns inca la 100
    console.log(`Suma curenta este ${suma}, mai avem nevoie de bani...`);
    console.log(`Adaugam si elementul ${i} cu valoarea ${myArr[i]}`);
    suma += myArr[i];
    i += 1; // merg la urmatorul element din array, pentru ca asta nu e for si nu parcurge singur array-ul

}
console.log("Am terminat");
console.log(`Suma finala: ${suma}`);

/**
 * do-while
 * Diferenta fata de while este ca conditia se evalueaza la FINAL, nu la inceput
 * Implicit, se executa cel putin o data blocul do
 * 
 * do {
 *  ceva
 * } while (conditie)
 */

let db = ["user1", "pisica", "leul", "minotaurul"];
let username;

do {
    username = prompt("Please enter your unique username:");
} while (db.includes(username))

console.log("Felicitari, ai ales username-ul:", username);