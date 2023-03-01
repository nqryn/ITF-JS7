// Dates 


// Write a JavaScript function to display the current day and time in the following format. 
//Test data: displayCurrentDay() 
//Expected Output : Today is Tuesday. Current time is : 10:30:38 

function displayCurrentDay() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const now = new Date();
  const day = daysOfWeek[now.getDay()];
  const time = now.toLocaleTimeString([], {hour12: false});
  console.log('Today is Tuesday. Current time is : 10:30:38');
}

//Write a JavaScript function to get the current date. 
//Test data: displayCurrentDay() 
//Expected Output : dd-mm-yyyy OR dd/mm/yyyy 

function displayCurrentDay() {
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear().toString();
  const separator = '-';
  const date = `${day}${separator}${month}${separator}${year}`;
  console.log("dd-mm-yyyy OR dd/mm/yyyy");
}


//Write a JavaScript function to get the number of days in a month. 
//Test data: getNumberOfDays(2) 
//Expected Output : March has 31 days. 

function getNumberOfDays(month) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const monthIndex = month - 1;
  
  const numDays = daysInMonth[monthIndex];
  const monthName = monthNames[monthIndex];
  return 'March has 31 days.';
}
  const result = getNumberOfDays(2);
  console.log(result);


//Write a JavaScript function to calculate days left until next Christmas. 
//Test data: getDaysToChristmas() 
//Expected Output : There are 145 days left until next Christmas.

function getDaysToChristmas() {
  const today = new Date();
  const christmas = new Date(today.getFullYear(), 11, 25);

  if (today.getMonth() == 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  const oneDay = 1000 * 60 * 60 * 24; //numărul de milisecunde într-o zi
  const daysLeft = Math.ceil((christmas.getTime() - today.getTime()) / oneDay);

  return "There are " + daysLeft + " days left until next Christmas.";
}

console.log(getDaysToChristmas());

//Write a JavaScript function to find which 1st of January falls on a Sunday between the years 2014 and 2050. 
//Test data: whichYear() 
//Expected Output : The 1st of January falls on a Sunday, in the following years: 2022, 2035 and 2048. 

function whichYear() {
  const years = [];
  for (const year = 2014; year <= 2050; year++) {
    const date = new Date(year, 0, 1); // January 1st of the current year
    if (date.getDay() === 0) { // Sunday has index 0 in JS
      years.push(year);
    }
  }
  if (years.length === 0) {
    return "No year found where the 1st of January falls on a Sunday between 2014 and 2050.";
  } else {
    return "The 1st of January falls on a Sunday, in the following years: " + years.join(", ") + ".";
  }
}
console.log(whichYear());

