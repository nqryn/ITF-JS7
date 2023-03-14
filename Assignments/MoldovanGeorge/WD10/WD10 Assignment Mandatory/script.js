// Task 1
// Concatenate n input arrays, where n is a variable.

// Example:
// Input: { a: 1, b: 2 }
// Expected Result: [["a", 1], ["b", 2]]
// Input: { shrimp: 15, tots: 12 }
// Expected Result: [["shrimp", 15], ["tots", 12]]
// Input: {}
// Expected Result: []
const  object = { a: 1, b: 2 };
const arr = [];

for(const prop in object) {
  arr.push([prop, object[prop]]);
}
console.log(arr);



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

const arrNumbers = [1, 2, "13", "4", "645"]
let sum = 0;

for (let i = 0; i<arrNumbers.length; i++) {
  if (typeof arrNumbers[i] == 'number') {
    sum += arrNumbers[i];
  }
}

console.log(sum);


// Task 3
// Return the coded (h4ck3r 5p34k) version of a string.

// Notes
// In order to work properly, the programm should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.

// Example:
// Input: "javascript is cool"
// Expected Result: "j4v45cr1pt 15 c00l"
// Input: "programming is fun"
// Expected Result: "pr0gr4mmn1ng 15 fu"
// Input: "become a coder"
// Expected Result: "b3c0m3 4 c0d3r"

const strOriginal = "programming is fun";
let codedStr;
for(let i = 0; i < strOriginal.length; i++) {
    codedStr = strOriginal
    .replaceAll("a","4")
    .replaceAll("e","3")
    .replaceAll("i","1")
    .replaceAll("o","0")
    .replaceAll("s","5");
}
console.log(codedStr);


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



const listaIn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const listaOut = [0,0];

for(const n of listaIn){
  if (n > 0){
    listaOut[0] += 1;
  } else {
    listaOut[1] += n;
  }
}

console.log(listaOut);



// Task 5
// Given 2 variables, month and year (as integers), return the number of days in that month.

// Example:
// Input: 2, 2018
// Expected Result: 28
// Input: 5, 2022
// Expected Result: 31

// pentru lnile ianuarie martie, mai  avem cate 31 de zzile.
// pmetru luniile aprilie linie, avem 30 zile. 
// Pentru luniile februarie avem 28.

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
      const isLeapYear = year % 4 == 0 && year % 100 !=0;
      console.log(isLeapYear ? 29 : 28);
      break
  default:
    console.log("Not a valid month");
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
  tv:30,
  skate:20,
  stereo: 50
}

let stolenNumber = 0;

for(const y in stolenItems) {
  if(stolenItems[y] > 0){
    console.log(stolenNumber += stolenItems[y]);
  } else {
    console.log("You are Lucky!");
  } 
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

function IsAllArrTruthy (arr) {
return arr.every(element => element === true)
}

console.log(IsAllArrTruthy([true, true, true]));
console.log(IsAllArrTruthy([true, false, true]));
console.log(IsAllArrTruthy([5, 4, 3, 2, 1, 0]));

if (IsAllArrTruthy([5, 4, 3, 2, 1, 0])) {
  console.log('T R U E')
} else {
  console.log('F A L S Y')
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

const chords = ["G", "F", "C"];
let concatenatedChords = [];

for(let i=0; i<chords.length; i++){
  if(chords[i].includes(7)){
    concatenatedChords.push(chords[i]);
  }else{
    concatenatedChords.push(chords[i]+7);
  }
}
console.log(concatenatedChords);

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

const input = ""
let outputExpected = ""


  if (input.includes("a","b","c")){
    console.log(outputExpected = input.replaceAll('a', ' ').replaceAll('b',' ').replaceAll('c', ' '));
  } else if(!input.includes("a","b","c")){
    console.log('null');
  } else if (input == ""){
    console.log('null');
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