

function decimalToBinary(decimal) {
   let bin = ""
   while (decimal > 0) {
      // if modulo of number with 2 is ‘1’, append 1 in front of binary string. Otherwise append 0.
      if (decimal % 2 == 1) {
         bin = "1" + bin;
      } else {
         bin = "0" + bin;
      }
      // divide number by 2.
      decimal = Math.floor(decimal / 2);
   }
   return bin
}

// short --> Number(decimal).toString(2)

console.log(decimalToBinary(5))


function binaryToDecimal(binary) {

   return [...binary]
      .reverse()
      .map((e, i) => e === "1" ? Math.pow(2, i) : 0)
      .reduce((a, b) => a + b);
}

// short --> parseInt(binary, base);


console.log(binaryToDecimal("101"))