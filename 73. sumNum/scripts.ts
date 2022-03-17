const sumNum = (number: string): number => {
    let total = 0
    for(let i = 0; i < number.length; i++){
        total += parseInt(number[i])
    }
    return total
}

console.log(sumNum("10"))
console.log(sumNum("111"))
console.log(sumNum("99"))