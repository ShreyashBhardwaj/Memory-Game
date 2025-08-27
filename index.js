const sounds = [
  "/sounds/blue.mp3",
  "/sounds/green.mp3",
  "/sounds/red.mp3",
  "/sounds/yellow.mp3",
  "/sounds/wrong.mp3",
];

let gameLevel;

const buttons = ["#green", "#red", "#yellow", "#blue"];

let gamePattern = ["#blue", "#green", "#yellow", "#red"];
let userSelection = [];

// Click Listeners for the Buttons

let button = document.querySelectorAll(".btn");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", playerMode);
}

// Game Start
document.addEventListener("keypress", function () {
  gameStart();
  console.log("Game Start");
});

function gameStart() {
  let title = document.querySelector("#level-title");

  //   playerMode();

  for (gameLevel = 0; gameLevel < gamePattern.length; gameLevel++) {
    title.innerHTML = "Level " + (gameLevel + 1);
    gameMode(gamePattern[gameLevel]);
  }
}

function gameMode(gameClicked) {
  var buttonClicked = document.querySelector(gameClicked).getAttribute("id");
  console.log(buttonClicked);
  animateOnClick(buttonClicked);
  playSound(buttonClicked);
}

function playerMode(clickedColor) {
  var mouseClicked = clickedColor.target.id;
  animateOnClick(mouseClicked);
  playSound(mouseClicked);
  check(mouseClicked);
}

// Function to Generate pattern

function generatePattern() {}

// To Check Whether Pattern is followed

function check(userSelection) {
  for (let i = 0; i < gameLevel; i++) {
    if (userSelection === gamePattern[i]) {
      continue;
    } else {
      gameOver();
      break;
    }
  }
}

function gameOver() {
  document.querySelector("body").classList.add("game-over");
  setTimeout(function () {
    document.querySelector("body").classList.remove("game-over");
  }, 100);
  var audio = new Audio(sounds[4]);
  audio.play();
}

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
