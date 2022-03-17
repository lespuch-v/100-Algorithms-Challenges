export function largestOfFour(nums: number[][]): number[] {
  const arr = [];

  for (let numbers of nums) {
    let largestNumber = 0;
    for (let number of numbers) {
      largestNumber = largestNumber < number ? number : largestNumber;
    }
    arr.push(largestNumber);
  }

  return arr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
);
