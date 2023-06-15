/* 

Find the sum of the digits of all the numbers from 1 to N (both ends included).

Examples
# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51


*/

// my solution
// function countUpToNine(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i
//   }
//   return sum;
// }

// function twistedSum(n) {
//   let sum = 0;

//   if (n <= 9) {
//     return countUpToNine(n)
//   }

//   let rest = n - 9;
//   for (let i = 1; i <= rest; i++) {
//     let add = [...(9 + i) + ""].reduce((a, b) => Number(a) + Number(b));
//     sum += add;
//   }
//   return 45 + sum;

// }


// alternative

function twistedSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i < 10) {
      sum += i;
    } else {
      sum += i.toString().split("").reduce((a, b) => Number(a) + Number(b));
    }
  }
  return sum;
}

console.log(twistedSum(3), 6, "n = 3");
console.log(twistedSum(10), 46, "n = 10");
console.log(twistedSum(11), 48, "n = 11");
console.log(twistedSum(12), 51, "n = 12"); 