// Task 1
// Given a 5x5 2D array, return true if it has at least one Bingo, and false if it doesn't.

// Notes:
// Only check for diagnols, horizontals and verticals.

// Example:
// Input: [
//   [45, "x", 31, 74, 87],
//   [64, "x", 47, 32, 90],
//   [37, "x", 68, 83, 54],
//   [67, "x", 98, 39, 44],
//   [21, "x", 24, 30, 52]
// ]
// Expected Result: true
// Input: [
//   [45, "x", 31, 74, 87],
//   [64, 78, 47, "x", 90],
//   [37, "x", 68, 83, 54],
//   [67, "x", 98, "x", 44],
//   [21, "x", 24, 30, 52]
// ]
// Expected Result: false

/* let myBingoArr = [
  [45, "x", 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, 39, 44],
  [21, "x", 24, 30, 52]
];
flag1 = true;
flag2 = true;
flag3 = false;
flag4 = false;
//diagonala principala
for (let i = 0; i < myBingoArr.length; i++) {
  if (myBingoArr[i][i] !== "x") {
    flag1 = false;
    break;
  }
}
//diagonala secundara
for (let i = 0; i < myBingoArr.length; i++) {
  if (myBingoArr[i][myBingoArr.length - i - 1] !== "x") {
    flag2 = false;
    break;
  }
}
//linie
for (let i = 0; i < myBingoArr.length; i++) {
  for (let j = 0; j < myBingoArr[i].length; j++) {
    if (myBingoArr[i][j] == "x") {
      flag3 = true;
    } else {
      flag3 = false;
      break;
    }
  }
  if (flag3 == true) {
    break;
  }
}
//coloana
for (let i = 0; i < myBingoArr.length; i++) {
  for (let j = 0; j < myBingoArr[i].length; j++) {
    if (myBingoArr[j][i] == "x") {
      flag4 = true;
    } else {
      flag4 = false;
      break;
    }
  }
  if (flag4 == true) {
    break;
  }
}
flag1 || flag2 || flag3 || flag4 ? console.log(true) : console.log(false); */
//Complexitate Task 1: O(n^2)

// Task 2
// When a person receives a blood transfusion, it is essential to make sure that the donor's blood type is compatible with the receiver's blood type.
// Receiving a blood type that is not compatible with your own can be life-threating, so blood banks always make sure to note the type of blood they
// receive from donors so that they can ensure a safe transfusion.
// Blood types are named according to three factors: presence of antigen A, presence of antigen B, and presence of Rh factor.
// If antigen A is found, the blood type includes the letter "A". If antigen B is found, the blood type includes the letter "B".
// And if the Rh factor is present, the blood type ends with "+"; otherwise, it ends with "-". If neither antigen A nor antigen B are found,
// the blood type includes the letter "O".
// For example, a person with only antigen A would have the blood type "A-".
// A person with both antigens A and B and the Rh factor would have blood type "AB+", and a person wih only the Rh factor would have blood type "O+".
// The rules for giving and receiving blood are as follows:
// - A person with antigen A may only give blood to another person with antigen A.
// - A person with antigen B may only give blood to another person with antigen B.
// - A person with the Rh factor may only give blood to another person with the Rh factor.
// - A person with none of the above factors (O-) can give blood to anyone.
// Given a donor's and receiver's blood types as strings, return whether or not the donor can safely give blood to the receiver,
// according to the rules above.

// Notes: The nurses can input blood types as o+ or O-. Make sure you include all possible cases.

// Example:
// Input: "O+", "A+"
// Expected Result: true
// Input:("A-", "B-")
// Expected Result: false
// Input: ("A-", "AB+")
// Expected Result: true

/* let bloodToCheckArr = prompt("Enter the donor's and the receiver's blood types(O+,A+):").toUpperCase().split(",");
let donorArr = bloodToCheckArr[0].split("");
let receiverArr = bloodToCheckArr[1].split("");
if(bloodToCheckArr[0][0]==bloodToCheckArr[1][0] || bloodToCheckArr[0][0]==bloodToCheckArr[1][1] || bloodToCheckArr[0][0]=="O" || (bloodToCheckArr[0][0]==bloodToCheckArr[1][0] && bloodToCheckArr[0][1]==bloodToCheckArr[1][1])){
    console.log(true);
} else {
    console.log(false);
} */
//Complexitate Task 2: O(n) pt ca split("")

// Task 3
// Given a string s consisting from digits and #, translate s to English lowercase characters as follows:
// Characters ("a" to "i") are represented by ("1" to "9").
// Characters ("j" to "z") are represented by ("10#" to "26#").

