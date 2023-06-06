/* 

Given two array of integers(arr1,arr2). 
Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), 
their difference is as big as possible(absolute value); Again, you should to find a pair of numbers, 
their difference is as small as possible. 
Return the maximum and minimum difference values by an array: [  max difference,  min difference  ]

For example:

Given arr1 = [3,10,5], arr2 = [20,7,15,8]
should return [17,2] because 20 - 3 = 17, 10 - 8 = 2
Note:
arr1 and arr2 contains only integers(positive, negative or 0);
arr1 and arr2 may have different lengths, they always has at least one element;
All inputs are valid. 

*/

function maxAndMin(arr1, arr2) {
  let maxDiff = 0, minDiff = 0;

  const min1 = Math.min(...arr1);
  const min2 = Math.min(...arr2);
  const max1 = Math.max(...arr1);
  const max2 = Math.max(...arr2);

  minDiff = Math.abs(max1 - max2);
  maxDiff = Math.abs(min1 - min2);

  for (const item1 of arr1) {
    for (const item2 of arr2) {
      if (Math.abs(item1 - item2) > maxDiff) {
        maxDiff = Math.abs(item1 - item2);
      }
      if (Math.abs(item1 - item2) < minDiff) {
        minDiff = Math.abs(item1 - item2);
      }

    }
  }
  return [maxDiff, minDiff];
}


console.log(maxAndMin([3, 10, 5], [20, 7, 15, 8]), [17, 2])
console.log(maxAndMin([3], [20]), [17, 17])
console.log(maxAndMin([3, 10, 5], [3, 10, 5]), [7, 0])
console.log(maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [9, 1])