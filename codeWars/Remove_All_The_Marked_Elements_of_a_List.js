/* 

Define a method/function that removes from a given array of integers all the values contained in a second array.

Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1] 

*/

Array.prototype.remove_ = function (integerList, valuesList) {
  return integerList.filter(e => valuesList.indexOf(e) < 0);
}

//Alternative
// Array.prototype.remove_ = (x, y) => x.filter(e => !y.includes(e));

const l = new Array()

const integerList = [1, 1, 2, 3, 1, 2, 3, 4]
const valuesList = [1, 3]
console.log(l.remove_(integerList, valuesList), [2, 2, 4])

const integerList1 = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8]
const valuesList1 = [1, 3, 4, 2]
console.log(l.remove_(integerList1, valuesList1), [5, 6, 7, 8])

const integerList2 = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3]
const valuesList2 = [2, 4, 3]
console.log(l.remove_(integerList2, valuesList2), [8, 7, 6, 5, 1])

const integerList3 = [4, 4, 2, 3]
const valuesList3 = [2, 2, 4, 3]
console.log(l.remove_(integerList3, valuesList3), [])

const integerList4 = []
const valuesList4 = [2, 2, 4, 3]
console.log(l.remove_(integerList4, valuesList4), [])