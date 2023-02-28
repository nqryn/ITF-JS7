// 1. Write a JavaScript function to display the current day and time in the following format.
//Test data: displayCurrentDay()
//Expected Output : Today is Tuesday. Current time is : 10:30:38

let currentDate = new Date();

function displayCurrentDay() {
  let nameOfDay = currentDate.toLocaleString("default", { weekday: "long" });
  time = currentDate.toLocaleTimeString();
  return ` Today is ${nameOfDay}. Current time is ${time}`;
}
console.log(displayCurrentDay());

// 2. Write a JavaScript function to get the current date.
//Test data: displayCurrentDay()
//Expected Output : dd-mm-yyyy OR dd/mm/yyyy

function displayCurrentDaySecond() {
  let onlyDate = currentDate.getDate(),
    onlyMonth = currentDate.getMonth(),
    onlyYear = currentDate.getFullYear();
  return ` ${onlyDate}/${onlyMonth + 1}/${onlyYear}`;
}
console.log(displayCurrentDaySecond());

// 3.Write a JavaScript function to get the number of days in a month. Test data: getNumberOfDays(2)
//Expected Output : March has 31 days.

function getNumberOfDays() {
  let month = currentDate.getMonth();
  nameOfMonth = currentDate.toLocaleString("default", { month: "long" });
  switch (month) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      console.log(`${nameOfMonth} has 31`);
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      console.log(`${nameOfMonth} has 30`);
      break;
    case 1:
      const isLeapYear =
        currentDate.getFullYear % 4 == 0 && currentDate.getFullYear % 100 != 0;
      console.log(
        isLeapYear ? `${nameOfMonth} has 29` : `${nameOfMonth} has 28`
      );
      break;
  }
}

console.log(getNumberOfDays()); // undefined

// 4. Write a JavaScript function to calculate days left until next Christmas. Test data: getDaysToChristmas()
//Expected Output : There are 145 days left until next Christmas.

let today = new Date();
let ziCraciun = new Date(today.getFullYear(), 11, 25);
function getDaysToChristmas() {
  if (today.getMonth() == 11 && today.getDate() > 25) {
    ziCraciun.setFullYear(ziCraciun.getFullYear() + 1);
  }
  let one_day = 1000 * 60 * 60 * 24,
    zilePanaLaCraciun = Math.ceil(
      (ziCraciun.getTime() - today.getTime()) / one_day
    );
  return `There are ${zilePanaLaCraciun} days left until next Christmas`;
}
console.log(getDaysToChristmas());

//5. Write a JavaScript function to find which 1st of January falls on a Sunday between the years 2014 and 2050.
//Test data: whichYear()
//Expected Output : The 1st of January falls on a Sunday, in the following years: 2022, 2035 and 2048.

function whichYear() {
  let year,
    yearsWithSunday = [];
  for (year = 2014; year <= 2050; year++) {
    let isSunday = new Date(year, 0, 1);
    if (isSunday.getDay() === 0) yearsWithSunday += year;
  }

  return `The 1st of January falls on a Sunday, in the following years: ${yearsWithSunday} `;
}
console.log(whichYear()); // trebuie separati anii
