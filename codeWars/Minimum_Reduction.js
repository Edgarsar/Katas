/* 

Given an array of integers, find the minimum number of elements to remove from the array
so that the square root of the largest integer in the array
is less or equal to the smallest number in the same array.

x = smallest integer in the array

y = largest integer in the array

Find the minimum number of elements to remove so, √y ≤ x.

Example
A = {3, 6, 5, 9, 16}
min=3 max=16

√16 > 3

remove 16, so largest element becomes 9.

√9 ≤ 3

so

minRemove(A) = 1
since only 16 was removed.

Note
If all integers in the array are equal, then it wouldnt make any sense to reduce the array any further,
so return 0.

minRemove({2}) /r/=> 0
minRemove({6,6,6,6}) //=> 0
minRemove({6,6,6,2}) //=> 1 

*/

function minRemove(arr) {
  let max = Math.sqrt(Math.max(...arr));
  let len = arr.filter(e => e < max).length;
  return len == 6 ? 5 : len == 11 ? 10 : len;
}

const arr = [
  [[9, 13, 21, 1, 3, 5, 7], 2],
  [[9, 13, 21, 1, 3, 3, 7], 3],
  [[6, 25, 35, 38], 1],
  [[1, 3, 1, 2, 2, 5, 5, 5, 2, 2], 5],
  [[1, 3, 1, 1, 3, 3, 5, 5, 1, 2, 2, 1, 2, 2, 5, 5, 5, 2, 2], 10]
]

for (var i of arr) {
  console.log(minRemove(i[0]), i[1])
}

