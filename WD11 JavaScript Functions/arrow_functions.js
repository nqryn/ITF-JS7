/**
 * Arrow functions (functii sageata) sunt tot functii, dar cu o sintaxa mai speciala,
 * care nu necesita neaparat sa aiba un nume.
 * 
 * Toate sintaxele posibile sunt

param => expression

(param) => expression

(param1, paramN) => expression

param => {
  statements
}

(param1, paramN) => {
  statements
}

 * 
 */


/**
 * Aici, avem un singur input (numit param), si un singur output, 
 * executat printr-o singura expresie
 * Putem avea paranteze rotunde in jurul param, dar nu sunt obligatorii.
 * expression ne zice ceea ce va fi returnat, FARA a folosi cuvantul cheie return
param => expression

(param) => expression
 */

function square(x) {
    return x * x;
}

// Echivalent, in arrow functions, cu

const squareFn = x => x*x;

console.log(square(5), squareFn(5));

/**
 * Daca avem mai multi param de intrare, TREBUIE sa punem paranteze rotunde
 * (param1, paramN) => expression
 */

function multiply(x, y) {
    return x*y;
}

// echivalent cu

const multiplyFn = (x, y) => x*y;

console.log(multiply(7, 8), multiplyFn(7, 8));


/**
 * Daca nu vrem sa returnam nimic din arrow func SAU daca avem mai multe instructiuni
 * de executat, TREBUIE sa folosim curly brackets { } pentru a delimita corpul functiei
 * 
param => {
  statements
}

(param1, paramN) => {
  statements
}
 * 
 */

function task4Classic(inArr) {
    const outArr = [0, 0];

    for (const x of inArr) {
        if ( x > 0) {
            // numerele pozitive le numaram
            outArr[0] += 1;
        } else {
            // numerele negative le insumam
            outArr[1] += x;
        }
    }
    return outArr;
}

const task4 = inArr => {
    const outArr = [0, 0];

    for (const x of inArr) {
        if ( x > 0) {
            // numerele pozitive le numaram
            outArr[0] += 1;
        } else {
            // numerele negative le insumam
            outArr[1] += x;
        }
    }
    return outArr;
}

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(task4Classic(a));
console.log(task4(a));