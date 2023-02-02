/* Implement a function that adds two numbers together 
and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary) */

function addBinary(a, b) {
  return (a + b).toString(2);
}


//Alternative solution
// function addBinary(a, b) {
//   let x = a + b;
//   let bin = 0;
//   let rem, i = 1
//   while (x != 0) {
//     rem = x % 2;

//     x = parseInt(x / 2);
//     bin = bin + rem * i;

//     i = i * 10;
//   }
//   return bin;
// }


console.log(addBinary(5, 9));