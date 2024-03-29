/* 

  Write a function that takes a string of braces,
 and determines if the order of the braces is valid.
  It should return true if the string is valid, and false if it's invalid.

  All input strings will be nonempty, 
  and will only consist of parentheses, brackets and curly braces: ()[]{}.
  
  What is considered Valid?
  A string of braces is considered valid if all braces are matched with the correct brace.
  
  Examples
  "(){}[]"   =>  True
  "([{}])"   =>  True
  "(}"       =>  False
  "[(])"     =>  False
  "[({})](]" =>  False 
  
  */

function validBraces(braces) {
  let matches = { '(': ')', '{': '}', '[': ']' };
  let stack = [];

  for (let i = 0; i < braces.length; i++) {
    let currentChar = braces[i];

    if (matches[currentChar]) {
      stack.push(currentChar);
    } else {
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validBraces("()))"), false);
// console.log(validBraces("()"), true);
// console.log(validBraces("[]"), true);
// console.log(validBraces("{}"), true);
// console.log(validBraces("(){}[]"), true);
// console.log(validBraces("([{}])"), true);
// console.log(validBraces("(}"), false);
// console.log(validBraces("[(])"), false);
// console.log(validBraces("({})[({})]"), true);
// console.log(validBraces("(})"), false);