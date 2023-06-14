/* 

Write a method checkerboard/Checkerboard which takes an integer size and returns a checkerboard of dimensions size x size.
There are two colored squares on the checkerboard. 
Red squares are represented by the string [r] and black squares are represented by the string [b]. 
You MUST use the newline character \n to insert a newline at the end of each row.

The top left corner should be a red square.
Each row should have alternating squares in the row.
The starting square on each row should also alternate.
Assumptions
You can assume you are given an integer size.
You cannot assume positive values.
Thus you should return an empty string for negative sizes and a size of 0. (An empty string does not have a newline ending).
You should assume the newline character used is \n.
You MUST leave a newline character at the end of the full checkerboard
thus allowing the board to be on its own if you were to run in a terminal.
Examples

checkerboard(8);
"[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]
[r][b][r][b][r][b][r][b]
[b][r][b][r][b][r][b][r]" 

*/

function checkerboard(size) {

  if (size <= 0) {
    return "";
  }

  let board = "";

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 === 0) {
        board += "[r]";
      } else {
        board += "[b]";
      }
    }
    board += "\n";
  }
  return board
};


console.log(checkerboard(0), "");
console.log(checkerboard(5), "[r][b][r][b][r]\n[b][r][b][r][b]\n[r][b][r][b][r]\n[b][r][b][r][b]\n[r][b][r][b][r]\n");
console.log(checkerboard(8), "[r][b][r][b][r][b][r][b]\n[b][r][b][r][b][r][b][r]\n[r][b][r][b][r][b][r][b]\n[b][r][b][r][b][r][b][r]\n[r][b][r][b][r][b][r][b]\n[b][r][b][r][b][r][b][r]\n[r][b][r][b][r][b][r][b]\n[b][r][b][r][b][r][b][r]\n");
