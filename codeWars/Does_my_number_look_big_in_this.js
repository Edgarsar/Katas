/* A Narcissistic Number(or Armstrong Number) is a positive
 number which is the sum of its own digits, each raised to the power 
 of the number of digits in a given base.In this Kata, we will restrict ourselves to decimal(base 10).

For example, take 153(3 digits), which is narcissistic:

1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153
and 1652(4 digits), which isn't:

1 ^ 4 + 6 ^ 4 + 5 ^ 4 + 2 ^ 4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false(not 'true' and 'false') 
depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required,
 only valid positive non - zero integers will be passed into the function.


 */
function narcissistic(value) {
  let res = 0;
  const length = (value + "").length;
  for (let i = 0; i < length; i++) {
    res += Math.pow(+(value + "")[i], length);
  }

  return res === value;
}

// Alternative solution with reduce
// function narcissistic( value ) {
//   return ('' + value).split('').reduce(function(p, c){
//     return p + Math.pow(c, ('' + value).length)
//     }, 0) === value;
// }


console.log(narcissistic(7), true);
console.log(narcissistic(153), true);
console.log(narcissistic(122), false);
console.log(narcissistic(487), false);