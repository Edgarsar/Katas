/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

const duplicateCount = (text) => {
  const lowerCaseWord = text.toLowerCase();
  const obj = [...lowerCaseWord].reduce((accum, num) => {
    accum[num] = (accum[num] || 0) + 1;
    return accum;

  }, {});
  return Object.keys(obj).filter(e => obj[e] > 1).length;
};


//Alterantive solution
// const duplicateCount = (text) => {
//   let arr = [];
//   const lowertCase = text.toLowerCase()
//   for (let i = 0; i< lowertCase.length; i++){
//     let val = lowertCase[i];
//     if (lowertCase.indexOf(val) !== lowertCase.lastIndexOf(val)){
//       arr.push(val)
//     }
//   }

//   return arr.filter((e,i,a)=>{
//     return a.indexOf(e) === i
//   }).length;
// };

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")