export function characterParity(symbol: string): string {
  if (isNaN(parseInt(symbol)) != true) {
    if (parseInt(symbol) % 2 == 0) {
      return 'even';
    } else {
      return 'odd';
    }
  } else {
    return 'not a number';
  }
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('a'));
console.log(characterParity('3'));
console.log(characterParity('2'));
console.log(characterParity('l'));
console.log(characterParity('p'));


// Proffesional Solution
export function characterParity2(symbol: string): string {
    const justResult = parseInt(symbol)

    return isNaN(justResult) ? "not a number" : justResult %2 == 0 ? "even" : "odd"
}
