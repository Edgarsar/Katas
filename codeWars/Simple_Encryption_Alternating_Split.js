/* Implement a pseudo-encryption algorithm which given a string S and an integer N
 concatenates all the odd-indexed characters of S with all the even-indexed characters of S, 
 his process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314" 

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/




function encrypt(text, n) {

  if (!text || n <= 0) {
    return text;
  }
  let chars = text.split('');
  while (n > 0) {

    let even = chars.filter((v, i) => i % 2 === 0);
    let odd = chars.filter((v, i) => i % 2 !== 0);
    chars = [...odd, ...even];
    n--;
  }


  return chars.join('');

}


console.log(encrypt("This is a test!", 0) === "This is a test!");
console.log(encrypt("This is a test!", 1) === "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2) === "s eT ashi tist!");
console.log(encrypt("This is a test!", 3) === " Tah itse sits!");
console.log(encrypt("This is a test!", 4) === "This is a test!");
console.log(encrypt("This is a test!", -1) === "This is a test!");
console.log(encrypt("This kata is very interesting!", 1) === "hskt svr neetn!Ti aai eyitrsig");