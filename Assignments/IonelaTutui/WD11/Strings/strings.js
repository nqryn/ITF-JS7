//16. Write a JavaScript function to create a new string adding "IT" in front of a given string.
// If the given string begins with "IT" then return the original string.
//Test data: convertString(“Factory”)
//Expected Output : ITFactory

let strN = "Factory";
(lett = "IT"), (newStr = []);
function addText() {
  if (strN.startsWith("IT")) {
    return strN;
  } else {
    return (newStr = lett + strN);
  }
  //strN.startsWith('IT')? strN: lett + strN;
}
console.log(addText(strN));

//17. Write a JavaScript function to remove a character at the specified position of a given string and return the new string.
//Test data: removeChar(“ITFactory”, 1)
//Expected Output : IFactory

function removeChar(txt, nr) {
  substringA = txt.substring(0, nr);
  substringB = txt.substring(nr + 1, txt.length);
  return substringA + substringB;
}
console.log(removeChar("ITFactory", 5));

//19. Write a JavaScript program to create a new string from a given string, changing the position of first and last characters. The string’s length must be greater than 1.
//Test data: inverseString(“ITFactory”)
//Expected Output : yTFactorI

function inverseString(str) {
  substrFront = str.substring(0, 1);
  substrMiddle = str.substring(1, str.length - 1);
  substrEnd = str.substring(str.length - 1, str.length);

  return substrEnd + substrMiddle + substrFront;
}
console.log(inverseString("ITFactory"));

//20. Write a JavaScript program to create a new string from a given string, taking the last 3 characters and
// adding them both at the front and back. The string’s length must be greater than 3.
//Example: ITFactory => ITFITFactoryITF.
//Test data: newString(“ITFactory”)
//Expected Output : ITFITFactoryITF

function addingText(someText) {
  substrLetters = someText.substring(0, 3);
  return substrLetters + someText + substrLetters;
}
console.log(addingText("ABCalabala"));

//21. Write a JavaScript program to check whether a string starts with 'Java' and return true or false, accordingly.
//Test data: checkString(“JavaScript”)
//Expected Output : true

let text = "JavaScript";
console.log(text.startsWith("Java"));
