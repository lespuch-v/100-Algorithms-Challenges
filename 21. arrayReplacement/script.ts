const arr = [1, 2, 3, 2, 2, 8, 1, 9]

function array_element_replace(arr:number [], old_value: number, new_value:number):number[] {
    const newArray = []


    for(let i = 0; i < arr.length; i++){
        if(arr[i]== old_value){
            value = arr[i]
            newArray.push(new_value)
        }else{
            newArray.push(arr[i])
        }
    }
    return newArray

}

console.log(array_element_replace(arr, 2, 42))