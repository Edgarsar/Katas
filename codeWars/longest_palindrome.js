/* Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0 */

const longestPalindrome = (s) => {
  let isPalindrome = str => str.split('').reverse().join('') === str;
  
  for(let i = s.length; i >= 0; i--) {
    for(let j = s.length - i; j >= 0; j--){
      if( isPalindrome( s.substr(j, i) ) ){
        return i;
      }
    }
  }
}


console.log(longestPalindrome("a"), 1)
console.log(longestPalindrome("aa"), 2)
console.log(longestPalindrome("baa"), 2)
console.log(longestPalindrome("aab"), 2)
console.log(longestPalindrome("baabcd"), 4)
console.log(longestPalindrome("baablkj12345432133d"), 9)