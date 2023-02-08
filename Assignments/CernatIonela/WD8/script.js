// Task 1
// Check if a string is uppercase.

// Example:
// Input: upperCaseString = "The quick brown fox jumps over the lazy dog"
// Expected Result: false
// Input: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
// Expected Result: true

var upperCaseString = "The quick brown fox jumps over the lazy dog"

if(upperCaseString.toUpperCase()){
    console.log(true)
}else{
    console.log(false)
}



// Task 2
// Remove the spaces from the string, then log the resultant string.

// Example:
// Input: noSpacesString = "The quick brown fox jumps over the lazy dog"
// Expected Result: "Thequickbrownfoxjumpsoverthelazydog"

var noSpacesString = "The quick brown fox jumps over the lazy dog"

console.log(noSpacesString.replace(/\s/g, ''));


// Task 3
// Calculate the sum of 2 numbers and log the result.

// Example:
// Input: a = 2 , b = 3
// Expected Result: sum = 5

var a = 2;
var b = 3;
console.log(a + b);


// Task 4
// Return the square root of a number n .

// Example:
// Input: n = 9
// Expected Result: sqrt = 3

var n = 9;
console.log(Math.sqrt(n));


// Task 5
// Log to the console your current age.

// Example:
// Input: year = 1990
// Expected Result: "You are ${x} years old"

var year = 1987;
var currentYear = 2023;
console.log(`You are ${2023 - year} years old`);


// Task 6
// Given 2 variables, return the value of the second variable, multiplied as many times as the value of the first.

// Example:
// Input: count = 5, multiplyString = "Hello"
// Expected Result: "HelloHelloHelloHelloHello"

var count = 5;
var multiplyString = "Hello";
console.log(multiplyString.repeat(count));


// Task 7
// Convert a binary number (given as a string) to a decimal number.

// Example:
// Input: binaryString = "11111100110"
// Expected Result: 2021

var binaryString = "11111100110";
console.log(parseInt(binaryString, 2));


// TASK 8
// Return the final number, at the given power.

// Example:
// Input: pow = 4, nr = 2
// Expected Result: 16
// Input: pow = 3, nr = 3
// Expected Result: 27


var pow = 4;
var nr = 2;
console.log(Math.pow(4,2));


// TASK 9
// Reverse a string 

// Example:
// Input: revString = "alabala"
// Expected Result: "alabala"
// Input: revString = "ItFactory"
// Expected Result: "yrotcaFtI"


var revString = "alabala";
console.log(revString.split("").reverse().join(""));



// Task 10
// Remove a certain letter from a string

// Example:
// Input: letter = "a" removeString = "Today was a good day"
// Expected Result: Tody ws good dy

var letter = "a";
var removeString = "Today was a good day";
console.log(removeString.replaceAll('a',''));
