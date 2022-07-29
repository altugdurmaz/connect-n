const rows = 6;
const cols = 7;
let gameBoard = [];
let playerTurn = 0;
let startGame = true;
let bluePlayer = 0;
let redPlayer = 0;
const winStrikeCount = parseInt(window.location.pathname.split("/")[1]);

function createBoard() {
  let row = [];
  let board = [];
  for (let i = 0; i < 6; i++) {
    row = [];
    for (let j = 0; j < 7; j++) {
      row.push(0);
    }
    board.push(row);
  }
  return board;
}

function setup() {
  createCanvas(1400, 600);
  gameBoard = createBoard();
}

function draw() {
  background(51);

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (gameBoard[i][j] === 1) {
        fill("red");
      } else if (gameBoard[i][j] === 2) {
        fill("blue");
      } else {
        fill("white");
      }
      rect(100 * j, 100 * i, 100, 100);
    }
  }

  fill("white");
  textAlign(CENTER, CENTER);
  textSize(120);
  text("-", 1050, 300);

  fill(255, 0, 0);
  textAlign(RIGHT, CENTER);
  text(redPlayer, 1000, 300);

  fill("blue");
  textAlign(LEFT, CENTER);
  text(bluePlayer, 1100, 300);
}

function checkClickedCol(x) {
  for (let i = 0; i < 7; i++) {
    if (x < 25 + (i + 1) * 100) {
      return i;
    }
  }
}

function dropPiece(col) {
  for (let i = 0; i < 6; i++) {
    let row = 5 - i;
    if (gameBoard[row][col] === 0) {
      gameBoard[row][col] = playerTurn + 1;
      return row;
    }
  }
  return 6;
}

function checkWin(row, col) {
  return checkRow(row) || checkCol(col) || checkDiagonal(row, col);
}

function checkRow(row) {
  let streak = 0;
  for (let j = 0; j < 7; j++) {
    let piece = gameBoard[row][j];
    if (piece === playerTurn + 1) {
      streak += 1;
    } else {
      streak = 0;
    }
    if (streak === winStrikeCount) {
      return true;
    }
  }
  return false;
}

function checkCol(col) {
  let streak = 0;
  for (let i = 0; i < 6; i++) {
    let piece = gameBoard[i][col];
    if (piece === playerTurn + 1) {
      streak += 1;
    } else {
      streak = 0;
    }
    if (streak === winStrikeCount) {
      return true;
    }
  }
  return false;
}

function checkDiagonal(row, col) {
  let streak = 0;
  for (let i = -5; i < 6; i++) {
    if (0 <= row - i && row - i < 6 && 0 <= col + i && col + i < 7) {
      let piece = gameBoard[row - i][col + i];
      if (piece === playerTurn + 1) {
        streak += 1;
      } else {
        streak = 0;
      }
      if (streak === winStrikeCount) {
        return true;
      }
    }
  }

  streak = 0;
  for (let i = -5; i < 6; i++) {
    if (0 <= row + i && row + i < 6 && 0 <= col + i && col + i < 7) {
      let piece = gameBoard[row + i][col + i];
      if (piece === playerTurn + 1) {
        streak += 1;
      } else {
        streak = 0;
      }
      if (streak === winStrikeCount) {
        return true;
      }
    }
  }
  return false;
}

function mouseClicked() {
  if (
    startGame &&
    0 <= mouseY &&
    mouseY <= 750 &&
    0 <= mouseX &&
    mouseX <= 750
  ) {
    let col = checkClickedCol(mouseX);

    let row = dropPiece(col);
    if (row < 6) {
      if (checkWin(row, col)) {
        startGame = false;
        if (playerTurn + 1 === 1) {
          redPlayer += 1;
        } else {
          bluePlayer += 1;
        }
        startGame = true;
        gameBoard = createBoard();
      } else {
        playerTurn = (playerTurn + 1) % 2;
      }
    }
  }
}
