let trainingObj = {
    trainer: "Iulia",
    course: "HTML",
    duration: 30,
    participants: ["Ross", "Rachel", "Phoebe", "Monica", "Joey", "Chandler"],
    isActive: true,
};

/* 51. Write a JavaScript function to list the properties of the trainingObj
object. */
const objProperties = (myObject) => Object.keys(myObject);
console.log(objProperties(trainingObj));

/* 52. Write a JavaScript function to add the startTime property to the
trainingObj object and give it the value 19:00. */

const addStartTime = (myObj) => (myObj.startTime = "19:00");
addStartTime(trainingObj);
console.log(trainingObj);

/* 53. Write a JavaScript function to add the endTime property to the
trainingObj object and give it the value 21:00. */

const addEndTime = (myObj) => (myObj.endTime = "21:00");
addEndTime(trainingObj);
console.log(trainingObj);

/* 54. Write a JavaScript function to add the day property to the trainingObj
object and give it the value “Thursday”. */

const addDay = (myObj) => (myObj.day = 2);
addDay(trainingObj);
console.log(trainingObj);

/* 55. Write a JavaScript function to delete the isActive property from the
trainingObj object. Also print the object before and after deleting the
property. */

const deleteProperty = (myObj, myProp) => delete myObj[myProp];
console.log(trainingObj);
deleteProperty(trainingObj, "isActive");
console.log(trainingObj);

/* 56. Write a JavaScript function to get the length of the trainingObj object. */
const objLength = (myObj) => Object.keys(myObj).length;
console.log(objLength(trainingObj));

/* 57. Write a JavaScript function to check if the session is Active and return
true or false. Add the function as a value to a parameter isActive.
Session is only Active if the current day matches the day parameter and
if the current time is between startTime and endTime. */

const isSessionActive = (day, startTime, endTime) => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours().toString();
    const currentMinutes = now.getMinutes().toString();
    const currentTime = currentHour + ":" + currentMinutes;
    console.log("Current time is: Day", currentDay, currentTime);
    if (
        currentDay == day &&
        currentTime >= startTime &&
        currentTime < endTime
    ) {
        return true;
    } else {
        return false;
    }
};
console.log(
    isSessionActive(trainingObj.day, trainingObj.startTime, trainingObj.endTime)
);

/* 58. Write a JavaScript function to check whether the trainingObj object
contains the participants property and the property is not null or empty. */

const propertyValidation = (myObj58) => {
    if (
        myObj58.hasOwnProperty("participants") &&
        myObj58.participants != null &&
        myObj58.participants.length > 0
    ) {
        return true;
    } else {
        return false;
    }
};
console.log(propertyValidation(trainingObj));

/* 59. Write a JavaScript function to get a copy of the object where the keys
have become the values and the values have become the keys. */

const swapKeyValue = (obj) => {
    const swappedObj = {};
    for (const key in obj) {
        swappedObj[obj[key]] = key;
    }
    return swappedObj;
};
console.log(swapKeyValue(trainingObj));

/* 60. Write a JavaScript function to convert the trainingObj object into a list
of `[key, value]` pairs. */

const listOfKeyValues = (myObj60) => console.log(Object.entries(myObj60));
listOfKeyValues(trainingObj);
