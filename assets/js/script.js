// array of questions as objects
var qArr = [
  {
    question: "Is the sky blue?",
    answer1: "no",
    answer2: "yes",
    correct: "maybe",
    answer3: "Can you repeat the question?",
  },
  {
    question: "What time is it?",
    answer1: "five",
    answer2: "ten",
    answer3: "15",
    correct: "6pm",
  },
];

// Variables
var counter = 3;
var arrIndex = qArr.length - 1;
console.log(typeof arrIndex);
var theButton = document.querySelector(".btn-start");
var btnHighScore = document.querySelector(".btn-high-score");
var timerDiv = document.createElement("div");
document.body.appendChild(timerDiv);
var displayTimer = document.createElement("p");
var setCounter = 0;

// Retrieves high score
btnHighScore.onclick = function () {
  retriveData();
};

// Button click to remove main container
theButton.onclick = function () {
  var mainContainer = document.querySelector(".start-screen");
  mainContainer.setAttribute("style", "display: none");

  // Start counter
  // setCounter = setInterval(countDown, 1000);
  displayQuestions();
  // storeData();
};

// Display questions function
function displayQuestions() {
  var mainDiv = document.createElement("div");
  document.body.appendChild(mainDiv);
  // Display question

  var questionsH1 = document.createElement("h1");
  questionsH1.textContent = qArr[arrIndex - 1].question;
  mainDiv.appendChild(questionsH1);

  // Buttons to display answers
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  var btn3 = document.createElement("button");
  var btn4 = document.createElement("button");
  btn1.textContent = qArr[arrIndex - 1].answer1;
  btn2.textContent = qArr[arrIndex - 1].answer2;
  btn3.textContent = qArr[arrIndex - 1].answer3;
  btn4.textContent = qArr[arrIndex - 1].correct;
  mainDiv.append(btn1, btn2, btn3, btn4);

  //Button click event listener
  btn1.addEventListener("click", function () {
    if (whatIs === "correct") {
      alert("Correct");
    } else {
      alert("Incorrect");
    }
  });

  btn4.addEventListener("click", function () {
    if (qArr[1].correct === "correct") {
      alert("Correct");
    } else {
      alert("Incorrect");
    }
  });

  //Increment array index by one
  arrIndex++;
}

//count-down function
function countDown() {
  if (counter === 0) {
    clearInterval(setCounter); //stops setInterval timer
    alert("Times up");
  }

  var displayCount = counter;
  counter--;

  displayTimer.innerHTML = `${displayCount}`;
  timerDiv.appendChild(displayTimer);
  // console.log;
}

// Store in local storage
function storeData() {
  // Ask for user's initials
  var usersInitials = prompt("Please enter your initials");

  // Acquire high score
  var highScore = counter * 1000;

  // Display user's initials & high score
  alert("Thank you " + usersInitials + " your high score is " + highScore);

  // Store in local storage
  localStorage.setItem("score", JSON.stringify(usersInitials, highScore));
}

function retriveData() {
  var savedData = localStorage.getItem("score");
  alert(savedData);
}
