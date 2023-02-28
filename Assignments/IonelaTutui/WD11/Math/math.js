//6. Write a JavaScript function to find the area of a square, where the length of its sides is a given number.
//Test data: calculateSquareArea(5)
//Expected Output : The area of the square is 25.

function areaSquare(a) {
  return a **2;
}
console.log(`The area of the square is ${areaSquare(5)}`);

//7. Write a JavaScript function to compute the sum of the two given integers.
//Test data: getSum(5, 10)
//Expected Output : The sum of 5 and 10 is 15.

let a = 5,
  b = 10;

function getSum(a, b) {
  return a + b;
}
console.log(`The sum of ${a} si ${a} is ${getSum(a, b)}`);

//8. Write a JavaScript function to check two given numbers and return true if one of the numbers is 50 or if their sum is 50.
//Test data: checkNumbers(5, 50)
//Expected Output : true
let c = 5,
  d = 500;
function checkNumbers(c, d) {
  if (c == 50 || d == 50 || c + d == 50) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumbers(c, d));


//11. Write a JavaScript function to format a number up to specified decimal places.
//Test data: formatNumber(28.12456 , 2)
//Expected Output : 28.12

function decimals(n, d) {
  if ((typeof n !== 'number') || (typeof d !== 'number'))
    return false;
       n = parseFloat(n) || 0;
   return n.toFixed(d);
   }
 console.log(decimals(0.12456 , 2));


//12. Write a JavaScript function to find the highest and the lowest values in an array of numbers.
//Test data: getHighLow(array) // array = [5, 12, 73 , 56 ,1 ,45 ,11] Expected Output : The highest number is 73 and the lowest number is 1.

let array = [5, 12, 73, 56, 1, 45, 11];
let min = array[0]; 
let max = array[array.length - 1]; 
function getHighLow(arra) {
  for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
      min = array[i];
    }
    if (max < array[i]) {
      max = array[i];
    }
  }
  return `The highest number is ${max} and the lowest number is ${min}`;
}
console.log (getHighLow(array));

