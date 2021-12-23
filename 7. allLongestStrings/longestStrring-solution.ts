const inputArray0: string[] = ["aba", "aa", "ad", "vcd", "aba"];
const inputArray1: string[] = ["gg", "Ahoj", "sskl"];

function myfunk(arr: string[]):string[]{
    let longestWord = 0
    const newArr = []

    arr.forEach(item => {
        if(item.length > longestWord){
            longestWord = item.length
        }
    })

    arr.forEach(item => {
        if(item.length === longestWord){
            newArr.push(item)
        }
    })

    console.log(longestWord)
    console.log(newArr)


    return newArr
}

console.log(myfunk(inputArray0));
console.log(myfunk(inputArray1));


