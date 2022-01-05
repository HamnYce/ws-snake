// w = 119, a = 97, s = 115, d = 100

function initScreen() {
  let root = document.getElementById("playground");
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let node = document.createElement("div");
      node.classList.add('snake-segment-empty');
      node.id = `${i}-${j}`;

      root.appendChild(node);
    }
  }

  window.addEventListener("keypress", moveSnake);
}


function moveSnake(e) {
  let code = e.keyCode;
  let head = document.querySelector(".head");
  let coord = head.id.split('-');

  console.log(code)

  if (code == 119) moveHeadUp(head, coord);// W, up
  else if (code == 97) moveHeadLeft(head, coord);// A, left
  else if (code == 115) moveHeadDown(head, coord);// S, down
  else if (code == 100) moveHeadRight(head, coord);// D, right
}
function moveHeadLeft(head, coord) {
  if (coord[1] == 0) return;

  changeHead(head, coord, [parseInt(coord[0]), parseInt(coord[1]) - 1]);
}
function moveHeadUp(head, coord) {
  if (coord[0] == 0) return;

  changeHead(head, coord, [parseInt(coord[0]) - 1, parseInt(coord[1])]);
}
function moveHeadRight(head, coord) {
  if (coord[1] == 9) return;

  changeHead(head, coord, [parseInt(coord[0]), parseInt(coord[1]) + 1]);
}
function moveHeadDown(head, coord) {
  if (coord[0] == 9) return;

  changeHead(head, coord, [parseInt(coord[0]) + 1, parseInt(coord[1])]);
}
function changeHead(head, coord, newCoord) {
  head.classList.toggle("head");
  head = document.getElementById(
    `${newCoord[0]}-${newCoord[1]}`
    );
  head.classList.toggle("head")
}


initScreen()

let x = document.getElementById("0-0");
x.classList.add("head")