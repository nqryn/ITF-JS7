/**
 * 19. Write a JavaScript program to create a new string from a given string,
changing the position of first and last characters. The string’s length
must be greater than 1.
Test data: inverseString(“ITFactory”)
Expected Output : yTFactorI
 */

function inverseString(str) {
    const firstChar = str[0],
        lastChar = str[str.length - 1];
    const strNou = lastChar + str.substring(1, str.length - 1) + firstChar;
    return strNou;
}

const inv = x => x[x.length-1] + x.substring(1, x.length-1) + x[0];

console.log("Adela => ", inverseString("Adela"), inv("Adela"));
console.log("ITFactory => ", inverseString("ITFactory"));
console.log("I love programming” => ", inverseString("I love programming"));


/**
 * 
 * 52. Write a JavaScript function to add the startTime property to the
trainingObj object and give it the value 19:00.
 */

let trainingObj = {
    trainer: "Iulia",
    course: "HTML",
    duration: 30,
    participants: ["Ross", "Rachel", "Phoebe", "Monica","Joey", "Chandler"],
    isActive: true
};

function addStartTime(startTime) {
    trainingObj.startTime = startTime;
}

addStartTime("19:00");
console.log(JSON.stringify(trainingObj));