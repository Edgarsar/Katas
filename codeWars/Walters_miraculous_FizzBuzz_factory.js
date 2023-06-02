/* 

The FizzBuzz factory
Walter was a normal engineer. He built FizzBuzz functions every day. 
You might have heard of them. They return "Fizz", if your number is divisible by 3, "Buzz",
if your number is divisible by 5, and "FizzBuzz" if your number is divisible by, well, both. 
For all other, boring numbers, the number itself was returned (but as a string, since Walter cared about types).

However, those machines were so practical and beneficial to the whole society, 
that everyone copied Walter's machines. So he came up with a new idea: 
he would sell a personal FizzBuzz factory! That would bring his competitors out of business!

Task
In this kata, you will get an array of unique numbers, paired with strings, like

[(3, "Fizz"), (5, "Buzz"), (15, "FizzBuzz")]

Your job is to return another function, 
that—given a number n—returns the appropriate string. 
How do you know the correct string? Well, 
it's the one paired with the largest key that still divides the number n!

Examples
const myFizz = fizzBuzzFactory([[3, "Fizz"], [5, "Buzz"], [15, "FizzBuzz"]])
myFizz(3)  === "Fizz"
myFizz(4)  === "4"
myFizz(5)  === "Buzz"
myFizz(15) === "FizzBuzz"

const console.log(myFooBar = )fizzBuzzFactory([[2, "Foo"], [4, "Bar"], [6, "FooBar"]])
console.log(myFooBar(1))  === "1"
console.log(myFooBar(2))  === "Foo"
console.log(myFooBar(4))  === "Bar"
console.log(myFooBar(6))  === "FooBar"
console.log(myFooBar(8))  === "Bar"
console.log(myFooBar(10)) === "Foo"
console.log(myFooBar(12)) === "FooBar"

*/


function fizzBuzzFactory(arr) {
  return function (n) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (n % arr[i][0] === 0) {
        return arr[i][1];
      }
    }
    return n + '';
  }
}

    
const myFizz = fizzBuzzFactory([[3, "Fizz"], [5, "Buzz"], [15, "FizzBuzz"]])
console.log(myFizz(3)) === "Fizz"
console.log(myFizz(4)) === "4"
console.log(myFizz(5)) === "Buzz"
console.log(myFizz(15)) === "FizzBuzz"


const myFooBar = fizzBuzzFactory([[2, "Foo"], [4, "Bar"], [6, "FooBar"]])
console.log(myFooBar(1)) === "1"
console.log(myFooBar(2)) === "Foo"
console.log(myFooBar(4)) === "Bar"
console.log(myFooBar(6)) === "FooBar"
console.log(myFooBar(8)) === "Bar"
console.log(myFooBar(10)) === "Foo"
console.log(myFooBar(12)) === "FooBar"