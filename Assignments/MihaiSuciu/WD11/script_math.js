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

const convertBinToDec = myBin => parseInt(myBin, 2);
console.log(convertBinToDec(1011));


/* 10. Write a JavaScript function to generate a random integer.
Test data: getRandom()
Expected Output : 5 */

const getRandom = () => Math.random() * 10;
console.log(getRandom().toPrecision(1));

