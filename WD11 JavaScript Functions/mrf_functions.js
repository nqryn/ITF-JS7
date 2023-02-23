/**
 * Functiile pot avea ca si parametru de intrare orice: string, number, bool, object, array, function
 * Functiile pot returna orice: string, number, bool, object, array, function
 * 
 * Exista niste functii speciale, care primesc ca parametrii alte functii si actioneaza pe arrays
 * Map - mapeaza fiecare element al unui array, 
 *  aplicand functia primita ca si parametru pe aceste elemente, 
 *  si returnand un nou array, cu noile elemente
 * Reduce - next time
 * Filter - primeste o functie care trebuie sa returneze un boolean (true/false)
 *  in functie de elementul curent al array-ului, si filtreaza acele elemente
 *  pentru care rezulatul este false.
 */

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function add1(x) {
    return x + 1;
}
const res = a.map(add1);

console.log(a);
console.log(res);

const squares = a.map(cartof => cartof*cartof);
console.log(squares);

// Filter
function isPositive(nr) {
    return nr > 0;
}
const positiveNrs = a.filter(isPositive);
console.log(positiveNrs);

// Numere pare
const evenNrs = a.filter(nr => nr % 2 == 0);
console.log(evenNrs);