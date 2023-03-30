// Javascript Exercises

// DATES

// 1. Write a JavaScript function to display the current day and time in the
// following format.
// Test data: displayCurrentDay()
// Expected Output : Today is Tuesday. Current time is : 10:30:38

function displayCurrentDay() {
  const date = new Date();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = date.getDay();

  let time =
    date.getHours() +
    ":" +
    ("00" + date.getMinutes()).slice(-2) +
    ":" +
    date.getSeconds();

  return `Today is ${weekday[day]}.Current time is : ${time}`;
}

console.log(displayCurrentDay());

// 2. Write a JavaScript function to get the current date.
// Test data: displayCurrentDay()
// Expected Output : dd-mm-yyyy OR dd/mm/yyyy

function getCurrentDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
console.log(getCurrentDate());

// 3. Write a JavaScript function to get the number of days in a month.
// Test data: getNumberOfDays(2)
// Expected Output : March has 31 days.

const getNumberOfDays = (myYear, myMonth) =>
  new Date(myYear, myMonth, 0).getDate();
console.log(getNumberOfDays(2023, 12));
//
//

// 4. Write a JavaScript function to calculate days left until next Christmas.
// Test data: getDaysToChristmas()
// Expected Output : There are 145 days left until next Christmas.

// function getDaysToChristmas() {}
// console.log(getDaysToChristmas());

//
// 5. Write a JavaScript function to find which 1st of January falls on a
// Sunday between the years 2014 and 2050.
// Test data: whichYear()
// Expected Output : The 1st of January falls on a Sunday, in the
// following years: 2022, 2035 and 2048.

//
//
// MATH
// 6. Write a JavaScript function to find the area of a square, where the length
// of its sides is a given number.
// Test data: calculateSquareArea(5)
// Expected Output : The area of the square is 25.

function calculateSquareArea(l) {
  l = l * l;
  return l;
}
console.log(calculateSquareArea(5));

// 7. Write a JavaScript function to compute the sum of the two given
// integers.
// Test data: getSum(5, 10)
// Expected Output : The sum of 5 and 10 is 15.

function getSum(a, b) {
  let sum = a + b;
  return sum;
}
console.log(getSum(5, 10));

// 8. Write a JavaScript function to check two given numbers and return true
// if one of the numbers is 50 or if their sum is 50.
// Test data: checkNumbers(5, 50)
// Expected Output : true

function checkNumbers(a, b) {
  if (a == 50 || b == 50 || a + b == 50) {
    return true;
  }
}
console.log(checkNumbers(20, 30));

// 9. Write a JavaScript function to convert a binary number to a decimal
// number.
// Test data: convertBintoDec(1011)
// Expected Output : 1011 BINARY = 11 DECIMAL

let x = parseInt(101111, 2);
console.log(x);

// 10. Write a JavaScript function to generate a random integer.
// Test data: getRandom()
// Expected Output : 5

function getRandom() {
  let num = Math.trunc(Math.random() * 100);
  return num;
}
console.log(getRandom());

// 11. Write a JavaScript function to format a number up to specified decimal
// places.
// Test data: formatNumber(28.12456 , 2)
// Expected Output : 28.12

function formatNumber(n, d) {
  n = parseFloat(n);
  d = n.toFixed(d);
  return d;
}
console.log(formatNumber(28.12456, 2));

// 12. Write a JavaScript function to find the highest and the lowest values in
// an array of numbers.
// Test data: getHighLow(array) // array = [5, 12, 73 , 56 ,1 ,45 ,11]
// Expected Output : The highest number is 73 and the lowest
// number is 1.
arr = [5, 12, 73, 56, 1, 45, 11];
function getHighLow(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return `The highest number is ${max} and the lowest number is ${min}.`;
}
console.log(getHighLow(arr));

// 13. Write a JavaScript function to get the greatest common divisor (gcd) of
// two integers.
// Test data: getGCD(12,16)
// Expected Output : The greatest common divisor of 12 and 16 is 4.

// 14. Write a JavaScript function to calculate the sum of values in an array.
// Test data: getSumOfArray(array) // array = [1,2,3,4,5,6,7,8,9,10]
// Expected Output : The sum of the array is 55.

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getSumOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return `The sum of the array is ${sum}.`;
}
console.log(getSumOfArray(array));

// 15. Write a JavaScript function that converts an integer into a Roman
// Numeral in javaScript.
// Test data: convertIntToRoman(125)
// Expected Output : 125 in roman numerals is CXXV.

// STRINGS

// 16. Write a JavaScript function to create a new string adding "IT" in front of
// a given string. If the given string begins with "IT" then return the original
// string.
// Test data: convertString(“Factory”)
// Expected Output : ITFactory

function convertString(str) {
  let newString = str.startsWith("IT") ? str : "IT" + str;
  return newString;
}
console.log(convertString("Factory"));

// 17. Write a JavaScript function to remove a character at the specified
// position of a given string and return the new string.
// Test data: removeChar(“ITFactory”, 1)
// Expected Output : IFactory

