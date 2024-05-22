//LECTURE 11 - JS DOM TASK

const gridContainer = document.querySelector(".grid-container");
const rows = 30;
const cols = 20;
const cellSize = "40px";
//creating grid
for (let i = 0; i < rows; i++) {
  const columnContainer = document.createElement("tr");
  for (let j = 0; j < cols; j++) {
    const cell = document.createElement("td");
    cell.style.width = cellSize;
    cell.style.height = cellSize;
    cell.style.border = "solid black 1px";
    cell.style.textAlign = "center";
    cell.dataset.row = i;
    cell.dataset.col = j;
    columnContainer.appendChild(cell);
  }
  gridContainer.appendChild(columnContainer);
}
//outer fun to highlight desired cells
const markCell = (e) => {
  const cellElement = e.target;
  const cellRow = Number(cellElement.dataset.row) + 1;
  const cellCol = Number(cellElement.dataset.col) + 1;

  //protection from: highlighting whole grid container at once, and passing invalid col & row number
  if (!cellElement.classList.contains("grid-container") && cellRow && cellCol) {
    cellElement.innerHTML = `${cellRow}/${cellCol}`;
    cellElement.style.backgroundColor = "lightBlue";
  }
};
//single click handler
gridContainer.addEventListener("click", (e) => markCell(e));

//shift press/release
let keyPressed = false;
let mousePressed = false;
document.addEventListener("keydown", (e) => {
  if (e.key === "Shift") keyPressed = true;
});
document.addEventListener("keyup", (e) => {
  if (e.key === "Shift") keyPressed = false;
});

//mouse button press/release
document.addEventListener("mousedown", (e) => {
  mousePressed = true;
});
document.addEventListener("mouseup", (e) => {
  mousePressed = false;
});

//mouse hover listener combined with mouse and shift press
gridContainer.addEventListener("mouseover", (e) => {
  if (keyPressed && mousePressed) markCell(e);
});

//LISTENERS REMOVAL
//one click cell mark listener removal
gridContainer.removeEventListener("click", (e) => markCell(e));

//shift press/release listener removal
document.removeEventListener("keydown", (e) => {
  if (e.key === "Shift") keyPressed = true;
});
document.removeEventListener("keyup", (e) => {
  if (e.key === "Shift") keyPressed = false;
});

//mouse press/release listener removal
document.removeEventListener("mousedown", (e) => {
  mousePressed = true;
});
document.removeEventListener("mouseup", (e) => {
  mousePressed = false;
});

//mouse hover removal
gridContainer.removeEventListener("mouseover", (e) => {
  if (keyPressed && mousePressed) markCell(e);
});
