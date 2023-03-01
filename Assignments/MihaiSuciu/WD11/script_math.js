/* 6. Write a JavaScript function to find the area of a square, where the length
of its sides is a given number.
Test data: calculateSquareArea(5)
Expected Output : The area of the square is 25. */

const sideLength = 5;
const calculateSquareArea = (sideLength) => sideLength ** 2;
console.log(calculateSquareArea(sideLength));

/* 7. Write a JavaScript function to compute the sum of the two given
integers.
Test data: getSum(5, 10)
Expected Output : The sum of 5 and 10 is 15. */

const getSum = (firstNum, secondNum) => firstNum + secondNum;
const myFirstNumber = 5,
    mySecondNumber = 10;
console.log(
    `The sum of ${myFirstNumber} and ${mySecondNumber} is ${getSum(
        myFirstNumber,
        mySecondNumber
    )}.`
);

/* 8. Write a JavaScript function to check two given numbers and return true
if one of the numbers is 50 or if their sum is 50.
Test data: checkNumbers(5, 50)
Expected Output : true */

const checkNumbers = (myNbr1, myNbr2) =>
    myNbr1 == 50 || myNbr2 == 50 || myNbr1 + myNbr2 == 50
        ? console.log("true")
        : console.log(false);
checkNumbers(5, 35);

/* 9. Write a JavaScript function to convert a binary number to a decimal
number.
Test data: convertBintoDec(1011)
Expected Output : 1011 BINARY = 11 DECIMAL */

const convertBinToDec = (myBin) => parseInt(myBin, 2);
console.log(convertBinToDec(1011));

/* 10. Write a JavaScript function to generate a random integer.
Test data: getRandom()
Expected Output : 5 */

const getRandom = () => Math.random() * 10;
console.log(getRandom().toPrecision(1));

/* 11. Write a JavaScript function to format a number up to specified decimal
places.
Test data: formatNumber(28.12456 , 2)
Expected Output : 28.12 */

const formatNumber = (myNum, myDec) => myNum.toPrecision(3);
console.log(formatNumber(1.25655478943));

/* 12. Write a JavaScript function to find the highest and the lowest values in
an array of numbers.
Test data: getHighLow(array) // array = [5, 12, 73 , 56 ,1 ,45 ,11]
Expected Output : The highest number is 73 and the lowest
number is 1. */

const numArr = [5, 12, 73, 56, 1, 45, 11];
const getHighLow = (myNumArr) => {
    let min = numArr[0];
    let max = numArr[0];
    myNumArr.forEach((element) => {
        if (element < min) {
            min = element;
        }
        if (element > max) {
            max = element;
        }
    });
    console.log(`The highest number is ${max} and the lowest number is ${min}`);
};
getHighLow(numArr);

/* 13. Write a JavaScript function to get the greatest common divisor (gcd) of
two integers.
Test data: getGCD(12,16)
Expected Output : The greatest common divisor of 12 and 16 is 4. */
let min, max;
const getGCD = (x, y) => {
    if (x < y) {
        min = x;
        max = y;
    } else {
        min = y;
        max = x;
    }
    for (let i = min - 1; i > 0; i--) {
        if (min % i == 0 && max % i == 0) {
            console.log(
                `The greatest common divisor of ${min} and ${max} is ${i}.`
            );
            break;
        }
    }
};
getGCD(12, 16);

/* 14. Write a JavaScript function to calculate the sum of values in an array.
Test data: getSumOfArray(array) // array = [1,2,3,4,5,6,7,8,9,10]
Expected Output : The sum of the array is 55. */

const arrayToSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getSumOfArray = (myArr) =>
    myArr.reduce((sum, element) => sum + element, 0);
console.log(getSumOfArray(arrayToSum));
