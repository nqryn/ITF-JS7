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
console.log('**********************************************');
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
const stringArr = ['Ana', 'are', 'mere'];
const arrJoin = arr => arr.join(' ');
console.log(arrJoin(stringArr));

