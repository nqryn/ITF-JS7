// Task 1
// Given an array of numbers,  return "Boom!" if the digit 7 appears in the array. Otherwise, return "There is no 7 in the array".

// Example
// Input: [1, 2, 3, 4, 5, 6, 7] 
// Expected Result: "Boom!"
// Input: [8, 6, 33, 100]
// Expected Result:  "There is no 7 in the array"
// Input: [2, 55, 60, 97, 86]
// Expected Result: "Boom!"

function containsSeven(nums) {
  for (const num of nums) {
    if (num.toString().includes('7')) {
      return "Boom!";
    }
  }
  return "There is no 7 in the array";
}
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [8, 6, 33, 100];
const arr3 = [2, 55, 60, 97, 86];

console.log(containsSeven(arr1)); 
console.log(containsSeven(arr2)); 
console.log(containsSeven(arr3));

// Task 2
// Given an array of strings, return an array with only the strings that have numbers in them.
// If there are no strings containing numbers, return an empty array.

// Example
// Input: ["1a", "a", "2b", "b"]
// Expected Result: ["1a", "2b"]
// Input: ["abc", "abc10"]
// Expected Result: ["abc10"]
// Input: ["this is a test", "test"]
// Expected Result: []

function stringsWithNumbers(arr) {
  let result = [];
  for (let str of arr) {
    if (/\d/.test(str)) {  
      result.push(str);
    }
  }
  return result;
}
console.log(stringsWithNumbers(["1a", "a", "2b", "b"]));
console.log(stringsWithNumbers(["abc", "abc10"]));  
console.log(stringsWithNumbers(["this is a test", "test"]));


// Task 3
// Given a list of hours, return the total weekly salary.
// The input list hours is listed sequentially, ordered from Monday to Sunday.
// A worker earns $10 an hour for the first 8 hours.
// For every overtime hour, he earns $15.
// On weekends, the employer pays double the usual rate, regardless how many hours were worked previously that week. 
// For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.

// Example
// Input: [8, 8, 8, 8, 8, 0, 0]
// Expected Result: 400
// Input: [10, 10, 10, 0, 8, 0, 0]
// Expected Result: 410

function calculateWeeklySalary(hours) {
  let totalSalary = 0;
  let weeklyHours = 0;
  let overtime = 0;

  for (let i = 0; i < hours.length; i++) {
    if (i < 5) { // weekday
      if (hours[i] > 8) {
        overtime += hours[i] - 8;
        weeklyHours += 8;
      } else {
        weeklyHours += hours[i];
      }
    } else { // weekend
      weeklyHours += hours[i];
    }
  }

  totalSalary += weeklyHours * 10 + overtime * 15;
  totalSalary += hours[5] * 20 + hours[6] * 20;

  return totalSalary;
}

console.log(calculateWeeklySalary([8, 8, 8, 8, 8, 0, 0])); 
console.log(calculateWeeklySalary([10, 10, 10, 0, 8, 0, 0]));


// Task 4
// Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. 
// Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is: 
//     Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.
//     Round 2: [m, s] Use his middle snail against Steve's slowest.
//     Round 3: [f, m] Use his fastest snail against Steve's middle.
// Determine whether Maurice's plan will work by outputting true if Maurice wins 2/3 games. The arrays input:
// Array 1: [s, m, f] for Maurice.
// Array 2: [s, m, f] for Steve.

// Example
// Input: [3, 5, 10], [4, 7, 11]
// Expected Result: true
// Input: [6, 8, 9], [7, 12, 14]
// Expected Result: false

function mauricesPlan(maurice, steve) {
  let mauriceWins = 0;
  
  if (maurice[0] < steve[2]) {
    mauriceWins++;
  }
  
  if (maurice[1] < steve[0]) {
    mauriceWins++;
  }
  
  if (maurice[2] < steve[1]) {
    mauriceWins++;
  }
  
  return mauriceWins >= 2;
}

console.log(mauricesPlan([3, 5, 10], [4, 7, 11]));
console.log(mauricesPlan([6, 8, 9], [7, 12, 14])); 


