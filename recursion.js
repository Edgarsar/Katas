// counting all even numbers from 0 to 12 using recursion

function countEvenToTwelve(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number + 2)
  }
}

countEvenToTwelve(0);