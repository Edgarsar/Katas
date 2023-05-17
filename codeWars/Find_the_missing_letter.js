/* 

Write a method that takes an array of consecutive (increasing) letters as input 
and that returns the missing letter in the array.

You will always get an valid array.
And it will be always exactly one letter be missing.
The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

 */


function findMissingLetter(array) {

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const isUpperCase = array[0] === array[0].toUpperCase();

  let alphaIndex = alphabet.indexOf(array[0].toLowerCase());

  let letterPos;

  array.forEach(el => {
    if (el.toLowerCase() !== alphabet[alphaIndex]) {
      letterPos = alphaIndex;
    } else {
      alphaIndex++;
    }
  });

  return isUpperCase ? alphabet[letterPos].toUpperCase() : alphabet[letterPos];

}
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
console.log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
