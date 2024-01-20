const gamingtableElement = document.getElementById("gamingtable");
const playButton = document.getElementById("playbutton");
const selectLevel = document.getElementById("selectlevel");
const scoreText = document.getElementById("score");

const myBombs = [];
const elementsNumber = 16;
let isGameOver = false;
let score = 0;

playButton.addEventListener("click", function () {
  genGrid(gamingtableElement);
  gamingtableElement.classList.remove("d-none");
});
