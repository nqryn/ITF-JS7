// Task 1
// Concatenate n input arrays, where n is a variable.

// Example:
// Input: { a: 1, b: 2 }
// Expected Result: [["a", 1], ["b", 2]]
// Input: { shrimp: 15, tots: 12 }
// Expected Result: [["shrimp", 15], ["tots", 12]]
// Input: {}
// Expected Result: []

/**
 * Folosim for .. in, care ne ajuta sa parcurgem un obiect pe chei
 * Sintaxa:
 * for (const key in object) {
 *  // do somthing
 * }
 * 
 * unde key e orice nume vrem noi sa-i dam, iar object e obiectul pe care vrem sa iteram
 */

const obj = { a: 1, b: 2 };
const arr = [];
for (const prop in obj) {
    arr.push([prop, obj[prop]]);
}

// Asta e identica cu obtinerea tuturor entries-urilor folosind metoda entries

const arr2 = Object.entries(obj);

// Pentru afisare in format string, putem folosi JSON.stringify

console.log(JSON.stringify(arr));
console.log(JSON.stringify(arr2));


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

const inArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const outArr = [0, 0];

/**
 * Pentru arrays putem folosi si sintaxa for .. of, care este similara cu forEach
 * for (const elem of arr) {
 *  // do something with elem
 * }
 */

for (const x of inArr) {
    if ( x > 0) {
        // numerele pozitive le numaram
        outArr[0] += 1;
    } else {
        // numerele negative le insumam
        outArr[1] += x;
    }
}

console.log(outArr);

// Task 5
// Given 2 variables, month and year (as integers), return the number of days in that month.

// Example:
// Input: 2, 2018
// Expected Result: 28
// Input: 5, 2022
// Expected Result: 31

/**
 * Pentru lunile ianuarie, martie, mai, etc. avem mereu 31 zile
 * Pentru lunile aprilie, iunie, etc. avem mereu 30 zile
 * Pentru februarie, avem 28 zile in mod normal, respectiv 29 zile - an bisect
 * An bisect = divizibil cu 4, dar nu cu 100
 */

const year = 2018, month = 2;

switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(31);
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(30);
        break
    case 2:
        const isLeapYear = year % 4 == 0 && year % 100 != 0;
        console.log( isLeapYear ? 29 : 28);
        break
    default:
        console.log("Not a valid month");
}

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

/**
 * Solutia 1:
 * folosim replaceAll de 3 ori (a, b, c) si inlocuim cu un empty string ""
 * Apoi verificam daca rezultatul final este diferit fata de stringul original, 
 * ca sa stim daca afisam null, sau noul string.
 * 
 * Solutia 2:
 * declaram un string nou, gol, si parcurgem stringul original caracter cu caracter
 * la fiecare pas, daca char este a/b/c, il ignoram, daca nu, il adaugam in noul string.
 * 
 * Solutia 2 este mai eficienta, deoarece parcurgem doar o data stringul original.
 * Dar nu arata chiar asa frumos.
 */