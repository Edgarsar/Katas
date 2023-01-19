/* Principal Diagonal -- The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.

Secondary Diagonal -- the secondary diagonal of a matrix identifies those elements of the matrix running from North-East to South-West.

For example:

matrix:             [1, 2, 3]
                    [4, 5, 6]
                    [7, 8, 9]

principal diagonal: [1, 5, 9]
secondary diagonal: [3, 5, 7]
Task
Your task is to find which diagonal is "larger": which diagonal has a bigger sum of their elements.

If the principal diagonal is larger, return "Principal Diagonal win!"
If the secondary diagonal is larger, return "Secondary Diagonal win!"
If they are equal, return "Draw!"
Note: You will always receive matrices of the same dimension. */

function diagonal(matrix) {
  let prinArr = [];
  let secArr = [];
  let i = 0;
  while (i < matrix.length) {
    prinArr.push(matrix[i][i]);
    i++;
  }


  let j = matrix.length - 1
  let v = 0;
  while (j >= 0) {
    secArr.push(matrix[v][j]);
    j--;
    v++;
  }
  const sumPrincipal = prinArr.reduce((aggr, val) => aggr + val);
  const sumSecondary = secArr.reduce((aggr, val) => aggr + val);

  if (sumPrincipal > sumSecondary) {
    return 'Principal Diagonal win!';
  } else if (sumPrincipal < sumSecondary) {
    return "Secondary Diagonal win!";
  } else {
    return "Draw!";
  }

}

//Alternative solution
// function diagonal(matrix) {
//   const p = matrix.map((cur, ind) => cur[ind]).reduce((acc, cur) => acc + cur);
//   const s = matrix.map((cur, ind, arr) => cur[arr.length - ind - 1]).reduce((acc, cur) => acc + cur);

//   return p > s ? 'Principal Diagonal win!' : p < s ? 'Secondary Diagonal win!' : 'Draw!';
// }

console.log(diagonal([
  [2, 2, 2],
  [4, 5, 6],
  [1, 8, 9]
]))// 'Principal Diagonal win!')
