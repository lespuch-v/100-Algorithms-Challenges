const rangeOfNumbers = (startNum: number, endNum: number): number[] => {
    return startNum === endNum ? [startNum] : [...rangeOfNumbers(startNum, endNum -1), endNum]
}

console.log(rangeOfNumbers(1,5))