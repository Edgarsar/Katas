/* 

Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  [] 

*/

// Solution 1
function alternate(n, firstValue, secondValue) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(i % 2 === 0 ? firstValue : secondValue)
  }
  return array;
}

// Solution 2
function alternate(n, firstValue, secondValue) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(firstValue, secondValue);
  }
  return arr.slice(0, n);
}



console.log(alternate(5, true, false), [true, false, true, false, true])

console.log(alternate(20, 'blue', 'red'), ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red'])

console.log(alternate(0, "lemons", "apples"), [])