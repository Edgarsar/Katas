/* 
Write a function called toNumber which takes a binary string 
and returns the numeric value that it represents.
Read binary numbers from right to left.  If you don’t know how binary numbers work, ask google :)

 Example:

     toNumber(“101”);  // should return 5
     toNumber(“111”);  // should return 7
     toNumber("1011") // should return 11
 */


const toNumber = (binaryStr) => {
  return [...binaryStr]
    .reverse()
    .map((e, i) =>
      e === "1" ? 2 ** i : 0)
    .reduce((aggr, val) => aggr + val)
}

console.log(toNumber("101"));  // should return 5
console.log(toNumber("111"));  // should return 7
console.log(toNumber("1011")) // should return 11