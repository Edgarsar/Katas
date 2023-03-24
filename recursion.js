// counting all even numbers from 0 to 12 using recursion

function countEvenToTwelve(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number + 2);
  }
}

// countEvenToTwelve(0);


// return the sum of every whole number from n down to 1

function sumtoOne(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumtoOne(n - 1);
}

// console.log(sumtoOne(4));


// prints all items in an array

const printItems = function (array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  });
}

// console.log(printItems(["A", ["B", "C"], ["U", ["I", ["O", "Y"]], "L"], "D", "E"]))


// sums all the whole numbers from fromN to toN.  it would sum 3 + 4 + 5 + 6 + 7 and output 25.

function sum(fromN, toN) {
  if (toN === fromN) {
    return fromN
  }
  return toN + sum(fromN, toN - 1)
}

// console.log(sum(3, 7));



// sums all the numbers in an array.
function sumItems(array) {
  return array.reduce((aggr, val) => {
    if (Array.isArray(val)) {
      return aggr + sumItems(val)
    }

    return aggr + val;
  }, 0)

}

// console.log(sumItems([25])) // output 25
// console.log(sumItems([1, 3, 3, 5, 5])) // output 17
// console.log(sumItems([[1, 2, [[3], 4]], 5, []])) // output 15
// console.log(sumItems([[[5], [[[4]]], [[3], 2]], 1, []])) // output 15

// Math.pow() recursive function

function pow(a, b) {
  if (b === 0) {
    return 1
  }
  else {
    return a * pow(a, b - 1)
  }

}

console.log(pow(5, 3)) // output 3
