var readlineSync = require("readline-sync");
var score = 0;
var username = readlineSync.question("What is your name?");
console.log("Welcome " + username + ", Do you know Deeksha?")
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yay!! you are right");
    score = score + 1;
  }
  else {
    console.log("Nay!!you are wrong");

  }
  console.log("current score ", score);
  console.log("--------------------");
}
var highScore = [
  {
    name: "Deeksha",
    score: 3
  },
  {
    name: "Sachin",
    score: 2
  }
];
var questionBank = [
  {
    question: "Where does she live?",
    answer: "Ramnagar"
  },
  {
    question: "What is her age?",
    answer: "24"
  },
  {
    question: "Where does she work?",
    answer: "TCS"
  },
  {
    question: "Which is her favourite Colour?",
    answer: "Purple"
  },
  {
    question: "What is her favourite cuisine?",
    answer: "Chinese"
  }
];
for (var i = 0; i < questionBank.length; i++) {
  var currentQuestion = questionBank[i];
  play(currentQuestion.question, currentQuestion.answer)

}
console.log("YAY! You score ", score);

console.log("Check out the high scores, if you should be there ping me and I'll update it");
for (var i = 0; i < highScore.length; i++) {
  var currentscore = highScore[i];
  console.log(currentscore.name);
  console.log(currentscore.score);
}




