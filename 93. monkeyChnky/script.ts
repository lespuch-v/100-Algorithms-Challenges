// create a function that takes an array and size array and returns a new array with the elements in the array in groups of the size

const monkeyChnky = (arr:number[] | string[], size:number):any[] => {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
    }

console.log(monkeyChnky(["a", "b", "c", "d"], 2))