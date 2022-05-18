// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

// Example

// reverseAString('hello') returns 'olleh';
// reverseAString('Howdy') returns 'ydwoH';
// Hints

function reverseAString(str: string): string {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));

// ---------------------------------------------
function reverseAString2(str: string): string {
    return str.split("").reverse().join("");
  }
  
  console.log(reverseAString2('hello'));
  console.log(reverseAString2('Howdy'));
  