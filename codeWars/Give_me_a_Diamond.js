/* 

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters.
Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null if the input is an even number or negative,
 as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n" 

*/

function stars(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += "*";
  }
  return str;
}


function spaces(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += " ";
  }
  return str;
}



function diamond(n) {
  let ans = "";

  if (n <= 0 || !(n % 2)) {
    return null;
  }

  let leftSpaces = n / 2 - 1;

  for (let i = 1; i < n; i += 2) {
    ans += spaces(leftSpaces) + stars(i) + "\n";
    leftSpaces--;
  }


  for (let i = n; i > 0; i -= 2) {
    ans += spaces(leftSpaces) + stars(i) + "\n";
    leftSpaces++;

  }
  return ans;
}


console.log(diamond(1), "*\n")
console.log(diamond(3))//, " *\n***\n *\n")
console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
console.log(diamond(2), null)
console.log(diamond(-3), null)
console.log(diamond(0), null)