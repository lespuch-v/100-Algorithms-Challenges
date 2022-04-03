const lineNumber = (arr) =>{
    const newArr = []
    let counter = 1

    for(let i = 0; i < arr.length;i++){
        newArr.push(`${counter}: ` + arr[i])
        counter++
    }

    return newArr
}

console.log(lineNumber(["a", "b", "c"]))

// use map function
function lineNumber2(array){
    return array.map((item, index) =>{
        return `${index+1}: ${item}`
    })
}

console.log(lineNumber2(["a", "b", "c"]))