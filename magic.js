/*
 Create a function called magic which accepts an object
 and returns a new object where the keys have become the values and the values have become the keys.

Example:

    magic({
      firstName: "Michael",
      lastName: "Jackson"
    });

    should return:
    {
       Michael: "firstName",
       Jackson: "lastName"
    } 
    */


const magic = (obj) => {
  return Object.keys(obj).reduce((aggr, key) => {
    aggr[obj[key]] = key;

    return aggr
  }, {})

};

console.log(magic({
  firstName: "Michael",
  lastName: "Jackson"
})
);