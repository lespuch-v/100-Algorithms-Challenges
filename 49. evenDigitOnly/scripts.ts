export function evenDigitsOnly(n: number): boolean {
  const values = [];

  const numbers = String(n)
    .split('')
    .forEach((item) => {
      if (parseInt(item) % 2 == 0) {
        values.push(true);
      } else {
        values.push(false);
      }
    });

  return values.every((item) => item === true);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
console.log(evenDigitsOnly(326547977));
