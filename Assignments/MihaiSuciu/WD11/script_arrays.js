/* 31. Write a JavaScript function to check whether an `input` is an array or
not. */

const myArray = [1, 3, "5", 34, true];
const isArrayCheck = (myArray) => Array.isArray(myArray);
console.log(isArrayCheck(myArray));

/* 32. Write a JavaScript function to clone an array. */

const firstArray = [1, 3, "5", 34, true];
const cloneArray = firstArray.map((x) => x);
console.log(cloneArray);

/* 33. Write a JavaScript function to get the first element of an array. Passing a
parameter 'n' will return the first 'n' elements of the array. */

const secondArr = [1, 3, "5", 34, true];
const returnFromArray = (arr, n) => {
    if (n == undefined) {
        return arr[0];
    } else {
        return arr.slice(0, n);
    }
};
console.log(returnFromArray(secondArr, 2));

/* 34. Write a JavaScript function to get the last element of an array. Passing a
parameter 'n' will return the last 'n' elements of the array. */
console.log("**********************************************");
const thirdArr = [-11, 0, "1", 22, false, "Ion"];
const returnLast = (arr, n) => {
    if (n === undefined) {
        return arr[arr.length - 1];
    } else {
        return arr.slice(arr.length - 1 - n, arr.length - 1);
    }
};
console.log(returnLast(thirdArr, 3));

/* 35. Write a JavaScript function to join all elements of an array into a string. */
const stringArr = ["Ana", "are", "mere"];
const arrJoin = (arr) => arr.join(" ");
console.log(arrJoin(stringArr));

/* 36. Write a JavaScript function to sort the items of an array. */
const sortArr = (arr36) => console.log(arr36.sort());
sortArr([22, 1, "A", false, "Ion", 111, 11, "c", "elev"]);

/* 37. Write a JavaScript function to find the most frequent item of an array. */

const mostFrequentEl = (arr37) => {
    let counter = {};
    let maxFrequency = 0;
    let maxFrequencyElement = null;
    for (let i = 0; i < arr37.length; i++) {
        let element = arr37[i];
        if (counter[element] == null) {
            counter[element] = 1;
        } else {
            counter[element]++;
        }
        if (maxFrequency < counter[element]) {
            maxFrequency = counter[element];
            maxFrequencyElement = element;
        }
    }
    return maxFrequencyElement;
};
console.log(
    `The most frequent element is: ${mostFrequentEl([
        1, 55, 3, 1, -5, -7, 1, -12, 3, 2, 3, 3, 3,
    ])}`
);

/* 38. Write a JavaScript function to remove duplicate items from an array
(ignore case sensitivity). */

const removeDuplicates = (arr38) => {
    let finalArr = [];
    for (let i = 0; i < arr38.length; i++) {
        if (!finalArr.includes(arr38[i])) {
            finalArr.push(arr38[i]);
        }
    }
    return finalArr;
};
console.log(removeDuplicates([1, 55, 3, 1, -5, -7, 1, -12, 3, 2, 3, 3, 3]));

/* 39. Write a JavaScript function to shuffle an array. */

const shuffleArray = (arr39) => {
    for (let i = 0; i < arr39.length; i++) {
        let j = Math.floor(Math.random() * i);
        [arr39[i], arr39[j]] = [arr39[j], arr39[i]];
    }
    return arr39;
};
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* 40. Write a JavaScript function to compute the sum of each individual index
value from 2 given arrays ( from the same positions ) and return a 3rd
array with the sums. */

const sumOfArrays = (arr401, arr402) =>
    arr401.map((element, idx) => element + arr402[idx]);
console.log(sumOfArrays([1, 1, 2, 2, 3, 3], [3, 3, 2, 2, 1, 1]));

/* 41. Write a JavaScript function to compute the union of two arrays ( don’t
add duplicates ) */

const unionOfArrays = (arr411, arr412) =>
    Array.from(new Set(arr411.concat(arr412)));
console.log(unionOfArrays([1, 1, 2, 2, 3, 3], [3, 3, 2, 2, 1, 1]));

/* 42. Write a JavaScript function to remove a specific element from an array. */

const removeElement = (arr42, el) => arr42.filter((item) => item !== el);
console.log(removeElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

/* 43. Write a JavaScript function to check if an array contains a specific
element. */

const containsElement = (arr43, el) => arr43.includes(el);
console.log(containsElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

/* 44. Write a JavaScript function to get a random item from an array. */

const getRandomElement = (arr44) =>
    arr44[Math.floor(Math.random() * arr44.length)];
console.log(getRandomElement([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* 45. Write a JavaScript function to move an array element from one position
to another. */

const moveElement = (arr45, fromIdx, toIdx) => {
    arr45.splice(toIdx, 0, arr45[fromIdx]);
    arr45.splice(fromIdx, 1);
    return arr45;
};
console.log(moveElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 9));

/* 46. Write a JavaScript function to filter false, null, 0 and blank values from
an array. */
const filterFalse = (arr46) =>
    arr46.filter((el) => ![false, null, 0, "", " ", "0"].includes(el));
console.log(filterFalse([null, 0, "A", false, "0", 111, 11, " ", ""]));

/* 47. Write a JavaScript function to find the unique elements from two arrays. */

const uniquesFromArrays = (arr471, arr472) =>
    Array.from(new Set(arr471.concat(arr472)));
console.log(uniquesFromArrays([1, 1, 2, 2, 3, 3], [3, 3, 2, 2, 1, 1]));

/* 48. Write a JavaScript function to combine the numbers of a given array into
an array containing all combinations. */

const combineNumbers = (arr48) => {
    let finalArray = [];
    for (let i = 0; i < arr48.length - 1; i++) {
        for (let j = i + 1; j < arr48.length; j++) {
            let combinationsArray = [];
            combinationsArray.push(arr48[i]);
            combinationsArray.push(arr48[j]);
            finalArray.push(combinationsArray);
        }
    }
    return finalArray;
};
console.log(combineNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* 49. Write a JavaScript function that converts a specified number to an array
of digits. */

const turnToDigitsArr = (myNumber) => myNumber.toString().split("");
console.log(turnToDigitsArr(123456789));

/* 50. Write a JavaScript function that filters out the element(s) of a given
array, that have one of the specified values. */

const filterArray = (myArr, elem) => myArr.filter((item) => item != elem);
console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
