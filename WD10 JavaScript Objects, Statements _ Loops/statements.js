/**
 * Operatorul ternar e un IF-ELSE mai smecher, care se scrie pe o singura linie
 * si se foloseste la instructiuni simple
 * Sintaxa este:
 * conditie ? fa ceva daca da : fa ceva daca nu
 * 
 */

let age = 14;
if (age > 18) {
    console.log("Major");
} else {
    console.log("Minor");
}
age > 18 ? console.log("Major") : console.log("Minor");

/**
 * Switch:
 * o instructiune care ne permite sa mergem pe mai multe ramuri, in functie de o anumite valoare
 */

let a = 14, b = 100;
let operation = "-";

switch (operation) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "/":
        console.log(a / b);
        break;
    case "*":
        console.log(a * b);
        break;
    default:
        console.log("Operatia nu exista");
}


