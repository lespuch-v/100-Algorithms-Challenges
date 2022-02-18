// export function extractEachKth(inputArray: number[], k: number): number[] {
//     let count = 1
//     const arr = []

//     for(let i = 0; i < inputArray.length; i++){
//         if(count != 3){
//             arr.push(inputArray[i])
//             count++
//         }else if(count === 3){
//             count = 1
//         }
//     }

//     return arr
// }

export function extractEachKth(inputArray: number[], k: number): number[] {
    return inputArray.filter((item,index) => (index + 1) %k !==0)
}


console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
