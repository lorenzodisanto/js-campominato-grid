// funzione genero griglia
function genGrid(container) {
  container.innerHTML = "";
  let level = selectLevel.value;
  let cellNumber;
  if (level == "facile") {
    cellNumber = 100;
  } else if (level == "medio") {
    cellNumber = 81;
  } else if (level == "difficile") {
    cellNumber = 49;
  }

  for (let i = 0; i < cellNumber; i++) {
    const cellElement = genCell(i + 1);
    container.append(cellElement);
  }
}

// funzione genero cella

function genCell(text) {
  const cell = document.createElement("div");
  cell.classList.add("box");
  let level = selectLevel.value;
  if (level == "facile") {
    cell.classList.add("easy");
  } else if (level == "medio") {
    cell.classList.add("medium");
  } else if (level == "difficile") {
    cell.classList.add("hard");
  }
  cell.innerText = text;
  cell.addEventListener("click", function () {
    cell.classList.toggle("active");
    console.log("hai clickato la cella " + text);
  });
  return cell;
}
