
export function chunkyMonkey2(arr: any[], size: number): any[][] {
  const one = [];
  let count = 0;

  while (count < arr.length) {
    one.push(arr.slice(count, (count += size)));
  }

  return one;
}

console.log(chunkyMonkey2(['a', 'b', 'c', 'd'], 2));
console.log(chunkyMonkey2([0, 1, 2, 3, 4, 5], 4));
