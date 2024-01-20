// funzione genero griglia
function genGrid(container) {
  container.innerHTML = "";
  let level = selectLevel.value;

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
    if (!isGameOver) {
      if (myBombs.includes(text)) {
        cell.classList.add("stop");
        alert("Hai pestato una BOMBA!!!!");
        isGameOver = true;
        console.log(score);
        scoreText.innerText =
          "Hai perso!!!! Hai totalizzato " + score + " punti";
      } else {
        cell.classList.add("active");
        score++;
        if (score == cellNumber - myBombs.length) {
          alert("Hai VINTO!!!!");
          isGameOver = true;
          console.log(score);
          scoreText.innerText =
            "Hai vinto!!!! Hai totalizzato " + score + " punti";
        }
      }
    }
  });
  return cell;
}

// funzione genera numero random
function genRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
