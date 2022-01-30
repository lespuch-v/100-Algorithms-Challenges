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
