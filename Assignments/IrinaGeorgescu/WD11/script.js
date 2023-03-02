/* 1. Write a JavaScript function to display the current day and time in the following format. 
Test data: displayCurrentDay() 
Expected Output : Today is Tuesday. Current time is : 10:30:38 */

function displayCurrentDay() {
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[date.getDay()];
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const amOrPm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const dateTimeString = `Today is ${day}. Current time is : ${formattedHour}:${formattedMinutes}:${formattedSeconds} ${amOrPm}`;
    console.log(dateTimeString);
}

/* 2. Write a JavaScript function to get the current date. 
Test data: displayCurrentDay() 
Expected Output : dd-mm-yyyy OR dd/mm/yyyy */

function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const currentDate = `${day}-${month}-${year}`;
    return currentDate;
}

/* 3. Write a JavaScript function to get the number of days in a month. Test data: getNumberOfDays(2) 
Expected Output : March has 31 days.  */

/* 4. Write a JavaScript function to calculate days left until next Christmas. Test data: getDaysToChristmas() 
Expected Output : There are 145 days left until next Christmas. */

/* 5. Write a JavaScript function to find which 1st of January falls on a Sunday between the years 2014 and 2050. 
Test data: whichYear() 
Expected Output : The 1st of January falls on a Sunday, in the following years: 2022, 2035 and 2048. */

function whichYear() {
    let sunYears = []
    for (let year = 2014; year <= 2050; year++) {
        const date = new Date(year, 0, 1);
        if (date.getDay() === 0) {
            sunYears.push(year);
        }
    }
    console.log(`The 1st of January falls on a Sunday, in the following years: ${sunYears[0]}, ${sunYears[1]},
    ${sunYears[2]}, ${sunYears[3]} and ${sunYears[4]}.`);
}

/* 6. Write a JavaScript function to find the area of a square, where the length of its sides is a given number. 
Test data: calculateSquareArea(5) 
Expected Output : The area of the square is 25.  */

function calculateSquareArea(side) {
    let area = side * side;
    console.log(`The area of the square is ${area}.`)
}

/* 7. Write a JavaScript function to compute the sum of the two given integers. 
Test data: getSum(5, 10) 
Expected Output : The sum of 5 and 10 is 15. */

function getSum(x, y) {
    console.log(`The sum of ${x} and ${y} is ${x + y}.`)
}

/* 8. Write a JavaScript function to check two given numbers and return true if one of the numbers is 50 or if their sum is 50. 
Test data: checkNumbers(5, 50) 
Expected Output : true */

function checkNumbers(x, y) {
    if (x == 50 || y == 50 || x + y == 50) {
        return true
    }
}

/* (9) 11. Write a JavaScript function to format a number up to specified decimal places. 
Test data: formatNumber(28.12456 , 2) 
Expected Output : 28.12  */

function formatNumber(number, decimals) {
    return number.toFixed(decimals);
}

/* (10) 12. Write a JavaScript function to find the highest and the lowest values in an array of numbers. 
Test data: getHighLow(array) // array = [5, 12, 73 , 56 ,1 ,45 ,11] Expected Output : The highest number is 73 and the lowest number is 1. */

function getHighLow(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(`The highest number is ${max} and the lowest number is ${min}.`);
}

/* (11) 16. Write a JavaScript function to create a new string adding "IT" in front of a given string. If the given string begins with "IT" then return the original string. 
Test data: convertString(“Factory”) 
Expected Output : ITFactory  */

function addIT(str) {
    if (str.startsWith("IT")) {
        return str;
    }
    return `IT${str}`;
}

/* (12) 17. Write a JavaScript function to remove a character at the specified position of a given string and return the new string. 
Test data: removeChar(“ITFactory”, 1) 
Expected Output : IFactory */

function removeChar(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
}

/* (13) 21. Write a JavaScript program to check whether a string starts with 'Java' and return true or false, accordingly.
    Test data: checkString(“JavaScript”) 
    Expected Output : true */

function checkString(str) {
    return str.startsWith("Java");
}

/* (14) Write a JavaScript program to check whether a specified character exists between the 2nd to 4th positions of a given string. 
Test data: checkCharPos(“ITFactory”, a) 
Expected Output: true 
 */

function checkCharPos(str, char) {
    if (str.length >= 4) {
      let subStr = str.substring(1, 4);
      return subStr.includes(char);
    } else {
      return false;
    }
  }

/* (15) 24. Write a JavaScript program to capitalize the first letter of each word of a given string. 
Test data: capitalizeWords(“we are learning javascript”) 
Expected Output: We Are Learning Javascript */

function capitalizeWords(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(" ");
  }

  /* (16) 31. Write a JavaScript function to check whether an `input` is an array or not. */

  function isArray(input) {
    return Array.isArray(input);
  }

  /* (17) 35. Write a JavaScript function to join all elements of an array into a string. */

  //If the separator parameter is not provided, it defaults to a comma ,.
  
  function joinArray(arr, separator = ",") {
    return arr.join(separator);
  }

  /* (18) 36. Write a JavaScript function to sort the items of an array. */

  function sortArray(arr) {
    return arr.sort();
  }

  /* (19) 42. Write a JavaScript function to remove a specific element from an array. */

  function removeElement(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

 /* (20) 44. Write a JavaScript function to get a random item from an array.  */

 function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  let trainingObj = { 
    trainer: “Iulia”, 
    course: “HTML”, 
    duration: 30, 
    participants: [“Ross”, “Rachel”, “Phoebe”, “Monica”, “Joey”, “Chandler”], 
    isActive: true 
    } 

/* (21) 51. Write a JavaScript function to list the properties of the trainingObj object. */

function listProperties(obj) {
    for (let prop in obj) {
      console.log(prop);
    }
  }

/* (22) 52. Write a JavaScript function to add the startTime property to the trainingObj object and give it the value 19:00. */

function addProperty(obj, propName, propValue) {
    obj[propName] = propValue;
  }

addProperty(trainingObj, "startTime", "19:00");

/* (23) 53. Write a JavaScript function to add the endTime property to the trainingObj object and give it the value 21:00. */

addProperty(trainingObj, "endTime", "21:00");

/* (24) 54. Write a JavaScript function to add the day property to the trainingObj object and give it the value “Thursday”. */

addProperty(trainingObj, "day", "Thursday");

/* (25) 56. Write a JavaScript function to get the length of the trainingObj object.*/

function getObjectLength(obj) {
    return Object.keys(obj).length;
  }
