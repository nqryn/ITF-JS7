let trainingObj = {
    trainer: "Iulia",
    course: "HTML",
    duration: 30,
    participants: ["Ross", "Rachel", "Phoebe", "Monica", "Joey", "Chandler"],
    isActive: true,
};


/* 51. Write a JavaScript function to list the properties of the trainingObj
object. */
const objProperties = myObject => Object.keys(myObject);
console.log(objProperties(trainingObj));


/* 52. Write a JavaScript function to add the startTime property to the
trainingObj object and give it the value 19:00. */

const addStartTime = myObj => myObj.startTime = '19:00';
addStartTime(trainingObj);
console.log(trainingObj);


/* 53. Write a JavaScript function to add the endTime property to the
trainingObj object and give it the value 21:00. */

const addEndTime = (myObj) => (myObj.endTime = "21:00");
addEndTime(trainingObj);
console.log(trainingObj);


/* 54. Write a JavaScript function to add the day property to the trainingObj
object and give it the value “Thursday”. */

const addDay = (myObj) => (myObj.day = "Thursday");
addDay(trainingObj);
console.log(trainingObj);


/* 55. Write a JavaScript function to delete the isActive property from the
trainingObj object. Also print the object before and after deleting the
property. */
const deleteProperty = (myObj, myProp) => delete myObj[myProp];
console.log(trainingObj);
deleteProperty(trainingObj, 'isActive');
console.log(trainingObj);


/* 56. Write a JavaScript function to get the length of the trainingObj object. */
const objLength = (myObj) => Object.keys(myObj).length;
console.log(objLength(trainingObj));

