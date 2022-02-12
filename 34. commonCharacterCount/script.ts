function commonCharacterCount(s1: string, s2: string): number {
  const s1Chars: string[] = s1.split('');
  const s2Chars: string[] = s2.split('');
  const s1CharsCount = getCharList(s1Chars);
  const s2CharsCount = getCharList(s2Chars);
  let total = 0;

  for (const prop in s1CharsCount) {
    if (s2CharsCount.hasOwnProperty(prop)) {
      if (s2CharsCount[prop] < s1CharsCount[prop]) {
        total += s2CharsCount[prop];
      } else {
        total += s1CharsCount[prop];
      }
    }
  }
  return total;
}

function getCharList(chars: string[]): object {
  const wordCount = {};

  for (let i = 0; i < chars.length; i++) {
    if (wordCount.hasOwnProperty(chars[i])) {
      wordCount[chars[i]]++;
    } else {
      wordCount[chars[i]] = 1;
    }
  }
  return wordCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
