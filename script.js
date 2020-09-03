var cells = document.getElementsByTagName("td");
var counter = 0;
for (item of cells) {
  //   item.setAttribute("id", `cellId_${counter}`);
  item.addEventListener("click", (element) => {
    // var idCounter = counter.srcElement.id;
    element.target.classList.toggle("black");
    // document.getElementById(idCounter).classList.toggle("black");
    // console.log(counter.srcElement.id);
  });
  counter++;
}

var startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  var clickedCells = document.querySelectorAll(".black");
  //   loop over the clickedCells
  //   find the previous sibling
  //  give the class to the siblings
  // remove the class from the clicked cell
});
