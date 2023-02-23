// Task 1
// Concatenate n input arrays, where n is a variable.

// Example:
// Input: { a: 1, b: 2 }
// Expected Result: [["a", 1], ["b", 2]]
// Input: { shrimp: 15, tots: 12 }
// Expected Result: [["shrimp", 15], ["tots", 12]]
// Input: {}
// Expected Result: []

/* let n = prompt("Enter the number of inputs you want to enter: ");
let myArr = [];
while(n>0){
    let currentArr = prompt("Enter the array {a:b}:").split(":");
    myArr.push(currentArr);
    n--;
}
console.log(myArr); */
//Complexitate Task 1: O(n) pt ca while itereaza pe tot n-ul, iar arr.push() este O(1)

/* //Versiunea 2 (cu obiecte)
const obj1 = {a: 1, b: 2};
console.log(Object.entries(obj1));

const obj2 = {shrimp: 15, tots: 12};
console.log(Object.entries(obj2));

const obj3 = {};
console.log(Object.entries(obj3)); */

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

/* let arrOfArrs = [
  [1, 2, "13", "4", "645"],
  [true, false, "123", "75"],
  [1, 2, 3, 4, 5, true],
];
arrOfArrs.forEach((element) => {
  let mySum = 0;
  element.forEach((item) => {
    if (typeof item == "number") {
      mySum += item;
    }
  });
  console.log(mySum);
}); */
//Complexitate Task 2: O(n*m)(n si m pentru ca n este finit si mic ca si valoare in comparatie cu m)

// Task 3
// Return the coded (h4ck3r 5p34k) version of a string.

// Notes
// In order to work properly, the programm should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.

// Example:
// Input: "javascript is cool"
// Expected Result: "j4v45cr1pt 15 c00l"
// Input: "programming is fun"
// Expected Result: "pr0gr4mm1ng 15 fun"
// Input: "become a coder"
// Expected Result: "b3c0m3 4 c0d3r"

/* let myStringsArr = ["javascript is cool", "programming is fun", "become a coder"];
myStringsArr.forEach(element => {
    element=element.replace(/a/g, "4").replace(/e/g, "3").replace(/i/g, "1").replace(/o/g, "0").replace(/s/g, "5");
    console.log(element);
}); */
// Complexitate Task 3: O(n*5m) pt ca cele 5 replace() parcurg tot stringul in cazul de fata(g) si avem O(m) de fiecare data => simplificat: O(n*m)

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

/* function task4(myOriginalArr){
    let resultArr = [];
    if(myOriginalArr.length>0){
        let counter = 0;
        let negativeSum = 0;
        myOriginalArr.forEach(element => {
            element > 0 ? counter++ : negativeSum += element;
        });
        resultArr[0] = counter;
        resultArr[1] = negativeSum;
    }
    console.log(resultArr);
}

let exampleArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let exampleArr2 = [92, 6, 73, -77, 81, -90, 99, 8, -85, 34];
let exampleArr3 = [];

task4(exampleArr1);
task4(exampleArr2);
task4(exampleArr3); */
// Complexitate Task 4: O(n)

// Task 5
// Given 2 variables, month and year (as integers), return the number of days in that month.

// Example:
// Input: 2, 2018
// Expected Result: 28
// Input: 5, 2022
// Expected Result: 31

