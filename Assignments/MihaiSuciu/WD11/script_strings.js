/* 16. Write a JavaScript function to create a new string adding "IT" in front of
a given string. If the given string begins with "IT" then return the original
string.
Test data: convertString(“Factory”)
Expected Output : ITFactory */

const convertString = (myString) =>
    myString.slice(0, 2) == "IT" ? myString : "IT" + myString;
console.log(convertString("Factory"));


/* 17. Write a JavaScript function to remove a character at the specified
position of a given string and return the new string.
Test data: removeChar(“ITFactory”, 1)
Expected Output : IFactory */

const removeChar = (myString, myIndex) =>
    myString.substring(0, myIndex) +
    myString.substring(myIndex + 1, myString.length);
console.log(removeChar("ITFactory", 1));


/* 18. Write a JavaScript function to rotate the string 'ITFactory', in the right
direction by periodically removing one letter from the end of the string
and attaching it to the front.
Test data: rotateString(“ITFactory”)
Expected Output : yrotcaFTI */

console.log('*******************WEIRD************************');
let yourString = "ITFactory";
let reversedArr = [];
const rotateString = yourString => {
    let yourStringArr = yourString.split('');
    for(let i=yourString.length-1; i>=0; i--){
        reversedArr.push(yourStringArr[i]);
    }
    yourString = reversedArr.join("");
    return yourString;
}
console.log(rotateString(yourString));


/* 19. Write a JavaScript program to create a new string from a given string,
changing the position of first and last characters. The string’s length
must be greater than 1.
Test data: inverseString(“ITFactory”)
Expected Output : yTFactorI */

let theString = 'ITFactory';
const inverseString = theString => theString[theString.length-1]+theString.slice(1,theString.length-1)+theString[0];
console.log(inverseString(theString));


/* 20. Write a JavaScript program to create a new string from a given string,
taking the last 3 characters and adding them both at the front and back.
The string’s length must be greater than 3. Example: ITFactory =>
ITFITFactoryITF.
Test data: newString(“ITFactory”)
Expected Output : ITFITFactoryITF */

const aString = 'ITFactory';
const newString = aString => aString.slice(0,3)+aString+aString.slice(0,3);
console.log(newString(aString));


/* 21. Write a JavaScript program to check whether a string starts with 'Java'
and return true or false, accordingly.
Test data: checkString(“JavaScript”)
Expected Output : true */

const toTest = 'JavaScript';
const tester = 'Java';
const checkString = (toTest, tester) => toTest.includes(tester) ? true : false;
console.log(checkString(toTest, tester));

