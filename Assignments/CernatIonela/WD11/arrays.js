//Write a JavaScript function to clone an array.

function cloneArray(arr) {
  return arr.slice(0);
    };
console.log(cloneArray([1, 2, 4, 0]));


//Write a JavaScript function to get the last element of an array. 
//Passing a parameter 'n' will return the last 'n' elements of the array. 

function getLastElements(arr, n = 1) {
  const arr = [1, 2, 3, 4, 5];
  if (n === 1) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(Math.max(arr.length - n, 0));
  }
}
console.log(getLastElements(arr));

// Write a JavaScript function to sort the items of an array. 

function sortArray(items) {
  items.sort(); 
  return items;
}
const items = ["tea", "cappuccino", "coffee"];
const sortedItems = sortArray(items);

console.log(items);

//Write a JavaScript function to shuffle an array.

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//Write a JavaScript function to remove duplicate items from an array (ignore case sensitivity).

const arr = ["apple", "mango", "orange ", "mango", "mango"];
      
    function removeDuplicates(arr) {
        var unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
    console.log(removeDuplicates(arr));