/* let myDateArray = prompt(
  "Enter a month and a year to get the number of days(mm,yyyy):"
).split(",");

let numberOfDays;

function isLeapYear(year) {
  return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
}

switch (parseInt(myDateArray[0])) {
  case 1:
    numberOfDays = 31;
    break;
  case 2: {
    if (isLeapYear(parseInt(myDateArray[1]))) {
      numberOfDays = 29;
    } else {
      numberOfDays = 28;
    }
    break;
  }
  case 3:
    numberOfDays = 31;
    break;
  case 4:
    numberOfDays = 30;
    break;
  case 5:
    numberOfDays = 31;
    break;
  case 6:
    numberOfDays = 30;
    break;
  case 7:
    numberOfDays = 31;
    break;
  case 8:
    numberOfDays = 31;
    break;
  case 9:
    numberOfDays = 30;
    break;
  case 10:
    numberOfDays = 31;
    break;
  case 11:
    numberOfDays = 30;
    break;
  case 12:
    numberOfDays = 31;
    break;
  default:
    console.log("Invalid input");
    break;
}
console.log(numberOfDays); */
//Complexitate Task 5: O(1)

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

/* let objectsValueList = {
    necklace: 100,
    bracelet: 234,
    earrings: 241,
    ring: 542,
    brooch: 1234,
    pendant: 512,
    anklet: 234,
    tiara: 1222
}
let stolenObjectsArray = prompt("Enter the list of the stolen objects(necklace,bracelet,earrings,ring,brooch,pendant,anklet,tiara):").split(",");
let objectsValue = 0;
stolenObjectsArray.forEach(element => {
    objectsValue += objectsValueList[element];
});
objectsValue > 0 ? console.log(`The value of the stolen objects is ${objectsValue}`) : console.log("Lucky you!"); */
//Complexitate Task 6: O(n)

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

/* let truthyGlobalArray = [[true, true, true], [true, false, true], [5, 4, 3, 2, 1, 0]];
let falsyValues = [false, 0, "", null, undefined, NaN];
truthyGlobalArray.forEach(element => {
    flag = true;
    for(let i = 0; i < element.length; i++){
        if(falsyValues.includes(element[i])){
            flag=false;
            break;
        }
    }
    console.log(flag);
}); */
//Complexitate Task 7: O(n*m^2) pentru ca forEach-ul exterior O(n) pe truthyGlobalArray, for-ul interior O(m) pe array-urile mici in cazul cel mai defavorabil,
// dar si includes() este un O(m) pe falsyValues

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

/* let allExamplesArr = [
  ["G", "F", "C"],
  ["F7", "E7", "A7", "Ab7", "Gm7", "C7"],
  [],
];
allExamplesArr.forEach((element) => {
  for (let i = 0; i < element.length; i++) {
    item = element[i];
    if (item[item.length - 1] !== "7") {
      element[i] = item + "7";
    }
  }
  console.log(element);
}); */
//Complexitate Task 8: O(n*m)

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

/* let givenStringsArray = ["This might be a bit hard", "hello world!", ""];
let charactersToRemove = ["a", "b", "c"];
givenStringsArray.forEach((element) => {
  flag = false;
  for (let i = 0; i < element.length; i++) {
    if (charactersToRemove.includes(element[i])) {
      flag = true;
    }
  }
  element = element.replace(/a/g, "").replace(/b/g, "").replace(/c/g, "");
  flag ? console.log(element) : console.log(null);
}); */
//Complexitate Task 9: O(n*2m) => O(n*m)

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

/* const vowelArr = ["a", "e", "i", "o", "u"];
let fragment1 = "";
let fragment2 = "";
let pigLatinSentence;
let pigLatinSentenceArr = [];

inputSentenceArr = prompt("Enter the sentence: ").split(" ");
inputSentenceArr.forEach((element) => {
  if (vowelArr.includes(element[0])) {
    element = element + "way";
    pigLatinSentenceArr.push(element);
  } else {
    for (let i = 0; i < element.length; i++) {
      if (vowelArr.includes(element[i])) {
        fragment1 = element.slice(0, i);
        fragment2 = element.slice(i, element.length);
        break;
      }
    }
    element = fragment2 + fragment1 + "ay";
    pigLatinSentenceArr.push(element);
  }
});
pigLatinSentence = pigLatinSentenceArr.join(" ")
console.log(pigLatinSentence); */
//Complexitate Task 10: O(n^3) pentru ca for+for+includes()