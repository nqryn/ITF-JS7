/**
 * Date - este un obiect Javascript care face tot ce avem nevoie legat de data si ora
 * new Date() - primim data si ora la momentul curent
 */

const now = new Date();
console.log(typeof now); // obiect de tipul Date

// Putem lua fiecare componenta din obiectul Date : ziua, ora, minutul, etc.
console.log(now.getDate()); // ne da ziua din luna (astazi este 9)
console.log(now.getMinutes());

const birtdate = new Date();
birtdate.setFullYear(1991);
birtdate.setDate(19);
birtdate.setMonth(5); // 5 este iunie, deoarece lunile incep de la 0

// Nu va afisa varsta corecta DECAT daca am avut deja ziua de nastere anul curent
console.log(`Varsta mea este ${now.getFullYear() - birtdate.getFullYear()}`);

// Logica completa:
// Daca luna curenta este STRICT mai mica decat luna nasterii -> Scadem 1 din varsta totala
// Daca luna curenta este egala cu luna nasterii SI 
    // ziua curenta este mai mica decat ziua nasterii -> Scadem 1
const currentMonth = now.getMonth(),
    currentDay = now.getDate(),
    birthMonth = birtdate.getMonth(),
    birthDay = birtdate.getDate();

// age va fi 32, adica se presupune ca deja am avut o aniversare anul acesta
let age = now.getFullYear() - birtdate.getFullYear();

// Folosind if, determin daca trebuie sa scadem 1 din age, ca sa obtinem varsta corecta!
if (currentMonth < birthMonth) {
    age -= 1;
}
if (currentMonth == birthMonth && currentDay < birthDay) {
    age -= 1;
}
// Gata algoritmul, acum pot fi sigura ca am varsta corecta!
console.log(`Varsta mea CORECTA este ${age}`);


/**
 * IF - ELSE
 * Este o structura de control a codului, prin care putem face lucruri diferite, in 
 * functie de anumite conditii (boolean).
 * DACA (conditie) { fa asta }
 * ALTFEL { fa altceva }
 */

const valoare = 1000000000;

if (valoare > 1000000) {
    console.log('Esti milionar!!!');
} else {
    console.log('Esti sarac!');
}