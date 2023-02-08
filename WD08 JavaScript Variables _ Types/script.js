console.log("Hello, world!");

console.log("Acesta este un fisier JavaScript, care nu are nici o legatura cu Java!");

/**
 * Acesta este un comentariu multi-line (Adica pe mai multe linii)
 * Comentariile sunt bucati de cod care nu se executa, si exista doar
 * pentru a explica/documenta codul sau a scrie informatii importante despre ce se intampla.
 */

// Acesta este un comentariu pe o singura linie
// Adica la fiecare linie unde 

/* 
Merge si asa, dar versiunea de mai sus este cea "standardizata", deoarece arata frumos.
Stil.
*/

/**
 * JavaScript Variables
 * Declarare
 * let - cuvant cheie prin care declaram o variabila, acesta ar trebui (aproape) mereu folosit
 * const - asa declaram o constanta, adica ceva care isi pastreaza mereu aceeasi valoare.
 * var - prin acest cuvant cheie se declarau mai demult si constantele si variabilele, dar e mai ok sa
 *      nu-l folositi in epoca curenta, deoarece are anumite dezavantaje.
 */

// Asignare - declaram variabila, adica ii dam un nume (x) si ii dam si o valoare
let x = 100;
// Aici doar declaram o variabila, DAR nu ii dam inca valoare.
let y;
console.log(x);

// Reasignare - adica ii dam o alta valoare variabilei noastre
x = 50;
y = 1991;
console.log(x, y);

/**
 * Nume de varibile:
 * sunt permise litere mari, litere mici, numere, si underscore
 * Ca si regula generala, JS foloseste camelCase (ex. yearOfBirth = 1991)
 * adicaPunemLiteraMareLaFiecareCuvantNou
 * Numele de var trebuie sa fie sugestive, gen numberOfPlayers in loc de x
 * Se accepta si nume scurte (o litera) in cazuri exceptionale
 */

let numberOfPlayers = 5;

// Constante
const c1 = 1234;
console.log(c1);

// Aici va da eroare, iar codul se opreste din executie (de aceea e comentat)
// c1 = 5678;


/**
 * Tipuri de variabile:
 * number - numar intreg sau cu virgula, ca la matematica
 */

let nrIntreg = 123,
    nrZecimal = 45.67;
console.log(nrIntreg, typeof(nrIntreg));
console.log(nrZecimal, typeof(nrZecimal));

// Putem face toate operatiile matematice cunoscute cu numere
let a = 18, b = 5;
console.log("Numerele mele sunt: ", a, b);
console.log("Suma: ", a + b);
console.log("Diff: ", a - b);
console.log("Inmultire (steluta): ", a * b);
console.log("Impartirea: ", a / b);
console.log("Modulo (restul): ", a % b);

// Operatori "compusi"
let c = a + b;
console.log("c: ", c);

a += b; // adunam valoarea lui b direct in a, echivalent cu "a = a + b"
console.log("a: ", a);
a -= b;
console.log("a: ", a);


/**
 * Tipuri de variabile
 * string (sir de caractere) - orice punem intre ghilimele este un sir de caractere
 */

let s1 = 'Adela Neacsu';
let s2 = "Putem folosi si ghilimele duble, si simple. DAR trebuie sa folosim peste tot la fel.";
// s3 este STRING, nu number, pentru ca are ghilimele
let s3 = "100";

console.log(s1, s2);
console.log(s3, typeof(s3));

// Putem "accesa" fiecare caracter dintr-un sir de caractere prin INDEXUL lui din sir
// Indecsii in programare incep de obicei de la 0
console.log(s1[0]);
console.log(s1[1]);
console.log(s1[2]);
console.log(s1[3]);
console.log(s1[4]);
console.log(s1[5]);
console.log(s1[6]);

// Putem lua valorile caracterelor de pe anumite pozitii si cu metoda charAt
console.log( s1.charAt(0) );

// O alta proprietate importanta pe stringuri este length (nu este o metoda, ci un atribut)
console.log( s1.length );

// Trebuie tinut cont de faptul ca ultimul caracter intr-un string va fi length - 1
console.log( s1[11] );
console.log( s1[12] ); // aici vom primi o valoare speciala, numita "undefined"

/**
 * Metode pe stringuri:
 * replace('text initial', 'text cu care inlocuim')
 * toUpperCase()
 * slice(de la?, pana la?) - IMPORTANT:  pana la e optional
 * split(separator?) - sparge stringul in mai multe stringuri mici, 
 *                      separate de ce vrem noi
 * includes(substr) - ne zice daca stringul original contine substringul nostru
 */

// Metodele sunt de 2 tipuri: care modifica stringul initial, si care il lasa in pace dar returneaza un NOU string
console.log(s1.replace('Adela', 'Maria'));
console.log(s1);

const sMaria = s1.replace('Adela', 'Maria');
console.log(sMaria);
console.log(sMaria);
console.log(s1);

console.log(sMaria.toUpperCase());
console.log(sMaria.toLowerCase());


const str = 'The quick brown fox jumps over the lazy dog.';
console.log( str.slice(10) ); // Adica da-mi toate caracterele de la al 10 lea pana la final
console.log( str.slice(3, 18) ); // Da-mi caracterele de la 3 la 8
console.log(str); // Stringul original nu se modifica!

// aici vom obtine un Array (un fel de lista), si fiecare element va fi un cuvant din sirul original
console.log( str.split(' ') ); 

// includes returneaza true/false
console.log( str.includes('brown') );
console.log( str.includes('Brown') );
console.log( str.includes('black') );

// Putem aduna stringurile
let sx = s1 + ' ' + sMaria + ' putem aduna oricate siruri vrem noi :D ';
console.log(sx);


/**
 * Schimbarea tipului variabilei:
 * number -> string folosim toString()
 * string -> number folosim parseInt()
 */

let n2s = 12345,
s2n = "67890";

console.log(n2s, typeof(n2s));
console.log(s2n, typeof(s2n));

console.log( n2s.toString() );
console.log(n2s, typeof(n2s));

n2s = n2s.toString();
console.log(n2s, typeof(n2s));

s2n = parseInt(s2n);
console.log(s2n, typeof(s2n));

/**
 * Variabile boolean (true/false)
 * Operatori logici: AND / OR / NOT
 * AND: &&
 * OR: ||
 * NOT: !
 */

let bool1 = true, bool2 = false;

console.log('true AND false', bool1 && bool2); // AND
console.log('true OR false', bool1 || bool2); // OR
console.log('NOT true', !bool1);

/**
 * Operatori de comparatie
 * Egal: == sau ===
 * Diferit: != SAU !==
 * Mai mic, mare, etc: >  <  >=  <= 
 */
let nr1 = 12, nr2 = 7, str1 = "7";
console.log("Egale?", nr1 == nr2);
console.log("Egal string cu numar?", nr2 == str1);
console.log("SIGUR egal string cu numar?", nr2 === str1);

let xUndefined,
yNull = null;

console.log(xUndefined, yNull);