// Task 5
// In this challenge, you have to obtain a sentence from the elements of a given matrix. 
// In the matrix, each word of the sentence follows a columnar order from the top to the bottom, 
// instead of the usual left-to-right order: it's time for transposition!
// Given a matrix mtx, return the complete sentence as a string, with the words separated by a space between them.

// Example
// Input: [["Enter"],["the"],["Matrix!"]
// Expected Result: "Enter the Matrix!"
// Input: ["You", "the"],["must", "table"],["transpose", "order."]
// Expected Result: "You must transpose the table order."

function fromMatrixToString(mtx) {
  let result = '';
  const numRows = mtx[0].length;
  
  for (let i = 0; i < numRows; i++) {
    const row = mtx.map(col => col[i]).join(' ');
    result += row + ' ';
  }
  
  return result.trim();
}
const mtx1 = [["Enter"],["the"],["Matrix!"]];
console.log(fromMatrixToString(mtx1));

const mtx2 = [["You", "the"],["must", "table"],["transpose", "order."]];
console.log(fromMatrixToString(mtx2)); 


// Task 6
// You are working with a broken keyboard. 
// Given what is supposed to be typed and what is actually typed, return the broken key(s).

// Example
// Input: "happy birthday", "hawwy birthday"
// Expected Result: ["p"]
// Input: ("beethoven", "affthoif5")
// Expected Result: ["b", "e", "v", "n"]

function findBrokenKeys(supposed, actual) {
  const brokenKeys = [];

  for (let i = 0; i < supposed.length; i++) {
    if (supposed[i] !== actual[i]) {
      if (!brokenKeys.includes(supposed[i])) {
        brokenKeys.push(supposed[i]);
      }
    }
  }

  return brokenKeys;
}
console.log(findBrokenKeys("happy birthday", "hawwy birthday")); 
console.log(findBrokenKeys("beethoven", "affthoif5")); 

// Task 7
// Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology. 
// The machines now interpret a series of consecutive dance moves in place of a PIN number.
// Create a program that converts a customer's PIN number to its dance equivalent. 
// There is one dance move per digit in the PIN number. A list of dance moves is given in the code.

// Notes
// Each dance move will be selected from a list by index based on the current digit's value plus that digit's index value.
// If this value is greater than the last index value of the dance list, it should cycle to the beginning of the list.
// Valid input will always be a string of four digits. Output will be a string array.
// If the input is not four valid numbers, return the string, "Invalid input."

// Example
// Input: "0000"
// Expected Result: ["Shimmy", "Shake", "Pirouette", "Slide"]
// Input: "3856"
// Expected Result: [ "Slide", "Arabesque", "Pop", "Arabesque" ]



// Task 8
// Given an integer "n", return the multiplication table of 1 to n numbers up to nth multiple.

// Example
// Input: 2
// Expected Result: [1, 2],[2, 4]
// Input: 3
// Expected Result: [1, 2, 3],[2, 4, 6],[3, 6, 9]

for (let i = 0; i < n; i++) {
  table.push(new Array(n));
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    table[i-1][j-1] = i * j;
  }
}

console.log(multiplicationTable(2));
console.log(multiplicationTable(3));


// Task 9
// Given an array nums where each integer is between 1 and 100, return a sorted array containing only duplicate numbers from the given nums array.

// Example
// Input: [1, 2, 3, 4, 3, 5, 6]
// Expected Result: 3
// Input: [81, 72, 43, 72, 81, 99, 99, 100, 12, 54]
// Expected Result: [72, 81, 99]

function findDuplicateNumbers(nums) {
  
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] === 2) {
      duplicates.push(num);
    }
  }
  return duplicates.sort((a, b) => a - b);
}
const duplicates1 = findDuplicateNumbers(arr1);
console.log(duplicates1);

const duplicates2 = findDuplicateNumbers(arr2);
console.log(duplicates2);


// Task 10
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".

// Example
// Input: "I am finding Nemo !"
// Expected Result: "I found Nemo at 4!"
// Input: "NEMO is me"
// Expected Result: "I found Nemo at 1!"
// Input: "Where is the fish ?"

function findNemo(sentence) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === "nemo") {
      return `I found Nemo at ${i + 1}!`;
    }
  }
  return "I can't find Nemo :(";
}

console.log(findNemo("I am finding Nemo !"));
console.log(findNemo("NEMO is me"));