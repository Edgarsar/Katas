/* Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata */


const shortcut = (string) => {
  let vowels = "aeiou"
  return [...string].filter((el) =>
    vowels.includes(el) ? "" : el
  ).join("");
};


//Alternative solution using RegEx
// function shortcut(string){
//   return string.replace(/[aeiou]/g,'')
// }



console.log(shortcut("hello")) // => hll
console.log(shortcut('how are you today?'))//, 'hw r y tdy?');))