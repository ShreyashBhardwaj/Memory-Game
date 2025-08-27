const sounds = [
  "/sounds/blue.mp3",
  "/sounds/green.mp3",
  "/sounds/red.mp3",
  "/sounds/yellow.mp3",
  "/sounds/wrong.mp3",
];

const buttons = ["#green", "#red", "#yellow", "#blue"];

let gamePattern = ["#blue", "#green", "#yellow", "#red"];
let userSelection = [];

// Click Listeners for the Buttons

let button = document.querySelectorAll(".btn");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    console.log("click");
  });
}

// Game Start
document.addEventListener("keypress", function () {
  gameStart();
  console.log("Game Start");
});

function gameStart() {
  let gameLevel = 0;
  let title = document.querySelector("#level-title");

  gameMode();
  //   playerMode();

  //   for (gameLevel = 0; gameLevel < gamePattern.length; gameLevel++) {
  //     title.innerHTML = "Level " + (gameLevel + 1);
  //   }
}

function gameMode() {
  var buttonClicked = document.querySelector(gamePattern[0]).getAttribute("id");
  console.log(buttonClicked);
  animateOnClick(buttonClicked);
  playSound(buttonClicked);
}

// Function to Generate pattern

function generatePattern() {}

// To Check Whether Pattern is followed

function check(gamePattern, userSelection) {}

// Sound to be played

function playSound(buttonClicked) {
  console.log(buttonClicked);
  let soundToBePlayed;
  switch (buttonClicked) {
    case "green":
      soundToBePlayed = sounds[1];
      break;
    case "blue":
      soundToBePlayed = sounds[0];
      break;
    case "yellow":
      soundToBePlayed = sounds[3];
      break;
    case "red":
      soundToBePlayed = sounds[2];

      break;

    default:
      soundToBePlayed = sounds[4];

      break;
  }

  var audio = new Audio(soundToBePlayed);
  audio.play();
}

// Funciton For Animation

function animateOnClick(buttonClicked) {
  console.log(buttonClicked);
  let activeButton = document.getElementById(buttonClicked);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
