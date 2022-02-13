function confirmEnding(str: string, target: string) {
  const word = str.endsWith(target);
  return word;
}

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding('Open sesame', 'pen'));
console.log(confirmEnding('Hello World', 'World'));

function confirmEnding1(str: string, target: string) {
  const start = str.length - target.length
  console.log(start)
  

  return str.substring(start, str.length) === target
}
console.log(confirmEnding1('Abstraction', 'action'));
console.log(confirmEnding1('Open sesame', 'pen'));
console.log(confirmEnding1('Hello World', 'World'));
