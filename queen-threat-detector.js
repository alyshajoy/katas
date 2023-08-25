let board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]

const generateBoard = function (white, black) {
  for (let i = 0; i < board.length; i++) {
    if (white[0] === i) {
      for (let x = 0; x < board[i].length; x++) {
        if (white[1] === x) {
          board[i].splice(x, 1, 1);
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (black[0] === i) {
      for (let x = 0; x < board[i].length; x++) {
        if (black[1] === x) {
          board[i].splice(x, 1, 1);
        }
      }
    }
  }
  return board;
}

const queenThreat = function (boardInput) {

  let indexRows = []
  let indexColumns = [];
  for (let i = 0; i < boardInput.length; i++) {
    for (let x = 0; x < boardInput[i].length; x++) {
      if (boardInput[i][x] === 1) {
        indexColumns.push(x);
        indexRows.push(i);
      }         
    }
  }
  console.log("index:", indexRows, indexColumns);

  if (indexColumns[0] === indexColumns[1]){
    return true;
  } else if (indexRows[0] === indexRows[1]){
    return true;
  } else if (((indexRows[1]-indexRows[0]) === (indexColumns[1] - indexColumns[0])) || ((indexRows[1]-indexRows[0]) === (indexColumns[1] - indexColumns[0]) * -1)) {
    return true;
  } else {
    return false;
  }
  
}

let whiteQueen = [0, 1];
let blackQueen = [5, 6];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log("queenThreat:", queenThreat(generatedBoard));