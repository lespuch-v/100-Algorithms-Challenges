// Redo this challenge
function digitDegree(n: number):number{
    let count = 0
    let currentNumber = n
    if(n<=){
        return count
    }else{
        while(true)
        count++
        currentNumber = getDigit(currentNumber)
        if(currentNumber <=9){
            break
        }
    }

    return count
}

function getDigit(num: number){
    const nums: number[] = num.toString().split("").map(item => parseInt(item))

    return nums.reduce((a, b) =>{
        return a + b

    })
    
}