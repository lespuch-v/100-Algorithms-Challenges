export function depositProfit(
  deposit: number,
  rate: number,
  threshold: number
): number {
  let bankAcc = deposit;
  let count = 0;

  while (bankAcc < threshold) {
    bankAcc += (bankAcc / 100) * 20;
    count++;
  }
  console.log(count);
  return bankAcc;
}

console.log(depositProfit(100, 20, 170));
