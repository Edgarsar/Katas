/* 

Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters
then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str) {
  let substrings = [];

  if (str.length % 2) {
    str = str + "_";
  }

  for (let i = 2, k = 0; i <= str.length; i += 2, k += 2) {

    substrings.push(str.slice(k, i));
  }
  return substrings;

}

// RegEx
/* function solution(s){
  return (s+"_").match(/.{2}/g)||[]
} */

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);