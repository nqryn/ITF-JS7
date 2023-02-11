// Task 1
// Check if a string is uppercase.

// Example:
// Input: upperCaseString = "The quick brown fox jumps over the lazy dog"
// Expected Result: false
// Input: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
// Expected Result: true

let upperCaseString = "The quick brown fox jumps over the lazy dog";

function isUpperCase(string) {
    return string.toUpperCase() === string;
}

console.log(isUpperCase(upperCaseString));
console.log(isUpperCase("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"));

// Task 2
// Remove the spaces from the string, then log the resultant string.

// Example:
// Input: noSpacesString = "The quick brown fox jumps over the lazy dog"
// Expected Result: "Thequickbrownfoxjumpsoverthelazydog"

let spacesString = "The quick brown fox jumps over the lazy dog";
let noSpacesString = spacesString.replaceAll(" ", "");

console.log(noSpacesString);

// Task 3
// Calculate the sum of 2 numbers and log the result.

// Example:
// Input: a = 2 , b = 3
// Expected Result: sum = 5

let a = 2;
let b = 3;
let sum = a + b;

console.log(sum);

// Task 4
// Return the square root of a number n .

// Example:
// Input: n = 9
// Expected Result: sqrt = 3

let n = 25
sqrt = Math.sqrt(n)
console.log(sqrt);

// Task 5
// Log to the console your current age.

// Example:
// Input: year = 1990
// Expected Result: "You are ${x} years old"

let currentAge = 28;
console.log("You are " + currentAge + " years old")
console.log(`You are ${currentAge} years old`)

// Task 6
// Given 2 variables, return the value of the second variable, multiplied as many times as the value of the first.

// Example:
// Input: count = 5, multiplyString = "Hello"
// Expected Result: "HelloHelloHelloHelloHello"

let multiplyString = "Hello";
let count = multiplyString.length;
let finalString = multiplyString.repeat(count);
console.log(finalString);

// Task 7
// Convert a binary number (given as a string) to a decimal number.

// Example:
// Input: binaryString = "11111100110"
// Expected Result: 2021

var binary = "11111100110"
var digit = parseInt(binary, 2);
console.log(digit);


// TASK 8
// Return the final number, at the given power.

// Example:
// Input: pow = 4, nr = 2
// Expected Result: 16
// Input: pow = 3, nr = 3
// Expected Result: 27

let nr = 8;
let pow = nr * nr;
console.log(pow);


// TASK 9
// Reverse a string 

// Example:
// Input: revString = "alabala"
// Expected Result: "alabala"
// Input: revString = "ItFactory"
// Expected Result: "yrotcaFtI"

function reverseString(str) {
    return str.split('').reverse().join('')
}

let revString = "ItFactory"
console.log(reverseString(revString))

// Task 10
// Remove a certain letter from a string

// Example:
// Input: letter = "a" removeString = "Today was a good day"
// Expected Result: Tody ws good dy

let newString = "Today was a good day";
let removeString = newString.replaceAll("a", "");
console.log(removeString);
