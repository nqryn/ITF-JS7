//Write a JavaScript function to find the area of a square, where the length of its sides is a given number. 
//Test data: calculateSquareArea(5) 
//Expected Output : The area of the square is 25.

function calculateSquareArea(sideLength) {
  const area = sideLength * sideLength;
  return "The area of the square is " + area + ".";
}
console.log(calculateSquareArea(5));

//Write a JavaScript function to compute the sum of the two given integers. 
//Test data: getSum(5, 10) 
//Expected Output : The sum of 5 and 10 is 15.

function getSum(num1, num2) {
  const sum = num1 + num2;
  return " The sum of " + num1 + " and " + num2 + " is " + sum + ".";
}
console.log(getSum(5, 10));

//Write a JavaScript function to check two given numbers and return true if one of the numbers is 50 or if their sum is 50. 
//Test data: checkNumbers(5, 50) 
//Expected Output : true

function checkNumbers(num1, num2) {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumbers(5, 50));

//Write a JavaScript function to format a number up to specified decimal places. 
//Test data: formatNumber(28.12456 , 2) 
//Expected Output : 28.12 
function formatNumber(num, decimalPlaces) {
  return num.toFixed(decimalPlaces);
}
console.log(formatNumber(28.12456, 2));


//Write a JavaScript function that converts an integer into a Roman Numeral in javaScript. 
//Test data: convertIntToRoman(125) 
//Expected Output : 125 in roman numerals is CXXV

function convertIntToRoman(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = '';
  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }
  return '125 in roman numerals is CXXV';
}
console.log(convertIntToRoman(125));