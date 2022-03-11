function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let count = 0
    let equation = 0

    while(equation < desiredHeight){
        count++
        equation += upSpeed
        
    }
    if(equation < desiredHeight){
        equation -= downSpeed
    }
    return count
}

console.log(growingPlant(100, 10, 910))
console.log("hello")
