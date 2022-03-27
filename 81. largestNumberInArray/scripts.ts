function largestOfFour(arr: number[][]): number[] {
  const maxNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    maxNumbers.push(Math.max(...[].concat(...arr[i])));
  }
  return maxNumbers;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
