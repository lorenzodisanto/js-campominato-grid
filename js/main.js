const gamingtableElement = document.getElementById("gamingtable");
const playButton = document.getElementById("playbutton");

playButton.addEventListener("click", function () {
  genGrid(gamingtableElement);
  gamingtableElement.classList.remove("d-none");
});
