// create an awesome function

function makeArrayConsecutive2(statues: number[]): number {
    let max = Math.max(...statues);
    let min = Math.min(...statues)
    let count = 0

    for(let i = min; i < max;i++){
        if(!statues.includes(i)){
            count++
        }

    }
    return count

}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));







