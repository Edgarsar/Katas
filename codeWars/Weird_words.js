/*
 Change every letter in a given string to the next letter in the alphabet.
  The function takes a single parameter s (string).

Notes:

Spaces and special characters should remain the same.
Capital letters should transfer in the same way but remain capitilized.
Examples
"Hello"               -->  "Ifmmp"
"What is your name?"  -->  "Xibu jt zpvs obnf?"
"zoo"                 -->  "app"
"zzZAaa"              -->  "aaABbb"
 */

function nextLetter(str) {
  const alph = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  return str.split("").map((e) => {
    let ind = alph.indexOf(e)
    if (ind !== -1) {
      if (ind === 25) {
        return alph[0];
      }
      if (ind === alph.length - 1) {
        return alph[26];
      }
      return alph[ind + 1];
    }
    return e
  }).join("")
}

// ALternative 

// function nextLetter(str) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA";
//   return str.split('').map(c => alphabet.includes(c) ? alphabet[alphabet.indexOf(c)+1] : c).join('');
// }

console.log(nextLetter("My Name Is Zoo"), "Nz Obnf Jt App");
console.log(nextLetter("What is your name"), "Xibu jt zpvs obnf");
console.log(nextLetter("zOo"), "aPp");