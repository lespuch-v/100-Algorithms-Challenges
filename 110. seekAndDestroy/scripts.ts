function seekAndDestroy(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(x => !arr2.includes(x));
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));