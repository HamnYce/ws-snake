// w = 119, a = 97, s = 115, d = 100
let globalIntervalCounter = 0;
let movingLeft = false;
let movingRight = false;
let movingUp = false;
let movingDown = false;
let snakeBody = ["0-0"]

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
  let x = Math.floor(Math.random()*10)
  let y = Math.floor(Math.random()*10)
  document.getElementById(snakeBody[0]).classList.add("head")
}

function moveSnake(e) {
  let code = e.keyCode;
  console.log(e)

  if (code == 119 && !movingUp && !movingDown) {// W, up
    clearInterval(globalIntervalCounter)
    globalIntervalCounter = autoMoveUp();
  }
  else if (code == 97 && !movingLeft && !movingRight) {// A, left
    clearInterval(globalIntervalCounter)
    globalIntervalCounter = autoMoveLeft();
  }
  else if (code == 115 && !movingDown && !movingUp) {// S, down
    clearInterval(globalIntervalCounter)
    globalIntervalCounter = autoMoveDown();
  }
  else if (code == 100 && !movingRight && !movingLeft) {// D, right
    clearInterval(globalIntervalCounter)
    globalIntervalCounter = autoMoveRight();
  }
}

function autoMoveLeft() {
  movingLeft = true;
  movingUp = false;
  movingRight = false;
  movingDown = false;
  return setInterval(moveLeftInterval, 150)}

function autoMoveUp() {
  movingLeft = false;
  movingUp = true;
  movingRight = false;
  movingDown = false;
  return setInterval(moveUpInterval, 150)}

function autoMoveRight() {
  movingLeft = false;
  movingUp = false;
  movingRight = true;
  movingDown = false;
  return setInterval(moveRightInterval, 150)}

function autoMoveDown() {
  movingLeft = false;
  movingUp = false;
  movingRight = false;
  movingDown = true;
  return setInterval(moveDownInterval,150)}

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
  let newCoord = [parseInt(coord[0]), parseInt(coord[1]) - 1]
  if (isApple(newCoord)) {
    grow(head, newCoord)
    removePowerUp()
  }
  changeHead(head, newCoord);
}

function moveHeadUp(head) {
  let coord = head.id.split('-');
  if (coord[0] == 0) return;
  let newCoord = [parseInt(coord[0]) - 1, parseInt(coord[1])]
  if (isApple(newCoord)) {
    grow(head, newCoord)
    removePowerUp()
  }

  changeHead(head, newCoord);
}

function moveHeadRight(head) {
  let coord = head.id.split('-');
  if (coord[1] == 9) return;
  let newCoord = [parseInt(coord[0]), parseInt(coord[1]) + 1];
  if (isApple(newCoord)) {
    grow(head, newCoord)
    removePowerUp()
  }

  changeHead(head, newCoord);
}

function moveHeadDown(head) {
  let coord = head.id.split('-');
  if (coord[0] == 9) return;
  let newCoord = [parseInt(coord[0]) + 1, parseInt(coord[1])];
  if (isApple(newCoord)) {
    grow(head, newCoord)
    removePowerUp()
  }

  changeHead(head, newCoord);
}

function changeHead(head, newCoord) {
  head.classList.remove("head");
  head = document.getElementById(
    `${newCoord[0]}-${newCoord[1]}`
    );
  head.classList.add("head");
}

function grow(head, newCoord) {
  head.classList.remove("head")
  head.classList.remove("snake-segment-empty")
  head.classList.add("snake-segment-filled")
  head = document.getElementById(
    `${newCoord[0]}-${newCoord[1]}`
    );
  head.classList.add("head")
  snakeBody.push(`${newCoord[0]}-${newCoord[1]}`)
}

function createPowerUp() {
  let x = Math.floor(Math.random()*10);
  let y = Math.floor(Math.random()*10);
  let randomPlace = document.getElementById(`${x}-${y}`);
  let randomPlaceClassList = randomPlace.classList;
  while (randomPlaceClassList.contains('snake-segment-filled')) {
  x = Math.floor(Math.random()*10);
  y = Math.floor(Math.random()*10);
  randomPlace = document.getElementById(`${x}-${y}`);
  randomPlaceClassList = randomPlace.classList;
  }
  randomPlace.classList.add('apple')
}

function removePowerUp() {
  document.querySelector('.apple').classList.remove('apple')
}

function isApple(coord) {
  if (document.getElementById(`${coord[0]}-${coord[1]}`)
      .classList.contains('apple')) 
        return true;
  return false;
}




initScreen();

createPowerUp();