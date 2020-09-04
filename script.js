var cells = document.getElementsByTagName("td");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var clearBtn = document.getElementById("restartBtn");
var interval;

// if cell is clicked (element).target), the class .black
// will be toggled

for (item of cells) {
  item.addEventListener("click", (element) => {
    element.target.classList.toggle("black");
  });
}

// ---beginning of the start-button functions:---

// if clicked on start button, function "start" will be evoked
startBtn.addEventListener("click", start);

// function "start" with set interval for the function "game"
function start() {
  interval = setInterval(game, 300);
}

//function "game" that selects all cells with black background, adds this class to the siblings to the left (previousElementSibling) and removes it from the first cells.
function game() {
  var clickedCells;
  clickedCells = document.querySelectorAll(".black");
  var previousCell;
  for (item of clickedCells) {
    previousCell = item.previousElementSibling;
    if (previousCell === null) {
      item.parentElement.lastElementChild.classList.add("black");
    } else {
      previousCell.classList.add("black");
    }
    item.classList.remove("black");
  }
}
// ---end of start button functions---

// stop button when click uses the method clearInterval on the global var interval to stop the movement
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

// clear button deletes class .black from all cells.
clearBtn.addEventListener("click", () => {
  for (item of cells) {
    item.classList.remove("black");
  }
});
