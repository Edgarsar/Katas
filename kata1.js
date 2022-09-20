const sumLargestNumbers = function (data) {

  const sort = data.sort((a, b) => b - a);
  return sort[0] + sort[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


