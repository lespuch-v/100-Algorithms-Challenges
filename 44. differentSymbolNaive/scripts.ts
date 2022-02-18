export function differentSymbolsNaive(s: string): number {
  let count = 0;
  const uniqueLetters = [];

  for (let i = 0; i < s.length; i++) {
    if (!uniqueLetters.includes(s[i])) {
      uniqueLetters.push(s[i]);
      count++;
    }
  }

  return count;
}

console.log(differentSymbolsNaive('cabca'));
console.log(differentSymbolsNaive('hello world'));

export function differentSymbolsNaive1(s: string): number {
  const uniqueChars = new Set()
  const inputChars = s.split("")

  inputChars.forEach((chars) => {
      uniqueChars.add(chars)
  })

  return uniqueChars.size
}

console.log(differentSymbolsNaive1('cabca'));
// console.log(differentSymbolsNaive1('hello world'));
