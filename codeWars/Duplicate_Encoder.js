/* The goal of this exercise is to convert a string to a new string where each character in the new string is
 "(" if that character appears only once in the original string, or ")" 
 if that character appears more than once in the original string. 
 Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  */

function duplicateEncode(word) {
  return [...word.toLowerCase()].map((e, i, a) =>
    a.indexOf(e) === a.lastIndexOf(e) ? "(" : ")"
  ).join("");
}


/*  Alternative long Solution: 

function duplicateEncode(word) {
 
  const lowerCaseWord = word.toLowerCase();
  const obj = [...lowerCaseWord].reduce((accum, num) => {
    accum[num] = (accum[num] || 0) + 1;
    return accum;
  }, {});

  return [...lowerCaseWord].map((e)=>{
    if (obj[e] === 1){
      e = "("
    } else {
      e = ")"
    }
    return e
  }).join("");
} */

console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"), "))(("); 