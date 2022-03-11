// function houseNumbersSum(inputArray: number[]): number {
//     const totalNumbers = []
//     let sum = 0
    
//     for(let i = 0; i < inputArray.length; i++){
//         if (inputArray[i] === 0){
//             return sum
//         }
//         sum += inputArray[i]
//     }
//     return sum

// }

// console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
// console.log(houseNumbersSum([1,2,3,0,5,1,2,3,5,]));

const houseNumbersSum = (inputArray: number[]): number => {
    let total = 0


    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] === 0){
            return total
        }else{
            total += inputArray[i]
        }
    }

}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
console.log(houseNumbersSum([1,2,3,0,5,1,2,3,5,]));
