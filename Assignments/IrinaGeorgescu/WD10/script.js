// Task 1
// Concatenate n input arrays, where n is a variable.

// Example:
// Input: { a: 1, b: 2 }
// Expected Result: [["a", 1], ["b", 2]]
// Input: { shrimp: 15, tots: 12 }
// Expected Result: [["shrimp", 15], ["tots", 12]]
// Input: {}
// Expected Result: []

const seaFood = {
    shrimp: 15,
    tots: 12,
};

Object.entries(seaFood);

console.log(`[${Object.entries(seaFood)}]`)

//efectiv nu inteleg cum pot sa scriu sirul ala in asa fel incat sa returneze un array de arrayuri 


// Task 2
// Arrays can be mixed with various types. Your task is to sum all the number elements in the given array.
// Take an array and return the sum of all numbers in the array.

// Example:
// Input: [1, 2, "13", "4", "645"]
// Expected Result: 3
// Input: [true, false, "123", "75"]
// Expected Result: 0
// Input: [1, 2, 3, 4, 5, true]
// Expected Result: 15

function sumArray(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
    }
}
    return sum
}

// Task 3
// Return the coded (h4ck3r 5p34k) version of a string.

// Notes
// In order to work properly, the programm should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.

// Example:
// Input: "javascript is cool"
// Expected Result: "j4v45cr1pt 15 c00l"
// Input: "programming is fun"
// Expected Result: "pr0gr4mm1ng 15 fun"
// Input: "become a coder"
// Expected Result: "b3c0m3 4 c0d3r"

function codedSpeak(str) {
    str = str.replace("a", "4");
    str = str.replace("e", "3");
    str = str.replace("i", "1");
    str = str.replace("o", "0");
    str = str.replace("s", "5");

    return str;
};

codedSpeak("become a coder")

// Task 4
// Given an array of positive and negative numbers, return an array where the first element is the count of positive numbers 
// and the second element is the sum of negative numbers.

// Example:
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// Expected Result: [10, -65]
// Input: [92, 6, 73, -77, 81, -90, 99, 8, -85, 34]
// Expected Result: [7, -252]
// Input: []
// Expected Result: []

function countSum(input) {
    const answer = [];
    let posNums = 0;
    let negNums = 0;

    if (input === null || input.length === 0) {
        return [];
    } else {
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                posNums += 1
            } else {
                negNums += input[i]
            }
        }
        answer.push(posNums);
        answer.push(negNums);
    }
    return answer
}

// Task 5
// Given 2 variables, month and year (as integers), return the number of days in that month.

// Example:
// Input: 2, 2018
// Expected Result: 28
// Input: 5, 2022
// Expected Result: 31

const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
}

// Task 6
// You just returned home to find your mansion has been robbed!
// Given an object of the stolen items, return the total amount of the burglary (number). 
// If nothing was robbed, return the string "Lucky you!".

// Notes: 
// The item value is always positive.

// Example:
// Input: const stolenItems = { tv: 30, skate: 20, stereo: 50} 
// Expected Result: 100
// Input: const stolenItems = { painting: 20000} 
// Expected Result: 20000
// Input: const stolenItems = {}
// Expected Result:  "Lucky you!"

function calculateLosses(obj) {
    if (Object.keys(obj).length == 0) {
      return "Lucky you!";
    } else {
    return Object.values(obj).reduce((acc, curr) => acc + curr);
  }
}

// Task 7
// Return true if all values of an array are truthy, and false otherwise.

// Notes
// Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
// You will always be supplied with at least one parameter.

// Example:
// Input: [true, true, true] 
// Expected Result: true
// Input: [true, false, true]
// Expected Result: false
// Input: [5, 4, 3, 2, 1, 0]
// Expected Result:  false

function allTruthy(arr) {
    return arr.every(Boolean);
  }

// Task 8
// Concatenate the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

// Notes
// Return an empty array if the given array is empty.
// You can expect all the tests to have valid chords.

// Example:
// Input: ["G", "F", "C"] 
// Expected Result:  ["G7", "F7", "C7"]
// Input: ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// Expected Result: ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// Input: []
// Expected Result:  []

function chords(str) {
    const num = 7;
    let newChords = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(num) == true) {
            newChords.push(str[i]);
        } else {
            newChords.push(str[i] + "7");
        };
    }

    return newChords;
}
console.log(chords(["A7", "B", "C"]));


// Task 9
// Remove the letters "a", "b" and "c" from the given string and return the modified version.
// If the given string does not contain "a", "b", or "c", return null.

// Example:
// Input: "This might be a bit hard"
// Expected Result: "This might e  it hrd"
// Input: "hello world!"
// Expected Result: null
// Input: ""
// Expected Result: null

function removeABC(str) {
    if (!/[abc]/i.test(str)) {
      return null;
    } else {
      return str.replace(/[abc]/gi, '');
    }
  }

// Task 10
// Write a function that converts a sentence into pig latin.
// Rules for converting to pig latin:
// For words that begin with a vowel (a, e, i, o, u), add "way".
// Otherwise, move all letters before the first vowel to the end and add "ay".
// For simplicity, no punctuation will be present in the inputs.

// Example:
// Input: "this is pig latin"
// Expected Result: "isthay isway igpay atinlay"
// Input: "wall street journal"
// Expected Result: "allway eetstray ournaljay"

function pigLatin(string) {
    const words = string.split(" ");
    const vowels = ["a", "e", "i", "o", "u"];
    const pigLatinWords = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const firstLetter = word[0].toLowerCase();
  
      if (vowels.includes(firstLetter)) {
        pigLatinWords.push(word + "way");
      } else {
        const vowelIndex = word.search(/[aeiou]/i);
        const consonants = word.slice(0, vowelIndex);
        const restOfWord = word.slice(vowelIndex);
        pigLatinWords.push(restOfWord + consonants + "ay");
      }
    }
  
    return pigLatinWords.join(" ");
  }

 pigLatin("wall street journal")