/* 1. Write a JavaScript function to display the current day and time in the
following format.
Test data: displayCurrentDay()
Expected Output : Today is Tuesday. Current time is : 10:30:38 */

const currentDate = new Date();
const displayCurrentDay = () => {
    const daysArr = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    console.log(
        `Today is ${
            daysArr[currentDate.getDay()]
        }. Current time is: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
    );
};
displayCurrentDay();

/* 2. Write a JavaScript function to get the current date.
Test data: displayCurrentDay()
Expected Output : dd-mm-yyyy OR dd/mm/yyyy */

const todayDate = () => {
    const today = new Date();
    const day = today.getDay();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    console.log(
        `${day < 10 ? `0${day}` : `${day}`}-${
            month < 10 ? `0${month}` : `${month}`
        }-${year}`
    );
};
todayDate();

/* 3. Write a JavaScript function to get the number of days in a month.
Test data: getNumberOfDays(2)
Expected Output : March has 31 days. */

const getNumberOfDays = (myYear, myMonth) =>
    new Date(myYear, myMonth, 0).getDate();
console.log(getNumberOfDays(2023, 12));

/* 4. Write a JavaScript function to calculate days left until next Christmas.
Test data: getDaysToChristmas()
Expected Output : There are 145 days left until next Christmas. */

const getDaysToChristmas = () => {
    const today = new Date();
    const christmas = new Date("2023, 11, 25");
    const leftDays = Math.ceil(
        (christmas.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    console.log(`There are ${leftDays} days left until next Christmas.`);
};
getDaysToChristmas();

/* 5. Write a JavaScript function to find which 1st of January falls on a
Sunday between the years 2014 and 2050.
Test data: whichYear()
Expected Output : The 1st of January falls on a Sunday, in the
following years: 2022, 2035 and 2048. */

let yearsArr = [];
let yearsString =
    "The 1st of January falls on a Sunday in the following years: ";
const whichYear = () => {
    let theYear = 2014;
    while (theYear <= 2050) {
        if (new Date(theYear, 0, 1).getDay() === 0) {
            yearsArr.push(theYear);
        }
        theYear++;
    }
    for (let i = 0; i <= yearsArr.length - 2; i++) {
        yearsString += " " + yearsArr[i] + ",";
    }
    yearsString =
        yearsString.slice(0, yearsString.length - 1) +
        " and " +
        yearsArr[yearsArr.length - 1];
    console.log(yearsString);
};
whichYear();
