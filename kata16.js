const makeCase = function (input, caseStyle) {
  let result = input;

  let arr = [];

  if (typeof caseStyle === "string") {
    arr = caseStyle.split();
  } else {
    arr = caseStyle;
  }
  for (let n = 0; n < arr.length; n++) {
    if (arr[n] === "camel") {
      result = camelCase(input);
    } else if (arr[n] === "pascal") {
      result = pascalCase(result);
    } else if (arr[n] === "snake") {
      result = snakeCase(result);
    } else if (arr[n] === "kebab") {
      result = kebabCase(result);
    } else if (arr[n] === "title") {
      result = titleCase(result);
    } else if (arr[n] === "vowel") {
      result = vowelCase(result);
    } else if (arr[n] === "consonant") {
      result = consonantCase(result);
    } else if (arr[n] === "upper") {
      result = upper(result);
    } else if (arr[n] === "lower") {
      result = lower(result);
    } else {
      result = result;
    }
  }
  return result;
};

const camelCase = function (input) {

  let splits = input.split(' ');
  let newString = "";

  for (let i = 0; i < splits.length; i++) {

    let words = splits[i];
    let firstLetter = words.charAt(0).toUpperCase();
    let restOfWord = words.slice(1);


    if (i === 0) {
      newString += words
    } else {
      newString += firstLetter + restOfWord;
    }

  }
  return newString;
};

const pascalCase = function (input) {
  const splitInput = input.split(" ");

  if (splitInput.length <= 1) {
    return input;
  }

  return splitInput.map((e, i) => {
    if (i === 0) {

    }
    return e.charAt(0).toUpperCase() + e.substring(1, e.length).toLowerCase();
  }).join("");
};


const snakeCase = function (input) {
  return input.split(" ").join("_");
};


const kebabCase = function (input) {
  return input.split(" ").join("-");
};

const titleCase = function (input) {
  return input.split(" ").map(e => e.charAt(0).toUpperCase() + e.substring(1, e.length).toLowerCase()).join(" ");
}

const vowelCase = function (input) {
  let result = "";
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      result += input[i];
    } else
      result += input[i].toUpperCase();
  }
  return result;
};


const consonantCase = function (input) {
  let result = "";
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < input.length; i++) {
    if (!vowels.includes(input[i])) {
      result += input[i];
    } else
      result += input[i].toUpperCase();
  }
  return result;
};

const upper = function (string) {

  return string.toUpperCase();
};

const lower = function (string) {

  return string.toLowerCase();
};





console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

