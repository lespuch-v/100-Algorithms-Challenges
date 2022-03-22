const returnNum = (num) => {
    if(num <=0) return num
    return [num, ...returnNum(num-1)]
}

console.log(returnNum(5))



