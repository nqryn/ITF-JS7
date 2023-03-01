//In this word game points are awarded based on the length of the word and the letters used.
//The user has to create a word from the letters in their hand. Could you create a function 
//which returns the correct score for the word played by the user?
//The scoring of the letters is the same as in the game Scrabble (The letter scores are provided 
//in the code). The score of the word is the sum of the points of all the letters multiplied by the number of 
//letters in the word. If they use all their letters then they get a fifty point bonus. Their hand consists 
//of seven letters.
//An example: The word 'great' gives a score of 30. This is because the sum of the letter values is 
//six (g=2, r=1, e=1, a=1, t=1) and it is a five letter word- 6*5=30.
//The basis of this word game comes from content on MIT OpenCourseWare (Introduction to Computer Science).

function calculateScore(word) {
  const letterScores = {
    A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3,
    N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10
  };
  
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score += letterScores[word[i].toUpperCase()];
  }
  score *= word.length;
  
  if (word.length === 7) {
    score += 50;
  }
  
  return score;
}

console.log(calculateScore("great"));



let trainingObj = { 
  trainer: “Iulia”, 
  course: “HTML”, 
  duration: 30, 
  participants: [“Ross”, “Rachel”, “Phoebe”, “Monica”, “Joey”, “Chandler”], 
  isActive: true 
 }
  

  // Write a JavaScript function to list the properties of the trainingObj object.
  
  function listProperties(obj) {
    return Object.keys(obj);
  }
console.log(listProperties(trainingObj));

  //Write a JavaScript function to add the startTime property to the
  //trainingObj object and give it the value 19:00.
  
  function addStartTime(obj, time) {
    obj.startTime = time;
  }
console.log(addStartTime(trainingObj, "19:00"));

  //Write a JavaScript function to add the endTime property to the trainingObj object and give it the value 21:00. 
  
  function addEndTime(obj, time) {
    obj.endTime = time;
  }
console.log(addEndTime(trainingObj, "21:00"));


//Write a JavaScript function to get the length of the trainingObj object.

  function getObjLength(obj) {
  return Object.keys(obj).length;
}
console.log(getObjLength(trainingObj));
