/* 

Complete the solution so that it returns true 
if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false 


*/

function solution(str, ending) {
  if (ending === "") {
    return true;
  }

  let arr = str.split(ending);

  return arr[arr.length - 1] === "";
}

//Alternstive using String.prototype.endsWith()
// function solution(str, ending) {
//   return str.endsWith(ending);
// }


console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)
console.log(solution('abc', ''), true);