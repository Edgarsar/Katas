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

console.log(printItems(["A", ["B", "C"], ["U", ["I", ["O", "Y"]], "L"], "D", "E"]))