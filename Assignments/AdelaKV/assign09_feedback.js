/**
 * Importante:
 * 
 * SPATII (sau formatare din VS code)
 * Sa intelegem codul
 * Sa scriem intai logica, si apoi codul (pseudocod)
 */

/**
 * if (ceva) { console.log(true) } else { console.log(false) }
 * poate fi scris pur si simplu 
 * console.log(ceva)
 */
let a = 22, b = 15;
if ( a+b < 100 ) {
    console.log(true);
} else {
    console.log(false);
}
//echivalent cu
console.log(a+b < 100);

/**
 * Putem folosi accesarea prin index pe mai multe nivele, atat pentru arrays,
 * cat si pentru strings.
 * Functii precum slice, splice, charAt ar trebui folosite doar cand avem de
 * a face cu preluarea/modificarea mai multor elemente/etc.
 */
let names = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"];
// prima litera din primul nume
console.log(names[0][0]);
// a doua litera din primul nume
console.log(names[0][1]);

// putem avea array de array (matrice)
let arrDeArr = [
    ["unu", "doi"],
    ["trei", "patru"],
    ["cinci", "sase"]
];
console.log(arrDeArr[0]); // ["unu", "doi"]
console.log(arrDeArr[0][1]); //"doi"
console.log(arrDeArr[0][1][2]); // "i"

/**
 * Functia sort NU are nevoie neaparat de un parametru.
 * IMPORTANT: nu dam variabilelor nume care sunt cuvinte cheie (e.g. number)
 */
const numbers = [22, 81, 33, 14, 52]; 
let m = numbers.sort(compareFunction);
function compareFunction (a, b) {
    return a-b;
}
// este echivalent cu
let n = numbers.sort();
console.log(m == n);


// Task 5
// Return both the minimum and maximum numbers, of a given Array in that order.

// Example
// Input: [1, 2, 3, 4, 5]
// Expected Result: [1,5]
// Input: [22, 81, 33, 14, 52]
// Expected Result: [14,81]

// important: putem face totul dintr-o parcurgere; trebuie sa avem grija la val initiala

// PSEUDOCOD
// CUM gasesc eu, ca om, minimul dintr-un sir de numere?
/**
 * Le compar unul cu altul, incep cu primul, si il compar cu al doilea,
 * apoi al treilea, si pana la final.
 * [22, 81, 33, 14, 52]
 * Iau primul numar: 22 -> presupun ca el este min
 * Trec la al doilea numar: 22 > 81 ?? nu, deci trec la urmatorul
 * Nr curent este 33: 22 > 33 ?? nu, deci trec la urmatorul
 * Nr curent este 14: 22 > 14 ?? DA, deci minimul meu devine 14
 * Nr curent este 52: 14 > 52 ?? nu, deci trec la urmatorul
 * Oups, nu mai am numere
 * Rezultat final: nr minim este 14.
 */
let myArr = [22, 81, 33, 14, 52];
// pentru initializare, e IMPORTANT sa luam o valoare din array
let myMin = myArr[0]; // initializez minimul cu primaa valoare
let myMax = myArr[myArr.length - 1]; // putem lua indexul 0, sau ultima valoare, nu conteaza 
for (let i = 0; i < myArr.length; i++) {
    // myArr[i] este numarul curent (iteratia curenta)
    if (myMin > myArr[i]) {
        myMin = myArr[i]; // am descoperit un numar mai mic, deci suprascriu myMin
    } 
    if (myMax < myArr[i]) {
        myMax = myArr[i];
    }
}
// afisez rezultatul
console.log(myMin);
console.log(myMax);


// Task 8
// Return true if the first array is a subset of the second. Return false otherwise.

// Example
// Input: [3, 2, 5], [5, 3, 7, 9, 2]
// Expected Result: true
// Input: [1, 2], [3, 5, 9, 1]
// Expected Result: false

// important: trebuie verificat fiecare element daca exista in al doilea arr

// PSEUDOCOD
// Luam primul element din primul array:
//  se gaseste in al doilea array ? DA, trecem la urmatorul
// Luam al 2lea elem din 1 arr:
//  se gaseste in al doilea array ? NU, inseamna ca NU e subset 
// Pentru a vedea daca un elem exista intr-un array, folosim `includes`

let arr1 = [3, 2, 5], 
arr2 = [5, 3, 7, 9, 2];
let isSubset = true;
for (let i = 0; i < arr1.length; i++) {
    // daca NU include elementul (vezi operatul de negatie)
    let isInArray2 = arr2.includes(arr1[i]);
    if (!isInArray2) {
        // atunci NU e subset
        isSubset = false;
    }
    
    // echivalent cu 
    // if (arr2.includes(arr1[i])) {

    // } else {
    //     isSubset = false;
    // }
}

// afisez rezultatul
console.log(isSubset);

