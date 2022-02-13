function containsDuplicates(a: number[]): boolean {
  return new Set(a).size !== a.length;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));

function containsDuplicates1(a: number[]): boolean {
  a = a.sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      return true;
    }
  }

  return false;
}

console.log(containsDuplicates1([1, 2, 3, 1]));
console.log(containsDuplicates1([3, 1]));
