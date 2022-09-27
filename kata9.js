// Create a function named camelCase that will convert a string to camel case, and return the result.

const camelCase = function (input) {

  let splits = input.split(' ');
  let newString = "";

  for (let i = 0; i < splits.length; i++) {

    let words = splits[i];
    let firstLetter = words.charAt(0).toUpperCase();
    let restOfWord = words.slice(1);


    if (i === 0) {
      newString += words
    } else {
      newString += firstLetter + restOfWord;
    }

  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

