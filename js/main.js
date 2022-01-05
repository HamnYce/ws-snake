// w = 119, a = 97, s = 115, d = 100
let globalIntervalCounter = 0;

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

  // Init first head
  document.getElementById("0-0").classList.add("head")
}

function moveSnake(e) {
  let code = e.keyCode;
  let head = document.querySelector(".head");

  if (code == 119) {// W, up
    clearInterval(globalIntervalCounter)
    globalIntervalCounter = autoMoveUp();
  }
  else if (code == 97) {// A, left
    clearInterval(globalIntervalCounter)
    globalIntervalCounter = autoMoveLeft();
  }
  else if (code == 115) {// S, down
    clearInterval(globalIntervalCounter)
    globalIntervalCounter = autoMoveDown();
  }
  else if (code == 100) {// D, right
    clearInterval(globalIntervalCounter)
    globalIntervalCounter = autoMoveRight();
  }
}

function autoMoveLeft() {return setInterval(moveLeftInterval, 250)}

function autoMoveUp() {return setInterval(moveUpInterval, 250)}

function autoMoveRight() {return setInterval(moveRightInterval, 250)}

function autoMoveDown() {return setInterval(moveDownInterval,250)}

function moveLeftInterval() {
  let head = document.querySelector('.head')

  moveHeadLeft(head)
}

function moveUpInterval() {
  let head = document.querySelector('.head')

  moveHeadUp(head)
}

function moveRightInterval() {
  let head = document.querySelector('.head')

  moveHeadRight(head)
}

function moveDownInterval() {
  let head = document.querySelector('.head')

  moveHeadDown(head)
}

function moveHeadLeft(head) {
  let coord = head.id.split('-');
  if (coord[1] == 0) return;

  changeHead(head, [parseInt(coord[0]), parseInt(coord[1]) - 1]);
}

function moveHeadUp(head) {
  let coord = head.id.split('-');
  if (coord[0] == 0) return;

  changeHead(head, [parseInt(coord[0]) - 1, parseInt(coord[1])]);
}

function moveHeadRight(head) {
  let coord = head.id.split('-');
  if (coord[1] == 9) return;

  changeHead(head, [parseInt(coord[0]), parseInt(coord[1]) + 1]);
}

function moveHeadDown(head) {
  let coord = head.id.split('-');
  if (coord[0] == 9) return;

  changeHead(head, [parseInt(coord[0]) + 1, parseInt(coord[1])]);
}

function changeHead(head, newCoord) {
  head.classList.toggle("head");
  head = document.getElementById(
    `${newCoord[0]}-${newCoord[1]}`
    );
  head.classList.toggle("head");
}


initScreen();
