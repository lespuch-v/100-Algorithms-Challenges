function getMaxNumber(values: number[]): number{
    let num1 = 0
    let num2 = 0
    for(let i = 0; i < values.length; i++){
        num1 = values[i] + values[i + 1]
        if( num1 > num2){
            num2 = num1
        }
    }

    return num2
}

console.log(getMaxNumber([2, 3, 5, 1, 6]))
console.log(getMaxNumber([2, 3, 5, 1, 6, 1, 2]))