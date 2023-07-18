/* 

Vampire Numbers
Our loose definition of Vampire Numbers can be described as follows:

6 * 21 = 126
# 6 and 21 would be valid 'fangs' for a vampire number as the 
# digits 6, 1, and 2 are present in both the product and multiplicands

10 * 11 = 110
# 110 is not a vampire number since there are three 1's in the
# multiplicands, but only two 1's in the product
Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.

 */

function vampireTest(a, b) {

  let product = (a * b) + "";
  let vampire = String(a) + String(b);


  return [...vampire].sort().join("") === [...product].sort().join("");
}

console.log(vampireTest(21, 6), true, "Basic: 21 * 6 = 126 should return true")
console.log(vampireTest(10, 11), false, "Basic: 10 * 11 = 110 should return false")


console.log(vampireTest(204, 615), true, "Basic: 204 * 615 = 125460 should return true")
console.log(vampireTest(30, -51), true, "One Negative: 30 * -51 = -1530 should return true")
console.log(vampireTest(-246, -510), false, "Double Negatives: -246 * -510 = 125460 should return false (The negative signs aren't present on the product)")
console.log(vampireTest(2947050, 8469153), true, "Large: 2947050 * 8469153 = 24959017348650 should return true")
console.log(vampireTest(2947051, 8469153), false, "Large: 2947051 * 8469153 = 24959025817803 should return false")  