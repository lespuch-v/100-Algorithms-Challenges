function sumOddFibonacciNums(num: number): number {
    let result = 0
    let previousNumber = 0
    let currentNumber = 1

    while (currentNumber <= num) {
        if (currentNumber % 2 !== 0) {
            result += currentNumber
        }
        let temp = currentNumber
        currentNumber = currentNumber + previousNumber
        previousNumber = temp
    }
    


    return result
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));