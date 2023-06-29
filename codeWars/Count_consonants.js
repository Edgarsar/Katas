/* 

Complete the function that takes a string of English-language text
and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

 */


function consonantCount(str) {
  return str.replace(/[aeiouAEIOU\d/\W|_]/g, "").length;
}


console.log(consonantCount(''), 0);

console.log(consonantCount('aeiouAEIOU'), 0);
console.log(consonantCount('aaa'), 0);

console.log(consonantCount('bcdfghjklmnpqrstvwxyz'), 21);
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'), 42);

console.log(consonantCount('y'), 1);
console.log(consonantCount('Y'), 1);

console.log(consonantCount('01234567890_'), 0);

console.log(consonantCount(' ^&$#'), 0);

console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#'), 42);