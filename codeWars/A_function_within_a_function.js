/* Given an input n, write a function always that returns a function 
which returns n. 


const three = always(3);
three(); // returns 3 */


const always = (n) => () => n;
