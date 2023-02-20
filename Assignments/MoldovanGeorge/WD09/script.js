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
let firstPerson = 65;
let lenghtOfTheYear = 365;
let ageInDays = firstPerson * lenghtOfTheYear;
console.log(ageInDays);

// Task 2
// Return the first element of a given array.

// Example:
// Input: [1, 2, 3]
// Expected Result: 1
// Input: [80, 5, 100]
// Expected Result: 80

let numberList = [1, 2, 3];
console.log(numberList[0]);

let secondNumberList = [80, 5, 100];
console.log(secondNumberList[0]);

// Task 3
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Example:
// Input: 22, 15
// Expected Result: true
// Input: 83, 34
// Expected Result: false

let firstBoy = 22;
let secondBoy = 15;

if (firstBoy + secondBoy <= 100) {
  console.log("true");
} else {
  console.log("false");
}

let blondeBoy = 83;
let skinnyBoy = 34;

if (blondeBoy + skinnyBoy <= 100) {
  console.log("true");
} else {
  console.log("false");
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

let firstFarm = [2, 3, 5];
let chickens = 2;
let cows = 4;
let pigs = 4;

let allAnimalsLegs =
  firstFarm[0] * chickens + firstFarm[1] * cows + firstFarm[2] * pigs;

console.log(allAnimalsLegs);

let secondFarm = [1, 2, 3];
allAnimalsLegs =
  secondFarm[0] * chickens + secondFarm[1] * cows + secondFarm[2] * pigs;

console.log(allAnimalsLegs);

// Task 5
// Return both the minimum and maximum numbers, of a given Array in that order.

// Example
// Input: [1, 2, 3, 4, 5]
// Expected Result: [1,5]
// Input: [22, 81, 33, 14, 52]
// Expected Result: [14,81]

let smallNumbers = [1, 2, 3, 4, 5];
let largestNumber = Math.max(...smallNumbers);
let smallestNumber = Math.min(...smallNumbers);
console.log(largestNumber, smallestNumber);

let biggerNumbers = [22, 81, 33, 14, 52];
largestNumber = Math.max(...biggerNumbers);
smallestNumber = Math.min(...biggerNumbers);
console.log(largestNumber, smallestNumber);

// Task 6
// Given an array of 10 numbers (between 0 and 9), return a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

// Example
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// Expected Result: "(123) 456-7890"
let zeceNumere = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let mascaNrTel = "(xxx) xxx-xxxx";

for (let i = 0; i < mascaNrTel.lenght; i++) {
  console.log((mascaNrTel = mascaNrTel.replace("x", zeceNumere[i]))); //nu merge, dar nu stiu de ce.
}
// Task 7
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Take the array of names and return the name of the secret society.

// Example
// Input: ["Adam", "Sarah", "Malcolm"]
// Expected Result: "AMS"
// Input: ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]
// Expected Result: CJMPRR
const firstGroup = ["Adam", "Sarah", "Malcolm"];
var justTheFirstLetter = firstGroup.map(([v]) => v);
console.log(justTheFirstLetter);
const secretSociety = justTheFirstLetter.join();
console.log(secretSociety);

let secondGroup = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"];
let firstLetter = secondGroup.map(([v]) => v);
const secretBiggerSociety = firstLetter.join();
console.log(secretBiggerSociety);

// Task 8
// Return true if the first array is a subset of the second. Return false otherwise.

// Example
// Input: [3, 2, 5], [5, 3, 7, 9, 2]
// Expected Result: true
// Input: [1, 2], [3, 5, 9, 1]
// Expected Result: false

// Task 9
// Given a word, spells it out, by consecutively adding letters until the full word is completed.

// Example
// Input: "bee"
// Expected Result: ["b", "be", "bee"]
// Input: "happy"
// Expected Result: ["h", "ha", "hap", "happ", "happy"]

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

// After you tried to guess the results, log them to the console and see if you were right.
// IF you were wrong you can check this link for more exercises and explanations: https://github.com/denysdovhan/wtfjs/blob/master/README.md
