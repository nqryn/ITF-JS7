// Task 1
// Given an array of numbers,  return "Boom!" if the digit 7 appears in the array. Otherwise, return "There is no 7 in the array".

// Example
// Input: [1, 2, 3, 4, 5, 6, 7]
// Expected Result: "Boom!"
// Input: [8, 6, 33, 100]
// Expected Result:  "There is no 7 in the array"
// Input: [2, 55, 60, 97, 86
// Expected Result: "Boom!"

/* let myNubersArray=prompt("Enter the numbers array(0,0,0,...):").split(",");
let flag=0;
myNubersArray.forEach(element => {
    if(element==7){
        console.log("Boom");
        flag=1;
    }    
});
if(flag!=1){
    console.log("There is no 7 in the array");
} */

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

/* let myStringsArray=prompt("Enter the strings array(a,b,c,...):").split(",");
let resultArray=[];
myStringsArray.forEach(element => {
    if(/\d/.test(element)){
        resultArray.push(element);
    }
});
console.log(resultArray); */

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

/* let hoursArray=prompt("Enter the worked hours in a week by days(x,x,...):").split(",");
let wage=0;
for(let i=0; i<hoursArray.length; i++){
    if(0<=i && i<=4){
        if(hoursArray[i]<=8){
            wage=wage+Number(hoursArray[i])*10;
        } else if(hoursArray[i]>8){
            wage=wage+(8*10+(Number(hoursArray[i])-8)*15);
        }
    } else if(5<=i && i<7){
        wage=wage+Number(hoursArray[i])*20;
    }
}
console.log(wage); */

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

/* let flag=0;
let sArray=prompt("Enter the speed of Steve's snails(s,m,f): ").split(",");
let mArray=prompt("Enter the speed of Maurice's snails(s,m,f): ").split(",");
if(Number(sArray[0])>Number(mArray[2])){
    flag++;
    console.log(flag);
} 
if(Number(sArray[1])>Number(mArray[0])){
    flag++;
    console.log(flag);
}
if(Number(sArray[2])>Number(mArray[1])){
    flag++;
    console.log(flag);
}
if(flag==2){
    console.log("True");
} else {
    console.log("False");
}
console.log(flag); */

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

/* let mtx=[["You", "the"],["must", "table"],["transpose", "order."]];
let mySentence="";
for(let j=0; j<mtx[0].length;j++){
    for(let i=0; i<mtx.length; i++){
        mySentence+=mtx[i][j]+" ";
    }
}
console.log(mySentence); */

// Task 6
// You are working with a broken keyboard.
// Given what is supposed to be typed and what is actually typed, return the broken key(s).

// Example
// Input: "happy birthday", "hawwy birthday"
// Expected Result: ["p"]
// Input: ("beethoven", "affthoif5")
// Expected Result: ["b", "e", "v", "n"]

/* let intendedInput="beethoven";
let realInput="affthoif5";
let brokenKeysArray=[];
for(let i=0; i<intendedInput.length; i++){
    if(intendedInput.charAt(i)!=realInput.charAt(i)){
        brokenKeysArray.push(intendedInput.charAt(i));
    }
}
let brokenKeysSet=new Set(brokenKeysArray);
let brokenKeys=Array.from(brokenKeysSet);
console.log(brokenKeys); */

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

/* const danceMoves = [
  "Shimmy",
  "Shake",
  "Pirouette",
  "Slide",
  "Arabesque",
  "Pop",
  " Moonwalk",
  "Apple Jacks",
  "Chasse",
  "Dosado",
  "Gancho",
  "Impetus",
  "Kick",
];
let pin = prompt("Enter your PIN(4 digits):");
let danceMoveSelection = 0;
let dance = [];
if (pin.length == 4) {
  for (let i = 0; i < pin.length; i++) {
    valueOfTheMoveToSelect = i + Number(pin[i]);
    dance.push(danceMoves[valueOfTheMoveToSelect]);
  }
  console.log(dance);
} else {
  console.log("Invalid input.");
} */

// Task 8
// Given an integer "n", return the multiplication table of 1 to n numbers up to nth multiple.

// Example
// Input: 2
// Expected Result: [1, 2],[2, 4]
// Input: 3
// Expected Result: [1, 2, 3],[2, 4, 6],[3, 6, 9]

/* const n=prompt("Enter your number: ");
let lineArray=[];
for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        lineArray.push(i*j);
    }
    console.log(lineArray);
    lineArray=[];
} */

// Task 9
// Given an array nums where each integer is between 1 and 100, return a sorted array containing only duplicate numbers from the given nums array.

// Example
// Input: [1, 2, 3, 4, 3, 5, 6]
// Expected Result: 3
// Input: [81, 72, 43, 72, 81, 99, 99, 100, 12, 54]
// Expected Result: [72, 81, 99]

const myNumbersArray = prompt(
  "Give an array nums where each integer is between 1 and 100, separated by commas, to find the duplicates: "
).split(",");
let duplicatesArray = [];
const myNumbersMap = new Map();
myNumbersArray.forEach((element) => {
  if (myNumbersMap.has(element)) {
    myNumbersMap.set(element, myNumbersMap.get(element) + 1);
  } else {
    myNumbersMap.set(element, 1);
  }
});
function duplicates(value, key, map) {
  if (value > 1 && !duplicatesArray.includes(key)) {
    duplicatesArray.push(key);
  }
}
myNumbersMap.forEach(duplicates);
console.log(duplicatesArray.sort());

// Task 10
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".

// Example
// Input: "I am finding Nemo !"
// Expected Result: "I found Nemo at 4!"
// Input: "NEMO is me"
// Expected Result: "I found Nemo at 1!"
// Input: "Where is the fish ?"
// Expected Result: "I can't find Nemo :("

/* let myWordsArray=prompt("Enter a sentence and let me find if the word 'Nemo' is included:").toLowerCase().split(" ");
let index=0;
index=myWordsArray.indexOf("nemo")+1;
if(index!==0){
    console.log(`I found Nemo at ${index}!`);
} else {
    console.log("I can't find Nemo :(");
} */
