/* 

Your job in this kata will be to make a program that checks a string for correct grouping.
For instance, the following groups are done correctly:

({})
[[]()]
[{()}]
The next are done incorrectly:

{(})
([]
[])
A correct string cannot close groups in the wrong order, 
open a group but fail to close it, or close a group before it is opened.

Your function will take an input string that may contain any of the symbols (), {} or [] to create groups.

It should return True if the string is empty or otherwise grouped correctly,
or False if it is grouped incorrectly.

*/

function groupCheck(s) {
  let matches = { '(': ')', '{': '}', '[': ']' };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];

    if (matches[currentChar]) {
      stack.push(currentChar);
    } else {
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
    console.log(stack)
  }

  return stack.length === 0;
}

console.log(groupCheck("()"), true, "That group was matched correctly");

console.log(groupCheck("{(})"), false, "That group was matched incorrectly");


console.log(groupCheck("[])"),false, "That group was left open or prematurely closed");