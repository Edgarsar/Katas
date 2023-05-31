/* 

In this kata you parse RGB colors represented by strings. 
The formats are primarily used in HTML and CSS. 
Your task is to implement a function which takes a color as a string
and returns the parsed color as a object (see Examples).

Input:
The input string represents one of the following:

6-digit hexadecimal - "#RRGGBB"
e.g. "#012345", "#789abc", "#FFA077"
Each pair of digits represents a value of the channel in hexadecimal: 00 to FF

3-digit hexadecimal - "#RGB"
e.g. "#012", "#aaa", "#F5A"
Each digit represents a value 0 to F which translates to 2-digit hexadecimal: 0->00, 1->11, 2->22, and so on.

Preset color name
e.g. "red", "BLUE", "LimeGreen"
You have to use the predefined map PRESET_COLORS.
The keys are the names of preset colors in lower-case]
and the values are the corresponding colors in 6-digit hexadecimal (same as 1. "#RRGGBB").

Examples:
parseHTMLColor('#80FFA0');    // => { r: 128, g: 255, b: 160 }
parseHTMLColor('#3B7');       // => { r: 51,  g: 187, b: 119 }
parseHTMLColor('LimeGreen');  // => { r: 50,  g: 205, b: 50  }

*/

function parseHTMLColor(str) {
  if (str[0] !== '#') str = PRESET_COLORS[str.toLowerCase()];
  str = str.replace('#', '');
  if (str.length === 6) {
    return {
      r: parseInt(str.slice(0, 2), 16),
      g: parseInt(str.slice(2, 4), 16),
      b: parseInt(str.slice(-2), 16)
    }
  } else {
    let [r, g, b] = str.split``.map(e => e + e);
    return {
      r: parseInt(r, 16),
      g: parseInt(g, 16),
      b: parseInt(b, 16),
    }
  }
}