// Task 1
// Your task is to convert strings so that each word starts with a capital letter.

// Example:
// Input: "The quick brown fox jumps over the lazy dog"
// Expected Result: "The Quick Brown Fox Jumps Over The Lazy Dog"
let str = "The quick brown fox jumps over the lazy dog";
let arr = str.split(" ");
console.log(arr);
for (let i=0 ; i<arr.length ; i++){
   arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
}
console.log(arr.join(" "))



// Task 2:
// Write a simple regex to validate a username. 
// Allowed characters are: lowercase letters, numbers, underscore.
// Length should be between 4 and 16 characters (both included).

// Example:
// Input: "itFactory2021"
// Expected Result: true
// Input: "itF@ctory202!"
// Expected Result: false



// TASK 3
// Determine the number of decimal places of a number!

// Example:
// Input: "3.41"
// Expected Result: 2
// Input: "45.1234"
// Expected Result: 4

let x = 3.41;
let y = x.toString().split('.');
console.log(y);
console.log(y[1].length);

x = 45.1234
y = x.toString().split('.');
console.log(y);
console.log(y[1].length)

// TASK 4
// Return n'th element of Fibonacci sequence.

// Example:
// Input: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34" : 6
// Expected Result: 8

let v = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
console.log(v[6]);


// TASK 5
// Check if a given string (case insensitive) is a palindrome

// Example:
// Input: "sugus"
// Expected Result: true
// Input: "vanilla"
// Expected Result: false

let word = "sugus";
let reverse = word.split("").reverse().join("");
if (reverse === word) {
    console.log(true);
}else {
    console.log(false);
}
word = "vanilla"
reverse = word.split("").reverse().join("");
if (reverse === word) {
    console.log(true);
}else {
    console.log(false);
}


// TASK 6
// Multiply a given number by eight if it is an even number and by nine otherwise.
// IF SINTAX: a > b ? c : d ( translation: if a > b , then c , else d)

// Example:
// Input: 8
// Expected Result: 64
// Input: 5
// Expected Result: 45

a = 8;
((a%2)==0) ? console.log(a*8) : console.log(a*9)


// TASK 7
// Determine whether the letter at the supplied index in the provided string
// is either a vowel or a consonant. ( USE IF )

// Example:
// Input: "Frank" , index = 3
// Expected Result: consonant
// Input: "Lime", index = 1
// Expected Result: vowel

let v2 = ['a' , 'e' , 'i' , 'o' , 'u'];
word = "Frank";
let index = 4;
let wordSplit = word.split("")
console.log(wordSplit);
if (v2.includes(word[index])) {
    console.log("vowel");
}else console.log("consonant")


// TASK 8
// Return the supplied string in alphabetical order. 
// Your function must be able to sort the string in either direction; so either ascending or descending alphabetical order.

// Example:
// Input: "bacd"
// Expected Result: abcd
// Input: "axedzpq"
// Expected Result: zxqpeda

a = "bacd" ;
let b=a.split("").sort().join("");
console.log(b);

a = "axedzpq";
b=a.split("").sort().reverse().join("");
console.log(b)


// TASK 9
// Does the target string contain the provided string? 

// Example:
// Input: "catapult" , "cat"
// Expected Result: true
// Input: "hawaii" , "Snow"
// Expected Result: false

word = "catapult" ; 
console.log(word.includes("cat"));

word = "hawaii";
console.log(word.includes("Snow"));

// TASK 10
// What is the result of the following operations?
// 5 + 'number'
// 5 + '60'
// '60' + 5
// '2' + undefined
// 2 + undefined
a = 5 + 'number';
b = 5 + '60';
let c = '60' + 5,
    d = '2' + undefined,
    e = 2 + undefined;

console.log(a,typeof(a));
console.log(b,typeof(b));
console.log(c,typeof(c));
console.log(d,typeof(d));
console.log(e,typeof(e));