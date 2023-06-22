/* 

Write function alternateCase which switch every letter in string from upper to lower
and from lower to upper. E.g: Hello World -> hELLO wORLD 

*/

function alternateCase(s) {

  let str = "";

  for (const letter of s) {
    if (letter === letter.toUpperCase()) {
      str += letter.toLowerCase();
    } else {
      str+= letter.toUpperCase();
    }
  }
  return str;

}


//Alternative regEx

function alternateCase(s) {
  return s.replace(/./g, x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase());
}

console.log(alternateCase("abc"), "ABC");
console.log(alternateCase("ABC"), "abc");
console.log(alternateCase("Hello World"), "hELLO wORLD"); 