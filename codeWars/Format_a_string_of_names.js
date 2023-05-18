/* 

Given: an array containing objects of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
returns 'Bart'

list([])
returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

*/

const list = (names) => {

  if(names.length === 1){
    return names[0].name;
  }
  
  const str = names.reduce((str, obj, idx) => {

    if (idx === names.length - 1) {
      str += "& "
    }


    str += obj.name + ", "



    return str
  }, "")

  const lastCommaRemoved = str.replace(/(,)[^,]*$/, '');
  const lastIndex = lastCommaRemoved.lastIndexOf(',');

  return lastCommaRemoved.replace(/./g, function (character, index) {
    if (lastIndex !== -1 && index === lastIndex)
      return '';
    return character;
  })

};


console.log(list([
  { name: 'Bart' },
  { name: 'Lisa' },
  { name: 'Maggie' },
  { name: 'Homer' }, { name: 'Marge' }
]), 'Bart, Lisa, Maggie, Homer & Marge');

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]), 'Bart, Lisa & Maggie',);
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa');
console.log(list([{ name: 'Bart' }]), 'Bart');
console.log(list([]), '');