//Create a function named squareCode that will receive a message, and return the secret square code version of the message.


const squareCode = function (message) {
  let noSpaces = message.replace(/\s/g, '');
  const math = Math.ceil(Math.sqrt(noSpaces.length));

  let result = '';

  for (let i = 0; i < math; i++) {

    for (let j = i; j < noSpaces.length; j += math) {

      result += noSpaces[j];
    }
    result += ' ';
  }

  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

// output

// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau