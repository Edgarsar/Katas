/* 
Given two arrays of strings a1 and a2 
return a sorted array r in lexicographical order of the strings
of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

 */

function inArray(array1, array2) {
  //sort array based on another array
  // const sortedArray = array1.sort((a, b) => array2.indexOf(a) - array2.indexOf(b));

  return array1
    .filter(e => array2.join(" ").indexOf(e) !== -1)
    .sort();

}


const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

const a1 = ["xyz", "live", "strong"]
const a3 = ["live", "strong", "arp"]
const a4 = ["tarp", "mice", "bull"]

console.log(inArray(a1, a2), ["live", "strong"]);
console.log(inArray(a3, a2), ["arp", "live", "strong"]);
console.log(inArray(a4, a2), []);





