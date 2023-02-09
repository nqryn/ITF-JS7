/**
 * Arrays -sunt liste in care putem pune orice tipuri de variabile
 *
 */
let numbers = [1, 2, 3]; //array de numere
let fruits = ["apple", "banana", "para", "banana"]; //array de stringuri
let ceva = [true, false, false, true]; //array de booleanuri
let mixtArray = [1, true, "apple", 5, 6, false, "Banana", "pineapple"]; //putem avea tipuri diferite

//ca sa aflam lungimea unui array folosim length
console.log(numbers, numbers.length);
console.log(fruits, fruits.length);
console.log(ceva, ceva.length);
console.log(mixtArray, mixtArray.length);

//ca sa accesam un anumit element din array folosim pozitia lui(index)
//important index-ul incepe de la 0
console.log(numbers[0]);
console.log(fruits[1]);
console.log(ceva[2]);
console.log(mixtArray[4]);
console.log(mixtArray[mixtArray.length - 1]); //asa obtinem ultimul element

console.log(fruits.indexOf("banana")); //indexOf ne da primul index al elementului cautat
console.log(fruits.indexOf("mar")); //daca elementul nu exista in array primim -1
fruits.indexOf("banana", 2); // asa cautam un element incepand de la index-ul 2 spre final

console.log('incepem forEach');
fruits.forEach(function (element, index) {
    //linia urmatoare se va executa pentru fiecare element al array-ului nostru
    //element si index sunt 2 variabile dinamice care vor avea o valoare diferita la fiecare element 
//   console.log(element, index);
    console.log('elementul curent este :',element);
    console.log('indexul curent este : ',index);
    console.log('gata s-a terminat un ciclu din bucla,trecem la urmatorul element');
});
console.log('s-a terminat forEach');


const students = [
    'Cata', 'Ionela', 'George', 'Irina', 'Mihai', 'Ella', 'Monica', 'Andreea'
];

/**
 * Inline callback function
forEach(function (element) { ... })
forEach(function (element, index) { ... })
forEach(function (element, index, array) { ... })
 */

// Numele pe care le dau in function(<aici>, <aici>) sunt cele pe care am voie sa le folosesc mai departe
// Practic, sunt niste variabile, care "exista" doar in interiorul forEach
students.forEach( function(student, idx) {
    // student si idx EXISTA DOAR AICI, in forEach
    console.log(`${idx}. Studentul ${student} este inscris la curs!`);
});

// Scoping - adica variabilele de mai sus (student si idx) NU EXISTA
// in afara blocului in care au fost definite
//          console.log(student, idx); // va da eroare!!!


// Reverse : functie care inverseaza array-ul
console.log(numbers.reverse());

const s = "Adela";
// Ca sa pot inversa un sir de caractere (string), trebuie sa fac un mic artificiu in 3 pasi
// 1. transform stringul in array -> split, care "imparte" stringul intr-un array, fiecare element fiind un caracter
// 2. inversez array-ul -> reverse
// 3. transform array-ul inapoi in string -> join, care "uneste" elementele din array
const s1 = s.split('');
console.log(s1);

const s2 = s1.reverse();
console.log(s2);

const s3 = s2.join('');
console.log(s3);


// Sort face o sortare alfabetica, indiferent de tipul variabilelor
// Ordinea este: cifre, litere mari, litere mici
console.log(mixtArray);
console.log(mixtArray.sort());