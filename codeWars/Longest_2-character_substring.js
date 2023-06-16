/* 

Find the longest substring within a string that contains at most 2 unique characters.

substring("a") => "a"
substring("aaa") => "aaa"
substring("abacd") => "aba"
substring("abacddcd") => "cddcd"
substring("cefageaacceaccacca") => "accacca"
This function will take alphanumeric characters as input.

In cases where there could be more than one correct answer,
the first string occurrence should be used. For example, substring('abc') should return 'ab' instead of 'bc'.

Although there are O(N^2) solutions to this problem, you should try to solve this problem in O(N) time.

This question is much harder than some of the other substring questions.
It's easy to think that you have a solution and then get hung up on the implementation.

*/

function substring(s) {
  let i = 0, j = 1, r = ''
  while (j <= s.length) {
    let t = s.slice(i, j)
    console.log("new set", new Set(t))
    if (new Set(t).size < 3 && t.length > r.length) r = t
    else i++
    j++
  }
  return r
}

console.log(substring(""), "", "substring('') should return ''");
console.log(substring("a"), "a", "substring('a') should return 'a'");
console.log(substring("aa"), "aa", "substring('aa') should return 'aa'");
console.log(substring("aaa"), "aaa", "substring('aaa') should return 'aaa'");
console.log(substring("ab"), "ab", "substring('ab') should return 'ab'");
console.log(substring("aba"), "aba", "substring('aba') should return 'aba'");
console.log(substring("abc"), "ab", "substring('abc') should return 'ab'");
console.log(substring("abcba"), "bcb", "substring('abcba') should return 'bcb'");
console.log(substring("bbacc"), "bba", "substring('bbacc') should return 'bba'");
console.log(substring("ccddeeff"), "ccdd", "substring('ccddeeff') should return 'ccdd'");
console.log(substring("112233"), "1122", "substring('112233') should return '1122'");
console.log(substring("aabb112222ccccdef"), "2222cccc", "substring('aabb112222ccccdef') should return '2222cccc'");
console.log(substring("11111"), "11111", "substring('11111') should return '11111'");