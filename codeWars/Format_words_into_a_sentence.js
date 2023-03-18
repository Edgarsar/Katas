/* Complete the method so that it formats the words into a single comma separated value.
 The last word should be separated by the word 'and' instead of a comma. 
 The method takes in an array of strings and returns a single formatted string.

Note:

Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->"" */

const formatWords = (words) => {
  let res = "";
  if (!words) {
    return "";
  }

  const noEmptyStrings = words.filter((str) => str !== '');

  if (noEmptyStrings.length === 1) {
    return noEmptyStrings.join("")
  }

  for (let i = 0; i < noEmptyStrings.length; i++) {
    if (i === noEmptyStrings.length - 1) {
      res += "and " + noEmptyStrings[i];
    }
    else if (i === noEmptyStrings.length - 2) {
      res += noEmptyStrings[i] + " ";

    } else {

      res += noEmptyStrings[i] + ", ";
    }
  }
  return res;
};


console.log(formatWords(['one', 'two', 'three', 'four']), 'one, two, three and four')
console.log(formatWords(['one']), 'one')
console.log(formatWords(['one', '', 'three']), 'one and three')
console.log(formatWords(['', '', 'three']), 'three')
console.log(formatWords(['one', 'two', '']), 'one and two',)
console.log(formatWords([]), '')
console.log(formatWords(null), '')
console.log(formatWords(['']), '')