// Create a function named multiplicationTable that receives a number maxValue as input 
// and creates a square multiplication table where maxValue is the largest value in the table.

const multiplicationTable = function (maxValue) {
  let result = "\n";

  for (let i = 1; i <= maxValue; i++) {

    for (let j = 1; j <= maxValue; j++) {
      result += (i * j) + " ";
    }

    result += '\n';
  }
  return result;
};


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

