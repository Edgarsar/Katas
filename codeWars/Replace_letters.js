/* 

In input string word(1 word):

replace the vowel with the nearest left consonant.
replace the consonant with the nearest right vowel.
P.S. To complete this task imagine the alphabet is a circle 
(connect the first and last element of the array in the mind).
 For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)

For example:

'codewars' => 'enedazuu'
'cat' => 'ezu'
'abcdtuvwxyz' => 'zeeeutaaaaa'
It is preloaded:

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const vowels = ['a','e','i','o','u'];
P.S. You work with lowercase letters only.

*/

function replaceLetters(word) {
  const charMap = {
    'a': 'z', 'b': 'e', 'c': 'e', 'd': 'e', 'e': 'd', 'f': 'i', 'g': 'i', 'h': 'i', 'i': 'h',
    'j': 'o', 'k': 'o', 'l': 'o', 'm': 'o', 'n': 'o', 'o': 'n', 'p': 'u', 'q': 'u', 'r': 'u',
    's': 'u', 't': 'u', 'u': 't', 'v': 'a', 'w': 'a', 'x': 'a', 'y': 'a', 'z': 'a'
  };

  return word.split('').map(e => charMap[e]).join('');
}

//Alternative RegEx woth replace
const replaceLetters = w => w.replace(/./g, v => 'zeeediiihooooonuuuuutaaaaa'[v.charCodeAt(0) - 97]);

console.log(replaceLetters('cat'), 'ezu');
console.log(replaceLetters('codewars'), 'enedazuu');
console.log(replaceLetters('abcdtuvwxyz'), 'zeeeutaaaaa');