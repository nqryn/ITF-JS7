// Task 1
// Check if a string is uppercase.

// Example:
// Input: upperCaseString = "The quick brown fox jumps over the lazy dog"
// Expected Result: false
// Input: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
// Expected Result: true

upperCaseString = "The quick brown fox jumps over the lazy dog";
if ( upperCaseString == upperCaseString.toUpperCase()) {
    console.log(true)
}else {
    console.log(false)
}
upperCaseString = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG";
if ( upperCaseString == upperCaseString.toUpperCase()) {
    console.log(true)
}else {
    console.log(false)
}


// Task 2
// Remove the spaces from the string, then log the resultant string.

// Example:
// Input: noSpacesString = "The quick brown fox jumps over the lazy dog"
// Expected Result: "Thequickbrownfoxjumpsoverthelazydog"

noSpacesString = "The quick brown fox jumps over the lazy dog";
console.log(noSpacesString.split(" ").join(""));


// Task 3
// Calculate the sum of 2 numbers and log the result.

// Example:
// Input: a = 2 , b = 3
// Expected Result: sum = 5

let a,b;
a=Number(prompt("a=")) ;
b=Number(prompt("b="));
sum = a+b;
console.log(Number(sum))


// Task 4
// Return the square root of a number n .

// Example:
// Input: n = 9
// Expected Result: sqrt = 3

let n,sqrt;
n=Number(prompt("n=")) ;
sqrt=Math.sqrt(n);
console.log(sqrt)



// Task 5
// Log to the console your current age.

// Example:
// Input: year = 1990
// Expected Result: "You are ${x} years old"

let year =Number(prompt("Your birth year is "));
console.log(`You are ${2023-year} years old`)

// Task 6
// Given 2 variables, return the value of the second variable, multiplied as many times as the value of the first.

// Example:
// Input: count = 5, multiplyString = "Hello"
// Expected Result: "HelloHelloHelloHelloHello"

let count = 5,
    multiplyString = "Hello";
console.log(multiplyString.repeat(count));


// Task 7
// Convert a binary number (given as a string) to a decimal number.

// Example:
// Input: binaryString = "11111100110"
// Expected Result: 2022

let binaryString = "11111100110",
    rez = Number.parseInt(binaryString, 2);
    console.log(rez);


// TASK 8
// Return the final number, at the given power.

// Example:
// Input: pow = 4, nr = 2
// Expected Result: 16
// Input: pow = 3, nr = 3
// Expected Result: 27

let pow,nr;
pow = Number(prompt("pow is "));
nr = Number(prompt("nr = "));
rez= Number(Math.pow(nr,pow));
console.log(rez)

// TASK 9
// Reverse a string 

// Example:
// Input: revString = "alabala"
// Expected Result: "alabala"
// Input: revString = "ItFactory"
// Expected Result: "yrotcaFtI"

let revString = "alabaladdd";
rez = revString.split('').reverse().join('');
console.log(rez);
revString = "ItFactory";
rez = revString.split('').reverse().join('');
console.log(rez);

// Task 10
// Remove a certain letter from a string

// Example:
// Input: letter = "a" removeString = "Today was a good day"
// Expected Result: Tody ws good dy

let letter="a",
    removeString = "Today was a good day";
rez = removeString.replaceAll(letter , "");
console.log(rez)