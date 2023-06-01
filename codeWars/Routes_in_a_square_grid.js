

/* 
Given a side length n, traveling only right and down how many ways are there to get
from the top left corner to the bottom right corner of an n by n grid?

Your mission is to write a program to do just that!

Add code to route(n) that returns the number of routes for a grid n by n (if n is less than 1 return 0).

Examples:

-100 -> 0

1 -> 2
 
2 -> 6
 
20 -> 137846528820
Note: you're traveling on the edges of the squares in the grid not the squares themselves.

 */




const routes = (n) => {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    console.log("i", i)
    ans = ans * (i + n) / i;
    console.log(ans)
  }
  return n <= 0 ? 0 : Math.round(ans);
};


// console.log(routes(1), 2);
console.log(routes(2), 6);
// console.log(routes(3), 20);
// console.log(routes(20), 137846528820);
// console.log(routes(-4), 0);