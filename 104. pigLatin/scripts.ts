function pigLatin(str: string): string {
  const words = str.split(' ');
  const result = words.map((word) => {
    const firstLetter = word[0];
    const rest = word.slice(1);
    return `${rest}${firstLetter}ay`;
  });
  return result.join(' ');
}

console.log(pigLatin('glove'));
console.log(pigLatin('eight'));
console.log(pigLatin('Ahoj'));


//--------------------------------------------------


function pigLatin2(str: string): string {
  const letters = str.split('');
  const voewelsRegEx = /[aeiou]/i;

  if (voewelsRegEx.test(letters[0])) {
    return `${str}way`;
  }

  while (true) {
    if (!voewelsRegEx.test(letters[0])) {
      letters.push(letters.splice(0, 1)[0]);
    } else {
      break;
    }
  }
  str = letters.join('') + 'ay';

  return str;
}

console.log(pigLatin2('glove'));
console.log(pigLatin2('eight'));
console.log(pigLatin2('Ahoj'));
