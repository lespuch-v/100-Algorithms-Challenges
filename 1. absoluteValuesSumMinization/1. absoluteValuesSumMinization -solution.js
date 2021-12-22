function myFunk(array){
    const isEvent = array.length % 2 === 0
    console.log(array[Math.floor(array.length /2 )])
    console.log(array[array.length / 2 - 1])
    return isEvent ? array[array.length / 2 - 1] : array[Math.floor(array.length / 2)]
}

console.log(myFunk([2,4,7,6]))   
console.log(myFunk([2,4,7,6,7,6,6]))
