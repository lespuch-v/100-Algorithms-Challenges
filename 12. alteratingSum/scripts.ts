function alteratingSums(numArray: number[]):number[]{
    let values1 = []
    let values2 = []
    let num1 = 0
    let num2 = 0

    for(let i = 0; i < numArray.length; i++){
        if(i %2 == 0){
            values1.push(numArray[i])
        }else{
            values2.push(numArray[i])
        }
    }
    values1.forEach(element => {
        num1 += element
    })
    values2.forEach(item => {
        num2 += item
    })

    return [num1, num2]
}

console.log(alteratingSums([50, 60, 60, 45, 70]))