function removeChar(str, poz) {
  let newString = str.slice(0, poz) + str.slice(poz + 1);
  return newString;
}
console.log(removeChar("ITFactory", 3));

// 18. Write a JavaScript function to rotate the string 'ITFactory', in the right
// direction by periodically removing one letter from the end of the string
// and attaching it to the front.
// Test data: rotateString(“ITFactory”)
// Expected Output : yrotcaFTI

function rotateString(str) {
  let newString = [];
  let letter;
  for (let i = str.length - 1; i > 0; i--) {
    letter = str[i] + str.substring(0, str[i - 1]);
    newString.push(letter);
  }
  return newString.join("") + str[0];
}
console.log(rotateString("ITFactory"));

// 19. Write a JavaScript program to create a new string from a given string,
// changing the position of first and last characters. The string’s length
// must be greater than 1.
// Test data: inverseString(“ITFactory”)
// Expected Output : yTFactorI

// 20. Write a JavaScript program to create a new string from a given string,
// taking the last 3 characters and adding them both at the front and back.
// The string’s length must be greater than 3. Example: ITFactory =>
// ITFITFactoryITF.
// Test data: newString(“ITFactory”)
// Expected Output : ITFITFactoryITF

// 21. Write a JavaScript program to check whether a string starts with 'Java'
// and return true or false, accordingly.
// Test data: checkString(“JavaScript”)
// Expected Output : true

function checkString(str) {
  let newString = str.toLowerCase();
  return newString.startsWith("java") ? true : false;
}

console.log(checkString("JavaScript"));

// 22. Write a JavaScript program to check whether a specified character
// exists between the 2nd to 4th positions of a given string.
// Test data: checkCharPos(“ITFactory”, a)

// a sau "a" ???

// Expected Output: true

function checkCharPos(str, character) {
  let newString = str.substring(2, 4);
  // character = character.toString();
  return newString.includes(character) ? true : false;
}
console.log(checkCharPos("ITFactory", "a"));

// 23. Write a JavaScript program to replace every character in a given string
// with the character following it in the alphabet.
// Test data: replaceChar(“ITFactory”)
// Expected Output: JUGbdupsz

// 24. Write a JavaScript program to capitalize the first letter of each word of a
// given string.
// Test data: capitalizeWords(“we are learning javascript”)
// Expected Output: We Are Learning Javascript

function capitalizeWords(str) {
  newString = str.split(" ");

  for (let i = 0; i < newString.length; i++) {
    newString[i] = newString[i][0].toUpperCase() + newString[i].substr(1);
  }
  return newString.join(" ");
}
console.log(capitalizeWords("we are learning javascript"));

// 25. Write a JavaScript program to check whether the characters a and b are
// separated by exactly 3 places anywhere (at least once) in a given string.
// Test data: checkForAB(“asdbasded”)
// Expected Output: true

// 26. Write a JavaScript function to split a string and convert it into an array of
// words.
// Test data: convertStrToArr(“We Are Learning Javascript”)
// Expected Output: [“We”, “Are”, “Learning”, “Javascript”]

let str = "We Are Learning Javascript";
function convertStrToArr(str) {
  return str.split(" ");
}
console.log(convertStrToArr(str));

// 27. Write a JavaScript function that takes a string which has lower and
// upper case letters as a parameter and converts upper case letters to
// lower case, and lowercase letters to uppercase.
// Test data: uppLowString(“AbCdEfGh”)
// Expected Output: aBcDeFgH

// 28. Write a JavaScript function to convert a string into the camel case.
// Test data: camelCaseStr(“first name”)
// Expected Output: firstName

// 29. Write a JavaScript function to convert a string into the snake case.
// Test data: snakeCaseStr(“first name”)
// Expected Output: first_name

// 30. Write a JavaScript function to truncate a string if it is longer than the
// specified number of characters. Truncated strings will end with a
// translatable ellipsis sequence ("...") (by default) or specified characters.
// Test data: truncateString(“We are learning JS”, 10)
// Expected Output: We are lea...
// We are lea...

// ARRAYS

// 31. Write a JavaScript function to check whether an `input` is an array or
// not.

function checkArray(arr) {
  return Array.isArray(arr);
}
arr = "aaa";
console.log(checkArray(arr));

// 32. Write a JavaScript function to clone an array.

function cloneArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
}
console.log(cloneArray([1, 2, 3]));

// 33. Write a JavaScript function to get the first element of an array. Passing a
// parameter 'n' will return the first 'n' elements of the array.
//first(arr) => da 1
//first(arr, 3) => da 1,2,4
//first(arr, 100) => da tot arrayul

