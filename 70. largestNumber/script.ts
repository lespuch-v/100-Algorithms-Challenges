// export function largestNumber(n: number): number {
//   let numbers = "";
//   for (let i = 0; i < n; i++) {
//       numbers +="9"
//   }
//   return parseInt(numbers)
// }

// console.log(largestNumber(2));
// console.log(largestNumber(3));
// console.log(largestNumber(6));

//Repeat usage

export function largestNumber(n: number): number {
  return parseInt('9'.repeat(n));
}

console.log(largestNumber(2));
console.log(largestNumber(3));
console.log(largestNumber(6));
