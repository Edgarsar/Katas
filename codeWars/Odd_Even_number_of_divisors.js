/* 
Given an integer n return "odd" if the number of its divisors is odd. Otherwise return "even".

Note: big inputs will be tested.

Examples:
All prime numbers have exactly two divisors (hence "even").

For n = 12 the divisors are [1, 2, 3, 4, 6, 12] – "even".

For n = 4 the divisors are [1, 2, 4] – "odd". 
*/
// function oddity(n) {
//   let divisors = 0
//   for (let i = 0; i <= n; i++) {
//     if (n % i === 0) {
//       divisors++
//     }
//   }
//   return divisors % 2 === 0 ? "even" : "odd"
// }


//Alternative 
const oddity = (n) => Math.sqrt(n) % 1 ? "even" : "odd";


console.log(oddity(1), 'odd');
console.log(oddity(5), 'even');
console.log(oddity(16), 'odd');
