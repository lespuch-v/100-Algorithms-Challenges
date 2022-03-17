const sumNum = (number: string): number => {
    let total = 0
    for(let i = 0; i < number.length; i++){
        if(number[i] == "-"){
            total *= -1
        }else{
            total += parseInt(number[i])
        }

    }
    return total
}

console.log(sumNum("10"))
console.log(sumNum("99"))
console.log(sumNum("-32"))