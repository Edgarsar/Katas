/* 

Input
Range is 0-999

There may be duplicates

The array may be empty

Example
Input: 1, 2, 3, 4
Equivalent names: "one", "two", "three", "four"
Sorted by name: "four", "one", "three", "two"
Output: 4, 1, 3, 2
Notes
Don't pack words together:
e.g. 99 may be "ninety nine" or "ninety-nine"; but not "ninetynine"
e.g 101 may be "one hundred one" or "one hundred and one"; but not "onehundredone"
Don't fret about formatting rules, because if rules are consistently applied it has no effect anyway:
e.g. "one hundred one", "one hundred two"; is same order as "one hundred and one", "one hundred and two"
e.g. "ninety eight", "ninety nine"; is same order as "ninety-eight", "ninety-nine"

*/

function sortByName(ary) {
  // Your code here
  const numberNames = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
  };

  const convertValue = (n) => {
    if (numberNames[n]) {
      return numberNames[n];
    } else if (n < 100) {
      return `${numberNames[+n.toString()[0] * 10]} ${numberNames[n % 10]}`;
    } else {
      return convertBigVal(n);
    }
  };

  const convertBigVal = (n) => {
    let res = numberNames[+n.toString()[0]] + " hundred";
    const restNum = n - +n.toString()[0] * 100;
    if (restNum) {
      res += " " + convertValue(restNum);
    }
    return res;
  };

  const convertedAry = ary.map((num) => {
    return { n: num, s: convertValue(num) };
  });
  convertedAry.sort((a, b) => (b.s > a.s ? -1 : a.s < b.s ? 1 : 0));
  return convertedAry.map((el) => el.n);
}

console.log(sortByName([8, 8, 9, 9, 10, 10]), [8, 8, 9, 9, 10, 10]);
console.log(sortByName([1, 2, 3, 4]), [4, 1, 3, 2]);
console.log(sortByName([9, 99, 999]), [9, 999, 99]);
