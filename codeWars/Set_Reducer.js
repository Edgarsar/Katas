/* 
Write a function that takes in an array of integers from 0-9, and returns a new array:

Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
Example

[0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

Your function should then repeat the process on the resulting array,
and on the resulting array of that, until it returns a single integer:

[0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

When your function has reduced the array to a single integer following these rules, it should return that integer.

[2] => 2

Rules and assertions
All test arrays will be 2+ in length
All integers in the test arrays will be positive numbers from 0 - 9
You should return an integer, not an array with 1 element
 */


function setReducer(input) {
  let result = [];
  let count = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[i + 1]) {
      result.push(count)
      count = 1
    }
    else count++
  }
  return result.length === 1 ? result[0] : setReducer(result)
}



const sampleTests = [
  {
    input: [0, 4, 6, 8, 8, 8, 5, 5, 7],
    output: 2,
  },
  {
    input: [9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2],
    output: 3,
  },
  {
    input: [1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0],
    output: 13,
  },
  {
    input: [0, 2, 7, 0, 0, 6, 2, 1, 2, 2, 3, 4],
    output: 5,
  },
  {
    input: [9, 6, 3, 3, 3, 6, 7, 5, 2, 4, 1, 6, 9],
    output: 3,
  },
  {
    input: [5, 8, 1, 0, 5, 0, 6, 5, 8, 4, 4, 9, 7],
    output: 3,
  },
  {
    input: [5, 7, 7, 8, 7, 8, 6, 3, 5, 9, 0, 9, 1, 1],
    output: 2,
  },
  {
    input: [7, 9, 7, 3, 3, 5, 3, 4, 9, 4, 3],
    output: 3,
  },
  {
    input: [6, 0, 5, 9, 5, 0, 0, 2, 5, 0],
    output: 3,
  },
];

for (let testCase of sampleTests) {
  // console.log(setReducer(testCase.input), testCase.output);
}