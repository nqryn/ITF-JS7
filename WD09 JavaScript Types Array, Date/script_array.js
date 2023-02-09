/**
 * Arrays -sunt liste in care putem pune orice tipuri de variabile
 *
 */
let numbers = [1, 2, 3]; //array de numere
let fruits = ["apple", "banana", "para", "banana"]; //array de stringuri
let ceva = [true, false, false, true]; //array de booleanuri
let mixtArray = [1, true, "apple", 5, 6, false, "banana"]; //putem avea tipuri diferite

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

