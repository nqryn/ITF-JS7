/**
 * Notes:
 * Be careful when using one-letter variable names: l, o, I, O are usually discouraged,
 * because they look very similar to 0 and 1.
 * 
 * if (something) { return true; } else { return false; }
 * something ? return true : return false
 * 
 * is equivalent to
 * return something;
 * 
 * 
 * When working with arrays, remember to check for BOUNDARIES !!
 * E.g. exercise with "get first n elements of an array" -> what if n > len(arr)??
 * Generally speaking: VALIDATE INPUT
 * 
 * 
 * PAY ATTENTION to problem statement:
 *      if it says "startsWith", don't use includes
 *      if it says "return something", don't `console.log` it; and viceversa
 *      etc.
 * 
 * You can test your own functions with multiple inputs
 * 
 */

/**
 * Talk about cloning (deep vs shallow)
 * 
 * Shallow copy (copie "superficiala"), adica daca avem obiecte, sau arrays,
 * NU facem unele noi, ci le "copiem" pe cele vechi, dar ca si referinta in memorie
 * 
 * Deep copy = copie "completa", adica fiecare element este "replicat" in clona
 */

function cloneArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i];
    }
    return newArr;
}
let myArr = [
    {
        name: "Adela",
        age: 31
    },
];
let myClonedArr = cloneArray(myArr);

// myClonedArr[0].name = "Iulia";
// myClonedArr[0].age = 30;
myClonedArr[0] = {
    name: "Iulia",
    age: 30
}

console.log("myArr is: ", myArr[0]);
console.log("myClonedArr is: ", myClonedArr[0]);

// cazul 2: clonam un array "simplu"

let simpleArr = [1, 2, 3];
let clonedSimpleArr = cloneArray(simpleArr);

clonedSimpleArr[2] = 7;
console.log("simpleArr is: ", simpleArr);
console.log("clonedSimpleArr is: ", clonedSimpleArr);


/**
 * Acelasi comportament il putem observa si cand asignam un obiect sau un array
 * unei alte variabile.
 */

let initialObj = {
    prop: "Ceva"
};

let clonedObj = initialObj; // aici nu se face o copiere propriu zisa, ci doar se transmite o referinta (o locatie in memorie)
clonedObj.prop = "Altceva";

console.log(initialObj, clonedObj);