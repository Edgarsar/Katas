/* 

For a given DNA genetic code represented by a string, 
count the number of times the letters A (adenine), C (cytosine), G (guanine) and T (thymine) 
appears and return and object.

The input string may contain both upper and lower case characters.

For example:


const genCode = 'aCCggT';

getCountedNucleotides(genCode); // return {A: 1, C: 2, G: 2, T: 1}
Also, should a nucleotide type not be present within the string,
it should still be present in the object returned with it's value as 0. For example:

const genCode = 'ACG';

getCountedNucleotides(genCode); // return {A: 1, C: 1, G: 1, T: 0}

*/

// function getCountedNucleotides(genCode) {
//   const gen = [...genCode]
//     .map(e => e.toUpperCase())
//     .reduce((obj, key) => {
//       obj[key] = (obj[key] || 0) + 1;
//       return obj;
//     }, {});


//   ["A", "C", "G", "T"].forEach(element => {
//     if (!gen[element]) {
//       gen[element] = 0;
//     }
//   });

//   return gen;
// }

//Alterantive 
function getCountedNucleotides(genCode) {
  const code = genCode.toUpperCase();
  let counts = { A: 0, C: 0, G: 0, T: 0 };

  for (let i = 0; i < code.length; i++) {
    counts[code[i]]++;
  }

  return counts;
}


const genCode1 = 'aCCggT';

console.log(getCountedNucleotides(genCode1), { A: 1, C: 2, G: 2, T: 1 });



const genCode2 = 'ACG';

console.log(getCountedNucleotides(genCode2), { A: 1, C: 1, G: 1, T: 0 });




