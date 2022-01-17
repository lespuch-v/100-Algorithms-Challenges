function arrayMaxAdjDifference(inputArray: number[]):number{
    let maximumDifference = Math.abs(inputArray[0] - inputArray[1])
    console.log(maximumDifference)

    for(let i = 0; i < inputArray.length; i++){
        let absDifference = Math.abs(inputArray[i - 1] - inputArray[i])
        console.log(absDifference)
        if(absDifference > maximumDifference){
            maximumDifference = absDifference
        }
    }


    return maximumDifference
}

console.log(arrayMaxAdjDifference([2, 4, 1, 0]))

