export function confirmEnding(str: string, target: string) {
  const word = str.endsWith(target);
  return word;
}

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding('Open sesame', 'pen'));
console.log(confirmEnding('Hello World', 'World'));
