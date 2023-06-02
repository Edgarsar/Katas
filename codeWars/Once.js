/* 

You'll implement once, a function that takes another function as an argument, 
and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return undefined).

For example:

logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect

*/



function once(fn) {
  let call = true;
  return function () {
    if (call) {
      call = false;
      return fn(...arguments);
    }
  }
}



let logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect

