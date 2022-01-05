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
  
  if (code == 119) moveHeadUp();// W, up
  else if (code == 97) moveHeadLeft();// A, left
  else if (code == 115) moveHeadDown();// S, down
  else if (code == 100) moveHeadRight();// D, right
}

// TODO: abstract moveFunctions() to their own methods

function moveHeadLeft() {
  let head = document.querySelector(".head");
  let coord = head.id.split('-');
  if (coord[1] == 0) return;

  head.classList.toggle("head");
  head = document.getElementById(
    `${parseInt(coord[0])}-${parseInt(coord[1] ) - 1}`
    );
  head.classList.toggle("head")
}
function moveHeadUp() {
  let head = document.querySelector(".head");
  let coord = head.id.split('-');
  if (coord[0] == 0) return;

  head.classList.remove("head");
  head = document.getElementById(
    `${parseInt(coord[0]) - 1}-${parseInt(coord[1])}`
    ); 
  head.classList.add("head")
}
function moveHeadRight() {
  let head = document.querySelector(".head");
  let coord = head.id.split('-');

  if (coord[1] == 9) return;

  head.classList.toggle("head");
  head = document.getElementById(
    `${parseInt(coord[0])}-${parseInt(coord[1]) + 1}`
    );
  head.classList.toggle("head")
}
function moveHeadDown() {
  let head = document.querySelector(".head");
  let coord = head.id.split('-');
  if (coord[0] == 9) return;

  head.classList.toggle("head");
  head = document.getElementById(
    `${parseInt(coord[0]) + 1}-${parseInt(coord[1])}`
    );
  head.classList.toggle("head")
}



initScreen()

let x = document.getElementById("0-0");
x.classList.add("head")