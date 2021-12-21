function funk1(a, b){
    return a + b
}

console.log(funk1(2,3))

function funk2(...values){
    let counter = 0
    for(let i = 0; i < values.length; i++){
        counter += values[i] 
        console.log(values[i])
    }
    return counter
}

console.log(funk2(1,2,3,4,5,6,7))