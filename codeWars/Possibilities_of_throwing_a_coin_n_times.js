/* 
In this kata you will be given an integer n, which is the number of times that is thown a coin.
 You will have to return an array of string for all the possibilities (heads[H] and tails[T]). Examples:

coin(1) should return {"H", "T"}
coin(2) should return {"HH", "HT", "TH", "TT"}
coin(3) should return {"HHH", "HHT", "HTH", "HTT", "THH", "THT", "TTH", "TTT"}

When finished sort them alphabetically.


INPUT:
0 < n < 18

 */

function coin(n) {
  return n == 1 ? ['H', 'T'] : [...coin(n - 1).map(f => 'H' + f), ...coin(n - 1).map(f => 'T' + f)]
}

console.log(coin(1), ["H", "T"]);
console.log(coin(2), ["HH", "HT", "TH", "TT"]);
console.log(coin(3), ["HHH", "HHT", "HTH", "HTT", "THH", "THT", "TTH", "TTT"]);