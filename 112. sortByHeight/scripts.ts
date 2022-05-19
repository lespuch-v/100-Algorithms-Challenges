function sortByHeight(a: number[]): number[] {
    const array2 = a.filter((element) => {
        if(element !== -1) {
            return element !== -1
        }
    }).sort((a, b) => {
        return a - b
})

let indexValue = 0
for( let i = 0; i < a.length; i++) {
    if(a[i] !== -1) {
        a[i] = array2[indexValue]
        indexValue++
    }
}



return a 
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));