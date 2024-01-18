const gamingtableElement = document.getElementById("gamingtable");
const playButton = document.getElementById("playbutton");
const selectLevel = document.getElementById("selectlevel");

playButton.addEventListener("click", function () {
  genGrid(gamingtableElement);
  gamingtableElement.classList.remove("d-none");
});
