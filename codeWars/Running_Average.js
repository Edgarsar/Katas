/* 

Create a function runningAverage() that returns a callable function object.
 Update the series with each given value and calculate the current average.

rAvg = runningAverage();
rAvg(10) = 10.0;
rAvg(11) = 10.5;
rAvg(12) = 11;
 */

function runningAverage() {
  let accumulator = 0;
  let size = 0;

  return function (number) {
    accumulator += number;
    size += 1;
    console.log("accumulator", accumulator)

    console.log("size", size)

    return Math.round(accumulator / size * 100) / 100;
  };
}


const rAvgSol = runningAverage();
console.log(rAvgSol(10), 10);
console.log(rAvgSol(11), 10.5);
console.log(rAvgSol(12), 11);
console.log(rAvgSol(13), 11);

