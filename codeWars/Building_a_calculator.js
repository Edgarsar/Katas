const Calculator = {
  add(num1, num2) { return num1 + num2 },

  subtract(num1, num2) { return num1 - num2 },

  multiply(num1, num2) { return num1 * num2 },

  divide(num1, num2) {
    if (!num2) {
      return false;
    }
    return num1 / num2;
  }
};

console.log(Calculator.add(2, 4), 6, '2+4=6');
console.log(Calculator.subtract(5, 3), 2, '5-3=2');
console.log(Calculator.multiply(9, 2), 18, '9x2=18');
console.log(Calculator.divide(12, 4), 3, '12/4=3');
console.log(Calculator.divide(33, 0), false, 'Tried to divide by zero');


// subtract(num1, num2) { return num1 - num2 }
// multiply(num1, num2) { return num1 * num2 }
// divide(num1, num2) {
//   if (!num2) {
//     return false
//   }
//   return num1 / num2
// }