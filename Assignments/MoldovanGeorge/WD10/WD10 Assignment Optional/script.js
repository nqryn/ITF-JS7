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



// Task 5
// Take an array and return the most frequently occurring element contained within it.

// Example:
// Input: [3, 7, 3]
// Expected Result: 3
// Input: [null, "hello", true, null]
// Expected Result: null
// Input: [false, "up", "down", "left", "right", true, false]
// Expected Result: false