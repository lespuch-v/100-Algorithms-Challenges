function findLongestWordLength(str: string): number {
  let stringAwesome = str.split(' ');
  let wordLength = 0;

  for (let i = 0; i < stringAwesome.length; i++) {
    if (stringAwesome[i].length > wordLength) {
      wordLength = stringAwesome[i].length;
    }
  }
  return wordLength;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog ')
);
