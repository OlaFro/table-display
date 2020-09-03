var cells = document.getElementsByTagName("td");
var counter = 0;
for (item of cells) {
  item.setAttribute("id", `cellId_${counter}`);
  item.addEventListener("click", (counter) => {
    var idCounter = counter.srcElement.id;
    document.getElementById(idCounter).classList.toggle = "black";
    console.log(counter.srcElement.id);
  });
  counter++;
}
