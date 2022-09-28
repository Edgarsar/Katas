let whiteQueen = [0, 5];
let blackQueen = [5, 0];

const generateBoard = function (whiteQueen, blackQueen) {
  const chessBoard = [];

  //Iterate through to create an array of chess board with values 0 (8x8)
  for (let i = 0; i < 8; i++) {
    chessBoard[i] = [];
    for (let j = 0; j < 8; j++) {
      chessBoard[i][j] = 0;
    }
  }

  chessBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessBoard[blackQueen[0]][blackQueen[1]] = 1;

  return chessBoard

}

const queenThreat = function (generatedBoard) {

  //find the positions of both queens
  const queenPositions = [];
  queenPositions.push(whiteQueen, blackQueen);


  if (queenPositions[0][1] === queenPositions[1][1])
    return true; //same column
  if (queenPositions[0][0] === queenPositions[1][0])
    return true; //same row

  //calculate the slope
  let rise = queenPositions[0][0] - queenPositions[1][0];

  let rum = queenPositions[0][1] - queenPositions[1][1];


  if (Math.abs(rise / rum) === 1) return true; //if the absolute value of the slope is 1
  return false;
};

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));