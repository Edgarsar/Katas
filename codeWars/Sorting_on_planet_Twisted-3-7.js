/* 

There is a planet... in a galaxy far far away. 
It is exactly like our planet, but it has one difference: 
#The values of the digits 3 and 7 are twisted. Our 3 means 7 on the planet Twisted-3-7. And 7 means 3.

Your task is to create a method, that can sort an array the way it would be sorted on Twisted-3-7.

7 Examples from a friend from Twisted-3-7:

[1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
[12,13,14] -> [12,14,13]
[9,2,4,7,3] -> [2,7,4,3,9]
There is no need for a precheck. 
The array will always be not null and will always contain at least one number.

You should not modify the input array!


*/

function replace3And7(arr) {
  return arr.map((e) => {
    return +(e + "").replace(/3|7/g, function (matched) {
      if (matched === "3") {
        return 7;
      }
      if (matched === "7") {
        return 3;
      }
    });

  })
}

function sortTwisted37(array) {

  let newArray = replace3And7(array).sort((a, b) => a - b);
  return replace3And7(newArray);

}




console.log(sortTwisted37([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 7, 4, 5, 6, 3, 8, 9]);
console.log(sortTwisted37([12, 13, 14]), [12, 14, 13]);
console.log(sortTwisted37([9, 2, 4, 7, 3]), [2, 7, 4, 3, 9]);

console.log(sortTwisted37([-15, -28, -7, -4, -5, -30, 11, 21, 27, 27, 25, 71, 76, 47, 53, 59, 59, 6, 31, 38]))