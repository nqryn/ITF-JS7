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

console.log("*******************WEIRD************************");
let reversedArr = [];
const rotateString = (yourString) => {
    let yourStringArr = yourString.split("");
    for (let i = yourString.length - 1; i >= 0; i--) {
        reversedArr.push(yourStringArr[i]);
    }
    yourString = reversedArr.join("");
    return yourString;
};
console.log(rotateString("ITFactory"));

/* 19. Write a JavaScript program to create a new string from a given string,
changing the position of first and last characters. The string’s length
must be greater than 1.
Test data: inverseString(“ITFactory”)
Expected Output : yTFactorI */

const inverseString = (theString) =>
    theString[theString.length - 1] +
    theString.slice(1, theString.length - 1) +
    theString[0];
console.log(inverseString("ITFactory"));

/* 20. Write a JavaScript program to create a new string from a given string,
taking the last 3 characters and adding them both at the front and back.
The string’s length must be greater than 3. Example: ITFactory =>
ITFITFactoryITF.
Test data: newString(“ITFactory”)
Expected Output : ITFITFactoryITF */

const newString = (aString) =>
    aString.slice(0, 3) + aString + aString.slice(0, 3);
console.log(newString("ITFactory"));

/* 21. Write a JavaScript program to check whether a string starts with 'Java'
and return true or false, accordingly.
Test data: checkString(“JavaScript”)
Expected Output : true */

const checkString = (toTest, tester) =>
    toTest.includes(tester) ? true : false;
console.log(checkString("JavaScript", "Java"));

/* 22. Write a JavaScript program to check whether a specified character
exists between the 2nd to 4th positions of a given string.
Test data: checkCharPos(“ITFactory”, a)
Expected Output: true */

const checkCharPos = (myStr, srchchar) => myStr.slice(3, 4).includes(srchchar);
console.log(checkCharPos("ITFactory", "a"));

/* 23. Write a JavaScript program to replace every character in a given string
with the character following it in the alphabet.
Test data: replaceChar(“ITFactory”)
Expected Output: JUGbdupsz */

const replaceChar = (givenStr) => {
    let modifiedStr = [];
    for (let i = 0; i < givenStr.length; i++) {
        let charCode = givenStr.charCodeAt(i);
        let newChar = String.fromCharCode(charCode + 1);
        modifiedStr.push(newChar);
    }
    let newStr = modifiedStr.join("");
    console.log(newStr);
};
replaceChar("ITFactory");

/* 24. Write a JavaScript program to capitalize the first letter of each word of a
given string.
Test data: capitalizeWords(“we are learning javascript”)
Expected Output: We Are Learning Javascript */

const capitalizeWords = (strToCap) => {
    let capArr = strToCap.split(" ");
    let upArr = [];
    capArr.forEach((element) => {
        upArr.push(element[0].toUpperCase() + element.slice(1, element.lenght));
    });
    let finalWords = upArr.join(" ");
    console.log(finalWords);
};
capitalizeWords("we are learning javascript");

/* 25. Write a JavaScript program to check whether the characters a and b are
separated by exactly 3 places anywhere (at least once) in a given string.
Test data: checkForAB(“asdbasded”)
Expected Output: true */

const checkForAB = (theGivenStr) =>
    theGivenStr[theGivenStr.indexOf("a") + 3] == "b" ? true : false;

console.log(checkForAB("asdbasded"));

/* 26. Write a JavaScript function to split a string and convert it into an array of
words.
Test data: convertStrToArr(“We Are Learning Javascript”)
Expected Output: [“We”, “Are”, “Learning”, “Javascript”] */

const convertStrToArr = (mySentence) =>
    console.log("We Are Learning Javascript".split(" "));
convertStrToArr("We Are Learning Javascript");

/* 27. Write a JavaScript function that takes a string which has lower and
upper case letters as a parameter and converts upper case letters to
lower case, and lowercase letters to uppercase.
Test data: uppLowString(“AbCdEfGh”)
Expected Output: aBcDeFgH */

const uppLowString = (myStr) => {
    let newStr = "";
    for (let i = 0; i < myStr.length; i++) {
        let myChar = myStr.charAt(i);
        if (myChar === myChar.toUpperCase()) {
            newStr += myChar.toLowerCase();
        } else {
            newStr += myChar.toUpperCase();
        }
    }
    return newStr;
};
console.log(uppLowString("AbCdEfGh"));

/* 28. Write a JavaScript function to convert a string into the camel case.
Test data: camelCaseStr(“first name”)
Expected Output: firstName */

const camelCaseStr = (normalStr) => {
    let camelArr = normalStr.split(" ");
    let camelCaseStr = camelArr[0];
    for (let i = 1; i < camelArr.length; i++) {
        camelCaseStr +=
            camelArr[i].charAt(0).toUpperCase() + camelArr[i].slice(1);
    }
    console.log(camelCaseStr);
};
camelCaseStr("his first name is Mike");

/* 29. Write a JavaScript function to convert a string into the snake case.
Test data: snakeCaseStr(“first name”)
Expected Output: first_name */

const snakeCaseStr = (normalStr) => {
    console.log(normalStr.replace(/\s/g, "_"));
};
snakeCaseStr("his first name is Mike");

/* 30. Write a JavaScript function to truncate a string if it is longer than the
specified number of characters. Truncated strings will end with a
translatable ellipsis sequence ("…") (by default) or specified characters.
Test data: truncateString(“We are learning JS”, 10)
Expected Output: We are lea…
We are lea… */

const truncateString = (myLastStr, n) =>
    console.log(myLastStr.slice(0, n) + "...");
truncateString("We are learning JS", 10);
