// Task 1
// Given an array of numbers,  return "Boom!" if the digit 7 appears in the array. Otherwise, return "There is no 7 in the array".

// Example
// Input: [1, 2, 3, 4, 5, 6, 7] 
// Expected Result: "Boom!"
// Input: [8, 6, 33, 100]
// Expected Result:  "There is no 7 in the array"
// Input: [2, 55, 60, 97, 86 
// Expected Result: "Boom!"

let v2 = [2, 55, 60, 9, 86];
function myFunction(v){
    if (v.toString().includes(7)) {
        console.log("boom");
    } else {
        console.log("nu");
    }
}
myFunction(v2)


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

v = ["1a", "a", "2b", "b"];
let n = [1,2,3]
v2 = [];
for (let j=0;j<n.length;j++) {
    for (let i=0; i<v.length; i++) {
        if(v[i].toString().includes(n[j])){
            v2.push(v[i])
        }
    }
}
console.log(v2);



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

let h = [0, 0, 0, 0, 0, 8, 0];
let d = [1,2,3,4,5,6,7];
let sum=0;
let overtime = 0;
for (let i=0;i<7;i++){
    // if (d[i]<6) {
    //     if (h[i]=8) {
    //         sum+=h[i]*10;
    //     }
    //     if (h[i]>8) {
    //         overtime+=((h[i]-8)*15);
    //     }
    // } 
     if (d[i]==6 || d[i] == 7) {
        if (h[i]=8) {
            sum+=h[i]*10*2;
        }
    }
}

console.log(sum,overtime);

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

let v1 = [3,5,10];
v2 = [4,7,11];
if (v1[1]>v2[0] && v1[2]>v2[1]) {
    console.log("Maurice Win");
}else {
    console.log("he loose");
};

v1 = [6, 8, 9];
v2 = [7, 12, 14];
if (v1[1]>v2[0] && v1[2]>v2[1]) {
    console.log("Maurice Win");
}else {
    console.log("he loose");
}


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



// Task 6
// You are working with a broken keyboard. 
// Given what is supposed to be typed and what is actually typed, return the broken key(s).

// Example
// Input: "happy birthday", "hawwy birthday"
// Expected Result: ["p"]
// Input: ("beethoven", "affthoif5")
// Expected Result: ["b", "e", "v", "n"]

let str1 = "beethoven";
let str2 = "affthoif5";
let v3=[];
v1=str1.split("");
v2=str2.split("");
console.log(v1,v2);
for (let i=0;i<v1.length;i++) {
    if (v1[i]!=v2[i]) {
        v3.push(v1[i]);
    }
}
console.log(v3);



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



// Task 9
// Given an array nums where each integer is between 1 and 100, return a sorted array containing only duplicate numbers from the given nums array.

// Example
// Input: [1, 2, 3, 4, 3, 5, 6]
// Expected Result: 3
// Input: [81, 72, 43, 72, 81, 99, 99, 100, 12, 54]
// Expected Result: [72, 81, 99]



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