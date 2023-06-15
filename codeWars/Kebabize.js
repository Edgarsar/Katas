/* 

Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters
 
*/


function kebabize(str) {
  return str
    .replace(/\d/g, "")
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(kebabize('myCamelCasedString'), 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
console.log(kebabize('CAMEL'), "c-a-m-e-l");
