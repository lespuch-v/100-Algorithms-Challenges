function flattenArray(arr: any[]): any[] {
    return arr.flat(3)
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));

// ReDO this one
function recursiveFlattenArray(arr: any[]): any[]{
    const oneArray = []

    flatten (arr)

    function flatten(arr: any[]){
        arr.forEach((element)=> {
            if(Array.isArray(element)){
                flatten(element)
            }else{
                oneArray.push(element)
            }
        })
    }
    return oneArray
}

console.log(recursiveFlattenArray([[["a"]], [["b"]]]));
console.log(recursiveFlattenArray([1, [2], [3, [[4]]]]));
