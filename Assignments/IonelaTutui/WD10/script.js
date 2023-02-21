// Task 1
// Concatenate n input arrays, where n is a variable.

// Example:
// Input: { a: 1, b: 2 }
// Expected Result: [["a", 1], ["b", 2]]
// Input: { shrimp: 15, tots: 12 }
// Expected Result: [["shrimp", 15], ["tots", 12]]
// Input: {}
// Expected Result: []

let n = { a: 1, b: 2 };
console.log(n);
//de refacut

// Task 2
// Arrays can be mixed with various types. Your task is to sum all the number elements in the given array.
// Take an array and return the sum of all numbers in the array.

// Example:
// Input: [1, 2, "13", "4", "645"]
// Expected Result: 3
// Input: [true, false, "123", "75"]
// Expected Result: 0
// Input: [1, 2, 3, 4, 5, true]
// Expected Result: 15

let someArr = [1, 2, "13", "4", "645"],
    sum=0;
 someArr.forEach((val) => {
    if (typeof val == "number") 
      {
        sum += val;
      }
    });
  console.log(sum);

// Task 3
// Return the coded (h4ck3r 5p34k) version of a string.

// Notes
// In order to work properly, the programm should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0,
// "s"s with 5.

// Example:
// Input: "javascript is cool"
// Expected Result: "j4v45cr1pt 15 c00l"
// Input: "programming is fun"
// Expected Result: "pr0gr4mm1ng 15 fun"
// Input: "become a coder"
// Expected Result: "b3c0m3 4 c0d3r"

let codInitial = "become a coder";
let codString = codInitial.toString();
let newCod = [];

if (codString.includes("a", "e", "i", "o", "s")) {
  newCod = codString.replaceAll("a", "4");
  newCod = newCod.replaceAll("e", "3");
  newCod = newCod.replaceAll("i", "1");
  newCod = newCod.replaceAll("o", "0");
  newCod = newCod.replaceAll("s", "5");
  console.log(newCod);
}

// Task 4
// Given an array of positive and negative numbers, return  an array where the first element is the count of positive numbers
// and the second element is the sum of negative numbers.

// Example:
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// Expected Result: [10, -65]
// Input: [92, 6, 73, -77, 81, -90, 99, 8, -85, 34]
// Expected Result: [7, -252]
// Input: []
// Expected Result: []

//declaram array-ul cu numerele oferite
//declaram var in care sa trecem nr pozitive
//declaram var pt suma nr negative
// parcurgem array-ul initial
// daca numarul este pozitiv, se trece in var cu nr pozitive
// daca este negativ se trece in suma
// afisam cele doua variabile

let arrNr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
  nrPozitive = [],
  SumNrNegative = 0;

for (i = 0; i < arrNr.length; i++)
  if (Math.sign(arrNr[i]) === 1) {
    nrPozitive += arrNr[i];
  } else if (Math.sign(arrNr[i]) === -1) {
    SumNrNegative += arrNr[i];
  }
console.log(nrPozitive.length - 1, SumNrNegative);

// Task 5
// Given 2 variables, month and year (as integers), return the number of days in that month.

// Example:
// Input: 2, 2018
// Expected Result: 28
// Input: 5, 2022
// Expected Result: 31

let an = 2020;
let luna = 2;

if (luna == 2 && an % 4 == 0) {
  console.log("Anul este bisect si luna februarie are 29 de zile");
} else if (luna == 2 && an % 4 != 0) {
  console.log(" februarie are 28 de zile");
} else if (luna == 4 || luna == 6 || luna == 9 || (luna == 10 && luna)) {
  console.log("luna are 30 de zile");
} else if (luna <= 12) {
  console.log("luna are 31 de zile");
} else {
  console.log("luna necunoscuta");
}

// Task 6
// You just returned home to find your mansion has been robbed!
// Given an object of the stolen items, return the total amount of the burglary (number).
// If nothing was robbed, return the string "Lucky you!".

// Notes:
// The item value is always positive.

// Example:
// Input: const stolenItems = { tv: 30, skate: 20, stereo: 50}
// Expected Result: 100
// Input: const stolenItems = { painting: 20000}
// Expected Result: 20000
// Input: const stolenItems = {}
// Expected Result:  "Lucky you!"

const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 0,
};
let total = stolenItems.tv + stolenItems.skate + stolenItems.stereo;

if (total > 0) {
  console.log(`Ti-au furat obiecte in valoare de ${total}`);
} else {
  console.log("Lucky you!");
}

// Task 7
// Return true if all values of an array are truthy, and false otherwise.

// Notes
// Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
// You will always be supplied with at least one parameter.

// Example:
// Input: [true, true, true]
// Expected Result: true
// Input: [true, false, true]
// Expected Result: false
// Input: [5, 4, 3, 2, 1, 0]
// Expected Result:  false

let arr = [true, true, true];

for (i = 0; i < arr.length; i++)
  if (arr[i] === true) {
    console.log(true);
  } else {
    console.log(false);
  }

// Task 8
// Concatenate the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

// Notes
// Return an empty array if the given array is empty.
// You can expect all the tests to have valid chords.

// Example:
// Input: ["G", "F", "C"]
// Expected Result:  ["G7", "F7", "C7"]
// Input: ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// Expected Result: ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// Input: []
// Expected Result:  []

// declaram array-ul initial
// declaram un array in care punem rezultatul
// parcurgem array-ul initial si daca i nu contine 7 , adaugam un 7
// daca i contine 7, mergem mai departe (?)
// afisam array-ul final

let something = ["F7", "E7", "A7", "Ab7", "Gm7", "C7"];
let rezultat = [];

for (i = 0; i < something.length; i++)
  if (something[i].includes(7)) {
    rezultat.push(something[i]);
  } else {
    rezultat.push(something[i] + "7");
  }
console.log(rezultat);

// Task 9
// Remove the letters "a", "b" and "c" from the given string and return the modified version.
// If the given string does not contain "a", "b", or "c", return null.

// Example:
// Input: "This might be a bit hard"
// Expected Result: "This might e  it hrd"
// Input: "hello world!"
// Expected Result: null
// Input: ""
// Expected Result: null

let proposition = "This might be a bit hard";

if (proposition.includes("a" || "b" || "c")) {
  console.log(proposition.replaceAll("a", "" && "b", "" && "c", ""));
} else {
  console.log(null);
}

// Task 10
// Write a function that converts a sentence into pig latin.
// Rules for converting to pig latin:
// For words that begin with a vowel (a, e, i, o, u), add "way".
// Otherwise, move all letters before the first vowel to the end and add "ay".
// For simplicity, no punctuation will be present in the inputs.

// Example:
// Input: "this is pig latin"
// Expected Result: "isthay isway igpay atinlay"
// Input: "wall street journal"
// Expected Result: "allway eetstray ournaljay"

// declaram textul
// declaram vocalele pe care le cautam
// luam fiecare cuvant in parte si verificam daca incepe cu o vocala
// daca incepe cu vocala adaugam way
// daca nu incepe cu vocala se parcurge cuvantul litera cu litera pana se ajunge la vocala
// cand se ajunge la vocala se pastreaza restul cuvantului

let someText = "this is pig latin",
textModificat = "";
vocale = ['a', 'e', 'i', 'o', 'u'];

//de lucrat

