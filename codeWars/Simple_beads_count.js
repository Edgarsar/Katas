/* /* Two red beads are placed between every two blue beads. 
There are N blue beads.
 After looking at the arrangement below work out the number of red beads.

@ 🛑🛑 @ 🛑🛑 @ 🛑🛑 @ 🛑🛑 @ 🛑🛑 @  

Implement countRedBeads(n)) function so that it returns the number of red beads.
If there are less than 2 blue beads return 0./*  */


function countRedBeads(n) {
  let blueBeads = 2;
  if (n < 2) {
    ;
    return 0;
  }
  while (n > 2) {
    blueBeads = blueBeads + 2;
    n --;
  }
  return blueBeads;
}


//Short solution
// const countRedBeads = n => n < 2 ? 0 : (n-1) * 2;

console.log(countRedBeads(0), 0);
console.log(countRedBeads(1), 0);
console.log(countRedBeads(3), 4);
console.log(countRedBeads(5), 8);