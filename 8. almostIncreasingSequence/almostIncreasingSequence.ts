const seaquence1: number[] = [1, 3, 2, 1];
const seaquence2: number[] = [1, 3, 2];
const seaquence3: number[] = [1,3,4,5]

function almostIncreasingSequence(arr: number[]):boolean{
    let count = 0

    for(let i = 0; i < arr.length; i++){
        //current   //next 
        if(arr[i] <= arr[i-1]){
            count++
            if(arr[i] <= arr[i -2] && arr[i+1] <=arr[i-1]){
                return false
            }
        }
    }

    return count <= 1
}




console.log(almostIncreasingSequence(seaquence1));
console.log(almostIncreasingSequence(seaquence2));
console.log(almostIncreasingSequence(seaquence3));




























// function almostIncreasingSequence(arr: number[]): boolean {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {

//     if (arr[i] <= arr[i - 1]) {
//       count++;
//       if (arr[i] <= arr[i - 2] && arr[i + 1] <= arr[i - 1]) {
//         return false;
//       }
//     }
//   }

//   return count <= 1;
// }