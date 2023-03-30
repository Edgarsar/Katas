/* 
Use the search function to create a funtion called find that takes an array of objects
 and a search string and returns an array containing all objects that have a value for which the given search string exists.
Assume that none of the objects in the input array references any other objects or arrays. 


Hint: Use Object.keys to access all keys of a given object and loop through all values looking for a match

Examples: 

    find([
        { name: "Apple", color: "red" },
        { name: "Banana", color: "yellow" },
        { name: "Orange", color: "orange" },
        { name: "Apple", color: "yellow" }
    ], "yellow"); 
     Should return [{ name: "Banana", color: "yellow" }, { name: "Apple", color: "yellow" }]

    find([
       { title: "White Fang", author: "Jack London" },
       { title: "The Adventures of Tom Sawyer", author: "Mark Twain" }
    ], "Twain"); 
     Should return [{ title: "The Adventures of Tom Sawyer”, author: "Mark Twain" }]
 */

const find = (arr, searchText) => {
  return arr.filter((obj) => {
    const values = Object.values(obj);
    for (const value of values) {
      if (value.search(searchText) !== -1) {
        return true;
      }
    }
    return false;
  })
};

console.log(find([
  { name: "Apple", color: "red" },
  { name: "Banana", color: "yellow" },
  { name: "Orange", color: "orange" },
  { name: "Apple", color: "yellow" }
], "yellow"));
//Should return [{ name: "Banana", color: "yellow" }, { name: "Apple", color: "yellow" }]