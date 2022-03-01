function factorializeANumber(num: number): number {
    let result: number = 1

    for (let i = 0; i < num; i++) {
        result += result*i
    }
    return result

}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
console.log(factorializeANumber(20));