// Task 1
// Returns the given age in days.

// Notes
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.

// Example:
// Input: 65 
// Expected Result: 23725
// Input: 0
// Expected Result: 0

let age = 65;
let ageInDays = age * 365;
console.log(ageInDays);

// Task 2
// Return the first element of a given array.

// Example:
// Input: [1, 2, 3]
// Expected Result: 1
// Input: [80, 5, 100]
// Expected Result: 80

let v = [1, 2, 3];
let firstElement = v[0];
console.log(firstElement);
v = [80, 5, 100];
firstElement = v[0];
console.log(firstElement);

// Task 3
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Example:
// Input: 22, 15
// Expected Result: true
// Input: 83, 34
// Expected Result: false

let a = 22,b = 15;
if ( a+b < 50 ) {
  console.log(true);
} else {
  console.log(false);
}

 a=83, b=34;

if ( a + b < 100 ) {
  console.log(true);
} else {
  console.log(false);
}


// Task 4
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. Return the total number of legs of all the animals.

// Notes
// Don't forget to return the result.
// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.

// Example
// Input: [2, 3, 5]
// Expected Result: 36
// Input: [1, 2, 3]
// Expected Result: 22


let ferma1 = [2, 3, 5],
ferma2 = [1, 2, 3];

let animalsLegs = {
    chickens: 2,
    pigs: 4,
    cows: 4
};

let nrOfLegsF1 = 
    ferma1[0] * animalsLegs.chickens + 
    ferma1[1] * animalsLegs.cows + 
    ferma1[2] * animalsLegs.pigs;

let nrOfLegsF2 = 
    ferma2[0] * animalsLegs.chickens + 
    ferma2[1] * animalsLegs.cows + 
    ferma2[2] * animalsLegs.pigs;

console.log(nrOfLegsF1);
console.log(nrOfLegsF2);


// Task 5
// Return both the minimum and maximum numbers, of a given Array in that order.

// Example
// Input: [1, 2, 3, 4, 5]
// Expected Result: [1,5]
// Input: [22, 81, 33, 14, 52]
// Expected Result: [14,81]

function getMinMax(arr) {
  arr.sort(function(a, b){return a-b});
  return [arr[0], arr[arr.length-1]];
}
console.log(getMinMax([1, 2, 3, 4, 5]));
console.log(getMinMax([22, 81, 33, 14, 52]));


// Task 6
// Given an array of 10 numbers (between 0 and 9), return a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

// Example
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// Expected Result: "(123) 456-7890"

function formatPhoneNumber(numbers) {
  const firstPart = numbers.splice(0, 3).join('');
  const secondPart = numbers.splice(0, 3).join('');
  const thirdPart = numbers.splice(0, 4).join('');
  return `(${firstPart}) ${secondPart}-${thirdPart}`;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const formattedNumber = formatPhoneNumber(numbers);
console.log(formattedNumber);


// Task 7
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Take the array of names and return the name of the secret society.

// Example
// Input: ["Adam", "Sarah", "Malcolm"]
// Expected Result: "AMS"
// Input: ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]
// Expected Result: CJMPRR


let names = ["Adam", "Sarah", "Malcolm"];
let secretName = [];
for (let i=0;i<names.length;i++) {
    secretName[i] = names[i].toString().slice(0,1);
}
console.log(secretName.sort());

names = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"];
secretName = [];
for (let i=0;i<names.length;i++) {
    secretName[i] = names[i].toString().slice(0,1);
}
console.log(secretName.sort());

// Task 8
// Return true if the first array is a subset of the second. Return false otherwise.

// Example
// Input: [3, 2, 5], [5, 3, 7, 9, 2]
// Expected Result: true
// Input: [1, 2], [3, 5, 9, 1]
// Expected Result: false

function isSubset(arr1, arr2) {
  return arr1.every(item => arr2.includes(item));
}
console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]));
console.log(isSubset([1, 2], [3, 5, 9, 1]));


// Task 9
// Given a word, spells it out, by consecutively adding letters until the full word is completed.

// Example
// Input: "bee"
// Expected Result: ["b", "be", "bee"]
// Input: "happy"
// Expected Result: ["h", "ha", "hap", "happ", "happy"]

function spellOut(word) {
  let result = [];
  let current = '';
  for (let i = 0; i < word.length; i++) {
    current += word[i];
    result.push(current);
  }
  return result;
}
console.log(spellOut("bee")); // ["b", "be", "bee"]
console.log(spellOut("happy")); // ["h", "ha", "hap", "happ", "happy"]


// Task 10
// Try to guess the answers to the following questions BEFORE logging them to the console

// 1. ('b' + 'a' + +'a' + 'a').toLowerCase();
// 2. [] == ![];
// 3. NaN === NaN;
// 4. !![]
// 5. [] == true
// 6. [1, 2, 3] + [4, 5, 6];
// 7. let a = [, , ,];
//    a.length; 
//    a.toString(); 
// 8. parseInt("f*ck");
// 9. parseInt("f*ck", 16); 
// 10. true + true;
// 11. (true + true) * (true + true) - true;
// 12. typeof NaN;
// 13. 0.1 + 0.2;
// 14. 0.1 + 0.2 === 0.3;
// 15. 3  - 1 
//     3  + 1  
//     '3' - 1 
//     '3' + 1

// 1. 'banana'
//2. true
//3. false
//4. true
//5. false
//6. '1,2,34,5,6'
//7. let a = [, , ,];
//    a.length; 
//    a.toString();
//8. NaN
//9. 15
//10. 2
//11. 3
//12.'number'
//13. 0.30000000000000004
//14. false
//15. 2, 4, 2, '31'