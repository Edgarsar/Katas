/* 


Given the node object:

Node:
  val: <int>,
  left: <Node> or null,
  right: <Node> or null

write a function compare(a, b) which compares the two trees defined by 
Nodes a and b and returns true if they are equal in structure and in value and false otherwise.

 */







// With json stringify
function compare(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

// recursion
function compare(a, b) {
  if (a === null || b === null) {
    return a === b;
  }
  return a.val === b.val && compare(a.left, b.left) && compare(a.right, b.right);
}


// Lodash library
const _ = require('lodash'); 
function compare(a, b){
  return _.isEqual(a,b);
}


const aNode = { val: 1, left: null, right: null };
const bNode = { val: 1, left: null, right: null };
const cNode = { val: 2, left: null, right: null };

const results1 = compare(aNode, bNode);
console.log(results1, true);

const results2 = compare(aNode, cNode);
console.log(results2, false)