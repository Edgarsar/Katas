// Create a function named repeatNumbers that will return a string with each of the given values
//  repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. 
//  If there is only one set of values then you should omit the comma.

const repeatNumbers = function (data) {

  return data.map(e => {
    return e[0].toString().repeat(e[1])
  }).join(", ");


};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


