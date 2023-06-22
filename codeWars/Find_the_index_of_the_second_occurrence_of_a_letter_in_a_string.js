/* 

In this kata, you need to write a function that takes a string and a letter as input
and then returns the index of the second occurrence of that letter in the string. 
If there is no such letter in the string, 
then the function should return -1. 
If the letter occurs only once in the string, then -1 should also be returned.

Examples:

secondSymbol('Hello world!!!','l')  --> 3
secondSymbol('Hello world!!!', 'A') --> -1 

*/

function secondSymbol(s, symbol) {

  let position = s.indexOf(symbol);
  return s.indexOf(symbol, position + 1);
}




console.log(secondSymbol('Hello world!!!', 'l'), 3, 'Find the index of the second symbol "l" in the string');
console.log(secondSymbol('Hello world!!!', 'o'), 7, 'Find the index of the second symbol "o" in the string');
console.log(secondSymbol('Hello world!!!', 'A'), -1, 'The symbol "A" is not in the string');
console.log(secondSymbol('', 'q'), -1, 'The symbol "q" is not in the string');
console.log(secondSymbol('Hello', '!'), -1, 'The symbol "!" is not in the string');