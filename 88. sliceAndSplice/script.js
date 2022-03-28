const elementSwap = (arr1, arr2, n) => {
    let localCopy = arr2.slice();
    console.log(localCopy);
    for (let i = 0; i < arr1.length; i++) {
        localCopy.splice(n, 0, arr1[i]);
        n++
    }
    return localCopy;
}
console.log(elementSwap([1, 2, 3], [4, 5, 6], 1));