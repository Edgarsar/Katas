/* You'll be given a string of characters as an input. Complete the function that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.

Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.

Examples
'123'   ==>  ['321', '21', '1']
'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']
 */


function reverseSlice(str) {
  let arr = [];
  let newStr = '';
  let reverseStr = [...str].reverse().join("");
  for (let i = reverseStr.length - 1; i >= 0; i--) {
    newStr += reverseStr[i];
    arr.push(newStr);

  }
  return arr.map((e) => {
    return [...e].reverse().join("");
  }).reverse();

}

//reverseSlice = s => (s = s.split('').reverse().join('')).split('').map((e, i) => e = s.slice(i));