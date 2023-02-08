/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram.
 Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false */


const isIsogram = (str) => {
  const isogramObj = [...str.toLowerCase()].reduce((accum, num) => {
    accum[num] = (accum[num] || 0) + 1;
    return accum;
  }, {});
  return Object.values(isogramObj).every((val) => val === 1);
};

//Alternative using RegEx
// function isIsogram(str) {
//   return !/(\w).*\1/i.test(str)
// }


console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case");
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true, "an empty string is a valid isogram");