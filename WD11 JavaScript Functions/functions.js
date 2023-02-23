console.log("Inainte de functie");
function isLeapYear(year) {
    // aici sunt in interiorul functiei
    return year % 4 == 0 && year % 100 != 0;
}
console.log("Dupa functie");

console.log( isLeapYear(2018) );
console.log( isLeapYear(2000) );
console.log( isLeapYear(2020) );
console.log( isLeapYear(2024) );

console.log("Done");

/**
 * O functie este o bucata de cod, care are un nume (*) si pe care o putem apela
 * de cate ori dorim noi.
 * Aceasta poate avea parametrii de intrare (input), si poate returna un rezultat (output)
 * 
 * Scoping: functiile sunt speciale, in sensul ca orice variabila (fie let, const, var)
 * declarata in interiorul functiei exista DOAR IN INTERIORUL FUNCTIEI
 */

let alfa = 100;
function exampleFunction() {
    const x = "declared inside function"; // x can only be used in exampleFunction
    var a = "declared with var";
    console.log("Inside function");
    console.log(x);
    console.log(a);
    console.log(alfa);
}
  
// console.log(x); // Causes error
exampleFunction();

// console.log(a); // da eroare


