/* 
You are given two arrays arr1 and arr2, where arr2 always contains integers.

Write a function such that:

For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] the function returns ['a', 'a']

For arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] the function returns [1, 1, 1]

For arr1 = [0, 3, 4], arr2 = [2, 6] the function returns [4]

For arr1=["a","b","c","d"] , arr2=[2,2,2], the function returns ["c","c","c"]

For arr1=["a","b","c","d"], arr2=[3,0,2] the function returns ["d","a","c"]

Note that when an element inside arr2 is greater than the index of the last element of arr1
 no element of arr1 should be added to the resulting array.
  If either arr1 or arr2 is empty, you should return an empty arr 
  
  */

function findArray(arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr2.length; i++) {

    res.push(arr1[arr2[i]]);

  }
  return res.filter(Boolean);
}

//Alternative
// function findArray(arr1, arr2) {
//   return arr1.length === 0 ? [] : arr2.map(item => arr1[item]);
// }

console.log(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]), ['a', 'a'])
console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]), [1, 1, 1])
console.log(findArray([1, 2, 3, 4, 5], [0]), [1])
console.log(findArray([1, 2, 3, 4, 5], [4, 2, 0]), [5, 3, 1])
console.log(findArray([1, 2, 3, 4, 5], [2, 2, 2]), [3, 3, 3])
console.log(findArray(['this', 'is', 'test'], [0, 1, 2]), ['this', 'is', 'test'])
console.log(findArray([1, 2, 3], []), [])
console.log(findArray([], [2, 1, 3]), [])
console.log(findArray([], []), [])