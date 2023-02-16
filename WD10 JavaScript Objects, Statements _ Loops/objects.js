/**
 * Obiectele in JS sunt niste structuri de date de tip cheie-valoare,
 * care se pot asemana cu obiectele din viata reala.
 */

const cup = {
    color: "red",
    weight: 300,
    hasHandle: false,
    goodFor: ["coffee", "tea"]
};

// Ca sa accesam atributele obiectului (color, weight, etc.) folosim dot notation
console.log(cup.weight);
console.log(cup.color);

const trainer = new Object(); // declar un obiect gol
trainer.name = "Adela";
trainer.class = "WD";
trainer.age = 31;
trainer.isMale = false;

const student1 = {
    name: "Ionela",
    age: 32
}; 
const student2 = {
    name: "Mihai",
    age: 44
};
const student3 = {
    name: "George",
    age: 100
}

const student4 = {
    name: "Irina",
    age: 21
}

trainer.students = [student1, student2, student3, student4];
for (let i = 0; i < trainer.students.length; i++) {
    let trainerName = trainer.name,
    studentName = trainer.students[i].name;
    console.log(`${trainerName} este trainer pentru ${studentName}` );
}

// Task 4
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. Return the total number of legs of all the animals.

// Notes
// Don't forget to return the result.
// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.

// Example
// Input: [2, 3, 5]
// Expected Result: 36
// Input: [1, 2, 3]
// Expected Result: 22

// order: chickens, cows, pigs
let ferma1 = [2, 3, 5],
ferma2 = [1, 2, 3];

let animalsLegs = {
    chickens: 2,
    pigs: 4,
    cows: 4
};

let nrOfLegsF1 = 
    ferma1[0] * animalsLegs.chickens + 
    ferma1[1] * animalsLegs.cows + 
    ferma1[2] * animalsLegs.pigs;

let nrOfLegsF2 = 
    ferma2[0] * animalsLegs.chickens + 
    ferma2[1] * animalsLegs.cows + 
    ferma2[2] * animalsLegs.pigs;

console.log(nrOfLegsF1);
console.log(nrOfLegsF2);