// Example:
// Input: "10#11#12"
// Expected Result: "jkab"
// Input: "1326#"
// Expected Result: "acz"
// Input: "25#"
// Expected Result: y

/* const lettersMap = new Map();
lettersMap.set("0", "-");
lettersMap.set("1", "a");
lettersMap.set("2", "b");
lettersMap.set("3", "c");
lettersMap.set("4", "d");
lettersMap.set("5", "e");
lettersMap.set("6", "f");
lettersMap.set("7", "g");
lettersMap.set("8", "h");
lettersMap.set("9", "i");
lettersMap.set("10#", "j");
lettersMap.set("11#", "k");
lettersMap.set("12#", "l");
lettersMap.set("13#", "m");
lettersMap.set("14#", "n");
lettersMap.set("15#", "o");
lettersMap.set("16#", "p");
lettersMap.set("17#", "q");
lettersMap.set("18#", "r");
lettersMap.set("19#", "s");
lettersMap.set("20#", "t");
lettersMap.set("21#", "u");
lettersMap.set("22#", "v");
lettersMap.set("23#", "w");
lettersMap.set("24#", "x");
lettersMap.set("25#", "y");
lettersMap.set("26#", "z");

const myInput = "10#11#12";
let myWord = "";
let mySequence = "";

for (let i = 0; i < myInput.length; i++) {
  character = myInput[i].toString();
  if (character == "#") {
    mySequence = myInput.slice(i - 2, i) + "#";
    myWord = myWord.slice(0, myWord.length - 2);
    letter = lettersMap.get(mySequence);
    myWord += letter;
  } else {
    letter = lettersMap.get(character);
    myWord += letter;
  }
}
console.log("cuvant: ", myWord); */
//Complexitate Task 3: O(n^2)

// Task 4
// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
// You must provide the correct change to each customer so that the net transaction is that the customer pays $5.
// Return true if and only if you can provide every customer with correct change.

// Notes:
// You don't have any change in hand at first.
// bills is an integer array.
// bills[i] will be either 5, 10, or 20.

// Example:
// Input: [5, 5, 5, 10, 20]
// Expected Result: true
// Input: [5, 5, 10, 10, 20]
// Expected Result: false
// Input: [10, 10]
// Expected Result: false

/* const bills = [5, 5, 10, 10, 20];
const price = 5;
const bank = new Map();
let change = 0;
let amount = 0;
let flag = true;

bills.forEach((element) => {
  change = element - 5;
  if (change <= amount) {
    if (element == 5) {
      if (bank.has(5)) {
        bank.set(5, bank.get(5) + 1);
        amount += 5;
      } else {
        bank.set(5, 1);
        amount += 5;
      }
    } else if (element == 10) {
      if (bank.get(5)>=1) {
        bank.set(5, bank.get(5) - 1);
        if (bank.has(10)) {
          bank.set(10, bank.get(10) + 1);
          amount += 5;
        } else {
          bank.set(10, 1);
          amount += 5;
        }
      } else {
        flag = false;
      }
    } else if (element == 20) {
      if (bank.get(10)>0 && bank.get(5)>0) {
        bank.set(5, bank.get(5) - 1);
        bank.set(10, bank.get(10) - 1);
        if (bank.has(20)) {
          bank.set(20, bank.get(20) + 1);
          amount += 5;
        } else {
          bank.set(20, 1);
          amount += 5;
        }
      } else if (bank.get(10)<=0 && bank.get(5)>=3){
        bank.set(5, bank.get(5) - 3);
        if (bank.has(20)) {
          bank.set(20, bank.get(20) + 1);
          amount += 5;
        } else {
          bank.set(20, 1);
          amount += 5;
        }
      } else {
        flag=false;
      }
    }
  } else {
    flag = false;
  }
});
console.log(flag); */
//Complexitate Task 4: O(n) | get, set, has sunt O(1) pt ca in spate avem HashTable

// Task 5
// Take an array and return the most frequently occurring element contained within it.

// Example:
// Input: [3, 7, 3]
// Expected Result: 3
// Input: [null, "hello", true, null]
// Expected Result: null
// Input: [false, "up", "down", "left", "right", true, false]
// Expected Result: false

let elementsArr = [false, "up", "down", "left", "right", true, false];
const elementsMap = new Map();

elementsArr.forEach((element) => {
  if (!elementsMap.has(element)) {
    elementsMap.set(element, 1);
  } else {
    elementsMap.set(element, elementsMap.get(element) + 1);
  }
});
console.log(elementsMap);
let maxValue=0;
let maxKey=0;
for(const[key, value] of elementsMap){
  if(maxValue<value){
    maxValue = value;
    maxKey=key;
  }
}
console.log(maxKey," : ",maxValue);
//Complexitate Task 5: O(n)