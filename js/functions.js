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

  // creo array bombe
  const elementsNumber = 16;
  if (cellNumber - 1 > elementsNumber) {
    while (myBombs.length < elementsNumber) {
      generateNumber = genRandomNumber(1, cellNumber);
      if (!myBombs.includes(generateNumber)) {
        myBombs.push(generateNumber);
      }
    }
  }
  console.table(myBombs);
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

// funzione genera numero random
function genRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
