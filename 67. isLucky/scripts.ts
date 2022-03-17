export function isLucky(n: number): boolean {
  // ticked numbers are even.
  // is LUCKY - sum of the first half is equal to the second half
  // determine if the ticked is lucky or NOT.

  const luckyN = n.toString();
  const half = luckyN.length / 2;
  const luckyString = n.toString().split('');

  const firstHalf = luckyN.substring(0, half);
  const secondHalf = luckyN.substring(half, luckyN.length);

  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < firstHalf.length; i++) {
    num1 += parseInt(firstHalf[i]);
  }
  for (let i = 0; i < secondHalf.length; i++) {
    num2 += parseInt(secondHalf[i]);
  }

  return num1 === num2
}

console.log(isLucky(1230));
console.log(isLucky(239017));
console.log(isLucky(224422));
