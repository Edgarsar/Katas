/* 


In this Kata, you will be given a series of times at which an alarm sounds.
Your task will be to determine the maximum time interval between alarms. 
Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. 
The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm sounds now, it will not sound for another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". 
The max interval that the alarm will not sound is 11 hours and 40 minutes.
In the second example, the alarm sounds 4 times in a day. 

*/

function solve(arr) {

  // conditional: return '23:59' if only 1 time
  if (arr.length <= 1) {
    return '23:59'
  } else {

    // convert time to minutes
    // sort array largest to smallest
    let times = arr.map(item => (parseInt(item.slice(0, 2)) * 60) + parseInt(item.slice(3))).sort((a, b) => b - a)

    // find largest difference between pairs
    let interval = 0
    for (let i = 0; i <= arr.length; i++) {
      let difference = times[i] - times[i + 1]
      if (difference > interval) {
        interval = difference
      }
    }

    // check difference between latest and earliest times (add 24 hrs to earliest)
    let earliest = times[times.length - 1] + 1440
    let latest = times[0]
    if ((earliest - latest) > interval) {
      interval = (earliest - latest)
    }

    // subtract 1 minute
    let result = interval - 1

    // convert minutes to hours + minutes
    return ('' + Math.floor(result / 60)).padStart(2, '0') + ':' + ('' + (result % 60)).padStart(2, '0')

  }
}



console.log(solve(["14:51"]), "23:59");
console.log(solve(["23:00", "04:22", "18:05", "06:24"]), "11:40");
console.log(solve(["21:14", "15:34", "14:51", "06:25", "15:30"]), "09:10");