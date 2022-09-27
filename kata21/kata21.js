let prompt = require("prompt-sync")({ sigint: true });

const answer = Math.ceil(Math.random() * 100);
let guess = undefined;
let arr = [];

while (guess !== answer) {

  console.log('Guess a number: ');
  guess = Number(prompt('> '));
  if (arr.includes(guess)) {
    console.log('Already guessed.');
    continue;

  } else if (!isNaN(guess)) {
    arr.push(guess);
  }

  if (guess > answer) {
    console.log('Too High!');

  } else if (guess < answer) {
    console.log('Too Low!');

  } else if (isNaN(guess)) {
    console.log('Not a number! Try again!');

  } else {
    console.log(`You got it! You took ${arr.length} attempts!.`);
  }

};