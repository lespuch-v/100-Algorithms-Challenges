const arrSort = (arr, num) => {
    const sortedArr = arr.sort((a, b) => a - b)
    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i] > num) {
            return i
        }
    }

    return sortedArr.length


}

console.log(arrSort([40, 60], 50))