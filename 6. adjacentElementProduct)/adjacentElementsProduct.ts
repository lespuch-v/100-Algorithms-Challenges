const inputArray1:number[] = [3, 6, -2, -5, 7, 3]
const inputArray2:number[] = [1,2,3,4]



function adjacentElement(numbers: number[]): number{
    let counter1: number = 0

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] * numbers[i+1] > counter1){
            counter1 = numbers[i] * numbers[i+1]
        }
    }
    
    return counter1
}

console.log(adjacentElement(inputArray1))
console.log(adjacentElement(inputArray2))