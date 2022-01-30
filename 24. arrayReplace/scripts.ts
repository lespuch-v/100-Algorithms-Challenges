const inputArray = [1, 2, 1];

function arrayReplace(
  arr: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  const replacedElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elemToReplace) {
      replacedElements.push(substitutionElem);
    } else {
      replacedElements.push(arr[i]);
    }
  }

  return replacedElements;
}

console.log(arrayReplace(inputArray, 1, 3));
console.log(arrayReplace(inputArray, 2, 99));


// How professional would do it!

function arraReplace(inputArr: number[], elementToReplace: number, substitutionElem: number):number[]{
    inputArr.forEach((element, index) => {
        if(element === elementToReplace){
            inputArr[index] = substitutionElem
        }
    })
    return inputArr
}

console.log(arraReplace([1,2,3], 1, 9))