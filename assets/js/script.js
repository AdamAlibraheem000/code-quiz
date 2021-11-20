var theButton = document.querySelector(".btn-start");

var questionArr = [
  {
    question: "Is the sky blue?",
    answer1: "no",
    answer2: "yes",
    answer3: "maybe",
    answer4: "Can you repeat the question?",
  },
];

// Button click to remove main container
theButton.onclick = function () {
  var mainContainer = document.querySelector(".start-screen");
  mainContainer.setAttribute("style", "display: none");
};

alert(questionArr.question);

// Create new container
var newContainer = document.createElement("div");
newContainer.className = "q-container";
var newH1 = document.createElement("h1");
newH1.textContent = "What Up?";

document.body.appendChild(newContainer);
newContainer.appendChild(newH1);