arr = [1, 2, 4, 8, 16];
function firstElement(arr, n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(firstElement(arr, 3));

// 34. Write a JavaScript function to get the last element of an array. Passing a
// parameter 'n' will return the last 'n' elements of the array.

function lastElement(arr, n) {
  let newArr = [];
  for (let i = arr.length - n; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(lastElement(arr, 2));

// 35. Write a JavaScript function to join all elements of an array into a string.

function arrayToString(arr) {
  return arr.join("");
}
console.log(arrayToString([1, 2, 3]));

// 36. Write a JavaScript function to sort the items of an array.

function sortArray(arr) {
  return arr.sort();
}
console.log(sortArray([5, 3, 1, 5, 63]));

// 37. Write a JavaScript function to find the most frequent item of an array.

arr = [1, 2, 3, 2, 3, 2, 4, 2, 3, 2];
function findItem() {
  let maxCount = 0,
    mostFrequent;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if ((arr[i] = arr[j])) {
        count++;
      }
    }
    if (count > maxCount) {
      maxcount = count;
      mostFrequent = arr[i];
    }
  }
  return mostFrequent;
}
console.log(findItem(arr));

// 38. Write a JavaScript function to remove duplicate items from an array
// (ignore case sensitivity).

arr = [1, 2, 3, 2, 3, 2, 4, 2, 3, 2];
function removeItem() {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((arr[i] = arr[j])) {
        arr.slice(arr[i], 1);
        arr.splice(arr[j], 1);
      }
    }
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(removeItem(arr));
// 39. Write a JavaScript function to shuffle an array.
// 40. Write a JavaScript function to compute the sum of each individual index
// value from 2 given arrays ( from the same positions ) and return a 3rd
// array with the sums.
// 41. Write a JavaScript function to compute the union of two arrays ( don’t
// add duplicates )
// 42. Write a JavaScript function to remove a specific element from an array.
// 43. Write a JavaScript function to check if an array contains a specific
// element.
// 44. Write a JavaScript function to get a random item from an array.
// 45. Write a JavaScript function to move an array element from one position
// to another.
// 46. Write a JavaScript function to filter false, null, 0 and blank values from
// an array.
// 47. Write a JavaScript function to find the unique elements from two arrays.
// 48. Write a JavaScript function to combine the numbers of a given array into
// an array containing all combinations.
// 49. Write a JavaScript function that converts a specified number to an array
// of digits.
// 50. Write a JavaScript function that filters out the element(s) of a given
// array, that have one of the specified values.

// OBJECTS

let trainingObj = {
  trainer: "Iulia",
  course: "HTML",
  duration: 30,
  participants: ["Ross", "Rachel", "Phoebe", "Monica", "Joey", "Chandler"],
  isActive: true,
};

// 51. Write a JavaScript function to list the properties of the trainingObj object.

function propertiesOfTrainingObj(obj) {
  let newArr = [];
  for (let key in obj) {
    newArr.push(key);
  }
  return newArr;
}
console.log(propertiesOfTrainingObj(trainingObj));

// 52. Write a JavaScript function to add the startTime property to the
// trainingObj object and give it the value 19:00.

function addStartTime(startTime) {
  trainingObj.startTime = startTime;
}
addStartTime("19:00");
console.log(trainingObj);

// 53. Write a JavaScript function to add the endTime property to the
// trainingObj object and give it the value 21:00.

function addEndTime(endTime) {
  trainingObj.endTime = endTime;
}
addEndTime("21:00");
console.log(trainingObj);

// 54. Write a JavaScript function to add the day property to the trainingObj
// object and give it the value “Thursday”.

function addDay(day) {
  trainingObj.day = day;
}
addDay("thursday");
console.log(trainingObj);

// 55. Write a JavaScript function to delete the isActive property from the
// trainingObj object. Also print the object before and after deleting the
// property.

function deleteProperty(prop) {
  delete trainingObj[prop];
}
deleteProperty("isActive");
console.log(trainingObj);

// 56. Write a JavaScript function to get the length of the trainingObj object.

function lengthOfTrainingObj(obj) {
  let newArr = [];
  for (let key in obj) {
    newArr.push(key);
  }
  return newArr.length;
}
console.log(lengthOfTrainingObj(trainingObj));

// 57. Write a JavaScript function to check if the session is Active and return
// true or false. Add the function as a value to a parameter isActive.
// Session is only Active if the current day matches the day parameter and
// if the current time is between startTime and endTime.

// 58. Write a JavaScript function to check whether the trainingObj object
// contains the participants property and the property is not null or empty.

// function checkProperty(prop) {
//     return (!trainingObj.prop || trainingObj.prop === "");
// }
// console.log(checkProperty("participants"));

// 59. Write a JavaScript function to get a copy of the object where the keys
// have become the values and the values have become the keys.

// let trainingObj = {
//     trainer: "Iulia",
//     course: "HTML",
//     duration: 30,
//     participants: ["Ross", "Rachel", "Phoebe", "Monica","Joey", "Chandler"],
//     isActive: true
// }
function getCopy(obj) {
  return newObj;
}
// console.log(trainingObj);

// 60. Write a JavaScript function to convert the trainingObj object into a list
// of `[key, value]` pairs.

function convertObject(obj) {
  let newArr = [];
  for (let prop in obj) {
    newArr.push([prop, obj[prop]]);
  }
  return newArr;
}
console.log(convertObject(trainingObj));
