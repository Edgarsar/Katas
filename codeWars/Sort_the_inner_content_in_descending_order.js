/* 


You have to sort the inner content of every word of a string in descending order.

The inner content is the content of a word without first and the last char.

Some examples:

"sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me"        -->  "wiat for me"
"this kata is easy"  -->  "tihs ktaa is esay"
Words are made up of lowercase letters.

The string will never be null and will never be empty. 

*/

function sortTheInnerContent(words) {
  return words.split(" ").map((e) => {
    const rest = e.slice(1, e.length - 1);
    const first = e[0], last = e[e.length - 1];

    if (e.length <= 1) {
      return e;
    }

    return first + [...rest].sort((a, b) => {
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
    }).join("") + last
  }).join(" ");
}

// Regular expression
// function sortTheInnerContent(words){
//   return words.replace(/\B\w+(?=\w)/g, x => x.split('').sort().reverse().join(''));
// }


console.log(sortTheInnerContent("sort the inner content in descending order"), "srot the inner ctonnet in dsnnieedcg oredr");
console.log(sortTheInnerContent("wait for me"), "wiat for me");
console.log(sortTheInnerContent("this kata is easy"), "tihs ktaa is esay");