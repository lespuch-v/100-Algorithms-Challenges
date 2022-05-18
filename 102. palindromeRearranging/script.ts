function palindromeRearranging(inputString: string): boolean {
  const characterArray = inputString.split('');
  const letterObject = {};
  let oddCount = 0;

  for (let i = 0; i < characterArray.length; i++) {
    if (letterObject.hasOwnProperty(characterArray[i])) {
      letterObject[characterArray[i]]++;
    } else {
      letterObject[characterArray[i]] = 1;
    }
  }

  for (let key in letterObject) {
    if (letterObject[key] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount <= 1 ?  false : true;
}

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('acac'));
console.log(palindromeRearranging('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));
