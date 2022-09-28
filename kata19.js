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



let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
console.log(queenThreat(generatedBoard));