const a = [50, 60, 60, 45, 70]
const b = [1, 2, 3]
const c = [1, 1, 1, 1]

function sortThemAll(values: number[]): number[]{
    const teamA = []
    const teamB = []
    let counterA = 0
    let counterB = 0
        
    for(let i = 0; i < values.length; i++){
        if(i %2 == 0){
            teamA.push(values[i])
        }else{
            teamB.push(values[i])
        }

    }
    for(let i = 0; i < teamA.length; i++){
        counterA += teamA[i]
    }
    for(let i = 0; i < teamB.length; i++){
        counterB += teamB[i]
    }
    return [counterA, counterB]
}


console.log(sortThemAll(a))
console.log(sortThemAll(b))
console.log(sortThemAll(c))
