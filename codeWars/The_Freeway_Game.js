/* 

Every day I travel on the freeway.

When I am more bored than usual I sometimes like to play the following counting game I made up:

As I join the freeway my count is 0
Add 1 for every car that I overtake
Subtract 1 for every car that overtakes me
Stop counting when I reach my exit
What an easy game! What fun!

Kata Task
You will be given

The distance to my exit (km)
How fast I am going (kph)
Information about a lot of other cars
Their time (relative to me) as I join the freeway. For example,
-1.5 means they already passed my starting point 1.5 minutes ago
2.2 means they will pass my starting point 2.2 minutes from now
How fast they are going (kph)
Find what is my "score" as I exit the freeway! 

*/


const freewayGame = function(distKmToExit, mySpeedKph, otherCars) {
  // Your code here
  const endTime = distKmToExit * 60 / mySpeedKph;
  let score = 0;
  for (const otherCar of otherCars) {
    if (distKmToExit * 60 / otherCar[1] + otherCar[0] < endTime && otherCar[0] > 0) score--;
    else if (distKmToExit * 60 / otherCar[1] + otherCar[0] > endTime && otherCar[0] < 0) score++;
  }
  return score;
}

const count = freewayGame(50.0, 130.0, [[-1.0, 120.0], [-1.5, 120.0]]);

console.log(count, 2)