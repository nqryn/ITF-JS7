//31. Write a JavaScript function to check whether an `input` is an array or not.

let something = ["ITFactory", "altceva"];

function isArr(something) {
  if (toString.call(something) === "[object Array]") return true;
  else {
    return false;
  }
}
console.log(isArr(something));

//32. Write a JavaScript function to clone an array.

let arrInitial = ["ceva", "253", "altceva"];
arrClonat = [];
const cloneArr = (arrClonat) => arrInitial.slice();

//function cloneArr(arrInitial) {
// return (arrClonat = arrInitial.slice());
//}
console.log(arrInitial);
console.log(cloneArr(arrInitial));

//35. Write a JavaScript function to join all elements of an array into a string.

let arr = ["Ana", "are", "mere"],
  arrTransformat;
const arrTostr = (arrTransformat) => arr.toString();
console.log(arrTostr(arr));

// 36. Write a JavaScript function to sort the items of an array.

let arrNew = [7, 3, 8],
  arrSort = [];
const saSortam = (arrSort) => arrNew.sort();
console.log(saSortam(arrNew));

//43. Write a JavaScript function to check if an array contains a specific element.

function contine(arrXX, elem) {
  for (let i = 0; i < arrXX.length; i++) {
    // arrXX[i] === elem ? true : false;
    if (arrXX[i] === elem) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(contine(arrXX, "7"));
