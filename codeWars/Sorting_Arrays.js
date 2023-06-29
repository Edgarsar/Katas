/* 


Given two arrays, a1 and a2, sort the elements of a2 based on 
the the index of the word in a1 that begins with the same letter.

  Example 1
a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
Example 2
a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
Each element in the arrays will start with a unique letter 
so there will only be a single match for each element.

*/


function sortArray(a1, a2) {
  let firstLetters = a1.map(e => e[0]);
  return a2.sort((a, b) => firstLetters.indexOf(a[0]) - firstLetters.indexOf(b[0]));
}


const a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
const a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
console.log(sortArray(a1, a2), ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']);

const a3 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
const a4 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
console.log(sortArray(a3, a4), ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']);

const a5 = ['newt', 'lizard', 'snail', 'tapir', 'rabbit'];
const a6 = ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'];
console.log(sortArray(a5, a6), ['narwhal', 'llama', 'sloth', 'tortoise', 'raven']);
