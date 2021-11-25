// array of questions as objects
var qArr = [
  {
    question: "What is Javascript?",
    answer1: "broswer for the internet",
    answer2: "latin dance",
    correct: "high level programming language",
    answer3: "Can you repeat the question?",
  },
  {
    question: "How do you check if something is equal to something else?",
    answer1: "=",
    answer2: "!==",
    answer3: "==",
    correct: "===",
  },
  {
    question: "How can you store multple values in a variable?",
    answer1: "use multple variables",
    correct: "an array",
    answer2: "Hash table",
    answer3: "use const",
  },
  {
    question:
      "What is the keyword to store variables with values that cannot be changed?",
    answer1: "goat_chz",
    answer2: "var",
    answer3: "let",
    correct: "const",
  },
  {
    question: "How do you connent HTML to js file?",
    answer1: "<ul>",
    answer2: "<a>",
    answer3: "<link>",
    correct: "<script>",
  },
];

// Variables
var counter = 60;
var arrIndex = 0;
var theButton = document.querySelector(".btn-start");
var btnHighScore = document.querySelector(".btn-high-score");
var timerDiv = document.createElement("div");
document.body.appendChild(timerDiv);
var displayTimer = document.createElement("p");
var setCounter = 0;
var mainDiv = document.createElement("div");
var questionsH1 = document.createElement("h1");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var mainContainer = document.querySelector(".start-screen");
var highScoreDiv = document.createElement("div");
var gameOverDiv = document.createElement("div");

// Retrieves high score
btnHighScore.onclick = function () {
  mainContainer.setAttribute("style", "display: none");
  retriveData();
};

// Button click to remove main container
theButton.onclick = function () {
  mainContainer.setAttribute("style", "display: none");

  // Start counter
  setCounter = setInterval(countDown, 1000);
  displayQuestions();
  // storeData();
};

// Display questions function
function displayQuestions() {
  document.body.appendChild(mainDiv);
  questionsH1.textContent = qArr[arrIndex].question;
  mainDiv.appendChild(questionsH1);
  btn1.textContent = qArr[arrIndex].answer1;
  btn2.textContent = qArr[arrIndex].answer2;
  btn3.textContent = qArr[arrIndex].answer3;
  btn4.textContent = qArr[arrIndex].correct;
  mainDiv.append(btn1, btn2, btn3, btn4);
}

function checkIfCorrect() {
  if (this.textContent === qArr[arrIndex].correct) {
    alert("Correct");
  } else {
    alert("Incorrect");
    counter -= 20;
  }

  removeElements();
  arrIndex++;
  gameOver();
}

//Button click event listener
btn1.addEventListener("click", checkIfCorrect);

btn2.addEventListener("click", checkIfCorrect);

btn3.addEventListener("click", checkIfCorrect);

btn4.addEventListener("click", checkIfCorrect);

//Remove display elements
function removeElements() {
  mainDiv.remove();
  questionsH1.remove();
  btn1.remove();
  btn2.remove();
  btn3.remove();
  btn4.remove();
}

// Checks if all questions have been answered
function gameOver() {
  if (arrIndex === qArr.length) {
    // update game over
    clearInterval(setCounter);
    alert("All questions completed!");
    mainDiv.setAttribute("style", "display: none");
    storeData();
  } else {
    displayQuestions();
  }
}

//count-down function
function countDown() {
  if (counter === 0) {
    clearInterval(setCounter); //stops setInterval timer
    alert("Times up");
    mainDiv.setAttribute("style", "display: none");
    storeData();
  }

  var displayCount = counter;
  counter--;

  displayTimer.innerHTML = `${displayCount}`;
  timerDiv.appendChild(displayTimer);
}

// Store in local storage
function storeData() {
  document.body.appendChild(gameOverDiv);
  var gameOverTitle = document.createElement("h1");
  gameOverTitle.textContent = "Game Over! Thanks for playing!";
  gameOverDiv.appendChild(gameOverTitle);

  // Ask for user's initials
  var usersInitials = prompt("Please enter your initials");

  // Acquire high score
  var highScore = counter * 1000;

  // Display user's initials & high score
  alert("Thank you " + usersInitials + " your high score is " + highScore);

  // Store in local storage
  localStorage.setItem(usersInitials, highScore);

  // var playGame = window.confirm("Do you wish to play game?");
  // if (playGame) {
  //   gameOverDiv.setAttribute("style", "display: none");
  //   displayQuestions();
  // }
}

function retriveData() {
  document.body.appendChild(highScoreDiv);
  var highScoreTitle = document.createElement("h1");
  highScoreTitle.textContent = "Current High Scores";
  highScoreDiv.appendChild(highScoreTitle);
  var btnMainMenu = document.createElement("button");
  btnMainMenu.textContent = "Return to Main Menu";
  highScoreDiv.appendChild(btnMainMenu);

  btnMainMenu.addEventListener("click", function () {
    highScoreDiv.setAttribute("style", "display: none");
    mainContainer.setAttribute("style", "display: flex");
    mainContainer.setAttribute("style", "flex-direction: column");
    mainContainer.setAttribute("style", "justify-content: space-evenly");
    mainContainer.setAttribute("style", "align-items: center");
  });

  var scoresText = document.createElement("p");

  var getInitials = window.prompt("Enter initials you are searching for: ");
  var highScoreSearch = localStorage.getItem(getInitials);

  if (highScoreSearch === null) {
    scoresText.textContent = "Person not found";
    highScoreDiv.appendChild(scoresText);
  } else {
    scoresText.textContent =
      getInitials + " has a high score of " + highScoreSearch;
    highScoreDiv.appendChild(scoresText);
  }
}
