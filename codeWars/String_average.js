/* 

You are given a string of numbers between 0-9.
 Find the average of these numbers and return it as a floored whole number
  (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a" 

*/


function averageString(str) {
  const numObj = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
  };

  const average = Math.floor(str.split(" ").reduce((a, b, i, arr) => {
    return a + numObj[b] / arr.length;
  }, 0));

  for (const obj in numObj) {

    if (numObj[obj] === average) {
      return obj;
    }

  }
  return "n/a";
}


console.log(averageString("zero nine five two"), "four");
console.log(averageString("four six two three"), "three");
console.log(averageString("one two three four five"), "three");
console.log(averageString("five four"), "four");
console.log(averageString("zero zero zero zero zero"), "zero");
console.log(averageString("one one eight one"), "two");
console.log(averageString(""), "n/a");