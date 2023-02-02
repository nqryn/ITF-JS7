// Task 1
// Your task is to convert strings so that each word starts with a capital letter.

// Example:
// Input: "The quick brown fox jumps over the lazy dog"
// Expected Result: "The Quick Brown Fox Jumps Over The Lazy Dog"
let myString="The quick brown fox jumps over the lazy dog";
let myWordList=myString.split(" ");
console.log(myWordList);
for(let i=0; i<myWordList.length; i++){
    myWordList[i]=myWordList[i][0].toUpperCase()+myWordList[i].slice(1);
}
console.log(myWordList.join(" "));


// Task 2:
// Write a simple regex to validate a username. 
// Allowed characters are: lowercase letters, numbers, underscore.
// Length should be between 4 and 16 characters (both included).

// Example:
// Input: "itFactory2021"
// Expected Result: true
// Input: "itF@ctory202!"
// Expected Result: false
let username = "itFactory2021";
let pattern = /^[a-zA-Z0-9]{4,16}$/;
let result = pattern.test(username);
console.log(result);
username = "itF@ctory202!";
result = pattern.test(username);
console.log(result);

// TASK 3
// Determine the number of decimal places of a number!

// Example:
// Input: "3.41"
// Expected Result: 2
// Input: "45.1234"
// Expected Result: 4
let decimalNumber = 3.41;
let myDecimalElementsList = decimalNumber.toString().split(".");
let numberOfDecimals = myDecimalElementsList[1].length;
console.log(numberOfDecimals);
decimalNumber = 45.1234;
myDecimalElementsList = decimalNumber.toString().split(".");
numberOfDecimals = myDecimalElementsList[1].length;
console.log(numberOfDecimals);

// TASK 4
// Return n'th element of Fibonacci sequence.

// Example:
// Input: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34" : 6
// Expected Result: 8



// TASK 5
// Check if a given string (case insensitive) is a palindrome

// Example:
// Input: "sugus"
// Expected Result: true
// Input: "vanilla"
// Expected Result: false



// TASK 6
// Multiply a given number by eight if it is an even number and by nine otherwise.
// IF SINTAX: a > b ? c : d ( translation: if a > b , then c , else d)

// Example:
// Input: 8
// Expected Result: 64
// Input: 5
// Expected Result: 45



// TASK 7
// Determine whether the letter at the supplied index in the provided string is either a vowel or a consonant. ( USE IF )

// Example:
// Input: "Frank" , index = 3
// Expected Result: consonant
// Input: "Lime", index = 1
// Expected Result: vowel



// TASK 8
// Return the supplied string in alphabetical order. 
// Your function must be able to sort the string in either direction; so either ascending or descending alphabetical order.

// Example:
// Input: "bacd"
// Expected Result: abcd
// Input: "axedzpq"
// Expected Result: zxqpeda



// TASK 9
// Does the target string contain the provided string? 

// Example:
// Input: "catapult" , "cat"
// Expected Result: true
// Input: "hawaii" , "Snow"
// Expected Result: false
console.log("catapult".includes("cat"));
console.log("hawaii".includes("Snow"));


// TASK 10
// What is the result of the following operations?
// 5 + 'number'
// 5 + '60'
// '60' + 5
// '2' + undefined
// 2 + undefined
console.log(5 + 'number');
console.log(5 + '60');
console.log('60' + 5);
console.log('2' + undefined);
console.log(2 + undefined);