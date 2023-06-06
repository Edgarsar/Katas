/* 

In this Kata, you will be given an array of integers 
and your task is to return the number of arithmetic progressions of size 3 
that are possible from that list. In each progression, 
the differences between the elements must be the same.

[1, 2, 3, 5, 7, 9] ==> 5
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]
All array elements will be unique and sorted. 

*/



function solve(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr.indexOf(2 * arr[j] - arr[i]) > 0) {
        result++;
      }
    }
  }

  return result;
}



console.log(solve([1, 2, 3, 4, 5]), 4);
console.log(solve([1, 2, 3, 5, 7, 9]), 5);
console.log(solve([0, 5, 8, 9, 11, 13, 14, 16, 17, 19]), 10);
console.log(solve([0, 1, 2, 3, 5, 6, 7, 11, 13, 15, 17, 19]), 17);
console.log(solve([0, 1, 4, 5, 7, 9, 10, 13, 15, 16, 18, 19]), 15);
console.log(solve([0, 1, 2, 3, 5, 8, 11, 13, 14, 16, 18, 19]), 13);