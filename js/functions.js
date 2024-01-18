// funzione genero griglia
function genGrid(container) {
  container.innerHTML = "";

  for (let i = 0; i < 100; i++) {
    const cellElement = genCell(i + 1);
    container.append(cellElement);
  }
}

// funzione genero cella

function genCell(text) {
  const cell = document.createElement("div");
  cell.classList.add("box");
  cell.innerText = text;
  cell.addEventListener("click", function () {
    cell.classList.toggle("active");
    console.log("hai clickato la cella " + text);
  });
  return cell;
}
