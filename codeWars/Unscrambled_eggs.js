/* 

Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant.
You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
            "B---eg---in---n---er---" 
            
            */

function unscrambleEggs(word) {
  return word.split("egg").join("");
}

//RegEX
const unscrambleEggs = word => word.replace(/egg/g, '');


console.log(unscrambleEggs("ceggodegge heggeregge"), "code here");

console.log(unscrambleEggs("FeggUNegg KeggATeggA"), "FUN KATA");