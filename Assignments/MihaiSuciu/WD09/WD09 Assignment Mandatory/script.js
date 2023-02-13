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

/* let ageInYears=prompt("Enter your age in years: ");
let ageInDays=ageInYears*365;
console.log(`Your age in days ${ageInDays}`); */

// Task 2
// Return the first element of a given array.

// Example:
// Input: [1, 2, 3]
// Expected Result: 1
// Input: [80, 5, 100]
// Expected Result: 80

/* let myArray = [10,1,8,3];
console.log(myArray[0]); */

/* let myNewArray=prompt("Enter your numbers(a,b,c,...): ").split(",");
for(let i=0; i<myNewArray.length;i++){
    console.log(myNewArray[i]);
} */

// Task 3
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Example:
// Input: 22, 15
// Expected Result: true
// Input: 83, 34
// Expected Result: false

/* let numbersArrray = prompt("Enter 2 numbers(a,b):").split(",");
let sum=Number(numbersArrray[0])+Number(numbersArrray[1]);
if(sum<100){
    console.log("true");
} else {
    console.log("false");
} */

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

/* let animalsArray=prompt("Enter the number of chickens, cows, pigs").split(",");
animalsArray.forEach(element => {
    element=Number(element);
});
let numberOfLegs=animalsArray[0]*2+animalsArray[1]*4+animalsArray[2]*4;
console.log(`Total number of legs: ${numberOfLegs}`); */

// Task 5
// Return both the minimum and maximum numbers, of a given Array in that order.

// Example
// Input: [1, 2, 3, 4, 5]
// Expected Result: [1,5]
// Input: [22, 81, 33, 14, 52]
// Expected Result: [14,81]

/* let my5thArray = prompt("Enter the numners of the array: ").split(",");
my5thArray.forEach(element => {
    element=Number(element);
});
let min=my5thArray[0];
let max=my5thArray[0];
my5thArray.forEach(element => {
    if (element<=min){
        min=element;
    }
    if (element>max){
        max=element;
    }
});
console.log(`Min=${min}`);
console.log(`Max=${max}`); */

// Task 6
// Given an array of 10 numbers (between 0 and 9), return a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

// Example
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// Expected Result: "(123) 456-7890"

/* let phoneArray = prompt("Enter the phone number(10 digits):").split("");
let phoneString = "";
for (let i = 0; i < 10; i++) {
  if (i == 0) {
    phoneString += "(" + phoneArray[i];
  } else if (i == 2) {
    phoneString += phoneArray[i] + ") ";
  } else if (i == 5) {
    phoneString += phoneArray[i] + "-";
  } else {
    phoneString += phoneArray[i];
  }
}
console.log(`The phone number is: ${phoneString}`); */

// Task 7
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Take the array of names and return the name of the secret society.

// Example
// Input: ["Adam", "Sarah", "Malcolm"]
// Expected Result: "AMS"
// Input: ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]
// Expected Result: CJMPRR

/* let namesArray=prompt("Enter the names(A,B,C...): ").split(",");
let firstLettersArray=[];
namesArray.forEach(element => {
    let upperCaseLetter=element[0].toUpperCase();
    firstLettersArray.push(upperCaseLetter);
});
firstLettersArray.sort();
let societyName="";
firstLettersArray.forEach(element => {
    societyName+=element;
});
console.log(`The society name is: ${societyName}`); */

// Task 8
// Return true if the first array is a subset of the second. Return false otherwise.

// Example
// Input: [3, 2, 5], [5, 3, 7, 9, 2]
// Expected Result: true
// Input: [1, 2], [3, 5, 9, 1]
// Expected Result: false

/* var array1 = [3, 2, 5];
var array2 = [5, 3, 7, 9, 2];
let flag = 1;
for (let i = 0; i < array1.length; i++) {
  if (!array2.includes(array1[i])) {
    flag=-1;
  }
}
if (flag==1) {
    console.log("True");
} else {
    console.log("False");
} */


// Task 9
// Given a word, spells it out, by consecutively adding letters until the full word is completed.

// Example
// Input: "bee"
// Expected Result: ["b", "be", "bee"]
// Input: "happy"
// Expected Result: ["h", "ha", "hap", "happ", "happy"]

/* let myWord=prompt("Enter a word");
let wordToPrint="";
for(let i=0; i<myWord.length; i++){
    for(let j=0; j<=i; j++){
        wordToPrint+=myWord[j];
    }
    console.log(wordToPrint);
    wordToPrint="";
} */

// Task 10
// Try to guess the answers to the following questions BEFORE logging them to the console

// 1. ('b' + 'a' + +'a' + 'a').toLowerCase();
// 'banana'
// 2. [] == ![];
// true
// 3. NaN === NaN;
// false
// 4. !![]
// false
// 5. [] == true
// false
// 6. [1, 2, 3] + [4, 5, 6];
// '1,2,34,5,6'
// 7. let a = [, , ,];
//    a.length;
// 3
//    a.toString();
// ƒ toString() { [native code] }
// 8. parseInt("f*ck");
// NaN
// 9. parseInt("f*ck", 16);
// 15
// 10. true + true;
// 2
// 11. (true + true) * (true + true) - true;
// 3
// 12. typeof NaN;
// number
// 13. 0.1 + 0.2;
// 0.3
// 14. 0.1 + 0.2 === 0.3;
// false
// 15. 3  - 1
// 2
//     3  + 1
// 4
//     '3' - 1
// 2
//     '3' + 1
// '31'

// After you tried to guess the results, log them to the console and see if you were right.
// IF you were wrong you can check this link for more exercises and explanations: https://github.com/denysdovhan/wtfjs/blob/master/README.md
