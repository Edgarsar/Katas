// Create a function named camelCase that will convert a string to camel case, and return the result.

const camelCase = function (input) {
  const splitInput = input.split(" ");

  if (splitInput.length <= 1) {
    return input;
  }

  return splitInput.map((e) => {
    return e.charAt(0).toUpperCase() + e.substring(1, e.length).toLowerCase();
  }).join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

