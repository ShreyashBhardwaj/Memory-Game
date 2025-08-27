const sounds = [
  "sounds/blue.mp3",
  "sounds/green.mp3",
  "sounds/red.mp3",
  "sounds/yellow.mp3",
  "sounds/wrong.mp3",
];

let gamePattern = [];
let userSelection = [];

let button = document.querySelectorAll(".btn");

document.addEventListener("keydown", function () {
  gameStart();
});

function gameStart() {
  let gameStart = true;
  let gameLevel = 0;
  let title = document.querySelector("#level-title");

  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", game);
  }

  /*  while (gameStart) {
    title.innerHTML = "Level " + gameLevel;

    gameLevel++;
  }*/
}

// Function to Generate pattern

function generatePattern() {}

// To Check Whether Pattern is followed

function check(gamePattern, userSelection) {}

// Sound to be played

function playSound(buttonClicked) {
  let soundToBePlayed;
  switch (buttonClicked) {
    case "g":
      soundToBePlayed = sounds[1];
      break;
    case "b":
      soundToBePlayed = sounds[0];

      break;
    case "y":
      soundToBePlayed = sounds[3];

      break;
    case "r":
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

function animateOnClick(buttonClicked) {}
