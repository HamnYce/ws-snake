// w = 119, a = 97, s = 115, d = 100
let globalIntervalCounter = 0;
let left = false;
let right = true;
let up = false;
let down = false;
let snakeBody = ["0-0"]
let coord;

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

  window.addEventListener("keypress", changeDirection);

  setInterval(moveSnake, 300);

  // Init first head
  let x = Math.floor(Math.random()*10);
  let y = Math.floor(Math.random()*10);
  document.getElementById(snakeBody[0]).classList.add("head");
}

function moveSnake() {
  coord = snakeBody[0].split('-');
  if (left && coord[1] != "0")  coord = `${coord[0]}-${coord[1] - 1}`;
  else if (right && coord[1] != "9") 
    coord = `${coord[0]}-${parseInt(coord[1] + 1)}`;
  else if (up && coord[0] != "0") coord = `${coord[0] - 1}-${coord[1]}`;
  else if (down && coord[0] != "9") 
    coord = `${parseInt(coord[0]) + 1}-${coord[1]}`;

  document.getElementById(snakeBody[snakeBody.length - 1])
          .classList.remove("snake-segment-filled");
  if (snakeBody.length == 1) {
    document.getElementById(snakeBody[snakeBody.length - 1])
          .classList.remove("head");
  }

  snakeBody.pop();// remove last element

  snakeBody.unshift(coord);// add new element (position of head)
  document.getElementById(snakeBody[0]).classList.add("head")
  if (snakeBody.length > 1) {
  document.getElementById(snakeBody[1]).classList
          .remove('Head')
  document.getElementById(snakeBody[1]).classList
          .add("snake-segment-filled")
  }
}

function changeDirection(e) {
  let code = e.keyCode;

  if (code == 119 && !down) toUp();
  else if (code == 97 && !right) toLeft();
  else if (code == 115 && !up) toDown();
  else if (code == 100 && !left) toRight();
}

function toLeft() {left = true; right = false; down = false; up = false;}
function toRight() {left = false; right = true; down = false; up = false;}
function toUp() {left = false; right = false; down = false; up = true;}
function toDown() {left = false; right = false; down = true; up = false;}





initScreen();
