/* 

Your job here is to write a function keepOrder, which takes a sorted array ary and a value val,
and returns the lowest index where you could insert val to maintain the sorted-ness of the array.
The input array will always be sorted in ascending order. It may contain duplicates.

Do not modify the input.

Some examples:
keepOrder([1, 2, 3, 4, 7], 5) //=> 4
                      ^(index 4)
keepOrder([1, 2, 3, 4, 7], 0) //=> 0
          ^(index 0)
keepOrder([1, 1, 2, 2, 2], 2) //=> 2
                ^(index 2) 
                
                */


function keepOrder(arr, val) {
  let newArr = arr.slice();
  newArr.push(val);
  return newArr.sort((a, b) => a - b).indexOf(val);
}


//Smart solution
function keepOrder(ary, val) {
  return ary.filter(a => a < val).length;
}

console.log(keepOrder([1, 2, 3, 4, 7], 5), 4);
console.log(keepOrder([1, 2, 3, 4, 7], 0), 0);
console.log(keepOrder([1, 1, 2, 2, 2], 2), 2);
console.log(keepOrder([1, 2, 3, 4], 5), 4);
console.log(keepOrder([1, 2, 3, 4], -1), 0);
console.log(keepOrder([1, 2, 3, 4], 2), 1);
console.log(keepOrder([1, 2, 3, 4], 0), 0);
console.log(keepOrder([1, 2, 3, 4], 1), 0);
console.log(keepOrder([1, 2, 3, 4], 2), 1);
console.log(keepOrder([1, 2, 3, 4], 3), 2);
console.log(keepOrder([-5, -4, -2, -1, 1, 2], -2), 2);